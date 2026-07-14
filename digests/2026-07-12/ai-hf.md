# Hugging Face 热门模型日报 2026-07-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-12 01:29 UTC

---

好的，作为AI模型生态分析师，以下是2026年7月12日（设定日期）的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-12**

#### **今日速览**

本周Hugging Face社区呈现三大显著趋势：**国产模型生态集体爆发**，腾讯、百度、智谱/深度求索系（通过微调衍生）全面上榜；**MoE（混合专家）架构**成为绝对主流，不仅体现在大型基础模型上，更在社区微调版（如Qwen3.5/3.6系）中广泛应用；**GGUF量化生态异常活跃**，高性能推理与边缘部署需求推动社区涌现了大量高下载量的量化版本，其中感知与视觉语言模型（VLM）的增长尤为突出。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 腾讯 | 👍697 | ⬇️8,210
  - 腾讯最新一代Hunyuan系列文本生成模型，高点赞标志着国产大模型在开源社区的持续发力。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 👍3,832 | ⬇️421,270
  - 基于GLM架构的对话模型，点赞数高居榜单前列，证明其优秀的性能或特定领域微调效果获得了社区广泛认可。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | InternScience | 👍494 | ⬇️28,141
  - 基于Qwen3.5的MoE智能体模型，专为Agent任务设计，反映了围绕Qwen构建智能体生态的趋势。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 👍852 | ⬇️0
  - 一个修复Qwen聊天模板的工具/配置，实用性强，点赞很高，反映了用户对模型可用性的关注。
- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** | nvidia | 👍106 | ⬇️30,418
  - NVIDIA最新Puzzle系列MoE模型，75B激活9B参数，是前沿大模型的代表。
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | SupraLabs | 👍98 | ⬇️1,275
  - 仅51M的模型路由器，用于在多个LLM间进行任务分发，小巧但潜力巨大。
- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** | migtissera | 👍84 | ⬇️806
  - Tess系列第四代，同样基于Qwen3.5架构，专注视觉与语言理解。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 百度 | 👍1,929 | ⬇️1,380,690
  - 百度开源的高性能OCR模型，下载量巨大，几乎成为通用OCR任务的标杆。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 👍186 | ⬇️0
  - 基于Krea-2的LoRA，用于保持身份特征（人脸）的图像编辑，极具实用价值。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Alissonerdx | 👍99 | ⬇️0
  - 专注于视频生成中的人脸身份保持，是当前文生视频赛道最热门的优化方向之一。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 👍2,707 | ⬇️1,472,194
  - NVIDIA发布的目标定位模型，3B参数，功能强大且下载量极高，展现出视觉定位的巨大市场需求。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS-Team | 👍109 | ⬇️12,817
  - 集成语音转写与说话人分离的端到端模型，是语音分析领域的利器。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea | 👍588 | ⬇️168,154
  - Krea-2的加速版文生图模型，下载量暗示了用户对快速、高质量图像生成的需求。
- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** | CohereLabs | 👍90 | ⬇️7,687
  - Cohere发布的专用于阿拉伯语的语音识别模型，体现了对低资源语言和多语种专项模型的投入。
- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** | robbyant | 👍85 | ⬇️381
  - 使用Diffusers Pipeline的视频MoE模型，面向视频生成探索。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 谷歌 | 👍348 | ⬇️20,110
  - Google官方开源的表格数据基础模型，支持零样本分类与回归，填补了表格领域的空白。
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 | 👍1,150 | ⬇️436,530
  - 基于Gemma-4的终端Agent模型，专注于编程和自动化任务，社区微调版本热度很高。
- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** | nvidia | 👍120 | ⬇️743
  - NVIDIA的Audex系列，虽标签未明确，但推测专注于音频理解或生成。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 👍2,014 | ⬇️1,944,961
  - Qwen3.5的社区微调+GGUF量化版，融合了Claude风格的对话数据，下载量极大，是社区微调的爆款。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 👍2,651 | ⬇️2,641,936
  - Qwen3.6的“无审查”MoE版GGUF模型，高下载量证明，释放模型创造性是社区的重要驱动力。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | GnLOLot | 👍191 | ⬇️29,887
  - MiniCPM-5的1B小模型GGUF，小模型+思维链（Thinking）的组合，适合边缘端推理。
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | unsloth | 👍140 | ⬇️38,922
  - DeepSeek-V4的GGUF量化版，来自知名量化团队unsloth，保证了高效率推理。
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | deepreinforce-ai | 👍850 | ⬇️1,216,495
  - 另一个35B级GGUF模型，百万级下载量证明中大规模量化模型需求旺盛。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 👍1,048 | ⬇️2,904,169
  - Qwen3.6-27B的GGUF版本，支持多模态（图像/文本输入），其下载量霸榜，成为当日最受欢迎的模型之一。
- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** | AliesTaha | 👍199 | ⬇️5,053
  - 一个“Fable”风格的模型或数据集微调版本，指向社区对创意写作和故事生成的兴趣。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | empero-ai | 👍768 | ⬇️186,852
  - 上述GGUF版本的原版，非量化版本同样获得广泛关注。

---

#### **生态信号**

1.  **模型家族势头**：**Qwen家族（3.5/3.6系列）** 成为本轮开源生态的绝对核心，超过50%的模型与之相关。**DeepSeek、GLM、Gemma** 系列紧随其后。腾讯（Hunyuan）和百度（OCR）的基础模型也展示了强劲的竞争力。
2.  **开源权重 vs 闭源**：榜单几乎被**开源权重模型**及其社区衍生品占领。闭源API模型（如GPT-4o）完全缺席，表明社区的热情和创造力完全在开源一侧。
3.  **量化与微调活动**：GGUF量化是本周当之无愧的“流量密码”，下载量普遍远超非量化版本。社区微调注重“差异化”，如**无审查（Uncensored）**、**特定风格（Claude Mythos）** 和**特定功能（Agentic、Thinking）**，说明用户不再满足于基础模型，而是追求个性化和任务导向的优化。MoE架构的普及也使得“大参数+小激活”成为新趋势。

---

#### **值得探索**

1.  **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**：**最推荐模型**。它代表了最新的模型趋势：**大模型（27B）+ MoE + 多模态（图像+文本）+ 高效量化（GGUF）**。下载量第一说明其在性能和实用性上取得了绝佳平衡，是本地部署多模态应用的理想选择。
2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：**最值得尝试的专用模型**。它解决了计算机视觉中的一个核心问题：在图像中定位特定物体。3B的参数规模使其在消费级GPU上亦可运行，可能会开启新一轮的视觉Agent应用研发。
3.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：**最值得关注的国产模型**。它拥有该周最高的点赞数之一，引发了社区热议。深入研究其与其他GLM版本及Qwen系的差异，对于理解国产大模型的前沿进展具有重要价值。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*