# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 445 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-23 02:08 UTC

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

# OpenClaw Project Digest — 2026-07-23

## 1. Today's Overview

OpenClaw shows **very high maintenance activity** with 945 total items (445 issues + 500 PRs) updated in the last 24 hours. The project is in active stabilization mode: 149 issues closed and 204 PRs merged/closed indicate strong throughput, while 296 open issues and 296 open PRs signal a substantial backlog. No new release was cut today. The issue landscape is dominated by **platform gaps (Linux/Windows apps)**, **performance regressions** (doctor --fix 4-5x slower), **gateway stability** (restart loops, CPU spikes), and **security hardening** (masked secrets, pre-response enforcement hooks). PR activity focuses on bounding I/O, fixing channel delivery bugs, and CI/validation hygiene.

## 2. Releases

**No new releases today.** The latest releases section is empty. The project appears to be iterating on `main` with continuous validation (see PR #112740 restoring full release validation after config migrations).

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#112836](https://github.com/openclaw/openclaw/pull/112836) | Web UI / Accessibility | Fix reading order of user message footer controls (Reply, Hide, Rewind) — closed same day |
| [#112740](https://github.com/openclaw/openclaw/pull/112740) | CI / Release | Restore full validation after config migrations; fixes strict config rejection, CDP false positives, retired Docker scenarios |
| [#112583](https://github.com/openclaw/openclaw/pull/112583) | CLI | Fix CLI commands hanging on large state databases by skipping redundant SQLite integrity scans |
| [#112033](https://github.com/openclaw/openclaw/pull/112033) | Dependencies | Dependabot: bump GitHub Actions group (12 updates) |
| [#110562](https://github.com/openclaw/openclaw/pull/110562) | Scripts | Bound `check-workflows` subprocesses with 5-min timeout to prevent hangs |
| [#110569](https://github.com/openclaw/openclaw/pull/110569) | Scripts | Bound docs glossary Git lookups with timeout |
| [#110570](https://github.com/openclaw/openclaw/pull/110570) | Scripts | Bound dependency pin Git lookups (1-min timeout) |
| [#109460](https://github.com/openclaw/openclaw/pull/109460) | QQBot | Ignore blank app ID fallbacks in account discovery |
| [#109515](https://github.com/openclaw/openclaw/pull/109515) | Google Vertex | Ignore blank project/location env vars |
| [#111759](https://github.com/openclaw/openclaw/pull/111759) | Voice Call | Bound diagnostic JSONL reads to prevent OOM on large logs |
| [#101777](https://github.com/openclaw/openclaw/pull/101777) | Codex | Suppress stdout/stderr stream errors in sandbox subprocesses to prevent exec-server WS bridge crashes |
| [#89040](https://github.com/openclaw/openclaw/pull/89040) | Agents / Perf | Avoid event-loop stall (14-22s) during `embedded_run` bootstrap-context via async I/O |

**Theme:** Hardening — timeouts, bounds, crash prevention, and CI reliability. No user-facing features shipped today.

## 4. Community Hot Topics (Most Discussed Issues)

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 115 | 80 | **Platform parity** — macOS/iOS/Android exist; Linux & Windows apps missing. Highest community demand. |
| [#85333](https://github.com/openclaw/openclaw/issues/85333) `doctor --fix` 4-5x slower (55s → 229s+) | 17 | 1 | **Performance regression** — session snapshot path traversal bottleneck introduced in 2026.5.20. |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) Pre-response enforcement hooks (hard gates) | 16 | 2 | **Security/Compliance** — mechanical prevention of final answer until mandatory tool calls execute (quant/finance/secops). |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hook spawns CPU-bound processes, stalls gateway RPC | 15 | 2 | **Stability** — hook relay processes consume 100%+ CPU, blocking gateway. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets — prevent agent from seeing raw API keys | 15 | 4 | **Security** — secrets usable but not readable; prevents leaks & prompt injection. |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) Tool outputs degrade to “(see attached image)” placeholders | 13 | 4 | **Correctness** — agent loses visibility into normal command output. |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout is single wall-clock over whole pipeline | 12 | 3 | **Reliability** — legitimate long compactions fail every turn; no partial-progress reuse. |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) Gateway fails to start on 2026.7.1 (regression) | 9 | 2 | **Release blocker** — gateway won’t start with systemd/ollama/manual; P0. |

**Underlying needs:** Platform completeness, performance stability, security hardening for enterprise use, and gateway reliability.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **P0 / Release Blocker** | [#108435](https://github.com/openclaw/openclaw/issues/108435) Gateway fails to start on 2026.7.1 | Open | No | Regression; blocks upgrades. |
| **P1 / Crash Loop** | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex hook relay spawns CPU-bound processes, stalls gateway | Open | [Linked PR open](https://github.com/openclaw/openclaw/pull/91009) | High CPU, gateway RPC stall. |
| **P1 / Crash Loop** | [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout fails legitimately long runs | Open | [Linked PR open](https://github.com/openclaw/openclaw/pull/92043) | No partial progress reuse. |
| **P1 / Perf Regression** | [#85333](https://github.com/openclaw/openclaw/issues/85333) `doctor --fix` 4-5x slower (path traversal) | Open | No | Snapshot traversal bottleneck. |
| **P1 / Message Loss** | [#90840](https://github.com/openclaw/openclaw/issues/90840) Subagent completion delivered to chat as raw worker output | Open | [Linked PR open](https://github.com/openclaw/openclaw/pull/90840) | Regression; breaks parent/child flow. |
| **P1 / Security** | [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked secrets — agent sees raw API keys | Open | No | High demand (4 👍); prevents leaks. |
| **P1 / Auth** | [#39807](https://github.com/openclaw/openclaw/issues/39807) Billing error (402) → infinite retry death spiral (no backoff) | Open | [Linked PR open](https://github.com/openclaw/openclaw/pull/39807) | Burns credits, makes agents unresponsive. |
| **P1 / Crash Loop** | [#84610](https://github.com/openclaw/openclaw/issues/84610) Gateway SIGTERM loop every ~90s after upgrade (WSL2) | Closed | Fixed in later? | Rollback to 2026.5.12 stabilizes. |
| **P1 / Crash Loop** | [#76275](https://github.com/openclaw/openclaw/issues/76275) Gateway restarting loop after 2026.4.23→4.26 | Closed | Unknown | Multiple versions affected. |
| **P2 / Correctness** | [#96857](https://github.com/openclaw/openclaw/issues/96857) Tool outputs become “(see attached image)” placeholders | Open | No | Agent blinded to command output. |
| **P2 / Session State** | [#99773](https://github.com/openclaw/openclaw/issues/99773) Hot reload drops include-defined models → “Unknown model” errors | Open | No | Requires restart to recover. |
| **P2 / Message Delivery** | [#94626](https://github.com/openclaw/openclaw/issues/94626) LINE `/status` intermittently no response (reply token expiry race) | Open | [Linked PR open](https://github.com/openclaw/openclaw/pull/94626) | Telegram works; LINE flaky. |

**Pattern:** Gateway stability (restart loops, CPU stalls), compaction/timeout rigidity, and channel delivery races dominate. Several P1s have linked PRs but remain open.

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | P2, 80 👍 | **Highest community demand**; platform parity gap. | Medium — large effort; may be split into milestones. |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) Pre-response enforcement hooks (hard gates) | P2, 🦞 diamond lobster | **Enterprise/security requirement**; mechanical tool-call enforcement. | High — aligned with security hardening trend. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | P1, 4 👍 | **Security hardening**; secrets usable but not readable. | High — fits current security focus. |
| [#9912](https://github.com/openclaw/openclaw/issues/9912) `maxTurns`/`maxToolCalls` config to limit agent iterations | P2 | **Operational guardrail**; prevents runaway loops with certain models. | Medium — low complexity, high utility. |
| [#38568](https://github.com/openclaw/openclaw/issues/38568) Inject context window % into system prompt runtime section | P3 | **Agent UX**; helps agents self-manage context. | Low — nice-to-have, not urgent. |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) `session:end` internal hook event | P2 | **Integrations**; Temporal/workflow orchestration. | Medium — niche but clean extension point. |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) Self-hosted channel plugins (e.g., MS Teams) can’t use externalized plugins — `openKeyedStore` gated to trusted plugins | P1 | **Self-hosting blocker**; providers work, channels don’t. | High — architectural fix needed for plugin trust model. |

**Roadmap inference:** Next version likely includes security features (masked secrets, hard gates), self-hosted channel plugin support, and continued gateway stability fixes. Linux/Windows apps remain a major but longer-term effort.

## 7. User Feedback Summary (Pain Points & Use Cases)

| Theme | Representative Issues | User Sentiment |
|-------|----------------------|----------------|
| **Platform gaps** | [#75](https://github.com/openclaw/openclaw/issues/75) — “Linux and Windows are missing. Similar feature set to macOS ideally.” | **Strong frustration** — 80 👍, 115 comments; blocks adoption on non-macOS. |
| **Upgrade fear / regression fatigue** | [#108435](https://github.com/openclaw/openclaw/issues/108435) gateway won’t start; [#85333](https://github.com/openclaw/openclaw/issues/85333) doctor 4-5x slower; [#76275](https://github.com/openclaw/openclaw/issues/76275) restart loops | **High anxiety** — users rolling back (2026.5.12, 2026.5.19) to stabilize. |
| **Enterprise security needs** | [#13583](https://github.com/openclaw/openclaw/issues/13583) hard gates; [#10659](https://github.com/openclaw/openclaw/issues/10659) masked secrets; [#92516](https://github.com/openclaw/openclaw/issues/92516) self-hosted channel trust | **Clear demand** — quant/finance/secops workflows need mechanical guarantees, not prompt-based. |
| **Channel reliability** | [#94626](https://github.com/openclaw/openclaw/issues/94626) LINE flaky; [#84092](https://github.com/openclaw/openclaw/issues/84092) WhatsApp drops long responses; [#88955](https://github.com/openclaw/openclaw/issues/88955) QQBot WS reconnect loses outbound | **Operational pain** — message loss, silent failures, race conditions. |
| **Accessibility** | [#65538](https://github.com/openclaw/openclaw/issues/65538) Screen readers announce every token (aria-live="polite") | **Neglected** — P1 but stale; affects visually impaired users. |
| **Self-hosting / custom deployments** | [#92516](https://github.com/openclaw/openclaw/issues/92516) channel plugins can’t be trusted; [#87318](https://github.com/openclaw/openclaw/issues/87318) Bedrock inference profile ARN ignored | **Blocked** — architectural gaps for air-gapped/private deployments. |

**Overall:** Users value OpenClaw’s multi-channel, multi-provider architecture but are strained by regression frequency, platform gaps, and missing enterprise-grade security controls. Self-hosters hit hard walls on plugin trust and provider integration.

## 8. Backlog Watch (Long-Unanswered / Stale High-Impact Items)

| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Apps | 204 days | enhancement, help wanted, P2, needs-product-decision, needs-security-review | **Top community ask**; no maintainer decision visible. |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) Pre-response enforcement hooks | 163 days | P2, needs-product-decision, needs-security-review, 🦞 diamond lobster | **Enterprise blocker**; design decision needed. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 167 days | P1, needs-product-decision, needs-security-review, 🦞 diamond lobster | **Security hardening**; high leverage. |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) Self-hosted channel plugin trust | 41 days | P1, needs-product-decision

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-23)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem is **highly fragmented but intensely active**, with 11 of 13 tracked projects showing meaningful development velocity in the past 24 hours. Projects cluster into three tiers: **large-scale platforms** (OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw/QwenPaw) processing 50–100+ items daily; **specialized/niche agents** (NanoBot, PicoClaw, NanoClaw, LobsterAI) with focused 5–40 item throughput; and **early-stage/quiet projects** (Moltis, NullClaw, TinyClaw, ZeptoClaw). No project released a major version today, but CoPaw shipped a patch (v2.0.0.post4) targeting reasoning-loop regressions. The dominant theme across the ecosystem is **stabilization over feature expansion**: hardening gateways, fixing channel delivery bugs, bounding I/O, and addressing security/compliance gaps for enterprise adoption.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | PRs Merged/Closed | Open Issues | Open PRs | Release Today | Health Score* |
|---------|---------------|-------------|-------------------|-------------|----------|---------------|---------------|
| **OpenClaw** | 445 | 500 | 204 | 296 | 296 | No | 🟡 High velocity, large backlog |
| **Hermes Agent** | 50 | 50 | 11 | 46 | ~39 | No | 🟢 Healthy merge rate, integration gaps |
| **IronClaw** | 50 | 50 | 21 | ~35 | ~29 | No | 🟡 High foundation completion, user-facing P1s |
| **ZeroClaw** | 50 | 50 | 0 | ~44 | 50 | No | 🟡 Heavy RFC/dev phase, zero merges today |
| **CoPaw (QwenPaw)** | 31 | 50 | 6 | ~25 | ~44 | **Yes (v2.0.0.post4)** | 🟢 Patch release, critical bug fixes |
| **NanoBot** | 6 | 63 | 40 | 4 | ~23 | No | 🟢 Strong merge throughput, conflict debt |
| **LobsterAI** | 0 | 0 | 5 | 0 | 0 | No | 🟢 Stable, internally driven |
| **PicoClaw** | 4 | 5 | 2 | ~3 | 3 | No | 🟡 Moderate, stale PRs accumulating |
| **NanoClaw** | 1 | 3 | 0 | 1 | 3 | No | 🟡 Maintenance phase, security doc gap |
| **NullClaw** | 1 | 1 | 1 | 0 | 0 | No | 🟢 Critical bug fixed same-day |
| **Moltis** | 0 | 1 | 0 | 0 | 1 | No | 🔴 Minimal activity |
| **TinyClaw** | 0 | 0 | 0 | 0 | 0 | No | 🔴 Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | No | 🔴 Inactive |

*Health Score: 🟢 = Strong merge/fix velocity, 🟡 = High activity but backlog/P1 risks, 🔴 = Low/no activity

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Largest community signal**: Issue #75 (Linux/Windows apps) has 115 comments, 80 👍 — highest engagement across ecosystem
- **Broadest channel/provider matrix**: Native support for 10+ channels (Telegram, Slack, Discord, LINE, QQ, WhatsApp, Matrix, Feishu, DingTalk, IRC) and 15+ LLM providers
- **Enterprise security focus**: Only project with active "masked secrets" (#10659), "pre-response enforcement hooks" (#13583), and "self-hosted channel plugin trust" (#92516) workstreams
- **Scale of validation infrastructure**: PR #112740 restoring full release validation after config migrations indicates mature CI/CD

**Technical Approach Differences:**
- **Gateway-centric architecture**: Multi-tenant gateway with channel plugins, provider abstraction, and session state management — vs. single-user CLI tools (NanoBot, PicoClaw) or embedded agents (LobsterAI)
- **Compaction-as-a-service**: Explicit 180s compaction timeout (#92043) and session snapshot traversal — unique scaling concern
- **Cross-platform app gap**: Only major project *without* Linux/Windows desktop apps (macOS/iOS/Android only) — peers like Hermes, NanoBot, CoPaw have broader platform coverage

**Community Size Comparison:**
- **OpenClaw**: 945 daily items → largest contributor/base
- **Hermes/IronClaw/ZeroClaw**: ~100 daily items each → 10x smaller but focused
- **CoPaw**: 81 daily items + patch release → strong Chinese-language community
- **NanoBot**: 69 daily items → high velocity per contributor

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Gateway/Channel Stability** | OpenClaw, Hermes, IronClaw, ZeroClaw, PicoClaw, CoPaw | Restart loops (OpenClaw #76275, #84610), Telegram >15MB uploads (Hermes #62936), Matrix reconnection (PicoClaw #3203), Discord event loss (NullClaw #977), WhatsApp identity divergence (NanoClaw #3070) |
| **Security Hardening & Compliance** | OpenClaw, Hermes, IronClaw, ZeroClaw, NanoClaw | Masked secrets (OpenClaw #10659), pre-response enforcement hooks (OpenClaw #13583), OIDC auth (ZeroClaw #7141), SECURITY.md accuracy (NanoClaw #3118), .env sanitizer (Hermes #12651) |
| **Multi-Platform/Channel Parity** | OpenClaw, Hermes, NanoBot, PicoClaw, CoPaw | Linux/Windows apps (OpenClaw #75), cross-platform session sharing (Hermes #4335), Xiaozhi/ESP32 voice (NanoBot #2584), IRCv3 message splitting (PicoClaw #3287), Windows installer hardening (LobsterAI #2377) |
| **Memory/Context Management** | OpenClaw, Hermes, NanoBot, ZeroClaw, CoPaw | Compaction timeout rigidity (OpenClaw #92043), Dream cursor stall (NanoBot #5041), OTel trace correlation (ZeroClaw #6641), sub-agent compaction freeze (CoPaw #5218), session-state corruption (Hermes #65942) |
| **Plugin/Extension Architecture** | IronClaw, ZeroClaw, OpenClaw, NanoBot, Hermes | Manifest-driven extensions (IronClaw #6493), "everything is a plugin" (ZeroClaw #6489), self-hosted channel trust (OpenClaw #92516), skill management (NanoBot #1346, LobsterAI #1346), MCP schema handling (NanoBot #5040) |
| **Observability & Debugging** | ZeroClaw, IronClaw, OpenClaw, Hermes | Structured events/OTel (ZeroClaw #7232), hermetic evaluation harness (IronClaw #7065), doctor --fix perf (OpenClaw #85333), billing usage auto-poll (Hermes #69691) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | CoPaw/QwenPaw | NanoBot | PicoClaw |
|-----------|----------|--------------|----------|----------|---------------|---------|----------|
| **Target User** | Enterprise/self-hosted multi-channel operators | Desktop-first power users, multi-platform | NEAR ecosystem, Web3/agent commerce | Multi-node fleet operators, enterprise | Chinese-market personal assistants, plugin ecosystem | Developers, hackers, local-first | Embedded/IoT, Matrix-focused |
| **Architecture** | Gateway + channel plugins + provider abstraction | Desktop (Tauri) + gateway + CLI/TUI | Reborn: ProductSurface boundary, manifest-driven | Daemon + plugin catalog + A2A discovery | Electron Console + WebUI + plugin market | Python async, Dream memory, MCP-native | Go, single-binary, minimal deps |
| **Key Differentiator** | Broadest channel matrix, enterprise security | Unified billing/credits UX, session sidebar | WASM skill/runtime ownership, v1 launch checklist | "Everything is a plugin", OTel-native, A2A | Plugin market, MiniMax/Qwen optimization, high release cadence | Session-scoped model presets, cron/store hardening | Matrix reliability, DeltaChat modernization |
| **Release Cadence** | Continuous validation, no daily cuts | v0.19.0 (2026-07-20), desktop polish | Pre-v1, automated release PR open | v0.8.x, v0.9.0 RFCs tracking | **v2.0.0.post4 today** (10+ releases/month) | Batch accumulation, no recent release | No recent release |
| **Pain Point** | Linux/Windows app gap, gateway regressions | Cross-platform session sharing, Telegram media | Telegram pairing broken, hosted CLI missing | Windows CI gap (74 failures), npm audits | v2.0 regression (~2s overhead), MiniMax vision broken | Conflict debt (10+ PRs), Dream memory starvation | Matrix silent disconnect, hook deserialization |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (Pre-v1 / Major Refactor)** | **IronClaw**, **ZeroClaw**, **CoPaw** | IronClaw: 15 foundation issues closed today, v1 launch checklist active. ZeroClaw: 6 RFCs closed, 50 PRs open, zero merges — heavy design phase. CoPaw: 10+ releases/month, patch today, but v2.0 regression complaints. |
| **Stabilizing / Production-Hardening** | **OpenClaw**, **Hermes Agent**, **NanoBot**, **LobsterAI** | OpenClaw: 204 PRs merged, but 296 open PRs/issues — throughput high, backlog growing. Hermes: 11 merges, desktop billing UX unified, but session-state bugs persist. NanoBot: 40 merges, conflict debt on 10+ PRs. LobsterAI: 5 merges, zero new issues — quiet stability. |
| **Maintenance Mode / Niche** | **PicoClaw**, **NanoClaw**, **NullClaw**, **Moltis** | PicoClaw: 2 merges (deps/docs), stale feature PRs (20-30 days). NanoClaw: 3 open PRs, security doc gap. NullClaw: 1 critical bug fixed same-day. Moltis: 1 UI PR, no issues. |
| **Inactive** | **TinyClaw**, **ZeptoClaw** | No activity in 24h window. |

**Key Insight**: The ecosystem is **bimodal** — large platforms (OpenClaw, Hermes, IronClaw, ZeroClaw) investing in architectural convergence (ProductSurface, plugin unification, A2A), while specialized agents (NanoBot, PicoClaw, CoPaw) optimize for specific niches (local-first, Matrix, Chinese-market). CoPaw's high release cadence is an outlier; most projects batch changes.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication for Developers |
|-------|----------|----------------------------|
| **Enterprise Security = Table Stakes** | 5+ projects implementing masked secrets, OIDC, pre-response hooks, audit trails | Build **mechanical enforcement** (not prompt-based) for tool calls, secret handling, and data egress from day one |
| **Multi-Channel Identity Unification** | WhatsApp identity fix (NanoClaw), cross-platform session sharing (Hermes), channel plugin trust (OpenClaw) | Design **provider-agnostic user identity** early; retrofitting breaks conversation threading |
| **Gateway Reliability > Raw Model Performance** | Restart loops (OpenClaw, NullClaw), Telegram media timeouts (Hermes), Matrix silent death (PicoClaw) | Invest in **connection lifecycle management**, backpressure, and graceful degradation — users abandon flaky gateways |
| **Plugin/Extension Standardization** | IronClaw manifest V2, ZeroClaw "everything is a plugin", OpenClaw channel trust, NanoBot MCP schema | Adopt **WASM/manifest-driven plugins** with sandboxed capabilities; avoid custom plugin APIs |
| **Observability as Product Feature** | ZeroClaw OTel/structured events, IronClaw eval harness, OpenClaw doctor --fix, Hermes billing auto-poll | Ship **built-in debugging/eval tooling** — operators demand visibility into agent reasoning and cost |
| **Local-First / Edge Deployment Rising** | NanoBot Raspberry Pi CPU fix, PicoClaw embedded focus, LobsterAI Windows installer hardening, NullClaw single-binary | Optimize for **resource-constrained environments**: bounded memory, configurable compaction, offline-capable |
| **Chinese-Market Innovation Velocity** | CoPaw 10+ releases/month, NanoBot Xiaozhi/ESP32, PicoClaw QQBot/Feishu/DingTalk | **Regional platform integrations** (WeChat, Feishu, Xiaozhi) drive unique architectural patterns — consider multi-region plugin strategy |

---

**Bottom Line**: The ecosystem is converging on **gateway-centric, plugin-extensible, security-hardened architectures** with enterprise deployment as the implicit target. Projects that solve **cross-channel identity**, **gateway reliability**, and **mechanical security enforcement** will capture the production workload. OpenClaw leads in breadth but faces platform gaps; IronClaw/ZeroClaw lead in architectural rigor; CoPaw leads in iteration speed. For new entrants: **start with plugin manifest + OTel + masked secrets** — these are becoming non-negotiable.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-23

## 1. Today's Overview
NanoBot shows **very high development velocity** with 63 PRs updated in the last 24 hours (40 merged/closed), indicating an active merge window or sprint completion. No new release was cut, suggesting changes are accumulating on `main` for a future batch release. The issue tracker is quiet (6 updates, only 4 open), but several newly filed bugs point to edge cases in Dream memory, MCP schema handling, Feishu media paths, and WebUI/subagent lifecycle. Multiple open PRs carry `conflict` labels, implying parallel feature branches that will need rebasing before merge.

## 2. Releases
**No new releases published today.** The last release data is not provided in this snapshot; 40 merged PRs since the last cut will likely be bundled in the next version.

## 3. Project Progress (Merged / Closed PRs & Key Issues Resolved)
| PR / Issue | Type | Summary | Link |
|---|---|---|---|
| #4866 | Feature (p1) | Model presets made session-scoped; single immutable `LLMRuntime` per turn for consistent provider calls, prompt sizing, tools, compaction. | [PR #4866](https://github.com/HKUDS/nanobot/pull/4866) |
| #4934 | Bug Fix | Qwen models (e.g., qwen3.6-flash) no longer expose thinking/reasoning content in chat responses via DashScope. | [Issue #4934](https://github.com/HKUDS/nanobot/issues/4934) |
| #4948 | Bug Fix | WebUI visibility loss when late subagent completion starts a system turn; delivery lifecycle now inherited. | [Issue #4948](https://github.com/HKUDS/nanobot/issues/4948) |
| #4988 | Bug Fix (p1) | Background/cron turns stay silent when model ends empty (no placeholder leak to non-interactive channels). | [PR #4988](https://github.com/HKUDS/nanobot/pull/4988) |
| #5042, #5043, #5044 | Bug Fixes (p1) | Cron/store hardening: null `schedule` defaults to `every`; null `runHistory` elements skipped; null approved channel lists treated as empty (prevents crash/quarantine). | [PR #5042](https://github.com/HKUDS/nanobot/pull/5042) • [PR #5043](https://github.com/HKUDS/nanobot/pull/5043) • [PR #5044](https://github.com/HKUDS/nanobot/pull/5044) |
| #5045, #5046 | Bug Fixes (p2) | Slack & Feishu: fenced markdown tables no longer mangled into key/value lines or card tables. | [PR #5045](https://github.com/HKUDS/nanobot/pull/5045) • [PR #5046](https://github.com/HKUDS/nanobot/pull/5046) |

**Net**: Core stability fixes (cron/store, channel rendering, background turns) and a significant architectural change (session-scoped model presets) landed today.

## 4. Community Hot Topics (Most Active / Discussed)
| Item | Activity | Underlying Need |
|---|---|---|
| **#2584** Feature/xiaozhi support | Open since Mar 28, updated today; `conflict` label | **Voice gateway & ESP32 device integration** — community wants first-class Xiaozhi (Chinese voice assistant) support with WebSocket/Opus, OTA, MCP tooling. Long-running PR suggests architectural review needed. |
| **#4439** `search_history` read-only tool | Open since Jun 21, updated today; `conflict` | **Memory recall tooling** — users want a safe, read-only tool to query conversation history without mutating state. Blocked by conflicts. |
| **#5000** Evolve subagent → multi-agent collaboration | 4 comments, opened Jul 20 | **True multi-agent orchestration** — current subagents are fire-and-forget; users want persistent identities, shared state, inter-agent communication. Strategic direction signal. |
| **#5017** WebUI: show actual fallback model | Updated today; p1, multiple labels | **Transparency in model routing** — when fallback occurs, WebUI should show which model actually handled the request, with smooth badge transition. |
| **#5009** Feishu `groupPolicy: listen` | Updated today; p1 | **Passive context ingestion** — bot should accumulate group chatter as context without taking a turn, then reply on `@mention`. Enterprise collaboration workflow. |

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **High** | [#5041](https://github.com/HKUDS/nanobot/issues/5041) | Dream cursor not advanced on no-op batches → same batch re-selected indefinitely, starving later history. Distinct from #4055. | No |
| **High** | [#5040](https://github.com/HKUDS/nanobot/issues/5040) | MCP tool schemas with non-`#/$defs/` `$ref` forwarded verbatim; breaks strict providers (Kimi/Moonshot) — one bad tool disables entire model. | No |
| **Medium** | [#5028](https://github.com/HKUDS/nanobot/issues/5028) | Feishu media path vs. workspace restriction conflict: uploaded files land in `media/` sibling to workspace, become unreadable when workspace limit enabled. | No |
| **Medium** | [#4934](https://github.com/HKUDS/nanobot/issues/4934) | **Closed today** — Qwen thinking content leakage via DashScope. | Fixed (closed) |
| **Medium** | [#4948](https://github.com/HKUDS/nanobot/issues/4948) | **Closed today** — WebUI loses visibility on late subagent completion. | Fixed (closed) |

**Note**: Three p1 store/cron null-handling bugs (#5042–#5044) were fixed via PRs today but not filed as separate issues.

## 6. Feature Requests & Roadmap Signals
| Signal | Evidence | Likelihood for Next Version |
|---|---|---|
| **Multi-agent collaboration framework** | #5000 (design proposal, 4 comments) | Medium — architectural, needs RFC |
| **Xiaozhi / ESP32 voice gateway** | #2584 (large PR, 4+ months old) | High — community pull, but `conflict` must resolve |
| **Read-only `search_history` tool** | #4439 (PR open since Jun) | High — low-risk, high-value; blocked by rebase |
| **xAI Grok OAuth + X Search** | #5035 (PR opened today, p1, security/test labels) | High — complete implementation with OAuth PKCE, capability gating |
| **WebUI PWA + mobile swipe** | #4494 (reopened, mobile UX) | Medium — UX polish, depends on frontend capacity |
| **Telegram multi-bot in WebUI** | #5033 (PR today, p1) | High — backward-compat config, clear enterprise need |
| **Feishu `listen` policy** | #5009 (PR today, p1) | High — solves passive context pattern |
| **Parallel Search MCP preset** | #5047 (PR today, p2) | Medium — optional preset, no API key, easy add |
| **Idle compaction interval config** | #5036 (Raspberry Pi 30-40% CPU) | High — simple config knob, perf win for edge |

## 7. User Feedback Summary (Pain Points & Use Cases)
| Pain Point | Source | Context |
|---|---|---|
| **Subagents feel like background tasks, not agents** | #5000 | Users want persistent identities, shared state, inter-agent comms — current model limits complex workflows. |
| **Qwen reasoning leakage** | #4934 | DashScope returns thinking tokens in chat; breaks UX for Chinese model users. |
| **Dream memory starvation** | #5041 | No-op Dream runs don’t advance cursor → same batch repeats, later history never processed. |
| **MCP schema `$ref` breaks strict providers** | #5040 | One non-conforming tool schema kills model access on Kimi/Moonshot. |
| **Feishu media vs. workspace conflict** | #5028 | Files uploaded via Feishu land outside workspace; become inaccessible when workspace restriction on. |
| **WebUI loses messages on subagent race** | #4948 | Late subagent completion starts system turn without WebUI delivery lifecycle. |
| **High idle CPU on Raspberry Pi** | #5036 | Idle compaction scans every few seconds → 30-40% CPU; needs configurable interval. |
| **No visibility into fallback model** | #5017 | Users can’t tell which model actually responded after fallback. |
| **Fenced markdown tables mangled in Slack/Feishu** | #5045, #5046 | Tables inside code fences incorrectly rendered as native tables/key-value lines. |

**Satisfaction signals**: Rapid fix turnaround for reported bugs (multiple p1 fixes same day), active PR reviews, and feature PRs from external contributors (e.g., #5047 from `georgeatparallel`, #5035 from core team).

## 8. Backlog Watch (Stale / High-Value Items Needing Attention)
| Item | Age | Why It Matters | Status |
|---|---|---|---|
| **#2584** Xiaozhi/ESP32 support | ~4 months | Large feature PR, `conflict` label, enables hardware/voice ecosystem | Open, needs rebase/review |
| **#4439** `search_history` tool | ~1 month | Read-only memory recall; closes #4440; `conflict` label | Open, needs rebase |
| **#4494** WebUI PWA + mobile swipe | ~1 month | Reopened after branch deletion; mobile UX gap | Open, `conflict` |
| **#4689** OAuth status / expiry warnings | ~3 weeks | Provider UX hardening; fixes #4679; p1 | Open, `conflict` |
| **#5000** Multi-agent collaboration proposal | 3 days | Strategic architecture discussion; 4 comments, no PR yet | Open, design phase |
| **#5018** Skills: explicit context loading | 2 days | Unblocks skill preloading for direct callers; `conflict` | Open |

---

**Health Indicators**
- 🟢 **Merge throughput**: 40 PRs merged/closed in 24h — strong.
- 🟢 **Bug fix latency**: Multiple p1 bugs fixed same day reported.
- 🟡 **Conflict debt**: 10+ open PRs with `conflict` label — rebasing bottleneck.
- 🟡 **Issue throughput**: Only 6 issue updates; community discussion concentrated in few threads.
- 🟢 **Contributor breadth**: Fixes/features from 8+ distinct authors in this window.

**Next expected release**: Likely within 1–2 weeks given merge volume; will include session-scoped presets, cron/store hardening, channel markdown fixes, xAI Grok OAuth, Telegram multi-bot, Feishu listen mode, and assorted WebUI polish.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-23

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 100 total items (50 issues, 50 PRs) updated in the last 24 hours. The project maintains a healthy merge rate (11 PRs merged/closed today) while actively triaging a substantial backlog of 46 open issues. No new release was cut today, suggesting the team is in a stabilization/feature-integration phase. Activity spans the full stack: gateway session management, desktop UX, CLI/installer, provider integrations (Telegram, Copilot, Minimax), and memory/vision tooling. The "sweeper" labels on many issues indicate systematic risk-area reviews are underway.

## 2. Releases
**No new releases today.** The latest version remains v0.19.0 (2026-07-20 per issue #69551).

## 3. Project Progress — Merged/Closed PRs Today (11)
| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#69739](https://github.com/NousResearch/hermes-agent/pull/69739) | Bug fix | Desktop | Fix transcript ordering when user steers live inference — steer messages now placed before redirected replies |
| [#69655](https://github.com/NousResearch/hermes-agent/pull/69655) | Feature | CLI/TUI/Desktop/Billing | Unified out-of-credits UX across all surfaces with structured error handling and billing links |
| [#69691](https://github.com/NousResearch/hermes-agent/pull/69691) | Feature/Polish | Desktop/Billing | Auto-poll billing usage, remove manual refresh, add shared Progress primitive & settings skeletons |
| [#69740](https://github.com/NousResearch/hermes-agent/pull/69740) | Bug fix | Cron | Clean up `HERMES_CRON_SESSION` env var after last cron job to prevent leakage into interactive sessions |
| [#68302](https://github.com/NousResearch/hermes-agent/pull/68302) | Bug fix | Desktop/Sessions | Fix sidebar session switching while "Skills & Tools" view is active |
| [#68979](https://github.com/NousResearch/hermes-agent/pull/68979) | Bug fix | Desktop/Sessions | Fix long-thread reconciliation re-stacking recent user messages at bottom after context compression |
| [#69694](https://github.com/NousResearch/hermes-agent/pull/69694) | Feature | Delegation | Allow per-task model selection in `delegate_task` for parallel subagents with different models |
| [#69747](https://github.com/NousResearch/hermes-agent/pull/69747) | Bug fix | Relay/Slack | Restore streaming delivery, Slack command parity, and status clearing (salvage of #69716) |
| [#69730](https://github.com/NousResearch/hermes-agent/pull/69730) | Bug fix | Cron/Auth | Verify fire tokens against job profile (not default profile) for managed cron jobs |
| [#69733](https://github.com/NousResearch/hermes-agent/pull/69733) | Bug fix | Cron/Config | Forward `require_parameters` + `data_collection` to scheduled agents (were silently dropped) |
| [#69735](https://github.com/NousResearch/hermes-agent/pull/69735) | Bug fix | Agent | Drop stale `api_content` sidecar when merging consecutive assistant messages |

**Key advances:** Desktop billing UX unification, cron/scheduler reliability fixes, session-state correctness in desktop, and delegation flexibility.

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) Cross-platform session context sharing (CLI ↔ Telegram) | 9 | 2 | **Unified conversation memory** across gateway platforms — users expect seamless context when switching between CLI, Telegram, Discord |
| [#66875](https://github.com/NousResearch/hermes-agent/issues/66875) Latest session doesn't switch after navigating tabs in Desktop | 7 | 0 | **Desktop navigation regression** — persistent session list broken for most-recent session after tab switch |
| [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) Telegram uploads >15MB fail — `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` ignored for media | 6 | 0 | **Large file delivery reliability** — PTB `media_write_timeout` never set, blocking media-heavy workflows |
| [#21341](https://github.com/NousResearch/hermes-agent/issues/21341) NixOS module `documents` option installs to wrong paths | 5 | 0 | **Config/file-path contract** — personality/memory files land in working dir but agent reads from `$HERMES_HOME` |
| [#45279](https://github.com/NousResearch/hermes-agent/issues/45279) Node/npm shims still shadow Homebrew/nvm on user macOS installs | 4 | 0 | **Installer PATH hygiene** — PR #38889 claimed fix but user-level installs still pollute `~/.local/bin` |

**Underlying theme:** Users are hitting **cross-cutting integration gaps** — between platforms (session sharing), between config and runtime (file paths, env vars), and between installer promises and reality (PATH pollution). These are "paper cuts" that erode trust in multi-platform workflows.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **P1** | [#62708](https://github.com/NousResearch/hermes-agent/issues/62708) Silent context-overflow: no warning when compression blocked (cooldown/anti-thrash) | Agent/Gateway/TUI/Compression | Open | No |
| **P2** | [#66875](https://github.com/NousResearch/hermes-agent/issues/66875) Desktop: latest session doesn't switch after tab navigation | Desktop/Sessions | Open | No |
| **P2** | [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) Telegram >15MB uploads always timeout — write timeout config ignored | Gateway/Telegram | Open | No |
| **P2** | [#45279](https://github.com/NousResearch/hermes-agent/issues/45279) Node shims shadow Homebrew/nvm on user macOS installs | CLI/Installer/Config | Open | No |
| **P2** | [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) `.env` sanitizer doesn't remove `KEY=***` placeholders — treated as real credentials | CLI/Config | Open | [#42746](https://github.com/NousResearch/hermes-agent/pull/42746) (open) |
| **P2** | [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) `vision_analyze`/`browser_vision` bricks session with oversized images (>8000px) | Agent/Vision/Browser/Anthropic | Open | No |
| **P2** | [#18539](https://github.com/NousResearch/hermes-agent/issues/18539) `/queue` FIFO chain drops MEDIA files — only last item gets media delivery | Gateway | Open | No |
| **P2** | [#69551](https://github.com/NousResearch/hermes-agent/issues/69551) Desktop SSH remote broken with non-default profiles — token path mismatch | Desktop/SSH/Profiles | Open | No |
| **P2** | [#57775](https://github.com/NousResearch/hermes-agent/issues/57775) Windows: `atomic_replace` drops writes on `ERROR_SHARING_VIOLATION` (concurrent readers) | Agent/Windows/Utils | Open | No |
| **P2** | [#63222](https://github.com/NousResearch/hermes-agent/issues/63222) ACP model switch preserves stale `base_url` — routes to wrong endpoint | ACP/Config | Open | No |
| **P2** | [#65942](https://github.com/NousResearch/hermes-agent/issues/65942) Snapshot restore leaves newer data when `state.db` has live WAL connection | CLI/Session-state | Open | No |
| **P2** | [#69638](https://github.com/NousResearch/hermes-agent/issues/69638) Desktop: queued large image causes reconnect loop + MBs in localStorage | Desktop/CLI/Session-state | Open | No |
| **P2** | [#66183](https://github.com/NousResearch/hermes-agent/issues/66183) Docker: `memory_tool.py` creates dirs with `000` perms | Memory/Docker | Open | No |
| **P2** | [#69746](https://github.com/NousResearch/hermes-agent/issues/69746) API Server never calls `refresh_agent_mcp_tools()` — custom MCP servers unavailable | Gateway/API Server/MCP | Open | No |
| **P3** | [#46369](https://github.com/NousResearch/hermes-agent/issues/46369) Desktop shortcuts ignore Dvorak/non-QWERTY — uses `event.code` not `event.key` | Desktop | Open | No |
| **P3** | [#21521](https://github.com/NousResearch/hermes-agent/issues/21521) Unhandled `auth_type oauth_minimax` warning on auxiliary providers | Agent/Providers/Minimax | Open | No |
| **P3** | [#69709](https://github.com/NousResearch/hermes-agent/issues/69709) `supports_vision` override not resolved for CLI `--provider` with named custom providers | Agent/Vision/Config | Open | No |
| **P3** | [#47930](https://github.com/NousResearch/hermes-agent/issues/47930) Windows Desktop active session arc-border animation static | Desktop/TUI | Open | No |

**Critical cluster:** Session-state integrity (#62708, #65942, #66875, #68979, #69638) and cross-platform media/session delivery (#62936, #18536, #69551) dominate P2s. Several have **no fix PR yet** — maintainers should prioritize #62708 (silent data loss risk) and #62936 (hard blocker for Telegram media).

## 6. Feature Requests & Roadmap Signals
| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) Cross-platform session context sharing (CLI ↔ Telegram) | **High** — 9 comments, 2👍, labeled `needs-decision`, `sweeper:risk-session-state`. Core multi-platform UX gap. | Medium — requires gateway session store redesign; `needs-decision` suggests architecture debate |
| [#66268](https://github.com/NousResearch/hermes-agent/issues/66268) Advertise delegation toolset isolation in `GET /v1/capabilities` | **Medium** — delegation already isolates server-side; just needs API exposure. Low-risk enhancement. | High — straightforward, aligns with delegation maturity |
| [#44845](https://github.com/NousResearch/hermes-agent/issues/44845) Clarify prompts as durable ID-addressable decisions (not blocking timers) | **Medium** — architectural shift for async human-in-the-loop; `needs-decision`. | Low — breaking change to gateway prompt protocol |
| [#69726](https://github.com/NousResearch/hermes-agent/issues/69726) WhatsApp: support `channel_skill_bindings` for auto-loading group skills | **Medium** — parity with Discord/Slack; config bridge already exists for other platforms. | High — small config change, existing pattern |
| [#69694](https://github.com/NousResearch/hermes-agent/issues/69694) Per-task model selection in `delegate_task` | **Done** — PR [#69694](https://github.com/NousResearch/hermes-agent/pull/69694) merged today. | ✅ Released |
| [#67246](https://github.com/NousResearch/hermes-agent/pull/67246) API Server optional file upload to remote file server | **Medium** — open PR, enables `MEDIA:` tag delivery for API clients. | Medium — depends on review of security-boundary implications (`sweeper:risk-security-boundary`) |
| [#66730](https://github.com/NousResearch/hermes-agent/pull/66730) HSP/1 personal skill sync client (M1 client) | **Strategic** — part of 3-repo "Collective Wisdom" milestone; open PR with `needs-decision`. | Low — cross-repo dependency, milestone-gated |

**Prediction:** Next version will likely include WhatsApp `channel_skill_bindings` (#69726), delegation capabilities advertisement (#66268), and API Server file upload (#67246). Cross-platform session sharing (#4335) and HSP sync (#66730) are longer-horizon.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **"My context doesn't follow me across platforms"** | #4335 (9 comments): "Telegram agent has no knowledge of CLI conversations" | Power users using CLI + mobile Telegram lose continuity; forces manual context re-entry |
| **"Desktop session list is broken for the session I just used"** | #66875 (7 comments): most-recent session unclickable after tab switch | Daily-drive desktop users hit regression on core navigation |
| **"Large Telegram uploads just fail silently"** | #62936 (6 comments): >15MB always timeout, config ignored | Media-heavy workflows (design, docs, video) blocked on Telegram |
| **"Installer pollutes my PATH on macOS"** | #45279 (4 comments): shims shadow Homebrew/nvm despite "fixed" PR | Devs using multiple Node managers get version conflicts; erodes installer trust |
| **"Vision tool bricks my session with large screenshots"** | #25837 (3 comments): Anthropic 400 on >8000px, poisons history | Browser/vision automation fails catastrophically; requires session reset |
| **"Queue drops media files except the last one"** | #18539 (3 comments): FIFO chain only delivers media for final item | Batch processing workflows broken; files generated but not delivered |
| **"SSH remote mode broken with profiles"** | #69551 (3 comments): token path hardcoded to `~/.hermes/desktop-ssh` | Multi-profile desktop users can't use SSH remote — regression in v0.19.0 |
| **"Windows file writes silently dropped"** | #57775 (1 comment): `atomic_replace` fails on sharing violation | Windows gateway users risk state corruption under concurrent access |

**Satisfaction signals:** Users appreciate the rapid desktop billing polish (#69655, #69691) and delegation enhancement (#69694). Dissatisfaction clusters around **session-state reliability** and **cross-platform consistency** — the "it works on one platform but breaks when I switch" pattern.

## 8. Backlog Watch — Stale Important Items Needing Maintainer Attention
| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) Cross-platform session context sharing | 115 days (since 2026-03-31) | **Highest community demand** (9 comments, 2👍); `needs-decision` + `sweeper:risk-session-state` — architectural decision pending | Requires gateway session store unification; may need RFC |
| [#21341

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-23

---

## 1. Today's Overview
PicoClaw saw moderate maintenance activity in the last 24 hours with **4 issues updated** (all open) and **5 PRs updated** (3 open, 2 closed). No new release was published. The project is in a steady maintenance phase: two dependency/security PRs were merged (#3286, #3285), while several feature and refactor PRs remain open but stale. Community discussion is concentrated on a critical Matrix reconnection bug (#3203), which has the highest engagement (5 comments, 2 👍). Overall health appears stable but with a growing backlog of unaddressed feature requests and bugs.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#3286](https://github.com/sipeed/picoclaw/pull/3286) | fix: update Go and x/text for govulncheck | Dependency / Security | Updates Go toolchain and `x/text` to resolve `govulncheck` findings; non‑breaking maintenance. |
| [#3285](https://github.com/sipeed/picoclaw/pull/3285) | docs: remove picopaw | Documentation | Reverts #3096, removing references to the deprecated `picopaw` component. |

Both PRs were authored by `imguoguo` and closed on 2026‑07‑22/23. They reflect routine housekeeping rather than new functionality.

## 4. Community Hot Topics — Most Active Discussions
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | **Bug** | 5 | 2 👍 | **Matrix `/sync` loop lacks reconnection logic** – the process stays alive after network/homeserver disruption, so systemd does not restart it. Users experience silent, permanent disconnects. |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | **Bug** | 1 | 0 | **Hook `before_tool` modification broken** – `decision` field discarded, arguments mis‑parsed due to deserialization defect. Blocks custom tool‑preprocessing workflows. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **Refactor (DeltaChat)** | — | 0 | Large cleanup (‑200 LOC) dropping legacy code, moving secrets to JSON‑RPC, updating invite‑link handling. Stale since 2026‑07‑03. |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | **Feature (Bedrock)** | — | 0 | Add AWS Bedrock Converse prompt‑caching via cache points for cost/latency reduction. Stale since 2026‑06‑23. |

**Analysis:** The Matrix reconnection bug (#3203) is the clear pain point – it affects reliability of a core channel and prevents automated recovery. The hook deserialization bug (#3258) is narrower but breaks extensibility. Both have no linked fix PRs yet.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` long‑poll dies permanently on network/homeserver disruption; no auto‑reconnect; systemd `Restart=on‑failure` ineffective. | No |
| **Medium** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Process hook `before_tool` modify fails: `decision` field dropped, args mis‑parsed due to deserialization defect. | No |
| **Low** | — | No new crash/regression reports in the last 24h beyond the above. | — |

*Note:* Both bugs are marked `stale` but were updated yesterday, indicating they are still visible but not actively triaged.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Stateless/no‑history mode for gateway sessions** | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Medium – clear use‑case (CLI‑style ephemeral sessions in gateway), but no PR yet. |
| **Long‑message coalescing for IRCv3** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Low – newly filed, niche (IRC 512‑byte limit), no implementation started. |
| **DeltaChat cleanup & modernization** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Medium – large refactor ready, but stale; may need rebase/review. |
| **Bedrock Converse prompt caching** | [#3163](https://github.com/sipeed/picoclaw/pull/3163) | Low‑Medium – valuable for AWS users, but PR stale for a month. |
| **DingTalk inbound image support** | [#3283](https://github.com/sipeed/picoclaw/pull/3283) | High – PR opened yesterday, adds media handling; likely to be merged soon. |

**Prediction:** The DingTalk image PR (#3283) and possibly the DeltaChat refactor (#3222) are the nearest to merging. The gateway stateless mode (#3257) aligns with the project’s multi‑channel strategy and could be prioritized if a contributor steps up.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Channel / Context | User Impact |
|------------|-------------------|-------------|
| **Silent Matrix disconnects** | Matrix (homeserver restart, net flakiness) | Requires manual restart; breaks unattended bots. |
| **Hook deserialization broken** | Custom tool hooks (`before_tool`) | Prevents pre‑tool logic (filtering, rewriting) – affects advanced automation. |
| **No ephemeral gateway sessions** | Gateway mode (vs. CLI `agent --session`) | Forces conversation history persistence; no “fresh chat” API. |
| **IRC message splitting** | IRCv3 (512‑byte limit) | Long AI responses arrive as fragmented messages, confusing users. |
| **DingTalk image inbound missing** | DingTalk channel | Cannot receive pictures; limits multimedia interaction. |

**Sentiment:** Users are technically sophisticated (self‑hosting, using hooks, gateways) and expect robust reconnection and extensibility. Frustration is visible on #3203 (“silent death”), while feature requests show desire for parity across channels.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 20 days | Open, stale | Large DeltaChat cleanup (‑200 LOC), modernizes config & security; reduces tech debt. |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | 30 days | Open, stale | Bedrock prompt‑caching – cost/performance win for AWS users. |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | 21 days | Open, active | High‑impact reliability bug; needs design decision (reconnect loop vs. process exit). |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | 8 days | Open, stale | Breaks hook extensibility; likely a small deserialization fix. |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | 8 days | Open, stale | Gateway stateless mode – architectural gap vs. CLI. |

**Recommendation:** Prioritize triage of #3203 (reliability) and #3258 (extensibility). Assign reviewers to stale PRs #3222 and #3163 to unblock contributors. Consider labeling #3257 and #3287 for next milestone planning.

---

*Digest generated from GitHub data as of 2026‑07‑23. All links point to the live sipeed/picoclaw repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-23

---

## 1. Today's Overview
NanoClaw saw modest but focused activity in the last 24 hours: **1 security-related issue opened** and **3 open pull requests updated**, with no merges or releases. The issue (#3118) flags a documentation overclaim about per-group OAuth credential isolation on self-hosted OneCLI, which could mislead operators about security boundaries. The PRs address a WhatsApp identity divergence bug (#3070), introduce a new Waybar status indicator skill (#3117), and add Telegram rich-message rendering via Bot API 10.1 (#2877). Overall, the project is in a **maintenance-and-polish phase** with attention to cross-channel consistency, security accuracy, and developer tooling.

---

## 2. Releases
**No new releases** published today. The latest release information is not provided in the data window.

---

## 3. Project Progress
**No PRs were merged or closed today.** All three active PRs remain open and were updated within the last 24 hours, indicating ongoing review or CI iteration:

| PR | Title | Type | Status |
|----|-------|------|--------|
| [#3070](https://github.com/nanocoai/nanoclaw/pull/3070) | Fix WhatsApp sender identity divergence between Baileys and Cloud paths | Bug fix / Channel consistency | Open, updated 2026-07-22 |
| [#3117](https://github.com/nanocoai/nanoclaw/pull/3117) | feat(skill): add-omarchy-statusbar — Waybar status indicator for NanoClaw | Utility skill | Open, created & updated 2026-07-22 |
| [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) | feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage | Feature skill | Open, updated 2026-07-22 |

---

## 4. Community Hot Topics
### 🔴 **Most Critical: Security Documentation Accuracy** — [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118)
- **Author:** bradfeld | **Created/Updated:** 2026-07-22 | **Comments:** 0 | **Reactions:** 0
- **Core concern:** `SECURITY.md` claims each NanoClaw group gets its own OneCLI agent identity with per-group OAuth credential policies. In reality, on self-hosted OneCLI gateways, OAuth app connections are **account-level**, not group-level — breaking the stated isolation model.
- **Underlying need:** Operators require accurate threat-model documentation to make deployment decisions. This is a **trust and compliance risk** for multi-tenant or regulated environments.

### 🟡 **High Engagement Potential: WhatsApp Identity Unification** — [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070)
- **Author:** QuantumBreakz | **Updated:** 2026-07-22
- **Problem:** Two WhatsApp integration paths (Baileys native vs. Cloud API) emit different sender IDs for the same phone number, causing duplicate user records and broken conversation threading.
- **Signal:** Cross-channel identity consistency is a recurring pain point; this fix enables reliable multi-path WhatsApp deployments.

### 🟢 **Developer Experience: Local Status Visibility** — [PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117)
- **Author:** mmneimne | **Created/Updated:** 2026-07-22
- **Adds:** A Waybar status indicator skill (`add-omarchy-statusbar`) showing NanoClaw agent state in desktop status bars.
- **Signal:** Growing demand for **local observability tooling** — developers want real-time agent status without opening dashboards.

### 🔵 **Platform Parity: Telegram Rich Messages** — [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)
- **Author:** robbyczgw-cla | **Updated:** 2026-07-22
- **Implements:** Native `sendRichMessage` (Bot API 10.1) for formatted cards, buttons, and media — replacing custom Markdown workarounds.
- **Signal:** Channel parity with modern platform features; reduces maintenance burden of custom rendering.

---

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Fix PR Exists? |
|----------|----------|-------------|----------------|
| **High** | [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118) | Security docs overclaim OAuth credential isolation; self-hosted OneCLI uses account-level OAuth, not per-group. Misleads operators on data boundaries. | ❌ No fix PR yet — requires doc correction + possible architecture review |
| **Medium** | [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070) | WhatsApp Baileys vs. Cloud paths generate divergent user IDs for same phone number → duplicate contacts, broken threading. | ✅ Fix in review (PR #3070) |
| **Low** | — | No crash reports, regressions, or stability incidents reported today. | — |

> **Note:** The WhatsApp identity bug (#3070) is the only confirmed functional regression with an active fix. The security documentation issue (#3118) is a **compliance-risk bug** in documentation.

---

## 6. Feature Requests & Roadmap Signals
| Feature / Signal | Source | Likelihood for Next Version |
|------------------|--------|-----------------------------|
| **Accurate per-group credential isolation (or doc correction)** | Issue #3118 | High — security docs must match reality; may drive auth refactor |
| **Unified cross-channel identity model** | PR #3070 | High — WhatsApp fix suggests broader identity normalization effort |
| **Native platform rich rendering (Telegram, WhatsApp, etc.)** | PR #2877 | High — reduces custom code, improves UX parity |
| **Local developer observability (status bars, tray indicators)** | PR #3117 | Medium — niche but growing; may become official skill template |
| **Skill system maturation (utility/operational skill categories)** | PR #3117 template | Medium — contributing guide enforcement signals formalization |

**Prediction:** Next version will likely include the WhatsApp identity fix (#3070), Telegram rich messages (#2877), and a SECURITY.md correction for #3118. The omarchy-statusbar skill (#3117) may ship as a community skill.

---

## 7. User Feedback Summary
No direct user comments or discussions appear in today’s data (all items have 0 comments/reactions). However, inferred pain points from PR/issue content:

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Misleading security claims** | Issue #3118: docs promise per-group OAuth isolation; reality is account-level | High — erodes trust, blocks compliance |
| **Fragmented identity across channels** | PR #3070: same phone → two user IDs in Baileys vs. Cloud | Medium — breaks conversation continuity, analytics |
| **Lack of local agent visibility** | PR #3117: new skill for Waybar status indicator | Low-Medium — improves dev loop, not production-critical |
| **Custom rendering maintenance burden** | PR #2877: migrating to native Bot API 10.1 | Medium — reduces tech debt, improves feature velocity |

> **Overall sentiment:** Quiet but purposeful — contributors are fixing consistency gaps and aligning docs with reality. No vocal dissatisfaction, but #3118 suggests a **silent compliance risk** for production users.

---

## 8. Backlog Watch
| Item | Age | Type | Why It Needs Attention |
|------|-----|------|------------------------|
| [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) | 25 days | Feature PR | Telegram rich rendering — large diff, needs review for API 10.1 compatibility & fallback strategy |
| [#3070](https://github.com/nanocoai/nanoclaw/pull/3070) | 7 days | Bug Fix PR | WhatsApp identity unification — blocks multi-path deployments; should be fast-tracked |
| [#3118](https://github.com/nanocoai/nanoclaw/issues/3118) | 1 day | Security Issue | **Zero comments, high risk** — maintainers must clarify or fix OAuth isolation model before next release |
| [#3117](https://github.com/nanocoai/nanoclaw/pull/3117) | 1 day | Skill PR | New utility skill — low risk, but tests skill contribution pipeline; good for onboarding |

> **Action items for maintainers:**
> 1. **Triage #3118 immediately** — decide: update docs, implement per-group OAuth, or add workaround notice.
> 2. **Review & merge #3070** — unblocks WhatsApp reliability.
> 3. **Assign reviewer for #2877** — stale but high-value platform parity work.
> 4. **Validate skill template** via #3117 — ensures contribution guide scales.

---

*Digest generated from GitHub data as of 2026-07-23. Links point to live items on github.com/nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-23

## 1. Today's Overview
NullClaw saw focused maintenance activity over the past 24 hours with one critical bug reported and its fix merged the same day. The issue (#977) describes a complete loss of Discord event processing after a single `MESSAGE_CREATE` — the gateway remains connected (heartbeats continue) but becomes permanently deaf. The root cause was identified as a stack overflow in the typing-indicator thread running on an undersized 512 KB stack, which crashed the process when TLS handshakes performed large memory copies. The fix (PR #978) moves that thread onto the heavy runtime stack, resolving the crash. No new releases were published.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
| PR | Status | Description |
|----|--------|-------------|
| [#978](https://github.com/nullclaw/nullclaw/pull/978) | **Merged** | **discord: run typing thread on the heavy runtime stack** — Moves the Discord typing-indicator background thread from the auxiliary 512 KB stack to the main heavy runtime stack. Prevents stack overflow during `std.crypto.tls` initialization (large inline `memcpy`s) which was silently aborting the process after the first message triggered typing. Directly fixes #977. |

## 4. Community Hot Topics
| Item | Activity | Analysis |
|------|----------|----------|
| [Issue #977](https://github.com/nullclaw/nullclaw/issues/977) | 1 comment, 0 👍 | **Critical stability bug** — 100% reproducible gateway deafness after one message. User provided clear repro steps and logs. The underlying need is reliable long-running Discord gateway connectivity; the silent failure mode (heartbeats OK, events dropped) is especially dangerous for production bots. |
| [PR #978](https://github.com/nullclaw/nullclaw/pull/978) | Comments: N/A | **Immediate fix** — Author (Tetraslam) diagnosed the stack-size mismatch and delivered a targeted one-line runtime change. High signal-to-noise: issue → diagnosis → fix in same day. |

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#977](https://github.com/nullclaw/nullclaw/issues/977) — Gateway permanently deaf after one `MESSAGE_CREATE`; process stays alive but drops all subsequent events. Root cause: typing thread stack overflow in TLS handshake. | **Closed** (fixed by #978) | [#978](https://github.com/nullclaw/nullclaw/pull/978) (merged) |

No other bugs or regressions reported today.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions in the last 24 hours. The only activity was the critical bug and its fix.

## 7. User Feedback Summary
- **Pain point**: Silent, total loss of Discord event processing after first message — bot appears online but is functionally dead.  
- **Use case**: Long-running Discord bots that must handle continuous message streams.  
- **Sentiment**: Urgent; user provided minimal repro and expected quick resolution.  
- **Satisfaction**: Issue resolved same day; fix is surgical and low-risk.

## 8. Backlog Watch
No long-unanswered issues or PRs surfaced in today’s data. The single issue was resolved within hours. Maintainers should monitor for any follow-up regressions (e.g., other auxiliary-stack threads performing TLS/HTTP work) but no stale items require attention at this time.

---

*Data sourced from NullClaw GitHub activity (2026-07-22 00:00 – 2026-07-23 00:00 UTC).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-23

## 1. Today's Overview
IronClaw is in a **high-velocity consolidation phase** ahead of v1 launch. Over the last 24 hours, 50 issues and 50 PRs were updated — a 1:1 ratio indicating tight issue-to-implementation coupling. The project shows **zero new releases** but **21 PRs merged/closed**, signaling rapid integration of completed work. Dominant themes: Reborn architecture simplification (ProductSurface), extension/channel lifecycle hardening, v1 launch-blocker resolution, and test-infrastructure maturation. The backlog contains numerous "Completed foundation" retrospective issues, confirming systematic delivery of epic-sized workstreams.

## 2. Releases
**No new releases published today.**  
The latest automated release PR (#5598) remains open, staging breaking changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). No migration notes have been finalized.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Area | Status |
|----|-------|------|--------|
| #6535 | test(reborn): add Slice 0 reference model oracles | Testing / Reborn | ✅ Merged |
| #6444 | docs: refresh Reborn ProductSurface routing design | Docs / Architecture | ✅ Merged |
| #6441 | refactor(reborn): name ProductSurface boundary | Architecture / Reborn | ✅ Merged |
| #6519 | Completed foundation: Testing playbook and required PR test strategy | Process / Testing | ✅ Closed (retro) |
| #6515 | Completed foundation: Operator configuration write plane | Config / Operator | ✅ Closed (retro) |
| #6514 | Completed foundation: Generic installation ownership and extension runtime | Extensions / Runtime | ✅ Closed (retro) |
| #6513 | Completed foundation: Per-user extension lifecycle and OAuth hardening | Extensions / OAuth | ✅ Closed (retro) |
| #6510 | Completed foundation: Unified web-gateway thread model | Gateway / Threads | ✅ Closed (retro) |
| #6505 | Completed reference: Slack routing, identity, threads, and delivery honesty | Slack / Messaging | ✅ Closed (retro) |
| #6499 | Completed foundation: Telegram production-image support | Telegram / Deployment | ✅ Closed (retro) |
| #6498 | Completed foundation: Reborn Telegram channel, pairing, and DM entrypoint | Telegram / Channel | ✅ Closed (retro) |
| #6495 | Completed foundation: Unified generic extension runtime | Extensions / Runtime | ✅ Closed (retro) |
| #6494 | Completed foundation: Manifest-driven extension ingress | Extensions / Manifest | ✅ Closed (retro) |
| #6493 | Completed foundation: Extension manifest registry and Manifest V2 | Extensions / Manifest | ✅ Closed (retro) |
| #6489 | Completed foundation: Host-managed memory retrieval and after-turn recording | Memory / Runtime | ✅ Closed (retro) |
| #6521 | [v1-launch-checklist] ironclaw CLI is not available on agent staging | CLI / Deployment | ✅ Closed |

**Net advancement**: 15 retrospective foundation issues closed + 5 active PRs merged = **20 discrete deliverables** landed. The ProductSurface boundary (#6441, #6444) and Reborn test oracles (#6535) are the only *new* code merged; the rest are completion records for work already shipped.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Signal |
|------|------|----------|-------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Issue (Epic) | 4 | **Error-recoverability endgame** — every mid-run error must be survivable, visible to the model, carry cause+remediation, and grant the model a turn to act. Architectural contract, not a bug. |
| [#6105](https://github.com/nearai/ironclaw/issues/6105) | Issue | 3 | **Extension/channel lifecycle state-machine test** — Slack lifecycle is the #1 user-facing bug family; regressed across 4 QA waves. Need install→connect→disconnect→reconnect→uninstall coverage + canary lanes. |
| [#6538](https://github.com/nearai/ironclaw/pull/6538) | PR (XL) | — | **Route OpenAI compat through ProductSurface** — major architectural reroute; preserves 10 MiB inline-image budget. |
| [#6480](https://github.com/nearai/ironclaw/pull/6480) | PR (XL) | — | **Continue ProductSurface conversion** for operator, project, admin, automation, view APIs. |
| [#6442](https://github.com/nearai/ironclaw/pull/6442) | PR (XL) | — | **Unify Reborn runtime composition** — collapse local/production assembly onto single path. |
| [#6520](https://github.com/nearai/ironclaw/pull/6520) | PR (XL) | — | **Make extension readiness and channel delivery generic** — collapse lifecycle to manifest-derived states, separate admin config from user membership. |
| [#6527](https://github.com/nearai/ironclaw/pull/6527) | PR (XL) | — | **Admin-managed user security foundation** — Private/TenantAdminManaged policies, split private-user vs managed-agent creation. |

**Underlying need**: The project is **replacing ad-hoc, provider-specific logic with generic, manifest-driven surfaces** (ProductSurface, ChannelInboundProductSurface, unified extension runtime). Every hot PR touches this boundary. The epic #6284 elevates error handling to a first-class contract — a sign the team is hardening for production SLAs.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🔴 **P1 / Launch-blocker** | [#6523](https://github.com/nearai/ironclaw/issues/6523) | Agent fails to create during onboarding if "test build" flag is set | ❌ None yet |
| 🔴 **P1 / Launch-blocker** | [#6534](https://github.com/nearai/ironclaw/issues/6534) | Google OAuth config can't be applied in hosted deployments | Partial: [#6533](https://github.com/nearai/ironclaw/pull/6533) (container-supervised restart) |
| 🔴 **P1** | [#6475](https://github.com/nearai/ironclaw/issues/6475) | Telegram `/pair` command not recognized, traps user in pairing loop | ❌ None |
| 🟠 **P2** | [#6478](https://github.com/nearai/ironclaw/issues/6478) | Agent doesn't recognize connected Telegram, redirects to Slack auth | ❌ None |
| 🟠 **P2** | [#6474](https://github.com/nearai/ironclaw/issues/6474) | Telegram delivery channel not configurable in Delivery Defaults | ❌ None |
| 🟠 **P2** | [#6522](https://github.com/nearai/ironclaw/issues/6522) | IronClaw doesn't know how to set up Telegram locally or on agent.near.ai | ❌ None |
| 🟡 **P3** | [#6232](https://github.com/nearai/ironclaw/pull/6232) | Auto-activate web-access & Brave-backed web_search (PR open, not merged) | ✅ PR open |

**Pattern**: **Telegram channel is the current instability hotspot** — 4/7 bugs today involve Telegram pairing, delivery, or discoverability. Google OAuth on hosted is the other launch-blocker. Fix PRs exist only for OAuth container restart (#6533) and web-search activation (#6232).

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Configurable skills/tools with admin/user scoping** | [#5459](https://github.com/nearai/ironclaw/issues/5459) (2 comments, updated today) | High — WASM tool/skill install ownership is a stated v1 requirement |
| **Attested-signing stack + Ledger hardware-wallet clear signing** | [#6532](https://github.com/nearai/ironclaw/issues/6532) (new today, design + Phase A) | Medium — blockchain transaction capability is a differentiator but Phase A only |
| **Secret-lease + egress-proxy daemon** | [#6472](https://github.com/nearai/ironclaw/issues/6472) (new today, part of #6468) | High — sandbox/egress control is a security prerequisite |
| **Hermetic capability & journey testing platform** | [#6524](https://github.com/nearai/ironclaw/issues/6524) (epic, new today) | High — directly unblocks v1 confidence |
| **Unified extension model: MCP tools as single-tool extensions + provider dedup** | [#2246](https://github.com/nearai/ironclaw/issues/2246) (long-standing, updated today) | Medium — architectural cleanup, may slip post-v1 |
| **Routine notifications in user's chat thread (not isolated)** | [#1519](https://github.com/nearai/ironclaw/issues/1519) (old, updated today) | Low — UX polish, not launch-critical |

**Prediction**: Next version will ship **configurable skills/tools (#5459)**, **secret-lease/egress-proxy (#6472)**, and **hermetic testing platform (#6524)**. Attested signing (#6532) will land in phases. MCP unification (#2246) likely post-v1.

## 7. User Feedback Summary (Real Pain Points)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Telegram pairing broken** — `/pair` ignored, loop, no delivery config | #6475, #6474, #6522, #6478 | 4 issues today |
| **Hosted deployment gaps** — CLI missing, Google OAuth unsaveable, container restart UX | #6521, #6534, #6533 | 3 issues today |
| **Extension/channel lifecycle regressions** — Slack/Telegram disconnect/reconnect fails repeatedly | #6105 (regressed across 4 QA waves) | Chronic |
| **No local setup docs for Telegram** — users sent to Delivery Defaults which has no Telegram option | #6522 (screenshots attached) | Acute |
| **Agent misroutes channel** — tries Slack auth when Telegram is connected | #6478 | Acute |

**Sentiment**: **Frustration on channel UX** (Telegram especially) and **hosted operator gaps**. Positive signal: team is closing foundation issues rapidly, but user-facing bugs remain.

## 8. Backlog Watch — Stale Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#2246](https://github.com/nearai/ironclaw/issues/2246) | 105 days | Unify MCP/WASM extension model; dedup providers. Blocked on manifest V3? | Open, 1 comment |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) | 78 days | Production/scoped capability lifecycle admin parity — core for multi-tenant | Open, 2 comments |
| [#1330](https://github.com/nearai/ironclaw/issues/1330) | 127 days | Tool schema discovery — message routing/attachment semantics unclear to model | On hold, P3 |
| [#1519](https://github.com/nearai/ironclaw/issues/1519) | 124 days | Routine notifications lack context in user thread — UX gap | Open, 1 comment |
| [#4775](https://github.com/nearai/ironclaw/issues/4775) | 42 days | Automated QA for Reborn binary — hermetic + live coverage | Epic, 0 comments |
| [#5459](https://github.com/nearai/ironclaw/issues/5459) | 23 days | Configurable skills/tools — admin vs user install scoping | Open, 2 comments |

**Maintainer action suggested**:  
1. **Triage #2246 & #3288** — both are architectural prerequisites for clean extension governance.  
2. **Assign #4775** — automated QA epic has zero comments; needs an owner to unblock v1 confidence.  
3. **Resolve #1330** — "on hold" for 4 months; either schedule or close with rationale.  
4. **Prioritize #5459** — user-facing feature with clear scope, updated recently.

---

**Project Health Score**: 🟡 **Yellow — High velocity but user-facing regressions accumulating**  
- ✅ Foundation completion rate: **excellent** (15 retro issues closed today)  
- ✅ Architecture convergence: **strong** (ProductSurface, unified runtime, manifest-driven)  
- ⚠️ Launch-blocker bugs: **4 open P1/P2** (Telegram, OAuth, test build)  
- ⚠️ Stale architectural debt: **3 items > 75 days**  
- 📈 Trend: **Improving** if P1 bugs resolve this week; **risky** if Telegram/hosted gaps persist.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-23

---

## 1. Today's Overview
LobsterAI saw a **maintenance-focused day** with zero open issues or PRs created in the last 24 hours, but **five PRs merged/closed** — all authored by core contributors. Activity centers on **platform hardening (Windows installer), UI stability (modal stacking, OOM guards), and closing stale feature branches** from April. No new releases or community-reported issues emerged, indicating a quiet but steady stabilization sprint.

---

## 2. Releases
**No new releases** published today.

---

## 3. Project Progress — Merged/Closed PRs (5)

| PR | Area | Type | Summary |
|----|------|------|---------|
| [#2377](https://github.com/netease-youdao/LobsterAI/pull/2377) | `renderer`, `main`, `platform:windows` | **Hardening** | Windows update installer security & reliability improvements. |
| [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | `renderer`, `cowork` | **UI Fix** | Export options modal now rendered via body portal to avoid z-index/sidebar stacking conflicts. |
| [#2375](https://github.com/netease-youdao/LobsterAI/pull/2375) | `renderer`, `docs`, `main`, `openclaw` | **Stability/Crash Fix** | Guards against oversized transcript OOM in gateway; classifies heap-OOM crashes; ignores stale client generations post-restart to prevent zombie reconnects. |
| [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347) | `scheduledTask` | **Feature (stale)** | Cron custom scheduling (visual builder + raw expression), Agent/Model binding, form UX unification — **closed as stale** after 3+ months. |
| [#1346](https://github.com/netease-youdao/LobsterAI/pull/1346) | `skills` | **Feature (stale)** | Skills management per official requirements — **closed as stale** after 3+ months. |

**Key takeaway**: Three **high-impact stability/UX fixes** landed today (#2375, #2376, #2377). Two long-stale feature PRs (#1346, #1347) were formally closed, reducing backlog noise.

---

## 4. Community Hot Topics
**No active community discussions** in the last 24h — all closed items were maintainer-driven. The only issue updated (#1348) was a **stale validation gap** (duplicate scheduled-task names) closed without recent commentary.

> **Signal**: Community engagement is currently low; project momentum is internally driven.

---

## 5. Bugs & Stability — Today’s Fixes (Ranked by Severity)

| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **Critical** | Gateway OOM on oversized active transcript → crash + zombie reconnects | [#2375](https://github.com/netease-youdao/LobsterAI/pull/2375) | ✅ Merged |
| **High** | Windows installer lacked hardening (potential privilege escalation / tampering) | [#2377](https://github.com/netease-youdao/LobsterAI/pull/2377) | ✅ Merged |
| **Medium** | Export modal rendered inside sidebar stacking context → hidden/unclickable | [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | ✅ Merged |
| **Low** | Duplicate scheduled-task name validation missing (UI only, no data corruption) | [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | ✅ Closed (stale) |

**All critical/high-severity items have fixes merged today.**

---

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Cron custom scheduling (visual + raw) for scheduled tasks** | [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347) (stale) | ⚠️ **Low** — PR closed stale; may be re-scoped |
| **Agent/Model binding in scheduled tasks** | [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347) | ⚠️ **Low** — same as above |
| **Skills management UI** | [#1346](https://github.com/netease-youdao/LobsterAI/pull/1346) (stale) | ⚠️ **Low** — closed stale |
| **Duplicate-name validation for scheduled tasks** | [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | ✅ **High** — trivial fix, likely in next patch |

**Prediction**: Next patch will include the validation fix (#1348) + the three stability PRs. Major features (Cron builder, Skills) are **not imminent** — they need re-proposal with updated design.

---

## 7. User Feedback Summary
**No direct user feedback** (comments, reactions, new issues) in the last 24h. The only user-facing artifact is the **stale issue #1348** (screenshot-attached), showing a UX gap where duplicate task names silently overwrite. Pain point: **lack of inline validation** in task-creation flow.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|---------------------|
| **Scheduled-task Cron & Agent binding** ([#1347](https://github.com/netease-youdao/LobsterAI/pull/1347)) | 112 days | High-value automation feature; large PR (300+ files) with tests | **Re-open as draft** with updated base; split into: (1) Cron parser/validator, (2) Agent selector component, (3) Task form refactor |
| **Skills management** ([#1346](https://github.com/netease-youdao/LobsterAI/pull/1346)) | 112 days | Core extensibility surface; requested by enterprise users | **Re-propose** with RFC — define skill manifest, sandbox, marketplace |
| **Duplicate task-name validation** ([#1348](https://github.com/netease-youdao/LobsterAI/issues/1348)) | 112 days | Simple UX fix; prevents silent data loss | **Quick win** — add unique constraint + toast error in `ScheduledTaskForm` |

---

## Health Indicators
| Metric | Status |
|--------|--------|
| **Release cadence** | ⏸️ Paused (no release >30 days) |
| **Critical bug backlog** | ✅ 0 (all fixed today) |
| **Stale PR cleanup** | ✅ Active (2 closed today) |
| **Community engagement** | 🔴 Low (0 comments/reactions in 24h) |
| **Platform coverage** | 🟢 Windows hardening shipped |

---

**Next digest**: 2026-07-24 — watch for re-opened feature PRs or first community issue post-stabilization.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-23

## 1. Today's Overview
Moltis showed minimal activity in the past 24 hours with **zero issues** and **one open pull request** updated. No new releases were published and no issues were closed or merged. The sole activity is PR #1162, which addresses a UI improvement for session date labeling in the web client. Overall project velocity appears low for this period, with no community discussions, bug reports, or feature requests surfacing in the tracked window.

## 2. Releases
No new releases published today. The latest release information is not provided in the current data snapshot.

## 3. Project Progress
**No PRs were merged or closed today.** The only active PR remains open:

| PR | Title | Status | Author | Updated |
|----|-------|--------|--------|---------|
| [#1162](https://github.com/moltis-org/moltis/pull/1162) | fix(web): show dates for older sessions | Open | shixi-li | 2026-07-22 |

**PR #1162** improves session timestamp presentation in the web UI:
- Retains localized `HH:MM` for sessions updated today
- Adds “yesterday” and weekday labels for recent prior days
- Falls back to calendar date (including year when needed) for older sessions
- Includes browser test coverage for all four date buckets
- Preserves full localized timestamp in tooltips

This is a polished UX refinement rather than a functional change.

## 4. Community Hot Topics
No issues or PRs with comments or reactions were recorded in the last 24 hours. PR #1162 has **0 comments** and **0 reactions** at the time of this digest.

## 5. Bugs & Stability
No new bug reports, crashes, or regressions were filed or updated today. The single open PR is a UI enhancement, not a bug fix.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions appeared in the last 24 hours. The only signal is the ongoing PR #1162, which suggests continued investment in **web-client usability polish**—specifically date/time localization and readability for historical sessions.

## 7. User Feedback Summary
No user feedback (issues, discussions, or PR reviews) was captured in the last 24 hours. The project appears quiet from a community-input perspective today.

## 8. Backlog Watch
With no issues updated today, there are no newly surfaced long-unanswered items. Maintainers may wish to review older open issues/PRs outside this 24-hour window for stale items needing triage, but none are highlighted in the current data.

---

*Digest generated from GitHub data for moltis-org/moltis covering 2026-07-22 to 2026-07-23. Links point to live GitHub resources.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-23

---

## 1. Today's Overview

QwenPaw shows **exceptionally high velocity** with 31 issues and 50 PRs updated in 24 hours, plus a new patch release (v2.0.0.post4). The project is in active stabilization of the v2.0 architecture — addressing regressions in context compaction, tool-call parsing, token-usage persistence, and Windows compatibility. Community engagement is strong: multiple first-time contributors submitting fixes, and users reporting real-world blockers (process freezes, model compatibility, Docker workflow pain). The v2.0.0.post4 release specifically targets "redundant thinking loops and duplicate tool invocations," indicating core reasoning-loop refinement remains a priority.

---

## 2. Releases

### v2.0.0.post4 (2026-07-22)
- **Change**: Optimized agent reasoning to mitigate redundant thinking loops and duplicate tool invocations.
- **Type**: Patch / post-release
- **Breaking changes**: None documented
- **Migration notes**: Drop-in replacement for v2.0.0.post3; users experiencing agent looping or repeated tool calls should upgrade.
- **Full changelog**: [v2.0.0.post3...v2.0.0.post4](https://github.com/agentscope-ai/QwenPaw/compare/v2.0.0.post3...v2.0.0.post4)

> **Note**: The release issue [#6338](https://github.com/agentscope-ai/QwenPaw/issues/6338) tracks installation verification across platforms (deadline 2026-07-22 11:15 UTC).

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Type | Status |
|----|-------|------|--------|
| [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) | fix(token-usage): retry token usage persistence | Bug fix | **Closed** (merged) |
| [#6359](https://github.com/agentscope-ai/QwenPaw/pull/6359) | fix: change context injection role from system to user | Bug fix | **Closed** (merged) |
| [#6176](https://github.com/agentscope-ai/QwenPaw/pull/6176) | cron CLI update resets untouched runtime/metadata fields | Bug fix | **Closed** (issue closed) |
| [#6320](https://github.com/agentscope-ai/QwenPaw/pull/6320) | LaTeX formula rendering fix (sqrt) | Bug fix | **Closed** (issue closed) |
| [#6322](https://github.com/agentscope-ai/QwenPaw/pull/6322) | Platform domain redirecting to ad page (mobile/Unicom) | Bug/Infra | **Closed** (issue closed) |
| [#5218](https://github.com/agentscope-ai/QwenPaw/pull/5218) | Sub-agent context compaction causes process freeze | Critical bug | **Closed** (issue closed) |

**Key advances**:
- **Token-usage persistence** now retries on transient write failures ([#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375)).
- **Context injection role** changed from `system` → `user` to satisfy OpenAI/GLM/Anthropic API requirements ([#6359](https://github.com/agentscope-ai/QwenPaw/pull/6359)).
- **Cron CLI** no longer silently resets unspecified fields ([#6176](https://github.com/agentscope-ai/QwenPaw/pull/6176)).
- **Critical freeze** during sub-agent context compaction resolved ([#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)).

---

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Comments | 👍 | Summary | Underlying Need |
|------|----------|-----|---------|-----------------|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) **CLOSED** | 18 | 0 | Sub-agent context compaction freezes QwenPaw process | **Reliability**: Core multi-agent workflow broken; users cannot trust sub-agent delegation |
| [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) **CLOSED** | 8 | 0 | Platform domain redirects to ad page on mobile (China Unicom vs. Mobile) | **Network/Infra**: Regional CDN/DNS poisoning affecting Chinese users |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) **OPEN** | 8 | 0 | `RemoteProtocolError`: QwenPaw actively closes connection to model (v1.1.2) | **Stability**: Connection lifecycle bug; packet captures show FIN from QwenPaw side |
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) **OPEN** | 6 | 0 | Per-conversation model override (vs. agent-level only) | **Flexibility**: Users want conversation-scoped model selection for cost/quality tradeoffs |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) **OPEN** | 4 | 0 | v2.0 adds ~2s fixed overhead per simple reply vs v1.x | **Performance**: Architectural regression; users feel v2.0 is "slower" for chat |
| [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) **CLOSED** | 4 | 0 | Drag-and-drop upload for images/PDFs/Office docs (Windows 11) | **UX**: Document-heavy workflows (contract review) blocked by missing file upload |
| [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) **OPEN** | 2 | 0 | Docker hot-reload for web frontend (avoid losing dynamic tool installs) | **Ops**: Frequent releases (10+/month) make `docker rm/rebuild` painful; lose Node/ffmpeg/LibreOffice |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR / Status |
|----------|-------|-------------|-----------------|
| **Critical** | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Sub-agent context compaction → process freeze (requires manual restart) | **Closed** (fix shipped in v2.0.0.post4?) |
| **Critical** | [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) | v2.0.0.post3/post4: new "loop" feature crashes main process frequently | **OPEN** — no fix PR yet; user demands stress testing |
| **High** | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | `RemoteProtocolError`: QwenPaw sends FIN to model, closes connection prematurely | **OPEN** — packet capture evidence; v1.1.2 affected |
| **High** | [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) | Tool-call args polluted with markdown fences/XML (GLM-5-Turbo, DeepSeek-V3) → `JSONDecodeError` | **Fix PR**: [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) (strip fences/tags) |
| **High** | [#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358) | Context injection as `role=system` mid-conversation → `ValueError` on GLM/OpenAI | **Fix PR**: [#6359](https://github.com/agentscope-ai/QwenPaw/pull/6359) **merged**; [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) duplicate |
| **High** | [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | Built-in MiniMax provider + MiniMax-M3: images not recognized (returns hallucinations) | **OPEN** — related to [#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135) (open since 06-11) |
| **Medium** | [#6372](https://github.com/agentscope-ai/QwenPaw/issues/6372) | Idle cleanup removes newly recreated queue state (race condition) | **Fix PR**: [#6373](https://github.com/agentscope-ai/QwenPaw/pull/6373) |
| **Medium** | [#6370](https://github.com/agentscope-ai/QwenPaw/issues/6370) | Downloader fallback chain breaks on `subprocess.TimeoutExpired` (wget/curl) | **Fix PR**: [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) |
| **Medium** | [#6368](https://github.com/agentscope-ai/QwenPaw/issues/6368) | `audit_level=none` ignored; SQLite inserts still happen | **Fix PR**: [#6369](https://github.com/agentscope-ai/QwenPaw/pull/6369) |
| **Medium** | [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) | Token usage persistence doesn't retry after transient write failure | **Fix PR**: [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) **merged** |
| **Low** | [#6366](https://github.com/agentscope-ai/QwenPaw/issues/6366) | Console coverage test times out (15s → needs 30s under V8 instrumentation) | **Fix PR**: [#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367) |
| **Low** | [#6361](https://github.com/agentscope-ai/QwenPaw/issues/6361) | Console test scripts fail on Windows (POSIX `NODE_OPTIONS=` syntax) | **Fix PR**: [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals / Likelihood |
|---------|-------|----------------------|
| **Per-conversation model override** | [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) (6 comments) | High — PR [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) already implements `model_slot_override` for cron jobs; same pattern likely for conversations |
| **Drag-and-drop file upload (images/PDF/Office)** | [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) (closed but demand clear) | High — Windows 11 user; contract-review use case; may land in Console frontend |
| **Cron job per-job model pinning** | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | **Implemented** in PR [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) — reuses `model_slot_override` |
| **Docker hot-reload / persistent tool layer** | [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | Medium — strong ops pain (10+ releases/month); references AstrBot pattern; may need infra work |
| **Multi-user / multi-account support** | [#6335](https://github.com/agentscope-ai/QwenPaw/issues/6335) | Medium — enterprise deployment request; currently "personal assistant" architecture |
| **Explicit Node.js version pinning** | [#6326](https://github.com/agentscope-ai/QwenPaw/issues/6326) | Low — simple doc/build fix |
| **Plugin market sorting (downloads, update time, favorites)** | PR [#6349](https://github.com/agentscope-ai/QwenPaw/pull/6349) | In progress — Console UX improvement |
| **QwenPaw Creator app (script→video workflow)** | PR [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | New `app`-type plugin; expands ecosystem beyond chat agents |

---

## 7. User Feedback Summary

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **v2.0 regression pain** | "v2.0 introduces ~2s fixed overhead per simple reply vs v1.x" ([#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)); "loop feature crashes main process frequently... can't you stress test before release?" ([#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376)) | 😡 **Frustrated** — performance & stability regressions |
| **Model compatibility gaps** | MiniMax-M3 vision broken since v1.1.11 ([#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135), [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362)); GLM/DeepSeek tool-call format breaks execution ([#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363)) | 😟 **Blocked** — popular models unusable |
| **Docker/ops friction** | "10+ releases in July alone... every update loses Node/ffmpeg/LibreOffice... need hot-reload like AstrBot" ([#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344)) | 😤 **Annoyed** — high-frequency releases break self-hosted workflows |
| **UX polish gaps** | "Always Allow button too prominent vs Once" ([#6354](https://github.com/agentscope-ai/QwenPaw/issues/6354)); LaTeX sqrt not rendering ([#6320](https://github.com/agentscope-ai/QwenPaw/issues/6320)); drag-drop upload missing ([#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297)) | 😐 **Disappointed** — paper cuts in daily use |
| **Positive: rapid fixes** | Multiple first-time contributor PRs merged same-day; maintainers responsive to critical bugs | 👍 **Appreciative** — but want *pre-release* testing |

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135) MiniMax-M3 vision broken | 42 days (since 06-11) | Popular model; vision completely hallucinates; blocks document/image workflows | **OPEN** — no fix PR; related [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) confirms persists in v2.0.0.post4 |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) v2.0 ~2s overhead per reply | 2 days | Architectural regression; affects every user interaction; no fix PR yet | **OPEN** — needs profiling / architecture review |
| [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) Loop feature crashes main process | 1 day | Critical stability; user explicitly asks for stress testing pre-release | **OPEN** — no fix PR; high urgency |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) RemoteProtocolError (QwenPaw sends FIN) | 2 days | Connection lifecycle bug; packet evidence; affects v1.1.2 | **

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-23

## 1. Today's Overview
ZeroClaw shows **high velocity** with 50 issues and 50 PRs updated in the last 24 hours, though **no releases** and **zero PRs merged** today. The project is in a heavy development phase targeting v0.9.0, with multiple RFCs tracking security, architecture, and observability work. Critical-path items include Windows compatibility (74 test failures), npm security advisories, and daemon-node liveness. The backlog reflects a platform maturing toward multi-agent, multi-node, multi-channel deployments with enterprise-grade auth (OIDC), observability (OTel), and plugin unification.

## 2. Releases
**No new releases today.** The project remains on the v0.8.x series with v0.9.0 RFCs actively tracking.

## 3. Project Progress (Closed/Advanced Today)
| Item | Type | Status | Summary |
|------|------|--------|---------|
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Issue | **Closed** | Turn-level OTel trace correlation — nest llm.call / tool.call / memory.* spans under a single turn trace (8 comments) |
| [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) | Issue | **Closed** | RFC: Move translated .ftl and .po files into a git submodule (7 comments) |
| [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | Issue | **Closed** | RFC: A2A agent discovery (.well-known/agent-card.json) for multi-agent installs (7 comments) |
| [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) | Issue | **Closed** | Reconcile runtime model switching with provider structure for v0.8.0 (5 comments) |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | Issue | **Closed** | "Everything is a plugin" — phased path from Integrations → unified plugin catalog (3 comments) |
| [#8925](https://github.com/zeroclaw-labs/zeroclaw/issues/8925) | Issue | **Closed** | Docs: Explain Bedrock credential profiles and systemd service setup (2 comments) |

**No PRs were merged today** — all 50 active PRs remain open.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Priority/Risk | Core Need |
|------|----------|---------------|-----------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 11 | P1 / High | **Windows CI gap** — 74 test failures on Windows 11 (Chinese locale, CP936) because CI only runs on Linux. Blocks cross-platform reliability. |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 7 | P1 / High | **OIDC auth provider support** — RFC tracking umbrella for pluggable authentication, targeting v0.9.0. Enterprise adoption blocker. |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | 6 | P2 / High | **Real daemon heartbeat** — nodes show "Online" indefinitely without actual WS liveness checks. Needed for multi-node fleet health. |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 6 | P2 / High | **Decouple memory lifecycle from storage** — `MemoryStrategy` trait to enable pluggable retrieval/consolidation without backend changes. |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | 3 | P2 / High | **Structured Observability Enhancement** — Rich events, OTel trace correlation, bridge refactoring. Addresses sparse event context gaps. |
| [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) | 2 | P1 / High | **npm audit failures** — 3 high/critical findings (@redocly/openapi-core, js-yaml, brace-expansion). Auto-filed by bot 2026-07-21. |
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | 4 | P2 / In-progress | **Agent evaluation harness** (`zeroclaw eval`) — deterministic replay + live modes, pluggable graders, LLM-as-judge. |
| [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | — | XL / High | **Inkbox channel** — native email/SMS/voice/iMessage channel with Quickstart onboarding. Large feature PR. |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | — | XL / High | **OpenAI Chat Completions endpoint** on gateway — enables LangChain, Continue.dev, Aider, OpenAI SDK interop. |
| [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) | — | XL / High | **Goal controller & verifier** — Rust-side goal admission, restart recovery, cost attribution for trusted goal turns. |

**Underlying themes**: Windows parity, enterprise auth (OIDC), multi-node fleet reliability, observability maturity, plugin/channel extensibility, and evaluation tooling.

## 5. Bugs & Stability (Reported/Active Today)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical (S1/P1)** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 test failures on Windows (Unix-only commands, path semantics, console encoding) | Open | No |
| **Critical (S1/P1)** | [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) — History trimming occurs silently with history pruning disabled | Open | No |
| **Critical (S1/P1)** | [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) — Shell/skill subprocess can OOM container (unbounded child process memory) | Open | No |
| **High (S2/P1)** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) — Empty Signal/Voice Call credentials cause supervisor crashloop | Open | No |
| **High (S2/P2)** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) — Channel runtime replies bypass Fluent localization (hard-coded English) | Open | No |
| **High (Security)** | [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) — npm audit: 3 high/critical advisories | Open | **Yes: [#9270](https://github.com/zeroclaw-labs/zeroclaw/pull/9270)** (pins @redocly/openapi-core, upgrades js-yaml, brace-expansion) |
| **Medium** | [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) — Skill-review history slice unbounded against in-fork compaction | PR Open | **Yes: #8680** (bounds slice) |
| **Medium** | [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) — OpenAI STT credentials missing env-var fallback | PR Open | **Yes: #8576** (uses `apply_legacy_env_fallbacks`) |
| **Medium** | [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) — Bedrock Nova 2 fails with prompt caching (400: extraneous cachePoint) | PR Open | **Yes: #8943** (excludes Nova 2 from caching allowlist) |

**

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*