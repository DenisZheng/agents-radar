# AI CLI Tools Community Digest 2026-07-16

> Generated: 2026-07-16 02:01 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-07-16)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **rapid stabilization phase** after aggressive feature expansion. All nine major tools shipped releases or critical fixes in the last 24 hours, but the dominant narrative has shifted from "new capabilities" to **reliability, security, and session hygiene**. Subagent orchestration bugs (recursion, token burn, silent failures) are the top cross-cutting crisis, affecting Claude Code, OpenCode, Qwen Code, and Gemini CLI simultaneously. Windows/ARM64 parity, MCP/OAuth maturity, and TUI rendering stability form the second tier of shared pain. The market is bifurcating: **enterprise-focused tools** (Claude Code, Copilot CLI, Codex) prioritize governance, auth, and IDE parity, while **hacker/automation-first tools** (OpenCode, Qwen Code, Pi, DeepSeek TUI) push daemon architectures, multi-workspace serving, and protocol standardization (ACP).

---

## 2. Activity Comparison (Last 24h)

| Tool | Hot Issues Tracked | Key PRs Updated | Release Status | Critical Blocker Count |
|------|-------------------|-----------------|----------------|------------------------|
| **Claude Code** | 10 (3 critical: recursion, data loss, truncation) | 4 | v2.1.211 (patch) | 3 (subagent recursion $600+, NTFS junction 800GB loss, Cowork truncation) |
| **OpenAI Codex** | 10 (1 closed, 9 open) | 10 | 3 alpha releases (0.145.0-α.13–.15) | 2 (ARM64 crash-loop, context/token UI regression) |
| **Gemini CLI** | 10 | 10 | v0.52.0-nightly | 2 (generalist agent hang, browser Wayland fail) |
| **GitHub Copilot CLI** | 10 | 0 (direct commits) | v1.0.71 + v1.0.71-3 (patches) | 2 (MCP OAuth broken, TUI arrow-key hijack data loss) |
| **Kimi Code CLI** | 0 | 1 | None | 0 (low activity) |
| **OpenCode** | 10 (3 layout regressions) | 10 | v1.18.2 | 2 (v1.18.1 layout breaks workflow, history loss on upgrade) |
| **Pi** | 10 | 10 | None | 2 (Codex connection reliability, GitHub auth logout) |
| **Qwen Code** | 10 | 10 | v0.19.10-nightly + cua-driver v0.7.2 | 2 (CI/E2E flakiness epidemic, auth propagation loss) |
| **DeepSeek TUI** | 10 | 11 | None (v0.8.68 blocked) | 2 (security hardening gate, Windows IME/input leaks) |

**Activity Leaders**: Qwen Code, OpenCode, Pi, DeepSeek TUI (10+ PRs each)  
**Release Velocity**: Codex (3 alphas), Copilot CLI (2 patches), OpenCode, Gemini CLI, Qwen Code (nightlies)  
**Critical Blocker Density**: Claude Code (financial/data-loss), Copilot CLI (data loss + auth), OpenCode (layout regression)

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Subagent Guardrails** | Claude Code, OpenCode, Qwen Code, Gemini CLI | Depth limits (`subagent_depth`), token budgets, parent-child messaging, recursion circuit-breakers, completion notifications |
| **MCP/OAuth Maturity** | Copilot CLI, Pi, Qwen Code, Codex, Claude Code | Reliable OAuth bridging, `tools/list` pagination, docker stdio dedup, third-party server auth (Atlassian, Azure DevOps, Bedrock) |
| **Windows/ARM64 Parity** | Codex, Copilot CLI, Claude Code, Qwen Code, Pi | Native ARM64 builds, N-API symbol resolution, PowerShell parsing guards, NTFS junction safety, IME composition |
| **Session Lifecycle Control** | Claude Code, Copilot CLI, OpenCode, Pi, Qwen Code | `/delete` command, `--continue` safety (no dual processes), session archive/rename, history compaction recovery |
| **Diff Review / Code Review UI** | Claude Code (#1 request), Copilot CLI, OpenCode | Copilot-style inline diff review, slash-command parity in VS Code, Plan/Build mode toggle visibility |
| **Daemon / Multi-Workspace Architecture** | Qwen Code, OpenCode, Pi | `qwen serve` multi-workspace RFC, OpenCode project identity fix, Pi session workspace overhaul |
| **Context/Token Observability** | Codex (regression), Copilot CLI, Pi, Qwen Code | Persistent usage bars, cache_write_tokens exposure, cost tracking in session history |
| **TUI Rendering & Input Stability** | DeepSeek TUI, Codex, Copilot CLI, Pi, OpenCode | Scrollback preservation, arrow-key/IME handling, mouse selection, null-child guards, full-redraw fixes |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Differentiator |
|------|---------------|-------------|--------------------------|
| **Claude Code** | Enterprise collaborative coding | Teams, orgs, code-review workflows | Cowork (multi-user), subagent delegation, VS Code extension, workflow commands |
| **OpenAI Codex** | Pro/automation with desktop app | Power users, researchers, multi-modal workflows | Desktop app + CLI, browser integration, GPT-5.3/5.6 model access, Spark/Pro tiers |
| **Gemini CLI** | Agent-native, evaluation-driven | Google ecosystem users, agent builders | A2A protocol, behavioral evals (76), zero-dep POSIX sandboxing strategy, AST-aware tooling |
| **GitHub Copilot CLI** | GitHub-integrated enterprise automation | GitHub orgs, CI/CD, Copilot subscribers | Fine-grained PAT support, ACP mode, BYOK, 1M context parity push, voice mode |
| **Kimi Code CLI** | Observability/telemetry standardization | MoonshotAI internal, Python/TS parity | Cross-language telemetry schema alignment (trace_id, event registry) |
| **OpenCode** | Hacker/automation-first, daemon | Solo devs, automation engineers, plugin authors | ACP protocol (Claude support), vertical tabs, per-session MCP, Effect-based plugin system |
| **Pi** | Multi-provider aggregation, extensibility | Polyglot model users, plugin authors | Unified provider abstraction, SQLite session storage, device OAuth flows, extension RPC hooks |
| **Qwen Code** | Daemon backend for editors, enterprise CN | Zed/JetBrains/Goose users, DingTalk/WeCom orgs | `qwen serve` daemon, ACP/Streamable HTTP, CUDA driver (computer-use), multi-workspace RFC |
| **DeepSeek TUI** | Rust TUI excellence, security hardening | Terminal purists, security-conscious, Chinese IME users | God-object refactoring (App, RuntimeThreadManager), per-subagent routing, CodeQL gate, skill system |

**Strategic Clusters**:
- **Enterprise Governance**: Claude Code, Copilot CLI, Codex
- **Agent/Automation Platforms**: OpenCode, Qwen Code, Pi, Gemini CLI
- **Specialized/Niche**: DeepSeek TUI (TUI craft), Kimi (telemetry), Pi (provider aggregation)

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum + Maturing** | **Qwen Code, OpenCode, Pi** | 10+ PRs/day, nightly releases, architectural RFCs (multi-workspace, SQLite sessions, ACP), active plugin ecosystems |
| **High Momentum + Enterprise Grade** | **Claude Code, Codex, Copilot CLI** | High issue engagement (150+ 👍 on diff review), patch releases, security backports, but critical blockers persist (recursion, ARM64, OAuth) |
| **Stabilizing Core** | **Gemini CLI, DeepSeek TUI** | Nightly fixes for regressions (400 errors, TUI routing), major refactors in flight (god-objects, eval infra), security hardening) |
| **Low Visible Activity** | **Kimi Code CLI** | Single PR (telemetry alignment), no issues/releases in 24h — likely internal or early stage |

**Momentum Indicators**:
- **PR Velocity**: Qwen Code, OpenCode, Pi, DeepSeek TUI >10 PRs/24h
- **Issue Engagement**: Claude Code (150 👍), Codex (170 👍), Copilot CLI (76 👍) show enterprise demand
- **Release Cadence**: Codex (3 alphas), Copilot CLI (2 patches), nightly tools show rapid iteration
- **Blocker Resolution**: OpenCode v1.18.2 fixed 4 compaction/overflow issues in one release; DeepSeek TUI merged 11 PRs for v0.8.68 stop-ship

---

## 6. Trend Signals (Industry Direction)

