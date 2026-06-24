# Hugging Face 热门模型日报 2026-06-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-24 00:34 UTC

---

# Hugging Face 热门模型日报 · 2026-06-24

---

## 📰 今日速览

本期榜单最显眼的信号是 **DeepSeek V4-Pro 以 5,030 赞、224 万下载遥遥领先**，巩固了 DeepSeek 系列在开源 LLM 领域的统治地位。多模态领域同样热闹——Google 的 Gemma 4 一体化模型与 Diffusion Gemma 持续获得高下载，Nvidia 的 LocateAnything-3B 和 MiniMax-M3 纷纷上榜，显示视觉理解与图像-文本任务持续火热。社区微调与量化生态异常活跃，围绕 Gemma 4 12B 和 Qwen 3.6 的 GGUF 变体多达数个，unsloth 等量化团队持续跟进主流模型。

---

## 🔥 热门模型分类

### 🧠 语言模型（LLM、对话模型、指令微调）

**1. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
作者: deepseek-ai | 👍 5,030 | ⬇️ 2,245,489
DeepSeek 最新旗舰版本，以超高点赞和下载量登顶。其强大的推理与对话能力使之成为本期绝对焦点，继续引领开源大模型的技术标杆。

**2. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
作者: zai-org | 👍 2,195 | ⬇️ 40,127
智谱 AI 发布的 GLM-5.2 大模型，采用 MoE+DSA 架构，在文本生成与对话场景中表现强劲，高点赞数反映社区对中国自研大模型的高度关注。

