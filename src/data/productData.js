// ─────────────────────────────────────────────────────────────────
// 商品資料庫（支援 localStorage 動態新增）
// ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'tea_products_v1';
const DEFAULT_ORDER_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

// ── 預設商品（範例，可直接刪改） ──
const DEFAULT_PRODUCTS = [
    {
        id: 'hu-cheng-round',
        name: '手工圓形壺承',
        subtitle: '柴燒質感，穩固四平',
        price: 780,
        image: '/images/shop/placeholder_teaware.png',
        tags: ['茶具', '壺承', '茶席'],
        category: 'teaware',
        orderUrl: DEFAULT_ORDER_URL,
        description: '手工柴燒壺承，圓形略帶揚角設計，與各式壺型不衝突。',
        specs: ['直徑 15cm', '高 2.5cm', '陶製'],
    },
    {
        id: 'yun-bei-celadon',
        name: '青瓷勻杯',
        subtitle: '斷水俐落，容量 180ml',
        price: 560,
        image: '/images/shop/placeholder_teaware.png',
        tags: ['茶具', '勻杯', '茶席'],
        category: 'teaware',
        orderUrl: DEFAULT_ORDER_URL,
        description: '手工青瓷勻杯，釉色溫潤，斷水乾淨。',
        specs: ['容量 180ml', '高 8cm', '瓷製'],
    },
    {
        id: 'xi-fang-bamboo',
        name: '竹席方',
        subtitle: '天然竹編，穩定耐用',
        price: 420,
        image: '/images/shop/placeholder_teaware.png',
        tags: ['茶具', '席方', '茶席'],
        category: 'teaware',
        orderUrl: DEFAULT_ORDER_URL,
        description: '天然竹編席方，柔軟不傷器具，承載一切凸顯一切。',
        specs: ['30×20cm', '天然竹'],
    },
    {
        id: 'cha-li-set',
        name: '茶理組（茶撥+茶掏）',
        subtitle: '竹製一對，上下有節',
        price: 350,
        image: '/images/shop/placeholder_teaware.png',
        tags: ['茶具', '茶理', '茶撥', '茶掏'],
        category: 'accessory',
        orderUrl: DEFAULT_ORDER_URL,
        description: '竹製茶撥與茶掏，精神象徵，理茶之用。',
        specs: ['長 18cm', '竹製', '一組兩支'],
    },
    {
        id: 'dongding-oolong',
        name: '凍頂烏龍（傳統炭焙）',
        subtitle: '南投鹿谷，焦糖花韻',
        price: 600,
        image: '/images/shop/placeholder_tea.png',
        tags: ['茶葉', '烏龍', '凍頂', '台灣烏龍'],
        category: 'tea',
        orderUrl: DEFAULT_ORDER_URL,
        description: '南投鹿谷傳統炭焙凍頂烏龍，帶花果香與焦糖甜韻。',
        specs: ['75g / 罐', '半球型', '炭焙'],
    },
    {
        id: 'oriental-beauty',
        name: '東方美人（膨風茶）',
        subtitle: '新竹北埔，天然蜜香',
        price: 900,
        image: '/images/shop/placeholder_tea.png',
        tags: ['茶葉', '東方美人', '台灣烏龍', '蜜香'],
        category: 'tea',
        orderUrl: DEFAULT_ORDER_URL,
        description: '小綠葉蟬叮咬後的天然蜜香，發酵度 60-85%。',
        specs: ['50g / 罐', '條型', '重發酵'],
    },
    {
        id: 'dongpian-tea',
        name: '冬片仔茶',
        subtitle: '暖冬限定，清揚甘甜',
        price: 550,
        image: '/images/shop/placeholder_tea.png',
        tags: ['茶葉', '冬片', '台灣烏龍', '冬片仔'],
        category: 'tea',
        orderUrl: DEFAULT_ORDER_URL,
        description: '暖冬催生的台灣本土地方特色茶，茶湯清揚、甘甜醇厚、不易苦澀。',
        specs: ['75g / 罐', '半球型', '季節限定'],
    },
];

// ── 讀寫 localStorage ──

const DELETED_KEY = 'tea_products_deleted_v1';

function loadCustomProducts() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
}

export function saveCustomProducts(products) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch { }
}

function loadDeletedIds() {
    try {
        return JSON.parse(localStorage.getItem(DELETED_KEY)) || [];
    } catch { return []; }
}

