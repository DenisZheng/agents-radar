# Hugging Face 热门模型日报 2026-06-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-16 00:49 UTC

---

# Hugging Face 热门模型日报 · 2026-06-16

---

## 1. 今日速览

本周 Hugging Face Hub 的热度被**新一代旗舰模型与社区量化的双重浪潮**所主导。DeepSeek 以 V4-Pro 强势登顶点赞榜，表明高密度推理模型需求依然旺盛；Google Gemma-4 系列（12B 与 26B扩散版）密集占据了榜单的近三分之一席位，显示出 Gemma 生态的快速扩张。值得关注的是，Unsloth 等社区力量持续为热门模型提供 GGUF 量化版本，极大降低了部署门槛。与此同时，"Uncensored"（无审查）微调版本异军突起，HauhauCS 的 Qwen3.6-35B 变形以惊人的 270 万下载量位居榜首，折射出开发者社区对模型自由度的高度需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

**1. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
**作者:** deepseek-ai ｜ **点赞:** 4,862 ｜ **下载:** 2,934,763
本周点赞王。DeepSeek 第四代旗舰推理模型，凭借极高的性价比和强大的代码/推理能力，上线即获得近 300 万次下载，确立了其作为开源 LLM 标杆的地位。

**2. [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
**作者:** google ｜ **点赞:** 1,029 ｜ **下载:** 1,160,435
Google 全新 Gemma-4 系列指令微调版，支持 any-to-any 全模态能力，是 Google 在当前最强开源布局中的关键落子。

**3. [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**
**作者:** google ｜ **点赞:** 549 ｜ **下载:** 250,498
Gemma-4 基础版，作为进一步微调和训练的起点底座，受到研究者和开发者的广泛关注。

**4. [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
**作者:** nex-agi ｜ **点赞:** 287 ｜ **下载:** 3,681
基于 Qwen3.5 MoE 架构的轻量级对话和生成模型，Nex-agi 面向实用场景推出的专业版本。

**5. [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)**
**作者:** nex-agi ｜ **点赞:** 217 ｜ **下载:** 8,260
Nex-N2 系列的小型版本，在效果与推理成本之间寻求平衡，适合边缘部署和资源受限场景。

**6. [prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
**作者:** prefeitura-rio ｜ **点赞:** 302 ｜ **下载:** 188,723
巴西里约热内卢市政府发布的 397B 参数开源多模态模型（Qwen3.5 MoE 架构），政府级开源 AI 参与的标志性事件。

**7. [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
**作者:** moonshotai ｜ **点赞:** 741 ｜ **下载:** 56,750
Moonshot 出品的代码专用模型，继承 Kimi 系列的代码生成和推理优势，面向开发者场景。

**8. [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
**作者:** CohereLabs ｜ **点赞:** 388 ｜ **下载:** 11,145
Cohere 基于 Cohere2 MoE 架构的代码模型，小而精悍，适合集成到 IDE 和编码 Agent 流水线中。

**9. [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
**作者:** microsoft ｜ **点赞:** 101 ｜ **下载:** 13
微软发布的极速上下文处理模型，仅 4B 参数专为 Explorer SubAgent 场景优化，虽为新上榜但已引发对 Agent 子任务模型的关注。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**10. [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
**作者:** google ｜ **点赞:** 877 ｜ **下载:** 311,788
Google 将 Diffusion 图像生成范式融入 Gemma-4 的 26B 多模态模型，支持图文双向理解和生成，是 Gemma 家族向视觉创造力延伸的重要一步。

**11. [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
**作者:** MiniMaxAI ｜ **点赞:** 800 ｜ **下载:** 14,312
MiniMax 全新多模态 MoE 模型，图文交错理解与生成能力出色，上线即冲入点赞前三，展现了强劲的技术实力。

**12. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
**作者:** nvidia ｜ **点赞:** 2,054 ｜ **下载:** 86,968
NVIDIA 发布的视觉定位模型，仅 3B 参数即可实现高精度目标定位，点赞数仅次于 DeepSeek-V4-Pro，是视觉理解方向的明星作品。

**13. [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
**作者:** ideogram-ai ｜ **点赞:** 546 ｜ **下载:** 10,748
Ideogram 第 4 代文本生成图像模型，FP8 量化后部署更友好，延续了 Ideogram 在文字渲染和图像质量上的行业领先口碑。

**14. [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
**作者:** bosonai ｜ **点赞:** 445 ｜ **下载:** 38,429
BosonAI 基于 Qwen3 多模态架构的新一代 TTS 模型，以 4B 参数实现了高自然度的语音合成，是语音生成赛道的有力竞争者。

**15. [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
**作者:** nvidia ｜ **点赞:** 422 ｜ **下载:** 5,200
NVIDIA Nemotron 系列的流式语音识别模型，仅 0.6B 支持 cache-aware 低延迟 ASR，适合实时字幕和语音助手场景。

**16. [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
**作者:** zai-org ｜ **点赞:** 189 ｜ **下载:** 0
智谱 AI 发布的姿态驱动角色动画模型，图像输入 + 姿态控制即可生成视频，代表多模态生成在视频领域的关键突破。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

榜单中代码类专用模型已归入 LLM 部分。本期值得关注的专用能力方向包括：

- **语音方向:** NVIDIA Nemotron ASR（流式语音识别）和 BosonAI Higgs TTS（语音合成）形成完整的语音闭环。
- **视觉定位方向:** NVIDIA LocateAnything 以极小参数量实现精准目标定位，可能催生大量下游应用。
- **视频生成方向:** 智谱 SCAIL-2 的姿态驱动动画代表了可控视频生成的新范式。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**17. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
**作者:** HauhauCS ｜ **点赞:** 1,845 ｜ **下载:** 2,697,882
本周下载量冠军！基于 Qwen3.6 MoE 的无审查微调版，近 270 万下载量揭示了开发者对无约束模型的强烈需求。

**18. [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
**作者:** DavidAU ｜ **点赞:** 354 ｜ **下载:** 369,526
融合 Claude Opus 等多模型风格的超复杂微调，Di-IMatrix 融合技术的典型案例，社区微调的极致探索。

**19. [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
**作者:** unsloth ｜ **点赞:** 613 ｜ **下载:** 980,781
Google Gemma-4 指令版的 Unsloth GGUF 量化版，近百万下载量证明了社区量化是模型普及的关键加速器。

**20. [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**
**作者:** unsloth ｜ **点赞:** 241 ｜ **下载:** 288,390
基于 QAT（量化感知训练）的 Gemma-4 GGUF 版本，相比纯后训练量化有更好的精度保留。

**21. [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**
**作者:** unsloth ｜ **点赞:** 275 ｜ **下载:** 107,243
扩散版 Gemma 的量化版本，让 26B 多模态模型也能在消费级硬件上运行。

**22. [unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF)**
**作者:** unsloth ｜ **点赞:** 80 ｜ **下载:** 14,799
MiniMax 多模态模型的 Unsloth 量化版，多模态模型本地部署的趋势明显。

**23. [unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)**
**作者:** unsloth ｜ **点赞:** 98 ｜ **下载:** 9,327
Kimi 代码模型的 GGUF 版本，开发者可本地高效运行代码生成能力。

**24. [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-C7B-Coder-MTP-GGUF)**
**作者:** Jackrong ｜ **点赞:** 201 ｜ **下载:** 62,469
Qwen3.6 Coder 变体的 GGUF 量化版，MTP（多标记预测）技术提升推理速度。

**25. [Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)**
**作者:** Jackrong ｜ **点赞:** 311 ｜ **下载:** 184,446
上一代的 v2 改进版，更高的下载量表明社区对新版本迭代反应积极。

**26. [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
**作者:** yuxinlu1 ｜ **点赞:** 581 ｜ **下载:** 20,207
Gemma-4 的社区代码微调版，融合多个高质量数据集，是"社区蒸馏"模式的典型代表。

**27. [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
**作者:** OBLITERATUS ｜ **点赞:** 325 ｜ **下载:** 70,732
Gemma-4 的"无审查"微调变体，以极端风格审查和解除为特点，位列微调类模型前列。

---

## 3. 生态信号

本周榜单释放出若干清晰的信号。**模型家族方面**，Gemma-4 成为绝对主角：Google 官方发布了基础版、指令版、扩散版三条产品线，而 Unsloth 几乎同步推出了对应的 GGUF 量化版本，形成了"官方发布→社区量化→开发者部署"的高效分发循环，Gemma-4 集合的下载总量已超过 280 万次。**Qwen3.6 MoE** 同样势不可挡，从 HauhauCS 的 270 万下载无审查版到 Jackrong 的 Coder MTP 版，围绕 Qwen3.6 的微调生态正在迅速成熟。**开源 vs 闭源**方面，本周前 10 名中闭源厂商（Google、DeepSeek、NVIDIA）仍然占据点赞榜上游，但社区微调和量化的下载量远超官方版，说明"开源底座+社区衍生"的模式在用户采纳度上已经领先。**量化活动方面**，Unsloth 作为社区量化引擎在本周上榜 5 次（Gemma-4、DiffusionGemma、MiniMax-M3、Kimi），已形成事实标准；QAT（量化感知训练）量化版本的出现也标志着量化技术正在向更高精度方向演进。一个值得警惕的趋势是，"Uncensored"标签的模型（HauhauCS、DavidAU、OBLITERATUS）数量增加且下载量极高，反映出开发者社区对模型"去安全对齐"的强烈诉求，这一张力将成为开源 AI 治理的重要议题。

---

## 4. 值得探索

**🏆 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — 仅 3B 参数实现高精度视觉定位，点赞数高达 2,054 且下载量 87K。NVIDIA 在计算机视觉小型化上的持续突破，极高的参数效率使其非常适合嵌入移动端和边缘设备，是当前视觉定位任务密度最优解之一，强烈推荐对视觉 Agent 和具身智能感兴趣的开发者尝试。

**🔬 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — 本周绝对王者，4,862 点赞 + 近 300 万下载。作为 DeepSeek 最新推理旗舰，V4-Pro 在代码、数学和复杂推理上的表现值得亲自 benchmark，其对开源 LLM 竞争格局的影响很可能延续到下半年。

**💡 [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — Google 将 Diffusion 生成范式与 Gemma-4 统一架构融合的首次尝试，代表了多模态模型"理解与生成统一"的技术方向。作为技术前沿的探索者，这款模型在图文交错生成上的表现值得深入研究，可能预示着下一代多模态基础架构的走向。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*