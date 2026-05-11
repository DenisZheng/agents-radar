# Hugging Face 热门模型日报 2026-05-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-11 00:33 UTC

---

**Hugging Face 热门模型日报（2026年5月11日）**

---

### **今日速览**
本周 Hugging Face Hub 上最引人注目的趋势是 Google 的 Gemma 4 系列持续领跑多模态与推理赛道，其中 `gemma-4-E4B-it` 以超550万下载量成为明星模型。DeepSeek 和 Qwen 家族凭借高效 MoE 架构在对话与多模态领域强势发力，而 SulphurAI 推出的 text-to-video 开源模型首次进入 Top3，标志着视频生成正式迈入主流开源生态。此外，社区对量化与微调的热情高涨，GGUF 格式模型下载量普遍领先。

---

### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **deepseek-ai/DeepSeek-V4-Pro**  
  https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro  
  作者：deepseek-ai | 点赞：3,819 | 下载：1,339,144  
  DeepSeek V4 Pro 是一款高性能推理专用大语言模型，支持复杂逻辑与代码任务，凭借其高性价比推理能力成为企业级部署首选。

- **Qwen/Qwen3.6-35B-A3B**  
  https://huggingface.co/Qwen/Qwen3.6-35B-A3B  
  作者：Qwen | 点赞：1,706 | 下载：3,668,376  
  通义千问最新 MoE 架构模型，仅激活约35%参数即可实现接近全参性能，适合长上下文与多轮对话场景。

- **google/gemma-4-31B-it**  
  https://huggingface.co/google/gemma-4-31B-it  
  作者：google | 点赞：2,589 | 下载：8,965,984  
  Google 发布的 Gemma 4 系列中首个支持图像理解的双向模型，基于 Gemini 2.5 技术栈，具备强多模态推理能力。

- **unsloth/Qwen3.6-27B-GGUF**  
  https://huggingface.co/unsloth/Qwen3.6-27B-GGUF  
  作者：unsloth | 点赞：638 | 下载：1,412,778  
  Unsloth 社区优化版 Qwen3.6-27B 的 GGUF 量化版本，显著降低显存占用，适合本地部署与边缘计算。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **SulphurAI/Sulphur-2-base**  
  https://huggingface.co/SulphurAI/Sulphur-2-base  
  作者：SulphurAI | 点赞：533 | 下载：144,251  
  开源 text-to-video 模型，采用改进的 DiT 架构，支持高保真动态画面生成，为 AI 视频创作带来新可能。

- **k2-fsa/OmniVoice**  
  https://huggingface.co/k2-fsa/OmniVoice  
  作者：k2-fsa | 点赞：836 | 下载：2,212,436  
  支持零样本跨语种语音克隆的开源模型，涵盖 100+ 语言，适用于个性化语音助手开发。

- **TenStrip/LTX2.3-10Eros**  
  https://huggingface.co/TenStrip/LTX2.3-10Eros  
  作者：TenStrip | 点赞：196 | 下载：58,647  
  LTX-Video 2.3 的定制版本，专注于流畅图像转视频生成，尤其擅长人物动作连贯性表现。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **openai/privacy-filter**  
  https://huggingface.co/openai/privacy-filter  
  作者：openai | 点赞：1,394 | 下载：185,884  
  OpenAI 开发的隐私保护分类器，可识别并过滤敏感信息输出，广泛应用于合规内容审核系统。

- **AngelSlim/Hy-MT1.5-1.8B-1.25bit**  
  https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit  
  作者：AngelSlim | 点赞：160 | 下载：17,223  
  混合精度低比特翻译模型，支持中英日韩等主流语言对，适合资源受限环境下的实时翻译应用。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **unsloth/Qwen3.6-35B-A3B-GGUF**  
  https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF  
  作者：unsloth | 点赞：986 | 下载：2,657,295  
  社区优化的 MoE 模型 GGUF 版本，结合 Unsloth 内存压缩技术，显著提升推理效率。

- **DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF**  
  https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF  
  作者：DavidAU | 点赞：120 | 下载：181,147  
  高度定制化“去审查”微调版本，针对编程与安全任务强化，体现社区对模型可控性与自由度的高度关注。

---

### **生态信号**
本周期内，**Gemma 4** 和 **Qwen 3.6** 两大阵营表现尤为突出，反映出谷歌与阿里在开源权重战略上的持续投入。Gemma 4 系列不仅提供完整开源权重，还支持多模态输入，推动“开源即服务”模式普及。与此同时，MoE 架构（如 A3B）因能效比优势成为主流选择。社区对 **GGUF 量化** 热情高涨，多个高下载量模型均为此格式，表明本地部署需求旺盛。此外，**微调文化兴起**，大量非官方但功能增强的版本涌现，显示用户从“使用”转向“共建”生态的趋势。

---

### **值得探索**
1. **gemma-4-E4B-it**（https://huggingface.co/google/gemma-4-E4B-it）  
   作为目前最大规模的 Gemma 4 模型，其图像理解与推理能力接近闭源旗舰产品，且完全开源，极具研究价值。

2. **Sulphur-2-base**（https://huggingface.co/SulphurAI/Sulphur-2-base）  
   首个进入榜单的 text-to-video 开源模型，代表视频生成正从闭源走向开放，值得关注其在创意产业中的落地潜力。

3. **OmniVoice**（https://huggingface.co/k2-fsa/OmniVoice）  
   零样本多语种语音克隆技术突破，为无障碍沟通与全球化 AI 交互提供新路径，适合开发多语言智能客服或教育工具。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*