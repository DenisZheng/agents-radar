# Hugging Face 热门模型日报 2026-04-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-24 00:18 UTC

---

# Hugging Face 热门模型日报 | 2026-04-24

---

## 今日速览

本周 Hugging Face 生态呈现**多模态统一化**与**社区量化爆发**双重趋势。Google Gemma-4 系列以 31B 和 E4B 双版本霸榜，累计下载超 800 万；Qwen3.6 家族（35B-A3B MoE 与 27B 稠密模型）成为社区微调核心基座，衍生出十余个 GGUF/Uncensored 变体。值得注意的是，**image-text-to-text** 已取代纯文本生成成为最热门任务类型，反映视觉-语言统一模型的主流化。同时，OpenAI 罕见发布开源隐私过滤工具，腾讯、NVIDIA 在 3D 世界模型领域展开角逐。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,313 | 5,103,971 | 本周绝对王者，31B 参数实现原生多模态对话，下载量破 500 万验证其生产级可靠性 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,331 | 717,811 | 35B 总参数/3B 激活的 MoE 架构，视觉-语言推理的性价比之王 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,481 | 182,748 | 智谱新一代 MoE+DSA 架构，长文本与工具调用能力突出 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,041 | 463,243 | 国内大模型厂商代表，对话流畅度与中文理解优化显著 |
| **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | tencent | 95 | 13 | 腾讯新一代混合架构预览，虽处早期但技术路线值得关注 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 809 | 3,004,998 | "any-to-any" 架构实验，4B 参数探索极致轻量统一模态 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 885 | 125,825 | 月之暗面 K2.6 系列首发，长上下文视觉理解是其核心差异化 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 646 | 23,964 | 稠密架构多模态基座，为社区微调提供稳定起点 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 576 | 0 | 世界模型 2.0，从单图生成可交互 3D 环境，下载量为 0 或因权重尚未开放 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,223 | 81,729 | 多语言 TTS 新标杆，语音克隆与自然度接近商用水平 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 541 | 6,394 | 百度文生图开源，Apache-2.0 协议降低商用门槛 |
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 263 | 364 | NVIDIA 官方 3D 生成模型，与腾讯 HY-World 形成技术路线竞争 |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 225 | 1,740 | Sparse MoE 扩散模型，探索生成模型与专家系统的结合 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 558 | 1,888 | OpenAI 罕见开源工具，PII 检测与脱敏，企业合规刚需 |
| **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | inclusionAI | 140 | 8 | 扩散语言模型+MoE 的统一尝试，架构创新性强但尚处实验期 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 708 | **1,283,534** | 本周下载冠军，Unsloth 高效量化让 35B-MoE 可本地运行 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 399 | 350,262 | "Aggressive" 去过滤版本，社区对内容审查政策的直接回应 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 322 | 131,398 | 稠密模型 GGUF 化，平衡性能与本地部署门槛 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 481 | 90,064 | Gemma-4 E4B 的"消融"版本，去除安全对齐以释放推理潜力 |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 192 | 63,745 | Qwen3.5+GLM 的"弗兰肯斯坦"合并，社区模型融合实验的代表 |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 167 | 63,121 | 蒸馏 Claude-4.6 Opus 推理能力至开源 MoE，闭源能力迁移的典型案例 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 470 | 126,271 | Gemma-4 26B 加速版，"fast" 标签暗示推理优化突破 |
| **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 134 | 18,806 | DFlash 注意力优化，探索长序列高效推理 |
| **[RedHatAI/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/RedHatAI/Qwen3.6-35B-A3B-NVFP4)** | RedHatAI | 89 | 298,020 | NVIDIA FP4 格式+ vLLM 优化，企业级部署的硬件协同方案 |
| **[KyleHessling1/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF)** | KyleHessling1 | 88 | 8,046 | Qwopus 合并模型的另一分支，社区微调的同质化与分化并存 |

---

## 生态信号

**Qwen3.6 家族**已成为事实上的"开源 Android"——官方发布 5 个变体，社区衍生超 10 个量化/微调版本，形成完整工具链。与之对比，Google Gemma-4 虽下载量更高，但社区二创活跃度不足，反映**开放权重≠开放生态**的深层差异。闭源模型（Claude-4.6、Kimi）正通过**蒸馏**反向滋养开源生态，而"Uncensored/Aggressive/Obliterated"等命名泛滥，标志安全对齐已成为社区与厂商的核心张力场。量化技术从 GGUF 向 NVFP4、DFlash 等硬件原生格式演进，边缘部署与云端推理的界限正在模糊。

---

## 值得探索

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — 500 万下载验证的成熟多模态方案，若需一个"开箱即用"的视觉-语言对话基线，此为当前最优选。其 any-to-any 架构的 E4B 版本（#30）同步探索极端轻量化，适合对比研究。

2. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — 128 万下载的量化奇迹，3B 激活参数实现 35B 级性能，单卡可跑。Unsloth 的量化精度与速度优化代表当前工程天花板，本地部署者的必试之选。

3. **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** — 下载量为 0 的"幽灵"模型，却获 576 点赞，暗示世界模型（World Model）作为下一代 AI 范式的期待值。若权重开放，将是 3D 生成与具身智能的关键基础设施，建议持续关注。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*