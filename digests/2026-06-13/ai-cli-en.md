# AI CLI Tools Community Digest 2026-06-13

> Generated: 2026-06-13 00:43 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison: AI CLI Developer Tools Ecosystem

*Report generated on 2026-06-13 by OWL — ZOO*

---

## 1. Ecosystem Overview

The AI CLI tool landscape in June 2026 is in a phase of rapid, competitive iteration with eight major tools vying for developer mindshare. All platforms are converging on a common architectural stack — TUI-first interfaces, MCP (Model Context Protocol) integration, multi-model provider support, and session persistence — but each is differentiating through distinct technical approaches and ecosystem strategies. Three dominant themes emerge across the entire ecosystem: **terminal rendering and streaming stability** is the most universal quality gap, **permission and agent safety systems** remain under-engineered relative to the autonomy these tools now offer, and **session/context management** at scale is the core workflow reliability challenge. The community is also clearly signaling demand for cross-tool portability, with multiple projects referencing Claude Code parity as a benchmark.

---

## 2. Activity Comparison

| Metric | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Releases (24h)** | 3 (v2.1.174–176) | 4 (alpha.13–16) | 1 (nightly) | 1 (v1.0.62-1) | 0 | 1 (v1.17.4) | 1 (v0.79.2) | 1 (v0.18.0) |
| **Hot Issues** | 10 | 7 active + 3 closed | 10 | 10 | 3 | 10 | 10 | 10 |
| **PRs Active (24h)** | 2 | 10 | 10 (5 merged, 5 open) | 1 | 1 | 10 (5 closed/merged) | 10 (7 merged) | 10 (4 merged) |
| **Maturity Signal** | Rapid patch cycle, high doc debt | Heavy Rust rewrite in alpha | Nightly cadence, P1 triage mode | Stable releases, quiet PR pipeline | Early stage, small backlog | Feature-forward, high issue volume | Broad provider support, deep PR merges | Fast iteration, security alert |

**Takeaway:** OpenAI Codex and Pi show the deepest PR throughput (10 each), suggesting heavy internal engineering investment. OpenCode has the most diverse PR types (feature + bug fix + docs + observance). Copilot CLI has the quietest PR pipeline (only 1 PR), which corroborates community frustration over silent issue response. Kimi Code CLI has the least data — consistent with an earlier-stage project.

---

## 3. Shared Feature Directions

