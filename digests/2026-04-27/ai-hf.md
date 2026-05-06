# Hugging Face 热门模型日报 2026-04-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-27 00:16 UTC

---

# Hugging Face 热门模型日报（2026-04-27）

---

## 今日速览

DeepSeek-V4-Pro 以 2,843 周点赞登顶，延续 DeepSeek 系列在开源大模型领域的强势地位。Google Gemma-4 系列（31B/26B-A4B）下载量突破千万，成为消费级部署的热门选择。Qwen3.6 生态持续繁荣，官方模型与社区 GGUF、去 censored 衍生版本共占据榜单近三分之一。多模态模型占比显著提升，image-text-to-text 成为主流任务类型。社区微调活动活跃，"Uncensored" 和推理蒸馏版本获得高下载关注。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 2,843 | 123,431 | DeepSeek 最新旗舰开源模型，MIT 许可证降低商用门槛，登顶本周热度榜首 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 735 | 45,986 | V4 系列轻量版，平衡性能与推理成本，适合快速部署场景 |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,523 | 230,865 | 智谱 GLM 系列 MoE 架构更新，DSA 动态稀疏注意力提升长文本处理能力 |
| [MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | MiniMaxAI | 1,070 | 484,595 | MiniMax 新一代对话模型，国内厂商出海代表，下载量验证其实用性 |
| [tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview) | tencent | 152 | 4,064 | 腾讯混元大模型预览版，延续 Hy 系列技术路线，关注度待释放 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,058 | 376,485 | 月之暗面 Kimi 多模态迭代，compressed-tensors 技术降低显存占用 |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 855 | 329,571 | 阿里 Qwen3.6 稠密架构多模态版，视觉理解能力对标闭源前沿 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,430 | 1,181,968 | **本周下载冠军**，MoE 架构以 3B 激活参数撬动 35B 性能，性价比极致 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,378 | 6,042,134 | Google Gemma-4 指令版，超 600 万下载验证其边缘部署统治力 |
| [google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it) | google | 816 | 4,502,579 | Gemma-4 MoE 变体，A4B 激活设计适配更多消费级硬件 |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 571 | 7,800 | 百度文心图像生成模型，Apache-2.0 许可证罕见开源，生态试探意味浓 |
| [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) | tencent | 610 | 2,969 | 腾讯世界模型 2.0，image-to-3d 任务稀缺性带来高关注度 |
| [openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2) | openbmb | 1,240 | 99,542 | 清华 OpenBMB 多语言 TTS，语音合成领域开源标杆，接近 10 万下载 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 846 | 35,807 | OpenAI 罕见开源的 token 级隐私过滤工具，PII 检测场景刚需，ONNX 格式便于集成 |
| [inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni) | inclusionAI | 185 | 346 | 扩散语言模型 any-to-any 统一架构，非主流技术路线，研究价值大于实用 |
| [z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash) | z-lab | 164 | 26,760 | 基于 Qwen3.6 MoE 的 DFlash 架构实验，feature-extraction 任务特化 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 429 | 553,179 | Unsloth 官方 GGUF 量化，llama.cpp 生态核心基础设施 |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 797 | 1,574,581 | **量化版下载冠军**，MoE 模型 GGUF 化突破本地部署瓶颈 |
| [unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF) | unsloth | 111 | 16,617 | Kimi 系列量化跟进，Unsloth 覆盖头部国产模型的战略体现 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 456 | 460,832 | 激进去审查社区微调，46 万下载反映特定需求市场 |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 172 | 146,505 | 同系列 27B 版本，vision 标签保留多模态能力，去审查+多模态组合独特 |
| [hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) | hesamation | 190 | 117,163 | 闭源 Claude 推理能力蒸馏至开源 MoE，GGUF 化实现本地高级推理 |
| [lordx64/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled](https://huggingface.co/lordx64/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled) | lordx64 | 79 | 48,933 | 4.7 版蒸馏迭代，transformers 格式保留完整精度，适合 GPU 部署 |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 514 | 120,432 | Gemma-4 "abliterated" 社区改造，安全对齐移除+GGUF 双格式，争议性高热度 |
| [Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF) | Jackrong | 211 | 75,797 | Qwen+GLM "frankenmerge" 实验，18B 规模推理专用，merge 技术社区前沿 |

---

## 生态信号

**Qwen3.6 家族**形成最强开源生态矩阵：官方 27B/35B-A3B/FP8 三线并行，Unsloth 提供标准量化基础设施，HauhauCS、hesamation、lordx64 等社区开发者围绕"去审查"和"推理蒸馏"形成衍生层。这种"基础模型→量化适配→能力增强"的三层结构，标志着国产模型首次建立完整开源飞轮。**Gemma-4** 以超千万总下载证明 Google 边缘化战略成功，但社区改造（OBLITERATED）也暴露其安全对齐的脆弱性。闭源蒸馏（Claude-4.x→Qwen）成为新常态，开源权重与闭源能力的边界趋于模糊。FP8/压缩张量/GGUF 多精度并存，反映部署场景极度分化。

---

## 值得探索

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — 单周 118 万下载的 MoE 性价比之王，3B 激活参数即可运行，是验证 MoE 架构生产就绪性的最佳样本，建议对比其 FP8 版本评估精度损失。

2. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — OpenAI 罕见开源工具，token 级 PII 检测+ONNX 格式，适合集成至 RAG 流水线或合规审查系统，研究其分类头设计具有工程价值。

3. **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** — 扩散架构语言模型的 any-to-any 尝试，虽下载量低但技术路线独特，适合关注非自回归生成范式的研究者跟踪。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*