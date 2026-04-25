# Hugging Face 热门模型日报 2026-04-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-25 00:25 UTC

---

**Hugging Face 热门模型日报（2026-04-25）**

---

### 今日速览

本周 Hugging Face Hub 上最引人注目的趋势包括：DeepSeek V4 系列正式发布 Pro 与 Flash 版本，标志着其在推理效率与性能上的双重突破；Qwen3.6 系列持续火热，尤其 A3B MoE 架构在 GGUF 社区中下载量激增，凸显大模型轻量化部署需求旺盛；同时，Gemma4、GLM-5.1 和 MiniMax-M2.7 等开源权重模型表现强势，推动高质量闭源能力向开源生态渗透。

---

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

1. **deepseek-ai/DeepSeek-V4-Pro**  
   https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro  
   作者: deepseek-ai | 点赞: 2,419 | 下载: 30  
   DeepSeek V4 的 Pro 版本，主打高推理质量与多轮对话优化，成为当前最受关注的开源语言模型之一。

2. **zai-org/GLM-5.1**  
   https://huggingface.co/zai-org/GLM-5.1  
   作者: zai-org | 点赞: 1,502 | 下载: 204,327  
   智谱 GLM-5.1 发布 DSA-MoE 架构，支持长上下文与高效推理，是国产大模型中技术迭代最快的代表之一。

3. **MiniMaxAI/MiniMax-M2.7**  
   https://huggingface.co/MiniMaxAI/MiniMax-M2.7  
   作者: MiniMaxAI | 点赞: 1,056 | 下载: 469,402  
   MiniMax 最新开源语言模型，强调低延迟响应与多语言能力，适合企业级对话应用部署。

---

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

4. **moonshotai/Kimi-K2.6**  
   https://huggingface.co/moonshotai/Kimi-K2.6  
   作者: moonshotai | 点赞: 977 | 下载: 208,251  
   Kimi K2.6 是多模态理解模型，支持图文联合输入输出，具备强视觉推理与压缩张量加速能力。

5. **Qwen/Qwen3.6-27B**  
   https://huggingface.co/Qwen/Qwen3.6-27B  
   作者: Qwen | 点赞: 754 | 下载: 162,349  
   Qwen3.6 系列中的多模态版本，融合文本与图像理解，广泛用于智能助手与视觉问答场景。

6. **tencent/HY-World-2.0**  
   https://huggingface.co/tencent/HY-World-2.0  
   作者: tencent | 点赞: 592 | 下载: 2,741  
   腾讯发布的 World 2.0 模型，专攻从单图生成 3D 场景，适用于游戏开发与虚拟世界构建。

7. **openbmb/VoxCPM2**  
   https://huggingface.co/openbmb/VoxCPM2  
   作者: openbmb | 点赞: 1,228 | 下载: 94,124  
   语音合成专用模型，支持多语种 TTS，采用 CPM 架构实现自然流畅的人声生成。

---

#### 🔧 专用模型（代码、数学、医疗、嵌入）

8. **openai/privacy-filter**  
   https://huggingface.co/openai/privacy-filter  
   作者: openai | 点赞: 686 | 下载: 12,664  
   OpenAI 推出的隐私过滤工具，用于检测并脱敏敏感信息，已在安全合规场景中广泛应用。

---

#### 📦 微调与量化（社区微调、GGUF、AWQ）

9. **unsloth/Qwen3.6-35B-A3B-GGUF**  
   https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF  
   作者: unsloth | 点赞: 741 | 下载: 1,397,244  
   Qwen3.6 A3B MoE 模型的 GGUF 版本，由 Unsloth 优化适配，极大降低 CPU/GPU 部署门槛。

10. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
    https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive  
    作者: HauhauCS | 点赞: 416 | 下载: 388,836  
    基于 Qwen3.6 A3B 的“去审查”版本，社区通过 abliteration 技术移除内容限制，引发伦理讨论但下载活跃。

11. **Jiunsong/supergemma4-26b-uncensored-gguf-v2**  
    https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2  
    作者: Jiunsong | 点赞: 474 | 下载: 141,390  
    Google Gemma4 的去审查 GGUF 版本，面向研究用户开放无约束推理能力。

---

### 生态信号

本周生态呈现三大特征：其一，**MoE 架构主导高端市场**，Qwen3.6 A3B 与 DeepSeek V4 均采用混合专家设计，兼顾精度与成本；其二，**开源权重正逼近闭源性能**，Gemma4 与 GLM-5.1 下载量远超多数闭源 API，反映开发者对自主可控的需求上升；其三，**社区量化活动异常活跃**，GGUF 格式在 Qwen3.6 与 Kimi K2.6 上形成规模化分发，凸显本地推理与边缘设备部署成为新热点。此外，去审查类模型虽引发争议，但也揭示了模型安全边界探索的深层需求。

---

### 值得探索

1. **DeepSeek-V4-Pro**（https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro）：作为当前点赞最高的开源 LLM，其 Pro 版在复杂推理与长文本处理上表现突出，适合研究前沿推理机制。

2. **Qwen3.6-35B-A3B-GGUF**（https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF）：下载量破百万，是体验高性能 MoE 模型于本地环境的最佳入口，尤其适合资源受限但需强推理能力的场景。

3. **VoxCPM2**（https://huggingface.co/openbmb/VoxCPM2）：多语言 TTS 模型，技术新颖且应用场景明确，可快速集成至国际化产品中，值得关注其跨语种泛化能力。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*