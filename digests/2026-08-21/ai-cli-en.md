# AI CLI Tools Community Digest 2026-08-21

> Generated: 2026-08-21 00:55 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-21)

---

## 1. Ecosystem Overview

The AI CLI landscape is consolidating around **multi-agent orchestration**, **session persistence**, and **cross-platform reliability** as core differentiators. All major tools have shipped stable releases in the past week, but critical regressions in authentication (Codex), sandbox permissions (Copilot), and token budgeting (CodeWhale, Codex) reveal growing pains as tools scale to production workloads. A clear split is emerging: **enterprise-grade platforms** (Codex, Copilot, Qwen) investing in policy governance and audit trails versus **developer-first TUI tools** (OpenCode, Pi, CodeWhale) prioritizing latency, extensibility, and local-first workflows. Plugin/MCP ecosystems are maturing but remain fragmented—authentication token bridging and schema validation are the primary friction points.

---

## 2. Activity Comparison

| Tool | Release Today | Hot Issues | Key PRs | Community Signal (👍/comments) |
|------|---------------|------------|---------|-------------------------------|
| **OpenAI Codex** | v0.149.0 stable + α | 10 | 10 | High (28c/21👍 on auth bug) |
| **Gemini CLI** | v0.56.0-nightly | 10 | 10 | Medium (8c/8👍 on agent hangs) |
| **GitHub Copilot CLI** | v1.0.81-6 (pre) | 10 | 1 | High (28c/17👍 on keybindings) |
| **Kimi Code CLI** | — | 1 | 1 | Low (0c/0👍) |
| **OpenCode** | v1.18.19 | 10 | 10 | High (47c/24👍 on CPU regression) |
| **Pi** | — | 10 | 10 | Medium (36c on Windows strategy) |
| **Qwen Code** | v0.21.15 | 10 | 10 | Medium (8c on review loops) |
| **DeepSeek TUI (CodeWhale)** | v0.9.10 | 10 | 10 | Medium (3 comments on compaction bug) |
| **Claude Code** | ⚠️ Data unavailable | — | — | — |

