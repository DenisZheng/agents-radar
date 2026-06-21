# Hugging Face 热门模型日报 2026-06-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-21 00:43 UTC

---

# Hugging Face 热门模型日报 — 2026-06-21

---

## 📌 今日速览

本周 Hugging Face 热榜被 **DeepSeek-V4-Pro** 以近 5,000 点赞和 280 万下载强势登顶，标志着中国开源模型持续领跑全球社区。**Qwen 3.6 系列**成为体量最大的生态家族，衍生出超 10 个社区量化/微调版本，总下载量累计近 400 万次。**Google** 密集释放 Gemma 4 家族多模态与扩散模型，覆盖从 12B 到 26B 的多个赛道。NVIDIA 在视觉定位（LocateAnything）和语音流式识别（nemotron-ASR）两端同时发力。多个中文团队（微博智谱、MiniMax、Moonshot）的上榜也反映出中国 AI 生态在开源社区的存在感持续增强。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| # | 模型 | 作者 | 👍 | ⬇️ 下载 | 一句话说明 |
|---|------|------|----|---------|-----------|
| 1 | [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,985 | 2,797,050 | 当前全球人气最高的对话与推理旗舰模型，兼顾通用对话与复杂任务 |
| 2 | [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 1,687 | 19,683 | 智谱最新 MoE 架构通用模型，保留对话与生成双能力 |
| 3 | [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 244 | 1,998 | 微软小参数长上下文 SFT 模型，主打"Explorer SubAgent"子代理场景 |
| 4 | [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 340 | 7,724 | 基于 Qwen3.5 MoE 的多模态对话模型，定位轻量推理 |
| 5 | [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 467 | 18,783 | Cohere 开源的生态代码模型，采用 Cohere2 MoE 架构 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| # | 模型 | 作者 | 👍 | ⬇️ 下载 | 一句话说明 |
|---|------|------|----|---------|-----------|
| 1 | [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,216 | 235,606 | 3B 参数高精度图像定位模型，评论点赞量全网第一 |
| 2 | [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 1,022 | 673,464 | Google 实验性质的 26B 扩散-多模态混合架构，引入最新 diffusion-gemma 技术路线 |
| 3 | [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 1,106 | 1,696,240 | Gemma 4 统一多模态模型，支持任意模态到任意模态（any-to-any） |
| 4 | [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,159 | 85,771 | MiniMax 原生多模态图像-文本-到-文本模型 |
| 5 | [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 929 | 317,963 | Moonshot 微调版代码推理 + 视觉特征提取，下载量极高 |
| 6 | [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 496 | 72,225 | Boson AI 4B 参数 Qwen3 多模态 TTS 模型 |
| 7 | [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 241 | 0 | 智谱图像到视频角色动画模型，姿态驱动扩散生成 |
| 8 | [ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora) | ostris | 82 | 1,679 | 基于 Ideogram 4 的 LoRA 微调，加速文本到图像生成 |

### 🔧 专用模型（代码、数学、语音、嵌入）

| # | 模型 | 作者 | 👍 | ⬇️ 下载 | 一句话说明 |
|---|------|------|----|---------|-----------|
| 1 | [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 511 | 16,270 | 微博出品的 3B 数学推理模型，基于 Qwen2 微调 |
| 2 | [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 584 | 21,426 | 0.6B 超小流式 ASR 模型，支持缓存感知实时语音识别 |
| 3 | [LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | LiquidAI | 81 | 6,128 | 350M 轻量句子嵌入模型，适合 RAG 与语义检索 |
| 4 | [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1) | owensong | 140 | 0 | 超小型 TTS 模型，面向边缘设备语音合成 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| # | 模型 | 作者 | 👍 | ⬇️ 下载 | 一句话说明 |
|---|------|------|----|---------|-----------|
| 1 | [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,040 | 3,812,636 | 本周下载量最高（381 万次），Qwen3.6 35B 社区"无审查"量化版 |
| 2 | [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 1,983 | 312,332 | Gemma 4 12B 代码推理 GGUF 量化版，点赞量第二 |
| 3 | [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 411 | 587,521 | Qwen3.6 40B 融合多模型微调 + IMatrix 量化，下载量近 59 万 |
| 4 | [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 205 | 22,586 | Unsloth 官方 GLM-5.2 GGUF 量化，降低本地部署门槛 |
| 5 | [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Jackrong | 269 | 168,502 | Qwen3.6 27B 代码 + MTP 多步预测 GGUF 量化版 |
| 6 | [unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF) | unsloth | 146 | 37,260 | Unsloth 官方 Kimi-K2.7-Code GGUF 量化版 |
| 7 | [bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF) | bytkim | 97 | 20,465 | Qwen3.6 27B MTP + pi-tune 微调 GGUF 量化版 |
| 8 | [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 183 | 6,307 | Gemma 4 12B Agentic 终端任务 GGUF 量化版 |

---

## 🌐 生态信号

**Qwen 3.6 已成为本周最庞大的模型家族**，从 27B 到 40B 的社区量化/微调版本多达 5 个，累计下载量超过 460 万次，显示其开源生态的极强活力。**Gemma 4 家族**本周迎来密集发布——Google 官方推出 12B 统一多模态版和 26B 扩散模型，社区随即跟进多个 GGUF 量化版本，形成"官方+社区"双轮驱动格局。**MoE 架构**成为主流选择，GLM-5.2、Nex-N2-Pro、Cohere North-Mini-Code 均采用 MoE 或 DSA 稀疏激活方案。量化方面，**GGUF 格式**仍占绝对主导，Unsloth 作为量化生态核心参与者持续为热门模型提供官方量化版本。值得注意的是，"无审查（uncensored）"标签模型下载量异常突出，反映出社区对开放权重模型的强烈需求。

---

## 💡 值得探索

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — 仅 3B 参数却获得本周最高点赞（2,216），在视觉定位任务上表现出色，适合需要精确图像理解的应用场景，值得研究其架构设计。

2. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — Google 将扩散模型与 Gemma 多模态架构融合的实验性尝试，代表了"扩散+自回归"混合范式的前沿方向，对多模态生成研究具有重要参考价值。

3. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — 以近 5,000 点赞和 280 万下载断层领先，作为当前开源社区综合性能最强的对话与推理模型，是评估开源 LLM 能力上限的最佳对标对象。

---

*数据来源：Hugging Face Hub 周榜 | 统计日期：2026-06-21*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*