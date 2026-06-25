# OpenClaw Ecosystem Digest 2026-06-25

> Issues: 346 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-25 00:39 UTC

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

⚠️ Summary generation failed.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-06-25

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a phase of **rapid fragmentation and specialization**, with at least 14 active projects competing on channel breadth, provider support, security posture, and architectural philosophy. The landscape splits into two tiers: **generalist platforms** (Hermes Agent, ZeroClaw, NanoClaw) targeting multi-channel, multi-provider deployments, and **focused/niche projects** (PicoClaw, TinyClaw, NanoBot) optimizing for specific hardware or minimal footprints. **Security hardening** is the dominant cross-project theme in this cycle — six projects disclosed or patched critical vulnerabilities today. A clear **enterprise-readiness pull** is visible across RBAC, OIDC, supply-chain signing, and multi-tenancy feature requests. No clear winner has emerged; instead, projects are differentiating on architectural choices (WASM plugins vs. MCP vs. monolithic reborn-crate refactor) and operational surface (self-hosted-first vs. desktop-electron).

---

## 2. Activity Comparison

| Project | Issues Active | PRs Active | Releases Today | Health Score (24h) | Status |
|---|---|---|---|---|---|
| **Hermes Agent** | 50 | 50 | None | 🟢🟢🟢 High Activity | Stabilization sprint; multiple P1 fixes shipped |
| **ZeroClaw** | 50 | 50 | None | 🟢🟢⚪ High Activity | v0.9.0 accumulation phase; enterprise features landing |
| **IronClaw** | 19 | 41 | None | 🟢🟢⚪ Moderate | Reborn refactor wave; init regression active |
| **CoPaw** | 23 | 50 | None | 🟢🟢⚪ Moderate | AgentScope 2.0 migration regression patching |
| **NanoBot** | 18 | 46 | None | 🟢⚪⚪ Moderate | MCP security regression + Telegram fix PRs in flight |
| **NanoClaw** | 1 | 18 | None | 🟢🟢⚪ High Stability | CVE patched; security hardening batch |
| **PicoClaw** | 13 | 8 | None | 🟡🟡⚪ Concerning | Merge bottleneck; 11 security advisories stale-closed |
| **LobsterAI** | 1 | 43 | None | 🟢🟢⚪ Batch Landing | Large fix PR batch merged; net-new issues near zero |
| **TinyClaw** | 0 | 1 | None | 🟢🟢⚪ Minimal | Single Windows compatibility PR merged |
| **NullClaw** | — | — | — | ⚪⚪ No Data | Dormant |
| **Moltis** | — | — | — | ⚪⚪⚪⚪⚪ No Data | Dormant |
| **ZeptoClaw** | — | — | — | ⚪⚪ No Data | Dormant |
| **OpenClaw** | — | — | — | ⚪⚪⚪ No Data | Summary generation failed |

*Scoring:  = healthy signal;  = caution;  = concern; ⚪ = neutral/missing*

---

## 3. OpenClaw's Position

**OpenClaw (core reference) failed summary generation today**, so direct data-backed comparison is unavailable. However, positioning can be inferred from peer analysis:

- **Channel breadth**: NanoBot, Hermes, NanoClaw, and ZeroClaw all support 5–10+ channels (Telegram, DingTalk, Feishu, Mattermost, Matrix, Rocket.Chat demand). OpenClaw competes at this level per prior references.
- **MCP support**: NanoBot, NanoClaw, ZeroClaw, and PicoClaw all have active MCP integration work (remote servers, security hardening, per-agent scoping). MCP is now table stakes; OpenClaw's gateway architecture appears aligned with this trend.
- **Community scale by proxy**: Hermes (50/50) and ZeroClaw (50/50) set the high-water mark for raw activity. NanoBot (18/46) and NanoClaw (1/18) show that focused projects can punch above weight in PR density per issue.

