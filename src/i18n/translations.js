export const SUPPORTED_LANGS = ['zh-Hant', 'en'];

export const translations = {
  'zh-Hant': {
    site: {
      title: '茶韻之旅',
      tagline: 'TEA EXHIBITION ATLAS',
    },
    nav: {
      journey: '學習旅程',
      atlas: '茶學百科',
      home: '總覽',
      cultivars: '茶樹品種',
      varieties: '六大茶類',
      puerh: '普洱茶',
      featured: '台灣特色茶',
      seasons: '季節採收',
      science: '化學/製程',
      sensory: '品評考題',
      tea_talk: '茶言觀色',
      chemistry_deep_dive: '風味化學',
      brewing: '沖泡/工藝',
      ceremony: '茶席美學',
      zisha: '紫砂',
      regions: '產區導覽',
      history: '歷史文化',
      video: '茶學放映室',
    },
    ui: {
      menuOpen: '開啟選單',
      menuClose: '關閉選單',
      language: '語言',
      newsletterTitle: '訂閱更新',
      emailPlaceholder: '輸入 Email',
      subscribe: '訂閱',
      backToTop: '回到頂部',
    },
    footer: {
      aboutTitle: '茶韻之旅',
      aboutText: '以教學與研究為導向整理茶學百科，內容持續更新，歡迎作為課堂與自學參考。',
      quickLinks: '快速連結',
      copyright: '茶韻之旅',
      designedFor: 'Designed for Tea Lovers.',
    },
  },
  en: {
    site: {
      title: 'Tea Atlas',
      tagline: 'Tea Knowledge for Teaching',
    },
    nav: {
      journey: 'Learning Journey',
      atlas: 'Atlas',
      home: 'Overview',
      cultivars: 'Cultivars',
      varieties: 'Six Tea Types',
      puerh: 'Pu-erh',
      featured: 'Taiwan Specialties',
      seasons: 'Seasonality',
      science: 'Tea Science',
      sensory: 'Sensory Quiz',
      tea_talk: 'Tea Palette',
      chemistry_deep_dive: 'Flavor Chemistry',
      brewing: 'Brewing/Craft',
      ceremony: 'Tea Aesthetics',
      zisha: 'Zisha',
      regions: 'Regions',
      history: 'History & Culture',
      video: 'Video Gallery',
    },
    ui: {
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      language: 'Language',
      newsletterTitle: 'Newsletter',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      backToTop: 'Back to top',
    },
    footer: {
      aboutTitle: 'Tea Atlas',
      aboutText: 'A teaching-oriented tea knowledge site for instructors and students. Content is continuously updated.',
      quickLinks: 'Quick links',
      copyright: 'Tea Atlas',
      designedFor: 'Designed for Tea Lovers.',
    },
  },
};

export function t(lang, keyPath) {
  const langPack = translations[lang] ?? translations['zh-Hant'];
  const value = keyPath
    .split('.')
    .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), langPack);
  if (value !== undefined) return value;
  return keyPath;
}

