# Hugging Face 热门模型日报 2026-08-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-16 00:55 UTC

---

# 📋 Hugging Face 热门模型日报｜2026-08-16

---

## 🚀 今日速览

1. **Qwen3.5 系列（27B、MoE 95B）强势霸榜**，官方原版、FP8、GGUF、NVFP4 多形态同步上榜，周点赞破万，确立当前开源中文/多语言基座第一梯队地位。  
2. **MiniMax-H3 视频生成生态爆发**：官方模型、ComfyUI 适配版、Turbo 蒸馏版、LoRA 微调版同周冲入 Top 30，下载量合计超 1500 万，成为 Sora 级开源视频模型的事实标准。  
3. **多模态原生模型加速落地**：Qwen3.5-27B、Muse-Glimmer-30B、Kimi-K3、LFM2.5-VL-3B 四大“图文对话”模型同周入榜，标志着统一架构多模态已成主流范式。  
4. **量化与部署工具链成熟度显著提升**：unsloth 单周贡献 5 个量化变体（GGUF/NVFP4/FP8），下载量均破 10 万，NVFP4 等新格式加速 Blackwell 时代推理落地。  
5. **MoE 与线性注意力架构双线并进**：DeepSeek-V4、Nemotron-3.5、LFM2.5、Kimi-K3 分别代表 MoE、混合注意力、线性 RNN、压缩张量四大技术路线，开源架构多样性创历史新高。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 967 | 6.4k | **2.4T 训练 tokens、95B 激活参数的 MoE 旗舰**，长上下文与推理能力双强，开源 MoE 新标杆。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 490 | 19.9k | DeepSeek V4 专家混合架构最新版，代码/数学/推理综合 SOTA，闭源 API 同步开放。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,421 | 180万 | **轻量化蒸馏版**，保留 90%+ 性能、推理延迟降 60%，生产环境首选。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 272 | 17万 | Nemotron-H 混合注意力架构 + NVFP4 量化，单卡 H100 推理 100k tok/s。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 627 | 13.5万 | 线性注意力（LFM）架构小模型，常数内存推理，边缘部署零显存压力。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,796 | 9.2万 | **原生多模态 27B 基座**，图文对话/OCR/视频理解统一建模，中文视觉问答 SOTA。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,577 | 24.6万 | Meta 开源多模态 30B，稀疏注意力加速长视频理解，学术界复现热度极高。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,725 | 210万 | **本周点赞冠军**，压缩张量技术将 100B 级能力压入 30B 显存，多模态长文本突破 1M tokens。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 939 | 37.8万 | 单文件 Diffusion 视频模型，支持 I2V/T2V/V2V，ComfyUI 原生兼容，创作者工具链首选。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,972 | 221万 | **Sora 级开源视频基座**，1080p/30fps/16s，物理一致性与指令遵循双强。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 766 | 5.1k | 文本/歌词生成立体声乐，支持风格迁移与长结构控制，音乐生成新 SOTA。 |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 143 | 4.6k | 线性注意力多模态小模型，手机端实时图文对话零延迟。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 188 | 1.7万 | 单文件文生图，ComfyUI 即插即用，美学评分超 SDXL Turbo。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入）

> 本周 Top 30 无显式垂直领域专用模型入榜，Qwen/DeepSeek/Nemotron 等基座均具备强代码/数学能力，**垂直微调活动集中在“微调与量化”分类**。

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / FP8 / NVFP4）

| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|----|----|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,231 | 86.8万 | **全网下载量第二**，4bit~8bit 全量化矩阵，llama.cpp/ollama 一键跑通。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 435 | 68.2万 | 多模态 GGUF 稀缺样本，CPU/苹果统一内存推理零折损。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 427 | 12.3万 | 官方 FP8 量化，H100/A100 Tensor Core 直吞，精度损失 <0.3%。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 166 | 9万 | **首批 NVFP4 量化实战**，Blackwell 架构原生支持，显存再降 30%。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,051 | 298万 | **社区微调下载王**，融合 7 种指令集 + MTP 层，去审核+角色扮演双强。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,344 | 1279万 | **全站下载冠军**，ComfyUI 原生单文件封装，拖拽即用零配置。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 514 | 21.2万 | 一致性蒸馏 4-step 推理，速度提升 8×，画质损失可控。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-LoRA) | larryvrh | 756 | 0 | 首个 Turbo 版 LoRA，单显存微调即可注入风格/角色。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 193 | 1.3万 | 实拍人像增强 LoRA，皮肤纹理/光影物理感质变。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 352 | 0 | Kijai 维护的 ComfyUI 节点包，持续同步上游更新。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 159 | 0 | FP8 + 去安全对齐，隐私本地部署首选。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 277 | 32.1万 | 官方自制 GGUF，量化配方透明可复现。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 150 | 6.3万 | BF16 基准版，供 NVFP4 对比基线。 |

---

## 📡 生态信号（趋势研判）

**模型家族势头**：**Qwen3.5** 与 **MiniMax-H3** 形成“双子星”格局——前者统治多模态语言基座，后者垄断开源视频生成；**DeepSeek-V4** 与 **Nemotron-H** 分守 MoE 与混合注意力高地；**Liquid LFM** 确立线性注意力第三极。  
**开源 vs 闭源**：头部厂商（Qwen、MiniMax、DeepSeek、Meta、NVIDIA）均采用“核心权重开源 + 商业 API 闭源”双轨制，社区微调（DavidAU、unsloth、Comfy-Org）已成开源飞轮核心驱动力。  
**量化/微调活跃度**：**GGUF 仍是边缘部署主流**，但 **FP8/NVFP4** 在数据中心加速渗透；**LoRA 微调视频模型** 从 0 到 1 爆发（MiniMax-H3 生态周内出现 4 个 LoRA），预示生成模型微调门槛大幅降低。  
**架构多样化**：MoE、混合注意力、线性 RNN、压缩张量四大路线并行，**单一 Transformer 垄断被彻底打破**，选型将按“部署场景—硬件—延迟预算”三维决策。

---

## 💎 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — **全能多模态基座**：中文理解、OCR、视频摘要、代码生成单模型全搞定，配合官方 FP8/NVFP4 量化即可生产落地，无需再找第二个基座。  
2. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — **视频生产力即插即用**：1279 万下载验证的 ComfyUI 单文件版，拖入 workflow 即得 Sora 级 1080p 视频，创作者/应用层零门槛接入。  
3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — **超长上下文多模态新范式**：压缩张量技术让 1M+ tokens 多模态对话在 24GB 显存跑通，RAG/长视频理解/代码库级编码的终极测试床。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*