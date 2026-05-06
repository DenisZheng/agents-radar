# OpenClaw Ecosystem Digest 2026-04-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-23 00:18 UTC

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

# OpenClaw Project Digest — 2026-04-23

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large, active community and rapid development pace. The project released **v2026.4.21** yesterday, which unfortunately introduced a **critical bundled dependency regression** affecting multiple channel plugins (Feishu, WhatsApp, Telegram, Nostr). The team is actively firefighting with multiple fix PRs and rapid issue closures. Despite the regression, the 295 merged/closed PRs versus 205 open suggests strong maintainer throughput. The community is particularly vocal about cross-platform support gaps and real-time voice capabilities.

---

## 2. Releases

### [v2026.4.21](https://github.com/openclaw/openclaw/releases/tag/v2026.4.21) — *Released 2026-04-21*

| Aspect | Details |
|--------|---------|
| **Image Generation** | Default provider upgraded to `gpt-image-2`; 2K/4K size hints now advertised in docs and tool metadata |
| **Fixes** | `Plugins/doctor`: repaired bundled plugin runtime dependencies |

**⚠️ CRITICAL REGRESSION IDENTIFIED:** Despite the release notes claiming dependency fixes, v2026.4.21 **introduced widespread bundled runtime dependency failures**. Multiple channel plugins fail with `MODULE_NOT_FOUND` errors, particularly affecting global npm installations. See [Bugs & Stability](#5-bugs--stability) for full impact.

**Migration Note:** Users upgrading from 2026.4.15 via `openclaw update` may encounter broken installations. Workaround: manual `npm rebuild` or wait for hotfix.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Author | Summary | Impact |
|:---|:-------|:--------|:-------|
| [#70329](https://github.com/openclaw/openclaw/pull/70329) | PratikRai0101 | Lock Pi catalog coverage for OpenCode Go models | Prevents `model_not_found` runtime failures for valid models like `opencode-go/kimi-k2.6` |
| [#70214](https://github.com/openclaw/openclaw/pull/70214) | ronimagendzo89-spec | **CLOSED as duplicate** — Agent bootstrap hang on Raspberry Pi 5 (~60s, 140% CPU) | Identified regression in 2026.4.21 bootstrap; fix likely elsewhere |
| [#70090](https://github.com/openclaw/openclaw/pull/70090) | pashpashpash | Guardian-reviewed Codex app-server defaults experiment | Tests `workspace-write` + `approvalPolicy: "on-request"` vs. unchained mode |
| [#70313](https://github.com/openclaw/openclaw/pull/70313) | vincentkoc | Codex prompt/compaction hooks parity | Closes gap where native Codex runs skipped `before_prompt_build`, `before_compaction`, `after_compaction` |
| [#69976](https://github.com/openclaw/openclaw/pull/69976) | chen-zhang-cs-code | Ignore tool descriptions in Codex thread fingerprint | Prevents unnecessary thread rebindings when only help text changes |
| [#70340](https://github.com/openclaw/openclaw/pull/70340) | Lucenx9 | Clarify Codex permission approvals | Better UX for `network`/`fileSystem` permission requests |
| [#70390](https://github.com/openclaw/openclaw/pull/70390) | pashpashpash | **Remove Codex CLI auth import from onboarding** | Stops copying `~/.codex` OAuth material into per-agent stores; addresses identity drift |
| [#70393](https://github.com/openclaw/openclaw/pull/70393) | pashpashpash | Fix multi-agent OAuth profile drift | **Stacked on #70390** — cleans up existing stale per-agent auth profiles |

**Themes:** Codex integration hardening, OAuth hygiene, Pi runtime parity, plugin dependency firefighting.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Category | Underlying Need |
|:---|:------|:---------|:---|:---------|:--------------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 91 | 71 | **Enhancement** | **Platform parity** — macOS/iOS/Android have native apps; Linux/Windows users feel second-class. Enterprise/desktop deployment blocked. |
| 2 | [#38902](https://github.com/openclaw/openclaw/issues/38902) HTTP 422 on local QWEN model | 22 | 0 | Bug | Local model compatibility — OpenAI parameter validation too strict for non-OpenAI endpoints |
| 3 | [#7200](https://github.com/openclaw/openclaw/issues/7200) Real-time Voice Conversation Support | 21 | 23 | Enhancement | **Phone-like UX** — Twilio/WebRTC integration for streaming audio; current pre-recorded voice is insufficient for interactive use cases |
| 4 | [#58814](https://github.com/openclaw/openclaw/issues/58814) Dashboard 500 error (closed) | 19 | 5 | Bug (fixed) | Dashboard stability post-upgrade |
| 5 | [#67936](https://github.com/openclaw/openclaw/issues/67936) Matrix channel won't start | 14 | 0 | **Regression** | Plugin dependency resolution broken in 2026.04.15 |

### Analysis

- **#75** is a **long-running structural gap** (created Jan 1, still open). High engagement suggests strong demand but likely blocked by resource allocation or technical debt in cross-platform UI frameworks.
- **#7200** has high 👍/comment ratio — clear user demand for real-time voice, likely competing with Pi's native voice mode.
- **Dependency regressions** dominate recent activity, indicating CI/CD gap in testing global npm install paths.

---

## 5. Bugs & Stability

### Severity-Ranked Regressions from v2026.4.21

| Severity | Issue | Plugin | Status | Fix PR |
|:---------|:------|:-------|:-------|:-------|
| **🔴 CRITICAL** | [#70198](https://github.com/openclaw/openclaw/issues/70198) Missing Feishu/Nostr deps in global install | Feishu, Nostr | **CLOSED** | Implicit in release, but incomplete |
| **🔴 CRITICAL** | [#70025](https://github.com/openclaw/openclaw/issues/70025) Feishu `@larksuiteoapi/node-sdk` missing — Gateway won't start | Feishu | **CLOSED** | [#70292](https://github.com/openclaw/openclaw/issues/70292) related |
| **🔴 CRITICAL** | [#70008](https://github.com/openclaw/openclaw/issues/70008) Config read fails on missing Feishu module | Feishu | **CLOSED** | Same root cause |
| **🔴 CRITICAL** | [#70099](https://github.com/openclaw/openclaw/issues/70099) Fresh install missing modules | Multiple | **CLOSED** | [#70346](https://github.com/openclaw/openclaw/issues/70346) |
| **🔴 CRITICAL** | [#70346](https://github.com/openclaw/openclaw/issues/70346) Windows setup wizard crashes on missing Feishu dep | Feishu | **CLOSED** | Fixed 2026-04-23 |
| **🟠 HIGH** | [#70096](https://github.com/openclaw/openclaw/issues/70096) Upgrade regression: `doctor --fix` fails, can corrupt `openclaw.json` | Core | **CLOSED** | Manual recovery documented |
| **🟠 HIGH** | [#67936](https://github.com/openclaw/openclaw/issues/67936) Matrix channel cannot start | Matrix | **OPEN** | None identified |
| **🟠 HIGH** | [#68735](https://github.com/openclaw/openclaw/issues/68735) LLM request failed: provider rejected schema | GitHub Copilot/GPT-5-mini | **OPEN** | None identified |
| **🟡 MEDIUM** | [#68113](https://github.com/openclaw/openclaw/issues/68113) Mattermost slash commands 503 | Mattermost | **OPEN** | None identified |
| **🟡 MEDIUM** | [#68056](https://github.com/openclaw/openclaw/issues/68056) WhatsApp media reply sent twice | WhatsApp | **CLOSED** | Fixed |

### Root Cause Analysis

The **v2026.4.21 dependency regression** stems from bundled plugin runtime dependencies not being included in the global npm package. The `doctor --fix` tool, intended to repair such issues, **itself fails** when dependencies are missing, and in worst cases **rewrites `openclaw.json` to an invalid minimal config** ([#70096](https://github.com/openclaw/openclaw/issues/70096)).

**Pattern:** Feishu (`@larksuiteoapi/node-sdk`), WhatsApp (`@whiskeysockets/baileys`), Telegram (`grammy`), and Nostr dependencies are affected. The release notes mention "repair bundled plugin runtime dependencies" but the fix was incomplete or only applied to specific paths.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | 👍 | Likelihood in Next Version | Rationale |
|:--------|:------|:---|:---------------------------|:----------|
| **Linux/Windows native apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | 71 | Medium-High | Longstanding, high demand; may require Electron/Tauri investment |
| **Real-time voice (WebRTC/Twilio)** | [#7200](https://github.com/openclaw/openclaw/issues/7200) | 23 | Medium | Competitive with Pi; infrastructure PRs exist in backlog |
| **Shared workspace for multi-agent** | [#40245](https://github.com/openclaw/openclaw/issues/40245) | 7 | High | Architectural need; symlink security being discussed |
| **Per-agent memory-wiki vaults** | [#63829](https://github.com/openclaw/openclaw/issues/63829) | 3 | Medium | Multi-agent isolation; depends on memory plugin refactor |
| **Sensitive data masking** | [#64046](https://github.com/openclaw/openclaw/issues/64046) | 0 | Medium | Security/compliance requirement; Chinese enterprise demand |
| **Zero-lag global rule sync** | [#70036](https://github.com/openclaw/openclaw/issues/70036) | 0 | Low | Niche enterprise admin use case; complex to implement safely |
| **Configurable streaming watchdog** | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 3 | High | Simple config change; affects reasoning model UX |

**Predicted for v2026.4.28:** Streaming watchdog timeout ([#68596](https://github.com/openclaw/openclaw/issues/68596)), shared workspace directory ([#40245](https://github.com/openclaw/openclaw/issues/40245)), Linux app progress (if resources allocated).

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:------|:---------|:---------|
| **Upgrade fragility** | 6+ issues on 2026.4.21 breaking existing installs | 🔴 Critical |
| **Global npm install untested** | Multiple `MODULE_NOT_FOUND` on fresh global installs | 🔴 Critical |
| **Config corruption risk** | `doctor --fix` can destroy `openclaw.json` ([#70096](https://github.com/openclaw/openclaw/issues/70096), [#69631](https://github.com/openclaw/openclaw/issues/69631)) | 🟠 High |
| **Platform exclusion** | Linux/Windows users lack native apps ([#75](https://github.com/openclaw/openclaw/issues/75)) | 🟠 High |
| **Local model compatibility** | OpenAI-parameter assumptions break non-OpenAI endpoints ([#38902](https://github.com/openclaw/openclaw/issues/38902)) | 🟡 Medium |
| **Duplicate message delivery** | Gateway-level message deduplication failures ([#58443](https://github.com/openclaw/openclaw/issues/58443), [#37844](https://github.com/openclaw/openclaw/issues/37844), [#68056](https://github.com/openclaw/openclaw/issues/68056)) | 🟡 Medium |

### Positive Signals

- **Codex integration maturing:** Multiple PRs improving parity, OAuth handling, approval UX
- **Plugin ecosystem expanding:** TTS providers (Typecast [#10356](https://github.com/openclaw/openclaw/pull/10356)), MLflow gateway ([#70397](https://github.com/openclaw/openclaw/pull/70397)), Cursor Agent backend ([#56407](https://github.com/openclaw/openclaw/pull/56407))
- **Hook system extensibility:** `before_llm_call`/`after_llm_call` ([#39206](https://github.com/openclaw/openclaw/pull/39206)), observability hooks ([#33915](https://github.com/openclaw/openclaw/pull/33915)) enable rich plugin ecosystem

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Issue | Risk |
|:-----|:----|:------|:-----|
| **Linux/Windows apps** | 113 days | [#75](https://github.com/openclaw/openclaw/issues/75) | Community frustration; competitive disadvantage |
| **Cron scheduler stale** | 56 days | [#27996](https://github.com/openclaw/openclaw/issues/27996) | Reliability bug; "stale" label may hide urgency |
| **Config validation with removed providers** | 47 days | [#38913](https://github.com/openclaw/openclaw/issues/38913) | UX papercut; easy fix |
| **Docker + sandbox workspace access** | 52 days | [#31331](https://github.com/openclaw/openclaw/issues/31331) | Deployment blocker for containerized users |
| **Webchat image upload regression** | 44 days | [#41801](https://github.com/openclaw/openclaw/issues/41801) | Core UI functionality broken |
| **XL hook PRs** | 47+ days | [#39206](https://github.com/openclaw/openclaw/pull/39206), [#38162](https://github.com/openclaw/openclaw/pull/38162), [#38161](https://github.com/openclaw/openclaw/pull/38161) | Security review backlog; blocking extensibility |
| **TTS Typecast provider** | 76 days | [#10356](https://github.com/openclaw/openclaw/pull/10356) | Large PR; may need rebase/review |
| **WhatsApp reply quoting** | 16 days | [#62305](https://github.com/openclaw/openclaw/pull/62305) | XL PR; UX improvement for group chats |

### Recommendations

1. **Immediate:** Hotfix release for dependency regression (v2026.4.22?)
2. **This week:** Audit `doctor --fix` to prevent config destruction
3. **This sprint:** Prioritize #75 platform parity or communicate timeline
4. **Ongoing:** Reduce XL PR backlog — consider splitting or dedicated review sprints

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
## 2026-04-23 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem is experiencing **intense, unsynchronized maturation** across a dozen active projects, with aggregate daily activity exceeding 1,200 issues/PRs. Three dominant patterns emerge: **(a)** core infrastructure projects (OpenClaw, NanoBot, Hermes) battling dependency and config-system fragility as they scale; **(b)** enterprise-oriented forks (LobsterAI, CoPaw/QwenPaw, IronClaw) investing heavily in deployment reliability, offline operation, and IM platform breadth; and **(c)** smaller projects (ZeptoClaw, ZeroClaw, Moltis) hardening security and protocol compliance for production use. The ecosystem is collectively pivoting from "functional prototype" to "deployable system"—with all the regressions, config migrations, and stability crises that transition entails.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.21 (regressed) | 🔴 Degraded | Firefighting critical dependency regression |
| **NanoBot** | 26 | 41 | None | 🟢 Good | Stabilizing post-architectural changes |
| **Hermes Agent** | 50 | 50 | None (v0.10.0 current) | 🟡 Strained | High backlog, gateway reliability crisis |
| **PicoClaw** | 9 | 19 | **v0.2.7** | 🟢 Good | Strong cadence, session regressions emerging |
| **NanoClaw** | 3 | 27 | **v2.0.0 landed** | 🟡 Volatile | Major rewrite stabilization |
| **NullClaw** | 10 | 1 | None | 🟢 Stable | Low velocity, steady triage |
| **IronClaw** | 29 | 50 | None (v0.26.0 installer broken) | 🔴 Degraded | Engine V2 transition, canary failures |
| **LobsterAI** | 1 | 28 | None (v2026.4.22 last) | 🟡 Strained | Enterprise fixes strong, critical tool regression unaddressed |
| **Moltis** | 6 | 25 | **20260422.01** | 🟢 Good | Excellent closure rate, security hardening |
| **CoPaw/QwenPaw** | 40 | 49 | **v1.1.3** | 🟡 Strained | Rebrand chaos, MCP reliability issues |
| **ZeptoClaw** | 0 | 16 | None | 🟡 Uncertain | Zero community engagement, security-focused |
| **ZeroClaw** | 39 | 39 | None (v0.7.4/0.7.5 pending) | 🟡 Strained | Config system fragility dominates |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs/day | 10-50× higher volume than any peer; validates network effects |
| **Codex integration depth** | Native OAuth hygiene, prompt/compaction hooks, approval UX | NanoBot has LiteLLM-removal scars; Hermes treats Codex as edge case |
| **Plugin ecosystem breadth** | 10+ channel plugins, TTS/MLflow/Cursor backends | Moltis (19 skill categories) and ZeroClaw (ACP protocol) are narrower |
| **Hook system maturity** | `before_llm_call`, `after_llm_call`, observability hooks | PicoClaw's explicit `provider` field is simpler but less extensible |

### Technical Approach Differences
- **OpenClaw**: Monolithic Node.js core with bundled plugins; rapid iteration creates dependency regression risk (v2026.4.21 critical failure)
- **NanoBot/Hermes**: Modular Python/TypeScript with provider abstraction layers; slower but more predictable upgrade paths
- **Moltis**: Rust-based with strong type safety; config system uses two-pass variable resolution (#834)
- **ZeroClaw**: Rust with strict ACP protocol compliance; editor-integration-first (Neovim)

### Community Size
OpenClaw's 500 daily items dwarfs all peers, but **engagement quality varies**: #75 (Linux/Windows apps, 71 👍, 91 comments, 113 days old) shows structural demand unmet despite scale. NanoBot's 26 issues/41 PRs with same-day closures suggests **higher maintainer-to-contributor ratio efficiency**.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Real-time voice/ duplex audio** | OpenClaw (#7200, 23 👍), ZeroClaw (#5942 PR open), NanoBot (no active work) | WebRTC/Twilio streaming; phone-like UX; competitive with Pi's native voice |
| **Config system resilience** | OpenClaw (doctor --fix corrupts config #70096), ZeroClaw (v2 migration breaks providers #5990/#5989), NanoBot (Dream rename loses fields #3383), PicoClaw (auth credential inheritance #2548) | Two-pass resolution, validation at load, atomic writes, rollback capability |
| **Multi-channel parity** | Hermes (Feishu threading #6969/#7734), ZeroClaw (Discord threads #5412, Matrix #3361, WhatsApp #4846), LobsterAI (Discord/Telegram multi-bot #1794/#1792), CoPaw (WeChat iLink #3685) | Thread isolation, mention handling, auto-invite-accept, media delivery consistency |
| **Local model / self-hosted inference** | ZeroClaw (llamacpp #5815), LobsterAI (LM Studio #1787), PicoClaw (vLLM/Ollama-style #2609), NanoBot (Qwen-3.5 #2469) | OpenAI-compatible endpoint assumptions break non-OpenAI parameter validation |
| **Enterprise deployment hardening** | LobsterAI (Defender exclusions #1786, installer logs #1791), CoPaw (offline CDN elimination #3683, backup/restore #3534), Moltis (macOS signing #842, WSL2 #835) | Code signing, air-gapped operation, config sync, antivirus compatibility |
| **Observability / tracing** | NanoBot (OpenTelemetry #3173, Langfuse/LangSmith), ZeroClaw (OTel semantic conventions #6009), OpenClaw (hook system #33915) | Production debugging, cost attribution, latency exposure in agent loops |
| **Subagent / multi-agent orchestration** | NanoBot (#3303 spawn tools, #3292 task focus), Moltis (#844 default presets), IronClaw (mission tooling #2873) | Lifecycle management, domain loop detection, state preservation on `/stop` |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation; maximum plugin breadth | Developers building custom agents | Node.js monolith, rapid release cycle, hook extensibility |
| **NanoBot** | International community; gateway/agent separation | Global teams, Chinese enterprise | Python/TypeScript, `litellm` removal → custom routing, Discord/WeChat strength |
| **Hermes Agent** | Apple Silicon optimization; voice/TTS ecosystem | macOS/iOS power users | Swift/TypeScript hybrid, browser automation integration |
| **PicoClaw** | Embedded/IoT deployment; hardware-software co-design | Raspberry Pi, constrained devices | Rust-lite, explicit provider fields, Sogou China search |
| **NanoClaw** | Consumer accessibility; branded setup | Non-technical self-hosters | Node.js v2 rewrite, WeChat-native, container-first |
| **Moltis** | Security-first; Rust type safety; MCP ecosystem | Security-conscious enterprises | Rust, zkperf-service (#470), witness recording, skill verification |
| **ZeroClaw** | Protocol rigor; editor integration (ACP) | Developers, Neovim users | Rust, strict ACP compliance, voice activity detection |
| **LobsterAI** | Enterprise IM breadth; NetEase ecosystem | Chinese enterprise, WeCom/Discord hybrid | Electron, LM Studio, multi-bot, Windows installer polish |
| **CoPaw/QwenPaw** | Memory observability ("dream logs"); tool guard UX | Agent researchers, power users | Python, backup/restore, shell invasion guards, semantic routing |
| **IronClaw** | Engine V2 architecture; cost-based budgeting | SaaS operators, multi-tenant deployers | Rust, typed assistant content, mission framework, canary testing |
| **ZeptoClaw** | Audit/compliance; hash-chain integrity | Regulated industries, governance | Rust, SSRF protection, SHA256 skill verification, tamper-evident logs |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Rapid Iteration (Risk-Prone)** | OpenClaw, IronClaw, NanoClaw | 500/79/27 PRs/day; major rewrites; canary failures; dependency regressions; "move fast and fix fires" |
| **⚡ High Velocity (Stabilizing)** | NanoBot, Moltis, CoPaw, ZeroClaw | 25-50 PRs/day; strong closure rates; regression fixes with test coverage; architectural debt being paid |
| **🟢 Steady State** | PicoClaw, Hermes, LobsterAI | 10-30 PRs/day; predictable releases; incremental improvements; some stale PR accumulation |
| **❓ Uncertain / Low Engagement** | NullClaw, ZeptoClaw, TinyClaw | Minimal activity; zero community issues; security-focused but possibly low adoption |

### Maturity Signals
- **Most mature release engineering**: PicoClaw (v0.2.7 with CI split #2614), Moltis (daily releases)
- **Most mature testing**: Moltis (e2e tests for regressions #836, #833), IronClaw (canary system—currently failing)
- **Most mature security model**: Moltis (zkperf, witness recording), ZeptoClaw (SSRF, hash-chain)
- **Least mature stability**: OpenClaw (v2026.4.21 broke all global installs), IronClaw (4 canary failures on one commit)

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **"V2" architectural rewrites everywhere** | NanoClaw v2.0.0 (+38k/-17k LOC), IronClaw Engine V2, ZeroClaw schema v2, OpenClaw implicit v2 pressure | **Lesson**: First-generation agent architectures (monolithic, implicit provider routing, flat content models) are hitting scaling limits. Design for typed, separable capability/execution layers from inception. |
| **Config system as critical infrastructure** | 12+ critical bugs across 6 projects from config migration/validation failures | Invest in **schema versioning, atomic migrations, rollback, and validation at every layer**. The `doctor --fix` tool that corrupts configs (OpenClaw #70096) is worse than no tool. |
| **Enterprise deployment > consumer features** | LobsterAI Defender exclusions, CoPaw offline CDN elimination, Moltis macOS signing, ZeroClaw RBAC RFC | Self-hosted AI agents are **crossing the chasm to enterprise**. Code signing, air-gapped operation, backup/restore, and audit trails are now table stakes. |
| **Real-time voice as competitive vector** | OpenClaw #7200 (23 👍), ZeroClaw #5942 (Vad trait), Hermes #6884 (naga.ac provider) | Streaming audio is the next UX battleground after text/image. Projects without WebRTC/Twilio integration are competitively exposed. |
| **MCP as emerging standard, but fragile** | CoPaw MCP zombie states (#3640/#3642), Moltis MCP server management (#840) | Model Context Protocol is being adopted rapidly, but **lifecycle management** (spawn, cancel, healthcheck) is immature. Build defensively. |
| **Provider abstraction fatigue** | NanoBot LiteLLM removal broke LangSmith (#2493), OpenClaw OpenAI-parameter assumptions break local models (#38902), ZeroClaw llamacpp regression (#5815) | **No abstraction is perfect**. Projects are moving from generic wrappers (LiteLLM) to **curated, tested provider-specific adapters** with explicit capability advertising. |
| **Observability as product differentiator** | NanoBot OpenTelemetry (#3173), ZeroClaw OTel tools (#6009), CoPaw "dream logs" (#3663), IronClaw cost budgeting (#2843) | Users and operators demand **visibility into agent cognition, cost, and reliability**. "Black box" agents are losing to observable alternatives. |
| **WeChat as must-have China channel** | NanoClaw (#1921), CoPaw (#3685, #3700, #3699), LobsterAI (WeCom #1790), NanoBot community groups | Chinese market penetration requires **native WeChat integration**, not webhook bridges. iLink protocol, QR login, and group management are specialized competencies. |

---

*Report generated from 12 project digests covering 1,200+ items (2026-04-22/23). Health scores reflect composite assessment of closure rate, regression severity, release cadence, and community responsiveness.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-23

---

## 1. Today's Overview

NanoBot shows **very high development velocity** with 26 issues and 41 pull requests active in the last 24 hours, indicating a mature, actively maintained project with substantial community engagement. The project is in a **stabilization phase** following recent architectural changes—multiple closed items address regressions from the removal of `litellm_provider.py` and provider routing refactors. No new release was cut today, suggesting maintainers are accumulating fixes before a version bump. The community is notably international, with significant Chinese-language participation alongside English discussions. Discord and Telegram channel improvements dominate today's merged work, while core agent reliability and observability remain active development fronts.

---

## 2. Releases

**No new releases** (0 releases published).

The project appears to be accumulating changes for a future release rather than shipping incrementally.

---

## 3. Project Progress

### Merged/Closed PRs Today (24 items total; key advances highlighted)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2059](https://github.com/HKUDS/nanobot/pull/2059) | KacperLa | **Unix-socket JSON-RPC channel** — lean local API for external programmatic access | Enables headless/integration use cases; significant architecture expansion |
| [#3317](https://github.com/HKUDS/nanobot/pull/3317) / [#3398](https://github.com/HKUDS/nanobot/pull/3398) | gthieleb | **Telegram inline keyboard buttons** — button taps route as user messages | Major UX upgrade for Telegram channel; #3398 supersedes #3317 with improved typed DSL |
| [#3171](https://github.com/HKUDS/nanobot/pull/3171) / [#3397](https://github.com/HKUDS/nanobot/pull/3397) | Lbin91 | **Discord channel filtering + thread support** — `allowChannels` config with parent-channel allowlist inheritance | Critical for multi-server Discord deployments; #3397 fixes thread reply blocking |
| [#3207](https://github.com/HKUDS/nanobot/pull/3207) | Lbin91 | **Zhipu → Z.AI provider split** — CN/Global/Coding Plan endpoints with deprecated alias | Tracks vendor rebrand; maintains backward compatibility |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) | Chen-zexi | **OpenTelemetry tracing** — full agent loop observability with Langfuse/LangSmith backends | Production-readiness milestone for enterprise adoption |
| [#3393](https://github.com/HKUDS/nanobot/pull/3393) | Re-bin | **WebUI image attachments** — composer with drag-drop/paste, signed media pipeline | Closes significant UX gap vs. chat-native competitors |
| [#3387](https://github.com/HKUDS/nanobot/pull/3387) | tetratorus | **Anthropic image_url conversion in tool results** — fixes unconverted blocks rejected by API | Critical fix for multimodal tool use |
| [#3383](https://github.com/HKUDS/nanobot/pull/3383) | saimonventura | **Preserve excluded config fields** — fixes `DreamConfig.cron` loss in env var resolution | Regression fix from Dream rename refactor |
| [#2037](https://github.com/HKUDS/nanobot/pull/2037) | benlenarts | **Builtin skills with `restrictToWorkspace`** — absolute path resolution for system skills | Security/usability fix for sandboxed deployments |
| [#3367](https://github.com/HKUDS/nanobot/pull/3367) | mihai-chiorean | **LLM latency exposure in AgentHookContext** — `latency_ms` for metrics/tracing | Enables custom observability without external timing |

**Open PRs advancing:**
- [#3399](https://github.com/HKUDS/nanobot/pull/3399): Structured tool-event payloads via `on_progress` — foundation for rich execution UIs
- [#2526](https://github.com/HKUDS/nanobot/pull/2526): `/stop` command preserves session state — fixes critical data loss bug
- [#3303](https://github.com/HKUDS/nanobot/pull/3303): Spawn status/cancel tools + domain loop detection — subagent lifecycle management
- [#3373](https://github.com/HKUDS/nanobot/pull/3373): Gateway lifecycle notification hooks — operational visibility

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| 1 | [#2892](https://github.com/HKUDS/nanobot/issues/2892) Cron mechanism design question | 10 | 0 | **Architectural debate**: Core design tension between `agent` (creation) and `gateway` (execution) separation. Users expect hot-reload of scheduled tasks; current implementation requires gateway restart. Suggests need for dynamic task registry or agent→gateway event propagation. |
| 2 | [#2049](https://github.com/HKUDS/nanobot/issues/2049) Missing skill creation ability | 8 | 0 | **Regression from upgrade** — `skill-creator tool` removed without migration path. Indicates breaking change in tool inventory or capability system. |
| 3 | [#2493](https://github.com/HKUDS/nanobot/issues/2493) LANGSMITH broken after litellm removal | 6 | 1 | **Provider ecosystem fragility** — direct integration dependency on LiteLLM; removal broke LangChain observability. Community needs abstraction layer or documented migration. |
| 4 | [#2469](https://github.com/HKUDS/nanobot/issues/2469) Qwen-3.5 JSON format error | 6 | 0 | **Model-specific provider bug** — Dashscope's strict function.arguments validation. Fixed (closed) but pattern suggests provider-specific formatting gaps. |
| 5 | [#2235](https://github.com/HKUDS/nanobot/issues/2235) Telegram double responses | 6 | 6 | **High-impact UX bug** — "faux streaming" race condition. Strong community signal (6 👍) for polish priority. |

### Underlying Needs Analysis

- **Operational predictability**: Cron, heartbeat, and gateway lifecycle issues cluster around "set it and forget it" reliability expectations
- **Provider resilience**: Multiple issues trace to single-provider dependencies (LiteLLM, GitHub Copilot `/responses` vs `/chat/completions`)
- **Multimodal fidelity**: Image handling gaps in Anthropic, Discord, WebUI suggest rapid feature expansion outpaced edge-case coverage

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | [#3328](https://github.com/HKUDS/nanobot/issues/3328) DeepSeek "failed to deserialize" | **OPEN** | None identified | Post-upgrade regression (0.1.5→0.1.5.post1); breaks all Telegram messages. **No workaround confirmed.** |
| **🔴 Critical** | [#3390](https://github.com/HKUDS/nanobot/issues/3390) Tool Call: "Sorry, I encountered an error" | **OPEN** | None identified | Complete agent failure after workspace clean; breaks all subsequent LLM calls. Telegram-specific. |
| **🟡 High** | [#3377](https://github.com/HKUDS/nanobot/issues/3377) Multi subagent repeated replies | **CLOSED** | Unknown | Fixed today; subagent orchestration race condition. |
| **🟡 High** | [#3360](https://github.com/HKUDS/nanobot/issues/3360) GitHub Copilot GPT-5.x `/responses` API | **CLOSED** | #3360 (author patch) | Provider API version mismatch; patch exists but marked "not good" — needs proper abstraction. |
| **🟡 High** | [#2465](https://github.com/HKUDS/nanobot/issues/2465) RoutingProvider hardcodes LiteLLM | **CLOSED** | Unknown | OAuth providers broken by tier routing; architectural fix needed in `_make_tier_provider()`. |
| **🟢 Medium** | [#2921](https://github.com/HKUDS/nanobot/issues/2921) MSTeams restart notify unimplemented | **CLOSED** | Unknown | Config drift — exposed but non-functional settings. |
| **🟢 Medium** | [#2582](https://github.com/HKUDS/nanobot/issues/2582) Heartbeat noisy status messages | **CLOSED** | Unknown | Silenced non-actionable summaries. |

**Regressions from recent changes:**
- LiteLLM removal: [#2493](https://github.com/HKUDS/nanobot/issues/2493) (LangSmith), [#2465](https://github.com/HKUDS/nanobot/issues/2465) (OAuth routing)
- Dream rename: [#3383](https://github.com/HKUDS/nanobot/issues/3383) (config field loss)
- Provider splits: [#3207](https://github.com/HKUDS/nanobot/pull/3207) ecosystem churn

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Predicted Priority | Rationale |
|:---|:---|:---|:---|
| **Provider/Model Failover** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | **High — v0.2.x** | Directly addresses #2493, #2465, #3328 root cause; enterprise blocker. Architecture already has multi-provider config, needs orchestration layer. |
| **Configurable Compaction Ratio** | [#3270](https://github.com/HKUDS/nanobot/issues/3270) | **Medium — v0.2.x** | Active development area ("lot of changes recently"); contributor-ready with `good first issue` label. |
| **Session-Level Focus Tool** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | **Medium — v0.3.x** | Deep agent cognition feature; competes with OpenAI's thread management. Needs design iteration. |
| **Dynamic Provider Switching** | [#1954](https://github.com/HKUDS/nanobot/issues/1954) | **Low — backlog** | User workaround exists (admin config); conflicts with current architecture. |
| **DingTalk File Upload Fix** | [#3344](https://github.com/HKUDS/nanobot/issues/3344) | **Medium — patch release** | Enterprise integration blocker; likely channel-specific message merging. |

**Emerging pattern**: Subagent/orchestration maturity — [#3303](https://github.com/HKUDS/nanobot/pull/3303) (spawn tools), [#3377](https://github.com/HKUDS/nanobot/issues/3377) (multi-subagent replies), [#3292](https://github.com/HKUDS/nanobot/issues/3292) (task focus) suggest next major version theme may be "reliable multi-agent workflows."

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|:---|:---|:---:|
| **Upgrade fragility** | #2049, #2493, #3328, #3383 | 🔴 High |
| **Provider configuration complexity** | #1954, #3376, #2465, #3360 | 🟡 Medium-High |
| **Gateway/agent architectural confusion** | #2892, #1884 | 🟡 Medium |
| **Channel-specific integration gaps** | #3344 (DingTalk), #2235 (Telegram), #2921 (MSTeams) | 🟡 Medium |
| **Observability/debuggability** | #2493, #3390, #3328 error opacity | 🟡 Medium |

### Satisfaction Signals

- **Strong community self-organization**: WeChat groups (#3394-3396) indicate user investment
- **Third-party ecosystem**: [#2213](https://github.com/HKUDS/nanobot/issues/2213) community dashboard contribution
- **Responsive maintenance**: Same-day closure on #3377, #3360, #3387

### Use Case Evolution

Early adopters appear to be shifting from **personal assistant** → **team/organization deployment** (Discord threads, DingTalk groups, gateway dashboards, lifecycle notifications). This pressures reliability and observability features.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#173](https://github.com/HKUDS/nanobot/issues/173) API key caching despite config update | **78 days** | 🔴 **High** | Stale label applied; fundamental config reload bug. User tried multiple workarounds. **Needs maintainer investigation of config caching layer.** |
| [#2892](https://github.com/HKUDS/nanobot/issues/2892) Cron mechanism design | **16 days** | 🟡 Medium | Active discussion (10 comments) but no maintainer architectural decision. **Needs design RFC or documentation update.** |
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) LANGSMITH regression | **29 days** | 🟡 Medium | `good first issue` + `regression` labels; fix path unclear. **Needs maintainer guidance on replacement integration pattern.** |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) `/stop` session preservation | **28 days open** | 🟡 Medium | High-quality fix with clear problem statement. **Needs review/merge to prevent data loss.** |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) OpenTelemetry tracing | **8 days open** | 🟢 Low | Large feature; needs careful review. **Should not stall — blocks enterprise adoption narrative.** |

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-23. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-23

## 1. Today's Overview

Hermes Agent shows **very high community activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a mature, actively maintained project with substantial user adoption (104k+ stars). The project is currently in a **stabilization phase** with zero new releases, focusing on reliability fixes rather than feature launches. Critical concerns center on **gateway stability** (stale PID handling, zombie processes), **platform adapter robustness** (Feishu, WhatsApp, Telegram), and **security hardening** (control-plane file access). The high open-to-closed ratio (44:6 issues, 35:15 PRs) suggests a growing backlog that may strain maintainer bandwidth.

---

## 2. Releases

**No new releases** (v0.10.0 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#14204](https://github.com/NousResearch/hermes-agent/pull/14204) | j-sperling | Switches `hermes update` from `npm install` to `npm ci` to prevent lockfile churn | Eliminates dirty repo state during updates |
| [#247](https://github.com/NousResearch/hermes-agent/pull/247) | Bartok9 | Fixes `/tools` header centering and truncates long descriptions | UI polish |
| [#245](https://github.com/NousResearch/hermes-agent/pull/245) | Bartok9 | Adds `re.DOTALL` to dangerous command detection regex | **Security**: Prevents newline-based bypass |
| [#14198](https://github.com/NousResearch/hermes-agent/pull/14198) | teknium1 | Adds `gemma-4` / `gemma4` context-length entries (256K) | Fixes 8K→256K context bug; closes [#12976](https://github.com/NousResearch/hermes-agent/issues/12976) |
| [#14199](https://github.com/NousResearch/hermes-agent/pull/14199) | teknium1 | Upgrades `agent-browser` 0.13→0.26 with idle timeout wiring | **Performance**: Reduces browser daemon resource leaks |
| [#6884](https://github.com/NousResearch/hermes-agent/pull/6884) | ViFigueiredo | Adds `naga.ac` provider for TTS/STT | Expands voice provider ecosystem |

### Notable Open PRs Advancing

| PR | Author | Focus |
|:---|:---|:---|
| [#14202](https://github.com/NousResearch/hermes-agent/pull/14202) | Mind-Dragon | **Loop-prevention guardrails** for infinite tool retry loops |
| [#14205](https://github.com/NousResearch/hermes-agent/pull/14205) | 0xAlcibiades | OpenAI TTS `instructions` field forwarding (closes [#14196](https://github.com/NousResearch/hermes-agent/issues/14196)) |
| [#14207](https://github.com/NousResearch/hermes-agent/pull/14207) | teknium1 | SSL/TLS mid-stream error classification as transport retry |
| [#12811](https://github.com/NousResearch/hermes-agent/pull/12811) | vominh1919 | Anthropic `max_tokens` + Feishu `channel_prompt` + Discord `free_response` fixes |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Core Concern |
|:---|:---|:---|
| [#10980](https://github.com/NousResearch/hermes-agent/issues/10980) — Copilot APIConnectionError on M5 Mac | 9 | **Setup friction**: Python 3.9.6 + Mac M5 + Copilot gateway failure suggests environment-specific networking/SSL issues |
| [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) — Empty Codex response misclassified as incomplete | 7 | **Provider compatibility**: OpenAI Codex edge-case handling; retry logic over-eager |
| [#6969](https://github.com/NousResearch/hermes-agent/issues/6969) — Feishu topic progress messages spawn new topics | 6 | **Platform UX**: Threading model violates user expectations for conversation continuity |
| [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) — Feishu auth card button error + topic leakage | 6 | **Platform integration quality**: Enterprise Feishu deployment blockers |
| [#12894](https://github.com/NousResearch/hermes-agent/issues/12894) — Redundant `.hermes` nesting in repo | 4 | **Developer experience**: Plan storage logic doesn't detect existing project structure |

**Underlying needs**: Enterprise platform reliability (Feishu), Apple Silicon compatibility, and graceful degradation with external APIs dominate user concerns. The Feishu issues (#6969, #7734, #12805) collectively signal that Hermes's enterprise China-market presence is **production-immature** compared to Discord/Slack.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| **P0** | [#14072](https://github.com/NousResearch/hermes-agent/issues/14072) | Open | **None** | **Security**: `write_file`/`patch` can modify `~/.hermes` control-plane files (auth.json, config.yaml, webhook subscriptions) |
| **P1** | [#13655](https://github.com/NousResearch/hermes-agent/issues/13655) | Open | [#14203](https://github.com/NousResearch/hermes-agent/issues/14203) closed | Stale `gateway.pid` causes restart loop after crash/SIGKILL |
| **P1** | [#14203](https://github.com/NousResearch/hermes-agent/issues/14203) | **Closed** | [#14203](https://github.com/NousResearch/hermes-agent/issues/14203) | Gateway fails `--replace` when previous PID dead (stale PID) |
| **P1** | [#12875](https://github.com/NousResearch/hermes-agent/issues/12875) | Open | None | `/restart` leaves zombie process under systemd |
| **P1** | [#14176](https://github.com/NousResearch/hermes-agent/issues/14176) | Open | None | Gateway hang on clean exit / restart race with stale PID |
| **P1** | [#12925](https://github.com/NousResearch/hermes-agent/issues/12925) | Open | None | WhatsApp streaming broken: `edit_message()` rejects `finalize` kwarg |
| **P1** | [#14185](https://github.com/NousResearch/hermes-agent/issues/14185) | Open | None | `todo_tool` crashes on JSON-string `todos` parameter |
| **P1** | [#12807](https://github.com/NousResearch/hermes-agent/pull/12807) | Open PR | [#12807](https://github.com/NousResearch/hermes-agent/pull/12807) | Empty `function.name` in tool_calls causes 400 orphan tool_result |
| **P2** | [#14181](https://github.com/NousResearch/hermes-agent/issues/14181) | Open | None | Atomic writes recreate files as 0600, breaking shared deployments |

**Critical pattern**: **Stale PID management** is the dominant stability failure mode (#13655, #14203, #12875, #14176), indicating the gateway's process lifecycle management is **not systemd-hardened**. Multiple overlapping issues suggest this subsystem needs architectural review, not point fixes.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|
| [#14196](https://github.com/NousResearch/hermes-agent/issues/14196) — TTS `instructions` field | **High** | PR [#14205](https://github.com/NousResearch/hermes-agent/pull/14205) already open; trivial schema extension |
| [#12815](https://github.com/NousResearch/hermes-agent/issues/12815) — `on_clarify` plugin hook | **High** | PR [#12814](https://github.com/NousResearch/hermes-agent/pull/12814) open; completes plugin event coverage |
| [#12805](https://github.com/NousResearch/hermes-agent/issues/12805) — Feishu `channel_prompt` resolution | **Medium** | PR [#12811](https://github.com/NousResearch/hermes-agent/pull/12811) bundles this; parity with Discord/Slack |
| [#5439](https://github.com/NousResearch/hermes-agent/issues/5439) — Cron job output chaining | **Low-Medium** | Requires session architecture changes; no PR |
| [#12832](https://github.com/NousResearch/hermes-agent/issues/12832) — Custom OpenAI-compatible search backends | **Medium** | Expands `web_search` provider ecosystem; aligned with existing architecture |
| [#4386](https://github.com/NousResearch/hermes-agent/issues/4386) — `http_callback` webhook deliver mode | **Medium** | Enables custom chatbot integration; relatively isolated adapter work |
| [#14197](https://github.com/NousResearch/hermes-agent/issues/14197) — Single central agent with multiple clients | **Low** | Architectural shift; conflicts with current per-device session model |
| [#12961](https://github.com/NousResearch/hermes-agent/issues/12961) — Chinese localization | **Low** | Large scope; marked duplicate; internationalization not prioritized |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Gateway reliability under process management** | #13655, #12875, #14176, #14203 | Critical — production deployment blocker |
| **Enterprise platform (Feishu) quality gaps** | #6969, #7734, #12805 | High — threading, auth, prompt resolution all incomplete |
| **Security model for file operations** | #14072 | Critical — control-plane files writable by agent tools |
| **Provider-specific edge cases** | #3956, #10980, #12952, #12925 | Medium — OpenAI Codex, Copilot, WhatsApp all have integration bugs |
| **Shared/multi-user deployment friction** | #14181, #14197 | Medium — permissions, single-agent-multi-client not designed for |

### Satisfaction Signals

- Active plugin ecosystem (#12815, #12814 desktop notifier use case)
- Voice/TTS expansion ongoing (#14196, #6884)
- Strong community contribution velocity (50 PRs/day)

### Dissatisfaction Signals

- **No releases** despite significant bug accumulation suggests release process bottleneck
- Long-standing issues (#3956 from March 30) still open with no PR
- Feishu users explicitly comparing unfavorably to Discord/Slack parity

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) — Codex empty response misclassification | 24+ days | **Regression risk** for OpenAI Codex users | Provider adapter owner review; retry logic redesign |
| [#5439](https://github.com/NousResearch/hermes-agent/issues/5439) — Cron output chaining | 17 days | Architecture decision pending | Core maintainer decision on session isolation model |
| [#11657](https://github.com/NousResearch/hermes-agent/pull/11657) — JSON config system + approval system | 6 days | **Large PR** (55 files in original); may stall | Review bandwidth; potential for incremental merge |
| [#14072](https://github.com/NousResearch/hermes-agent/issues/14072) — Security: control-plane file access | 1 day | **P0 unassigned** | Immediate security team triage; denylist expansion PR |
| [#12961](https://github.com/NousResearch/hermes-agent/issues/12961) — Chinese localization | 3 days | Marked duplicate but no linked canonical issue | Internationalization roadmap decision |

**Maintainer attention needed**: The **stale PID cluster** (#13655, #12875, #14176) requires a single architectural fix, not three separate patches. The P0 security issue #14072 has no assignee or PR after 24 hours. The JSON config PR #11657 is a high-impact modernization at risk of bit-rot if not reviewed promptly.

---

*Digest generated from NousResearch/hermes-agent GitHub activity on 2026-04-23.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-23

## 1. Today's Overview

PicoClaw showed **strong development velocity** with 19 PRs updated in the last 24 hours (11 merged/closed, 8 open) and 9 active issues. The project shipped **v0.2.7** with Sogou web search integration and UI polish, alongside a nightly build. Activity is concentrated in three areas: **channel/UX improvements** (tool feedback animations, media handling), **provider layer expansion** (embeddings, multimodal audio, Anthropic fixes), and **infrastructure hardening** (CI/CD refactoring, WebSocket security). The high merge rate (58%) indicates healthy maintainer bandwidth, though 8 open PRs suggest some backlog accumulation.

---

## 2. Releases

### [v0.2.7](https://github.com/sipeed/picoclaw/releases/tag/v0.2.7)
| Aspect | Details |
|--------|---------|
| **New Features** | Configurable Sogou-backed web search; channel tool feedback animation |
| **Fixes** | Sogou user agent formatting for linter compliance |
| **Breaking Changes** | None identified |
| **Migration Notes** | Users previously relying on DuckDuckGo as sole search provider should verify Sogou configuration; international users may need explicit search provider setup |

### [nightly (v0.2.6-nightly.20260422.279c496b)](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)
- Automated build from `main` branch; marked unstable. Use for testing only.

---

## 3. Project Progress

### Merged/Closed PRs Today (11 total)

| PR | Author | Description | Significance |
|:---|:---|:---|:---|
| [#2614](https://github.com/sipeed/picoclaw/pull/2614) | imguoguo | **CI: Split tag creation and release workflows** | Infrastructure maturity—enables reproducible releases, reduces accidental tag errors |
| [#2618](https://github.com/sipeed/picoclaw/pull/2618) | wj-xiao | **Fix Pico media proxy token handling + refresh chat attachment UI** | Fixes authentication regression in launcher web console |
| [#2569](https://github.com/sipeed/picoclaw/pull/2569) | lxowalle | **Channel tool feedback animation** *(shipped in v0.2.7)* | Unified progress UX across Discord, Telegram, Feishu |
| [#2609](https://github.com/sipeed/picoclaw/pull/2609) | lxowalle | **Explicit `provider` field in model list entries** | Resolves long-standing config ambiguity (closes [#1883](https://github.com/sipeed/picoclaw/issues/1883)) |
| [#2502](https://github.com/sipeed/picoclaw/pull/2502) / [#2532](https://github.com/sipeed/picoclaw/pull/2532) | lxowalle | **`/btw` one-off side-question command** | New user interaction pattern—ephemeral queries without session pollution |
| [#2563](https://github.com/sipeed/picoclaw/pull/2563) | afjcjsbx | **Frontend file downloads in Pico web channel** | Completes tool→UI file delivery loop |
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | afjcjsbx | **MCP slash commands (`/list mcp`, `/show mcp`)** | Power-user tooling for MCP server introspection |
| [#2567](https://github.com/sipeed/picoclaw/pull/2567) | wj-xiao | **Docs reorganization by type + layout guidance** | Long-term contributor onboarding improvement |
| [#1182](https://github.com/sipeed/picoclaw/pull/1182) | bumu | **Refined `AGENTS.md`** | AI agent contributor guidelines |

**Key Advancement:** The explicit `provider` field merge resolves a **2-month architectural debate** ([#1883](https://github.com/sipeed/picoclaw/issues/1883)) about model name parsing, reducing configuration friction for local/OpenAI-compatible endpoints.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Comments | Analysis |
|:---|:---:|:---|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) Gateway start abnormal | **5** | **Production stability concern**—Debian 13 deployment with `digntalk` channel fails silently. User reports process starts but gateway exits. No fix PR yet; may indicate init system or permission edge case. |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) Multiple authentication credentials received | **4** | **Config validation gap**—Gemini provider rejects duplicate auth when `api_key` exists in both `model_list` entry and top-level config. Reveals schema ambiguity in credential inheritance. |
| [#1883](https://github.com/sipeed/picoclaw/issues/1883) Explicit provider field proposal *(now closed)* | **2** | **Resolved** via [#2609](https://github.com/sipeed/picoclaw/pull/2609)—community validated need for breaking config improvement. |

**Underlying Needs:**
- **Operational reliability**: Users deploying on constrained devices (Raspberry Pi Zero 2) and server environments need predictable startup behavior
- **Configuration clarity**: The `provider`/`model` slash-parsing convention caused repeated confusion; explicit fields reduce cognitive load
- **Auth flexibility**: Multi-provider setups need unambiguous credential scoping

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 High** | [#2621](https://github.com/sipeed/picoclaw/issues/2621) | **Session context lost after API timeout**—creates duplicate `main` session instead of resuming. Data loss risk for long-running conversations. | **No fix PR** |
| **🟡 Medium** | [#2615](https://github.com/sipeed/picoclaw/issues/2615) | **Tool call summary disappears on Web Chat refresh**—regression of [#2427](https://github.com/sipeed/picoclaw/issues/2427), previously fixed by [#2449](https://github.com/sipeed/picoclaw/pull/2449). UI state persistence failure. | **No fix PR** |
| **🟡 Medium** | [#2616](https://github.com/sipeed/picoclaw/issues/2616) | **web_search tool unregistered when DuckDuckGo disabled**—international users completely blocked from search. v0.2.7's Sogou addition may mitigate but doesn't fix registration logic. | **No fix PR** |
| **🟡 Medium** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway abnormal start on Debian 13 | **No fix PR** |
| **🟡 Medium** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Multiple auth credentials rejected | **No fix PR** |
| **🟢 Low** | [#2617](https://github.com/sipeed/picoclaw/pull/2617) | Empty PR (closed) | N/A |

**Stability Assessment:** Two regressions ([#2621](https://github.com/sipeed/picoclaw/issues/2621), [#2615](https://github.com/sipeed/picoclaw/issues/2615)) in session management and UI state are concerning given v0.2.7's release timing. The session timeout bug is **data-loss critical** and should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **Native audio input for multimodal LLMs** | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | **High** | Open PR, aligns with Gemini 1.5 support; clean protocol extension |
| **OpenAI-compatible embeddings** | [#2624](https://github.com/sipeed/picoclaw/pull/2624) | **High** | Open PR, vLLM ecosystem demand; local AI deployment trend |
| **Webhook endpoint for backend** | [#2620](https://github.com/sipeed/picoclaw/pull/2620) | **Medium** | Enterprise integration pattern; needs AWS-specific testing |
| **WhatsApp in default arm64 builds** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | **Medium** | Build flag change, but may increase binary size/complexity |
| **`.env` file support for skills** | [#2623](https://github.com/sipeed/picoclaw/issues/2623) | **Medium** | Common container deployment need; straightforward implementation |
| **Secure third-party WebSocket access** | [#2499](https://github.com/sipeed/picoclaw/issues/2499) | **Lower** | Architectural design needed; security review required |
| **WebSocket origin hardening** | [#2256](https://github.com/sipeed/picoclaw/pull/2256) | **Medium** | Security PR open since April 1; may need rebase |

**Predicted v0.2.8 focus:** Multimodal audio + embeddings (provider expansion), webhook stability, and session management fixes.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Search accessibility** | [#2616](https://github.com/sipeed/picoclaw/issues/2616)—DuckDuckGo gatekeeping breaks international users | High |
| **Session reliability** | [#2621](https://github.com/sipeed/picoclaw/issues/2621)—timeout handling loses context | Critical |
| **Configuration complexity** | [#2548](https://github.com/sipeed/picoclaw/issues/2548), [#1883](https://github.com/sipeed/picoclaw/issues/1883)—auth/model parsing confusion | Medium (improving) |
| **Build customization** | [#2625](https://github.com/sipeed/picoclaw/issues/2625)—WhatsApp excluded from Pi builds | Medium |
| **Deployment friction** | [#2513](https://github.com/sipeed/picoclaw/issues/2513)—gateway startup failures on Debian | Medium |

### Positive Signals
- **v0.2.7 Sogou search** addresses China-accessibility gap
- **`/btw` command** shows responsiveness to conversational UX needs
- **MCP tooling** ([#2535](https://github.com/sipeed/picoclaw/pull/2535)) indicates mature agent ecosystem thinking

### Use Case Diversity
- **Embedded/IoT**: Raspberry Pi Zero 2 deployments
- **Enterprise**: Webhook integrations, AWS infrastructure
- **International**: Multi-region search, multilingual channels
- **Developer**: Local LLM endpoints (vLLM, Ollama-style)

---

## 8. Backlog Watch

### Stale Items Needing Attention

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#2256](https://github.com/sipeed/picoclaw/pull/2256) WebSocket CSWSH security | **22 days** | Security vulnerability; default permissive CORS | Maintainer review, possible rebase |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) Anthropic cache_control fix | **23 days** | Prompt caching cost/performance impact | Merge after validation |
| [#2586](https://github.com/sipeed/picoclaw/pull/2586) Provider deduplication refactor | **3 days** | Code health; low risk | Review for merge window |
| [#2499](https://github.com/sipeed/picoclaw/issues/2499) Third-party WS security policy | **9 days** | Blocking ecosystem extensions | Design response from maintainers |

### Maintainer Attention Recommended
- **Session timeout bug [#2621](https://github.com/sipeed/picoclaw/issues/2621)** is unassigned and un-commented—critical for v0.2.8
- **Regression [#2615](https://github.com/sipeed/picoclaw/issues/2615)** needs root-cause analysis (why [#2449](https://github.com/sipeed/picoclaw/pull/2449) fix failed)

---

**Project Health Score: 🟢 Good** — Strong release cadence, active community contributions, and architectural improvements. Risk factors: session stability regressions and security PR backlog.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-23

## 1. Today's Overview

NanoClaw experienced **exceptionally high development velocity** on 2026-04-22, with **27 PRs updated** (19 merged/closed, 8 open) against minimal issue activity (3 issues, 2 open). The dominant event was the **landing of v2.0.0** — a 319-commit, +38k/-17k LOC architectural rewrite — accompanied by extensive cleanup PRs, reverts, and follow-up fixes. This represents a major project inflection point: the core team is aggressively stabilizing the v2 release while managing community onboarding friction. The high merge-to-open ratio (70% closed) suggests maintainers are prioritizing rapid integration over prolonged review, though the 8 open PRs indicate ongoing stabilization work.

---

## 2. Releases

**No new releases** published in the last 24 hours.

Notable: Despite the v2.0.0 architectural rewrite merging ([PR #1919](https://github.com/qwibitai/nanoclaw/pull/1919)), no corresponding GitHub release was tagged. The release may be pending final validation or documentation completion.

---

## 3. Project Progress

### Major Landed Changes

| PR | Description | Impact |
|---|---|---|
| [#1919](https://github.com/qwibitai/nanoclaw/pull/1919) | **v2.0.0 — ground-up architectural rewrite** | New entity model (users/roles/messaging groups/agent groups), +38k/-17k LOC |
| [#1915](https://github.com/qwibitai/nanoclaw/pull/1915) | V2 merge (contributing-guide compliant) | Packaging of v2 for integration |
| [#1914](https://github.com/qwibitai/nanoclaw/pull/1914) | V2 with refactors | Additional v2 cleanups |
| [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) | v1→v2 action items (5 implementations) | Dead config removal, timezone formatting, session DB normalization |
| [#1877](https://github.com/qwibitai/nanoclaw/pull/1877) | Engagement policy → router, unknown-channel registration | Owner-approval flow for new channels |
| [#1908](https://github.com/qwibitai/nanoclaw/pull/1908) | Branded setup script (`nanoclaw.sh`) | Zero-to-running install for first-time users |
| [#1592](https://github.com/qwibitai/nanoclaw/pull/1592) | Working ack for piped messages | UX consistency in container messaging |

### Infrastructure & Setup Hardening
- [#1904](https://github.com/qwibitai/nanoclaw/pull/1904): WSL-without-systemd detection prevents Docker install hangs
- [#1903](https://github.com/qwibitai/nanoclaw/pull/1903): Fixed systemd linger enablement reporting (was falsely claiming success)

### Reverted Changes
- [#1924](https://github.com/qwibitai/nanoclaw/pull/1924): Reverted [#1885](https://github.com/qwibitai/nanoclaw/pull/1885) (container `/home/node` UID permissions fix) — indicates the fix introduced regressions or was superseded by v2's container model

---

## 4. Community Hot Topics

**No genuinely active discussions** exist by comment/reaction metrics (all items show 0 comments, 0 👍). However, by **volume of submissions** and **project significance**:

| Item | Topic | Underlying Need |
|---|---|---|
| [#1921](https://github.com/qwibitai/nanoclaw/pull/1921) | **WeChat channel via iLink bot protocol** | Chinese market penetration; WeChat dominates PRC messaging, official plugin exists but community wants native integration |
| [#1598](https://github.com/qwibitai/nanoclaw/pull/1598) | **Remote storage skill (rclone + systemd)** | Self-hosted persistent storage for containerized agents; enterprise/data-privacy use case |
| [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) | ISO 8601 timestamp normalization | Data portability, API consistency, proper datetime handling in SQLite |

**Community pattern**: Three near-identical WeChat group invitation issues ([#1922](https://github.com/qwibitai/nanoclaw/issues/1922), [#1920](https://github.com/qwibitai/nanoclaw/issues/1920), [#1918](https://github.com/qwibitai/nanoclaw/issues/1918)) suggest either spam, a bot malfunction, or enthusiastic but disorganized community building. Two remain open despite identical content — **moderation attention needed**.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|---|---|---|---|
| **High** | [#1923](https://github.com/qwibitai/nanoclaw/pull/1923) | Image generation hangs indefinitely (OpenAI socket without AbortSignal); uncaught errors break `cleanText` reply | **Merged** — timeout guards, fetch error handling, file size logging added |
| **High** | [#1924](https://github.com/qwibitai/nanoclaw/pull/1924) / [#1885](https://github.com/qwibitai/nanoclaw/pull/1885) | Container `/home/node` permissions fix reverted — mapped host UIDs still cannot write in some configurations | **Regressed** — needs re-fix in v2 context |
| **Medium** | [#1916](https://github.com/qwibitai/nanoclaw/pull/1916) | Numeric config env vars (`CONTAINER_TIMEOUT`, `IDLE_TIMEOUT`) vulnerable to `NaN`/non-positive values | **Open** — fix pattern established, unmerged |
| **Medium** | [#1912](https://github.com/qwibitai/nanoclaw/pull/1912) | Empty container stdout produces misleading error in fallback parser | **Open** — parser fix ready |
| **Medium** | [#1917](https://github.com/qwibitai/nanoclaw/pull/1917), [#1913](https://github.com/qwibitai/nanoclaw/pull/1913) | `@Andy` trigger references not renamed when `ASSISTANT_NAME` customized | **Open** — two competing fixes (duplicates?) |

**Stability assessment**: v2's massive rewrite introduces expected teething issues. The reverted container permissions fix and open config validation PRs suggest **deployment-time reliability gaps** not fully caught in review.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|---|---|---|
| **WeChat native channel** | [#1921](https://github.com/qwibitai/nanoclaw/pull/1921) | High — aligns with v2's expanded channel model, uses official Tencent protocol |
| **Remote storage (rclone)** | [#1598](https://github.com/qwibitai/nanoclaw/pull/1598) | Medium — infrastructure skill, blocked on maintainer review since April 2 |
| **Branded setup automation** | [#1908](https://github.com/qwibitai/nanoclaw/pull/1908) | **Shipped in v2** — reduces onboarding friction, signals product-market fit focus |

**Emerging pattern**: Strong push toward **non-technical user accessibility** (setup script) and **Chinese market integration** (WeChat). The project appears to be pivoting from developer-tool toward consumer-deployable product.

---

## 7. User Feedback Summary

**Pain points inferred from PR descriptions:**

| Pain Point | Evidence | Severity |
|---|---|---|
| Setup friction on WSL | [#1904](https://github.com/qwibitai/nanoclaw/pull/1904), [#1903](https://github.com/qwibitai/nanoclaw/pull/1903) | High — Windows developers hitting silent failures |
| Silent container failures | [#1885](https://github.com/qwibitai/nanoclaw/pull/1885), [#1912](https://github.com/qwibitai/nanoclaw/pull/1912) | High — "0 SDK messages", empty stdout = no error clarity |
| Image generation hangs | [#1923](https://github.com/qwibitai/nanoclaw/pull/1923) | High — Telegram delivery never completes, no user feedback |
| Custom assistant naming incomplete | [#1917](https://github.com/qwibitai/nanoclaw/pull/1917), [#1913](https://github.com/qwibitai/nanoclaw/pull/1913) | Low — cosmetic, breaks immersion for branded deployments |

**Satisfaction signal**: Community-created WeChat groups indicate organic adoption enthusiasm. However, the duplicate/spam issues suggest **moderation tooling gaps** at scale.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#1598](https://github.com/qwibitai/nanoclaw/pull/1598) — Remote storage skill | 21 days | Stale; contributor explicitly requested priority review | Maintainer review or explicit deferral |
| [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) — ISO 8601 timestamps | 4 days | v2 data consistency; affects API contracts | Merge before v2 adoption widens |
| [#1922](https://github.com/qwibitai/nanoclaw/issues/1922), [#1920](https://github.com/qwibitai/nanoclaw/issues/1920) — Duplicate WeChat invites | 1 day | Noise, potential spam | Close as duplicates, establish community guidelines |
| [#1913](https://github.com/qwibitai/nanoclaw/pull/1913) vs [#1917](https://github.com/qwibitai/nanoclaw/pull/1917) | 1 day | Duplicate fixes for same bug | Deduplicate, select preferred implementation |

**Maintainer bandwidth concern**: 27 PRs in 24 hours with 8 still open suggests review velocity may not sustain. The v2 rewrite's merge pattern (multiple packaging PRs: #1919, #1915, #1914, #1911) indicates **release process confusion** that could be streamlined with clearer branching strategy.

---

*Digest generated from GitHub activity 2026-04-22. All links: https://github.com/qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-23

## 1. Today's Overview

NullClaw saw moderate community activity over the past 24 hours with **10 issues updated** (5 closed, 5 remaining open) and **1 new pull request** opened but not yet merged. No new releases were published. The activity pattern suggests active issue triage with maintainers closing older documentation and bug issues, while new user-facing problems—particularly around gateway performance and UX clarity—continue to surface. The single PR addresses a concrete CLI usability improvement, indicating contributor responsiveness to user feedback. Overall project health appears **stable with steady community engagement**, though the lack of merged code changes today suggests development velocity may be constrained by review bandwidth.

---

## 2. Releases

**No new releases** published in the last 24 hours.

---

## 3. Project Progress

**No PRs were merged or closed today.** The only PR activity is:

| PR | Status | Description |
|:---|:---|:---|
| [#863](https://github.com/nullclaw/nullclaw/pull/863) | **OPEN** | `feat(capabilities): add colored table format for channels with TTY detection` by [manelsen](https://github.com/manelsen) |

This PR directly implements the enhancement requested in [#860](https://github.com/nullclaw/nullclaw/issues/860) (filed same day), demonstrating rapid contributor response to user feedback. The feature adds:
- Sorted table format replacing comma-separated channel lists
- Semantic color coding (green/yellow/red) for channel status
- TTY auto-detection for appropriate output formatting

**No other features advanced to completion today.**

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue/PR | Comments | Topic | Underlying Need |
|:---|:---|:---:|:---|:---|
| 1 | [#826](https://github.com/nullclaw/nullclaw/issues/826) | **13** | Tailscale + gateway integration docs | Users need **secure remote access patterns** for self-hosted deployments; documentation gap for VPN/tunneling setups |
| 2 | [#638](https://github.com/nullclaw/nullclaw/issues/638) | **10** | OpenTelemetry diagnostics in Podman | **Observability maturity** — users running containerized deployments need reliable telemetry integration |
| 3 | [#183](https://github.com/nullclaw/nullclaw/issues/183) | **4** | WhatsApp Web via Baileys (QR code) | **Lower barrier to entry** for WhatsApp — Meta Business API complexity excludes casual/self-hosted users |
| 4 | [#851](https://github.com/nullclaw/nullclaw/issues/851) | **3** | Gateway CPU busy-loop on ARM | **Embedded/edge deployment reliability** — Raspberry Pi users hitting production-blocking performance bug |
| 5 | [#606](https://github.com/nullclaw/nullclaw/issues/606) | **3** | Matrix protocol multiple failures | **Protocol completeness** — Matrix integration lacks basic chat bot behaviors (auto-accept invites, mention handling) |

**Key Insight:** The top discussions reveal a tension between NullClaw's enterprise-oriented Meta API integrations and its self-hosted user base seeking simpler, lightweight alternatives (Baileys QR, Tailscale, ARM edge devices).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Details | Fix PR? |
|:---|:---|:---|:---|:---:|
| **🔴 Critical** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | **OPEN** | Gateway busy-loop on `accept4()` EAGAIN — 100% CPU on Raspberry Pi 5 (ARM64/Debian 13). Affects all idle gateway instances on ARM; resource exhaustion risk | ❌ No |
| 🟡 Medium | [#638](https://github.com/nullclaw/nullclaw/issues/638) | **CLOSED** | OTel diagnostics broken in Podman container networking. Likely configuration/docs issue given closure without code reference | N/A |
| 🟡 Medium | [#606](https://github.com/nullclaw/nullclaw/issues/606) | **CLOSED** | Matrix: 4 distinct protocol failures (no auto-invite-accept, no mention check, no room type detection, old message replay on reconnect) | N/A |
| 🟢 Low | [#827](https://github.com/nullclaw/nullclaw/issues/827) | **CLOSED** | `nullclaw channel status` vs `nullclaw doctor` report contradictory CLI health | N/A |
| 🟢 Low | [#39](https://github.com/nullclaw/nullclaw/issues/39) | **CLOSED** | Matrix configuration format unrecognized (docs clarity) | N/A |

**Critical Concern:** [#851](https://github.com/nullclaw/nullclaw/issues/851) is the only **unfixed production bug** with clear performance impact. The `accept4()` EAGAIN busy-loop is a classic non-blocking socket bug—likely missing `EPOLLET`/`EPOLLIN` handling or improper fd flags. No fix PR exists; this should be prioritized for ARM/edge user retention.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Request | Likelihood in Next Version | Rationale |
|:---|:---:|:---|:---|:---|
| [#183](https://github.com/nullclaw/nullclaw/issues/183) | 👍2 | WhatsApp Web via Baileys (QR code login) | **Medium-High** | Most-upvoted open feature; directly addresses #1 user friction (Meta API complexity). Baileys is mature library |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | 👍0 | WeChat QR code login | **Low-Medium** | No existing infrastructure; Chinese market specificity. May depend on contributor interest |
| [#860](https://github.com/nullclaw/nullclaw/issues/860) / [#863](https://github.com/nullclaw/nullclaw/pull/863) | 👍0 | Colored `capabilities` table output | **High** (PR open) | PR already submitted; low risk, immediate UX win |
| [#861](https://github.com/nullclaw/nullclaw/issues/861) | 👍0 | Web UI setup documentation for headless VPS | **Medium** | Documentation-only; high user confusion signals need |

**Predicted Next Release Themes:** CLI UX polish (colors, formatting), messaging protocol expansion (Baileys integration), and documentation modernization for self-hosted deployment patterns.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Documentation inaccessible to non-experts** | [#861](https://github.com/nullclaw/nullclaw/issues/861): *"I don't understand 70% of that"* — Web UI tunneling docs assume DevOps knowledge | High |
| **Enterprise API lock-in friction** | [#183](https://github.com/nullclaw/nullclaw/issues/183): Meta Business API requirements exclude individual/self-hosted users | High |
| **ARM/edge deployment instability** | [#851](https://github.com/nullclaw/nullclaw/issues/851): Production-blocking CPU bug on Raspberry Pi | Critical |
| **Observability integration gaps** | [#638](https://github.com/nullclaw/nullclaw/issues/638): OTel container networking confusion | Medium |
| **Protocol implementations incomplete** | [#606](https://github.com/nullclaw/nullclaw/issues/606): Matrix lacks basic chat bot behaviors | Medium |

### Use Cases Emerging
- **Remote self-hosted agent** via Tailscale/VPN ([#826](https://github.com/nullclaw/nullclaw/issues/826))
- **Containerized deployment** with proper observability (Podman + OTel)
- **Low-cost edge hardware** (Raspberry Pi) as gateway host
- **Personal/small-business messaging** without corporate API registrations

### Satisfaction Signals
- Rapid issue closure rate (5/10 today) suggests responsive maintainers
- Same-day PR response ([#860](https://github.com/nullclaw/nullclaw/issues/860) → [#863](https://github.com/nullclaw/nullclaw/pull/863)) shows healthy contributor ecosystem

---

## 8. Backlog Watch

| Issue | Age | Last Activity | Risk | Action Needed |
|:---|:---:|:---|:---|:---|
| [#183](https://github.com/nullclaw/nullclaw/issues/183) WhatsApp Web/Baileys | **52 days** | 2026-04-22 | **High** — Most-wanted feature, may lose users to alternatives | Maintainer roadmap confirmation; community PR welcome? |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) WeChat QR login | **9 days** | 2026-04-22 | Medium | Clarify if WeChat protocol support is planned or out-of-scope |
| [#851](https://github.com/nullclaw/nullclaw/issues/851) Gateway CPU busy-loop | **4 days** | 2026-04-22 | **Critical** — Unfixed production bug | Assign maintainer; ARM testing environment needed |

**No stale PRs requiring attention** — only [#863](https://github.com/nullclaw/nullclaw/pull/863) is open and was submitted today.

---

*Digest generated from github.com/nullclaw/nullclaw activity on 2026-04-22/23.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-23

## 1. Today's Overview

IronClaw shows **intense development velocity** with 79 items updated in 24 hours (29 issues, 50 PRs), though the 25:4 open-to-closed issue ratio and 39:11 open-to-merged PR ratio indicates heavy in-flight work with limited completion. The project is in a **critical architectural transition period**: Engine V2 dominates all major engineering tracks, with multiple stacked epics (#2767, #2834, #2813) driving coordinated changes across the bridge, orchestrator, LLM surfacing, and prompting layers. **Zero releases** and active staging promotion chaos (135k-LOC batch PRs per #2719) suggest the team is prioritizing foundational refactoring over shipping. Live canary failures (#2823, #2824, #2829, #2832) indicate instability in the provider matrix, particularly for OpenAI-compatible and Anthropic lanes. Community activity includes spam WeChat group invitations requiring cleanup (#2859 closed, #2861, #2862 still open).

---

## 2. Releases

**No new releases.** The latest release remains `v0.26.0` (published 2026-04-21), which has an **active installer regression** on `x86_64-unknown-linux-gnu` ([#2818](https://github.com/nearai/ironclaw/issues/2818)).

---

## 3. Project Progress

### Merged/Closed PRs (11 total, highlights)

| PR | Description | Significance |
|---|---|---|
| [#2870](https://github.com/nearai/ironclaw/pull/2870) | Demo/Abound fixes 8: currency formatting, hidden funding_source_id, forex date validation | Closed; part of ongoing Abound demo hardening |
| [#1594](https://github.com/nearai/ironclaw/pull/1594) | Add `CLAWHUB_ENABLED` flag to disable ClawHub registry | **Closed**; gives enterprise/self-hosted users air-gapped control over skill registry access |
| [#2794](https://github.com/nearai/ironclaw/pull/2794) | Fix: show v2 capabilities in tool registry & `tool_info` | **Closed**; fixes critical V1/V2 tool registry split where `mission_create` existed but was invisible to `tool_info()` |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) | *Issue closed*: IronClaw stopped responding after Notion setup | **Fixed**; Notion integration crash resolved |

### Major In-Flight Engineering (Open PRs)

| PR | Scope | Status |
|---|---|---|
| [#2846](https://github.com/nearai/ironclaw/pull/2846) | **Typed assistant content rollout** (closes #2813) — engine → bridge → web gateway | XL, core-authored; consolidates 5 prior stacked PRs |
| [#2841](https://github.com/nearai/ironclaw/pull/2841) | **Multi-tenant channel instances control plane (Phase 1)** — DB migration, dispatch-key routing | XL, core-authored; foundational for SaaS scaling |
| [#2854](https://github.com/nearai/ironclaw/pull/2854) | **CodeAct host shims + gated rich result objects** — Pythonic orchestration layer | XL, core-authored; A/B testable rollout |
| [#2873](https://github.com/nearai/ironclaw/pull/2873) | **Mission tool family for Engine V2** — 7 built-ins (`mission_create`, `mission_list`, etc.) | XL, regular contributor; deferred-injection architecture |
| [#2872](https://github.com/nearai/ironclaw/pull/2872) | **Real-time token streaming** via `OpenAiCompatStreamingProvider` | XL, new contributor; OpenRouter/Groq support |
| [#2865](https://github.com/nearai/ironclaw/pull/2865) | **Nostr tool + WebSocket host support** | XL, new contributor; decentralized social protocol |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Analysis |
|---|---|---|
| [#2767](https://github.com/nearai/ironclaw/issues/2767) **Epic: Separate engine v2 capability background from callable tool schemas** | 6 comments | **Foundational architecture debt**. HenryPark133 driving the V2 "what the LLM can call" vs "what runs in background" separation. Blocks cleaner prompting and security model. |
| [#2087](https://github.com/nearai/ironclaw/issues/2087) ~~[CLOSED] IronClaw stopped responding after Notion setup~~ | 5 comments | **Resolved agent crash** — Notion setup triggered unhandled state; fix validates the integration flow. |
| [#2813](https://github.com/nearai/ironclaw/issues/2813) **engine-v2: add typed assistant content model** | 5 comments | **Data model clarity** — Serrrfirat fixing over-flattening of assistant tool-use text. PR #2846 now consolidates this. |
| [#2792](https://github.com/nearai/ironclaw/issues/2792) **Epic: Gateway state convergence — eliminate UI/backend state drift** | 3 comments | **Systemic reliability issue**. Ilblackdragon identifies root cause: UI driven by delta streams without authoritative reconciliation. Every "UI desync" report traces here. |

### Underlying Needs
- **Predictable tool behavior**: Users need `tool_info()` to match reality (#2794 fix), and the LLM to understand what it can actually invoke vs. what happens automatically (#2767, #2834)
- **Trust in UI state**: Gateway drift (#2792) erodes user confidence; this is a product-killer if unaddressed
- **Observable, debuggable agent execution**: The typed content model (#2813) and mission tooling (#2873) both serve operator visibility

---

## 5. Bugs & Stability

| Severity | Issue | Details | Fix Status |
|---|---|---|---|
| **P1 — Critical** | [#2832](https://github.com/nearai/ironclaw/issues/2832) Live canary failed: `public-smoke` | Production smoke test failing on commit `bfca5e9` | ❌ No fix PR; same commit implicated in #2823, #2824, #2829 |
| **P1 — Critical** | [#2823](https://github.com/nearai/ironclaw/issues/2823), [#2824](https://github.com/nearai/ironclaw/issues/2824), [#2829](https://github.com/nearai/ironclaw/issues/2829) Provider matrix failures (Anthropic, OpenAI-compatible) | Systematic provider lane failures; suggests regression in provider abstraction or credential pathing | ❌ No fix PR identified |
| **P1 — High** | [#2583](https://github.com/nearai/ironclaw/issues/2583) Routine creation fails with "5 consecutive code errors" | Bug bash finding; routine generation hits LLM code error loop | ❌ Open, 2 comments |
| **P1 — High** | [#2857](https://github.com/nearai/ironclaw/issues/2857) Chat history list disappears from sidebar | UI state loss; likely related to #2792 gateway drift | ❌ Open; PR #2867 addresses sidebar refactor |
| **P2 — Medium** | [#2818](https://github.com/nearai/ironclaw/issues/2818) Installer fails on `x86_64-unknown-linux-gnu` | `v0.26.0` release blocker for Linux users | ❌ Open, 1 comment |
| **P2 — Medium** | [#2833](https://github.com/nearai/ironclaw/issues/2833) Cross-conversation response contamination | Race condition: switching conversations leaks responses | ❌ Open, no comments |
| **P2 — Medium** | [#2858](https://github.com/nearai/ironclaw/issues/2858) Notion OAuth success but "No matching pending authentication gate found" | Auth state desync; related to #2856 | ❌ Open |
| **P2 — Medium** | [#2856](https://github.com/nearai/ironclaw/issues/2856) Notion integration requires excessive user guidance | Agent autonomy failure; tool doesn't self-configure | ❌ Open |
| **P2 — Medium** | [#2855](https://github.com/nearai/ironclaw/issues/2855) Portfolio tool installation fails (missing build artifact) | Tool marketplace broken for specific tool | ❌ Open |
| **P2 — Medium** | [#2231](https://github.com/nearai/ironclaw/issues/2231) Multiple chats cannot run in parallel | Concurrency queue blocking; architectural limitation | ❌ Open, 1 comment |

**Stability Assessment**: 🔴 **Degraded**. Four live canary failures on the same commit, multiple P1 UI/auth issues from bug bash, and an unreleased installer regression. The project is not in a shippable state.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in Next Release |
|---|---|---|
| [#2843](https://github.com/nearai/ironclaw/issues/2843) **Cost-based budgeting: USD budgets cascading user → project → mission → thread** | Major commercial/enterprise need; replaces primitive iteration/time caps | Medium — high complexity, high value; ilblackdragon authored |
| [#2834](https://github.com/nearai/ironclaw/issues/2834) + [#2835](https://github.com/nearai/ironclaw/issues/2835), [#2836](https://github.com/nearai/ironclaw/issues/2836), [#2837](https://github.com/nearai/ironclaw/issues/2837), [#2838](https://github.com/nearai/ironclaw/issues/2838) **Engine V2 compact action cards & discovery-guided prompting** | Stacked 4-PR epic with explicit landing order (PR0→PR3); serrrfirat executing | **High** — actively coded, low-to-medium risk per issue labels |
| [#2828](https://github.com/nearai/ironclaw/issues/2828) **Harness testing epic — unify replay, E2E, live canary, eval** | Infrastructure debt; needed to prevent current canary failure mode | Medium — acknowledged post-#2367, but resource-intensive |
| [#2719](https://github.com/nearai/ironclaw/issues/2719) **Migrate from staging promotion bot to GitHub-native merge queue** | CI/CD hygiene; 135k-LOC batches are unreviewable | Medium — serrrfirat filed, but requires org process change |
| [#2872](https://github.com/nearai/ironclaw/pull/2872) **Real-time token streaming** | User experience improvement; competitive with modern LLM UIs | Medium — PR open, new contributor, needs review bandwidth |
| [#2865](https://github.com/nearai/ironclaw/pull/2865) **Nostr + WebSocket support** | Decentralized protocol expansion | Low-Medium — niche, but WASM tool pattern is established |

**Predicted Next Release Themes**: Engine V2 prompt/tooling hardening (#2834 family), multi-tenant foundations (#2841), and mission tooling (#2873). Cost budgeting (#2843) may slip to following cycle due to DB scope.

---

## 7. User Feedback Summary

### Pain Points (from bug bash + issues)

| Theme | Evidence | Severity |
|---|---|---|
| **OAuth/auth state is fragile** | #2858 (Notion OAuth success but gate not found), #2856 (excessive guidance needed) | High — kills integrations |
| **UI state untrustworthy** | #2857 (sidebar disappears), #2833 (cross-conversation contamination), #2792 (gateway drift epic) | Critical — product credibility |
| **Installation/setup friction** | #2818 (Linux installer broken), #2855 (tool install fails) | High — blocks adoption |
| **Agent execution opacity** | #2583 (routine creation fails opaquely), #2087 (Notion setup → hang) | Medium — debuggability |
| **Concurrency limitations** | #2231 (no parallel chats) | Medium — power user blocker |

### Positive Signals
- Active community forming around WeChat (despite spam issues #2861-2862)
- New contributor PRs accepted: streaming (#2872), Nostr (#2865), Manifest provider (#2863)
- Mission framework (#2873) and CodeAct shims (#2854) show investment in developer experience

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|---|---|---|---|
| [#1764](https://github.com/nearai/ironclaw/pull/1764) **Abound demo — Responses API, credential injection, skills, guardrails** | 24+ days | **High risk, XL scope** | Decision: merge or split? Longest-running open PR, touches 13 scopes |
| [#2168](https://github.com/nearai/ironclaw/pull/2168) **Path-based credential matching for per-endpoint auth** | 15+ days | High risk | Security-critical; blocked by Abound demo dependencies? |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) **Aliyun Coding Plan support** | 34+ days | Low risk, XL scope | International expansion; needs rebase or maintainer review |
| [#2231](https://github.com/nearai/ironclaw/issues/2231) **Multiple chats cannot run in parallel** | 13 days | P2 bug | Architectural decision on worker concurrency model |
| [#2514](https://github.com/nearai/ironclaw/issues/2514) ~~[CLOSED] Incomplete provider config causes startup failure~~ | Resolved | — | Pattern: provider config validation needs hardening (see #2823-2832) |

**Maintainer Attention Required**: 
- **CI/CD crisis**: #2719 (merge queue migration) and canary failures (#2823-2832) on same commit suggest the staging promotion system is masking regressions. The 135k-LOC batch PRs are unreviewable.
- **Abound demo PR #1764**: 24 days open, high risk, blocking credential injection (#2168) and other security work. Needs explicit triage decision.
- **Spam cleanup**: WeChat group issues #2861, #2862 should be closed as duplicates of #2859; moderation policy needed.

---

*Digest generated from GitHub activity 2026-04-22 to 2026-04-23. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-23

## 1. Today's Overview

LobsterAI shows **high engineering velocity** with 28 PRs updated in the last 24 hours (19 merged/closed, 9 remaining open) against a single active issue. The project demonstrates NetEase Youdao's aggressive iteration cycle with no new releases cut today. Development activity concentrates on **multi-platform stability** (Windows installer, macOS updater, Defender exclusions), **IM platform expansion** (Discord, Telegram multi-bot support), and **local model ecosystem integration** (LM Studio). The 19:1 merge-to-open ratio indicates strong maintainer bandwidth, though 7 stale PRs from March received only timestamp updates without substantive review, suggesting backlog accumulation.

---

## 2. Releases

**No new releases** (v2026.4.22 was the last version referenced in PR #1790).

---

## 3. Project Progress

### Merged/Closed PRs Today (19 items)

| PR | Author | Focus Area | Key Change |
|:---|:---|:---|:---|
| [#1795](https://github.com/netease-youdao/LobsterAI/pull/1795) | liuzhq1986 | OpenClaw/gateway | **Critical fix**: Hot-reload now updates model capability snapshot; resolves silent image-dropping for subscription models |
| [#1794](https://github.com/netease-youdao/LobsterAI/pull/1794) | liugang519 | IM/Discord | Multi-bot support for Discord integration |
| [#1793](https://github.com/netease-youdao/LobsterAI/pull/1793) | liuzhq1986 | Updater UX | Removes intrusive auto-popup on download ready; badge-only notification + styled changelog |
| [#1792](https://github.com/netease-youdao/LobsterAI/pull/1792) | liugang519 | IM/Telegram | Multi-robot support for Telegram |
| [#1791](https://github.com/netease-youdao/LobsterAI/pull/1791) | nmgwddj | Windows installer | NSIS observability: precise timing logs, progress messaging, stale directory rename conflict resolution |
| [#1790](https://github.com/netease-youdao/LobsterAI/pull/1790) | liuzhq1986 | WeCom plugin | Bump wecom-openclaw-plugin to v2026.4.22 |
| [#1789](https://github.com/netease-youdao/LobsterAI/pull/1789) | winsan-zhang | Enterprise config | Resolve config sync merge conflicts |
| [#1788](https://github.com/netease-youdao/LobsterAI/pull/1788) | liuzhq1986 | Skill marketplace | Proxy marketplace fetch through main process to resolve CORS |
| [#1787](https://github.com/netease-youdao/LobsterAI/pull/1787) | liugang519 | Model config | **LM Studio support** added to model configuration |
| [#1786](https://github.com/netease-youdao/LobsterAI/pull/1786) | liuzhq1986 | Windows security | Narrow Windows Defender exclusion from broad `$INSTDIR` to 4 precise subdirectories (cfmind, python-win, SKILLs, app.asar.unpacked); fixes Tencent PC Manager false positive |
| [#1785](https://github.com/netease-youdao/LobsterAI/pull/1785) | liuzhq1986 | Update system | Add version parameter to update request |

**Technical trajectory**: Heavy investment in **enterprise deployment reliability** (installer robustness, security exclusions, config sync) and **IM platform breadth** (Discord, Telegram, WeCom). The LM Studio integration signals strategic positioning for local/self-hosted AI workflows.

---

## 4. Community Hot Topics

| Item | Status | Engagement | Analysis |
|:---|:---|:---|:---|
| [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) Write tool execution always fail | **OPEN** | 1 comment, 0 👍 | **Critical user-facing regression** — Write/Edit tools failing for multiple days, persisting across app updates. User-provided screenshot suggests this is a widespread, not isolated, failure. No linked fix PR yet. |

**Underlying need**: Tool execution reliability is foundational for LobsterAI's agent capabilities. The persistence across updates indicates either (a) server-side API regression, (b) broken client-side tool schema, or (c) permission/sandboxing issue. The single comment and zero upvotes may reflect user frustration rather than low impact — users may be abandoning the tool rather than engaging on GitHub.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) | Write/Edit tools completely non-functional; user reports "last few days" | **NO FIX PR IDENTIFIED** |
| 🟡 **High** | [#1795](https://github.com/netease-youdao/LobsterAI/pull/1795) *(fixed)* | Silent image dropping for subscription models due to stale capability cache | Fixed via gateway restart on config change |
| 🟡 **High** | [#1791](https://github.com/netease-youdao/LobsterAI/pull/1791) *(fixed)* | Windows installer poor observability, upgrade conflicts | Fixed with logging + rename conflict resolution |
| 🟡 **High** | [#1786](https://github.com/netease-youdao/LobsterAI/pull/1786) *(fixed)* | Broad Defender exclusions triggering antivirus false positives | Fixed with surgical subdirectory targeting |
| 🟢 **Medium** | [#1789](https://github.com/netease-youdao/LobsterAI/pull/1789) *(fixed)* | Enterprise config sync merge conflicts | Fixed |

**Stability assessment**: Strong proactive fixing of infrastructure/enterprise issues, but **active critical regression (#1796) unaddressed in today's merges**. The tool execution failure may relate to [#1795](https://github.com/netease-youdao/LobsterAI/pull/1795)'s model capability caching — if Write/Edit tools depend on model capability detection, the same startup-sync race condition could affect tool routing.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|:---|:---|:---|
| **LM Studio local model support** | [#1787](https://github.com/netease-youdao/LobsterAI/pull/1787) — **MERGED** | ✅ **Shipped** |
| **Discord multi-bot** | [#1794](https://github.com/netease-youdao/LobsterAI/pull/1794) — **MERGED** | ✅ **Shipped** |
| **Telegram multi-robot** | [#1792](https://github.com/netease-youdao/LobsterAI/pull/1792) — **MERGED** | ✅ **Shipped** |
| Double-click session rename | [#641](https://github.com/netease-youdao/LobsterAI/pull/641) — stale, open | Medium — simple UX win, low risk |
| `!` shell command shortcut | [#658](https://github.com/netease-youdao/LobsterAI/pull/658) — stale, open | Medium — high user value, security review needed |
| Cross-platform shortcut settings | [#679](https://github.com/netease-youdao/LobsterAI/pull/679) — stale, open | Medium — macOS UX gap is painful |
| Message rollback & edit-regenerate | [#697](https://github.com/netease-youdao/LobsterAI/pull/697) — stale, open | **High** — competitive with Cursor/Claude Code; complex but high-impact |

**Roadmap prediction**: The IM platform expansion (Discord, Telegram, WeCom) and local model support (LM Studio) suggest LobsterAI is positioning as **enterprise-friendly, deployment-flexible alternative** to closed AI assistants. Message rollback/edit-regenerate ([#697](https://github.com/netease-youdao/LobsterAI/pull/697)) is the most significant missing competitive feature.

---

## 7. User Feedback Summary

### Explicit Pain Points
- **Tool execution reliability**: "Write/Edit tools always fail for the last few days, update the app, still the same" — [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796). Suggests regression testing gap for core agent capabilities.
- **Update interruption**: Prior macOS freeze during update (addressed in [#656](https://github.com/netease-youdao/LobsterAI/pull/656)) and Windows installer opacity (addressed in [#1791](https://github.com/netease-youdao/LobsterAI/pull/1791)) indicate **update experience is a friction point**.

### Implied Needs (from PR analysis)
- **Silent, non-intrusive updates**: [#1793](https://github.com/netease-youdao/LobsterAI/pull/1793)'s badge-only notification suggests user pushback on disruptive update prompts.
- **Antivirus compatibility**: [#1786](https://github.com/netease-youdao/LobsterAI/pull/1786) reflects enterprise deployment friction with security software.
- **POPO (NetEase internal IM) documentation**: [#649](https://github.com/netease-youdao/LobsterAI/pull/649) — NetEase employee requesting better internal onboarding.

### Satisfaction Signals
- High merge velocity suggests internal/user validation for most features.
- No negative reactions on merged PRs.

---

## 8. Backlog Watch

**7 stale PRs from March 2026** received timestamp updates on 2026-04-22 but no substantive review or merge action. These require maintainer attention:

| PR | Age | Value | Risk | Recommendation |
|:---|:---|:---|:---|:---|
| [#697](https://github.com/netease-youdao/LobsterAI/pull/697) Message rollback & edit-regenerate | 31 days | **Very High** — core UX gap | Medium complexity | **Prioritize review** — competitive necessity |
| [#679](https://github.com/netease-youdao/LobsterAI/pull/679) Cross-platform shortcuts | 32 days | High — macOS/Linux equity | Low | Quick win, merge after rebase |
| [#658](https://github.com/netease-youdao/LobsterAI/pull/658) `!` shell command shortcut | 32 days | High — power user feature | Medium — security sandbox | Review for `execFile` safety, then merge |
| [#656](https://github.com/netease-youdao/LobsterAI/pull/656) macOS update freeze fix | 32 days | High — stability | Low | Verify against current updater code (#1793 may overlap) |
| [#696](https://github.com/netease-youdao/LobsterAI/pull/696) Windows boot auto-start silent exit | 31 days | High — enterprise deployment | Medium | Review `window-all-closed` logic interaction with #1791 |
| [#684](https://github.com/netease-youdao/LobsterAI/pull/684) useMemo optimization | 30 days | Low — performance | Very low | Trivial review, merge or close |
| [#647](https://github.com/netease-youdao/LobsterAI/pull/647) Duplicate error messages | 32 days | Medium — polish | Very low | Merge or close |
| [#641](https://github.com/netease-youdao/LobsterAI/pull/641) Double-click rename | 32 days | Low — nice-to-have | Very low | Merge or close |
| [#649](https://github.com/netease-youdao/LobsterAI/pull/649) POPO doc link | 32 days | Low — internal | Very low | Merge or close |

**Backlog health concern**: 32-day stale PRs with only automated timestamp updates suggest **bot-driven "keep-alive" behavior without human triage**. This creates contributor friction and may indicate team capacity constraints despite high merge velocity on new work.

---

*Digest generated from GitHub activity 2026-04-22 to 2026-04-23. All links: https://github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-23

## 1. Today's Overview

Moltis shows **strong development velocity** with 25 PRs updated in the last 24 hours (15 open, 10 merged/closed) and 6 issues processed (5 closed, 1 open). The project demonstrates healthy maintainer responsiveness with same-day closure on most bug reports. Activity is concentrated around **provider compatibility fixes**, **platform hardening** (macOS signing, WSL2 support), and **ecosystem expansion** (Signal, Home Assistant, MCP servers). The single open enhancement request suggests the core chat UX is stabilizing. A new daily release (`20260422.01`) indicates active CI/CD cadence.

---

## 2. Releases

**[20260422.01](https://github.com/moltis-org/moltis/releases/tag/20260422.01)** — Daily release (no detailed changelog provided in source data)

*Note: Release notes appear minimal; project may use date-based versioning with PR-level detail rather than curated release notes.*

---

## 3. Project Progress

### Merged/Closed PRs (10 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| **[#843](https://github.com/moltis-org/moltis/pull/843)** | penso | docs: Refocus comparisons on OpenClaw and Hermes only; refresh stats | Competitive positioning clarified |
| **[#829](https://github.com/moltis-org/moltis/pull/829)** | penso | feat: Bundled skill category management in onboarding + settings | UX: 19 categories, ~100 skills now user-configurable |
| **[#834](https://github.com/moltis-org/moltis/pull/834)** | penso | fix: Resolve `${VAR}` placeholders against `[env]` section and DB env vars | **Critical config system fix** — two-pass loading, runtime re-substitution |
| **[#832](https://github.com/moltis-org/moltis/pull/832)** | penso | fix: Apply Kimi router overrides in Fireworks integration tests | Test reliability for #810 fix |
| **[#833](https://github.com/moltis-org/moltis/pull/833)** | penso | fix: Normalize non-strict tool schema unions | Fixes OpenRouter + Google AI Studio regression from #793 |
| **[#836](https://github.com/moltis-org/moltis/pull/836)** | penso | fix: Preserve Gemini tool call metadata | Resolves #375 regression, adds e2e test |
| **[#835](https://github.com/moltis-org/moltis/pull/835)** | penso | fix: Skip sysfs tmpfs mounts on WSL2 | Docker sandbox compatibility |
| ~~#842~~ → replaces **[#422](https://github.com/moltis-org/moltis/pull/422)** | Cstewart-HC | fix: macOS release signing and notarization (stale, superseded) | Superseded by #842 |

**Key advances:** Configuration system hardened with two-pass variable resolution; provider compatibility layer stabilized for Fireworks/Kimi, OpenRouter, and Gemini; WSL2 Docker support improved; macOS release pipeline nearing completion.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **[#824](https://github.com/moltis-org/moltis/issues/824)** — Don't auto-scroll to end of chat if scrolled up | 1 comment, OPEN | **Only open issue** — reflects mature UX polish expectations. Users want chat behavior parity with Discord/Slack (retain scroll position when reading history). Low engagement suggests either niche concern or users found workaround. |
| **[#810](https://github.com/moltis-org/moltis/issues/810)** → closed via #832, #833 | 1 comment, CLOSED | Fireworks Fire Pass (Kimi K2.5 Turbo) 400 errors — **high-priority provider integration** quickly resolved. Shows responsive maintainer attention to emerging model providers. |
| **[#783](https://github.com/moltis-org/moltis/pull/783)**, **[#800](https://github.com/moltis-org/moltis/pull/800)**, **[#801](https://github.com/moltis-org/moltis/pull/801)** | AutoDoc batches | Automated documentation maintenance at scale (44 docs audited). Indicates investment in docs-as-code, though "undefined" comments suggest limited human review. |

**Underlying needs:** Chat UX refinement for power users; rapid provider onboarding for new models; documentation freshness without maintainer bottleneck.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | **[#810](https://github.com/moltis-org/moltis/issues/810)** / **[#832](https://github.com/moltis-org/moltis/pull/832)** | Fireworks Kimi K2.5 Turbo 400 errors — provider integration broken | **FIXED** — router overrides applied |
| 🔴 **High** | **[#793](https://github.com/moltis-org/moltis/issues/793)** (regression) / **[#833](https://github.com/moltis-org/moltis/pull/833)** | OpenRouter + Google AI Studio tool schema regression | **FIXED** — non-strict schema normalization |
| 🟡 **Medium** | **[#375](https://github.com/moltis-org/moltis/issues/375)** (regression) / **[#836](https://github.com/moltis-org/moltis/pull/836)** | Gemini tool call metadata lost on persistence | **FIXED** — metadata preserved + e2e test added |
| 🟡 **Medium** | **[#828](https://github.com/moltis-org/moltis/issues/828)** / **[#835](https://github.com/moltis-org/moltis/pull/835)** | Docker sandbox fails on WSL2 (missing `/sys/class/dmi`) | **FIXED** — runtime WSL2 detection, skip incompatible mounts |
| 🟡 **Medium** | **[#770](https://github.com/moltis-org/moltis/issues/770)** | Some env variables cannot be resolved | **FIXED** via **[#834](https://github.com/moltis-org/moltis/pull/834)** |
| 🟡 **Medium** | **[#773](https://github.com/moltis-org/moltis/issues/773)** | Push message CTA 404 on PWA | **FIXED** |
| 🟢 **Low** | **[#823](https://github.com/moltis-org/moltis/issues/823)** | `RUST_LOG=moltis_gateway=debug` fills disk with broadcast messages | **FIXED** — likely log level/filter adjustment |
| 🟢 **Low** | **[#344](https://github.com/moltis-org/moltis/issues/344)** / **[#839](https://github.com/moltis-org/moltis/pull/839)** | Vault sealed state invisible in main app UI | **FIX PENDING** — PR open, adds banner |

**Stability assessment:** Excellent bug closure rate (5/5 closed issues have fixes). Two regression fixes (#793, #375) with added test coverage indicate maturing QA. Only #839 remains open for vault UX.

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Feature | Likelihood in Next Version | Signal Strength |
|:---|:---|:---|:---|
| **[#840](https://github.com/moltis-org/moltis/pull/840)** | MCP server management skill + post-install recipes | **High** — Core infrastructure for agent ecosystem | 🔥 Strong |
| **[#844](https://github.com/moltis-org/moltis/pull/844)** | Default sub-agent presets (research, coder, reviewer, etc.) + session Modes | **High** — Onboarding-critical, inspired by Hermes/OpenClaw | 🔥 Strong |
| **[#841](https://github.com/moltis-org/moltis/pull/841)** | Signal-cli channel integration | **Medium-High** — Complete implementation, feature-flagged | 🔥 Strong |
| **[#827](https://github.com/moltis-org/moltis/pull/827)** | Native Home Assistant integration crate | **Medium** — New crate, needs review bandwidth | 🔥 Moderate |
| **[#837](https://github.com/moltis-org/moltis/pull/837)** | Per-project `code_index_enabled` toggle | **Medium-High** — Backend ready, scoped change | 🔥 Moderate |
| **[#824](https://github.com/moltis-org/moltis/issues/824)** | Chat auto-scroll behavior fix | **Medium** — Straightforward UX enhancement | 🔥 Moderate |
| **[#470](https://github.com/moltis-org/moltis/pull/470)** | Tool execution witness recording + zkperf-service | **Low-Medium** — Long-running PR (since March), complex | 🔥 Weak (stalled?) |

**Emerging themes:** Agent orchestration (presets, MCP, witness recording), communication channel breadth (Signal, existing WhatsApp/Discord/Nostr), smart home integration (Home Assistant), and developer experience (code indexing control).

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact | Resolution |
|:---|:---|:---|
| **Provider compatibility** (#810) | Cannot use latest models (Kimi K2.5 Turbo) | Rapid fix — positive signal |
| **Config/env resolution** (#770, #834) | Deployment failures, secrets not loading | Architectural fix with two-pass loading |
| **WSL2 development** (#828) | Docker sandbox unusable on Windows dev machines | Fixed with runtime detection |
| **Debug logging disk exhaustion** (#823) | Production debugging risky | Fixed |
| **Vault sealed confusion** (#344, #839) | App appears "broken" after restart, no guidance | PR pending — UX gap |

### Satisfaction Indicators
- **Responsive maintainers:** All bugs from 2026-04-20 to 2026-04-22 closed within 1-2 days
- **Platform breadth:** Users getting native macOS, WSL2, PWA support
- **Ecosystem growth:** Signal, Home Assistant, MCP indicate ambitious but practical expansion

### Dissatisfaction Risks
- **[#824](https://github.com/moltis-org/moltis/issues/824):** Chat UX polish lagging behind core feature growth — "death by a thousand cuts" for daily users
- **Documentation freshness:** AutoDoc batches (#783, #800, #801) suggest docs struggle to keep pace with code changes

---

## 8. Backlog Watch

| PR/Issue | Age | Risk | Needs |
|:---|:---|:---|:---|
| **[#470](https://github.com/moltis-org/moltis/pull/470)** — Tool execution witness + zkperf | ~1 month (2026-03-23) | 🔶 **Stagnation risk** | Maintainer review, scope clarification (zkperf dependency?) |
| **[#422](https://github.com/moltis-org/moltis/pull/422)** → **[#842](https://github.com/moltis-org/moltis/pull/842)** | ~6 weeks | 🔶 **Superseded but pattern** | #842 now active; Greptile review feedback addressed |
| **[#783](https://github.com/moltis-org/moltis/pull/783)** | 5 days | 🟡 **Batch review needed** | Human review of 44 automated doc changes — trust but verify |

**Concerns:** PR #470 (witness recording) is the longest-running significant feature PR. The zkperf-service integration may be blocked on external dependencies or architectural review. Consider splitting witness recording (valuable standalone) from zkperf integration.

---

*Digest generated from github.com/moltis-org/moltis activity on 2026-04-22 to 2026-04-23.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-23

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community velocity** with 89 total updates in 24 hours (40 issues, 49 PRs), indicating an active development cycle following the v1.1.3 release. The project is experiencing **growing pains from rapid rebranding and expansion** — multiple issues reveal user confusion between "CoPaw" and "QwenPaw" naming, PyPI version lag (v1.0.2 vs. v1.1.3), and migration friction. The 23 open issues vs. 17 closed suggests **slightly backlogged issue triage**, while 22 open PRs against 27 merged/closed indicates healthy contributor throughput but potential review bottleneck. The v1.1.3 release's backup/restore system represents significant infrastructure investment for enterprise deployability.

---

## 2. Releases

### [v1.1.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.3)

| Aspect | Details |
|--------|---------|
| **Agent System: Backup & Restore** | Scoped snapshots of agents, skills, memory, and sessions with per-agent selection; import/export as ZIP files ([#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534), [#3655](https://github.com/agentscope-ai/QwenPaw/pull/3655)) |

**Migration Notes / Concerns:**
- **PyPI availability gap**: Multiple users report PyPI stuck at v1.0.2 while release notes show v1.1.2/v1.1.3 ([#3637](https://github.com/agentscope-ai/QwenPaw/issues/3637), [#3675](https://github.com/agentscope-ai/QwenPaw/issues/3675)) — source install currently required
- **Rebrand migration path unclear**: Users asking how to migrate CoPaw environments/memory to QwenPaw ([#3659](https://github.com/agentscope-ai/QwenPaw/issues/3659))

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Description | Impact |
|----|-------------|--------|
| [#3694](https://github.com/agentscope-ai/QwenPaw/pull/3694) | Shell invasion guard configuration (per-check toggles for `ShellEvasionGuardian`) | Security hardening for enterprise deployments |
| [#3696](https://github.com/agentscope-ai/QwenPaw/pull/3696) | Dynamic module registration for plugins (eliminates generated files) | Cleaner plugin architecture |
| [#3685](https://github.com/agentscope-ai/QwenPaw/pull/3685) | WeChat channel: accept empty `sendmessage` response as success | Fixes false-positive errors in iLink integration |
| [#3683](https://github.com/agentscope-ai/QwenPaw/pull/3683) | Local icon bundling (replaces Alibaba CDN dependencies) | **Offline/LAN deployment support** — fixes [#3323](https://github.com/agentscope-ai/QwenPaw/issues/3323), [#3665](https://github.com/agentscope-ai/QwenPaw/issues/3665) |
| [#3388](https://github.com/agentscope-ai/QwenPaw/pull/3388) | Bundle icons locally for offline/LAN deployment | Same theme as above, comprehensive CDN elimination |

**Features Advancing:**
- **Memory system evolution**: PR [#2141](https://github.com/agentscope-ai/QwenPaw/pull/2141) routes memory compaction output to user channels (not just web console) — critical for multi-channel deployments
- **Tool guard approval UX**: PR [#3656](https://github.com/agentscope-ai/QwenPaw/pull/3656) adds cross-session approval routing with UI confirmation buttons; PR [#3652](https://github.com/agentscope-ai/QwenPaw/pull/3652) adds click-to-approve vs. `/approve` command
- **LLM routing UI**: PR [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) adds model routing interface (console-only, blocked on backend PR #3550)

---

## 4. Community Hot Topics

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#3693](https://github.com/agentscope-ai/QwenPaw/issues/3693) Anthropic protocol type error with Volcano CodingPlan model | **13 comments** | **Critical integration bug**: Async iteration on non-streaming Message objects breaks Feishu channel. Indicates protocol adapter layer needs robustness for non-OpenAI streaming implementations. |
| 2 | [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) Dream Log Output (梦境日志输出) | 6 comments | **Novel memory UX concept**: Users want visibility into memory consolidation ("dreams") for transparency and debugging. Suggests memory system is being actively used, not just experimental. |
| 3 | [#3687](https://github.com/agentscope-ai/QwenPaw/issues/3687) `write_file` truncates at ~6000 bytes | 6 comments | **Tool reliability gap**: Hard limit breaks code generation workflows. Closed without clear resolution — may need chunked writing or configurable limits. |
| 4 | [#3637](https://github.com/agentscope-ai/QwenPaw/issues/3637) / [#3675](https://github.com/agentscope-ai/QwenPaw/issues/3675) Version confusion: CoPaw vs QwenPaw, PyPI lag | 6 + 4 comments | **Branding/distribution crisis**: Multiple users blocked on upgrades. Closed without satisfactory answers — reputation risk. |

**Underlying Needs:**
- **Protocol diversity**: Anthropic/Volcano/Claude integrations need first-class support, not bolt-on
- **Observable AI**: "Dream logs" represent demand for explainable memory systems
- **Trust in distribution**: PyPI lag and rebrand confusion erode enterprise confidence

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#3693](https://github.com/agentscope-ai/QwenPaw/issues/3693) | Anthropic protocol crash: `async for` on non-streaming Message | **No fix PR yet** — active discussion |
| 🔴 **Critical** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) / [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) | MCP client TaskGroup exception → agent zombie state (unresponsive, no error) | **No fix PR yet** — affects production reliability |
| 🟡 **High** | [#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695) | Docker build fails: `git: not found` in v1.1.3 | **PR [#3697](https://github.com/agentscope-ai/QwenPaw/pull/3697)** submitted by same user |
| 🟡 **High** | [#3601](https://github.com/agentscope-ai/QwenPaw/issues/3601) | WebView2 initialization failure → white screen on Windows | **No fix PR yet** |
| 🟡 **High** | [#3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) | Frequent mid-task interruptions (1.1.2) | **No fix PR yet** — vague, needs reproduction |
| 🟢 **Medium** | [#3688](https://github.com/agentscope-ai/QwenPaw/issues/3688) | Built-in skills ignore `act` language setting → mixed-language prompts | **No fix PR yet** |
| 🟢 **Medium** | [#3707](https://github.com/agentscope-ai/QwenPaw/issues/3707) | MiniMax M2.7 hardcoded `supports_image=False` despite API capability | **No fix PR yet** — one-line fix candidate |
| 🟢 **Medium** | [#3701](https://github.com/agentscope-ai/QwenPaw/issues/3701) | Windows Defender flags v1.1.3 installer as malware | **No fix PR yet** — code signing needed |

**Regression Pattern**: v1.1.3 introduces Docker build regression; MCP subsystem shows systemic stability issues across versions.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Dream log output / memory observability** | [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) | **High** | Aligns with active memory work; low complexity, high UX value |
| **OpenAI Responses API for custom providers** | [#3531](https://github.com/agentscope-ai/QwenPaw/issues/3531) | **Medium** | Standardizing on OpenAI's evolving API; blocked by provider abstraction maturity |
| **Configurable shell command timeout** | [#3593](https://github.com/agentscope-ai/QwenPaw/issues/3593) | **High** | Simple `agent.json` extension; PR-ready |
| **Semantic skill routing (embedding-based)** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | **Medium** | Performance optimization for skill-heavy agents; under review since April 8 |
| **Plan mode** | [#3686](https://github.com/agentscope-ai/QwenPaw/pull/3686) | **Medium** | New PR, no description yet — likely agent execution strategy feature |
| **External evolution engine integration** | [#3680](https://github.com/agentscope-ai/QwenPaw/issues/3680) | **Low-Medium** | Niche but strategic for research users; requires cron `shell` type support |
| **Smaller/faster EXE builds** | [#3682](https://github.com/agentscope-ai/QwenPaw/issues/3682) | **Low** | 506MB builds are PyInstaller/dependency bloat; architectural, not quick fix |

---

## 7. User Feedback Summary

### Pain Points (Quantified)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Distribution trust** | PyPI lag, Windows Defender false positives, unsigned installers | 🔴 Critical for enterprise adoption |
| **MCP subsystem reliability** | Zombie agents, console freezes, empty env handling | 🔴 Production blocker |
| **Protocol adapter fragility** | Anthropic/Volcano streaming assumptions break | 🟡 High for multi-model users |
| **Windows desktop quality** | WebView2 crashes, large installer, antivirus flags | 🟡 High for primary platform |
| **Internationalization gaps** | Mixed-language prompts, skill descriptions not respecting settings | 🟢 Medium |

### Positive Signals
- **Backup/restore system** well-received for enterprise deployability
- **WeChat channel improvements** actively contributed by community (PRs [#3700](https://github.com/agentscope-ai/QwenPaw/pull/3700), [#3699](https://github.com/agentscope-ai/QwenPaw/pull/3699), [#3685](https://github.com/agentscope-ai/QwenPaw/pull/3685))
- **Tool guard UX** refinement shows responsive security iteration

### Use Case Tensions
- **Power users** (evolution engines, many skills) hitting context/performance limits
- **Enterprise users** need offline deployment, signed packages, stable upgrades
- **Channel integrators** (Feishu, DingTalk, WeChat) need robust protocol handling

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#3338](https://github.com/agentscope-ai/QwenPaw/issues/3338) Error on max turn limit reached | 9 days | **Stability** — unhandled edge case in conversation loop | Reproduce, add graceful degradation |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) Semantic skill routing | 15 days, "need discussions" | **Performance** — large-skill users blocked | Maintainer decision on embedding dependency |
| [#2141](https://github.com/agentscope-ai/QwenPaw/pull/2141) Memory compaction channel routing | 31 days | **UX parity** — console vs. external channels | Review and merge; low risk |
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) LLM routing UI | 8 days, blocked on #3550 | **Feature dependency** — UI ready, backend not | Coordinate with #3550 author or split |
| [#3630](https://github.com/agentscope-ai/QwenPaw/pull/3630) Unit tests for hooks/memory/utils + CI | 3 days, "Under Review" | **Code quality** — test coverage gap | Priority review to prevent regression debt |

**Meta-Concern**: The "Under Review" label on multiple PRs without comment activity suggests **reviewer bandwidth constraint**, not technical blocking. Consider expanding maintainer team or structured review rotation.

---

*Digest generated from agentscope-ai/QwenPaw GitHub activity on 2026-04-23. All links verified against provided data.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-23

**Repository:** [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
**Date:** 2026-04-23

---

## 1. Today's Overview

ZeptoClaw shows **moderate maintenance activity** with 16 PRs updated in the last 24 hours—split evenly between 8 merged/closed and 8 remaining open. Notably, **all activity is automated dependency management or recent feature PRs from a single contributor** (`manelsen`), with zero community issues filed or discussed. The project appears to be in a **consolidation phase**: absorbing a backlog of Dependabot updates while simultaneously reviewing a cluster of security and tooling enhancements submitted yesterday. No releases were cut, suggesting maintainers are accumulating changes before a version bump. The absence of any user-reported issues or external engagement indicates either low adoption, excellent stability, or limited community visibility.

---

## 2. Releases

**No new releases.**  
The project has not published a release as of this digest.

---

## 3. Project Progress

### Merged/Closed PRs (8 items — all dependency updates)

| PR | Change | Scope | Link |
|:---|:---|:---|:---|
| #518 | Bump `uuid` 1.22.0 → 1.23.0 | Rust core | [PR #518](https://github.com/qhkm/zeptoclaw/pull/518) |
| #516 | Bump `libc` 0.2.183 → 0.2.184 | Rust core | [PR #516](https://github.com/qhkm/zeptoclaw/pull/516) |
| #514 | Bump `recharts` 3.8.0 → 3.8.1 | Panel (JS) | [PR #514](https://github.com/qhkm/zeptoclaw/pull/514) |
| #513 | Bump `google-cloud-auth` 1.7.0 → 1.8.0 | Rust/GCP | [PR #513](https://github.com/qhkm/zeptoclaw/pull/513) |
| #512 | Bump `vite` 7.3.1 → 8.0.0 (dev) | Panel build | [PR #512](https://github.com/qhkm/zeptoclaw/pull/512) |
| #511 | Bump `lettre` 0.11.19 → 0.11.20 | Rust/email | [PR #511](https://github.com/qhkm/zeptoclaw/pull/511) |
| #509 | Bump `docker/login-action` 4.0.0 → 4.1.0 | CI/CD | [PR #509](https://github.com/qhkm/zeptoclaw/pull/509) |
| #508 | Bump `astro` 5.18.1 → 6.0.5 | Landing/docs | [PR #508](https://github.com/qhkm/zeptoclaw/pull/508) |

**Assessment:** All closed PRs are routine dependency maintenance. The `vite` 8.0.0 and `astro` 6.0.5 bumps are **major version upgrades** that may carry breaking changes for the frontend toolchain; monitor for build regressions. The `lettre` update raises MSRV to Rust 1.85, which could impact downstream compatibility.

---

## 4. Community Hot Topics

**No community-driven hot topics exist.** All PRs have zero comments and zero reactions. The most *substantively significant* open PRs by technical weight are:

| PR | Topic | Significance | Link |
|:---|:---|:---|:---|
| #527 | SSRF endpoint validation | **Security-critical** — prevents server-side request forgery in AI provider API calls | [PR #527](https://github.com/qhkm/zeptoclaw/pull/527) |
| #528 | Hash-chain audit trail | **Compliance/observability** — tamper-evident logging for tool execution | [PR #528](https://github.com/qhkm/zeptoclaw/pull/528) |
| #526 | SHA256 verification for skill downloads | **Supply chain security** — verifies integrity of downloaded agent skills | [PR #526](https://github.com/qhkm/zeptoclaw/pull/526) |

**Underlying needs analysis:** The concentration of security-focused PRs (#527–#528–#526) suggests the project is **hardening for production deployment** or responding to security audit findings. The `--allow-private-endpoints` flag in #527 indicates awareness that strict SSRF protection may break legitimate on-premise use cases. No community discussion surrounds these changes—engagement is entirely maintainer-driven.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.** Zero issues were opened or updated.

**Stability note:** The `vite` 8.0.0 major upgrade ([PR #512](https://github.com/qhkm/zeptoclaw/pull/512)) and `astro` 6.0.5 upgrade ([PR #510](https://github.com/qhkm/zeptoclaw/pull/510), still open) represent **potential instability risks** for the panel and documentation builds. The open `react-router` 7.13.2 bump ([PR #515](https://github.com/qhkm/zeptoclaw/pull/515)) is minor but should be merged to stay current.

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| #527 | Config-time SSRF validation | **High** | Security-critical, complete implementation with CLI integration |
| #528 | Hash-chain audit trail | **High** | Self-contained, well-scoped, addresses compliance gap |
| #526 | SHA256 skill verification | **High** | Completes existing skill download security model |
| #523 | Telegram config compatibility fix | **Medium-High** | Restores backward compatibility; low risk |
| #524 | Coding benchmark fixture | **Medium** | Infrastructure for testing, not user-facing |
| #525 | Utility/lib crate evaluation | **Low** | Explicitly **rejected** in PR; documentation-only merge |

**Roadmap signal:** PR #525's decision document explicitly **rejects** adopting a utility/lib crate, citing "architecture fit, migration risk, parity, security, and maintenance cost." This signals **monolithic core commitment** and resistance to premature abstraction.

---

## 7. User Feedback Summary

**No direct user feedback available.** Zero issues, zero comments, zero reactions across all PRs.

**Inferred pain points from PR analysis:**

| Inferred Pain Point | Evidence | Severity |
|:---|:---|:---|
| Telegram configuration drift | PR #523 restores "legacy keys used in the issue report and published examples" | **Moderate** — docs/examples out of sync with code |
| Skill supply chain trust | PR #526 adds SHA256 verification; implies prior gap | **Moderate** — security concern for enterprise users |
| Audit/compliance requirements | PR #528's hash-chain suggests need for tamper-evident logs | **Moderate** — likely enterprise/governance driver |
| Onboarding friction with strict security | PR #527's `--allow-private-endpoints` flag | **Low-Moderate** — security vs. usability tension |

---

## 8. Backlog Watch

| PR | Age | Issue | Action Needed |
|:---|:---|:---|:---|
| #515 | 9 days | `react-router` bump stuck open | Merge or close; minor security patch |
| #510 | 9 days | `astro` 6.0.5 major upgrade | Evaluate breaking changes for docs build |
| #508–#512 | 9 days | Batch of Dependabot PRs | All closed 2026-04-22; #510–#515 remain |

**Critical observation:** The 8 open PRs from `manelsen` (all created 2026-04-22) represent a **significant review burden** dropped simultaneously. These are substantial features (SSRF protection, audit trails, cryptographic verification) requiring careful security review. The project's **bus factor risk is elevated**: one contributor driving all feature work with no visible code review activity.

**Recommended maintainer attention:**
- Prioritize security review of [#527](https://github.com/qhkm/zeptoclaw/pull/527) (SSRF) and [#528](https://github.com/qhkm/zeptoclaw/pull/528) (audit trail)
- Establish review rotation or external security audit given sensitivity of changes
- Address Telegram compatibility ([#523](https://github.com/qhkm/zeptoclaw/pull/523)) to prevent user confusion

---

*Digest generated from GitHub activity data. All links reference https://github.com/qhkm/zeptoclaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-23

## 1. Today's Overview

ZeroClaw saw **high activity** with 39 issues and 39 PRs updated in the last 24 hours, indicating a rapidly moving codebase with active community engagement. The project is in a **stabilization phase** between releases: v0.7.4 and v0.7.5 milestone tracking issues are open, but no new release shipped today. A significant portion of activity centers on **ACP (Agent Communication Protocol) hardening**, **provider configuration fixes**, and **multi-channel approval workflows**. The high open-to-closed ratio (28 open issues, 31 open PRs vs. 11 closed issues, 8 merged/closed PRs) suggests a growing backlog that may need maintainer attention.

---

## 2. Releases

**No new releases** — v0.7.4 and v0.7.5 are in milestone tracking but not yet shipped.

- [v0.7.4 milestone tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) — emergency v0.7.3 was shipped due to "broken tags blowout"; v0.7.4 covers skills and review-session features
- [v0.7.5 milestone tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) — focused on release automation, "every release from here is intentional and automated"

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary |
|:---|:---|:---|
| [#5958](https://github.com/zeroclaw-labs/zeroclaw/pull/5958) | tidux | **ACP protocol compliance fix**: Suppressed INFO log injection into event stream, implemented missing ACP spec parts — unblocks `agentic.nvim` integration |
| [#5993](https://github.com/zeroclaw-labs/zeroclaw/pull/5993) | singlerider | **Config migration fix**: Mirrored provider entry under canonical fallback key, preventing silent 401s from orphaned `providers.models` entries |
| [#5926](https://github.com/zeroclaw-labs/zeroclaw/pull/5926) | WareWolf-MoonWall | **CI consolidation**: Added `push: master` trigger, cancel-in-progress, and rewrote CI docs |

### Key Advances

- **ACP server reliability**: Two PRs landed fixing critical protocol compliance issues that blocked editor integrations
- **Config system resilience**: Provider fallback rewrite logic hardened after multiple bug reports
- **Release infrastructure**: CI pipeline improvements toward v0.7.5's automation goals

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| # | Topic | Comments | Link | Underlying Need |
|:---|:---|:---|:---|:---|
| 1 | Web dashboard unavailability | 21 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | **Developer experience friction**: Build step requirement for web UI blocks adoption; users expect working binaries |
| 2 | Provider ignores llamacpp config | 8 | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | **Local model deployment**: Self-hosted users need reliable local-first inference; schema v2 migration broke this |
| 3 | Per-sender RBAC for multi-tenant deployments | 7 | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | **Enterprise/SaaS readiness**: Single-instance multi-tenancy is a major architectural gap for production deployments |
| 4 | Unify providers architecture | 6 | [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | **Technical debt reduction**: Fragmented reqwest usage and config duplication hinders provider maintainability |
| 5 | v0.7.4 milestone tracking | 5 | [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) | **Release predictability**: Community needs clarity on what's shipping and when |

### Analysis

The top issues reveal a **tension between local/self-hosted users and cloud-native deployments**. RBAC (#5982) and local model support (#5815, #5287) represent divergent but equally valid user segments. The web dashboard issue's 21 comments over nearly a month suggests **persistent onboarding friction** that Docker fixes (#5996) may finally resolve.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **S0** — Data loss / Security risk | Feishu `mention_only` bypass | [Closed](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Unknown | Bot responded to unmentioned messages; security boundary failure |
| **S0** — Data loss / Security risk | Web dashboard / `web_dist_dir` docs gap | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | [#5996](https://github.com/zeroclaw-labs/zeroclaw/pull/5996) | Missing documentation for critical config; Docker images lack dashboard |
| **S1** — Workflow blocked | Provider ignores llamacpp object | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | None identified | Schema v2 regression; local model deployment broken |
| **S1** — Workflow blocked | Config migration strips providers | [Closed](https://github.com/zeroclaw-labs/zeroclaw/issues/5990) | [#5993](https://github.com/zeroclaw-labs/zeroclaw/pull/5993) | `zeroclaw config migrate` destroyed provider config |
| **S1** — Workflow blocked | Load-time fallback orphans providers | [Closed](https://github.com/zeroclaw-labs/zeroclaw/issues/5989) | [#5993](https://github.com/zeroclaw-labs/zeroclaw/pull/5993) | Silent 401s due to config rewrite logic |
| **S1** — Workflow blocked | WhatsApp Web channel broken | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | None identified | Feature flag compilation issue; persists since March |
| **S1** — Workflow blocked | `always_ask` tools silently denied | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) | [#6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010) | Non-CLI channels auto-deny instead of prompting; PR implements approval flow |
| **S1** — Workflow blocked | Compaction orphans `tool_result` blocks | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) | None identified | Bricks sessions until manual file deletion |
| **S1** — Workflow blocked | Anthropic `temperature` breaks Claude 4.7 | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/6007) | None identified | Provider sends rejected param; no `skip_serializing_if` |
| **S1** — Workflow blocked | Desktop crash on "No provider set" | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) | None identified | Tauri app fails without clear error handling |
| **S2** — Degraded behavior | Shell policy blocks `git -C` | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | None identified | Case-lowering conflates `-C` path flag with `-c` command flag |
| **S2** — Degraded behavior | ACP `handle_initialize` hardcoded model | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/6012) | [#6013](https://github.com/zeroclaw-labs/zeroclaw/pull/6013) | Returns `"anthropic/claude-sonnet-4.6"` instead of configured provider |

### Stability Assessment

**Critical pattern**: Config system fragility dominates S1 bugs. Schema v2 migration introduced multiple regressions (#5815, #5990, #5989) now being patched ad-hoc. The [#6013](https://github.com/zeroclaw-labs/zeroclaw/pull/6013) fix for ACP's hardcoded model and [#6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010) for cross-channel approval show responsive maintenance, but **root cause is insufficient config validation and fallback logic**.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.7.4+ | Signal Strength |
|:---|:---|:---|:---|
| **Multi-agent UX flow** | [RFC #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | Medium | Strong community interest; 7-day discussion period active; requires core team vote per governance |
| **Per-sender RBAC** | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Low-Medium | Major architectural change; no PR yet; enterprise blocker |
| **Local-first mode** | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Medium | Addresses local model pain points; aligns with llamacpp fixes |
| **Voice activity detection / duplex voice** | [#5942](https://github.com/zeroclaw-labs/zeroclaw/pull/5942) | High | PR open with `Vad` trait and `VoiceEvent` protocol; feature-flagged |
| **Prompt caching for OpenRouter** | [#6008](https://github.com/zeroclaw-labs/zeroclaw/pull/6008) | High | Small, focused PR; cost optimization feature |
| **OTel semantic conventions for tools** | [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | High | Observability improvement; non-breaking |
| **IRC mention-only mode** | [#5998](https://github.com/zeroclaw-labs/zeroclaw/pull/5998) | Medium | Follows Feishu/Slack pattern; needs author action |
| **Cron job UI (web)** | [#5936](https://github.com/zeroclaw-labs/zeroclaw/pull/5936) | Medium | Shell/Agent job type selector; backend already supports |

### Prediction

**v0.7.4** likely ships with: ACP fixes, voice infra groundwork, provider config hardening, and cron UI improvements. **v0.7.5** will focus on release automation completion. RBAC and multi-agent flows are **post-v0.8.0** given RFC process requirements.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Onboarding friction** | Web dashboard build step (#4866, 21 comments), config migration data loss (#5990), desktop crash (#5984) | **Critical** |
| **Local model reliability** | llamacpp ignored (#5815), compact mode requested (#5287) | **High** |
| **Channel parity gaps** | `always_ask` only worked in CLI (#2324), Discord threads not isolated (#5412), Matrix delivery broken (#3361) | **High** |
| **Config system unpredictability** | Silent 401s (#5989), stripped providers (#5990), fallback rewrite orphans (#5989) | **High** |
| **Observability gaps** | `/api/cost` stays zero (#6001), missing usage artifacts | **Medium** |
| **Memory/performance** | Slack Socket Mode leak 28→460MB (#5313) | **Medium** |

### Satisfaction Signals

- Active WeChat community formation (#6004, #6006) — organic community growth
- Detailed bug reports with reproduction steps (e.g., #6001, #5989) — engaged power users
- Multiple agent-approved PRs — contributor quality improving

### Dissatisfaction Signals

- "Broken tags blowout" requiring emergency v0.7.3 — release process trust erosion
- "Session bricked until manual deletion" (#5813) — data loss fear
- "Silent" / "invisible" bugs (#5550, #5989) — debugging difficulty

---

## 8. Backlog Watch

### Long-Standing Issues Needing Attention

| Issue | Age | Blocker | Risk |
|:---|:---|:---|:---|
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) WhatsApp Web channel broken | ~4 weeks | Feature flag compilation | Channel parity gap; user reported workaround fails |
| [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) `always_ask` silently denied | ~7 weeks | Only CLI had approval flow | Security/usability gap; **fix PR #6010 open** |
| [#5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313) Slack Socket Mode memory leak | ~2.5 weeks | No identified root cause | Production stability; OOM on small VMs |
| [#5412](https://github.com/zeroclaw-labs/zeroclaw/issues/5412) Discord thread isolation | ~2.5 weeks | `thread_ts: None` hardcoded | Conversation context bleeding |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) Memory recall session_id mismatch | ~2 weeks | Autosave/recall path divergence | "Invisible" memories — silent data loss |
| [#5207](https://github.com/zeroclaw-labs/zeroclaw/pull/5207) Web theme switching, session crash | ~3 weeks | Needs author action | UI polish; CJK IME issue affects international users |

### PRs Stalled

| PR | Age | Blocker |
|:---|:---|:---|
| [#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772) Rate-limiting refactor | ~1 week | Needs maintainer review (risk: high) |
| [#5998](https://github.com/zeroclaw-labs/zeroclaw/pull/5998) IRC mention-only | 1 day | Needs author action |
| [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) Onboard rewrite (XL) | 2 days | Large review burden; 8,534-line monolith replacement |

### Maintainer Action Needed

1. **Triage S0/S1 backlog** — 6 open S1 bugs with no fix PR identified
2. **Review high-risk PRs** — [#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772) (rate-limiting security), [#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960) (massive onboard refactor)
3. **Decide on RBAC scope** — [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) represents significant architectural commitment
4. **Close spam** — WeChat group issues (#6003, #6004, #6006) need moderation; one remains open

---

*Digest generated from 78 items (39 issues, 39 PRs) updated 2026-04-22 to 2026-04-23.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*