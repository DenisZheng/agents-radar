# ArXiv AI Research Digest 2026-08-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-29 05:09 UTC

---

---

# ArXiv AI Research Digest — 2026-08-29

### Today's Highlights

Today's submissions reveal a decisive shift toward **inference-time adaptation without ground-truth supervision** — exemplified by TTPO and CritICL, which enable test-time policy optimization and weak-to-strong generalization purely from model-internal signals. A parallel thrust centers on **agent skill evolution from experience**: WikiSkill and RedEvoAgent demonstrate how to compile interaction trajectories into persistent, reusable skill libraries that improve autonomously. In post-training, multiple papers tackle **RLVR's entropy collapse** (weak-model guidance, evolution strategies, cross-domain consolidation), while new benchmarks (CorporateBench, MCR-Bench, PAWBench, BrailleBench) push evaluation toward realistic, temporally grounded, and inclusivity-aware settings. Collectively, these works signal a maturation from static model scaling toward **continual, self-improving agent ecosystems**.

---

### Key Papers

#### 🧠 Large Language Models

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)** | Wu, He, Hu et al. | Uses small-model failure patterns as in-context critiques to steer strong LLMs at inference time — no training, no external verifier, strong gains on reasoning benchmarks. |
| **[TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1)** | Wang, Lu, Wang et al. | First RL-style policy optimization at test time without ground-truth rewards; replaces labels with self-consistency verification, enabling continual adaptation on unseen tasks. |
| **[Boosting LLM Exploration via Weak-Model Guidance in RLVR](http://arxiv.org/abs/2608.27420v1)** | Shen, Zhang, Li et al. | Counters entropy collapse in RLVR by using a weak model to propose diverse reasoning paths, preserving pass@k for large k without algorithmic regularization. |
| **[Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms](http://arxiv.org/abs/2608.27409v1)** | Wu, Yang, Cai et al. | Systematic taxonomy of three fusion paradigms (merge, route, ensemble) for combining domain-specialized RLVR experts; identifies routing as most effective for heterogeneous capabilities. |
| **[Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1)** | Luo, Cui, Yin et al. | Demonstrates competitive 1.5B LLM pretraining on a single consumer GPU ($5090 budget); open recipe, data, and checkpoints — a reproducibility milestone for academic labs. |

#### 🤖 Agents & Reasoning

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1)** | Tang, Rashtchian, Ferng et al. | Converts raw agent trajectories into versioned, editable "skill wiki" entries; enables cumulative skill refinement and transfer across tasks/agents. |
| **[RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1)** | Zhang, Liu, Chen et al. | Red-teaming agent that evolves attack skills from past successes/failures; outperforms fixed-prompt baselines on tool-use jailbreaks in execution environments. |
| **[INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment](http://arxiv.org/abs/2608.27348v1)** | Zhang, Dong, Xu et al. | Formalizes intent as a tool-callable object; enables CoT monitoring to detect harmful action planning before execution — practical guardrail for deployed agents. |
| **[SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1)** | Zheng, Ye, Wang et al. | Shows successful SWE trajectories contain low-quality supervision; proposes quality-aware filtering that matches SOTA with 10× less training data. |

#### 🔧 Methods & Frameworks

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1)** | Liu, Shorinwa | Aligns heterogeneous robot embodiment videos into a shared latent dynamics model; enables zero-shot simulation and policy transfer across morphologies. |
| **[CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases](http://arxiv.org/abs/2608.27391v1)** | Hamilton, Sun, Romero et al. | First enterprise-scale Q&A benchmark with realistic temporal document versions, access controls, and multi-hop reasoning — fills critical evaluation gap for RAG systems. |
| **[PAWBench: How Far Are We from Probabilistically Aligned World Modeling?](http://arxiv.org/abs/2608.27345v1)** | Pu, Zhuo, Paul et al. | Benchmarks video world models on *distributional* fidelity (not just plausibility); reveals current models fail to capture multi-modal physical outcome distributions. |

#### 📊 Applications

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Mechanistic Reaction Prediction via Discrete Flow Matching on Graph-Structured Electron Occupation](http://arxiv.org/abs/2608.27429v1)** | Nguyen, Susanu, Armstrong et al. | Models chemical reactions as electron-flow transformations (not atom rearrangement); MAELLE achieves SOTA on mechanistic prediction tasks. |
| **[Learning a Continuous Sepsis Severity Score Without Hour-by-Hour Supervision](http://arxiv.org/abs/2608.27421v1)** | Zhu, Zhang, Abed et al. | Learns continuous severity trajectory from sparse clinical labels via weak supervision; outperforms SOFA/APACHE on two-hospital retrospective study. |
| **[MM-Spectrum: Multimodal Multi-spectral Molecular Structural Elucidation with a Stable MoE Framework](http://arxiv.org/abs/2608.27286v1)** | Yu, Min, Fang et al. | Stable Mixture-of-Experts fuses heterogeneous spectroscopy modalities (NMR, IR, MS); solves catastrophic forgetting in multi-spectral concatenation. |

---

### Research Trend Signal

Three convergent directions dominate this batch. **First, test-time training is shedding its dependence on external reward models** — TTPO and CritICL prove that self-consistency and small-model critiques suffice for meaningful policy improvement at inference time, pointing toward truly autonomous lifelong adaptation. **Second, agent memory is being formalized as a first-class, versioned artifact** — WikiSkill's "skill wiki" and RedEvoAgent's experience-driven evolution treat skills as editable, composable knowledge units rather than opaque weights, enabling cumulative cultural learning in silicon. **Third, evaluation is finally catching up to deployment reality** — CorporateBench (temporal enterprise docs), MCR-Bench (iterative code review), PAWBench (distributional world modeling), and BrailleBench (accessibility) collectively reject static, single-turn, English-centric benchmarks in favor of settings that reflect real-world complexity, temporal dynamics, and inclusivity requirements. The next 6–12 months will likely see these threads merge: agents that continually distill experience into verified skill libraries, evaluated on benchmarks that measure *reliable* capability over time.

---

### Worth Deep Reading

1. **[TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1)** — *Paradigm-shifting*: replaces ground-truth RL with self-verification at test time; if reproducible, this unlocks continual learning for deployed LLMs without human annotation pipelines. The theoretical analysis of reward-free policy improvement is rigorous and the empirical gains on math reasoning are substantial.

2. **[WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1)** — *Foundational for agent ecosystems*: moves beyond "prompt engineering" to "skill engineering" with version control, composition, and cross-agent transfer. The architecture (experience → skill wiki → retrieval → execution) is cleanly specified and the ablation studies isolate what makes skills reusable.

3. **[CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1)** — *Breaks the embodiment silo*: shows that a single world model trained on heterogeneous robot videos (arms, hands, mobile bases) learns transferable physics. The alignment technique (cross-embodiment contrastive loss + dynamics consistency) is novel and the zero-shot sim-to-real results on unseen morphologies are compelling.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*