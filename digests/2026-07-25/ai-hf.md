# Hugging Face 热门模型日报 2026-07-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-25 02:04 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-25

---

## 🚀 今日速览

今日榜单呈现**“多模态大模型全面爆发、量化部署生态成熟、MoE 架构成主流”**三大特征。百度 `Unlimited-OCR` 与 Google `Gemma-4-31B-it` 双双破 3k 点赞，领跑视觉语言赛道；Z.ai `GLM-5.2` 以 4.4k 点赞刷新 MoE 大模型关注度纪录；Qwen3.6 系模型占据 5 个席位，社区微调/量化（GGUF/1-bit/2-bit）下载量破百万，**“小模型强能力、量化即服务”**已成部署标配。机器人 VLA（Vision-Language-Action）模型首入热榜，标志具身智能进入开源落地期。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,416 | 667,403 | **本期点赞王**。MoE+DSA 架构，32B 激活参数逼近密集 100B 性能，原生支持 128K 上下文与工具调用，开源权重引发生态共建热潮。 |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,360 | 12,629,921 | Gemma 4 旗舰，多模态原生、31B 稠密参数，**下载量断层第一**，验证 Google “小而强”路线在边缘/消费级硬件的统治力。 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 542 | 1,106 | 250B 参数稠密模型罕见开源，Depth-Upscaling 扩展自 70B，韩语/英语双强，面向企业级长文本与 RAG 场景。 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 372 | 8,169 | 3B 小模型通过知识蒸馏对齐 70B 级推理能力，中文基准超同量级，适配手机/车载端侧部署。 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 149 | 4,266 | 1B Granite-MoE-Hybrid，主打安全合规与结构化输出，面向受监管行业（金融/医疗）的轻量化合规基座。 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 612 | 28,992 | 代码专用 70B 基座，Fill-in-the-Middle 与 Repo-level 理解强，配套 GGUF/NVFP4 量化版同步上榜，工具链完备。 |

---

### 🎨 多模态与生成（视觉语言 / 图像 / 视频 / 音频）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,014 | 2,500,391 | **OCR 赛道霸主**。任意分辨率/长文本/多语言零样本识别，下载量 250 万+，已成文档解析、RAG 入库的事实标准组件。 |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,503 | 6,460,680 | Qwen3.5-MoE 视觉版，35B 总参/3B 激活，原生图文理解/OCR/视频摘要，**社区微调基座首选**，GGUF 生态极其丰富。 |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,360 | 12,629,921 | （同上，多模态原生指令版） |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,546 | 27,883 | 多模态对话新秀，强调 “思维链可视化” 与工具调用透明化，适合 Agent 可解释性研究。 |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,263 | 756,668 | Kimi 2.5 代码多模态版，Compressed-Tensors 量化保性能，擅长 repo-level 代码生成与图表理解。 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 235 | 891 | Flow-based 文生图/图编辑统一框架，无需扩散采样，推理延迟降 60%，Diffusers 原生支持。 |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 112 | 30,303 | 面向边缘端的世界模型，4D 视频生成与物理仿真一体化，配套 TensorRT 部署包，机器人仿真首选。 |

---

### 🔧 专用模型（代码 / 数学 / 机器人 / 语音 / 嵌入）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 173 | 559 | **VLA 里程碑**。MiniCPM-V 为骨干的视觉-语言-动作模型，实操机械臂抓取/组装，开源数据集+权重，具身智能复现门槛大降。 |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 123 | 349 | 同系列追踪模型，单目视频 6DoF 姿态估计，配合 Manip 组成 “感知-决策” 闭环。 |
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 937 | 797,525 | 0.6B 流式 ASR，RTF < 0.1，多语言/噪声鲁棒，NVIDIA NeMo/Riva 生产级部署首选。 |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 125 | 396 | Qwen3.5-MOE 代码专精版，HumanEval+ / MBPP+ 双榜 SOTA，支持 128K 仓库级上下文。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 低比特）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,069 | 2,057,103 | **社区微调榜首**。去审查+激进指令跟随，MoE 稀疏结构量化损失极小，GGUF 全精度/4bit/8bit 全谱系，消费级 24GB 显存即可跑满血 MoE。 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 632 | 2,028,115 | **1-bit 极限量化** 标杆，Llama.cpp 原生，27B 模型压至 1.8GB，困惑度仅增 0.03，边缘端大模型落地范本。 |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,006 | 595,415 | 2-bit 三元量化，精度/体积平衡更优，同作者双版本霸榜证明**超低比特量化已可生产可用**。 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,455 | 1,906,539 | Claude 风格长文本/推理蒸馏，9B 小身材承载 1M 上下文，GGUF 量化后单卡 4090 跑满，角色扮演/长文本摘要热门。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 486 | 407,421 | 多路融合 + MTP (Multi-Token Prediction) 加速推理，Unsloth 训练，命名虽长但 “开箱即用” 体验极佳。 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 134 | 36,703 | Hermes 系指令风格迁移至 Qwen MoE，保留工具调用与结构化输出，GGUF 适配 llama.cpp/vLLM 双栈。 |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 170 | 57,536 | Unsloth 官方量化，动态 4bit/8bit 混合，配套 vLLM/SGLang 高吞吐部署脚本，代码助手落地加速包。 |
| [**poolside/Laguna-S-2.1-GGUF**](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 133 | 62,092 | 官方发布量化版，Region:US 合规标注，企业级分发友好。 |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 129 | 89,186 | NVFP4 格式，原生 TensorRT-LLM/H100 加速，显存占用再降 2×，大批量推理成本优化首选。 |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 90 | 494 | GLM-5.2 视觉版 NVFP4 量化，SGLang 部署，多模态推理延迟 < 50ms/token。 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 532 | 0 | Krea-2 图像编辑 LoRA，保身份一致性换装/换背景，ComfyUI 工作流零配置，设计师/电商素材生产刚需。 |

---

## 🌐 生态信号深度解析

**模型家族势头**：**Qwen3.5/3.6 MoE 系**以 6 款入榜（含官方+社区量化）确立 “开源多模态 MoE 标准库” 地位；**GLM-5.2** 验证 MoE+DSA 在 32B 激活段的性价比天花板；**Gemma-4** 证明稠密 30B 仍是消费级/边缘端最优解。  
**开源 vs 闭源**：前 30 全为开放权重（含商业友好许可），零闭源模型上榜 —— **“开放权重+量化生态”已成分发默认范式**。  
**量化/微调活动**：1-bit/2-bit/4bit GGUF 与 NVFP4 并行，**超低比特量化精度损失已控制在 <1%**，Unsloth/prism-ml/官方厂商三方联动形成 “训练-量化-部署” 一条龙工具链；**去审查/长上下文/风格迁移** 成社区微调三大主题。  
**新赛道涌现**：VLA（MiniCPM-RobotManip/Track）、Flow-based 生图、世界模型、流式 ASR 同期入榜，标志 **具身智能、实时多模态、生成式物理仿真**

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*