# Hugging Face 热门模型日报 2026-06-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-02 00:43 UTC

---



# 📊 Hugging Face 热门模型日报

**日期：2026年6月2日 | 数据来源：Hugging Face Hub 周热门榜**

---

## 一、今日速览

本周 Hugging Face 热门榜呈现出"双雄领衔、多极竞争"的格局。**deepseek-ai/DeepSeek-V4-Pro** 以 4,530 点赞、近 585 万下载量强势登顶，成为本周最受关注的语言模型发布。多模态赛道持续升温，**Qwen3.6** 系列在多个变体（原版、量化版、社区微调版）同时上榜，形成了明显的"家族效应"，总下载量合计超千万次。视频生成领域出现新面孔——**SulphurAI/Sulphur-2-base** 以 1,490 点赞、165 万下载量展现实力，而传统 OCR、语音合成、说话人分离等垂直任务依然保持稳定需求。值得注意的是，社区量化和微调活跃度极高，Qwen3.6 相关的 GGUF/MTP 变体数量占榜单近 1/6，反映出开源生态的旺盛生命力。

---

## 二、热门模型分类

### 🧠 语言模型（LLM、对话模型、指令微调）

| # | 模型 | 作者 | 👍 / ⬇️ 下载 | 一句话说明 |
|---|------|------|-------------|-----------|
| 1 | [**deepseek-ai/DeepSeek-V4-Pro**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,530 👍 / 585 万 ⬇️ | DeepSeek 最新旗舰推理模型，自发布以来即霸榜，以超长上下文和强大推理能力确立开源 LLM 标杆地位 |
| 2 | [**Qwen/Qwen3.6-27B**](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,567 👍 / 515 万 ⬇️ | 阿里 Qwen 家族最新一代旗舰，原生支持图像-文本多模态对话，下载量持续走高 |
| 3 | [**deepseek-ai/DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,341 👍 / 351 万 ⬇️ | DeepSeek-V4 的轻量高效版，以高性价比和高速度吸引了大量开发者和企业用户 |
| 4 | [**openbmb/MiniCPM5-1B**](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 689 👍 / 45,698 ⬇️ | 仅 1B 参数的端侧小模型，openbmb 持续在高效轻量路线深耕，适合边缘部署场景 |
| 5 | [**LiquidAI/LFM2.5-8B-A1B**](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 391 👍 / 37,893 ⬇️ | LiquidAI 的混合专家（MoE）架构模型，8B 总参数仅激活 1B，主打极致推理效率 |
| 6 | [**sapientinc/HRM-Text-1B**](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 439 👍 / 149,543 ⬇️ | 基于新型层次推理模型（HRM）架构的 1B 文本模型，以极简参数实现强推理能力，学术与工程价值兼具 |
| 7 | [**tencent/Hy-MT2-30B-A3B**](https://huggingface.co/tencent/Hy-MT2-30B-A3B) | tencent | 444 👍 / 4,458 ⬇️ | 腾讯混元翻译模型的大参数版，30B 总参数激活仅 3B，专注高质量多语言翻译 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| # | 模型 | 作者 | 👍 / ⬇️ 下载 | 一句话说明 |
|---|------|------|-------------|-----------|
| 1 | [**SulphurAI/Sulphur-2-base**](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,490 👍 / 165 万 ⬇️ | 本周最亮眼的文生视频模型，165 万下载量说明社区对高质量开源视频生成的强烈需求 |
| 2 | [**bytedance-research/Lance**](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 1,002 👍 / 3,041 ⬇️ | 字节跳动开源的"全能"多模态模型，支持 any-to-any 任务，覆盖图像生成、视频生成等多种模态 |
| 3 | [**meituan-longcat/LongCat-Video-Avatar-1.5**](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 465 👍 / 0 ⬇️ | 美团 LongCat 视频数字人模型，支持音频+文本/图像到视频的虚拟形象生成 |
| 4 | [**Supertone/supertonic-3**](https://huggingface.co/Supertone/supertonic-3) | Supertone | 770 👍 / 57,627 ⬇️ | 第三代超逼真 TTS 模型，以情感表现力和自然度著称，适合配音、虚拟人等场景 |
| 5 | [**OpenMOSS-Team/MOSS-TTS-v1.5**](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5) | OpenMOSS-Team | 94 👍 / 18,564 ⬇️ | MOSS 团队推出的中文 TTS 模型，支持延迟生成策略，适合实时语音合成场景 |
| 6 | [**nvidia/PiD**](https://huggingface.co/nvidia/PiD) | nvidia | 239 👍 / 577 ⬇️ | NVIDIA 的图像超分辨率扩散模型，基于扩散框架实现高质量图像放大与修复 |
| 7 | [**prism-ml/bonsai-image-ternary-4B-gemlite-2bit**](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit) | prism-ml | 89 👍 / 0 ⬇️ | 极致压缩的文生图模型，采用三值权重（1.58-bit）+ gemlite 量化，探索端侧图像生成的极限 |
| 8 | [**NemoStation/Marlin-2B**](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 482 👍 / 17,012 ⬇️ | 仅 2B 参数的视频理解模型，基于 Qwen3.5 架构，以轻量体积实现视频-文本多模态能力 |

---

### 🔧 专用模型（翻译、OCR、语音、隐私、定位）

| # | 模型 | 作者 | 👍 / ⬇️ 下载 | 一句话说明 |
|---|------|------|-------------|-----------|
| 1 | [**pyannote/speaker-diarization-3.1**](https://huggingface.co/pyannote/speaker-diarization-3.1) | pyannote | 2,106 👍 / 959 万 ⬇️ | 说话人分离领域的"常青树"，近千万下载量证明其在会议转写、音频分析等场景的不可替代性 |
| 2 | [**openai/privacy-filter**](https://huggingface.co/openai/privacy-filter) | openai | 1,578 👍 / 31.6 万 ⬇️ | OpenAI 开源的隐私信息检测模型，用于识别和过滤文本中的个人身份信息（PII），企业合规刚需 |
| 3 | [**tencent/Hy-MT2-1.8B**](https://huggingface.co/tencent/Hy-MT2-1.8B) | tencent | 1,099 👍 / 18,131 ⬇️ | 腾讯混元翻译的轻量版，1.8B 参数即可实现高质量多语言翻译，适合端侧部署 |
| 4 | [**nvidia/LocateAnything-3B**](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 794 👍 / 35,783 ⬇️ | NVIDIA 的视觉定位模型，支持通过自然语言描述在图像中精确定位目标，适用于机器人、AR 等场景 |
| 5 | [**PaddlePaddle/PaddleOCR-VL-1.6**](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 156 👍 / 3,190 ⬇️ | 百度 PaddleOCR 的视觉语言版，结合 ERNIE4.5 实现更强的文档理解与 OCR 能力 |
| 6 | [**numind/NuExtract3**](https://huggingface.co/numind/NuExtract3) | numind | 215 👍 / 59,010 ⬇️ | 结构化信息提取模型，能从图像/文档中精准抽取键值对，适合发票处理、表单自动化等场景 |
| 7 | [**openbmb/MiniCPM-V-4.6**](https://huggingface.co/openbmb/MiniCPM-V-4.6) | openbmb | 1,088 👍 / 45.9 万 ⬇️ | MiniCPM-V 系列最新版，在小参数视觉语言模型中表现突出，适合移动端多模态应用 |
| 8 | [**Kwai-Keye/Keye-VL-2.0-30B-A3B**](https://huggingface.co/Kwai-Keye/Keye-VL-2.0-30B-A3B) | Kwai-Keye | 88 👍 / 784 ⬇️ | 快手 Keye 视觉语言模型 2.0，30B MoE 架构，虽刚上榜但代表了国内大厂在多模态赛道的持续投入 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| # | 模型 | 作者 | 👍 / ⬇️ 下载 | 一句话说明 |
|---|------|------|-------------|-----------|
| 1 | [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,218 👍 / 253 万 ⬇️ | Qwen3.6 35B 的社区"去审查"微调版，253 万下载量反映了社区对无过滤模型的高需求 |
| 2 | [**unsloth/Qwen3.6-27B-MTP-GGUF**](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 593 👍 / 95.2 万 ⬇️ | Unsloth 出品的 Qwen3.6 27B GGUF 量化版，支持多 token 预测（MTP），极大提升推理速度 |
| 3 | [**Jackrong/Qwopus3.6-27B-v2-MTP-GGUF**](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF) | Jackrong | 183 👍 / 13.9 万 ⬇️ | 社区开发者对 Qwen3.6 的二次量化优化版，v2 版本在精度与速度间取得更好平衡 |
| 4 | [**LiquidAI/LFM2.5-8B-A1B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF) | LiquidAI | 143 👍 / 55,212 ⬇️ | LiquidAI 官方提供的 GGUF 量化版，专为 llama.cpp 和边缘设备优化 |
| 5 | [**nvidia/Qwen3.6-35B-A3B-NVFP4**](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 121 👍 / 17.1 万 ⬇️ | NVIDIA 使用 ModelOpt 工具对 Qwen3.6 进行 FP4 量化，充分发挥 NVIDIA 硬件的推理效率 |
| 6 | [**stepfun-ai/Step-3.7-Flash-GGUF**](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF) | stepfun-ai | 84 👍 / 37,533 ⬇️ | 阶跃星辰 Step-3.7-Flash 的 GGUF 量化版，采用 imatrix 量化策略，社区部署友好 |

---

## 三、生态信号

本周榜单最显著的趋势是 **Qwen3.6 家族的全面爆发**——原版（27B）、社区微调版（Uncensored 35B）、Unsloth 量化版、NVIDIA FP4 量化版、Jackrong 社区 GGUF 版共 5 个变体同时上榜，合计下载量超过 870 万次，形成了类似 Llama 系列曾经的"家族统治"效应。**DeepSeek V4 系列**（Pro + Flash）则以合计近 940 万下载量与之分庭抗礼，两大开源旗舰家族的竞争正在加速整个生态的迭代。

在架构层面，**MoE（混合专家）** 已成为主流选择，榜单中 LFM2.5-8B-A1B、Qwen3.6-35B-A3B、Hy-MT2-30B-A3B、Step-3.7-Flash 等均为 MoE 架构，"大总参、小激活"的设计理念已被广泛接受。

社区量化和微调活动空前活跃，GGUF 格式已成为社区部署的事实标准，Unsloth、llama.cpp 等工具的普及使得大模型"飞入寻常百姓家"。值得注意的是，**视频生成**赛道正在迎来开源模型的崛起，Sulphur-2-base 和 Lance 的亮眼表现预示着 2026 年可能成为开源视频生成元年。

---

## 四、值得探索

### 🔥 1. [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
**推荐理由：** 本周当之无愧的榜首，4,530 点赞和 585 万下载量说明一切。作为 DeepSeek 最新旗舰，它在推理能力、代码生成和长上下文处理上代表了当前开源 LLM 的最高水平。无论是用于研究 benchmark、构建 Agent 应用，还是作为微调基座，都值得第一时间体验和评估。

### 🔥 2. [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)
**推荐理由：** 165 万下载量对于一个新发布的文生视频模型来说极为惊人，说明社区对高质量开源视频生成模型的渴求已久。在 Sora、Kling 等闭源模型主导的赛道上，Sulphur-2-base 的出现为开发者和创作者提供了一个可本地部署、可深度定制的替代方案，值得视频生成领域的研究者和创作者重点关注。

### 🔥 3. [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)
**推荐理由：** 这是一款"小而美"的研究型模型。HRM（Hierarchical Reasoning Model）架构仅用 1B 参数就实现了令人印象深刻的推理能力，其设计理念——通过高低两个层次的循环模块分别处理慢思考和快思考——为高效推理模型开辟了新路径。对于关注模型架构创新和边缘部署的研究者来说，这是一个极具参考价值的工作。

---

> 📌 **本期总结：** 开源大模型生态正进入"双寡头+多极竞争"的新阶段，DeepSeek V4 与 Qwen3.6 两大旗舰家族引领潮流，MoE 架构成为标配，社区量化生态日趋成熟，视频生成赛道迎来开源破局者。2026 年上半年的开源 AI 生态，比以往任何时候都更加精彩。

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*