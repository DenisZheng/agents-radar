# ArXiv AI 研究日报 2026-07-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-29 02:00 UTC

---

# 《ArXiv AI 研究日报》2026-07-29

---

## 📌 今日速览
今日 ArXiv 新增 50 篇 AI 相关论文，**多模态医疗、智能体规划与蒸馏、长上下文/稀疏注意力优化、以及可信/可解释 AI** 为四大核心看点。Kimi K3 发布 2.8T 参数 MoE 边界模型，推动原生多模态长上下文落地；多篇工作聚焦 **on-policy diffusion distillation 与 classifier-free guidance 交互机制** 的理论重构；医疗领域出现 **ClinFusion、KANEx、ESRVS** 等从视觉中心到解释性的系统性突破；RAG 评测、代码修复可靠性、隐私感知分割学习等工程化课题持续深化。

---

## 🎯 重点论文（1.arguments

### 🧠 大语言模型（架构、训练、对齐、评估）

| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **[Kimi K3: Open Frontier Intelligence](http://arxiv.org/abs/2607.24653v1)** | Kimi Team et al. | 发布 2.8T 参数、104B 激活的 MoE 模型，原生视觉 + 1M 上下文，基于 Delta Attention 与 Attention Residuals 改善长序列信息流，开源权重推动边界模型普惠。 |
| **[D-Score: A Spectral Hidden-State Signal for Hallucination Detection](http://arxiv.org/abs/2607.24586v1)** | Raimondi et al. | 从隐藏状态谱几何提出无监督幻觉检测指标 D-Score，零样本泛化至多任务/模型，显著优于基线。 |
| **[What do Reward Models Memorize?](http://arxiv.org/abs/2607.24484v1)** | Verhoeven et al. | 量化 RM 在偏好数据上的反事实记忆：倾向记忆简单高边际样本与数据集捷径（模型身份、用户风格），揭示对齐鲁棒性隐患。 |
| **[UNIFUSION: Adapting AR LMs into Discrete Diffusion under Unified Reverse-Rate Objective](http://arxiv.org/abs/2607.24507v1)** | Jiang et al. | 首次将预训练 AR 模型直接适配至均匀噪声扩散（而非掩码扩散），统一反向速率目标实现无缝切换，保留 AR 推理优势并获得扩散编辑灵活性。 |
| **[From Data to Device: ELMOD – Efficient German-First 2.7B LM for Mobile Inference](http://arxiv.org/abs/2607.24585v1)** | Gold et al. | 仅 55k H100 小时、全公开数据训练 2.7B 德语模型，量化后在移动端实现实时推理，展示低资源语言小模型工程化最佳实践。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **[The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1)** | Men et al. | 提出“规划物理”框架：用单/多教师 on-policy agentic distillation 将长程规划能力从预训练显式迁移至后训练，首次量化规划能力的获得、整合与泛化机制。 |
| **[SIREN: Towards End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents](http://arxiv.org/abs/2607.24588v1)** | Ni et al. | 构建端到端极端天气预警多智能体系统，融合历史经验库、工具链与人类专家反馈，实测在预警时效与准确率上超越专家工作流。 |
| **[Looping Is Not Reliability: State-Bound Evidence and Typed Revision Contracts for Agentic Code Repair](http://arxiv.org/abs/2607.24604v1)** | Gao et al. | 指出生成-测试-修订循环的可靠性幻觉，引入状态约束证据与类型化修订契约，在 HumanEval 上将补丁保留率从 42% 提升至 78%。 |
| **[Reason-Mediated Behavioral Models for Auditing LLM Social Simulators](http://arxiv.org/abs/2607.24649v1)** | Pandey, Jajoo | 提出“推理中介行为模型”审计框架：不只看结果分布，更验证模拟推理链路是否与人类一致，揭示多个 SOTA 模拟器的“正确答案、错误理由”现象。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **[Rethinking Classifier-Free Guidance in On-Policy Diffusion Distillation](http://arxiv.org/abs/2607.24731v1)** | Li et al. | 系统分析 CFG 在 on-policy distillation 中的失效模式，提出 **CFG-aware OPD** 算法，统一教师/学生轨迹分布，显著提升少步采样质量。 |
| **[PIVOT: Efficient Query-Group Indexing for Token-Level Sparse Attention](http://arxiv.org/abs/2607.24593v1)** | Liu et al. | 针对 DeepSeek Sparse Attention 索引瓶颈，设计查询分组索引结构，将 top-k 选择延迟降低 3.2×，吞吐提升 2.8×，已部署于生产系统。 |
| **[LOCKS: Page-Local Compact Key Summaries for Efficient Long-Context Decoding](http://arxiv.org/abs/2607.24555v1)** | Hwang | 利用注意力键的“页局部低秩”特性，构建页级紧凑基，KV 缓存压缩 8× 且精度无损，解码延迟随上下文线性增长变为对数增长。 |
| **[DataOrchestra: Learning to Orchestrate Per-Example Curation of Pretraining Data](http://arxiv.org/abs/2607.24717v1)** | Huang et al. | 首个面向样本级的预训练数据编排框架：用轻量策略网络动态决定每条数据的过滤/增强/权重，预训练损失下降 12% 且无额外计算开销。 |
| **[DecoupleMix: Decoupled Ratio Search and Convex Allocation for Scalable VLM Data Recipes](http://arxiv.org/abs/2607.24516v1)** | Xie et al. | 将 VLM 预训练混合比例搜索解耦为“比例搜索+凸分配”两阶段，首个可归因、可扩展的数据配方优化方法，在 1B/7B 规模验证 SOTA。 |
| **[BettiSplit: Topology-Guided Privacy-Aware Split Learning Against Feature Inversion & Gradient Leakage](http://arxiv.org/abs/2607.24556v1)** | Nair et al. | 引入拓扑数据分析（Betti 数）指导分割点选择，理论证明在特征逆向与梯度泄露攻击下隐私风险最小化，兼顾通信开销。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **[ClinFusion: A Vision-Centric Multimodal LLM System for Holistic Medical Understanding](http://arxiv.org/abs/2607.24743v1)** | Yuan et al. | 构建以医学影像（2D/3D）为中心的多模态 LLM 系统，统一诊断、报告生成、跨模态检索，建立首个全流程临床评测协议。 |
| **[KANEx: Translating KANs' Interpretability to Medical Explainability](http://arxiv.org/abs/2607.24730v1)** | Shailya et al. | 将 Kolmogorov-Arnold Networks 的内在可解释性迁移至胸片分类，生成临床医生可验证的符号化解释，信任度人评提升 34%。 |
| **[ERUnderstand: Evaluating VLMs on Structured ER Diagrams](http://arxiv.org/abs/2607.24707v1)** | Ansari et al. | 发布首个大规模 ER 图结构理解基准（10k+ 图表），揭示当前 VLM 在实体/关系/约束抽象推理上的系统性短板。 |
| **[A corrective agentic hybrid RAG for a scientific facility](http://arxiv.org/abs/2607.24663v1)** | Sainju et al. | 面向加速器设施构建 APS-RAG：混合检索（日志/文档/维基/聊天/控制数据）+ 纠错智能体，运维问答准确率达 91%。 |
| **[ESRVS: Extreme Semi-Supervised Retinal Vessel Segmentation with a Single Annotated Image](http://arxiv.org/abs/2607.24453v1)** | Xu, Zhang | 仅 1 张标注图像 + 未标注池，通过伪标签选择与一致性正则化，达到全监督 95% Dice，极大降低医学标注成本。 |

---

## 📈 研究趋势信号
1. **On-policy distillation 成为扩散/规划/智能体统一范式**：从 diffusion distillation 到 agentic planning，核心均为“用当前策略采样轨迹、教师修正、学生模仿”，CFG、奖励模型、工具反馈等均纳入 on-policy 闭环。  
2. **“视觉为中心”重塑多模态医疗**：ClinFusion、KANEx、ESRVS 均强调以异构医学影像为锚点，文本/结构化数据作为辅助，评测协议亦转向临床工作流对齐。  
3. **长上下文工程化进入“页/块级局部低秩”精细化阶段**：LOCKS、PIVOT、Eviction as Estimation 从全局稀疏转向页级/查询分组/固定滞后平滑等细粒度 KV 管理，推理成本随上下文呈亚线性增长。  
4. **可信 AI 从“事后解释”转向“过程审计与契约”**：Reason-Mediated Audit、Typed Revision Contracts、Agentic Permissions Policy Algebra 均在推理/执行过程中植入可验证约束，而非仅事后生成解释。  
5. **极低资源监督（1-shot/0-shot）成为医学分割新基线**：ESRVS 单图监督、BettiSplit 隐私感知分割、KANEx 符号化解释，标志着医学 AI 从“大数据”向“小数据+强先验”范式跃迁。

---

## 💎 值得精读（Top 3）

| 论文 | 理由 |
|------|------|
| **[The Physics of Multi-Turn Long-Horizon Planning…](http://arxiv.org/abs/2607.24720v1)** | 首个将长程规划能力显式建模为“物理量”并给出预训练→后训练迁移理论与算法的工作，统一了 diffusion/RL/agentic distillation 视角，对智能体架构设计具有指导性。 |
| **[Rethinking Classifier-Free Guidance in On-Policy Diffusion Distillation](http://arxiv.org/abs/2607.24731v1)** | 深度解构 CFG 在蒸馏中的失效机制，提出的 CFG-aware OPD 即插即用且理论扎实，是当前少步扩散模型落地的关键技术阻力点。 |
| **[ClinFusion: A Vision-Centric Multimodal LLM System…](http://arxiv.org/abs/2607.24743v1)** | 系统性构建了从异构影像编码、跨模态对齐、临床任务统一到评测协议的完整医疗 MLLM 范式，代码/数据/基准开源，可直接作为医疗多模态研究的基础设施参考。 |

---

*所有链接均指向 ArXiv 原始摘要页面，建议配合 PDF 深度阅读。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*