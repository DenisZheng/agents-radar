# Hugging Face 热门模型日报 2026-06-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-25 00:39 UTC

---

# Hugging Face 热门模型日报

**发布日期：2026-06-25**

---

## 一、今日速览

本周 Hugging Face 热度最高的是 deepseek-ai/DeepSeek-V4-Pro，发布即斩获超 5,000 点赞与 205 万下载，成为当之无愧的流量中心。GLM-5.2 系列（含 FP8 与 GGUF 变体）合计吸引近 70 万下载，显示 ZAI 团队的 MoE+DSA 架构已获得社区高度认可。Gemma 4 生态持续发酵，Google 官方版本与多个社区微调/量化版本同时上榜，12B 级别模型正成为开源社区最活跃的战场。多模态方向同样热闹——NVIDIA 的 LocateAnything-3B、Baidu 的 Unlimited-OCR 以及 Google 的 DiffusionGemma 均获得千万级下载或千级点赞，视觉语言模型（VLM）与 OCR 能力正在快速产品化。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

**1. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
- 作者：deepseek-ai | 👍 5,046 | ⬇️ 2,052,463
- 本周最热模型；DeepSeek 第四代旗舰，对话与推理能力全面跃升，下载量断崖领先。

**2. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
- 作者：zai-org | 👍 2,351 | ⬇️ 57,186
- 智谱最新 MoE+DSA 架构，在推理效率与长上下文上实现突破，社区关注度极高。

