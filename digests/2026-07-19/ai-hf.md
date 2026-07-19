# Hugging Face 热门模型日报 2026-07-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-19 02:04 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-19

---

## 🚀 今日速览

1. **Qwen 3.5/3.6 与 MoE 架构持续霸榜**：从原厂 `google/gemma-4-31B-it` 到社区 `HauhauCS/Qwen3.6-35B-A3B`、`zai-org/GLM-5.2`，大参数 MoE 与强推理模型成下载核心驱动力。  
2. **极致量化（1-bit/2-bit/ternary）成主流交付形态**：`prism-ml` 同一天推出 Bonsai 27B 的 1-bit、2-bit、GGUF、MLX 全套矩阵，下载量破百万，证明“能在消费级显存跑”已成硬指标。  
3. **多模态向“专用化”分层**：`baidu/Unlimited-OCR`、`ATH-MaaS/OvisOCR2` 聚焦 OCR；`Wan-AI/Wan-Dancer-14B`、`Cseti/LTX2.3...` 切入视频生成/一致性编辑，通用 VLM 让位于垂直 SOTA。  
4. **工程化工具链模型化**：`froggeric/Qwen-Fixed-Chat-Templates`（修正聊天模板）、`Cactus-Compute/needle`（Function Calling）等“非权重型”模型高票，反映部署落地痛点正被显式建模。  
5. **中小模型“蒸馏+思维链”成新范式**：`GnLOLot/MiniCPM5-1B-...-Thinking` 系列用 1B 参数承载 Opus 级推理，GGUF 量化后周下载 17 万+，边缘侧部署迎来爆发前夜。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|----|----|------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,126 | 541,662 | 国产 MoE 旗舰升级，DSA 稀疏注意力+专家流式推理，长文本与代码基准双强。 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 3,263 | 12,608,008 | Gemma 4 系列最大开放权重模型，原生多模态、128k 上下文，部署友好。 |
| **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | tencent | 829 | 13,571 | 混元三代基座，中英双语+代码+工具调用全对齐，Apache-2.0 可商用。 |
| **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | InternScience | 579 | 35,575 | 基于 Qwen3.5-MoE 的 Agent 专用微调，强化 Function Calling 与多步规划。 |
| **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** | GnLOLot | 143 | 5,271 | 1B 参数蒸馏 Opus 思维链，边缘侧可跑复杂推理，GGUF 版更热（见量化榜）。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|----|----|------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 3,263 | 12,608,008 | **兼列此处**：原生 image-text-to-text，单模型统一图文理解生成。 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 2,025 | 2,088,470 | 无限分辨率 OCR，支持任意长宽比、密集文本、手写体，文档数字化首选。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 2,866 | 2,190,398 | 35B MoE 视觉推理“解限版”，A3B 稀疏激活兼顾速度与多模态基准。 |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,315 | 2,112,869 | Qwen3.5 9B 蒸馏 Claude 数据+长上下文，GGUF 量化即插即用。 |
| **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | bottlecapai | 437 | 10,445 | 强化思维链的 27B 多模态模型，擅长视觉推理与逐步解题。 |
| **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | 170 | 13,750 | 基于 Qwen3.5 的轻量 OCR 专用模型，推理快、显存低。 |
| **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | Wan-AI | 114 | 2,328 | 图生视频舞蹈生成，动作连贯、身份保持，内容创作新工具。 |
| **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS-Team | 259 | 86,385 | 语音转写+说话人分离一体化，会议/播客自动化首选。 |
| **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** | OpenMOSS-Team | 77 | 529 | 实时视频流理解，低延迟视觉问答/字幕生成。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 工程工具）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|----|----|------------|
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 268 | 935 | JAX 实现的 Function Calling 专用小模型，工具调用准确率高、延迟极低。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 941 | 0 | **非权重资产**：修复 Qwen 3.5 系列聊天模板 Jinja 错误，部署必装。 |
| **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 395 | 0 | Krea-2 Raw 专用 LoRA，单图保真身份编辑，ComfyUI 直连。 |
| **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)** | Cseti | 91 | 0 | LTX-Video 22B 的 IC-LoRA，跨视角一致性生成，小说视图合成。 |
| **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Alissonerdx | 187 | 0 | LTX-Video 人脸身份保持 LoRA，Reference-to-Video 质量 SOTA。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / MLX / 极致低比特）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|----|----|------------|
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 444 | 1,218,815 | **下载王**：Qwen3.5 27B 1-bit GGUF，单 24GB 显存跑满血推理。 |
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 737 | 301,893 | 三元量化（-1/0/1）2-bit 版，精度损失<1%，CPU 推理极快。 |
| **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** | prism-ml | 127 | 20,639 | Apple Silicon 原生 MLX 1-bit，统一内存机器零拷贝加速。 |
| **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** | prism-ml | 111 | 17,063 | MLX 三元量化版，MacBook Pro M3 Max 跑 27B 流畅对话。 |
| **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** | unsloth | 96 | 6,461 | Unsloh 优化的 Inkling MoE GGUF，支持音频/图像/文本三模态。 |
| **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | AngelSlim | 127 | 100,768 | 腾讯混元三代全系列 GGUF 打包，Apache-2.0 商用无忧。 |
| **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** | empero-ai | 169 | 103,504 | Qwythos 9B v2 多模态 GGUF 矩阵，含多量化等级。 |
| **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | GnLOLot | 277 | 172,409 | 1B 思维链模型 GGUF 量化，手机/嵌入式端侧推理首选。 |
| **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** | GnLOLot | 114 | 19,279 | V2 版本强化数学/代码推理，体积更小。 |
| **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** | jlnsrk | 132 | 3,869 | GLM-5.2 专家流式 INT4，CPU 单机部署大 MoE 新范式。 |

---

## 📡 生态信号深度解析（~160 字）

**模型家族势头**：Qwen 3.5/3.6 与 GLM-5.x 形成“双极领跑”，MoE 稀疏激活成大参数标配；MiniCPM 等小模型蒸馏链条成熟，构建“云大边小”完整梯队。  
**开源 vs 闭源**：头部厂商放出 Apache-2.0 基座权重，社区以量化、微调、模板修复等**工程化资产**补全落地拼图，闭源模型仅保留训练数据/算力护城河。  
**量化/微调热点**：1-bit/ternary 量化从“实验性”转为“生产级”，MLX 与 GGUF 双生态并行覆盖 Apple/通用硬件；专用 LoRA（OCR、视频一致性、身份保持）与 Function Calling 小模型，标志着**垂直场景适配**超越通用基准竞赛成为新增量。

---

## 💎 值得探索的 3 个模型

| 模型 | 探索理由 |
|------|----------|
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | **极致性价比基准**：单张 24GB 消费卡跑 27B MoE 满血推理，量化损失极低，适合本地化部署 PoC 与成本敏感型产品。 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | **文档智能化杀手锏**：无限分辨率+密集文本+手写体三合一，下载量 200 万+ 验证生产可用性，直接替代商业 OCR API。 |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | **Agent 基础设施新范式**：JAX 编写、纯 Function Calling 小模型，延迟亚秒级，可作为大模型 Router 或边缘网关，重新定义工具调用架构。 |

---

*数据说明：点赞/下

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*