# Hugging Face 热门模型日报 2026-04-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-06 00:11 UTC

---

# Hugging Face 热门模型日报 | 2026-04-06

---

## 今日速览

本周 Hugging Face 生态呈现**多模态主导**态势，Google Gemma-4 系列全面铺开，从 26B 到 31B 参数覆盖多档配置，原生支持图像-文本理解与 any-to-any 架构。社区微调势力崛起，Jackrong 基于 Qwen3.5 的 Claude 推理蒸馏模型以 2,345 点赞登顶，HauhauCS 的"去审查"系列下载量突破 140 万。量化部署成为标配，unsloth 与社区 GGUF 版本占据榜单近三分之一席位，1-bit 极端压缩技术（Bonsai-8B）引发边缘部署新想象。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|:---:|:---:|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,345 | 539,356 | 本周点赞冠军，将 Claude 4.6 Opus 的推理能力蒸馏至 Qwen3.5 架构，社区复刻闭源 SOTA 的标杆案例 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 994 | 725,110 | "Aggressive"去审查版本，下载量超 72 万，反映社区对无过滤本地 LLM 的强劲需求 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 983 | 490,192 | Gemma-4 旗舰指令版，Apache 2.0 协议下最强开源多语言对话模型，Google 生态核心锚点 |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,185 | 688,440 | 35B MoE 架构去审查版，以更少激活参数实现更高性能，下载量逼近 70 万 |
| **[LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M)** | LiquidAI | 229 | 14,877 | 液态神经网络架构更新，350M 参数探索非 Transformer 路径的高效推理 |
| **[chromadb/context-1](https://huggingface.co/chromadb/context-1)** | chromadb | 370 | 3,584 | 向量数据库厂商 Chroma 推出的 GPT-OSS 系列模型，专攻长上下文理解与检索增强场景 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|:---:|:---:|:---|
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 987 | 37,707 | 百度千帆 OCR 视觉语言模型，基于 InternVL 架构，文档理解能力跻身第一梯队 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 393 | 271,222 | 激活 4B 参数的 MoE 多模态版，性价比路线，推理成本显著低于密集 31B 版 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 349 | 197,704 | **any-to-any 架构实验体**，支持文本、图像、音频任意模态输入输出，Google 下一代统一模型的技术预览 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 389 | 0 | Netflix 开源视频修复模型，基于 CogVideoX 实现对象移除与视频重绘，零下载量暗示刚发布或授权限制 |
| **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** | CohereLabs | 804 | 120,998 | Cohere 最新 ASR 模型，3 月迭代版，多语言语音识别与转写性能提升 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 244 | 39,852 | 零样本多语言语音克隆，Kaldi-Next 生态的 TTS 新标杆 |
| **[mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603)** | mistralai | 673 | 5,458 | Mistral 入局语音合成，4B 参数 TTS 模型支持英法双语，vLLM 后端部署友好 |
| **[Hcompany/Holo3-35B-A3B](https://huggingface.co/Hcompany/Holo3-35B-A3B)** | Hcompany | 222 | 1,532 | 新兴厂商 Hcompany 的 35B MoE 多模态模型，基于 Qwen3.5 架构，早期关注者阶段 |
| **[tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving)** | tencent | 213 | 0 | 腾讯混元 OmniWeaving，论文引用显示为视频/3D 生成研究模型，尚未开放权重下载 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|:---:|:---:|:---|
| **[microsoft/harrier-oss-v1-0.6b](https://huggingface.co/microsoft/harrier-oss-v1-0.6b)** | microsoft | 163 | 10,824 | 微软开源嵌入模型，0.6B 参数挑战 MTEB 榜单，Sentence-Transformers 生态新成员 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|:---:|:---:|:---|
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 426 | 38,631 | **1-bit 极端量化实验**，8B 模型压缩至前所未有的体积，llama.cpp 边缘部署的极限探索 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF)** | Jackrong | 509 | 254,428 | v2 迭代版 GGUF，推理蒸馏模型的高性能本地部署方案 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 245 | 487,384 | Unsloth 官方 Gemma-4 MoE 量化版，下载量逼近 50 万，社区最活跃的多模态本地运行方案 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 201 | 3,123 | "ABLITERATED"（能力抹除）微调版，MLX 框架 Apple Silicon 优化，去审查与对齐绕过 |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 195 | 85,892 | NVIDIA ModelOpt 官方优化版，NVFP4 精度格式，Hopper/Blackwell GPU 推理加速 |
| **[Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF)** | Jackrong | 187 | 43,478 | Jackrong 系列轻量化版本，9B 参数本地友好，"Qwopus"暗示章鱼式多能力融合 |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 179 | 408,920 | Unsloth 旗舰 31B 密集版量化，40 万+下载验证其社区基础设施地位 |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 171 | 37,479 | 27B 推理增强版 GGUF，标签含"reasoning"，专攻逻辑与数学场景 |
| **[prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit)** | prism-ml | 147 | 20,522 | Bonsai 的 Apple Silicon 特供版，MLX 框架 1-bit 推理，Mac 本地极限压缩 |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 140 | 317,317 | any-to-any 架构的 GGUF 版本，多模态本地部署的前沿尝试，31 万下载预示强烈需求 |

---

## 生态信号

**Gemma-4 全面接管开源多模态。** Google 以 7 个模型条目构建完整矩阵：密集版（31B/26B）、MoE 版（A4B/A3B）、any-to-any 实验版（E4B/E2B），覆盖从云端到边缘的全场景。Apache 2.0 协议与官方/社区量化协同，形成对 Llama、Qwen 的合围之势。

**Qwen3.5 成为社区创新基座。** 阿里通义千问未直接上榜，但 Jackrong、HauhauCS、Hcompany 等开发者以其为骨架，通过蒸馏（Claude 推理）、去审查（Uncensored）、MoE 扩展（35B-A3B）构建衍生生态，反映 Qwen 架构的开放性与可塑性。

**量化即基础设施。** 30 个模型中 11 个含 GGUF/MLX/NVFP4 标签，unsloth 以 4 个模型、超 170 万总下载量确立"开源模型部署层"地位。1-bit 极端压缩（Bonsai-8B）与 NVIDIA 专有格式（NVFP4）并行，显示压缩技术路线的分化。

**"去审查"成为显式需求。** HauhauCS 两个模型合计 141 万下载，标签直书"uncensored""aggressive"，社区对对齐限制的反弹形成可观市场。与之呼应，dealignai 的"ABLITERATED"微调同样瞄准此需求。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | **any-to-any 架构的前哨站。** 不仅是图像-文本理解，而是向统一多模态原生模型迈进的关键实验。197K 下载量证明社区对"一个模型处理所有模态"的强烈兴趣，值得跟踪其技术报告与下游微调潜力。 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **开源复刻闭源 SOTA 的标杆。** 2,345 点赞为本周最高，验证"知识蒸馏+社区微调"模式的可行性。若其推理能力经第三方评测确认，将大幅降低高端推理模型的获取门槛，建议关注其技术细节披露与评估基准。 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | **1-bit 量产的可行性测试。** 极端压缩能否保持可用性尚无共识，Bonsai 的双平台版本（llama.cpp/MLX）提供直接验证机会。若 1-bit 模型在边缘设备上展现可接受的性能，将重塑移动端 AI 的部署经济学。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*