# Hugging Face 热门模型日报 2026-05-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-08 00:32 UTC

---

**Hugging Face 热门模型日报（2026-05-08）**

---

### **今日速览**
本周 Hugging Face 生态呈现多模态与推理优化的强劲势头。DeepSeek-V4-Pro 和 Qwen3.6 系列持续领跑，凸显 MoE 架构在长上下文与多模态任务中的优势；Google 的 Gemma-4 家族发布多款大参数量版本，推动开源多模态模型进入百亿级时代；同时，社区对 GGUF 量化和“去审查”微调的兴趣升温，反映用户对轻量化部署与内容自由度的新需求。

---

### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）
1. **deepseek-ai/DeepSeek-V4-Pro**  
   [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | 作者: deepseek-ai | 点赞: 3,724 | 下载: 946,264  
   DeepSeek 最新旗舰推理模型，专为高性能对话与复杂逻辑设计，支持深度思考链式输出。

2. **XiaomiMiMo/MiMo-V2.5-Pro**  
   [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | 作者: XiaomiMiMo | 点赞: 469 | 下载: 20,905  
   小米自研 MoE 模型，主打长上下文与智能体交互能力，适合企业级 Agent 应用。

3. **poolside/Laguna-XS.2**  
   [链接](https://huggingface.co/poolside/Laguna-XS.2) | 作者: poolside | 点赞: 232 | 下载: 16,792  
   轻量级对话模型，优化低资源场景下的响应速度与语义理解，适合边缘设备部署。

---

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
4. **google/gemma-4-31B-it**  
   [链接](https://huggingface.co/google/gemma-4-31B-it) | 作者: google | 点赞: 2,555 | 下载: 8,594,149  
   Google 开源首款百亿级多模态模型，支持图文互转与复杂推理，性能对标闭源竞品。

5. **Qwen/Qwen3.6-27B**  
   [链接](https://huggingface.co/Qwen/Qwen3.6-27B) | 作者: Qwen | 点赞: 1,175 | 下载: 1,771,851  
   Qwen 新一代视觉-语言 MoE 模型，具备高精度图像解析与跨模态对话能力。

6. **k2-fsa/OmniVoice**  
   [链接](https://huggingface.co/k2-fsa/OmniVoice) | 作者: k2-fsa | 点赞: 797 | 下载: 2,238,817  
   支持零样本语音克隆与多语种合成的端到端 TTS 模型，适用于个性化语音助手开发。

7. **TenStrip/LTX2.3-10Eros**  
   [链接](https://huggingface.co/TenStrip/LTX2.3-10Eros) | 作者: TenStrip | 点赞: 150 | 下载: 28,215  
   基于扩散的视频生成模型，擅长从静态图生成高质量动态画面，适合创意内容生产。

---

#### 🔧 专用模型（代码、数学、医疗、嵌入）
8. **openai/privacy-filter**  
   [链接](https://huggingface.co/openai/privacy-filter) | 作者: openai | 点赞: 1,343 | 下载: 165,240  
   OpenAI 发布的隐私保护分类器，用于识别并过滤敏感个人信息，助力合规数据训练。

9. **ibm-granite/granite-4.1-8b**  
   [链接](https://huggingface.co/ibm-granite/granite-4.1-8b) | 作者: ibm-granite | 点赞: 162 | 下载: 24,099  
   IBM 企业级基础模型，聚焦金融、政务等安全敏感领域，强调可解释性与可控性。

---

#### 📦 微调与量化（社区微调、GGUF、AWQ）
10. **unsloth/Qwen3.6-35B-A3B-GGUF**  
    [链接](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | 作者: unsloth | 点赞: 956 | 下载: 2,417,319  
    Unsloth 提供的高性能 GGUF 量化版，显著降低显存占用，适配本地推理与微调。

11. **dealignai/Gemma-4-31B-JANG_4M-CRACK**  
    [链接](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | 作者: dealignai | 点赞: 1,487 | 下载: 169,511  
    基于 Gemma-4 的去审查（abliterated）版本，移除内容过滤机制，满足特定研究或定制化需求。

12. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
    [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | 作者: HauhauCS | 点赞: 576 | 下载: 973,262  
    高度激进去审查的 Qwen3.6 MoE 模型，吸引极客社区关注，但需注意合规风险。

---

### **生态信号**
本周生态呈现三大趋势：其一，**MoE 架构成为主流**，Qwen3.6 与 DeepSeek-V4 系列凭借动态专家机制在高负载下表现优异；其二，**开源多模态模型加速追赶闭源标杆**，Google 的 Gemma-4 系列直接对标 Gemini Ultra，标志开源生态在通用能力上实现突破；其三，**社区对“去审查+量化”组合兴趣激增**，GGUF 格式结合 abliteration 技术，既满足离线部署需求，又规避政策限制，反映出用户对于自主控制模型行为的强烈诉求。此外，MLX 框架支持度提升，预示苹果生态内轻量化推理将成为新战场。

---

### **值得探索**
1. **google/gemma-4-31B-it**  
   作为 Google 首款百亿级开源多模态模型，其性能逼近闭源方案，适合研究多模态对齐机制与开放权重对 AI 民主化的推动作用。

2. **unsloth/Qwen3.6-35B-A3B-GGUF**  
   该模型展示了高效量化与微调流程的结合，是实践本地部署 MoE 模型的理想入口，尤其适合资源受限环境下的实验验证。

3. **k2-fsa/OmniVoice**  
   零样本语音克隆技术成熟，结合多语种支持，为构建个性化语音助手提供了完整开源方案，极具商业转化潜力。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*