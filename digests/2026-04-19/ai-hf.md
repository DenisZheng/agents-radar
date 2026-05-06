# Hugging Face 热门模型日报 2026-04-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-19 00:25 UTC

---

**Hugging Face 热门模型日报（2026-04-19）**

---

### **今日速览**

本周 Hugging Face Hub 上最受关注的模型仍以 Google 的 Gemma 4 系列为核心，其中 `gemma-4-E4B-it` 和 `gemma-4-26B-A4B-it` 下载量持续领跑，凸显其在多模态与通用推理领域的强大影响力。MiniMax 的 MiniMax-M2.7 与 Qwen3.6 系列也表现强劲，而社区对“无审查”（uncensored）变体的兴趣显著上升，尤其体现在 GGUF 量化版本中。此外，NVIDIA 发布 Lyra-2.0 语音模型，Netflix 推出 void-model 视频编辑工具，标志着 AI 生成内容向专业场景渗透加速。

---

### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**  
  作者：MiniMaxAI | 点赞：957 | 下载：258,064  
  MiniMax 最新旗舰 LLM，支持长上下文对话与高效推理，成为国产大模型在开源生态中的新标杆。

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**  
  作者：zai-org | 点赞：1,399 | 下载：103,847  
  GLM 5.1 采用 MoE 架构并集成 DSA 优化，在复杂推理任务中表现优异，是中国团队在国际平台的重要突破。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  作者：Google | 点赞：2,153 | 下载：3,778,070  
  Gemma 4 系列中首个支持图像输入的文本生成模型，具备强多模态理解能力，是开源多模态推理的里程碑之作。

- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
  作者：dealignai | 点赞：1,283 | 下载：156,865  
  基于 Gemma 4 的无审查 MLX 版本，专为 Apple Silicon 优化，体现开源社区对安全与自由度平衡的探索。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  作者：Qwen | 点赞：831 | 下载：82,000  
  Qwen3.6 MoE 架构支持图文对话，兼顾性能与效率，是多模态交互领域的领先模型之一。

- **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)**  
  作者：Tencent | 点赞：864 | 下载：1,454  
  腾讯混元视觉语言模型升级版，专注于具身智能场景，适用于机器人控制与环境交互任务。

- **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**  
  作者：Google | 点赞：733 | 下载：2,118,971  
  支持任意模态输入输出的 Gemma 4 变体，具备强大的跨模态生成与理解能力，下载量稳居前列。

- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
  作者：k2-fsa | 点赞：641 | 下载：957,869  
  零样本语音克隆与多语种 TTS 系统，支持音色迁移与实时合成，是语音生成领域的高人气开源方案。

- **[netflix/void-model](https://huggingface.co/netflix/void-model)**  
  作者：Netflix | 点赞：869 | 下载：0  
  专为视频去物、修复与编辑设计的 diffusion 模型，结合 CogVideoX 框架，适用于影视后期制作。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**  
  作者：openbmb | 点赞：1,108 | 下载：35,870  
  开源语音合成模型 VoxCPM2，支持多语言与高音质输出，由智源研究院（BAAI）主导开发。

- **[OpenMOSS-Team/MOSS-TTS-Nano-100M](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M)**  
  作者：OpenMOSS-Team | 点赞：141 | 下载：33,394  
  轻量级中文 TTS 模型，参数仅 1 亿，适合边缘设备部署，推动语音生成平民化。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
  作者：unsloth | 点赞：448 | 下载：442,900  
  针对 Qwen3.6 MoE 优化的 GGUF 量化版本，极大降低显存需求，适合本地部署与微调实验。

- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**  
  作者：Jiunsong | 点赞：395 | 下载：66,552  
  无审查版 Gemma 4 的 GGUF 实现，支持 llama.cpp 运行，反映社区对模型自由度的强烈需求。

- **[unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF)**  
  作者：unsloth | 点赞：134 | 下载：100,683  
  MiniMax-M2.7 的高效量化格式，便于在消费级硬件上运行复杂对话任务。

---

### **生态信号**

当前 Hugging Face 模型生态呈现三大趋势：其一，**Gemma 4 家族成为多模态时代的开源标杆**，其开放权重策略吸引大量衍生开发与量化项目；其二，**MoE 架构普及化**，如 Qwen3.6、GLM-5.1 均采用混合专家结构，提升效率的同时保持强泛化能力；其三，**社区驱动的微调与去偏活动活跃**，“Abliterated”与“Uncensored”标签频现，显示用户更关注模型可控性与伦理边界。GGUF 和 AWQ 等量化格式持续升温，推动大模型落地至边缘与个人设备。

---

### **值得探索**

1. **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
   推荐理由：首个支持 Apple Silicon 的 MLX 版 Gemma 4，兼具高性能与低延迟，适合在 Mac 上进行本地多模态实验。

2. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
   推荐理由：零样本语音克隆技术成熟，支持中英等多语言音色迁移，是构建个性化语音助手的重要组件。

3. **[netflix/void-model](https://huggingface.co/netflix/void-model)**  
   推荐理由：Netflix 推出的专业级视频编辑模型，结合 diffusion 与逻辑推理，适用于影视内容创作与后期处理场景。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*