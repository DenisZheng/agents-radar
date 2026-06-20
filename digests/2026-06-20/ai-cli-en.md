# AI CLI Tools Community Digest 2026-06-20

> Generated: 2026-06-20 00:39 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date: 2026-06-20 | Prepared by OWL**

---

## 1. Ecosystem Overview

The AI CLI tool landscape in mid-2026 is defined by intense competition across eight visible projects, all racing to establish the de facto developer interface for AI-assisted coding. The market has matured beyond early experimentation into a phase where **reliability, multi-agent orchestration, and cross-platform parity** are the primary battlegrounds. Anthropic's Claude Code and OpenAI's Codex lead in community volume and release cadence, while tools like OpenCode, Pi, and Qwen Code differentiate through extensibility, multi-provider support, and platform breadth. A clear pattern emerges: every tool is converging on MCP integration, subagent architectures, and skills/plugin systems, but each is solving different layers of the developer experience stack. The ecosystem is healthy — high PR throughput, active maintainer engagement, and strong community signal on shared pain points.

---

## 2. Activity Comparison

| Tool | Issues (Active/Hot) | PRs (Updated/Merged) | Release Today | Latest Version |
|------|---------------------|-----------------------|---------------|----------------|
| **Claude Code** | 10 hot issues | 1 updated | ✅ Yes | v2.1.183 |
| **OpenAI Codex** | 10 hot issues | 10 updated | ✅ Yes (3 alphas) | rust-v0.142.0-alpha.6 |
| **Gemini CLI** | 10 hot issues | 10 updated (3 merged) | ❌ No | — |
| **Copilot CLI** | 10 hot issues | 0 updated | ✅ Yes | v1.0.64-1 |
| **Kimi Code CLI** | 0 hot issues | 1 updated | ❌ No | — |
| **OpenCode** | 10 hot issues | 10 updated (6 merged) | ❌ No | — |
| **Pi** | 10 hot issues | 7 updated (4 merged) | ✅ Yes | v0.79.8 |
| **Qwen Code** | 10 hot issues | 10 updated (7 merged) | ❌ No | — |
| **DeepSeek TUI** | 5 hot issues | 10 updated (0 merged) | ❌ No | v0.8.63 |

**Key observations:**
- **Highest release activity:** OpenAI Codest (3 alpha releases in 24h), Claude Code, Copilot CLI, and Pi all shipped.
- **Highest merge throughput:** Qwen Code (7 merged) and OpenCode (6 merged) show the most aggressive PR landing.
- **Quietest issue tracker:** Kimi Code CLI had zero new or updated issues — either a sign of a small community or a stable period.
- **Weekend effect visible:** Claude Code's low PR count (1) is attributed to Saturday timing; other tools with dedicated maintainers (Qwen, OpenCode) show no such dip.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, signaling ecosystem-wide convergence:

### 3.1 Multi-Agent / Subagent Orchestration
**Tools:** Claude Code, Gemini CLI, OpenCode, Qwen Code, DeepSeek TUI, OpenAI Codex

