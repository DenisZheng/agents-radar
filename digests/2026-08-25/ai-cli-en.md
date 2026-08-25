# AI CLI Tools Community Digest 2026-08-25

> Generated: 2026-08-25 00:54 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Cross-Tool Comparison Report
*Community Digest Date: 2026-08-25 | 9 Tools Analyzed (OpenAI Codex summary unavailable)*

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **stabilization-and-hardening phase** rather than feature explosion. Every major tool shipped patches or preview releases focused on reliability (segfault fixes, memory leaks, OAuth regressions), security hygiene (credential sanitization, supply-chain hardening), and developer experience polish (TUI diffs, model pickers, quota transparency). **Subagent/orchestration reliability** and **cross-provider neutrality** have emerged as the two dominant architectural battlegrounds. Linux native binary compatibility (glibc/mimalloc symbol collisions) and Windows-first support (PowerShell, symlinks, WSL) are now table-stakes concerns. Communities are vocal about **observability gaps**—token accounting, prompt cache behavior, and session state visibility—signaling a shift from "does it work?" to "can I trust and audit it in production?"

---

## 2. Activity Comparison (2026-08-24 → 2026-08-25)

| Tool | Releases (24h) | Hot Issues Tracked | Key PRs Merged/Updated | Primary Focus |
|------|----------------|-------------------|------------------------|---------------|
| **Claude Code** | v2.1.243 (regression) | 10 (5 segfaults) | 3 PRs (1 closed) | **Crisis response**: Linux SIGSEGV on glibc 2.44; mimalloc symbol interposition |
| **Gemini CLI** | v0.57.0-preview.1 | 10 (6 P1 subagent) | 11 PRs (8 merged) | Subagent recovery, retry nudge caching, security hardening, docs debt |
| **GitHub Copilot CLI** | v1.0.81-9 | 10 (400 errors, MCP/OAuth) | 1 PR (trivial) | MCP/OAuth regressions, 400-error epidemic, granular permissions |
| **Kimi Code CLI** | None | 1 (quota exhaustion) | 1 PR (UTF-8 guard) | Token-based quota mismatch, binary file safety |
| **OpenCode** | v1.18.22 | 10 (TUI sidebar, Ox Alpha) | 10 PRs (6 merged) | TUI modified-files regression, Ox Free provider failures, v2.0 schema blockers |
| **Pi** | v0.84.3 | 10 (compaction, Gemini 3.x) | 10 PRs (6 merged) | Per-model compaction, Gemini thought_signature, PowerShell tool, Bedrock Mantle |
| **Qwen Code** | v0.22.0-nightly | 10 (streaming, Config, MCP) | 10 PRs (all open) | Config ownership, MCP reconnect, Agent Team, review skill, OpenTUI migration |
| **DeepSeek TUI** | None (v0.9.12 RC) | 10 (provider neutrality, mega-files) | 10 PRs (4 merged) | Control socket, `/relaunch`, lifecycle outbox, provider-agnostic refactor |
| **OpenAI Codex** | — | — | — | *Summary generation failed* |

