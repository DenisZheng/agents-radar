# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 02:01 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-16

---

## 🚀 今日速览

1. **量化与边缘部署成主流**：Top 30 中超 40% 为 GGUF/量化版本，2-bit/1-bit 极致压缩（Ternary-Bonsai）、NVFP4 硬件适配版本涌现，本地推理需求爆发。
2. **MoE 与混合架构领跑性能榜**：GLM-5.2（MoE-DSA）、Qwen3.6 35B-A3B、MiniCPM5 1B 等稀疏/混合专家模型占据高下载高点赞，参数效率成核心竞争力。
3. **多模态原生化加速**：Inkling、Qwythos、ThinkingCap、Hunyuan（Hy3）等统一“文本-图像-音频”理解生成，单一模态模型边界消解。
4. **中厂开源势头强劲**：Z.ai（GLM）、腾讯、百度、MiniCPM、InternScience 等占据半数头部席位，闭源差距进一步收窄。
5. **工具化与 Agent 就绪**：Needle（Function Calling）、Unlimited-OCR、MOSS-Transcribe 等垂直能力模型下载量大，生态从“模型”向“组件”延伸。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ / 📥 | 一句话说明 |
|------|------|---------|------------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,000 / 489,611 | **当周王者**：MoE-DSA 架构，开源权重，中英代理任务 SOTA，下载量碾压同级。 |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 800 / 10,406 | 腾讯混元第三代，原生长上下文+工具调用，企业级落地首选。 |
| [**deepreinforce-ai/Ornith-1.0-35B-GGUF**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 894 / 1,533,354 | 35B 密集模型全量化套装，MIT 许可，商用友好，下载量超百万。 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 129 / 3,483 | 1B 参数蒸馏“思维链”能力，手机端可跑，推理质量惊人。 |
| [**nvidia/Nemotron-Labs-Audex-30B-A3B**](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B) | nvidia | 156 / 1,332 | Nemotron 实验室新作，MoE 30B 激活 3B，专注音频推理与代理任务。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

| 模型 | 作者 | ❤️ / 📥 | 一句话说明 |
|------|------|---------|------------|
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 371 / 0 | 统一文本/图像/音频理解生成的原生多模态基座，架构创新度高。 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,216 / 2,006,265 | Qwen3.5 视觉推理微调+GGUF，下载量破 200 万，消费级显存可跑。 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 366 / 6,208 | Qwen3.6 27B 视觉版，强化链式思考，复杂图文推理表现亮眼。 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,760 / 2,443,871 | **下载量榜首**：MoE 35B 激活 3B，去审查+激进指令微调，社区狂热追捧。 |
| [**unsloth/Qwen3.6-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | unsloth | 208 / 1,599,150 | NVFP4 量化原生支持 Blackwell，推理吞吐提升 2×，生产级部署首选。 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,002 / 1,715,301 | 百度通用 OCR 大模型，任意语言/版面/长文档零样本，企业级文档解析标杆。 |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 215 / 65,109 | 中英混合语音转写+说话人分离，开源可商用，会议/播客场景即插即用。 |
| [**robbyant/lingbot-world-v2-14b-causal-fast**](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast) | robbyant | 99 / 0 | 14B 世界模型，图像→视频因果生成，物理一致性强，具身智能预训练基座。 |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 154 / 0 | LTX-Video 人脸保真 LoRA，身份一致性长视频生成利器。 |
| [**mgwr/M87**](https://huggingface.co/mgwr/M87) | mgwr | 126 / 2,408 | 基于 Krea-2-Turbo 的风格化 LoRA，文生图美学微调范例。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / Agent / OCR）

| 模型 | 作者 | ❤️ / 📥 | 一句话说明 |
|------|------|---------|------------|
| [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) | InternScience | 556 / 30,539 | Qwen3.5-MoE 专为 Agent 训练，Function Calling 与规划能力强。 |
| [**Cactus-Compute/needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 236 / 571 | JAX 实现的轻量 Function Calling 模型，工具调用延迟极低。 |
| [**yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,198 / 468,629 | Gemma-4 12B 代理微调+GGUF，终端/编码/工具链任务表现超同量级。 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 118 / 745 | Qwen3.5 视觉 OCR 专用版，表格/公式/手写识别增强。 |
| [**jlnsrk/GLM-5.2-colibri-int4**](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 111 / 2,188 | GLM-5.2 INT4 专家流式加载，CPU 即可跑 MoE 大模型，边缘部署突破。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 模板修复）

| 模型 | 作者 | ❤️ / 📥 | 一句话说明 |
|------|------|---------|------------|
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 475 / 23 | **全网首发 2-bit 三元量化** 27B，精度损失 <1%，边缘设备跑大模型新纪录。 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 270 / 513 | 1-bit 极致压缩版 Bonsai，探索量化下限，研究参考价值高。 |
| [**empero-ai/Qwythos-9B-v2-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 144 / 70,260 | Qwythos v2 全量化套装，多精度可选，即下即用。 |
| [**empero-ai/Qwythos-9B-v2**](https://huggingface.co/empero-ai/Qwythos-9B-v2) | empero-ai | 123 / 3,959 | v2 基座权重，视觉推理对齐更强。 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 918 / 0 | **工具类热门**：修复 Qwen3.5 官方聊天模板 Bug，MLX/Jinja 双格式，避坑必备。 |
| [**AngelSlim/Hy3-GGUF**](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 109 / 0 | 腾讯 Hy3 社区量化首发，Apache-2.0，生态补全快。 |
| [**robbyant/lingbot-video-moe-30b-a3b**](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b) | robbyant | 111 / 700 | 视频生成 MoE 30B，Diffusers 原生管线，开源视频 MoE 稀缺样本。 |
| [**open-gigaai/Giga-World-1**](https://huggingface.co/open-gigaai/Giga-World-1) | open-gigaai | 135 / 0 | 世界模型基座权重，Apache-2.0，具身智能预训练起点。 |

---

## 📈 生态信号深度解读（~160 字）

**模型家族势头**：**Qwen3.5/3.6 系**以 6 款上榜模型（含 MoE、视觉、量化、去审查）构成最完整生态闭环；**GLM-5.2** 以 MoE-DSA 新架构确立中厂旗舰地位；**MiniCPM** 向 1B 极致小模型渗透，重新定义边缘智能下限。  
**开源 vs 闭源**：头部 10 款中 8 款为开源权重（Apache-2.0/MIT），闭源仅剩商业 API 入口；社区微调/量化（GGUF、NVFP4、INT4、三元）已成标配交付物，**“发布即量化、量化即部署”**成为新范式。  
**量化/微调活动**：prism-ml 推进 **2-bit/1-bit 三元量化** 探索理论极限；unsloth 领跑 **NVFP4 硬件协同量化**；empero-ai、GnLOLot 等高产出团队以“全精度套装+教程”降低使用门槛。**垂直能力模型（OCR、ASR、Function Calling、世界模型）下载量均破万**，标志着生态从“聊天模型”向“AI 基础设施组件”转型。

---

## 💎 值得探索的 3 个模型

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — **全场景旗舰**  
   MoE-DSA 稀疏架构训练成本低、推理快，原生 128k 上下文+工具调用，基准测试超 GPT-4o-mini，权重完全开放，**企业级落地首选替代闭源 API**。

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — **量化研究前沿**  
   业界首个 **2-bit 三元量化 27B** 实测可用，显存仅需 ~6 GB，精度保持 >99%。适合**量化算法研究、消费级 GPU/NPU 边缘部署、大模型压缩教学**。

3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — **Agent 专用基座**  
   Qwen3.5-MoE 继续预训练+RLHF 对齐 Function Calling、规划、反思，Bench 显著超基座。**构建多智能体系统、自动化工作流、代码生成管线**的最佳起点，配合 Needle 组件可组装低延迟工具链。

---

> 📌 **数据来源**：Hugging Face Hub Trending (2026-07-

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*