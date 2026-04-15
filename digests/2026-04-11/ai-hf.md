# Hugging Face 热门模型日报 2026-04-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-11 01:50 UTC

---

# Hugging Face 热门模型日报 | 2026-04-11

---

## 今日速览

Google Gemma-4 系列持续霸榜，31B 与 26B-A4B 变体占据下载量前列，多模态能力成为标配。社区微调生态活跃，HauhauCS 与 Jackrong 等创作者推出多款"Uncensored"和蒸馏版本，Qwen3.5 与 Gemma-4 成为最受欢迎的微调基座。量化格式 GGUF 需求旺盛，Unsloth 官方适配版本下载量破百万。值得关注的是，Netflix 开源视频修复模型、百度千帆 OCR、腾讯混元多模态等垂直领域模型开始崭露头角。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 935 | 15,930 | 智谱最新 MoE+DSA 架构生成模型，稀疏激活设计兼顾效率与性能 |
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | **2,566** | 567,166 | 本周点赞冠军，将 Claude-4.6 Opus 推理能力蒸馏至 Qwen3.5，社区热捧 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 550 | 68,205 | 1-bit 极端量化实验模型，探索 LLM 压缩极限，llama.cpp 生态新尝试 |
| **[kai-os/Carnice-9b](https://huggingface.co/kai-os/Carnice-9b)** | kai-os | 140 | 3,715 | Hermes-Agent 架构轻量模型，面向 Agent 场景优化 |
| **[LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)** | LGAI-EXAONE | 97 | 2,292 | LG 最新双语大模型，韩英能力均衡，企业级应用导向 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,675 | **1,589,761** | Gemma-4 旗舰多模态模型，原生图像理解+文本生成，下载量登顶 |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 588 | 1,269,031 | 激活参数仅 4B 的 MoE 多模态模型，高效推理首选 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** / **[gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it)** | google | 564 / 389 | 961K / 646K | "Expert" 系列 any-to-any 模型，支持图像/音频/文本统一处理 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 738 | 0 | **视频修复专用模型**，基于 CogVideoX 的对象移除与视频补全，影视工业级工具 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 669 | 3,765 | 清华 OpenBMB 多语言 TTS 模型，语音合成质量突破 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 473 | **269,789** | 零样本语音克隆+多语言 TTS，Kaldi 团队出品，下载量验证实用性 |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,133 | 43,619 | 百度千帆 OCR 视觉语言模型，文档理解场景强势切入 |
| **[tencent/HY-OmniWeaving](https://huggingface.co/tencent/HY-OmniWeaving)** / **[HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 243 / 121 | 0 / 272 | 腾讯混元多模态研究系列，OmniWeaving 或为统一生成架构 preview |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 336 | 453,893 | NVIDIA 官方 FP4 量化版本，配合 Blackwell 架构推理加速 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 900 | 75,426 | MLX 框架"去审查"微调版，Apple Silicon 本地运行热门 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 250 | 317,399 | Aggressive 级去审查，GGUF 格式，视觉能力保留 |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,090 | **848,916** | 9B 轻量去审查版，性价比极高，下载量验证需求 |
| **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | **1,251** | **935,896** | MoE 架构去审查版，35B 总参/3B 激活，本周点赞第三 |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** / **[gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** / **[gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 395 / 265 / 224 | **1.36M / 907K / 846K** | Unsloth 官方 GGUF 系列，推理速度优化，下载量碾压级 |
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** / **[Qwopus3.5-9B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-v3-GGUF)** / **[Qwopus3.5-27B-v3](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3)** | Jackrong | 258 / 244 / 174 | 104K / 91K / 19K | "Qwopus" 系列推理增强版，Qwen3.5 基座的深度微调 |
| **[unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF)** | unsloth | 105 | 17,672 | GLM-5.1 快速 GGUF 适配，Unsloth 生态覆盖加速 |

---

## 生态信号

**Gemma-4 与 Qwen3.5 双雄并立**。Google Gemma-4 凭借官方多模态能力和 Apache-2.0 许可证，成为企业落地首选；阿里 Qwen3.5 则因开源友好和社区微调生态，在"去审查"和蒸馏赛道占据心智。量化格式 **GGUF 已成消费级部署标配**，Unsloth 凭借速度优化建立分发优势，单模型下载量突破 130 万。值得注意的是，**垂直场景模型开始独立上榜**——Netflix 视频修复、百度 OCR、腾讯混元均指向"基础模型+行业工具"的分化趋势。闭源巨头（Netflix、百度、腾讯）选择开源特定能力模型，既获取社区反馈，又保留核心壁垒，或成新范式。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | 本周点赞王，验证了大模型蒸馏的"能力迁移"可行性——用 Claude-4.6 Opus 的推理轨迹微调 Qwen3.5，27B 参数实现接近顶级闭源模型的思维链质量，适合研究蒸馏边界和推理增强方法。 |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | 影视工业级视频修复工具开源罕见，基于 CogVideoX 的 inpainting 能力，支持对象移除和视频编辑。下载量为 0 或因刚发布，但 Netflix 背书+垂直场景明确，值得跟踪实际效果。 |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | 1-bit 量化极端实验，探索 LLM 压缩的理论极限。若 8B 模型在 1-bit 下仍可用，将重塑端侧部署成本结构，对边缘 AI 和硬件设计有前瞻参考价值。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*