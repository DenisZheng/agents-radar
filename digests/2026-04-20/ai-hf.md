# Hugging Face 热门模型日报 2026-04-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-20 00:14 UTC

---

# Hugging Face 热门模型日报 | 2026-04-20

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与中文模型崛起**的双重态势。Google Gemma-4 系列以 400 万+ 下载量稳居顶流，Qwen3.6-35B-A3B 凭借 MoE 架构成为效率新标杆。值得关注的是，**"去审查化"（uncensored/abliterated）微调模型形成显著社区潮流**，HauhauCS、Jiunsong 等创作者持续活跃。百度 ERNIE-Image 与腾讯 Hunyuan 系列代表中文厂商在视觉生成领域加速开源布局。语音合成赛道同样热闹，OpenMOSS 的轻量级 TTS 与 k2-fsa 的零样本克隆形成差异化竞争。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,185 | 4,003,761 | Google 新一代多模态旗舰，31B 参数实现图像-文本统一理解，下载量断层领先验证其工业级可靠性 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,734 | 572,828 | **本周点赞王**，通过知识蒸馏将 Claude-4.6-Opus 推理能力注入 Qwen3.5，社区对"逆向工程"闭源 SOTA 的极致追求 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 755 | 2,264,052 | 4B 参数的 any-to-any 轻量模型，证明 Google 在端侧多模态的野心，200 万+下载预示边缘 AI 拐点 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,417 | 112,939 | 智谱 GLM 系列迭代至 MoE+DSA 架构，国产开源模型在效率与性能平衡上的持续探索 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 982 | 288,848 | 国内独角兽 MiniMax 开源文本生成模型，M2 系列标志着中国大模型厂商从 API 服务转向权重开放 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 742 | 2,935,876 | 26B 激活 4B 的 MoE 变体，Google 用"小激活大参数"策略覆盖不同算力场景 |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 124 | 2,975 | Qwen+GLM 的"弗兰肯斯坦"合并实验，社区创作者探索模型架构杂交的新边界 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 930 | 209,112 | 阿里 Qwen3.6 代际跃迁：35B 总参数仅激活 3B 的 MoE 视觉语言模型，"小激活"设计降低推理成本 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 874 | 1,599 | 腾讯混元具身智能模型，将视觉-语言理解延伸至机器人交互，下载量低但技术前瞻性强 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 470 | 3,761 | 百度 ERNIE 系列首次开源文生图模型，8B 参数+Apache-2.0 协议，中文语义理解或成差异化优势 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 463 | 0 | 混元世界模型 2.0，直接从单图生成 3D 场景，零下载量反映 3D 生成尚处极早期 |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 318 | 4,757 | ERNIE-Image 加速版，百度采用"标准+Turbo"双版本策略覆盖不同延迟需求 |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 187 | 1,179 | 稀疏 MoE 架构的扩散模型，探索 Transformer 替代 U-Net 在图像生成中的可行性 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 874 | 0 | Netflix 开源视频修复/物体消除模型，零下载量但 874 点赞显示流媒体巨头入局的信号价值 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,162 | 51,554 | **语音赛道点赞冠军**，清华 OpenBMB 的多语言 TTS，CPM 系列从文本向语音的自然延伸 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 645 | 1,019,685 | 百万级下载的零样本语音克隆工具，Kaldi-Next 生态在语音合成领域的杀手级应用 |
| **[OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M)** | OpenMOSS-Team | 148 | 36,158 | 100M 参数的极致轻量中文 TTS，端侧部署友好，MOSS 生态从 LLM 向多模态扩散 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 225 | 132 | NVIDIA 研究级模型，arXiv 预印本关联，极低下载量暗示或为论文配套而非产品化发布 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 506 | 662,293 | Unsloth 官方 GGUF 量化，66 万下载验证"官方量化+社区分发"模式的效率优势 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 346 | 37,130 | Gemma-4-E4B 的去审查版本，"OBLITERATED"品牌化的激进安全对齐移除 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 420 | 72,519 | "supergemma4"系列持续迭代，v2 版本优化 llama.cpp 兼容性，社区量化质量标杆 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,298 | 160,417 | **微调类点赞最高**，Gemma-4-31B 的 MLX+GGUF 双格式去审查版，"CRACK"命名暗示安全机制破解 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 236 | 173,454 | "Aggressive"后缀表明深度去审查，Qwen3.6 视觉能力+无限制文本输出的组合需求旺盛 |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 172 | 26,394 | Unsloth 快速跟进百度模型量化，文生图模型的 GGUF 化尚属罕见，探索低精度扩散推理 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 414 | 739,022 | **微调类下载冠军**，Gemma-4-E4B 的去审查版本逼近 74 万下载，小参数+无限制=消费级硬件刚需 |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 178 | 16,017 | Apple Silicon 专属优化，MLX 框架+4bit 量化，Mac 用户群体的细分需求被精准覆盖 |

---

## 生态信号

**Gemma-4 家族形成绝对统治力**：Google 以 31B/26B-A4B/E4B 三档覆盖从云端到边缘的全场景，累计下载超 1100 万，开源权重策略成功构建开发者粘性。**Qwen 与 GLM 代表中文模型反攻国际生态**，阿里 Qwen3.6 的 MoE 架构、智谱 GLM-5.1 的 DSA 优化均获千级点赞，百度/腾讯/ MiniMax 多点开花。值得警惕的是 **"去审查化"已形成规模化社区产业**：HauhauCS、Jiunsong、OBLITERATUS 等创作者建立品牌矩阵，uncensored/abliterated 标签与官方模型形成平行分发体系，反映开源社区对安全对齐的系统性反弹。量化层面，Unsloth 的"官方速度+社区广度"模式成熟，MLX 作为 Apple Silicon 专属路径从边缘走向主流。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **2734 点赞的本周现象级模型**，首次验证将顶级闭源模型（Claude-4.6-Opus）的推理能力通过蒸馏迁移至开源权重的可行性，或为"开源追赶闭源"的新范式 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | 百万下载的零样本语音克隆，支持多语言与声音风格迁移，Kaldi-Next 生态从学术研究转向消费级产品的关键跃迁，语音交互创业者应优先评估 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | 虽零下载但技术路线独特——单图生成可交互 3D 世界，腾讯混元在具身智能与世界模型上的前瞻布局，3D/游戏/机器人领域的长期技术储备值得跟踪 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*