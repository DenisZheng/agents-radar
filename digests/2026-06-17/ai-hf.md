# Hugging Face 热门模型日报 2026-06-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-17 00:44 UTC

---

# Hugging Face 热门模型日报 · 2026-06-17

---

## 📌 今日速览

本周 Hugging Face 热门榜呈现出**多模态与量化模型双轮驱动**的格局。Google Gemma 4 系列持续霸榜，衍生出大量社区量化版本；DeepSeek-V4-Pro 以近 5,000 点赞和 280 万下载成为绝对焦点。Qwen 3.6 系列（35B-A3B）同样表现亮眼，下载量突破 336 万次。与此同时，图像生成（Ideogram 4）、语音合成（Higgs Audio V3）和 ASR（NVIDIA Nemotron）等专用模型也在快速崛起，反映出社区对**垂直领域高质量开源模型**的旺盛需求。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|------|------|----------|-----------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,896 / 2,829,747 | 本周榜王，DeepSeek 最新旗舰推理模型，下载量近 283 万，社区热度空前。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,135 / 3,360,615 | 阿里 Qwen 3.6 系列 MoE 架构旗舰，336 万下载，多模态能力全面。 |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 1,053 / 1,223,383 | Google Gemma 4 统一多模态模型，支持 any-to-any，122 万下载。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 296 / 0 | 智谱 GLM-5.2 MoE 对话模型，刚上线尚未开放下载，但已引发关注。 |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 308 / 4,957 | Nex AI 基于 Qwen3.5 MoE 的对话模型，定位高性能推理。 |
| [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini) | nex-agi | 227 / 9,161 | Nex-N2 的轻量版，适合边缘部署。 |
| [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 160 / 192 | 微软 4B 长上下文微调模型，专为 Explorer SubAgent 场景设计。 |
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 172 / 0 | 微博出品的 3B 数学推理模型，基于 Qwen2。 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 412 / 12,129 | Cohere 的代码生成小模型，MoE 架构，定位高效编码辅助。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|------|------|----------|-----------|
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 944 / 375,974 | Google 扩散式 Gemma 多模态模型，图文双向生成，37 万下载。 |
| [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,011 / 25,064 | MiniMax 多模态 MoE 模型，图文理解与生成一体。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 800 / 102,206 | 月之暗面 Kimi 代码多模态版，10 万下载，编码场景表现突出。 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,101 / 98,698 | NVIDIA 3B 视觉定位模型，点赞榜第二，图像特征提取利器。 |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 559 / 12,466 | Ideogram 4 FP8 量化版图像生成模型，高质量文生图。 |
| [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 205 / 0 | 智谱 SCAIL-2 姿态驱动视频生成模型，角色动画方向。 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 464 / 43,331 | Boson AI 4B TTS 模型，基于 Qwen3 多模态架构，语音合成质量优秀。 |
| [Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2) | Zyphra | 99 / 539 | Zyphra ZONOS2 语音合成模型，Apache 2.0 协议，社区友好。 |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 468 / 5,777 | NVIDIA 0.6B 流式 ASR 模型，支持缓存感知，适合实时语音识别。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|------|------|----------|-----------|
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 800 / 102,206 | 专为代码场景优化的多模态模型，编码与推理兼顾。 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 412 / 12,129 | Cohere 代码小模型，MoE 架构高效编码。 |
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 172 / 0 | 数学推理专用 3B 模型，适合教育与研究场景。 |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 468 / 5,777 | 流式语音识别专用模型，低延迟实时转录。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|------|------|----------|-----------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,887 / 2,716,651 | Qwen 3.6 35B 的"去审查"微调版，下载量高达 271 万，本周下载王。 |
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 633 / 1,009,602 | Unsloth 量化的 Gemma 4 12B，超 100 万下载，本地部署首选。 |
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 1,160 / 60,921 | Gemma 4 12B 的代码微调量化版，点赞榜第一。 |
| [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth | 287 / 120,435 | Unsloth 量化的 Diffusion Gemma 26B，多模态本地推理。 |
| [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 370 / 366,279 | Qwen 3.6 40B 的"缝合"微调量化版，融合多个数据集，36 万下载。 |
| [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Jackrong | 218 / 79,157 | Qwen 3.6 27B 代码版 MTP 量化，支持 llama.cpp。 |
| [unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF) | unsloth | 119 / 16,817 | Unsloth 量化的 Kimi K2.7 Code，本地编码助手。 |
| [unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF) | unsloth | 92 / 18,206 | Unsloth 量化的 MiniMax M3，轻量多模态本地部署。 |
| [unsloth/North-Mini-Code-1.0-GGUF](https://huggingface.co/unsloth/North-Mini-Code-1.0-GGUF) | unsloth | 78 / 26,313 | Unsloth 量化的 Cohere North Mini Code，高效本地编码。 |
| [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 335 / 76,044 | Gemma 4 12B 的"去审查"微调版，社区争议性模型。 |

---

## 🌐 生态信号

本周榜单清晰呈现三大趋势：

**1. Gemma 4 家族全面爆发。** Google Gemma 4 系列（12B/26B）成为社区量化与微调的核心底座，衍生出超过 6 个热门变体（GGUF 量化、代码微调、去审查版等），总下载量超过 300 万次。Unsloth 作为量化生态的关键玩家，几乎覆盖了所有主流模型的 GGUF 版本。

**2. MoE 架构主导新模型。** Qwen 3.6、DeepSeek V4、GLM 5.2、MiniMax M3、Cohere North Mini 等均采用 MoE 架构，标志着稀疏激活模型已成为开源社区的主流选择。

**3. "去审查"微调持续走热。** Qwen 3.6 和 Gemma 4 的 uncensored 版本合计下载量超过 280 万次，反映出社区对开放权重模型的强烈需求，同时也引发关于模型安全与责任的讨论。

---

## ⭐ 值得探索

### 1. [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**理由：** 本周绝对焦点，4,896 点赞 + 283 万下载。作为 DeepSeek 最新旗舰，其推理能力和对话质量值得亲自评测，也是了解 2026 年开源 LLM 天花板水平的最佳样本。

### 2. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**理由：** 点赞榜第二（2,101），NVIDIA 出品仅 3B 参数却专注于视觉定位任务。对于需要图像理解、目标定位的开发者来说，这是一个高效且部署友好的选择。

### 3. [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)
**理由：** FP8 量化的高质量文生图模型，在保持生成质量的同时大幅降低显存需求。对于希望在消费级 GPU 上运行图像生成的用户，这是一个值得尝试的平衡点。

---

*数据来源：Hugging Face Hub · 统计周期：周榜 · 生成时间：2026-06-17*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*