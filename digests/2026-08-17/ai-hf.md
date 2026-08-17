# Hugging Face 热门模型日报 2026-08-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-17 00:53 UTC

---

---

# 🤗 Hugging Face 热门模型日报 | 2026-08-17

---

## 📰 今日速览

**Qwen 3.5/3.8 系列全谱系霸榜**，从 27B 旗舰多模态、2.4T 参数 MoE 巨型模型到官方 FP8/NVFP4 量化版同步发布，构建起最完整的开源模型生态矩阵。**视频生成领域迎来“MiniMax H3 时刻”**：原版、Turbo 蒸馏版、LoRA 微调、ComfyUI 原生适配、GGUF 量化全链路覆盖，下载量破千万级。**Moonshot Kimi-K3 与 DeepSeek V4 双强入榜**，标志着国产头部模型在多模态与 MoE 架构上持续施压。**Unsloth 与 Comfy-Org 成为关键基础设施**，前者垄断高性能量化分发，后者成生成模型落地首选平台。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 10,768 / 2,136,775 | **本周黑马**，多模态旗舰模型，以极高热度切入榜单，展示 Moonshot 在长上下文与多模态融合上的最新 SOTA 实力。 |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 10,283 / 267,725 | **Qwen 3.5 系列核心旗舰**，27B 参数原生支持图文理解，指令跟随与推理能力强，社区微调与量化基座首选。 |
| **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** | Qwen | 1,011 / 7,932 | **超大规模 MoE 模型**，2.4T 总参数、95B 激活，展示通义千问在稀疏架构扩展极限上的工程化成果。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,460 / 1,872,232 | **高性价比 MoE 推理模型**，Flash 版本主打极速推理与低成本部署，下载量领跑纯文本 LLM 榜单。 |
| **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** | deepseek-ai | 536 / 21,873 | DeepSeek V4 系列旗舰 Pro 版，对齐更强、上下文更长，面向复杂推理与 Agent 任务。 |
| **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** | nvidia | 291 / 196,326 | **Nemotron 3.5 MoE 量化版**，30B 总参 3B 激活，原生 NVFP4 量化极致压缩显存，适配单卡高吞吐推理。 |
| **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** | LiquidAI | 647 / 141,009 | **非 Transformer 架构（液态基础模型）小模型**，2.6B 参数在长上下文与推理效率上表现亮眼，架构创新代表。 |
| **[inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny)** | inclusionAI | 285 / 5,727 | 蚂蚁集团开源小模型，采用 Bailing 混合架构，MIT 协议，主打边缘端部署与中文理解。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,030 / 2,307,541 | **本周视频生成王者**，原生支持图生视频/文生视频，画面一致性与运动幅度业界领先，生态扩展最完整。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 1,028 / 424,099 | **实时视频生成 DiT 模型**，单文件扩散架构，支持文生/图生/视频编辑，推理速度快，ComfyUI 原生支持佳。 |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 842 / 8,639 | **音乐生成 SOTA**，支持长结构、多风格、歌词控制的文生音乐，MiniMax 多模态矩阵关键拼图。 |
| **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** | meta-models | 1,630 / 292,973 | **30B 多模态大模型**，基于 Glimmer 架构，图文理解推理强，开放权重为社区提供大参数多模态基座。 |
| **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** | lightx2v | 557 / 239,206 | **H3 蒸馏加速版**，大幅降低推理步数/显存，实用性极强，社区自蒸馏成果典范。 |
| **[fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)** | fal | 229 / 16,103 | **H3 人像写实 LoRA**，fal.ai 出品，专攻真人质感与光影，即插即用提升生成真实感。 |
| **[Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B)** | Gazingstars123 | 223 / 20,860 | **轻量级文生图模型**，2.9B 参数兼顾速度与质量，ComfyUI 单文件部署友好。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入、特定架构）

> *本周榜单通用基座模型占主导，垂直专用模型（代码/数学/医疗/Embedding）未进入 Top 30。NVIDIA Nemotron 与 LiquidAI LFM 因架构特殊性（MoE/RNN）及推理优化属性，归类于语言模型观察。*

---

### 📦 微调与量化（社区微调、GGUF、FP8/AWQ、部署适配）

| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 1,455 / 1,945,635 | **GGUF 量化分发标杆**，Unsloth 优化量化保精度，提供全量化

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*