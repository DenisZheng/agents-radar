# Hugging Face 热门模型日报 2026-08-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-18 00:51 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-08-18

---

## 📰 今日速览

Qwen3.5 系列以 **Qwen3.5-27B**（1.07万赞）与 **Kimi-K3**（1.08万赞）双雄领跑，确立了中文开源大模型的统治地位。视频生成领域 **MiniMax-H3** 生态爆发，官方模型、ComfyUI 移植版、Turbo 蒸馏版、LoRA 微调版同台上榜，下载量破千万。量化加速成为主流：Unsloth 推出 GGUF/NVFP4 全谱系适配，FP8 量化官方版紧随其后。DeepSeek-V4 双版本（Pro/Flash）与 NVIDIA Nemotron 3.5 形成闭源级推理模型开源阵营。多模态向“原生统一”演进：Qwen、Kimi、Muse-Glimmer、LFM2 均为原生 Image-Text 架构。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 推理）

| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|----------|------------|
| **[Qwen/Qwen3.5-27B](https://huggingface.co/Qwen/Qwen3.5-27B)** | Qwen | 10,715 / 415,039 | Qwen3.5 旗舰密集模型，原生多模态、长上下文、工具调用全能，社区微调基座首选。 |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 10,802 / 2,163,953 | Moonshot 首个开源多模态 MoE，3B 激活参数媲美 30B 密集模型，推理效率极致。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,498 / 1,978,298 | DeepSeek V4 轻量版，保留强推理能力，适合低延迟部署，闭源级开源标杆。 |
| **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** | deepseek-ai | 573 / 25,006 | V4 旗舰版，数学/代码/复杂推理 SOTA，FP8 量化友好。 |
| **[Qwen/Qwen3.5-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.5-2.4T-A95B)** | Qwen | 1,041 / 9,465 | 超大规模 MoE（总参数 2.4T），专家数 95，训练数据 2.4T token，科研/企业级基座。 |
| **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** | nvidia | 307 / 231,271 | NVIDIA 面向 Blackwell 优化的 MoE，原生 NVFP4 量化，推理吞吐极致。 |
| **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)** | nvidia | 169 / 69,833 | 同架构 BF16 版，适合精度敏感场景对比基线。 |
| **[inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny)** | inclusionAI | 306 / 6,266 | 蚂蚁集团轻量混合架构（Bailing Hybrid），MIT 协议，边缘部署友好。 |
| **[dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev)** | dots-studio | 207 / 633 | 社区小规模实验性 MoE，探索稀疏激活新范式。 |

---

### 🎨 多模态与生成（视频 / 音频 / 图像 / 统一模态）

| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|----------|------------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,088 / 2,403,238 | 当前最火视频生成模型，Image-Text-to-Video 原生统一，物理一致性与指令遵循领先。 |
| **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** | Comfy-Org | 1,403 / 14,015,769 | ComfyUI 官方移植版，单文件 Diffusion 格式，下载量断层第一，生产工作流标配。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 1,109 / 465,529 | 实时视频生成（LTX Video），单步扩散，支持 I2V/T2V/V2V，延迟极低。 |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 905 / 10,375 | SOTA 级音乐生成，长结构连贯、风格可控，Diffusers 原生支持。 |
| **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** | lightx2v | 585 / 264,351 | 社区蒸馏加速版，推理步数大幅减少，适合实时交互场景。 |
| **[fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)** | fal | 243 / 18,562 | 针对人物真实感的 LoRA，单文件即插即用，商业拍摄级增强。 |
| **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** | larryvrh | 786 / 0 | 社区 Turbo LoRA，兼容加速推理与画质增强双目标。 |
| **[TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max)** | TenStrip | 236 / 0 | 基于 MiniMax-H3 的领域微调（成人内容方向），展示开放生态多样性。 |
| **[Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B)** | Gazingstars123 | 233 / 23,202 | 轻量级文生图，ComfyUI 单文件，2.9B 参数边缘部署友好。 |
| **[Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3)** | Comfy-Org | 167 / 256,988 | MiniMax-Music3 ComfyUI 移植版，Apache-2.0 协议，音频工作流标配。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 多模态理解）

| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|----------|------------|
| **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** | meta-models | 1,661 / 334,099 | 原生多模态 30B，图文理解推理强，非 LLaVA 派系，架构创新代表。 |
| **[LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B)** | LiquidAI | 162 / 6,816 | 液态神经网络（LNN）多模态小模型，连续时间动态推理，边缘端新范式。 |

---

### 📦 微调与量化（社区微调 / GGUF / FP8 / NVFP4 / 模板修复）

| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|----------|------------|
| **[unsloth/Qwen3.5-27B-GGUF](https://huggingface.co/unsloth/Qwen3.5-27B-GGUF)** | unsloth | 1,630 / 2,727,609 | Unsloth 官方 GGUF 全量化谱系（2bit~8bit），llama.cpp/OLLAMA 部署首选。 |
| **[Qwen/Qwen3.5-27B-FP8](https://huggingface.co/Qwen/Qwen3.5-27B-FP8)** | Qwen | 530 / 495,646 | 官方 FP8 量化，精度损失 <1%，vLLM/TensorRT-LLM 生产部署标准。 |
| **[orcarouter/Qwen3.5-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.5-27B-Uncensored-FP8)** | orcarouter | 436 / 15,812 | 去安全对齐版 FP8，研究对齐机制/无限制对话场景。 |
| **[JonathanColetti/Qwen3.5-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.5-27B-Uncensored-GGUF)** | JonathanColetti | 299 / 357,701 | 社区去审查 GGUF，含 MTP 模块，本地运行无限制。 |
| **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** | unsloth | 470 / 755,125 | 多模态模型 GGUF 量化先驱，证明视觉编码器可量化。 |
| **[unsloth/Qwen3.5-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.5-27B-NVFP4)** | unsloth | 240 / 378,177 | 针对 Blackwell/H100 的 NVFP4 量化，张量核心直驱，吞吐再提升。 |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 2,120 / 3,033,928 | 角色扮演/创意写作顶流微调，融合多路专家模型，GGUF 全量化，下载量极高。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 1,211 / 0 | 修复 Qwen3.5 官方 Jinja 聊天模板 Bug（工具调用/系统提示），MLX/Transformers 通用。 |
| **[Qwen/Qwen3.5-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.5-2.4T-A95B-FP8)** | Qwen | 220 / 12,295 | 超大 MoE 官方 FP8 量化，单节点 8xH100 即可跑通 2.4T 参数模型。 |

---

## 🌐 生态信号深度解析

**模型家族势头：** **Qwen3.5** 与 **MiniMax-H3** 双核驱动。Qwen 覆盖 27B 密集、2.4T MoE、FP8/NVFP4/GGUF 全量化链路，构建“从训练到边缘部署”完整工具链。MiniMax-H3 衍生出 Turbo、LoRA、ComfyUI、领域微调等 6+ 变体，形成视频生成**“模型即平台”**生态。Kimi-K3 以 MoE 小参数大性能验证稀疏架构工程化成熟。

**开源 vs 闭源：** 头部玩家（Qwen、DeepSeek、MiniMax、Moonshot、NVIDIA）均发布**开放权重旗舰模型**，闭源优势仅剩数据飞轮与服务化运营。社区微调（DavidAU、JonathanColetti、lightx2v）已具备媲美官方版的工程能力，**“官方提供基座，社区定制场景”**成常态。

**量化与微调热点：** **FP8 成为生产标准**（官方+社区双轨），**NVFP4/GGUF** 分别锁定数据中心与边缘端。**多模态量化**取得突破。提示工程下沉至模板层，体现部署细节决定体验。

---

## 💎 值得探索的 3 个模型

1.  **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
    **理由**：3B 激活参数实现 30B 级多模态推理，**重新定义边缘端大模型上限**。原生支持 Feature Extraction，适合 RAG/检索增强场景，MIT 类协议商业友好。

2.  **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**  
    **理由**：**视频生成落地标准件**。单文件、ComfyUI 原生、Apache-2.0、1400 万下载验证稳定性。接入即用，无需适配器，是构建视频应用/工作流的最短路径。

3.  **[unsloth/Qwen3.5-27B-GGUF](https://huggingface.co/unsloth/Qwen3.5-27B-GGUF)**

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*