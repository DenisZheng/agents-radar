# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 02:04 UTC

---

---

# 📊 Hugging Face 热门模型日报 | 2026-07-17

### 今日速览
今日榜单呈现 **“MoE 架构称霸、极致量化普及、多模态原生化”** 三大核心趋势。Z.ai 发布 **GLM-5.2**（4k+ 赞）与腾讯 **Hy3** 领衔新一代 MoE 大模型；Prism-ML 推出 **1-bit / 2-bit (Ternary) Bonsai** 将量化推向极限；Qwen3.5/3.6 系列成为社区微调、多模态适配（Inkling, Qwythos, HauhauCS）与非审查版本的绝对主力基座。百度 **Unlimited-OCR** 与 **Needle** 凸显专用工具模型落地加速。整体生态已从“追参数量”转向“推理效率、部署友好与垂类能力”竞争。

---

### 热门模型

#### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,029 / 513,061 | **今日榜首**。新一代 MoE 架构 (glm_moe_dsa)，原生支持工具调用与长上下文，中英性能强劲，开源权重引爆社区。 |
| **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | tencent | 813 / 11,849 | 腾讯混元最新 MoE 大模型 (hy_v3)，主打中文理解与生成，Apache 2.0 协议，企业级落地首选。 |
| **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | deepreinforce-ai | 902 / 1,785,575 | 基于 Qwen 架构的高性能指令微调版，提供全量化 GGUF，下载量破 170 万，本地部署热门选择。 |
| **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | InternScience | 568 / 33,400 | 基于 Qwen3.5 MoE 的 Agent 专用模型，强化 Function Calling 与规划能力，面向智能体工作流。 |
| **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** | GnLOLot | 131 / 4,117 | 利用 Claude Opus 合成数据蒸馏的 1B 小模型，注入强推理能力，边缘端部署极具性价比。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 2,787 / 2,328,315 | **多模态 MoE 非审查版巅峰**。Qwen3.6 35B-A3B 视觉版，去除安全对齐，下载量超 230 万，创作自由度极高。 |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,237 / 2,042,670 | 基于 Qwen3.5 的 9B 多模态模型，注入 Claude Mythos 数据增强推理，全 GGUF 量化，消费级显存即可跑通。 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 2,011 / 1,852,722 | 百度开源无限分辨率 OCR 模型，支持超长文本、复杂版面，文档数字化场景 SOTA 级方案。 |
| **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 813 / 4 | 新兴多模态架构 (inkling_mm_model)，主打图文交错理解与生成，早期发布但关注度极高。 |
| **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | bottlecapai | 389 / 8,238 | Qwen3.6 27B 视觉指令微调版，强化链式思维与视觉推理，适合复杂视觉问答任务。 |
| **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | 136 / 3,678 | 基于 Qwen3.5 的轻量级 OCR 专用多模态模型，推理速度快，适合移动端/边缘部署。 |
| **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | Wan-AI | 92 / 1,884 | 图生视频 (I2V) 专用模型，主打人物舞蹈动作生成，视频生成垂类细分领域探索。 |
| **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS-Team | 232 / 75,105 | 语音转写+说话人分离一体化模型，中文会议/播客场景实用性强，下载量领跑音频榜。 |
| **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 322 / 0 | Krea-2 基座上的 LoRA，实现身份保持的图像编辑，ComfyUI 生态活跃产物。 |
| **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Alissonerdx | 167 / 0 | LTX-Video 视频生成的身份保持 LoRA，Reference-to-Video 技术落地典范。 |
| **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)** | Cseti | 77 / 0 | 视频生成 IC-LoRA，实现多视角一致性控制，视频生成可控性研究前沿。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入、工具调用）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 | 1,208 / 506,068 | **Agentic 编码神器**。Gemma-4 12B 微调，强化终端操作、代码生成与规划，GGUF 格式即插即用。 |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 248 / 733 | 基于 JAX 的 Function Calling 专用小模型，专为工具调用、结构化输出设计，Agent 基础设施关键组件。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 924 / 0 | **工程必备工具包**。修复 Qwen 系列各版本 Chat Template 兼容性问题，支持 MLX/Jinja，避免推理格式报错。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ、极致压缩）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 608 / 74,007 | **极致量化标杆**。27B 模型压缩至 **2-bit (Ternary)**，GGUF 格式，几乎无损保留能力，重新定义本地大模型门槛。 |
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 342 / 559,267 | 配套 **1-bit 量化版**，下载量超 55 万，验证超低位宽下大模型可用性边界。 |
| **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** | unsloth | 216 / 1,712,974 | Unsloth 优化的 **NVFP4 (4-bit) 量化**，针对 H100/Ampere 架构加速，推理吞吐极致优化，下载量最高。 |
| **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | AngelSlim | 117 / 80,796 | 社区首发 Hy3 全系列 GGUF 量化，填补腾讯新模型本地部署空白。 |
| **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** | jlnsrk | 119 / 2,621 | GLM-5.2 首个 **INT4 CPU 专用量化**，引入 Expert Streaming 技术，MoE 模型在 CPU 上高效推理。 |
| **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** / **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*