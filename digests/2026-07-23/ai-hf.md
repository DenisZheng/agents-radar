# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 02:08 UTC

---

# 📋 Hugging Face 热门模型日报 | 2026-07-23

---

## 🚀 今日速览
本期榜单由 **MoE（混合专家）大模型**、**极低比特量化技术** 与 **多模态原生模型** 三大趋势主导。Z.ai 的 **GLM-5.2**（4.3k 赞）与 Google **Gemma-4-31B**（3.3k 赞）领跑开源权重大模型；百度 **Unlimited-OCR** 与 ATH **OvisOCR2** 推动 OCR 向通用多模态理解融合；Prism-ML 的 **1-bit/2-bit 三元量化 Bonsai 系列** 验证了极限压缩在 27B 级模型上的实用化落地；社区仍以 Qwen3.5/3.6 为底座进行激进微调与未审查版本分发，生态活跃度极高。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
|------|------|-------------|------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,339 / 545,109 | **当周王者**。新一代 MoE 架构（glm_moe_dsa），开放权重，中英代理推理能力强，重新定义开源大模型性能上限。 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 3,328 / 12,113,203 | Gemma 系列首个 30B+ 多模态指令模型，原生支持图文对话，下载量断层领先，部署生态最成熟。 |
| **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | upstage | 266 / 0 | 超大参数开源 MoE 模型，采用 Depth Upscaling 技术，虽暂无下载但架构创新值得跟踪。 |
| **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | 234 / 0 | 国产小参数强模型，主打高密度知识压缩，适合边缘侧部署。 |
| **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | 397 / 3,056 | 代码专用 LLM 新版本，提供原版、GGUF、NVFP4 多种量化形态，覆盖训练到推理全链路。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
|------|------|-------------|------------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 2,716 / 2,237,351 | **下载量霸主**。通用无限长文本 OCR，支持任意分辨率/版面，工业级落地能力极强。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-…](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 3,003 / 1,997,690 | 基于 Qwen3.6 MoE 的**未审查多模态版**，激进指令遵循，社区高热度反映“去对齐”需求持续旺盛。 |
| **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 1,455 / 16,441 | 轻量级多模态 MoE（inkling_mm_model），主打图文对话与推理平衡，同步发布 GGUF 版便于边缘部署。 |
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 1,226 / 722,058 | Kimi 最新代码特化多模态模型，支持长上下文代理编程，压缩张量格式利于推理加速。 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 3,328 / 12,113,203 | *(重复收录)* 原生多模态指令模型，图文理解基准领先。 |
| **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | bottlecapai | 514 / 12,002 | 引入“思考链”机制的 Qwen3.6 多模态微调，增强复杂视觉推理。 |
| **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | 249 / 17,162 | 基于 Qwen3.5 的 OCR 专用多模态模型，中文场景优化显著。 |
| **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | microsoft | 127 / 0 | 流匹配架构的文生图/编辑模型，Diffusers 原生支持，探索非扩散生成范式。 |
| **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Alissonerdx | 235 / 0 | LTX-Video 基座上的身份保持 LoRA，参考图生视频保真度高。 |
| **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS-Team | 308 / 92,265 | 中英语音转写+说话人分离一体化模型，会议/播客场景实用。 |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 914 / 590,230 | 超低延迟流式 ASR 小模型，适配实时语音交互管线。 |
| **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** | nvidia | 90 / 6,623 | 边缘侧世界模型，面向机器人/自动驾驶的物理感知生成。 |

---

### 🔧 专用模型（代码、机器人、嵌入等）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
|------|------|-------------|------------|
| **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | openbmb | 154 / 58 | **VLA（视觉-语言-动作）** 模型，MiniCPM 底座驱动机械臂操作，具身智能关键探索。 |
| **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | openbmb | 114 / 72 | 同系列目标跟踪专用模型，视觉语言联合追踪。 |
| **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** | Motif-Technologies | 161 / 125 | 神经符号推理增强 LLM，主打逻辑一致性与可验证生成。 |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,417 / 2,133,420 | 基于 Qwen3.5 蒸馏 Claude 3.5 思维链的推理特化模型，GGUF 量化即用。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ、MLX）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
|------|------|-------------|------------|
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 946 / 432,196 | **2-bit 三元量化** 27B MoE，极限压缩下保留强推理，llama.cpp 原生跑，重新定义本地大模型门槛。 |
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 596 / 1,404,962 | 1-bit 版本 Bonsai，下载量最高量化模型，证明 1-bit LLM 已可实用。 |
| **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** | prism-ml | 165 / 25,273 | 同模型 **MLX 版**，面向 Apple Silicon 统一内存极致推理。 |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-…-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 323 / 62,842 | 社区“厨神”融合怪作：多底座合并+未审查+MTP 加速，GGUF 全量化分发。 |
| **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** | unsloth | 109 / 0 | Unsloth 优化训练的 Laguna GGUF，vLLM 兼容，推理吞吐优化。 |
| **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** | poolside | 94 / 289 | 官方发布 GGUF，端点兼容标注。 |
| **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** | poolside | 93 / 1,953 | **NVFP4** 格式，针对 Blackwell/H100 Tensor Core 原生加速。 |
| **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** | unsloth | 120 / 7,377 | Inkling 多模态 MoE 的 GGUF 移植，支持音频/图像统一输入。 |
| **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** | GnLOLot | 153 / 51,746 | 1B 小模型蒸馏 Opus 思维链，GGUF 量化，手机端可跑“深度思考”。 |
| **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 497 / 0 | Krea-2 基座上的 **身份保持编辑 LoRA**，ComfyUI 直插，图像编辑工作流核心组件。 |

---

## 📈 生态信号分析

**模型家族势头**：**Qwen3.5/3.6 系** 绝对统治社区微调生态（MoE 稀疏架构易于合并/蒸馏）；**GLM** 与 **Gemma** 确立“官方开源旗舰”双强格局；**MiniCPM** 向 **VLA/具身智能** 延伸成新增长极。  
**开源 vs 闭源**：头部实验室均选择**开放权重+宽松协议**（Apache-2.0/MIT），但训练数据/代码多不公开；“开放权重”成主流妥协形态。  
**量化/微调前沿**：**1-bit/2-bit 三元/二值量化** 在 27B MoE 上跑通（Prism-ML），**NVFP4 / MXFP4** 硬件原生低精度格式随 Blackwell 上线；**模型合并** 仍是社区获取高性能低成本的主力路径（DavidAU 等）；**蒸馏大模型思维链到小模型**（GnLOLot, empero-ai）成标准化范式。

---

## 💎 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — **必测基准**。当前开源 MoE 性能天花板，原生支持工具调用/代理推理，替代闭源 GPT-4o 级任务的首选开放权重。
2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — **极限量化实战**。在消费级 24GB/48GB 显存单卡跑 27B MoE 推理，验证 2-bit 三元量化对推理能力的真实保留率，量化研究必复现。
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — **生产级落地**。任意分辨率/版面/长文档零样本 OCR，配合 Transformers pipeline 三行代码接入，文档数字化/RAG 数据清洗即拿即用。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*