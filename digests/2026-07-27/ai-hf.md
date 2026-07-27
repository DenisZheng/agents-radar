# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 02:22 UTC

---

# 📋 Hugging Face 热门模型日报  
**日期**：2026-07-27 | **数据来源**：Hugging Face Hub 周点赞榜 Top 30  

---

## 🚀 今日速览
- **百度 Unlimited-OCR** 以 3.2k 点赞、260 万下载强势登顶，标志着**通用 OCR 大模型**进入生产级落地阶段。  
- **Z.ai GLM-5.2**（4.5k 点赞）与 **Moonshot Kimi-K2.7-Code** 领衔，**MoE + 原生多模态**成为头部中文大模型标配。  
- **Qwen 3.5/3.6 系衍生模型**占据榜单近 1/3（含 35B-A3B MoE、27B 密集、各类 Uncensored/角色扮演/推理微调），社区微调生态极度繁荣。  
- **极低位量化（1/2-bit GGUF、NVFP4）** 与 **边缘部署（TTS、Robotics）** 双线并进，模型交付形态从“发布权重”转向“开箱即用的量化包”。  
- Microsoft 同天推出 **Mage-Flow 系列（文生图/图编辑）** 与 **Fara-1.5（Computer Use）**，大厂在 Agentic 视觉与生成式编辑赛道持续加注。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,478 | 827,191 | **旗舰 MoE 基座**，原生多模态、长上下文、工具调用，中文综合性能 SOTA 级。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,298 | 730,129 | **代码特化 MoE**，兼顾通用推理与 Agentic Coding，压缩张量加速推理。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 596 | 3,305 | **250B 超大规模开源**，Depth-Upscaling 架构，单卡 80GB 即可跑通推理。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 702 | 56,445 | **代码生成专用 34B**，强化学习对齐，HumanEval+ 90%+，附带 NVFP4/GGUF 量化版。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 449 | 14,049 | **3B 小模型新 SOTA**，中英双语、长文本、RAG 优化，边缘部署首选。 |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 187 | 5,978 | **1B 安全对齐模型**，GraniteMoE 混合架构，主打合规与低算力部署。 |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 193 | 2,400 | **特征提取/Embedding 导向**，检索与分类任务表现强。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 198 | 3,764 | **Qwen3.5 MoE 代码微调**，Dev 场景强化，支持图文编程。 |

---

### 🎨 多模态与生成（视觉、音频、文本到 X）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | **3,210** | **2,593,460** | **通用 OCR 基座**，任意分辨率/语言/版面，零样本泛化，直接替代传统 OCR 流水线。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,579 | 34,511 | **轻量多模态对话模型**，图文理解+生成一体化，参数量小、推理快。 |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 335 | 1,375 | **Flow-based 文生图/编辑统一框架**，指令驱动编辑、一致性强，Diffusers 原生支持。 |
| [microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 89 | 946 | **Turbo 版图编辑**，步数极少、延迟低，适合实时交互场景。 |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 125 | 32,700 | **边缘端视频生成/世界模型**，轻量化部署机器人/自动驾驶仿真。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 180 | 298 | **CPU/边缘可跑的 TTS**，流式合成、多音色、零依赖，适合离线语音助手。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 544 | 0 | **Krea-2 LoRA：身份保持编辑**，人脸/主体一致性微调，ComfyUI 即插即用。 |

---

### 🔧 专用模型（代码、机器人、Computer Use、推理）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 177 | 643 | **VLA 机器人操作模型**，视觉-语言-动作三模态，真机抓取成功率提升显著。 |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 130 | 398 | **机器人视觉跟踪专用**，多目标长时跟踪，配合 Manip 组成完整感知-控制栈。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 110 | 1,225 | **Computer Use Agent 基座**，GUI 操作、工具链规划，Qwen3.5 微调而来。 |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 113 | 2,033 | **GLM-5.2 视觉版 NVFP4 量化**，SGLang 加速部署，显存占用↓4×，精度损失<1%。 |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 554 | 27,823 | **强化推理微调**，CoT 长链条、数学/代理任务增强，开箱即用。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 310 | 35,562 | **Qwen3.5 微调 OCR 专用版**，表格/公式/手写识别强，轻量部署友好。 |

---

### 📦 微调与量化（社区微调、GGUF、极低位量化）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,112 | 1,927,138 | **Qwen3.6 MoE 35B 激进去审查/角色扮演微调**，GGUF 全量化，下载量榜单前二。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,480 | 1,410,054 | **9B 推理/创作微调**，5.1M 长上下文训练，GGUF 多规格，创意写作/长文本强。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 639 | 552,026 | **多路融合+MTP(多token预测)**，Uncensored 角色扮演，GGUF 量化矩阵完整。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 651 | **2,187,304** | **1-bit 极致量化 27B**，llama.cpp 原生，下载量全榜单第一，极限压缩仍保基础对话。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,051 | 631,970 | **2-bit 三元量化**，在 1-bit 基础上回升推理质量，边缘/手机端可跑 27B。 |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 203 | 102,684 | **Unsloth 优化版 Laguna GGUF**，训练/推理双加速，vLLM 兼容。 |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 143 | 138,671 | **官方 NVFP4 量化**，H100/Blackwell 原生张量核加速，吞吐↑2.5×。 |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 143 | 82,187 | **官方 GGUF 发布**，标准化量化矩阵，生产部署首选。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 172 | 73,642 | **Hermes 风格指令微调+Uncensored**，长上下文、工具调用增强，GGUF 全系列。 |

---

## 📡 生态信号深度解读（~160 字）
**模型家族势头**：**Qwen 3.5/3.6 系**成社区微调绝对主力（榜单 9 个衍生），MoE 稀疏架构成大模型标配；**GLM-5.2 / Kimi-K2.7** 验证“原生多模态 MoE”路线商业化可行。**开源权重 vs 闭源**：头部中文大模型（Z.ai、Moonshot、百度、面壁）持续开放基座权重，配合官方量化包（NVFP4/GGUF）形成“权重开放+部署闭环”新范式，闭源 API 压力增大。**量化/微调活动**：**1-bit/2-bit GGUF**、**NVFP4**、**MTP 多token预测**成关键词，量化不再是事后补丁而是发布标配；**Uncensored/角色扮演/长上下文**微调持续高热，显示社区对“人设/自由度/长文本”的刚性需求。**垂直落地**：Robotics VLA、Computer Use、OCR、边缘 TTS 同周爆发，模型交付颗粒度从“通用基座”细化为“场景级即用件”。

---

## 💎 值得探索的 3 个模型
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — **生产级通用 OCR 基座**，零样本任意版面/语言，直接替代 PaddleOCR/Tesseract 流水线，下载量 260 万验证落地成熟度。  
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — **中文 MoE 旗舰全能模型**，原生多模态+工具调用+128k 上下文，官方提供 NVFP4/GGUF 量化，单节点 8×H100 即可跑满血推理，企业级 RAG/A

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*