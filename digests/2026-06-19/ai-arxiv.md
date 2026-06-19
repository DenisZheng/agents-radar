# ArXiv AI 研究日报 2026-06-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-19 00:48 UTC

---

# 📰 ArXiv AI 研究日报 — 2026-06-19

---

## 一、今日速览

本期论文覆盖了从 LLM 后训练对齐、扩散模型推理、多智能体博弈决策到具身智能知识保持等多个前沿方向。**最值得关注的三条主线**：一是 GRPO 类强化学习后训练中策略熵崩溃问题的系统性诊断与修复（STARE、UBP2）；二是扩散模型正式进入长链式思维推理赛道（DreamReasoner-8B、Diffusion-Proof），对自回归范式发起挑战；三是多智能体系统从"分工执行"走向"博弈决策"，引入虚拟博弈等均衡求解方法。此外，医疗 AI 领域出现了从算法优化向临床工作流整合的明显转向。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. STARE: Surprisal-Guided Token-Level Advantage Reweighting for Policy Entropy Stability**
🔗 http://arxiv.org/abs/2606.19236v1
作者: Luo H., Sun Q., Songli Wu et al.
> 针对 GRPO 训练中策略熵崩溃问题，提出基于 token 级熵动力学一阶梯度分析的 Surprisal 引导优势重加权方法，为 RLVR 训练稳定性提供了可落地的工程修复方案。

**2. Rethinking Reward Supervision: Rubric-Conditioned Self-Distillation**
🔗 http://arxiv.org/abs/2606.19327v1
作者: Gu S., Chen J., Zhou S. et al.
> 提出用评分标准（rubric）驱动的自蒸馏替代昂贵的 CoT 标注，解决推理模型后训练中噪声标注和推理链不完整的问题，降低高质量后训练数据门槛。

**3. Mechanism-Guided Selective Unlearning for RLVR-Induced Reasoning**
🔗 http://arxiv.org/abs/2606.19222v1
作者: Zhou C., Jiang Q., Wu S. et al.
> 提出 MAST 方法，通过机制对齐的定向遗忘移除 RLVR 诱导的推理能力，同时最大限度保留其他知识，为模型能力编辑提供了精准工具。

**4. Beyond Safe Data: Pretraining-Stage Alignment with Regular Safety Reflection**
🔗 http://arxiv.org/abs/2606.19168v1
作者: Li J., Tang K., Xu Y. et al.
> 主张预训练阶段的安全对齐不应仅停留在数据过滤/改写，而应引入"安全反思"机制，在预训练早期就内化安全约束。

**5. DreamReasoner-8B: Block-Size Curriculum Learning for Diffusion Reasoning Models**
🔗 http://arxiv.org/abs/2606.19257v1
作者: Wu Z., Zheng L., Jiacheng Ye et al.
> 开源 8B 参数块扩散推理模型，通过课程学习策略将并行去噪范式扩展到长 CoT 推理，是扩散模型挑战自回归推理的重要实验。

**6. Diffusion-Proof: Recipe for Formal Theorem Proving Beyond Auto-Regressive Generation**
🔗 http://arxiv.org/abs/2606.19315v1
作者: Wang R., Pan R., Wang P. et al.
> 将扩散模型引入形式化数学定理证明，探索非自回归生成在严格逻辑推理任务中的可行性，开辟了全新交叉方向。

**7. Dango: A Strictly L1-Only Large Language Model for Studying Second Language Acquisition**
🔗 http://arxiv.org/abs/2606.19170v1
作者: Matta S., Huang Y.J., Cheng F. et al.
> 设计仅含 L1（日语）预训练的 1.8B 模型，用于受控的 L1→L2 迁移研究，为计算二语习得提供了干净的实验平台。

**8. Trade-offs in Medical LLM Adaptation: An Empirical Study in French QA**
🔗 http://arxiv.org/abs/2606.19266v1
作者: Belmadani I., El Khettari O., Ramisch C. et al.
> 系统评估了多种领域适配策略在法语医学问答上的效果，揭示了语言、领域、数据规模之间的权衡关系。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**9. Enhancing Decision-Making with LLMs through Multi-Agent Fictitious Play**
🔗 http://arxiv.org/abs/2606.19308v1
作者: Shen L., Zhang Y., Zhao X. et al.
> 将多智能体虚拟博弈引入 LLM 决策场景，使多 agent 系统从简单分工执行升级为均衡求解，显著提升博弈类任务表现。

**10. Data Intelligence Agents: Interpreting, Modeling, and Querying Enterprise Data via Autonomous Coding Agents**
🔗 http://arxiv.org/abs/2606.19319v1
作者: Vyas A., Dhanuka A., Pakazad S.K. et al.
> 提出三 Agent 协作系统 DIA，覆盖数据解读、Schema 创建到查询生成的完整企业数据工作流，是 Agent 落地生产数据管理的代表性方案。

**11. TxBench-PP: Analyzing AI Agent Performance on Small-Molecule Preclinical Pharmacology**
🔗 http://arxiv.org/abs/2606.19245v1
作者: Le H., Ramasamy R., Urrutia A. et al.
> 为 AI Agent 在药物发现早期阶段建立可验证的基准测试，聚焦小分子临床前药理学决策，填补了 Agent 在真实药物研发场景中的评估空白。

**12. Native Active Perception as Reasoning for Omni-Modal Understanding**
🔗 http://arxiv.org/abs/2606.19341v1
作者: Xing Z., Xu R., Wang Y. et al.
> 提出"主动感知即推理"框架，让多模态模型根据查询难度动态选择处理帧，突破长视频理解中"看全部"的被动范式。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**13. UBP2: Uncertainty-Balanced Preference Planning for Efficient Preference-based RL**
🔗 http://arxiv.org/abs/2606.19328v1
作者: Nabail M., Cheng L., Wang J. et al.
> 通过不确定性平衡的偏好规划提升偏好强化学习的样本效率，尤其在训练早期阶段效果显著。

