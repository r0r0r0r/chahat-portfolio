export interface EditorialProperty {
  id: string;
  title: string;
  category: 'History & Culture' | 'Brand & Business' | 'News & Current Affairs' | 'Finance & Markets';
  tagline: string;
  description: string;
  focusAreas: string[];
  approach: string;
  badge?: string;
  highlights?: string[];
}

export interface WritingSample {
  id: string;
  category: 'Brand Story' | 'Historical Narrative' | 'News Explainer' | 'Copywriting & Hooks' | 'Finance Context';
  title: string;
  subtitle?: string;
  hook: string;
  excerpt: string;
  keyTakeaway: string;
  readTime: string;
  date?: string;
  imageCover?: string;
  fullBody?: {
    introduction: string;
    keyPoints: { heading: string; text: string }[];
    pullQuote?: string;
    conclusion: string;
  };
}

export interface InstagramChannel {
  name: string;
  handle: string;
  url: string;
  niche: string;
  followers: string;
  totalViews: string;
  avgLikes: string;
  description: string;
  badge: string;
  logoImage?: string;
}

export interface InstagramReel {
  id: string;
  reelId: string;
  url: string;
  embedUrl: string;
  title: string;
  category: 'History & Culture' | 'Brand & Business' | 'News & Current Affairs' | 'Finance & Markets';
  badge: string;
  pageName: string;
  pageHandle: string;
  niche: string;
  views: string;
  likes: string;
  shares?: string;
  hook: string;
  description: string;
  format: string;
  imageCover?: string;
}

export interface VideoScriptHighlight {
  timestamp: string;
  visualCue: string;
  voiceover: string;
}

export interface VideoProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Documentary Video Essay' | 'Brand Story & Breakdown' | 'News & Geopolitics' | 'Short-Form & Reels';
  duration: string;
  format: string;
  hook: string;
  synopsis: string;
  metrics?: string;
  scriptHighlights: VideoScriptHighlight[];
  strategicTakeaway: string;
  badge?: string;
  reelUrl?: string;
}

export interface StrategyQuestion {
  question: string;
  principle: string;
  explanation: string;
  tag?: string;
}

export interface StatMetric {
  value: string;
  label: string;
  detail: string;
}

export interface GrowthMilestone {
  channel: string;
  metric: string;
  timeframe?: string;
  role: string;
  description: string;
}

export interface ResearchConfidenceLevel {
  level: string;
  category: string;
  description: string;
  criteria: string[];
}

