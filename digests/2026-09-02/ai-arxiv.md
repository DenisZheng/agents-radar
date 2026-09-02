# ArXiv AI 研究日报 2026-09-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-02 02:22 UTC

---

# ArXiv AI 研究日报 | 2026-09-02

## 今日速览
今日 50 篇新论文呈现三大显著趋势：**推理范式从离散 Token 转向连续潜空间**（如 Latent Recurrent Thoughts）、**智能体生态走向自动化设计与自我进化**（AgentFactory、ARISE-RL、Progressive Risk Vesting）、**MoE 架构深入推理期细粒度组合与路由机制重构**（PCoMoE、Contrastive Routing）。评估科学化进程加速，涌现针对多语言智能体、临床纵向推理、规范多元性的专用基准。底层架构层面，Transformer 注意力机制的代数规律被实证发现，为模型压缩与理解提供新视角。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[Scaled Idempotence in Transformer Attention](http://arxiv.org/abs/2609.01129v1)** | Feng, Li et al. | **实证发现注意力头 OV 算子满足 $T^2 \approx \alpha T$ 幂等性**，跨 2.8B–235B 模型普适，揭示 Transformer 内在代数结构，为架构剪枝与理论分析提供新锚点。 |
| **[Contrastive Routing for Modular Mixture-of-Experts](http://arxiv.org/abs/2609.01100v1)** | Xiros et al. | 提出**对比路由机制**：以指数移动平均为锚点对比，而非单纯依赖幅度路由，显著提升专家专业化程度，解决 MoE 共享表示导致的专家分化不足问题。 |
| **[PCoMoE: Fine-Grained Path Composition for MoE Inference](http://arxiv.org/abs/2609.01024v1)** | Gan, Liu et al. | 打破“整体专家”抽象，将 MoE 推理重构为**细粒度路径组合**，实现专家内部计算复用与动态调度，大幅降低推理延迟与显存占用。 |
| **[Post-hoc Alignment of LLM-judges to Human Judgment Distribution](http://arxiv.org/abs/2609.01073v1)** | Steindl, Voskarides et al. | 指出现有 LLM-as-a-judge 忽略**人类标签分布方差**，提出事后对齐方法拟合完整判断分布而非仅匹配聚合标签，提升评估可靠性。 |
| **[Does task decomposition improve automatic NLG evaluation?](http://arxiv.org/abs/2609.01139v1)** | Steindl, Voskarides et al. | 系统性实证对比任务分解对 LLM 评估的影响，**揭示分解并非普遍有效**，其收益高度依赖子任务独立性与提示词质量，为评估范式选择提供指南。 |
| **[Subliminal Learning as Trait-Direction Drift](http://arxiv.org/abs/2609.01091v1)** | Liu, Dong et al. | 发现**蒸馏数据中隐含的教师偏好（如系统提示诱导的偏见）会以“亚阈值学习”形式迁移给学生模型**，即使数据语义看似干净，揭示对齐安全新风险。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[Latent Recurrent Thoughts](http://arxiv.org/abs/2609.01117v1)** | Chen, Fu | **范式创新**：冻结 LLM，在连续潜空间通过循环细化进行推理，规避 Token 级错误传播与对高质量 CoT 数据的依赖，开辟“隐式推理”新赛道。 |
| **[ARISE-RL: Agentic Rubric-Grounded Iterative Self-Evolution](http://arxiv.org/abs/2609.01058v1)** | Zhang, Ding et al. | 针对开放式智能体缺乏可验证奖励的痛点，提出**基于量表的迭代自我进化 RL 框架**，通过自生成量表稳定长时程奖励信号。 |
| **[AgentFactory: Automated Agentic System Design](http://arxiv.org/abs/2609.01045v1)** | Zhang, Wang et al. | 将智能体系统设计形式化为**自动化架构搜索与参数优化问题**，利用 LLM 作为元设计器，实现从任务描述到部署系统的端到端自动化。 |
| **[Spawn Freely, Act Sparingly: Progressive Risk Vesting](http://arxiv.org/abs/2609.01035v1)** | Wang | 为递归 LLM 智能体树引入**风险分级授权机制**：沙箱生成与能力激活解耦，仅在通过验证后授予工具调用权限，平衡探索广度与安全性。 |
| **[WorldBench: Culturally Grounded Benchmark for Multilingual Agents](http://arxiv.org/abs/2609.01056v1)** | Ranaldi, Shen et al. | 首个**多语言、状态保持、文化落地**的智能体基准，覆盖真实场景交互，填补现有基准在跨语言泛化与长程状态管理评估的空白。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[Lagged Coupling: Representations Become Readable Before Causal](http://arxiv.org/abs/2609.01048v1)** | Xun | **重大解读性发现**：线性探针可在训练极早期读取变量，但沿同一方向干预长期无效（“读写解耦”），揭示表示可读性与因果作用的时滞，重塑干预实验设计。 |
| **[SAGE: Subpopulation-Aware Generative Enhancement](http://arxiv.org/abs/2609.01051v1)** | Luo, Zhao et al. | 针对虚假相关提出**子群感知生成增强**，识别少数群体并合成对抗样本打破捷径学习，无需群体标注即可提升最坏组准确率。 |
| **[SinkPruner: Sink-Free Visual Token Pruning for MLLMs](http://arxiv.org/abs

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*