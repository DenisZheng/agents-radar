# Hugging Face 热门模型日报 2026-04-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-09 00:10 UTC

---

# Hugging Face 热门模型日报 | 2026-04-09

---

## 今日速览

Google Gemma-4 系列强势霸榜，31B 与 26B 多模态模型包揽下载量前两名，社区量化版本同步爆发。Qwen3.5 生态持续活跃，Jackrong 的蒸馏与 GGUF 系列成为开发者热门选择。视频生成与语音合成领域出现新面孔，Netflix 的 video-to-video 模型与 OpenBMB、K2-FSA 的 TTS 模型引发关注。值得注意的是，"Uncensored" 微调模型在榜单中占据显著位置，反映社区对开放权重的强烈需求。

---

## 热门模型

### 🧠 语言模型

| 模型 | 作者/数据 | 一句话说明 |
|:---|:---|:---|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org · 👍 730 · ⬇️ 1,300 | 智谱新一代 MoE+DSA 架构模型，稀疏激活设计兼顾效率与性能，国产开源模型技术路线新探索 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong · 👍 2,505 · ⬇️ 560,798 | **本周点赞冠军**，将 Claude-4.6 Opus 推理能力蒸馏至 Qwen3.5，高性价比推理模型首选 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml · 👍 520 · ⬇️ 59,633 | 1-bit 极致量化方案，llama.cpp 生态极端压缩新标杆，边缘部署潜力股 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS · 👍 1,061 · ⬇️ 796,814 | 激进去审查化微调，下载量逼近百万，社区对无限制开源模型的需求印证 |
| **[kai-os/Carnice-9b](https://huggingface.co/kai-os/Carnice-9b)** | kai-os · 👍 124 · ⬇️ 2,329 | Hermes-Agent 架构轻量模型，专注于 agent 工具调用与任务执行场景 |

---

### 🎨 多模态与生成

| 模型 | 作者/数据 | 一句话说明 |
|:---|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | Google · 👍 1,457 · ⬇️ **1,106,883** | **下载量冠军**，Gemma-4 旗舰多模态模型，原生图像理解+对话能力，开源视觉语言模型新基准 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | Google · 👍 537 · ⬇️ 835,825 | 激活参数仅 4B 的 MoE 架构，用 26B 总参数实现高效推理，性价比之选 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | Google · 👍 505 · ⬇️ 622,963 | "any-to-any" 原生多模态架构，统一处理文本/图像/音频输入，迈向真正的全能模型 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | Netflix · 👍 645 · ⬇️ 0 | 视频修复与对象移除专用模型，CogVideoX 架构，影视工业级视频编辑工具开源 |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | Baidu · 👍 1,127 · ⬇️ 41,667 | 基于 InternVL 的中文 OCR 专项优化，文档理解场景实用工具 |
| **[Hcompany/Holo3-35B-A3B](https://huggingface.co/Hcompany/Holo3-35B-A3B)** | Hcompany · 👍 254 · ⬇️ 1,829 | Qwen3.5-MoE 架构多模态变体，35B 总参数/3B 激活，新兴团队的架构创新尝试 |
| **[tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving)** | Tencent · 👍 237 · ⬇️ 0 | 双 arXiv 论文背书的新架构，标签含 diffusers，或为腾讯混元视频生成新基座 |

---

### 🔧 专用模型

| 模型 | 作者/数据 | 一句话说明 |
|:---|:---|:---|
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | OpenBMB · 👍 431 · ⬇️ 605 | 清华系多语言 TTS 模型，VoxCPM 系列迭代，零样本语音合成能力升级 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | K2-FSA · 👍 395 · ⬇️ 144,864 | 语音克隆与跨语言 TTS 工具，下载量印证开发者对开源语音合成的旺盛需求 |
| **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** | CohereLabs · 👍 834 · ⬇️ 144,435 | Cohere 最新 ASR 模型，音频理解赛道大厂持续投入，转录质量商业级 |

---

### 📦 微调与量化

| 模型 | 作者/数据 | 一句话说明 |
|:---|:---|:---|
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai · 👍 783 · ⬇️ 44,246 | Gemma-4 31B 去审查化 MLX 版本，"abliterated+uncensored" 标签，Apple Silicon 本地运行方案 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | Unsloth · 👍 354 · ⬇️ 992,783 | **GGUF 下载量冠军**，Unsloth 官方量化，llama.cpp 生态核心基础设施 |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | Unsloth · 👍 239 · ⬇️ 686,025 | 31B 旗舰 GGUF 版本，多档量化位宽覆盖，本地部署 Gemma-4 的默认选择 |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | Unsloth · 👍 193 · ⬇️ 634,015 | any-to-any 架构 GGUF 化，多模态模型本地运行的技术突破 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS · 👍 200 · ⬇️ 193,995 | E4B 多模态模型激进去审查化，视觉能力+无限制生成，社区热度与争议并存 |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | NVIDIA · 👍 310 · ⬇️ 291,523 | 官方 NVFP4 量化方案，ModelOpt 工具链输出，NVIDIA GPU 推理最优解 |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** / **[v3](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3)** | Jackrong · 👍 228/151 · ⬇️ 64,274/11,903 | Qwen3.5 27B 推理特化版，GGUF+原始权重双版本，"Qwopus" 品牌系列化运营 |
| **[Jackrong/Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF)** | Jackrong · 👍 228 · ⬇️ 76,914 | 9B 轻量推理模型，端侧部署与低延迟场景的平衡选择 |
| **[kai-os/gemma4-31b-Opus-4.6-reasoning](https://huggingface.co/kai-os/gemma4-31b-Opus-4.6-reasoning)** | kai-os · 👍 132 · ⬇️ 256 | Gemma-4 架构 + Claude 推理蒸馏，PEFT 轻量化微调，新兴创作者的技术实验 |

---

## 生态信号

**Gemma-4 全面接管开源多模态生态**。Google 以 10 个上榜模型形成绝对统治，覆盖 2B-31B 参数、纯文本到 any-to-any 全谱系，Apache 2.0 许可证成为商业友好开源的新标准。Unsloth 作为量化基础设施"影子巨头"，3 个 GGUF 模型合计下载量超 230 万，证明**高效推理工具链与基础模型同等重要**。

**Qwen3.5 生态呈现"一超多强"**：阿里基座 + 社区蒸馏/量化/去审查化的分层创新，Jackrong、HauhauCS 等创作者形成稳定输出矩阵。值得警惕的是，"Uncensored" 标签模型占比显著上升，反映开源社区对安全对齐策略的反弹，可能带来监管与伦理新议题。

**语音与视频生成进入工具化阶段**：OpenBMB、K2-FSA、CohereLabs 的 TTS/ASR 模型下载量均超 10 万，Netflix 视频编辑模型标志着**开源模型从"玩具"向"生产工具"的跨越**。量化技术持续激进：1-bit Bonsai、NVFP4、GGUF 多档并行，**推理成本压缩成为模型落地的首要瓶颈**。

---

## 值得探索

| 优先级 | 模型 | 理由 |
|:---|:---|:---|
| ⭐⭐⭐ | **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | **性价比最高的推理模型**：2,505 点赞验证社区认可，27B 参数实现接近 Claude-4.6 Opus 的推理能力，Unsloth 优化支持高效微调，适合作为复杂任务的主力模型 |
| ⭐⭐⭐ | **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | **原生多模态架构前瞻样本**："any-to-any" 设计打破模态边界，是理解下一代统一模型架构的最佳案例，配合 Unsloth GGUF 版本可本地体验 |
| ⭐⭐☆ | **[netflix/void-model](https://huggingface.co/netflix/void-model)** | **视频 AI 工业化信号**：首个主流流媒体平台开源的视频生成/编辑模型，CogVideoX 架构 + 零下载量说明刚发布，早期探索者可能获得先发优势 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*