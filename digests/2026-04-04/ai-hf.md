# Hugging Face 热门模型日报 2026-04-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-04 00:10 UTC

---

# Hugging Face 热门模型日报 | 2026-04-04

---

## 今日速览

本周 Hugging Face 热度被 **Qwen3.5** 与 **Gemma-4** 两大模型家族主导，社区微调版本表现尤为抢眼。Jackrong 的 Claude 蒸馏版 Qwen3.5-27B 以 2,222 点赞登顶，下载量逼近 50 万；HauhauCS 的"去审查"系列则凭借极高下载量揭示社区对无过滤模型的强劲需求。Google 密集发布 Gemma-4 多规格版本（26B/31B/E2B/E4B），覆盖从边缘到云端的部署场景。量化生态持续繁荣，GGUF 与 1-bit 极端压缩模型（Bonsai-8B）成为本地部署新选择。多模态任务中，image-text-to-text 已成主流配置，Netflix 罕见入局视频生成领域。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B)** | Qwen | 1,157 | 4,818,944 | 阿里官方基座模型，近 500 万下载验证其生态核心地位 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,222 | 487,446 | **本周榜首**：将 Claude-4.6 Opus 推理能力蒸馏至 Qwen3.5，社区微调现象级爆款 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 948 | 700,218 | "激进去审查"版本，70 万下载揭示下游应用对内容自由度的强需求 |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,156 | 652,331 | MoE 架构 + 去审查，高点赞高下载的双高选手 |
| **[nvidia/Nemotron-Cascade-2-30B-A3B](https://huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B)** | nvidia | 456 | 137,849 | NVIDIA 新一代级联生成模型，企业级应用潜力股 |
| **[chromadb/context-1](https://huggingface.co/chromadb/context-1)** | chromadb | 362 | 3,195 | 向量数据库厂商下场做 LLM，RAG 生态纵向整合信号 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 674 | 76,200 | Gemma-4 旗舰指令版，原生图像理解 + 对话能力 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 293 | 24,366 | 激活参数仅 4B 的 MoE 架构，高效多模态方案 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** / **[E2B-it](https://huggingface.co/google/gemma-4-E2B-it)** | google | 253 / 192 | 23,460 / 31,712 | **any-to-any 架构**：文本/图像/音频/视频统一处理，边缘 AI 里程碑 |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 859 | 26,980 | 百度千帆 OCR 多模态模型，中文文档理解场景利器 |
| **[mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603)** | mistralai | 649 | 4,760 | Mistral 首款 TTS 模型，4B 参数挑战语音合成质量边界 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 128 | 6,560 | 下一代语音合成，支持 AAE/AAL 等方言变体 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 197 | 0 | **流媒体巨头首入 AI 模型**：视频修复/物体消除，内容生产工具化 |
| **[facebook/sam3.1](https://huggingface.co/facebook/sam3.1)** | facebook | 126 | 7,763 | SAM 3.1 视频版分割，视觉 Prompt 追踪能力升级 |
| **[Hcompany/Holo3-35B-A3B](https://huggingface.co/Hcompany/Holo3-35B-A3B)** | Hcompany | 200 | 730 | 基于 Qwen3.5-MoE 的多模态实验模型，新兴团队技术验证 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** | CohereLabs | 763 | 84,600 | Cohere 最新 ASR，挑战 Whisper 生态地位 |
| **[microsoft/harrier-oss-v1-0.6b](https://huggingface.co/microsoft/harrier-oss-v1-0.6b)** / **[270m](https://huggingface.co/microsoft/harrier-oss-v1-270m)** | microsoft | 148 / 117 | 7,508 / 5,677 | 微软开源嵌入模型双规格，MTEB 评测导向的轻量方案 |
| **[LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M)** | LiquidAI | 212 | 10,194 | 非 Transformer 架构（LFM）持续迭代，效率优先路线 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF)** | Jackrong | 492 | 227,053 | 蒸馏版 GGUF 量化，本地运行 27B 推理模型的首选 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** / **[31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 182 / 130 | 99,223 / 83,931 | Unsloth 官方 Gemma-4 量化，速度优化 + 内存压缩双保障 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** / **[mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit)** | prism-ml | 357 / 126 | 26,164 / 12,610 | **极端量化实验**：1-bit 权重，探索 LLM 压缩极限 |
| **[Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF)** / **[27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 146 / 116 | 19,991 / 10,567 | "Qwopus"系列持续迭代，社区量化工作流成熟标志 |

---

## 生态信号

**模型家族格局**：Qwen3.5 与 Gemma-4 形成双寡头，前者主导社区创新与中文场景，后者凭借 Google 背书覆盖全规格部署。Mistral、Cohere 等"挑战者"聚焦垂直任务（TTS/ASR），差异化生存。

**开源权重深化**：顶级闭源模型（Claude-4.6 Opus）通过蒸馏"间接开源"，Jackrong 等现象级微调者成为生态关键节点。去审查、推理增强等社区需求，正反向塑造上游模型策略。

**量化技术分化**：GGUF 巩固 llama.cpp 生态主导地位；1-bit 极端压缩（Bonsai）与 MLX 框架（Apple Silicon 优化）代表硬件适配的精细化趋势。Unsloth 等工具链降低量化门槛，"每个基座模型 + 社区量化版本"成标配。

**多模态统一**：image-text-to-text 已从特色变为基线，Gemma-4 的 any-to-any 架构预示 2026 年"全模态原生"竞争开启。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **蒸馏技术标杆**：验证闭源 SOTA 能力向开源模型迁移的可行性，推理密集型任务（数学、代码、长程规划）首选测试对象。配套 GGUF 版本降低体验门槛。 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | **架构前沿样本**：any-to-any 统一表征的轻量化实现（E4B/E2B），边缘设备多模态应用的工程参考。对比测试其跨模态理解与生成一致性，可预判统一模型路线成熟度。 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | **极限效率实验**：1-bit 量化下 8B 模型的可用性边界探索，适合研究模型压缩与硬件协同设计。若质量损失可控，将重塑端侧 LLM 部署经济学。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*