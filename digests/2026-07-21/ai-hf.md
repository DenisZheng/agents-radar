# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 02:03 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-21

---

## 🚀 今日速览

本期榜单呈现 **"多模态原生化 + 极致量化部署"** 双主线并行态势。百度 **Unlimited-OCR** 与 Google **Gemma-4-31B** 领跑多模态下载/点赞榜，确立视觉语言模型（VLM）为主流范式；Prism-ML 以 **1-bit/2-bit 三元量化 Bonsai-27B** 统治边缘端部署话题，单周下载破百万验证极低比特实用化；Qwen3.5/3.6 与 MiniCPM5 成为社区微调“双核”，Uncensored、Reasoning、VLA 等垂类变体百花齐放；腾讯 **Hy3** 与 Moonshot **Kimi-K2.7-Code** 代表头部厂商持续开源大模型权重，生态开放度再进阶。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,226 | 531,947 | 智谱最新一代 MoE+DSA 架构基座，原生支持超长上下文与工具调用，中文基准全面超越同量级开源模型。 |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 847 | 13,698 | 腾讯混元第三代千亿稠密模型，首发 BF16 权重，指令跟随与代码能力强，企业级落地首选开源大模型。 |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,175 | 713,992 | 面向代码生成的多模态专家模型，压缩张量部署友好，Agentic Coding 场景 SOTA 级表现。 |
| [**Cactus-Compute/needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 292 | 950 | JAX 生态稀有 Function-Calling 专用小模型，工具调用精度高，适合边缘端 Agent 部署。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,444 | 2,122,848 | **本周下载王**。端到端无限长文档 OCR，支持版面复原/公式/表格/手写，文档数字化落地标杆。 |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,297 | 11,987,248 | Gemma 4 旗舰多模态版，原生图文理解/生成，31B 平衡性能与推理速度，移动端部署首选。 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,369 | 2,117,323 | Qwen3.5 视觉蒸馏 Claude 数据，9B 极致性价比，推理/创作/OCR 三强，GGUF 量化全系列。 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,937 | 2,007,025 | MoE 视觉大模型激进去审查版，A3B 激活参数推理极快，创意写作/角色扮演社区热度极高。 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 482 | 10,647 | 强化思维链训练的 Qwen3.6 视觉版，复杂推理任务表现优于基座，科研/教育场景适用。 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 217 | 14,587 | 基于 Qwen3.5 微调的轻量 OCR 专家，中英混排/倾斜/复杂版面鲁棒性强，推理延迟低。 |
| [**Wan-AI/Wan-Dancer-14B**](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 145 | 2,408 | 图生视频舞蹈生成 SOTA，动作连贯性/身份一致性领先，内容创作/虚拟主播新范式。 |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 214 | 0 | LTX-Video 人脸身份保持 LoRA，单张参考图生成一致人脸视频，数字人制作利器。 |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 291 | 87,533 | 语音转写+说话人分离一体化，中英文代切/噪音鲁棒/实时流式，会议纪要/字幕生产首选。 |
| [**OpenMOSS-Team/MOSS-VL-Realtime**](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) | OpenMOSS-Team | 89 | 544 | 端到端实时视频理解对话模型，延迟<300ms，机器人/直播助手/无障碍交互前沿探索。 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,270 | 13,462 | 统一图文音三模态 MoE，原生交织生成，跨模态推理新架构实验田。 |
| [**unsloth/inkling-GGUF**](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 111 | 6,771 | Unsloth 团队适配的 Inkling GGUF 量化全系列，消费级显存即可跑三模态 MoE。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入、机器人）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 135 | 0 | 面向机器人操作的 VLA 模型，视觉-语言-动作统一建模，具身智能开源基石。 |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 100 | 0 | 机器人视觉跟踪专用模型，小目标/遮挡/快速运动鲁棒，边缘端实时部署友好。 |
| [**nvidia/Nemotron-3-Embed-1B-BF16**](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | nvidia | 87 | 61,708 | 1B 参数通用嵌入模型，MTEB 榜首级检索性能，RAG/语义搜索/向量数据库理想基座。 |

---

### 📦 微调与量化（社区微调、GGUF、MLX、极致压缩）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 542 | 1,262,894 | **本周量化下载王**。1-bit 极限量化 Qwen3.5-27B，PPL 损失<0.05，消费级 24GB 显存跑 27B。 |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 855 | 338,945 | 三元（2-bit）量化版，精度/速度/体积三角最优解，Apple Silicon/移动端首选。 |
| [**prism-ml/Bonsai-27B-mlx-1bit**](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 154 | 21,690 | MLX 原生 1-bit 权重，Mac Metal 加速推理，统一内存零拷贝，Apple 生态最强本地 LLM。 |
| [**prism-ml/Ternary-Bonsai-27B-mlx-2bit**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) | prism-ml | 130 | 17,869 | MLX 三元量化版，兼顾生成质量与能效比，MacBook Pro M 系列原生跑 27B MoE。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 157 | 16,719 | 社区融合微调“厨子”巅峰作，多数据集/多方法叠加，Uncensored+长上下文+MTP，创作狂欢版。 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 159 | 5,494 | 1B 小模型蒸馏 Claude Opus 思维链，手机端可跑复杂推理，边缘侧 Agent 雏形。 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 134 | 28,012 | 上述模型 GGUF 量化系列，量化感知训练保留推理能力，Termux/树莓派实测可用。 |
| [**AngelSlim/Hy3-GGUF**](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 149 | 109,749 | 腾讯 Hy3 官方权重首发即量化，全精度到 2-bit 全谱系，企业私有化部署加速器。 |
| [**empero-ai/Qwythos-9B-v2-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 197 | 105,749 | Qwythos 视觉模型二代量化包，修复首代幻觉，多任务泛化更强，GGUF 即插即用。 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF) | LuffyTheFox | 85 | 15,148 | Hermes 3 数据融合 Qwen3.6 MoE，角色扮演/长文创作风格极致，Uncensored 社区收藏级。 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 458 | 0 | Krea-2 图像编辑 LoRA，单图保真身份编辑（换装/表情/背景），ComfyUI 原生支持。 |

---

## 📡 生态信号深度解析（~160 字）

**模型家族势头**：**Qwen3.5/3.6** 与 **MiniCPM** 双核驱动社区创新，前者成多模态/长文本/推理微调“万金油”，后者成边缘端/蒸馏/机器人 VLA 标准基座；**Gemma-4** 确立 Google 移动端多模态统治力。  
**开源 vs 闭源**：头部厂商（百度/腾讯/智谱/Google/Moonshot）集中发布 **原生权重+推理代码**，闭源仅保留训练数据/超参，开源深度显著超越 2024 年。  
**量化/微调前沿**：**1-bit/三元量化** 从实验走向生产，Prism-ML 双架构适配验证极低比特可用性；**MLX 生态** 成 Apple Silicon 部署标准；**融合微调** 叠加 DPO/RLHF/蒸馏/任务向量成社区主流，Uncensored 需求催生细分分发渠道。  
**新赛道**：**VLA（视觉-语言-动作）** 与 **实时视频理解** 从 0 到 1 突围，具身智

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*