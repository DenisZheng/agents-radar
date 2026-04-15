# Hugging Face 热门模型日报 2026-04-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-05 00:11 UTC

---

# Hugging Face 热门模型日报 | 2026-04-05

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧优化并行**的趋势。Google Gemma-4 系列全面铺开，从 26B 到 31B 参数覆盖多档视觉语言模型；社区蒸馏模型热度飙升，Jackrong 基于 Qwen3.5 的 Claude 推理蒸馏版本以 2,289 点赞登顶。值得注意的是，1-bit 量化（Bonsai-8B）和 NVIDIA FP4 格式开始落地，端侧部署进入新阶段。Netflix 罕见开源视频修复模型，显示工业界对生成式视频编辑的开放态度。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,289 | 524,224 | 本周热度冠军，将 Claude 4.6 Opus 的推理能力蒸馏至 Qwen3.5 架构，27B 参数实现顶级推理表现 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 967 | 715,586 | 激进去审查版本，下载量超 70 万，反映社区对无限制本地 LLM 的强烈需求 |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,168 | 676,494 | 35B MoE 架构的去审查版本，激活参数仅 3B，高效与性能兼顾 |
| **[chromadb/context-1](https://huggingface.co/chromadb/context-1)** | chromadb | 368 | 3,417 | 向量数据库厂商 Chroma 首发自研模型，专为长上下文检索优化 |
| **[LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M)** | LiquidAI | 224 | 12,477 | 液态神经网络架构更新，350M 参数挑战传统 Transformer 效率极限 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 840 | 287,440 | Gemma-4 旗舰视觉语言模型，31B 参数支持图像-文本交错对话，Apache 2.0 协议 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 306 | 108,261 | "Any-to-Any" 原生多模态架构，统一处理文本、图像、音频、视频输入输出 |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 926 | 36,635 | 百度千帆 OCR 视觉语言模型，基于 InternVL 架构，中文文档理解专项优化 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 304 | 0 | Netflix 开源视频修复/物体移除模型，基于 CogVideoX，影视级视频编辑首次开放 |
| **[mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603)** | mistralai | 660 | 5,096 | Mistral 首入 TTS 领域，4B 参数支持英法双语，vLLM 推理兼容 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 172 | 20,345 | 新一代零样本语音克隆，支持多语言跨语种合成，Kaldi-Next 生态核心组件 |
| **[Hcompany/Holo3-35B-A3B](https://huggingface.co/Hcompany/Holo3-35B-A3B)** | Hcompany | 215 | 1,302 | 35B MoE 多模态模型，专注全息/3D 视觉理解，新兴厂商技术展示 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** | CohereLabs | 786 | 96,615 | Cohere 最新 ASR 模型，3 月迭代版本，企业级语音转录精度提升 |
| **[microsoft/harrier-oss-v1-0.6b](https://huggingface.co/microsoft/harrier-oss-v1-0.6b)** | microsoft | 155 | 9,362 | 微软开源嵌入模型，基于 Qwen3，MTEB 榜单优化，0.6B 轻量部署 |
| **[microsoft/harrier-oss-v1-270m](https://huggingface.co/microsoft/harrier-oss-v1-270m)** | microsoft | 122 | 9,001 | 270M 超轻量版本，Gemma3 文本编码器基底，边缘设备首选 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF)** | Jackrong | 502 | 241,087 | 蒸馏模型 GGUF 量化版，v2 优化内存占用，单卡可跑 27B 推理 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 383 | 32,930 | **1-bit 极端量化**突破，8B 模型压缩至 <1GB，llama.cpp 全平台支持 |
| **[prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit)** | prism-ml | 136 | 16,936 | Apple Silicon 专属 1-bit 版本，MLX 框架原生优化，Mac 端侧里程碑 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 216 | 301,284 | Unsloth 官方量化，26B MoE 激活 4B，30 万下载验证社区热度 |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 162 | 273,734 | 31B 旗舰视觉模型 GGUF 版，消费级 GPU 可运行多模态对话 |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 162 | 44,171 | NVIDIA 官方 FP4 格式，TensorRT-LLM 原生支持，Hopper/Blackwell 最优 |
| **[Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF)** / **[27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 170 / 157 | 30,569 / 25,979 | "Qwopus" 系列持续迭代，专注推理优化的 Qwen3.5 微调分支 |

---

## 生态信号

**Gemma-4 与 Qwen3.5 形成双寡头格局。** Google 以 Apache 2.0 协议全系列开源视觉语言模型，从 E2B/E4B 的 Any-to-Any 原生多模态到 31B 旗舰，覆盖云端到边缘；阿里 Qwen3.5 则成为社区蒸馏和微调的事实基底，HauhauCS、Jackrong 等创作者围绕其构建去审查、推理增强等垂直变体。**量化技术进入实用阶段**：1-bit（Bonsai）、FP4（NVIDIA）、GGUF（Unsloth）三线并进，端侧部署门槛大幅降低。闭源厂商策略分化——Cohere、Mistral 持续开源核心模型，Netflix 罕见加入开源视频生成，而 OpenAI/Anthropic 仍保持封闭，**开源权重在工具型任务（ASR、TTS、OCR）已建立生态优势**。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | **端侧 AI 的临界点实验**。1-bit 量化首次在 8B 规模保持可用质量，<1GB 内存占用意味着智能手机、树莓派可本地运行大模型，技术路线值得深度跟踪。 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **开源推理能力的峰值**。2,289 点赞和 52 万下载验证其实力，无需 API 即可获得接近 Claude 4.6 的链式推理能力，数学/代码任务首选。 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | **工业级视频生成的开源破冰**。影视巨头首次开放视频修复/编辑模型，CogVideoX 架构 + 零样本物体移除，对内容创作者和研究者均有标杆意义。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*