// ─────────────────────────────────────────────────────────────────
// 商品資料庫（支援 localStorage 動態新增）
// ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'tea_products_v1';
const DEFAULT_ORDER_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

// ── 預設商品（範例，可直接刪改） ──
const DEFAULT_PRODUCTS = [
    {
        "id": "cha-li-set",
        "name": "茶則組",
        "subtitle": "",
        "price": 550,
        "image": "/images/shop/20210928013106142.jpg",
        "tags": [
            "茶具",
            "茶理",
            "茶撥",
            "茶掏"
        ],
        "category": "accessory",
        "orderUrl": "請洽茶香園",
        "description": "竹製茶撥與茶掏，精神象徵，理茶之用。",
        "specs": [
            "長 18.5cm",
            "竹製",
            "茶則+茶理+則置"
        ]
    },
    {
        "id": "hu-cheng-round",
        "name": "茶具組",
        "subtitle": "青白系列 旅行組",
        "price": 3600,
        "image": "/images/shop/LINE_NOTE_260223_1.jpg",
        "tags": [
            "茶具",
            "壺承",
            "勻杯",
            "茶則"
        ],
        "category": "teaware",
        "orderUrl": "請洽茶香園",
        "description": "茶則組（刻）：550\n茶則（黑）380\n茶則（原色）400\n則置100\n茶理100\n水盂（青白）650\n茶具組3600",
        "specs": [
            "瓷器"
        ]
    },
    {
        "id": "dongpian-tea",
        "name": "騰王暖茶",
        "subtitle": "騰王暖茶來自「永福鎮文星村」，位於福建省龍岩市漳平市。",
        "price": 500,
        "image": "/images/shop/68376555_749739878819278_753155127040278528_n.jpg",
        "tags": [
            "茶葉",
            "冬片仔",
            "紅茶"
        ],
        "category": "tea",
        "orderUrl": "https://shopee.tw/-%E5%84%AA%E9%81%B8-%E5%8A%A9%E7%9C%A0%E6%9A%96%E8%83%83%E9%A6%96%E9%81%B8%E8%8C%B6%E8%91%89%E3%80%8A%E9%A8%B0%E7%8E%8B%E6%9A%96%E8%8C%B6%E3%80%8B%E7%84%A1%E8%BE%B2%E8%97%A5SOD%E6%B0%B8%E7%A6%8F%E9%AB%98%E5%B1%B1%E7%B4%85%E8%8C%B6-85%E5%BA%A6C%E6%B2%96%E6%B3%A1-i.40329816.2652815932",
        "description": "優良品種(軟枝烏龍)  \n茶葉生長環境好  \n不灑農藥，使用奈米有機肥  \n有噴SOD(超氧化物歧化酶)  \n茶性為溫姓",
        "specs": [
            "75g / 包"
        ]
    }
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

// 預設展示頁面（部署後即生效，後台修改會覆蓋）
const DEFAULT_DISPLAY_PAGES = ["academy_chonghua","journey"];

export function getDisplayConfig() {
    try {
        const stored = JSON.parse(localStorage.getItem(DISPLAY_KEY));
        if (stored && stored.length > 0) return stored;
        return DEFAULT_DISPLAY_PAGES;
    } catch { return DEFAULT_DISPLAY_PAGES; }
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
