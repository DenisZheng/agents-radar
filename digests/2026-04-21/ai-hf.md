# Hugging Face 热门模型日报 2026-04-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-21 00:26 UTC

---

**Hugging Face 热门模型日报（2026-04-21）**

---

### **今日速览**
本周 Hugging Face Hub 上最受关注的模型仍以多模态与语言模型为主，其中 Google 的 Gemma-4 系列表现亮眼，多个变体登顶榜单；Qwen3.6 和 GLM-5.1 也持续占据高位。社区对“去审查”（uncensored）及低资源适配版本需求旺盛，GGUF、MLX 等格式下载量显著增长。值得注意的是，腾讯的 HY-World 2.0 发布即引发关注，标志着 3D 内容生成开始进入开源生态视野。

---

### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**  
   MiniMaxAI | 点赞：1,001 | 下载：314,205  
   新一代千亿级 MoE 对话模型，支持多轮推理与复杂任务调度，性能对标 Claude Opus。

2. **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**  
   zai-org | 点赞：1,438 | 下载：124,162  
   智谱 GLM-5.1 正式发布，采用动态稀疏注意力机制，在长文本理解与代码生成中表现突出。

3. **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**  
   Jackrong | 点赞：2,741 | 下载：567,288  
   基于 Qwen3.5 蒸馏 Claude 4.6 思维链能力的高阶推理模型，专为复杂逻辑任务优化。

---

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
4. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
   Google | 点赞：2,223 | 下载：4,237,068  
   谷歌 Gemma-4 的视觉-语言双模旗舰模型，支持图文问答与多轮交互，开放权重策略推动研究民主化。

5. **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)**  
   Tencent | 点赞：886 | 下载：1,662  
   混元多模态视觉-语言模型，具备强场景理解与具身智能推理能力，适用于机器人导航等应用。

6. **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**  
   openbmb | 点赞：1,197 | 下载：66,555  
   开源语音合成大模型，支持跨语种零样本 TTS，采用 CPM 架构实现高自然度语音生成。

7. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
   k2-fsa | 点赞：660 | 下载：1,080,795  
   支持零样本语音克隆与多语言合成的端到端音频模型，下载量居首，体现社区对语音技术的强烈兴趣。

---

#### 🔧 专用模型（代码、数学、医疗、嵌入）
8. **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)**  
   NVIDIA | 点赞：235 | 下载：155  
   英伟达发布的区域感知地理编码模型，结合卫星影像与文本进行空间定位，论文已公开。

---

#### 📦 微调与量化（社区微调、GGUF、AWQ）
9. **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**  
   unsloth | 点赞：561 | 下载：816,485  
   Qwen3.6 MoE 的 GGUF 量化版本，专为 CPU/GPU 混合部署设计，极大降低推理成本。

10. **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**  
    dealignai | 点赞：1,314 | 下载：163,752  
    MLX 格式的 Gemma-4 去审查版，专为 Apple Silicon 优化，支持本地高效运行。

11. **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)**  
    HauhauCS | 点赞：424 | 下载：781,705  
    基于 abliteration 技术移除内容过滤的 Gemma-4 变体，社区热议其自由创作潜力。

---

### **生态信号**

当前模型生态呈现三大趋势：一是 **Gemma-4** 和 **Qwen3.6** 成为开源多模态与语言模型的标杆，Google 与阿里云持续强化开放策略，推动研究普惠；二是 **去审查（Uncensored）与 abliterated 版本** 热度攀升，反映用户对模型自由度的高度期待，尤其在创意与科研场景中；三是 **轻量化与跨平台适配** 成为主流——GGUF、MLX、FP8 等量化格式下载激增，表明边缘部署与消费级硬件兼容性成为关键竞争维度。此外，腾讯、MiniMax 等非传统 AI 巨头入场，丰富了生态多样性，而 NVIDIA 与 OpenMOSS 等团队则在垂直领域模型上发力，预示专业化、场景化将成为下一阶段突破方向。

---

### **值得探索**

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**：作为 Gemma-4 系列的视觉旗舰，其在图文理解上的表现极具研究价值，尤其适合构建多模态 RAG 系统。
2. **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**：展示了如何通过蒸馏将闭源模型的思维链能力迁移至开源框架，是提升推理效率的重要路径。
3. **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**：首个公开的 World Model 3D 生成模型，虽暂无下载，但其“世界建模”范式可能引领下一代具身智能与仿真技术发展。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*