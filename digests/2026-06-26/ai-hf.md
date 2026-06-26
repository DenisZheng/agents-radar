# Hugging Face 热门模型日报 2026-06-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-26 00:40 UTC

---

# Hugging Face 热门模型日报

**📅 2026年6月26日 | 基于周点赞数 Top 30 编译**

---

## 1. 今日速览

Hugging Face 本周热度被两大新模型引爆：深度求索的 **DeepSeek-V4-Pro**（5,061 赞 / 187 万下载）强势登顶，智谱 AI 的 **GLM-5.2**（2,476 赞）紧随其后，标志着国产大模型密集迭代、集中释放的最新一波浪潮。Qwen 3.6 系列的社区微调（包括 HauhauCS 非审查版和 NVIDIA NVFP4 量化版）占据了多个席位，显示 Qwen 生态的社区活跃度极高。同时，NVIDIA 凭借 **LocateAnything-3B**、流式 ASR 模型和 Qwen3.6 量化权重持续输出影响力，成为平台上最活跃的企业贡献者之一。Gemma 4 生态也热度不减，Google 原版与社区微调/量化版本合计占 5 席。

---

## 2. 热门模型分类

###  语言模型（LLM、对话模型、指令微调）

**【1】 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
- 作者：deepseek-ai | 👍 5,061 | ️ 1,878,217
- 深度求索最新旗舰开源推理模型，综合对话与推理能力再创新高，成为本周最大黑马。

