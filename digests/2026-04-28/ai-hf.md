# Hugging Face 热门模型日报 2026-04-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-28 00:30 UTC

---

**Hugging Face 热门模型日报（2026-04-28）**

---

### **今日速览**  
本周 Hugging Face Hub 上最受关注的仍是多模态与大型语言模型，DeepSeek-V4 系列、Qwen3.6 和 Google Gemma-4 成为流量主力。特别值得注意的是，Qwen3.6-35B-A3B 及其量化版本在下载量上持续领跑，反映出 MoE（混合专家）架构与高效推理格式（GGUF、FP8）的强劲需求。同时，社区对“去审查”与“大模型蒸馏”的兴趣升温，涌现出多个基于 Claude 4 能力蒸馏的 Qwen 变体。

---

### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
   DeepSeek 推出的高性能推理模型，支持长上下文与复杂任务，凭借其强大的逻辑与数学能力位居榜首，获赞超 3,000。

2. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**  
   OpenAI 发布的隐私保护分类器，用于识别并过滤敏感信息，适用于企业合规场景，标签包含 ONNX 支持。

3. **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**  
   Zhipu AI 开源的 MoE 架构 GLM 系列新版本，具备 DSA 优化与对话增强能力，获赞 1,536，适合大规模部署。

4. **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**  
   MiniMax 新一代通用语言模型，强调长文本理解与多轮对话，下载量接近 50 万，表现稳健。

---

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
   Google 最新开源多模态模型，集成视觉与文本处理能力，下载量破 630 万，是本周最热门的多模态模型。

2. **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**  
   月之暗面发布的高性能多模态模型，支持图像理解与生成，采用压缩张量技术提升效率。

3. **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)**  
   百度开源的 8B 参数文生图模型，基于 Diffusers 框架，Apache 2.0 许可，适合商用图像生成。

4. **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**  
   腾讯发布的图像转 3D 模型，支持高精度三维重建，技术前沿性强，获赞 613。

---

#### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**  
   LLaDA 2.0 的统一多模态架构，支持任意模态输入输出，代表下一代通用感知-生成范式。

2. **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)**  
   Meta 开源的人类中心视觉模型，专注真实世界理解，论文已发表于 arXiv，学术价值高。

---

#### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
   Unsloth 提供的 Qwen3.6-35B-A3B 量化版，下载量超 160 万，极大降低显存占用，适合边缘部署。

2. **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**  
   基于 Gemma-4 的去审查（abliterated）版本，移除内容安全限制，面向研究用途。

3. **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**  
   将 Claude 4 Opus 的推理能力蒸馏至 Qwen3.6-35B-A3B 的 GGUF 版本，显著提升逻辑链与数学能力。

---

### **生态信号**  
当前 Hugging Face 生态呈现三大趋势：一是 **MoE 架构主流化**，Qwen3.6-A3B 及其衍生模型占据多个榜单；二是 **高效推理格式普及**，GGUF 和 FP8 版本下载量远超原版，反映社区对轻量化部署的强烈需求；三是 **大模型“知识蒸馏”与“去审查”活动活跃**，Jackrong、hesamation 等开发者通过合并或蒸馏打造高性能定制模型，体现开源社区的创新活力。此外，Google、Meta、DeepSeek 等机构持续发布开源权重模型，推动闭源与开源边界模糊化。

---

### **值得探索**  
1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**：作为 Google 最新的开源多模态模型，其在图像理解与跨模态对齐上的表现值得关注，尤其适合构建端到端应用。  
2. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**：该量化模型在保持性能的同时大幅降低资源消耗，是探索本地部署与边缘 AI 的理想起点。  
3. **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**：GLM 系列长期注重推理效率，GLM-5.1 引入 DSA 优化，适合需要低延迟推理的企业级应用场景。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*