# Hugging Face 热门模型日报 2026-04-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-17 00:15 UTC

---

# Hugging Face 热门模型日报 | 2026-04-17

---

## 一、今日速览

本周 Hugging Face 热度由 **Google Gemma 4 家族** 与 **Qwen 3.5/3.6 系列** 主导，前者凭借官方多尺寸版本与海量下载稳居生态中心，后者则以社区蒸馏推理模型拿下最高点赞。多模态领域持续升温，腾讯混元、百度 ERNIE-Image 在视觉-语言与文生图赛道密集发力。语音合成成为黑马板块，k2-fsa OmniVoice 以 70 万+下载展现零样本语音克隆的强劲需求。社区量化与去审查微调活动异常活跃，GGUF/MLX 衍生模型占据榜单近三分之一。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 849 | 142,955 | MiniMax 最新 MoE 架构对话模型，以高效推理跻身本周热度前三。 |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,285 | 94,376 | 智谱 GLM 新一代 MoE+DSA 架构模型，技术标签新颖引发社区高度关注。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 1,980 | **3,195,626** | Gemma 4 旗舰指令版，官方背书+超三百万下载奠定本周生态核心地位。 |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 705 | 1,801,321 | Google 首个官方 "any-to-any" 多模态基座，跨模态统一建模意义重大。 |
| [google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-it) | google | 715 | **2,344,759** | 26B 激活 4B 的稀疏 MoE 指令模型，以更低激活参数量挑战 31B 性能。 |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | **2,679** | 584,978 | 本周**点赞冠军**，社区将 Claude 4.6 Opus 推理能力蒸馏至 Qwen3.5，现象级社区创新。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5) | tencent | 769 | 1,060 | 腾讯混元具身智能视觉语言模型，切入机器人/ embodied AI 新赛道。 |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 378 | 1,351 | 百度 ERNIE 文生图模型，8B 参数+Apache 2.0 许可，国产开源生图新力量。 |
| [baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo) | baidu | 262 | 1,369 | ERNIE-Image 加速版，平衡生成质量与推理效率。 |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 939 | 15,249 | 清华 OpenBMB 多语言 TTS 模型，语音合成领域高热度官方出品。 |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 600 | **701,830** | 本周**下载黑马**，零样本多语言语音克隆，实用场景落地能力极强。 |
| [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) | tencent | 159 | 0 | 腾讯混元世界模型 2.0，image-to-3D 生成，布局空间智能基础设施。 |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 860 | 0 | Netflix 视频修复/对象移除模型，基于 CogVideoX，影视工业级应用吸睛。 |
| [NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image) | NucleusAI | 134 | 464 | 稀疏 MoE 架构扩散模型，尝试将 MoE 引入图像生成的前沿探索。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

> 本期榜单中未出现明确标注代码、数学、医疗或嵌入任务的独立模型，相关能力多融合于 LLM 与多模态基座中。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 332 | 42,468 | Gemma 4 26B 去审查 GGUF 量化版，llama.cpp 本地部署热门选择。 |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,155 | 143,000 | Gemma 4 31B 的激进去审查 MLX 微调版，高点赞反映社区对无限制模型的强烈需求。 |
| [LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo) | LilaRest | 232 | 57,507 | NVIDIA FP4 精度优化版 Gemma 4，为 RTX 50 系显卡量身打造的高效推理方案。 |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 205 | 1,586 | Gemma 4 E4B "完全抹除"安全限制版本，社区 abliteration 运动的极端案例。 |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 199 | 0 | Unsloth 官方为 Qwen3.6 MoE 推出的 GGUF 量化，尚未起量但工具链背书可靠。 |
| [Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2) | Jiunsong | 155 | 8,908 | Apple Silicon 专用 MLX 4bit 量化版，Mac 本地运行 Gemma 4 的热门方案。 |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 374 | 620,327 | Gemma 4 E4B 激进去审查 GGUF 版，**62 万下载**验证其本地部署的超高人气。 |
| [unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF) | unsloth | 125 | 56,638 | Unsloth 官方 MiniMax M2.7 GGUF，国产 MoE 模型首次进入国际量化工具链。 |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 491 | **2,104,448** | Unsloth 官方 Gemma 4 26B-A4B GGUF，**超两百万下载**，量化生态的绝对主力。 |
| [unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF) | unsloth | 139 | 7,912 | 罕见的文生图 GGUF 尝试，Unsloth 将百度 ERNIE 引入边缘部署实验。 |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 323 | 154,097 | Jackrong 推理蒸馏系列的 GGUF 配套，社区"蒸馏+量化"流水线日趋成熟。 |

---

## 三、生态信号

**Gemma 4 已成绝对生态中心**：Google 官方释放 31B、26B-A4B、E4B 三档模型，合计下载突破 700 万，社区在 72 小时内涌现出大量 GGUF/MLX/去审查衍生版本，形成"官方发布—社区量化—本地部署"的完整飞轮。Qwen 3.5/3.6 系列凭借 Jackrong 等社区的创意蒸馏，持续占据高互动热度，证明阿里通义千问在国际开发者中的深厚根基。开源权重方面，本周榜单几乎被全开源模型覆盖，仅 MiniMax 基座许可存疑，整体呈现"开源主导、闭源陪跑"态势。量化生态进入白热化：Unsloth 官方 GGUF 下载量碾压个人开发者，但"uncensored/abliterated"标签的社区微调模型以情感需求驱动，下载转化效率惊人，反映出本地部署用户对模型可控性的强烈偏好。

---

## 四、值得探索

1. **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**  
   本周点赞王，社区蒸馏的里程碑案例。若你关注"如何用开源基座复现顶级闭源模型的推理能力"，这是必研究的工程样本。

2. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
   70 万+下载的零样本 TTS，语音克隆效果与跨语言能力已被大量开发者验证。语音应用开发者可直接上手测试其商用潜力。

3. **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**  
   Google 首次将 "any-to-any" 架构开源下放，理论上支持文本、图像、音频的任意模态输入输出。多模态研究者应优先跟踪其技术报告与社区评测进展。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*