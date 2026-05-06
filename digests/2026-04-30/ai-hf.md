# Hugging Face 热门模型日报 2026-04-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-30 00:20 UTC

---

# Hugging Face 热门模型日报 | 2026-04-30

---

## 今日速览

DeepSeek-V4-Pro 以 3,237 点赞强势登顶，延续了中国大模型在开源社区的影响力；Google Gemma-4-31B-it 下载量突破 650 万，成为实际落地最广泛的多模态模型之一。Qwen3.6 家族呈现爆发态势——官方 27B/35B-MoE 版本与社区 GGUF/Uncensored 衍生模型共占据榜单 8 席，形成完整的生态矩阵。值得关注的是，"Uncensored" 微调模型下载量持续走高，反映开发者对模型可控性的强烈需求。此外，3D 世界模型 [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) 和 any-to-any 架构的 [nvidia/Nemotron-3-Nano-Omni](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) 标志着多模态正从"理解"向"生成与推理"纵深演进。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,237 | 174,402 | DeepSeek 最新旗舰对话模型，以极高点赞数领跑全榜，延续 V3 系列的 MoE 效率优势 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 856 | 96,948 | MIT 许可证的轻量版本，平衡性能与商用友好性 |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 293 | 396 | 小米 Agent 专用模型，主打长上下文与工具调用，下载量尚低但定位精准 |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,559 | 256,484 | 智谱 GLM 系列新一代 MoE 架构，对话能力获社区高度认可 |
| [tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview) | tencent | 184 | 7,671 | 腾讯混元系列预览版，中文对话场景优化 |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 130 | 15 | 欧洲 AI 实验室 poolside 的代码推理专用模型，定位垂直 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,002 | 508,728 | 通义千问 3.6 视觉语言旗舰，图像-文本理解能力全面迭代 |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,150 | 489,001 | 月之暗面 Kimi 系列多模态模型，长文本+视觉理解双优 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,514 | 1,510,129 | **全榜下载冠军**，35B 总参数/3B 激活的 MoE 多模态模型，效率与性能标杆 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,438 | 6,558,301 | **下载量碾压级领先**，Google 开源多模态中坚，生态兼容性最佳 |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 157 | 2,661 | 小米全模态基座，覆盖视觉-语言-音频三模态 |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 142 | 9,824 | NVIDIA 官方 any-to-any 推理模型，端侧 Omni 架构代表 |
| [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) | tencent | 625 | 3,134 | **唯一 3D 世界模型**，腾讯混元图像生成 3D 场景/物体，空间智能新方向 |
| [inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni) | inclusionAI | 235 | 506 | 扩散语言模型+MoE 的 any-to-any 架构，生成范式创新实验 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,090 | 57,743 | OpenAI 罕见开源的实体识别/隐私脱敏工具，企业合规刚需 |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 161 | 7,608 | 动态推理加速版 Qwen，面向低延迟场景优化 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 496 | 702,161 | Unsloth 官方量化版，本地部署首选，下载量验证其工具链成熟度 |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 863 | 1,705,737 | MoE 大模型的 GGUF 成功实践，**量化模型下载冠军** |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 234 | 215,232 | 激进去审查微调，下载量揭示特定场景需求 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 501 | 578,813 | MoE 版本去审查模型，点赞与下载双高，社区争议与需求并存 |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 541 | 134,773 | Gemma-4 的"obliterated"安全对齐移除版本，4-bit 量化+去审查组合 |
| [Jackrong/Qwopus3.6-27B-v1-preview-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v1-preview-GGUF) | Jackrong | 90 | 48,204 | 社区 Qwen3.6 衍生品牌 Qwopus，GGUF 格式预览 |
| [unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF) | unsloth | 73 | 0 | NVIDIA Omni 模型首版 GGUF，刚发布尚未形成下载 |

---

## 生态信号

**Qwen 家族已成开源生态最大公约数**：官方 4 款模型+社区 4 款衍生，覆盖 27B/35B-MoE、FP8/GGUF/Uncensored 全谱系，Unsloth 与 HauhauCS 等社区力量快速跟进，形成"官方发布-工具链适配-场景微调"的飞轮。**DeepSeek V4 接棒 V3 热度**，Pro/Flash/Base 三线布局清晰，MIT 许可证降低商用门槛。值得注意的是，**"Uncensored"成为显性的社区需求标签**——HauhauCS 两款模型合计 79 万下载，OBLITERATUS 以 541 点赞跻身前列，反映安全对齐与开发者自主权之间的张力。量化层面，**GGUF 仍是本地部署绝对主流**，Unsloth 凭借与 Qwen/NVIDIA 的官方合作巩固工具链地位。闭源厂商策略分化：OpenAI 罕见开源 privacy-filter（垂直工具），Google 以 Gemma-4 延续"开源引流+云服务变现"路径。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | **性价比标杆**：151 万下载验证的 MoE 架构，3B 激活参数即可对标稠密 70B 模型，多模态+对话+效率三重优势，企业级应用首选基座 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | **空间智能前瞻**：唯一上榜的 image-to-3d 世界模型，625 点赞/3134 下载的高互动比预示早期采用者兴趣，游戏、机器人、AR 场景潜力大 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | **端侧 Omni 架构**：NVIDIA 官方 any-to-any 推理模型，BF16 精度+Nano 定位暗示边缘部署意图，配合后续 GGUF 版本，值得跟踪多模态推理的硬件协同优化路径 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*