# OpenClaw Ecosystem Digest 2026-07-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-28 01:57 UTC

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

# OpenClaw Project Digest — 2026-07-28

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours — a signal of intense stabilization work rather than feature development. The 242 open issues and 282 open PRs indicate a large backlog being actively triaged. Critically, **no new releases** have shipped, suggesting the project is in a pre-release hardening phase. The issue landscape is dominated by **P0/P1 stability bugs**: memory leaks (gateway RSS growing to 15.5GB), session/message loss, crash loops, and provider integration regressions. The PR queue reflects corresponding fixes — persistence for follow-up queues, cron job restart safety, model fallback gaps, and iOS/Android app gaps. Overall health: **high activity, critical stability debt, pre-release**.

---

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be accumulating fixes for a forthcoming beta or stable cut (several PRs reference `2026.7.2-beta.x` versions).

---

## 3. Project Progress — Merged/Closed PRs (218 merged/closed in 24h)

Key merged/closed PRs advancing stability:

| PR | Area | Summary |
|----|------|---------|
| [#114820](https://github.com/openclaw/openclaw/pull/114820) | Cron | **Fix**: Prevent completed cron jobs from re-running after gateway restart (P2, ready for maintainer) |
| [#110795](https://github.com/openclaw/openclaw/pull/110795) | GitHub Copilot | **Fix**: Guard malformed Copilot usage payloads (P2, merged) |
| [#113083](https://github.com/openclaw/openclaw/pull/113083) | Android deps | **Chore**: Bump Android dependencies (5 updates, merged) |
| [#113625](https://github.com/openclaw/openclaw/pull/113625) | Auto-reply | **Fix**: Gate execution-phase typing in `typingMode: "message"` (P2, ready) |
| [#113200](https://github.com/openclaw/openclaw/pull/113200) | Doctor | **Fix**: Honor configured plugin load paths (P1, ready) |
| [#113207](https://github.com/openclaw/openclaw/pull/113207) | Sessions | **Fix**: Move legacy boot session repair to `doctor` check (P1, needs proof) |
| [#112515](https://github.com/openclaw/openclaw/pull/112515) | Media | **Fix**: Keep hosted plugin media pinned across registry changes (P2, ready) |
| [#112621](https://github.com/openclaw/openclaw/pull/112621) | Channels | **Fix**: Hide internal tool text in Reef/Zalo Personal (XS, ready) |
| [#111126](https://github.com/openclaw/openclaw/pull/111126) | Agent CLI | **Fix**: Exit non-zero when gateway runs don't complete (P1, ready) |
| [#111955](https://github.com/openclaw/openclaw/pull/111955) | Slack | **Fix**: Preserve native tables during outbound delivery (P2, ready) |

**Pattern**: Fixes cluster around **session durability**, **gateway restart safety**, **provider payload hardening**, and **channel delivery correctness**.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count

| Issue | Comments | 👍 | Area | Core Need |
|-------|----------|-----|------|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 115 | 80 | **Platform gap** | Native Linux/Windows apps missing — only macOS/iOS/Android exist |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 22 | 0 | **Security** | Tag memory entries by trust level (user vs web vs skills) to prevent poisoning |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) **P0** Gateway Memory Leak — RSS 350MB→15.5GB | 21 | 1 | **Critical stability** | Severe leak causes OOM kills & restart storms over 2-3 days |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) Second message fails: "reply session initialization conflicted" | 16 | 1 | **Session state** | Cross-channel, position-dependent session init conflict |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets — Prevent Agent from Seeing Raw API Keys | 15 | 4 | **Security** | Agents can use keys but not read them; prevents leaks & prompt injection |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) Agent repeats replies 2-10x on Telegram post-5.20 | 14 | 1 | **Regression** | Duplicate messages since 5.20; 5.22 reduced but not fixed |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) Tool outputs degrade to "(see attached image)" placeholders | 14 | 4 | **Data loss** | Text outputs replaced by image placeholders in agent context |
| [#74484](https://github.com/openclaw/openclaw/issues/74484) Gateway pairing scope deadlock | 13 | 2 | **Auth/CLI** | CLI lacks scope to approve/reject auto-reissued repair requests |
| [#94846](https://github.com/openclaw/openclaw/issues/94846) Cron isolated agentTurn skips delivery on recovered fatal error | 13 | 1 | **Cron/state** | Successful run marked error due to early recovered tool error |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore lacks crash/identity guarantees | 12 | 0 | **Data integrity** | Snapshot restore reports success without durable directory linking |

**Underlying themes**:  
- **Platform parity** (Linux/Windows apps) is the #1 community ask by engagement.  
- **Memory/leak stability** (gateway, heap, SQLite) dominates technical urgency.  
- **Session/message durability** across restarts, channels, and cron is a systemic weakness.  
- **Security hardening** (trust tagging, masked secrets, denylists) is actively requested.

---

## 5. Bugs & Stability — Ranked by Severity

### P0 / Critical (Production-blocking)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway memory leak → 15.5GB RSS, OOM kills | **P0** | Open | No |
| [#109867](https://github.com/openclaw/openclaw/issues/109867) Beta.2 migration creates index before column → blocks startup | **P0** | Closed | Yes ([#114820](https://github.com/openclaw/openclaw/pull/114820) related) |

### P1 / High (Crashes, Data Loss, Message Loss)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap grows to 1073MB+ at idle, cron jobs silently fail | **P1** | Open | No |
| [#103917](https://github.com/openclaw/openclaw/issues/103917) Gateway crashes on `FsSafeError: root dir not found` after subagent workspace deletion | **P1** | Closed | No |
| [#94251](https://github.com/openclaw/openclaw/issues/94251) Ollama remote streaming not consumed — `model_call:started` never progresses | **P1** | Open | No |
| [#87756](https://github.com/openclaw/openclaw/issues/87756) Regression: prompt-launched Lobster workflow hangs on nested `/tools/invoke` | **P1** | Open | No |
| [#113434](https://github.com/openclaw/openclaw/issues/113434) Codex `sessions.reset` reuses retired session ID; catalog scans exhaust Gateway RAM | **P1** | Open | No |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) Auto-update leaves gateway with stale hashed bundle imports | **P1** | Open | No |
| [#113323](https://github.com/openclaw/openclaw/issues/113323) LLM idle timeout aborts during reasoning-token streaming on local models | **P1** | Open | No |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) 6.x migration leaves channel conversation-store SQLite empty (0 bytes) | **P1** | Open | No |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) Second message fails with "reply session initialization conflicted" | **P1** | Closed | No |
| [#84569](https://github.com/openclaw/openclaw/issues/84569) WhatsApp session stalls on long model_call → incomplete turn, reply never delivered | **P1** | Closed | No |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) Codex app-server emits `turn/started` then goes silent; wedged until recovery | **P1** | Open | No |
| [#113315](https://github.com/openclaw/openclaw/issues/113315) Telegram inbound update permanently lost after offset persistence | **P1** | Closed | No |

### P2 / Medium (Degraded UX, Regressions)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram duplicate replies 2-10x post-5.20 | **P2** | Open | No |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) Tool outputs → "(see attached image)" placeholders | **P2** | Closed | No |
| [#74484](https://github.com/openclaw/openclaw/issues/74484) Gateway pairing scope deadlock | **P2** | Closed | No |
| [#94846](https://github.com/openclaw/openclaw/issues/94846) Cron isolated job false positive error on recovered tool error | **P2** | Closed | No |
| [#90414](https://github.com/openclaw/openclaw/issues/90414) `agentmemory__memory_search` returns "index metadata missing" persistently | **P2** | Open | No |
| [#99773](https://github.com/openclaw/openclaw/issues/99773) Hot reload drops include-defined models → "Unknown model" until restart | **P2** | Closed | No |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) Prompt-cache prefix churn on OpenAI: dynamic injections defeat caching | **P2** | Open | No |
| [#64664](https://github.com/openclaw/openclaw/issues/64664) Approvals lost on gateway restart → stale buttons show confusing error | **P2** | Closed | No |
| [#110065](https://github.com/openclaw/openclaw/issues/110065) `compaction.enabled` read by code but rejected by config schema | **P2** | Closed | Yes ([#113207](https://github.com/openclaw/openclaw/pull/113207) related) |
| [#109672](https://github.com/openclaw/openclaw/issues/109672) "Something went wrong" when AWS Guardrail triggered (no logging) | **P2** | Closed | No |

**Stability takeaway**: The gateway has **systemic memory management issues** (leaks, heap growth, OOM), **session state is fragile** across restarts/channels/cron, and **provider streaming/fallback paths have regressions**. Several P1s have been closed recently but fix PRs are not always visible in the top-30 PR list — suggesting fixes may be in older PRs or direct commits.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signals | Likelihood for Next Version |
|-------|----------|---------|----------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | **P2**, 115 comments, 80 👍 | Highest community demand; "similar feature set to macOS ideally" | **High** — platform parity is a visible gap |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets — prevent agent from accessing raw API keys | **P1**, 15 comments, 4 👍 | Security hardening; prevents leaks & prompt injection | **High** — security-focused, aligns with trust tagging |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | **P2**, 22 comments | Prevent memory poisoning from untrusted sources (web, skills) | **Medium-High** — security architecture work |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Fully dynamic model discovery (OpenRouter + beyond) | **P2**, 10 comments, 3 👍 | Static catalog is outdated; fast-moving provider models | **High** — mentioned in multiple PRs (#113920, #99773) |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem Sandboxing Config (`tools.fileAccess`) | **P2**, 10 comments, 4 👍 | Allow/deny paths for agent file access | **Medium** — config design exists, needs implementation |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Denylist support for exec-approvals | **P2**, 10 comments, 8 👍 | "Allow everything except X" policies | **Medium** — complements existing allowlist |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook hook sessions reuse existing session on consistent `sessionKey` | **P2**, 11 comments | Multi-turn webhook conversations broken | **Medium** — doc says it works, code doesn't |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) Expose OpenRouter usage cost to agent runtime | **P2**, 6 comments, 1 👍 | Per-message cost tracking from OpenRouter responses | **Low-Medium** — niche but requested |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) Trigger model fallback on context length exceeded | **P2**, 6 comments | Fallback only triggers on API errors, not context overflow | **Medium** — reliability gap |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) Skill Permission Manifest Standard (`skill.yaml`) | **P2**, 6 comments | Skills run with full trust; no permission declaration | **Medium

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-07-28)

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape is bifurcating into **two distinct tiers**: a high-velocity "core platform" tier (OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw) pushing 40–500+ daily issue/PR updates with architectural rewrites, and a "specialist/extension" tier (NanoBot, PicoClaw, NanoClaw, Moltis, LobsterAI) operating at 5–60 daily changes focused on channel integrations, provider support, and UX polish. **No project shipped a release today** — the ecosystem is universally in pre-release stabilization or feature-integration phases. Security hardening (credential isolation, sandbox bypasses, trust tagging), session/message durability across restarts, and cross-platform parity (Linux/Windows desktop, mobile channels) are the dominant shared concerns. Community engagement is highly concentrated: OpenClaw's Linux/Windows app request (#75) has 115 comments/80👍, while most other projects show single-digit discussion threads.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Open Issues | Open PRs | Last Release | Health Score* |
|---------|---------------------|-------------------|-------------|----------|--------------|---------------|
| **OpenClaw** | 500 | 500 | 242 | 282 | None (pre-beta) | 🟡 High activity, critical stability debt |
| **IronClaw** | 39 | 50 | ~35 | ~30 | **v1.0.0 (yesterday)** | 🟢 Post-v1.0 stabilization, high engineering rigor |
| **ZeroClaw** | 48 | 50 | ~40 | 42 | 0.8.3 (weeks ago) | 🟡 High velocity, S0 security bugs, CI flakiness |
| **Hermes Agent** | 50 | 50 | 42 | 43 | None | 🟢 Active development, desktop/gateway focus |
| **CoPaw** | 50 | 49 | ~40 | 34 | v2.0.1 (weeks ago) | 🟡 Post-v2.0 migration pain, 2.1:1 issue closure ratio |
| **NanoBot** | 1 (63 closed) | 23 (merged) | 1 | 13 | None | 🟢 Housekeeping sprint, strong contributor throughput |
| **LobsterAI** | 8 | 6 (merged) | ~10 | ~5 | 2026.6.1 (weeks ago) | 🟡 Critical regressions unpatched, ready PRs stale |
| **Moltis** | 0 | 5 (open) | 0 | 5 | None | 🟡 Active PR pipeline, zero merge throughput |
| **PicoClaw** | 5 | 4 (open) | 5 | 4 | None | 🟡 Feature refinement, 2 high bugs no fix PRs |
| **NanoClaw** | 0 | 9 (1 merged) | 0 | 8 | None | 🟢 Steady maintenance, channel/UX fixes |
| **NullClaw** | 0 | 1 (Dependabot) | 0 | 1 | None | 🔴 Low maintenance risk, 43-day stale bot PR |
| **TinyClaw** | 0 | 0 | 0 | 0 | None | ⚪ No activity |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | None | ⚪ No activity |

*Health Score: 🟢 Healthy velocity + stability | 🟡 Active but significant risks | 🔴 Maintenance concern | ⚪ Inactive

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of operation**: 500+ daily issue/PR updates dwarf all peers; indicates largest contributor base and most complex deployment surface
- **Channel breadth**: Native support for Slack, Telegram, WhatsApp, Discord, Feishu, DingTalk, LINE, Matrix, GitHub, GitLab, Jira, Lark — exceeds all others
- **Architectural ambition**: Gateway-centric multi-tenant design with cron, session persistence, provider fallback, and plugin marketplace — closest to "platform" vs "client"
- **Community pull**: #1 community ask (Linux/Windows apps, 115 comments) signals highest end-user demand

**Technical Approach Differences:**
- **Gateway-as-a-service** model: Central gateway manages sessions, channels, cron, providers — agents are ephemeral workers. Contrasts with Hermes/IronClaw/ZeroClaw's embedded-runtime or CLI-first models.
- **Plugin registry & hosted plugins**: First-class marketplace infrastructure (#112515 media pinning) — only Moltis (ACP agent) and CoPaw (skill marketplace PRs) show comparable extensibility vision.
- **Provider-agnostic model catalog**: Dynamic discovery (#10687) and fallback chains (#9986) are explicit roadmap items; most peers hardcode provider lists.

**Community Size Comparison:**
- **OpenClaw**: 242 open issues, 282 open PRs, 115-comment top issue → largest visible community
- **IronClaw**: 14-comment epic (#6284), v1.0.0 launch momentum → strong but smaller
- **CoPaw**: 14-comment Feishu bug (#5757), enterprise-channel focus → niche but engaged
- **Others**: Mostly single-digit comment threads → early-stage or narrow-audience

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Credential isolation / masked secrets** | OpenClaw (#10659), ZeroClaw (#9386 Gemini key leak), NanoBot (skill protection #4667), Moltis (#1170 operator-gated tools) | Agents use keys but cannot read them; prevent prompt injection & log leaks; per-channel/provider sanitization |
| **Session/message durability across restarts** | OpenClaw (#91588, #102020, #113315), Hermes (#72971, #69107), NanoBot (#3123, #4792), CoPaw (#5964 v2.0 mapping loss) | Survive gateway/agent restarts, channel switches, cron recovery; no duplicate/lost messages |
| **Memory trust tagging / poisoning prevention** | OpenClaw (#7707), ZeroClaw (#8983 category-scoped sharing), Moltis (#1158 vector backend), LobsterAI (skill backup #2394) | Tag sources (user/web/skill); prevent untrusted writes; sandbox memory per agent/session |
| **Cross-platform desktop parity (Linux/Windows)** | OpenClaw (#75 115 comments), Hermes (#61396 macOS, #63177 Windows), PicoClaw (#3276 systemd), CoPaw (#5259 Windows index, #6239 PATH) | Native apps, installer reliability, PATH handling, sandbox support, systemd cooperation |
| **Channel reliability & multi-tenant delivery** | OpenClaw (Slack/Telegram/WhatsApp regressions), Hermes (#6581 SSE 429, #6717/16 hallucinations), NanoBot (#3559 WebSocket vs webhook), ZeroClaw (#9393 Bluesky/Reddit auth gaps), CoPaw (#5757 Feishu, #5603 DingTalk) | Proactive messaging, delivery guarantees, sender auth, streaming stability, channel-specific UX |
| **Sandbox / tool execution security** | ZeroClaw (#8279 delegate bypass, #8973 Landlock), Hermes (#62397 skill patch guard), Moltis (#1170 /sh gating), CoPaw (#5090 Python bypass) | OS-level enforcement, delegation policy inheritance, privileged-tool allowlists, WASM/plugin isolation |
| **Provider model dynamic discovery & fallback** | OpenClaw (#10687, #9986), NanoBot (#1991 multi-profile), PicoClaw (#3271 registry, #3200 fallback chain), IronClaw (#6727 custom MCP), CoPaw (#6302 safe discovery) | OpenRouter-style catalog, context-length fallback, per-user model profiles, runtime registration |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | Hermes | ZeroClaw | CoPaw | NanoBot | Moltis | PicoClaw | LobsterAI | NanoClaw |
|-----------|----------|----------|--------|----------|-------|---------|--------|----------|-----------|----------|
| **Primary User** | Multi-tenant teams, platform builders | Developers, power users, self-hosters | Desktop-first devs, voice/Ux enthusiasts | Security-first ops, multi-agent workflows | Enterprise (Feishu/DingTalk), China-market | Personal assistants, Dream/workflow users | Protocol interop (ACP), plugin authors | Chinese-market, WeChat/DashScope users | Windows desktop automation, Artifact UX | Channel integrators, Signal/Dial users |
| **Architecture** | Gateway + ephemeral agents, plugin registry | Reborn runtime, capability contracts, hermetic testing | Embedded gateway, desktop/cli/tui, voice wake-words | Daemon + WASM plugins, PostgreSQL sessions, delegate policy | Multi-agent, browser automation, computer-use | Single-user, memory consolidation, Dream loops | ACP client→agent, stdio transport, pluggable memory | Single-binary, WebUI + Launcher, provider-centric | Electron desktop, skill marketplace, Artifact preview | Compose-based, skill containers, channel adapters |
| **Key Differentiator** | Scale, channel breadth, gateway-as-platform | Error-recoverability contract, mutation testing, v1.0 rigor | Voice wake-words, Dvorak/IME support, cross-platform desktop | Delegate policy, WASM plugin wiring, SOP control plane | Native computer-use, unified browser SDK, reranker memory | Dream consolidation, multi-channel, skills.sh marketplace | ACP agent mode, operator-gated tools, observability SDK | WeChat audio, DashScope TTS, Japanese i18n, fallback chain | Artifact share/deploy, email security, Windows installer | Dial channel, ncc CLI skill, engagement-policy self-serve |
| **Maturity Signal** | Pre-beta, hardening | **v1.0.0 shipped**, epic-driven | Active, desktop stabilization | v0.8.3, v0.9.0 tracker, S0 bugs | v2.0.1, migration debt | Housekeeping sprint, strong CI | Pre-merge batch, security-first | Feature-refinement, 2 high bugs | 2026.6.1, critical regressions | Steady, channel/UX fixes |

---

## 6. Community Momentum & Maturity

### **Tier 1: Rapid Architectural Iteration (Pre-Release Hardening)**
- **OpenClaw**: Highest raw velocity (1000+ items/24h), but P0 memory leaks and session corruption indicate **pre-beta instability**. Community largest but loudest on platform gaps.
- **IronClaw**: **v1.0.0 just shipped** — now in disciplined post-launch stabilization with epic-driven fixing (#6284, #6524). Highest engineering rigor (mutation testing, hermetic journeys, unified FailureKind).
- **ZeroClaw**: High velocity but **S0 security bugs** (delegate bypass, key leaks) and CI flakiness signal **architectural debt exceeding fix throughput**. v0.9.0 scope freeze needed.
- **Hermes**: Steady 50/50 issue/PR cadence, desktop/gateway polish, voice wake-word PR (#70509) — **feature-complete feel, polishing for release**.
- **CoPaw**: **Post-v2.0 migration crisis** — 34 issues closed vs 16 opened shows aggressive triage, but critical Windows/channel bugs lack fix PRs. Enterprise-channel focus creates distinct pressure.

### **Tier 2: Feature Integration & Stabilization**
- **NanoBot**: **Housekeeping sprint** — 63 issues closed, 23 PRs merged in 24h. Cleanest backlog (1 open issue). Strong contributor diversity. Likely near release candidate.
- **LobsterAI**: High maintenance velocity but **3 critical regressions unpatched** (#2395 installer, #2393 data corruption, #2390 Chinese paths). Two ready PRs stale since April — **release process bottleneck**.
- **Moltis**: **Coordinated feature drop** — 5 PRs spanning security, ACP agent, observability, PWA, vector memory. Zero merges = **review capacity bottleneck**.
- **PicoClaw**: Feature refinement (i18n, model registry, TTS, fallback) but **zero merges in 24h**, 2 high bugs no fix PRs — **maintenance throughput gap**.

### **Tier 3: Steady Maintenance / Niche Focus**
- **NanoClaw**: Consistent PR flow (Signal, Dial, approvals, formatter), no issue noise — **healthy specialist project**.
- **NullClaw**: **Maintenance risk** — only Dependabot PR in 43 days. No human activity observed.
- **TinyClaw / ZeptoClaw**: **Inactive**.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Gateway-centric multi-tenancy winning** | OpenClaw scale, IronClaw Reborn runtime, Hermes gateway watchdog, ZeroClaw daemon + SOP control plane | Build for **shared gateway + ephemeral agents**; single-user embedded runtimes are niche |
| **Security-by-default is table stakes** | Masked secrets (OpenClaw, ZeroClaw, NanoBot), operator-gated tools (Moltis, ZeroClaw), delegate policy (ZeroClaw), skill sandboxing (Hermes, CoPaw) | **Credential isolation, delegation policy, and OS-level sandboxing** must be architected in, not bolted on |
| **Session durability = product quality** | Every Tier 1 project has P0/P1 session/message loss bugs; CoPaw v2.0 migration broke mapping; NanoBot `/stop` loses queue | **Persistent session state with crash recovery** is a core differentiator — invest in WAL, snapshots, idempotent delivery |
| **Cross-platform desktop is a moat** | OpenClaw #75 (115 comments), Hermes macOS/Windows bugs, PicoClaw systemd, CoPaw Windows index/PATH | **Native Linux/Windows/macOS apps with installer parity** unlock enterprise adoption; Electron Tauri/Wails investment pays off |
| **Channel parity drives retention** | Feishu/DingTalk (CoPaw), WeChat (PicoClaw), LINE (NanoBot), Dial (NanoClaw), Bluesky/Reddit (ZeroClaw), Slack

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-28

## 1. Today's Overview
NanoBot exhibited **exceptionally high maintenance velocity** in the last 24 hours: **63 issues closed** and **23 PRs merged/closed**, with only 1 issue and 13 PRs remaining open. This pattern suggests a coordinated "housekeeping sprint" — likely closing stale tickets, merging accumulated fixes, and preparing infrastructure for upcoming features. No new release was cut. The project shows strong contributor engagement (multiple authors across PRs) and active multi-channel support (Discord, Feishu, WhatsApp, Matrix, LINE).

## 2. Releases
**No new releases** published today. The high volume of merged PRs (23) and closed issues (63) indicates a release candidate stabilization phase may be underway.

## 3. Project Progress — Merged/Closed PRs (Selected Highlights)
| PR | Type | Summary | Author |
|----|------|---------|--------|
| [#5124](https://github.com/HKUDS/nanobot/pull/5124) | **Regression fix (P1)** | `GitStore` returned double-hex-encoded object IDs (`.hex()` on already-hex bytes), breaking memory consolidation | ATECHPCS |
| [#5114](https://github.com/HKUDS/nanobot/pull/5114) | **Fix (P1)** | Preserve full Dream conversation history; allow `write_file` to update canonical memory files (`SOUL.md`, `USER.md`, `memory/MEMORY.md`) | chengyongru |
| [#5121](https://github.com/HKUDS/nanobot/pull/5121) | **WebUI fix (P1)** | Eliminate composer resize scroll jitter by anchoring auto-follow to actual textarea input | chengyongru |
| [#5113](https://github.com/HKUDS/nanobot/pull/5113) | **WebUI fix (P1)** | Stabilize repeated model preset rows with unique React keys | chengyongru |
| [#5080](https://github.com/HKUDS/nanobot/pull/5080) | **Brand/docs** | Migrate README & WebUI assets to SVG (light/dark covers, sidebar mark, favicon) | chengyongru |
| [#5076](https://github.com/HKUDS/nanobot/pull/5076) | **WebUI fix (P1)** | Honor custom gateway port under Vite dev proxy | chengyongru |
| [#5123](https://github.com/HKUDS/nanobot/pull/5123) | **Docs (P2)** | Improve README landing page: clear H1, star CTA, concrete use cases, contribution paths | chengyongru |
| [#1683](https://github.com/HKUDS/nanobot/pull/1683) | **Feature** | Add `LLM_LOGGING` env var for request/response debug logging (truncatable) | trashhalo |

**Open PRs of note** (13 total):  
- [#5122](https://github.com/HKUDS/nanobot/pull/5122) — Lazy document attachment reading (P1)  
- [#5112](https://github.com/HKUDS/nanobot/pull/5112) — WebUI: expose Dream runs as read-only sessions  
- [#4667](https://github.com/HKUDS/nanobot/pull/4667) — Security: protect user skills from Dream writes (P1, conflict)  
- [#5126](https://github.com/HKUDS/nanobot/pull/5126) — GitStore hex-of-hex fix (duplicate of merged #5124)  
- [#5116](https://github.com/HKUDS/nanobot/pull/5116) — WebUI: skills.sh marketplace & skill management (P1)  
- [#5120](https://github.com/HKUDS/nanobot/pull/5120) — Session consolidation: preserve media paths in `media[]` (P1)  
- [#5117](https://github.com/HKUDS/nanobot/pull/5117) — Tolerate invalid idle-compaction timestamps (P1)  
- [#5115](https://github.com/HKUDS/nanobot/pull/5115) — **New LINE Messaging API channel** (P1)  
- [#5098](https://github.com/HKUDS/nanobot/pull/5098) — Unified extension platform (P1)  
- [#5110](https://github.com/HKUDS/nanobot/pull/5110) — `nanobot status`: actionable agent readiness check  

## 4. Community Hot Topics (Most Commented Issues)
| Issue | Comments | Core Need |
|-------|----------|-----------|
| [#1991](https://github.com/HKUDS/nanobot/issues/1991) | 9 | **Multiple custom model profiles** — users want to define/switch between several `customN` configs (e.g., different providers, models, params) instead of a single `custom` slot |
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) | 8 | **Cron messages lack session context** — proactive/scheduled sends use a cron session, so users can’t later reference or correct that content in their own session |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | 7 | **Ollama local config 404 / gateway port 18790 not listening** — recurring local model integration friction |
| [#2329](https://github.com/HKUDS/nanobot/issues/2329) | 6 | **Custom provider works in CLI but breaks on Feishu channel** — channel-specific provider resolution bug |
| [#2373](https://github.com/HKUDS/nanobot/issues/2373) | 5 | **MiniMax API tool-call argument format error** — provider-specific tool schema validation |
| [#1174](https://github.com/HKUDS/nanobot/issues/1174) | 5 | **Memory consolidation hangs/fails with local models** — blocks new sessions; needs escape hatch |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) | 3 | **WebSocket channel can’t replace webhooks for proactive multi-tenant delivery** — architectural gap for agent-initiated messages |
| [#3074](https://github.com/HKUDS/nanobot/issues/3074) | 3 | **Cross-channel message push API** — message tool reports success but nothing delivered |

**Underlying theme**: Multi-provider/model flexibility, channel parity, and reliable proactive messaging in multi-tenant deployments.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Data Loss)** | [#4792](https://github.com/HKUDS/nanobot/issues/4792) — `/stop` discards pending queue messages permanently (no re-publish) | Closed | — |
| **Critical (Silent Failure)** | [#4805](https://github.com/HKUDS/nanobot/issues/4805) — `suppress(Exception)` in `prepare_call` swallows tool validation errors | Closed | — |
| **High (Regression)** | [#5124](https://github.com/HKUDS/nanobot/pull/5124) — GitStore double-hex IDs break memory consolidation | **Merged** | #5124 |
| **High (Session Integrity)** | [#5120](https://github.com/HKUDS/nanobot/pull/5120) — Consolidation drops media paths stored only in `media[]` | Open (P1) | #5120 |
| **High (Cross-channel)** | [#2549](https://github.com/HKUDS/nanobot/issues/2549) — `_sent_in_turn` overwritten in concurrent cross-channel scenarios | Closed | — |
| **Medium** | [#3166](https://github.com/HKUDS/nanobot/issues/3166) — Feishu channel doesn’t show progress notifications (`send_progress: true`) | Closed | — |
| **Medium** | [#1487](https://github.com/HKUDS/nanobot/issues/1487) — DashScope: `function.arguments` must be JSON format | Closed | — |
| **Medium** | [#1948](https://github.com/HKUDS/nanobot/issues/1948) — `exec` tool cannot write to `/tmp` during npx/npm commands | Closed | — |
| **Low** | [#2747](https://github.com/HKUDS/nanobot/issues/2747) — Hardcoded 🐈 emoji in system prompt (config request) | Closed | — |

**Note**: 63 issues closed today — many appear to be stale/duplicate cleanup. The two critical bugs (#4792, #4805) were closed without linked fix PRs; verify resolution in `main`.

## 6. Feature Requests & Roadmap Signals
| Request | Evidence | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Multiple custom model profiles** | #1991 (9 comments), #2329 (channel breakage) | High — core config gap |
| **Unified extension platform** | PR [#5098](https://github.com/HKUDS/nanobot/pull/5098) (open, P1) | High — PR actively developed |
| **LINE Messaging API channel** | PR [#5115](https://github.com/HKUDS/nanobot/pull/5115) (open, P1) | High — complete implementation |
| **skills.sh marketplace in WebUI** | PR [#5116](https://github.com/HKUDS/nanobot/pull/5116) (open, P1) | High — UI + CLI integration |
| **Dream runs as read-only WebUI sessions** | PR [#5112](https://github.com/HKUDS/nanobot/pull/5112) (open) | Medium — UX polish |
| **Actionable `nanobot status` (agent readiness)** | PR [#5110](https://github.com/HKUDS/nanobot/pull/5110) (open) | Medium — ops tooling |
| **Cron/proactive message session context** | #3123, #3559, #3074 | Medium — architectural |
| **Configurable memory/tool opt-out** | #1881 | Low — niche, but raised |
| **Ollama/LM Studio zero-config** | #2570, #1478, #1947, #1590 | Ongoing — docs/config fixes |

## 7. User Feedback Summary
**Pain Points** (from closed issues):
- **Local model onboarding**: Ollama/LM Studio/vLLM config friction (API key prompts, wrong model name prefix, gateway port silent fail) — #2570, #1478, #1947, #1590
- **Channel inconsistency**: Custom providers work in CLI but break on Feishu/Discord/WhatsApp — #2329, #1373, #1672, #3166
- **Memory consolidation**: Blocks sessions with local models; no manual override — #1174
- **Proactive messaging**: Cron/heartbeat/agent-initiated sends lack user-session context; WebSocket can’t replace webhooks — #3123, #3559, #3074
- **Tool/schema mismatches**: Provider-specific tool-call formats (MiniMax, DashScope) — #2373, #1487
- **Session/message bugs**: Cross-channel race conditions, media loss on consolidation, `/stop` queue drain — #2549, #5120, #4792

**Positive Signals**:
- Active WebUI iteration (composer, model selector, Dream replay, skills marketplace)
- Community contributes channels (LINE PR #5115)
- Debugging aids landing (`LLM_LOGGING` #1683)
- Brand/assets modernization (SVG #5080)

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1033](https://github.com/HKUDS/nanobot/issues/1033) — Inter-instance cache staleness (CronService per-channel cache) | 5 months | Multi-channel deployments see divergent cron state; architectural |
| [#1328](https://github.com/HKUDS/nanobot/issues/1328) — Agent & gateway don’t share skills | 5 months | Developer workflow: skills created in agent not visible to gateway users |
| [#2358](https://github.com/HKUDS/nanobot/issues/2358) — Workspace switch doesn’t stop old CRON jobs | 4 months | Jobs leak across workspaces with wrong system prompts |
| [#1174](https://github.com/HKUDS/nanobot/issues/1174) — Memory consolidation fails with local models | 5 months | Blocks sessions; needs fallback/skip option |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) — WebSocket vs webhook for proactive multi-tenant | 3 months | Blocks scalable agent-initiated messaging |
| [#4667](https://github.com/HKUDS/nanobot/pull/4667) — Protect user skills from Dream writes | 26 days | Security boundary; marked conflict, needs rebase/review |

---

**Overall Health**: 🟢 **Strong** — High throughput, active multi-contributor PRs, critical bugs addressed, roadmap features in flight. The 63-issue closure spike warrants a quick audit to ensure no valid bugs were swept up. Next version likely to ship: **extension platform, LINE channel, skills marketplace, multi-custom profiles, and consolidated WebUI Dream/session UX**.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-28

## 1. Today's Overview
Hermes Agent shows **high velocity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in active development across desktop, CLI, gateway, and agent core — with particular focus on session stability, cross-platform compatibility (Windows/macOS), and gateway reliability. No new release was cut today, but 7 PRs were merged/closed and 8 issues resolved, indicating steady maintenance throughput. The open issue count (42) and PR count (43) suggest a healthy but growing backlog needing triage.

## 2. Releases
**No new releases today.** The latest activity is all pre-release development.

## 3. Project Progress — Merged/Closed Today
| PR / Issue | Type | Summary |
|------------|------|---------|
| [#46369](https://github.com/NousResearch/hermes-agent/issues/46369) | Bug fix (closed) | Desktop keyboard shortcuts now respect Dvorak/non-QWERTY layouts (was using `event.code` instead of `event.key`) |
| [#72016](https://github.com/NousResearch/hermes-agent/issues/72016) | Bug fix (closed) | Gateway sessions now have activity watchdog — prevents silent agent loop stalls on Feishu/Discord/Telegram |
| [#72970](https://github.com/NousResearch/hermes-agent/issues/72970) | Perf fix (closed) | Windows startup slowdown from optional skill provenance backfill resolved |
| [#63632](https://github.com/NousResearch/hermes-agent/issues/63632) | Bug fix (closed) | `MEDIA_TAG_CLEANUP_RE` now matches `[[as_document]]` glued to path — fixes silent file delivery failure |
| [#47456](https://github.com/NousResearch/hermes-agent/issues/47456) | Bug fix (closed) | `browser_tool.py` UnicodeDecodeError on Windows with GBK/CJK locale fixed |
| [#72667](https://github.com/NousResearch/hermes-agent/issues/72667) | Perf fix (closed) | MCP stdio stale serve processes and unbounded dart mcp-server accumulation on macOS resolved |
| [#66757](https://github.com/NousResearch/hermes-agent/issues/66757) | Feature (closed, duplicate) | Desktop i18n: respect `display.language` config (duplicate of existing work) |
| [#73029](https://github.com/NousResearch/hermes-agent/pull/73029) | Test (closed invalid) | Test reopen probe |

## 4. Community Hot Topics — Most Active Discussions
| Item | Comments | Core Need |
|------|----------|-----------|
| [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) **Desktop session sidebar empty for `default` profile** | 13 | **Critical usability regression**: Named profiles work, but default profile shows zero sessions despite backend serving rows. Blocks primary workflow for many users. |
| [#61396](https://github.com/NousResearch/hermes-agent/issues/61396) **macOS terminal spawn-helper execute bit lost** | 5 | **macOS arm64 terminal broken**: `node-pty` helper stripped of execute bit during app bundle staging. Prevents terminal launch entirely. |
| [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) **`search_files` returns 0 results on Windows with absolute paths** | 5 | **Windows path conversion bug**: `_bash_safe_path` rewrites `D:\` → `/d/` but native `rg` can't resolve MSYS paths. Distinct from #61915. |
| [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) **Send button doesn't switch during Chinese IME composition** | 4 | **CJK input UX**: Voice button persists until IME commit (space), confusing users. Affects Windows desktop. |
| [#68339](https://github.com/NousResearch/hermes-agent/issues/68339) **Mixed-batch tool execution shifts early-session behavior** | 4 | **Agent behavior regression**: Since #66317, enforcement-gated models front-load tool calls, reducing clarification. Needs decision on expected behavior. |
| [#50681](https://github.com/NousResearch/hermes-agent/issues/50681) **pytest leaks fake sessions into production `state.db`** | 3 | **Test isolation failure**: Module-level `DEFAULT_DB_PATH` constant freezes at import, causing 187+ ghost sessions per test run. |

**Pattern**: Desktop stability (profile switching, terminal, IME, keyboard layout) and Windows/macOS platform-specific bugs dominate. Gateway session reliability (watchdog, message delivery) is a parallel track.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P1 — Data loss / Session corruption** | [#72905](https://github.com/NousResearch/hermes-agent/issues/72905) Screenshot in tool message permanently kills session (HTTP 422 unclassified, missing provider signatures) | Open | No |
| **P1 — Silent request hang** | [#72975](https://github.com/NousResearch/hermes-agent/issues/72975) Interrupt/abort no-ops when `force_close_tcp_sockets()` finds 0 sockets | Open | No |
| **P1 — Gateway stall undetected** | [#72016](https://github.com/NousResearch/hermes-agent/issues/72016) Gateway sessions lack activity watchdog | **Closed** | Fix in [#73031](https://github.com/NousResearch/hermes-agent/pull/73031) (re-land) |
| **P2 — Core desktop broken** | [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) Default profile sidebar empty | Open | No |
| **P2 — macOS terminal broken** | [#61396](https://github.com/NousResearch/hermes-agent/issues/61396) `spawn-helper` execute bit lost | Open | No |
| **P2 — Windows search broken** | [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) Absolute path → 0 results | Open | No |
| [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) | Duplicate of #63177 | Open | No |
| **P2 — Cross-client session conflict** | [#72971](https://github.com/NousResearch/hermes-agent/issues/72971) `prompt.submit` sends to wrong session after switch during slow response | Open | No |
| **P2 — TUI stale history** | [#69107](https://github.com/NousResearch/hermes-agent/issues/69107) `truncate_before_user_ordinal` rejects valid ordinals when another client wrote | Open | No |
| **P2 — Agent behavior shift** | [#68339](https://github.com/NousResearch/hermes-agent/issues/68339) Mixed-batch execution changes early-session tool usage | Open (needs-decision) | No |
| **P2 — One-shot drops slow MCP** | [#68137](https://github.com/NousResearch/hermes-agent/issues/68137) `-z` mode snapshots tools before MCP discovery finishes | Open | No |
| **P2 — Docker gateway drops MEDIA** | [#66086](https://github.com/NousResearch/hermes-agent/issues/66086) Container-local `/workspace` paths not delivered | Open | No |
| **P2 — Skill patch guard blocks background review** | [#62397](https://github.com/NousResearch/hermes-agent/issues/62397) Review fork can't patch skills (read-before-write mismatch) | Open | No |
| **P3 — CJK IME UX** | [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) Send button doesn't switch during composition | Open | No |
| **P3 — Feishu reply context loss** | [#26037](https://github.com/NousResearch/hermes-agent/issues/26037) Reply to image loses parent context | Open | No |
| **P3 — Test pollution** | [#50681](https://github.com/NousResearch/hermes-agent/issues/50681) pytest writes to real `state.db` | Open | No |
| **P3 — macOS 26.5.1 launchctl break** | [#42376](https://github.com/NousResearch/hermes-agent/issues/42376) Generated plist has `LimitLoadToSessionType` breaking bootstrap | Open | No |
| **P3 — File verifier noise** | [#70719](https://github.com/NousResearch/hermes-agent/issues/70719) Footer fires on failed patch calls | Open | No |
| **P3 — Cloud Honcho install fails** | [#72981](https://github.com/NousResearch/hermes-agent/issues/72981) Permission denied on `uv pip install` | Open | No |
| **P3 — Model ban from quoted text** | [#72989](https://github.com/NousResearch/hermes-agent/issues/72989) Ambiguous text interpreted as permanent model ban | Open (duplicate) | No |

**Open PRs addressing bugs today**:
- [#73035](https://github.com/NousResearch/hermes-agent/pull/73035) Desktop: let typed message answer past clarify prompt
- [#73039](https://github.com/NousResearch/hermes-agent/pull/73039) Agent: persist before emitting verify-on-stop
- [#73034](https://github.com/NousResearch/hermes-agent/pull/73034) Gateway: recognize JSON `NO_REPLY` envelope
- [#73036](https://github.com/NousResearch/hermes-agent/pull/73036) Compression: preserve history across bounded passes
- [#71787](https://github.com/NousResearch/hermes-agent/pull/71787) Agent: strip empty-content+tool_calls messages (DeepSeek compatibility)
- [#73028](https://github.com/NousResearch/hermes-agent/pull/73028) Prevent session poisoning from empty partial-stream-stub
- [#73031](https://github.com/NousResearch/hermes-agent/pull/73031) Gateway activity watchdog (re-land of #72817)
- [#71753](https://github.com/NousResearch/hermes-agent/pull/71753) Desktop: silence elapsed timers in live regions
- [#73026](https://github.com/NousResearch/hermes-agent/pull/73026) Cron: redact secrets from delivery content

## 6. Feature Requests & Roadmap Signals
| Request | Signals | Likelihood for Next Version |
|---------|---------|----------------------------|
| [#70509](https://github.com/NousResearch/hermes-agent/pull/70509) **On-device wake words with open-vocabulary phrases** (PR open, 24 commits) | Major voice feature across CLI/TUI/Desktop; multi-profile routing; opt-in | **High** — PR is large but active, aligns with "hands-free" vision |
| [#73008](https://github.com/NousResearch/hermes-agent/pull/73008) **Discord durable thread run lifecycle** | Immediate run marker + terminal status messages; explicit timeout classification | **High** — Gateway reliability theme; Discord is a key platform |
| [#72477](https://github.com/NousResearch/hermes-agent/pull/72477) **Hardened dynamic contract boundaries** (orchestration) | Pure domain package for route identity, eligibility, capacity, reservations | **Medium** — Needs-decision; architectural, may land behind flag |
| [#67325](https://github.com/NousResearch/hermes-agent/issues/67325) **Detect skill documentation drift without mutating CI** | Read-only drift check for generated skill docs | **Medium** — DX improvement; low risk |
| [#29483](https://github.com/NousResearch/hermes-agent/issues/29483) **Slack progress drafts as plan cards** | Replace repetitive text updates with structured cards | **Medium** — UX polish for gateway-heavy users |
| [#33489](https://github.com/NousResearch/hermes-agent/issues/33489) **BlueBubbles group chat filtering** | `IGNORE_GROUP_CHATS` / `ALLOWED_CHATS` config | **Low-Medium** — Niche platform, but straightforward |
| [#65735](https://github.com/NousResearch/hermes-agent/issues/65735) **Multiple OpenAI/Codex subscriptions** | Switch on rate limit; import multiple `auth.json` | **Medium** — Power-user need; auth infra exists |
| [#66757](https://github.com/NousResearch/hermes-agent/issues/66757) **Desktop i18n: respect `display.language`** | Sidebar hardcoded English; config already supports `pt` | **High** — Duplicate closed but need remains; likely in flight |

**Roadmap inference**: Voice (wake words), gateway durability (Discord watchdog, Slack cards), cross-platform desktop polish (i18n, keyboard layouts, IME), and orchestration foundations are the visible vectors.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Default profile broken** — "session list completely empty" | [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) 13 comments | All desktop users on default profile |
| **Terminal won't start on macOS arm64** — `posix_spawnp failed` | [#61396](https://github.com/NousResearch/hermes-agent/issues/61396) | macOS arm64 desktop users |
| **Windows file search broken** — absolute paths return nothing | [#631

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-28

## 1. Today's Overview
PicoClaw shows **steady maintenance activity** with 5 active issues and 4 open PRs updated in the last 24 hours, but **no merges or releases**. The project is in a **feature-refinement phase**: contributors are polishing internationalization (Japanese), updating model registries for mid-2026 provider line-ups, adding a DashScope TTS provider + WeChat audio support, and designing a configurable model fallback chain. Two stability bugs — an agent-loop hang on MCP failure and WebUI input lag with long histories — remain open without fix PRs, indicating a modest backlog of user-impacting issues.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**No PRs merged or closed today.** All four active PRs are in review/iteration:
- **#3273** – Japanese (ja) localization for WebUI (968-line translation, i18n wiring, dayjs locale) — linked to #3272.
- **#3271** – Provider model list refresh across 9 providers (OpenAI gpt-5.6-terra/luna/sol, Anthropic, etc.) — verified against official docs.
- **#3270** – New DashScope (Bailian) TTS provider + WeChat audio file sending (`pkg/audio/tts/dashscope_tts.go`).
- **#3200** – Configurable default model fallback chain (Web UI + backend persistence; created 2026-07-01, still open).

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Issue | 1 comment, stale tag | **Headless/server operators** need launcher to detect/cooperate with an externally managed (systemd) gateway and tolerate unknown channel types in config. |
| [#3272](https://github.com/sipeed/picoclaw/issues/3272) / [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Issue+PR | 1 comment each | **Japanese users** request full WebUI/Launcher localization; PR delivers complete translation — ready for review. |
| [#3268](https://github.com/sipeed/picoclaw/issues/3268) | Issue | 1 comment | **AI-agent developers** want `exec` tool `action` param to default to `"run"` (common case) instead of being required, reducing LLM call failures. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Issue | 1 comment | **Production users** hit agent-loop hang when MCP server disconnects — chat UI freezes; high severity for reliability. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue | 1 comment | **WebUI users** experience severe input lag once session history grows; hurts usability for long conversations. |

*Underlying theme:* **Operational hardening** (systemd, MCP resilience, long-history performance) and **internationalization** are the loudest signals.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP connection failure → agent loop hangs → WebUI chat stops replying. Affects all users relying on MCP tools. | No |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | WebUI chat input becomes very laggy with “a little bit long” history (v0.3.1). Likely O(n) re-render or unvirtualized list. | No |
| **Low** | [#3268](https://github.com/sipeed/picoclaw/issues/3268) | `exec` tool requires `action` param (no default), causing LLM call failures when omitted. Simple default would fix. | No |

*No bug-fix PRs opened today.*

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Japanese (ja/ja-JP) WebUI & Launcher localization | [#3272](https://github.com/sipeed/picoclaw/issues/3272) + [#3273](https://github.com/sipeed/picoclaw/pull/3273) | **High** — PR complete, only review/merge needed. |
| Provider model registry update (2026-07 models) | [#3271](https://github.com/sipeed/picoclaw/pull/3271) | **High** — Routine maintenance, verified against docs. |
| DashScope (Bailian) TTS + WeChat audio sending | [#3270](https://github.com/sipeed/picoclaw/pull/3270) | **Medium** — New provider, niche but complete implementation. |
| Configurable default model fallback chain (UI + API) | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **Medium** — Open since Jul 1, design done, needs final review. |
| Launcher: detect externally managed gateway (systemd) + tolerate unknown channel types | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | **Low–Medium** — Server-focused, needs design discussion. |
| `exec` tool `action` default to `"run"` | [#3268](https://github.com/sipeed/picoclaw/issues/3268) | **High** — Trivial fix, high impact for agent reliability. |

## 7. User Feedback Summary
- **Server/headless deployers** (Ubuntu VM + systemd) feel friction: launcher assumes gateway ownership and hard-fails on unknown config channels ([#3276](https://github.com/sipeed/picoclaw/issues/3276)).
- **Japanese-speaking users** blocked by missing UI localization despite docs being translated ([#3272](https://github.com/sipeed/picoclaw/issues/3272)).
- **Agent developers** frustrated by `exec` tool’s required `action` param causing unpredictable LLM failures ([#3268](https://github.com/sipeed/picoclaw/issues/3268)).
- **Production users** hit **chat freeze** on MCP disconnect — a reliability blocker ([#3269](https://github.com/sipeed/picoclaw/issues/3269)).
- **Power users** with long conversations suffer **input lag** in WebUI, degrading core UX ([#3281](https://github.com/sipeed/picoclaw/issues/3281)).

Overall sentiment: **appreciation for rapid model/provider updates**, but **growing pain points in stability (MCP, long history) and server ops**.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 27 days | Configurable fallback chain — UX-critical for multi-model users; stale despite complete implementation. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 8 days | MCP hang = chat UI deadlock; high severity, no fix PR, affects reliability reputation. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 7 days | WebUI input lag with history; core usability regression, no fix PR. |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | 8 days | Server/headless deployment blocker; needs architectural decision on gateway ownership. |
| [#3268](https://github.com/sipeed/picoclaw/issues/3268) | 9 days | Simple default change (`action: "run"`) would unblock agent tool use; trivial fix pending. |

---

**Health Indicator**: 🟡 **Caution** — Active feature work but **zero merges in 24h**, two high-impact bugs without fixes, and a month-old PR (#3200) awaiting review. Recommended: prioritize #3269, #3281, #3268, and #3200 merge to unblock users and clear backlog.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-28

---

## 1. Today's Overview
NanoClaw shows **steady maintenance velocity** with 9 pull requests updated in the last 24 hours (8 open, 1 merged) and zero issue activity. The merged PR (#2598) delivers a configuration fix for per-group `CLAUDE.local.md` loading. Open PRs span Signal adapter fixes, approval-card persistence, engagement-policy wiring, a new Dial channel integration, an `ncc` operational CLI skill, and formatter robustness. No new releases were cut today. The project remains in active feature/bug-fix development with a healthy PR throughput and no critical regressions reported.

---

## 2. Releases
**No new releases** published in the last 24 hours.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Type | Summary |
|----|-------|------|---------|
| **[#2598](https://github.com/nanocoai/nanoclaw/pull/2598)** | Fix: load per-group `CLAUDE.local.md` by adding `'local'` to `settingSources` | **Fix** (merged) | Adds `'local'` to the `settingSources` array so group-scoped `CLAUDE.local.md` files are discovered and loaded alongside project/user settings. Resolves a gap where per-group local overrides were ignored. |

*No other PRs were closed/merged in the last 24h.*

---

## 4. Community Hot Topics
**No GitHub Issues were updated today**, and all open PRs currently show **0 comments / 0 reactions**. The most recently updated PRs (all touched 2026-07-27) are:

| PR | Author | Focus | Signal |
|----|--------|-------|--------|
| [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | Koshkoshinsk | Preserve resolved approval card content | Core UX fix — ensures audit trail survives deployments |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | ira-at-work | Signal attachment forwarding via mounted inbox | Critical data-path bug — attachments were unreachable |
| [#3141](https://github.com/nanocoai/nanoclaw/pull/3141) | ERMOKHINNA | Compose: respect `container.json` skill selection for `CLAUDE.md` | Configuration correctness |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | Koshkoshinsk | Engagement consistency & self-serve wiring controls | Agent autonomy & policy enforcement |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | OmriBenShoham | Add **Dial** channel to picker/wizard/skills | New channel integration |

*Underlying needs*: Reliable multi-channel messaging (Signal, Dial), durable approval UX, and giving agents safe self-service over their engagement policies.

---

## 5. Bugs & Stability — Reported / Fixed Today

| Severity | PR | Description | Fix Status |
|----------|----|-------------|------------|
| **High** | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | Signal adapter wrote attachments to `/workspace/extra/signal-attachments/<id>` — a path **never mounted** into the agent container. All non-image/audio attachments (PDFs, docs, etc.) were unreadable. | **Fix PR open** — routes attachments through the mounted inbox path. |
| **Medium** | [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | Resolved approval cards lost title/request details; buttons replaced but original body not persisted, breaking terminal-card history. | **Fix PR open** — persists original body, shows muted decision/actor or timeout status. |
| **Medium** | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | Unknown slash commands categorized as `passthrough` → SDK dropped responses silently (no `<message>` blocks). | **Fix PR open** — falls through to `category: 'none'` so unrecognized commands are treated as normal chat. |
| **Low** | [#3141](https://github.com/nanocoai/nanoclaw/pull/3141) | Compose step ignored `container.json` skill selection when assembling `CLAUDE.md` fragments. | **Fix PR open** — respects declared skill list. |
| **Low** | [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) | Documentation drift: group typing, outbound reactions, quote-reply behavior not reflected in docs. | **Docs PR open** — updates Signal adapter docs to match implementation. |

*No crashes or regressions reported in Issues today.*

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Likelihood for Next Release |
|----|---------|-----------------------------|
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | **Dial channel integration** — adds Dial to channel picker, setup wizard, and `runChannelSkill` model (feature skill) | **High** — complete implementation with SKILL.md, wizard updates, and tests; only review remains. |
| [#2971](https://github.com/nanocoai/nanoclaw/pull/2971) | **`ncc` utility skill** — host operational/health CLI (standalone tool under `.claude/skills/ncc/`) | **High** — follows utility-skill guidelines, no core changes needed. |
| [#3137](https://github.com/nanoclaw/nanoclaw/pull/3137) | **Engagement-policy self-serve** — agents inspect wirings, request approved policy updates; invalid JS regexes rejected | **Medium** — core-team labelled, touches agent autonomy & security; may need design review. |
| [#3141](https://github.com/nanocoai/nanoclaw/pull/3141) | **Compose/skill-selection parity** — ensures `container.json` skills drive `CLAUDE.md` fragment assembly | **Medium** — consistency fix; likely bundled with next compose-related release. |

*Prediction*: Dial channel (`#3050`) and `ncc` CLI skill (`#2971`) are the strongest candidates for the next minor release; engagement-policy work (`#3137`) may ship behind a feature flag.

---

## 7. User Feedback Summary
- **No new Issues** filed today → no direct user pain points surfaced in the last 24h.
- PR discussions (though currently comment-free) indicate **internal/contributor focus** on:
  - **Reliability**: making Signal attachments actually readable (`#3142`), preserving approval history (`#3143`).
  - **Developer experience**: fixing silent slash-command drops (`#2346`), aligning docs with reality (`#2685`).
  - **Extensibility**: adding first-class Dial support (`#3050`), operational CLI (`#2971`).
- Overall sentiment inferred from PR scope: **stabilization + channel parity** rather than major new product asks.

---

## 8. Backlog Watch — Stale / Needs-Maintainer-Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| **[#2346](https://github.com/nanocoai/nanoclaw/pull/2346)** fix(formatter): unknown slash commands | **81 days** (opened 2026-05-08) | Silent message loss for any unrecognized `/command`; affects all channels. Simple categorization fix. | **Prioritize review/merge** — low risk, high user-visible impact. |
| **[#2685](https://github.com/nanocoai/nanoclaw/pull/2685)** docs(signal): group typing, reactions, quote-reply | **54 days** (opened 2026-06-04) | Docs lag implementation; contributors/users cannot discover current Signal capabilities. | Merge alongside `#3142` (Signal attachment fix) for a cohesive Signal update. |
| **[#2971](https://github.com/nanocoai/nanoclaw/pull/2971)** Add `ncc` utility skill | **21 days** (opened 2026-07-07) | Standalone operational CLI — no core changes, ready for skill marketplace. | Quick review; good candidate for next patch release. |
| **[#2598](https://github.com/nanocoai/nanoclaw/pull/2598)** (now merged) | **66 days** open before merge | Per-group `CLAUDE.local.md` loading — configuration gap. | **Merged today** — verify setting propagation in staging. |

*No Issues are stale (zero Issues updated). All backlog pressure is in PR review queue.*

---

**Repository**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)  
**Digest generated**: 2026-07-28 00:00 UTC  
**Next scheduled digest**: 2026-07-29

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-28

## 1. Today's Overview
NullClaw shows **minimal activity** over the past 24 hours: zero issues updated, zero merged/closed PRs, and only one open Dependabot PR (#956) updating the Alpine base image from 3.23 to 3.24. No new releases were published. The project appears to be in a **low-maintenance or stabilization phase**, with automated dependency updates being the sole recent signal of life. Community engagement (comments, reactions) remains absent on the open PR.

## 2. Releases
**None** — No new versions published in the last 24 hours.

## 3. Project Progress
**No merged or closed PRs today.** The only active PR is:
- **#956** `[dependencies, docker]` ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group  
  *Author:* dependabot[bot] | *Created:* 2026-06-15 | *Updated:* 2026-07-27  
  *Status:* Open, awaiting review/merge  
  *Link:* https://github.com/nullclaw/nullclaw/pull/956  
  *Impact:* Routine base-image update; may include security patches and package updates from Alpine 3.24. No functional changes to NullClaw code.

## 4. Community Hot Topics
**No active community discussions.** The sole open PR (#956) has **0 comments, 0 reactions**, and is authored by a bot. No human-driven issues or PRs have seen recent activity.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** Zero issues updated in the last 24h.

## 6. Feature Requests & Roadmap Signals
**No new feature requests or roadmap signals** detected in the last 24h. The project’s direction cannot be inferred from current activity.

## 7. User Feedback Summary
**No user feedback captured today.** No issues, discussions, or PR reviews from end users in the observed window.

## 8. Backlog Watch
| Item | Type | Age | Concern |
|------|------|-----|---------|
| **#956** | PR (dependabot) | Open since 2026-06-15 (43 days) | **Stale automated PR** — Alpine 3.24 update pending merge for over 6 weeks. Indicates **low maintainer bandwidth** or lack of CI gating for dependency updates. Should be reviewed/merged to keep base images current. |

---

**Health Indicator:** 🟡 **Low Activity / Maintenance Risk**  
*Only automated dependency updates appear; no human-driven development, triage, or community interaction observed in the last 24h (or weeks). The 43-day-old Dependabot PR suggests limited maintainer capacity.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-28

## 1. Today's Overview
IronClaw is in a **high-velocity post-v1.0 stabilization phase** following yesterday's landmark v1.0.0 release (a ground-up rearchitecture). The project shows **exceptional engineering throughput**: 50 PRs and 39 issues updated in 24 hours, with 19 PRs merged/closed and 4 issues resolved. Activity centers on **hardening the Reborn runtime** — unifying failure semantics, rebuilding the memory provider contract, hardening sandbox isolation, and fixing launch-blocking bugs in WebChat v2 (SSE 429s, streaming stalls, Telegram/Slack integration confusion). The team is systematically attacking the "error-recoverability endgame" epic (#6284) and building a hermetic testing platform (#6524) to ensure deterministic capability coverage.

## 2. Releases
### **ironclaw-v1.0.0** (2026-07-27)
**First stable release of the Reborn architecture** — not an increment on 0.29.x but a complete rebuild of:
- Agent runtime, storage, extension host, and web UI
- The `ironclaw` binary is the new CLI; the v1 monolith builds as `ironclaw-legacy`

**Breaking changes / Migration notes:**
- Pre-Reborn (legacy `src/` monolith) → v1 migration path tracked in **[#6725](https://github.com/nearai/ironclaw/issues/6725)** (design issue opened today)
- Extension manifests moving to Manifest V3 (**[#6481](https://github.com/nearai/ironclaw/issues/6481)**)
- Memory provider contract rebuilt around declared capabilities (**[#6724](https://github.com/nearai/ironclaw/pull/6724)**)
- Failure vocabulary collapsed to single `FailureKind` enum (**[#6684](https://github.com/nearai/ironclaw/pull/6684)** — merged)
- Docs site restructured around shipped 1.0 binary; internal engineering docs were accidentally public (**[#6692](https://github.com/nearai/ironclaw/pull/6692)** — merged)

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Impact |
|----|-------|--------|
| **[#6684](https://github.com/nearai/ironclaw/pull/6684)** | Collapse 5 failure-kind enums → single `FailureKind` (36 variants) + fate projections | **Critical**: Fixes 6 wrongful-terminal/mis-retry bugs; foundation for error-recoverability epic (#6284) |
| **[#6723](https://github.com/nearai/ironclaw/pull/6723)** | Sandbox: add `SandboxCertificateAuthority` + obligation staging primitives | **Security/Isolation**: Unwired primitives for credential firewall; enables TLS termination seam (#6740) |
| **[#6692](https://github.com/nearai/ironclaw/pull/6692)** | Restructure docs site around shipped 1.0 binary | **DX/Security**: Removed 33 internal doc paths accidentally served publicly (entire `reborn/contracts/` freeze set) |
| **[#3847](https://github.com/nearai/ironclaw/pull/3847)** | Filesystem-backed Reborn skill bundle source | **Extensibility**: `FilesystemSkillBundleSource` over `ScopedFilesystem`; discovers `SKILL.md` bundles |
| **[#6687](https://github.com/nearai/ironclaw/pull/6687)** | Dependabot: bump everything-else group (33 updates) | **Maintenance**: `async-trait`, `thiserror`, `uuid`, etc. |
| **[#6575](https://github.com/nearai/ironclaw/issues/6575)** | `systemd` service error after `ironclaw onboard` (Ubuntu) | **Install/Onboarding**: Closed — likely fixed in v1.0.0 packaging |

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Signal |
|------|----------|--------|
| **[#6284](https://github.com/nearai/ironclaw/issues/6284)** `[EPIC] error-recoverability endgame` | 14 | **Core architectural contract**: Every mid-run error must satisfy 5-clause recoverability contract (survive, model sees cause+remedy, model gets turn, no silent non-success). Driving unified `FailureKind`, adapter finish-reason fixes (#6697), and fault-isolation tests (#6738). |
| **[#6524](https://github.com/nearai/ironclaw/issues/6524)** `[EPIC] Hermetic capability & journey testing platform` | 3 | **Quality infrastructure**: Need deterministic, meaningful coverage for every capability/journey. Workstreams: fault-state isolation (#6738), reversed-order journey replay (#6728), doubled-repeat (#6525). |
| **[#6581](https://github.com/nearai/ironclaw/issues/6581)** `429 Too Many Requests on agent-stg (WebChat v2 SSE)` | 3 | **Launch-blocker**: SSE channel returns 429 under normal multi-thread usage → header badge shows "Disconnected"/stuck "Reconnecting" even after reload. |
| **[#6726](https://github.com/nearai/ironclaw/issues/6726)** `register_generic_channel_outbound_targets` is a no-op mutant survivor | 0 (new) | **Test gaps**: Sole surviving mutant from 52-mutant audit (#6681); function can be no-op with all tests green → missing coverage for outbound delivery registration. |
| **[#6737](https://github.com/nearai/ironclaw/pull/6737)** Restore extension behaviors silently reverted by merge conflict resolution | 0 (new) | **Regression**: PR #6616 merge took branch side, silently reverting #6520 behavior. Generalized scan found exactly one such reversion. |

**Underlying needs**: The project is **obsessively closing the gap between "works in tests" and "works in production"** — unified failure semantics, hermetic test isolation, mutation-testing coverage, and preventing silent merge regressions.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0 - Launch Blocker** | **[#6581](https://github.com/nearai/ironclaw/issues/6581)** WebChat v2 SSE 429 under normal load | SSE channel (`GET /api/webchat/v2/threads/{id}/events`) returns 429 → "Disconnected"/stuck reconnecting persists after reload | No |
| **P0 - Data Integrity** | **[#6741](https://github.com/nearai/ironclaw/issues/6741)** Extension OAuth fails for Gmail/Calendar after sign-in | OAuth flow completes but connection fails with error instead of linking tool | No |
| **P1 - Core Function** | **[#6720](https://github.com/nearai/ironclaw/issues/6720)** Task runs indefinitely; stop button fails | Smoke test ran 15+ min; UI shows "Couldn't stop this run" | No |
| **P1 - UX/State** | **[#6719](https://github.com/nearai/ironclaw/issues/6719)** Conversation history fails to load after backend errors | "Failed to load conversation history" after 503/CSP violations; 401s, manifest fetch failures | No |
| **P1 - Streaming** | **[#6718](https://github.com/nearai/ironclaw/issues/6718)** Streaming only resumes after page switch | Tool updates/agent reasoning stop during "Reconnecting"; requires page switch to resume | No |
| **P2 - Agent Hallucination** | **[#6717](https://github.com/nearai/ironclaw/issues/6717)** Agent gives wrong Telegram pairing instructions post-success | After "Paired" confirmation, agent still tells user to look for pairing panel | No |
| **P2 - Agent Hallucination** | **[#6716](https://github.com/nearai/ironclaw/issues/6716)** Model claims Slack unavailable despite integration existing | Hallucinates limitations; provides misleading config info | No |
| **P2 - Test Coverage** | **[#6726](https://github.com/nearai/ironclaw/issues/6726)** `register_generic_channel_outbound_targets` no-op mutant survivor | Function replaceable with no-op; all test tiers pass → missing outbound delivery test coverage | No |

## 6. Feature Requests & Roadmap Signals
| Feature Request | Issue | Likelihood for Next Version |
|-----------------|-------|----------------------------|
| **Custom/arbitrary MCP server support** | **[#6727](https://github.com/nearai/ironclaw/issues/6727)** | **High** — Only 2 MCP servers hardcoded; no CLI/WebUI/extension path for user-supplied MCP. Explicit v1 launch checklist item. |
| **IronHub integration (tool/skill marketplace)** | **[#6731](https://github.com/nearai/ironclaw/issues/6731)** | **High** — Turns fixed build-time tool list into runtime-discoverable, signed marketplace. Strategic priority. |
| **Agent access to own documentation** | **[#6734](https://github.com/nearai/ironclaw/issues/6734)** | **High** — Agent hallucinates tool/channel config (#6716, #6717); giving it `docs/reborn/`, `docs/extensions/` as context solves this. |
| **Unified `/model` & `/status` commands across Telegram/Slack/WebUI** | **[#6733](https://github.com/nearai/ironclaw/issues/6733)** | **Medium** — Manifest-declared commands; channel extensions opt in. Parent: #3286. |
| **In-app feedback/bug report widget** | **[#6743](https://github.com/nearai/ironclaw/issues/6743)** | **Medium** — Users currently leave app for Slack/GitHub; persistent feedback widget reduces friction. |
| **User profile details view in WebUI** | **[#6742](https://github.com/nearai/ironclaw/issues/6742)** | **Medium** — Profile menu shows non-functional "IronClaw" item; no name/email/account ID visible. |
| **Telegram local/agent.near.ai setup instructions** | **[#6522](https://github.com/nearai/ironclaw/issues/6522)** | **Medium** — Google-style setup flow needed; v1 launch checklist item. |
| **Skill Self-Creation (hot-swappable, manifest-based)** | **[#6641](https://github.com/nearai/ironclaw/issues/6641)** | **Medium** — Design doc grounded in 86-task benchmark; follows memory architecture pattern (#6345). |
| **Pluggable Memory Providers (mem0, native, custom)** | **[#6482](https://github.com/nearai/ironclaw/issues/6482)** | **In Progress** — **[#6724](https://github.com/nearai/ironclaw/pull/6724)** rebuilds contract around declared capabilities (8 commits, test-first). |
| **Shared Messaging Capability Layer** | **[#6484](https://github.com/nearai/ironclaw/issues/6484)** | **Medium** — Provider-neutral ops (send/edit/delete/react/reply/thread); extensions declare support. |

## 7. User Feedback Summary (Real Pain Points)
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **WebChat v2 SSE unreliable** | #6581: 429s under normal use → persistent "Disconnected" badge; #6718: streaming stalls until page switch; #6719: history fails after errors | **High** — Core web UX broken; users perceive app as unstable |
| **Agent hallucinates integration state** | #6717: Telegram paired but agent says "connect Telegram"; #6716: Slack exists but agent says "unavailable" | **High** — Erodes trust; users can't rely on agent guidance |
| **OAuth extensions fail silently** | #6741: Gmail/Calendar OAuth completes but connection fails | **High** — Key productivity tools (email/calendar) unusable |
| **No in-app feedback channel** | #6743: Users must leave app for Slack/GitHub | **Medium** — Feedback loss; friction for bug reports |
| **No account visibility in WebUI** | #6742: Profile menu shows dummy item; can't tell personal vs org account | **Medium** — Multi-account confusion |
| **Task cancellation broken** | #6720: 15+ min run; stop button says "Couldn't stop" | **Medium** — Loss of control; resource waste |
| **Telegram setup undocumented** | #6522: No instructions for local/agent.near.ai setup | **Medium** — Onboarding barrier for key channel |

**Satisfaction signals**: v1.0.0 release shows architectural confidence; systematic epic-driven fixing (#6284, #6524) indicates long-term quality commitment. **Dissatisfaction**: Launch-blocking WebChat bugs + agent hallucinations create "works in demo, fails in use" perception.

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#6284](https://github.com/nearai/ironclaw/issues/6284)** `[EPIC] error-recoverability endgame` | 9 days (14 comments) | **Architectural spine** — 5-clause contract drives unified `FailureKind` (#6684 merged), adapter fixes (#6697), fault isolation (#6738). Must land before v1.1. |
| **[#6524](https://github.com/nearai/ironclaw/issues/6524)** `[EPIC] Hermetic

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-28

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 6 PRs merged/closed and 8 active issues updated in the past 24 hours, though zero new releases. The merged PRs address critical stability fixes (Windows install overwrite-blocked installer, email attachment path traversal, agent token-budget exhaustion) and deliver new user-facing capabilities (Artifact preview toolbar share/deploy actions). Meanwhile, the issue queue surfaces **three high-severity regressions** — installer backup failure, silent `\f` → form-feed corruption in the accelerator, and `exec` tool hard-coded to legacy PowerShell with Chinese-path encoding breakage — indicating a need for rapid patch releases. Community engagement remains moderate (single-digit comments/reactions), but several stale issues/PRs from April persist without resolution.

## 2. Releases
**No new releases published today.** The last published version remains **2026.6.1** (per issue #2390). Given the severity of bugs reported today (#2395, #2393, #2390), a hotfix release (e.g., 2026.6.2) is likely imminent.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2394](https://github.com/netease-youdao/LobsterAI/pull/2394) | `docs`, `platform: windows` | Fixes Windows installer “user skills could not be backed up” overwrite block | Unblocks clean updates for affected users (directly addresses #2395) |
| [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | `docs`, `skills` | Sanitizes email attachment filenames, enforces download directory boundaries, adds cross-platform tests, bumps email skill version | **Security hardening** — prevents path-traversal via malicious attachments |
| [#2388](https://github.com/netease-youdao/LobsterAI/pull/2388) | `renderer`, `docs`, `artifacts` | Adds share/deploy buttons to Artifact preview toolbar & browser toolbar; extracts strategy logic, adds telemetry, design doc | **New UX capability** — one-click sharing/deployment of HTML previews & local services |
| [#2386](https://github.com/netease-youdao/LobsterAI/pull/2386) | `renderer`, `build`, `docs`, `main`, `openclaw` | Terminates no-progress tool loops before token budget exhaustion | **Stability** — prevents runaway agent loops that consume context window |
| [#2387](https://github.com/netease-youdao/LobsterAI/pull/2387) | `renderer`, `docs`, `main`, `artifacts` | “Feat/2026.7.20 sites” — sparse description; likely site-config updates | Incremental content/config refresh |
| [#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) | `cowork` | Narrows `input-too-long` error classification to avoid false “context limit” UI | **UX fix** — reduces misleading error banners for short inputs |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [Issue #2395](https://github.com/netease-youdao/LobsterAI/issues/2395) — **Installer backup failure** | 1 comment, created & updated today | Users cannot update; installer aborts with “user skills could not be backed up”. **Blocker for all Windows updaters.** |
| [Issue #2393](https://github.com/netease-youdao/LobsterAI/issues/2393) — **`\f` → form-feed silent corruption** | 0 comments, created yesterday, severity 🔴 | **Data integrity**: any literal `\firecrawl`, `\foo`, `\filename` written via write tool gets mangled. Affects scripts, paths, JSON, docs. |
| [Issue #2390](https://github.com/netease-youdao/LobsterAI/issues/2390) — **`exec` tool hard-coded to PowerShell 5.1 + Chinese path encoding** | 0 comments, created yesterday | Windows users with non-ASCII usernames cannot run terminal commands reliably; missing `pwsh.exe` (PS 7) support. |
| [PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241) — **Settings dirty-check confirmation** (linked to stale #1237) | 0 comments, stale since April | Prevents silent loss of API keys/config when closing Settings without Save. **High user-value, low complexity** — ready to merge. |
| [PR #1239](https://github.com/netease-youdao/LobsterAI/pull/1239) — **Task-completion taskbar/Dock flash** | 0 comments, stale since April | Cross-platform attention signal when background agent finishes. **Polish feature** with broad appeal. |

## 5. Bugs & Stability — Ranked by Severity
| Rank | Issue | Severity | Status | Fix PR? |
|------|-------|----------|--------|---------|
| 1 | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) Installer backup failure | 🔴 **Critical** — blocks all Windows updates | Open | **Yes** — [#2394](https://github.com/netease-youdao/LobsterAI/pull/2394) merged today |
| 2 | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) `\f` → form-feed silent data corruption | 🔴 **Critical** — data integrity, 100% repro | Open | No PR yet |
| 3 | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) `exec` hard-coded PS 5.1 + Chinese path encoding | 🟠 **High** — breaks terminal for non-ASCII users | Open | No PR yet |
| 4 | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) Model-switching broken after rate-limit | 🟠 **High** — app-wide paralysis until manual JSON restore | Stale (Apr) | No PR |
| 5 | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) Task timeout on 24h runs | 🟡 **Medium** — unclear if task stops or continues | Stale (May) | No PR |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Scheduled-task agent/skill selection** | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | Medium — clear gap in automation UX |
| **Skill rename capability** | [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | High — simple CRUD enhancement, high user demand |
| **Settings dirty-check confirmation** | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) / [PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | **Very High** — PR ready, stale since April |
| **Task-completion taskbar/Dock flash** | [PR #1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | Medium — PR ready, polish-only |
| **Electron 40 → 43 upgrade** | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Dependabot) | Low — stale, major version bump needs testing |

## 7. User Feedback Summary
- **Pain points**: Windows update blocker (#2395), silent data corruption (#2393), terminal unusable for Chinese usernames (#2390), rate-limit cascade paralyzes entire app (#1240), 24h tasks timing out ambiguously (#2062).
- **Use cases**: 24/7 background agents, scheduled automation with specific skills, writing scripts/paths/JSON via `write` tool, running shell commands in non-ASCII environments.
- **Sentiment**: Frustration on blockers (installer, data corruption); constructive on missing features (skill rename, scheduled-task agent pick). No positive feedback visible in last 24h.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #1237](https://github.com/netease-youdao/LobsterAI/issues/1237) / [PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241) — Settings dirty-check | 4 months | **Ready-to-merge UX fix** preventing credential loss; zero downside. |
| [PR #1239](https://github.com/netease-youdao/LobsterAI/pull/1239) — Task-completion attention flash | 4 months | **Cross-platform polish** implemented & tested; improves perceived responsiveness. |
| [Issue #1240](https://github.com/netease-youdao/LobsterAI/issues/1240) — Rate-limit cascade paralysis | 4 months | **Architectural flaw**: one provider’s limit disables all models; needs isolation/retry logic. |
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 40 → 43 | 4 months | **Dependency debt**; unblocks future Electron/security updates but requires regression suite. |
| [Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062) — 24h task timeout ambiguity | 2 months | **Clarify semantics**: does “timed out” mean killed or still running? Add explicit state reporting. |

---

**Bottom line**: Today’s merges show strong **stability & security focus** (installer, email, token budget) plus a **user-facing Artifact enhancement**. However, three **critical regressions** reported yesterday (#2395, #2393, #2390) remain unpatched — a hotfix release should be prioritized. Meanwhile, two **ready-to-merge quality-of-life PRs** (#1241, #1239) have lingered since April; merging them would deliver immediate user value with minimal risk.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-28

## 1. Today's Overview
Moltis shows **active development momentum with zero production releases or merged changes** in the last 24 hours. Five pull requests remain open and under review, spanning memory backends, ACP agent exposure, security hardening, observability infrastructure, and PWA notification reliability. No issues were updated, no PRs merged, and no new versions published — indicating a **pre-merge review phase** rather than delivery cadence. The project appears healthy in terms of contribution velocity but is currently in a **integration bottleneck**.

## 2. Releases
**No new releases** published today or in the recent window covered by the data.

## 3. Project Progress
**No PRs merged or closed today.** All five tracked PRs remain open:
- **#1158** — Experimental `zvec` vector database memory backend (feature-gated, `redb` + `llama-cpp` embedding server) — *updated today*
- **#1169** — Exposes Moltis as an **ACP agent over stdio** (new `crates/acp`), enabling Zed, `buzz-acp`, custom runners to use Moltis as an agent
- **#1170** — Security fix: gates `/sh` and privileged tools behind a **per-account operators list**, preventing arbitrary host command execution in group chats
- **#1174** — Adds **instrumentation & feedback collection** with pluggable `ObservationSink` backends and export profiles
- **#1173** — Fixes PWA push notifications: adds `renotify`, session tagging, and non-disruptive behavior

> **Signal**: The PR batch suggests a **coordinated feature drop** — memory extensibility, protocol interoperability, security hardening, observability, and UX polish — likely targeting a single upcoming release.

## 4. Community Hot Topics
| PR | Activity | Underlying Need |
|----|----------|-----------------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | Updated today (11 days old) | **Alternative local-first vector memory** without heavy deps; users running `llama-cpp` embedding servers want native backend |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | 2 days old | **ACP agent role** — Moltis was client-only; now demanded as agent for Zed, custom runners, multi-agent orchestration |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 2 days old | **Critical security gap**: `/sh` executable by any channel member — blocker for Discord/group deployments |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | 1 day old | **Production observability**: need structured telemetry + user feedback loops for agent behavior tuning |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | 2 days old | **PWA reliability**: silent notification replacement breaks user trust in mobile/desktop alerts |

**Common thread**: All five PRs address **production-readiness gaps** — security, interoperability, observability, UX — rather than core chat/agent logic.

## 5. Bugs & Stability
**No new bug issues filed today.** However, two open PRs fix known defects:
- **High severity**: [#1170](https://github.com/moltis-org/moltis/pull/1170) — Arbitrary command execution via `/sh` in group chats (privilege escalation). **Fix PR exists, unmerged.**
- **Medium severity**: [#1173](https://github.com/moltis-org/moltis/pull/1173) — PWA notifications silently overwrite each other (`renotify` missing). **Fix PR exists, unmerged.**

> **Risk**: Both fixes are security/UX critical but stalled in review. No regression reports today.

## 6. Feature Requests & Roadmap Signals
| Signal | PR | Likelihood for Next Release |
|--------|-----|-----------------------------|
| **ACP agent mode** (stdlib stdio transport) | [#1169](https://github.com/moltis-org/moltis/pull/1169) | ★★★★★ — completes protocol symmetry |
| **Pluggable vector memory (zvec/redb)** | [#1158](https://github.com/moltis-org/moltis/pull/1158) | ★★★★☆ — feature-gated, experimental but functional |
| **Operator-gated privileged tools** | [#1170](https://github.com/moltis-org/moltis/pull/1170) | ★★★★★ — security blocker for multi-user deployments |
| **Instrumentation/feedback SDK** | [#1174](https://github.com/moltis-org/moltis/pull/1174) | ★★★★☆ — foundational for product analytics |
| **Reliable PWA notifications** | [#1173](https://github.com/moltis-org/moltis/pull/1173) | ★★★★★ — user-visible UX fix |

**Prediction**: Next version will likely bundle **#1169, #1170, #1173** (security + interop + UX) + **#1174** (observability). **#1158** may stay feature-gated/optional.

## 7. User Feedback Summary
**No direct user issues/comments in last 24h.** Inferred pain points from PR context:
- **Discord/group admins** cannot safely deploy Moltis due to unrestricted `/sh` (#1170)
- **Zed / custom runner users** want Moltis as agent, not just client (#1169)
- **Mobile/desktop PWA users** miss messages due to silent notification replacement (#1173)
- **Developers integrating Moltis** lack telemetry hooks for debugging agent behavior (#1174)
- **Self-hosters with local LLMs** want lightweight vector memory without Qdrant/Weaviate (#1158)

> **Sentiment**: Silent demand for **production hardening** — not new features.

## 8. Backlog Watch
| Item | Status | Age | Concern |
|------|--------|-----|---------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | Open, updated today | 11 days | Experimental backend; may need benchmarks, migration docs, or feature-gate review |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | Open | 2 days | New crate (`crates/acp`) — API stability, testing, docs needed |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | Open | 2 days | **Security fix** — should be fast-tracked; no reason to delay |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Open | 1 day | Cross-cutting observability — review surface area large |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | Open | 2 days | PWA fix — low risk, high user impact; quick win |

**Maintainer action needed**: Prioritize **#1170 (security)** and **#1173 (UX)** for immediate merge. Batch **#1169, #1174** for next minor. Evaluate **#1158** for experimental inclusion or separate track.

---

**Health Indicator**: 🟡 **Active but bottlenecked** — strong contribution pipeline, zero throughput. Review capacity is the limiting factor.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-28

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high maintenance velocity** with 99 items (50 issues + 49 PRs) updated in the last 24 hours. The project is in a **post-v2.0.0 stabilization phase** — 34 issues were closed today versus only 16 newly opened/active, indicating aggressive triage of migration fallout. Open PR count (34) exceeds merged/closed (15), suggesting a backlog of feature work queued for review. No new release was cut today, but v2.0.0.post3 and v2.0.1 are the current baseline versions users are reporting against.

---

## 2. Releases

**No new releases in the last 24 hours.**  
Current versions in user reports: `v2.0.0.post3`, `v2.0.1`, `v1.1.12.post2`. The v2.0.0 upgrade introduced breaking schema changes (chat/history mapping loss — [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)) and Windows PATH regressions ([#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | docs(sandbox): clarify native Windows sandbox support | Docs/Windows | **Closed** |
| [#6508](https://github.com/agentscope-ai/QwenPaw/pull/6508) | fix(agents): inherit session approval_level in spawn_subagent | Agents/Security | **Closed** |
| [#6489](https://github.com/agentscope-ai/QwenPaw/pull/6489) | test(drivers): add Driver unit tests + enable fail_under=50 coverage gate | Testing/CI | Open (merged today?) |

*Only 15 PRs merged/closed total; the above are the most visible. Most merged PRs appear to be documentation fixes and small bug corrections rather than major features.*

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | Type | Core Pain Point |
|------|----------|------|-----------------|
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | 14 | Bug | **Feishu/Lark channel stops responding after first message** — bot shows "received" but no reply; affects both Docker and AgentScope Platform |
| [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | 6 | Perf | **Console streaming causes severe browser lag** — Chrome freezes during long streams; DeepSeek web doesn't exhibit this |
| [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) | 5 | Bug | **Infinite image compression loop** — image re-compressed repeatedly, causing hallucination |
| [#5090](https://github.com/agentscope-ai/QwenPaw/issues/5090) | 5 | Security | **Tool guard bypass** — `rm` blocked but agent deletes via Python script workaround |
| [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | 5 | Bug | **Windows vector index not persisted** — memory search fails unless "rebuild on startup" stays enabled |
| [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | 5 | Regression | **v2.0.0 chat/history mapping lost** — sessions in `history.db` but `chats` ↔ `conversation_history` link broken |

**Underlying needs:**  
- **Channel reliability** (Feishu, DingTalk) is a top production blocker for enterprise users  
- **Streaming UX** must match commercial alternatives (DeepSeek, ChatGPT)  
- **Security boundaries** are being probed and bypassed — guardrails need enforcement at OS level, not just tool schema  
- **Windows parity** remains a gap (index persistence, PATH handling, sandbox docs)

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | v2.0.0 upgrade breaks chat↔history mapping; 500 errors opening old sessions | No |
| **Critical** | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH concatenation drops `;` — child processes lose npm globals | No |
| **High** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | Feishu channel silent failure after 1st message (Docker + Platform) | No |
| **High** | [#5090](https://github.com/agentscope-ai/QwenPaw/issues/5090) | Security guard bypass via Python `os.remove()` / `shutil.rmtree()` | No |
| **High** | [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) | Infinite image compression loop → hallucination | No |
| **Medium** | [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | Windows vector index not persisted to disk | No |
| **Medium** | [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773) | Memory search breaks OpenCode provider (missing `reasoning_content`) | No |
| **Medium** | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | OpenAI `max_output_tokens` ignored | No |
| **Medium** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge+Wayland: single tab high CPU on large sessions (WebSocket/render) | No |
| **Low** | [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) | Windows browser processes/temp dirs leak after session | No |

> **Note:** None of the top 10 bugs have linked fix PRs in the current dataset. Several are marked `CLOSED` but likely via workarounds or "won't fix" — verify resolution before assuming fixed.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength | Likely Next Version? |
|---------|----------|-----------------|----------------------|
| **Reranker support for ReMe memory search** | [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) (PR open) | High — PR under review, backend impl done | ✅ Likely v2.1 |
| **Native desktop GUI automation (Windows/macOS)** | [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) (PR open) | High — `computer_use` tool, accessibility-first | ✅ Likely v2.1 |
| **Chrome extension plugin (CDP pairing, native messaging)** | [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) (PR open) | High — depends on unified browser [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | ✅ Likely v2.1 |
| **Unified browser SDK (any backend)** | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) (PR open) | High — architectural refactor | ✅ Likely v2.1 |
| **Workspace checkpoint management (shadow Git)** | [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) (PR open) | Medium — recoverable history | ⚠️ Maybe v2.1 |
| **Third-party agent integrations (Codex, Qoder, MCP)** | [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) (PR open) | Medium — extensible architecture | ⚠️ Maybe v2.1 |
| **Visual context compression (PawFocus)** | [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) (PR open) | Medium — long-history optimization | ⚠️ Maybe v2.1 |
| **Safe model discovery infrastructure** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) (PR open) | Medium — provider model auto-discovery | ⚠️ Maybe v2.1 |
| **DingTalk card streaming speed fix** | [#5603](https://github.com/agentscope-ai/QwenPaw/issues/5603) | Medium — UX parity with Console | ❌ Unlikely soon (no PR) |
| **Custom model protocol support (non-OpenAI endpoints)** | [#5609](https://github.com/agentscope-ai/QwenPaw/issues/5609) | Low — niche but requested | ❌ Unlikely soon |

**Roadmap prediction:** v2.1 will likely ship **native computer use**, **unified browser**, **reranker memory**, and **checkpointing** — all have active PRs. Channel performance (DingTalk/Feishu) and Windows bugs remain unaddressed in PR pipeline.

---

## 7. User Feedback Summary

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **v2.0.0 migration pain** | "Upgraded to 2.0.0, chat list broken, 500 errors, history data intact but mapping lost" ([#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)) | 😡 Frustrated — data safe but UX broken |
| **Feishu/DingTalk unreliability** | "First message works, then silence"; "Card streaming too slow, typing animation" ([#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757), [#5603](https://github.com/agentscope-ai/QwenPaw/issues/5603)) | 😡 Blocking for enterprise deployment |
| **Windows second-class** | "Vector index not persisted"; "PATH semicolon dropped"; "Browser process leaks" ([#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259), [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239), [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844)) | 😕 Disappointed — core OS gaps |
| **Console streaming UX** | "Browser freezes during stream; DeepSeek doesn't" ([#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725)) | 😕 Performance regression vs alternatives |
| **Security guardrails porous** | "Blocked `rm` but agent used Python to delete files" ([#5090](https://github.com/agentscope-ai/QwenPaw/issues/5090)) | 😨 Concerned — trust in sandbox |
| **Memory/index confusion** | "Why so many history entries in task mode?" ([#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457)) | 🤔 Confused — observability gap |

**Overall:** Power users testing v2.0.0 are hitting **migration, Windows, and channel bugs** hard. Enterprise channel users (Feishu/DingTalk) are effectively blocked. Security-conscious users see guardrails as theater. Positive signals: active PR pipeline for advanced features (computer use, reranker, checkpoints).

---

## 8. Backlog Watch (Stale/Important Items Needing Maintainer Attention)

| Item | Age | Why It Matters | Current State |
|------|-----|----------------|---------------|
| [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) | 56 days | Infinite image compression → hallucination; core media pipeline bug | Closed (verify fix) |
| [#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872) | 57 days | New session loads raw context → infinite context inflation | Closed (verify fix) |
| [#4921](https://github.com/agentscope-ai/QwenPaw/issues/4921) | 56 days | Images loaded as Base64 into context window → token explosion | Closed (verify fix) |
| [#5016](https://github.com/agentscope-ai/QwenPaw/issues/5016) | 50 days | Multi-agent chat unstable in Web Console | Closed (verify fix) |
| [#5541](https://github.com/agentscope-ai/QwenPaw/issues/5541) | 33 days | Ollama cloud models inaccessible despite config | Closed (verify fix) |
| [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | 31 days | Custom ascend-vllm models fail in chat but pass config test | Closed (verify fix) |
| [#5658](https://github.com/agentscope-ai/QwenPaw/issues/5658) | 28 days | 9router / QwenPaw model forwarding fails (400 errors) | Closed (verify fix) |
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | 15 days | **PR: Fix session ID preservation during history migration** — directly addresses v2.0.0 mapping loss | **Open, needs review** |
| [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) | 13 days | **PR: Background tool call offload refactor** — fixes cancel/hint bugs | **Open, needs review** |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 8 days | **PR: Unified browser SDK** — blocker for Chrome extension [#6157] | **Open, needs review** |

> **Action items for maintainers:**  
> 1. **Review & merge #6068** — fixes the v2.0.0 migration data loss ([#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964))  
> 2. **Triage Windows PATH bug #6239** — silent npm breakage is insidious  
> 3. **Assign Feishu/DingTalk channel owners** — 3+ critical issues, 0 PRs  
> 4. **Audit "CLOSED" bugs** — several 50+ day items marked closed without linked PRs; may be "works on my machine" closures

---

## Project Health Scorecard

| Dimension | Score | Trend |
|-----------|-------|-------|
| **Release Cadence** | ⚠️ Low | No release in 24h; v2.0.0.post3 is weeks old |
| **Issue Throughput** | ✅ High | 34 closed / 16 opened = 2.1:1 closure ratio |
| **PR Throughput** | ⚠️ Moderate | 34 open / 15 merged = growing review backlog |
| **Critical Bug Backlog** | 🔴 High | 10+ unfixed critical/high bugs, 0 fix PRs |
| **Feature Velocity** | ✅ High | 8+ major feature PRs in flight |
| **Windows Parity** | 🔴 Low | 3+ unfixed Windows-specific regressions |
| **Channel Reliability** | 🔴 Low | Feish

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-28

## 1. Today's Overview
ZeroClaw shows **high velocity with concentrated risk**: 48 issues and 50 PRs updated in 24 hours, but zero releases. The backlog is dominated by **P1 security bugs** (credential leaks, sandbox bypasses, auth gaps across 5+ channels) and **CI flakiness** poisoning test reliability. Eight PRs merged/closed today—mostly targeted fixes for runtime correctness, config migration, and logging—while 42 PRs remain open, many stacked on security-critical refactors. Project health is **active but fragile**: maintainers are triaging deep architectural debt (delegate policy, WASM plugin wiring, session backends) while new regressions surface faster than fixes land.

## 2. Releases
**No new releases** in the last 24 hours. Current version remains `0.8.3` (commit `05780f4`). The v0.9.0 tracker (#7432) indicates a breaking-change milestone for auth, security, gateway, and A2A boundaries is still in coordination.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9388](https://github.com/zeroclaw-labs/zeroclaw/pull/9388) | Retire `CONTRIBUTORS.md`, ground maintainer roles in FND-003 | Governance/Docs | Removes stale file; aligns with foundation charter |
| [#9429](https://github.com/zeroclaw-labs/zeroclaw/pull/9429) | Fix flaky `zeroclaw-channels` tests using fixed wall-clock timeouts | CI/Tests | Addresses `Repeat parallel runtime tests` flakes on slow runners |
| [#9238](https://github.com/zeroclaw-labs/zeroclaw/pull/9238) | Fix `config_save_isolation` skipping all `tests/` files on Windows | CI/Tests | Restores config isolation gate for Windows integration tests |
| [#7808](https://github.com/zeroclaw-labs/zeroclaw/pull/7808) | CLI secret prompts give no feedback after paste | Config/Onboarding | UX fix for hidden password input during `config set` |
| [#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251) | PostgreSQL as first supported session backend | Infra/Runtime | Reduces 5-backend matrix to single proven path (foundation + PG) |

**Net progress**: CI stability improved (3 test-flake fixes), governance cleaned up, session backend scope narrowed to PostgreSQL. No user-facing features shipped.

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | Core Need |
|------|----------|-----------|
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) `cargo test -p zeroclaw-runtime --lib` fails 19/20 runs; flaky assertion poisons global mutex | 5 | **CI reliability**: test suite poisoning blocks all downstream validation |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) Landlock blocks shell access to `/dev/null` on Fedora | 4 | **Sandbox compatibility**: shell tool unusable under Landlock on Fedora |
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) Gemini API key in request URL leaks via `sanitize_api_error` into chat | 4 | **Credential leak**: query-param keys survive sanitization, posted to user |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) Bluesky & Reddit lack sender authorization; no central gate covers them | 3 | **Auth gap**: two channels bypass allowlist & pairing handshake entirely |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) `delegate` tool bypasses parent's tool allowlist — sub-agent invokes excluded tools | 3 | **Policy escalation**: delegation ignores parent tool filters (S0 severity) |

**Pattern**: Security audits (by `belumume`, `wangmiao0668000666`) are surfacing **systemic auth/sandbox gaps** across channels and delegation. Contributors expect fixes before v0.9.0.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **S0** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) Delegate bypasses parent tool allowlist | `tool/delegate`, security | No |
| **S1** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) Incomplete terminal responses reported as successful | Runtime/daemon | [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424), [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) (stacked) |
| **S1** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) Running SOP jobs have no operator cancellation path | Web dashboard/SOP | No |
| **S2** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) Landlock blocks `/dev/null` on Fedora | Runtime/daemon | No |
| **S2** | [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) Gemini API key leaks via `sanitize_api_error` | Provider/Gemini | No |
| **S2** | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) Config metadata remains English in localized ZeroCode/web | Config/Gateway | No |
| **S2** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) CLI-created cron jobs discard output (`delivery.mode = "none"`) | Cron/Runtime | No |
| **S2** | [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) `zeroclaw-plugins` lib unit tests never execute in CI (feature-gated) | CI/Plugins | No |
| **S3** | [#9429](https://github.com/zeroclaw-labs/zeroclaw/issues/9429) Channels tests flake on slow runners (fixed timeouts) | CI/Tests | **Closed** (#9429) |

**Critical cluster**: Delegation policy bypass (#8279), terminal completion false-success (#9421), and SOP cancellation gap (#9425) all block safe multi-agent workflows. Fix PRs exist only for #9421.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|----------------------|
| **Category-scoped `read_memory_from`** — share selected memory categories with sibling agents | [#8983](https://github.com/zeroclaw-labs/zeroclaw/issues/8983) (proposal, 2 comments) | Medium — fits v0.9.0 A2A/multi-agent boundary work |
| **PowerShell as native shell on Windows** | [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) (large PR, needs-author-action) | High — Windows parity, active review |
| **Disable cachePoint for Bedrock Nova 2 Lite via config** | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) (support, in-progress) | High — config-only, unblocks Bedrock users |
| **Anthropic stored-profile OAuth alias contract** | [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) (RFC, accepted) | High — tied to PR #9420, security hardening |
| **Wire WASM memory/channel plugins into runtime backend selection** | [#9463](https://github.com/zeroclaw-labs/zeroclaw/issues/9463) (enhancement) | Medium — plugin architecture milestone |
| **AI-assisted PR pre-review/re-review** | [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) (RFC, needs-maintainer-review) | Low — process improvement, not product |

**Prediction**: Next version will ship **PowerShell support**, **Bedrock cachePoint config**, **Anthropic OAuth contract**, and **PostgreSQL session backend** — all have active PRs. Multi-agent memory scoping and WASM plugin wiring are v0.9.1+ candidates.

## 7. User Feedback Summary
| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Shell tool broken on Fedora under Landlock** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — "`sh` cannot access `/dev/null`" | Fedora/Linux users with sandbox enabled |
| **CLI cron jobs silently discard output** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — "delivery hardcoded to None, run recorded as ok" | Automation/scheduled-job users |
| **No way to cancel running SOP from web dashboard** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) — "S1 workflow blocked" | Web dashboard operators |
| **Config init writes invalid template; `config migrate` exits 1** | [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) — "fresh config born degraded" | New users onboarding |
| **Secret prompts show no feedback after paste** | [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) — "fully hidden password input" | All users setting API keys |
| **Gemini API key leaks into chat on transport failure** | [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) — "posted into originating chat" | Gemini users on unstable networks |

**Sentiment**: Frustration with **silent failures** (cron, SOP, config init) and **security surprises** (key leaks, sandbox breaks). Positive signal: maintainers respond fast (most issues <48h old have `status:accepted` or `in-progress`).

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention
| Item | Age | Why It Matters | Blocked By |
|------|-----|----------------|------------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) v0.9.0 auth/security/gateway/breaking-change tracker | 49 days | **Release coordination hub** — all v0.9.0 scope decisions converge here | Maintainer bandwidth for decision queue |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) SOP milestone: daemon-owned control plane to 5/5 | 34 days | **13 SOP capabilities** gated on control plane; only 1 PR (#9251) landed | Design reviews, PR sequencing |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue for RFCs/design issues | 24 days | **Governance backlog** — RFCs (#9330, #9464) pile up here | Explicit triage cadence |
| [#8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784) Split-history loop contract for Agent entry points (PR-1 of #7846 rework) | 21 days | **Core runtime refactor** — unblocks hook system, delegation, WASM | Author action on review feedback |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) Carry live provider identity on usage events | 17 days | **Observability/billing** — resolves context window from serving provider | Author action, cross-crate changes |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) Matrix single-message progress drafts | 30 days | **Channel UX** — editing drafts vs separate messages | Trusted contributor, large scope |

**Recommendation**: Schedule a **v0.9.0 scope freeze** this week. Items #7432, #8288, #8692 are meta-blockers — without maintainer triage, PRs like #8784, #8966, #8443 drift into staleness.

---

*Digest generated from GitHub API data (issues/PRs updated 2026-07-27 → 2026-07-28). Links point to live GitHub objects.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*