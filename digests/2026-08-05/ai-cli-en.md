# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 01:54 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison — 2026-08-05

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **enterprise-grade platforms** (Claude Code, GitHub Copilot CLI, OpenCode) prioritizing security, governance, and Windows/enterprise parity, and **developer-centric/emerging tools** (Gemini CLI, Qwen Code, Kimi, DeepSeek TUI, Pi) iterating rapidly on agent runtime architecture, ACP/MCP protocol maturity, and terminal UX. A universal tension exists between **reliability hardening** (memory leaks, context corruption, sandbox escapes) and **feature velocity** (multi-agent delegation, model routing, session portability). Windows stability and MCP/ACP ecosystem maturity are the two cross-cutting differentiators separating production-ready tools from experimental ones.

---

## 2. Activity Comparison

| Tool | Hot Issues (Tracked) | Active PRs (Tracked) | Release Status (24h) | Release Velocity |
|------|---------------------|---------------------|---------------------|------------------|
| **Claude Code** | 10 | 10 | **v2.1.222** (security/isolation fixes) | Stable monthly-ish; hotfix cadence |
| **OpenAI Codex** | 10 | 10 | **4 alpha releases** (0.147.0-α.7 → α.6.1) | **High** — rapid stabilization train |
| **Gemini CLI** | 10 | 10 | None | Steady; security + automation focus |
| **GitHub Copilot CLI** | 10 | 2 | **v1.0.79-1** (breaking sandbox config) | Low PR velocity; enterprise gating |
| **Kimi Code CLI** | 6 | 3 | None | Low; Windows/ACP blockers dominate |
| **OpenCode** | 10 | 10 | **v1.18.13** (RTL/TUI fixes) | Regular; DeepSeek provider fire drill |
| **Pi** | 10 | 10 | None | High PR throughput; enterprise Copilot focus |
| **Qwen Code** | 10 | 10 | **v0.21.5 stable** + **v0.21.6-preview** + 2 nightlies | **Highest** — multi-channel cadence |
| **DeepSeek TUI** | 10 | 10 | **v0.9.4 train** (77 commits, pre-release) | High commit volume; monolith refactor pending |

> **Note**: "Tracked" counts reflect the top-10 items curated in each digest; actual repo totals are higher.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Windows First-Class Support** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi, OpenCode, Pi, DeepSeek TUI | GPU/WebGPU stability (Claude, Codex), WSL2/terminal input bugs (Codex, Copilot, Kimi), `find`/glob path separators (Pi), MSIX packaging (Claude), native crashes (Codex, Copilot) |
| **MCP/ACP Protocol Maturity** | Gemini CLI, GitHub Copilot CLI, Kimi, OpenCode, Qwen Code, DeepSeek TUI, Pi | Tool exposure to threads (Codex), `server/discover` compat (Copilot), model discovery/switching (Kimi, DeepSeek), Registry-first tool selection (DeepSeek), OAuth via RPC (Pi), SSE hang/timeouts (Qwen) |
| **Session/Context Portability** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi, OpenCode, Qwen Code | `/undo` (Codex), session forking (Copilot), Remote Control (Kimi), transcript integrity (Claude, Qwen), cloud sync (Copilot), headless Goal workflows (Qwen) |
| **Agent Runtime Governance** | Claude Code, Gemini CLI, OpenCode, Qwen Code, DeepSeek TUI | Hook/subagent contract enforcement (Claude), Caretaker evals (Gemini), `disable-model-invocation` in skills (OpenCode), deterministic trust boundaries (Qwen), verifier receipts (DeepSeek) |
| **Resource Observability & Bounds** | Claude Code, OpenAI Codex, OpenCode, Qwen Code, DeepSeek TUI | Memory leak visibility (Claude), GPU/CPU runaway (Codex), daemon byte-level bounds (Qwen), renderer memory profiling (OpenCode), build-time dependency tax (DeepSeek) |
| **Enterprise/Managed Env Parity** | Claude Code, GitHub Copilot CLI, OpenCode, Pi, Qwen Code | Air-gapped startup calls (Claude), org agent visibility (Copilot), billing entity detection (Copilot), compaction on GHE (Pi), usage/balance API (OpenCode), provider auth sanitization (Qwen) |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Developer/Emerging Tools |
|-----------|---------------------------|--------------------------|
| **Primary Focus** | Security isolation, compliance, enterprise SSO/policy, Windows parity | Agent architecture innovation, protocol leadership (ACP/MCP), terminal UX, model routing |
| **Target User** | Org admins, security teams, regulated industries, cross-platform teams | Power users, OSS contributors, researchers, IDE/editor integrators |
| **Technical Approach** | Hardened sandboxes, worktree isolation, hook governance, MSIX/MSI packaging | Monorepo monoliths (DeepSeek), Tauri/Electron bridges (Qwen, Codex), Rust/Tauri (OpenCode), Bun/Node (Pi, Kimi) |
| **Release Philosophy** | Conservative; breaking changes gated (Copilot sandbox rename) | Experimental channels (Qwen nightly/preview, Codex alpha train, DeepSeek train) |
| **Differentiator** | **Trust & governance** (audit trails, policy enforcement, secret hygiene) | **Extensibility & protocol ownership** (ACP server, MCP Registry, RPC embedding) |

**Notable Outliers**:
- **OpenCode** straddles both: Go subscription billing + DeepSeek provider ownership + RTL/desktop polish.
- **Pi** targets **embedding/extensibility** (RPC sockets, server session backend, Mermaid rendering) over end-user CLI.
- **DeepSeek TUI** is **building its own Runtime API** (goal loops, verifier receipts, MCP/skill lifecycle) as a headless management layer.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Rapid Iteration** | **Qwen Code**, **OpenAI Codex**, **DeepSeek TUI**, **Pi** | Multi-channel releases (Qwen), 4 alphas/24h (Codex), 77-commit train (DeepSeek), 10 PRs closed/24h (Pi); high issue engagement (Linux desktop 917👍, Remote Control 24👍) |
| **Steady Enterprise Maturity** | **Claude Code**, **GitHub Copilot CLI**, **OpenCode** | Security-focused patching, breaking-change discipline, enterprise issue backlog (org agents, billing entity, GHE compaction), lower PR velocity but higher severity fixes |
| **Growing / Niche Focus** | **Gemini CLI**, **Kimi Code CLI** | Strong automation investment (Caretaker, ACP), but Windows/context-window ceilings limit adoption breadth; Kimi's Memory/Remote Control requests show clear product vision |

**Maturity Markers**:
- **Production hardening**: Claude (worktree isolation), Copilot (policy validation), OpenCode (RTL standardization)
- **Architectural bets**: Qwen (Tauri migration, deterministic trust boundary), DeepSeek (Runtime API surface), Pi (server session backend, RPC embedding)
- **Ecosystem pull**: Codex (Linux desktop 917👍), Kimi (Remote Control 24👍), OpenCode (usage API 126👍)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **ACP/MCP is the new plugin standard** | 7/9 tools actively fixing protocol gaps (tool exposure, Registry discovery, OAuth via RPC, SSE reliability) | **Invest in ACP/MCP compatibility** — tools without first-class support will fragment from IDE/editor ecosystems |
| **Windows is the litmus test for 2026** | Every tool has open Windows blockers (GPU crashes, WMI storms, IME input, path separators, MSIX, native crashes) | **Treat Windows CI as mandatory**; tools without native Windows maintainers will lag 6–12 months |
| **Session = first-class artifact** | Forking (Copilot), Remote Control (Kimi), Import (Codex), Transcript integrity (Claude, Qwen), Goal workflows (Qwen) | **Expect session portability APIs**; vendors locking history into proprietary formats will face churn |
| **Agent governance > agent features** | Hook bypasses (Claude), subagent contract drift (Claude, Gemini), `disable-model-invocation` (OpenCode), trust boundaries (Qwen), verifier receipts (DeepSeek) | **Procurement will require audit trails, policy enforcement, and deterministic tool authorization** — not just "agentic" demos |
| **Resource transparency is non-negotiable** | Memory leaks (Claude, Codex), GPU runaway (Codex), daemon bounds (Qwen), renderer profiling (OpenCode), build-time tax (DeepSeek) | **Observability hooks (OTel, custom metrics) will become table stakes** for enterprise adoption |
| **Multi-provider routing is commoditizing** | OpenCode (auto-switch 44👍), Qwen (Kimi/Xiaomi providers), DeepSeek (MCP Registry-first), Pi (Cortecs/LLM Gateway), Copilot (BYOK reasoning) | **Model-agnostic tooling wins**; single-provider lock-in (even Anthropic/OpenAI) is a strategic liability |

---

## Bottom Line for Decision-Makers

