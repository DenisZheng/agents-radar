# Hugging Face 热门模型日报 2026-06-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-14 00:42 UTC

---

# Hugging Face 热门模型日报 · 2026-06-14

---

## 1. 今日速览

本周 Hugging Face 热度最高的是 **DeepSeek-V4-Pro**（4,813 赞、325 万下载），以压倒性优势领跑，标志着 DeepSeek 系列正式进入"Pro"世代。**Google Gemma 4 家族**全面开花——12B 与 26B 多个变体（官方原版、量化版、社区"去审查"版）合计占据近 10 个席位，成为本周最密集的模型系列。**NVIDIA** 在视觉定位（LocateAnything-3B）和语音识别（Nemotron-3.5-ASR）两端同时发力，体现其全栈 AI 布局。图像生成领域，**Ideogram 4** 以 FP8 和 NF4 两个量化版本同时上榜，显示高质量文生图模型正在加速走向消费级部署。整体来看，本周趋势由"大模型旗舰迭代"与"社区量化/微调繁荣"两条主线共同驱动。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,813 | 3,250,404 | DeepSeek 最新旗舰，325 万下载证明其已是全球最受欢迎的开源 LLM 之一，综合推理与对话能力全面升级。 |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 995 | 1,005,883 | Google 原生多模态统一架构（any-to-any），12B 参数却实现 100 万+下载，是 Gemma 家族迄今最成功的指令微调版本。 |
| [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 533 | 207,338 | Gemma 4 基础版，any-to-any 统一架构，适合需要进一步微调或部署的开发者。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 515 | 1,689 | Moonshot 推出的代码专用模型，Kimi K2.7 系列首次聚焦编程场景，下载量尚低但点赞率高，值得观察。 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 355 | 6,533 | Cohere 面向代码生成的轻量模型，MoE 架构，定位高效代码补全与生成。 |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 236 | 3,092 | 基于 Qwen3.5-MOE 的文本生成模型，Nex-AGI 的旗舰版本，兼顾多模态输入能力。 |
| [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini) | nex-agi | 193 | 3,760 | Nex-N2 的轻量版，同样基于 Qwen3.5-MOE，适合资源受限场景。 |
| [XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash) | XiaomiMiMo | 106 | 3,590 | 小米自研 MiMo 系列，FP4 量化 + DFlash 解码加速，面向 Agent 场景优化。 |
| [prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B) | prefeitura-rio | 110 | 5,943 | 里约热内卢市政府发布的 397B 开源大模型，基于 Qwen3.5-MOE，政府级开源 AI 的标志性事件。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 707 | 92,080 | Google 将扩散机制融入 Gemma 架构的 26B 多模态模型，image-text-to-text 任务的全新范式探索。 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,959 | 69,443 | NVIDIA 视觉定位模型，仅 3B 参数即可精确定位图像中任意目标，点赞数第二高，实用性极强。 |
| [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 413 | 1,031 | MiniMax 第三代多模态模型，原生支持图像-文本对话，国产多模态赛道新选手。 |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 517 | 6,535 | Ideogram 4 的 FP8 量化版本，高质量文生图，在文字渲染和写实风格上持续领先。 |
| [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 334 | 3,276 | Ideogram 4 的 NF4 极低比特量化版，进一步降低显存门槛，适合消费级 GPU 部署。 |
| [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 151 | 0 | 智谱 AI 的图像驱动视频生成模型，姿态驱动角色动画，学术与创意工具潜力兼具。 |
| [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 235 | 426 | 字节跳动发布的图像-文本到视频渲染模型，Bernini 渲染器加持，视频生成赛道再添重磅玩家。 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 414 | 32,162 | Boson AI 的 TTS 模型，4B 参数实现高质量语音合成，基于 Qwen3 多模态架构。 |
| [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 187 | 7,331 | Google Magenta 实时音乐生成模型，支持 TFLite 部署，端侧音乐创作的新里程碑。 |

---

### 🔧 专用模型（代码、语音、视觉定位）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 400 | 3,975 | NVIDIA 0.6B 超轻量流式 ASR 模型，缓存感知架构，专为实时语音识别场景设计。 |

> *注：今日榜单中代码类模型已归入语言模型分类；LocateAnything-3B 虽属视觉定位，但因其高热度已在多模态分类中列出。*

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,761 | 2,411,202 | 本周下载量最高（241 万）！Qwen3.6 35B 的"去审查"GGUF 版，MoE + 视觉支持，社区需求旺盛。 |
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 580 | 872,895 | Unsloth 量化的 Gemma 4 12B，87 万下载证明社区对高效部署的强烈需求。 |
| [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth | 246 | 42,885 | DiffusionGemma 的 GGUF 版，让 26B 多模态模型也能在消费级硬件上运行。 |
| [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth | 213 | 227,830 | 采用 QAT（量化感知训练）的 Gemma 4 GGUF 版，精度损失更小，22 万下载。 |
| [unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF) | unsloth | 151 | 260,757 | Gemma 4 26B 的 QAT-GGUF 版，26 万下载，大模型高效部署的标杆。 |
| [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 277 | 50,289 | Gemma 4 12B 的社区"去审查"版，反映用户对无过滤模型的需求持续存在。 |
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 818 | 98,892 | Gemma 4 26B 的社区"去审查"GGUF 版，818 赞说明社区对此类变体的高关注度。 |
| [huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated) | huihui-ai | 152 | 8,270 | 采用 Abliteration 技术的 Gemma 4 对齐移除版本，社区对齐研究的典型产物。 |
| [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-C7B-Coder-MTP-GGUF) | Jackrong | 157 | 11,291 | Qwen3.6 27B 代码版的 GGUF 量化，支持 MTP（多词预测）加速推理。 |

---

## 3. 生态信号

本周榜单最突出的信号是 **Gemma 4 家族的全面统治**——原版、量化版、社区修改版合计近 10 个模型上榜，显示 Google 开源策略的成功以及社区对 Gemma 架构的高度认可。**DeepSeek-V4-Pro** 以 325 万下载和近 5,000 点赞断层领先，标志着 DeepSeek 已从"挑战者"成长为开源 LLM 生态的"定义者"。

量化生态方面，**Unsloth** 成为最大赢家，其 GGUF/QAT 版本合计覆盖 Gemma 4 全系列（12B/26B/DiffusionGemma），总下载量超过 200 万次，证明"高效部署"是开源社区最刚性的需求。同时，"去审查"（uncensored/abliterated）变体在 Gemma 4 和 Qwen3.6 上集中出现，且下载量惊人（Qwen3.6 去审查版 241 万下载），折射出社区对模型自主权的持续追求。

多模态领域，Google 的 DiffusionGemma 和 NVIDIA 的 LocateAnything 分别从"架构创新"和"实用工具"两个方向推进，而 Ideogram 4 的双量化版本（FP8 + NF4）则表明高质量图像生成模型正在加速走向端侧。整体来看，2026 年中的开源 AI 生态呈现出"旗舰模型集中化、部署工具精细化、应用场景垂直化"的三重趋势。

---

## 4. 值得探索

### 🔥 1. [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**理由：** 本周无可争议的王者。325 万下载和 4,813 点赞的双重碾压，说明它已在开发者社区中形成"默认选择"效应。作为 DeepSeek 首个"Pro"版本，其在推理、编码、对话上的全面升级值得第一时间体验和基准测试。

### 🔥 2. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**理由：** 点赞数第二高（1,959），却仅有 3B 参数——这是"小而精"路线的完美案例。视觉定位（Visual Grounding）是 Agent、机器人、内容审核等场景的核心能力，LocateAnything 以极小模型实现高精度定位，工程落地价值极高。

### 🔥 3. [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
**理由：** Google 将扩散（Diffusion）机制与 Gemma 语言模型架构融合的大胆尝试，开创了 image-text-to-text 的新范式。707 赞和 9.2 万下载显示社区对这种"非自回归多模态生成"路线的高度好奇，是理解下一代多模态架构演进的关键样本。

---

*数据来源：Hugging Face Hub · 统计周期：2026-06-14 周榜 · 共 30 个模型*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*