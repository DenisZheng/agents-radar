# AI CLI Tools Community Digest 2026-07-29

> Generated: 2026-07-29 02:00 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Comparison Report — 2026-07-29

## 1. Ecosystem Overview
The AI CLI landscape is maturing rapidly into a **workspace-centric, multi-session paradigm** where tools compete on session persistence, plugin extensibility (via MCP), and cross-platform reliability. Nine major tools shipped or prepared releases in the last 24 hours, with **Gemini CLI (3 releases), OpenCode (2 patches), and Qwen Code (stable + nightly)** demonstrating the highest iteration velocity. Community attention has shifted from core chat capabilities to **operational concerns**: authentication/entitlement fidelity, Windows/MSIX stability, session data integrity, and subagent reliability. Enterprise readiness—plugin governance, audit trails, policy controls—is now a explicit differentiator for Copilot CLI, Claude Code, and OpenCode.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Status (24h) | Notable Signals |
|------|------------------|---------------|----------------------|-----------------|
| **Claude Code** | 10 | 3 | None | 470 👍 on Max plan quota bug; Windows MSIX CIG blocks; MCP spec gaps |
| **OpenAI Codex** | 10 | 10 | **v0.146.0 stable** + alpha | 864 👍 on Linux desktop request; Windows app-server crashes (3 critical bugs in 48h) |
| **Gemini CLI** | 10 | 11 | **v0.53.0 stable**, v0.54.0-preview, v0.55.0-nightly | A2A protocol fix; Caretaker triage orchestrator; SSRF mitigation |
| **GitHub Copilot CLI** | 10 | 1 | **v1.0.76-1** | Silent exit regression in today’s release; Windows interactive instability; ACP parity gaps |
| **Kimi Code CLI** | 5 | 7 | None | `/plugins` crash on Windows (≥2 plugins); OAuth blocks free-tier promo users |
| **OpenCode** | 10 | 10 | **v1.18.9**, v1.18.8 | 193 👍 on OpenAI-compatible model auto-discovery; 13 GB+ unbounded DB growth |
| **Pi** | 10 | 10 | None | 47 ADRs published; Undici proxy fix; Wayland clipboard gap; extension symlink support |
| **Qwen Code** | 10 | 10 | **v0.21.1 stable**, v0.21.0-nightly | Windows terminal regressions; session transcript pollution; CI/E2E flakiness |
| **DeepSeek TUI** | 10 | 10 | v0.9.2 RC in validation | `--no-sandbox` demand; `/stop` command for autonomy; LaTeX rendering; provenance/SBOM |

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Multi-session/workspace management** | Codex, Claude, Gemini, Copilot, OpenCode, Qwen | Named sessions, pinning, cross-device sync, archive access, custom storage paths |
| **MCP / Plugin protocol standardization** | Claude, Codex, Gemini, OpenCode, Pi, Qwen | Session IDs on HTTP MCP, OAuth `redirect_uri` flexibility, manifest support, marketplace integrations (Bedrock, Claude Code, Apiário) |
| **Windows parity & stability** | Claude, Codex, Copilot, Qwen, DeepSeek, Kimi | MSIX Code Integrity Guard fixes, ConPTY handle leaks, CRLF editing, interactive-mode blanking, ARM64 TUI support |
| **Authentication & entitlement fidelity** | Claude, Codex, Copilot, Kimi, OpenCode | Plan mismatches (Max/Pro/Go), OAuth loops, `setup-token` vs interactive discrimination, BYOK in ACP, promo-credit recognition |
| **Subagent/agent reliability** | Codex, Gemini, OpenCode, Qwen, Claude | Model override visibility, turn-limit misreporting, silent hangs, stale snapshot resumption, autonomous delegation control |
| **Token/context window management** | Claude, Gemini, Qwen, OpenCode | Accurate context reporting (Opus 5 1M vs 200k), compression side-query clamping, CJK token counting, long-context streaming resilience |
| **TUI/terminal UX hardening** | Codex, Copilot, OpenCode, Pi, DeepSeek, Qwen | Wayland clipboard, tmux/sixel images, pinned input/viewport scrolling, RTL support, render-loop optimization |
| **Session data integrity & portability** | Codex, Copilot, Qwen, OpenCode, Claude | JSONL corruption/orphaning, empty-turn bricking, resume fidelity, transcript pollution (`additionalContext`), export/replay |
| **Security hardening** | Pi, Qwen, DeepSeek, Gemini | SSRF mitigation (async DNS), provenance/SBOM attestations, sandbox escape opt-out, private network hook guards |
| **Local/self-hosted model support** | OpenCode, Kimi, Pi, Qwen, DeepSeek | Auto-discovery for Ollama/LM Studio/llama.cpp, `--model free` picker, OpenAI-compatible routing, `llamacpp` docs |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|---------------------|
| **Claude Code** | Enterprise compliance, billing integrity, MCP spec leadership | Max/Pro subscribers, corporate teams | MSIX packaging, strict marketplace policy, OAuth gating, session-centric architecture |
| **OpenAI Codex** | Multi-task workspace manager, subagent orchestration | Power users, multi-project developers | Named sessions + pinned threads, Agent Plugin manifests, rusty-v8 sandbox, MultiAgent V2 (despite model-lock issues) |
| **Gemini CLI** | Agent orchestration & code intelligence | Autonomous workflow builders, Google Cloud users | Caretaker triage orchestrator, AST-aware tooling, A2A protocol, component-level evals (76 behavioral tests) |
| **GitHub Copilot CLI** | Voice-first UX, enterprise ACP integration, scheduled automation | GitHub enterprise, voice-driven devs | Voice mode media pause, `/limits predict`, scheduled-prompt counters, server-managed plugin enablement |
| **Kimi Code CLI** | Session hygiene, local model support, hook extensibility | Privacy-conscious, self-hosted model users | `/delete` command demand, `llamacpp` backend, notification hooks for approvals, ACP `QuestionNotSupported` semantics |
| **OpenCode** | Provider-agnostic model access, Go subscription billing | Polyglot LLM users, cost-sensitive teams | OpenAI-compatible auto-discovery, provider-currency usage reporting, event-sourced storage (needs compaction) |
| **Pi** | Extension system robustness, architectural transparency | Extensibility-focused, OSS contributors | 47 ADRs published, symlink-safe extensions, resource metadata preservation, Fireworks/Apiário provider agility |
| **Qwen Code** | Terminal UX overhaul, session fidelity, channel ecosystem | Asian-market devs, multi-platform teams | Web-shell contextual panels, GitLab/DingTalk channels, auto-skill curator, bounded large-file reads |
| **DeepSeek TUI** | Local-first autonomy, rich terminal output, supply-chain security | Power users rejecting sandboxes, technical/scientific users | `--no-sandbox` mode, `/stop` command, LaTeX/sixel rendering, provenance/SBOM, rio-vt test harness |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **Gemini CLI**, **OpenAI Codex**, **OpenCode**, **Qwen Code** | Gemini: 3 releases/24h; Codex: v0.146.0 major UX shift; OpenCode: 2 patches + 193 👍 top issue; Qwen: stable + nightly + 10 PRs |
| **Strong Community Engagement** | **Claude Code**, **OpenAI Codex**, **OpenCode**, **Pi** | Claude: 470 👍 (Max plan), 826 comments; Codex: 864 👍 (Linux app); OpenCode: 193 👍 (model discovery); Pi: 13 👍 (llama.cpp), 47 ADRs |
| **Enterprise Maturity Signals** | **GitHub Copilot CLI**, **Claude Code**, **OpenCode** | Copilot: ACP protocol, server-managed plugins, policy gating; Claude: strict marketplace, MSIX; OpenCode: provider-currency usage, Go billing |
| **Stabilizing / Bug-Focused** | **Kimi Code CLI**, **DeepSeek TUI**, **GitHub Copilot CLI** | Kimi: Windows crash + OAuth regression blocking onboarding; DeepSeek: v0.9.2 RC hardening; Copilot: silent exit regression in latest release |
| **Architectural Investment** | **Pi**, **Gemini CLI**, **OpenCode** | Pi: 47 ADRs + 6 TDRs; Gemini: Caretaker orchestrator + eval infra; OpenCode: event-sourced storage (needs compaction fix) |

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **MCP as universal plugin substrate** | 🔥 High — 6/9 tools actively fixing MCP gaps | Invest in MCP server development; expect standardization of session IDs, OAuth flows, and marketplace discovery within 6 months |
| **Windows is no longer second-class** | 🔥 High — 7/9 tools have Windows-specific blockers | CI must include Windows ARM64/x64; MSIX/ConPTY/CRLF are table stakes; corporate VBS/HVCI environments drive packaging decisions |
| **Session = persistent data asset** | 🔥 High — Corruption/orphaning reported in 5 tools | Implement session backup, export, and integrity checks; treat JSONL/event stores as critical infrastructure |
| **Subagent reliability = competitive moat** | 🟡 Rising — 5 tools report silent hangs/model locks | Demand explicit per-agent model config, turn observability, and stop/interrupt primitives before adopting autonomous workflows |
| **Local/self-hosted model demand accelerating** | 🟡 Rising — 5 tools adding auto-discovery | Plan for air-gapped deployments; evaluate Ollama/LM Studio/llama.cpp integration; `--model free` pickers signal cost sensitivity |
| **Security hardening moving upstream** | 🟢 Emerging — SSRF fixes, provenance, sandbox opt-out | Require SBOM/provenance in vendor evals; audit hook/private-network guards; `--no-sandbox` reflects real dev friction |
| **Accessibility & internationalization hardening** | 🟢 Emerging — RTL (Codex, OpenCode), Wayland (Pi, DeepSeek), CJK tokens (Qwen) | Global rollout requires terminal-level i18n investment; Wayland is now baseline for Linux |
| **Enterprise plugin/governance controls** | 🟢 Emerging — Copilot (server-managed), Claude (strict marketplace), OpenCode (policy) | Plugin allowlists, auto-update policies, and audit trails are becoming procurement requirements |

