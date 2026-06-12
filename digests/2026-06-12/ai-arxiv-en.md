# ArXiv AI Research Digest 2026-06-12

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-06-12 00:44 UTC

---

# 📡 OWL ArXiv AI Research Digest — 2026-06-12

---

## 1. Today's Highlights

Today's batch reveals a community intensely focused on **efficiency under pressure**: reducing the quadratic cost of attention (Papers #1, #18), compressing dialogue context without losing fidelity (#2), and accelerating RL rollouts via multi-token prediction (#16). **Agentic RL and tool-use credit assignment** emerge as a major thrust, with APPO (#12) proposing finer-grained procedural policy optimization and DIRECT (#4) asking where to allocate test-time compute in embodied planners. There's notable activity around **trust and auditability** — auditing invisible model dependencies (#10), measuring epistemic resilience under misleading medical context (#35), and a proposed five-plane runtime governance architecture for production AI agents (#30). Finally, **multi-robot collaboration, safety alignment at inference time, and interpretability theory** round out a diverse and technically deep set of submissions.

---

## 2. Key Papers

### 🧠 Large Language Models (Architecture, Training, Alignment, Evaluation)

- **[ALIGNBEAM: Inference-Time Alignment Transfer via Cross-Vocabulary Logit Mixing](http://arxiv.org/abs/2606.12342v1)**
  *Chawla, Seth, Sankarapu*
  Enables safety alignment transfer between models with different vocabularies at inference time — solving a critical blocker for cross-model defense in fine-tuned specialists.

- **[The Impossibility of Eliciting Latent Knowledge](http://arxiv.org/abs/2606.12268v1)**
  *Friedl, Ward, Rapoport et al.*
  Proves fundamental limits on extracting honest beliefs from AI systems, with direct implications for alignment and interpretability research.

- **[Anatomy of Post-Training: Using Interpretability to Characterize Data and Shape the Learning Signal](http://arxiv.org/abs/2606.12360v1)**
  *Bergen, Bhalla, Baskaran et al.*
  Uses interpretability tools to open the black box of post-training, revealing what scalar reward data actually teaches models and exposing spurious correlations.

- **[Reassessing High-Performing LLMs on Polish Medical Exams: True Competence or Bias-Driven Performance?](http://arxiv.org/abs/2606.12250v1)**
  *Lasik, Pokrywka, Grzybowski et al.*
  Introduces a harder Polish medical benchmark showing that MCQA scores overestimate real clinical reasoning due to guessing and answer biases.

- **[Measuring Epistemic Resilience of LLMs Under Misleading Medical Context](http://arxiv.org/abs/2606.12291v1)**
  *Zhou, Zou, Wu et al.*
  Demonstrates that expert-level medical exam performance collapses when misleading context is injected, challenging assumptions about LLM medical reliability.

- **[Beyond Third-Person Audits: Situated Interaction Auditing for User-Centered LLM Bias Research](http://arxiv.org/abs/2606.12247v1)**
  *Abeliuk, Sanchez Macias, Alarcón et al.*
  Proposes a paradigm shift from third-person demographic audits to user-situated interaction auditing, capturing structural blind spots in bias evaluation.

### 🤖 Agents & Reasoning (Planning, Tool Use, Multi-Agent, Chain-of-Thought)

- **[APPO: Agentic Procedural Policy Optimization](http://arxiv.org/abs/2606.12384v1)**
  *Wang, Ma, Yong Wang et al.*
  Introduces fine-grained credit assignment over procedural sub-steps in agentic RL, moving beyond coarse tool-call boundaries to improve multi-turn tool-use learning.

- **[DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?](http://arxiv.org/abs/2606.12402v1)**
  *Dao, Ganai, Abukhadra et al.*
  Provides a framework for strategically allocating test-time compute in VLM-based embodied planners, showing that uniform scaling yields diminishing returns.

- **[CHORUS: Decentralized Multi-Embodiment Collaboration with One VLA Policy](http://arxiv.org/abs/2606.12352v1)**
  *Doshi, Gao, Chen et al.*
  Achieves decentralized multi-robot coordination across heterogeneous embodiments using a single shared Vision-Language-Action policy.

- **[PROJECTMEM: A Local-First, Event-Sourced Memory and Judgment Layer for AI Coding Agents](http://arxiv.org/abs/2606.12329v1)**
  *Malo, Qiu*
  Proposes a persistent, event-sourced memory architecture for coding agents that eliminates stateless session restarts and repeated debugging failures.

- **[Verifiable Environments Are LEGO Bricks: Recursive Composition for Reasoning Generalization](http://arxiv.org/abs/2606.12373v1)**
  *Xiang, Tang, Yu et al.*
  Introduces recursive composition of verifiable RL environments to scale reasoning generalization, treating environment building blocks like composable LEGO structures.

- **[CCKS: Consensus-based Communication and Knowledge Sharing](http://arxiv.org/abs/2606.12281v1)**
  *Zu, Lv, Wang et al.*
  Improves decentralized MARL knowledge sharing via consensus-based action advising, reducing over-reliance on single teachers.

### 🔧 Methods & Frameworks (New Techniques, Benchmarks, Efficiency Improvements)

- **[Reroute, Don't Remove: Recoverable Visual Token Routing for Vision-Language Models](http://arxiv.org/abs/2606.12412v1)**
  *Yang, Lo, Liu*
  Replaces the rank-and-remove paradigm for visual token reduction with recoverable routing, cutting decoder inference cost while preserving information.

- **[Context-Driven Incremental Compression for Multi-Turn Dialogue Generation](http://arxiv.org/abs/2606.12411v1)**
  *Jung, Kim, Jung et al.*
  Compresses growing dialogue context incrementally with cross-turn memory sharing, reducing redundant attention costs without truncation or summarization losses.

- **[On Subquadratic Architectures: From Applications to Principles](http://arxiv.org/abs/2606.12364v1)**
  *Hartl, Zólyomi, Stap et al.*
  Systematically compares xLSTM and other subquadratic architectures against Transformers, providing principled guidance for scalable sequence modeling.

- **[Breaking Entropy Bounds: Accelerating RL Training via MTP with Rejection Sampling](http://arxiv.org/abs/2606.12370v1)**
  *Li, Jiang, Xu et al.*
  Uses Multi-Token Prediction with rejection sampling to accelerate RL rollout stages, addressing a key bottleneck in RL training pipelines.

- **[Redesign Mixture-of-Experts Routers with Manifold Power Iteration](http://arxiv.org/abs/2606.12397v1)**
  *Wu, Lv, Xie et al.*
  Reimagines MoE router design using manifold power iteration for better expert representation and routing fidelity.

- **[A Five-Plane Reference Architecture for Runtime Governance of Production AI Agents](http://arxiv.org/abs/2606.12320v1)**
  *Tallam*
  Proposes a comprehensive five-plane governance framework for enterprise production AI agents, addressing the dissolution of traditional data-boundary security models.

- **[Claw-SWE-Bench: A Benchmark for Evaluating OpenClaw-style Agent Harnesses on Coding Tasks](http://arxiv.org/abs/2606.12344v1)**
  *Zheng, Han, Li et al.*
  Introduces a benchmark adapted for general-purpose agent harnesses that don't satisfy standard SWE-bench Docker/patch contracts.

- **[Which Models Are Our Models Built On? Auditing Invisible Dependencies in Modern LLMs](http://arxiv.org/abs/2606.12385v1)**
  *Adhikesaven, Sun, Min*
  Develops methods to audit recursive, undocumented dependencies in LLM training pipelines where models increasingly rely on other models for data and judgment.

### 📊 Applications (Domain-Specific, Multimodal, Code Generation)

- **[FACTR 2: Learning External Force Sensing for Commodity Robot Arms](http://arxiv.org/abs/2606.12406v1)**
  *Oh, Liu, Tao et al.*
  NEXT method enables force-sensitive manipulation on robot arms without dedicated force sensors via neural external torque estimation.

- **[Ambient Diffusion Policy: Imitation Learning from Suboptimal Data in Robotics](http://arxiv.org/abs/2606.12365v1)**
  *Wei, Pfaff, Cohn et al.*
  Principled imitation learning from abundant but suboptimal robotic demonstration data, reducing reliance on expensive high-quality datasets.

- **[Atlas H&E-TME: Scalable AI-Based Tissue Profiling at Expert Pathologist-Level Accuracy](http://arxiv.org/abs/2606.12346v1)**
  *Standvoss, Hägele, Krupar et al.*
  Achieves expert-level tissue microenvironment profiling on H&E whole-slide images at scale, a major advance for computational pathology.

- **[TAHOE: Text-to-SQL with Automated Hint Optimization from Experience](http://arxiv.org/abs/2606.12387v1)**
  *Chen, Song, Li*
  Automates hint optimization for production Text-to-SQL systems, bridging the gap between prototypes and real-world database deployments.

- **[SpikeDecoder: Realizing the GPT Architecture with Spiking Neural Networks](http://arxiv.org/abs/2606.12287v1)**
  *Beger, Walter, Knoll*
  Implements the GPT architecture using energy-efficient Spiking Neural Networks, addressing Transformer energy consumption concerns.

---

## 3. Research Trend Signal

Several converging trajectories stand out from today's submissions. **Efficiency is becoming architectural, not just incremental**: rather than pruning or quantizing after the fact, researchers are redesigning core components — routing tokens instead of removing them (#1), replacing attention with subquadratic alternatives (#18), and compressing context structures rather than truncating (#2). **Agentic RL is maturing from "can it use tools?" to "how do we assign credit and allocate compute?"** — APPO (#11) and DIRECT (#4) both grapple with the granularity of learning signals and test-time resource allocation in multi-step agent workflows. **Trust and auditability are moving from afterthought to first-class concern**, with work on invisible dependency auditing (#10), epistemic resilience (#35), runtime governance (#30), and bias auditing methodology (#50) all appearing in a single day's batch. Finally, there's a notable **shift from benchmark-chasing to benchmark-critiquing**: papers #35, #49, and #50 all question whether current evaluation paradigms capture genuine capability, suggesting the field is entering a more reflective phase about what high scores actually mean.

---

## 4. Worth Deep Reading

1. **[The Impossibility of Eliciting Latent Knowledge](http://arxiv.org/abs/2606.12268v1)** — This paper establishes a fundamental theoretical limit on one of alignment's core goals. If honest belief elicitation is provably impossible under certain conditions, it reshapes the entire landscape of interpretability-based safety approaches. Essential reading for anyone working on AI alignment or transparency.

2. **[APPO: Agentic Procedural Policy Optimization](http://arxiv.org/abs/2606.12384v1)** — As agentic AI moves from demos to real products, the credit assignment problem over multi-turn tool use becomes critical. APPO's procedural decomposition offers a principled path forward and is likely to influence how next-generation agent RL systems are designed.

3. **[Which Models Are Our Models Built On? Auditing Invisible Dependencies in Modern LLMs](http://arxiv.org/abs/2606.12385v1)** — The recursive, opaque dependency chains in modern LLM pipelines represent a growing systemic risk for reproducibility, safety, and accountability. This paper provides both the conceptual framework and practical methods to address a problem the entire field is currently ignoring.

---

*OWL ArXiv Digest — Curated from cs.AI, cs.CL, cs.LG submissions as of 2026-06-12*

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*