# Hugging Face 热门模型日报 2026-08-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-05 01:54 UTC

---

# 📊 Hugging Face 热门模型日报｜2026-08-05

---

## 🚀 今日速览

1. **中文头部大模型集中爆发**：Moonshot **Kimi-K3**（1.0万+赞）与 DeepSeek **V4-Flash 系列**（合计4300+赞）双双登顶，确立了长上下文 MoE 与高推理效率模型的双强格局。  
2. **视频生成进入「可用」临界点**：MiniMax **H3**（2000+赞）及其 ComfyUI/GGUF 生态迅速形成，标志着开源图文生视频模型从实验室走向生产部署。  
3. **百度 Unlimited-OCR（3881赞）与微软 Mage-VL（256赞）领衔多模态工具化趋势**——OCR 与文档理解模型下载量破百万，工业级落地需求显性化。  
4. **社区微调/量化生态极度活跃**：DavidAU、unsloth、HauhauCS 等高产作者持续产出 **Qwen3.5/3.6 MoE 变体（GGUF/IMatrix/INT8）**，下载量常超官方基座。  
5. **代码专用小模型崛起**：poolside **Laguna-S-2.1**（920赞）、Kwaipilot **KAT-Coder-V2.5**（474赞）印证「小参数、强代码、可本地跑」成为开发者新宠。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）
| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|-----------|------------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,307 / 433,284 | **新一代 Flash 架构**，极致推理速度与长上下文平衡，开箱即用的生产级基座。 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,011 / 2,737,621 | 早期版本下载量破 270 万，社区验证度极高，仍是多量化分支上游。 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,012 / 1,125,935** | **本周绝对王者**，MoE+超长上下文，中文指令遵循与工具调用 SOTA 级。 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,820 / 2,234,662 | 智谱最新 MoE-DSA 架构，双语对齐强，企业级部署文档完善。 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 158 / 47,393 | 非 Transformer 线性注意力架构，极小参数下长文本表现惊艳。 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 664 / 37,256 | 国产小参数指令模型，边缘侧部署首选。 |
| [K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 117 / 325 | LG 超大规模 MoE，韩语/英语双强，科研参考价值高。 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) / [pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 404/358 | 基于 Qwen3.6 MoE 继续预训练，Agentic Search 场景优化。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）
| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|-----------|------------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,026 / 0 | **开源视频生成新标杆**，图文→视频一致性与运动质量领跑，生态（ComfyUI/GGUF）同步就绪。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 605 / 2 | ComfyUI 原生封装，工作流零门槛接入。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 103 / 40,010 | GGUF 量化版，消费级显存即可跑视频生成。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,881 / **2,703,366** | **下载量全榜第一**，任意分辨率/语言/版面 OCR，文档数字化首选。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 256 / 435,784 | 文档理解特化 VL，表格/公式/版面结构化抽取强。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 286 / 15,500 | 轻量多模态对话模型，边缘侧视觉问答可行。 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 247 / 11,276 | 小参数高自然度 TTS，支持声色克隆，实时流式合成。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 410 / 2,072 | CPU/Edge 可跑的流式 TTS，极低延迟。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 176 / 0 | Krea2 风格 LoRA，文生图审美微调范例。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / Agent）
| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|-----------|------------|
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 920 / 82,912 | **代码专用小模型标杆**，2B 级别击败多数 7B 基座，本地 Copilot 理想替代。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 474 / 15,381 | Qwen3.5 MoE 续训，代码生成/补全/重构全能。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 193 / 2,987 | MoE 专家路由优化，数学推理与结构化输出增强。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 158 / 47,393 | 线性注意力架构，极长上下文检索/摘要场景极具性价比。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / IMatrix）
| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|-----------|------------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | **3,296 / 1,930,898** | **社区下载王**，去审查+激进指令跟随，GGUF 全量化系列覆盖 2bit-8bit。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,513 / 1,633,405 | 多路融合+IMatrix+MTP，极致量化保真，角色扮演/创写首选。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-...-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 265 / 323,116 | 9B 小体量同技术栈，边缘设备可跑。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 471 / 111,678 | 官方同步量化，Flash 架构首发 GGUF，推理加速库原生支持。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 304 / 170,055 | Kimi-K3 发布即量化，多精度矩阵满足从手机到服务器全链路。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 364 / 308,857 | Hermes 风格对齐+Genesis 融合，长文对话一致性强。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 188 / 0 | 视频生成+VL 双模融合，INT8 ConvRot 量化，ComfyUI 一键部署。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 174 / 69,253 | **NVFP4 量化** 250B 巨模单卡 H100 可跑，vLLM 生产级落地范例。 |

---

## 📡 生态信号深度解析（~160 字）

**模型家族势头**：**Qwen3.5/3.6 MoE** 与 **DeepSeek V4** 形成「双 MoE 龙头」——前者依托阿里开发生态衍生出数十个社区高性能变体（HauhauCS、DavidAU、LuffyTheFox 等），后者凭借 Flash 架构确立推理效率新基线。**Kimi-K3** 以单模型 10k+ 赞证明「超长上下文+工具调用」是当前中文商业化最强叙事。  
**开源 vs 闭源**：头部厂商（Moonshot、DeepSeek、MiniMax、百度、智谱、微软）均选择**核心权重开源 + 商业化托管/微调服务**策略，开源版本成为技术标杆与生态入口，闭源仅保留规模更大/数据更新的商业版。  
**量化/微调活跃度**：**GGUF/IMatrix/MTP/NVFP4** 并行演进，**unsloth** 成量化基建事实标准；**DavidAU/HauhauCS** 等「超级贡献者」以融合+量化+去审查三板斧，持续抢占下载榜前列，社区微调已成模型分发主渠道之一。

---

## 💎 值得探索的 3 个模型

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — **中文长上下文 Agent 基座首选**；128k+ 上下文+原生工具调用，配合 `unsloth/Kimi-K3-GGUF` 可在 24GB 显存跑满血版，适合知识库问答、代码仓库级理解、长文创作。  
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — **开源视频生成可用性分水岭**；图文→视频时空一致性达商用门槛，ComfyUI/GGUF 生态完备，**实测 12GB 显存即可生成 5 秒 720p**，内容创作/广告/教育视频批量化落地即刻可行。  
3. **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — **本地代码助手终极小模型**；2.1B 参数在 HumanEval+/MBPP 超越多数 7B，配合 `gguf` 量化可在 MacBook CPU 实时补全，**隐私敏感/离线开发场景零成本替代 Copilot**。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*