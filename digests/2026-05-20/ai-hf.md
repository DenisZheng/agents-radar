# Hugging Face 热门模型日报 2026-05-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-20 00:38 UTC

---

**Hugging Face 热门模型日报（2026-05-20）**

---

### **今日速览**  
本周 Hugging Face 生态呈现三大趋势：DeepSeek V4-Pro 以 4,067 点赞登顶，彰显其在推理与对话领域的强劲势头；Qwen3.6 系列（尤其是 35B-A3B）凭借 MoE 架构和高下载量持续领跑多模态赛道；同时，SulphurAI 的 Sulphur-2-base 作为首个支持文本到视频生成的主流开源模型之一，标志着 AIGC 应用层创新加速。

---

### **热门模型分类整理**

#### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 👍 4,067 | 📥 3,622,763  
   DeepSeek 旗舰推理模型，专为复杂逻辑与长程任务优化，是当前最热门的开源大模型之一。

2. **[Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 👍 1,826 | 📥 5,711,500  
   Qwen 最新 MoE 架构模型，参数高效且性能卓越，广泛用于多模态理解与对话场景。

3. **[gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 👍 2,694 | 📥 10,045,599  
   Google 新一代 Gemma 4 系列，具备强多模态能力与开放权重策略，下载量遥遥领先。

4. **[ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 👍 536 | 📥 146,253  
   基于 arXiv:2605.05365 发布的 Zaya 1 推理专用基础模型，体现前沿学术向产业转化趋势。

5. **[HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 👍 118 | 📥 884  
   专为 HR 场景设计的小型语言模型，展现垂直领域轻量化 LLM 的应用潜力。

---

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
1. **[Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 👍 1,173 | 📥 1,114,657  
   首个主流开源文本到视频生成模型，支持 diffusers 与 endpoints_compatible，推动视频生成民主化。

2. **[MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 👍 804 | 📥 144,826  
   MiniCPM 家族升级版，在视觉-语言理解任务中表现优异，适合资源受限环境部署。

3. **[Supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 👍 467 | 📥 28,681  
   基于 ONNX 的高保真语音合成模型，支持实时 TTS 部署，适用于本地化语音助手开发。

4. **[HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 👍 400 | 📥 15,822  
   HiDream 多模态生成框架下的图像编辑模型，结合 Qwen3_VL 实现精准图文对齐控制。

5. **[Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 👍 155 | 📥 0  
   腾讯 ARC 团队提出的首个通用图像转 3D 模型，虽未发布权重但已引发广泛关注。

6. **[Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 👍 1,425 | 📥 558,113  
   ComfyUI 兼容的扩散模型，主打单文件分发与免依赖运行，极大简化创意工具链搭建。

---

#### 🔧 专用模型（代码、数学、医疗、嵌入）
1. **[needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 👍 92 | 📥 268  
   JAX 实现的函数调用与工具使用评估基准，为智能体系统提供标准化测试环境。

2. **[Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint)** | FrontiersMind | 👍 99 | 📥 18,458  
   早期训练检查点，助力研究者探索小模型预训练动态与代码生成优化路径。

---

#### 📦 微调与量化（社区微调、GGUF、AWQ）
1. **[Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 👍 329 | 📥 337,076  
   Unsloth 优化的 GGUF 格式 Qwen3.6 模型，显著降低 GPU 内存占用，提升本地推理效率。

2. **[Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 👍 270 | 📥 296,380  
   对应 MoE 版本的量化版本，适合混合精度部署与边缘设备集成。

3. **[supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 👍 630 | 📥 268,561  
   非审查版 Gemma4 的 GGUF 变体，满足特定场景下对内容自由度的需求。

---

### **生态信号**  
本周生态呈现三大动向：其一，**DeepSeek 与 Qwen 主导 LLM 赛道**，前者以 Pro 级推理见长，后者通过 MoE 架构实现高性价比扩展；其二，**多模态生成进入实用阶段**，Sulphur-2 和 Anima 等模型推动文本到视频/图像从实验室走向生产环境；其三，**社区持续强化“轻量化+开放”范式**，Unsloth 和 GGUF 工具链大幅降低部署门槛，而 Google 的 gemma-4 开放权重策略进一步巩固其生态影响力。值得注意的是，部分模型虽未公开权重（如 Pixal3D），但已释放论文与 API 接口，预示“半开源”将成为新趋势。

---

### **值得探索**  
1. **[Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**：作为首个主流开源文本到视频模型，建议优先体验其 API 或 ComfyUI 工作流，探索其在广告、教育等领域的落地可能性。  
2. **[MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**：在有限算力下实现高质量视觉-语言理解，非常适合构建私有知识问答系统或客服机器人。  
3. **[needle](https://huggingface.co/Cactus-Compute/needle)**：若从事 Agent 开发，此基准可帮助验证工具调用与函数执行能力，提升智能体可靠性。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*