# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 02:08 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-26

---

## 📰 今日速览

1. **GLM-5.2（Z.ai）以 4.4k 点赞登顶**，确立 MoE 大模型在开源社区的标杆地位，下载量超 70 万。
2. **Qwen 3.6 MoE 家族全面爆发**：官方基座模型下载破 640 万，社区衍生出多个“去审查/角色扮演” GGUF 版本（HauhauCS、DavidAU、LuffyTheFox 等），合计下载超 400 万，显示高性能 MoE 架构极强的社区适配性。
3. **OCR 与文档理解成“必争之地”**：百度 **Unlimited-OCR** 以 3.1k 点赞、256 万下载领跑，ATH-MaaS OvisOCR2 紧随其后，多模态模型向垂直场景渗透加速。
4. **极致量化技术落地提速**：prism-ml 推出 1-bit 与 2-bit (Ternary) 量化模型 Bonsai 系列，单模型下载均超 60 万，证明超低比特量化已具备实用价值。
5. **具身智能/机器人模型崭露头角**：OpenBMB 发布 MiniCPM-RobotManip 与 RobotTrack，标志着 VLA（Vision-Language-Action）模型进入开源主流视野。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,447 / 707,029 | **今日王者**。MoE 架构旗舰大模型，综合能力极强，开源权重引发社区广泛基准测试与部署热潮。 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 662 / 45,260 | 代码能力特化的中型模型，配套 GGUF、NVFP4 多种量化版本同步发布，适配推理加速引擎。 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 563 / 2,784 | 250B 参数稀疏模型，主打高效推理，虽下载量暂低但架构设计值得关注。 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 406 / 11,573 | 国产小参数强模型，适配边缘侧部署，中文基准表现优异。 |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 191 / 2,270 | 新兴架构尝试，主打特征提取与长上下文，处于早期探索阶段。 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 163 / 5,661 | 1B 参数安全/安防领域专用模型，GraniteMoE 混合架构，极致轻量化。 |

---

### 🎨 多模态与生成（视觉语言、图像生成、机器人、世界模型）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,516 / 6,413,105 | **多模态 MoE 基座王者**。35B 激活 3B，原生支持视觉/文本，社区微调生态核心底座。 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,107 / 2,564,264 | **OCR 领域 SOTA 代表**。无限长文本、复杂版面识别能力强，工业级文档解析首选。 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,571 / 31,575 | 多模态对话新秀，架构创新（inkling_mm_model），交互体验流畅。 |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,277 / 749,449 | Kimi 代码特化多模态版，强推理+视觉理解，Compressed-tensors 量化部署友好。 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 277 / 1,156 | 文生图/图编辑统一流模型，Diffusers 生态，编辑遵循指令能力强。 |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 121 / 31,759 | 边缘端世界模型，面向自动驾驶/机器人物理仿真，Nvidia 硬核加持。 |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 175 / 607 | **VLA 模型代表作**。面向机器人操作的视觉-语言-动作模型，具身智能落地关键。 |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 128 / 379 | 机器人视觉跟踪专用 VLA，配合 Manip 形成感知-决策闭环。 |
| [**microsoft/Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 90 / 1,039 | Computer Use 方向，支持 GUI 操作与工具调用的多模态 Agent 基座。 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 287 / 33,109 | 基于 Qwen3.5 的 OCR 微调版，中文场景优化显著，轻量级部署友好。 |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 99 / 1,977 | GLM-5.2 视觉版 NVFP4 量化，SGLang 极速推理，多模态部署参考范本。 |

---

### 🔧 专用模型（代码、数学、语音、安全）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 166 / 841 | 基于 Qwen3.5 MoE 的代码生成微调，Dev 版本针对工程任务优化。 |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 84 / 47 | **TTS 新标杆**。极致轻量（Micro）、CPU/边缘端实时语音合成，Local-First 典范。 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 163 / 5,661 | 安全/合规领域 1B 小模型，GraniteMoE 混合架构，私有化部署首选。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ、极致低比特）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored...**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,091 / 1,988,680 | **社区微调下载王**。去审查/角色扮演强化，GGUF 全量化系列，消费级显存跑 35B MoE。 |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,028 / 611,685 | **2-bit 三元量化里程碑**。Ternary (1.58bit) 技术实用化，模型体积极小且保持高智商。 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 638 / 2,114,965 | **1-bit 量化奇迹**。单模型下载破 210 万，证明 1-bit LLM 已可用于实际对话场景。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion...**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncens

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*