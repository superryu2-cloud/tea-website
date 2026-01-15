export const ATLAS_ITEMS = [
  'home',
  'varieties',
  'puerh',
  'cultivars',
  'science',
  'sensory',
  'tea_talk',
  'brewing',
  'featured',
  'seasons',
  'ceremony',
  'zisha',
  'regions',
  'history',
];

export const NAV_ITEMS = ['journey', ...ATLAS_ITEMS];

export const VARIETIES_KINDS = [
  { key: 'overview', label: '總覽', type: 'overview' },
  { key: 'ref_chenchuan', label: '分類理論（陳椽教授）', type: 'ref' },
  { key: 'green', label: '綠茶', teaId: 0, type: 'tea' },
  { key: 'yellow', label: '黃茶', teaId: 2, type: 'tea' },
  { key: 'white', label: '白茶', teaId: 1, type: 'tea' },
  { key: 'oolong', label: '青茶', teaId: 3, type: 'tea' },
  { key: 'red', label: '紅茶', teaId: 4, type: 'tea' },
  { key: 'black', label: '黑茶', teaId: 5, type: 'tea' },
];

export const CHEN_CHUAN_TOC = [
  { href: '#cc-intro', label: '前言與六大茶類形成' },
  { href: '#cc-1', label: '1、茶葉命名' },
  { href: '#cc-2', label: '2、茶葉分類依據' },
  { href: '#cc-3', label: '3、再加工茶葉分類依據' },
  { href: '#cc-4', label: '4、茶葉分類方法' },
  { href: '#cc-6cats', label: '六大茶類分類（綱目）' },
];

export const PUERH_TOC = [
  { href: '#puerh-1', label: '一：什麼是普洱茶' },
  { href: '#puerh-2', label: '二：普洱茶的前世今生' },
  { href: '#puerh-3', label: '三：普洱茶的分類' },
  { href: '#puerh-4', label: '四：普洱茶的品鑑方式' },
  { href: '#puerh-5', label: '五：普洱生茶的製作工藝' },
  { href: '#puerh-6', label: '六：普洱生茶的沖泡技巧' },
  { href: '#puerh-7', label: '七：普洱熟茶的工藝與歷史' },
  { href: '#puerh-8', label: '八：普洱熟茶的沖泡藝術' },
  { href: '#puerh-9', label: '九：普洱茶的香氣與感官密碼' },
  { href: '#puerh-10', label: '十：雲南白茶的賞析與沖泡' },
  { href: '#puerh-11', label: '十一：雲南紅茶的賞析與沖泡' },
  { href: '#puerh-12', label: '十二：雲南少數民族特色飲茶文化' },
];

export const OOLONG_TOC = [
  { href: '#oolong-minbei', label: '閩北烏龍' },
  { href: '#oolong-minnan', label: '閩南烏龍' },
  { href: '#oolong-guangdong', label: '廣東烏龍' },
  { href: '#oolong-taiwan', label: '台灣烏龍' },
];

export const RED_TOC = [
  { href: '#red-lapsang', label: '正山小種' },
  { href: '#red-jinjunmei', label: '金駿眉' },
];

export const TEA_REFERENCE_TOC = [
  { href: '#ref-1', label: '1. 六大分類原則與定義' },
  { href: '#ref-2', label: '2. 採摘：方式與品質' },
  { href: '#ref-3', label: '3. 萎凋：走水／消水' },
  { href: '#ref-4', label: '4. 浪菁：動刀與堆發酵' },
  { href: '#ref-5', label: '5. 殺青與揉捻（初乾）' },
  { href: '#ref-6', label: '6. 團揉整形與最終乾燥' },
  { href: '#ref-7', label: '7. 精製：回潤回火與包裝' },
  { href: '#ref-8', label: '8. 茶園管理：土壤與施肥' },
  { href: '#ref-9', label: '9. 台灣青茶製程總覽' },
];

export const CULTIVARS_SECTIONS = [
  {
    key: 'taiwan-cultivars',
    label: '台灣茶樹品種',
    children: [
      // { href: '#cultivar-registry', label: '品種登記簿' },
      // { href: '#cultivar-characteristics', label: '品種特性' },
      // { href: '#cultivar-distribution', label: '產區分布' },
    ]
  },
  {
    key: 'cultivar-diversity',
    label: '多樣性的臺灣茶樹栽培品種',
    children: []
  },
  {
    key: 'cultivar-mystery',
    label: '品種的奧秘',
    children: []
  }
];

export const SEASONS_SECTIONS = [
  {
    key: 'four-seasons',
    label: '四季採茶',
  },
  {
    key: 'solar-terms',
    label: '二十四節氣',
    children: [
      { href: '#meaning-intro', label: '4 種節氣類型' },
      { href: '#table-intro', label: '二十四節氣表' },
      { href: '#zhongqi-intro', label: '什麼是中氣' },
    ],
  }
];

export const CULTIVARS_TOC = [
  { href: '#cultivar-registry', label: '台灣茶樹品種登記簿' },
  { href: '#cultivar-diversity', label: '品種多樣性解析' },
];

export const SCIENCE_TOC = [
  { href: '#science-oxidation', key: 'oxidation', label: '氧化' },
  { href: '#science-roasting', key: 'roasting', label: '烘焙' },
  { href: '#science-constituents', key: 'constituents', label: '內含物' },
  { href: '#science-aroma', key: 'aroma', label: '香氣' },
  { href: '#science-process', key: 'process', label: '製茶工藝' },
  { href: '#science-teaching', key: 'teaching', label: '台灣青茶製程整理' },
];

export const FEATURED_TOC = [
  { href: '#featured-overview', label: '總覽' },
  { href: '#featured-longjing', label: '西湖龍井茶（範例）' },
  { href: '#featured-biluochun', label: '碧螺春綠茶' },
  { href: '#featured-wenshan', label: '文山包種茶' },
  { href: '#featured-gaoshanoolong', label: '高山烏龍茶' },
  { href: '#featured-dongding', label: '凍頂烏龍茶' },
  { href: '#featured-tieguanyin', label: '鐵觀音茶' },
  { href: '#featured-orientalbeauty', label: '東方美人茶' },
  { href: '#featured-redoolong', label: '紅烏龍茶' },
  { href: '#featured-honeyblack', label: '蜜香紅茶' },
  { href: '#featured-black_smallleaf', label: '小葉種紅茶' },
  { href: '#featured-black_largeleaf', label: '大葉種紅茶' },
];

export const HISTORY_SECTIONS = [
  { key: 'chineseTeaHistory', label: '中華茶史', icon: 'BookOpen' },
  { key: 'taiwanTeaIndustry', label: '臺灣茶業發展史', icon: 'TrendingUp' },
  { key: 'taiwanEvents', label: '臺灣茶事年表', icon: 'Globe' },
];

export const TAIWAN_CULTIVARS_TOC = [
  { href: '#cultivar-intro', label: '品種登記簿說明' },
  { href: '#cultivar-table', label: '台茶1-25號品種表' },
  { href: '#cultivar-stats', label: '統計資訊' },
];
