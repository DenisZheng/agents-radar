# Hugging Face 热门模型日报 2026-08-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 02:21 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-08-07

---

## 1. 今日速览

- **视频生成迎来「MiniMax 时刻」**：MiniMax-H3 以 2,762 点赞领跑全榜，ComfyUI 官方分发版下载破 220 万，配套 LoRA、量化、蒸馏变体同步爆发，标志着开源图文生视频进入工业级可用阶段。  
- **中文 MoE 巨头集中发布**：DeepSeek-V4-Flash、Kimi-K3、GLM-5.2、KAT-Coder-V2.5 同周霸榜前 20，MoE + 长上下文 + 代码能力成为国产基座模型标配。  
- **量化与部署生态全面成熟**：unsloth、GGUF、NVFP4/INT4/ConvRot 等低比特格式覆盖所有头部模型，ComfyUI 成为视频/多模态部署事实标准。  
- **工具型模型崛起**：百度 Unlimited-OCR 下载近 280 万，NVIDIA Nemotron VoiceChat、Mistral Shieldstral 等垂类模型快速跻身热榜，场景化落地成新风向标。  
- **FLUX.1-dev 长尾效应持续**：发布数月后仍以 1.4 万点赞稳居总榜首，扩散模型社区生态粘性远超预期。

---

## 2. 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|-----|-----|------------|
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,651 | 617.9k | DeepSeek 最新 Flash 版 MoE，推理速度与长文本能力大幅增强，开源权重即刻可商用。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,204 | 1.26M | Kimi 第三代基座，原生 1M+ 上下文 + 多模态，压缩张量格式极大降低部署门槛。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,875 | 2.39M | 智谱新一代 MoE，DSA 稀疏注意力实现超长推理，中英代码基准全面超越同参数量模型。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,045 | 2.64M | Flash 系列基础版，下载量断层第一，社区微调/量化衍生模型最多的基座。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 336 | 73.6k | 非 Transformer 架构（Liquid Foundation Model），小参数高性能，边缘端部署新选择。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 190 | 1.2k | 蚂蚁集团闪电版 MoE，主打低延迟推理，适配金融级合规场景。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 427 | 1.6k | 基于 Qwen3.6 MoE 微调的轻量多模态模型，中文指令跟随表现亮眼。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 226 | 3.4k | 社区深度微调 Qwen3.6 MoE，强化代码与数学推理，开放权重。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|-----|-----|------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,762 | 12.1k | **本周之王**：原生支持图文生视频、首帧控制、运动一致性，开源即 SOTA 级商用质量。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 854 | 2.30M | ComfyUI 官方单文件分发，内置工作流模板，下载量碾压原版，落地首选。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,933 | 2.79M | 百度无限长文档 OCR，支持版面分析/公式/表格，文档数字化流程标准件。 |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,013 | 523k | 文生图基座常青树，LoRA/ControlNet 生态最丰富，长尾下载持续领跑。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 289 | 440k | 微软多模态统一模型，图文理解/生成/编辑一体化，企业级 RAG 场景就绪。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 326 | 22.2k | 小参数多模态对话模型，边缘端部署友好，社区活跃度高。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 208 | 0 | 基于 Krea 架构的文生图 LoRA，ComfyUI 原生支持，风格化能力强。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 297 | 12.2k | 0.6B 参数高保真 TTS，流式合成延迟 < 100ms，实时语音交互首选。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 182 | 206 | 英伟达端到端语音对话模型，融合 ASR/LLM/TTS，单模型闭环语音交互。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 安全）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|-----|-----|------------|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 522 | 17.0k | 快手代码专用 MoE，Qwen3.5 MoE 为基座，HumanEval+ / MBPP 大幅领先同量级。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 211 | 419 | MoE 混合专家架构预览版，主打数学推理与工具调用，技术报告同步发布。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 164 | 1.5k | Mistral 3B 安全护栏模型，专为内容审核/提示词注入检测设计，vLLM 原生加速。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 低比特）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|-----|-----|------------|
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 549 | 145k | Unsloth 官方 GGUF 量化，全精度对齐，llama.cpp / ollama 一键跑通。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,654 | 2.09M | 社区「厨神」级融合微调 + 多规格 GGUF，解除拒答、长文本、角色扮演全能。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 341 | 0 | Qwen3-VL 32B + MiniMax-H3 文本编码器，INT8 + ConvRot 量化，ComfyUI 多模态工作流直插。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 307 | 0 | 首个 MiniMax-H3 官方风格 Turbo LoRA，推理步数减半、画质无损。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 157 | 65.7k | MiniMax-H3 全系列 GGUF（Q2~Q8），ComfyUI 原生加载，显存 8GB 即可跑 720p。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 124 | 0 | Turbo LoRA 的 ComfyUI 专用剪枝版，体积 < 200MB，加载即用。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 411 | 309k | Hermes 风格融合微调 + 全量化套件，编码/创作/对话三高。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 112 | 273k | **首发 NVFP4/INT4/ConvRot 全套量化**，Blackwell 架构原生加速，视频生成显存再降 40%。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 111 | 0 | 双模型蒸馏融合：Qwen3-VL 视觉 + MiniMax-H3 文本编码器，NVFP4 统一量化。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 128 | 12.8k | 官方发布 GGUF，非 Transformer 架构在 llama.cpp 上的首秀。 |

---

## 3. 生态信号

**模型家族势头**：MiniMax-H3 以「基座 + ComfyUI 分发 + LoRA + 多规格量化」全套矩阵霸屏，形成类似 FLUX 早期的生态飞轮；DeepSeek-V4 / Kimi-K3 / GLM-5.2 三大国产 MoE 同周迭代，确立「MoE + 长上下文 + 多模态」为 2026 H2 基座标配。  
**开源 vs 闭源**：头部厂商（MiniMax、DeepSeek、Moonshot、Z.ai、百度、微软、英伟达、Mistral）均选择 **开放权重 + 商用友好协议**，闭源仅剩极少数 API 服务；社区微调/量化反哺速度从「周级」缩短至「日级」。  
**量化与部署**：GGUF 仍是 LLM 部署通用标准，但 **NVFP4 / INT4-ConvRot** 在视频/多模态扩散模型上快速成为新常态，ComfyUI 单文件分发 + 原生工作流 已成视频生成交付标准范式。

---

## 4. 值得探索

1. **MiniMaxAI/MiniMax-H3** — 开源图文生视频当前天花板，配合 Comfy-Org 分发版与 larryvrh Turbo LoRA，单张 24GB 显卡即可产出商用级 5s/720p 视频，适合内容创作、广告预览、游戏原画动态化。  
2. **moonshotai/Kimi-K3** — 原生 1M+ 上下文 + 多模态 + 压缩张量，单卡 80GB 可跑满血推理，长文档 RAG、代码库级理解、超长对话场景零改造落地。  
3. **Abiray/Min

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*