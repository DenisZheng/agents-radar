# Hugging Face 热门模型日报 2026-04-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-08 00:13 UTC

---

# Hugging Face 热门模型日报 | 2026-04-08

---

## 今日速览

Google **Gemma 4** 系列全面霸榜，原生多模态架构（E2B/E4B/any-to-any）成为最大亮点，31B 指令版单周斩获 1330 点赞。社区微调生态同步爆发，**Jackrong** 基于 Qwen3.5 的 Claude 蒸馏推理模型以 2450 点赞登顶社区热度，**HauhauCS** 的 Uncensored 系列下载量突破 77 万。量化赛道 **prism-ml** 推出 1-bit 极限压缩方案，端侧部署进入新阶段。视频生成领域 **Netflix void-model** 首次亮相即引关注，但零下载量暗示仍处早期预览。

---

## 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | Jackrong | 2,450 | 552,015 | **社区热度冠军**：将 Claude 4.6 Opus 的推理能力蒸馏至 Qwen3.5，实现顶级推理性能的开放权重复现 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 1,330 | 884,290 | **官方旗舰**：Gemma 4 系列最大开源版本，原生支持图像-文本交错输入的对话模型 |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 295 | 389 | 智谱新一代 MoE+DSA 架构，稀疏激活设计挑战效率边界 |
| [LiquidAI/LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M) | LiquidAI | 251 | 19,572 | 液态神经网络架构迭代，350M 参数展现超长上下文稳定性 |
| [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | prism-ml | 499 | 52,632 | 1-bit 量化极限实验，GGUF 格式推动端侧推理成本数量级下降 |
| [prism-ml/Bonsai-8B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-8B-mlx-1bit) | prism-ml | 160 | 28,723 | Apple Silicon 原生 1-bit MLX 实现，Mac 本地运行 8B 模型成为可能 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 470 | 473,605 | **any-to-any 架构先驱**：统一处理文本、图像、音频、视频的端到端多模态原生模型 |
| [google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it) | google | 326 | 321,237 | 轻量版 any-to-any 模型，E2B 架构平衡性能与部署成本 |
| [baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR) | baidu | 1,071 | 39,933 | 百度千帆 OCR 视觉语言模型，文档理解与结构化提取能力突出 |
| [netflix/void-model](https://huggingface.co/netflix/void-model) | netflix | 562 | 0 | **神秘新品**：Netflix 首发的视频修复/物体消除模型，基于 CogVideoX 架构，零下载暗示预览状态 |
| [tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving) | tencent | 233 | 0 | 腾讯混元多模态编织框架，论文引用显示技术储备深厚，待开放下载 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 353 | 104,915 | 下一代语音合成：零样本多语言语音克隆，支持跨语言音色迁移 |
| [CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | CohereLabs | 828 | 135,919 | Cohere 2026 版 ASR，多语言语音识别与说话人分离能力显著提升 |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 242 | 129 | 清华 OpenBMB 语音生成模型，CPM 架构在 TTS 领域的创新延伸 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,035 | 775,478 | **下载量之王**：激进去审查微调，社区对开放对话的强烈需求体现 |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 680 | 29,514 | Gemma 4 首波社区破解版，MLX 格式适配 Apple 生态 |
| [unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) | unsloth | 316 | 826,592 | Unsloth 官方量化，26B A4B 变体的 GGUF 高效推理方案 |
| [unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF) | unsloth | 226 | 605,867 | 完整 31B 版本的量化分发，消费级 GPU 可运行的旗舰多模态模型 |
| [nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4) | nvidia | 285 | 213,294 | NVIDIA 官方 NVFP4 量化，TensorRT 优化的数据中心推理方案 |
| [HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 172 | 148,886 | 多模态模型的去审查尝试，视觉能力保留下的安全对齐解除 |
| [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF) | Jackrong | 530 | 292,760 | 推理蒸馏模型的量化版，v2 迭代优化推理效率 |
| [Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF) | Jackrong | 217 | 55,601 | "Qwopus" 系列第三版，Qwen3.5 的章鱼式多能力融合实验 |

---

## 生态信号

**Gemma 4 家族**以 8 个上榜型号成为绝对核心，Google 的 any-to-any 原生多模态架构正在重新定义开源模型的能力边界。与之形成对位的是 **Qwen3.5 生态**的社区繁荣——Jackrong、HauhauCS 等开发者通过蒸馏、去审查、量化等手段，构建起平行于官方的"影子发行版"，其中 Uncensored 系列 77 万+下载量揭示出开放权重与对齐约束之间的张力。**量化技术**进入深水区：1-bit（prism-ml）、NVFP4（NVIDIA）、GGUF（Unsloth）三线并进，端侧与数据中心的分层优化策略趋于成熟。值得关注的是 **Netflix、腾讯**等工业界玩家开始直接发布模型权重，视频生成赛道或迎来新一轮开源竞赛。

---

## 值得探索

| 优先级 | 模型 | 核心理由 |
|:---|:---|:---|
| ⭐⭐⭐ | [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | **架构里程碑**：首个真正意义上的 any-to-any 开源模型，统一处理四种模态的原生设计可能终结"拼接式多模态"时代，建议重点关注其跨模态涌现能力 |
| ⭐⭐⭐ | [Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled) | **性能平权实验**：社区首次成功蒸馏 Claude 4.6 Opus 的推理模式，若评测验证其推理深度接近闭源原版，将证明知识蒸馏在大模型时代的有效性边界 |
| ⭐⭐☆ | [prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf) | **极限工程**：1-bit 量化下的可用性测试，若 8B 模型在 1-bit 压缩后仍保持基础推理能力，将重塑端侧 AI 的成本结构，建议实测其质量损失曲线 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*