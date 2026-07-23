# ArXiv AI Research Digest 2026-07-23

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-23 02:08 UTC

---

# ArXiv AI Research Digest — 2026-07-23

---

## 🎯 Today's Highlights

Today's submissions reveal three convergent frontiers: **scaling laws are hitting system-level walls**, prompting breakthroughs in full-parameter post-training of trillion-parameter MoE models (SLAI T-Rex) and efficient attention approximations (ELSAA); **reasoning is shifting from prompt engineering to test-time computation**, with cognitive heterogeneity (PoTRE), programmatic memory (PRO-LONG), and self-pruning (EvoThink) replacing static chain-of-thought; and **AI supply-chain integrity** has emerged as a first-class research problem—license laundering, contextual entrainment in VLMs, and verifiable activation explanations all target the trustworthiness of deployed artifacts rather than model capabilities alone.

---

## 📚 Key Papers by Theme

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[SLAI T-Rex: Full-Parameter Post-training of the DeepSeek-V4 Family on Ascend SuperPOD](http://arxiv.org/abs/2607.20145v1)** | Li, Luo, Sun et al. | First system-level demonstration of full-parameter post-training on trillion-parameter MoE models, solving memory pressure, communication overlap, and kernel inefficiency on Huawei Ascend SuperPOD—critical for sovereign LLM deployment. |
| **[ELSAA: Efficient Low-Rank and Sparse Attention Approximation for Training Transformers](http://arxiv.org/abs/2607.20214v1)** | Heidari, Rahimi, Moon | Unifies low-rank and sparse attention into a single differentiable approximation, reducing the $N^2$ bottleneck while preserving expressivity; outperforms FlashAttention-2 baselines at 8k–32k context on pretraining perplexity. |
| **[The Maskability Index: Predicting Task-Objective Alignment in Pretrained Language Models](http://arxiv.org/abs/2607.20265v1)** | Pouramini, Afsharzadeh | Introduces a zero-shot metric (MI) that correlates strongly with downstream task performance by measuring how well pretraining masking objectives align with target tasks—enables model selection without fine-tuning. |
| **[Self-supervision drives representational convergence in medical foundation models more than clinical supervision](http://arxiv.org/abs/2607.20274v1)** | Tayebi Arasteh, Ziegelmayer, Lotfinia et al. | Large-scale empirical study showing SSL—not clinical labels—drives representational convergence across medical image encoders; challenges assumption that domain supervision creates shared structure. |
| **[Post-Training in Time Series Foundation Models: A Unifying Framework](http://arxiv.org/abs/2607.20002v1)** | Xie, Odonnat, Xiao et al. | First taxonomy of post-training strategies (domain adaptation, task specialization, few-shot alignment) for time series foundation models; establishes evaluation protocol across 12 benchmarks. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[PoTRE: Test-Time Reasoning inspired by Cognitive Heterogeneity](http://arxiv.org/abs/2607.20268v1)** | Kankariya, Arık | Proposes a test-time reasoning framework where multiple "cognitive styles" (intuitive, analytical, critical) run in parallel and cross-critique—beats single-stream CoT on MATH, GPQA, and Codeforces by 12–18%. |
| **[PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning](http://arxiv.org/abs/2607.20064v1)** | Fox, Wang, Rosu et al. | Replaces flat context with a programmatic memory store (variables, functions, control flow) that agents can read/write/execute—solves ARC-AGI-3 tasks requiring 100+ step horizons where standard LLM agents fail. |
| **[EvoThink: Evolving Thinking in Large Reasoning Models via Self-Pruning and Aha-Moment Preference Optimization](http://arxiv.org/abs/2607.19962v1)** | Dai, Xin, Hu et al. | Identifies "aha-moments" (abrupt log-prob jumps) as signals of productive reasoning steps; uses them to prune redundant verification chains—cuts token usage 35% while maintaining accuracy on GSM8K/Hard. |
| **[Closing the Lab-to-Store Gap: A Data-Efficient Post-Training and Experience-Driven Learning VLA Framework for Retail Humanoids](http://arxiv.org/abs/2607.20345v1)** | Sala Sisó, Silvério, Sand et al. | DEED framework combines sim-to-real post-training with online experience replay for Vision-Language-Action humanoids; achieves 89% task success in real retail environments vs. 62% for prior VLA baselines. |
| **[Reinforcement Learning for Large Language Model Selective Evidence Adoption from Contaminated Retrieval Results](http://arxiv.org/abs/2607.20090v1)** | Chen, Li, Cui et al. | Trains a selector policy via RL to accept/reject individual evidence passages from noisy RAG contexts—reduces hallucination by 27% on HotpotQA-Adversarial without sacrificing recall. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Sound Probabilistic Safety Bounds for Large Language Models](http://arxiv.org/abs/2607.20286v1)** | Nazeri, Schmuck, Soudjani et al. | Applies Clopper-Pearson PAC bounds to LLM harm probability estimation—provides statistically rigorous, distribution-free guarantees for deployment safety cases. |
| **[Don't Trust the Label: License Laundering in AI Supply Chains](http://arxiv.org/abs/2607.20300v1)** | Jewitt, Li, Rajbahadur et al. | First large-scale audit of license propagation across Hugging Face → GitHub supply chains; finds 34% of derivative models violate upstream obligations—introduces automated compliance tracing tool. |
| **[The Quadrilateral Loss: Additivity as a Measurable Behavior of Dense Neural Networks](http://arxiv.org/abs/2607.20201v1)** | Di Cecco | Novel differentiable penalty enforcing additivity as a *behavior* (second-order mixed difference) rather than architectural constraint—enables interpretable yet expressive dense nets. |
| **[ENTRAP-VL: A Taxonomic Probe for Dual Contextual Entrainment in Vision-Language Models](http://arxiv.org/abs/2607.20092v1)** | Goyal, Hossain, Das et al. | Systematically probes VLMs for susceptibility to irrelevant visual/textual context; discovers "dual entrainment" where both modalities independently hijack outputs—new benchmark for robustness. |
| **[Global Difference Constraint Propagation for Constraint Programming](http://arxiv.org/abs/2607.20022v1)** | Kletzander, Dekker, Schutt et al. | Integrates shortest-path-based global propagation for difference constraints ($x-y \leq d$) into CP solvers—orders-of-magnitude speedups on scheduling and routing benchmarks. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Persian Pixel: A large-scale synthetic OCR dataset for Persian language](http://arxiv.org/abs/2607.20385v1)** | Mahdi, Malik | 4.2M synthetic Persian OCR samples covering calligraphic styles, diacritics, and layout variations—closes resource gap for 110M+ speakers; sota on real test sets after fine-tuning. |
| **[Generative AI floods and dilutes the market for books](http://arxiv.org/abs/2607.20349v1)** | Chakrabarty, Liu, Ginsburg et al. | Empirical study of 14,419 self-published genre fiction books using full-text AI detection; finds AI-generated works capture 12% of revenue despite lower ratings—market dilution is measurable. |
| **[Audio-Zero: Label-Free Self-Evolution for Fine-Grained Audio Reasoning](http://arxiv.org/abs/2607.20166v1)** | Tong, Li, Li et al. | Self-evolution loop where an LALM generates, filters, and learns from its own fine-grained audio reasoning chains (event order, duration, repetition)—no human labels required. |
| **[EvoDRC: A Self-Evolving Agentic Framework for Automated DRC Violation Repair](http://arxiv.org/abs/2607.20019v1)** | Wu, Ho, Yang et al. | Agentic system that iteratively proposes, simulates, and verifies layout fixes for design rule violations in advanced-node chips—reduces manual ECO cycles by 68% in 3nm tapeouts. |
| **[The Ethics of Autonomous AI Agents for Offensive Security](http://arxiv.org/abs/2607.20255v1)** | Happe, Cito, Wachter | Formalizes three dimensions of indeterminacy (action, scope, accountability) that distinguish agentic offensive tools from traditional pentesting—proposes governance framework for responsible deployment. |

---

## 📈 Research Trend Signal (150 words)

**Test-time compute as the new scaling axis.** Five papers (PoTRE, PRO-LONG, EvoThink, CUSUM-Shaped Monitoring, DEED) converge on allocating inference-time resources adaptively—whether via cognitive heterogeneity, programmatic memory, aha-moment pruning, statistical trajectory monitoring, or sim-to-real experience replay. This shifts the bottleneck from pretraining FLOPs to **inference-time search and verification**.

**Supply-chain integrity goes mainstream.** License laundering audits, contextual entrainment probes, verifiable activation explanations, and PAC safety bounds collectively signal that **trustworthiness of deployed artifacts**—not just model weights—is becoming a publishable, measurable research target. Expect regulatory pressure (EU AI Act, US

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*