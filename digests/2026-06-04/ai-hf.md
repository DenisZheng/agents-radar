# Hugging Face 热门模型日报 2026-06-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-04 00:48 UTC

---

# Hugging Face 热门模型日报 · 2026-06-04

---

## 📌 今日速览

本周 Hugging Face 热度榜被 **DeepSeek-V4 系列**强势霸榜，Pro 版以 4,597 赞、Flash 版以 1,384 赞分列第一和第三，合计下载量近千万，标志着 DeepSeek 第四代架构已全面进入主流采用阶段。**NVIDIA** 成为本周最活跃的基础模型厂商，一口气推出 Cosmos3 系列（Nano/Super/Text2Image/Image2Video）、PiD 超分模型、LocateAnything-3B 视觉定位模型及 Qwen3.6 量化版，覆盖视觉理解、生成与部署全链路。**Qwen3.6 MoE 家族**持续发酵，原版、量化版、社区微调版（含 uncensored 变体）合计下载量突破 400 万，成为本周下载量最大的模型家族。端侧小模型同样亮眼，LiquidAI LFM2.5-8B-A1B 和 openbmb MiniCPM5-1B 以极低参数实现可用推理，配合 GGUF 量化生态加速边缘部署。视频生成赛道热度不减，Sulphur-2-base 以 1,532 赞跻身总榜第二，基于 LTX-2.3 的社区微调正在快速扩散。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,597 | 5,811,046 | DeepSeek 第四代旗舰，本周点赞王，下载量近 600 万，代表当前开源 LLM 最高水准之一 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,384 | 3,542,202 | V4 轻量版，MIT 许可，下载量超 350 万，适合低延迟推理场景 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,346 | 2,602,333 | Qwen3.6 MoE 的社区"去审查"微调版，下载量高达 260 万，反映社区对开放权重模型的强烈需求 |
| [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 756 | 68,494 | 仅 1B 参数的端侧小模型，openbmb 出品，适合移动端和嵌入式部署 |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 478 | 60,171 | LiquidAI 的混合专家小模型，8B 总参数仅激活 1B，主打高效推理 |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 181 | 6,938 | JetBrains 推出的思考链模型，12B 参数激活 2.5B，面向代码与推理场景 |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 545 | 155,558 | 1B 参数的语言模型，下载量超 15 万，在小模型赛道表现突出 |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 169 | 463 | Google Gemma 4 指令微调版，统一多模态架构，但当前下载量较低，可能刚发布 |
| [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 112 | 10 | Gemma 4 基础版，any-to-any 统一架构，目前下载量极少，处于早期阶段 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,532 | 1,666,353 | 基于 LTX-2.3 的视频生成社区微调，下载量 166 万，本周总榜第二 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,159 | 78,925 | NVIDIA 视觉定位模型，3B 参数实现图像中的目标定位与理解 |
| [bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 1,021 | 3,309 | ByteDance 的 any-to-any 多模态模型，支持图像与视频生成，架构统一 |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 231 | 17,965 | 阶跃星辰的视觉语言模型，支持图像理解与生成 |
| [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 503 | 282 | 美团 LongCat 视频数字人模型，支持音频+文本到视频化身生成 |
| [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) | nvidia | 134 | 14,722 | NVIDIA Cosmos3 系列轻量版，面向世界模型与视觉理解 |
| [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super) | nvidia | 113 | 3,946 | Cosmos3 旗舰版，多模态世界模型 |
| [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | 95 | 699 | Cosmos3 图像到视频生成专用版 |
| [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | 91 | 829 | Cosmos3 文本到图像生成专用版 |
| [nvidia/PiD](https://huggingface.co/nvidia/PiD) | nvidia | 287 | 778 | NVIDIA 图像超分辨率模型，基于扩散方法 |
| [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 95 | 89 | ByteDance 图像到视频渲染模型，Apache 2.0 许可 |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 90 | 19 | Ideogram 4 FP8 量化版文本到图像模型 |
| [OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5) | OpenMOSS-Team | 137 | 23,978 | 中文 TTS 模型，支持延迟控制，下载量近 2.4 万 |
| [NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 510 | 18,315 | 2B 参数的视频理解模型，基于 Qwen3.5 架构 |
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 213 | 4,829 | 百度 PaddleOCR 视觉语言版，基于 ERNIE4.5，专注 OCR 场景 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

本周榜单中专用领域模型相对较少，但以下模型值得关注：

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 213 | 4,829 | 基于 ERNIE4.5 的视觉语言 OCR 专用模型，适合文档理解场景 |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 181 | 6,938 | JetBrains 出品，面向代码与逻辑推理的 Thinking 模型 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话说明 |
|---|---|---|---|---|
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 154 | 470,059 | NVIDIA 官方 FP4 量化版 Qwen3.6 MoE，下载量 47 万，大幅降低部署门槛 |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 629 | 1,016,595 | Unsloth 量化的 Qwen3.6 GGUF 版，下载量超 100 万，社区量化标杆 |
| [LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF) | LiquidAI | 174 | 87,045 | LFM2.5 官方 GGUF 量化版，适配 llama.cpp 生态 |
| [stepfun-ai/Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF) | stepfun-ai | 102 | 41,522 | Step-3.7-Flash 的 GGUF 量化版，支持 imatrix 优化 |
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 126 | 0 | Unsloth 量化的 Gemma 4 GGUF 版，刚上线尚未有下载 |
| [Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF) | Jackrong | 209 | 175,269 | 社区量化的 Qwen3.6 27B MTP 版，下载量 17.5 万 |

---

## 🌊 生态信号

本周最显著的生态信号是 **DeepSeek-V4 系列的全面接管**——Pro 和 Flash 两款合计下载量近千万，且 Flash 采用 MIT 许可，意味着企业可自由商用，这将进一步加速 DeepSeek 生态的扩张。**Qwen3.6 MoE 家族**成为本周下载量最大的模型谱系，原版、NVIDIA 官方 FP4 量化版、Unsloth GGUF 版及社区微调版合计下载量突破 400 万，MoE 架构的高效推理优势正在被广泛认可。**NVIDIA** 本周以 6 款模型成为最活跃厂商，Cosmos3 系列（覆盖文本、图像、视频、世界模型）和 PiD 超分模型显示 NVIDIA 正从芯片厂商向基础模型平台转型。**端侧部署趋势**加速，GGUF 量化模型占据榜单近 1/3 席位，Unsloth 和 llama.cpp 生态成为社区量化的首选工具链。**开放权重 vs 闭源**的天平继续向前者倾斜，榜单前 10 中 9 款为开源或开放权重模型，仅 ideogram-4 为闭源商业模型的量化版本。

---

## 💎 值得探索

### 1. [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
**推荐理由：** MIT 许可 + 350 万下载量，是本周最具实用价值的开源 LLM。Flash 版在保持 V4 架构优势的同时大幅降低推理成本，适合需要快速落地的生产环境。其 MIT 许可意味着无商业使用限制，是企业级应用的首选。

### 2. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**推荐理由：** 视觉定位是计算机视觉的核心任务之一，NVIDIA 以 3B 参数实现这一能力，且下载量已达 7.8 万，说明社区需求旺盛。该模型可与 VLM 管线结合，用于机器人感知、自动驾驶和智能监控等场景，值得深入研究其架构设计。

### 3. [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)
**推荐理由：** 基于 LTX-2.3 的视频生成社区微调，166 万下载量和 1,532 赞表明社区对高质量视频生成模型的渴求。视频生成是当前多模态赛道最热门的垂直方向，该模型为研究社区微调如何提升生成质量提供了优秀案例。

---

*数据来源：Hugging Face Hub · 统计周期：周榜 · 生成时间：2026-06-04*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*