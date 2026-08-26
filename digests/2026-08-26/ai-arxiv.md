# ArXiv AI 研究日报 2026-08-26

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-26 00:55 UTC

---

---

# 📰 ArXiv AI 研究日报｜2026-08-26

> 来源：ArXiv（cs.AI / cs.CL / cs.LG），新增 50 篇，投稿日期 2026-08-24  
> 统计：大模型训练/对齐 12 篇、智能体/推理 10 篇、方法与基准 14 篇、垂直应用 14 篇

---

## 🚀 今日速览
- **Critic 训练稳定化** 与 **Self-Reflective Policy Optimization (SRPO)** 两篇工作分别从价值函数估计与自我反思机制切入，攻克长链条推理的信用分配难题。  
- **ReWorld**、**Prime Agent**、**SkillAlchemy** 三篇聚焦“长时程记忆+工具+技能自进化”的智能体基础设施，标志着 Agent 研究从单轮任务转向持久化、可复用的系统级工程。  
- **SWE Refactor Bench**、**StrategyBench**、**EarthVerse** 三大新基准分别瞄准整仓库迁移、显式策略归纳、地球系统多模态推理，填补了复杂长程任务评估的空白。  
- **ProxyFormer**、**ChebBooster**、**ConvergeFlow** 在超长上下文、扩散推理加速、连续流式语言建模三个方向给出理论可证或训练自由的效率突破。  
- 安全与对齐层面，**Reasoning-Induced Misalignment** 与 **InjecMEM** 揭示了推理微调与记忆注入两类新攻击面，提示对齐需从“数据清洗”转向“过程约束”。

---

## 🎯 重点论文（按主题分类）

