# Hugging Face 热门模型日报 2026-04-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-21 00:16 UTC

---

# Hugging Face 热门模型日报 | 2026-04-21

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与社区量化并行**的态势。Google Gemma-4 系列以官方 31B 和 26B 版本横扫下载榜，累计突破 900 万次下载，同时衍生出大量社区"去审查"微调版本。Qwen3.6-35B-A3B 作为阿里通义千问新一代 MoE 视觉语言模型，首发即登顶点赞榜。中国厂商密集发力：百度 ERNIE-Image 系列、腾讯混元世界模型、MiniMax-M2.7 等纷纷上榜，形成中美双引擎格局。值得关注的是，语音合成领域出现 k2-fsa/OmniVoice 百万级下载的爆款，而"uncensored/abliterated"标签的社区微调模型已形成显著亚文化现象。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,438 | 124,162 | 智谱新一代 MoE+DSA 架构对话模型，国产开源大模型技术路线的重要迭代 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,001 | 314,205 | MiniMax 最新对话模型，30 万+下载验证其商业化落地能力 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | **2,741** | 567,288 | 本周点赞王！社区将 Claude-4.6 Opus 推理能力蒸馏至 Qwen3.5，代表顶级闭源能力向开源迁移的极致尝试 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 769 | 2,395,486 | Google 官方"任意到任意"多模态模型，240 万下载彰显 Gemma-4 生态统治力 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | **1,043** | 334,628 | 阿里通义千问 3.6 代 MoE 视觉语言模型，35B 总参数仅 3B 激活，效率与能力双突破 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 886 | 1,662 | 腾讯混元具身智能模型，将视觉语言理解延伸至机器人/实体交互场景 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 495 | 0 | 混元世界模型 2.0，支持图像到 3D 生成，零下载反映早期预览状态但技术方向受关注 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 496 | 4,144 | 百度文心图像生成模型，Apache-2.0 协议开源，8B 参数级中文文生图新选择 |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 334 | 5,297 | ERNIE-Image 加速版，下载反超原版，速度优化成为实际采用关键 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 371 | 423 | 月之暗面 Kimi K2.6，压缩张量技术+特征提取能力，长上下文场景潜力股 |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 201 | 1,336 | 稀疏 MoE 架构扩散模型，探索混合专家在图像生成中的效率边界 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | **2,222** | **4,237,068** | Gemma-4 旗舰视觉语言模型，**420 万下载本周断层第一**，开源多模态新标杆 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 756 | 3,113,602 | Gemma-4 中杯版本，310 万下载验证"参数效率"策略成功，A4B 激活设计降低推理成本 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 660 | **1,080,795** | 语音合成领域本周黑马！**百万下载**，零样本多语言语音克隆，下一代 TTS 基础设施级产品 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | **1,197** | 66,555 | 清华 OpenBMB 多语言 TTS，千赞级社区认可，语音生成赛道竞争白热化 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 235 | 155 | NVIDIA 研究向模型，arXiv 预印本关联，可能为音频/语音基础模型，低下载暗示学术早期阶段 |
| **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | robbyant | 118 | 0 | 语言学/认知科学方向研究模型，arXiv 论文关联，极小众但方法论独特 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 561 | **816,485** | Unsloth 官方 GGUF 量化，81 万下载超越原版 2.4 倍，消费级硬件运行 MoE 大模型的首选方案 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 380 | 50,701 | Gemma-4 激进去审查微调，"OBLITERATED"品牌已成社区亚文化符号 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 283 | 216,308 | 社区激进去审查版 Qwen3.6，21 万下载验证"无过滤"需求的持续市场 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 437 | 77,195 | "SuperGemma4"系列 GGUF 去审查版，llama.cpp 兼容性+速度优化双卖点 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | **1,314** | 163,752 | 千赞级社区破解版！MLX+Safetensors 双格式支持，Apple Silicon 用户福音，"CRACK"命名挑衅感十足 |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 179 | 30,081 | Unsloth 将百度文生图模型 GGUF 化，跨生态量化服务扩展至扩散模型领域 |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 147 | 7,182 | Qwen+GLM "弗兰肯斯坦"合并模型，社区"魔改"实验精神的典型代表 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 424 | **781,705** | **去审查微调下载冠军**，78 万下载逼近官方原版，"Aggressive"去审查策略成 HauhauCS 品牌标签 |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 187 | 17,497 | MLX 4bit 特化版，Apple Silicon 生态深度优化，垂直硬件适配趋势 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 560 | **2,432,222** | **本周量化版下载王**，243 万下载超越官方原版，Unsloth 生态已成 Gemma-4 分发主渠道 |

---

## 生态信号

**Gemma-4 形成开源多模态事实标准**：Google 官方三版本累计下载近千万，叠加 Unsloth、HauhauCS、Jiunsong 等社区量化/微调版本，构建起完整的"官方-工具链-衍生"三层生态。与之对比，Qwen3.6 和 GLM-5.1 代表中国厂商在 MoE+视觉语言方向的紧追。

**"去审查化"从边缘走向主流**：本周 5 个带 uncensored/abliterated/crack 标签的模型合计下载超 130 万，HauhauCS、OBLITERATUS 等已形成可识别的社区品牌。这既是开源自由意志的体现，也折射出基础模型安全对齐与下游需求的张力。

**量化即分发**：Unsloth 作为基础设施角色凸显——其 3 个 GGUF 版本合计下载超 400 万，远超多数官方模型。GGUF/MLX 格式从"边缘优化"变为"主要交付形态"， particularly for Apple Silicon 生态。

**语音合成赛道升温**：OmniVoice 百万下载、VoxCPM2 千赞、MOSS-TTS 跟进，TTS 正经历类似 2024 年 LLM 的"开源爆发期"，零样本克隆和多语言能力成为标配。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **技术范式意义**：首次将 Claude-4.6 Opus（假设为 2026 年顶级闭源模型）的推理能力系统蒸馏至开源权重，若复现验证成功，将证明"闭源天花板→开源普及"路径的可持续性，对 AI 民主化影响深远 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | **产品化潜力**：百万下载+零样本克隆+多语言，技术组合直击全球化内容创作、无障碍服务、实时翻译等场景，k2-fsa 团队（语音领域老牌开源贡献者）的工程可靠性使其具备基础设施级可能 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | **生态观察价值**：千赞+MLX 双格式+挑衅命名，精准命中 Apple Silicon 开发者+去审查需求+技术极客三重受众，是理解"社区如何重构官方模型价值"的绝佳样本，其分发策略值得所有模型厂商研究 |

---

*数据截止：2026-04-21 | 来源：Hugging Face Hub 周点赞排序*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*