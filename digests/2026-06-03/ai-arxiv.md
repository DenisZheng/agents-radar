# ArXiv AI 研究日报 2026-06-03

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-03 00:47 UTC

---

# ArXiv AI 研究日报
**日期: 2026年6月3日 | 来源: cs.AI / cs.CL / cs.LG**

---

## 1. 今日速览

本期投稿呈现出几个清晰的主线。**多模态大模型的持续学习**成为热点，ProtoAda、CRAM、AdaCodec 三篇论文分别从原型引导、路由机制和视觉编码角度攻克灾难性遗忘与效率瓶颈。**Agent 系统的安全性与可靠性**受到高度关注——SkillHarm 揭示第三方技能的安全风险，SafeSteer 提出高效安全对齐方法，Ghost Tool Calls 则聚焦推理时的隐私泄露问题。第三个值得注意的方向是**评测基准的精细化**，HERO'S JOURNEY、MCP-Persona、PaSBench-Video 等从规则推理、个人应用、主动安全等角度构建更具挑战性的评估环境。此外，扩散语言模型的投机解码（SimSD）和 LLM 在数学研究中的闭环探索（Iteris）也展现了通向下一代系统的技术潜力。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Mitigating Perjudice Judgment Bias in Multimodal LLM-as-a-Judge via Perceptual Perturbation and Reward Modeling**
🔗 http://arxiv.org/abs/2606.02578v1 | Park et al.
> 发现多模态 LLM 评委在视觉证据与文本线索冲突时倾向奖励「看似合理」的叙述而非感知正确的答案，通过感知扰动与奖励建模显著缓解此偏差。

**2. SimSD: Simple Speculative Decoding in Diffusion Language Models**
🔗 http://arxiv.org/abs/2606.02544v1 | Cui et al.
> 首个将投机解码引入扩散语言模型的框架，突破掩码语言建模与标准投机解码的兼容性瓶颈，大幅提升 dLLM 推理速度。

**3. SafeSteer: Localized On-Policy Distillation for Efficient Safety Alignment**
🔗 http://arxiv.org/abs/2606.02530v1 | Li et al.
> 提出局部在策略蒸馏方法，在不依赖大量通用数据或辅助奖励模型的前提下对齐 LLM，显著降低「对齐税」。

**4. From Layers to Submodules: Rethinking Granularity in Replacement-Based LLM Compression**
🔗 http://arxiv.org/abs/2606.02559v1 | Cunegatti et al.
> 挑战「全层替代」的压缩范式，提出以子模块为粒度进行 LLM 压缩，在更小参数预算下实现更优的精度-效率权衡。

**5. Not All Errors Are Equal: A Systematic Study of Error Propagation in Large Language Model Inference**
🔗 http://arxiv.org/abs/2606.02430v1 | Huang et al.
> 首次系统性研究硬件软错误在 LLM 推理中的传播规律，揭示不同层与注意力头对错误的敏感度差异，为高可靠部署提供指导。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. HERO'S JOURNEY: Testing Complex Rule Induction with Text Games**
🔗 http://arxiv.org/arxv/abs/2606.02556v1 | Zheng et al.
> 面向目标导向情节任务中规则归纳的全新基准，考察智能体从演示中推断隐藏规则并多步执行的能力，覆盖属性归纳与过程归纳两大类任务。

**7. SkillHarm: Lifecycle-Aware Skill-Based Attacks via Automated Construction**
🔗 http://arxiv.org/abs/2606.02540v1 | Ning et al.
> 揭示 Agent 工作流中第三方技能的自动化全生命周期攻击面，暴露现有安全评估未覆盖的供应链攻击风险。

**8. Ghost Tool Calls: Issue-Time Privacy for Speculative Agent Tools**
🔗 http://arxiv.org/abs/2606.02483v1 | Mohammadi et al.
> 指出 Agent 投机性工具调用会在决策未确定前将用户意图泄露给外部服务，并提出执行时隐私保护方案。

**9. ClinEnv: An Interactive Multi-Stage Long Horizon EHR Environment for Agents**
🔗 http://arxiv.org/abs/2606.02568v1 | Lu et al.
> 面向临床决策构建长时序交互环境，模拟医生渐进式信息收集与不可逆序贯决策，填补静态医疗评测的空白。

**10. Iteris: Agentic Research Loops for Computational Mathematics**
🔗 http://arxiv.org/abs/2606.02484v1 | Chen et al.
> 展示 AI Agent 在计算数学开问题上通过「猜想-验证-修正」闭环自主探索的能力，为数学研究自动化开辟新路径。

**11. Bridging the Last Mile of Time Series Forecasting with LLM Agents**
🔗 http://arxiv.org/abs/2606.02497v1 | Liao et al.
> 将 LLM Agent 引入时序预测的「最后一英里」流程，通过多步信息收集与推理弥合统计基线与真实业务决策之间的鸿沟。

