# ArXiv AI Research Digest 2026-07-14

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-14 08:37 UTC

---

# ArXiv AI Research Digest — 2026-07-14

---

## 🎯 Today's Highlights

Today's submissions reveal a field increasingly focused on **closing the loop between theory and deployment**. Three convergent directions stand out: (1) **mechanistic understanding of LLM internals** — from inductive reasoning dynamics to grokking geometry and judge bias representations; (2) **rigorous evaluation infrastructure** — new benchmarks for advanced math, multilingual moral reasoning, video QA grounding, and agent tool-use in stateful environments; (3) **embodied and multi-agent systems** — unified world-foundation models for robotics, distributed backdoor vulnerabilities in agent collectives, and retargeting-guided dexterous manipulation. A cross-cutting theme is **efficiency without retraining**: inference-time interventions (LoRA fusion, neuron amplification, hourglass reasoning) and frugal architecture search democratize capability on consumer hardware.

---

## 📌 Key Papers by Theme

### 🧠 Large Language Models — Architecture, Training, Alignment, Evaluation

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data](http://arxiv.org/abs/2607.11883v1)** | Qiu, Finzi, Zheng et al. | Proposes a compression framework where models generate their own training codes, pushing the limits of how succinctly neural networks can represent learned regularities — a step toward "compression as intelligence." |
| **[Metacognition in LLMs: Foundations, Progress, and Opportunities](http://arxiv.org/abs/2607.11881v1)** | Liu, Gani, Lu et al. | Comprehensive survey positioning metacognition — monitoring and regulating one's own reasoning — as a cornerstone for transparent, capable AI; maps current gaps and a research agenda. |
| **[Invariant Learning Dynamics of Transformers in Inductive Reasoning Tasks](http://arxiv.org/abs/2607.11875v1)** | Musat, Pimentel, Zucchet et al. | Introduces a unified theoretical framework explaining *how* Transformers acquire inductive reasoning, moving beyond task-specific analyses to generalized learning dynamics. |
| **[Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias](http://arxiv.org/abs/2607.11871v1)** | Xu, Li, Liu et al. | Shows that LLM-as-judge biases are encoded in hidden-state representations, not just input-output behavior, enabling representation-level interventions beyond prompt engineering. |
| **[How to Tame Grokking: Representation Geometry as a Control Signal](http://arxiv.org/abs/2607.11666v1)** | Kazanskii | Identifies representation-geometric signatures that predict and control grokking onset, turning a mysterious delayed-generalization phenomenon into a tunable training dynamic. |
| **[AdvancedMathBench: A Benchmark Suite for Advanced Mathematical Proof Generation and Verification](http://arxiv.org/abs/2607.11849v1)** | Kong, Wu, Gu et al. | Fills a critical evaluation gap with a granular, discipline-spanning benchmark for *advanced* (post-olympiad) mathematics, exposing current LLM limits in formal proof. |
| **[MET: Theory-Grounded and Culture-Aware Multilingual Moral Reasoning](http://arxiv.org/abs/2607.11736v1)** | Lee, Kwon, Zhang et al. | Addresses three multilingual moral-reasoning blind spots: culturally adapted benchmarks, inference-time cultural conditioning, and theory-grounded evaluation — moving beyond naive translation. |

---

### 🤖 Agents & Reasoning — Planning, Tool Use, Multi-Agent, Chain-of-Thought

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[MM-ToolSandBox: A Unified Framework for Evaluating Visual Tool-Calling Agents](http://arxiv.org/abs/2607.11818v1)** | Ma, Feng, Metz et al. | Provides the first stateful, multi-turn, multi-image benchmark with 500+ tools across 16 domains for visually grounded agent evaluation — a much-needed standard for agent tool-use. |
| **[When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems](http://arxiv.org/abs/2607.11751v1)** | Hu, Wang | Reveals a fundamental safety gap: runtime monitors checking individual messages miss *distributed* backdoors where harmful payloads are split across agents — critical for deployed multi-agent systems. |
| **[Think Through a Bottleneck: Hourglass Reasoning for Rigorous Induction](http://arxiv.org/abs/2607.11696v1)** | Zhu | Proposes a structurally enforced "hourglass" reasoning architecture that isolates inference stages, enabling information to pass only through a compressed bottleneck — significantly improving few-shot inductive reasoning without training. |
| **[Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming](http://arxiv.org/abs/2607.11698v1)** | Mao, Zheng, Wang | Introduces an autonomous red-teaming agent that continuously adapts attacks against production agents (e.g., Claude Code, Codex), addressing the gap between static benchmarks and evolving tool-use threat surfaces. |
| **[An Explainable Agentic System for Detection of Conversational Scams with Summary-Based Memory](http://arxiv.org/abs/2607.11707v1)** | Adnan, Manjunath, Khare | Builds an agentic scam detector with long-horizon memory (weeks/months) and explainable summaries, tackling the temporal dimension that existing single-turn detectors miss. |

---

### 🔧 Methods & Frameworks — New Techniques, Benchmarks, Efficiency

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Transformer-Guided Swarm Intelligence for Frugal Neural Architecture Search](http://arxiv.org/abs/2607.11826v1)** | Amigon | Democratizes NAS by combining Transformer-guided search with swarm intelligence, achieving competitive architectures on consumer GPUs — reducing compute from thousands of GPU-days to hours. |
| **[HiFi-LLP: High-Fidelity, Low-Cost Latency Predictors with Confidence for Robust HW-NAS](http://arxiv.org/abs/2607.11746v1)** | Sampath, Shomali, Fasfous et al. | Delivers hardware-latency predictors with calibrated uncertainty, enabling reliable HW-aware NAS on edge devices without exhaustive on-device measurement. |
| **[RAGU: A Multi-Step GraphRAG Engine with a Compact Domain-Adapted LLM](http://arxiv.org/abs/2607.11683v1)** | Komarov, Bondarenko, Shtuka et al. | Replaces single-pass knowledge-graph extraction with an iterative, modular GraphRAG pipeline that self-corrects noisy entities — open-source and deployable with smaller LLMs. |
| **[Relaxing Faithfulness with Intervention-Only Causal Discovery](http://arxiv.org/abs/2607.11816v1)** | Mazaheri, Zhang, Uhler | Shows causal structure can be identified using *only* interventional data, relaxing the faithfulness assumption that plagues observational causal discovery — a theoretically cleaner paradigm. |

---

### 📊 Applications — Domain-Specific, Multimodal, Embodied

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Evidence-Backed Video Question Answering](http://arxiv.org/abs/2607.11862v1)** | Wang, Zhou, Wang et al. | Moves Video LLMs beyond black-box answers by requiring *verifiable visual grounding* for each answer — addressing a critical trust gap in video understanding. |
| **[Xiaomi-Robotics-U0: Unified Embodied Synthesis with World Foundation Model](http://arxiv.org/abs/2607.11643v1)** | Li, Guo, Li et al. | Unifies multi-view generation, geometric coherence, and robot embodiment constraints into a single world foundation model for embodied synthesis — a step toward general-purpose robot policies. |
| **[A Minimalist Retargeting-Guided Reinforcement Learning Recipe for Dexterous Manipulation](http://arxiv.org/abs/2607.11874v1)** | Feng, Leung, Wang et al. | Adapts the successful humanoid retargeting→RL pipeline to *dexterous hands*, identifying key modifications needed for manipulation (vs. locomotion) and demonstrating a minimalist recipe. |
| **[Imputation-free transformer learning enables robust Alzheimer's disease prediction and calibrated uncertainty quantification across heterogeneous clinical cohorts](http://arxiv.org/abs/2607.11656v1)** | Diaz, Baghirova, Vu et al. | Achieves SOTA Alzheimer's prediction *without imputation* by modifying transformer attention to handle missingness natively, with calibrated uncertainty — directly deployable on messy clinical data. |
| **[StoryTeller: Training-Free Narrative Grounding for Long-Form Audio Description](http://arxiv.org/abs/2607.11798v1)** | Hahm, Dinh, Jin | Solves long-form audio description for blind/low-vision audiences by maintaining narrative coherence across scenes *without training* — a practical accessibility advance. |

---

## 📈 Research Trend Signal (≈160 words)

**Four emerging directions** crystallize from this batch. First, **mechanistic interpretability is migrating from "post-hoc explanation" to "control signal"** — grokking geometry, judge-bias representations, and inductive-reasoning dynamics are being used to *steer* training and inference, not just diagnose. Second, **evaluation is becoming stateful, multi-turn, and multimodal** — MM-ToolSandBox, AdvancedMathBench, VoxENES 2026, and MET signal a shift from static single-prompt benchmarks to environments that capture temporal, cultural, and tool-use complexity. Third, **multi-agent safety is emerging as a distinct subfield** — distributed backdoors, agent-vs-agent red-teaming, and compositional harm reveal that single-agent alignment techniques do not compose; new threat models require new defenses. Fourth, **inference-time adaptation without retraining** is a practical thrust: LoRA cascades, neuron amplification, hourglass reasoning, and imputation-free transformers all modify behavior at deployment, reflecting a maturing field where retraining massive models is infeasible. Together, these trends point toward AI systems that are *auditable, culturally situated, robust to compositional attacks, and adaptable on the fly*.

---

## 💎 Worth Deep Reading

| Paper | Why It Deserves Full Attention |
|-------|--------------------------------|
| **[Invariant Learning Dynamics of Transformers in Inductive Reasoning Tasks](http://arxiv.org/abs/2607.11875v1)** | **Theoretical unification.** Most Transformer theory papers analyze narrow tasks (parity, copying, in-context learning). This work abstracts a *generalized class of inductive tasks* and derives invariant learning dynamics that explain *when and why* Transformers generalize inductively. If you want to understand the mathematical basis of LLM reasoning — not just benchmark scores — this is the paper to study. |
| **[When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems](http://arxiv.org/abs/2607.11751v1)** | **New threat model with immediate deployment relevance.** As LLM agents gain tool access and inter-agent communication, the assumption that "checking each message" suffices is falsified. The paper constructs concrete distributed backdoors, proves local monitors cannot detect them, and proposes architectural mitigations. Essential reading for anyone building or securing multi-agent systems in 2026–2027. |
| **[Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data](http://arxiv.org/abs/2607.11883v1)** | **Compression as a first-principle lens on intelligence.** The paper reframes model compression not as a deployment hack but as a measure of discovered regularities. The self-generated code mechanism is novel and the results push compression ratios far beyond prior art. Connects algorithmic information theory, generalization theory, and practical model shrinking — a rare synthesis. |

--- 

*Digest generated from 50 ArXiv papers (cs.AI, cs.CL, cs.LG) dated 2026-07-13. All links point to v1 submissions.*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*