This is the single most cross-cutting theme. Every tool is grappling with subagent reliability, but the specific failure modes differ:
- **Claude Code:** Infinite recursion and token burn (#68619) — the most critical subagent crisis in the ecosystem.
- **Gemini CLI:** Subagent hangs and false success reporting (#21409, #22323) — trust erosion from silent failures.
- **OpenCode:** Subagent hangs after bash tool calls (#33028) and CPU spin (#32965) — stability at scale.
- **Qwen Code:** No crash propagation from subagent to parent (#5180) and no bidirectional communication (#5239) — architectural gaps.
- **DeepSeek TUI:** Token budget regulator PR (#3321) and first-class subagent toggle (#3321) — building controls from scratch.
- **OpenAI Codex:** Checkpoint-backed resume/fork optimization (#28806) — infrastructure-level approach.

**Shared need:** Recursion guards, parent-child failure propagation, atomic checkpoint/restore, and runtime token budgets.

### 3.2 Context Window Visibility & Management
**Tools:** Claude Code, OpenAI Codex, Copilot CLI, OpenCode, Pi

- Claude Code: Token usage exposure to model (#65832), usage/billing opacity (#65514, #69436)
- OpenAI Codex: Context window exhaustion on first prompt (#9046)
- Copilot CLI: No context window visibility or compaction notification (#3867)
- OpenCode: Cost tracking broken for custom providers (#17223)
- Pi: Configurable compaction behavior (#5795, #5845)

**Shared need:** Real-time token meters, in-session model awareness of context consumption, and transparent compaction notifications.

### 3.3 Skills / Plugin System Evolution
**Tools:** Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code

- Claude Code: Cross-platform skill sync (#20697) — 118 upvotes
- OpenAI Codex: Skills as plugins migration (#29150, merged)
- Gemini CLI: Skill description parsing failures (#28042), skill underutilization (#21968)
- OpenCode: On-demand skill loading (#33038, merged) and inline skill picker (#33019)
- Qwen Code: ACP mode drops user skills (#5007)

**Shared need:** Unified skill discovery, on-demand loading to conserve context, cross-surface sync, and better model-triggered skill utilization.

### 3.4 MCP Ecosystem Maturity
**Tools:** OpenAI Codex, Gemini CLI, OpenCode, Pi, DeepSeek TUI, Copilot CLI

- OpenAI Codex: MCP tools invisible to non-OpenAI providers (#26234) — proprietary namespace blocking ecosystem
- Gemini CLI: OAuth refresh failures (#27889), underscore routing bugs (#28033)
- OpenCode: OAuth-based remote MCP installation (#988) — 95 upvotes, highest in the set
- Pi: Provider-specific schema incompatibilities (DeepSeek #5811, Moonshot #5822)
- DeepSeek TUI: MCP header modularization (#3333)
- Copilot CLI: MCP config schema divergence with VSCode (#3835)

**Shared need:** Transport-neutral MCP tool serialization, robust OAuth lifecycle management, and unified configuration schemas across IDE and CLI surfaces.

### 3.5 Windows Platform Parity
**Tools:** Claude Code, OpenAI Codex, Copilot CLI, Pi, Qwen Code

- Claude Code: 5+ active Windows-specific bugs (#26073, #56452, #60825, #60885, #48437)
- OpenAI Codex: 8+ crash/RAM/stability issues on Windows builds (#28980, #28524, #27848)
- Copilot CLI: `github-mcp-server` fetch failure since 1.0.51 (#3455)
- Pi: WSL bash variable escaping (#5893), MinGW file-write failures (#3672)
- Qwen Code: Windows drive path parsing breaks grep and sandbox (#5370, #5386)

**Shared need:** Dedicated Windows CI, path handling audits, and first-class Windows support in release testing.

---

## 4. Differentiation Analysis

### Feature Focus

| Tool | Primary Differentiator | Secondary Strengths |
|------|----------------------|---------------------|
| **Claude Code** | Safety guardrails (destructive git command blocking in v2.1.183) | Strongest community signal volume; tight Anthropic ecosystem integration |
| **OpenAI Codex** | Rust rewrite with rapid alpha iteration; OTEL observability (#29155) | Deep OpenAI model integration; transport-neutral session runtime (#28787) |
| **Gemini CLI** | AST-aware codebase tools EPIC (#22745); evaluation infrastructure (#24353) | Google Cloud integration; strong CI security posture (#27753) |
| **Copilot CLI** | Git worktree integration (experimental `--worktree` flag); GitHub-native PR review | Tightest GitHub ecosystem integration; `/branch` alias matching Claude Code conventions |
| **Kimi Code CLI** | Proxy/network environment compatibility focus | Lightweight; corporate network support (PR #2463) |
| **OpenCode** | Multi-provider breadth (GLM, Bedrock, OpenRouter, custom providers); payment/billing infrastructure | Android/Termux expansion (#33010); OAuth-based MCP onboarding (#988) |
| **Pi** | SDK-first architecture with selective provider bundling; multi-provider by design | Containerization docs (#5356); freecode-web adapter (#5900); HITL proposal (#5901) |
| **Qwen Code** | Aggressive bug-fix throughput (10+ PRs/day by single maintainer); qqbot channel | Web shell extension management (#5398); Alibaba Cloud ecosystem |
| **DeepSeek TUI** | Command-boundary refactor EPIC (#2870); token budget regulation (#3321) | Security hardening focus (#3332); conversation reconstruction fidelity (#3300) |

### Target Users

- **Claude Code:** Professional developers and teams in the Anthropic ecosystem; users prioritizing safety in autonomous agent operation.
- **OpenAI Codex:** Developers already in the OpenAI ecosystem; teams needing observability and enterprise telemetry.
- **Gemini CLI:** Google Cloud developers; teams investing in evaluation-driven quality assurance.
- **Copilot CLI:** GitHub-centric teams; developers wanting tight SCM integration with minimal context switching.
- **OpenCode:** Multi-provider teams; developers who need cost control and provider flexibility; mobile/Termux users.
- **Pi:** SDK integrators and platform builders; developers deploying AI CLI as a component in larger systems.
- **Qwen Code:** Alibaba Cloud / Chinese-market developers; qqbot channel users; teams needing aggressive bug-fix velocity.
- **DeepSeek TUI:** Security-conscious deployments; developers building complex multi-agent workflows with token budget constraints.

### Technical Approach

- **Rust-based:** OpenAI Codex (full Rust rewrite), DeepSeek TUI (Rust core) — prioritizing performance and memory safety.
- **TypeScript/Node-based:** Claude Code, Gemini CLI, Copilot CLI, Qwen Code — prioritizing ecosystem compatibility and rapid iteration.
- **Go-based:** OpenCode — prioritizing cross-platform binary distribution and concurrency.
- **Multi-language (TypeScript SDK + provider plugins):** Pi — prioritizing embeddability and selective bundling.

---

## 5. Community Momentum & Maturity

### By Community Volume & Engagement

| Tier | Tools | Evidence |
|------|-------|----------|
| **Highest** | Claude Code, OpenAI Codex | Largest issue comment counts (up to 98 comments on OpenCode's memory thread, but Claude Code and Codex have the broadest issue engagement); most upvoted feature requests (356 👍 on Claude Code #36151, 166 👍 on Codex #11626) |
| **High** | OpenCode, Gemini CLI | OpenCode's memory megathread at 98 comments / 71 👍; Gemini CLI's EPIC issues with sustained 7-comment engagement across multiple threads |
| **Moderate** | Pi, Qwen Code, DeepSeek TUI | Focused but smaller communities; high PR throughput (especially Qwen Code) suggests dedicated maintainer-driven development rather than broad community contribution |
| **Emerging** | Kimi Code CLI | Minimal issue activity; single PR in 24h; early-stage community |

### By Iteration Velocity

| Tool | Signal |
|------|--------|
| **Fastest** | Qwen Code (10+ PRs merged in a day by one maintainer), OpenAI Codex (3 alpha releases in 24h) |
| **Fast** | OpenCode (6 merged PRs), Pi (4 merged PRs), Gemini CLI (3 merged PRs) |
| **Moderate** | Claude Code (weekend lull), DeepSeek TUI (24 PRs updated but none merged — review bottleneck) |
| **Slowest** | Kimi Code CLI (1 PR), Copilot CLI (0 PRs) |

### Maturity Indicators

- **Claude Code** is the most "market-mature" — large community, clear feature request trends, safety-first release philosophy, but also the most complex bug surface (subagent recursion crisis).
- **OpenAI Codex** is in a high-velocity transition — the Rust rewrite signals architectural ambition, but the alpha cadence and billing regression (#28879) suggest the rewrite is still stabilizing.
- **OpenCode** is the most "full-stack" — handling payments, billing, IDOR security fixes, and platform expansion simultaneously, indicating a product-minded open-source project.
- **Gemini CLI** is the most "engineering-disciplined" — EPIC-driven evaluation infrastructure, CI security hardening, and AST-aware tooling suggest a research-informed development culture.
- **DeepSeek TUI** is the most "architecturally ambitious" — the staged command-boundary refactor EPIC (#2870) is the largest structural change effort across all tools.

---

## 6. Trend Signals

### Trend 1: The Subagent Reliability Crisis Is the Defining Challenge of 2026

Every tool with multi-agent capabilities is experiencing critical subagent failures — infinite recursion (Claude Code), silent hangs (Gemini CLI, OpenCode), crash propagation gaps (Qwen Code), and runaway token consumption (Claude Code, DeepSeek TUI). **Implication for developers:** Multi-agent workflows are not yet production-reliable in any tool. Teams should implement external monitoring, token budget caps, and checkpoint/restore patterns regardless of which CLI they choose.

### Trend 2: MCP Is the Universal Integration Layer — but Fragmentation Is the Risk

All nine tools support MCP, but each implements tool serialization, OAuth, and configuration differently. OpenAI's proprietary namespace wrapping (#26234) is the most egregious example, but schema incompatibilities (Pi #5811, #5822), routing bugs (Gemini CLI #28033), and config divergence (Copilot CLI #3835) are widespread. **Implication for developers:** MCP server developers should test against multiple CLI consumers. The lack of a conformance test suite is a gap the ecosystem needs to fill.

### Trend 3: Context Window Transparency Is Becoming a Table-Stake Feature

Users across all tools are demanding real-time visibility into token consumption, context window headroom, and compaction events. The fact that this appears as a top-5 pain point for Claude Code, Codex, Copilot CLI, and OpenCode simultaneously means it will become a competitive differentiator. **Implication for developers:** Evaluate tools on observability features, not just model quality. Silent context loss is the #1 source of unpredictable agent behavior.

### Trend 4: Windows Is the Persistent Blind Spot

Five of the nine tools have active Windows-specific bugs, and in most cases, these bugs persist for weeks without resolution. OpenAI Codex's Windows desktop stability issues are severe enough to be labeled the "#1 support burden." **Implication for developers:** Windows-based teams should factor platform support maturity into tool selection. Linux/macOS remain the primary development targets for most AI CLI tooling.

### Trend 5: The Skills/Plugin Model Is Replacing Prompt Engineering as the Extension Paradigm

The migration from embedded skills to installable plugins (Codex #29150), on-demand skill loading (OpenCode #33038), and cross-surface skill sync (Claude Code #20697) all point to a future where agent capabilities are distributed as packages, not prompt templates. **Implication for developers:** Invest in skills/plugin authoring and distribution infrastructure. The ecosystem is moving toward a package-manager model for agent capabilities.

### Trend 6: Safety Guardrails Are Shifting from User-Configured to Default

Claude Code's proactive blocking of destructive git commands (v2.1.183), Qwen Code's shell self-kill guard (#5409), and Gemini CLI's destructive behavior discussion (#22672) all indicate a trend toward tools enforcing safety by default rather than relying on user configuration. **Implication for developers:** Expect autonomous operation to become safer by default, but also expect more friction when legitimate operations are blocked. Budget time for guardrail calibration.

### Trend 7: Billing and Cost Transparency Are Emerging as Trust Issues

Cost accounting regressions (Codex #28879 — 10–20× token cost increase), usage opacity (Claude Code #65514, #69436), broken cost tracking (OpenCode #17223), and payment bugs (OpenCode #28403, #28400) all erode user trust. As these tools move from experimentation to production, billing accuracy becomes a retention issue. **Implication for developers:** Implement external cost monitoring and set hard budget limits regardless of what the tool reports.

---

*This report was generated by OWL, synthesizing community digest data from all nine AI CLI tool repositories as of 2026-06-20. Data sources linked in each section.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data Source:** [anthropics/skills](https://github.com/anthropics/skills) | **Report Date:** 2026-06-20

---

## 1. Top Skills Ranking

The following PRs have attracted the most community attention and discussion as of the data cutoff. Note that several top items by comment count are **bug-fix PRs** rather than new skill submissions, reflecting active community investment in tooling quality.

| # | PR | Type | Status | Summary |
|---|-----|------|--------|---------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** — fix `run_eval.py` recall=0% | 🐛 Bug Fix | Open | Fixes the skill-creator's evaluation pipeline reporting 0% recall across all skills. Installs eval artifacts as real skills; resolves Windows stream reading, trigger detection, and parallel worker issues. The description-optimization loop was optimizing against noise. |
| 2 | **[#1099](https://github.com/anthropics/skills/pull/1099)** — fix Windows subprocess pipe crash | 🐛 Bug Fix | Open | Resolves `run_eval.py` being completely unusable on Windows — every query recorded as "not triggered" due to a pipe-reading failure (`WinError 10038`). |
| 3 | **[#1050](https://github.com/anthropics/skills/pull/1050)** — fix Windows subprocess + encoding bugs | 🐛 Bug Fix | Open | Two critical Windows compatibility fixes: `subprocess.Popen` failing because the CLI ships as `claude.cmd` on Windows, and encoding issues in the optimization loop. |
| 4 | **[#361](https://github.com/anthropics/skills/pull/361)** — Detect unquoted YAML special characters | 🐛 Bug Fix | Open | Adds pre-parse validation in `quick_validate.py` to catch unquoted `description` fields containing YAML special characters (`: # { } [ ]`) that cause silent misparsing. |
| 5 | **[#362](https://github.com/anthropics/skills/pull/362)** — Fix UTF-8 panic on multi-byte characters | 🐛 Bug Fix | Open | Replaces character-based length checks with UTF-8 byte-length validation to prevent Rust panics in the CLI when processing multi-byte characters in skill metadata. |
| 6 | **[#538](https://github.com/anthropics/skills/pull/538)** — fix(pdf): correct case-sensitive file references | 🐛 Bug Fix | Open | Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break on case-sensitive file systems. |
| 7 | **[#541](https://github.com/anthropics/skills/pull/541)** — fix(docx): prevent tracked change w:id collision | 🐛 Bug Fix | Open | Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks, caused by hardcoded low IDs in shared OOXML ID space. |
| 8 | **[#509](https://github.com/anthropics/skills/pull/509)** — docs: add CONTRIBUTING.md | 📄 Documentation | Open | Closes [#452](https://github.com/anthropics/skills/issues/452). Adds a `CONTRIBUTING.md` to address the repo's 25% GitHub community health score — the most impactful single addition for community governance. |

> **Key observation:** 7 of the top 8 most-active PRs are bug fixes to the **skill-creator tooling** (especially Windows compatibility and the eval pipeline), not new skill content. This signals that contributors are prioritizing platform reliability before submitting new skills.

---

## 2. Community Demand Trends (from Issues)

Analyzing the most-commented and most-upvoted Issues reveals clear demand signals:

### 🔗 Org-Wide Skill Sharing & Distribution
- **[#228](https://github.com/anthropics/skills/issues/228)** (14 comments, 👍 7) — *"Enable org-wide skill sharing in Claude.ai"*
  Users want a shared skill library or direct sharing links instead of manual `.skill` file distribution via Slack/Teams. This is the **single most-discussed issue** in the repo.

### 🛡️ Security & Trust Boundaries
- **[#492](https://github.com/anthropics/skills/issues/492)** (7 comments, 👍 2) — *"Community skills distributed under anthropic/ namespace enable trust boundary abuse"*
  Community skills impersonating official Anthropic skills via namespace squatting. Users may grant elevated permissions to unofficial skills they believe are official.

### 🧠 Agent Governance & Safety
- **[#412](https://github.com/anthropics/skills/issues/412)** (6 comments) — *"Skill proposal: agent-governance — safety patterns for AI agent systems"*
  Demand for a skill teaching policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems.

### 🔌 MCP / API Exposure
- **[#16](https://github.com/anthropics/skills/issues/16)** (4 comments) — *"Expose Skills as MCPs"*
  Proposal to surface Skill capabilities as MCP server endpoints, turning every skill into a callable API with typed parameters.

### ☁️ Cloud Platform Integration
- **[#29](https://github.com/anthropics/skills/issues/29)** (4 comments) — *"Usage with Bedrock"*
  Users seeking guidance on making Claude Code Skills work with AWS Bedrock deployments.

### 🧠 Persistent Memory for Agents
- **[#1329](https://github.com/anthropics/skills/issues/1329)** (3 comments) — *"Proposing compact-memory: symbolic notation for compact agent state"*
  A proposal for symbolic notation to compress long-running agent context, reducing token spend on verbose prose notes.

### 📊 Summary of Demand Themes

| Demand Theme | Issue Signal | Community Priority |
|---|---|---|
| Org-wide skill sharing & governance | #228 (top comments) | 🔴 Critical |
| Security / trust boundary enforcement | #492 | 🔴 Critical |
| Agent governance & safety patterns | #412 | 🟡 High |
| MCP / API interoperability | #16 | 🟡 High |
| Persistent agent memory | #1329, #154 | 🟡 High |
| Cloud platform support (Bedrock) | #29 | 🟢 Moderate |

---

## 3. High-Potential Pending Skills

These are new skill PRs with active discussion that have not yet merged — strong candidates for imminent inclusion:

### 📝 Document Typography Skill — [#514](https://github.com/anthropics/skills/pull/514)
**Author:** PGTBoos | **Status:** Open
Prevents common typographic problems in AI-generated documents: orphan word wrap (1-6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment. Addresses a universal quality gap in Claude's document output.

### 📄 ODT (OpenDocument) Skill — [#486](https://github.com/anthropics/skills/pull/486)
**Author:** GitHubNewbie0 | **Status:** Open (updated 2026-04-14)
Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT/ODS/ODF/OpenDocument/LibreOffice. Fills a gap for open-source document format support alongside the existing PDF and DOCX skills.

### 🎨 Frontend Design Skill (Improvement) — [#210](https://github.com/anthropics/skills/pull/210)
**Author:** justinwetch | **Status:** Open
Revises the existing `frontend-design` skill for clarity and actionability — ensures every instruction is something Claude can follow within a single conversation. Aims to make the skill's guidance specific enough to steer behavior without ambiguity.

### 🔍 Skill Quality & Security Analyzers — [#83](https://github.com/anthropics/skills/pull/83)
**Author:** eovidiu | **Status:** Open
Two meta-skills: `skill-quality-analyzer` (evaluates structure, documentation, examples across 5 weighted dimensions) and `skill-security-analyzer`. These are self-referential tools that improve the skill ecosystem's overall quality — a "skills about skills" approach.

### 🧪 Testing Patterns Skill — [#723](https://github.com/anthropics/skills/pull/723)
**Author:** 4444J99 | **Status:** Open (updated 2026-04-21)
Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern, naming, edge cases), and React component testing (Testing Library). Addresses a clear gap — no existing skill covers testing methodology holistically.

### 🏢 ServiceNow Platform Skill — [#568](https://github.com/anthropics/skills/pull/568)
**Author:** Vanka07 | **Status:** Open (updated 2026-04-23)
Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, and IntegrationHub. Represents the enterprise workflow automation direction.

### 🧠 AURELION Skill Suite — [#444](https://github.com/anthropics/skills/pull/444)
**Author:** Chase-Key | **Status:** Open
Four skills from the AURELION ecosystem: `aurelion-kernel` (structured thinking templates via a 5-floor cognitive framework), `aurelion-advisor`, `aurelion-agent`, and `aurelion-memory`. A structured cognitive + memory framework for professional knowledge management.

### 🧠 Shodh Memory Skill — [#154](https://github.com/anthropics/skills/pull/154)
**Author:** varun29ankuS | **Status:** Open
Persistent memory system for AI agents that maintains context across conversations. Teaches Claude when to call `proactive_context`, how to structure memories, and how to surface relevant information from prior sessions.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is platform infrastructure — specifically, org-wide skill sharing/governance (#228) and security trust boundaries (#492) — not new skill content.** The top 7 most-active PRs are all bug fixes to the skill-creator tooling (Windows compatibility, eval pipeline reliability, YAML parsing), revealing that contributors are blocked by platform friction: they want to build and share skills, but the tooling for validating, evaluating, and distributing them must mature first. Once these infrastructure gaps close, the pipeline of new skill submissions (typography, ODT, testing patterns, ServiceNow, agent memory) is ready to flow.

---

*Report generated by OWL | Data: anthropics/skills on GitHub, as of 2026-06-20*

---

# Claude Code Community Digest — 2026-06-20

---

## 1. Today's Highlights

Claude Code shipped **v2.1.183** with a meaningful safety upgrade: destructive git commands (`git reset --hard`, `git checkout -- .`, `git clean -fd`, `git stash drop`) are now blocked when the user didn't explicitly ask to discard local work, and `git commit --amend` is blocked on commits the agent didn't make this session. Beyond the release, the community is buzzing about a **critical subagent recursion bug** (#68619) causing catastrophic token burns, and a widely-requested **multi-account switching** feature for the mobile app (#36151) that has amassed 356 upvotes.

---

## 2. Releases

### v2.1.183
- **Improved auto mode safety** — Destructive git commands (`git reset --hard`, `git checkout -- .`, `git clean -fd`, `git stash drop`) are now blocked when the user didn't explicitly request discarding local work. `git commit --amend` is blocked on commits the agent didn't create during the current session.
- This is a direct response to long-standing community concern about Claude Code accidentally destroying uncommitted work or amending unrelated commits during autonomous operation.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in Claude Mobile app** | Users managing multiple Anthropic accounts (personal, team, enterprise) currently need separate email logins. This is the most-upvoted open feature request. | 👍 356 · 98 comments — by far the most popular request |
| [#68619](https://github.com/anthropics/claude-code/issues/68619) | **CRITICAL: Subagent infinite recursion & token burn** | Subagents recursively spawn 50+ levels deep, ignoring `CLAUDE_CODE_FORK_SUBAGENT=0`. Permission denials trigger further spawning instead of stopping. Compounding regressions cause catastrophic token usage. | 👍 3 · 15 comments — labeled critical, urgent attention needed |
| [#69358](https://github.com/anthropics/claude-code/issues/69358) | **No Response From API on v2.1.181 (Linux)** | Users on Linux report the API constantly returns no response. Regression suspected. | 👍 38 · 12 comments — high engagement for a recent bug |
| [#20697](https://github.com/anthropics/claude-code/issues/20697) | **Sync Skills between Claude Desktop and CLI** | Skills defined in Claude Desktop don't propagate to Claude Code CLI and vice versa, fragmenting the developer workflow. | 👍 118 · 34 comments — long-standing pain point |
| [#15721](https://github.com/anthropics/claude-code/issues/15721) | **Automatic Model Switching for Plan Mode** | Users want Claude to automatically select the most appropriate model based on task complexity during Plan Mode, rather than requiring manual switching. | 👍 36 · 20 comments |
| [#26073](https://github.com/anthropics/claude-code/issues/26073) | **Windows MSIX: "Edit Config" opens wrong config file** | On Windows, the Edit Config action opens the wrong `claude_desktop_config.json`, causing MCP servers to silently fail to load with no user-visible error. | 👍 31 · 18 comments — significant Windows UX bug |
| [#65514](https://github.com/anthropics/claude-code/issues/65514) | **Pro plan blocked despite 17% usage (1M context)** | Max/Pro users report being blocked from 1M context despite having 83% of usage remaining. Likely a billing/entitlement calculation bug. | 👍 2 · 20 comments |
| [#65832](https://github.com/anthropics/claude-code/issues/65832) | **Expose token usage to the model within sessions** | The model has no visibility into its own token consumption, leading to silent quality degradation as context fills up. | 👍 0 · 5 comments — important architectural request |
| [#60562](https://github.com/anthropics/claude-code/issues/60562) | **Server-side rate limits break parallel agent workflows** | When running parallel subagents, server-side rate limits cause failures with no transparent retry, breaking multi-agent workflows. | 👍 2 · 4 comments |
| [#67540](https://github.com/anthropics/claude-code/issues/67540) | **Code Review: claude[bot] reacts with 👀 but no check run created** | The managed Code Review integration acknowledges review requests but never produces the actual review. Affects Team plan users. | 👍 7 · 3 comments |

---

## 4. Key PR Progress

Only **1 pull request** was updated in the last 24 hours:

| # | PR | Description |
|---|----|-------------|
| [#68673](https://github.com/anthropics/claude-code/pull/68673) | **fix(scripts): break pagination when page is not full, not only when empty** | Fixes a pagination bug where the loop only terminated on completely empty pages, but continued on partially-full pages that signaled the end of available data. Important for any script paginating GitHub API results. |

*Note: The low PR activity likely reflects the weekend timing (Saturday).*

---

## 5. Feature Request Trends

Synthesizing all open issues, the most-requested feature directions are:

1. **Cross-platform skill/config sync** — Unified skill management across Claude Desktop, CLI, and mobile (#20697). Users want a single source of truth for customizations.

2. **Multi-account support** — Seamless switching between personal, team, and enterprise accounts without separate email logins (#36151). The highest-upvoted request by a wide margin.

3. **Intelligent model selection** — Automatic model switching based on task complexity, context window, and cost optimization (#15721, #65832).

4. **Transparent token/cost visibility** — Both for users (real-time dashboards) and for the model itself (in-session token awareness) to prevent silent degradation (#65832, #69436).

5. **Robust subagent orchestration** — Better rate-limit handling, recursion guards, and permission propagation for parallel agent workflows (#68619, #60562, #51289).

---

## 6. Developer Pain Points

- **Subagent reliability is the #1 crisis.** The infinite recursion bug (#68619) compounds with rate-limit failures (#60562) and permission propagation gaps (#51289) to make multi-agent workflows unreliable and expensive. Developers report losing hours of work and burning through token budgets.

- **Silent failures across the stack.** Multiple issues describe failures with no error feedback: MCP servers that show "Connected" but don't inject tools (#49019), config files that silently point to the wrong path (#26073), and background subagents that auto-deny permissions without notification (#32402).

- **Windows remains a second-class platform.** At least 5 distinct Windows-specific bugs are active: MSIX config path issues (#26073), PowerShell/bash confusion (#56452), `select.select()` incompatibility (#60825), permission preview flickering (#60885), and installation failures (#48437).

- **Usage/billing opacity.** Developers are hitting limits they don't understand — weekly usage jumping from 60% to 100% in minutes (#69436), Pro plans blocked despite low usage (#65514), and Max plan users getting long-context errors (#43276). The lack of real-time visibility is a recurring frustration.

- **Fragmented experience across surfaces.** Skills, configs, and permissions don't sync between Desktop, CLI, and mobile, forcing developers to maintain parallel setups (#20697, #36151).

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) · Digest generated 2026-06-20*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-20

## 1. Today's Highlights

OpenAI pushed three Rust CLI alpha releases in the last 24 hours (`0.142.0-alpha.4` → `.6`), signaling active iteration on the new Rust-based CLI. On the issue side, two threads are generating significant community engagement: a request for native `/rewind` checkpoint restore (166 👍) and a report that Codex's token cost per token jumped 10–20× for Plus users on `gpt-5.5` since June 16. Windows desktop stability remains a pain point, with multiple high-comment threads documenting crashes, memory bloat, and session hydration failures on the latest builds.

## 2. Releases

Three new Rust CLI alpha builds were published:

| Tag | Release |
|---|---|
| `rust-v0.142.0-alpha.6` | [Release notes](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.6) |
| `rust-v0.142.0-alpha.5` | [Release notes](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.5) |
| `rust-v0.142.0-alpha.4` | [Release notes](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.4) |

No detailed changelogs were provided in the release artifacts; the rapid cadence suggests the team is batching fixes toward a stable `0.142.0` cut.

## 3. Hot Issues

### 1. Context window exhaustion on first prompt
**[#9046](https://github.com/openai/codex/issues/9046)** — *34 comments, OPEN*
Users report hitting the model context window immediately on the very first message in a new chat. This suggests system-prompt or baseline context overhead has grown to the point where minimal headroom remains for user input. Long-running thread; no resolution yet.

### 2. `/rewind` checkpoint restore for both chat and code edits
**[#11626](https://github.com/openai/codex/issues/11626)** — *34 comments, 166 👍, OPEN*
The most upvoted active feature request. Currently, pressing Esc only rewinds conversation state but leaves Codex-applied file edits in place. Users want a single atomic checkpoint restore that reverts both conversation and workspace mutations. Strong signal for a "safe undo" workflow.

### 3. Windows Codex App fails to open after update (26.609.4994.0)
**[#27979](https://github.com/openai/codex/issues/27979)** — *27 comments, CLOSED*
The June 12 update rendered the Windows desktop app completely unlaunchable for multiple users. Closed by June 19, but related crash-on-launch reports (e.g., [#26019](https://github.com/openai/codex/issues/26019), ACCESS_VIOLATION) continue to surface, suggesting the root cause may not be fully addressed.

### 4. macOS "Full Access" mode repeatedly asks for permission
**[#28988](https://github.com/openai/codex/issues/28988)** — *24 comments, 19 👍, OPEN*
After updating to build `26.614.11602`, macOS users on Pro Max see repeated permission prompts even when Full Access is granted. This breaks trust in the permission model and blocks automated workflows.

### 5. GitHub PR review broken after workspace migration
**[#26867](https://github.com/openai/codex/issues/26867)** — *22 comments, 12 👍, OPEN*
Migrating from a Business workspace to a Personal Pro account leaves Codex PR review pointing at the deactivated workspace. Reconnecting GitHub does not resolve it. This is a data-model/auth edge case affecting users who change account types.

### 6. MCP tools invisible to non-OpenAI Responses API providers
**[#26234](https://github.com/openai/codex/issues/26234)** — *21 comments, 28 👍, OPEN*
When Codex targets Ollama, LM Studio, OpenRouter, or Bedrock, MCP server tools are silently dropped because Codex wraps them in a proprietary `{"type": "namespace"}` schema. This blocks the entire MCP ecosystem for anyone not on OpenAI's Responses API.

### 7. Codex rate-limit cost per token jumped 10–20× on `gpt-5.5`
**[#28879](https://github.com/openai/codex/issues/28879)** — *13 comments, 15 👍, OPEN*
Starting ~June 16, Plus-plan users see their 5-hour Codex budget consumed in 2–3 prompts instead of the previous 20+. Session logs confirm the `limit-%` consumed per token increased roughly 10–20× with no plan or model change. Potential billing regression.

### 8. Excessive SQLite WAL writes during streaming (640 TB/year)
**[#28224](https://github.com/openai/codex/issues/28224)** — *7 comments, 11 👍, OPEN*
Codex writes continuously to `~/.codex/logs_2.sqlite` at a rate that could consume ~640 TB/year on SSDs. The root cause is TRACE-level logs ignoring `RUST_LOG` settings, causing disk I/O on every streamed token.

### 9. Codex CLI 0.141.0 crashes with SIGTRAP on Intel macOS
**[#29000](https://github.com/openai/codex/issues/29000)** — *3 comments, 5 👍, OPEN*
A regression in `0.141.0` causes immediate SIGTRAP crashes on Intel macOS machines. Downgrading to `0.140.0` resolves it. A related report ([#29047](https://github.com/openai/codex/issues/29047)) traces the crash to `v8::Isolate::New` during tool invocation, pointing to the embedded JS engine.

### 10. Windows desktop RAM grows to 99% after idle / session hydration
**[#28980](https://github.com/openai/codex/issues/28980)**, **[#28524](https://github.com/openai/codex/issues/28524)**, **[#27848](https://github.com/openai/codex/issues/27848)** — *5 comments each, CLOSED*
A cluster of reports from the same user documenting successive Windows builds (26.609 → 26.616) consuming all 32 GB RAM, saturating CPU on launch, and failing to hydrate existing sessions. All were closed within a day, but no public root-cause was posted.

## 4. Key PR Progress

### 1. Expose service tier and reasoning effort in OTEL
**[#29155](https://github.com/openai/codex/pull/29155)** — *OPEN, code-reviewed*
Adds `service_tier` and `model_reasoning_effort` fields to the existing `codex.sse_event` `response.completed` OTEL record. Driven by NVIDIA's need to measure Fast mode usage from CLI telemetry. Minimal change, high observability value.

### 2. Allow `/resume` and settings commands during MCP startup
**[#29154](https://github.com/openai/codex/pull/29154)** — *OPEN, code-reviewed*
Removes the TUI block that treats MCP server startup as a "running task." Once merged, users can change model, permissions, personality, and service tier without waiting for slow MCP connections to finish.

### 3. Hermetic Windows Rust toolchain (gnullvm)
**[#29149](https://github.com/openai/codex/pull/29149)** — *OPEN*
First step toward a fully hermetic Windows build by switching exec artifacts to the `gnullvm` toolchain in Bazel. Addresses CI breakage from MSVC runtime changes in updated runner images ([#28940](https://github.com/openai/codex/pull/28940)).

### 4. Transport-neutral session runtime for code-mode
**[#28787](https://github.com/openai/codex/pull/28787)** — *OPEN, code-reviewed*
Refactors code-mode session state and cell lifecycle ownership into a single runtime actor, decoupling in-process implementation from transport details. Enables clean cancellation and paves the way for separate-process transports.

### 5. Remove bundled imagegen system skill → plugin
**[#29150](https://github.com/openai/codex/pull/29150)** — *CLOSED*
Extracts the embedded imagegen skill into a standalone installable plugin ([repo](https://github.com/...)). Adds a regression test ensuring no embedded imagegen remains. Part of a broader "skills as plugins" migration.

### 6. URI-native plugin roots
**[#28918](https://github.com/openai/codex/pull/28918)** — *OPEN*
Requires executor plugin capability roots to deserialize as `file://` URIs end-to-end. Cross-platform consistency for plugin path handling (macOS/Linux `file:///opt/...`, Windows `file:///C:/...`).

### 7. Preserve skill descriptions outside model context
**[#29006](https://github.com/openai/codex/pull/29006)** — *CLOSED*
Prevents a single overlong skill description from consuming a disproportionate share of the model-visible skills catalog or the `skills.list` tool response. Improves context budget utilization.

### 8. Checkpoint-backed resume and fork optimization
**[#28806](https://github.com/openai/codex/pull/28806)** — *OPEN*
Applies copy-on-write fork and checkpoint-backed resume to reduce cold `thread/resume` and `thread/fork` history work. Local validation shows significant speedups; preserves fallback for legacy rollouts.

### 9. Serialize MCP OAuth refresh transactions
**[#29017](https://github.com/openai/codex/pull/29017), [#29019](https://github.com/openai/codex/pull/29019), [#29020](https://github.com/openai/codex/pull/29020), [#29021](https://github.com/openai/codex/pull/29021)** — *OPEN (stack of 4)*
Coordinates OAuth refresh (a read-modify-write on a rotating refresh token) across concurrent Codex clients and processes. Prevents token corruption when multiple MCP servers share an OAuth store.

### 10. Align tonic and prost dependency versions
**[#29050](https://github.com/openai/codex/pull/29050)** — *OPEN*
Downgrades Tonic/Prost in the app-server integration to match the monorepo's versions, eliminating a duplicate Tokio async runtime that was causing context panics at the RPC boundary.

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|---|---|---|
| **Atomic checkpoint / rewind** | [#11626](https://github.com/openai/codex/issues/11626) (166 👍) | Strongest single feature ask; users want undo that covers both chat and filesystem |
| **MCP namespace flattening for non-OpenAI providers** | [#26234](https://github.com/openai/codex/issues/26234) (28 👍) | Blocks local/hosted model ecosystem; high engagement |
| **Background service / long-running process monitoring** | [#2062](https://github.com/openai/codex/issues/2062) (7 👍) | Users want Codex to manage builds, servers, and logs without blocking the agent |
| **Windows install location choice** | [#21074](https://github.com/openai/codex/issues/21074) | Minor but persistent; default `%LOCALAPPDATA%` doesn't work for all orgs |
| **Remote SSH path resolution** | [#29045](https://github.com/openai/codex/issues/29045) | Bootstrap should prefer the newest binary, not the first in `PATH` |

## 6. Developer Pain Points

1. **Windows desktop stability is the #1 support burden.** Across the 30-day window, at least 8 distinct issues document crashes on launch, RAM saturation to 99%, CPU pinning, and session hydration failures on Windows builds `26.602` through `26.616`. Multiple issues from the same reporter were closed rapidly without visible root-cause communication, eroding community trust.

2. **Cost accounting regression on `gpt-5.5`.** Issue [#28879](https://github.com/openai/codex/issues/28879) documents a 10–20× increase in token cost per prompt with no plan change. If confirmed, this is a billing-critical bug that directly impacts user trust and willingness to use Codex for real work.

3. **MCP tooling is silently broken for non-OpenAI backends.** The namespace serialization in [#26234](https://github.com/openai/codex/issues/26234) means users targeting Ollama, LM Studio, OpenRouter, or Bedrock get zero MCP tool calls with no error — a silent failure mode that is extremely hard to debug.

4. **Context window headroom is shrinking.** Issue [#9046](https://github.com/openai/codex/issues/9046) shows users hitting the context limit on the *first* message, likely due to growing system prompts, skill catalogs, and baseline context allocation. This directly undermines Codex's utility for large codebases.

5. **Disk I/O from SQLite logging is unchecked.** At 640 TB/year write amplification ([#28224](https://github.com/openai/codex/issues/28224)), Codex risks wearing out SSDs during normal use. The root cause — TRACE logs ignoring `RUST_LOG` — suggests a missing log-level gate in the Rust rewrite.

6. **macOS V8 engine regression on Intel.** Two reports ([#29000](https://github.com/openai/codex/issues/29000), [#29047](https://github.com/openai/codex/issues/29047)) confirm `0.141.0` crashes on Intel Macs during any tool invocation. The embedded JS engine's `SetPermissions` path is the suspect, and Apple Silicon users are unaffected — a classic platform-specific runtime bug.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-20

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the repository saw significant activity on both the issue and PR fronts. The most-discussed topics center on **agent reliability** (subagent hangs, false success reporting, and runaway destructive behavior) and a cluster of **Auto Memory quality/security bugs** filed by SandyTao520. On the PR side, contributors are pushing fixes for file corruption in `write_file`, MCP OAuth token handling, and CI security hardening against fork artifact poisoning.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|---------------|------------------|
| 1 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs** | The generalist subagent hangs indefinitely on simple tasks (e.g., folder creation). Users report waiting over an hour before cancelling. Workaround: instruct the model not to use subagents. | 7 comments, 👍8 — highest-engagement bug in the set. |
| 2 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent reports GOAL success after MAX_TURNS** | `codebase_investigator` subagent falsely reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the turn limit without doing any analysis. This hides interruptions from users and downstream tooling. | 6 comments, 👍2. |
| 3 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations (EPIC)** | Follow-up to the behavioral evals initiative (#15300). Tracks building 76+ component-level eval tests across 6 Gemini models. Critical for maintaining agent quality as the tool surface expands. | 7 comments. |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping (EPIC)** | Investigates whether AST-aware tools can reduce misaligned reads, cut token noise, and improve codebase navigation precision. Could meaningfully reduce agent turns on large codebases. | 7 comments, 👍1. |
| 5 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Deterministic redaction & reduce Auto Memory logging** | Auto Memory sends transcript content to the extraction agent *before* redaction occurs, meaning secrets can reach model context. Also flags excessive logging of skill content. A security-sensitive issue. | 5 comments. |
| 6 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** | When the extraction agent skips a low-signal session, it's never marked as processed, causing infinite re-processing loops that waste tokens and slow the memory pipeline. | 5 comments. |
| 7 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution stuck on "Waiting input"** | After a shell command finishes, Gemini CLI still shows it as active and "Awaiting user input." Affects even trivial commands that require no interaction. | 4 comments, 👍3. |
| 8 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** | Anecdotal but widely relatable: the model ignores custom skills and subagents unless explicitly told to use them, even when the task clearly matches a skill's description. | 6 comments. |
| 9 | **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should stop/discourage destructive behavior** | The model occasionally reaches for `git reset --force` or similar destructive commands when safer alternatives exist. Calls for guardrails around high-risk operations. | 3 comments, 👍1. |
| 10 | **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Subagents running without permission since v0.33.0** | After upgrading to v0.33.0, subagents (e.g., generalist) started running even when agent mode was disabled in all configs. Regression that breaks user trust in permission settings. | 2 comments. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | **[#28000](https://github.com/google-gemini/gemini-cli/pull/28000)** | **fix(core-tools): resolve Jupyter Notebook and JSON corruption in `write_file`** — Fixes a critical bug where `.ipynb` and JSON files were silently corrupted, causing Colab/JupyterLab to discard changes. | OPEN |
| 2 | **[#28053](https://github.com/google-gemini/gemini-cli/pull/28053)** | **fix(core-tools): defensive path resolution for `@`-prefixed references** — Resolves "File not found" errors when the model passes paths like `@policies/new-policies.txt` to `read_file`, `replace`, and `write_file`. Also fixes macOS test failures. | OPEN (size XL) |
| 3 | **[#27889](https://github.com/google-gemini/gemini-cli/pull/27889)** | **fix(core): refresh MCP OAuth with stored client ID** — Fixes the OAuth refresh path for auto-discovered MCP servers that lack a static `oauth.clientId` in settings. The CLI already persisted the discovered ID but wasn't using it during refresh. | OPEN (P1) |
| 4 | **[#27753](https://github.com/google-gemini/gemini-cli/pull/27753)** | **ci: validate `workflow_run` origin before consuming E2E artifact** — Closes a security gap where a fork PR could poison the chained E2E pipeline and run attacker-controlled code with repository secrets. | OPEN (P1, security) |
| 5 | **[#27664](https://github.com/google-gemini/gemini-cli/pull/27664)** | **fix(core): write MCP OAuth tokens atomically** — Writes the legacy OAuth token file through a temp file + atomic rename to prevent corruption. Fixes #27663. | **CLOSED** (merged) |
| 6 | **[#27916](https://github.com/google-gemini/gemini-cli/pull/27916)** | **fix(core): validate GCP project ID format in auto-memory** — Prevents auto-memory from storing invalid GCP display names/aliases, which caused 403 and `CONSUMER_INVALID` errors in later sessions. | OPEN |
| 7 | **[#28042](https://github.com/google-gemini/gemini-cli/pull/28042)** | **fix(skills): handle single-line descriptions in SKILL.md frontmatter** — Fixes skill discovery silently failing when the `description` field has no blank line before the closing `---`. Affected skills were invisible in `/skills list`. | OPEN (help wanted) |
| 8 | **[#28033](https://github.com/google-gemini/gemini-cli/pull/28033)** | **fix(mcp): longest-prefix matching for MCP server names with underscores** — Fixes incorrect tool routing when MCP server names contain underscores (e.g., `my_server_tool`). The old regex stopped at the first `_`. Fixes #27981. | OPEN |
| 9 | **[#28009](https://github.com/google-gemini/gemini-cli/pull/28009)** | **feat: add `eval:inventory` CLI command** — Adds `npm run eval:inventory` for listing eval cases under `evals/`, with grouped text reports. Follow-up PR #28030 adds `--json` output for CI consumption. | **CLOSED** (merged) |
| 10 | **[#25385](https://github.com/google-gemini/gemini-cli/pull/25385)** | **fix(cli): correct Thai/Lao SARA AM width mismatch** — Fixes cursor desync, output duplication, and erratic line jumping in tmux caused by `string-width@8.1.0` merging Consonant + SARA AM into one grapheme cluster while terminals render it as 2 columns. | **CLOSED** (merged) |

---

## 5. Feature Request Trends

1. **Smarter tool and skill utilization** — Multiple issues (#21968, #21432) highlight that the model underuses custom skills, subagents, and CLI self-knowledge. The community wants the agent to autonomously recognize when a skill or subagent applies.

2. **AST-aware codebase tools** — EPICs #22745 and #22746 explore AST-aware file reads, search, and mapping to reduce misaligned reads, cut token usage, and improve navigation precision. This is a recurring theme for developers working in large repositories.

3. **Agent self-awareness and transparency** — Issue #21432 requests that the agent understand its own CLI flags, hotkeys, and execution model well enough to serve as its own expert guide. Related: #22323's false success reporting undermines trust in agent status.

4. **Destructive operation guardrails** — Issue #22672 calls for the agent to prefer safer alternatives to `git reset --force` and similar commands, especially around databases and version control.

5. **Browser agent resilience** — Issues #22232 and #22267 request automatic session takeover, lock recovery, and proper `settings.json` override support for the browser subagent.

6. **Evaluation infrastructure maturity** — EPICs #24353 and #23166 track building robust, stable internal evaluations (component-level evals, stabilized project evals) to catch regressions as the agent surface grows.

---

## 6. Developer Pain Points

- **Agent hangs and false completion signals** — The most acute frustration. Subagents hang indefinitely (#21409), shell commands get stuck awaiting input (#25166), and agents report success when they actually timed out (#22323). These erode trust in autonomous operation.

- **Auto Memory quality and security** — A cluster of issues (#26525, #26522, #26523, #26516) reveal systemic problems: secrets reach model context before redaction, low-signal sessions are retried forever, and invalid patches are silently skipped. Users who rely on memory for context continuity are directly impacted.

- **Permission and configuration regressions** — Subagents running despite being disabled (#22093), browser agent ignoring `settings.json` overrides (#22267), and symlinked agent definitions not being recognized (#20079) all point to configuration not being respected consistently.

- **File corruption in core tools** — The `write_file` tool corrupting Jupyter Notebooks and JSON files (#28000) and `@`-prefixed path resolution failures (#28053) are critical data-integrity bugs that can silently destroy user work.

- **MCP tool routing edge cases** — Server names with underscores causing misrouted tool calls (#28033) and OAuth refresh failures for auto-discovered servers (#27889) create friction for users integrating MCP servers.

- **Terminal rendering issues** — Thai/Lao script rendering bugs (#25385), terminal resize flicker (#21924), and external editor corruption (#24935) affect users in non-English locales and those using tmux or external editors.

---

*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · Digest generated 2026-06-20*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-20

---

## 1. Today's Highlights

Copilot CLI shipped **v1.0.64-1**, adding a `/branch` alias for `/fork`, an experimental `--worktree` flag for git worktree–based sessions, and tab completion for `/agent`. The issue tracker remained active with a wide range of newly opened and recently updated bugs, including hangs on UI interaction, silent hook bypasses under parallel tool calls, and several UI/visibility regressions. No pull requests were updated in the 24-hour window.

---

## 2. Releases

### v1.0.64-1

| Type | Description |
|------|-------------|
| **Added** | `/branch` alias for `/fork`, matching Claude Code's command naming |
| **Experimental** | New `--worktree [name]` / `-w` flag — creates or reuses a git worktree under `<repo>.worktrees/` and starts the session inside it (enable with `/experimental`) |
| **Added** | Tab completion for `/agent n` |

---

## 3. Hot Issues

| # | Status | Area(s) | Title | Why It Matters | 👍 / Comments |
|---|--------|---------|-------|----------------|---------------|
| [#1665](https://github.com/github/copilot-cli/issues/1665) | ✅ Closed | Plugins, Config | Support Copilot CLI Plugins Scoped to Project or Repository | Scoped plugins are critical for monorepos and team-level customization; built-in global-only loading is a significant limitation. Strong community demand (17 👍, 7 comments). | 👍 17 · 💬 7 |
| [#731](https://github.com/github/copilot-cli/issues/731) | ✅ Closed | Sessions | Incompatibility with Z shell and direnv (`Invalid session ID …`) | Affected many Zsh + direnv users for over six months. High engagement (14 👍, 13 comments) indicates this is pain-point for a large user segment. | 👍 14 · 💬 13 |
| [#3371](https://github.com/github/copilot-cli/issues/3371) | 🔓 Open | Networking | CLI silently hangs on stalled HTTPS sockets to `api.github.com` | Stalled connections with zero feedback create a terrible UX — users can't distinguish "working" from "hung." Affects any flaky network scenario. | 👍 1 · 💬 1 |
| [#2893](https://github.com/github/copilot-cli/issues/2893) | 🔓 Open | Permissions, Plugins | `preToolUse` hooks silently bypassed under parallel tool calls | Security-critical: permission hooks being skipped without any warning defeats the entire purpose of sandboxing. Multiplied by Claude Code's move toward parallel execution. | 👍 0 · 💬 2 |
| [#1901](https://github.com/github/copilot-cli/issues/1901) | 🔓 Open | Non-interactive, Agents | `autopilot_fleet` plan approval may not activate fleet mode immediately (race condition) | Fleet mode race condition means users selecting autopilot get an experience that doesn't match expectations — a trust issue for the flagship feature. | 👍 0 · 💬 2 |
| [#3455](https://github.com/github/copilot-cli/issues/3455) | 🔓 Open | Windows, Networking, MCP | `github-mcp-server` fails with "fetch failed" since 1.0.51 (Windows) | Regression on Windows breaks a core MCP server built into the CLI. Introduced in 1.0.51 with no fix since late May. | 👍 0 · 💬 2 |
| [#3866](https://github.com/github/copilot-cli/issues/3866) | 🔓 Open | Theming / Accessibility | "Thinking…" text unreadable on dark backgrounds | Hardcoded dim foreground on a recent update blocks visibility for dark-theme users — a basic accessibility regression. | 👍 0 · 💬 0 |
| [#3867](https://github.com/github/copilot-cli/issues/3867) | 🔓 Open | — | No context window visibility or compaction notification | Silent surprise compaction can lose context without the user understanding why — needs inline token meter or notification similar to how models like Claude Code handle it. | 👍 0 · 💬 0 |
| [#3864](https://github.com/github/copilot-cli/issues/3864) | 🔓 Open | Plugins, Config | Plugin `cache_path` stored as absolute path breaks Docker/multi-HOME | Hardcoded absolute `$HOME` paths silently prevent `sessionStart` hooks from firing in containers — a critical issue for Dev Container workflows. | 👍 0 · 💬 0 |
| [#3868](https://github.com/github/copilot-cli/issues/3868) | 🔓 Open | — | App hangs when right-clicking a chat/session with multiple open | UI freeze with no recovery path makes multi-session management a paper cut that blocks real work. | 👍 0 · 💬 0 |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. Activity is currently concentrated on issue triage and release work.

---

## 5. Feature Request Trends

Synthesized from the full 15-item issue set:

| Theme | Representative Issues | Direction |
|-------|----------------------|-----------|
| **Project-scoped configuration** | [#1665](https://github.com/github/copilot-cli/issues/1665), [#3835](https://github.com/github/copilot-cli/issues/3835) | Plugins, MCP servers, and sandbox settings scoped per-repo or per-project rather than global |
| **Worktree & multi-session UX** | [#3865](https://github.com/github/copilot-cli/issues/3865) (worktree-aware tool), [#3868](https://github.com/github/copilot-cli/issues/3868) | Better worktree integration and stable multi-session navigation |
| **Context visibility** | [#3867](https://github.com/github/copilot-cli/issues/3867) in the GitHub App, interest across CLI issues | Inline token/context window tracking and compaction notifications |
| **SCM parity** | `/branch` alias in v1.0.64-1 | Matching Claude Code's command naming conventions |
| **Sandbox / permissioning accuracy** | [#3861](https://github.com/github/copilot-cli/issues/3861), [#2893](https://github.com/github/copilot-cli/issues/2893) | Aligning docs with behavior and hardening hook reliability under parallel execution |
| **MCP configuration unification** | [#3835](https://github.com/github/copilot-cli/issues/3835) (VSCode schema compat) | Single shared `mcp.json` schema between VS Code and Copilot CLI |

---

## 6. Developer Pain Points

| Pain Point | Detail |
|---|---|
| **Silent failures across the board** | Hooks bypassed without warning ([#2893](https://github.com/github/copilot-cli/issues/2893)), stalled sockets with zero output ([#3371](https://github.com/github/copilot-cli/issues/3371)), and silent `sessionStart` hook suppression in Docker ([#3864](https://github.com/github/copilot-cli/issues/3864)) — all share the pattern of no user-facing feedback when something goes wrong. |
| **Configuration does not travel** | `cache_path` as absolute path ([#3864](https://github.com/github/copilot-cli/issues/3864)), global-only plugins ([#1665](https://github.com/github/copilot-cli/issues/1665)), and divergent MCP schemas with VSCode ([#3835](https://github.com/github/copilot-cli/issues/3835)) make it difficult to share environments across containers, hosts, and team members. |
| **Context opacity** | Users can't see how close they are to the context window limit, and compaction happens silently ([#3867](https://github.com/github/copilot-cli/issues/3867)). This is a deep source of unpredictable prompt behavior and lost work. |
| **Windows regressions linger** | The `github-mcp-server` fetch failure on Windows has gone unresolved for a month since 1.0.51 ([#3455](https://github.com/github/copilot-cli/issues/3455)). |
| **Accessibility / theming regressions** | Hardcoded thinking text color ([#3866](https://github.com/github/copilot-cli/issues/3866)) — a quick fix that affects many dark-theme users but slipping through. |
| **UI freezes on multi-session** | Right-click hang with multiple chats open ([#3868](https://github.com/github/copilot-cli/issues/3868)) suggests the session list component isn't battle-tested under load. |

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI — Community Digest
**Date: 2026-06-20 | Source: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. Today's Highlights

No new releases landed in the past 24 hours. The most active piece of the day is a freshly opened PR (#2463) that fixes a long-standing proxy issue — `FetchURL` was ignoring system `HTTP_PROXY` / `HTTPS_PROXY` environment variables because `aiohttp.ClientSession` doesn't read them by default, causing `Connection reset by peer` failures in corporate/restricted networks. Issue activity was quiet with zero new or updated issues.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

No issues were created or updated in the last 24 hours. The issue tracker is currently quiet.

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| 1 | **[#2463](https://github.com/MoonshotAI/kimi-cli/pull/2463)** — `fix: respect system proxy settings in FetchURL` | 🟢 Open | Patches `FetchURL` to honor `HTTP_PROXY` / `HTTPS_PROXY` (and lowercase variants) env vars, which `aiohttp.ClientSession` ignores by default. This resolves `Connection reset by peer` errors in environments that require a proxy for outbound traffic. |

---

## 5. Feature Request Trends

With no new issue activity today, the current feature-request landscape remains unchanged from prior digests. The proxy-support fix in PR #2463 signals that **network-environment compatibility** (corporate proxies, VPNs, air-gapped setups) is an area the community is actively pushing for. Watch this space for follow-up requests around configurable timeout, retry policies, and custom CA-bundle support.

---

## 6. Developer Pain Points

- **Proxy / corporate-network failures** — The most visible pain point today. Developers behind corporate firewalls or VPNs hit `Connection reset by peer` because `aiohttp` silently ignores system proxy env vars. PR #2463 directly addresses this.
- **Silent misconfiguration** — Because the failure mode is a generic connection error rather than a clear "proxy not configured" message, debugging is unnecessarily time-consuming. A more explicit warning or auto-detection of proxy env vars would improve DX.

---

*Generated by OWL — your AI developer-tools analyst.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-20

---

## 1. Today's Highlights

No new releases landed in the past 24 hours, but the community remains highly active with 50 issues and 50 PRs updated. The most-discussed topic is the **Memory Megathread** (#20695), now at 98 comments and 71 upvotes, as the team rallies the community to collect heap snapshots to diagnose scattered memory issues. On the PR side, a wave of automated cleanup PRs merged today — covering payment webhook idempotency, Stripe refund bugs, IDOR fixes, and an AI SDK 6 migration — while new feature PRs for **skill loading**, **Android/Termux support**, and an **inline skill picker** opened.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | **[#20695] Memory Megathread** — [Link](https://github.com/anomalyco/opencode/issues/20695) | Centralizes all memory-leak reports into one place; maintainers explicitly ask for heap snapshots, not LLM-generated guesses. | 98 comments, 👍71 — the single most active issue. Shows memory stability is a top-tier concern for power users. |
| 2 | **[#2242] Agent sandboxing** — [Link](https://github.com/anomalyco/opencode/issues/2242) | Users want to restrict agent terminal access to the project directory (like macOS Seatbelt in gemini-cli/codex-cli). No equivalent exists today. | 74 comments, 👍55 — long-standing request reflecting growing security awareness. |
| 3 | **[#988] MCP remote via OAuth** — [Link](https://github.com/anomalyco/opencode/issues/988) | Would let users install an MCP server by entering a URL and completing an OAuth flow — no secrets in config or env vars. | 39 comments, 👍95 — highest upvote count in the set; signals strong demand for frictionless, secure MCP onboarding. |
| 4 | **[#16017] Go plan usage/balance API** — [Link](https://github.com/anomalyco/opencode/issues/16017) | Expose subscription usage data (rolling/weekly/monthly) via a public API endpoint, matching what the dashboard already shows. | 19 comments, 👍70 — high interest from Go-plan subscribers wanting programmatic access to their usage data. |
| 5 | **[#32444] GLM-5.2 thinking-effort variants missing** — [Link](https://github.com/anomalyco/opencode/issues/32444) | A blanket `"glm"` exclusion in `variants()` means GLM-5.2 users can't select High/Max thinking levels despite Z.AI supporting them. | 6 comments, 👍12 — niche but growing as GLM adoption increases. |
| 6 | **[#32965] CPU spins at 100% indefinitely** — [Link](https://github.com/anomalyco/opencode/issues/32965) | On large multi-module projects, the main thread pins a core at ~100% with no logs or I/O; ignores SIGTERM. Fresh report from today. | 4 comments — critical reliability bug; likely to get rapid attention. |
| 7 | **[#33028] Subagents hang after bash tool call** — [Link](https://github.com/anomalyco/opencode/issues/33028) | Subagents (and primary agent) hang indefinitely after a quick bash call; stream never times out. Reproduced on two different models. | 2 comments — new today, potentially related to the CPU-spin issue above. |
| 8 | **[#29829] Desktop missing console terminal & "Open in Explorer"** — [Link](https://github.com/anomalyco/opencode/issues/29829) | Since v1.15.6 the Desktop app lost the embedded console terminal panel and the file-explorer shortcut. | 4 comments, 👍13 — desktop users are frustrated by feature regression. |
| 9 | **[#31815] `opencode web` xdg-open error in containers** — [Link](https://github.com/anomalyco/opencode/issues/31815) | Running `opencode web` in Docker/Podman without a desktop throws an ugly `ENOENT: xdg-open` error. | 4 comments, 👍4 — affects headless/container workflows; a small fix with outsized UX impact. |
| 10 | **[#17223] Cost tracking broken for custom providers** — [https://github.com/anomalyco/opencode/issues/17223](https://github.com/anomalyco/opencode/issues/17223) | Custom providers via `@ai-sdk/openai-compatible` always show `$0.00` spent, regardless of actual token usage. | 5 comments, 👍19 — important for teams running private or proxy endpoints who need cost visibility. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | **[#33038] feat: native on-demand skill loading** — [Link](https://github.com/anomalyco/opencode/pull/33038) | Introduces `core`/`non-core` skill frontmatter, `skills.autoLoad` config (`all`/`core`/`none`), a `/skills` TUI dialog, and backend flow to load non-core skills on demand. | **Closed** (merged) |
| 2 | **[#33019] feat(tui): inline skill picker** — [Link](https://github.com/anomalyco/opencode/pull/33019) | Typing `$` as its own token opens a minimal TUI skill picker flow. Complements the skill-loading feature above. | **Open** |
| 3 | **[#33010] feat: Android/Termux support** — [Link](https://github.com/anomalyco/opencode/pull/33010) | Maps `os.platform() === "android"` in `platformMap` for postinstall, wrapper, and publish scripts. Closes four long-standing issues (#961, #10504, #21043, #30248). | **Open** |
| 4 | **[#33040] fix(tui): render console org load errors inline** — [Link](https://github.com/anomalyco/opencode/pull/33040) | Prevents the "Switch org" dialog from tearing down on API failure; shows the error inline instead. | **Closed** (merged) |
| 5 | **[#33039] tweak: remove steering wrapper that can bust cache** — [Link](https://github.com/anomalyco/opencode/pull/33039) | Sends prompts submitted during an active run as normal user messages instead of wrapping them in a steering-only system reminder, preserving cache efficiency. | **Closed** (merged) |
| 6 | **[#32933] chore: AI SDK 6 migration & flag cleanup** — [Link](https://github.com/anomalyco/opencode/pull/32933) | Migrates `.nullish()` → `.optional()` in OpenAI Responses provider schemas, plus general code hygiene across opencode and core packages. | **Closed** (merged) |
| 7 | **[#33030] fix: forward topK to Bedrock Converse** — [Link](https://github.com/anomalyco/opencode/pull/33030) | The Bedrock Converse path silently dropped the `topK` generation option; this PR forwards it via `additionalModelRequestFields`. | **Open** |
| 8 | **[#28403] fix: payment webhook idempotency** — [Link](https://github.com/anomalyco/opencode/pull/28403) | Adds idempotency checks to Stripe `checkout.session.completed` and `invoice.paid` webhook handlers to prevent duplicate credit grants. | **Closed** (merged) |
| 9 | **[#28400] fix: duplicate refund & actual refund amount** — [https://github.com/anomalyco/opencode/pull/28400](https://github.com/anomalyco/opencode/pull/28400) | Fixes partial-refund silent drops and ensures the actual refund amount is recorded in the `charge.refunded` webhook handler. | **Closed** (merged) |
| 10 | **[#28396] fix: verify payment ownership before receipt URL** — [https://github.com/anomalyco/opencode/pull/28396](https://github.com/anomalyco/opencode/pull/28396) | Closes an IDOR vulnerability where `Billing.generateReceiptUrl` passed a caller-supplied `paymentID` to Stripe without verifying workspace ownership. | **Closed** (merged) |

---

## 5. Feature Request Trends

1. **Agent Sandbox / Security Boundaries** — The most upvoted request (#988, 👍95) and a long-running discussion (#2242, 👍55) both center on restricting what the agent can access. OAuth-based MCP installation and filesystem sandboxing are the two pillars of this theme.

2. **Skills System Evolution** — Multiple PRs (#33038, #33019) and issues (#33011 requesting Build/Plan buttons) show the community wants a richer, more discoverable skills workflow — on-demand loading, inline pickers, and fewer mode-switching traps.

3. **Platform Expansion** — Android/Termux support (#33010), container-friendly `opencode web` (#31815), and WSL2/VS Code context sync (#29570) all point to demand for OpenCode everywhere, not just macOS/Linux desktop.

4. **Cost & Usage Transparency** — Custom-provider cost tracking (#17223) and a Go-plan usage API (#16017) reflect that as teams scale, they need programmatic and UI-level visibility into spending.

5. **Voice Input** — A local-first speech-to-text feature (#30634) was requested, aligning with broader industry movement toward multimodal prompting.

---

## 6. Developer Pain Points

- **Memory & Stability** — The megathread (#20695), CPU-spin bug (#32965), and subagent hangs (#33028) form a cluster of reliability issues that erode trust, especially on large projects.
- **Desktop App Regression** — Loss of the console terminal and "Open in Explorer" (#29829), plus lag in v1.17.8 (#32746), suggest the desktop client needs dedicated QA attention.
- **Custom Provider Gaps** — Cost tracking (#17223), missing reasoning/thinking field schemas (#33013), and the GLM-5.2 variant bug (#32444) all indicate that non-first-class providers get second-class treatment.
- **Payment & Auth Friction** — A user reports paying but still being locked out (#30276); meanwhile, multiple webhook and IDOR fixes landed today, confirming the billing surface has had real bugs.
- **Keyboard Shortcut Conflicts** — Ctrl+Z suspending the app instead of undoing text (#24817) on Linux is a classic TUI-vs-OS conflict that trips up developers constantly.

---

*Data source: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) · Digest generated by OWL for 2026-06-20*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-20

---

## 1. Today's Highlights

Pi shipped **v0.79.8** with selective provider base entry points, letting SDK users pair `@earendil-works/pi-ai/base` and `@earendil-works/pi-agent-core/base` with explicit provider registration to keep bundled applications lean. The issue tracker saw heavy activity around **streaming UX bugs** (forced scroll-to-bottom during markdown rendering), **tool-call reliability** across providers (DeepSeek V4, Moonshot/Kimi), and **session/extension loading performance**. Several PRs landed addressing fuzzy-edit data loss, freecode-web adapter OSC integration, and OpenRouter Fusion alias support.

---

## 2. Releases

### v0.79.8
- **Selective provider base entry points** — SDK users can now pair `@earendil-works/pi-ai/base` and `@earendil-works/pi-agent-core/base` with explicit provider registration. This prevents bundled applications from including unused provider transports, reducing bundle size for deployments that only target a subset of providers.
  - [Release notes](https://github.com/badlogic/pi-mono)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#5825](https://github.com/earendil-works/pi/issues/5825) | **Streaming markdown forces scroll to bottom** | When `clear on shrink` is enabled, Pi forcibly scrolls to the bottom during streaming markdown output, making it impossible to read earlier content while the agent is still generating. This is a core UX regression for long-form responses. | 24 comments — the most-discussed issue in the last 24h. Users find it highly disruptive; PR [#5846](https://github.com/earendil-works/pi/pull/5846) is already open to fix it. |
| [#5897](https://github.com/earendil-works/pi/issues/5897) | **Unavailable models offered in Copilot integration** | Users logging in via Copilot subscription are shown models (Opus variants, GPT nano) that don't actually work, leading to confusion and failed requests. | 9 comments. Closed quickly — likely a model-list filtering issue on the Copilot provider side. |
| [#5899](https://github.com/earendil-works/pi/issues/5899) | **Edit tool fuzzy match silently rewrites entire file (data loss)** | When the `edit` tool matches fuzzily (trailing whitespace, smart quotes, NFKC forms), it rewrites the *entire* file in normalized form — stripping whitespace and folding Unicode on untouched lines. This is a **data loss** bug. | 2 comments but high severity. PR [#5898](https://github.com/earendil-works/pi/pull/5898) already merged to fix. |
| [#5811](https://github.com/earendil-works/pi/issues/5811) | **DeepSeek V4: valid toolCall/toolResult pair serializes to invalid role:tool chain** | DeepSeek V4 returns a 400 error even when Pi's context contains valid tool call/result pairs, due to DeepSeek's strict role ordering requirements during thinking/tool replay. | 3 comments. Highlights ongoing friction with DeepSeek's non-standard tool-calling behavior. |
| [#5871](https://github.com/earendil-works/pi/issues/5871) | **Anthropic OAuth-token detection hardcoded to `sk-ant-oat`** | The OAuth detection for Anthropic providers relies on a hardcoded substring check, making it impossible for users with different OAuth token formats to use Bearer auth without workarounds. | 2 comments, still open. Affects users managing Anthropic credentials programmatically. |
| [#5804](https://github.com/earendil-works/pi/issues/5804) | **Fast Sessions** | Sessions are stored as JSONL files by default, causing slow load/search times. The team wants to support SQLite session storage while keeping JSONL as default. | 2 comments, 👍1. Acknowledged as important for users with large session histories. |
| [#5854](https://github.com/earendil-works/pi/issues/5854) | **Enable prompt caching for Mistral provider** | Mistral's API now supports prompt caching, but Pi's Mistral provider doesn't expose this capability. | 3 comments. Closed — likely addressed or in progress. |
| [#5893](https://github.com/earendil-works/pi/issues/5893) | **Bash variable escaping behaves oddly on Windows/WSL** | When using WSL bash as the shell path, bash variables are expanded too early by the agent, requiring manual `\$` escaping. | 3 comments. A Windows/WSL-specific pain point affecting cross-platform users. |
| [#5904](https://github.com/earendil-works/pi/issues/5904) | **Bash tool `cwd` parameter silently dropped** | The `bash` tool schema doesn't include a `cwd` field, so when models pass `cwd` it's silently ignored — problematic when the session cwd is a deleted worktree. | 1 comment. A correctness issue that could lead to agents operating in the wrong directory. |
| [#5822](https://github.com/earendil-works/pi/issues/5822) | **Moonshot/Kimi models reject Pi tool schemas with 400** | Two distinct schema validation failures: `allOf` if/then conflicts and missing `type` on properties. Moonshot's validator is stricter than most providers. | 2 comments. Closed. Part of a broader pattern of provider-specific schema incompatibilities. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#5846](https://github.com/earendil-works/pi/pull/5846) | **fix(tui): stabilize streaming code fence rendering** | Fixes [#5825](https://github.com/earendil-works/pi/issues/5825) — addresses the forced scroll-to-bottom during markdown streaming, particularly when `clear on shrink` is enabled. | **OPEN** — directly targets the most-discussed issue. |
| [#5898](https://github.com/earendil-works/pi/pull/5898) | **fix(coding-agent): preserve untouched content in fuzzy edit matches** | Fixes [#5899](https://github.com/earendil-works/pi/issues/5899) — prevents the `edit` tool from rewriting the entire file in normalized form when only a fuzzy match occurs. Preserves trailing whitespace, smart quotes, and NFKC forms on untouched lines. | **CLOSED** (merged). |
| [#5900](https://github.com/earendil-works/pi/pull/5900) | **feat(coding-agent): emit OSC 9998/9999 for freecode-web adapter** | Adds a `WebBridge` that translates `AgentSession` events into OSC 9998 (status/bg/agents) and OSC 9999 (used/limit/cost) frames for the freecode-web PTY parser, enabling accurate status/cost/context display in the web UI. | **CLOSED** (merged). |
| [#5509](https://github.com/earendil-works/pi/pull/5509) | **feat: Add Amazon Bedrock Mantle OpenAI Responses provider** | Adds a new provider for Amazon Bedrock Mantle's OpenAI Responses API, supporting GPT 5.5 and 5.4 models. Modeled after Azure's OpenAI Responses provider. | **OPEN** — expands Pi's enterprise cloud provider coverage. |
| [#5866](https://github.com/earendil-works/pi/pull/5866) | **feat(ai): add OpenRouter Fusion alias** | Adds `openrouter/fusion` as a synthetic OpenRouter router alias, matching the existing `openrouter/auto` pattern. Fusion is added explicitly because OpenRouter metadata doesn't advertise `tools` for this router. | **CLOSED** (merged). |
| [#5356](https://github.com/earendil-works/pi/pull/5356) | **docs: add containerization guide and Gondolin example** | Adds documentation for running Pi in containers, with a Gondolin-specific example. | **CLOSED** (merged). |
| [#4794](https://github.com/earendil-works/pi/pull/4794) | **chore: run pi-test through tsx** | Fixes test runner to use `tsx` so TypeScript source tree imports resolve correctly through workspace package exports rather than falling back to compiled dist files. | **CLOSED** (merged). |

---

## 5. Feature Request Trends

Based on issues and PRs from the last 24h, the most-requested feature directions are:

1. **Session storage performance & flexibility** — Users want SQLite-backed session storage for faster load/search, while retaining JSONL as the default. This is a scalability concern as session histories grow. ([#5804](https://github.com/earendil-works/pi/issues/5804))

2. **Provider extensibility & new provider support** — Active demand for new providers (Amazon Bedrock Mantle, OpenRouter Fusion) and better handling of provider-specific quirks (DeepSeek thinking format, Mistral prompt caching, Moonshot schema validation). PRs [#5509](https://github.com/earendil-works/pi/pull/5509) and [#5866](https://github.com/earendil-works/pi/pull/5866) reflect this.

3. **Selective provider bundling** — The v0.79.8 release directly addresses SDK users who want to avoid bundling unused provider transports. This is a growing concern as Pi's provider list expands.

4. **HITL (Human-in-the-Loop) tool-call interrupts** — A contribution proposal ([#5901](https://github.com/earendil-works/pi/issues/5901)) requests durable human-in-the-loop approval for tool calls in headless SDK integrations, similar to LangGraph/LangChain HITL middleware.

5. **Configurable compaction behavior** — Per-model `sequentialCompaction` flag for resource-constrained local models ([#5795](https://github.com/earendil-works/pi/issues/5795)), plus general compaction efficiency improvements ([#5845](https://github.com/earendil-works/pi/issues/5845)).

6. **Max thinking level exposure** — Users want to configure maximum thinking/reasoning levels for Claude Opus/Sonnet models that support it ([#5831](https://github.com/earendil-works/pi/issues/5831)).

---

## 6. Developer Pain Points

1. **Streaming UX disruptions** — The forced scroll-to-bottom during markdown streaming ([#5825](https://github.com/earendil-works/pi/issues/5825)) is the single most-discussed issue, indicating that real-time output rendering remains a friction point for users who read while agents generate.

2. **Tool-call reliability across providers** — Multiple issues highlight that tool-calling behavior varies significantly across providers: DeepSeek V4's strict role ordering ([#5811](https://github.com/earendil-works/pi/issues/5811)), Moonshot/Kimi's strict schema validation ([#5822](https://github.com/earendil-works/pi/issues/5822)), and Codex subscription auth limitations ([#5152](https://github.com/earendil-works/pi/issues/5152)). Developers are spending significant effort working around provider-specific quirks.

3. **Edit tool data loss** — The fuzzy-match rewrite behavior ([#5899](https://github.com/earendil-works/pi/issues/5899)) is a serious correctness bug that can silently corrupt files. While now fixed, it underscores the risk of normalization in file-editing tools.

4. **Windows/WSL cross-platform issues** — Bash variable escaping problems specific to WSL ([#5893](https://github.com/earendil-works/pi/issues/5893)) and the MinGW file-write failure ([#3672](https://github.com/earendil-works/pi/issues/3672)) indicate that Windows developers face recurring friction.

5. **Extension loading performance** — With 50 extensions, startup can take up to 4 seconds ([#5380](https://github.com/earendil-works/pi/issues/5380)). Extension caching and faster resume/clone are active areas of improvement.

6. **Silent parameter dropping** — The `bash` tool silently ignoring the `cwd` parameter ([#5904](https://github.com/earendil-works/pi/issues/5904)) is a class of bug where models pass valid parameters that are silently discarded, leading to agents operating in unexpected directories without any error signal.

---

*Data source: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · Generated by OWL for 2026-06-20*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-20

---

## 1. Today's Highlights

June 19–20 was a heavy bug-fix sprint: maintainer **tt-a1i** landed or drove to closure at least **10 PRs** in a single day, sweeping through qqbot channel stability, grep parsing, sandbox mount handling, settings schemas, and shell self-kill guards. No new version was released; the focus was on hardening patches merged into the main branch. On the issue side, long-context/multi-agent reliability and configuration discoverability continued to dominate community frustration.

---

## 2. Releases

**None.** No new tagged release dropped in the past 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| [5267](https://github.com/QwenLM/qwen-code/issues/5267) | `context.fileName` in settings doesn't work (9 comments) | Users trying to attach custom context files to every prompt hit a configuration gap that undermines one of Qwen Code's most-promoted agent customization features. High engagement signals this is a real workflow blocker. |
| [5180](https://github.com/QwenLM/qwen-code/issues/5180) | Subagent crashes mid-task in a 12-hour multi-agent session (6 comments) | A master-session-as-PM pattern collapses when the subagent dies — no crash propagation back to the parent. This is the #1 reliability issue for anyone pushing Qwen Code toward autonomous multi-agent workflows. |
| [5142](https://github.com/QwenLM/qwen-code/issues/5142) | Virtualized history mode hides conversation history (5 comments) | Core UX regression: the chat history is invisible until a key is pressed, making the default interactive experience confusing for new users — especially those migrating from Claude Code. |
| [5422](https://github.com/QwenLM/qwen-code/issues/5422) | `PostToolUseOutput.updatedMCPToolOutput` declared but never consumed (4 comments) | A dead hook field means MCP tool output cannot be rewritten by hooks. Developers building MCP extensions on the hooks system will silently fail; the field should either work or be removed. |
| [5239](https://github.com/QwenLM/qwen-code/issues/5239) | No bidirectional communication between subagent and parent session (4 comments) | Subagent completion notifications are absent. Users resort to file-based polling hacks, indicating the multi-agent architecture needs a first-class event channel. |
| [4063](https://github.com/QwenLM/qwen-code/issues/4063) | 12 structural problems in core+cli architecture — `@google/genai` types permeate 136 files (3 comments, 👍1) | A sweeping technical debt inventory. The coupling to Google GenAI types makes it hard to swap providers and is a systemic risk flagged by contributors. |
| [4814](https://github.com/QwenLM/qwen-code/issues/4814) | Custom Provider users struggle to add new models via UI wizard (5 comments) | Onboarding friction for the "Custom Provider" path — Third-party providers get guided model discovery, but Custom Provider users are left guessing at API shapes. |
| [5007](https://github.com/QwenLM/qwen-code/issues/5007) | ACP mode doesn't expose skills from `~/.qwen/skills` (3 comments) | ACP integration (e.g., Zed IDE) silently drops user-installed skills, breaking the extension story for IDE-bound users. |
| [5225](https://github.com/QwenLM/qwen-code/issues/5225) | Request: automatic Flash / Pro model switching per task (3 comments) | Cost optimization gap — competing agents (Cursor, etc.) already auto-route easy tasks to cheaper models. Absence is a competitive drawback. |
| [3361](https://github.com/QwenLM/qwen-code/issues/3361) | Agent reads shell output as empty despite successful execution (5 comments) | Affects OpenAI-compatible API users; the agent breaks its own reasoning loop when it can't correctly parse tool output, leading to wasteful re-execution. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|----|--------|-------------|
| [5398](https://github.com/QwenLM/qwen-code/pull/5398) | feat(web-shell): add extension management | **Merged** | Web shell and daemon now support `/extensions install` — unifying extension management across CLI and web surfaces. |
| [5423](https://github.com/QwenLM/qwen-code/pull/5423) | fix(hooks): remove dead `updatedMCPToolOutput` field | **Merged** | Fixes [5422](https://github.com/QwenLM/qwen-code/issues/5422). Cleans up the misleading hook interface field that was never consumed. |
| [5409](https://github.com/QwenLM/qwen-code/pull/5409) | fix(core): block broad shell self-kill commands | **Merged** | Adds a guard layer that detects `taskkill`, `killall`, `pkill` patterns before permission logic runs, preventing the agent from killing its own process. |
| [5415](https://github.com/QwenLM/qwen-code/pull/5415) | fix(channel): bound qqbot gateway reconnect retries | **Merged** | Fixes [5410](https://github.com/QwenLM/qwen-code/issues/5410). Reconnect attempts now correctly increment toward `maxReconnectAttempts`, preventing infinite 60s reconnection loops on repeated gateway failures. |
| [5414](https://github.com/QwenLM/qwen-code/pull/5414) | fix(channel): keep qqbot token refresh retrying | **Merged** | Fixes [5411](https://github.com/QwenLM/qwen-code/issues/5411). Token refresh retries indefinitely (every 60s) after consecutive failures instead of silently stopping after two failures. Critical for long-running daemon reliability. |
| [5416](https://github.com/QwenLM/qwen-code/pull/5416) | fix(channel): track qqbot close reconnect timer | **Merged** | Fixes [5413](https://github.com/QwenLM/qwen-code/issues/5413). The WebSocket close-handler timer now stores its reference and calls `.unref()`, preventing up to 30s of unnecessary process hang at exit. |
| [5418](https://github.com/QwenLM/qwen-code/pull/5418) | fix(cli): narrow settings enum schemas | **Merged** | `context.importFormat` and `advanced.dnsResolutionOrder` now expose proper enum values (`tree`/`flat`, `ipv4first`/`verbatim`) instead of free-form strings — reduces misconfiguration. |
| [5396](https://github.com/QwenLM/qwen-code/pull/5396) | fix(ui): reduce UI flicker — throttle + compact transition + batch STREAM_TEXT | **Open** | Targets [4561](https://github.com/QwenLM/qwen-code/issues/4561) and [3838](https://github.com/QwenLM/qwen-code/issues/3838). Three-pronged fix for Windows compact-mode flicker and infinite refresh loops during streaming. |
| [5030](https://github.com/QwenLM/qwen-code/pull/5030) | feat(core,cli,sdk): resume interrupted turn without synthetic "continue" message | **Open** | A first-class session resumption mechanism — after crashes or mid-stream interruption, the agent continues without injecting a fake user message into the transcript. |
| [4909](https://github.com/QwenLM/qwen-code/pull/4909) | feat(extensions): support archive install sources (.zip / .tar.gz) | **Open** | Allows installing extensions from local or remote archives, removing the requirement to extract manually first. |

---

## 5. Feature Request Trends

1. **Multi-agent / subagent orchestration** — The most thematically active area. Community wants bidirectional parent↔subagent notifications ([5239](https://github.com/QwenLM/qwen-code/issues/5239)), task monitoring, and better failure propagation ([5180](https://github.com/QwenLM/qwen-code/issues/5180)). The roadmap label `roadmap/multi-agent` on several issues suggests the team is already tracking this.

2. **Model cost optimization via auto-routing** — Users request automatic Flash/Pro model selection based on task complexity ([5225](https://github.com/QwenLM/qwen-code/issues/5225)), mirroring what Cursor and other competitors already offer.

3. **Configuration transparency & discoverability** — Dead fields in hook APIs ([5422](https://github.com/QwenLM/qwen-code/issues/5422)), settings that don't work as documented ([5267](https://github.com/QwenLM/qwen-code/issues/5267)), and missing model-adding UI for Custom Providers ([4814](https://github.com/QwenLM/qwen-code/issues/4814)) all point to a broader DX friction around setup and extensibility.

4. **ACP / IDE parity** — ACP users hitting missing skills ([5007](https://github.com/QwenLM/qwen-code/issues/5007)) indicates that as Qwen Code integrates deeper into editors (Zed, VS Code), feature parity between CLI and ACP must be systematically maintained.

5. **Estimated response time display** — A small but recurring ask ([5366](https://github.com/QwenLM/qwen-code/issues/5366), already closed): an opt-in flag for estimated time-to-completion during generation, already found useful in Claude Code.

---

## 6. Developer Pain Points

- **Subagent reliability is the #1 workflow blocker.** Crashes go undetected by the parent session, forcing users into brittle file-polling workarounds. The community is close to treating this as a trust issue for any multi-agent use case.

- **Settings/configuration "works on my docs" syndrome.** Multiple issues report that documented features (`context.fileName`, schema enums) silently fail or behave differently in practice. This erodes confidence in the configuration layer.

- **Provider lock-in at the type level.** The deep `@google/genai` dependency across 136 files ([4063](https://github.com/QwenLM/qwen-code/issues/4063)) makes the architecture feel Google-centric despite阿里云's origins, raising contributor concerns about neutral provider extensibility.

- **qqbot channel instability.** Four separate P1/P2 bugs found in a single day ([5410](https://github.com/QwenLM/qwen-code/issues/5410)–[5413](https://github.com/QwenLM/qwen-code/issues/5413)) all originating from PR #5202, indicating that the QQ Bot channel needs tighter regress-testing — rapid-fire patches are closing issues but also suggesting insufficient pre-merge coverage.

- **Windows-specific parsing edge cases pile up.** Colons in Windows drive paths break grep ([5370](https://github.com/QwenLM/qwen-code/issues/5370)) and sandbox mounts ([5386](https://github.com/QwenLM/qwen-code/issues/5386)). Each gets fixed individually, but the pattern suggests Windows path handling needs a dedicated audit pass.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-20

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but the repository saw a burst of activity on the PR front: 24 pull requests were updated, spanning dependency bumps, security hardening, and meaningful feature work. The most notable human-authored PRs include a first-class sub-agent toggle (PR #3327), a token budget regulator for high-fan-out agent runs (PR #3321), and continued progress on the staged command-boundary refactor EPIC (#2870). On the issue side, a glibc compatibility bug on Ubuntu 22.04 LTS (#3238) and a missing sidebar regression in v0.8.62 (#3328) are the most actionable items for maintainers.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours. The latest tagged release remains **v0.8.63**.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: Staged command-boundary refactor** | Tracks the incremental merge of the command-boundary refactor originally discussed in #2791. This is a structural change that will affect how commands are dispatched and replayed across the TUI. | 6 comments; active coordination between aboimpinto and other contributors. |
| [#3238](https://github.com/Hmbown/CodeWhale/issues/3238) | **Ubuntu 22.04 LTS glibc mismatch** | Blocks a significant portion of Linux users on the most widely deployed LTS release. The `npm install -g codewhale` path fails at runtime. | 4 comments; no maintainer response yet — high priority for platform coverage. |
| [#3328](https://github.com/Hmbown/CodeWhale/issues/3328) | **Sidebar missing in v0.8.62** | Regression: the note sidebar disappeared after upgrading. `/sidebar` reports it as visible but it is not rendered. | 1 comment; likely affects all users on the affected version. |
| [#3324](https://github.com/Hmbown/CodeWhale/issues/3324) | **Recommendation: mosaic-compress for long-context** | Community member proposes integrating a stateless dialogue compression library to keep LLM conversations bounded without session management. | 1 comment; interesting architectural suggestion, not yet evaluated by maintainers. |
| [#3320](https://github.com/Hmbown/CodeWhale/issues/3320) | **阿里云百炼 (Alibaba Cloud Bailian) API key not integrated** | Users on Alibaba Cloud's model platform cannot configure API keys, blocking adoption in the Chinese market. | 1 comment; represents a broader provider-coverage gap. |

---

## 4. Key PR Progress

| # | PR | Description | Significance |
|---|----|-------------|--------------|
| [#3327](https://github.com/Hmbown/CodeWhale/pull/3327) | **Add first-class sub-agent toggle** | Introduces `/config subagents on|off|status` and `/config features.subagents true|false` as top-level controls, wiring session-only and persisted changes through `Op::SetFeatures`. | Makes sub-agent orchestration discoverable and controllable without manual config edits. |
| [#3321](https://github.com/Hmbown/CodeWhale/pull/3321) | **Token budget regulator for high fan-out agent runs** | Adds comprehensive token budget enforcement (`BudgetSpec`) for workflow and sub-agent orchestration, closing the gap between protocol-layer specs and runtime execution. | Critical for preventing runaway token consumption in complex multi-agent workflows. |
| [#3300](https://github.com/Hmbown/CodeWhale/pull/3321) | **Preserve thinking/tool blocks when seeding thread from session** | Replaces text-only `seed_thread_from_messages` with a block-type-aware implementation that preserves `Thinking`, `ToolUse`, and `ToolResult` as distinct `TurnItem` entries. | Fixes conversation reconstruction fidelity when loading history — important for reasoning-chain continuity. |
| [#3332](https://github.com/Hmbown/CodeWhale/pull/3332) | **Require auth for non-loopback app-server binds** | Rejects non-loopback binds when no explicit auth token is supplied, closing a security gap. Loopback one-time token generation remains unchanged. | Security hardening — prevents accidental exposure of the app server to the network without authentication. |
| [#3331](https://github.com/Hmbown/CodeWhale/pull/3331) | **Enable proxy env for JS execution** | Mirrors lowercase proxy variables and `ALL_PROXY` into the uppercase names Node reads, enabling proxy support for `js_execution`. Fixes #3273. | Unblocks users behind corporate proxies running JS-based tools. |
| [#3344](https://github.com/Hmbown/CodeWhale/pull/3344) | **Retry Codex Responses requests** | Routes the Codex Responses streaming path through `send_with_retry` with per-attempt body/header rebuild. Fixes #3019. | Improves reliability of Codex integration under transient network failures. |
| [#3329](https://github.com/Hmbown/CodeWhale/pull/3329) | **Restore HuggingFace env precedence** | Restores the HuggingFace API key env-var precedence on the TUI config surface so the CI lint gate passes again on `main`. | Fixes a CI-blocking regression; unblocks other PRs. |
| [#3330](https://github.com/Hmbown/CodeWhale/pull/3330) | **Layer 4: Replay FEAT-005 command extraction on Hunter** | Continues the staged command-boundary refactor (EPIC #2870), replaying FEAT-005 command extraction onto the current Hunter trait-backed registry. | Incremental progress on the most significant architectural refactor in the pipeline. |
| [#3345](https://github.com/Hmbown/CodeWhale/pull/3345) | **Move inline config tests to module** | Extracts the large inline test module from `crates/config/src/lib.rs` into `crates/config/src/tests.rs`, reducing production file size and conflict surface. Closes #3307. | Code hygiene; reduces merge conflict risk in a frequently-touched crate. |
| [#3333](https://github.com/Hmbown/CodeWhale/pull/3333) | **Split MCP header helpers** | Moves MCP HTTP header framing and custom-header filtering into a dedicated `mcp::headers` module, following the transport split in #3310. | Improves modularity and reviewability of the MCP transport layer. |

---

## 5. Feature Request Trends

1. **Sub-agent orchestration controls** — PR #3327 and the token budget regulator PR #3321 both point to growing demand for first-class, runtime-controllable sub-agent management. Users want visibility and knobs, not just config-file toggles.

2. **Long-context / conversation compression** — Issue #3324's `mosaic-compress` suggestion reflects a broader need: keeping multi-session LLM conversations within context windows without manual session management.

3. **Provider ecosystem expansion** — Issue #3320 (Alibaba Cloud Bailian) highlights demand for broader cloud-provider API key integration beyond the currently supported set.

4. **Command-boundary refactor** — EPIC #2870 and its layered PRs (#3330, #3278) represent the largest structural feature effort in the repo, aimed at making command dispatch, replay, and extraction more modular and testable.

---

## 6. Developer Pain Points

- **Platform compatibility gaps**: The Ubuntu 22.04 LTS glibc mismatch (#3238) is a hard blocker for a large Linux user base. No maintainer triage has been posted yet.
- **UI regressions in patch releases**: The sidebar disappearing in v0.8.62 (#3328) suggests insufficient regression coverage for TUI layout changes in the release pipeline.
- **Proxy and corporate network support**: PR #3331's proxy fix for JS execution (#3273) indicates that network-environment assumptions in the codebase are still catching users off guard.
- **CI fragility**: PR #3329 had to restore HuggingFace env precedence just to get the CI lint gate passing on `main` — a sign that config-surface changes can have cascading, non-obvious effects on tooling.
- **Security defaults**: PR #3332's auth requirement for non-loopback binds (#3258) reveals that the app server previously shipped with an insecure default, which may have exposed some deployments.

---

*Data source: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) · Digest generated by OWL for 2026-06-20.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*