**12. Monitoring Agentic Systems Before They're Reliable**
🔗 http://arxiv.org/abs/2606.02494v1 | Boston et al.
> 指出部分集成阶段 Agent 系统的主要失败模式是结构性缺陷而非任务级错误，并提出超越任务级监控的系统级框架。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**13. ProtoAda: Prototype-Guided Adaptive Adapter Expansion and Geometric Consolidation for Multimodal Continual Instruction Tuning**
🔗 http://arxiv.org/abs/2606.02576v1 | Shi et al.
> 针对多模态持续指令调优，提出原型引导的自适应 Adapter 扩张与几何巩固方法，有效抑制任务间干扰。

**14. AdaCodec: A Predictive Visual Code for Video MLLMs**
🔗 http://arxiv.org/abs/2606.02569v1 | Hou et al.
> 利用视频的时间冗余性为视频多模态 LLM 设计预测性视觉编码，将每帧独立 RGB 编码替换为增量预测编码，大幅减少视觉 token 数量。

**15. On the Scaling of PEFT: Towards Million Personal Models of Trillion Parameters**
🔗 http://arxiv.org/abs/2606.02437v1 | Cao et al.
> 将参数高效微调从「全量微调的廉价替代」重新定义为「共享基础模型上的持久本地状态」，探讨百万级个人模型在万亿参数基础模型上的扩展路径。

### 📊 应用（垂直领域、多模态、代码生成）

**16. MCP-Persona: Benchmarking LLM Agents on Real-World Personal Applications via Environment Simulation**
🔗 http://arxiv.org/abs/2606.02470v1 | Wang et al.
> 面向 Model Context Protocol（MCP）在家务、日程等个人场景中的应用，构建环境仿真基准，填补现有基准对真实个人服务场景覆盖的不足。

**17. GC-MoE: Genomics-Guided Cell-Type-Specific Mixture of Experts for Histology-Based Single-Cell Spatial Transcriptomics**
🔗 http://arxiv.org/abs/2606.02424v1 | Shiku et al.
> 将基因组学与细胞类型特异性 Mixture of Experts 结合，通过组织病理图像预测单细胞空间转录组，降低昂贵的湿实验成本。

---

## 3. 研究趋势信号

本期投稿释放出三个新兴方向的明确信号。**第一，Agent 安全与供应链攻击成为新焦点。** SkillHarm 的自动化全生命周期攻击框架、Ghost Tool Calls 的隐私泄露分析以及 SafeSteer 的安全对齐方法表明，社区正从「Agent 能做什么」转向「Agent 在什么条件下可控」。**第二，多模态持续学习进入深耕阶段。** ProtoAda、CRAM、AdaCodec 三篇论文从不同角度同时发力，说明 MLLM 在真实场景中持续积累能力的需求已从概念走向工程实现。**第三，评测范式从静态向交互式、长期演进。** ClinEnv、MCP-Persona、PaSBench-Video 均强调动态交互环境下的能力评估，反映研究者已意识到静态 benchmark 无法捕捉真实部署中的关键失败模式。此外，扩散语言模型的推理加速（SimSD）与 Agent 在基础科研中的闭环探索（Iteris）也值得关注，前者指向 dLLM 实用化的关键一步，后者则展示了 AI for Science 的全新范式。

---

## 4. 值得精读

### ① AdaCodec: A Predictive Visual Code for Video MLLMs
🔗 http://arxiv.org/abs/2606.02569v1

**理由：** 视频 MLLM 的视觉 token 爆炸是制约长视频理解的核心瓶颈。该论文从视频信号的本质冗余出发，用预测增量编码替代逐帧独立编码，思路优雅且具有强工程落地价值，为长视频 MLLM 的实用化提供了关键技术路径。

### ② Iteris: Agentic Research Loops for Computational Mathematics
🔗 http://arxiv.org/abs/2606.02484v1

**理由：** 将 Agent 引入计算数学研究闭环是具有范式意义的工作。「猜想-验证-修正」的迭代探索框架若被验证有效，将深刻改变数学研究的协作方式，也为 AI for Science 提供了可复用的方法论模板。

### ③ On the Scaling of PEFT: Towards Million Personal Models of Trillion Parameters
🔗 http://arxiv.org/abs/2606.02437v1

**理由：** 该论文重新定义了 PEFT 的角色定位——从微调替代方案转变为共享大模型上的持久化本地状态。这一视角转换对个性化 AI 服务的规模化部署具有深远的战略意义，涉及到万亿参数基础模型与海量用户本地适配器的协同架构设计问题。

---

*本报告基于 2026-06-03 ArXiv cs.AI / cs.CL / cs.LG 收录论文生成，版权归原作者所有。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*