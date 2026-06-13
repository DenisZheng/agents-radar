# Hugging Face 热门模型日报 2026-06-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-13 00:43 UTC

---

## Hugging Face 热门模型日报  

### 1️⃣ 今日速览（2026-06-13）  

本周 Hugging Face 模型榜呈现出**“开源基座 + 社区量化/二创”双轨并进**的格局：  

- Google 的 Gemma 4 系列（含 12B 与 26B）持续霸榜，原生与量化版本合计占据多席；  
- DeepSeek V4-Pro 以近 5,000 赞和 338 万次下载独占鳌头，显示国产大模型在国际开源社区的影响力显著提升；  
- 图像/音频生成与“解除安全过滤”类再创模型（如 OBLITERATED、abliterated）热度不减；  
- 本地化部署需求强劲，GGUF/QAT 量化版模型频繁上榜，unsloth 等工具链持续活跃。

---

### 2️⃣ 热门模型分类  

#### 🧠 语言模型（LLM、对话模型、指令微调）  

- **deepseek-ai/DeepSeek-V4-Pro**  
  - 链接: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro  
  - 作者: deepseek-ai | 点赞: 4,796 | 下载: 3,384,418  
  - 说明: 国产旗舰开源大模型新标杆，综合对话与生成性能大幅提升，下载量远超同期竞品。  

- **google/gemma-4-12B-it**  
  - 链接: https://huggingface.co/google/gemma-4-12B-it  
  - 作者: google | 点赞: 967 | 下载: 911,544  
  - 说明: Google 最新指令微调统一模型（any-to-any），轻量高效，适合多任务落地。  

- **google/gemma-4-12B**  
  - 链接: https://huggingface.co/google/gemma-4-12B  
  - 作者: google | 点赞: 527 | 下载: 198,271  
  - 说明: 同一代基座版本，开放用于微调与研究，支撑后续多种社区变体。  

- **nex-agi/Nex-N2-Pro** / **nex-agi/Nex-N2-mini**  
  - 链接: https://huggingface.co/nex-agi/Nex-N2-Pro | https://huggingface.co/nex-agi/Nex-N2-mini  
  - 作者: nex-agi | 点赞: 223 / 180 | 下载: 2,551 / 2,839  
  - 说明: 基于 Qwen3.5-MoE 的轻量对话代码模型，主打高性价比部署。  

- **CohereLabs/North-Mini-Code-1.0**  
  - 链接: https://huggingface.co/CohereLabs/North-Mini-Code-1.0  
  - 作者: CohereLabs | 点赞: 335 | 下载: 4,054  
  - 说明: Cohere 开源的小型代码生成模型，适合 IDE 集成与低延迟推理。  

#### 🎨 多模态与生成（图像、视频、音频、文本到X）  

- **google/diffusiongemma-26B-A4B-it**  
  - 链接: https://huggingface.co/google/diffusiongemma-26B-A4B-it  
  - 作者: google | 点赞: 614 | 下载: 20,669  
  - 说明: 首个将扩散生成能力融入大语言框架的 Gemma 变体，支持图文联合生成。  

- **ByteDance/Bernini-R**  
  - 链接: https://huggingface.co/ByteDance/Bernini-R  
  - 作者: ByteDance | 点赞: 229 | 下载: 373  
  - 说明: 字节跳动开源的图/文到视频渲染模型，强调真实感与动态一致性。  

- **ideogram-ai/ideogram-4-fp8** / **ideogram-ai/ideogram-4-nf4**  
  - 链接: https://huggingface.co/ideogram-ai/ideogram-4-fp8 | https://huggingface.co/ideogram-ai/ideogram-4-nf4  
  - 作者: ideogram-ai | 点赞: 503 / 327 | 下载: 4,987 / 2,910  
  - 说明: 高质量文生图模型，提供 FP8/NF4 等低精度格式以适配消费级显卡。  

- **google/magenta-realtime-2**  
  - 链接: https://huggingface.co/google/magenta-realtime-2  
  - 作者: google | 点赞: 184 | 下载: 6,491  
  - 说明: 实时文本转音频模型，专为交互式音乐与音效生成设计。  

