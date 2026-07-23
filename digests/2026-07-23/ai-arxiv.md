# ArXiv AI 研究日报 2026-07-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-23 02:08 UTC

---

# 《ArXiv AI 研究日报》2026-07-23

---

## 今日速览
今日 ArXiv 新增 50 篇 AI 相关论文，**后训练与推理效率**成为核心主题：从万亿参数 MoE 的全参数微调系统（SLAI T-Rex）、大推理模型的“过度思考”剪枝（EvoThink），到评估器与策略协同进化（DynamicRubric）与测试时计算的显式监控（CUSUM），均指向**在有限算力下榨取模型极限性能**。同时，**智能体落地与安全治理**双线并进：VLA 人形机器人实环境适配（DEED）、长时程记忆与规划（PRO-LONG）、多智能体协同制造，以及首个针对 LLM 有害输出的 PAC 概率安全界、AI 供应链许可证溯源审计，标志着研究从“可用”转向“可靠、可审、可控”。多模态生成在音频（全曲生成、零标签自进化）与视频（流式 HOI）取得工程级突破，低资源语言（波斯语 OCR）与科学智能（医学表征收敛、材料机制解读）持续拓展应用边界。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[SLAI T-Rex: Full-Parameter Post-training of the DeepSeek-V4 Family on Ascend SuperPOD](http://arxiv.org/abs/2607.20145v1)** | Li et al. | **系统/训练突破**：首次公开万亿参数 MoE 模型全参数后训练的完整系统方案，解决了显存墙、通信重叠、内核执行效率三大工程难题，为国产算力训练前沿模型提供实战范本。 |
| **[Co-Evolving LLM Evaluators and Policies via DynamicRubric](http://arxiv.org/abs/2607.20083v1)** | Wang et al. | **对齐新范式**：针对 RLHF 中评估器因策略提升导致“打分崩塌”失效的问题，提出动态评分标准，实现评估器与策略协同进化，破解后训练奖励稀疏瓶颈。 |
| **[EvoThink: Evolving Thinking in Large Reasoning Models via Self-Pruning and Aha-Moment Preference Optimization](http://arxiv.org/abs/2607.19962v1)** | Dai et al. | **推理效率核心痛点**：指出 LRM 普遍存在“过度思考”冗余验证步骤，提出基于自我剪枝与“顿悟时刻”偏好优化的细粒度推理轨迹压缩方法，显著降低推理成本。 |
| **[ELSAA: Efficient Low-Rank and Sparse Attention Approximation for Training Transformers](http://arxiv.org/abs/2607.20214v1)** | Heidari et al. | **注意力机制创新**：统一低秩与稀疏两大高效注意力流派，提出可训练的混合近似方案，在保持长上下文性能的同时大幅降低训练显存与算力开销。 |
| **[Train the Model, Not the Reader: Decodability Supervision for Verifiable Activation Explanations](http://arxiv.org/abs/2607.20379v1)** | Dingeto | **可解释性新范式**：针对自然语言自编码器“重构分数不敏感单个错误声明”的缺陷，提出解码性监督，强制解释必须逐位可验证，推动忠实可校验的机制性解释。 |
| **[Self-supervision drives representational convergence in medical foundation models more than clinical supervision](http://arxiv.org/abs/2607.20274v1)** | Arasteh et al. | **医学表征科学发现**：大规模实证揭示医学基础模型表征收敛主要源于自监督规模而非临床标签，挑战“临床监督不可替代”假设，指导数据高效预训练。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[Closing the Lab-to-Store Gap: A Data-Efficient Post-Training and Experience-Driven Learning VLA Framework for Retail Humanoids](http://arxiv.org/abs/2607.20345v1)** | Sala Sisó et al. | **具身智能落地关键**：提出 DEED 框架，结合数据高效后训练与实环境经验驱动学习，解决 VLA 人形机器人在执行错误、分布偁移、环境变异下的实操可靠性难题。 |
| **[PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning](http://arxiv.org/abs/2607.20064v1)** | Fox et al. | **长时程记忆架构**：引入程序化外部记忆模块，使 LLM Agent 能在持续学习基准（ARC-AGI-3）上实现超越上下文窗口限制的长时程推理与探索。 |
| **[PoTRE: Test-Time Reasoning inspired by Cognitive Heterogeneity](http://arxiv.org/abs/2607.20268v1)** | Kankariya, Arık | **测试时计算新思路**：借鉴认知异质性，设计多路并行推理与迭代纠错机制，在长程规划与

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*