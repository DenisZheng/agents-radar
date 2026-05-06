# Hugging Face 热门模型日报 2026-04-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-16 08:28 UTC

---

**Hugging Face 热门模型日报（2026-04-16）**

---

### **今日速览**
本周 Hugging Face Hub 上最受关注的趋势聚焦于 **Google Gemma 4 系列**的爆发式增长，其多模态版本（如 gemma-4-31B-it、gemma-4-E4B-it）在点赞与下载量上均占据高位。与此同时，**MiniMax 和智源 GLM** 也表现强劲，而社区对“去审查化”（uncensored）和量化版本（GGUF/MLX）的需求持续升温，反映出开源生态向轻量化、高自由度方向演进。

---

### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）
1. **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**  
   智源推出 GLM-5.1 MoE 模型，支持对话与文本生成，点赞达 1,253，体现中文大模型在国际平台的影响力上升。

2. **[netflix/void-model](https://huggingface.co/netflix/void-model)**  
   Netflix 开源视频处理模型，支持视频修复与物体移除，虽下载为0但获838点赞，显示工业级多模态应用潜力。

3. **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)**  
   NVIDIA 提供 FP4 量化版 Gemma-4-31B，专为推理优化，下载超百万次，凸显硬件厂商推动高效部署的趋势。

4. **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**  
   社区对 Google Gemma-4 进行 abliteration 后发布“无审查”版本，反映用户对内容安全边界的探索兴趣。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
5. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
   Google 最新 Gemma-4 多模态模型，支持图文理解与对话，下载超300万次，是当前最热门的多模态基座之一。

6. **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**  
   支持 any-to-any 输入（文本+图像），下载破180万，展现 Google 在多模态通用架构上的投入。

7. **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**  
   基于 Qwen3.5 蒸馏 Claude Opus 能力的推理增强模型，点赞高达 2,667，显示高质量知识蒸馏模型受追捧。

8. **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)**  
   腾讯混元 Vision-Language 模型，专注具身智能场景，标签含 hunyuan_vl_mot，代表国产多模态前沿进展。

9. **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**  
   支持跨语种 TTS 的语音合成模型，标签含 multilingual，适合全球化语音应用开发。

10. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
    零样本语音克隆模型，支持多语言，下载超70万次，是语音领域重要开源突破。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
11. **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**  
    腾讯 Hunyuan 3D 新模型，支持 image-to-3D，探索 AIGC 在三维生成领域的落地可能性。

12. **[LiconStudio/Ltx2.3-VBVR-lora-I2V](https://huggingface.co/LiconStudio/Ltx2.3-VBVR-lora-I2V)**  
    LTX 视频生成 LoRA，用于图像到视频转换，附带逻辑推理能力，适合创意工具链集成。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
13. **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)**  
    Unsloth 提供 Gemma-4-31B 的 GGUF 格式，便于 CPU/GPU 本地运行，下载超130万次。

14. **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**  
    针对 Gemma-4 的去审查 GGUF 版本，强调性能与自由输出，吸引技术极客群体。

15. **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)**  
    NVFP4 量化变体，平衡精度与效率，适合边缘设备部署。

---

### **生态信号**
本周数据揭示三大趋势：  
其一，**Gemma-4 家族**成为绝对焦点，无论是官方原版还是社区量化/去审查变体，均占据榜单前列，显示 Google 在多模态与轻量级模型战略上的成功；其二，**GGUF 和 MLX 格式**持续火热，Unsloth、Jiunsong 等贡献者推动模型在消费级硬件上的普及；其三，**去审查（abliterated/uncensored）模型**兴起，反映部分开发者追求更高自由度与定制化需求，尽管存在合规争议，但仍构成不可忽视的技术动向。此外，腾讯、智源、MiniMax 等中国团队在 LLM 与多模态领域加速出海，提升国际影响力。

---

### **值得探索**
1. **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**  
   首个支持 any-to-any 输入的开源多模态模型，具备强大图文理解与生成能力，适合作为多模态应用底座。

2. **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)**  
   高质量蒸馏模型，结合 Qwen 开源优势与 Claude 高级推理能力，性价比极高，适合企业级推理任务。

3. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**  
   零样本语音克隆技术领先，无需目标语音即可完成音色模仿，适用于个性化语音助手开发。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*