**3. [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
作者: WeiboAI | 👍 664 | ⬇️ 41,170
微博出品的 3B 参数推理模型，主打数学与逻辑推理能力，以极小参数规模实现高效推理，适合边缘部署与教育场景。

**4. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
作者: empero-ai | 👍 212 | ⬇️ 1,856
基于 Qwen 3.5 微调的 9B 模型，融合了 Claude 风格与 Mythos 数据集，支持百万级上下文长度，面向长文本理解与多模态任务。

**5. [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
作者: microsoft | 👍 321 | ⬇️ 4,391
微软发布的 4B 参数 SFT 模型，专为快速上下文处理设计，定位为 Explorer SubAgent，适合工具调用与多步推理场景。

**6. [lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)**
作者: lordx64 | 👍 172 | ⬇️ 4,547
基于 Qwen 3.5 MoE 架构的社区微调版本，支持图像-文本输入，探索 MoE 模型在多模态方向上的潜力。

**7. [poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)**
作者: poolside | 👍 93 | ⬇️ 2,787
Poolside 推出的 Laguna-M.1，支持 vLLM 和 SGLang 推理框架，面向生产级部署场景，主打高效推理服务。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**8. [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
作者: google | 👍 1,154 | ⬇️ 1,991,703
Google Gemma 4 统一多模态模型，支持 any-to-any 任务，近 200 万下载量证明其作为开源多模态基座的极高人气。

**9. [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
作者: google | 👍 1,055 | ⬇️ 948,996
Google 将扩散模型与 Gemma 结合的 26B 多模态模型，支持图像-文本双向生成，近百万下载显示社区对生成式多模态的强烈需求。

**10. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
作者: nvidia | 👍 2,316 | ⬇️ 274,025
Nvidia 推出的 3B 视觉定位模型，支持图像-文本到文本任务，高点赞数反映其在目标检测与视觉理解领域的突破性表现。

**11. [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
作者: MiniMaxAI | 👍 1,220 | ⬇️ 131,057
MiniMax 的多模态模型 M3，支持图像-文本输入，在视觉理解与多模态对话中表现出色，是中国 AI 公司在多模态赛道的重要布局。

**12. [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
作者: moonshotai | 👍 975 | ⬇️ 447,920
月之暗面推出的 Kimi K2.7 代码版本，支持图像-文本输入，结合代码生成与视觉理解，近 45 万下载显示开发者社区的高度认可。

**13. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
作者: baidu | 👍 472 | ⬇️ 8,396
百度发布的无限 OCR 模型，支持图像-文本到文本任务，专注于文档理解与 OCR 场景，展现百度在垂直视觉任务上的深耕。

**14. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
作者: HauhauCS | 👍 2,156 | ⬇️ 3,955,016
基于 Qwen 3.6 35B MoE 的社区微调版本，支持视觉输入，近 400 万下载量使其成为本期下载冠军，反映社区对"无审查"多模态模型的巨大需求。

**15. [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
作者: krea | 👍 80 | ⬇️ 84
Krea 推出的图像生成 Turbo 版本，基于扩散模型，主打快速文本到图像生成，面向创意设计与快速原型场景。

**16. [ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)**
作者: ostris | 👍 111 | ⬇️ 3,672
基于 Ideogram 4 的 LoRA 微调适配器，专注于加速图像生成，为社区提供轻量级图像生成增强方案。

**17. [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)**
作者: owensong | 👍 177 | ⬇️ 0
超小型文本到语音（TTS）模型，主打极致轻量化，适合嵌入式与边缘设备上的语音合成场景。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

**18. [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
作者: nvidia | 👍 656 | ⬇️ 41,050
Nvidia 推出的 0.6B 流式 ASR 模型，采用缓存感知架构，专为实时语音识别设计，在自动语音识别领域表现突出。

**19. [LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
作者: LiquidAI | 👍 114 | ⬇️ 10,117
Liquid AI 的 350M 嵌入模型，基于 LFM 2.5 架构，专注于句子相似度计算，为检索增强生成（RAG）提供高效向量表示。

**20. [LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)**
作者: LiquidAI | 👍 87 | ⬇️ 2,534
同样基于 LFM 2.5 的 ColBERT 风格嵌入模型，支持细粒度文档检索，与 Embedding 版本形成互补的检索工具链。

**21. [datalab-to/lift](https://huggingface.co/datalab-to/lift)**
作者: datalab-to | 👍 135 | ⬇️ 3,216
基于 Qwen 3.5 的文档理解模型，专注于 PDF 解析与图像-文本处理，面向企业文档智能化场景。

**22. [Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)**
作者: Boogu | 👍 112 | ⬇️ 592
Boogu 图像编辑模型早期版本，基于 Diffusers 框架，支持中英双语，采用 Apache 2.0 协议开放。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**23. [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
作者: yuxinlu1 | 👍 2,237 | ⬇️ 456,117
Gemma 4 12B 的代码专用 GGUF 量化版本，融合 Fable5 和 Composer 2.5 数据集微调，近 46 万下载显示开发者对量化代码模型的旺盛需求。

**24. [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
作者: yuxinlu1 | 👍 445 | ⬇️ 96,459
同一系列的 Agentic 版本，专注于终端操作与智能体任务，3.5x tau2 增强策略使其在自主代理场景中表现更佳。

**25. [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
作者: unsloth | 👍 300 | ⬇️ 55,820
Unsloth 团队对 GLM-5.2 的 GGUF 量化版本，延续其快速量化主流模型的传统，让更多用户能在消费级硬件上运行大模型。

**26. [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
作者: zai-org | 👍 149 | ⬇️ 395,290
GLM-5.2 的官方 FP8 量化版本，近 40 万下载量显示社区对低精度推理的强烈需求，FP8 在保持精度的同时大幅降低显存占用。

**27. [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
作者: empero-ai | 👍 186 | ⬇️ 27,218
Qwythos 9B 的 GGUF 量化版本，使百万上下文的模型能在本地运行，为长文本处理提供可行的本地部署方案。

**28. [bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)**
作者: bytkim | 👍 111 | ⬇️ 65,765
Qwen 3.6 27B 的社区 GGUF 版本，融合 MTP（多词预测）与 pi-tune 技术，在保持推理能力的同时优化量化效果。

**29. [huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)**
作者: huihui-ai | 👍 112 | ⬇️ 3,320
Gemma 4 12B 代码模型的"去审查"（abliterated）版本，社区对模型自由度与安全边界的探索持续活跃。

**30. [Comfy-Org/Boogu-Image](https://huggingface.co/Comfy-Org/Boogu-Image)**
作者: Comfy-Org | 👍 85 | ⬇️ 0
Boogu 图像模型在 ComfyUI 生态中的集成版本，面向工作流化图像生成场景，为 ComfyUI 用户提供即插即用的图像生成节点。

---

## 🌐 生态信号

本期榜单呈现出几个清晰的生态趋势：

**模型家族方面**，Google Gemma 4 系列（含 Diffusion Gemma）和 Qwen 3.6 系列形成双雄格局，前者以统一多模态架构赢得开发者青睐，后者以 MoE 架构的高效性吸引大量社区微调。DeepSeek V4-Pro 的强势表现则证明，旗舰级开源模型仍有巨大市场空间。

**量化生态持续繁荣**，GGUF 格式已成为社区量化的绝对主流，unsloth、yuxinlu1 等量化团队围绕 Gemma 4、GLM-5.2、Qwen 3.6 等热门模型快速推出量化版本。FP8 量化也开始进入官方发布流程（GLM-5.2-FP8），显示低精度推理正从社区走向官方。

**多模态成为新战场**，视觉理解（LocateAnything、Unlimited-OCR）、图像生成（Krea、Ideogram LoRA）、视觉-语言对话（MiniMax-M3、Kimi-K2.7）全面开花，模型厂商正加速从纯语言模型向多模态统一架构演进。

---

## ⭐ 值得探索

**1. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
本期无可争议的明星模型。5,030 点赞和 224 万下载的双重验证，加上 DeepSeek 系列一贯的技术深度，值得任何关注开源 LLM 的开发者深入研究其架构设计与训练方法。

**2. [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
以 3B 参数实现高性能视觉定位，2,316 点赞反映社区对其技术突破的认可。对于计算机视觉与多模态研究者而言，这是一个极具参考价值的轻量级视觉理解方案。

**3. [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
本期点赞数第二（2,237）且下载量高达 45 万+，展示了社区微调+量化组合的强大吸引力。对于希望在本地运行代码模型的开发者，这是一个即开即用的优质选择，也代表了社区驱动模型优化的典型范式。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*