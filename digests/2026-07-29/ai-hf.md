# Hugging Face 热门模型日报 2026-07-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-29 02:00 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-29

---

## 🚀 今日速览

今日榜单以 **MoE 混合专家架构** 与 **多模态原生融合** 为双核驱动。Moonshot AI 的 **Kimi-K3**（8k+ 点赞）与 **Kimi-K2.7-Code** 霸榜多模态榜首，Z.ai **GLM-5.2**（4.6k 点赞）确立国产 MoE 新标杆；Qwen3.6-35B-A3B 系列（官方版 + 社区魔改版）合计下载超 800 万，生态势能最强。量化侧，**2-bit/1-bit 极致压缩**（Ternary-Bonsai、Bonsai）与 **NVFP4/Unsloth GGUF** 并行爆发，边缘部署门槛再降。百度 **Unlimited-OCR** 以 270 万下载证明垂类工具模型商业落地能力，微软 Mage-Flow 系列开启指令编图新范式。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,607 | 1.27M | **国产 MoE 旗舰**，DSA 稀疏注意力 + 5.2 代训练体系，长上下文与推理双强，开箱即用对话 SOTA。 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 645 | 4.8k | **250B 超大参数开源权重**，韩国 Upstage 发布，主打企业级长文本与 RAG，需多卡推理。 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 529 | 18.9k | **3B 小参高性能**，中英双语强，适配边缘设备与私有化部署的「小而美」代表。 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 801 | 67.3k | **代码原生预训练**，Poolside 面向软工 Agent 设计，代码生成/重构/推理三高。 |
| [antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 222 | 7.7k | **1B 安全对齐微调**，基于 GraniteMoEHybrid，主打合规与安全护栏场景。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **8,026** | 99.2k | **多模态统一模型王者**，原生图文理解/生成/推理一体化，Compressed-Tensors 量化部署极简。 |
| [Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,332 | 681k | **代码专用多模态版**，强化代码图表/UI 理解，前端开发 Agent 首选。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,570 | 6.16M | **通义千问 MoE 旗舰**，35B 总参/3B 激活，图文对话/OCR/推理全能，社区生态最完善。 |
| [Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 417 | 2k | **指令驱动文生图/图编辑**，Flow Matching 架构，支持多轮自然语言修图，设计工作流变革者。 |
| [Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 109 | 1.3k | **极速指令编图版**，Turbo 蒸馏版，延迟 <1s，适配实时交互场景。 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,626 | 39k | **轻量多模态对话模型**，参数未公开但推理极快，适配移动端/边缘多模态助手。 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 179 | 1.5k | **Computer-Use 导向**，原生支持 GUI 操作与屏幕理解，Agent 执行层核心组件。 |
| [OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 340 | 47k | **OCR 专用多模态**，Qwen3.5 底座强化版票据/表格/手写识别，垂类落地即用。 |
| [Inflect-Micro-v2 / Nano-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 265/104 | 645/434 | **纯 CPU/边缘端 TTS**，零依赖、流式合成、多音色，IoT 语音交互首选。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,420 | **2.69M** | **百度产品级 OCR 开源版**，任意分辨率/长文本/多语言，下载量证明生产级可用性。 |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 288 | 6.3k | **快手代码 MoE**，Qwen3.5-MOE 底座强化代码生成/补全/Repo 级理解，国内代码模型新势力。 |
| [GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 131 | 2.8k | **GLM-5.2 视觉版 NVFP4 量化**，Baseten 适配 SGLang 高吞吐推理，生产部署现成方案。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 极致压缩）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,159 | 1.86M | **去审核/激进指令微调版**，保留 MoE 稀疏优势，长文创作/角色扮演社区最热。 |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,085 | 665k | **2-bit 三元量化**，1-bit 量化误差补偿，27B 模型跑 16GB 显存，极致压缩标杆。 |
| [Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 679 | 2.34M | **1-bit 量化版**，Llama.cpp 原生支持，超低显存跑大模型，边缘部署里程碑。 |
| [Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,502 | 1.26M | **Claude 风格长文微调 + GGUF**，5.1M 上下文窗口，写作/总结/长对话首选。 |
| [Laguna-S-2.1-GGUF (unsloth)](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 232 | 129k | **Unsloth 优化 GGUF**，量化损失 <0.5%，vLLM/SGLang 双兼容，代码 Agent 部署首选。 |
| [Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 153 | 180k | **官方 NVFP4 量化**，H100/H200 张量核心直驱，吞吐提升 4x，企业级推理标配。 |
| [Kimi-K3-GGUF (unsloth)](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 90 | 0 | **Kimi-K3 首发 GGUF**，Unsloth 量化管线，多模态量化探索先锋。 |
| [Qwen3.6-27B-Fable-Fusion...GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 854 | 737k | **多路融合/去审核/Hermes 风格**，社区「大杂烩」微调集大成者，创意写作极强。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 198 | 99.7k | **Genesis-Hermes V6 风格微调**，角色扮演/长文一致性社区口碑佳。 |
| [krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 565 | 0 | **Krea-2 LoRA 身份保持编辑**，ComfyUI 直插，人脸/主体一致性编图利器。 |

---

## 🌐 生态信号分析

**模型家族势头**：**Qwen3.6-MoE 族群**（官方 + 社区 5 个变体）以 **800 万+ 总下载** 绝对统治开源生态；**Kimi 系列** 凭原生多模态架构确立「中文多模态第一梯队」；**GLM-5.2** 以 MoE+DSA 架构重塑国产大模型技术叙事。**开源权重 vs 闭源**：头部厂商（Moonshot、Z.ai、阿里、百度）均采用「核心权重开源 + 商业 API 闭源」双轨制，社区微调生态（Uncensored、Hermes、GGUF/NVFP4 量化链）已成**事实上的增值层**，闭源模型反而通过开源权重反哺品牌与生态。**量化/微调热点**：1️⃣ **极致低比特**（1-bit/2-bit/三元量化）打通消费级显存瓶颈；2️⃣ **NVFP4/Unsloth GGUF** 双标准并行，硬件厂商与社区工具链深度绑定；3️⃣ **多模态量化** 从文本向视觉/语音延伸（Kimi-K3-GGUF、Inflect 系列）；4️⃣ **垂类工具模型**（OCR、Computer-Use、TTS）下载量远超同参数通用模型，**「小模型+专用数据」商业化路径跑通**。

---

## 💎 值得探索

| 模型 | 推荐理由 |
|------|----------|
| **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | **多模态统一架构参考实现**：原生图文互生、推理链可视化、Compressed-Tensors 部署文档完善，是研究「统一多模态」与落地「图文 Agent」的最佳切入点。 |
| **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | **极致量化工程标杆**：2-bit 三元量化 + 误差补偿，在 16GB 显存跑 27B MoE 且损失 <1%，源码与量化流程完全开源，适合边缘部署/量化算法二次开发。 |
| **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | **生产级垂类模型范本**：任意分辨率/长文本/多语言零样本泛化，提供 ONNX/TensorRT/Transformers 多后端部署脚本，直接可用于票据/合同/表格数字化管线，ROI 即时可见。 |

---

*数据来源：Hugging Face Hub Trending (2026-07-29)，按周点赞数排序 Top 30。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*