function saveDeletedIds(ids) {
    try {
        localStorage.setItem(DELETED_KEY, JSON.stringify(ids));
    } catch { }
}

// ── 合併預設 + 自訂商品（排除已刪除） ──

export function getAllProducts() {
    const custom = loadCustomProducts();
    const deletedIds = loadDeletedIds();
    const map = new Map();
    DEFAULT_PRODUCTS.forEach((p) => map.set(p.id, { ...p, _source: 'default' }));
    custom.forEach((p) => map.set(p.id, { ...p, _source: 'custom' }));
    // 排除已刪除的商品
    deletedIds.forEach((id) => map.delete(id));
    return [...map.values()];
}

export function getCustomProducts() {
    return loadCustomProducts();
}

export function addProduct(product) {
    const custom = loadCustomProducts();
    const id = product.id || `product_${Date.now()}`;
    custom.push({ ...product, id });
    saveCustomProducts(custom);
    // 如果之前被刪過，移除刪除記錄
    const deleted = loadDeletedIds().filter((d) => d !== id);
    saveDeletedIds(deleted);
    return id;
}

export function updateProduct(id, updates) {
    const custom = loadCustomProducts();
    const idx = custom.findIndex((p) => p.id === id);
    if (idx >= 0) { custom[idx] = { ...custom[idx], ...updates }; }
    else { custom.push({ ...updates, id }); }
    saveCustomProducts(custom);
}

export function deleteProduct(id) {
    // 從自訂列表移除
    const custom = loadCustomProducts().filter((p) => p.id !== id);
    saveCustomProducts(custom);
    // 加入已刪除清單（處理預設商品）
    const deleted = loadDeletedIds();
    if (!deleted.includes(id)) {
        deleted.push(id);
        saveDeletedIds(deleted);
    }
}

// ── 查詢函式 ──

export function getRelatedProducts(tags = [], limit = 6) {
    if (!tags.length) return [];
    const lowerTags = tags.map((t) => t.toLowerCase());
    return getAllProducts()
        .filter((p) => p.tags?.some((t) => lowerTags.includes(t.toLowerCase())))
        .slice(0, limit);
}

export function getProductsByCategory(category) {
    return getAllProducts().filter((p) => p.category === category);
}

export function getProductById(id) {
    return getAllProducts().find((p) => p.id === id) || null;
}

export { DEFAULT_ORDER_URL };

// ── 展示設定（哪些頁面顯示商品推薦） ──

const DISPLAY_KEY = 'tea_products_display_v1';

// 可設定的頁面列表
export const PAGE_OPTIONS = [
    { id: 'journey', label: '學習旅程' },
    { id: 'home', label: '首頁' },
    { id: 'varieties', label: '六大茶類' },
    { id: 'puerh', label: '普洱茶' },
    { id: 'cultivars', label: '茶樹品種' },
    { id: 'science', label: '化學/製程' },
    { id: 'brewing', label: '沖泡/工藝' },
    { id: 'featured', label: '台灣特色茶' },
    { id: 'seasons', label: '季節採收' },
    { id: 'zisha', label: '紫砂' },
    { id: 'regions', label: '產區導覽' },
    { id: 'history', label: '歷史文化' },
    { id: 'ceremony', label: '茶席美學' },
    { id: 'tea_talk', label: '茶言觀色' },
    { id: 'sensory', label: '品評考題' },
    { id: 'academy_chonghua', label: '崇華書院（所有課程）' },
    { id: 'academy_xueya', label: '學雅（所有課程）' },
    { id: 'academy_zhiya', label: '質雅（所有課程）' },
];

export function getDisplayConfig() {
    try {
        return JSON.parse(localStorage.getItem(DISPLAY_KEY)) || [];
    } catch { return []; }
}

export function saveDisplayConfig(enabledPages) {
    try {
        localStorage.setItem(DISPLAY_KEY, JSON.stringify(enabledPages));
    } catch { }
}

export function isPageEnabled(activeTab) {
    const config = getDisplayConfig();
    if (config.length === 0) return false;
    // 直接匹配
    if (config.includes(activeTab)) return true;
    // academy 群組匹配：academy_chonghua_03 → academy_chonghua
    if (activeTab.startsWith('academy_chonghua') && config.includes('academy_chonghua')) return true;
    if (activeTab.startsWith('academy_xueya') && config.includes('academy_xueya')) return true;
    if (activeTab.startsWith('academy_zhiya') && config.includes('academy_zhiya')) return true;
    return false;
}
