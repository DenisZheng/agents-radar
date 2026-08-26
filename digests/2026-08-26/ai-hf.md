# Hugging Face 热门模型日报 2026-08-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-26 00:55 UTC

---

#  📊 Hugging Face 热门模型日报 | 2026-08-26

---

## 🎯 今日速览
**Qwen3.8-27B 正式确立为当前开源生态的“核心基座”**：官方基座模型以 1.27 万点赞领跑，其衍生量化（GGUF/FP8/MLX）、去审查版本及融合微调占据榜单半数以上席位。视频生成领域迎来 **MiniMax-H3 与 LTX-2.5 双强对决**，前者下载量破 460 万显示极强工程落地需求。DeepSeek-V4 系列（Flash/Pro）双双入榜，MoE 架构在推理效率与性能平衡上持续领跑。社区对“去审查/消融”及“极致量化（2-bit/4-bit）”的持久需求，推动了大量专用变体模型涌现。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM、对话、指令微调、多模态理解）
| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
|------|------|-------------|------------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 12,710 / 2.95M | **今日绝对王者**。原生支持图文理解的 27B 基座，Apache 2.0 协议，成为社区微调、量化、融合的首选上游。 |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 10,996 / 2.87M | 国产 MoE 多模态旗舰，采用 compressed-tensors 量化部署，长上下文与复杂推理能力强，闭源权重开放下载引关注。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,714 / 3.53M | 速度优化版 MoE 模型，极致推理吞吐，适合高并发生产环境，下载量超基座 Qwen 显示工程落地热度。 |
| **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** | deepseek-ai | 758 / 74.7K | 满血版 Pro 模型，能力上限更高，适合离线推理与蒸馏教学，近期发布迭代迅速。 |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith-ai | 419 / 70.2K | 基于 Qwen3.5 MoE 架构的 35B 激活 3B 稀疏模型，极低显存运行大模型能力，MIT 协议商用友好。 |
| **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)** | ornith-ai | 216 / 98.3K | 同系列稠密小模型，边缘端部署首选，支持图文对话。 |
| **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | superwhisper | 238 / 3.5K | 融合 ASR 与 LLM 的小模型，主打语音原生交互，极致轻量化。 |
| **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** | z-lab | 227 / 65.0K | 引入 **DFlash2 推测解码** 加速版 Qwen3.8，无损加速推理，工程优化典范。 |
| **[incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2)** | incoai | 179 / 105.8K | 社区复现的 DFlash2 加速版，下载量更高，验证了加速方案的通用性。 |
| **[EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)** | EschaLabs | 126 / 2.3K | **2-bit 极致量化**实验版，探索超低比特下性能保持边界。 |

---

### 🎨 多模态与生成（视频、音频、图像、Any-to-Any）
| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
|------|------|-------------|------------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,457 / 4.64M | **视频生成下载王**。支持文生视频/图生视频，工程化程度极高，Diffusers 原生支持，商业级落地首选。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 1,800 / 833.8K | 单文件 Diffusion 视频模型，支持视频编辑/风格迁移，部署门槛极低，创作者社区热度高。 |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 1,245 / 18.7K | 文生音乐 SOTA 级模型，长结构连贯性强，音频生成领域稀缺的高质量开放权重。 |
| **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** | Audio8 | 156 / 3.6K | 新兴 TTS 模型，ArkTTS 架构，预览版即展现自然韵律，值得追踪后续版本。 |
| **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** | sensenova | 152 / 2.7K | **Mixture-of-Transformers (MoT)** 原生多模态架构，Any-to-Any 交互，统一建模文本/图像/音频。 |

---

### 🔧 专用模型与工具（代码、数学、推理加速、模板工程）
| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
|------|------|-------------|------------|
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 1,468 / 0 | **非模型权重，但高点赞**。修复 Qwen 系列 Jinja 聊天模板 Bug，解决工具调用/系统提示失效痛点，工程必备。 |
| **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** | peculiar-ragdoll | 244 / 0 | 另一套 Qwen 模板修正方案，提供更严格的格式约束。 |
| **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** | z-lab | 227 / 65.0K | *(重复收录)* 专用于**推测解码加速**的专用权重，显著降低延迟。 |
| **[incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2)** | incoai | 179 / 105.8K | *(重复收录)* 社区高下载量复现版。 |

---

### 📦 微调与量化变体（社区微调、GGUF、AWQ、MLX、消融/去审查）
> **核心观察**：围绕 **Qwen3.8-27B** 形成了规模最大的“变体生态圈”，覆盖 GGUF/MLX/FP8/2-bit 全量化栈，及 Abliterated/Uncensored/Heretic 多流派去安全对齐版本。

| 模型 | 作者 | 点赞 / 下载 | 类型与亮点 |
|------|------|-------------|------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*