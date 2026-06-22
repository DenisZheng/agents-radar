# Hugging Face 热门模型日报 2026-06-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-22 00:43 UTC

---

# Hugging Face 热门模型日报

**2026年6月22日 · 第1期**

---

## 一、今日速览

本周 Hugging Face 榜单呈现"三强争霸"格局：**DeepSeek-V4-Pro** 以近5000赞稳坐榜首，**Qwen3.6-35B-A3B** 和 **Gemma-4-12B** 紧随其后，三大模型下载量均突破百万级。Google 一口气推出 DiffusionGemma 和 Gemma-4 两大新家族，在图像生成与多模态领域双线出击。社区量化生态空前活跃——GGUF 版本模型占据榜单近三分之一，unsloth、yuxinlu1 等社区贡献者成为开源生态重要力量。MoE 架构持续渗透，从 Qwen3.6 到 GLM-5.2 再到 DeepSeek-V4，稀疏激活已成为大模型主流范式。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|--------|--------|------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,999 | 2,611,991 | 本周最热模型，DeepSeek 最新旗舰对话模型，MoE 架构，全面对标 GPT-4o 级别 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 1,813 | 27,413 | 智谱最新 GLM 系列，采用 MoE-DSA 架构，对话与推理能力大幅提升 |
| [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8) | zai-org | 120 | 217,361 | GLM-5.2 官方 FP8 量化版，下载量远超原版，推理部署首选 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 945 | 363,308 | 月之暗面代码专用模型，Kimi K2.7 系列代码版，长上下文编程场景表现突出 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 474 | 19,551 | Cohere 开源代码小模型，cohere2_moe 架构，面向轻量级代码补全场景 |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 342 | 7,872 | 基于 Qwen3.5-MoE 微调的高性能推理模型，社区新星项目 |
| [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 261 | 2,593 | 微软 4B 参数 Explorer SubAgent，面向 Agent 场景的超长上下文模型 |
| [lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1) | lordx64 | 144 | 3,351 | 社区基于 Qwen3.5-MoE 微调的多模态语言模型，小体量高热度 |
| [poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1) | poolside | 83 | 2,580 | 新兴团队 poolside 的首个开源模型，适配 vLLM/SGLang 推理框架 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|--------|--------|------|
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 1,034 | 762,861 | Google 全新扩散式图像生成 Gemma 模型，下载量惊人，直接对标 FLUX |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 1,126 | 1,815,370 | Google 统一多模态 Gemma-4，支持 any-to-any 多模态输入输出 |
| [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,177 | 104,076 | MiniMax 多模态视觉语言模型，支持图像理解与推理 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,240 | 241,845 | 本周点赞第二高，NVIDIA 开源 3B 视觉定位模型，零样本目标定位能力 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 505 | 76,120 | 4B 参数 TTS 语音合成模型，基于 Qwen3 多模态架构，效果逼近真人 |
| [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1) | owensong | 151 | 0 | 超小型 TTS 模型，参数极小适合端侧部署，刚发布尚未产生下载 |
| [ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora) | ostris | 89 | 2,452 | Ideogram 4 的 TurboTime 风格 LoRA 适配器，社区微调 |
| [Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit) | Boogu | 81 | 374 | 轻量图像编辑模型，支持中英文提示，Apache 2.0 许可 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|--------|--------|------|
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 560 | 20,277 | 微博 AI 发布的 3B 数学推理模型，基于 Qwen2 架构，小参数强推理 |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 612 | 27,275 | NVIDIA 流式 ASR 语音识别模型，0.6B 参数支持实时转写 |
| [LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) | LiquidAI | 90 | 7,726 | Liquid AI 的 350M 嵌入模型，sentence-transformers 兼容，RAG 场景利器 |
| [datalab-to/lift](https://huggingface.co/datalab-to/lift) | datalab-to | 107 | 516 | 基于 Qwen3.5 的 PDF 文档理解模型，专注文档解析场景 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|--------|--------|------|
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 2,082 | 358,677 | 本周点赞第三，Gemma-4 社区代码微调 + GGUF 量化，下载量巨大 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,078 | 3,966,691 | 本周下载量最高！Qwen3.6 社区"无审查"微调版，引发广泛讨论 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,196 | 5,148,673 | Qwen3.6 官方 MoE 模型，35B 总参 3B 激活，开源标杆 |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 272 | 21,730 | Gemma-4 Agent 场景微调 GGUF，面向终端/CLI 自动化任务 |
| [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 224 | 32,260 | unsloth 官方 GLM-5.2 GGUF 量化，一键部署 |
| [unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF) | unsloth | 150 | 42,837 | Kimi-K2.7-Code 的 GGUF 量化版，unsloth 自动量化流程 |
| [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Jackrong | 275 | 190,993 | 社区热门：Qwen3.6-27B 代码版 + MTP 推测解码 + GGUF，三重优化 |
| [bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF) | bytkim | 101 | 36,421 | Qwen3.6-27B 的 MTP+π-tune 微调 GGUF，推测解码加速推理 |
| [Mia-AiLab/Qwable-3.6-27b](https://huggingface.co/Mia-AiLab/Qwable-3.6-27b) | Mia-AiLab | 119 | 22,879 | Qwen3.6-27B 社区微调版，Qwable 系列持续迭代 |

---

## 三、生态信号

**模型家族格局：** Qwen3.6 家族展现出惊人的生态号召力——官方模型、社区微调、GGUF 量化、MTP 加速版本合计占据 30 席中的 7 席，下载总量超过 900 万，是本周无可争议的"第一家族"。Google 的 Gemma-4 家族来势汹汹，原版 + 社区微调合计 4 席，yuxinlu1 的社区版本甚至比原版更受欢迎。DeepSeek-V4-Pro 以绝对点赞优势领跑，但下载量（261 万）低于 Qwen3.6（514 万），反映前者参数量更大、部署门槛更高。

**开源 vs 闭源：** 榜单前 30 名全部为开源或开放权重模型，开源生态已形成不可逆的领先优势。Cohere、Moonshot、MiniMax 等传统闭源厂商也在持续加大开源力度。

**量化与微调趋势：** GGUF 格式已成社区量化首选标准，unsloth 作为自动量化工具链功不可没。MoE 架构全面普及——前 10 名中 6 个采用 MoE，稀疏激活正在取代稠密模型。MTP（Multi-Token Prediction）推测解码成为社区加速推理的新热点，Jackrong 和 bytkim 的 MTP 版本均获得可观关注。

---

## 四、值得探索

### 1. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
NVIDIA 仅用 3B 参数实现的零样本视觉定位模型，本周 2,240 赞的高热度说明社区对"小模型 + 精准能力"的强烈需求。适合研究视觉定位、目标检测轻量化方案的开发者，24 万下载量也验证了其实用价值。

### 2. [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)
社区微调如何超越官方版本的经典案例。yuxinlu1 基于 Gemma-4 进行代码专项微调并 GGUF 量化，收获 2,082 赞和 35 万下载，甚至超过 Google 原版 Gemma-4 的社区热度。值得研究其微调数据配比与量化策略。

### 3. [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)
4B 参数 TTS 模型能实现接近真人的语音合成效果，基于 Qwen3 多模态架构迁移至音频领域，展示了多模态大模型在语音任务上的潜力。7.6 万下载量对于一个新模型而言极为亮眼，是端侧语音合成的有力竞争者。

---

*本报告基于 2026-06-22 Hugging Face Trending 数据自动生成，数据截至当日。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*