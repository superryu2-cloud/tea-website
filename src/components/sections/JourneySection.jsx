import React, { useState, useMemo, useRef } from 'react';
import { ChevronRight, Layout, Map, Layers, Leaf, FlaskConical, PenTool, Mountain, Coffee, Search, X } from 'lucide-react';
import AiGuideSection from './AiGuideSection';
import SEARCH_INDEX from '../../data/searchIndex';

/**
 * QuickSearchCard – 百科入口搜尋元件
 * 即時搜尋 SEARCH_INDEX，顯示匹配結果連結
 */
function QuickSearchCard({ goToTab, setScienceRoom, navigateToSearch }) {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return [];
        return SEARCH_INDEX.filter(item =>
            item.keywords.toLowerCase().includes(q) || item.label.toLowerCase().includes(q)
        ).slice(0, 8);
    }, [query]);

    const navigate = (item) => {
        if (navigateToSearch && item.detail) {
            navigateToSearch(item.tab, item.detail);
        } else {
            goToTab(item.tab);
        }
        setQuery('');
    };

    const CATEGORY_COLORS = {
        '六大茶類': 'bg-emerald-400/20 text-emerald-200',
        '青茶': 'bg-emerald-400/20 text-emerald-200',
        '特色茶': 'bg-amber-400/20 text-amber-200',
        '品種': 'bg-teal-400/20 text-teal-200',
        '科學': 'bg-blue-400/20 text-blue-200',
        '沖泡': 'bg-orange-400/20 text-orange-200',
        '製程': 'bg-orange-400/20 text-orange-200',
        '茶道': 'bg-rose-400/20 text-rose-200',
        '產區': 'bg-lime-400/20 text-lime-200',
        '普洱': 'bg-yellow-400/20 text-yellow-200',
        '紫砂': 'bg-red-400/20 text-red-200',
        '歷史': 'bg-violet-400/20 text-violet-200',
        '季節': 'bg-cyan-400/20 text-cyan-200',
        '品評': 'bg-pink-400/20 text-pink-200',
    };

    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950/95 via-stone-900/95 to-emerald-900/90 p-6 md:p-8 text-white shadow-2xl border border-amber-500/10 hover:border-amber-500/20 transition-colors duration-500 backdrop-blur-2xl">
            {/* 裝飾光暈 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl" />
            {/* 浮動茶葉裝飾 */}
            <div className="absolute top-3 right-6 text-2xl opacity-15 decoration-float-slow select-none pointer-events-none">🍃</div>
            <div className="absolute bottom-4 right-12 text-lg opacity-10 decoration-float select-none pointer-events-none">🍵</div>
            <div className="absolute top-1/2 left-3 text-xl opacity-10 decoration-sway select-none pointer-events-none">🌿</div>
            {/* 紙張紋理 */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                mixBlendMode: 'overlay'
            }} />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/20 border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-900/20">
                        <Search size={20} className="text-amber-300" />
                    </div>
                    <div>
                        <h3 className="text-[22px] font-extrabold tracking-tight">百科入口</h3>
                        <p className="text-[12px] font-semibold text-emerald-300/60 tracking-widest uppercase">Quick Search</p>
                    </div>
                </div>

                {/* 金色分隔線 */}
                <div className="h-px bg-gradient-to-r from-amber-400/40 via-amber-300/20 to-transparent my-4" />

                {/* 搜尋輸入框 */}
                <div className="relative mb-4">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-300/50 pointer-events-none" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="搜尋茶類、品種、工藝、產區..."
                        className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-emerald-200/30 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/40 transition-all backdrop-blur-sm shadow-inner"
                    />
                    {query && (
                        <button
                            onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-300/50 hover:text-white transition-colors"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>

                {/* 搜尋結果 */}
                {results.length > 0 && (
                    <div className="mb-4 space-y-1.5 max-h-[280px] overflow-y-auto scrollbar-thin">
                        {results.map((item, i) => (
                            <button
                                type="button"
                                key={`${item.tab}-${i}`}
                                onClick={() => navigate(item)}
                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-amber-300/30 transition-all duration-200 text-left group"
                            >
                                <span className={`shrink-0 px-2 py-0.5 rounded-md text-[11px] font-bold tracking-wide ${CATEGORY_COLORS[item.category] || 'bg-white/10 text-white/70'}`}>
                                    {item.category}
                                </span>
                                <span className="text-[14px] font-semibold text-white/90 group-hover:text-white truncate flex-1">
                                    {item.label}
                                </span>
                                <ChevronRight size={14} className="shrink-0 text-white/30 group-hover:text-amber-300 transition-colors" />
                            </button>
                        ))}
                    </div>
                )}

                {query && results.length === 0 && (
                    <div className="mb-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-center text-emerald-200/60 text-[14px]">
                        找不到「{query}」的相關內容
                    </div>
                )}

                {/* 熱門主題 快速連結 */}
                {!query && (
                    <>
                        <p className="text-[15px] font-medium text-emerald-100/60 mb-3">
                            熱門主題：
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {[
                                { label: '六大茶類', icon: Layers, action: () => goToTab('varieties') },
                                { label: '品種', icon: Leaf, action: () => goToTab('cultivars') },
                                { label: '科學', icon: FlaskConical, action: () => { setScienceRoom('oxidation'); goToTab('science'); } },
                                { label: '特色茶', icon: Mountain, action: () => goToTab('featured') },
                                { label: '茶道', icon: Coffee, action: () => goToTab('ceremony') },
                            ].map((it) => (
                                <button
                                    key={it.label}
                                    type="button"
                                    onClick={it.action}
                                    className="group/chip rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2.5 text-[15px] font-bold text-white hover:bg-white/25 hover:border-amber-300/50 hover:shadow-lg hover:shadow-amber-900/10 transition-all duration-200 flex items-center gap-2"
                                >
                                    <it.icon size={14} className="text-amber-300/70 group-hover/chip:text-amber-300 transition-colors" />
                                    {it.label}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

const TEA_POEMS = [
    { text: "琴裡知聞唯綠水，茶中故舊是蒙山。", author: "白居易" },
    { text: "一杯春露暫留客，兩腋清風幾欲仙。", author: "陸游" },
    { text: "採茶歌裡春光好，煮茗香中世味長。", author: "古詩" },
    { text: "從來佳茗似佳人，味濃香永意無窮。", author: "蘇軾" },
    { text: "且將新火試新茶，詩酒趁年華。", author: "蘇軾" },
    { text: "半壁山房待明月，一盞清茗酬知音。", author: "佚名" }
];

/**
 * JourneySection - 茶館筆記學習旅程區塊
 * 顯示建議的學習路線和步驟
 * 
 * @param {Function} goToTab - 切換主要分頁的函數
 * @param {Function} setScienceRoom - 設置科學室的函數
 */
export default function JourneySection({ goToTab, setScienceRoom, navigateToSearch }) {
    const [randomPoem] = useState(() => {
        const idx = Math.floor(Math.random() * TEA_POEMS.length);
        return TEA_POEMS[idx];
    });

    const steps = [
        {
            id: 'six',
            title: '六大茶類',
            subtitle: '先建立分類與風味直覺',
            action: () => goToTab('varieties'),
            image: '/images/journey/step_six.png',
        },
        {
            id: 'cultivars',
            title: '品種',
            subtitle: '葉型、加工適性與台灣栽培品種',
            action: () => goToTab('cultivars'),
            image: '/images/journey/step_cultivar.png',
        },
        {
            id: 'science',
            title: '茶葉科學',
            subtitle: '氧化／烘焙／內含物：用科學讀懂風味',
            action: () => {
                setScienceRoom('oxidation');
                goToTab('science');
            },
            image: '/images/journey/step_science.png',
        },
        {
            id: 'process',
            title: '製程',
            subtitle: '從採摘到成茶：把工序連成一條線',
            action: () => goToTab('brewing'),
            image: '/images/journey/step_process.png',
        },
        {
            id: 'tw',
            title: '台灣特色茶',
            subtitle: '把知識套回到具體茶品與產區',
            action: () => goToTab('featured'),
            image: '/images/journey/step_taiwan.png',
        },
        {
            id: 'brew',
            title: '沖泡',
            subtitle: '用正確手法釋放茶的層次',
            action: () => goToTab('brewing'),
            image: '/images/journey/step_brewing.png',
        },
        {
            id: 'aesthetics',
            title: '茶藝（茶道）',
            subtitle: '茶席美學、節奏與儀式感',
            action: () => goToTab('ceremony'),
            image: '/images/journey/step_ceremony.png',
        },
    ];

    return (
        <div className="museum-page !pt-0">
            {/* Hero Banner - Cinematic Zen Portal */}
            <div className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden group/hero shadow-2xl border-b border-emerald-900/10">
                <img
                    src="/images/hero/tea_garden.png"
                    alt="茶園風景"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-[5000ms] ease-out group-hover/hero:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-900/30 to-stone-950/70"></div>
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/5 rounded-[2.5rem] pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    {/* Floating Zen Typography (No Frame Background, Master Calligraphy) */}
                    <div className="max-w-4xl w-full text-center space-y-6 transition-all duration-700 transform hover:scale-[1.01]">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 text-emerald-100 text-xs font-black tracking-[0.2em] uppercase">
                            <Leaf size={12} className="animate-pulse" /> TEA EXHIBITION ATLAS
                        </div>
                        <h1 className="relative tracking-tight leading-tight py-2">
                            <span className="sr-only">茶韻之旅</span>
                            <img 
                                src="/images/hero/chayun_calligraphy_transparent.png" 
                                alt="茶韻之旅" 
                                className="w-[75%] sm:w-[60%] md:w-[50%] max-w-[480px] md:max-w-[580px] h-auto mx-auto object-contain invert brightness-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-105" 
                            />
                        </h1>
                        <div className="w-16 h-1 bg-amber-400/80 mx-auto rounded-full" />
                        <p className="text-[16px] md:text-[20px] text-amber-200/95 tracking-[0.25em] font-serif italic font-light drop-shadow">
                            「{randomPoem.text}」
                            <span className="text-[12px] opacity-75 tracking-normal ml-2 font-sans font-semibold not-italic block md:inline mt-1 md:mt-0">— {randomPoem.author}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Supporting Images - 輔助圖片區 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative overflow-hidden bg-white border border-stone-200/80 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer group">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="/images/hero/tea_ceremony.png"
                                alt="茶藝時刻"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-extrabold mb-2">茶藝美學</h3>
                                <p className="text-sm opacity-90">傳統茶道的優雅時刻</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden bg-white border border-stone-200/80 rounded-[2rem] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer group">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="/images/hero/tea_leaves.png"
                                alt="茶葉之美"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-extrabold mb-2">茶葉之美</h3>
                                <p className="text-sm opacity-90">晨露中的新鮮茶芽</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="museum-stage !pt-6 md:!pt-8">
                <div className="mb-10 text-center">
                    <div className="museum-label mx-auto">TEA HOUSE · JOURNEY</div>
                    <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
                        茶館筆記 · 學習旅程
                    </h2>
                    <p className="mt-4 text-stone-600 max-w-3xl mx-auto leading-relaxed text-lg">
                        這是一段循序漸進的茶學路線：先建立分類與直覺，再走進科學與製程，最後回到茶席上的沖泡與美學。
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
                    {/* 左欄：建議學習路線 */}
                    <div className="museum-panel p-6 md:p-8">
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="min-w-0">
                                <div className="text-sm font-extrabold text-emerald-800 tracking-wide">建議路線</div>
                                <div className="mt-2 text-stone-600 leading-relaxed">
                                    依照順序學習最省力；若要備課，也可直接跳到任一站。
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => goToTab('home')}
                                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50"
                            >
                                <Layout size={18} className="text-emerald-700" />
                                百科總覽
                            </button>
                        </div>

                        <div className="relative space-y-6">
                            {/* 蜿蜒茶徑垂直虛線 (Cascading Tea Trail Scroll) */}
                            <div className="absolute left-[68px] top-16 bottom-16 w-0.5 border-l-2 border-dashed border-emerald-600/20 pointer-events-none hidden md:block z-0 animate-pulse"></div>

                            {steps.map((s, idx) => (
                                <div
                                    key={s.id}
                                    onClick={s.action}
                                    className="relative overflow-hidden bg-white border border-stone-200/80 rounded-[2rem] px-6 py-6 group hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-500/20 hover:bg-gradient-to-r hover:from-white hover:to-emerald-50/20 transition-all duration-500 cursor-pointer z-10"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="shrink-0 relative transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                                            <div className="w-24 h-24 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-emerald-300 shadow-inner group-hover:shadow-lg group-hover:shadow-emerald-900/10">
                                                <img
                                                    src={s.image}
                                                    alt={s.title}
                                                    className="w-full h-full object-cover opacity-90 mix-blend-multiply filter contrast-125 sepia-[0.2]"
                                                />
                                            </div>
                                            <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-emerald-800 text-emerald-50 border-2 border-white shadow-md flex items-center justify-center font-black text-sm transition-all group-hover:bg-amber-500 group-hover:scale-110">
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="min-w-0">
                                                    <div className="text-xl font-extrabold text-stone-900 tracking-tight group-hover:text-emerald-950 transition-colors">{s.title}</div>
                                                    <div className="mt-1.5 text-stone-600 leading-relaxed text-[15px]">{s.subtitle}</div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); s.action(); }}
                                                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-800 text-white px-5 py-2.5 text-[15px] font-extrabold shadow-sm border border-emerald-700/30 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:shadow-md group-hover:shadow-amber-500/20 transition-all duration-300"
                                                >
                                                    前往
                                                    <ChevronRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 右欄：固定導覽地圖與搜尋入口 */}
                    <div className="lg:sticky lg:top-24 space-y-6">
                        <div className="museum-panel p-6 md:p-8">
                            <div className="flex items-center gap-3">
                                <Map className="text-emerald-700" />
                                <div className="text-lg font-extrabold text-stone-900">學習地圖</div>
                                <span className="text-xl opacity-30"><Coffee size={20} className="inline opacity-30" /></span>
                            </div>
                            <p className="mt-3 text-stone-600 leading-relaxed">
                                你可以把每一站當成茶席上的一張筆記：先抓住核心，再用需要時才查的「百科卡片」補齊細節。
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {[
                                    { label: '六大茶類', icon: Layers, action: () => goToTab('varieties'), theme: 'bg-emerald-50/40 border-emerald-100 text-emerald-900 hover:border-emerald-300 hover:bg-emerald-50/80 hover:shadow-emerald-100/50' },
                                    { label: '茶樹品種', icon: Leaf, action: () => goToTab('cultivars'), theme: 'bg-teal-50/40 border-teal-100 text-teal-900 hover:border-teal-300 hover:bg-teal-50/80 hover:shadow-teal-100/50' },
                                    { label: '氧化/烘焙', icon: FlaskConical, action: () => { setScienceRoom('oxidation'); goToTab('science'); }, theme: 'bg-sky-50/40 border-sky-100 text-sky-900 hover:border-sky-300 hover:bg-sky-50/80 hover:shadow-sky-100/50' },
                                    { label: '製程/工藝', icon: PenTool, action: () => goToTab('tea_talk'), theme: 'bg-amber-50/40 border-amber-100 text-amber-900 hover:border-amber-300 hover:bg-amber-50/80 hover:shadow-amber-100/50' },
                                    { label: '特色茶', icon: Mountain, action: () => goToTab('featured'), theme: 'bg-rose-50/40 border-rose-100 text-rose-900 hover:border-rose-300 hover:bg-rose-50/80 hover:shadow-rose-100/50' },
                                    { label: '沖泡/茶席', icon: Coffee, action: () => goToTab('ceremony'), theme: 'bg-stone-50/40 border-stone-200 text-stone-900 hover:border-stone-400 hover:bg-stone-50/80 hover:shadow-stone-100/50' },
                                ].map((it) => (
                                    <button
                                        key={it.label}
                                        type="button"
                                        onClick={it.action}
                                        className={`rounded-2xl border px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${it.theme}`}
                                    >
                                        <div className="flex items-center gap-2 font-extrabold">
                                            <it.icon size={16} className="shrink-0" />
                                            <span className="text-sm">{it.label}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <QuickSearchCard goToTab={goToTab} setScienceRoom={setScienceRoom} navigateToSearch={navigateToSearch} />
                    </div>
                </div>
            </div>

            <AiGuideSection goToTab={goToTab} />
        </div>
    );
}
