# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-26 00:40 UTC

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

# OpenClaw Project Digest — 2026-06-26

---

## 1. Today's Overview

OpenClaw saw high activity today with **500 updated issues** (476 open) and **500 updated PRs** (412 open, 88 merged/closed), though the vast majority of "updated" items reflect triage-label sweeps rather than new human activity. **No new releases** were published. The backlog remains dominated by long-standing session-memory/compaction bugs, security gaps, and multi-user/multi-tenant gaps. A large volume of PR traffic is autonomous (AI-assisted, "Label-Edit" style) churn — especially PRs tagging `clawsweeper:` triage labels — which adds noise but also keeps the tracker current. Maintainer review bandwidth is the clear bottleneck: every top issue shows `needs-maintainer-review` and `needs-product-decision`, and many are stale.

---

## 2. Releases

**No new releases** in the reporting window. The latest tagged version remains from late March 2026 (≈ `2026.3.24`), which multiple users report is missing fixes already on `main` (heartbeat `IsolatedSessions` regression, Hardcoded local-path bug). This reinforces user frustration about release cadence.

---

## 3. Project Progress (Closed/Merged PRs)

| # | PR | Status | Notes |
|---|----|--------|-------|
| 1 | **#94411** fix(sandbox): use config-resolved workspace for skill sync fallback | ✅ Closed | Prevents wrong `DEFAULT_AGENT_WORKSPACE_DIR` fallback when `workspaceDir` is unset. |
| 2 | **#92520** Fix Codex synthetic usage in status without local OpenAI profiles | ✅ Closed | Routes `/status` Codex synthetic usage through Codex app-server marker even without a local OpenAI profile label. |
| 3 | **#68936** Autofix: add PR review autofix pipeline + Windows daemon | ✅ Closed | Adds a Claude-Agent-SDK-based self-healing PR workflow and a Windows background daemon. |
| 4 | **#96143** fix(plugins): avoid spurious npm spec error after metadata failure | ✅ Closed | Prevents a confusing secondary error when transient npm metadata lookup fails (closes #77616). |

**Open / near-merge highlights** awaiting maintainer look (size L–XL, `status: ready for maintainer look`):
- **#90923** — macOS LaunchAgent plist path fix when `$HOME` is on external APFS (P1).
- **#91000** — Preserve `chat.abort` terminal outcome after dispatch rejection (prevents outcome masking).
- **#96106** — Surface Anthropic reasoning and pre-tool commentary on **Discord** (opt-in defaults).
- **#96818** — Wait for native Codex tool completion (fixes #96452, computer-use watchdog abort).
- **#95996** — Keep yielded parent runs deferred until subagents settle (prevents premature parent completion).
- **#95604** — Show subagent progress on Discord (count reactions + typing keepalive).

---

## 4. Community Hot Topics

Below are the most-discussed (by comment count) open issues in the reporting window, reflecting where the community is most active:

