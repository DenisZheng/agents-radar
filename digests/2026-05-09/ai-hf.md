# Hugging Face 热门模型日报 2026-05-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-09 00:32 UTC

---

**Hugging Face 热门模型日报（2026-05-09）**

---

### **今日速览**

本周 Hugging Face 上最引人注目的趋势是 **DeepSeek-V4 系列**和 **Google Gemma 4 系列**的强势表现，两者在点赞与下载量上均占据前列。多模态能力持续深化，Qwen3.6 和 Gemma 4 已支持图像-文本混合输入；同时，社区对 **GGUF 量化版本**和 **去审查化微调模型**的需求显著增长。此外，语音生成领域出现突破，OmniVoice 成为音频类榜首。

---

### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）

1. **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
   DeepSeek 出品的大语言模型，专为长上下文推理优化，支持对话与代码生成，下载量超百万，是当前最活跃的闭源 LLM 之一。

2. **[Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
   Qwen 发布的 MoE 架构大模型，参数高效且性能强劲，支持图像-文本多模态交互，下载量达 330 万，为当前 MoE 代表之作。

3. **[gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
   Google 最新开源的多模态模型 Gemma 4 的 31B 版本，具备视觉理解能力，下载量破 870 万，是 Google AI 开源战略的重要成果。

4. **[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**  
   DeepSeek 推出的轻量级高性能版本，兼顾速度与质量，适合部署场景，下载量近 85 万。

5. **[MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**  
   小米自研的 MoE 语言模型，主打长上下文与智能体应用，点赞数较高，体现国产大模型在垂直领域的发力。

---

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

1. **[Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**  
   SulphurAI 发布的开源文本转视频模型，支持高质量动态内容生成，是 AIGC 视频赛道的重要参与者。

2. **[LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**  
   基于扩散技术的图像到视频转换模型，支持复杂时序生成，技术新颖，下载量稳步上升。

3. **[OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
   Kaldi 团队开发的端到端语音合成模型，支持零样本语音克隆与多语言生成，下载量超 220 万，为语音领域标杆。

4. **[gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)**  
   Google Gemma 4 的助手微调版本，强化指令遵循与人机协作能力，支持任何模态输入输出。

5. **[SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**  
   商汤诺亚推出的多模态模型，具备跨模态特征提取能力，适合企业级多模态任务。

---

#### 🔧 专用模型（代码、数学、医疗、嵌入）

1. **[privacy-filter](https://huggingface.co/openai/privacy-filter)**  
   OpenAI 开发的安全过滤工具，用于识别敏感信息，采用 ONNX 格式，适合生产环境隐私合规部署。

2. **[Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**  
   腾讯混元翻译模型的量化版本，支持低比特推理，适用于边缘设备上的机器翻译任务。

---

#### 📦 微调与量化（社区微调、GGUF、AWQ）

1. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
   Unsloth 社区提供的 Qwen3.6 MoE 的 GGUF 量化版，极大降低显存占用，下载量超 250 万，为本地部署首选。

2. **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
   社区对 Gemma 4 进行“去审查化”微调的成果，支持 MLX 框架运行，体现开源社区对模型可控性的探索。

3. **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)**  
   基于 Qwen3.6 的 GGUF 版本，结合 Unsloth 优化，适合 CPU/GPU 混合推理场景。

---

### **生态信号**

当前 Hugging Face 生态呈现三大趋势：其一，**DeepSeek 与 Google Gemma 4 形成双强格局**，前者以性价比与推理效率取胜，后者依托 Google 算力与多模态优势快速扩张。其二，**多模态能力全面渗透**，从文本到视频（SulphurAI）、语音克隆（OmniVoice）到图像-文本联合建模（Qwen3.6, Gemma 4），AI 正加速迈向通用多模态智能。其三，**社区微调与量化活动空前活跃**，Unsloth、GGUF、MLX 等技术栈推动大模型向边缘与消费级设备下沉，尤其 GGUF 格式的普及使 35B 级模型也能在消费显卡上运行。值得注意的是，**去审查化与定制化微调模型**（如 dealignai、HauhauCS）虽存在伦理争议，但反映出用户对模型自由度的强烈需求。

---

### **值得探索**

1. **[gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**：作为 Google 最新开源多模态模型，其图像理解与长文本处理能力值得深入测试，尤其适合研究多模态对齐机制。

2. **[OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**：支持零样本语音克隆与多语言生成，技术成熟度高，是语音合成领域的里程碑式进展，可探索其在个性化 AI 助手中的应用潜力。

3. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**：该 GGUF 版本将 35B MoE 模型压缩至可本地运行，是低成本部署大模型的最佳实践，极具工程参考价值。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*