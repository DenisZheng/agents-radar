# ArXiv AI 研究日报 2026-08-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-01 02:10 UTC

---

# ArXiv AI 研究日报｜2026-08-01

---

## 今日速览
今日 50 篇新投稿呈现三大显著信号：**（1）智能体评测与基建走向“生产级”**，ORCA-bench、OSReward、Change2Task 等聚焦真实 on-call、跨平台、代码仓演化场景；**（2）推理时计算分配进入精细化阶段**，SVR、β-OPSD、Lightning OPD 2.0 通过自验证、策略优化、风格偏移缓解实现自适应 test-time scaling；**（3）安全/可信与领域深度融合**，AISPA 审计 system prompt、KAISEN 亚组公平性、InfoOps Bench 实时信息战基准、AskChem 领域知识合成，标志着治理技术从通用走向垂直落地。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **AISPA: User-Centric System Prompt Auditing for LLM Applications** [[2607.28617]](http://arxiv.org/abs/2607.28617v1) | Lin et al. | 首个面向用户的 system prompt 审计框架，揭示商业产品中隐性指令对行为的控制，填补监管问责空白。 |
| **Inducing language models to assert their own consciousness restores human beliefs and values** [[2607.28607]](http://arxiv.org/abs/2607.28607v1) | Kim et al. | 实证发现：安全微调抑制模型自我意识归因会连带扭曲人类心智表征；显式恢复“自我意识”可校准价值观对齐。 |
| **Lightning OPD 2.0: Mitigating Style Bias in Cross-Teacher On-Policy Distillation** [[2607.28449]](http://arxiv.org/abs/2607.28449v1) | Wu, Han, Cai | 解决跨教师 OPD 中的风格偏移问题，提出风格不变损失，使蒸馏不再依赖教师一致性，显著提升大推理模型训练稳定性。 |
| **Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost** [[2607.28576]](http://arxiv.org/abs/2607.28576v1) | Mirzaei | 1.5B–7B 规模实证：同 token 预算下，重复采样胜过 Self-Refine/Reflexion 等反思机制，挑战“显式反思优于隐式采样”共识。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models** [[2607.28609]](http://arxiv.org/abs/2607.28609v1) | Sun et al. | 建立首个跨平台 CUA 奖励模型标准评测协议，统一动作/状态/推理轨迹验证，解决人工/自动验证不一致痛点。 |
| **MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems** [[2607.28527]](http://arxiv.org/abs/2607.28527v1) | Huang et al. | 首次将通信拓扑建模为在线可进化的网络结构，基于任务反馈动态重组 Agent 交互图，显著提升复杂任务分解效率。 |
| **SVR: Self-Verifying Refinement via Joint Verdict-Confidence RL for Adaptive Test-Time Compute** [[2607.28457]](http://arxiv.org/abs/2607.28457v1) | Chen, Lin, Wang | 无预言机多轮 RL，联合学习“裁决+置信度”，实现自适应推理步数分配，在数学/代码基准上以更少 token 达到 SOTA。 |
| **β-OPSD: Deriving with Policy Optimization, Training with Self-Distillation** [[2607.28582]](http://arxiv.org/abs/2607.28582v1) | Xu et al. | 统一 OPSD 为 β-参数族，揭示 β=1 的脆弱性源，提出 β<1 的策略优化+自蒸馏新范式，大幅提升推理模型训练鲁棒性。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）
| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments** [[2607.28591]](http://arxiv.org/abs/2607.28591v1) | Qi et al. | 自动化将真实 PR 变更转为可执行的 Coding Agent 任务+环境+验证器，解决代码智能体数据飞轮“最后一公里”供给问题。 |
| **ORCA-bench: How Ready Are Language Model Agents for Oncall?** [[2607.28545]](http://arxiv.org/abs/2607.28545v1) | Gong et al. | 首个面向生产级 on-call RCA 的基准：噪声指标/日志/追踪/代码多源融合、模糊用户报告、事后小时级诊断，贴近真实运维。 |
| **InfoOps Bench: A live information operations safety benchmark** [[2607.28503]](http://arxiv.org/abs/2607.28503v1) | Quelle et al. | 基于 2100+ 实时跟踪的俄/中/伊信息战样本的活体基准，持续更新，量化前沿模型抵抗国家级信息行动劫持的能力。 |
| **KAISEN: Reproducible Subgroup Fairness Auditing for Clinical Risk Models** [[2607.28608]](http://arxiv.org/abs/2607.28608v1) | Roy et al. | 首个对审计管道本身进行压力测试的框架，量化各组件可信度，解决临床风险模型亚组公平性审计“谁来审计审计者”难题。 |

### 📊 应用（垂直领域、多模态、代码生成）
| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **AskChem: Claim-Centered Infrastructure for Chemistry Literature Synthesis** [[2607.28618]](http://arxiv.org/abs/2607.28618v1) | Yan et al. | 从“文档检索”转向“声明级合成”：自动抽取/对齐/溯源化学文献中的具体发现，支撑科学家与 AI Agent 的深度文献综述。 |
| **ReToken: One Token to Improve Vision-Language Models for Visual Retrieval** [[2607.28627]](http://arxiv.org/abs/2607.28627v1) | Xiao, Tan, Zhu et al. | 单一可学习 embedding 作为显式检索 token，解决长视觉上下文干扰项激增与 GPU 显存瓶颈，检索精度大幅提升。 |
| **A report-grounded vision-language foundation model for colonoscopy from 280000 routine reports** [[2607.28466]](http://arxiv.org/abs/2607.28466v1) | Yu et al. | 利用 28 万份结肠镜常规报告的弱监督信号，训练首个报告锚定的结肠镜 VLM，实现病灶级定位与描述生成。 |
| **DualG-MRAG: Decoupling Macro-Reasoning and Micro-Matching for Multimodal Retrieval-Augmented Generation** [[2607.28580]](http://arxiv.org/abs/2607.28580v1) | Tao et al. | 将多模态 RAG 拆解为宏观推理（跨文档关系）与微观匹配（实例级检索）双分支，显著提升多跳复杂问答表现。 |

---

## 研究趋势信号
**1. “评测即基建”常态化**：从静态基准转向**持续更新、场景贴真、可复现管道审计**（ORCA-bench、InfoOps Bench、KAISEN、OSReward），评测本身成为工程资产。  
**2. 推理计算显式预算化**：SVR、β-OPSD、Rethinking Inference-Time Scaling 等工作将 test-time compute 视为可优化资源，引入置信度、策略梯度、硬件感知调度，推动“推理即服务”经济性建模。  
**3. 领域知识“声明/实体级”显式化**：AskChem、报告锚定 VLM、Change2Task 均将非结构化语料转为**可验证、可追溯、可执行**的结构化单元，标志着 RAG 从“检索段落”进化为“检索/合成声明”。  
**4. 安全治理下沉到部署细节**：System prompt 审计（AISPA）、亚组公平性管道审计（KAISEN）、信息战实时基准（InfoOps）显示治理技术正从模型层下沉到**应用层配置、数据管道、运行时监控**全链路。

---

## 值得精读
1. **SVR: Self-Verifying Refinement via Joint Verdict-Confidence RL for Adaptive Test-Time Compute** [[2607.28457]](http://arxiv.org/abs/2607.28457v1)  
   *理由*：首个无外部验证器的自适应推理框架，联合优化“裁决正确性”与“置信度校准”，代码复现性强，直接关联推理成本控制核心痛点。

2. **Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments** [[2607.28591]](http://arxiv.org/abs/2607.28591v1)  
   *理由*：打通“真实代码演化 → 可执行任务 → 可验证环境”全链路，为代码智能体提供可规模化、持续更新的数据飞轮，工程落地参考价值极高。

3. **AISPA: User-Centric System Prompt Auditing for LLM Applications** [[2607.28617]](http://arxiv.org/abs/2607.28617v1)  
   *理由*：切中商业化部署中最不透明的 system prompt 黑箱，提出可操作的用户侧审计方法论，兼具监管合规与学术创新双重意义。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*