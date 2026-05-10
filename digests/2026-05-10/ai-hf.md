# Hugging Face 热门模型日报 2026-05-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-10 00:32 UTC

---

**Hugging Face 热门模型日报（2026-05-10）**

---

### **今日速览**  
本周 Hugging Face Hub 上最受关注的仍是多模态与大型语言模型生态的持续爆发。DeepSeek V4-Pro 以超高下载量领跑，Qwen3.6 系列凭借 MoE 架构和视觉能力成为焦点；Google Gemma 4 系列在图像文本任务中表现突出，而社区对 GGUF 量化版本的需求显著上升，Unsloth 等工具推动高效部署。此外，语音克隆（OmniVoice）和隐私过滤（Privacy Filter）显示专用场景模型也正快速落地。

---

### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **deepseek-ai/DeepSeek-V4-Pro**  
  [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | 作者：deepseek-ai | 点赞：3,784 | 下载：1,167,697  
  ▶ 新一代推理优化版大模型，支持超长上下文与高精度数学推理，是当前最热门的开源 LLM 之一。

- **Qwen/Qwen3.6-35B-A3B**  
  [链接](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | 作者：Qwen | 点赞：1,693 | 下载：3,511,378  
  Qwen 家族的 MoE 架构代表，具备强大的多语言与长程推理能力，适合企业级部署。

- **unsloth/Qwen3.6-35B-A3B-GGUF**  
  [链接](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | 作者：unsloth | 点赞：973 | 下载：2,581,735  
  社区优化版 Qwen3.6 MoE 的 GGUF 量化模型，极大降低显存需求，适合本地运行。

- **google/gemma-4-31B-it**  
  [链接](https://huggingface.co/google/gemma-4-31B-it) | 作者：google | 点赞：2,576 | 下载：8,894,303  
  Google 开源的视觉-语言混合模型，支持图文输入生成，性能接近闭源旗舰产品。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **SulphurAI/Sulphur-2-base**  
  [链接](https://huggingface.co/SulphurAI/Sulphur-2-base) | 作者：SulphurAI | 点赞：489 | 下载：115,477  
  基于 DiT 架构的文本转视频模型，支持高清输出与区域部署，是近期 T2V 领域新星。

- **TenStrip/LTX2.3-10Eros**  
  [链接](https://huggingface.co/TenStrip/LTX2.3-10Eros) | 作者：TenStrip | 点赞：186 | 下载：51,779  
  图像到视频转换模型，强调真实感与动态连贯性，适用于创意内容生产。

- **k2-fsa/OmniVoice**  
  [链接](https://huggingface.co/k2-fsa/OmniVoice) | 作者：k2-fsa | 点赞：822 | 下载：2,233,532  
  零样本多语言语音克隆模型，支持音色复制与跨语种合成，技术成熟度高。

- **HiDream-ai/HiDream-O1-Image**  
  [链接](https://huggingface.co/HiDream-ai/HiDream-O1-Image) | 作者：HiDream-ai | 点赞：102 | 下载：21  
  结合 Qwen3 VL 的视觉编辑模型，主打高质量图像重构与风格迁移。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **openai/privacy-filter**  
  [链接](https://huggingface.co/openai/privacy-filter) | 作者：openai | 点赞：1,381 | 下载：180,322  
  用于检测并过滤敏感信息的轻量级 ONNX 模型，适用于聊天应用中的隐私保护。

- **AngelSlim/Hy-MT1.5-1.8B-1.25bit**  
  [链接](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | 作者：AngelSlim | 点赞：155 | 下载：17,030  
  哈工大一粟团队推出的超轻量级机器翻译模型，采用极低比特量化，适合边缘设备。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **Jackrong/Qwopus3.6-35B-A3B-v1-GGUF**  
  [链接](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF) | 作者：Jackrong | 点赞：94 | 下载：33,515  
  社区优化版 Qwen3.6 MoE 的 GGUF 版本，针对推理效率进行调优。

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
  [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者：HauhauCS | 点赞：594 | 下载：1,061,556  
  未经审查的 Qwen3.6 MoE 变体，适合研究自由表达场景下的模型行为。

---

### **生态信号**  
本周期内，**Qwen 与 Gemma 家族**成为多模态与通用 LLM 的双强，尤其 Google 的 Gemma 4 系列在开放权重方面持续发力，挑战闭源模型地位。**DeepSeek V4 系列**凭借高性价比推理性能占据头部位置，反映国产 AI 在开源社区的强势崛起。社区对 **GGUF 量化模型**的热情高涨，Unsloth 等平台进一步降低部署门槛，推动模型平民化。同时，**专用场景模型**如隐私过滤、语音克隆等开始规模化落地，体现“大模型+垂直场景”的产业融合趋势。

---

### **值得探索**  
1. **SulphurAI/Sulphur-2-base**：首个主流文本到视频开源模型，适合快速验证 T2V 应用原型，尤其支持 US 区域端点兼容。  
2. **k2-fsa/OmniVoice**：成熟的多语言语音克隆方案，开源且无需训练，适合构建个性化语音助手。  
3. **Qwen/Qwen3.6-35B-A3B**：MoE 架构兼顾性能与效率，适合需要高吞吐对话系统的企业用户。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*