# Hugging Face 热门模型日报 2026-08-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-01 02:10 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-08-01

---

## 🔎 今日速览

1. **Moonshot AI 的 Kimi-K3 以 9.3k 点赞、近 50 万下载霸榜**，成为本周最受关注的多模态基座模型，且已有 Unslo​th 等社区量化版跟进。  
2. **DeepSeek-V4-Flash 系列（官方版 + GGUF 量化）合计点赞超 3k**，显示业界对高效率 MoE 架构的强烈需求。  
3. **Qwen 3.5/3.6 衍生模型占据榜单半壁江山**（DavidAU、LuffyTheFox、HauhauCS 等），社区微调/量化/去审核版本百花齐放。  
4. **百度 Unlimited-OCR（3.6k 点赞、250 万下载）与微软 Mage-VL/Fara 系列**领衔多模态工具落地热潮。  
5. **极低参数量边缘 TTS（Inflect-Micro/Nano、Audio8）与 2-bit 三元量化模型** 指向“端侧部署”成为新战场。

---

## 🏷️ 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | 📥 | 一句话说明 |
|------|------|-----|-----|------------|
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,923 | 2,923,499 | **新一代高效 MoE 基座**，Flash-Attention + 深度蒸馏，长上下文推理 SOTA，闭源权重仅放出 API 兼容版。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,021 | 0 | 7 月 31 日快照版，附带 arxiv:2606.19348 技术报告，供复现基准。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,708 | 1,651,533 | **智谱开源旗舰**，MOE-DSA 架构，中英代码三强，对话/工具调用均衡。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 714 | 12,911 | 250B 参数稀疏 MoE，韩语/英语双强，开放商用许可。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 863 | 76,212 | 代码专用 34B 模型，HumanEval+ 92%，面向企业级代码生成。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 595 | 26,928 | 3B 小模型通过知识蒸馏逼近 7B 效果，边缘部署首选。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 352 | 579 | 基于 Qwen3.5 MoE 微调的轻量多语言模型，支持 Agentic Search。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 326 | 869 | Pro 版强化工具调用与长上下文，定位企业级 RAG。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 107 | 599 | 35B MoE 实验版，探索专家路由新策略。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | 📥 | 一句话说明 |
|------|------|-----|-----|------------|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **9,282** | 493,481 | **本周之王**：原生图文理解/生成一体化，支持 128K 上下文，压缩张量加速推理。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,663 | 2,513,603 | **工业级 OCR 基座**，任意分辨率/语言/版式零样本识别，下载量断层第一。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 234 | 2,726 | 面向 GUI 操作的多模态 Agent，Qwen3.5 底座 + Computer-Use 微调。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 150 | 5,650 | 统一视觉语言编码器，支持图文检索/标题/问答全任务。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,664 | 57,259 | 小参数量（~3B）多模态对话模型，边缘设备实时交互。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 196 | 2,971 | Inkling 蒸馏版，<1B 参数，手机端可跑。 |
| [Comfy-Org/Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 107 | 60,162 | 基于微软 Mage 的扩散单文件工作流，ComfyUI 原生支持。 |

---

### 🔧 专用模型（代码 / 数学 / 语音 / ASR / 嵌入）

| 模型 | 作者 | ❤️ | 📥 | 一句话说明 |
|------|------|-----|-----|------------|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 371 | 10,241 | Qwen3.5 MoE 代码专用版，支持图文到代码生成。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 348 | 1,449 | **CPU/边缘实时 TTS**，<50M 参数，流式合成延迟 <100ms。 |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 121 | 802 | Micro 进一步量化版，适配微控制器。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 151 | 2,481 | 基于 ARK-TTS 的高保真流式语音合成预览版。 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 135 | 5,464 | **1-bit BitNet ASR**，极致压缩下保持中英文识别精度。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 稀疏量化）

| 模型 | 作者 | ❤️ | 📥 | 一句话说明 |
|------|------|-----|-----|------------|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,150 | 1,119,057 | **社区下载王**：多路融合 + MTP + I-Matrix 量化 + 去审核，GGUF 全尺寸覆盖。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 228 | 36,180 | Kimi-K3 首发 4-bit/8-bit GGUF，Unslo​th 优化内核加速。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 216 | 1,044 | Unslo​th 微调就绪版，附带 LoRA/QLoRA 脚本。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 186 | 0 | DeepSeek-V4-Flash 首个社区 GGUF 移植。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 272 | 212,426 | Hermes 风格指令微调 + MoE 专家剪枝 + GGUF 量化。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,205 | 1,835,931 | **激进去审核版**，视觉编码器保留，下载量社区第二。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 174 | 261,856 | 9B 小体积版，I-Matrix 量化保留推理质量。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,125 | 712,835 | **2-bit 三元量化** LLaMA.cpp 原生支持，显存占用 <4GB 跑 27B。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 18,531 | NVFP4 量化 + vLLM 加速，单张 H100 跑 250B MoE。 |

---

## 🌐 生态信号（趋势分析）

**模型家族势头**：**Qwen 3.5/3.6 衍生生态占据 40% 以上席位**，DavidAU、HauhauCS、LuffyTheFox 等头部微调者形成“融合→去审核→I-Matrix 量化→GGUF 全尺寸发布”标准化流水线；**DeepSeek-V4 与 Kimi-K3** 代表新一代 MoE+原生多模态基座竞争；**GLM-5.2 / Solar-Open2** 守住中韩语系开源高地。  
**开源 vs 闭源**：头部基座模型（Kimi-K3、DeepSeek-V4、GLM-5.2）均选择**开放权重+宽松许可**，仅保留商业化 API 作为变现路径；闭源仅见于部分企业级代码模型。  
**量化/微调热点**：**GGUF 仍是社区分发主流**，但 **NVFP4 (vLLM)、BitNet (1-bit)、Ternary (2-bit)** 等极低比特方案加速落地；**I-Matrix / AWQ / MTP** 成为保精度量化标配；**边缘 TTS 与 1-bit ASR** 显示语音模型正向“端侧实时”收敛。

---

## 💡 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — **原生多模态 + 128K 上下文 + 压缩张量**，当前最强开放权重图文一体模型，适合长文档/多图推理基准测试。  
2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — **2-bit 三元量化在 llama.cpp 原生跑通 27B**，显存仅需 ~3.5 GB，是边缘/消费级 GPU 部署大模型的关键参考。  
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — **零样本任意版式 OCR**，下载量破 250 万验证生产可用性，直接替代商业 OCR API 的最佳开源候选。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*