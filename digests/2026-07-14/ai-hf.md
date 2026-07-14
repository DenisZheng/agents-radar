# Hugging Face 热门模型日报 2026-07-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-14 01:20 UTC

---

# Hugging Face 热门模型日报（2026-07-14）

## 今日速览

本周 Hugging Face 生态呈现两大热点：**Qwen 3.6/3.5 家族持续霸榜**，衍生出大量量化版、微调版和视觉版模型；**MoE 架构全面爆发**，从智谱的 GLM-5.2 到腾讯的 Hunyuan Hy3，稀疏激活模型已成为主流。值得关注的是，**百度 Unlimited-OCR 和 NVIDIA Nemotron-Labs-Audex 等专用模型**开始获得社区认可，标志着大模型从通用对话向垂直领域渗透。此外，GGUF 量化版本下载量普遍超过原始模型，社区对本地部署和推理效率的需求依然旺盛。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  作者: zai-org | 点赞: 3,900 | 下载: 464,914  
  **说明**: 智谱最新 MoE 对话模型，采用“DSA”动态稀疏激活，在对话任务上表现强劲，是本周点赞榜第一。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  作者: tencent | 点赞: 754 | 下载: 9,157  
  **说明**: 腾讯开源的 Hunyuan 第三代模型，基于 transformers 架构，主打文本生成，是腾讯在 LLM 领域的重要布局。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
  作者: InternScience | 点赞: 526 | 下载: 29,801  
  **说明**: 基于 Qwen 3.5 MoE 的智能体模型，兼顾文本和图像理解，专为 agent 场景设计。

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**  
  作者: nvidia | 点赞: 114 | 下载: 38,775  
  **说明**: NVIDIA 最新 “Puzzle” 系列，75B 参数但仅激活 9B，NVFP4 量化，主打高效推理。

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**  
  作者: SupraLabs | 点赞: 114 | 下载: 1,573  
  **说明**: 轻量级路由模型（51M），用于将用户请求分发至最合适的专家模型，是 MoE 基础设施组件。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  作者: empero-ai | 点赞: 2,084 | 下载: 1,985,221  
  **说明**: 基于 Qwen 3.5 的多模态模型，融合 Claude 风格 Mythos 数据，GGUF 量化版下载量近 200 万，社区热度极高。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  作者: baidu | 点赞: 1,963 | 下载: 1,506,937  
  **说明**: 百度发布的通用 OCR 模型，支持无限类别文字识别，下载量极高，反映 OCR 场景强烈的开源需求。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  作者: HauhauCS | 点赞: 2,710 | 下载: 2,512,124  
  **说明**: Qwen 3.6 的 Uncen sored 多模态 MoE 版本，35B 参数仅激活 3B，社区微调版本下载量超过 250 万，追求“激进”交互风格。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
  作者: OpenMOSS-Team | 点赞: 162 | 下载: 39,509  
  **说明**: 复旦 MOSS 团队推出的音频转录+说话人分离模型，支持端到端语音转文本。

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Audex-30B-A3B)**  
  作者: nvidia | 点赞: 142 | 下载: 1,058  
  **说明**: NVIDIA 的音频理解模型，30B 总参、3B 激活，定位音频领域的“小模型大能力”。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**  
  作者: Alissonerdx | 点赞: 124 | 下载: 0  
  **说明**: 基于 LTX-Video 的 LoRA，用于视频中的人脸保持，实现身份一致性视频生成。

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**  
  作者: robbyant | 点赞: 93 | 下载: 0  
  **说明**: 因果世界模型，输入图像预测后续视频帧，14B 参数，社区尚未有下载说明仍在测试。

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**  
  作者: nineninesix | 点赞: 95 | 下载: 3,940  
  **说明**: 文本到语音模型，基于 Qwen 3.5 文本基座，实现高质量语音合成。

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)**  
  作者: CohereLabs | 点赞: 102 | 下载: 11,647  
  **说明**: Cohere 为阿拉伯语推出的专用 ASR 模型，针对低资源语言场景。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
  作者: yuxinlu1 | 点赞: 1,178 | 下载: 452,627  
  **说明**: 基于 Gemma-4 的 agent 专用模型，强化编码和终端能力，社区尤其关注其 agent 属性。

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
  作者: google | 点赞: 362 | 下载: 21,590  
  **说明**: Google 发布的结构化数据基础模型，支持表格分类与回归，零样本能力突出。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
  作者: deepreinforce-ai | 点赞: 868 | 下载: 1,392,300  
  **说明**: 35B 参数通用文本生成模型，提供 GGUF 版本，下载量超百万，兼容主流推理框架。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**  
  作者: empero-ai | 点赞: 105 | 下载: 45,189  
  **说明**: Qwythos 9B v2 的量化版本，持续迭代，社区对 Qwen 3.5 家族的 GGUF 需求旺盛。

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**  
  作者: unsloth | 点赞: 162 | 下载: 49,423  
  **说明**: Unsloth 为 DeepSeek V4 制作的 GGUF 量化版，主打高效推理与参数优化。

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**  
  作者: unsloth | 点赞: 192 | 下载: 1,497,456  
  **说明**: Qwen 3.6 的 NVFP4 量化方案，专为 NVIDIA 硬件优化，下载量超 140 万。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
  作者: unsloth | 点赞: 1,074 | 下载: 2,901,906  
  **说明**: 最热门的 Qwen 3.6 量化版之一，MTP（多 token 预测）特性增强推理效率，下载量逼近 300 万。

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**  
  作者: jlnsrk | 点赞: 86 | 下载: 1,997  
  **说明**: GLM-5.2 的 INT4 CPU 量化版，使用 Colibri 框架实现 CPU 上 MoE 推理。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
  作者: froggeric | 点赞: 888 | 下载: 0  
  **说明**: 非模型权重，而是修正后的 Qwen 对话模板，支持 MLX、Jinja，下载量为 0 但点赞高，反映社区对模板标准化需求。

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
  作者: bottlecapai | 点赞: 309 | 下载: 4,909  
  **说明**: 为 Qwen 3.6 添加“思考帽”能力，强调推理链增强。

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**  
  作者: migtissera | 点赞: 104 | 下载: 1,105  
  **说明**: 基于 Qwen 3.5 的微调模型，Tess 系列第四代。

