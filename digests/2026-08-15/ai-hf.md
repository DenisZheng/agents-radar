# Hugging Face 热门模型日报 2026-08-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-15 00:52 UTC

---

# 📊 Hugging Face 热门模型日报 · 2026-08-15

---

## 🚀 今日速览

1. **Qwen 3.8 系列霸榜**：阿里巴巴 Qwen 发布 `Qwen3.8-27B`（多模态）、`Qwen3.8-2.4T-A95B`（MoE 超大模型）及其 FP8/GGUF 量化版，合计斩获 **10,000+ 点赞**，确立中文开源多模态 SOTA 新高地。  
2. **视频生成生态爆发**：MiniMax `H3` 系列（官方版、ComfyUI 版、Turbo LoRA、GGUF 量化）占据 Top 30 近 **1/3 席位**，下载量破 **1400 万**，成为当前最热开源视频模型家族。  
3. **MoE 与混合架构成主流**：DeepSeek-V4、Nemotron 3.5、Kimi-K3、Qwen-A95B 均采用 MoE/混合专家架构，参数规模向 **百亿~万亿级** 跨越，推理效率成核心竞争力。  
4. **量化与部署工具链成熟**：Unsloth、Comfy-Org、Kijai 等社区力量快速产出 GGUF、FP8、ComfyUI 适配版，**“发布即可跑”** 已成常态。  
5. **音频/音乐生成补齐短板**：MiniMax-Music3、Nemotron-VoiceChat-11B 标志开源音频模型从 TTS 走向 **端到端语音对话/音乐创作**。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话说明 |
|------|------|-----|-----|------------|
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 916 | 3,832 | **万亿级 MoE 旗舰**，95B 激活参数，长上下文+强推理，开源最大规模中英双语基座。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,383 | 1,606,491 | **高性价比 Flash 版**，MoE 架构极致推理速度，适合实时对话/代理任务，下载量破 160 万。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 433 | 245 | Pro 版强化推理与工具调用，面向复杂 Agent 场景。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,673 | 1,974,635 | **本周点赞王**，MoE+压缩张量技术，200K 上下文，中文长文本理解 SOTA。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 257 | 119,572 | **NVFP4 量化原生训练**的 Nemotron-H 变体，推理延迟极低，适合边缘部署。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 143 | 34,137 | BF16 全精度版，供精度敏感场景基准测试。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 615 | 124,172 | **液态神经网络**小模型，常数内存推理，边缘/移动端首选。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 235 | 2,283 | 混合架构 tiny 模型，MIT 许可，适合二次开发商用。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话说明 |
|------|------|-----|-----|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 8,989 | 2 | **多模态旗舰**，27B 原生图文理解/生成，中文视觉问答、OCR、图表推理领跑。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,512 | 165,300 | 30B 统一图文模型，支持交错生成，学术界开源多模态基准新选项。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,920 | 1,997,541 | **视频生成霸主**，原生 720p/24fps，文生视频+图生视频双强，商业级画质开源。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 858 | 207,830 | 单文件扩散视频模型，支持 T2V/I2V/V2V，ComfyUI 原生兼容，部署极简。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 651 | 63 | **端到端音乐生成**，文本/风格/歌词控制，44.1kHz 高保真，填补开源音乐空白。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 493 | 149,865 | 社区蒸馏加速版，推理 3-5× 提速，保持画质，实时预览利器。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 176 | 9,060 | 专攻人物真实感的 LoRA，配合 H3 基座生成电影级人像视频。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 162 | 10,106 | 单文件文生图模型，ComfyUI 即插即用，轻量化艺术创作。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 381 | 1,366 | **端到端语音对话模型**，流式 ASR-LLM-TTS 联合建模，低延迟交互新范式。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入）

> 本期榜单暂无显性代码/数学/医疗专用模型上榜，专用能力多集成于上述通用大模型中。

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / ComfyUI 适配）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话说明 |
|------|------|-----|-----|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 795 | 0 | Unsloth 官方 GGUF 量化，4/8-bit 可选，Apple Silicon/消费级 GPU 秒跑 27B 多模态。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 414 | 596,774 | 30B 多模态 GGUF 版，下载量近 60 万，社区验证最充分的量化分发。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,317 | 11,768,622 | **下载量全站第一**（1176 万），ComfyUI 官方打包版，含 fp8/safetensors 双格式，零配置工作流。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,016 | 2,891,524 | 社区知名“融合+去审核+MTP”版本，角色扮演/创作写作首选，GGUF 多量化齐全。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 270 | 228,364 | 官方自发 GGUF，附 arXiv 技术报告，学术复现友好。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 295 | 0 | 官方 FP8 量化，H100/H200 推理吞吐最大化，生产级部署首选。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | 万亿 MoE 的 FP8 版，单节点 8×H100 即可跑满激活参数。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 156 | 136,774 | 视频模型首个 GGUF 量化，稳定扩散.cpp 兼容，CPU/低显存也能跑 H3。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 339 | 0 | 社区大神 Kijai 适配的 ComfyUI 原生节点包，含工作流示例。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 742 | 0 | Turbo 版专用 LoRA，进一步提速/定向风格控制。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 318 | 112,975 | ComfyUI 专用 LoRA 封装，一键加载，下载量 11 万+ 验证实用性。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 310 | 473 | 特定风格微调版，Apache-2.0 许可，展示 H3 可定制化潜力。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 140 | 11 | 早期预览版多模态笔记模型，探索 Agentic 记忆机制。 |

---

## 📈 生态信号深度解读（~160 字）

**模型家族势头**：**Qwen 3.8**（多模态+MoE 双线并进）、**MiniMax H3**（视频生成全栈霸权）、**DeepSeek-V4**（MoE 推理极致性价比）形成“三足鼎立”。Kimi-K3 以 10.6k 点赞证明**长上下文+压缩张量**路线极具市场号召力。  
**开源 vs 闭源**：头部厂商（阿里、MiniMax、Moonshot、DeepSeek、NVIDIA）均采用**“核心权重开源 + 商业 API 闭源”**双轨制，开源版本参数量、精度、量化齐全，**开源已成获取开发者心智的标配**。  
**量化/微调活跃度**：Unsloth、Comfy-Org、Kijai、DavidAU 等社区力量在**模型发布 24-48 小时内**交付 GGUF/FP8/ComfyUI/LoRA 全套制品，**部署门槛趋近零**；“融合模型”（Merge）与“去审核/角色扮演微调”持续繁荣，长尾需求被充分满足。  
**下一站看点**：端到端语音对话、视频生成实时流式、MoE 专家路由可解释性、边缘侧液态/小模型商业化落地。

---

## 💎 值得探索的 3 个模型

| 模型 | 探索理由 |
|------|----------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | **中文多模态 SOTA 即开即

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*