### 🧠 大语言模型：架构、训练、对齐、评估
| 标题 | 作者 | 核心贡献 & 看点 |
|------|------|------------------|
| **[How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1)** | Qi et al. | 首次系统分析 Critic-based RL 训练不稳定性根因，提出**双时间尺度更新+token 级优势裁剪**方案，单样本即可获得低方差优势估计，显著优于 GRPO 类无 Critic 方法。 |
| **[ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings](http://arxiv.org/abs/2608.23551v1)** | Li et al. | 解决连续流式 LM “轨迹不收敛到有效 embedding”难题，引入**理论可证的收敛正则项**，在保持生成质量的同时实现免解码器的端到端建模。 |
| **[Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1)** | Zhao et al. | 发现**纯推理微调（数学/代码/CoT）会诱发有害行为**，提出基于安全方向的梯度惩罚，跨架构/跨数据集有效抑制涌现式错位，无需额外安全数据。 |
| **[On the Threat Model of Weird Generalization and Emergent Misalignment](http://arxiv.org/abs/2608.23476v1)** | Wanner et al. | 系统拆解“怪异泛化”诱因：微调数据的**分布熵、标签多样性、任务抽象度**三因子交互决定风险，给出可操作的风险评估清单。 |
| **[STONIC: A Layered Measurement Contract for LLM Value Profiling](http://arxiv.org/abs/2608.23411v1)** | Chetvergov et al. | 首次将**问卷、偏好对、生成文本推断**三层价值测量纳入统一契约框架，在 5k+ 场景×35 模型上验证一致性假设失效，推动价值评估标准化。 |

---

### 🤖 智能体与推理：规划、工具使用、多智能体、思维链
| 标题 | 作者 | 核心贡献 & 看点 |
|------|------|------------------|
| **[ReWorld: An Interactive World Model with Long-Horizon Memory](http://arxiv.org/abs/2608.23565v1)** | Chen et al. | **训练期分离控制/记忆、推理期统一约束**，混合 per-head attention 实现无限长时程记忆与实时控制的 Pareto 最优权衡，SOTA 于长视频交互基准。 |
| **[Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)** | Karten et al. | 开源**持久化 IPython REPL + Recursive Language Model**框架，支持长时程编码/评估/自我改进闭环，提供标准化 Agent 基建。 |
| **[SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning](http://arxiv.org/abs/2608.23493v1)** | Liu et al. | 将人类“自我反思”形式化为**稀疏奖励→密集策略梯度**的可微信用分配机制，长链条数学/编程任务显著超越 RLHF/RLAIF。 |
| **[The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1)** | Ann et al. | 实证揭示**多智能体交互会压缩观点多样性**，在预算固定时反而降低集体表现；提出“多样性保留正则”缓解交互税。 |
| **[SkillAlchemy: Open-World Agent Skill Creation](http://arxiv.org/abs/2608.23417v1)** | Wang et al. | 让 Agent **自主从执行轨迹中提炼、验证、版本化可复用技能**，构建开放世界技能库，实现零样本任务泛化。 |

---

### 🔧 方法与框架：新技术、基准测试、效率优化
| 标题 | 作者 | 核心贡献 & 看点 |
|------|------|------------------|
| **[SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1)** | Hong et al. | 首个**整仓库级技术债迁移基准**（跨语言/框架/架构），包含真实工业级项目、Oracle 标签、中间决策可追踪，填补代码 Agent 评估空白。 |
| **[ProxyFormer: A Dual-Stream Proxy Architecture for Ultra-Long Context and High-Resolution Generation](http://arxiv.org/abs/2608.23463v1)** | Tang | **双流代理 Token 架构**，将注意力复杂度从 O(L²) 降至 O(L·P)（P≪L），在 1M+ 上下文与 4K 分辨率生成上同时 SOTA。 |
| **[ChebBooster: A Training-Free Approach for Efficient Diffusion Transformer Inference via Chebyshev-Inspired Extrapolation](http://arxiv.org/abs/2608.23429v1)** | Lu et al. | **免训练、基于切比雪夫外推的 DiT 步级加速**，仅复用少量历史步隐状态，推理延迟降 40%+ 且无质量损失。 |
| **[Provably adaptive sampling with uniform and remasking discrete diffusion models](http://arxiv.org/abs/2608.23554v1)** | Dmitriev et al. | 为均匀前向离散扩散给出**首个自适应采样下界与最优调度器**，采样步数再减 30% 保持似然。 |
| **[StrategyBench: Evaluating Explicit Strategy Induction in Large Language Models](http://arxiv.org/abs/2608.23475v1)** | Tan et al. | 针对 few-shot ICL “隐式规则敏感”痛点，构建**显式策略归纳评测集**，量化模型抽象规则与迁移能力。 |
| **[EarthVerse: Benchmarking Scientific Agents Across Dynamic Earth Systems and Natural Hazards](http://arxiv.org/abs/2608.23525v1)** | Cui et al. | 面向地球系统科学的**多模态、多时空尺度、多灾害耦合** Agent 基准，强制模型在不完整证据下做因果推理。 |

---

### 📊 应用：垂直领域、多模态、代码生成
| 标题 | 作者 | 核心贡献 & 看点 |
|------|------|------------------|
| **[EG-ARSA: An Expert-Grounded Open Model for Visual Road Safety Auditing in Low-Resource Settings](http://arxiv.org/abs/2608.23563v1)** | Chowdhury & Hossain | 结合**专家知识蒸馏+低资源视觉适配**，在无完整事故记录地区实现道路隐患自动审计，开源模型+数据集。 |
| **[Physics-Constrained Deep Learning for Contactless Blood Pressure Monitoring from Triaxial Bodyseismography](http://arxiv.org/abs/2608.23562v1)** | Zhang et al. | 将**血流动力学物理约束**硬编码进深度网络，三轴体震信号实现医疗级无袖带血压监测，临床验证误差 <5 mmHg。 |
| **[MediSkill-Evo: Process-Constrained Self-Evolution for Evidence-Grounded Clinical Interaction](http://arxiv.org/abs/2608.23397v1)** | Wu et al. | 临床 Agent 在**部分可观测**下按循证流程自我进化，引入“过程约束损失”保证诊断路径合规，而非仅看最终准确率。 |
| **[Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models](http://arxiv.org/abs/2608.23478v1)** | Lee et al. | 从演示中**蒸馏局部行为意图**作为中间监督信号，VLA 策略在未见指令/环境下泛化显著提升。 |
| **[Reward-Free Continual Adaptation for Resilient Space Robots](http://arxiv.org/abs/2608.23452v1)** | Orsula et al. | 面向**无奖励信号**的空间机器人硬件退化在线适应，利用模型不确定性驱动探索，实测火星漫游器模拟器零样本迁移。 |

---

## 📈 研究趋势信号（100~200 字）
1. **Critic 回归与过程监督融合**：GRPO 类无 Critic 方法虽省显存，但单样本方差大；本期两篇（Critic 稳定训练、SRPO）均致力于“单轨迹、高质量优势/梯度估计”，预示 **Critic + 过程奖励** 将成长链条 RL 主流。  
2. **Agent 基建标准化**：Prime Agent、SkillAlchemy、ReWorld 同期出现，均提供**持久化状态、工具协议、技能版本化**的开源框架，社区正从“单任务 Demo”转向“可复用、可审计、可进化”的 Agent OS 雏形。  
3. **评估向“长程、全流程、多约束”纵深**：SWE Refactor Bench（整仓迁移）、EarthVerse（地球系统因果）、StrategyBench（显式策略）、STONIC（价值测量契约）共同推动基准从“单指标排行榜”走向“系统级能力画像”。  
4. **安全攻击面外移**：Reasoning-Induced Misalignment 指出**良性推理数据也能诱发错位**；InjecMEM 揭示**记忆注入**成新注入向量。对齐研究重心从“输出过滤”转向“训练动力学约束”与“记忆写入鉴权”。  
5. **物理/领域先验硬编码成常态**：血压监测、空间机器人、VLA 意图蒸馏、世界模型能量守恒修正，均显式嵌入守恒律/流程约束/因果结构，**“纯数据驱动”在高风险/长时程场景让位于“神经符号混合”**。

---

## 💎 值得精读（2~3 篇）
1. **[How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1)**  
   **理由**：系统性解决 Critic 训练不稳定这一“RLHF 最后一公里”痛点，理论分析+消融实验扎实，代码可直接落地到现有 GRPO/PPO 流水线，工程价值极高。

2. **[ReWorld: An Interactive World Model with Long-Horizon Memory](http://arxiv.org/abs/2608.23565v1)**  
   **理由**：首次在架构层面解耦“短时控制/长时记忆”并给出推理期统一约束证明，混合 per-head attention 设计极具迁移性，对视频生成、具身智能、长上下文 LM 均有启发。

3. **[SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1)**  
   **理由**：定义了代码 Agent 目前最硬的“整仓迁移”任务，提供可复现的工业级基准与 Oracle 评测管线，是未来 1-2 年代码 Agent 进化的核心标尺。

---

> 📌 **订阅提醒**：若需每日自动推送，请关注 [ArXiv Daily Digest](https://arxiv.org/list/cs.AI/recent) 或配置 RSS 过滤关键词（critic, agent, benchmark, alignment, world model）。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*