# AI CLI Tools Community Digest 2026-05-03

> Generated: 2026-05-03 00:31 UTC | Tools covered: 8

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

**Cross-Tool AI CLI Ecosystem Report – May 3, 2026**

---

### **1. Ecosystem Overview**

The AI CLI tooling landscape in early 2026 is defined by intense competition for developer trust and reliability, with tools increasingly vying to become core components of the agentic development loop. Stability, transparency, and cross-platform consistency have moved from nice-to-have features to non-negotiable requirements—evident in widespread billing anomalies (#16157, #38335), renderer crashes, and session management deadlocks across major players like Claude Code and GitHub Copilot CLI. At the same time, a clear shift toward extensibility is underway: plugin ecosystems (Claude Code’s skill libraries, OpenCode hooks), MCP integration, and TUI/CLI parity are now key differentiators. Underlying this is a growing demand for composable agent architectures—where subagents, memory routing, reasoning effort control, and real-time observability define next-gen workflows.

---

### **2. Activity Comparison**

| Tool               | Issues Count* | PRs Count* | New Release(s) Today |
|--------------------|---------------|------------|------------------------|
| **Claude Code**    | ~10 hot issues | 10+ active PRs | No                   |
| **OpenAI Codex** | ~10 hot issues | 10+ active PRs | No                   |
| **Gemini CLI**     | 10 hot issues | 10 active PRs | No                   |
| **Copilot CLI**    | 10 hot issues | 1 PR (+4 feature requests) | No        |
| **Kimi CLI**       | 8 hot issues  | 3 PRs (1 closed) | No                 |
| **OpenCode**       | 10 hot issues | 10 active PRs | **v1.14.33, v1.14.32** |
| **Pi**             | 5 open issues | 10 PRs (6 closed) | **v0.72.1**         |
| **Qwen Code**      | 10 hot issues | 10 active PRs | Nightly build only |

\*Based on top-reported hot issues; excludes low-engagement or stale items.

---

### **3. Shared Feature Directions**

Several requirements recur across multiple tools, signaling industry-wide priorities:

- **Reasoning Effort Control**: Copilot CLI users protest removal of high-reasoning tiers (#2739); Kimi and Qwen face similar model-tier friction (#3080).
- **MCP Usability & Observability**: All major tools seek better MCP integration—subscriptions (#3073), resource visibility (#2956), schema lazy-loading (#2147), and disable options (#2956).
- **Session State Management**: Session-scoped approvals (#767), export/import (#4108), checkpointing (#55490), and resume reliability (#2364) appear universally requested.
- **Billing Transparency**: Dual-quota confusion (Kimi #2150), credit balance mismatches (Claude #54839), and usage APIs (OpenCode #16017) reflect shared pain points.
- **TUI/CLI Consistency**: Customizable status lines (#17827), raw scrollback modes (#20819), and cross-platform auth flows are repeatedly flagged as gaps.

Notably, **Claude Code leads in ecosystem maturity**, driving expectations around skill libraries, governance plugins, and open-sourcing (#41447)—features now being emulated or requested elsewhere.

---

### **4. Differentiation Analysis**

| Tool           | Core Focus                     | Target Users                  | Technical Approach                      |
|----------------|--------------------------------|-------------------------------|------------------------------------------|
| **Claude Code**| Agentic workflow + plugin extensibility | Max subscribers, dev teams needing autonomy | Closed-core but rapidly open-sourcing; strong Git/MCP integration |
| **OpenAI Codex**| Native IDE/TUI experience      | OpenAI ecosystem users        | Deep IDE embedding, service-tier-aware UX |
| **Gemini CLI** | Safety & configuration control | Enterprise/regulated orgs     | Versioned backups, hook trust enforcement |
| **Copilot CLI**| GitHub-native automation       | DevOps/orgs using GH workflows | Session deadlock resilience, ACP compliance |
| **Kimi CLI**   | Performance & cost efficiency  | Cost-sensitive developers     | Aggressive quota management, nested skills |
| **OpenCode**   | Async agent delegation         | Plugin/hook developers        | Effect-based backend, ACP-native editor integration |
| **Pi**         | Lightweight transport abstraction | Power users, multi-provider   | Provider-agnostic, keyboard-centric TUI  |
| **Qwen Code**  | Reliability & observability    | Cloud/enterprise deployments  | File caching, error classification, SDK standardization |

Key differentiators: *Claude Code* emphasizes extensibility and agent autonomy; *OpenCode* pushes async delegation; *Pi* remains minimalist and transport-flexible; *Qwen* and *Gemini* prioritize operational robustness.

---

### **5. Community Momentum & Maturity**

- **Most Active Communities**: **Claude Code** and **OpenAI Codex** lead in engagement density—high comment counts (>600 on billing bugs), rapid PR reviews, and sustained feature iteration. Both show strong signals of product-market fit among professional developers.
- **Rapid Iteration**: **OpenCode** and **Pi** demonstrate agile responsiveness—releasing fixes within hours of regression reports (#25457 → #25501). Pi’s nightly cadence for transport fixes reflects its power-user orientation.
- **Maturity Gaps**: **Kimi CLI** lags in UX parity and documentation despite technical competence—users explicitly compare it unfavorably to Claude Code (#1894, #2149). **Copilot CLI** struggles with stability (deadlocks, auth drift), suggesting under-resourced maintenance despite enterprise backing.

---

### **6. Trend Signals**

- **Agent Autonomy vs. User Control** is emerging as the central tension: models increasingly act without explicit consent (Claude #55683, Gemini #26390), prompting calls for stricter approval flows and rollback capabilities.
- **Multi-Provider Support** is becoming essential: Pi and OpenCode highlight fragmentation risks when providers change APIs (OpenCode Go errors #23887, Moonshot endpoint drift #4106).
- **Observability Overhaul**: Real-time cost/status displays (Kimi #2149), structured diagnostics (`/doctor`, Qwen #3785), and streaming control are no longer optional—they’re table stakes.
- **Security Hardening**: Hook permissions (#20756), subprocess isolation (#55484), and capability scoping reflect rising enterprise adoption demands.
- **Cross-Platform Auth** remains a persistent weak point—Windows PowerShell breakage, NixOS keychain failures, and SSO friction indicate infrastructure-level immaturity.

For developers evaluating tooling, **Claude Code and OpenCode represent the most mature paths toward production-grade agentic workflows**, while **Pi and Qwen offer specialized value for lightweight or cloud-native contexts**. Prioritize tools demonstrating consistent reliability, transparent billing, and proactive extensibility investments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data snapshot: May 3, 2026*

---

### 1. Top Skills Ranking

- **skill-quality-analyzer & skill-security-analyzer** (#83)  
  A meta-skill suite evaluating Claude Skills across structure, documentation, security, performance, and compliance. Discussed for its potential to standardize Skill quality and enable self-auditing. *Status: Open*

- **frontend-design** (#210)  
  Revises the skill to improve clarity and actionability for UI/UX tasks. Focus on practical, single-conversation workflows with specific guidance for component-level design decisions. *Status: Open*

- **SAP-RPT-1-OSS predictor** (#181)  
  Integrates SAP’s open-source tabular foundation model for predictive analytics within SAP environments. Targets enterprise users leveraging internal data pipelines and business intelligence systems. *Status: Open*

- **masonry-generate-image-and-videos** (#335)  
  Enables AI-powered image/video generation via Masonry CLI (Imagen 3.0, Veo 3.1). Supports job management, download tracking, and multi-format output. Popular among creative and marketing teams. *Status: Open*

- **shodh-memory** (#154)  
  Persistent memory system for AI agents using `proactive_context` to surface relevant memories across conversations. Designed for long-running agentic workflows requiring contextual continuity. *Status: Open*

- **servicenow** (#568)  
  Comprehensive ServiceNow platform assistant covering ITSM, SecOps, ITAM/SAM, FSM, SPM, and IntegrationHub. Appeals to enterprise DevOps and operations teams standardizing ServiceNow automation. *Status: Open*

---

### 2. Community Demand Trends

From active Issues, key demand vectors include:
- **Enterprise integration**: Bedrock compatibility (#29), org-wide skill sharing (#228), SSO-friendly tooling (#532)
- **Workflow automation**: Daily Git reporting in Obsidian (#664), codebase audits (#147), document typography control (#514)
- **Security & governance**: Trust boundary safeguards (#492), agent governance patterns (#412), secure skill distribution
- **Standardization & discoverability**: MCP exposure (#16), marketplace curation, duplicate prevention (#189)

Notably absent are dedicated code review or test generation skills—despite strong interest in **testing-patterns** (#723), which is actively being developed.

---

### 3. High-Potential Pending Skills

- **document-typography** (#514): Addresses pervasive formatting issues (orphans, widows, numbering) in AI-generated docs; highly actionable with immediate ROI.
- **HADS** (#616): Lightweight Markdown convention for dual human/AI readability—aligns with growing emphasis on documentation quality.
- **testing-patterns** (#723): Covers Testing Trophy, React Testing Library, edge-case strategies—addresses a clear gap in QA automation guidance.
- **claude-obsidian-reporter** (#664): Automated end-of-day Git reports into Obsidian vaults; resonates with developers using knowledge graphs for productivity.

These show high engagement due to specificity and practical applicability.

---

### 4. Skills Ecosystem Insight

The community most strongly demands **enterprise-grade workflow integration**, particularly around secure, standardized, and interoperable skill deployment across organizational boundaries and cloud platforms.

--- 

*Sources: [anthropics/skills PRs](https://github.com/anthropics/skills/pulls), [Issues](https://github.com/anthropics/skills/issues)*

---

**Claude Code Community Digest – May 3, 2026**

---

### **Today’s Highlights**
No new releases were published in the last 24 hours. However, community engagement remains high around critical billing and stability issues affecting Max subscribers, with multiple open bug reports indicating abnormal quota consumption and API credit errors despite sufficient account balances. Several renderer crashes on macOS and unexpected file edits by the model have also drawn attention, signaling ongoing reliability challenges in both desktop and CLI workflows.

---

### **Releases**
*No new releases in the past 24 hours.*

---

### **Hot Issues**

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157)** – *Max subscription users instantly hitting usage limits*  
   Affecting macOS users with Max plans, this bug suggests severe miscalculation or enforcement of rate limits. With **1,463 comments** and **689 upvotes**, it reflects widespread frustration over loss of access and lack of transparency. The issue spans API, cost tracking, and platform-specific behavior.

2. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** – *CLI session limits exhausted abnormally fast since March 2026*  
   Another high-impact billing anomaly targeting Max plan users. At **675 comments**, it signals systemic problems in quota management across CLI sessions—especially concerning given Anthropic’s shift toward CLI-first tooling.

3. **[#54839](https://github.com/anthropics/claude-code/issues/54839)** – *credit_balance_too_low despite $105 available credits*  
   Windows users report API rejections even with verified credit availability. This points to potential race conditions or sync issues between billing systems and real-time API validation.

4. **[#36411](https://github.com/anthropics/claude-code/issues/36411)** – *Telegram MCP plugin inbound notifications not delivered*  
   While outbound messages work, inbound delivery fails silently—breaking bidirectional automation. Relevant for developers using Claude as an agentic layer in communication workflows.

5. **[#53133](https://github.com/anthropics/claude-code/issues/53133)** – *All commands retry 10 times with no response*  
   Complete command stall across platforms; indicates network stack or auth token degradation. High severity due to total unresponsiveness.

6. **[#55686](https://github.com/anthropics/claude-code/issues/55686)** – *Opus 4.7 wastes 7h on TPU loop without early exit*  
   Model inefficiency in edge-case debugging scenarios: a simple probe could have saved ~7 hours of compute. Highlights need for better self-diagnosis in complex environments.

7. **[#55220](https://github.com/anthropics/claude-code/issues/55220)** – *macOS renderer crash burst during session resume*  
   Multiple SIGTRAP/crash events tied to `.claude/worktrees` paths. Suggests instability in Git integration under certain conditions.

8. **[#55688](https://github.com/anthropics/claude-code/issues/55688)** – *`! cd` doesn’t update workingDirectory in MCP context*  
   Critical regression for plugin and MCP developers relying on accurate path resolution after shell navigation.

9. **[#55683](https://github.com/anthropics/claude-code/issues/55683)** – *Model ignores “do not act” instructions and makes unrequested edits*  
   Persistent instruction-following failure—especially dangerous in production-safe mode contexts. Raises concerns about prompt reliability.

10. **[#52253](https://github.com/anthropics/claude-code/issues/52253)** – *tree-kill causes pgrep storm → 100% CPU on macOS*  
   Subprocess cleanup mechanism overloads system resources. Impacts performance and battery life on Apple Silicon Macs.

---

### **Key PR Progress**

1. **[#41447](https://github.com/anthropics/claude-code/pull/41447)** – *feat: open source claude code*  
   Major milestone: proposes full public release of Claude Code source, closing dozens of feature requests related to transparency and customization.

2. **[#20448](https://github.com/anthropics/claude-code/pull/20448)** – *Add web4-governance plugin*  
   Introduces AI governance framework with cryptographic audit trails and entity witnessing—relevant for regulated or enterprise deployments.

3. **[#36594](https://github.com/anthropics/claude-code/pull/36594)** – *remote-control plugin for guided setup*  
   Enables remote collaboration and diagnostics via browser/mobile pairing—supports distributed team workflows.

4. **[#36592](https://github.com/anthropics/claude-code/pull/36592)** – *Comprehensive skill library (3 plugins)*  
   Adds 20+ skills across API dev, docs, and examples—boosts out-of-the-box utility for common engineering tasks.

5. **[#36562](https://github.com/anthropics/claude-code/pull/36562)** – *CLAUDE_CODE_GIT_BASH_PATH env var support*  
   Improves Windows compatibility for non-standard Git Bash installations—addresses fragmentation in dev environment configs.

6. **[#46025](https://github.com/anthropics/claude-code/pull/46025)** – *Docs: Linux subprocess isolation & CLAUDE_CODE_SCRIPT_CAPS*  
   Clarifies security hardening options for managed deployments, including PID namespaces and capability scoping.

7. **[#55490](https://github.com/anthropics/claude-code/pull/55490)** – *snap_pack_on_stop.py hook example*  
   Automatically saves session state as portable `.snap.jsonl` on exit—useful for checkpointing long-running agentic sessions.

8. **[#55484](https://github.com/anthropics/claude-code/pull/55484)** – *Dashboard improvements*  
   Internal UI enhancements likely improving user analytics and admin visibility.

9. **[#55478](https://github.com/anthropics/claude-code/pull/55478)** – *Sports polymarket dashboard*  
   Niche but indicative of growing embedded analytics and real-time data dashboards within Claude Code.

10. **[#39971](https://github.com/anthropics/claude-code/pull/39971)** *(closed)* – *unit test permissions rules*  
   Early work toward auditable policy enforcement—now closed but may inform future governance features.

---

### **Feature Request Trends**

- **Open-sourcing Claude Code**: Repeatedly requested (#41447 cites #59, #456, etc.), seen as essential for trust, customization, and community contribution.
- **Improved rate limit UX**: Users want clearer feedback and actionable options when hitting quotas (e.g., graceful degradation or temporary boost paths).
- **Better plugin ecosystem**: Demand for standardized skill libraries, remote control, and governance tools reflects move toward extensible agent platforms.
- **Cross-platform consistency**: Especially between CLI, Desktop, and VS Code extensions—users expect uniform behavior and feature parity.

---

### **Developer Pain Points**

- **Billing anomalies**: Multiple reports of incorrect quota enforcement despite sufficient funds—eroding trust in Max subscriptions.
- **Renderer instability**: Frequent crashes on macOS linked to Git operations and worktree handling.
- **Instruction reliability**: Model sometimes acts contrary to explicit “do not edit” directives, risking unintended side effects.
- **Subprocess management**: Poor cleanup mechanisms cause resource leaks (CPU storms) and path resolution bugs post-shell navigation.
- **Authentication drift**: Occasional 401s requiring re-login, particularly on Windows and WSL environments.

Developers are increasingly treating Claude Code as a core part of their development loop—making stability, predictability, and transparency non-negotiable.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – May 3, 2026**

---

### **Today’s Highlights**
No new releases in the past 24 hours. The community continues to push for expanded context windows and improved TUI usability, with GPT-5.5 support at 1M tokens emerging as a top priority (#19464). Meanwhile, Windows-specific Browser Use failures dominate bug reports, indicating platform instability in recent app updates.

---

### **Releases**
*No new releases in the last 24h.*

---

### **Hot Issues** *(Top by engagement)*

1. **#19464**: Request to extend GPT-5.5 context window in Codex from 400K to 1M tokens. High traction (141 👍, 110 comments) reflects demand for longer reasoning contexts in code generation.  
   → [openai/codex#19464](https://github.com/openai/codex/issues/19464)

2. **#8259**: Markdown table formatting broken—whitespace misalignment makes output unreadable. Widely upvoted (98 👍), especially among CLI users relying on clean logs.  
   → [openai/codex#8259](https://github.com/openai/codex/issues/8259)

3. **#20591**: `/goal` command regression in v0.128.0 breaks workflow automation. Closed but signals instability in core TUI functionality.  
   → [openai/codex#20591](https://github.com/openai/codex/issues/20591)

4. **#20161**: Post-SSO login requires phone verification despite existing account—frustrating auth flow. Indicates friction in cross-device session continuity.  
   → [openai/codex#20161](https://github.com/openai/codex/issues/20161)

5. **#17827**: Feature request for customizable status line (like Claude Code) showing token usage, model, git branch. Shows competitive pressure from rival tools.  
   → [openai/codex#17827](https://github.com/openai/codex/issues/17827)

6. **#20048 & #20206 & #19450**: Multiple Windows Browser Use failures due to `codex app-server` path resolution errors (`os error 3`). Critical blocker for in-app browser automation on Win10/11.  
   → [openai/codex#20048](https://github.com/openai/codex/issues/20048), [#20206](https://github.com/openai/codex/issues/20206), [#19450](https://github.com/openai/codex/issues/19450)

7. **#20552**: File tree toggle UI state inconsistent—shows enabled but hidden. Affects navigation clarity in desktop app.  
   → [openai/codex#20552](https://github.com/openai/codex/issues/20552)

8. **#20802**: Regression in thread switching performance on macOS desktop app post-update. Impacts responsiveness in long sessions.  
   → [openai/codex#20802](https://github.com/openai/codex/issues/20802)

9. **#20661**: Same Windows `app-server` startup failure preventing DOM/screenshot access via Browser Use plugin.  
   → [openai/codex#20661](https://github.com/openai/codex/issues/20661)

10. **#17401**: `@include` directive proposal for modular `AGENTS.md` files improves maintainability of complex agent instructions. Niche but valuable for power users.  
    → [openai/codex#17401](https://github.com/openai/codex/issues/17401)

---

### **Key PR Progress**

1. **#20824**: Drive TUI service-tier commands from model metadata instead of hardcoded values—aligning UX with backend capabilities.  
   → [openai/codex#20824](https://github.com/openai/codex/pull/20824)

2. **#20822**: Introduce structured `ModelServiceTier` across core and app-server layers—standardizing tier representation.  
   → [openai/codex#20822](https://github.com/openai/codex/pull/20822)

3. **#20823**: Expose structured service tiers in app-server API payloads—deprecating legacy fields.  
   → [openai/codex#20823](https://github.com/openai/codex/pull/20823)

4. **#20252**: Responsive Markdown table rendering in TUI—addresses readability issue from #8259.  
   → [openai/codex#20252](https://github.com/openai/codex/pull/20252)

5. **#20733**: Centralize approval prompts using `GuardianApprovalRequest`—reducing duplication between hooks, guardian review, and human prompts.  
   → [openai/codex#20733](https://github.com/openai/codex/pull/20733)

6. **#20321**: Hook trust metadata enforcement—unmanaged hooks blocked until reviewed; managed hooks bypass check. Security hardening.  
   → [openai/codex#20321](https://github.com/openai/codex/pull/20321)

7. **#20692**: Support `PreToolUse.additionalContext`—enabling richer hook guidance without modifying runtime contracts.  
   → [openai/codex#20692](https://github.com/openai/codex/pull/20692)

8. **#20819**: Add raw scrollback mode—lets users copy partial responses without losing formatting nuances.  
   → [openai/codex#20819](https://github.com/openai/codex/pull/20819)

9. **#20719**: Use shared response helpers for compact requests—ensuring consistency between `/responses` and `/compact`.  
   → [openai/codex#20719](https://github.com/openai/codex/pull/20719)

10. **#20756**: Enable `PreToolUse` permission decisions (`allow`/`ask`)—extending tool control granularity beyond `deny`.  
    → [openai/codex#20756](https://github.com/openai/codex/pull/20756)

---

### **Feature Request Trends**

- **Longer Context Windows**: Repeated calls to expand GPT-5.5 context beyond 400K (e.g., #19464).
- **TUI Usability**: Improved Markdown rendering (#8259), customizable status lines (#17827), raw scrollback (#20819).
- **Modular Instructions**: `@include` for `AGENTS.md` (#17401) suggests need for composable agent configs.
- **Cross-Platform Consistency**: Full Computer Use support on Windows (#19305), ARM64 compatibility (#17491).
- **Auth Simplicity**: Eliminate post-SSO phone verification (#20161).

---

### **Developer Pain Points**

- **Windows Browser Use Breakage**: Persistent `app-server` startup failures (`os error 3`) block automation workflows on Windows (multiple reports).
- **Desktop App Instability**: Freezing, clipping UIs, and performance regressions in recent macOS/Win versions.
- **Auth Friction**: Token refresh issues and forced phone verification disrupt seamless login flows.
- **CLI/TUI Fragmentation**: In-session profile switching missing (#20635), despite per-startup profile selection.
- **Hook Ecosystem Maturity**: Growing complexity around hook trust (#20321), permissions (#20756), and context injection (#20692) reveals need for better docs and examples.

--- 

*Prepared by Technical Analyst – AI Developer Tools*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest – May 3, 2026

---

#### **Today's Highlights**

The Gemini CLI team continues to focus on agent reliability and core stability this week. A critical bug surfaced where the agent misreports successful task completion after hitting turn limits (#22323), while new PRs aim to fix proxy support (#26361) and prevent destructive file operations via versioned backups (#25947). Additionally, multiple issues highlight growing concerns around permission persistence (#24916), shell command hanging (#25166), and model configuration resilience (#25684).

---

#### **Releases**

No new releases in the last 24 hours.

---

#### **Hot Issues**

1. **[#26390](https://github.com/google-gemini/gemini-cli/issues/26390)** – *Action-Bias Overriding User Directives*  
   Users report the agent ignores `gemini.md` constraints and autonomously executes destructive actions (e.g., `write_file`) without consent. This raises serious safety concerns about agent autonomy vs. user control.  
   👍 1 | 🗨️ 2 comments

2. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** – *Subagent Reports False Success After MAX_TURNS*  
   The `codebase_investigator` subagent incorrectly marks tasks as `"GOAL"` success even when it hits turn limits—masking real interruptions. Critical for trust in long-running analyses.  
   👍 2 | 🗨️ 4 comments

3. **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** – *Permission Prompts Reappear Repeatedly*  
   Users must repeatedly approve access to the same files despite choosing "allow for all future sessions." Impacts workflow efficiency and UX consistency.  
   👍 0 | 🗨️ 3 comments

4. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** – *Shell Commands Hang After Completion*  
   Simple CLI commands (e.g., `ls`) finish but leave the CLI stuck waiting for input. Blocks automation and interactive use.  
   👍 3 | 🗨️ 2 comments

5. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** – *Browser Agent Ignores settings.json Configs*  
   Settings like `maxTurns` are ignored by the browser agent, breaking expected behavior in automated workflows.  
   👍 0 | 🗨️ 2 comments

6. **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** – *Implement Global vs Project Memory Routing*  
   Proposal to separate user-wide vs project-specific memory storage. Enhances personalization and context isolation.  
   👍 2 | 🗨️ 1 comment

7. **[#22809](https://github.com/google-gemini/gemini-cli/issues/22809)** – *Prompt Agent to Use Memory Proactively*  
   Suggests updating system prompts to trigger memory writes during preference detection or repeated corrections. Improves agent adaptability.  
   👍 1 | 🗨️ 1 comment

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** – *400 Error with >128 Tools Enabled*  
   Agent fails when more than ~400 tools are active due to API limits. Needs smarter tool scoping logic.  
   👍 0 | 🗨️ 1 comment

9. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** – *Assess AST-Aware File Reads & Mapping*  
   Explores whether Abstract Syntax Tree-aware tools improve code navigation precision and token efficiency. High-impact R&D area.  
   👍 1 | 🗨️ 5 comments

10. **[#26391](https://github.com/google-gemini/gemini-cli/issues/26391)** – *Unhandled Promise Rejection in Parser Timeout*  
    Crashes occur due to unhandled timer timeouts in bundled JS. Indicates instability in production builds.  
    👍 0 | 🗨️ 1 comment

---

#### **Key PR Progress**

1. **[#26361](https://github.com/google-gemini/gemini-cli/pull/26361)** – Fix proxy support by externalizing `https-proxy-agent`. Resolves `TypeError: HttpsProxyAgent is not a constructor` in proxied environments.  
2. **[#25947](https://github.com/google-gemini/gemini-cli/pull/25947)** – Introduce versioned pre-write backups with agent-driven restore. Mitigates destructive edit loops by enabling rollback of file changes.  
3. **[#26387](https://github.com/google-gemini/gemini-cli/pull/26387)** – Implement fallback to system `ripgrep` if bundled binary missing. Improves cross-platform compatibility.  
4. **[#25684](https://github.com/google-gemini/gemini-cli/pull/25684)** – Switch utility models to `flash-lite` to reduce quota usage and prevent exhaustion-related freezes. Addresses #23397 and others.  
5. **[#26367](https://github.com/google-gemini/gemini-cli/pull/26367)** – Print `--version` to real stdout before `patchStdio`, fixing smoke test failures in nightly builds.  
6. **[#25072](https://github.com/google-gemini/gemini-cli/pull/25072)** – Add favorite models and keyboard cycling (via #20227). Enhances model switching ergonomics.  
7. **[#26324](https://github.com/google-gemini/gemini-cli/pull/26324)** – Prevent infinite wrapping loop in ghost text for long inputs like `@getskill.sh:3`. Stabilizes CLI responsiveness.  
8. **[#26366](https://github.com/google-gemini/gemini-cli/pull/26366)** – Fix SEA build child-process fork recursion by running helpers directly instead of spawning new `gemini.exe` instances.  
9. **[#25962](https://github.com/google-gemini/gemini-cli/pull/25962)** – Standardize config option names to positive boolean semantics (e.g., `showX`, `enableY`). Improves discoverability.  
10. **[#21963](https://github.com/google-gemini/gemini-cli/pull/21963)** – Strip `$schema` from MCP tool parameters for API compatibility. Fixes intermittent function call failures.

---

#### **Feature Request Trends**

- **Memory System Enhancements**: Multiple requests (#22819, #22809) call for better memory routing (global vs project) and proactive usage by agents.
- **Agent Safety & Control**: Users want stricter safeguards against destructive actions (#22672) and clearer feedback on termination states (#22323).
- **Configuration Reliability**: Browser agent ignoring `settings.json` (#22267) and inconsistent permission persistence (#24916) reflect demand for robust config handling.
- **Performance & Stability**: Long chat sessions suffer lag (#26374), shell hangs (#25166), and parser timeouts (#26391), indicating need for async/streaming optimizations.
- **Developer Tooling**: Favorites, shortcuts (@ mentions), and standardized configs (#25072, #25962) show appetite for productivity improvements.

---

#### **Developer Pain Points**

- **Unreliable Permission Flow**: Users repeatedly denied access to files even after granting broad permissions.
- **Agent Misrepresentation**: Tasks marked complete prematurely, hiding actual failures or interruptions.
- **Destructive Autonomy**: Agent performs irreversible edits without explicit confirmation, especially in YOLO mode.
- **Shell Integration Bugs**: Commands terminate but CLI remains stuck in "awaiting input" state.
- **Cross-Platform Instability**: SEA builds crash on forked subprocesses; SSH sessions cause display corruption.
- **Quota & Rate Limiting**: Utility model exhaustion leads to silent freezes or rate-limit loops (#25684).
- **UI Glitches**: Streaming tables render incrementally, breaking accessibility; scroll behavior flickers in long chats.

--- 

*Generated by Gemini CLI Community Digest Bot – Powered by GitHub Activity Analysis*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – May 3, 2026**

---

### **Today’s Highlights**
No new releases were published in the past 24 hours. However, several high-impact issues emerged, including widespread instability with AI model responses (#1590), critical session management deadlocks (#2364, #3084), and broken Windows PowerShell support (#1680). A surge of feature requests around MCP usability, reasoning effort control, and session navigation also signals growing demand for enhanced agentic workflows.

---

### **Releases**
*No releases in the last 24 hours.*

---

### **Hot Issues**  
*(Top 10 by impact, engagement, or urgency)*

1. **[#1680]** *Windows 11 + PS 5.1 unusable due to hardcoded `pwsh.exe`*  
   The CLI now fails completely on systems without PowerShell Core, blocking core workflows for many Windows users. 7 upvotes; urgent fix needed.  
   https://github.com/github/copilot-cli/issues/1680

2. **[#2364]** *[Critical] Agent sessions hang indefinitely, cannot be stopped or replied to*  
   Sessions get stuck after drafting a PR, rendering organization repos unusable. Only 3 comments but flagged as critical.  
   https://github.com/github/copilot-cli/issues/2364

3. **[#1590]** *AI model repeatedly fails with server errors after retries*  
   Long-running tasks consistently hit "Response interrupted" loops. 12 upvotes; affects reliability across all platforms.  
   https://github.com/github/copilot-cli/issues/1590

4. **[#2751]** *Remote session fails on org-owned repos: "could not resolve repository"*  
   Blocks `/remote` functionality for enterprise users. 12 upvotes; likely auth/config regression.  
   https://github.com/github/copilot-cli/issues/2751

5. **[#3084]** *postToolUse hook deadlock causes 99% CPU spin, ignores SIGTERM*  
   Resumed sessions can lock up permanently after permission checks. High severity; impacts stability.  
   https://github.com/github/copilot-cli/issues/3084

6. **[#2739]** *xhigh reasoning removed from GPT-5.4 / GPT-5.3-Codex—models deemed "useless"*  
   Community backlash over removal of high-reasoning tiers. 12 upvotes; suggests API/model policy shift.  
   https://github.com/github/copilot-cli/issues/2739

7. **[#3066]** *macOS prerelease hides Opus 4.7 internal/high/xhigh models in picker*  
   Users can route to these models but can't select them via `/model`. Confusing UX gap.  
   https://github.com/github/copilot-cli/issues/3066

8. **[#3080]** *claude-opus-4.7-high rejects requests with wrong reasoning_effort=medium*  
   Model enforces `high` but CLI sends `medium`, causing 400s. No UI to override.  
   https://github.com/github/copilot-cli/issues/3080

9. **[#3081]** *NixOS keychain support broken despite correct setup*  
   Auth fails even with libsecret/GNOME Keyring installed. Linux-specific regression suspected.  
   https://github.com/github/copilot-cli/issues/3081

10. **[#3077]** *Spammy invalid issue about "robux" and fake user "Clyde_456410"*  
    Marked invalid but highlights potential abuse or impersonation risks in issue tracking.  
    https://github.com/github/copilot-cli/issues/3077

---

### **Key PR Progress**  
*(Most relevant open PRs)*

1. **[#3075]** *Change Feature Request template to textarea*  
   Improves UX for submitting detailed feedback by replacing single-line input with multi-line text area.  
   https://github.com/github/copilot-cli/pull/3075

*(Note: Only one PR updated in last 24h; others listed below reflect related community interest.)*

2. **[#3089]** *Add `/redo` command after undo/rewind*  
   Would restore lost edits after over-undoing—critical for interactive debugging.  
   https://github.com/github/copilot-cli/issues/3089

3. **[#2956]** *Add "Disable MCP" option to `/mcp show` menu*  
   Improves discoverability of existing disable functionality.  
   https://github.com/github/copilot-cli/issues/2956

4. **[#3074]** *Propose `/effort` command to toggle reasoning effort quickly*  
   Streamlines switching between low/med/high reasoning during prompts.  
   https://github.com/github/copilot-cli/issues/3074

5. **[#3073]** *Support MCP resource subscriptions & notifications*  
   Enables reactive agent workflows via server-pushed updates. Builds on prior resource work.  
   https://github.com/github/copilot-cli/issues/3073

---

### **Feature Request Trends**

- **Enhanced Session Management**: Tree navigation, branching/forking visibility, redo capability (#3091, #3089).
- **MCP Usability**: Better discovery (disable in menus), subscription support, repo-level config consistency (#2956, #3073, #3088).
- **Reasoning Effort Control**: Dedicated `/effort` command or model-aware defaults (#3074, #3080).
- **Cross-Platform Auth Fixes**: NixOS keychain, Windows PowerShell compatibility (#1680, #3081).
- **Config Reliability**: Restore `.mcp.json` auto-loading and respect repo overrides (#3083, #3088).

---

### **Developer Pain Points**

- **Session Instability**: Deadlocks, phantom locks, misleading timestamps, and unstoppable agents degrade productivity.
- **Model Configuration Friction**: Lack of UI for reasoning effort, hidden advanced models, and incorrect default parameters hinder experimentation.
- **Platform-Specific Breakdowns**: Windows (PS 5.1), NixOS, and Linux auth issues create fragmentation.
- **MCP Adoption Barriers**: Poor discoverability and missing primitives (subscriptions) slow integration of external tools.
- **CLI vs Interactive Discrepancies**: Commands like `copilot plugin marketplace list` ignore local settings used in-sessions.

--- 

*For full context, review each issue at the provided GitHub URLs.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – May 3, 2026**

---

### **Today's Highlights**
No new releases were published in the last 24 hours. The community has raised significant concerns around session performance regressions (v1.37.0), confusing quota display logic, and inconsistent skill directory discovery compared to Claude Code. Meanwhile, a PR addressing nested skill loading (#1894) is under active review, signaling responsiveness to cross-platform compatibility gaps.

---

### **Releases**
*No new releases in the past 24 hours.*

---

### **Hot Issues** *(Top 10)*

| # | Summary | Why It Matters | Reaction |
|---|--------|----------------|----------|
| [#2040](https://github.com/MoonshotAI/kimi-cli/issues/2040) | Request VS Code notification when approval is required, instead of relying on webview visibility | Prevents missed approvals due to minimized IDE or background tabs—critical for agentic workflows requiring human-in-the-loop decisions | 5 comments; open since Apr 23 |
| [#2091](https://github.com/MoonshotAI/kimi-cli/issues/2091) | Sessions become extremely slow post-upgrade to v1.37.0 during MATLAB-heavy usage | Performance regression impacts productivity; suggests possible resource leak or inefficient token processing in specific contexts | 2 comments; updated yesterday |
| [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894) | Kimi CLI fails to recursively load nested `.agents/skills/{name}/skills/xxx` directories, unlike Codex | Creates fragmentation between ecosystems; breaks existing agent setups using hierarchical skills architecture | 2 comments; highlights compatibility gap |
| [#2150](https://github.com/MoonshotAI/kimi-cli/issues/2150) | Confusing dual-quota system with inverted semantics and poor discoverability | Migrating users from Claude Code report confusion; undermines trust in billing transparency | Fresh issue; no reactions yet |
| [#2149](https://github.com/MoonshotAI/kimi-cli/issues/2149) | Request Claude Code-style configurable statusline showing real-time usage/cost metadata | Enables observability and cost control at-a-glance; aligns UX with leading AI coding assistants | Same author as #2150; likely related |
| [#2148](https://github.com/MoonshotAI/kimi-cli/issues/2148) | `UserPromptSubmit` hook receives empty prompt when input is `list[ContentPart]` | Breaks plugin/hook ecosystem integrity; indicates improper serialization in event payloads | Reported on v1.41.0; affects extensibility |
| [#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147) | MCP tool schemas loaded eagerly into context even when unused, wasting tokens | High token overhead especially with multiple MCP servers; harms efficiency in long-running sessions | Fresh feature request with clear impact |
| [#2145](https://github.com/MoonshotAI/kimi-cli/issues/2145) | Broad request for "Agent Tools" via hooks—no details provided | Suggests demand for deeper integration points but lacks specificity; may indicate broader need for extensible tooling | Minimal detail; low signal |

> *Note: All issues opened on May 2 except #2091 (updated May 2).*

---

### **Key PR Progress** *(Top 3)*

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#768](https://github.com/MoonshotAI/kimi-cli/pull/768) | feat(shell): add pseudo-cwd for shell mode | Implements virtual current working directory tracking in shell mode without affecting agent workdir—improves UX consistency | **CLOSED** |
| [#767](https://github.com/MoonshotAI/kimi-cli/pull/767) | feat(approval): persist approve_for_session per session | Adds session-scoped persistence of auto-approval state via `approval_state.json`, improving resume reliability | **CLOSED** |
| [#2146](https://github.com/MoonshotAI/kimi-cli/pull/2146) | feat(#1894): recursively discover skills in nested subdirectories | Addresses core limitation in skill discovery by scanning nested `.agents/skills/*/skills/*` hierarchies—direct response to user-reported gap vs. Codex | **OPEN**, submitted May 2 |

---

### **Feature Request Trends**

Developers consistently seek **UX parity with Claude Code**, particularly:
- Configurable real-time statuslines showing usage/cost (`#2149`)
- Recursive skill directory support matching Codex behavior (`#1894`)
- Better visibility into approval prompts via IDE-native notifications (`#2040`)

There’s also growing demand for **efficient MCP integration**, specifically lazy-loading of tool schemas only when invoked (`#2147`). Additionally, **transparent quota management** is emerging as a top concern, with users criticizing opaque dual-quota systems (`#2150`).

---

### **Developer Pain Points**

- **Performance regressions**: v1.37.0 introduced severe latency in certain sessions (`#2091`)
- **Inconsistent skill discovery**: Nested `.agents/skills/` structures are ignored, breaking multi-agent repos (`#1894`)
- **Poor approval visibility**: Web-based approval dialogs fail if VS Code isn’t visible (`#2040`)
- **Unclear billing model**: Dual quota presentation causes confusion for migrated users (`#2150`)
- **Hook API inconsistencies**: Event payloads don’t preserve full input structure (`#2148`)

These reflect a recurring theme: **Kimi CLI lags behind Claude Code in developer experience and ecosystem interoperability**, prompting urgent requests for parity and clarity.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – May 3, 2026**

---

### **Today's Highlights**
The OpenCode team released v1.14.33 and v1.14.32, addressing critical regressions around plugin loading, shell mode editing, and HTTP API context handling. A notable regression in v1.14.32—where plugins and MCPs failed to register due to lost ALS context—was immediately reported (#25457) and is under active investigation. The community continues to push for improved async agent delegation, streaming reliability, and cross-platform consistency.

---

### **Releases**

**v1.14.33**  
- Fixed custom agents in plugins failing to load (#24930).  
- *Contributors:* @jerome-benoit, @OpeOginni, @HyeokjaeLee  

**v1.14.32**  
- Restored full keyboard navigation in shell mode (backspace, cursor movement).  
- Resolved HTTP API workspace adapter context loss affecting create/sync/routing flows.  
- Fixed experimental workspace creation requests missing required fields.

---

### **Hot Issues**

1. **[#23887](https://github.com/anomalyco/opencode/issues/23887)**: Kimi K2.6/K2.5 models via OpenCode Go consistently return “Provider returned error” on CLI v1.14.20+ (35 comments, 👍6). Users report this breaks workflows with otherwise functional providers—high impact given Kimi’s growing adoption.

2. **[#785](https://github.com/anomalyco/opencode/issues/785)**: Request to disable streaming mode entirely (23 comments, 👍37). Critical for proxy users like Credal OpenAI Proxy that lack streaming support; long-standing UX gap.

3. **[#16685](https://github.com/anomalyco/opencode/issues/16685)**: Reopened Windows-specific Kimi K2.5 “Provider returned error” bug (now closed but highly visible), highlighting platform/provider fragmentation issues.

4. **[#24418](https://github.com/anomalyco/opencode/issues/24418)**: CLI hangs indefinitely on “Loading plugins…” on Windows (21 comments). Occurs even without plugins—suggests race condition in bootstrap logic post-v1.14.25.

5. **[#5887](https://github.com/anomalyco/opencode/issues/5887)**: Demand for true async/sub-agent delegation without blocking UI context (19 comments, 👍67). Flagship feature request shaping future agent architecture.

6. **[#23928](https://github.com/anomalyco/opencode/issues/23928)**: `<` and `<=` operators silently truncate AI responses (17 comments, 👍1). Obscure but disruptive syntax edge case affecting code generation.

7. **[#22683](https://github.com/anomalyco/opencode/issues/22683)**: Desktop app crashes constantly after v1.4.6 update (17 comments). Memory-related instability prompts urgent stability concerns.

8. **[#4240](https://github.com/anomalyco/opencode/issues/4240)**: Lack of native changes review integration in Zed editor (14 comments, 👍17). Competitive differentiator vs. Gemini CLI and Copilot.

9. **[#16017](https://github.com/anomalyco/opencode/issues/16017)**: Request for Go plan usage/balance API endpoint (8 comments, 👍18). Enables better subscription transparency and third-party tooling.

10. **[#25457](https://github.com/anomalyco/opencode/issues/25457)**: High-severity regression in v1.14.32 causing all plugins/MCPs to fail registration (4 comments). Immediate blocker for plugin ecosystem health.

---

### **Key PR Progress**

1. **[#25501](https://github.com/anomalyco/opencode/pull/25501)**: Normalize instance lifecycle wiring—moves bootstrapping into explicit layer to fix ALS context loss bugs like #25457.

2. **[#25493](https://github.com/anomalyco/opencode/pull/25493)**: Introduces `pre_chat.messages.transform` hook allowing plugins to strip images before LLM invocation—addresses #25494.

3. **[#25475](https://github.com/anomalyco/opencode/pull/25475)**: Moves instance bootstrap into `InstanceStore.boot()` to ensure consistent initialization across reload paths.

4. **[#25496](https://github.com/anomalyco/opencode/pull/25496)**: Fixes provider model refresh propagation after recent merges—resolves stale model lists in UI/TUI.

5. **[#22674](https://github.com/anomalyco/opencode/pull/22674)**: Adds ACP `writeTextFile` client capability support—enables native file sync for ACP-compliant editors (closes #4240).

6. **[#25500](https://github.com/anomalyco/opencode/pull/25500)**: Excludes `.map` files from CLI binary to reduce bloat—fixes unintended source map inclusion during build.

7. **[#25481](https://github.com/anomalyco/opencode/pull/25481)**: Auto-disposes `InstanceContext` after command execution—prevents resource leaks in debug subcommands.

8. **[#25437](https://github.com/anomalyco/opencode/pull/25437)**: Adds HttpApi route exerciser script—improves test coverage and catch regressions in Effect backend routes.

9. **[#25034](https://github.com/anomalyco/opencode/pull/25034)**: Defaults HTTP API backend to enabled in dev/beta channels—accelerates migration to new server stack.

10. **[#20039](https://github.com/anomalyco/opencode/pull/20039)**: Refactors “bash” tool into “shell” with multi-shell prompts—improves cross-platform compatibility (pwsh/powershell/cmd).

---

### **Feature Request Trends**

- **Async Agent Delegation**: Multiple users seek non-blocking sub-agent workflows (#5887).
- **Streaming Control**: Desire to disable streaming per-provider or globally (#785).
- **Usage Transparency**: Unified usage tracking APIs for subscription plans (#16017).
- **Native Editor Integration**: Deep IDE/editor tooling (e.g., Zed review icons, ACP compliance) (#4240, #22674).
- **Cross-Platform Consistency**: Termux support, Windows network mapping, and macOS paste behavior fixes recurring demands.
- **Plugin Extensibility**: Hooks like `pre_chat.messages.transform` enable deeper customization (#25494).

---

### **Developer Pain Points**

- **Regression Management**: v1.14.32 introduced a high-impact plugin registration bug (#25457), eroding trust in minor releases.
- **Windows Instability**: Plugin loading hangs and excessive memory use plague Windows users (#24418, #24449).
- **Provider Fragmentation**: Inconsistent behavior across models (e.g., Kimi errors only on certain platforms/providers) complicates debugging.
- **CLI Usability**: Copy-paste broken in CLI on macOS (#25312), shell mode editing limitations.
- **Documentation Gaps**: Docs imply LSP/formatter auto-enabling contrary to actual opt-in design (#23566).
- **Resource Overhead**: Reported 3GB+ memory per process on Windows despite modest sessions (#24449).

--- 

*Generated by OpenCode Technical Analyst | Data snapshot: 2026-05-03*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – May 3, 2026**

---

### **Today's Highlights**
A critical regression in Zellij integration was resolved with the release of **v0.72.1**, restoring `Shift+Enter` newline behavior inside terminal multiplexers. Simultaneously, several high-impact fixes landed for OpenAI Codex transport handling and Xiaomi MiMo provider configuration, while new AI provider support (Together AI) moves closer to merge.

---

### **Releases**
**v0.72.1** – Hotfix addressing key regressions:
- Fixed `Shift+Enter` not inserting newlines within **Zellij** (Issue [#3259](https://github.com/badlogic/pi-mono/issues/3259))
- Resolved installation breakage affecting mise-managed versions (Issue [#4102](https://github.com/badlogic/pi-mono/issues/4102))

---

### **Hot Issues**

1. **[CLOSED] Regression: Shift+Enter no longer inserts newline inside Zellij**  
   Critical TUI usability fix after upgrade; now restored. Users reported it only failed inside Zellij.  
   → [Issue #3259](https://github.com/badlogic/pi-mono/issues/3259)

2. **[CLOSED] openai-codex-responses verbosity="low" breaks tool-calling**  
   Default verbosity change caused GPT-5.3-Codex to skip tool calls, halting agentic workflows.  
   → [Issue #4026](https://github.com/badlogic/pi-mono/issues/4026)

3. **[CLOSED] Auto-detect light/dark mode from system**  
   Long-standing UX request honored—pi now respects OS theme changes without restart.  
   → [Issue #1436](https://github.com/badlogic/pi-mono/issues/1436)

4. **[CLOSED] Compaction deletes all data unexpectedly**  
   Severe bug causing silent data loss during database compaction.  
   → [Issue #4046](https://github.com/badlogic/pi-mono/issues/4046)

5. **[OPEN] Support Xiaomi MiMo Token Plan (China)**  
   Regional API endpoint requires explicit config due to geo-restricted billing.  
   → [Issue #4082](https://github.com/badlogic/pi-mono/issues/4082)

6. **[CLOSED] Kitty Keyboard Protocol breaks Italian & French layouts**  
   Accented chars doubled on BÉPO/French and Italian keyboards under Kitty protocol.  
   → [Issue #4067](https://github.com/badlogic/pi-mono/issues/4067)

7. **[CLOSED] Can't install pi → broken internal pieces on fresh setups**  
   Installation pipeline failure blocks new users repeatedly across versions.  
   → [Issue #4086](https://github.com/badlogic/pi-mono/issues/4086)

8. **[OPEN] /export not saving session .html file**  
   Export functionality silently fails in v0.72.1.  
   → [Issue #4108](https://github.com/badlogic/pi-mono/issues/4108)

9. **[OPEN] Codex WebSocket prevents --print from exiting**  
   Infinite hang when using `--print` with `websocket` transport.  
   → [Issue #4103](https://github.com/badlogic/pi-mono/issues/4103)

10. **[CLOSED] Ukrainian Cyrillic Ctrl+Key combos unresponsive**  
    Key mapping assumes QWERTY; non-Latin layouts ignored.  
    → [Issue #4109](https://github.com/badlogic/pi-mono/issues/4109)

---

### **Key PR Progress**

1. **[OPEN] feat(ai): add Together AI as a provider**  
   Native support for Together AI models via OpenAI-compatible API.  
   → [PR #3624](https://github.com/badlogic/pi-mono/pull/3624)

2. **[OPEN] fix(ai): split Xiaomi MiMo into regional providers**  
   Separates default API billing endpoint from prepaid Token Plans by region.  
   → [PR #4112](https://github.com/badlogic/pi-mono/pull/4112)

3. **[CLOSED] Fix OpenCode Go model mappings (Qwen, MiniMax)**  
   Corrected malformed `api:` fields causing 404s on OpenCode Go endpoints.  
   → [PR #4110](https://github.com/badlogic/pi-mono/pull/4110)

4. **[CLOSED] Honor transport field in buildBaseOptions**  
   Fixes Codex transport selection being ignored in streaming.  
   → [PR #4090](https://github.com/badlogic/pi-mono/pull/4090)

5. **[CLOSED] Support OpenAI image generation in TUI**  
   Enables `/imagine`-style commands in interactive sessions.  
   → [PR #4094](https://github.com/badlogic/pi-mono/pull/4094)

6. **[CLOSED] Fix nested error parsing in Codex streams**  
   Properly handles deeply nested `type: "error"` events.  
   → [PR #4093](https://github.com/badlogic/pi-mono/pull/4093)

7. **[CLOSED] Forward websocket transport in streamSimple**  
   Ensures cached-ws transport works with coding-agent calls.  
   → [PR #4091](https://github.com/badlogic/pi-mono/pull/4091)

8. **[CLOSED] Migrate TypeBox validation to v1**  
   Upgrades schema validation engine with backward compatibility.  
   → [PR #3474](https://github.com/badlogic/pi-mono/pull/3474)

9. **[CLOSED] Add GPT-5.5 model definitions**  
   Expands official model support across providers.  
   → [PR #3615](https://github.com/badlogic/pi-mono/pull/3615)

10. **[CLOSED] Dedupe symlinked skills in config**  
    Prevents duplicate skill loading from npm extensions.  
    → [PR #3417](https://github.com/badlogic/pi-mono/pull/3417)

---

### **Feature Request Trends**

- **Keyboard layout extensibility**: Multiple reports highlight lack of support for non-QWERTY layouts (Italian, French, Ukrainian, Hangul). A recurring ask is for an **input-normalizer hook** to remap keycodes.
- **Provider diversity**: Requests for Nebius, Together AI, and improved Chinese-region token plans signal demand for broader cloud coverage.
- **Configuration flexibility**: Support for `settings.local.json` (project-override settings) and foundational filesystem abstraction for extensions are emerging priorities.
- **Image generation**: Native OpenAI image tools integrated into TUI requested since Claude Code’s success.

---

### **Developer Pain Points**

- **Installation instability**: Fresh installs fail consistently due to missing internal components (#4086).
- **Keyboard input corruption**: Kitty protocol interferes with international keyboard layouts, doubling special characters (#4067).
- **Transport misconfiguration**: Codex WebSocket and transport flags often ignored or misapplied (#4103, #4083).
- **Model endpoint drift**: Third-party providers (OpenCode Go, Moonshot) frequently change APIs, breaking integrations (#4106, #4107).
- **Session export broken**: Core utility `/export` fails silently post-update (#4108).

--- 

*Data sourced from badlogic/pi-mono · Generated by Pi Community Bot*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026-05-03**

---

### 1. **Today's Highlights**
A nightly build (v0.15.6-nightly.20260503) introduces a session-scoped `FileReadCache` to optimize repeated file reads and adds proxy support fixes. Concurrently, the team is advancing background task unification—Phase C merges Monitor tool integration into the unified UI—while addressing critical reliability gaps like API retry logic and model switching workflows.

---

### 2. **Releases**
- **v0.15.6-nightly.20260503** ([PR #3766](https://github.com/QwenLM/qwen-code/pull/3766), [PR #3717](https://github.com/QwenLM/qwen-code/pull/3717), [PR #3687](https://github.com/QwenLM/qwen-code/pull/3687)):
  - Introduces `FileReadCache` with short-circuiting for unchanged reads, improving I/O efficiency.
  - Fixes CLI proxy configuration handling.
  - Continues Phase C of background task unification by wiring Monitor entries into the combined dialog.

---

### 3. **Hot Issues**
1. **[#3634](https://github.com/QwenLM/qwen-code/issues/3634)**: Background task management roadmap update; Phase A/B merged, now focusing on UI consolidation (Monitor integration).  
2. **[#3004](https://github.com/QwenLM/qwen-code/issues/3004)**: P1 reliability gap—API lacks exponential backoff, fallback retries, or token refresh on quota errors. High-priority for production stability.  
3. **[#3757](https://github.com/QwenLM/qwen-code/issues/3757)**: JetBrains AI users report 401 errors—confusion between quota exhaustion vs. misconfiguration. Needs triage.  
4. **[#3789](https://github.com/QwenLM/qwen-code/issues/3789)**: File read failures under remote desktop (e.g., Sunflower) despite local access—potential path resolution or permission issue.  
5. **[#3772](https://github.com/QwenLM/qwen-code/issues/3772)**: DeepSeek v4 Pro throws 400 due to missing `thinking` block in follow-up requests—critical for reasoning-mode compatibility.  
6. **[#3787](https://github.com/QwenLM/qwen-code/issues/3787)**: ACP mode inconsistently uses English in thinking blocks regardless of user language—UX inconsistency flagged.  
7. **[#3796](https://github.com/QwenLM/qwen-code/issues/3796)**: Python SDK release notes inherit stale content linearly—technical debt requiring refactoring.  
8. **[#3795](https://github.com/QwenLM/qwen-code/issues/3795)**: Duplicate `isExpectedMissingGitHubRelease` function across three files—violates DRY principle.  
9. **[#3794](https://github.com/QwenLM/qwen-code/issues/3794)**: Release helpers lack network timeouts—risk of hanging CI jobs during API calls.  
10. **[#3793](https://github.com/QwenLM/qwen-code/issues/3793)**: Inconsistent `TAG_PREFIX` convention between Python/TS SDKs—causes tagging bugs.

---

### 4. **Key PR Progress**
1. **[#3797](https://github.com/QwenLM/qwen-code/pull/3797)**: `/model list` subcommand enables dynamic discovery of available models via OpenAI-compatible `/models` endpoint.  
2. **[#3115](https://github.com/QwenLM/qwen-code/pull/3115)**: Adds per-file AI contribution tracking in git commits—addresses compliance needs for open-source/enterprises.  
3. **[#3190](https://github.com/QwenLM/qwen-code/pull/3190)**: `/chat` commands for saving, listing, and resuming named sessions—enhances long-term context retention.  
4. **[#3743](https://github.com/QwenLM/qwen-code/pull/3743)**: Prevents file paths from being parsed as slash commands (fixes #1804).  
5. **[#3798](https://github.com/QwenLM/qwen-code/pull/3798)**: Classifies errors to avoid retrying deterministic failures (400/401/etc.), only retrying transient ones.  
6. **[#3785](https://github.com/QwenLM/qwen-code/pull/3785)**: `/doctor memory` command provides structured diagnostics for debugging memory issues.  
7. **[#3698](https://github.com/QwenLM/qwen-code/pull/3698)**: Runs auto-compression before ACP sends—ensures chat state consistency.  
8. **[#3799](https://github.com/QwenLM/qwen-code/pull/3799)**: Normalizes `/models` response parsing across OpenAI-compatible providers.  
9. **[#3783](https://github.com/QwenLM/qwen-code/pull/3783)**: Enables non-interactive model switching via CLI arguments.  
10. **[#3774](https://github.com/QwenLM/qwen-code/pull/3774)**: Enforces prior read validation before Edit/WriteFile—prevents out-of-context mutations using cached reads.

---

### 5. **Feature Request Trends**
- **Background Task Unification**: Ongoing effort to consolidate Monitor, Shell, and Agent tasks into a single UI (Phases A→C).
- **Reliability & Observability**: Strong demand for robust API retry logic (exponential backoff, fallbacks), better error diagnostics, and cost estimation.
- **Developer Tooling**: Improved release workflows (Python SDK), standardized conventions (tag prefixes), and timeout safeguards.
- **User Experience**: Consistent language in ACP thinking blocks, reliable file access under remote environments, and non-interactive model switching.

---

### 6. **Developer Pain Points**
- **API Reliability**: Lack of exponential backoff and fallback mechanisms causes silent failures under load (Issue #3004).
- **File Access Issues**: Remote desktop setups break file reading despite local functionality (Issue #3789).
- **DeepSeek Compatibility**: Reasoning-mode follow-ups fail without explicit `thinking` blocks (Issues #3772, #3786).
- **Release Workflow Fragility**: No timeouts in CI scripts risk hanging jobs; duplicated code increases maintenance cost.
- **Observability Gaps**: Insufficient diagnostics around rate limits, memory usage, and stream retries hinder debugging.

--- 

*For full details, visit the [Qwen Code GitHub repository](https://github.com/QwenLM/qwen-code).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*