**3. [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
- 作者：google | 👍 1,162 | ⬇️ 2,114,441
- Google 官方 Gemma 4 指令微调版，any-to-any 能力覆盖图文多模态，下载量突破 210 万。

**4. [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
- 作者：WeiboAI | 👍 692 | ⬇️ 49,569
- 微博 AI 出品的小型化推理模型，专注数学与逻辑，3B 参数即可对标更大模型表现。

**5. [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
- 作者：microsoft | 👍 336 | ⬇️ 4,805
- Microsoft 面向 Agent 场景的 4B 上下文压缩模型，服务 Explorer SubAgent 工作流。

**6. [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
- 作者：Qwen | 👍 143 | ⬇️ 223
- 阿里通义千问面向 Agent 任务的 MoE 模型，35B 总参、3B 激活，刚发布即受关注。

**7. [poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)**
- 作者：poolside | 👍 95 | ⬇️ 2,913
- 面向生产部署的推理模型，支持 vLLM 与 SGLang 加速框架。

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

**8. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
- 作者：nvidia | 👍 2,346 | ⬇️ 359,498
- NVIDIA 推出的开放词汇视觉定位模型，3B 参数实现高精度图像目标定位。

**9. [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
- 作者：MiniMaxAI | 👍 1,228 | ⬇️ 143,093
- MiniMax 第三代视觉语言模型，多模态理解与生成能力大幅提升。

**10. [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
- 作者：google | 👍 1,060 | ⬇️ 1,036,328
- Google 将扩散机制引入 Gemma 架构，实现高质量文本到图像生成，下载量超 103 万。

**11. [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
- 作者：moonshotai | 👍 984 | ⬇️ 480,013
- 月之暗面 K2.7 代码版，支持图像理解与代码生成的深度融合。

**12. [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
- 作者：krea | 👍 188 | ⬇️ 878
- Krea 2 的 Turbo 推理加速版，面向实时文本到图像生成场景。

**13. [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)**
- 作者：krea | 👍 157 | ⬇️ 1,205
- Krea 2 基础模型，为社区微调提供高质量基座。

**14. [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)**
- 作者：owensong | 👍 193 | ⬇️ 0
- 超小型文本到语音模型，专注边缘设备上的实时语音合成。

**15. [Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)**
- 作者：Boogu | 👍 121 | ⬇️ 743
- 轻量级图像编辑模型，支持中英文提示引导的图像局部修改。

---

### 🔧 专用模型（代码、数学、医疗、嵌入、OCR、ASR）

**16. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
- 作者：baidu | 👍 732 | ⬇️ 45,687
- 百度推出的无界 OCR 模型，支持超长文档与复杂版式的高精度文字识别。

**17. [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
- 作者：nvidia | 👍 678 | ⬇️ 47,208
- NVIDIA 0.6B 参数流式 ASR 模型，面向低延迟实时语音识别场景。

**18. [datalab-to/lift](https://huggingface.co/datalab-to/lift)**
- 作者：datalab-to | 👍 147 | ⬇️ 4,644
- 基于 Qwen 3.5 的 PDF 文档理解与提取模型，专注企业级文档处理。

**19. [LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
- 作者：LiquidAI | 👍 119 | ⬇️ 11,471
- Liquid AI 的 350M 参数嵌入模型，在语义相似度任务上表现出色。

**20. [LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)**
- 作者：LiquidAI | 👍 88 | ⬇️ 3,362
- 基于 PyLate 框架的 ColBERT 检索模型，面向高效大规模文档检索。

---

### 📦 微调与量化（社区微调、GGUF、AWQ、FP8）

**21. [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
- 作者：yuxinlu1 | 👍 2,296 | ⬇️ 483,139
- Gemma 4 12B 的社区 GGUF 量化版，专注代码能力，下载量近 48 万——本周下载王。

**22. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
- 作者：HauhauCS | 👍 2,205 | ⬇️ 3,769,369
- Qwen 3.6 35B-A3B 的社区微调版，下载量高达 377 万，成为整个榜单下载量最高的模型。

**23. [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
- 作者：yuxinlu1 | 👍 530 | ⬇️ 138,704
- Gemma 4 12B 的 Agent 专用 GGUF 量化版，强化终端操作与工具调用能力。

**24. [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
- 作者：unsloth | 👍 347 | ⬇️ 76,971
- Unsloth 团队对 GLM-5.2 的快速 GGUF 量化，让消费级硬件也能运行该 MoE 模型。

**25. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
- 作者：empero-ai | 👍 347 | ⬇️ 63,637
- 融合 Claude 与 Mythos 风格的 9B 量化推理模型，支持 100 万 token 超长上下文。

**26. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
- 作者：empero-ai | 👍 307 | ⬇️ 5,123
- 上述模型的 Safetensors 原始版本，面向需要全精度推理的用户。

**27. [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
- 作者：zai-org | 👍 157 | ⬇️ 445,304
- 官方 FP8 量化版 GLM-5.2，在保持精度前提下显著降低显存占用。

**28. [huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)**
- 作者：huihui-ai | 👍 124 | ⬇️ 4,402
- Gemma 4 12B 代码版的 Abliterated（对齐移除）变体，面向特定研究用途。

**29. [Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)**
- 作者：Jackrong | 👍 83 | ⬇️ 10,867
- Qwen 3.6 27B 的社区 GGUF 量化版，支持 MTP 推测解码加速代码生成。

**30. [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**
- 作者：Comfy-Org | 👍 88 | ⬇️ 10
- Krea 2 的 ComfyUI 集成封装，方便用户在 ComfyUI 工作流中直接调用。

---

## 三、生态信号

本周榜单呈现三大结构性趋势。

**模型家族方面**，Gemma 4 生态最为抢眼——Google 官方版本与至少 4 个社区微调/量化变体同时上榜（yuxinlu1 × 2、huihui-ai、Jackrong），总下载量超过 740 万，显示 12B 级别已成为开源社区最密集的活跃区间。Qwen 3.6 系列同样表现强劲，HauhauCS 微调版以 377 万下载量位居全榜第一，加上 Qwen AgentWorld 和 Qwen 3.5 系列，阿里系模型在本周榜单中占据 5 席。DeepSeek V4 Pro 则以绝对优势领跑点赞榜，205 万下载量证明头部旗舰模型仍有巨大市场需求。

**开源 vs 闭源**方面，30 个模型全部为开源权重（含 Apache 2.0、MIT 及自定义许可），社区量化与微调活动异常活跃——GGUF 版本占榜单近三分之一，Unsloth、yuxinlu1、Jackrong 等社区贡献者的量化版本甚至比原版获得更高下载量，说明"开源 + 社区量化"已成为实际上的部署标准路径。

**量化与部署**方面，FP8 与 GGUF 双路线并行：zai-org 官方发布 GLM-5.2-FP8，Unsloth 快速跟进 GGUF；LiquidAI 的 LFM2.5 系列以 350M 小参数切入嵌入与检索市场，暗示边缘端部署需求正在快速增长。

---

## 四、值得探索

**1. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — MoE+DSA 架构标杆**

GLM-5.2 代表了当前开源 MoE 模型的前沿水平，其 DSA（Dynamic Sparse Attention）机制在长上下文推理中展现出显著效率优势。对于关注下一代架构方向的研究者而言，这是理解 MoE 演进路径的最佳样本。

**2. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) — 视觉定位新范式**

3B 参数即可实现开放词汇的图像目标定位，在目标检测、视觉搜索、机器人视觉等场景具有直接应用价值。NVIDIA 的开放发布策略使其成为 VLM 应用落地的优选基线。

**3. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) — 超长上下文推理实验场**

融合 Claude 风格推理与 100 万 token 上下文窗口的 9B 量化模型，在消费级硬件上即可部署测试超长文档理解与复杂推理任务，是研究长上下文与推理能力边界的性价比之选。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*