- **bosonai/higgs-audio-v3-tts-4b**  
  - 链接: https://huggingface.co/bosonai/higgs-audio-v3-tts-4b  
  - 作者: bosonai | 点赞: 386 | 下载: 29,347  
  - 说明: 支持多语言、高保真语音合成的 TTS 模型，基于 Qwen3 架构优化。  

#### 🔧 专用模型（代码数学医疗嵌入等）  

- **moonshotai/Kimi-K2.7-Code**  
  - 链接: https://huggingface.co/moonshotai/Kimi-K2.7-Code  
  - 作者: moonshotai | 点赞: 337 | 下载: 0  
  - 说明: 月之暗面推出的代码专用模型，强调长上下文理解与多语言编程辅助。  

- **nvidia/nemotron-3.5-asr-streaming-0.6b**  
  - 链接: https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b  
  - 作者: nvidia | 点赞: 392 | 下载: 3,551  
  - 说明: 超轻量级流式 ASR 模型，适用于边缘设备与实时语音识别场景。  

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
  - 链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive  
  - 作者: HauhauCS | 点赞: 1,722 | 下载: 2,393,894  
  - 说明: 高下载量的“无审查”Qwen 变体，反映部分用户对开放内容策略的强烈需求。  

#### 📦 微调与量化（社区微调、GGUF、AWQ）  

- **unsloth/gemma-4-12b-it-GGUF**  
  - 链接: https://huggingface.co/unsloth/gemma-4-12b-it-GGUF  
  - 作者: unsloth | 点赞: 570 | 下载: 836,531  
  - 说明: 社区优化的 GGUF 量化版，极大降低本地部署门槛，成为本周最热量化模型之一。  

- **google/gemma-4-12B-it-qat-q4_0-gguf**  
  - 链接: https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf  
  - 作者: google | 点赞: 133 | 下载: 175,635  
  - 说明: 官方提供的 QAT+GGUF 量化方案，平衡精度与速度，便于端侧部署。  

- **OBLITERATUS/Gemma-4-12B-OBLITERATED**  
  - 链接: https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED  
  - 作者: OBLITERATUS | 点赞: 254 | 下载: 43,578  
  - 说明: 社区“安全层剥离”微调版本，虽具争议但体现对模型控制权的高度关注。  

- **unsloth/diffusiongemma-26B-A4B-it-GGUF**  
  - 链接: https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF  
  - 作者: unsloth | 点赞: 214 | 下载: 17,666  
  - 说明: 对扩散生成模型进行 GGUF 量化，探索多模态生成在低资源环境的可行性。  

---

### 3️⃣ 生态信号  

当前开源大模型生态呈现三大趋势：  

1. **Gemma 4 系列成为新一代主流底座**：Google 统一架构（any-to-any）被广泛接受，原生模型与 unsloth 等社区量化版本合计占据榜单近三分之一，显示其生态系统快速成熟。  
2. **“无审查”与“安全剥离”模型持续活跃**：如 HauhauCS、OBLITERATUS 等高下载量变体，反映部分开发者对模型内容策略的高度敏感，也引发关于开放边界的讨论。  
3. **量化与本地部署需求爆发**：GGUF/QAT 格式几乎成为标配，unsloth、GGUF 等工具链推动大模型向消费级硬件下沉，端侧实用化进程加速。此外，国际厂商（DeepSeek、Moonshot、Cohere）与硬件方（NVIDIA）同步强化开源布局，开源权重已成为大模型竞争力的重要组成部分。  

---

### 4️⃣ 值得探索  

- **deepseek-ai/DeepSeek-V4-Pro** – 综合性能强劲，支持超长上下文与复杂推理，是替代闭源商业模型的有力候选。  
- **unsloth/gemma-4-12b-it-GGUF** – 极低资源需求下实现接近原模型的性能，适合个人开发者快速体验大模型能力。  
- **ByteDance/Bernini-R** – 视频生成赛道稀缺的高质量开源方案，对多模态研究者极具参考价值。  

（OWL 整理报道）

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*