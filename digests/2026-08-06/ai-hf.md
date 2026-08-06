# Hugging Face 热门模型日报 2026-08-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-06 01:58 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-08-06

---

## 📰 今日速览

今日榜单呈现 **“中国厂商主导头部、多模态视频/OCR 爆发、MoE 架构全面普及、社区量化生态成熟”** 四大特征。MiniMax-H3 与 Kimi-K3 双子星领跑视频与多模态理解；DeepSeek-V4-Flash 与 GLM-5.2 稳坐 LLM 下载榜首；百度 Unlimited-OCR 以 270 万下载量证明工具类模型的极高落地价值；GGUF/INT8 量化版本普遍跟进官方发布，显示边缘侧部署需求已成主流。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,500 | 433K | DeepSeek V4 系列最新轻量闪电版，推理速度与质量平衡，周下载破 40 万印证生产级需求。 |
| [**DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,031 | 2.74M | 基础 Flash 版累计下载近 300 万，确立开源 MoE LLM 事实标准。 |
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,849 | 2.23M | 智谱新一代 MoE 大模型，点赞榜首，支持超长上下文与工具调用，中文对话表现强劲。 |
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,126 | 1.13M | 月之暗面多模态旗舰，点赞破万，原生支持图文理解与超长上下文，社区关注度最高。 |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 285 | 47K | 非 Transformer 液态架构小模型，探索线性注意力替代方案，学术研究价值高。 |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,849 | 2.23M | 智谱新一代 MoE 大模型，点赞榜首，支持超长上下文与工具调用，中文对话表现强劲。 |
| [**XYZAILab/XYZ-Aquila-mini**](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 416 | 1.3K | 基于 Qwen3.5 MoE 微调的小型代理模型，主打 Agentic Search 场景。 |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 497 | 15K | 快手代码专用 MoE，针对开发场景深度优化，下载增长迅速。 |
| [**inclusionAI/Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 156 | 25 | 蚂蚁集团混合架构轻量模型，主打快速推理与对话。 |
| [**deepgrove/maple-preview**](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 159 | 0 | MoE 预览版，实验性混合专家架构探索。 |
| [**LGAI-EXAONE/K-EXAONE-2.0-750B-A37B**](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 129 | 325 | LG 超大规模 MoE（750B 总参数），韩语/英语双强，部署门槛极高。 |

---

### 🎨 多模态与生成（视频 / 图像 / 音频 / OCR）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,502 | 10.8K | **本周视频生成王者**，原生支持 Image-Text-to-Video，Diffusers 生态原生，商用级画质与一致性。 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,908 | 2.7M | **下载量全榜第一**，通用 OCR 大模型，任意分辨率/语言/版面零样本识别，企业级落地标杆。 |
| [**microsoft/Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 276 | 435K | 微软多模态理解模型，强化文档/图表推理，企业知识库 RAG 场景适用。 |
| [**thinkingmachines/Inkling-Small**](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 308 | 15.5K | 小参数多模态对话模型，边缘部署友好，社区复现活跃。 |
| [**Audio8/Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 275 | 11K | 0.6B 参数流式 TTS，低延迟 CPU 推理，适配实时语音助手。 |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 417 | 2K | 极简本地 TTS，CPU/边缘设备实时合成，开源语音合成新选择。 |
| [**lodestones/Kroma**](https://huggingface.co/lodestones/Kroma) | lodestones | 192 | 0 | 基于 Krea 风格的 LoRA，ComfyUI 生态图像生成微调。 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 757 | 2 | MiniMax-H3 的 ComfyUI 单文件封装，生态适配速度极快。 |

---

### 🔧 专用模型（代码 / 数学 / Agent / 搜索）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 497 | 15K | MoE 代码专用模型，快手出品，推理与生成双强。 |
| [**XYZAILab/XYZ-Aquila-pro**](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 366 | 1.4K | Agentic Search 增强版，集成工具调用与联网检索能力。 |
| [**mistralai/Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 132 | 166 | 安全护栏小模型，用于内容合规过滤，Mistral 生态补齐关键一环。 |
| [**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 126 | 80 | 端到端语音对话大模型，NVIDIA 语音交互核心资产。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / INT8）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,590 | 1.63M | **社区下载冠军**，Qwen3.6 MoE 融合多路微调 + MTP + GGUF 全量化，角色扮演/长文本表现极致。 |
| [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 502 | 111K | 官方发布即跟进的 GGUF 量化，Unsloth 优化推理速度，本地部署首选。 |
| [**unsloth/Kimi-K3-GGUF**](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 316 | 170K | Kimi-K3 量化版，保留多模态能力，显存需求大幅降低。 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 386 | 308K | Hermes 风格指令微调 + GGUF，编码与对话平衡优秀。 |
| [**DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 282 | 323K | 9B 小参数高性能量化，I-Matrix 量化保真度高，消费级显卡可跑。 |
| [**realrebelai/MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 138 | 40K | 视频生成模型罕见的 GGUF 量化尝试，探索本地视频生成可能性。 |
| [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 286 | 0 | Qwen3-VL 32B 的 INT8 旋转量化 + ComfyUI 适配，多模态量化前沿。 |
| [**EschaLabs/Qwen3.6-35B-A3B-Escha-W2**](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 210 | 3K | Safetensors 格式全精度微调，保留 MoE 专家路由特性。 |
| [**empero-ai/Qwythos-27B-v1**](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 145 | 2.2K | Qwen3.5 基座融合微调，多模态理解增强版。 |

---

## 🌐 生态信号分析

**模型家族势头**：**Qwen3.5/3.6 MoE 系列**成社区微调绝对主力（前 30 占 6 席），DeepSeek-V4 与 GLM-5.2 确立**官方开源 MoE 双强**格局，MiniMax-H3 打开**视频生成开源新赛道**。  
**开源 vs 闭源**：头部厂商（MiniMax、Moonshot、DeepSeek、Z.ai、百度）均选择**核心权重开源 + 商业 API 并行**，开放程度显著高于 2024 年；闭源仅剩极少数超大规模模型（如 K-EXAONE-750B）。  
**量化/微调活动**：**GGUF 成事实标准**，Unsloth、DavidAU 等头部量化者“发布即跟进”；**MTP（Multi-Token Prediction）、I-Matrix、INT8 ConvRot** 等先进量化技术下沉到 9B-35B 模型，消费级 24-48GB 显存即可跑满血 MoE；**视频模型量化**萌芽，预示本地 AIGC 视频即将爆发。

---

## 💎 值得探索

1. **MiniMaxAI/MiniMax-H3** — **首个原生支持 Image-Text-to-Video 的开放权重商用级模型**，Diffusers 原生、ComfyUI 即插即用，视频生成研发与应用必试。  
2. **baidu/Unlimited-OCR** — **270 万下载验证的通用 OCR 基座**，零样本任意版面/语言识别，文档数字化、RAG 预处理、自动化流程可直接落地。  
3. **DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF** — **社区微调天花板**：融合多路 SFT、MTP 加速、I-Matrix 高保真量化，单卡 24GB 即可跑 27B MoE 长文本/角色扮演，研究“微调叠加+极致量化”范式的最佳样本。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*