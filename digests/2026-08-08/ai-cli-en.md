# AI CLI Tools Community Digest 2026-08-08

> Generated: 2026-08-08 01:07 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-08)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid, parallel iteration** across 8+ active projects, with a clear bifurcation between **enterprise-backed platforms** (Claude Code, Codex, Gemini CLI, Copilot CLI) and **community-driven/emerging tools** (OpenCode, Pi, DeepSeek TUI, Kimi Code). All tools are converging on three architectural pillars: **agent orchestration** (subagents, background tasks, fleet management), **session continuity** (compaction, resume, cross-session memory), and **extensibility** (MCP, plugin systems, skill marketplaces). Security hardening (SSRF fixes, sandbox upgrades, credential guards) and cross-platform reliability (Windows, Linux containers, macOS) dominate immediate engineering investment. The ecosystem is moving from "chat with tools" toward **"durable, multi-agent development environments"** with persistent context, policy governance, and remote execution support.

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Releases | Hot Issues (Tracked) | Key PRs Merged/Open | Release Cadence |
|------|----------|---------------------|---------------------|-----------------|
| **Claude Code** | 1 (v2.1.224) | 10 | 3 | Stable monthly + patches |
| **OpenAI Codex** | 1 stable + 4 alpha | 10 | 10 | Bi-weekly stable; daily alpha |
| **Gemini CLI** | **3** (nightly, preview, stable) | 10 | 10 | **Accelerated: 3 in 24h** |
| **GitHub Copilot CLI** | 3 patches (v1.0.79-7→-9) | 10 | 0 | Patch trains; no PRs visible |
| **Kimi Code CLI** | 0 | 2 | 2 | Low; safety-focused |
| **OpenCode** | 1 (v1.18.15) | 10 | 10 | Regular; feature-rich PRs |
| **Pi** | 1 (v0.84.1) | 10 | 10 | Regular; TUI/extension focus |
| **DeepSeek TUI** | 0 (v0.9.4 pre-release) | 10 | 10 | Pre-release; CI unblocking |
| **Qwen Code** | — | — | — | Data unavailable |

