# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-08 01:07 UTC

---

# 📊 Hugging Face 热门模型日报｜2026-08-08

---

## 🎯 今日速览

1. **视频生成迎来「MiniMax-H3」生态爆发**：官方模型周点赞近 3k，ComfyUI 生态、LoRA、量化版本同步霸榜，形成完整工具链。
2. **MoE 大模型密集发布**：DeepSeek-V4-Flash、GLM-5.2、Kimi-K3、LFM2.5 等头部厂商新一代 MoE 模型集中登榜，下载量均破百万级。
3. **工具型模型实用主义回归**：百度 Unlimited-OCR（3.9k 赞）、NVIDIA VoiceChat-11B、Mistral Shieldstral-3B 等垂类模型高热度，显示落地需求主导趋势。
4. **社区微调/量化链条成熟**：Unsloth、GGUF、INT4/INT8/NVFP4 量化版同步跟进，ComfyUI 适配成为视频/多模态模型分发标配。
5. **闭源权重开放加速**：MiniMax、Moonshot、DeepSeek、Z.ai 等头部厂商持续以开放权重+宽松协议抢占开发者心智。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 2,747 | 702,709 | DeepSeek 新一代 Flash 版 MoE，极致推理速度与成本比，下载量领跑榜单。 |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 10,283 | 1,308,186 | 月之暗面首个开放权重多模态 MoE，压缩张量部署友好，点赞数全榜第一。 |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,888 | 2,430,330 | 智谱最新 MoE 基座，DSA 架构优化长上下文，下载量最高、社区信任度极强。 |
| **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** | LiquidAI | 379 | 77,973 | 非 Transformer 液态基金会模型，2.6B 参数达 SOTA 效率，边缘部署新选择。 |
| **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)** | inclusionAI | 203 | 3,065 | 蚂蚁集团 Bailing 混合架构闪电版，主打低延迟对话与工具调用。 |
| **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)** | deepgrove | 227 | 686 | MoE 预览版，探索专家路由新机制，早期研究者关注标的。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 2,954 | 18,112 | 官方发布的图文生视频 SOTA，原生支持 I2V/T2V/V2V，引发生态连锁反应。 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 3,954 | 2,836,694 | 百度无限长文档 OCR，多语言/版面/公式全覆盖，下载量断层第一的生产级工具。 |
| **[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)** | black-forest-labs | 14,028 | 512,841 | 图像生成基石模型，长期霸榜，社区 LoRA/ControlNet 生态最完善。 |
| **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** | nvidia | 228 | 359 | 端到端语音对话 11B 模型，多论文支撑，推动实时语音 Agent 落地。 |
| **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** | Audio8 | 306 | 12,633 | 超轻量 0.6B TTS，ArkTTS 架构，边缘设备实时语音合成新尝试。 |
| **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** | microsoft | 302 | 456,140 | 微软多模态大模型，原生图文理解推理，企业级 RAG/文档解析强增强。 |
| **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** | thinkingmachines | 336 | 25,340 | 小参数多模态对话模型，主打数据效率与部署友好。 |
| **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** | lodestones | 221 | 0 | Krea 2 风格 LoRA，面向 ComfyUI 的文生图风格化微调。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Kwaipilot | 531 | 17,399 | 基于 Qwen3.5 MoE 的代码专用版，支持图文编程与 Agentic Coding。 |
| **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** | mistralai | 184 | 2,480 | 安全护栏小模型，专为内容审核/提示词注入防御设计，推理极快。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / ComfyUI 适配）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** | Comfy-Org | 936 | 3,139,920 | 官方模型的 ComfyUI 单文件分发版，下载量全榜最高，生态分发中枢。 |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-…-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 1,709 | 2,217,339 | 合并/微调/量化全链路产物，Uncensored+Heretic 风格，GGUF 量化即用。 |
| **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** | unsloth | 587 | 161,253 | Unsloth 官方量化，极速推理兼容 llama.cpp，附论文引用。 |
| **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** | larryvrh | 416 | 0 | 首个 H3 加速 LoRA，推理步数减半，社区加速生态起点。 |
| **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)** | drbaph | 177 | 0 | 上述 LoRA 的 ComfyUI 原生适配版，剪枝优化显存。 |
| **[realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)** | realrebelai | 168 | 87,870 | H3 多精度 GGUF 打包，基于 Comfy-Org 版本量化，CPU/苹果芯友好。 |
| **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)** | ethanfel | 380 | 0 | Qwen3-VL 32B 与 H3 文本编码器融合，INT8+ConvRot 量化，ComfyUI 直连。 |
| **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)** | LuffyTheFox | 425 | 332,992 | MoE 35B 合并微调，Hermes 数据+Uncensored，GGUF 多量化可选。 |
| **[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)** | Abiray | 127 | 452,420 | H3 全精度矩阵：NFP4/INT4/INT8/ConvRot，显存/速度/质量三选一。 |
| **[sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4)** | sakamakismile | 121 | 0 | 双模型融合文本编码器，NVFP4 量化，ComfyUI 文生视频增强链路。 |
| **[Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy)** | Kijai | 116 | 0 | 知名移植者 Kijai 的 ComfyUI 适配版，区域镜像加速下载。 |
| **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** | lightx2v | 129 | 0 | 基于 Diffusers 的 H3 蒸馏/加速版，支持 T2V/I2V/R2V 统一推理。 |
| **[SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)** | SexGod1979 | 113 | 0 | Apache-2.0 协议的 H3 微调/封装，Endpoint 兼容，商用友好。 |
| **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** | LiquidAI | 144 | 31,489 | 官方同步发布 GGUF，原厂保证质量，边缘部署首选。 |

---

## 🌐 生态信号分析

**模型家族势头**：**MiniMax-H3** 以「官方权重+ComfyUI 分发+社区 LoRA/量化/融合」形成完整生态闭环，单日衍生项目超 10 个，视频生成领域遥遥领先；**MoE 大模型家族**（DeepSeek-V4、GLM-5.2、Kimi-K3、LFM2.5、Qwen3.5-Moe）集中释放，参数量 2.6B–百亿级全覆盖，推理效率成核心竞争力。**工具型模型**（OCR、VoiceChat、Shieldstral）高热度说明企业落地从「聊天」转向「结构化理解/语音交互/安全合规」。

**开源 vs 闭源**：头部厂商（MiniMax、Moonshot、DeepSeek、Z.ai、百度、NVIDIA、Mistral）均以 **开放权重+宽松协议** 抢占开发者心智，闭源 API 模式在 Hub 暂无声量；社区微调（DavidAU、LuffyTheFox、Unsloth）基于开放权重二次创造，形成「官方放权→社区繁荣→反哺官方」正循环。

**量化/微调活动**：**GGUF 仍是主流分发格式**，但 **NFP4/INT4/ConvRot/NVFP4** 等混合精度量化加速渗透视频/多模态大模型；**ComfyUI 单文件/原生节点** 成为视频/图像模型分发标准；**模型融合** 趋势明显——Qwen3-VL 文本塔+H3 视频塔、Heretic/Hermes 数据混合、MoE 专家合并，社区已具备「乐高式」组装 SOTA 能力。

---

## 💎 值得探索

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** + **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** + **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)**  
   **理由**：视频生成当前最强开放权重组合，官方权重+生态分发+加速 LoRA 三件套，覆盖从科研复现到生产部署全链路，社区教程最丰富。

2.

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*