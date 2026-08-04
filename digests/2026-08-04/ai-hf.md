# Hugging Face 热门模型日报 2026-08-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-04 01:55 UTC

---

# 📋 Hugging Face 热门模型日报 | 2026-08-04

---

## 🚀 今日速览

今日榜单由 **Moonshot AI 的 Kimi-K3**（近万点赞、百万级下载）与 **DeepSeek-V4-Flash 系列** 双雄领跑，标志着国产 MoE 大模型正式进入“V4/ K3”迭代周期。多模态方向，**MiniMax-H3（文生视频）** 与 **百度 Unlimited-OCR** 引爆关注，前者尚未开放下载但已成社区焦点，后者以 260 万下载量验证了工业级 OCR 需求。社区侧，**Qwen3.5/3.6 MoE 微调融合模型**（DavidAU、HauhauCS、LuffyTheFox 等）占据 5 席前 30，GGUF/INT4 量化与 Unsloth 加速成为分发标配。闭源大厂（Moonshot、DeepSeek、MiniMax、Z.ai、百度、微软）与开源微调社区形成“核心模型发布 → 社区极速量化/融合 → 二次分发爆发”的完整飞轮。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 9,854 | 967,622 | **今日霸榜王**：MoE 混合专家架构，原生支持超长上下文与多模态，首发即登顶，标志国产旗舰模型进入 K 系列新纪元。 |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,798 | 2,180,509 | Z.ai 新一代 MoE 基座，下载量破 218 万，兼顾推理与对话，是除 Kimi/DeepSeek 外最受追捧的开放权重旗舰。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 2,062 | 236,076 | **V4 系列最新快照**，Flash 版主打低延迟高吞吐，同周发布非 Flash 版下载破 274 万，生态渗透率极高。 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,991 | 2,746,291 | V4 基础版，下载量全榜第一，确立 DeepSeek 作为开源社区“默认基座”的地位。 |
| **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | 910 | 81,584 | 代码导向的 2.1B 小模型，强调 Agentic 编码能力，适合边缘部署与专用微调。 |
| **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | 652 | 34,705 | 国产 3B 级高性能模型，主打中英文平衡与低资源推理。 |
| **[XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro)** | XYZAILab | 351 | 1,214 | 基于 Qwen3.5 MoE 的 Agentic Search 版本，工具调用与检索增强深度融合。 |
| **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)** | EschaLabs | 156 | 2,682 | 社区首批 Qwen3.6 MoE 微调，验证新架构可塑性。 |
| **[amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think)** | amd | 149 | 2,078 | AMD 发布的推理增强型 MoE，针对 MI300X 优化，展示硬件厂商下场训练趋势。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 1,473 | 0 | **文生视频新王**：Image-Text-to-Video SOTA 候选者，虽未开放权重下载但已引发 ComfyUI 等生态适配狂潮。 |
| **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** | Comfy-Org | 448 | 2 | ComfyUI 官方适配分发，标志工作流生态对新视频模型的“零日支持”能力。 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 3,847 | 2,601,062 | **工业级 OCR 标杆**：任意语言、任意版面、长文档零样本识别，下载量破 260 万，生产落地首选。 |
| **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** | thinkingmachines | 264 | 8,504 | 轻量多模态对话模型，主打边缘设备实时图文交互。 |
| **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** | microsoft | 233 | 431,487 | 微软发布的视觉语言模型，强调文档理解与 GUI 交互，下载量超 43 万。 |
| **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** | Audio8 | 212 | 4,609 | 0.6B 参数流式 TTS，低延迟合成，适合实时语音助手。 |
| **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** | owensong | 398 | 1,944 | 极致轻量本地 TTS，CPU/Edge 即可跑通，主打隐私优先。 |
| **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** | lodestones | 159 | 0 | 基于 Krea 的 LoRA 风格迁移，面向 ComfyUI 创意工作流。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入、Agent）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Kwaipilot | 445 | 14,339 | 基于 Qwen3.5 MoE 的代码专用版，强化 Agentic 编程与 Repo 级理解。 |
| **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** | microsoft | 268 | 2,988 | 面向 Computer Use 的 27B 模型，支持 GUI 操作与工具链调用。 |
| **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** | nota-ai | 168 | 68,778 | 250B 超大模型 NVFP4 量化，单机多卡即可推理，挑战超大模型部署下限。 |
| **[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)** | XYZAILab | 391 | 1,063 | 小参数版 Agentic Search 模型，适合资源受限场景。 |
| **[empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1)** | empero-ai | 119 | 1,736 | Qwen3.5 继续预训练，增强长文本与领域知识。 |

---

### 📦 微调与量化（社区融合、GGUF、AWQ、Unsloth）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 1,433 | 1,550,034 | **社区融合王者**：多路专家融合 + MTP + NEO Imatrix 量化，下载破 155 万，GGUF 分发标杆。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 3,270 | 1,895,741 | Qwen3.6 MoE 激进解除限制版，Vision+Text 双模，社区高关注度微调。 |
| **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** | unsloth | 429 | 69,656 | Unsloth 官方量化，首日上架即破 6 万下载，验证 V4 量化需求爆发。 |
| **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** | unsloth | 282 | 128,215 | Kimi-K3 发布同周量化上架，显著降低部署门槛。 |
| **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)** | LuffyTheFox | 344 | 287,745 | Hermes 风格融合 + GGUF，兼顾角色扮演与工具调用。 |
| **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** | DavidAU | 237 | 304,420 | 9B 级小模型极致融合量化，边缲部署首选。 |
| **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot)** | ethanfel | 99 | 0 | 多模态融合实验：Qwen3-VL + MiniMax-H3 视频理解，INT8 量化适配 ComfyUI。 |
| **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)** | unsloth | 242 | 1,324 | Unsloth 优化版原生权重，加速微调与推理。 |

---

## 📡 生态信号深度解读

**1. “三极鼎立”格局形成**：Moonshot (Kimi-K3)、DeepSeek (V4 系列)、Z.ai (GLM-5.2) 三大家同周发布旗舰 MoE，且均采用**开放权重 + 宽松许可**策略，彻底改变过往“闭源 API 为主”的格局，推动开源生态从“追赶闭源”转向“同台竞技”。

**2. Qwen 衍生生态爆发期**：前 30 名中 **7 款基于 Qwen3.5/3.6 的社区融合/微调模型**，DavidAU 等核心玩家已形成“融合 → 量化 → 分发”标准化流水线，NEO Imatrix、MTP、GGUF 成为社区分发三件套，**模型即数据、融合即训练**成为新范式。

**3. 视频生成进入“模型即服务”前夜**：MiniMax-H3 权重未开放但 ComfyUI、社区已完成适配，预示视频模型将走过“发布即开源权重”的路径，转向**推理端点 + 工作流生态**的商业化分发模式。

**4. 量化技术下沉至 INT4/NF4/NVFP4**：从 GGUF 到 NVFP4、INT8 ConvRot，量化粒度与算子优化已成模型能否落地的关键，**硬件厂商（AMD、Nota-AI）亲自下场适配**成为新趋势。

**5. 垂直工具模型商业化验证**：Unlimited-OCR 260 万下载、Mage-VL 43 万下载证明，**解决单一痛点的专用多模态模型**比通用聊天模型更具商业落地确定性。

---

## 💎 值得探索

| 模型 | 推荐理由 |
|------|----------|
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | **必试

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*