> **Note**: Issue/PR counts reflect only items updated in the 24h window per digest scope.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Subagent/Delegation Reliability** | Gemini CLI (#22323, #21409), OpenCode (#43619), Qwen Code (#9638), DeepSeek TUI (#5596), Claude Code (#87891, #86764) | First-child spawn schema, hang detection, config propagation, trajectory visibility, stale worker reaping |
| **Provider Neutrality / Multi-Provider Parity** | DeepSeek TUI (#5588 - 18 gates), Pi (#8572/8573 Bedrock Mantle, #6996 Gemini), Qwen Code (#9005 Anthropic parity, #9865 Kimi), OpenCode (#44577 DeepSeek/GPT/GLM/Qwen) | Remove hardcoded provider assumptions; support OpenAI-compatible, Bedrock, Vertex, NVIDIA NIM, custom gateways |
| **Session State Observability & Durability** | Claude Code (#82056 memory index), Gemini CLI (#26522 memory retries), OpenCode (#6310 LSP bloat), Pi (#6879 compaction, #7048 truncation), Qwen Code (#9927 artifact drift), DeepSeek TUI (#2492 cross-session) | Inspect loaded context, configurable limits, compaction integrity, torn-write recovery, cross-session memory |
| **Prompt Cache / Token Efficiency** | Claude Code (#87137 Bash URL cache miss), Gemini CLI (#28934 retry nudge placement), Pi (#8592 per-model compaction), DeepSeek TUI (#5553 tool/MCP token attribution) | Cache-friendly tool definitions, nudge injection strategy, model-aware compaction, schema cost visibility |
| **Windows / Cross-Platform Parity** | Gemini CLI (#21983 Wayland, #29017 junctions), Copilot CLI (#4593 worktree, #4570 VS Code lock), OpenCode (#44577), Pi (#8512 PowerShell, #7875 paths), DeepSeek TUI (#5602 shell decoding) | Native PowerShell, symlink/junction handling, worktree lifecycle, shell detection, ANSI/UTF-8 decoding |
| **Security & Supply-Chain Hygiene** | Gemini CLI (#28938 Git config, #29018 A2A creds, #28863 env sanitization), Pi (staged verified updates), DeepSeek TUI (#5588 provider gates), Qwen Code (#9417 heredoc perms) | Credential rotation, env var sanitization, atomic updates, permission rule precision |
| **Granular Permission Models** | Copilot CLI (#1973 tool whitelist 27👍), Qwen Code (#9829 allowlist), Pi (per-model tool sets #8583), Claude Code (modelPicker) | Move beyond binary `/allow-all`; per-tool, per-model, per-project allowlists with UI discoverability |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI | Kimi Code |
|-----------|-------------|------------|-------------|----------|-----|-----------|--------------|-----------|
| **Primary Differentiator** | Anthropic model integration; Loop analytics (`/usage`) | Google ecosystem; Subagent orchestration; AST-aware tooling | GitHub/Enterprise integration; MCP/OAuth depth | Local-first; TUI-centric; Ox provider | Multi-provider router; Extension platform; Compaction engine | Agent Team & Review skills; Web-shell; Config ownership | Supervised operation (control socket); Lifecycle outbox; Provider neutrality audit | Moonshot K2.6 long-CoT model; Token quota model |
| **Target User** | Anthropic power users; Loop-heavy workflows | Google Cloud / Vertex developers; Automation builders | GitHub Enterprise orgs; Code review workflows | Developers wanting local TUI + cloud hybrid | Power users needing model routing, local inference, extensibility | Team review/automation; Web IDE users; Multi-agent workflows | Automation/CI operators; Multi-provider fleets | Kimi/K2.6 users; Quota-sensitive workflows |
| **Technical Approach** | Native binary (Rust/Node); Bundled mimalloc | TypeScript/Node; Heavy subagent architecture | TypeScript/Node; VS Code extension host | Rust + TypeScript; TUI (ratatui/Ink→OpenTUI) | TypeScript monorepo; Plugin/extension runtime | TypeScript monorepo; ACP/REST/TS SDK; Web-shell | Rust (CodeWhale); Unix sockets; JSONL telemetry | TypeScript/Node; StrReplaceFile tool focus |
| **Maturity Signals** | v2.x; Segfault regression on Linux | v0.57 preview; P1 subagent bugs persist | v1.0.81; 400-error epidemic since Feb | v1.18; v2.0 schema blockers | v0.84; Per-model compaction shipped | v0.22 nightly; Architecture refactor in flight | v0.9.12 RC; Mega-file decomposition | Early; Quota/billing pain dominant |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **Gemini CLI**, **OpenCode**, **Pi**, **Qwen Code**, **DeepSeek TUI** | 8-11 PRs/24h; multiple merged; architectural refactors in flight (OpenTUI, Config ownership, provider neutrality, control socket); nightly/preview cadence |
| **Stabilizing / Crisis Response** | **Claude Code**, **Copilot CLI** | High-impact regressions (segfaults, 400 errors, MCP/OAuth) dominating bandwidth; fewer feature PRs; community frustration visible in 👍 counts |
| **Early / Niche Focus** | **Kimi Code** | Single quota issue + UTF-8 fix; limited 24h activity; billing model friction primary signal |

**Community Engagement Proxy** (GitHub reactions on top issues):
- Copilot CLI #1973 (tool whitelist): **27 👍** — highest single-item signal
- OpenCode #4489 (ephemeral sessions): **15 👍**, #37823 (GH Actions): **11 👍**
- Gemini CLI #21409 (agent hang): **8 👍**
- DeepSeek TUI: Low 👍 counts but maintainer-driven issue triage
- Claude Code segfault issues: 4-6 👍 each but **blocking severity**

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Subagent orchestration is the new "package manager"** | 5/9 tools have P1 bugs or active refactors | Expect standardization of spawn/hand-off protocols (ACP?); tools without robust delegation will fall behind |
| **Model-aware configuration > global settings** | Pi (per-model compaction), Qwen (route-scoped cache), Claude (modelPicker), Gemini (retry nudge placement) | CLI tools must treat model identity as a first-class config dimension; "one config fits all" is dead |
| **Observability moving from logs → structured telemetry** | DeepSeek TUI (lifecycle outbox), Copilot CLI (OTel billing attrs), Pi (abort reason fidelity), Gemini (eval-from-log) | Enterprise adoption requires machine-readable session/turn/subagent events; JSONL/webhook standards emerging |
| **Provider neutrality as competitive requirement** | DeepSeek TUI audit (18 gates), Pi (Bedrock Mantle, SiliconFlow), Qwen (live model discovery), OpenCode (model catalog gaps) | Tools locked to single provider API surface will lose; OpenAI-compatible + MCP + custom gateway support is baseline |
| **Linux binary compatibility is a recurring tax** | Claude Code (mimalloc/glibc 2.44), OpenCode (Ox Alpha), DeepSeek TUI (native runtime threads) | Rolling-release distros (Arch, CachyOS, NixOS) are de facto CI targets; static linking or symbol versioning mandatory |
| **Windows is no longer an afterthought** | Pi (PowerShell tool), Copilot CLI (worktree archive), Gemini CLI (junctions), OpenCode (provider issues) | Native PowerShell, symlink/junction handling, ANSI/ACP decoding — expected in 2026 H2 releases |
| **Quota/token transparency drives trust** | Kimi Code (quota exhaustion), DeepSeek TUI (/context tool costs), Pi (per-model compaction), Copilot CLI (token counts) | Users demand per-request token accounting, model-tier quota separation, and predictive estimates — billing UX is product UX |
| **Security hygiene table-stakes** | Gemini CLI (A2A creds, Git config, env sanitization), Pi (staged updates), DeepSeek TUI (provider gates) | Supply-chain attacks and credential leakage in MCP/extension ecosystems forcing proactive hardening |

---

## Strategic Takeaways

1. **For Enterprise Adoption**: Prioritize tools with structured telemetry (DeepSeek TUI outbox, Copilot OTel, Pi abort fidelity), granular permissions (Copilot #1973, Qwen #9829), and provider neutrality (Pi, Qwen, DeepSeek TUI).

2. **For Local-First / Automation**: OpenCode (TUI, local Ox), DeepSeek TUI (control socket, `/relaunch`), Pi (llama.cpp, PowerShell) lead on unsupervised operation primitives.

3. **For Team Review Workflows**: Qwen Code (Agent Team, review skills, web-shell) and Copilot CLI (GitHub integration, code review focus) are purpose-built; Gemini CLI subagent work is promising but unstable.

4. **Risk Watch**: Claude Code Linux regression shows native binary complexity; Copilot CLI 400-error epidemic suggests backend/API contract drift; Kimi Code quota model may limit heavy reasoning workloads.

5. **Investment Signal**: Tools investing in **architectural refactors** (OpenCode OpenTUI, Qwen Config ownership, DeepSeek mega-file decomposition, Gemini subagent recovery) are positioning for 2027-scale; those in pure bugfix mode may be accumulating technical debt.

---

*Report compiled from 2026-08-25 community digests. All links reference live GitHub issues/PRs. OpenAI Codex excluded due to summary failure.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-25 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator / run_eval.py fixes**<br>[#1298](https://github.com/anthropics/skills/pull/1298) • [#1099](https://github.com/anthropics/skills/pull/1099) • [#1050](https://github.com/anthropics/skills/pull/1050) | Core skill-authoring toolchain; runs evaluation loops to optimize skill descriptions | **Critical infrastructure bug**: `run_eval.py` reports 0% recall on all platforms (Issue [#556](https://github.com/anthropics/skills/issues/556), 12 comments); Windows subprocess/encoding failures block contributors ([#1099](https://github.com/anthropics/skills/issues/1099), [#1050](https://github.com/anthropics/skills/issues/1050)); skill-creator itself needs rewrite to be operational not educational (Issue [#202](https://github.com/anthropics/skills/issues/202), 8 comments) | **Open** (multiple PRs, Jun–Aug 2026) |
| 2 | **document-typography**<br>[#514](https://github.com/anthropics/skills/pull/514) | Prevents orphan/widow lines, heading stranding, numbering misalignment in AI-generated docs | Addresses universal pain point: "users rarely ask for good typography but notice when it's bad"; 10-day active review cycle | **Open** (Mar 2026) |
| 3 | **ServiceNow platform skill**<br>[#568](https://github.com/anthropics/skills/pull/568) | Broad ServiceNow assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SecOps, Vuln Response, IntegrationHub | Longest-running PR (5 months); covers entire platform not just scripting; enterprise demand signal | **Open** (Mar–Aug 2026) |
| 4 | **self-audit (v1.3.0)**<br>[#1367](https://github.com/anthropics/skills/pull/1367) | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, consistency, safety) | Universal "pre-delivery gate" for any project/stack; damage-severity prioritization; ties to Issue [#1385](https://github.com/anthropics/skills/issues/1385) quality-gate pipeline proposal | **Open** (Jun–Jul 2026) |
| 5 | **Hivemind: Zero-Cost Multi-Agent Orchestration**<br>[#1628](https://github.com/anthropics/skills/pull/1628) | Delegates mechanical work to headless opencode workers (free models); Claude stays planner/reviewer/merger | Novel cost-optimization architecture: "expensive model's context is scarce, not intelligence"; 4-day rapid iteration | **Open** (Aug 2026) |
| 6 | **testing-patterns**<br>[#723](https://github.com/anthropics/skills/pull/723) | Full testing stack: Trophy model, AAA, React Testing Library, contract testing, E2E, property-based, mutation testing | Comprehensive reference skill; 30-day review; addresses widespread "what/when/how to test" ambiguity | **Open** (Mar–Apr 2026) |
| 7 | **ODT (OpenDocument) skill**<br>[#486](https://github.com/anthropics/skills/pull/486) | Create, fill, read, convert .odt/.ods; parse ODT→HTML; template filling | ISO-standard format support; triggers on "ODT/ODF/LibreOffice" mentions; 6-week review | **Open** (Mar–Apr 2026) |
| 8 | **skill-quality-analyzer & skill-security-analyzer**<br>[#83](https://github.com/anthropics/skills/pull/83) | Meta-skills: 5-dim quality scoring (structure, examples, resources, triggers, maintainability) + security scanning (secrets, perms, injection, supply chain) | Foundation for automated skill governance; 62-day review; enables marketplace quality gates | **Open** (Nov 2025–Jan 2026) |

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Demand Signal |
|-------|----------|---------------|
| **Skill distribution & trust infrastructure** | Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): community skills masquerade under `anthropic/` namespace; Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): org-wide sharing needed; Issue [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): duplicate skills from bundled plugins | **High** — namespace governance, shared registries, deduplication |
| **Skill-authoring toolchain reliability** | Issue [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate; Issue [#202](https://github.com/anthropics/skills/issues/202) (8 comments): skill-creator reads like docs not ops; multiple Windows fix PRs | **Critical** — contributor onboarding blocked |
| **Quality gates & self-verification** | Issue [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍): 3-gate pipeline (calibration → adversarial review → delivery); PR [#1367](https://github.com/anthropics/skills/pull/1367) self-audit; PR [#83](https://github.com/anthropics/skills/pull/83) quality analyzer | **Rising** — "trust but verify" for AI output |
| **Multi-agent / MCP integration** | Issue [#16](https://github.com/anthropics/skills/issues/16) (4 comments): expose skills as MCPs; PR [#1628](https://github.com/anthropics/skills/pull/1628) Hivemind orchestrates opencode workers | **Emerging** — skills as composable services |
| **Enterprise platform coverage** | PR [#568](https://github.com/anthropics/skills/pull/568) ServiceNow (5 months); PR [#181](https://github.com/anthropics/skills/pull/181) SAP predictor; PR [#1615](https://github.com/anthropics/skills/pull/1615) SCNet HPC | **Steady** — deep platform expertise as skills |
| **Document fidelity** | Issue [#12](https://github.com/anthropics/skills/issues/12) (4 comments, 1👍): docx whitespace corruption; PR [#541](https://github.com/anthropics/skills/pull/541) tracked-change ID collision; PR [#538](https://github.com/anthropics/skills/pull/538) PDF case-sensitivity | **Persistent** — round-trip integrity for Office/OpenDocument |

---

## 3. High-Potential Pending Skills (Active PRs Not Yet Merged)

| Skill | PR | Why It's Poised to Land |
|-------|-----|-------------------------|
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Universal applicability; mechanical + reasoning gates; aligns with Issue [#1385](https://github.com/anthropics/skills/issues/1385) pipeline; 4-day review velocity |
| **Hivemind** | [#1628](https://github.com/anthropics/skills/pull/1628) | Novel cost architecture; leverages free models; 4-day iteration; solves context-window economics |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive reference; fills documented gap; 30-day review suggests thorough vetting |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal need; concise scope; 10-day active review |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | Standards-based format; clear triggers; 6-week review near completion |
| **skill-quality-analyzer / security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Enables automated governance; prerequisite for scalable marketplace; long review indicates importance |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | Enterprise breadth; 5-month endurance signals committed maintainer |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy skill authoring and distribution infrastructure* — fixing the broken evaluation loop (0% recall), securing the namespace against impersonation, enabling org-wide sharing, and building automated quality gates — so that skill *creation* becomes as reliable as skill *consumption*.**

---

# Claude Code Community Digest — 2026-08-25

## 1. Today's Highlights
**v2.1.243 shipped with a critical regression** — multiple Linux users report deterministic `SIGSEGV` on startup (including `--version`), traced to mimalloc symbol interposition with glibc 2.44. Simultaneously, the release adds a **Loops breakdown to `/usage`** (per-loop run count, tokens, last run) and a **`modelPicker` setting** to curate the `/model` menu. A long-standing Drive MCP binary truncation bug (#50358) was closed.

---

## 2. Releases
### v2.1.243
- **Loops usage analytics**: `/usage` now shows per-loop run count, total tokens, tokens/run, and last run timestamp — making runaway `/loop` tasks easy to spot.
- **`modelPicker` setting**: Curate the `/model` picker with an ordered, labeled list of model IDs (any spelling accepted).
- ⚠️ **Known regression**: Native Linux builds segfault pre-`main` on glibc ≥2.44 (see Hot Issues).

[Release v2.1.243](https://github.com/anthropics/claude-code/releases/tag/v2.1.243)

---

## 3. Hot Issues (Top 10 by Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#89360](https://github.com/anthropics/claude-code/issues/89360) | **2.1.243 Segmentation fault** (Linux) | Blocking regression; binary unusable on affected distros | 16 comments, 4 👍 |
| [#89334](https://github.com/anthropics/claude-code/issues/89334) | **v2.1.242 segfaults on every launch** — mimalloc `free` lacks NULL check, glibc `newlocale` calls `free(NULL)` pre-main | Root cause identified: bundled mimalloc exports versioned glibc allocator symbols; v2.1.241 unaffected | 6 comments, 5 👍 |
| [#89370](https://github.com/anthropics/claude-code/issues/89370) | **claude segfaults, so does install.sh** | Installer also broken; blocks fresh installs on Linux | 3 comments, 6 👍 |
| [#89366](https://github.com/anthropics/claude-code/issues/89366) | **Deterministic SIGSEGV on startup** (`free`/`__newlocale`/`pthread_once`) | Independent repro confirming same mimalloc/glibc conflict | 3 comments, 1 👍 |
| [#89371](https://github.com/anthropics/claude-code/issues/89371) | **Native installer 2.1.243 segfaults in newlocale/free on glibc 2.44 (CachyOS)** | Confirms regression persists in latest build | 1 comment, 2 👍 |
| [#82056](https://github.com/anthropics/claude-code/issues/82056) | **Session cannot determine auto-memory index load state** (whole/truncated/missing) | Memory UX gap: users blind to what context actually loaded | 25 comments, 1 👍 |
| [#50358](https://github.com/anthropics/claude-code/issues/50358) | **Drive MCP `create_file` silently truncates binary uploads ~10K base64 chars** | Data loss risk for xlsx/zip uploads; **CLOSED** | 10 comments, 4 👍 |
| [#79217](https://github.com/anthropics/claude-code/issues/79217) | **Make auto-memory `MEMORY.md` index limit (200 lines/25KB) configurable** | Hard cap breaks multi-project memory; users want control | 4 comments, 2 👍 |
| [#87137](https://github.com/anthropics/claude-code/issues/87137) | **`Bash` tool description embeds per-session URL → every `/resume` invalidates prompt cache** | Cache miss on every resume = cost/latency hit | 3 comments |
| [#88489](https://github.com/anthropics/claude-code/issues/88489) | **Model paternalistically scopes work & suggests stopping based on time-of-day** | Persistent behavioral bug; prior reports auto-closed stale | 3 comments |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#79898](https://github.com/anthropics/claude-code/pull/79898) | Add Claude apps gateway on AWS example deployment assets | **CLOSED** | Reference deployment for Claude Apps Gateway on AWS + Bedrock (companion to GCP example) |
| [#75252](https://github.com/anthropics/claude-code/pull/75252) | docs: clarify plugin MCP configuration scope | **CLOSED** | Distinguishes plugin-bundled `mcpServers` from user-level MCP allow/deny in `~/.claude.json` |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | Create `pylint.yml` | **OPEN** | Adds pylint config (likely for internal tooling/CI) |

*Note: Only 3 PRs updated in last 24h; focus remains on runtime stability.*

---

## 5. Feature Request Trends
From the issue landscape, developers are consistently asking for:

1. **Memory system transparency & control** — Visibility into what auto-memory loaded (#82056), configurable index limits (#79217), and frustration that persistent memory "ships but is invisible" (#88579).
2. **Prompt cache reliability** — Session-specific URLs in tool definitions breaking cache on resume (#87137).
3. **Model behavior overrides** — Time-of-day paternalism (#88489) and inability to disable scoping nudges.
4. **Background agent lifecycle management** — Stale worker leaks (#87891), resume hangs on stale registry (#86764), cross-session render leaks (#86860).
5. **Cross-platform packaging hardening** — The mimalloc/glibc symbol collision suggests a need for stricter binary compatibility testing on rolling-release distros.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Linux native builds fragile on new glibc** | 5+ segfault issues in 24h across v2.1.242/2.1.243; root cause: mimalloc symbol interposition |
| **Auto-memory is a black box** | No in-session API to inspect load state; hard-coded 200-line/25KB cap; third-party replacements thriving (#88579) |
| **Background/agent-view sessions leak & corrupt** | Stale workers not reaped (64 processes/7 GB leaked), resume hangs, PTY corruption, cross-session render leaks |
| **Prompt cache invalidation on resume** | Session URL baked into `Bash` tool definition → full cache miss every `/resume` |
| **Model "knows better" behavior** | Time-based work scoping/stop nudges persist despite explicit instructions; prior issues closed stale |
| **MCP binary handling broken** | Drive MCP truncates ~10K base64 chars silently (now fixed, but pattern suggests edge cases elsewhere) |
| **Installer parity** | `install.sh` also segfaults on affected Linux distros, blocking fresh installs |

---

*Digest compiled from github.com/anthropics/claude-code — Issues/PRs updated 2026-08-24 to 2026-08-25.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-25

---

## 1. Today's Highlights

The project shipped **v0.57.0-preview.1**, a patch release cherry-picking a fix for history rollback and retry nudge optimizations (PR #28934) to prevent context window bloat and improve prefix caching efficiency. Concurrently, the issue backlog reveals a strong focus on **subagent reliability** — multiple P1 bugs around subagent recovery, hang detection, and configuration propagation remain open and actively discussed. The PR pipeline shows continued investment in **security hardening** (A2A server credential cleanup, Git config sanitization) and **developer experience** (CLI flag documentation, eval-from-log tooling).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.57.0-preview.1** | Preview Patch | Cherry-picks commit `812f7a2` from PR #28934: optimizes tool cancellation rollback and retry nudges to reduce context bloat and maximize prefix caching. [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.1) |
| **v0.56.0-nightly.20260824.g5411f113c** | Nightly | Incremental nightly build; full changelog [here](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c). |

> **Note**: v0.57.0-preview.1 is a targeted patch; no new features. Nightly builds continue daily.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reports false GOAL success** | Masks actual failures; breaks trust in automation pipelines. | 13 comments, 2 👍, P1, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core workflows; workaround = disable subagents. | 8 comments, 8 👍, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at "Waiting input" post-completion** | Frequent UI hang on simple commands; high user friction. | 4 comments, 3 👍, P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform regression; affects Linux desktop users. | 4 comments, 1 👍, P1, `agent/browser` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via zero-dependency sandboxing** | Strategic: aligns tooling with Gemini 3’s native POSIX strengths. | 8 comments, 1 👍, P2, `effort/large` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Could drastically reduce token usage & turn count for code tasks. | 7 comments, 1 👍, P2, Epic |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underuses skills/sub-agents autonomously** | Limits extensibility value; requires explicit prompting. | 6 comments, P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Wastes compute & pollutes memory; needs backoff/quarantine. | 5 comments, P2 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: auto session takeover & lock recovery** | Improves resilience for persistent browser profiles. | 4 comments, P3, `kind/customer-issue` |
| [#29032](https://github.com/google-gemini/gemini-cli/issues/29032) | **`confirm_action` slash-command double-fires telemetry & history** | Telemetry pollution & history duplication; fresh regression. | 1 comment, new (2026-08-24), `effort/small` |

> **Pattern**: Subagent orchestration (recovery, hangs, config, visibility) dominates P1/P2 bugs. Memory system and shell execution reliability are secondary pain clusters.

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#28934](https://github.com/google-gemini/gemini-cli/pull/28934) | **Fix** | **History rollback & retry nudge optimization** — rolls back synthetic model responses on tool cancellation; injects retry nudges into `contents` (not system prompt) to preserve prefix caching. Merged → v0.57.0-preview.1. |
| [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) | **Fix** | **Retry nudge into conversation contents** — companion to #28934; moves nudge from `systemInstruction` to user-turn suffix for cache efficiency. |
| [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) | **Fix** | **GIT_CONFIG_* env triplet consistency** — prevents sanitization from breaking Git’s numbered key/value pairs; blocks sensitive value restore. P1. |
| [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | **Fix** | **Avoid persisting interrupted response placeholder** — stops `[The previous response was interrupted...]` from leaking into history as a model message. P1. |
| [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) | **Fix** | **A2A server: clear stale cancellation error** — resolves “Execution aborted” crash on subsequent prompts after abort. |
| [#29018](https://github.com/google-gemini/gemini-cli/pull/29018) | **Security** | **A2A server: remove misleading security schemes & hardcoded credentials** — fixes #29001; aligns metadata with unauthenticated local-dev design. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | **Security** | **Extensions: consent prompt for env changes + sanitize runtime-altering vars** — prevents unauthorized MCP server env injection. |
| [#29019](https://github.com/google-gemini/gemini-cli/pull/29019) | **Feature** | **Evals: add reviewable eval drafts from session logs (`eval:from-log`)** — turns real interactions into behavioral eval starting points. `help wanted`, `size/xl`. |
| [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) | **Fix** | **Dedupe symlinked/junctioned skill dirs** — fixes Windows junction/POSIX symlink double-discovery for `.gemini` ↔ `.agents` (Agent Skills standard). |
| [#29013](https://github.com/google-gemini/gemini-cli/pull/29013) | **Docs** | **Document 6 missing CLI flags** — `--policy`, `--admin-policy`, `--session-id`, `--session-file`, `--raw-output`, `--accept-raw-output-risk`. |
| [#29011](https://github.com/google-gemini/gemini-cli/pull/29011) | **Docs** | **Fix ACP flags in CLI reference** — removes deprecated `--experimental-zed-integration`, corrects acronym, adds current `--acp`. |
| [#29009](https://github.com/google-gemini/gemini-cli/pull/29009) | **Docs** | **Correct env var redaction setting keys** — aligns docs with actual schema/code. |

> **Theme**: This batch is heavily **corrective** — caching efficiency, state consistency, security hygiene, and documentation debt. The only net-new capability is `eval:from-log` (#29019), which is explicitly seeking contributors.

---

## 5. Feature Request Trends (Distilled from Issues)

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Subagent first-class observability** | [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) (share subagent trajectories), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) (bugreport include subagent context) | Users want full visibility into delegated work. |
| **AST-aware code navigation** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (Epic), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) (CLI tools: tilth/glyph) | Investment in structural code understanding to cut tokens/turns. |
| **Model-native bash/shell affinity** | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) (zero-dep sandbox), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) (tactful extraction hierarchy) | Align tooling with Gemini 3’s POSIX-chain training. |
| **Memory system hardening** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) (backoff), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) (quarantine invalid patches), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (deterministic redaction) | Auto-memory moving from prototype → production-grade. |
| **Browser agent resilience** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) (session takeover), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) (settings.json overrides), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (Wayland) | Persistent browser sessions need robust lifecycle mgmt. |
| **Skill/agent discoverability & standards** | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) (symlink agents), [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) (symlink dedupe), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) (native task tracker) | Ecosystem converging on Agent Skills spec; CLI must support it. |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Subagent opacity & unreliability** | False success reports (#22323), hangs (#21409), missing config (#22267), invisible trajectories (#22598, #21763) | **High** — 6+ P1/P2 issues, multi-month open |
| **Shell execution hangs / false “awaiting input”** | #25166 (4 👍), #22465 (Vite interactive prompt), #23571 (tmp script sprawl) | **High** — core loop breakage |
| **Memory system noise & security** | Indefinite retries (#26522), invalid patch silence (#26523), redaction after model context (#26525) | **Medium-High** — 3 dedicated issues same author/date |
| **Tool explosion / 400 errors** | #24246 (>128 tools → 400), #22466 (`\n` escape bugs) | **Medium** — scaling limits hit |
| **Documentation drift** | #29013 (6 undocumented flags), #29011 (ACP flags wrong), #29009 (redaction keys wrong) | **Medium** — PRs fixing docs outpace feature docs |
| **Platform gaps (Wayland, symlinks, junctions)** | #21983 (browser/Wayland), #20079 (symlink agents), #29017 (Windows junctions) | **Medium** — cross-platform parity |

---

## Quick Links
- **Repo**: `github.com/google-gemini/gemini-cli`
- **Releases**: [Latest](https://github.com/google-gemini/gemini-cli/releases)
- **Issue Board**: [All open](https://github.com/google-gemini/gemini-cli/issues?q=is%3Aopen+is%3Aissue)
- **PR Queue**: [Open PRs](https://github.com/google-gemini/gemini-cli/pulls?q=is%3Aopen+is%3Apr)

> *Digest generated from GitHub data as of 2026-08-25 00:00 UTC. “👍” = GitHub reactions. Labels reflect current triage state.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-25

## Today's Highlights
The project shipped **v1.0.81-9** with a transparency improvement: model data-retention warnings now appear with links in the model picker. Meanwhile, the issue tracker shows a cluster of **MCP/OAuth regressions** (Atlassian, Entra ID, agentgateway) and a long-standing **400-error epidemic** (#1274, 27 comments) affecting code-review workflows. Community demand for **granular tool permissions in interactive mode** (#1973, 27 👍) remains the top feature ask.

---

## Releases
### v1.0.81-9
- **Improved**: Show model data retention warnings with links in the `/model` picker.  
  *Helps users make informed privacy/compliance choices when selecting models.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1274](https://github.com/github/copilot-cli/issues/1274) | **CLI constantly getting 400 errors for invalid request body** | 95% failure rate on code-review diffs; blocks core workflow. Debug logs attached. | 27 comments · 11 👍 — *Highest engagement, unresolved since Feb* |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | **Feature Request: Tool whitelist for Interactive Mode** | Current binary choice: approve every `grep`/`cat` or `/allow-all` (includes destructive ops). | 12 comments · **27 👍** — *Most-upvoted open feature request* |
| [#4490](https://github.com/github/copilot-cli/issues/4490) | **Atlassian MCP OAuth broken in 1.0.80 (RFC 8414 §3.3 regression)** | `MCPOAuthError: Incompatible authorization server`; worked in 1.0.78. | 5 comments — *Regression in recent release, closed but users report persistence* |
| [#4224](https://github.com/github/copilot-cli/issues/4224) | **OTel spans for subagent calls omit billing attributes** | Subagent (`task` tool) model calls lack `github.copilot.nano_aiu`/`cost` attrs → cost accounting undercounts. | 3 comments · 1 👍 — *Observability gap for enterprise billing* |
| [#4582](https://github.com/github/copilot-cli/issues/4582) | **MCP OAuth authorize request omits 'scope' for Entra ID (static oauthClientId)** | Causes `AADSTS900144`; blocks Entra ID-backed MCP servers without DCR. | 2 comments — *New, specific auth regression* |
| [#4421](https://github.com/github/copilot-cli/issues/4421) | **MCP initialize handshake: fixed 60s budget, no retry, never respawns** | `npx`-launched stdio servers fail ~29% of sessions; no recovery. | 2 comments — *Reliability hole in MCP integration* |
| [#4566](https://github.com/github/copilot-cli/issues/4566) | **Agent repeatedly acknowledges work without executing tool actions** | Model replies “I’ll do X” but emits no tool calls; stalls autopilot sessions. | 2 comments · 1 👍 — *Core agent loop failure* |
| [#4593](https://github.com/github/copilot-cli/issues/4593) | **Archiving worktree session fails on Windows (os error 32)** | Process tree rooted in worktree not stopped before removal; archive nearly complete then fails. | 1 comment — *Windows-specific session lifecycle bug* |
| [#4568](https://github.com/github/copilot-cli/issues/4568) | **`--cloud` owner picker hangs, reconnect crashes, task polling hits 429** | Multi-symptom cloud session failure: hang on owner load, provisioning timeout, rate limits. | 1 comment — *Cloud workflow instability* |
| [#4588](https://github.com/github/copilot-cli/issues/4588) | **Tool search (MCP deferral) disabled for all non-Anthropic models** | Non-Claude models send **all** tool schemas every turn → 21.6k tokens for `"hi"` vs 47k on Claude. | 0 comments — *Major token-cost regression for non-Anthropic models* |

---

## Key PR Progress
Only one PR updated in the last 24h:

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4573](https://github.com/github/copilot-cli/pull/4573) | `Rename README.md to README.mdmain` | Open | Trivial rename; likely accidental or test. No functional change. |

> **Note**: No substantive feature/fix PRs landed today. Watch for follow-ups on the MCP/OAuth regressions and the 400-error root cause.

---

## Feature Request Trends (from all issues)
1. **Granular permission model** — Tool whitelist/allowlist for interactive mode (#1973) to avoid `/allow-all` nuclear option.
2. **Multi-turn `/ask`** — Follow-up questions inside ephemeral `/ask` sessions (#4577, #4538).
3. **Parallel terminal workflows** — `/fork` opening a new terminal + `copilot --fork` flag (#4578, #4580).
4. **Richer asset support** — PDF upload/analysis (#4583) and image generation for icons/favicons/OG images (#4581).
5. **Status-line observability** — Raw token counts (#4589), end-aligned truncation for path/branch (#4591).
6. **Plugin/agent parity** — Interactive mode activates 0 plugin custom agents vs 4 in `--prompt` (#4592).

---

## Developer Pain Points (Recurring Themes)
| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **Request validation / 400 errors** | High-rate 400s on diffs, code reviews; unclear if CLI or server bug | #1274 |
| **MCP/OAuth fragility** | Atlassian, Entra ID, agentgateway regressions; missing `scope`, issuer mismatch, cross-origin ID | #4490, #4582, #4584, #4408 |
| **Windows session lifecycle** | Lock file leaks (#3255), plugin install blocked by VS Code (#4570), worktree archive fails (#4593) | #3255, #4570, #4593 |
| **Agent execution gaps** | Acknowledges but doesn’t act (#4566); background compaction loses tool results (#4572) | #4566, #4572 |
| **Cloud session instability** | Owner picker hang, provisioning timeout, 429 on polling, reconnect crashes | #4568 |
| **Extension SDK churn** | MCP host reload restarts all extensions; hook processor disposed on teardown | #4590 |
| **Token cost opacity** | Tool deferral disabled for non-Anthropic models → 20k+ tokens/turn (#4588); subagent billing attrs missing (#4224) | #4588, #4224 |
| **Origin verification hard-block** | SSH remotes on GHE make local sessions unusable when `git fetch` fails | #4585 |

---

*Generated from github.com/github/copilot-cli data as of 2026-08-25 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-25

---

## 1. Today's Highlights
- **No new releases** in the past 24 hours.  
- **Issue #1994** (usage quota exhaustion) resurfaced with 8 new comments and 7 👍, indicating ongoing community frustration with token-based billing for K2.6’s long reasoning chains.  
- **PR #2595** addresses a data-corruption risk in `StrReplaceFile` by refusing to edit non-UTF-8 files, fixing a regression reported in #2591.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| **[#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994)** | *kimiCode usage calculation has problems* | Users report 2-hour Pro quota exhausted after only 2 tasks because K2.6’s chain-of-thought emits excessive tokens. Billing doc promises “300–1200 API requests per 5h” but quota is token-based, causing mismatch. | 8 comments (latest 2026-08-24), 7 👍. Multiple users confirm same behavior; request either token-aware quota display or request-based billing toggle. |

*Only one issue updated in the last 24 h; older high-engagement issues not included per data scope.*

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| **[#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595)** | `fix(StrReplaceFile): refuse to edit files that are not valid UTF-8` | **Open** (updated 2026-08-24) | `StrReplaceFile` previously decoded entire file with `errors="replace"`, turning *any* invalid byte (even far from the edit) into U+FFFD on write-back. PR adds upfront UTF-8 validation and aborts with a clear error, preventing silent corruption. Resolves #2591. |

*Only one PR updated in the last 24 h.*

---

## 5. Feature Request Trends (from recent issue activity)
1. **Transparent quota accounting** — Show token consumption per request; align UI with “requests per 5 h” marketing claim.  
2. **Model-tier quota differentiation** — Separate pools for K2.6 (high-CoT) vs. lighter models.  
3. **Binary-file safety** — Explicit handling / rejection of non-UTF-8 files across all file tools (PR #2595 is a first step).

---

## 6. Developer Pain Points
- **Quota unpredictability**: “2-hour Pro plan = 2 questions” breaks workflow planning; no per-call token estimate.  
- **Silent data corruption**: `StrReplaceFile` mangling binary/legacy-encoding files without warning (now being fixed).  
- **Documentation–reality gap**: Marketing cites “requests,” backend meters tokens; no reconciliation in docs or CLI output.

---

*Data window: GitHub updates 2026-08-24 → 2026-08-25. Next digest will incorporate broader 7-day trends.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-25

## 1. Today's Highlights

OpenCode shipped **v1.18.22** with targeted bugfixes for device login links, provider compatibility, and legacy pricing messaging. The community is heavily focused on **TUI sidebar regressions** (modified files missing since v1.16.0) and **Ox Alpha Free provider instability** (widespread `network_error` and "Endpoint unavailable" failures). A notable v2.0 blocker emerged: the `subagent` tool cannot spawn its first child session due to a schema mismatch requiring `sessionID`.

---

## 2. Releases

### v1.18.22
**Core bugfixes:**
- Removed outdated OpenCode Go first-month discount messaging and pricing
- Fixed device login links when servers return relative verification URLs or use a base path
- Fixed `textVerbosity` being sent to OpenAI-compatible providers that don't support it ([#4489](https://github.com/anomalyco/opencode/issues/4489))

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4489](https://github.com/anomalyco/opencode/issues/4489) | **Ephemeral one-off sessions for `opencode run`** | Feature request to avoid persisting full sessions for quick tasks; author willing to implement | 14 comments, 15 👍 — strong interest |
| [#30877](https://github.com/anomalyco/opencode/issues/30877) | **TUI "Modified Files" sidebar completely hidden after v1.16.0** | Regression: entire section missing, not just truncated; blocks visibility of uncommitted changes | 11 comments, 14 👍 — high visibility |
| [#43619](https://github.com/anomalyco/opencode/issues/43619) | **[v2.0] subagent: required `sessionID` prevents first child session** | Schema requires `sessionID` but docs say omit for new session — blocks all delegation workflows | 10 comments, v2.0 blocker |
| [#6310](https://github.com/anomalyco/opencode/issues/6310) | **Sessions unusable due to large LSP diagnostics (Lua)** | Edit/write tools store full workspace diagnostics in metadata → session crawls with thousands of files | 9 comments, root cause identified |
| [#44300](https://github.com/anomalyco/opencode/issues/44300) | **Zen API: Ox Alpha Free fails with "Endpoint unavailable" when tools included** | Any request with `tools` array fails on free tier routes since 2026-08-23 | 7 comments, 1 👍 — service degradation |
| [#44379](https://github.com/anomalyco/opencode/issues/44379) | **Provider finish_reason: network_error with Ox Alpha Free (unlimited)** | Persistent inline red banner errors; only workaround is new chat session | 6 comments, 4 👍 — active disruption |
| [#17797](https://github.com/anomalyco/opencode/issues/17797) | **TUI: Modified files no longer shown** | Long-standing regression since v1.2.27; diff info (+5/-2) missing from sidebar | 6 comments, 1 👍 — duplicate of #30877 |
| [#37823](https://github.com/anomalyco/opencode/issues/37823) | **GitHub Action fails on repos created after 2026-07-15 (new OIDC sub format)** | Immutable OIDC sub breaks JSON parsing → `p.rest` error in CI/CD pipelines | 6 comments, 11 👍 — CI blocking |
| [#32852](https://github.com/anomalyco/opencode/issues/32852) | **TUI sidebar "Modified Files" doesn't show session diffs** | Section stays empty even after modifications; worked previously | 5 comments, 3 👍 — related to #30877 |
| [#44577](https://github.com/anomalyco/opencode/issues/44577) | **DeepSeek models: "API key invalid" + missing models (GPT 5.6, GLM-5.3, Qwen3.8 Max)** | Provider integration issues + model catalog gaps | 4 comments — multi-provider impact |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Description |
|---|----|------|-------------|
| [#44796](https://github.com/anomalyco/opencode/pull/44796) | **Bug fix** | **Restores TUI sidebar modified-files diff** — closes #30877; reverts intentional `Session.diff` emptying from #30127 |
| [#44811](https://github.com/anomalyco/opencode/pull/44811) | **Bug fix** | **Trims persisted LSP diagnostics in edit/write metadata** — addresses #6310 root cause (workspace-wide diagnostic bloat) |
| [#44813](https://github.com/anomalyco/opencode/pull/44813) | **Core fix** | **Registry reads observe pending reloads** — eliminates stale reads during 500ms debounced reload window |
| [#44825](https://github.com/anomalyco/opencode/pull/44825) | **Bug fix** | **Routes filesystem through Location environment** — closes #44568; fixes path canonicalization in multi-location setups |
| [#44757](https://github.com/anomalyco/opencode/pull/44757) | **Feature** | **Enables LSP tool by default** — removes `flags.experimentalLspTool` guard; closes #44759 |
| [#44683](https://github.com/anomalyco/opencode/pull/44683) | **Feature** | **Queues and steers follow-up prompts** — implements Figma spec: queue pullout, inline editing, drag-reorder, hotkeys |
| [#44818](https://github.com/anomalyco/opencode/pull/44818) | **Refactor** | **Normalizes tool input errors** — unified validation error format with field paths, retry guidance, preserved decoded values |
| [#44792](https://github.com/anomalyco/opencode/pull/44792) | **Feature** | **Adds partial JSON parser** — attributed internal parser with configurable partial strings/numbers/collections/literals |
| [#44789](https://github.com/anomalyco/opencode/pull/44789) | **Bug fix** | **Validates JSON schema tool input** — imports Draft 2020-12/07 schemas, decodes args pre-execution, caches schemas |
| [#44806](https://github.com/anomalyco/opencode/pull/44806) | **Bug fix** | **Recovers missing assistant responses** — handles provider `stop` finish with no content/tool calls; closes #42677 |

---

## 5. Feature Request Trends

| Trend | Evidence | Priority Signal |
|-------|----------|-----------------|
| **Ephemeral/lightweight sessions** | #4489 (15 👍, author implementing), #44798 (context limit handoff) | High — workflow flexibility |
| **TUI sidebar diff restoration** | #30877, #17797, #32852, #34620 — all about missing modified files | Critical — regression since v1.16.0 |
| **Subagent/delegation workflows** | #43619 (v2.0 blocker), #44788 (plugin context injection failing) | High — core to v2.0 architecture |
| **Provider/model catalog expansion** | #44577 (DeepSeek, GPT 5.6, GLM, Qwen), #44300 (Zen API free tier) | Medium — user demand for model choice |
| **GitHub Actions OIDC compatibility** | #37823 (11 👍), #33060, #39441 | High — CI/CD blocking for new repos |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Affected Areas |
|------------|-----------|----------------|
| **TUI modified files sidebar broken** | 4+ issues (#30877, #17797, #32852, #34620) | Daily workflow visibility; regression since v1.16.0 |
| **Ox Alpha Free provider unreliable** | 5+ issues (#44300, #44379, #44332, #44385, #44750) | Free tier users blocked; "Endpoint unavailable", `network_error`, stream truncation |
| **Session bloat from LSP diagnostics** | #6310 (9 comments), #44811 (PR fix) | Large Lua/TS workspaces → sessions crawl after few edits |
| **v2.0 schema/contract mismatches** | #43619 (subagent), #44788 (plugin events), #44812 (cli.json schema) | Blocking adoption of new APIs |
| **GitHub Actions broken on new repos** | #37823 (11 👍), #33060, #39441 | OIDC sub format change since 2026-07-15 breaks CI |
| **Missing model catalog entries** | #44577, #44300 | Users can't access advertised models (DeepSeek variants, GPT 5.6, etc.) |

---

*Digest generated from GitHub data (last 24h). Links point to anomalyco/opencode repository.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-25

## 1. Today's Highlights
Pi v0.84.3 shipped with an optional **native PowerShell tool** for Windows and **safer managed updates** (staged, verified, atomic activation). The community is actively tackling Windows usability (#7547, 44 comments), auto-compaction reliability (#6879, 19 👍), and Gemini 3.x tool-use failures (#6996). Two major PRs landed today: per-model compaction profiles (#8592) and Gemini `thought_signature` round-tripping via OpenAI-compatible endpoints (#8590).

## 2. Releases
### v0.84.3 (2026-08-25)
- **PowerShell tool** — Optional native `pwsh` execution on Windows; see [Windows docs](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool) ([#8512](https://github.com/earendil-works/pi/pull/8512))
- **Safer managed updates** — Updates now stage, verify checksums/signatures, and atomically activate to prevent partial installs
- **Llama.cpp preset visibility** — Presets with autoload enabled now appear in `/model` picker ([#8558](https://github.com/earendil-works/pi/pull/8558), [#8479](https://github.com/earendil-works/pi/pull/8479))

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) **Windows strategy** | 44 comments, 2 👍 — Core team seeking focus: WSL vs Git Bash vs native PowerShell vs Dev Containers. Decides where docs/engineering effort goes. | High engagement; maintainers asking community to vote on supported paths. |
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction never triggers past 100%** | 19 👍 — Compaction only fires on provider overflow (373k tokens), not at configured threshold. Data-loss risk for long sessions. | 22 comments; users report silent context bloat until API rejects request. |
| [#6996](https://github.com/earendil-works/pi/issues/6996) **Gemini 3.x missing `thought_signature`** | Breaks tool-use loops on Gemini 3.x via OpenAI-compatible gateways (OpenRouter, Copilot). Fixed today in [#8590](https://github.com/earendil-works/pi/pull/8590). | 6 comments; blocking for Gemini 3.x adopters. |
| [#6922](https://github.com/earendil-works/pi/issues/6922) **Default llama.cpp model shows "No models available"** | 14 👍 — Startup regression when `defaultProvider: "llama.cpp"`. Closed but reveals config UX gaps. | 11 comments; affects local-model-first users. |
| [#8167](https://github.com/earendil-works/pi/issues/8167) **Llama.cpp router presets not in model list** | Models loadable via `/llama` but invisible in `/model` picker. Partially addressed in [#8558](https://github.com/earendil-works/pi/pull/8558). | 11 comments; UX inconsistency for local inference. |
| [#7444](https://github.com/earendil-works/pi/issues/7444) **WebSocket retry only handles 2 error codes** | Other transient `response.failed` errors hard-stop turns. Fix reduces flaky failures on Codex Responses. | 9 comments; reliability improvement. |
| [#8133](https://github.com/earendil-works/pi/issues/8133) **Per-model compaction settings** | 3 👍 — Global `reserveTokens` breaks when switching between 200K and 1M context models. Implemented in [#8592](https://github.com/earendil-works/pi/pull/8592). | 4 comments; power-user request now shipped. |
| [#8166](https://github.com/earendil-works/pi/issues/8166) **Custom message breaks tool_calls→tool adjacency** | Extension `sendMessage(triggerTurn:false)` injects mid-batch, causing DeepSeek 400 on next turn. | 7 comments; extension-author pain point. |
| [#7048](https://github.com/earendil-works/pi/issues/7048) **Compaction summary truncated mid-word** | `stopReason: "length"` not checked; summaries cut off silently. | 7 comments, 1 👍; data integrity issue. |
| [#8583](https://github.com/earendil-works/pi/issues/8583) **Heavy extension tool schemas bloat startup context** | Request: defer schemas until first use or per-project active-tool profile. | 2 comments; performance/scaling concern. |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#8592](https://github.com/earendil-works/pi/pull/8592) | **Merged** | **Per-model compaction profiles** — `compaction.profiles` map in settings keyed by model ID; solves #8133. |
| [#8590](https://github.com/earendil-works/pi/pull/8590) | **Merged** | **Gemini `thought_signature` round-trip** via OpenAI-completions adapter; fixes #6996 for Gemini 3.x tool use. |
| [#8585](https://github.com/earendil-works/pi/pull/8585) | **Merged** | **Abort OpenAI streams immediately** — checks abort signal on every `reader.read()`; matches Anthropic behavior. |
| [#8575](https://github.com/earendil-works/pi/pull/8575) | **Merged** | **Bound torn-append replay loss** in session JSONL — malformed lines no longer silently drop two entries. |
| [#8570](https://github.com/earendil-works/pi/pull/8570) | **Merged** | **Preserve Codex `thread-id` affinity header** — maintains session/thread continuity for Codex Responses. |
| [#8573](https://github.com/earendil-works/pi/pull/8573) | **Open** | **Bedrock Mantle Anthropic Messages** — routes new Mantle API surface (GPT-5.x on Bedrock) via existing Anthropic adapter. |
| [#8572](https://github.com/earendil-works/pi/pull/8572) | **Open** | **Amazon Bedrock Mantle (base)** — auth wrapper + routing for Mantle models; WIP awaiting API key perms. |
| [#8559](https://github.com/earendil-works/pi/pull/8559) | **Open** | **Clipboard images as atomic markers** — pasted images render as attachments in editor, not raw temp paths. |
| [#8547](https://github.com/earendil-works/pi/pull/8547) | **Open** | **Move editor cursor on click** — primary mouse click positions cursor in prompt; improves mouse-driven editing. |
| [#8512](https://github.com/earendil-works/pi/pull/8512) | **Merged** | **Optional PowerShell tool** — native `pwsh` on Windows; ships in v0.84.3. |

## 5. Feature Request Trends
1. **Model-aware configuration** — Per-model compaction (#8133, done), per-model tool sets (#8583), provider-specific pricing (#8491).
2. **Windows first-class support** — Native PowerShell (#8512), path handling (#7875), consistent shell detection (#8582).
3. **Extension/agent portability** — Presets export/import (`pi preset` #8588), deferred tool schemas (#8583), renderer hooks for custom compaction UI (#8589).
4. **Provider diversity** — Bedrock Mantle (#8572/#8573), SiliconFlow (#4742), Eden AI (#6403), Parasail (#8450), Merge Gateway (#5986), xAI Responses (#8124).
5. **Session durability** — Torn JSONL recovery (#8575), compaction summary integrity (#7048), abort reason fidelity (#8409).
6. **Local inference UX** — Llama.cpp preset visibility (#8167/#8558), autoload models, router-mode model listing.

## 6. Developer Pain Points
- **Windows fragmentation** — "Gazzilion ways to run Pi on Windows" (#7547); no blessed path for docs/tooling.
- **Compaction unreliability** — Silent failures past 100% context (#6879), truncated summaries (#7048), wrong stop reasons (#8409).
- **Provider adapter gaps** — Gemini `thought_signature` dropped (#6996), Codex retry classification missing transient errors (#8138, #7444), Bedrock Mantle routing (#5363).
- **Extension ecosystem friction** — Heavy schemas at startup (#8583), message injection breaks tool adjacency (#8166), no preset portability (#8588).
- **Local model discoverability** — Llama.cpp presets hidden (#8167), default model config regression (#6922).
- **CLI edge cases** — `-p`/RPC exits 0 silently if stdin consumed early (#8587), external editor quoting broken (#7875).
- **TUI polish** — Cursor doesn't move on click (#8547), shared session buttons lack feedback (#8569), fullscreen overlay policy (#8475).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-25

---

## 1. Today's Highlights
- **Nightly v0.22.0** shipped with a fix for web-shell workspace CWD handling and the **cua-driver-rs v0.20.0** prebuilt binaries (macOS notarized universal, Linux/Windows unsigned, Node.js bundle).  
- **Architecture refactor momentum** continues: core Config ownership (#8083), MCP reconnect reliability (#9944), and Anthropic stream-safety parity (#9005) are all active P1/P2 items.  
- **Agent Team & review tooling** see rapid iteration—teammate message delivery now at tool-round boundaries (#9638), deferred suggestions made recoverable off the PR page (#9761), and Step 4 verification upgraded to execution-grade (#9740).

---

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| `v0.22.0-nightly.20260824.3a1f86d805` | 2026-08-24 | • `fix(web-shell)`: pass session workspace CWD when opening from overview panel ([#9730](https://github.com/QwenLM/qwen-code/pull/9730))<br>• **cua-driver-rs v0.20.0** vendored under `packages/cua-driver` — macOS codesigned/notarized universal binary + `QwenCuaDriver.app`; Linux (x86_64/arm64, glibc≥2.31); Windows (x86_64/arm64); single Node.js publish workflow |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#5975](https://github.com/QwenLM/qwen-code/issues/5975) | **API Error: No stream activity for 120s after 19 chunks** | High-frequency streaming timeout breaking interactive use since v0.19.3; affects all providers. | 12 💬, 1 👍 — **P2, needs-triage** |
| [#4063](https://github.com/QwenLM/qwen-code/issues/4063) | **Core + CLI architecture review — 12 structural issues** | Documents 14 architectural problems (e.g., `@google/genai` type coupling across 136 files, Config prototype delegation, DI absence). | 9 💬, 1 👍 — **in-progress, enhancement** |
| [#8083](https://github.com/QwenLM/qwen-code/issues/8083) | **Make derived Config context ownership explicit** | Prototype-delegation `Config` derivations cause subtle state leaks in subagents, memory agents, approval overrides. | 6 💬 — **P1, in-progress** |
| [#9944](https://github.com/QwenLM/qwen-code/issues/9944) | **MCP reconnect reports success but tools unavailable (HTTP transport)** | New `mcp-session-id` on server restart breaks tool discovery; `qwen mcp reconnect --all` lies. | 4 💬 — **P2, bug** |
| [#9005](https://github.com/QwenLM/qwen-code/issues/9005) | **Anthropic wire missing stream-safety protections vs OpenAI wire** | `anthropicContentGenerator` lacks guards present in OpenAI path; SDK pinned to old 0.36.1. | 4 💬 — **P1, bug** |
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | **Migrate TUI from Ink to OpenTUI (flicker-free, first-class mouse)** | Ink 7 + patched renderer (1037 lines) causes flicker, resize races, mouse issues; OpenTUI promises native solutions. | 4 💬 — **P3, needs-discussion** |
| [#9942](https://github.com/QwenLM/qwen-code/issues/9942) | **Hide skill commands from top-level slash completion** | Skill explosion crowds completion menu; built-in commands buried. | 4 💬 — **P3, need-discussion** |
| [#9927](https://github.com/QwenLM/qwen-code/issues/9927) | **Artifact `updatedAt` stale; write_file intermediates linger** | `updatedAt` only moves on registration-field changes, not content mutations; ghost intermediates in session. | 4 💬 — **P2, bug** |
| [#9026](https://github.com/QwenLM/qwen-code/issues/9026) | **NO_TOOL_RESULT_PROGRESS hard-fails headless runs** | Model ending turn quietly after tool result aborts headless with `InvalidStreamError`. | 4 💬 — **P2, CLOSED** |
| [#9865](https://github.com/QwenLM/qwen-code/issues/9865) | **Kimi rejects built-in tool schemas with `uniqueItems: true`** | DashScope OpenAI-compat endpoint 400s on `update_goal.evidenceRefs` / `todo_write.blockedBy`. | 2 💬 — **P1, CLOSED** |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#9659](https://github.com/QwenLM/qwen-code/pull/9659) | Content-anchored incremental rounds for local review-fix loop | feat | **OPEN** | Part 1 of 2; 20 reviews/166 comments on #9190. Enables per-file verdicts surviving rebase. |
| [#9389](https://github.com/QwenLM/qwen-code/pull/9389) | Recommend live model list in setup wizard | feat | **OPEN** | Wizard now queries `GET {baseUrl}/models` with user key instead of frozen release-time list. |
| [#9638](https://github.com/QwenLM/qwen-code/pull/9638) | Deliver teammate messages at tool-round boundaries | fix | **OPEN** | Agent Team messages no longer wait for whole-task end; arrive between tool rounds. |
| [#9740](https://github.com/QwenLM/qwen-code/pull/9740) | Make Step 4 verification execution-grade | feat | **OPEN** | Adds `qwen review ab-drive` (paired script execution), evidence forms, and verification artifacts. |
| [#9829](https://github.com/QwenLM/qwen-code/pull/9829) | `permissions.allow` restricts tool schemas sent to model | fix | **OPEN** | Allow rules become registry-level allowlist; non-allowed built-ins disappear from `/tools` and model. |
| [#9862](https://github.com/QwenLM/qwen-code/pull/9862) | Route-scope ACP session token-limit cache | fix | **OPEN** | Cache keyed by `Config.getModelRouteIdentity()`; invalidated on model switch to prevent stale limits. |
| [#9417](https://github.com/QwenLM/qwen-code/pull/9417) | Keep heredoc bodies out of permission rule splitting | fix | **OPEN** | Fixes #9381: heredoc bodies stripped only for provable simple commands with known stdin consumers. |
| [#9954](https://github.com/QwenLM/qwen-code/pull/9954) | Extract shared contexts in web-shell | refactor | **OPEN** | Compact-mode & todo-detail contexts moved to dedicated module; leaf components import only needed boundary. |
| [#9895](https://github.com/QwenLM/qwen-code/pull/9895) | Daemon: support scoped workspace memory tasks | feat | **OPEN** | Adds `project`/`user` target to sessionless remember/forget across REST, ACP, TS SDK; capability tags for negotiation. |
| [#9771](https://github.com/QwenLM/qwen-code/pull/9771) | Keep autofix round status comment live during long rounds | feat | **OPEN** | Detached heartbeat loop updates "🔄 working" comment so healthy vs stuck rounds are distinguishable. |

---

## 5. Feature Request Trends
1. **MCP hardening** — Reconnect reliability (#9944), tool result collapsing (#9934), OSS Mem0 provider support (#9951, #9964).  
2. **Agent Team UX** — Scoped memory tasks (#9895), teammate message timing (#9638), shutdown/report channel separation (#9510).  
3. **Review skill maturity** — Execution-grade verification (#9740), incremental content-anchored rounds (#9659), deferred suggestion recovery (#9761).  
4. **Web-shell / VS Code parity** — Restore per-message edit/rewind after WebShell cutover (#9911), hide skill spam in slash completion (#9942).  
5. **Config & permission model** — Explicit Config ownership (#8083), `permissions.allow` as schema allowlist (#9829), heredoc-aware permission matching (#9417).  
6. **TUI modernization** — OpenTUI migration (#8662), VP mode layout fixes (#9966, #9305).  
7. **Provider ecosystem** — Live model discovery in wizard (#9389), Anthropic stream-safety parity (#9005), Kimi schema compatibility (#9865).  

---

## 6. Developer Pain Points (Recurring Themes)
- **Streaming instability** — 120 s no-activity timeouts (#5975), Anthropic missing safety guards (#9005), headless hard-fail on quiet turn end (#9026).  
- **MCP fragility** — Reconnect lies about success (#9944), tool results never collapse (#9934), session-id rotation breaks tool discovery.  
- **Config/state leakage** — Prototype-delegation `Config` derivations cause cross-agent contamination (#8083, #9534, #9564).  
- **Skill discoverability** — Slash completion flooded by skill commands (#9942); no grouping or filtering.  
- **CI/CD sandbox reliability** — Missing versioned images kill lanes silently (#9961); build-failure issues not auto-closed on retry success (#9960).  
- **Root/permission test flakiness** — `chmod 000` simulations pass as root (#9909).  
- **Artifact metadata drift** — `updatedAt` decoupled from content mutations (#9927); ghost `write_file` intermediates.  
- **Review visibility** — Long autofix rounds show static "🔄 working" with no heartbeat (#9771).  

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-08-25. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-25

---

## 1. Today's Highlights

The v0.9.12 release cycle is in its final integration phase with a dedicated tracking issue (#5573) and integration PR (#5576) coordinating must-fix items. Three major architectural initiatives landed in PRs today: a Unix-domain control socket for supervised operation (#5594), a self-relaunch command to eliminate manual restarts after updates (#5593), and a lifecycle event outbox for machine-readable session telemetry (#5592). Simultaneously, a provider-neutrality audit (#5588) identified 18 DeepSeek-specific code gates that should be provider-agnostic, and a mega-file decomposition effort (#5586) targets four files exceeding 10k lines each.

---

## 2. Releases

**No new releases in the last 24 hours.** The v0.9.12 release is tracked in #5573 with a working branch `codex/v0912-integration-20260823`; the release gates (version bump, changelog, RC verification, full publish chain) remain pending.

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) **Provider neutrality audit** — 18 DeepSeek-exclusive gates found in 279 files | Critical for multi-provider support; NVIDIA NIM env leak already fixed in this batch | 👍 0 • 4 comments • Author: Hmbown (maintainer) |
| [#5586](https://github.com/Hmbown/CodeWhale/issues/5586) **Decompose mega files** — lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k), runtime_threads.rs (9.3k) | Maintainability blocker; large files cause review pain and merge conflicts | 👍 0 • 3 comments • Author: Hmbown |
| [#5573](https://github.com/Hmbown/CodeWhale/issues/5573) **v0.9.12 milestone tracker** — P0 must-fix items before release | Single source of truth for release blockers (money & safety items) | 👍 0 • 3 comments • Author: Hmbown |
| [#5585](https://github.com/Hmbown/CodeWhale/issues/5585) **Stack overflow in test** `setup_confirm_toast_names_secret_store_and_global_scope` | Pre-existing CI failure on macOS; blocks test suite reliability | 👍 0 • 3 comments • Author: Hmbown |
| [#5551](https://github.com/Hmbown/CodeWhale/issues/5551) **Focused-block actions** — copy content/metadata, fullscreen, raw markdown | UX gap: per-message actions only exist in Tasks rail, not transcript | 👍 0 • 2 comments • Author: Hmbown |
| [#5589](https://github.com/Hmbown/CodeWhale/issues/5589) **Fleet config UX** — Enter loops, model switching buried | User-reported confusion in fleet role editing; PR #5604 addresses discoverability | 👍 0 • 2 comments • Author: Hmbown |
| [#5601](https://github.com/Hmbown/CodeWhale/issues/5601) **MiniMax/Xiaomi 404 on fresh install** — hardcoded URL errors | Blocks new users configuring non-DeepSeek providers; DeepSeek works | 👍 0 • 2 comments • Author: Brook-WZ |
| [#5553](https://github.com/Hmbown/CodeWhale/issues/5553) **/context: token cost for tools & MCP schemas** — display-only | Cost transparency for MCP server tool announcements; PR #5603 implements | 👍 0 • 2 comments • Author: Hmbown |
| [#5596](https://github.com/Hmbown/CodeWhale/issues/5596) **Turn end cancels turn-owned subagents silently** | Data loss risk: long-running reviewers lose work without warning | 👍 0 • 1 comment • Author: Hmbown |
| [#5575](https://github.com/Hmbown/CodeWhale/issues/5575) **Fleet/subagent role posture — no single source of truth** | Drift across 5+ definition sites caused verifier contradiction bug | 👍 0 • 1 comment • Author: Hmbown |

*Closed-but-notable:* [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) `/dryrun` command (preview requests), [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) `/stop` for YOLO mode, [#1482](https://github.com/Hmbown/CodeWhale/issues/1482) NVIDIA NIM 404, [#2492](https://github.com/Hmbown/CodeWhale/issues/2492) cross-session memory — all closed 2026-08-24.

---

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#5594](https://github.com/Hmbown/CodeWhale/pull/5594) | OPEN | **Control socket (part d final)** — Opt-in Unix JSON-RPC socket per session for supervised operation (`[control_socket] enabled = true`) |
| [#5593](https://github.com/Hmbown/CodeWhale/pull/5593) | OPEN | **`/relaunch` command (part c)** — Self-relaunch after `/update`; persists session, restores terminal, flushes telemetry |
| [#5592](https://github.com/Hmbown/CodeWhale/pull/5592) | OPEN | **Lifecycle outbox (part b)** — Opt-in JSONL + webhook for `turn_start/end`, `subagent_spawn/complete`, `session_end` |
| [#5606](https://github.com/Hmbown/CodeWhale/pull/5606) | CLOSED | **0.9.12 relay integration** — Managed Chat on native runtime threads, R2 approval fix, `doctor --fix` with consent |
| [#5584](https://github.com/Hmbown/CodeWhale/pull/5584) | OPEN | **Persist child approval receipts** — Inherits session receipt store; commits Asked before prompt, terminal outcomes before close |
| [#5576](https://github.com/Hmbown/CodeWhale/pull/5576) | OPEN | **0.9.12 integration WIP** — 72 commits; release blockers done, awaiting version bump + changelog/RC gates |
| [#5602](https://github.com/Hmbown/CodeWhale/pull/5602) | OPEN | **Windows shell output decoding** — Preserves UTF-8/ANSI across reads; strict UTF-8 first, fallback to ACP |
| [#5604](https://github.com/Hmbown/CodeWhale/pull/5604) | OPEN | **Fleet roster editing discoverability** — `[edit]` affordance, `m model` footer hint, opens detail editor for focused member |
| [#5603](https://github.com/Hmbown/CodeWhale/pull/5603) | OPEN | **Tool & MCP schema costs in context inspector** — Catalog total, per-tool rows sorted by token cost, omitted-count summary |
| [#5599](https://github.com/Hmbown/CodeWhale/pull/5599) | CLOSED | **Capability-gated cursor accent** — OSC 12 on start, OSC 112 restore; respects reduced-motion/plain terminals |

*Also notable:* [#5591](https://github.com/Hmbown/CodeWhale/pull/5591) goal-continuation cadence fix (closed), [#5535](https://github.com/Hmbown/CodeWhale/pull/5535) supervised operation stack mega-PR (closed), [#5523](https://github.com/Hmbown/CodeWhale/pull/5523) tool call stage extraction (closed).

---

## 5. Feature Request Trends

1. **Multi-provider parity** — Provider-neutrality audit (#5588), NVIDIA NIM support (#1482), MiniMax/Xiaomi config fixes (#5601), OAuth2.1 for MCP (#1409)
2. **Session persistence & continuity** — Cross-session memory (#2492), `/relaunch` (#5593), lifecycle outbox (#5592), subagent survival across turns (#5596, #5597)
3. **Supervised/automated operation** — Control socket (#5594), `/stop` for YOLO (#4959), goal-continuation cadence (#5534, #5571, #5591)
4. **Cost & context transparency** — `/dryrun` preview (#1004), `/context` tool/MCP token attribution (#5553, #5603), cache_control breakpoints (#5570)
5. **TUI power-user UX** — Per-block actions (#5551), fleet editing discoverability (#5589, #5604), cursor accent (#5554, #5599)
6. **Codebase health** — Mega-file decomposition (#5586), dead-code sweep (#5587), test reliability (#5585, #5605), CI coverage (#5547, #5598)

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Provider lock-in** | 18 DeepSeek-specific gates in core paths (#5588); NVIDIA NIM 404 (#1482); MiniMax/Xiaomi broken URLs (#5601); OAuth2.1 missing for MCP (#1409) |
| **Unmaintainable mega-files** | 4 files >10k lines (lib.rs 18.7k, config.rs 12.3k, client.rs 11.1k, runtime_threads.rs 9.3k) causing review/merge pain (#5586) |
| **Subagent lifecycle fragility** | Turn end destroys turn-owned subagents silently (#5596); detached agents lose post-turn usage accounting (#5597); read-only children blocked from `git -C` (#5595) |
| **Session state loss** | No cross-session memory (#2492); manual restart required after update (fixed by #5593); no machine-readable lifecycle hooks (fixed by #5592) |
| **Test/CI unreliability** | Stack overflow in test on macOS (#5585); flaky test under parallel load (#5605); Linux CI skipped for non-mirrored branches (#5547) |
| **Opaque cost model** | Cannot preview request before send (#1004); no token attribution for tools/MCP schemas (#5553); Anthropic cache_control never emitted (#5570) |
| **Role/posture drift** | Fleet/subagent role posture defined in 5+ places with contradictions (#5575); verifier role contradicted its own description |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-24 to 2026-08-25). All links point to `Hmbown/CodeWhale` (the DeepSeek TUI repository).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*