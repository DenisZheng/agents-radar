# Hugging Face 热门模型日报 2026-06-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-27 00:38 UTC

---

# Hugging Face 热门模型日报

**2026 年 6 月 27 日（周六）**

---

## 1. 今日速览

本日 Hugging Face 趋势榜呈现出三大清晰信号：**Qwen 生态持续统治中量级模型赛道**，从 Qwen3.5/3.6 GGUF 量化版到 NVIDIA 官方 NVFP4 优化版，形成了一个从 3B 到 35B 的完整矩阵；**Gemma 4 社区微调全面爆发**，以 yuxinlu1 和 HauhauCS 为代表的社区开发者围绕 Gemma-4-12B 推出大量 Coder/Agentic/Uncensored 变体，下载量高达 51 万和 345 万次；**国产大模型密集上榜**，百度 Unlimited-OCR、智谱 GLM-5.2、DeepSeek-v4-Fable 和 WeiboAI VibeThinker-3B 表明中国厂商正以开源为切入口加速全球影响力输出。生成端则有 Krea-2 图像生成模型新晋入榜，预示新一轮基座模型竞争开启。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

1. **zai-org/GLM-5.2** · [链接](https://huggingface.co/zai-org/GLM-5.2) · 智谱 · 👍 2,589 · ⬇ 83,589
    > 最新一代 GLM MoE-DSA 架构旗舰语言模型，以 2,589 点赞位居全榜第一，智谱在开源推理赛道最受瞩目的发布。

2. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** · [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) · empero-ai · 👍 584 · ⬇ 486,810
    > 9B 参数推理模型，100万-token 超长上下文，GGUF 量化版下载量近 49 万，是当前最热的小参数推理 GGUF。

3. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** · [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) · yuxinlu1 · 👍 2,398 · ⬇ 516,333
    > Gemma-4-12B 社区微调专注于代码能力，全榜最高下载量之一，社区 Gemma 生态的标杆作品。

4. **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** · [链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) · yuxinlu1 · 👍 684 · ⬇ 186,663
    > 同一系列 Agentic 变体，面向 Agent/终端工具使用场景，tau2 融合技术引发社区关注。

5. **WeiboAI/VibeThinker-3B** · [链接](https://huggingface.co/WeiboAI/VibeThinker-3B) · WeiboAI · 👍 731 · ⬇ 54,638
    > 微博 AI 仅 3B 参数但主打数学推理，731 点赞在同体量模型中表现亮眼。

6. **deepreinforce-ai/Ornith-1.0-35B-GGUF** · [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) · deepreinforce-ai · 👍 230 · ⬇ 3,002
    > 35B 中等尺寸推理模型 GGUF，为小规模部署提供新选择，尚处早期。

7. **deepreinforce-ai/Ornith-1.0-9B-GGUF** · [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF) · deepreinforce-ai · 👍 156 · ⬇ 1,779
    > Ornith-1.0 系列的 9B 版本，面向低资源推理场景。

8. **deepreinforce-ai/Ornith-1.0-35B** · [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) · deepreinforce-ai · 👍 121 · ⬇ 1,005
    > 原权重版本，Qwen3.5-Moe 架构微调，支持图文多模态输入。

9. **deepreinforce-ai/Ornith-1.0-9B** · [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) · deepreinforce-ai · 👍 112 · ⬇ 218
    > 9B 原权重，MIT 许可，刚发布即进入趋势榜，但下载量较低。

10. **deepreinforce-ai/Ornith-1.0-397B** · [链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B) · deepreinforce-ai · 👍 106 · ⬇ 126
    > 同系列巨型 MoE 模型，397B 参数对标闭源旗舰，下载量较低但意义非凡——开源体量大模型新玩家入场。

11. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M** · [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) · empero-ai · 👍 446 · ⬇ 20,346
    > 同时支持文本和图像输入的 9B 推理模型，非量化原权重版。

12. **microsoft/FastContext-1.0-4B-SFT** · [链接](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) · microsoft · 👍 355 · ⬇ 5,735
    > 微软"Explorer SubAgent"路线下的 4B 快速上下文模型，面向 Agent 工具调用场景，非常轻量。

13. **Chunjiang-Intelligence/DeepSeek-v4-Fable** · [链接](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable) · Chunjiang-Intelligence · 👍 107 · ⬇ 1,103
    > DeepSeek v4 架构微调，聚焦网络安全文本，Fable 系列微调代表。

14. **LiquidAI/LFM2.5-230M** · [链接](https://huggingface.co/LiquidAI/LFM2.5-230M) · LiquidAI · 👍 112 · ⬇ 8,286
    > 230M 参数的超轻量 Liquid Foundation Model，面向端侧/IoT，是趋势榜中最小的模型之一。

15. **Qwen/Qwen-AgentWorld-35B-A3B** · [链接](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) · Qwen · 👍 320 · ⬇ 13,186
    > Qwen 官方 Agent 专用 MoE 模型，面向复杂工具调用和多步骤推理。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

16. **MiniMaxAI/MiniMax-M3** · [链接](https://huggingface.co/MiniMaxAI/MiniMax-M3) · MiniMaxAI · 👍 1,246 · ⬇ 169,951
    > MiniMax 最新多模态 M3-VL 架构，图文双向理解与生成，1,246 点赞和 17 万下载量非常强劲。

17. **krea/Krea-2-Turbo** · [链接](https://huggingface.co/krea/Krea-2-Turbo) · krea · 👍 285 · ⬇ 8,721
    > Krea-2 图像生成新版本 Turbo 加速，社区期待的下一代文生图基座。

18. **krea/Krea-2-Raw** · [链接](https://huggingface.co/krea/Krea-2-Raw) · krea · 👍 202 · ⬇ 10,408
    > Krea-2 原始基座，为后续微调提供基础。

19. **nvidia/LocateAnything-3B** · [链接](https://huggingface.co/nvidia/LocateAnything-3B) · nvidia · 👍 2,383 · ⬇ 494,756
    > NVIDIA 推出的 3B 视觉定位模型，2,383 点赞 + 近 50 万下载，堪称本日最大黑马——极小模型实现高精度区域定位。

20. **Comfy-Org/Krea-2** · [链接](https://huggingface.co/Comfy-Org/Krea-2) · Comfy-Org · 👍 137 · ⬇ 10
    > Krea-2 的 ComfyUI 生态整合版本，下载量极低预示刚启动社区接入。

---

### 🔧 专用模型（OCR、语音、安全、嵌入）

21. **baidu/Unlimited-OCR** · [链接](https://huggingface.co/baidu/Unlimited-OCR) · baidu · 👍 1,040 · ⬇ 134,146
    > 百度最新 OCR 模型，支持无限分辨率文档/票据/手写识别，开源 OCR 赛道最受关注的新模型。

22. **nvidia/nemotron-3.5-asr-streaming-0.6b** · [链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) · nvidia · 👍 707 · ⬇ 56,434
    > NVIDIA 仅 0.6B 参数的流式 ASR 模型，面向实时语音识别边缘部署。

23. **datalab-to/lift** · [链接](https://huggingface.co/datalab-to/lift) · datalab-to · 👍 158 · ⬇ 6,054
    > 基于 Qwen3.5 架构的 PDF 理解专用模型，面向文档数字化场景。

---

### 📦 微调与量化（社区微调、GGUF、QAT、NVFP4）

24. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** · [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) · HauhauCS · 👍 2,263 · ⬇ 3,453,492
    > 全榜下载量季军（345 万），Qwen3.6 35B-A3B 的社区 GGUF 量化非审查版本，反映用户对自由度和本地部署的强烈需求。

25. **unsloth/GLM-5.2-GGUF** · [链接](https://huggingface.co/unsloth/GLM-5.2-GGUF) · unsloth · 👍 410 · ⬇ 107,553
    > Unsloth 出品的 GLM-5.2 GGUF 量化版，一键本地运行智谱大模型。

26. **nvidia/Qwen3.6-35B-A3B-NVFP4** · [链接](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) · nvidia · 👍 361 · ⬇ 4,812,629
    > 全榜下载量冠军（481 万），NVIDIA Model Optimizer 官方 NVFP4 量化，适配 Blackwell/GPU 推理加速。

27. **huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated** · [链接](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated) · huihui-ai · 👍 135 · ⬇ 5,445  

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*