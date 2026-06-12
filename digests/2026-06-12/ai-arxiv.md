# ArXiv AI 研究日报 2026-06-12

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-12 00:44 UTC

---

# ArXiv AI 研究日报 · 2026-06-12

---

## 一、今日速览

今日 ArXiv 的 50 篇 AI 相关论文呈现出几个清晰的主线：**推理效率与测试时计算分配**成为多模态和智能体研究的核心议题，多篇论文从视觉 Token 路由、上下文压缩和 MTP 加速等角度切入；**智能体后训练与强化学习**持续升温，出现了面向过程级信用分配、人类在环干预优化和推理泛化的新框架；**安全与对齐**领域有从依赖审计、推理时防御到知识诚实性的多层次探索；此外，**具身智能**（机器人操作、力感知、多机协作）和**医疗 AI 评估**也贡献了多篇高质量工作。整体来看，社区正从"模型能做什么"转向"模型如何更高效、更可靠、更安全地做事"。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Reroute, Don't Remove: Recoverable Visual Token Routing for Vision-Language Models](http://arxiv.org/abs/2606.12412v1)**
- 作者：C.-Y. Yang, S.-Y. Lo, Y.-L. Liu
- 核心贡献：提出可恢复的视觉 Token 路由机制，取代传统的"排序-删除"范式，在降低 VLM 推理计算量的同时保留信息完整性，兼顾效率与精度。

