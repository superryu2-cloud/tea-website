/**
 * 百科入口 — 靜態搜尋索引
 * 每筆資料：
 *   keywords — 搜尋匹配的關鍵字
 *   label    — 顯示名稱
 *   category — 分類標籤
 *   tab      — goToTab 參數
 *   detail   — 精確導航參數（可選）
 *              featured  → selectedFeatured id
 *              kind      → varietiesKind key
 *              room      → scienceRoom key
 */
const SEARCH_INDEX = [
    // ── 六大茶類 ──
    { keywords: '綠茶 green tea 不發酵 龍井 碧螺春 煎茶', label: '綠茶（不發酵茶）', category: '六大茶類', tab: 'varieties', detail: { kind: 'green' } },
    { keywords: '白茶 white tea 微發酵 白毫銀針 白牡丹 壽眉 福鼎', label: '白茶（微發酵茶）', category: '六大茶類', tab: 'varieties', detail: { kind: 'white' } },
    { keywords: '黃茶 yellow tea 輕發酵 悶黃 君山銀針 霍山', label: '黃茶（輕發酵茶）', category: '六大茶類', tab: 'varieties', detail: { kind: 'yellow' } },
    { keywords: '青茶 烏龍茶 oolong 半發酵 部分發酵', label: '青茶（烏龍茶）', category: '六大茶類', tab: 'varieties', detail: { kind: 'oolong' } },
    { keywords: '紅茶 black tea 全發酵 日月潭 阿薩姆 蜜香', label: '紅茶（全發酵茶）', category: '六大茶類', tab: 'varieties', detail: { kind: 'red' } },
    { keywords: '黑茶 dark tea 後發酵 普洱 渥堆 安化', label: '黑茶（後發酵茶）', category: '六大茶類', tab: 'varieties', detail: { kind: 'black' } },

    // ── 烏龍產區 ──
    { keywords: '武夷 岩茶 閩北 大紅袍 肉桂 水仙 正岩', label: '閩北烏龍（武夷岩茶）', category: '青茶', tab: 'varieties', detail: { kind: 'oolong', oolongHref: '#oolong-minbei' } },
    { keywords: '安溪 鐵觀音 閩南 觀音韻 黃金桂 本山 毛蟹', label: '閩南烏龍（安溪鐵觀音）', category: '青茶', tab: 'varieties', detail: { kind: 'oolong', oolongHref: '#oolong-minnan' } },
    { keywords: '鳳凰 單叢 廣東 潮州 蜜蘭香 鴨屎香', label: '廣東烏龍（鳳凰單叢）', category: '青茶', tab: 'varieties', detail: { kind: 'oolong', oolongHref: '#oolong-guangdong' } },
    { keywords: '台灣烏龍 高山茶 阿里山 梨山 大禹嶺 杉林溪', label: '台灣烏龍', category: '青茶', tab: 'varieties', detail: { kind: 'oolong', oolongHref: '#oolong-taiwan' } },

    // ── 台灣特色茶 ──
    { keywords: '碧螺春 三峽 綠茶 台灣綠茶', label: '碧螺春綠茶', category: '特色茶', tab: 'featured', detail: { featured: 'biluochun' } },
    { keywords: '文山包種 坪林 包種茶 條型 清香', label: '文山包種茶', category: '特色茶', tab: 'featured', detail: { featured: 'wenshan' } },
    { keywords: '高山烏龍 高山茶 清香型 球型 輕發酵', label: '高山烏龍茶', category: '特色茶', tab: 'featured', detail: { featured: 'gaoshanoolong' } },
    { keywords: '凍頂 鹿谷 焙火 中發酵 比賽茶', label: '凍頂烏龍茶', category: '特色茶', tab: 'featured', detail: { featured: 'dongding' } },
    { keywords: '鐵觀音 木柵 石門 重焙火 猴焙', label: '鐵觀音茶', category: '特色茶', tab: 'featured', detail: { featured: 'tieguanyin' } },
    { keywords: '東方美人 膨風茶 白毫烏龍 小綠葉蟬 著涎 重發酵', label: '東方美人茶', category: '特色茶', tab: 'featured', detail: { featured: 'orientalbeauty' } },
    { keywords: '紅烏龍 台東 鹿野 創新茶 重發酵重焙火', label: '紅烏龍茶', category: '特色茶', tab: 'featured', detail: { featured: 'redoolong' } },
    { keywords: '蜜香紅茶 花蓮 瑞穗 舞鶴 小葉紅茶', label: '蜜香紅茶', category: '特色茶', tab: 'featured', detail: { featured: 'honeyblack' } },
    { keywords: '日月潭紅茶 台茶18號 紅玉 大葉種', label: '日月潭紅茶', category: '特色茶', tab: 'featured', detail: { featured: 'black_varieties' } },

    // ── 茶樹品種 ──
    { keywords: '品種 栽培種 cultivar 台茶', label: '茶樹品種總覽', category: '品種', tab: 'cultivars' },
    { keywords: '青心烏龍 軟枝烏龍 種仔', label: '青心烏龍', category: '品種', tab: 'cultivars' },
    { keywords: '青心大冇 大冇 東方美人品種', label: '青心大冇', category: '品種', tab: 'cultivars' },
    { keywords: '台茶12號 金萱 四季春 翠玉 台茶13號', label: '金萱 / 翠玉 / 四季春', category: '品種', tab: 'cultivars' },
    { keywords: '大葉種 小葉種 葉型 喬木 灌木', label: '大葉種 vs 小葉種', category: '品種', tab: 'cultivars' },

    // ── 茶葉科學 ──
    { keywords: '氧化 發酵 酶促氧化 兒茶素 茶黃素 茶紅素', label: '氧化與發酵', category: '科學', tab: 'science', detail: { room: 'oxidation' } },
    { keywords: '烘焙 焙火 梅納反應 焦糖化 輕焙 中焙 重焙', label: '烘焙科學', category: '科學', tab: 'science', detail: { room: 'roasting' } },
    { keywords: '內含物 茶多酚 咖啡因 胺基酸 茶胺酸 兒茶素', label: '茶葉內含物質', category: '科學', tab: 'science', detail: { room: 'constituents' } },
    { keywords: '香氣 芳香物質 萜烯 醇類 酯類 花香 果香', label: '茶葉香氣科學', category: '科學', tab: 'science', detail: { room: 'aromatics' } },

    // ── 沖泡 / 製程 ──
    { keywords: '沖泡 泡茶 水溫 時間 茶水比 功夫茶', label: '沖泡指南', category: '沖泡', tab: 'brewing' },
    { keywords: '製程 製茶 工序 殺青 揉捻 萎凋 搖青 做青', label: '製茶工藝', category: '製程', tab: 'brewing' },

    // ── 茶道 / 茶席 ──
    { keywords: '茶道 茶藝 茶席 美學 儀式 茶會', label: '茶道美學', category: '茶道', tab: 'ceremony' },
    { keywords: '茶具 蓋杯 蓋碗 茶壺 公道杯 品茗杯', label: '茶具介紹', category: '茶道', tab: 'ceremony' },

    // ── 普洱 ──
    { keywords: '普洱 puerh 生普 熟普 雲南 古樹 渥堆 陳化', label: '普洱茶專區', category: '普洱', tab: 'puerh' },

    // ── 紫砂 ──
    { keywords: '紫砂 宜興 紫砂壺 泥料 紫泥 朱泥 段泥', label: '紫砂專區', category: '紫砂', tab: 'zisha' },
    { keywords: '養壺 開壺 包漿 紫砂養護', label: '紫砂養護', category: '紫砂', tab: 'zisha' },

    // ── 產區 / 歷史 ──
    { keywords: '產區 台灣茶區 阿里山 梨山 杉林溪 大禹嶺 鹿谷 坪林 三峽 名間', label: '台灣產區導覽', category: '產區', tab: 'regions' },
    { keywords: '歷史 茶史 茶文化 絲路 陸羽 茶經', label: '歷史文化', category: '歷史', tab: 'history' },
    { keywords: '季節 採收 春茶 冬茶 秋茶 夏茶', label: '季節採收', category: '季節', tab: 'seasons' },

    // ── 品評 ──
    { keywords: '品評 品茗 考題 測驗 考試', label: '品評考題', category: '品評', tab: 'sensory' },
    { keywords: '茶言觀色 色香味 評鑑 審評 湯色 葉底 外觀', label: '茶言觀色', category: '品評', tab: 'tea_talk' },
];

export default SEARCH_INDEX;
