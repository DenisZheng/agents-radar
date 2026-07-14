# Hugging Face 热门模型日报 2026-06-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-29 00:27 UTC

---

好的，作为AI模型生态分析师，这是根据您提供的2026年6月29日数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-06-29**

#### **今日速览**

本周 Hugging Face 生态呈现“头部寡头化”与“尾部百花齐放”并存的局面。**GLM-5.2**、**Gemma-4** 及 **Qwen** 三大模型家族衍生出大量社区微调与量化变体，占据了绝对的主导地位。值得关注的是，**GLM-5.2** 的多个分支（官方、社区、NVIDIA优化版）同时冲入榜单，展现了国产MoE大模型的强大影响力。同时，以 **HauhauCS** 为代表的社区用户，通过“去审查(QAT)”和激进微调，撬动了巨大的下载量，反映了社区对高自由度模型的持续渴求。

---

#### **热门模型分类盘点**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** (zai-org, 👍2,815, ⬇️118k)
  - 本周焦点模型。智谱AI推出的新一代MoE大语言模型，凭借其强大的对话能力获得了社区高度认可。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (HauhauCS, 👍2,301, ⬇️3.2M)
  - 社区微调典范。基于Qwen3.6的激进去审查版本，以“无限制”为卖点，下载量惊人，反映了特定用户群体的强烈偏好。
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** (yuxinlu1, 👍2,471, ⬇️549k)
  - 代码领域最强。Google Gemma-4的社区微调版本，专注于代码生成与推理，与底层模型配合形成了强大的“智能体(agentic)”能力。
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** (WeiboAI, 👍743, ⬇️59k)
  - 小而美的数学专家。基于Qwen2的3B参数模型，专精于数学与逻辑推理任务，是榜单中少有的小体量高赞模型。
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** (microsoft, 👍369, ⬇️6k)
  - 微软探索性研究。基于Qwen3的4B模型，专注于“快速上下文(FastContext)”处理，可能代表了长上下文计算的新思路。
- **[deepreinforce-ai/Ornith-1.0-35B/9B/397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** (deepreinforce-ai, 👍200-400, ⬇️1k-80k)
  - “犀鸟”家族崛起。一个以Qwen3.5为基座的完整模型家族，从9B到397B全覆盖，旨在提供多尺寸的“端侧兼容”方案，市场策略明确。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** (nvidia, 👍2,434, ⬇️646k)
  - 视觉定位新贵。NVIDIA推出的“定位一切”模型，专注于图像特征提取与目标定位，在机器人、自动驾驶等领域潜力巨大。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** (krea, 👍353, ⬇️27k)
  - 图像生成速度王者。基于Krea-2-Raw的加速版，主打“Turbo”快速生成，迎合了创意工作者对效率的极致追求。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** (nvidia, 👍734, ⬇️67k)
  - 流式语音识别标杆。NVIDIA推出的轻量级流式ASR模型，为实时语音转写场景提供了高效解决方案。
- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** (fal, 👍93, ⬇️0)
  - 视频生成新方向。图像转视频的LoRA模型，专注于“3D真实感”，可能代表了视频生成从2D向3D控制的进化。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** (baidu, 👍1,229, ⬇️295k)
  - OCR的终极形态。百度推出的“无限制”OCR模型，支持海量字符识别，在文档数字化和信息提取场景具有统治力。
- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** (Chunjiang-Intelligence, 👍124, ⬇️1k)
  - 网络安全双刃剑。基于DeepSeek-v4的微调模型，标签为“cybersecurity”，可能用于安全漏洞分析或恶意代码生成。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** (yuxinlu1, 👍792, ⬇️225k)
  - 智能体模型的量化典范。将复杂的智能体工作流模型转化为GGUF格式，极大降低了本地化部署门槛。
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** (nvidia, 👍371, ⬇️5.2M)
  - **本周下载量冠军**。NVIDIA使用NVFP4精度量化Qwen3.6，在保持性能的同时大幅压缩模型体积，是高效推理的绝佳选择。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** (empero-ai, 👍793, ⬇️831k)
  - 社区创意蒸馏。从Claude等模型蒸馏出的“神话(Mythos)”系列，通过GGUF量化后广泛传播，是社区UGC生态的代表。

---

#### **生态信号**

1.  **“三足鼎立”格局形成**：本周榜单清晰地展示了 **Qwen**、**Gemma** 和 **GLM** 三大模型家族的主导地位。它们的原生模型、社区微调版、NVIDIA硬件优化版、甚至去审查版，共同占据了榜单的大部分席位。这标志着开源大模型已进入以少数几个“基座模型”为核心的生态聚合阶段。

2.  **开源权重 vs 闭源趋势**：榜单中几乎全部是开源模型。这表明，以Hugging Face为基地的开源社区依然充满活力，参数、权重和量化版本的开放分享是这个社区的核心价值观。值得注意的是，很多模型（如DeepSeek-v4）附带Arxiv论文链接，显示了“开源权重+学术开源”的良性闭环模式在持续深化。

3.  **量化与微调活动异常活跃**：GGUF格式持续霸榜，成为本地部署的标准格式。NVIDIA官方下场优化并发布Qwen/GLM的量化版本，标志着“硬件厂商直接参与模型优化分发”已成为新常态。同时，以**HauhauCS**为代表的激进微调（去审查、增加攻击性）模型下载量飙升，揭示了社区对“边界探索”和“极致个性化”的强烈需求，这股力量不可忽视。

---

#### **值得探索**

1.  **📌 [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**：作为本周下载量冠军，它是探索“高性能量化”与“主流MoE模型”结合的绝佳案例。如果您需要在一张消费级显卡上运行35B级别的MoE模型，这是首选方案。

2.  **📌 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：视觉AI的下一个热点极有可能是“精细化定位”。这个3B模型代表着一种趋势，即从“看图说话”转向“看图指物”，对于构建真正的智能机器人和视觉搜索系统至关重要。

3.  **📌 [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**：结合了顶级基座（Gemma-4）、特定领域微调（Coder）和便捷部署（GGUF）三个要素，是学习如何构建“本地化专用开发AI助手”的最佳实践。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*