### 3.1 Terminal Rendering & Streaming Stability
**Tools affected:** *All eight.*
The single most universal pain point across the ecosystem. Claude Code has cross-platform TUI corruption (#66795, #68073 in three separate releases). Codex Desktop crashes after update (#27175, #27979). Copilot CLI has three independent reports of garbled streaming text in 48 hours (#3749, #3755, #3780). Pi has the highest-engagement issue (#4945, 👍30) with TUI stuck on `Working...`. OpenCode has TUI rendering ID collision bugs (#32110). This suggests the TUI layer — particularly streaming text renderers — is the ecosystem's most under-invested subsystem relative to its criticality.

### 3.2 Session & Context Management at Scale
**Tools affected:** *Claude Code, Gemini CLI, OpenAI Codex, Pi, OpenCode, Qwen Code.*
Long-session reliability is a first-class challenge everywhere. Claude Code's auto-1M-context upgrade with no fallback (#65359) and Gemini CLI's generalist subagent hangs (#21409) represent both ends of the spectrum: too much context vs. too little. OpenCode's compaction/session segmentation (#32093 `db doctor`), Qwen Code's OOM from debug streaming accumulation (#4982), and Pi's compaction-after-reload fix (#5675) all point to session lifecycle management (creation → growth → compaction → forking → recovery) needing a more robust architectural treatment.

### 3.3 Permission & Agent Safety Systems
**Tools affected:** *OpenCode, Claude Code, Qwen Code, Gemini CLI.*
OpenCode has a cascading credibility crisis: permission dialog freezes (#27436), wildcard `*` overrides deny rules (#24335), and sub-agents bypass deny permissions entirely (#32024). Qwen Code has P1 tool-call execution after cancellation (#5016). Gemini CLI has subagents running when explicitly disabled since v0.33.0 (#22093). Claude Code has false-positive safety flags triggering model downgrades (#68090). The pattern: **no tool has a fully trustworthy permission system for autonomous agent operation.**

### 3.4 MCP Adoption & OAuth Reliability
**Tools affected:** *Claude Code, OpenCode, Copilot CLI, Qwen Code.*
MCP is the universal integration mechanism but the auth and reliability layer is not production-ready. Claude Code's Google Desktop OAuth rejection (#67999), Copilot CLI's MCP stdio respawn loop (#3782), OpenCode's MCP session recovery after 404 (#32088), and Qwen Code's project `.mcp.json` approval gating (#4713, just merged) all show the ecosystem is still hardening the MCP operational surface.

### 3.5 Tool Call Deduplication & Idempotency
**Tools affected:** *Qwen Code, OpenCode, Pi.*
Repeated or phantom tool executions are a recurring safety concern. Qwen Code's duplicate identical tool calls (#5015) and Pi's doom-loop detection gaps (#12716) reflect a need for deterministic tool-call deduplication tied to request IDs, not just content matching.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Primary Target User** | Enterprise/professional developers, Anthropic ecosystem | Windows-first + cross-platform power users | Google Cloud / Vertex AI users, open-source contributors | GitHub-native teams, OSS contributors | Moonshot AI ecosystem users, Chinese developers | Plugin/open-protocol extensibility advocates | Multi-provider power users | Chinese developers, Qwen model users, cost-sensitive evaluators |
| **Core Technical Approach** | Electron/Tight Anthropic model integration; managed settings for enterprise policy | Complete Rust CLI rewrite (v0.140-alpha); exec-server architecture with Noise encryption; sandbox-first on Windows | Go/TypeScript; A2A protocol native; skills + subagent framework; auto-memory system | Tight GitHub platform integration; `gh copilot` extension model; ACP SDK | Lightweight wrapper; focuses on Kimi model ecosystem integration | Plugin-first architecture; v2 session APIs; OpenTelemtry-native; ACP client priority | Multi-provider adapter architecture; `pi-ai` SDK layer; session forking; persona system | TypeScript/Node; daemon serving; `qwen serve` headless; A2UI-over-MCP |
| **Key Structural Differentiator** | Model picker visibility, enterprise policy enforcement (`enavailableModels`), 1M context support | Windows sandbox with UAC; exec-server with encrypted transport; remote compaction | A2A protocol, subagent framework, behavioral evaluation infrastructure | `gh` CLI integration, GitHub-native search, allow-all (YOLO) mode | Tight coupling with Moonshot billing/quota model; Chinese-language community | Context-mode plugin architecture, `scout` agent deprecation, v2 session API | Provider fragmentation abstraction (Bedrock Mantle, Vertex AI, vLLM); `pi-ai` as separate consumable SDK | Daemon/web shell serving; config migration from Claude Code; declarative agent frontmatter |
| **Ecosystem Integration** | VS Code, JetBrains (FleetView), MCP servers | Codex CLI (Rust), Codex Desktop (Electron), WSL | Google Cloud, Vertex AI, Colab | GitHub.com, VS Code, GitHub Actions | Moonshot AI platform | ACP protocol clients (Fabriqa), custom providers | Any OpenAI-compatible, Anthropic-compatible, Bedrock, vLLM | VS Code extension, `qwen serve` HTTP/SSE, OpenAI-compatible APIs |
| **Monetization Model** | Subscription (Pro/Team/Max/Enterprise); 1M context gated | Pro subscription; Windows Desktop + CLI bundled | Free (nightly); GCVE pay-as-you-go; Gemini API billing | Included with GitHub Copilot subscription | Subscription with token-based billing | Open-source | Open-source | Freemium (1,000 req/day, potentially dropping to 100); Qwen API billing |

---

## 5. Community Momentum & Maturity

### Highest Community Engagement (by raw signal)
1. **OpenAI Codex** — Issue #12564 (👍111) is the single highest-upvoted feature request across all repos; Windows sandbox has generated 15+ interrelated issues, showing a large, active, and frustrated user base.
2. **GitHub Copilot CLI** — Issue #53 (👍75, 6 months, zero response) has become a symbol of trust erosion; #618 (👍99) closed without implementation. High engagement but low responsiveness creates a trust gap.
3. **Pi** — Issue #4945 (👍30, 55 comments) is the most-engaged bug in this dataset. 7 PRs merged in 24 hours signals a responsive maintainership.
4. **Qwen Code** — Issue #3203 (127 comments, quota debate) shows an actively opinionated community; 4 PRs merged in 24h shows fast iteration.
5. **OpenCode** — Highest issue diversity (permissions, config, rendering, observability); 5 PRs merged + closed in 24h indicates aggressive backlog clearing.

### Fastest Iterating (release cadence + PR velocity)
| Rank | Tool | Evidence |
|---|---|---|
| 1 | OpenAI Codex | 4 alpha releases in 24h + 10 active PRs (Rust rewrite in progress) |
| 2 | Claude Code | 3 stable patch releases in 24h (v2.1.174–176) |
| 3 | Pi | 7 merged PRs in 24h across providers, compaction, trust, headers |
| 4 | OpenCode + Qwen Code (tie) | 5 merged PRs + 1 release each in 24h |

### Most Mature (stability, documentation, enterprise readiness)
1. **Claude Code** — Despite doc debt (~20 issues from single contributor), enterprise managed settings (`enforceAvailableModels`), plan-aware model picker, and rapid patch cadence signal the most enterprise-ready posture.
2. **Gemini CLI** — Nightly release cadence with P1 triage discipline, behavioral evaluation infrastructure (76 tests), and A2A protocol work suggest strong engineering rigor but less production polish.
3. **GitHub Copilot CLI** — Highest-trust deficit due to silent issue management. YOLO mode and ACP SDK additions are forward-looking, but rendering regressions and zero-response issues (#53) undermine maturity perception.

### Emerging / Fastest Growing
- **Kimi Code CLI** — Smallest backlog but attracting community attention, especially around billing transparency and Windows compatibility. Early-stage but responsive.
- **Pi** — Broadest provider support in the ecosystem (Bedrock, Vertex AI, Anthropic, OpenAI-completions, vLLM). The `pi-ai` SDK split positions it as a potential platform layer.

---

## 6. Trend Signals

### Signal 1: The CLI is the New IDE
Every tool is converging on TUI-first or CLI-first interaction as the primary developer experience, with IDE extensions as secondary. Codex (Rust CLI rewrite), OpenCode (v2 session APIs for headless), and Qwen Code (`qwen serve` daemon) all treat the CLI/daemon as the core product. **Implication for developers:** Terminal proficiency and shell workflow integration are becoming prerequisites for AI tool adoption.

### Signal 2: MCP is Winning the Integration War — But Isn't Ready
All eight tools now support or are actively building MCP integration. However, the auth layer (OAuth edge cases, stdio respawn loops, session recovery) is the new "dependency hell." Every tool has active MCP reliability bugs. **Implication:** MCP adoption will accelerate but expect 3–6 months of hardening before enterprise-grade reliability.

### Signal 3: The Permission/Safety Gap is a Category-Wide Risk
No tool has solved the permission problem for autonomous agents. This is the ecosystem's most significant architectural gap. The tension between "the agent should just do it" and "the agent must not do unauthorized things" is unresolved everywhere. **Implication:** Developers should not run unsupervised agent workflows in production environments until tool-level permission systems mature.

### Signal 4: Cross-Tool Portability is Becoming a Requirements
Qwen Code's `/import-config` for Claude Code config migration (#4845), OpenCode's ACP protocol support, and the community-wide reference to Claude Code parity all signal that developers expect to switch between tools without reconfiguring workflows. **Implication:** Tools that lock in configs, MCP servers, and skill definitions will face migration pressure.

### Signal 5: Context Window Management is a First-Class Feature, Not an Afterthought
Compaction (OpenAI Codex, Pi, OpenCode), context mode plugins (OpenCode), output-token escalation (Qwen Code), and auto-upgrade failures (Claude Code) — every tool is grappling with the economics and engineering of context. **Implication:** Expect context-management strategies (compaction, segmentation, pruning, tiered storage) to become key differentiators over the next 6 months.

### Signal 6: Windows is the Neglected Platform
Codex has its most critical bugs on Windows (UAC sandbox, update crashes, EFS). Qwen Code has AV false positives on Windows. Copilot CLI has keyboard layout issues for German/OpenCode has inotify exhaustion on Linux. **Implication:** Windows-first development environments still face disproportionate friction with AI CLI tools. Teams standardizing on Windows should factor this into tool selection.

---

*This report was generated by OWL (ZOO) based on GitHub community data ingested on 2026-06-13. Data sources include all eight repositories analyzed above. Methodology: issues and PRs filtered to last 24 hours of activity, community signal measured by comment count, 👍 reactions, and cross-referencing across tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data Source:** [anthropics/skills](https://github.com/anthropics/skills) | **Report Date:** 2026-06-13

---

## 1. Top Skills Ranking (Most-Discussed PRs by Community Attention)

Despite the dataset showing `Comments: undefined` for all PRs (suggesting a metadata collection gap where inline review comment counts were not captured), the PRs are already sorted by comment volume. Based on community engagement signals — recency of updates, reaction counts, cross-referencing between issues and PRs, and topical prominence — the following stand out:

### 1. Fix `run_eval.py` skill-creator Recall=0% Bug (PRs #1298, #1169 cross-ref #556)
🔗 [anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298) · **Status: OPEN** · Author: MartinCajiao

This is the **single most critical infrastructure PR** in the queue. Multiple independent reproductions (10+) confirm that `run_eval.py` reports `recall=0%` for every skill description, meaning the entire description-optimization loop (`run_loop.py`, `improve_description.py`) is optimizing against noise. The root cause: when `claude -p` is invoked, skill/command triggering does not work at all, so no query ever activates the target skill. PR #1298 proposes installing the eval artifact as a real skill, fixing Windows stream reading, trigger detection, and parallel workers. Cross-referenced by both Issue #556 (12 comments 👍7) and Issue #1169 (👍1). **Until this is merged, any skill description optimization using the official tooling is unreliable.**

### 2. Add `skill-quality-analyzer` and `skill-security-analyzer` (PR #83)
🔗 [anthropics/skills#83](https://github.com/anthropics/skills/pull/83) · **Status: OPEN** · Author: eovidiu

Two self-referential meta-skills for the ecosystem: `skill-quality-analyzer` evaluates any SKILL.md across five dimensions (Structure & Documentation 20%, Behavior Clarity 25%, Token Efficiency 20%, Safety & Permissions 20%, Resource Design 15%), and `skill-security-analyzer` audits skills for prompt injection risks, permission scope, and trust boundary issues. No comments recorded but structurally significant — this establishes an internal quality gate. Has been open since November 2025 with updates as recent as January 2026.

### 3. Windows Compatibility Fixes for skill-creator Scripts (PRs #1099, #1050, #1061, #1298)
🔗 [#1099](https://github.com/anthropics/skills/pull/1099) · **Status: OPEN** · Author: joshuawowk
🔗 [#1050](https://github.com/anthropics/skills/pull/1050) · **Status: OPEN** · Author: gstreet-ops
🔗 [#1061](https://github.com/anthropics/skills/issues/1061) · **OPEN Issue**

Windows users are completely blocked from running the skill-creator tooling. Three separate PRs address overlapping subprocess/PATHEXT, encoding (cp1252), and `select on pipes` failures on Windows. PR #1050 is the cleanest (two 1-line fixes), while #1099 addresses the specific `WinError 10038` pipe read failure. The fact that **three independent contributors** filed overlapping Windows fixes in April–May 2026 confirms this is a high-priority pain point. Issue #1061 (3 comments) tracks the consolidated problem.

### 4. Add `color-expert` Skill (PR #1302)
🔗 [anthropics/skills#1302](https://github.com/anthropics/skills/pull/1302) · **Status: OPEN** · Author: meodai (updated 2026-06-12)

One of the **most recently updated** PRs, this adds a self-contained color expertise skill covering ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, and CSS named colors, plus a "what to use when" decision table for color spaces (OKLCH for scales, OKLAB for gradients, CAM16 for …). Represents the growing demand for **specialized design-domain skills**.

### 5. Add `agent-creator` Skill and Multi-Tool Evaluation Fix (PR #1140)
🔗 [anthropics/skills#1140](https://github.com/anthropics/skills/pull/1140) · **Status: OPEN** · Author: SyedaQurratAI

Addresses Issue #1120. Introduces an `agent-creator` meta-skill for task-specific agent sets, fixes `evaluation.py` to handle multiple parallel tool calls correctly, and adds Windows support for `recalc.py` using `%APPDATA%` paths. This is the first PR to introduce an explicit Agent-creation skill, signaling evolution of the Skills concept from single-purpose tools to **orchestration primitives**.

### 6. Add `testing-patterns` Skill (PR #723)
🔗 [anthropics/skills#723](https://github.com/anthropics/skills/pull/723) · **Status: OPEN** · Author: 4444J99

Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern, edge cases), React component testing (Testing Library), and what-to-test vs. what-NOT-to-test guidance. Represents one of the most requested **developer workflow skills**.

### 7. Add `CONTRIBUTING.md` (PR #509)
🔗 [anthropics/skills#509](https://github.com/anthropics/skills/pull/509) · **Status: OPEN** · Author: narenkatakam

Addresses Issue #452. The repo scores only 25% on GitHub's community health metrics. This PR adds a CONTRIBUTING.md to establish contribution guidelines — a prerequisite for scaling the ecosystem beyond a small contributor base. Seven months open without merge.

### 8. `skill-creator` Quality Concerns (Issue #202, CLOSED)
🔗 [anthropics/skills#202](https://github.com/anthropics/skills/issues/202) · **Status: OPEN → CLOSED** · 8 comments

A meta-concern about `skill-creator` itself reading like developer documentation rather than an operational skill. The verbose, educational tone undermines token efficiency, and the name violates guidelines. Closed but highlights a **structural tension**: the skill-creator skill must serve as both documentation and execution instruction.

---

## 2. Community Demand Trends (Distilled from Issues)

From the top 15 issues, five clear demand vectors emerge:

### 🔴 Enterprise & Organizational Features (2 issues, 11 combined comments)
- **Issue #228** (14 comments, 👍7): Enable org-wide skill sharing in Claude.io — the **single most-commented issue**. Users want shared skill libraries or direct sharing links instead of manual `.skill` file distribution.
- **Issue #115** (from context): SharePoint/enterprise document handling with access control logic in SKILL.md.

**Demand:** Multi-user, organizational skill provisioning is the #1 unmet enterprise need.

### 🟠 Platform & Infrastructure Bugs (4 issues, 23 combined comments)
- **Issue #556** (12 comments, 👍7): `run_eval.py` 0% trigger rate — this is effectively a **critical bug** masquerading as a discussion issue.
- **Issue #1169**: `recall=0%` on every optimization iteration.
- **Issue #1061** (3 comments): Windows compatibility failures across three dimensions.

**Demand:** The skill-creator toolchain needs Windows support and a fundamental fix to skill-triggering in evaluation mode.

### 🟡 Security & Trust (2 issues, 9 combined comments)
- **Issue #492** (7 comments): Community skills distributed under `anthropic/` namespace create trust boundary abuse — users may grant elevated permissions to skills they believe are official.
- **Issue #412** (closed): Proposed `agent-governance` skill.

**Demand:** Namespace verification, skill signing, or trust tiers are needed to prevent impersonation.

### 🟢 Feature & Workflow Expansion
- **Issue #16** (4 comments): Expose Skills as MCPs — "the protocol to create and package AI software."
- **Issue #1220** (2 comments): Multi-file preload / inline bundling for skill reference files.
- **Issue #189** (6 comments, 👍8): Duplicate content across `document-skills` and `example-skills` plugins.

**Demand:** Skills are converging with MCP infrastructure, with needs for packaging, modularity, and deduplication.

### 🔵 Cross-Platform Support
- **Issue #29** (4 comments): AWS Bedrock compatibility.
- **Issue #492** (from context): Concerns about permission scoping across platforms.

**Demand:** Skills should be portable across Claude.io, Claude Desktop, Claude Code, and Bedrock.

---

## 3. High-Potential Pending Skills (Active, Recent, Unmerged)

These PRs have activity within the last 30 days and represent skills most likely to land soon:

| # | PR | Skill | Author | Last Updated | Key Signal |
|---|----|-------|--------|-------------|------------|
| 1 | [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | meodai | 2026-06-12 | Fresh, 2 days old |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix + `run_eval.py` | MartinCajiao | 2026-06-11 | Fixes critical bug, referenced by 3+ issues |
| 3 | [#361](https://github.com/anthropics/skills/pull/361) | YAML special char detection in descriptions | Mr-Neutr0n | 2026-06-10 | Addresses silent skill failures |
| 4 | [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 panic fix for multi-byte chars | Mr-Neutr0n | 2026-06-10 | Internationalization blocker fix |
| 5 | [#1046](https://github.com/anthropics/skills/pull/1046) | `frontend-design`, `ai-experience-consultant`, `automation-workflows-builder` | ALMMECHANICAL | 2026-06-10 | Three skills in one PR, recently updated |
| 6 | [#1140](https://github.com/anthropics/skills/pull/1140) | `agent-creator` + eval.py fix | SyedaQurratAI | 2026-06-02 | Meta-skill for agent generation |
| 7 | [#190](https://github.com/anthropics/skills/pull/190) | `n8n-builder`, `n8n-debugger`, `faf-expert` | Wolfe-Jam | 2026-05-18 | 4 production-tested community skills |

**Most likely to merge next:** PR #1298 (critical infrastructure fix) and PR #1302 (new self-contained skill, recently refreshed, no dependency on upstream fixes).

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is at the intersection of toolchain reliability and enterprise readiness: users no longer just want more skills — they want a trustworthy platform to create, share, validate, and govern skills at organizational scale, and the current bottleneck is a broken evaluation loop (`run_eval.py` recall=0%), missing Windows compatibility, and the absence of org-level skill distribution (Issue #228, the most-commented issue).**

### Appendix: Key Architectural Tensions
1. **Skill-as-document vs. Skill-as-tool**: PR #83 (quality analyzer) and Issue #202 highlight that skills must simultaneously serve as human-readable documentation and machine-executable instructions — these are conflicting optimization targets.
2. **Namespace trust**: Issue #492 exposes a fundamental trust problem with the `anthropic/` prefix that needs platform-level resolution (verified publishers, signing).
3. **Skills convergence with MCPs**: Issue #16's request to "expose Skills as MCPs" suggests the community sees skills as an abstraction layer that should eventually surface as MCP tool interfaces.

---

# Claude Code Community Digest — 2026-06-13

---

## 1. Today's Highlights

Claude Code shipped three rapid-fire patch releases (v2.1.174–v2.1.176) addressing model picker visibility, session-title localization, and Bedrock credential handling. On the issues front, two clusters are generating significant community friction: **advisor tool failures on claude-fable-5 and long-context sessions** (multiple duplicates piling up) and **TUI rendering corruption** across Windows, macOS, and Linux with AMD GPUs. Meanwhile, contributor `coygeek` continues a remarkable one-person documentation audit, with roughly 20 stale-but-reopened doc issues surfacing in today's feed.

---

## 2. Releases

### v2.1.176
- **Session titles now generated in your conversation language** — new `language` setting lets you pin a specific language instead of relying on auto-detection.  
- **`footerLinksRegexes` setting** — regex-matched link badges in the footer row, configurable via user or managed settings.  
- Improved Bedrock credential handling (truncated in changelog).  
🔗 [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.176)

### v2.1.175
- **New `enforceAvailableModels` managed setting** — when enabled, the `availableModels` allowlist also constrains the Default model; a disallowed Default resolves to the first allowed model. User/project settings can no longer widen a managed allowlist. Hardening for enterprise policy enforcement.  
🔗 [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.175)

### v2.1.174
- **`wheelScrollAccelerationEnabled` setting** — opt-out of mouse-wheel scroll acceleration in fullscreen mode.  
- **Fixed `/model` picker hiding the model family that Default resolves to** — Opus now appears as its own row on Max/Team Premium/Enterprise plans, Sonnet on Pro/Team plans. Previously the resolved family was collapsed/hidden, causing confusion.  
🔗 [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.174)

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| 1 | **[#65359](https://github.com/anthropics/claude-code/issues/65359)** — "usage credits required for 1M context" when session grows long on non-1M model | Core reliability bug: Claude Code auto-upgrades to a 1M-context model mid-session, then hard-fails with no fallback. **7 comments**, duplicated by #66067. Affects Pro/Team plans during long refactors or codebase exploration. | Multiple duplicates, no official response yet. Users report workarounds failing. |
| 2 | **[#66795](https://github.com/anthropics/claude-code/issues/66795)** — TUI rendering issues: garbled text & missing output on macOS | The TUI frequently stops displaying the latest output; characters overlap. Requires window resize to recover. **4 comments, 👍1**. Rendering regressions undermine the core UX of a terminal-native tool. | Linked to #68073 (Linux AMD GPU garbling) suggesting a cross-platform rendering regression. |
| 3 | **[#67609](https://github.com/anthropics/claude-code/issues/67609)** — Advisor tool returns "unavailable" on claude-fable-5 when transcript exceeds ~100K tokens | The server-side advisor silently breaks on Fable 5 past ~100K context. **👍6** — highest upvoted issue in this batch. Impacts long-session code review and planning workflows. Has reliable repro steps. | Strong community concern; suggests a model-specific context window mismatch in the advisor tool. |
| 4 | **[#68090](https://github.com/anthropics/claude-code/issues/68090)** — Auto-downgrade from Fable to Opus triggered by false-positive safety flag on legitimate OSS repos | Legitimate open-source repositories are getting flagged, causing unexpected model downgrades mid-session. Undermines trust in model selection consistency. | Users frustrated with opaque safety-triggered model switching. |
| 5 | **[#67999](https://github.com/anthropics/claude-code/issues/67999)** — MCP HTTP OAuth: "client secret is invalid" with Google Desktop OAuth clients | The MCP OAuth handshake rejects valid Google Desktop OAuth credentials. Blocks MCP server auth for Google-integrated enterprise workflows. Has repro. | Signals tighter validation in the SDK that may be over-restrictive for certain OAuth client types. |
| 6 | **[#68073](https://github.com/anthropics/claude-code/issues/68073)** — [CLOSED] Text rendering garbled on Ubuntu with AMD GPU | Related TUI rendering bug specific to AMD GPUs on Linux. Closed (presumably fixed), suggesting the team is actively addressing the rendering pipeline. | Gives hope that #66795 (macOS) may also be resolved soon. |
| 7 | **[#67411](https://github.com/anthropics/claude-code/issues/67411)** — Single transient advisor failure permanently latches tool off for entire session | A rate-pressure or load-related failure permanently disables the advisor for the rest of the session. All distinct error causes are flattened to a generic "unavailable" message, making debugging impossible. | Compounds #67609 — the advisor tool has both a context-limit bug and a session-latching bug. |
| 8 | **[#68103](https://github.com/anthropics/claude-code/issues/68103)** — Statusline OSC 8 links with custom URI schemes (e.g. `vscode://`) not dispatched in FleetView | Custom hyperlinks in the statusline work in the interactive TUI but not in `claude agents` / FleetView. Breaks "Open in VS Code" workflows from the agent management view. | New issue (created today); likely affects IDE-integrated agent workflows. |
| 9 | **[#61599](https://github.com/anthropics/claude-code/issues/61599)** — Skills docs conflict on `name:` vs directory basename for invocation | The skills documentation gives contradictory guidance on whether the `name` frontmatter field or the directory basename controls skill invocation and argument hints. | **2 comments** — a small but persistent doc issue that confuses skill authors. |
| 10 | **[#66067](https://github.com/anthropics/claude-code/issues/66067)** — Pro plan blocked by "Usage credits required for 1M context" — workarounds don't work | Duplicate of #65359 but with detailed workaround attempts that all fail. Labeled as a regression. | The fact that users are filing duplicates and documenting failed workarounds signals high frustration. |

---

## 4. Key PR Progress

Only **2 PRs** were updated in the last 24 hours:

| PR | Description | Status |
|----|-------------|--------|
| **[#67753](https://github.com/anthropics/claude-code/pull/67753)** — `fix(ralph-wiggum): case-insensitive completion promise matching` | Fixes false negatives in the Ralph Wiggum (auto-continue) loop when Claude outputs casing that differs from the configured completion promise (e.g., `Complete` vs `COMPLETE`). Uses `tr` instead of `${var,,}` for POSIX portability. | **OPEN** — straightforward fix, likely to merge soon. |
| **[#67722](https://github.com/anthropics/claude-code/pull/67722)** — `[BUG] Claude autonomously ran background scripts calling a paid external` | Appears to be a workflow/infrastructure PR related to issue deduplication automation. Description is garbled (likely a Claude-generated PR body that went wrong). | **OPEN** — unclear scope; may be an internal tooling fix. |

> ⚠️ **Note:** The PR pipeline is unusually quiet today (only 2 updates). This may indicate the team is focused on the v2.1.174–176 release cycle or triaging the surge of advisor/TUI bugs.

---

## 5. Feature Request Trends

Distilled from all issues (including the long-tail of doc issues):

1. **Advisor tool resilience** — The community wants the advisor to gracefully handle transient failures instead of permanently latching off (#67411, #67609). Requests for per-attempt retry logic and distinct error codes.

2. **Model selection transparency & control** — Multiple threads (#68090, #65359, #66067) demand better visibility into *why* a model switch occurred and the ability to disable auto-upgrade behavior. The `enforceAvailableModels` setting in v2.1.175 is a partial response.

3. **TUI rendering stability** — Cross-platform rendering bugs (#66795, #68073) suggest the terminal rendering layer needs investment. Users want a "safe mode" or fallback renderer.

4. **Documentation completeness** — Contributor `coygeek` has filed ~20 documentation issues covering gaps in skills, MCP, permissions, sandboxing, bash tool behavior, and more. The docs are falling behind the feature velocity.

5. **MCP OAuth compatibility** — As MCP adoption grows, OAuth edge cases like Google Desktop clients (#67999) and paginated resource discovery (#61329) are becoming blockers for enterprise integrations.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Sessions dying on long context** | #65359, #66067 — the auto-1M-context upgrade with no fallback is the single most disruptive bug. Developers lose work mid-session. |
| **Advisor tool is unreliable** | #67609, #67411 — context-dependent failures + permanent latching = developers can't trust the advisor for long sessions. |
| **TUI rendering regressions** | #66795, #68073 — garbled text across macOS, Windows, and Linux (AMD) suggests a systemic rendering issue, not isolated bugs. |
| **Opaque model switching** | #68090 — false-positive safety flags triggering model downgrades erode trust. Developers want auditability. |
| **Documentation debt** | ~20 open doc issues from a single contributor indicate the docs haven't kept pace with feature releases, especially around skills, MCP, and permissions. |
| **MCP auth friction** | #67999 — OAuth incompatibilities block enterprise MCP adoption at the auth layer. |

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) · Digest generated 2026-06-13*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-13

---

## 1. Today's Highlights

Codex shipped four rapid-fire Rust CLI alpha releases (alpha.13 → alpha.16) in 24 hours, signaling heavy internal iteration. The most-discussed community pain point remains the **Windows sandbox "spawn setup refresh" regression**, which has merged into dozens of duplicate issues across both CLI and Desktop. Active PR work is concentrated on **cross-OS exec-server path handling**, **session segmentation**, and **plugin auth routing**.

---

## 2. Releases

Four new Rust CLI alpha builds landed in the last 24 hours — all tagged on the `rust-v0.140.0-alpha` line. No user-visible changelogs were attached at publish time; they appear to be internal development milestones feeding into the next stable CLI bump.

| Release | URL |
|---|---|
| rust-v0.140.0-alpha.16 | [github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.16) |
| rust-v0.140.0-alpha.15 | [github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.15) |
| rust-v0.140.0-alpha.14 | [github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.14) |
| rust-v0.140.0-alpha.13 | [github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.133.0-alpha.13) |

---

## 3. Hot Issues

### 🔴 Active / High Impact

| # | Title | Status | Why It Matters |
|---|---|---|---|
| [#12564](https://github.com/openai/codex/issues/12564) | Allow renaming task/thread titles to improve history navigation | **OPEN** (most-commented: 78, 👍111) | The single most-requested UX improvement. Users managing long Codex sessions can't reorganize history. Massive engagement signal — the oldest open issue in this batch with the highest vote count. |
| [#24391](https://github.com/openai/codex/issues/24391) | Windows sandbox: spawn setup refresh fails on CLI 0.133.0 | **OPEN**, 46 comments, 👍26 | Confirmed regression from CLI 0.133.0; breaks shell command execution for all non-admin Windows users. Root cause: `codex-windows-sandbox-setup.exe` triggers UAC installer detection (OS error 740). |
| [#27175](https://github.com/openai/codex/issues/27175) | Codex Desktop Windows 26.602 crashes after update even with empty sessions | **OPEN**, 15 comments | Post-update hard crash on Windows 11 x64. Users on latest build (Jun 8 release) can't launch the app at all — escalates a sandbox startup issue into a total breakage scenario. |
| [#27979](https://github.com/openai/codex/issues/27979) | Windows Codex App 26.609.4994 no longer opens after update | **OPEN**, 6 comments (created Jun 12–13) | Newest variant of the above — the June 12 update locks out Pro subscribers entirely. No About dialog, no recovery without rollback. |
| [#25243](https://github.com/openai/codex/issues/25243) | macOS Codex relaunch loop exhausts syspolicyd file descriptors | **OPEN**, 20 comments | macOS-specific: a tight relaunch loop overwhelms the system security daemon, blocking **all** app launches on the machine until reboot. Severe priority. |
| [#25220](https://github.com/openai/codex/issues/25220) | Windows bundled plugins unavailable — copyfile fails on EFS-encrypted files | **OPEN**, 16 comments | EFS-encrypted WindowsApps installation breaks Computer Use, Browser, Chrome, and LaTeX plugins. Affects Microsoft Store installs in enterprise-managed environments. |
| [#22335](https://github.com/openai/codex/issues/22335) | CLI remote compaction repeatedly fails, leaves threads without task continuity | **OPEN**, 6 comments, 👍8 | Silent data-loss risk: compaction failures corrupt session history, and resumed threads lose their task context. Critical for long-running CLI workflows. |

### 🟡 Recently Closed (notable volume)

| # | Title | Context |
|---|---|---|
| [#24050](https://github.com/openai/codex/issues/24050) | Windows sandbox UAC installer detection (error 740) | **Closed**, 8 comments, 👍13. Canonical root-cause issue for the Windows sandbox cluster. Closed (likely fixed), but downstream duplicates (#24391, #25362, #26158, etc.) remain open. |
| [#26158](https://github.com/openai/codex/issues/26158) | Sandbox regression in CLI 0.138.0; 0.132.0 works | **Closed**, 👍5. Locked with workaround: rollback to 0.132.0. |
| [#25362](https://github.com/openai/codex/issues/25362) | Windows sandbox failed spawn setup refresh OS error 740 | **Closed**, 👍5. Another duplicate in the same cluster. |

---

## 4. Key PR Progress

| # | Title | Author | What's Changing |
|---|---|---|---|
| [#27986](https://github.com/openai/codex/pull/27986) | Preserve realtime handoff append semantics | jiayuhuang-openai | Restores raw V1 handoff semantics required by voice eval and third-party clients. Stacked on #27917. |
| [#27991](https://github.com/openai/codex/pull/27991) | Protocol: keep selected environment cwd as `PathUri` | anp-oai | Decouples executor cwd from the host cwd so Linux threads can retain Windows-native paths — foundational for cross-OS exec-server support. |
| [#27989](https://github.com/openai/codex/pull/27989) | `path-uri`: parse and resolve paths by explicit convention | anp-oai | Adds native path string deserialization and convention-aware resolution for POSIX, Windows drive, root-relative Windows, and UNC paths. Runs parallel with #27991. |
| [#27819](https://github.com/openai/codex/pull/27819) | `path-uri`: render native paths across platforms | anp-oai | Introduces `PathConvention` type so callers can correctly render OS-native path strings at app-server API boundaries. |
| [#27988](https://github.com/openai/codex/pull/27988) | Limit app-based plugin suggestions to remote catalogs | xl-openai | Narrows local plugin discovery to only fallback + explicitly configured plugins; uses cached catalog metadata for remote-overlap recommendations. Removes WSL-specific discovery exception. |
| [#27249](https://github.com/openai/codex/pull/27249) | Add feature-gated session segmentation | friel-openai | Behind an experimental flag: enables per-thread immutable snapshots for compaction and forks, plus predecessor-segment reads in thread listing and transcript APIs. |
| [#27961](https://github.com/openai/codex/pull/27961) | Enforce managed remote control disable | apanasenko-oai | Adds a hard deny gate for remote control in managed deployments, closing a gap where persisted enablement could still start the transport. |
| [#26245](https://github.com/openai/codex/pull/26245) | Exec-server: default remote transport to Noise | viyatb-oai | Generates a persistent Noise keypair on exec-server startup; all orchestrator-to-executor channels now default to encrypted handshake before JSON-RPC. |
| [#27652](https://github.com/openai/codex/pull/27652) | Add auth mode to plugin manager constructor | felixxia-oai | `PluginManager` now understands the current auth route (App connector vs. API key / MCP), filtering visible plugin surfaces accordingly. Foundation for per-auth-surface UX. |
| [#27459](https://github.com/openai/codex/pull/27459) | Gate plugin MCP servers by auth route | felixxia-oai | Prerequisite for #27652. Moves auth-aware projection into `core-plugins::PluginsManager` so the UI and CLI compute the same effective plugin set. Stacked-upon approach; subsequent PRs will tighten conflict rules. |

---

## 5. Feature Request Trends

Based on open issues and community engagement signals:

1. **Session/Thread History Management** — By far the strongest vote signal. Users want renamable, searchable, and organizable task/thread titles ([#12564](https://github.com/openai/codex/issues/12564), 111 upvotes). Session persistence across compaction events is closely related ([#22335](https://github.com/openai/codex/issues/22335)).

2. **Undo Decoupled from Git** — Multiple users requested an IDE undo buffer that works even outside a Git repository ([#19205](https://github.com/openai/codex/issues/19205), 👍6). This points to a broader ask: explicit preview/execution separation in "ask" mode.

3. **Cross-OS and Sandbox Reliability** — The sheer volume of Windows sandbox issues reflects a community that relies on local execution with elevated tool privileges. Mac and Linux users have fewer blocking bugs but want the same sandbox guarantees.

4. **Plugin/Extension Discovery** — Issues around plugin availability points to demand for better offline-first behavior and more transparent plugin configuration (rather than silent overwrites on restart).

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|---|---|---|
| **Windows sandbox "spawn setup refresh" regression** | 15+ interrelated issues (#24050, #24391, #25362, #26158, #24963, #25488, #25222, #26477, etc.) across CLI 0.133–0.138 and Desktop versions | 🔴 **Critical** — blocks CLI tool execution, Computer Use, and Browser automation for Windows users. Root cause identified (UAC error 740 on sandbox setup binary) but fix not yet propagated broadly. |
| **Codex Desktop update breakages on Windows** | #27175, #27979 — app won't open post-update, especially Pro subscribers | 🔴 **Critical** — prevents any usage until rollback. |
| **macOS syspolicyd file descriptor exhaustion** | #25243 — relaunch loop can brick app launches system-wide | 🟠 **High** — rare but catastrophic when triggered. |
| **Plugin config overwritten silently** | #25090 — node_repl and browser plugin settings reset after every restart | 🟠 **Medium-High** — forces users to re-configure on each session. |
| **Silent compaction failures in CLI** | #22335 — remote compaction drops task context without warning | 🟠 **Medium** — data loss risk in long-running workflows. |
| **Bundled plugins unavailable on EFS-encrypted Windows** | #25220 — affects enterprise/Store installs where EFS is enforced | 🟡 **Medium** — plugin marketplace shows all plugins as unavailable. |
| **Background tool execution hangs** | #14303 — Codex waits indefinitely on scripts that appear finished | 🟡 **Medium** — affects automation reliability across all platforms. |
| **Inability to locate CLI binaries on Windows** | #16408 — optional dependencies not bundled correctly | 🟢 **Low** — affects older versions, likely fixed in current alphas. |

---

*This digest was auto-generated from GitHub data as of 2026-06-13. For the latest, visit [github.com/openai/codex](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-13

---

## 1. Today's Highlights

A new nightly release (**v0.48.0-nightly.20260613**) shipped, headlined by an atomic MCP tool discovery fix and Vertex AI model mapping corrections. The issue tracker remains heavily agent-centric, with multiple P1 bugs around subagent hangs, shell execution stalls, and memory system reliability drawing sustained maintainer attention. On the PR front, contributors landed fixes for token overflow hangs, oversized bug-report URLs, and a critical `shell-quote` CVE, while several high-priority stabilization PRs remain open for review.

---

## 2. Releases

**v0.48.0-nightly.20260613.g9e5599c32** ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.48.0-nightly.20260613.g9e5599c32))
- **fix(core):** Atomic update in MCP tool discovery — prevents race conditions during dynamic tool registration by @luisfelipe-alt ([#27619](https://github.com/google-gemini/gemini-cli/pull/27619))
- **Vertex AI model mapping fix** — resolves model identifier resolution for Vertex-backed agents by @DavidAPierce ([#27749](https://github.com/google-gemini/gemini-cli/pull/27749))
- **Docs & migration command** — new documentation and a migration command for upcoming configuration changes

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| 🆕 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — **Generalist agent hangs** | The most-commented P1: the CLI hangs indefinitely when delegating to the generalist subagent, blocking even trivial operations. Users found a manual workaround (instructing the model not to use subagents) but this defeats the purpose of agent delegation. | 👍 8 · 7 comments |
| 🆕 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — **Subagent reports GOAL success after MAX_TURN limit** | The `codebase_investigator` silently reports success after being cut off by the turn limit, hiding interruptions and misleading users that productive work was done. | 👍 2 · 6 comments |
| 🔄 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — **Shell command "Waiting input" hang** | After executing simple, non-interactive shell commands, the CLI hangs showing "Awaiting user input" even though the process has exited. Reproducible and disruptive to automated workflows. | 👍 3 · 4 comments |
| 🔄 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — **Auto Memory leaks secrets into model context** | Auto Memory reads local transcripts and sends content to the background extraction agent *before* redaction occurs. Secrets are exposed in model context even though the prompt instructs the model to redact them afterward. | · 5 comments |
| 🔄 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — **Auto Memory retries low-signal sessions indefinitely** | Low-signal sessions remain unprocessed because the extraction agent skips them without marking them done, causing them to be retried on every subsequent run. | · 5 comments |
| 🔄 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — **Gemini ignores custom skills and sub-agents** | Users report the agent almost never autonomously invokes user-defined skills or subagents, even when the task clearly matches the skill description. Reduces the extensibility value of the skills system. | · 6 comments |
| 🔄 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — **Robust component-level evaluations (EPIC)** | Tracks the follow-up to behavioral evals infrastructure. With 76 behavioral tests already generated, this EPIC aims to make evaluations more reliable, measurable, and actionable as a quality gate. | · 7 comments |
| 🔄 | [#20303](https://github.com/google-gemini/gemini-cli/issues/20303) — **Remote Agents Sprint 2: Advanced Auth & Background Ops** | Implements task-level auth, first-party agent support, and background processing — critical for enterprise adoption of remote agent execution. | · 2 comments |
| 🔄 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — **400 error with >128 tools** | The agent receives a 400 error when too many tools are available simultaneously. The expectation is that the agent should intelligently scope tools rather than sending everything to the model. | · 3 comments |
| 🔄 | [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — **Subagents run without permission since v0.33.0** | Subagents are being invoked even when agent mode is explicitly disabled in all configurations, representing a regression in permission enforcement. | · 2 comments |

---

## 4. Key PR Progress

### Recently Merged (Closed)

| # | PR | Description |
|---|----|-------------|
| ✅ | [#27873](https://github.com/google-gemini/gemini-cli/pull/27873) | **SKILL.md frontmatter robustness** — adds BOM handling, trailing whitespace tolerance, and YAML value normalization to prevent skill load failures |
| ✅ | [#27872](https://github.com/google-gemini/gemini-cli/pull/27872) | **Strip line/range suffixes from at-command paths** — fixes hangs when users `@` reference files with line numbers (e.g., `file.ts:12`) |
| ✅ | [#27871](https://github.com/google-gemini/gemini-cli/pull/27871) | **Preserve refresh tokens when caching credentials** — avoids re-authentication loops for Google account users |
| ✅ | [#27866](https://github.com/google-gemini/gemini-cli/pull/27866) | **Honor custom border colors in themes** — fixes theme rendering where `border.default` / `border.focused` were silently ignored |
| ✅ | [#27869](https://github.com/google-gemini/gemini-cli/pull/27869) | **Migrate a2a-server tests to `vi.stubEnv()`** — aligns test patterns with repo conventions, reducing `process.env` pollution |
| ✅ | [#27467](https://github.com/google-gemini/gemini-cli/pull/27467) | **Fix multi-line escaped quotes in `stripShellWrapper`** — resolves long-standing parsing failures for wrapped commands with newlines |
| ✅ | [#27698](https://github.com/google-gemini/gemini-cli/pull/27698) | **Fail fast on zero-quota limits** — prevents infinite 10-attempt retry loops for unbilled/free-tier accounts |
| ✅ | [#27591](https://github.com/google-gemini/gemini-cli/pull/27591) | **Fall back for oversized bug report URLs** — fixes `/bug` crash on Android/Termux when issue descriptions exceed URL limits |

### Open — Needs Review / Attention

| # | PR | Description |
|---|----|-------------|
| 🔲 | [#27870](https://github.com/google-gemini/gemini-cli/pull/27870) | **Cap pending tool responses** (P1) — prevents a single oversized tool result from blowing token estimation and hanging `Turn.run()`. Supersedes auto-closed #27868. ⚠️ **help wanted** |
| 🔲 | [#27867](https://github.com/google-gemini/gemini-cli/pull/27867) | **Prevent A2A server crash on tasks metadata 501** (P1) — graceful handling when metadata endpoint returns unimplemented. ⚠️ **help wanted** |
| 🔲 | [#27854](https://github.com/google-gemini/gemini-cli/pull/27854) | **Fix pending tools and trust overrides** — prevents premature state progression during tool approval waits, serializes file writes to eliminate race conditions |
| 🔲 | [#27848](https://github.com/google-gemini/gemini-cli/pull/27848) | **`gemini models` command** (P3, Feature) — new CLI command to list available Gemini models with context window limits and tier info; supports text and JSON output |
| 🔲 | [#27856](https://github.com/google-gemini/gemini-cli/pull/27856) | **Upgrade `shell-quote` to 1.8.4 for CVE-2026-9277** (CRITICAL) — vulnerability fix for a command injection vector |

---

## 5. Feature Request Trends

**1. AST-aware codebase navigation (multi-issue EPIC)**
Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) collectively track investigation into AST-aware file reads, search, and codebase mapping. The thesis is that syntax-aware tools can reduce token usage, eliminate misaligned reads, and give agents better structural understanding of codebases.

**2. Operational visibility and self-awareness**
Issue [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests that the CLI agent be able to accurately describe its own CLI flags, hotkeys, and execution semantics — essentially making the agent an "expert guide" to itself.

**3. Model discoverability**
PR [#27848](https://github.com/google-gemini/gemini-cli/pull/27848) adds a native `gemini models` command, addressing recurring user requests to inspect available models, context windows, and tiers without leaving the terminal.

**4. Agent resiliency and session recovery**
Issues [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) and [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) push for browser agent lock recovery and settings override compliance — signals that users want agents that self-heal rather than fail-fast.

**5. Remote and background agent execution**
EPIC [#20303](https://github.com/google-gemini/gemini-cli/issues/20303) continues work on task-level auth, 1P agent support, and background processing for remote agents — a clear enterprise-oriented direction.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|-----------|---------|
| **Agent / subagent hangs** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — the most-reported category. Generalist agent delegation and shell command execution both suffer from indefinite hangs, making automated/unsupervised workflows unreliable. |
| **Silent failures masking as successes** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) — agents report `GOAL` success after hitting turn limits, and Auto Memory silently skips invalid patches. Users lose trust in agent output. |
| **Memory system security and correctness** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26525) — three issues filed by the same maintainer in one batch show Auto Memory has systemic issues: pre-redaction secret exposure, infinite retries on low-signal sessions, and silent invalid patch handling. |
| **Skills/subagents not invoked autonomously** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — custom skills with clear descriptions are ignored unless explicitly requested, undermining the extensibility model. |
| **Permission regression with subagents** | [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — subagents run despite being disabled in all configs since v0.33.0, suggesting a regression in agent mode enforcement. |
| **Tool explosion causing API errors** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — sending all available tools (>128) to the model causes 400 errors. Users expect intelligent tool scoping. |
| **Terminal/UI glitches** | [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) (flicker-free resize), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) (editor corruption in terminalBuffer mode) — polish issues that affect daily UX. |

---

*Generated by OWL · Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 2026-06-13*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-13

---

## 1. Today's Highlights

Copopilot CLI shipped **v1.0.62-1** with notable additions including a YOLO (allow-all) indicator, session-scoped extensions/canvases, and server-side GitHub search from the Issues/PRs tabs. The issue tracker remains highly active, with **#53** (broken `gh copilot` shortcut) continuing to dominate community sentiment at 75+ reactions and 37 comments after six months of silence from GitHub. A wave of new **terminal rendering bugs** landed today — three separate reports of duplicated/garbled streaming text surfaced within the last 48 hours, suggesting a regression in the streaming renderer. An MCP respawn loop bug in **v1.0.61** is also drawing attention.

---

## 2. Releases

**v1.0.62-1** ([github/copilot-cli/releases](https://github.com/github/copilot-cli/releases))

- **YOLO indicator** — A visual "allow-all" badge now appears in the footer, and the state is exposed to `customStatusLine.command` for status-line integrations.
- **Server-side GitHub search** — Press `/` on the Issues or Pull Requests tab to search GitHub with server-side filtering rather than local-only matching.
- **Session-scoped extensions and canvases** — Extensions and canvases can now be scoped to individual sessions (AI Client Platform SDK support).
- **Configurable session memory** — SDK clients can now configure session memory thresholds/triggers.

---

## 3. Hot Issues

### 🔴 Breaking / High Sentiment

**[#53 — Bring back the GitHub Copilot in the CLI commands to not break workflows](https://github.com/github/copilot-cli/issues/53)**
37 comments | 👍 75 | Open since Sep 2025
GitHub removed the `gh copilot` shortcut, breaking countless scripts and muscle-memory workflows. After six months of zero official response, the community has forked off alternatives like [`shell-ai`](https://github.com/Deltik/shell-ai). This is the single most-reacted issue in the repo and a symbol of eroded trust.

**[#618 — Support custom slash commands from `.github/prompts` directory](https://github.com/github/copilot-cli/issues/618)**
31 comments | 👍 99 | Closed
The most upvoted open-then-closed feature request requesting parity with VS Code Copilot's `.github/prompts/` directory for custom slash commands — the same capability Claude Code users already enjoy. Closed without implementation, leaving CLI users without a portable custom-command workflow.

**[#1481 — SHIFT+ENTER should spawn a line break, not execute the prompt](https://github.com/github/copilot-cli/issues/1481)**
26 comments | 👍 15 | Closed
A UX paper-cut that affects every user: `Shift+Enter` is the universal newline shortcut in chat apps, but Copilot CLI uses `Ctrl+Enter` for newlines and `Shift+Enter` executes. Closed, but the frustration is widespread and ongoing.

### 🟡 Active Bugs

**[#3749 — Terminal streaming renderer corrupts output (doubled/truncated characters)](https://github.com/github/copilot-cli/issues/3749)**
5 comments | 👍 7 | Open (Jun 10)
The streaming renderer produces doubled characters, truncated tokens, and repeated lines during both reasoning and response phases. This is the highest-priority rendering bug and appears related to the v1.0.6x series.

**[#3755 — Reasoning/thinking display garbles streamed text with duplicated overlapping chunks](https://github.com/github/copilot-cli/issues/3755)**
5 comments | 👍 2 | Open (Jun 10)
When `showReasoning: true` is enabled, the live thinking stream emits overlapping fragments (e.g., "from" → "fromply from"). Likely shares a root cause with #3749.

**[#3782 — MCP stdio server respawned in unbounded tight loop (no backoff/max-retry) in 1.0.61](https://github.com/github/copilot-cli/issues/3782)**
0 comments | 👍 0 | Open (Jun 12)
A serious regression: a failing stdio MCP server spawns hundreds to thousands of child processes without backoff or retry caps. Can freeze or crash the terminal. Newly reported today.

**[#3781 — Session enters unrecoverable 400 error when pasting image with non-multimodal model](https://github.com/github/copilot-cli/issues/3781)**
0 comments | 👍 0 | Open (Jun 12)
Once an image is attached to a session using a non-multimodal model, every subsequent prompt fails with HTTP 400. The only fix is manually editing `events.jsonl`. A hard-blocking bug for anyone who accidentally pastes an image.

**[#1999 — Cannot enter `@` on German keyboard (Alt-Gr + Q)](https://github.com/github/copilot-cli/issues/1999)**
9 comments | 👍 1 | Open (Mar 12)
The `@` character is essential for mentioning files, people, and context. German (and other non-US) keyboard layouts using AltGr combinations are broken, making the CLI effectively unusable for a significant user base.

**[#2306 — "Not authorized" enterprise policy error appears intermittently](https://github.com/github/copilot-cli/issues/2306)**
6 comments | 👍 3 | Open (Mar 26)
Users with valid enterprise/org Copilot licenses randomly get "not authorized" errors 2–3 times per week. The error resolves itself, suggesting a token refresh or policy-sync race condition on GitHub's side.

**[#2627 — Configurable system prompt to slim down fixed token overhead](https://github.com/github/copilot-cli/issues/2627)**
2 comments | 👍 17 | Open (Apr 10)
The system prompt consumes ~20,500 tokens at session start (~10% of a 200K context window). Users want the ability to trim or customize this, especially for cost-sensitive or context-heavy workflows.

---

## 4. Key PR Progress

Only **1 PR** was updated in the last 24 hours:

**[#3771 — Initial project setup](https://github.com/github/copilot-cli/pull/3771)**
Author: limenpchuolto112-creator | Open (Jun 11)
A minimal PR with no description or meaningful changes — appears to be a test or placeholder submission. No significant feature or fix progress to report this cycle.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|---|---|---|
| **Custom slash commands / prompts** | [#618](https://github.com/github/copilot-cli/issues/618) | 👍 99 — strongest single feature ask |
| **Configurable system prompt / token control** | [#2627](https://github.com/github/copilot-cli/issues/2627) | 👍 17 — growing cost-awareness |
| **ACP / custom provider support** | [#3048](https://github.com/github/copilot-cli/issues/3048) | Closed, but demand for OpenRouter etc. persists |
| **Session management UX** | [#3779](https://github.com/github/copilot-cli/issues/3779), [#3364](https://github.com/github/copilot-cli/issues/3364) | Keyboard shortcuts for session switching; cross-session goals |
| **OpenTelemetry cost metrics** | [#3778](https://github.com/github/copilot-cli/issues/3778) | Parity with Claude Code's billing telemetry |
| **MCP server management** | [#3564](https://github.com/github/copilot-cli/issues/3564) | Enable/disable MCP servers from the TUI |
| **Plugin auto-update** | [#3331](https://github.com/github/copilot-cli/issues/3331) | Marketplace-driven plugin freshness |
| **Long-running goals / persistence** | [#3364](https://github.com/github/copilot-cli/issues/3364) | `.copilot/goals.md` for cross-session state |

---

## 6. Developer Pain Points

1. **Terminal rendering regressions** — Three independent reports (#3749, #3755, #3780) of garbled/duplicated streaming output in the past 48 hours point to a systemic issue in the v1.0.x renderer. This is the most urgent quality concern.

2. **Keyboard layout support** — German (#1999), Polish (#2920), and other non-US keyboard layouts remain broken for essential characters (`@`, `#`, national characters). This is a basic accessibility gap.

3. **MCP stability** — The stdio respawn loop (#3782) in v1.0.61 is a critical regression. Combined with enterprise policy issues blocking third-party MCP (#3756), MCP ergonomics are a growing frustration area.

4. **Silence on high-impact issues** — Issue #53 (75 reactions, 6 months, zero response) has become a trust deficit marker. Developers are shipping their own alternatives rather than waiting.

5. **Context window pressure** — With ~29,000 tokens consumed by system prompt + tool definitions before any user input, developers working near context limits want configurability (#2627).

6. **Session recovery** — Image-in-session bricking (#3781) and compaction hangs (#1614) leave users in unrecoverable states with no graceful error handling or escape hatch.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli) | Digest generated 2026-06-13*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Based on the GitHub data provided for `MoonshotAI/kimi-cli` as of 2026-06-13, here is the structured digest:

---

# Kimi Code CLI Community Digest (2026-06-13)

## 1. Today's Highlights
The community remains highly active, with three issues receiving attention in the last 24 hours. Developers are reporting significant stability concerns, including an infinite loop bug (Issue #640) and a frustrating calculation discrepancy in the subscription usage math (Issue #1994).

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
While only three items were updated today, they represent critical pain points for the user base:
*   **#640 [Bug] Kimi CLI stuck in reading one file again and again:** A user reports a loop where the CLI gets stuck on a specific file. With 8 comments and a 👍, this is a high-priority stability issue for development workflows.
*   **#1994 kimiCode用量计算有问题 (Usage calculation problem):** This issue has the highest engagement (**7 👍**). Users are frustrated that 2-hour subscription allowances are being drained by just 2 prompts due to long inference chains, contradicting the marketed "API request-based" billing.
*   **#2435 [Bug] Daimon control WS not ready:** A recent bug affecting the Web UI Work tab, causing infinite loads. Likely related to WebSocket initialization failures on Windows environments.

## 4. Key PR Progress
*   **#1597 [OPEN] fix: guard trafilatura import to prevent cascading tool load failure on Python 3.13:**
    This PR addresses a critical compatibility issue where a `charset-normalizer` dependency crashes on Python 3.13, taking down the entire tool-loading process.

## 5. Feature Request Trends
Current trends don't point to new feature requests in the last 24 hours, but rather a demand for **Optimized Token Accounting**. Users expect the tool to handle long-context reasoning chains more efficiently or align billing with API calls rather than individual tokens.

## 6. Developer Pain Points
*   **Resource Consumption Mismatch:** Developers find the token-based billing (Issue #1994) prohibitive for complex tasks.
*   **Platform Compatibility:** Persistent issues with specific Linux distros (Issue #640) and Windows WS protocols (Issue #2435) suggest a need for broader environment testing.
*Prioritization required to resolve the infinite loop blocking developer workflows.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-13

---

## 1. Today's Highlights

OpenCode shipped **v1.17.4** with workspace-relative MCP server support, connector-based credential flows, and new v2 session API endpoints — a meaningful step toward production-grade server management. On the issue tracker, **permission system reliability** continues to dominate community frustration, with multiple overlapping bugs around wildcard rules, sub-agent bypass, and interactive prompt lockups. Meanwhile, the PR pipeline is heavily automated today: a wave of cleanup PRs closed long-standing TUI, shell auditing, permission, and config-override bugs, suggesting a coordinated push to resolve backlog.

---

## 2. Releases

### v1.17.4
- **`cwd` for local MCP servers**: MCP servers can now launch from a workspace-relative directory instead of being locked to the repository root. Useful for monorepo setups. ([@Grantmartin2002](https://github.com/anomalyco/opencode/commit/…))
- **Connector-based authentication + stored provider credentials**: A more modular auth architecture that externalizes credential management from hardcoded flows.
- **v2 session API endpoints**: New endpoints to create/fetch sessions and list sessions — laying groundwork for headless and remote orchestration patterns.

URL: <https://github.com/anomalyco/opencode/releases>

---

## 3. Hot Issues

| # | Item | Why It Matters |
|---|------|----------------|
| **[#27436](https://github.com/anomalyco/opencode/issues/27436)** | **Permission dialog stuck — can't select or dismiss** | Core interactive prompt is completely frozen for some users. 👍:11, Comments:16 — the most active issue today. Breaks every session that requires a permission decision. |
| **[#17505](https://github.com/anomalyco/opencode/issues/17505)** | **`session/update` notifications arrive after `end_turn`** | Downstream ACP clients (e.g., Fabriqa) finalize turns with incomplete content. 👍:8 — a protocol-level ordering bug affecting integrations. |
| **[#31996](https://github.com/anomalyco/opencode/issues/31996)** | **Invalid JSON schema: regex lookaround not supported (GPT 5.5)** | OpenCode sends a `fileKey` pattern with regex lookaround that OpenAI's model endpoint rejects pre-flight. 👍:5. Blocks users on newer OpenAI-compatible providers. |
| **[#12716](https://github.com/anomalyco/opencode/issues/12716)** | **Doom loop not caught during reasoning/output** | Previous fix only addresses simple repetition — models that loop inside reasoning traces or multi-part output still escape detection. 👍:3, Comments:9. |
| **[#16610](https://github.com/anomalyco/opencode/issues/16610)** | **Hangs at startup if `.git` present and inotify instances exhausted** | Silent hard hang with no error message on Linux systems with restrictive `fs.inotify.max_user_instances`. 👍:7 — affects CI and devcontainers. |
| **[#24335](https://github.com/anomalyco/opencode/issues/24335)** | **Wildcard `*` permission rule overwrites more specific deny rules** | Rule evaluation order contradicts documented behavior. Users expecting least-privilege configs end up with allow-all. 👍:4. |
| **[#31204](https://github.com/anomalyco/opencode/issues/31204)** | **`session_message.seq` NOT NULL constraint failed after agent switch** | An agent migration (June 3–5) introduced a code path where `appendMessage()` doesn't assign `seq` for cross-agent sessions. Crashes active sessions. 👍:2. |
| **[#27302](https://github.com/anomalyco/opencode/issues/27302)** | **Warp mode + interactive Q&A captures all input — terminal must be force-closed** | `/warp` in a worktree session + question tool = total input capture. Mouse, Enter, and Ctrl+C all inert. 👍:6 — a critical UX blocker. |
| **[#32105](https://github.com/anomalyco/opencode/issues/32105)** | **Docs still reference deleted `scout` agent** | PR #30435 removed scout but `agents.mdx` wasn't updated. New users hit dead docs. Already has a fix PR (see below). |
| **[#32024](https://github.com/anomalyco/opencode/issues/32024)** | **Sub-agents (Task tool) bypass deny permission rules for read/grep** | `deny` rules in `opencode.json` are silently ignored by task-spawned sub-agents. `.env` files read without warning. 👍:1 — a security boundary violation. |

---

## 4. Key PR Progress

| # | Summary | Type |
|---|---------|------|
| **[#32124](https://github.com/anomalyco/opencode/pull/32124)** | **feat(context-mode): harden context-mode wrapper PoC** — Adds a trade context mode plugin with `off/tools/shadow` modes, fail-open delegate import, and malformed tool audit. | New feature (compliance-needed) |
| **[#32093](https://github.com/anomalyco/opencode/pull/32093)** | **feat(db): add `db doctor` and `db repair` CLI commands** — Native tooling to diagnose and repair stale/corrupt local SQLite databases. Targets #29908, #31204, and 6 other related issues. Enormous value for users who can't recover sessions after migrations. | Feature + bug fix |
| **[#32123](https://github.com/anomalyco/opencode/pull/32123)** | **docs: remove references to deleted scout agent** — Closes #32105. Follow-up to #32107 (already merged same day). | Docs |
| **[#32122](https://github.com/anomalyco/opencode/pull/32122)** | **feat(tool): human-readable slugs for task_id** — Task tool now accepts slugs like `"explore-auth"` instead of UUID-only identifiers. Reduces friction in sub-agent orchestration. | Feature |
| **[#30164](https://github.com/anomalyco/opencode/pull/30164)** | **feat(tui): show estimated live token throughput in footer** — Tracks committed tokens and elapsed time during streaming turns, displayed inline. Helps users watching token consumption in real time. | Feature (refs #29909) |
| **[#32117](https://github.com/anomalyco/opencode/pull/32117)** ✅ | **fix: classify fetch timeouts as retryable** — `AbortSignal.timeout()` rejections (`DOMException: TimeoutError`) were treated as hard errors. Now retried. Closed same day as creation. | Bug fix |
| **[#32088](https://github.com/anomalyco/opencode/pull/32088)** | **fix(mcp): recover expired MCP sessions** — Patches `@modelcontextprotocol/sdk` to reinitialize Streamable HTTP sessions after 404 on POST. Critical reliability fix for long-running MCP tool sessions. | Bug fix |
| **[#30638](https://github.com/anomalyco/opencode/pull/30638)** | **fix(session): classify transport and timeout errors as retryable** — Only `ECONNRESET` was retryable before; now ECONNREFUSED, ENOTFOUND, and other transport failures are too. Closes #30611. | Bug fix |
| **[#32110](https://github.com/anocode/opencode/pull/32110)** ✅ | **fix(tui): prevent duplicate renderable IDs** — Removes colliding IDs from TUI, ensuring session and message part identities are unique. Fixes subtle rendering bugs in complex sessions. | Bug fix |
| **[#32085](https://github.com/anomalyco/opencode/pull/27085)** ✅ | **feat(observability): propagate trace context to spawned subprocesses** — Injects OpenTelemetry trace IDs into shell tool, MCP stdio, and LSP child process env vars. Enables end-to-end tracing across tool calls. | Observability |

---

## 5. Feature Request Trends

**1. Database operability** (`#32097`, `#32093`)
Users are frustrated that local SQLite corruption or stale migrations silently break session inspection and recovery. The emergence of `db doctor` / `db repair` is a direct response to real operational pain.

**2. Richer Task tool UX** (`#32122`, `#31996` v2 APIs)
More ergonomic sub-agent identifiers (slugs vs UUIDs) and v2 session endpoints point toward building OpenCode as an orchestration platform, not just a TUI.

**3. Context mode plugins** (`#32124`)
A new "trade context mode" wrapper with `off/tools/shadow` modes suggests demand for composable context-window management strategies as models grow in capability.

**4. Telemetry and cost transparency** (`#30164`, `#32116`)
Both live token throughput display and a request for the Go pricing table to show provider markup ratios reflect a community increasingly cost-conscious about API usage.

**5. Ecosystem docs expansion** (`#32112`, `#32111`)
Community wants a curated ecosystem page (rotator plugin, etc.) — demand for discoverability as the plugin surface grows.

---

## 6. Developer Pain Points

**Permission system credibility crisis**
This is the dominant theme. Issues `#27436`, `#24335`, `#18441`, `#32024`, `#24429` collectively paint a picture of a permission system that:
- Freezes mid-interaction (UI deadlock)
- Evaluates rules in the wrong order (wildcard `*` overrides deny)
- Doesn't propagate to sub-agents (security bypass)
- Contradicts its own documentation
- Appears intentionally unmaintained (#24429 directly asks if it's "intentionally broken")

**Cross-cutting reliability gaps**
- **Retry logic gaps** across network layers (transport errors, timeouts, MCP session expiry) are being fixed in parallel PRs (#30638, #32088, #32117) — indicating these were systemic omissions.
- **Doom loop detection** keeps finding edge cases (#12716, `#25254`) — the current scope-limited single-message approach misses cross-message and cross-tool patterns.
- **Notification delivery** fails inside tmux/zellij (#29099), breaking one of the primary UX signals for long-running tasks.

**Documentation drift**
Deleted features (scout agent), hardcoded provider lists (#32103), and pricing opacity (#32116) erode trust in docs as a source of truth.

**Platform-specific startup failures**
Linux inotify exhaustion (#16610) and Windows custom install directory reset (#26818) remain unaddressed — small-footfall environments suffer silently.

---

*OWL — ZOO*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-13

---

## 1. Today's Highlights

Pi shipped **v0.79.2**, with improved Bedrock validation error messaging. The most-discussed issue remains **#4945 — OpenAI Codex / GPT-5.5 reliability**, where the TUI gets stuck on `Working...` (55 comments, 👍30). Meanwhile, **15 PRs** saw activity today, with fixes landing for compaction stability, project-trust false positives, header-value parsing, and Anthropic refusal details. Infrastructure-level churn continues around dependency deduplication (shrinkwrap), session forking correctness, and provider registry fragmentation.

---

## 2. Releases

### v0.79.2 ([release notes](https://github.com/earendil-works/pi/blob/v0.79.2/packages/coding-agent/docs/providers.md#amazon-bedrock))
- **Bedrock data retention validation** — Error messages now link to AWS documentation, reducing confusion when configuring data-retention policies in Amazon Bedrock.
- Minor additions (abbreviated in the release notes as "Ad", likely truncated).

---

## 3. Hot Issues

| Issue | Why it matters |
|---|---|
| **[#4945](https://github.com/earendil-works/pi/issues/4945) — OpenAI Codex / GPT-5.5 TUI hangs** | 🔥 **55 comments, 👍30**. The top engagement issue. `openai-codex`/`gpt-5.5` leaves the TUI stuck on `Working...` — no output, no tool calls, invisible failures. This is the single biggest reliability concern for Codex users. | 
| **[#5363](https://github.com/earendil-works/pi/issues/5363) — Add `amazon-bedrock-mantle` provider** | Bedrock Mantle models use an OpenAI-compatible API, not Converse. A dedicated provider avoids misuse of the existing `amazon-bedrock` adapter. Indicates demand for API-surface fragmentation support within Bedrock. | 
| **[#5653](https://github.com/earendil-works/pi/issues/5595) — Move off shrinkwrap (duplicate pi-ai copies break provider registry)** | Installing both `@earendil-works/pi-ai` and `@earendil-works/pi-coding-agent` creates two `pi-ai` copies on disk. The API provider registry is a module-level `Map` — so each copy is silently separate. This is a packaging/architecture issue with cascading effects. | 
| **[#5595](https://github.com/earendil-works/pi/issues/5595) — OpenAI-completions `maxTokens` not passing through** | Tokens for reasoning models (e.g. DeepSeek v4 Pro via Together.ai) are exhausted before turns complete, regardless of settings. Core output-length configuration is silently dropped for OAI-completions providers. | 
| **[#5673](https://github.com/earendil-works/pi/issues/5673) — Add `vllm-deepseek` thinking format** | DeepSeek-V3.x models behind vLLM proxies need `chat_template_kwargs: { thinking: true }` instead of the standard `thinking: { type: "enabled" }`. Enterprise users running self-hosted vLLM stacks currently can't enable reasoning. | 
| **[#5633](https://github.com/earendil-works/pi/issues/5633) — Kimi 2.6: `reasoning_content` missing on cached continuation** | `kimi-k2.6` errors on out-of-cache session continuations with HTTP 400: `thinking is enabled but reasoning_content is missing`. Affects session continuity with Kimi models. | 
| **[#5667](https://github.com/earendil-works/pi/issues/5667) — Bash overflow spill crashes Pi on macOS `EACCES`** | When bash output exceeds ~50 KB, Pi spills to `$TMPDIR/pi-bash-<id>.log`. On macOS, `TMPDIR` can resolve to a non-writable placeholder path → `createWriteStream` EACCES → uncaught crash. A force-close risk for any long-running bash tool calls. | 
| **[#5577](https://github.com/earendil-works/pi/issues/5577) — Persona override for system prompt** | User requests the ability to specify agent persona (security, QA, research, PM) without behavior bleed-over. Reflects Pi's expanding use beyond coding into general-purpose agentic harness territory. | 
| **[#5661](https://github.com/earendil-works/pi/issues/5661) — Uppercase header values falsely treated as env var references** | Header values like `"BEARER"` in `models.json` are rewritten to `"$BEARER"` by legacy env-var migration. Subtle config parser bug affecting anyone with uppercase static header values. | 
| **[#5670](https://github.com/earendil-works/pi/issues/5670) — Tab completion grabs first item after narrowing** | In-editor file-path tab completion: typing to narrow a multi-match list then pressing Tab again accepts the first match instead of keeping the menu open. A UX regression in interactive file selection. | 

---

## 4. Key PR Progress

| PR | Status & Summary |
|---|---|
| **[#5679](https://github.com/earendil-works/pi/pull/5679)** | ✅ **Merged** — Adds built-in `anthropic-vertex` provider for Claude on Google Cloud Vertex AI via ADC ambient auth. Wired into model registration, defaults, and interactive picker. |
| **[#5674](https://github.com/earendil-works/pi/pull/5674)** | ✅ **Merged** — Fixes `pi update` triggering the "trust this folder" prompt when run from `~/.pi` overlapping with `cwd/.pi`. Resolves [#5619](https://github.com/earendil-works/pi/issues/5619). |
| **[#5678](https://github.com/earendil-works/pi/pull/5678)** | 🟡 **Open** — Adds `excludeFromContext` for custom messages / extension `sendMessage()`. Preserves the flag through session persistence, context rebuild, and compaction. Addresses [#5654](https://github.com/earendil-works/pi/issues/5654). |
| **[#5675](https://github.com/earendil-works/pi/pull/5675)** | ✅ **Merged** — Stabilizes compaction after reload or queued-message delivery. Fixes `prevCompaction is not defined` failure. Addresses [#5676](https://github.com/earendil-works/pi/issues/5676). |
| **[#5660](https://github.com/earendil-works/pi/pull/5660)** | ✅ **Merged** — Fixes uppercase header value false-positive env-var migration in `resolve-config-value.ts`. Fixes [#5661](https://github.com/earendil-works/pi/issues/5661). |
| **[#5666](https://github.com/earendil-works/pi/pull/5666)** | ✅ **Merged** — Propagates Anthropic `stop_details` explanation to `errorMessage` on `stop_reason: "refusal"`. Fixes [#5591](https://github.com/earendil-works/pi/issues/5591). |
| **[#5634](https://github.com/earendil-works/pi/pull/5634)** | ✅ **Merged** — Normalizes generated model costs after USD conversion, eliminating floating-point artifacts in `models.generated.ts` (OpenRouter/Vercel AI Gateway). |
| **[#5600](https://github.com/earendil-works/pi/pull/5600)** | ✅ **Merged** — Honors Codex SSE header timeout setting (was hardcoded to 10 s). Allows caller-configured `timeoutMs`/`httpIdleTimeoutMs`. Fixes [#5594](https://github.com/earendil-works/pi/issues/5594). |
| **[#5586](https://github.com/earendil-works/pi/pull/5586)** | ✅ **Merged** — Let `bedrock-converse-stream` use resolved `apiKey` as bearer-token fallback (precedence: explicit > env var > `apiKey`). Fixes [#5584](https://github.com/earendil-works/pi/issues/5584). |
| **[#5526](https://github.com/earendil-works/pi/pull/5526)** | 🟡 **Open** — Requires OpenAI Responses streams to end with a terminal event before completing. Prevents streams from silently dropping mid-response (which borked the context counter). Ground-up fix for the Codex/OAI stream reliability class of bugs. |

---

## 5. Feature Request Trends

Analysis of issues and PRs over the last 24 h reveals these recurring directions:

1. **Multi-provider / hybrid architecture support** — Requests for Bedrock Mantle (#5363), Anthropic Vertex (#5679), and vLLM-DeepSeek (#5673) signal that Pi is expected to abstract an increasingly fragmented model-provider landscape. Users want Pi to be the single harness *regardless of* hosting topology.

2. **Persona / role customization** — Issue #5577 explicitly requests system-prompt personas for non-coding workflows (security, QA, PM, research). The community views Pi as evolving from a "coding assistant" into a *general-purpose agentic harness*.

3. **Custom message control** — #5654 and PR #5678 for `excludeFromContext` show demand for fine-grained control over what enters the context window vs. what stays display-only. This ties into broader context-management hygiene as sessions grow larger.

4. **Thinking format extensibility** — #5673 (vLLM-DeepSeek) joins prior requests for provider-specific reasoning/thinking formats. The trend: plug-and-play thinking-mode adapters per model family.

5. **Session management improvements** — #5669 (`/fork` broken parent chains), #5676 (compaction after reload), #5558 (hang on upstream stall). Users need sessions that survive reload, branch correctly, and recover from transient outages.

---

## 6. Developer Pain Points

**🔴 Critical / High Impact**
- **OpenAI Codex / GPT-5.5 stream reliability** (#4945) — The single noisiest issue. The TUI silently hangs with no error feedback, requiring manual escape. This directly blocks trust in Pi as a production harness for OAI models.
- **Dependency deduplication** (#5653) — `pi-ai` duplicated across packages corrupts the provider registry silently. A correctness bug that is nearly impossible to debug from user-facing symptoms alone.

**🟡 High Frequency / Recurring**
- **Context window overflow edge cases** — [#5677](https://github.com/earendil-works/pi/issues/5677) (parenthesized overflow format not detected), [#5595](https://github.com/earendil-works/pi/issues/5595) (maxTokens dropped), [#5654](https://github.com/earendil-works/pi/issues/5654) (custom messages consuming context unnecessarily). The community needs a unified, provider-agnostic context-accounting strategy.
- **Implicit path / env assumptions** — macOS `TMPDIR` crashes (#5667), home-folder trust prompts (#5619/#5674), uppercase header values (#5661), `AGENTS.md` symlink duplication (#5648), and bash shebangs with zsh plugins (#5578). Pi makes assumptions about the runtime environment that break in real-world shell/runtime configurations.
- **Streaming hangs / missing timeouts** — [#5558](https://github.com/earendil-works/pi/issues/5558) (streams hang indefinitely on upstream stall), [#5592](https://github.com/earendil-works/pi/issues/5592) (Anthropic waits for transport EOF after message_stop), [#5526](https://github.com/earendil-works/pi/pull/5526) (OAI responses not requiring terminal events). The streaming layer is overfitted to happy-path behavior.

**🐛 Niche but Sharp**
- **Shrinkwrap → dup module** registry corruption affects anyone consuming both `pi-ai` and `pi-coding-agent` packages directly.
- **`/fork` label entries** produce orphaned subtrees (#5669), which will bite anyone doing session archaeology or replay.
- **Single `+` → `-` TUI rendering** (#5657) is cosmetic but makes manual message review unreliable.

---

*OWL Community Digest — Generated from [earendil-works/pi](https://github.com/earendil-works/pi) data, 2026-06-13.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-13

---

## 1. Today's Highlights

Qwen Code shipped **v0.18.0** overnight, headlined by a fix that skips internal "thought" parts when copying output from the CLI. The community is actively debating a **controversial free-tier quota reduction** (1,000 → 100 requests/day), and several high-priority bugs around tool-call repetition, cancellation safety, and Windows compatibility landed or were resolved in the last 24 hours.

---

## 2. Releases

### v0.18.0 — Released 2026-06-13
- **fix(cli): skip thought parts in copy output** — Internal reasoning/thinking blocks are now filtered out when users copy model output, preventing leaked chain-of-thought artifacts in shared contexts. ([PR #4742](https://github.com/QwenLM/qwen-code/pull/4742))

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** | Proposes slashing the free daily quota from 1,000 → 100 requests/day and eventually phasing out the free tier entirely. This directly impacts hobbyists and evaluators. | **127 comments** — the most-discussed issue in the repo. Strong pushback from the community; many argue 1,000/day is already tight for real development work. |
| [#5016](https://github.com/QwenLM/qwen-code/issues/5016) | **Qwen Code executes a tool after cancellation** | After SIGINT/cancellation during a streaming tool call, the agent still executes the interrupted tool's work. This is a safety/correctness bug. | P1 priority. Reproduction uses a local deterministic provider — no live account needed. Active investigation. |
| [#5015](https://github.com/QwenLM/qwen-code/issues/5015) | **Qwen Code executes repeated identical tool calls** | A repeated identical tool-call stream causes execution of the duplicate, wasting tokens and potentially causing side-effects. | P1 priority. Related to [#5019](https://github.com/QwenLM/qwen-code/issues/5019) (long-context repetitive tool calls causing session termination). |
| [#5055](https://github.com/QwenLM/qwen-code/issues/5055) | **Trojan:JS/ShaiWorm.DBA!MTB — VSIX flagged by antivirus** | The v0.18.0 Windows VSIX package is flagged by at least one AV engine as containing a trojan. | P1/security. Needs immediate triage — could be a false positive from bundled dependencies, but trust impact is severe. |
| [#4488](https://github.com/QwenLM/qwen-code/issues/4488) | **VSCode plugin (v0.16.0) not showing in sidebar on VSCode 1.120+** | The extension flashes briefly then disappears from the activity bar on newer VSCode versions. | 7 comments. Affects users on the latest VSCode; workaround is to downgrade to 1.95.3. |
| [#5018](https://github.com/QwenLM/qwen-code/issues/5018) | **长程任务注意力不集中，出现大量的遗忘** | Long-context tasks suffer from attention degradation and significant forgetting. | 3 comments. Reflects a broader model-level concern about long-context reliability. |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | **Tracking: daemon capability gaps & prioritized backlog (post v0.16-alpha)** | Tracks remaining gaps in the `qwen serve` HTTP/SSE surface for remote clients. | 15 comments. Important for teams building remote/headless integrations. |
| [#4825](https://github.com/QwenLM/qwen-code/issues/4825) | **`qwen sessions list` subcommand with --json, --tag, and date filters** | Requests a script-friendly session enumeration command. | 4 comments. Useful for automation and session management at scale. |
| [#4845](https://github.com/QwenLM/qwen-code/issues/4845) | **Add `/import-config` for Claude user config migration** | One-click import of MCP servers, instructions, permissions, and custom commands from Claude Code/Desktop configs. | 3 comments. Addresses real migration friction for developers switching tools. |
| [#4821](https://github.com/QwenLM/qwen-code/issues/4821) | **Declarative agent definitions via frontmatter files** | Define custom agents via Markdown + YAML frontmatter instead of hardcoding in TypeScript — matching Claude Code 2.1.167's pattern. | 6 comments. Closed; implementation landed. Significant for extensibility. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#5062](https://github.com/QwenLM/qwen-code/pull/5062) | **fix(core): keep token escalation warm across agent rounds** | Carries automatic output-token escalation from `GeminiChat` through the headless agent loop, reusing escalated `maxOutputTokens` on later rounds instead of dropping back to the capped default. | OPEN |
| [#5066](https://github.com/QwenLM/qwen-code/pull/5066) | **feat(web-shell): daemon web-shell improvements** | Adds structured token usage tracking, a full settings panel with i18n (CN/EN), theme/language pickers, compact mode persistence, and retry/streaming metrics to the daemon web shell. | OPEN |
| [#5061](https://github.com/QwenLM/qwen-code/pull/5061) | **fix(core): preserve background agent launch flags** | Persists background-agent runtime flags in the agent meta sidecar and reapplies them when an interrupted agent is resumed after a process restart. | OPEN |
| [#5039](https://github.com/QwenLM/qwen-code/pull/5039) | **fix(cli): use id+baseUrl for precise model identity** | Fixes model identity ambiguity by introducing `model.id`, `model.baseUrl`, and `model.provider` fields instead of relying on `model.name` alone. Closes #4877, #4813, #4722, #4814. | OPEN (draft) |
| [#4963](https://github.com/QwenLM/qwen-code/pull/4963) | **fix: enable fork subagents by default** | Makes fork subagents available by default in interactive sessions; sets implicit fork agent approval mode to `default` so trusted folders don't silently promote fork workers to auto-edit. Fixes #4956. | **CLOSED/Merged** |
| [#4961](https://github.com/QwenLM/qwen-code/pull/4961) | **feat(serve): deliver A2UI surfaces over MCP** | Lets web clients of `qwen serve` render interactive A2UI surfaces produced by MCP tools, following the official A2UI-over-MCP guide. Confined to the daemon layer. | **CLOSED/Merged** |
| [#4982](https://github.com/QwenLM/qwen-code/pull/4982) | **fix(core): eliminate OOM from debugResponses accumulation** | Removes dead `debugResponses` array and `extractUsageFromGeminiClient` — the former pushed every streaming chunk into an array that nothing read, causing OOM in long sessions. | **CLOSED/Merged** |
| [#4918](https://github.com/QwenLM/qwen-code/pull/4918) | **feat(hooks): pass original API call ID (toolCallId) to hook system** | Adds optional `toolCallId` in `call_xxx` format to the hook system, enabling correlation between hook execution and API logs. | OPEN |
| [#4933](https://github.com/QwenLM/qwen-code/pull/4933) | **feat(config): add settings file change detection via chokidar watcher** | Implements live settings file watching so changes to `settings.json` are picked up without restart. Closes #3696. | OPEN |
| [#4713](https://github.com/QwenLM/qwen-code/pull/4713) | **feat(mcp): project .mcp.json + workspace approval gating** | Adds approval gating for untrusted, checked-in MCP server sources with coherent cross-source precedence, aligning with Claude Code's `.mcp.json` handling. | **CLOSED/Merged** |

---

## 5. Feature Request Trends

1. **Claude Code parity & migration** — Multiple requests ([#4821](https://github.com/QwenLM/qwen-code/issues/4821), [#4845](https://github.com/QwenLM/qwen-code/issues/4845)) ask for feature and config compatibility with Claude Code, especially declarative agents and one-click config import. Users are actively switching between tools and want low-friction migration.

2. **Daemon / headless / remote capabilities** — The `qwen serve` surface is a major focus area: A2UI-over-MCP ([#4961](https://github.com/QwenLM/qwen-code/pull/4961)), web-shell improvements ([#5066](https://github.com/QwenLM/qwen-code/pull/5066)), OpenTelemetry ([#4554](https://github.com/QwenLM/qwen-code/issues/4554)), and capability gap tracking ([#4514](https://github.com/QwenLM/qwen-code/issues/4514)) all point to demand for production-grade remote/headless operation.

3. **Session & agent management** — Script-friendly session listing ([#4825](https://github.com/QwenLM/qwen-code/issues/4825)), declarative agent definitions ([#4821](https://github.com/QwenLM/qwen-code/issues/4821)), and background agent resilience ([#5061](https://github.com/QwenLM/qwen-code/pull/5061)) reflect a maturing user base that needs orchestration at scale.

4. **Context & memory management** — Non-AI-assisted context compression ([#4264](https://github.com/QwenLM/qwen-code/issues/4264)), long-context attention issues ([#5018](https://github.com/QwenLM/qwen-code/issues/5018)), and memory interference ([#4976](https://github.com/QwenLM/qwen-code/issues/4976)) highlight ongoing pain with long-running sessions.

5. **Multi-model & provider flexibility** — Dynamic multi-model support for OpenAI-compatible APIs ([#1206](https://github.com/QwenLM/qwen-code/issues/1206)), shared `baseUrl` for multiple models ([#4813](https://github.com/QwenLM/qwen-code/issues/4813)), and model identity disambiguation ([#5039](https://github.com/QwenLM/qwen-code/pull/5039)) all address the fragmentation of the LLM provider landscape.

---

## 6. Developer Pain Points

- **Free tier uncertainty**: The potential reduction from 1,000 to 100 requests/day ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)) is the single most-discussed topic. Developers feel the current quota is already minimal for real work, and a further 10× cut would make the free tier impractical.

- **Tool-call safety**: Multiple P1 bugs ([#5015](https://github.com/QwenLM/qwen-code/issues/5015), [#5016](https://github.com/QwenLM/qwen-code/issues/5016)) reveal that cancellation and deduplication in the tool-call pipeline are not yet robust. Executing tools after cancellation or repeating identical calls can cause real side-effects.

- **Windows compatibility**: The `printf` shell command issue ([#5010](https://github.com/QwenLM/qwen-code/issues/5010)) and the VSIX antivirus false positive ([#5055](https://github.com/QwenLM/qwen-code/issues/5055)) both affect Windows users disproportionately. Windows remains a second-class platform in parts of the codebase.

- **VSCode extension fragility**: The extension disappearing on VSCode 1.120+ ([#4488](https://github.com/QwenLM/qwen-code/issues/4488)) suggests the extension hasn't kept pace with VSCode API changes, breaking the GUI experience for users on the latest editor versions.

- **OOM in long sessions**: The `debugResponses` accumulation bug ([#4982](https://github.com/QwenLM/qwen-code/pull/4982)) was a silent memory leak that could crash long-running sessions. While now fixed, it underscores the need for more defensive memory management in streaming paths.

- **Self-hosted LLM compatibility**: Tool parameter type coercion ([#4793](https://github.com/QwenLM/qwen-code/pull/4793)) and model identity ambiguity ([#5039](https://github.com/QwenLM/qwen-code/pull/5039)) both affect users running local models via vLLM, LMStudio, or sglang — a growing segment of the developer community.

---

*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) — Digest generated 2026-06-13.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*