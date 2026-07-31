# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-31 02:09 UTC

---

---

# 📊 Hugging Face 热门模型日报 | 2026-07-31

### 📌 今日速览
1. **Moonshot AI 的 Kimi-K3 以 9k+ 点赞强势霸榜**，确立了当前开源多模态 MoE 模型的新高度，且同步发布了 `compressed-tensors` 量化版与 Unsloth 适配版，部署生态极其完善。  
2. **Qwen 3.6 35B-A3B 成为社区微调与量化的绝对主力底座**，衍生出 HauhauCS、DavidAU、LuffyTheFox 等多个千赞级“去审查/角色扮演” GGUF 变体，下载量合计超千万。  
3. **百度 Unlimited-OCR 以 260 万下载量领跑实用主义赛道**，印证了垂类多模态（OCR/文档理解）在落地端的旺盛需求。  
4. **极致量化技术迎来突破**：Prism-ML 推出 2-bit Ternary 量化，Nota-AI 适配 NVFP4，微软 BitNet ASR 模型开源，推理成本进一步向极致压缩。  
5. **国产模型矩阵全面开花**：GLM-5.2（MoE）、Solar-Open2-250B（超大参数）、KAT-Coder（代码）、Nanbeige、Instella 等覆盖从边缘端到集群级全谱系。

---

### 🔥 热门模型分类榜

#### 🧠 语言模型（LLM、对话、指令微调、MoE 基座）
| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,682 / 1.5M | **智谱新一代 MoE 基座（glm_moe_dsa）**，原生支持工具调用与长上下文，中英双语对齐极强，企业级落地首选。 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 703 / 12.4k | **250B 稀疏专家模型**，采用 Depth-Upscaling 训练，单卡 80GB 即可跑通推理，性能对标 GPT-4 级别。 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 847 / 73.2k | **代码专用强化模型**，在 HumanEval+/MBPP 上 SOTA，专为软件工程 Agent 设计，商业许可友好。 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 582 / 24.5k | **3B 小模型里的“六边形战士”**，长文本、数学、代码均衡，边缘部署/手机端首选。 |
| [**amd/Instella-MoE-16B-A3B-Think**](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 94 / 1.3k | **AMD 优化的 MoE 思考型模型**，针对 MI300X 硬件深度调度，激活参数仅 3B，性价比极高。 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 240 / 9.8k | **1B 安全对齐模型**，GraniteMoE 混合架构，专为设备端安全护栏、提示词注入检测设计。 |

#### 🎨 多模态与生成（视觉、音频、文档、扩散）
| 模型 | 作者 | 点赞 / 下载 | 一句话解读 |
| :--- | :--- | :--- | :--- |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **9,016** / 387.8k | **今日无可争议的王者**：多模态 MoE 基座，原生支持超长图文混合推理，`compressed-tensors` 量化原生部署，中文视觉理解 SOTA。 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,584 / **2.6M** | **文档解析/OCR 王者**，任意分辨率、任意版面、多语言零样本，下载量碾压同类，RAG/数字化转型标配。 |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,595 / **6.1M** | **社区多模态生态基石**，35B 总参数/3B 激活的 Vision MoE，原生支持视频/图文交织，衍生微调最多。 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,654 / 45.6k | **轻量级多模态对话模型**，参数效率极高，适合消费级显存部署的视觉助手原型。 |
| [**microsoft/Fara1.5-27B**](https://h

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*