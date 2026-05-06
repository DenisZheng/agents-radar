# Hugging Face 热门模型日报 2026-04-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-19 00:13 UTC

---

# Hugging Face 热门模型日报 | 2026-04-19

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与中文模型崛起**态势：Google Gemma-4 系列以超高下载量稳居顶流，Qwen3.6-35B 与 MiniMax-M2.7 等国产模型强势跻身前列；社区"去审查化"微调异常活跃，uncensored/abliterated 标签模型占比显著；视频生成与 3D 世界模型成为新增长点，腾讯混元系列连发两款前沿模型。量化格式（GGUF/MLX/NVFP4）已成为大模型分发标配。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,399 | 103,847 | 智谱新一代 MoE+DSA 架构对话模型，国产开源大模型技术路线的重要迭代 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 957 | 258,064 | MiniMax 最新一代文本生成模型，周点赞登顶显示其社区关注度飙升 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | **2,732** | 576,608 | **本周点赞冠军**，通过知识蒸馏将 Claude-4.6 Opus 推理能力注入 Qwen3.5，社区复刻闭源 SOTA 的典范 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 736 | **2,778,992** | Gemma-4 激活参数 4B 的 MoE 版本，以极低推理成本实现接近全参数性能，下载量断层领先 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 733 | 2,118,971 | Google 首款 any-to-any 原生多模态模型，支持文本/图像/音频/视频任意输入输出 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | **2,153** | **3,778,070** | **下载量全榜第一**，Gemma-4 旗舰视觉语言模型，开源多模态的事实标准 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 395 | 66,552 | 社区去审查化微调代表，基于 Gemma-4 的 GGUF 量化版，本地部署友好 |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 247 | 104,603 | 采用 NVIDIA FP4 精度压缩的 Gemma-4，显存占用减半而性能损失极小 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 831 | 82,000 | 阿里 Qwen3.6 系列 MoE 视觉语言模型，35B 总参数仅 3B 激活，效率与能力兼得 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 864 | 1,454 | 腾讯混元具身智能模型，连接视觉感知与物理动作，机器人/具身智能关键基础设施 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 453 | 3,116 | 百度文心图像生成模型，Apache-2.0 协议开源，国产文生图重要力量 |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 307 | 4,119 | ERNIE-Image 加速版，推理效率优化，适合生产环境部署 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 342 | 0 | 腾讯混元世界模型 2.0，图像到 3D 生成，构建可交互虚拟环境的前沿探索 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,108 | 35,870 | 清华 OpenBMB 多语言 TTS 模型，语音合成质量与语种覆盖显著提升 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 641 | **957,869** | 语音克隆与零样本 TTS 利器，近百万下载验证其实用性，多语言支持突出 |
| **[OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M)** | OpenMOSS-Team | 141 | 33,394 | 仅 100M 参数的轻量中文 TTS，端侧部署与实时应用优选 |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 167 | 1,045 | 稀疏 MoE 架构扩散模型，探索大语言模型技术向图像生成迁移的新路径 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 869 | 0 | Netflix 视频修复模型，基于 CogVideoX 的对象移除与视频重绘，影视后期工业化应用 |
| **[LiconStudio/Ltx2.3-VBVR-lora-I2V](https://huggingface.co/LiconStudio/Ltx2.3-VBVR-lora-I2V)** | LiconStudio | 138 | 6,025 | LTX-Video 2.3 的逻辑推理增强 LoRA，解决视频生成中的物理一致性问题 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 192 | 81 | NVIDIA 最新研究模型，arXiv 预印本同步发布，或指向音频/语音基础模型新方向 |

> 注：本周专用垂直领域模型占比偏低，通用多模态模型正向工具使用与专业任务泛化。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 447 | **442,900** | Unsloth 官方 GGUF 量化版 Qwen3.6，**量化模型下载量第一**，llama.cpp 生态核心资产 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,282 | 156,865 | 社区激进去审查微调，MLX 格式适配 Apple Silicon，点赞量显示极高关注度 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 201 | 92,003 | Qwen3.6 激进去审查 GGUF 版，MoE+视觉的本地无限制运行方案 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 304 | 24,052 | Gemma-4 E4B 的"抹除"版本，安全对齐层的系统性移除实验 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 396 | **704,737** | **去审查模型下载量冠军**，Gemma-4 any-to-any 能力的无限制本地部署 |
| **[unsloth/ERNIE-Image-Turbo-GGUF](https://huggingface.co/unsloth/ERNIE-Image-Turbo-GGUF)** | unsloth | 165 | 19,176 | 文生图模型的 GGUF 量化罕见尝试，拓展 llama.cpp 生态至扩散模型 |
| **[unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF)** | unsloth | 134 | 100,683 | MiniMax 官方模型的 Unsloth 量化分发，降低国产模型本地部署门槛 |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 173 | 14,165 | Apple Silicon 原生 MLX 4bit 量化，M 系列芯片本地推理最优解之一 |

---

## 生态信号

**Gemma-4 家族**已确立开源多模态事实标准：Google 以 4 款模型占据下载量前三，any-to-any 架构（E4B）与 MoE 稀疏激活（A4B）双路线并进，社区围绕其形成庞大的微调-量化衍生生态。中文模型**Qwen/MiniMax/GLM/ERNIE**集体进入全球热榜，标志国产开源从"跟随"转向"并跑"。**去审查化微调**成为显著亚文化现象：约 1/4 热门模型带 uncensored/abliterated 标签，反映用户对模型可控性与安全对齐的争议性需求。量化格式高度分化——GGUF（通用）、MLX（Apple）、NVFP4（NVIDIA）各据生态位，**模型分发已进入"硬件适配优先"时代**。闭源蒸馏（如 Claude→Qwen）与开源权重的共生关系愈发紧密。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **开源复刻闭源 SOTA 的里程碑**：以 27B 参数逼近 Claude-4.6 Opus 推理能力，576K 下载验证其实用性，研究蒸馏方法或直接使用均极具价值 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | **具身智能关键基础设施**：视觉-语言-动作统一模型尚处早期，腾讯开源 0.5 版为机器人/自动驾驶/空间智能提供可复现基线，学术与产业意义并重 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | **近百万下载的语音克隆普惠方案**：零样本多语言语音合成技术成熟度高，K2-FSA 团队工程优化扎实，是构建语音 Agent 的首选基础组件 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*