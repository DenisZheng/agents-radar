# Hugging Face 热门模型日报 2026-06-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-15 00:44 UTC

---

# Hugging Face 热门模型日报

**2026年6月15日**

---

## 📰 今日速览

本周 Hugging Face 热度被 **Google Gemma 4** 系列全面霸榜，从 12B 到 26B 的多款变体占据榜单近三分之一席位，下载量合计突破数百万次，成为当之无愧的模型家族之王。**DeepSeek-V4-Pro** 以 4,832 点赞和 307 万下载量登顶单品热度榜首，延续国产大模型的强势表现。图像生成领域，**Ideogram 4** 的 FP8 和 NF4 量化版本双双上榜，显示高质量文图生成需求旺盛。值得关注的是，**GGUF 量化模型**在社区微调中占据主导地位，Unsloth 等工具链让消费级硬件运行大模型成为常态。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| # | 模型 | 作者 | 👍 | 📥 | 说明 |
|---|------|------|----|----|------|
| 1 | **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,832 | 3,075,369 | 本周热度之王，DeepSeek 最新旗舰对话模型，307 万下载量彰显用户对国产顶级 LLM 的强烈需求 |
| 2 | **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1,008 | 1,084,405 | Google 新一代 Gemma 4 指令微调版，支持 any-to-any 多模态输入，百万级下载成为本周最热门开源 LLM |
| 3 | **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google | 542 | 213,502 | Gemma 4 基础版，any-to-any 统一架构，适合下游微调和部署 |
| 4 | **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 368 | 9,932 | Cohere 旗下 MoE 架构代码生成模型，面向开发者的轻量级编程助手 |
| 5 | **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex-agi | 256 | 3,396 | 基于 Qwen 3.5 MoE 的文本生成模型，Nex AGI 出品，定位通用对话与推理 |
| 6 | **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)** | nex-agi | 211 | 7,010 | Nex-N2 的轻量版，同样基于 Qwen 3.5 MoE，适合资源受限场景 |
| 7 | **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)** | XiaomiMiMo | 113 | 4,108 | 小米 MiMo V2.5 的 FP4 量化版本，面向 Agent 场景优化，体现端侧部署趋势 |
| 8 | **[silx-ai/Quasar-Preview](https://huggingface.co/silx-ai/Quasar-Preview)** | silx-ai | 71 | 307 | Silx AI 的 Quasar 系列预览版，长上下文文本生成，值得持续关注其后续发布 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| # | 模型 | 作者 | 👍 | 📥 | 说明 |
|---|------|------|----|----|------|
| 1 | **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 792 | 198,912 | Google 将扩散模型与 Gemma 结合，实现文本到图像生成，是 Gemma 家族在多模态生成领域的重要拓展 |
| 2 | **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 534 | 8,263 | Ideogram 4 的 FP8 量化版文生图模型，在保持生成质量的同时大幅降低推理成本 |
| 3 | **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 336 | 3,763 | Ideogram 4 的 NF4 量化版，进一步压缩模型体积，适合消费级显卡运行 |
| 4 | **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 626 | 15,145 | 月之暗面推出的多模态代码模型，支持图像理解与代码生成的融合场景 |
| 5 | **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 487 | 6,643 | MiniMax 新一代多模态模型，支持图像-文本交互，定位通用多模态助手 |
| 6 | **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 427 | 35,122 | Boson AI 的文本转语音模型，基于 Qwen 3 多模态架构，3.5 万下载量显示 TTS 需求旺盛 |
| 7 | **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | zai-org | 174 | 0 | 智谱 AI 推出的姿态驱动角色动画视频生成模型，支持图像到视频的转换，视频生成赛道新玩家 |
| 8 | **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** | prefeitura-rio | 271 | 112,371 | 基于 Qwen 3.5 MoE 的 397B 参数多模态模型，巴西政府开源项目，11 万下载量表现亮眼 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| # | 模型 | 作者 | 👍 | 📥 | 说明 |
|---|------|------|----|----|------|
| 1 | **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,000 | 75,201 | NVIDIA 发布的视觉定位模型，2000 点赞数位列第三，面向图像特征提取与目标定位场景 |
| 2 | **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 412 | 4,505 | NVIDIA 的流式语音识别模型，仅 0.6B 参数却支持实时 ASR，边缘部署友好 |
| 3 | **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 161 | 6,219 | 基于 Gemma 4 12B 微调的代码生成模型，融合多个代码数据集训练 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| # | 模型 | 作者 | 👍 | 📥 | 说明 |
|---|------|------|----|----|------|
| 1 | **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,805 | 2,516,709 | 本周下载量之王！Qwen 3.6 35B MoE 的 GGUF 量化+去审查版，251 万下载量反映用户对自由开源模型的巨大需求 |
| 2 | **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 597 | 926,372 | Unsloth 出品的 Gemma 4 12B 指令微调 GGUF 版，92 万下载量证明社区量化是模型普及的关键推手 |
| 3 | **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | unsloth | 261 | 80,118 | Unsloth 将 DiffusionGemma 26B 量化为 GGUF 格式，让扩散模型也能在消费级硬件上高效运行 |
| 4 | **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth | 157 | 317,261 | Gemma 4 26B 的 QAT（量化感知训练）GGUF 版，31 万下载量，是追求精度与效率平衡的首选 |
| 5 | **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 232 | 255,424 | Gemma 4 12B 的 QAT 量化版，any-to-any 多模态能力 + 量化效率 |
| 6 | **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS | 297 | 60,949 | Gemma 4 12B 的"去审查"微调版，社区对模型对齐边界的探索持续升温 |
| 7 | **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 336 | 375,966 | 融合 Claude 4.6 Opus 风格微调的 Qwen 3.6 40B GGUF 版，37 万下载量，社区知识蒸馏的极致体现 |
| 8 | **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 303 | 175,472 | Qwopus 3.6 27B 的 MTP（多token预测）训练 GGUF 版，17 万下载量，社区对推理加速技术的热情 |
| 9 | **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Jackrong | 179 | 33,720 | 同上系列的代码特化版，面向编程场景的 MTP 加速推理模型 |

---

## 🌐 生态信号

本周榜单呈现出几个清晰的生态趋势：

**Gemma 4 家族全面制霸。** Google 的 Gemma 4 系列（含基础版、指令微调版、Diffusion 版、各类 GGUF 量化版）占据 30 个席位中的 10 个，下载量合计超过 300 万次。这反映出 Google 开源策略的成功——any-to-any 统一架构 + 多模态原生支持让 Gemma 4 成为开源社区的新基础设施。

**GGUF 量化已成为社区分发的标准格式。** 榜单中超过 40% 的模型为 GGUF 格式，Unsloth 是最主要的量化工具提供商。Qwen 3.6 35B 去审查版 251 万下载量说明：用户不仅需要开源权重，更需要能在消费级硬件上直接运行的格式。

**"去审查"（Uncensored）模型需求旺盛。** HauhauCS 和 DavidAU 的两个去审查模型合计下载量超过 289 万次，OBLITERATUS 的 Gemma 4 去审查版也有 6 万下载。这体现了社区对模型开放性与对齐边界之间张力的持续关注。

**NVIDIA 在专用模型领域保持强势。** LocateAnything-3B（2000 点赞）和流式 ASR 模型双双上榜，显示 NVIDIA 在视觉定位和语音识别等垂直赛道的技术积累。

**MoE 架构持续渗透。** Qwen 3.5/3.6 MoE、Cohere2 MoE 等多款 MoE 模型上榜，混合专家架构正从闭源走向开源主流。

---

## 💎 值得探索

### 1. [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)
**推荐理由：** 作为本周下载量最高的非量化模型（108 万），Gemma 4 12B 指令版是 Google 开源战略的最新力作。any-to-any 架构意味着它可以处理文本、图像等多种输入，且作为指令微调模型开箱即用。无论是作为基座模型进行领域微调，还是直接用于多模态对话场景，都是当前开源 LLM 中综合性价比最高的选择之一。

### 2. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**推荐理由：** 2000 点赞数在本周排名第三，仅次于 DeepSeek-V4-Pro 和 Qwen 3.6 去审查版，但它的独特价值在于视觉定位这一垂直能力。3B 参数规模意味着极低的推理成本，适合需要图像特征提取和目标定位的生产场景（如机器人视觉、安防分析）。NVIDIA 出品的品质保证 + 轻量级设计，值得计算机视觉从业者重点关注。

### 3. [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)
**推荐理由：** 37 万下载量的社区微调模型，代表了开源社区"知识蒸馏"的极致尝试——将 Claude 4.6 Opus 的推理和编码风格迁移到 Qwen 3.6 40B 上。虽然名字冗长，但它折射出社区对顶级闭源模型能力开源化的强烈渴望。对于研究模型对齐、知识蒸馏和社区微调方法论的工作者来说，这是一个极具参考价值的样本。

---

*数据来源：Hugging Face Hub 周热门模型排行 | 分析时间：2026-06-15*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*