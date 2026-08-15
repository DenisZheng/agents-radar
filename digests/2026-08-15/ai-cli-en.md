# AI CLI Tools Community Digest 2026-08-15

> Generated: 2026-08-15 00:52 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-08-15)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **platform-backed heavyweights** (OpenAI Codex, Gemini CLI, GitHub Copilot CLI) shipping daily/weekly releases with dedicated infra teams, and **community-driven or emerging tools** (OpenCode, Kimi Code) iterating on core architecture with smaller contributor bases. All tools are converging on **subagent/multi-agent orchestration**, **persistent memory**, and **cross-platform desktop parity** as table-stakes features. Windows reliability has emerged as the single largest differentiator — tools investing in native Windows sandboxing and event-driven architectures (Codex) are pulling ahead of those relying on Electron/WSL workarounds. Enterprise readiness (OAuth compliance, model catalogue governance, audit logging) is now a parallel track to core UX.

---

## 2. Activity Comparison (2026-08-15)

| Tool | Releases (24h) | Hot Issues | PRs Merged/Updated | Critical Blockers |
|------|----------------|------------|---------------------|-------------------|
| **OpenAI Codex** | 5 alphas (`0.148.0-alpha.14–.18`) | 10 (8 Windows, 2 macOS) | 15+ (mostly bot-authored) | Windows kernel leaks, system-wide input lag, PowerShell polling CPU spikes |
| **Gemini CLI** | 1 nightly (`v0.56.0-nightly`) | 10 | 10 (mixed open/closed) | Subagent hang/recovery fidelity, PTY leaks (macOS FD exhaustion), Auto Memory security |
| **GitHub Copilot CLI** | 3 patches (`v1.0.80→.81`) | 10 | 3 | OAuth regressions (Atlassian/GitLab MCP), model catalogue drift, autopilot OOM |
| **OpenCode** | 0 | 10 (1 critical CLOSED) | 10 (mixed open/closed) | **48-bit timestamp wraparound** (all pre-existing sessions broken), Copilot provider shows 0 models |
| **Kimi Code CLI** | 0 | 4 (3 active) | 0 | No persistent memory, no multi-device sync, Windows shell gaps |

