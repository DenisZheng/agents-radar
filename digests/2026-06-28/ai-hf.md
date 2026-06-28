# Hugging Face 热门模型日报 2026-06-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-28 00:38 UTC

---

# 📰 Hugging Face 热门模型日报

## 2026年6月28日 · 第1期

---

## 一、今日速览

本周 Hugging Face Hot 榜单呈现出三大趋势：**Qwen 生态持续爆发**，Qwen3.6-35B 系列衍生模型横扫多个席位，NVIDIA NVFP4 量化版本下载量突破 500 万次；**开源 Agent 编码模型白热化**，GLM-5.2、Ornith-1.0 系列与多款社区微调 Gemma-4 编程模型密集竞争；**多模态能力成为标配**，LocateAnything-3B、MiniMax-M3 等视觉语言模型热度显著上升，Krea-2 系列也在文生图领域引发关注。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1. **zai-org/GLM-5.2**
   - 🔗 https://huggingface.co/zai-org/GLM-5.2
   - 👤 zai-org（Zhipu AI / 智谱） | ❤️ 2,677 | ⬇️ 98,994
   - 智谱最新旗舰 MoE 架构开源模型，采用 `glm_moe_dsa` 动态稀疏激活架构，本周点赞数全榜第二，是国产大模型开源的标杆之作，也是目前最强的开源 LLM 候选之一。

2. **Qwen/Qwen-AgentWorld-35B-A3B**
   - 🔗 https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B
   - 👤 Qwen（阿里通义千问） | ❤️ 357 | ⬇️ 18,872
   - 阿里通义千问推出的 Agent 专用 MoE 模型，仅激活 3B 参数即可驱动复杂工具调用与多步推理任务，代表了"高效 Agent LLM"的产品化方向。

3. **WeiboAI/VibeThinker-3B**
   - 🔗 https://huggingface.co/WeiboAI/VibeThinker-3B
   - 👤 WeiboAI（微博 AI） | ❤️ 742 | ⬇️ 57,521
   - 微博发布的轻量级数学推理模型，在 3B 规模下展现出优秀的数学和推理能力，非常适合本地部署和端侧推理。

4. **deepreinforce-ai/Ornith-1.0-35B**
   - 🔗 https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B
   - 👤 deepreinforce-ai | ❤️ 161 | ⬇️ 7,571
   - 深度强化学习驱动的 35B 参数模型，支持多模态输入，在 Agent 和编码任务上表现独特，采用 Qwen3.5-MoE 架构微调。

5. **deepreinforce-ai/Ornith-1.0-9B**
   - 🔗 https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B
   - 👤 deepreinforce-ai | ❤️ 166 | ⬇️ 1,501
   - Ornith-1.0 的轻量版，同样具备多模态输入和 Agent 能力，9B 规模更适合个人开发者在有限硬件上部署推理。

6. **deepseek-ai/DeepSeek-V4-Pro-DSpark**
   - 🔗 https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark
   - 👤 deepseek-ai（幻方量化） | ❤️ 124 | ⬇️ 0
   - DeepSeek V4 的 Pro 版本，采用全新 DSpark 架构，论文同步上线 arXiv（2606.19348），下载量为 0 表明为全新发布即登榜，技术社区关注度极高。

7. **Microsoft/FastContext-1.0-4B-SFT**
   - 🔗 https://huggingface.co/microsoft/FastContext-1.0-4B-SFT
   - 👤 Microsoft | ❤️ 365 | ⬇️ 6,447
   - 微软发布的超紧凑 Explorer SubAgent 模型，4B 参数完成 SFT，定位長上下文理解与快速推理，体现了大厂在小模型 Agent 方向上的布局。

8. **LiquidAI/LFM2.5-230M**
   - 🔗 https://huggingface.co/LiquidAI/LFM2.5-230M
   - 👤 LiquidAI | ❤️ 129 | ⬇️ 9,791
   - 仅 230M 参数的语言模型，代表了边缘端 LLM 的极致尝试，可在手机等低功耗设备上流畅运行，展示了液态神经网络架构的独特潜力。

9. **Chunjiang-Intelligence/DeepSeek-v4-Fable**
   - 🔗 https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable
   - 👤 Chunjiang-Intelligence | ❤️ 112 | ⬇️ 1,328
   - 基于 DeepSeek V4 针对网络安全领域精细微调的专用模型，展现出社区对垂直安全场景的高度定制化需求。

10. **deepreinforce-ai/Ornith-1.0-397B**
    - 🔗 https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B
    - 👤 deepreinforce-ai | ❤️ 120 | ⬇️ 463
    - Ornith-1.0 最大规模版本（397B），虽然下载量尚小，但该系列的完整参数模型为社区提供了在超大规模多模态 Agent 模型上的探索基础。

11. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M**
    - 🔗 https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M
    - 👤 empero-ai | ❤️ 488 | ⬇️ 30,298
    - 社区基于 Qwen 3.5 微调的 Claude/Mythos 风格对话模型，支持超长 1M 上下文窗口，本周原版与 GGUF 量化版同时上榜，受欢迎程度极高。

### 🎨 多模态与生成

1. **nvidia/LocateAnything-3B** ⭐ 本周最热视觉模型
   - 🔗 https://huggingface.co/nvidia/LocateAnything-3B
   - 👤 NVIDIA | ❤️ 2,407 | ⬇️ 570,466
   - NVIDIA 开源的视觉定位基础模型，3B 参数即可实现开放词汇的图像定位（Referring Grounding），在视觉理解和跨模态检索方面表现突出，兼具高效与强大能力。

2. **baidu/Unlimited-OCR**
   - 🔗 https://huggingface.co/baidu/Unlimited-OCR
   - 👤 Baidu（百度） | ❤️ 1,137 | ⬇️ 212,760
   - 百度开源的无限制 OCR 模型，支持文档、表格、票据等全场景文字识别，下载量已超过 21 万次，是 OCR 领域开源生态的重要里程碑。

3. **krea/Krea-2-Turbo**
   - 🔗 https://huggingface.co/krea/Krea-2-Turbo
   - 👤 krea | ❤️ 310 | ⬇️ 17,445
   - Krea-2 的文生图加速版，基于 Diffusers 框架，在生成速度和推理成本上大幅优化，推动高质量文生图技术的普惠化应用。

4. **krea/Krea-2-Raw**
   - 🔗 https://huggingface.co/krea/Krea-2-Raw
   - 👤 krea | ❤️ 214 | ⬇️ 17,748
   - Krea-2 基础版文生图模型，与 Turbo 版本并行展示，用户可根据需求在画质和速度之间做灵活选择，共同塑造新一代文生图开源生态。

5. **MiniMaxAI/MiniMax-M3**
   - 🔗 https://huggingface.co/MiniMaxAI/MiniMax-M3
   - 👤 MiniMaxAI（MiniMax） | ❤️ 1,253 | ⬇️ 182,714
   - MiniMax 新一代视觉语言模型 M3，原生多模态能力突出，是本周期最受关注的国产多模态开源模型之一。

6. **nvidia/nemotron-3.5-asr-streaming-0.6b**
   - 🔗 https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b
   - 👤 NVIDIA | ❤️ 718 | ⬇️ 61,857
   - NVIDIA 基于 Nemotron 3.5 架构的流式语音识别模型，仅 0.6B 参数即可实现低延迟 ASR，进一步丰富边缘部署生态。

### 🔧 专用模型

1. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**
   - 🔗 https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF
   - 👤 yuxinlu1（社区） | ❤️ 2,426 | ⬇️ 536,130
   - **本周下载量最高的编码模型之一**，基于 Gemma-4 12B 微调专门针对代码生成任务，是 Gemma 生态中最受欢迎的编程辅助模型。

2. **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
   - 🔗 https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
   - 👤 yuxinlu1（社区） | ❤️ 729 | ⬇️ 206,828
   - 面向 Agent 场景的 Gemma-4 12B 微调版，融合 fable5/composer2.5/tau2 多种数据集训练，在代码、工具调用和自动化任务中表现优异。

3. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ⭐ 下载量冠军
   - 🔗 https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
   - 👤 HauhauCS（社区） | ❤️ 2,277 | ⬇️ 3,331,475
   - **本周全榜下载量 333 万次**，是 Qwen3.6-35B 的社区微调版本，聚焦无审查对话与 Agent 能力，用户对自由度和控制权的需求非常强烈。

### 📦 微调与量化

1. **unsloth/GLM-5.2-GGUF**
   - 🔗 https://huggingface.co/unsloth/GLM-5.2-GGUF
   - 👤 unsloth（社区） | ❤️ 426 | ⬇️ 125,230
   - UnSloth 团队为 GLM-5.2 制作的 GGUF 量化版本，让这款旗舰 MoE 模型能在消费级 GPU 上高效运行，极大降低了使用门槛。

2. **nvidia/Qwen3.6-35B-A3B-NVFP4** ⭐ 量化王者
   - 🔗 https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4
   - 👤 NVIDIA | ❤️ 367 | ⬇️ 5,022,254
   - **全榜最高下载量 502 万次**，NVIDIA 官方采用 NVFP4 量化方案，将 Qwen3.6-35B 部署到 Blackwell 架构 GPU 上，实现了迄今为止最大规模的量化模型分发。