1. **[#48788](https://github.com/openclaw/openclaw/issues/48788)** — Centralized filename encoding for multi-encoding `Content-Disposition` (18 comments, diamond lobster) — UTF‑8 → Latin‑1 fix already landed; proposal extends to Shift‑JIS/GB18030/EUC‑KR.
2. **[#63918](https://github.com/openclaw/openclaw/issues/63918)** — Cron `agentTurn` sends `thinking=none`, breaking gpt‑5‑nano (17 comments) — needs correct minimal-think mapping.
3. **[#58450](https://github.com/openclaw/openclaw/issues/58450)** — Agent promises follow‑up but never triggers one (15 comments, platinum hermit) — trust/agency correctness.
4. **[#50090](https://github.com/openclaw/openclaw/issues/50090)** — Skill dev & ClawHub ecosystem friction (15 comments) — “write a SKILL.md and maybe it installs.”
5. **[#45740](https://github.com/openclaw/openclaw/issues/45740)** — **gh‑issues skill injects raw GitHub bodies into sub‑agent prompt** (14 comments, security). Needs output isolation.
6. **[#53628](https://github.com/openclaw/openclaw/issues/53628)** — `${XDG_CONFIG_HOME}` not expanded during skill install in Docker (13 comments).
7. **[#57326](https://github.com/openclaw/openclaw/issues/57326)** — CLI‑backed helper paths still bypass `runCliAgent()` on `main` (13 comments).
8. **[#51429](https://github.com/openclaw/openclaw/issues/51429)** — **Hardcoded `/Users/wangtao` path shipped in release builds** (12 comments, data-loss/build-integrity).

> **Sentiment:** Consistent 👍 counts on long-standing P1/P2 issues signal community demand for resolution. Chinese-language issues (#51429, #64046) highlight APAC user base growing faster than documentation and hardening.

---

## 5. Bugs & Stability

### 🔴 P1 Severity (crash / data-loss / security)

| # | Issue | Impact | Fix PR? |
|---|-------|--------|---------|
| 1 | **[#55334](https://github.com/openclaw/openclaw/issues/55334)** — `sessions.json` unbounded growth → gateway OOM (skillsSnapshot duplicated, no pruning) | Availability / OOM | none open |
| 2 | **[#54155](https://github.com/openclaw/openclaw/issues/54155)** — 389 MB → 14.7 GB in 4 days (memory leak) | Availability / OOM | none |
| 3 | **[#57326](https://github.com/openclaw/openclaw/issues/57326)** — CLI‑backed helper bypasses `runCliAgent` dispatch | Agent routing correctness | none landed |
| 4 | **[#51396](https://github.com/openclaw/openclaw/issues/51396)** — `clearUnboundScopes` strips operator scopes for non‑local token‑auth clients (regression) | Auth regression | linked PR open |
| 5 | **[#91009](https://github.com/openclaw/openclaw/issues/91009)** — Codex PreToolUse hook spawns CPU‑bound `openclaw-hooks` processes, stalls gateway RPC | Performance / DoS | #96818 |
| 6 | **[#65624](https://github.com/openclaw/openclaw/issues/65624)** — Mattermost slash commands use cleartext callback URLs (CVSS 7.6–8.6) | Security | linked PR open |
| 7 | **[#53599](https://github.com/openclaw/openclaw/issues/53599)** — Chrome extension browser relay removed, no cross‑machine replacement (regression, 5 👍) | Usability regression | none |
| 8 | **[#53540](https://github.com/openclaw/openclaw/issues/53540)** — Embedded runner “Network connection lost” on large tool params + timeout | Reliability | none |
| 9 | **[#52130](https://github.com/openclaw/openclaw/issues/52130)** — Telegram retry jitter type mismatch + restart storm | Crash loop | linked PR open |

### 🟠 P2 Severity (incorrect behavior, degraded UX)

- **#45740** — gh‑issues skill injects raw issue body into sub‑agent prompt (security‑adjacent).
- **#53628** — `${XDG_CONFIG_HOME}` not expanded when installing a skill in Docker.
- **#52249** — ACP parent session stuck waiting for completed child.
- **#49603** — Orphaned lock files not cleared on gateway restart.
- **#58957** — Model switch with oversized carried‑over context fails silently.
- **#51363** — Docker sandbox container name collision across multiple instances.
- **#52972** — Spurious “I did not schedule a reminder” note appended.
- **#51429** — Hardcoded `/Users/wangtao` path shipped in production build.

---

## 6. Feature Requests & Roadmap Signals

High-signal user requests (multiple 👍, clear problem/solution scope):

1. **#64046 — Sensitive‑data masking** (API keys/tokens/secrets) — plaintext in `openclaw.json`, logs, UI. Likely to land in next hardening cycle.
2. **#50090 — ClawHub & Skill Ecosystem overhaul** — priority config surface, store quality/install UX (also **#50199** add skill priority).
3. **#96173 — `local-realtime-voice` gateway‑relay extension** (Whisper + Ollama + Kokoro TTS) — free, self-hosted voice/dictation; can unblock APAC mobile use‑cases.
4. **#95604 / #95996 — Discord subagent progress UI** — count reactions + yielded parent deferral; likely within 1–2 weeks given PR readiness.
5. **#96106 — Anthropic reasoning / pre‑tool commentary on Discord** — opt‑in support; needs product decision on defaults.
6. **#63930 — Anthropic `advisor` (server‑side beta) tool** — competitive parity.
7. **#60381 — Multi‑slot memory architecture** (replace single `plugins.slots.memory`) — uses cases like layering embedding stores.
8. **#63990 — Multi‑index embedding with model‑aware failover** (no mixed vector spaces).
9. **#54373 — Context provenance metadata** (source/volatility tags in injected system prompt).

**Predicted next-release priorities:** security hardening (sensitive-data masking, Matterstable callback, prompt injection in skills), gateway memory stability (sessions.json pruning), and skill/subagent UX (ClawHub, Discord progress).

---

## 7. User Feedback Summary

- **Session memory & compaction** remain the single biggest pain cluster (#55334, #54155, #58450, #43747, #52249, #48874). Users report OOM, lost context, and agents “hallucinating follow‑ups.” Trust in long‑running agents is degraded.
- **Security hygiene is openly expected**: plaintext secrets in config, unsanitized LLM prompt injection sites, cleartext callback URLs. Three separate reporters explicitly called these “regressions” or “blockers.”
- **APAC localization**: non‑Latin filename handling (#48788), hardcoded Chinese-language paths in builds (#51429). Users feel the release process needs better CI checks.
- **Mobile & IM channel polish**: WhatsApp backfill (#50093), Telegram retry jitter and lock‑on‑restart storms (#52130), screen‑reader over‑announcement during streaming (#65538).
- **Skill authoring affordances (#50090, #50739)**: system event priority/bypass queue, skill priority configuration, persistent task‑status surface.
- **Docs/release sync (#48920)**: Live docs reference `IsolatedSessions` config that isn’t in the last shipped version.
- **Sentiment is constructive but frustration is rising** on long‑flagged P1/P2 items that stay open for 2–4 months with “needs‑maintainer” labels.

---

## 8. Backlog Watch — Long‑Unanswered / Needs Attention

| Item | Age | Reason to escalate |
|------|-----|--------------------|
| **#55334** — sessions.json OOM | ~3 months | Multiple × OOM reports; no fix PR; P1 crash-class. |
| **#54155** — 389 MB → 14.7 GB memory leak | ~3 months | Reproducible multi-day; no fix; impacts stability posture. |
| **#57326** — CLI‑backed paths bypass dispatch | ~3 months | Triaged, fix shape clear but no landed PR. |
| **#53628** — `${XDG_CONFIG_HOME}` not expanded | ~3 months | Small fix, multiple Docker users. |
| **#53599** — Chrome extension relay removed with no replacement | ~2 months | 5 👍, regression. |
| **#51429** — Hardcoded `/Users/wangtao` path in release | ~3 months | Build/release QA gap. |
| **#52249** — ACP parent stuck after child completes | ~3 months | Blocks multi‑agent workflows. |
| **#52130** — Telegram retry jitter + SecretRef confusion | ~3 months | Host‑reboot class bug. |
| **#50739 — System event priority/bypass-queue** (feature) | ~3 months | Important reliability fix; no design draft. |
| **#61519 — CI: circular-dependency detector** | ~2 months | Long‑standing infra debt, XL and waiting on author. |

---

**Bottom line:** Stability and security gaps dominate the backlog, while the team has concentrated recent merged work toward plugin robustness, sandbox correctness, and Codex integration. The unaddressed OOM / memory‑leak cluster and the prompt‑injection surface in built‑in skills are the most urgent latent risks. The strong AI‑assisted PR triage volume is a net positive for labeling hygiene but should not be mistaken for feature velocity.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: Personal AI Agent & Assistant Open-Source Landscape

**Reporting Date:** 2026-06-26 | **Projects Analyzed:** 14

---

## 1. Ecosystem Overview

The open-source personal AI agent ecosystem is experiencing a period of intense maturation. Having moved past initial proof-of-stage, leading projects are now contending with production-grade concerns: **security hardening** (supply-chain signing, credential isolation, sandbox trust boundaries), **context/session stability** (memory leaks, compaction, OOM), and **multi-user/multi-tenant architecture**. The landscape is bifurcating into two tiers: full-featured platforms (OpenClaw, Hermes, IronClaw) pursuing enterprise-readiness and deep channel integration, and lean focused agents (NanoClaw, PicoClaw, NanoBot) optimizing for composability and minimal footprints. Across the board, **AI-assisted triage and PR workflows** are now standard, inflating raw activity metrics but not always reflecting proportional feature velocity.

---

## 2. Activity Comparison

| Project | Issues (Δ24h) | PRs (Δ24h) | Releases (Δ24h) | Health Score | Status |
|---------|--------------|------------|-----------------|-------------|--------|
| **OpenClaw** | 500 (476 open) | 500 (412 open, 88 merged) | None | ⭐⭐⭐☆☆ | Backlog-heavy; triage noise dominates |
| **Hermes Agent** | 50 (open/active) | 50 (open/active) | None | ⭐⭐⭐⭐☆ | Active iteration; desktop instability cluster |
| **IronClaw** | 50 (open/active) | 50 (open/active) | None | ⭐⭐⭐⭐☆ | Architectural rebuild (Reborn stack) |
| **ZeroClaw** | 49 (36 open, 13 closed) | 50 (49 open, 1 merged) | None | ⭐⭐⭐☆☆ | RFC-heavy; maintainers are bottleneck |
| **CoPaw** | 27 (17 open, 10 closed) | 50 (27 open, 23 merged) | None | ⭐⭐⭐⭐☆ | Strong throughput; bug-fix sprint |
| **LobsterAI** | 1 (stale) | 9 (all merged) | None | ⭐⭐⭐⭐⭐ | Excellent throughput; backlog drained |
| **NanoBot** | 22 (11 open, 11 closed) | 38 (24 open, 14 closed) | None | ⭐⭐⭐☆☆ | Critical security disclosure event |
| **NanoClaw** | ~15 touched | 15 (11 merged, 4 open) | None | ⭐⭐⭐⭐☆ | Steady; Slack/v2 migration walls |
| **PicoClaw** | 3 touched | 19 (6 merged, 13 open) | None | ⭐⭐⭐⭐☆ | Focused stabilization phase |
| **NullClaw** | — | — | — | ⭐☆☆☆☆ | No activity |
| **TinyClaw** | — | — | — | ⭐☆☆☆☆ | No activity |
| **Moltis** | — | — | — | ⭐☆☆☆☆ | No activity |
| **ZeptoClaw** | — | — | — | ⭐☆☆☆☆ | No activity |

**Health Score Key:** Based on throughput, backlog management, release cadence, severity of open P1 issues, and community responsiveness.

---

## 3. OpenClaw's Position

### Advantages over Peers

| Dimension | OpenClaw | Competitor Comparison |
|-----------|----------|----------------------|
| **Breadth of integrations** | Most extensive IM channel matrix (Discord, Telegram, WhatsApp, Slack, Mattermost, Feishu, etc.) | Second only to IronClaw's Reborn stack; broader than Hermes |
| **Plugin/skill ecosystem** | ClawHub marketplace; NZ Plugin Framework | More mature than NanoBot's MCP-only approach; comparable to ZeroClaw's |
| **Multi-agent orchestration** | Sub-agent spawning, yielded parent deferral, cron scheduling | Comparable to Hermes; ahead of NanoClaw and PicoClaw |
| **Sandlerbox + delegated execution** | Workspace-sandboxed tools, runtime-isolated helpers | Unique peer-model integration is a differentiator |
| **Community scale** | Largest issue/PR volume (500+/day) | 10× the raw activity of most peers |

### Technical Approach Differences

- **vs. Hermes:** OpenClaw uses an NZ language model gateway layer; Hermes relies on direct provider API calls with credential pool management. OpenClaw's plugin architecture is more modular, but Hermes's desktop/Electron integration gives it end-user packaging advantages.
- **vs. IronClaw:** IronClaw's "Reborn" stack is a ground-up multi-tenant architecture with native capability policies. OpenClaw's multi-tenancy is emerging but less structurally mature.
- **vs. ZeroClaw:** ZeroClaw pursues Wasm-first plugins and Rust-to-Wasm web UI — more architecturally ambitious. OpenClaw prioritizes runtime breadth and channel coverage.
- **vs. NanoBot/PicoClaw:** These lean projects focus on composability and minimal footprints. OpenClaw is the "kitchen sink" — more capable, but heavier and slower to release.

### Critical Weaknesses

- **Release cadence is the worst in class:** Last tagged release ~3 months ago (late March 2026). Hermes, CoPaw, and NanoBot are shipping more frequently.
- **Backlog mismanagement:** 500 issues updated in 24h is mostly AI-assisted triage noise; genuine P1 bugs (#55334 session OOM, #54155 memory leak) sit unresolved for 3+ months.
- **Security posture reactive, not proactive:** Multiple community reports of plaintext secrets, prompt injection, and hardcoded paths — none have triggered a coordinated security response comparable to NanoBot's disclosure handling.

---

## 4. Shared Technical Focus Areas

These requirements emerge consistently across multiple projects, indicating ecosystem-wide needs:

### 4.1 Session / Context Memory Stability
| Projects Affected | Specific Issues |
|---|---|
| OpenClaw | #55334 (sessions.json OOM), #54155 (memory leak), #58450 (broken follow-up) |
| CoPaw | #5162 (infinite reasoning loop), #5479 (large-session crash) |
| Hermes | #39691 (headroom-ai compression — 10 👍) |
| NanoBot | #4434/#4519 (MCP scope bypass) |

**Core need:** Bounded, pruneable session stores with predictable memory and token budgets.

### 4.2 Security Hardening & Trust Boundaries
| Projects Affected | Specific Needs |
|---|---|
| NanoBot | `exec.allowPatterns` bypass (7 CVE-class reports), MCP scope bypass |
| OpenClaw | #45740 (gh-issues prompt injection), #65624 (cleartext Mattermost callbacks), #51429 (hardcoded paths) |
| IronClaw | #5261 (capability policy), #8177 (supply-chain signing) |
| ZeroClaw | #8279 (delegate tool-allowlist bypass), #8177 (SLSA provenance) |
| Hermes | #4656 (credential proxy daemon), #30179 (iron-proxy egress) |

**Core need:** Defense-in-depth — sandbox isolation, credential vaulting, prompt injection prevention, signed artifacts.

### 4.3 Multi-User / Multi-Tenant Architecture
| Projects Affected | Specific Needs |
|---|---|
| IronClaw | #5261/#4628 (admin-shared capabilities, per-user auth) |
| NanoClaw | #2857 (multi-admin approval) |
| OpenClaw | #51396 (scope stripping regression), #60381 (multi-slot memory) |
| ZeroClaw | #8238 (independent delegate mode) |

**Core need:** Role-based access, per-user capability scoping, and audit trails for shared agent deployments.

### 4.4 IM Channel Reliability & Rich Messaging
| Projects Affected | Specific Needs |
|---|---|
| Hermes | #8552 (Slack Block Kit), #44428 (Telegram Rich Messages API 10.1) |
| OpenClaw | #96106/#95604 (Discord subagent progress), #52130 (Telegram retry storm) |
| PicoClaw | #1757 (Telegram cron errors), #3063 (DeltaChat gateway) |
| NanoClaw | #2472 (per-thread Slack sessions — 6-week fix) |
| CoPaw | #5193 (Slack multimodal) |

**Core need:** Platform-native formatting (rich blocks, tables, streaming) and reliable delivery under retry/cron conditions.

### 4.5 AI-Assisted Development Workflows
| Projects Affected | Evidence |
|---|---|
| OpenClaw | #68936 (Claude-Agent-SDK self-healing PR pipeline) |
| NanoBot | Coordinated security disclosure handling |
| ZeroClaw | #8304 (out-of-band SOP approval plane) |
| CoPaw | 8+ first-time-contributor PRs in 24h |

**Core need:** AI-native CI/CD, auto-triage, and bot-assisted review are now baseline expectations.

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture | Key Differentiator |
|---------|--------------|-------------|--------------|-------------------|
| **OpenClaw** | Full-featured personal assistant | Power users, self-hosters | Plugin-based NZ framework + multi-channel gateway | Widest integration surface; ClawHub ecosystem |
| **Hermes** | Desktop-first assistant | End-users (Electron app) | Provider-credential-pool model + OAuth rotation | Local-first telemetry; iron-proxy egress firewall |
| **IronClaw** | Multi-tenant platform | Teams, operators | Reborn stack (capability policy, durable events, native storage) | Admin-shared tool grants; approval workflows |
| **ZeroClaw** | Plugin architecture + Wasm | Developers, security-conscious | Rust core → Wasm plugins, RFC-driven | Supply-chain signing; capability-gated WASI |
| **CoPaw** | Research + education | Students, researchers | AgentScope 2.0 runtime + Pythonic | Scroll context manager; Mission Mode; DataPaw plugin |
| **NanoBot** | Composable minimal agent | Minimalists, MCP users | MCP-native + exec-tool sandbox | Lightweight; `ask_clarification` tool; MCP scope enforcement |
| **NanoClaw** | Slack-centric team tool | Dev teams | Per-thread routing + approval cards | `/learn` skill generation; subscription-primary auth |
| **PicoClaw** | Embedded / IoT | Hardware hackers, Pi users | Lightweight Go/Rust hybrid | DeltaChat, WebSocket remote mode; evolution heartbeat |
| **LobsterAI** | Collaborative plan mode | Chinese-market teams | Cowork sub-agent + OpenClaw plugin infra | Plan-mode rendering; QQ/Discord channel expansion |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Throughput, Active Shipping)
| Project | Evidence |
|---------|----------|
| **LobsterAI** | 9 PRs merged in 24h, zero open PRs, backlog nearly drained |
| **CoPaw** | 23 PRs merged, 27 issues closed, strong first-time-contributor inflow |
| **NanoClaw** | 11 PRs merged, major features (Slack per-thread, `/learn` skill) shipped |

### Tier 2: Active but Bottlenecked
| Project | Evidence |
|---------|----------|
| **Hermes** | 50/50 issues/PRs but desktop crash cluster; fix PRs in flight |
| **IronClaw** | Heavy architectural work (Reborn stack); approval-flow friction |
| **NanoBot** | Security disclosure dominating; fix PRs open for critical CVEs |
| **PicoClaw** | 6 merges + 13 open PRs; stabilization + channel expansion |
| **ZeroClaw** | RFC-heavy; only 1 merge despite 50 PRs — clear maintainer bottleneck |

### Tier 3: Stalled or Stagnant
| Project | Evidence |
|---------|----------|
| **OpenClaw** | Highest raw activity but 88/500 PRs merged; 3-month release gap; P1 backlog growing |
| **NullClaw** | No activity detected |
| **TinyClaw** | No activity detected |
| **Moltis** | No activity detected |
| **ZeptoClaw** | No activity detected |

---

## 7. Trend Signals

### 🔒 Trend 1: Security as a First-Class Concern
The coordinated NanoBot disclosure (7 CVE-class reports in one day), OpenClaw's prompt injection surface, and ZeroClaw/IronClaw supply-chain signing RFCs all point to the community treating **security hygiene as table stakes**. Projects without proactive security programs (OpenClaw, NanoClaw) are accumulating trust debt.

### 🧠 Trend 2: Context Window Management is the New Performance
Session OOM (OpenClaw), infinite reasoning loops (CoPaw), tool output compression demand (Hermes, 10 👍), and skill consolidation bugs (Hermes #29912) all reflect that **context window exhaustion is the primary production bottleneck** — not model quality or latency.

### 🏗️ Trend 3: Multi-Tenancy is the Architectural Frontier
IronClaw's Reborn capability policy, NanoClaw's multi-admin approvals, OpenClaw's multi-slot memory, and ZeroClaw's independent delegate mode all signal that the ecosystem is **moving from single-user to shared-agent operational models**. This is the defining architectural challenge of the next 12–18 months.

### 📱 Trend 4: IM-Native Rich Messaging Over Plain-Text Fallback
Users on Hermes, OpenClaw, CoPaw, and NanoClaw are demanding platform-native formatting (Slack Block Kit, Telegram Rich Messages, Discord reactions). The era of lowest-common-denominator text output is ending.

### 🤖 Trend 5: AI-Native Development is Now Baseline
OpenClaw's self-healing PR pipeline, CoPaw's first-time-contributor velocity, and the prevalence of AI-assisted triage across all active projects indicate that **AI-in-the-development-loop is no longer a differentiator — it's infrastructure**.

### ⚡ Trend 6: Release Cadence as a Competitive Weapon
Projects shipping frequently (LobsterAI, CoPaw, NanoClaw) are draining backlogs and retaining contributors. OpenClaw's 3-month release gap is an outlier and a risk — users are running `main` over released builds, which erodes trust in the project's stability guarantees.

---

**Summary for Decision-Makers:**

- **For maximum integration breadth and plugin ecosystem:** OpenClaw — but expect to run `main` and self-manage security patches.
- **For desktop end-user deployment:** Hermes — strongest packaging, but watch for desktop stability regressions.
- **For team/multi-tenant production:** IronClaw — most architecturally mature for shared deployments.
- **For security-first, minimal footprint:** NanoBot or ZeroClaw — but accept smaller communities and slower feature velocity.
- **For research/education:** CoPaw — highest contributor throughput, Pythonic, rich plugin surface.
- **For embedded/IoT:** PicoClaw — purpose-built for constrained hardware and alternative IM channels.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-26

## 1. Today's Overview

NanoBot is experiencing a day of intense security-focused activity. In the last 24 hours, the project received 22 Issues (11 open, 11 closed) and 38 PRs (24 open, 14 closed), making it one of the highest-activity recent days. No new releases were published. The overwhelming majority of newly opened issues — over half the total — are **coordinated security advisories** from a single researcher (YLChen-007), reporting multiple related command-injection and scope-bypass vulnerabilities in the `exec` tool and MCP `enabledTools` allowlist. This represents a significant disclosure event that will almost certainly require an emergency patch release. Concurrently, a healthy stream of feature PRs from core contributors is advancing SaaS/subagent capabilities, WebUI improvements, and memory enhancements.

## 2. Releases

**No new releases published today.** The current version referenced in advisory reports is `v0.2.1`. Given the volume and severity of closed security issues (all fixed PRs merged by 2026-06-25), an emergency patch release (e.g., `v0.2.2`) is expected imminently.

## 3. Project Progress (Merged/Closed Items)

### Fixes Closed

| Item | Summary |
|------|---------|
| [#4497](https://github.com/HKUDS/nanobot/issues/4497) | DingTalk rich text format and HTTP timeout support |
| [#4434](https://github.com/HKUDS/nanobot/issues/4434) | MCP `enabledTools` deny-all policy bypass (security) |
| [#4435](https://github.com/HKUDS/nanobot/issues/4435) | MCP `enabledTools` allowlist bypass — resource/prompt capabilities leaked (security) |
| [#4517](https://github.com/HKUDS/nanobot/issues/4517) | MCP `enabled_tools` allowlist bypass registers resources/prompts despite deny-all (security) |
| [#4242](https://github.com/HKUDS/nanobot/issues/4242) | `dream.enabled=false` still injects chat history via Recent History section |
| [#4198](https://github.com/HKUDS/nanobot/issues/4198) | Config option for subagent `fail_on_tool_error` behavior |
| [#4488](https://github.com/HKUDS/nanobot/issues/4488) | Telegram Web "unsupported message" regression from rich message feature |
| [#4492](https://github.com/HKUDS/nanobot/issues/4492) | WebM→WAV conversion for Xiaomi MiMo ASR transcription |
| [#1710](https://github.com/HKUDS/nanobot/issues/1710) | Agent returning empty response ("no response to give") |

### Features Closed

| Item | Summary |
|------|---------|
| [#4429](https://github.com/HKUDS/nanobot/issues/4429) | Custom provider: configure thinking style for non-standard reasoning params (VolcEngine, Doubao, etc.) |
| [#4503](https://github.com/HKUDS/nanobot/issues/4503) | Add optional HVTracker supply-chain trust badge to README |

### Key PRs Merged

- **#4493** (zpljd258) — WebM→WAV conversion for MiMo ASR transcription, resolving WebUI voice note failures.
- **#4479** (zpljd258) — PWA support + mobile swipe gesture for WebUI sidebar.

**Observation:** Multiple security-related PRs (#4519, #4514–4517 fixes) have open PR counterparts (#4524, #4526) that were updated today but show as "OPEN" — these fix PRs for the newly disclosed `exec.allowPatterns` bypass vulnerabilities are likely pending merge/CI.

## 4. Community Hot Topics

### 🔴 Critical: `exec.allowPatterns` Allowlist Bypass (7 related advisories)

| Issue | Author | Status |
|-------|--------|--------|
| [#4514](https://github.com/HKUDS/nanobot/issues/4514) | YLChen-007 | OPEN — chained command bypass |
| [#4515](https://github.com/HKUDS/nanobot/issues/4515) | YLChen-007 | OPEN — comment-tail bypass |
| [#4516](https://github.com/HKUDS/nanobot/issues/4516) | YLChen-007 | OPEN — wrapper prefix bypass |
| [#4518](https://github.com/HKUDS/nanobot/issues/4518) | YLChen-007 | OPEN — default login-shell re-executes startup files, leaking secrets |
| [#4520](https://github.com/HKUDS/nanobot/issues/4520) | YLChen-007 | OPEN — allowlist bypass via OpenAI-compatible API chained commands |
| [#4521](https://github.com/HKUDS/nanobot/issues/4521) | YLChen-007 | OPEN — shell-chain bypass allows unintended command execution |

**Fix PRs opened today:** [#4526](https://github.com/HKUDS/nanobot/pull/4526) (switching `re.search()` → `re.fullmatch()` in `_guard_command()`). This is the highest-priority work item on the project right now.

**Analysis:** This is a **coordinated disclosure** of a single root vulnerability class — that `allowPatterns` regex matching uses `re.search()`, allowing chained/commented/suffixed commands to bypass the allowlist. The related issues about login-shell execution and MCP scope bypass suggest the reporter conducted a thorough audit of trust boundaries between the model and external systems.

### 🟠 High: MCP `enabledTools` Scope Bypass

| Issue | Status |
|-------|--------|
| [#4519](https://github.com/HKUDS/nanobot/issues/4519) | OPEN — `enabledTools` bypass exposes resource and prompt wrappers |

**Fix PR:** [#4524](https://github.com/HKUDS/nanobot/pull/4524) opens same allowlist logic to resources and prompts.

### 🟡 Active: Subagent Enhancement Suite

Core contributor `yu-xin-c` has a coordinated set of PRs advancing subagent capabilities:
- [#4414](https://github.com/HKUDS/nanobot/pull/4414) — Aggregated subagent result mode
- [#4415](https://github.com/HKUDS/nanobot/pull/4415) — Subagent spawn model override
- [#4416](https://github.com/HKUDS/nanobot/pull/4416) — Cron job model presets
- [#4402](https://github.com/HKUDS/nanobot/pull/4402) — Opt-in eager memory consolidation
- [#4424](https://github.com/HKUDS/nanobot/pull/4424) — Gate archive facts with provenance context
- [#4404](https://github.com/HKUDS/nanobot/pull/4404) — Configurable bwrap bind roots

### 🟢 Feature: `ask_clarification` Tool

[#4508](https://github.com/HKUDS/nanobot/issues/4508) — Proposes a new `ask_clarification` tool for the agent to use when user requirements are ambiguous or incomplete, ending the current turn instead of guessing. This aligns with broader community demand for better agent autonomy guardrails.

## 5. Bugs & Stability

| Severity | Description | URL | Fix Status |
|----------|-------------|-----|------------|
| 🔴 Critical | `exec.allowPatterns` multiple bypass vectors allow unintended shell command execution | [#4514–4521](https://github.com/HKUDS/nanobot/issues/4514) | **PR open** [#4526](https://github.com/HKUDS/nanobot/pull/4526) |
| 🔴 Critical | MCP `enabledTools` allowlist bypass exposes resource/prompt capabilities | [#4519](https://github.com/HKUDS/nanobot/issues/4519) | **PR open** [#4524](https://github.com/HKUDS/nanobot/pull/4524) |
| 🟠 High | Login-shell exec re-introduces secrets from shell startup files | [#4518](https://github.com/HKUDS/nanobot/issues/4518) | No PR yet |
| 🟠 High | Windows `--background` gateway restart state inconsistency | [#4511](https://github.com/HKUDS/nanobot/issues/4511) | No PR yet |
| 🟠 High | Windows NSSM service restart infinite loop / phantom process | [#4513](https://github.com/HKUDS/nanobot/issues/4513) | No PR yet |
| 🟡 Medium | `dream.enabled=false` still injects chat history via Recent History | [#4242](https://github.com/HKUDS/nanobot/issues/4242) | Closed, no linked PR (likely bundled in another PR) |
| 🟡 Medium | `malformed tool calls` with non-string name cause infinite execution loop | — | **PR** [#4510](https://github.com/HKUDS/nanobot/pull/4510) open |
| 🟡 Medium | Telegram Web "unsupported message" regression from rich message feature | [#4488](https://github.com/HKUDS/nanobot/issues/4488) | Closed |
| 🟡 Medium | No response generated from certain models (qwen 3.5) | [#1710](https://github.com/HKUDS/nanobot/issues/1710) | Closed (stale) |

## 6. Feature Requests & Roadmap Signals

**Likely in next version (v0.2.2 or v0.3.0):**

| Feature | URL | Signal Strength |
|---------|-----|-----------------|
| `exec.allowPatterns` security fix (fullmatch + comment stripping) | [#4526](https://github.com/HKUDS/nanobot/pull/4526) | **Near-certain** — critical security fix |
| MCP `enabledTools` scope enforcement for resources/prompts | [#4524](https://github.com/HKUDS/nanobot/pull/4524) | **Near-certain** — critical security fix |
| Subagent aggregated result mode | [#4414](https://github.com/HKUDS/nanobot/pull/4414) | Strong — open PR, core contributor |
| Subagent spawn model override | [#4415](https://github.com/HKUDS/nanobot/pull/4415) | Strong — open PR, core contributor |
| Cron job model presets | [#4416](https://github.com/HKUDS/nanobot/pull/4416) | Strong — fixes #4378 |
| `ask_clarification` tool | [#4508](https://github.com/HKUDS/nanobot/issues/4508) | Moderate — new request, no PR |
| WebUI PWA support + mobile swipe | [#4494](https://github.com/HKUDS/nanobot/pull/4494) | Strong — open PR, concrete changes |
| MCP server idle timeout auto-kill | [#4506](https://github.com/HKUDS/nanobot/pull/4506) | Moderate — open PR, addresses resource leaks |
| Generic repeated-tool-call guard | [#4522](https://github.com/HKUDS/nanobot/pull/4522) | Moderate — open PR, fixes infinite loop bug |
| Eager memory consolidation | [#4402](https://github.com/HKUDS/nanobot/pull/4402) | Moderate — open PR |
| Stream delta coalescing key fix | [#4531](https://github.com/HKUDS/nanobot/pull/4531) | Moderate — bug fix PR, recent |
| Heartbeat trigger command | [#4437](https://github.com/HKUDS/nanobot/pull/4437) | Moderate — addresses older feature #3437 |

**Predicted next release:** Likely `v0.2.2` as a security patch, followed by `v0.3.0` bundling the subagent feature enhancements.

## 7. User Feedback Summary

**Primary pain point today is security.** Multiple independent-sounding deployments using `exec.allowPatterns` as a trust boundary are vulnerable to trivial bypass. The Windows community is also vocal — issues #4511 and #4513 are detailed reports with reproduction steps, indicating active Windows deployments encountering real friction with process lifecycle management.

**Quality signals:**
- Security researcher YLChen-007 submitted detailed, high-quality vulnerability reports with version references and root cause analysis — this is mature external engagement.
- The `malformed tool call` issue (#4510) reflects real production robustness concerns from large model API edge cases.
- The subagent enhancement suite indicates the project is moving toward multi-agent orchestration — a competitive differentiator.
- The `ask_clarification` request (#4508) signals user desire for agentic behavior refinement, not just capability expansion.

**Overall satisfaction** appears solid among active contributors (organized PRs, detailed issues), but the security disclosure pattern suggests the project may need a proactive security audit beyond reactive patching.

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|------|-----|------|-------|
| `exec.allowPatterns` login-shell bypass — no PR | 1 day | 🔴 Critical | Separate from comment/chaining issue; needs independent fix |
| Windows `--background` / NSSM restart issues (#4511, #4513) | 1 day | 🟠 High | Multiple reports suggest active Windows user base needs attention |
| Subagent aggregated result mode (#4414) | ~7 days | 🟡 Medium | Core contributor PR; review needed |
| Eager memory consolidation (#4402) | ~8 days | 🟡 Medium | Opt-in, lower risk |
| Stream delta coalescing (#4531), malformed tool call guard (#4510) | ~1 day | 🟡 Medium | Both by `axelray-dev`; could batch-review |
| Session key collision on disk (#4533 PR) | 1 day | 🟠 High | Data loss risk; `:` → `_` collision fix |
| Subagent spawn model override (#4415) | ~7 days | 🟡 Medium | — |
| Bwrap configurable bind roots (#4404) | ~8 days | 🟡 Medium | Security-adjacent; closes #4107 |
| MCP server streamable_http generator crash (#4441) | ~5 days | 🟡 Medium | RuntimeError in cancel scope |

**Maintainer action needed:** Prioritize login-shell bypass fix (#4518 has no PR) and consider a coordinated security response across all `exec.allowPatterns` vectors rather than piecemeal patching. The Windows restart issues are also newly reported and may compound without acknowledgment.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-26

## 1. Today's Overview

Hermes Agent shows very high activity with 50 issues and 50 PRs updated in the last 24 hours, signaling an active contributor community and a project in rapid iteration. No new releases were published today, suggesting the team is accumulating changes for a future version bump. The project's desktop application is experiencing a cluster of stability issues (crashes on Windows, missing modules, renderer bugs), while the core agent and gateway layers are seeing meaningful feature work around credential security, multi-platform messaging, and delegation UX. Security remains a priority, with active discussions around credential proxy daemons and malicious plugin detection.

## 2. Releases

No new releases today.

## 3. Project Progress

### Merged/Closed PRs (selected highlights)

- **PR #52752** — [CLOSED] fix(auxiliary): refresh auto-routed OAuth credentials on 401. Fixes a gap where auxiliary/compression calls using `provider="auto"` would fail to refresh OAuth tokens on 401 errors, causing silent failures in background tasks.
- **PR #52761** — fix(gateway): defer cross-process cache cleanup off the cache lock. Resolves gateway event loop stalls (and Discord heartbeat blocking) after cross-process agent-cache invalidation. Important for gateway responsiveness under load.
- **PR #52763** — fix(agent): reload credential pool on switch_model provider change. Fixes a bug where switching providers in the desktop model picker left the credential pool bound to the original provider, causing authentication failures.
- **PR #52760** — fix(auth): write rotated Codex/xAI pool grant through to global root. Ensures OAuth token rotation in one profile propagates to sibling profiles, preventing `refresh_token_reused` errors.
- **PR #52757** — fix(projects): sanitize branch names to produce valid git refnames. Fixes branch names with consecutive dots that violate git refname rules.
- **PR #52762** — fix(tools): clarify execute_code terminal approval guidance. Reduces unnecessary terminal approval prompts by clarifying tool schema wording.

### Open PRs Gaining Traction

- **PR #51714** — feat(telemetry): local-first telemetry & observability. A major new feature adding built-in agent activity recording, `/insights` command, and opt-in export. Default-on locally, nothing leaves the machine without explicit user action.
- **PR #30179** — feat(egress): iron-proxy credential-injection firewall for sandboxes. Adds an optional TLS-intercepting egress proxy for remote terminal sandboxes, where the sandbox holds opaque proxy tokens swapped at the network boundary.
- **PR #52759** — feat(agent): add advisor final audit gate v0. A new evidence-based final-response audit gate that runs after the Commander drafts a final answer. Default disabled.
- **PR #52756** — feat(delegation): calm "will resume" affordance for background delegate_task. UX improvement showing users that background delegation tasks will resume.

## 4. Community Hot Topics

### Most Discussed Issues

1. **[Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656)** — Credential proxy daemon: zero-knowledge HTTP/HTTPS broker for agent credentials (11 comments, 1 👍). Proposes a dedicated proxy daemon to address residual credential exfiltration risks not covered by PID namespace isolation. Reflects growing enterprise/security-conscious user base.

2. **[Issue #52735](https://github.com/NousResearch/hermes-agent/issues/52735)** — Desktop app crashes on launch: Cannot find module 'simple-git' (9 comments). Windows desktop app fails after in-app update. Multiple users affected; fix PRs are in flight.

3. **[Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691)** — Integrate headroom-ai for tool output compression (8 comments, 10 👍). Proposes replacing the LLM-based context compression with a more efficient approach. High engagement suggests users are hitting context window limits frequently.

4. **[Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658)** — Dashboard chat feature broken after hermes update (8 comments, 2 👍). React error #301 in the dashboard, indicating a frontend regression.

5. **[Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552)** — Slack platform: use Block Kit markdown block type instead of legacy mrkdwn (8 comments, 9 👍). Users want richer Slack message formatting with table support.

6. **[Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428)** — Support Telegram Bot API 10.1 Rich Messages (7 comments, 5 👍). New Telegram API version brings rich message blocks, tables, LaTeX — users want Hermes to leverage these.

7. **[Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912)** — Curator may archive active skills during umbrella pass without verified consolidation (7 comments). A P1-level bug where operational skills can be incorrectly archived, breaking active workflows.

### Underlying Needs

- **Security hardening**: Multiple issues (#4656, #43719, #30179) reflect demand for defense-in-depth credential protection.
- **Multi-platform messaging richness**: Users want platform-native formatting (Slack Block Kit, Telegram Rich Messages, Feishu native tables) rather than lowest-common-denominator text.
- **Context management**: Tool output compression and skill consolidation issues point to users running complex, long-running sessions that strain the context window.

## 5. Bugs & Stability

### Critical / P1

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) — Curator archives active skills without verified consolidation | P1 | OPEN | None |
| [#43719](https://github.com/NousResearch/hermes-agent/issues/43719) — Malicious third-party plugins targeting dashboards | P1 | CLOSED | Under investigation |
| [#14185](https://github.com/NousResearch/hermes-agent/issues/14185) — todo_tool crashes when LLM emits JSON string instead of array | P1 | CLOSED | Merged |
| [#48071](https://github.com/NousResearch/hermes-agent/issues/48071) — Nix gateway install generates systemd unit bypassing Hermes wrapper | P1 | CLOSED | Merged |
| [#52023](https://github.com/NousResearch/hermes-agent/issues/52023) — GPT-4o-mini/4.1 fail with "Encrypted content not supported" after clean install | P1 | CLOSED | Under investigation |

### High / P2

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#52735](https://github.com/NousResearch/hermes-agent/issues/52735) — Desktop crashes: missing 'simple-git' module | P2 | CLOSED | [#52764](https://github.com/NousResearch/hermes-agent/pull/52764) open |
| [#52753](https://github.com/NousResearch/hermes-agent/issues/52753) — Windows desktop crashes after update (duplicate) | P2 | CLOSED | Same as above |
| [#52764](https://github.com/NousResearch/hermes-agent/issues/52764) — hermes update produces broken Desktop asar when git pull adds npm deps | P2 | OPEN | Root cause identified |
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) — Dashboard chat broken (React error #301) | P2 | OPEN | None |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) — Windows installer fails at "desktop" stage (npm install exit code 1) | P2 | OPEN | None |
| [#43810](https://github.com/NousResearch/hermes-agent/issues/43810) — Nix build fails on extraPythonPackages deps in sealed venv | P2 | OPEN | None |
| [#48248](https://github.com/NousResearch/hermes-agent/issues/48248) — billing_provider write-once via COALESCE, stale on model switch | P2 | CLOSED | [#52763](https://github.com/NousResearch/hermes-agent/pull/52763) |
| [#52711](https://github.com/NousResearch/hermes-agent/issues/52711) — OpenAI responses endpoint incomplete status fans one turn into ~60 messages | P2 | OPEN | Needs repro |
| [#46778](https://github.com/NousResearch/hermes-agent/issues/46778) — Desktop pool backends orphaned on idle reap (PPID=1 leak) | P2 | OPEN | None |

### Assessment

The **desktop application is the primary stability concern** today, with a cluster of interrelated Windows crash issues (#52735, #52753, #52764) all tracing to the same root cause: `simple-git` not being bundled in the Electron asar after a dependency addition. A fix is in progress. The dashboard React error (#36658) and Nix build issues (#43810) are also persistent P2 problems needing attention.

## 6. Feature Requests & Roadmap Signals

### Likely Candidates for Next Version

| Feature | Issue/PR | Signal Strength |
|---------|----------|-----------------|
| **Local-first telemetry** | [PR #51714](https://github.com/NousResearch/hermes-agent/pull/51714) | Strong — substantial PR, actively updated |
| **Credential proxy daemon** | [Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) | Medium — high community interest, architectural scope |
| **Tool output compression (headroom-ai)** | [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Medium — 10 👍, 8 comments, clear pain point |
| **Slack Block Kit migration** | [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) | Medium — well-defined scope, high engagement |
| **Telegram Rich Messages (API 10.1)** | [Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428) | Medium — time-sensitive (new API), moderate interest |
| **Dashboard --allowed-hosts flag** | [Issue #34390](https://github.com/NousResearch/hermes-agent/issues/34390) | Lower — useful for reverse-proxy/Tailscale users |
| **Russian localization** | [Issue #52137](https://github.com/NousResearch/hermes-agent/issues/52137) | Lower — part of broader i18n demand (FR, CN, PT also requested) |
| **Upload progress feedback** | [Issue #46454](https://github.com/NousResearch/hermes-agent/issues/46454) | Lower — quality-of-life improvement |
| **Discord video upload preflight** | [Issue #50846](https://github.com/NousResearch/hermes-agent/issues/50846) | Lower — platform-specific |
| **Per-platform toolset disabling** | [Issue #52597](https://github.com/NousResearch/hermes-agent/issues/52597) | Lower — niche use case |

### Roadmap Prediction

The next release (likely **v0.18.0**) will probably include: the local-first telemetry system, the simple-git desktop bundling fix, credential pool reload on model switch, and the advisor audit gate. The credential proxy daemon and headroom-ai compression are candidates for v0.19+ given their architectural complexity.

## 7. User Feedback Summary

### Pain Points

1. **Desktop app reliability on Windows** is the top frustration — multiple users report crashes after updates, installer failures, and orphaned processes. The `simple-git` bundling issue has affected many users and eroded confidence in the auto-update mechanism.

2. **Dashboard stability** — React errors and broken chat functionality after updates suggest insufficient frontend regression testing in the release pipeline.

3. **Context window pressure** — Users running complex sessions hit token limits, driving demand for better compression (#39691) and skill consolidation fixes (#29912).

4. **Multi-platform messaging limitations** — Users want native formatting (tables, rich blocks) on Slack, Telegram, and Feishu rather than plain text fallbacks.

5. **NixOS packaging gaps** — Multiple Nix-specific issues (#43810, #48071) indicate the Nix build path receives less testing than other platforms.

### Satisfaction Signals

- The credential proxy daemon proposal (#4656) and iron-proxy egress firewall (PR #30179) show that security-conscious users are deeply engaged and trust the project with sensitive workloads.
- The high 👍 count on the headroom-ai compression issue (#39691, 10 👍) suggests users are actively thinking about performance improvements.
- The README overhaul PR (#52755) indicates community investment in the project's public image.

## 8. Backlog Watch

### Long-Standing Items Needing Maintainer Attention

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#20084](https://github.com/NousResearch/hermes-agent/issues/20084) — Markdown rendering strips asterisks in code blocks | ~45 days | OPEN | TUI rendering bug, affects C/C++ developers; no assignee |
| [#46778](https://github.com/NousResearch/hermes-agent/issues/46778) — Desktop pool backends orphaned (PPID=1 leak) | ~11 days | OPEN | Resource leak in desktop app; no fix PR |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) — Windows installer fails at desktop stage | ~12 days | OPEN | Blocks Windows users; no fix PR |
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) — Curator archives active skills (P1) | ~36 days | OPEN | Data loss risk for active sessions; no fix PR |
| [#43810](https://github.com/NousResearch/hermes-agent/issues/43810) — Nix build hard-fails on dep collision | ~16 days | OPEN | Blocks NixOS plugin users; no fix PR |
| [#52711](https://github.com/NousResearch/hermes-agent/issues/52711) — OpenAI responses incomplete status → 60 messages | ~1 day | OPEN | Needs repro; could affect all OpenAI-compatible response API users |
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) — Dashboard chat broken (React #301) | ~25 days | OPEN | Core UI feature broken; no fix PR |

### PRs Needing Review

- **[PR #51714](https://github.com/NousResearch/hermes-agent/pull/51714)** — Local-first telemetry: Large feature PR, needs thorough review for privacy implications.
- **[PR #30179](https://github.com/NousResearch/hermes-agent/pull/30179)** — Iron-proxy egress firewall: Security-critical, needs careful audit.
- **[PR #52759](https://github.com/NousResearch/hermes-agent/pull/52759)** — Advisor final audit gate: New subsystem, needs architectural alignment review.
- **[PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427)** — Vertex AI provider: ~55 days open, needs review or closure decision.

---

*Data source: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — 2026-06-26*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw — Daily Digest (2026‑06‑26)

---

## 1. Today’s Overview  
PicoClaw is showing very high activity today, with **19 pull requests** updated and **3 issues** touched in the last 24 hours. The project is primarily focused on **infrastructure hardening and bug fixes**, as 6 PRs were merged/closed and 13 new or ongoing PRs are open. Most of the recent engineering effort targets **sub‑agent message deduplication, resource leak prevention (Close/encoder handling), type‑assertion safety, and dependency up‑grades**. Only **1 new issue remains open** and no new release was cut.

---

## 2. Releases  
**No new releases observed today.** The stabilization work currently in flight (evolution, spawn sub‑turns, web channels) suggests a minor release may follow once these bug fixes land.

---

## 3. Project Progress  
### Merged / Closed PRs (#3169, #3166, #3168, #3145, #3092, #3045)
- **Evolution heartbeat optimization** (#3169)  
  Skip evolution cold‑path for heartbeat turns to stop token burn in draft mode.
- **OpenAI‑compatible provider fixes** (#3166, #3168)  
  Replaced `log.Printf` with a structured logger in order to resolve an `undefined: log` build failure. PR now retitled: **fix(openai_compat): use structured logger for native_search warning**. In parallel, the build pipeline now detects error‑response read failures instead of swallowing non‑200 HTTP errors. Retitled: **fix(model): handle error response read failures**.
- **Dependency upgrades** (#3145)  
  `github.com/github/copilot-sdk/go` bumped **0.2.0 → 1.0.2** (a major version boundary).
- **Safety / quality gaps addressed** (#3092, #3045)  
  Added `ok` checks for skills‑install type assertions on `version` and `force`, and fixed a Matrix `allow_from` regression where user IDs containing a colon were truncated.

### Notable open PRs advancing
- **Sub‑agent duplicate‑message fix** (#3142) – clears `ForUser` in sub‑turn `ToolResult`.
- **DeltaChat gateway** (#3063) – first integration steps for a new IM channel.
- **Remote WebSocket agent mode** (#3118) – optional `picoclaw agent --remote …`.
- **Security migration proposal** (issue #3088) – replace unmaintained `libolm` with `vodozemac`.

---

## 4. Community Hot Topics  
### Highest engagement

| Item | Key traits |
|------|-------------|
| **#1757** – *“[BUG] channel error when scheduling hourly cron tasks”* | Closed issue after extended discussion (10 comments). User reports Telegram channel errors every hour when agent runs scheduled jobs. |
| **#3012** – *“Continuous token consumption every minute when evolution is enabled”* | Closed issue revealing a **draft mode / heartbeat token‑leak** that has now been partially fixed by PR #3169. |
| **#3088** – *“[Feature] use vodozemac instead of libolm”* | Open issue, high priority, 👎2 “thumbs‑up” consensus. Community is urging for the replacement of unmaintained crypto library. |

### Underlying needs
- **Channel reliability under repeating tasks** – Users expect scheduled tasks to be “fire and forget”; any channel error indicates the messaging layer isn’t yet fully decoupled from the scheduler’s retry path.
- **Evolution mode stability** – Token‑drain indicates heartbeat turns were never expected to be filtered by evolution scheduling.
- **Crypto hygiene** – Migration from `libolm` to `vodozemac` is a long‑term technical‑debt concern that now has explicit user demand.

---

## 5. Bugs & Stability  

### Open / High severity
- **#1757 – Channel error every hour for scheduled tasks**  
  Severity: **Medium**. Not yet believed to be fully fixed – closed but not verified by reporter.
- **#3012 – Continuous token consumption in evolution mode**  
  Severity: **High** (resource‑exhaustion risk). Mitigated by #3169 but not yet back‑ported widely.
- **#3115 – Inline data URL causes session‑history corruption**  
  Severity: **Medium**. Fix PR in review checks for “`data:`” substrings in tool output to prevent them from being treated as media attachments.

### Resolved today
- Draft‑mode token waste on heartbeat turns is resolved by #3169.
- Matrix `allow_from` wildcard bug (#3045) closed – no known active regression.

---

## 6. Feature Requests & Roadmap Signals  
**Likely to land in the next minor release:**
- **DeltaChat gateway** (#3063) – New channel addition, visible contributor engagement.
- **Remote WebSocket agent** (#3118) – Opens the door to headless agent use‑cases; tests in progress.
- **Switch to vodozemac** (#3088) – Marked “high priority”, implementation probably incremental: build‑time `libolm` optional (per the issue author).

**Long‑term signals:**
- Better **heartbeat/evolution observability** (per discussion flowing from #3169).
- **Scheduled task channel resilience** – Either a crash‑backoolock or retry mechanism for hourly‑recurring jobs will become necessary if #1757 re‑opens on a future version.

---

## 7. User Feedback Summary  
**Frustrations surfaced today:**  
1. **Surprise bugs in long‑running cron‑driven tasks.** Users on older hardware (Raspberry Pi Zero W) struggle with the compute cost when evolution mode leaks tokens.  
2. **Cryptography stagnation anxiety.** The community no longer trusts `libolm` and is explicitly asking for `vodozemac`; this is turning into a credibility issue.  
3. **Agent pairing with third‑party gateways (DeltaChat, WebSocket) is a strong demand signal** for users attempting to use PicoClaw outside traditional UIs.

**Satisfaction signals:**  
- Closed‑but‑verified fixes (heartbeat, data‑URL dedup) show the maintainers are listening; the number of closed issues today is encouraging.
- Frequent “maintainer 👎” reactions on issue #3088 show alignment with the user base.

---

## 8. Backlog Watch – Needs Maintainer Attention  
- **Issue #3088 – Replace libolm with vodozemac** – High‑priority, long‑unanswered. Recommend scheduling a design spike within two sprints to keep security trust ratings high.
- **Issue #1757 – Scheduled hourly channel errors** – Closed but ask user to confirm whether error still occurs after #3169; otherwise very soon.
- **PR #3142 – Sub‑agent duplicate messages** – Cross‑session message deduplication bug, stale, and may conflict with incoming #319+ numbered fixes.
- **PR #3063 – DeltaChat gateway** – PRs reaching 10+ days of inactivity risk losing the contributor; normal‑time framing shows interest.

---

**Overall project health:** PicoClaw is in an aggressive **stabilization + channel‑expansion phase**. Today the team successfully merged critical fixes while continuing to incubate needed infrastructure (crypto, scheduled task stability). The most imperative task is resolving token‑leak patterns and the crypto library swap if PicoClaw aims to stay competitive with multi‑agent orchestration suites.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-26

**Repository:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)
**Data freshness:** All data pulled as of 2026-06-26 (last 24h unless otherwise noted)

---

## 1. Today's Overview

NanoClaw sustained high development velocity today: 15 PRs touched (11 merged/closed, 4 open) and a new issue filed. The project's v2 migration path is actively being plugged (the crash in `1b-db` is a blocker being addressed). Two major feature threads closed — per-thread Slack sessions (PRs #2472, #2471.5) and per-container CPU/memory limits (#2856) — shipped in this daily window. One new feature landed: a `/learn` skill that builds reusable skills from arbitrary sources (#2843), and another is open for `/add-clidash` (#2795, still in review). A tricky older issue about multi-admin approvals (#2857) signals appetite for operational models with multiple operator workflows.

---

## 2. Releases

None.

---

## 3. Project Progress

The following PRs were updated or merged today (closed PRs represent functionality now on `main`):

- **Per-thread Slack sessions** shipped after ~6 weeks of work. The router rewrite (#2471) and the Slack adapter (#2472) together ensure that `session_mode=per-thread` creates one session per top-level Slack DM instead of collapsing to a single ever-growing thread. This is a meaningful reliability and UX fix for multi-thread Slack deployments.
- **Per-container CPU/memory limits** (#2856, closed today). Adds `CONTAINER_CPU_LIMIT` and `CONTAINER_MEMORY_LIMIT` env knobs, both opt-in, capping individual agent containers so multi-agent hosts avoid CPU/memory monopolization.
- **"Reject with reason" on approval cards** (#2832, closed). Agents now see an optional one-line rejection reason from approver, allowing adaptation — an upgrade from a bare "declined" signal.
- **Security: confine `send_file` reads to workspace** (#2817, closed). Canonical-path resolution and symlink checks now prevent path traversal outside `/workspace`. Regression tests included.
- **Router: safeParseContent vs primitive JSON** (#2815, closed). Fixes a bug where the router attempted to parse JSON primitives/arrays as objects, which previously would incorrectly prevent route matching.
- **CLI: socket response cap by bytes** (#2813, closed). Switches response truncation from character-counting to byte-counting on the socket, correctly handling multi-byte UTF-8 payloads (e.g. emoji text).
- **OneCLI: redirect TMPDIR for gateway CA mounts on macOS** (#2854, closed). Addresses repeated SSL handshake failures with Rancher/Desktop's Apple `container` framework by moving the CA bundle directory out of a tmpfs that's not shared with the OneCLI container.
- **Setup cleanup: reap dead peer service registrations** (#2830, closed). A long-standing annoyance from the uninstall path — launchd/systemd units pointing at a removed `dist/index.js` — now get cleaned up.
- **Auth: subscription-primary posture** (#2855, closed). OAuth subscription becomes primary credential, `ANTHROPIC_API_KEY` becomes an automatic hot-standby with operator alerts on subscription failure — eliminates manual flip-flopping.

---

## 4. Community Hot Topics

Activity is spread thin; no single PR/issue gathered many comments or reactions, but several topics have technical depth:

- **[PR #2471/#2472 — per-thread Slack sessions](https://github.com/nanocoai/nanoclaw/pull/2472)** (closed today): Six-week thread that reworked both core router logic and Slack adapter to fix a session-merging bug. Activity level indicates this was a real blocker for Slack users running `per-thread`.
- **[PR #2843 — `/learn` skill](https://github.com/nanocoai/nanoclaw/pull/2843)** (closed today): New feature: given a codebase, URL, or conversation, distills a reusable `SKILL.md`-format skill. Useful for automating knowledge capture from projects and docs.
- **[PR #2795 / #2858 — `/add-clidash`](https://github.com/nanocoai/nanoclaw/pull/2795)** (open): A proposed read-only dashboard skill for CLI-derived metrics; open since June 17. Addresses #2795's install fixes and engine constraints.
- **[Issue #2857 — multi-admin approval](https://github.com/nanocoai/nanoclaw/issues/2857)** (open, new today): Approval requests currently go to a single admin; the user wants fallback to other admins or terminal CLI approval. This has implications for teams running NanoClaw as a shared operator tool.

---

## 5. Bugs & Stability

- **`is_main` column missing in old v1DBs** ([PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859), open/fix): The v2 migration `1b-db` step assumes a `registered_groups.is_main` column added in a later v1 release; installs from 1.1.0 and earlier crash. **Severity: high** — a blocker for v2 upgrade. Fix PR is open.
- **macOS OneCLI gateway CA mount failure** ([PR #2854](https://github.com/nanocoai/nanoclaw/pull/2854), closed/fixed): Every agent API call failed on Rancher Desktop and Apple `container` due to self-signed CA bundle living in a non-shared tmpfs. **Severity: moderate** — only macOS with those runtimes, but complete breakage when hit. Fixed.
- **Socket response cap undercounting multi-byte characters** ([PR #2813](https://github.com/nanocoai/nanoclaw/pull/2813), closed/fixed): Switching from char-based to byte-based truncation prevents silent message-size inflation for non-ASCII content. **Severity: low-moderate** — silent truncation bugs are hard to detect. Fixed.
- **`send_file` path traversal** ([PR #2817](https://github.com/nanocoai/nanoclaw/pull/2817), closed/fixed): Symlinks under `/workspace` could be followed to read arbitrary host files. **Severity: high** — classic LFI-adjacent vector. Fixed, with tests.
- **Dead service registrations on uninstall** ([PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830), closed/fixed): macOS/Rancher launchd units that keep trying to spawn removed binary cause persistent CPU wakeups / log spam. **Severity: low** — accumulated annoyance, not critical. Fixed.

---

## 6. Feature Requests & Roadmap Signals

- **Multi-admin approval workflow** ([Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)): Requests dynamic admin fallback plus CLI approval. This likely will need scheduler autonomy — a non-trivial feature. No maintainer response yet.
- **`/add-clidash` read-only dashboard** ([PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) + replacement [#2858](https://github.com/nanocoai/nanoclaw/pull/2858)): A skill for user monitoring — surfaced by maintainers on replacement PR. Signals that governance/observability features are on their radar.
- **Drop "Global Memory" from seed prompt** ([PR #2824](https://github.com/nanocoai/nanoclaw/pull/2824), open): Removes a stalled instruction block from main prompt template. Could streamline prompt length and reduce agent confusion. In review since June 20, likely to merge soon.
- **Approval reasons fulfilled** ([PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832), closed): Sets precedent that future approval actions should be richer than binary accept/decline — expect this pattern to extend to audit log and analytics.
- **`/learn` skill** ([PR #2843](https://github.com/nanocoai/nanoclaw/pull/2843), closed): First-class skill generation capability. Follow-up: UI for managing, versioning, and sharing learned skills.

---

## 7. User Feedback Summary

- **Slack `per-thread` collapse** is an operational pain point that took six weeks to fully resolve — users running shared Slack workspaces want one conversation thread per user, not one ever-growing merge. The latitude of #2471-#2472 suggests the maintainer invested significant effort here.
- **Single-admin approval bottleneck** ([Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)) sounds like an orgs/teams scaling limit: one admin being offline blocks all agent tool-approvals, which stalls agents mid-task. The additional ask for CLI-based approval hints at operators who are comfortable with both terminal workflows and async approval.
- **macOS self-signed cert failures** (#2854) point to an active macOS user base running Rancher Desktop or Apple's new `container` runtime — unusual foot traffic that deserves dedicated CI.
- **Dead service registrations** (#2830) plague developers who create/remove NanoClaw installs repeatedly — launches still show launchd agents trying to resurrect removed binaries. Long tail noise, but a clear "make uninstall" gap.
- **Rejection reason relay** (#2832) comes directly from agent operators wanting richer feedback — "declined" alone left agents unable to adapt, causing loops. Approvers benefit from structured negativity too.

---

## 8. Backlog Watch

- **[PR #2795/#2858 — `/add-clidash`](https://github.com/nanocoai/nanoclaw/pull/2795)** has been open since 2026-06-17 (~9 days) with predecessor PR #2795. It includes install fixes, Node >=22.5 check, and contributed-by attribution. The replacement PR appears responsive to maintainer review, so it is likely near merge — but no explicit approval yet. **Action: maintainer sign-off.**
- **[PR #2824 — drop "Global Memory" instruction](https://github.com/nanocoai/nanoclaw/pull/2824)** has been open since 2026-06-20 (~6 days). Clean docs/config change, low risk, but no activity. **Action: maintainer decision.**
- **[Issue #2857 — multi-admin approvals](https://github.com/nanocoai/nanoclaw/issues/2857)** is new today (2026-06-25) and has no maintainer response. Its operational fallback + CLI approval design requires thoughtful routing architecture — early engagement from the maintainer would prevent scope creep. **Action: triage.**
- **[PR #2859 — v2 migration `is_main` column missing](https://github.com/nanocoai/nanoclaw/pull/2859)** is the open bug fix for the v2 DB-seeding crash. If v2 upgrade is a headline goal, this is the most time-sensitive open item: **Action: prioritize review.**
- **[PR #2471/#2472 — per-thread Slack sessions](https://github.com/nanocoai/nanoclaw/pull/2472)** closed today after ~42 days of life — no explicit release tag was marked. Issue tracking follow-up bug reports from Slack users who upgrade and discover merged sessions.

---

*Generated by OWL — Project analytics. Data sourced from GitHub as of 2026-06-26.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-26

## 1. Today's Overview
IronClaw remains in a high-velocity development phase, with **50 issues** and **50 PRs** updated in the last 24 hours. The project is heavily focused on the **Reborn stack** — particularly a major multi-tenant capability/epic rollout (#5261, #4628), memory-as-a-userland-extension (#5205, #3537), and numerous Reborn WebUI/approval-flow fixes. Activity is skewed toward **foundational architecture** (capability policy, native storage primitives, durable events) rather than surface-level features, signaling a maturing platform prepping for broader deployment. No new releases shipped today.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress (Merged / Closed Items)
- **#5222 [CLOSED] PR** — Fixed triggered-run Slack delivery marking `BlockedApproval`/`BlockedAuth` parked runs as `Failed` (23× WARN/hr in prod logs).
- **#5210 [CLOSED] Issue** — Chat “send while approval open” now resolved.
- **#5211 [CLOSED] Issue** — Auto-scroll for streaming responses fixed.
- **#5212 [CLOSED] Issue** — Message timestamps rendering stabilized.
- **#5208 [CLOSED] Issue** — Frozen message-input-while-streaming bug resolved.
- **#5242 / #5243 [CLOSED] Issues** — Tools-page operator-permission errors and “Approve & always allow” persistence closed after fixes.
- **#5129 [CLOSED] Issue** — `outbound_delivery_target_set` “always approve” reproduced and closed.
- **#5028 [CLOSED] Issue** — Denied activity-id stability follow-up merged.
- **#4980 [CLOSED] Issue** — Automations empty-state onboarding guidance added.
- **#4997 [CLOSED] PR** — Host-side interception seam added so Google Drive `download_file` no longer fails on binary PDFs/PPTXs.
- **PR #5205 [OPEN]** — Model memory as a userland extension (Extension Manifest v2, `MemoryBindingPolicy`, native document-store) is the day’s flagship, still under review.
- **PR #5270 [OPEN]** — DB-backed `UserRole { Owner > Admin > Member }` for Reborn WebChat-v2 is open, a prerequisite for the admin-grants-permissions epic.

## 4. Community Hot Topics
- **[#5261](https://github.com/nearai/ironclaw/issues/5261)** — **[EPIC] Reborn capability policy: admin-shared tools & skills with per-user auth** — the largest structural effort; six stacked PRs (#5263/#5266/#5267/#5268/#5272/#5270) plus a delta-store PR are in motion.
- **[#5205](https://github.com/nearai/ironclaw/pull/5205)** / **[#5260](https://github.com/nearai/ironclaw/issues/5260)** — Memory-as-a-userland-extension and the personal/self-learning tracking issue; highly coupled.
- **[#5119](https://github.com/nearai/ironclaw/issues/5119)** — Week-long dogfooding tracker; many today’s approvals/UI fixes spring from it.
- **[#5192](https://github.com/nearai/ironclaw/issues/5192)** / **[#5196](https://github.com/nearai/ironclaw/issues/5196)** — Approval-deny loops and duplicate “Ask each time” auth flows — heavy UX tread.
- **[#5276](https://github.com/nearai/ironclaw/issues/5276)** — Scheduled automation failing with “No thread attached”, 0% success rate.

**Underlying needs:** Users want **approval-less, persisting tool grants** and **multi-user admin boundaries**; operators want **durable automations that actually run** and **clear durable-thread/WebUI parity**.

## 5. Bugs & Stability
| Severity | Issue | Fix Status |
|---|---|---|
| 🔴 High | **#5276** — Scheduled automation fails 100% with “No thread attached” | No fix yet; brand new today |
| 🔴 High | **#5192** — Denying a tool approval spawns more requests | Open, no fix |
| 🟠 Medium | **#5196** — “Ask each time” yields authorization error + duplicate flow | Open |
| 🟠 Medium | **#5229** — `unknown thread` when appending capability display previews (prod) | Closed same-day |
| 🟡 Low | **#5191** — Internal skill orchestration messages leaked into chat UI | Open |
| 🟡 Low | **#5253** — Heartbeat lease sync-write contention | Open perf issue |
| 🟡 Low | **#5208/#5210/#5211/#5212** — WebUI chat quirks | All closed today |

## 6. Feature Requests & Roadmap Signals
- **#5261/#4628** — Multi-user, per-user admin-granted capability policies with scoped REST surface (very likely in the next Reborn release cycle).
- **#5205/#3537** — Memory modeled as a userland extension + native document store — architectural cornerstone for personal memory/self-learning.
- **#5275/#5274** — Migrations to shared `cas_update`, native hot-store Postgres primitives — ops/infra hardening before hosted GA.
- **#5259/#5265** — Hosted single-tenant volume profile + env-configurable turn-runner concurrency — enables self-hosted benchmarking and scaling.
- **#5094** — OpenAI-compatible `/v1/models` surface — external-API compatibility play.
- **Predicted near-term:** capability-policy admin UX, persistent tool auto-approval, and a libSQL-hosted single-tenant profile for Reborn.

## 7. User Feedback Summary
Users are dogfooding the **Reborn WebUI** daily and reporting a coherent thread of **approval-flow friction**: approvals not persisting, denying spawning more requests, freezing during streaming, and confusing timestamps. Satisfaction is genuinely higher on **Slack-triggered runs** after fix #5222 (no more spurious `Failed` deliveries). Operators value write-path perf work (CAS helper, batched event appends, heartbeat write-behind) and single-tenant volume profiles for self-hosting. The dominant pain is **tool approval UX**, not model quality or benchmark performance.

## 8. Backlog Watch (Long-Unanswered or Stuck)
- **[#5276](https://github.com/nearai/ironclaw/issues/5276)** — 0%-success scheduled automation with “No thread attached” (created today, zero comments).
- **[#5192](https://github.com/nearai/ironclaw/issues/5192)** — Approval-deny loops, open 2 days with no maintainer response.
- **[#5196](https://github.com/nearai/ironclaw/issues/5196)** — “Ask each time” double-auth, open 2 days, 0 reactions/comments.
- **[#5191](https://github.com/nearai/ironclaw/issues/5191)** — Internal skill messages surfaced in chat, open 2 days.
- **[#5221](https://github.com/nearai/ironclaw/issues/5221)** — Harness backlog 9 candidates; “0 hillclimb steps spent” — unmaintained.
- **[#5173 / #5220](https://github.com/nearai/ironclaw/issues/5173)** — Daily failure taxonomies with zero maintainer comments; risk of becoming data graveyards.
- **[#5264](https://github.com/nearai/ironclaw/issues/5264)** — Memory #3537 follow-ups tracking issue; fine-grained checklist may be more useful than a flat parent ticket.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-26

---

## 1. Today's Overview

LobsterAI is experiencing a high-velocity maintenance and bug-sprint day: **9 PRs were merged/closed within the last 24 hours** with zero new open PRs remaining, indicating rapid throughput and a well-drained backlog. The effort is heavily concentrated on the **Cowork** (collaborative plan mode / sub-agent) and **OpenClaw** (extension & plugin infrastructure) subsystems, with additional fixes in build tooling, IM channel plugins, and settings auto-launch behavior. There is **one newly touched issue** (reopened/stale) and **no new releases**, suggesting the team is mid-cycle accumulating fixes toward a future cut. The ratio of bug-fix PRs to feature work skews nearly 100% corrective — a healthy sign of a maturing codebase paying down regression debt.

---

## 2. Releases

**None.** No new versions were published today. The recent cadence suggests these accumulated fixes are being staged for an upcoming release (likely a patch or minor bump).

---

## 3. Project Progress

### Cowork (Plan Mode & Sub-Agent Stability) — 4 PRs merged

| PR | Summary |
|---|---|
| [#2204](https://github.com/netease-youdao/LobsterAI/pull/2204) | Parse block-level `proposed_plan` tags correctly so GLM plan mode renders the actual plan card instead of leaking raw tags into messages. |
| [#2200](https://github.com/netease-youdao/LobsterAI/pull/2200) | Treat minor assistant snapshot length regressions as stream jitter, preventing Qwen plan mode from splitting into duplicate visible plan messages. |
| [#2199](https://github.com/netease-youdao/LobsterAI/pull/2199) | Continue polling sub-agent sessions after the parent session completes, with a bounded 5-minute window and delayed refreshes for late terminal events. |
| [#2205](https://github.com/netease-youdao/LobsterAI/pull/2205) | UI polish — updated the plan-mode icon to a theme-aware SVG component. |

**Takeaway:** The Cowork subsystem (plan mode rendering, sub-agent lifecycle, stream handling) received a concentrated stability pass. Duplicate plan messages and orphaned sub-agent polling are the most user-visible pain points being addressed.

---

### OpenClaw Infrastructure (Plugins & Extensions) — 4 PRs merged

| PR | Summary |
|---|---|
| [#2198](https://github.com/netease-youdao/LobsterAI/pull/2198) | Preinstall OpenClaw 2026.6.1 official QQ and Discord channel plugins; fix NIM account/env-var indexing for enabled channel accounts. |
| [#2202](https://github.com/netease-youdao/LobsterAI/pull/2202) | Ensure the bundled browser plugin is included in the generated plugin allowlist so browser control remains enabled under restrictive configurations. |
| [#2203](https://github.com/netease-youdao/LobsterAI/pull/2203) | OpenClaw TypeScript entry registration for local `ask-user`/`media` extensions; tighten packaging checks. |
| [#2201](https://github.com/netease-youdao/LobsterAI/pull/2201) | Deduplicate yielded assistant segments during final history sync after `sessions_yield` to avoid duplicated GLM-visible replies and repeated thinking blocks. |

**Takeaway:** OpenClaw's plugin/extension packaging and runtime sync are being hardened — likely to support multi-channel deployments (QQ, Discord) and prevent reply duplication in gateway-synced environments.

---

### Settings & Diagnostics — 1 PR merged

| PR | Summary |
|---|---|
| [#2206](https://github.com/netease-youdao/LobsterAI/pull/2206) | Sync launch-at-login state with the OS before persisting local state; handle Windows login item cleanup for legacy argument variants; surface localized failure messages. |

---

## 4. Community Hot Topics

**Most active issue (only one recently updated):**

- **[Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392)** — **"定时任务开关点击无反应，无法关闭"** (Scheduled-task toggle unresponsive)
  - Author: `zqgittest` | Created: 2026-04-03 | Last updated: 2026-06-25 (stale-bot re-touch) | 1 comment, 0 👍
  - **User impact:** After configuring scheduled tasks, the on/off toggle for *some* tasks cannot be clicked to disable them — the majority work fine, suggesting a state-level edge case.
  - **Underlying need:** Reliable cron/scheduler management UI. This has been open for **~84 days** with only one comment and no maintainer response, which risks churn among power users who depend on scheduled automation.

**No PRs received comments** (all `undefined`), suggesting these were fast-tracked fixes reviewed asynchronously or auto-merged.

---

## 5. Bugs & Stability

| # | Severity | Description | Fix Status | Link |
|---|----------|-------------|------------|------|
| 1 | **High (UX)** | Scheduled-task toggle click produces no response (selective) | **Unfixed** — open 84 days, stale | [Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392) |
| 2 | **High (Correctness)** | Duplicate visible plan messages from Qwen plan mode stream jitter | **Fixed** — merged today | [PR #2200](https://github.com/netease-youdao/LobsterAI/pull/2200) |
| 3 | **High (Correctness)** | Raw `<proposed_plan>` tags leaked into chat messages in GLM plan mode | **Fixed** — merged today | [PR #2204](https://github.com/netease-youdao/LobsterAI/pull/2204) |
| 4 | **High (Correctness)** | Duplicated GLM-visible replies and repeated thinking blocks after `sessions_yield` | **Fixed** — merged today | [PR #2201](https://github.com/netease-youdao/LobsterAI/pull/2201) |
| 5 | **Medium** | Sub-agent sessions stop polling after parent session completes | **Fixed** — merged today | [PR #2199](https://github.com/netease-youdao/LobsterAI/pull/2199) |
| 6 | **Medium** | Browser plugin missing from generated allowlist | **Fixed** — merged today | [PR #2202](https://github.com/netease-youdao/LobsterAI/pull/2202) |
| 7 | **Low–Med** | Launch-at-login state drift between app config and OS | **Fixed** — merged today | [PR #2206](https://github.com/netease-youdao/LobsterAI/pull/2206) |

**Summary:** 6 of 7 bugs are fixed and merged. The lone outstanding high-severity item (#1392) is a UI interaction bug that needs reproduction and likely a focused fix. No crashes or data-loss regressions reported.

---

## 6. Feature Requests & Roadmap Signals

No new feature-request issues or PRs were filed today. However, several signals point to **active roadmap investment in**:

1. **Multi-channel IM support** — The preinstall of QQ and Discord plugins ([PR #2198](https://github.com/netease-youdao/LobsterAI/pull/2198)) signals that official QQ and Discord channels are graduating to first-class support, likely landing in the next minor release.
2. **OpenClaw extension architecture maturity** — The packaging, precompile, and allowlist fixes suggest the team is building toward a more robust third-party extension ecosystem or preparing for a broader OpenClaw SDK release.
3. **Cowork plan mode polish** — The concentration of fixes around plan rendering and sub-agent lifecycle indicates plan mode is approaching a stability milestone that may be promoted from beta/preview to fully released.

---

## 7. User Feedback Summary

| Pain Point | Area | Sentiment |
|---|---|---|
| Scheduled-task toggle unresponsive | Scheduler UI | **Frustrated** — open 84 days, no maintainer reply; stale-bot touched it |
| Broken plan mode rendering (leaked tags, duplicate messages) | Cowork GLM/Qwen | **Resolved** — multiple fixes today should relieve this |
| Browser control disabled by default config | OpenClaw gateway | **Resolved** — fixed today |

**Overall satisfaction trend:** Positive trajectory. The team is responsive on code-level regressions (all 9 PRs merged within hours). The primary dissatisfaction risk is the silent scheduler bug (#1392), which has lingered beyond the stale threshold without triage communication.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommendation |
|------|-----|------|----------------|
| **[Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392)** — Scheduled-task toggle click unresponsive | **84 days** (since 2026-04-03) | **High** — user-facing UI break with zero maintainer engagement; marked stale | Prioritize triage: confirm reproduction, close as invalid or fix. Even a "cannot reproduce, please provide logs" comment would reduce perceived neglect. |

No other stale-or-overdue issues or PRs surfaced in today's data window. The backlog appears well-managed aside from this single orphaned issue. **Overall project health: strong** — high throughput, focused bug-sprint, and critical subsystems (Cowork, OpenClaw plugins) being actively stabilized.

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

# CoPaw Project Digest — 2026-06-26

---

## 1. Today's Overview

CoPaw (agentscope-ai/CoPaw) shows **high activity** today: 27 issues updated (17 open, 10 closed) and 50 PRs updated (27 open, 23 merged/closed). The project is in a **heavy bug-fix and stabilization phase** — most open issues are regressions or UX defects in the v1.1.12.x line, while the PR queue is dominated by targeted fixes rather than new feature merges. No new releases were published today, suggesting the team is batching fixes for an upcoming patch. First-time contributors are notably active, with 8+ first-time-contributor PRs submitted in the last 24h.

---

## 2. Releases

**None.** No new releases in the last 24h. The latest known version referenced in issues is `v1.1.12.post2`.

---

## 3. Project Progress

### Merged / Closed PRs (highlights)

| PR | Author | Summary |
|---|---|---|
| [#5471](https://github.com/agentscope-ai/CoPaw/pull/5471) | weidankong | Generalized match pattern (closed) |
| [#5443](https://github.com/agentscope-ai/CoPaw/pull/5443) | ekzhu | Restored ACP commands and inline approvals in TUI after AgentScope 2.0 migration |
| [#5534](https://github.com/agentscope-ai/CoPaw/pull/5534) | lalaliat | Added trending badge to README (closed) |

### Notable Open PRs Under Review

| PR | Author | Summary |
|---|---|---|
| [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) | niceIrene | **Scroll context manager** — durable SQLite-backed history + recall REPL (major new capability) |
| [#5540](https://github.com/agentscope-ai/CoPaw/pull/5540) | jinliyl | Refactor auto memory system with turn-based tracking |
| [#5448](https://github.com/agentscope-ai/CoPaw/pull/5448) | ekzhu | TUI support for project-scoped code sessions |
| [#5442](https://github.com/agentscope-ai/CoPaw/pull/5442) | XiuShenAl | Integrate Mission Mode with Runtime v2 architecture |
| [#5193](https://github.com/agentscope-ai/CoPaw/pull/5193) | celestialhorse51D | Full Slack channel with multimodal & streaming support |
| [#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) | EliasMei | DataPaw plugin — data-analysis plugin with 12 BI skills |
| [#5210](https://github.com/agentscope-ai/CoPaw/pull/5210) | manjieqi | `cron update` CLI command for modifying existing cron jobs |

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | 💬 | Topic |
|---|---|---|
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | 8 | Custom OpenAI-compatible providers (OMLX) don't support function calling — core protocol gap |
| [#2733](https://github.com/agentscope-ai/CoPaw/issues/2733) | 6 | Chrome processes not properly closed after browser automation (long-standing, still recurring) |
| [#5480](https://github.com/agentscope-ai/CoPaw/issues/5480) | 5 | Console long-message layout corruption (CSS recalculation bug) |
| [#5162](https://github.com/agentscope-ai/CoPaw/issues/5162) | 5 | Conversation reasoning enters infinite loop |
| [#5403](https://github.com/agentscope-ai/CoPaw/issues/5403) | 4 | Browser autofill hijacks search input on Model Configuration page |
| [#5455](https://github.com/agentscope-ai/CoPaw/issues/5455) | 4 | Current time should be per-user-message prefix, not system context |
| [#5505](https://github.com/agentscope-ai/CoPaw/issues/5505) | 3 | MiniMax-M3 content moderation errors cached as `rejects_media=True`, breaking vision |

### Underlying Needs

- **Provider compatibility** is a recurring pain point — users expect any OpenAI-compatible endpoint to "just work" with function calling, vision, and streaming. The OMLX and MiniMax issues both stem from CoPaw's provider abstraction being too tightly coupled to known providers.
- **Frontend stability** is a growing concern — layout corruption, large-session crashes, and autofill hijacking all degrade the web console experience.
- **Runtime 2.0 migration** is still causing regressions (Mission Mode, TUI commands, spawn_subagent), indicating the migration is not yet fully stabilized.

---

## 5. Bugs & Stability

### 🔴 High Severity

| Issue | Description | Fix PR? |
|---|---|---|
| [#5505](https://github.com/agentscope-ai/CoPaw/issues/5505) | Content moderation errors permanently disable vision for a model session | ✅ [#5535](https://github.com/agentscope-ai/CoPaw/pull/5535) (open) |
| [#5520](https://github.com/agentscope-ai/CoPaw/issues/5520) | `browser_use stop()` leaves Chrome renderer processes running — memory leak (regression of #2733) | ✅ [#5536](https://github.com/agentscope-ai/CoPaw/pull/5536) (open) |
| [#5162](https://github.com/agentscope-ai/CoPaw/issues/5162) | Conversation reasoning enters infinite loop | ❌ No PR |
| [#5523](https://github.com/agentscope-ai/CoPaw/issues/5523) | `spawn_subagent` missing from Runtime 2.0 tool registry — broken multi-agent workflows | ❌ No PR |

### 🟡 Medium Severity

| Issue | Description | Fix PR? |
|---|---|---|
| [#5480](https://github.com/agentscope-ai/CoPaw/issues/5480) | Long messages render with broken layout in console | ✅ [#5538](https://github.com/agentscope-ai/CoPaw/pull/5538) (open) |
| [#5479](https://github.com/agentscope-ai/CoPaw/issues/5479) | Sessions >500KB crash the web UI entirely | ❌ No PR |
| [#5528](https://github.com/agentscope-ai/CoPaw/issues/5528) | Browser tool fails on Linux with IME-wrapped default browser | ✅ [#5526](https://github.com/agentscope-ai/CoPaw/pull/5526) (open) |
| [#5539](https://github.com/agentscope-ai/CoPaw/issues/5539) | Heartbeat tasks fail at hard-coded 120s timeout | ❌ No PR |
| [#5541](https://github.com/agentscope-ai/CoPaw/issues/5541) | Ollama Cloud models inaccessible despite correct config | ❌ No PR |

### 🟢 Low Severity

| Issue | Description |
|---|---|
| [#5403](https://github.com/agentscope-ai/CoPaw/issues/5403) | Browser autofill popup on search input |
| [#5501](https://github.com/agentscope-ai/CoPaw/issues/5501) | Send button misaligned in widescreen mode (closed) |
| [#5512](https://github.com/agentscope-ai/CoPaw/issues/5512) | Provider online count shows 4 but only 3 are actually configured |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood of near-term inclusion |
|---|---|---|
| [#5484](https://github.com/agentscope-ai/CoPaw/issues/5484) | Install plugins via pip from PyPI (instead of ZIP only) | 🟡 Medium — aligns with Python ecosystem norms |
| [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) | Hard cap on tool result size at execution layer (defense-in-depth for context explosion) | 🟢 High — directly addresses stability |
| [#5527](https://github.com/agentscope-ai/CoPaw/issues/5527) | Dynamic model switching when provider is rate-limited/unavailable | 🟡 Medium — mentioned in Runtime 2.0 context |
| [#5399](https://github.com/agentscope-ai/CoPaw/pull/5399) | Custom model ordering within providers (drag-and-drop) | 🟢 High — PR already open |
| [#5499](https://github.com/agentscope-ai/CoPaw/pull/5499) | Move current date to per-user-message prefix (better prompt caching) | 🟢 High — PR open, addresses #5455 |
| [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) | Scroll context manager with SQLite persistence | 🟡 Medium — large feature, still under review |

**Prediction for next release (likely v1.1.13):** Browser process cleanup fixes, MiniMax vision fix, console layout fix, provider count fix, and the per-user-message timestamp prefix are the most likely candidates to be batched into an upcoming patch.

---

## 7. User Feedback Summary

### Pain Points

1. **Browser automation is unreliable** — Chrome processes accumulate (#2733, #5520), Linux detection fails (#5528), and the feature is a frequent source of resource exhaustion complaints.
2. **Web console UX is degrading** — layout corruption on long messages (#5480), crashes on large sessions (#5479), autofill hijacking (#5403), and widescreen alignment (#5501) suggest the frontend needs a dedicated stabilization pass.
3. **Custom provider support is incomplete** — users with OMLX, MiniMax, and other OpenAI-compatible providers hit function calling, vision, and streaming gaps. The "compatible" label sets expectations that aren't fully met.
4. **Runtime 2.0 migration regressions** — Mission Mode, TUI commands, and `spawn_subagent` are all broken or partially working post-migration, frustrating users who relied on these features.

### Satisfaction Signals

- Strong first-time contributor activity (8+ first-time PRs) indicates a healthy onboarding experience.
- Active community reporting with detailed reproduction steps and environment info.
- Users are proposing well-thought-out solutions (e.g., #5455 timestamp prefix, #5342 tool result caps).

---

## 8. Backlog Watch

These important items have been open for extended periods without resolution:

| Issue | Age | Why It Matters |
|---|---|---|
| [#2733](https://github.com/agentscope-ai/CoPaw/issues/2733) | ~87 days | Chrome process leak — still recurring as regression (#5520). Needs a permanent fix, not repeated patches. |
| [#5162](https://github.com/agentscope-ai/CoPaw/issues/5162) | ~14 days | Infinite reasoning loop — no PR, no maintainer response. Core agent reliability issue. |
| [#5523](https://github.com/agentscope-ai/CoPaw/issues/5523) | ~1 day | `spawn_subagent` broken on Runtime 2.0 — blocks multi-agent workflows. Needs urgent attention given Runtime 2.0 is the current architecture. |
| [#5479](https://github.com/agentscope-ai/CoPaw/issues/5479) | ~2 days | Large session crash — affects power users with long histories. No PR. |
| [#5539](https://github.com/agentscope-ai/CoPaw/issues/5539) | ~1 day | Heartbeat 120s hard timeout — affects all users with complex heartbeat tasks. Simple fix needed. |
| [#4188](https://github.com/agentscope-ai/CoPaw/issues/4188) | ~46 days | Documentation site performance — "docs open too slowly." No response. |
| [#5527](https://github.com/agentscope-ai/CoPaw/issues/5527) | ~1 day | Dynamic model failover request — highly requested for production use. |

**Maintainer attention recommended:** #5162 (infinite loop), #5523 (spawn_subagent regression), and #2733 (Chrome leak root cause) are the highest-priority unresolved issues affecting core functionality.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

ZeroClaw Project Digest — 2026-06-26

1. Today's Overview
ZeroClaw shows high activity with 49 issues and 50 PRs updated in the last 24 hours, signaling an active contributor community and ongoing parallel work across runtime, plugins, security, web UI, and provider integrations. No new releases today, but the visible work suggests preparation around v0.8.2, v0.8.3, and v0.9.0 milestones plus multiple RFC-driven initiatives. Issue velocity is healthy (36 open/active, 13 closed), while PR throughput is heavily skewed toward open work (49 open, only 1 merged/closed in the last 24 hours), indicating many proposals still under review. The overall project momentum is strong, but maintainers appear to be a bottleneck given the volume of RFCs and needs-maintainer-review labels.

2. Releases
No new releases today.

3. Project Progress
- Merged/closed items were limited today; visible closed issues include:  - Issue #6714: Remove remote-markdown-link block from skill audit due to false positives.
  - Issue #8279: Reported delegate bypassing parent tool allowlist.
  - Issue #7873: Telegram media group dispatch bug tracker.
  - Issue #8154: Kimi Code provider regression targeting a dead API URL.
  - Issue #8236: Build-breaking missing subject field in voice_wake.rs.
  - Issue #7087: CLI zeroclaw models set incorrectly running doctor instead of saving config.
  - PR #8336 (opened): Repairing zeroclaw/zerocode Nix builds and automating Nix hash updates.
  - PR #8337 (opened): Adding Herdr agent status reporting integration.
  - PR #8335 (opened): Making skills install/list/remove bundle-aware.
  - PR #8329 (opened): Fixing narration forwarding after native tool calls.
  - PR #8304 (opened): Implementing out-of-band SOP approval plane with fail-closed timeout.
  - PR #8313 (opened): Defaulting skills to compact injection and deprecating full mode.
  - PR #8173 (opened): Implementing in-app gateway upgrade with auto-restart from web dashboard.
  - PR #8317 (opened): Cooling down rate-limited provider fallback entries after 429/Retry-After.
  - PR #8326 (opened): Stripping UTF-8 BOM from config.toml in ACP bridge.
  - PR #8316 (opened): Inventorying built-in tool boundaries in developer docs.
  - PR #8323 (opened): Stabilizing response-cache timestamp tests with a deterministic clock seam.
  - PR #8261 (opened): Adding opt-in bounded SKILL.md reflection for skill creation.
  - PR #8115 (opened): Failing fast when gateway address is already in use.
  - PR #8252 (opened): Adding tests for trace case parsing and suite loading.

4. Community Hot Topics
The most active discussions by comments involve:
- Issue #6808 (11 comments): RFC on work lanes, board automation, and label cleanup.
- Issue #8177 (8 comments): Supply-chain signing with hardware PGP, hermetic builds, and SLSA provenance.
- Issue #6165 (5 comments): Proposal to prefer a lighter ZeroClaw core through external integrations.
- Issue #8238 (4 comments): Independent delegate mode for specialist handoffs.
- Issue #5903 (4 comments): Long-standing MCP stdio child process leak with heartbeat enabled.
- Issue #5514 (4 comments): Telegram multiple-image bug causing duplicate agent requests.

Notable needs-maintainer-review items include:
- Issue #8177: Supply-chain signing RFC.
- Issue #8238: Independent delegate mode.
- Issue #7497: OCI-compliant container registry plugin storage.
- Issue #8170: In-app upgrade with supervised restart.
- Issue #8132: Replace React/Vite web UI build with Rust-to-Wasm.
- Issue #8138: OpenRouter fallback models config.
- Issue #8135: Wasm-first plugin runtime.
- Issue #8187: Capability-gated WASI hardware host functions.
- Issue #8309: Orphaned SkillForge wiring decision.
- Issue #8327: Native tool calling image markers sent as plain text and inflating token count.

These reflect underlying needs around security hardening, plugin architecture evolution, improved tool policy, supply chain trust, and easier operations for both self-hosted and power users.
5. Bugs & Stability
Higher-severity or notable bugs:
- S0/Security: Issue #8279 (OPEN) — delegate bypasses parent tool allowlist, enabling sub-agents to invoke tools excluded by parent policy.
- S1/Blocked workflow: Issue #8154 (CLOSED) — Kimi Code regression hitting dead API endpoint; fix expected via updated provider config handling.
- S2/Degraded behavior:
  - Issue #8312 (OPEN): fill-translations leak-repair leaves stale entries that re-ship leaked translations.
  - Issue #5903 (OPEN): MCP stdio child process leak per heartbeat tick.
  - Issue #5514 (OPEN): Telegram multiple images generate duplicate agent requests.
  - Issue #7087 (CLOSED): zeroclaw models set runs doctor instead of saving config.
  - Issue #8334 (OPEN): skills install/list/remove target data_dir instead of multi-agent load path.
  - Issue #7737 (OPEN): Approval attribution depends on a global side channel, risking concurrent approval state overwrite.
- S2/Build issue: Issue #8236 (CLOSED) — missing subject field breaks --all-features build.
- Token inflation Issue #8327 (OPEN): Native tool calling image markers sent as plain text, inflating token counts.

Relevant fix PRs include:
- PR #835-family work for skills pathing (#8335).
- PR #8323 for runtime timestamp determinism.
- PR #8317 for provider retry cooldown fixes.
- PR #8329 for narration forwarding.
- PR #8261 for skill reflection path.

Stability outlook: the project is in an active hardening phase, but several long-lived bugs (notably #5903 and #5514) remain unfixed and may affect users running persistent daemons or Telegram workflows.

6. Feature Requests & Roadmap Signals
Near-term or likely-next-version candidates:
- PR #8173 / Issue #8170: In-app gateway upgrade with auto-restart from the web dashboard.
- PR #8313 / PR #8335: Skills path fixes plus compact skill injection default.
- v0.8.2 tracker #8181 and v0.8.3 tracker #8071: Continue shaping runtime/agent/tool stabilization.
- v0.9.0 tracker #7432: Auth, security, gateway boundaries, tool policy, and breaking-change work.

Mid-term architectural signals:
- Issue #8135 / #7497 / #8187: Wasm-first plugin runtime, OCI-based plugin storage, and capability-gated WASI hardware host functions.
- Issue #8132: Proposed migration from React/Vite web UI to Rust-to-Wasm framework.
- Issue #8177: Supply-chain signing and SLSA provenance as part of hardened CI/CD.
- Issue #6165: Lighter core via externalization of some integrations.
- Issue #8303: Goal mode for bounded autonomous session work.
- Issue #8288 / PR #8304: SOP control plane and out-of-band approval workflows.
- Issue #6489: Long-term push toward “everything is a plugin” and a unified catalog.

Prediction: the next visible releases are likely to focus on skills loading fixes, runtime stability, gateway/web UX improvements, and incremental security hardening, while larger architectural shifts (Wasm-first plugins and full web UI rewrite) appear multi-version out.

7. User Feedback Summary
Based on today’s issues and discussion themes:
- Users want more predictable runtime behavior: heartbeat-induced MCP leaks, Telegram media-group dispatch issues, and approval attribution bugs all reflect frustration with subtle, hard-to-debug production issues.
- Users are asking for stronger security and trust guarantees: supply-chain signing, SLSA provenance, delegate tool-allowlist fixes, and policy-aware specialization are recurring themes.
- Usability pain points include:
  - Broken skills CLI flows on multi-agent setups (#8334).
  - Kimi provider regression blocking real users (#8154).
  - Inability to update or restart from the web dashboard easily (#8170).
- Positive sentiment is visible around proposals like compact skill injection, better plugin architecture, and more autonomous modes such as goal mode.

Overall satisfaction seems cautiously positive, but the community is signaling that stability, security, and operational ergonomics should take priority over expanding surface area.

8. Backlog Watch
Items likely needing maintainer attention:
- Issue #5903 (since 2026-04-19): MCP stdio child process leak with heartbeat enabled; high operational impact for daemon users.
- Issue #5514 (since 2026-04-08): Telegram multi-image bug; unresolved despite being long-lived.
- Issue #8279 (OPEN): S0 delegate tool allowlist bypass; security-sensitive and still unmerged.
- Issue #8154 (CLOSED but impactful): Kimi Code regression; provider endpoint handling likely needs broader handling than a one-off fix.
- Issue #8312 (OPEN): Translation leak-repair causing stale data loss; may affect internationalization reliability.
- Issue #8334 (OPEN): skills commands target wrong directory in multi-agent setups; breaks headline skill installation flow.
- RFC cluster needing triage: #8135, #8132, #8187, #7497, and #8309 all describe overlapping or sequential large-arch changes and would benefit from explicit timelines or consolidation.

If you want, I can also create one digest per major subsystem: providers, plugins/Wasm, security, web UI, and channels/integrations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*