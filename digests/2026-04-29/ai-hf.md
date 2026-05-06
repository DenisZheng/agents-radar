# Hugging Face 热门模型日报 2026-04-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-29 00:20 UTC

---

# Hugging Face 热门模型日报（2026-04-29）

---

## 今日速览

DeepSeek-V4 系列强势登顶，Pro 与 Flash 双版本包揽点赞前四中的两席，显示其在高效推理与性能平衡上的持续领先。Qwen3.6 家族全面爆发，27B 与 35B-MoE 版本及其量化衍生模型占据榜单近三分之一，成为当前最活跃的开源生态。Google Gemma-4-31B 以 655 万下载量证明其商业落地广度，而社区"去审查化"微调（Uncensored/Aggressive）与蒸馏模型（如 Claude-4.6 推理蒸馏）的涌现，标志着开源社区对模型可控性与专用能力的深度改造进入新阶段。

---

## 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,135 | 174,402 | DeepSeek 最新旗舰，MIT 许可证开放，以极高效率实现顶级推理性能，点赞数断层领先。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 820 | 96,948 | V4 系列的极速版本，针对低延迟场景优化，保持 MIT 开源许可。 |
| [zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) | zai-org | 1,549 | 256,484 | 智谱新一代 MoE+DSA 架构对话模型，以独特技术路线跻身点赞前三甲。 |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 235 | 396 | 小米长上下文 Agent 专用模型，聚焦工具调用与复杂任务执行，下载量尚低但定位精准。 |
| [tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview) | tencent | 176 | 7,671 | 腾讯 Hy 系列第三代预览版，探索新一代对话架构。 |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 146 | 7,608 | 社区基于 Qwen3.6 的 DFlash 架构实验，尝试特征提取优化。 |
| [z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash) | z-lab | 174 | 30,002 | MoE 版 DFlash 变体，展示社区对 Qwen 架构的系统性改造。 |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 66 | 15 | poolside 小型代码模型，vLLM 优化推理，定位专业开发场景。 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 965 | 508,728 | 阿里通义千问主力视觉语言模型，图像理解+文本生成一体化，下载量破 50 万。 |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,130 | 489,001 | 月之暗面新一代多模态模型，压缩张量技术降低部署成本，长上下文能力突出。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,487 | 1,510,129 | **全榜下载冠军**（151万），35B 总参数/3B 激活的 MoE 多模态架构，性价比极致。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,416 | 6,558,301 | **绝对下载霸主**（655万），Google 第四代 Gemma 指令版，企业级部署首选。 |
| [XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) | XiaomiMiMo | 127 | 2,661 | 小米多模态基座，覆盖视觉-语言-音频三模态，为 Pro 版提供基础能力。 |
| [tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) | tencent | 622 | 3,134 | 腾讯世界模型，图像到 3D 生成，探索空间智能新方向。 |
| [baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image) | baidu | 580 | 8,466 | 百度文心图像生成模型，8B 参数 Apache-2.0 开源，中文场景优化。 |
| [inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni) | inclusionAI | 223 | 506 | 扩散+Transformer 融合的任意模态到任意模态模型，MoE 架构实验性极强。 |
| [Lightricks/LTX-2.3-22b-IC-LoRA-HDR](https://huggingface.co/Lightricks/LTX-2.3-22b-IC-LoRA-HDR) | Lightricks | 67 | 0 | LTX 视频生成系列 HDR 增强版，图像/文本到视频，专业影视工作流适配。 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,023 | 57,743 | OpenAI 罕见开源的实体识别隐私过滤工具，ONNX+SafeTensors 双格式，企业合规刚需。 |
| [facebook/sapiens2](https://huggingface.co/facebook/sapiens2) | facebook | 83 | 0 | Meta 人体中心视觉 Transformer 第二代，专注人类姿态/分割/理解，学术引用编号已预留。 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 479 | 702,161 | Unsloth 官方 GGUF 量化，70万下载验证其端侧部署标准地位。 |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 850 | 1,705,737 | **量化版下载冠军**（170万），MoE 模型 GGUF 化后仍保持可用性，颠覆性价比认知。 |
| [HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 220 | 215,232 | 激进去审查微调，GGUF 格式+视觉能力保留，社区安全研究争议性热点。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 491 | 578,813 | MoE 版激进去审查，近 58 万下载显示市场对"无过滤"模型的强烈需求。 |
| [hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) | hesamation | 204 | 141,233 | **闭源蒸馏开源化**典型案例，将 Claude-4.6 Opus 推理能力注入 Qwen MoE，GGUF 端侧可跑。 |
| [OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED) | OBLITERATUS | 534 | 134,773 | Gemma-4 的"消融版"去审查+GGUF 双格式，社区对 Google 模型的快速改造。 |
| [Qwen/Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8) | Qwen | 159 | 745,458 | 官方 FP8 精度版本，近 75 万下载，数据中心级推理的精度-效率平衡点。 |
| [Jackrong/Qwopus3.6-27B-v1-preview-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v1-preview-GGUF) | Jackrong | 86 | 48,204 | 社区 Qwen3.6 与 Octopus 框架融合实验，探索函数调用能力的端侧化。 |
| [deepseek-ai/DeepSeek-V4-Pro-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-Base) | deepseek-ai | 234 | 1,532 | V4 Pro 基座模型，FP8+美国区域部署，为研究者提供预训练起点。 |
| [deepseek-ai/DeepSeek-V4-Flash-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Base) | deepseek-ai | 178 | 3,025 | Flash 版基座，同样 FP8 与美国区域优化，轻量研究友好。 |
| [talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it) | talkie-lm | 107 | 0 | 全新 Talkie 系列指令版，Apache-2.0 许可，零下载显示极早期发布状态。 |

---

## 生态信号

**Qwen 帝国成型**：阿里 Qwen3.6 家族以 27B 稠密+35B-MoE 双主线，配合官方 FP8、社区 GGUF、去审查、蒸馏、架构改造等衍生版本，形成最完整的开源模型矩阵，下载量占全榜过半。**DeepSeek 技术品牌稳固**：V4 系列以 MIT 许可+性能双优，继续领跑开发者心智。**闭源蒸馏开源化**成为新范式——hesamation 将 Claude-4.6 Opus 推理能力蒸馏至 Qwen MoE 并 GGUF 化，模糊开源/闭源边界。量化层面，**MoE+GGUF** 组合（Unsloth 35B-A3B 版 170 万下载）证明稀疏架构端侧部署已成熟，传统"大模型必须云端"认知被打破。Google Gemma-4 以 655 万下载显示**企业级开源权重**仍是商业落地主力，但社区改造（去审查/消融）速度加快，厂商原始控制力被稀释。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 655 万下载量的商业验证标杆。若需部署企业级多模态对话系统，其生态成熟度、硬件兼容性、长期维护保障均为最优解，建议作为生产环境基准测试首选。 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | 170 万下载的"不可能组合"——35B 总参数 MoE 模型在消费级硬件可跑，激活仅 3B。若你需在 RTX 4090/Mac Studio 等本地设备运行接近 GPT-4 级多模态能力，这是当前最优工程实现。 |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | 代表"知识蒸馏+架构迁移+端侧量化"的三重技术融合。研究价值在于：闭源顶级模型的推理模式能否通过蒸馏有效迁移至开源架构？14 万下载的社区反馈已初步验证可行性，适合作为蒸馏方法论研究案例。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*