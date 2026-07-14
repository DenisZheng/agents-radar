# Hugging Face 热门模型日报 2026-07-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-06 02:03 UTC

---

好的，这是为您生成的《Hugging Face 热门模型日报（2026-07-06）》。

---

### Hugging Face 热门模型日报 (2026-07-06)

#### 📅 今日速览

本周 Hugging Face 生态呈现三大核心趋势：**量化模型统治下载榜**、**MoE（混合专家）架构成为主流**、以及**“反审”与特定场景微调**异常活跃。由社区驱动的 GGUF 量化版本包揽了下载量前五，尤其以 `Qwen3.5` 和 `Qwen3.6` 系列为基座的模型最受欢迎。此外，NVIDIA、DeepSeek、Zhipu AI 等大厂也集中发布了新一代 MoE 模型和专用优化版本，标志着高性能模型竞争的全面升级。特别值得关注的是，基于 `Gemma-4` 的特定任务微调模型在编码和“Agentic”方向上取得了亮眼成绩，表明中小型模型在垂直领域存在巨大挖掘潜力。

---

#### 🏆 热门模型分类解读

##### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2** ([链接](https://huggingface.co/zai-org/GLM-5.2))
    *   **作者**: zai-org | **点赞**: 3,470 | **下载**: 220,379
    *   **说明**: 智谱AI的下一代MoE大模型，以极高点赞数成为本周社区关注的焦点，代表了国产开源大模型的最新进展。
*   **deepseek-ai/DeepSeek-V4-Pro-DSpark** ([链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark))
    *   **作者**: deepseek-ai | **点赞**: 390 | **下载**: 12,580
    *   **说明**: DeepSeek V4系列的专业版，基于MoE架构并配有相关论文（arxiv:2606.19348），标志着DeepSeek在高效推理和密集计算上的持续探索。
*   **deepseek-ai/DeepSeek-V4-Flash-DSpark** ([链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark))
    *   **作者**: deepseek-ai | **点赞**: 161 | **下载**: 48,696
    *   **说明**: V4系列的“Flash”版本，强调推理速度，与Pro版形成互补，覆盖不同性能需求的场景。
