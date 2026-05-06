# Hugging Face 热门模型日报 2026-04-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-18 00:23 UTC

---

好的，作为 AI 模型生态分析师，为您生成一份结构清晰、内容专业的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报（2026-04-18）**

**今日速览**

本周 Hugging Face 的热门模型榜单呈现出几个显著趋势。首先，Google 的 Gemma 4 系列（尤其是 Gemma-4-E4B-it）以压倒性下载量和点赞数占据主导地位，显示出其在多模态领域的强大影响力。其次，Qwen 和 MiniMax 等公司的 MoE（混合专家）架构模型也表现强劲，表明高效能推理仍是社区关注的焦点。此外，社区围绕 GGUF 和 MLX 的量化与微调活动非常活跃，为在消费级硬件上部署大模型提供了更多可能。

---

### **热门模型**

#### **🧠 语言模型（LLM、对话模型、指令微调）**

*   **zai-org/GLM-5.1**
    *   [链接](https://huggingface.co/zai-org/GLM-5.1)
    *   作者: zai-org | 点赞: 1,381 | 下载: 100,019
    *   一句话说明：智谱 AI 的 GLM-5.1 MoE 模型，凭借其强大的性能和开源权重，成为本周最受欢迎的 LLM。

*   **MiniMaxAI/MiniMax-M2.7**
    *   [链接](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)
    *   作者: MiniMaxAI | 点赞: 924 | 下载: 188,737
    *   一句话说明：MiniMax 推出的 MiniMax-M2.7 文本生成模型，因其出色的性能而广受欢迎。

#### **🎨 多模态与生成（图像、视频、音频、文本到X）**

*   **google/gemma-4-31B-it**
    *   [链接](https://huggingface.co/google/gemma-4-31B-it)
    *   作者: google | 点赞: 2,122 | 下载: 3,513,465
    *   一句话说明：Google 的 Gemma 4 31B 参数视觉语言模型，是本周下载量最高的多模态模型，展现了 Google 在多模态领域的领先地位。

*   **Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled**
    *   [链接](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)
    *   作者: Jackrong | 点赞: 2,723 | 下载: 579,463
    *   一句话说明：基于 Qwen3.5 蒸馏并融合 Claude 4 Opus 推理能力的超强多模态模型，专为复杂推理任务设计。

*   **tencent/HY-Embodied-0.5**
    *   [链接](https://huggingface.co/tencent/HY-Embodied-0.5)
    *   作者: tencent | 点赞: 852 | 下载: 1,287
    *   一句话说明：腾讯混元推出的 embodied 模型 HY-Embodied-0.5，专注于具身智能领域，是前沿探索的重要一步。

*   **baidu/ERNIE-Image**
    *   [链接](https://huggingface.co/baidu/ERNIE-Image)
    *   作者: baidu | 点赞: 422 | 下载: 2,254
    *   一句话说明：百度 ERNIE Image 模型，一个 8B 参数的文本到图像生成模型，支持 Apache 2.0 许可证。

#### **🔧 专用模型（代码、数学、医疗、嵌入）**

*   **k2-fsa/OmniVoice**
    *   [链接](https://huggingface.co/k2-fsa/OmniVoice)
    *   作者: k2-fsa | 点赞: 629 | 下载: 847,404
    *   一句话说明：OmniVoice 是一个强大的语音克隆和多语言 TTS 模型，支持零样本学习，在音频生成领域具有极高价值。

*   **openbmb/VoxCPM2**
    *   [链接](https://huggingface.co/openbmb/VoxCPM2)
    *   作者: openbmb | 点赞: 1,095 | 下载: 18,089
    *   一句话说明：智源 BAAI 的 VoxCPM2，是一款专注于多语言语音合成的 TTS 模型，展示了国内在语音技术上的实力。

#### **📦 微调与量化（社区微调、GGUF、AWQ）**

*   **dealignai/Gemma-4-31B-JANG_4M-CRACK**
    *   [链接](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)
    *   作者: dealignai | 点赞: 1,257 | 下载: 152,762
    *   一句话说明：对 Google Gemma-4-31B-it 进行 abliterated 和 uncensored 处理的 MLX 版本，适合苹果 Silicon 设备。

*   **unsloth/Qwen3.6-35B-A3B-GGUF**
    *   [链接](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)
    *   作者: unsloth | 点赞: 364 | 下载: 153,019
    *   一句话说明：Unsloth 提供的 Qwen3.6-35B-A3B 模型的 GGUF 格式版本，方便在本地运行。

---

### **生态信号**

从本周榜单可以看出，**Gemma 4** 家族无疑是最大的赢家，其多个变体（包括不同大小、不同任务类型）都获得了极高的关注度，这反映了 Google 在多模态和通用模型领域持续投入带来的巨大影响力。**MoE（混合专家）架构**仍然是实现高性能推理的关键路径，Qwen 和 MiniMax 的 MoE 模型表现抢眼。开源权重方面，Google 的 Gemma 4 系列以及社区对闭源模型的“破解”和微调（如 uncensored 版本）都显示出开源与闭源之间的复杂互动。在量化与微调活动上，**GGUF** 和 **MLX** 格式依然是社区最活跃的领域，大量模型被转换为这些格式，极大降低了大模型在消费级硬件上部署的门槛，使得更多人可以参与到模型的本地化和个性化定制中来。

---

### **值得探索**

1.  **Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled**：这是一个极具潜力的模型，它融合了 Qwen3.5 的强大基础能力和 Claude 4 Opus 的高级推理技巧。对于追求极致复杂问题解决能力的应用场景，这是一个不容错过的选择。
2.  **dealignai/Gemma-4-31B-JANG_4M-CRACK**：该模型针对苹果 Silicon 进行了优化，并移除了内容审查机制。如果你希望在个人 Mac 上进行创意性或不受限制的内容生成，它是一个很好的尝试对象，能够让你体验到接近 Gemma 4 31B 级别的性能。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*