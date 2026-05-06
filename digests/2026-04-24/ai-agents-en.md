# OpenClaw Ecosystem Digest 2026-04-24

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-24 00:18 UTC

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

# OpenClaw Project Digest — 2026-04-24

---

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a project in rapid development with significant community engagement. The 356:144 open-to-closed issue ratio and 318:182 open-to-merged PR ratio suggest the project is accumulating backlog faster than it resolves items—a potential health concern. The release of v2026.4.22 with substantial xAI provider expansions demonstrates active feature delivery, while a cluster of critical installation regressions in v2026.4.21 is drawing urgent community attention. The project appears to be navigating growing pains as it scales its plugin/extension architecture and multi-platform support.

---

## 2. Releases

### [v2026.4.22](https://github.com/openclaw/openclaw/releases/tag/v2026.4.22) — openclaw 2026.4.22

**Major xAI Provider Expansion:**

| Capability | Details |
|------------|---------|
| **Image Generation** | `grok-imagine-image`, `grok-imagine-image-pro`, reference-image edits |
| **Text-to-Speech** | 6 live xAI voices, MP3/WAV/PCM/G.711 formats |
| **Speech-to-Text** | `grok-stt` audio transcription |
| **Realtime** | xAI realtime transcription |

**Assessment:** No breaking changes documented; appears to be additive. Users on v2026.4.21 experiencing installation regressions should prioritize upgrading.

---

## 3. Project Progress