**2. [Context-Driven Incremental Compression for Multi-Turn Dialogue Generation](http://arxiv.org/abs/2606.12411v1)**
- 作者：Y. Jung, J. Kim, E. Jung et al.
- 核心贡献：面向多轮对话的上下文增量压缩方法，通过跨轮记忆共享和修订机制，在不损失对话忠实度的前提下显著降低注意力与编码开销。

**3. [ALIGNBEAM: Inference-Time Alignment Transfer via Cross-Vocabulary Logit Mixing](http://arxiv.org/abs/2606.12342v1)**
- 作者：C. Chawla, P. Seth, V. K. Sankarapu
- 核心贡献：提出跨词汇表 Logit 混合的推理时对齐迁移方法，解决了领域微调后模型安全性下降的问题，且无需两个模型共享词表。

**4. [Measuring Epistemic Resilience of LLMs Under Misleading Medical Context](http://arxiv.org/abs/2606.12291v1)**
- 作者：H. Zhou, X. Zou, J. Wu et al.
- 核心贡献：揭示 LLM 在医学考试高分背后的脆弱性——注入误导性上下文后表现急剧下降，对医疗 AI 的安全部署提出严峻警示。

**5. [The Impossibility of Eliciting Latent Knowledge](http://arxiv.org/abs/2606.12268v1)**
- 作者：K. Friedl, F. R. Ward, P. Y. Rapoport et al.
- 核心贡献：从理论上证明了在一般条件下提取 AI 系统隐性知识的不可能性，为 AI 诚实性和可解释性研究划定了根本性边界。

**6. [Reassessing High-Performing LLMs on Polish Medical Exams: True Competence or Bias-Driven Performance?](http://arxiv.org/abs/2606.12250v1)**
- 作者：A. Lasik, J. Pokrywka, Ł. Grzybowski et al.
- 核心贡献：通过扩展波兰医学考试基准，揭示 MCQA 评估中猜测策略和答案偏差导致的性能高估，推动更严谨的医疗 AI 评测。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. [DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?](http://arxiv.org/abs/2606.12402v1)**
- 作者：J. Dao, M. Ganai, Y. Abukhadra et al.
- 核心贡献：研究具身智能体规划器中测试时计算的最优分配策略，发现盲目增加计算量收益递减，提出按需分配框架以平衡延迟与性能。

**8. [APPO: Agentic Procedural Policy Optimization](http://arxiv.org/abs/2606.12384v1)**
- 作者：X. Wang, Z. Ma, Y. Wang et al.
- 核心贡献：提出面向过程的策略优化方法，在工具调用边界内进行细粒度信用分配，显著提升 LLM 智能体的多轮工具使用能力。

**9. [Verifiable Environments Are LEGO Bricks: Recursive Composition for Reasoning Generalization](http://arxiv.org/abs/2606.12373v1)**
- 作者：H. Xiang, Q. Tang, L. Yu et al.
- 核心贡献：提出可验证环境的递归组合框架，像搭积木一样构建多样化 RL 训练环境，有效提升 LLM 推理能力的泛化性。

**10. [CHORUS: Decentralized Multi-Embodiment Collaboration with One VLA Policy](http://arxiv.org/abs/2606.12352v1)**
- 作者：R. Doshi, T. Gao, A. Chen et al.
- 核心贡献：用一个统一的 VLA 策略实现去中心化的多形态机器人协作，避免了集中式方法的全局状态依赖，提升了可扩展性和鲁棒性。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**11. [Redesign Mixture-of-Experts Routers with Manifold Power Iteration](http://arxiv.org/abs/2606.12397v1)**
- 作者：S. Wu, A. Lv, R. Xie et al.
- 核心贡献：用流形幂迭代重新设计 MoE 路由器，使路由矩阵更好地编码专家表示，为 MoE 模型的路由优化提供新理论工具。

**12. [Breaking Entropy Bounds: Accelerating RL Training via MTP with Rejection Sampling](http://arxiv.org/abs/2606.12370v1)**
- 作者：Y. Li, H. Jiang, Y. Xu et al.
- 核心贡献：将多 Token 预测（MTP）与拒绝采样结合，突破熵界限制，显著加速 RL 训练中的 rollout 阶段，缓解关键瓶颈。

**13. [On Subquadratic Architectures: From Applications to Principles](http://arxiv.org/abs/2606.12364v1)**
- 作者：A.-R. Hartl, L. Zólyomi, D. Stap et al.
- 核心贡献：系统比较 xLSTM 等三种次二次架构的设计原则与实际表现，为 Transformer 之外的高效序列建模提供清晰的选型指南。

**14. [Claw-SWE-Bench: A Benchmark for Evaluating OpenClaw-style Agent Harnesses on Coding Tasks](http://arxiv.org/abs/2606.12344v1)**
- 作者：M. Zheng, K. Han, B. Li et al.
- 核心贡献：专为通用智能体（如 OpenClaw）设计的编码能力评测基准，弥补了 SWE-bench 对非标准智能体适配不足的空白。

---

### 📊 应用（垂直领域、多模态、代码生成）

**15. [Atlas H&E-TME: Scalable AI-Based Tissue Profiling at Expert Pathologist-Level Accuracy](http://arxiv.org/abs/2606.12346v1)**
- 作者：K. Standvoss, M. Hägele, R. Krupar et al.
- 核心贡献：基于 Atlas 病理基础模型构建的 H&E 组织微环境分析系统，达到专家病理学家级别的精度，推动计算病理学的规模化落地。

---

## 三、研究趋势信号

从今日 50 篇投稿中可以观察到几个新兴方向：**测试时计算的智能分配**正在取代简单的"暴力扩展"，DIRECT 等工作开始关注"在哪里花算力"而非"花多少算力"；**智能体后训练**从粗粒度的工具级奖励走向过程级信用分配（APPO）和环境组合泛化（Verifiable Environments），RL 与 LLM 的融合更加精细；**安全与对齐**研究呈现多层次深化——从推理时防御机制（ALIGNBEAM）到知识诚实性的理论不可能性证明，再到医疗场景下的认知韧性评估；**效率优化**贯穿视觉语言模型（Token 路由）、对话系统（上下文压缩）和 RL 训练（MTP 加速）等多个场景，反映出社区对实际部署成本的持续关注。此外，**具身智能**中力感知（NEXT）、模仿学习（Ambient Diffusion Policy）和多机协作（CHORUS）的并行进展表明机器人基础能力正在快速成熟。

---

## 四、值得精读

**1. [The Impossibility of Eliciting Latent Knowledge](http://arxiv.org/abs/2606.12268v1)**
**理由**：这是一篇具有基础理论深度的工作，从数学上刻画了提取 AI 隐性知识的根本困难。对于关注 AI 安全、可解释性和诚实性的研究者而言，这篇论文提供了重要的理论边界，有助于重新审视"让 AI 说出它知道什么"这一核心命题的可行性。

**2. [DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?](http://arxiv.org/abs/2606.12402v1)**
**理由**：在测试时计算扩展成为主流范式的背景下，这篇论文提出了一个关键的反思性问题——算力应该花在哪里？其发现对具身智能体的实际部署具有直接指导意义，且方法论可迁移至其他测试时计算场景。

**3. [APPO: Agentic Procedural Policy Optimization](http://arxiv.org/abs/2606.12384v1)**
**理由**：智能体 RL 后训练是当前最活跃的研究方向之一，APPO 提出的面向过程的信用分配机制切中了现有方法粒度不足的痛点，对提升复杂多轮工具调用任务的训练效率具有重要参考价值。

---

*本日报由 OWL 基于 2026-06-12 ArXiv cs.AI / cs.CL / cs.LG 分类的 50 篇论文生成。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*