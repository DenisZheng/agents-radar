# AI CLI Tools Community Digest 2026-08-10

> Generated: 2026-08-10 01:13 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-10)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **intense feature convergence** around session persistence, multi-agent orchestration, and MCP (Model Context Protocol) integration, while **reliability gaps** dominate community discourse across all major tools. No tool shipped a stable release in the last 24 hours; only Gemini CLI and Qwen Code published nightly builds. The ecosystem is in a **consolidation phase**: vendors are hardening core loops (compaction, tool calling, session resume) and expanding extensibility surfaces (hooks, skills, plugins, remote protocols) rather than launching headline features. Enterprise readiness—Windows stability, org-level model governance, cross-platform sync—remains the primary differentiator between market leaders and challengers.

---

## 2. Activity Comparison

| Tool | Repository | Issues Updated (24h) | PRs Updated (24h) | Release Status | Top Community Signal (👍) |
|------|------------|---------------------|-------------------|----------------|---------------------------|
| **Claude Code** | anthropics/claude-code | 10 (high-severity cluster) | 4 (1 merged, 3 open) | None | #28745: 76 👍 (dir-coupled sessions) |
| **OpenAI Codex** | openai/codex | 10 | 6 (5 closed, 1 open) | None | #17827: 150 👍 (customizable status line) |
| **Gemini CLI** | google-gemini/gemini-cli | 10 | 10 (6 open, 4 closed) | **v0.56.0-nightly** | #21409: 8 👍 (generalist agent hangs) |
| **GitHub Copilot CLI** | github/copilot-cli | 10 (surge filed 08-09) | 0 | None | #1857: 26 👍 (cancel queued messages) |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 2 | 1 (open) | None | #1283: 27 comments (memory system) |
| **OpenCode** | anomalyco/opencode | 10 | 10 (multiple merged) | None | #4283: 110 👍 (copy to clipboard broken) |
| **Pi** | earendil-works/pi | 10 (7 closed, 3 open) | 10 (9 closed, 1 open) | None | #6922: 14 👍 (llama.cpp default model) |
| **Qwen Code** | QwenLM/qwen-code | 10 | 10 (multiple merged) | **v0.21.8-nightly** | #7118: 3 👍 (Windows installer) |
| **DeepSeek TUI** | Hmbown/CodeWhale | 10 | 4 (3 merged release prep) | v0.9.6 **prepared** | #3205: 13 comments (Fleet architecture) |