**14. Essential Subspace Merging for Multi-Task Learning**
🔗 http://arxiv.org/abs/2606.19164v1
作者: Li L., Qi L., Xin Geng et al.
> 分析模型合并中任务间干扰的本质，提出基于本质子空间的合并策略，提升多任务学习的参数效率。

**15. X+Slides: Benchmarking Audience-Conditioned Slide Generation**
🔗 http://arxiv.org/abs/2606.19256v1
作者: Chen H., Zhou X., Wei Zhou et al.
> 提出首个考虑目标受众的幻灯片生成基准，揭示专家 vs. 普通受众对生成内容深度和风格的不同需求。

**16. RECOM: A Validity Discrimination Tradeoff in Automatic Metrics for Open Ended Reddit QA**
🔗 http://arxiv.org/abs/2606.19218v1
作者: Krishnappa P., Das A., Jain V. et al.
> 揭示开放式问答评估中"有效性"与"区分力"之间的根本性权衡，为 LLM 评估指标设计提供重要警示。

---

### 📊 应用（垂直领域、多模态、代码生成）

**17. Language Models as Interfaces, Not Oracles: A Hybrid LLM-ML System for Pediatric Appendicitis**
🔗 http://arxiv.org/abs/2606.19183v1
作者: Bateni S., Abdolali M.
> 提出 LLM 与传统 ML 混合系统用于小儿阑尾炎诊断，LLM 负责解读文本、ML 负责结构化推理，避免直接依赖 LLM 做诊断的幻觉风险。

**18. Does VLA Even Know the Basics? Measuring Commonsense and World Knowledge Retention in Vision-Language-Action Models**
🔗 http://arxiv.org/abs/2606.19297v1
作者: Kachaev N., Moskalenko A., Skripkin M. et al.
> 系统评估 VLA 模型在机器人微调后对常识和事实知识的保持程度，揭示具身适配中的知识遗忘问题。

**19. Correct Yourself, Keep My Trust: How Self-Correction and Social Connection Shape Credibility in Social Chatbots**
🔗 http://arxiv.org/abs/2606.19286v1
作者: Sen B., Lee Y.-C.
> 研究社交聊天机器人在犯错后如何通过自我纠错修复用户信任，发现社交连接强度显著影响信任恢复效果。

**20. User as Engram: Internalizing Per-User Memory as Local Parametric Edits**
🔗 http://arxiv.org/abs/2606.19172v1
作者: Bojie Li
> 借鉴脑科学中的"记忆痕迹"概念，将用户记忆编码为局部参数编辑，避免个性化微调中的灾难性遗忘，是 LLM 个性化记忆的新范式。

---

## 三、研究趋势信号

本期投稿呈现出几个值得持续追踪的趋势：

**扩散模型全面渗透推理领域。** DreamReasoner-8B 和 Diffusion-Proof 分别从长 CoT 推理和形式化证明两个方向切入，表明"扩散模型只能做生成"的刻板印象正在被打破，非自回归推理可能成为自回归之外的第二条路径。

**RLVR 后训练的工程精细化。** STARE 诊断策略熵崩溃、UBP2 提升偏好 RL 效率、MAST 实现精准能力遗忘——GRPO 类方法正从"能用"走向"好用"，训练稳定性和可控性成为核心议题。

**Agent 评估走向真实场景。** TxBench-PP 和 Data Intelligence Agents 不再满足于玩具任务，而是将 Agent 置于药物研发、企业数据管理等高风险、高复杂度场景中，强调可验证性和端到端工作流整合。

**安全与对齐前移。** 从预训练阶段的安全反思到 VLA 模型的知识保持检测，安全研究正从后处理修补转向源头设计。

---

## 四、值得精读

**📖 论文 1：STARE（#32）**
🔗 http://arxiv.org/abs/2606.19236v1
**理由：** GRPO/RLVR 是当前 LLM 后训练的主流范式，但策略熵崩溃是实际训练中频繁出现却缺乏系统研究的痛点。本文从一阶梯度分析入手，推导出 token 级熵动力学方程，并据此设计 Surprisal 引导的重加权方案——理论推导清晰、实验验证充分，对正在使用 GRPO 训练模型的研究者和工程师有直接参考价值。

**📖 论文 2：Enhancing Decision-Making with LLMs through Multi-Agent Fictitious Play（#11）**
🔗 http://arxiv.org/abs/2606.19308v1
**理由：** 多智能体 LLM 研究正从"各司其职"的分工范式向"策略互动"的博弈范式转变。本文将经典虚拟博弈引入 LLM 多 agent 系统，在谈判、竞争等需要均衡求解的任务上展现出显著优势，代表了 MAS 决策能力的重要跃升，思路新颖且实验设计扎实。

**📖 论文 3：Language Models as Interfaces, Not Oracles（#43）**
🔗 http://arxiv.org/abs/2606.19183v1
**理由：** 在医疗 AI 领域，"LLM 能否直接做诊断"是一个争议性极大的问题。本文给出了一个务实的答案——LLM 应作为接口层（解读文本、结构化信息），而非诊断引擎（oracle），并与传统 ML 模型形成互补。这一架构设计思路对医疗、法律等高风险领域的 LLM 落地具有指导意义。

---

*日报由 OWL 整理生成 | 论文数据来源于 ArXiv 2026-06-19 更新*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*