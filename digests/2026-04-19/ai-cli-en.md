# AI CLI Tools Community Digest 2026-04-19

> Generated: 2026-04-19 00:13 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem Cross-Comparison Report
## Community Digest Analysis — 2026-04-19

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive multi-polar market with six actively developed alternatives, each backed by major AI labs or well-funded independents. Today's activity reveals a sector in **aggressive feature parity pursuit**—goal modes, subagent orchestration, and plugin ecosystems are spreading across tools within weeks of introduction. Simultaneously, **platform stability crises are endemic**: authentication system changes, model version regressions, and silent failures plague every major tool, suggesting the category is still working through production-hardening gaps despite high user adoption. The community has shifted from novelty-seeking to demanding reliability, transparency, and enterprise-grade controls.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release | Release Focus |
|------|:-----------:|:---------:|:-------:|---------------|
| **Claude Code** | 50 | 6 | v2.1.114 | Permission dialog crash fix; macOS 11 breakage unaddressed |
| **OpenAI Codex** | 50 | 50 | rust-v0.122.0-alpha.10 | Rust rewrite alpha; platform parity push |
| **Gemini CLI** | ~15* | 10+ | None | Signal handling, shell performance, config coercion |
| **GitHub Copilot CLI** | 32 | 0 | None | Feature freeze or internal branch development |
| **Kimi Code CLI** | 11 | 5 | None | Subagent fixes, YOLO mode refinement |
| **OpenCode** | 15+ | 10 | v1.4.11 | Workspace routing fix; v1.4.12 asset publish failed |
| **Pi** | ~12* | 10 | None | Claude 4.7 support, Node 25 crash fix |
| **Qwen Code** | 15+ | 10+ | v0.14.5-nightly | ACP hooks, compact mode; OAuth crisis response |

*\*Estimated from digest scope; exact counts not explicitly stated*