**Observation**: Gemini CLI shows the highest release velocity (3 releases/24h). Codex, OpenCode, Pi, and DeepSeek TUI maintain high PR throughput (10+ each), indicating active internal development. Copilot CLI ships via patch trains without visible PR activity. Kimi Code is quieter but addressing critical safety issues.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Cross-agent instruction portability** | Claude Code (#6235, 4.5k 👍), Codex, Gemini CLI, Copilot CLI, Kimi Code (#1283) | AGENTS.md adoption; vendor-specific formats (CLAUDE.md, .copilot/) seen as lock-in; demand for universal agent spec |
| **Session continuity & compaction** | Claude Code (#13354), Codex (#34663), Gemini CLI (#6879, #7020), Pi (#6879, #7020), OpenCode, DeepSeek TUI (#2492) | Resume after token limits; reliable post-compaction continuation; cross-session memory; transcript integrity |
| **Subagent/background agent orchestration** | Codex (Guardian), Gemini CLI (subagent hangs #21409), OpenCode (#40923), DeepSeek TUI (#425, #3982), Pi | Native background tasks; resume chains; status APIs; observer/watchers; fleet management |
| **MCP / plugin ecosystem maturity** | Codex (#26234, #35253), Claude Code (#14920, #84939), Gemini CLI, Copilot CLI, OpenCode, Pi | Namespace flattening for non-OpenAI providers; skill-level granularity; archive/air-gapped installs; secret management |
| **Enterprise policy & sandbox controls** | Claude Code (self-hosted runner), Codex (auto_review), Copilot CLI (allow-auto-only, proxy), OpenCode (Go quota) | Granular trust levels; proxy enforcement; sandbox isolation; audit trails; quota accounting |
| **Windows / cross-platform reliability** | **All tools** | Codex: CreateProcessAsUserW, EnumWindows; Claude Code: ECONNRESET, file locks; Copilot CLI: clipboard, OneDrive paths; Gemini CLI: Wayland; OpenCode: TUI onboarding |
| **Model/provider flexibility** | Codex (Ollama/LM Studio/OpenRouter #26234), Pi (LM Studio, Bedrock, Cursor), OpenCode (Snowflake, Baseten), DeepSeek TUI (multi-model fleets) | BYO-model support; correct model versioning on relays; OAuth for enterprise providers; auto tier selection |

---

## 4. Differentiation Analysis

| Dimension | Enterprise-Backed (Claude, Codex, Gemini, Copilot) | Community/Emerging (OpenCode, Pi, DeepSeek TUI, Kimi) |
|-----------|---------------------------------------------------|------------------------------------------------------|
| **Target User** | Professional teams, enterprises, pro developers | Power users, early adopters, OSS enthusiasts, local-first advocates |
| **Core Differentiator** | **Managed cloud execution** (Claude self-hosted runner, Codex Go, Gemini Cloud), **IDE integration depth** (VS Code, JetBrains), **compliance/policy** | **Local-first / self-hosted** (OpenCode, Pi, DeepSeek TUI), **TUI-native UX**, **model-agnostic routing**, **extensible architecture** |
| **Technical Approach** | Proprietary backends; gRPC protocols (Codex code-mode); managed sandbox fleets; enterprise SSO | Open protocols (MCP, custom gRPC); Rust/Go/TypeScript cores; user-controlled inference; embeddable runtimes |
| **Session Model** | Cloud-synced, quota-managed, policy-gated | Local filesystem-based; user-owned context; flexible compaction |
| **Extensibility** | Curated plugin markets (Claude, Codex); skill systems (Copilot); MCP as bridge | First-class MCP; custom tool runtimes; extension APIs (Pi); fleet configs (DeepSeek TUI) |
| **Maturity Signal** | Dedicated security teams (SSRF fixes in Gemini, YAML injection in Claude); SLA-backed releases | Rapid architectural refactors (DeepSeek TUI 18→1 crate); community triage (OpenCode Caretaker); transparency |

**Key Insight**: Enterprise tools compete on **managed infrastructure, compliance, and ecosystem integration**. Community tools compete on **control, transparency, local execution, and architectural agility**. The gap is narrowing as enterprise tools add self-hosted options (Claude runner) and community tools add cloud bridges (Pi Cursor auth, OpenCode Modal driver).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Maturing** | **Claude Code**, **OpenAI Codex**, **Gemini CLI** | - Highest issue engagement (Claude #6235: 4.5k 👍; Codex #14599: 57 👍)<br>- Dedicated security/releases teams<br>- Enterprise adoption signals (Team/Enterprise plans, SSO, audit)<br>- Multi-platform (CLI, Web, Mobile, Desktop, IDE) |
| **High Velocity / Rapid Iteration** | **Gemini CLI** (3 releases/24h), **OpenCode**, **Pi**, **DeepSeek TUI** | - 10+ PRs/day merging features + fixes<br>- Architectural refactors in flight (DeepSeek TUI 18→1 crate, Pi agent recovery)<br>- Transparent public roadmaps via GitHub |
| **Stable Patch Cadence** | **GitHub Copilot CLI** | - 3 patches/24h but 0 visible PRs (internal flow)<br>- Strong UX polish focus (skills org, --plan/autopilot)<br>- Windows regression backlog indicates scale |
| **Early / Focused** | **Kimi Code CLI**, **Qwen Code** | - Kimi: Critical safety fix (rm -rf) + UTF-8 hardening; memory system demand<br>- Qwen: Data unavailable |

**Community Health Indicators**:
- **Claude Code**: Highest single-issue engagement in ecosystem history (AGENTS.md)
- **Codex**: Strong feature voting (trust_level, MCP interop)
- **OpenCode**: Active payment/billing discourse (crypto, quota bugs) → paying user base
- **Pi/DeepSeek TUI**: Deep technical discussions on architecture (compaction, runtime ownership)

---

## 6. Trend Signals for Developers & Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **AGENTS.md is becoming the universal agent contract** | 4.5k 👍 on Claude Code; Codex, Cursor, Amp already adopting | **Adopt AGENTS.md now** for portable agent instructions; avoid vendor-specific formats |
| **Self-hosted / BYO-infrastructure is table stakes** | Claude Code runner (Team/Ent), OpenCode Modal driver, Pi local-first, DeepSeek TUI embeddable | **Evaluate tools on self-hosted capability** if data residency, air-gap, or cost control matter |
| **MCP is the de facto plugin protocol — but namespace fragmentation hurts** | Codex #26234 (41 👍), Claude archive source, Pi/Claude/Codex all investing | **Standardize on MCP**; demand namespace flattening from vendors; build internal MCP servers |
| **Session continuity = product viability** | Every tool has compaction/resume bugs as P1; users lose trust on context loss | **Test compaction/resume flows rigorously** before adopting for long tasks; monitor provider limits |
| **Windows is the quality barometer** | Every tool has Windows-specific regressions (sandbox, clipboard, paths, GPU) | **Validate Windows workflows in CI**; prefer tools with dedicated Windows engineering |
| **Subagent orchestration is the next UX frontier** | Guardian (Codex), background tasks (OpenCode), fleets (DeepSeek TUI), subagents (Gemini, Claude) | **Design workflows for delegation**; expect native "background: true" and status APIs to standardize |
| **Security hardening is continuous, not one-time** | SSRF (Gemini), YAML injection (Claude), symlink cred overwrite (Claude), zlib/Node 23 (Pi) | **Track security advisories per tool**; prefer tools with transparent disclosure and rapid patches |
| **Local-model / BYO-provider support expanding** | Pi (LM Studio, Bedrock, Cursor), OpenCode (Snowflake, Baseten), Codex (Ollama, OpenRouter), DeepSeek TUI (multi-model) | **Avoid vendor lock-in on models**; choose tools with pluggable provider layers |

---

## Summary for Technical Decision-Makers

| If Your Priority Is... | Recommended Primary Tool(s) | Watch List |
|------------------------|----------------------------|------------|
| **Enterprise readiness, compliance, cloud integration** | Claude Code, GitHub Copilot CLI | Codex (Go), Gemini CLI |
| **Local-first, data sovereignty, model flexibility** | OpenCode, Pi, DeepSeek TUI | Kimi Code, Gemini CLI (local) |
| **Cutting-edge agent orchestration & fleet UX** | Codex (Guardian), OpenCode, DeepSeek TUI | Gemini CLI, Pi |
| **Windows-native daily driver stability** | GitHub Copilot CLI (patch velocity) | Claude Code (self-hosted runner helps) |
| **Rapid iteration & community transparency** | Gemini CLI, OpenCode, Pi, DeepSeek TUI | Codex (alpha channel) |
| **Cross-tool portability & future-proofing** | **Adopt AGENTS.md + MCP** across any tool | Monitor AGENTS.md spec evolution |

**Bottom Line**: The ecosystem is **converging on architecture** (agents + MCP + durable sessions) but **diverging on deployment model** (managed cloud vs. self-hosted local). Choose based on where your organization sits on the **control ↔ convenience spectrum** — and invest in **AGENTS.md + MCP** as the portable layer regardless of tool choice.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-08 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Fixes the core evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) that incorrectly reports 0% recall for all skill descriptions, breaking the description-optimization loop. | Referenced in **Issue #556** (12 comments) and **#1169** (3 comments); affects every skill author using the creator toolchain. Windows stream reading, trigger detection, and parallel workers also fixed. | **Open** (Jun 10 – Jun 23) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic quality control for AI-generated documents: prevents orphan words, widow paragraphs, and numbering misalignment. | Addresses a universal pain point—“users rarely ask for good typography but always notice bad typography.” | **Open** (Mar 4 – Mar 13) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical file verification + four-dimension reasoning audit (correctness, completeness, consistency, safety) in damage-severity priority order. Universal across projects/stacks/models. | Proposes a **quality gate** paradigm; complements skill-quality-analyzer (#83). | **Open** (Jun 28 – Jul 2) |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Full testing stack: Testing Trophy philosophy, AAA unit patterns, React Testing Library, integration/E2E/contract/performance testing, TDD/BDD workflows. | Comprehensive reference skill; high utility for teams standardizing test practices. | **Open** (Mar 22 – Apr 21) |
| 5 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills evaluating skills across 5 dimensions (structure, behavior, maintainability, security, usability) + static security analysis (injection, secrets, permissions, supply chain). | Directly addresses **Issue #492** (43 comments, trust boundary abuse). | **Open** (Nov 6 – Jan 7) |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | Create, fill, read, convert OpenDocument Format (.odt, .ods) via pyexcel-ods3/lxml; triggers on “ODT”, “LibreOffice”, “ISO standard”. | Fills open-standard document gap alongside existing docx/pdf skills. | **Open** (Mar 1 – Apr 14) |
| 7 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces decision table (OKLCH, OKLAB, CAM16), accessibility contrast, palette generation. | Niche but deep expertise skill; no overlap with existing design skills. | **Open** (Jun 10 – Jul 21) |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (creation, update, archival, deletion) to prevent context bloat from stale plans. | Addresses **Issue #1417**; community-validated problem framing. | **Open** (Jul 25 – Jul 27) |

> **Note:** PR comment counts appear as “undefined” in the dataset; ranking weighs cross-referenced Issue activity, recency, and scope of impact.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Top Issues) | Community Signal |
|-------|----------------------|------------------|
| **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) — community skills masquerading as official `anthropic/` namespace; [#1175](https://github.com/anthropics/skills/issues/1175) — SPO permission logic in skills | **Critical**: Users demand namespace isolation, signing, or verification before granting elevated permissions. |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) — org-wide library / direct sharing links instead of manual file transfer | **High**: Teams need native distribution, versioning, and access control for internal skills. |
| **Skill-Creator Toolchain Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 💬), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323) | **High**: Windows subprocess/encoding bugs + 0% recall = broken authoring loop; multiple concurrent fix PRs. |
| **Quality Gates & Self-Audit** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬) — 3-gate pipeline (calibration → adversarial review → delivery verification); [#1367](https://github.com/anthropics/skills/pull/1367) | **Emerging**: Shift from “write skill” → “verify skill output mechanically + reasoning audit.” |
| **Document Fidelity & Interop** | [#12](https://github.com/anthropics/skills/issues/12) (4 💬, 1 👍) — docx whitespace corruption; [#538](https://github.com/anthropics/skills/pull/538) case-sensitivity; [#541](https://github.com/anthropics/skills/pull/541) w:id collision | **Steady**: Production document generation requires round-trip fidelity (Word/LibreOffice/Pandoc). |
| **MCP / Bedrock / Platform Expansion** | [#16](https://github.com/anthropics/skills/issues/16) (4 💬) — expose skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) (4 💬) — AWS Bedrock support | **Latent**: Demand for skills as portable, protocol-first capabilities beyond Claude Code. |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|--------------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval pipeline fix | Blocks *all* skill authors; 3+ related issues; multiple contributors converging on same fix. |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Trivial 8-line correction; breaks on Linux/CI; no design debate. |
| **[#541](https://github.com/anthropics/skills/pull/541)** | `docx` w:id collision fix | Prevents document corruption; root-cause identified; 1-line ID allocation change. |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows `skill-creator` compat | Two independent PRs fixing `claude.cmd` + encoding; Windows is a supported platform. |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Closes **#452** (community health 25% → target); single file, no code risk. |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Directly addresses a filed issue (#1417) with community consensus on problem framing. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need, no dependencies, well-scoped; only open question is trigger breadth. |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Direct mitigation for top security issue (#492); meta-skill fits marketplace model. |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is transforming skills from “prompt templates” into **verifiable, secure, shareable software artifacts**—with a working authoring toolchain, trust boundaries, organizational distribution, and mechanical quality gates as prerequisites for adoption at scale.**

---

# Claude Code Community Digest — 2026-08-08

---

## 1. Today's Highlights

**v2.1.224 ships self-hosted runner support** — Team and Enterprise customers can now run `claude self-hosted-runner` to turn their own machines or containers into execution environments for web, mobile, and desktop sessions. The release also adds an `archive` plugin source for installing plugins from HTTPS-hosted ZIP files without Git. Meanwhile, the community’s top-requested feature — **AGENTS.md support** (#6235, 4.5k 👍) — remains open and highly active, signaling strong demand for cross-agent interoperability.

---

## 2. Releases

### v2.1.224
- **Self-hosted environments**: `claude self-hosted-runner` registers your own infrastructure (machines, containers, VMs) as execution targets for Claude Code sessions across web, mobile, and desktop clients. Available on Team and Enterprise plans.
- **Archive plugin source**: Plugins can now be installed from a ZIP archive served over HTTPS (`archive:`), removing the Git dependency for distribution.
- **Full changelog**: [v2.1.224](https://github.com/anthropics/claude-code/releases/tag/v2.1.224)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **Support AGENTS.md** | Codex, Amp, Cursor standardizing on `AGENTS.md` as a universal agent instruction format; `CLAUDE.md` is Claude-specific and hinders cross-team collaboration. | 347 comments, **4,526 👍** — highest engagement in repo history |
| [#13354](https://github.com/anthropics/claude-code/issues/13354) | **Continue when session limit reached** | Users hit token/session limits mid-task with no way to resume; forces context loss and rework. | 73 comments, 191 👍 |
| [#14920](https://github.com/anthropics/claude-code/issues/14920) | **Disable individual plugin skills** | Plugins bundle multiple skills; users want granular control (e.g., keep `:commit` but drop `commit-push-pr`). | 14 comments, 83 👍 |
| [#72495](https://github.com/anthropics/claude-code/issues/72495) | **Prompt suggestions silently suppressed** | Rate-limit derived status `allowed_warning` triggers a strict-equality gate that hides suggestions without feedback. Reproducible, binary-level root cause identified. | 4 comments, 0 👍 (high technical severity) |
| [#81853](https://github.com/anthropics/claude-code/issues/81853) | **Fable 5: text + tool calls → text hidden** | Assistant responses containing both text and tool calls render only the tool call in-terminal; text only visible via `Ctrl+O` transcript. Regression vs Opus 4.8. | 5 comments, 3 👍 |
| [#84072](https://github.com/anthropics/claude-code/issues/84072) | **ECONNRESET on Windows during API stream** | First chunk arrives, then stream resets. Affects both CLI and VS Code extension on Windows 10/11. Blocks Windows users on streaming workloads. | 3 comments, 0 👍 |
| [#77372](https://github.com/anthropics/claude-code/issues/77372) | **Remote Control: stale envs undeletable, ghost 404s** | Registered environments accumulate; new sessions on same env return 404 with different session IDs. Breaks Remote Control reliability. | 3 comments, 1 👍 |
| [#77208](https://github.com/anthropics/claude-code/issues/77208) | **Livelock 100% CPU on KVM guests (kvm64)** | v2.1.205+ spins at 100% CPU with zero output (even `--version`) on generic CPU model. Blocks Linux desktop beta Code tab. | 3 comments, 0 👍 |
| [#82179](https://github.com/anthropics/claude-code/issues/82179) | **Bash `grep` shim: catastrophic backtracking → OOM** | Embedded `ugrep` emulation backtracks on `-o` + bounded quantifiers + alternation; 6.6 GB RSS on 20 KB file. Silent kill. | 1 comment, 0 👍 (security/stability risk) |
| [#84961](https://github.com/github.com/anthropics/claude-code/issues/84961) | **Support pasting images from clipboard** | Current workflow requires save-to-disk → path reference. Clipboard paste would accelerate debugging/UI feedback loops. | 0 comments, 0 👍 (new, high UX value) |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| [#84854](https://github.com/anthropics/claude-code/pull/84854) | **docs: fix stale hooks documentation link** | Updates `bash_command_validator_example.py` to point to `code.claude.com/docs/...` (current) instead of deprecated `docs.anthropic.com/...`. 46 other occurrences already fixed. |
| [#84747](https://github.com/anthropics/claude-code/pull/84747) | **fix(hookify): enforce rule evaluation scope & secure file read** | Fixes `load_rules()` bypassing event filter when `event=null`; ensures `Read`/`Browser` tools only trigger `all`-scoped rules. Adds path traversal guard on file reads. |
| [#84711](https://github.com/anthropics/claude-code/pull/84711) | **fix(security): YAML injection & symlink credential overwrite** | Addresses #76580. Adds defensive parsing to prevent YAML injection via plugin manifests and blocks symlink-based credential file overwrites. |

---

## 5. Feature Request Trends

1. **Cross-agent standardization** — AGENTS.md adoption (#6235) reflects ecosystem pressure for portable agent instructions; `CLAUDE.md` seen as vendor lock-in.
2. **Session continuity & limits** — Resume after limit (#13354), rename sessions (#51791), clean stale Remote Control envs (#50884, #77372).
3. **Plugin granularity** — Disable individual skills (#14920), document auto-install behavior (#84939), archive source for air-gapped/private distros (v2.1.224).
4. **Multimodal input** — Clipboard image paste (#84961), artifact tool parity across platforms (#84677).
5. **Goal/condition flexibility** — Raise `/goal` character limit or allow file refs (#84953).
6. **Authorization UX** — Show device/session info on token management page (#84949).

---

## 6. Developer Pain Points

| Area | Recurring Themes |
|------|------------------|
| **Session & context management** | Hard limits with no resume; ghost sessions; stale environments that cannot be purged; session titles immutable. |
| **Windows reliability** | ECONNRESET on streams (#84072), file-lock update failures (#76192, #84962), MSIX GPU crashes (#83028). |
| **Linux/container edge cases** | KVM `kvm64` livelock (#77208), artifact tool missing in containers (#84677), background task silent kills (#84625). |
| **Tooling & plugin ecosystem** | Undocumented auto-install (#84939), no skill-level disable (#14920), hookify security gaps (#84747, #84711), grep shim OOM (#82179). |
| **Model-specific regressions** | Fable 5 drops text when tool calls present (#81853); prompt suggestions gated by rate-limit state (#72495). |
| **Remote Control & connectors** | Connectors attach only after first user message (#83694); 404 storms on fresh sessions (#77372). |
| **Documentation drift** | ScheduleWakeup TTL mismatch (5 min vs 1 hr) (#74149), stale hooks links (#84854), undocumented installer behavior (#84939). |

---

*Generated from `anthropics/claude-code` GitHub data as of 2026-08-08. Issues/PRs filtered to last 24h updates.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-08

## Today's Highlights
Codex v0.147.0 shipped with portable Agent Plugin installation across local, personal, workspace, and remote catalogs, plus persistent conversation sections for organizing long transcripts. The v0.148.0 alpha line advanced to alpha.4, focusing on internal architecture (code-mode gRPC protocol, Guardian review sessions, MCP event subscriptions). Windows and cross-platform sandbox/Computer Use regressions dominate community reports, with multiple high-engagement issues around process leaks, `apply_patch` failures, and missing Intel macOS helpers.

---

## Releases

### **rust-v0.147.0** (Stable)
- **Agent Plugins**: Install portable plugins and search across local, personal, workspace, and remote plugin catalogs ([#36544](https://github.com/openai/codex/issues/36544), [#36409](https://github.com/openai/codex/issues/36409), [#36919](https://github.com/openai/codex/issues/36919), [#36796](https://github.com/openai/codex/issues/36796))
- **Conversation Sections**: Organize conversations into persistent, manually ordered sections with incremental transcript browsing ([#35722](https://github.com/openai/codex/issues/35722), [#36007](https://github.com/openai/codex/issues/36007), [#36380](https://github.com/openai/codex/issues/36380), [#36948](https://github.com/openai/codex/issues/36948))

### **rust-v0.148.0-alpha.1 → alpha.4** (Alpha)
Rapid iteration on internal infrastructure: code-mode gRPC protocol, Guardian review session compaction reuse, MCP event discovery/subscriptions, sandbox mode metadata, and WebSocket latency optimizations (TCP_NODELAY).

---

## Hot Issues (Top 10 by Community Impact)

| Issue | Title | Status | Comments | 👍 | Why It Matters |
|-------|-------|--------|----------|-----|----------------|
| [#8648](https://github.com/openai/codex/issues/8648) | Codex replies to earlier messages instead of latest in conversations | OPEN | 82 | 58 | **Core UX regression**: Assistant loses conversation context in multi-turn chats, affecting all Pro users on gpt-5.2-xhigh. |
| [#12491](https://github.com/openai/codex/issues/12491) | MCP child processes not reaped — 1300+ zombies, 37GB memory leak | CLOSED | 38 | 5 | **Critical resource leak** in Codex.app GUI; fixed but signals MCP lifecycle management gaps. |
| [#26234](https://github.com/openai/codex/issues/26234) | Flatten MCP namespace tools for non-OpenAI providers (Ollama, LM Studio, OpenRouter) | OPEN | 32 | 41 | **Blocker for BYO-model users**: MCP tools unusable with non-OpenAI endpoints due to proprietary namespace serialization. |
| [#35481](https://github.com/openai/codex/issues/35481) | Codex Diff shows “Oops, an error” in VS Code (Windows) | CLOSED | 26 | 54 | **High-visibility VS Code breakage** on Windows; fixed in extension 26.721.41059+. |
| [#10090](https://github.com/openai/codex/issues/10090) | `elevated_windows_sandbox` causes all commands to fail `(no output)` / `CreateProcessAsUserW failed: 5` | OPEN | 24 | 7 | **Windows sandbox fundamentally broken** for Business tier users; ACL/permission regression. |
| [#37043](https://github.com/openai/codex/issues/37043) | Windows Computer Use fails at `EnumWindows` with `0x80070003` | OPEN | 17 | 3 | **Computer Use non-functional** on Windows; survives restarts — likely helper binary packaging issue. |
| [#14599](https://github.com/openai/codex/issues/14599) | Allow `trust_level = "trusted"` for any projects | OPEN | 16 | 57 | **Top-voted enhancement**: Eliminates repetitive approval prompts; 57 👍 shows broad demand. |
| [#34499](https://github.com/openai/codex/issues/34499) | Cannot create local Work chat inside ChatGPT Project (Windows Desktop) | OPEN | 15 | 6 | **Project/Work chat segmentation broken** on Windows; limits team workflow adoption. |
| [#21839](https://github.com/openai/codex/issues/21839) | Previously-existing sessions with full access require approvals | OPEN | 15 | 1 | **Session persistence regression**: Resumed sessions lose granted permissions, forcing re-approval. |
| [#29908](https://github.com/openai/codex/issues/29908) | `apply_patch`/managed sandbox fail with Bubblewrap loopback/userns errors on Ubuntu 24.04 | OPEN | 14 | 0 | **Linux sandbox broken** on current LTS; kernel/Bubblewrap incompatibility blocks CLI users. |

---

## Key PR Progress (Top 10 by Technical Significance)

| PR | Title | Description |
|----|-------|-------------|
| [#37510](https://github.com/openai/codex/pull/37510) | Define the code-mode host gRPC protocol | New `codex.code_mode.v1` protobuf API for session/execution/tool management; generated Rust `tonic` bindings; Bazel integration. Foundation for remote code execution. |
| [#37494](https://github.com/openai/codex/pull/37494) | Add MCP event discovery and subscriptions | Exposes hosted Plugin Runtime events via `McpResourceClient::list_events`; adds cancellable `events/stream` subscriptions for lifecycle notifications. |
| [#37513](https://github.com/openai/codex/pull/37513) | Reuse parent compactions in Guardian review sessions | Guardian sessions now restart with latest encrypted compaction after parent history rewrites; reduces re-computation overhead. |
| [#37511](https://github.com/openai/codex/pull/37511) | Enforce automatic review for managed models | Adds `auto_review.required_on_models` config; forces listed models to use `on-request` approvals with `auto_review.ignore_rules`. |
| [#37504](https://github.com/openai/codex/pull/37504) | Disable Nagle's algorithm for code-mode WebSockets | Enables `TCP_NODELAY` on outbound remote-session WebSocket connections; cuts latency for small writes. |
| [#37485](https://github.com/openai/codex/pull/37485) | Keep response streams alive through connection failures | Classifies HTTP connection failures separately; retries sampling requests with exponential backoff (5–60s); shows `Reconnecting…` UI. |
| [#37498](https://github.com/openai/codex/pull/37498) | Preserve child waiters during process termination | Detaches (not aborts) child waiter on termination; prevents exited PTY children from becoming unreaped zombies. |
| [#37492](https://github.com/openai/codex/pull/37492) | Include tool namespace inventory in turn metadata | Adds opt-in `tool_namespaces_info` metadata describing each function's namespace, direct/deferred exposure, Code Mode availability. |
| [#37505](https://github.com/openai/codex/pull/37505) | Remove the codex-core-skills crate | Consolidates skill types into `codex-skills` and `codex-skills-extension`; reduces crate graph complexity. |
| [#37480](https://github.com/openai/codex/pull/37480) | Delegate remote process sandboxing to the executor | Preserves executor-native working dirs, workspace roots, permission profiles for remote `exec_command`; sends sandbox intent to remote executor. |

---

## Feature Request Trends

1. **Trust/approval granularity** — `#14599` (57 👍) requests `trust_level = "trusted"` config to skip per-project approval prompts; `#21839` shows resumed sessions incorrectly re-prompt.
2. **MCP interoperability** — `#26234` (41 👍) demands namespace flattening for Ollama/LM Studio/OpenRouter/AWS Bedrock; `#24401` (8 👍) asks for plugin MCP server secret/env config path; `#35253` flags OAuth DCR scope mis-selection.
3. **Cross-platform Computer Use parity** — `#24437`, `#26842` report missing Intel macOS x64 helper; `#37043`, `#37415`, `#37484` show Windows `EnumWindows`/`spawn EPERM` failures.
4. **Session continuity** — `#34663` (5 👍) wants resume to bootstrap latest turn, not render full history; `#25990` reports resumed threads miss new tools/legacy subagent runtime.
5. **Global voice activation** — `#34812` requests Codex Micro Mic key trigger system-wide hold-to-dictate (already exists in desktop app).

---

## Developer Pain Points

| Area | Recurring Themes | Representative Issues |
|------|------------------|----------------------|
| **Windows Sandbox/Execution** | `CreateProcessAsUserW failed: 5`, `elevated_windows_sandbox` ACL failures, `apply_patch` spawn breakdown, WindowsApps path resolution | `#10090`, `#13965`, `#14211`, `#37415` |
| **Computer Use** | Missing Intel macOS helper binary; Windows `EnumWindows` 0x80070003; `spawn EPERM`; window attachment misidentifies process owner | `#24437`, `#26842`, `#37043`, `#37415`, `#37484` |
| **MCP Integration** | Namespace tools invisible to non-OpenAI models; transport closed errors; OAuth scope misconfiguration; plugin secret management | `#26234`, `#35486`, `#35253`, `#24401` |
| **Session/Resume** | Full history re-render on resume; lost tool access in resumed threads; legacy subagent runtime persistence; project/work chat segmentation | `#34663`, `#25990`, `#34499`, `#34300` |
| **Memory/Performance** | macOS OOM at startup (Claude import parsing 1.73 GB); MCP zombie processes (37 GB leak); ambient suggestions prefetching 600 MB+ rollouts | `#36523`, `#12491`, `#35799` |
| **Model/Provider Support** | `gpt-5.6-sol` unsupported; LiteLLM streaming regression in v0.147.0; custom model connectivity | `#36082`, `#37425` |
| **VS Code Extension** | Diff view error on Windows; extension resource load failure | `#35481`, `#37458` |

---

*Digest generated from GitHub data (openai/codex) covering 2026-08-07 to 2026-08-08. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-08

## 1. Today's Highlights
The project shipped three releases in 24 hours: a nightly (v0.56.0), a preview patch (v0.55.0-preview.2), and a stable patch (v0.54.4), signaling an accelerated stabilization cycle. Security took center stage with two critical PRs addressing an SSRF vulnerability in `web-fetch` (CVSS 8.6) and upgrading the sandbox runtime from Node 20 to Node 22. Meanwhile, the Caretaker Agent automation suite advanced significantly—deployment scripts, evaluation frameworks, and Cloud Run job orchestration were all merged, pointing toward fully automated issue triage.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.56.0-nightly.20260807** | Nightly | Changelog for v0.55.0-preview.1; version bump from v0.56.0-nightly.20260806. [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260807.gd5c9a97dc) |
| **v0.55.0-preview.2** | Preview | Cherry-pick of commit `2139b12` to patch v0.55.0-preview.1. [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.2) |
| **v0.54.4** | Stable Patch | Two cherry-picks (`56f9688`, version bump to 0.54.2) addressing regressions in v0.54.0. [Release notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.4) |

> **Note**: The rapid succession of preview → nightly → stable patches suggests the team is validating fixes in staging before promoting to stable.

## 3. Hot Issues (Top 10 by Community Signal)
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in autonomous workflows. | 12 comments, 👍 2 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core “defer to subagent” path; workarounds required. | 8 comments, 👍 8 — P1, high user pain |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | 76 behavioral evals across 6 models; foundational for quality gates. | 7 comments — P1, infra investment |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file tools (EPIC)** | Could reduce turns, token noise, improve code navigation precision. | 7 comments, 👍 1 — P2, strategic R&D |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses custom skills/sub-agents** | Limits extensibility; users must explicitly invoke. | 6 comments — P2, UX gap |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Wastes compute, pollutes memory inbox. | 5 comments — P2, memory system bug |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands stuck at “Waiting input” post-completion** | Frequent hang on trivial commands; breaks flow. | 4 comments, 👍 3 — P1, core UX |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: auto session takeover & lock recovery** | Persistent profiles fail fast on lock; needs resilience. | 4 comments — P3, feature request |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux/Wayland users blocked; regression. | 4 comments, 👍 1 — P1, platform bug |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools available** | Tool explosion breaks agent; needs smarter scoping. | 3 comments — P2, scalability limit |

**Pattern**: Subagent reliability (hangs, false success, under-use) and memory system integrity dominate P1/P2 backlog.

## 4. Key PR Progress (Top 10 by Impact)
| # | PR | Type | Summary |
|---|----|------|---------|
| [#28725](https://github.com/google-gemini/gemini-cli/pull/28725) | **Security** | Fixes SSRF via DNS bypass in `web-fetch` (CVSS 8.6); validates resolved IPs against private/loopback ranges. |
| [#28726](https://github.com/google-gemini/gemini-cli/pull/28726) | **Security** | Upgrades all sandbox/Caretaker Dockerfiles to `node:22-slim` (Node 20 EOL). |
| [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | **Feature** | Adds Gemini 3.6 Flash & 3.5 Flash-Lite model configs (thinking, multimodal tool use, aliases). |
| [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) | **Bug Fix** | Resolves false “model capacity exhaustion” errors; fixes quota lookup mapping; preserves “Keep trying” UI. |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | **Bug Fix** | Loads `.env` *before* expanding settings placeholders—fixes race condition in config resolution. |
| [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) | **Bug Fix** | Fixes IDE connection failure under Cider/VS Code forks with virtual/FUSE workspace paths. |
| [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) | **Performance** | Skips diff hunk markers (`@@`) during `@file` processing—avoids recursive glob searches, prevents heap growth. |
| [#28727](https://github.com/google-gemini/gemini-cli/pull/28727) | **Infra** | Adds Cloud Run Job entrypoint, GCS sync helper, Dockerfile for Caretaker eval runner. |
| [#28530](https://github.com/google-gemini/gemini-cli/pull/28530) | **Infra** | Caretaker triage eval framework: LLM-as-judge rubric, parallel Git worktree benchmark runner. |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | **DevEx** | `npm run eval:report` aggregates pass rates by model from Vitest JSON; maps to inventory policies. |

**Theme**: Security hardening, model parity, config reliability, and evaluation automation.

## 5. Feature Request Trends (from Issues)
1. **Subagent Observability & Control** — Trajectory sharing (`#22598`), bug reports including subagent context (`#21763`), settings override compliance (`#22267`).
2. **AST-Aware Code Navigation** — Precision reads, reduced turns, codebase mapping (`#22745`, `#22746`).
3. **Memory System Hardening** — Deterministic redaction, quarantine invalid patches, stop infinite retries (`#26522`, `#26523`, `#26525`).
4. **Browser Agent Resilience** — Session takeover, lock recovery, Wayland support, settings respect (`#22232`, `#21983`, `#22267`).
5. **Evaluation Infrastructure** — Component-level evals, always-pass steering tests, local report/validate commands (`#24353`, `#23313`, `#28369`, `#28344`).
6. **Tool Scoping Intelligence** — Dynamic tool selection to avoid 128+/400-tool limits (`#24246`).

## 6. Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Subagents hang or misreport success** | `#21409` (1 hr hangs), `#22323` (false GOAL), `#22093` (unauthorized runs) | 5+ issues, P1 |
| **Shell tool “stuck awaiting input” after exit** | `#25166` (simple cmds), `#22465` (Vite interactive prompt) | 3+ issues, P1/P2 |
| **Config not respected (settings.json, symlinks, env order)** | `#22267` (browser agent), `#20079` (symlink agents), `#28597` (env load order) | 4+ issues |
| **Memory system leaks/retries** | `#26522` (infinite retry), `#26523` (silent skip), `#26525` (redaction timing) | 3 issues, P2 |
| **Platform gaps: Wayland, >128 tools, terminal resize flicker** | `#21983`, `#24246`, `#21924` | 3 issues, cross-area |
| **No visibility into subagent trajectories** | `#22598`, `#21763` | 2 issues, high dev friction |

---

**Next Watch**: v0.55.0 GA promotion, Caretaker Agent production deployment, AST-aware tooling prototype results, and Node 22 sandbox rollout validation.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-08

## 1. Today's Highlights
Three patch releases (v1.0.79-7 through -9) shipped in the last 24 hours, delivering enterprise sandbox policy controls, a new Kimi-K3 model, agent plugin extensions, and a `--plan` + `--mode autopilot` workflow. Meanwhile, the issue tracker shows active regression triage around Windows clipboard/rendering bugs, authentication keychain prompts, and MCP server lifecycle leaks.

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v1.0.79-9** | `/sandbox` config dialog now reveals where sandbox settings are stored in `settings.json`. |
| **v1.0.79-8** | Enterprise `allow-auto-only` policy support (allows `/allow-all auto` while blocking full `allow-all`); enterprise-managed sandbox policy can enforce a proxy URL with user-controlled credentials. `/sandbox` dialog groups `git`, `gh`, and other tools. |
| **v1.0.79-7** | Agent plugins can ship extensions under `com.github.copilot/extensions/`; added **kimi-k3** model; `--plan` combined with `--mode autoplot` plans first then implements without approval prompt. Multi-select prompts improved. |

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|---------------------|
| **#2494** `copilot login` auto-enters keychain prompt (regression in v1.0.16) | Breaks non-interactive/CI auth flows; keychain unavailable scenarios hang. | 11 comments, 1 👍 — active discussion on workaround. |
| **#1632** Support subfolders for skills organization | Users with 10+ skills need hierarchical organization; flat structure doesn’t scale. | 10 comments, **23 👍** — highest upvote count, clear demand. |
| **#3622** Copy to clipboard silently fails on Windows | Regression since 1.0.48; clipboard appears to succeed but paste yields old content. | 5 comments, 4 👍 — blocks Windows power users. |
| **#4311** Transcript renders blank until width change / new message | Interactive session output disappears; `/resume` doesn’t recover. | 3 comments — rendering regression affecting daily workflow. |
| **#1409** `--add-dir` converts dashes → underscores, breaks OneDrive paths | Permission loop on Windows OneDrive folders (paths contain dashes). | 2 comments, 4 👍 — long-standing Windows path normalization bug. |
| **#4345** Reasoning effort ‘medium’ unsupported for `claude-haiku-4.5` (CLOSED) | Feature-flag collision caused sub-agent crashes; fixed in recent patch. | 2 comments, 4 👍 — shows model/config matrix complexity. |
| **#4219** CLI hard-crashes on Windows when `notifications` enabled (CLOSED) | Native toast path triggers access violation; fixed in latest release. | 1 comment — critical stability fix. |
| **#4185** `--add-dir` causes Claude sub-agent 400 error (cache_control blocks >4) (CLOSED) | Every `--add-dir` flag adds a cache block; Claude limits to 4. | 1 comment — architectural constraint surfaced by multi-dir workflows. |
| **#4118** `/app` command doesn’t default to CWD (CLOSED) | UX friction: manual directory selection each time. | 1 comment, **35 👍** — strong signal for small UX win. |
| **#4402** npm `bin/copilot` is a loader, not a version pin; same path served 1.0.77 then 1.0.78 101s apart | Non-deterministic versioning breaks reproducibility; `--prefer-version` undocumented. | 0 comments (new) — supply-chain/reliability concern. |

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.* All recent changes appear to have been shipped directly via the three patch releases above.

## 5. Feature Request Trends
1. **Skill/agent organization** — Subfolders for skills (#1632), skill tool alias for custom agents (#4209), persisted default workspace type (#4396).
2. **Enterprise policy granularity** — Allow-auto-only, proxy enforcement, registry policy header merging (#4205).
3. **Model/agent workflow control** — `--plan` + autopilot, reasoning effort per model, default model persistence on resume (#4397).
4. **Session UX** — Quick delete in sessions view (#4395), banner “once” behavior (#4129), token usage reporting (#2947).
5. **Cross-platform parity** — Windows clipboard (#3622, #4391), PowerShell hook operators (#4399), OneDrive path handling (#1409).

## 6. Developer Pain Points
| Area | Recurring Themes |
|------|------------------|
| **Windows reliability** | Clipboard silent failure, screen clear on copy (codepage 936), native toast crashes, OneDrive path normalization, PowerShell hook breakage. |
| **Authentication & MCP** | Keychain prompt regression, MCP server orphan processes on auth rebuild (#4392), false-positive MCP status (#1129), browser login URL wrapping (#4400). |
| **Rendering/terminal** | Transcript blanking (#4311), model picker input obscured by statusline (#4043), banner “once” not honored (#4129). |
| **Versioning & install** | npm shim loads non-pinned versions (#4402), undocumented `--prefer-version`. |
| **Permission model** | `allowed_directories` never loaded (#4398), `--add-dir` cache_control limit (#4185), dash→underscore conversion (#1409). |
| **Notification/attention** | Desktop notification on human input needed (#2941), Ctrl+C twice-to-exit conflict with copy habit (#4394). |

---

*Data sourced from `github.com/github/copilot-cli` releases, issues, and PRs updated 2026-08-07 → 2026-08-08.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-08

---

## 1. Today's Highlights
No new releases in the last 24 hours. Community focus is on a critical safety incident where the agent executed `rm -rf` outside the workspace (#2596), and two parallel fixes addressing UTF-8 corruption in `StrReplaceFile` (#2594, #2595). The long-running Memory System feature request (#1283) received renewed discussion with 21 comments.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **#2596** Agent ran `rm -rf` on a pre-existing directory outside the workspace, deleting user session data | **Critical safety issue.** In yolo mode, the agent attempted to clean up a symlink at `~/.pi/agent/sessions` but the symlink creation had failed earlier (target was a real directory). The agent did not detect the failure and recursively deleted the actual directory, destroying user session data. Highlights missing guardrails for destructive filesystem operations outside the project root. | 0 comments (filed 2026-08-07). High severity; likely to attract urgent attention. |
| **#1283** Feature Request: Memory System — Persistent context across sessions | **High-value product feature.** Requests both automatic (AI-managed notes) and manual (user-defined instructions via config) memory to persist project patterns, conventions, and preferences across sessions. Would significantly reduce re-onboarding friction for repeat users. | 21 comments since 2026-02-27; updated 2026-08-08. Sustained interest indicates strong demand. |

*Only 2 issues updated in the last 24h; both included above.*

---

## 4. Key PR Progress

| PR | Type | Description |
|----|------|-------------|
| **#2594** `fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits` | Bug fix | `StrReplaceFile` previously decoded the entire file with `errors="replace"`, applied edits as strings, and re-encoded — corrupting any invalid UTF-8 sequences *outside* the edit range into U+FFFD (). This PR applies `old`/`new` as UTF-8 byte substrings on the raw buffer, preserving non-UTF-8 bytes elsewhere. |
| **#2595** `fix(StrReplaceFile): refuse to edit files that are not valid UTF-8` | Bug fix / Safety | Alternative approach to #2591: instead of attempting to preserve invalid bytes, this PR makes `StrReplaceFile` validate the entire file as UTF-8 upfront and refuse the edit if validation fails. Prevents silent corruption at the cost of blocking edits on binary/legacy files. Resolves #2591. |

*Only 2 PRs updated in the last 24h; both included above.*

---

## 5. Feature Request Trends
From the active issue set, the dominant requested direction is **persistent, cross-session context** (#1283). Users want:
- Automatic memory (AI-extracted project facts, patterns, decisions)
- Manual memory (user-authored instructions, style guides, conventions)
- Transparent control over what is remembered and for how long

This aligns with the broader "agent memory" trend in AI coding tools (cf. Cursor, Claude Code, GitHub Copilot workspace context).

---

## 6. Developer Pain Points
1. **Filesystem safety in autonomous modes** — #2596 demonstrates that yolo-mode agents can perform destructive operations outside the workspace when symlink/resolution logic fails. Developers need stronger sandboxing, pre-flight checks, and audit logs for `rm -rf`-class commands.
2. **Silent data corruption in file edits** — Both #2594 and #2595 stem from `StrReplaceFile` mishandling non-UTF-8 files (common in legacy codebases, build artifacts, or mixed-encoding projects). Developers lose trust when tools corrupt files outside the intended edit range.
3. **Context loss between sessions** — Without a memory system (#1283), developers repeatedly re-explain project structure, conventions, and tribal knowledge, reducing the compounding value of the tool.

---

*Data source: github.com/MoonshotAI/kimi-cli — Issues & PRs updated 2026-08-07 to 2026-08-08*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-08

## 1. Today's Highlights
- **v1.18.15 released** with critical bugfixes for message chronology, revert/fork reliability, and truncation cleanup.  
- **OpenCode Go service disruption** (#38257, 45 comments) — all `chat/completions` requests return 401 while `/v1/models` works, indicating an upstream provider block affecting Go subscribers.  
- **Web-app onboarding regressions** fixed in rapid succession (#41154, #41153, #41156, #41155) — fresh sessions now show server projects and base directories instead of “Nothing here yet” / “No folders found.”

## 2. Releases
### v1.18.15 (2026-08-08)
**Core bugfixes**
- Chronological message ordering now stays correct even with imported/legacy out-of-order IDs.
- Revert and fork actions use real message chronology instead of message-ID ordering.
- Truncation cleanup removes stale files by file timestamp more reliably.  
🔗 [Release v1.18.15](https://github.com/anomalyco/opencode/releases/tag/v1.18.15)

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#38257** | **OpenCode Go: 401 on `chat/completions`** — all Go models blocked, `/v1/models` works | **Production outage for paying subscribers**; server-side upstream block | 45 comments, 11 👍 — highest engagement in 24h |
| **#5359** | **Image reading broken since v1.0.137** (LiteLLM + Vertex AI) | Regression blocking multimodal workflows | 18 comments, open since Dec 2025 |
| **#23153** | **Pay Go with crypto** | High-demand payment alternative | 17 comments, **37 👍** — strongest feature upvote |
| **#40409** | **`deepseek-v4-flash` serves V3.2, not V4 Flash 0731** | Billing/quality mismatch on Go relay | 14 comments, now **CLOSED** |
| **#41146** | **Go plan overcharged — weekly limit exhausted at ~$7.50 of $30** | Quota accounting bug blocking paid users | 2 comments, fresh (2026-08-07) |
| **#40797** | **Anthropic via LLM Proxy fails with “anthropic” provider key** | Breaks proxy setups (Bifrost); Claude Code unaffected | 2 comments, provider-interop issue |
| **#34780** | **V2: Snowflake Cortex OAuth login missing** | Systemic V2 provider-login gap | 4 comments, part of #34765 |
| **#41106** | **Queue user messages during generation instead of cancelling** | UX break for multi-question workflows | 2 comments, **CLOSED** (fix likely in flight) |
| **#37888** | **`OPENCODE_DISABLE_INSTALL` env var to skip npm installs** | Critical for Docker/CI pipelines | 3 comments, 2 👍 |
| **#41124** | **Emergency: delete leaked session share link** | Security/privacy incident — user cannot self-revoke | 2 comments, urgent |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary | Status |
|---|----|------|---------|--------|
| **#41113** | feat(tui): render Mermaid diagrams | **Feature** | Built-in Mermaid flowchart/sequence/state rendering via private `@opencode-ai/merman` package | ✅ **CLOSED** |
| **#40923** | feat: native background subagents + auto-continue | **Feature** | `Task(background: true)`, `agents_status` tool, transient-error auto-recovery | 🟢 **OPEN** |
| **#41160** | feat(tool): add Synthetic web search backend | **Feature** | Third search backend (`synthetic`) alongside `exa`/`parallel` | 🟢 **OPEN** |
| **#41167** | feat(opencode): `web --no-open` flag | **Feature** | Start web UI without auto-launching browser | 🟢 **OPEN** |
| **#41158** | fix(app): default project picker to home | **Bugfix** | Hydrate V2 path state from `/location`; fallback to home dir | 🟢 **OPEN** |
| **#41154** | fix(app): show server projects until first bookmark | **Bugfix** | Fresh `opencode web` sessions now list server projects | 🟢 **OPEN** |
| **#41153** | fix(app): list base directory on empty project search | **Bugfix** | Empty query → list base dir instead of “No folders found” | 🟢 **OPEN** |
| **#41161** | fix(session): extract tool-result media for non-attachment models | **Bugfix** | `supportsMediaInToolResult` no longer unconditionally true for Anthropic/OpenAI SDKs | 🟢 **OPEN** |
| **#41169** | fix(lsp): match wildcard root markers (`*.cabal`) | **Bugfix** | `Filesystem.up` now probes glob markers for LSP root detection | 🟢 **OPEN** |
| **#41118** | feat(server): add Modal environment driver | **Feature** | First hosted `Environment` binding; conformance-suite validated | ✅ **CLOSED** |

## 5. Feature Request Trends (from Issues & PRs)
1. **Payment flexibility** — crypto support (#23153, 37 👍), billing transparency (#41146).  
2. **Provider/model fidelity** — correct model versions on relays (#40409, #40607), OAuth for Snowflake/Bedrock (#34780, #35787).  
3. **Headless/CI ergonomics** — `OPENCODE_DISABLE_INSTALL` (#37888), `web --no-open` (#41167).  
4. **Skill/workspace organization** — skill subfolders (#38853), worktree session labels (#41147).  
5. **Background agent orchestration** — native subagents with status API (#40923, #17595).  
6. **Web-app parity** — project discovery, settings redesign (#40845), server connect links (#41152).

## 6. Developer Pain Points (Recurring Frustrations)
- **Go subscription reliability**: 401 upstream blocks (#38257), quota miscalculation (#41146), wrong model served (#40409).  
- **Authentication churn**: Copilot re-auth every session (#40188, #41088), Snowflake OAuth missing in V2 (#34780).  
- **Multimodal regressions**: image reading broken since v1.0.137 (#5359), tool-result media dropped for some models (#41161).  
- **TUI/Web onboarding**: black screen outside repo (#40231), empty project picker (#41155, #41156), missing git branch (#41105).  
- **Proxy/interop failures**: Anthropic via LLM proxy (#40797), DeepSeek reasoning_content contract (#24334).  
- **Message-flow UX**: in-flight turn cancelled instead of queued (#41106), usage >100% blocking compaction (#41102).

---

*Data sourced from `github.com/anomalyco/opencode` — releases, issues, and PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-08

## Today's Highlights
- **v0.84.1 released** with Qwen Individual token plan support and new `pi auth` readiness checks.
- **Compaction reliability** remains the top community concern: auto-compaction fails to trigger past 100% context, and sessions sometimes stall post-compaction.
- **TUI & extension APIs** see active investment — lazy syntax loading, incremental markdown parsing, Cursor CLI bridge, and session-replacement APIs are landing.

---

## Releases
### v0.84.1
| Change | Details |
|--------|---------|
| **Qwen Token Plan Individual** | Built-in provider for Qwen Individual subscriptions. See [API Keys docs](https://github.com/earendil-works/pi/blob/v0.84.1/packages/coding-agent/docs/providers.md#api-keys). |
| **Authentication readiness checks** | New `pi auth` command to verify provider auth state before runs. |

[Release link](https://github.com/earendil-works/pi/releases/tag/v0.84.1)

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers past 100% context** — only fires when provider rejects at 373k tokens | Core reliability: long sessions OOM or hit provider limits before compaction runs. | 13 comments, 15 👍 |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | **Default PI_* guideline over-encourages `env` bash calls** | Wastes tokens/latency; agents inspect env vars unnecessarily. | 11 comments, 7 👍 |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | **Pi sometimes doesn't continue after compaction** | Breaks long-running coordinator sessions; silent stall. | 10 comments, 2 👍 |
| [#5886](https://github.com/earendil-works/pi/issues/5886) | **AgentSession settlement/continuation & assistant-tail lifecycle bugs** | Meta-issue for recurring transcript/replay bugs. | 6 comments, 4 👍 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **High CPU (50–110%) on macOS with long sessions** | Mac users hit sustained CPU spin; correlates with context length. | 4 comments, 5 👍 |
| [#7053](https://github.com/earendil-works/pi/issues/7053) | **Parallel tool batches lose completed results when one sibling stalls** | Orphaned tool calls → "No result provided"; partial progress lost. | 4 comments |
| [#7771](https://github.com/earendil-works/pi/issues/7771) | **Unable to start 0.84.1 — `zlib.createZstdDecompress` missing on Node 23** | Blocks upgrade on Node 23; regression in compression handling. | 5 comments |
| [#7702](https://github.com/earendil-works/pi/issues/7702) | **DeepSeek via opencode zen gateway: `reasoning_content` must be round-tripped** | 400 errors on multi-turn tool calls; provider compat gap. | 6 comments |
| [#7703](https://github.com/earendil-works/pi/issues/7703) | **`Agent.reset()` during active run leaves assistant-only transcript** | Transcript corruption; breaks session continuity. | 5 comments |
| [#7726](https://github.com/earendil-works/pi/issues/7726) | **Baseten provider: DeepSeek-V4-Flash maxTokens set to 1M (API limit 384K)** | Requests rejected; config mismatch in built-in model def. | 3 comments |

---

## Key PR Progress (10 Notable)

| PR | Summary | Impact |
|----|---------|--------|
| [#7784](https://github.com/earendil-works/pi/pull/7784) | **Refactor agent recovery: derive state from record queries** | Removes recovery-specific APIs; simplifies replay logic. |
| [#7801](https://github.com/earendil-works/pi/pull/7801) | **Lazy-load uncommon syntax grammars** | Reduces startup bundle; minor UI invalidation on load. |
| [#7792](https://github.com/earendil-works/pi/pull/7792) | **Bridge Cursor CLI auth via local `cursor-agent` session** | Zero-config Cursor Team model access; `pi cursor status`. |
| [#7780](https://github.com/earendil-works/pi/pull/7780) | **TUI perf: incremental markdown parse + lazy render invalidation** | Faster scroll/startup on large transcripts. |
| [#7749](https://github.com/earendil-works/pi/pull/7749) | **Fix: preserve custom tool renderers after `/reload`** | Solves #7740; renderers registered at `session_start` now survive reload. |
| [#7710](https://github.com/earendil-works/pi/pull/7710) | **Restore suspended harness operations (R3 of harness v2)** | Enables loading harness from existing session; major recovery milestone. |
| [#7762](https://github.com/earendil-works/pi/pull/7762) | **Introduce LM Studio provider** | New local-model provider (guarded by `LM_STUDIO_BASE_URL`). |
| [#7758](https://github.com/earendil-works/pi/pull/7758) | **Add exit foreground task + `ctx.version`** | Extensions can hand off to long-lived foreground server on exit. |
| [#7757](https://github.com/earendil-works/pi/pull/7757) | **Opt out of fullscreen copy-on-select** | User-configurable copy behavior; addresses #7720. |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | **Add Amazon Bedrock Mantle OpenAI Responses provider** | Enterprise AWS Bedrock support via OpenAI-compatible API. |

---

## Feature Request Trends
1. **Session continuity & recovery** — Safe session replacement API (#5952), reliable post-compaction continuation (#7020), harness restore (#7710).
2. **Provider ecosystem expansion** — LM Studio (#7762), Cursor CLI bridge (#7792), Amazon Bedrock (#6216), DeepSeek/opencode fixes (#7702, #7726).
3. **TUI polish** — Theme override CLI (`--use-theme` #7722), copy behavior toggles (#7757), half-page scroll (#7735), sticky prompt header (#7802).
4. **Extension API maturity** — Tool decoration on registered tools (#7800), session replacement API (#5952), foreground handoff (#7758).
5. **Auth & config UX** — `pi auth` readiness checks (v0.84.1), Cursor zero-config auth (#7792), Qwen Individual plan (v0.84.1).

---

## Developer Pain Points (Recurring)
| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Compaction failures** — missed triggers, post-compaction stalls, transcript corruption | Very High | #6879, #7020, #5886, #7703 |
| **High resource usage on macOS** — CPU spikes with context growth | High | #7730 |
| **Theme/color handling bugs** — auto-detect mismatches (Ghostty), tool box repaint failures | Medium | #7770, #7595 |
| **Extension API gaps** — no `execute` in `getAllTools()`, no safe session replacement | Medium | #7800, #5952 |
| **Provider config mismatches** — wrong `maxTokens`, missing `reasoning_content`, `strict:false` omitted | Medium | #7726, #7702, #7250 |
| **Node 23 compatibility** — `zlib.createZstdDecompress` missing | Emerging | #7771 |
| **Tool rendering loss after `/reload`** — especially `session_start`-registered tools | Medium | #7740, #7749 |

---

*Digest generated from github.com/badlogic/pi-mono activity (2026-08-07 → 2026-08-08).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-08

---

## 1. Today's Highlights

The v0.9.4 release train is actively clearing final CI blockers (#5282) while shipping user-facing polish: a persistent sidebar session panel with auto-resume just landed (#2934), and subagent reliability fixes continue (#5284, #425). A major architecture refactor (#3306) and dead-code cleanup (#4785) signal ongoing investment in long-term maintainability.

---

## 2. Releases

**No new releases in the last 24 hours.**  
v0.9.4 remains in pre-release; PR #5282 is resolving the last CI failures blocking publication.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) | Sidebar sessions panel with auto-resume & history browsing | ✅ CLOSED | Major UX win: persistent session list replaces `Ctrl+R` picker; enables seamless context switching across restarts. 13 comments. |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) | Large-text processing (3M+ chars) causes session hang via `agent_wait` timeout | 🟢 OPEN | Reliability blocker for long-context workloads; subagent orchestration fails at scale. 6 comments. |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | 464 `#[allow(dead_code)]` attributes hide compiler drift across 143 files | 🟢 OPEN | Technical debt ceiling: prevents dead-code detection, inflates build times, masks API rot. 5 comments. |
| [#2492](https://github.com/Hmbown/CodeWhale/issues/2492) | No cross-session memory — context lost on restart | 🟢 OPEN | Core product gap: users expect persistent memory; current workaround is manual/ineffective. 5 comments. |
| [#425](https://github.com/Hmbown/CodeWhale/issues/425) | Subagents: `resume_from` continuation chains | ✅ CLOSED | Enables durable subagent workflows; critical for long-running delegated tasks. 5 comments, 1 👍. |
| [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) | v0.9.3 Refactor: converge runtime ownership, delete duplication, ship one executable | 🟢 OPEN | Architecture umbrella: 18 crates → 1 binary; reduces 771k LOC surface, unifies runtime/tool/config paths. 4 comments. |
| [#3982](https://github.com/Hmbown/CodeWhale/issues/3982) | Subagent advisor watcher for live turn observation | ✅ CLOSED | Adds passive monitoring layer; improves safety for autonomous coding loops. 4 comments. |
| [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) | v0.9.4 release-blocker: agent spawn surface has too many knobs; labeled builder runs read-only | 🟢 OPEN | Blocks release; delegate builder misconfigured as read-only, breaking write operations. 3 comments. |
| [#790](https://github.com/Hmbown/CodeWhale/issues/790) | Improve i18n coverage for commands, modals, widgets | 🟢 OPEN | Localization debt: `zh-Hant` shipped but most TUI strings remain hardcoded EN. 3 comments. |
| [#3303](https://github.com/Hmbown/CodeWhale/issues/3303) | Make documented config keys editable & persistable from TUI | 🟢 OPEN | UX gap: config.toml keys load but can’t be discovered/edited/validated in-app. 3 comments. |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5282](https://github.com/Hmbown/CodeWhale/pull/5282) | fix(release): clear the four CI blockers holding v0.9.4 | ✅ CLOSED | Unblocks v0.9.4 publish; addresses three CI failure modes on latest head. |
| [#5284](https://github.com/Hmbown/CodeWhale/pull/5284) | fix(subagent): stop counting finished children as shared-checkout contenders | ✅ CLOSED | Fixes false "bounded file target" errors for builder subagents writing to workspace. |
| [#5283](https://github.com/Hmbown/CodeWhale/pull/5283) | docs(readme): lead with mixed fleets — any model in any role | ✅ CLOSED | Reframes README to highlight multi-model fleet capability (not just provider switching). |
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | Layer 5.3: Palette, completion, and discovery filtering | 🟢 OPEN | Completes command-boundary refactor: verifies palette/slash-completion integration criteria. |
| [#5258](https://github.com/Hmbown/CodeWhale/pull/5258) | fix(tui): stop stale cached session title from pinning "New Session" | 🟢 OPEN | Fixes session title stuck at "New Session" due to cache/snapshot timing race. |
| [#5256](https://github.com/Hmbown/CodeWhale/pull/5256) | feat(mcp): background incremental registry sync | 🟢 OPEN | MCP registry sync now cache-first + background download; eliminates blocking full downloads. |
| [#5254](https://github.com/Hmbown/CodeWhale/pull/5254) | Build fix for FreeBSD | ✅ CLOSED | Enables FreeBSD support by avoiding `rquickjs` (no bindings); uses `bindgen` feature. |
| [#5252](https://github.com/Hmbown/CodeWhale/pull/5252) | feat(subagents): allow embedders to isolate runtime state roots | ✅ CLOSED | Adds `EngineConfig::subagent_state_root` for embedding hosts needing session-owned state. |
| [#5257](https://github.com/Hmbown/CodeWhale/pull/5257) | feat(config): add `model = auto` for prompt-based tier selection | 🟢 OPEN | Auto-selects `deepseek-v4-pro` vs `flash` based on prompt complexity; reduces manual switching. |
| [#5275–#5281](https://github.com/Hmbown/CodeWhale/pulls?q=is%3Apr+author%3Adependabot%5Bbot%5D+updated%3A%3E2026-08-06) | Dependabot: 7 dependency bumps (clap, serde_json, thiserror, async-trait, jsonschema, docker/login-action, sccache-action, rust-toolchain) | 🟢 OPEN | Routine maintenance; notable: `clap 4.6.1`, `thiserror 2.0.19` (syn 3), `rust-toolchain` update. |

---

## 5. Feature Request Trends (from all Issues)

1. **Session & Memory Continuity** — Persistent sidebar (#2934), cross-session memory (#2492), subagent resume (#425), plan artifact persistence (#4390). Users want *durable, browseable context* across restarts and delegations.
2. **Subagent & Fleet Maturity** — Advisor watcher (#3982), multi-operator fleets (#5039), model capabilities in fleet setup (#5038), state isolation for embedders (#5252). Moving from "spawn-and-forget" to *observable, configurable, multi-tenant* delegation.
3. **Configuration as First-Class UX** — Editable config in TUI (#3303), `model = auto` (#5257), credential precedence cleanup (#5197), Fleet config scoping (#5039). Config should be *discoverable, validated, and persistent* in-app.
4. **Reliability at Scale** — Large-context timeout fixes (#1425), compaction survival contract (#4394), memory hardening (#3885), exec-policy security (#5161). Production workloads demand *bounded resources & guaranteed progress*.
5. **Developer Experience Polish** — i18n coverage (#790), stale state isolation (#4416), shell `!` approval bypass (#5191), MCP hot-reload (#4068), FreeBSD support (#5254). Removing *paper cuts* for daily drivers.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session/context loss on restart** | #2492 (5 comments), #2934 (13 comments), #4390 (plan artifact gap) | High — core workflow break |
| **Subagent orchestration fragility** | #1425 (timeout hang), #425 (resume needed), #5123 (spawn misconfig), #3982 (no live watch) | High — blocks autonomous coding |
| **Config opacity** | #3303 (keys not editable), #5034 (provider/model mismatch), #5195 (wrong save path), #5197 (credential precedence) | Medium — daily friction |
| **Technical debt limiting velocity** | #4785 (464 dead_code allows), #3306 (18 crates, 771k LOC), #4167 (JobManager/TaskManager split) | Medium — architectural drag |
| **Release process blockers** | #5123 (release-blocker), #5151 (test env pollution), #5282 (CI failures) | High — delays shipping |
| **Localization & accessibility gaps** | #790 (hardcoded EN strings), #5191 (shell approval modal), #5195 (misleading save message) | Medium — polish debt |

---

*Digest generated from GitHub data as of 2026-08-08. Links point to live issues/PRs on `Hmbown/CodeWhale`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*