# Hugging Face 热门模型日报 2026-08-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-10 01:13 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-08-10

---

## 🚀 今日速览
- **视频生成迎来“MiniMax-H3 时刻”**：MiniMaxAI 发布的 **MiniMax-H3** 以 3,245 点赞领跑，ComfyUI、LoRA、量化、Turbo 等全生态衍生模型同周爆发，标志着开源视频生成进入“即插即用”成熟期。  
- **MoE 大模型密集发布**：DeepSeek-V4-Flash、Kimi-K3、GLM-5.2、Ling-3.0-flash、KAT-Coder-V2.5 等 **MoE/稀疏架构** 模型占据 LLM 榜单前列，长上下文与推理加速成核心竞争力。  
- **量化与边缘部署成主流**：GGUF、NVFP4、INT4/8、ComfyUI 原生适配版本下载量远超原版权重，社区已将“模型即服务”推向消费级显存。  
- **多模态向“统一理解/生成”融合**：Qwen3-VL、Mage-VL、Unlimited-OCR 等视觉语言模型在 OCR、文档理解、视频理解任务上表现强势。  
- **安全与护栏模型显性化**：Mistral Shieldstral-1.0-3B 入榜，说明合规/安全层正成为部署标配。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,945 | 868,576 | DeepSeek 新一代 Flash MoE，极致推理速度与长上下文，开源权重直接可商用。 |
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,399 | 1,456,459 | Moonshot 旗舰 MoE 多模态模型，原生支持超长上下文与工具调用，中文场景 SOTA 级。 |
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,914 | 2,488,397 | 智谱最新 MoE-DSA 架构，兼顾代码/推理/对话，开放权重与商业许可并行。 |
| [**Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 245 | 4,747 | 蚂蚁集团 Bailing Hybrid 架构，面向金融/企业级长文本与工具链。 |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 452 | 85,651 | 非 Transformer 流式架构，常数内存推理，边缘端部署极具优势。 |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18,574 | 基于 Qwen3.5 MoE 的代码专用模型，Agentic Coding 基准领先。 |
| [**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 260 | 543 | 端到端语音对话模型，融合 ASR/LLM/TTS，低延迟实时交互。 |
| [**mistralai/Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5,651 | 轻量安全护栏模型，专为内容过滤/提示注入防御设计。 |
| [**deepgrove/maple-preview**](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 289 | 1,089 | MoE 预览版，探索稀疏专家路由新机制。 |
| [**endless-frontier/BigBang-v1**](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 123 | 482 | Qwen3.5 MoE 微调，对话与指令跟随增强版。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,245 | 35,295 | **本周之王**：原生支持 I2V/T2V/V2V，物理一致性与运动幅度业界领先，开放权重引发生态爆发。 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,986 | 2,889,062 | 百度无限长文档 OCR 模型，任意分辨率/版面/语言零样本识别，企业级文档解析首选。 |
| [**black-forest-labs/FLUX.1-dev**](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,059 | 487,171 | 长期霸榜的 DiT 文生图基座，生态最完善、ControlNet/LoRA 最丰富。 |
| [**microsoft/Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 323 | 461,150 | 微软统一视觉语言模型，图像理解/推理/OCR/视频问答全能。 |
| [**Audio8/Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 13,132 | 小参数高自然度 TTS，支持声色克隆与流式合成，端侧部署友好。 |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 233 | 6,117 | MiniMax-H3 蒸馏加速版，步数减半画质损失极小，实时视频生成可行。 |
| [**Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot**](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511,473 | MiniMax-H3 全量化套餐（NFP4/INT4/INT8），单张 24GB 显存即可跑满血版。 |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 545 | 0 | 首批 Turbo LoRA，极低成本适配风格/动作控制。 |
| [**drbaph/MiniMax-H3-Turbo-Lora-ComfyUI**](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 231 | 0 | ComfyUI 原生剪枝 LoRA，即插即用无额外依赖。 |
| [**SexGod1979/PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 231 | 0 | 面向特定美学风格的 MiniMax-H3 微调，Apache-2.0 可商用。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入、OCR 等）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,986 | 2,889,062 | （同上）文档智能化入口级模型，下载量证明工程落地需求旺盛。 |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18,574 | （同上）代码生成/补全/重构一体化，Agent 工作流核心组件。 |
| [**microsoft/Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 323 | 461,150 | （同上）多模态理解通才，RAG/文档问答/视频分析通用底座。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ、ComfyUI 适配）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,073 | 4,947,943 | **下载量冠军**：ComfyUI 官方单文件打包，双击即用，零配置落地视频生成。 |
| [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 627 | 188,761 | Unsloth 量化工具链产出，多规格 GGUF 覆盖从手机到服务器全场景。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,808 | 2,390,692 | 社区顶级融合/解审/长上下文 GGUF，角色扮演与创意写作首选。 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 455 | 396,282 | MoE 稀疏 + Hermes 数据 + GGUF，兼顾智能与推理速度。 |
| [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 418 | 0 | Qwen3-VL + MiniMax-H3 文本编码器 INT8 量化，ComfyUI 多模态工作流一体化。 |
| [**realrebelai/MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 160,747 | 基于 Comfy-Org 版本的全系列 GGUF 量化，覆盖 Q2_K~Q8_0。 |
| [**LiquidAI/LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 174 | 68,468 | 官方发布 GGUF，原生支持 llama.cpp/ollama，边缘部署零门槛。 |
| [**Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot**](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511,473 | （同上）视频模型量化标杆，NFP4 显存占用仅 FP16 1/4。 |
| [**sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 143 | 0 | 双模态编码器融合量化，探索视频理解+生成统一管线。 |
| [**Kijai/MiniMax-H3_comfy**](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 234 | 0 | 资深 ComfyUI 适配者的首发移植版，节点级优化。 |
| [**Kijai/MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 169 | 0 | 实验性分支，测试新采样器/注意力优化。 |

---

## 🌐 生态信号分析
**模型家族势头**：**MiniMax-H3** 以“单周 10+ 衍生版本、ComfyUI/GGUF/LoRA/量化全覆盖”复刻了 FLUX.1-dev 当年的生态爆发路径，确立开源视频生成新基座；**DeepSeek/Moonshot/Z.ai/GLM** 四大 MoE 家族同周更新，稀疏架构已成大模型标配，**长上下文（128k+）与推理加速（Flash/Linear Attention）** 是核心护城河。  
**开源 vs 闭源**：头部厂商均采用“权重开放 + 宽松协议（Apache-2.0 / 自定义商用许可）”，闭源仅保留 API 服务与企业级 SLA，开源生态吸纳社区微调/量化/蒸馏形成正向飞轮。  
**量化/微调活动**：**GG

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*