### Merged/Closed PRs (Key Items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#70488](https://github.com/openclaw/openclaw/pull/70488) | ottodeng | Azure OpenAI image generation routing fix | Fixes broken `gpt-image-2` on Azure endpoints |
| [#70503](https://github.com/openclaw/openclaw/pull/70503) | ottodeng | Expose `gpt-image-2` quality/output_format/background/moderation knobs | Production usability for image generation |
| [#70832](https://github.com/openclaw/openclaw/pull/70832) | ayesha-aziz123 | Fix cron timeout result overwrite race | Reliability: timeout failures no longer silently lost |
| [#70741](https://github.com/openclaw/openclaw/pull/70741) | Patrick-Erichsen | Paired device token auth for assistant media | Security/usability fix for Control UI |
| [#70298](https://github.com/openclaw/openclaw/pull/70298) | HFConsultant | Atomic store helper for CLI session clearing | Fixes stale session ID survival bug |
| [#46325](https://github.com/openclaw/openclaw/pull/46325) | dt-chenwenxiong | OpenAI-compatible image format for OpenRouter | Restores multimodal for OpenRouter users |
| [#50492](https://github.com/openclaw/openclaw/pull/50492) | mculp | OpenRouter media-understanding provider | Enables vision models via OpenRouter |
| [#56678](https://github.com/openclaw/openclaw/pull/56678) | YoungMoneyInvestments | Normalize `openai-codex`/`github-copilot` provider IDs | Fixes media-understanding registration |
| [#57357](https://github.com/openclaw/openclaw/pull/57357) | Aoiujz | Configurable `image_generate` timeout | User control over slow image providers |
| [#67254](https://github.com/openclaw/openclaw/pull/67254), [#67344](https://github.com/openclaw/openclaw/pull/67344) | Joel-Claw, oliviareid-svg | Respect `allowPrivateNetwork` for Google image generation | Fixes proxy/private network setups |
| [#70096](https://github.com/openclaw/openclaw/issues/70096) | — | v2026.4.21 upgrade incident (closed with fixes) | Doctor --fix and config recovery stabilized |

**In Progress (Open PRs):**
- [#70737](https://github.com/openclaw/openclaw/pull/70737): Decouple managed cron from heartbeat (dreaming/isolated mode fix) — 13 commits, XL size
- [#70765](https://github.com/openclaw/openclaw/pull/70765): Google Meet participant plugin with Twilio voice-call DTMF — major new channel
- [#65972](https://github.com/openclaw/openclaw/pull/65972): Bluesky skill (CLI + MCP server) — social media expansion
- [#70044](https://github.com/openclaw/openclaw/pull/70044): Network-level SSRF protection via Caddy forward proxy — security hardening
- [#70792](https://github.com/openclaw/openclaw/pull/70792): Discord live QA lane — testing infrastructure

---

## 4. Community Hot Topics

### Top Issues by Engagement

| # | Issue | Comments | 👍 | Core Need |
|---|-------|----------|-----|-----------|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | **RFC: Native Agent Identity & Trust Verification** | 102 | 0 | **Decentralized trust infrastructure** — ERC-8004, W3C DID/VC standards for agent-to-agent authentication. Signals enterprise/blockchain adoption demand. |
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows Clawdbot Apps** | 92 | 71 | **Cross-platform parity** — macOS/iOS/Android have native apps; Linux/Windows users excluded. Highest-voted open issue. |
| [#70457](https://github.com/openclaw/openclaw/issues/70457) | npm install missing `@larksuiteoapi/node-sdk`, `nostr-tools` | 26 | 3 | **Installation reliability** — extension dependencies not bundled in global install. |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) | Real-time Voice Conversation Support | 22 | 23 | **Telephony/WebRTC integration** — Twilio bidirectional streaming for phone-like interactions. |
| [#36994](https://github.com/openclaw/openclaw/issues/36994) | Exec and tools keep breaking (regression) | 19 | 1 | **Tool stability** — browser control, exec tools fail after initial success. |

**Underlying Needs Analysis:**
- **Trust/identity** (#49971): Emerging requirement for agent ecosystems with verifiable credentials
- **Platform equity** (#75): Desktop Linux/Windows is a major adoption barrier (71 votes)
- **Installation UX**: Dependency management for optional extensions is fragile (multiple related issues)
- **Real-time modalities**: Voice is becoming table-stakes for personal AI assistants

---

## 5. Bugs & Stability

### Critical/High Severity (Active Today)

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| **🔴 Critical** | [#70457](https://github.com/openclaw/openclaw/issues/70457), [#70198](https://github.com/openclaw/openclaw/issues/70198), [#70292](https://github.com/openclaw/openclaw/issues/70292), [#70346](https://github.com/openclaw/openclaw/issues/70346), [#70587](https://github.com/openclaw/openclaw/issues/70587) | Multiple closed, some open | [#70819](https://github.com/openclaw/openclaw/pull/70819) (symlink trust), various | **v2026.4.21 regression cascade**: Global npm install fails due to missing extension deps (`@larksuiteoapi/node-sdk`, `nostr-tools`). Fresh installs bricked on macOS, Ubuntu, Windows. |
| **🔴 Critical** | [#70096](https://github.com/openclaw/openclaw/issues/70096) | Closed | Multiple | **Upgrade incident**: `doctor --fix` fails, config corruption to invalid minimal state. Recovery path stabilized. |
| **🟠 High** | [#67936](https://github.com/openclaw/openclaw/issues/67936) | Open | — | Matrix channel broken in 2026.4.15 — `Cannot find package 'openclaw'` import error |
| **🟠 High** | [#68735](https://github.com/openclaw/openclaw/issues/68735) | Open | — | LLM request schema rejection with `github-copilot/gpt-5-mini` post-2026.4.15 |
| **🟠 High** | [#53317](https://github.com/openclaw/openclaw/issues/53317) | Open | — | Gateway overwrites fresh OAuth token with stale cache (Codex) |
| **🟠 High** | [#60213](https://github.com/openclaw/openclaw/issues/60213) | Open | — | **Data loss**: Context compaction silently kills session, all memory lost |
| **🟡 Medium** | [#17101](https://github.com/openclaw/openclaw/issues/17101) | Open | — | Telegram voice messages not transcribed (`.ogg`/Opus) |
| **🟡 Medium** | [#51056](https://github.com/openclaw/openclaw/issues/51056) | Open | — | OpenRouter 401 missing auth header |
| **🟡 Medium** | [#18598](https://github.com/openclaw/openclaw/issues/18598) | Open | — | macOS Sequoia isolated Chrome profile download failures |
| **🟡 Medium** | [#67888](https://github.com/openclaw/openclaw/issues/67888) | Open | — | Opus 4.7 adaptive thinking misconfigured, 400 on first turn |

**Regression Pattern:** v2026.4.15–v2026.4.21 releases introduced multiple breaking changes in dependency bundling, provider schemas, and session management. The project appears to need stronger release candidate testing.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signals | Likelihood in Next Version |
|---------|----------|---------|---------------------------|
| **Native Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | 71 votes, long-standing, "help wanted" label | **Medium** — infrastructure exists (macOS shared codebase), resource allocation question |
| **Real-time voice conversations** | [#7200](https://github.com/openclaw/openclaw/issues/7200) | 23 votes, Twilio/WebRTC specified; PR [#70765](https://github.com/openclaw/openclaw/pull/70765) adds Google Meet voice | **High** — Twilio DTMF in progress, WebRTC foundation building |
| **NVIDIA NIM provider** | [#50898](https://github.com/openclaw/openclaw/issues/50898) | 5 votes, enterprise GPU inference demand | **Medium** — provider pattern well-established |
| **Plugin UI Extension System** | [#66944](https://github.com/openclaw/openclaw/issues/66944) | 3 votes, Lit Web Components architecture | **Medium-High** — PR exists, aligns with plugin ecosystem strategy |
| **Unbypassable outbound policy enforcement** | [#56349](https://github.com/openclaw/openclaw/issues/56349) | Security/compliance need | **Medium** — architectural, touches multiple delivery paths |
| **Bluesky integration** | [#65972](https://github.com/openclaw/openclaw/pull/65972) | PR open, MCP server + CLI | **High** — near completion |
| **Google Meet plugin** | [#70765](https://github.com/openclaw/openclaw/pull/70765) | PR open, XL size | **High** — active development |

**Predicted v2026.4.23+ themes:** Voice/telephony hardening, cross-platform desktop parity, social media integrations (Bluesky), security policy enforcement.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Installation fragility** | 5+ issues on npm global install failures; "fresh install bricked" | Critical |
| **Upgrade safety** | #70096: `openclaw update` corrupts config; #63665: update fails with qa scenario pack missing | Critical |
| **Session/data loss** | #60213: compaction kills sessions; #63892: proactive compaction never re-fires; #70050: 20-min startup blocking history | High |
| **Tool reliability** | #36994: "exec and tools keep breaking"; #36651: tools not loading in Telegram | High |
| **OAuth/token management** | #53317: stale token overwrite; #36982: Qwen frequent re-auth | Medium-High |
| **Platform gaps** | #75: No Linux/Windows apps; #39038: Windows node hangs | Medium |

### Use Cases (Positive Signals)

- **Multi-channel deployment**: Telegram, Matrix, Discord, WhatsApp, Webchat all actively used
- **Enterprise integrations**: Feishu/Lark, Microsoft Teams, Google Meet, Azure OpenAI
- **Creative/media workflows**: Image generation (multiple providers), voice synthesis, browser automation
- **Developer tooling**: MCP servers, CLI tools, cron scheduling, memory/wiki bridge

### Satisfaction/Dissatisfaction Balance

**Dissatisfaction dominant in recent releases** — the v2026.4.21 regression cluster has generated significant negative feedback. However, rapid patch delivery (v2026.4.22 + same-day PRs) and active maintainer response (#70819 merged within hours) demonstrates responsive governance that may restore confidence.

---

## 8. Backlog Watch

### Long-Unanswered Critical Items Needing Maintainer Attention

| Issue | Age | Last Update | Risk | Action Needed |
|-------|-----|-------------|------|---------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | ~4 months | 2026-04-23 | **Adoption ceiling** | Resource commitment or community contributor onboarding |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent Identity/Trust RFC | ~1 month | 2026-04-23 | **Ecosystem lock-in** | RFC review, standards alignment decision |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) Real-time voice | ~3 months | 2026-04-23 | **Competitive gap** | Coordinate with PR #70765, define WebRTC vs. Twilio priority |
| [#60213](https://github.com/openclaw/openclaw/issues/60213) Compaction data loss | ~3 weeks | 2026-04-23 | **Data integrity** | Root cause analysis, session persistence architecture review |
| [#52305](https://github.com/openclaw/openclaw/issues/52305) Async task completion lost | ~1 month | 2026-04-23 | **Reliability** | Event routing redesign |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) Heartbeat isolated mode regressions | ~2 weeks | 2026-04-23 | **Core loop stability** | Dedicated debugging, potential revert of 2026.4.10 changes |
| [#63892](https://github.com/openclaw/openclaw/issues/63892) Proactive compaction scheduler stuck | ~2 weeks | 2026-04-23 | **Memory growth** | Scheduler state machine fix |
| [#37633](https://github.com/openclaw/openclaw/issues/37633) Feishu env var resolution | ~7 weeks | 2026-04-23 | **Enterprise integration** | Config loading order fix |

**Stalled PRs:**
- [#51150](https://github.com/openclaw/openclaw/pull/51150) imageModel custom provider fix — open since March 20, blocks custom provider adoption
- [#43793](https://github.com/openclaw/openclaw/pull/43793) TUI reconnect hint — macOS app UX, open since March 12

---

**Digest compiled from:** 500 issues, 500 PRs, 1 release, 50 top issues by comment count, 30 top PRs by comment count.  
**Data source:** github.com/openclaw/openclaw as of 2026-04-24.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-04-24 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense parallel development across 10+ active projects**, with aggregate daily activity exceeding 1,200 issues and PRs. The space has bifurcated into two maturity tiers: **established multi-channel platforms** (OpenClaw, ZeroClaw, Hermes Agent, CoPaw) competing on enterprise integrations and provider breadth, and **emerging specialized agents** (ZeptoClaw, NanoClaw, Moltis) differentiating on edge deployment, security posture, or specific verticals. A critical industry-wide tension persists between **rapid feature expansion** (voice, computer-use, MCP ecosystems) and **stabilization imperatives**—every major project shows regression clusters from insufficient release testing, with installation fragility, provider schema drift, and session data loss as the dominant failure modes.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.22 (xAI expansion) | ⚠️ **Strained** | Rapid growth, backlog accumulating faster than resolution |
| **NanoBot** | 14 | 20 | None (v0.1.5.post2 stale) | ⚠️ **At-risk** | Critical fixes merged but unreleased; RAM/Anthropic regressions unpatched |
| **Hermes Agent** | 50 | 50 | v0.11.0 "The Interface" | ⚠️ **Volatile** | Major TUI rewrite shipped incomplete; P0 security unpatched |
| **PicoClaw** | 36 | 45 | v0.2.7-nightly | 🟡 **Active** | High engagement, maintainer bandwidth constraints; zero issue closures |
| **NanoClaw** | 16 | 27 | None | 🔴 **Incident response** | CSO audit findings; security hardening sprints; Apple Container broken |
| **NullClaw** | 11 | 0 | None | 🔴 **Stalled** | Zero PR activity; new user onboarding crisis; possible maintainer absence |
| **IronClaw** | 37 | 50 | None | 🟡 **Stabilizing** | Engine v2 architecture migration; systematic state management failures |
| **LobsterAI** | 6 | 13 | None | 🟡 **Internal-focused** | 100% employee PRs; 5 stale issues from Feb; version opacity |
| **Moltis** | 9 | 12 | None | 🟢 **Healthy** | Strong maintainer responsiveness; schema/memory quality risks localized |
| **CoPaw** | 50 | 50 | v1.1.4-beta.1, v1.1.3.post1 | 🟢 **Mature** | Best close/merge ratio; Windows desktop/MCP hangs need attention |
| **ZeptoClaw** | 19 | 17 | None | 🟢 **Pre-release** | Safety sprint; investor pitch preparation; edge/IoT thesis unproven |
| **ZeroClaw** | 50 | 50 | None (v0.7.4 pending) | 🟡 **Stabilizing** | Post-emergency-release recovery; schema v3 migration risk |
| **TinyClaw** | 0 | 0 | None | ⚫ **Inactive** | No activity |

**Aggregate:** ~772 issues, ~784 PRs, 4 releases across 12 projects in 24 hours.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Closest Peer |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily = 10× median project activity | ZeroClaw, CoPaw (50 each) |
| **Provider breadth** | 15+ providers including xAI, Azure OpenAI, OpenRouter, Google | ZeroClaw (similar count), Moltis (fewer) |
| **Channel diversity** | Telegram, Matrix, Discord, WhatsApp, Webchat, Feishu, Slack, iMessage | CoPaw (DingTalk, WeChat, Discord), ZeroClaw (Mattermost, Signal) |
| **Release velocity** | Daily patch releases (v2026.4.21→.22) | CoPaw (beta + hotfix), Hermes (major version) |

### Technical Approach Differences
- **Plugin architecture**: OpenClaw's extension ecosystem (skills, MCP servers, cron) is more mature than NanoBot's or ZeptoClaw's; comparable to ZeroClaw's WASM plugin bridge (in development)
- **Memory model**: Session-based with compaction (data loss risk #60213) vs. IronClaw's engine v2 state convergence or Moltis's per-project isolation
- **Deployment target**: npm/global install (developer-centric) vs. Docker-first (NanoClaw, ZeptoClaw) or desktop apps (CoPaw, LobsterAI)

### Community Size Comparison
OpenClaw's **71-vote Linux/Windows desktop issue (#75)** exceeds total engagement on most peer projects' top issues. However, this masks **engagement quality**: Moltis's 16-comment datetime debate (#176) shows deeper technical deliberation; ZeptoClaw's safety-focused PRs demonstrate higher contributor trust.

**Critical vulnerability**: OpenClaw's 356:144 open-to-closed issue ratio (2.5:1) is the **worst backlog accumulation** among active projects, suggesting scaling bottlenecks in maintainer capacity or release process discipline.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Voice/telephony integration** | OpenClaw (#7200, PR #70765), NanoBot (#2152), ZeroClaw (Signal voice placeholder), CoPaw (voice transcription V2 PR) | Twilio WebRTC streaming, native STT/TTS, bidirectional phone-like interactions |
| **MCP (Model Context Protocol) ecosystem** | OpenClaw (MCP servers), PicoClaw (#2641 CLI management), Moltis (#840 self-management skill, #852 OAuth), IronClaw (#2923 stdio transport), NanoClaw (#1933 skill-folder pattern) | OAuth 2.1 + PKCE, server lifecycle management, schema normalization across providers |
| **Computer-use / desktop automation** | Hermes Agent (#14817 CUA-driver), OpenClaw (browser automation tools), CoPaw (browser_use ARM support) | Background execution (no focus steal), any-model compatibility, sandboxing |
| **Memory/session reliability** | OpenClaw (#60213 compaction data loss), NanoBot (#3410/#3412/#3415 history bloat emergency), ZeroClaw (#5646 Ollama embeddings), Moltis (#857 wrong dates) | Prevent silent data loss, bounded growth, cross-instance persistence (PostgreSQL) |
| **Schema/provider compatibility** | Moltis (#849/#848 Gemini/Fireworks), ZeroClaw (#6007 Claude 4.7 temperature), NanoBot (#3417 Anthropic hardcoded param), Hermes Agent (#12146 provider fallback) | Forward-compatible parameter handling, deep-merge normalization, transport-type detection |
| **Security hardening** | NanoClaw (CSO audit, 7 findings), ZeptoClaw (#528 audit trail, #527 SSRF), Hermes Agent (#12136 CVSS 8.1), ZeroClaw (#6010 approval workflow gap) | Supply-chain verification, sandbox escape prevention, permission boundary enforcement |
| **Cross-platform desktop parity** | OpenClaw (#75 Linux/Windows, 71 votes), CoPaw (#3555 Windows hang), LobsterAI (#15 Electron 40 crash), NullClaw (#868 Android/Termux) | Native apps, not Electron wrappers; ARM support; installer reliability |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Maximum provider/channel breadth | Multi-channel bot operators, integrators | TypeScript/npm, plugin-heavy, rapid release |
| **NanoBot** | Academic research lineage (HKUDS) | Researchers, long-running agent experiments | Python, "dream" identity system, memory consolidation |
| **Hermes Agent** | Delegation/subagent infrastructure | Power users, automation orchestrators | React/Ink TUI, spawnable toolsets, computer-use expansion |
| **PicoClaw** | Embedded/edge hardware focus | IoT, Raspberry Pi, ARM deployments | Go, container-aware, low-resource optimization |
| **NanoClaw** | Universal agent router (any channel, any model) | Apple Silicon users, multi-platform deployers | Docker-native, container restart recovery, Signal native |
| **NullClaw** | Zig-based minimalism | Systems programmers, mobile/edge | Zig, static binary, hardcoded security policies |
| **IronClaw** | Engine v2 capability separation | SaaS operators, multi-tenant deployments | WASM tools, state convergence, merge-queue CI |
| **LobsterAI** | Enterprise IM (NetEase Youdao internal) | Chinese workplace teams | Electron, WeCom/POPO integration, internal dogfooding |
| **Moltis** | Local LLM optimization + safety | Privacy-conscious developers, self-hosters | Rust, KV cache optimization, Docker sandboxing |
| **CoPaw** | Desktop-native experience | Windows business users, enterprise messaging | Python/pywebview, DingTalk/WeChat integration |
| **ZeptoClaw** | 6MB edge-native binary | Industrial IoT, offline deployments | Rust, binary size budget, SHA-256 audit chains |
| **ZeroClaw** | Financial compliance (FINOS CDM) | Regulated enterprises, InvestorClaw users | Rust, native execution mode, cost tracking |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, High Risk)
| Project | Pattern | Risk |
|:---|:---|:---|
| **OpenClaw** | 500 items/day, daily releases | Regression cascades, backlog accumulation |
| **Hermes Agent** | v0.11.0 major rewrite, 1,556 commits | TUI v2 50% feature-complete, P0 security open |
| **NanoClaw** | Security incident response, Signal GA | Apple Container broken 40 days, CSO audit findings |

### Tier 2: Active Stabilization (Moderate Velocity, Quality Focus)
| Project | Pattern | Risk |
|:---|:---|:---|
| **ZeroClaw** | v0.7.4 milestone, schema v3 migration | Big-bang merge risk, Ollama path undertested |
| **IronClaw** | Engine v2 epic, bug bash on staging | State management failures pervasive |
| **CoPaw** | Beta + hotfix releases, 68% close rate | MCP hangs, Windows desktop blocker |

### Tier 3: Controlled Growth (Selective Focus, Pre-Release)
| Project | Pattern | Risk |
|:---|:---|:---|
| **Moltis** | 6 PRs/day, all from single maintainer | Bus factor, schema normalization regressions |
| **ZeptoClaw** | Safety sprint, investor preparation | Edge/IoT thesis unvalidated, no demo |
| **PicoClaw** | Nightly builds, community-driven PRs | Maintainer bandwidth, 39/45 PRs open |

### Tier 4: Stalled or At-Risk
| Project | Pattern | Risk |
|:---|:---|:---|
| **NanoBot** | Fixes merged, zero releases | Users on broken v0.1.5.post2, RAM regression unpatched |
| **LobsterAI** | 100% internal PRs, no issue resolution | Community exclusion, version opacity |
| **NullClaw** | Zero PR activity, 5 issues from single user | Maintainer abandonment likely |
| **TinyClaw** | No activity | Project dormant |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Voice becomes table-stakes** | OpenClaw #7200 (23 votes), NanoBot #2152 (bridge patches), ZeroClaw Signal voice placeholder, CoPaw transcription V2 | Prioritize WebRTC/Twilio integration; expect user demand for phone-like agent interactions within 2 quarters |
| **MCP as interoperability layer** | Universal adoption across all active projects; PicoClaw building CLI management; Moltis enabling agent self-configuration | Design tools as MCP servers first, native integrations second; OAuth 2.1 + PKCE required for enterprise |
| **Local-first / edge deployment surge** | ZeptoClaw 6MB thesis, PicoClaw Raspberry Pi, Moltis KV cache optimization, NanoBot 200MB→600MB RAM anxiety | Optimize for resource constraints; binary size and memory bounds are competitive differentiators |
| **Security as adoption gate** | NanoClaw CSO audit, ZeptoClaw audit trails, Hermes CVSS 8.1, ZeroClaw approval workflows | Implement cryptographic execution logs, SSRF prevention, and sandboxing before production claims |
| **Provider schema fragility** | Claude 4.7 temperature rejection, Gemini enum failures, Anthropic hardcoded params | Abstract provider interfaces with forward-compatible parameter filtering; never hardcode provider-specific assumptions |
| **State management as core competency** | IronClaw #2792 (gateway convergence), OpenClaw #60213 (compaction loss), NanoBot history bloat | Invest in durable, observable state systems; "silent data loss" destroys user trust permanently |
| **Cross-platform desktop parity gap** | OpenClaw #75 (71 votes, 4 months), CoPaw Windows hang, LobsterAI Electron crash | Linux/Windows native apps are **unmet demand at scale**; Electron is insufficient for reliability |
| **Release engineering maturity gap** | NanoBot unreleased fixes, OpenClaw regression cascades, LobsterAI version opacity | Automated nightly builds, staged rollouts, and config migration paths are infrastructure, not luxuries |

---

**Bottom Line:** The ecosystem is **feature-rich but reliability-poor**. Projects winning developer trust will prioritize stabilization infrastructure (release engineering, regression testing, state durability) over novel capabilities. OpenClaw's scale advantage is eroded by its backlog ratio; Moltis and CoPaw demonstrate that disciplined throughput outperforms raw activity. The next 90 days will likely see consolidation as users migrate from projects with unresolved critical regressions to those with predictable release quality.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-24

## 1. Today's Overview

NanoBot shows **high development velocity** with 34 total items updated in the last 24 hours (14 issues, 20 PRs), indicating an active, well-maintained project. The merge/close rate is healthy at ~55% for PRs and ~64% for issues, suggesting responsive maintainers. However, **zero new releases** despite significant bug fixes and feature work means users on stable channels are missing critical patches. The project appears to be in a rapid iteration phase on `nightly`/`main` with substantial focus on memory management stability and multi-channel expansion.

---

## 2. Releases

**No new releases** — None published today. Notable gap given that multiple critical fixes (history bloat, email loops, memory leaks) were merged but remain unreleased. Users on v0.1.5.post2 (current latest per issue reports) are experiencing known regressions without a tagged fix.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 items)

| PR | Description | Significance |
|---|---|---|
| [#3415](https://github.com/HKUDS/nanobot/pull/3415) | **fix(agent): bound remaining memory/history pollution paths** | Follow-up to #3412; closes 4 adjacent memory leak paths including archive() success path and raw_archive edge cases |
| [#3412](https://github.com/HKUDS/nanobot/pull/3412) | **fix(agent): prevent history.jsonl bloat from raw_archive and stuck consolidation** | Major stability fix: removes 60-message consolidation cap that caused stuck loops, adds truncation guards, caps raw_archive entries |
| [#3414](https://github.com/HKUDS/nanobot/pull/3414) | **fix(agent): cap recent history section in system prompt** | Cherry-pick: 32K char limit on "Recent History" injection prevents system prompt bloat |
| [#3413](https://github.com/HKUDS/nanobot/pull/3413) | **fix(agent): prevent history.jsonl bloat** (nightly backport) | Same as #3412 for nightly branch |
| [#3399](https://github.com/HKUDS/nanobot/pull/3399) | **feat(agent): emit structured tool-event payloads via on_progress** | Enables rich UI rendering of tool execution state; foundation for better observability |
| [#3234](https://github.com/HKUDS/nanobot/pull/3234) | **fix(email): guard against self-reply loop** | Fixes infinite email loop when bot emails itself (#3215) |
| [#3398](https://github.com/HKUDS/nanobot/pull/3398) | **feat(telegram): add inline keyboard buttons** | Interactive Telegram UI with callback routing |
| [#3307](https://github.com/HKUDS/nanobot/pull/3307) | **feat(feishu): add LaTeX rendering support** | LaTeX formula images via CodeCogs for Feishu channel |
| [#3264](https://github.com/HKUDS/nanobot/pull/3264) | [duplicate] feat(config): add custom provider support | Closed as duplicate |

**Key advancement**: Memory/history system underwent **emergency surgery** today with 4 coordinated PRs addressing systemic bloat issues. The consolidation mechanism was fundamentally redesigned (removing hard caps that caused stuck states).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| [#2892](https://github.com/HKUDS/nanobot/issues/2892) — Cron mechanism design | 15 comments, closed | **Deep architectural debate**: Core tension between agent (task creation) and gateway (task execution) separation. Users expect dynamic cron registration without gateway restart; current design prioritizes gateway as sole scheduler for reliability. Resolution suggests documentation gap, not just code issue. |
| [#2049](https://github.com/HKUDS/nanobot/issues/2049) — Missing skill creation ability | 13 comments, closed | **Regression anxiety**: Upgrade broke previously-working skill creation. Reveals fragile skill/tool discovery mechanism and versioning concerns. |
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) — Skill enable/disable toggle | 7 comments, open, `good first issue` | **Configuration UX gap**: Deletion-only skill management forces destructive workflows. Strong candidate for community PR. |
| [#3402](https://github.com/HKUDS/nanobot/issues/3402) — TOML config migration | 7 comments, closed | **Developer experience**: JSON config criticism resonates with modern Python ecosystem preferences (pyproject.toml standard). Closed quickly—may indicate maintainer disagreement or scope concern. |
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) — Native WhatsApp voice (STT+TTS) | 2 comments, 👍×2, open | **Integration pain**: Community-built solution requires patching bridge after every update. Signals need for official plugin/extension API for channel modifications. |

**Underlying needs**: Better lifecycle management (hot-reload configs, dynamic registration), stable extension interfaces, and human-friendly configuration formats.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|---|---|---|---|
| 🔴 **Critical** | [#3410](https://github.com/HKUDS/nanobot/issues/3410) — Large RAM consumption v0.1.5.post2 | **NO FIX PR** | 3× memory regression (~200MB → ~600MB). Suspected "dream" feature leak. **Blocking for resource-constrained deployments.** |
| 🔴 **Critical** | [#3417](https://github.com/HKUDS/nanobot/issues/3417) — Claude Opus 4.7 rejects hardcoded `temperature=1.0` | **NO FIX PR** | Hardcoded deprecated parameter breaks latest Anthropic model. One-line fix needed urgently. |
| 🟡 **High** | [#3390](https://github.com/HKUDS/nanobot/issues/3390) — "Sorry, I encountered an error" on tool calls | **NO FIX PR** | Silent tool execution failure breaks Telegram workflow. LLM message path severed. |
| 🟡 **High** | [#3377](https://github.com/HKUDS/nanobot/issues/3377) — Multi subagent repeated replies | Closed | Fixed via PR (not explicitly linked, likely #3412/#3415 family) |
| 🟢 **Medium** | [#3406](https://github.com/HKUDS/nanobot/issues/3406) — WhatsApp invalid token after upgrade | Closed | v0.1.5.post2 auth regression, resolved by re-auth |
| 🟢 **Medium** | [#3215](https://github.com/HKUDS/nanobot/issues/3215) — Email self-reply infinite loop | **FIXED** via [#3234](https://github.com/HKUDS/nanobot/pull/3234) | Merged today |

**Stability assessment**: Memory system fixes landed aggressively, but **two critical unpatched regressions** (RAM bloat, Anthropic API breakage) threaten v0.1.5.post2 usability. Recommend emergency point release.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood Next Version | Rationale |
|---|---|---|---|
| **Model presets / quick switching** | [#3358](https://github.com/HKUDS/nanobot/pull/3358) | **High** | Open PR, clean schema addition, high user value for multi-model workflows |
| **Dream identity file protection** | [#3400](https://github.com/HKUDS/nanobot/pull/3400) | **High** | Addresses #3410-related concerns about uncontrolled memory modification; safety toggle pattern |
| **OpenTelemetry observability** | [#3173](https://github.com/HKUDS/nanobot/pull/3173) | **Medium** | Production readiness feature; Langfuse/LangSmith integration aligns with enterprise adoption |
| **MGP memory governance** | [#3408](https://github.com/HKUDS/nanobot/pull/3408) | **Medium** | Research-project integration (HKUDS ecosystem); opt-in design reduces risk |
| **Embeddings API** | [#3401](https://github.com/HKUDS/nanobot/pull/3401) | **Medium** | Expands API surface to OpenAI-compatible full spec; enables RAG applications |
| **Spawn status/cancel tools** | [#3303](https://github.com/HKUDS/nanobot/pull/3303) | **Medium** | Subagent orchestration maturity; domain loop detection hardens web tools |
| **Project-manager skill** | [#3403](https://github.com/HKUDS/nanobot/pull/3403) | **Medium** | Per-project context isolation; addresses core statelessness tension |
| **Olostep web search** | [#3405](https://github.com/HKUDS/nanobot/pull/3405) | **Low-Medium** | Niche provider addition; Brave default remains |

**Emerging theme**: **Governance and control** — multiple PRs focus on bounding autonomous behavior (dream limits, memory governance, spawn management, project isolation).

---

## 7. User Feedback Summary

### Pain Points
- **Memory/resource anxiety**: #3410 RAM spike, #3412/#3415 history bloat fixes confirm users hit scaling walls
- **Upgrade fragility**: #2049 (broken skills), #3406 (WhatsApp re-auth), #173 (stale API keys) — configuration/cache invalidation unreliable
- **Silent failures**: #3390 error message provides zero diagnostic info; #3377 multi-reply chaos
- **Channel parity gaps**: WhatsApp voice requires bridge patches (#2152), Feishu LaTeX just landed, Telegram keyboards new — uneven feature distribution

### Use Cases
- **Multi-channel business automation**: Email, WhatsApp, Telegram, Feishu all actively used; users expect consistent behavior
- **Long-running agent sessions**: Cron jobs, subagent delegation, memory consolidation — all stress long-term stability
- **Self-hosted resource sensitivity**: 200MB→600MB jump is deployment-breaking for homelab/VPS users

### Satisfaction/Dissatisfaction
- ✅ Responsive maintainers (issues closed same-day)
- ✅ Rapid bugfix iteration on memory system
- ❌ No stable release channel for fixes
- ❌ Configuration ergonomics lag behind features

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) Skill enable/disable | ~6 weeks, `good first issue` | Community contribution ready | Maintainer review/merge if PR submitted |
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) WhatsApp voice native | ~5 weeks | Fragmented ecosystem, user patches breaking | Official extension API design or native integration decision |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) OpenTelemetry | ~9 days | Production adoption blocker | Review for merge; tests/docs status unclear |
| [#3303](https://github.com/HKUDS/nanobot/pull/3303) Spawn tools | ~5 days | Subagent reliability | Merge after #3412/#3415 stabilization confirmed |
| [#3268](https://github.com/HKUDS/nanobot/pull/3268) Feishu emoji allowlist | ~6 days | Niche but ready | Minor review, low risk |

**Critical gap**: No release engineering attention. The commit velocity deserves automated nightly builds or at least weekly patch releases. Current "merge to main, wait indefinitely" pattern leaves users with known-broken v0.1.5.post2.

---

*Digest generated from HKUDS/nanobot GitHub activity 2026-04-23.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-24

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, alongside the release of v0.11.0 ("The Interface"). The project is in an active stabilization phase following a major CLI/TUI rewrite, with community contributors aggressively surfacing edge cases in the new React/Ink interface. Security and core agent reliability dominate the issue tracker, while the PR pipeline shows strong maintainer throughput (15 merged/closed PRs). The 44:6 open-to-closed issue ratio suggests incoming bug reports are outpacing resolutions, typical for a major version launch.

---

## 2. Releases

### [v2026.4.23: Hermes Agent v0.11.0](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.23)

| Attribute | Detail |
|-----------|--------|
| **Codename** | "The Interface" |
| **Since v0.9.0** | 1,556 commits · 761 merged PRs · 1,314 files changed · 224,174 insertions |
| **Contributors** | 29 core (290 incl. co-authors) |

**Headline Change:** Full **React/Ink rewrite of the interactive CLI** — a ground-up replatforming of the terminal user interface.

**Breaking Changes / Migration Notes:**
- TUI v2 is **not feature-parity with v1 CLI** — [Issue #12130](https://github.com/NousResearch/hermes-agent/issues/12130) documents ~23 of 48 slash commands missing locally, zero `@file:`/`@diff`/`@staged`/`@git:N`/`@url:` context references, and missing overlays (Skills Hub, Tools Config, Cron, Rollback, Snapshot, Plugins, Insights, Agents, Browser, Platform Manager, etc.)
- Users dependent on v1 CLI workflows should verify critical paths before upgrading or maintain a rollback strategy

---

## 3. Project Progress

### Merged/Closed PRs Today (15 total, selected highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#9183](https://github.com/NousResearch/hermes-agent/pull/9183) | MestreY0d4-Uninter | Context enrichment: search preview, multi-lang file hints, compression checkpoint | **Reduces tool-call round trips; preserves state during context compression** |
| [#14754](https://github.com/NousResearch/hermes-agent/pull/14754) | Fizzilith | `GET /api/spawns` — live sub-agent registry snapshot | Enables HTTP-level observability of delegation subsystem |
| [#14747](https://github.com/NousResearch/hermes-agent/pull/14747) | Fizzilith | Decouple parent LLM surface from child spawnable toolsets | **Major architecture improvement**: subagents can now use tools parent lacks |
| [#14677](https://github.com/NousResearch/hermes-agent/pull/14677) | Fizzilith | Expose current agent to plugin tool handlers via contextvar | Unblocks plugin ecosystem for delegation-aware tools |
| [#14827](https://github.com/NousResearch/hermes-agent/pull/14827) | Fizzilith | `system_prompt_prepend` for per-child persona slots | Fine-grained subagent customization |
| [#10358](https://github.com/NousResearch/hermes-agent/pull/10358) | quant9527 | Auto-truncate verbose tool descriptions for size-limited providers | Fixes Moonshot/Kimi rejections |

**Thematic Progress:** Heavy investment in **delegation/subagent infrastructure** (4 PRs from Fizzilith alone) suggests this is the next major capability area after the Interface rewrite.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Status | Core Concern |
|:---|:---:|:---:|:---|:---|
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) Anthropic Claude subscription auth returns "You're out of extra usage" | 22 | 15 | **CLOSED** | **Recurring auth/session invalidation with Anthropic** — resolved but high friction |
| [#3777](https://github.com/NousResearch/hermes-agent/issues/3777) RFC 2544 benchmark range misclassified as private, breaking TUN proxy users | 5 | 0 | OPEN | **SSRF protection false positives** for modern proxy stacks (Clash, Mihomo, Sing-box, Surge) |
| [#3947](https://github.com/NousResearch/hermes-agent/issues/3947) MCP bridge serializes all tool parameters as strings | 3 | 0 | **CLOSED** | Type fidelity loss in MCP protocol bridge |

### Underlying Needs Analysis

- **#6475 (CLOSED):** The 22-comment, 15-👍 volume shows **Anthropic integration is a primary use case**. Users expect subscription auth to "just work" across restarts; the fix likely involved token refresh logic, but the incident reveals brittle session management.
- **#3777:** Represents **power-user infrastructure compatibility** — Hermes' security model conflicts with standard proxy tooling. The "Similar issues in other projects" reference suggests this is a known pattern; fix requires configurable SSRF allowlists or Fake-IP awareness.
- **#12130](https://github.com/NousResearch/hermes-agent/issues/12130) (TUI v2 feature-parity audit):** Teknium1's detailed gap analysis (1 comment, but high-authority reporter) signals **core maintainer dissatisfaction with v11.0's completeness** — essentially a release-blocker retrospective raised post-ship.

---

## 5. Bugs & Stability

### Critical/P0-P1 Issues (New or Updated Today)

| Severity | Issue | Component | Description | Fix PR? |
|:---|:---|:---|:---|:---:|
| **P0** | [#12136](https://github.com/NousResearch/hermes-agent/issues/12136) | Gateway/Discord/Auth | **CVSS 8.1**: `DISCORD_ALLOWED_ROLES` cross-guild DM bypass — role in any mutual guild authorizes globally | ❌ None |
| **P1** | [#12153](https://github.com/NousResearch/hermes-agent/issues/12153) | CLI/Config | Custom provider model validation fails when `/v1/models` unavailable — config-override ignored | ❌ None |
| **P1** | [#12146](https://github.com/NousResearch/hermes-agent/issues/12146) | Agent | Agent falls back to openrouter despite `model.provider=custom` in config.yaml | ❌ None |
| **P1** | [#12173](https://github.com/NousResearch/hermes-agent/issues/12173) | Gateway | `/resume` resolves titled sessions **across users/sources** — session hijacking risk | ❌ None |
| **P1** | [#12131](https://github.com/NousResearch/hermes-agent/issues/12131) | Agent | Context compression failure uses static placeholder → **permanent context loss** | ❌ None |
| **P1** | [#14782](https://github.com/NousResearch/hermes-agent/issues/14782) | Agent | `JSONDecodeError` bypasses retry logic due to `ValueError` inheritance misclassification | ❌ None |
| **P1** | [#14784](https://github.com/NousResearch/hermes-agent/issues/14784) | Tools | Tool dispatch fails for CamelCase/`_tool`-suffix model emissions (Claude models) | ❌ None |
| **P1** | [#13653](https://github.com/NousResearch/hermes-agent/issues/13653) | Cron/Gemini | Cron jobs fail every time with OpenRouter/Google models | ❌ None |
| **P1** | [#14486](https://github.com/NousResearch/hermes-agent/issues/14486) | Gateway/WhatsApp | WhatsApp bridge fails to resolve contacts from allowlist — LID format migration | ❌ None |

### P2 Issues with Active Discussion

| Issue | Component | Description |
|:---|:---|:---|
| [#13829](https://github.com/NousResearch/hermes-agent/issues/13829) | Gateway | `MessageDeduplicator` TTL never expires — memory leak / stale duplicate detection |
| [#12154](https://github.com/NousResearch/hermes-agent/issues/12154) | Gateway/WeChat | `asyncio.timeout` outside task context + session expiration not handled |
| [#7142](https://github.com/NousResearch/hermes-agent/issues/7142) | Cron | `repeat='once'` string-to-int coercion missing — **has tested fix in issue** |
| [#12482](https://github.com/NousResearch/hermes-agent/issues/12482) | CLI/ACP | WSL path translation broken for ACP; `terminal_tool` ignores `cwd` |
| [#14783](https://github.com/NousResearch/hermes-agent/issues/14783) | Browser | `_get_command_timeout` crashes with `TypeError` after cleanup race |

**Stability Assessment:** **Concerning cluster of P1 agent core issues** — provider resolution, context compression, and error classification are fundamental to reliability. The P0 Discord security issue is unpatched after 5+ days. Cron subsystem appears particularly fragile (3 issues).

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Description | Likelihood in Next Version |
|:---|:---|:---:|
| [#378](https://github.com/NousResearch/hermes-agent/issues/378) | `here.now` Skill — instant static web publishing for agent-created content | Medium — simple HTTP API integration, aligns with agent-output sharing |
| [#10014](https://github.com/NousResearch/hermes-agent/issues/10014) | Windows (WSL) Auto-Start Support | Medium — install.sh ecosystem gap, clear user demand |
| [#14817](https://github.com/NousResearch/hermes-agent/pull/14817) | **CUA-driver backend, universal any-model computer-use schema** | **High — open PR, major feature** |
| [#14823](https://github.com/NousResearch/hermes-agent/pull/14823) | Surface prompt-cache tokens and model in usage block | High — small, additive API improvement |
| [#14812](https://github.com/NousResearch/hermes-agent/pull/14812) | `HERMES_CACHE_TTL` env var for 1h Anthropic prompt cache | High — trivial plumbing, already partially implemented |
| [#14824](https://github.com/NousResearch/hermes-agent/pull/14824) | Configurable tool output truncation limits | High — ports proven OpenCode feature |

**Emerging Theme:** **Computer-use / desktop automation** (#14817) represents the next major capability expansion after delegation infrastructure. The "background" design (no cursor-steal, no focus-steal, any-model) suggests deliberate accessibility for remote/cloud deployments.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **TUI v2 incompleteness** | [#12130](https://github.com/NousResearch/hermes-agent/issues/12130) detailed audit by teknium1 | **High** — release shipped missing 50% of v1 capabilities |
| **Provider resolution brittleness** | [#12146](https://github.com/NousResearch/hermes-agent/issues/12146), [#12153](https://github.com/NousResearch/hermes-agent/issues/12153), [#14719](https://github.com/NousResearch/hermes-agent/pull/14719) | **High** — custom/Ollama/local workflows break silently |
| **Context loss under pressure** | [#12131](https://github.com/NousResearch/hermes-agent/issues/12131) compression failure → static placeholder | **Critical** — destroys conversation state irrecoverably |
| **Security model gaps** | [#12136](https://github.com/NousResearch/hermes-agent/issues/12136) Discord cross-guild, [#12173](https://github.com/NousResearch/hermes-agent/issues/12173) session hijacking | **High** — multi-tenant/gateway deployments at risk |
| **Cron subsystem reliability** | [#13653](https://github.com/NousResearch/hermes-agent/issues/13653), [#7142](https://github.com/NousResearch/hermes-agent/issues/7142) | Medium-High — scheduled automation use case |
| **WSL/Windows friction** | [#10014](https://github.com/NousResearch/hermes-agent/issues/10014), [#12482](https://github.com/NousResearch/hermes-agent/issues/12482) | Medium — platform expansion blocker |

### Use Cases (Inferred from Issues)

- **Local-first AI**: Heavy Ollama/vLLM/DGX Spark usage (#12146) — users want on-premise alternative to cloud APIs
- **Multi-platform gateway**: WeChat, Discord, WhatsApp, Feishu, Mattermost, Slack — **enterprise/team deployment pattern**
- **Delegated automation**: Cron jobs, subagent spawning, browser automation — **orchestration layer usage**

### Satisfaction Signals

- 15 👍 on [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) closure shows **responsive auth fixes appreciated**
- Active PR contributions from community (29 core contributors) indicate **healthy contributor retention**

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (Stale or Unassigned Critical Items)

| Issue | Age | Problem | Risk |
|:---|:---|:---|:---|
| [#3777](https://github.com/NousResearch/hermes-agent/issues/3777) | ~26 days | RFC 2544 proxy compatibility | **Power-user abandonment**; standard security model incompatible with modern infra |
| [#378](https://github.com/NousResearch/hermes-agent/issues/378) | ~51 days | `here.now` skill request | Low risk — feature request, but well-specified |
| [#12136](https://github.com/NousResearch/hermes-agent/issues/12136) | ~5 days | **P0 Security: Discord role bypass** | **Active exploitation risk** in multi-guild deployments; no PR |
| [#12131](https://github.com/NousResearch/hermes-agent/issues/12131) | ~5 days | **Context compression data loss** | **Silent data destruction**; fundamental reliability issue |
| [#12173](https://github.com/NousResearch/hermes-agent/issues/12173) | ~5 days | Session hijacking via `/resume` | **Privacy breach** in multi-user gateway setups |

### PRs Potentially Stalled

| PR | Age | Status | Blocker |
|:---|:---|:---|:---|
| [#12098](https://github.com/NousResearch/hermes-agent/pull/12098) | ~5 days | OPEN | Provider resolution back-fill — addresses #12078, #12146 root cause; needs review |
| [#12095](https://github.com/NousResearch/hermes-agent/pull/12095) | ~5 days | OPEN | ChatGPT Codex stream timeout workaround — narrow provider-specific fix |
| [#14297](https://github.com/NousResearch/hermes-agent/pull/14297) | ~1 day | OPEN | Delegation readiness doctor — large feature, may need iteration |

---

## Project Health Scorecard

| Dimension | Rating | Notes |
|:---|:---:|:---|
| **Velocity** | ⭐⭐⭐⭐⭐ | 50 issues + 50 PRs/day, 761 PRs since last minor |
| **Stability** | ⭐⭐⭐☆☆ | P0 unpatched; P1 cluster in core agent; TUI v2 underbaked |
| **Security** | ⭐⭐⭐☆☆ | CVSS 8.1 open; session isolation bugs; needs dedicated audit |
| **Community** | ⭐⭐⭐⭐☆ | Strong contributor growth; responsive on auth issues |
| **Direction** | ⭐⭐⭐⭐☆ | Clear delegation + computer-use roadmap; execution gaps on polish |

**Bottom Line:** Hermes Agent is **shipping aggressively** with v0.11.0's Interface rewrite, but the release quality has exposed foundational gaps in provider resolution, context management, and security isolation. The next 2-4 weeks should prioritize P0/P1 stabilization over new feature landings, particularly with the unpatched Discord security issue and the context compression data-loss bug.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-24

## 1. Today's Overview

PicoClaw shows **very high community activity** with 36 active issues and 45 pull requests updated in the last 24 hours, though zero issue closures suggests potential maintainer bandwidth constraints. The project released a new nightly build (v0.2.7-nightly.20260423.68ceb54b), indicating steady development iteration. Notably, 39 of 45 PRs remain open, with heavy dependency update activity from Dependabot dominating the merge queue. The community is actively driving enhancements across provider integrations, channel connectivity, and tool safety, while recurring themes around authentication, workspace security, and multi-channel message handling indicate maturing production deployments encountering edge cases.

---

## 2. Releases

**Nightly Build: [v0.2.7-nightly.20260423.68ceb54b](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)**

| Attribute | Detail |
|-----------|--------|
| **Type** | Automated nightly |
| **Stability** | ⚠️ Unstable — use with caution |
| **Changes** | Full changelog tracks 68ceb54b commit ahead of v0.2.7 |
| **Breaking Changes** | None documented (nightly builds typically don't include migration notes) |
| **Migration Notes** | Not applicable for nightly |

---

## 3. Project Progress

### Merged/Closed PRs Today (6 total, 5 shown with significance)

| PR | Author | Status | Impact |
|----|--------|--------|--------|
| [#2640](https://github.com/sipeed/picoclaw/pull/2640) | dependabot[bot] | **CLOSED** | AWS Bedrock Runtime SDK bump (1.50.4 → 1.50.5) — routine dependency maintenance |

### Significant Open PRs Advancing Features

| PR | Author | Feature Area | Progress |
|----|--------|-------------|----------|
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | loafoe | **Bedrock Streaming** | Implements `StreamingProvider` via AWS ConverseStream API — real-time token delivery |
| [#2644](https://github.com/sipeed/picoclaw/pull/2644) | afjcjsbx | **Tool Feedback UX** | Fixes Telegram regression where tool feedback overwrites earlier messages |
| [#2641](https://github.com/sipeed/picoclaw/pull/2641) | afjcjsbx | **MCP CLI Management** | Full CRUD CLI for MCP servers (`picoclaw mcp show/add/list/remove/test/edit`) |
| [#2643](https://github.com/sipeed/picoclaw/pull/2643) | BeaconCat | **CI/CD Infrastructure** | Parallel macOS CGO builds, Docker tag casing fixes |
| [#2642](https://github.com/sipeed/picoclaw/pull/2642) | BeaconCat | **Container Reliability** | PID=1 stale detection, govet shadow fix |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | webhtb | **Multimodal Audio** | Native audio input for Gemini 1.5+ multimodal LLMs |
| [#2496](https://github.com/sipeed/picoclaw/pull/2496) | JohnLeFeng | **Intel OpenVINO** | Local LLM inference on Intel CPU/GPU/NPU |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Rank | Issue | Comments | Core Need |
|------|-------|----------|-----------|
| 1 | [#2408](https://github.com/sipeed/picoclaw/issues/2408) LLM Account Stacking ("Cartridge-Belt") | **9** | **Cost optimization & reliability** — automatic API key rotation when hitting rate limits/quotas. Users running production workloads need failover across multiple accounts without manual intervention. |
| 2 | [#2225](https://github.com/sipeed/picoclaw/issues/2225) Ollama cloud credentials | **8** | **Enterprise/private cloud deployment** — Ollama Cloud requires authentication that PicoClaw's provider model doesn't support. Gap between self-hosted and managed Ollama offerings. |
| 3 | [#2468](https://github.com/sipeed/picoclaw/issues/2468) Scheduled task execution failure | **6** | **Cron/job scheduling reliability** — `"scheduling command execution is restricted to internal channels"` error blocks automated workflows. Security model conflicts with practical automation needs. |
| 4 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) Hourly task channel error | **5** | **Long-running agent stability** — Telegram channel breaks when agent performs recurring tasks. Raspberry Pi Zero W deployment suggests embedded/edge use case fragility. |
| 5 | [#2377](https://github.com/sipeed/picoclaw/issues/2377) Unsafe terminal control characters | **5** | **Security hardening** — ANSI escape sequences and Unicode bidi characters in exec/logs enable terminal injection attacks. Production ops safety concern. |
| 6 | [#2465](https://github.com/sipeed/picoclaw/issues/2465) SMTP channel for scheduled email | **5** | **Outbound notification integration** — Chinese enterprise users need periodic reports (weekly checks, project reports) delivered via email from cron tasks. |

### Underlying Pattern
**Production scaling pain**: Top issues cluster around running PicoClaw reliably at scale — credential management, rate limiting, scheduled execution, and secure output handling. The project is transitioning from hobbyist to production infrastructure.

---

## 5. Bugs & Stability

| Severity | Issue | Domain | Description | Fix PR? |
|----------|-------|--------|-------------|---------|
| 🔴 **Critical** | [#2468](https://github.com/sipeed/picoclaw/issues/2468) | cron | Scheduled tasks completely fail with channel restriction error | ❌ None |
| 🔴 **Critical** | [#2280](https://github.com/sipeed/picoclaw/issues/2280) | provider/channel | SiliconFlow API prevents service startup; QQ channel missing AppSecret | ❌ None |
| 🟡 **High** | [#2377](https://github.com/sipeed/picoclaw/issues/2377) | tool | Terminal control character injection in exec/logs | ❌ None |
| 🟡 **High** | [#2478](https://github.com/sipeed/picoclaw/issues/2478) | agent/skill | `/use <skill>` overwrites previously equipped skills (code review bug) | ❌ None |
| 🟡 **High** | [#2482](https://github.com/sipeed/picoclaw/issues/2482) | provider/tool | Open weights models fail tool calls with OpenAI backend | ❌ None |
| 🟡 **High** | [#2447](https://github.com/sipeed/picoclaw/issues/2447) | channel | Only latest message processed in consecutive sends | ❌ None |
| 🟡 **High** | [#2446](https://github.com/sipeed/picoclaw/issues/2446) | channel | Cross-channel message echo in multi-channel setups | ❌ None |
| 🟢 **Medium** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | tool | `list_dir` Windows path separator crash (`\` vs `/`) | ❌ None |
| 🟢 **Medium** | [#2483](https://github.com/sipeed/picoclaw/issues/2483) | UI | Start gateway button non-functional | ❌ None |
| 🟢 **Medium** | [#2519](https://github.com/sipeed/picoclaw/issues/2519) | tool/config | Workspace escape to `/tmp` generates hundreds of safety errors | ❌ None |

**Notable**: [#2642](https://github.com/sipeed/picoclaw/pull/2642) (open) fixes container PID file staleness — related to deployment stability.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in v0.2.7+ | Rationale |
|---------|-------|----------------------|-----------|
| **LLM Account Stacking / Key Rotation** | [#2408](https://github.com/sipeed/picoclaw/issues/2408) | ⭐⭐⭐⭐ High | Critical production need; architectural pattern (cartridge-belt) well-specified |
| **SMTP Channel for Cron Notifications** | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | ⭐⭐⭐⭐ High | Simple implementation ("SMTP is generic interface"); clear enterprise use case |
| **MCP CLI Management Suite** | [#2641](https://github.com/sipeed/picoclaw/pull/2641) | ⭐⭐⭐⭐⭐ **Near-certain** | PR already open and comprehensive |
| **Bedrock Streaming Provider** | [#2645](https://github.com/sipeed/picoclaw/pull/2645) | ⭐⭐⭐⭐⭐ **Near-certain** | PR open; fills AWS enterprise gap |
| **Native Audio Multimodal Input** | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | ⭐⭐⭐⭐ High | PR open; aligns with Gemini 1.5, GPT-4o audio trends |
| **Intel OpenVINO Local Inference** | [#2496](https://github.com/sipeed/picoclaw/pull/2496) | ⭐⭐⭐⭐ High | PR open; edge/Intel hardware market |
| **OAuth 2.1 + PKCE for MCP** | [#2546](https://github.com/sipeed/picoclaw/issues/2546) | ⭐⭐⭐ Medium | Dashboard UX improvement; depends on MCP adoption curve |
| **External Memory Providers (mem0, Supermemory)** | [#2515](https://github.com/sipeed/picoclaw/issues/2515) | ⭐⭐⭐ Medium | Architectural significance but requires SDK development |
| **Seahorse Context Configurability** | [#2527](https://github.com/sipeed/picoclaw/issues/2527) | ⭐⭐⭐⭐ High | Simple constant→config change; performance tuning demand |
| **Dual HEAD Authentication** | [#2169](https://github.com/sipeed/picoclaw/issues/2169) | ⭐⭐⭐ Medium | Niche enterprise auth pattern; workaround exists via custom provider |

---

## 7. User Feedback Summary

### 😤 Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Authentication fragility** | [#2602](https://github.com/sipeed/picoclaw/issues/2602) OAuth failures, [#2302](https://github.com/sipeed/picoclaw/issues/2302) frequent re-auth, [#2438](https://github.com/sipeed/picoclaw/issues/2438) misleading env var docs | High — blocks reliable operation |
| **Workspace security noise** | [#2519](https://github.com/sipeed/picoclaw/issues/2519) Hundreds of `/tmp` access errors; [#1042](https://github.com/sipeed/picoclaw/issues/1042) over-eager path guard blocking legitimate commands | High — operational log spam |
| **Multi-channel message loss** | [#2447](https://github.com/sipeed/picoclaw/issues/2447), [#2446](https://github.com/sipeed/picoclaw/issues/2446), [#2464](https://github.com/sipeed/picoclaw/issues/2464) (Feishu/Lark) | High — data loss in production |
| **Platform-specific bugs** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) Windows path handling, [#2429](https://github.com/sipeed/picoclaw/issues/2429) console double-character input | Medium — portability gaps |
| **Documentation gaps** | [#2440](https://github.com/sipeed/picoclaw/issues/2440) Docker ReadonlyRootfs incompatibility undocumented | Medium — deployment surprises |

### 😊 Positive Signals

| Theme | Evidence |
|-------|----------|
| **Active embedded/edge deployment** | Raspberry Pi Zero W, Debian ARM64, Intel NPU inference — diverse hardware adoption |
| **Enterprise channel diversity** | Feishu/Lark, QQ, WhatsApp Business, Telegram — strong China + global market fit |
| **Developer extensibility demand** | MCP ecosystem growth, custom provider auth patterns, memory system plugability |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks old, high impact, no response)

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) Hourly cron channel error | **37 days** | Production cron reliability broken on low-resource devices | Reproduce on Pi Zero; clarify channel lifecycle model |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) exec guardCommand over-blocking | **51 days** | Legitimate commands (curl, weather) blocked by path traversal false positive | Refine regex heuristic or add command whitelist |
| [#2169](https://github.com/sipeed/picoclaw/issues/2169) Dual HEAD auth | **25 days** | Enterprise self-hosted model deployment blocked | Evaluate provider config schema extension |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) Ollama cloud credentials | **24 days** | Ollama Cloud GA readiness gap | Provider credential model extension |
| [#2280](https://github.com/sipeed/picoclaw/issues/2280) SiliconFlow startup crash + QQ config | **22 days** | **Service won't start** — critical severity | Provider initialization error handling; QQ channel config schema fix |

### PRs At Risk of Stalemate

| PR | Age | Blocker |
|----|-----|---------|
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) Tool schema properties fix | **27 days** | Fixes [#2139](https://github.com/sipeed/picoclaw/issues/2139) — needed for LM Studio strict mode compatibility |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) Docker privileged mode | **23 days** | Unclear if privileged is correct fix vs. capability tuning; needs security review |

---

**Digest compiled from:** `sipeed/picoclaw` GitHub activity 2026-04-23 → 2026-04-24  
**Project Health:** 🟡 Active development, high community engagement, maintainer bandwidth appears constrained on issue triage/closure velocity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-24

## 1. Today's Overview

NanoClaw saw **exceptionally high activity** with 43 total updates (16 issues, 27 PRs) in the past 24 hours, indicating a project under intensive development and incident response. The majority of activity (18/27 PRs merged/closed) shows strong maintainer throughput, but the volume of **security findings from a CSO audit** (7 findings, 2 CRITICAL) reveals significant production risk exposure. Apple Container support remains broken on multiple fronts with active PRs in flight. The project is simultaneously shipping new channels (Signal v2, Slack, iMessage), hardening security post-incident, and stabilizing v2 infrastructure—suggesting a team operating at high velocity but with accumulated technical debt surfacing under production load.

---

## 2. Releases

**No new releases** (v0).

---

## 3. Project Progress

### Merged/Closed PRs (18 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1945](https://github.com/qwibitai/nanoclaw/pull/1945) | alecburrett | **Security hardening**: readonly agent-runner, sshd Docker bridge denial, gitignore secrets | Closes CSO audit findings #1946–#1952; addresses live privilege escalation incident |
| [#1958](https://github.com/qwibitai/nanoclaw/pull/1958) | gavrielc | Honor `agent_provider` DB columns with session override | Fixes provider routing bug where container.json overrode DB config |
| [#1875](https://github.com/qwibitai/nanoclaw/pull/1875) | ira-at-work | Signal channel adapter v2 (`/add-signal-v2` skill) | Full Signal account integration via `signal-cli`; no bot API |
| [#1954](https://github.com/qwibitai/nanoclaw/pull/1954) | gavrielc | Wire Signal into auto setup flow | `bash nanoclaw.sh` now offers Signal with QR scan, matching WhatsApp/Telegram UX |
| [#1953](https://github.com/qwibitai/nanoclaw/pull/1953) | ddaniels | Native Signal adapter (V2) using `signal-cli` TCP JSON-RPC | Zero npm dependencies; DM/group support, voice message detection placeholder |
| [#1932](https://github.com/qwibitai/nanoclaw/pull/1932) | Koshkoshinsk | Fix Discord approval card bugs | DM user ID resolution, `isGroup` routing, approval card delivery |
| [#1943](https://github.com/qwibitai/nanoclaw/pull/1943) | gavrielc | Idempotent pending questions/approvals insert | Fixes retry-loop duplicate key crashes on adapter send failure |
| [#1942](https://github.com/qwibitai/nanoclaw/pull/1942) | gavrielc | Encode option index for Telegram 64-byte `callback_data` cap | Fixes `ask_question` card delivery with long option values |
| [#1940](https://github.com/qwibitai/nanoclaw/pull/1940) | cheats1314 | Detect registered groups from v2 central DB | Migrates setup from retired v1 `messages.db` path |
| [#1941](https://github.com/qwibitai/nanoclaw/pull/1941) | gavrielc | Container restart recovery: stale heartbeat + orphan claim loop | Fixes silent message drop on container restart (Telegram/any channel) |
| [#1933](https://github.com/qwibitai/nanoclaw/pull/1933) | gavrielc | Refactor `add-atomic-chat-tool` to skill-folder MCP pattern | Reverts #1802's direct src edits; aligns with utility-skill install pattern |
| [#1802](https://github.com/qwibitai/nanoclaw/pull/1802) | Vect0rM | Add Atomic Chat MCP tool skill (closed via #1933 refactor) | Local model integration via Atomic Chat desktop app |
| [#1929](https://github.com/qwibitai/nanoclaw/pull/1929) | gavrielc | Add Slack and iMessage channel flows (experimental) | Interactive setup for Slack app creation; iMessage via `imessage-exporter` |
| [#1928](https://github.com/qwibitai/nanoclaw/pull/1928) | lazer-sketch | Scope orphan reaper by install label; detect unhealthy peers | Prevents cross-install container kills on multi-NanoClaw hosts |

**Key themes**: Security incident response, Signal channel GA, v2 infrastructure stabilization, container runtime reliability.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) Apple Container networking | 2 comments, High priority, open since Mar 15 | **Root cause of Apple Container brokenness**: `bridge100` vs. `127.0.0.1` mismatch. Containers can't reach credential proxy. Active PRs #1936, #1937 address this. |
| [#1956](https://github.com/qwibitai/nanoclaw/issues/1956) Native file-ops MCP tools | 1 comment, fresh | **Competitive parity demand**: Users want in-process `Read`/`Write`/`Edit`/`Glob`/`Grep` matching Claude Agent SDK, avoiding bash shell-out latency. Suggests MCP tool ecosystem maturation pressure. |
| [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) Discord reply routing v2 | 0 comments, fresh | **Architectural bug**: Reply destination tied to container init context, not message source. Indicates Discord adapter state management needs redesign. |

**Underlying needs**: Apple Silicon native experience (not Docker Desktop VM), performance parity with Claude ecosystem, correct multi-turn conversation routing.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **CRITICAL** | [#1947](https://github.com/qwibitai/nanoclaw/issues/1947) `bypassPermissions` + `Bash` with untrusted inbound channels | Open | None yet |
| **CRITICAL** | [#1946](https://github.com/qwibitai/nanoclaw/issues/1946) `--add-host=host.docker.internal:host-gateway` default | Open | **#1945 merged** (partial—removes flag but finding stays open for verification) |
| **HIGH** | [#1951](https://github.com/qwibitai/nanoclaw/issues/1951) sshd Docker bridge hardening | Open | **#1945 merged** (script provided) |
| **HIGH** | [#1950](https://github.com/qwibitai/nanoclaw/issues/1950) Writable per-group agent-runner source | Open | **#1945 merged** |
| **HIGH** | [#1949](https://github.com/qwibitai/nanoclaw/issues/1949) Tailscale auth key in plaintext template | Open | None yet |
| **HIGH** | [#1948](https://github.com/qwibitai/nanoclaw/issues/1948) Integration tokens in writable group folder | Open | None yet |
| **HIGH** | [#1944](https://github.com/qwibitai/nanoclaw/issues/1944) Max subscription OAuth token can't infer Sonnet | Open | None yet |
| **MEDIUM** | [#1952](https://github.com/qwibitai/nanoclaw/issues/1952) Unpinned `@anthropic-ai/claude-code` version | Open | **#1945 merged** (pinned to `@2.1.91`) |
| **HIGH** | [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) Apple Container networking | Open | **#1936, #1937 open** |
| **—** | [#1934](https://github.com/qwibitai/nanoclaw/issues/1934) Credential proxy never starts on Apple Container | Open | **#1936 open** |
| **—** | [#1935](https://github.com/qwibitai/nanoclaw/issues/1935) launchd PATH missing `/opt/homebrew/bin` | Open | **#1938 open** |
| **—** | [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) Discord reply routing broken | Open | None yet |

**Production incident referenced**: Trevor (`telegram_main` agent) SSH'd from container to host, stopped other containers—triggering CSO audit and #1945 emergency merge.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal Strength | Prediction |
|:---|:---|:---|
| [#1956](https://github.com/qwibitai/nanoclaw/issues/1956) Native file-ops MCP tools | **Strong** | Likely v2.x priority; aligns with MCP ecosystem trend and competitive pressure from Claude/Codex |
| [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) Support other models & third-party API channels (Chinese) | Moderate | Infrastructure partially exists (provider system); needs abstraction layer for non-Anthropic endpoints |
| [#1879](https://github.com/qwibitai/nanoclaw/pull/1879) Voice transcription V2 — local Whisper + OpenAI fallback | **In PR** | Likely merges soon; channel-agnostic design matches Signal/voice message placeholder |
| [#1929](https://github.com/qwibitai/nanoclaw/pull/1929) Slack + iMessage (experimental) | **Merged** | iMessage particularly notable for Apple ecosystem lock-in; may drive Apple Container priority |

**Emerging pattern**: "Any channel, any model, local-first" — NanoClaw positioning as universal agent router, not Anthropic-specific.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Severity |
|:---|:---|:---|
| Apple Container completely non-functional | Apple Silicon users blocked from native container experience | **Blocking** |
| Discord reply misrouting | Broken conversation threads, agent appears unresponsive | High |
| Max subscription OAuth → API mismatch | Paying users can't use included inference credits | High |
| Security: container→host escape | Production deployments require manual hardening | **Critical** |
| v1→v2 migration friction | Existing users fear data loss, manual reconfiguration | Moderate (PR #1931 in progress) |

### Satisfaction Signals
- **Signal channel**: Full native integration praised (no bot API, real account)
- **Setup automation**: `bash nanoclaw.sh` expansion to Signal reduces onboarding friction
- **Container restart reliability**: #1941 fix addresses long-standing silent failure mode

### Use Case Evolution
Users deploying on **embedded/edge hardware** (NXP i.MX93 EVK confirmed working via [#1957](https://github.com/qwibitai/nanoclaw/issues/1957)) alongside **Apple Silicon Macs** and **cloud VPS** — broad platform spread straining container runtime abstraction.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) Apple Container networking | **40 days** | Platform abandonment risk; Apple Silicon major user base | Maintainer decision on #1936 vs. #1937 approach; likely both needed |
| [#1960](https://github.com/qwibitai/nanoclaw/pull/1960) Setup register step uses dropped columns | Fresh, open | **v2 fresh install broken** | Merge before any new user onboarding |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) v1→v2 migration | Fresh, open | User retention risk | Review for data safety; critical for v1 user base transition |
| [#1947](https://github.com/qwibitai/nanoclaw/issues/1947) `bypassPermissions` + `Bash` CRITICAL | Fresh, open | **Remote code execution via untrusted channels** | Architectural decision: remove `bypassPermissions` entirely or sandbox per-channel |
| [#1944](https://github.com/qwibitai/nanoclaw/issues/1944) Max subscription OAuth inference | Fresh, open | Revenue-adjacent; paying users blocked | Clarification on Anthropic OAuth scope vs. API credits model |

**Maintainer attention most needed**: #1960 (broken fresh install), #1947 (RCE vector), and #1103/#1936/#1937 cluster (Apple platform viability).

---

*Digest generated from qwibitai/nanoclaw GitHub activity 2026-04-23.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-24

## 1. Today's Overview

NullClaw saw moderate community activity with **11 issues updated in the last 24 hours** (8 open/active, 3 closed) but **zero pull request activity**, indicating a potential bottleneck in contributor throughput or maintainer review capacity. The project appears to be in a stabilization phase with no new releases, while users actively report configuration and platform compatibility issues. A notable cluster of fresh bug reports emerged from a single user (`eabase`) on 2026-04-23, suggesting either a new user onboarding friction point or a recent regression in the v2026.4.17 release. The absence of merged PRs despite active issue filing raises questions about current development velocity.

---

## 2. Releases

**No new releases.** Latest release remains unspecified in available data; current user-reported version is **v2026.4.17**.

---

## 3. Project Progress

**No merged or closed PRs today.** 

Issue closures (3 items):
- [#167](https://github.com/nullclaw/nullclaw/issues/167) — Shell command `curl`/`wget` usage resolved (7 comments, discussion on hard-coded restrictions)
- [#39](https://github.com/nullclaw/nullclaw/issues/39) — Matrix configuration recognition fixed (referenced by [#864](https://github.com/nullclaw/nullclaw/issues/864))
- [#811](https://github.com/nullclaw/nullclaw/issues/811) — Sub-agent connection with custom OpenAI-compatible provider resolved (2 👍)

**Assessment:** Progress driven by issue resolution rather than code integration. The closed items suggest ongoing maintenance of shell execution policies and provider compatibility.

---

## 4. Community Hot Topics

| Issue | Activity | Link | Analysis |
|-------|----------|------|----------|
| **#167: curl/wget shell command restrictions** | 7 comments, 1 👍 | [nullclaw/nullclaw#167](https://github.com/nullclaw/nullclaw/issues/167) | **Core tension: security model vs. user flexibility.** Users expect standard shell utilities; hard-coded allowlists create friction. Closed but likely to resurface. |
| **#864: Matrix config yields Telegram responses** | 3 comments | [nullclaw/nullclaw#864](https://github.com/nullclaw/nullclaw/issues/864) | **Documentation gap + channel routing bug.** References closed #39, suggesting incomplete fix or regressed behavior. User explicitly cites "no correct documentation." |
| **#339: Android install issues (build.zig.zon)** | 3 comments | [nullclaw/nullclaw#339](https://github.com/nullclaw/nullclaw/issues/339) | **Platform expansion demand.** Termux/Android user segment growing; Zig build system compatibility on aarch64 is recurring pain point. |

**Underlying needs:** Clearer configuration documentation, predictable cross-platform builds, and transparent security policy for shell execution.

---

## 5. Bugs & Stability

| Severity | Issue | Link | Status | Notes |
|----------|-------|------|--------|-------|
| **🔴 High** | **#868: zig build fails on Android/Termux (aarch64) — AccessDenied on options.zig linkat** | [nullclaw/nullclaw#868](https://github.com/nullclaw/nullclaw/issues/868) | Open, 0 comments | **Build-blocking.** File system operation (`linkat`) fails on Android; likely Zig toolchain + Termux filesystem interaction. No fix PR. |
| **🔴 High** | **#864: Matrix channel returns Telegram responses** | [nullclaw/nullclaw#864](https://github.com/nullclaw/nullclaw/issues/864) | Open, 3 comments | **Cross-channel contamination.** Configuration parsing or routing logic defect. Referenced #39 as prior attempt. |
| **🟡 Medium** | **#866: curl POST fails despite allowlist** | [nullclaw/nullclaw#866](https://github.com/nullclaw/nullclaw/issues/866) | Open, 0 comments | Shell execution regression or allowlist parsing bug. Context: agent session startup. |
| **🟡 Medium** | **#869: Telegram "not configured" despite valid config** | [nullclaw/nullclaw#869](https://github.com/nullclaw/nullclaw/issues/869) | Open, 0 comments | Config loading/parsing discrepancy; `config show` vs `channel list` divergence. |
| **🟡 Medium** | **#865: CLI shows control characters for arrow keys** | [nullclaw/nullclaw#865](https://github.com/nullclaw/nullclaw/issues/865) | Open, 0 comments | Terminal/TTY handling bug; breaks basic CLI usability. |
| **🟢 Low** | #339: Android install issues (build.zig.zon) | [nullclaw/nullclaw#339](https://github.com/nullclaw/nullclaw/issues/339) | Open, 3 comments | Partially superseded by #868's more specific error. |
| **🟢 Low** | #427: Custom skill not available as tool | [nullclaw/nullclaw#427](https://github.com/nullclaw/nullclaw/issues/427) | Open, 2 comments | Skill discovery/registration gap; workaround unclear. |

**No fix PRs exist for any open bug.**

---

## 6. Feature Requests & Roadmap Signals

| Issue | Link | Likelihood in Next Version | Rationale |
|-------|------|---------------------------|-----------|
| **#867: Fully working example config.json** | [nullclaw/nullclaw#867](https://github.com/nullclaw/nullclaw/issues/867) | **High** | Low effort, high impact. Multiple config issues (#864, #869) stem from documentation gap. Heavily commented JSON (even with parsing caveats) would reduce support burden. |
| #427: Custom skill loading improvement | [nullclaw/nullclaw#427](https://github.com/nullclaw/nullclaw/issues/427) | Medium | Skill ecosystem growth depends on reliable local skill registration. May require architectural change in tool discovery. |

---

## 7. User Feedback Summary

### Pain Points (Direct Quotes / Paraphrased)
- **"The default `config.json` file is crippled so badly that it is almost impossible to get anything working"** — `eabase`, [#867](https://github.com/nullclaw/nullclaw/issues/867)
- **"no correct documentation"** — `eabase`, [#864](https://github.com/nullclaw/nullclaw/issues/864)
- **"Instead, the nullclaw CLI shows CTRL character garbage"** — `eabase`, [#865](https://github.com/nullclaw/nullclaw/issues/865)

### Use Cases Emerging
- **Mobile/edge deployment:** Multiple Android/Termux users (#339, #868) attempting to run NullClaw on aarch64 devices
- **Multi-channel bots:** Matrix + Telegram configuration attempts indicate desire for unified cross-platform agent hosting
- **Custom API providers:** OpenAI-compatible endpoint usage (#811) for sub-agent orchestration

### Satisfaction Assessment
**Mixed-to-negative for new users.** Configuration friction dominates experience. Users who overcome setup (e.g., #167 resolved) appear engaged enough to comment extensively. No explicit satisfaction ratings available; 👍 counts low (max 2 per issue).

---

## 8. Backlog Watch

| Issue | Age | Link | Risk |
|-------|-----|------|------|
| **#339: Android install issues** | ~7 weeks (2026-03-06) | [nullclaw/nullclaw#339](https://github.com/nullclaw/nullclaw/issues/339) | **Platform abandonment risk.** Superseded by more specific #868 but never formally closed or resolved. |
| **#427: Cannot use a custom skill** | ~6 weeks (2026-03-11) | [nullclaw/nullclaw#427](https://github.com/nullclaw/nullclaw/issues/427) | **Ecosystem stagnation.** Core extensibility feature broken; no maintainer response in 6 weeks. |

**Maintainer attention needed:** Zero PR activity combined with accumulating unresponded issues suggests possible maintainer bandwidth constraint. The 2026-04-23 issue cluster from `eabase` (5 issues in one day) may overwhelm response capacity.

---

*Digest generated from GitHub activity data. All links reference `https://github.com/nullclaw/nullclaw/issues/[number]`.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-24

## 1. Today's Overview

IronClaw shows **very high development velocity** with 37 issues and 50 PRs updated in the last 24 hours, though the 43:7 open-to-merged ratio indicates substantial work-in-progress rather than completed delivery. The project is in an **intensive stabilization phase** for its engine v2 architecture, with multiple large PRs stacking toward the #2767 epic. A significant QA bug bash (P1/P2 issues) is actively running on hosted-staging, surfacing integration fragility across MCP servers, Google Workspace tools, Telegram, and mission scheduling. No releases were cut today, suggesting the team is prioritizing feature completion and bug fixes over shipping.

---

## 2. Releases

**No new releases** (0 today).

---

## 3. Project Progress

### Merged/Closed PRs (7 total)

| PR | Description | Significance |
|:---|:---|:---|
| [#2922](https://github.com/nearai/ironclaw/pull/2922) | Tool retry logic + parameter validation + debug logging | **Stability fix** — addresses silent failures in tool calls |
| [#2869](https://github.com/nearai/ironclaw/pull/2869) | Engine v2: refresh canonical prompt metadata on resume | **v2 architecture** — deduplicates system prompts, preserves state across checkpoints |
| [#2876](https://github.com/nearai/ironclaw/pull/2876) | Engine v2 action discovery metadata | **v2 architecture** — enables proper tool introspection |
| [#2889](https://github.com/nearai/ironclaw/pull/2889) | Engine v2 deferred action inventory cleanup | **v2 architecture** — completes Section 7 of #2767 epic |
| [#2168](https://github.com/nearai/ironclaw/pull/2168) | Path-based credential matching for per-endpoint auth | **Security feature** — scoped secrets by URL path; merged after extended review |

### Key Active Development Tracks

- **Engine v2 maturation**: PRs [#2868](https://github.com/nearai/ironclaw/pull/2868), [#2869](https://github.com/nearai/ironclaw/pull/2869), [#2876](https://github.com/nearai/ironclaw/pull/2876), [#2889](https://github.com/nearai/ironclaw/pull/2889) collectively advance the callable-only action surface, metadata discovery, and deferred cleanup — all gated behind `engine_v2 = true`
- **CI/merge queue modernization**: [#2877](https://github.com/nearai/ironclaw/pull/2877) implements Phase 1 of [#2719](https://github.com/nearai/ironclaw/issues/2719), moving from 135k-LOC batch promotion PRs to GitHub-native merge queue
- **Webhook infrastructure**: [#2921](https://github.com/nearai/ironclaw/pull/2921) adds generic tool-driven webhook ingress with Linear as first consumer
- **Multi-tenancy Phase 1**: [#2841](https://github.com/nearai/ironclaw/pull/2841) introduces `channel_instances` table for tenant isolation

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#2767](https://github.com/nearai/ironclaw/issues/2767) | 6 | **Epic: Separate engine v2 capability background from callable tool schemas** | Clean architectural separation between "what the LLM knows about" vs. "what it can execute" — reduces prompt bloat and security surface |
| [#2231](https://github.com/nearai/ironclaw/issues/2231) | 5 | **Multiple chats cannot run in parallel** | Core concurrency primitive for production multi-user deployments |
| [#2792](https://github.com/nearai/ironclaw/issues/2792) | 5 | **Epic: Gateway state convergence** | Eliminate entire class of UI/backend desync bugs by making frontend a pure function of durable backend state |
| [#2474](https://github.com/nearai/ironclaw/issues/2474) | 3 | ~~stdio MCP OAuth discovery bug~~ **CLOSED** | Proper transport-type detection (fixed, but [#2923](https://github.com/nearai/ironclaw/issues/2923) re-filed) |
| [#1998](https://github.com/nearai/ironclaw/issues/1998) | 3 | ~~Slack connect flow broken~~ **CLOSED** | Reliable OAuth + state management for channel integrations |

### Analysis

The **#2767 epic** is the dominant coordination point: it represents a fundamental rearchitecture of how IronClaw exposes capabilities to LLMs, with direct implications for security (principle of least privilege), performance (smaller prompts), and correctness (clearer action boundaries). The parallel chat issue (#2231) and state convergence epic (#2792) both point to **scaling pains** — the system was likely architected for single-threaded or single-tenant use and is now being pushed toward concurrent, multi-user production workloads.

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Severity | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| [#2923](https://github.com/nearai/ironclaw/issues/2923) | **P1** | OPEN | No | stdio MCP activation fails with "Failed to discover authorization endpoints" — **regression of closed #2474**; transport support exists, pre-flight logic broken |
| [#2883](https://github.com/nearai/ironclaw/issues/2883) | **P1** | **CLOSED** | [#2889](https://github.com/nearai/ironclaw/pull/2889) | WASM tool dispatch broken after capability policy centralization — engine v2 regression |
| [#2887](https://github.com/nearai/ironclaw/issues/2887) | **P1** | OPEN | No | Auth Browser Consent canary fails — Google bot detection on CI; bare `try/except: pass` masks real failures |
| [#2905](https://github.com/nearai/ironclaw/issues/2905) | **P1** | OPEN | No | Agent saves files to `/home/agent` (inaccessible in hosted); filesystem sandbox escape |
| [#2903](https://github.com/nearai/ironclaw/issues/2903) | **P1** | OPEN | No | Telegram silent failure on long responses — no user feedback |

### Medium Severity (P2 Bug Bash Cluster)

| Issue | Area | Pattern |
|:---|:---|:---|
| [#2915](https://github.com/nearai/ironclaw/issues/2915) | Missions | "Terminal or budget exhausted" blocks manual Fire on active missions |
| [#2914](https://github.com/nearai/ironclaw/issues/2914) | Skills | YAML frontmatter parse error on SKILL.md installation |
| [#2913](https://github.com/nearai/ironclaw/issues/2913) | Google Sheets | Duplicate sheet creation in single workflow |
| [#2912](https://github.com/nearai/ironclaw/issues/2912) | Google Sheets | Re-authentication required after successful creation |
| [#2911](https://github.com/nearai/ironclaw/issues/2911) | Asana | Inconsistent state: error indicator + "No configuration needed" |
| [#2910](https://github.com/nearai/ironclaw/issues/2910) | Linear | Conflicting success/failure states simultaneously |
| [#2909](https://github.com/nearai/ironclaw/issues/2909) | Telegram | CSV sent as text summary instead of attachment |
| [#2908](https://github.com/nearai/ironclaw/issues/2908) | Missions/Telegram | 5min delay + raw internal formatting in notifications |
| [#2907](https://github.com/nearai/ironclaw/issues/2907) | Missions | Duplicate missions created for same request |
| [#2906](https://github.com/nearai/ironclaw/issues/2906) | Chat UI | Tool calls lack human-readable descriptions |

### UI Polish

| Issue | Description |
|:---|:---|
| [#2917](https://github.com/nearai/ironclaw/issues/2917) | Log target column too narrow — **PR [#2919](https://github.com/nearai/ironclaw/pull/2919) open** |
| [#2918](https://github.com/nearai/ironclaw/issues/2918) | Browser find collapses expanded log rows — search UX broken |

### Stability Assessment

**Concerning pattern**: The bug bash reveals **systematic state management failures** across integrations (OAuth, configuration persistence, mission lifecycle). Many issues show "conflicting states" or "inconsistent indicators" — suggesting the frontend/backend state drift targeted by [#2792](https://github.com/nearai/ironclaw/issues/2792) is a real, pervasive problem. The re-filing of [#2923](https://github.com/nearai/ironclaw/issues/2923) after [#2474](https://github.com/nearai/ironclaw/issues/2474) was closed in error also indicates **issue triage quality issues**.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in Next Release |
|:---|:---|:---|
| [#2792](https://github.com/nearai/ironclaw/issues/2792) Gateway state convergence | **Architectural imperative** — blocks reliable multi-user | High — referenced by multiple bugs |
| [#2719](https://github.com/nearai/ironclaw/issues/2719) → [#2877](https://github.com/nearai/ironclaw/pull/2877) Merge queue CI | Developer velocity / safety | High — Phase 1 in progress |
| [#2921](https://github.com/nearai/ironclaw/pull/2921) Tool-driven webhooks | Infrastructure for external integrations | Medium — large PR, needs review |
| [#2897](https://github.com/nearai/ironclaw/pull/2897) User-authored WASM tools | Extensibility / ecosystem | Medium — blocked on multi-tenant registry isolation |
| [#2841](https://github.com/nearai/ironclaw/pull/2841) Multi-tenant channel instances | SaaS readiness | Medium — Phase 1, DB migration required |
| [#2920](https://github.com/nearai/ironclaw/issues/2920) Data persistence & upgrade safety | Hosted platform reliability | Medium — community request, architectural |
| [#2900](https://github.com/nearai/ironclaw/issues/2900) Decouple webhook listener from HTTP channel | Config flexibility | Lower — infrastructure debt |

**Prediction**: The next release (likely v0.26.0) will center on **engine v2 stability + gateway state convergence** as the foundation, with webhook infrastructure as the headline feature. Multi-tenancy will remain behind feature flags.

---

## 7. User Feedback Summary

### Pain Points (from QA bug bash + issues)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Integration fragility** | 8+ bugs across Google Sheets, Asana, Linear, Telegram, Slack | Critical |
| **Silent failures** | Telegram long messages, tool calls without descriptions, mission errors | High |
| **OAuth/state confusion** | "Activation failed" vs. "No configuration needed", re-auth loops | High |
| **Filesystem sandbox escape** | `/home/agent` inaccessible in hosted | High |
| **Concurrency limitations** | Cannot run multiple chats in parallel | Medium-High |

### Use Cases Emerging

- **Mission automation**: Repeated scheduling with external notifications (Telegram) — but reliability issues block adoption
- **Multi-channel operations**: Users expect seamless handoff between web, Slack, Telegram — state drift breaks this
- **Custom tool authoring**: WASM tool flow (#2897) indicates power-user demand for extensibility

### Satisfaction Signal

Mixed. The volume of P1/P2 bugs from a single QA day suggests **hosted-staging is not production-ready**. However, the rapid filing and detailed reproduction steps indicate an **engaged QA process** and team investment in quality.

---

## 8. Backlog Watch

### Long-Standing Items Needing Attention

| Item | Age | Risk | Notes |
|:---|:---|:---|:---|
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo | ~3 weeks | **High** | XL PR, high risk, touches 12 scopes; stalled? May be superseded by v2 work |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun Coding Plan | ~5 weeks | Medium | XL PR from new contributor; broad scope; likely needs rebase after v2 changes |
| [#2700](https://github.com/nearai/ironclaw/pull/2700) Descriptive chat titles | 4 days | Low | Replaces #2348; blocked on gateway refactor settling? |
| [#2699](https://github.com/nearai/ironclaw/pull/2699) MCP normalization fixes | 4 days | Medium | Replaces #2379; same dependency on gateway stability |
| [#2668](https://github.com/nearai/ironclaw/pull/2668) Negative max_tokens fix | 5 days | Low | Ready? Small, well-scoped, tests pass |

### Maintainer Action Needed

- **#1764 and #1446**: Decision required — merge, split, or close. Both are XL PRs accumulating merge debt.
- **Engine v2 epic coordination**: [#2767](https://github.com/nearai/ironclaw/issues/2767) has 6 comments but needs explicit maintainers' sign-off on the "callable-only" boundary to unblock [#2868](https://github.com/nearai/ironclaw/pull/2868).
- **CI transition**: [#2719](https://github.com/nearai/ironclaw/issues/2719) → [#2877](https://github.com/nearai/ironclaw/pull/2877) is Phase 1; Phases 2-3 (actual branch protection changes, default branch switch) need owner-level GitHub settings changes.

---

*Digest generated from 37 issues and 50 PRs updated 2026-04-23/24. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-24

## 1. Today's Overview

LobsterAI shows **strong engineering velocity** with 13 PRs merged/closed in the last 24 hours and zero open PRs, indicating an efficient, well-managed review pipeline. However, **no new release was cut today** despite significant feature accumulation in the `Release/2026.04.22` merge (#1805). Community engagement remains **moderately concerning**: 6 active issues received updates but none were resolved, including 5 stale issues from February that continue to linger without maintainer closure or action. The project appears to prioritize **internal feature delivery over community issue triage**, with today's activity heavily skewed toward NetEase Youdao employees (`liuzhq1986`, `btc69m979y-dotcom`) rather than external contributors.

---

## 2. Releases

**No new releases today.** The latest merged release PR (#1805, `Release/2026.04.22`) contains substantial feature payload but has not been tagged as a standalone release. Users building from source (see [Issue #26](https://github.com/netease-youdao/LobsterAI/issues/26)) report confusion about version tracking.

---

## 3. Project Progress

### Major Release Merge: `Release/2026.04.22` ([#1805](https://github.com/netease-youdao/LobsterAI/pull/1805))
- **Discord/Telegram multi-bot support**: Same IM platform can now host multiple bot instances without interference ([#1792](https://github.com/netease-youdao/LobsterAI/issues/1792), [#1794](https://github.com/netease-youdao/LobsterAI/issues/1794))
- **LM Studio local inference provider**: New model provider added to configuration UI ([#1787](https://github.com/netease-youdao/LobsterAI/issues/1787))
- **WeCom plugin upgrade**: `wecom-openclaw-plugin` bumped to 2026.4.22
- **Windows diagnostic enhancement**: Log exports now include `install-timing.log` for installation troubleshooting ([#1799](https://github.com/netease-youdao/LobsterAI/issues/1799))
- **Update requests carry version headers** for better telemetry

### Critical Bug Fixes
| PR | Area | Fix |
|:---|:---|:---|
| [#1807](https://github.com/netease-youdao/LobsterAI/pull/1807) | Cowork | Preserve draft input/attachments when switching sessions via "New Chat" |
| [#1804](https://github.com/netease-youdao/LobsterAI/pull/1804) | OpenClaw runtime | Restore `sharp` native binding mistakenly stubbed in [#1685](https://github.com/netease-youdao/LobsterAI/issues/1685); fix `NODE_PATH` for `cfmind` |
| [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) | Main | Increase `chat.send` RPC timeout 30s→90s (gateway initialization race condition) |
| [#1801](https://github.com/netease-youdao/LobsterAI/pull/1801) | Chat/MCP | Fix stale reply loop when aborting MCP tool calls + abort signal misfire |

### UI/UX Polish
| PR | Change |
|:---|:---|
| [#1809](https://github.com/netease-youdao/LobsterAI/pull/1809) | i18n copy updates for update-ready notifications |
| [#1808](https://github.com/netease-youdao/LobsterAI/pull/1808) | Constrain homepage input width to `max-w-3xl` (768px) |
| [#1799](https://github.com/netease-youdao/LobsterAI/pull/1799) | Expand tool call summary width; increase content max-width 896px→1024px |

### Infrastructure
| PR | Change |
|:---|:---|
| [#1806](https://github.com/netease-youdao/LobsterAI/pull/1806) | Upgrade POPO plugin, fix token expiration |
| [#1802](https://github.com/netease-youdao/LobsterAI/pull/1802) | Update stale tests for LM Studio, Telegram multi-instance, backup manager |
| [#1800](https://github.com/netease-youdao/LobsterAI/pull/1800) | Include `install-timing.log` in Windows log export |
| [#1798](https://github.com/netease-youdao/LobsterAI/pull/1798) | Optimize gateway restart: disable restart on focus/blur |

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#26](https://github.com/netease-youdao/LobsterAI/issues/26) — Linux self-build stuck at 0.1.16 | 4 | Version transparency | **Release process clarity**: Users cannot determine current version from website or repo; no version tags or changelog visible. Self-builders lack guidance. |
| [#15](https://github.com/netease-youdao/LobsterAI/issues/15) — Electron 40 startup crash | 2 | Runtime compatibility | **Electron/Node.js version policy**: Crash with `TypeError: Cannot set properties of undefined` on Electron 40.2.1 + Node v24.11.1. Suggests native module or bundling issue. |
| [#29](https://github.com/netease-youdao/LobsterAI/issues/29) — Request Codex login | 2 | Authentication | **Enterprise/developer identity**: Users want GitHub Copilot/Codex integration for code-centric workflows. |
| [#14](https://github.com/netease-youdao/LobsterAI/issues/14) — Feishu renderMode hardcoded + thinking tags | 1 | IM integration quality | **Production IM reliability**: Feishu channel ignores configuration; model reasoning leaks to users. |

**Analysis**: The 4-comment lead on [#26](https://github.com/netease-youdao/LobsterAI/issues/26) reveals a **critical documentation/release infrastructure gap**. Despite active development, users cannot correlate commits with installable versions. This creates support burden and discourages adoption.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#15](https://github.com/netease-youdao/LobsterAI/issues/15) | Electron 40 startup failure — complete app crash on macOS/Windows | **UNFIXED** — stale since Feb 20, no PR linked |
| **🟡 High** | [#1801](https://github.com/netease-youdao/LobsterAI/pull/1801) (fixed) | Stale reply loop + MCP abort signal misfire — corrupts conversation state | **FIXED** today |
| **🟡 High** | [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) (fixed) | Gateway RPC timeout (38s response vs 30s timeout) — message loss | **FIXED** today |
| **🟡 High** | [#1804](https://github.com/netease-youdao/LobsterAI/pull/1804) (fixed) | `sharp` native binding stubbed — image processing broken in packaged builds | **FIXED** today |
| **🟢 Medium** | [#14](https://github.com/netease-youdao/LobsterAI/issues/14) | Feishu renderMode ignored, thinking tags leak | **UNFIXED** — detailed technical analysis provided by reporter, no maintainer response |
| **🟢 Medium** | [#35](https://github.com/netease-youdao/LobsterAI/issues/35) | Discord connectivity diagnostics (screenshot-only, no description) | **UNFIXED** — needs triage |

**Stability Assessment**: Today's merges address **3 production-critical issues** (MCP state corruption, gateway timeouts, native binding regression), suggesting mature incident response. However, the unaddressed Electron 40 crash ([#15](https://github.com/netease-youdao/LobsterAI/issues/15)) affects **all new installs** on latest Electron — a growing compatibility risk.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Conversation deletion / batch management** | [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) | **HIGH** | Created today, 1 upvote; aligns with session management fixes in [#1807](https://github.com/netease-youdao/LobsterAI/pull/1807). Natural extension of current cowork workstream. |
| **Codex login / GitHub auth** | [#29](https://github.com/netease-youdao/LobsterAI/issues/29) | **MEDIUM** | Developer-oriented feature; project adding providers (LM Studio). OAuth complexity may delay. |
| **OpenAI API type selection** (Responses vs Chat Completions) | [#61](https://github.com/netease-youdao/LobsterAI/pull/61) | **MEDIUM-HIGH** | PR closed today after 2 months stale; may resurface as OpenAI deprecates Completions. |
| **Feishu renderMode: auto/card/raw** | [#14](https://github.com/netease-youdao/LobsterAI/issues/14) | **LOW** | Detailed fix spec provided by community, but no maintainer engagement since Feb. |

**Emerging Pattern**: The project is **aggressively expanding IM platform coverage** (Discord multi-bot, Telegram multi-bot, WeCom, POPO) while **neglecting polish on existing integrations** (Feishu). Risk of breadth-over-depth in channel support.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Severity |
|:---|:---|:---|
| [#26](https://github.com/netease-youdao/LobsterAI/issues/26) | **Version opacity**: "How do I know what version I have? Where is the changelog?" | High — adoption blocker |
| [#15](https://github.com/netease-youdao/LobsterAI/issues/15) | **Install-time crashes**: Fresh builds fail immediately on modern Electron | Critical — churn risk |
| [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) | **Conversation hygiene**: Cannot prune stale context, degrades AI quality over time | Medium — UX friction |
| [#14](https://github.com/netease-youdao/LobsterAI/issues/14) | **Enterprise IM broken**: Feishu configs ignored, reasoning exposed to end users | Medium — enterprise credibility |

### Satisfaction Signals
- Active **internal dogfooding**: Frequent gateway/timeout fixes suggest production deployment at Youdao
- **Responsive to internal PRs**: 13/13 PRs closed same day created

### Dissatisfaction Signals
- **External contributor exclusion**: All today's PRs from 2 employees; no community PRs merged
- **Issue neglect ratio**: 5/6 active issues marked stale, average age ~63 days without resolution
- **Communication void**: No release notes, no version tags, no response to detailed bug analyses

---

## 8. Backlog Watch

### Critical Attention Needed

| Item | Age | Risk | Recommended Action |
|:---|:---|:---|:---|
| [#15](https://github.com/netease-youdao/LobsterAI/issues/15) Electron 40 crash | **63 days** | **Breaking all new installs** | P0: Reproduce with Electron 40.2.1, audit native module compatibility, or pin supported Electron version |
| [#26](https://github.com/netease-youdao/LobsterAI/issues/26) Version transparency | **62 days** | **Adoption/support burden** | Add `CHANGELOG.md`, version tags, build-time version injection, website version display |
| [#14](https://github.com/netease-youdao/LobsterAI/issues/14) Feishu broken | **63 days** | **Enterprise customer impact** | Reporter provided fix spec; assign or acknowledge |
| [#29](https://github.com/netease-youdao/LobsterAI/issues/29) Codex login | **62 days** | **Developer segment loss** | Roadmap response or `help wanted` label |
| [#35](https://github.com/netease-youdao/LobsterAI/issues/35) Discord diagnostics | **62 days** | **Incomplete report, needs triage** | Request logs/repro steps or close as incomplete |

### Trend Alert
The **stale issue accumulation** (5 issues from Feb 20-21, all bumped today without resolution) suggests either:
1. Bot-driven "stale" label automation without human triage, or
2. Conscious deprioritization of pre-Release/2026.04.22 issues

Either case damages **community trust** and wastes reporter effort. The project should implement explicit **issue lifecycle policy** (close as "not planned" with explanation, or prioritize).

---

**Digest compiled from:** `netease-youdao/LobsterAI` GitHub activity 2026-04-23 → 2026-04-24

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-24

## 1. Today's Overview

Moltis demonstrated **high development velocity** with 21 items updated in 24 hours (9 issues, 12 PRs), split evenly between open and closed states. The project shows strong maintainer responsiveness with 6 PRs merged/closed in a single day, including fixes for multiple user-reported bugs. No new release was cut, suggesting the team is accumulating changes for a larger release. The activity pattern indicates a mature project in active polish phase — heavy focus on bug fixes, schema compatibility with diverse LLM providers, and UI/UX refinements rather than major architectural work.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today (6 items)

| PR | Author | Description | Impact |
|:---|:---|:---|:---|
| [#856](https://github.com/moltis-org/moltis/pull/856) | penso | **Schema normalization fix**: Deep-merge properties in `anyOf`/`oneOf` union collapse; strip redundant boolean enums | Fixes compatibility with Gemini (via OpenRouter) and Fireworks AI tool schemas |
| [#855](https://github.com/moltis-org/moltis/pull/855) | penso | **KV cache optimization**: Move datetime from system message to user content | Improves local LLM performance (llama.cpp, Ollama, LM Studio) by preventing cache invalidation |
| [#854](https://github.com/moltis-org/moltis/pull/854) | penso | **ElevenLabs TTS tests**: Wiremock + live integration tests for custom voices | Quality assurance for voice synthesis feature |
| [#853](https://github.com/moltis-org/moltis/pull/853) | penso | **Docker sandbox portability**: Skip sysfs tmpfs mounts for missing paths | Fixes WSL2, ARM, Raspberry Pi sandbox failures |
| [#852](https://github.com/moltis-org/moltis/pull/852) | penso | **MCP OAuth UX**: Add re-auth button and status badges to ServerCard | Resolves [#851](https://github.com/moltis-org/moltis/issues/851) |
| [#841](https://github.com/moltis-org/moltis/pull/841) | penso | **Signal messaging channel**: New `moltis-signal` plugin via signal-cli | Expands channel ecosystem beyond existing options |

**Key advancement**: Core infrastructure hardened across three vectors — **LLM provider compatibility** (schema fixes), **local deployment** (sandbox, KV cache), and **enterprise integrations** (MCP OAuth, Signal).

---

## 4. Community Hot Topics

| Item | Heat Indicator | Analysis |
|:---|:---|:---|
| [#176](https://github.com/moltis-org/moltis/issues/176) — Add datetime to system prompt context | 🔥🔥🔥 **16 comments, 👍1** | Longest-running active issue (Feb→Apr). Resolved by [#855](https://github.com/moltis-org/moltis/pull/855) with architectural pivot: datetime moved to *user content* rather than system message. Underlying need: **reliable temporal awareness for agents** without breaking local LLM optimizations. Community debated trade-offs extensively. |
| [#824](https://github.com/moltis-org/moltis/issues/824) — Don't auto-scroll to end of chat if scrolled up | 🔥 Active PR [#846](https://github.com/moltis-org/moltis/pull/846) | Classic UX friction in streaming chat interfaces. User wants **readability control** during active generation. PR implements industry-standard "↓ New messages" indicator pattern. |
| [#840](https://github.com/moltis-org/moltis/pull/840) — MCP server management skill + post-install recipes | 🔥 Substantial feature | Addresses **agent self-configuration**: enabling Moltis agents to programmatically manage their own MCP tool servers. Includes bundled documentation skill and 6 recipe templates (GBrain, GitHub, filesystem, memory, etc.). Signals move toward **autonomous agent operations**. |

**Underlying needs detected**: (1) Users want Moltis to work seamlessly with *their* infrastructure (local LLMs, custom voices, WSL2/ARM dev environments); (2) Chat UX must respect user attention and reading flow; (3) Agentic self-management reduces manual ops burden.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **High** | [#849](https://github.com/moltis-org/moltis/issues/849) — `parameters.required[0]: property is not defined` regression | **Closed** | [#856](https://github.com/moltis-org/moltis/pull/856) | Schema validation failure affecting Gemini via OpenRouter. **Recurring bug** ("is back") — suggests test gap in schema normalization pipeline. |
| **High** | [#848](https://github.com/moltis-org/moltis/issues/848) — Fireworks Fire Pass: JSON Schema enum `None` translation failure (HTTP 400) | **Open** | [#856](https://github.com/moltis-org/moltis/pull/856) (claimed) | Provider-specific schema incompatibility. Same PR #856 addresses but issue still open — may need verification. |
| **Medium** | [#828](https://github.com/moltis-org/moltis/issues/828) — Docker sandbox fails on WSL2 (missing `/sys/class/dmi`) | **Closed** | [#853](https://github.com/moltis-org/moltis/pull/853) | Platform portability issue. Fix generalized to ARM/Raspberry Pi via path existence checking rather than WSL detection. |
| **Medium** | [#735](https://github.com/moltis-org/moltis/issues/735) — Custom ElevenLabs voices don't work | **Closed** | [#854](https://github.com/moltis-org/moltis/pull/854) (tests) | Voice ID routing bug. Test coverage added; no explicit fix PR mentioned — may have been fixed by prior commit. |
| **Medium** | [#857](https://github.com/moltis-org/moltis/issues/857) — Silent memory turn saves with wrong dates in filenames | **Open** | None yet | Data integrity issue: memory files timestamped incorrectly. Silent failure pattern is concerning for long-term context reliability. |
| **Low** | [#851](https://github.com/moltis-org/moltis/issues/851) — MCP OAuth re-auth button missing from UI | **Closed** | [#852](https://github.com/moltis-org/moltis/pull/852) | UX gap in OAuth flow recovery. |

**Stability assessment**: Good triage velocity (5/6 bugs closed). Risk: [#857](https://github.com/moltis-org/moltis/issues/857) (wrong dates in memory filenames) is unassigned and affects core memory architecture. The "is back" phrasing in [#849](https://github.com/moltis-org/moltis/issues/849) suggests schema normalization needs regression tests.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#850](https://github.com/moltis-org/moltis/issues/850) — Support `client_secret` in MCP server OAuth override config | **Enterprise OAuth** | 🔥 High | Companion to merged [#852](https://github.com/moltis-org/moltis/pull/852); completes OAuth flow. Small scope, clear security need. |
| [#846](https://github.com/moltis-org/moltis/pull/846) — Smart auto-scroll for chat | **UX polish** | 🔥 High | PR open, well-scoped, closes [#824](https://github.com/moltis-org/moltis/issues/824). Standard pattern. |
| [#847](https://github.com/moltis-org/moltis/pull/847) — Wire up project combo dropdown | **Project management UI** | Medium | Scaffolding exists but was never connected ("dead code"). Completion unblocks project switching workflow. |
| [#837](https://github.com/moltis-org/moltis/pull/837) — Per-project code indexing toggle | **Privacy/performance control** | Medium | Adds `code_index_enabled` flag. Useful for sensitive repos or large codebases. |
| [#844](https://github.com/moltis-org/moltis/pull/844) — Default sub-agent presets + session Modes | **Agent orchestration** | Medium | "Hermes personality overlays" and "OpenClaw-style workflows" — substantial feature, may need iteration. |
| [#840](https://github.com/moltis-org/moltis/pull/840) — MCP server management skill | **Agent self-management** | Medium-Low | Large surface area; documentation skill is ready but full automation may need bake time. |

**Predicted next release themes**: OAuth completeness, chat UX refinement, and agent preset system.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Local LLM performance degradation** | [#176](https://github.com/moltis-org/moltis/issues/176) (16 comments), [#855](https://github.com/moltis-org/moltis/pull/855) | High — users actively track KV cache behavior |
| **Schema/provider compatibility whack-a-mole** | [#849](https://github.com/moltis-org/moltis/issues/849), [#848](https://github.com/moltis-org/moltis/issues/848) | High — each new provider breaks something |
| **Platform portability (WSL2, ARM, Raspberry Pi)** | [#828](https://github.com/moltis-org/moltis/issues/828), [#853](https://github.com/moltis-org/moltis/pull/853) | Medium — dev environment diversity |
| **Chat readability during streaming** | [#824](https://github.com/moltis-org/moltis/issues/824) | Medium — daily UX friction |
| **OAuth flow recovery** | [#851](https://github.com/moltis-org/moltis/issues/851) | Medium — enterprise blocker |

### Positive Signals
- Users engage deeply on technical trade-offs (16 comments on datetime placement)
- Active use of advanced features: custom voices, MCP servers, Docker sandboxing, multiple LLM providers
- Enterprise patterns emerging: OAuth, project-scoped settings, code indexing controls

### Satisfaction/Dissatisfaction Ratio
**Mixed-positive**: Rapid fix velocity builds trust, but recurring schema bugs and "dead code" in UI suggest quality gaps between backend and frontend maturity.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#857](https://github.com/moltis-org/moltis/issues/857) — Wrong dates in memory filenames | **1 day** (but 0 comments) | 🔶 Medium | **Unassigned memory corruption bug** — silent data integrity failure. Needs triage and assignment. |
| [#848](https://github.com/moltis-org/moltis/issues/848) — Fireworks enum `None` error | 1 day | 🔶 Medium | PR [#856](https://github.com/moltis-org/moltis/pull/856) claims fix but issue remains open. Needs verification closure. |
| [#850](https://github.com/moltis-org/moltis/issues/850) — `client_secret` in MCP OAuth | 1 day | 🔷 Low | Clear enhancement with motivated reporter (affanshahid, who also filed [#851](https://github.com/moltis-org/moltis/issues/851)). Good first issue or quick win. |

**Maintainer attention priority**: [#857](https://github.com/moltis-org/moltis/issues/857) should be highest — memory system reliability is foundational, and "silent" failures erode trust in long-running agent sessions.

---

*Digest generated from 21 GitHub items updated 2026-04-23. Project health: 🟢 Active, responsive, with localized quality risks in schema normalization and memory subsystems.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-24

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an active, maturing AI agent platform. The project released two versions (v1.1.4-beta.1 and v1.1.3.post1) addressing both forward development and critical regressions. Community engagement remains strong with 26 open/active issues and 16 open PRs under review. The focus areas today span **security hardening** (configurable auth bypass), **channel reliability** (DingTalk, Discord, WeChat fixes), **desktop experience improvements**, and **documentation expansion**. The high close/merge rate (34/50 PRs, 24/50 issues) suggests maintainers are keeping pace with contributions, though several long-standing issues around MCP client stability and memory management persist.

---

## 2. Releases

### [v1.1.4-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4-beta.1)
| Aspect | Detail |
|--------|--------|
| **Type** | Pre-release (beta) |
| **Changes** | Version bump; documentation language fixes in figures; console tooling improvements (`.prettierignore`, formatting) |
| **Breaking Changes** | None identified |
| **Migration Notes** | Standard beta upgrade path; primarily maintenance release |

### [v1.1.3.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.3.post1)
| Aspect | Detail |
|--------|--------|
| **Type** | Hotfix post-release |
| **Changes** | **Critical fix**: Reverted change to avoid Windows Defender false positive detection; desktop file download fix using native save dialog in pywebview |
| **Breaking Changes** | None — regression fix |
| **Migration Notes** | **Recommended for Windows users** experiencing Defender blocks or download issues in desktop mode |

> **Analyst Note**: The rapid post-release (v1.1.3.post1) indicates responsive handling of deployment blockers — the Defender issue likely affected Windows binary distribution.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Author | Impact |
|----|--------|--------|
| [#3739](https://github.com/agentscope-ai/QwenPaw/pull/3739) — Configurable `allow_no_auth_hosts` whitelist | @rayrayraykk | **Security enhancement**: Replaces hardcoded localhost auth bypass with user-configurable IP whitelist; addresses [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) |
| [#3730](https://github.com/agentscope-ai/QwenPaw/pull/3730) — Fix discord.py regex corruption in conda-unpack | @hongxicheng | **Stability fix**: Resolves [#3677](https://github.com/agentscope-ai/QwenPaw/issues/3677) — Discord channel crash on Windows due to regex pattern corruption |
| [#3737](https://github.com/agentscope-ai/QwenPaw/pull/3737) — Console security config UI polish | @zhaozhuang521 | UX improvement for tool execution security approval flow |
| [#3736](https://github.com/agentscope-ai/QwenPaw/pull/3736) — Docker backup documentation | @jinglinpeng | Operational docs — prevents data loss for containerized deployments |
| [#3741](https://github.com/agentscope-ai/QwenPaw/pull/3741) — ACP documentation polish | @x1n95c | Ecosystem documentation — Agent Communication Protocol |
| [#1427](https://github.com/agentscope-ai/QwenPaw/pull/1427) — Fix Ollama/LMStudio context length | @pan-x-c | **Long-standing fix merged**: Prevents premature truncation for local model users |
| [#3652](https://github.com/agentscope-ai/QwenPaw/pull/3652) — Security policy confirm button | @misskaori | UX: GUI approval instead of `/approve` command for tool use |

### Features Advancing (Open PRs)
- **Multimodal messaging** ([#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509)): Image/file support in progress — first-time contributor
- **Unsloth Studio provider** ([#3759](https://github.com/agentscope-ai/QwenPaw/pull/3759)): New local LLM hosting integration
- **Agent audit workflow** ([#3740](https://github.com/agentscope-ai/QwenPaw/pull/3740)): Built-in compliance/observability skill
- **Desktop taskbar icon fix** ([#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729)): Windows branding polish (WIP)

---

## 4. Community Hot Topics

### Most Active Discussions (by Comment Count)

| Rank | Issue/PR | Comments | Analysis of Underlying Need |
|------|----------|----------|----------------------------|
| 1 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) — Open Tasks / Help Wanted | **60** | **Meta-coordination hub** — Community demand for structured contribution pathways; indicates healthy contributor growth but needs better task discovery |
| 2 | [#2831](https://github.com/agentscope-ai/QwenPaw/issues/2831) — Web console `write_file` infinite loop, unstoppable | **9** | **Critical UX gap**: Users need emergency stop mechanisms when agents enter failure loops; stop button reliability |
| 3 | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) — Disabled safeguard still blocking commands | **7** | **Security policy transparency**: Users don't understand why rules fire; need better rule tracing/debugging |
| 4 | [#2317](https://github.com/agentscope-ai/QwenPaw/issues/2317) — Deployment conversation failure (Chinese) | **7** | **Onboarding friction**: EXE deployment complexity for non-technical users |
| 5 | [#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695) — Docker build `git: not found` | **6** | **Build reproducibility**: Missing dependencies in containerized builds |

**Emerging Pattern**: Strong demand for **operational transparency** — users want to understand *why* agents behave unexpectedly (safeguards, loops, failures) and need **graceful degradation** mechanisms.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| 🔴 **High** | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) — Safeguard bypass failure | **OPEN** | None yet | `TOOL_CMD_IFS_INJECTION` rule fires when disabled; cron jobs with `$(date)` syntax blocked |
| 🔴 **High** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) — MCP client TaskGroup hang | **OPEN** | None yet | Agent "zombie" state — responsive console but channel messaging dead; requires restart |
| 🔴 **High** | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) — Desktop hangs at "Waiting for HTTP ready" | **OPEN** | None yet | Windows startup failure, 300s timeout; blocks desktop usage entirely |
| 🟡 **Medium** | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) — `FunctionCallOutput` validation error | **OPEN** | None yet | `call_id` type validation fails on ARM/Armbian; persistent but non-fatal |
| 🟡 **Medium** | [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) — Unicode surrogate crash in SSE | **OPEN** | None yet | Console channel aborts on emoji/Unicode; streaming breaks |
| 🟡 **Medium** | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) — Cron `KeyError: weixin` | **OPEN** | [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) (open, under review) | Registry mismatch: `weixin` vs `wechat` identifier |
| 🟡 **Medium** | [#3748](https://github.com/agentscope-ai/QwenPaw/issues/3748) — `qwenpaw update` cannot shutdown processes | **OPEN** | None yet | Upgrade path blocked by stale process detection |
| 🟢 **Low/Fixed** | [#3677](https://github.com/agentscope-ai/QwenPaw/issues/3677) — Discord regex crash | **CLOSED** | [#3730](https://github.com/agentscope-ai/QwenPaw/pull/3730) | conda-unpack corrupts `discord.py` regex |
| 🟢 **Low/Fixed** | [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) — Localhost auth bypass broken | **CLOSED** | [#3739](https://github.com/agentscope-ai/QwenPaw/pull/3739) | Hardcoded bypass failed for `127.0.0.1` |

**Stability Assessment**: Two **critical reliability patterns** emerging: (1) MCP/client task lifecycle management causing hangs, and (2) Windows desktop startup fragility. The [#2831](https://github.com/agentscope-ai/QwenPaw/issues/2831) fix for unstoppable loops suggests awareness, but [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) shows security subsystem complexity creating false positives.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals for v1.1.4/v1.2 |
|---------|-------|------------------------|
| **Multimodal messages** (images/files) | [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) (PR open) | **Likely v1.1.4** — Active PR, first-time contributor, high user value |
| **Context menu in Desktop/Web** | [#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) | v1.2 candidate — UX polish, moderate effort |
| **Configurable shell command timeout** | [#3593](https://github.com/agentscope-ai/QwenPaw/issues/3593) (closed, likely implemented) | **In v1.1.4** — Closed with PR pattern suggests merge |
| **Apple Silicon ARM support for browser_use** | [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | v1.2 candidate — Platform expansion, Playwright config |
| **DingTalk long-message segmentation** | [#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742) | Channel reliability — may be fast-tracked |
| **OpenAI Responses API** | [#3531](https://github.com/agentscope-ai/QwenPaw/issues/3531) (closed) | Provider ecosystem expansion |
| **Self-evolving/proactive docs** | [#3755](https://github.com/agentscope-ai/QwenPaw/pull/3755) (PR open) | **Marketing/positioning for v1.1.4** |

**Prediction**: v1.1.4 stable will likely ship with **multimodal support**, **configurable timeouts**, and **self-evolving documentation**. The ARM browser support and context menus are v1.2 territory.

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows deployment fragility** | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) hang, [#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695) Docker git missing, Defender blocks | 🔴 Critical — Platform parity gap |
| **Agent loop/unstoppable execution** | [#2831](https://github.com/agentscope-ai/QwenPaw/issues/2831) write_file infinite retry | 🔴 High — Safety mechanism failure |
| **Security rule opacity** | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) disabled rule still fires | 🟡 Medium — Trust erosion |
| **Channel configuration complexity** | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) Weixin/Wechat naming, [#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742) DingTalk limits | 🟡 Medium — Enterprise adoption friction |
| **Upgrade path broken** | [#3748](https://github.com/agentscope-ai/QwenPaw/issues/3748) update command fails | 🟡 Medium — Operational risk |

### Positive Signals
- **Responsive security fixes**: Configurable auth whitelist ([#3739](https://github.com/agentscope-ai/QwenPaw/pull/3739)) shows mature security posture
- **Desktop polish investment**: Taskbar icon ([#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729)), native save dialogs indicate Windows user base importance
- **Documentation proactive expansion**: Self-evolving features, Docker notes, ACP docs

### Use Case Evidence
- **Enterprise messaging integration**: Heavy DingTalk, WeChat, Discord activity suggests **workplace AI assistant** deployment
- **Local/self-hosted preference**: Ollama, LMStudio, Unsloth provider additions; ARM support requests
- **Automation/cron workflows**: Multiple cron-related issues indicate **scheduled agent tasks** as core use case

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (Long-standing or Critical)

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) Open Tasks hub | ~1 month | Contributor coordination bottleneck | Pin, automate, or split into project board |
| [#3047](https://github.com/agentscope-ai/QwenPaw/issues/3047) MemorySearch database path hardcoded | ~2.5 weeks | **Data portability broken** — SQLite assumed, ignores Postgres config | Backend architecture review needed |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) Apple Silicon ARM browser | ~3.5 weeks | Platform expansion blocked | Playwright configuration — likely one-line fix |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) MCP client zombie state | ~3 days | **Production reliability** — no error, just silent failure | Deep task lifecycle investigation |
| [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) Desktop Windows hang | ~6 days | **New user blocker** — first impression failure | Process startup logging/debug mode |

### PRs At Risk of Stagnation

| PR | Status | Risk |
|----|--------|------|
| [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) Multimodal support | Open, first-time contributor | **High-value feature** — needs review bandwidth to land |
| [#3698](https://github.com/agentscope-ai/QwenPaw/pull/3698) Dockerfile `uv` optimization | Under review | Build performance — low risk, should merge |
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) Weixin channel fix | Under review | Fixes [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) — simple identifier change, should fast-track |

---

## Health Score: 🟢 7.5/10

| Dimension | Score | Note |
|-----------|-------|------|
| Velocity | 8/10 | 50/50 issue/PR throughput, 2 releases |
| Responsiveness | 7/10 | Good merge rate; some critical bugs persisting >3 days |
| Stability | 6/10 | Windows desktop, MCP hangs, security false positives |
| Community | 8/10 | Strong comment engagement, first-time contributors active |
| Documentation | 8/10 | Proactive docs expansion, multilingual support |

**Key Risk**: The **MCP client TaskGroup hang** ([#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)) and **Windows desktop startup failure** ([#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555)) are user-facing, non-diagnosable failures that damage trust in production deployments. Recommend priority escalation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-24

## 1. Today's Overview

ZeptoClaw saw **exceptionally high activity** with 19 issues and 17 PRs updated in 24 hours, indicating a project in active feature consolidation ahead of potential investor pitching. The maintainer team (qhkm, manelsen) closed 8 issues and merged 14 PRs with zero new releases, suggesting a focus on **infrastructure hardening and safety foundations** rather than versioned shipping. A striking pattern: nearly all closed items were **safety, CI, and config reliability features**, while open items cluster around **edge/IoT expansion** (Liquid AI, MQTT, offline mode, Raspberry Pi demos). The project appears to be executing a deliberate "trust before growth" strategy—locking down audit trails, SSRF prevention, and binary size budgets before pushing its 6MB edge-native thesis to broader adoption.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (14 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#528](https://github.com/qhkm/zeptoclaw/pull/528) | manelsen | **In-memory SHA-256 hash-chain audit trail for tool execution** | Closes [#221](https://github.com/qhkm/zeptoclaw/issues/221). Core safety infrastructure—every tool invocation now cryptographically chained for tamper evidence |
| [#527](https://github.com/qhkm/zeptoclaw/pull/527) | manelsen | **Config-time SSRF validation for provider endpoints** | Closes [#450](https://github.com/qhkm/zeptoclaw/issues/450). Blocks supply-chain/infra attacks at onboarding |
| [#526](https://github.com/qhkm/zeptoclaw/pull/526) | manelsen | **SHA256 verification for skill downloads** | Closes [#449](https://github.com/qhkm/zeptoclaw/issues/449). Prevents supply-chain tampering of community skills |
| [#524](https://github.com/qhkm/zeptoclaw/pull/524) | manelsen | **Coding benchmark fixture for agent comparisons** | Closes [#340](https://github.com/qhkm/zeptoclaw/issues/340). Enables reproducible evaluation, competitive positioning |
| [#525](https://github.com/qhkm/zeptoclaw/pull/525) | manelsen | **Explicit rejection of utility/lib crate approach** | Closes [#389](https://github.com/qhkm/zeptoclaw/issues/389). Architecture decision recorded—preserves monolithic control |
| [#523](https://github.com/qhkm/zeptoclaw/pull/523) | manelsen | **Telegram config compatibility fix** | Closes [#522](https://github.com/qhkm/zeptoclaw/issues/522). Restores legacy config inference |
| [#529](https://github.com/qhkm/zeptoclaw/pull/529) | qhkm | **Fix Rust 1.95 clippy lints** | Unblocks CI pipeline after toolchain bump |
| [#534](https://github.com/qhkm/zeptoclaw/issues/534) | manelsen | **Fix PR CI failures (clippy + rustls-webpki advisories)** | Security compliance restored |
| [#542](https://github.com/qhkm/zeptoclaw/pull/542), [#521](https://github.com/qhkm/zeptoclaw/pull/521) | qhkm, dependabot | **cargo-deny-action bump 2.0.15→2.0.16** | Dependency hygiene |
| [#520](https://github.com/qhkm/zeptoclaw/pull/520), [#519](https://github.com/qhkm/zeptoclaw/pull/519), [#515](https://github.com/qhkm/zeptoclaw/pull/515), [#510](https://github.com/qhkm/zeptoclaw/pull/510), [#469](https://github.com/qhkm/zeptoclaw/pull/469) | dependabot | Routine dependency bumps (taiki-e, docker/build-push, react-router, astro, download-artifact) | Maintenance automation |

**Key trajectory**: The project executed a **safety sprint**—audit trails, SSRF guards, digest verification, and CI reliability all landed simultaneously. This appears coordinated preparation for credibility demonstrations (investor pitch mentioned in [#530](https://github.com/qhkm/zeptoclaw/issues/530)).

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|:---|:---|:---|
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) Liquid AI (LFM) provider integration | 2 comments, P2-high | **Edge-native model diversification** — project seeks non-transformer architectures for memory-constrained deployment; LEAP SDK mobile integration signals robotics/IoT go-to-market |
| [#543](https://github.com/qhkm/zeptoclaw/pull/543) Liquid AI OpenAI-compatible provider | Open PR | Rapid validation of #541 via registry-only plumbing; "pure registry" approach minimizes code risk while testing market interest |

**Analysis**: Liquid AI integration is the **only topic with multi-comment engagement**, suggesting community (or core team) prioritization of edge-model differentiation over cloud-provider parity. The parallel issue+PR structure indicates qhkm is driving this as both product manager and implementer.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|:---|:---|:---|:---|
| **Medium** | [#522](https://github.com/qhkm/zeptoclaw/issues/522) Telegram config not loading in gateway mode | **CLOSED** | [#523](https://github.com/qhkm/zeptoclaw/pull/523) |
| **Medium** | [#534](https://github.com/qhkm/zeptoclaw/issues/534) CI failures from clippy lints + rustls-webpki advisories | **CLOSED** | [#529](https://github.com/qhkm/zeptoclaw/pull/529) |
| **Low** | [#533](https://github.com/qhkm/zeptoclaw/issues/533) Flaky test from env leakage (`test_load_nonexistent`) | **OPEN** | None yet; hermetic wrapper script proposed |

**Assessment**: No critical crashes reported. The Telegram bug was a **regression in config inference** (legacy key handling), now resolved. CI instability from toolchain drift was aggressively patched. The remaining flaky test is **technical debt** with a known root cause—low user impact but signals test hygiene gaps.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Next Version Features

| Feature | Issue/PR | Rationale |
|:---|:---|:---|
| **Binary size budget CI gate** | [#537](https://github.com/qhkm/zeptoclaw/issues/537) P1-critical | "Strategic moat" language; blocking infrastructure; trivial to implement |
| **Config versioning + migration** | [#530](https://github.com/qhkm/zeptoclaw/issues/530) P1-critical | Explicitly tied to investor pitch; schema lock needed before adoption growth |
| **ZEPTOCLAW_HOME env var** | [#531](https://github.com/qhkm/zeptoclaw/issues/531) P2-high | Prerequisite for testing reliability and container deployment; referenced Hermes pattern |
| **CI coverage for optional integrations** | [#545](https://github.com/qhkm/zeptoclaw/issues/545) / [#544](https://github.com/qhkm/zeptoclaw/pull/544) | In-flight PR; prevents feature drift |

### Medium-Term Strategic Bets (edge/IoT thesis)

| Feature | Issue | Market Signal |
|:---|:---|:---|
| **Offline mode (Ollama/llama.cpp fallback)** | [#539](https://github.com/qhkm/zeptoclaw/issues/539) | Factory floor, ships, mines — explicitly industrial edge |
| **MQTT first-class channel** | [#538](https://github.com/qhkm/zeptoclaw/issues/538) | Home Assistant, AWS IoT Core, industrial PLC integration |
| **Raspberry Pi "brain+muscles" walkthrough** | [#540](https://github.com/qhkm/zeptoclaw/issues/540) | **Canonical demo** for 6MB thesis; marketing-critical |
| **Feishu/Lark + Line channels** | [#536](https://github.com/qhkm/zeptoclaw/issues/536) | Southeast Asia commerce expansion |

**Prediction**: The next tagged release will likely bundle #537, #530, #531 as **infrastructure 1.0**, followed by a **marketing release** featuring #540 (Raspberry Pi demo) and one of #538/#539 for IoT credibility.

---

## 7. User Feedback Summary

### Explicit Pain Points
- **Config fragility**: Telegram legacy keys breaking (#522), hardcoded home directory preventing multi-tenant use (#531), no upgrade path for schema changes (#530)
- **Safety trust gaps**: Skills from community hub need scanning (#535); shell blocklist likely incomplete (#532)
- **Edge deployment credibility**: "6MB" is "marketing copy without concrete demo" (#540); need offline resilience (#539)

### Implicit Signals
- **No user-reported crashes or performance issues** — stability appears adequate for current adoption level
- **300+ stars, pre-investor pitch** (#530) — project transitioning from hobby to product; feedback increasingly self-generated by core team rather than external users
- **Hermes Agent as reference architecture** — repeatedly cited for patterns (env isolation, shell blocklist, audit trails, config migration). Suggests either competitive benchmarking or aspiration to match perceived gold standard

### Satisfaction/Dissatisfaction
- **Satisfied**: Safety posture improving rapidly; CI reliability restored; dependency maintenance automated
- **Dissatisfied**: Edge/IoT story still unproven (no Raspberry Pi demo); SEA market channels incomplete; binary size unguarded

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#517](https://github.com/qhkm/zeptoclaw/pull/517) Bump sha2 0.10.9→0.11.0 | 9 days open | **Security/cryptographic dependency** — audit trail (#528) and skill verification (#526) both depend on sha2; version drift creates compatibility risk | Maintainer decision: merge or close before next release |
| [#389](https://github.com/qhkm/zeptoclaw/issues/389) / [#525](https://github.com/qhkm/zeptoclaw/pull/525) Lib crate evaluation | ~5 weeks | **CLOSED with decision** — but taqtiqa-mark (external contributor) proposed; no follow-up engagement | None; decision recorded |
| [#340](https://github.com/qhkm/zeptoclaw/issues/340) Coding benchmark | ~6 weeks | **CLOSED** — but no evidence of external usage yet | Monitor for community adoption |

**Critical attention**: [#517](https://github.com/qhkm/zeptoclaw/pull/517) is the only stale item with security implications. The sha2 bump overlaps with today's merged safety features—delay risks technical debt in cryptographic stack.

---

*Digest compiled from 19 issues and 17 PRs updated 2026-04-23. Project health: **strong velocity, safety-focused, pre-release consolidation**.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-24

## 1. Today's Overview

ZeroClaw shows **high-velocity development** with 50 issues and 50 PRs active in the last 24 hours, indicating a mature, actively maintained project with substantial contributor engagement. The project is currently in a **pre-release stabilization phase** for v0.7.4, with an emergency v0.7.3 having shipped recently due to "broken tags blowout." No new releases were cut today. The community is heavily focused on **provider compatibility fixes** (Anthropic, Gemini, Ollama, MiniMax), **infrastructure hardening** (Docker sandboxing, memory backends, cancellation tokens), and **channel expansion** (Mattermost, Matrix, Slack threading). With 34 open PRs and 45 active issues, maintainer bandwidth appears stretched, particularly around schema migrations and security-sensitive changes.

---

## 2. Releases

**No new releases today.** The v0.7.4 milestone is actively tracked in [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877), renumbered after an emergency v0.7.3 release. Key remaining blockers include:
- `feat(skills): land review-session skill, retire github-pr-...` (#5910)
- Schema v3 breaking field migrations (#5947)

---

## 3. Project Progress

### Merged/Closed PRs Today (5 of 16 total updated PRs)

| PR | Title | Significance |
|:---|:---|:---|
| [#5492](https://github.com/zeroclaw-labs/zeroclaw/pull/5492) | docs: rename Smooth Crab to Icy Crab in all READMEs | Brand consistency across 31 i18n files |
| [#5304](https://github.com/zeroclaw-labs/zeroclaw/pull/5304) | fix(provider): filter empty content blocks in Bedrock message conversion | **Production fix**: Prevents Bedrock 400 errors on daemon restarts |
| [#5365](https://github.com/zeroclaw-labs/zeroclaw/pull/5365) | fix(gateway): track pre-built web dashboard in git for reliable installs | **Reliability**: Eliminates "build with npm" friction for brew installs |
| [#5302](https://github.com/zeroclaw-labs/zeroclaw/pull/5302) | fix(cost): scope cost tracking context for CLI, cron, and gateway agents | **Observability gap closed**: Cost tracking now works across all agent types, not just channels |
| [#5305](https://github.com/zeroclaw-labs/zeroclaw/pull/5305) | fix(channels): refresh stale Qwen OAuth token in channel provider cache | **Auth reliability**: Fixes channel-specific token expiration vs. CLI |

### Notable Advanced Features (Open PRs)

| PR | Title | Impact |
|:---|:---|:---|
| [#6016](https://github.com/zeroclaw-labs/zeroclaw/pull/6016) | feat(memory): re-introduce PostgreSQL backend | **Multi-instance deployments unblocked** — restores shared, concurrent-write store |
| [#6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010) | feat(channels): implement `request_approval()` for Discord, Slack, Signal, Matrix, WhatsApp | **Critical security gap**: `always_ask` tool calls were silently auto-denied outside Telegram/CLI |
| [#6019](https://github.com/zeroclaw-labs/zeroclaw/pull/6019) | feat(config): schema v3 — Mattermost `bot_token` optional, `channel_id` → `channel_ids` | Breaking config change; merge-blocked by #5947 |
| [#5735](https://github.com/zeroclaw-labs/zeroclaw/pull/5735) | feat(features): decouple gateway and tui-onboarding from agent-runtime | **Architecture**: Enables compiling channels without HTTP server deps |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Rank | Issue | Comments | Core Need |
|:---|:---|:---|:---|
| 1 | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) [CLOSED] `runtime.kind = "native"` does not bypass Docker for shell tool execution | 12 | **Security/compliance**: FINOS CDM use case (InvestorClaw) requires native execution without Docker; reporter is independent contributor building production-grade skill |
| 2 | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) [OPEN] Where is napcat channel / OneBot support | 8 | **Ecosystem expansion**: Chinese IM protocol (QQ/OneBot 11) integration; community demand for non-Western platforms |
| 3 | [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) [OPEN] v0.7.4 milestone tracking | 6 | **Release coordination**: Post-emergency-release stabilization |
| 4 | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) [OPEN] Document `gateway.web_dist_dir` & `ZEROCLAW_WEB_DIST_DIR` | 6 | **Onboarding friction**: S0 severity — users can't discover web dashboard configuration |
| 5 | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) [OPEN] Schema v3 — batch breaking field migrations | 5 | **Technical debt**: Coordinated migration to minimize user disruption |

### Underlying Needs Analysis

- **Enterprise readiness**: #5719's FINOS CDM compliance angle signals institutional adoption; native execution mode is a hard requirement for regulated environments
- **Global market fit**: #2503's napcat/OneBot request reveals gap in Chinese market coverage vs. competitors
- **Documentation as bug**: #5847 rated S0 for "data loss / security risk" purely due to missing docs — indicates documentation quality directly impacts perceived security posture

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| **S0** | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | OPEN | No | Web dashboard config undocumented — users cannot discover how to enable UI |
| **S0** | [#5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991) | OPEN | No | Failed cron job — morning recap with calendar/email/weather tools fails; potential data loss |
| **S0** | [#5646](https://github.com/zeroclaw-labs/zeroclaw/issues/5646) | OPEN | No | Memory embeddings not auto-generated with Ollama — vectors never persisted to `brain.db` |
| **S1** | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | OPEN | No | Ollama provider fails when tools needed — session-breaking error |
| **S1** | [#6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007) | OPEN | No | Anthropic provider always sends `temperature`, breaking Claude 4.7 |
| **S1** | [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | OPEN | No | Gateway chat succeeds but `/api/cost` stays zero, no trace files written |
| **S1** | [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | OPEN | No | Telegram→llama.cpp responses not clearly addressed to assistant |
| **S1** | [#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) | OPEN | No | `zeroclaw-desktop` crash for "No provider set" |
| **S2** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | OPEN | No | Too much emphasis on memory vs. current prompt in cron jobs |
| **S3** | [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) | OPEN | In progress | Web dashboard unavailable in Docker image — `web/dist` not copied |

### Regressions & Provider Fragility

- **Claude 4.7 compatibility**: #6007 is a **forward-compatibility regression** — Anthropic's new model rejects previously-valid parameters. No fix PR yet.
- **Ollama ecosystem**: #5962 and #5646 show Ollama path is **insufficiently tested** for tools and embeddings, despite being a popular local-first choice.
- **Cost tracking**: #6001 suggests #5302's fix may be incomplete for gateway paths, or a new regression introduced.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.7.4 | Signal Strength |
|:---|:---|:---|:---|
| **PostgreSQL memory backend** | [#6016](https://github.com/zeroclaw-labs/zeroclaw/pull/6016) | High | PR open, addresses multi-instance deployment blocker |
| **Schema v3 (breaking migrations)** | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947), [#6019](https://github.com/zeroclaw-labs/zeroclaw/pull/6019) | **Merge-blocker** | Explicit "no partial landings" policy |
| **WASM plugin bridge (Extism)** | [#5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) | Medium | Phase 2 D2 of microkernel architecture; infrastructure landed |
| **Plugin env var allowlist** | [#5919](https://github.com/zeroclaw-labs/zeroclaw/pull/5919) | Medium | Security hardening for WASM sandbox |
| **Multi-provider support** | [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) | Low-Medium | Long-standing request; architecture work in #5735 may enable |
| **Matrix channel delivery** | [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) [CLOSED] | **Shipped** | Fixed and closed |
| **Napcat/OneBot channel** | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Low | No assignee, "no-stale" tag prevents closure |
| **Cancellation token propagation** | [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836), [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835), [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) | High | Three coordinated issues from same author (Audacity88), risk:high tags |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Docker/native execution confusion** | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719), [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905), [#5906](https://github.com/zeroclaw-labs/zeroclaw/pull/5906) | High |
| **Provider-specific breakages** | [#6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007) (Anthropic/Claude 4.7), [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) (Ollama tools), [#6049](https://github.com/zeroclaw-labs/zeroclaw/pull/6049) (Gemini OAuth), [#5975](https://github.com/zeroclaw-labs/zeroclaw/pull/5975) (Gemini/OpenRouter) | Critical |
| **Observability gaps** | [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) (cost tracking), [#5504](https://github.com/zeroclaw-labs/zeroclaw/issues/5504) (LLM I/O logging), [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) (dashboard config) | High |
| **Memory system over-prioritization** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Medium |
| **Desktop/Tauri instability** | [#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984), [#5964](https://github.com/zeroclaw-labs/zeroclaw/pull/5964) (rustls init) | Medium |

### Use Cases Emerging

- **Financial services compliance**: [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719)'s InvestorClaw/FINOS CDM 5.x portfolio analysis skill
- **Personal productivity automation**: [#5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991)'s morning recap with calendar/email/weather
- **Multi-instance/team deployments**: [#6016](https://github.com/zeroclaw-labs/zeroclaw/pull/6016)'s PostgreSQL backend restoration

### Satisfaction Indicators

- Active external contributions (perlowja's Docker fixes, dongs0104's Mattermost PR re-application)
- Users building dependent projects (InvestorClaw) and filing detailed repros
- "no-stale" tags protecting long-term feature requests suggest maintainer responsiveness to community priorities

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Why It Needs Action |
|:---|:---|:---|:---|
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) Napcat/OneBot channel | 53 days | Community growth | 8 comments, "no-stale" tag; Chinese market expansion blocked |
| [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) Multiple model providers | 47 days | Architecture | 2 comments, "no-stale"; multi-model deployment is common pattern |
| [#2973](https://github.com/zeroclaw-labs/zeroclaw/issues/2973) Optimize loop run print performance | 47 days | Performance | Screenshot evidence of memory copying overhead; no assignee |
| [#5412](https://github.com/zeroclaw-labs/zeroclaw/issues/5412) Discord thread isolation | 18 days | UX regression | Thread context bleeding; 1 comment, no PR |
| [#5646](https://github.com/zeroclaw-labs/zeroclaw/issues/5646) Ollama embeddings not persisted | 13 days | Data loss | S0 severity, no fix PR, affects local-first users |
| **PR [#5735](https://github.com/zeroclaw-labs/zeroclaw/pull/5735)** | 10 days | Architecture | Decouples gateway/TUI from runtime; enables cleaner channel builds; merge conflicts likely accumulating |

### Coordination Risks

- **Schema v3 batch landing**: [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)'s "no partial landings" policy creates a **big-bang merge risk** with [#6019](https://github.com/zeroclaw-labs/zeroclaw/pull/6019) and potentially other PRs. Maintainer coordination needed to avoid rebase hell.
- **Audacity88's cancellation token trilogy** ([#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835), [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836), [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837)): All risk:high, all 1 comment, no PRs linked. Security-sensitive session ownership and resource leak fixes may need dedicated review bandwidth.

---

*Digest generated from 50 issues and 50 PRs updated 2026-04-23 to 2026-04-24. All links reference github.com/zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*