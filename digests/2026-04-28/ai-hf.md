# Hugging Face 热门模型日报 2026-04-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-28 00:19 UTC

---

# Hugging Face 热门模型日报 | 2026-04-28

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4 系列** 与 **Qwen3.6 生态** 主导，前者以 3,018 点赞登顶，后者凭借 MoE 架构与社区量化版本形成密集矩阵。**Google Gemma-4** 以 630 万下载量展现惊人采用率，而 **OpenAI 罕见开源** `privacy-filter` 引发合规工具关注。社区微调与蒸馏活动异常活跃，"Uncensored" 和 "Reasoning-Distilled" 标签频现，反映下游开发者对可控推理能力的强烈需求。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,018 | 137,784 | DeepSeek 新一代旗舰，MIT 许可证开源，本周点赞断层第一 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 778 | 65,743 | V4 轻量版，速度与成本的平衡选择 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,536 | 237,450 | 智谱 GLM 系列 MoE 架构更新，对话能力跃升 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,074 | 492,091 | 国内 MiniMax 最新对话模型，下载量逼近 50 万 |
| **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | tencent | 164 | 5,008 | 腾讯混元系列预览版，长文本对话优化 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 98 | 0 | 小米 Agent 专用模型，零下载预示刚发布或权限限制 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 910 | 399,489 | 阿里通义千问 3.6 视觉语言模型，近 40 万下载验证成熟度 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,099 | 443,440 | 月之暗面 Kimi 多模态升级版，压缩张量技术降低部署门槛 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,459 | **1,354,032** | Qwen3.6 MoE 旗舰，激活参数仅 3B，百万级下载本周最高 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,392 | **6,306,108** | Google Gemma 4 代多模态指令版，630 万下载彰显生态统治力 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 577 | 8,242 | 百度文心图像生成模型，Apache-2.0 许可证罕见开放 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 613 | 3,048 | 腾讯世界模型，图像到 3D 生成，世界模型赛道新玩家 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 925 | 47,488 | **OpenAI 罕见开源**：PII 检测与脱敏工具，ONNX 格式便于生产部署 |
| **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | inclusionAI | 199 | 448 | 扩散语言模型 Any-to-Any 架构，非自回归生成新路径 |
| **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** | facebook | 66 | 0 | Meta 人体中心视觉模型二代，零下载或为预发布占位 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 452 | 636,345 | Unsloth 官方量化，63 万下载验证 GGUF 仍是本地部署首选 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 822 | **1,646,295** | MoE 模型 GGUF 化里程碑，160 万下载超官方原版 |
| **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 197 | 190,878 | 激进去审查微调，19 万下载反映特定场景需求 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 478 | 525,932 | MoE 去审查版，下载量超官方非 MoE 版本 |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 200 | 129,164 | Claude 推理能力蒸馏至 Qwen MoE，GGUF 本地可跑 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 525 | 127,538 | Gemma-4 "消融"去限制版本，社区对谷歌安全对齐的反向工程 |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 225 | 77,763 | Qwen+GLM "弗兰肯斯坦"合并模型，探索架构杂交 |
| **[lordx64/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled](https://huggingface.co/lordx64/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled)** | lordx64 | 84 | 70,695 | Claude 4.7 推理蒸馏迭代，社区快速跟进闭源模型能力 |
| **[unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF)** | unsloth | 116 | 25,400 | Unsloth 扩展支持 Kimi 生态，多模态量化新尝试 |
| **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** / **[35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 133 / 172 | 5,824 / 28,078 | 动态闪存注意力优化，边缘设备推理新方向 |

---

## 生态信号

**Qwen 家族形成绝对霸权**：30 席中 Qwen 相关占 11 个，覆盖官方、Unsloth 量化、社区去审查、蒸馏合并全链条，MoE 架构（35B-A3B）成为新标配。**DeepSeek-V4** 以 MIT 许可证挑战开源友好度天花板，与 Qwen 形成"南北双极"。**Gemma-4** 虽下载量碾压，但社区 OBLITERATED 版本的存在暴露大厂安全策略与开发者自由的张力。量化生态中 **GGUF 仍是王道**，Unsloth 作为基础设施地位稳固；值得注意的是"**Reasoning-Distilled**"成为新标签——闭源模型（Claude-4.x）能力通过蒸馏向开源权重转移，或重塑开源/闭源竞争格局。**OpenAI 开源 privacy-filter** 虽非基础模型，却暗示合规工具链可能成为其新的开源触点。

---

## 值得探索

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
   630 万下载量背后的实际采用率值得深挖。Gemma 系列持续迭代证明 Google 开源战略并非姿态，而是产品化路径——建议对比其多模态表现与 Qwen3.6-27B 的性价比曲线。

2. **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**  
   "蒸馏+量化+MoE"三重压缩的极端案例：能否在消费级 GPU 上复现 Claude-4.6 级推理？这是验证"模型小型化"边界的关键实验。

3. **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**  
   扩散架构语言模型的 Any-to-Any 尝试，下载量虽低但技术路线差异化显著。若自回归范式遇瓶颈，此类非传统架构或成下一代候选。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*