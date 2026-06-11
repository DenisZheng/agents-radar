# Hugging Face 热门模型日报 2026-06-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-11 00:42 UTC

---

# Hugging Face 热门模型日报 · 2026-06-11

---

## 1. 今日速览

本周 Hugging Face 热度榜被 **DeepSeek-V4-Pro** 以 4,758 点赞和超过 400 万下载量强势登顶，标志着中国开源大模型在全球社区的影响力持续攀升。**Google Gemma 4 系列**（12B / 26B）全面铺开，官方版本与社区量化版本（unsloth GGUF、abliterated 变体）同时上榜，显示该家族正处于生态爆发期。NVIDIA 在语音识别（ASR）和定位模型（LocateAnything）上多点开花，而 **Ideogram-4** 的 FP8 和 NF4 量化版本同时进入前 10，说明高质量文生图模型的轻量化需求旺盛。整体来看，MoE 架构、多模态统一模型和社区量化生态是本周最突出的三大趋势。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|---|---|---|---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,758 / 4,061,006 | 本周绝对王者，DeepSeek 最新旗舰推理模型，400 万+下载量证明其已成为全球开发者的首选开源 LLM。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,630 / 3,057,541 | Qwen3.6 MoE 架构的"去审查"GGUF 版本，下载量超 300 万，反映社区对可本地部署、无过滤模型的高需求。 |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 739 / 134,752 | 仅 1B 参数却凭借新颖的 HRM（Hierarchical Reasoning Model）架构获得高关注，小模型高效推理的新范式。 |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 581 / 142,134 | LiquidAI 的 MoE 架构模型，8B 总参数仅激活 1B，在边缘设备上实现高性能推理的代表作。 |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 189 / 59,066 | NVIDIA 550B 超大规模 MoE 模型，虽需高端硬件，但为研究社区提供了探索极限规模的开源选项。 |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | 158 / 91,117 | 同系列 NVFP4 量化版，下载量反而超过 BF16 原版，说明社区更关注可部署性而非原始精度。 |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 180 / 1,185 | 基于 Qwen3.5-MoE 的多模态文本生成模型，新团队 nex-agi 的首秀产品。 |
| [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini) | nex-agi | 134 / 1,222 | Nex-N2 的轻量版，适合资源受限场景。 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 255 / 1,859 | Cohere 推出的代码专用小模型，MoE 架构，面向代码补全和编程辅助场景。 |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 281 / 18,273 | JetBrains 官方推出的"思考型"代码模型，12B 参数仅激活 2.5B，专为 IDE 集成优化。 |
| [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 212 / 14,838 | Gemma 4 的"去审查"社区变体，反映开源社区对模型安全对齐边界的持续探索。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|---|---|---|---|
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 885 / 675,936 | Google Gemma 4 统一多模态指令版，支持 any-to-any 任务，是本周多模态领域的标杆发布。 |
| [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 502 / 140,221 | Gemma 4 基础版，为社区微调和二次开发提供底座。 |
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusion_gemma-26B-A4B-it) | google | 214 / 0 | Google 将扩散机制融入 Gemma 架构的 26B 多模态模型，探索自回归+扩散的混合生成范式。 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,803 / 131,794 | 本周点赞第二高的模型，NVIDIA 的视觉定位模型，3B 参数实现精准的图像-文本定位能力，适用于机器人和 AR 场景。 |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 472 / 7,170 | Ideogram 4 的 FP8 量化版，高质量文生图模型走向轻量化部署。 |
| [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 307 / 6,124 | 同系列 NF4 量化版，与 FP8 版同时上榜，说明用户对不同精度量化的选择需求。 |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 363 / 50,187 | 阶跃星辰的视觉语言模型，主打快速推理，在中文多模态场景中表现突出。 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 320 / 19,948 | 基于 Qwen3 的 4B TTS 模型，Higgs Audio V3 系列在语音合成质量上取得显著进步。 |
| [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 173 / 19,806 | Google 的实时音乐生成模型，支持 TFLite 部署，面向移动端和边缘端音乐创作场景。 |
| [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 186 / 0 | 新发布的 TTS 模型，虽暂无下载数据，但已获社区关注，值得持续观察。 |
| [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 210 / 305 | 字节跳动的图像-文本到视频生成模型，基于 Bernini 渲染器，Apache 2.0 协议开源。 |
| [jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo) | jdopensource | 126 / 5,457 | 京东开源的文本到视频+音频生成模型，基于 LTX-Video，探索音视频联合生成。 |

---

### 🔧 专用模型（代码、语音、嵌入）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|---|---|---|---|
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 342 / 4,965 | NVIDIA 0.6B 超轻量流式 ASR 模型，支持缓存感知推理，专为实时语音识别和边缘部署设计。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 / ⬇️ | 一句话说明 |
|---|---|---|---|
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 548 / 711,706 | Unsloth 的 Gemma 4 GGUF 量化版，下载量超 71 万，是原版的两倍以上，证明社区量化生态的庞大需求。 |
| [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth | 187 / 148,252 | QAT（量化感知训练）版本的 GGUF，在保持精度的同时大幅降低部署门槛。 |
| [unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF) | unsloth | 129 / 129,110 | Gemma 4 26B 大模型的 QAT-GGUF 版，让 26B 参数模型也能在消费级硬件上运行。 |
| [google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf) | google | 123 / 96,749 | Google 官方自发布的 Q4_0 GGUF 量化版，官方亲自下场做量化，说明对本地部署生态的重视。 |
| [huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated) | huihui-ai | 135 / 6,400 | Gemma 4 的"abliterated"（擦除对齐）社区变体，通过技术手段移除模型的安全限制。 |
| [Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4) | Comfy-Org | 126 / 0 | ComfyUI 社区打包的 Ideogram-4 工作流，方便用户在 ComfyUI 中一键使用最新文生图模型。 |

---

## 3. 生态信号

本周榜单呈现出几个清晰的生态信号：

**Gemma 4 家族全面爆发。** Google 的 Gemma 4 系列（12B、26B、DiffusionGemma）同时上榜，且每个官方版本都伴随多个社区量化变体（unsloth GGUF、官方 QAT-GGUF、abliterated 版），形成"官方发布→社区量化→二次微调"的完整生态链。这种模式与此前 Llama 系列的社区演化路径高度相似。

**MoE 架构成为主流选择。** 从 DeepSeek-V4-Pro、Qwen3.6-35B-A3B、Nemotron-550B-A55B、LFM2.5-8B-A1B 到 Nex-N2 系列，MoE（混合专家）架构几乎占据了榜单的半壁江山。开发者越来越倾向于"大总参数、小激活参数"的范式，以在推理成本和模型能力之间取得平衡。

**量化生态日趋成熟。** Unsloth 的 GGUF 版本下载量普遍超过原版（如 Gemma 4 12B GGUF 71 万 vs 原版 67 万），Google 官方也开始发布 QAT-GGUF 版本。FP8、NF4、Q4_0 等多种精度选项并存，说明社区对"在什么硬件上以什么精度运行"的选择越来越精细化。

**中国模型影响力持续扩大。** DeepSeek-V4-Pro 以绝对优势登顶，Qwen3.6 社区版下载量超 300 万，Step-3.7-Flash 和 JoyAI-Echo 也进入榜单，中国开源模型在全球开发者社区中的渗透率显著提升。

---

## 4. 值得探索

### 🔥 DeepSeek-V4-Pro
> [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)

**理由：** 4,758 点赞 + 400 万下载量的双重验证，这是当前开源社区认可度最高的旗舰模型。无论你是要做推理能力评估、构建生产级应用，还是研究前沿 LLM 架构，DeepSeek-V4-Pro 都是绕不开的基准。建议优先体验其对话和推理能力，并与同量级模型进行对比测试。

### 🔥 sapientinc/HRM-Text-1B
> [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)

**理由：** 仅 1B 参数却获得 739 点赞，HRM（分层推理模型）架构代表了一种全新的小模型高效推理范式。对于关注模型架构创新、边缘部署和"小而精"路线的研究者来说，这是一个极具研究价值的样本。它证明了参数规模不是唯一出路，架构创新同样可以带来质的飞跃。

### 🔥 nvidia/LocateAnything-3B
> [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)

**理由：** 本周点赞第二高（1,803），NVIDIA 在视觉定位领域的最新成果。3B 参数实现精准的图像-文本定位，在机器人感知、AR/VR、智能监控等场景有直接应用价值。对于从事多模态应用开发的工程师来说，这是一个值得立即集成的工具型模型。

---

*数据来源：Hugging Face Hub · 统计周期：2026-06-11 当周 · 排序依据：周点赞数*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*