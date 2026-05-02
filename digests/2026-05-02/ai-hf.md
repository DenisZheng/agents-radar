# Hugging Face 热门模型日报 2026-05-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-02 00:30 UTC

---

**Hugging Face 热门模型日报（2026-05-02）**

---

### **今日速览**

DeepSeek 强势领跑，其 DeepSeek-V4-Pro 以超3,300点赞登顶；Google Gemma-4 系列表现强劲，Gemma-4-31B-it 下载量突破700万，显示大模型多模态化趋势加速。Qwen 与 Kimi 紧随其后，MoE 架构和视觉-语言融合成为主流。社区对量化版本（GGUF）需求旺盛，Unsloth 等工具持续推动高效部署。

---

### **热门模型**

#### **🧠 语言模型（LLM、对话模型、指令微调）**

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
  作者：deepseek-ai | 点赞：3,368 | 下载：321,492  
  一句话说明：新一代推理优化版大模型，主打高性能与低延迟对话，是当前开源 LLM 的标杆之作。

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**  
  作者：zai-org | 点赞：1,572 | 下载：279,489  
  一句话说明：智谱 GLM-5.1 发布，采用 MoE 架构与 DSA 压缩技术，支持长上下文与复杂推理任务。

- **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)**  
  作者：inclusionAI | 点赞：132 | 下载：897  
  一句话说明：轻量级 Ling 2.6 版本，专为代码生成与混合任务优化，适合资源受限场景。

#### **🎨 多模态与生成（图像、视频、音频、文本到X）**

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**  
  作者：Qwen | 点赞：1,055 | 下载：906,859  
  一句话说明：Qwen 推出的视觉-语言统一模型，支持图文交互与多轮对话，适用于智能助手与内容创作。

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**  
  作者：moonshotai | 点赞：1,173 | 下载：649,331  
  一句话说明：月之暗面 Kimi K2.6 实现高精度视觉理解与生成，集成 compressed-tensors 提升推理效率。

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**  
  作者：nvidia | 点赞：183 | 下载：35,000  
  一句话说明：英伟达 Nemotron-3 Nano Omni 支持任意模态输入输出，专为边缘设备设计的多模态推理引擎。

#### **🔧 专用模型（代码、数学、医疗、嵌入）**

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
  作者：openai | 点赞：1,176 | 下载：92,567  
  一句话说明：OpenAI 发布的隐私过滤工具，用于敏感信息识别与脱敏，支持 ONNX 部署。

- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**  
  作者：sensenova | 点赞：103 | 下载：1,148  
  一句话说明：商汤 SenseNova U1 的多模态推理模型，聚焦视觉-语言联合理解与实时响应。

#### **📦 微调与量化（社区微调、GGUF、AWQ）**

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  作者：unsloth | 点赞：879 | 下载：1,940,844  
  一句话说明：基于 Qwen3.6 MoE 的高性能 GGUF 量化版本，极大降低显存占用，适合本地部署。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  作者：HauhauCS | 点赞：519 | 下载：728,262  
  一句话说明：社区激进去偏版 Qwen3.6 MoE，去除内容过滤机制，吸引特定研究与应用群体。

- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**  
  作者：z-lab | 点赞：193 | 下载：14,793  
  一句话说明：基于 FlashAttention 优化的 Qwen3.6 变体，提升推理速度与长序列处理能力。

---

### **生态信号**

当前 AI 模型生态呈现三大趋势：其一，**DeepSeek 与 Google Gemma 引领开源浪潮**，前者凭借 V4 系列在性价比与性能间取得平衡，后者则以 Gemma-4 在多模态与合规性上树立新标准；其二，**MoE 架构持续普及**，Qwen3.6 与 GLM-5.1 均采用混合专家结构，兼顾计算效率与知识覆盖；其三，**量化与社区微调活跃度高**，Unsloth 提供标准化 GGUF 转换，而 HauhauCS 等用户通过“去偏”或“强化”微调形成细分赛道，反映开源社区对模型可控性与伦理边界的深层关注。整体来看，开源权重正逐步取代闭源 API 成为研发与生产落地首选。

---

### **值得探索**

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
   理由：作为当前周榜冠军，其在推理优化与对话质量上的突破值得关注，尤其适合构建企业级智能客服与编程助手。

2. **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**  
   理由：GLM 系列延续 DSA 压缩与 MoE 架构创新，GLM-5.1 在保持精度的同时大幅降低部署成本，是国产大模型工程化的重要参考。

3. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
   理由：该 GGUF 版本下载量近200万，代表社区对轻量化 MoE 模型的强烈需求，是探索本地部署与个性化微调的理想起点。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*