*   **nvidia/Qwen3.6-27B-NVFP4** ([链接](https://nvidia/Qwen3.6-27B-NVFP4))
    *   **作者**: nvidia | **点赞**: 274 | **下载**: 297,130
    *   **说明**: NVIDIA与Qwen合作，在Qwen3.6基础上应用自家ModelOpt技术进行4-bit浮点量化，展示了NVIDIA在模型优化工具链上的影响力。
*   **nvidia/GLM-5.2-NVFP4** ([链接](https://huggingface.co/nvidia/GLM-5.2-NVFP4))
    *   **作者**: nvidia | **点赞**: 240 | **下载**: 280,087
    *   **说明**: NVIDIA对GLM-5.2的量化版本，与Qwen3.6-NVFP4形成组合拳，表明NVIDIA正通过合作伙伴策略覆盖主流开源模型。
*   **nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16** ([链接](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16))
    *   **作者**: nvidia | **点赞**: 123 | **下载**: 10,696
    *   **说明**: NVIDIA Nemotron系列的新探索，采用独特的“双塔”架构，可能用于提升推理或检索能力。
*   **BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6** ([链接](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6))
    *   **作者**: BugTraceAI | **点赞**: 135 | **下载**: 12,196
    *   **说明**: 专注于“网络安全”和“对抗性安全”的模型，反映了大模型在特定垂直领域（如安全攻防）的定制化需求。
*   **mistralai/Leanstral-1.5-119B-A6B** ([链接](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B))
    *   **作者**: mistralai | **点赞**: 117 | **下载**: 26
    *   **说明**: Mistral AI发布的大参数MoE模型（总参119B，激活6B），代表着欧洲顶尖AI团队对高效大模型的持续投入。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
    *   **作者**: nvidia | **点赞**: 2,618 | **下载**: 1,247,265
    *   **说明**: NVIDIA的通用目标检测与定位模型，3B参数量在性能和效率间取得平衡，成为多模态领域的明星下载款。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))
    *   **作者**: empero-ai | **点赞**: 1,557 | **下载**: 1,533,844
    *   **说明**: 基于 `Qwen3.5` 融合了“Claude-Mythos”风格的创意对话模型，其GGUF量化版下载量巨大，证明融合了美学风格的模型非常受欢迎。
*   **baidu/Unlimited-OCR** ([链接](https://huggingface.co/baidu/Unlimited-OCR))
    *   **作者**: baidu | **点赞**: 1,750 | **下载**: 1,044,217
    *   **说明**: 百度的通用OCR模型，凭借强大的文字识别能力和实用性，下载量破百万，是传统AI能力在Transformer时代的再次爆发。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
    *   **作者**: HauhauCS | **点赞**: 2,487 | **下载**: 3,018,257
    *   **说明**: 一周下载量超过300万！这是一个基于 `Qwen3.6` 的、免审查的激进风格MoE模型，反映了社区对“无限制”和高表现力对话模型的强烈需求。
*   **krea/Krea-2-Turbo** ([链接](https://huggingface.co/krea/Krea-2-Turbo))
    *   **作者**: krea | **点赞**: 515 | **下载**: 99,049
    *   **说明**: Krea的下一代文本生成图像模型，作为基础模型的精修版本，旨在提供更快的速度和更好的生成效果。
*   **Qwen/Qwen-AgentWorld-35B-A3B** ([链接](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B))
    *   **作者**: Qwen | **点赞**: 549 | **下载**: 55,113
    *   **说明**: 阿里Qwen官方推出的“Agent世界”模型，是基于Qwen3.5 MoE的专用智能体模型，标志着多模态Agent成为模型开发的重要方向。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **google/tabfm-1.0.0-pytorch** ([链接](https://huggingface.co/google/tabfm-1.0.0-pytorch))
    *   **作者**: google | **点赞**: 226 | **下载**: 2,670
    *   **说明**: Google发布的表格数据基础模型，支持零样本分类和回归，是Transformer在结构化数据（Tabular Data）领域的重要突破。
*   **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF))
    *   **作者**: yuxinlu1 | **点赞**: 2,610 | **下载**: 651,758
    *   **说明**: 基于 `Gemma-4` 的编码专用微调模型，证明了Google Gemma系列在代码生成领域的巨大潜力，其量化版本下载量极高。
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF))
    *   **作者**: yuxinlu1 | **点赞**: 1,029 | **下载**: 355,871
    *   **说明**: 同样是基于 `Gemma-4` 的模型，但专注于“Agentic”能力，能够执行终端命令等操作，是编码+智能体方向的深度结合。
*   **nationaldesignstudio/rampart** ([链接](https://huggingface.co/nationaldesignstudio/rampart))
    *   **作者**: nationaldesignstudio | **点赞**: 129 | **下载**: 2,783
    *   **说明**: 专用于PII（个人身份信息）检测的BERT模型，支持ONNX和Transformers.js，适用于隐私保护场景，模型虽小但意义重大。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M** ([链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M))
    *   **作者**: empero-ai | **点赞**: 688 | **下载**: 144,933
    *   **说明**: 上述Qwythos模型的非量化版本，社区微调与创意风格融合的典范。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF** 及其同系列模型 ([链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF), [9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF), [9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B), [35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B))
    *   **作者**: deepreinforce-ai | **点赞**: 731/433/385/342 | **下载**: 394k/352k/76k/224k
    *   **说明**: “Ornith”系列生态，从9B到35B，从基座到GGUF量化版，展示了社区机构对模型全生命周期（研发、量化、分发）的系统性覆盖。
*   **unsloth/Qwen3.6-27B-MTP-GGUF** ([链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF))
    *   **作者**: unsloth | **点赞**: 964 | **下载**: 2,776,389
    *   **说明**: “量化专家”Unsloth对Qwen3.6的最新力作，下载量近300万，进一步巩固了其作为社区最受欢迎量化工具的地位。
*   **huihui-ai/Huihui-GLM-5.2-abliterated-GGUF** ([链接](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF))
    *   **作者**: huihui-ai | **点赞**: 169 | **下载**: 5,609
    *   **说明**: 对GLM-5.2进行“abliterated”处理并量化，象征着社区不断尝试修改模型对齐策略，赋予用户更多控制权。
*   **DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED** ([链接](https://huggingface.co/DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED))
    *   **作者**: DavidAU | **点赞**: 153 | **下载**: 53,962
    *   **说明**: 结合了“高智商”、“思考链”和“免审查”等标签的极端微调模型，反映了社区对模型定制化的极致追求。
*   **Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF** ([链接](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF))
    *   **作者**: Jackrong | **点赞**: 139 | **下载**: 84,951
    *   **说明**: 又一个基于Qwen3.6 MoE的代码微调模型，表明Qwen3.6已成为社区微调的首选基座之一。

---

#### 🌍 生态信号

本周生态呈现三大信号：**1）MoE全面爆发**：GLM-5.2、DeepSeek-V4、Ornith系列、Qwen-AgentWorld无一不是MoE模型，行业已全面转向“总参数大、激活参数小”的高效架构，以平衡性能与单机部署成本。**2）量化是主航道**：下载量前五名全是GGUF量化版，其中`HauhauCS`和`Unsloth`的模型周下载量接近或超过300万，表明绝大多数用户对模型的使用环境是本地推理。**3）“反审”与微调民主化**：`abliterated`、`uncensored`标签和大量社区微调模型的涌现，说明用户不再满足于官方预设的对话风格，正在积极探索模型能力的边界，开源社区正在从“消费者”转变为“创造者”。

---

#### 🔭 值得探索

1.  **google/tabfm-1.0.0-pytorch**：值得一试。它可能改变处理表格数据的范式，对于数据科学家和传统机器学习从业者来说，这是一个探索“用Transformer解决一切”的可能性的绝佳机会。
2.  **nvidia/LocateAnything-3B**：推荐研究。其通用定位能力非常强大，参数适中，适合快速集成到智能安防、机器人视觉或文档分析等项目中，是NVIDIA多模态能力的代表作。
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v2-3.5x-tau2-GGUF**：值得深入。这款模型证明了在12B的参数规模下，通过精细的Agentic和Code微调，可以达到令人惊艳的效果。如果你的工作需要复杂的代码生成或与终端交互，这个模型（的量化版）值得尝试。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*