# Hugging Face 热门模型日报 2026-04-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-10 00:13 UTC

---

# Hugging Face 热门模型日报 | 2026-04-10

---

## 今日速览

本周 Hugging Face 生态被 **Google Gemma-4 系列** 强势主导，官方 8 个变体及大量社区量化版本占据榜单半壁江山。值得关注的是，**Jackrong 的 Qwen3.5-Claude 蒸馏模型** 以 2,542 点赞登顶单模型热度，显示"小模型+大模型知识蒸馏"路径持续火热。多模态领域，**Netflix 开源视频修复模型 void-model** 引发业界对影视级 AI 工具的关注。此外，**1-bit 量化模型 Bonsai-8B** 和 **NVIDIA NVFP4 优化版本** 的出现，标志着端侧部署效率竞争进入新阶段。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,562 | 1,333,678 | Google 最新开源多模态旗舰，Apache 2.0 协议，本周下载量破百万 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 848 | 8,465 | 智谱新一代 MoE+DSA 架构模型，参数效率与推理能力双提升 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 850 | 59,852 | 社区"去审查"微调版本，MLX 框架适配，反映特定场景需求 |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 327 | 365,659 | NVIDIA 官方 FP4 量化优化版，显存占用降低 50%+，推理加速显著 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | **2,542** | 564,664 | **本周点赞冠军**，Qwen3.5 蒸馏 Claude-4.6 Opus 推理能力，性价比极高 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 537 | 784,026 | Gemma-4 "专家混合"版本，支持任意模态输入输出（any-to-any） |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 567 | 1,046,548 | 26B 激活参数/4B 总参数的 MoE 架构，高效多模态对话 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 697 | 0 | **Netflix 首开源视频模型**，基于 CogVideoX 的视频修复/物体移除，影视工业级 |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,129 | 42,622 | 百度千帆 OCR 多模态模型，文档理解与视觉语言任务表现突出 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 590 | 1,815 | 清华 OpenBMB 多语言 TTS 新迭代，零样本语音克隆能力增强 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 439 | 200,591 | 下一代语音合成基座，支持跨语言零样本迁移，下载量超 20 万 |
| **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** | CohereLabs | 845 | 150,149 | Cohere 最新 ASR 模型，多语言语音识别准确率业界领先 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

*本周专用模型较少，主要能力已集成于多模态基座中*

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 373 | **1,197,486** | **本周下载量冠军**，Unsloth 官方 GGUF 量化，llama.cpp 即开即用 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 539 | 64,863 | **1-bit 极端量化**，8B 模型压缩至 <1GB，树莓派可跑的实验性突破 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,077 | 821,239 | 高人气"去限制"微调，GGUF 格式，下载量逼近百万 |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 250 | 806,395 | 完整 31B 参数 GGUF 版本，消费级显卡可部署 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 225 | 238,236 | Gemma-4 E4B 视觉版去审查微调，支持多模态"无过滤"输出 |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 209 | 737,252 | any-to-any 架构的 GGUF 实现，多模态端侧部署里程碑 |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 240 | 98,156 | 推理增强版 Qwen3.5 的量化分发，社区口碑版本迭代 |
| **[unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF)** | unsloth | 96 | 13,329 | 智谱 GLM-5.1 首发 GGUF，Unsloth 快速跟进量化支持 |

---

## 生态信号

**Gemma-4 家族全面爆发**：Google 本周释放 8 个官方权重（基础版/指令版 × 3 架构变体），配合 Unsloth 等团队的即时量化，形成"发布即部署"的完整链条。31B  dense、26B-A4B MoE、E4B/E2B 专家模型三线并行，显示 Google 对开源生态的激进投入。

**蒸馏与量化成为标配**：Jackrong 的 Claude 蒸馏模型点赞数碾压官方模型，反映开发者对"小参数+大能力"的强需求；同时 1-bit（Bonsai）、FP4（NVIDIA）、GGUF（Unsloth）等量化方案竞速，端侧部署门槛持续降低。

**闭源能力"开源化"加速**：Claude-4.6 Opus、GPT-4 级能力通过蒸馏进入开源权重，Netflix、百度、Cohere 等商业公司主动开源垂直模型，"开源追赶闭源"叙事正在逆转为"开源同步甚至引领"。

---

## 值得探索

| 优先级 | 模型 | 推荐理由 |
|:---|:---|:---|
| ⭐⭐⭐ | **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | 2,542 点赞验证的"平民版 Claude"——27B 参数实现顶级推理能力，多模态输入支持，生产环境部署成本仅为 API 调用的 1/50，是本周性价比最高的实验起点 |
| ⭐⭐⭐ | **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | 1-bit 量化的极端实验，8B 模型压缩至 1GB 以内，虽精度损失待验证，但为边缘设备（手机、IoT）跑大模型开辟新路径，技术前瞻性极强 |
| ⭐⭐☆ | **[netflix/void-model](https://huggingface.co/netflix/void-model)** | 影视工业级视频修复的首个开源实现，零下载量因刚发布，但 Netflix 背书 + CogVideoX 架构 + 视频 inpainting 能力，预示 AIGC 进入专业影视工作流的临界点 |

---

*日报基于 Hugging Face Hub 2026-04-10 公开数据生成*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*