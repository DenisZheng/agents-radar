# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-28 01:57 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-28

---

## 🚀 今日速览

今日榜单以 **MoE（专家混合）大模型** 与 **多模态原生架构** 为主导：Moonshot Kimi-K3 以 6.3k 点赞领跑，Z.ai GLM-5.2 与 Qwen3.6-35B-A3B 紧随其后，三大 MoE 旗舰同台竞技。百度 Unlimited-OCR 以 264 万下载量霸榜实用主义赛道，Microsoft 推出 Mage-Flow 系列主打指令式图像编辑。社区量化生态极度活跃，**GGUF/NF4/2-bit 量化版本**已成大模型分发标配，“未审查/角色扮演”微调仍占据长尾流量高地。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / MoE / 对话）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 6,297 | 2,850 | **今日之王**：新一代 MoE 旗舰，原生支持超长上下文与压缩张量，性能对标闭源 SOTA。 |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,551 | 1,003,547 | 国产 MoE 标杆，DSA 稀疏注意力机制实现高吞吐，下载量破百万验证生产可用性。 |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,546 | 6,187,853 | **下载王者**（618 万+）：仅激活 3B 参数的超高性价比 MoE，已成社区微调基座首选。 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 629 | 3,761 | 韩国团队 250B 巨型模型开源，Depth-Upscaling 架构探索规模化新路径。 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 758 | 63,605 | 代码专用小模型（~2B），在代码生成基准上超越同参数量通用模型。 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 493 | 16,518 | 国产小参数强模型，主打中英文双语与推理能力平衡。 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 207 | 6,421 | 1B 安全导向模型，GraniteMoE 混合架构，面向边缘合规场景。 |

---

### 🎨 多模态与生成（视觉 / 语音 / 文本到 X）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,332 | **2,645,773** | **实用主义冠军**：任意分辨率/长文本 OCR，单模型统一检测识别，工业界落地首选。 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,604 | 36,196 | 原生多模态对话模型，强调“思维链式视觉推理”，架构创新值得跟踪。 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 388 | 1,691 | 流匹配架构统一文生图/图编辑，指令遵循能力强，Diffusers 生态原生支持。 |
| [**microsoft/Mage-Flow-Edit-Turbo**](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 102 | 1,115 | Mage-Flow 蒸馏加速版，专攻指令式图像编辑，推理延迟大幅降低。 |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 223 | 483 | **边缘 TTS 新标杆**：纯 CPU 实时语音合成，模型 < 50MB，适配嵌入式设备。 |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 133 | 33,127 | 世界模型边缘版，面向机器人/自动驾驶的视频生成与物理仿真。 |

---

### 🔧 专用模型（代码 / OCR / 推理 / 安全）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 242 | 5,312 | 基于 Qwen3.5 MoE 的代码专用版，支持 Repo-level 上下文与 Agentic 编码。 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 327 | 42,152 | OCR 专用多模态模型，Qwen3.5 基座，针对复杂版面/手写体强化。 |
| [**microsoft/Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 150 | 1,406 | 面向 **Computer Use** 的 GUI 操作模型，原生支持屏幕理解与动作预测。 |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 199 | 2,532 | 特征提取/嵌入专用模型，主打长文本检索与语义匹配。 |

---

### 📦 微调与量化（社区魔改 / GGUF / 低比特）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 659 | **2,257,928** | **1-bit 极限量化**奇迹：27B 模型压缩至 ~2GB，保留 90%+ 性能，消费级显存福音。 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored...**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,133 | 1,894,395 | “未审查”角色扮演王者，激进去对齐 + MOE 稀疏加速，社区热度极高。 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,490 | 1,336,263 | 9B 推理特化模型，蒸馏 Claude 风格长思维链，GGUF 全量化发布。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion...-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 754 | 634,146 | 融合多路专家权重的“超级合并模型”，Unsloth 加速训练，MTP 多 token 预测。 |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,069 | 648,938 | **2-bit 三元量化**实验品，进一步压缩体积，探索极低比特推理边界。 |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 218 | 117,456 | Unsloth 官方量化分发，适配 vLLM/llama.cpp，开箱即用。 |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 148 | 158,308 | **NVFP4 格式**原生量化，针对 Blackwell/Hopper 张量核心加速，生产级部署首选。 |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 124 | 2,276 | GLM-5.2 多模态版 NVFP4 量化，SGLang 部署优化。 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 187 | 83,658 | Hermes 风格系统提示词注入，强化指令遵循与角色扮演。 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 556 | 0 | Krea-2 基座上的 **Identity-Preserving LoRA**，一键保持人脸一致性编辑。 |
| [**unsloth/Kimi-K3**](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 99 | 0 | Kimi-K3 发布即跟进的 Unsloth 优化版，预示社区微调热潮起步。 |

---

## 🌐 生态信号深度解析

**1. MoE 成主流范式，稀疏激活成标配**  
Kimi-K3、GLM-5.2、Qwen3.6-35B-A3B、Solar-Open2-250B、Laguna-S-2.1、KAT-Coder 均采用 MoE。头部厂商不再单纯堆叠 Dense 参数，转而竞争 **路由机制（DSA/Top-K/Depth-Upscaling）、激活参数比、专家并行效率**。Qwen 以 3B 激活撬动 35B 总参、618 万下载，验证了 “小激活、大总参” 的部署经济性。

**2. 原生多模态 > 管线拼接**  
Kimi-K3、Inkling、Fara1.5、OvisOCR2、GLM-5.2-Vision 均为 **单一 Transformer 统一建模** 图文/视频/音频。Microsoft Mage-Flow 更将生成与编辑统一在流匹配框架下。管线拼接（CLIP+LLM+Diffusion）正退居二线。

**3. 量化已成分发标准动作，格式战争升级**  
- **GGUF** 仍是 CPU/Apple Silicon/消费级 GPU 的通用货币（Bonsai、HauhauCS、DavidAU 等均首发 GGUF）。  
- **NVFP4 / NF4** 成为数据中心 Blackwell/Hopper/Ampere 的首选（Poolside、Baseten 官方直发）。  
- **1-bit / 2-bit (Ternary)** 从实验室走向实战，Prism-ML 两款 27B 量化合计 290 万下载，证明极低比特在推理端已可用。

**4. “未审查/角色扮演”微调构成长尾流量黑洞**  
HauhauCS、DavidAU、LuffyTheFox、Empero-ai 四款未审查/角色扮演模型合计点赞 8.5k、下载 390 万+，远超同量级基座模型。社区需求已从 “更聪明” 转向 “更听话、更有人设、不拒答”，这倒逼基座模型在预训练阶段预留对齐余量。

**5. 专用垂类模型“小而美”生存空间打开**  
Inflect-Micro-v2（边缘 TTS）、KAT-Coder（代码 Agent）、Fara1.5（GUI 操作）、Unlimited-OCR（工业 OCR）均在细分榜单高位，说明 **“通用大模型 + 专用小模型路由”** 正成落地主流架构。

---

## 💎 值得探索的 3 个模型

| 模型 | 探索理由 |
|------|----------|
| **moonshotai/Kimi-K3** | **架构风向标**：首发即开放权重的新一代 MoE 多模态旗舰，压缩张量 + 原生长上下文 + 多模态统一，研读其 `config.json` 与路由实现可窥见 2026 下半年 SOTA 设计范式。 |
| **prism-ml/Bonsai-27B-gguf** | **极限工程样本**：1-bit 量化保持 90%

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*