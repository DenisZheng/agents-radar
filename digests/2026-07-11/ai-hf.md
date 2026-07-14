# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 01:28 UTC

---

好的，收到数据。作为AI模型生态分析师，以下是基于2026年7月11日Hugging Face热门模型数据生成的日报。

---

## Hugging Face 热门模型日报 (2026-07-11)

### 今日速览

本周Hugging Face生态呈现三大热点：**Qwen 3.6 系列模型**持续发力，成为社区微调与量化的首选基座，催生了大量高下载量变体；**NVIDIA** 与 **DeepSeek** 两大巨头同台竞技，分别推出基于MoE架构的巨型模型与高效量化版本，争夺高性能计算阵地；同时，“推理能力”与“目标定位”成为本周爆款标签，**Qwythos** 和 **nvidia/LocateAnything** 分别证明了社区对模型思考能力与专用视觉任务的浓厚兴趣。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** (zai-org, 3,785 赞, 392k 下载)
  - 基于GLM架构的最新版本，采用了MoE-DSA技术，以高点赞数成为本周社区关注的焦点对话模型。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (HauhauCS, 2,623 赞, 2.66M 下载)
  - 基于Qwen 3.6的无审查、激进风格微调版，因其独特的个性化和极高下载量，成为社区热门二次创作模型。
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** (deepreinforce-ai, 835 赞, 1.08M 下载)
  - 一个35B参数的通用文本生成模型，因其高质量的GGUF量化版本而广受欢迎，完美适配llama.cpp本地运行。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** (empero-ai, 761 赞, 184k 下载)
  - 融合了 “Claude Mythos” 数据集的推理增强模型，专注于强化思考与逻辑能力，是Qwythos系列的原型。
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** (deepseek-ai, 463 赞, 33k 下载)
  - DeepSeek-V4的Pro版本，集成了DSpark技术，代表了顶级闭源能力的开源化尝试，标志着MoE大模型的新高度。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** (nvidia, 2,700 赞, 1.45M 下载)
  - 一个3B参数的目标定位基础模型，能够根据文本指令在图像中定位任何物体，是本周最亮眼的多模态专用模型。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** (baidu, 1,921 赞, 1.31M 下载)
  - 百度推出的全能OCR模型，支持多种场景下的文字识别，体现了大模型在传统CV任务上的能力溢出。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** (empero-ai, 1,976 赞, 1.9M 下载)
  - 上一条Qwythos模型的GGUF量化版，因其高效的推理性能，下载量远超原版，是本地部署推理模型的首选。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** (krea, 575 赞, 164k 下载)
  - Krea公司推出的新一代文生图模型Turbo版，主打快速生成与高质量，代表了图像生成模型的进化方向。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** (OpenMOSS-Team, 98 赞, 5.9k 下载)
  - 专注音频转文字与说话人分离（Diarization）的专用模型，填补了音频理解领域的空白。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** (google, 345 赞, 18k 下载)
  - 谷歌推出的表格数据基础模型（TabFM），支持零样本分类与回归，为结构化数据任务提供了通用的基座。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** (InternScience, 470 赞, 25k 下载)
  - 专为Agent任务设计的MoE模型，基于Qwen 3.5架构优化，旨在提升AI智能体的工具调用与任务规划能力。
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** (yuxinlu1, 1,134 赞, 427k 下载)
  - 基于Gemma 4的“Agentic”微调版本，并通过GGUF量化，专为终端编程和代理任务优化，下载量可观。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** (unsloth, 1,036 赞, 2.89M 下载)
  - **本周下载量冠军**。Unsloth团队对最新Qwen 3.6模型进行的GGUF量化，完美适配本地推理，证明了社区对“强模型+高效量化”组合的强烈需求。
- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** (nvidia, 336 赞, 787k 下载)
  - NVIDIA在其新硬件上对Qwen 3.6进行的4-bit浮点（NVFP4）量化版，代表了硬件与模型协同优化的发展趋势。
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** (unsloth, 124 赞, 31k 下载)
  - Unsloth提供的DeepSeek V4 Flash模型的GGUF量化版，使社区能更容易地在消费级硬件上运行顶级MoE模型。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** (froggeric, 836 赞, 0 下载)
  - 一个特殊仓库，专门修正Qwen模型的对话模板（Chat Template），下载量为0但点赞极高，反应了社区对标准化推理工具的渴求。

### 生态信号

本周生态趋势明显：

1.  **Qwen 3.6 生态统治力**：由阿里巴巴开源的 **Qwen 3.6** 已成为社区事实上的“操作系统”。从NVIDIA的硬件量化（NVFP4）到Unsloth的通用量化（GGUF），再到各种风格微调（无审查、Agent、推理加强），几乎所有热门活动都围绕其展开。
2.  **MoE架构**：**混合专家模型** 全面开花。**DeepSeek V4**、**GLM-5.2**、**NVIDIA Nemotron** 以及众多社区微调模型均采用MoE，在保持高性能的同时通过稀疏激活降低成本，证明了该架构是未来大模型发展的主流。
3.  **“推理优先”成为社区共识**：以 **Qwythos** 系列为代表，社区不再满足于“能说话”的模型，而是高度追捧在数学、代码、逻辑等需要深度“思考”（Thinking/Reasoning）的模型变体。这与行业对AI agent性能的要求一脉相承。
4.  **闭源模型权重的“社区化”**：虽然DeepSeek、NVIDIA等发布了强大的模型，但使其真正流行的是 **Unsloth** 等社区团队提供的量化服务。这种“开源发布+社区量化”的模式，极大地降低了顶级模型的准入门槛，是开源生态繁荣的关键。

### 值得探索

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: 如果你想研究视觉定位或通用视觉Agent，这是本周最值得下载的模型。它以一个相对小的3B参数，实现了很高的定位精度，技术报告值得深挖。
2.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: 作为国内顶级对话模型的代表，GLM-5.2在中文对话任务上具有独特优势。其采用的MoE-DSA技术是稀疏模型优化的重要方向，建议与DeepSeek V4进行横向对比研究。
3.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**: 对于关注“小模型大能力”和“推理增强”的研究者，这个9B模型非常有趣。它证明了通过高质量数据蒸馏和微调，即使是中等参数规模的模型也能展现出卓越的思考能力。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*