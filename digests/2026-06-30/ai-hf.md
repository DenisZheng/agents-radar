# Hugging Face 热门模型日报 2026-06-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-30 00:38 UTC

---

# Hugging Face 热门模型日报

**2026 年 6 月 30 日（周日）**

---

## 一、今日速览

本周 Hugging Face 榜单呈现出三大核心趋势：**Qwen 3.5/3.6 生态全面爆发**，从基础模型到 MoE、量化、社区微调全面铺开，其中 HauhauCS 的 Qwen3.6-35B-A3B 微调版下载量突破 300 万次，堪称本周最大黑马；**GGUF 量化模型持续霸榜**，前十名中有七个为 GGUF 格式，unsloth 和 HauhauCS 成为社区量化的主力军；**国产模型密集亮相**，百度 Unlimited-OCR、智谱 GLM-5.2、DeepSeek-V4 系列集中发力，中国大模型在开源生态中的能见度显著提升。此外，NVIDIA 的 NVFP4 量化模型也标志着硬件厂商正深度参与模型优化链路。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|------|------|--------|--------|------|
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 2,934 | 133,350 | 智谱最新 GLM-5.2 MoE 架构模型，采用 DSA 稀疏注意力机制，以 2,934 赞高居榜首，是本周最受关注的通用大模型 |
| [deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) | deepreinforce-ai | 239 | 38,857 | 基于 Qwen3.5-MoE 微调的高性能推理模型，另有 9B / 397B 版本覆盖不同算力需求 |
| [deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | deepreinforce-ai | 274 | 19,170 | Ornith-1.0 的轻量版，9B 参数适合本地部署，MIT 许可证友好 |
| [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | deepseek-ai | 212 | 5,460 | DeepSeek V4 Pro 版本，专注深度推理与长链思考，arXiv 论文同步发布 |
| [deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark) | deepseek-ai | 95 | 2,239 | DeepSeek V4 Flash 版，低延迟推理场景优化，适合实时对话应用 |
| [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Qwen | 435 | 26,223 | 通义千问面向 Agent 场景的 MoE 模型，35B 总参数 / 3B 激活，高效执行工具调用与多步推理 |
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 749 | 63,449 | 微博 AI 推出的 3B 数学推理小模型，在低参数预算下展现出色数学能力 |
| [LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M) | LiquidAI | 151 | 15,463 | 仅 230M 参数的液态Foundation模型，面向端侧和边缘设备推理 |
| [Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) | Chunjiang-Intelligence | 130 | 1,463 | 基于 DeepSeek V4 的网络安全领域微调版，专注代码安全审计与漏洞检测 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|------|------|--------|--------|------|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,481 | 728,320 | NVIDIA 发布的 3B 视觉定位模型，以 2,481 赞成为多模态类别最高人气模型，支持开放词汇目标定位 |
| [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | krea | 392 | 38,454 | Krea 2 图像生成 Turbo 版，低延迟高质量文生图，基于 Krea-2-Raw 蒸馏优化 |
| [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw) | krea | 245 | 27,464 | Krea 2 基础文生图模型，Turbo 版的预训练底座 |
| [fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA) | fal | 115 | 0 | 面向 LTX-2.3 视频生成模型的 3D 风格 LoRA 适配器，下载量为 0 说明刚发布 |
| [ilkerzgi/fal-Krea-2-Style-LoRAs](https://huggingface.co/ilkerzgi/fal-Krea-2-Style-LoRAs) | ilkerzgi | 75 | 0 | Krea-2 风格化 LoRA 合集，社区创作者为新模型快速贡献风格适配 |
| [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2) | Comfy-Org | 190 | 10 | ComfyUI 官方适配的 Krea-2 节点封装，下载量极低说明刚上线 |

### 🔧 专用模型（代码、数学、医疗、嵌入、语音、OCR）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|------|------|--------|--------|------|
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1,368 | 362,945 | 百度开源的高性能 OCR 模型，支持多语言无限场景文字识别，下载量 36 万+ 显示 OCR 赛道的刚需属性 |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 742 | 76,154 | NVIDIA 仅 0.6B 参数的流式 ASR 模型，面向实时语音识别场景，极致轻量 |

### 📦 微调与量化（社区微调、GGUF、NVFP4）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|------|------|--------|--------|------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,332 | 3,089,944 | **本周下载量冠军（309 万次）**，Qwen3.6-35B 的社区微调版，含视觉能力，GGUF 格式 |
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 2,501 | 561,577 | Gemma 4 12B 代码专用微调 + GGUF 量化，2,501 赞显示社区对代码模型需求旺盛 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 943 | 907,682 | 9B 推理模型 GGUF 量化版，1M 超长上下文，下载量近 91 万次 |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 843 | 241,409 | Gemma 4 12B Agent 专用微调版，面向自主代理场景优化工具调用能力 |
| [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 464 | 164,180 | unsloth 团队对 GLM-5.2 的官方 GGUF 量化，让这款热门模型可在消费级硬件运行 |
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 378 | 5,392,518 | **全榜下载量最高（539 万次）**，NVIDIA 使用 NVFP4 精度量化 Qwen3.6，展示 Blackwell 架构的 4-bit 推理优势 |
| [nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4) | nvidia | 170 | 81,944 | NVIDIA 对 GLM-5.2 的 NVFP4 量化版，硬件厂商与模型厂商的深度合作范例 |
| [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 482 | 123,598 | Ornith-1.0 35B 的 GGUF 量化版，降低推理门槛 |
| [deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) | deepreinforce-ai | 305 | 68,667 | Ornith-1.0 9B 量化版，适合低显存设备 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | empero-ai | 558 | 79,540 | Qwythos-9B 非量化版，保留完整精度，适合有足够显存的用户 |
| [unsloth/Qwen-AgentWorld-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen-AgentWorld-35B-A3B-GGUF) | unsloth | 113 | 116,693 | unsloth 对 AgentWorld 的 GGUF 量化，让 Agent 模型也可本地部署 |
| [HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced) | HauhauCS | 107 | 46,053 | Gemma 4 12B 的 QAT 量化微调版，平衡模式，支持视觉多模态 |

---

## 三、生态信号

**Qwen 生态全面领跑。** 本周榜单中，Qwen 系模型（含社区微调）占据至少 8 个席位，覆盖基础模型（AgentWorld-35B）、社区微调（HauhauCS 的 Qwen3.6 系列）、NVIDIA 硬件量化（NVFP4）等多个维度。Qwen3.6-35B-A3B 的 NVFP4 版以 539 万次下载量成为全榜之最，说明"开源权重 + 硬件厂商量化"的组合拳正在释放巨大势能。

**GGUF 已成社区量化的绝对主流。** 30 个模型中有 12 个为 GGUF 格式，unsloth 和 HauhauCS 是最活跃的两大量化贡献者。HauhauCS 一人贡献了 3 个模型（Qwen3.6 微调、Gemma4 QAT），且下载量均极为可观，成为社区微调领域的新晋核心力量。

**国产模型密集发力。** 百度（Unlimited-OCR）、智谱（GLM-5.2）、DeepSeek（V4 双版本）、微博 AI（VibeThinker-3B）四家企业模型同时上榜，GLM-5.2 以 2,934 赞位居总榜第一，显示国产大模型在开源社区的影响力持续攀升。

**硬件厂商深度入局。** NVIDIA 不仅贡献了 LocateAnything-3B 和 nemotron ASR 两个专用模型，还主动为 Qwen3.6 和 GLM-5.2 做 NVFP4 量化，标志着硬件企业正从"算力提供者"向"模型生态参与者"转型。

**Agent 与代码场景火热。** Qwen-AgentWorld、Ornith 系列、Gemma-4-coder、Gemma-4-agentic 等面向 Agent 和代码的模型密集出现，反映开发者社区对实用型、工具调用型模型的强烈需求。

---

## 四、值得探索

### 1. 🔍 [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — 本周最值得研究的通用大模型

智谱的 GLM-5.2 以 2,934 赞领跑总榜，采用 MoE + DSA（Dynamic Sparse Attention）架构，在推理效率和性能之间取得了新平衡。对于关注下一代 LLM 架构方向的研究者而言，这是 2026 年上半年最重要的开源模型之一。同时 NVIDIA 已推出官方 NVFP4 量化版，unsloth 提供 GGUF 版，部署选择丰富。

### 2. 🧩 [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — 社区微调的标杆之作

309 万次下载量足以说明一切。这个模型展示了社区力量如何将一个优秀的基座模型推向极致——在 Qwen3.6-35B 的基础上进行深度微调，保留视觉能力的同时释放模型潜力。研究其微调方法、数据配比和评测结果，对理解后训练时代的技术走向极具价值。

### 3. 🎯 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) — 多模态轻量化的未来方向

仅 3B 参数却获得 2,481 赞和 72 万次下载，NVIDIA 这款视觉定位模型证明了"小而精"的多模态模型存在巨大需求。它支持开放词汇的目标定位，可应用于图像理解、视觉搜索、辅助视觉等场景。对于关注边缘端多模态部署的开发者，这是一个绝佳的起点。

---

*本报告基于 2026 年 6 月 30 日 Hugging Face Hub 周点赞排行榜生成，数据截至当日。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*