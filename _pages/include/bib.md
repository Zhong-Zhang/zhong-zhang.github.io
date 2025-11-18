<div class="citation-content" data-cite-id="agentcpm" style="display:none;">
  @inproceedings{zhang-etal-2025-agentcpm,
      title = "{A}gent{CPM}-{GUI}: Building Mobile-Use Agents with Reinforcement Fine-Tuning",
      author = "Zhang, Zhong  and
        Lu, Yaxi  and
        Fu, Yikun  and
        Huo, Yupeng  and
        Yang, Shenzhi  and
        Wu, Yesai  and
        Si, Han  and
        Cong, Xin  and
        Chen, Haotian  and
        Lin, Yankai  and
        Xie, Jie  and
        Zhou, Wei  and
        Xu, Wang  and
        Zhang, Yuanheng  and
        Su, Zhou  and
        Zhai, Zhongwu  and
        Liu, Xiaoming  and
        Mei, Yudong  and
        Xu, Jianming  and
        Tian, Hongyan  and
        Wang, Chongyi  and
        Chen, Chi  and
        Yao, Yuan  and
        Liu, Zhiyuan  and
        Sun, Maosong",
      editor = {Habernal, Ivan  and
        Schulam, Peter  and
        Tiedemann, J{\"o}rg},
      booktitle = "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing: System Demonstrations",
      month = nov,
      year = "2025",
      address = "Suzhou, China",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2025.emnlp-demos.12/",
      doi = "10.18653/v1/2025.emnlp-demos.12",
      pages = "155--180",
      ISBN = "979-8-89176-334-0",
      abstract = "Large language model agents have enabled GUI-based automation, particularly for mobile devices. However, deployment remains limited by noisy data, poor generalization, and lack of support for non-English GUIs. In this work, we present AgentCPM-GUI, an 8B-parameter GUI agent built for robust and efficient on-device GUI interaction. Our training pipeline includes grounding-aware pre-training to enhance perception, supervised fine-tuning on high-quality Chinese and English trajectories to imitate human-like actions, and reinforcement fine-tuning with GRPO to improve reasoning capability. AgentCPM-GUI achieves promising performance on five public benchmarks and our proposed Chinese benchmark CAGUI. To facilitate reproducibility and further research, we publicly release all code, model checkpoint, and evaluation data at: https://github.com/OpenBMB/AgentCPM-GUI"
  }
</div>

<div class="citation-content" data-cite-id="subspace" style="display:none;">
  @inproceedings{zhang-etal-2023-fine,
      title = "Fine-tuning Happens in Tiny Subspaces: Exploring Intrinsic Task-specific Subspaces of Pre-trained Language Models",
      author = "Zhang, Zhong  and
        Liu, Bang  and
        Shao, Junming",
      editor = "Rogers, Anna  and
        Boyd-Graber, Jordan  and
        Okazaki, Naoaki",
      booktitle = "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
      month = jul,
      year = "2023",
      address = "Toronto, Canada",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2023.acl-long.95/",
      doi = "10.18653/v1/2023.acl-long.95",
      pages = "1701--1713",
      abstract = "Pre-trained language models (PLMs) are known to be overly parameterized and have significant redundancy, indicating a small degree of freedom of the PLMs. Motivated by the observation, in this paper, we study the problem of re-parameterizing and fine-tuning PLMs from a new perspective: Discovery of intrinsic task-specific subspace. Specifically, by exploiting the dynamics of the fine-tuning process for a given task, the parameter optimization trajectory is learned to uncover its intrinsic task-specific subspace. A key finding is that PLMs can be effectively fine-tuned in the subspace with a small number of free parameters. Beyond, we observe some outlier dimensions emerging during fine-tuning in the subspace. Disabling these dimensions degrades the model performance significantly. This suggests that these dimensions are crucial to induce task-specific knowledge to downstream tasks."
  }
</div>

<div class="citation-content" data-cite-id="toolevo" style="display:none;">
  @inproceedings{
  chen2025learning,
  title={Learning Evolving Tools for Large Language Models},
  author={Guoxin Chen and Zhong Zhang and Xin Cong and Fangda Guo and Yesai Wu and Yankai Lin and Wenzheng Feng and Yasheng Wang},
  booktitle={The Thirteenth International Conference on Learning Representations},
  year={2025},
  url={https://openreview.net/forum?id=wtrDLMFU9v}
  }
</div>

<div class="citation-content" data-cite-id="schemaRL" style="display:none;">
  @inproceedings{lu-etal-2025-learning,
      title = "Learning to Generate Structured Output with Schema Reinforcement Learning",
      author = "Lu, Yaxi  and
        Li, Haolun  and
        Cong, Xin  and
        Zhang, Zhong  and
        Wu, Yesai  and
        Lin, Yankai  and
        Liu, Zhiyuan  and
        Liu, Fangming  and
        Sun, Maosong",
      editor = "Che, Wanxiang  and
        Nabende, Joyce  and
        Shutova, Ekaterina  and
        Pilehvar, Mohammad Taher",
      booktitle = "Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
      month = jul,
      year = "2025",
      address = "Vienna, Austria",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2025.acl-long.243/",
      doi = "10.18653/v1/2025.acl-long.243",
      pages = "4905--4918",
      ISBN = "979-8-89176-251-0",
      abstract = "This study investigates the structured generation capabilities of large language models (LLMs), focusing on producing valid JSON outputs against a given schema. Despite the widespread use of JSON in integrating language models with programs, there is a lack of comprehensive analysis and benchmarking of these capabilities. We explore various aspects of JSON generation, such as structure understanding, escaping, and natural language description, to determine how to assess and enable LLMs to generate valid responses. Building upon this, we propose SchemaBench features around 40K different JSON schemas to obtain and assess models' abilities in generating valid JSON. We find that the latest LLMs are still struggling to generate a valid JSON string. Moreover, we demonstrate that incorporating reinforcement learning with a Fine-grained Schema Validator can further enhance models' understanding of JSON schema, leading to improved performance. Our models demonstrate significant improvement in both generating JSON outputs and downstream tasks."
  }
</div>

<div class="citation-content" data-cite-id="repoagent" style="display:none;">
@inproceedings{luo-etal-2024-repoagent,
    title = "{R}epo{A}gent: An {LLM}-Powered Open-Source Framework for Repository-level Code Documentation Generation",
    author = "Luo, Qinyu  and
      Ye, Yining  and
      Liang, Shihao  and
      Zhang, Zhong  and
      Qin, Yujia  and
      Lu, Yaxi  and
      Wu, Yesai  and
      Cong, Xin  and
      Lin, Yankai  and
      Zhang, Yingli  and
      Che, Xiaoyin  and
      Liu, Zhiyuan  and
      Sun, Maosong",
    editor = "Hernandez Farias, Delia Irazu  and
      Hope, Tom  and
      Li, Manling",
    booktitle = "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing: System Demonstrations",
    month = nov,
    year = "2024",
    address = "Miami, Florida, USA",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.emnlp-demo.46/",
    doi = "10.18653/v1/2024.emnlp-demo.46",
    pages = "436--464",
    abstract = "Generative models have demonstrated considerable potential in software engineering, particularly in tasks such as code generation and debugging. However, their utilization in the domain of code documentation generation remains underexplored. To this end, we introduce RepoAgent, a large language model powered open-source framework aimed at proactively generating, maintaining, and updating code documentation. Through both qualitative and quantitative evaluations, we have validated the effectiveness of our approach, showing that RepoAgent excels in generating high-quality repository-level documentation. The code and results are publicly accessible at https://github.com/OpenBMB/RepoAgent."
}
</div>


<div class="citation-content" data-cite-id="mixhead" style="display:none;">
  @article{ZHANG2022108075,
  title = {Mixhead: Breaking the low-rank bottleneck in multi-head attention language models},
  journal = {Knowledge-Based Systems},
  volume = {240},
  pages = {108075},
  year = {2022},
  issn = {0950-7051},
  doi = {https://doi.org/10.1016/j.knosys.2021.108075},
  url = {https://www.sciencedirect.com/science/article/pii/S0950705121011503},
  author = {Zhong Zhang and Nian Shao and Chongming Gao and Rui Miao and Qinli Yang and Junming Shao},
  keywords = {Language model, Multi-head attention, Low-rank bottleneck},
  abstract = {The Transformer-based models have achieved significant advances in language modeling, while the multi-head attention mechanism in Transformers plays an indispensable part in their success. However, the too-small head size caused by the multi-head mechanism will lead to one problem called the low-rank bottleneck, which means that the rank of the attention weight matrix is too small to represent any desired attention. Naively increasing the head size is insufficient to solve the problem because it leads to severe parameter explosion and overfitting. To tackle this problem, we propose a mix-head attention (Mixhead) which mixes multiple attention heads by learnable mixing weights to improve the expressive power of the model. In contrast, Mixhead achieves a higher rank of the attention weight matrix while introducing a negligible number of parameters. Furthermore, Mixhead is quite general and can be easily adopted to most multi-head attention based models. We conduct extensive experiments including language modeling, machine translation, and finetuning BERT to demonstrate the effectiveness of our method.}
  }
</div>

<div class="citation-content" data-cite-id="degeneration" style="display:none;">
  @inproceedings{zhang-etal-2020-revisiting,
      title = "Revisiting Representation Degeneration Problem in Language Modeling",
      author = "Zhang, Zhong  and
        Gao, Chongming  and
        Xu, Cong  and
        Miao, Rui  and
        Yang, Qinli  and
        Shao, Junming",
      editor = "Cohn, Trevor  and
        He, Yulan  and
        Liu, Yang",
      booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2020",
      month = nov,
      year = "2020",
      address = "Online",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2020.findings-emnlp.46/",
      doi = "10.18653/v1/2020.findings-emnlp.46",
      pages = "518--527",
      abstract = "Weight tying is now a common setting in many language generation tasks such as language modeling and machine translation. However, a recent study reveals that there is a potential flaw in weight tying. They find that the learned word embeddings are likely to degenerate and lie in a narrow cone when training a language model. They call it the representation degeneration problem and propose a cosine regularization to solve it. Nevertheless, we prove that the cosine regularization is insufficient to solve the problem, as the degeneration is still likely to happen under certain conditions. In this paper, we revisit the representation degeneration problem and theoretically analyze the limitations of the previously proposed solution. Afterward, we propose an alternative regularization method called Laplacian regularization to tackle the problem. Experiments on language modeling demonstrate the effectiveness of the proposed Laplacian regularization."
  }
</div>

<div class="citation-content" data-cite-id="RAOSC" style="display:none;">
  @InProceedings{10.1007/978-3-030-18576-3_17,
  author="Zhang, Zhong
  and Gao, Chongming
  and Liu, Chongzhi
  and Yang, Qinli
  and Shao, Junming",
  editor="Li, Guoliang
  and Yang, Jun
  and Gama, Joao
  and Natwichai, Juggapong
  and Tong, Yongxin",
  title="Towards Robust Arbitrarily Oriented Subspace Clustering",
  booktitle="Database Systems for Advanced Applications",
  year="2019",
  publisher="Springer International Publishing",
  address="Cham",
  pages="276--291",
  abstract="Clustering high-dimensional data is challenging since meaningful clusters usually hide in the arbitrarily oriented subspaces, and classical clustering algorithms like k-means tend to fail in such case. Subspace clustering has thus attracted growing attention in the last decade and many algorithms have been proposed such as ORCLUS and 4C. However, existing approaches are usually sensitive to global and/or local noisy points, and the overlapping subspace clusters are little explored. Beyond, these approaches usually involve the exhaustive local search for correlated points or subspaces, which is infeasible in some cases. To deal with these problems, in this paper, we introduce a new subspace clustering algorithm called RAOSC, which formulates the Robust Arbitrarily Oriented Subspace Clustering as a group structure low-rank optimization problem. RAOSC is able to recover subspace clusters from a sea of noise while noise and overlapping points can be naturally identified during the optimization process. Unlike existing low-rank based subspace clustering methods, RAOSC can explicitly produce the subspaces of clusters without any prior knowledge of subspace dimensionality. Furthermore, RAOSC does not need a post-processing procedure to obtain the clustering result. Extensive experiments on both synthetic and real-world data sets have demonstrated that RAOSC allows yielding high-quality clusterings and outperforms many state-of-the-art algorithms.",
  isbn="978-3-030-18576-3"
  }
</div>

<div class="citation-content" data-cite-id="semisync" style="display:none;">
  @InProceedings{10.1007/978-3-030-18590-9_45,
  author="Zhang, Zhong
  and Kang, Didi
  and Gao, Chongming
  and Shao, Junming",
  editor="Li, Guoliang
  and Yang, Jun
  and Gama, Joao
  and Natwichai, Juggapong
  and Tong, Yongxin",
  title="SemiSync: Semi-supervised Clustering by Synchronization",
  booktitle="Database Systems for Advanced Applications",
  year="2019",
  publisher="Springer International Publishing",
  address="Cham",
  pages="358--362",
  abstract="In this paper, we consider the semi-supervised clustering problem, where the prior knowledge is formalized as the Cannot-Link (CL) and Must-Link (ML) pairwise constraints. We propose an algorithm called SemiSync that tackles this problem from a novel perspective: synchronization. The basic idea is to regard the data points as a set of (constrained) phase oscillators, and simulate their dynamics to form clusters automatically. SemiSync allows dynamically propagating the constraints to unlabelled data points driven by their local data distributions, which effectively boosts the clustering performance even if little prior knowledge is available. We experimentally demonstrate the effectiveness of the proposed method.",
  isbn="978-3-030-18590-9"
  }
</div>

<div class="citation-content" data-cite-id="nmf" style="display:none;">
@InProceedings{10.1007/978-3-319-91458-9_33,
author="Zhang, Zhong
and Qin, Zhili
and Li, Peiyan
and Yang, Qinli
and Shao, Junming",
editor="Pei, Jian
and Manolopoulos, Yannis
and Sadiq, Shazia
and Li, Jianxin",
title="Multi-view Discriminative Learning via Joint Non-negative Matrix Factorization",
booktitle="Database Systems for Advanced Applications",
year="2018",
publisher="Springer International Publishing",
address="Cham",
pages="542--557",
abstract="Multi-view learning attempts to generate a classifier with a better performance by exploiting relationship among multiple views. Existing approaches often focus on learning the consistency and/or complementarity among different views. However, not all consistent or complementary information is useful for learning, instead, only class-specific discriminative information is essential. In this paper, we propose a new robust multi-view learning algorithm, called DICS, by exploring the Discriminative and non-discriminative Information existing in Common and view-Specific parts among different views via joint non-negative matrix factorization. The basic idea is to learn a latent common subspace and view-specific subspaces, and more importantly, discriminative and non-discriminative information from all subspaces are further extracted to support a better classification. Empirical extensive experiments on seven real-world data sets have demonstrated the effectiveness of DICS, and show its superiority over many state-of-the-art algorithms.",
isbn="978-3-319-91458-9"
}
</div>

<div class="citation-content" data-cite-id="matthew" style="display:none;">
@inproceedings{10.1145/3539618.3591636,
author = {Gao, Chongming and Huang, Kexin and Chen, Jiawei and Zhang, Yuan and Li, Biao and Jiang, Peng and Wang, Shiqi and Zhang, Zhong and He, Xiangnan},
title = {Alleviating Matthew Effect of Offline Reinforcement Learning in Interactive Recommendation},
year = {2023},
isbn = {9781450394086},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3539618.3591636},
doi = {10.1145/3539618.3591636},
abstract = {Offline reinforcement learning (RL), a technology that offline learns a policy from logged data without the need to interact with online environments, has become a favorable choice in decision-making processes like interactive recommendation. Offline RL faces the value overestimation problem. To address it, existing methods employ conservatism, e.g., by constraining the learned policy to be close to behavior policies or punishing the rarely visited state-action pairs. However, when applying such offline RL to recommendation, it will cause a severe Matthew effect, i.e., the rich get richer and the poor get poorer, by promoting popular items or categories while suppressing the less popular ones. It is a notorious issue that needs to be addressed in practical recommender systems.In this paper, we aim to alleviate the Matthew effect in offline RL-based recommendation. Through theoretical analyses, we find that the conservatism of existing methods fails in pursuing users' long-term satisfaction. It inspires us to add a penalty term to relax the pessimism on states with high entropy of the logging policy and indirectly penalizes actions leading to less diverse states. This leads to the main technical contribution of the work: Debiased model-based Offline RL (DORL) method. Experiments show that DORL not only captures user interests well but also alleviates the Matthew effect. The implementation is available via https://github.com/chongminggao/DORL-codes},
booktitle = {Proceedings of the 46th International ACM SIGIR Conference on Research and Development in Information Retrieval},
pages = {238–248},
numpages = {11},
keywords = {interactive recommendation, matthew effect, offline reinforcement learning},
location = {Taipei, Taiwan},
series = {SIGIR '23}
}
</div>


<div class="citation-content" data-cite-id="community-detection" style="display:none;">
@inproceedings{ijcai2019p469,
  title     = {Community Detection and Link Prediction via Cluster-driven Low-rank Matrix Completion},
  author    = {Shao, Junming and Zhang, Zhong and Yu, Zhongjing and Wang, Jun and Zhao, Yi and Yang, Qinli},
  booktitle = {Proceedings of the Twenty-Eighth International Joint Conference on
               Artificial Intelligence, {IJCAI-19}},
  publisher = {International Joint Conferences on Artificial Intelligence Organization},
  pages     = {3382--3388},
  year      = {2019},
  month     = {7},
  doi       = {10.24963/ijcai.2019/469},
  url       = {https://doi.org/10.24963/ijcai.2019/469},
}
</div>


<div class="citation-content" data-cite-id="schizophrenia" style="display:none;">
@article{liang2019classification,
  title={Classification of first-episode schizophrenia using multimodal brain features: a combined structural and diffusion imaging study},
  author={Liang, Sugai and Li, Yinfei and Zhang, Zhong and Kong, Xiangzhen and Wang, Qiang and Deng, Wei and Li, Xiaojing and Zhao, Liansheng and Li, Mingli and Meng, Yajing and others},
  journal={Schizophrenia bulletin},
  volume={45},
  number={3},
  pages={591--599},
  year={2019},
  publisher={Oxford University Press US}
}
</div>

<div class="citation-content" data-cite-id="ac-reason" style="display:none;">
@misc{zhang2025hcrreasonersynergizinglargelanguage,
      title={HCR-Reasoner: Synergizing Large Language Models and Theory for Human-like Causal Reasoning}, 
      author={Yanxi Zhang and Xin Cong and Zhong Zhang and Xiao Liu and Dongyan Zhao and Yesai Wu},
      year={2025},
      eprint={2505.08750},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2505.08750}, 
}
</div>