export interface DirectorialFilm {
  id: string;
  title: string;
  year: string;
  duration: string;
  role: string;
  genre: string;
  synopsis: string;
  themes: string[];
  vimeoUrl?: string;
  letterboxdUrl?: string;
  badge: string;
  imageCover?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    titles: string[];
    summary: string;
    professionalStrength: string;
    writingStyleSummary: string;
    education: string;
    educationDetail: string;
    location: string;
    timezone: string;
    email: string;
    phone: string;
    phoneRaw: string;
    whatsapp: string;
    status: string;
    mantra: string;
    experienceYears: string;
    professionalIdentityPipeline: string[];
  };
  growthTrackRecord: GrowthMilestone[];
  writingStructureSteps: { step: string; purpose: string; description: string }[];
  viralFactors: string[];
  researchTaxonomy: ResearchConfidenceLevel[];
  academicPhilosophy: {
    approach: string;
    topics: string[];
    principle: string;
  };
  stats: StatMetric[];
  socials: {
    label: string;
    url: string;
    handle: string;
  }[];
  directorialFilms: DirectorialFilm[];
  instagramChannels: InstagramChannel[];
  pillars: {
    title: string;
    tagline: string;
    description: string;
    icon: string;
    detailPillars?: string[];
  }[];
  contentApproach: {
    level: string;
    title: string;
    description: string;
    bullets: string[];
  }[];
  experience: {
    role: string;
    organization: string;
    duration: string;
    description: string;
    learnings: string[];
    highlights: string[];
  }[];
  editorialProperties: EditorialProperty[];
  coreSkills: {
    name: string;
    description: string;
    type: 'Writing' | 'Strategy' | 'Research';
    tags?: string[];
  }[];
  strategyQuestions: StrategyQuestion[];
  pipeline: {
    step: string;
    description: string;
  }[];
  writingSamples: WritingSample[];
  reels: InstagramReel[];
  videoProjects: VideoProject[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Chahat Singh",
    titles: [
      "Filmmaker",
      "Screenwriter",
      "Content Writer",
      "Researcher",
      "Content Strategist",
      "Copywriter"
    ],
    summary: "I am a filmmaker and writer with a strong focus on research-driven storytelling, digital content, documentaries, history, current affairs, business, cinema, and analytical writing. My work combines research, writing, audience understanding, and storytelling to turn complex information into content that is simple, engaging, and easy to understand.",
    professionalStrength: "My core strength is understanding a subject deeply before turning it into content. I research the background, facts, timeline, people involved, causes, consequences, and larger context, then structure the information around what the audience actually needs to know. I work particularly well with content where the audience wants to understand what happened, why it happened, how it happened, and what it means. My approach is not simply to collect information—I build a narrative around the information so that every point naturally leads to the next.",
    writingStyleSummary: "My writing is designed primarily for the audience, not for the writer. I prefer simple, natural language while keeping the underlying research strong. I avoid unnecessary complexity, artificial vocabulary, repetitive sentences, and information that does not contribute to the story. My strongest principle is causal continuity: one sentence should give the audience a reason to listen to the next sentence.",
    education: "BMM Graduate | Mass Media",
    educationDetail: "BMM Graduate in Mass Media with a strong foundation in communication theory, digital journalism, filmmaking, screenwriting, research, and audience storytelling.",
    intellectualFocus: "Writer and researcher with a personal interest in philosophy, Indian philosophy, analytical logic, and mathematics. I enjoy reading books and writing philosophical notes.",
    location: "Mumbai, India (Working Globally)",
    timezone: "Asia/Kolkata",
    email: "Singhchahat89@gmail.com",
    phone: "+91 74003 98301",
    phoneRaw: "+917400398301",
    whatsapp: "https://wa.me/917400398301",
    status: "Available for Filmmaking, Screenwriting, Research & Content Strategy",
    mantra: "I write to understand deeply, question honestly, and turn complexity into something clear enough to be felt.",
    mantraAlt: "I write to understand deeply, question honestly, and make complex ideas clear.",
    experienceYears: "BMM Graduate | Editorial & Research Trained",
    professionalIdentityPipeline: [
      "Research",
      "Fact Checking",
      "Angle Selection",
      "Narrative Structure",
      "Scriptwriting",
      "Audience Strategy",
      "Short-Form Execution"
    ]
  },
  growthTrackRecord: [
    {
      channel: "@westbengal",
      metric: "626K Followers",
      timeframe: "Page Revitalization",
      role: "State News & Sunday Feature Researcher",
      description: "Revitalized an inactive 626K follower page by instituting consistent daily Top 5 news updates and a dedicated Sunday video essay exploring fascinating historical and cultural topics from West Bengal."
    },
    {
      channel: "@kolkata",
      metric: "599K Followers",
      timeframe: "Daily News & Culture",
      role: "Daily Top 5 News & Bengal Culture Researcher",
      description: "Covering the daily top five news stories through detailed research and scriptwriting, alongside deep explorations of Bengal's history, philosophy, literature, art, culture, and iconic personalities."
    },
    {
      channel: "@tamilnadu",
      metric: "533K Followers",
      timeframe: "Regional & Cultural Authority",
      role: "Tamil Nadu Research & Cultural Storyteller",
      description: "Research-based content on Tamil Nadu politics, history, literature, cinema, temples, religion, art, culture, and society—simplifying complex topics and connecting audiences with their cultural identity."
    },
    {
      channel: "@bombay",
      metric: "150K Followers",
      timeframe: "in 1 Month",
      role: "Daily Mumbai News Researcher",
      description: "At @bombay, I research and provide daily important Mumbai news, covering major incidents, events, developments, and stories from across the city."
    },
    {
      channel: "@financelast24hr",
      metric: "100K+ Followers",
      timeframe: "in 1 Month",
      role: "Daily Top 5 Finance Researcher",
      description: "At @financelast24hr, I research and provide the daily Top 5 important finance news covering major market, business, and economic updates."
    },
    {
      channel: "@indiainlast24hr",
      metric: "3D Visual Breakdowns",
      timeframe: "Investigative Research",
      role: "3D Incident & Investigative Researcher",
      description: "Researcher at @indiainlast24hr, creating detailed 3D incident breakdowns that explain how crimes, murders, and major events happened, step by step."
    },
    {
      channel: "@Bollywood",
      metric: "67K+ Followers",
      timeframe: "in 3 Weeks",
      role: "Content Writer & Cinema Storyteller",
      description: "Crafting cinema narratives, director profiles, and high-retention entertainment storytelling driving viral organic reach."
    },
    {
      channel: "@Rajasthan",
      metric: "Regional Authority",
      timeframe: "Heritage & Daily News",
      role: "Regional Researcher & Analyst",
      description: "At @Rajasthan, I uncover the stories behind Rajasthan through history, daily news, data, facts, and detailed research."
    },
    {
      channel: "@Mewar",
      metric: "50K Followers",
      timeframe: "Historical Authority",
      role: "Mewar History & Archival Researcher",
      description: "At @Mewar, I research Mewar history, current updates, data, numbers, and analysis in depth."
    },
    {
      channel: "@Brands",
      metric: "Business Case Studies",
      timeframe: "Corporate Strategy",
      role: "Business Storyteller",
      description: "Research-driven business and brand storytelling covering companies, founders, biographies, business journeys, marketing strategies, and product moats."
    }
  ],
  writingStructureSteps: [
    { step: "01. Hook", purpose: "Immediate Attention", description: "A strong, undeniable reason to care within the opening 3 seconds." },
    { step: "02. Context", purpose: "Setting the Stage", description: "Background timeline, stakes, and the larger environment." },
    { step: "03. Development", purpose: "Narrative Momentum", description: "Causal continuity where each point naturally leads into the next." },
    { step: "04. Explanation", purpose: "Clarity & Simplicity", description: "Unpacking what happened, why it happened, and how it happened." },
    { step: "05. Unexpected Detail", purpose: "Retention Spike", description: "Underreported facts, human stakes, or counter-intuitive contradictions." },
    { step: "06. Payoff", purpose: "Satisfying Ending", description: "A meaningful synthesis rather than an artificial punchline." }
  ],
  viralFactors: [
    "A strong and immediate reason to care",
    "Contradictions and unexpected information",
    "Underreported facts & historical evidence",
    "Human stakes & emotional motivation",
    "Curiosity created by the subject itself",
    "Clear and simple explanations with zero fluff",
    "Strong narrative progression & causal continuity",
    "Information that gives the viewer something worth knowing",
    "A satisfying ending rather than an artificial punchline"
  ],
  researchTaxonomy: [
    {
      level: "Level 1",
      category: "Established Facts",
      description: "Primary documentary evidence, physical records, legal archives, and verified timestamps.",
      criteria: ["Official government gazettes", "Judicial case records", "Institutional archaeological data"]
    },
    {
      level: "Level 2",
      category: "Scholarly Interpretations",
      description: "Peer-reviewed historiography and economic consensus from recognized institutions.",
      criteria: ["Academic journal papers", "Monographs by university presses", "Cross-verified economic indices"]
    },
    {
      level: "Level 3",
      category: "Traditional & Institutional Accounts",
      description: "Regional chronicles, temple records, and verified institutional archives.",
      criteria: ["Persian manuscripts (Al-Badaoni)", "Mewar court chronicles", "Regional trade registers"]
    },
    {
      level: "Level 4",
      category: "Literary & Bardic Sources",
      description: "Historical poetry, epic ballads, and oral folklore contextualized with critical analysis.",
      criteria: ["Bardic ballads (Kharita)", "Regional Rajasthani poetry", "Oral community genealogies"]
    },
    {
      level: "Level 5",
      category: "Legends & Claims Requiring Verification",
      description: "Popular cultural myths strictly distinguished from defensible historical record.",
      criteria: ["Separating bardic exaggeration from logistics", "Explicitly flagging unverified claims"]
    }
  ],
  academicPhilosophy: {
    approach: "Contemporary Analytical Precision & Classical Thought",
    principle: "Examine an argument at its strongest form before criticizing. Separate assumptions from conclusions, evaluate logical validity, and verify whether the deduction actually follows from the premises.",
    topics: [
      "Indian Philosophy & Classical Darshanas",
      "Analytical Logic & Formal Deduction",
      "Mathematics & Conceptual Foundations",
      "Epistemology & Theories of Knowledge",
      "Metaphysics & Consciousness",
      "Book Reading & Archival Philosophical Notes"
    ]
  },
  stats: [
    { value: "626K", label: "West Bengal Channel", detail: "Daily News & Sunday Documentaries (@westbengal)" },
    { value: "599K", label: "Kolkata Channel", detail: "Daily Top 5 News & Bengal Culture (@kolkata)" },
    { value: "533K", label: "Tamil Nadu Channel", detail: "History, Politics & Culture (@tamilnadu)" },
    { value: "150K", label: "Bombay News Channel", detail: "Reached in 1 Month (@bombay)" },
    { value: "100K+", label: "Finance News Channel", detail: "Reached in 1 Month (@financelast24hr)" },
    { value: "67K+", label: "Bollywood Growth", detail: "Reached in 3 Weeks (@Bollywood)" }
  ],
  socials: [
    { label: "Email", url: "mailto:Singhchahat89@gmail.com", handle: "Singhchahat89@gmail.com" },
    { label: "Phone / WhatsApp", url: "https://wa.me/917400398301", handle: "+91 74003 98301" },
    { label: "Letterboxd", url: "https://boxd.it/4hAfn", handle: "boxd.it/4hAfn" },
    { label: "Vimeo", url: "https://vimeo.com/user214567561?fl=pp&fe=sh", handle: "vimeo.com/chahatsingh" },
    { label: "Instagram", url: "https://www.instagram.com/chahatnotebook?stkn=aHl1bWRlNWw4aW1j", handle: "@chahatnotebook" },
    { label: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/chahat-singh" }
  ],
  directorialFilms: [
    {
      id: "cycle-of-youth",
      title: "Cycle of Youth",
      year: "2024",
      duration: "15 min",
      role: "Written & Directed by Chahat Singh",
      genre: "Coming-of-Age / Poetic Realism",
      synopsis: "A 15-minute narrative short film exploring adolescence through the daily life, internal emotional rhythm, and poetic perspective of a teenager.",
      themes: ["Adolescence", "Poetic Perspective", "Daily Life", "Coming-of-Age Realism"],
      vimeoUrl: "https://vimeo.com/user214567561?fl=pp&fe=sh",
      letterboxdUrl: "https://boxd.it/4hAfn",
      badge: "Narrative Short // Written & Directed",
      imageCover: "/assets/images/david_lynch_coffee.jpg"
    },
    {
      id: "the-abyss-of-shadows",
      title: "The Abyss of Shadows",
      year: "2024",
      duration: "5 min",
      role: "Written & Directed by Chahat Singh",
      genre: "Psychological Surrealism / Thriller",
      synopsis: "A 5-minute psychological short exploring sleep paralysis, vivid hallucinations, and the fragile, blurred line between reality and delusion.",
      themes: ["Sleep Paralysis", "Psychological Surrealism", "Hallucinations", "Reality vs Delusion"],
      vimeoUrl: "https://vimeo.com/user214567561?fl=pp&fe=sh",
      letterboxdUrl: "https://boxd.it/4hAfn",
      badge: "Psychological Short // Written & Directed",
      imageCover: "/assets/images/hero_monograph_art.jpg"
    }
  ],
  instagramChannels: [
    {
      name: "West Bengal",
      handle: "@westbengal",
      url: "https://www.instagram.com/westbengal?stkn=ZWJldWlnczJ0c3o4",
      niche: "Daily Top 5 State News & Sunday Documentaries",
      followers: "626K",
      totalViews: "18.5M+",
      avgLikes: "36.8K+",
      description: "Revitalized a previously inactive state page with daily Top 5 news updates through detailed research and scriptwriting. Every Sunday, I create a dedicated video exploring fascinating topics from West Bengal, establishing high consistency and engagement.",
      badge: "626K Followers",
      logoImage: "/assets/images/logo_westbengal.png"
    },
    {
      name: "Kolkata",
      handle: "@kolkata",
      url: "https://www.instagram.com/kolkata?stkn=eTdhejNwYjF1OWlh",
      niche: "Daily Top 5 News, Bengal History, Philosophy & Art",
      followers: "599K",
      totalViews: "15.2M+",
      avgLikes: "32.4K+",
      description: "Covering the daily top five news stories through detailed research and scriptwriting. Alongside current affairs, I work extensively on Bengal's history, philosophy, literature, art, culture, famous personalities, and major events to create informative, engaging content.",
      badge: "599K Followers",
      logoImage: "/assets/images/logo_kolkata.png"
    },
    {
      name: "Tamil Nadu",
      handle: "@tamilnadu",
      url: "https://www.instagram.com/tamilnadu?stkn=dGEybTM1NWY4aXR0",
      niche: "Politics, History, Literature, Temples & Culture",
      followers: "533K",
      totalViews: "14.8M+",
      avgLikes: "28.5K+",
      description: "Research-based content across Tamil Nadu politics, history, literature, cinema, temples, religion, art, culture, and society. I simplify complex topics so Tamil audiences can understand their history, present issues, and cultural identity.",
      badge: "533K Followers",
      logoImage: "/assets/images/logo_tamilnadu.png"
    },
    {
      name: "Bombay",
      handle: "@bombay",
      url: "https://www.instagram.com/bombay?stkn=bDdrNDJrY2VkejZo",
      niche: "Daily Mumbai News, Incidents & City Developments",
      followers: "150K",
      totalViews: "8.5M+",
      avgLikes: "22.4K+",
      description: "At @bombay, I research and provide daily important Mumbai news, covering major incidents, events, developments, and stories from across the city. Grew to 150K followers in one month.",
      badge: "150K in 1 Month",
      logoImage: "/assets/images/logo_bombay.png"
    },
    {
      name: "FinanceLast24hr",
      handle: "@financelast24hr",
      url: "https://www.instagram.com/financelast24hr?stkn=bHZyZG1wYXp4MHZ3",
      niche: "Daily Top 5 Finance News & Economic Updates",
      followers: "100K+",
      totalViews: "5.4M+",
      avgLikes: "14.2K+",
      description: "At @financelast24hr, I research and provide the daily Top 5 important finance news covering major market, business, and economic updates. Grew to 100K+ followers in one month.",
      badge: "100K+ in 1 Month",
      logoImage: "/assets/images/logo_financelast24hr.png"
    },
    {
      name: "India in Last 24hr",
      handle: "@indiainlast24hr",
      url: "https://www.instagram.com/indiainlast24hr?stkn=amV5ZXFoMXpzZDMw",
      niche: "3D Incident Breakdowns & Investigative Timelines",
      followers: "85K+",
      totalViews: "4.2M+",
      avgLikes: "8.4K+",
      description: "Researcher at @indiainlast24hr, creating detailed 3D incident breakdowns that explain how crimes, murders, and major events happened, step by step.",
      badge: "3D Incident Breakdowns",
      logoImage: "/assets/images/logo_indiainlast24hr.png"
    },
    {
      name: "Bollywood",
      handle: "@Bollywood",
      url: "https://www.instagram.com",
      niche: "Cinema Storytelling & Industry Narratives",
      followers: "67K+",
      totalViews: "3.6M+",
      avgLikes: "16.8K+",
      description: "Former content writer. Contributed to the page's high-velocity content and growth, helping it reach 67K+ followers in three weeks.",
      badge: "67K in 3 Wks",
      logoImage: "/assets/images/logo_bollywood.png"
    },
    {
      name: "Rajasthan",
      handle: "@Rajasthan",
      url: "https://www.instagram.com/rajasthan?stkn=MXd4MnVrcm9wcHFleA==",
      niche: "History, Daily News, Data & Detailed Research",
      followers: "62K+",
      totalViews: "3.1M+",
      avgLikes: "12.5K+",
      description: "At @Rajasthan, I uncover the stories behind Rajasthan through history, daily news, data, facts, and detailed research.",
      badge: "History & Daily News",
      logoImage: "/assets/images/logo_rajasthan.png"
    },
    {
      name: "Mewar",
      handle: "@Mewar",
      url: "https://www.instagram.com/mewar?stkn=MThlcmlvNnA1Y3NjbA==",
      niche: "Regional History, Battles, Institutions & Data",
      followers: "50K",
      totalViews: "2.8M+",
      avgLikes: "14.2K+",
      description: "At @Mewar, I research Mewar history, current updates, data, numbers, and analysis in depth. Grew to 50K followers through historical content.",
      badge: "50K Followers",
      logoImage: "/assets/images/logo_mewar.png"
    },
    {
      name: "Brands",
      handle: "@Brands",
      url: "https://www.instagram.com",
      niche: "Business Journeys, Marketing Strategies & Moats",
      followers: "45K+",
      totalViews: "2.2M+",
      avgLikes: "6.8K+",
      description: "Research-driven business and brand storytelling covering companies, founders, biographies, business journeys, marketing strategies, and product moats.",
      badge: "Brand Strategy",
      logoImage: "/assets/images/logo_brands.png"
    }
  ],
  pillars: [
    {
      title: "Accuracy",
      tagline: "Researched & factually defensible",
      description: "Every claim, date, number, and narrative is rooted in rigorous information gathering and fact verification. No manufactured sensationalism or shallow assumptions.",
      icon: "check",
      detailPillars: ["Primary document verification", "Cross-checked statistical claims", "Archival historical integrity"]
    },
    {
      title: "Clarity",
      tagline: "Accessible without losing depth",
      description: "Complex ideas, historical chronologies, and economic shifts are explained with crisp syntax and zero unnecessary jargon. If an intelligent 16-year-old can't follow it, it gets rewritten.",
      icon: "zap",
      detailPillars: ["Zero cognitive friction", "Active voice & dynamic pacing", "Modular conceptual breakdown"]
    },
    {
      title: "Attention",
      tagline: "Relevance that earns readership",
      description: "Even the most accurate information fails if the audience has no reason to care. I craft magnetic openings, logical tension, and compelling hooks that retain reader focus to the last word.",
      icon: "sparkles",
      detailPillars: ["High-retention lead sentences", "Psychological curiosity loops", "High-signal conclusions"]
    }
  ],
  contentApproach: [
    {
      level: "Level 01",
      title: "Deep Archival & Market Research",
      description: "Deep dive into archives, financial filings, primary documents, and breaking news feeds before putting a single word to paper.",
      bullets: [
        "Understanding subject nuances & socio-political context",
        "Fact verification across multiple authoritative records",
        "Filtering noise to extract high-value narrative insights"
      ]
    },
    {
      level: "Level 02",
      title: "Editorial Architecture & Drafting",
      description: "Transforming verified research into structured, readable prose with rhythmic pacing, strong tension, and zero fluff.",
      bullets: [
        "Crafting high-retention opening hooks and headlines",
        "Building logical narrative progression and paragraph transitions",
        "Pacing information delivery for maximum readability"
      ]
    },
    {
      level: "Level 03",
      title: "Strategic Positioning & Distribution",
      description: "Aligning the content format, tone, and audience intent for maximum engagement and lasting impact.",
      bullets: [
        "Identifying repeatable, defensible content pillars",
        "Selecting optimal formats (Short-form vs Deep-dive essays)",
        "Positioning stories for attention, resonance, and shareability"
      ]
    }
  ],
  experience: [
    {
      role: "Content Writer & Researcher",
      organization: "See Media News",
      duration: "6 Months Newsroom Cadence",
      description: "Gained hands-on newsroom experience in rapid-turnaround digital news content creation, deep editorial research, and documentary-style storytelling for high-traffic digital audiences.",
      learnings: [
        "Fast-paced news research and rigorous information prioritization under tight daily deadlines",
        "Crafting compelling headlines, high-retention angles, and social hooks that drive organic reach",
        "Editorial and documentary-style story structuring balancing brevity with deep context",
        "Distilling breaking national & regional developments into clear, factual explainers"
      ],
      highlights: [
        "Rapid turnaround desk workflow",
        "Fact verification standard operating procedures",
        "Audience retention optimization"
      ]
    }
  ],
  editorialProperties: [
    {
      id: "westbengal",
      title: "West Bengal State News & Sunday Specials",
      category: "News & Current Affairs",
      tagline: "Daily Top 5 News & Dedicated Sunday Video Explorations",
      description: "Revitalized a previously inactive 626K follower page by delivering daily Top 5 news updates through detailed research and scriptwriting, accompanied by a dedicated weekly Sunday documentary exploring fascinating cultural and historical stories from West Bengal.",
      focusAreas: ["Daily Top 5 State News", "Sunday Video Documentaries", "Regional Socio-Economics", "State Infrastructure & Heritage"],
      approach: "Rigorous daily news curation balancing speed with depth, anchored by weekly investigative long-form video features.",
      badge: "626K Community",
      highlights: ["Daily Top 5 state news", "Sunday deep-dive documentaries", "Revitalized audience engagement"]
    },
    {
      id: "kolkata",
      title: "Kolkata Daily Top 5 & Bengal Renaissance",
      category: "History & Culture",
      tagline: "Daily Top 5 News, Literature, Philosophy & Cultural Milestones",
      description: "Covering the daily top five news stories through detailed research and scriptwriting. Alongside current affairs, extensive focus on Bengal's history, philosophy, literature, art, culture, famous personalities, and major events to create informative, engaging content.",
      focusAreas: ["Daily Top 5 City News", "Bengal Philosophy & Thinkers", "Literature & Modern Art", "Major Historical Events"],
      approach: "Synthesizing fast-breaking daily news scripts with rich intellectual monographs on Bengal's cultural and literary masters.",
      badge: "599K Community",
      highlights: ["Daily top 5 news scripts", "19th century intellectual renaissance", "Tagore, Ray & philosophical movements"]
    },
    {
      id: "tamilnadu",
      title: "Tamil Nadu Heritage, Politics & Culture",
      category: "History & Culture",
      tagline: "Temples, Literature, Dravidian Politics & Cultural Identity",
      description: "A research-based property utilizing in-depth knowledge of politics, history, literature, cinema, temples, religion, art, culture, and society. Simplifying complex topics so audiences can understand their history, present issues, and cultural identity.",
      focusAreas: ["Temple Architecture & Religion", "Dravidian Politics & Society", "Sangam & Modern Literature", "Cinema & Cultural Identity"],
      approach: "Simplifying complex historical, political, and cultural topics so audiences can connect with their roots and modern issues.",
      badge: "533K Community",
      highlights: ["Temple architecture engineering", "Dravidian socio-political movements", "Sangam literature & modern cinema"]
    },
    {
      id: "bombay",
      title: "Bombay / Mumbai Chronicles",
      category: "History & Culture",
      tagline: "The Metamorphosis of India's Financial & Cultural Epicenter",
      description: "A regional content project exploring Bombay's evolution—its freedom movement, textile mill history, architectural heritage, political turning points, and cultural fabric.",
      focusAreas: ["Freedom Struggle", "Colonial & Modern Architecture", "Maritime & Trade History", "Cultural Identity"],
      approach: "Combining archival historical research with short-form visual storytelling designed for modern social media audiences.",
      badge: "Regional History",
      highlights: ["Textile mill labor movements", "Victorian Gothic & Art Deco architecture", "Port city commercial roots"]
    },
    {
      id: "rajasthan",
      title: "Rajasthan Heritage & Statecraft",
      category: "History & Culture",
      tagline: "Kingdoms, Fortresses, and Cultural Legacy",
      description: "A comprehensive regional history and news-focused project covering Rajasthan's dynasties, legendary desert cities, architecture, folklore, and contemporary politics.",
      focusAreas: ["Dynastic Chronologies", "Fortress Architecture", "Desert Trade Routes", "Contemporary State Politics"],
      approach: "Making historical chronicles accessible through concise, narrative-driven content with high visual and textual rhythm.",
      badge: "Regional History",
      highlights: ["Hill forts defensive engineering", "Marwar & Mewar political alliances", "Modern desert water management"]
    },
    {
      id: "mewar",
      title: "Mewar Chronicles",
      category: "History & Culture",
      tagline: "The Unbroken Resistance & Architectural Heritage of Mewar",
      description: "A specialized historical deep-dive into the history of Mewar—its rulers, key battles, political diplomacy, alliances, and timeless historical legacy.",
      focusAreas: ["Battle Strategies & Geography", "Lineage & Continuity", "Maharana Pratap Era", "Archival Documentation"],
      approach: "Prioritizing strict chronology, archival accuracy, documentary-style writing, and unbiased historical analysis.",
      badge: "Deep Archival",
      highlights: ["Haldighati mountain warfare", "Chittorgarh fort sieges", "Diplomatic resistance chronicles"]
    },
    {
      id: "brand",
      title: "Brand & Business Case Studies",
      category: "Brand & Business",
      tagline: "How Iconic Indian Companies & Consumer Brands Were Built",
      description: "In-depth examinations of consumer psychology, product-market fit, distribution moats, and marketing campaigns across leading Indian enterprises.",
      focusAreas: ["Haldiram's Supply Chain & Distribution", "Consumer Psychology", "Advertising Breakdowns", "D2C vs Traditional FMCG"],
      approach: "Deconstructing corporate strategy into engaging, story-driven case studies that explain why ordinary products become household titans.",
      badge: "Business Strategy",
      highlights: ["Haldiram's distribution network", "Titan's design-led consumer trust", "Amul's cooperative supply fortress"]
    },
    {
      id: "india24",
      title: "IndiaLast24hr",
      category: "News & Current Affairs",
      tagline: "Rapid-Turnaround National News & Policy Explainers",
      description: "A real-time current affairs stream capturing significant political, socio-economic, infrastructural, and regional developments across India.",
      focusAreas: ["National Policy", "Judicial Verdicts", "Infrastructure Projects", "Regional Elections"],
      approach: "Quickly extracting the core factual development, contextualizing its implications, and presenting it in clean, bullet-proof summaries.",
      badge: "Newsroom Fast",
      highlights: ["Express policy summaries", "Judicial landmark analyses", "National infra corridors tracking"]
    },
    {
      id: "finance24",
      title: "FinanceLast24hr",
      category: "Finance & Markets",
      tagline: "Financial News & Macroeconomics Demystified",
      description: "A financial news stream covering market movements, central bank interest rate policies, currency shifts, corporate earnings, and global trade flows.",
      focusAreas: ["Stock Market Moves", "RBI Monetary Policies", "Corporate Mergers & Acquisitions", "Global Inflation & Oil"],
      approach: "Making complex financial mechanisms and balance sheets intuitive to read without dumbing down the crucial economic context.",
      badge: "Market Context",
      highlights: ["RBI monetary policy rate impact", "Foreign institutional capital flows", "Commodity cycles & currency stability"]
    },
    {
      id: "maharashtra",
      title: "Maharashtra Governance & Heritage",
      category: "History & Culture",
      tagline: "Power Centers, Maritime Forts, and Modern Governance",
      description: "Analysis of Maharashtra's historical empires, state formation, regional economic corridors, and dynamic political landscape.",
      focusAreas: ["Maratha History", "Western Ghats Forts", "State Politics", "Economic Centers"],
      approach: "Documentary-style breakdowns connecting historical milestones with contemporary developments.",
      badge: "Regional Analysis",
      highlights: ["Shivaji Maharaj's naval strategy", "Industrial corridor expansion", "Western Ghats fortress network"]
    }
  ],
  coreSkills: [
    {
      name: "Long-Form Content & Essays",
      description: "Research-based, highly engaging long-form articles and multi-part documentary series across history, business, and current affairs.",
      type: "Writing",
      tags: ["Essays", "Deep Dives", "Documentary Style"]
    },
    {
      name: "High-Retention Copy & Hooks",
      description: "Attention-grabbing hooks, compelling headlines, social copy, brand narratives, and value propositions designed to capture attention in 3 seconds.",
      type: "Writing",
      tags: ["Hooks", "Social Copy", "Headlines"]
    },
    {
      name: "Academic & Analytical Research",
      description: "Rigorous information synthesis, primary archive analysis, financial report reading, and factually defensible argumentation.",
      type: "Research",
      tags: ["Primary Sources", "Data Synthesis", "Fact Verification"]
    },
    {
      name: "News & Policy Explainers",
      description: "Concise, factual news explainers with clear chronological context, policy implications, and zero filler under tight turnaround times.",
      type: "Writing",
      tags: ["Breaking News", "Policy Briefs", "Fast Cadence"]
    },
    {
      name: "Historical & Narrative Storytelling",
      description: "Translating dry dates, treaties, and battles into cinematic, character-driven prose that makes history exciting for contemporary readers.",
      type: "Writing",
      tags: ["Historical Context", "Regional Heritage", "Archival"]
    },
    {
      name: "Brand & Business Case Studies",
      description: "Unpacking consumer psychology, unit economics, supply chains, and positioning strategies in crisp, enjoyable prose.",
      type: "Strategy",
      tags: ["Unit Economics", "Consumer Psychology", "Brand Moats"]
    },
    {
      name: "Content Strategy & Editorial Planning",
      description: "Audience persona mapping, repeatable editorial pillars, distribution channel selection, and readership retention loops.",
      type: "Strategy",
      tags: ["Editorial Calenders", "Audience Personas", "Retention Loops"]
    }
  ],
  strategyQuestions: [
    {
      question: "What is the audience actually interested in?",
      principle: "Interest over Raw Information",
      explanation: "A topic can be factually monumental, but it fails if there is no immediate reason for the audience to care. I identify the core psychological or practical trigger first.",
      tag: "Audience Psychology"
    },
    {
      question: "What is the single strongest angle?",
      principle: "Specificity over Broad Topics",
      explanation: "Instead of treating a subject as a generic topic (e.g. 'Haldiram history'), I find the specific contradiction or counter-intuitive decision that drives the story.",
      tag: "Narrative Angle"
    },
    {
      question: "What format suits the subject best?",
      principle: "Form Follows Substance",
      explanation: "A historical war chronicle needs a chronological documentary style. A business case study needs a problem-solution framework. Breaking news needs speed and zero fluff.",
      tag: "Format Architecture"
    },
    {
      question: "What must the opening 3 lines accomplish?",
      principle: "The 3-Second Retention Rule",
      explanation: "The opening must establish immediate stakes, introduce narrative tension, and give the reader a compelling reason to commit their time.",
      tag: "Hook Engineering"
    },
    {
      question: "How does information flow seamlessly?",
      principle: "Logical Narrative Momentum",
      explanation: "Content must not be a disconnected stack of facts. Each paragraph should resolve a question while raising the next natural question in the reader's mind.",
      tag: "Structural Rhythm"
    },
    {
      question: "What can be ruthlessly eliminated?",
      principle: "Subtractive Craftsmanship",
      explanation: "Great writing is defined by what is cut. Removing repetition, weak tangents, and generic adjectives strengthens the core message exponentially.",
      tag: "Editorial Polish"
    }
  ],
  pipeline: [
    { step: "Deep Research", description: "Primary source verification, archival excavation, and data gathering" },
    { step: "Angle Selection", description: "Isolating the counter-intuitive hook and narrative core" },
    { step: "Structural Blueprint", description: "Logical outline, tension points, and key takeaways" },
    { step: "Drafting & Hooks", description: "High-cadence prose with rhythmic sentence variations" },
    { step: "Ruthless Subtraction", description: "Cutting 20% of filler, sharpening syntax, and fact-checking" },
    { step: "Strategic Distribution", description: "Formatting for channel-specific engagement and retention" }
  ],
  writingSamples: [
    {
      id: "sample-1",
      category: "Brand Story",
      title: "How Haldiram Built a ₹9,000 Cr Empire Without Fancy Marketing",
      subtitle: "The unyielding distribution moats behind India's undisputed snack king",
      imageCover: "/assets/images/essay_haldiram_art.jpg",
      hook: "In 1937, a young boy in Bikaner started selling bhujia for 2 paise per kilo. Today, Haldiram sells more snacks than McDonald's and Domino's combined in India.",
      excerpt: "The secret was never massive celebrity TV endorsements. It was three unyielding moats: relentless shelf-life freshness control, hyper-localized spice profiles, and an airtight distributor credit network that modern VC-backed D2C brands still struggle to replicate...",
      keyTakeaway: "Distribution moats and uncompromised product consistency beat aggressive ad spend in consumer goods every single time.",
      readTime: "3 min read",
      date: "Brand Analysis",
      fullBody: {
        introduction: "When venture capitalists analyze India's packaged food market, they look for viral marketing campaigns, digital-first acquisition channels, and aggressive discounting. Yet, the brand that commands the largest share of Indian snack plates—generating over ₹9,000 Crore annually—achieved dominance with virtually zero traditional celebrity advertising.",
        keyPoints: [
          {
            heading: "1. The Freshness Moat in a Perishable Category",
            text: "Haldiram engineered decentralized manufacturing hubs around Nagpur, Delhi, and Bikaner. By minimizing transit distance from fry vats to kirana shelves, they guaranteed a crispness that imported or centralized competitors could never match."
          },
          {
            heading: "2. The Distributor Credit Fortress",
            text: "While multinational conglomerates offered 30-to-40-day credit windows to retailers, Haldiram built such intense end-consumer demand that store owners paid cash upfront. This inverted working capital cycle funded rapid organic factory expansion without reliance on debt."
          },
          {
            heading: "3. Hyper-Localized Flavor Profiles",
            text: "Instead of standardizing taste nationwide, Haldiram formulated distinct regional spice blends—sweeter in the West, sharper in the North, and hotter in the Central belt. They respected local culinary identity instead of forcing a monolithic product."
          }
        ],
        pullQuote: "“In consumer products, consumer habit is the ultimate fortress. Win the kirana counter, and the balance sheet takes care of itself.”",
        conclusion: "Haldiram's story is a masterclass in operational discipline over marketing hype. For modern brand builders, it proves that when the product distribution engine is flawless, the consumer becomes your most loyal distribution channel."
      }
    },
    {
      id: "sample-2",
      category: "Historical Narrative",
      title: "The Battle of Haldighati: Beyond the Popular Myths",
      subtitle: "How topographical weaponization neutralized a 4-to-1 numerical disadvantage",
      imageCover: "/assets/images/essay_rajasthan_art.jpg",
      hook: "Most textbooks describe Haldighati as a four-hour clash in June 1576. But the real strategic battle was decided in the narrow mountain passes weeks before a single arrow was fired.",
      excerpt: "When Maharana Pratap chose the narrow yellow-soil pass of Haldighati—where only one horseman could navigate at a time—he effectively neutralized the Mughal cavalry's numerical superiority of 4 to 1. Archival records reveal how geography was weaponized...",
      keyTakeaway: "Strategic geography and asymmetrical defense can neutralize overwhelming numerical advantages.",
      readTime: "4 min read",
      date: "Archival History",
      fullBody: {
        introduction: "Popular retellings of Haldighati often reduce the historic 1576 encounter to a brief heroic stand. However, military archival manuscripts and regional Persian accounts (such as Al-Badaoni's Muntakhab-ut-Tawarikh) reveal a calculated doctrine of asymmetrical mountain warfare that changed how regional empires defended against imperial expansion.",
        keyPoints: [
          {
            heading: "1. The Geometry of the Pass",
            text: "The pass of Haldighati in the Aravalli range was so constricted that a large army was forced to march in single-file columns. By forcing imperial forces into this natural funnel, Mewar's forces eliminated the Mughal army's ability to execute their signature flanking maneuver (the Tulughma)."
          },
          {
            heading: "2. The Indigenous Alliance",
            text: "Pratap integrated local Bhil archers positioned on surrounding crags. Utilizing composite bows crafted from native bamboo, these archers unleashed continuous plunging fire from elevated angles that imperial shields were unable to deflect."
          },
          {
            heading: "3. The War of Attrition & Scorched Earth",
            text: "Recognizing that open plains favoured heavy artillery, Mewar adopted scorched-earth tactics in the foothills, denying forage to imperial horses and stretching imperial supply chains to breaking point throughout the scorching Rajasthani summer."
          }
        ],
        pullQuote: "“Terrain is not merely a backdrop for warfare; in the hands of a strategic commander, geography is the decisive weapon.”",
        conclusion: "Haldighati was not an isolated battle but the opening chapter of a twenty-year war of attrition. Archival analysis demonstrates that Pratap's enduring triumph lay in proving that regional mobility and local topography could outlast monolithic imperial logistics."
      }
    },
    {
      id: "sample-3",
      category: "News Explainer",
      title: "Understanding the India-Middle East-Europe Economic Corridor (IMEC)",
      subtitle: "Deconstructing the 4,800 km multi-modal trade blueprint of the century",
      imageCover: "/assets/images/essay_bombay_art.jpg",
      hook: "Why is a 4,800 km network of railways and ship routes being called the most ambitious trade blueprint of the 21st century?",
      excerpt: "By cutting transit times between Mumbai and Europe by 40% and slashing logistics costs by nearly a third, IMEC is not merely an infrastructure plan—it is a geopolitical hedge against maritime chokepoints...",
      keyTakeaway: "Multi-modal infrastructure corridors serve as both economic catalysts and geopolitical insurance policies.",
      readTime: "3 min read",
      date: "Geopolitical News",
      fullBody: {
        introduction: "Announced on the sidelines of the New Delhi G20 Summit, the India-Middle East-Europe Economic Corridor (IMEC) connects Indian ports directly to the Arabian Peninsula by sea, traverses the Levant by rail, and reaches European markets through Mediterranean ports. Here is why this corridor matters far beyond shipping logistics.",
        keyPoints: [
          {
            heading: "1. Bypassing Critical Maritime Chokepoints",
            text: "Global maritime commerce relies heavily on vulnerable chokepoints like the Suez Canal and Bab-el-Mandeb Strait. By substituting maritime bottlenecks with a high-speed overland rail spine through the UAE, Saudi Arabia, Jordan, and Israel, IMEC cuts delivery times between Mumbai and Rotterdam from 34 days to under 20 days."
          },
          {
            heading: "2. The Clean Energy & Digital Cable Spine",
            text: "IMEC is not just about physical containers. Parallel to the railway tracks runs a high-voltage clean electricity grid and high-speed digital fiber-optic cables, creating a continuous energy and data bridge connecting South Asia, the Gulf, and Europe."
          },
          {
            heading: "3. Strategic Counter-Weight & Regional Integration",
            text: "The corridor provides developing nations with a transparent, multilateral infrastructure alternative that avoids debt-trap bilateral models while deepening economic normalization between Middle Eastern neighbours and South Asian trade hubs."
          }
        ],
        pullQuote: "“In 21st century geopolitics, connectivity is sovereignty. Those who build the fastest, most reliable corridors shape global trade rules.”",
        conclusion: "IMEC represents the transition from unilateral trade routes to collaborative multi-modal corridors. For businesses and sovereign states alike, it redefines logistical resilience for the next fifty years."
      }
    },
    {
      id: "sample-4",
      category: "Finance Context",
      title: "Why Central Banks Are Hoarding Gold at a 55-Year Record",
      subtitle: "The quiet restructuring of sovereign reserves in an era of weaponized finance",
      imageCover: "/assets/images/hero_monograph_art.jpg",
      hook: "In the last 24 months, central banks bought more gold than at any point since 1967. Here is what sovereign treasuries see that retail investors are missing.",
      excerpt: "It isn't just about inflation hedging. Following the weaponization of dollar-denominated reserves in 2022, sovereign nations are quietly de-risking their reserve assets to ensure non-seizable sovereign liquidity...",
      keyTakeaway: "Sovereign liquidity diversification is accelerating as the global monetary architecture shifts toward multi-polarity.",
      readTime: "4 min read",
      date: "Macro Finance",
      fullBody: {
        introduction: "According to the World Gold Council, central banks accumulated over 1,000 tonnes of gold in back-to-back years—a pace unseen since the collapse of the London Gold Pool in 1968. While media commentary frequently cites inflation hedging, the underlying institutional catalyst is far more structural and consequential.",
        keyPoints: [
          {
            heading: "1. The Freezing of Sovereign Foreign Reserves",
            text: "When Western nations froze approximately $300 billion of Russian central bank foreign currency reserves in 2022, sovereign risk parameters changed overnight. For non-aligned emerging market central banks, foreign treasury bills went from being risk-free assets to assets carrying geopolitical counter-party risk."
          },
          {
            heading: "2. Gold: The Sole Asset with Zero Counter-party Risk",
            text: "Physical gold held in domestic vaults carries no liability on another nation's balance sheet and cannot be frozen by an executive sanctions order. It is the ultimate asset of sovereign settlement when diplomatic relations fracture."
          },
          {
            heading: "3. De-Dollarization of Bilateral Trade Settlements",
            text: "As major emerging economies expand local currency trade agreements (such as INR-AED or CNY-RUB settlement mechanisms), excess trade surpluses require neutral, liquid reserve assets. Physical gold serves as the trusted anchor for bilateral balancing."
          }
        ],
        pullQuote: "“Paper currencies represent promises from foreign governments. Gold is the only reserve asset that is nobody else's liability.”",
        conclusion: "The unprecedented surge in central bank gold purchases is not a temporary market speculation; it is the physical manifestation of a rewiring global financial system moving steadily toward diversified, multipolar reserves."
      }
    }
  ],
  reels: [
    {
      id: "reel-1",
      reelId: "DYpcvUQN59u",
      url: "https://www.instagram.com/reels/DYpcvUQN59u/",
      embedUrl: "https://www.instagram.com/reel/DYpcvUQN59u/embed/",
      title: "The Industrial Metamorphosis of Bombay",
      category: "History & Culture",
      badge: "Regional History",
      imageCover: "/assets/images/essay_bombay_art.jpg",
      pageName: "Chronicles of India",
      pageHandle: "@chronicles.india",
      niche: "Bombay Heritage & Textile History",
      views: "280K+ Views",
      likes: "18.5K+ Likes",
      shares: "3.4K Shares",
      hook: "From colonial land reclamation to 400,000 mill workers: how Bombay was forged.",
      description: "A fast-paced archival documentary reel unpacking the textile revolution, labor strikes, and the architectural rise of Mumbai's skyline.",
      format: "Vertical Documentary Reel (9:16)"
    },
    {
      id: "reel-2",
      reelId: "DZ5R9iBKdxr",
      url: "https://www.instagram.com/reel/DZ5R9iBKdxr/",
      embedUrl: "https://www.instagram.com/reel/DZ5R9iBKdxr/embed/",
      title: "Haldiram's ₹9,000 Cr Distribution Fortress",
      category: "Brand & Business",
      badge: "Brand Strategy",
      imageCover: "/assets/images/essay_haldiram_art.jpg",
      pageName: "Brand Decoders",
      pageHandle: "@branddecoders",
      niche: "Consumer Goods & FMCG Moats",
      views: "420K+ Views",
      likes: "26.4K+ Likes",
      shares: "6.1K Shares",
      hook: "How a 1937 Bikaner snack shop beat McDonald's and Domino's combined in India.",
      description: "Visual deconstruction of the cash-upfront retailer supply chain, decentralized factories, and hyper-localized spice profiles.",
      format: "Business Breakdown (9:16)"
    },
    {
      id: "reel-3",
      reelId: "DZsbaqxoG8_",
      url: "https://www.instagram.com/reels/DZsbaqxoG8_/",
      embedUrl: "https://www.instagram.com/reel/DZsbaqxoG8_/embed/",
      title: "National Newsroom Fast-Turnaround Explainer",
      category: "News & Current Affairs",
      badge: "Newsroom Cadence",
      imageCover: "/assets/images/hero_monograph_art.jpg",
      pageName: "IndiaLast24hr",
      pageHandle: "@indialast24hr",
      niche: "National News & Breaking Explainers",
      views: "195K+ Views",
      likes: "11.2K+ Likes",
      shares: "2.8K Shares",
      hook: "Breaking down national infrastructure and policy developments in under 60 seconds.",
      description: "Demonstrating fast news research, hook-first storytelling, and factually defensible summaries for digital news audiences.",
      format: "News Explainer (9:16)"
    },
    {
      id: "reel-4",
      reelId: "DYyRqK-ot0k",
      url: "https://www.instagram.com/reels/DYyRqK-ot0k/",
      embedUrl: "https://www.instagram.com/reel/DYyRqK-ot0k/embed/",
      title: "The Defensive Genius of Rajasthan's Fortresses",
      category: "History & Culture",
      badge: "Historical Defense",
      imageCover: "/assets/images/essay_rajasthan_art.jpg",
      pageName: "Chronicles of India",
      pageHandle: "@chronicles.india",
      niche: "Rajasthan Architecture & Warfare",
      views: "340K+ Views",
      likes: "22.8K+ Likes",
      shares: "4.7K Shares",
      hook: "Why Rajasthan's hill forts were considered impregnable against imperial sieges.",
      description: "Exploring hydraulic engineering, desert supply lines, and fortress architecture across Chittorgarh, Kumbhalgarh, and Mehrangarh.",
      format: "Archival Short (9:16)"
    },
    {
      id: "reel-5",
      reelId: "DV-_mNwiL3K",
      url: "https://www.instagram.com/reel/DV-_mNwiL3K/",
      embedUrl: "https://www.instagram.com/reel/DV-_mNwiL3K/embed/",
      title: "Macroeconomics & Reserve Restructuring",
      category: "Finance & Markets",
      badge: "Market Context",
      pageName: "FinanceLast24hr",
      pageHandle: "@financelast24hr",
      niche: "Central Bank Gold Reserves & Forex",
      views: "215K+ Views",
      likes: "14.6K+ Likes",
      shares: "3.9K Shares",
      hook: "Why sovereign central banks bought more physical gold in 24 months than since 1967.",
      description: "Unpacking de-dollarization, local currency trade settlements, and foreign reserve risk in clear, accessible visual terms.",
      format: "Finance Reel (9:16)"
    },
    {
      id: "reel-6",
      reelId: "DaYFwvxB10B",
      url: "https://www.instagram.com/reel/DaYFwvxB10B/",
      embedUrl: "https://www.instagram.com/reel/DaYFwvxB10B/embed/",
      title: "IMEC Trade Corridor: The 4,800 KM Blueprint",
      category: "News & Current Affairs",
      badge: "Geopolitics",
      pageName: "IndiaLast24hr",
      pageHandle: "@indialast24hr",
      niche: "Trade Corridors & Global Logistics",
      views: "310K+ Views",
      likes: "19.7K+ Likes",
      shares: "5.2K Shares",
      hook: "Cutting transit times from Mumbai to Europe by 40% through overland rail & sea corridors.",
      description: "A rapid geopolitical explainer breaking down clean energy cables, rail routes, and port infrastructure.",
      format: "Geopolitical Short (9:16)"
    },
    {
      id: "reel-7",
      reelId: "Dc83LLeSrnr",
      url: "https://www.instagram.com/reel/Dc83LLeSrnr/",
      embedUrl: "https://www.instagram.com/reel/Dc83LLeSrnr/embed/",
      title: "The Battle of Haldighati: Geography Weaponized",
      category: "History & Culture",
      badge: "Deep Archival",
      pageName: "Chronicles of India",
      pageHandle: "@chronicles.india",
      niche: "Mewar & Asymmetrical Mountain Warfare",
      views: "490K+ Views",
      likes: "34.1K+ Likes",
      shares: "8.6K Shares",
      hook: "How a mountain pass barely two meters wide neutralized a 4-to-1 cavalry disadvantage.",
      description: "Tactical military breakdown of asymmetrical mountain defense and indigenous Bhil archer strategies.",
      format: "Documentary Short (9:16)"
    },
    {
      id: "reel-8",
      reelId: "DaSwHEOBFN_",
      url: "https://www.instagram.com/reel/DaSwHEOBFN_/",
      embedUrl: "https://www.instagram.com/reel/DaSwHEOBFN_/embed/",
      title: "Bengal Renaissance & Socio-Political Awakening",
      category: "History & Culture",
      badge: "Cultural Analysis",
      pageName: "Chronicles of India",
      pageHandle: "@chronicles.india",
      niche: "Bengal Renaissance & Thinkers",
      views: "175K+ Views",
      likes: "9.8K+ Likes",
      shares: "2.1K Shares",
      hook: "The intellectual, literary, and political movements that reshaped modern Indian thought.",
      description: "Contextual prose and archival storytelling exploring 19th-century intellectual pioneers and economic transitions.",
      format: "Cultural Reel (9:16)"
    },
    {
      id: "reel-9",
      reelId: "DZz9vmVIhYC",
      url: "https://www.instagram.com/reel/DZz9vmVIhYC/",
      embedUrl: "https://www.instagram.com/reel/DZz9vmVIhYC/embed/",
      title: "Maharashtra Maritime Forts & Naval Strategy",
      category: "History & Culture",
      badge: "Regional Analysis",
      pageName: "Chronicles of India",
      pageHandle: "@chronicles.india",
      niche: "Maratha Naval History & Sea Forts",
      views: "260K+ Views",
      likes: "16.4K+ Likes",
      shares: "3.8K Shares",
      hook: "How Shivaji Maharaj established naval sovereignty on the Konkan coast.",
      description: "Documentary-style breakdown of sea fort architecture like Sindhudurg, coastal trade corridors, and naval doctrine.",
      format: "Documentary Reel (9:16)"
    },
    {
      id: "reel-10",
      reelId: "DZVVWqmSvZn",
      url: "https://www.instagram.com/reel/DZVVWqmSvZn/",
      embedUrl: "https://www.instagram.com/reel/DZVVWqmSvZn/embed/",
      title: "Breaking Down Critical National Policy",
      category: "News & Current Affairs",
      badge: "Policy Brief",
      pageName: "IndiaLast24hr",
      pageHandle: "@indialast24hr",
      niche: "National Policy & Judicial Briefs",
      views: "185K+ Views",
      likes: "10.3K+ Likes",
      shares: "2.4K Shares",
      hook: "Extracting the core developments and implications of landmark national policy verdicts.",
      description: "Bullet-proof summaries crafted under newsroom deadlines with clear chronological context.",
      format: "Newsroom Short (9:16)"
    },
    {
      id: "reel-11",
      reelId: "Db8W6URAlZX",
      url: "https://www.instagram.com/reel/Db8W6URAlZX/",
      embedUrl: "https://www.instagram.com/reel/Db8W6URAlZX/embed/",
      title: "Archival Research & Documentary Storytelling",
      category: "History & Culture",
      badge: "Editorial Method",
      pageName: "Chronicles of India",
      pageHandle: "@chronicles.india",
      niche: "Primary Research & Archival Pacing",
      views: "225K+ Views",
      likes: "15.1K+ Likes",
      shares: "3.5K Shares",
      hook: "Turning dense historical manuscripts and treaties into high-retention cinematic scripts.",
      description: "Demonstrating the 3-Tier Content Engine from raw archival research to viral visual storytelling.",
      format: "Storytelling Reel (9:16)"
    },
    {
      id: "reel-12",
      reelId: "tamilnadu-heritage",
      url: "https://www.instagram.com/tamilnadu?stkn=dGEybTM1NWY4aXR0",
      embedUrl: "https://www.instagram.com/tamilnadu",
      title: "Tamil Nadu: Architectural Genius & Cultural Identity",
      category: "History & Culture",
      badge: "Cultural Authority",
      imageCover: "/assets/images/essay_rajasthan_art.jpg",
      pageName: "Tamil Nadu",
      pageHandle: "@tamilnadu",
      niche: "Temple Architecture, Literature & Society",
      views: "533K Audience",
      likes: "34.2K+ Likes",
      shares: "7.8K Shares",
      hook: "Why the thousand-year-old engineering of Chola temples still defies modern explanations.",
      description: "Research-based storytelling unpacking temple engineering, Sangam literary traditions, and Dravidian socio-political movements.",
      format: "Documentary Reel (9:16)"
    },
    {
      id: "reel-13",
      reelId: "kolkata-daily-news",
      url: "https://www.instagram.com/kolkata?stkn=eTdhejNwYjF1OWlh",
      embedUrl: "https://www.instagram.com/kolkata",
      title: "Kolkata Daily Top 5 & Bengal Renaissance",
      category: "News & Current Affairs",
      badge: "Daily Top 5",
      imageCover: "/assets/images/essay_bombay_art.jpg",
      pageName: "Kolkata",
      pageHandle: "@kolkata",
      niche: "Daily News & Bengal Thinkers",
      views: "599K Audience",
      likes: "38.5K+ Likes",
      shares: "9.1K Shares",
      hook: "The top 5 stories shaping Kolkata today, contextualized with Bengal's rich intellectual legacy.",
      description: "Daily rapid-cadence news scripting paired with rich analytical context on Bengal's art, literature, and historic milestones.",
      format: "News Explainer (9:16)"
    },
    {
      id: "reel-14",
      reelId: "westbengal-sunday-special",
      url: "https://www.instagram.com/westbengal?stkn=ZWJldWlnczJ0c3o4",
      embedUrl: "https://www.instagram.com/westbengal",
      title: "West Bengal: Sunday Special Documentary",
      category: "News & Current Affairs",
      badge: "Sunday Feature",
      imageCover: "/assets/images/hero_monograph_art.jpg",
      pageName: "West Bengal",
      pageHandle: "@westbengal",
      niche: "State News & Weekly Mini-Documentaries",
      views: "626K Audience",
      likes: "42.6K+ Likes",
      shares: "11.4K Shares",
      hook: "Every Sunday, we investigate an untold story from West Bengal that the mainstream headlines missed.",
      description: "Revitalized page cadence delivering daily Top 5 state news bulletins and an exclusive in-depth Sunday cultural documentary.",
      format: "Sunday Mini-Doc (9:16)"
    }
  ],
  videoProjects: [
    {
      id: "video-1",
      title: "The Metamorphosis of Bombay: From Textile Mills to Financial Empire",
      subtitle: "A documentary video essay dissecting the architectural, labor, and economic transformation of Mumbai.",
      category: "Documentary Video Essay",
      duration: "16:45",
      format: "Long-Form Documentary Script (16:9 4K)",
      hook: "In 1854, the first textile mill fired its boilers in Tardeo. Within thirty years, Bombay wasn't just spinning cotton—it was spinning the political and financial destiny of modern India.",
      synopsis: "Explores how a cluster of seven marshy islands evolved through colonial land reclamation, mill workers' trade union movements, and the 1990s real estate boom into India's commercial titan.",
      metrics: "Paced for 65%+ Audience Retention • High-Cadence Archival Voiceover",
      badge: "Documentary Script",
      reelUrl: "https://www.instagram.com/reels/DYpcvUQN59u/",
      scriptHighlights: [
        {
          timestamp: "00:00 - 01:15",
          visualCue: "Slow drone zoom over Girgaon mill chimneys dissolving into modern Lower Parel glass skyscrapers. Atmospheric low-frequency bass swell.",
          voiceover: "Every global city has a ghost under its concrete. In London, it's coal smoke. In New York, it's port docks. In Mumbai, it's the rhythmic clatter of four hundred thousand textile looms that went silent in the winter of 1982."
        },
        {
          timestamp: "04:30 - 06:10",
          visualCue: "Archival 1860s maps showing Hornby Vellard and Back Bay reclamation projects. Animated yellow tracing lines show how sea became streets.",
          voiceover: "Bombay was never a natural geography; it was an act of raw engineering defiance. When the American Civil War broke out in 1861, blocking Confederate cotton exports to Britain, Bombay's cotton prices exploded tenfold in three months."
        },
        {
          timestamp: "12:40 - 14:15",
          visualCue: "Split screen: Historical Black & White footage of textile workers walking through Lalbaug vs. Modern finance workers exiting Lower Parel railway station at 8:45 AM.",
          voiceover: "The mills didn't die because cloth stopped being valuable. They died because the ground underneath them became the most expensive square footage in the eastern hemisphere."
        }
      ],
      strategicTakeaway: "Documentary video essays require a continuous tension between archival memory and contemporary relevance to keep viewers glued beyond the 10-minute mark."
    },
    {
      id: "video-2",
      title: "How Haldiram Built a ₹9,000 Cr Empire Without Traditional TV Ads",
      subtitle: "Visual business breakdown exploring consumer psychology, freshness engineering, and distribution fortress moats.",
      category: "Brand Story & Breakdown",
      duration: "11:20",
      format: "Business Case Study Video (16:9)",
      hook: "Haldiram sells more packaged snacks than McDonald's and Domino's combined in India. Here is the unyielding supply chain fortress modern VC startups cannot break.",
      synopsis: "Deconstructs the operational architecture of India's biggest traditional snack brand: why cash-upfront retailer terms work, how decentralized plants solve shelf-life, and why flavor localized recipes win.",
      metrics: "Kinetic Motion Graphics Script • Problem-Solution Framework",
      badge: "Brand Strategy",
      reelUrl: "https://www.instagram.com/reel/DZ5R9iBKdxr/",
      scriptHighlights: [
        {
          timestamp: "00:00 - 00:45",
          visualCue: "Fast-cut comparison of global fast-food brand logos fading out against a towering golden mountain of Bhujia packets. On-screen metric counter ticking to ₹9,000 Cr.",
          voiceover: "If you ask a tech founder how to build a billion-dollar brand, they will tell you about performance marketing, viral reels, and venture capital. Haldiram did none of that. They built a nine thousand crore fortress with three simple operational rules."
        },
        {
          timestamp: "03:15 - 04:50",
          visualCue: "Animated 3D supply chain map: Concentric 300km delivery radius circles radiating from Nagpur, Bikaner, and Noida factories directly to corner mom-and-pop stores.",
          voiceover: "Bhujia has a mortal enemy: humidity and transit time. While multinationals shipped from central mega-warehouses 1,500 km away, Haldiram decentralized production so that freshly fried packets reached corner stores within 48 hours."
        },
        {
          timestamp: "08:30 - 09:45",
          visualCue: "Animated balance sheet chart comparing typical FMCG 45-day retailer credit debt vs Haldiram's upfront cash cycle.",
          voiceover: "When a kirana store pays you in cash before you even deliver the next crate, your customers are literally funding your next factory. That is the holy grail of working capital."
        }
      ],
      strategicTakeaway: "Business explainers succeed when complex supply chains and working capital dynamics are translated into intuitive visual metaphors."
    },
    {
      id: "video-3",
      title: "The Tactical Geography of Haldighati: 3D Mountain Warfare Breakdown",
      subtitle: "A military historical analysis explaining how topography and indigenous alliances neutralized a 4-to-1 numerical deficit.",
      category: "Documentary Video Essay",
      duration: "14:10",
      format: "Topographical Military History (16:9)",
      hook: "Why did a 4-to-1 numerical cavalry advantage completely collapse inside a yellow-soil mountain pass barely two meters wide?",
      synopsis: "An in-depth tactical video script reconstructing the 1576 battle of Haldighati using geological elevations, archery ranges, and contemporary Persian chronicle records.",
      metrics: "3D Terrain Modeling Script • Asymmetrical Military Doctrine",
      badge: "Military History",
      reelUrl: "https://www.instagram.com/reel/Dc83LLeSrnr/",
      scriptHighlights: [
        {
          timestamp: "00:00 - 01:20",
          visualCue: "3D topographical camera flight gliding down the jagged yellow ravines of the Aravalli hills, revealing narrow bottleneck gorges.",
          voiceover: "Popular textbooks describe Haldighati as a four-hour clash in the summer of 1576. But in military doctrine, the battle was decided three weeks earlier—the moment Maharana Pratap chose the specific yellow pass where an army of twenty thousand was forced to march in a single line."
        },
        {
          timestamp: "05:00 - 06:40",
          visualCue: "Animated tactical birds-eye view showing Mughal cavalry unable to execute their signature flanking maneuver (Tulughma) due to shear rock cliffs.",
          voiceover: "Heavy cavalry requires wide open plains to build kinetic momentum. In Haldighati, the cliff walls were ten meters high on both sides. Numerical superiority becomes a death trap when you cannot deploy your flank."
        },
        {
          timestamp: "09:15 - 10:30",
          visualCue: "Cut to technical diagram of Bhil bamboo composite bows showing plunging ballistic trajectory from ridge peaks into the gorge floor.",
          voiceover: "Stationed on the rocky heights above, indigenous Bhil archers rained plunging arrows down onto helmets. Imperial shields designed for horizontal arrows on open fields were useless against fire from directly above."
        }
      ],
      strategicTakeaway: "Tactical military history thrives when complex battlefield chronologies are framed around geographic constraints and decision-making logic."
    },
    {
      id: "video-4",
      title: "IMEC Corridor: The 4,800 KM Trade Blueprint in 90 Seconds",
      subtitle: "High-retention vertical short-form script breaking down the India-Middle East-Europe Economic Corridor.",
      category: "Short-Form & Reels",
      duration: "01:30",
      format: "Vertical Video Script (9:16 Shorts / Reels)",
      hook: "This 4,800 km rail and sea route is about to slash shipping times from Mumbai to Europe by 40%. Here's why every superpower is watching.",
      synopsis: "A fast-paced vertical video explainer designed for Instagram Reels and YouTube Shorts, unpacking the geopolitics, clean energy cables, and port infrastructure of IMEC.",
      metrics: "Optimized for 90%+ Vertical Video Retention • Sub-Second Visual Pacing",
      badge: "Short-Form Video",
      reelUrl: "https://www.instagram.com/reel/DaYFwvxB10B/",
      scriptHighlights: [
        {
          timestamp: "00:00 - 00:15",
          visualCue: "Kinetic text overlay: '34 DAYS vs 19 DAYS' flashing over high-speed ship route animation bypassing the Suez Canal.",
          voiceover: "Right now, shipping a container from Mumbai to Rotterdam takes 34 days through dangerous maritime choke-points. IMEC cuts that to under 19 days."
        },
        {
          timestamp: "00:15 - 00:45",
          visualCue: "Fast zoom across India's west coast ports, through UAE and Saudi Arabia railway lines, direct to Israel's Haifa port and Greek shores.",
          voiceover: "It's not just a shipping lane. It's a high-voltage clean energy grid, high-speed internet fiber, and an overland railway spine that bypasses pirate waters and maritime blockades."
        },
        {
          timestamp: "00:45 - 01:15",
          visualCue: "Split screen comparison of multi-modal corridor investments with bold call-to-action engagement prompt.",
          voiceover: "In 21st-century geopolitics, whoever builds the fastest trade corridor writes the trade rules for the next half-century."
        }
      ],
      strategicTakeaway: "Short-form vertical video demands a bold hook in the first 1.5 seconds and visual progression every 4 seconds to maintain total viewer retention."
    },
    {
      id: "video-5",
      title: "Why Sovereign Central Banks Bought 1,000 Tonnes of Gold",
      subtitle: "A financial news explainer deconstructing de-dollarization and reserve asset restructuring.",
      category: "News & Geopolitics",
      duration: "08:50",
      format: "Financial News Explainer (16:9)",
      hook: "In 2022, $300 billion of foreign reserves was frozen overnight. What followed was the biggest central bank gold buying spree in 55 years.",
      synopsis: "Explores sovereign reserve risk, local currency trade settlement mechanisms, and why emerging market central banks are diversifying away from unilateral debt assets.",
      metrics: "Macro-Economic Charting Script • Clear Visual Analogies",
      badge: "Macro Finance",
      reelUrl: "https://www.instagram.com/reel/DV-_mNwiL3K/",
      scriptHighlights: [
        {
          timestamp: "00:00 - 01:10",
          visualCue: "Dramatic news montage of global reserve asset announcements, dissolving into a gold vault bullion stack graphic with counter showing '1,082 TONNES'.",
          voiceover: "For fifty years, the safest place for any nation to store its wealth was United States Treasury bonds. Then, in the spring of 2022, the rules of global finance changed forever."
        },
        {
          timestamp: "03:20 - 04:40",
          visualCue: "Clean graphic comparing sovereign bonds (someone else's promise) vs physical vault gold (zero counter-party liability).",
          voiceover: "Paper money is ultimately a liability on another country's balance sheet. Gold in your own vault has no counter-party risk. It cannot be frozen by an executive order from a foreign capital."
        },
        {
          timestamp: "06:30 - 07:45",
          visualCue: "Animated flow chart demonstrating bilateral trade clearing between emerging market partner currencies anchored by gold settlement.",
          voiceover: "This isn't about retail inflation hedging. This is the physical architecture of a new multipolar global currency system being built in real time."
        }
      ],
      strategicTakeaway: "Macroeconomic content gains immense traction when abstract financial mechanisms are grounded in tangible geopolitical decisions."
    }
  ]
};
