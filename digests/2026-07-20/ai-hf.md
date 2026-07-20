# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 03:28 UTC

---

# 📊 Hugging Face 热门模型日报 · 2026-07-20

---

## 🔎 今日速览

本周榜单以 **Qwen 3.5/3.6 系列**、**GLM-5.2 MoE** 与 **极低比特量化（1/2-bit）** 为三大看点。百度 *Unlimited-OCR* 与思维机器 *Inkling* 领跑多模态文档理解；社区微调呈现 “**大模型蒸馏推理能力 + 激进去审查 + GGUF/MLX 全平台分发**” 的标准化流水线；视频生成仍处小规模探索期（LTX、Wan）。下载量榜首 *gemma-4-31B-it*（1200 万+）显示 Google 开源权重对开发者生态的强吸附力。

---

## 🏷️ 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,172 | 536k | **智谱新一代 MoE 基座**，DSA 稀疏激活 + 多语言长文本，开箱即用的中英顶级基座。 |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,276 | 1,234万 | **Gemma 4 旗舰指令版**，31B 密集模型，多模态原生支持，下载量碾压全场，部署友好。 |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 836 | 13.7k | **混元 3.0 基座**，中文长文本与工具调用强化，Apache-2.0 商用友好。 |
| [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) | InternScience | 584 | 35.8k | **面向 Agent 的 Qwen3.5-Moe 微调**，强化 Function Calling 与多步推理。 |
| [**Cactus-Compute/needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 279 | 955 | **JAX 原生工具调用小模型**，主打 Function Calling 与极致推理延迟。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,350 | 212万 | **Qwen3.5-VL 蒸馏 Claude 系长思维链**，9B 激活参数覆盖图文推理与复杂 OCR，GGUF 全量化分发。 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,198 | 212万 | **百度文档级 OCR 大模型**，支持任意版面/语言/公式/表格，零样本泛化强，生产级落地首选。 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored…**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,902 | 208万 | **Qwen3.6 MoE 35B→3B 激活去审查版**，视觉专家保留，极致显存/性能比，社区高热度“魔改”代表。 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,158 | 13.5k | **原生多模态 MoE（图文/音频/视频统一建模）**，早期开源探索统一 Tokenizer 范式。 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 463 | 10.6k | **Qwen3.6 27B 推理增强微调**，引入显式思维链模板，适配复杂视觉问答。 |
| [**OpenMOSS-Team/MOSS-VL-Realtime**](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) | OpenMOSS-Team | 82 | 544 | **流式视频-文本实时对话**，端到端低延迟，探索边缘侧多模态交互。 |
| [**Wan-AI/Wan-Dancer-14B**](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 129 | 2.4k | **图生视频（I2V）扩散模型**，主打人物一致性舞蹈生成，Diffusers 原生支持。 |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 195 | 0 | **LTX-Video 人脸身份保持 LoRA**，Reference-to-Video 精细控制。 |
| [**mgwr/M87**](https://huggingface.co/mgwr/M87) | mgwr | 161 | 4.7k | **基于 Krea-2-Turbo 的文生图 LoRA**，模板化训练流程，风格化快速适配。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 语音等）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 196 | 14.6k | **Qwen3.5 微调垂直 OCR**，轻量化部署，适配票据/证件结构化抽取。 |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 280 | 87.5k | **语音转写 + 说话人分离一体化**，会议/播客自动化流水线核心组件。 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 948 | 0 | **修正版 Qwen 3.5 Jinja 模板包**，解决工具调用/系统提示词解析 Bug，工程必备。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / MLX / 1-2 bit）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 502 | 126万 | **Qwen3.5 27B → 1-bit（1.58bit）极致量化**，llama.cpp/MLX 双栈，消费级显存跑 27B 基座。 |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 795 | 33.9万 | **三元量化（-1/0/1）2-bit 版本**，精度/速度平衡点更优，移动端/边缘端首选。 |
| [**unsloth/inkling-GGUF**](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 105 | 6.8k | **Inkling 多模态 MoE 全量化套件**，Unsloth 极速微调管线产出，支持音视频统一推理。 |
| [**prism-ml/Bonsai-27B-mlx-1bit**](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 140 | 21.7k | **Apple Silicon 原生 1-bit MLX 权重**，Metal 加速，MacBook Pro 跑 27B 流畅对话。 |
| [**prism-ml/Ternary-Bonsai-27B-mlx-2bit**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) | prism-ml | 121 | 17.9k | **MLX 三元 2-bit 版**，Apple 生态极致能效比。 |
| [**AngelSlim/Hy3-GGUF**](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 139 | 11万 | **腾讯混元 3 量化全家桶**，Apache-2.0 商用无忧。 |
| [**empero-ai/Qwythos-9B-v2-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 183 | 10.6万 | **Qwythos 9B 第二代量化**，修复首版推理崩溃，增加长上下文稳定性。 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 149 | 5.5k | **MiniCPM5-1B 蒸馏 Opus 思维链**，极小参数复现强推理，边缘部署教科书。 |
| [**GnLOLot/MiniCPM5-1B-…-V2-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 121 | 28k | 上模 GGUF 量化版，llama.cpp 直接跑。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored…**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 108 | 16.7k | **多路融合 + 去审查 + MTP 多 Token 预测**，社区“厨子”极限堆料实验。 |
| [**jlnsrk/GLM-5.2-colibri-int4**](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 142 | 4k | **GLM-5.2 专家流式 INT4**，CPU 推理解码加速，MoE 稀疏激活优势最大化。 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 427 | 0 | **Krea-2 图像编辑 LoRA**，身份保持风格迁移，ComfyUI 即插即用。 |
| [**Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt**](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt) | Cseti | 99 | 0 | **LTX-Video 多视角一致性 LoRA**，Novel View Synthesis 视频生成探索。 |

---

## 🌐 生态信号（趋势研判）

1. **Qwen 3.5/3.6 成“开源 LLaMA”**：从基座、MoE、视觉、推理增强到各比特量化，社区围绕 Qwen 构建了完整“蒸馏→微调→量化→多平台分发”工业链，**模型家族势头最旺**。
2. **极低比特（1/2-bit）走向生产**：prism-ml 连发 GGUF/MLX 三元/二元量化，下载量百万级，**消费级显存/内存跑 27B MoE 已成常态**，量化不再是妥协而是首选部署形态。
3. **多模态原生化与文档理解商用化**：Inkling 统一建模、Unlimited-OCR 生产级落地、OvisOCR2 垂直细分，**多模态从“聊天玩具”转向“文档/表单/票据自动化”刚需**。
4. **开源权重护城河加深**：Gemma-4-31B、GLM-5.2、Hy3 均采用宽松协议，**闭源 API 仅保留极少数顶级推理服务**，权重开放成为大厂争夺开发者心智的标配。
5. **社区微调“配方标准化”**：Claude/Opus 蒸馏思维链 + 去审查 + GGUF/MLX 全套打包，**单人/小团队即可在周末复刻 SOTA 级聊天模型**，创新门槛显著降低。

---

## 💎 值得探索（Top Picks）

| 模型 | 推荐理由 |
|------|----------|
| **baidu/Unlimited-OCR** | **文档智能化落地首选**：零样本泛化强、支持公式/表格/多语言、Transformers 原生加载，**直接替代传统 OCR 流水线**，ROI 即时可见。 |
| **prism-ml/Ternary-Bonsai-27B-gguf** | **极致性价比推理基座**：2-bit 三元量化在 27B 参数量下保留 95%+ 基座能力，**单张 24GB 显存/16GB 内存即可全速跑满**，边缘与私有化部署最佳实践。 |
| **zai-org/GLM-5.2** | **下一代 MoE 基座观测点**：DSA 稀疏激活 + 专家

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*