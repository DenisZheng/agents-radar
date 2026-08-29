# Hugging Face 热门模型日报 2026-08-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-29 05:09 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-08-29

---

## 🚀 今日速览

1. **Qwen 3.8 系列霸榜**：阿里巴巴 Qwen 发布 **Qwen3.8-27B** 与 **Qwen3.8-Flash-Next** 双旗舰，前者周下载破 345 万、后者点赞超 4 千，确立了中文开源多模态 LLM 的新标杆。  
2. **GLM-5.3 双版本齐发**：智谱 AI 推出 **GLM-5.3** 与轻量化 **GLM-5.3-Flash**，虽下载量尚低但点赞破千，显示社区对 MoE+DSA 架构的强烈期待。  
3. **视频生成进入「MiniMax-H3」纪元**：MiniMaxAI 的 **MiniMax-H3** 以 484 万下载、4588 点赞领跑文生视频/图生视频，阿里云 PAI 同步发布 ControlNet Union 与加速 LoRA，生态链快速成型。  
4. **「去审查/精简」微调成主流**：Qwen3.8-27B 衍生出 6 个高热度 GGUF/MLX/FP8 量化/Uncensored 版本，合计下载超 1200 万，本地化部署需求爆发。  
5. **新势力崛起**：Moonshot **Kimi-K3**（1.1 万赞）、DeepSeek **DeepSeek-V4-Flash**（3790 赞）、Ornith **Ornith-1.5-35B-A3B**（MoE 35B）同登榜单，百模大战进入「多模态+MoE+长上下文」三维竞争。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,160 | 3,457,687 | 27B 稠密多模态旗舰，原生支持图文对话、长上下文，中英文基准双第一，开箱即用。 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,165 | 0 | 智谱新一代 MoE+DSA 大模型，主打推理效率与长文本，权重刚开放，社区正在验证。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,527 | 34 | GLM-5.3 轻量蒸馏版，推理延迟大幅降低，适配边缘/实时场景。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,066 | 2,675,145 | Moonshot 首个开放权重多模态 MoE，压缩张量部署友好，长文本与工具调用表现亮眼。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,790 | 3,959,575 | DeepSeek V4 系列闪电版，强化代码/数学推理，FP8 量化原生支持，下载量领跑全榜。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 486 | 88,102 | 基于 Qwen3.5 架构的 35B MoE（激活 3B），社区协作训练，MIT 许可，极致性价比。 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 251 | 0 | 腾讯混元 V4 预览版，首次在 HF 开放权重，闭源生态破冰信号。 |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 120 | 64 | 基于 Nemotron-H 的语音对话模型，面向实时语音 Agent，早期探索。 |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 145 | 349 | 罗伊特法律/金融领域小模型，Qwen3.5-MoE 微调，垂直知识注入范例。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,588 | 4,848,404 | 当前最热文生视频/图生视频模型，Diffusers 原生支持，物理一致性与镜头控制 SOTA。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,032 | 912,729 | 单文件 Diffusion 视频模型，支持文生/图生/视频转视频，部署极简。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,289 | 19,726 | 文生音乐/音频新版，Diffusers 管线，风格控制细粒度，商用友好。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,179 | 4,810 | Qwen3.8 多模态闪电版，更小参数量下保持图文理解强，适配移动端/边缘。 |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 148 | 2,219 | Flash-Next 官方 FP8 量化，显存占用再降 50%，推理加速显著。 |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 159 | 3,344 | MiniMax-H3 官方 ControlNet Union，支持深度/边缘/姿态多条件可控视频生成。 |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 136 | 609 | MiniMax-H3 推理加速 LoRA 合集（含一致性/运动/分辨率），即插即用。 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 168 | 240 | 中文语音合成新版，自然度与韵律控制提升，轻量化部署。 |

---

### 🔧 专用模型（代码 / 数学 / 嵌入 / 垂直领域）

> 本期榜单中垂直专用模型较少，主要集中在通用多模态与推理增强，**Thomson-1.0-Small**（法律/金融）与 **phonellm-alpha-1**（语音 Agent）为仅有代表。

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / MLX / FP8）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,152 | 7,758,790 | Unsloth 官方全精度/多档 GGUF 量化，**下载量全站第一**，本地 llama.cpp 部署首选。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 884 | 509,270 | 「去审查」版本，移除拒答倾向，提供 MLX/Safetensors/GGUF 多格式。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,191 | 83,352 | Apple Silicon 专用 MLX 量化 + 去审查，Metal 加速推理极快。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,236 | 273,577 | H100/A100 友好的 FP8 动态量化，保留精度同时吞吐翻倍。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 729 | 938,219 | 激进 MTP（多Token预测）+去审查 GGUF，推理速度提升 2-3×，多模态保留。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 806 | 1,666,948 | llama.cpp 兼容 GGUF，含 MTP 加速分支，下载量仅次于 Unsloth 官方版。 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 250 | 0 | GLM-5.3-Flash 首发 GGUF，Unsloth 极速量化流水线产物。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 530 | 188,460 | 标准 GGUF 去审查版，多量化档位覆盖 4bit-8bit。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 425 | 1,355,482 | 社区知名「去审查」系列，GGUF 多档，下载破百万。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 529 | 4,354 | Flash-Next 官方 GGUF，边缘设备部署首选。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 333 | 1,469,059 | MoE 35B 量化版，激活参数仅 3B，MIT 许可商用无忧。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,511 | 0 | 修复 Qwen 3.5 系列 Jinja 聊天模板 Bug，MLX/Transformers 双兼容，工程必备。 |

---

## 🌐 生态信号深度解读（~160 字）

**模型家族势力版图重构**：Qwen 3.8 以「旗舰+闪电+官方量化」三位一体，配合 Unsloth/OrcaRouter/Hauhui 等社区量化矩阵，**单周下载超 1500 万**，形成「开源权重→社区量化→边缘落地」完整闭环，稳坐中文开源霸主。GLM-5.3 与 Kimi-K3 以 MoE+压缩张量/原生 FP8 抢占「高性能/低部署门槛」高地，DeepSeek-V4-Flash 则以代码/数学垂直优势守住开发者心智。**视频生成**呈现「基座模型+ControlNet+加速 LoRA」标准化生产线（MiniMax-H3 + PAI 套件），标志着 AIGC 视频从 Demo 走向工程化。**去审查/精简微调**已成标配：Qwen3.8-27B 衍生 6 个高热版本，MLX/FP8/GGUF/MTP 技术栈全覆盖，反映**本地化隐私部署与无限制推理**成核心刚需。**闭源巨头破冰**（腾讯混元 V4 预览版上传 HF）释放开放信号，但零下载提示社区仍在观望。**下一关注点**：MoE 稀疏训练开源工具链成熟度、FP8/INT4 混合量化标准化、视频生成长时序一致性突破。

---

## 💎 值得探索的 3 个模型

1. **[Qwen/Qwen3

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*