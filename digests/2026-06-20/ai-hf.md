# Hugging Face 热门模型日报 2026-06-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-20 00:39 UTC

---

# Hugging Face 热门模型日报 · 2026-06-20

---

## 1. 今日速览

本周 Hugging Face 热门榜呈现出**多模态与量化模型双轮驱动**的格局。Google 的 Gemma 4 家族持续霸榜，多个量化版本（GGUF）下载量突破百万级，显示社区对本地部署的旺盛需求。DeepSeek-V4-Pro 以近 5,000 点赞和 300 万+下载量稳坐榜首，标志着中国开源大模型在全球社区的影响力持续攀升。NVIDIA 的 LocateAnything-3B 以 2,195 点赞成为本周"黑马"，视觉定位任务正成为新的研究热点。此外，Qwen 3.6 系列的各种微调与量化变体大量涌现，MoE（混合专家）架构已成为开源社区的绝对主流。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,969 | 3,015,772 | 本周绝对王者，DeepSeek 最新旗舰对话模型，300 万+下载量证明其已成为全球开发者的首选开源 LLM。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 1,532 | 11,871 | 智谱 AI 的 GLM-5.2 MoE 架构对话模型，采用 DSA（DeepSeek 风格注意力）设计，性能对标顶级闭源模型。 |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 458 | 17,693 | Cohere 推出的轻量级代码对话模型，基于 Cohere2-MoE 架构，面向企业级代码辅助场景。 |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 335 | 7,507 | 基于 Qwen3.5-MoE 的通用对话模型，Nex-AGI 团队持续迭代，社区关注度稳步上升。 |
| [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 229 | 1,437 | 微软发布的 4B 参数长上下文微调模型，专为 Explorer SubAgent 场景优化，探索小模型长窗口的可能性。 |
| [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 458 | 12,148 | 微博 AI 推出的 3B 数学推理小模型，基于 Qwen2 架构，在数学任务上表现亮眼。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,195 | 228,669 | **本周黑马**，NVIDIA 的视觉定位模型，可精准定位图像中任意目标，2,195 点赞为全场第二高。 |
| [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 1,010 | 601,208 | Google 将扩散模型与 Gemma 结合的多模态生成模型，60 万+下载量显示社区对"扩散式 LLM"的强烈兴趣。 |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 1,096 | 1,590,882 | Google Gemma 4 统一多模态版本，支持 any-to-any 任务，159 万下载量证明 Gemma 家族已成为开源多模态标杆。 |
| [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,133 | 67,836 | MiniMax 的 M3 视觉语言模型，支持图像理解与生成，MoE 架构带来高效推理。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 909 | 274,865 | 月之暗面的多模态代码模型，27 万+下载量，将代码能力与视觉理解融合。 |
| [prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B) | prefeitura-rio | 325 | 190,639 | 里约热内卢市政府开源的 397B 参数巨兽，基于 Qwen3.5-MoE，19 万下载量显示公共部门开源 AI 的影响力。 |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 492 | 69,143 | Boson AI 的 4B 参数 TTS 模型，基于 Qwen3 多模态架构，6.9 万下载量证明高质量开源语音合成的市场需求。 |
| [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 233 | 0 | 智谱 AI 的图像到视频生成模型，支持角色动画与姿态驱动，刚上线即上榜，视频生成赛道再添新玩家。 |
| [Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2) | Zyphra | 116 | 719 | Zyphra 的 TTS 模型，Apache 2.0 许可，面向美国市场，轻量级语音合成的新选择。 |
| [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1) | owensong | 122 | 0 | 超小型 TTS 模型，面向边缘设备部署，极致压缩的语音合成方案。 |

### 🔧 专用模型（代码、数学、ASR）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 562 | 18,809 | NVIDIA 的 0.6B 流式 ASR 模型，支持缓存感知推理，为实时语音识别场景提供高效方案。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,007 | 3,730,978 | **本周下载量之王**（373 万），Qwen3.6 的"去审查"微调版，反映社区对无过滤模型的巨大需求。 |
| [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 1,846 | 268,102 | Gemma 4 的代码专用量化版本，融合多个代码数据集的微调，1,846 点赞显示社区对代码模型的热情。 |
| [DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 406 | 588,753 | Qwen3.6-40B 的"超级融合"量化版，融合 Claude Opus 等多个模型的蒸馏数据，58 万下载量。 |
| [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth | 318 | 202,867 | Unsloth 量化的 DiffusionGemma，20 万+下载量，让普通硬件也能运行 Google 的多模态扩散模型。 |
| [Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Jackrong | 261 | 148,525 | Qwen3.6-27B 的代码版量化模型，支持 MTP（多词预测）加速，14 万+下载量。 |
| [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) | unsloth | 178 | 8,392 | Unsloth 量化的 GLM-5.2，让智谱的 MoE 模型能在消费级硬件上运行。 |
| [unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF) | unsloth | 141 | 33,667 | Unsloth 量化的 Kimi 代码模型，3.3 万下载量。 |
| [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8) | zai-org | 105 | 93,927 | 智谱官方发布的 GLM-5.2 FP8 量化版，9.3 万下载量，官方量化版本更受信任。 |
| [unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF) | unsloth | 107 | 24,354 | Unsloth 量化的 MiniMax M3 多模态模型。 |
| [Mia-AiLab/Qwable-3.6-27b](https://huggingface.co/Mia-AiLab/Qwable-3.6-27b) | Mia-AiLab | 104 | 16,105 | Qwen3.6-27B 的社区微调版本，1.6 万下载量。 |
| [bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF) | bytkim | 86 | 8,138 | Qwen3.6-27B 的 MTP + π-tune 量化微调版，探索新的微调量化联合优化方案。 |
| [lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1) | lordx64 | 130 | 1,865 | Qwen3.5-MoE 的社区微调版本，小规模但质量精良。 |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 98 | 0 | Gemma 4 的 Agent 专用量化版，面向终端任务优化，刚上线尚未获得下载。 |

---

## 3. 生态信号

本周榜单揭示出几个关键趋势：

**MoE 架构全面统治开源社区。** 从 DeepSeek-V4 到 GLM-5.2、Qwen3.5/3.6-MoE、Cohere2-MoE，混合专家架构已成为开源大模型的默认选择。MoE 在推理效率上的优势使其在开源部署场景中极具吸引力。

**Gemma 4 家族成为开源多模态新标杆。** Google 的 Gemma 4 系列（统一版、代码版、扩散版）合计下载量超过 250 万次，多个社区量化版本（尤其是 yuxinlu1 的 GGUF 系列）持续上榜，显示 Gemma 4 正在接替 LLaMA 成为开源社区的新"基础设施"。

**Qwen 3.6 成为最活跃的微调底座。** 榜单中至少有 6 个模型基于 Qwen 3.6 进行微调或量化，涵盖代码、去审查、MTP 加速等多个方向，Qwen 系列已成为社区创新的"乐高积木"。

**量化生态高度成熟。** Unsloth 的 GGUF 量化版本几乎覆盖了所有热门模型（GLM-5.2、Kimi-K2.7、MiniMax-M3、DiffusionGemma），DavidAU 等社区量化专家的作品下载量动辄数十万，表明"让大模型跑在消费级硬件上"的需求已被充分满足。

**中国开源模型全球影响力持续扩大。** DeepSeek、智谱、月之暗面、MiniMax、微博 AI 等中国团队的作品占据榜单近半壁江山，开源 AI 的中美双极格局日益清晰。

---

## 4. 值得探索

### 🏆 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
**推荐理由：** 本周最大黑马，2,195 点赞。视觉定位（Visual Grounding）是连接视觉理解与下游任务的关键能力，NVIDIA 以 3B 参数实现精准定位，效率极高。无论是构建智能相册、辅助视觉搜索，还是作为多模态 Agent 的感知模块，这个模型都值得深入研究。

### 🏆 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**推荐理由：** 4,969 点赞 + 300 万下载量的"双料冠军"。作为 DeepSeek 最新旗舰，其在推理、代码、对话等维度均达到开源模型顶级水平。对于需要最强通用能力的场景，这是当前开源社区的最佳选择，也是研究中国大模型技术进展的最佳样本。

### 🏆 [google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
**推荐理由：** Google 将扩散模型范式引入 LLM 架构的大胆尝试，60 万+下载量证明社区对这一方向的强烈兴趣。它代表了"自回归 vs 扩散"两种生成范式的融合趋势，对于关注多模态生成前沿的研究者来说，这是一个不可错过的实验平台。

---

*数据来源：Hugging Face Hub 周榜（2026-06-20）| 分析：OWL*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*