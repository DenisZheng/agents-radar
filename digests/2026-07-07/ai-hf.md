# Hugging Face 热门模型日报 2026-07-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-07 01:59 UTC

---

好的，这是为您生成的《Hugging Face 热门模型日报》（2026-07-07）。

---

### Hugging Face 热门模型日报 | 2026年7月7日

#### 1. 今日速览

本周 Hugging Face 生态呈现出几个显著特征：**多模态与视觉能力**成为绝对热点，霸榜模型多具备“image-text-to-text”能力；**Qwen 家族**（特别是 3.5/3.6 版本）衍生产品极其丰富，从官方到社区微调版本百花齐放；**GGUF 量化格式**普及率极高，多个高下载量模型均以此格式发布，表明本地部署和高效推理需求持续旺盛。此外，**百度、腾讯、英伟达（NVIDIA）等大厂**均有重要模型发布，标志着开源模型生态的进一步成熟和多元化。

#### 2. 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   作者: zai-org | 点赞: 3,531 | 下载: 231,218
   **说明**: 智谱 AI 官方发布的 GLM 系列最新 MoE 架构模型，凭借强大的对话和生成能力，获得了本周最高的点赞数，是社区关注的绝对焦点。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
   作者: deepseek-ai | 点赞: 409 | 下载: 14,276
   **说明**: 深度求索推出的 V4 专业版模型，附带技术论文 (arxiv:2606.19348)，代表了顶尖水平的开源大模型发展方向。

- **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)**
   作者: nvidia | 点赞: 126 | 下载: 10,766
   **说明**: NVIDIA 实验室推出的“双塔”架构 MoE 基座模型，探索了不同的模型设计范式，具有研究价值。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   作者: froggeric | 点赞: 698 | 下载: 0
   **说明**: 一个专注于修复 Qwen 系列模型聊天模板的实用工具，虽然下载量为 0，但高点赞数反映了社区对模型易用性的强烈需求。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   作者: empero-ai | 点赞: 1,642 | 下载: 1,617,508
   **说明**: 本周下载量冠军。基于 Qwen3.5 的多模态模型，经过大量合成数据微调，旨在融合“Claude风格”的推理能力。GGUF版本使其易于在本地部署。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   作者: nvidia | 点赞: 2,635 | 下载: 1,340,559
   **说明**: NVIDIA 出品的3B参数视觉定位模型，用于在图像中精确识别和定位任意物体。高点赞和高下载表明社区对高效视觉工具的渴求。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   作者: HauhauCS | 点赞: 2,529 | 下载: 2,910,241
   **说明**: 基于 Qwen3.6 的“无审查”MoE视觉模型，下载量位居前列。其“激进”的微调风格迎合了部分对内容限制敏感的社区用户。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
   作者: krea | 点赞: 529 | 下载: 109,470
   **说明**: 文本生成图像领域的明星模型，作为 Krea-2 系列的 Turbo 版本，在生成速度和图像质量之间取得了很好的平衡。

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
   作者: Qwen | 点赞: 556 | 下载: 57,835
   **说明**: 阿里官方为 Agent 场景设计和微调的 Qwen 模型，体现了多模态（视觉输入）在智能体应用中的重要性。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   作者: yuxinlu1 | 点赞: 2,623 | 下载: 664,319
   **说明**: 基于 Google Gemma 4 的专用代码生成模型，通过组合微调技术增强了推理和编码能力。GGUF格式使其在开发者社区中极受欢迎。

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   作者: google | 点赞: 257 | 下载: 7,036
   **说明**: Google 发布的表格数据基础模型 (TabFM)，专为分类和回归任务设计，并支持零样本预测。这标志着大模型能力向表格这一经典数据类型的扩展。

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
   作者: nationaldesignstudio | 点赞: 136 | 下载: 3,821
   **说明**: 一个基于 BERT 的 PII（个人身份信息）检测模型，并支持 ONNX 和 Transformers.js 部署，专注于数据安全和隐私保护这一垂直领域。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
   作者: deepreinforce-ai | 点赞: 759 | 下载: 436,780
   **说明**: Ornith 系列的 35B 参数 GGUF 量化版，由社区团队基于 Qwen3.5 架构微调，以 MIT 许可发布，兼顾了性能与开放性。

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
   作者: yuxinlu1 | 点赞: 1,051 | 下载: 370,884
   **说明**: 同样是基于 Gemma 4 的微调模型，专注于（终端）Agent 能力。这显示出在12B参数级别进行“Agent化”微调是当前热门方向。

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)**
   作者: Jackrong | 点赞: 151 | 下载: 126,831
   **说明**: 又一个 Qwen3.6 的变体，结合了“Coder”和“多任务预测（MTP）”特性，展示了社区对Qwen架构进行特定能力增强的浓厚兴趣。

#### 3. 生态信号

本周生态出现三大明确信号：
1.  **Qwen 家族统治力**：Qwen 系列（特别是3.5/3.6版本）衍生模型占据了榜单半壁江山，从官方到社区（Ornith, Qwothos, HauhauCS 等），围绕其架构进行微调、量化（GGUF）和多模态扩展已成为社区主流范式。
2.  **MoE 和混合架构是标配**：无论是新发布的基座模型（GLM-5.2, DeepSeek-V4）还是社区微调版，大量采用 MoE（混合专家）架构（如 35B-A3B），表明“大参数量、少激活量”已成为平衡性能与成本的共识。
3.  **开源权重优势扩大**：榜单中绝大多数流行模型都开源了权重（Safetensors 或 GGUF）。大厂（百度、腾讯、NVIDIA）的积极开源进一步挤压了闭源模型的生存空间，标志着“开放权重”已成为AI生态发展的基石。

#### 4. 值得探索

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：如果你从事任何与图像分析、机器人或GUI自动化相关的工作，这个3B参数的小模型可能是极佳的视觉基础工具，其高性价比值得一试。
2.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**：对于开发者而言，这是一个在12B参数级别上专注于代码和推理的优秀模型代表。其GGUF格式便于在个人电脑上运行，可以作为本地AI编程助手的有力候选。
3.  **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**：对于数据科学家和Kaggle竞赛玩家，这个模型代表了一种新的范式。探索如何使用大语言模型的知识来解决传统的表格数据问题，可能会带来意想不到的效果。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*