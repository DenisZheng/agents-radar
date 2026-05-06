# Hugging Face 热门模型日报 2026-04-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-25 00:15 UTC

---

# Hugging Face 热门模型日报 | 2026-04-25

---

## 今日速览

本周 Hugging Face 热度被 **DeepSeek-V4** 与 **Qwen3.6** 两大系列主导，前者以 Pro/Flash 双版本抢占高端推理与轻量部署场景，后者凭借 27B/35B-A3B 的 MoE 架构成为社区量化微调的首选基座。Google **Gemma-4-31B** 以超 545 万下载量验证了其开源多模态路线的商业穿透力，而 **openai/privacy-filter** 的入榜则反映出数据安全工具正在获得前所未有的关注。值得关注的是，"Uncensored" 与 "OBLITERATED" 类社区微调模型持续高下载，显示下游开发者对对齐策略的自主控制需求强烈。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 2,418 | 30 | 本周点赞冠军，DeepSeek 最新旗舰推理模型，Pro 版本定位复杂任务与长上下文场景，下载量极低暗示权重开放策略仍偏谨慎 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 618 | 23 | V4 系列的轻量高速变体，MIT 许可证降低商用门槛，同样面临权重获取限制 |
| **[deepseek-ai/DeepSeek-V4-Pro-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-Base)** / **[Flash-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Base)** | deepseek-ai | 195 / 148 | 3 / 3 | 基座版本采用 FP8 量化与 US 区域部署，几乎零下载显示开发者更偏好指令微调版 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,502 | 204,327 | 智谱新一代 MoE+DSA 架构对话模型，高下载验证其作为国产开源标杆的工程成熟度 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,056 | 469,402 | MiniMax M2 系列迭代，近 47 万下载量表明其在中文对话场景的基建级地位 |
| **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | tencent | 135 | 1,235 | 腾讯混元 V3 预览版，低调入榜但代表国产大厂的持续迭代节奏 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 493 | 101,144 | 对 Gemma-4 进行"消融对齐"的激进微调，10 万+下载反映去审查化需求的规模市场 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 474 | 141,390 | 26B 规模的快速推理版 Uncensored Gemma-4，v2 迭代优化 llama.cpp 兼容性 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 976 | 208,251 | 月之暗面 K2.5 系列迭代版，支持图像-文本交叉模态，压缩张量技术降低显存门槛 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** / **[35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 754 / 1,383 | 162,349 / **861,178** | 通义千问 3.6 代双版本，35B-A3B MoE 模型以 86 万下载成为本周实际部署之王 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | **2,337** | **5,457,597** | 点赞与下载双高的现象级模型，Gemma-4 多模态指令版已突破 545 万下载，开源多模态的里程碑 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 592 | 2,741 | 腾讯混元世界模型 2.0，专注图像到 3D 生成，safetensors 格式保障生产环境安全 |
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 266 | 498 | NVIDIA 最新世界模型，图像到 3D 管线，arXiv 预印本同步发布显示学术-工业联动 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 551 | 7,102 | 百度文心图像生成模型，8B 参数 Apache-2.0 许可证，国产文生图开源的重要尝试 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | **1,228** | 94,124 | 清华 OpenBMB 多语言 TTS 模型，本周语音类最高点赞，支持跨语言语音克隆与风格控制 |
| **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | inclusionAI | 166 | 103 | 任意模态到任意模态的统一生成模型，MoE+Diffusers 架构，低下载但高概念前瞻性 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 686 | 12,664 | OpenAI 官方 PII 检测与脱敏工具，ONNX+Safetensors 双格式，企业合规刚需驱动高关注 |
| **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 141 | 22,460 | 基于 Qwen3.6 MoE 的特征提取专用变体，"DFlash" 暗示动态推理加速优化 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 372 | 340,032 | Unsloth 官方量化版，GGUF 格式覆盖从 Q4 到 Q8 的完整精度谱系 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 740 | **1,397,244** | **本周总下载冠军**，MoE 架构的 GGUF 量化突破 139 万，Unsloth 的推理优化技术成为事实标准 |
| **[unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF)** | unsloth | 104 | 9,757 | Kimi K2.6 的首发量化版，支持压缩张量格式的 llama.cpp 推理 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 416 | 388,836 | 激进去审查的 MoE 微调，"Aggressive" 标签表明对齐剥离的彻底程度，近 39 万下载 |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 134 | 75,561 | 同系列 27B 版本，vision/multimodal 标签保留多模态能力 |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 200 | 70,227 | Qwen3.5+GLM 的 "Frankenmerge" 实验，18B 规模探索异构模型融合的可行性 |
| **[KyleHessling1/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF)** | KyleHessling1 | 95 | 17,725 | 同一 merge 思路的社区复现，低点赞但持续下载显示小众需求存在 |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 175 | 83,694 | 以 Claude 4.6 Opus 为教师的推理蒸馏，尝试将闭源最强推理能力注入开源 MoE 骨架 |

---

## 生态信号

**Qwen 家族已成事实上的开源基建**：Qwen3.6 系列占据 30 席中的 8 席，官方版本与社区衍生形成完整光谱——从 FP8 精度到 GGUF 量化，从标准指令到 Uncensored 变体，再到跨模型蒸馏与融合。这种"核心-卫星"生态是 Llama 之后最成熟的模型家族结构。

**开源权重的"半开放"悖论**：DeepSeek-V4 系列点赞极高但下载极低，暗示权重发布可能采用申请制或受限许可；与之对比，Gemma-4 的 545 万下载证明完全开放的权重仍能捕获商业价值。两种模式的张力将持续定义 2026 年的开源格局。

**量化即分发**：Unsloth 以 3 个 GGUF 模型合计 174 万+下载，确立了"官方发布→Unsloth 量化→社区消费"的标准管道。MoE 架构的 GGUF 支持（Qwen3.6-35B-A3B）是技术突破点，解决了专家路由在边缘设备的效率难题。

**对齐政治的产业化**："Uncensored""OBLITERATED""Aggressive"等标签的模型累计下载超 70 万，表明安全对齐已从技术议题演变为可商品化的服务维度，社区微调者正在填补官方模型与下游需求之间的价值观缝隙。

---

## 值得探索

| 优先级 | 模型 | 理由 |
|:---|:---|:---|
| ⭐⭐⭐ | **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 545 万下载验证的工程-研究双重价值：多模态理解、31B 参数的可部署规模、Google 级别的数据清洗质量。若需一个"不会出错"的生产级开源多模态基座，此为当前最优解。 |
| ⭐⭐⭐ | **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | 139 万下载背后的技术突破——MoE 架构首次在 GGUF 格式下实现消费级 GPU 的高效推理。对于研究模型压缩或需在 RTX 4090 级别硬件运行大模型的开发者，这是必测基准。 |
| ⭐⭐☆ | **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | 低下载但高概念价值：any-to-any 的统一生成框架可能是下一代多模态模型的范式转移。MoE+Diffusers 的架构组合值得跟踪，适合前瞻性研究而非即时部署。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*