> **Signal**: Codex and Copilot CLI show highest release velocity; Gemini CLI and OpenCode show highest PR throughput relative to issue count; Kimi is in feature-design phase with low code velocity.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Subagent / Multi-Agent Orchestration** | Codex, Gemini CLI, Copilot CLI, OpenCode | Codex: repo-aware task handoff (#34582); Gemini: delegation (#28738), recovery fidelity (#22323), config compliance (#22093); Copilot: subtask freezes in autopilot (#4306); OpenCode: runtime `/approve` toggle (#41909) |
| **Persistent, Structured Memory** | Gemini CLI, Kimi Code, OpenCode, Codex | Gemini: Auto Memory redaction pre-model (#26525), low-signal backoff (#26522); Kimi: auto+manual memory with versioned storage (#1283); OpenCode: generic inbox + write-ahead claims (#42649); Codex: context compression reliability (#31375) |
| **Cross-Platform Desktop Parity (Windows ↔ macOS ↔ Linux)** | **All 5 tools** | Codex: 8/10 top issues Windows-specific (kernel leaks, HID, polling); Gemini: Wayland browser (#21983), WSL clipboard (#27588), ripgrep EFTYPE (#25378); Copilot: OAuth regressions on Windows Store builds; OpenCode: WSL mirrored networking (#37718), SIGKILL on stdout streaming (#42626); Kimi: PowerShell version-aware context (#1136) |
| **Enterprise/Governance Features** | Codex, Copilot CLI, Gemini CLI, OpenCode | Codex: commit attribution restore (#31619), Bedrock ultra reasoning (#37160), cron automation parity (#38671); Copilot: model catalogue sync (#4390), RFC 8414 OAuth compliance (#4480, #4439), Actions GITHUB_TOKEN for MCP (#4346); Gemini: eval infra scaling (#24353), sandbox Node hygiene (#28603); OpenCode: OAuth callback host config (#33966), provider auto-discovery (#27553) |
| **Observability & Telemetry** | Copilot CLI, Gemini CLI, OpenCode | Copilot: Protobuf OTLP export (#2934), BYOK prompt-caching (#4500); Gemini: component-level behavioral evals across 6 models (#24353); OpenCode: context cache invalidation perf with local LLMs (#37489) |

---

## 4. Differentiation Analysis

| Dimension | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Kimi Code CLI |
|-----------|--------------|------------|---------------------|----------|---------------|
| **Primary Target** | Pro/Plus subscribers, enterprise teams | Google Cloud / Vertex AI developers, OSS community | GitHub Enterprise/Business users, Actions CI | Power users, local-LLM advocates, self-hosters | Long-project developers, multi-device workflows |
| **Architecture** | Rust + Electron (MSIX on Windows), heavy sandbox enforcement | TypeScript/Node, PTY-heavy, SSR Agent automation | TypeScript/Node, GitHub API-first, MCP-centric | TypeScript/Node, plugin/protocol-driven, Desktop App (Tauri?) | TypeScript/Node, memory-first design, cloud sync planned |
| **Windows Strategy** | **Native MSIX + sandbox deny-read rules** (#38660), event-driven replacement for polling | WSL2 interop, PowerShell clipboard bridge, ripgrep fixes | Store builds, but OAuth regressions persist per release | WSL sidecar, mirrored networking broken, SIGKILL on streaming | PowerShell version-aware detection, command chaining fixes |
| **Model Flexibility** | OpenAI models only (Bedrock requested #37160) | Gemini models + OpenAI-compatible via config | GitHub-hosted models (Claude, GPT, Kimi) + BYOK | **Any OpenAI-compatible** (Ollama, LM Studio, vLLM, Nara) — auto-discovery PR #27554 | Kimi models (Moonshot), extensibility unclear |
| **Session Model** | Thread/environment permission profiles, onboarding gating | Subagent-heavy, Auto Memory background, SSR automation | Autopilot + `/spawn` sessions, MCP server per session | Generic inbox, write-ahead claims, bounded restart, plan/build agents | Session continuity across devices (design phase) |
| **Maturity Indicators** | 5 alphas/day, 15+ bot PRs/day, Windows crisis mode | Nightly cadence, 76 behavioral evals, PTY leak fixes | 3 patches/day (model config only), security hardening PRs | Critical timestamp bug (fixed), protocol refactors, no release | Zero releases/PRs, 39-comment memory design thread |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Velocity / Platform-Backed** | **OpenAI Codex**, **GitHub Copilot CLI** | Codex: 5 alphas + 15 PRs in 24h; Copilot: 3 releases + 31 issues active. Both have dedicated infra teams, enterprise SLAs, and regression windows measured in hours. |
| **High Engineering Investment / OSS-First** | **Gemini CLI**, **OpenCode** | Gemini: 10 PRs (incl. PTY leaks, eval infra, Node 22 upgrade), 76 behavioral evals, nightly cadence. OpenCode: 10 PRs (protocol refactor, provider auto-discovery, session architecture docs), critical bug fixed same-day. |
| **Design-Phase / Community-Driven** | **Kimi Code CLI** | Zero code motion in 24h; 39-comment thread on memory schema; multi-device sync at RFC stage. Strong signal on *what* users want, no signal on *delivery cadence*. |
| **Data Unavailable** | **Claude Code**, **Pi**, **Qwen Code**, **DeepSeek TUI** | Summary generation failed — cannot assess. |

**Momentum Leaders**: Codex (sheer volume), Gemini CLI (engineering depth per PR), OpenCode (architectural ambition).

**Risk Vectors**: Codex (Windows reliability debt), Copilot CLI (OAuth regression pattern), OpenCode (single-point timestamp bug = immaturity in ID generation), Kimi (execution gap).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Windows is the new Linux** | 8/10 Codex issues Windows; Gemini WSL/Wayland gaps; Copilot Store regressions; OpenCode WSL sidecar broken | Teams targeting Windows developers **must** invest in native sandboxing (MSIX, deny-read policies) and event-driven I/O — Electron polling architectures are failing at scale. |
| **Subagent reliability > Subagent features** | Gemini: false `GOAL` on timeout (#22323), hang (#21409); Copilot: autopilot freezes (#4306); Codex: task handoff requested (#34582) | **Recovery semantics, permission inheritance, and observability** are now gating adoption. Tools shipping "agents calling agents" without deterministic termination handling will lose trust. |
| **Memory is becoming a first-class protocol** | Gemini Auto Memory (security flaws), Kimi memory filesystem design, OpenCode generic inbox, Codex context compression failures | Expect **standardized memory interfaces** (import/export, redaction pipelines, versioning) to emerge — similar to how MCP standardized tool calling. |
| **Local LLM / BYOM is a hard requirement for power users** | OpenCode auto-discovery PR (#27554), Gemini eval infra across 6 models, Codex Bedrock request (#37160), Copilot BYOK caching (#4500) | Tools locking to single-provider models (Codex, Copilot CLI) face pressure to support **arbitrary OpenAI-compatible endpoints** with auto-discovery and model-capability negotiation. |
| **Enterprise governance is shifting from "access control" to "auditability"** | Codex network policy audit logging (#38670), Copilot RFC 8414 strictness (#4480), Gemini sandbox Node hygiene (#28603), OpenCode OAuth callback config (#33966) | **Structured audit trails, policy-as-code, and supply-chain hygiene** (Node versions, dependency scans) are becoming procurement checkboxes. |
| **Release cadence ≠ Stability** | Codex 5 alphas/day + 8 critical Windows bugs; Copilot 3 patches/day + OAuth regressions; Gemini nightly + PTY leaks | **High frequency without Windows CI / integration test depth produces regression loops**. Evaluate tools on *mean time to recovery* for platform-specific bugs, not release count. |

---

## Recommendation Summary

| Use Case | Recommended Tool(s) | Rationale |
|----------|---------------------|-----------|
| **Enterprise Windows fleet, OpenAI ecosystem** | **OpenAI Codex** (once 0.148.0 stable) | Deepest Windows sandbox investment, permission profiles, audit logging — but wait for kernel leak resolution. |
| **Google Cloud / Vertex AI shops, local LLM flexibility** | **Gemini CLI** | Best eval infra, OpenAI-compatible provider support, nightly velocity, but PTY/Wayland gaps on Linux. |
| **GitHub-centric CI/CD, MCP-heavy workflows** | **GitHub Copilot CLI** | Native Actions integration, multi-model catalogue, but OAuth regression pattern requires pinning versions. |
| **Self-hosted, local-first, multi-provider** | **OpenCode** | Only tool with true provider-agnostic auto-discovery, protocol-first architecture — monitor timestamp bug fix verification. |
| **Long-horizon projects, multi-device, memory-first** | **Kimi Code CLI** (track only) | Strong UX vision for persistence/sync, but **no code delivery yet** — revisit in 60 days. |

> **Bottom Line**: The market is splitting into **platform-integrated** (Codex, Copilot, Gemini) vs. **platform-agnostic** (OpenCode, eventually Kimi). For 2026 H2, **Windows reliability** and **subagent recovery semantics** are the two technical differentiators that will determine which tools graduate from "experiment" to "daily driver."

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-15 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs (by community attention signals)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core tooling fix — repairs the evaluation loop that optimizes skill descriptions; addresses Windows stream reading, trigger detection, and parallel workers | Referenced in **Issue #556** (12 comments) and **Issue #1169** (3 comments); root cause of description-optimization loop optimizing against noise | **Open** (updated 2026-06-23) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents | Addresses a universal pain point: “users rarely ask for good typography but always notice bad typography” | **Open** (updated 2026-03-13) |
| 3 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub | Long-lived PR (created Mar, updated Aug); enterprise demand for platform-wide coverage vs. narrow scripting helpers | **Open** (updated 2026-08-12) |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification → four-dimension reasoning audit (damage-severity priority); universal across stacks | Meta-skill for quality gates; ties to **Issue #1385** (4 comments) proposing a three-gate reasoning pipeline | **Open** (updated 2026-07-02) |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing stack: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based | Fills a gap in the skills catalog for test engineering best practices | **Open** (updated 2026-04-21) |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | Create, fill, read, convert OpenDocument Format (.odt, .ods); parse ODT → HTML | Open-standard document workflow; complements existing `docx`/`pdf` skills | **Open** (updated 2026-04-14) |
| 7 | **[#1538](https://github.com/anthropics/skills/pull/1538)** Spec compliance fix | Brings `template/` and another skill into compliance with the Agent Skills spec (name/directory mismatch) | Reference-implementation repo must validate against its own spec; blocking for spec credibility | **Open** (updated 2026-08-12) |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, safety) + security analysis (injection, secrets, perms) | Addresses **Issue #202** (8 comments) — skill-creator needs to become operational, not educational | **Open** (updated 2026-01-07) |

> **Note:** PR comment counts were not captured in the export (`undefined`). Ranking weighs cross-referenced issue activity, update recency, and ecosystem significance.

---

## 2. Community Demand Trends — From Issues (by comment volume)

| Trend | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Trust & Namespace Security** | **#492** (43 comments, 2 👍) — Community skills published under `anthropic/` namespace impersonate official skills, enabling trust-boundary abuse | 🔴 Critical |
| **Organizational Skill Sharing** | **#228** (16 comments, 8 👍) — No org-wide skill library; manual .skill file sharing via Slack/Teams | 🟠 High |
| **Evaluation Tooling Reliability** | **#556** (12 comments, 7 👍) + **#1169** (3 comments, 1 👍) — `run_eval.py` reports 0% recall on all queries; skill-creator loop broken | 🟠 High |
| **Spec Compliance & Deduplication** | **#189** (6 comments, 9 👍) — `document-skills` and `example-skills` plugins install identical content → duplicates in context | 🟡 Medium |
| **Context Window Pressure** | **#1487** (4 comments) — `claude-api` skill eagerly injects ~156k tokens, exhausting context in one call | 🟡 Medium |
| **Reasoning Quality Gates** | **#1385** (4 comments) — Proposal: Pre-task Calibration → Adversarial Review → Delivery Verification pipeline | 🟡 Medium |
| **Enterprise Platform Skills** | **#568** (PR, updated Aug), **#181** (SAP-RPT-1-OSS predictor), **#1175** (SharePoint Online concerns) | 🟡 Medium |
| **Bedrock / Cloud Integration** | **#29** (4 comments) — Skills on AWS Bedrock unsupported/unclear | 🟢 Emerging |
| **MCP Exposure** | **#16** (4 comments) — Expose skills as MCPs for standard API surfaces | 🟢 Emerging |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | Spec compliance fixes (template + 1 other) | Reference repo must pass its own validator; small, targeted, blocking for credibility |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator`: `run_eval.py` 0% recall fix | Directly unblocks **#556** (12 comments) and **#1169**; affects all skill authors |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows subprocess + encoding fixes for `skill-creator` | Two independent PRs for same platform gap; Windows is a first-class Claude Code target |
| **[#538](https://github.com/anthropics/skills/pull/538)** / **[#541](https://github.com/anthropics/skills/pull/541)** / **[#539](https://github.com/anthropics/skills/pull/539)** | `pdf` case-sensitivity, `docx` w:id collision, YAML special-char validation | Cluster of correctness fixes from same author (Lubrsy706); low risk, high value |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` (addresses **#1417**) | Solves planning-artifact accumulation lifecycle gap; community-framed problem |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need, well-scoped, no external dependencies |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills a catalog gap; testing is a top use case for Claude Code |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is for *reliable, spec-compliant tooling that makes skill authoring trustworthy and shareable* — fixing the broken evaluation loop, securing the namespace, enabling org-wide distribution, and ensuring the reference implementation validates against its own spec — before expanding the skill catalog further.**

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-15

---

## 1. Today's Highlights

- **Rapid alpha cadence**: Five `rust-v0.148.0-alpha` releases (`.14`–`.18`) shipped in 24 hours, signaling an active stabilization push toward 0.148.0.
- **Windows performance crisis dominates**: 8 of the top 10 issues by engagement are Windows-specific — system-wide input lag, CPU spikes from `powershell.exe` polling, kernel-pool leaks, and HID discovery blocking the Electron main thread.
- **TUI/CLI hardening wave**: 15+ bot-authored PRs merged today tighten startup sequencing, permission profiles, sandbox enforcement, and onboarding flow — groundwork for a more reliable terminal experience.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.148.0-alpha.18` | Alpha | Latest in rapid succession; no changelog published yet |
| `rust-v0.148.0-alpha.17` | Alpha |  |
| `rust-v0.148.0-alpha.16` | Alpha |  |
| `rust-v0.148.0-alpha.15` | Alpha |  |
| `rust-v0.148.0-alpha.14` | Alpha |  |

> **Signal**: Five alphas in one day suggests either a regression hunt or a feature freeze with heavy polish. Watch for a beta tag or 0.148.0 stable within days.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App freezes/stutters on Windows 11 Pro** | 101 comments, 84 👍 — longest-running high-impact Windows bug (open since Apr 29) | Users report unusable app despite 32 GB RAM; blocks Plus/Pro subscribers |
| [#29532](https://github.com/openai/codex/issues/29532) | **macOS: Persistent SQLite TRACE log churn post-v0.142.0** | 47 comments — partial fix shipped but churn persists in `~/.codex/logs_2.sqlite` | Indicates observability/telemetry not fully silenced; disk I/O concern |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows: `powershell.exe` spawned every second for process polling** | 26 comments, 7 👍 — root cause of high CPU; MSIX package 26.527.31326 | Architectural: polling design needs replacement with event-driven APIs |
| [#24287](https://github.com/openai/codex/issues/24287) | **macOS: UI stuck in "Thinking"; Stop fails; turn invisible after restart** | 23 comments, 8 👍 — session state corruption on M1 Max | Session recovery broken; affects Pro users on Apple Silicon |
| [#28855](https://github.com/openai/codex/issues/28855) | **Windows: Intermittent system-wide input lag** | 18 comments, 20 👍 — whole-OS mouse/keyboard lag while Codex runs | 20 👍 suggests broad reproducibility; not app-local |
| [#33912](https://github.com/openai/codex/issues/33912) | **Windows: Work Louder/Codex Micro HID discovery blocks Electron main thread** | 18 comments, 2 👍 — peripheral enumeration freezes UI | Niche hardware interaction but blocks main thread — fixable |
| [#29436](https://github.com/openai/codex/issues/29436) | **Windows: Kernel-pool growth → system-wide slowdown at 95% memory** | 15 comments, 7 👍 — requires reboot to recover | Kernel leak = driver-level or sandbox issue; severe reliability blocker |
| [#38583](https://github.com/openai/codex/issues/38583) | **Windows 11 26.813.12317: Persistent mouse lag + ~10% CPU idle** | 10 comments, 6 👍 — **filed yesterday**, immediate regression | Fresh regression in latest Store build; high visibility |
| [#38554](https://github.com/openai/codex/issues/38554) | **Windows 26.810.4967.0: Entire PC stutters; exiting Codex fixes instantly** | 8 comments, 3 👍 — **filed yesterday**, strong causality | Clear before/after; points to recent change in 26.810.x |
| [#38637](https://github.com/openai/codex/issues/38637) | **macOS: New release unstable, high CPU, 10+ GB RAM, constant crashes** | 5 comments, 2 👍 — **filed yesterday**, Pro 20x user | macOS not immune; regression mirrors Windows symptoms |

> **Pattern**: Windows issues cluster around **process polling, HID enumeration, and kernel resource leaks** — likely Electron/sandbox interaction. macOS issues center on **SQLite logging and memory pressure**. Both platforms show regressions in the **26.810.x / 0.148.0-alpha** window.

---

## 4. Key PR Progress (Today's Merges)

| PR | Area | Summary |
|----|------|---------|
| [#38678](https://github.com/openai/codex/pull/38678) | Config/Permissions | Preserve environment config ownership — thread updates no longer overwrite attachment-owned permissions/capability roots |
| [#38675](https://github.com/openai/codex/pull/38675) | TUI Input | Exclude Super/Hyper/Meta shortcuts from paste-burst detection; flush pending text first |
| [#38673](https://github.com/openai/codex/pull/38673) | Permissions | Honor per-environment permission profiles; `Ready` envs override thread permissions |
| [#38670](https://github.com/openai/codex/pull/38670) | Security/Audit | Forward executor network policy decisions (`network/policyDecision`) for audit logging |
| [#38664](https://github.com/openai/codex/pull/38664) | Code Mode/Types | Resolve local JSON Schema `$ref` in Code Mode — fixes `unknown` types in generated TS |
| [#38662](https://github.com/openai/codex/pull/38662) | i18n/Composer | Delete Thai combining marks one at a time (grapheme-aware backspace) |
| [#38660](https://github.com/openai/codex/pull/38660) | Windows Sandbox | Enforce managed deny-read rules on every execution path; fail closed on unsupported policies |
| [#38657](https://github.com/openai/codex/pull/38657) | Terminal Perf | Skip hyperlink layout when no links present — avoids paragraph layout overhead |
| [#38651](https://github.com/openai/codex/pull/38651) | Protocol | Move `PermissionProfileSnapshot` into protocol model; store in core permission state |
| [#38649](https://github.com/openai/codex/pull/38649) | TUI Startup | Reuse account response during bootstrap — avoids duplicate auth call |
| [#38644](https://github.com/openai/codex/pull/38644) | Onboarding | Show onboarding when Codex home lacks auth state (not just pristine dir) |
| [#38643](https://github.com/openai/codex/pull/38643) | TUI Startup | Delay composer until first-login onboarding completes |
| [#38642](https://github.com/openai/codex/pull/38642) | TUI Startup | Keep provisional composer editable during startup — no more blocked input |
| [#38641](https://github.com/openai/codex/pull/38641) | TUI Input | Harden startup input handling — discard terminal probes, preserve typeahead for composer |
| [#38639](https://github.com/openai/codex/pull/38639) | TUI Rendering | Render initial session header before handling input — eliminates flash |

> **Theme**: **TUI startup reliability, permission model hardening, and Windows sandbox enforcement** — all bot-driven, likely prepping for a stable CLI/App release.

---

## 5. Feature Request Trends (from Issues)

| Direction | Evidence |
|-----------|----------|
| **Repository-aware task handoff** | [#34582](https://github.com/openai/codex/issues/34582) — sanitized context transfer across workspaces (CLI + App) |
| **Git ownership diagnostics** | [#24484](https://github.com/openai/codex/issues/24484) — surface `safe.directory` failures when WorkTree association breaks |
| **Cross-platform Computer Use parity** | [#27865](https://github.com/openai/codex/issues/27865) — Windows Store missing Chrome native host / Computer Use pipe |
| **Ultra reasoning on Bedrock** | [#37160](https://github.com/openai/codex/issues/37160) — GPT-5.6 Sol on Bedrock stuck at Max reasoning |
| **Commit attribution restore** | [#31619](https://github.com/openai/codex/issues/31619) — removed in 0.143.0, Enterprise users need it back |
| **Cron automation parity** | [#38671](https://github.com/openai/codex/issues/38671) — `load_workspace_dependencies` hangs in background but works foreground |

> **Takeaway**: Enterprise/team workflows (handoff, attribution, automation parity) and **cloud-provider model parity** (Bedrock) are the top feature vectors.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows: System-wide input lag / mouse stutter** | 8+ issues, 150+ total 👍 | [#20214](https://github.com/openai/codex/issues/20214), [#28855](https://github.com/openai/codex/issues/28855), [#38583](https://github.com/openai/codex/issues/38583), [#38554](https://github.com/openai/codex/issues/38554), [#34158](https://github.com/openai/codex/issues/34158), [#38546](https://github.com/openai/codex/issues/38546), [#33382](https://github.com/openai/codex/issues/33382), [#38510](https://github.com/openai/codex/issues/38510) |
| **Windows: Background process polling (PowerShell/git) consuming CPU** | 3 issues | [#25453](https://github.com/openai/codex/issues/25453), [#35775](https://github.com/openai/codex/issues/35775), [#38510](https://github.com/openai/codex/issues/38510) |
| **Windows: Kernel/resource leaks requiring reboot** | 2 issues | [#29436](https://github.com/openai/codex/issues/29436), [#35775](https://github.com/openai/codex/issues/35775) |
| **Session/UI state corruption ("Thinking" stuck, lost turns)** | 3 issues | [#24287](https://github.com/openai/codex/issues/24287), [#34026](https://github.com/openai/codex/issues/34026), [#37550](https://github.com/openai/codex/issues/37550) |
| **Context compression failures (disconnects, lost reasoning)** | 1 high-detail issue | [#31375](https://github.com/openai/codex/issues/31375) — 85% failure rate reported |
| **macOS: Memory/CPU regression in latest builds** | 2 fresh issues | [#38637](https://github.com/openai/codex/issues/38637), [#38468](https://github.com/openai/codex/issues/38468) |
| **CLI: Compact API 404 / backend drift** | 1 issue | [#38323](https://github.com/openai/codex/issues/38323) — `/compact` returns 404 on 0.146.0 |

> **Bottom line**: **Windows desktop reliability is the #1 blocker** — not just app crashes but *OS-level interference*. The 26.810.x / 0.148.0-alpha window appears to have introduced regressions across input handling, process management, and kernel resource cleanup. macOS and CLI are seeing parallel stability regressions.

---

*Digest generated from `github.com/openai/codex` activity (2026-08-14 00:00 – 2026-08-15 23:59 UTC). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-15

## 1. Today's Highlights
The v0.56.0 nightly introduces **context-aware silent retries with TTL for capacity errors**, improving resilience during model quota exhaustion. Meanwhile, the SSR Agent automation push continues: 10+ PRs opened/closed today addressing subagent termination semantics, TUI hang timeouts, PTY leaks, and Windows/WSL compatibility. Community focus remains on **subagent reliability** (recovery, hangs, delegation) and **Auto Memory quality** (redaction, inbox hygiene, low-signal filtering).

## 2. Releases
**v0.56.0-nightly.20260814.gc0d192452**  
- `fix(core)`: Added context-aware silent retries and availability TTL for capacity errors ([#28761](https://github.com/google-gemini/gemini-cli/pull/28761)) — prevents noisy retries when model quota is exhausted.  
- `test(e2e)`: Stabilized `file-system-interactive` test on slow CI runners ([#28793](https://github.com/google-gemini/gemini-cli/pull/28793)).

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after `MAX_TURNS` reports `GOAL` success, hiding interruption | Masks real failures; breaks trust in subagent outcomes. Fix PR [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) opened today. | 12 comments, 2 👍 — active debugging thread |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely on simple tasks | Blocks core workflow; users disable subagents as workaround. | 8 comments, 8 👍 — high pain, no fix yet |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell execution stuck at "Waiting input" after command completes | Recurring TUI/PTY desync; affects all interactive users. | 4 comments, 3 👍 — linked to PTY leak fixes in PRs [#20916](https://github.com/google-gemini/gemini-cli/pull/20916), [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** Robust component-level evaluations (76 behavioral evals across 6 models) | Critical for regression prevention; eval infra scaling. | 7 comments — engineering investment signal |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory retries low-signal sessions indefinitely | Wastes tokens/compute; no backoff or quarantine. | 5 comments — part of Auto Memory quality epic |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Auto Memory: secrets sent to model before redaction; verbose logging | Security + privacy risk; content enters model context pre-redaction. | 4 comments — security-adjacent |
| **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 400 error when >128 tools available | Hard tool limit breaks extensibility; needs dynamic scoping. | 3 comments — architectural constraint |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | Platform gap for Linux/Wayland users; blocks web tasks. | 4 comments, 1 👍 |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads/search/mapping | Potential token/turn reduction; aligns with model's bash affinity. | 7 comments, 1 👍 — strategic exploration |
| **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)** Subagents run without permission since v0.33.0 despite disabled config | Config regression; violates user intent. | 3 comments — permissions regression |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| **[#28815](https://github.com/google-gemini/gemini-cli/pull/28815)** | Open | **Fix #22323**: Preserve original termination reason (`MAX_TURNS`/`TIMEOUT`) during subagent recovery instead of overwriting with `GOAL`. |
| **[#28812](https://github.com/google-gemini/gemini-cli/pull/28812)** | Open | **Fix #21477**: Add execution timeouts to prevent indefinite TUI hang at "Initializing..." (caused by `ps` execAsync blocking). |
| **[#20916](https://github.com/google-gemini/gemini-cli/pull/20916)** | Closed | **Fix #15945**: PTY file descriptor leak in `ShellExecutionService` — master FDs not closed on exit/kill, exhausting macOS `kern.tty.ptmx_max=511`. |
| **[#27154](https://github.com/google-gemini/gemini-cli/pull/27154)** | Closed | PTY memory leak: `activePtys.delete()` was deferred behind async log cleanup; now synchronous. |
| **[#28738](https://github.com/google-gemini/gemini-cli/pull/28738)** | Open | **Allow agents to call agents** — enables subagent delegation/recursion via `tools:` frontmatter (unblocks [#22092](https://github.com/google-gemini/gemini-cli/issues/22092)). |
| **[#25378](https://github.com/google-gemini/gemini-cli/pull/25378)** | Open | **Fix Windows `ripgrep` `EFTYPE`** — architecture mismatch/corruption on `win32` spawn. |
| **[#27588](https://github.com/google-gemini/gemini-cli/pull/27588)** | Open | **WSL2 clipboard image paste** — detects WSL, uses PowerShell interop to read Windows clipboard, saves as PNG. |
| **[#28597](https://github.com/google-gemini/gemini-cli/pull/28597)** | Closed | Fix load-order race: load `.env` **before** resolving settings placeholders (previously expanded against stale `process.env`). |
| **[#28603](https://github.com/google-gemini/gemini-cli/pull/28603)** | Closed | Sandbox Dockerfile: upgrade `node:20-slim` → `node:22` (Node 20 EOL 2026-04-30). |
| **[#28596](https://github.com/google-gemini/gemini-cli/pull/28596)** | Closed | New CLI flag `--list-all-sessions` — lists chat sessions across all workspaces, grouped by path. |

## 5. Feature Request Trends
1. **Subagent maturity** — delegation (#28738), recovery fidelity (#22323), config compliance (#22093), trajectory visibility (#22598), settings override support (#22267).
2. **AST-aware tooling** — method-level reads, structural search, codebase mapping (#19873, #22745, #22746) to leverage model's native bash affinity.
3. **Auto Memory hardening** — deterministic redaction pre-model (#26525), inbox quarantine for invalid patches (#26523), low-signal backoff (#26522).
4. **Eval infrastructure scaling** — component-level behavioral evals across models/versions (#24353), steering test policy enforcement (#28818).
5. **Platform parity** — Wayland browser support (#21983), Windows ripgrep/clipboard (#25378, #27588), Docker Node version hygiene (#28602, #28603).

## 6. Developer Pain Points
- **"It just hangs"** — Generalist agent (#21409), shell "Waiting input" desync (#25166), TUI init block (#21477), browser Wayland failure (#21983). Root causes: PTY lifecycle, async promise drops, missing timeouts.
- **"Subagents lie"** — False `GOAL` success on timeout/turn-limit (#22323), silent execution without permission (#22093), ignored config overrides (#22267).
- **"Memory leaks & resource exhaustion"** — PTY FD leaks (macOS hard limit), Auto Memory infinite retries, tool-count 400-error ceiling.
- **"Security before convenience"** — Auto Memory sends secrets to model pre-redaction (#26525), sandbox on EOL Node runtime (#28603).
- **"Config race conditions"** — Settings placeholder resolution before `.env` load (#28597), symlink agents not recognized (#20079).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-15

## Today's Highlights
The CLI shipped three rapid-fire releases (v1.0.80 → v1.0.80-1 → v1.0.81-0) focused exclusively on model-configuration updates, while the issue tracker surfaces a cluster of OAuth regressions (Atlassian, GitLab MCP servers) and Claude-model availability gaps for Enterprise/Business users. A new OOM crash in autopilot mode and a `/spawn` contract violation round out the high-severity items.

---

## Releases
| Version | Date | Summary |
|---------|------|---------|
| **v1.0.81-0** | 2026-08-14 | Model-configuration refresh (no code changes listed). |
| **v1.0.80-1** | 2026-08-14 | Fixes and changes atop v1.0.80 (details not enumerated). |
| **v1.0.80** | 2026-08-14 | Model-configuration refresh. |

*All three releases appear to be server-side model-catalog syncs; no CLI behaviour changes documented.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4345](https://github.com/github/copilot-cli/issues/4345) | **Reasoning effort ‘medium’ unsupported for claude-haiku-4.5** | Breaks sub-agent execution when feature flags `copilot_cli_opus_medium_effort_default` + `copilot_cli_gpt_5_4_mini_for_explore` are active. | 6 comments, 4 👍 |
| [#4390](https://github.com/github/copilot-cli/issues/4390) | **Org-enabled models missing from catalogue (Claude Sonnet 5/Opus 5, Kimi K3)** | Business/Enterprise users cannot select models their org explicitly enabled. | 6 comments, 4 👍 |
| [#4480](https://github.com/github/copilot-cli/issues/4480) | **Atlassian MCP OAuth fails with RFC 8414 issuer mismatch (regression from 1.0.71)** | Blocks all Atlassian MCP integrations since 1.0.79; high 👍 indicates broad impact. | 4 comments, **6 👍** |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | **All Claude models disabled under CLI model selection (Enterprise)** | Personal Enterprise accounts lose Claude access despite enabled settings; rollback ineffective. | 3 comments, 3 👍 |
| [#4439](https://github.com/github/copilot-cli/issues/4439) | **GitLab MCP OAuth metadata rejected (RFC 8414 issuer mismatch)** | Mirrors Atlassian regression; affects self-managed GitLab MCP servers. | 3 comments, 2 👍 |
| [#4306](https://github.com/github/copilot-cli/issues/4306) | **Subtasks freeze in autopilot mode** | Long-running agent loops (`speckit-automate`) stall silently; no recovery. | 3 comments, 2 👍 |
| [#2934](https://github.com/github/copilot-cli/issues/2934) | **Protobuf OTLP export unsupported (OTEL_EXPORTER_OTLP_PROTOCOL ignored)** | Observability gap: only JSON OTLP supported; standard env var silently dropped. | 2 comments, **6 👍** |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | **MCP registry 403 for Actions GITHUB_TOKEN (blocks non-default MCP in CI)** | Breaks documented PAT-less Actions workflow for any custom MCP server. | 2 comments, 3 👍 |
| [#4499](https://github.com/github/copilot-cli/issues/4499) | **Fatal “Committing semi space failed” OOM in autopilot (V8 heap 0.6/4.3 GB)** | Host-RAM commit failure, not heap limit; crashes long autopilot sessions. | 0 comments, 0 👍 (new, high severity) |
| [#4491](https://github.com/github/copilot-cli/issues/4491) | **`/spawn` template contradicts singular-spawn contract → cross-session writes** | Security/integrity risk: child session can silently inject into unrelated session. | 1 comment, 0 👍 (new, architectural) |

---

## Key PR Progress (All 3 PRs Updated in Last 24h)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4497](https://github.com/github/copilot-cli/pull/4497) | **Handle fork PR associations in invalid-label writer** | Open | Fixes automation for fork-originated PRs where GitHub omits PR association; falls back to workflow-run metadata. |
| [#4496](https://github.com/github/copilot-cli/pull/4496) | **[canary] Verify pull request workflow migration** | Closed | Throw-away PR to validate migrated fork-PR automation; not for review. |
| [#4449](https://github.com/github/copilot-cli/pull/4449) | **Migrate pull request automation away from `pull_request_target`** | Closed | Security hardening: drops privileged `pull_request_target`; uses issue-scoped token + no-permission `pull_request` signal. |

---

## Feature Request Trends (from all 31 issues)

1. **Model catalogue sync & reasoning controls** — Multiple issues (#4345, #4390, #4422, #4494, #4495) demand reliable model visibility, reasoning-effort/ reasoning.mode knobs, and cache invalidation without manual state clearing.
2. **MCP OAuth compliance & pagination** — RFC 8414 strictness (#4480, #4439, #4490) and `tools/list` pagination (#4006) show MCP integration maturing toward spec compliance.
3. **Observability & telemetry** — Protobuf OTLP (#2934), BYOK prompt-caching fixes (#4500), and structured logging requests.
4. **Session durability & UX** — Session/agent persistence (#4489), `/restart` in worktrees (#4493), prompt-loss on stop (#4477), plugin update locks (#4488).
5. **Enterprise policy clarity** — App vs. CLI policy gating confusion (#4481), allowed-directories enforcement (#4482).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **OAuth regressions on every minor release** | Atlassian & GitLab MCP broken in 1.0.79 → 1.0.80; RFC 8414 enforcement too strict for real-world IdPs. |
| **Model availability drift** | Org-enabled models invisible; local cache stale; feature-flag combos break reasoning params. |
| **Autopilot instability** | Subtask freezes (#4306), OOM crashes (#4499), prompt-cache corruption (#4500), session loss on interrupt (#4477). |
| **Permission / policy friction** | Actions `GITHUB_TOKEN` blocked for MCP registry (#4346); Enterprise app policy gating unclear (#4481); allowed-directories ignored for shell commands (#4482). |
| **Plugin & session management bugs** | File-lock update failures (#4488), `/spawn` contract violation (#4491), `/restart` + worktree conflict (#4493), theme flipping (#4485). |

---

*Data sourced from github.com/github/copilot-cli — releases, issues, and PRs updated 2026-08-14 → 2026-08-15.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-15

## 1. Today's Highlights
No new releases or pull requests in the last 24 hours. Community discussion remains focused on **persistent memory systems** and **multi-device session continuity** — two high-impact workflow features that address the most acute pain points for developers working on large, long-running projects. Three long-standing enhancement issues saw renewed activity, signaling sustained demand for context retention across sessions and devices.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)** Feature Request: Memory System — Persistent context across sessions | Proposes a comprehensive memory layer (auto + manual) to retain project patterns, user preferences, and AI-managed notes between sessions. Critical for large-project workflows where re-establishing context is costly. | **39 comments** — deep technical debate on schema design, privacy, and integration with existing `agent.md`/`MEMORY.md` conventions. |
| **[#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269)** Remote Control / Multi-Device Session Handoff | Enables starting a session on one device and continuing/remote-controlling from another (laptop, web, mobile). Addresses the reality of multi-environment development. | **6 comments, 1 👍** — early-stage discussion; focus on auth, state sync, and transport (WebRTC vs. cloud relay). |
| **[#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478)** Optimize memory layer; documentation gaps for memory features | User reports painful experience on large projects due to weak/undocumented memory. References a local `~/.openclaw/workspace/` structure (SOUL.md, USER.md, MEMORY.md, daily memory logs) not reflected in official docs. | **3 comments** — highlights documentation drift and the gap between internal memory implementation and developer visibility. |
| **[#1136](https://github.com/MoonshotAI/kimi-cli/issues/1136)** feat(shell): enhance shell tool with version-aware PowerShell context | Identifies three critical Shell tool issues on Windows (ambiguous shell detection, missing version context, broken command chaining) that degrade agent performance on first-pass command generation. | **Closed** — likely merged or superseded; validates Windows shell experience as a recurring quality concern. |

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

## 5. Feature Request Trends
1. **Persistent, structured memory** — Both automatic (AI-curated) and manual (user-defined) memory with versioned, queryable storage (`MEMORY.md`, daily logs, `USER.md`/`SOUL.md` personas).
2. **Session portability & multi-device sync** — Seamless handoff between CLI, web, and mobile; requires serialized session state, auth delegation, and real-time or async sync.
3. **Windows-first shell fidelity** — Version-aware PowerShell/Cmd detection, proper command chaining, and environment inheritance to match Unix parity.
4. **Documentation alignment** — Internal memory filesystem conventions (`~/.openclaw/workspace/`) are undocumented, creating a discoverability gap.

## 6. Developer Pain Points
- **Context loss between sessions** forces repetitive re-explanation of project architecture, conventions, and preferences — especially costly on large codebases.
- **No cross-device continuity** breaks flow for developers who switch between workstation, laptop, and remote/mobile environments.
- **Windows shell tooling gaps** cause first-pass command failures, increasing iteration cycles for Windows users.
- **Memory system opacity** — Developers infer memory behavior from filesystem artifacts rather than documented APIs, leading to fragile workarounds.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-15

---

## 1. Today's Highlights

A **critical 48-bit timestamp wraparound** (#42608) occurred on 2026-08-14 12:39:55 UTC, silently breaking all pre-existing sessions — the agent stops at step 0 and ignores prompts. Multiple user reports (#42605, #42594, #42611) confirm sessions becoming non-responsive. This is a production-blocking regression in `packages/opencode/src/id/id.ts`. Meanwhile, the Desktop App v1.18.1 layout change hides the Plan/Build agent switcher (#36997, 12 comments, 6👍), and GitHub Copilot provider shows zero models despite successful auth (#42083). Active PRs address TUI stability, protocol hardening, and core architecture refreshes.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues (Top 10)

| Issue | Title | Why It Matters | Community Signal |
|-------|-------|----------------|------------------|
| [#42608](https://github.com/anomalyco/opencode/issues/42608) | **48-bit ID timestamp wraparound wedges all pre-existing sessions** | **Critical production bug**: All sessions created before 2026-08-14 12:39:55 UTC stop processing prompts. Root cause in ID generator. | 5 comments, 3👍, **CLOSED** (fix likely deployed) |
| [#36997](https://github.com/anomalyco/opencode/issues/36997) | Desktop App v1.18.1 hides agent (Plan/Build) switching UI | New layout (`newLayoutDesigns: true`) removes visible mode toggle; Tab key also broken. Blocks core workflow. | 12 comments, 6👍, **OPEN** |
| [#42083](https://github.com/anomalyco/opencode/issues/42083) | GitHub Copilot provider shows zero models | Auth succeeds but `opencode models github-copilot` returns "Provider not found"; no models in TUI. | 8 comments, 2👍, **OPEN** |
| [#38791](https://github.com/anomalyco/opencode/issues/38791) | Run loop never exits with non-time-sortable message IDs | `SessionPrompt.runLoop` compares message IDs as strings — breaks for imported/third-party sessions. | 6 comments, **OPEN** |
| [#42605](https://github.com/anomalyco/opencode/issues/42605) | Session remains open but agent stops processing prompts | User-facing symptom of #42608: agent finishes task, asks question, then ignores new messages. | 4 comments, **OPEN** |
| [#42626](https://github.com/anomalyco/opencode/issues/42626) | Bash tool subprocess killed with SIGKILL on many small stdout writes | `pytest tests/` and similar streaming output triggers SIGKILL in WSL/Ubuntu 24.04. | 3 comments, **CLOSED** |
| [#27553](https://github.com/anomalyco/opencode/issues/27553) | Auto-discover models from OpenAI-compatible providers | Eliminates manual model listing in `opencode.json` for Ollama, LM Studio, llama-swap, etc. | 3 comments, 4👍, **OPEN** |
| [#37489](https://github.com/anomalyco/opencode/issues/37489) | Context cache invalidation perf issue when switching modes/compacting | Significant slowdown with local LLMs (vLLM, Ollama) during mode switches or compaction. | 5 comments, 1👍, **OPEN** |
| [#42657](https://github.com/anomalyco/opencode/issues/42657) | TUI lag with multi-subagent sessions (97% CPU on render thread) | 2–4 concurrent subagents cause 1–3s typing delay, spinner stutters across terminals. | 2 comments, **OPEN** |
| [#37718](https://github.com/anomalyco/opencode/issues/37718) | WSL sidecar fails with `ServeError` when `networkingMode=mirrored` | Desktop’s managed WSL server won’t start under mirrored networking; blocks WSL2 users. | 2 comments, 1👍, **OPEN** |

---

## 4. Key PR Progress (Top 10)

| PR | Title | Type | Status | Impact |
|----|-------|------|--------|--------|
| [#42673](https://github.com/anomalyco/opencode/pull/42673) | fix(tui): ignore stray releases on new session controls | Bug fix | **OPEN** | Prevents accidental session creation when dragging text selection into tab strip |
| [#42672](https://github.com/anomalyco/opencode/pull/42672) | docs: update contributing guide | Docs | **OPEN** | Replaces V1 dev instructions with current V2 workflow + package map |
| [#42669](https://github.com/anomalyco/opencode/pull/42669) | fix(plugin): derive promise adapter from protocol schemas | Refactor | **OPEN** | Schema-driven Promise plugin API; includes branded IDs, DateTime ms, nullable fields |
| [#42667](https://github.com/anomalyco/opencode/pull/42667) | fix(core): unify patch path resolution | Bug fix | **OPEN** | Aligns patch tool with `LocationMutation` service used by write/edit |
| [#42666](https://github.com/anomalyco/opencode/pull/42666) | fix(app): use location VCS state | Bug fix | **CLOSED** (bot) | Derives new-session Git state from directory-scoped VCS store |
| [#42663](https://github.com/anomalyco/opencode/pull/42663) | feat(core): persist web search provider selection | Feature | **CLOSED** | Moves web search consent from KV to file-backed config; supports fixed provider |
| [#42662](https://github.com/anomalyco/opencode/pull/42662) | fix(mcp): fail loudly on MCP server config missing type | Bug fix | **OPEN** | Catches Claude Code-style MCP configs lacking `type`/`enabled` fields |
| [#42656](https://github.com/anomalyco/opencode/pull/42656) | refactor(protocol): move worktree routes out of experimental namespace | Refactor | **CLOSED** | Promotes worktree APIs to stable top-level endpoints |
| [#42649](https://github.com/anomalyco/opencode/pull/42649) | docs(core): refresh session architecture | Docs | **CLOSED** | Updates V2 session docs: generic inbox, write-ahead claims, bounded restart, retry behavior |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | feat(opencode): local LAN provider discovery + auto-discover models | Feature | **OPEN** | Implements mDNS/Bonjour + `/v1/models` polling for zero-config local provider setup |

---

## 5. Feature Request Trends

1. **Provider Ecosystem Expansion** — Strong demand for seamless integration with Ollama Cloud (#4581), GitHub Copilot (#42083), Nara router (#42664), and auto-discovery of any OpenAI-compatible endpoint (#27553, #27554).
2. **OAuth/Callback Flexibility** — Need to configure `OAUTH_CALLBACK_HOST` for non-localhost deployments (#33966).
3. **Runtime Permission Control** — Request for `/approve on|off` slash command to toggle step-by-step approval per session (#41909), inspired by Claude Code.
4. **Local LLM Performance** — Context cache invalidation during mode switches/compaction hurts vLLM/Ollama users (#37489).
5. **WSL/Container Networking** — Mirrored networking mode breaks Desktop sidecar (#37718); LAN discovery PR (#27554) addresses related gap.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Session stability / silent failures** | Critical | #42608 (timestamp wraparound), #42605, #42594, #42611 — sessions stop responding with no error |
| **Provider integration gaps** | High | #42083 (Copilot models missing), #41518 (regional 403), #42385 (free tier limits), #25000 (DeepSeek reasoning_content) |
| **TUI usability regressions** | High | #36997 (hidden agent switcher), #42657 (subagent lag), #42635 (stale theme), #42673 (drag-to-create) |
| **Permission system opacity** | Medium | #24615 (plan agent bypass), #41909 (no runtime toggle), #36898 (descendant asks ignored in CLI) |
| **WSL / networking fragility** | Medium | #37718 (mirrored mode), #28424 (connection refused), #42626 (SIGKILL on stdout streaming) |
| **Config drift / manual model management** | Medium | #27553 (no auto-discovery), #33966 (hardcoded OAuth host), #40568 (undocumented `OPENCODE_ENABLE_EXA`) |

---

*Digest generated from GitHub data (anomalyco/opencode) for 2026-08-15. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*