# Hugging Face 热门模型日报 2026-07-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-04 01:50 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026年7月4日数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年7月4日**

#### **今日速览**

本周Hugging Face生态呈现出三大显著特征：**大规模MoE模型**与**GGUF量化社区微调**形成了极强热潮，Qwen、GLM等系列衍生出大量变体；**多模态能力**成为模型标配，不仅体现在原生多模态模型上，甚至部分“文本生成”模型也因具备图像理解能力而获得高下载；此外，以`nvidia/LocateAnything-3B`为代表的**专用视觉定位模型**意外走红，成为下载与点赞的双料冠军，反映了市场对精准、即用型工具的强烈需求。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 3,344 | ⬇️ 191,462
  - **说明**：智谱AI的最新开源MoE模型，在本周榜单中点赞数最高，代表了社区对国产顶级开源语言模型的高度认可与关注。
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | 作者: deepseek-ai | 👍 343 | ⬇️ 9,388
  - **说明**：DeepSeek V4系列的增强版，配合了论文发表，虽下载量不高，但作为前沿技术标杆备受业界关注。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,589 | ⬇️ 1,108,586
  - **说明**：英伟达推出的3B级视觉定位模型，因其实用性强、即插即用，成为本周最受欢迎的模型之一，点赞与下载双高。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 1,692 | ⬇️ 885,040
  - **说明**：百度开源的无限类别OCR模型，以其卓越的通用文字识别能力和庞大的用户基数，持续保持超高热度。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | 作者: krea | 👍 481 | ⬇️ 84,006
  - **说明**：Krea推出的第二代图像生成加速版，在生图质量和推理速度之间找到了平衡点，是文生图领域的明星项目。
- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | 作者: fal | 👍 150 | ⬇️ 0
  - **说明**：面向LTX-2.3的3D写实风格LoRA，虽然下载量为零（通常为发布首日），但作为生成式AI在3D领域的探索，潜力巨大。

##### 🔧 专用模型（代码、医疗、数学、嵌入）

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | 作者: yuxinlu1 | 👍 2,585 | ⬇️ 628,225
  - **说明**：基于Gemma-4微调的专业代码模型，在本地部署（GGUF版本）下拥有极高人气，反映了开发者对代码助手强需求。
- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** | 作者: nationaldesignstudio | 👍 115 | ⬇️ 1,149
  - **说明**：一个专注PII（个人身份信息）识别的专用模型，通过ONNX优化支持浏览器端运行，在数据安全领域具有独特价值。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 1,372 | ⬇️ 1,366,360
  - **说明**：基于Qwen3.5的社区微调模型，并提供了GGUF量化版，下载量超百万，是社区微调与量化生态繁荣的缩影。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,433 | ⬇️ 3,029,679
  - **说明**：本周下载量冠军！基于Qwen3.6的“无审查”MoE模型，配合GGUF量化，凭借激进风格和极高效率吸引了海量下载。
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | 作者: yuxinlu1 | 👍 992 | ⬇️ 329,391
  - **说明**：同样是社区对Gemma-4的深度微调，定位为“智能体”模型，GGUF版本广受本地部署用户欢迎。
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 作者: deepreinforce-ai | 👍 684 | ⬇️ 322,780
  - **说明**：35B级大模型的量化版本，来自新晋团队deepreinforce，其Ornith系列（9B、35B、397B）全线开花，表明用户对大模型从消费到部署的完整链条需求旺盛。

---

#### **生态信号**

*   **Qwen & GLM生态争霸，MoE架构统治趋势**：榜单中超过一半的模型直接或间接基于`Qwen3.5`或`Qwen3.6`系列，其灵活的MoE架构让社区能够围绕其进行`A3B`、`35B`等多种配置的微调。同时，智谱的`GLM-5.2`系列也形成了独立的微调生态（如`nvidia/GLM-5.2-NVFP4`，`huihui-ai/Huihui-GLM-5.2-abliterated-GGUF`）。两大阵营的开源策略极大促进了社区活力。
*   **开源权重与量化模型成绝对主流**：榜单前10名中，几乎看不到闭源模型链接。相反，**GGUF**格式模型的下载量动辄百万，远超原生权重的下载量。这表明**边缘部署、本地消费**已成为实际应用的主流模式，`unsloth`、`huihui-ai`等量化专家成为生态关键节点。
*   **“微调胜于预训练”趋势强化**：社区的主要创新点不再是基础架构，而是在现有强基座模型（如Qwen、Gemma）上进行面向特定场景的微调（如代码、智能体、无审查）。`deepreinforce-ai`、`yuxinlu1`等社区团队通过提供一系列从大到小、从原始到GGUF的“全家桶”，精准满足了用户对即用型模型的需求。

---

#### **值得探索**

1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：**周下载量之王**。如果你对模型输出风格有较高要求，或需要探索无审查场景下的AI潜力，这个模型是研究MoE模型在极端优化下的性能表现与社区行为的最佳样本。
2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：**周点赞数与下载量双高**。它为计算机视觉领域提供了一个清晰、易用的专用模型标杆。对于需要在自动化标注、机器人导航等下游任务中集成“指哪看哪”功能的开发者，此模型是首选。
3.  **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**：**新势力的极限探索**。400B+级别的MoE模型开源实属罕见，尽管下载量尚小，但它代表了社区在追求强能力极限上的最新尝试。对于有强算力且希望测试超大规模模型性能的研究者，值得一试。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*