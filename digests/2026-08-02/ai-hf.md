# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 02:07 UTC

---

# 📋 Hugging Face 热门模型日报 | 2026-08-02

---

## 🚀 今日速览

1. **Moonshot AI 的 Kimi-K3 以 9.5k 点赞霸榜**，成为当周最受关注的多模态模型，显示长上下文与原生多模态融合仍是核心竞争点。  
2. **DeepSeek-V4-Flash 系列（官方版 + GGUF 量化）合计下载超 280 万**，确立了高性价比 MoE 模型在社区的统治地位。  
3. **Qwen 3.5/3.6 衍生版本占据榜单近 1/3**，DavidAU、HauhauCS 等社区大佬的 “Uncensored + GGUF + MTP” 组合拳，推动本地部署生态繁荣。  
4. **百度 Unlimited-OCR（245 万下载）与微软 Mage-VL/Fara1.5 入榜**，企业级文档理解与 Agent 视觉能力成新增长极。  
5. **极低比特量化（2-bit Ternary、NVFP4）与边缘 TTS 模型现身**，推理成本与端侧落地成隐性主线。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,948 | 2,814,414 | 新一代 MoE 闪电模型，性价比极高，社区下载量断层领先。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,431 | 15,366 | 0731 更新版，附带 arXiv 技术报告，修复早期采样问题。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,737 | 1,683,442 | 国产 MoE 旗舰，DSA 稀疏注意力架构，长文本与工具调用表现强。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 717 | 13,426 | 250B 参数稠密模型开源，韩语/英语双强，企业级许可友好。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 868 | 77,021 | 代码专用小模型（2.1B），在 HumanEval/MBPP 超越同量级 7B。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 611 | 27,892 | 3B 小模型追平 7B 基准，适合边缘侧私有化部署。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 330 | 923 | 基于 Qwen3.5 MoE 的 Agentic Search 版，强化工具链规划。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 112 | 875 | 35B 激活 3B MoE 实验版，探索极致稀疏激活效率。 |

---

### 🎨 多模态与生成（视觉 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,490 | 559,924 | **周冠军**。原生图文混合训练，支持 1M+ 上下文，多模态推理 SOTA 级。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,714 | 2,457,387 | 无限分辨率 OCR 大模型，文档/表格/手写全覆盖，企业级落地首选。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 172 | 10,525 | 微软新一代视觉语言模型，强化 OCR 与图表推理，适配 Copilot 生态。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 242 | 2,775 | 面向 Computer Use 的 27B 多模态 Agent 模型，支持 GUI 操作推理。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,672 | 59,076 | 小参数多模态对话模型，边缘设备实时图文交互表现优异。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 213 | 3,998 | Inkling 蒸馏版，<1B 参数，手机端可跑。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 361 | 1,565 | 极致轻量 TTS（CPU 实时），支持声调控制，适合 IoT 语音交互。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 166 | 3,254 | 0.6B 流式 TTS，低延迟高自然度，ArkTTS 架构实验版。 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 141 | 5,835 | 1-bit BitNet ASR 模型，极致压缩下保持中英识别精度。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 95 | 0 | 基于 Krea 的 LoRA，专注风格化文生图，ComfyUI 即插即用。 |
| [LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 87 | 6,190 | 液态神经网络编码器，长序列建模效率高，填补掩码任务基准。 |

---

### 🔧 专用模型（代码 / 数学 / 搜索 / 嵌入）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 391 | 10,771 | 基于 Qwen3.5 MoE 的代码专用版，支持 128k 上下文 repo 级生成。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 357 | 650 | 迷你版 Agentic Search 模型，边缘侧联网检索增强生成。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,135 | 716,341 | **2-bit 三元量化** 27B 模型，精度损失 <1%，单张 24GB 显存可跑。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / NVFP4）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,237 | 1,173,001 | 社区 “全餐” 版：融合 + 未审查 + MTP + NEO 量化 + I-Matrix，下载量榜首。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,226 | 1,823,436 | 35B MoE 激进未审查版，视觉+文本双模，GGUF 全量化系列。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 289 | 228,610 | Hermes 风格对齐 + Genesis 融合，长文创作与角色扮演强。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 186 | 267,572 | 9B 小体积全量化版，消费级显存（8-12GB）可跑满血 MTP。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 243 | 41,337 | Unsloth 官方 GGUF 适配，4bit/8bit 多规格， llama.cpp 原生跑。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 289 | 4,048 | DeepSeek 官方模型的首日 GGUF 移植，量化损失极低。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 221 | 1,072 | Unsloth 优化版 safetensors，训练/微调显存降 70%。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 22,396 | **NVFP4 量化** 250B 巨模，单节点 H100 即可推理，vLLM 原生支持。 |

---

## 🌐 生态信号深度解读（~160 字）

**模型家族势头**：**Qwen 3.5/3.6 衍生生态**已成最大社区分支，DavidAU/HauhauCS 等头部微调者形成 “融合→未审查→MTP→NEO 量化→I-Matrix” 标准化流水线，周更迭代速度惊人。**DeepSeek-V4** 以官方高质量权重 + Unsloth 极速量化确立 MoE 高性价比标杆。**Kimi-K3** 验证了原生多模态+超长上下文的商业化路径。

**开源 vs 闭源**：头部厂商“核心权重开源 + 商业 API 闭源”双轨制成常态（Moonshot、DeepSeek、Z.ai、Upstage 均如此）；微软、百度倾向发布**垂直任务模型**（OCR、Computer Use、ASR）而非通用基座，补齐企业落地最后一公里。

**量化/微调前沿**：**NVFP4（250B 实测可用）、2-bit Ternary（27B 无损）、MTP 多Token 预测加速** 三大技术同周落地，推理成本再降 1-2 量级；**I-Matrix 感知量化** 成 GGUF 社区新标配，显存占用再压 15%。

---

## 💎 值得探索的 3 个模型

| 模型 | 探索理由 |
|------|----------|
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | **多模态长上下文基准**。原生 1M+ 上下文 + 图文推理，适合研发“超长文档问答、视频逐帧理解、代码库级重构”场景；权重开放可直接微调垂直领域。 |
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | **极致低比特实战样本**。2-bit 三元量化在 27B 规模保持近乎无损，单张 3090/4090 即可跑满血 27B，是边缘/私有化部署的成本分水岭。 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | **生产级文档理解即插即用**。245 万下载验证稳定性，支持任意分辨

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*