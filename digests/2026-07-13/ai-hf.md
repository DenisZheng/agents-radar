# Hugging Face 热门模型日报 2026-07-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-13 01:43 UTC

---

好的，作为AI模型生态分析师，这是为您生成的2026年7月13日Hugging Face热门模型日报。

---

## Hugging Face 热门模型日报 | 2026-07-13

### 今日速览

本周Hugging Face生态呈现出三大核心趋势：首先，**Qwen 3.5/3.6系列模型生态空前繁荣**，从官方量化到社区微调（Uncensored、ThinkingCap）版本占据大量榜单席位，成为当前最热门的基座模型家族；其次，**多模态模型竞争白热化**，以 `nvidia/LocateAnything-3B` 和 `baidu/Unlimited-OCR` 为代表的图像理解模型，以及 `open-gigaai/Giga-World-1` 等视频生成模型获得极高关注；最后，**GGUF量化格式的统治地位稳固**，几乎所有热门模型都提供了GGUF版本，极大地降低了本地部署门槛，社区微调与量化活动异常活跃。

### 热门模型分类榜

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 点赞: 3,857 | 下载: 441,413
  - 采用MoE架构的对话模型，凭借强大的综合性能和极高的社区热度，成为本周点赞数最高的模型。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 点赞: 2,676 | 下载: 2,596,384
  - 基于Qwen3.6的35B MoE模型的高活跃度非审查版本，因其激进的调校风格和强大的多模态能力受到特定社区追捧。
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | 作者: bottlecapai | 点赞: 266 | 下载: 4,463
  - 一个旨在提升推理效率的Qwen3.6微调版本，主打“Token-Efficient Thinking”，在思考和输出之间找到新平衡点。
- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** | 作者: migtissera | 点赞: 94 | 下载: 971
  - 基于Qwen3.5架构的新型多模态对话模型，是Tess系列第四代产品，展示了独立开发者对前沿模型的应用探索。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 点赞: 2,717 | 下载: 1,501,653
  - 英伟达发布的3B参数视觉定位模型，能根据文本描述在图像中准确框出目标物体，多模态理解的基础模型。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 点赞: 1,943 | 下载: 1,430,656
  - 百度推出的通用OCR模型，声称能处理任意场景的文字识别，在海量下载中证明了其实用价值。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | 作者: Alissonerdx | 点赞: 111 | 下载: 0
  - 用于LTX视频模型的LoRA插件，专注于视频生成中的人物面部身份保持，是创意工具生态的重要组成部分。
- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** | 作者: open-gigaai | 点赞: 123 | 下载: 0
  - 一个开源的、Apache-2.0协议的世界模型，专注于视频生成，展现了开源社区在视频生成领域的雄心。
- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** | 作者: robbyant | 点赞: 85 | 下载: 0
  - 一个14B参数的世界模型，专注于图像到视频的转换，其“因果快速”版本表明了在效率上的优化。
- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** | 作者: nineninesix | 点赞: 85 | 下载: 2,263
  - 集成在Qwen3.5文本模型内的文本到语音（TTS）模型，代表了一种将语音能力直接融合进语言模型的新思路。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 作者: google | 点赞: 357 | 下载: 20,973
  - Google发布的表格基础模型，支持零样本分类与回归，在“窄但深”的专用模型领域树立了新标杆。
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | 作者: SupraLabs | 点赞: 107 | 下载: 1,434
  - 一个轻量级的51M参数模型路由器，用于在多个LLM之间动态分配任务，是Agent和复杂推理架构的核心组件。
- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** | 作者: CohereLabs | 点赞: 95 | 下载: 9,860
  - Cohere推出的阿拉伯语语音识别专用模型，关注小语种和多语言AI能力，是全球化AI应用的重要一环。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 点赞: 2,047 | 下载: 1,967,677
  - 基于Qwen3.5的9B模型，融合了Claude风格数据的高质量微调版本，其GGUF版本下载量极高。
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | 作者: yuxinlu1 | 点赞: 1,159 | 下载: 445,368
  - 专注于编码和终端Agent能力的Gemma-4模型微调版，展现了社区在特定任务上的精细化调校能力。
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 作者: deepreinforce-ai | 点赞: 855 | 下载: 1,347,036
  - 一个35B的通用文本生成模型，因其MIT开源协议和GGUF格式的易用性，在开发者社区中广受欢迎。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 作者: unsloth | 点赞: 1,058 | 下载: 2,905,019
  - unsloth团队为Qwen3.6-27B提供的高质量GGUF量化版本，下载量近300万，是量化领域的“明星包装工”。

### 生态信号分析

本周生态呈现 **“一超多强，量化为王”** 的格局。**Qwen 3.5/3.6** 系列无疑是当前最强劲的模型家族，从基座到非审查版、推理增强版，再到各种GGUF量化版，形成了完整且活跃的社区生态。这标志着开源社区已从单一追求模型性能，转向对**模型易用性、多模态能力和推理效率**的综合优化。开源权重模型（如GLM-5.2、Qwen系列）在与闭源模型的竞争中持续吸引开发者，而**GGUF量化已成为事实上的标准部署格式**。值得注意的是，Unsloth、bottlecapai等团队通过提供一键式量化或微调服务，在生态中扮演了至关重要的 **“基础设施提供者”** 角色。

### 值得探索

1.  **导航未来：**  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**。它不仅仅是模型，更是通往机器人、自动驾驶和智能交互的关键技术。了解其3B小参数量如何实现高精度定位，对理解多模态AI的边界非常有价值。
2.  **量产的思考者：**  **[bottlecapai/ThinkingCap-Qwen3.6-27B]**（及GGUF版本）。它代表了“效率型推理”的新方向。对于受限于硬件算力的研究者和开发者，这个模型展示了如何在不显著牺牲推理质量的情况下，实现更快的思考速度。
3.  **语音的未来形态：**  **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**。它将TTS能力无缝植入到语言模型中，颠覆了以往“LLM+TTS”两步走的范式。尝试这个模型，可以一窥未来对话式AI原生支持语音输出的可能性。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*