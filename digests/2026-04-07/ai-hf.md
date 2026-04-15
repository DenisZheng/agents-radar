# Hugging Face 热门模型日报 2026-04-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-07 00:12 UTC

---

# Hugging Face 热门模型日报 | 2026-04-07

---

## 今日速览

Google **Gemma-4** 系列全面霸榜，占据 30 席中的 10 席，从 26B 到 31B 参数的多模态版本均获高下载量。社区微调生态异常活跃，**Jackrong** 和 **HauhauCS** 等创作者密集发布基于 Qwen3.5 的蒸馏与去审查版本，其中 Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled 以 2,399 点赞登顶。量化格式（GGUF）和 1-bit 极端压缩模型（Bonsai-8B）持续获得关注，边缘部署需求凸显。值得注意的是，Netflix 罕见开源视频修复模型 **void-model**，以及百度、腾讯等中国大厂加速 Hugging Face 布局。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,399 | 548,344 | 将 Claude 4.6 Opus 的推理能力蒸馏至 Qwen3.5，社区热度最高的"合成数据"微调范例 |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,201 | 722,769 | 35B MoE 架构的去审查激进版本，下载量验证了其作为开源替代品的实用价值 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,149 | 678,740 | Google 最新一代多模态指令模型，Apache-2.0 许可证降低商用门槛 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,015 | 751,402 | 小体积高性能的去审查模型，边缘设备部署的首选之一 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 453 | 476,612 | 采用 A4B（Attention for Billion）架构优化，长上下文效率显著提升 |
| **[LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M)** | LiquidAI | 237 | 17,695 | 超小体积液态神经网络，探索非 Transformer 架构的可行性边界 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 410 | 321,152 | 原生 any-to-any 架构，统一处理文本、图像、音频的端到端多模态模型 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,017 | 38,388 | 百度千帆视觉语言模型，中文文档理解能力突出 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 449 | 0 | Netflix 开源的视频修复/物体移除模型，基于 CogVideoX 架构，影视工业化应用潜力大 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 296 | 64,509 | 零样本多语言语音克隆，支持跨语言音色迁移 |
| **[mistralai/Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603)** | mistralai | 681 | 5,719 | Mistral 首款 TTS 模型，4B 参数实现高自然度英法语语音合成 |
| **[tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving)** | tencent | 220 | 0 | 腾讯混元多模态编织模型，技术报告引用显示其在统一生成架构上的探索 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** | CohereLabs | 817 | 128,326 | Cohere 最新 ASR 模型，多语言转录准确率进入第一梯队 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 278 | 649,596 | Unsloth 官方 GGUF 量化，速度优化显著，下载量超原版说明量化需求旺盛 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 468 | 45,185 | **1-bit 极端量化** 实验，8B 模型压缩至 ~1GB，探索超低资源部署极限 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF)** | Jackrong | 519 | 272,020 | v2 版本 GGUF 量化，推理蒸馏 + 边缘部署的双重优化 |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 208 | 503,482 | 31B 参数模型的消费级 GPU 可运行版本 |
| **[prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit)** | prism-ml | 153 | 24,861 | Apple Silicon 原生 MLX 框架 1-bit 版本，Mac 本地推理新选择 |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 238 | 129,352 | NVIDIA 官方 NVFP4 量化，TensorRT 生态深度优化 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 490 | 13,727 | 4M 样本激进微调 + MLX 去审查版本，社区"破解"文化的典型代表 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 133 | 99,038 | Gemma-4 多模态能力的去审查释放，视觉理解 + 无限制生成 |

---

## 生态信号

**Gemma-4 与 Qwen3.5 双雄并立**：Google 以官方多模态矩阵（31B/26B/E4B/E2B）确立开源领导地位，而 Qwen3.5 凭借开放的权重和活跃的社区微调生态（Jackrong、HauhauCS 等创作者持续产出）形成"官方-社区"互补格局。**量化成为基础设施**：GGUF 版本下载量普遍反超原版（如 unsloth/gemma-4-26B-A4B-it-GGUF 达 65 万），1-bit 极端压缩（Bonsai-8B）和 NVIDIA/MLX 硬件专用格式并行发展，反映边缘 AI 部署的刚性需求。**去审查微调产业化**：HauhauCS 等创作者形成品牌效应，"Aggressive"系列累计下载超 150 万，显示开源社区对对齐限制的系统性绕过。中国大厂（百度、腾讯）加速 Hugging Face 官方入驻，与此前主要依赖社区镜像的格局形成对比。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **蒸馏方法论标杆**：验证了顶级闭源模型（Claude 4.6 Opus）的推理模式可通过合成数据有效迁移至开源权重，为低成本复现 SOTA 推理能力提供路径，适合研究模型能力迁移与数据合成策略 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | **极限压缩前沿**：1-bit 量化将 8B 模型压缩至约 1GB，虽精度损失待评估，但为 IoT/移动端部署开辟新可能，适合探索量化-性能权衡边界 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | **产业级视频 AI 开源**：流媒体巨头首次开源视频修复模型，基于 CogVideoX 的 inpainting 能力可直接用于影视后期，关注其是否引发视频生成工具的工业化开源浪潮 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*