| If Your Priority Is… | Lean Toward |
|----------------------|-------------|
| **Enterprise compliance, Windows fleet, audit trails** | **Claude Code** or **GitHub Copilot CLI** (with policy management) |
| **Cutting-edge agent architecture, protocol ownership, embedding** | **Pi**, **DeepSeek TUI**, or **Qwen Code** |
| **Balanced production readiness + rapid iteration** | **OpenCode** (Go billing + DeepSeek control) or **Gemini CLI** (Caretaker evals) |
| **Linux/Unix-first power users, OSS community velocity** | **OpenAI Codex** (if Windows blockers resolve) or **Qwen Code** |
| **Cross-device continuity, mobile/remote workflows** |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-05 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator: fix run_eval.py 0% recall` | Fixes the skill-creator evaluation loop that incorrectly reports 0% recall for all skill descriptions, breaking the description-optimization pipeline (`run_loop.py`, `improve_description.py`). | 10+ independent reproductions; core blocker for skill authoring automation. | **Open** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic quality control for AI-generated documents: prevents orphan words, widow paragraphs, numbering misalignment. | Addresses universal pain point in Claude-generated docs; users rarely request good typography explicitly. | **Open** |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification + four-dimension reasoning audit (correctness, completeness, clarity, safety) before delivery. Universal across projects/stacks. | Novel "quality gate" approach; v1.3.0 includes damage-severity priority ordering. | **Open** |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing. | Covers full stack; philosophy-first design (what to test vs. not). | **Open** |
| 5 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility, gradients. | Deep domain skill; "what to use when" decision tables for color spaces. | **Open** |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument Format (.odt, .ods) creation, template filling, parsing to HTML via pyxel-mcp. | Triggers on ODT/ODS/ODF/LibreOffice mentions; ISO-standard document workflow. | **Open** |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro/pixel-art/8-bit game development with Python via pyxel-mcp MCP server. | Niche but active; iterative write→run→capture→inspect workflow. | **Open** |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (addresses #1417): prevents accumulation of stale plan files. | Community-identified gap: "planning artifacts accumulate with no lifecycle." | **Open** |

> **Note**: All top PRs remain **Open** as of 2026-08-05. The repository shows a pattern of active discussion but slower merge velocity for new skills.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Demand Signal |
|-------|-------------------|---------------|
| **Skill Distribution & Trust Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills masquerading under `anthropic/` namespace; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): Duplicate skills from `document-skills`/`example-skills` plugins | **High** — Namespace spoofing and deduplication are top security/UX concerns |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No org-wide sharing; manual file transfer via Slack/Teams required | **High** — Enterprise adoption blocker |
| **Skill Authoring Toolchain Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate; [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments): recall=0% on literal slash-commands; [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2👍): Windows subprocess/encoding failures | **Critical** — Core skill-creator pipeline broken on Windows and Unix |
| **Meta-Skills for Quality & Governance** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments): `agent-governance` proposal (policy enforcement, threat detection); [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments): Reasoning Quality Gate Pipeline; [#83](https://github.com/anthropics/skills/pull/83): `skill-quality-analyzer`, `skill-security-analyzer` | **Growing** — Community building skills to audit/improve other skills |
| **MCP Integration & Interop** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose Skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) (4 comments): Bedrock compatibility | **Emerging** — Demand for protocol-level interoperability |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects 156k tokens; [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` symbolic notation | **Rising** — Token efficiency becoming a skill design constraint |

---

## 3. High-Potential Pending Skills (Active Discussion, Not Yet Merged)

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` evaluation fix | **Blocker for all skill authoring**; 10+ reproductions; multiple dependent PRs (#1323, #1099, #1050) |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need; no existing solution; high practical impact per comment |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Novel quality-gate pattern; aligns with #1385 proposal; v1.3.0 suggests maturity |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive coverage; philosophy-first design matches community best practices |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Deep domain expertise; decision tables reduce ambiguity; self-contained |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Directly addresses community-identified lifecycle gap (#1417); credited collaboration |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Trivial fix (8 filename mismatches); breaks on case-sensitive FS; low risk |
| **[#541](https://github.com/anthropics/skills/pull/541)** | `docx` w:id collision fix | Prevents document corruption; root cause identified (shared OOXML ID space) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the broken skill-authoring toolchain (`skill-creator`/`run_eval.py`) to enable reliable skill creation, followed by organizational distribution mechanisms and meta-skills that govern skill quality—revealing a shift from "more skills" to "trustworthy skill infrastructure."**

---

*Report generated from public GitHub data. All links point to anthropics/skills repository.*

---

# Claude Code Community Digest — 2026-08-05

## Today's Highlights
Version **v2.1.222** shipped with critical security fixes: worktree-isolated sessions now properly block destructive git commands and file edits against the main checkout, and a PreToolUse hook bypass in background agent tasks was closed. The issue tracker shows heightened activity around **adaptive thinking rendering bugs** (text blocks silently dropped), **memory leaks** causing 15GB+ RAM consumption, and **Windows/MSIX instability** (GPU process crashes, WebGPU Code Integrity blocks). A notable community sentiment issue (#84002) signals growing frustration with task adherence and reliability.

---

## Releases

### v2.1.222
- **Security/Isolation**: Fixed worktree-isolated sessions and subagents executing destructive git commands against the main checkout; isolation now enforced for file edits and Bash across all session types.
- **Hook Security**: Fixed PreToolUse auto-allow hooks bypassing tool restrictions in background agent tasks.
- [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#62466](https://github.com/anthropics/claude-code/issues/62466) | **Repeated "Image couldn't be processed" API errors consuming usage limit** | Silent failures burn quota without user awareness; blocks vision workflows. | 30 comments, 20 👍 — high urgency for billing/quota impact. |
| [#74260](https://github.com/anthropics/claude-code/issues/74260) | **Assistant text blocks silently dropped when followed by thinking (adaptive thinking)** | Mid-turn text vanishes from transcript JSONL; breaks tooling, logging, and review. | 24 comments, 15 👍 — affects core TUI/bridge experience on `claude-fable-5`. |
| [#21378](https://github.com/anthropics/claude-code/issues/21378) | **🚨 CRITICAL: Memory leak → 15GB RAM consumption after 20+ min (WSL2/Linux)** | Process freeze forces restarts; severe for long-running agent sessions. | 8 comments, 12 👍 — "critical" label, reproducible on WSL2. |
| [#81275](https://github.com/anthropics/claude-code/issues/81275) | **Claude Desktop MSIX: Browser pane crashes GPU process (exit code 0x60C201E)** | Entire app dies on Browser pane open; affects Intel, NVIDIA, WARP. | 11 comments — blocks Windows Desktop browser workflows. |
| [#83130](https://github.com/anthropics/claude-code/issues/83130) | **Windows MSIX: WebGPU requestAdapter() → Code Integrity blocks vk_swiftshader.dll** | WebGPU fallback triggers CI block, crashes GPU process, wedges package. | 2 comments — deep platform/packaging issue. |
| [#23704](https://github.com/anthropics/claude-code/issues/23704) | **Read tool PDF support requires undocumented poppler-utils (pdftoppm)** | PDF reading fails silently in containers/CI; no install guidance or detection. | 15 comments, 19 👍 — long-standing (Feb), hurts containerized dev. |
| [#21108](https://github.com/anthropics/claude-code/issues/21108) | **Claude accesses git origin on startup before any commands** | Unexpected network call raises privacy/security concerns in air-gapped envs. | 13 comments, 15 👍 — startup telemetry surprise. |
| [#82131](https://github.com/anthropics/claude-code/issues/82131) | **Autocompact thrashing: context refilled to limit within 3 turns, 3× in a row** | Compaction loops waste tokens and degrade reasoning continuity. | 3 comments — emerging pattern with adaptive thinking. |
| [#82144](https://github.com/anthropics/claude-code/issues/82144) | **Post-compaction skill re-injection costs ~4× compaction summary (full bodies, truncated)** | Skill context explosion negates compaction savings; hurts long sessions. | 1 comment — architectural concern for skill-heavy workflows. |
| [#84002](https://github.com/anthropics/claude-code/issues/84002) | **User cancelling 2/3 plans: "Cannot keep Claude on task after 2 years trying"** | High-signal sentiment piece; captures reliability/task-adherence fatigue. | 0 comments (new) — stark qualitative feedback. |

---

## Key PR Progress (10 Active PRs)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | **fix(plugin-dev): limit frontmatter parsing** | Parse only opening YAML block; reject files missing closing `---` to prevent horizontal-rule interference. | Open |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | **fix(scripts): propagate top-level failures** | Duplicate-maintenance scripts now return failing exit codes; errors logged but output flushes. | Open |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | **fix(scripts): validate gh flag values** | Reject value-taking flags missing values (e.g., `gh issue list --limit`) in restricted wrapper. | Open |
| [#83995](https://github.com/anthropics/claude-code/pull/83995) | **fix(scripts): validate label option values** | `--add-label`/`--remove-label` now require a label name; prevents unbound variable aborts. | Open |
| [#83993](https://github.com/anthropics/claude-code/pull/83993) | **fix(scripts): reject self-referential duplicates** | `comment-on-duplicates.sh` no longer proposes an issue as duplicate of itself. | Open |
| [#83992](https://github.com/anthropics/claude-code/pull/83992) | **fix(plugin-dev): assert expected hook decision** | `test-hook.sh` adds `--expect allow|deny|ask` to catch hooks allowing denied operations. | Open |
| [#83990](https://github.com/anthropics/claude-code/pull/83990) | **fix(plugin-dev): report missing jq dependency** | `test-hook.sh` checks for `jq` before use; reports missing dep instead of false "invalid JSON". | Open |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | **Create pylint.yml** | Adds pylint CI configuration. | Open |
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | **docs(plugin-dev): document MessageDisplay streaming semantics** | Adds `MessageDisplay` hook event to bundled Hook Development skill docs (trigger, guidance, quick-ref). | Open |
| [#83738](https://github.com/anthropics/claude-code/pull/83738) | **Fix/83484 symlink path expansion** | `claude install` now expands `$HOME` in symlink target instead of literal `%h` placeholder (Linux). | Open |

> **Theme**: Today's PRs are almost exclusively **plugin/dev tooling hardening** (frontmatter parsing, hook testing, script validation, symlink fixes) — no core feature merges.

---

## Feature Request Trends (from Issues)

1. **Windows/MSIX Parity** — GPU/WebGPU stability, Chrome profile disambiguation (#74902), symlink handling (#83738), Browser pane crashes (#81275, #83130).
2. **Hook & Agent Governance** — Blocking internal `agent()` calls inside Workflows (#79953), per-subagent `effort:` frontmatter respect (#64706), hook decision assertions (#83992).
3. **Session/Context Control** — Autocompact tuning (#82131), skill re-injection cost reduction (#82144), `--continue` resume for `-p` sessions (#82536), project tag derivation from folder name (#81628).
4. **PDF/Document Reliability** — Poppler detection/install docs (#23704), false "password-protected" reports (#66563).
5. **Observability & Debugging** — Startup network call transparency (#21108), memory profiling (#21378), transcript fidelity for adaptive thinking (#74260).

---

## Developer Pain Points (Recurring Frustrations)

| Area | Signal |
|------|--------|
| **Reliability over Features** | #84002 encapsulates a cohort tired of "out-engineering" basic task adherence; memory leaks (#21378), silent drops (#74260), compaction thrashing (#82131) erode trust. |
| **Windows as Second-Class** | MSIX crashes (#81275, #83130), Bash tool EOF errors (#83243), Chrome profile confusion (#74905), symlink bugs (#83738) — consistent platform gap. |
| **Opaque Resource Consumption** | Image API errors burning quota (#62466), startup git calls (#21108), memory leaks (#21378), skill context explosion (#82144) — no visibility/control. |
| **Hook/Subagent Contract Drift** | Subagents ignoring frontmatter (`effort:` #64706), internal agent calls bypassing hooks (#79953), auto-allow bypass (fixed in v2.1.222) — governance gaps. |
| **Documentation-Implementation Gaps** | PDF deps (#23704), skill frontmatter schemas (#83981), hook events (#83374) — docs lag behavior, causing wasted debug time. |
| **Container/CI Friction** | Missing `poppler-utils`, broken symlinks, undocumented system deps — "works on my machine" but fails in ephemeral envs. |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-08-05 00:00 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-05

## 1. Today's Highlights

The Codex team shipped four rapid alpha releases (0.147.0-alpha.7 through 0.147.0-alpha.6.1) in the past 24 hours, signaling an active stabilization cycle. Meanwhile, Windows desktop users continue reporting systemic performance regressions—WMI storms, `taskkill.exe`/`conhost.exe` process leaks, and PowerShell polling causing system-wide input lag—with multiple high-engagement issues still open. On the feature side, Linux desktop support (#11023, 917 👍) and `/undo` restoration (#9203, 372 👍) remain the most-requested enhancements.

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.147.0-alpha.7` | Alpha | Latest in the 0.147.0 pre-release series |
| `rust-v0.147.0-alpha.6.4` | Alpha | Incremental patch |
| `rust-v0.147.0-alpha.6.3` | Alpha | Incremental patch |
| `rust-v0.147.0-alpha.6.1` | Alpha | Incremental patch |

