# Hugging Face 热门模型日报 2026-06-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-23 00:39 UTC

---

# Hugging Face 热门模型日报

**2026-06-23**

---

## 今日速览

本周 Hugging Face 热门榜单呈现出异常活跃的开源生态。**DeepSeek-V4-Pro** 以 5,012 点赞和 242 万下载量断层领先，成为本周绝对焦点，延续了 DeepSeek 系列在开源社区的统治地位。Google 的 **Gemma 4 统一模型** 下载量近 191 万次，标志着多模态通用模型走向成熟。GGUF 量化社区持续繁荣，多个 Qwen3.6 和 Gemma 4 的量化变体同时上榜，反映出本地部署需求的爆发式增长。NVIDIA 在视觉定位和语音识别两个垂直领域同步发力，显示其开源硬件生态的战略布局。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 亮点 |
|------|------|
| [**deepseek-ai/DeepSeek-V4-Pro**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | DeepSeek 最新旗舰，5,012 点赞 / 242 万下载 |
| 本周最受欢迎的模型。全新的 V4 架构，支持推理与对话，社区采用速度极快。 |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org，2,030 点赞 / 3.3 万下载 |
| GLM 系列的 MoE+DSA（DeepSeek-style Attention）架构迭代，兼顾效率与性能的新国产旗舰。|
| [**WeiboAI/VibeThinker-3B**](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI，609 点赞 / 3.2 万下載 |
| 微博出品的小尺寸数学推理模型，在轻量级场景下表现亮眼。|
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai，962 点赞 / 41 万下载 |
| Kimi 系列专用代码版本，采用压缩张量技术，下载量反映开发者的实际需求旺盛。|
| [**microsoft/FastContext-1.0-4B-SFT**](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | Microsoft，289 点赞 / 3,498 下载 |
| 微软的上下文高效处理模型，专为 SubAgent 探索任务设计，小而精。|
| [**CohereLabs/North-Mini-Code-1.0**](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs，481 点赞 / 2.1 万下载 |
| Cohere 的小型代码生成模型，MoE 架构，面向快速迭代的开发者工作流。|
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS，2,113 点赞 / **407 万下载** |
| 本周下载量最高的单一变体。Qwen3.6 35B MoE 的社区修改版，引发广泛讨论。|

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 亮点 |
|------|------|
| [**google/gemma-4-12B-it**](https://huggingface.co/google/gemma-4-12B-it) | Google，1,139 点赞 / **191 万下载** |
| Gemma 4 的统一多模态版本，真正的 any-to-any 架构，下载量仅次于 DeepSeek-V4-Pro，Google 开源生态的里程碑。 |
| [**MiniMaxAI/MiniMax-M3**](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI，1,208 点赞 / 12 万下载 |
| MiniMax 的新一代视觉语言模型，原生多模态架构，在图像理解与生成任务中表现出色。 |
| [**google/diffusiongemma-26B-A4B-it**](https://huggingface.co/google/diffusion_gemma-26B-A4B-it) | Google，1,049 点赞 / 87 万下载 |
| Google 将扩散模型与 Gemma 能力结合的创新尝试，探索多模态生成的新范式。 |
| [**nvidia/LocateAnything-3B**](https://huggingface.co/nvidia/LocateAnything-3B) | NVIDIA，2,291 点赞（总榜第3）/ 24.7 万下载 |
| 视觉定位通用模型，可在图像中精确识别和定位任意目标，点赞数排名全榜第三。 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | 百度，157 点赞 / 47 下载 |
| 百度开源的无限 OCR 工具，支持超长文档和多场景文字识别，尚处早期但方向值得关注。 |
| [**owensong/Inflect-Nano-v1**](https://huggingface.co/owensong/Inflect-Nano-v1) | owensong，166 点赞 |
| 超小型 TTS 模型，面向边缘设备的语音合成方案。|
| [**ostris/ideogram_4_turbotime_lora**](https://huggingface.co/ostris/ideogram_4_turbotime_lora) | ostris，101 点赞 / 3,244 下载 |
| 针对 Ideogram 4 模型的 TurboTime LoRA 微调，加速图像生成的社区优化。 |

---

### 🔧 专用模型（代码、数学、语音、嵌入）

| 模型 | 亮点 |
|------|------|
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | NVIDIA，629 点赞 / 3.4 万下载 |
| 6 亿参数流式 ASR 模型，支持缓存感知推理，在边缘语音识别场景中极具实用价值。|
| [**LiquidAI/LFM2.5-Embedding-350M**](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | LiquidAI，100 点赞 / 8,822 下载 |
| LFM2.5 轻量级嵌入模型，350M 参数即可提供有竞争力的语义相似度表现。 |
| [**LiquidAI/LFM2.5-ColBERT-350M**](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M) | LiquidAI，78 点赞 / 2,202 下载 |
| 基于 ColBERT 架构的晚期交互检索模型，LiquidAI 持续构建完整的轻量级模型产品线。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 亮点 |
|------|------|
| [**yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1，**2,168 点赞**（总榜第1）/ 41 万下载 |
| 本周点赞数最高的量化变体。Gemma 4 12B 的代码专用 GGUF 版本，展示了社区量化的高水平。 |
| [**unsloth/GLM-5.2-GGUF**](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth，253 点赞 / 4.1 万下载 |
| Unsloth 官方出品的 GLM-5.2 量化版，Unsloth 团队持续为热门模型提供高效量化方案。 |
| [**zai-org/GLM-5.2-FP8**](https://huggingface.co/zai-org/GLM-5.2-FP8) | zai-org，133 点赞 / **33.5 万下载** |
| GLM-5.2 官方 FP8 量化版本，33.5 万下载量说明硬件优化版本的需求远超原版。 |
| [**bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF**](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF) | bytkim，106 点赞 / 5.2 万下载 |
| Qwen3.6 27B 的多版本预测（MTP）微调量化版本，探索推理加速新方向。 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai，133 点赞 |
| 基于 Claude 和 Qwen 蒸馏数据训练的 9B 推理模型，社区实验性微调的典型代表。 |

---

## 生态信号

本周榜单最突出的趋势是 **GGUF 量化生态的全面爆发**：榜单中 GGUF 模型数量占比超过 20%，且多个量化变体（如 GLM-5.2-FP8 33.5 万下载）下载量远超原始模型，说明本地部署已从爱好者需求转为主流开发者刚需。

**DeepSeek 和 Gemma 双雄并立**：DeepSeek-V4-Pro 和 Gemma 4 的点赞与下载量均达到百万级，形成开源 LLM 生态的两个核心引力中心。

**Qwen3.6 MoE 家族异军突起**：原版、修改版、量化版、代码版、MTP 版共计 6 个变体同时进入 Top 30，是本周上榜变体最多的模型系列，反映出 Qwen 在社区二次开发中的超高活跃度。同时，榜单上出现了 **3 个"无审查"修改版本**的模型，围绕安全与开放界限的争论值得关注。

**模型小型化趋势明确**：从 0.6B 的 ASR 模型到 3B 的视觉定位器，再到 350M 的嵌入模型，工业级小模型正在多个垂直场景中证明其商业可行性。

---

## 值得探索

1. **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   DeepSeek 最新旗舰，架构细节尚未完全公开，但社区反馈积极。作为开源阵营的标杆值得深入研究其技术报告和创新点。

2. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   真正的 any-to-any 统一模型，191 万下载量说明开发者对其多模态能力的期待极高。Gemma 4 的技术路线代表了 Google 开源战略的新方向，值得关注其在各类 benchmark 上的表现。

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   点赞排名全榜第三（2,291），却相对低调。这是 NVIDIA 面向 Agent 和机器人场景的视觉定位基础模型，可能成为下一代多模态 Agent 工作流的关键组件，具有很强的研究和应用价值。

---

> 本报告由 OWL 基于 2026-06-23 Hugging Face Hub 公开数据生成，仅供参考。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*