**【2】 [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
- 作者：zai-org | 👍 2,476 | ️ 67,107
- 智谱 AI 开源的 GLM-5.2 采用 MoE+DSA 架构，在推理与长文本任务上表现出色，首日即获压倒性关注。

**【3】 [Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
- 作者：Qwen | 👍 239 | ️ 3,389
- Qwen 面向 Agent 场景推出的 35B 参数 MoE 模型，主打 Web 浏览与工具调用能力。

**【4】 [microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
- 作者：microsoft | 👍 345 | ️ 5,276
- 微软发布的 4B 参数轻量级上下文压缩 / 子代理模型，适合端侧部署和低成本推理。

**【5】 [Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
- 作者：Chunjiang-Intelligence | 👍 90 | ️ 646
- 基于 DeepSeek-V4 的社区微调版本，专注网络安全用例，反映垂直领域微调需求增长。

**【6】 [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
- 作者：deepreinforce-ai | 👍 80 | ⬇️ 0
- MIT 许可证 35B GGUF 模型，开放权重、兼容推理端点，具强可复现性。

**【7】 [LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
- 作者：LiquidAI | 👍 72 | ⬇️ 7,334
- 230M 参数的超小模型，Liquid 系列面向嵌入式/端侧场景，探索边缘 AI 的极限。

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

**【8】 [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
- 作者：google | 👍 1,176 | ️ 2,187,644
- Google Gemma 4 统一多模态模型，支持 any-to-any 模态生成与理解，下载量已破 218 万。

**【9】 [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
- 作者：MiniMaxAI | 👍 1,241 | ️ 154,350
- MiniMax 多模态 M3 VL 模型，支持图文多模态推理，是国内厂商密集布局多模态的又一代表。

**【10】 [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
- 作者：krea | 👍 243 | ️ 2,996
- Krea 2 系列文本到图像 Turbo 版，主打极速生图，延续文生图像模型竞赛热度。

**【11】 [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)**
- 作者：krea | 👍 185 | ️ 5,113
- Krea 2 基础版，为社区微调提供开源基座，与 Turbo 版形成完整产品层次。

**【12】 [Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)**
- 作者：Boogu | 👍 123 | ️ 824
- Apache-2.0 许可的双语（中英文）图像编辑模型，满足精细图像操控需求。

**【13】 [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**
- 作者：Comfy-Org | 👍 118 | ⬇️ 10
- ComfyUI 节点封装版 Krea-2，将 ComfyUI 生态与前沿图像模型打通。

**【14】 [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
- 作者：empero-ai | 👍 390 | ️ 10,160
- Qwen 3.5 微调而来的 9B 模型，支持 1M token 超长上下文，兼顾推理与视觉任务。

---

### 🔧 专用模型（代码、数学、OCR、ASR 等）

**【15】 [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
- 作者：moonshotai | 👍 992 | ️ 502,106
- 月之暗面 K2.7 代码混合模型，面向编程和 Agent 场景，下载量突破 50 万。

**【16】 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
- 作者：nvidia | 👍 2,363 | ️ 407,838
- NVIDIA 开源的 3B 视觉定位模型，可精准定位图片中任意对象，工业级规模下载令人瞩目。

**【17】 [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
- 作者：baidu | 👍 890 | ⬇️ 70,743
- 百度发布的无限制 OCR 模型，覆盖多场景图文识别，下载量超 7 万。

**【18】 [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
- 作者：nvidia | 👍 695 | ️ 50,553
- NVIDIA 仅 0.6B 的流式 ASR 模型，支持低延迟实时语音识别，适合端侧与流式应用。

**【19】 [WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
- 作者：WeiboAI | 👍 715 | ⬇️ 51,717
- 微博 AI 推出的 3B 推理与数学模型，在小型化模型赛道展现高投入度。

**【20】 [datalab-to/lift](https://huggingface.co/datalab-to/lift)**
- 作者：datalab-to | 👍 152 | ⬇️ 5,189
- 基于 Qwen 3.5 的 PDF / 文档视觉理解模型，面向企业知识处理场景。

**【21】 [owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)**
- 作者：owensong | 👍 201 | ⬇️ 0
- 超小规模文本转语音模型，标志 TTS 领域正在快速小型化。

---

### 📦 微调与量化（社区微调、GGUF、QAT、NVFP4）

**【22】 [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
- 作者：HauhauCS | 👍 2,234 | ️ 3,520,206
- Qwen 3.6 MoE 社区非审查微调版 + vision 支持，**352 万下载量为本榜最高**，凸显需求强劲。

**【23】 [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
- 作者：nvidia | 👍 341 | ️ 4,602,255
- NVIDIA 官方 NVFP4 量化版 Qwen3.6，**460 万下载量印证量化权重对大规模部署的极高价值**。

**【24】 [yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
- 作者：yuxinlu1 | 👍 2,364 | ⬇️ 495,813
- Gemma 4 编码 / 推理微调 + GGUF 量化，通过 llama.cpp 让消费级硬件运行大模型成为现实。

**【25】 [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
- 作者：yuxinlu1 | 👍 614 | ️ 165,187
- 面向 Agent 场景的 Gemma 4 第二轮迭代微调，扩展多轮对话与工具链能力。

**【26】 [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
- 作者：empero-ai | 👍 477 | ️ 134,294
- Qwythos 非量化版的 GGUF 并行发布，使同一模型可分别服务 GPU 推理与 CPU/边缘场景。

**【27】 [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
- 作者：unsloth | 👍 385 | ⬇️ 88,915
- Unsloth 社区基于 GLM-5.2 的 GGUF 快速量化版，体现 Unsloth 在模型小型化生态中的关键角色。

**【28】 [Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)**
- 作者：Jackrong | 👍 90 | ️ 19,382
- 社区 27B Coder 模型 + MTP（Multi-Token Prediction）兼容机制的 GGUF 实验版。

**【29】 [huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)**
- 作者：huihui-ai | 👍 127 | ️ 4,874
- Gemma 4 Coder 的 Abliterated（对齐移除）版本，方便用户在非限制场景下使用模型能力。

**【30】 [HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)**
- 作者：HauhauCS | 👍 83 | ⬇️ 15,128
- Gemma 4 经 QAT（量化感知训练）+ 非审查微调，Balanced 定位在安全性与可用性间寻求平衡。

---

## 3. 生态信号

**模型家族格局：** Qwen 家族（含原版、社区微调、NVFP4 量化版）以合计超过 10 席的压倒性表现成为本周最大生态势力，其 MoE 化（Qwen3.6-35B-A3B + Qwen-AgentWorld-35B-A3B）策略与社区微调深度协同，形成正反馈循环。DeepSeek-V4-Pro 首周登顶，意味着 Qwen 与 DeepSeek 的双强格局成型。Gemma 4 依托 Google 基座 + Unsloth / HauhauCS / yuxinlu1 等社区力量，在微调与量化赛道深度渗透。

**开源 vs 闭源：** 本周前 30 名**全部为开源或开放权重模型**，进一步证实开放生态已成为 Hugging Face 主战场——NVIDIA、Google、百度、智谱、深度求索均以开放权重换取生态影响力和标准定义能力。

**量化趋势：** GGUF / QAT / NVFP4 / ModelOpt 四种量化格式同时活跃，NVIDIA 的 NVFP4 独占硬件生态与 GGUF 的通用 CPU 部署形成互补。Unsloth 作为"新晋标配"量化工具已在 GLM 和 Gemma 生态证明其快速跟进能力。

---

## 4. 值得探索

**🔥 [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
首周即获 5,061 赞和近 188 万下载，作为最新一代国产推理模型，建议立即上手测试其综合对话与推理能力——这可能是今年最重磅的开源模型之一。

**🔬 [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) + [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
NVIDIA 的 NVFP4 量化版与社区非审查微调版形成有趣组合——前者关注部署效率，后者关注能力释放。对比二者可一窥量化 vs 微调两条路线对模型行为的差异化影响。

**🧪 [unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
GLM-5.2 是智谱最新 MoE+DSA 架构的旗舰模型，Unsloth 的 GGUF 版本让消费级硬件也能运行——适合想深入研究新架构但资源有限的研究者。

---

*数据来源：Hugging Face Hub Trending | 周报时间 2026-06-26 |*
*本报告由 OWL 自动编译生成，供研究参考。*

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*