3. **nvidia/GLM-5.2-NVFP4**
   - 🔗 https://huggingface.co/nvidia/GLM-5.2-NVFP4
   - 👤 NVIDIA | ❤️ 125 | ⬇️ 6,464
   - NVIDIA 同时提供了 GLM-5.2 的 NVFP4 量化版，两大旗舰模型在 Blackwell 生态上的并行优化，说明硬件厂商正积极拥抱开源大模型。

4. **deepreinforce-ai/Ornith-1.0-35B-GGUF** & **Ornith-1.0-9B-GGUF**
   - 🔗 https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF · https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF
   - 👤 deepreinforce-ai | ❤️ 322 / 219 | ⬇️ 20,266 / 11,034
   - Ornith-1.0 两个核心规模的 GGUF 量化版同步上榜，表明该社区版 Ornith-1.0 系列已被快速集成到 llama.cpp 生态，面向本地推理场景热度显著。

5. **Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF**
   - 🔗 https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF
   - 👤 Jackrong（社区） | ❤️ 97 | ⬇️ 49,935
   - Qwen3.6 系列 27B 规模的社区编程专用 + MTP 投机解码 + GGUF 四重优化组合，在开发者社区中的热度快速攀升。

6. **emporo-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
   - 🔗 https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
   - 👤 empero-ai（社区） | ❤️ 671 | ⬇️ 712,627
   - **下载量高达 71 万次**，Qwythos-9B 的 GGUF 量化版，本地推理用户对该模型的强烈需求，再次证明了 Qwen 微调模型在边缘部署生态中的潜力。

7. **huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated**
   - 🔗 https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated
   - 👤 huihui-ai（社区） | ❤️ 137 | ⬇️ 6,250
   - 对 Gemma-4 12B 编码模型进行 Abliteration 去审查处理，满足了对无约束模型日益增长的社区需求。

8. **HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced**
   - 🔗 https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced
   - 👤 HauhauCS（社区） | ❤️ 96 | ⬇️ 32,222
   - 采用 QAT 量化感知训练的无审查版 Gemma-4 12B，在视觉输入兼容性和对话自由度之间寻求平衡，展现了社区对 Gemma-4 生态的高度适配。

---

## 三、生态信号

**模型家族格局**：**Qwen 生态是本周最大赢家**。Qwen3.6-35B-A3B 在原版、NVIDIA NVFP4 量化版、HauhauCS 社区微调版之间形成了"三位一体"的立体生态，衍生模型合计下载量突破 800 万次。**Gemma-4 生态强势崛起**，两款 yuxinlu1 的编程微调模型合计下载量突破 74 万次，加上 huihui-ai 和 HauhauCS 的微调变体，Google Gemma-4 正成为开源编码模型的新基石。**GLM-5.2 代表了国产大模型的高水位开源**，原版 + UnSloth GGUF + NVIDIA NVFP4 三版本同时入榜。

**开源 vs 闭源**：榜单完全由开源模型主导，NVIDIA、阿里、智谱、百度、DeepSeek、MiniMax 等厂商持续加大开源力度，社区微调（HauhauCS、yuxinlu1、empero-ai、Jackrong）是下载量的主要贡献者，开源生态的"飞轮效应"已经形成。

**量化竞赛白热化**：NVIDIA NVFP4（Blackwell 原生格式）和 GGUF（llama.cpp 生态）形成双寡头格局。NVIDIA 亲自下场为 Qwen 和 GLM 两大模型做 NVFP4 量化，下载量分别达 502 万和 6,464 次；而 GGUF 生态的总量更大——仅前五名 GGUF 模型合计下载就接近 150 万次。量化不再是"妥协"，而是"标配"。

---

## 四、值得探索

1. **nvidia/Qwen3.6-35B-A3B-NVFP4** — 502 万下载量绝非偶然。这是目前规模最大的 NVFP4 量化开源模型，部署在 Blackwell GPU 上可接近全精度推理的效率，是理解硬件-模型协同优化的最佳实践样本。🔗 https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4

2. **zai-org/GLM-5.2** — 智谱的 `glm_moe_dsa` 架构在动态稀疏激活上走出了差异化路线，2,677 的点赞数（全榜第一）反映了社区对技术创新的认可。对于关注 MoE 架构演进的研究者，这是必读模型。🔗 https://huggingface.co/zai-org/GLM-5.2

3. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** — 53.6 万下载的社区编码模型冠军。融合了 Fable5/Composer2.5 多种数据集微调，是 Gemma-4 开源编程能力的最高标杆，可作为研究社区微调方法论的典型案例。🔗 https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF

---

> 📌 **日报说明**：本日报基于 2026-06-28 Hugging Face Hub 周热度 Top 30 数据整理，旨在帮助 AI 从业者快速把握模型生态动态。数据截止当日，模型热度可能快速变化，请以 Hugging Face 官方页面为准。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*