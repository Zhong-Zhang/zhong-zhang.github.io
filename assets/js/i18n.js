// 翻译数据配置
const translations = {
  en: {
    // 导航和基本信息
    'nav.homepage': 'Homepage',
    'nav.about_me': 'Bio',
    'nav.news': 'News',
    'nav.publications': 'Publications',
    'nav.research_grants': 'Research Grants',
    'nav.invited_talks': 'Invited Talks',
    'nav.professional_services': 'Professional Services',
    'nav.teaching': 'Teaching',
    
    // 个人信息部分
    'about.title': 'Bio',
    'about.news': 'News',

    // 发表论文部分
    'publications.title': 'Selected Publications',
    'publications.preprints': 'Preprints',
    'publications.prior': 'Prior to LLMs',
    
    // 项目部分
    'grants.title': 'Research Grants',
    
    // 报告部分
    'talks.title': 'Invited Talks',
    
    // 服务部分
    'services.title': 'Professional Services',
    'services.ac': 'Area Chair',
    'services.cr': 'Conference Reviewer',
    'services.jr': 'Journal Reviewer',

    // 教学部分
    'teaching.title': 'Teaching',
    'teaching.ta': 'Teaching Assistant',
  },
  zh: {
    // 导航和基本信息
    'nav.homepage': '主页',
    'nav.about_me': '个人简介',
    'nav.news': '最新动态',
    'nav.publications': '发表论文',
    'nav.research_grants': '研究项目',
    'nav.invited_talks': '学术报告',
    'nav.professional_services': '学术服务',
    'nav.teaching': '课程教学',
    
    // 个人信息部分
    'about.title': '个人简介',
    'about.news': '最新动态',
    
    // 发表论文部分
    'publications.title': '发表论文',
    'publications.preprints': '预印本',
    'publications.prior': '大模型之前',
    
    // 项目部分
    'grants.title': '研究项目',
    
    // 报告部分
    'talks.title': '学术报告',
    
    // 服务部分
    'services.title': '学术服务',
    'services.ac': '领域主席',
    'services.cr': '会议审稿人',
    'services.jr': '期刊审稿人',

    // 教学部分
    'teaching.title': '课程教学',
    'teaching.ta': '助教',
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}