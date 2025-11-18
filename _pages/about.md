---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

{% include_relative include/bib.md %}

<span class='anchor' id='about-me'></span>
# <i class="fas fa-address-card" style="color: #6495ED;"></i> Bio

I am currently a postdoctoral researcher in the "[Shuimu Tsinghua Scholar Program 水木学者](https://postdoctor.tsinghua.edu.cn/info/zxtz/2097)" at the [Department of Computer Science and Technology](https://www.cs.tsinghua.edu.cn), [Tsinghua University](https://www.tsinghua.edu.cn), advised by [Zhiyuan Liu (刘知远)](https://nlp.csai.tsinghua.edu.cn/~lzy/) in the [THUNLP](https://nlp.csai.tsinghua.edu.cn) Lab. Prior to this, I received my PhD from [University of Electronic Science and Technology of China](https://www.uestc.edu.cn) in 2023 under the supervision of [Junming Shao (邵俊明)](https://dm.uestc.edu.cn), and my bachelor's degree from UESTC in 2016. During my doctoral studies, I was a visiting scholar at [Université de Montréal](https://www.umontreal.ca/) in 2022, advised by [Bang Liu (刘邦)](https://www-labs.iro.umontreal.ca/~liubang/).

I am working on Large Language Models and LLM-based Agents, particularly GUI Agents and Tool Learning. My work has appeared at top-tier venues including ACL, ICLR, EMNLP, SIGIR, and IJCAI, with <a href='https://scholar.google.com/citations?user=NX5TeR4AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>.

👋👋👋 
We are continuously seeking highly motivated interns who are interested in LLM-based Agent research. See more details [here](https://nlp.csai.tsinghua.edu.cn/join_us/research_direction/details/?slug=autonomous_agent_doctor).

# <i class="fas fa-fire" style="color: #6495ED;"></i> News
- *2025.11*: 🏠🏠🏠 My new homepage is online!

# <i class="fa fa-book" style="color: #6495ED;"></i> Selected Publications

**See full publications at [Google Scholar](https://scholar.google.com/citations?user=NX5TeR4AAAAJ)**

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP Demo 2025</div><video src='videos/agentcpm-gui.mp4' width="100%" controls poster="images/paper_poster/agentcpm-gui-poster.png"></video></div></div>
<div class='paper-box-text' markdown="1">

[AgentCPM-GUI: Building Mobile-Use Agents with Reinforcement Fine-Tuning](https://aclanthology.org/2025.emnlp-demos.12/)

**Zhong Zhang**\*, Yaxi Lu\*, Yikun Fu, Yupeng Huo, Shenzhi Yang, Yesai Wu, Han Si, Xin Cong, Haotian Chen, Yankai Lin<sup>✉︎</sup>, Jie Xie, Wei Zhou, Wang Xu, Yuanheng Zhang, Zhou Su, Zhongwu Zhai, Xiaoming Liu, Yudong Mei, Jianming Xu, Hongyan Tian, Chongyi Wang, Chi Chen, Yuan Yao, Zhiyuan Liu<sup>✉︎</sup>, Maosong Sun<sup>✉︎</sup>
<a href="https://aclanthology.org/2025.emnlp-demos.12.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="agentcpm" onclick="copyCitation('agentcpm'); return false;"><i class="fas fa-quote-left"></i></a>

[![GitHub](https://img.shields.io/github/stars/OpenBMB/AgentCPM-GUI?style=social&label=AgentCPM-GUI)](https://github.com/OpenBMB/AgentCPM-GUI) \| [![HF Model](https://img.shields.io/badge/🤗%20Hugging%20Face-blue?label=Model)](https://huggingface.co/openbmb/AgentCPM-GUI) \| [![HF Dataset](https://img.shields.io/badge/🤗%20Hugging%20Face-blue?label=Data)](https://huggingface.co/datasets/openbmb/CAGUI)

- AgentCPM-GUI is a GUI agent built upon <a href="https://huggingface.co/openbmb/MiniCPM-V-2_6" class="no-tooltip">MiniCPM-V 2.6</a> (latest update <a href="https://github.com/OpenBMB/MiniCPM-V" class="no-tooltip">here</a>), delivering strong GUI perception and enhanced reasoning for autonomously operating mobile phones.
</div>
</div>

<div class='paper-box-text' markdown="1">
- <span class="badge-inline">ICLR 2025</span> [Learning Evolving Tools for Large Language Models](https://openreview.net/forum?id=wtrDLMFU9v). Guoxin Chen, **Zhong Zhang**<sup>✉︎</sup>, Xin Cong<sup>✉︎</sup>, Fangda Guo, Yesai Wu, Yankai Lin, Wenzheng Feng, Yasheng Wang
<a href="https://openreview.net/pdf?id=wtrDLMFU9v" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="toolevo" onclick="copyCitation('toolevo'); return false;"><i class="fas fa-quote-left"></i></a>&nbsp;
[![GitHub](https://img.shields.io/github/stars/Chen-GX/ToolEVO?style=social&label=ToolEVO)](https://github.com/Chen-GX/ToolEVO)

- <span class="badge-inline">ACL 2025</span> [Learning to Generate Structured Output with Schema Reinforcement Learning](https://aclanthology.org/2025.acl-long.243/). Yaxi Lu\*, Haolun Li\*, Xin Cong, **Zhong Zhang**<sup>✉︎</sup>, Yesai Wu, Yankai Lin, Zhiyuan Liu, Fangming Liu<sup>✉︎</sup>, Maosong Sun
<a href="https://aclanthology.org/2025.acl-long.243.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="schemaRL" onclick="copyCitation('schemaRL'); return false;"><i class="fas fa-quote-left"></i></a>&nbsp;
[![GitHub](https://img.shields.io/github/stars/thunlp/SchemaReinforcementLearning?style=social&label=SchemaRL)](https://github.com/thunlp/SchemaReinforcementLearning)

- <span class="badge-inline">EMNLP Demo 2024</span> [RepoAgent: An LLM-Powered Open-Source Framework for Repository-level Code Documentation Generation](https://aclanthology.org/2024.emnlp-demo.46/). Qinyu Luo\*, Yining Ye\*, Shihao Liang, **Zhong Zhang**<sup>✉︎</sup>, Yujia Qin, Yaxi Lu, Yesai Wu, Xin Cong, Yankai Lin, Yingli Zhang, Xiaoyin Che, Zhiyuan Liu<sup>✉︎</sup>, Maosong Sun
<a href="https://aclanthology.org/2024.emnlp-demo.46.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="repoagent" onclick="copyCitation('repoagent'); return false;"><i class="fas fa-quote-left"></i></a>&nbsp;
[![GitHub](https://img.shields.io/github/stars/OpenBMB/RepoAgent?style=social&label=RepoAgent)](https://github.com/OpenBMB/RepoAgent)

- <span class="badge-inline">ACL 2023</span> [Fine-tuning Happens in Tiny Subspaces: Exploring Intrinsic Task-specific Subspaces of Pre-trained Language Models](https://aclanthology.org/2023.acl-long.95). **Zhong Zhang**, Bang Liu<sup>✉︎</sup>, Junming Shao<sup>✉︎</sup>
<a href="https://aclanthology.org/2023.acl-long.95.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="subspace" onclick="copyCitation('subspace'); return false;"><i class="fas fa-quote-left"></i></a>

- <span class="badge-inline">Knowledge-Based Systems 2022</span> [Mixhead: Breaking the low-rank bottleneck in multi-head attention language models](https://doi.org/10.1016/j.knosys.2021.108075). **Zhong Zhang**, Nian Shao, Chongming Gao, Rui Miao, Qinli Yang, Junming Shao<sup>✉︎</sup>
<a href="/assets/pdf/mixhead.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="mixhead" onclick="copyCitation('mixhead'); return false;"><i class="fas fa-quote-left"></i></a>

- <span class="badge-inline">EMNLP Findings 2020</span> [Revisiting Representation Degeneration Problem in Language Modeling](https://aclanthology.org/2020.findings-emnlp.46/). **Zhong Zhang**, Chongming Gao, Cong Xu, Rui Miao, Qinli Yang, Junming Shao<sup>✉︎</sup>
<a href="https://aclanthology.org/2020.findings-emnlp.46.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="degeneration" onclick="copyCitation('degeneration'); return false;"><i class="fas fa-quote-left"></i></a>


<!-- ## Preprints -->
<ul style="list-style:none; padding-left:2rem; margin:0;"><li><h2>Preprints</h2></li></ul>
- <span class="badge-inline">Preprint 2025</span> [HCR-Reasoner: Synergizing Large Language Models and Theory for Human-like Causal Reasoning](https://arxiv.org/abs/2505.08750v2). Yanxi Zhang, Xin Cong, **Zhong Zhang**<sup>✉︎</sup>, Xiao Liu, Dongyan Zhao<sup>✉︎</sup>, Yesai Wu
<a href="https://arxiv.org/pdf/2505.08750v2" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="ac-reason" onclick="copyCitation('ac-reason'); return false;"><i class="fas fa-quote-left"></i></a>



<!-- ## Prior to LLMs -->
<ul style="list-style:none; padding-left:2rem; margin:0;"><li><h2>Prior to LLMs</h2></li></ul>
- <span class="badge-inline">SIGIR 2023</span> [Alleviating matthew effect of offline reinforcement learning in interactive recommendation](https://doi.org/10.1145/3539618.3591636). Chongming Gao, Kexin Huang, Jiawei Chen<sup>✉︎</sup>, Yuan Zhang, Biao Li, Peng Jiang, Shiqi Wang, **Zhong Zhang**, Xiangnan He<sup>✉︎</sup>
<a href="https://arxiv.org/pdf/2307.04571" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="matthew" onclick="copyCitation('matthew'); return false;"><i class="fas fa-quote-left"></i></a>&nbsp;&nbsp;![Award](https://img.shields.io/badge/SIGIR-Best%20Paper%20Award%20Honorable%20Mention?label=Best%20Paper%20Award%20Honorable%20Mention&labelColor=red&color=gray)

- <span class="badge-inline">DASFAA 2019</span> [Towards robust arbitrarily oriented subspace clustering](https://doi.org/10.1007/978-3-030-18576-3_17). **Zhong Zhang**, Chongming Gao, Chongzhi Liu, Qinli Yang, Junming Shao<sup>✉︎</sup>
<a href="/assets/pdf/Zhang2019_Chapter_TowardsRobustArbitrarilyOrient.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="RAOSC" onclick="copyCitation('RAOSC'); return false;"><i class="fas fa-quote-left"></i></a>&nbsp;&nbsp;![Award](https://img.shields.io/badge/DASFAA-Best%20Paper%20Award?label=Best%20Paper%20Award&labelColor=red&color=gray)

- <span class="badge-inline">DASFAA 2019</span> [SemiSync: Semi-supervised clustering by synchronization](https://doi.org/10.1007/978-3-030-18590-9_45). **Zhong Zhang**, Didi Kang, Chongming Gao, Junming Shao<sup>✉︎</sup>
<a href="/assets/pdf/Zhang2019_Chapter_SemiSyncSemi-supervisedCluster.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="semisync" onclick="copyCitation('semisync'); return false;"><i class="fas fa-quote-left"></i></a>

- <span class="badge-inline">IJCAI 2019</span> [Community Detection and Link Prediction via Cluster-driven Low-rank Matrix Completion](https://doi.org/10.24963/ijcai.2019/469). Junming Shao<sup>✉︎</sup>, **Zhong Zhang**, Zhongjing Yu, Jun Wang, Yi Zhao, Qinli Yang
<a href="https://www.ijcai.org/proceedings/2019/0469.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="community-detection" onclick="copyCitation('community-detection'); return false;"><i class="fas fa-quote-left"></i></a>

- <span class="badge-inline">Schizophr Bull. 2019</span> [Classification of first-episode schizophrenia using multimodal brain features: a combined structural and diffusion imaging study](https://doi.org/10.1093/schbul/sby091). Sugai Liang, Yinfei Li, **Zhong Zhang**, Xiangzhen Kong, Qiang Wang, Wei Deng, Xiaojing Li, Liansheng Zhao, Mingli Li, Yajing Meng, Feng Huang, Xiaohong Ma, Xin-Min Li, Andrew J Greenshaw, Junming Shao, Tao Li<sup>✉︎</sup>
<a href="/assets/pdf/sby091.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="schizophrenia" onclick="copyCitation('schizophrenia'); return false;"><i class="fas fa-quote-left"></i></a>

- <span class="badge-inline">DASFAA 2018</span> [Multi-view discriminative learning via joint non-negative matrix factorization](https://doi.org/10.1007/978-3-319-91458-9_33). **Zhong Zhang**, Zhili Qin, Peiyan Li, Qinli Yang, Junming Shao<sup>✉︎</sup>
<a href="/assets/pdf/Zhang2018_Chapter_Multi-viewDiscriminativeLearni.pdf" class="paper-icon" data-tooltip="Download PDF"><i class="fas fa-file-pdf" style="color: #D32F2F;"></i></a>
<a href="#" class="paper-icon" data-tooltip="Copy Citation" data-cite-id="nmf" onclick="copyCitation('nmf'); return false;"><i class="fas fa-quote-left"></i></a>

</div>

# <i class="fa fa-cogs" style="color: #6495ED;"></i> Projects
- *2025-2026*, China Postdoctoral Science Foundation, General Program
- *2024-2026*, China Postdoctoral Science Foundation, Postdoctoral Fellowship Program

# <i class="fa fa-microphone" style="color: #6495ED;"></i> Invited Talks
- *2025.11*, GUI Agents Tutorial, Huawei talk.
- *2025.08*, Getting Started with LLM Research, CCL 2025.
- *2025.06*, AgentCPM-GUI: Building Mobile-Use Agents with Reinforcement Fine-Tuning, Wisemodel talk.
- *2024.08*, Large Language Model-driven Autonomous Agents, MLNLP 2024.
- *2024.08*, Latest Advances in LLMs, InfiniTensor 2024.

# <i class="fa fa-id-badge" style="color: #6495ED;"></i> Professional Services

<div class="service-scroll" markdown="1">

### Area Chair
1. ACL ARR 2025 October Area Chair

### Conference Reviewer
1. ICLR Program committee 2026, 2025
2. ACL Program committee 2025, 2024
3. EMNLP Program committee 2025, 2024
4. AAAI Program committee 2026, 2025
5. NLPCC Program committee 2025, 2024
6. ECMLPKDD Program committee 2025
7. WiNLP Workshop Program committee 2024
8. DLG4NLP Workshop Technical Program Committees 2022

### Journal Reviewer
1. Information Sciences 2025, 2022
2. Neural Networks 2024, 2023, 2022
3. Information Fusion 2025
4. Neurocomputing 2024, 2022
5. AI Open 2025, 2024
6. Science China Information Sciences 2025

</div>

# <i class="fa fa fa-graduation-cap" style="color: #6495ED;"></i> Teaching
### Teaching Assistant
- *Spring 2020*, Big Data Analysis and Mining (English) - Graduate Students
- *Spring 2019*, Data Mining and Big Data Analysis - Undergraduate Students
- *Spring 2017*, Big Data Analysis and Mining (English) - Graduate Students
- *Autumn 2016*, Probability and Statistics (English) - Undergraduate Students