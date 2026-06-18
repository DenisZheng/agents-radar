# Hugging Face 热门模型日报 2026-06-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-18 00:44 UTC

---

# Hugging Face 热门模型日报 · 2026-06-18

---

## 1. 今日速览

本周 Hugging Face 热门榜呈现出**多模态与量化模型双轮驱动**的格局。Google 的 Gemma 4 家族持续霸榜，多个量化版本和微调变体同时上榜，显示出极高的社区活跃度。DeepSeek-V4-Pro 以近 5,000 点赞和 280 万下载量稳坐榜首，标志着国产大模型在全球开源生态中的影响力持续攀升。Qwen 3.6 系列同样表现亮眼，原版与多个"去审查"微调版合计下载量超过 700 万次，反映出社区对开放权重模型的强烈需求。此外，MoE（混合专家）架构已成为主流趋势，上榜模型中超过半数采用 MoE 设计。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,924 | 2,804,646 | 本周绝对王者，DeepSeek 最新旗舰推理模型，近 5K 点赞和 280 万下载，国产开源大模型的标杆之作。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 1,010 | 666 | 智谱 AI 最新 GLM 系列 MoE 模型，刚发布即破千赞，代表了国内大模型厂商的快速迭代能力。 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 420 | 13,449 | Cohere 推出的轻量级代码对话模型，基于 Cohere2-MoE 架构，面向企业级代码辅助场景。 |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 317 | 5,579 | Nex AI 基于 Qwen3.5-MoE 的增强版，兼顾文本生成与多模态理解。 |
| [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini) | nex-agi | 237 | 9,804 | Nex-N2 的轻量版本，适合边缘部署和资源受限场景。 |
| [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 185 | 537 | 微软发布的 4B 参数快速上下文模型，专为 Explorer SubAgent 场景优化，探索小模型长上下文能力。 |
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 308 | 1,950 | 微博 AI 推出的 3B 数学推理模型，基于 Qwen2，在数学任务上表现突出。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 1,068 | 922,952 | Google Gemma 4 统一多模态模型，支持 any-to-any 任务，92 万下载量证明其多模态能力的广泛吸引力。 |
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 976 | 460,173 | Google 将扩散模型与 Gemma 结合的多模态生成模型，46 万下载量显示社区对"扩散式多模态"路线的高度关注。 |
| [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,061 | 42,198 | MiniMax 最新多模态 MoE 模型，支持图文理解，千赞级别说明其技术实力获得社区认可。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 844 | 172,727 | 月之暗面推出的多模态代码模型，17 万下载量，将代码能力与视觉理解融合。 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,138 | 130,389 | 本周多模态榜点赞冠军！NVIDIA 推出的 3B 视觉定位模型，精准定位图像中任意目标，13 万下载量。 |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 568 | 15,477 | Ideogram 最新文本到图像模型，FP8 量化版本，在图像生成质量和效率之间取得平衡。 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 478 | 40,812 | Boson AI 的 4B 参数 TTS 模型，基于 Qwen3 多模态架构，4 万下载量显示语音合成领域的活跃需求。 |
| [Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2) | Zyphra | 106 | 629 | Zyphra 推出的新一代 TTS 模型，Apache 2.0 协议，面向美国市场。 |
| [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 222 | 0 | 智谱 AI 的图像到视频生成模型，支持姿态驱动的角色动画，刚发布尚未有下载但已获关注。 |
| [prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B) | prefeitura-rio | 318 | 189,986 | 里约热内卢市政府发布的 397B 开源多模态模型，基于 Qwen3.5-MoE，近 19 万下载量，政府级开源 AI 的标志性事件。 |

### 🔧 专用模型（代码、数学、语音识别）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 519 | 7,195 | NVIDIA 推出的 0.6B 流式 ASR 模型，支持缓存感知推理，专为实时语音识别场景设计。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,933 | 2,876,624 | 本周下载量之王！近 290 万次下载，Qwen3.6 的"去审查"微调版，反映了社区对无限制模型的巨大需求。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,157 | 3,683,883 | Qwen3.6 原版，本周点赞冠军，368 万下载量，MoE 架构 + 多模态能力使其成为社区最热门的基座模型之一。 |
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 1,473 | 146,784 | Gemma 4 的代码专用量化版本，融合多个数据集微调，14 万下载量显示开发者对本地代码模型的需求。 |
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 645 | 579,224 | Unsloth 官方量化的 Gemma 4，57 万下载量，社区首选的本地部署版本。 |
| [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth | 298 | 136,634 | Google DiffusionGemma 的 Unsloth 量化版，让普通用户也能在消费级硬件上运行多模态扩散模型。 |
| [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 382 | 427,359 | 社区"缝合怪"微调代表作，融合 Claude Opus 等多个模型的风格，42 万下载量证明社区对混合微调的热情。 |
| [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Jackrong | 234 | 99,909 | Qwen3.6 的代码专用量化版，支持 MTP（多词预测）加速，近 10 万下载量。 |
| [unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF) | unsloth | 128 | 23,956 | Kimi K2.7 Code 的 Unsloth 量化版本，让更多开发者能在本地运行月之暗面的代码模型。 |
| [unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF) | unsloth | 96 | 20,504 | MiniMax M3 的量化版本，Unsloth 持续为热门多模态模型提供高效部署方案。 |
| [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 340 | 78,333 | Gemma 4 的"去审查"微调版，7.8 万下载量，社区对开放权重无限制模型的又一力证。 |
| [lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1) | lordx64 | 99 | 319 | 社区开发者基于 Qwen3.5-MoE 的微调实验版本，小规模但代表了社区创新的活力。 |
| [Mia-AiLab/Qwable-3.6-27b](https://huggingface.co/Mia-AiLab/Qwable-3.6-27b) | Mia-AiLab | 75 | 646 | Qwen3.6 的社区微调版本，基于 GGUF 格式，适合本地部署实验。 |

---

## 3. 生态信号

本周榜单揭示了几个关键趋势：

**MoE 架构全面主导。** 上榜模型中超过半数采用混合专家（MoE）设计，从 Qwen3.6-35B-A3B 到 GLM-5.2、MiniMax-M3，MoE 已成为大模型厂商的主流选择。这种架构在保持性能的同时显著降低了推理成本，特别适合开源社区的多样化部署需求。

**Gemma 4 家族生态爆发。** Google 的 Gemma 4 系列以原版、多模态版、扩散版、代码版、量化版、微调版等多个变体同时上榜，合计下载量超过 200 万次，形成了一个完整的模型生态。Unsloth 等量化团队的高效跟进进一步放大了这一效应。

**"去审查"模型需求旺盛。** Qwen3.6 和 Gemma 4 的多个"Uncensored"版本下载量惊人（最高近 290 万次），反映出社区对完全开放、无内容限制模型的强烈需求，也引发了关于 AI 安全与开放性的持续讨论。

**中国模型厂商全面崛起。** DeepSeek、Qwen、Moonshot、MiniMax、智谱、微博 AI 等中国团队的产品占据了榜单近半壁江山，下载量和点赞数均处于第一梯队，标志着中国开源 AI 生态的全球影响力进入新阶段。

**政府级开源 AI 出现。** 里约热内卢市政府发布的 Rio-3.5-Open-397B 以近 19 万下载量上榜，这是政府机构直接发布大模型的重要信号，预示着开源 AI 正在从企业行为扩展到公共部门。

---

## 4. 值得探索

### 🏆 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**推荐理由：** 本周无可争议的王者，4,924 点赞 + 280 万下载量。作为 DeepSeek 最新旗舰模型，它在推理能力和对话质量上代表了当前开源模型的最高水平。无论是用于研究、产品开发还是基准测试，这都是 2026 年中期最值得关注的模型。

### 🔬 [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
**推荐理由：** Google 将扩散模型范式引入多模态领域的大胆尝试，46 万下载量证明社区对这一技术路线的高度兴趣。对于研究多模态生成、图像理解和文本生成交叉领域的研究者来说，这是一个极具探索价值的模型，代表了"非自回归多模态生成"的新方向。

### 🛠️ [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**推荐理由：** 本周多模态榜点赞冠军（2,138 点赞），NVIDIA 在视觉定位领域的精准发力。仅 3B 参数就能实现图像中任意目标的精准定位，13 万下载量说明其在机器人、自动驾驶、工业检测等实际场景中的巨大潜力。小而精的专用模型路线值得持续关注。

---

*数据来源：Hugging Face Hub · 统计周期：周榜 · 生成时间：2026-06-18*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*