**Key Observations:** OpenAI Codex dominates raw development velocity (50 PRs), while GitHub Copilot CLI shows concerning stagnation (zero PR activity). Claude Code and OpenCode are in reactive stabilization modes. Qwen Code is in crisis-response posture.

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Subagent/Orchestration Robustness** | Claude Code, Kimi, Gemini, Qwen, Codex | Working directory inheritance (Kimi #1931→#1933), honest failure propagation (Gemini #22323), dispatch message relay (Claude #40281), parallel agent dispatch (Qwen #3276) |
| **Goal/Session Persistence** | Codex, Claude Code, Qwen, Kimi | Codex's 5-PR "goal mode" stack; Claude's `/buddy` restoration (#45732); Qwen session rewind (#3292); cross-session memory routing (Gemini #22819) |
| **Reasoning/Thinking Control** | Claude Code, Pi, Copilot CLI, Kimi | Per-model thinking ladders (Pi #3208, #3299); Opus 4.7 adaptive thinking (Pi #3382); "xhigh" visibility (Copilot #2725, #2739); K2.6 thinking vs. creativity balance (Kimi #1925) |
| **Provider Flexibility & Local LLMs** | Qwen, Pi, OpenCode, Gemini | Dynamic model discovery (Pi #3357); VLLM self-hosting (Qwen #3384); LM Studio detection (OpenCode); OpenRouter support (Qwen #3274) |
| **Usage Transparency & Cost Control** | OpenCode, Copilot CLI, Codex | `/usage` command (OpenCode #9281); rate limit visibility (Copilot #2827, #2828); token budgeting (Codex goal mode #18076) |
| **MCP Ecosystem Maturity** | Claude Code, Copilot CLI, Gemini | Rules in plugins (Claude #14200); toggle UX parity (Copilot #2805); MCP server discovery hardening (Gemini #25619) |
| **Sandbox/Permission Refinement** | Codex, Gemini, Qwen, Claude Code | Windows ACL corruption (Codex #15777); workspace sandbox escapes (Gemini #17049); YOLO hardening (Qwen #3156); bypassPermissions security bug (Claude #39027) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|-----------|:-----------:|:------------:|:----------:|:-----------:|:---------:|:--------:|:--:|:---------:|
| **Core Identity** | Agent-team collaboration | Long-running autonomous goals | Google ecosystem integration | GitHub-native pair programming | Chinese market + creative coding | Multi-provider orchestration | Universal provider adapter | Alibaba Cloud integration |
| **Technical Architecture** | Node/Electron; plugin system | Rust rewrite; SQLite goals | Node/React TUI; ACP protocol | Electron; VS Code extension | Node; hooks-based | Electron + TUI + WebUI; plugin lifecycle | Node; session tree/fork | Node; VSCode + CLI dual |
| **Target User** | Complex engineering teams | Autonomous agent practitioners | Google Cloud developers | GitHub-centric developers | Chinese developers, creative coders | Multi-model power users | Provider-agnostic developers | Alibaba ecosystem users |
| **Differentiating Strength** | Agent-team dispatch (`/cowork`) | Goal mode autonomy stack | AST-aware tooling (emerging) | GitHub integration depth | Hooks transparency (`updatedInput`) | Provider billing unification | Session topology (fork/merge) | ACP interoperability |
| **Critical Weakness** | Model quality regressions; macOS abandonment | Windows/macOS thermal issues; context leaks | Permission UX inconsistency; subagent opacity | Zero dev velocity; rate limit opacity | Subagent infinite loops; API bugs | TUI stability cluster; release pipeline | Node 25 compatibility; provider drift | Authentication crisis; feature discoverability |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **🔥 High Velocity** | **OpenAI Codex** | 50 PRs in 24h; 5-PR feature stack for goal mode; rapid regression fixes (#18264 closed in ~1 day) |
| **📈 Active Stabilization** | **Claude Code, Gemini CLI, Pi, Qwen Code** | Sustained issue volume with targeted fixes; community PRs accepted; responsive to regressions |
| **⚠️ Concerning Stagnation** | **GitHub Copilot CLI** | Zero PR activity; highest-engagement issue is a UI workaround (#2725); no release in 24h; rate limit and configuration debt accumulating |
| **🆕 Emerging/Emergency** | **Kimi Code, OpenCode** | Kimi: small but focused community, rapid PR turnaround; OpenCode: release pipeline failures suggest operational immaturity despite feature ambition |

**Maturity Indicators:**
- **Most production-hardened**: Claude Code (extensive plugin/rules system, Veriflow governance PRs) and Pi (per-tool execution modes, session tree management)
- **Most experimental**: Codex (Rust alpha, goal mode unproven at scale) and Qwen Code (ACP hooks, compact mode in nightly)
- **Biggest trust erosion risk**: Copilot CLI (silent capability removals, opaque rate limits) and Qwen Code (OAuth discontinuation execution)

---

## 6. Trend Signals

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Autonomous agent workflows maturing** | Goal mode (Codex), subagent fixes (Kimi, Gemini), dispatch systems (Claude) | Developers should invest in session durability and failure recovery patterns; "fire and forget" remains risky |
| **Model quality volatility as operational risk** | Opus 4.7 regression (Claude), K2.6 "drowning creativity" (Kimi), GPT-5.4 xhigh removal (Copilot) | **Multi-model strategies are defensive necessity**, not luxury; lock-in to single model family exposes teams to unannounced capability shifts |
| **Authentication as competitive battlefield** | Qwen OAuth crisis, Claude API/billing bugs, Gemini OAuth 403s | Tool choice should weight auth resilience; self-hosted/local options gaining strategic value |
| **Terminal UI performance becoming differentiator** | Gemini shell throttling (#25643), Codex CPU surges (#11981), OpenCode TUI hangs (#5485) | Rust and native code advantages emerging; Electron-based tools face thermal/rendering debt |
| **Governance and safety infrastructure surfacing** | Veriflow contracts (Claude #46095), YOLO hardening (Qwen #3156), sandbox ACL fixes (Codex) | Enterprise procurement will increasingly require demonstrable agent safety controls; "move fast" tools face compliance friction |
| **Plugin/MCP interoperability as ecosystem moat** | Rules in plugins (Claude), MCP toggle UX (Copilot), ACP hooks (Qwen), dynamic tool namespaces (Codex) | Winner-take-most dynamics possible for whichever platform achieves "npm for AI agents" network effects |

---

*Report compiled from 8 community digests covering 200+ issues and 100+ PRs. Data current as of 2026-04-19.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-19 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | PR | Status | Description | Discussion Focus |
|:---|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 OPEN | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment | Addresses universal pain point in Claude's document output; author notes these issues "affect every document Claude generates" |
| 2 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 OPEN | Meta-skills for evaluating Skill structure/documentation (20%) and security posture across five dimensions | Enterprise governance angle; positions Skills marketplace for organizational compliance |
| 3 | **ODT Skill** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 OPEN | OpenDocument creation, template filling, and ODT→HTML conversion for LibreOffice/ISO standard workflows | Fills open-source document format gap alongside existing DOCX/PDF skills |
| 4 | **Frontend Design (Improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 OPEN | Revised for single-conversation actionability—every instruction executable within one Claude session | Iteration on existing skill; reflects community push for concrete, non-abstract skill instructions |
| 5 | **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | 🟡 OPEN | Fixes `w:id` collision causing document corruption when adding tracked changes to bookmarked documents | Technical precision; shared ID space awareness in OOXML |
| 6 | **Skill-Creator YAML Validation** | [#539](https://github.com/anthropics/skills/pull/539) | 🟡 OPEN | Pre-parse validation catching unquoted `description` fields with `:` to prevent silent YAML failures | Developer experience; catches subtle parsing bugs before `yaml.safe_load()` |
| 7 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 OPEN | SAP's open-source tabular foundation model for predictive analytics on SAP business data | Enterprise ERP integration; Apache 2.0 model from SAP TechEd 2025 |
| 8 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 OPEN | Full testing stack: Testing Trophy philosophy, AAA pattern, React Testing Library, component vs. integration boundaries | Addresses gap in software quality skills; emphasizes *what NOT to test* |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Priority Signal |
|:---|:---|:---|
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 5 👍) — org-wide libraries, direct sharing links vs. Slack file dumps | 🔥 High |
| **Skill Reliability & Trust** | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 6 👍) — `claude -p` 0% trigger rate; [#492](https://github.com/anthropics/skills/issues/492) trust boundary abuse via `anthropic/` namespace impersonation | 🔥 High |
| **Skill-Creator Tooling Maturity** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments) — skill-creator violates its own guidelines; verbose, educational tone vs. operational instructions | 🔥 High |
| **Enterprise Auth Integration** | [#532](https://github.com/anthropics/skills/issues/532) — ANTHROPIC_API_KEY requirement blocks SSO users; [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock compatibility | Medium |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) — expose Skills as MCPs for standardized API signaling | Medium |
| **Persistent Context/Memory** | [#154](https://github.com/anthropics/skills/pull/154) `shodh-memory`, [#521](https://github.com/anthropics/skills/pull/521) `record-knowledge` — cross-session knowledge retention | Emerging |

---

## 3. High-Potential Pending Skills

| Skill | PR | Why It May Land Soon | Blocker Risk |
|:---|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal, daily friction; no external dependencies; clear scope | None apparent |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills critical gap in software engineering skills; comprehensive but bounded | Competing testing skill PRs |
| **ODT Skill** | [#486](https://github.com/anthropics/skills/pull/486) | Complements existing document skills; open-source format demand | Maintenance surface (LibreOffice versioning) |
| **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | Unique platform-native approach vs. screenshot-based computer use; two-tier permission model | AppleScript sandboxing restrictions |
| **x402 BSV Micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Novel economic primitive for AI services; natural language payment interface | Niche blockchain dependency |
| **Record Knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Directly addresses #1 user pain (context loss between sessions); simple filesystem implementation | May conflict with official memory features |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *enterprise-grade reliability infrastructure*—not more skills, but better tools to create, validate, share, and trust the skills already being built.**

---

# Claude Code Community Digest — 2026-04-19

---

## 1. Today's Highlights

Anthropic shipped **v2.1.114** with a targeted fix for agent-team permission dialog crashes, while the community grapples with a wave of **macOS 11 (Big Sur) compatibility breakages** starting in v2.1.113. Model quality concerns dominate discussion, with multiple high-engagement reports alleging **Opus 4.7 regressed significantly** from 4.6 in instruction-following and complex engineering tasks.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| [v2.1.114](https://github.com/anthropics/claude-code/releases/tag/v2.1.114) | 2026-04-18 | Fixed crash in permission dialog when an agent team's teammate requested tool permission |

*Note: This release did not resolve the macOS 11 Big Sur dyld symbol errors introduced in v2.1.113.*

---

## 3. Hot Issues

| # | Title | Status | Comments | Why It Matters |
|---|-------|--------|----------|--------------|
| [#42796](https://github.com/anthropics/claude-code/issues/42796) | [MODEL] Claude Code is unusable for complex engineering tasks with the Feb updates | **CLOSED** | 529 | The highest-engagement issue in the dataset (1,963 👍). A detailed critique of model degradation for complex tasks, now closed—likely resolved or superseded by subsequent releases, but reflects sustained community concern about model quality trajectory. |
| [#38896](https://github.com/anthropics/claude-code/issues/38896) | API Error: Rate limit reached despite 0% usage | **OPEN** | 20 | Persistent billing/API infrastructure bug affecting Opus 4.6 users. Creates trust issues when usage dashboards don't match enforcement behavior. |
| [#17618](https://github.com/anthropics/claude-code/issues/17618) | Alt+M keyboard shortcut broken on Windows since v2.1.3 | **CLOSED** | 20 | Long-running Windows UX regression finally resolved. Indicates backlog cleanup on platform-specific TUI issues. |
| [#14200](https://github.com/anthropics/claude-code/issues/14200) | Add rules support to Plugins | **OPEN** | 13 | High-demand enhancement (58 👍) for plugin extensibility. Rules are a core Claude Code abstraction; their absence from plugins limits third-party integration depth. |
| [#45732](https://github.com/anthropics/claude-code/issues/45732) | Bring Back /buddy: 511 Reasons Why | **OPEN** | 12 | Emotional, data-rich case study (14 sessions documented) arguing for restoration of a removed feature. Represents community attachment to workflow-specific tools and frustration with feature removal without migration paths. |
| [#40281](https://github.com/anthropics/claude-code/issues/40281) | Dispatch: SendUserMessage tool not loadable — agent responds but messages never appear | **OPEN** | 8 | Critical Cowork/Dispatch regression breaking agent-to-UI message relay. Blocks production use of multi-agent dispatch workflows. |
| [#50456](https://github.com/anthropics/claude-code/issues/50456) | Auto-updater silently broke Claude Code on macOS 11 Big Sur | **OPEN** | 7 | Part of a cluster of macOS 11 breakages. Silent failure mode is particularly dangerous for production tooling—users discover breakage post-update without warning. |
| [#41530](https://github.com/anthropics/claude-code/issues/41530) | Skills broken in 2.1.88, work correctly in 2.1.87 | **CLOSED** | 6 | Pinpointed regression with clear downgrade workaround. Shows value of detailed version-bisection in bug reports. |
| [#50481](https://github.com/anthropics/claude-code/issues/50481) | System instructions enforces push workflow by default, contradicting user control principle | **OPEN** | 5 | Philosophical/technical tension: default system instructions overriding explicit user preferences. Relevant to broader AI alignment and control debates. |
| [#39027](https://github.com/anthropics/claude-code/issues/39027) | Background task notifications trigger autonomous API calls — model responds as if it were the user | **OPEN** | 4 | **High-priority security-adjacent bug**: `bypassPermissions` on synthetic notifications creates unintended autonomous behavior. Potential for data exfiltration or unauthorized actions. |

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#46095](https://github.com/anthropics/claude-code/pull/46095) | Add Claude Mythos operating contract for Veriflow immune system | **OPEN** | Governance/infrastructure PR adding formal operating contracts for Veriflow (likely internal trust/safety system). Suggests maturing institutional controls around agent behavior. |
| [#50565](https://github.com/anthropics/claude-code/pull/50565) | Copilot/fix configuration again | **OPEN** | Iterative fix for Copilot integration configuration. "Again" implies recurring fragility in this integration. |
| [#50301](https://github.com/anthropics/claude-code/pull/50301) | feat(plugins): add flappy-claude terminal game | **OPEN** | Community plugin adding Flappy Bird as `/flappy-claude` slash command. Lightweight but signals growing plugin ecosystem maturity and developer engagement. |
| [#50293](https://github.com/anthropics/claude-code/pull/50293) | fix: use -exist flag in ipset add to prevent duplicate entry errors | **OPEN** | Devcontainer infrastructure fix for idempotent firewall setup. Small but represents production-hardening of development environments. |
| [#46024](https://github.com/anthropics/claude-code/pull/46024) | docs: document --exclude-dynamic-system-prompt-sections in README | **OPEN** | Documents prompt caching optimization flag. Important for users running Claude Code at scale who need to minimize token costs via cache reuse. |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | Add web4-governance plugin for AI governance with R6 workflow | **OPEN** | Long-running PR for "web4" governance infrastructure (T3 trust tensors, R6 audit trails). Aspirational/deeply technical; may be ahead of mainstream adoption but represents serious third-party investment in AI accountability tooling. |

*Only 6 PRs had 24h activity. The remaining 4 slots in a "top 10" would require inclusion of stale PRs with no recent meaningful updates.*

---

## 5. Feature Request Trends

**Plugin Ecosystem Maturation**
- Rules support in plugins ([#14200](https://github.com/anthropics/claude-code/issues/14200), 58 👍) and general plugin extensibility dominate structured requests
- Community-built plugins (games, governance) emerging but need deeper API surface

**Remote & Enterprise Auth**
- AWS Bedrock + SSO support for `claude remote-control` ([#28795](https://github.com/anthropics/claude-code/issues/28795), 53 👍)
- Cross-platform credential and session portability

**Workflow Continuity**
- `/buddy` restoration ([#45732](https://github.com/anthropics/claude-code/issues/45732)) and plan-mode context preservation ([#50550](https://github.com/anthropics/claude-code/issues/50550)) reflect demand for *session durability*—tools that maintain state across interruptions

**Model Control & Transparency**
- Persistent effort levels in settings ([#50557](https://github.com/anthropics/claude-code/issues/50557))
- `/model` command scope documentation ([#50568](https://github.com/anthropics/claude-code/issues/50568))—users surprised by global persistence

---

## 6. Developer Pain Points

| Theme | Frequency | Severity | Representative Issues |
|-------|-----------|----------|----------------------|
| **macOS 11 (Big Sur) Abandonment** | 4+ issues | 🔴 High | [#50456](https://github.com/anthropics/claude-code/issues/50456), [#50383](https://github.com/anthropics/claude-code/issues/50383), [#50445](https://github.com/anthropics/claude-code/issues/50445), [#50567](https://github.com/anthropics/claude-code/issues/50567) |
| *dyld symbol `_ubrk_clone` missing, binaries built for macOS 13.0+, silent updater failures. Enterprise environments with older Macs are stranded without downgrade paths or deprecation notices.* |
| **Model Quality Regression (Opus 4.7)** | 3+ issues | 🔴 High | [#50546](https://github.com/anthropics/claude-code/issues/50546), [#49214](https://github.com/anthropics/claude-code/issues/49214), [#49725](https://github.com/anthropics/claude-code/issues/49725) |
| *Alleged severe degradation in instruction following, reasoning depth, and user directive adherence vs. 4.6. Emotional/frustrated tone in titles suggests breaking trust with power users.* |
| **Agent/Tool System Fragility** | 4+ issues | 🟡 Medium | [#40281](https://github.com/anthropics/claude-code/issues/40281), [#38183](https://github.com/anthropics/claude-code/issues/38183), [#39027](https://github.com/anthropics/claude-code/issues/39027), [#41747](https://github.com/anthropics/claude-code/issues/41747) |
| *SendMessage/SendUserMessage tool availability gaps, background task autonomy bugs, custom agent discovery failures. The agent orchestration layer has sharp edges post-resume parameter removal.* |
| **Skills System Regressions** | 2+ issues | 🟡 Medium | [#41530](https://github.com/anthropics/claude-code/issues/41530), [#50556](https://github.com/anthropics/claude-code/issues/50556) |
| *Version-to-version breakage in `.claude/skills/` loading; `/ultrareview` scope unexpectedly narrowed. Users investing in skill libraries face maintenance burden.* |
| **Silent Failures & Observability Gaps** | 3+ issues | 🟡 Medium | [#50567](https://github.com/anthropics/claude-code/issues/50567), [#50390](https://github.com/anthropics/claude-code/issues/50390), [#39889](https://github.com/anthropics/claude-code/issues/39889) |
| *OTEL metrics no-op without error, web UI hangs at "working" for 10 min before limit hit, Dispatch ignores user settings. Systems fail opaquely, wasting quota and time.* |

---

*Digest compiled from 50 issues and 6 PRs with 24h activity on github.com/anthropics/claude-code.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-19

---

## 1. Today's Highlights

OpenAI shipped **rust-v0.122.0-alpha.10** as the team pushes toward broader platform parity, with a major PR landing to support `codex app` on **macOS Intel and Windows** after months of community pressure. A five-PR stack introducing **goal mode** (persistent goals, token budgeting, autonomous continuation) is nearing completion, signaling a significant shift toward long-running agent workflows. Meanwhile, Windows sandbox ACL corruption and macOS CPU/fan surges remain the top pain points driving urgent fixes.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| [rust-v0.122.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.10) | Latest alpha in the Rust rewrite series; no detailed changelog published. Precedes broader platform support work. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#10410](https://github.com/openai/codex/issues/10410) | **CLOSED** — macOS Intel (x86_64) support for Codex Desktop App | Intel Mac users were entirely locked out of the desktop app; 288 👍 made this one of the most-upvoted platform requests ever. Closure follows new cross-platform build pipeline. | Celebratory; long-awaited fix after 2.5 months |
| [#11981](https://github.com/openai/codex/issues/11981) | **OPEN** — 100% CPU usage with single agent on macOS | Performance regression affecting daily usability; fans surge, system lags. Suggests runaway polling or rendering loop. | Frustrated; workaround hunting; 37 comments |
| [#18264](https://github.com/openai/codex/issues/18264) | **CLOSED** — ~8s message send delay in new sessions | Severe UX regression post-update; blocked workflow startup. Rapid fix turnaround (closed in ~1 day) shows prioritization. | Relief; 28 👍, 29 comments |
| [#18258](https://github.com/openai/codex/issues/18258) | **OPEN** — "Computer Use plugin unavailable" despite bundled files | Breaks core agent capability; community surfaced manual cache-path workaround. Indicates plugin resolution logic is fragile. | Active troubleshooting; 25 comments, 26 👍 |
| [#15777](https://github.com/openai/codex/issues/15777) | **OPEN** — Sandbox installation corrupts Windows ACL on AppData | **Data-loss risk**: breaks other apps' permissions. Free-tier user hit; no 👍 but 23 comments of technical diagnosis. | Alarmed; demands urgent security review |
| [#9046](https://github.com/openai/codex/issues/9046) | **OPEN** — Context window exhaustion at chat start | Persistent since January; contradicts expected behavior for short sessions. Suggests miscounted tokens or leaked system context. | Confused; 18 comments, recurring reports |
| [#17322](https://github.com/openai/codex/issues/17322) | **OPEN** — Windows app doesn't fully exit on close + UI hit-testing bug | Dual regression: ghost process + broken "New Chat" button. CLI works fine, isolating bug to Electron/shell layer. | Annoyed; 12 👍, detailed repro steps |
| [#12343](https://github.com/openai/codex/issues/12343) | **CLOSED** — Sandbox security: excessive ACL scope on Windows 11 | Security hardening closed after community flagging. Sandbox groups were granted to entire user profile tree. | Validated; 9 👍, appreciation for fix |
| [#10695](https://github.com/openai/codex/issues/10695) | **OPEN** — GitHub Fix CI skill fails due to keychain/GH_TOKEN sandbox isolation | Built-in skill broken by sandbox design: can't access credentials app has. Tension between security and utility. | Blocked; 4 👍, requests for env-passing config |
| [#12773](https://github.com/openai/codex/issues/12773) | **OPEN** — Multi-window support for macOS | Top feature request for power users; 20 👍, detailed 4-section proposal. No official response yet. | Enthusiastic; waiting for roadmap signal |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Significance |
|---|-----|-------------|------------|
| [#18500](https://github.com/openai/codex/pull/18500) | Support `codex app` on macOS (Intel) and Windows | Platform-aware installer routing; fixes Intel Mac wrong-build bug | **Closes #10410**; unblocks ~40% of desktop user base |
| [#18077](https://github.com/openai/codex/pull/18077) | Add goal mode TUI UX (5/5) | `/goal` command, statusline, history, snapshots | Final piece of autonomous goal-tracking; enables long-running sessions |
| [#18076](https://github.com/openai/codex/pull/18076) | Add goal mode core runtime (4/5) | Token accounting, budget stopping, resume, interrupt pause | Foundation for cost-controlled agent autonomy |
| [#18075](https://github.com/openai/codex/pull/18075) | Add goal mode model tools (3/5) | `get_goal` / `set_goal` tools with registry gating | Model can now introspect and mutate its own objectives |
| [#18074](https://github.com/openai/codex/pull/18074) | Add goal mode app-server API (2/5) | v2 RPCs for goal CRUD + thread notifications | Server-side persistence for cross-session goals |
| [#18073](https://github.com/openai/codex/pull/18073) | Add goal mode state foundation (1/5) | Feature flags + SQLite goal storage + runtime APIs | Base of the stack; already merged |
| [#18413](https://github.com/openai/codex/pull/18413) | Add namespaces to dynamic tools | Deferred tools return real namespaces in `tool_search` | Fixes self-reference echo problem; cleaner tool architecture |
| [#18504](https://github.com/openai/codex/pull/18504) | Rebrand approvals reviewer config to `auto-review` | Renames `guardian_*` → `auto_review` in schemas/config | API consistency; reduces confusion for new configs |
| [#18499](https://github.com/openai/codex/pull/18499) | Fix plugin cache panic when cwd unavailable | `AbsolutePathBuf` no longer panics on missing cwd | Fixes #16637; critical for long-running tasks (>11h reported) |
| [#18274](https://github.com/openai/codex/pull/18274) | Canonicalize file system permissions in protocol | Stable `PermissionProfile` semantics | Enables migration from legacy sandbox maps; unblocks permission refinements |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Multi-window / multi-instance workflows** | #12773 (20 👍), #18105 (orchestrator/delegate mode) | High — power users need parallel project contexts |
| **Finer-grained sandbox controls** | #16501 (`default_tools_approval_mode` per MCP server), #18105 (read-only orchestrator) | Medium — security-conscious teams want policy layers |
| **Customizable project config paths** | #18334 (custom `.codex` directory location) | Low but specific — monorepo/worktree users |
| **Windows parity & stability** | #18500 merged, but #15777, #17322, #18503, #18511 still open | High — Windows treated as second-class; community vocal |
| **Subagent/orchestration primitives** | #18105, #18513 (opt-in autonomous delegation) | Emerging — shift from single-agent to multi-agent patterns |
| **App-server pagination & efficiency** | #15485 (cursors for `thread/read`), #18502 (multiple `cwd` filters) | Medium — mobile/enterprise scale needs |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **macOS CPU/fan surges & thermal throttling** | Recurring across versions | High — hardware wear + unusable | #11981, #18467 |
| **Windows sandbox ACL corruption / over-permissioning** | Multiple distinct reports | **Critical** — security + system stability | #15777, #12343, #18511 |
| **Plugin/skills resolution failures** | Spikes after updates | High — breaks core features | #18258, #10695, #18499 |
| **Context window management / phantom exhaustion** | Long-standing | Medium — kills sessions prematurely | #9046 |
| **App lifecycle bugs (exit, delay, connectivity)** | Clustered post-update | Medium — polish gap vs. CLI | #18264, #17322, #18503, #17495 |
| **Intel Mac exclusion / platform detection** | Now closing | Was Critical | #10410 → #18500 |

---

*Digest compiled from 50 issues and 50 PRs updated 2026-04-18/19. For real-time tracking: [github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-19

## 1. Today's Highlights

The Gemini CLI team is actively hardening signal handling and shell output performance, with multiple community PRs targeting process lifecycle management and UI responsiveness. Meanwhile, a fresh wave of configuration coercion fixes addresses long-standing papercuts where environment variable interpolation broke boolean settings. On the agent front, internal workstreams continue advancing AST-aware tooling, memory routing, and safer subagent behavior.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#12441](https://github.com/google-gemini/gemini-cli/issues/12441) | **API Error: "Requested entity was not found" (404)** | Persistent P1 platform issue affecting model availability; closed after extended debugging. Pattern suggests entitlement/region mismatches rather than user error. | 16 comments, 6 👍 — high engagement for a closed issue, indicating ongoing confusion |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | Foundation EPIC for reducing token waste and misaligned reads via structural code understanding rather than line-based heuristics. Could significantly improve agent efficiency on large codebases. | 5 comments, maintainer-only; signals strategic investment |
| [#17049](https://github.com/google-gemini/gemini-cli/issues/17049) | **Path must be within workspace directories** | Workspace sandboxing blocks legitimate system-level operations (PATH modification, global installs) even with `--yolo` and sandbox disabled. Reveals tension between security model and power-user workflows. | 4 comments, closed as possible duplicate — recurring theme |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Permission prompts not persisting across sessions** | Security UX friction: "allow for all future sessions" intermittently fails, breaking flow trust. Indicates state management bug in permission cache. | 3 comments, active |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution hangs with "Waiting input"** | Race condition or PTY detection failure causes simple commands to appear stalled. Directly impacts core CLI reliability. | 2 comments, 2 👍 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS interruption** | Critical agent honesty bug: subagents mask failure as success, corrupting parent agent planning and user trust. | 2 comments, 2 👍 |
| [#25644](https://github.com/google-gemini/gemini-cli/issues/25644) | **Google AI Pro subscription 403 via OAuth login** | New P1-level report: OAuth path fails for paid subscribers while API key works. Suggests entitlement propagation bug between Google One AI Pro and Gemini CLI OAuth scopes. | 1 comment, just opened — watch for escalation |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | **Crash on temporary path `A:\`** | Windows-specific `realpath` failure on removable/temp drives. Blocks usage in certain corporate/VM environments. | 1 comment |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | **SSH session text scrambling** | Terminal emulation incompatibility breaks usability for remote development workflows — significant for cloudtop/SSH-heavy users. | 1 comment |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory routing: global vs. project** | Architectural design for contextual memory scoping. Determines whether CLI becomes truly personalized across projects or leaks preferences inappropriately. | 1 comment, 2 👍 |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| [#25642](https://github.com/google-gemini/gemini-cli/pull/25642) | **Forward termination signals to relaunched child process** | Fixes orphan process bug where `SIGTERM`/`SIGINT` to parent leaves child running. Critical for process managers, systemd, ACP clients. Duplicate effort with #25605 suggests community prioritization. | Open |
| [#25643](https://github.com/google-gemini/gemini-cli/pull/25643) | **Throttle shell text output to prevent UI jank** | Batches React re-renders during high-volume shell output (`npm test`, builds). Addresses reported freezing without dropping data. | Open |
| [#25641](https://github.com/google-gemini/gemini-cli/pull/25641) | **Coerce env var strings to booleans/numbers in settings** | Root-cause fix for `${ENV:-true}` resolving as string `"true"` and failing Zod validation. Complements #25608 and #25634 as coordinated community effort. | Open |
| [#25639](https://github.com/google-gemini/gemini-cli/pull/25639) | **Add `/bug-memory` command and auto heap snapshot capture** | Operational tooling: captures V8 heap snapshots when RSS > 2GB, eliminating Chrome DevTools dependency for memory diagnostics. | Open |
| [#25633](https://github.com/google-gemini/gemini-cli/pull/25633) | **Record actual `modelVersion` in session transcript** | Fixes telemetry accuracy when A/B routing or model aliasing occurs. Ensures per-model stats reflect reality, not requested alias. | Open |
| [#25625](https://github.com/google-gemini/gemini-cli/pull/25625) + [#25626](https://github.com/google-gemini/gemini-cli/pull/25626) | **Preserve legacy auto memory behavior; start auto memory in ACP sessions** | Paired fixes for backward compatibility and session-type parity. Prevents config migration pain and unifies TUI/ACP behavior. | Both open |
| [#25619](https://github.com/google-gemini/gemini-cli/pull/25619) | **Handle optional ping in `mcp list`** | Hardens MCP server discovery: treats `ping()` as best-effort, tolerates `MethodNotFound` post-handshake. Aligns timeout with shared default. | Open |
| [#25378](https://github.com/google-gemini/gemini-cli/pull/25378) | **Fix Windows `ripgrep` spawn `EFTYPE` error** | Handles architecture-mismatched or corrupted downloaded binaries on Windows. Defensive fallback to system `rg` or graceful error. | Open |
| [#25223](https://github.com/google-gemini/gemini-cli/pull/25223) | **Use ANSI-derived semantic colors for ANSI themes** | Fixes low-contrast rendering on terminals with custom color schemes. Replaces hardcoded hex with proper ANSI color names. | Open |
| [#25524](https://github.com/google-gemini/gemini-cli/pull/25524) | **Zod runtime validation for `ConversationRecord`** | Foundation for deterministic eval pipeline (GSoC 2026). Strict schema enables chat-log-to-eval translation with type safety. | Open, maintainer-only |

---

## 5. Feature Request Trends

**Agent Intelligence & Safety**
- AST-aware tooling (#22745, #22746) for precise code navigation and reduced token burn
- Proactive memory writes with clear global/project scoping (#22819, #22809)
- Subagent honesty: proper failure propagation (#22323), awareness of approval modes (#23582), and rejection handling (#23897)
- Destructive operation guardrails (#22672)

**Configuration & Environment Robustness**
- Environment variable interpolation that preserves types (boolean/number coercion — #25641, #25608, #25634, #25573)
- Cross-platform path handling (Windows temp drives #25216, workspace sandboxing #17049)

**Observability & Operations**
- Memory diagnostics (#25639), model version accuracy in telemetry (#25633), component-level behavioral evals (#24353)

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Process lifecycle fragility** | Orphaned children (#25642, #25605), shell hangs (#25166), signal handling gaps | High — breaks automation and supervisor integration |
| **Configuration type system leaks** | Env vars resolve as strings, break booleans (#25641, #25608, #25634, #25573) | High — papercut that wastes debugging time |
| **Permission UX inconsistency** | "Allow forever" intermittently forgotten (#24916) | Medium — erodes trust in security model |
| **Windows second-class experience** | `ripgrep` architecture mismatches (#25378), temp path crashes (#25216), SSH text corruption (#24202) | Medium — blocks enterprise Windows adoption |
| **Subagent opacity** | False success reporting (#22323), mode unawareness (#23582), tmp script litter (#23571) | Medium — makes agents unreliable for complex tasks |
| **Streaming/rendering glitches** | Table incremental render in screen readers (#25218), scroll jumps in long chats (#24470), external editor corruption (#24935) | Medium — accessibility and UX degradation |

---

*Digest compiled from google-gemini/gemini-cli public GitHub activity. For corrections or additions, open an issue or discussion.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-19

## 1. Today's Highlights

No new releases dropped in the last 24 hours, but community activity remains intense with **32 updated issues** highlighting ongoing friction around **GPT-5.4 model effort levels**, **rate limiting transparency**, and **MCP tooling maturity**. The most engaged discussions center on UI regressions and missing configuration controls in recent 1.0.3x builds.

---

## 2. Releases

**None** — No releases published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#2725](https://github.com/github/copilot-cli/issues/2725) | GPT-5.4 /model picker hides "Extra High" effort level | **Capability/UI mismatch**: `xhigh` still works at runtime but is invisible in the picker, creating confusion about available model power. | 🔥 21 comments, 16 👍 — highest engagement; users verifying workaround behaviors |
| [#92](https://github.com/github/copilot-cli/issues/92) | `/ask` mode for non-destructive Q&A | Long-standing request for a **read-only LLM interaction**; current agent mode always risks edits/commands. | 9 comments, 9 👍; philosophical tension about Copilot's "always agent" design |
| [#2583](https://github.com/github/copilot-cli/issues/2583) | `copilot update` broken on Windows post-1.0.17 | **Critical path regression**: standard update mechanisms fail, forcing manual intervention. | 8 comments; Windows users blocked on standard maintenance flow |
| [#2760](https://github.com/github/copilot-cli/issues/2760) | Implement proper HTTP retry logic for 429 responses | **Infrastructure reliability**: aggressive retry loops (20+/min) waste quota and trigger harder bans. | 5 comments, 2 👍; well-documented with technical specifics |
| [#2739](https://github.com/github/copilot-cli/issues/2739) | `xhigh` reasoning removed for GPT-5.4 and GPT-5.3-codex | **Perceived capability downgrade**: power users consider these models "useless" without max reasoning. | 4 👍, heated tone; overlaps with #2725 as same underlying change |
| [#2078](https://github.com/github/copilot-cli/issues/2078) | Add `/btw` command | **Workflow ergonomics**: popular pattern from competing CLIs (Claude Code, etc.) for tangential context. | 26 👍, 2 comments; strong demand, low controversy |
| [#1954](https://github.com/github/copilot-cli/issues/1954) | `XDG_CONFIG_HOME` ignored — no equivalent | **Linux/Unix compliance regression**: breaks standard dotfile management and portable configs. | 4 👍; `COPILOT_HOME` workaround rejected as insufficient |
| [#2777](https://github.com/github/copilot-cli/issues/2777) | Agent name no longer visible in v1.0.31 | **UI regression**: loss of context awareness for multi-agent workflows. | 2 👍; visual comparison provided |
| [#2805](https://github.com/github/copilot-cli/issues/2805) | Toggle MCPs as easily as skills | **MCP UX gap**: skills use spacebar/enter toggles; MCPs require explicit commands. | 1 👍; points to inconsistent interaction patterns |
| [#2818](https://github.com/github/copilot-cli/issues/2818) | "Session token expired" aborts long tasks | **Reliability for autopilot workflows**: breaks unattended/background agent execution. | 2 👍; impacts core value proposition of autonomous mode |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**

*Note: Zero PR activity suggests either feature freeze, internal development on non-public branches, or bottleneck in community contribution review.*

---

## 5. Feature Request Trends

| Trend | Evidence | Maturity |
|-------|----------|----------|
| **Read-only / "ask" modes** | #92, #2821 (collapse verbose output) | Long-standing; fundamental architecture question |
| **Rate limit transparency & controls** | #2827, #2828, #2760, #2769, #2742 | Critical mass; users need visibility before hitting walls |
| **MCP ecosystem polish** | #2805, #2817 (process cleanup), #2829 (custom paths) | Early; tooling gaps between "works" and "production-ready" |
| **Configuration portability** | #1954 (XDG), #2829 (custom paths), #2820 (feature flags) | Recurring; power users need deterministic environments |
| **Terminal UI customization** | #2830 (themes), #2771 (prompt bars), #2777 (agent visibility) | Growing; competing CLIs raising expectations |
| **CJK / internationalization** | #2825 (text wrapping) | Niche but blocking for APAC adoption |

---

## 6. Developer Pain Points

**1. Rate Limiting Opacity & Aggressiveness**
Multiple issues (#2742, #2769, #2827, #2828) describe sudden hard stops with minimal guidance. The 429 retry logic (#2760) actively worsens the problem. **Core need**: proactive quota dashboards, sensible backoff, and actionable error messages.

**2. Configuration Drift & Regressions**
`XDG_CONFIG_HOME` broken (#1954), `effortLevel` dropped on model switch (#2823), experimental flags undocumented (#2820). Users cannot build stable workflows when settings silently reset or disappear.

**3. Model Capability Communication**
The GPT-5.4 "xhigh" situation (#2725, #2739) exemplifies a pattern: GitHub changes model behavior, UI lags or misrepresents, and power users discover discrepancies through trial-and-error. Trust erosion in model selection as a reliable control.

**4. MCP Resource Lifecycle**
Orphaned processes (#2817), inconsistent toggling UX (#2805), and custom path needs (#2829) indicate MCP integration is **feature-complete but operationally immature** — the "it works on demo" gap.

**5. Unattended Execution Fragility**
Session token expiry (#2818), compaction killing sessions (#2500), and missing `task_complete` output (#2482) all undermine the **autopilot promise**. Users cannot step away from long tasks with confidence.

---

*Digest compiled from 32 issues updated 2026-04-18. Full data: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-19

---

## 1. Today's Highlights

No new release dropped today, but the community is highly active with **11 issues and 5 PRs** updated in the last 24 hours. The dominant themes are **subagent reliability** (infinite loops, working directory inheritance) and **model behavior complaints** (K2.6's thinking mode overwhelming creativity), alongside several UX and platform compatibility fixes.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925) | **Kimi K2.5 vs K2.6 model switching** | Users report K2.6's extended thinking "drowns out creativity" and increases hallucinations; requests ability to revert to K2.5 with original system prompt. Strong sentiment that model personality has degraded. | 3 comments, emotionally charged |
| [#1924](https://github.com/MoonshotAI/kimi-cli/issues/1924) | **API rejects all temperature values (including 0.6)** | Breaking API-level bug affecting all clients (OpenAI SDK, curl, Hermes Agent); `temperature` parameter hard-rejected with misleading error. Blocks production integrations. | 3 comments, cross-client impact |
| [#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927) | **Subagent infinite loop** | Critical reliability bug: subagents re-read the same file 100+ times in unbounded loops. Makes autonomous workflows unusable. | 0 comments but severe report |
| [#1931](https://github.com/MoonshotAI/kimi-cli/issues/1931) | **Subagent ignores parent's working directory** | Breaks git worktree workflows; subagents reset to root `KIMI_WORK_DIR` after parent `cd`. Already has matching PR fix. | Fresh, well-documented |
| [#1916](https://github.com/MoonshotAI/kimi-cli/issues/1916) | **WSL2 support broken on Win11** | Login flow fails in WSL2 Ubuntu-24.04, redirecting to subscription page instead of completing auth. Blocks Windows developers. | 1 comment, platform-specific |
| [#1923](https://github.com/MoonshotAI/kimi-cli/issues/1923) | **Poor interactivity: hidden reasoning** | User frustration that extensive internal reasoning is invisible until final output, preventing early error detection. Requests incremental streaming. | 1 comment, UX pattern complaint |
| [#1934](https://github.com/MoonshotAI/kimi-cli/issues/1934) | **Voice input mode request** | Feature parity request vs. Claude Code; hands-free interaction for brainstorming and long prompts. | New, no comments yet |
| [#1930](https://github.com/MoonshotAI/kimi-cli/issues/1930) | **Professional Database (Tonghuashun/Tianyancha) in CLI** | Enterprise/financial data integration request for ¥199/month Allegretto tier feature. Niche but high-value use case. | New, no comments yet |
| [#1672](https://github.com/MoonshotAI/kimi-cli/issues/1672) | **VS Code plan mode UX is "very poor"** | Closed but representative: users reject file-based plan output, want inline chat-style interaction like Codex. 1 upvote. | Closed, pattern remains relevant |
| [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) | **Login failed: network unreachable to auth.kimi.com** | SSL/network connectivity to auth endpoint; resolved but indicates recurring auth infrastructure fragility. | 5 comments, now closed |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1935](https://github.com/MoonshotAI/kimi-cli/pull/1935) | **feat(hooks): `updatedInput` for transparent command rewriting** | Enables PreToolUse hooks to silently rewrite commands before execution (34 lines). Aligns with existing hooks Beta docs. | 🟢 Open |
| [#1932](https://github.com/MoonshotAI/kimi-cli/pull/1932) | **refactor(yolo): preserve plan review and AskUserQuestion** | Fixes `--yes` mode overreach: stops auto-approving plans while still skipping low-risk operation confirmations. Separates "safety approvals" from "intent clarifications." | 🟢 Open |
| [#1933](https://github.com/MoonshotAI/kimi-cli/pull/1933) | **feat(subagents): `work_dir` override** | Adds optional `work_dir` parameter to Agent tool; fixes #1931. Subagents can now inherit or override parent directory context. | 🟢 Open |
| [#1928](https://github.com/MoonshotAI/kimi-cli/pull/1928) | **fix(streaming): avoid replaying large tool call payloads** | Resolves #1786. Stops redundant resending of accumulated tool-call arguments on every `ToolCallProgress` update, eliminating lag on large file writes. | 🟢 Open |
| [#1917](https://github.com/MoonshotAI/kimi-cli/pull/1917) | **revert: accidentally-pushed anthropic thinking effort refactor** | Cleanup of two commits bypassing PR review (`xhigh`/`max` thinking levels, adaptive thinking). Indicates process slip, now corrected. | 🔴 Closed |

---

## 5. Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Model behavior control** | #1925 (K2.5 revert), #1923 (visible reasoning) | 🔥 High — users want transparency and choice over "thinking" depth |
| **Subagent robustness** | #1927 (infinite loop), #1931 (work_dir), #1933 (PR fix) | 🔥 High — autonomous agent workflows are core value prop, currently fragile |
| **Session/state management** | #1929 (resident server/session reuse, closed) | Medium — parity with Codex `app server` requested |
| **Multimodal input** | #1934 (voice input) | Emerging — follows Claude Code pattern |
| **Enterprise data integrations** | #1930 (Professional Database) | Niche but monetizable |
| **Plan/UX inline interaction** | #1672 (VS Code plan mode) | Recurring — rejection of file-based workflows |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Subagent reliability failures** | 3 issues + 1 PR | 🔴 Critical — infinite loops and context loss make autonomous mode unusable for real workflows |
| **Opaque model reasoning** | 2 issues | 🟡 High — developers cannot debug or guide what they cannot see |
| **API parameter validation bugs** | 1 issue (#1924) | 🔴 Critical — blocks all third-party integrations when basic `temperature` fails |
| **Cross-platform auth fragility** | 2 issues (#1070, #1916) | 🟡 High — WSL and network-edge cases break login flow |
| **YOLO mode overshooting** | 1 PR (#1932) | 🟡 Medium — safety vs. convenience balance poorly calibrated |
| **Streaming performance at scale** | 1 PR (#1928) | 🟡 Medium — large file operations lag due to payload replay |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity on 2026-04-18/19.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-19

## Today's Highlights

OpenCode shipped v1.4.11 with critical workspace routing fixes, but the release pipeline hit turbulence as v1.4.12 failed to publish assets causing 404s for Homebrew users. Meanwhile, the community is actively triaging a cluster of TUI/Desktop rendering regressions in recent versions and pushing forward long-awaited features like unified usage tracking and improved thinking block handling.

---

## Releases

**[v1.4.11](https://github.com/anomalyco/opencode/releases/tag/v1.4.11)** — Core stability release
- Fixed workspace routing so requests correctly reach their target workspace instances
- Eliminated unnecessary share sync attempts for sessions that were never shared

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|-------------|-------------------|
| **[#5485](https://github.com/anomalyco/opencode/issues/5485)** OpenCode TUI suddenly stuck, won't launch | Long-standing launch failure affecting core user workflow; user seeking safe uninstall/reinstall path | 49 comments, high engagement with troubleshooting |
| **[#4672](https://github.com/anomalyco/opencode/issues/4672)** GitHub Agent stuck at "Sending Message" | Blocks Copilot integration, a key differentiator for OpenCode | 20 comments, persistent across versions |
| **[#22630](https://github.com/anomalyco/opencode/issues/22630)** Desktop 1.4.6 blank window on macOS 26.4 Tahoe | macOS beta compatibility issue signaling future breakage | 9 comments, early adopter pain |
| **[#23315](https://github.com/anomalyco/opencode/issues/23315)** Missing release assets for v1.4.12 | **Active incident**: Homebrew 404s blocking installs/upgrades | 7 comments, 9 upvotes — high urgency |
| **[#9281](https://github.com/anomalyco/opencode/issues/9281)** Unified usage tracking via `/usage` | Most-upvoted feature (21 👍) addressing opaque provider billing | 7 comments, linked to active PR |
| **[#23211](https://github.com/anomalyco/opencode/issues/23211)** 1.4.7+ fails to render UI, loses all config | **Critical regression**: upgrade path destroys user state | 7 comments, data loss severity |
| **[#20859](https://github.com/anomalyco/opencode/issues/20859)** Copilot subagent models ignored, all billing to orchestrator | Cost impact: users overcharged for Premium Requests | 7 comments, enterprise concern |
| **[#9922](https://github.com/anomalyco/opencode/issues/9922)** API key paste broken on Windows/Ubuntu | Basic UX blocker for first-time setup | 8 comments, 2 upvotes |
| **[#22408](https://github.com/anomalyco/opencode/issues/22408)** Kimi K2.6 integration request | Competitive pressure: Moonshot's new model gaining traction | 7 comments, 16 upvotes |
| **[#16876](https://github.com/anomalyco/opencode/issues/16876)** Log files grow to gigabytes uncontrolled | Resource exhaustion, no disable switch | 4 comments, performance concern |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| **[#23357](https://github.com/anomalyco/opencode/pull/23357)** Plugin lifecycle fix: `opencode run` now waits for plugins to finish before exit | Adds `OPENCODE_EXPERIMENTAL_PLUGIN_EXIT_DEFAULT_TIMEOUT_MS` | Open, needs issue/compliance |
| **[#23356](https://github.com/anomalyco/opencode/pull/23356)** Prevent session timestamp updates on metadata-only changes | Fixes unwanted session reordering in UI | Open, vouched contributor |
| **[#23355](https://github.com/anomalyco/opencode/pull/23355)** Fix TUI hang when reattaching to deleted session | Eliminates unkillable terminal state from `opencode -s <deleted-id>` | Open |
| **[#9545](https://github.com/anomalyco/opencode/pull/9545)** Unified usage tracking with auth refresh | Implements `/usage` command for Codex/Copilot/Claude limits | Open, long-running feature PR |
| **[#23214](https://github.com/anomalyco/opencode/pull/23214)** Fix permissions merging: preserve as layers, not object merge | Resolves ruleset ordering bugs | Open |
| **[#16751](https://github.com/anomalyco/opencode/pull/16751)** Root-cause fix for tool_use/tool_result mismatch | Addresses 8 linked issues including session corruption | Open, high impact |
| **[#16750](https://github.com/anomalyco/opencode/pull/16750)** Skip empty-text filtering for assistant messages | Fixes Anthropic API rejections with thinking blocks | Open |
| **[#17083](https://github.com/anomalyco/opencode/pull/17083)** Flush stdin on POSIX exit | Prevents stale bytes leaking to parent shell | Open |
| **[#14307](https://github.com/anomalyco/opencode/pull/14307)** Use parentID matching for prompt loop exit | Fixes message rendering edge cases in large conversations | Open, beta |
| **[#7119](https://github.com/anomalyco/opencode/pull/7119)** Display dynamically registered MCP servers in TUI status | Closes gap between API-registered and UI-visible servers | Open |

---

## Feature Request Trends

1. **Usage Transparency** — `/usage` command for provider billing visibility (Copilot/Codex/Claude) is the top-requested capability with strong community backing
2. **Model Provider Expansion** — Kimi K2.6, LM Studio auto-detection, and broader local model support indicate demand for flexibility beyond default providers
3. **PWA/Mobile Experience** — Basic installable web app support requested for phone workflows
4. **Thinking Block UX** — Multiple requests for consistent reasoning visibility across TUI, WebUI, and Desktop (currently fragmented)

---

## Developer Pain Points

| Category | Pattern | Frequency |
|----------|---------|-----------|
| **TUI/Desktop Rendering** | Blank windows, hangs, input lag across 1.4.6–1.4.11 | **Critical cluster** — 5+ issues in 24h |
| **Data Loss & Session Management** | Accidental deletion (Ctrl+Shift+Backspace), config loss on upgrade, unconfirmed quits | Recurring, high severity |
| **Release/Install Pipeline** | Missing release assets (v1.4.12), Homebrew 404s | Active incident |
| **Provider Integration Edge Cases** | Copilot billing misattribution, paste failures, auth display bugs | Steady friction |
| **Log/Resource Management** | Unbounded log growth, memory spikes, snapshot failures | Performance degradation |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-19

## Today's Highlights
The Claude 4.7 model family received full support across Anthropic and OpenAI-compatible providers, including adaptive thinking and mandatory temperature stripping. A critical `RangeError` crash in `sanitizeBinaryOutput()` affecting large tool outputs on Node 25 was resolved with a streaming code-unit scanner. Meanwhile, community-driven provider extensibility remains a major theme, with PRs landing for Alibaba/Qwen prompt caching and Bedrock token quota optimization.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3214](https://github.com/badlogic/pi-mono/issues/3214) | Cloud Code Assist API 400 error from `$schema` meta-declarations in MCP tool params | Breaks Google Cloud Code Assist + antigravity provider integration entirely when using MCP tools like jcodemunch; schema metadata leaks into tool params | 9 comments, active debugging by reporter vladlearns; no fix yet, marked `inprogress` |
| [#3005](https://github.com/badlogic/pi-mono/issues/3005) | Make "UPDATE AVAILABLE" message toggleable | NixOS and other non-standard install users hit friction on every startup; "Quiet startup" incomplete | Closed after 8 comments, 2 👍; maintainer accepted the UX gap |
| [#3299](https://github.com/badlogic/pi-mono/issues/3299) | Add `max` thinking level for Opus 4.7's five-rung API | Pi's thinking ladder fell out of sync with Anthropic's latest API shape; blocks power users from max reasoning | Closed after 7 comments; merged to keep parity with upstream |
| [#3372](https://github.com/badlogic/pi-mono/issues/3372) | `pi` can no longer work with Claude subscription | Subscription-based Anthropic auth path broken; new users blocked from paid tier | 6 comments, rapid same-day closure; reporter validated fix |
| [#3344](https://github.com/badlogic/pi-mono/issues/3344) | Aborted tool calls corrupt conversation state | Ctrl+C during tool calls permanently poisons thread with `tool_use`/`tool_result` mismatch; data loss risk | 6 comments; fixed same day, high severity acknowledged |
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | Custom thinking levels per model in `models.json` | Generic thinking ladder forces unsupported levels on models; extension API needs provider-level control | 4 comments, 6 👍; ghost91- volunteered to implement, awaiting maintainer design |
| [#3356](https://github.com/badlogic/pi-mono/issues/3356) | Shell bomb / OOM kill from agent/model | Agent generated runaway process consuming 31.4G RAM; safety boundary concern for autonomous execution | 4 comments; damageboy captured htop evidence, no clear repro yet |
| [#3357](https://github.com/badlogic/pi-mono/issues/3357) | Official local LLM provider extension | Dynamic model list fetching from `{baseUrl}/models` would unlock llama.cpp/ollama/LM Studio without manual config | 3 comments; julien-c (Hugging Face CEO) filed, signaling ecosystem demand |
| [#3342](https://github.com/badlogic/pi-mono/issues/3342) | Compaction fails with GPT-5 models | `reasoning: none` rejected by `generateTurnPrefixSummary()`; context compression broken for latest OpenAI models | 2 comments; duplicate of #3060, fix in #3238 pending re-evaluation |
| [#3376](https://github.com/badlogic/pi-mono/issues/3376) | `RangeError: Invalid array length` in `sanitizeBinaryOutput` on Node 25 | Node 25 V8 string length limits crash tool rendering; blocks adoption of latest Node LTS | 2 comments; Gabrielgvl provided minimal repro, fix landed in #3386 |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#3400](https://github.com/badlogic/pi-mono/pull/3400) | Conditionally omit `maxTokens` from Bedrock `inferenceConfig` | Stops aggressive 32K token reservation that wastes quota; only sends when user explicitly sets | Open, awaiting review |
| [#3398](https://github.com/badlogic/pi-mono/pull/3398) | Resolve symlinks in session paths for parent-child matching | Fixes fork/tree breakage when `PI_CODING_AGENT_DIR` is symlinked across profiles | Merged |
| [#3375](https://github.com/badlogic/pi-mono/pull/3375) | Extend `/fork` to support latest message | Lets fork branch from current position without new command; slight extension API breakage (`entryId` now optional) | Merged |
| [#3393](https://github.com/badlogic/pi-mono/pull/3393) | Alibaba/Qwen prompt caching via `cache_control` format | Extends Anthropic-style caching to OpenRouter Qwen models; adds `cacheControlFormat` compatibility field | Merged, fixes #3392 |
| [#3386](https://github.com/badlogic/pi-mono/pull/3386) | Prevent large-output sanitize/render crashes | Replaces `Array.from()` with surrogate-pair-aware scanner; drops lone surrogates and `U+FFF9..U+FFFB` | Merged, fixes #3376/#3383 |
| [#3385](https://github.com/badlogic/pi-mono/pull/3385) | Pure builders for workflow env + session log snapshots | SDK exports for deterministic workflow embedding without booting full `SessionStepRuntime` | Merged |
| [#3370](https://github.com/badlogic/pi-mono/pull/3370) | Coerce stringified JSON edits in edit tool | Opus 4.6 / GLM-5.1 send `edits` as JSON string; prevents AJV rejection → sed/Python fallback chaos | Merged |
| [#3382](https://github.com/badlogic/pi-mono/pull/3382) / [#3381](https://github.com/badlogic/pi-mono/pull/3381) | Claude 4.7 full family support + temperature handling | Adds Sonnet 4.7, Haiku 4.7 to adaptive thinking; strips `temperature`/`top_p`/`top_k` (API rejects them) | Both merged |
| [#3379](https://github.com/badlogic/pi-mono/pull/3379) | Hide cursor when terminal loses focus | DECSET 1004 focus reporting for tmux/terminal focus awareness; removes ghost cursor in inactive panes | Merged |
| [#3345](https://github.com/badlogic/pi-mono/pull/3345) | Per-tool `executionMode` override for sequential execution | Tool-level opt-in to sequential execution within parallel batches; fixes race-sensitive tool chains | Merged |

---

## Feature Request Trends

1. **Provider extensibility & local LLM integration** — Dynamic model discovery (#3357), custom thinking levels (#3208), and provider-specific compatibility shims (#3393, #3392) dominate. Users want Pi to adapt to their infrastructure, not vice versa.

2. **Thinking/reasoning control granularity** — Per-model thinking ladders (#3208, #3299) and alignment with upstream API evolution (Opus 4.7's `max`) show demand for fine-grained cognitive budget management.

3. **UX polish for power users** — Toggleable update notices (#3005), hideable subscription warnings (#3401), command aliases (#3395), and keybinding extensibility (#3216) reflect a mature user base customizing their workflow.

4. **Session management transparency** — `/session` docs clarification (#3390), fork enhancements (#3375), and context usage accuracy (#3314) indicate users building complex, reusable session topologies.

---

## Developer Pain Points

| Pain Point | Frequency | Evidence |
|-----------|-----------|----------|
| **Node 25 compatibility gaps** | High | #3376, #3383 — `Array.from(string)` crashes, `RangeError` on large strings; V8 string length limits hit in core paths |
| **Provider API drift** | High | #3214 (Cloud Code Assist schema), #3382/#3381 (Claude 4.7 temp rejection), #3342 (GPT-5 compaction) — rapid upstream changes break Pi's assumptions |
| **Install/update UX on non-standard systems** | Medium | #3005 (NixOS), #3378 (Windows pnpm), #3401 (subscription warning fatigue) — package manager diversity poorly handled |
| **Tool execution safety & state corruption** | Medium | #3344 (abort corruption), #3356 (OOM shell bomb), #3345 (sequential execution races) — agent autonomy vs. reliability tension |
| **Windows terminal compatibility** | Recurring | #2733 (backspace/delete), #3378 (pnpm detection), #3391 (media key garbage) — Windows remains a second-class citizen |
| **Auth/OAuth flexibility** | Emerging | #3396 (configurable callback host), #3397 (OpenCode in login flow) — enterprise/remote dev environments need more control |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-19

## Today's Highlights

The Qwen OAuth free tier discontinuation (effective April 15) continues to trigger widespread 401 authentication errors across the user base, with **15+ new issues filed in 24 hours** as developers scramble to migrate to alternative providers. The team shipped **v0.14.5-nightly** with ACP hooks support and compact mode UX improvements, while actively merging provider migration PRs to replace the broken OAuth flow in both CLI and VSCode extension.

---

## Releases

**[v0.14.5-nightly.20260418.418acc548](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260418.418acc548)**

| Change | Author | PR |
|--------|--------|-----|
| Complete hooks support for ACP integration | @DennisYu07 | [#3248](https://github.com/QwenLM/qwen-code/pull/3248) |
| Compact mode UX optimization — shortcuts, settings sync, and safety | @chiga0 | [#3100](https://github.com/QwenLM/qwen-code/pull/3100) |

*Note: Release notes were truncated in source data; ACP (Agent Communication Protocol) hooks suggest expanding interoperability with external agent frameworks.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth Free Tier Policy Adjustment** — Reduce to 100 req/day, phase out by April 20 | The *meta-issue* driving the authentication crisis; 97 comments show intense community scrutiny of pricing strategy | 🔥 97 comments, zero upvotes (controversial policy change) |
| [#3403](https://github.com/QwenLM/qwen-code/issues/3403) | API Error: 401 invalid access token or token expired (Qwen Code 0.12.0) | Represents **legacy version users** hit by OAuth shutdown without clear migration path; Linux CLI affected | 5 comments, no resolution |
| [#3427](https://github.com/QwenLM/qwen-code/issues/3427) | Authenticated error — login succeeds but 401 on every request | **Critical UX gap**: successful auth → immediate failure creates confusion about where breakage occurs | 3 comments, 1 upvote |
| [#3417](https://github.com/QwenLM/qwen-code/issues/3417) | API key stored in `~/.qwen/settings.json` not read after restart | Suggests **persistence layer bug** separate from OAuth deprecation; affects Bailian API key users | 1 comment, newly filed |
| [#3384](https://github.com/QwenLM/qwen-code/issues/3384) | Unable to add OpenAI-compatible local LLM (VLLM + Qwen3.6-35B-A3B) | **Self-hosting path blocked** — documentation gap for local model configuration after provider changes | 3 comments, 1 upvote |
| [#3273](https://github.com/QwenLM/qwen-code/issues/3273) | Chat messages displayed in wrong order — new questions appear *above* previous answers | Persistent UI regression across versions 0.14.4+; breaks conversation readability | 3 comments, needs-info status |
| [#3274](https://github.com/QwenLM/qwen-code/issues/3274) | `/auth` command not available — can't add OpenRouter API key | **Feature discoverability failure**: documented command missing from CLI; blocks provider migration | 1 comment, **3 upvotes** (high demand) |
| [#3413](https://github.com/QwenLM/qwen-code/issues/3413) | Fireworks provider not available on `qwen auth` | README advertises Fireworks as OAuth alternative but CLI doesn't expose it — **documentation/implementation mismatch** | 2 comments |
| [#3426](https://github.com/QwenLM/qwen-code/issues/3426) | VSCode plugin ignores `contextPercentageThreshold` and `contextWindowSize` | Memory/compression settings silently failing at ~165k tokens; causes context overflow crashes | Newly filed, no comments |
| [#2862](https://github.com/QwenLM/qwen-code/issues/2862) | Startup hangs on "Initializing..." when checkpointing enabled | **Stability issue**: feature intended for reliability causes indefinite hangs; force-quit required | 2 comments, stale since April 3 |

---

## Key PR Progress

| # | PR | Status | Description | Impact |
|---|-----|--------|-------------|--------|
| [#3398](https://github.com/QwenLM/qwen-code/pull/3398) | Replace OAuth with Coding Plan / API Key provider setup (VSCode) | **OPEN** | Interactive QuickPick + InputBox auth flow; auto-launches browser for Coding Plan signup | **Critical**: Unblocks VSCode users stranded by OAuth shutdown |
| [#3155](https://github.com/QwenLM/qwen-code/pull/3155) | Add tool execution progress messages (CLI) | **OPEN** | Per-tool elapsed time + progress indicators for long-running commands (e.g., `npm install`) | Reduces premature Ctrl+C interruptions |
| [#3156](https://github.com/QwenLM/qwen-code/pull/3156) | Strip dangerous patterns from YOLO auto-approve | **OPEN** | Blocks `rm -rf /`, `curl -d @/etc/passwd`, etc. from auto-execution | Security hardening for YOLO mode |
| [#3428](https://github.com/QwenLM/qwen-code/pull/3428) + [#3431](https://github.com/QwenLM/qwen-code/pull/3431) | Dismiss `/btw` side-question dialog on `/clear` | **OPEN** (duplicate PRs) | Fixes state leakage: `/clear` now properly resets `/btw` pending questions | CLI UX polish |
| [#3429](https://github.com/QwenLM/qwen-code/pull/3429) | Let `/btw` use live conversation context | **OPEN** | Enables side-questions during active requests without requiring cached snapshots | Improves `/btw` utility mid-conversation |
| [#3318](https://github.com/QwenLM/qwen-code/pull/3318) | Add API preconnect to reduce first-call latency | **OPEN** | Fire-and-forget HEAD request warms TCP+TLS; saves 100-200ms on first API call | Performance optimization for interactive use |
| [#3276](https://github.com/QwenLM/qwen-code/pull/3276) | Enforce parallel agent dispatch for weaker models (`/review`) | **OPEN** | Prompt engineering fix: qwen3.6-plus now launches review agents in parallel vs. serializing | Faster `/review` on budget models |
| [#3236](https://github.com/QwenLM/qwen-code/pull/3236) | Enhanced loop detection with stagnation + validation-retry checks | **OPEN** | Detects tool validation retry loops; fixes EAGAIN pty errors | Stability improvement for agent loops |
| [#3292](https://github.com/QwenLM/qwen-code/pull/3292) | Add session rewind and restore flows (CLI) | **OPEN** | Browse history, pick previous prompt, restore conversation state | Session management feature parity |
| [#2734](https://github.com/QwenLM/qwen-code/pull/2734) | Add Markdown for Agents support to WebFetch tool | **OPEN** | Cloudflare spec support for up to 80% token reduction on compatible servers | Cost/performance optimization for web tools |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Provider diversification & auth flexibility** | [#3274](https://github.com/QwenLM/qwen-code/issues/3274), [#3384](https://github.com/QwenLM/qwen-code/issues/3384), [#3413](https://github.com/QwenLM/qwen-code/issues/3413), [#3382](https://github.com/QwenLM/qwen-code/issues/3382) | 🔥 Critical — driven by OAuth shutdown |
| **Local/self-hosted LLM integration** | [#3384](https://github.com/QwenLM/qwen-code/issues/3384) (VLLM), documentation requests for OpenAI-compatible endpoints | Growing — privacy/cost conscious users |
| **Session export & management** | PR [#2592](https://github.com/QwenLM/qwen-code/pull/2592) (`/export`), PR [#3292](https://github.com/QwenLM/qwen-code/pull/3292) (rewind/restore) | Moderate — productivity workflows |
| **VSCode extension feature parity with CLI** | PRs [#2551](https://github.com/QwenLM/qwen-code/pull/2551) (Plan Mode), [#2592](https://github.com/QwenLM/qwen-code/pull/2592) (`/export`), [#3398](https://github.com/QwenLM/qwen-code/pull/3398) (auth) | Active — yiliang114 driving convergence |
| **Safety & approval UX improvements** | PR [#3156](https://github.com/QwenLM/qwen-code/pull/3156) (YOLO hardening), PR [#3155](https://github.com/QwenLM/qwen-code/pull/3155) (progress visibility) | Steady — enterprise readiness |

---

## Developer Pain Points

### 1. **Authentication Crisis (P0)**
The OAuth free tier discontinuation created a **cascading failure**: 401 errors are the #1 issue category, with users reporting:
- Login "success" → immediate 401 on first request ([#3427](https://github.com/QwenLM/qwen-code/issues/3427), [#3425](https://github.com/QwenLM/qwen-code/issues/3425))
- Stored API keys ignored after restart ([#3417](https://github.com/QwenLM/qwen-code/issues/3417))
- Confusion between Qwen OAuth, Coding Plan, and third-party providers ([#3382](https://github.com/QwenLM/qwen-code/issues/3382))

**Root cause**: Documentation lag + incomplete provider migration in released versions. PR [#3398](https://github.com/QwenLM/qwen-code/pull/3398) addresses VSCode but CLI `/auth` gaps persist.

### 2. **Context & Memory Management**
Multiple reports of settings being ignored ([#3426](https://github.com/QwenLM/qwen-code/issues/3426)) and chat ordering bugs ([#3273](https://github.com/QwenLM/qwen-code/issues/3273)) suggest **configuration layer fragility** — settings exist but aren't consistently applied across CLI/VSCode/plugin boundaries.

### 3. **Startup & Initialization Reliability**
- REPL input loss during 200-500ms init (resolved in PR [#3319](https://github.com/QwenLM/qwen-code/pull/3319), merged)
- Checkpointing hangs ([#2862](https://github.com/QwenLM/qwen-code/issues/2862)) — persistent, low-engagement
- Browser launcher crashes on headless Linux (PR [#1675](https://github.com/QwenLM/qwen-code/pull/1675), open since January)

### 4. **Feature Discoverability**
The `/auth` command missing from help ([#3274](https://github.com/QwenLM/qwen-code/issues/3274)) and Fireworks provider advertised but unavailable ([#3413](https://github.com/QwenLM/qwen-code/issues/3413)) indicate **release-readiness gaps** between documentation, implementation, and CLI registration.

---

*Digest compiled from github.com/QwenLM/qwen-code activity 2026-04-18 to 2026-04-19.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*