> **Note**: Four alpha releases in 24 hours suggest active bug-fixing ahead of a stable 0.147.0. No changelogs attached to these release entries; watch the [releases page](https://github.com/openai/codex/releases) for consolidated notes.

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Linux desktop app** | Highest-voted open issue (917 👍); blocks adoption on Linux where macOS power issues (#10432) drive users away | 198 comments, 917 👍 |
| [#25719](https://github.com/openai/codex/issues/25719) | **macOS `syspolicyd`/`trustd` CPU/memory runaway** | Makes Codex nearly unusable on macOS; triggers system security daemons into runaway loops | 80 comments, 387 👍 |
| [#9203](https://github.com/openai/codex/issues/9203) | **Restore `/undo` command** | Critical for recovering from unintended file deletions/modifications outside git tracking | 68 comments, 372 👍 |
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU usage from tiny animation** | Wasteful GPU draw during "thinking" state; impacts battery/thermals on laptops | 38 comments, 46 👍 |
| [#30009](https://github.com/openai/codex/issues/30009) | **Windows `apply_patch` sandbox failure** | Blocks file edits on Windows; sandbox-related regression | 30 comments, 10 👍 |
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows `taskkill.exe`/`conhost.exe` process explosion** | 287+ orphaned processes per session; causes WMI storms & DWM degradation | 29 comments, 26 👍 |
| [#19425](https://github.com/openai/codex/issues/19425) | **Custom MCP stdio tools not exposed to Desktop threads** | Regression in 0.124.0-alpha.2; breaks MCP integration for desktop users | 28 comments, 5 👍 |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows PowerShell polling every second** | Spawns `powershell.exe` continuously → high CPU; systemic polling architecture issue | 23 comments, 6 👍 |
| [#30408](https://github.com/openai/codex/issues/30408) | **MCP server process leak (9+ GB RSS)** | Per-thread MCP processes never cleaned up; unbounded memory growth | 22 comments, 6 👍 |
| [#21079](https://github.com/openai/codex/issues/21079) | **Import Codex CLI sessions into Desktop history** | Parity with Claude Code import; users want unified history across CLI ↔ Desktop | 15 comments, 13 👍 |

## 4. Key PR Progress (Last 24h)

| # | PR | Category | Summary |
|---|----|----------|---------|
| [#37000](https://github.com/openai/codex/pull/37000) | Skill caching | **Cache freshness**: Keys skill snapshots by filesystem + plugin identity; coalesces concurrent loads to avoid stale plugin data |
| [#36998](https://github.com/openai/codex/pull/36998) | Tool search | **Deferred custom tools**: Includes freeform tools in tool-search index; serializes as Responses API `custom` tools |
| [#36993](https://github.com/openai/codex/pull/36993) | Thread pagination | **`includeTurns` support**: Reconstructs full projected turns from paginated history for legacy full-history reads |
| [#36992](https://github.com/openai/codex/pull/36992) | Model catalog | **Injectable model caches**: Adds `ModelsCache` contract; lets providers accept external cache implementations |
| [#36990](https://github.com/openai/codex/pull/36990) | Cleanup | **Removes legacy modes**: Deletes `PairProgramming`/`Execute` variants from `ModeKind`; simplifies to `Default`/`Plan` |
| [#36989](https://github.com/openai/codex/pull/36989) | Skill caching | **Preserves bundled skill caches**: Prevents disabled services from removing cache files still used by other processes |
| [#36987](https://github.com/openai/codex/pull/36987) | Exec server | **Opt-in concurrent dispatch**: Adds `--concurrent-requests` flag for local/remote exec-server connections |
| [#36986](https://github.com/openai/codex/pull/36986) | Auth/routing | **PSP routing for ChatGPT**: Adds `--psp` flag; attaches `oai-chat-psp=true` cookie to first-party ChatGPT requests |
| [#36984](https://github.com/openai/codex/pull/36984) | HTTP client | **ChatGPT cookie support**: Lets `HttpClientFactory` carry/share configured ChatGPT cookies across clones |
| [#36983](https://github.com/openai/codex/pull/36983) | MCP auth | **Trusted staging MCP servers**: Preserves ChatGPT auth for `chatgpt-staging.com` origins and subdomains |

> **Pattern**: Heavy investment in **caching infrastructure** (skills, models), **tool-search completeness**, **thread history pagination**, and **auth/routing hardening** for MCP + ChatGPT integrations.

## 5. Feature Request Trends

From the full 50-issue set, these directions dominate:

1. **Linux desktop parity** — #11023 (917 👍) is the single largest ask; users explicitly fleeing macOS due to power/performance issues
2. **Session resilience & recovery** — `/undo` (#9203), CLI history import (#21079), delete chats on macOS (#33589)
3. **MCP ecosystem maturity** — Tool exposure (#19425), process leaks (#30408), subagent model inheritance (#28719), staging auth (#36983 PR)
4. **Cross-platform polish** — RTL/BiDi Hebrew (#31903), alphabetical project sort (#27753), clickable file paths on Windows (#22585)
5. **Subagent/agent UX** — Writable child-agent chats (#34591), model/reasoning settings propagation (#28719), spawn_agent model support (#34700)

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Specific Complaints | Frequency |
|------|---------------------|-----------|
| **Windows desktop performance** | WMI Provider Host 100% CPU (#29499, #32562), `taskkill.exe`/`conhost.exe` leaks (#33776), PowerShell polling every second (#25453, #36025), system-wide mouse/input lag (#34158, #36176), sandbox freezes (#22912) | **8+ distinct issues** in top 30 |
| **macOS resource abuse** | `syspolicyd`/`trustd` runaway (#25719), GPU burn from trivial animation (#16857), sidebar broken in light mode (#23520) | 3 high-engagement issues |
| **MCP reliability** | Tools not exposed to threads (#19425), process leaks accumulating 9+ GB (#30408), subagents ignoring model settings (#28719) | 3+ issues |
| **Session management gaps** | No `/undo` (#9203), no chat deletion on macOS (#33589), CLI history not in Desktop (#21079), history loss on provider switch (#31625) | 4+ issues |
| **Sandbox/file ops on Windows** | `apply_patch` fails (#30009), ACL repair re-runs hang spawn >60s (#34889), writable-root inheritance issues | 2+ issues |

---

**Bottom line**: The 0.147.0 alpha train is moving fast, but Windows desktop stability is a systemic crisis (WMI/process leaks, polling architecture) needing architectural fixes—not incremental patches. Linux desktop and `/undo` are the clearest product gaps by community demand.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights
Security takes center stage with a critical fix for a shell variable expansion bypass (GHSA-wpqr-6v78-jr5g) merged in **PR #28691**, addressing a vulnerability in both Bash and PowerShell detection paths. Simultaneously, the team is advancing the **Caretaker Agent** automation pipeline with a new triage evaluation framework (**PR #28530**) and issue comment re-triage workflows. Core stability improvements target session compression corruption, quota fallback handling, and IDE detection hangs.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after MAX_TURNS reported as GOAL success | **P1 Bug**: Subagents silently report success when they actually hit turn limits, masking failures in multi-agent workflows. | 12 comments, 2 👍 — Active investigation, needs retesting |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely | **P1 Bug**: Generalist subagent causes hour-long hangs on simple tasks (folder creation); disabling subagents is the only workaround. | 8 comments, 8 👍 — High user impact, workstream rollup |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell command stuck at "Waiting input" after completion | **P1 Core**: CLI shows active shell awaiting input despite command completion; blocks interactive use. | 4 comments, 3 👍 — Needs retesting, medium effort |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** Robust component-level evaluations | **P1 EPIC**: Scaling behavioral evals (76 tests across 6 models) for reliable agent regression detection. | 7 comments — Strategic investment in eval infrastructure |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads, search, mapping | **P2 Feature**: Investigating AST tooling (tilth/glyph) to reduce token noise and turn count via precise code navigation. | 7 comments, 1 👍 — Linked to #22746 for implementation |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini underutilizes skills and sub-agents | **P2 Agent**: Model rarely invokes custom skills/sub-agents autonomously despite relevance; requires explicit instruction. | 6 comments — UX gap in agent delegation |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory retries low-signal sessions indefinitely | **P2 Bug**: Extraction agent skips low-signal sessions but leaves them unprocessed, causing repeated re-surfacing. | 5 comments — Memory system quality issue |
| **[#28418](https://github.com/google-gemini/gemini-cli/issues/28418)** Security: Variable expansion bypass in shell detection | **P1 Security (GHSA)**: `$VAR`/`${VAR}` patterns bypass command injection guards in `shell-utils.ts`. | 3 comments — **Fixed in PR #28691** |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser agent resilience: session takeover & lock recovery | **P3 Feature**: Current fail-fast on locked profiles breaks persistent sessions; needs automatic recovery. | 4 comments — Browser agent reliability |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | **P1 Bug**: Browser agent termination with GOAL reason but no actual success on Wayland displays. | 4 comments, 1 👍 — Platform-specific blocker |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| **[#28691](https://github.com/google-gemini/gemini-cli/pull/28691)** | OPEN | **Security Fix**: Blocks `$VAR`/`${VAR}` expansion bypass in `detectBashSubstitution`/`detectPowerShellSubstitution` (GHSA-wpqr-6v78-jr5g). Hardens automated dedup workflow. |
| **[#28689](https://github.com/google-gemini/gemini-cli/pull/28689)** | OPEN | **Core Reliability**: Unwraps nested `gaxios` streaming errors from `error.cause.message` to surface structured rate-limit/capacity errors correctly. |
| **[#28530](https://github.com/google-gemini/gemini-cli/pull/28530)** | OPEN | **Caretaker Evals**: Adds triage evaluation framework, LLM-as-a-Judge rubric, and parallel Git worktree benchmark runner for issue triage pipeline. |
| **[#28690](https://github.com/google-gemini/gemini-cli/pull/28690)** | CLOSED | **Caretaker Automation**: Processes `issue_comment` webhooks; enables `@caretaker-agent` mention and `/caretaker triage` slash command for re-triage. |
| **[#28671](https://github.com/google-gemini/gemini-cli/pull/28671)** | OPEN | **Context Integrity**: Fixes context corruption and model "autocomplete" behavior when tool executions are interrupted (quota fallbacks, ESC). |
| **[#28672](https://github.com/google-gemini/gemini-cli/pull/28672)** | OPEN | **Session/Quota Fixes**: Repairs `/compress` session reload failures and quota-fallback tool response loss that corrupted history. |
| **[#28681](https://github.com/google-gemini/gemini-cli/pull/28681)** | OPEN | **Model Flexibility**: Adds support for SGLang and local OpenAI-compatible endpoints (major extensibility for self-hosted models). |
| **[#28641](https://github.com/google-gemini/gemini-cli/pull/28641)** | OPEN | **UI Stability**: Prevents infinite loop in ghost text wrapping at narrow terminal widths (CJK/emoji); fixes #19985. |
| **[#28677](https://github.com/google-gemini/gemini-cli/pull/28677)** | OPEN | **Startup Hang Fix**: Adds 3s timeout to `IdeClient.getInstance()` process traversal, preventing TUI stall on "Initializing...". |
| **[#28597](https://github.com/google-gemini/gemini-cli/pull/28597)** | OPEN | **Config Load Order**: Loads `.env` files before resolving settings placeholders, fixing race condition in settings expansion. |

## 5. Feature Request Trends
1. **Agent Delegation Intelligence** — Multiple issues (#21968, #22093, #20195) request smarter autonomous skill/sub-agent invocation and respect for disabled agent settings.
2. **AST-Aware Code Navigation** — Epic #22745/#22746 drives investigation into structural code tools (tilth, glyph) to reduce token waste and improve precision.
3. **Evaluation & Observability** — Scaling component-level evals (#24353), subagent trajectory sharing (#22598), and Caretaker triage benchmarks (#28530) show investment in measurable quality.
4. **Memory System Hardening** — Auto Memory fixes (#26522, #26523, #26525) target deduplication, redaction safety, and invalid patch quarantine.
5. **Browser Agent Robustness** — Persistent session recovery (#22232), Wayland support (#21983), and settings override adherence (#22267) are recurring themes.

## 6. Developer Pain Points
- **Silent Agent Failures**: Subagents reporting success on turn limits (#22323) or hanging indefinitely (#21409) erode trust in multi-agent workflows.
- **Shell Integration Fragility**: "Waiting input" ghost state (#25166), interactive prompt hangs (#22465), and variable expansion bypasses (#28418) disrupt terminal UX.
- **Configuration Friction**: Symlinked agents ignored (#20079), settings load-order races (#28597), and browser agent ignoring `settings.json` (#22267).
- **Resource Leaks**: OAuth callback timeouts (#28678), IDE detection hangs (#28677), and ghost text infinite loops (#28641) cause startup/stall issues.
- **Opacity in Automation**: Lack of subagent context in bug reports (#21763) and invisible Auto Memory processing (#26522) hinder debugging.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-05

---

## 1. Today's Highlights

- **v1.0.79-1 released** with a breaking sandbox config change: `allowDevToolCaches` → `allowDevToolAccess` (now covers config/registries too; old key ignored silently, so prior `false` opt-outs revert to default-on).  
- **MCP initialization regression** in 1.0.79-1: CLI treats `server/discover` `-32602` from FastMCP as fatal, blocking valid servers.  
- **Security remediation PR** (#4366) opened by automation — requires manual secret rotation before merge.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.79-1** | **BREAKING**: Sandbox setting `allowDevToolCaches` renamed to `allowDevToolAccess` (grants dev-tool config & registries, not just caches). Old key no longer read; existing `false` values revert to default (on). Rename in settings to preserve opt-out. |

[View release](https://github.com/github/copilot-cli/releases/tag/v1.0.79-1)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Title | Area | Status | 👍 | Comments | Why It Matters |
|---|-------|------|--------|-----|----------|----------------|
| [#1504](https://github.com/github/copilot-cli/issues/1504) | Add custom theme support | theming-accessibility | OPEN | 23 | 8 | Highest-voted open issue; users want shareable JSON themes + `/theme create` workflow. |
| [#1697](https://github.com/github/copilot-cli/issues/1697) | Session forking — branch conversations with shared context | sessions, context-memory | OPEN | 25 | 3 | Strong demand for parallel workflows without losing context; 25 👍 signals high value. |
| [#1709](https://github.com/github/copilot-cli/issues/1709) | Auto-update plugins | plugins, installation | CLOSED | 29 | 1 | Most-upvoted issue overall; closed but indicates sustained pain around plugin lifecycle. |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | Org-level Agents not showing in CLI/VS Code | agents, enterprise | OPEN | 9 | 7 | Blocks enterprise adoption; agents created in `.github-private` invisible to tooling. |
| [#2019](https://github.com/github/copilot-cli/issues/2019) | Command to delete session from history | sessions | CLOSED | 13 | 2 | Basic session hygiene missing; closed but may need follow-up if not shipped. |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | MCP init fails when `server/discover` returns `-32602` | mcp, triage | OPEN | 0 | 1 | **Regression in 1.0.79-1** — breaks FastMCP and any server not implementing `server/discover`. |
| [#4361](https://github.com/github/copilot-cli/issues/4361) | Regression: `/plugin-skill` slash commands broken | plugins, triage | OPEN | 0 | 1 | Skills invoked via slash now fire doomed RPC instead of rewriting to natural language. |
| [#4349](https://github.com/github/copilot-cli/issues/4349) | Managed settings policy rejects valid `"enable"` enum | enterprise, configuration, mcp | OPEN | 0 | 1 | Enterprise policy validation too strict; blocks **all** local/custom MCP servers. |
| [#4005](https://github.com/github/copilot-cli/issues/4005) | "Copilot billing entity isn't selected" blocks memory | enterprise, context-memory | OPEN | 3 | 4 | Enterprise users cannot save memories despite working setup; regression since v1.0.65. |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | Ctrl+H misinterpreted as Ctrl+Backspace under WSL2 | input-keyboard, platform-windows | OPEN | 0 | 5 | Terminal escape leakage (`WT_SESSION`) breaks documented keybinding; affects WSL2 developers. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#4366](https://github.com/github/copilot-cli/pull/4366) | ACTION REQUIRED: Fundamental security findings resolution | vault-chatops[bot] | OPEN | Automated security remediation; requires replacing `<UPDATE_ME>` secrets in CI/production before merge. |
| [#4355](https://github.com/github/copilot-cli/pull/4355) | Merge | XavierMP14 | OPEN | Minimal description; likely internal merge or dependency update — review for scope. |

> Only 2 PRs updated in last 24h — low velocity; focus appears on issue triage and security patching.

---

## 5. Feature Request Trends (from all Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Session & context portability** | #1697 (forking), #1947 (cloud sync), #2019 (delete), #4334 (stash loss) | Developers treat sessions as first-class artifacts — want branching, sync, hygiene. |
| **Extensibility & plugin maturity** | #1709 (auto-update), #4048 (repo-level skills invisible), #4361 (slash command regression) | Plugin ecosystem growing but tooling (discovery, update, invocation) lags. |
| **Enterprise readiness** | #1285 (org agents), #4005 (billing entity), #4349 (policy validation) | Adoption blocked by auth/policy/visibility gaps in managed environments. |
| **Customization & BYO** | #1504 (themes), #4139 (custom LLMs), #4196 (BYOK reasoning_content) | Strong pull for user-controlled models, UI, and provider flexibility. |
| **Terminal/Platform polish** | #4328 (WSL2 keys), #4267 (DA1 leak), #4352 (OSC 9;4 opt-out), #3898 (OSC 11 colors) | Cross-terminal rendering and input handling remain fragile. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **MCP fragility** — New `server/discover` requirement (#4370) breaks compat with spec-compliant servers; no fallback or graceful degradation.
2. **Enterprise config rigidity** — Enum validation rejects valid values (`"enable"` vs `"disable"`), silently disabling features (#4349).
3. **Session data loss** — Stashed prompts vanish on session switch (#4334); no cloud sync (#1947) or fork (#1697) despite high demand.
4. **Plugin invocation broken** — Slash commands for repo-installed skills regressed to failed RPC calls (#4361, #4048).
5. **Windows/WSL2 terminal bugs** — Keybinding conflicts (#4328), escape sequence leaks (#4267), and native crashes (#4026) persist across versions.
6. **Memory/billing disconnect** — Enterprise users lose memory features due to billing entity detection failure (#4005) despite valid licenses.
7. **Security debt surfacing** — Automated PR (#4366) reveals secret management gaps requiring immediate manual intervention.

---

*Digest generated from github/copilot-cli data as of 2026-08-05. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-05

## 1. Today's Highlights
No new releases in the past 24 hours. Community focus centers on **agent reliability at scale** (context-window degradation past ~500K tokens), **Windows stability** (abnormal exits, IME input duplication), and **ACP protocol maturity** (model discovery, permission switching). Two long-standing feature requests—**Memory System** and **Remote Control**—remain highly active with 29 combined comments and 24 👍.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#2586](https://github.com/MoonshotAI/kimi-cli/issues/2586)** Agent reliability degrades at high context fill (~500K tokens) | Core reliability blocker for long-running agentic workflows; manifests as repetitive loops, no escalation, instruction drift. **Closed** same-day—likely triaged or duplicated. | 1 comment, 0 👍 (fresh report) |
| **[#2587](https://github.com/MoonshotAI/kimi-cli/issues/2587)** CLI exits abnormally during normal session (Windows, v0.29.2, K3 high) | Immediate stability concern on Windows; includes screenshot evidence. Affects paying users on default model. | 0 comments, 0 👍 (new, needs triage) |
| **[#2584](https://github.com/MoonshotAI/kimi-cli/issues/2584)** Thai/IME character duplication in prompt (Windows 11, v0.31.1) | Blocks non-Latin input on Windows; indicates terminal/input-layer regression. | 0 comments, 0 👍 |
| **[#2583](https://github.com/MoonshotAI/kimi-cli/issues/2583)** ACP: advertise available models & support mid-session switching | Unblocks mobile/IDE clients (Happy Coder, Zed) from dynamic model selection—key for ACP ecosystem adoption. | 0 comments, 0 👍 |
| **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)** Memory System: persistent context across sessions | Top-voted long-term ask (17 comments); enables project-level continuity, user preferences, AI-managed notes. | 17 comments, 0 👍 |
| **[#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)** Remote Control: continue local session from any device | High engagement (24 👍, 12 comments); addresses mobile/remote workflow continuity—strong differentiation vector. | 12 comments, **24 👍** |

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)** `fix(shell): adapt timeouts for long commands` | Open (updated Aug 4) | Auto-extends shell timeout for slow patterns (git submodule, clone/fetch, package installs, builds) while keeping 60s default. Reduces false failures in CI/large repos. |
| **[#2585](https://github.com/MoonshotAI/kimi-cli/pull/2585)** `feat(cli): set AI_AGENT for subprocesses` | Open (created/updated Aug 4) | Propagates `AI_AGENT=kimi` to child processes from both pip/uv and standalone entrypoints; respects explicit wrapper values. Enables downstream tooling to detect Kimi context. |
| **[#2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)** `feat(acp): support permission mode switching` | Open (updated Aug 4, stacks on #2363) | Implements protocol-level ACP permission mode switching; resolves #1414. Required for fine-grained approval flows in IDE/mobile clients. |

## 5. Feature Request Trends
1. **Session Persistence & Portability** — Memory System (#1283) + Remote Control (#1282) = demand for *stateful, cross-device workflows*.
2. **ACP Ecosystem Maturity** — Model discovery (#2583), permission switching (#2364), and now subprocess marking (#2585) show concerted effort to make Kimi a first-class ACP provider.
3. **Scale & Reliability** — Context-window degradation (#2586) signals users pushing agentic loops to production scale; expect more “long-context” hardening requests.

## 6. Developer Pain Points
- **Windows instability**: Two fresh bugs (#2587 crash, #2584 IME duplication) on latest Windows 11 builds—suggests terminal/input regression in recent CLI versions.
- **Context-window ceiling**: ~500K token reliability cliff (#2586) forces session splitting or manual context management.
- **ACP feature gaps**: Clients cannot list/switch models mid-session (#2583) or negotiate permission modes without PR #2364.
- **Long-running command handling**: Shell timeouts still bite on legitimate slow operations (git, builds)—PR #2200 addresses but not yet merged.

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-04 to 2026-08-05). Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-05

## Today's Highlights
OpenCode released **v1.18.13** with TUI and Desktop bugfixes, notably resolving RTL layout regressions across tabs, drawers, and titlebars. The community is heavily focused on **DeepSeek V4 Flash issues** — multiple reports of blank responses, 403 errors, and model version mismatches (serving V3.2 instead of V4 Flash 0731) on the Go subscription tier. A major performance PR (#40427) demonstrates **75.5% renderer memory reduction** in experimental benchmarks.

---

## Releases
### v1.18.13
**TUI**: GitHub PR reviews now include PR number and URL in context.  
**Desktop**: Fixed RTL layout issues across tabs, drawers, resizing, and titlebar interactions; standardized shared RTL UI behavior including directional icons.  
[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.13)

---

## Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) **Go plan usage/balance API endpoint** | Top-voted feature (126 👍, 29 comments). Developers need programmatic access to subscription usage for monitoring, billing alerts, and CI/CD integration. | 🔥 **High demand** — 126 👍, active discussion since March |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) **DeepSeek V4 Flash requires "Enable models hosted in China" opt-in mid-session** | Breaking change mid-session blocks Go subscribers. Raises data residency/compliance concerns for enterprise users. | 22 👍, 15 comments — urgent for affected users |
| [#40485](https://github.com/anomalyco/opencode/issues/40485) **deepseek-v4-flash returns 403/hangs; other models work on same key** | Provider-specific failure on Go plan. Suggests routing or model deployment issue, not auth. | 6 👍, 6 comments — reproducible across Desktop + TUI |
| [#40409](https://github.com/anomalyco/opencode/issues/40409) **Go `deepseek-v4-flash` serves V3.2 (cutoff 2025-05), not V4 Flash 0731** | Model version mismatch with billing implications. Users paying for latest model receive outdated version. | 5 comments — high severity (billing/quality mismatch) |
| [#40483](https://github.com/anomalyco/opencode/issues/40483) **DeepSeek v4 Flash Free returns blank response on Windows 11 Desktop** | Thinking animation completes, sound plays, but zero output rendered. Platform-specific regression. | 7 comments — blocks Windows users on free tier |
| [#34498](https://github.com/anomalyco/opencode/issues/34498) **Respect `disable-model-invocation: true` in SKILL.md frontmatter** | Parity with Claude Code/Cline. Needed for skills that orchestrate tools without direct LLM calls. | 48 👍, 9 comments — strong community consensus |
| [#8456](https://github.com/anomalyco/opencode/issues/8456) **Auto model selection by task type** | Core agentic workflow feature. Competitors (Cursor, Cline) support configurable routing. | 44 👍, 10 comments — long-standing request (since Jan) |
| [#40516](https://github.com/anomalyco/opencode/issues/40516) **Desktop: provider/model/MCP fail to load on startup (80% failure rate, v1.18.5+)** | Version regression making app unusable for orgs. v1.18.4 works; all later versions broken. | 2 comments — critical blocker for teams |
| [#38723](https://github.com/anomalyco/opencode/issues/38723) **`opencode run` intermittently hangs at init (56% failure rate)** | CI/CD automation blocker. Zero output, no error, requires external timeout. | 1 👍, 4 comments — high impact for headless workflows |
| [#40171](https://github.com/anomalyco/opencode/issues/40171) **Go `/v1/responses` emits incomplete SSE stream (missing `output_item.added`, `content_part.added`)** | Breaks Codex-style clients expecting OpenAI Responses API compliance. | 2 👍, 3 comments — API compatibility issue |

---

## Key PR Progress
| PR | Type | Summary |
|----|------|---------|
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | **Perf (beta)** | Experimental renderer improvements: **75.5% initial memory reduction** (7.45 MB → 1.82 MB) via immutable DB snapshot + fixed corpus profiling. |
| [#40552](https://github.com/anomalyco/opencode/pull/40552) | **Core fix** | Avoid eager directory snapshots during ripgrep indexing — large repos now materialize directories only on demand. |
| [#40542](https://github.com/anomalyco/opencode/pull/40542) | **Core fix** | Report missing shell workdir as curated `ToolFailure` instead of generic `NotFound`; adds regression test. |
| [#40545](https://github.com/anomalyco/opencode/pull/40545) | **CLI fix** | Add model attribution to `run --format json` step events (`step_start`/`step_finish`) for token/cost tracking. |
| [#40551](https://github.com/anomalyco/opencode/pull/40551) | **TUI feat** | Streamline tab navigation: `Option+Up/Down` (prev/next), `Option+Shift+Up/Down` (unread), `Ctrl+Shift+Tab`/`Ctrl+Tab` — matches Slack/Mattermost. |
| [#40538](https://github.com/anomalyco/opencode/pull/40538) / [#40537](https://github.com/anomalyco/opencode/pull/40537) | **Auth fix** | Replace xAI loopback OAuth with RFC 8628 device flow — works locally/remotely, removes PKCE/CORS/callback complexity. |
| [#40535](https://github.com/anomalyco/opencode/pull/40535) | **Core fix** | Retry empty incomplete streams only while output guard confirms no model output started; classifies as `incomplete-stream`. |
| [#40541](https://github.com/anomalyco/opencode/pull/40541) | **LLM fix** | Parse `cache_creation_tokens` from OpenAI-compat `prompt_tokens_details` — fixes cache write tracking behind proxies (LiteLLM). |
| [#40487](https://github.com/anomalyco/opencode/pull/40487) | **Core cleanup** | Retire legacy provider aliases (Azure Cognitive Services, Google Vertex Anthropic); migrate V1 IDs in config, agents, commands. |
| [#40543](https://github.com/anomalyco/opencode/pull/40543) | **Docs** | Add RTL development skill: logical CSS, bidi isolation, directional interactions, portaled menus, native titlebar constraints + test matrix. |

---

## Feature Request Trends
1. **Model routing & selection** — Auto-switch by task type (#8456, 44 👍), per-skill model disable (#34498, 48 👍), configurable defaults.
2. **Subscription transparency** — Programmatic usage/balance API (#16017, 126 👍), real-time quota visibility.
3. **API compatibility** — OpenAI Responses API compliance (#40171), OpenAI-compat proxy support (#40541), SSE stream completeness.
4. **IDE integration depth** — VS Code context awareness (#22235, #40540), selection/active tab awareness.
5. **Platform parity** — Flatpak auto-update gating (#39670), macOS Ctrl+D confirmation (#40510), Windows Desktop stability.

---

## Developer Pain Points
| Area | Recurring Themes |
|------|------------------|
| **DeepSeek V4 Flash on Go plan** | 5+ issues in 24h: blank responses, 403s, wrong model version (V3.2 vs V4 Flash 0731), China hosting opt-in prompt mid-session. Affects both free and paid tiers. |
| **Desktop app startup reliability** | Provider/model/MCP load failure (~80% rate) since v1.18.5 (#40516); ECONNREFUSED loop on clean install (#40525); version regression confirmed. |
| **Headless/CI automation** | `opencode run` hangs at init with zero output (#38723, 56% failure); incomplete SSE breaks Codex clients (#40171); no structured error codes for scripting. |
| **TUI/terminal UX** | Copy/paste broken in tmux/kitty (#36646); RTL fixes shipped but directional interactions still fragile; tab navigation shortcuts inconsistent. |
| **Model provider opacity** | No visibility into which upstream model version is served (#40409); cache token accounting broken behind proxies (#40541); malformed tool call handling varies by provider (#40549, #40547, #40546). |

---

*Digest generated from github.com/anomalyco/opencode data as of 2026-08-05. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-05

## Today's Highlights
The Pi ecosystem is heavily focused on **enterprise Copilot compaction fixes** (multiple 421/400 errors on GHE.com), **Windows compatibility gaps** (find tool, skill loading, terminal rendering), and **extensibility infrastructure** (RPC over sockets, server session backend, Mermaid rendering). A new server-side session backend landed, enabling durable JSONL persistence with crash recovery, while several provider integrations (Cortecs, LLM Gateway) were added.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#6768](https://github.com/earendil-works/pi/issues/6768)** Compaction broken on Copilot Enterprise (421 Misdirected Request) | Blocks enterprise users from using `/compact`; summarization drops resolved `baseUrl` | 19 comments, 18 👍 — high urgency for enterprise seats |
| **[#7547](https://github.com/earendil-works/pi/issues/7547)** Windows strategy discussion | "Gazzilion developers on Windows" — need clarity on supported runtimes (WSL, native, bun, node) vs. community-maintained paths | 12 comments — meta-issue guiding prioritization |
| **[#7413](https://github.com/earendil-works/pi/issues/7413)** Compaction fails on GHE.com — "unknown stamp" error | Enterprise compaction fails with `invalid token: unknown stamp "prod-cus-01"`; normal chat works | 6 comments — related to #6768, different error surface |
| **[#7553](https://github.com/earendil-works/pi/issues/7553)** Configurable thinking level for compaction | Auto-compaction on reasoning models burns thinking budget inseparable from normal turns | 6 comments — PR #7602 addresses this |
| **[#6817](https://github.com/earendil-works/pi/issues/6817)** `find` tool broken on Windows for `src/**/*.ts` patterns | Path separator handling in `find.ts` breaks glob patterns with directories | 5 comments — core tooling gap on Windows |
| **[#7465](https://github.com/earendil-works/pi/issues/7465)** iTerm2 inline images missing `size` param | `@xterm/addon-image@0.9.0` silently rejects images without `size=<bytes>` | 7 comments — PR #7612 fixes |
| **[#7508](https://github.com/earendil-works/pi/issues/7508)** OAuth refresh stalls hold credential-store lock ~5 min | Flaky network during token refresh freezes entire session (cross-process lock) | 5 comments — critical reliability issue |
| **[#7594](https://github.com/earendil-works/pi/issues/7594)** `node:sqlite` missing in release binary | Extensions using `node:sqlite` (e.g., `pi-total-recall`) fail to load | 4 comments — packaging regression |
| **[#7395](https://github.com/earendil-works/pi/issues/7395)** JSON mode quadratic output on every delta | Each `message_update` serializes full cumulative assistant state → stdout drain | 3 comments — performance regression in `--mode json` |
| **[#7628](https://github.com/earendil-works/pi/issues/7628)** 0.83.0 shrinkwrap pins vulnerable `undici@8.5.0`, `brace-expansion@5.0.7` | Supply-chain risk; patched versions available (`undici@8.9.0`, `brace-expansion@5.0.8/5.0.9`) | 1 comment — security hygiene |

---

## Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| **[#7396](https://github.com/earendil-works/pi/pull/7396)** | CLOSED | **Server session backend** — durable JSONL persistence, exclusive cross-process locking, crash recovery, protocol snapshots, live transcript progress |
| **[#7571](https://github.com/earendil-works/pi/pull/7571)** | CLOSED | **Cortecs provider** — European AI router (OpenRouter-style) backed by models.dev |
| **[#7610](https://github.com/earendil-works/pi/pull/7610)** | OPEN | **LLM Gateway providers** — OpenRouter-style router as built-in `openai-completions` providers (replaces auto-closed #7480) |
| **[#7602](https://github.com/earendil-works/pi/pull/7602)** | OPEN | **Configurable summarization models** — separate model/thinking-level for compaction & branch summaries; handles context-window limits (closes #7553) |
| **[#7612](https://github.com/earendil-works/pi/pull/7612)** | OPEN | **iTerm2 image `size` param** — includes decoded byte count in OSC 1337 for `@xterm/addon-image@0.9.0` compatibility (fixes #7465) |
| **[#7599](https://github.com/earendil-works/pi/pull/7599)** | CLOSED | **RPC over sockets** — `--listen` for Unix/TCP sockets + `connectAddress` option for `RpcClient` |
| **[#7621](https://github.com/earendil-works/pi/pull/7621)** | CLOSED | **RPC argument completions** — `get_argument_completions` command for embedded clients (e.g., pi-livecraft) |
| **[#7619](https://github.com/earendil-works/pi/pull/7619)** | OPEN | **Resume failed turn via `/tree`** — selecting errored assistant entry retries the turn; error stays in history |
| **[#7626](https://github.com/earendil-works/pi/pull/7626)** | CLOSED | **SQLite backend tests owned by storage package** — focused migration, adapter, corruption, lease, FTS, resource-cleanup coverage |
| **[#7624](https://github.com/earendil-works/pi/pull/7624)** | OPEN | **Mermaid diagram rendering** — uses `grok-mermaid` library (closes #7623) |

---

## Feature Request Trends
1. **Enterprise Copilot parity** — compaction, model listing (Grok 4.5), auth token handling, baseUrl preservation
2. **Windows first-class support** — find tool glob patterns, skill loading, terminal keybindings, fullscreen mode quirks
3. **Extensibility & embedding** — RPC over sockets, argument completions, provider auth via RPC, server session backend
4. **Observability & debugging** — `version` showing runtime (bun/node/deno), structured JSON output fixes, OAuth error sanitization
5. **Rendering richness** — Mermaid diagrams, iTerm2/xterm.js image compliance, scrollable diffs in fullscreen

---

## Developer Pain Points
- **Compaction is unreliable on enterprise Copilot** — multiple distinct errors (421, 400 unknown stamp, dropped baseUrl) block a core workflow
- **Windows tooling gaps** — `find` with path separators, `ignore` lib crashes on recursive skill dirs, fullscreen keybinding conflicts
- **Session freezes during auth refresh** — credential-store lock held for ~5 min on stalled OAuth; no request timeout
- **Extension breakage from missing built-ins** — `node:sqlite` absent from release binary breaks `pi-total-recall` and others
- **JSON mode performance** — quadratic serialization on every delta makes `--mode json` unusable for long sessions
- **Security hygiene** — pinned vulnerable dependencies in shrinkwrap (`undici`, `brace-expansion`)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-05

---

## 1. Today's Highlights

Qwen Code shipped **v0.21.5 stable** with a macOS migration bridge from Electron to Tauri and granular tool-call outcome tracking. The preview channel (v0.21.6-preview.0) adds browser-extension readiness diagnostics and headless Goal workflow docs. Meanwhile, the issue tracker shows strong community focus on **agent runtime trust boundaries** (#8102, 17 comments), **daemon resource accounting** (#8051, 9 comments), and **session transcript integrity** (#8356, 5 comments).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.5** | Stable | • Opt-in one-time update bridge for macOS Electron → Tauri migration ([#8392](https://github.com/QwenLM/qwen-code/pull/8392))<br>• Detailed execution-specific outcome tracking for tool calls |
| **v0.21.6-preview.0** | Preview | • Browser extension: alpha readiness diagnostics ([#6739](https://github.com/QwenLM/qwen-code/pull/6739))<br>• Docs: headless Goal workflows documentation |
| **v0.21.5-nightly.20260805** | Nightly | Same as v0.21.5 stable + latest nightly fixes |
| **v0.21.4-nightly.20260804** | Nightly | • Desktop: Electron→Tauri bridge ([#8392](https://github.com/QwenLM/qwen-code/pull/8392))<br>• Web-shell: table dialog fix |

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#8102](https://github.com/QwenLM/qwen-code/issues/8102)** Deterministic tool-execution boundaries for trustworthy agent runtime | Foundational architecture proposal: keep LLM outside trust boundary, enforce deterministic authorization/observation of model actions | **17 comments** — highest engagement; signals strong demand for production-grade agent safety |
| **[#8519](https://github.com/QwenLM/qwen-code/issues/8519)** Severe flickering in tmux (CLOSED) | Terminal rendering regression affecting daily workflow in multiplexers | **11 comments** — rapid closure suggests quick fix; high visibility for terminal UX |
| **[#8051](https://github.com/QwenLM/qwen-code/issues/8051)** Bound multi-workspace daemon resource usage | Daemon lacks byte-level bounds on request bodies, WebSocket assembly, session memory | **9 comments** — critical for hosted/serving deployments; "daemon" label |
| **[#8136](https://github.com/QwenLM/qwen-code/issues/8136)** Provider warning sanitizer truncates at port, leaks passwords with `@` | Security bug: credential sanitization fails on URLs containing ports or `@` in passwords | **6 comments** — security scope; affects `/status` payload integrity |
| **[#8356](https://github.com/QwenLM/qwen-code/issues/8356)** `APIUserAbortError` causes subsequent turns to not write to session transcript | Session continuity break after abort; impacts debugging, resume, audit trails | **5 comments** — session-management roadmap; affects Windows + ACP bridge |
| **[#8493](https://github.com/QwenLM/qwen-code/issues/8493)** Cancelled file tools (`write_file`, `edit`) still mutate filesystem | Async prep work continues after abort signal; data-loss/corruption risk | **5 comments** — core safety issue; "ready-for-agent" label |
| **[#8532](https://github.com/QwenLM/qwen-code/issues/8532)** CI logs show mocked "disk full" errors as runner ENOSPC | Test noise masquerades as infrastructure failure; erodes CI trust | **5 comments** — CI/CD hygiene; already has fix PR [#8549](https://github.com/QwenLM/qwen-code/pull/8549) |
| **[#8550](https://github.com/QwenLM/qwen-code/issues/8550)** `qwen mcp list` hangs indefinitely on unresponsive SSE server | No timeout on legacy SSE `endpoint` event; blocks CLI startup | **4 comments** — MCP reliability; "ready-for-agent" label |
| **[#8533](https://github.com/QwenLM/qwen-code/issues/8533)** `Content[]`/`Part[]` cannot encode per-provider reasoning-replay contracts | Foundational type-system limitation for multi-provider reasoning fidelity | **4 comments** — core architecture; "need-discussion" label |
| **[#8458](https://github.com/QwenLM/qwen-code/issues/8458)** Goal completion channel locked due to evidence directory truncation | Headless/automated workflows hit hard truncation limits | **3 comments** — automation/Goal workflow blocker; "need-retesting" |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Type | Summary |
|----|------|---------|
| **[#8482](https://github.com/QwenLM/qwen-code/pull/8482)** | Fix (core) | Never-delivered MCP call treated as first delivery, not replay — fixes deterministic test failure since replay-safety gate ([#8387](https://github.com/QwenLM/qwen-code/pull/8387)) |
| **[#8414](https://github.com/QwenLM/qwen-code/pull/8414)** | Fix (webui) | Recovers complete turns after live journal truncation; adds authoritative prompt ownership markers to truncation metadata |
| **[#8459](https://github.com/QwenLM/qwen-code/pull/8459)** | Fix (review) | Evidence images admitted by magic-byte content sniffing (PNG/JPEG/GIF/WEBP), not filename — eliminates extension spoofing |
| **[#8305](https://github.com/QwenLM/qwen-code/pull/8305)** | Feat (cli) | Inline terminal image rendering for model/tool `inlineData` — extends #8217 infrastructure to interactive CLI |
| **[#8471](https://github.com/QwenLM/qwen-code/pull/8471)** | Feat (review) | Cost ledger built from on-disk records — enables post-hoc forensic cost analysis (e.g., 523 calls / 37.8M tokens for +93/-48 PR) |
| **[#8498](https://github.com/QwenLM/qwen-code/pull/8498)** | Perf (review) | Retires dry chunks & pipelines reverse-audit verification — targets main latency bottleneck in large-PR reviews |
| **[#8496](https://github.com/QwenLM/qwen-code/pull/8496)** | Feat (web-shell) | Read-only commands (`/stats`, `/about`, `/context`) execute immediately mid-turn instead of being swallowed |
| **[#8461](https://github.com/QwenLM/qwen-code/pull/8461)** | Feat (channels) | GitHub Channels reuse host `gh auth login` credential via `useLocalGh` opt-in; PAT remains highest priority |
| **[#8443](https://github.com/QwenLM/qwen-code/pull/8443)** | Fix (cli) | Ctrl+click hyperlinks & right-click context menu restored in Virtual Viewport mode (SGR mouse tracking) |
| **[#8368](https://github.com/QwenLM/qwen-code/pull/8368)** | Feat (auth) | Adds Kimi (Coding Plan, CN/Intl API keys) and Xiaomi MiMo (pay-as-you-go, CN/SG/US regions) as first-class providers |

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Agent runtime trust & determinism** | [#8102](https://github.com/QwenLM/qwen-code/issues/8102) (17💬), [#8533](https://github.com/QwenLM/qwen-code/issues/8533) | High — architectural direction for enterprise/production |
| **ACP/IDE integration parity** | [#8544](https://github.com/QwenLM/qwen-code/issues/8544) (task list in JetBrains), [#8514](https://github.com/QwenLM/qwen-code/issues/8514) (reasoning effort tiers), [#8513](https://github.com/QwenLM/qwen-code/issues/8513) (usage_update) | Growing — JetBrains ACP adoption driving gaps |
| **Session/transcript integrity** | [#8356](https://github.com/QwenLM/qwen-code/issues/8356), [#8535](https://github.com/QwenLM/qwen-code/issues/8535) (resume reconstructs dangling thought hazard) | Persistent — affects resume, audit, debugging |
| **Daemon resource governance** | [#8051](https://github.com/QwenLM/qwen-code/issues/8051), [#8182](https://github.com/QwenLM/qwen-code/issues/8182) (memory not divided by child count) | Critical for `qwen serve` multi-tenancy |
| **MCP robustness** | [#8550](https://github.com/QwenLM/qwen-code/issues/8550) (SSE hang), [#8492](https://github.com/QwenLM/qwen-code/issues/8492) (metadata hot-reload stale registrations) | Rising — MCP becoming core extension surface |
| **Localization** | [#8551](https://github.com/QwenLM/qwen-code/issues/8551) (Korean docs), [#8552](https://github.com/QwenLM/qwen-code/pull/8552) (PR ready) | Steady — community-driven expansion |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Edit tool reliability** | High (historical + current) | [#2460](https://github.com/QwenLM/qwen-code/issues/2460) (4💬, closed but cites "destroyed all projects"), [#8493](https://github.com/QwenLM/qwen-code/issues/8493) (cancelled edits still mutate) |
| **Terminal rendering in tmux/multiplexers** | High | [#8519](https://github.com/QwenLM/qwen-code/issues/8519) (11💬, flickering), VP mode mouse/hyperlink regressions ([#8443](https://github.com/QwenLM/qwen-code/pull/8443)) |
| **Session resume/continuity breaks** | Medium-High | [#8356](https://github.com/QwenLM/qwen-code/issues/8356) (abort loses transcript), [#8455](https://github.com/QwenLM/qwen-code/pull/8455) (resume hint lost on alternate buffer teardown), [#8535](https://github.com/QwenLM/qwen-code/issues/8535) (resume reconstructs fixed hazard) |
| **CI noise / false alarms** | Medium | [#8532](https://github.com/QwenLM/qwen-code/issues/8532) (mocked disk-full logs), [#8476](https://github.com/QwenLM/qwen-code/issues/8476) (release quality job failure) |
| **Provider/auth edge cases** | Medium | [#8136](https://github.com/QwenLM/qwen-code/issues/8136) (sanitizer leaks), [#8504](https://github.com/QwenLM/qwen-code/issues/8504) (update prompt loops with custom models), [#8527](https://github.com/QwenLM/qwen-code/issues/8527) (wrapped timeouts drop retry codes) |
| **Goal/automation truncation limits** | Emerging | [#8458](https://github.com/QwenLM/qwen-code/issues/8458) (evidence dir truncation locks completion channel) |

---

*Generated from GitHub data as of 2026-08-05. Links point to live issues/PRs on [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-05

## 1. Today's Highlights
The v0.9.4 release train (#5135) is actively integrating 77 commits ahead of main, while a parallel wave of build-performance issues (#5249, #5248, #5245, #5247, #5246) exposes the growing cost of the 682k-line `codewhale-tui` monolith. Meanwhile, silent-failure bugs in model context handling (#5244, #5239) and file editing (#5209) are degrading UX, and the Runtime API surface expands rapidly with 6 new endpoint groups merged this cycle.

---

## 2. Releases
**No new releases in the last 24h.**  
v0.9.4 is in the integration train (#5135), superseding #5044.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) **Anthropic API `type` validation error on OpenModel** | Breaks compatibility with Anthropic-compatible providers; intermittent but frequent. | 6 comments, open since 07-30 |
| [#4991](https://github.com/Hmbown/CodeWhale/issues/4991) **Compilation times & TUI crate monolith** | Core developer velocity blocker; 682k-line crate recompiles as one unit. | 4 comments, active discussion |
| [#4955](https://github.com/Hmbown/CodeWhale/issues/4955) **Zero-sandbox / `--no-sandbox` mode** | Kernel Seatbelt breaks basic shell commands; workarounds exhausted. | 4 comments, 1 👍 |
| [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) **File edit silently accepts wrong params** | Returns fake success on `new_str` vs `replace`; causes 3–5× re-edits. | 3 comments |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) **Unknown model IDs silently fall back to 128K context** | 1M-window models compact at 128K with no warning; residual from #5239. | Filed by maintainer (Hmbown) |
| [#5239](https://github.com/Hmbown/CodeWhale/issues/5239) **Model supports 1M context but compresses at 128K** | User-visible context window mismatch; screenshot evidence attached. | 1 comment |
| [#5241](https://github.com/Hmbown/CodeWhale/issues/5241) **Pricing endpoint 503 → all sessions `unverified_live_pricing`** | Cost display broken since 0.9.3 upgrade across all providers. | 1 comment |
| [#5249](https://github.com/Hmbown/CodeWhale/issues/5249) **Epic: v0.9.5 build-time lane** | Umbrella for monolith tax: edit-compile, commit, test, release loops. | Filed by maintainer |
| [#5248](https://github.com/Hmbown/CodeWhale/issues/5248) **Shrink 708-package dep graph** | 10+ deps at multiple versions; 95 build scripts, 52 proc-macros serialized. | Filed by maintainer |
| [#5245](https://github.com/Hmbown/CodeWhale/issues/5245) **Git commit forces full TUI/CLI rebuild** | Build script watches git ref for SHA stamp; invalidates on every local commit. | Filed by maintainer |

---

## 4. Key PR Progress

| PR | Summary | Impact |
|----|---------|--------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) **v0.9.4 release train** | 77 commits integrating 18 train commits + follow-ups. | Next stable release |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) **Resume interrupted subagents from checkpoint** | `agents/followup` on `interrupted_continuable` children now works; long tasks recover. | Agent reliability |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) **ACP: expose file/search/git/patch/shell tools** | `session/prompt` now executes tool calls; enables Zed/ACP bridges full code editing. | Editor integration |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) **Runtime API: persistent goal-loop state** | `GET /v1/threads/{id}/goal`, `POST .../goal/complete`, `POST .../goal/cancel`. | Managed client control |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) **Runtime API: verifier receipts & evidence** | `/v1/fleet/runs/{run_id}/receipts`, `/evidence`, `/tasks` — granular failure data. | Fleet observability |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) **Runtime API: memory endpoints** | Bounded inspection + lifecycle controls for active memory under `/v1/memory`. | State management |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) **Runtime API: MCP server lifecycle** | `POST/PATCH/DELETE /v1/apps/mcp/servers` — no more TOML editing for managed clients. | Config automation |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) **Runtime API: skill lifecycle** | Install, update, uninstall, trust, audit via HTTP — parity with TUI. | Skill management |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) **Surface real wait elapsed time in tool content** | `duration_ms` moved from metadata to content; model sees actual stall duration. | Agent polling behavior |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) **MCP Registry discovery + Registry-first tool selection** | `registry_sync` fetches zero-env stdio servers; model prefers Registry over `exec_shell`. | Tool selection quality |

---

## 5. Feature Request Trends
1. **Build-performance overhaul** — 5 maintainer-filed issues (#5249, #5248, #5245, #5247, #5246) target the monolith crate, dep graph bloat, forced rebuilds, test binary explosion, and fat-LTO pre-push gate.
2. **Runtime API completion** — 6 PRs (#5129–#5133, #5130) add goal, verifier, memory, MCP, skill, and thread endpoints — moving toward full headless manageability.
3. **Model context transparency** — #5244 and #5239 demand explicit signaling when context windows fall back to legacy defaults.
4. **Sandbox escape hatch** — #4955 requests `--no-sandbox` for local dev; kernel Seatbelt breaks daily workflows.
5. **MCP Registry as default tool source** — #5238 shifts tool selection to public Registry before custom shells.

---

## 6. Developer Pain Points
- **Compile-time tax**: 682k-line monolith crate (86% of workspace) recompiles on every edit, commit, and test run; git commit SHA stamp forces full rebuild (#5245).
- **Dependency bloat**: 708 packages, 10+ at multiple versions, 95 build scripts + 52 proc-macros serialized on clean build (#5248).
- **Test latency**: 25 integration-test binaries each link full TUI graph + dev deps (#5247).
- **Profile mismatch**: Shipping `release` profile (fat LTO, 1 codegen unit) used as pre-push gate (#5246).
- **Silent failures**: File tool accepts wrong params (#5209), model context degrades silently (#5244), pricing endpoint 503 hides cost data (#5241).
- **Provider friction**: Anthropic-compatible APIs reject requests on `type` enum (#4978); OAuth login doesn’t auto-adopt minted token (#5243).
- **Sandbox breakage**: Seatbelt blocks basic shell commands; no zero-sandbox escape (#4955).

---

*Generated from GitHub data for Hmbown/DeepSeek-TUI (CodeWhale) — 2026-08-05 00:00 UTC*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*