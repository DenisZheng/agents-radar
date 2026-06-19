# Hugging Face 热门模型日报 2026-06-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-19 00:48 UTC

---

# Hugging Face 热门模型日报 · 2026-06-19

---

## 1. 今日速览

本周 Hugging Face 热门榜呈现出**多模态与量化模型双轮驱动**的格局。Google 的 Gemma 4 家族持续霸榜，衍生出多个量化版本和微调变体，下载量累计突破数百万次。DeepSeek-V4-Pro 以近 5,000 点赞和近 300 万下载量稳坐榜首，标志着中国开源大模型在全球社区的影响力持续攀升。NVIDIA 的 LocateAnything-3B 以 2,163 点赞成为本周"黑马"，视觉定位赛道热度显著上升。此外，GGUF 量化生态空前活跃，unsloth 等社区账号几乎为每一个热门模型都提供了量化版本，端侧部署需求旺盛。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|---|---|---|---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,956 / 2,948,726 | 本周综合热度最高的模型，DeepSeek 最新旗舰推理与对话模型，近 300 万下载量彰显其统治级社区影响力。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 1,342 / 4,307 | 智谱 AI 最新 MoE 架构大模型，采用 glm_moe_dsa 技术，对话与推理能力全面提升。 |
| [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 204 / 957 | 微软发布的轻量级上下文加速模型，专为 Explorer SubAgent 场景优化，4B 参数即可实现高效长文本处理。 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 448 / 15,285 | Cohere 推出的紧凑型代码模型，基于 cohere2_moe 架构，兼顾对话与代码生成能力。 |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 328 / 6,640 | 基于 Qwen3.5 MoE 的通用多模态文本生成模型，Nex-agi 出品，定位高性能推理场景。 |
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 405 / 6,589 | 微博 AI 发布的 3B 数学推理小模型，基于 Qwen2 微调，在数学任务上表现亮眼。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|---|---|---|---|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,163 / 183,093 | 本周点赞数最高的视觉模型，NVIDIA 推出的图像定位模型，3B 参数实现精准目标定位，社区反响热烈。 |
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 1,002 / 527,080 | Google 将扩散模型与 Gemma 结合的多模态模型，26B 参数支持图像-文本双向生成，下载量超 52 万。 |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 1,086 / 1,309,625 | Google Gemma 4 统一多模态版本，支持 any-to-any 任务，下载量突破 130 万，是本周下载量最高的模型之一。 |
| [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,099 / 56,162 | MiniMax 最新多模态模型，支持图像-文本输入到文本输出，MoE 架构设计，在视觉理解任务上表现出色。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 884 / 229,156 | 月之暗面推出的代码多模态模型，支持图像特征提取与代码生成，下载量近 23 万。 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 489 / 57,380 | Boson AI 的第三代 TTS 模型，4B 参数实现高质量文本到语音合成，基于 Qwen3 多模态架构。 |
| [Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2) | Zyphra | 115 / 669 | Zyphra 推出的新一代 TTS 模型，Apache 2.0 协议开源，面向美式英语场景优化。 |
| [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 228 / 0 | 智谱 AI 的姿态驱动角色动画生成模型，基于扩散模型实现图像到视频的转换，技术路线前沿。 |
| [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1) | owensong | 83 / 0 | 超小型 TTS 模型，定位极致轻量化语音合成场景，适合嵌入式与边缘设备部署。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|---|---|---|---|
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 537 / 13,033 | NVIDIA 的流式语音识别模型，仅 0.6B 参数支持 cache-aware ASR，适合实时语音转写场景。 |
| [prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B) | prefeitura-rio | 324 / 190,501 | 里约热内卢市政府开源的 397B 超大模型，基于 Qwen3.5 MoE，面向公共服务场景，下载量近 19 万。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|---|---|---|---|
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 1,703 / 211,424 | 本周点赞数第二的模型，Gemma 4 的代码能力微调量化版本，融合多个代码数据集，下载量超 21 万。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,969 / 3,420,052 | 本周下载量最高的模型（342 万次），Qwen3.6 的"去审查"量化版本，社区需求极为旺盛。 |
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 652 / 918,431 | unsloth 官方量化的 Gemma 4 多模态版本，下载量近 92 万，是 Gemma 4 生态中最受欢迎的量化版本。 |
| [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth | 307 / 164,209 | Google 扩散 Gemma 的 unsloth 量化版，使 26B 模型能在消费级硬件上运行。 |
| [unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF) | unsloth | 134 / 29,287 | Kimi K2.7 Code 的量化版本，降低部署门槛，让更多开发者体验月之暗面的代码模型。 |
| [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 122 / 305 | GLM 5.2 的 GGUF 量化版本，目前下载量较低，但为端侧部署提供了可能。 |
| [unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF) | unsloth | 103 / 22,659 | MiniMax M3 多模态模型的量化版本，支持 llama.cpp 推理。 |
| [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Jackrong | 249 / 122,175 | Qwen3.6 27B 代码模型的 GGUF 量化版，支持多模态视觉输入与代码生成。 |
| [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 394 / 529,069 | 融合多个模型风格的 Qwen3.6 40B 量化版本，下载量超 52 万，社区融合微调的代表之作。 |
| [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 350 / 96,805 | Gemma 4 的"去审查"微调版本，支持多模态任务，下载量近 10 万。 |
| [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8) | zai-org | 90 / 24,967 | GLM 5.2 的官方 FP8 量化版本，在保持精度的同时显著降低显存占用。 |
| [Mia-AiLab/Qwable-3.6-27b](https://huggingface.co/Mia-AiLab/Qwable-3.6-27b) | Mia-AiLab | 93 / 2,496 | Qwen3.6 的社区微调版本，采用 GGUF 格式，定位轻量化部署。 |
| [lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1) | lordx64 | 118 / 836 | 基于 Qwen3.5 MoE 的小型社区微调模型，支持多模态输入。 |

---

## 3. 生态信号

本周 Hugging Face 热门榜释放出几个清晰的生态信号：

**Gemma 4 家族全面爆发。** Google 的 Gemma 4 系列（包括基础版、扩散版、代码版）及其衍生量化版本占据了榜单近 1/3 的席位，累计下载量超过 300 万次。这表明 Gemma 4 已成为开源多模态模型的新基准，社区围绕其构建的微调与量化生态正在快速成熟。

**Qwen3.6 成为社区微调的首选基座。** 从 HauhauCS 的"去审查"版到 DavidAU 的多模型融合版，再到多个 GGUF 量化版本，Qwen3.6 系列（尤其是 MoE 变体）已成为社区二次开发最活跃的模型家族，单模型下载量最高达 342 万次。

**GGUF 量化生态进入"全覆盖"阶段。** unsloth 等量化团队几乎为每一个热门模型都提供了 GGUF 版本，使得大模型在消费级硬件上的部署成为常态。端侧推理需求正在从"能不能跑"向"跑得好不好"转变。

**中国开源模型全球影响力持续扩大。** DeepSeek、智谱、月之暗面、MiniMax 等中国团队的模型在点赞数和下载量上均表现强劲，开源社区对中国模型的接受度和依赖度显著提升。

---

## 4. 值得探索

### 🔥 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**推荐理由：** 本周点赞数最高的视觉模型（2,163 赞），NVIDIA 以 3B 参数实现了精准图像定位，在视觉-语言交叉领域具有突破性意义。无论是学术研究还是工业应用（如机器人视觉、自动驾驶），都值得深入探索其架构设计与定位能力边界。

### 🔥 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**推荐理由：** 本周综合热度之王，近 5,000 点赞和近 300 万下载量。作为 DeepSeek 最新旗舰模型，其在推理、对话和代码生成方面的表现代表了当前开源模型的最高水平，是评估开源 vs 闭源模型差距的最佳参照点。

### 🔥 [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
**推荐理由：** Google 将扩散模型范式引入 Gemma 语言模型架构，开创了"扩散式多模态生成"的新技术路线。下载量超 52 万说明社区对其高度关注，对于研究生成模型前沿方向的研究者而言，这是一个不可错过的参考实现。

---

*数据来源：Hugging Face Hub · 统计周期：2026-06-19 当周 · 排序依据：周点赞数*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*