# Hugging Face 热门模型日报 2026-04-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-20 00:25 UTC

---

好的，作为 AI 模型生态分析师，这是为您生成的《Hugging Face 热门模型日报》（2026-04-20）。

---

### **今日速览**

本周 Hugging Face Hub 上最值得关注的趋势是：Google 的 Gemma 4 系列模型持续发力，在点赞数和下载量上均表现抢眼；Qwen 3.6 MoE 模型也获得了极高关注，其开源社区版本和量化版本（GGUF）尤为活跃。多模态能力正在成为大模型的标配，图像、文本、音频和视频生成模型齐头并进。此外，社区对“去限制化”（Uncensored/Abliterated）模型的兴趣不减，同时，像 NVIDIA Lyra 和 Netflix void-model 这样的专用模型也为 AI 应用开辟了新的前沿领域。

---

### **热门模型**

#### **🧠 语言模型（LLM、对话模型、指令微调）**

*   **google/gemma-4-31B-it** (https://huggingface.co/google/gemma-4-31B-it)
    *   **作者:** google | **点赞:** 2,185 | **下载:** 4,003,761
    *   一句话说明：作为 Google 最新的旗舰 Gemma 4 模型，它拥有强大的图像理解与对话能力，是当前最受欢迎的多模态 LLM。
*   **zai-org/GLM-5.1** (https://huggingface.co/zai-org/GLM-5.1)
    *   **作者:** zai-org | **点赞:** 1,417 | **下载:** 112,939
    *   一句话说明：智谱最新发布的 GLM-5.1 模型，基于其创新的 DSA 架构，在文本生成和对话任务中展现出卓越性能。
*   **MiniMaxAI/MiniMax-M2.7** (https://huggingface.co/MiniMaxAI/MiniMax-M2.7)
    *   **作者:** MiniMaxAI | **点赞:** 982 | **下载:** 288,848
    *   一句话说明：Minimax 的 M2.7 模型专为对话设计，凭借其强大的推理和交互能力，迅速登顶本周点赞榜。

#### **🎨 多模态与生成（图像、视频、音频、文本到X）**

*   **Qwen/Qwen3.6-35B-A3B** (https://huggingface.co/Qwen/Qwen3.6-35B-A3B)
    *   **作者:** Qwen | **点赞:** 930 | **下载:** 209,112
    *   一句话说明：Qwen 最新推出的 Qwen3.6-35B-A3B 是一款功能强大的视觉语言模型，能够处理复杂的图像与文本交互任务。
*   **google/gemma-4-E4B-it** (https://huggingface.co/google/gemma-4-E4B-it)
    *   **作者:** google | **点赞:** 755 | **下载:** 2,264,052
       *   一句话说明：Gemma 4 系列中参数量更大的版本，支持任意模态输入到文本输出，展现了 Google 在多模态领域的雄心。
*   **openbmb/VoxCPM2** (https://huggingface.co/openbmb/VoxCPM2)
    *   **作者:** openbmb | **点赞:** 1,162 | **下载:** 51,554
    *   一句话说明：一款专注于高质量文本转语音（TTS）的开源多语种模型，其强大的音色克隆和零样本学习能力令人瞩目。
*   **netflix/void-model** (https://huggingface.co/netflix/void-model)
    *   **作者:** netflix | **点赞:** 874 | **下载:** 0
    *   一句话说明：Netflix 推出的视频编辑专用模型，擅长视频修复、擦除和编辑，为影视后期制作带来了新的可能性。

#### **🔧 专用模型（代码、数学、医疗、嵌入）**

*   **nvidia/Lyra-2.0** (https://huggingface.co/nvidia/Lyra-2.0)
    *   **作者:** nvidia | **点赞:** 225 | **下载:** 132
    *   一句话说明：NVIDIA 发布的 Lyra-2.0，专为语音识别和转录设计，代表了公司在专业音频处理领域的最新进展。

#### **📦 微调与量化（社区微调、GGUF、AWQ）**

*   **unsloth/Qwen3.6-35B-A3B-GGUF** (https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)
    *   **作者:** unsloth | **点赞:** 506 | **下载:** 662,293
    *   一句话说明：社区将 Qwen3.6-35B-A3B 模型转换为 GGUF 格式，极大提升了其在消费级硬件上的运行效率。
*   **OBLITERATUS/gemma-4-E4B-it-OBLITERATED** (https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)
    *   **作者:** OBLITERATUS | **点赞:** 346 | **下载:** 37,130
    *   一句话说明：通过 Abliterated 技术去除内容审查限制的 Gemma 4 模型，满足了特定用户对完全自由生成内容的需求。

---

### **生态信号**

从本周的数据可以看出，Gemma 4 和 Qwen 3.6 是绝对的明星家族，它们不仅在官方发布时获得极高关注，其社区衍生版本（如 GGUF、MLX、Uncensored）也异常活跃，显示出强大的生命力。多模态能力已成为大模型发展的核心方向，几乎所有头部模型都集成了视觉处理能力。社区对模型量化（GGUF, MLX）和去限制化（Abliterated）的热情依然高涨，表明用户对于降低部署成本、突破内容限制有强烈的需求。此外，像 VoxCPM2、Lyra-2.0 和 void-model 这类专用模型的出现，预示着 AI 正在向更垂直、更专业的应用领域深耕。

---

### **值得探索**

1.  **google/gemma-4-31B-it (https://huggingface.co/google/gemma-4-31B-it)**：作为 Gemma 4 系列的标杆，它不仅拥有顶尖的视觉语言理解能力，且下载量惊人，是体验 Google 最新多模态 AI 技术的首选。
2.  **openbmb/VoxCPM2 (https://huggingface.co/openbmb/VoxCPM2)**：如果你对高质量的文本转语音和多语种音色克隆感兴趣，这款模型提供了开源、强大的解决方案，远超许多闭源商业产品。
3.  **netflix/void-model (https://huggingface.co/netflix/void-model)**：尽管尚未开放下载，但其强大的视频编辑和修复能力预示着未来视频内容创作的新范式，非常值得关注其技术细节和应用前景。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*