---

**Bottom Line**: The ecosystem has converged on a **workspace-centric, MCP-extensible, multi-session architecture**. Differentiation now hinges on **operational excellence** (Windows stability, auth fidelity, session integrity), **subagent controllability**, and **enterprise governance features**. Teams should prioritize tools with visible investment in session durability, cross-platform parity, and plugin ecosystem maturity—**Gemini CLI, OpenCode, and Codex** currently lead on iteration velocity, while **Copilot CLI and Claude Code** lead on enterprise readiness.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-07-29)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| Rank | PR | Skill / Focus | Description | Discussion Highlights | Status |
|------|-----|---------------|-------------|----------------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py 0% recall fix** | Fixes the evaluation pipeline that incorrectly reports 0% recall for all skill descriptions, breaking the description-optimization loop. Addresses Windows stream reading, trigger detection, and parallel workers. | Core infrastructure bug affecting all skill authors; 10+ independent reproductions cited. | **Open** |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Typographic quality control for AI-generated documents: prevents orphan/widow lines, header stranding, numbering misalignment. | Addresses a universal pain point—every document Claude generates suffers these issues. | **Open** |
| 3 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Mechanical file verification + four-dimension reasoning quality gate (correctness, completeness, consistency, clarity). Universal, stack-agnostic. | Novel "pre-delivery audit" paradigm; frames quality as a gated pipeline. | **Open** |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing. | Broad coverage of modern testing stack; high practical utility. | **Open** |
| 5 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility, gamut mapping. | Deep domain specialization; fills a gap in design/visual tasks. | **Open** |
| 6 | [#486](https://github.com/anthropics/skills/pull/486) | **odt (OpenDocument)** | Create, fill, read, convert ODT/ODS files; template filling; ODT→HTML parsing. Triggers on "ODT", "OpenDocument", "LibreOffice". | ISO-standard format support; enterprise/reporting use cases. | **Open** |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Retro/pixel-art/8-bit game development via pyxel-mcp MCP server. Workflow: write → run_and_capture → inspect → iterate. | Niche but passionate community; showcases MCP + skill integration. | **Open** |
| 8 | [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Lifecycle management for planning artifacts (addresses #1417): creation, update, archival, cleanup. | Solves "planning debt" accumulation; originated from community issue discussion. | **Open** |

> **Note:** All top PRs remain **Open** as of 2026-07-29. Several are critical infrastructure fixes (#1298, #1099, #1050, #1323, #1261) blocking skill-creator reliability on Windows and in evaluation loops.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Community Signal |
|-------|-------------------|------------------|
| **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — community skills masquerading as official `anthropic/` namespace; [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint permission logic in skills | **Highest engagement**; users demand namespace isolation, signature verification, and permission boundaries. |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — org-wide library, direct sharing links vs. manual file transfer | Strong enterprise demand; current workflow is friction-heavy. |
| **Evaluation & Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments, 1👍) — `run_eval.py` 0% recall, optimization loop broken | Skill authors cannot iterate on descriptions; core tooling failure. |
| **Windows Compatibility** | [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2👍), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — PATHEXT, cp1252, `select()` on pipes | Blocking adoption on Windows; multiple PRs converging on same fixes. |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` skill injects 156k tokens in one call | Skills must become token-aware; lazy loading / streaming needed. |
| **Skill Discovery & Deduplication** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) — `document-skills` + `example-skills` install identical content | Packaging/registry design flaw; users get duplicate skills in context. |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) — expose skills as MCPs; [#525](https://github.com/anthropics/skills/pull/525) pyxel-mcp | Architectural desire: skills ↔ MCP interoperability. |
| **Governance & Quality Meta-Skills** | [#412](https://github.com/anthropics/skills/issues/412) (closed) — agent-governance; [#83](https://github.com/anthropics/skills/pull/83) — skill-quality-analyzer, skill-security-analyzer | Community wants skills that *audit other skills* and enforce agent safety patterns. |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py 0% recall fix** | Blocks all skill description optimization; 10+ reproductions; multiple related PRs (#1099, #1050, #1323, #1261) converge here. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal need; no existing skill addresses typographic quality; high practical impact per document. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive, well-structured; aligns with engineering workflow demand; testing is a top use case. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Novel quality-gate architecture; mechanical + reasoning verification; universal applicability. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Deep domain coverage; fills design/accessibility gap; self-contained with reference tables. |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | Open standard format; enterprise reporting workflows; template filling is high priority; ODT→HTML parsing included. |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Directly addresses a filed issue (#1417); solves accumulating planning debt; lifecycle approach. |
| [#538](https://github.com/anthropics/skills/pull/538) | **pdf: case-sensitivity fix** | Trivial but breaking on Linux/CI; 8 mismatches; quick win for stability. |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator: YAML special-char warning** | Prevents silent description truncation; improves authoring DX. |
| [#541](https://github.com/anthropics/skills/pull/541) | **docx: w:id collision fix** | Prevents document corruption with existing bookmarks; real-world data loss bug. |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is for *reliable, trustworthy skill infrastructure* — fixing broken evaluation pipelines, securing the namespace/trust boundary, enabling org-wide sharing, and making skills work on Windows — while simultaneously craving *high-leverage domain skills* (typography, testing, color, document formats) that eliminate repetitive expert work in every session.**

---

# Claude Code Community Digest — 2026-07-29

## Today's Highlights
No new releases shipped in the last 24 hours. Community attention remains focused on **persistent authentication/plan-limit bugs** (Max plan session exhaustion, OAuth loops, Fable 5 gating) and **Windows/MSIX stability** (Code Integrity blocks on `vk_swiftshader.dll`). A new MCP spec gap—missing session identifiers on HTTP MCP servers—has garnered significant developer interest.

---

## Releases
*No releases published in the last 24h.*

---

## Hot Issues (Top 10 by Impact & Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Max plan session limits exhausted abnormally fast since Mar 23** | Core billing/quota bug affecting paying Max users; 470 👍, 826 comments | 🔥 Critical — blocks daily work for high-volume users |
| [#26452](https://github.com/anthropics/claude-code/issues/26452) | **Session disappeared after logout/restart (Desktop)** | Data-loss risk; no recovery path documented | 29 👍, 50 comments — urgent for Desktop users |
| [#29449](https://github.com/anthropics/claude-code/issues/29449) | **"Remote Control environments not available" for Pro users** | Blocks VS Code/Remote Control workflow; misaligned plan entitlements | 31 👍, 27 comments |
| [#41836](https://github.com/anthropics/claude-code/issues/41836) | **No session ID sent to MCP servers** | **Spec gap**: prevents per-conversation state on MCP servers; blocks multi-tenant MCP apps | 25 👍, 16 comments — architectural blocker |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | **OAuth loop: `state` param dropped after re-auth redirect** | Breaks login on Linux/IntelliJ; affects CI/headless setups | 11 👍, 15 comments |
| [#80999](https://github.com/anthropics/claude-code/issues/80999) | **Windows MSIX: hidden browser pane kills app via CIG block on `vk_swiftshader.dll`** | Hard crash on corporate-managed Win11 (VBS/HVCI); "Repair" loop | 2 👍, 8 comments — enterprise blocker |
| [#81341](https://github.com/anthropics/claude-code/issues/81341) | **MSIX CIG + vendor-signed `vk_swiftshader.dll` kills GPU process on every browser preview** | Duplicate of #80999; confirms systemic Windows packaging issue | 2 👍, 3 comments |
| [#79597](https://github.com/anthropics/claude-code/issues/79597) / [#81350](https://github.com/anthropics/claude-code/issues/81350) | **Fable 5 gated behind "usage credits" for Max + `setup-token` auth** | Headless/automation auth discards `subscriptionType`; blocks Max entitlements | 9+3 👍, 8+1 comments |
| [#81693](https://github.com/anthropics/claude-code/issues/81693) | **Opus 5 context window reported as 200k instead of 1M** | Statusline gauge saturates; `/compact` appears broken | 3 comments — UX/tooling confusion |
| [#82096](https://github.com/anthropics/claude-code/issues/82096) | **MCP OAuth `redirect_uri` hardcodes `localhost`** | Breaks IdPs allowlisting only `127.0.0.1`; security/compliance blocker | 4 👍, 1 comment |

---

## Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#82059](https://github.com/anthropics/claude-code/pull/82059) | **Fix: provision `poppler-utils` for PDF support in devcontainers** | Addresses silent `Read` tool PDF failures; unblocks containerized workflows | Open |
| [#80294](https://github.com/anthropics/claude-code/pull/80294) | **Docs: fix broken npm link via archive.org** | Maintenance; restores link to `@anthropic-ai/claude-code` package page | Open |
| [#77709](https://github.com/anthropics/claude-code/pull/77709) | **Add settings example: official marketplace only** | Implements docs request #77713; shows `strictKnownMarketplaces` config | Open |

*Only 3 PRs updated in 24h — light contribution window.*

---

## Feature Request Trends (from open issues)

1. **Cross-device session continuity** ([#61849](https://github.com/anthropics/claude-code/issues/61849)) — sync sessions across CLI, Desktop, VS Code, mobile
2. **Configurable agent view** ([#74139](https://github.com/anthropics/claude-code/issues/74139)) — project scoping, group by repo/worktree, statusline-style settings surface
3. **MCP session identification** ([#41836](https://github.com/anthropics/claude-code/issues/41836)) — standardize conversation ID propagation to HTTP MCP servers
4. **Semantic marks for assistant boundaries** ([#82146](https://github.com/anthropics/claude-code/issues/82146)) — enable collapsing superseded drafts, Stop-hook verdicts
5. **Plugin cache hygiene** ([#82145](https://github.com/anthropics/claude-code/issues/82145)) — reap orphaned `.in_use` leases from dead PIDs

---

## Developer Pain Points (Recurring Themes)

| Area | Pain Point | Representative Issues |
|------|------------|----------------------|
| **Auth & Entitlements** | Plan mismatches (Max/Pro), OAuth loops, token-type discrimination (`setup-token` vs interactive) | #38335, #29449, #77966, #79597, #81350, #82008 |
| **Windows/MSIX Stability** | Code Integrity Guard blocks vendor-signed `vk_swiftshader.dll`; GPU process kills; Repair loops | #80999, #81341 |
| **Session Persistence** | Lost sessions on logout/restart; no cross-device sync; no recovery UI | #26452, #61849 |
| **MCP Integration Gaps** | No session ID on HTTP MCP; `redirect_uri` hardcoded to `localhost` | #41836, #82096 |
| **Model/Context Reporting** | Incorrect context window sizes (Opus 5 → 200k); statusline gauge saturation | #81693, #81068 |
| **Auto-mode Permissions** | Classifier emits bypass-coaching in denials; false positives on authorized ops | #74301 |
| **VS Code Extension Hooks** | `SessionStart` hook outputs (`systemMessage`, `statusMessage`) never rendered | #76736 |
| **Plugin Cache Leaks** | Orphaned versions pinned by dead-process leases; 14-day cleanup never fires | #82145 |

---

*Digest generated from `anthropics/claude-code` GitHub activity (issues/PRs updated 2026-07-28 → 2026-07-29). Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-29

## 1. Today's Highlights

Codex v0.146.0 ships with **named sessions**, **pinned threads**, and **side-conversation switching** — a major UX upgrade for multi-tasking workflows. The release also introduces **Agent Plugin manifests**, workspace plugin publishing, and expanded marketplace support for Amazon Bedrock and Claude Code. Meanwhile, the Windows desktop app faces a critical regression (v26.721.4979) where app-server disconnects trigger full app termination under concurrent load, and the Linux desktop app request (#11023) remains the most-upvoted open issue at 864 👍.

## 2. Releases

### `rust-v0.146.0` (Stable)
- **Named sessions**: `/new` and `/clear` now accept session names; threads can be pinned and switched without closing ([#34605](https://github.com/openai/codex/issues/34605), [#34840](https://github.com/openai/codex/issues/34840), [#35011](https://github.com/openai/codex/issues/35011))
- **Agent Plugins**: Manifest support, workspace plugin publishing, and new marketplace integrations for **Amazon Bedrock** and **Claude Code**
- **rusty-v8 v150.4.0** bundled (V8 15.0.245.2)

### `rust-v0.146.0-alpha.14`
- Pre-release validation for the above changes

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Type | Why It Matters | Community Reaction |
|-------|------|----------------|-------------------|
| [#11023](https://github.com/openai/codex/issues/11023) **Linux Desktop App** | Enhancement | #1 most-requested feature; macOS power issues drive users to Linux | 864 👍, 190 comments — sustained since Feb |
| [#31814](https://github.com/openai/codex/issues/31814) **GPT-5.6 Sol: Subagent Model Lock-in** | Bug (CLI, subagent, config) | MultiAgent V2 forces all subagents to Sol; model overrides ignored | 163 👍, 99 comments — **CLOSED** but reveals architecture constraint |
| [#32031](https://github.com/openai/codex/issues/32031) **Multi-Agent V2: Hidden Model Overrides** | Bug (CLI, app, subagent) | Subagent model selection undiscoverable; natural override calls fail | 16 👍, 8 comments — critical UX regression |
| [#35619](https://github.com/openai/codex/issues/35619) **Windows: Rollout JSONL Deletion Orphans 934 Threads** | Bug (Windows, sandbox, session) | App-server process transition deletes session data; massive data loss risk | 9 comments, new (Jul 27) — high severity |
| [#35782](https://github.com/openai/codex/issues/35782) **Windows 26.721.4979: App-Server Disconnect → Full App Termination** | Bug (Windows, app-server) | Concurrent tasks trigger crash loop; interrupts all active work | 3 comments, new (Jul 28) — **blocking for Windows users** |
| [#33008](https://github.com/openai/codex/issues/33008) **@-Mention Injects Entire Chat → Renderer Freeze** | Bug (context, app, session) | Referencing a chat serializes full history as one message; permanent freeze + compact deadlock | 5 comments — architectural flaw in context injection |
| [#28531](https://github.com/openai/codex/issues/28531) **Windows: Image-Heavy Sessions Crash Electron Main Process** | Bug (Windows, session, performance) | Base64 images embedded in JSONL cause OOM/crash on load | 2 👍, 6 comments — scalability limit |
| [#32587](https://github.com/openai/codex/issues/32587) **Tool-Backed Subagents Silently Inherit Sol Ultra** | Bug (app, subagent) | Custom agent model settings ignored; subagents default to Sol Ultra | 3 👍, 4 comments — silent config override |
| [#35847](https://github.com/openai/codex/issues/35847) **App-Server Turn Never Finalizes (300s Timeout → Retry Loop)** | Bug (subagent, app-server) | Completed turns not marked done; caller times out and retries entire turn | 4 comments, new (Jul 28) — reliability issue |
| [#19504](https://github.com/openai/codex/issues/19504) **Full RTL Support for Arabic/Hebrew** | Enhancement (app) | Text alignment, punctuation, reading direction broken for RTL languages | 19 👍, 22 comments — accessibility gap |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Description | Impact |
|----|--------|-------------|--------|
| [#35859](https://github.com/openai/codex/pull/35859) | **CLOSED** | Expose plugin installation timestamps in app-server summaries (`installedAt` Unix timestamp) | Plugin lifecycle observability |
| [#35857](https://github.com/openai/codex/pull/35857) | **CLOSED** | Add Bazel unit test targets for Rust binaries (`<binary>-bin-unit-tests`) | CI/CD coverage for binary crates |
| [#35856](https://github.com/openai/codex/pull/35856) | **CLOSED** | Resolve imported connectors by MCP server name (not UUID) | Session portability across environments |
| [#35854](https://github.com/openai/codex/pull/35854) | **CLOSED** | Box app-server event payloads (`ServerNotification`, `ServerRequest` behind `Box`) | Memory efficiency for large event streams |
| [#35852](https://github.com/openai/codex/pull/35852) | **OPEN** | Migrate `codex-protocol` to shared HTTP types (`codex-http-client::HttpError`, `http::StatusCode`) | Dependency consolidation, removes `reqwest` from protocol crate |
| [#35851](https://github.com/openai/codex/pull/35851) | **CLOSED** | Normalize Windows namespace paths in `file:` URIs (`\\?\D:\` → canonical) | Fixes Windows path handling bugs (related to #30649) |
| [#35850](https://github.com/openai/codex/pull/35850) | **CLOSED** | Preserve foreign paths in background terminal listings | Cross-platform terminal session restore |
| [#35845](https://github.com/openai/codex/pull/35845) | **CLOSED** | Support plaintext collaboration tool messages (preserve `encrypted_function_args`) | Enables unencrypted agent-to-agent communication |
| [#35843](https://github.com/openai/codex/pull/35843) | **CLOSED** | Tie remote exec servers to parent stdin (`--exit-on-stdin-close`) | Clean shutdown for remote execution |
| [#35831](https://github.com/openai/codex/pull/35831) | **CLOSED** | Update `rusty_v8` to 150.4.0 (V8 15.0.245.2) | Security/performance updates, LLVM sync |

## 5. Feature Request Trends

From the 50 issues updated in 24h, the strongest demand signals are:

1. **Multi-Session / Multi-Chat Workflows** — #11023 (Linux app), #13036 (multiple chats), #27207 (archived chats access), #24534 (custom storage paths). Users treat Codex as a **project workspace manager**, not a single-thread chat.

2. **Subagent Model Control** — #31814, #32031, #32587, #32283. The MultiAgent V2 rollout removed visibility/control over subagent model selection; developers want explicit per-agent model config and UI exposure.

3. **Windows Parity & Stability** — #35619, #35782, #33561, #30649, #28531, #27453. Windows desktop app has **data loss**, **crashes**, **lag**, and **path handling** regressions in recent builds.

4. **Session Persistence & Portability** — #24534 (custom paths), #27207 (archive access), #35619 (orphaned threads), #24648 (thread listing filters). Sessions are becoming long-lived assets.

5. **Accessibility & Internationalization** — #19504 (RTL), plus Unicode rendering in general. Non-Latin script support is a hard blocker for global adoption.

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **App-server instability on Windows** | #35782 (full app termination), #35619 (934 threads orphaned), #35847 (turn finalization timeout) | 3 critical bugs in 48h |
| **Subagent configuration opacity** | #31814 (forced Sol), #32031 (hidden overrides), #32587 (silent Ultra inherit), #32283 (UI hides model) | 4 issues, 190+ comments combined |
| **Session data loss / corruption** | #35619 (JSONL deletion), #27453 (chats disappear after update), #24648 (thread listing filter bug) | Recurring across platforms |
| **Context injection pathologies** | #33008 (@-mention freezes renderer), #35528 (incomplete residual fidelity), #30375 (long-conv slowdown) | Architectural — affects all long sessions |
| **Mobile/Remote workflow gaps** | #23078 (re-pairing broken), #21816 (local browser in remote), #34099 (USB disconnects) | Remote development is a second-class experience |
| **Resource exhaustion with media** | #28531 (base64 images OOM), #30375 (image use → progressive slowdown) | No streaming/offload for large payloads |

---

**Next Digest**: 2026-07-30 — Watch for v0.146.1 hotfix targeting Windows app-server crashes and MultiAgent V2 subagent model controls.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-29

## Today's Highlights
The project shipped three releases in 24 hours: stable **v0.53.0**, preview **v0.54.0-preview.0**, and nightly **v0.55.0-nightly**. The stable release fixes a critical A2A protocol bug (grouping cancelled tool responses) and introduces the Caretaker triage orchestrator. Meanwhile, the PR pipeline is hardening infrastructure — SSRF mitigation, macOS sandbox fallback, OAuth token refresh fixes, and CI stability improvements — while the issue backlog surfaces persistent agent reliability problems (subagent hangs, turn-limit misreporting, shell stalls).

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.53.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0)** | Stable | • `fix(core,a2a)`: group cancelled tool responses & coalesce consecutive roles to prevent `400 Bad Request` ([#28407](https://github.com/google-gemini/gemini-cli/pull/28407))<br>• `feat(caretaker-triage)`: LLM triage orchestrator + container build ([#28407](https://github.com/google-gemini/gemini-cli/pull/28407)) |
| **[v0.54.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-preview.0)** | Preview | • Changelogs for v0.53.0 & v0.52.0<br>• Version bump to `0.54.0-nightly.20260722.gf743ab5` |
| **[v0.55.0-nightly.20260729.g3499c84f7](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260729.g3499c84f7)** | Nightly | • `feat(pr-generator-db)`: Firestore concurrency dual-locking & test ingestion utilities ([#28432](https://github.com/google-gemini/gemini-cli/pull/28432))<br>• Automated version bump from prior nightly |

---

## Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; breaks trust in autonomous workflows | 12 comments, 2👍 — P1, needs retest |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely | Renders subagent delegation unusable; users disable agents entirely | 8 comments, 8👍 — P1, high user pain |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** Robust component-level evaluations (EPIC) | 76 behavioral evals exist but lack reliability; blocks quality gate | 7 comments — P1, eval infra |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads/search/mapping | Potential to reduce turns & token noise via precise code navigation | 7 comments, 1👍 — P2, strategic |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Model rarely invokes skills/sub-agents autonomously | Undermines extensibility; users must explicitly prompt for tools | 6 comments — P2 |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory retries low-signal sessions endlessly | Wastes compute & clutters inbox; no backoff/quarantine | 5 comments — P2 |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell commands stall at “Waiting input” after completion | False hang UI; breaks flow for simple commands | 4 comments, 3👍 — P1, core |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser agent lacks session takeover/lock recovery | Persistent profile locks cause hard failures; no graceful fallback | 4 comments — P3 |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | Platform gap for Linux/Wayland users | 4 comments, 1👍 — P1, agent/browser |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Auto Memory redaction happens post-model-context | Secrets may leak into model context; logging exposure | 4 comments — P2, security |

---

## Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| **[#28557](https://github.com/google-gemini/gemini-cli/pull/28557)** | Open | **Security**: Fix SSRF in `web-fetch.ts` via async DNS resolution (`isPrivateIpAsync`) — blocks metadata-service access |
| **[#28551](https://github.com/google-gemini/gemini-cli/pull/28551)** | Open | **macOS Sandbox**: Fallback to embedded Seatbelt profiles if runfiles missing — unblocks `-s` flag on gMac |
| **[#28481](https://github.com/google-gemini/gemini-cli/pull/28481)** | Open | **MCP OAuth**: Refresh tokens using stored client ID — fixes re-auth loop for dynamic registration |
| **[#28566](https://github.com/google-gemini/gemini-cli/pull/28566)** | Open | **Core/CLI**: Propagate `InvalidStreamError` details to UI — enables actionable hints (e.g., `/compress`) |
| **[#28565](https://github.com/google-gemini/gemini-cli/pull/28565)** | Closed | **Core**: Skip merged `function-response` turns when finding active loop — prevents unrecoverable `400` on skill activation |
| **[#28432](https://github.com/google-gemini/gemini-cli/pull/28432)** | Closed | **PR Generator DB**: Firestore dual-locking (optimistic + pessimistic) + test ingestion utilities |
| **[#28434](https://github.com/google-gemini/gemini-cli/pull/28434)** | Closed | **PR Generator Agent**: Antigravity runner + prompt templates for SSR code-gen pipeline |
| **[#28526](https://github.com/google-gemini/gemini-cli/pull/28526)** | Open | **VS Code Companion**: Fix disposable leaks (`gemini.diff.accept`, `onDidChangeWorkspaceFolders`) |
| **[#28576](https://github.com/google-gemini/gemini-cli/pull/28576)** | Open | **CI Perf**: Vitest cache warmup → ~15% faster startup on self-hosted runners |
| **[#28577](https://github.com/google-gemini/gemini-cli/pull/28577)** | Open | **CI Stability**: Pre-flight env checks before e2e tests — reduces flakes on self-hosted |
| **[#28570](https://github.com/google-gemini/gemini-cli/pull/28570)** | Closed | **Dep Sec**: `js-yaml` 4.1.1 → 4.3.0 (security fixes) |

---

## Feature Request Trends
1. **Agent Observability & Debugging** — Subagent trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug reports including subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), eval visibility ([#23166](https://github.com/google-gemini/gemini-cli/issues/23166)).
2. **AST/Structural Code Intelligence** — Precision reads, symbol search, codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to cut turns & tokens.
3. **Memory System Hardening** — Deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), inbox quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), backoff for low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
4. **Browser Agent Resilience** — Session takeover, lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), settings.json override respect ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
5. **Self-Awareness & UX Polish** — Accurate CLI flag/hotkey knowledge ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), terminal resize flicker fix ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), external editor buffer corruption ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)).

---

## Developer Pain Points (Recurring Frustrations)
- **Agent Reliability**: Generalist/subagent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), silent MAX_TURNS misreporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), unwanted auto-delegation ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
- **Shell/Process UX**: “Waiting input” ghost stalls ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), tmp script litter ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), destructive git/DB commands without guardrails ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Tool Scaling Limits**: 400-tool ceiling triggers `400` errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)); no smart scoping.
- **Memory/Privacy Anxiety**: Secrets in model context before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), inbox noise from invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Platform Gaps**: Wayland browser failure ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), macOS sandbox asset loading ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551)), VS Code extension leaks ([#28526](https://github.com/google-gemini/gemini-cli/pull/28526)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-07-29

## Today's Highlights
The v1.0.76-1 release ships quality-of-life improvements—voice-mode media pausing, scheduled-prompt counters, AI-credit limit prediction, and configurable timed refreshes—while the community surfaces a critical regression in that same build (#4285) causing silent exits for most log levels. Windows interactive-mode stability (#4159, #4165) and session-resume reliability (#4165, #4282, #4290) remain top friction points.

---

## Releases
### v1.0.76-1
- **Voice mode** now pauses system media before recording and resumes it afterward (macOS/Windows).  
- Footer shows **active scheduled-prompt count**.  
- New **`/limits predict`** command suggests a session AI-credit limit based on similar sessions.  
- Added **configurable timed refreshes** for long-running sessions.  
[Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.76-1)

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4285](https://github.com/github/copilot-cli/issues/4285) | **1.0.76-1: silent exit 1 at session startup for log levels `none`/`error`/`warning`/`info`/`debug`** | Blocks all users who don’t run `log: all` or `default`; zero output makes debugging impossible. | New, critical regression in today’s release. |
| [#4016](https://github.com/github/copilot-cli/issues/4016) | **BYOK (COPILOT_PROVIDER_*) rejected in `--acp` mode** | Regresses fix from #3048/#3902; breaks custom-provider workflows in ACP. | 👍 4, 6 comments – closed but confirms regression pattern. |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | **`task_complete` tool unavailable after switching back to autopilot mode** | Regression of #1523; breaks agent handoff automation. | 👍 4, 3 comments. |
| [#4159](https://github.com/github/copilot-cli/issues/4159) | **Interactive mode turns blank after prompt in Windows Terminal** | Renders CLI unusable on Windows in interactive mode; `-p` works. | 👍 3, 3 comments. |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | **`copilot --resume` hangs at “Resuming session…” on Windows cold start** | Prevents session continuity on Windows; workaround exists but degrades UX. | 👍 1, 4 comments. |
| [#2734](https://github.com/github/copilot-cli/issues/2734) | **Feature Request: Auto-update plugins (all or per-plugin)** | Highest-voted open issue; manual plugin updates create friction & security lag. | 👍 9, 2 comments. |
| [#4286](https://github.com/github/copilot-cli/issues/4286) | **Streaming: `input_json_delta` buffered until complete → multi-minute silences** | Large tool args (e.g., big file writes) freeze UI for minutes despite healthy connection. | New, impacts perceived performance. |
| [#4269](https://github.com/github/copilot-cli/issues/4269) | **Empty model turn persisted as `content: null` permanently bricks session** | Corrupts session history; strict OpenAI endpoints reject subsequent requests. | New, data-integrity risk. |
| [#4283](https://github.com/github/copilot-cli/issues/4283) | **Server-managed `enabledPlugins` doesn’t persist auto-installed plugin enablement** | Enterprise plugin rollout broken; hooks not detected on restart. | New, blocks managed environments. |
| [#4271](https://github.com/github/copilot-cli/issues/4271) | **`glob` tool false-negatives on multi-segment patterns without `**/` prefix** | Breaks common glob patterns (`2026/07/*.md`); forces `**/` workaround. | New, core tooling bug. |

---

## Key PR Progress
| PR | Author | Summary |
|----|--------|---------|
| [#4100](https://github.com/github/copilot-cli/pull/4100) | huangyoufeng76-debug | **Security** (安全性) – details not disclosed; likely hardening or dependency update. |

---

## Feature Request Trends
1. **Plugin lifecycle automation** – Auto-update (#2734), server-managed enablement persistence (#4283).  
2. **ACP ↔ Interactive parity** – Expose `contextTier` in ACP session config (#4275), BYOK support in ACP (#4016).  
3. **Model flexibility** – Per-session model inheritance for subagents (#4287), policy-gated model visibility (#4272).  
4. **Scheduled-prompt robustness** – Queue preservation when scheduled prompts fire (#4078).  
5. **Noise reduction** – Suppress update nags when auto-update is enabled (#4284).

---

## Developer Pain Points
- **Windows interactive instability**: Blank UI after prompt (#4159), resume hangs (#4165), MCP stdio spawn failures (#3576).  
- **Session resume/reliability**: Model-name prefix mismatches (#4282), empty-turn bricking (#4269), missing exit summaries (#4268).  
- **Regression cadence**: 1.0.74–1.0.76-1 introduce silent exits (#4285), view-tool breaks (#4202), autopilot tool loss (#4161).  
- **Authentication fragmentation**: BYOK works in `-p` but not `--acp` (#4016), keychain partition conflicts on macOS (#4273).  
- **Tooling gaps**: `glob` pattern regression (#4271), `view` path resolution (#4202), streaming buffer latency (#4286).  
- **Enterprise friction**: Policy-blocked MCP servers (#3934), plugin enablement not persisted (#4283), model gating (#4272).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-29

## Today's Highlights
The project shows active maintenance with **7 PRs updated** and **5 issues refreshed** in the last 24 hours. Key work includes fixing MCP server log pollution in the TUI, adding notification hooks for approval requests, and correcting model display name handling. A critical Windows crash in `/plugins` with 2+ plugins and an OAuth regression for free-tier users with promotional credits are the top user-facing bugs.

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (5 updated in last 24h)

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| **#1783** [Feature] Add `/delete` command to remove sessions | OPEN | Users must manually delete `~/.kimi/sessions/` folders; no CLI-native way to clean up old/sensitive sessions. | 5 comments, 1 👍 — recurring management pain point |
| **#708** [Bug] Agent committed to git without explicit permission | CLOSED | Safety violation: AI executed `git commit` despite user not granting approval. Windows/WSL environment. | 2 comments — highlights approval flow gaps |
| **#2553** [Bug] `/plugins` crashes with TypeError when ≥2 plugins installed (v0.29.0, Windows) | OPEN | **Blocker for plugin users on Windows** — CLI crashes on plugin management screen. Root cause: `undefined.value` access. | 1 comment — regression in v0.29.0 |
| **#2566** [Bug] OAuth rejects invited free users with active promotional coding credits | OPEN | **Auth regression** — free-tier users with valid promo credits cannot log in via OAuth. Affects onboarding. | 0 comments — newly filed, high impact |
| **#732** [Enhancement] Document `llamacpp` local backend config | CLOSED | Developer docs lack concrete example for local LLM backend configuration. | 1 👍 — docs gap for self-hosted models |

---

## Key PR Progress (7 updated in last 24h)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| **#1637** fix: route MCP server log notifications to loguru instead of TUI | CLOSED | Stops MCP servers (e.g. SearXNG) from spamming Rich logs into the TUI on every request. | UX: cleaner terminal output |
| **#2284** fix: fire notification hooks for approvals | CLOSED | Emits `Notification` hooks when approval requests are created; includes request details in payload. Fixes #2281. | Extensibility: enables custom approval workflows |
| **#2174** fix: respect model `display_name` for kimi-for-coding | CLOSED | Removes hardcoded "kimi-for-coding" override; now uses backend-provided `display_name` (e.g. "Kimi-k2.6"). | Correctness: accurate model identification |
| **#2176** fix(hooks): extract text from `ContentPart` for `UserPromptSubmit` hook | OPEN | Handles `list[ContentPart]` input (default) instead of only `string`; fixes empty `prompt`/`matcher_value` in hooks. | Reliability: hooks now receive actual user input |
| **#2507** fix(acp): signal `QuestionNotSupported` instead of resolving empty answers | OPEN | ACP server now properly signals unsupported questions vs. user dismissal; avoids ambiguous empty dict resolution. | Protocol compliance: clearer ACP semantics |
| **#2567** feat(usage): show absolute reset datetime in `/usage` panel | OPEN | Displays absolute local reset timestamp (from API `reset_at`) alongside relative "resets in Xd". | UX: precise quota planning |
| **#2539** fix(mcp): normalize tools for Moonshot API | OPEN | Generates stable Moonshot-compatible aliases for MCP tool names; adds missing root `object` type; fixes `anyOf`/required schema shape. | Compatibility: reliable MCP→Moonshot tool bridging |

---

## Feature Request Trends
1. **Session lifecycle management** — `/delete` command (#1783) tops requests; users want CLI-native cleanup for disk space, privacy, and list hygiene.
2. **Local/self-hosted model support** — Docs gaps for `llamacpp` (#732) and likely other local backends indicate demand for air-gapped/offline usage.
3. **Hook/extensibility maturity** — Multiple PRs (#2176, #2284, #2507) show community building automation on approvals, prompts, and ACP questions.
4. **Usage transparency** — Absolute reset times (#2567) reflect desire for precise quota visibility over fuzzy relative strings.

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows-specific regressions** | `/plugins` crash (#2553), git safety bug on WSL (#708) | High — 2/5 recent issues |
| **OAuth/auth flow fragility** | Promo-credit users blocked (#2566) | Critical — blocks onboarding |
| **MCP log noise in TUI** | PR #1637 needed to redirect server logs | Medium — affects all MCP users |
| **Hook payloads incomplete** | `UserPromptSubmit` empty for `ContentPart` (#2176) | Medium — breaks custom tooling |
| **Session accumulation** | No delete command; manual filesystem cleanup (#1783) | Recurring — 1 👍, 5 comments |

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — Issues/PRs updated 2026-07-28 to 2026-07-29 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-29

---

## 1. Today's Highlights

Two patch releases shipped: **v1.18.9** restores legacy MCP SDK compatibility and fixes a Solid cleanup crash in the desktop app, while **v1.18.8** improves MCP/OAuth compatibility and reconnection logic. Community focus remains on **OpenAI-compatible model auto-discovery** (#6231, 193 👍), **Go subscription billing/access issues** (#34884, #37790, #37056), and **TUI stability on Windows ARM64** (#19130, #38520). A critical unbounded DB growth bug (#33356, 13 GB+) and tool-output spill cleanup (#29694, 63 GB) signal pressing storage concerns for long-running instances.

---

## 2. Releases

### v1.18.9 (2026-07-29)
- **Core**: Restored compatibility with legacy MCP SDK clients
- **Desktop**: Fixed Solid cleanup crash breaking navigation; fixed home session loading (no longer suspends full page)

### v1.18.8 (2026-07-29)
- **Core**: Improved compatibility with newer MCP servers and OAuth flows; reconnects MCP servers after expired SDK sessions (including concurrent requests); honors configured MCP OAuth callback ports in `mcp debug`; stops sending deprecated sampling defaults

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | Auto-discover models from OpenAI-compatible provider endpoints | Eliminates manual model listing for LM Studio, Ollama, llama.cpp; high friction for local provider users | 193 👍, 33 comments — highest engagement |
| [#19604](https://github.com/anomalyco/opencode/issues/19604) | Write tool fails silently on large files (~1000+ lines) | High-severity regression blocking large file edits; no error output | 13 👍, 20 comments |
| [#34884](https://github.com/anomalyco/opencode/issues/34884) | Go returns "Provider rate limit exceeded" despite 0% usage | Paid Go tier unusable; free models work — billing/auth mismatch | 6 👍, 19 comments |
| [#19130](https://github.com/anomalyco/opencode/issues/19130) | Windows ARM64: OpenTUI fails with bun:ffi dlopen TinyCC error | Blocks TUI on native ARM64 Windows; CLI works but interactive mode broken | 10 👍, 14 comments |
| [#33356](https://github.com/anomalyco/opencode/issues/33356) | Unbounded `event` table growth → 13 GB+ DB (no retention/compaction) | Disk exhaustion on long-lived instances; event-sourcing lacks pruning | 2 👍, 12 comments |
| [#37790](https://github.com/anomalyco/opencode/issues/37790) | Go subscription paid but workspace shows "Insufficient balance" | Payment processed via Stripe but access not granted; billing sync failure | 0 👍, 12 comments |
| [#7134](https://github.com/anomalyco/opencode/issues/7134) | Cannot copy terminal output on macOS (Cmd+C intercepted) | Basic UX gap in integrated terminal; macOS users affected | 1 👍, 12 comments |
| [#38801](https://github.com/anomalyco/opencode/issues/38801) | "exiting loop" message — TUI unusable across OpenAI APIs | Recurring crash loop prevents any productive session; broad provider impact | 0 👍, 11 comments |
| [#37056](https://github.com/anomalyco/opencode/issues/37056) | Go provider returns 400/401/500 for subscribed models | High-frequency errors on large requests (300 KB+); intermittent auth failures | 0 👍, 7 comments |
| [#29039](https://github.com/anomalyco/opencode/issues/29039) | macOS x64 baseline binary requires AVX2/FMA — crashes on Ivy Bridge | Excludes older but functional hardware; SIGILL on launch | 1 👍, 6 comments |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|-----|------|---------|
| [#39423](https://github.com/anomalyco/opencode/pull/39423) | Feature | Hebrew (RTL) language support across all packages |
| [#39429](https://github.com/anomalyco/opencode/pull/39429) | Fix | Always show session tab strip when ≥1 real tab open (was hidden for single tab) |
| [#39428](https://github.com/anomalyco/opencode/pull/39428) | Feature | Unread tab glow — stationary accent behind inactive tab number |
| [#39418](https://github.com/anomalyco/opencode/pull/39418) | Fix | Restore visible tab pulse for running sessions across themes |
| [#39300](https://github.com/anomalyco/opencode/pull/39300) | Fix | Preserve agent picker visibility for existing users; hide only for new installs |
| [#39425](https://github.com/anomalyco/opencode/pull/39425) | Fix | ACP `usage_update`: respect provider currency instead of hardcoding USD |
| [#39413](https://github.com/anomalyco/opencode/pull/39413) | Fix | Retry HTTP 408 request timeouts (was treated as fatal) |
| [#39422](https://github.com/anomalyco/opencode/pull/39422) | Refactor | Remove dead assistant-message rendering path in V2 TUI session route |
| [#38045](https://github.com/anomalyco/opencode/pull/38045) | Fix | Quote shell commands with `shell-quote` (fixes JSON.stringify in eval) |
| [#39416](https://github.com/anomalyco/opencode/pull/39416) | Fix | Remove dummy session placeholder causing `--continue` error (closes #34144, #28486, #29262) |

---

## 5. Feature Request Trends

1. **Model Management Automation** — Auto-discovery for OpenAI-compatible endpoints (#6231), OpenRouter shortcuts (#1038), `--model free` random zero-cost picker (#34794)
2. **Agent/Subagent UX** — Task tool visibility (#39086), image passthrough to subagents (#39417), auto-approve mode for permissions (#37564, #39412)
3. **Cost Visibility** — Session cost including sub-agents (#4925), provider-currency-aware usage reporting (#39425)
4. **TUI/UX Polish** — Tab UX (unread glow, pulse, always-visible strip), copy terminal output on macOS (#7134), update preflight animation fixes (#39045)
5. **Internationalization** — Hebrew RTL (#39423), Italian typo fixes (#39405, #39424)

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **Go Subscription & Billing** | Rate limit errors despite 0% usage; paid but "insufficient balance"; 400/401/500 on subscribed models; abnormal qwen3.7-max deductions | #34884, #37790, #37056, #36399, #39406 |
| **Windows ARM64 TUI** | `bun:ffi dlopen` unavailable; TinyCC error; CLI works but TUI fails | #19130, #38520 |
| **Storage Leaks** | `opencode.db` → 13 GB+ (no event table compaction); tool-output spill files → 63 GB (no cleanup) | #33356, #29694 |
| **Large File Handling** | Write tool silent failure at ~1000+ lines; ripgrep unbounded execution on large workspaces | #19604, #39298 |
| **MCP Stability** | Legacy SDK compat broken; unreachable local MCP hides all file commands; OAuth callback port ignored | v1.18.9, v1.18.8, #36288 |
| **Session Crashes** | "exiting loop" TUI crash; `--continue` dummy placeholder error; home dir snapshot hangs | #38801, #39416, #32981 |

---

*Data sourced from `github.com/anomalyco/opencode` — releases, issues, and PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-29

## 1. Today's Highlights
The Pi ecosystem saw significant maintenance momentum today with **10+ PRs merged** addressing critical bugs in extension loading, proxy handling, compaction reliability, and provider support. The community is actively resolving WSL path handling, auto-compaction deadlocks, and symlink-related extension failures. Architecture Decision Records (47 ADRs) were published, documenting the project's technical evolution.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Engagement)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#7064](https://github.com/earendil-works/pi/issues/7064)** WSL absolute Windows paths mishandled | Blocks core file tools (`read`/`write`/`edit`) on WSL2, forcing CLI fallbacks. High impact for Windows developers. | 9 comments, 1 👍 — Active reproduction discussion |
| **[#6879](https://github.com/earendil-works/pi/issues/6879)** Auto-compaction never triggers past 100% context | Sessions exceed context window (373k tokens) before compaction kicks in, causing API rejections. | 5 comments, 3 👍 — Core reliability concern |
| **[#7020](https://github.com/earendil-works/pi/issues/7020)** Pi doesn't continue after compaction | Long-running "coordinator" sessions stall post-compaction, breaking autonomous workflows. | 5 comments, 2 👍 — In progress |
| **[#7195](https://github.com/earendil-works/pi/issues/7195)** Extensions don't load if directory is a symlink | Breaks dotfiles-driven extension management; common developer workflow. | 6 comments — **Closed** (fix in #7210) |
| **[#6747](https://github.com/earendil-works/pi/issues/6747)** API for enhancing agent message markdown | Enables extensions to render formulas/rich content without mutating LLM context. | 11 comments, 2 👍 — **In progress** (#7231) |
| **[#6922](https://github.com/earendil-works/pi/issues/6922)** Default llama.cpp model shows "No models available" | Blocks local model usage on startup; affects offline/privacy-focused users. | 7 comments, 13 👍 — **Closed** |
| **[#7194](https://github.com/earendil-works/pi/issues/7194)** Full re-render every 1s when tool card scrolls out of viewport | Causes excessive repaints in remote sandbox/PTY-forwarded sessions. | 5 comments — Performance regression |
| **[#7049](https://github.com/earendil-works/pi/issues/7049)** Upgrade Undici to 8.8.0 for correct HTTP proxy forwarding | `HTTP_PROXY` ignored in 8.5.0; breaks corporate/proxied environments. | 5 comments — **Fixed** in #7225 |
| **[#7248](https://github.com/earendil-works/pi/issues/7248)** Ctrl+V paste silently fails on Wayland | `readClipboardText()` is X11-only; affects modern Linux desktops (KDE Plasma 6, Wayland). | 3 comments — New, untriaged |
| **[#7187](https://github.com/earendil-works/pi/issues/7187)** Silent crash from inconsistent error handling/schema validation | Third-party package manifest typo kills all chat/scheduled sessions; no graceful degradation. | 3 comments — Production severity |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Type | Summary | Linked Issue |
|----|------|---------|--------------|
| **[#7247](https://github.com/earendil-works/pi/pull/7247)** / **[#7249](https://github.com/earendil-works/pi/pull/7249)** | Docs | **Architecture Decision Records published** — 47 ADRs + 6 TDRs covering provider abstraction, agent sessions, TUI engine, extensions, storage, infra. | — |
| **[#7225](https://github.com/earendil-works/pi/pull/7225)** | Fix | **Undici 8.5.0 → 8.8.0** — Restores `HTTP_PROXY`/`HTTPS_PROXY` support for plain HTTP targets. | #7049 |
| **[#7218](https://github.com/earendil-works/pi/pull/7218)** | Fix | **Preserve resource metadata after extension reloads** — Prevents skill/prompt/theme scopes collapsing to `[t]`. | #6968 |
| **[#7210](https://github.com/earendil-works/pi/pull/7210)** | Fix | **Clean up failed git extension installs** — Removes partial `~/.pi/agent/git/<>` directories on failure. | #7189 |
| **[#7230](https://github.com/earendil-works/pi/pull/7230)** | Feat | **Route Fireworks Kimi K3 via OpenAI-compatible API** — Adds `kimi-k3` and `kimi-k3-fast` to model generator. | #7199 |
| **[#7240](https://github.com/earendil-works/pi/pull/7240)** | Feat | **Add Apiário as built-in provider** — Brazilian AI aggregator (OpenAI/Anthropic/DeepSeek/Maritaca/Moonshot) at `api.apiario.dev/v1`. | #7242 |
| **[#7236](https://github.com/earendil-works/pi/pull/7236)** | Feat | **Pin chat input + mouse caret support** — Adds SGR mouse tracking, `Viewport` component for independent history scrolling. | — |
| **[#7243](https://github.com/earendil-works/pi/pull/7243)** | Fix | **TypeBox 1.1.38 → 1.3.7** — Fixes nullable array validation (`array[T] | null`); removes deprecated APIs (breaking for extensions). | #7003 |
| **[#7245](https://github.com/earendil-works/pi/pull/7245)** | Feat | **Inline images under tmux via sixel** — Removes blanket `TMUX` image disable; adds sixel backend detection. | — |
| **[#7174](https://github.com/earendil-works/pi/pull/7174)** | Fix | **Send `max_tokens` for Z.AI providers** — Fixes truncation of long reasoning turns (was using ignored `max_completion_tokens`). | #7143 |

## 5. Feature Request Trends
From the issue landscape, developers are consistently asking for:

1. **Provider/model agility** — Rapid addition of new models (Kimi K3, DeepSeek V4, Apiário, Anthropic Vertex) and OpenAI-compatible routing fixes.
2. **Extension system robustness** — Symlink support, failed-install cleanup, resource metadata preservation, and markdown enhancement APIs.
3. **TUI/rendering reliability** — Wayland clipboard, tmux image support, pinned input, viewport scrolling, and re-render optimization.
4. **Session resilience** — Compaction reliability, post-compaction continuation, temp-session cleanup (`--no-session`), and search indexing (SQLite FTS5 in #7163).
5. **Enterprise/proxy compatibility** — Undici proxy fixes, request ID headers for Anthropic (`x-client-request-id` in #7161), and structured error metadata (Bedrock in #7224).

## 6. Developer Pain Points
Recurring frustrations surfacing across issues:

| Pain Point | Frequency | Example Issues |
|------------|-----------|----------------|
| **WSL/Windows path translation** | High | #7064 (9 comments), tool fallback loops |
| **Compaction unreliability** | High | #6879 (373k tokens), #7020 (stall after compaction) |
| **Extension loading fragility** | Medium | #7195 (symlinks), #7189 (failed git installs poison dir), #6968 (scope collapse) |
| **Clipboard/Wayland incompatibility** | Medium | #7248 (Ctrl+V no-op), X11-only `readClipboardText` |
| **Silent crashes from schema/validation** | Medium | #7187 (manifest typo kills all sessions), #7003 (TypeBox nullable arrays) |
| **Proxy/corporate network gaps** | Medium | #7049 (Undici 8.5.0 ignores `HTTP_PROXY`), #7161 (missing `x-client-request-id`) |
| **Remote/PTY session rendering overhead** | Emerging | #7194 (1s full re-render), #6423 (UI freeze) |

---

*Data sourced from `earendil-works/pi` GitHub activity (issues/PRs updated 2026-07-28 to 2026-07-29).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-29

## 1. Today's Highlights
- **v0.21.1 stable release shipped** with GenAI telemetry alignment and no breaking changes.  
- **Autofix behavior tightened**: suggestions now defer after five change rounds to reduce noise.  
- **CI instability persists**: multiple E2E test failures across tool-control, file-system-interactive, and sandbox runs triggered auto-fix workflows.

## 2. Releases

### v0.21.1 (Stable)
- **feat(core)**: Align GenAI content telemetry fields ([#7667](https://github.com/QwenLM/qwen-code/pull/7667)) — standardizes telemetry payloads for observability.
- **No breaking changes** reported.
- Full changelog: [v0.21.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1)

### v0.21.0-nightly.20260729.0c0ca5fed
- **feat(autofix)**: Defer suggestions after five change rounds ([#7913](https://github.com/QwenLM/qwen-code/pull/7913)) — prevents autofix spam during iterative edits.

---

## 3. Hot Issues (Top 10 by Impact/Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7972](https://github.com/QwenLM/qwen-code/issues/7972) | **v0.21.1 crashes 3× on Windows** | Regression in fresh stable release; blocks adoption on win32. | 2 comments, P2, needs triage |
| [#7964](https://github.com/QwenLM/qwen-code/issues/7964) | **Terminal content unscrollable on Windows after 0.21.1** | UI regression affecting core terminal UX; screenshot attached. | 2 comments, P2, welcome-pr |
| [#7960](https://github.com/QwenLM/qwen-code/issues/7960) | **Compression side-query `maxOutputTokens` exceeds small context windows** | Causes `400 → COMPRESSION_FAILED_EMPTY_SUMMARY` on self-hosted models. | 2 comments, P2, token-management |
| [#7961](https://github.com/QwenLM/qwen-code/issues/7961) | **Main-turn token clamp under-counts CJK content** | Overflow risk for CJK-heavy prompts on constrained deployments. | 2 comments, P3, token-management |
| [#7940](https://github.com/QwenLM/qwen-code/issues/7940) | **`UserPromptSubmit.additionalContext` pollutes user-message JSONL** | System-injected content leaks into session transcripts, breaking resume fidelity. | 3 comments, P2, welcome-pr |
| [#7937](https://github.com/QwenLM/qwen-code/issues/7937) | **E2E failure: `canUseTool` callback with asyncGenerator** | CI flake in tool-control test; autofix in progress. | 3 comments, autofix/approved |
| [#7942](https://github.com/QwenLM/qwen-code/issues/7942) | **E2E failure: interactive read-then-write sequence** | File-system interactive test flaky; autofix in progress. | 3 comments, autofix/in-progress |
| [#7831](https://github.com/QwenLM/qwen-code/issues/7831) | **Repeated `ECONNRESET` on streaming >150k tokens** | Long-context sessions fail on OpenAI-compatible endpoints. | 3 comments, P2, model/long-context |
| [#7936](https://github.com/QwenLM/qwen-code/issues/7936) | **Encoding mojibake on Windows non-UTF-8 code pages** | Shell output garbled for non-ASCII (CP-866/GBK/Shift-JIS). | 2 comments, P2, platform/shell |
| [#7924](https://github.com/QwenLM/qwen-code/issues/7924) | **Fork agents resume with stale prompt/tool snapshots** | Background subagents capture outdated capabilities on resume. | 2 comments, P2, session-management |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Description |
|---|----|------|-------------|
| [#7970](https://github.com/QwenLM/qwen-code/pull/7970) | **fix(release)** | Skip `--notes-start-tag` when previous release diverges from target — prevents broken changelog anchors. |
| [#7967](https://github.com/QwenLM/qwen-code/pull/7967) | **refactor(core)** | Thread file descriptor through text-read helpers (stacked on #7947) — eliminates forked read paths for large files. |
| [#7946](https://github.com/QwenLM/qwen-code/pull/7946) | **fix(core)** | Serve now allows bounded reads (`{line, limit}`) for text files >256 KiB — fixes false `file_too_large` rejections. |
| [#7911](https://github.com/QwenLM/qwen-code/pull/7911) | **feat(core)** | Bound image reads: return canonical JPEG overview + dimensions + zoom hint — enables reliable zoom UX. |
| [#7877](https://github.com/QwenLM/qwen-code/pull/7877) | **feat(external-context)** | Auto Recall profile for `UserPromptSubmit` hook — opt-in deterministic prompt recall via admin-installed hook. |
| [#7862](https://github.com/QwenLM/qwen-code/pull/7862) | **feat(channels)** | GitLab polling channel adapter — mirrors GitHub adapter architecture using `@gitbeaker/rest`. |
| [#7846](https://github.com/QwenLM/qwen-code/pull/7846) | **feat(skills)** | Auto-skill curator: tracks usage, marks stale after 30 days, graduates complete packages — lifecycle mgmt for generated skills. |
| [#7968](https://github.com/QwenLM/qwen-code/pull/7968) | **feat(hooks)** | `security.allowPrivateNetworkHooks` bypasses SSRF guard for trusted scopes — unblocks platform-managed HTTP hooks. |
| [#7929](https://github.com/QwenLM/qwen-code/pull/7929) | **feat(web-shell)** | Contextual task panels: chat header, env/subagent/monitor context panel, tabbed extension area (reviews, tasks). |
| [#7531](https://github.com/QwenLM/qwen-code/pull/7531) | **fix(core)** | Close `git clean`/`checkout` force-flag gaps in destructive-git guard — blocks previously missed variants. |

---

## 5. Feature Request Trends

| Direction | Evidence (Issues/PRs) |
|-----------|------------------------|
| **Terminal UX overhaul** | Dynamic Workflow execution console ([#7887](https://github.com/QwenLM/qwen-code/issues/7887), [#7890](https://github.com/QwenLM/qwen-code/issues/7890)), web-shell contextual panels ([#7929](https://github.com/QwenLM/qwen-code/pull/7929)) |
| **Session fidelity & portability** | File attribution per session ([#7966](https://github.com/QwenLM/qwen-code/issues/7966)), additionalContext pollution fix ([#7940](https://github.com/QwenLM/qwen-code/issues/7940)), fork agent snapshot staleness ([#7924](https://github.com/QwenLM/qwen-code/issues/7924)) |
| **Multi-platform encoding robustness** | Windows OEM code page mojibake ([#7936](https://github.com/QwenLM/qwen-code/issues/7936)), terminal scroll regression ([#7964](https://github.com/QwenLM/qwen-code/issues/7964)) |
| **Long-context reliability** | Compression token clamping ([#7960](https://github.com/QwenLM/qwen-code/issues/7960), [#7961](https://github.com/QwenLM/qwen-code/issues/7961)), ECONNRESET at 150k+ tokens ([#7831](https://github.com/QwenLM/qwen-code/issues/7831)) |
| **Channel ecosystem expansion** | GitLab adapter ([#7862](https://github.com/QwenLM/qwen-code/pull/7862)), DingTalk image delivery ([#7687](https://github.com/QwenLM/qwen-code/issues/7687)), GitHub dispatch by notification reason ([#7807](https://github.com/QwenLM/qwen-code/issues/7807)) |
| **Skill/agent lifecycle automation** | Auto-skill curator ([#7846](https://github.com/QwenLM/qwen-code/pull/7846)), scheduled repo-hygiene skill ([#7383](https://github.com/QwenLM/qwen-code/issues/7383)) |

---

## 6. Developer Pain Points (Recurring Themes)

1. **Windows terminal regressions** — v0.21.1 introduced scroll breakage ([#7964](https://github.com/QwenLM/qwen-code/issues/7964)) and crashes ([#7972](https://github.com/QwenLM/qwen-code/issues/7972)); encoding issues persist on non-UTF-8 code pages ([#7936](https://github.com/QwenLM/qwen-code/issues/7936)).

2. **Session transcript integrity** — System-injected `additionalContext` pollutes user-message JSONL ([#7940](https://github.com/QwenLM/qwen-code/issues/7940)); fork agents resume with stale capability snapshots ([#7924](https://github.com/QwenLM/qwen-code/issues/7924)); no native way to attribute files to sessions ([#7966](https://github.com/QwenLM/qwen-code/issues/7966)).

3. **Token management on constrained deployments** — Fixed `maxOutputTokens` in compression side-queries breaks small-window models ([#7960](https://github.com/QwenLM/qwen-code/issues/7960)); CJK under-counting causes context overflow ([#7961](https://github.com/QwenLM/qwen-code/issues/7961)); streaming fails at ~150k tokens ([#7831](https://github.com/QwenLM/qwen-code/issues/7831)).

4. **CI/E2E flakiness** — Multiple main-branch failures in tool-control, file-system-interactive, and sandbox tests ([#7937](https://github.com/QwenLM/qwen-code/issues/7937), [#7942](https://github.com/QwenLM/qwen-code/issues/7942), [#7901](https://github.com/QwenLM/qwen-code/issues/7901), [#7878](https://github.com/QwenLM/qwen-code/issues/7878)); autofix workflows actively consuming maintainer bandwidth.

5. **Safe-mode overreach** — `--safe-mode` drops ACP `session/new` `mcpServers` alongside local settings ([#7819](https://github.com/QwenLM/qwen-code/issues/7819)), breaking platform-managed MCP configurations.

6. **Release automation fragility** — AI-assisted release notes silently fall back after model timeouts ([#7523](https://github.com/QwenLM/qwen-code/issues/7523)); changelog anchor logic broken when release history diverges ([#7970](https://github.com/QwenLM/qwen-code/pull/7970)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-29

## 1. Today's Highlights
The v0.9.2 release candidate is being finalized with a flurry of fixes: Windows CRLF editing, VS Code terminal rendering, the missing **Operate** startup mode, and restoration of the `/rc` remote-control endpoint. Meanwhile, the community is debating a **zero-sandbox mode** for local development, a **`/stop` command** to interrupt autonomous agent loops, and proper **LaTeX math rendering** in the TUI. A supply-chain hardening PR adds provenance and SBOM attestations to published container images.

## 2. Releases
No new releases in the last 24 hours. The v0.9.2 candidate is in final validation (see PRs #4953, #4951, #4954).

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4100](https://github.com/Hmbown/CodeWhale/issues/4100) | **exec_shell fails with exit code 2147483647 on Windows** (ConPTY handle leak) | Blocks long-running Windows sessions; exit code = `i32::MAX` indicates catastrophic resource exhaustion. | 6 comments, closed but root-cause analysis ongoing |
| [#4764](https://github.com/Hmbown/CodeWhale/issues/4764) | **edit_file fails on CRLF files** | Core editing broken on Windows; search strings from `read_file` (LF) don’t match CRLF source. | 3 comments, fixed in PR #4942 |
| [#4955](https://github.com/Hmbown/CodeWhale/issues/4955) | **Request: `--no-sandbox` mode for local dev** | Seatbelt sandbox breaks basic shell commands daily; user exhausted workarounds. | 2 comments, 👍 1 — high pain point for power users |
| [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) | **Proposed `/stop` command & runtime STOP-word intercept** | YOLO/autonomous modes ignore text `stop`; need mechanical tool-call blocking. | 1 comment, new today |
| [#4957](https://github.com/Hmbown/CodeWhale/issues/4957) | **TUI doesn’t render LaTeX math** (shows raw `$...$`) | Affects all technical/scientific users; no math rendering in terminal. | 1 comment, new today |
| [#4906](https://github.com/Hmbown/CodeWhale/issues/4906) | **Show real CodeWhale session on website/README** | Terminal agent is visual/motion-heavy; current prose-only landing fails to demonstrate value. | 2 comments, recording harness landed in PR #4940 |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **Chinese translation of "Constitution": 宪法 vs 宪章 vs 协作准则** | Political sensitivity of "宪法" (constitution) in Chinese; settled on "宪章" (charter) in PR #4948. | 1 comment, resolved via PR |
| [#4941](https://github.com/Hmbown/CodeWhale/issues/4941) | **Thinking level reverts to Auto on restart** | Persisted `reasoning_effort` discarded for auto models; UX regression. | 0 comments, open |
| [#4956](https://github.com/Hmbown/CodeWhale/issues/4956) | **Provider network error in WSL2** | Connection fails after WSL2 restart; blocks onboarding. | 1 comment, new today |
| [#4934](https://github.com/Hmbown/CodeWhale/issues/4934) | **Website theming critique** | “Super-active website” but needs coherent theming; design debt acknowledged. | 2 comments, open |

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#4953](https://github.com/Hmbown/CodeWhale/pull/4953) | **fix(tui)** | Exposes **Operate** in native Startup mode picker; preserves `operate` through canonicalization (was falling back to Act). |
| [#4951](https://github.com/Hmbown/CodeWhale/pull/4951) | **fix(v0.9.2)** | Restores calm decorative rendering under `TERM_PROGRAM=vscode`; classifies HTTP 499 as transient for retry. |
| [#4942](https://github.com/Hmbown/CodeWhale/pull/4942) | **fix(tools)** | **Preserves CRLF edits**: LF-normalized search + CRLF-preserving replacement; covers exact/mixed/normalized no-op cases. |
| [#4943](https://github.com/Hmbown/CodeWhale/pull/4943) | **fix(tui)** | Restores **`/rc` (remote control)**: enrolls live CLI/TUI session as web-controllable host without second runtime. |
| [#4948](https://github.com/Hmbown/CodeWhale/pull/4948) | **fix(i18n)** | Simplified Chinese: **"Constitution" → "宪章" (charter)**; introduced as `你的宪章（Constitution）`; technical IDs unchanged. |
| [#4940](https://github.com/Hmbown/CodeWhale/pull/4940) | **feat(media)** | Executable capture harness for real session recording (supports #4906); recording itself human-gated. |
| [#4944](https://github.com/Hmbown/CodeWhale/pull/4944) | **feat(web)** | Landing page aligned with managed product: Signal Current brand, quiet navy shell, real terminal capture labeled v0.9.1. |
| [#4946](https://github.com/Hmbown/CodeWhale/pull/4946) | **fix(web)** | Onboarding now truthful: renders steps from canonical contract, allows launch before provider selection. |
| [#4931](https://github.com/Hmbown/CodeWhale/pull/4931) | **test/ci** | Migrates QA PTY harness from `vt100` to **`rio-vt`** (Rio terminal engine) for more faithful rendering assertions. |
| [#4958](https://github.com/Hmbown/CodeWhale/pull/4958) | **ci** | Attaches **provenance + SBOM attestations** to published container image (supply-chain hardening). |

## 5. Feature Request Trends
1. **Sandbox escape / local-first mode** — `#4955` asks for `--no-sandbox`; developers hit kernel sandbox daily.
2. **Interruptible autonomy** — `#4959` (`/stop` command) + implicit need for reliable `Ctrl-C`-style halts during YOLO runs.
3. **Rich terminal output** — `#4957` (LaTeX math), plus implied demand for images/tables/markdown rendering.
4. **Session portability** — `/rc` restoration (`#4943`) and recording harness (`#4940`) show demand for shareable, replayable sessions.
5. **Model capability awareness** — `#4794` (modality as first-class routing) signals desire for smarter model selection.

## 6. Developer Pain Points
- **Windows fidelity**: ConPTY handle leaks (`#4100`), CRLF round-trips (`#4764`/`#4942`), VS Code terminal regressions (`#4950`/`#4951`).
- **Sandbox friction**: Seatbelt breaks `ls`, `git`, basic shell — users want opt-out (`#4955`).
- **Onboarding gaps**: WSL2 provider connectivity (`#4956`), website doesn’t show product in action (`#4906`), thinking level not sticky (`#4941`).
- **Autonomy control**: No reliable way to stop a runaway agent (`#4959`).
- **Localization ambiguity**: "Constitution" translation sparked cultural/political debate (`#4949`), resolved via "charter" (`#4948`).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*