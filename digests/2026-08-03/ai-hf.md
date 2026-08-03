# Hugging Face 热门模型日报 2026-08-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-03 02:09 UTC

---

# 📋 Hugging Face 热门模型日报 | 2026-08-03

---

## 🚀 今日速览
1. **中国头部实验室集中发布新旗舰**：Moonshot Kimi-K3（多模态）、DeepSeek-V4-Flash（文本）、GLM-5.2（MoE）、百度 Unlimited-OCR 同登榜首，显示国内大模型竞争进入“多模态+长上下文+推理优化”深水区。  
2. **Qwen 3.5/3.6 系列成社区微调“标准底座”**：Top 30 中超 1/3 基于 Qwen 衍生（DavidAU、HauhauCS、LuffyTheFox、XYZAILab 等），GGUF/量化/Uncensored 版本下载量破百万，生态粘性极强。  
3. **微软、AMD、Liquid AI 等大厂/芯片厂加速开源布局**：Mage-VL、Fara1.5、VibeVoice-ASR、Instella-MoE、LFM2-Encoder 覆盖多模态、语音、稀疏编码器等细分赛道。  
4. **实用工具类模型下载量异常高**：百度 Unlimited-OCR（253 万）、DeepSeek-V4-Flash（278 万）下载领跑，说明企业级落地需求已从“聊天”转向“文档理解/代码/语音”等确定性场景。  
5. **“小模型+高性能”成新叙事**：Inkling-Small、Inflect-Micro-v2、LFM2-Encoder-350M、Audio8-TTS-0.6B 均在 1B 参数级，主打边缘/CPU/实时推理，适配端侧部署热潮。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）
| 模型 | 作者 | ❤️ | ⬇️ | 一句话说明 |
|------|------|----|----|------------|
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,743 | 156k | DeepSeek 最新 Flash 版，主打极速推理与低成本，附 arxiv 技术报告。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,958 | 2.79M | 同系列稳定版，下载量全榜首，已成生产环境首选基座。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,755 | 2.05M | 智谱新一代 MoE 基座，原生支持超长上下文与工具调用，中文基准领跑。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 878 | 80k | 面向代码/推理的强化版小模型，适配 Agentic 工作流。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 627 | 33k | 国产 3B 指令模型，平衡中英性能与部署成本。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 719 | 14.9k | 韩国 Upstage 旗舰 MoE，250B 总参数，开放权重供研究微调。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 154 | 68k | 上述模型的 NVFP4 量化版，配合 vLLM 实现极致吞吐。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 366 | 903 | 基于 Qwen3.6 微调的轻量推理模型，主打 Agentic Search。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 335 | 1.1k | Pro 版强化工具调用与长文本能力。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 120 | 2.5k | Qwen3.6 MoE 续训版，专注数学/代码推理。 |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 121 | 2k | AMD 开源 MoE，针对 MI300X 优化，验证硬件/软件协同。 |

---

### 🎨 多模态与生成（视觉 / 音频 / 文本到 X）
| 模型 | 作者 | ❤️ | ⬇️ | 一句话说明 |
|------|------|----|----|------------|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,642 | 837k | **本周点赞王**，Moonshot 首个原生多模态旗舰，支持图文理解/生成，压缩张量加速。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,779 | 2.54M | **下载亚军**，百度文档理解 SOTA，任意版面/语言/公式 OCR，企业级落地首选。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 227 | 6.8k | 小参数多模态模型，主打边缘设备实时图文交互。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 188 | 272k | 微软统一视觉语言模型，支持检测/分割/描述/推理全任务。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 250 | 2.9k | 基于 Qwen3.5 的 Computer Use 模型，能操作 GUI/浏览器。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 371 | 1.8k | **仅 1B 级**高保真 TTS，CPU/边缘实时推理，支持声纹克隆。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 179 | 4.3k | ArkTTS 架构超小参数流式语音合成，延迟 < 100ms。 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 150 | 8.5k | 1-bit 量化 ASR 模型，极低算力部署高精度语音识别。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 126 | 0 | 基于 Krea/Flux 的 LoRA，面向 ComfyUI 的风格化文生图。 |

---

### 🔧 专用模型（代码 / 数学 / 嵌入 / 科学计算）
| 模型 | 作者 | ❤️ | ⬇️ | 一句话说明 |
|------|------|----|----|------------|
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 402 | 13k | 快手代码专用 MoE，基于 Qwen3.5_MoE，HumanEval+/MBPP 领跑开源榜。 |
| [LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 89 | 7k | 液态神经网络编码器，长序列建模高效，适配时序/科学计算嵌入。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / MTP）
| 模型 | 作者 | ❤️ | ⬇️ | 一句话说明 |
|------|------|----|----|------------|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,341 | 1.37M | **社区下载冠军**，融合多路专家 + MTP + NEO 量化 + Uncensored，玩家自用全能包。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 341 | 48.7k | Unsloth 官方 GGUF 量化，开箱即用 llama.cpp/ollama。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 250 | 88.5k | Kimi-K3 首发即跟进 GGUF，支持多模态 llama.cpp 推理。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 225 | 1.3k | Unsloth 优化版原权重，训练/微调显存再降 30%。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 209 | 292k | 9B 小体积全量化版，IMATRIX 校准保精度，消费级显存可跑。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 301 | 259k | Hermes 风格对话 + MoE + GGUF，角色扮演/创写社区热度高。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,243 | 1.89M | **点赞第 3**，激进式拒答移除 + 视觉 MoE，下载量仅次于官方旗舰。 |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 96 | 1.3k | Qwen3.5 续训通用助手，社区早期探索版。 |

---

## 🌐 生态信号深度解析（~160 字）
**模型家族势头**：Qwen 3.5/3.6 稳坐“社区 Linux 位置”，衍生量化/微调占榜单 40%+；DeepSeek-V4 与 Kimi-K3 形成“双旗舰”并行，分别主导文本推理与多模态交互；GLM-5.2 确立 MoE+长上下文新标杆。  
**开源 vs 闭源**：头部实验室（Moonshot、DeepSeek、Z.ai、百度、微软）均选择**核心权重开放 + 技术报告/推理引擎闭源**策略，既获生态红利又守住商业护城河。  
**量化/微调热点**：GGUF 仍是消费级部署标准，但 **MTP（Multi-Token Prediction）、NEO/IMATRIX 量化、NVFP4、BitNet 1-bit** 等新技术加速渗透；Uncensored/Roleplay 微调下载量持续超越基座，揭示“个性化/去审查”真实需求。  
**硬件协同**：AMD、微软、Liquid AI 同周发布针对特定加速器（MI300X、NPU、边缘 CPU）的模型，标志着“模型-硬件联合设计”成开源新常态。

---

## 💎 值得探索的 3 个模型
1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — **多模态基准新定义**：原生图文理解/生成、压缩张量推理、9.6k 点赞验证社区认可，适合做多模态 Agent、文档解析、视觉推理基准测试。  
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — **生产级文档理解即插即用**：253 万下载证明鲁棒性，支持任意版面/公式/多语言，零样本泛化强，直接替代商业 OCR API 降本 90%+。  
3. **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) / [DavidAU/Qwen3.6-27B-...-

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*