**Key Observations:**
- **OpenCode, Pi, Qwen Code, DeepSeek TUI** show highest PR velocity (10 PRs each), indicating active iteration cycles.
- **GitHub Copilot CLI** stands out with **zero PR activity** despite a surge of 10 critical issues filed on 08-09—suggesting a triage bottleneck.
- **Claude Code** and **OpenAI Codex** lead in community engagement depth (76👍 and 150👍 on top issues).
- Only **Gemini CLI** and **Qwen Code** shipped nightly builds; **DeepSeek TUI** has a release candidate staged.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Session Persistence & Portability** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Qwen Code, DeepSeek TUI | Resume across directories/worktrees (Claude #28745), cross-platform sync (Codex #5609, Claude #81658), durable archival (OpenCode #39358), large-restore timeout safety (Qwen #8678), fork reliability (Claude #85008, Copilot #4423). |
| **MCP Ecosystem Hardening** | All 9 tools | Inbound notifications (Codex #15299), handshake timeout/retry (Copilot #4421, Qwen #8784), tool discovery refresh (Claude #66084), streamable HTTP edge cases (Qwen #8784), OAuth 3LO (Copilot #4371). |
| **Multi-Agent / Subagent Orchestration** | Claude Code, Gemini CLI, OpenCode, Qwen Code, DeepSeek TUI, Pi | Recursive delegation (Gemini #28738), unified task surface (DeepSeek #5270), native coordination RFC (Qwen #8718), Fleet/subagent parity (DeepSeek #4022), agent-team runtime (Qwen #8804). |
| **Model Resilience & Routing** | OpenAI Codex, OpenCode, DeepSeek TUI, Pi, Qwen Code | Cross-model fallback (OpenCode #7602), provider-agnostic reasoning (OpenCode #27361), streaming toggle for proxies (OpenCode #785), sequential policy enablement (Pi #7851), auto-switch on rate limits (Copilot #4416). |
| **TUI/CLI Parity & Polish** | OpenCode, DeepSeek TUI, Pi, Qwen Code, Gemini CLI | Copy-to-clipboard (OpenCode #4283), page navigation (Pi #7865), approval dialog defaults (DeepSeek #5293), fork UX (DeepSeek #576), web terminal flicker (Qwen #8659), shell command spinner (Gemini #25166). |
| **Enterprise/Org Governance** | GitHub Copilot CLI, OpenAI Codex, Pi, Qwen Code | Managed settings race conditions (Copilot #4419), org-repo remote resolution (Copilot #2751), Copilot model-policy rate limits (Pi #7851), enterprise context profiles (Qwen #7585, #7449). |
| **Safety/Permission System Trust** | Claude Code, Gemini CLI, OpenCode, GitHub Copilot CLI | Classifier false positives (Claude 12+ ClAudit issues), denied-tool execution (Claude #83760), policy engine bugs (Gemini #26540), parallel tool correlation (Copilot #4420). |

---

## 4. Differentiation Analysis

| Dimension | Market Leaders (Claude Code, OpenAI Codex, GitHub Copilot CLI) | Challenger / Specialized (Gemini CLI, OpenCode, Qwen Code, Pi, DeepSeek TUI, Kimi) |
|-----------|---------------------------------------------------------------|-------------------------------------------------------------------------------------|
| **Target User** | Professional/enterprise developers, teams needing IDE integration, cross-platform sync | Power users, OSS contributors, local-first/privacy-focused, multi-model experimenters |
| **Technical Approach** | Proprietary backends, managed services, tight IDE/vendor lock-in | Open-core / OSS, bring-your-own-model (BYOM), local model support (llama.cpp, Ollama), protocol-first (ACP, MCP) |
| **Session Model** | Cloud-synced, account-bound, directory-coupled (pain point) | Local-first, file-based (AGENTS.md, wire.jsonl), worktree-aware, daemon-backed |
| **Extensibility** | Plugins/skills (Claude), MCP servers (all), limited hooks | Rich hook systems (OpenCode Pre/Post/Stop), agent skills spec (Gemini, OpenCode), custom providers (Pi, Qwen), recursive subagents (Gemini, DeepSeek) |
| **Enterprise Features** | SSO, org policies, audit logs, managed models (native) | Emerging: external memory profiles (Qwen), sequential policy enablement (Pi), managed-settings fail-closed (Copilot) |
| **Platform Gaps** | **Windows instability** (Codex, Copilot), **Apple remote control** (Claude), **mobile SSH** (Codex) | **Windows installer** (Qwen), **Wayland browser agent** (Gemini), **IME/Windows TUI** (DeepSeek), **Linux GPU/llama.cpp** (Pi, DeepSeek) |

**Notable Differentiators:**
- **OpenCode**: Only tool with **worktree-based workspace switching** (#36052) and **durable session archival** (#39358) as first-class primitives.
- **Pi**: First to ship a **transport-neutral remote-session protocol package** (@earendil-works/pi-protocol, #7344).
- **DeepSeek TUI**: Unique **subtractive runtime philosophy** (v0.9.6 removes mailbox freezing, compaction complexity) and **Fleet loadout auto** unified model routing.
- **Qwen Code**: Leading **multi-agent coordination RFC→implementation** pipeline (#8718 → #8804) and **enterprise context provider profiles**.
- **Gemini CLI**: Most aggressive **evaluation infrastructure investment** (76 behavioral evals across 6 model variants, #24353).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum & Maturity** | **Claude Code**, **OpenAI Codex** | Highest 👍 counts (76, 150), longest issue histories, enterprise adoption signals, dedicated security/model-lineage PRs (Claude #85409). |
| **High Momentum, Rapid Iteration** | **OpenCode**, **Pi**, **Qwen Code**, **Gemini CLI** | 10 PRs/24h each, frequent nightlies (Gemini, Qwen), architectural refactors landing (OpenCode renderer -75% memory, Pi protocol package), strong contributor engagement. |
| **Critical Reliability Sprint** | **GitHub Copilot CLI** | 10 critical regressions filed in 24h (MCP, models, sessions), **zero PR response**—indicates triage overload or release-gate blockage. |
| **Niche / Early Stage** | **Kimi Code CLI**, **DeepSeek TUI** | Low issue/PR volume but deep technical discourse (Kimi: 27-comment memory RFC; DeepSeek: 13-comment Fleet architecture). DeepSeek v0.9.6 signals maturity inflection. |

**Maturity Signals:**
- **Claude Code** and **OpenAI Codex** show **feature-parity requests** (status line, hooks, localization) rather than core gaps.
- **OpenCode**, **Pi**, **Qwen Code** demonstrate **infrastructure investment** (renderer perf, protocol packages, eval harnesses, CI watchdogs).
- **GitHub Copilot CLI**'s silence on PRs despite critical regressions is an **anti-signal** for near-term reliability.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence Across Tools | Strategic Implication |
|-------|----------------------|----------------------|
| **MCP as Universal Integration Layer** | 8/9 tools actively hardening MCP (handshake, notifications, tool discovery, transport) | **Adopt MCP-first architecture** for custom tooling; expect MCP to become the de facto plugin standard. |
| **Local-First & BYOM Acceleration** | OpenCode, Pi, DeepSeek, Qwen, Gemini all support local models (llama.cpp, Ollama); Pi caches llama.cpp catalog; DeepSeek builds Fleet around local routing | **Reduce vendor lock-in risk**; evaluate tools on local-model ergonomics, not just cloud model quality. |
| **Session = Portable Artifact** | AGENTS.md (Claude), wire.jsonl (Kimi), archived sessions (OpenCode), daemon resume (Qwen), protocol snapshots (Pi) | **Design workflows around session portability**; directory-coupled sessions are a legacy anti-pattern. |
| **Multi-Agent as Default, Not Advanced** | Recursive subagents (Gemini), Fleet (DeepSeek), Agent Teams (Qwen), coordination RFCs (Qwen, OpenCode) | **Plan for agent orchestration** in automation pipelines; single-agent CLIs will feel limiting within 6–12 months. |
| **Evaluation-Driven Development** | Gemini 76 evals/6 models, Qwen deterministic workflow engine, OpenCode renderer benchmarks, Pi CBOR protocol tests | **Demand eval transparency** from vendors; tools without component-level behavioral CI will accumulate silent regressions. |
| **Windows as Tier-1 Blockers** | Codex (6 Windows issues/24h), Copilot (MCP/WSL), Qwen (installer), DeepSeek (IME), Gemini (Wayland) | **Validate Windows workflows end-to-end** before team rollout; macOS/Linux parity is not guaranteed. |
| **Enterprise Governance Gaps** | Copilot managed-settings race, Codex org-model visibility, Pi Copilot rate-limits, Qwen external-memory specs | **Audit org-policy enforcement** in your candidate tools; "Enterprise" labels ≠ production-grade governance today. |

---

## Recommendation Summary

| Priority | Action |
|----------|--------|
| **Immediate** | Stress-test **MCP server resilience** (timeouts, retries, OAuth) in your environment—every tool has open bugs here. |
| **Short-term** | Pilot **OpenCode** or **Qwen Code**

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-10)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py` | Core infrastructure fix: repairs `run_eval.py` recall reporting (0% bug), Windows stream reading, trigger detection, parallel workers | Referenced in **#556** (12 comments, 7 👍) and **#1169** (3 comments); blocks description-optimization loop | **Open** (updated 2026-06-23) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic QC for AI-generated docs: prevents orphans, widows, numbering misalignment | Addresses universal pain point — "users rarely ask for good typography but suffer from its absence" | **Open** (updated 2026-03-13) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification + 4-dimension reasoning quality gate (v1.3.0); universal across stacks | Novel "pre-delivery audit" pattern; Step 0 verifies file existence before reasoning audit | **Open** (updated 2026-07-02) |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Trophy model, AAA, React Testing Library, contract, E2E, property-based, mutation | Covers full stack; positions testing as first-class skill rather than ad-hoc guidance | **Open** (updated 2026-04-21) |
| 5 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) create, fill, read, convert; triggers on ODT/ODS/ODF/LibreOffice mentions | Fills open-standard document gap; complements existing docx/pdf skills | **Open** (updated 2026-04-14) |
| 6 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills: 5-dim quality scoring (structure, examples, resources, triggers, safety) + security scanning | Enables marketplace quality gates; security analyzer detects prompt injection, excessive perms | **Open** (updated 2026-01-07) |
| 7 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces, accessibility, harmony, conversion | Domain-specialist skill; "what to use when" tables for OKLCH/OKLAB/CAM16 | **Open** (updated 2026-07-21) |
| 8 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro game dev via Pyxel MCP: write → run_and_capture → inspect → iterate loop | Niche but complete workflow; demonstrates MCP-integrated skill pattern | **Open** (updated 2026-07-15) |

> **Note**: PR comment counts are unavailable (`undefined`); ranking inferred from cross-referenced Issues, update recency, and architectural significance.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue #, Comments, 👍) | Description |
|-------|----------------------------------|-------------|
| **Skill Distribution & Trust Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) | Community skills published under `anthropic/` namespace impersonate official skills — critical trust boundary vulnerability |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) | Native sharing within organizations; avoid manual .skill file transfer via Slack/Teams |
| **Core Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 💬, 1 👍) | `run_eval.py` / `run_loop.py` broken: 0% recall on all queries; blocks skill-creator optimization loop |
| **Duplicate Skill Installation** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) | `document-skills` + `example-skills` plugins install identical content → context window pollution |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬), [#12](https://github.com/anthropics/skills/issues/12) (4 💬, 1 👍) | `claude-api` skill injects ~156k tokens; docx skill whitespace corruption |
| **MCP Exposure & Bedrock Support** | [#16](https://github.com/anthropics/skills/issues/16) (4 💬), [#29](https://github.com/anthropics/skills/issues/29) (4 💬) | Skills as MCP servers; AWS Bedrock compatibility |
| **Agent Governance & Reasoning Quality** | [#412](https://github.com/anthropics/skills/issues/412) (6 💬, closed), [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬) | Policy enforcement, threat scoring, audit trails; 3-gate quality pipeline (calibration → adversarial review → verification) |
| **Compact Memory / State Management** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) | Symbolic notation for compact agent state to reduce context burn |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` core fixes | Blocks the entire description-optimization pipeline; 3+ Issues reference it; Windows + trigger detection + parallel workers |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows subprocess/encoding fixes | Complementary 1-line fixes for `claude.cmd` and pipe reading; unblock Windows contributors |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | Trigger detection isolation | Fixes eval command files polluting live project registry (parallel eval corruption) |
| **[#1261](https://github.com/anthropics/skills/pull/1261)** | Eval isolation from live registry | Same root cause as #1323; prevents concurrent session interference |
| **[#539](https://github.com/anthropics/skills/pull/539)** | YAML frontmatter validation | Pre-parse catch for unquoted `description:` with colons — prevents silent truncation |
| **[#541](https://github.com/anthropics/skills/pull/541)** | DOCX `w:id` collision fix | Prevents document corruption when tracked changes meet existing bookmarks |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Addresses 25% community health score; single highest-impact doc addition |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Addresses #1417 (planning artifact lifecycle gap); credited community design |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is fixing the broken skill-creator evaluation pipeline (0% recall, Windows incompatibility, registry pollution) to enable reliable skill authoring, while simultaneously demanding trust-safe distribution (namespace isolation, org sharing) and context-window-efficient skill execution.**

---

# Claude Code Community Digest — 2026-08-10

## Today's Highlights
No new releases in the past 24 hours. The community is actively discussing a **wave of safety-classifier false positives** (Opus 4.8/5 flagging benign engineering content as cybersecurity threats), **session persistence bugs** across Desktop/Web/Android, and **remote-control rendering failures** on iPad/macOS browsers. A PR updating default model references to Opus 5/Sonnet 5 signals the model lineup transition is underway.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#67246](https://github.com/anthropics/claude-code/issues/67246) | **Safety classifier (Fable 5 → Opus 4.8) switches models on benign content; `/model` override broken** | Mid-session model swaps disrupt workflows; no user override exists. Affects all macOS users on Fable 5. | 12 comments, 3 👍 — users report frequent false triggers during normal engineering discussions. |
| [#28745](https://github.com/anthropics/claude-code/issues/28745) | **Allow resuming conversations from different directories** | Conversations tied to original directory; broken when worktrees deleted or paths renamed. | **76 👍**, 11 comments — highest-voted open issue; critical for git-worktree workflows. |
| [#85240](https://github.com/anthropics/claude-code/issues/85240) | **Remote Control: responses never render until manual refresh (iPad Safari/Chrome, macOS Safari)** | Complete breakage of browser-based remote control on Apple devices; every response requires reload. | 5 comments, 0 👍 — reproduces across 3 browser/OS combos; blocks mobile/remote workflows. |
| [#81658](https://github.com/anthropics/claude-code/issues/81658) | **Cross-platform sync failure: Cowork conversations/chats disappear (Desktop/Web/Android)** | Suspected server-side incident causing data loss across all platforms. | 4 comments, 3 👍 — users report missing transcripts; high severity for collaborative work. |
| [#31413](https://github.com/anthropics/claude-code/issues/31413) | **UI language localization support** | No i18n support; blocks adoption in non-English-speaking teams. | 13 comments, 8 👍 — long-standing request (open since Mar 2026); active discussion on implementation approach. |
| [#85008](https://github.com/anthropics/claude-code/issues/85008) | **VSCode: forking copies conversation but new tab stays blank; fork invisible in session list** | Forking (key workflow for branching conversations) silently fails in v2.1.226. | 2 comments — regression from earlier closed issues; occurs even when idle. |
| [#81100](https://github.com/anthropics/claude-code/issues/81100) | **Desktop: 30-day retention sweep deletes only transcript copy → ghost entries** | Data-loss vector: pinned/important sessions become unopenable placeholders. | 2 comments — distinct from CLI data-loss issues; Desktop-specific retention logic flaw. |
| [#83760](https://github.com/anthropics/claude-code/issues/83760) | **Denied tool call executed anyway (PowerShell ran despite "deny")** | Safety-critical: permission system bypassed; tool runs after explicit user denial. | 2 comments — high severity for trust/safety; affects terminal CLI v2.1.221. |
| [#66084](https://github.com/anthropics/claude-code/issues/66084) | **`tools/list_changed` doesn't refresh deferred-tool index in interactive sessions** | MCP tool discovery breaks after dynamic tool registration; carve-out from older fixed issues. | 4 comments, 2 👍 — repro on v2.1.165; blocks dynamic plugin/tool workflows. |
| [#85375–#85392](https://github.com/anthropics/claude-code/issues/85375) | **ClAudit false-positive wave (12+ issues filed Aug 9)**: Opus 4.8/5 flags defensive-hardening, cloud-IAM, general engineering talk as cyber threats | **Coordinated false-positive storm** — session-halting blocks on legitimate ops work (DNS logs, AD FS, Graph API, skill paths). | Each 1 comment — same author filing patterned reports with Request IDs; suggests systemic classifier regression. |

---

## Key PR Progress (All 4 Updated PRs)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#85409](https://github.com/anthropics/claude-code/pull/85409) | **security-guidance: update default model refs from Opus 4.7/Sonnet 4.6 → Opus 5/Sonnet 5** | Updates hardcoded model strings in README + `llm.py` (`SECURITY_REVIEW_MODEL`, fallback). | Signals official model lineage transition; plugin maintainers should align. |
| [#85323](https://github.com/anthropics/claude-code/pull/85323) | **fix(plugin-dev): parse block scalar agent descriptions** | Fixes YAML `|` / `>` block scalar parsing in `validate-agent.sh`; measures indented content not scalar marker. | Unblocks multi-line agent descriptions; follow-up to #83803. |
| [#85243](https://github.com/anthropics/claude-code/pull/85243) | **fix(skills): use spec-conformant names in plugin-dev & hookify skills** | Renames 8 bundled skills from title-cased spaced names (e.g., `"Writing Hookify Rules"`) to spec-conformant identifiers. | Improves skill discoverability & tooling compatibility; reduces parsing ambiguity. |
| [#17395](https://github.com/anthropics/claude-code/pull/17395) | **[Plugin] Add `agent-session-commit` plugin to incrementally iterate on `AGENTS.md`** | Introduces `AGENTS.md` as authoritative instructions file; `CLAUDE.md` becomes pointer. Adds Stop-hook prompt for session commits. | **Closed** (merged/stale?); establishes project-instruction pattern now used in plugin ecosystem. |

---

## Feature Request Trends (From All 50 Issues)

1. **Session Portability & Persistence** — Resume across directories (#28745, 76 👍), fork reliability (#85008), ghost-entry prevention (#81100), cross-platform sync (#81658).
2. **Safety Classifier Control** — Override model switches (#67246), reduce false positives (12+ ClAudit issues), allow per-project tuning.
3. **UI/UX Maturity** — Localization/i18n (#31413), pinned-session protection (#62104), remote-control rendering (#85240).
4. **MCP/Plugin Ecosystem** — Tool index refresh (#66084), plugin version resolution (#82712), skill naming spec compliance (#85243).
5. **Hook Reliability** — MessageDisplay hook output ignored (#83957), denied-tool execution (#83760), session-commit automation (#17395).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Safety classifier over-blocking** | 12+ ClAudit false-positive issues in 24h; model-switch without override (#67246) | **Critical** — multiple daily reports |
| **Session data loss / ghost entries** | Retention sweep deletes only copy (#81100); sync loses Cowork chats (#81658); fork creates blank tabs (#85008) | **High** — 4+ distinct reports |
| **Remote control broken on Apple devices** | Zero-render until refresh across iPad Safari/Chrome + macOS Safari (#85240) | **High** — blocks mobile workflows |
| **Directory-coupled conversations** | Cannot resume after worktree delete/rename (#28745, 76 👍) | **High** — top-voted enhancement |
| **Permission system bypass** | Denied tool executes anyway (#83760) | **Critical** — trust/safety |
| **MCP tool discovery stale** | `tools/list_changed` doesn't refresh index (#66084) | **Medium** — blocks dynamic tools |
| **No UI localization** | English-only UI blocks global teams (#31413) | **Medium** — long-standing |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-08-10. Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-10

## 1. Today's Highlights
No new releases shipped in the last 24 hours. Community focus remains on **desktop app stability on Windows** (multiple crash-loop and WSL/terminal regressions), **thread-switching performance** on macOS, and **MCP notification support** for CLI sessions. A high-profile feature request for a **customizable status line** (150 👍) continues to gather momentum.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#17827** | [Customizable status line](https://github.com/openai/codex/issues/17827) | Parity with Claude Code; users want real-time token usage, model name, git branch, rate limits in TUI. | **150 👍, 39 comments** — strongest community signal in dataset |
| **#11011** | [Thread switching very slow](https://github.com/openai/codex/issues/11011) | Core workflow regression on macOS desktop app; affects Pro users daily. | **19 👍, 21 comments** |
| **#15299** | [Inbound MCP notifications into CLI](https://github.com/openai/codex/issues/15299) | Unblocks event-driven workflows (CI, webhooks, agents) pushing into running Codex sessions. | **14 👍, 15 comments** |
| **#23527** | [Mobile doesn’t show SSH remotes from Mac host](https://github.com/openai/codex/issues/23527) | Breaks remote-development workflow across Codex Mobile ↔ Mac ↔ SSH chain. | **19 👍, 13 comments** |
| **#37398** | [5s owner-discovery timeout on unloaded chats](https://github.com/openai/codex/issues/37398) | Perceived latency bug; actual thread load <200ms but UI blocks on fallback. | **6 👍, 6 comments** |
| **#37104** | [WSL integrated terminal silently fails on Windows](https://github.com/openai/codex/issues/37104) | Blocks Windows developers using WSL; PTY startup regression in 26.730.8199.0. | **1 👍, 6 comments** |
| **#37752** | [Desktop app crash loop ~25s after launch on Windows](https://github.com/openai/codex/issues/37752) | **Critical regression** — app unusable on Windows 11 26.803.41515; CLI works fine. | **0 👍, 2 comments** (new, high severity) |
| **#37595** | [Computer Use `list_windows` fails with EnumWindows 0x80070003](https://github.com/openai/codex/issues/37595) | Computer Use feature broken on Windows; interrupt marker path missing. | **0 👍, 5 comments** |
| **#5609** | [Sync chats across ChatGPT web, VS Code, Codespaces](https://github.com/openai/codex/issues/5609) | Cross-platform conversation continuity; high-value for multi-device developers. | **63 👍, 6 comments** |
| **#33163** | [CLI reuses dead WebSocket after network loss](https://github.com/openai/codex/issues/33163) | Transport resilience gap; breaks next turn after idle network interruption. | **0 👍, 2 comments** |

---

## 4. Key PR Progress (All 6 PRs Updated in Last 24h)

| # | PR | Type | Summary |
|---|----|------|---------|
| **#37747** | [Bound Cursor project path resolution](https://github.com/openai/codex/pull/37747) | Perf/Fix | Replaces recursive directory walk with bounded candidate probes for Cursor project resolution. **Closed.** |
| **#31817** | [Update models.json](https://github.com/openai/codex/pull/31817) | Maintenance | Automated model registry update. **Open.** |
| **#37745** | [Add gRPC TCP transport to code-mode host](https://github.com/openai/codex/pull/37745) | Feature | Enables `grpc://IP:PORT` endpoints via `--listen`; prints bound HTTP endpoint for port discovery. **Closed.** |
| **#37723** | [Report I/O subtypes for session config import failures](https://github.com/openai/codex/pull/37723) | DX/Error Handling | Adds `std::io::ErrorKind` categories (`invalid_data`, `not_found`, `permission_denied`) to failure subtypes. **Closed.** |
| **#37709** | [Keep wrapped composer whitespace with following text](https://github.com/openai/codex/pull/37709) | TUI Polish | Grapheme-safe wrapping prevents orphaned blank rows in composer overflow. **Closed.** |
| **#37654** | [Advertise environment config read support](https://github.com/openai/codex/pull/37654) | Capability | Adds `environmentConfigRead` exec-server capability for local executors; defaults false for legacy. **Closed.** |

> **Note:** 5 of 6 PRs closed in the last 24h — indicates a batch of polish/fix merges. The gRPC TCP transport (#37745) is the most consequential for extensibility.

---

## 5. Feature Request Trends (from all Issues)

1. **TUI/CLI Parity with Competitors** — Status line customization (#17827), keyboard navigation completeness (#37004), composer UX polish (#37709).
2. **Cross-Platform Conversation Sync** — Unified history across ChatGPT Web, VS Code, Codespaces, Desktop (#5609, 63 👍).
3. **MCP as Universal Integration Layer** — Inbound notifications (#15299), model alias mapping for gateways (#21594), sub-agent steering (#33885).
4. **Automation Resilience** — Missed-run catch-up for scheduled automations (#24327), goal auto-continuation loop guard (#34248).
5. **Windows-First Reliability** — WSL/PTY stability (#37104, #37599), Computer Use fixes (#37281, #37595, #37734), SQLite vacuum (#35823).
6. **Mobile ↔ Desktop ↔ Remote Continuity** — SSH project visibility on mobile (#23527), remote thread resume (#37403).

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence (Issues) | Affected Surface |
|------------|-------------------|------------------|
| **Thread/Chat switching latency** | #11011 (21c), #20802 (8c), #37398 (6c) | macOS/Windows Desktop App |
| **Windows Desktop instability** | #37104, #37595, #37599, #37734, #37741, #37752 (6 issues in 24h) | Windows App, WSL, Computer Use |
| **Remote/SSH workflow gaps** | #23527 (mobile), #37403 (resume), #28204 (worktree) | Mobile, Desktop, CLI |
| **MCP ecosystem incompleteness** | #15299 (inbound), #21594 (aliases), #33885 (sub-agent) | CLI, Enterprise |
| **Conversation fragmentation** | #5609 (63 👍), #33163 (WS resilience) | All platforms |
| **Automation/Goal runaway loops** | #34248 (duplicate turns), #24327 (missed runs) | Desktop Automations |
| **Skill/system directory corruption** | #19265 (`.system` deleted), #24195 (PyYAML missing) | Desktop, Windows |

---

*Generated from GitHub data as of 2026-08-10. Links point to live issues/PRs on `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-10

## 1. Today's Highlights
The project shipped a new nightly build (v0.56.0-nightly) while maintainers continue triaging a backlog of critical agent-reliability bugs—particularly around subagent turn-limit reporting, generalist-agent hangs, and shell-command deadlocks. Dependency hygiene is also in focus: 14 dependabot PRs were merged today, upgrading core packages including `@google/genai` (1.x → 2.x), Puppeteer, and Node types.

---

## 2. Releases
| Version | Type | Key Notes |
|---------|------|-----------|
| **v0.56.0-nightly.20260809.gcf22ac7e8** | Nightly | Incremental nightly; no dedicated changelog. See [compare view](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8) for diffs. |

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Priority | Why It Matters | Community Signal |
|---|-------|----------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as GOAL success | **P1** | Subagents silently mask turn-limit exhaustion as success, breaking trust in autonomous workflows. | 12 comments, 2 👍, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | **P1** | Core delegation path stalls on simple ops (e.g., folder creation); workaround is disabling subagents. | 8 comments, 8 👍 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | **P1** | Epic to harden the 76 behavioral evals across 6 model variants; foundational for regression prevention. | 7 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell commands stuck at “Waiting input” after completion | **P1** | High-frequency UX breakage; CLI shows active spinner despite command exit. | 4 comments, 3 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads, search & mapping | **P2** | Investigates whether AST tooling reduces turn count & token noise for code navigation. | 7 comments, 1 👍 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | **P2** | Background extractor re-queues unread sessions, wasting cycles & API quota. | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & reduced Auto Memory logging | **P2** | Secrets currently reach model context before redaction; logging exposes skill data. | 4 comments |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini under-uses custom skills & sub-agents | **P2** | Model rarely invokes user-defined skills (git, gradle) without explicit instruction. | 6 comments |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent: session takeover & lock recovery | **P3** | Persistent browser profiles hard-fail on lock; needs graceful recovery. | 4 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | **P1** | Platform blocker for Linux/Wayland users; agent terminates with `GOAL` but no output. | 4 comments, 1 👍 |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#28744](https://github.com/google-gemini/gemini-cli/pull/28744) | `fix(acp): don't start fresh chat before resuming` | **Open** (P1) | Prevents session-file corruption during ACP resume; fixes #28693. |
| [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | `Allow agents to call agents` | **Open** (P2, help wanted) | Enables recursive subagent delegation via front-matter `tools:`; unblocks #22092. |
| [#28743](https://github.com/google-gemini/gemini-cli/pull/28743) | `fix(core): preserve resolved model config systemInstruction and tools` | **Open** | Stops chat-level config from overwriting model-resolved `systemInstruction`/`tools`. |
| [#26540](https://github.com/google-gemini/gemini-cli/pull/26540) | `fix(core): resolve policy engine bugs affecting tool approvals` | **Open** (P1/P2) | Fixes regex null-byte handling, YOLO/AUTO_EDIT persistence, and spurious prompts. |
| [#28742](https://github.com/google-gemini/gemini-cli/pull/28742) | `fix(caretaker-agent): use spec-valid skill names` | **Open** | Renames `code_explorer`/`spec_generator` to comply with Agent Skills spec. |
| [#28757](https://github.com/google-gemini/gemini-cli/pull/28757) | `chore(deps): bump js-yaml 4.1.1 → 5.2.3` | **Closed** | Security/compat update; part of today’s 14 merged dependabot PRs. |
| [#28749](https://github.com/google-gemini/gemini-cli/pull/28749) | `chore(deps): bump @google/genai 1.30.0 → 2.15.0` | **Closed** | Major SDK upgrade; may surface breaking changes in model integration. |
| [#28752](https://github.com/google-gemini/gemini-cli/pull/28752) | `chore(deps): bump puppeteer-core 24.0.0 → 25.4.0` | **Closed** | Browser-agent dependency; includes CDP/performance fixes. |
| [#28755](https://github.com/google-gemini/gemini-cli/pull/28755) | `chore(deps-dev): bump @types/node 20.11.24 → 26.1.2` | **Closed** | Aligns type defs with current Node LTS; enables newer APIs. |
| [#28619](https://github.com/google-gemini/gemini-cli/pull/28619) | `Update .gitignore to ignore .env and .ai files` | **Closed** | Hygiene: prevents credential/config leakage; adds unit tests. |

---

## 5. Feature Request Trends
1. **Deeper Agent Composability** – Multiple issues/PRs (#28738, #22092, #20195) push for arbitrary subagent nesting and skill discovery.
2. **AST/Structure-Aware Tooling** – #22745, #22746 explore semantic code navigation to cut turns and token spend.
3. **Evaluation Infrastructure** – #24353 (76 behavioral evals) signals a shift toward component-level CI gates for agent behavior.
4. **Memory & Privacy Hardening** – #26522, #26523, #26525 cluster around Auto Memory reliability, redaction timing, and quarantine of bad patches.
5. **Browser Agent Resilience** – #22232, #21983, #22267 target persistent-profile locks, Wayland support, and config overrides.

---

## 6. Developer Pain Points (Recurring Themes)
- **Silent Failures & False Success** – Subagents report `GOAL` success despite hitting turn limits (#22323) or hanging (#21409), eroding confidence in autonomous runs.
- **Shell Integration Flakiness** – Commands complete but CLI spinner persists (“Waiting input”) (#25166); interactive prompts (Vite, etc.) stall agents (#22465).
- **Skill/Subagent Discovery** – Model ignores user-defined skills unless explicitly invoked (#21968); symlinked agent files aren’t loaded (#20079).
- **Resource Leaks in Background Systems** – Auto Memory re-processes low-signal sessions endlessly (#26522) and logs sensitive skill data (#26525).
- **Config Propagation Gaps** – Browser agent ignores `settings.json` overrides (`maxTurns`, etc.) (#22267); policy engine drops approvals in permissive modes (#26540).

---

*Generated from github.com/google-gemini/gemini-cli activity (2026-08-09 → 2026-08-10). All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-10

## Today's Highlights
No new releases in the last 24 hours, but the issue tracker shows a surge of **critical reliability regressions** filed on 2026-08-09: MCP initialization failures (~29% session failure rate), silent kickoff-prompt loss on new sessions, all Claude models disabled for Enterprise users, and a hard-coded 60s MCP handshake timeout with no retry. Several enterprise/remote-session gaps also resurfaced with fresh reproduction details.

## Releases
*No new releases published in the last 24 hours.*

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4423](https://github.com/github/copilot-cli/issues/4423) | **Kickoff prompt silently dropped on new session** — worktree/branch created but agent never receives initial message | Blocks automated session bootstrapping; session sits idle forever | Filed 2026-08-09, triage label |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | **All Claude models disabled under CLI model selection** — personal Enterprise account, worked yesterday | Sudden regression affecting model availability despite enabled settings | Filed 2026-08-09, multiple user confirmations |
| [#4421](https://github.com/github/copilot-cli/issues/4421) | **MCP initialize handshake: fixed 60s budget, no retry, no backoff** — npx stdio servers fail ~29% of sessions | Core MCP reliability; failed servers never respawn for session lifetime | Author: `devinj-msft` (Microsoft), triage label |
| [#4420](https://github.com/github/copilot-cli/issues/4420) | **Parallel tool calling loses request/response correlation** — non-deterministic response order confuses agents | Breaks multi-tool workflows; harness returns responses without original request | Filed 2026-08-09, triage label |
| [#4419](https://github.com/github/copilot-cli/issues/4419) | **Managed-settings interim fail-closed uses empty allow-list `[[]]`** — permanently drops user MCP servers registering during window | Enterprise policy resolution race condition; affects accounts with no managed policy | Author: `devinj-msft`, triage label |
| [#4416](https://github.com/github/copilot-cli/issues/4416) | **Parallel explore subagents hit per-model 429s** — all default to same rate-limited model (claude-haiku-4.5), no backoff/auto-switch | Concentrated rate limiting kills fan-out exploration; `eligibleForAutoSwitch` ignored | Filed 2026-08-09, triage label |
| [#4415](https://github.com/github/copilot-cli/issues/4415) | **High CPU usage (100% core) while idle/waiting** — even during `sleep` operations | Performance regression; impacts laptop battery/thermal | Filed 2026-08-09, triage label |
| [#4414](https://github.com/github/copilot-cli/issues/4414) | **BYOK custom providers return local 403 before request reaches provider** — `/login` misleading | Blocks Bring-Your-Own-Key workflows; auth error is client-side | Filed 2026-08-09, triage label |
| [#1857](https://github.com/github/copilot-cli/issues/1857) | **Allow cancel/remove enqueued messages (Ctrl+Q/Ctrl+Enter) while agent busy or during `/compact`** | High-demand UX gap; users stuck with stale queued commands | **26 👍, 9 comments**, updated 2026-08-09 |
| [#2751](https://github.com/github/copilot-cli/issues/2751) | **`/remote` fails on organization repos: "could not resolve repository"** | Blocks remote sessions for org-owned repos; v1.0.28 regression | **13 👍, 8 comments**, updated 2026-08-09 |

## Key PR Progress
*No pull requests updated in the last 24 hours.*

## Feature Request Trends
1. **Remote session portability** — Support for non-GitHub Git hosts (GitLab, Bitbucket) via [`#2922`](https://github.com/github/copilot-cli/issues/2922) and better org-repo resolution ([`#2751`](https://github.com/github/copilot-cli/issues/2751)).
2. **Model-selection granularity** — Auto-mode min/max strength, bias controls ([`#4411`](https://github.com/github/copilot-cli/issues/4411), [`#4412`](https://github.com/github/copilot-cli/issues/4412)), and org-enabled model visibility ([`#4390`](https://github.com/github/copilot-cli/issues/4390)).
3. **MCP robustness** — Configurable handshake timeouts, retry/backoff, OAuth 3LO support ([`#4421`](https://github.com/github/copilot-cli/issues/4421), [`#4371`](https://github.com/github/copilot-cli/issues/4371)), and rate-limit-aware model switching ([`#4416`](https://github.com/github/copilot-cli/issues/4416)).
4. **Session control UX** — Cancel queued messages ([`#1857`](https://github.com/github/copilot-cli/issues/1857)), reliable prompt delivery ([`#4423`](https://github.com/github/copilot-cli/issues/4423)), and resumable sessions without metadata corruption ([`#4413`](https://github.com/github/copilot-cli/issues/4413)).
5. **Observability & configuration** — Configurable HUD/context panel ([`#4418`](https://github.com/github/copilot-cli/issues/4418)), Chinese localization ([`#4407`](https://github.com/github/copilot-cli/issues/4407)), and floating prompt composer ([`#4417`](https://github.com/github/copilot-cli/issues/4417)).

## Developer Pain Points
- **MCP fragility**: Hard timeouts, no retry, OAuth failures, and interim policy race conditions make MCP servers unreliable in production workflows.
- **Model access instability**: Sudden disablement of Claude models for Enterprise users despite correct settings; org-enabled models missing from catalogue.
- **Session lifecycle bugs**: Kickoff prompts lost, queued messages不可取消, warm resume corrupts reasoning metadata, remote sessions silently fail on org repos.
- **Parallelism hazards**: Non-deterministic tool-response ordering and concentrated rate limits on default explore model break fan-out patterns.
- **Opacity in enterprise features**: `cli_remote_control_enabled: false` shows no UI indication; mobile/desktop settings appear functional but return bare 422 errors.
- **Performance regressions**: Idle CPU spin and misleading auth errors (BYOK 403, `/login` prompts) erode trust in the CLI for long-running tasks.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-10

---

## 1. Today's Highlights
No new releases in the last 24 hours. Community focus remains on two critical open issues: a long-running feature request for a persistent **Memory System** (#1283, 27 comments) and a newly reported **ACP streaming hang** (#2598) where completed responses never emit a finish frame, leaving sessions stuck indefinitely. One compatibility PR (#739) for Google GenAI tool schemas was updated but remains open.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)** | **Feature Request: Memory System — Persistent context across sessions** | Enables cross-session continuity: auto-captured project patterns, user preferences, and manual notes. High impact for daily workflow adoption. | **27 comments** over 5 months; sustained engagement signals strong demand. |
| **[#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)** | **ACP/print streaming response hangs silently: no idle timeout, replaced wheel partial does not fall off the wire (0.31.1 only covers the Esc scenario)** | Critical reliability bug in `kimi acp` mode: stream completes on client but `[DONE]` frame never arrives, no timeout, next prompt silently replaces the hung turn, and response **never persists to `wire.jsonl`**. Blocks production ACP use. | Filed 2026-08-09; 0 comments yet — likely under active triage. |

*Note: Only 2 issues updated in the last 24h; both are included above.*

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| **[#739](https://github.com/MoonshotAI/kimi-cli/pull/739)** | **fix(kosong): strip JSON Schema metadata from Google GenAI tool parameters** | Open (updated 2026-08-09) | Resolves validation errors when using MCP tools (e.g., Exa MCP) with Google GenAI provider. Unblocks a provider/tooling combo. |

*Note: Only 1 PR updated in the last 24h; included above.*

---

## 5. Feature Request Trends
From the available issue data, the dominant requested direction is **stateful, personalized assistance**:

1. **Persistent Memory** (#1283) — Both automatic (AI-extracted project patterns, conventions) and manual (user-defined instructions via config) layers, surviving across sessions.
2. **Reliability hardening for ACP/streaming** (#2598) — Implicit request for robust transport guarantees: idle timeouts, finish-frame enforcement, and durable wire logging.

No other feature themes surfaced in the last 24h window.

---

## 6. Developer Pain Points
Recurring frustrations evident from the two active issues:

| Pain Point | Evidence |
|------------|----------|
| **No cross-session context** | #1283: developers manually re-explain project structure, conventions, and preferences every session. |
| **Silent ACP stream hangs** | #2598: completed responses never finalize; no configurable idle timeout; next prompt discards the hung turn **without writing to `wire.jsonl`**, breaking audit/debug trails. |
| **Provider/tool schema mismatches** | #739: Google GenAI rejects standard JSON Schema metadata (`$schema`, `title`, `description`, etc.) passed from MCP tools, requiring a strip shim. |

---

*Data source: `github.com/MoonshotAI/kimi-cli` — Issues/PRs updated 2026-08-09 to 2026-08-10.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-10

## Today's Highlights
The OpenCode team closed a cluster of **DeepSeek V4 Flash model identification bugs** (leading-space regression) across multiple issues and PRs. A critical **TUI hang on nested subagent permission prompts** (#13715) was fixed via #36046. Experimental renderer performance work (#40427) shows a **75.5% reduction in initial renderer memory** (7.45 MB → 1.82 MB). The v2 branch received a synchronized merge from `dev` (#41460), preserving new App/Desktop architecture.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Engagement)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) **Copy to Clipboard broken** | Core UX regression: selecting response text doesn’t copy. Blocks basic workflow. | 122 comments, 110 👍 — highest engagement in dataset |
| [#7602](https://github.com/anomalyco/opencode/issues/7602) **Native Model Fallback/Failover** | No way to define cross-model fallbacks (e.g., A → B on rate-limit). Critical for production agents. | 29 comments, 107 👍 — strong demand for resilience |
| [#785](https://github.com/anomalyco/opencode/issues/785) **Disable Streaming Mode** | Required for proxies that don’t support streaming (e.g., Credal OpenAI Proxy). | 29 comments, 38 👍 |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) **Claude Code Hooks Compatibility** | Missing `PreToolUse`/`PostToolUse`/`Stop` hooks parity with Claude Code. | 17 comments, 38 👍 |
| [#13715](https://github.com/anomalyco/opencode/issues/13715) **Nested Subagent Permission Hang** | Permission prompts from subagent chains never render, deadlocking sessions. | 11 comments, 24 👍 — **fixed by #36046** |
| [#30221](https://github.com/anomalyco/opencode/issues/30221) **"Terminated" Error on Go** | All Go subscriptions hit `UnknownError: terminated` regardless of model/activity. | 9 comments, 4 👍 |
| [#34743](https://github.com/anomalyco/opencode/issues/34743) **Xcode ACP Ignores Configured Model** | ACP agent in Xcode 27 beta uses `big-pickle` instead of `opencode.json` model. | 15 comments |
| [#41284](https://github.com/anomalyco/opencode/issues/41284) **TUI Freezes on Blank Screen at Startup** | macOS M1: TUI hangs silently, requires force-kill. No logs. | 2 comments, 1 👍 |
| [#39582](https://github.com/anomalyco/opencode/issues/39582) **DeepSeek V4 Flash Free Truncates Output** | Mid-sentence cutoffs without errors; retries needed. | 3 comments |
| [#41453](https://github.com/anomalyco/opencode/issues/41453) **Persistent Session Daemon + Zero-Tool-Call Memory** | New feature request: background daemon for workspace context & instant recall. | 3 comments (filed today) |

---

## Key PR Progress (Top 10 by Significance)

| PR | Type | Summary |
|----|------|---------|
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | Perf | **Experimental renderer perf**: 75.5% less initial renderer memory (7.45→1.82 MB), 60% faster frame times on 24h corpus. |
| [#37584](https://github.com/anomalyco/opencode/pull/37584) | Bug Fix | Bounds consecutive overflow compaction cycles in prompt loop (closes #27924). Prevents infinite retries on context overflow. |
| [#41460](https://github.com/anomalyco/opencode/pull/41460) | Chore | **Automated `dev` → `v2` merge** by `opencode-agent[bot]`; preserves V2 App/Desktop/Core/TUI/SDK architecture. |
| [#39358](https://github.com/anomalyco/opencode/pull/39358) | Feature | **Durable session archival**: adds `session.archived` fact with idempotent archive ops; separate from deletion. |
| [#36046](https://github.com/anomalyco/opencode/pull/36046) | Bug Fix | **Fixes #13715**: renders permission prompts from nested subagent chains in TUI. |
| [#41450](https://github.com/anomalyco/opencode/pull/41450) | Bug Fix | Derives fallback error message for empty AI SDK provider errors (statusCode, rate-limit headers now surfaced). |
| [#40997](https://github.com/anomalyco/opencode/pull/40997) | Refactor | Replaces integration-specific prompt schemas with shared `Form.Fields`; migrates Copilot, Azure, Cloudflare. |
| [#41455](https://github.com/anomalyco/opencode/pull/41455) | Bug Fix | Preserves clipboard image `source.path` in model context for path-based MCP tools (closes #41454). |
| [#36052](https://github.com/anomalyco/opencode/pull/36052) | Feature | **Worktree-based workspace switching** with stash-based warp; new CLI subcommands (`opencode worktree create\|list\|...`). |
| [#41350](https://github.com/anomalyco/opencode/pull/41350) | UI | Animated **BusyWave** loading indicator (replaces shimmering "Thinking" label), persists when "show thinking" enabled. |

---

## Feature Request Trends (From Issues & PRs)

1. **Model Resilience & Routing** — Cross-model fallback/failover (#7602), provider-agnostic reasoning options (#27361, #41294), streaming toggle (#785).
2. **Session Persistence & Memory** — Durable archival (#39358), persistent daemon with zero-tool-call recall (#41453), worktree-based workspace switching (#36052).
3. **Claude Code Parity** — Hooks system (`PreToolUse`/`PostToolUse`/`Stop`) (#12472), rules/skills already compatible.
4. **Multi-Window / Multi-Session UX** — Desktop tabs/windows (#14657), subagent sidebar status (#36042), nested subagent permission rendering (#36046).
5. **Local/Proxied Model Clarity** — Self-hosted vs. proxied model documentation (#24649), LM Studio guidance (#36139), Ollama reasoning field support (#36068).
6. **Input/Attachment Richness** — Drag-and-drop/paste images in question tool (#31791), clipboard image paths for MCP tools (#36051).
7. **Performance & Startup** — Renderer memory/perf (#40427), TUI startup freeze (#41284), Windows admin-hang (#41436).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Clipboard/Copy Broken** | #4283 (110 👍), #39588 (VS Code Mac copy/paste), #36051 (clipboard image paths) |
| **Silent Hangs / No Errors** | #13715 (nested subagent permission), #41284 (TUI blank freeze), #41436 (Windows non-admin hang), #30221 ("terminated" no context) |
| **Model Config Ignored** | #34743 (Xcode ACP uses default), #41300/#41306/#41314/#41322 (leading-space DeepSeek bug cluster) |
| **Streaming Incompatibility** | #785 (proxy lacks streaming), #27361/#41294 (reasoning options dropped in headless) |
| **Free Tier / Go Subscription Limits** | #32971, #41448 (Hermes free model limits), #41430 (payment processed but sub inactive) |
| **Permission UX in Agent Chains** | #13715 (fixed), #36042 (subagent status visibility) |
| **Windows-Specific Issues** | #41436 (requires Admin), #16226 (Enter vs Send button) |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-09 → 2026-08-10). Links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-10

## Today's Highlights
The Pi team closed a high-impact batch of TUI usability fixes: mouse-select copying is now configurable (#7866), page-up/page-down navigation works in all selectors (#7865), and a long-standing llama.cpp model-catalog race condition is resolved via caching (#7072). A new remote-session wire protocol package (@earendil-works/pi-protocol) landed, enabling transport-neutral session control (#7344). GitHub Copilot login reliability improved by switching to sequential model-policy enablement (#7851, #7844).

## Releases
No new releases published in the last 24 hours.

## Hot Issues

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#6922](https://github.com/earendil-works/pi/issues/6922) Default model cannot be a llama.cpp model | **Closed** | Blocked users from setting a local llama.cpp model as default; startup showed “No models available.” | 10 comments, 14 👍 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) High CPU usage on Mac OS with long session | **Open** | CPU spikes to 100 %+ on macOS during extended sessions; memory 600–800 MB. Suspected context-length correlation. | 6 comments, 6 👍 |
| [#6948](https://github.com/earendil-works/pi/issues/6948) llama.cpp defaultProvider/defaultModel not applied at startup (race) | **Closed** | Race between async model refresh and session initialization; model appears in `/model` but session starts without it. | 4 comments |
| [#7720](https://github.com/earendil-works/pi/issues/7720) Allow disabling select-to-copy in fullscreen TUI | **Open** | Users who highlight text frequently lose clipboard contents; now addressed by `copyOnSelect` option in #7866. | 4 comments |
| [#7616](https://github.com/earendil-works/pi/issues/7616) TUI chat scroll jumps when tool blocks exceed viewport | **Closed** | Full-screen clears on tall tool output, losing scroll position; no Page Up/Down history scroll. Fixed in #7865. | 3 comments |
| [#7740](https://github.com/earendil-works/pi/issues/7740) TUI after `/reload` ignores custom tool renderCall/renderResult | **Open** | Tools registered on `session_start` (e.g., MCP) fail to render after `/reload` due to load-order regression. | 3 comments |
| [#7323](https://github.com/earendil-works/pi/issues/7323) `pi update --models` fails entire refresh on transient catalog stall | **Closed** | Single 15 s timeout aborted full model-refresh; no retry logic. | 4 comments |
| [#7869](https://github.com/earendil-works/pi/issues/7869) AI21 API broken (retired) | **Closed** | Sudden 410 errors; AI21 Gateway moved to new endpoint. | 2 comments |
| [#7868](https://github.com/earendil-works/pi/issues/7868) Renderer hard-crashes when line exceeds terminal width | **Closed** | Single over-wide line aborts entire agent session instead of truncating. | 1 comment |
| [#7848](https://github.com/earendil-works/pi/issues/7848) Auto-compaction stops active task instead of resuming | **Closed** | Compaction during tool execution halts agent, requiring manual continue. | 1 comment |

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#7872](https://github.com/earendil-works/pi/pull/7872) | **Closed** | Expose loaded AGENTS/CLAUDE context files on `session_start` event; adds extension docs & tests. |
| [#7072](https://github.com/earendil-works/pi/pull/7072) | **Closed** | Cache llama.cpp model catalog; fixes startup race (#6948). |
| [#7866](https://github.com/earendil-works/pi/pull/7866) | **Closed** | Add `copyOnSelect` option to `TuiAltScreen` (defaults `true`); resolves #7720. |
| [#7865](https://github.com/earendil-works/pi/pull/7865) | **Closed** | Implement `tui.select.pageUp`/`pageDown` in base `SelectList` and model selector; fixes #7616. |
| [#7344](https://github.com/earendil-works/pi/pull/7344) | **Closed** | New `@earendil-works/pi-protocol` package: transport-neutral remote-session commands, events, snapshots, CBOR framing. |
| [#7858](https://github.com/earendil-works/pi/pull/7858) | **Closed** | Route extension commands regardless of `expandPromptTemplates`; restores documented `sendUserMessage` pattern (#7859). |
| [#7857](https://github.com/earendil-works/pi/pull/7857) | **Open** | Expose `expandPromptTemplates` in `sendUserMessage` for extension-command triggering. |
| [#7856](https://github.com/earendil-works/pi/pull/7856) | **Closed** | Repair double-serialized JSON tool arguments during validation; prevents hard-fail on object-typed params. |
| [#7851](https://github.com/earendil-works/pi/pull/7851) | **Closed** | Sequential GitHub Copilot model-policy enablement; avoids 429 rate-limit on orgs with 20+ models (#7850). |
| [#7844](https://github.com/earendil-works/pi/pull/7844) | **Closed** | Remove bulk model enabling from Copilot login; models enabled explicitly via Copilot Chat. |

## Feature Request Trends
1. **TUI polish & configurability** – mouse-copy toggle, page navigation, scroll stability, click-to-position in textarea (#7720, #7616, #7852, #7495).  
2. **Local-model ergonomics** – reliable llama.cpp default-model selection, catalog caching, Qwen China provider (#6922, #6948, #7847).  
3. **Extension & RPC surface** – `session_start` context exposure, command routing fixes, `expandPromptTemplates` control (#7872, #7858, #7857).  
4. **Remote-session protocol** – first-class wire protocol for embedding/headless use (#7344).  
5. **Provider resilience** – sequential policy enablement, catalog retry, context-window accuracy (#7851, #7323, #7870).

## Developer Pain Points
- **Session startup races** – async model refresh vs. default-model application (llama.cpp, OpenRouter).  
- **TUI scroll/jump regressions** – full-screen clears, lost position during streaming, missing pagination keys.  
- **Extension command routing broken** – `sendUserMessage` silently dropped commands due to template-expansion flag.  
- **Provider auth & catalog fragility** – rate-limited bulk ops (Copilot), single-request timeouts (catalog), stale remote metadata (GLM context window).  
- **Renderer crashes on edge cases** – over-wide lines, EPIPE in embedded hosts, SIGTERM-ignoring child processes.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-10

## 📌 Today's Highlights
- **Nightly v0.21.8** shipped with **Qoder plugin extension support**, expanding the IDE integration ecosystem.  
- **Multi-agent coordination** advances via `/coordinate` CLI command (PR #8804) and RFC #8718 for native session orchestration.  
- **CI stability** remains a focus: watchdog timeouts, triage budget increases, and flaky test fixes dominate recent PR activity.

---

## 🚀 Releases
### v0.21.8-nightly.20260810.55e20db328
- **feat(core)**: Qoder plugin extensions now installable via `@callmeYe` (#8661)  
- **feat(ci)**: Auto-assign issues to area owners  
- [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.8-nightly.20260810.55e20db328)

---

## 🔥 Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8718](https://github.com/QwenLM/qwen-code/issues/8718) | **RFC: Native coordination for independent Qwen sessions** | Proposes leader/worker model for multi-agent runs; foundational for background automation roadmap. | 8 comments, P2, `roadmap/multi-agent` |
| [#8784](https://github.com/QwenLM/qwen-code/issues/8784) | **Streamable HTTP MCP: optional GET/SSE 404 kills connection** | Blocks resilient MCP server implementations; spec-compliance gap in client. | 5 comments, P2, `scope/mcp` |
| [#8769](https://github.com/QwenLM/qwen-code/issues/8769) | **Rebuild `/review` Steps 3–5 on workflow engine** | Moves agent fan-out/verification from model-driven → deterministic code; improves reliability. | 4 comments, P2, `roadmap/multi-agent` |
| [#7118](https://github.com/QwenLM/qwen-code/issues/7118) | **Windows installer fails on `Get-FileHash` resolution** | Blocks standalone installs on locked-down Windows envs; 3 👍, `welcome-pr`. | 6 comments, P2, `scope/windows` |
| [#8659](https://github.com/QwenLM/qwen-code/issues/8659) | **TUI flickering in web terminals (Alibaba Cloud Workbench)** | Affects cloud IDE users; `useTerminalBuffer: true` causes full-screen ANSI redraws. | 4 comments, P3, `welcome-pr` |
| [#8823](https://github.com/QwenLM/qwen-code/issues/8823) | **SDK: hidden unrecognized diagnostics mutate transcript state** | Daemon events leak into UI via reducer; causes ghost messages in Web Shell. | 3 comments, P2, `scope/sdk` |
| [#8678](https://github.com/QwenLM/qwen-code/issues/8678) | **Preserve session on large restore timeout** | Prevents session loss during heavy history loads; PR #8691 merged for timeout safety. | 2 comments, P1, `daemon` |
| [#8775](https://github.com/QwenLM/qwen-code/issues/8775) | **Unify session reasoning loops on Turn-based SessionRuntime** | 6+ independent implementations (TUI, headless, ACP, serve, AgentCore) → single runtime. | 2 comments, P2, `roadmap/session-management` |
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | **Direct External Context Provider Profile** | Enterprise monorepo integration: on-demand + Auto Recall profiles for shared context. | 12 comments, P3, `need-discussion` |
| [#7449](https://github.com/QwenLM/qwen-code/issues/7449) | **Enterprise external-memory integration profile** | Provider-neutral spec for external memory; documentation-first, incremental compat tests. | 7 comments, P3, `need-discussion` |

---

## 🛠 Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8804](https://github.com/QwenLM/qwen-code/pull/8804) | **feat** | Adds `/coordinate <goal>` CLI command for native multi-agent coordination using existing Agent Team runtime. |
| [#8798](https://github.com/QwenLM/qwen-code/pull/8798) | **fix** | Web Shell reconciles mid-turn messages with daemon state; stops resubmitting daemon-owned messages on idle. |
| [#8818](https://github.com/QwenLM/qwen-code/pull/8818) | **fix** | Extends thinking-tag leak defense to **all OpenAI-compatible providers**; closes two bypass vectors. |
| [#8816](https://github.com/QwenLM/qwen-code/pull/8816) | **perf(ci)** | Adds 20-min idle watchdog + container reaper for sandbox hangs; kills silent 2-hr CI stalls. |
| [#8810](https://github.com/QwenLM/qwen-code/pull/8810) | **perf(ci)** | Makes triage timeout operator-tunable (`QWEN_TRIAGE_TIMEOUT_MINUTES`, default 60 min). |
| [#8801](https://github.com/QwenLM/qwen-code/pull/8801) | **fix** | Bounds ACP bridge live journal replay chunks (≤256 events); preserves semantic boundaries. |
| [#8732](https://github.com/QwenLM/qwen-code/pull/8732) | **feat** | Adopts **Goal v3** in ACP sessions: create/status/edit/pause/resume/replace/clear via persisted state machine. |
| [#8740](https://github.com/QwenLM/qwen-code/pull/8740) | **feat** | Shares **one Chrome bridge** across sessions via multi-client `/cdp` tunnel (`linkId` multiplexing). |
| [#8403](https://github.com/QwenLM/qwen-code/pull/8403) | **feat** | Implements `/audit <dir> [--effort]` legacy code audit workflow (from #8397 design). |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | **feat** | Adds **Kimi** (Coding Plan, CN/Intl API keys) and **Xiaomi MiMo** providers to `/auth` third-party list. |

---

## 📈 Feature Request Trends
1. **Multi-agent / Session Orchestration** — RFCs (#8718, #8769, #8775) and PRs (#8804, #8732) converge on unified, deterministic coordination.
2. **Enterprise Integration Profiles** — Direct context provider (#7585) and external memory (#7449) specs target monorepo/private-repo workflows.
3. **Local Control / Mobile Access** — QR-code pairing for phone access to local sessions (#8595, #8806) gains traction.
4. **MCP Hardening** — Streamable HTTP edge cases (#8784) and transport resilience.
5. **Provider Expansion** — Kimi, MiMo (#8368) plus thinking-tag normalization across all OpenAI-compat endpoints (#8818).

---

## 😣 Developer Pain Points (High-Frequency Frustrations)
| Area | Symptoms | Evidence |
|------|----------|----------|
| **Windows Installation** | SHA-256 verification fails when `Get-FileHash` unavailable | #7118 (3 👍, 6 comments, `welcome-pr`) |
| **Web Terminal Rendering** | TUI flicker/tear in Alibaba Cloud Workbench, xterm | #8659 (4 comments, `welcome-pr`) |
| **CI Flakiness** | Silent sandbox hangs (2 hrs), triage timeouts (30 min), flaky shell-registry tests | #8816, #8810, #8795, #8813 |
| **Session State Leaks** | Unrecognized daemon events pollute transcript; mid-turn message duplication | #8823, #8798, #8812 |
| **Thinking-Tag Leaks** | `` tags appear in `content` field instead of `reasoning_content` across providers | #6666, #8818 |

---

*Generated from github.com/QwenLM/qwen-code — 2026-08-10*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-10

## 1. Today's Highlights
The project is in active preparation for **v0.9.6**, a "subtractive runtime release" focused on removing harness obstructions while preserving explicit budgets, deadlines, and provider truthfulness. Community discussion is heavily centered on **context compaction reliability** (1M vs 128K window mismatch), **Fleet/subagent UX unification**, and **TUI interaction polish** (IME stability, approval dialogs, copy behavior). A notable i18n debate continues around the Chinese translation of "Constitution" (宪法 vs 协作准则).

## 2. Releases
**No new releases published in the last 24h.**  
PR [#5313](https://github.com/Hmbown/CodeWhale/pull/5313) (`chore(release): prepare v0.9.6`) was merged, signaling an imminent v0.9.6 cut. The release rebuilds compaction around a single provider summary with committed successor handoff, removes mailbox freezing, and tightens cancellation semantics.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) | **Fleet model classes, loadout auto, semantic route roles** (v0.9.3) | Core architecture for unified model/loadout selection across TUI, CLI, subagents, Fleet workers. Defines "Fleet loadout auto" as the single user-facing automatic mode. | 13 comments — **Closed**, design settled. |
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | **CLI/TUI parity for subagent & runtime control surfaces** | Ensures subagent status, expand/collapse, cancellation aren't trapped in TUI; enables future cloud/remote UIs. | 9 comments — **Closed**, parity defined. |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **Chinese translation of "Constitution": 宪法 vs 协作准则** | I18n decision with political sensitivity implications; blocks merged PR #4908. | 8 comments — **Open**, active debate among Chinese contributors. |
| [#576](https://github.com/Hmbown/CodeWhale/issues/576) | **Improve Fork UX: TUI-interactive `/fork`** | Current fork flow is CLI-only, fragmented; proposes `/fork` in TUI with session picker. | 6 comments — **Closed**, likely implemented. |
| [#3313](https://github.com/Hmbown/CodeWhale/issues/3313) | **Split RuntimeThreadManager (7k+ lines) into store/executor/events/types** | Major refactor for maintainability; addresses 4-concern monolith. | 6 comments — **Closed**, refactor landed. |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | **Switching providers retains unrelated default model (e.g., gpt-5.5)** | Provider/model resolution not atomic; causes silent misconfiguration. | 4 comments — **Open**, reliability bug. |
| [#5096](https://github.com/Hmbown/CodeWhale/issues/5096) | **Compaction gain not visible in token counter** | `/compact` reports success but token usage (37K/128K) unchanged; undermines trust. | 4 comments — **Open**, UX/reliability gap. |
| [#5293](https://github.com/Hmbown/CodeWhale/issues/5293) | **TUI: make deny-by-default approval selection configurable** | v0.9.4 changed default highlighted option in permission dialog, breaking muscle memory. | 4 comments, 1👍 — **Open**, UX regression. |
| [#5270](https://github.com/Hmbown/CodeWhale/issues/5270) | **v0.9.5: Unified tasks surface (shell + subagents + Fleet + workflow)** | Single operator-facing list for all background work; eliminates "idle chrome" blindness. | 3 comments — **Open**, major UX milestone. |
| [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) | **Compaction: publish & enforce structured survival contract** | Current compaction lacks explicit contract for what survives (intent, decisions, tool continuity). | 3 comments — **Open**, architectural gap. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5313](https://github.com/Hmbown/CodeWhale/pull/5313) | `chore(release): prepare v0.9.6` | **Merged** | Subtractive runtime release: single-provider compaction summary, committed successor handoff, no mailbox freeze, truthful provider state. |
| [#5308](https://github.com/Hmbown/CodeWhale/pull/5308) | `fix(release): use CNB asset download URLs` | **Merged** | Fixes updater to use canonical `codewhale.net/codewhale` CNB slug with `/-/releases/download/vX.Y.Z/` path for mirror mode. |
| [#5306](https://github.com/Hmbown/CodeWhale/pull/5306) | `fix(release): validate crate publication order` | **Merged** | Validates 20-crate publish order against locked Cargo metadata; fails closed on duplicates, missing crates, version mismatches, dep inversions. |
| [#5281](https://github.com/Hmbown/CodeWhale/pull/5281) | `build(deps): bump jsonschema 0.46.10 → 0.49.6` | **Open** | Dependabot update; includes Python-side fixes. Awaiting CI. |

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Unified Background Work Visibility** — Strong demand for a single "Tasks" panel aggregating shells, subagents, Fleet workers, workflow runs ([#5270](https://github.com/Hmbown/CodeWhale/issues/5270), [#5287](https://github.com/Hmbown/CodeWhale/issues/5287)).
2. **Compaction Transparency & Control** — Users want explicit survival contracts, visible token recovery, and 1M-context support without silent 128K fallback ([#5096](https://github.com/Hmbown/CodeWhale/issues/5096), [#4394](https://github.com/Hmbown/CodeWhale/issues/4394), [#5239](https://github.com/Hmbown/CodeWhale/issues/5239), [#5244](https://github.com/Hmbown/CodeWhale/issues/5244)).
3. **Multi-Provider Credential Management** — Save multiple API keys per provider instead of single global overwrite ([#5250](https://github.com/Hmbown/CodeWhale/issues/5250), [#5047](https://github.com/Hmbown/CodeWhale/issues/5047)).
4. **TUI Interaction Polish** — IME stability (Windows), approval dialog defaults, copy behavior (rail decorations), Fork UX ([#5023](https://github.com/Hmbown/CodeWhale/issues/5023), [#5293](https://github.com/Hmbown/CodeWhale/issues/5293), [#5314](https://github.com/Hmbown/CodeWhale/issues/5314), [#576](https://github.com/Hmbown/CodeWhale/issues/576)).
5. **Agent/Subagent Identity & Config Clarity** — Display names should reflect session/dispatch name, not opaque IDs; config layering & shadowing fixes ([#5287](https://github.com/Hmbown/CodeWhale/issues/5287), [#5098](https://github.com/Hmbown/CodeWhale/issues/5098)).
6. **Tool Reliability Hardening** — File edit must reject invalid params loudly; read-before-edit guardrails ([#5209](https://github.com/Hmbown/CodeWhale/issues/5209), [#3364](https://github.com/Hmbown/CodeWhale/issues/3364)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Silent configuration mismatches** (provider/model drift, context window fallback, config shadowing) | High | [#5034](https://github.com/Hmbown/CodeWhale/issues/5034), [#5239](https://github.com/Hmbown/CodeWhale/issues/5239), [#5244](https://github.com/Hmbown/CodeWhale/issues/5244), [#5098](https://github.com/Hmbown/CodeWhale/issues/5098), [#5047](https://github.com/Hmbown/CodeWhale/issues/5047) |
| **Compaction opacity** — no visible token recovery, no survival contract, 128K cap on 1M models | High | [#5096](https://github.com/Hmbown/CodeWhale/issues/5096), [#4394](https://github.com/Hmbown/CodeWhale/issues/4394), [#5239](https://github.com/Hmbown/CodeWhale/issues/5239), [#5043](https://github.com/Hmbown/CodeWhale/issues/5043) |
| **TUI/CLI parity gaps** — Fork, subagent control, approval dialogs trapped in TUI | Medium | [#576](https://github.com/Hmbown/CodeWhale/issues/576), [#4022](https://github.com/Hmbown/CodeWhale/issues/4022), [#5293](https://github.com/Hmbown/CodeWhale/issues/5293) |
| **Tool false positives** — File edit accepts wrong params, reports fake success | Medium | [#5209](https://github.com/Hmbown/CodeWhale/issues/5209), [#3364](https://github.com/Hmbown/CodeWhale/issues/3364) |
| **IME/input instability on Windows** | Medium | [#5023](https://github.com/Hmbown/CodeWhale/issues/5023) |
| **Interrupted assistant output lost from session** | Emerging | [#5000](https://github.com/Hmbown/CodeWhale/issues/5000) |
| **Test flakiness & fixture pollution** | Internal | [#5056](https://github.com/Hmbown/CodeWhale/issues/5056) |

---

*Digest generated from GitHub data as of 2026-08-10. All links point to Hmbown/CodeWhale repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*