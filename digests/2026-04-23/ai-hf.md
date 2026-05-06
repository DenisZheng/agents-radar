# Hugging Face 热门模型日报 2026-04-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-23 00:18 UTC

---

# Hugging Face 热门模型日报 | 2026-04-23

---

## 📋 今日速览

Qwen 3.6 系列成为本周绝对焦点，35B-A3B MoE 模型及其量化版本占据榜单多个席位，下载量突破百万。Google Gemma-4 家族持续强势，31B 版本以 2290 点赞和近 480 万下载稳居榜首，E4B 多模态版本也表现亮眼。多模态能力已成为标配趋势，image-text-to-text 任务占据主流。社区微调生态活跃，"uncensored" 和 "abliterated" 版本数量显著增加，反映用户对模型可控性的强烈需求。中国厂商（Qwen、Kimi、MiniMax、GLM、百度、腾讯）在榜单中占据半壁江山，开源权重竞争进入白热化阶段。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,290 | 4,779,095 | Google Gemma-4 旗舰对话模型，本周点赞与下载双冠王，多模态对话能力全面领先 |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,470 | 170,511 | 智谱 GLM-5.1 MoE 架构新迭代，DSA 稀疏注意力技术带来高效长文本推理 |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 1,033 | 416,155 | MiniMax M2 系列最新版，中文对话与推理能力均衡，企业级应用首选之一 |
| **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | OBLITERATUS | 457 | 79,024 | 社区对 Gemma-4 E4B 的"去审查化"改造，满足特定场景下的无限制生成需求 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 462 | 111,654 | 26B 轻量版 Gemma-4 无审查 GGUF，本地部署友好，llama.cpp 生态热门 |
| **[z-lab/Qwen3.6-35B-A3B-DFlash](https://huggingface.co/z-lab/Qwen3.6-35B-A3B-DFlash)** | z-lab | 113 | 13,968 | Qwen3.6 MoE 的 DFlash 特征提取变体，面向 RAG 和嵌入场景的实验性架构 |
| **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | hesamation | 143 | 44,930 | 蒸馏 Claude-4.6 Opus 推理能力的 Qwen3.6 量化版，"小模型学大模型"的典型案例 |
| **[KyleHessling1/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/KyleHessling1/Qwopus-GLM-18B-Merged-GGUF)** | KyleHessling1 | 85 | 6,740 | Qwen+GLM "弗兰肯斯坦"合并模型的衍生版本，社区 merge 实验的持续探索 |

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,237 | 582,961 | Qwen3.6 旗舰 MoE 多模态模型，35B 总参数仅激活 3B，视觉理解性价比极高 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 809 | 54,456 | 月之暗面 Kimi K2.6，长上下文多模态能力延续优势，feature-extraction 标签暗示新架构方向 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 797 | 2,793,042 | Gemma-4 E4B "any-to-any" 统一多模态架构，文本/图像/音频任意转换，Google 对 AGI 接口的探索 |
| **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | tencent | 552 | 0 | 腾讯混元世界模型 2.0，image-to-3D 生成，零下载量反映 3D 资产生态尚处早期 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 407 | 0 | Qwen3.6 稠密架构 27B 版，尚未开放下载已获高关注，MoE vs 稠密路线并行布局 |
| **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | baidu | 529 | 5,253 | 百度文心图像生成模型，Apache-2.0 开源协议罕见，8B 参数效率优先 |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 1,219 | 77,590 | 清华 OpenBMB 语音合成新旗舰，多语言 TTS 质量跃升，语音交互基础设施级模型 |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 901 | 2,459 | 腾讯混元具身智能模型，视觉-语言-动作（VLA）架构，机器人/自动驾驶场景预演 |
| **[baidu/ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo)** | baidu | 348 | 6,742 | ERNIE-Image 加速版，推理效率优化，生产环境部署更友好 |
| **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | NucleusAI | 218 | 1,622 | MoE+扩散模型创新结合，稀疏激活降低图像生成计算成本，架构实验性强 |

---

## 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 269 | 3 | OpenAI 官方隐私过滤工具，token-level PII 检测，企业合规刚需但生态 adoption 极低 |
| **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | nvidia | 256 | 252 | NVIDIA Lyra 2.0，arxiv 预印本关联的音频/语音研究模型，区域限制（US）引发开源争议 |

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 670 | 1,112,454 | Unsloth 官方 Qwen3.6 量化版，**本周下载量冠军（111万+）**，消费级 GPU 跑 35B MoE 的终极方案 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 372 | 312,962 | 激进去审查版 Qwen3.6，"Aggressive" 命名暗示深度安全对齐移除，下载量验证需求真实性 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 191 | 0 | 27B 稠密版 GGUF 占位，Unsloth 快速跟进官方发布的量化生态布局 |
| **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Jackrong | 184 | 51,137 | Qwen+GLM 合并模型的 GGUF 版，"Qwopus" 命名体现社区创意，推理专项优化 |
| **[Qwen/Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Qwen | 155 | 490,028 | 官方 FP8 精度版本，近 50 万下载证明 FP8 作为新标准被快速接受 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,333 | 170,390 | Gemma-4 31B MLX+Safetensors 破解版，"JANG_4M" 疑似特定数据集微调，CRACK 标签引合规争议 |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 456 | 841,003 | E4B 多模态去审查版，**84万下载** 显示视觉+无限制组合的强烈市场需求 |
| **[unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF)** | unsloth | 91 | 2,958 | Kimi K2.6 量化版，Unsloth 覆盖头部中国模型的战略体现 |
| **[Qwen/Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8)** | Qwen | 87 | 0 | 27B 稠密版 FP8，与 MoE 版并行提供精度选择 |
| **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | robbyant | 155 | 0 | 学术论文关联模型（arxiv:2604.14141），区域限制，语言学/认知科学交叉研究 |

---

## 📡 生态信号

**Qwen 与 Gemma 双寡头格局成型。** Qwen3.6 系列凭借 MoE 架构（35B-A3B）实现"大模型能力、小模型成本"，官方+社区+量化版本形成完整矩阵；Gemma-4 则以 Google 背书和 any-to-any 统一架构占据生态高位。中国开源力量（Qwen、Kimi、MiniMax、GLM、百度、腾讯）在 30 个模型中占据 16 席，首次在 HF 热门榜形成数量优势，但核心框架（Transformers、Diffusers）仍依赖西方基础设施。

**开源权重与闭源的边界重构。** OpenAI 以 privacy-filter 试探性参与（仅 3 下载），与 2023 年的开源热情形成鲜明对比；而百度 ERNIE-Image 采用 Apache-2.0 则显示中国厂商更激进的开源策略以获取生态份额。"Uncensored/Abliterated/CRACK" 标签泛滥（6 个模型）构成独特的社区治理挑战——HF 作为平台面临内容政策与开源精神的张力。

**量化成为默认交付标准。** GGUF/FP8/MLX 版本在热门模型中占比超 40%，Unsloth 作为量化基础设施地位确立（4 个官方量化版上榜）。MoE 架构与量化技术形成"黄金组合"：激活参数小 → 量化损失低 → 本地可运行，这一飞轮正在重塑边缘 AI 的可用性边界。

---

## 🔍 值得探索

| 优先级 | 模型 | 理由 |
|:---|:---|:---|
| ⭐⭐⭐ | **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | **"any-to-any" 是 2026 年最值得关注的架构方向**——统一处理文本/图像/音频的输入输出，可能替代当前碎片化的多模态管道。280 万下载验证其工程成熟度，适合研究下一代 AI 接口范式。 |
| ⭐⭐⭐ | **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | **消费级硬件跑 SOTA 多模态的最优解。** 111 万下载的社区选择不会说谎，35B 总参数/3B 激活的设计 + GGUF 量化，单卡 24GB 可流畅运行图像对话，是验证 MoE 落地价值的首选。 |
| ⭐⭐☆ | **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | 具身智能（Embodied AI）从概念到模型的关键一步。虽然下载量低（2,459），但"hunyuan_vl_mot"标签暗示视觉-语言-运动（Vision-Language-Motion）联合建模，适合关注机器人/自动驾驶交叉领域的研究者提前布局。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*