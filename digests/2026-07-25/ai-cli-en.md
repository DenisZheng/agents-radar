# AI CLI Tools Community Digest 2026-07-25

> Generated: 2026-07-25 02:04 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-07-25)

---

## 1. Ecosystem Overview

The AI CLI landscape is characterized by **rapid model-version churn** (Opus 5, GPT-5.6, Qwen 3.x, DeepSeek V3.1) and a **hardening phase** across all major tools. Every project is simultaneously shipping new model integrations while fighting regressions in session reliability, context management, and cross-platform parity. The dominant architectural pattern has converged on **agent-orchestration frameworks** (subagents, workflows, fleet models) with heavy investment in **evaluation infrastructure** and **enterprise-grade authentication**. Windows and WSL remain a consistent pain point across non-Microsoft tools, while model-provider abstraction layers are maturing to support BYOM (Bring Your Own Model) workflows.

---

## 2. Activity Comparison (2026-07-25)

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Notable Signal |
|------|---------------------|-------------------|----------------|----------------|
| **Claude Code** | 10+ hot issues (805 comments on #38335) | 1 PR (#80883 context-safety-net) | v2.1.219 (Opus 5 default), v2.1.220 maint | Highest community friction: 4-month billing bug, Windows MSIX breaks every update |
| **OpenAI Codex** | 10+ hot issues (Windows Git storms dominant) | 15+ PRs merged (tracing, MCP, enterprise) | 4 alpha cuts in 24h (0.146.0-alpha.6→.9) | Windows desktop regression wave; CLI context compaction broken |
| **Gemini CLI** | 10 hot issues (subagent reliability P1) | 10 PRs (security, caretaker evals, auth) | No release | Heavy investment in automated triage (Caretaker Agent) and AST-aware tooling |
| **GitHub Copilot CLI** | 10 hot issues (regressions in 1.0.71–74) | 0 PRs updated | v1.0.75 (Claude Opus 5 support) | Patch releases introducing regressions: plan-mode over-blocking, Ctrl+C broken, resume OOM |
| **Kimi Code** | 5 issues (auth, Windows TUI, session continuity) | 2 PRs (SSL_CERT_FILE, MCP log routing) | No release | Small community; ARM64 login broken, 16 👍 on cross-device session request |
| **OpenCode** | 10 hot issues (silent halts, crashes, model failures) | 10 PRs (lock-free runner, provider fixes) | v1.18.5 (provider stability) | 188 👍 on auto-model-discovery; v1.18.x regression cluster (30s halts, crashes) |
| **Pi** | 10 hot issues (model-switch corruption, llama.cpp race) | 10 PRs (constrained sampling, viewport rendering) | v0.82.0 (constrained tool sampling) | Model-switching silently corrupts sessions; llama.cpp startup race |
| **Qwen Code** | 10 noteworthy issues (TUI, cold-start, MCP) | 10 PRs (Web Shell, review workflow, lazy-load) | v0.21.0 stable + nightly | SWE-bench verified runs (332/500); heavy Web Shell & review workflow investment |
| **CodeWhale (DeepSeek TUI)** | 10 issues (architectural epics, diagnostics lie) | 10 PRs (rebrand, modularization, release recovery) | v0.9.1 (rebrand → CodeWhale), v0.9.2 in dev | Major architectural transition: Fleet/Workflow/Lane/Runtime model; Docker/Homebrew lag |

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Model entitlement & routing correctness** | Claude Code (#81025, #81039), Codex (#34677), Pi (#7065, #7067), OpenCode (#38378) | Org-aware model defaults, Desktop/CLI parity, pre-switch context validation, thinking-block translation |
| **Session durability & context management** | Claude Code (auto-compact loss), Codex (#35032 compaction theater), Copilot CLI (#4183 CAPI 5MB), Pi (#6768, #7020), OpenCode (#38749 halts) | Compaction that actually frees tokens, large-session resume without OOM, silent-halt detection |
| **Cross-platform parity (Windows/WSL/Linux)** | Codex (6+ Git storm issues), Claude Code (#76357 MSIX), Copilot CLI (#4222 Windows Ink), Kimi (#2521 arrow keys), Qwen (#7634 WSL char dup) | Git polling control, TUI input handling, MSIX packaging, WSL repo detection |
| **Agent/subagent observability & control** | Claude Code (#81035 fork runs wild), Gemini (#22323 MAX_TURNS misreport), OpenCode (#36868 --auto hangs), Qwen (#7685 spawn-time model) | Deterministic STOP handling, trajectory sharing, turn-limit transparency, subagent model routing |
| **Enterprise auth & proxy support** | Kimi (#762 SSL_CERT_FILE), Pi (#6768 Copilot Enterprise 421), Codex (#31307 MCP endpoint), Copilot CLI (#4252 settings revert) | Corporate CA bundles, token isolation, configurable MCP endpoints, config persistence |
| **Evaluation & regression prevention** | Gemini (#24353 76 behavioral evals), Pi (#7046 cache contracts), Qwen (SWE-bench 332/500), OpenCode (#38666 per-tool timing) | Component-level evals, static validation in CI, benchmark quarantining, observability hooks |
| **Plugin/MCP ecosystem maturity** | Claude Code (#36431 Telegram inbound), Codex (#31307, #35261 remote plugins), Pi (#7046), Kimi (#1637 MCP log routing) | Bidirectional notifications, plugin discovery, log routing, versioned skill invocation |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Model-first (Opus 5 default), security hooks, remote control | Enterprise/Pro developers on Anthropic stack | Tight Anthropic integration, sandbox allowlists, OAuth remote sessions |
| **OpenAI Codex** | Windows desktop app, enterprise readiness, MCP plugin platform | Microsoft/OpenAI ecosystem, Windows-first teams | Rust core, aggressive alpha cadence, Responses API + MCP architecture |
| **Gemini CLI** | Subagent reliability, automated triage (Caretaker), AST-aware tooling | Google Cloud / Vertex AI users, codebase-scale agents | Large eval infrastructure (76 behavioral evals), Wayland browser agent, native fetch auth |
| **GitHub Copilot CLI** | GitHub-native workflows (PR review, gh CLI), plan-mode, VS Code parity | GitHub-centric developers, Copilot subscribers | TypeScript, ACP protocol, tight GitHub API integration, session worktrees |
| **Kimi Code** | Cross-device session continuity, corporate proxy support | Chinese-market developers, mobile/desktop hybrid | Go/Rust hybrid, OAuth login, VS Code extension as primary UI |
| **OpenCode** | Provider-agnostic local LLM support, lock-free runtime, polyrepo sessions | Power users running Ollama/LM Studio/llama.cpp, multi-repo workflows | Bun/Node, lock-free fiber settlement, multi-profile auth, fleet architecture |
| **Pi** | Constrained structured output, model-switching robustness, viewport TUI | Researchers, advanced users needing reliable tool calling | TypeScript monorepo, provider-neutral contracts, llama.cpp first-class |
| **Qwen Code** | Web Shell workspace, SWE-bench validated, review workflow automation | Alibaba Cloud / Qwen model users, PR-heavy workflows | Rust/TypeScript, daemonized git status, channel integrations (DingTalk, GitHub) |
| **CodeWhale** | Fleet/Workflow orchestration model, TUI information architecture, modularization | DeepSeek model users, terminal-native multi-agent orchestration | Rust, radical architectural rewrite (v0.9.2), hotbar/sidebar UX, i18n expansion |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / High Friction** | **Claude Code**, **OpenAI Codex** | Largest issue volumes (805 comments on single bug), rapid release cadence, but persistent regressions (4-month billing bug, Windows regression wave). Enterprise adoption driving scale. |
| **High Momentum / Stabilizing** | **Gemini CLI**, **Qwen Code**, **OpenCode** | Structured eval investment (Gemini 76 evals, Qwen SWE-bench), architectural refactors landing (OpenCode lock-free), consistent PR velocity. Gemini's Caretaker Agent shows platform maturity. |
| **Focused Iteration** | **GitHub Copilot CLI**, **Pi** | Copilot: tight GitHub integration but patch-quality issues. Pi: shipping innovative features (constrained sampling, viewport rendering) with smaller community. |
| **Early / Transitioning** | **Kimi Code**, **CodeWhale** | Kimi: low issue visibility (ARM64 login 0 comments), high feature ask (16 👍 cross-device). CodeWhale: major rebrand + architectural rewrite (Fleet/Workflow), Docker/Homebrew channels broken. |

**Most Active Communities** (by GitHub signal): Claude Code > OpenAI Codex > Gemini CLI ≈ Qwen Code > OpenCode  
**Fastest Iteration** (release velocity): OpenAI Codex (4 alphas/24h) > Qwen Code (stable + nightly) > Pi (v0.82.0 + 10 PRs) > OpenCode (v1.18.5)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|----------------|-------------|
| **Model abstraction layers becoming table stakes** | ★★★★★ (8/9 tools) | Tools that hardcode model IDs or lack org-aware routing will lose BYOM users. Invest in provider-agnostic config (OpenCode, Pi, OpenCode lead). |
| **Session/context reliability > raw model capability** | ★★★★★ (all tools) | Every digest shows context compaction, silent halts, or resume failures as top pain. Differentiator is *durable* long-running sessions, not benchmarks. |
| **Windows/WSL as strategic battleground** | ★★★★☆ (Codex, Copilot, Claude, Kimi, Qwen) | Microsoft owns native Windows (Copilot); others must fix Git polling, MSIX, TUI input. WSL2 support is a minimum bar. |
| **Automated evaluation infrastructure maturing** | ★★★★☆ (Gemini, Qwen, Pi, OpenCode) | Static eval validation (Gemini #28344), SWE-bench pipelines (Qwen), component evals (Gemini) — CI-gated quality is becoming standard. |
| **Enterprise auth/token isolation is a compliance requirement** | ★★★★☆ (Kimi, Pi, Codex, Copilot) | Corporate CA bundles, MCP endpoint config, token isolation across plugins — tools ignoring this block enterprise adoption. |
| **Agent orchestration converging on "Fleet/Workflow" semantics** | ★★★☆☆ (CodeWhale, OpenCode, Qwen, Gemini) | Subagent → Workflow → Fleet hierarchy emerging. Early adopters (CodeWhale v0.9.2, OpenCode) defining patterns others will follow. |
| **TUI/terminal UX as competitive moat** | ★★★☆☆ (Pi viewport, CodeWhale hotbar, Qwen Web Shell, Codex desktop) | Rendering performance (Pi O(N)), information architecture (CodeWhale), and web-shell hybrid (Qwen) differentiate daily-driver experience. |
| **Plugin/MCP ecosystem still fragmented** | ★★☆☆☆ (Claude, Codex, Pi, Kimi) | Bidirectional notifications broken (Claude Telegram), discovery broken (Claude #80263), log routing ad-hoc (Kimi #1637). No standard yet. |

---

## Bottom Line for Developers

- **Choose by ecosystem alignment**: Anthropic → Claude Code; Microsoft/GitHub → Copilot CLI; Google/Vertex → Gemini CLI; Local LLMs → OpenCode/Pi; Alibaba/Qwen → Qwen Code.
- **Avoid early-adopter risk on Windows** unless using Copilot CLI — Codex, Claude Code, Kimi all have active Windows regressions.
- **Prioritize tools with eval infrastructure** (Gemini, Qwen, Pi, OpenCode) for production agent workflows; they're investing in regression prevention.
- **Watch OpenCode and Pi** for provider-agnostic innovation; CodeWhale for orchestration architecture — these signal where the ecosystem heads next.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-07-25)

---

## 1. Top Skills Ranking — Most-Discussed PRs by Community Attention

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[#1298] fix(skill-creator): run_eval.py 0% recall bug** | Core tooling fix: installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Directly addresses **Issue #556 (12 comments, 7👍)** and **Issue #1169** — the description-optimization loop has been optimizing against noise; 10+ independent reproductions | ![Open](https://img.shields.io/badge/Open-green) |
| 2 | **[#1323] fix(skill-creator): run_eval trigger detection misses skill name** | Fixes `run_single_query` failing to detect skill triggers, causing recall=0% for all should-trigger queries | Companion to #1298; root-cause analysis of why the eval loop never improves descriptions | ![Open](https://img.shields.io/badge/Open-green) |
| 3 | **[#514] document-typography** | Typographic QC for AI-generated docs: prevents orphan words, widow paragraphs, numbering misalignment | Addresses a universal pain point — "users rarely ask for good typography but every document needs it" | ![Open](https://img.shields.io/badge/Open-green) |
| 4 | **[#1367] self-audit** | Mechanical file verification + 4-dimension reasoning audit (damage-severity priority); universal across projects/stacks | Novel meta-skill: "verify every claimed output file exists" before reasoning audit; v1.3.0 | ![Open](https://img.shields.io/badge/Open-green) |
| 5 | **[#723] testing-patterns** | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, flaky test mitigation | Broad coverage of modern testing stack; addresses gap in skills collection for quality engineering | ![Open](https://img.shields.io/badge/Open-green) |
| 6 | **[#1302] color-expert** | Color expertise for any task: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility | Highly specialized domain skill; active discussion through 2026-07-21 | ![Open](https://img.shields.io/badge/Open-green) |
| 7 | **[#486] odt** | OpenDocument (.odt/.ods) create, fill, read, convert via pyexcel-ods3 + LibreOffice headless | ISO-standard document format support; triggers on "ODT", "ODS", "OpenDocument", "LibreOffice" | ![Open](https://img.shields.io/badge/Open-green) |
| 8 | **[#525] pyxel** | Retro game development via pyxel-mcp: write → run_and_capture → inspect → iterate loop for 8-bit/pixel-art games | Niche but complete workflow; links to external MCP server; updated through 2026-07-15 | ![Open](https://img.shields.io/badge/Open-green) |

> **Note**: PR comment counts show "undefined" in source data; ranking weighted by Issue cross-references, update frequency, and problem severity.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Community Signal |
|-------|-------------------|------------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — Community skills distributed under `anthropic/` namespace enabling impersonation | **Critical**: Users granting elevated permissions to skills they believe are official |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 8👍) — No org-wide sharing; manual .skill file transfer via Slack/Teams | **High**: Workflow friction for team adoption |
| **Skill Creator Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2👍) — 0% recall, Windows subprocess/encoding failures, UTF-8 panics | **High**: Core developer experience broken; blocks skill authoring |
| **Duplicate/Conflicting Skill Distribution** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) — `document-skills` and `example-skills` install identical content | **Medium**: Context window pollution, user confusion |
| **MCP/Platform Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — Expose Skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — Bedrock support | **Medium**: Demand for protocol-level interoperability |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments, closed) — Policy enforcement, threat detection, trust scoring; [#1385](https://github.com/anthropics/skills/issues/1385) — Reasoning Quality Gate Pipeline | **Emerging**: Meta-skills for AI system safety |
| **Compact Memory/State Management** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) — Symbolic notation for compact agent state | **Niche but active**: Long-running agent context optimization |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | skill-creator: run_eval.py 0% recall fix | **Blocking issue for all skill authors**; 10+ reproductions; multiple contributors (MartinCajiao, Polluelo978, Lubrsy706) converging on same fix |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | skill-creator: trigger detection fix | Companion to #1298; same root cause; Polluelo978's deep analysis |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows compatibility for skill-creator | Two independent PRs fixing PATHEXT, cp1252, select-on-pipes; gstreet-ops + joshuawowk |
| **[#362](https://github.com/anthropics/skills/pull/362)** / **[#361](https://github.com/anthropics/skills/pull/361)** | UTF-8 safety + YAML special-char detection | Mr-Neutr0n's paired fixes; prevent Rust panics + silent misparsing; long-running (Feb–Jun) |
| **[#514](https://github.com/anthropics/skills/pull/514)** | document-typography | Universal need; no opposition; PGTBoos responsive to review |
| **[#723](https://github.com/anthropics/skills/pull/723)** | testing-patterns | Comprehensive, well-structured; fills documented gap; 4444J99 active |
| **[#538](https://github.com/anthropics/skills/pull/538)** | pdf: case-sensitivity fix | Trivial, verified fix (8 mismatches); Lubrsy706 has multiple accepted fixes |
| **[#539](https://github.com/anthropics/skills/pull/539)** | skill-creator: YAML special-char warning | Prevents silent truncation; pre-parse validation; same author as #538 |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is fixing the broken skill-authoring toolchain (0% recall eval loop, Windows/UTF-8 failures) so developers can reliably create and distribute skills, while simultaneously demanding trust-boundary security (namespace impersonation) and organizational sharing primitives to make skills viable for team adoption.**

---

*Report generated from github.com/anthropics/skills data as of 2026-07-25. All links point to live GitHub items.*

---

# Claude Code Community Digest — 2026-07-25

---

## 1. Today's Highlights

Anthropic released **v2.1.219** introducing **Claude Opus 5** (`claude-opus-5`) as the new default Opus model with 1M context window and competitive pricing ($10/$50 per Mtok). The release also adds a strict network allowlist for sandboxed commands and a new `DirectoryAdded` hook. Meanwhile, the community's highest-engagement issue (#38335, 805 comments) reports **Max plan session limits exhausting abnormally fast** since March — a persistent billing/consumption bug affecting heavy CLI users.

---

## 2. Releases

### v2.1.219 — Major Model & Security Update
| Change | Impact |
|--------|--------|
| **Claude Opus 5** (`claude-opus-5`) now default Opus model | 1M context, fast mode at $10/$50 per Mtok |
| `sandbox.network.strictAllowlist` setting | Denies non-allowlisted hosts for sandboxed commands without prompting |
| `DirectoryAdded` hook | Fires after directory additions (useful for auto-indexing, security scans) |

### v2.1.220 — Maintenance
- Bug fixes and reliability improvements only

> **Links:** [v2.1.219](https://github.com/anthropics/claude-code/releases/tag/v2.1.219) • [v2.1.220](https://github.com/anthropics/claude-code/releases/tag/v2.1.220)

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#38335](https://github.com/anthropics/claude-code/issues/38335)** | Max plan session limits exhausted abnormally fast (since Mar 23) | **Highest-engagement bug** (805 comments, 470 👍). Blocks heavy CLI users on paid plans; suggests token accounting regression. | 🔥 Critical — 4+ months unresolved |
| **[#36431](https://github.com/anthropics/claude-code/issues/36431)** | Telegram plugin: inbound MCP notifications not delivered | Breaks bidirectional MCP plugin architecture; outbound works, inbound silent. Affects official plugin. | 21 comments, 32 👍 — core plugin infra gap |
| **[#62644](https://github.com/anthropics/claude-code/issues/62644)** | "Buy credits" button disabled; free tier shows $500 limit, 429 on billing | Billing UI broken for free users; prevents upgrade path. | 13 comments — onboarding blocker |
| **[#76357](https://github.com/anthropics/claude-code/issues/76357)** | Windows MSIX update fails: "file in use" → app unlaunchable until reboot | **Every update breaks Windows Desktop**; requires reboot. MSIX packaging flaw. | 7 comments, 4 👍 — Windows reliability |
| **[#67766](https://github.com/anthropics/claude-code/issues/67766)** | `API Error: socket connection closed unexpectedly` — server-initiated FIN mid-stream | 8–18×/day under heavy use; packet captures show server-side termination. | 6 comments, 4 👍 — network stability |
| **[#78469](https://github.com/anthropics/claude-code/issues/78469)** | Remote Control: `/v1/code/sessions` intermittently 401s valid OAuth (50–70%) | Split backend fleet causes auth race; breaks unattended remote sessions. | 6 comments, 1 👍 — remote workflows broken |
| **[#76248](https://github.com/anthropics/claude-code/issues/76248)** | Cowork git proxy blocks all pushes — even with user PAT | Regression ~Jul 10; PAT pass-through removed. Blocks cloud session git workflows. | 3 comments, 3 👍 — collab regression |
| **[#81025](https://github.com/anthropics/claude-code/issues/81025)** | Session defaults to `claude-opus-5[1m]` unavailable to org; silently falls back & overwrites saved preference | **New in v2.1.219**: model default ignores org entitlements, corrupts user config. | 3 comments — day-1 release regression |
| **[#81039](https://github.com/anthropics/claude-code/issues/81039)** | Desktop app capped at 200K context on Opus 5 — dispatches non-`[1m]` variant | CLI gets 1M context; Desktop hardcoded to 200K. Not a display bug — wrong model ID sent. | 0 comments — Desktop/CLI parity gap |
| **[#81035](https://github.com/anthropics/claude-code/issues/81035)** | Nested `Agent(subagent_type:"fork")` spawns unsupervised process taking real actions (PR merges, deletions) | **Safety/correctness critical**: failed fork still executes external mutations with admin bypass. | 0 comments — agent control plane flaw |

---

## 4. Key PR Progress

| PR | Title | Status | Significance |
|----|-------|--------|--------------|
| **[#80883](https://github.com/anthropics/claude-code/pull/80883)** | feat: Add context-safety-net plugin to mitigate auto-compact context loss | Open | First-party solution for silent context degradation (refs #42542, #13112, #28721). Recovers "anchor" files post-compaction. |

> Only 1 PR updated in last 24h — community focus remains on issue triage.

---

## 5. Feature Request Trends (from Issues)

| Direction | Evidence |
|-----------|----------|
| **Model entitlement & routing fixes** | #81025 (org-ineligible default), #81039 (Desktop/CLI model parity), #81017 (Fable 5 access on Max) |
| **Remote/Cloud session reliability** | #78469 (Remote Control 401s), #76248 (git proxy regression), #71616 (iOS auto-archive), #81036 (bridge retry logic) |
| **Agent/subagent observability & control** | #81030 (/tasks panel clears prematurely), #81029 (advisor inflates compact counter), #81038 (ignores STOP), #81035 (unsupervised fork) |
| **Plugin/MCP ecosystem maturity** | #36431 (Telegram inbound broken), #80263 (published plugins don't appear), #81033 (duplicate connector collision) |
| **Sandbox & OS integration hardening** | #81032 (macOS `ProcessPoolExecutor` sysctl deny), #76357 (Windows MSIX lock), #81034 (clickable pasted images) |
| **Billing/plan transparency** | #38335 (Max consumption), #62644 (free tier UI broken) |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Token/usage accounting opacity** — #38335 (470 👍) shows deep distrust in Max plan metering; no visibility into what burns sessions.
2. **Remote Control fragility** — Multiple issues (#78469, #67360, #81036) describe auth races, no background retry, permanent failure states — makes unattended/remote work unreliable.
3. **Desktop ↔ CLI feature parity gaps** — #81039 (200K vs 1M context), #76357 (Windows update breaks app), #71616 (iOS auto-archive) — Desktop treated as second-class.
4. **Agent autonomy without guardrails** — #81035 (fork runs wild), #81038 (ignores 20+ STOPs), #81037 (subagent hallucinates prompt injection) — developers want *deterministic* control, not just "smart" agents.
5. **Plugin directory pipeline broken** — #80263: "Published" ≠ visible; duplicate entries stuck; no feedback loop for plugin authors.
6. **Silent model fallbacks mutating config** — #81025: fallback overwrites saved preference — violates principle of least surprise.
7. **Auto-compact context loss** — Referenced in PR #80883 and issues #42542, #13112, #28721 — long-session developers lose critical anchors with no recovery.

---

*Digest generated from `github.com/anthropics/claude-code` data as of 2026-07-25. Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-25

---

## 1. Today's Highlights

The Windows desktop app is experiencing a **regression wave** after the July 24 update (26.721.x): multiple reports of `git.exe` process storms, CPU/disk spikes, WSL repository detection failures, and hard crashes (`0xc0000409`) triggered by Git detection. On the CLI side, **context compaction appears broken** — it reports success but leaves context at ~80% full, triggering rapid re-compaction cycles. Meanwhile, the team shipped a rapid series of **rust alpha releases (0.146.0-alpha.6 → .9)** and closed **15+ PRs** hardening network approvals, MCP auth routing, thread forking, and macOS binary signing.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.146.0-alpha.9` | Alpha | Latest in the 0.146.0-alpha series; incremental fixes atop .6–.8 |
| `rust-v0.146.0-alpha.8` | Alpha |  |
| `rust-v0.146.0-alpha.7` | Alpha |  |
| `rust-v0.146.0-alpha.6` | Alpha | Base of the current alpha train |

> **Note:** Four alpha cuts in 24h suggest active stabilization for an upcoming 0.146.0 release. No changelogs attached; watch the [releases page](https://github.com/openai/codex/releases) for notes.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#17229](https://github.com/openai/codex/issues/17229) | **Windows: `git.exe status` spawn storm + orphan `conhost.exe` processes** | Persistent background Git polling leaks processes, degrades system performance. Open since Apr, still active. | 33 comments, 6 👍 |
| [#20880](https://github.com/openai/codex/issues/20880) | **App silently creates empty `~/Documents/Codex` on every launch** | Pollutes user Documents folder; no opt-out. Simple UX fix, high visibility. | 20 comments, **39 👍** |
| [#35057](https://github.com/openai/codex/issues/35057) | **Windows Desktop unstartable after adding 2nd folder to project** | Regression in 26.721.3404; blocks multi-folder workflows entirely. | 19 comments, 5 👍 |
| [#22085](https://github.com/openai/codex/issues/22085) | **Windows: sustained high CPU from Git for Windows processes post-update** | Confirms #17229 is a regression introduced recently; 24 👍 shows broad impact. | 14 comments, 24 👍 |
| [#20933](https://github.com/openai/codex/issues/20933) | **Opening project triggers parallel `git.exe add -A` storms** | Severe CPU/disk usage on project load; affects every Windows user. | 13 comments, 11 👍 |
| [#35032](https://github.com/openai/codex/issues/35032) | **Auto-compaction reports success but leaves context at ~80% full** | Breaks long-running agent sessions; forces repeated compaction, wastes tokens. | 14 comments |
| [#28078](https://github.com/openai/codex/issues/28078) | **Xcode 27 beta: Codex sign-in fails for ChatGPT Pro (email OTP)** | Blocks Pro users on latest Xcode; Go accounts work — auth flow regression. | 18 comments, 11 👍 |
| [#35119](https://github.com/openai/codex/issues/35119) | **[WSL] 26.721.3404 marks valid WSL repos as non-Git, “Git unavailable”** | Breaks WSL2 workflows that worked in 26.715.x; regression in Git detection. | 3 comments, 3 👍 |
| [#35179](https://github.com/openai/codex/issues/35179) | **Windows 26.721.3996: `codex.exe` crash (0xc0000409) on Git detection** | Hard crash on launch; hiding `.git` avoids it. Critical blocker for affected users. | 2 comments |
| [#34677](https://github.com/openai/codex/issues/34677) | **GPT-5.6 Pro behaves as Instant / identifies as GPT-5.5 Mini** | Possible silent model rerouting; undermines trust in model selection. | 2 comments, 5 👍 |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#35275](https://github.com/openai/codex/pull/35275) | **Fix** | Trace remote exec-server connection setup — preserves spans across lazy background startup; adds Noise/rendezvous WS stages. |
| [#35271](https://github.com/openai/codex/pull/35271) | **Feature** | Include `code_mode_tool_names` in Responses Lite metadata; reserves key against client overrides. |
| [#35267](https://github.com/openai/codex/pull/35267) | **Fix** | Harden network approval cancellation & concurrency — scopes to turn/execution, fails abandoned owners, cancels denied executions. |
| [#35266](https://github.com/openai/codex/pull/35266) | **Feature** | Allow disabling in-process code-mode host fallback via `features.code_mode_host.disable_in_process_fallback`. |
| [#35264](https://github.com/openai/codex/pull/35264) | **Fix** | Sign bundled macOS helper binaries (`rg`, `zsh`) — moves fetch/sign/notarize before packaging. |
| [#35262](https://github.com/openai/codex/pull/35262) | **Feature** | Track `remote_plugin_id` in skill invocation analytics for explicit & implicit invocations. |
| [#35261](https://github.com/openai/codex/pull/35261) | **Feature** | Propagate remote plugin IDs to `SkillMetadata` from plugin loading through catalog parsing. |
| [#31307](https://github.com/openai/codex/pull/31307) | **Feature** | Configurable plugins MCP endpoint via `CODEX_PLUGINS_MCP_ENDPOINT` (decouples from ChatGPT base URL). |
| [#35238](https://github.com/openai/codex/pull/35238) | **Feature** | Support `ent26` enterprise plan across auth, rate-limits, cloud-config eligibility. |
| [#35220](https://github.com/openai/codex/pull/35220) | **Feature** | Support paginated thread forks — references frozen source-history prefix, persists only child-owned records. |

> **Pattern:** Heavy investment in **observability (tracing)**, **MCP/plugin ecosystem hardening**, **enterprise readiness**, and **thread/history architecture** — all while the Windows desktop regressions pile up.

---

## 5. Feature Request Trends (from Issue Themes)

1. **Git integration control** — Users want **opt-out or throttling** for automatic Git operations (`status`, `add -A`, `rev-parse`) on Windows; multiple issues request a setting to disable background Git polling entirely.
2. **Model transparency** — Demand for **visible model identity** in responses (see #34677) and clarity on whether “Pro” models are being silently routed to smaller variants.
3. **Context/compaction UX** — Need for **compaction that actually frees meaningful context** (#35032) and better token-usage observability during long sessions.
4. **Cross-platform parity** — WSL2, remote Linux, and macOS users report auth, Git detection, and notification gaps vs. native Windows.
5. **Plugin/skill governance** — Issues like #35255 (legacy snapshot leakage) and #33314 (multi-agent V2 lifecycle) show appetite for **verifiable plugin versioning and agent lifecycle contracts**.
6. **Safety-check false positives** — Multiple reports (#34306, #33810, #35258) of over-blocking on legitimate cybersecurity/devsecops tasks.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows Git process storms** | #17229, #22085, #20933, #33450, #35057, #35179 | **6+ issues**, high 👍, regression in 26.721.x |
| **Silent filesystem pollution** | #20880 (39 👍), #35179 (hiding `.git` prevents crash) | 2+ issues, high visibility |
| **Context compaction theater** | #35032 — “reports success, leaves 80% full” | 1 issue, but blocks long sessions |
| **Auth fragility on non-happy paths** | #28078 (Pro + OTP), #31967 (model slug resolution), #35256 (Trusted Access always fails) | 3+ distinct auth flows broken |
| **Model behavior opacity** | #34677 (Pro → Mini), #35050 (serialized tool calls), #35160 (blocked request poisons thread) | 3+ issues questioning model routing |
| **WSL/remote second-class support** | #35119 (Git detection), #20930 (no notifications), #35092 (CLI perf on WSL) | 3+ issues |
| **Safety false positives on dev tasks** | #34306, #33810, #35258 | 3+ issues in 24h |

---

## Quick Links

- **All issues updated today**: [github.com/openai/codex/issues?q=updated%3A2026-07-25](https://github.com/openai/codex/issues?q=updated%3A2026-07-25)
- **All PRs updated today**: [github.com/openai/codex/pulls?q=updated%3A2026-07-25](https://github.com/openai/codex/pulls?q=updated%3A2026-07-25)
- **Releases**: [github.com/openai/codex/releases](https://github.com/openai/codex/releases)

---

*Generated from GitHub data as of 2026-07-25. For real-time updates, watch the repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-25

## 1. Today's Highlights
No new releases shipped today. The project’s velocity is concentrated on **subagent reliability** (MAX_TURNS misreporting, generalist hangs), **Auto Memory hardening** (retries, redaction, patch validation), and **security hardening** across auth, MCP OAuth, and IDE token handling. A major **Caretaker Agent** evaluation & deployment pipeline is landing across multiple PRs, signaling investment in automated issue triage.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Priority | Area | Why It Matters | Community Signal |
|-------|----------|------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | P1 | Agent | Subagents silently “succeed” when they actually hit turn limits, masking failures in multi-agent workflows. | 12 comments, 2 👍, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | P1 | Agent | Core delegation path stalls on simple ops (folder creation); workarounds require disabling subagents entirely. | 8 comments, 8 👍, `status/need-retesting` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations | P1 | Agent / Eval Infra | Epic to mature the 76 behavioral evals across 6 models; foundational for regression prevention. | 7 comments, EPIC tracking |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads, search, mapping | P2 | Agent | Investigates whether AST tooling reduces turns, token noise, and misaligned reads—high leverage for code agents. | 7 comments, 1 👍, EPIC |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command stuck at “Waiting input” after completion | P1 | Core | Frequent false “awaiting input” on trivial commands; blocks autonomous flows. | 4 comments, 3 👍, `effort/medium` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions indefinitely | P2 | Agent | Background extractor re-queues unread sessions forever, wasting cycles and polluting inbox. | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Deterministic redaction & reduce Auto Memory logging | P2 | Security | Secrets enter model context before redaction; logs may expose skill data. | 4 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | P1 | Agent / Browser | Blocks Linux/Wayland users from browser automation; termination reason shows GOAL but fails. | 4 comments, 1 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores `settings.json` overrides (maxTurns) | P2 | Agent | Configuration merge broken for browser agent; users cannot tune turn limits. | 3 comments, `status/need-retesting` |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error when >128 tools available | P2 | Agent | Tool explosion breaks requests; needs smarter scoping/pruning. | 3 comments |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) `fix(core): refresh MCP OAuth tokens with stored client ID` | OPEN | Security / Core | Fixes token refresh for dynamically registered MCP servers; previously failed silently and wiped credentials. |
| [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) `fix(auth): use native fetch for OAuth token exchange` | OPEN | Security / Auth | Resolves “Premature close” on headless VPS by replacing undici with native `fetch` for token endpoint. |
| [#28517](https://github.com/google-gemini/gemini-cli/pull/28517) `fix(core): enforce HTTPS for GoogleCredentialsAuthProvider` | **CLOSED** | Security | Prevents ADC tokens leaking over HTTP; adds protocol verification. |
| [#28346](https://github.com/google-gemini/gemini-cli/pull/28346) `Fix trust dialog disclosure for runnable hooks` | **CLOSED** | Security | Corrects hook discovery to match actual executor shape; adds warnings for command hooks in project settings. |
| [#28330](https://github.com/google-gemini/gemini-cli/pull/28330) `fix(ide-companion): set token file mode atomically (TOCTOU)` | **CLOSED** | Security | Eliminates world-readable window on auth-token port file via atomic write+chmod. |
| [#28530](https://github.com/google-gemini/gemini-cli/pull/28530) `feat(caretaker-evals): triage evaluation framework & judge runner` | OPEN | Infra / Eval | Parallel Git worktree benchmark runner + LLM-as-a-Judge rubric for Caretaker triage pipeline. |
| [#28532](https://github.com/google-gemini/gemini-cli/pull/28532) `feat(caretaker-evals): golden issue collection & Firestore sync` | OPEN | Infra / Eval | CLI tooling to assemble/sync golden test cases for triage evals; depends on #28530. |
| [#28467](https://github.com/google-gemini/gemini-cli/pull/28467) `feat(caretaker): update Firestore schema (error, pr_number)` | OPEN | Infra | Adds error tracking, fixes auto-close status, supports PR-number linkage in issue ledger. |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) `fix(vscode-ide-companion): stop leaking disposables` | OPEN | IDE / Core | Fixes stray parens collapsing `context.subscriptions.push` into comma expression; restores diff-accept & workspace-folder disposables. |
| [#28344](https://github.com/google-gemini/gemini-cli/pull/28344) `Feat/eval validate` | **CLOSED** | Eval / CI | Adds `eval:validate` static analysis (9 rules) with non-zero exit for CI gating. |

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Subagent Observability & Control**  
   - Trajectory sharing via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598))  
   - Symlink support for local agents ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079))  
   - Explicit opt-in/opt-out per session ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))

2. **AST-Aware Code Navigation**  
   - Method-level reads, symbol search, codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746))  
   - Goal: fewer turns, less token noise, precise edits

3. **Agent Self-Awareness & Skill Discovery**  
   - Auto-invocation of custom skills/subagents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))  
   - Accurate CLI flag/hotkey knowledge ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432))

4. **Evaluation & Quality Infrastructure**  
   - Component-level behavioral evals at scale ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))  
   - Static eval validation for CI ([#28344](https://github.com/google-gemini/gemini-cli/pull/28344))

5. **Browser Agent Hardening**  
   - Session takeover, lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232))  
   - Wayland compatibility ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))  
   - Settings override respect ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Subagents misreport success on turn-limit exhaustion** | #22323 (P1, 12 comments) | High — breaks trust in delegation |
| **Generalist agent hangs on trivial tasks** | #21409 (P1, 8 👍, 8 comments) | High — forces disabling subagents |
| **Shell commands falsely show “Waiting input”** | #25166 (P1, 3 👍) | High — stalls autonomous loops |
| **Auto Memory re-processes low-signal sessions endlessly** | #26522, #26523, #26516 | Medium — resource waste, inbox noise |
| **Browser agent broken on Wayland** | #21983 (P1) | Medium — Linux desktop blocker |
| **Settings.json overrides ignored (maxTurns, etc.)** | #22267, #22186 | Medium — configuration distrust |
| **Tool explosion (>128 tools) causes 400 errors** | #24246 | Medium — limits extensibility |
| **Model litters workspace with temp scripts** | #23571 | Medium — cleanup burden |
| **Destructive commands (git reset --force) used unsafely** | #22672 | Low — safety concern |
| **Symlinks in `~/.gemini/agents/` not recognized** | #20079 | Low — workflow friction |

---

*Digest generated from `google-gemini/gemini-cli` GitHub data as of 2026-07-25. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-25

## 1. Today's Highlights
The CLI shipped **v1.0.75** adding support for **Claude Opus 5**, expanding model choice for agent workflows. Meanwhile, the community surfaced a cluster of regressions in the 1.0.74 line: plan-mode incorrectly blocking read-only `gh` commands, Ctrl+C interruption broken, session resume OOMing on large histories, and zombie-process leaks. Several new issues filed today point to settings persistence bugs (`model` silently reverted on exit) and `/ask` command silence.

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.75** | 2026-07-24 | **Add support for Claude Opus 5** — enables the latest Anthropic model for Copilot CLI agent runs. [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.75) |

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Title | Area | Why It Matters | Community Signal |
|---|-------|------|----------------|------------------|
| [#1128](https://github.com/github/copilot-cli/issues/1128) | **Add `awaitingUserInput` hook type** | theming-accessibility | Enables tooling (status bars, notifications, accessibility aids) to react when the agent is idle waiting for input — a long-standing gap in the hook system. | 👍 28 • 5 comments • Open since Jan |
| [#4183](https://github.com/github/copilot-cli/issues/4183) | **Auto-compaction doesn’t prevent CAPI 5 MB body limit** | context-memory, models | Long tool-heavy sessions hit a hard 5 MB request ceiling even when token budget remains; auto-compaction doesn’t trim serialized history enough. Blocks multi-hour coding sessions. | 👍 10 • 3 comments |
| [#4188](https://github.com/github/copilot-cli/issues/4188) | **Regression: plan-mode blocks shell commands** | permissions, tools | Plan mode now rejects read-only `gh` CLI calls (issue creation, GraphQL queries) that were previously allowed, breaking planning workflows that enrich context from GitHub. | 👍 3 • 4 comments |
| [#4220](https://github.com/github/copilot-cli/issues/4220) | **Plan mode blocks read-only `gh api` GET/GraphQL** | permissions | False-positive “may modify workspace” gate stops legitimate read-only GitHub API calls, forcing workarounds. | 👍 1 • 1 comment |
| [#4235](https://github.com/github/copilot-cli/issues/4235) | **Ctrl+C no longer cancels active agent run (regression)** | input-keyboard | Fundamental interrupt broken; users cannot stop runaway turns. Closed but root cause unclear — watch for re-regression. | 1 comment • Closed |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | **Resume of large session OOMs / 70 min CPU grind in 1.0.74** | sessions, performance | 3–4× memory spike vs 1.0.73; resuming a months-old session becomes unusable. Blocks daily driver workflows for heavy users. | 👍 0 • Just filed |
| [#4252](https://github.com/github/copilot-cli/issues/4252) | **Session exit writes stale `model` back to settings.json** | configuration, sessions | Exiting session overwrites `settings.json` with launch-time model, silently reverting manual or concurrent-session edits. Data-loss risk for config. | 👍 0 • Just filed |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **CLI 1.0.71 leaks zombie child processes (~2/min)** | platform-linux, tools | Accumulated zombies under Copilot PID; fixed in later patch but indicates subprocess management fragility. | 👍 3 • 3 comments • Closed |
| [#3773](https://github.com/github/copilot-cli/issues/3773) | **Broken light theme — unreadable prompt & selection** | theming-accessibility | Low-contrast black background on user prompt and invisible selection highlight; affects daylight/office users. | 👍 3 • 3 comments • Open since Jun |
| [#4242](https://github.com/github/copilot-cli/issues/4242) | **`/sandbox` command unavailable in 1.0.74** | commands | Command missing from help and execution; closed quickly but suggests release gating gap. | 3 comments • Closed |

## 4. Key PR Progress
> **No pull requests updated in the last 24 hours.** The velocity appears focused on issue triage and hotfix planning rather than merged PRs today.

## 5. Feature Request Trends
From the full issue set, the strongest community pulls are:

1. **Hook & extensibility surface** — `#1128` (`awaitingUserInput`), `#4233` (ACP `usage_update` emission) show demand for richer event streams to build tooling, status UIs, and IDE integrations.
2. **Plan-mode fidelity** — `#4188`, `#4220`, `#4244` (`/rename` in VS Code), `#4249` (plan indicator leakage) indicate plan mode is becoming a primary workflow but suffers from over-blocking, UI gaps, and state sync bugs.
3. **Session durability & hygiene** — `#3675` (configurable/self-cleaning worktrees), `#4246` (`archive_session` timeout), `#4251` (resume OOM), `#4144` (opaque failure reasons) — users want Git-like session semantics: predictable naming, automatic cleanup, and debuggable failures.
4. **Model & context control** — `#4183` (CAPI body limit), `#4231` (tagged instructions), `#4252` (settings persistence) — finer-grained context scoping and reliable config persistence.
5. **Cross-platform terminal polish** — `#3773` (light theme), `#4222` (Windows Ink render loop), `#4236` (X11 PRIMARY selection), `#4230` (Ctrl+G in ask_user) — parity gaps between Linux/Windows/macOS terminals.

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Regressions in patch releases** | Plan-mode blocking, Ctrl+C broken, `/sandbox` missing, resume OOM, zombie leak — all introduced in 1.0.71–1.0.74 | High (6+ issues in 48h) |
| **Opaque session failures** | `#4144` (project sessions hide startup/turn errors), `#4214` (eternal “Loading…” with no diagnostics) | Medium |
| **Settings & state corruption** | `#4252` (model reverted on exit), `#4247` (marketplace add not persisted), `#4249` (plan indicator leaks across conversations) | Medium |
| **Plan-mode over-blocking** | `#4188`, `#4220` — read-only `gh`/GraphQL calls rejected as “may modify workspace” | Medium |
| **Large-session scalability** | `#4183` (5 MB CAPI limit), `#4251` (OOM on resume), `#4246` (archive timeout) — tooling breaks at scale | Growing |
| **Accessibility & theme gaps** | `#3773` (light theme unreadable), `#1128` (no hook for screen readers) | Persistent |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-07-25 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-25

---

## 1. Today's Highlights
No new releases in the last 24 hours. Community activity centers on authentication reliability (login failures on Linux ARM64 and corporate networks), Windows TUI input regressions, and a high-interest feature request for cross-device session continuity. Two open PRs address corporate proxy SSL support and MCP server log routing.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) | Login failed: Cannot connect to host auth.kimi.com:443 ssl:default [Network is unreachable] | **CLOSED** | Network-level SSL connectivity block preventing authentication; likely corporate firewall/proxy interference. | 7 comments, 0 👍 — active troubleshooting thread, closed without explicit fix merged. |
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Feature Request: Remote Control — Continue local sessions from any device | **OPEN** | High-demand mobility feature: resume CLI sessions from phone/tablet/browser without losing local context. | 7 comments, **16 👍** — strongest community signal in this batch. |
| [#2326](https://github.com/MoonshotAI/kimi-cli/issues/2326) | VS Code Kimi Freezes | **OPEN** | Extension instability on Ubuntu (v0.5.10) causing editor hangs; impacts daily workflow. | 3 comments, 0 👍 — multiple sub-issues reported, needs triage. |
| [#2521](https://github.com/MoonshotAI/kimi-cli/issues/2521) | Windows: Arrow keys unusable in `herdr` selector | **OPEN** | Regression in TUI navigation on Windows (v0.27.0); blocks interactive workflows. | 1 comment, 0 👍 — platform-specific input handling bug. |
| [#2556](https://github.com/MoonshotAI/kimi-cli/issues/2556) | `kimi login` fails on Linux ARM64 (OAuth) | **OPEN** | Fresh install on ARM64 Linux fails at auth step; user reports paid subscription blocked. | 0 comments, 0 👍 — critical for ARM64 adoption, zero visibility so far. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#762](https://github.com/MoonshotAI/kimi-cli/pull/762) | fix: respect `SSL_CERT_FILE` env var for corporate proxy support | aaraujodata | **OPEN** | Adds standard `SSL_CERT_FILE` support so users behind MITM proxies (Zscaler, Fortinet, etc.) can inject custom CA bundles. Fixes #760. |
| [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) | fix: route MCP server log notifications to loguru instead of TUI | he-yufeng | **OPEN** | Redirects verbose MCP server logs (e.g., SearXNG) from RichHandler stderr into loguru, preventing TUI corruption. |

---

## 5. Feature Request Trends
- **Cross-device session continuity** (#1282, 16 👍): Users want to "hand off" a running local CLI session to a mobile/web client — implying demand for session serialization, secure relay, and UI parity.
- **Corporate network compatibility**: Implicit in #762 (SSL_CERT_FILE) and #1070; enterprises need first-class proxy/CA support.
- **VS Code extension stability**: #2326 suggests the extension is a primary interface; freezes erode trust.

---

## 6. Developer Pain Points
1. **Authentication fragility** — Login fails on ARM64 Linux, corporate networks, and OAuth flows; no clear troubleshooting path.
2. **Windows TUI regressions** — Arrow-key navigation broken in `herdr` (v0.27.0), indicating insufficient cross-platform testing.
3. **VS Code extension hangs** — Multiple freeze reports on Ubuntu; extension feels like a second-class citizen.
4. **MCP log spam pollutes TUI** — Server-side logs dumped to stderr break the interactive UI (addressed in #1637).
5. **Low issue visibility for critical bugs** — #2556 (ARM64 login) has 0 comments/👍 despite blocking a paying user.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — issues and PRs updated 2026-07-24.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-25

## 1. Today's Highlights
OpenCode released **v1.18.5** with critical provider stability fixes for Claude, OpenAI, Mistral, and grep symlink handling. The issue tracker shows a surge of **session instability reports** (multiple users experiencing 30-second execution halts, crashes on task submission, and model-specific failures), while contributors are actively landing lock-free runner improvements and provider authentication refreshes.

## 2. Releases
### v1.18.5 (2026-07-25)
**Core Bugfixes:**
- Improved Claude adaptive thinking handling across more response shapes
- Fixed OpenAI Responses phase handling that could break conversations
- Preserved grep symlink paths in search results ([@remixz](https://github.com/remixz))
- Preserved Mistral reasoning history across turns
- Stabilized Mistral provider integration

[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.5)

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Title | Why It Matters | Community Reaction |
|-------|-------|----------------|-------------------|
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | **Auto-discover models from OpenAI-compatible provider endpoints** | Highest engagement (188 👍, 32 comments). Eliminates manual model config for LM Studio, Ollama, llama.cpp users. | 🔥 **Top-voted feature** — strong demand for zero-config local LLM workflows |
| [#24316](https://github.com/anomalyco/opencode/issues/24316) | **Progress halts with qwen 3.6 35b-a3b with naked tool call** | Blocks users on popular Qwen models; may indicate provider/tool-call parsing bug. | 19 comments, active debugging across qwen/llama.cpp/opencode boundary |
| [#31932](https://github.com/anomalyco/opencode/issues/31932) | **Cross-project session list / picker for TUI** | Multi-repo workflow gap — sessions currently scoped to single project. | 13 comments, 5 👍; clear productivity need for polyrepo developers |
| [#25038](https://github.com/anomalyco/opencode/issues/25038) | **Long-running shell commands (Gradle) hang after success** | CI/build workflows broken; process detection fails on "BUILD SUCCESSFUL". | 11 comments, 9 👍; affects Android/Java developers heavily |
| [#38378](https://github.com/anomalyco/opencode/issues/38378) | **kimi-k3 fails on /v1/messages (Anthropic) but works on /v1/chat/completions** | Provider gateway routing bug — same model works on OpenAI compat but not Anthropic compat endpoint. | 4 comments; blocks Opencode Go plan users |
| [#38749](https://github.com/anomalyco/opencode/issues/38749) | **Agent keeps stopping abruptly** | Multiple users report execution halts ~30s without error; core stability issue. | 4 comments; correlates with #38766, #38756, #38782 |
| [#38766](https://github.com/anomalyco/opencode/issues/38766) | **OpenCode stops executing every task after ~30 seconds** | Widespread "silent stop" behavior; no error, requires manual resume. | 2 comments; appears in v1.18.4, may be regression |
| [#38756](https://github.com/anomalyco/opencode/issues/38756) | **Crash in different sessions within seconds of submitting tasks** | Consistent crash ~1s after task submission across independent sessions. | 2 comments; high severity — potential v1.18.x regression |
| [#38782](https://github.com/anomalyco/opencode/issues/38782) | **Ling 3.0 Flash Free stops after each Edit** | Model-specific halt after every tool call; "Now let me do..." loop. | 2 comments; suggests provider response parsing issue |
| [#36868](https://github.com/anomalyco/opencode/issues/36868) | **`opencode run --auto` hangs when Task subagent requests permission** | Automation broken: parent `--auto` doesn't handle child session permission requests. | 3 comments; blocks non-interactive CI/CD usage |

---

## 4. Key PR Progress (Top 10 by Technical Significance)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#38743](https://github.com/anomalyco/opencode/pull/38743) | **refactor(core): settle steps lock-free by joining tool fibers first** | Refactor | **Major**: Removes all 12 `serialized()` semaphore sites; settlement becomes ~40 contention-free lines. Performance & correctness win. |
| [#38777](https://github.com/anomalyco/opencode/pull/38777) | **fix(ai): preserve response message phases** | Bugfix | Aligns OpenAI Responses assistant phase handling with official SDK (`commentary`, `final_answer`, `null`); fixes streaming/replay issues. |
| [#38762](https://github.com/anomalyco/opencode/pull/38762) | **fix(ai): preserve response message phases (V2 port)** | Bugfix | Ports phase parsing/replay to V2 `packages/ai` protocol stack; provider-neutral baseline. |
| [#38783](https://github.com/anomalyco/opencode/pull/38783) | **fix(core): keep execute tool cache stable** | Bugfix | Ensures `execute` tool availability when Code Mode catalog empty; preserves explicit permission denial state. |
| [#38786](https://github.com/anomalyco/opencode/pull/38786) | **fix(app): refresh V1 providers after auth** | Bugfix | Disposes scoped V1 instance after API-key/OAuth auth so provider catalog rebuilds from persisted credentials. |
| [#38778](https://github.com/anomalyco/opencode/pull/38778) | **fix(opencode): keep DeepSeek assistant content non-empty** | Bugfix | Fixes DeepSeek returning `reasoning_content` with empty `content` — was causing empty assistant turns. |
| [#38776](https://github.com/anomalyco/opencode/pull/38776) | **feat(core): enable fff in node runtimes** | Feature | Adds `@ff-labs/fff-node` runtime dep; replaces Node FFF stub with Bun search adapter; conditional runtime selection. |
| [#36781](https://github.com/anomalyco/opencode/pull/36781) | **feat(auth): add support for multiple profiles per provider** | Feature | Allows multiple API keys per provider (e.g., separate OpenRouter keys for different contexts). Closes #5391. |
| [#38728](https://github.com/anomalyco/opencode/pull/38728) | **fix: keep prompt input inert during Safari IME composition** | Bugfix | Fixes CJK input in Safari web app — IME composition no longer aborted mid-input, placeholder text persists. |
| [#38759](https://github.com/anomalyco/opencode/pull/38759) | **fix(core): branch-keyed repository cache with gated reference readiness** | Bugfix | Fixes `RepositoryCache`: keys checkouts by branch, guarantees cache validity (was inferred). |

---

## 5. Feature Request Trends

**Top 5 Directions from Issue Volume & Engagement:**

1. **Zero-config local model discovery** ([#6231](https://github.com/anomalyco/opencode/issues/6231) — 188 👍)  
   Auto-detect models from Ollama/LM Studio/llama.cpp endpoints; eliminate manual `opencode.json` maintenance.

2. **Cross-project session management** ([#31932](https://github.com/anomalyco/opencode/issues/31932))  
   Global session picker across repos; critical for monorepo/polyrepo workflows.

3. **Observability: per-tool timing & turn duration** ([#38666](https://github.com/anomalyco/opencode/issues/38666))  
   TUI/Web UI showing tool latency and conversation turn elapsed time for debugging slow executions.

4. **Research/experiment automation** ([#35496](https://github.com/anomalyco/opencode/issues/35496))  
   First-class "autoresearch" loop: change → measure → keep/discard → log → repeat as built-in command.

5. **Multi-profile provider authentication** ([#36781](https://github.com/anomalyco/opencode/pull/36781) — in PR)  
   Named profiles per provider (multiple OpenRouter keys, different org contexts).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent execution halts (~30s)** | #38749, #38766, #38782, #38731 — agent stops without error, requires "continue" | **High** — 4+ issues in 24h, multiple users on v1.18.4 |
| **Session crashes on task submit** | #38756 (crash ~1s after submit), #38771 (close/delete crashes) | **High** — consistent across independent sessions |
| **Model-specific provider failures** | #38378 (kimi-k3 Anthropic endpoint), #38219 (Kimi/Qwen on Go plan), #24316 (Qwen tool call), #38782 (Ling 3.0) | **High** — multiple providers/models affected |
| **Long-running command detection** | #25038 (Gradle hangs post-success), #36868 (--auto hangs on subagent permission) | **Medium** — blocks CI/build automation |
| **TUI/Web UX gaps** | #34006 (paste path inconsistent), #38738 (serve bind errors opaque), #38666 (no timing visibility) | **Medium** — daily friction for interactive users |
| **Config management overhead** | #6231 (manual model listing), #6479 (agents.md read from parent dirs), #38770 (model revert on subagent notify) | **Medium** — configuration drift & surprise behavior |

---

*Digest generated from GitHub data (anomalyco/opencode) as of 2026-07-25. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-25

## Today's Highlights
Pi v0.82.0 ships **constrained tool sampling** — tools can now declare strict JSON Schema, Lark, or regex grammars with model-capability metadata preventing unsupported requests. Meanwhile, the community is wrestling with a cluster of model-switching regressions (context-window validation, thinking-block conversion, provider auth) and a startup race condition affecting the built-in `llama.cpp` provider.

---

## Releases
### v0.82.0 — Constrained Tool Sampling
- **New**: Tools can `prefer` or `require` structured output via JSON Schema, OpenAI Lark grammars, or regex; model metadata gates unsupported requests at call time.  
- **Docs**: [Constrained Sampling for Tools](https://github.com/earendil-works/pi/blob/v0.82.0/packages/ai/src/providers/README.md#constrained-sampling-for-tools)  
- **Impact**: Enables reliable structured tool calls across heterogeneous providers without runtime surprises.

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6768](https://github.com/earendil-works/pi/issues/6768) | **Compaction fails with Copilot Enterprise (421 Misdirected Request)** | Blocks long-running sessions for enterprise users; affects both OpenAI & Anthropic paths. | 12 comments, 11 👍 — high urgency |
| [#6922](https://github.com/earendil-works/pi/issues/6922) | **Default llama.cpp model shows “No models available” on startup** | Race condition between async model refresh and session init; breaks local-model workflows. | 6 comments, 10 👍 |
| [#6948](https://github.com/earendil-works/pi/issues/6948) | **defaultProvider/defaultModel not applied at llama.cpp startup** | Same root cause as #6922; default model ignored until manual `/model` pick. | 4 comments |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | **Pi sometimes stalls after compaction** | Long coordinator sessions hang post-compaction; no error, just silence. | 3 comments, 1 👍 |
| [#7047](https://github.com/earendil-works/pi/issues/7047) | **Gemini 3.x tool-call IDs stripped in history replay** | Breaks multi-turn tool conversations; IDs required by Gemini 3.x function calling. | 4 comments, 1 👍 |
| [#7048](https://github.com/earendil-works/pi/issues/7048) | **Compaction summary truncated mid-word at token cap** | `stopReason === "length"` not handled; summaries persist incomplete. | 3 comments |
| [#6970](https://github.com/earendil-works/pi/issues/6970) | **GitHub Copilot Plugin auth invalidates github-copilot provider tokens** | Using the Plugin (vs OAuth) causes cross-device token invalidation; affects Neovim `copilot-lsp` users. | 3 comments, 1 👍 |
| [#6998](https://github.com/earendil-works/pi/issues/6998) | **Aliyun DeepSeek models need `thinkingFormat: qwen`** | Provider config overrides correct thinking format; breaks reasoning for Qwen-token-plan models. | 3 comments |
| [#7067](https://github.com/earendil-works/pi/issues/7067) | **Model switch breaks session: GPT HTML errors, Qwen 400, no pre-switch validation** | Three failure modes when switching mid-session (context overflow, thinking blocks, HTML error pages). | 3 comments |
| [#7065](https://github.com/earendil-works/pi/issues/7065) | **Model switch lacks context-size validation & thinking-block conversion** | Root cause of #7067; silent API failures when downsizing context window. | 2 comments |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#7072](https://github.com/earendil-works/pi/pull/7072) | **Cache llama.cpp model catalog** | Fixes #6948/#6922 by caching catalog so defaults apply before async refresh. | OPEN |
| [#7082](https://github.com/earendil-works/pi/pull/7082) | **O(viewport) transcript rendering** | Viewport windowing + container memoization eliminates input lag on 5k+ line transcripts (esp. base64 images). | OPEN |
| [#7081](https://github.com/earendil-works/pi/pull/7081) | **Claude Opus 5 on Bedrock (adaptive thinking)** | Adds Opus 5 with required adaptive-thinking config; improves Bedrock error messaging. | OPEN |
| [#7083](https://github.com/earendil-works/pi/pull/7083) | **Add Opus 5 model settings** | Companion catalog entry for Opus 5 (Anthropic). | CLOSED |
| [#7055](https://github.com/earendil-works/pi/pull/7055) | **Prevent retry on tool validation errors** | Stops false 429-triggered retries when LLM emits malformed tool args (e.g., stringified JSON). | CLOSED |
| [#7046](https://github.com/earendil-works/pi/pull/7046) | **Provider-neutral prompt cache contracts** | Exhaustive `KnownApi` cache-breakpoint types; hardens Codex transport for ambiguous responses. | CLOSED |
| [#7009](https://github.com/earendil-works/pi/pull/7009) | **Await `wl-copy` exit code & fallback to xclip** | Fixes `/copy` false success in sandboxes (Wayland unavailable). | CLOSED |
| [#7061](https://github.com/earendil-works/pi/pull/7061) | **Handle array content & missing `finish_reason` in openai-completions** | Fixes Databricks/Qwen3 streaming responses that return typed arrays instead of strings. | CLOSED |
| [#7036](https://github.com/earendil-works/pi/pull/7036) | **Reload model config in picker** | Makes `/model` pick up local `models.json` changes without second refresh. | CLOSED |
| [#6654](https://github.com/earendil-works/pi/pull/6654) | **`promptCacheKey` stream option** | Opt-in override for OpenAI prompt-cache key (replaces `sessionId`). | OPEN |

---

## Feature Request Trends
1. **Model-switching robustness** — Pre-switch context validation, thinking-block translation, and provider-capability negotiation (#7065, #7067, #6998).
2. **Local/llama.cpp parity** — Startup race fixes, cached catalogs, thinking-level support for Qwen/Gemma via llama-server (#6922, #6948, #5917).
3. **Enterprise auth stability** — Copilot Enterprise compaction, GitHub Copilot Plugin vs OAuth token isolation (#6768, #6970, #6686).
4. **Structured output standardization** — Constrained sampling (shipped in v0.82), provider-neutral cache contracts, tool-schema normalization (#7046, #7050).
5. **TUI editor ergonomics** — Standard text-selection keybindings, custom renderer padding, collapsed tool-output mode (#7038, #7045, #5137).

---

## Developer Pain Points
- **Silent session corruption on model switch** — No pre-flight checks; oversized context or incompatible thinking blocks yield HTML error pages or 400s with no recovery path.
- **llama.cpp startup race** — Configured default model ignored until manual intervention; blocks local-first workflows.
- **Compaction reliability** — Copilot Enterprise 421 errors, post-compaction stalls, truncated summaries — all break long-running agent loops.
- **Provider-specific quirks leaking** — Gemini tool-call IDs, Aliyun thinking formats, Databricks array content, Bedrock profile precedence — each requires bespoke fixes.
- **Extension ecosystem friction** — `resource_discover` collapses skill scopes (#6968), custom keybindings need `/reload` (#6459), inline prompt deadlocks (#7007).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-25

---

## 1. Today's Highlights

- **v0.21.0 stable released** with a new Web Shell workspace selector, local-time insight metrics, and autofix refactors. Nightly `v0.21.0-nightly.20260725` follows the same branch.
- **SWE-bench Verified benchmarking** runs on DSW infrastructure produced quarantined results (332/500 resolved in latest full async POC), feeding into an isolated release pipeline added via PR #7656.
- **Review & Web Shell workflows** see heavy investment: read-only PR panel, submit-only write enforcement, head-drift detection, and git-status painting optimizations land in stacked PRs.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.21.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0) | Stable | `feat(web-shell)`: workspace selector dropdown in composer toolbar ([#7390](https://github.com/QwenLM/qwen-code/pull/7390)); `fix(cli)`: insight days/hours measured in local time everywhere ([#7670](https://github.com/QwenLM/qwen-code/pull/7670)); `refactor(autofix)` internals. |
| [v0.21.0-nightly.20260725.1183a4c82](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260725.1183a4c82) | Nightly | Same change set as stable; published from `release/v0.21.0-nightly.20260725.1183a4c82`. |
| DSW SWE-bench POCs (4 runs) | Isolated prereleases | Full 500-case SWE-bench Verified executions on self-hosted DSW runners; results quarantined (332 resolved, 107 unresolved, 56 exec errors, 5 infra failures). Not official releases. |

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#5800](https://github.com/QwenLM/qwen-code/issues/5800) TUI: last line of tall replies overwritten on completion (Static mode) | Core rendering bug affecting readability; blocked on upstream Ink #973. | 8 comments, P2, `welcome-pr` — active triage. |
| [#7684](https://github.com/QwenLM/qwen-code/issues/7684) Command-mode multi-line statusline mispositions IME candidate box (macOS) | Breaks CJK input workflow; visual offset from cursor. | 5 comments, P2, macOS-scoped, `welcome-pr`. |
| [#7264](https://github.com/QwenLM/qwen-code/issues/7264) Cold-start: lazy-load remaining eager imports from ACP audit (17 MB / 2420 modules) | Directly impacts startup latency; follow-up to #4748. | 5 comments, P2, performance, `welcome-pr`. |
| [#7631](https://github.com/QwenLM/qwen-code/issues/7631) `[AcpBridge] xterm.js: Parsing error` flood in WeChat channel | Noise in logs; may indicate ANSI handling regression. | 5 comments, `need-information`. |
| [#7699](https://github.com/QwenLM/qwen-code/issues/7699) Inline math recognition inconsistent across render/copy/tables/streaming | Math UX regression from #3680; single-char `$x$` missed. | 3 comments, P2, `welcome-pr`, fresh (created today). |
| [#7626](https://github.com/QwenLM/qwen-code/issues/7626) Model relaunches background shell when output file empty (buffered long jobs) | False restart loops for training scripts; sidecar fix in #7669. | 3 comments, P2, `welcome-pr`. |
| [#7697](https://github.com/QwenLM/qwen-code/issues/7697) VS Code extension cannot connect to Unity MCP (Claude Code works) | MCP interop gap; blocks Unity workflow adopters. | 3 comments, `need-information`, VS Code scope. |
| [#7685](https://github.com/QwenLM/qwen-code/issues/7685) Subagent model grade selection at spawn time (`model` param on `agent` tool) | Enables cost/quality routing for subagents; tied to settings.json grades. | 3 comments, P3, roadmap/subagents-tools. |
| [#7659](https://github.com/QwenLM/qwen-code/issues/7659) `tool_choice: "required"` rejected in thinking mode (DashScope 400) | Breaks memory recall side queries; requires manual `thinkingMandatory` config. | 3 comments, P2, core. |
| [#7696](https://github.com/QwenLM/qwen-code/issues/7696) Service Agent Engine: agent-agnostic runtime for background auto-control agents | Architectural request to unify daemon background agents (watchers, indexers, etc.). | 2 comments, P3, roadmap/background-automation. |

---

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#7686](https://github.com/QwenLM/qwen-code/pull/7686) | Perf | **Lazy-load first-use dependencies** — reduces cold-start import closure; author `doudouOUC`. |
| [#7683](https://github.com/QwenLM/qwen-code/pull/7683) | Feature | **Web Shell: read-only GitHub PR panel** + `/prs` slash command; shows title, branch, author, review badge, CI icon. |
| [#7691](https://github.com/QwenLM/qwen-code/pull/7691) | Feature | **Review: enforce submit-only write contract** + cleanup tripwire to flag bypass writes in terminal. |
| [#7692](https://github.com/QwenLM/qwen-code/pull/7692) | Feature | **Review: detect head drift at presubmit** and cap verdict; stacked on #7691. |
| [#7680](https://github.com/QwenLM/qwen-code/pull/7680) | Perf | **Web Shell: paint composer git chip before git status completes** via cached daemon summary + background recompute. |
| [#7669](https://github.com/QwenLM/qwen-code/pull/7669) | Fix | **Core: write status sidecar** (`shell-<id>.status` JSON) so models stop misreading quiet background shells (fixes #7626). |
| [#7651](https://github.com/QwenLM/qwen-code/pull/7651) | Perf | **Keep volatile auto-memory section last in system prompt** — stable → context → volatile layering (hermes-agent pattern). |
| [#7586](https://github.com/QwenLM/qwen-code/pull/7586) | Feature | **Integrations: retrieval-only external context search** (Phase 1) for trusted-collaborator deployment profile. |
| [#7268](https://github.com/QwenLM/qwen-code/pull/7268) | Feature | **Serve: hot-reload workspace trust changes** without daemon restart; semantic trust-policy snapshots. |
| [#7632](https://github.com/QwenLM/qwen-code/pull/7632) | Feature | **Channels: GitHub polling adapter** with notification-as-wakeup architecture; responds to @mentions on issues/PRs. |

---

## 5. Feature Request Trends

1. **Web Shell parity & polish** — workspace selector (#7390), PR panel (#7683), git chip painting (#7680), Changes/History dialogs for worktrees (#7695).
2. **Subagent & model-grade control** — spawn-time model selection (#7685), fork profiles for cache-sharing (#7625), Service Agent Engine (#7696).
3. **Review workflow hardening** — submit-only writes (#7691), head-drift detection (#7692), comment-status helper (#7690), CI finalize workflow (#7693).
4. **Channel integrations** — DingTalk outbound images (#7687/#7698), GitHub polling adapter (#7632), hot-reload trust (#7268).
5. **Math authoring UX** — inline math alignment (#7699), explicit source-preserving contract (#7700).
6. **Performance foundations** — lazy-loading (#7686, #7264), system prompt layering (#7651), cold-start audit follow-ups.

---

## 6. Developer Pain Points

| Area | Recurring Frustrations |
|------|------------------------|
| **TUI/Rendering** | Last line eaten on tall replies (#5800), blank gap after resume (#7485), IME candidate misposition on multi-line statusline (#7684), WSL/Windows Terminal char duplication (#7634). |
| **Background Shell Management** | Empty output files trigger false restarts (#7626), no machine-readable status (fixed in #7669), leaky worktree leases on review cancel (#7694). |
| **MCP/Tool Interop** | Unity MCP works in Claude Code but not Qwen VS Code (#7697); `tool_choice: required` incompatible with thinking mode (#7659). |
| **Rate Limits & Config** | Hardcoded 60s/120s/240s SSE retry delays (#7658), no user-configured image generation model (#7606). |
| **Cold Start & Daemon Health** | 17 MB eager import closure (#7264), unbounded EventBus journal, leaked abort listeners, byte-budget bypasses (#7621). |
| **Token/Usage Accounting** | OpenAI-compatible streams lose usage after empty choices frame (#7649), insight report mixes UTC/local dates (#6835). |

---

*Generated from GitHub data for `QwenLM/qwen-code` as of 2026-07-25. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-25

## 1. Today's Highlights
**v0.9.1 released** — the project has rebranded from `deepseek-tui` to **CodeWhale** (Shannon Labs product). The legacy `deepseek-tui` npm package is deprecated; users should migrate to the `codewhale` command and npm package. v0.9.2 development is heavily underway with a major architectural shift toward a **Fleet/Workflow/Lane/Runtime** orchestration model, plus a TUI information-architecture overhaul and extensive codebase modularization.

---

## 2. Releases
### v0.9.1 (2026-07-24)
- **Rebrand**: `deepseek-tui` → **CodeWhale** (`codewhale` CLI, npm package, release assets)
- **Deprecation**: Legacy `deepseek-tui` npm package receives no further releases
- **Migration**: Users on v0.8.x should update to `codewhale` command and new package
- **Channels shipped**: GitHub Release (34 assets), crates.io (18 crates), npm (`latest`), CNB mirror
- **Known gap**: Docker (GHCR) and Homebrew tap still at v0.9.0 — recovery workflow in progress ([#4801](https://github.com/Hmbown/CodeWhale/pull/4801), [#4802](https://github.com/Hmbown/CodeWhale/pull/4802))

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: Staged command-boundary refactor** | Core architecture cleanup for v0.9.2; enables Fleet/Workflow separation. 17 comments, active since June. | High — tracked as canonical refactor path |
| [#4175](https://github.com/Hmbown/CodeWhale/issues/4175) | **v0.9.2 Architecture: Fleet/Workflow/Lane/Runtime model** | Canonical tracker for new orchestration vocabulary; prevents concept collapse. Links implementation phases. | High — 11 comments, closed but foundational |
| [#4178](https://github.com/Hmbown/CodeWhale/issues/4178) | **Stopship workflow as fleet-backed lane (dogfood)** | End-to-end dogfood of new model against active stopship issues; validates architecture in production. | High — 12 comments, closed after validation |
| [#3480](https://github.com/Hmbown/CodeWhale/issues/3480) | **EPIC: TUI information architecture & visual UX overhaul** | Addresses raw-state overload in multi-agent work; sub-agent overlay vs transcript conflicts observed in dogfood. | Medium — 3 comments, UX-critical |
| [#689](https://github.com/Hmbown/CodeWhale/issues/689) | **`deepseek doctor` passes but `deepseek run` fails** | User-facing reliability gap: diagnostics green but runtime broken (no output/start). Affects v0.8.10 users. | Medium — 8 comments, needs reproduction |
| [#3313](https://github.com/Hmbown/CodeWhale/issues/3313) | **Split `RuntimeThreadManager` (7,133 lines) into store/executor/events/types** | Massive module decomposition for maintainability; part of systematic large-file cleanup. | Medium — 3 comments, structural |
| [#3880](https://github.com/Hmbown/CodeWhale/issues/3880) | **Windows: DSML Interrupt Task missing from release branch** | Win users on v0.8.66 still hit known interrupt bug; release packaging gap. | Medium — 4 comments, platform-specific |
| [#3903](https://github.com/Hmbown/CodeWhale/issues/3903) | **Perf: Streaming thinking cell O(N²) re-parse on every revision** | Same quadratic pathology fixed for assistant cells in #3897; impacts long reasoning streams. | Low — 1 comment, performance |
| [#4790](https://github.com/Hmbown/CodeWhale/issues/4790) | **Add Hindi localization (Devanagari shaping spike)** | First Indic locale; largest dev population. Requires terminal shaping work beyond translation. | Low — 1 comment, strategic i18n |
| [#4794](https://github.com/Hmbown/CodeWhale/issues/4794) | **Model catalog: Make vision/modality a routed capability** | Modality data parsed/stored but unused; routing decisions still guess. Blocks multimodal honesty. | Low — 1 comment, architectural |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Summary |
|----|--------|---------|
| [#4802](https://github.com/Hmbown/CodeWhale/pull/4802) | Open | **Release recovery**: Standalone workflow to fix Docker/Homebrew channels stuck at v0.9.0 (replaces broken #4801) |
| [#4799](https://github.com/Hmbown/CodeWhale/pull/4799) | Closed | **Web sync**: Updates `latest-published-release.json` to v0.9.1 so install page reflects current release |
| [#4776](https://github.com/Hmbown/CodeWhale/pull/4776) | Closed | **Auto-deploy**: Enables `codewhale.net` deploy on every `main` push (was manual `workflow_dispatch` only) |
| [#4768](https://github.com/Hmbown/CodeWhale/pull/4768) | Closed | **Agent stance**: Adopts "intent is the artifact" as operating principle in `AGENTS.md`/`CLAUDE.md` |
| [#4746](https://github.com/Hmbown/CodeWhale/pull/4746) | Closed | **README overhaul**: Simplifies tone, removes marketing slogans, refreshes 6 translations |
| [#4611](https://github.com/Hmbown/CodeWhale/pull/4611) | Closed | **Durable goals**: Carries goal objective/budget/usage across turns; typed continuation queue |
| [#4608](https://github.com/Hmbown/CodeWhale/pull/4608) | Closed | **Permission postures**: Aligns Full Access/Ask/Never/Auto-Review across subagent handoffs |
| [#4793](https://github.com/Hmbown/CodeWhale/pull/4793) | Open | **Cleanup**: Deletes 7 v0.8.68 lane scripts (first-gen workflow automation, now obsolete) |
| [#4798](https://github.com/Hmbown/CodeWhale/pull/4798) | Open | **PR hygiene**: Requires every PR to close an issue or declare why not (329/342 issues touched this month) |
| [#4792](https://github.com/Hmbown/CodeWhale/pull/4792) | Open | **Triage fix**: Stops over-labelling well-specified issues (auto-labellers penalize detailed reports) |

> **Dependabot batch** (all 2026-07-24): `ignore` 0.4.31, `rquickjs` 0.12.1, `shellexpand` 3.1.2, `jsonschema` 0.48.5, `base64` 0.23.0, `docker/login-action` 4.5.1, `rust-toolchain` latest — all open, routine maintenance.

---

## 5. Feature Request Trends (from Issue Corpus)

| Direction | Evidence | Priority |
|-----------|----------|----------|
| **Orchestration model solidification** | Fleet/Workflow/Lane/Runtime canon (#4175), handoff gates (#4179), role-based workflow steps (#4177), stopship dogfood (#4178) | **Critical** — v0.9.2 core |
| **TUI information architecture** | UX overhaul epic (#3480), hotbar opt-in (#3389/#3399), sidebar placement parity (#4750), modal infra split (#3957) | **High** — usability blocker |
| **Codebase modularization** | 5+ split epics: `RuntimeThreadManager` (#3313), `mcp.rs` (#3310), history renderers (#3308), `main.rs` dispatcher (#3948), `run_event_loop` (#3925), UI tests (#3951) | **High** — maintainability |
| **Localization expansion** | Hindi/Devanagari (#4790), Ukrainian (#4791), Russian (tracked), localization matrix gating (#4787) | **Medium** — strategic reach |
| **Multimodal honesty & routing** | Vision/modality as routed capability (#4794), security/privacy/billing for audio/image (§8, #4796) | **Medium** — trust/compliance |
| **Developer experience tools** | `/dryrun` preview (#1004), `@`-mention completion perf (#3899), streaming thinking perf (#3903) | **Medium** — daily friction |
| **Constitution extensibility** | User-configurable amendments with validator (#4783) | **Low** — power-user |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Diagnostics lie** — `doctor` passes but `run` fails silently | High (user-reported) | [#689](https://github.com/Hmbown/CodeWhale/issues/689) — 8 comments, no output/start |
| **Windows release lag** — Known fixes missing from Windows packages | Medium | [#3880](https://github.com/Hmbown/CodeWhale/issues/3880) — DSML interrupt bug in v0.8.66 win |
| **SSH sandbox egress blocked** — TCP 22 outbound from embedded shell fails | Medium | [#1829](https://github.com/Hmbown/CodeWhale/issues/1829) — exit 255, works locally |
| **O(N²) streaming perf** — Thinking/assistant cells re-parse full buffer per revision | Medium | [#3903](https://github.com/Hmbown/CodeWhale/issues/3903), [#3899](https://github.com/Hmbown/CodeWhale/issues/3899) (file walk/keystroke) |
| **No request preview** — Cannot see what V4 Pro will send before committing tokens | Medium | [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) — `/dryrun` requested |
| **Hotbar discoverability** — Power feature hidden, no setup path | Low | [#3389](https://github.com/Hmbown/CodeWhale/issues/3389) — opt-in gated by #3807 |
| **PR/issue hygiene overhead** — 329/342 issues touched but unclosed; auto-labellers noisy | Low (meta) | [#4798](https://github.com/Hmbown/CodeWhale/pull/4798), [#4792](https://github.com/Hmbown/CodeWhale/pull/4792) |

---

**Bottom line**: The project is in a **major architectural transition** (v0.9.1 → v0.9.2) with rebranding complete, orchestration model codified, and systematic decomposition of monolithic modules. Near-term watch items: Docker/Homebrew channel recovery, Windows parity, and whether the Fleet/Workflow model survives dogfooding without regressions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*