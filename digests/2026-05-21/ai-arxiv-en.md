# ArXiv AI Research Digest 2026-05-21

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-21 00:38 UTC

---

**ArXiv AI Research Digest – May 21, 2026**

---

### **Today's Highlights**

This week’s submissions reveal a strong focus on improving the reliability, efficiency, and interpretability of large-scale AI systems. Breakthroughs in neurosymbolic reasoning, vision-language grounding, and agentic clinical decision-making signal growing maturity in multimodal and interactive applications. Concurrently, advances in diffusion MoE inference (TIDE), time-series foundation models (Toto 2.0), and structured prompting highlight persistent efforts to scale while maintaining performance and safety. A recurring theme is decoupling perception from reasoning—especially in VLMs—and introducing rigorous calibration mechanisms for long-horizon agents operating under uncertainty.

---

### **Key Papers**

#### 🧠 Large Language Models

- **[KoRe: Compact Knowledge Representations for Large Language Models](http://arxiv.org/abs/2605.20170v1)**  
  *Davide Cavicchini et al.*  
  Proposes a method to explicitly separate world knowledge from language priors in LLMs via compact, modular representations, addressing inherent flaws in how models encode factual information.

- **[TIDE: Efficient and Lossless MoE Diffusion LLM Inference with I/O-aware Expert Offload](http://arxiv.org/abs/2605.20179v1)**  
  *Zhiben Chen et al.*  
  Introduces an I/O-aware offloading strategy for MoE diffusion LLMs that maintains lossless accuracy while significantly reducing memory and communication overhead during inference.

- **[MixRea: Benchmarking Explicit-Implicit Reasoning in Large Language Models](http://arxiv.org/abs/2605.20128v1)**  
  *Yuanqing Cai et al.*  
  Reveals that LLMs suffer from *inattentional blindness*—failing to notice explicit evidence when relying on implicit reasoning—posing risks in high-stakes domains like medicine or law.

- **[BalanceRAG: Joint Risk Calibration for Cascaded Retrieval-Augmented Generation](http://arxiv.org/abs/2605.20084v1)**  
  *Zijun Jia et al.*  
  Designs a cascaded RAG system with calibrated risk thresholds that only invokes retrieval when necessary, improving efficiency and cost-effectiveness without sacrificing factuality.

#### 🤖 Agents & Reasoning

- **[ClinSeekAgent: Automating Multimodal Evidence Seeking for Agentic Clinical Reasoning](http://arxiv.org/abs/2605.20176v1)**  
  *Juncheng Wu et al.*  
  Enables LLM-based clinical agents to autonomously seek, plan, and synthesize evidence from external sources, bridging the gap between static knowledge and dynamic diagnostic workflows.

- **[Rewarding Beliefs, Not Actions: Consistency-Guided Credit Assignment for Long-Horizon Agents](http://arxiv.org/abs/2605.20061v1)**  
  *Wenjie Tang et al.*  
  Improves credit assignment in partially observable environments by aligning rewards with internal belief consistency rather than delayed action outcomes.

- **[CopT: Contrastive On-Policy Thinking with Continuous Spaces for General and Agentic Reasoning](http://arxiv.org/abs/2605.20075v1)**  
  *Dachuan Shi et al.*  
  Extends chain-of-thought reasoning to continuous action spaces using contrastive learning, enabling more flexible and efficient planning in embodied and agentic settings.

- **[Neurosymbolic Learning for Inference-Time Argumentation](http://arxiv.org/abs/2605.20098v1)**  
  *Gabriel Freedman et al.*  
  Combines neural generation with symbolic logic to produce verifiable, graded responses (e.g., “probably true”) with faithful explanations—critical for trustworthy AI in finance or healthcare.

#### 🔧 Methods & Frameworks

- **[Toto 2.0: Time Series Forecasting Enters the Scaling Era](http://arxiv.org/abs/2605.20119v1)**  
  *Emaad Khwaja et al.*  
  Demonstrates that scaling laws hold for time-series foundation models; a single training recipe yields consistent improvements across model sizes from 4M to 2.5B parameters.

- **[Draft Less, Retrieve More: Hybrid Tree Construction for Speculative Decoding](http://arxiv.org/abs/2605.20104v1)**  
  *Yuhao Shen et al.*  
  Reduces VRAM bandwidth pressure in speculative decoding by constructing compact yet high-acceptance draft trees, accelerating LLM inference without accuracy loss.

- **[Not Every Rubric Teaches Equally: Policy-Aware Rubric Rewards for RLVR](http://arxiv.org/abs/2605.20164v1)**  
  *Utkarsh Tyagi et al.*  
  Introduces policy-aware rubric design for reinforcement learning with verifiable rewards, ensuring diverse qualitative criteria are fairly evaluated during post-training alignment.

- **[SAGE: Scalable Automatic Gating Ensemble for Confident Negative Harvesting in Fraud Detection](http://arxiv.org/abs/2605.20157v1)**  
  *Sudheer Tubati & Amit Goyal*  
  Automates the creation of high-confidence negative samples in fraud detection via ensemble gating, reducing false positives and improving model robustness.

#### 📊 Applications

- **[From Seeing to Thinking: Decoupling Perception and Reasoning Improves Post-Training of Vision-Language Models](http://arxiv.org/abs/2605.20177v1)**  
  *Juncheng Wu et al.*  
  Shows that VLM performance bottlenecks lie in visual perception, not reasoning—leading to a novel fine-tuning method that separately optimizes perception and cognition modules.

- **[VL-DPO: Vision-Language-Guided Finetuning for Preference-Aligned Autonomous Driving](http://arxiv.org/abs/2605.20082v1)**  
  *Zhefan Xu et al.*  
  Uses vision-language feedback (e.g., human preference annotations) to finetune autonomous driving policies via direct preference optimization, capturing nuanced driving behaviors.

- **[HaorFloodAlert: Deseasonalized ML Ensemble for 72-Hour Flood Prediction in Bangladesh Haor Wetlands](http://arxiv.org/abs/2605.20167v1)**  
  *Salma Hoque Talukdar Koli et al.*  
  Builds a specialized flood预警 system for ecologically sensitive wetlands using deseasonalized ML ensembles, addressing unique hydrological dynamics missed by conventional models.

- **[Interpretable Computer Vision for Defect Detection in X-ray Tomography of Aerospace SiC/SiC Composites](http://arxiv.org/abs/2605.20159v1)**  
  *Antonio Peña Corredor et al.*  
  Applies explainable CNNs to automate defect detection in aerospace materials, offering traceable decisions crucial for regulatory compliance.

---

### **Research Trend Signal**

A clear shift toward **robustness, interpretability, and domain-specific adaptation** dominates this week’s work. Researchers are increasingly treating AI systems not just as predictors but as **reliable partners in complex workflows**, especially in high-stakes domains like healthcare, autonomous systems, and critical infrastructure. The rise of **agentic architectures** capable of self-driven evidence gathering (e.g., ClinSeekAgent) reflects demand for autonomous reasoning beyond static prompts. Simultaneously, concerns over hallucination and misalignment have spurred innovations like BalanceRAG (risk-aware RAG) and MixRea (explicit-implicit reasoning benchmark), underscoring the need for **calibrated uncertainty and transparent justification**. Efficiency remains paramount—TIDE and Draft Less, Retrieve More show continued innovation in reducing inference costs—while foundational advances like Toto 2.0 confirm that **scaling laws persist even in non-language domains**. Finally, the integration of symbolic reasoning with neural models (neurosymbolic argumentation) signals a maturation beyond pure end-to-end learning toward **hybrid intelligence**.

---

### **Worth Deep Reading**

1. **[From Seeing to Thinking: Decoupling Perception and Reasoning Improves Post-Training of Vision-Language Models](http://arxiv.org/abs/2605.20177v1)**  
   This paper challenges the prevailing assumption that reasoning deficits in VLMs stem from poor cognition. By empirically isolating perception bottlenecks and proposing a modular fine-tuning approach, it offers a paradigm shift in how we diagnose and improve multimodal models. Essential reading for anyone working on medical imaging, autonomous navigation, or general-purpose vision-language systems.

2. **[ClinSeekAgent: Automating Multimodal Evidence Seeking for Agentic Clinical Reasoning](http://arxiv.org/abs/2605.20176v1)**  
   One of the first end-to-end frameworks for clinical agents that actively retrieve and synthesize evidence, ClinSeekAgent bridges the gap between LLMs and real-world diagnostic workflows. Its emphasis on iterative planning and multimodal grounding makes it a blueprint for trustworthy AI in medicine.

3. **[TIDE: Efficient and Lossless MoE Diffusion LLM Inference with I/O-aware Expert Offload](http://arxiv.org/abs/2605.20179v1)**  
   As MoE diffusion models gain traction, TIDE addresses a critical pain point: memory-bound expert routing. Its I/O-aware offloading strategy could become a standard technique for deploying large-scale generative models at scale—particularly relevant given the surge in diffusion-based LLMs.

---
*This digest is auto-generated by [agents-radar](https://github.com/DenisZheng/agents-radar).*