| Trend | Signal Strength | Developer Actionability |
|-------|----------------|-------------------------|
| **Subagent Safety is the New Table Stakes** | 🔴 Critical | Every tool with delegation needs depth limits, token budgets, and observable parent-child messaging. Claude Code's $600 burns are a market warning. |
| **ACP (Agent Client Protocol) is Converging** | 🟢 High | OpenCode implemented Claude via ACP; Qwen Code builds daemon on Streamable HTTP/ACP; Copilot CLI has ACP mode. Expect editor-agnostic backends. |
| **Daemon > CLI for Automation** | 🟢 High | Qwen Code (`qwen serve`), OpenCode (project identity), Pi (session workspace) — long-running daemons replace per-invocation CLI for CI/editor integration. |
| **MCP is the Plugin Standard, but OAuth is the Blocker** | 🟡 Medium | All tools adopt MCP; none have solved third-party OAuth bridging reliably. Opportunity for a shared auth layer. |
| **Windows/ARM64 is a Competitive Checklist Item** | 🟡 Medium | Codex ARM64 crash-loop, Copilot CLI NFS deadlock, Claude Code NTFS junction deletion — tools failing here lose enterprise cred. |
| **Session History = Durable Storage + Query** | 🟢 Rising | Pi (SQLite), OpenCode (history chats), Qwen Code (channel source tagging), DeepSeek TUI (session routing) — JSONL is being replaced. |
| **Evaluation Infrastructure Investment** | 🟢 Rising | Gemini CLI (76 behavioral evals + failure summaries), Qwen Code (visual diff bot), OpenCode (compaction overflow tests) — evals as CI gates. |
| **Security Hardening as Release Gate** | 🟢 Rising | DeepSeek TUI (CodeQL #3368), Pi (bash var expansion GHSA), Claude Code (permission preview bypass) — security issues block releases. |
| **Chinese Enterprise Integration** | 🔵 Niche/High | Qwen Code (DingTalk/WeCom interactive cards), DeepSeek TUI (IME fixes), Kimi (telemetry) — domestic market driving specific UX. |

---

## Summary for Decision-Makers

- **For Enterprise Adoption**: **Claude Code** leads on collaborative features but has unresolved financial-risk bugs; **Copilot CLI** excels at GitHub integration but MCP/OAuth is fragile; **Codex** offers best model access but ARM64 blocks Windows adoption.
- **For Automation/Platform Building**: **Qwen Code** and **OpenCode** are the most advanced daemon/ACP backends; **Pi** offers best multi-provider abstraction.
- **For Terminal-First Developers**: **DeepSeek TUI** sets the bar for TUI craft and security; **Gemini CLI** pushes agent-native evaluation.
- **Watch List**: **Kimi Code CLI** (telemetry standardization), **OpenCode v1.19** (layout resolution), **Claude Code v2.2** (subagent guardrails), **Codex 0.145 stable** (ARM64 fix).

*The ecosystem is consolidating around **daemon architectures, ACP protocol, SQLite session storage, and subagent safety** — tools that solve these four will define the next generation.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-16 | Source: anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation fix** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Fixes `run_eval.py` reporting 0% recall for all skill descriptions, breaking the description-optimization loop | Core infrastructure bug affecting all skill development; 10+ independent reproductions cited; blocks automated skill improvement | **OPEN** |
| 2 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Typographic quality control: prevents orphan/widow lines, heading stranding, numbering misalignment in generated documents | Addresses universal pain point in AI-generated docs; "users rarely ask for good typography but always notice bad" | **OPEN** |
| 3 | **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file verification + four-dimension reasoning audit (correctness, completeness, consistency, security) before delivery | Universal quality gate; v1.3.0; damage-severity priority ordering; works across any project/stack | **OPEN** |
| 4 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, property-based, mutation testing | Full-stack coverage; philosophical guidance on what *not* to test; active maintenance (updated 2026-04-21) | **OPEN** |
| 5 | **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Meta-skills evaluating structure/docs (20%), behavior (25%), safety (25%), usability (15%), maintainability (15%) | Addresses skill marketplace quality control; security analyzer covers injection, secrets, permissions | **OPEN** |
| 6 | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Color systems (ISCC-NBS, Munsell, XKCD, RAL, OKLCH/OKLAB/CAM16 spaces), contrast/accessibility, perceptual uniformity | Design-system utility; "what space when" decision table; self-contained, no external deps | **OPEN** |
| 7 | **pyxel** ([#525](https://github.com/anthropics/skills/pull/525)) | Retro game dev via pyxel-mcp: write → run_and_capture → inspect → iterate loop for 8-bit/Python games | Niche but active (updated 2026-07-15); MCP server integration; iterative visual debugging | **OPEN** |
| 8 | **ODT (OpenDocument)** ([#486](https://github.com/anthropics/skills/pull/486)) | Create/fill/read/convert .odt/.ods; template filling; ODT→HTML parsing | ISO-standard format support; LibreOffice workflow; template-driven document generation | **OPEN** |

> **Note**: All PRs above are `OPEN`. The skill-creator tooling fixes (#1298, #1099, #1050, #1323, #362, #361, #539) dominate discussion volume but represent infrastructure rather than end-user skills.

---

## 2. Community Demand Trends (From Issues)

| Rank | Demand Signal | Evidence | Priority |
|------|---------------|----------|----------|
| 1 | **Trust & namespace security** | #492 (34 comments, 2👍): Community skills distributed under `anthropic/` namespace impersonate official skills | 🔴 Critical |
| 2 | **Org-wide skill sharing** | #228 (14 comments, 7👍): Manual .skill file sharing via Slack/Teams; need shared library or direct links | 🟠 High |
| 3 | **Skill-creator reliability** | #556 (12 comments, 7👍), #1169 (3 comments): `run_eval.py` 0% recall breaks description optimization; Windows subprocess/encoding failures (#1061, 3 comments, 2👍) | 🟠 High |
| 4 | **Distribution hygiene** | #189 (6 comments, 9👍): `document-skills` and `example-skills` plugins install identical content → duplicates | 🟡 Medium |
| 5 | **Governance & quality gates** | #412 (closed, 6 comments): agent-governance skill request; #1385 (3 comments): 3-gate reasoning pipeline (calibration → adversarial review → verification) | 🟡 Medium |
| 6 | **Platform expansion** | #29 (4 comments): AWS Bedrock support; #16 (4 comments): Expose skills as MCPs for API standardization | 🟢 Emerging |
| 7 | **Data persistence** | #62 (10 comments, 2👍): Skills disappearing after file renames; unclear storage model | 🟢 Emerging |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fix** | Blocks all automated skill improvement; 10+ reproductions; multiple contributors (MartinCajiao, Polluelo978, joshuawowk, gstreet-ops) attacking same root cause |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal applicability (every generated doc); clear spec; author responsive (updated 2026-03-13) |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Meta-skill addressing core quality concern; versioned (v1.3.0); recent activity (2026-07-02) |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive coverage; aligns with "testing trophy" best practices; active maintenance |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained; fills design-system gap; clean scope (updated 2026-06-12) |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer** | Directly serves marketplace quality control; two complementary analyzers; security focus |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the skill-creator toolchain (evaluation loop, Windows support, UTF-8 handling) to unblock reliable skill development, while simultaneously establishing trust boundaries for skill distribution and expanding practical document/testing/design workflows.**

---

# Claude Code Community Digest — 2026-07-16

---

## 1. Today's Highlights

Claude Code v2.1.211 shipped a new `--forward-subagent-text` flag to surface subagent thinking in JSON streams—critical for debugging the **widespread subagent recursion bugs** dominating today's issue tracker. Multiple critical reports confirm uncontrolled agent spawning burning 600K–800K+ tokens per session ($27–$600+ in unexpected charges), with `CLAUDE_CODE_FORK_SUBAGENT=0` being ignored. The VS Code extension's missing `/workflows` command and lack of a Copilot-style diff review UI remain top-voted feature gaps.

---

## 2. Releases

### v2.1.211
- **Added** `--forward-subagent-text` flag and `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` env var to include subagent text/thinking in `stream-json` output
- **Fixed** permission previews in chat channels not neutralizing bidirectional-override, zero-width, and look-alike characters

[View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.211)

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#53940](https://github.com/anthropics/claude-code/issues/53940) | **Cowork Edit/Write silently truncate files** via byte-conservation buffer cap (deterministic, all file sizes) | Data-loss risk in collaborative editing; affects all file sizes on Windows | 43 comments, 16 👍 — **has repro, high-priority** |
| [#33932](https://github.com/anthropics/claude-code/issues/33932) | **VS Code: Diff review UI** like GitHub Copilot Edits Review | #1 most-upvoted feature request; blocks adoption for code-review workflows | 34 comments, **150 👍** |
| [#68619](https://github.com/anthropics/claude-code/issues/68619) | **Subagent infinite recursion** — 50+ levels deep, ignores `FORK_SUBAGENT=0`, permission denials spawn more agents | Catastrophic token burn ($600+ reported); breaks trust in agent delegation | 31 comments, 10 👍 — **CRITICAL label** |
| [#69578](https://github.com/anthropics/claude-code/issues/69578) | **~800K tokens / $27.60 charge** from uncontrolled subagent loop | Confirms #68619 pattern; Max Plan users hit with overages | 8 comments, 1 👍 |
| [#72732](https://github.com/anthropics/claude-code/issues/72732) | **Recursive agent spawning >$600 cost** | Duplicate of #68619; reinforces severity | 3 comments, 0 👍 |
| [#40043](https://github.com/anthropics/claude-code/issues/40043) | **Allow removing local folders from Cowork context** | Context bloat degrades performance; no cleanup path exists | 17 comments, 55 👍 |
| [#26904](https://github.com/anthropics/claude-code/issues/26904) | **Add `/delete` command for current session** | Basic session hygiene missing; users accumulate stale sessions | 10 comments, 56 👍 |
| [#69364](https://github.com/anthropics/claude-code/issues/69364) | **`--continue/--resume` doesn't check live-session registry** → dual processes on same session | "Orphaned twin" processes corrupt state, burn tokens concurrently | 5 comments, 1 👍 |
| [#75275](https://github.com/anthropics/claude-code/issues/75275) | **Windows: `rm -rf` traverses NTFS junctions** → **~800 GB data loss** outside worktree | Catastrophic data destruction; MSYS `rm` doesn't respect junctions | 2 comments, 0 👍 — **data-loss, high-priority** |
| [#74585](https://github.com/anthropics/claude-code/issues/74585) + [#75146](https://github.com/anthropics/claude-code/issues/75146) + [#72292](https://github.com/anthropics/claude-code/issues/72292) | **`/workflows` slash command not recognized in VS Code extension** (3 duplicate issues) | Workflow monitoring broken in primary IDE integration | 3–6 comments each, 2–5 👍 |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#16680](https://github.com/anthropics/claude-code/pull/16680) | **Closed** | **Recall plugin** for conversation context recovery — indexes messages for searchable history (author: bledden) |
| [#77916](https://github.com/anthropics/claude-code/pull/77916) | Open | **code-quality-pipeline plugin** — two-gate quality system: per-file sequential pipeline (lint→test→types→docs) + project-wide gate (Ron Mizrahi) |
| [#77709](https://github.com/anthropics/claude-code/pull/77709) | Open | **Settings example: official marketplace only** — `strictKnownMarketplaces` config to restrict to `claude-plugins-official` |
| [#77705](https://github.com/anthropics/claude-code/pull/77705) | Open | **Fix `validate-settings.sh` false-pass** on files missing frontmatter — Bash error then incorrect pass |

> Only 4 PRs updated in last 24h; plugin ecosystem tooling is the active development surface.

---

## 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **VS Code parity with Copilot** | #33932 (150 👍) for diff review UI; #74585/#75146/#72292 for `/workflows` command |
| **Session lifecycle control** | #26904 (56 👍) for `/delete`; #69364 for `--continue` safety; #77463 "kids in a trenchcoat" multi-instance chaos |
| **Cowork context hygiene** | #40043 (55 👍) to remove folders; no current way to prune |
| **Subagent guardrails** | #68619, #69578, #72732, #77950, #74317 — depth limits, token budgets, parent-child messaging fixes |
| **MCP permission UX** | #60385 (web UI prompts missing), #77704 (256-tool cap regression) |
| **Windows-first fixes** | #53940, #74916, #75275, #69461, #69286 — path guards, junction safety, PowerShell parsing |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Subagent recursion = financial risk** — Multiple independent reports of $27–$600+ surprise charges; `CLAUDE_CODE_FORK_SUBAGENT=0` ignored; no depth/token circuit breakers.
2. **Silent data loss in Cowork** — File truncation (#53940) and NTFS junction traversal (#75275, 800 GB gone) erode trust in collaborative features.
3. **VS Code extension is a second-class citizen** — No diff review (top request), `/workflows` broken, slash commands treated as text.
4. **Session management chaos** — No `/delete`, `--continue` spawns duplicates, no instance identity, "kids in a trenchcoat" concurrent writes.
5. **Permission prompts invisible in web UI** — MCP non-read tools block in local TUI only (#60385), breaking remote workflows.
6. **Windows-specific footguns** — PowerShell guard false-positives (#74916, #69461), spell-check unremovable (#58693), junction deletion (#75275).
7. **MCP connector regression** — Hard 256-tool cap across connectors (#77704), intermittent total tool loss since mid-July.

---

*Digest generated from GitHub data as of 2026-07-16. Links point to live issues/PRs on `anthropics/claude-code`.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-16

## 1. Today's Highlights
The Codex team shipped three rapid alpha releases (0.145.0-alpha.13–.15) while the community surfaces critical Windows ARM64 instability and a widely felt regression: the Desktop app no longer displays context/token usage. Security hardening continues with expanded dangerous-command detection backported to 0.144, and a flurry of PRs improves MCP integration, subagent history preservation, and Windows sandbox behavior.

---

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.145.0-alpha.15` | Alpha | Latest pre-release; incremental fixes atop .14 |
| `rust-v0.145.0-alpha.14` | Alpha | Mid-week alpha iteration |
| `rust-v0.145.0-alpha.13` | Alpha | Start of 0.145 alpha cycle |

> No changelogs attached; expect final 0.145 release notes to consolidate changes.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#23794](https://github.com/openai/codex/issues/23794) | Desktop no longer shows visible context/token usage indicator | **Closed** | Major UI regression; developers lose visibility into context budget | 172 comments, **170 👍** |
| [#33381](https://github.com/openai/codex/issues/33381) | Windows ARM64 app crash-loops on launch — missing N-API symbols | **Open** | Blocks ARM64 Windows users entirely; Crashpad minidumps on every launch | 38 comments, 25 👍 |
| [#28969](https://github.com/openai/codex/issues/28969) | Add setting to disable 60-second auto-resolve for questions | **Open** | Auto-resolve interrupts long-running tasks; highly requested config knob | 37 comments, **124 👍** |
| [#31846](https://github.com/openai/codex/issues/31846) | GPT-5.3 Codex Spark fails with “Unsupported parameter: reasoning.summary” | **Open** | Model/API mismatch breaks Pro users on macOS | 29 comments, 33 👍 |
| [#33375](https://github.com/openai/codex/issues/33375) | Windows: repeated `serialport.node` delay-load failures cause severe UI lag | **Open** | Degrades Windows UX; ties to same native-module load issues as #33381 | 26 comments, 14 👍 |
| [#30178](https://github.com/openai/codex/issues/30178) | In-app Browser crashes main app during webview navigation | **Open** | Browser integration unstable; affects research/debug workflows | 19 comments, 1 👍 |
| [#29223](https://github.com/openai/codex/issues/29223) | Fresh 0.142.0-alpha.1 sessions miss `codex_app` thread-management tools | **Open** | Regression breaks multi-thread workflows (e.g., LazyCodex team mode) | 11 comments, 1 👍 |
| [#30813](https://github.com/openai/codex/issues/30813) | CLI `/agent` lists subagents but lacks thread selector | **Open** | UX gap: can see subagents but cannot switch/inspect their threads | 10 comments, 5 👍 |
| [#31826](https://github.com/openai/codex/issues/31826) | Codex claims new version required despite running latest | **Open** | False upgrade prompts erode trust; version detection logic flawed | 10 comments, 4 👍 |
| [#33429](https://github.com/openai/codex/issues/33429) | Windows ARM64 ChatGPT desktop 26.707.9981 crashes on every launch | **Open** | Duplicate of #33381; confirms ARM64 blocker is widespread | 2 comments, 2 👍 |

---

## 4. Key PR Progress (10 Notable Merges)

| PR | Area | Summary |
|----|------|---------|
| [#33464](https://github.com/openai/codex/pull/33464) | Security | Strengthen forced `rm` detection across shell constructs, substitutions, wrappers |
| [#33455](https://github.com/openai/codex/pull/33455) | Security/Backport | Expand `is_dangerous_command` to 0.144; enables detection in danger-full-access mode |
| [#31781](https://github.com/openai/codex/pull/31781) | Security | Bound executor-controlled HTTP response buffering (frame-count + size limits) |
| [#33457](https://github.com/openai/codex/pull/33457) | History | Turn summaries now use only `final_answer` phase messages, excluding commentary |
| [#33432](https://github.com/openai/codex/pull/33432) | Subagents | Preserve paginated history when spawning/forking subagents; inherit parent context as rollout prefix |
| [#33444](https://github.com/openai/codex/pull/33444) | Migration | Add external agent memory migration (feature-gated `MEMORY` item) |
| [#33426](https://github.com/openai/codex/pull/33426) | Import | Add Cursor settings import (sandbox perms, MCP, agents, hooks, chats) to `/import` flow |
| [#33454](https://github.com/openai/codex/pull/33454) | Observability | Track `cache_write_tokens` from response input details; expose in protocol/SDK events |
| [#33445](https://github.com/openai/codex/pull/33445) | Windows/Sandbox | Select elevated sandbox for network proxies (firewall enforcement requires elevated identity) |
| [#33423](https://github.com/openai/codex/pull/33423) | Performance | Load executor plugin declarations (MCP + app connectors) concurrently |

---

## 5. Feature Request Trends
1. **Granular auto-resolve control** — Users want per-project or global toggles for the 60-second question timeout (#28969, 124 👍).
2. **Full context window opt-in** — Advanced users request access to GPT-5.6 Sol’s 1.05M context with configurable compaction (#33306).
3. **Custom agent routing parity** — Multi-agent schemas missing `agent_type` block custom agent selection on GPT-5.6 Sol roots (#32782, #31097).
4. **MCP tool unwrapping for custom providers** — Namespace-wrapped MCP tools break strict-schema backends (#23186).
5. **Thread/subagent first-class UX** — Thread selector for `/agent`, persistent subagent history, and reliable tool exposure (#30813, #29223, #33432).
6. **Windows ARM64 parity** — Native ARM64 builds that don’t crash on N-API symbol resolution (#33381, #33429).

---

## 6. Developer Pain Points (Recurring Themes)
- **Windows ARM64 is unusable** — Crash-loop on launch, missing N-API exports, serialport delay-load failures (#33381, #33429, #33375).
- **Desktop observability regression** — Context/token indicator removed; no replacement (#23794).
- **Aggressive auto-resolve** — 60-second timeout interrupts debugging, code review, and long edits (#28969).
- **Subagent/thread management gaps** — Can’t select threads, missing tools on fresh sessions, history not inherited (#30813, #29223).
- **Browser/webview instability** — Crashes main process on navigation; multiple side chats amplify (#30178, #33202).
- **Version detection false positives** — “Update required” on current version (#31826).
- **MCP compatibility with non-OpenAI providers** — Namespace wrapper breaks strict tool schemas (#23186).
- **Auth/SSH fragility** — Keyboard-interactive/PAM after pubkey fails; Slack connector OAuth stale links (#23037, #19669).
- **Image/paste broken on Windows** — Clipboard image paste fails in PowerShell (#15612).
- **Git process spam** — 12–13 `git.exe`/sec spawning, creating empty `.git` dirs (#33450).

---

*Generated from openai/codex GitHub data (releases, issues, PRs updated 2026-07-16).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-16

## 1. Today's Highlights
The nightly **v0.52.0** release ships a critical fix for the `400 Bad Request` error that broke chat continuity after cancelled tool calls (PR #28407). Meanwhile, the agent subsystem remains the dominant source of open issues: subagent recovery misreporting, generalist agent hangs, browser agent Wayland failures, and auto-memory retry loops top the backlog. A security patch (PR #28403) closes a bash variable-expansion bypass (GHSA-wpqr-6v78-jr5g) that could leak secrets like `GITHUB_TOKEN`.

---

## 2. Releases
**v0.52.0-nightly.20260716.g3ff5ba20f**  
- **fix(core, a2a)**: Group cancelled tool responses and coalesce consecutive roles to prevent `400 Bad Request` when users reject/cancel tool calls mid-session (PR #28407).  
- Automated version bump from `0.52.0-nightly.20260715.gfa975395b` (PR #28402).

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery misreports `GOAL` success after `MAX_TURNS`** | Silent failure masks agent timeouts; undermines trust in multi-agent workflows. | 10 comments, 2 👍, `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core workflows; workarounds require disabling subagents entirely. | 7 comments, 8 👍, `priority/p1` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands stuck at "Waiting input" after completion** | Frequent UX breakage; simple commands (ls, mkdir) trigger false hangs. | 4 comments, 3 👍, `priority/p1` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Blocks Linux/Wayland users from web-enabled agents. | 4 comments, 1 👍, `priority/p1`, `agent/browser` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Wastes quota & CPU; clutters memory inbox with noise. | 5 comments, `priority/p2` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | 76 behavioral evals exist but lack reliability; critical for regression prevention. | 7 comments, `priority/p1`, `aiq/eval_infra` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via zero-dep OS sandboxing** | Strategic shift to native POSIX tool chains; large effort, high leverage. | 8 comments, 1 👍, `priority/p2`, `effort/large` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Potential turn reduction & token savings; investigative EPIC. | 7 comments, 1 👍, `priority/p2` |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard limit breaks extensibility; needs smarter tool scoping. | 3 comments, `priority/p2` |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser agent ignores `settings.json` overrides (maxTurns)** | Configuration drift; settings silently dropped. | 3 comments, `priority/p2`, `status/need-information` |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#28407](https://github.com/google-gemini/gemini-cli/pull/28407) | **fix** | Groups cancelled tool responses & coalesces consecutive roles → eliminates `400 Bad Request` after user cancels tool calls. **Merged → nightly.** |
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **security** | Blocks `$VAR` / `${VAR}` bash variable expansion bypass (GHSA-wpqr-6v78-jr5g); prevents secret exfiltration via prompt injection. |
| [#28410](https://github.com/google-gemini/gemini-cli/pull/28410) | **fix** | Shortens MCP `tools/list` discovery timeout → fails fast instead of 10-min freeze on unresponsive servers. `priority/p1`. |
| [#28406](https://github.com/google-gemini/gemini-cli/pull/28406) | **fix** | Applies `modelIdResolutions` to tool sub-agent configs (web-search, web-fetch) → fixes `INVALID_MODEL` for non-preview API keys. `priority/p1/p2`. |
| [#28405](https://github.com/google-gemini/gemini-cli/pull/28405) | **fix** | Prevents scroll-position jump when user scrolls up during content updates (fixes #5009). `priority/p1`. |
| [#28386](https://github.com/google-gemini/gemini-cli/pull/28386) | **fix** | Tracks VS Code activation disposables correctly (comma-expression bug). Fixes #27790. `priority/p2`. |
| [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) | **refactor** | Enforces path-trust check before env load in A2A server; isolates task env via `AsyncLocalStorage`. |
| [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | **fix** | Caps recursive reasoning turns at 15/request (configurable via `maxSessionTurns`) → prevents infinite loops. `help wanted`. |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | **feat** | Adds tool-call timeline formatting & failure summaries to behavioral evals → faster debug of eval failures. |
| [#28275](https://github.com/google-gemini/gemini-cli/pull/28275) | **fix** | Makes direct GCP telemetry exporters optional in core → reduces bundle size & deps for non-GCP users. Fixes #27100. |

---

## 5. Feature Request Trends
1. **Native bash/POSIX tooling over custom tools** — Issue #19873 (zero-dep sandboxing) and #22745 (AST-aware CLI) signal a strategic push to align with model’s native shell affinity.  
2. **Subagent observability & control** — #22598 (share subagent trajectories), #21763 (bug reports include subagent context), #22093 (unwanted auto-spawn).  
3. **Evaluation infrastructure hardening** — #24353 (component-level evals), #28305 (failure summaries), #22745 (AST tooling evals).  
4. **Memory system reliability** — #26522, #26523, #26525, #26516 cluster around auto-memory deduplication, patch validation, and secret redaction.  
5. **Configuration fidelity** — #22267 (browser agent ignores settings), #20079 (symlink agents), #28219 (commented settings.json).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Agent hangs & silent failures** — Generalist agent (#21409), shell "awaiting input" ghost (#25166), browser Wayland (#21983), subagent MAX_TURNS misreport (#22323).  
- **Chat continuity breaks** — `400 Bad Request` after cancelled tools (now fixed in nightly), scroll jumps (#28405).  
- **Configuration not respected** — Browser agent ignores `maxTurns` (#22267), subagents spawn despite `disabled` (#22093), symlink agents ignored (#20079).  
- **Resource waste** — Auto-memory infinite retries (#26522), MCP 10-min discovery timeout (#28410), recursive reasoning loops (#28164).  
- **Security surface** — Bash variable expansion bypass (#28403), secret logging in auto-memory (#26525).

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-07-15 → 2026-07-16).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-16

---

## 1. Today's Highlights

Two patch releases shipped today: **v1.0.71** fixes a hang in `copilot -p --autopilot` when background processes outlive a turn (now respects `COPILOT_TASK_WAIT_TIMEOUT_SECONDS`) and preserves reasoning/context settings when reopening the subagents model picker; **v1.0.71-3** adds a startup warning for invalid `settings.json` instead of silently ignoring it, and fixes `/terminal-setup` skipping on terminals without real Kitty keyboard support. Meanwhile, the issue tracker shows a surge of MCP/OAuth authentication bugs (Atlassian, Azure DevOps, third-party HTTP servers) and a high-priority TUI input regression where bare arrow keys hijack session navigation and discard in-progress input.

---

## 2. Releases

### v1.0.71 (2026-07-16)
- **Autopilot hang fixed**: `copilot -p --autopilot` no longer hangs when a background shell/agent outlives the turn; now honors `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` same as plain `-p`.
- **Subagents model picker persistence**: Reopening the picker retains each agent's reasoning effort and context tier.
- **Refresh** (minor internal updates).

### v1.0.71-3 (2026-07-16)
- **Invalid settings.json warning**: On startup, a malformed `settings.json` now surfaces a warning identifying the offending value instead of silently dropping user settings.
- **Terminal setup fix**: `/terminal-setup` no longer skips setup on terminals lacking real Kitty keyboard support.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#223](https://github.com/github/copilot-cli/issues/223)** | "Copilot Requests" permission missing for org-owned fine-grained tokens | Blocks enterprise automation; orgs can't use service-account PATs for CI/CD. | 👍 76, 31 comments — **highest engagement** in tracker. |
| **[#1979](https://github.com/github/copilot-cli/issues/1979)** | Remote session attach from mobile/browser (like Claude Code) | Major workflow gap for distributed teams; enables pair programming & on-call debugging. | 👍 53, 4 comments — strong latent demand. |
| **[#2785](https://github.com/github/copilot-cli/issues/2785)** | Support 1M context window for Claude Opus 4.7 (parity with Claude Code) | Competitive parity; 1M context is now table-stakes for complex repo work. | 👍 62, 1 comment — clear feature parity ask. |
| **[#4024](https://github.com/github/copilot-cli/issues/4024)** | Voice mode: all bundled ASR models fail silently (MultiModalProcessor routing bug) | Voice input completely broken across all three Nemotron models; silent failures erode trust. | 8 comments, triaged — regression in core modality. |
| **[#4096](https://github.com/github/copilot-cli/issues/4096)** | Third-party MCP server shows "Connected" but tools missing (OAuth token never bridged) | False-positive "Connected" status masks auth bridging failure; affects Atlassian & others. | 👍 2, 5 comments — part of OAuth/MCP cluster. |
| **[#4016](https://github.com/github/copilot-cli/issues/4016)** | BYOK (`COPILOT_PROVIDER_*`) rejected in `--acp` mode: `-32000 Authentication required` | Regression (v1.0.61–1.0.68) blocks custom-provider users from ACP/stdin workflows. | 👍 3, 2 comments — repeat of #3048/#3902. |
| **[#4097](https://github.com/github/copilot-cli/issues/4097)** | `apply_patch` stores deleted binary in session history → exceeds CAPI 5 MB limit | Large binary deletions permanently poison session history; `/compact` can't recover. | 👍 1, 2 comments — data-loss adjacent. |
| **[#4053](https://github.com/github/copilot-cli/issues/4053)** | TUI hangs at "Loading: N skills" on NFS/GPFS (SIGCHLD race with 30+ `which gh` threads) | Blocks Linux users on network filesystems; startup deadlock under concurrency. | 2 comments, triaged — platform-specific but severe. |
| **[#4147](https://github.com/github/copilot-cli/issues/4147)** | **HIGH PRIORITY**: Bare left/right arrows hijack cursor keys for session nav, discarding input | **Data loss**: typing + accidental arrow tap loses in-progress prompt; double-tap starts new session. | Filed today, 0 comments yet — marked high priority by reporter. |
| **[#4006](https://github.com/github/copilot-cli/issues/4006)** | MCP `tools/list` pagination (`nextCursor`) not followed | Only first page of tools loaded; violates MCP spec, silently drops tools from large servers. | 1 comment, triaged — spec compliance gap. |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*  
All recent fixes (v1.0.71 / v1.0.71-3) appear to have landed via direct commits or PRs merged prior to the 24h window.

---

## 5. Feature Request Trends

1. **MCP/OAuth maturity** — 7+ issues in 24h around third-party MCP server auth (Atlassian, Azure DevOps, Work IQ, custom HTTP). Core asks: reliable OAuth bridging, proper `tools/list` pagination, docker stdio dedup on `/new`/`/resume`.
2. **Enterprise auth & automation** — Org-owned fine-grained tokens (#223), BYOK in ACP mode (#4016), non-interactive CI/CD flows.
3. **Model parity & context** — 1M context for Opus 4.7 (#2785), reasoning output for Codex 5.3 (#1487), model picker persistence (shipped in v1.0.71).
4. **Remote / multi-device sessions** — Attach from mobile/browser (#1979), session resume UX fixes (#4146 invisible highlight).
5. **Voice & input fidelity** — ASR routing (#4024), PTT transcript loss on typing (#3896), readline/emacs keybindings (#1069), arrow-key hijack (#4147).
6. **Observability** — Persistent token/context usage indicator (#2052), chat composer whitespace preservation (#4136).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **MCP OAuth is unreliable** | 5+ issues: "Connected" badge lies, tools never appear, OAuth flow cancels silently, token not bridged to CLI sessions. |
| **Autopilot/non-interactive mode regressions** | Hang on background processes (fixed today), BYOK rejected in ACP, empty user message injected with 7+ MCP tools (#4038). |
| **Session history bloat & limits** | Binary diffs stored on delete → 5 MB CAPI limit exceeded (#4097); no `/compact` recovery. |
| **TUI input regressions** | Arrow keys hijacked for session nav (#4147), invisible selection highlight (#4146), readline keys broken (#1069), voice transcript lost on keystroke (#3896). |
| **Platform-specific hangs** | NFS/GPFS startup deadlock (#4053), Windows `/mcp` render corruption (#4014). |
| **Silent failures** | Voice ASR returns empty for all models (#4024), invalid settings.json ignored (fixed today), MCP pagination ignored (#4006). |
| **Enterprise gaps** | Org token permissions missing (#223), no remote session attach (#1979), no persistent usage bar (#2052). |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-07-16. Links point to live issues; statuses may evolve.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-16

## 1. Today's Highlights
No new releases or issues were recorded in the last 24 hours. A single pull request (#2500) was opened to align Python telemetry with the TypeScript event schema, adding `trace_id` propagation and missing event types for better observability parity between runtimes.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
*No issues were updated or created in the last 24 hours.*

## 4. Key PR Progress
| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#2500](https://github.com/MoonshotAI/kimi-cli/pull/2500) | **feat(telemetry): align events with TS schema, add trace_id and missing events** | OPEN | Aligns Python telemetry surface with the TS rewrite's event registry (`agent-core-v2/events.ts`). Captures `x-trace-id` response header via `with_raw_response` (stream + non-stream) and adds missing event definitions to match the TypeScript schema. Authored by **7Sageer**. |

## 5. Feature Request Trends
*Insufficient recent issue activity to identify trends. The sole PR suggests ongoing work on telemetry standardization and cross-language schema parity.*

## 6. Developer Pain Points
*No recurring pain points visible from the last 24h of activity. The PR indicates developers are actively reconciling observability implementations between Python and TypeScript codebases.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-16

## Today's Highlights
OpenCode v1.18.2 shipped with critical core fixes: nested subagent launches are now blocked by default (configurable via `subagent_depth`), and Meta model reasoning depth was improved. The desktop app added `Mod+N` for new tabs, but the v1.18.1 layout redesign sparked significant user backlash — tab titles are truncated, the Plan/Build mode toggle is hidden, and history chats disappear after upgrade. Multiple issues and PRs are actively addressing these regressions.

---

## Releases

### v1.18.2 (2026-07-16)
**Core Bugfixes**
- Stopped subagents from launching nested subagents by default; added configurable `subagent_depth` limit
- Improved default reasoning depth for Meta models

**Desktop Improvements**
- Added `Mod+N` shortcut for opening a new tab

---

## Hot Issues (Top 10 by Community Engagement)

| Issue | Summary | Why It Matters | Community Reaction |
|-------|---------|----------------|-------------------|
| [#36936](https://github.com/anomalyco/opencode/issues/36936) | **Desktop: New tab layout breaks tab title visibility** | Horizontal tabs truncate session titles; users cannot identify sessions. Reverting to v1.17 fixes it. | 14 comments, 11 👍 — Highest engagement; blocking daily workflow |
| [#36997](https://github.com/anomalyco/opencode/issues/36997) | **Desktop v1.18.1 hides Plan/Build agent switching UI** | Agent mode toggle (Plan/Build) is invisible; `Tab` key navigation also broken. | 9 comments, 2 👍 — Core workflow disruption |
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **[FEATURE] Keep legacy layout option** | Users request opt-out from new layout; old layout provided single-window access to all features. | 7 comments, 7 👍 — Strong demand for backward compatibility |
| [#24038](https://github.com/anomalyco/opencode/issues/24038) | **[FEATURE] Claude support via ACP protocol** | Enable Claude Code subscription through Agent Client Protocol (ACP). | 6 comments, 6 👍 — **Closed** (implemented) |
| [#37063](https://github.com/anomalyco/opencode/issues/37063) | **History chat conversations not displayed after upgrade** | ~1100 sessions missing post v1.17.18 → v1.18.1 upgrade; potential data loss concern. | 5 comments — Data integrity issue |
| [#37158](https://github.com/anomalyco/opencode/issues/37158) | **Plan/Build mode toggle disappeared** | Duplicate of #36997; users cannot switch modes, LLM requests mode change but UI lacks control. | 5 comments — **Closed** (duplicate) |
| [#13946](https://github.com/anomalyco/opencode/issues/13946) | **`opencode run` exits after compaction on token overflow** | Headless mode exits cleanly (code 0) when compaction model exceeds overflow threshold. | 4 comments — **Closed** (fixed in v1.18.2) |
| [#10634](https://github.com/anomalyco/opencode/issues/10634) | **Compaction overflow check misses large tool outputs** | Subagent results (50–100k tokens) bypass overflow check until next step, causing context overflow. | 4 comments, 6 👍 — **Closed** (fixed in v1.18.2) |
| [#35013](https://github.com/anomalyco/opencode/issues/35013) | **Fable/Zen request-size 400 bypasses auto-compaction** | V2 auto-compaction doesn't trigger for long Fable sessions exceeding Zen byte envelope. | 4 comments — **Closed** |
| [#36942](https://github.com/anomalyco/opencode/issues/36942) | **[FEATURE] Vertical tabs** | Horizontal tabs limit visible sessions to ~5; vertical layout needed for multi-session workflows. | 4 comments, 5 👍 — UX scalability request |

---

## Key PR Progress (Top 10 by Impact)

| PR | Summary | Type | Status |
|----|---------|------|--------|
| [#37194](https://github.com/anomalyco/opencode/pull/37194) | **Fix session overflow detection timing gaps** — Checks pending context, raises output reservation cap, adds post-tool-output overflow check, prevents silent session stops. | Bugfix (Core) | **Closed** |
| [#37129](https://github.com/anomalyco/opencode/pull/37129) | **Default advanced features for new users** — Hides file tree, search, status, agent selector on fresh installs; enables on upgrade; defaults agent selector to Build with fallback. | UX/Config | **Closed** |
| [#35311](https://github.com/anomalyco/opencode/pull/35311) | **Fix: Multiple clones of same repo treated as different projects** — Resolves 12+ linked issues; changes project identity logic. | Bugfix (Core) | Open |
| [#37198](https://github.com/anomalyco/opencode/pull/37198) | **Show selector for custom agents** — Forces agent selector visible when custom agents exist; resolves to Build agent when hidden; aligns cycling commands. | UX/Fix | **Closed** |
| [#37185](https://github.com/anomalyco/opencode/pull/37185) | **TUI: Publish session event on custom tool import failure** — Surfaces load errors in UI (fixes #37186). | Bugfix (TUI) | **Closed** |
| [#37195](https://github.com/anomalyco/opencode/pull/37195) | **Adjust compaction to clearly indicate conversation history** — Improves compaction output clarity. | Enhancement | **Closed** |
| [#36806](https://github.com/anomalyco/opencode/pull/36806) | **CLI: Ensure service on first reconnect** — Invokes idempotent service ensure on failed stream attempt (fixes #36581). | Bugfix (CLI) | **Closed** |
| [#37197](https://github.com/anomalyco/opencode/pull/37197) | **Nix: Restore desktop integration** — Installs desktop entry, hicolor icons, mime types for Linux (fixes #37196). | Packaging | Open |
| [#37182](https://github.com/anomalyco/opencode/pull/37182) | **WebFetch: Scope always-allow to domain** — Replaces `*` wildcard with origin-scoped pattern (e.g., `https://github.com/*`); adds tests (fixes #37183). | Security/Fix | **Closed** |
| [#37170](https://github.com/anomalyco/opencode/pull/37170) | **Chore: Merge dev into v2** — Carries desktop-tabs promotion, subagent depth limiting, provider tweaks, docs; removes obsolete `packages/llm`. | Release Engineering | **Closed** |

---

## Feature Request Trends

1. **Layout Customization & Legacy Support** — Users want vertical tabs (#36942), legacy layout opt-out (#37012), and single-window access to all features.
2. **Session Management** — Auto-generate session titles (#30926), prevent prompt leaks between sessions (#35587), restore history after upgrades (#37063).
3. **MCP & Tooling Flexibility** — Per-session MCP selection with `serve`/`attach` (#37168), dynamic Effect tools for plugins (#37192), file editor integration (#26970).
4. **Media & Attachments** — Display image attachments from tool results in chat UI (#21227), normalize tool/attachment images at settlement (#37141).
5. **Input/Accessibility** — Bypass/auto-switch IME for leader key (#37167), fix WSL notification crashes (#37190).

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **v1.18.1 layout regression** — Truncated tabs, hidden agent toggle, missing history | 3 high-engagement issues (#36936, #36997, #37012) | Blocks core workflow; users reverting to v1.17 |
| **Session compaction failures** — Overflow detection gaps, silent exits, large tool output handling | 4 closed issues + #37194 PR | Data loss risk in headless/long sessions |
| **WSL/Linux desktop integration** — Notification server crashes (#37171), Nix desktop entry missing (#37197) | 2 issues + 1 PR | Environment-specific breakage |
| **Prompt/context leakage** — Cross-session prompt leaks (#35587), injection via AGENTS.md (#37187) | 2 issues | Security & correctness concern |
| **Startup performance** — `.opencode/node_modules` scanner ignores `.gitignore` (#30337) | 1 open issue | Project load hangs |

---

*Digest generated from GitHub data (last 24h). Links point to live issues/PRs on `anomalyco/opencode`.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-16

## Today's Highlights
The Pi ecosystem is stabilizing core reliability: a Node.js 24 compatibility fix for `taskkill`/`rundll32` spawned processes landed (#6692), while the high-impact **openai-codex connection reliability issue** (#4945, 75 comments) remains in progress. Meanwhile, the **sqlite session storage** PR (#6594) signals a major architectural shift toward durable, queryable session history, and xAI Grok 4.5 support via Responses API is nearing merge (#6651).

## Releases
No new releases in the last 24 hours.

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability Issues** | Core interactive TUI freezes on `Working…` with no streamed output; only recovery is Escape → aborted turn. Blocks daily workflows for Codex users. | 75 comments, 30 👍 — highest engagement in tracker |
| [#6050](https://github.com/earendil-works/pi/issues/6050) | **TUI full redraw clears terminal scrollback** | Scrollbar jumps to chat start during active rendering; root cause in core TUI renderer. Degrades long-session usability. | 14 comments |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | **Make in-session model changes ephemeral by default** | Requests explicit "Default model" in `/settings`; prevents accidental global config drift during experimentation. | 7 comments, 7 👍 |
| [#2310](https://github.com/earendil-works/pi/issues/2310) | **Create a flake.nix** | Enables `nix run github:badlogic/pi-mono` and system-level installs. Closed but high community interest. | 6 comments, 16 👍 |
| [#6657](https://github.com/earendil-works/pi/issues/6657) | **Bedrock AWS_PROFILE authentication not working** | `AccessDeniedException: 403` despite claimed fix in 0.80.7; blocks AWS Bedrock users. | 5 comments, 2 👍 |
| [#6686](https://github.com/earendil-works/pi/issues/6686) | **Pi automatically logs out of GitHub** | Recurring auth regression (see #2725); interrupts agent mid-task with "No API key for provider: github-copilot". | 4 comments |
| [#6619](https://github.com/earendil-works/pi/issues/6619) | **Windows: dependent extensions mislabeled, show absolute paths** | `pi install npm:pkg` renders sibling extensions with full Windows paths in banner; UX confusion. | 4 comments |
| [#4530](https://github.com/earendil-works/pi/issues/4530) | **Install individual packages from git monorepo subdirectories** | `subdirectories` field for `pi install git:…` to target sub-packages; avoids cloning entire monorepos. | 4 comments, 2 👍 |
| [#6596](https://github.com/earendil-works/pi/issues/6596) | **spawn(taskkill) ENOENT on Node.js 24** | `killProcessTree()` fails on Node 24 due to PATH lookup; async `error` event crashes process. Fixed in #6692. | 3 comments |
| [#6673](https://github.com/earendil-works/pi/issues/6673) | **OpenAI Codex exposes raw Cloudflare 520 HTML with client IP** | Error responses leak public exit IP + Ray ID into session JSONL; privacy/security concern. | 3 comments |

## Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#6692](https://github.com/earendil-works/pi/pull/6692) | **fix: absolute System32 path for taskkill/rundll32** | Resolves Node.js 24 `ENOENT` by bypassing PATH lookup; adds `error` event handler. | **Closed** (merged) |
| [#6651](https://github.com/earendil-works/pi/pull/6651) | **feat: xAI device OAuth + route grok-4.5 through Responses** | Adds device-code flow alongside `XAI_API_KEY`; only `grok-4.5` uses Responses API with reasoning tiers. | **Open** |
| [#6681](https://github.com/earendil-works/pi/pull/6681) | **windows: reset terminal title after npm version check** | Fixes #6629 — title no longer stuck on `npm view …` after startup. | **Closed** |
| [#6671](https://github.com/earendil-works/pi/pull/6671) | **add usage info to branch summary, compaction, tool results** | Propagates token usage metadata to session entries; groundwork for cost tracking. | **Open** |
| [#6683](https://github.com/earendil-works/pi/pull/6683) | **fix: accept colon-qualified skill names** | Allows plugin skills like `inc:ship-it`; removes false-positive "Skill conflicts" warnings. | **Closed** |
| [#6594](https://github.com/earendil-works/pi/pull/6594) | **feat: sqlite session storage** | Replaces JSONL with SQLite; adds `retainedTail` to compaction, optimizes path-to-root loading. Major architectural shift. | **Open** |
| [#6680](https://github.com/earendil-works/pi/pull/6680) | **parse extension package name for dependent extensions** | Partial fix for #6619 — corrects banner labeling of transitive npm dependencies. | **Open** |
| [#6533](https://github.com/earendil-works/pi/pull/6533) | **fix: Codex compaction "Model not found" for gpt-5.6-luna** | Maps internal tier-suffixed slug to no-tools registry; restores `/compact` for Luna. | **Closed** |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | **feat: Amazon Bedrock Mantle OpenAI Responses provider** | New provider using OpenAI's Bedrock SDK; supersedes prior Bedrock work. | **Open** |
| [#6667](https://github.com/earendil-works/pi/pull/6667) | **fix(tui): guard null children in Box/Container** | Prevents `TypeError: Cannot read properties of undefined` after extension install/remove. | **Closed** |

## Feature Request Trends
1. **Session management overhaul** — #6674 (folders, rename, archive), #6690 (ordering on switch), #6594 (SQLite backend) point to a unified "session workspace" direction.
2. **Extension API maturity** — #6693 (`stream_chunk` hook), #6694 (RPC output correlation), #6684 (retry controls), #6687 (missing TS exports) show plugin authors demanding parity with core internals.
3. **Provider/credential flexibility** — #6651 (xAI OAuth), #6216 (Bedrock Mantle), #6212 (adaptive thinking config), #6689 (OAuth vs API key precedence) reflect multi-provider workflows.
4. **Monorepo/package granularity** — #4530 (git subdirectories), #6619/#6680 (npm dependency rendering) target composite extension distribution.
5. **Ephemeral-by-default UX** — #5263 (model/thinking changes), #6684 (retry override) favor session-scoped experimentation over global mutation.

## Developer Pain Points
- **Authentication fragility**: GitHub Copilot logout (#2725, #6686), Bedrock `AWS_PROFILE` failures (#6657), Codex OAuth overridden by env vars (#6689) — credential handling is the top reliability complaint.
- **TUI rendering regressions**: Scrollback loss (#6050), code block borders (#6682), extension selector viewport (#6688), null-child crashes (#6667) — frequent UI instability during active use.
- **Compaction/stream resilience**: Single transient drop fails compaction (#6647), Codex model mapping breaks summarization (#6533), thinking blocks dropped intermittently (#6685).
- **Windows-specific gaps**: `taskkill` ENOENT (#6596), terminal title pollution (#6629), extension path rendering (#6619) — platform parity lags.
- **Observability gaps**: Usage metadata missing from tool results/branches (#6671), error HTML leakage (#6673), no stream-level hooks (#6693) — debugging and cost tracking remain manual.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-16

---

## 1. Today's Highlights

The project shipped a nightly release (v0.19.10-nightly) alongside a major `cua-driver-rs v0.7.2` update bringing signed macOS binaries, Linux/Windows builds, and **relative-coordinate support** for computer-use automation. Development velocity remains high: 50 PRs updated in 24h, with heavy focus on **daemon multi-workspace architecture**, **ACP/Streamable HTTP transport maturation**, and **sub-agent concurrency controls**. CI flakiness (E2E timeouts) continues to surface as a recurring operational pain point.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| `v0.19.10-nightly.20260716.506ce0a1a` | Nightly | Docs: cap PR scope after repeated review rounds; Web-shell: add workspace path handling |
| `cua-driver-rs v0.7.2` | Driver update | **macOS**: codesigned + notarized universal binary + `QwenCuaDriver.app`<br>**Linux**: unsigned (x86_64 + arm64, glibc 2.31)<br>**Windows**: unsigned (x86_64 + arm64)<br>**New**: relative-coordinate mode enabled |

> 📦 [Nightly release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10-nightly.20260716.506ce0a1a) • [cua-driver binaries](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.2)

---

## 3. Hot Issues (Top 10 by Community Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC: Multiple workspaces per `qwen serve` daemon** | Breaks 1:1 daemon↔workspace assumption; enables shared daemon for multi-repo orgs | 23 comments, P2, `need-discussion` — active design debate |
| [#4782](https://github.com/QwenLM/qwen-code/issues/4782) | **ACP Streamable HTTP transport status & upgrade plan** | Zed, Goose, JetBrains can connect natively to `qwen serve` — zero adapter code | 5 comments, tracking issue for protocol alignment |
| [#6928](https://github.com/QwenLM/qwen-code/issues/6928) | **GitHub App auth not injected into new workspaces** | Private repo workspaces mount but lose GitHub App credentials — blocks CI/CD flows | 5 comments, `need-information`, auth + integration |
| [#5239](https://github.com/QwenLM/qwen-code/issues/5239) | **Subagent ↔ main session communication too weak** | No notification when subagent completes/hangs; main session blind to subagent internals | 4 comments, P2, `roadmap/subagents-tools` — core multi-agent gap |
| [#6857](https://github.com/QwenLM/qwen-code/issues/6857) | **`/update` false "up to date" on v0.19.9** | Version check logic broken; users miss v0.19.10 on npm | 3 comments, `welcome-pr`, packaging bug |
| [#6936](https://github.com/QwenLM/qwen-code/issues/6936) | **`isManagedMemoryAvailable()` ignores `enableManagedAutoMemory: false`** | 7–9 KB wasted context despite setting disabling memory ops | 3 comments, P2, `welcome-pr`, config gate mismatch |
| [#6914](https://github.com/QwenLM/qwen-code/issues/6914) | **Fractional `maxSessionTurns`/`maxToolCallsPerTurn` terminate early** | Float values (e.g., 0.5) pass validation but break whole-number counters | 3 comments, P2, validation logic flaw |
| [#6443](https://github.com/QwenLM/qwen-code/issues/6443) | **DingTalk channel: interactive cards (status, stop, forms)** | Native UX for Chinese enterprise users — running status, stop button, ask-user forms | 3 comments, P2, interactive UX gap |
| [#6898](https://github.com/QwenLM/qwen-code/issues/6898) | **Shell confirmations trigger per-tool, not per-task** | Dozens of prompts per task; users want single end-of-task confirmation | 3 comments, UX friction, `welcome-pr` |
| [#6970](https://github.com/QwenLM/qwen-code/issues/6970) | **MCP tool names with dots rejected by OpenAI/Anthropic providers** | `mcp__zybio__literature.search_pubmed` valid for Gemini but fails stricter schemas | 2 comments, P2, cross-provider compatibility |

---

## 4. Key PR Progress (Top 10 by Recency & Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#6993](https://github.com/QwenLM/qwen-code/pull/6993) | `fix(headless): run concurrency-safe tool calls in parallel` | **Open** | Headless `-p` mode now runs parallel tool batches concurrently (matching interactive TUI scheduler) — major throughput win for automation |
| [#6937](https://github.com/QwenLM/qwen-code/pull/6937) | `feat(cli): mouse text selection and copy in VP mode` | **Open** | Click-drag selection, double/triple-click word/line, clipboard copy in alternate-screen viewport |
| [#6984](https://github.com/QwenLM/qwen-code/pull/6984) | `feat(agents): support per-model sub-agent concurrency limits` | **Open** | New `agents.maxParallelAgentsByModel` setting caps concurrent sub-agents per model ID; complements global cap |
| [#6963](https://github.com/QwenLM/qwen-code/pull/6963) | `ci(web-shell): before/after visual previews, showing only changed views` | **Closed** | Visual diff bot now renders PR base vs head, pixel-diffs, stitches only changed views — faster PR review |
| [#6945](https://github.com/QwenLM/qwen-code/pull/6945) | `feat(cli): add daemon Todo stop guard` | **Open** (in-review) | Daemon sessions with pending `todo_write` items auto-continue up to 2 extra turns — opt-in background automation |
| [#6994](https://github.com/QwenLM/qwen-code/pull/6994) | `feat(review): fold findings list into verify/reverse-audit prompt` | **Open** | Orchestrator passes findings as single block to review agents — cleaner prompt assembly |
| [#6954](https://github.com/QwenLM/qwen-code/pull/6954) | `feat(serve): add workspace MCP management` | **Open** | Web Shell + daemon: plugin management UI (extensions + MCP tabs), persisted discovery, typed SDK ops |
| [#6953](https://github.com/QwenLM/qwen-code/pull/6953) | `fix(cli): make auto output language follow user input` | **Open** | `outputLanguage=auto` now writes rule asking model to match user's input language (not system locale) |
| [#6895](https://github.com/QwenLM/qwen-code/pull/6895) | `feat(core): propagate trusted invocation context` | **Open** (in-review) | Runtime-only `InvocationContextV1` tracks ingress, session, root prompt, validated daemon client — security hardening |
| [#6961](https://github.com/QwenLM/qwen-code/pull/6961) | `feat(daemon): Aggregate deep health across workspaces` | **Closed** | `GET /health?deep=1` now aggregates sessions, permissions, prompts, channel liveness across all workspaces |

---

## 5. Feature Request Trends (Distilled from Issues)

| Trend | Representative Issues | Direction |
|-------|----------------------|-----------|
| **Daemon multi-workspace & multi-tenancy** | [#6378](https://github.com/QwenLM/qwen-code/issues/6378), [#6946](https://github.com/QwenLM/qwen-code/issues/6946), [#6962](https://github.com/QwenLM/qwen-code/issues/6962) | Single daemon managing N workspaces with isolated sessions, shared health, channel source tagging |
| **ACP/daemon as universal backend** | [#4782](https://github.com/QwenLM/qwen-code/issues/4782), [#6947](https://github.com/QwenLM/qwen-code/pull/6947), [#6961](https://github.com/QwenLM/qwen-code/pull/6961) | Streamable HTTP transport, stateless SSE generation, aggregated health — editor-agnostic |
| **Sub-agent orchestration maturity** | [#5239](https://github.com/QwenLM/qwen-code/issues/5239), [#6984](https://github.com/QwenLM/qwen-code/pull/6984) | Bidirectional notifications, per-model concurrency caps, main-session visibility into subagent state |
| **Channel/enterprise integrations** | [#6443](https://github.com/QwenLM/qwen-code/issues/6443), [#6883](https://github.com/QwenLM/qwen-code/issues/6883), [#6930](https://github.com/QwenLM/qwen-code/pull/6930), [#6939](https://github.com/QwenLM/qwen-code/issues/6939) | DingTalk/WeCom interactive cards, single-chat + group delivery, mention-metadata fixes |
| **MCP ecosystem hardening** | [#6954](https://github.com/QwenLM/qwen-code/pull/6954), [#6970](https://github.com/QwenLM/qwen-code/issues/6970) | Workspace-scoped MCP management, tool-name sanitization for cross-provider compatibility |
| **Auto-adaptive UX** | [#6943](https://github.com/QwenLM/qwen-code/issues/6943), [#6953](https://github.com/QwenLM/qwen-code/pull/6953), [#6898](https://github.com/QwenLM/qwen-code/issues/6898) | `auto` output language, task-level (not tool-level) confirmations, reduced prompt noise |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **CI/E2E flakiness** | High | 6+ CI failure issues in 24h ([#6938](https://github.com/QwenLM/qwen-code/issues/6938), [#6940](https://github.com/QwenLM/qwen-code/issues/6940), [#6979](https://github.com/QwenLM/qwen-code/issues/6979), [#6966](https://github.com/QwenLM/qwen-code/issues/6966), [#6935](https://github.com/QwenLM/qwen-code/issues/6935), [#6933](https://github.com/QwenLM/qwen-code/issues/6933)) — timeouts, cron timing, model latency |
| **Auth propagation in workspace creation** | Medium | [#6928](https://github.com/QwenLM/qwen-code/issues/6928) — GitHub App creds lost on new workspace mount |
| **Sub-agent observability gap** | Medium | [#5239](https://github.com/QwenLM/qwen-code/issues/5239) — no completion/hang notification, no main-session inspection |
| **Config settings ignored silently** | Medium | [#6936](https://github.com/QwenLM/qwen-code/issues/6936) (memory), [#6914](https://github.com/QwenLM/qwen-code/issues/6914) (fractional limits) — validation passes but runtime diverges |
| **Shell confirmation spam** | Medium | [#6898](https://github.com/QwenLM/qwen-code/issues/6898) — dozens of prompts/task; users want task-level batching |
| **MCP tool name portability** | Emerging | [#6970](https://github.com/QwenLM/qwen-code/issues/6970) — dot-containing names work on Gemini but fail OpenAI/Anthropic |
| **Classifier over-blocking** | Emerging | [#6927](https://github.com/QwenLM/qwen-code/issues/6927) — safety classifier deadlocks all approval-requiring tools including settings recovery |
| **Agent mid-response cutoff** | Emerging | [#6990](https://github.com/QwenLM/qwen-code/issues/6990) — agent stops 10s–1min in, returns partial XML |

---

*Generated from GitHub data as of 2026-07-16. All links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-16

---

## 1. Today's Highlights

The project is in a heavy stabilization phase targeting **v0.8.68/v0.9.x** with 11 PRs merged or updated in the last 24h, most addressing release-blocking regressions in TUI state routing, render performance, and Windows IME/input reliability. A major security-hardening tracker (#3368, 29 comments) remains open for v0.8.64, while architectural refactoring of god-object modules (`App`, `RuntimeThreadManager`, `mcp.rs`, `runtime_api.rs`) is actively tracked across 8+ issues. No new release shipped today.

---

## 2. Releases

**No new releases in the last 24 hours.** The v0.8.68 stop-ship repair batch (PR #4332) was merged today, clearing the way for the next cut.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#3368](https://github.com/Hmbown/CodeWhale/issues/3368) | **Security hardening & code-scanning fixes for v0.8.64** | Consolidates CodeQL findings, advisory reports, and local fixes into a single release gate. Blocking v0.8.64 train. | **29 comments** — highest engagement; maintainers coordinating triage across multiple vectors. |
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | **“Turn stalled” freeze in `yolo` mode** | Core reliability: agent loops hang without completion signal; `continue` fails to recover. | **20 comments, 1👍** — multiple users hit this; fixed in v0.9.2 lane. |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | **TUI freeze on Windows (crossterm poll)** | Intermittent total UI lockup on Win11; process stays alive. Two documented events with logs/thread dumps. | **11 comments** — Windows-specific; closed in v0.9.2. |
| [#4332](https://github.com/Hmbown/CodeWhale/pull/4332) | **v0.8.68 TUI state/routing truthfulness (release-blocker)** | Fixes regressions where blank/malformed provider config populated configured state, breaking routing. | **Merged today** — stop-ship repair for v0.8.68. |
| [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) | **Input leaks to PowerShell after focus loss** | Post-AI-reply, keystrokes execute as cmdlets in host shell — security/UX risk on Windows. | **6 comments** — closed in v0.9.2. |
| [#1835](https://github.com/Hmbown/CodeWhale/issues/1835) | **IME composition deadlock (Chinese IME on Win10/11)** | Input field becomes completely unresponsive with Sogou/Chinese IME. | **5 comments, 1👍** — closed in v0.9.2. |
| [#3314](https://github.com/Hmbown/CodeWhale/issues/3314) | **Extract `App` god object (~150 fields) into owned submodules** | Largest structural refactor; enables testability and parallel work on cockpit, composer, tools. | **3 comments** — open, tracked for v0.8.63/v0.9.2. |
| [#3313](https://github.com/Hmbown/CodeWhale/issues/3313) | **Split `RuntimeThreadManager` (2.4k lines) into store/executor/events/types** | Turn monitoring/execution logic monolith; blocks reliable sub-agent and tool streaming. | **3 comments** — open, v0.8.63/v0.9.2. |
| [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) | **Refactor strategy: split 7 large Rust monoliths** | Meta-issue coordinating extraction of `app.rs`, `runtime_threads.rs`, `mcp.rs`, `runtime_api.rs`, `ui.rs`, `history.rs`, `hooks.rs`. | **2 comments** — umbrella tracking issue. |
| [#1512](https://github.com/Hmbown/CodeWhale/issues/1512) | **Mouse scroll only shows user messages, not model output** | Fundamental UX gap: context scrolling broken for assistant responses. | **4 comments** — still open, v0.9.2. |

---

## 4. Key PR Progress (10 Most Impactful)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#4332](https://github.com/Hmbown/CodeWhale/pull/4332) | **MERGED** | **v0.8.68 stop-ship**: fix TUI state/routing truthfulness — blank auth no longer counts as configured. | Unblocks v0.8.68 release. |
| [#3902](https://github.com/Hmbown/CodeWhale/pull/3902) | **MERGED** | **Perf**: fix 5 render/input hot paths (double sidebar computation, input latency, history rerender, tool-stream flush, scroll-jank). | Measurable frame-time wins; adversarial review passed. |
| [#4087](https://github.com/Hmbown/CodeWhale/pull/4087) | **OPEN** | **Refactor hooks**: split `hooks.rs` → `config.rs` + `executor.rs` (config vs runtime separation). | Enables cleaner policy changes; part of monolith split. |
| [#4084](https://github.com/Hmbown/CodeWhale/pull/4084) | **MERGED** | **Fleet**: reject retired profile aliases (`model_class_hint`, `route_tier`); enforce canonical `loadout`. | Profile round-trip stability. |
| [#4044](https://github.com/Hmbown/CodeWhale/pull/4044) | **MERGED** | **Onboarding i18n**: localize dynamic welcome steps via `MessageId`; add `zh-Hant` copy. | First-run polish for all locales. |
| [#3969](https://github.com/Hmbown/CodeWhale/pull/3969) | **MERGED** | **Per-sub-agent provider routing** (held for v0.8.68 fleet lane; rebase needed). | Enables agent-specific model selection. |
| [#3818](https://github.com/Hmbown/CodeWhale/pull/3818) | **MERGED** | **TUI**: expand active in-flight tool-run summaries; regression test for toggle-before-flush. | Fixes #3256 edge case in dense tool output. |
| [#3761](https://github.com/Hmbown/CodeWhale/pull/3761) | **MERGED** | **Defer startup maintenance** (stale spillover pruning, old session cleanup) to background thread. | Fixes #3757 — faster cold start. |
| [#4088](https://github.com/Hmbown/CodeWhale/pull/4088) | **MERGED** | **Preserve native selection** when `--no-mouse-capture` / `tui.mouse_capture=false` (fixes #4026). | Restores terminal drag-select without mouse capture. |
| [#4372](https://github.com/Hmbown/CodeWhale/pull/4372) | **MERGED** | **Skills**: preserve inline task text for `$<skill> do X` / `/<skill> do X`; keep bare `$<skill>` armed. | Improves skill invocation ergonomics. |
| [#4370](https://github.com/Hmbown/CodeWhale/pull/4370) | **OPEN** | **TelecomJS provider**: add catalog refresh so `/v1/models` populates model picker beyond `deepseek-v4-pro`. | Expands provider ecosystem. |

---

## 5. Feature Request Trends

1. **Slash-command durability & workbench integration** — Issues [#1889](https://github.com/Hmbown/CodeWhale/issues/1889), [#1892](https://github.com/Hmbown/CodeWhale/issues/1892), [#1890](https://github.com/Hmbown/CodeWhale/issues/1890), [#1887](https://github.com/Hmbown/CodeWhale/issues/1887) form a coherent push: make `/command` results persistent, source-linked, routed to spatial workbench, visible in cockpit, and discoverable via help/i18n.
2. **In-app update/check & GitHub link** — [#1678](https://github.com/Hmbown/CodeWhale/issues/1678) (closed) signals demand for self-update UX.
3. **Token-cost multi-currency** — [#1607](https://github.com/Hmbown/CodeWhale/issues/1607) requests CNY/other units in cost estimation.
4. **Provider catalog auto-refresh** — [#4370](https://github.com/Hmbown/CodeWhale/pull/4370) and custom-provider gaps show need for dynamic model discovery.
5. **Config discoverability & TUI edit/persist** — [#3303](https://github.com/Hmbown/CodeWhale/issues/3303): documented keys should be editable in-TUI with validation.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows input/IME instability** | #1812 (freeze), #2261 (focus leak), #1835 (IME deadlock), #1338 (Enter crash) | 4+ issues, all v0.9.2 |
| **“Turn stalled” / agent loop hangs** | #2487 (yolo mode), turn monitoring in `RuntimeThreadManager` (#3313) | Core reliability blocker |
| **TUI scroll/context visibility** | #1512 (mouse scroll only user msgs), #864 (output truncated), #1853 (copy includes wrap breaks) | 3+ UX issues |
| **God-object maintenance burden** | #3314 (`App`), #3313 (`RuntimeThreadManager`), #3310 (`mcp.rs`), #3309 (`runtime_api.rs`), #3312 (`ui.rs`), #3308 (`history.rs`) | 6+ large-file refactors tracked |
| **glibc/compatibility floor** | #1067 (requires 2.38+, servers on 2.35) | Linux deployment friction |
| **Config opacity** | #3303 (keys not editable in TUI), legacy dead-code (#3490) | Developer velocity tax |

---

*Digest generated from GitHub data (last 24h) for Hmbown/DeepSeek-TUI (mirrored as Hmbown/CodeWhale).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*