# ArXiv AI Research Digest 2026-08-08

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-08 01:07 UTC

---

# ArXiv AI Research Digest — 2026-08-08

## Today's Highlights

Today's submissions reveal a maturing field shifting from *model-centric* to *system-centric* research. The dominant thread is **reliability under composition**: how to make LLM-based agents trustworthy when they chain tools, retrieve context, self-distill, and govern themselves over long horizons. Breakthroughs include a certified anytime-valid stopping rule that cuts agent evaluation cost by 74×, a causal audit exposing the "illusion of visual tool-use," and a mechanism-design framework making AI governance self-enforcing via compute budgets. Simultaneously, theoretical work delivers an optimal agnostic PAC learner and minimax-optimal early-stopped gradient descent for Gaussian mixtures, grounding practice in provable guarantees.

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Learning When to Trust via Selective Context Preference Optimization](http://arxiv.org/abs/2608.06377v1)** | Sun, Chow, Wang et al. | Introduces SCOPE, a preference-optimization method teaching LLMs to *selectively* trust external context—accepting helpful signals while rejecting misleading ones—avoiding the "ignore everything" failure mode. |
| **[The Bitter Lesson of Tool Calling](http://arxiv.org/abs/2608.06370v1)** | Patel, Sen, Lumer et al. | Systematic evaluation showing programmatic (code) tool calling outperforms JSON schemas on established benchmarks, but reveals brittle generalization when tool signatures change—echoing Sutton's bitter lesson for tool use. |
| **[RP-OPSD: Reasoning-Pivot-Guided On-Policy Self-Distillation for Multilingual Reasoning Transfer](http://arxiv.org/abs/2608.06347v1)** | Wang, Liu, Huang | Uses reasoning pivots as anchors for on-policy self-distillation, enabling efficient multilingual reasoning transfer without external supervision. |
| **[On-Policy Self-Distillation without Any Supervision](http://arxiv.org/abs/2608.06296v1)** | Li, Wang, Liang et al. | First fully unsupervised OPSD: the model generates, filters, and distills its own reasoning traces using only internal consistency signals. |

### 🤖 Agents & Reasoning

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[AV-AIVAT: 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Information Games](http://arxiv.org/abs/2608.06362v1)** | Li, Chen, Huang | Applies anytime-valid inference (AIVAT) to agent evaluation, providing certified stopping rules that reduce required games by 74× while controlling Type-I/II errors. |
| **[TRAJDEBUG: Tracing Error Lifecycle to Identify Critical Failures in Long-Horizon Agent Trajectories](http://arxiv.org/abs/2608.06346v1)** | Qi, Yin, Shi et al. | Frames critical error detection as tracing the *earliest* causal error in a failed trajectory; introduces a benchmark and method outperforming LLM-as-judge baselines. |
| **[EnvACE: Internalizing Environment Dynamics via World Rehearsal for Agentic Reinforcement Learning](http://arxiv.org/abs/2608.06197v1)** | Xu, Yao, Chen et al. | Agents learn a generative world model ("rehearsal") to simulate environment dynamics internally, cutting reliance on expensive external simulators for long-horizon tool use. |
| **[DASH: Divergence-Adaptive Supervision Horizons for On-Policy Self-Distillation of Reasoning Models](http://arxiv.org/abs/2608.06243v1)** | Hou, Tang, An et al. | Dynamically adjusts the distillation horizon based on policy divergence, densifying sparse outcome rewards for reasoning models without hand-coded reward shaping. |

### 🔧 Methods & Frameworks

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[An Optimal Agnostic PAC Algorithm](http://arxiv.org/abs/2608.06363v1)** | Mathiasen, Qian, Zhivotovskiy | Constructs the first statistically optimal agnostic PAC learner achieving the minimax risk bound for any finite-VC-class, closing a decades-old gap. |
| **[Benchmarking the Benchmarks: Evaluating Benchmarks for Conversational Agents](http://arxiv.org/abs/2608.06329v1)** | Koren, Bar-Haim, Goldsteen | Proposes a reference-free meta-evaluation framework exposing inconsistent tasks, policy gaps, and scenario simplicity in popular conversational-agent benchmarks. |
| **[BaKron: Efficient Quantization with Kronecker-Factored Hessians](http://arxiv.org/abs/2608.06291v1)** | Birnick, Saab | Accelerates GPTQ-style quantization using two-sided Kronecker-factored Hessians, capturing input-output curvature for better low-bit rounding. |
| **[Beyond Marginal Validity: Finite-Sample Guarantees for Localized Conformal Prediction](http://arxiv.org/abs/2608.06206v1)** | Conrad, Isaev, Belomestny et al. | Introduces randomly localized conformal prediction with finite-sample *conditional* coverage guarantees, addressing the marginal-vs-conditional gap. |

### 📊 Applications

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[The Illusion of Visual Tool-Use: A Causal Audit of Thinking with Images](http://arxiv.org/abs/2608.06270v1)** | Wang, Peng, Wei et al. | Causal mediation analysis shows multimodal LLMs' crop/zoom tools yield marginal/negative gains vs. direct inference; models often crop irrelevant regions—tool use is largely performative. |
| **[TS-RAG: Retrieval Augmented Generation for Time Series Forecasting](http://arxiv.org/abs/2608.06223v1)** | Xiao, Xiao, Zhou | Adapts RAG to time-series: retrieves similar historical patterns as "exemplars" to condition forecasts, improving transformer baselines on real-world datasets. |
| **[Resourced Authority: A Mechanism-Design Model for Participatory Governance of Deployed AI Agents](http://arxiv.org/abs/2608.06353v1)** | Chandra, Gujar, Ghalme | Formal mechanism where governance controls an agent via compute budgets, making authorization self-enforcing—bridging AI safety and incentive design. |

---

## Research Trend Signal

Three convergent directions are crystallizing. First, **evaluation as a first-class research object**: from AV-AIVAT's certified stopping to "Benchmarking the Benchmarks" and TRAJDEBUG's error-lifecycle tracing, the community is treating measurement rigor as a technical contribution. Second, **world-model internalization** for agents—EnvACE's rehearsal, TS-RAG's exemplar retrieval, and NeSy-RAG's neuro-symbolic grounding—all aim to replace brittle external simulators or opaque retrieval with learned, verifiable internal dynamics. Third, **governance-by-design**: Resourced Authority's compute-budget mechanism and SCOPE's selective trust both encode safety into the agent's *operating economics* rather than post-hoc guardrails. Together, these signal a shift from "bigger models" to "composable, auditable, self-governing systems" as the central research agenda.

---

## Worth Deep Reading

1. **[AV-AIVAT: 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Information Games](http://arxiv.org/abs/2608.06362v1)** — *Why*: Evaluation cost is the silent bottleneck for agent deployment. This paper delivers a practical, statistically rigorous stopping rule with immediate impact on CI/CD pipelines for agents, and the anytime-valid framework generalizes beyond games to any sequential agent comparison.

2. **[The Illusion of Visual Tool-Use: A Causal Audit of Thinking with Images](http://arxiv.org/abs/2608.06270v1)** — *Why*: A rare causal (not correlational) audit of a popular paradigm. The finding that visual tools are largely performative forces a rethink of multimodal agent architectures and benchmark design—essential reading for anyone building or evaluating vision-enabled agents.

3. **[An Optimal Agnostic PAC Algorithm](http://arxiv.org/abs/2608.06363v1)** — *Why*: Theoretical bedrock. Closes the agnostic PAC optimality gap after 30+ years; the algorithm and proof techniques will likely seed new adaptive learners and robustness guarantees for foundation-model fine-tuning.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*