# Hugging Face 热门模型日报 2026-09-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-03 02:29 UTC

---

#  📊 Hugging Face 热门模型日报 | 2026-09-03

---

## 📰 今日速览

1. **Qwen 3.8 系列全面霸榜**，基座模型 `Qwen3.8-27B` 与轻量版 `Qwen3.8-Flash-Next` 双双领跑点赞榜，并催生了庞大的量化（GGUF/FP8/MLX）与“去审查”社区衍生生态，下载量合计超千万级。
2. **国产开源权重模型集中发力**：Z.ai 发布 MoE 架构 `GLM-5.3` 及多模态 `GLM-5.3-Flash`，MiniMax 开源视频生成 `MiniMax-H3`，DeepSeek 推出 `DeepSeek-V4-Flash-Vision-Exp`，多模态与长上下文成核心竞争点。
3. **视频生成进入“百模大战”**：`MiniMax-H3`（550万下载）、`LTX-2.5`（120万下载）、`FastVideo` 4步蒸馏版同日上榜，推理加速与开放权重成主流方向。
4. **量化与边缘部署成刚需**：Unsloth、Orcarouter、ISTA-DASLab 等团队高产出 GGUF/FP8/MLX/GSQ 混合精度量化版本，`unsloth/Qwen3.8-27B-GGUF` 下载破 930 万，社区聚焦“开箱即用”的本地化部署。
5. **经典模型长尾效应显著**：`all-MiniLM-L6-v2`（2.5亿下载）、`bert-base-uncased`（6300万）、`gpt2`（1400万）稳居下载榜前列，嵌入与基础 NLP 任务仍是基建核心。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 / 下载 | 一句话简介 |
| :--- | :--- | :--- | :--- |
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai-org | 1,522 / 94,403 | **新一代 MoE 大模型**，采用 DSA 注意力机制，主打长上下文与推理效率，Z.ai 开源旗舰之作。 |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent | 400 / 3,516 | 腾讯 **混元 Hy4 预览版**，中文理解生成强项，面向企业级应用的基座模型。 |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat-ai | 200 / 6,813 | 基于 Nemotron-H 架构的**语音对话模型**，专为实时语音交互管线设计。 |
| **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** | XHToken | 124 / 429 | 轻量级 4B 指令模型，主打低资源设备部署与中文任务适配。 |
| **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** | openai-community | 3,538 / 14,290,101 | 经典基准模型，持续作为教学、基准测试与微调实验的“Hello World”。 |
| **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** | google-bert | 2,863 / 63,694,017 | NLP 基建基石，Encoder 架构代表，分类、NER、检索微调首选。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 / 下载 | 一句话简介 |
| :--- | :--- | :--- | :--- |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | **13,697 / 4,960,483** | **当前开源多模态 SOTA 领跑者**，27B 原生支持图文理解、视频理解与复杂推理，生态最完善。 |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,740 / 207,941 | Qwen 3.8 系**高推理速度轻量版**，保留强多模态能力，适配实时交互场景。 |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org | 1,969 / 441,348 | GLM 5.3 多模态闪电版，原生图文对话，推理速度显著优化。 |
| **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek-ai | 509 / 17,893 | DeepSeek V4 视觉实验版，MoE+视觉编码器，探索高效多模态融合。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,815 / **5,532,597** | **视频生成下载王**，原生支持文生视频/图生视频，画面连贯性与指令遵循业界领先。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,580 / 1,232,274 | 实时视频生成模型，支持文生/图生/视频生视频，延迟极低，创意工具首选。 |
| **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 250 / 0 | 基于 H3 架构的**4 步蒸馏加速版**，无数据微调实现极速推理，技术验证性质强。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 357 / 3,086 | 高自然度中文 TTS 模型，支持音色克隆与情绪控制，语音合成新秀。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入、时序）

| 模型 | 作者 | 点赞 / 下载 | 一句话简介 |
| :--- | :--- | :--- | :--- |
| **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** | sentence-transformers | 5,395 / **250,280,836** | **嵌入模型下载量之王**，384 维向量，检索/聚类/语义搜索生产标配。 |
| **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google | 299 / 0 | Google 最新**时序预测基座模型**，零样本预测表现强，金融/气象/运维必备。 |
| **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar-ragdoll | 194 / 130,086 | **代码专用 MoE 模型**（35B 总参数/3B 激活），基于 Qwen3.5 MoE 微调，推理极快。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ、MLX、FP8）

| 模型 | 作者 | 点赞 / 下载 | 一句话简介 |
| :--- | :--- | :--- | :--- |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,394 / **9,354,0

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*