**Notes**: Codex, OpenCode, Qwen, and CodeWhale shipped stable releases. Copilot is in prerelease. Gemini, Pi, Kimi are in nightly/feature-proposal phases. Issue/PR volume is consistently ~10 across active projects, indicating structured triage processes.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Multi-agent / subagent orchestration** | Codex, Gemini, OpenCode, Qwen, CodeWhale | Dashboard (Codex), lifecycle reliability (Gemini #22323), auto-permissions (OpenCode #43675), cross-session messaging (Qwen #9576), command shapes (CodeWhale #5525) |
| **Session persistence & memory** | Codex, Gemini, Copilot, Kimi, Qwen, OpenCode | Headless remote agents (Codex #23200), Auto Memory reliability (Gemini #26522), cross-device sync (Copilot #4539), Memory Plus plugin (Kimi #2613), hierarchical memory dedup (Qwen #9597), durable approvals (CodeWhale v0.9.10) |
| **MCP / plugin ecosystem hardening** | Codex, Copilot, Kimi, Qwen, CodeWhale | OAuth token bridging (Copilot #4096, #4439), registry validation (Copilot #3162), plugin security docs (Kimi #2614), MCP image support (CodeWhale #5515), Web Shell attachments (Qwen v0.21.15) |
| **Token/context window management** | Codex, Gemini, Pi, CodeWhale, Qwen | Compaction v2 fixes (Codex #33493), history rollback (Gemini #28934), per-model compaction (Pi #8133), emergency compaction budgeting (CodeWhale #5518), compression regression (Qwen #9309) |
| **Windows / cross-platform parity** | Codex, Copilot, OpenCode, Pi, Qwen | Extended-path archives (Codex #39150), WSL sandbox (Copilot #4546), install dir env vars (OpenCode #7675), input redraw/IME (Pi #6300, #5023), Web Shell HTTPS (Qwen #9392) |
| **Enterprise policy & audit** | Codex, Copilot, Qwen | Workspace-only settings (Codex #39189), managed-settings validation (Copilot #4349), review pipeline convergence (Qwen #9278) |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Developer-First TUI Tools |
|-----------|---------------------------|---------------------------|
| **Primary Focus** | Governance, multi-model routing, audit trails, IDE integration | Latency, local-first, extensibility, keyboard-driven UX |
| **Representative Tools** | OpenAI Codex, GitHub Copilot CLI, Qwen Code | OpenCode, Pi, DeepSeek TUI (CodeWhale) |
| **Architecture** | Cloud-backed, ACP/MCP-native, sandboxed execution | Bun/Node or Rust TUI, local model support, plugin crates |
| **Target User** | Org admins, security teams, full-stack devs in regulated envs | Power users, OSS contributors, solo devs, researchers |
| **Release Cadence** | Weekly stable + alpha channels | Frequent patch/minor, nightly for edge features |
| **Key Moat** | Model provider partnerships (OpenAI, Anthropic, Google, Alibaba) | Open architecture, zero-telemetry, community-driven providers |
| **Pain Point Profile** | Auth fragility, policy drift, MCP OAuth, sandbox overreach | CPU/memory regressions, TUI crashes, IME/Windows gaps, compaction bugs |

**Gemini CLI** sits in between: Google-backed but OSS-first, heavy on eval infrastructure (#24353) and AST-aware tooling (#19873). **Kimi Code** is early-stage, betting on MCP-as-plugin architecture.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Production-Ready** | **OpenAI Codex**, **OpenCode**, **Qwen Code** | Stable releases weekly, 10+ PRs/day, high-engagement issues (20-50 comments), enterprise adoption signals (Bedrock, Cloudflare Gateway, Aone CI) |
| **High Momentum / Pre-GA** | **GitHub Copilot CLI**, **Gemini CLI** | Prerelease/nightly cadence, strong org-backed engineering, but UX regressions (keybindings, sandbox) block GA confidence |
| **Architectural Refactor Phase** | **DeepSeek TUI (CodeWhale)**, **Pi** | Major crate decomposition (EPIC-005), i18n spine migration, Windows strategy debate—velocity high but user-facing features paused |
| **Early / Niche** | **Kimi Code CLI** | Single feature proposal, security docs PR—plugin architecture defined but no runtime implementation yet |
| **Unknown** | **Claude Code** | No data available for comparison |

**Velocity Leaders**: OpenCode (10 PRs merged including critical memory leak fix #43733), Codex (10 PRs including Bedrock multi-agent), CodeWhale (7 merges in 24h including release).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Multi-agent is table stakes** | Every tool except Kimi has active subagent work: Codex dashboard, Gemini lifecycle, OpenCode auto-perms, Qwen cross-session, CodeWhale command shapes | Build/buy decisions must evaluate agent orchestration maturity, not just single-turn coding |
| **Authentication is the #1 reliability risk** | Codex macOS/Windows auth regression (28c/21👍), Copilot OAuth bridging failures (#4096, #4439), CodeWhale flaky DeepSeek URL (#4683) | Expect ongoing auth churn; design for token refresh, fallback providers, and offline-first session caches |
| **Windows/WSL is a second-class citizen** | Codex archive paths, Copilot sandbox/WSL, OpenCode install dirs, Pi input redraw, Qwen HTTPS—all have open Windows blockers | If Windows devs are >20% of your team, validate tooling on Windows *before* org rollout |
| **Context compaction is unsolved** | Codex unbounded images, Gemini history rollback, Pi 100%+ trigger, CodeWhale 25% budget, Qwen compression regression | Long-running agent sessions (>50k tokens) will hit bugs; budget for manual compaction workflows |
| **MCP standardization accelerating** | Copilot registry validation, Kimi MCP-as-plugin, CodeWhale image support, Qwen Web Shell attachments | MCP is becoming the universal plugin interface—invest in MCP server development over proprietary SDKs |
| **Eval-driven development emerging** | Gemini 76 tests/6 models (#24353), Qwen SWE-bench nightly (1/1), Codex compaction parity tests | Tools with public eval harnesses (Gemini, Qwen) will regress less; ask vendors for eval transparency |
| **Local-first / air-gapped demand rising** | OpenCode local provider config (#31433), Pi fork-aware cache (#8348), CodeWhale crate decomposition for embeddability | Enterprises with data sovereignty needs should prioritize tools with local model support and no telemetry |

---

## Bottom Line for Tool Selection

| If Your Priority Is... | Recommended Primary | Watch List |
|------------------------|---------------------|------------|
| **Enterprise governance, multi-model, audit** | OpenAI Codex, GitHub Copilot CLI | Qwen Code (Aone integration) |
| **Low-latency local TUI, extensibility, no telemetry** | OpenCode, DeepSeek TUI (CodeWhale) | Pi (post-refactor) |
| **Google ecosystem, eval rigor, AST tooling** | Gemini CLI | — |
| **Alibaba Cloud / Chinese-market integration** | Qwen Code | Kimi Code (future) |
| **Cutting-edge agent architecture research** | OpenCode (v2), CodeWhale (crate split) | Pi (dictionary spine) |

**Risk Mitigation**: Pilot 2 tools minimum—one enterprise/platform, one developer-first—to hedge against platform-specific regressions (auth, sandbox, compaction). Monitor Codex v0.150, Copilot GA, CodeWhale v0.10, and OpenCode v2 for stabilization signals.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-21 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298] fix(skill-creator): run_eval.py 0% recall** | Fixes the evaluation pipeline that powers skill description optimization; addresses Windows stream reading, trigger detection, and parallel workers | Root cause of `#556` (12 comments, 7👍): `claude -p` never triggers skills during eval, making optimization loop optimize against noise; 10+ independent reproductions | 🔴 Open |
| 2 | **[#514] document-typography** | Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | Addresses a universal pain point: "users rarely ask for good typography but always notice when it's bad" | 🔴 Open |
| 3 | **[#538] fix(pdf): case-sensitive file references** | Corrects 8 case-sensitivity mismatches in `SKILL.md` (`REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`) | Breaks on case-sensitive filesystems; straightforward but critical for cross-platform reliability | 🔴 Open |
| 4 | **[#486] odt (OpenDocument)** | Create, fill, read, convert `.odt`/`.ods` files; triggers on "ODT", "OpenDocument", "LibreOffice", ISO-standard requests | Broad utility for open-format document workflows; includes template filling and ODT→HTML parsing | 🔴 Open |
| 5 | **[#210] frontend-design (improvement)** | Revises skill for clarity, actionability, and single-conversation executability | Shifts from educational tone to operational instructions; ensures every directive is followable by Claude in-context | 🔴 Open |
| 6 | **[#83] skill-quality-analyzer & skill-security-analyzer** | Meta-skills evaluating other skills across 5 dimensions (structure, examples, resources, security, maintainability) | Addresses community health gap; enables automated quality gates for marketplace submissions | 🔴 Open |
| 7 | **[#1367] self-audit** | Mechanical file verification → four-dimension reasoning audit (damage-severity priority); universal across stacks | Novel "pre-delivery" quality gate; v1.3.0 includes calibration/adversarial/verification pipeline (see `#1385`) | 🔴 Open |
| 8 | **[#723] testing-patterns** | Comprehensive testing skill: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, flakiness, CI | Fills a major gap: no existing skill covers the full testing stack with opinionated best practices | 🔴 Open |

> **Note:** All PRs above show `Comments: undefined` in the raw data but are sorted by comment activity. Cross-referenced with Issues (e.g., `#556` ↔ `#1298`) confirms high engagement.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Community Signal |
|-------|----------|------------------|
| **Security & Trust Boundaries** | `#492` (43 comments, 2👍): Community skills distributed under `anthropic/` namespace enable impersonation | **Highest engagement** — users demand namespace isolation and official vs. community distinction |
| **Organizational Skill Sharing** | `#228` (16 comments, 8👍): Need org-wide library vs. manual file sharing via Slack/Teams | Strong product demand; 8👍 indicates broad team adoption friction |
| **Evaluation Pipeline Reliability** | `#556` (12 comments, 7👍): `run_eval.py` reports 0% trigger rate across all queries | Blocks skill-author iteration; directly motivates `#1298` |
| **Plugin Deduplication** | `#189` (6 comments, 9👍): `document-skills` + `example-skills` install identical content | 9👍 shows widespread annoyance; spec compliance needed |
| **Context Window Management** | `#1487` (4 comments): `claude-api` injects ~156k tokens in one call | Emerging concern as skills grow; needs lazy-loading patterns |
| **MCP Integration** | `#16` (4 comments): Expose skills as MCP servers for standard API access | Architectural direction request; aligns with ecosystem interoperability |
| **Bedrock/Enterprise Deployment** | `#29` (4 comments): No guidance for AWS Bedrock usage | Enterprise adoption blocker; documentation gap |
| **Quality Gates & Governance** | `#1385` (4 comments, 1👍), `#412` (6 comments): Multi-gate reasoning pipelines, agent-governance patterns | Growing maturity: moving from "skills that do X" to "skills that verify/guardrail" |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298]** | skill-creator eval fix | **Critical infrastructure**; blocks all skill optimization; 10+ reproductions; author actively iterating (updated 2026-06-23) |
| **[#514]** | document-typography | Universal applicability; zero dependencies; solves invisible-but-pervasive quality issue |
| **[#723]** | testing-patterns | Fills a complete category gap; comprehensive scope (unit→E2E→CI); author responsive (updated 2026-04-21) |
| **[#1367]** | self-audit | Novel quality primitive; integrates with `#1385` pipeline proposal; recent (2026-06-28) and active |
| **[#568]** | servicenow | Enterprise-grade scope (ITSM, SecOps, ITAM, FSM, HRSD, SPM); long-lived (updated 2026-08-12) |
| **[#525]** | pyxel (retro games) | Niche but complete; MCP server integration; unique creative workflow (write→run→capture→iterate) |
| **[#83]** | skill-quality-analyzer / security-analyzer | Meta-tool for ecosystem health; enables automated PR gates; addresses `#452` community health gap |
| **[#1538]** | spec compliance fixes | Brings `template/` and another skill into spec conformance; prerequisite for validation tooling |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, production-grade skill infrastructure*: reliable evaluation pipelines, security-isolated namespaces, org-level distribution, and automated quality gates — shifting focus from "more skills" to "skills you can depend on in teams."**

---

## Key Links
- **Repository**: https://github.com/anthropics/skills
- **Top Issue (Security)**: https://github.com/anthropics/skills/issues/492
- **Critical Eval Fix**: https://github.com/anthropics/skills/pull/1298
- **Org Sharing Request**: https://github.com/anthropics/skills/issues/228
- **Quality Gate Proposal**: https://github.com/anthropics/skills/issues/1385

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-21

---

## 1. Today's Highlights

- **v0.149.0 stable released** with a new interactive `codex agents` dashboard for managing multi-agent tasks and new TUI working-directory commands (`/cd`, `/pwd`, `/cwd`).  
- **Critical auth regression on macOS** (v26.814.41407): opening existing conversations invalidates ChatGPT credentials and forces re-sign-in — 28 comments, 21 👍.  
- **Windows archive pipeline broken** for paths using the `\\?\` extended-length prefix; multiple related issues filed with active investigation.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.149.0** | Stable | • Interactive **`codex agents` dashboard** (search, start, open, rename, stop tasks; configurable shortcuts)  <br>• **`/cd`, `/pwd`, `/cwd`** commands for working-directory management in TUI |
| rust-v0.150.0-alpha.1 | Alpha | Pre-release for next minor version |
| rust-v0.149.0-alpha.{3,4,7} | Alpha | Iterative pre-releases leading to 0.149.0 |

> **Links:** [v0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0) · [v0.150.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.1)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#39162](https://github.com/openai/codex/issues/39162) | **macOS auth regression**: opening existing conversation invalidates ChatGPT auth, redirects to sign-in | Blocks all macOS desktop users on v26.814.41407; regression from v26.810.52044 | 28 comments, 21 👍 |
| [#23200](https://github.com/openai/codex/issues/23200) | **Headless remote Linux hosts for Codex mobile** | Highly requested: decouple mobile control from desktop host staying online | 20 comments, 49 👍 |
| [#33493](https://github.com/openai/codex/issues/33493) | **Compaction v2 retains unbounded `input_image` payloads** → repeated auto-compaction loops | Image-heavy sessions enter compaction death spiral; affects long-running workflows | 19 comments, 4 👍 |
| [#39189](https://github.com/openai/codex/issues/39189) | **Windows: opening thread signs out Pro account** after workspace-only settings 401 | Mirrors macOS auth bug on Windows; affects Pro subscribers | 16 comments, 3 👍 |
| [#35746](https://github.com/openai/codex/issues/35746) | **Paginated history drops valid rollout records & reuses ordinals** | Breaks session replay / history integrity; observed since 0.146.0-alpha | 16 comments |
| [#31963](https://github.com/openai/codex/issues/31963) | **Windows i18n: zh-CN renders both `xhigh` & `ultra` reasoning as “极高”** | UX confusion for Chinese users; reasoning effort indistinguishable | 15 comments, 5 👍 |
| [#31973](https://github.com/openai/codex/issues/31973) | **Windows Remote Control stuck in “Reconnecting…”** with no remote recovery | Mobile remote control unusable for Windows hosts; requires physical access | 12 comments, 1 👍 |
| [#39150](https://github.com/openai/codex/issues/39150) | **Windows archive fails on `\\?\` extended-length paths** | Prevents archiving conversations stored with verbatim paths; generic error UI | 12 comments, 2 👍 |
| [#34026](https://github.com/openai/codex/issues/34026) | **Windows: completed threads stay “thinking”; new messages queue locally** | Turn execution stalls; desktop appears frozen after task completion | 11 comments |
| [#38364](https://github.com/openai/codex/issues/38364) | **Subagents panel shows completed agents as Active/Working** | Misleading UI state; users cannot trust subagent status indicators | 11 comments |

---

## 4. Key PR Progress (Last 24h)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#39825](https://github.com/openai/codex/pull/39825) | **Use Responses compaction for Amazon Bedrock** | Switches Bedrock to `/v1/responses` compaction trigger; removes legacy protocol | Enables compaction parity for Bedrock models |
| [#39822](https://github.com/openai/codex/pull/39822) | **Preserve uncapped Guardian classifier instructions** | Removes implicit token truncation of classifier policy | Fixes policy rendering for long Guardian instructions |
| [#39813](https://github.com/openai/codex/pull/39813) | **Defer legacy filesystem policy projection** | Avoids rebuilding legacy policy when cwd change can’t trigger rebind | Reduces settings-update latency |
| [#39812](https://github.com/openai/codex/pull/39812) | **Avoid materializing writable-root carveouts for presence checks** | Adds `has_writable_roots_with_cwd` helper; skips carveout construction | Speeds up permission-profile classification |
| [#39811](https://github.com/openai/codex/pull/39811) | **Restrict macOS preference reads to full-disk policies** | Moves Seatbelt/`cfprefsd` grants to full-disk-only policy section | Hardens sandbox; prevents preference leakage |
| [#39809](https://github.com/openai/codex/pull/39809) | **Preserve `WINDIR` in core Windows shell environments** | Adds `WINDIR`/`WinDir` to allowlist; test covers case variants | Fixes Windows shell env inheritance |
| [#39804](https://github.com/openai/codex/pull/39804) | **Use multi-agent V1 for Amazon Bedrock models** | Normalizes Bedrock catalogs to `MultiAgentVersion::V1` (V2 unsupported) | Unblocks multi-agent on Bedrock |
| [#39802](https://github.com/openai/codex/pull/39802) | **Optimize case-insensitive thread history matching** | Monotonic span cursors map lowercase offsets → original byte ranges | Faster history search, no rescanning |
| [#39795](https://github.com/openai/codex/pull/39795) | **Add hostname to configurable TUI status line** | New `hostname` status item (DNS-free); shown in setup preview | Improves multi-host TUI orientation |
| [#39792](https://github.com/openai/codex/pull/39792) | **Reject settings updates for parent-owned subagents** | Extends direct-input restriction to `thread/settings/update` | Prevents inconsistent subagent config drift |

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **True headless/remote agents** | [#23200](https://github.com/openai/codex/issues/23200) (49 👍), [#22947](https://github.com/openai/codex/issues/22947) (7 👍) | Strong demand for mobile ↔︎ always-on Linux server workflows without desktop intermediary |
| **Subagent observability & cost control** | [#39808](https://github.com/openai/codex/issues/39808), [#38364](https://github.com/openai/codex/issues/38364) | Need per-subagent usage telemetry, status accuracy, and overhead reduction |
| **Cross-platform path / archive robustness** | [#39150](https://github.com/openai/codex/issues/39150), [#39705](https://github.com/openai/codex/issues/39705), [#39627](https://github.com/openai/codex/issues/39627) | Windows extended-path handling, SQLite verbatim aliases, legacy vs. new task parity |
| **Session history integrity** | [#35746](https://github.com/openai/codex/issues/35746), [#39802](https://github.com/openai/codex/pull/39802) | Pagination bugs, search performance, rollout fidelity |
| **Mobile remote reliability** | [#31973](https://github.com/openai/codex/issues/31973), [#38023](https://github.com/openai/codex/issues/38023), [#39817](https://github.com/openai/codex/issues/39817) | Reconnection, turn-start timeouts, post-update breakage |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Auth fragility across platforms** — macOS & Windows both regressed in v26.814: opening existing threads kills credentials (#39162, #39189). Users blocked from continuity.
2. **Windows archive pipeline unreliable** — `\\?\` paths, verbatim SQLite aliases, legacy-task vs. new-task divergence (#39150, #39705, #39627). Generic errors hinder debugging.
3. **Remote control instability** — “Reconnecting…” lockups (#31973), 30s turn-start timeouts on idle large tasks (#38023), post-update total failure (#39817). Mobile-as-primary workflow broken.
4. **Compaction runaway on image-heavy sessions** — Unbounded `input_image` retention triggers repeated auto-compaction (#33493), wasting tokens & time.
5. **Subagent UX gaps** — Phantom “Active” state (#38364), hidden per-agent overhead (#39808), settings mutations silently ignored (#39792).
6. **Rate-limit false positives** — “Too many requests” modals during normal ChatGPT use (#38503, #38763); WebSocket idle timeout misclassified as dead stream (#39771).
7. **Sandbox / filesystem policy leaks** — `apply_patch` launcher targets AppX executables inaccessible to sandbox (#38425); macOS preference reads escape read roots (#39811).
8. **TUI/CLI skill discovery broken** — `remote_plugin=false` still downloads curated plugins (#39682); skills not found in `~/.codex` (#39805).
9. **i18n collisions** — Chinese “极高” maps two distinct reasoning levels (#31963).
10. **Browser tooling regressions** — In-app browser runtime exits on init (#39591); browser use + mobile remote both broken post-update (#35499).

---

*Generated from github.com/openai/codex data as of 2026-08-21. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-21

## 1. Today's Highlights
The project shipped a nightly release (v0.56.0-nightly) fixing empty text turn preservation and publishing the v0.57.0-preview changelog. Core engineering focus remains on stabilizing agent orchestration: multiple PRs address subagent lifecycle bugs, history rollback optimization, and git environment sanitization. Community pain points cluster around agent hangs, shell execution stalls, and Auto Memory reliability.

## 2. Releases
**v0.56.0-nightly.20260820.ge90c63fa1**  
- `fix(core)`: preserve empty text turns with tools or media ([#28892](https://github.com/google-gemini/gemini-cli/pull/28892))  
- Changelog published for upcoming v0.57.0-preview.0 ([#28918](https://github.com/google-gemini/gemini-cli/pull/28918))

## 3. Hot Issues (Top 10 by Engagement & Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | **Critical reliability bug**: subagents falsely report success when hitting turn limits, masking failures in multi-agent workflows. | 12 comments, 2 👍, P1, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | **High-impact UX blocker**: generalist agent hangs indefinitely on simple tasks (folder creation); workaround is disabling subagents. | 8 comments, 8 👍, P1, `status/need-retesting` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command execution stuck at "Waiting input" | **Core UX regression**: completed shell commands leave CLI awaiting input, breaking flow for routine ops. | 4 comments, 3 👍, P1, `effort/medium` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage model's bash affinity via Zero-Dependency OS Sandboxing | **Strategic feature**: enable native POSIX tool chaining (grep/sed/awk) securely—aligns with model training. | 8 comments, 1 👍, P2, `effort/large` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component level evaluations | **Eval infrastructure**: scaling behavioral evals (76 tests across 6 models) for regression detection. | 7 comments, P1, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess impact of AST-aware file reads, search, and mapping | **Performance/accuracy**: AST tools could reduce token noise and misaligned reads; tracked as EPIC. | 7 comments, 1 👍, P2 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills and sub-agents enough | **Agent autonomy gap**: model fails to invoke custom skills/subagents without explicit instruction. | 6 comments, P2, `status/need-retesting` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory from retrying low-signal sessions indefinitely | **Resource leak**: unprocessed low-signal sessions re-queued endlessly, wasting extraction cycles. | 5 comments, P2 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Enhance browser_agent resilience: session takeover & lock recovery | **Browser agent hardening**: current fail-fast on profile locks breaks persistent sessions. | 4 comments, P3, `kind/customer-issue` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent fails in Wayland | **Platform blocker**: browser agent non-functional on Wayland, limiting Linux adoption. | 4 comments, 1 👍, P1, `agent/browser`, `status/need-retesting` |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Summary | Status |
|----|---------|--------|
| [#28934](https://github.com/google-gemini/gemini-cli/pull/28934) | **History rollback & retry nudge optimizations**: prevents context bloat on tool cancellation, improves prefix caching. | Open, `size/l` |
| [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) | **A2A server fix**: clears stale cancellation error on new message turns, resolves GCA "Execution aborted" crashes. | Open, `size/l` |
| [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) | **Git env sanitization**: keeps `GIT_CONFIG_*` triplets consistent; malformed entries previously broke all git invocations. | Open, **P1**, `area/core` |
| [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | **Interrupted response placeholder**: stops persisting synthetic model message after tool interruption (fixes #28927). | Open, `area/core` |
| [#28933](https://github.com/google-gemini/gemini-cli/pull/28933) | **PR generation orchestrator**: iterative state machine for bug-fixing, sandbox isolation, ESLint analysis, trajectory logging. | Open, `size/l` |
| [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) | **macOS Seatbelt hardening**: isolates Docker/container sockets & binaries to prevent sandbox escape via VirtioFS mounts. | Open, `size/l` |
| [#28930](https://github.com/google-gemini/gemini-cli/pull/28930) | **Drop unsafe `diff.external` override**: empty string value caused git to abort; removes override added in #28792. | Open, **P1**, `area/core` |
| [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) | **Preview model substitution warning**: alerts user when preview model silently falls back to `auto-gemini-2.5` (fixes #28825). | Open, **P1/P2** |
| [#28910](https://github.com/google-gemini/gemini-cli/pull/28910) | **Gemini 3.7/3.6 Flash & 3.5 Flash-Lite support**: adds model configs and selection across core & CLI. | **Closed**, P2 |
| [#28867](https://github.com/google-gemini/gemini-cli/pull/28867) | **SSR Agent fix**: prevents subagent initialization when agents mode is disabled (regression from v0.33.0, fixes #22093). | **Closed**, **P2** |

## 5. Feature Request Trends
1. **AST-aware code navigation** (#19873, #22745, #22746) — surgical reads, reduced token spend, precise method-boundary tooling.  
2. **Subagent observability & control** (#22323, #21968, #22598, #20195) — trajectory sharing, auto-invocation, symlink support.  
3. **Browser agent hardening** (#22232, #21983, #22267) — session takeover, Wayland support, settings.json respect.  
4. **Auto Memory reliability** (#26522, #26525, #26523, #26516) — redaction, retry quotas, invalid patch quarantine.  
5. **PR generation automation** (#28933, #28936, #28932, #28937) — orchestrator state machine, Antigravity runner, eval sandboxing.  
6. **Model fleet expansion** (#28910, #28828) — Flash 3.7/3.6, Flash-Lite 3.5, preview entitlement transparency.  
7. **Windows long-path support** (#28926) — `core.longpaths=true` guidance for contributors.

## 6. Developer Pain Points
- **Agent hangs & stalls**: generalist agent hangs (#21409), shell "Waiting input" ghost state (#25166), browser agent Wayland failure (#21983).  
- **Subagent state opacity**: false GOAL success on MAX_TURNS (#22323), missing subagent context in bug reports (#21763), no skill auto-discovery (#21968).  
- **Environment corruption**: git config sanitization breaks all git ops (#28938), preview model silent fallback (#28828), extension env var injection (#28863).  
- **Auto Memory noise**: infinite low-signal retries (#26522), post-hoc redaction (#26525), invalid patch accumulation (#26523).  
- **Tooling limits**: 400-tool 400 error (#24246), symlink agent recognition (#20079), tmp script sprawl (#23571).  
- **Platform friction**: Windows MAX_PATH failures (#28926), flaky privilege-dependent tests (#28832), terminal resize flicker (#21924).  

---

*Generated from `google-gemini/gemini-cli` GitHub activity (2026-08-20 → 2026-08-21). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-21

## 1. Today's Highlights
Copilot CLI v1.0.81-6 (prerelease) introduces configurable startup modes and stdin-based auth token login, while addressing ACP client event subscriptions. The issue tracker shows intense activity around MCP server connectivity, OAuth authentication flows, and terminal UX regressions—particularly on Windows/WSL. Enterprise managed-settings validation and sandbox permission bypasses remain friction points for organizational adopters.

## 2. Releases
**v1.0.81-6** (prerelease)  
- **Added**: `defaultMode` and `defaultPermissionMode` settings to control startup mode and approval behavior for new interactive sessions; `--with-token` flag for `copilot login` to read auth token from stdin.  
- **Improved**: ACP clients now receive subagent IDs, raw event subscriptions, and live title/mod updates.  
🔗 [Release v1.0.81-6](https://github.com/github/copilot-cli/releases/tag/v1.0.81-6)

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1481](https://github.com/github/copilot-cli/issues/1481) | **SHIFT+ENTER executes prompt instead of line break** | Violates universal chat UX convention; forces `CTRL+ENTER` for newlines. | 28 comments, 17 👍 — High frustration; workflow disruption. |
| [#4390](https://github.com/github/copilot-cli/issues/4390) | **Org-enabled models (Claude Sonnet/Opus 5, Kimi K3) missing from catalogue** | Enterprise customers cannot use models explicitly approved by their organization. | 15 comments, 7 👍 — Blocks adoption for Anthropic model users. |
| [#3162](https://github.com/github/copilot-cli/issues/3162) | **Registry-listed custom MCP servers falsely reported as "blocked by policy"** | False-negative in registry validation breaks legitimate MCP integrations. | 7 comments, 1 👍 — Affects custom MCP server workflows. |
| [#4096](https://github.com/github/copilot-cli/issues/4096) | **Third-party MCP OAuth connected in UI but tools missing in CLI sessions** | OAuth token not bridged from desktop app to CLI sessions; tools unavailable. | 6 comments, 2 👍 — Breaks Atlassian/GitLab MCP integrations. |
| [#4503](https://github.com/github/copilot-cli/issues/4503) | **SDK server reports ready without auth; Slack session creation fails** | Missing `COPILOT_SDK_AUTH_TOKEN` causes generic session creation errors. | 5 comments — Impacts Slack bot deployments. |
| [#4439](https://github.com/github/copilot-cli/issues/4439) | **GitLab MCP OAuth rejected due to RFC 8414 issuer mismatch** | Self-managed GitLab MCP servers fail dynamic client registration. | 5 comments, 3 👍 — Blocks GitLab Self-Managed users. |
| [#4206](https://github.com/github/copilot-cli/issues/4206) | **Environment footer stuck on "Loading:" under org MCP policy** | Handshake stall leaves UI in perpetual loading state despite loaded resources. | 4 comments, 3 👍 — Enterprise UX regression. |
| [#4038](https://github.com/github/copilot-cli/issues/4038) | **Non-interactive mode: late-connecting MCP injects empty message; model echoes system prompt** | 7+ tool MCP servers trigger empty user message, derailing prompt response. | 3 comments — Silent failure in automated workflows. |
| [#4524](https://github.com/github/copilot-cli/issues/4524) | **Sandbox blocks git operations despite enabled directories** | Overly restrictive sandbox prevents git usage even with allowed paths. | 3 comments — Breaks agent workflows requiring git. |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | **`store_memory` fails in v1.0.81 prereleases: "Instance id is required"** | Native memory writer invoked without required instance ID; memory feature broken. | 3 comments — Regression in prerelease channel. |

## 4. Key PR Progress
Only one PR updated in the last 24h:

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#4510](https://github.com/github/copilot-cli/pull/4510) | Remove GitHub Copilot CLI documentation from README | Strips installation/usage docs from README; unclear motivation. | Open, 0 comments |

*Note: Low PR activity suggests focus on issue triage and prerelease stabilization over feature merges.*

## 5. Feature Request Trends
From the issue corpus, the most-requested directions are:

1. **MCP Server Reliability** — Robust stdio process management (#3698), workspace `.mcp.json` session connectivity (#4542), OAuth token bridging (#4096), and registry validation fixes (#3162, #4439).
2. **Session Persistence & Portability** — Cross-device session sync (#4539), WSL/Windows session anchoring (#4543), VS Code panel transcript restoration (#4529), and reasoning-effort persistence (#4530).
3. **Terminal UX Polish** — Standard keybindings (#1481), pending-line cleanup (#4532), input freezing during parallel subagents (#4533), queue editor enhancements (#4541), and image paste support (#4544).
4. **Enterprise Policy Granularity** — Enum validation for `disableBypassPermissionsMode` (#4349), non-interactive mode policy respect (#4528), and sandbox escape hatches (#4524).
5. **Windows/WSL First-Class Support** — `wta.exe` path quoting (#4540), VS Code Remote in WSL sandboxes (#4546), Git config env var leakage (#4531), and personal skills discovery (#4545).

## 6. Developer Pain Points
Recurring frustrations surfaced across issues:

- **MCP Authentication Fragility** — OAuth flows break between desktop app and CLI (#4096, #4439, #4503); tokens not propagated; issuer validation too strict.
- **Sandbox Overreach** — Git blocked despite explicit allowlists (#4524); `code .` launch fails in WSL (#4546); environment variable pollution breaks Git discovery (#4531).
- **Terminal Input/Render Bugs** — Non-standard keybindings (#1481), zombie pending lines (#4532), input deadlock during subagent spawns (#4533), and missing queue management (#4541).
- **Session State Loss** — Ctrl+Z loses session (#4539), Remote-SSH reconnect clears panel (#4529), WSL/Windows split session stores (#4543).
- **Enterprise Configuration Drift** — Managed-settings schema rejects valid values (#4349), non-interactive bypass ignores policy (#4528), model catalogue out of sync with org allowlist (#4390).
- **Prerelease Regression Velocity** — Memory tool broken (#4535), MCP connectivity regressed (#4542), suggesting insufficient prerelease gating.

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-21. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-21

---

## 1. Today's Highlights
- **No new releases** in the last 24 hours.  
- A **feature proposal** (#2613) introduces *Kimi Memory Plus*, a workspace-scoped long-term memory plugin designed to persist context across sessions via an MCP server integration.  
- A **documentation PR** (#2614) clarifies plugin security boundaries, credential handling for `inject`, and persistent data lifecycle—critical for plugin authors and security-conscious users.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#2613](https://github.com/MoonshotAI/kimi-cli/issues/2613) | **Proposal: Kimi Memory Plus — workspace-scoped long-term memory plugin** | Proposes a persistent, per-workspace memory layer using the existing explicit-memory tools as an MCP server. Addresses a core gap: context loss between sessions. Compatibility note confirms current CLI can register the tools but doesn’t yet recognize the plugin format. | 👍 0 · 0 comments (newly filed) |

*Only one issue updated in the last 24h. Historical trend (not shown) suggests memory/persistence and plugin extensibility are top community asks.*

---

## 4. Key PR Progress
| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **docs(plugins): document security and persistent data** | • Plugins run as local subprocesses with full user file/network access<br>• `inject` values must not be logged/committed<br>• Reinstalling a plugin replaces its installed directory<br>• Recommends separate persistent directories per plugin | Open |

*Only one PR updated in the last 24h. This doc work signals hardening of the plugin sandbox model.*

---

## 5. Feature Request Trends (from recent Issues)
1. **Cross-session memory / context persistence** — #2613 is the latest in a line of requests for durable, workspace-scoped memory.
2. **Plugin ecosystem maturation** — Security docs, sandboxing, distribution, and versioning.
3. **MCP server integration** — First-class support for Model Context Protocol servers as plugins.
4. **Workspace-scoped configuration** — Per-project settings, memories, and tool registrations.

---

## 6. Developer Pain Points
- **Context reset on every session** — No built-in long-term memory; workarounds require external tooling.
- **Plugin security opacity** — Developers unclear on what privileges plugins have (now addressed in #2614).
- **Credential leakage risk** — `inject` mechanism lacks guardrails; docs now warn against logging/committing.
- **Plugin upgrade/reinstall behavior** — Reinstall wipes plugin directory; no migration path documented.

---

*Data source: `github.com/MoonshotAI/kimi-cli` — Issues & PRs updated 2026-08-20 → 2026-08-21.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-21

## Today's Highlights
OpenCode released **v1.18.19** with native OpenAI/Anthropic passthroughs for Cloudflare AI Gateway and tightened Codex rate limits to match ChatGPT subscriptions. The community is heavily focused on **performance regressions** — high CPU usage (#30086, 47 comments), TUI rendering lag with subagents (#42657), and a memory leak in the web server (#34574) dominate discussions. Meanwhile, v2 development continues with critical fixes for subagent session spawning (#43619) and TUI crash loops (#43693/43696/43699).

---

## Releases

### v1.18.19
**Core Improvements:**
- Added native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models
- Matched Codex rate limits more closely to ChatGPT subscription limits (@GameOn223)

**Bugfixes:**
- Removed built-in Qwen sampling defaults that could send unsupported settings
- (Additional fixes truncated in source)

[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.19)

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#30086](https://github.com/anomalyco/opencode/issues/30086) **High CPU usage in newer versions** | Users report 3x CPU spike since ~7 days ago; blocks running >3 concurrent sessions (was 10+). Affects core usability. | 👍 24 | 47 comments — **Top priority** |
| [#4754](https://github.com/anomalyco/opencode/issues/4754) **Copy/paste broken on Linux** | Dual clipboard buffers (primary vs clipboard) cause inconsistent paste behavior in terminal. Long-standing UX pain point. | 👍 18 | 17 comments — **Closed** |
| [#30158](https://github.com/anomalyco/opencode/issues/30158) **Terminal button missing in web UI since v1.15.12** | Regression: terminal access icon disappeared from web UI top-right. Blocks web-based workflows. | 👍 14 | 12 comments |
| [#27474](https://github.com/anomalyco/opencode/issues/27474) **TypeError: Failed to fetch on explore/agent clicks** | Frontend fetch failures when navigating agents; stack traces point to renderer bundle. Blocks agent workflows. | 10 comments |
| [#7675](https://github.com/anomalyco/opencode/issues/7675) **Install script ignores OPENCODE_INSTALL_DIR** | Documented env vars (`OPENCODE_INSTALL_DIR`, `XDG_BIN_DIR`) not respected; hardcodes to `~/.opencode/bin`. | 👍 9 | 10 comments — **Closed** |
| [#27875](https://github.com/anomalyco/opencode/issues/27875) **Enter key fails on permission prompts in subagents** | Subagent permission requests don't accept `Enter` to confirm (only `Ctrl+Enter` works). Stalls automated flows. | 👍 1 | 9 comments |
| [#43619](https://github.com/anomalyco/opencode/issues/43619) **[v2] subagent requires sessionID for first child** | Schema requires `sessionID` but docs say omit for new session — blocks all delegation workflows in v2. | 9 comments — **Closed** |
| [#20458](https://github.com/anomalyco/opencode/issues/20458) **Mouse escape sequences garbled after TUI exit** | Terminal left in broken state post-exit; separate from in-session mouse issues. Affects terminal hygiene. | 👍 5 | 8 comments |
| [#35107](https://github.com/anomalyco/opencode/issues/35107) **Memory grows until Bun process killed** | `updatePart` deep-clones parts on every token; 93K events/200 sessions → massive heap pressure. Mimalloc doesn't release. | 4 comments |
| [#43054](https://github.com/anomalyco/opencode/issues/43054) **Models other than hy3-free/deepseek flash fail with "big-pickle" error** | Provider routing bug: all models except two free tiers return `Forbidden: {"model":"big-pickle"}`. | 👍 2 | 4 comments |

---

## Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#42980](https://github.com/anomalyco/opencode/pull/42980) **fix(core): reduce Windows server CPU under parallel sessions** | +88% SSE throughput (77K→145K events/s), 48% less CPU. Optimizes process spawning & executable resolution. | **Major perf win for Windows** |
| [#43738](https://github.com/anomalyco/opencode/pull/43738) **fix(app): speed up cold home navigation** | Home tab cold click: 495-639ms → ~86ms (warm). Fixes query cache miss on first navigation after idle. | UX polish |
| [#43736](https://github.com/anomalyco/opencode/pull/43736) **[contributor] fix(opencode): preserve Cerebras completion limit** | Adds Cerebras plugin; suppresses generic `max_tokens` when native `max_completion_tokens` set. | Provider compatibility |
| [#43677](https://github.com/anomalyco/opencode/pull/43677) **[contributor] fix(core): send console Anthropic API key header** | Translates Console Bearer → `x-api-key` for Anthropic requests. Adds regression test. | Auth fix |
| [#43675](https://github.com/anomalyco/opencode/pull/43675) **[contributor] fix(opencode): answer subagent permissions in run** | Auto-approve/reject permissions for non-interactive run session trees. Covers dangerous auto-approval + default rejection. | Automation enablement |
| [#43681](https://github.com/anomalyco/opencode/pull/43681) **fix(core): resolve Bedrock AWS profile credentials for v2** | Enables Bedrock with AWS profiles on v2 branch. Author uses in production 1.5 weeks. | Enterprise/cloud support |
| [#43650](https://github.com/anomalyco/opencode/pull/43650) **fix(core): prevent shell eviction loop** | Removes stale shell IDs from exit-order queue; stops infinite retention eviction on removed shells. | Stability |
| [#43715](https://github.com/anomalyco/opencode/pull/43715) **fix(opencode): preserve Cerebras completion limit** | Cerebras rejects both `max_tokens` + `max_completion_tokens`; OpenCode now synthesizes correctly. | Provider fix |
| [#43735](https://github.com/anomalyco/opencode/pull/43735) **[contributor] fix(client): authenticate PTY websocket connections** | Adds authenticated single-use tickets for PTY WebSockets; removes raw unauthenticated fetch in desktop. | Security hardening |
| [#43733](https://github.com/anomalyco/opencode/pull/43733) **fix(core): avoid deep cloning session parts** | Fixes #35107: eliminates `structuredClone(part)` on every update. Large text/reasoning/tool-output no longer duplicated. | **Critical memory leak fix** |

---

## Feature Request Trends

1. **Persistent UI configuration** — Multiple requests for `ui.sidebar.enabled` config (#40086) to disable context sidebar permanently; users want settings to survive restarts.

2. **Credential refresh without restart** — #43281 requests token refresh command/interval for custom providers (e.g., short-lived API keys). Critical for enterprise/ephemeral credentials.

3. **Install path flexibility** — #7675 (closed) and related: respect `OPENCODE_INSTALL_DIR`, `XDG_BIN_DIR`, `HOME/bin` per XDG spec.

4. **Model/context window control for local providers** — #31433: GUI/TUI lacks way to set context window for local OpenAI-compatible endpoints (Jan AI, LM Studio, Ollama); defaults to 0.

5. **Per-MCP-server trust** — #40125: fingerprint pinning for self-signed certs instead of global `insecure: true`; supports private CAs via `caFile`.

6. **Subagent workflow unblocking** — v2 issues (#43619, #43675) show demand for reliable delegation: auto-permissions, sessionID handling, run-tree tracking.

---

## Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **CPU/memory regressions in recent versions** | #30086 (47 comments, 24👍), #35107 (memory leak), #42657 (97% CPU on render thread with subagents), #34574 (web server RSS 127MB→4.9GB/20min) | **Very High** — multiple independent reports across TUI, web, Bun process |
| **TUI instability & crashes** | #43693/43696/43699 (triple "remove expects renderable child" crashes), #43711 (blank TUI), #43591 (segfault in v2), #43728 (dialog alignment) | **High** — cluster of TUI crashes in last 24h |
| **Subagent/permission UX broken** | #27875 (Enter key ignored), #43619 (sessionID required for first child), #43675 (auto-permissions for runs), #42657 (lag with 2-4 subagents) | **High** — blocks agent delegation workflows |
| **Web UI regressions** | #30158 (terminal button missing since v1.15.12), #27474 (fetch errors on agent explore), #43659 (input text not rendering in Desktop) | **Medium** — consistent web/Desktop breakage |
| **Provider/model routing bugs** | #43054 (only 2 free models work), #43714 (Responses API 400), #43672 (GLM-5.3 fails with Claude), #31433 (local model context window) | **Medium** — provider integration fragility |
| **Install/config not respecting standards** | #7675 (ignores OPENCODE_INSTALL_DIR/XDG), #43700 (root files scattered, wants single selectable dir) | **Medium** — Linux/enterprise adoption friction |

---

*Digest generated from GitHub data (last 24h). Links point to anomalyco/opencode repository.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-21

## Today's Highlights
The community is heavily focused on Windows TUI stability and core agent reliability. A major discussion (#7547, 36 comments) is underway to define Pi's Windows support strategy, while a critical auto-compaction bug (#6879, 17👍) allows context to exceed 100% until the provider rejects the request. Multiple PRs landed fixes for TUI rendering crashes, clipboard soft-wrap handling, and cursor behavior.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) **Windows support strategy** | Defines whether Pi invests in native Windows TUI, WSL-first, or delegates to extensions. Affects a huge potential user base. | 36 comments, 1👍 — active design discussion |
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction never triggers past 100%** | Context grows unchecked until API rejection (373k tokens in report). Breaks long-running agentic sessions. | 18 comments, **17👍** — high urgency |
| [#5023](https://github.com/earendil-works/pi/issues/5023) **Terminal randomly scrolls to top** | TUI jumps to session start during model output, disrupting workflow. Closed but may need regression watch. | 17 comments, 2👍 |
| [#6300](https://github.com/earendil-works/pi/issues/6300) **Windows: input redraws per keystroke** | Each character appears on a new line in cmd.exe / Windows Terminal. Blocks Windows adoption. | 8 comments |
| [#3442](https://github.com/earendil-works/pi/issues/3442) **WebSocket transport for openai-responses** | Missing `transport: "websocket"` support limits latency/throughput for Responses API users. | 9 comments |
| [#8157](https://github.com/earendil-works/pi/issues/8157) **Migrate grok-mermaid → lovely-mermaid** | Current mermaid renderer inherits many corner cases; lovely-mermaid has better parsers/maintenance. | 7 comments, 1👍 |
| [#6996](https://github.com/earendil-works/pi/issues/6996) **Gemini 3.x tool use fails (missing thought_signature)** | Tool calls break on Gemini 3.5/3.6 flash — blocks adoption of newer Gemini models. | 5 comments |
| [#8133](https://github.com/earendil-works/pi/issues/8133) **Per-model compaction settings** | Request to allow `compaction.profiles` keyed by model ID; global fallback retained. | 3 comments, 3👍 |
| [#8081](https://github.com/earendil-works/pi/issues/8081) **Unknown slash commands sent silently to model** | `/exit`, `/bye` etc. waste tokens and pollute transcript instead of erroring or aliasing. | 2 comments |
| [#8417](https://github.com/earendil-works/pi/issues/8417) **SSH passphrase prompt overlays TUI on startup** | Background git update check for SSH packages prompts on top of TUI, breaking UI. | 2 comments |

---

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#8416](https://github.com/earendil-works/pi/pull/8416) | **Fix** | `sendCustomMessage({ triggerTurn: false })` now queues until tool batch ends, preventing provider rejections from interleaved toolCall/toolResult. |
| [#8118](https://github.com/earendil-works/pi/pull/8118) | **Feature** | Adds `requiresNonNullAssistantContent` compat flag for OpenAI-compatible gateways that reject `null` assistant content (tool-call-only messages). |
| [#8405](https://github.com/earendil-works/pi/pull/8405) | **Fix** | Normalizes `kimi-coding` thinking signatures to base64url, fixing 400 errors on 2nd+ reasoning turns. |
| [#8407](https://github.com/earendil-works/pi/pull/8407) | **Fix** | Preserves logical line boundaries when copying soft-wrapped text in fullscreen TUI — fixes broken paragraphs/URLs in clipboard. |
| [#8363](https://github.com/earendil-works/pi/pull/8363) | **Fix** | Resets link colors before table padding/borders to stop color leaks in wrapped markdown tables. Includes tests. |
| [#5268](https://github.com/earendil-works/pi/pull/5268) | **Fix** | Renders hardware cursor by default so prompt cursor hollows on blur — unfocused Pi window no longer looks active. |
| [#8302](https://github.com/earendil-works/pi/pull/8302) | **Feature** | Adds Amazon Bedrock Mantle support (new API surface for GPT/openai.gpt-5.x models) — WIP, awaiting API key perms for e2e test. |
| [#4537](https://github.com/earendil-works/pi/pull/4537) | **Feature** | Implements `/exit` alias for `/quit` with identical behavior and docs — addresses muscle memory from Claude Code/Codex. |
| [#8399](https://github.com/earendil-works/pi/pull/8399) | **Feature** | Makes default model/thinking searchable in `/model` and `/thinking` selectors; adds "default" label for clarity. |
| [#8395](https://github.com/earendil-works/pi/pull/8395) | **Fix** | Replaces spread operator with loop in `ToolExecutionComponent.render()` to avoid V8 stack overflow on large diffs (~14.5MB). |

---

## Feature Request Trends

1. **Windows-first experience** — Multiple issues (#7547, #6300, #8417) demand reliable native Windows TUI, not just WSL workarounds.
2. **Smarter context management** — Per-model compaction profiles (#8133), fork-aware cache keys (#8348), and fixing the auto-compaction trigger (#6879).
3. **CLI ergonomics parity** — Aliases for `/exit`, `/bye`, `/config` (#4538, #5161, #5340, #5863, #6193) to match Claude Code/Codex/Opencode muscle memory.
4. **Provider expansion** — Amazon Bedrock Mantle (#8302), Umans AI (#8404), WebSocket for OpenAI Responses (#3442), kimi-coding fixes (#8405).
5. **TUI power-user features** — Per-tool output expansion (#8344), scroll rate config (#8370), theme change events (#4427), color value exposure (#8398).
6. **Extension safety** — Non-fatal tool name conflicts (#7696), settled-safe session control for extensions (#8390).

---

## Developer Pain Points

- **Windows TUI is fragile**: Input redraw per keystroke (#6300), random scroll-to-top (#5023), SSH passphrase prompts overlaying UI (#8417).
- **Context compaction is unreliable**: Doesn't fire until provider rejects (#6879); no per-model tuning (#8133); forked sessions lose cache (#8348).
- **Silent failures on unknown commands**: `/exit` etc. sent to model as chat, wasting tokens and polluting history (#8081).
- **Large diffs crash the TUI**: Spread operator in render path hits V8 stack limit (#8395).
- **Clipboard breaks on soft-wrap**: Visual lines copied as hard newlines, destroying formatting (#8407).
- **Extension conflicts are fatal**: Duplicate tool names exit process instead of respecting load order (#7696).
- **Gemini 3.x tool calls broken**: Missing `thought_signature` in history causes 400 errors (#6996).

---

*Data sourced from `github.com/badlogic/pi-mono` — Issues/PRs updated in the last 24h.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-21

---

## 1. Today's Highlights

- **v0.21.15 released** with Web Shell enhancements: file attachments via composer/@-selection, improved streaming, and instant sidebar sync (#9405, #9477).  
- **Cross-session messaging** lands in PR #9576 — sessions on the same machine can now discover and message each other behind an explicit inbound gate.  
- **Review pipeline hardening** continues: convergence advisories (#9526), Aone Code comment dedup (#9613), self-PR detection (#9616), and incremental cache for single-commit CRs (#9618) are all in active development.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.15** | Stable | Web Shell: file attachments via composer/@-selection, better streaming, immediate sidebar sync (#9405, #9477); approval/ask-user dialogs as in-flow sheets; background-agent false-failure fix. |
| **v0.21.11-nightly.20260820.b414f135fa** | Nightly | DSW EAS SWE + TB smoke tests passing (SWE-bench Verified 1/1 across multiple runs); Harbor adapter cache-gate repair validated. |

> **Note**: Nightly builds show consistent SWE-bench Verified success (1/1 cases) after sandbox bootstrap and cache repairs.

---

## 3. Hot Issues (Top 10 by Community Engagement)

| Issue | Type | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#9278](https://github.com/QwenLM/qwen-code/issues/9278) `/review` publish-time convergence advisory design | Feature/Design | Addresses runaway review loops (gain >1) where findings beget larger diffs beget more findings. Telemetry-driven exit criteria. | 8 comments, P2, in-progress |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) Duplicate provider tool call id | Bug (Core) | Recurring "Duplicate provider tool call id" errors break tool execution; affects reliability of agent loops. | 7 comments, needs-retest, P2 |
| [#8724](https://github.com/QwenLM/qwen-code/issues/8724) Cross-session messaging | Feature | Enables multi-agent workflows on one machine: `list_agents` + `send_message` with fail-closed receive gate. | 7 comments, PR #9576 active |
| [#9309](https://github.com/QwenLM/qwen-code/issues/9309) Compression regression (`/compress-fast` then `/compress`) | Bug (Token mgmt) | Context compressed 170k→7k then incorrectly reported; suggests token accounting bug in compression pipeline. | 6 comments, P3 |
| [#2128](https://github.com/QwenLM/qwen-code/issues/2128) Unbounded UI History memory growth | Bug (Session) | `useHistoryManager.history` array grows without limit during long sessions (dozens of hrs), causing OOM. | 5 comments, P1, long-standing |
| [#9485](https://github.com/QwenLM/qwen-code/issues/9485) Web Shell copy fails over HTTP (non-localhost) | Bug (UI/Web) | Clipboard API requires secure context; breaks copy buttons when daemon served via `http://<remote-ip>`. | 5 comments, **Closed** (fix likely in v0.21.15) |
| [#9556](https://github.com/QwenLM/qwen-code/issues/9556) Review pipeline: should it keep granting code execution as invoking user? | Security/CI | Root cause of unresolved findings: review runs execute code as the reviewer inside worktrees. Architectural security question. | 5 comments, needs-discussion |
| [#9573](https://github.com/QwenLM/qwen-code/issues/9573) Resumed sessions show "Tool result missing" for completed calls | Bug (Session/ACP) | Session resume falsely marks successful tool calls as failed; breaks trust in history replay. | 3 comments, P1, needs-retest |
| [#9597](https://github.com/QwenLM/qwen-code/issues/9597) Hierarchical memory loads same `QWEN.md` twice via symlink | Bug (Memory) | Symlinked workspace `QWEN.md` → ancestor `QWEN.md` causes duplicate loading; pollutes context. | 3 comments, P2 |
| [#9465](https://github.com/QwenLM/qwen-code/issues/9465) Web Shell sidebar pinning slow & ordering unstable | Bug (UI/Web) | Pin/unpin takes long to reflect; pinned section order jumps on refetch. UX degradation for multi-session users. | 3 comments, P2, needs-triage |

---

## 4. Key PR Progress (Top 10 by Impact/Activity)

| PR | Status | Summary |
|----|--------|---------|
| [#9576](https://github.com/QwenLM/qwen-code/pull/9576) | Open | **Cross-session messaging**: UNIX domain socket per session, newline-delimited JSON frames, inbound policy gate. Enables `list_agents`/`send_message` (implements #8724). |
| [#9526](https://github.com/QwenLM/qwen-code/pull/9526) | Open | **Convergence advisory**: Telemetry-driven "land-with-residual-risk" signal when Criticals persist across rounds with stable posting volume. Addresses #9278 loop gain. |
| [#9607](https://github.com/QwenLM/qwen-code/pull/9607) | Open | **Inline thinking blocks**: Demote (don't fail) balanced `` blocks in `content` on OpenAI-compatible endpoints — handles hybrid models streaming reasoning twice. |
| [#9590](https://github.com/QwenLM/qwen-code/pull/9590) | Open | **Provider-aware reasoning controls**: WebShell UI now matches each model's documented capabilities (toggle-only, effort tiers, mandatory-thinking) for DeepSeek V4, GLM 5.2, Kimi. |
| [#9609](https://github.com/QwenLM/qwen-code/pull/9609) | Open | **Web Shell focus fix**: Tool-approval dialog no longer steals focus while user types in composer (yields to editable elements). Sibling of #9571. |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | Open | **Rewind mapping refactor**: Stable prompt identity as single source of truth for user turns, model history, persisted sessions, ACP rewind, fork history. |
| [#9527](https://github.com/QwenLM/qwen-code/pull/9527) | Open | **Sandbox image digest binding**: Exported sandbox image pinned to pulled digest (fixes supply-chain drift from mutable tags). Salvaged from #9214. |
| [#9604](https://github.com/QwenLM/qwen-code/pull/9604) | Open | **Aone `--comment` Round-5 cleanup**: Lands all deferred Suggestions from review bot round-5 on Aone write path (Critical fixes already in). |
| [#9392](https://github.com/QwenLM/qwen-code/pull/9392) | Open | **TLS for channel workers**: `qwen serve` workers now get `https://` loopback URL when daemon uses `--tls-cert/--tls-key`; validates HTTPS. |
| [#9577](https://github.com/QwenLM/qwen-code/pull/9577) | Open | **CI hardening**: Release workflows disable npm lifecycle scripts; explicit postinstall steps; PAT not persisted through deps. Supply-chain hygiene. |

> **Closed this cycle**: #9462 (fallback comment double-post), #9461 (review loop non-settling explanation), #9480 (CI wipe guard symlink wedge), #9586 (ACP duplicate tool-call breaker), #9579 (deferred Round-5 suggestions), #9485 (HTTP clipboard).

---

## 5. Feature Request Trends

| Theme | Representative Issues/PRs | Signal |
|-------|---------------------------|--------|
| **Review pipeline maturity** | #9278, #9526, #9613–#9619 | Convergence detection, Aone parity (dedup, self-PR, cache, inline anchoring, AI-comment flag, cleanup audit), telemetry-driven exit. |
| **Multi-session / multi-agent** | #8724, #9576, #8927 (sessionRotation) | Cross-session messaging, session lifetime bounds, fleet dashboard (#7167). |
| **Provider/model extensibility** | #8368 (Kimi, Xiaomi MiMo), #9590 (reasoning controls) | First-class auth presets + per-provider UI for reasoning params. |
| **Web Shell UX polish** | #9465, #9571, #9611, #9260 | Pinning perf, focus management, manual name persistence across `/clear`. |
| **Session reliability** | #2128 (memory), #9573 (resume), #9466 (rewind), #9597 (memory dedup) | Bounded history, correct resume, stable identity, symlink-safe memory. |
| **Security/supply-chain** | #9556, #9577, #9557 | Review code-execution scope, CI script disabling, git identity pinning. |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session memory / history leaks** | #2128 (unbounded UI History), #9573 (resume shows false failures), #9597 (duplicate QWEN.md) | High — 3+ distinct issues, P1/P2 |
| **Tool-call id collisions** | #8382 (duplicate provider tool call id), #9586 (ACP breaker leaves orphaned calls) | Medium — core reliability blocker |
| **Compression / token accounting bugs** | #9309 (compress-fast → compress regression), #9348 (thinking tag leak) | Medium — affects long-context workflows |
| **Web Shell over non-localhost HTTP** | #9485 (clipboard fails), #9465 (pinning lag), #9571/#9611 (focus steal) | Medium — remote dev common |
| **Review loop instability** | #9278 (runaway loop), #9207 (verification mutates shared worktree), #9556 (code exec as reviewer) | High — architectural, security-adjacent |
| **CI flakiness from env drift** | #9480 (wipe guard + symlink), #9577 (install scripts), #9462 (fallback comment race) | Medium — infra tax on contributors |

---

*Generated from `github.com/QwenLM/qwen-code` data as of 2026-08-21. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-21

---

## 1. Today's Highlights

CodeWhale v0.9.10 shipped with a focus on **retention, identity, and durable approvals** — marking the first release under the new "CodeWhale" brand (legacy `deepseek-tui` npm package deprecated). The team is simultaneously executing a major **crate decomposition (EPIC-005)** to modularize the TUI, and a sweeping **i18n "dictionary spine" migration** eliminating all `isZh` branches in favor of per-locale dictionaries. First-run UX overhaul and token-window bugs round out the highest-impact work.

---

## 2. Releases

### **v0.9.10 — Retention, Identity & Durable Approvals**  
**PR:** [#5513](https://github.com/Hmbown/CodeWhale/pull/5513) | **Release:** [v0.9.10](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.10)  
- **Brand transition:** `codewhale` CLI, npm package, and assets now canonical; `deepseek-tui` deprecated.  
- **Durable approvals:** Persistent approval state survives restarts; new `/approvals` command surfaces history.  
- **First-run overhaul:** Progressive onboarding replaces front-loaded config wall (tracks [#5522](https://github.com/Hmbown/CodeWhale/issues/5522)).  
- **Release hardening:** Bounded CI jobs, artifact workflows, and release-candidate pipelines ([#5496](https://github.com/Hmbown/CodeWhale/issues/5496)).  
- **Bug fixes:** Header status indicator regression since 0.9.7 ([#5512](https://github.com/Hmbown/CodeWhale/issues/5512)), `max_tokens` overshoot on vLLM routes ([#5516](https://github.com/Hmbown/CodeWhale/issues/5516)), MCP image result handling ([#5515](https://github.com/Hmbown/CodeWhale/pull/5515)).

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#5316](https://github.com/Hmbown/CodeWhale/issues/5316)** | **EPIC-005: TUI Crate Decomposition (Umbrella)** | Architectural keystone: splits monolithic `codewhale-tui` into ~20 crates for compile-time isolation, testability, and pluggable front-ends. | 10 comments, active sub-issue tracking; drives multiple PRs (#5525, #5523, #5514). |
| **[#5522](https://github.com/Hmbown/CodeWhale/issues/5522)** | **v0.9.10: Progressive First-Run** | Direct user feedback: non-English users hit English telemetry + settings wall before productive work. Blocks adoption. | Open, 0 comments but high priority — labeled for v0.9.10 acceptance. |
| **[#5518](https://github.com/Hmbown/CodeWhale/issues/5518)** | **Emergency Compaction at ~85–105K Tokens (DeepSeek V4, 327K Context)** | Token budgeting bug: compaction triggers at 25–30% of configured window, breaking long sessions. Affects vLLM-hosted models. | 3 comments, reproducible; critical for enterprise/agent workflows. |
| **[#4683](https://github.com/Hmbown/CodeWhale/issues/4683)** | **Wrong DeepSeek Completions URL (Flaky)** | Intermittent `api.deepseek.com/v1/chat/completions` failures; suggests DNS/routing or client-side retry gaps. | 4 comments, `needs-info`; long-standing flake. |
| **[#5442](https://github.com/Hmbown/CodeWhale/issues/5442)** | **Discoverability Debt: Advanced Commands Hidden** | ~34 high-value commands demoted from palette root; config-only capabilities invisible; welcome screen teaches governance not capability. | 1 comment, product audit with receipts; UX debt blocking power-user adoption. |
| **[#5023](https://github.com/Hmbown/CodeWhale/issues/5023)** | **IME Candidate Window Jumps on Windows** | Input method instability degrades CJK typing experience; reproducible on Windows 11 + Windows Terminal. | 2 comments, `reliability`/`ux` labels; affects core input loop. |
| **[#4070](https://github.com/Hmbown/CodeWhale/issues/4070)** | **Standalone `read_lints` Tool for On-Demand Diagnostics** | LSP diagnostics only post-edit; no way to query lints for arbitrary files. Blocks agent-driven refactoring. | 2 comments, `enhancement`/`tools`; addressed by PR [#5524](https://github.com/Hmbown/CodeWhale/pull/5524). |
| **[#5345](https://github.com/Hmbown/CodeWhale/issues/5345)** | **Multi-line Mode / Custom Send Shortcut** | Parity with Grok Build, Codex, web: `Enter`=newline, `Shift/Ctrl+Enter`=send. High-request UX for structured prompting. | 2 comments, `enhancement`; Chinese user base heavily invested. |
| **[#5526](https://github.com/Hmbown/CodeWhale/issues/5526)** | **Deprecated Shell Completion (PowerShell)** | `codew completions powershell` outputs stale `codewhale-tui` triggers; no docs or update path. | New, 1 comment; low-hanging DX polish. |
| **[#5482](https://github.com/Hmbown/CodeWhale/issues/5482)** | **EPIC(docs): Full Chinese Localization & Restructure** | Growing Chinese user base; English-only docs + stale content + MT errors create barrier. | 1 comment, `documentation` epic; aligns with dictionary spine work. |

---

## 4. Key PR Progress (Top 10 by Scope & Merge Velocity)

| # | PR | Summary | Status |
|---|----|---------|--------|
| **[#5513](https://github.com/Hmbown/CodeWhale/pull/5513)** | **Release: CodeWhale v0.9.10** | 76-commit release lane: branding, durable approvals, first-run, CI hardening, bug fixes. | **Merged** |
| **[#5524](https://github.com/Hmbown/CodeWhale/pull/5524)** | **feat(tui): Multi-file `read_lints` Operation** | Implements #4070: model-visible `lsp.read_lints` for arbitrary workspace files via shared `LspManager`. | Open |
| **[#5525](https://github.com/Hmbown/CodeWhale/pull/5525)** | **refactor(tui): Adopt Command Shapes in Utility Group (FEAT-018)** | Converts 7 utility commands to external command shapes (FEAT-014/015); execution boundary shift without file moves. | Open |
| **[#5523](https://github.com/Hmbown/CodeWhale/pull/5523)** | **refactor(tui): Extract Tool-Call Stages from Turn Loop** | Decomposes `handle_deepseek_turn` into `plan_tool_calls` → `execute_planned_tools` → `process_tool_results`. | Open |
| **[#5514](https://github.com/Hmbown/CodeWhale/pull/5514)** | **refactor(tui): Extract Stream Processing from Turn Loop** | Pulls response-stream state machine into `process_stream`; returns `StreamOutcome` for cleaner turn loop. | **Merged** |
| **[#5520](https://github.com/Hmbown/CodeWhale/pull/5520)** | **feat(web): Move docs/sandbox & docs/web to Dictionary Spine (#5337)** | Eliminates 29 `isZh` branches; adds per-locale dicts + `check-locales` enforcement. | **Merged** |
| **[#5517](https://github.com/Hmbown/CodeWhale/pull/5517)** | **feat(web): Move docs/constitution & docs/runtime-api to Dictionary Spine** | Phase 2: 28 more `isZh` branches retired; same dictionary + token-parity pattern. | **Merged** |
| **[#5515](https://github.com/Hmbown/CodeWhale/pull/5515)** | **fix(tui): Forward MCP Image Results as Typed Content** | Converts MCP `image` → provider-neutral rich block; strips inline base64; enforces 5 MiB / 1 image limits. | **Merged** |
| **[#5509](https://github.com/Hmbown/CodeWhale/pull/5509)** | **fix(tui): Restore `/title` as Independent Terminal Window Title** | Reverts merge of `/title` into `/rename`; restores distinct terminal-tab vs session-name semantics. | **Merged** |
| **[#5521](https://github.com/Hmbown/CodeWhale/pull/5521)** | **chore(tui): Drop Single-Argument `concat!`** | Clippy fix (`useless-concat`) in `runtime_handoff.rs`; trivial but keeps CI green. | **Merged** |

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Progressive Onboarding & Localization**  
   - First-run must defer config, respect locale, avoid English-only walls ([#5522](https://github.com/Hmbown/CodeWhale/issues/5522), [#5482](https://github.com/Hmbown/CodeWhale/issues/5482)).  
   - Full Chinese docs + dictionary-spine i18n (eliminate `isZh` everywhere).

2. **Agent-Centric Tooling**  
   - On-demand diagnostics (`read_lints` [#4070](https://github.com/Hmbown/CodeWhale/issues/4070)), continuous/infinite turn loops ([#5508](https://github.com/Hmbown/CodeWhale/issues/5508)), MCP image support ([#5515](https://github.com/Hmbown/CodeWhale/pull/5515)).

3. **Input & Composability UX**  
   - Multi-line mode / custom send keys ([#5345](https://github.com/Hmbown/CodeWhale/issues/5345)), IME stability ([#5023](https://github.com/Hmbown/CodeWhale/issues/5023)), discoverable advanced commands ([#5442](https://github.com/Hmbown/CodeWhale/issues/5442)).

4. **Token & Context Reliability**  
   - Emergency compaction budgeting ([#5518](https://github.com/Hmbown/CodeWhale/issues/5518)), `max_tokens` validation vs model limits ([#5516](https://github.com/Hmbown/CodeWhale/issues/5516)), flaky upstream URLs ([#4683](https://github.com/Hmbown/CodeWhale/issues/4683)).

5. **Extensibility & Modularity**  
   - Crate decomposition (EPIC-005 [#5316](https://github.com/Hmbown/CodeWhale/issues/5316)), command shapes (FEAT-014/015/018), MCP capability metadata ([#4170](https://github.com/Hmbown/CodeWhale/issues/4170)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **First-run friction** | English telemetry → settings wall → no productive work; non-English users blocked | High (direct user feedback, v0.9.10 acceptance criteria) |
| **Token window mismanagement** | Compaction at 25–30% of configured context; `max_tokens` exceeds model limit post-upgrade | High (multiple v0.9.9/0.9.10 regressions) |
| **IME / input instability on Windows** | Candidate window jumps, unstable position during CJK input | Persistent (since v0.9.3, still open) |
| **Hidden power features** | 34+ advanced commands demoted from palette; config-only capabilities undiscoverable | Product audit confirmed |
| **Flaky upstream API calls** | Intermittent DeepSeek URL failures; no clear retry/fallback visibility | Long-standing, `needs-info` |
| **Stale shell completions** | `codew completions powershell` emits deprecated `codewhale-tui` triggers | New but trivial fix |
| **Monolithic crate compile times** | Drives EPIC-005 decomposition; blocks contributor iteration | Architectural, actively addressed |

---

**Bottom line:** CodeWhale is in a **dual-track pivot** — shipping v0.9.10 for retention/brand while surgically refactoring architecture (crate decomposition, command shapes, i18n spine). The next 2 weeks will show whether progressive onboarding and token-budget fixes land cleanly, and if the crate split unblocks contributor velocity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*