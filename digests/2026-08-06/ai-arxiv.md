# ArXiv AI 研究日报 2026-08-06

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-06 01:58 UTC

---

# ArXiv AI 研究日报 | 2026-08-06

---

## 今日速览
今日 50 篇论文呈现四大核心看点：**多模态架构突破串行瓶颈**（ParVL 提出并行扩展与动态算力分配）、**推理时计算体系化梳理**（Test-Time Scaling 统一定义了推理阶段的计算范式与评估标准）、**智能体评测范式前移**（WorldCup Arena 实战赛事预测、SocietyBench 社会演化预测、PAST-Bench 递归自我进化基准）、**细粒度信用分配与负样本学习**（TurnSight 轮级回溯蒸馏、ReflectRL 黄金负轨迹学习）。此外，ALiBi 位置编码曝光数值下溢致盲缺陷，跨模型 KV Cache 迁移解决部署切换痛点，多模态智能体向视频深度研究、临床专家级诊断纵深演进。

---

## 重点论文

### 🧠 大语言模型：架构、训练、对齐与评估
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[ParVL: Parallel Scaling and Expandable Compute Allocation for Multimodal LLMs](http://arxiv.org/abs/2608.04010v1)** | Yang et al. | 打破 MLLM 串行扩展范式，提出**并行视觉/语言分支扩展**与**动态可扩展算力分配机制**，在不增加峰值显存/延迟前提下实现性能跃升。 |
| **[Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)** | Hariri et al. | **系统性综述/基准化**“推理时扩展”杂沓现状：统一定义单轨延思、多轨投票、树搜索等推理范式，建立统一评估协议与复现框架，为后续研究立标杆。 |
| **[When Attention Goes Blind: Numerical Failure in ALiBi Positional Encodings](http://arxiv.org/abs/2608.03994v1)** | Schröder et al. | **发现 ALiBi 线性偏置在长上下文下因浮点下溢导致注意力权重归零**，“致盲”比例随精度/长度剧增，并提出数值稳定修正方案，影响所有长文本 ALiBi 模型。 |
| **[Cross-Model KV Cache Transfer in LLM Families: A Closed-Form Linear Mapping for Prefill Reuse](http://arxiv.org/abs/2608.03893v1)** | Heo et al. | 解决模型家族间切换重算 prefill 痛点：推导**闭式线性映射**实现跨尺寸模型 KV Cache 迁移，零额外训练、近零性能损失，极大降低级联/路由部署成本。 |
| **[Logic Before Language: Pre-pretraining on Formal Derivations Fosters Skill Acquisition and Compressibility](http://arxiv.org/abs/2608.03930v1)** | Cheng et al. | 证明在**形式化推导语料上预预训练**能显著加速自然语言习得、提升压缩率与推理技能，为“逻辑先行”范式提供实证与可解释性分析。 |
| **[Omega-S: A Functional Resilience Index for LLM Fine-Tuning](http://arxiv.org/abs/2608.03887v1)** | Acedo | 提出**仅需权重矩阵、无需旧数据/Fisher/旧权重拷贝**的三行代码正则项，量化微调对旧知识破坏度，实用性极强的抗遗忘指标。 |
| **[WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament](http://arxiv.org/abs/2608.04008v1)** | Wang et al. | **首个实时赛事前瞻性评测**：在 2026 世界杯 39 天内每日让前沿模型预测比赛结果，天然规避数据污染，建立动态排位榜，重新定义“预测能力”评测标准。 |
| **[SocietyBench: Forecasting Counterfactual Social-World Evolution](http://arxiv.org/abs/2608.04009v1)** | Wang et al. | 从“完成任务”转向“理解社会演化”：构建反事实社会事件预测基准，考察模型对多智能体社会动态的长程推演与干预推理能力。 |

### 🤖 智能体与推理：规划、工具使用、多智能体、思维链
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning](http://arxiv.org/abs/2608.04007v1)** | Qu et al. | 解决工具集成推理（TIR）长链条**信用分配稀疏**难题：引入**轮级事后回溯蒸馏**，将专家轨迹按交互轮次分解为细粒度监督信号，大幅提升工具调用精度与鲁棒性。 |
| **[ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning](http://arxiv.org/abs/2608.03972v1)** | Bi et al. | **反直觉范式创新**：当专家模型失败时，利用“黄金负轨迹”通过**反思式推理转直接推理**的课程学习，让模型从错误中习得修正模式，突破正样本依赖瓶颈。 |
| **[PAST-Bench: Benchmarking the Foundations of Recursive Self-Improvement in Personal Agents](http://arxiv.org/abs/2608.04003v1)** | Xue et al. | 定义**个人智能体递归自我进化**评测框架：考察跨会话保留偏好/技能/工具流后，能否将积累经验转化为未来更优行为，填补长期进化评测空白。 |
| **[ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?](http://arxiv.org/abs/2608.03874v1)** | Guan et al. | 针对技能库增强型 Agent，构建**持续技能进化基准**，量化技能获取、泛化、组合与遗忘动态，揭示现有框架“技能积累 ≠ 能力进化

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*