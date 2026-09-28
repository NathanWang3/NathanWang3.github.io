// ============================================================
//  网站内容数据 —— 只改这个文件就能更新整站
//  每个字段都是 { en: "...", zh: "..." }，两种语言各写一份。
//  留空字符串 "" 的字段不会渲染。
// ============================================================

window.SITE = {

  // ---------- 语言 ----------
  defaultLang:    "en",     // "en" | "zh" | "auto"（auto = 跟浏览器）
  showLangToggle: false,    // false = 隐藏右上角切换按钮，整站只显示 defaultLang

  // ---------- 基本信息 ----------
  name:      { en: "Nan (Nathan) Wang",  zh: "王 楠" },
  nameAlt:   { en: "王楠",               zh: "Nan (Nathan) Wang" },
  title:     { en: "Ph.D. Candidate · Environmental Systems Engineering",
               zh: "博士候选人 · 环境系统工程" },
  affil:     { en: "Institute for Energy, Environment and Sustainable Communities (IEESC)<br>University of Regina, Canada",
               zh: "能源、环境与可持续社区研究所（IEESC）<br>加拿大里贾纳大学" },
  tagline:   { en: "Modelling how water and energy infrastructure reshapes regional economies and the environment.",
               zh: "用系统模型量化水利与能源基础设施对区域经济与环境的深层影响。" },

  email:     "nwl603@uregina.ca",
  github:    "https://github.com/NathanWang3",
  scholar:   "https://scholar.google.com/citations?user=iLu47w0AAAAJ",
  orcid:     "",          // 例如 https://orcid.org/0000-0000-0000-0000
  linkedin:  "https://www.linkedin.com/in/nan-w-9456521ab/",
  cvFile:    "",          // 例如 "assets/Nan_Wang_CV.pdf"，放进仓库后填这里

  // ---------- 关于我 ----------
  about: {
    en: `I am a Ph.D. candidate in the Environmental Systems Engineering Program at the University of Regina, working with Prof. Guohe (Gordon) Huang at IEESC. My research sits at the intersection of water resources engineering and economic systems analysis: I build computable general equilibrium (CGE), multi-regional input–output (MRIO) and factorial-design models to trace how large-scale hydropower projects, inter-basin water transfers and pollutant flows propagate through supply chains and regional economies.

Before my doctoral studies I worked as a water resources engineer at the Water Resources Bureau of Yulin City and completed engineering internships at the Xiangjiaba and Baojixia hydropower stations, which grounds my modelling in how these systems are actually planned and operated.

I am currently seeking postdoctoral, faculty and research-scientist positions in North America and China, and am equally open to applied roles in energy utilities, government agencies and energy–economy consulting.`,
    zh: `我是加拿大里贾纳大学环境系统工程专业的博士候选人，在 IEESC 黄国和（Gordon Huang）教授团队从事研究。我的工作处于水资源工程与经济系统分析的交叉点：构建可计算一般均衡（CGE）、多区域投入产出（MRIO）与因子设计模型，追踪大型水电工程、跨流域调水与污染物流动如何沿供应链在区域经济中传导与放大。

读博之前，我曾在榆林市水利局担任水资源工程师，并在向家坝、宝鸡峡水电站完成工程实习。这段经历让我的模型始终扎根于这些系统真实的规划与运行方式。

目前正在寻求北美及国内的博士后、教职与研究岗位，也乐于考虑能源企业、政府机构和能源—经济咨询领域的应用型职位。`
  },

  // ---------- 研究方向 ----------
  // icon 可选：drop grid network dam dice nodes chart
  interests: [
    { icon: "drop",    en: "Water–energy–economy nexus modelling",              zh: "水—能—经济纽带系统建模" },
    { icon: "chart",   en: "Computable general equilibrium (CGE / dynamic CGE)", zh: "可计算一般均衡（CGE / 动态 CGE）" },
    { icon: "grid",    en: "Multi-regional input–output & virtual water",        zh: "多区域投入产出与虚拟水" },
    { icon: "dam",     en: "Socio-economic & environmental impact of hydropower", zh: "水电工程社会经济与环境影响评估" },
    { icon: "dice",    en: "Factorial design & uncertainty analysis",             zh: "因子设计与不确定性分析" },
    { icon: "network", en: "Ecological network analysis of pollutant flows",     zh: "污染物流动的生态网络分析" }
  ],

  // ---------- 引用指标（留空不显示；从 Google Scholar 抄） ----------
  hIndex:    "",
  citations: "",

  // ---------- 论文 ----------
  // status: published | accepted | revision | review | prep
  publications: [
    // ===== 2026 =====
    {
      status: "published",
      year: "2026",
      title: "Factorial socio-economic and environmental equilibrium analysis of large-scale hydropower toward sustainable development: Evidence from the Xiangjiaba hydropower project, China",
      authors: "<b>N. Wang</b>, G. Huang*, M. Zhai, Y. Liu, L. Lin",
      venue: { en: "Journal of Cleaner Production, 577, 149496", zh: "Journal of Cleaner Production, 577, 149496" },
      note:  { en: "doi:10.1016/j.jclepro.2026.149496", zh: "doi:10.1016/j.jclepro.2026.149496" },
      link:  "https://doi.org/10.1016/j.jclepro.2026.149496",
      tags:  ["CGE", "Factorial design", "Hydropower"]
    },
    {
      status: "published",
      year: "2026",
      title: "Embodied emission linkages and interactions of industrial aquatic heavy metals in the Yangtze River Economic Belt, China: a multi-sector multi-region factorial metabolism analysis",
      authors: "<b>N. Wang</b>, G. Huang*, M. Zhai, Y. Fu, L. Lin, B. Luo",
      venue: { en: "Ecological Indicators, 190, 115428", zh: "Ecological Indicators, 190, 115428" },
      note:  { en: "doi:10.1016/j.ecolind.2026.115428", zh: "doi:10.1016/j.ecolind.2026.115428" },
      link:  "https://doi.org/10.1016/j.ecolind.2026.115428",
      tags:  ["MRIO", "ENA", "Factorial analysis", "K-means"]
    },
    {
      status: "published",
      year: "2026",
      title: "Collaborative governance of carbon mitigation, energy transition, and material management: A factorial non-deterministic carbon-energy-metal nexus optimization model",
      authors: "L. Lin, G. Huang, <b>N. Wang</b>",
      venue: { en: "Applied Energy, 412, 127648", zh: "Applied Energy, 412, 127648" },
      note:  { en: "doi:10.1016/j.apenergy.2026.127648", zh: "doi:10.1016/j.apenergy.2026.127648" },
      link:  "https://doi.org/10.1016/j.apenergy.2026.127648",
      tags:  ["Optimization", "Carbon–energy–metal nexus", "Factorial design"]
    },
    {
      status: "revision",
      year: "2026",
      title: "Assessing the water-energy-environment nexus of multipurpose large-scale hydropower projects: a dynamic function-wise factorial equilibrium analysis model through 2060",
      authors: "<b>N. Wang</b>, G. Huang*, M. Zhai, Y. Liu, L. Lin",
      venue: { en: "Energy", zh: "Energy" },
      note:  { en: "", zh: "" },
      link:  "",
      tags:  ["Dynamic CGE", "WEE nexus", "Hydropower"]
    },
    {
      status: "review",
      year: "2026",
      title: "Analyzing the implications of interprovincial virtual water trade for regional water scarcity in China: an interactive blue-grey virtual water evaluation model",
      authors: "<b>N. Wang</b>, G. Huang*, M. Zhai, Y. Fu, L. Lin, G. Cheng",
      venue: { en: "Journal of Environmental Sciences", zh: "Journal of Environmental Sciences" },
      note:  { en: "", zh: "" },
      link:  "",
      tags:  ["MRIO", "Virtual water", "Water footprint"]
    },
    // ===== 2025 =====
    {
      status: "published",
      year: "2025",
      title: "Development of a factorial hydroengineering equilibrium analysis model for analyzing direct and indirect socio-economic and environmental effects of large-scale hydropower projects",
      authors: "Y. Liu, G. Huang, M. Zhai, <b>N. Wang</b>, X. Zheng, X. Pan",
      venue: { en: "Energy, 333, 137343", zh: "Energy, 333, 137343" },
      note:  { en: "doi:10.1016/j.energy.2025.137343", zh: "doi:10.1016/j.energy.2025.137343" },
      link:  "https://doi.org/10.1016/j.energy.2025.137343",
      tags:  ["CGE", "Factorial design", "Hydropower"]
    },
    {
      status: "published",
      year: "2025",
      title: "Collaborative management for decarbonizing Canada's multi-regional electric power systems by 2050: A factorial non-deterministic multi-stage bi-level programming model",
      authors: "L. Lin, G. Huang, B. Luo, Y. Liu, <b>N. Wang</b>",
      venue: { en: "Energy Conversion and Management, 339, 119975", zh: "Energy Conversion and Management, 339, 119975" },
      note:  { en: "doi:10.1016/j.enconman.2025.119975", zh: "doi:10.1016/j.enconman.2025.119975" },
      link:  "https://doi.org/10.1016/j.enconman.2025.119975",
      tags:  ["Bi-level programming", "Power systems", "Decarbonization"]
    },
    {
      status: "published",
      year: "2025",
      title: "Unveiling long-term indirect socio-economic and environmental effects of large-scale hydropower project",
      authors: "Y. Liu, G. Huang, M. Zhai, <b>N. Wang</b>, Y. Fu, X. Pan",
      venue: { en: "Science of The Total Environment, 959, 178317", zh: "Science of The Total Environment, 959, 178317" },
      note:  { en: "doi:10.1016/j.scitotenv.2024.178317", zh: "doi:10.1016/j.scitotenv.2024.178317" },
      link:  "https://doi.org/10.1016/j.scitotenv.2024.178317",
      tags:  ["Dynamic CGE", "Hydropower"]
    },
    // ===== 2023 =====
    {
      status: "published",
      year: "2023",
      title: "Interval multi-random factorial programming for coupled farmland and water resources management — a case study of Songhua River watershed, China",
      authors: "<b>N. Wang</b>, C.Z. Huang*, M.Y. Zhai, G.H. Cheng, F. Wang, L.J. Lin, B. Luo",
      venue: { en: "Journal of Environmental Informatics Letters, 9(1), 49–59", zh: "Journal of Environmental Informatics Letters, 9(1), 49–59" },
      note:  { en: "doi:10.3808/jeil.202300099", zh: "doi:10.3808/jeil.202300099" },
      link:  "https://doi.org/10.3808/jeil.202300099",
      tags:  ["Interval programming", "Chance constraints", "Factorial design"]
    },
    // ===== 2021 =====
    {
      status: "published",
      year: "2021",
      title: "Characterization of canola growth and in-vivo element fate in Canadian prairie under the interferences of tillage and residue treatment",
      authors: "J. Huang, G. Huang*, X. Xin, D. Halstead, K. Gaetz, L. Benmerrouche, Y. Wu, <b>N. Wang</b>, Y. Fu, J. Zhang",
      venue: { en: "Journal of Cleaner Production, 320, 128707", zh: "Journal of Cleaner Production, 320, 128707" },
      note:  { en: "doi:10.1016/j.jclepro.2021.128707", zh: "doi:10.1016/j.jclepro.2021.128707" },
      link:  "https://doi.org/10.1016/j.jclepro.2021.128707",
      tags:  ["Agriculture", "Field experiment"]
    },
    {
      status: "published",
      year: "2021",
      title: "The optimization of canola crop production through wheat residue management within a Western Canadian context — A case study of Saint-Front, Saskatchewan",
      authors: "X. Xin, G. Huang*, D. Halstead, K. Gaetz, L. Benmerrouche, J. Huang, Y. Wu, J. Zhang, Y. Fu, <b>N. Wang</b>",
      venue: { en: "Sustainability, 13(18), 10459", zh: "Sustainability, 13(18), 10459" },
      note:  { en: "doi:10.3390/su131810459", zh: "doi:10.3390/su131810459" },
      link:  "https://doi.org/10.3390/su131810459",
      tags:  ["Agriculture", "Residue management"]
    },
    // ===== 2020 =====
    {
      status: "published",
      year: "2020",
      title: "Nonstationary regional flood inundation projection under climate change: a case study of Athabasca River Basin, Canada",
      authors: "G. Cheng, G. Huang, F. Wang, <b>N. Wang</b>, J. Zhang, K. Li, C. Dong",
      venue: { en: "AGU Fall Meeting 2020, Abstract H197-0013", zh: "AGU Fall Meeting 2020, 摘要 H197-0013" },
      note:  { en: "Conference abstract", zh: "会议摘要" },
      link:  "",
      tags:  ["Flood", "Climate change", "Hydrology"]
    }
  ],

  // ---------- 在研工作（只列标题，不算发表） ----------
  inProgress: [
    { en: "Multi-regional factorial equilibrium analysis of the long-term socio-economic and environmental effects of China's hydropower expansion",
      zh: "中国水电开发长期社会经济与环境效应的多区域因子均衡分析" },
    { en: "Socio-economic and environmental assessment of hydropower development in the lower Yarlung Tsangpo",
      zh: "雅鲁藏布江下游水利工程社会经济与环境影响分析" },
    { en: "GCAM-based scenario analysis of water–energy pathways (in preparation)",
      zh: "基于 GCAM 的水—能路径情景分析（准备中）" }
  ],

  // ---------- 经历 ----------
  experience: [
    {
      period: "2019.01 – present",
      role:  { en: "Research Assistant", zh: "研究助理" },
      org:   { en: "IEESC, University of Regina", zh: "IEESC，里贾纳大学" },
      desc:  { en: "CGE / MRIO / factorial model development for hydropower, water-transfer and pollutant-flow assessment; manuscript preparation and peer review support.",
               zh: "面向水电、调水与污染物流动评估的 CGE / MRIO / 因子模型开发；论文撰写与审稿支持。" }
    },
    {
      period: "2019.06 – 2019.08",
      role:  { en: "Engineering Intern", zh: "工程实习" },
      org:   { en: "Xiangjiaba Hydropower Station", zh: "向家坝水电站" },
      desc:  { en: "", zh: "" }
    },
    {
      period: "2018.06 – 2018.08",
      role:  { en: "Engineering Intern", zh: "工程实习" },
      org:   { en: "Baojixia Hydropower Station", zh: "宝鸡峡水电站" },
      desc:  { en: "", zh: "" }
    },
    {
      period: "2017.08 – 2018.08",
      role:  { en: "Water Resources Engineer", zh: "水资源工程师" },
      org:   { en: "Water Resources Bureau of Yulin City, Shaanxi", zh: "陕西省榆林市水利局" },
      desc:  { en: "", zh: "" }
    }
  ],

  // ---------- 教育 ----------
  education: [
    {
      period: "2019.01 – present",
      degree: { en: "Ph.D. Candidate, Environmental Systems Engineering", zh: "博士候选人，环境系统工程" },
      org:    { en: "University of Regina, Canada", zh: "里贾纳大学，加拿大" },
      desc:   { en: "Advisor: Prof. Guohe (Gordon) Huang · Expected graduation: December 2026",
                zh: "导师：黄国和（Gordon Huang）教授 · 预计 2026 年 12 月毕业" }
    },
    {
      period: "2013.09 – 2017.06",
      degree: { en: "B.Eng.", zh: "工学学士" },          // 填具体专业，例如 "B.Eng. in Hydrology and Water Resources Engineering"
      org:    { en: "Northwest A&F University, China", zh: "西北农林科技大学" },
      desc:   { en: "", zh: "" }
    }
  ],

  // ---------- 技能 ----------
  skills: [
    { group: { en: "Modelling frameworks", zh: "建模框架" },
      items: ["CGE / DCGE", "MRIO", "GTAP", "GCAM", "Ecological Network Analysis", "Structural Decomposition Analysis", "Factorial Design"] },
    { group: { en: "Software & languages", zh: "软件与语言" },
      items: ["GAMS", "LINGO", "Python", "R", "MATLAB", "ArcGIS / ArcSWAT", "SWAT"] },
    { group: { en: "Domain", zh: "领域" },
      items: ["Hydropower planning", "Water resources allocation", "Virtual water & water footprint", "Heavy-metal emission accounting"] }
  ],

  // ---------- 学术服务 ----------
  service: [
    { en: "Reviewer: Journal of Cleaner Production, Applied Economics, Energy Research, Journal of Flood Risk Management",
      zh: "审稿人：Journal of Cleaner Production、Applied Economics、Energy Research、Journal of Flood Risk Management" },
    { en: "Editorial assistance, Journal of Environmental Informatics Letters (JEIL)",
      zh: "《环境信息学快报》（JEIL）编辑助理" },
    { en: "Teaching assistant, ENEV 803, University of Regina",
      zh: "里贾纳大学 ENEV 803 课程助教" },
    { en: "Engineer-in-Training applicant, APEGS (Saskatchewan)",
      zh: "萨斯喀彻温省工程师协会（APEGS）EIT 在申" }
  ],

  // ---------- 界面文案 ----------
  ui: {
    nav: {
      about:        { en: "About",        zh: "简介" },
      research:     { en: "Research",     zh: "研究" },
      publications: { en: "Publications", zh: "论文" },
      experience:   { en: "Experience",   zh: "经历" },
      education:    { en: "Education",    zh: "教育" },
      skills:       { en: "Skills",       zh: "技能" },
      service:      { en: "Service",      zh: "学术服务" },
      contact:      { en: "Contact",      zh: "联系" }
    },
    inProgress:  { en: "Work in progress", zh: "在研工作" },
    firstAuthor: { en: "First author", zh: "第一作者" },
    stats: {
      publications: { en: "Publications",        zh: "已发表" },
      firstAuthor:  { en: "First-author",        zh: "第一作者" },
      journals:     { en: "Journals",            zh: "期刊" },
      hIndex:       { en: "h-index",             zh: "h 指数" },
      citations:    { en: "Citations",           zh: "引用" }
    },
    downloadCV:  { en: "Download CV", zh: "下载简历" },
    emailMe:     { en: "Email", zh: "邮件" },
    statusLabel: {
      published: { en: "Published",      zh: "已发表" },
      accepted:  { en: "Accepted",       zh: "已接收" },
      revision:  { en: "Major revision", zh: "大修中" },
      review:    { en: "Under review",   zh: "审稿中" },
      prep:      { en: "In preparation", zh: "准备中" }
    },
    footer: { en: "Last updated", zh: "最近更新" }
  },

  lastUpdated: "2026-09-28"
};