**OpenClaw's likely advantages** (per ecosystem role as reference project):
- Gateway architecture with sub-agent delegation (referenced by LobsterAI's explicit "OpenClaw sub-agent gateway" PRs)
- Desktop + cloud hybrid model (LobsterAI's Electron integration references OpenClaw spawns)
- Multi-provider abstraction supporting OpenAI-compatible, Anthropic, Gemini, and niche providers (Kimi, z.ai, Ollama, Volcengine, etc.)

**Gaps to monitor**: If OpenClaw's summary failure reflects documentation or community-reporting gaps, it may be losing transparency signal against peers with active digests.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **MCP Security & Per-Agent Scoping** | NanoBot (#4436, #4452), NanoClaw (#2799, #2847), ZeroClaw (#7747), PicoClaw (#3118), Hermes (delegate_task #43466) | Deny-all bypass fixes, per-agent bundle enforcement, remote MCP over HTTP/SSE, path traversal prevention |
| **Telegram Regression Fixes** | NanoBot (#4505, #4470), Hermes (#46762, #52126), IronClaw (#5194) | Rich message compatibility with Telegram Web, streaming edit flood, file attachment drops, line break handling |
| **Provider Rate Limit / Cost Control** | Hermes (#4379, #50663, #6839), NanoBot (#4464, #4475), ZeroClaw (#8233), CoPaw (#5441) | Token overhead reduction, lazy tool schema loading, live pricing for unpriced models, rate-limit retry handling |
| **Session / Gateway Stability** | LobsterAI (#2047, #2050), IronClaw (#5139), Hermes (#52197), NanoBot (#4441) | Session freezing, Discord heartbeat stalls, SSE reconnect recovery, cross-process cache invalidation |
| **Self-Hosted / Auth Hardening** | ZeroClaw (#7141, #8044), IronClaw (#5184), PicoClaw (#3072, #3078), NanoClaw (#2799) | OIDC support, per-s CSRF prevention, SSRF sandboxing, self-signed cert handling |
| **Desktop ClientsterAI (#2196), CoPaw (#4669, #5317), Hermes (#52208) | Electron spawn paths, Tauri auto-updater, multi-profile routing, Windows conda Python discovery |

**Key insight**: MCP security and Telegram stability are the two areas where projects are simultaneously patching the same class of bugs — suggesting these are the highest-urgency user-facing pain points in the ecosystem.

---

## 5. Differentiation Analysis

| Dimension | Generalist Platforms | Focused/Niche | Desktop-Hybrid |
|---|---|---|---|
| **Projects** | Hermes, ZeroClaw, NanoClaw, NanoBot | PicoClaw (RISC-V/embedded), TinyClaw (minimal CLI) | LobsterAI, CoPaw |
| ** channels** | 5–10+, aggressive expansion | 1–3, deliberate scope | Desktop-native + 1–2 IM |
| **Provider Strategy** | 20+ providers, BYOK-first | Curated/coding-focused | Desktop hardware-aware |
| **Security Model** | RBAC + OIDC + supply-chain | CVE patching + sandbox path restrictions | App sandboxing + auth flows |
| **Architecture** | Plugin/WASM/MCP ecosystems | Monolithic or minimal | Electron/Tauri wrappers over agent core |
| **Target User** | Self-hosted teams, enterprises, developers | Embedded systems, individual power users | Desktop professionals, non-technical users |
| **Key Differentiator** | Hermes: lazy tool loading cost savings; ZeroClaw: WASM plugin system; NanoClaw: security researcheragnet | PicoClaw: tiny footprint for hardware; TinyClaw: cross-platform CLI minimalism | LobsterAI: Chinese market UX; CoPaw: Alibaba ecosystem integration |

**Architectural fork**: ZeroClaw is betting on **WASM component-model plugins** (#7928), Hermes is pursuing **ACP multi-agent orchestration** (#5257) + **lazy tool schema injection** (#6839), and IronClaw is executing a **monolithic-to-contract-crate decomposition** (#5163, #5137). These represent three distinct responses to the same scalability problem — none has yet demonstrated clear dominance.

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapid Iteration (≥40 events/24h, ship-ready PRs)
- **Hermes Agent**: 50/50, addressing multiple P1 regressions simultaneously. High contributor volume but reactive posture.
- **ZeroClaw**: 50/50, enterprise feature factory. Strong RFC-to-PR pipeline. Risk: 50 open PRs with `needs-maintainer-review` flags suggest bottleneck.
- **NanoBot**: 18/46, highest PR-per-issue ratio. Fast iteration on channel integrations and MCP. Risk: quality control on existing channels while expanding breadth.
- **IronClaw**: 19/41, deep in architectural refactor. Risk: regression (#5139 breaking 14% of benchmarks) during heavy churn.
- **CoPaw**: 23/50, post-migration bug fixing. AgentScope 2.0 was a big bet; paying down regression debt.
- **LobsterAI**: 1/43, unusual batch landing pattern. 43 PRs merged with only 1 open issue suggests compressed release cycle — monitor for post-release regression spike.

### Tier 2 — Active Stabilization (10–25 events/24h)
- **NanoClaw**: CVE-2026-29611 patched; healthy security response cadence. Clean backlog.
- **PicoClaw**: 11 security advisories closed stale without visible fixes — **signal of maintainer bandwidth or process concern**.

### Tier 3 — Low Activity / Maintenance Mode
- **TinyClaw**: Single PR; Windows compatibility focus. Stable but low community volume.
- **NullClaw, Moltis, ZeptoClaw**: No activity in 24h. Dormant or extremely early stage.

### Tier 4 — Data Unavailable
- **OpenClaw**: Summary generation failed. Cannot assess.

---

## 7. Trend Signals for AI Agent Developers

###  Critical Trends (acting now)

1. **MCP is the new integration standard** — but security implications are under-scoped. Projects are racing to add per-agent MCP scoping, deny-all enforcement, and remote HTTP/SSE transport. Developers building on MCP must treat the MCP trust boundary as a first-class security surface, not a trusted-internal connection.

2. **Token cost is the #1 user complaint** — across Hermes (73% overhead analysis), NanoBot (lightweight branding questioned), and CoPaw (1.4GB memory). Lazy tool schema loading, tool output compression, and per-call token budgets are differentiators, not nice-to-haves.

3. **Telegram is the most fragile channel** — three projects hit Telegram regressions simultaneously (rich messages breaking Web client, file drops, line-break handling). The Bot API's rapid feature additions are outpacing ecosystem compatibility testing.

###  Emerging Trends

4. **Enterprise auth is the gating adoption factor** — OIDC, RBAC, supply-chain signing, and per-sender model scoping are being requested across ZeroClaw, IronClaw, and PicoClaw. Self-hosted deployments feel underserved (wontfix on self-signed certs, no IdP support).

5. **Desktop agent wrapper fragmentation** — Electron (LobsterAI), Tauri (CoPaw), and xterm.js (Hermes) are three divergent approaches. Each has distinct failure modes (spawn path, Python discovery, canvas text selection). No standard desktop-agent shell has emerged.

6. **WASM plugin architectures** — ZeroClaw's component-model approach and Hermes' ACP orchestration represent a move toward extensible agent runtime and agent-to-agent coordination — designers are creating modular architectures that allow dynamic loading and delegation of capabilities across environments.

###  Opportunity Signals

7. **Chinese market UX is a differentiator** — LobsterAI's DingTalk/WeChat fixes, NanoBot's DingTalk richText support, CoPaw's Feishu routing bugs, IronClaw's Chinese localization — the Chinese enterprise IM ecosystem has needs not well-served by Telegram/Discord-centric design.

8. **Security researchers are choosing targets** — PicoClaw received a coordinated 11-advisory disclosure; NanoBot had MCP bypass findings; NanoClaw has a CVE with a named researcher. Being security-researcher-friendly (responsive disclosure, visible patching) is becoming a trust signal.

---

**Bottom line**: The ecosystem is in a **land-grab phase disguised as a build phase**. Projects are competing on channel count and provider breadth while the underlying security and stability foundations are still being poured. The winners will be those who resolve the MCP trust model and token cost problem first — not those who support the most IM channels.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-25

---

## 1. Today's Overview

NanoBot shows **high activity** today with 18 issues updated and 46 PRs touched in the last 24 hours, signaling an active contributor base and a project in rapid iteration. The development focus is heavily concentrated on **channel integrations** (Telegram, DingTalk, Mattermost), **MCP security hardening**, and **WebUI/UX polish** (PWA, mobile, ASR). Two significant security vulnerabilities in MCP `enabledTools` policy enforcement were disclosed and are being actively patched. No new releases were published today, but the volume of merged fixes and new features suggests a minor version bump (v0.2.3) may be imminent.

---

## 2. Releases

**None today.** The latest release remains **v0.2.2**.

---

## 3. Project Progress

### Merged / Closed PRs (today)

| PR | Author | Description |
|---|---|---|
| [#4464](https://github.com/HKUDS/nanobot/pull/4464) | zpljd258 | **New provider:** `kimi_coding` — dedicated provider for Kimi Coding Plan's Anthropic Messages API endpoint |
| [#4475](https://github.com/HKUDS/nanobot/pull/4475) | zpljd258 | **New providers:** OpenCode Zen and OpenCode Go added as coding-optimized providers |
| [#4487](https://github.com/HKUDS/nanobot/pull/4487) | chengyongru | **WebUI fix:** Multi-file `apply_patch` edits now kept distinct by path in tool-event rendering |
| [#4498](https://github.com/HKUDS/nanobot/pull/4498) | foolish66776 | Sync/upstream merge (invalid/routine) |

### Key Open PRs Advancing

- **[#4459](https://github.com/HKUDS/nanobot/pull/4459)** — Mattermost channel integration (WebSocket + REST, streaming responses)
- **[#4452](https://github.com/HKUDS/nanobot/pull/4452)** — Enforces `enabledTools` deny-all for MCP resources and prompts (security fix)
- **[#4436](https://github.com/HKUDS/nanobot/pull/4436)** — Gates MCP resource/prompt registration behind `enabledTools` (security fix)
- **[#4437](https://github.com/HKUDS/nanobot/pull/4437)** — `nanobot heartbeat trigger` CLI command with `--dry-run`, `--json`, channel targeting
- **[#4439](https://github.com/HKUDS/nanobot/pull/4439)** — New `search_history` read-only tool for agent memory recall
- **[#4504](https://github.com/HKUDS/nanobot/pull/4504)** — Skills subdirectory organization support
- **[#4491](https://github.com/HKUDS/nanobot/pull/4491)** — Workspace Dream prompt override + `/dream-prompt` command
- **[#4502](https://github.com/HKUDS/nanobot/pull/4502)** — Gateway webhook triggers with shared HTTP ingress
- **[#4496](https://github.com/HKUDS/nanobot/pull/4496)** — CLI agent cross-channel send routing through gateway

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **[#660](https://github.com/HKUDS/nanobot/issues/660)** — *"Ultra-lightweight" claim vs. Node.js dependency* — 11 comments, 5 👍
   - **Underlying need:** Users value the project's lightweight branding but find the Node.js requirement in the Dockerfile contradictory. This is a long-running tension (created 2026-02-14) between the project's marketing and its actual architecture. The community wants either justification or removal of the Node.js dependency.

2. **[#4488](https://github.com/HKUDS/nanobot/issues/4488)** — *Telegram Web "message not supported" after rich messages update*
   - **Underlying need:** The Bot API 10.1 rich messages feature (#4413) broke Telegram Web compatibility. This is a **regression** from a recently shipped feature. Fix PRs [#4505](https://github.com/HKUDS/nanobot/pull/4505) and [#4495](https://github.com/HKUDS/nanobot/pull/4495) are already open, adding a config toggle.

3. **[#4470](https://github.com/HKUDS/nanobot/issues/4470)** — *Telegram line break regression + message flickering*
   - **Underlying need:** v0.2.2 introduced formatting regressions in Telegram — newlines ignored and constant message editing during streaming. This affects readability of all Telegram conversations.

4. **[#4434](https://github.com/HKUDS/nanobot/issues/4434) & [#4435](https://github.com/HKUDS/nanobot/issues/4435)** — *MCP `enabledTools` deny-all bypass*
   - **Underlying need:** Two coordinated security advisories showing that `enabledTools: []` only filtered tools, not resources or prompts. This could expose sensitive MCP server data to the model even when the user configured a deny-all policy. Fix PRs are in review.

5. **[#4500](https://github.com/HKUDS/nanobot/issues/4500)** — *WebUI home page send doesn't navigate + stop button broken*
   - **Underlying need:** Core WebUI UX bugs affecting new user onboarding — sending from the welcome screen doesn't create/navigate to a conversation, and the stop button is non-functional after self-restart.

---

## 5. Bugs & Stability

### 🔴 Critical / Security

| # | Issue | Status | Fix PR |
|---|---|---|---|
| [#4434](https://github.com/HKUDS/nanobot/issues/4434) | MCP `enabledTools` deny-all bypass exposes resources | Open | [#4436](https://github.com/HKUDS/nanobot/pull/4436), [#4452](https://github.com/HKUDS/nanobot/pull/4452) |
| [#4435](https://github.com/HKUDS/nanobot/issues/4435) | MCP `enabledTools` allowlist bypass exposes prompts | Open | Same PRs |
| [#4442](https://github.com/HKUDS/nanobot/issues/4442) | Duplicate `tool_use` IDs in streamed responses poison sessions | **Closed** (fix merged) | — |

### 🟠 High Severity

| # | Issue | Status | Fix PR |
|---|---|---|---|
| [#4488](https://github.com/HKUDS/nanobot/issues/4488) | Telegram Web "message not supported" (regression from rich messages) | Open | [#4505](https://github.com/HKUDS/nanobot/pull/4505), [#4495](https://github.com/HKUDS/nanobot/pull/4495) |
| [#4470](https://github.com/HKUDS/nanobot/issues/4470) | Telegram line break regression + message flickering | Closed | Under investigation |
| [#4499](https://github.com/HKUDS/nanobot/issues/4499) | Telegram replies sent as empty messages | Closed | Under investigation |
| [#4441](https://github.com/HKUDS/nanobot/pull/4441) | MCP `streamable_http` generator crash on reconnect (`RuntimeError: cancel scope`) | Open (PR) | — |

### 🟡 Medium Severity

| # | Issue | Status | Fix PR |
|---|---|---|---|
| [#4497](https://github.com/HKUDS/nanobot/issues/4497) | DingTalk: richText dropped + HTTP timeout | Open | [#4501](https://github.com/HKUDS/nanobot/pull/4501) |
| [#4465](https://github.com/HKUDS/nanobot/issues/4465) | WebUI renders `<thinking/>` tags as visible text | Closed | Fix merged |
| [#4500](https://github.com/HKUDS/nanobot/issues/4500) | WebUI home send no-navigation + stop button broken | Open | — |
| [#4492](https://github.com/HKUDS/nanobot/issues/4492) | WebM→WAV conversion needed for Xiaomi MiMo ASR | Open | [#4493](https://github.com/HKUDS/nanobot/pull/4493) |
| [#4388](https://github.com/HKUDS/nanobot/issues/4388) | iOS Safari input zoom regression | Closed | Fix merged |

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Release (v0.2.3)

| Feature | Signal Strength | Evidence |
|---|---|---|
| **Telegram rich messages config toggle** | 🔴 High | Two PRs ([#4505](https://github.com/HKUDS/nanobot/pull/4505), [#4495](https://github.com/HKUDS/nanobot/pull/4495)) addressing regression |
| **MCP `enabledTools` security hardening** | 🔴 High | Two PRs ([#4436](https://github.com/HKUDS/nanobot/pull/4436), [#4452](https://github.com/HKUDS/nanobot/pull/4452)) from coordinated disclosure |
| **DingTalk richText + timeout fix** | 🟠 High | PR [#4501](https://github.com/HKUDS/nanobot/pull/4501) ready |
| **WebM→WAV conversion for MiMo ASR** | 🟠 High | PR [#4493](https://github.com/HKUDS/nanobot/pull/4493) ready |
| **WebUI `<thinking/>` tag handling** | 🟠 High | Already merged |

### Medium-Term Candidates

| Feature | Evidence |
|---|---|
| **Mattermost channel** | PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) — substantial, under review |
| **PWA + mobile sidebar gestures** | Issue [#4479](https://github.com/HKUDS/nanobot/issues/4479) — active feature request |
| **Gateway webhook triggers** | PR [#4502](https://github.com/HKUDS/nanobot/pull/4502) — new capability |
| **CLI cross-channel send routing** | PR [#4496](https://github.com/HKUDS/nanobot/pull/4496) — closes a functional gap |
| **Skills subdirectory organization** | PR [#4504](https://github.com/HKUDS/nanobot/pull/4504) — quality-of-life |
| **Custom provider thinking style config** | PR [#4482](https://github.com/HKUDS/nanobot/pull/4482) — extensibility |
| **Auth for OpenAI-compatible API on wildcard bind** | Issue [#4490](https://github.com/HKUDS/nanobot/issues/4490) — security parity |

---

## 7. User Feedback Summary

### Pain Points

- **Telegram experience degraded after v0.2.2:** Multiple users report broken formatting (line breaks, empty messages, rich message incompatibility with Telegram Web). This is the most acute user-facing issue today.
- **MCP security trust broken:** The `enabledTools` bypass means users who configured restrictive policies were unknowingly exposed. The coordinated disclosure suggests a security researcher took this seriously.
- **WebUI mobile experience still rough:** iOS Safari zoom issues, missing PWA support, and broken send/stop flows indicate the WebUI is not yet mobile-ready despite recent efforts.
- **"Ultra-lightweight" branding questioned:** The Node.js dependency in Docker contradicts the project's core positioning — a long-standing community complaint.

### Positive Signals

- Active PR contributions across channels (Telegram, DingTalk, Mattermost), providers (Kimi, OpenCode, Xiaomi), and core infrastructure (MCP, heartbeat, webhooks) show a healthy contributor ecosystem.
- Security issues are being addressed rapidly with multiple PRs from different contributors.
- New provider additions (Kimi Coding, OpenCode Zen/Go) suggest the project is becoming a popular unified agent frontend.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk |
|---|---|---|
| **[#660](https://github.com/HKUDS/nanobot/issues/660)** — Node.js bloat contradicting "ultra-lightweight" claim | 131 days | Reputational; 5 👍, 11 comments; no official response visible |
| **[#4490](https://github.com/HKUDS/nanobot/issues/4490)** — No auth for API on wildcard bind | 1 day | Security; parity with WS gateway is a reasonable ask |
| **[#4500](https://github.com/HKUDS/nanobot/issues/4500)** — WebUI home send + stop button broken | 1 day | Core UX; affects all new WebUI users |
| **[#4497](https://github.com/HKUDS/nanobot/issues/4497)** — DingTalk richText + timeout | 1 day | Channel reliability; fix PR exists but unmerged |
| **[#4441](https://github.com/HKUDS/nanobot/pull/4441)** — MCP reconnect crash (`cancel scope` RuntimeError) | 4 days | Gateway stability; needs review/merge |
| **[#4503](https://github.com/HKUDS/nanobot/issues/4503)** — HVTracker trust badge for README | 0 days | Low priority but signals community trust-building interest |

### PRs at Risk of Stalling

| PR | Age | Concern |
|---|---|---|
| **[#4459](https://github.com/HKUDS/nanobot/pull/4459)** — Mattermost channel | 3 days | Large PR, may need significant review bandwidth |
| **[#4437](https://github.com/HKUDS/nanobot/pull/4437)** — Heartbeat trigger command | 4 days | Cross-cutting change touching CLI + gateway |
| **[#4438](https://github.com/HKUDS/nanobot/pull/4438)** — Onboard wizard search engine fix | 4 days | Simple fix but still open |

---

**Summary:** NanoBot is in a high-velocity iteration phase with strong community engagement. The most urgent priorities are **shipping the Telegram regression fixes**, **merging the MCP security patches**, and **addressing the WebUI mobile UX gaps**. The project's breadth of channel and provider support is expanding rapidly, but quality control on the existing channels needs attention before adding more surface area.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — June 25, 2026

---

## 1. Today's Overview

Hermes Agent remains a high-activity open-source project with **50 issues** and **50 pull requests** updated in the last 24 hours — an unusually high volume that signals both strong community engagement and significant operational pressure on maintainers. The project released **no new versions** today, suggesting the team is consolidating fixes rather than shipping new features. Key themes include: **performance optimization** (token overhead reduction, lazy tool loading), **gateway stability** (Discord event-loop stalls, Telegram message delivery, cross-process cache invalidation), **desktop client polish** (update UX, multi-profile routing), and **provider reliability** (Olamma tool arrays, Gemini vision routing, z.ai rate limiting). Multiple P1 regressions touching gateways and agent context corruption are being actively addressed with overlapping fix PRs, indicating reactive fire-fighting on recently-shipped code.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs Today (18 total)

| PR | Author | Description | Status |
|---|---|---|---|
| [#52199](https://github.com/NousResearch/hermes-agent/pull/52199) | benbarclay | Scoped dashboard liveness fallback to profile (salvage of #52151) | ✅ Merged |
| [#52151](https://github.com/NousResearch/hermes-agent/pull/52151) | helix4u | Validated runtime status PID command line to prevent false-positive gateway liveness | ✅ Merged |
| [#52208](https://github.com/NousResearch/hermes-agent/pull/52208) | OutThisLife | Fixed update overlay appearing frozen (progress streaming fix) | ✅ Merged |
| [#52203](https://github.com/NousResearch/hermes-agent/pull/52203) | OutThisLife | Announced gateway drain waits so desktop updates don't hang | ✅ Merged |
| [#52205](https://github.com/NousResearch/hermes-agent/pull/52205) | OutThisLife | Routed gateway restart/status/update to active profile | ✅ Merged |
| [#52201](https://github.com/NousResearch/hermes-agent/pull/52201) | OutThisLife | Fixed bogus update count for shallow git checkouts | ✅ Merged |
| [#51615](https://github.com/NousResearch/hermes-agent/pull/51615) | LeonSGP43 | Restored boot-migration backups on Docker config migration failure | ✅ Merged |
| [#52196](https://github.com/NousResearch/hermes-agent/pull/52196) | bgauger | Rejected BMP for native vision embedding (OpenAI/Codex compatibility) | ✅ Merged |
| [#52158](https://github.com/NousResearch/hermes-agent/pull/52158) | Skulldorom | Fixed CLI code-fence mangling during streaming strip mode | ✅ Merged |
| [#52126](https://github.com/NousResearch/hermes-agent/pull/52126) | lequtix | Fixed Telegram channel file attachments being silently dropped | ✅ Merged |
| [#43466](https://github.com/NousResearch/hermes-agent/pull/43466) | clayton-quill | Fixed delegate_task not stripping messaging/cronjob tools from children | ✅ Merged |
| [#51136](https://github.com/NousResearch/hermes-agent/pull/51136) | kenpritchard | Fixed lazy-optional-dependency installation in official Docker image | ✅ Merged |
| [#46762](https://github.com/NousResearch/hermes-agent/pull/46762) | ktkt3r | Fixed Telegram sendRichMessage flood-control retry ignoring retry_after | ✅ Merged |
| [#36776](https://github.com/NousResearch/hermes-agent/pull/36776) | kburgraeve | Added overall timeout to ddgs web search to prevent indefinite hangs | ✅ Merged |
| [#42449](https://github.com/NousResearch/hermes-agent/pull/42449) | daniloalvarenga | Fixed delegate_task corrupting parent context_length via shared singleton | ✅ Merged |
| [#46762](https://github.com/NousResearch/hermes-agent/issues/46762) | ktkt3r | Telegram sendRichMessage flood-control retry issue (closed via PR) | ✅ Closed |

### Notable Open PRs Advancing

| PR | Description | Significance |
|---|---|---|
| [#52207](https://github.com/NousResearch/hermes-agent/pull/52207) | Scale-to-zero idle detection + dormant-quest (Phase 0) | Infrastructure cost optimization for hosted instances |
| [#52200](https://github.com/NousResearch/hermes-agent/pull/52200) | Moved cross-process cache invalidation cleanup outside lock | Fixes Discord heartbeat stalls (P1 regression) |
| [#52188](https://github.com/NousResearch/hermes-agent/pull/52188) | LM Studio max context detection and preload fix | Provider compatibility |
| [#52209](https://github.com/NousResearch/hermes-agent/pull/52209) | Registered auxiliary as valid web extract backend | Config fallback fix |
| [#52204](https://github.com/NousResearch/hermes-agent/pull/52204) | Fixed cron Windows Git Bash resolution | Windows platform reliability |
| [#51269](https://github.com/NousResearch/hermes-agent/pull/51269) | Feishu bot-to-bot LLM-driven auto-@ with persistent cache | Multi-agent Feishu group orchestration |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | Vertex AI provider for Gemini models | Enterprise GCP integration |
| [#22648](https://github.com/NousResearch/hermes-agent/pull/22648) | Ollama Cloud as plugin-based web search provider | Expanding local/cloud hybrid options |

---

## 4. Community Hot Topics

| # | Item | Engagement | Analysis |
|---|---|---|---|
| 1 | **Issue [#6839](https://github.com/NousResearch/hermes-agent/issues/6839)** — Lazy Tool Schema Loading / Two-Pass Tool Injection | 💬 27 comments, 👍 14 | Strong demand for reducing API token costs. With 50+ tools injecting 3,500–5,000 tokens per call, this is the single most impactful performance optimization available. The "needs-decision" tag suggests architectural disagreement on approach. |
| 2 | **Issue [#5257](https://github.com/NousResearch/hermes-agent/issues/5257)** — Generalized ACP Client for multi-agent CLI orchestration | 💬 11 comments, 👍 16 | Users want Hermes to orchestrate Claude Code, Codex, and other ACP-compatible agents — not just be orchestrated by them. Positions Hermes as a meta-agent. |
| 3 | **Issue [#4379](https://github.com/NousResearch/hermes-agent/issues/4379)** — Token overhead analysis: 73% overhead per API call | 💬 15 comments | Data-driven profiling showing structural cost issue. Companion dashboard project indicates sophisticated user base. |
| 4 | **Issue [#39691](https://github.com/NousResearch/hermes-agent/issues/39691)** — Integrate headroom-ai for tool output compression | 💬 7 comments, 👍 10 | Conversation-level compression is seen as wasteful; users want semantic compression of tool outputs before they enter context. |
| 5 | **Issue [#3725](https://github.com/NousResearch/hermes-agent/issues/3725)** — Rocket.Chat support | 💬 11 comments, 👍 10 | Self-hosted teams (common privacy-conscious Hermes users) want Rocket.Chat parity with Telegram/Discord. |
| 6 | **Issue [#50075](https://github.com/NousResearch/hermes-agent/issues/50075)** — Can't select/copy chat text on mobile | 💬 1 comment | xterm.js canvas rendering blocks OS-level text selection, degrading mobile UX. |

---

## 5. Bugs & Stability

### 🔴 P1 — Critical (User Data Loss / Gateway Outage)

| Issue | Fix Status | Description |
|---|---|---|
| [#52197](https://github.com/NousResearch/hermes-agent/issues/52197) | ✅ **Fixed by PR [#52200](https://github.com/NousResearch/hermes-agent/pull/52200)** | Cross-process agent-cache cleanup held lock, stalling Discord event loop for minutes |
| [#43466](https://github.com/NousResearch/hermes-agent/issues/43466) | ✅ **Fixed (merged today)** | delegate_task leaked messaging/cronjob tools to child agents against security policy |
| [#42449](https://github.com/NousResearch/hermes-agent/issues/42449) | ✅ **Fixed (merged today)** | delegate_task corrupted parent context_length via shared singleton |
| [#46762](https://github.com/NousResearch/hermes-agent/issues/46762) | ✅ **Fixed (merged today)** | Telegram rich-messages dropped under flood control |
| [#36776](https://github.com/NousResearch/hermes-agent/issues/36776) | ✅ **Fixed (merged today)** | ddgs web search hangs indefinitely, blocking all platforms |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | 🔴 **Open, no fix** | OpenAI-Codex credential pool drops newly added credentials — data loss risk |

### 🟡 P2 — Significant

| Issue | Fix Status | Description |
|---|---|---|
| [#33801](https://github.com/NousResearch/hermes-agent/issues/33801) | 🔴 **Open** | Secret redaction corrupts Python/Shell syntax in tool output |
| [#50663](https://github.com/NousResearch/hermes-agent/issues/50663) | 🔴 **Open** | z.ai rate limits Hermes during peak hours (Max plan users) |
| [#32660](https://github.com/NousResearch/hermes-agent/issues/32660) | 🔴 **Open** | Tools array missing from calls to custom Olamma endpoint |
| [#17945](https://github.com/NousResearch/hermes-agent/issues/17945) | 🔴 **Open, needs-repro** | delegate_task returns HTTP 404, blocking auto-research |
| [#52126](https://github.com/NousResearch/hermes-agent/issues/52126) | ✅ **Fixed (merged today)** | Telegram file attachments silently dropped in channels |

### 🟢 P3 — Minor

| Prevalent Themes | Details |
|---|---|
| Desktop update UX | Multiple PRs (#52208, #52203, #52205, #52201) fixing progress indication and multi-profile routing |
| i18n requests | Russian (#52137), building on prior French, Chinese, Portuguese requests |
| Kanban plugin | DB index corruption under concurrency (#34385), tool availability (#52141) |
| Tool Progress on Non-Edit Platforms | Non-edit platforms silently dropping all tool call progress messages (#52212) |

### Closed Today (Issues)

| Issue | Resolution |
|---|---|
| [#52158](https://github.com/NousResearch/hermes-agent/issues/52158) | CLI code-fence mangling during streaming — fixed in PR |
| [#51136](https://github.com/NousResearch/hermes-agent/issues/51136) | Docker lazy-dependency install — fixed in PR |
| [#44515](https://github.com/NousResearch/hermes-agent/issues/44515) | Desktop update stuck on 1/3 — closed today |
| [#51069](https://github.com/NousResearch/hermes-agent/issues/51069) | Duplicate of MCP project .mcp.json support — closed as duplicate |

---

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Version

| Request | Signal Strength | Rationale |
|---|---|---|
| **Lazy Tool Schema Loading** ([#6839](https://github.com/NousResearch/hermes-agent/issues/6839)) | ⭐⭐⭐⭐⭐ | Highest engagement (27 comments, 👍14), tagged `needs-decision`, directly reduces API costs — aligns with project efficiency goals |
| **Generalized ACP Client** ([#5257](https://github.com/NousResearch/hermes-agent/issues/5257)) | ⭐⭐⭐⭐ | Strong support (👍16), positions Hermes as orchestrator, extends existing ACP server investment |
| **Rocket.Chat support** ([#3725](https://github.com/NousResearch/hermes-agent/issues/3725)) | ⭐⭐⭐ | 👍10, self-hosted community demand, single-scope gateway addition |
| **Tool Output Compression (headroom-ai)** ([#39691](https://github.com/NousResearch/hermes-agent/issues/39691)) | ⭐⭐⭐ | Technical ally aligned, complements lazy-tool-loading for cost reduction |
| **Feishu bot-to-bot auto-@** ([#51269](https://github.com/NousResearch/hermes-agent/pull/51269)) | ⭐⭐⭐ | Open PR, practical for multi-agent Feishu deployments |
| **Scale-to-zero idle detection** ([#52207](https://github.com/NousResearch/hermes-agent/pull/52207)) | ⭐⭐ | Infrastructure cost optimization for hosted users, Phase 0 signals phased rollout |

### Watchlist: Architectural Direction

The combination of **lazy tool loading**, **flow compression**, and **ACP multi-agent orchestration** suggests Hermes is evolving toward: *an orchestrator agent that minimizes API costs while coordinating multiple sub-agents and external tool-providers*. This is a coherent architectural vision if the maintainers can execute on the token-reduction roadmap.

---

## 7. User Feedback Summary

### Pain Points (Ranked by Impact)

1. **API Cost Overhead** — Multiple users profiling and complaining about token waste from full schema injection on every call. This is the #1 cost driver for self-hosted deployments at scale.
2. **Gateway Stability** — Discord heartbeat stalls, Telegram message drops, and search provider hangs show the gateway's multi-platform async architecture has regressions under load.
3. **Secret Redaction** — Corrupting executable code is a silent data-integrity risk that could destroy files or break builds.
4. **Credential Management** — OpenAI-Codex credential pool dropping secrets is dangerous for production deployments.
5. **Mobile/Desktop UX** — Touch text selection broken, update overlays freezing, multi-profile routing incorrect — desktop client is a rough edge.

### Satisfaction Indicators

- High 👍 counts on feature requests (#6839: 14, #5257: 16, #3725: 10) show users are engaged and optimistic about specific improvements.
- Active external tooling (token profiling dashboard by @Bichev, headroom-ai integration by @Songraf) indicates an ecosystem of power users extending the platform.
- Multi-language i18n requests (Russian, French, Chinese, Portuguese) signal growing international adoption.

### Dissatisfaction Indicators

- `needs-repro` tags on multiple P2 bugs (#13834, #17945, #50663) suggest intermittent issues are hard to debug, frustrating users.
- `codex` tag appearing on multiple issues (#13834, #19566) points to a systemic weakness in the OpenAI-Codex integration path.
- Several duplicate-issue closures (#51069, #52126) indicate discoverability problems — users not finding existing discussions.

---

## 8. Backlog Watch — Items Needing Attention

### Overdue / Long-Running Important Issues

| Issue | Age | Severity | Note |
|---|---|---|---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) — Lazy Tool Schema Loading | 77 days | P3/Performance | 27 comments, 👍14, `needs-decision` — blocked on architectural decision, needs maintainer call |
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) — Token overhead analysis | 84 days | P3/Performance | Data-rich, actionable, but no response linked to #6839 decision |
| [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) — Generalized ACP client | 81 days | P3/Feature | Strong support, could be prioritized |
| [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) — Rocket.Chat support | 87 days | P3/Feature | Small scope, high demand |
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) — Hermes openai-codex fails where Codex CLI works | 94 days | P2/Bug | Needs reproduction; codex pathway has multiple issues |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) — Credential pool drops new secrets | 51 days | P1/Bug | **No fix PR, credential loss risk** |

### PRs Needing Review

| PR | Age | Type | Note |
|---|---|---|---|
| [#52207](https://github.com/NousResearch/hermes-agent/pull/52207) — Scale-to-zero Phase 0 | 0 days | Feature | Complex infrastructure change, needs careful review |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) — Vertex AI provider | 74 days | Feature | Long-open provider PR, may need rebase review |
| [#22648](https://github.com/NousResearch/hermes-agent/pull/22648) — Ollama Cloud plugin | 77 days | Feature | Recently rebased, ready for fresh review |
| [#47959](https://github.com/NousResearch/hermes-agent/pull/47959) — Pet generation UX | 8 days | Feature | Nicely scoped but tangential to core mission |

### Triage Gaps

- **#19566** (P1 credential loss) has no associated fix PR and is 51 days old — this should be prioritized given the data-loss severity.
- **#33801** (secret redaction corrupting code) is 28 days old with no fix — a silent data corruption bug affecting all users with API keys configured.
- **#50663** (z.ai rate limiting) and **#51045** (Nous Portal GPT-5.5 failures) are provider-specific issues that may indicate broader provider-health problems.

---

**Assessment:** Hermes Agent is in a period of intense activity with strong community contribution but clear operational strain. The gateway layer and provider integrations are the weak points, while the desktop client and performance optimization are advancing rapidly. The project would benefit from a decisive architectural call on lazy tool loading (#6839) and focused triage on the credential-loss P1 (#19566).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-25

## 1. Today's Overview

PicoClaw had a high-signal day with 13 issues closed and 8 PRs opened, though notably **zero PRs were merged** and **no new releases** were published. The most striking pattern is a coordinated security disclosure burst: 11 security advisory issues (#3068–#3082) were all closed on 2026-06-24, each authored by the same researcher (YLChen-007) and all tagged `stale` — suggesting the maintainer closed them after a defined review window rather than with explicit fixes linked. On the PR side, Alix-007 has 4 fresh, focused bug-fix PRs (#3165–#3169) addressing OpenAI-compatible provider correctness, which appear close to merge. The project is in a **security-remediation and provider-stability** phase, with active community contribution but a merge bottleneck worth monitoring.

## 2. Releases

No new releases today.

## 3. Project Progress

No PRs were merged or closed today. All 8 open PRs remain in review:

- **#3165** — Recovers Volcengine Doubao Seed `<seed:tool_call>` XML blocks from OpenAI-compatible responses, strips leaked XML from streaming chunks. *(Alix-007, provider correctness)*
- **#3166** — Fixes an `undefined: log` build failure in `pkg/providers/openai_compat` by replacing a stray `log.Printf` with the structured logger. *(Alix-007, build fix)*
- **#3168** — Returns proper body-read errors when OpenAI-compatible model list fetches fail with non-200 but unreadable error bodies; adds regression test. *(Alix-007, error handling)*
- **#3169** — Skips evolution cold-path scheduling for heartbeat turns to prevent wasted tokens; stacked on #3166. *(Alix-007, efficiency)*
- **#3116** — Completes Pico `turn.done` lifecycle signaling, preserving `request_id` for queued steering messages. *(afjcjsbx, Pico core)*
- **#3115** — Fixes session-history corruption where `data:image/...;base64,...` strings in plain text tool output were misidentified as media. *(jp39, tool output handling)*
- **#3118** — Adds `--remote ws://...` flag to `picoclaw agent` for remote Pico WebSocket mode. *(jp39, new feature)*
- **#3063** — Adds a DeltaChat gateway channel. *(trufae, new channel integration)*

## 4. Community Hot Topics

| # | Item | 💬 | 👍 | Signal |
|---|------|----|----|--------|
| 1 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming HTTP request config support | 13 | 1 | Longest-running open request; users want OpenAI-style `stream=True` config for LLM backends |
| 2 | [#3072](https://github.com/sipeed/picoclaw/issues/3072) — CSRF in launcher first-run password setup | 2 | 0 | Local control-plane takeover risk |
| 3 | [#3078](https://github.com/sipeed/picoclaw/issues/3078) — SSRF bypass via env-configured HTTP proxy in `web_fetch` | 2 | 0 | Sandbox escape vector |
| 4 | [#3082](https://github.com/sipeed/picoclaw/issues/3082) — Feishu reply-context bypasses `allow_from` | 2 | 0 | Channel authorization bypass |
| 5 | [#3167](https://github.com/sipeed/picoclaw/issues/3167) — PageAgent Vue/MVVM adaptation inquiry | 0 | 0 | Enterprise user exploring PageAgent for Vue 2 + Element UI admin systems |

**Analysis:** The dominant community need is **security hardening** — 11 coordinated advisories covering SSRF, CSRF, authorization bypasses, symlink races, and MQTT spoofing indicate a thorough audit was conducted. The `stale` closure without visible fix commits is concerning and warrants follow-up. Issue #2404 (13 comments, open since April) reflects persistent demand for streaming support in non-OpenAI providers.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| 🔴 Critical | [#3072](https://github.com/sipeed/picoclaw/issues/3072) — CSRF allows local control-plane takeover | Closed (stale) | None visible |
| 🔴 Critical | [#3078](https://github.com/sipeed/picoclaw/issues/3078) — `web_fetch` SSRF via HTTP proxy | Closed (stale) | None visible |
| 🔴 Critical | [#3074](https://github.com/sipeed/picoclaw/issues/3074) — SSRF via ISATAP IPv6 literals | Closed (stale) | None visible |
| 🔴 Critical | [#3081](https://github.com/sipeed/picoclaw/issues/3081) — Approval hook `cwd` symlink race | Closed (stale) | None visible |
| 🟠 High | [#3082](https://github.com/sipeed/picoclaw/issues/3082) — Feishu `allow_from` bypass on parent messages | Closed (stale) | None visible |
| 🟠 High | [#3076](https://github.com/sipeed/picoclaw/issues/3076) — WeCom group trigger policy bypass | Closed (stale) | None visible |
| 🟠 High | [#3071](https://github.com/sipeed/picoclaw/issues/3071) — WebSocket `/reload` gateway takeover | Closed (stale) | None visible |
| 🟠 High | [#3068](https://github.com/sipeed/picoclaw/issues/3068) — MQTT `allow_from` spoofing via topic `client_id` | Closed (stale) | None visible |
| 🟡 Medium | [#3079](https://github.com/sipeed/picoclaw/issues/3079) — `exec` whitelist skips deny-pattern for `jq` env disclosure | Closed (stale) | None visible |
| 🟡 Medium | [#3075](https://github.com/sipeed/picoclaw/issues/3075) — Untrusted `skills/` metadata auto-loaded into system prompt | Closed (stale) | None visible |
| 🟡 Medium | [#3073](https://github.com/sipeed/picoclaw/issues/3073) — LINE signed webhook replay allows duplicate execution | Closed (stale) | None visible |
| 🟡 Medium | [#3115](https://github.com/sipeed/picoclaw/pull/3115) — `data:` URL false-positive media extraction corrupts session history | Open PR | Self-fix |
| 🟡 Medium | [#3166](https://github.com/sipeed/picoclaw/pull/3166) — `undefined: log` build failure in `openai_compat` | Open PR | Self-fix |

**Key concern:** All 11 security advisories were closed as `stale` without linked fix PRs or resolution comments. This pattern suggests either (a) fixes were applied in a batch not yet linked to issues, or (b) the issues were closed due to inactivity despite being valid. The community should seek explicit confirmation.

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood | Signal |
|---------|-----------|--------|
| **Streaming HTTP config** ([#2404](https://github.com/sipeed/picoclaw/issues/2404)) | 🔵 Already exists | Closed today — likely resolved or superseded by provider-level streaming |
| **DeltaChat gateway** ([#3063](https://github.com/sipeed/picoclaw/pull/3063)) | High | Open PR, stale but present; needs maintainer review |
| **Remote Pico WebSocket mode** ([#3118](https://github.com/sipeed/picoclaw/pull/3118)) | Medium | Open PR; extends agent deployment flexibility |
| **Volcengine Doubao Seed XML tool call recovery** ([#3165](https://github.com/sipeed/picoclaw/pull/3165)) | High | Focused, test-covered, provider-specific fix — likely next to merge |
| **Vue/MVVM PageAgent support** ([#3167](https://github.com/sipeed/picoclaw/issues/3167)) | Low (short-term) | New inquiry; no maintainer response yet |

**Prediction:** The next release (if any) will likely focus on **OpenAI-compatible provider stability** (PRs #3165–#3169) and **security patches** for the disclosed advisories, rather than new channel integrations.

## 7. User Feedback Summary

- **Security researcher (YLChen-007):** Conducted a comprehensive multi-vector security audit covering 11 distinct vulnerabilities across 7+ channel integrations (Feishu, WeCom, LINE, MQTT, Pico WebSocket, launcher). The coordinated disclosure suggests professional-grade review, but the `stale` closure without acknowledgment may discourage future responsible disclosure.
- **Enterprise user (Wavekip):** Interested in PageAgent for Vue 2 + Element UI admin backends — signals enterprise adoption interest beyond hobbyist use cases. No response yet.
- **Streaming request demand (#2404):** 13 comments over 80+ days indicates this is a persistent, high-demand feature. Its closure today without a clear resolution comment may frustrate followers.
- **Overall satisfaction signal:** Mixed. Active contributors are submitting high-quality PRs (Alix-007's 4 PRs are well-tested and focused), but the merge backlog and silent security issue closures could erode trust.

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) — DeltaChat gateway | 17 days, stale | Medium | Needs maintainer triage; stale tag risks contributor churn |
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) — Pico `turn.done` lifecycle | 13 days, stale | Low | Narrow, well-scoped; should be reviewable quickly |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) — Remote Pico WebSocket mode | 13 days, stale | Low | Feature addition; needs design review |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) — Data URL media extraction fix | 13 days, stale | Medium | Fixes session corruption; should be prioritized |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming HTTP config | 80 days, closed | Unknown | Closed today — verify if actually resolved or just stale-closed |
| [#3167](https://github.com/sipeed/picoclaw/issues/3167) — Vue/MVVM PageAgent support | 1 day | Low | New; monitor for maintainer engagement |

**Maintainer action needed:** Clarify the status of the 11 closed security advisories — were fixes applied? This is the single most important trust signal for the project right now.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-25

## 1. Today's Overview

NanoClaw is experiencing a high-velocity development day with 18 PRs updated in the last 24 hours (16 open, 2 closed) and 1 new issue. The project shows strong community engagement across multiple integration channels (Telegram, Matrix, Signal, MCP) and a continued focus on security hardening. No new releases were published today, indicating the team is accumulating changes for a future cut. The overall health is **active and stable**, with contributors shipping fixes and features at a brisk pace while security researchers continue to surface and patch meaningful vulnerabilities.

## 2. Releases

No new releases today.

## 3. Project Progress

Two PRs were merged or closed in the last 24 hours:

- **#2849 [CLOSED] — feat(telegram): support multiple bot instances via `TELEGRAM_BOT_TOKEN_<SUFFIX>`**
  by [grantland](https://github.com/nanocoai/nanoclaw/pull/2849). This adds multi-bot support for Telegram from a single NanoClaw instance by discovering suffixed token entries in `.env`. Note: a duplicate or follow-up PR **#2853** by the same author is still open, suggesting iteration or a rebase.

- **#2799 [CLOSED] — fix(security): confine `send_file` reads to `/workspace` (CVE-2026-29611)**
  by [sturdy4days](https://github.com/nanocoai/nanoclaw/pull/2799). This patches a real CVE where a compromised or prompt-injected agent could read arbitrary container-visible files (credential state, extra mounts) via absolute paths in `send_file`. The fix restricts reads to the `/workspace` directory. **This is a significant security fix** that likely warrants a patch release.

Several open PRs advanced substantially:

- **#2844 — feat(matrix): native persistent E2EE adapter via `matrix-bot-sdk`**
  by [avri-schneider](https://github.com/nanocoai/nanoclaw/pull/2844). Replaces the Chat SDK WASM bridge with a native Rust-binding adapter for Matrix end-to-end encryption, improving reliability and performance.

- **#2847 — feat: support URL-based (remote) MCP servers**
  by [grantland](https://github.com/nanocoai/nanoclaw/pull/2847). Adds an optional `url` field to `McpServerConfig`, enabling HTTP/SSE connections to remote MCP servers alongside existing stdio transport.

- **#2846 — fix(container-runner): support Docker-in-Docker agent groups**
  by [grantland](https://github.com/nanocoai/nanoclaw/pull/2846). Mounts the Docker socket at its absolute path with proper GID group-add permissions for DinD workflows.

- **#2842 — Generic inert extension-point seams + reserve built-in MCP server names**
  by [foxsky](https://github.com/nanocoai/nanoclaw/pull/2842). Introduces `registerX()`/`applyX()` extension-point pairs across host and container runtime that are no-ops when unregistered, providing a clean plugin architecture.

- **#2843 — feat: add `/learn` skill**
  by [robbyczgw-cla](https://github.com/nanocoai/nanoclaw/pull/2843). A new skill that distills reusable skills from arbitrary sources (directory, URL, pasted content).

## 4. Community Hot Topics

| # | Item | Activity | Underlying Need |
|---|------|----------|-----------------|
| 1 | **Telegram multi-bot** — Issue [#2852](https://github.com/nanocoai/nanoclaw/issues/2852) + PRs [#2849](https://github.com/nanocoai/nanoclaw/pull/2849), [#2853](https://github.com/nanocoai/nanoclaw/pull/2853) | Issue: 1 new; PRs: 1 closed, 1 open | Users want to run multiple Telegram bots per instance. The issue author (Kwisss) reports the feature was previously removed and Claude cannot get "instance" support to work. There's confusion about whether this is documented or actually implemented. |
| 2 | **Matrix native E2EE adapter** — PR [#2844](https://github.com/nanocoai/nanoclaw/pull/2844) | Open, under review | The existing WASM-based crypto bridge is fragile; users need reliable Matrix E2EE for production use. |
| 3 | **Remote MCP servers** — PR [#2847](https://github.com/nanocoai/nanoclaw/pull/2847) | Open, under review | Users want to connect to hosted MCP services without running local stdio processes, critical for cloud and team deployments. |
| 4 | **Security hardening batch** — PRs [#2799](https://github.com/nanocoai/nanoclaw/pull/2799), [#2800](https://github.com/nanocoai/nanoclaw/pull/2800), [#2801](https://github.com/nanocoai/nanoclaw/pull/2801), [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) | 1 closed, 3 open | A security researcher (sturdy4days) is systematically hardening the codebase: path traversal, socket DoS, untrusted input parsing. This signals growing enterprise/security-conscious adoption. |

## 5. Bugs & Stability

| Severity | Description | Fix Status |
|----------|-------------|------------|
| 🔴 **Critical** | **CVE-2026-29611**: `send_file` allows reading any container-visible file via absolute paths | ✅ Fixed in [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) (merged) |
| 🔴 **High** | **CWE-22**: `ncl groups create --folder` allows path traversal escaping `GROUPS_DIR` | 🔧 PR [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) open |
| 🔴 **High** | `safeParseContent` returns primitives instead of raw text, breaking router engage rules | 🔧 PR [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) + [#2815](https://github.com/nanocoai/nanoclaw/pull/2815) open |
| 🔴 **High** | `SocketTransport` has no timeout or buffer cap — potential DoS / hung promises | 🔧 PR [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) open |
| 🟡 **Medium** | Signal group messages missing `isMention` and `isGroup` fields, causing routing failures | 🔧 PR [#2850](https://github.com/nanocoai/nanoclaw/pull/2850) open |
| 🟡 **Medium** | macOS + Rancher Desktop: gateway CA mounts fail with self-signed cert error | 🔧 PR [#2854](https://github.com/nanocoai/nanoclaw/pull/2854) open |
| 🟡 **Medium** | Stale `outbound.db` journals after container SIGKILL; hot-journal poll races | 🔧 PR [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) open |
| 🟢 **Low** | Abandoned poll-loop test helpers steal messages from subsequent tests | 🔧 PR [#2851](https://github.com/nanocoai/nanoclaw/pull/2851) open |
| 🟢 **Low** | OpenCode provider missing cwd and .env fallback for provider/model env vars | 🔧 PR [#2848](https://github.com/nanocoai/nanoclaw/pull/2848) open |
| 🟢 **Low** | `q.ts` not forwarding positional params to `stmt.all()` / `stmt.run()` | 🔧 PR [#2845](https://github.com/nanocoai/nanoclaw/pull/2845) open |

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likelihood |
|---------|----------------|------------|
| **Telegram multi-bot** | 🟢 Strong — user demand (issue + 2 PRs) | High — PR already merged once; being refined |
| **Remote MCP servers (HTTP/SSE)** | 🟢 Strong — PR open with clean implementation | High — aligns with broader MCP ecosystem trend |
| **Native Matrix E2EE adapter** | 🟢 Strong — replaces fragile WASM bridge | High — addresses a known reliability pain point |
| **Docker-in-Docker support** | 🟡 Moderate — single PR, specific use case | Medium — niche but valuable for CI/CD users |
| **`/learn` skill** | 🟡 Moderate — new capability | Medium — depends on review of skill system design |
| **Extension-point seams (plugin API)** | 🟡 Moderate — architectural refactor | Medium — foundational, may need more review cycles |
| **Outbound DB journal recovery** | 🟡 Moderate — fixes real data-loss scenarios (#2516, #2640) | Medium — touches persistence layer, needs careful review |

**Prediction**: The next release will likely be a **security patch release** (given the CVE) followed by a **feature release** bundling Telegram multi-bot, remote MCP, and the Matrix adapter.

## 7. User Feedback Summary

- **Pain Point — Telegram multi-bot regression**: User Kwisss reports the feature existed, was removed, and Claude cannot get "instance" support to work. This is a **documentation and/or feature-gap frustration** — the user is considering looking elsewhere. The existence of two PRs (#2849, #2853) suggests maintainers are responsive, but the issue indicates the user experience is confusing.

- **Pain Point — macOS gateway CA**: Rancher Desktop and Apple `container` users hit self-signed certificate errors on every API call. This is a real blocker for macOS developers using containerized setups. PR #2854 addresses it.

- **Pain Point — Signal group routing**: Without `isMention`/`isGroup` fields, bots in Signal groups cannot distinguish directed messages from ambient traffic, making group deployments unreliable. PR #2850 is a targeted fix.

- **Positive signal**: A security researcher (sturdy4days) is submitting high-quality, well-documented vulnerability reports with fix PRs — this indicates the project is being scrutinized by security-conscious adopters, which is a sign of growing maturity and trust.

- **Satisfaction indicator**: The high PR volume (18 in 24h) with multiple contributors (grantland, sturdy4days, foxsky, avri-schneider) suggests a healthy, engaged contributor community.

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| **PR [#2750](https://github.com/nanocoai/nanoclaw/pull/2750)** — Recover stale outbound.db journals | 12 days | Data-loss scenario; touches persistence | Prioritize review — fixes #2516 and #2640 |
| **PR [#2800](https://github.com/nanocoai/nanoclaw/pull/2800)** — Path traversal in `ncl groups create` | 8 days | Security (CWE-22) | Should ship with or near CVE patch |
| **PR [#2801](https://github.com/nanocoai/nanoclaw/pull/2801)** + **[#2815](https://github.com/nanocoai/nanoclaw/pull/2815)** — `safeParseContent` primitive handling | 8 days | Security + routing correctness | #2815 is a replacement with regression test — prefer merging that |
| **PR [#2802](https://github.com/nanocoai/nanoclaw/pull/2802)** — Socket transport hardening | 8 days | DoS vector | Important for production deployments |
| **Issue [#2852](https://github.com/nanocoai/nanoclaw/issues/2852)** — Telegram multi-bot confusion | 1 day | User churn risk | Needs a clear maintainer response — is the feature in or out? Close the loop with documentation or a status update. |

**Maintainer action needed**: The Telegram multi-bot situation (#2852 + #2849 + #2853) has a closed PR, an open PR, and a confused user — this needs a single authoritative comment to clarify the current state and expected timeline.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-25

## 1. Today's Overview

IronClaw shows high development velocity with 41 PRs and 19 issues updated in the past 24 hours, indicating an active contributor base pushing significant changes. The project is deep in the **Reborn refactor wave** — multiple XL-sized PRs are systematically decomposing the monolithic god-crate, lifting memory into a provider-neutral contract, cleaning up capability activity lifecycle, and extracting HTTP middleware kits. However, **stability has taken a noticeable hit**: a regression is wedging 14% of web/research benchmark tasks at init with zero LLM calls, and a prompt-safety denylist is falsely tripping on benign API vocabulary in bundled skills. No new releases shipped today, suggesting the team is accumulating changes for a larger coordinated drop.

## 2. Releases

No new releases today.

## 3. Project Progress (Closed/Merged Items)

- **SSE turn-event stream recovery after reconnect** — [PR #5194](https://github.com/nearai/ironclaw/pull/5194): Fixed a cross-channel bug where creating a thread via Slack then messaging via WebUI would disconnect the session and spread to other users. Important production fix for multi-channel deployments.
- **CI green build restored** — [PR #5193](https://github.com/nearai/ironclaw/pull/5193): Resolved duplicate YAML key in `reborn-tests.yml` and missed `spawn_subagent` test ignore. CI was fully broken before this.
- **Settings labels localized** — [PR #5186](https://github.com/nearai/ironclaw/pull/5186): Reborn Trace Commons and skill auto-activation controls now have full i18n coverage, including Chinese automation filter label fixes.

## 4. Community Hot Topics

**Most active discussion areas:**

| Topic | Link | Activity |
|---|---|---|
| Prompt-safety denylist false positives | [Issue #5169](https://github.com/nearai/ironclaw/issues/5169) | Bundled skill instructions containing "Authorization", "Bearer", "API key" trip denylist → agent dies silently. Affects clean-setup Reborn deployments. |
| Web/research tasks hanging at init (regression) | [Issue #5139](https://github.com/nearai/ironclaw/issues/5139) | 21/147 PinchBench tasks failing daily since `main` commits `2b2ccc55→704fcd43`. Zero LLM calls made before timeout. |
| Provider-neutral memory extraction (M2) | [PR #5163](https://github.com/nearai/ironclaw/pull/5163) | Lifts memory into `ironclaw_memory` contract crate + `ironclaw_memory_native` provider behind `Arc<dyn MemoryService>` facade. |
| HTTP middleware kit decomposition | [PR #5137](https://github.com/nearai/ironclaw/pull/5137) | First incremental extraction from the ~132k-line `ironclaw_reborn_composition` god-crate. |
| Capability activity lifecycle cleanup | [PR #5145](https://github.com/nearai/ironclaw/pull/5145) | Cleans up activity rows, gate prompts, terminal states for consistent identity in WebUI rendering. |
| Progressive tool disclosure (context management) | [PR #5149](https://github.com/nearai/ironclaw/pull/5149) | Cuts per-call prompt from ~25.8k tokens (91 tool schemas) to avoid NEAR AI 120s request timeout. |
| Multi-tenancy WebUI logs access | [Issue #5179](https://github.com/nearai/ironclaw/issues/5179) / [PR #5199](https://github.com/nearai/ironclaw/pull/5199) | Multi-tenant users blocked from viewing logs in WebUI. Fix PR opened same day. |

**Underlying needs analysis:** The community is clustered around two opposing forces — (1) **scalability/reliability** (context management, decomposition, observability) and (2) **usability gaps** ( bugs, internal messages exposed in chat). The surface appears particularly problematic with 4+ overlapping issues (#4986, #5192, #5196, #5197).

## 5. Bugs & Stability

| Severity | Description | Status |
|---|---|---|
| 🔴 **Critical** | Web/research tasks hang at init — zero LLM calls, 21/147 PinchBench tasks failing daily. Regression from `2b2ccc55→704fcd43`. | [Issue #5139](https://github.com/nearai/ironclaw/issues/5139) — Open, no fix PR yet |
| 🔴 **Critical** | Prompt-safety vocabulary denylist kills agents on bundled skill instructions (clean-setup repro). | [Issue #5169](https://github.com/nearai/ironclaw/issues/5169) — Open |
| 🟠 **High** | NEAR AI MCP product-auth unavailable → Reborn startup fails entirely. | [Issue #5184](https://github.com/nearai/ironclaw/issues/5184) — Open |
| 🟠 **High** | Degraded LLM provider wedges every run for 30+ minutes (no fast-fail). | [PR #5203](https://github.com/nearai/ironclaw/pull/5203) — Fix PR open |
|  **High** | Tool approval "Ask each time" duplicates authorization flow after approval. | [Issue #5196](https://github.com/nearai/ironclaw/issues/5196) — Open |
|  **High** | Denying tool approval triggers additional unrelated approval requests. | [Issue #5192](https://github.com/nearai/ironclaw/issues/5192) — Open |
|  **Medium** | Internal skill activation / context budget messages exposed in chat UI. | [Issue #5191](https://github.com/nearai/ironclaw/issues/5191) — Open |
|  **Medium** | Recurring automation permanently blocked waiting for tool approval. | [Issue #4986](https://github.com/nearai/ironclaw/issues/4986) — Open (8 days) |
|  **Medium** | Disabled tool causes assistant to invoke unrelated tools instead of reporting unavailability. | [Issue #5197](https://github.com/nearai/ironclaw/issues/5197) — Open |
|  **Medium** | Invalid UI bearer token enters app but actions silently fail. | [Issue #5190](https://github.com/nearai/ironclaw/issues/5190) — Open |
| 🟡 **Medium** | Successful tool runs don't show activity details while running (inconsistent with failed runs). | [Issue #5189](https://github.com/nearai/ironclaw/issues/5189) — Open |
| 🟡 **Medium** | Recurring trigger poller hang. | [PR #5202](https://github.com/nearai/ironclaw/pull/5202) — Fix PR open |
| 🟢 **Low** | Nightly E2E pipeline failure (persistent since May 27). | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) — Open (29 days) |

## 6. Feature Requests & Roadmap Signals

**Likely landing in the next release cycle:**

| Feature | Signal Strength | Evidence |
|---|---|---|
| **Memory as a userland extension (provider-neutral)** |  Strong — PR #5163 open, stacked PR #5165 (native memory seeding) depends on it | [PR #5163](https://github.com/nearai/ironclaw/pull/5163), [Issue #5201](https://github.com/nearai/ironclaw/issues/5201) tracks remaining milestones |
| **Progressive tool disclosure / context management** | 🟢 Strong — PR #5149 directly addresses production latency/timeout failures | [PR #5149](https://github.com/nearai/ironclaw/pull/5149) |
| **Fast-fail for degraded LLM providers** | 🟢 Strong — PR #5203 addresses 30+ minute wedge during NEAR AI outage | [PR #5203](https://github.com/nearai/ironclaw/pull/5203) |
| **WebUI tool permissions + auto-approve settings** | 🟡 Moderate — PR #5068 large but long-running (7 days), may be nearing merge | [PR #5068](https://github.com/nearai/ironclaw/pull/5068) |
| **Local service lifecycle backend (systemd/launchd)** |  Moderate — PR #4860 open 11 days, needed for self-hosted deployments | [PR #4860](https://github.com/nearai/ironclaw/pull/4860) |
| **Reborn hosted observability / meaningful logs** |  Moderate — New issue #5182 gaining attention for hosted `serve` operators | [Issue #5182](https://github.com/nearai/ironclaw/issues/5182) |
| **Automation page v2 redesign** | 🟡 Moderate — PR #5084 open, frontend-only redesign | [PR #5084](https://github.com/nearai/ironclaw/pull/5084) |
| **GitHub bug-fix autonomous workflow** | 🔮 Early — Design docs PR #5134 open, proposing autonomous PR-fix loop | [PR #5134](https://github.com/nearai/ironclaw/pull/5134) |

## 7. User Feedback Summary

**Pain points from active users (dogfooding tracker #5119):**

- **Tool permission UX is confusing and unreliable.** Multiple users report that approval flows don't behave intuitively — approvals duplicate, denials cause cascading unrelated approvals, and disabled tools cause the agent to hallucinate alternative tool calls. This is the **single most-reported usability cluster**.
- **Internal orchestration messages leaking into chat** erode trust. Users see budget/skill-activation debug text that should be suppressed.
- **Silent failures with no diagnostics.** When Reborn fails (auth lookup unavailable, bearer token stale, provider degraded), users get no actionable error — just hangs or generic timeouts. The observability issue (#5182) directly addresses this.
- **Multi-tenancy operators cannot debug** because WebUI logs are restricted (#5179).
- **Satisfaction signals:** The high volume of dogfooding reports (#5119 has spawned 10+ issues in one day) shows an engaged internal user base that cares about quality, but the **overlap of tool-permission bugs** suggests this subsystem needs a holistic redesign rather than incremental patches.

## 8. Backlog Watch — Items Needing Attention

| Priority | Item | Age | Concern |
|---|---|---|---|
|  | **[Issue #5139](https://github.com/nearai/ironclaw/issues/5139)** — Reborn web/research init hang | 3 days | No fix PR yet. Blocks 14% of benchmark tasks. Core regression. |
| 🔴 | **[Issue #5169](https://github.com/nearai/ironclaw/issues/5169)** — Prompt-safety denylist false positives | 2 days | Breaks clean-setup deployments. Needs prompt-assembly refactor. |
|  | **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E pipeline failure | 29 days | Close to a month. Test suite may be masking real bugs. |
|  | **[Issue #4986](https://github.com/nearai/ironclaw/issues/4986)** — Recurring automation blocked on tool approval | 9 days | Core automation feature broken. Likely related to permission system. |
|  | **[PR #5068](https://github.com/nearai/ironclaw/pull/5068)** — Tool permissions + auto-approve UI | 7 days open, XL size | Large surface-area PR; needs focused review to land the fixes users are reporting. |
| 🟡 | **[PR #4860](https://github.com/nearai/ironclaw/pull/4860)** — Local service lifecycle backend | 11 days | Important for self-hosted adoption. Review bottleneck? |
|  | **[PR #5137](https://github.com/nearai/ironclaw/pull/5137)** — HTTP middleware kit decomposition | 3 days | Healthy incremental refactor but needs review bandwidth to continue series. |
| 🟡 | **[Issue #4002](https://github.com/nearai/ironclaw/pull/4002)** — Dependabot actions major version bumps (16 PRs) | Multiple open | Security/maintenance hygiene; consider batch-reviewing. |

---

**Overall Health Assessment:** IronClaw is in an aggressive modernization phase — the Reborn architecture refactor (memory lift, CRUD decomposition, context management, activity lifecycle) is ambitious and well-structured (incremental XL PRs). However, **short-term stability is degraded**: the benchmark-breaking prompt-safety bug and the init-hang regression need immediate triage. The tool-permission subsystem is the highest-priority UX debt, with too many overlapping issues suggesting a root-cause fix is warranted. Watch for the #5139 and #5169 fixes as the leading indicators of whether development velocity is outpacing quality assurance.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-25

## 1. Today's Overview

LobsterAI is experiencing a high-intensity stabilization sprint. Over the past 24 hours, 43 PRs were merged or closed against just 1 open issue, indicating the team is clearing a significant backlog of accumulated fixes rather than shipping new features. The work is heavily concentrated on the OpenClaw sub-agent gateway, session lifecycle reliability, and chat/cowork pipeline correctness. Two active PRs (#2197, #2196) and the lone open issue (#1394, stale) suggest most critical paths have been addressed. No new releases were published today, pointing to an upcoming batch release once this wave of fixes is fully validated.

## 2. Releases

No new releases in the last 24 hours. Given the volume and nature of merged PRs (gateway stability, session freezing, token burn prevention), a patch release appears imminent.

## 3. Project Progress

**OpenClaw Gateway & Sub-Agent Stability** — The dominant theme of the day's merges:

- **#2197** — Deduplicates assistant prefix segments in fallback history paths, preventing repeated final answers after missed `chat.final` events. ([link](https://github.com/netease-youdao/LobsterAI/pull/2197))
- **#2196 / #2195** — Fix how Electron spawns OpenClaw on macOS/Linux by keeping the utilityProcess path while using `ELECTRON_RUN_AS_NODE` scoped to shell snapshots, eliminating false app-path interpretations during plan mode. ([link](https://github.com/netease-youdao/LobsterAI/pull/2196))
- **#2049** — Addresses a critical token-burn bug where aborted tool loops replayed thousands of `Aborted` results without terminating, adding the missing upstream aborted-loop breaker. ([link](https://github.com/netease-youdao/LobsterAI/pull/2049))
- **#2047** — Resolves session freezing, a recurring user-facing pain point. ([link](https://github.com/netease-youdao/LobsterAI/pull/2047))
- **#2050** — Prevents `gateway sessions.patch` timeouts from blocking `chat.send`, improving UI responsiveness. ([link](https://github.com/netease-youdao/LobsterAI/pull/2050))
- **#2051** — Refines the tool loop breaker introduced earlier (#2049), suggesting iterative hardening. ([link](https://github.com/netease-youdao/LobsterAI/pull/2051))

**Chat, Cowork & Messaging Pipeline:**

- **#2078** — Architectural change: emits selected-skill routing metadata instead of inlining prompts, a meaningful step toward cleaner SKU/cowork orchestration. ([link](https://github.com/netease-youdao/LobsterAI/pull/2078))
- **#2063** — Scopes reply assembly to current turn in IM and strips thinking blocks, preventing cross-turn contamination. ([link](https://github.com/netease-youdao/LobsterAI/pull/2063))
- **#2058** — Tightens grace period for short final responses after large tool results, improving perceived latency. ([link](https://github.com/netease-youdao/LobsterAI/pull/2058))
- **#2043** — Fixes gateway restarts triggered by GitHub Copilot token refresh. ([link](https://github.com/netease-youdao/LobsterAI/pull/2043))
- **#2044** — Prevents subagent cleanup finalize from blocking on hook failure. ([link](https://github.com/netease-youdao/LobsterAI/pull/2044))
- **#2048** — Filters empty data from LLM streaming output, reducing UI glitches. ([link](https://github.com/netease-youdao/LobsterAI/pull/2048))

**App & Model Config:**

- **#2057** — Replaces deprecated VBScript launcher with hidden PowerShell for app updates. ([link](https://github.com/netease-youdao/LobsterAI/pull/2057))
- **#2089** — Adds MiniMax M3 model support; updates BYOK model default context windows. ([link](https://github.com/netease-youdao/LobsterAI/pull/2089))
- **#2102** — Preserves user-configured context windows and adds mimo v2.5 models. ([link](https://github.com/netease-youdao/LobsterAI/pull/2102))
- **#2053** — Model select UI fix. ([link](https://github.com/netease-youdao/LobsterAI/pull/2053))
- **#2088** — Kits UI update. ([link](https://github.com/netease-youdao/LobsterAI/pull/2088))
- **#2086** — Fixes a Windows-specific WeChat bug during updates/reinstalls. ([link](https://github.com/netease-youdao/LobsterAI/pull/2086))
- **#2082** — Logging additions for debuggability. ([link](https://github.com/netease-youdao/LobsterAI/pull/2082))

## 4. Community Hot Topics

**PR #2049 — Token burn from aborted tool loops ([link](https://github.com/netease-youdao/LobsterAI/pull/2049))**
Users reported continuous idle token consumption. Root cause: runs were stuck looping over thousands of `Aborted` tool results. This is a high-impact cost bug affecting anyone using sub-agent or plan-mode features.

**PR #2047 — Session freezing fix ([link](https://github.com/netease-youdao/LobsterAI/pull/2047))**
A long-standing responsiveness issue. The recurrence of session-freeze-adjacent fixes (#2047, #2050) suggests the gateway↔chat lifecycle boundary remains fragile.

**Issue #1394 — Non-recurring scheduled tasks auto-deleted after execution ([link](https://github.com/netease-youdao/LobsterAI/issues/1394))**
Users expect to edit and reuse one-shot tasks, but the system permanently deletes them after the first run. This reflects a UX-design mismatch: the "do not repeat" flag currently conflates "run once ever" with "schedule manually, no recurrence."

## 5. Bugs & Stability

| Severity | Description | Status |
|---|---|---|
| 🔴 Critical | Aborted tool loops burning infinite tokens (#2049) | ✅ Fixed (PRs #2049, #2051) |
| 🔴 Critical | Gateway restart on Copilot token refresh (#2043) | ✅ Fixed |
| 🔴 High | Session freezing in chat/cowork (#2047) | ✅ Fixed |
| 🟠 High | Electron spawn misinterpreting Node args as app paths on macOS/Linux (#2195, #2196) | ✅ Fixed (active PRs) |
| 🟠 High | Duplicate assistant prefix in final output after history fallback (#2197) | ✅ Fixed (active PR) |
| 🟡 Medium | Subagent cleanup blocking on hook failure (#2044) | ✅ Fixed |
| 🟡 Medium | `sessions.patch` timeouts blocking `chat.send` (#2050) | ✅ Fixed |
| 🟡 Medium | Empty streaming data causing UI glitches (#2048) | ✅ Fixed |
| 🟡 Medium | VBScript launcher deprecated on Windows (#2057) | ✅ Fixed |
| 🟡 Medium | WeChat Windows update/reinstall bug (#2086) | ✅ Fixed |
| 🟠 High | Non-recurring scheduled tasks auto-deleted (#1394) | ⏳ Open (stale) |

**Stability Assessment:** The project appears to have passed through a rough patch of sub-agent reliability issues and is now in a cleanup/fix-landing phase. The sheer volume of merges (43) in 24h suggests these PRs were authored over the preceding weeks and landed in a batch.

## 6. Feature Requests & Roadmap Signals

- **MiniMax M3 support** (#2089) and **mimo v2.5** (#2102) — The team is actively expanding model provider compatibility. Expect continued BYOK-focused additions.
- **Skill routing metadata** (#2078) — Moving from prompt inlining to structured routing signals a move toward a more modular skills framework. This could become the foundation for a plugin or skill marketplace.
- **Issue #1394** — The requested behavior (don't auto-delete one-shot tasks) is a straightforward UX fix that could ship in the next minor version.
- **Windows PowerShell migration** (#2057) — Part of an ongoing tech-debt cleanup for the Windows platform, likely to be a recurring theme.

## 7. User Feedback Summary

- **Dissatisfaction:** Users hitting the token-burn bug (#2049) experienced runaway costs — the "idle but burning tokens" scenario is particularly alarming for a desktop AI assistant. Session freezing and gateway restarts compound frustration.
- **Expectation mismatch:** Issue #1394 reveals that users think of "non-recurring" tasks as manually-triggered one-shots they can reuse, not as single-execution-and-destroy. The current design silently removes user data.
- **Platform pain:** Windows-specific issues (WeChat reinstall, VBScript deprecation) show the team is investing in cross-platform parity, though Windows remains the weaker surface.
- **Positive signal:** The team (primarily contributor **fisherdaddy** with ~15 merged PRs in this batch) is responsive — complex fixes for sub-agent lifecycle, streaming, and plan-mode are being addressed systematically, not piecemeal.

## 8. Backlog Watch

- **[OPEN] Issue #1394** — Scheduled task auto-deletion ([link](https://github.com/netease-youdao/LobsterAI/issues/1394)). Marked stale but represents a real UX issue. Needs triage or closure with a workaround. Last activity: 2026-06-24.
- **No stalled PRs** — All 43 PRs in the window are closed/merged. The two active PRs (#2197, #2196) appear to be part of the same fix chain.
- **General concern:** The absence of *new* issues despite heavy merging suggests either very effective proactive communication or low community reporting. Monitor whether this batch release generates new bug reports once deployed.

---

*Generated by OWL — 2026-06-25 | Data source: github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (tinyagi) Project Digest — 2026-06-25

**Repository:** [github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)

---

## 1. Today's Overview

TinyClaw saw minimal activity over the past 24 hours, with no new issues filed and a single pull request merged. The project appears to be in a low-activity maintenance phase, with no new releases cut recently. The sole merged PR addresses cross-platform compatibility, suggesting the maintainer is focused on broadening OS support rather than feature development. Overall project health appears stable — no critical bugs are open and no regressions have been reported. However, the lack of new issues, PRs, or releases may indicate either a quiet period or reduced community engagement.

---

## 2. Releases

No new releases in the reporting period. The latest release information is not available in the current data; no version tags or changelog entries were published today.

---

## 3. Project Progress

| PR | Status | Summary |
|---|---|---|
| [#281](https://github.com/TinyAGI/tinyagi/pull/281) — *fix: Windows cross-platform support in CLI* | ✅ Merged (2026-06-24) | Resolves three Windows-native (non-WSL) bugs in the `tinyagi` CLI, including a doubled drive letter issue causing `MODULE_NOT_FOUND` errors via `new URL('.', import.meta.url).pathname` on Windows. |

This is a meaningful compatibility fix that removes a barrier for Windows developers who want to run TinyClaw without WSL, expanding the potential user base.

---

## 4. Community Hot Topics

No issues or PRs with significant comment/reaction activity were recorded in the past 24 hours. The repository currently has **0 open issues** and **0 open PRs**, indicating no active community discussion threads at this time.

---

## 5. Bugs & Stability

| Severity | Bug | Status | Fix PR |
|---|---|---|---|
| 🔴 High | Windows `MODULE_NOT_FOUND` due to doubled drive letter in path resolution | ✅ Fixed | [#281](https://github.com/TinyAGI/tinyagi/pull/281) |
| 🟡 Medium | Two additional Windows-only CLI bugs (details in PR #281) | ✅ Fixed | [#281](https://github.com/TinyAGI/tinyagi/pull/281) |

All reported bugs from this cycle have been resolved. No new crash reports or regressions have been filed.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. The merged Windows compatibility PR suggests the project's near-term roadmap includes **cross-platform CLI reliability**. Potential signals for upcoming work:

- **Expanded Windows testing/CI** — the fix implies Windows support is a priority; expect CI pipeline additions.
- **CLI robustness** — path-resolution fixes often precede broader CLI feature work.

No explicit roadmap items or milestone tags are visible in the current data.

---

## 7. User Feedback Summary

No new user feedback was recorded in the past 24 hours. The Windows compatibility fix in PR #281 implies that **Windows users encountered friction running the CLI natively**, which was a documented pain point. The fact that this was addressed (rather than deferred) suggests the maintainer considers cross-platform support a priority. No satisfaction or dissatisfaction signals beyond this are available.

---

## 8. Backlog Watch

| Item | Age | Concern Level |
|---|---|---|
| No open issues or PRs | N/A | 🟢 Clear backlog |

The repository currently has a **clean backlog** — zero open issues and zero open PRs. This is positive for maintainability but may also reflect low community volume rather than rapid triage. No long-unanswered items require maintainer attention at this time.

---

### Summary Verdict

🟢 **Stable / Low Activity** — TinyClaw is in a quiet but healthy state. The Windows CLI fix is a solid maintenance contribution that improves accessibility. The main risk to watch is whether low issue/PR volume reflects a disengaged community or simply a stable product.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-25

**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview

CoPaw shows **high development activity** today with 23 issues updated (14 open, 9 closed) and 50 pull requests touched (44 open, 6 merged/closed). No new releases were published. The project is in an active iteration cycle around the AgentScope 2.0 migration, with significant work on frontend rendering fixes, provider compatibility, TUI improvements, and plugin system enhancements. The volume of open PRs (44) signals a feature-rich pipeline queuing for the next release.

---

## 2. Releases

**None today.** The latest published version remains **v1.1.12.post2** (pip). Multiple PRs in the pipeline suggest a meaningful update is being assembled but has not yet been cut.

---

## 3. Project Progress

### Merged / Closed PRs (6 items)

| PR | Author | Description |
|---|---|---|
| [#5498](https://github.com/agentscope-ai/CoPaw/pull/5498) | lecheng2018 | Moved `Current date` from static env context to per-user-message dynamic prefix (fixes #5455) |
| [#5476](https://github.com/agentscope-ai/CoPaw/pull/5476) | dynamic2000liang | Mobile agent switcher not working — closed (likely resolved) |
| [#5358](https://github.com/agentscope-ai/CoPaw/pull/5358) | yaozy2020 | TypeError on session switch in embedded console — closed |
| [#5439](https://github.com/agentscope-ai/CoPaw/pull/5439) | w409401768 | Memory usage 1.4GB at startup — closed without resolution |
| [#5177](https://github.com/agentscope-ai/CoPaw/pull/5177) | Nioolek | DingTalk sessions not showing in console — closed |
| [#5015](https://github.com/agentscope-ai/CoPaw/pull/5015) | rescodexx | Windows desktop frontend lag on v1.1.11 — closed |

### Key Open PRs Gaining Traction

- **[#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)** — `feat(context): scroll context manager` — A retrieval-driven alternative to native compression; persists full conversation to SQLite with on-demand recall via Python REPL. First-time contributor, under review.
- **[#5448](https://github.com/agentscope-ai/CoPaw/pull/5448)** — `feat(tui): support project-scoped code sessions` — Binds TUI/ACP sessions to Coding Mode project directories.
- **[#5443](https://github.com/agentscope-ai/CoPaw/pull/5443)** — `fix(tui): restore ACP commands and inline approvals` — Post-AgentScope 2.0 migration fix for TUI slash commands.
- **[#5495](https://github.com/agentscope-ai/CoPaw/pull/5495)** — `fix(runtime): align envelope event translation with v1 streaming protocol` — Fixes broken tool call rendering in frontend after 2.0 migration.
- **[#5493](https://github.com/agentscope-ai/CoPaw/pull/5493)** — `fix(token_usage): restore chat token/context usage ring & popover under agentscope 2.0` — Restores a feature that broke during migration.
- **[#5496](https://github.com/agentscope-ai/CoPaw/pull/5496)** — `fix: inline $ref/$defs in tool schemas for GLM model compatibility` — Fixes GLM-5.x failures via OpenCode Go.
- **[#5492](https://github.com/agentscope-ai/CoPaw/pull/5492)** — `feat(plugins): support installing plugins via pip from PyPI` — Adds entry-point-based plugin discovery.
- **[#5491](https://github.com/agentscope-ai/CoPaw/pull/5491)** — `fix(dashscope): honour extra_body generate_kwargs` — Back-compat mapping for DashScope provider config migration.
- **[#5494](https://github.com/agentscope-ai/CoPaw/pull/5494)** — `fix(cron): cron session visibility, memory isolation and hot-reload stability`
- **[#5210](https://github.com/agentscope-ai/CoPaw/pull/5210)** — `feat(cli): add cron update command` — Adds `qwenpaw cron update <job_id>` subcommand.
- **[#4669](https://github.com/agentscope-ai/CoPaw/pull/4669)** — `feat(desktop): add tauri auto updater` — Desktop auto-update flow (open since May 25).

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

1. **[#5345](https://github.com/agentscope-ai/CoPaw/issues/5345)** — 8 comments — **Custom OpenAI-compatible providers (OMLX) don't support function calling.** User verified OMLX works on Reasonix but QwenPaw's custom provider only returns text without tool invocations. This is a significant interoperability gap for the extensibility story.

2. **[#5317](https://github.com/agentscope-ai/CoPaw/issues/5317)** — 6 comments — **Tauri desktop app can't find Python after conda setup change.** Skills relying on Python scripts fail in the Tauri-bundled environment. Pain point for desktop users with complex local setups.

3. **[#5264](https://github.com/agentscope-ai/CoPaw/issues/5264)** — 5 comments — **Feishu group chat replies sent to private DM instead of group.** A session routing bug triggered when a user has both an active DM and group chat session simultaneously. Critical for multi-channel deployments.

4. **[#5379](https://github.com/agentscope-ai/CoPaw/issues/5379)** — 5 comments — **Internal Server Error after fresh Python install on Windows.** `get_remote_addr(transport)` error. Blocks new users entirely on Windows.

5. **[#5441](https://github.com/agentscope-ai/CoPaw/issues/5441)** — 3 comments — **1.4GB memory usage at startup with no tasks running.** Performance concern that affects deployment on resource-constrained environments.

### Emerging Themes

- **AgentScope 2.0 migration regressions** are the dominant source of bugs (token display, tool rendering, envelope translation, TUI commands).
- **Provider compatibility** is a recurring pain point — GLM, DashScope, Kimi, and custom OpenAI-compatible APIs all have issues.
- **Frontend rendering fragility** — large sessions crash the UI, long messages break layout, session switching causes TypeErrors.

---

## 5. Bugs & Stability

### Critical (blocks usage)

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#5379](https://github.com/agentscope-ai/CoPaw/issues/5379) — Internal Server Error on Windows fresh install | 🔴 Critical | Open | None |
| [#5264](https://github.com/agentscope-ai/CoPaw/issues/5264) — Feishu group replies routed to DM | 🔴 Critical | Closed (unresolved?) | None visible |
| [#5401](https://github.com/agentscope-ai/CoPaw/issues/5401) — Console crashes on sessions with large tool-use history | 🔴 Critical | Open | None |

### High (significant functionality broken)

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) — Custom providers lack function calling | 🟠 High | Open | None |
| [#5479](https://github.com/agentscope-ai/CoPaw/issues/5479) — Sessions >500KB crash frontend renderer | 🟠 High | Open | None |
| [#5480](https://github.com/agentscope-ai/CoPaw/issues/5480) — Long message layout corruption (CSS recalc missing) | 🟠 High | Open | None |
| [#5472](https://github.com/agentscope-ai/CoPaw/issues/5472) — GLM-5.x fails with json_schema_converter error | 🟠 High | Open | [#5496](https://github.com/agentscope-ai/CoPaw/pull/5496) |
| [#5456](https://github.com/agentscope-ai/CoPaw/issues/5456) — Wrong agent identity for channel-built requests | 🟠 High | Open | None |

### Medium

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#5373](https://github.com/agentscope-ai/CoPaw/issues/5373) — Shell tool fails on special characters (pipes, redirection) | 🟡 Medium | Closed | None visible |
| [#5474](https://github.com/agentscope-ai/CoPaw/issues/5474) — Invalid YAML front matter in Skill ZIP causes silent success | 🟡 Medium | Open | None |
| [#5497](https://github.com/agentscope-ai/CoPaw/issues/5497) — Blank white page on air-gapped Windows install | 🟡 Medium | Open | None |
| [#5441](https://github.com/agentscope-ai/CoPaw/issues/5441) — 1.4GB memory at startup | 🟡 Medium | Closed | None |

### Fix PRs Already In Flight

- **GLM-5.x compatibility** → PR [#5496](https://github.com/agentscope-ai/CoPaw/pull/5496) (inline $ref/$defs)
- **Tool call rendering in frontend** → PR [#5495](https://github.com/agentscope-ai/CoPaw/pull/5495) (envelope event translation)
- **Token usage display** → PR [#5493](https://github.com/agentscope-ai/CoPaw/pull/5493) (AgentScope 2.0 adaptation)
- **DashScope config back-compat** → PR [#5491](https://github.com/agentscope-ai/CoPaw/pull/5491)
- **Cron stability** → PR [#5494](https://github.com/agentscope-ai/CoPaw/pull/5494)

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Release (strong PR momentum)

| Feature | PR | Signal |
|---|---|---|
| **Plugin installation via pip/PyPI** | [#5492](https://github.com/agentscope-ai/CoPaw/pull/5492) | Mature PR, first-time contributor, clean implementation |
| **Scroll context manager (SQLite-backed history)** | [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) | Under review, significant architectural addition |
| **TUI project-scoped code sessions** | [#5448](https://github.com/agentscope-ai/CoPaw/pull/5448) | Active, addresses Coding Mode workflow |
| **Cron update CLI command** | [#5210](https://github.com/agentscope-ai/CoPaw/pull/5210) | Closes long-standing feature request #4939 |
| **Tauri desktop auto-updater** | [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) | Open since May, needs review attention |
| **OpenAI response format support** | [#5489](https://github.com/agentscope-ai/CoPaw/issues/5489) | New request, tagged enhancement |
| **Kimi Coding Plan Models (Anthropic-compatible endpoint)** | [#5427](https://github.com/agentscope-ai/CoPaw/issues/5427) | New request, provider expansion |
| **MCP tool name display optimization** | [#5231](https://github.com/agentscope-ai/CoPaw/issues/5231) | Enhancement, UX polish |

### Architectural Signals

- The **scroll context manager** ([[#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)]) represents a major architectural shift — moving from in-memory summarization to durable SQLite-backed retrieval. This could become a core differentiator.
- **Plugin pip installation** ([[#5492](https://github.com/agentscope-ai/CoPaw/pull/5492)]) signals a maturing plugin ecosystem moving toward standard Python packaging conventions.
- Multiple **AgentScope 2.0 migration fix PRs** suggest the team is systematically addressing regression debt from the major runtime upgrade.

---

## 7. User Feedback Summary

### Pain Points

1. **AgentScope 2.0 migration broke multiple features** — Users report token display missing, tool calls rendering incorrectly, TUI commands broken, and envelope translation misaligned. The migration clearly introduced regressions that are still being patched.

2. **Provider compatibility is a persistent frustration** — GLM, DashScope, Kimi, and custom OpenAI-compatible APIs all have reported issues. Users expect "OpenAI-compatible" to mean fully compatible, but function calling and schema handling gaps break that assumption.

3. **Frontend fragility with large/complex sessions** — Sessions over 500KB crash the UI, long messages break layout, and session switching causes TypeErrors. Power users with long conversation histories are most affected.

4. **Windows deployment issues** — Fresh installs produce Internal Server Error, air-gapped environments show blank pages, and the Tauri app can't locate Python. Windows users face multiple barriers.

5. **Memory consumption** — 1.4GB at startup is concerning for users running on modest hardware or in containerized environments.

### Satisfaction Indicators

- Active first-time contributors (PRs [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321), [#5492](https://github.com/agentscope-ai/CoPaw/pull/5492), [#5210](https://github.com/agentscope-ai/CoPaw/pull/5210)) suggest a healthy contributor pipeline.
- Detailed bug reports with logs and reproduction steps (e.g., #5264, #5345) indicate an engaged, technical user base.
- Feature requests are specific and actionable (Kimi Anthropic endpoint, pip plugins, cron update CLI), showing users understand the codebase and want to extend it.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Concern |
|---|---|---|
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) — Custom providers lack function calling | 5 days, 8 comments | High engagement, no assignee or fix PR. Core extensibility promise broken. |
| [#5401](https://github.com/agentscope-ai/CoPaw/issues/5401) — Console crashes on large tool-use sessions | 2 days | Blocks power users, no fix PR yet. |
| [#5479](https://github.com/agentscope-ai/CoPaw/issues/5479) — Sessions >500KB crash frontend | 1 day | Data-loss scenario (users must delete sessions). |
| [#5456](https://github.com/agentscope-ai/CoPaw/issues/5456) — Wrong agent identity for channel requests | 2 days | Architectural bug in AgentScope 2.0's `AgentRequest`. |
| [#5441](https://github.com/agentscope-ai/CoPaw/issues/5441) — 1.4GB memory at startup | 2 days, closed | Closed without resolution — needs investigation or explanation. |
| [#5497](https://github.com/agentscope-ai/CoPaw/issues/5497) — Blank page on air-gapped install | 1 day | Enterprise/air-gapped users blocked. |

### Stale PRs at Risk of Stalling

| PR | Open Since | Risk |
|---|---|---|
| [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) — Tauri auto updater | May 25 (31 days) | Long-running, may need rebase or maintainer feedback. |
| [#5210](https://github.com/agentscope-ai/CoPaw/pull/5210) — Cron update command | ~10 days | First-time contributor, under review but slow. |
| [#5213](https://github.com/agentscope-ai/CoPaw/pull/5213) — MCP access policy layout | ~9 days | UI polish, may be deprioritized. |

---

### Health Assessment

| Dimension | Status | Notes |
|---|---|---|
| **Activity** | 🟢 High | 50 PRs, 23 issues — very active day |
| **Stability** | 🟡 Caution | Multiple critical bugs, AgentScope 2.0 regressions being patched |
| **Community** | 🟢 Healthy | First-time contributors, detailed reports, specific feature requests |
| **Release Cadence** | 🟡 Unclear | No releases today; pipeline is full but no cut yet |
| **Windows Support** | 🟠 Weak | Multiple Windows-specific bugs, no dedicated fixes |
| **Provider Ecosystem** | 🟡 Improving | Fix PRs for GLM, DashScope in flight; custom provider gap unaddressed |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-25

## 1. Today's Overview

ZeroClaw is experiencing a surge of high-activity development, with 50 issues and 50 PRs updated in the last 24 hours — a sign of a rapidly scaling contributor base and an ambitious v0.9.0 roadmap. The project is heavily focused on **security hardening** (RBAC, OIDC, supply-chain signing, per-agent MCP scoping), **multi-tenancy**, and **WASM plugin architecture**. No new releases shipped today, but multiple large, accepted RFCs and merged PRs indicate the project is deep in the v0.8.3 → v0.9.0 stabilization and feature-landing phase. Several high-priority bugs around credential bleed and process leaks are actively being addressed.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

### Merged / Closed PRs (4 total)

| PR | Author | Description |
|---|---|---|
| [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) | Yyukan | **fix(runtime): wire mcp_bundles into agent loop** — Enforces per-agent MCP server scoping at runtime. Previously `mcp_bundles` was schema-only; all agents got all MCP servers regardless of config. Critical security fix. |
| [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) (closed via PR) | singlerider | **fix: deferred image attachment loses re-loadable reference in cached history** — Matrix channel bug where the bot would acknowledge but later deny seeing an image. S1 severity. |
| [#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075) (closed) | tidux | **Keybinds vs. OS globals** — Discussion resolved; ZeroCode TUI keybinding conflicts on macOS documented. |
| [#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) (closed) | singlerider | **Auto-set risk profile to yolo in quickstart** — Accepted; mirrors the forced-unbounded runtime pattern for better onboarding UX. |

### Active PRs of Note

- **[#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304)** — feat(sop): out-of-band approval plane with fail-closed timeout. Major security/architecture work by Nillth.
- **[#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)** — feat(gateway): in-app upgrade with auto-restart from web dashboard. High UX value.
- **[#8264](https://github.com/zeroclaw-labs/zeroclaw/pull/8264)** — feat(plugins): registry search and install by name. Ecosystem growth enabler.
- **[#8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233)** — feat(cost): fill unpriced models from live gateway pricing. Fixes silent zero-cost recording.
- **[#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928)** — feat(wasi): initial WASM component-model plugin host. Foundational architecture work (XL size).
- **[#8261](https://github.com/zeroclaw-labs/zeroclaw/pull/8261)** — feat(skills): opt-in bounded SKILL.md reflection for skill creation. Meta-agent capability.

## 4. Community Hot Topics

### Top Issues by Engagement

1. **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** — Per-sender RBAC for multi-tenant agent deployments (9 comments, P2, accepted). Users need isolated workspaces, tool sets, rate limits, and system prompts per user class. This is the most commented-open issue, reflecting strong demand from multi-tenant operators.

2. **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — OIDC Authentication Provider support (6 comments, P1, accepted, RFC). Umbrella tracking issue for pluggable auth. Child issues (#8076 local username/password AuthProvider) are already spinning off. Signals enterprise adoption pressure.

3. **[#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)** — Prompt-triggered install suggestions for missing skills/plugins (5 comments, P2, accepted). Discovery friction for the growing plugin ecosystem.

4. **[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** — Supply chain signing: hardware PGP, hermetic builds, SLSA provenance (5 comments, P2, RFC). New RFC from ConYel expanding Phase 3 of #7675.

5. **[#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551)** — Allow insecure HTTPS to OpenAI-compatible endpoints (5 comments, closed as wontfix). User frustration: self-signed certs are common in self-hosted deployments. Closed without resolution — potential community friction point.

### Underlying Needs Analysis

The dominant theme is **enterprise readiness**: RBAC, OIDC, supply-chain signing, and per-agent isolation all point to demand from organizations running ZeroClaw as a shared platform. The second theme is **ecosystem discoverability** — as skills and plugins multiply, users need better install-time guidance. The third is **multi-tenancy** — multiple issues (#5982, #8226, #7733) converge on the need to safely serve multiple user classes from a single instance.

## 5. Bugs & Stability

### Active / High-Severity Bugs

| # | Severity | Issue | Status | Fix PR? |
|---|---|---|---|---|
| S1 | [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) | Deferred image attachment loses reference in cached history (Matrix) | **Closed** | Fixed |
| S2 | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` parsed but never enforced at runtime — silent no-op | Accepted | [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) merged |
| S2 | [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio child processes accumulate/orphan per heartbeat tick (~48/day) | Accepted, no-stale | None yet |
| S2 | [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) | Delegate to Codex/OAuth sub-agent still fails — `resolve_brain` forwards coordinator's API key | In-progress | None yet |
| S2 | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | Code help/keybindings misleading or unreachable on macOS (ZeroCode TUI) | Accepted | None yet |
| — | [#8302](https://github.com/zeroclaw-labs/zeroclaw/issues/8302) | MCP servers not shown in dashboard tools list when first agent has no `mcp_bundles` | Open | [#8305](https://github.com/zeroclaw-labs/zeroclaw/pull/8305) open |

### Security-Relevant Issues

- **[#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044)** — `/model --agent` scope lacks per-sender authorization. Any sender can change the effective model for all users. P1, accepted.
- **[#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551)** — Closed as wontfix: no option to ignore SSL or import self-signed CA for OpenAI-compatible endpoints. S0-tagged by reporter but closed without fix.

**Stability assessment**: The MCP stdio orphan process leak (#5903) is a long-running issue (created 2026-04-19) that affects all daemon deployments with stdio MCP servers. It deserves urgent attention. The credential bleed in delegate sub-agents (#7623) is also a critical multi-tenant blocker.

## 6. Feature Requests & Roadmap Signals

### Likely in v0.9.0 (Accepted, Active PRs)

| Feature | Issue | Signal |
|---|---|---|
| OIDC Auth Provider | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | P1 RFC, accepted, child PRs landing |
| Local username/password AuthProvider | [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) | Child of #7141, accepted |
| In-app gateway upgrade + auto-restart | [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) | L-size PR, near merge |
| Out-of-band SOP approval plane | [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) | L-size PR, fresh |
| Plugin registry search + install by name | [#8264](https://github.com/zeroclaw-labs/zeroclaw/pull/8264) | L-size PR, fresh |
| Live pricing for unpriced models | [#8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233) | L-size PR, addresses cost tracking gap |
| Bounded SKILL.md reflection | [#8261](https://github.com/zeroclaw-labs/zeroclaw/pull/8261) | L-size PR, meta-agent feature |
| Auto-truncate stale session history | [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) | In-progress, P2 |
| Telegram webhook mode | [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | Accepted, addresses NAT traversal |

### Emerging / Speculative

- **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — "Goal mode" for bounded autonomous session work. New RFC (created today). Would add a first-class durable mode for pursuing user objectives. Ambitious; likely v1.0+.
- **[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)** — WASM plugin lifecycle hook subscriptions. Extends the plugin architecture.
- **[#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)** — Deconflict Plugin System Goals in FND-001 (replace Extism with wasmtime component model). Architectural cleanup.
- **[#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078)** — Zerocode pre-submission gate (local CI enforcement). Developer experience improvement.

## 7. User Feedback Summary

### Pain Points

1. **Security isolation is incomplete**: Multiple users have filed issues (#7733, #8044, #7623) showing that per-agent scoping, authorization, and credential isolation are either silently broken or missing. This is the #1 concern for multi-tenant and enterprise users.

2. **Onboarding friction**: Users report bad experiences with restrictive default risk profiles (#8125) and difficulty discovering/installing skills (#6289). The quickstart experience needs smoothing.

3. **Self-hosted deployment friction**: The closed #551 (self-signed cert support, wontfix) and the demand for IdP-less auth (#8076) show that self-hosted and enterprise users feel underserved by the current auth/SSL model.

4. **Process reliability**: The MCP stdio orphan leak (#5903) has been open for over two months. For users running daemons with stdio MCP servers, this is a ticking time bomb.

5. **Cost tracking gaps**: Unpriced models silently recording $0.00 (#8233) means operators can't enforce budgets accurately.

### Satisfaction Signals

- The volume of high-quality RFCs and L/XL PRs from non-maintainers suggests strong community investment.
- Issues are well-labeled (risk, priority, domain, status), indicating healthy triage.
- Multiple contributors are closing the loop between RFC → implementation PR rapidly (e.g., #7141 → #8076, #7675 → #8058/#8059).

## 8. Backlog Watch

### Long-Open, High-Impact Items Needing Attention

| Issue | Age | Status | Concern |
|---|---|---|---|
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) — MCP stdio orphan process leak | 67 days | Accepted, no-stale | No fix PR after 2+ months. Affects all daemon+stdio deployments. |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — Per-sender RBAC | 94 days | Accepted | Most-commented open issue. No linked implementation PR visible. |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) — Pre-hook skip gates for cron/SOP | 76 days | Blocked, accepted | Blocked status; unclear what's blocking. |
| [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) — Extract auth middleware for /api/config and /api/onboard | 85 days | Accepted, no-stale | P1 security hygiene; should be straightforward. |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) — Hybrid skills + WASM tools | 90 days | Accepted, no-stale | Plugin ecosystem depends on this. |
| [#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262) — ZeroClaw logo on Agent Skills client list | 113 days | In-progress | Low priority but very old; either close or ship. |

### PRs Needing Maintainer Review

- **[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** (RFC) — Supply chain signing. Flagged `needs-maintainer-review`. High complexity.
- **[#8138](https://github.com/zeroclaw-labs/zeroclaw/pull/8138)** — OpenRouter model fallbacks. Flagged `needs-maintainer-review`. P2, straightforward feature.
- **[#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)** — In-app upgrade. L-size, touches gateway restart logic. Needs careful review.
- **[#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928)** — WASM component-model plugin host. XL-size, foundational architecture. Highest review burden.

---

**Overall Health Assessment**: ZeroClaw is in a high-velocity development phase with strong community contribution. The primary risk is **security debt accumulation** — multiple accepted issues around isolation and auth are still unimplemented. The secondary risk is **review bandwidth** — 50 open PRs, several XL-size, with a small maintainer surface (evidenced by `needs-maintainer-review` flags). Prioritizing the MCP stdio leak fix (#5903) and the auth middleware cleanup (#6250) would address the most urgent stability and security concerns while the larger RFCs mature.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*