---

## 生态信号

**1. Qwen 家族全面统治**  
Qwen 3.5/3.6 几乎占据了榜单半数席位，从官方到社区微调（Uncensored、ThinkingCap、Qwythos）、量化（Unsloth 多版本）、多模态（图像+文本）全面开花。Qwen 已取代 LLaMA 成为当前最活跃的开源基座家族。

**2. MoE 成为默认架构**  
GLM-5.2（DSA）、Hy3（Hunyuan 系列）、Nemotron-Puzzle、Qwen3.6-35B-A3B 均采用 MoE 设计。稀疏激活的有效参数从 3B 到 9B 不等，表明“大参数小激活”已从实验走向主流，社区认可其推理效率。

**3. 开源权重 vs 闭源**  
本周所有热门模型均为开源权重（HuggingFace 直接下载），未有闭源模型上榜。百度、腾讯、NVIDIA、智谱等大厂均选择完全开源，显示开源生态已成为行业基准。

**4. GGUF/量化活动持续爆发**  
几乎每个热门模型的量化版本下载量远高于原始版本。Unsloth 成为最活跃的量化团队，为 DeepSeek 和 Qwen 制作了多款 GGUF、NVFP4 变体。社区对小模型、本地部署、低资源推理的追求没有放缓。

---

## 值得探索

**1. [tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
腾讯首次在 HuggingFace 上开源 Hunyuan 核心模型，Hy3 代表其第三代技术，值得关注其在中文对话和文化对齐上的表现。

**2. [google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
这是 Google 针对结构化数据（表格）的基础模型，填补了 LLM 在传统机器学习领域的空白，对金融、医疗等场景极具价值。

**3. [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
当前下载量最高的 Qwen 模型之一，融合了 MTP（多 token 预测）和 GGUF 量化，是体验 Qwen 3.6 能力与推理效率的最佳入口。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*