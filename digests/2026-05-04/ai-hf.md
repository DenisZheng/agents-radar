# Hugging Face 热门模型日报 2026-05-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-04 00:30 UTC

---

**Hugging Face 热门模型日报（2026-05-04）**

---

### **今日速览**
本周 Hugging Face 上最受关注的仍是 DeepSeek-V4 系列与 Google Gemma-4 的强势表现，其中 `DeepSeek-V4-Pro` 以 3,472 点赞登顶榜首，凸显其在对话生成领域的持续影响力。多模态能力进一步普及，Qwen3.6、Gemma-4 和 Kimi-K2.6 均支持图文交互，推动视觉语言模型进入主流应用。与此同时，社区在 GGUF 量化与“去审查化”微调方面活跃度极高，如 HauhauCS 推出的多个 Qwen3.6 无过滤版本累计下载超百万次，反映用户对可控性与内容开放性的高度需求。

---

### **热门模型**

#### **🧠 语言模型（LLM、对话模型、指令微调）**
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
   作者: deepseek-ai | 点赞: 3,472 | 下载: 457,348  
   一句话说明：DeepSeek 最新旗舰 Pro 版本，在复杂推理与长上下文对话中表现卓越，是当前最热门的开源对话模型。

2. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
   作者: openai | 点赞: 1,231 | 下载: 104,695  
   一句话说明：OpenAI 发布的隐私过滤工具，用于检测并屏蔽敏感信息，提升部署安全性，适用于企业合规场景。

3. **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)**  
   作者: inclusionAI | 点赞: 110 | 下载: 642  
   一句话说明：基于 Bailong 架构的万亿参数级大模型，主打超长上下文理解与高效推理。

---

#### **🎨 多模态与生成（图像、视频、音频、文本到X）**
4. **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
   作者: Qwen | 点赞: 1,100 | 下载: 1,199,862  
   一句话说明：通义千问最新多模态模型，支持图文对话与高质量生成，下载量逼近 120 万，生态活跃度高。

5. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
   作者: google | 点赞: 2,493 | 下载: 7,907,233  
   一句话说明：谷歌新一代 Gemma-4 系列，具备原生图像理解能力，是开源多模态领域标杆之一。

6. **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**  
   作者: moonshotai | 点赞: 1,187 | 下载: 755,634  
   一句话说明：月之暗面推出支持压缩张量的多模态模型，兼顾性能与效率，适合边缘部署。

7. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**  
   作者: nvidia | 点赞: 205 | 下载: 38,865  
   一句话说明：NVIDIA 自研 Omni 架构模型，支持任意模态输入输出，专为 AI 工厂场景优化。

8. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**  
   作者: SulphurAI | 点赞: 105 | 下载: 332  
   一句话说明：专注于高质量文本生成视频的模型，采用 Diffusers 框架，支持端点兼容部署。

---

#### **🔧 专用模型（代码、数学、医疗、嵌入）**
9. **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**  
   作者: AngelSlim | 点赞: 80 | 下载: 599  
   一句话说明：混合精度量化翻译模型，仅 1.8B 参数却实现高精度跨语言转换，适合资源受限环境。

10. **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)**  
    作者: ibm-granite | 点赞: 139 | 下载: 17,108  
    一句话说明：IBM 企业级 Granite 4.1 系列，聚焦可信推理与知识密集型任务，适用于金融、科研等专业领域。

---

#### **📦 微调与量化（社区微调、GGUF、AWQ）**
11. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
    作者: unsloth | 点赞: 904 | 下载: 2,080,953  
    一句话说明：Unsloth 提供的 Qwen3.6 MoE 模型 GGUF 版本，极大降低显存占用，成为本地部署首选。

12. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
    作者: HauhauCS | 点赞: 541 | 下载: 799,579  
    一句话说明：社区激进去审查版 Qwen3.6 MoE，无内容过滤机制，吸引大量开发者用于测试与定制。

13. **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
    作者: dealignai | 点赞: 1,454 | 下载: 203,453  
    一句话说明：MLX 加速版 Gemma-4 去审查模型，专为 Apple Silicon 优化，支持低延迟推理。

---

### **生态信号**
当前 AI 模型生态呈现三大趋势：一是**多模态统一化**加速，Qwen3.6、Gemma-4 和 Kimi-K2.6 均实现“任意模态到任意模态”处理，推动通用智能体发展；二是**开源权重主导创新节奏**，DeepSeek、Google 等巨头持续释放高质量开源模型，而 OpenAI、NVIDIA 则侧重工具链与专用架构，形成互补格局；三是**社区驱动微调与量化**空前活跃，尤其是 GGUF + LoRA + 去审查组合成为热门玩法，HauhauCS 等用户通过极端风格化处理激发长尾应用场景，但也引发对内容安全的讨论。

---

### **值得探索**
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为当前点赞冠军，其 Pro 版本在多轮推理与成本控制间取得平衡，值得深入测试其在 Agent 场景下的表现。
2. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**：原生支持图像理解且开源免费，是构建低成本多模态应用的理想底座。
3. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**：MoE 架构+GGUF 量化双优势，适合研究大规模模型轻量化部署路径。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*