# Hugging Face 热门模型日报 2026-04-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-12 00:12 UTC

---

 # Hugging Face 热门模型日报 | 2026-04-12

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧优化并行**的态势。Google Gemma-4 系列以 5 个变体强势霸榜，涵盖 4B 到 31B 参数规模，显示开源视觉语言模型的快速迭代。社区微调活跃，HauhauCS、Jackrong 等创作者推出多个"Uncensored"和"Reasoning Distilled"版本，反映用户对可控性与推理能力的双重需求。量化格式（GGUF、NVFP4）下载量激增，Unsloth 成为社区量化首选工具。值得注意的是，Netflix 开源视频修复模型与腾讯混元系列的出现，标志着多模态应用正从实验室走向产业场景。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 985 | 23,998 | 智谱最新 MoE 架构大模型，DSA 动态稀疏激活技术实现高效推理，中文场景表现突出 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,582 | 566,643 | 本周点赞冠军，将 Claude-4.6 Opus 的推理能力蒸馏至 Qwen3.5，数学与代码任务表现惊艳 |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,256 | 962,827 | 高下载量社区微调版，MoE 架构 35B 激活 3B，"Aggressive"去对齐策略引发讨论 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 560 | 71,661 | 1-bit 极致量化实验模型，llama.cpp 生态新星，探索端侧大模型极限压缩 |
| **[kai-os/Carnice-9b](https://huggingface.co/kai-os/Carnice-9b)** | kai-os | 149 | 4,147 | Hermes-Agent 架构轻量模型，专注工具调用与智能体场景，适合快速原型开发 |
| **[LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)** | LGAI-EXAONE | 105 | 3,396 | 韩国 LG 最新开源模型，多语言能力强，亚太区域企业关注度高 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,730 | 2,026,015 | 官方旗舰视觉语言模型，下载量破 200 万，开源多模态新标杆 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 930 | 89,753 | 社区"abliterated"版本，移除安全限制，创意写作与角色扮演场景热门 |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,136 | 44,379 | 百度千帆 OCR 视觉语言模型，中文文档理解专项优化，企业级精度 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 758 | 0 | Netflix 开源视频修复/物体消除模型，CogVideoX 架构，影视后期行业关注 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 697 | 5,722 | 清华 OpenBMB 多语言 TTS 模型，支持零样本语音克隆，中文语音合成质量领先 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 500 | 340,361 | 下一代语音合成基础设施，支持跨语言零样本迁移，下载量印证工程成熟度 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 126 | 535 | 腾讯混元具身智能小模型，机器人视觉-语言-动作对齐实验版本 |
| **[LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M)** | LiquidAI | 100 | 4,925 | 450M 参数极致轻量 VLM，Liquid 架构探索移动端实时多模态交互 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 587 | 1,136,791 | 4B 参数 any-to-any 架构，文本/图像/音频统一处理，端侧智能体理想底座 |
| **[google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it)** | google | 405 | 774,725 | 2B 极致轻量 any-to-any 模型，可穿戴设备与 IoT 场景热门选择 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/personaplex-7b-v1](https://huggingface.co/nvidia/personaplex-7b-v1)** | nvidia | 2,422 | 473,689 | NVIDIA 语音对话智能体，Moshi 架构升级版，实时语音交互延迟低于 300ms |
| **[tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving)** | tencent | 247 | 0 | 腾讯混元多模态编织框架，统一扩散模型架构，视频生成与编辑基础设施 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 420 | 1,523,972 | **本周下载冠军**，Unsloth 官方 GGUF 量化，26B MoE 激活 4B，消费级 GPU 可跑 |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 236 | 932,802 | any-to-any 架构 GGUF 版，多模态模型首次实现 llama.cpp 兼容部署 |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 281 | 997,865 | 31B 旗舰 GGUF 量化，Q4_K_M 质量接近原始模型，社区验证充分 |
| **[unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF)** | unsloth | 115 | 21,864 | 智谱 GLM-5.1 官方量化版，中文开源模型生态重要补充 |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 352 | 565,972 | NVIDIA 专有 4-bit 浮点量化，RTX 50 系列 GPU 原生加速，吞吐量提升 2.4x |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 141 | 13,912 | 社区优化版 NVFP4，针对长上下文推理调优，性价比玩家首选 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 265 | 373,322 | any-to-any 架构激进去对齐版本，多模态无限制生成引发安全讨论 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,098 | 868,534 | 高点赞社区微调，9B 规模平衡性能与效率，创意应用热门 |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 264 | 111,740 | 推理蒸馏模型 GGUF 版，本地运行 Claude 级推理能力的低成本方案 |

---

## 生态信号

**Gemma-4 家族全面领跑**：Google 以 6 个官方模型构建从 2B 到 31B、从纯文本到 any-to-any 的完整矩阵，下载量占比超 40%，开源多模态进入"Gemma 标准"时代。**Qwen3.5 社区生态爆发**：阿里基座模型催生 Jackrong、HauhauCS 等活跃创作者，蒸馏、量化、去对齐版本百花齐放，中文开发者影响力凸显。**量化即基础设施**：Unsloth 独占 4 个 GGUF 热门位，NVFP4 新格式借助 RTX 50 硬件快速渗透，"模型轻量化"从选项变为默认实践。闭源优势（Claude-4.6 Opus 推理能力）正通过蒸馏快速开源化，而 Netflix、腾讯、NVIDIA 的产业级开源标志着 AI 应用进入垂直场景深水区。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **推理能力跃迁样本**：点赞数 2,582 远超官方模型，验证"闭源蒸馏开源"路径的有效性。适合研究模型能力迁移边界，或作为复杂任务（数学证明、代码生成）的本地替代方案 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | **产业开源风向标**：下载量为 0 却获 758 点赞，反映影视工业对 AI 视频修复的迫切需求。CogVideoX 架构 + 视频修复场景，是多模态模型从"生成玩具"转向"生产工具"的关键观察点 |
| **[nvidia/personaplex-7b-v1](https://huggingface.co/nvidia/personaplex-7b-v1)** | **实时交互新基准**：2,422 点赞仅次于蒸馏模型，Moshi 架构的 NVIDIA 官方优化版。300ms 延迟下的语音对话能力，是构建下一代 AI 硬件（眼镜、耳机、机器人）的核心组件 |

---

*数据来源：Hugging Face Hub | 统计时间：2026-04-12 | 排序依据：周点赞数*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*