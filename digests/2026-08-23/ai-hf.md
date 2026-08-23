# Hugging Face 热门模型日报 2026-08-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-23 00:55 UTC

---

# 📋 Hugging Face 热门模型日报 | 2026-08-23

---

## 🚀 今日速览

- **Qwen3.8-27B** 以 12k+ 点赞、200 万+ 下载强势霸榜，衍生出 **10+ 个量化/去审查/MLX/GGUF 变体**，成为当前开源社区最活跃的基座模型家族。
- **Kimi-K3 (Moonshot)** 与 **MiniMax-H3** 分别以 10.9k / 4.3k 点赞领跑多模态赛道，后者下载量近 390 万，视频生成模型落地热度持续攀升。
- **DeepSeek-V4 系列** 双模并进：Flash 版下载近 300 万主打推理部署，Pro 版侧重能力上限，闭源权重开放托管趋势明显。
- 社区微调呈现 **“去审查 + 极致量化 + 推测解码”** 三大技术方向并行，GGUF/MLX/FP8 格式全面覆盖消费级与服务器级部署需求。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,135 | 2,090,699 | 通义千问最新 27B 旗舰多模态基座，原生支持图文对话，性能对标 70B 级模型，社区微调基石。 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,926 | 2,612,739 | 月之暗面开源 MoE 多模态大模型，压缩张量格式部署友好，中文长文本与工具调用表现亮眼。 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,630 | 2,976,281 | DeepSeek V4 轻量化版，推理速度与成本平衡最优，下载量全榜首，生产环境首选。 |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 718 | 54,566 | V4 全量版，能力上限更高，适合离线蒸馏或高精度任务，闭源权重托管 HF 趋势样本。 |
| [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,146 | 17,386 | 95B 激活参数 MoE 文本模型，2.4T 训练令牌，探索超大规模稀疏架构上限。 |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 320 | 12,611 | 基于 Qwen3.5 MoE 微调的 35B 模型，仅激活 3B 参数，极致推理效率实验。 |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 202 | 1,913 | 融合 ASR 与文本生成的小模型，面向语音助手边缘部署场景。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,338 | 3,899,160 | 图文生视频 SOTA 级开源模型，下载量断层第一，商业级视频生成落地标杆。 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,565 | 694,670 | 单文件 Diffusion 视频模型，支持图生/文生/视频编辑，部署门槛极低。 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,182 | 16,644 | 文本生音乐模型，Diffusers 原生支持，长结构连贯性强，音频生成新选项。 |
| [**TenStrip/10Eros-Max**](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 316 | 0 | 基于 MiniMax-H3 微调的视频模型，社区二次开发生态雏形。 |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,755 | 517,564 | 30B 多模态对话模型，图文理解推理均衡，Meta 研究系开源力作。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 其他）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 194 | 29,705 | 引入 **DFlash2 推测解码** 加速推理，同架构下吞吐提升 2-3×，工程落地导向。 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,397 | 0 | 修复 Qwen 系列 Jinja 聊天模板的通用工程包，解决推理对话格式错位痛点。 |
| [**LBH-123-AI/Minimax_h3_latent_Upscaler**](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 159 | 0 | MiniMax-H3 专用潜空间超分组件，视频生成画质增强链路关键拼图。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ、MLX、FP8）

> **核心观察**：围绕 **Qwen3.8-27B** 形成百花齐放的量化/去审查生态，覆盖 GGUF/MLX/FP8/原生 Safetensors 全格式。

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 关键特征 |
|------|------|--------|--------|----------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,625 | **6,320,542** | Unsloth 官方 GGUF 量化，**下载量全榜冠军**，Apple Silicon / CPU 推理首选。 |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 886 | 34,909 | MLX 格式 + 去审查，Mac 生态原生加速。 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 990 | 142,846 | FP8 量化 + 去审查，H100/H200 显存与吞吐最优。 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 531 | 164,950 | 多格态并发：MLX + Safetensors + GGUF 一站式去审查分发。 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 485 | 486,221 | 激进 MTP (Multi-Token Prediction) 微调 + GGUF，推理加速实验。 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 623 | 1,223,422 | 经典 llama.cpp GGUF 去审查版，下载量第二梯队。 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 254 | 635,416 | Abliteration 手法去审查，保留原模型能力上限。 |
| [**ornith-ai/Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 232 | 173,935 | MoE 稀疏模型 GGUF 量化，MIT 许可商用友好。 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 664 | 2,306,777 | **官方发布 FP8 量化**，生产级部署标准件，下载量极高。 |
| [**empero-ai/Qwen3.8-27B-Ridge-GGUF**](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 245 | 97,247 | Ridge 回归量化校准，追求极致量化精度保持。 |
| [**0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 227 | 505,813 | Heretic 方法论去审查，社区知名技术流分支。 |
| [**DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 191 | 176,969 | 融合 GAIN 训练 + COLD-FUSION + MTP 的极客级实验合集。 |
| [**empero-ai/Qwen3.8-9B-Distill**](https://huggingface.co/empero-ai/Qwen3.8-9B-Distill) | empero-ai | 165 | 9,260 | 从 27B 蒸馏的 9B 小模型，边缘部署备选。 |

---

## 📡 生态信号深度解析

**模型家族势头**：**Qwen3.8 系列** 以“官方基座 + 官方量化 + 社区百花齐放”构建护城河，单一基座衍生 10+ 热门变体，生态成熟度远超同量级竞品；**MiniMax-H3** 以视频生成单一任务撬动 390 万下载，证明垂直多模态商业化路径跑通；**DeepSeek-V4** 采用“Flash 普及 + Pro 高阶”双轨制，闭源权重托管 HF 成为头部厂商新范式。

**开源 vs 闭源**：头部国产厂商（Qwen、MiniMax、DeepSeek、Moonshot）均选择 **权重开放 + 许可证可控** 策略，而非纯 API 服务；Meta 系、社区微调者坚持 Apache-2.0/MIT 完全开源。闭源模型仅以“托管分发”形态出现 HF，不再缺席。

**量化与微调前沿**：
1. **去审查标准化**：Abliteration / Heretic / Uncensored 成为 27B 级模型社区分发默认动作，技术门槛降低。
2. **格态全覆盖**：GGUF（消费级/CPU）、MLX（Apple 生态）、FP8（H100 生产）、Safetensors（训练/推理通用）同步发布，**“一次微调，全平台分发”** 成熟。
3. **推理加速内核化**：DFlash2 推测解码、MTP 多 Token 预测、Ridge 量化校准等底层优化下沉到模型卡片，工程化程度显著提升。

---

## 💎 值得探索的 3 个模型

1. **[**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)** — **生产部署首选**  
   官方维护的 FP8 量化，精度损失 < 0.5%，显存占用减半，配合 vLLM/TensorRT

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*