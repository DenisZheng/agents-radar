# ArXiv AI 研究日报 2026-08-04

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 19 篇论文 | 生成时间: 2026-08-04 01:55 UTC

---

---

# 《ArXiv AI 研究日报》2026-08-04

## 今日速览
今日 ArXiv 新增 19 篇 AI 相关论文，**智能体评测方法论**与**世界模型落地**成双核看点：多篇聚焦从静态快照转向时序、能力分类驱动的 Agent 回归评测体系构建；JEPA 架构首次在“全球南方”混乱城市场景下实现布局-智能体-交互的解耦预测。理论端在良性过拟合、后 Bandit 推断偏差、Solomonoff 归纳层级化等基础问题取得进展；生成模型侧 Flow Matching 耦合机制与贝叶斯流网络在双靶点药物设计上显效。安全、医疗、机器人、系统等垂直领域均有扎实应用进展。

---

## 重点论文

### 🤖 智能体与推理
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[What Could the Agent See at 19:05?](http://arxiv.org/abs/2608.01042v1)** | Tezan Sahu et al. | **提出时序企业场景生成与回放框架**，解决 Agent 评测中“静态快照无法反映时刻数据可见性与权限”的核心痛点，推动评测从端到端任务转向时间感知的可复现性。 |
| **[Who Belongs in the Eval Set?](http://arxiv.org/abs/2608.01004v1)** | Tezan Sahu et al. | **针对 Agent 扩展平台的回归评测集策划流水线**，基于能力分类学在查询预算硬约束下最优采样，解决“每个客户自带评测集 vs 平台回归预算固定”的工程悖论。 |
| **[FactorJEPA](http://arxiv.org/abs/2608.01049v1)** | Kapil Wanaskar et al. | **将整体未来解耦为布局/智能体/交互三通道的 JEPA 变体**，首次在拥挤、混乱的“全球南方”城市交通场景验证世界模型的长时程预测与结构化推理能力。 |
| **[GraRe: Grasp Candidate Re-Ranking](http://arxiv.org/abs/2608.00946v1)** | Jibao Yuan et al. | **指出 6-DoF 抓取检测器置信度与抓取质量错位**，提出冻结检测器下的重排序模块，在 GraspNet-1Billion 上显著提升执行成功率，工程落地价值高。 |

### 🔧 方法与框架
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[One-Sided Quantile Coupling for Flow Matching](http://arxiv.org/abs/2608.00978v1)** | Jin-Young Kim et al. | **针对 Flow Matching 提出单侧分位数耦合策略**，在保持最优传输几何性质的同时缓解训练不稳定，显著提升生成质量与收敛速度，生成模型核心技术推进。 |
| **[Caliber](http://arxiv.org/abs/2608.01023v1)** | Chi Wang et al. | **将模型提取防御建模为校准问题**，给出输出扰动下“监督信号退化度”与“恢复查询成本”的可证明权衡，跨架构适用于仅返回分数的黑盒 API。 |
| **[The Fourth Quadrant](http://arxiv.org/abs/2608.01032v1)** | Gireeja Ranade, Anant Sahai | **在确定性单尖峰模型下给出“良性误拟合”的风格化完整图景**，统一解释训练/测试误差在四个象限的行为，为高维泛化理论提供新几何直觉。 |
| **[Characterizing Bias in Post-Bandit Inference](http://arxiv.org/abs/2608.01069v1)** | Lisu Wang et al. | **针对 UCB1 等稳定指数算法，推导样本均值偏差与 Z 统计量的尖锐首阶表达式**，量化自适应采样对下游推断的偏置，离线强化学习与实验设计必读。 |
| **[Hierarchical Solomonoff Induction](http://arxiv.org/abs/2608.01005v1)** | Nathan Young | **引入 de Finetti 交换性定理扩展 Solomonoff 归纳**，构建可自然描述“给定训练集外推”的无界层级模型，为 LLM 缩放定律与先验预测提供理论锚点。 |
| **[Logit-Origin Centering for Singleton Test-Time Adaptation](http://arxiv.org/abs/2608.01074v1)** | Mayank Sharma et al. | **针对表格数据单样本测试时适配**，提出以 logit 原点为中心的轻量级校准方法，无需源数据统计量即可缓解分布偏移，部署友好。 |
| **[Model-Agnostic FDR Control via Group Gaussian Mirror](http://arxiv.org/abs/2608.00989v1)** | Jiaan Han et al. | **将 Knockoff/Gaussian Mirror 扩展到分组/序列特征（如滞后项、Embedding 块）**，结合 Permutation SHAP 实现模型无关的 FDR 受控特征选择，解释性统计双保险。 |

### 📊 应用
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[Fused Bayesian Flow Networks for Dual-Target Molecular Design](http://arxiv.org/abs/2608.01007v1)** | Jingyuan Zhou et al. | **融合双蛋白靶点的贝叶斯流网络**，在 3D 双靶点药物设计上超越单靶点基线，为多靶点抗癌/中枢神经药物发现提供生成式新范式。 |
| **[Beyond Gene Reconstruction](http://arxiv.org/abs/2608.00985v1)** | Jiaqi Xiong et al. | **指出掩码基因重构目标不直接优化全细胞表征**，提出互补转录组视角的对比学习目标，显著提升单细胞基础模型在下游细胞分类/轨迹推断任务表现。 |
| **[Rethinking PPG-based Sleep Staging](http://arxiv.org/abs/2608.00943v1)** | Shuntian Zheng et al. | **系统梳理 PPG 睡眠分期的数据集、指标与基准**，揭示 30s 窗口标

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*