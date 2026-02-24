import React from 'react';
import { ChevronRight, Layout, Map, Layers, Leaf, FlaskConical, PenTool, Mountain, Coffee, Search } from 'lucide-react';
import AiGuideSection from './AiGuideSection';

/**
 * JourneySection - 茶館筆記學習旅程區塊
 * 顯示建議的學習路線和步驟
 * 
 * @param {Function} goToTab - 切換主要分頁的函數
 * @param {Function} setScienceRoom - 設置科學室的函數
 */
export default function JourneySection({ goToTab, setScienceRoom }) {
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
            {/* Hero Banner - 大型英雄橫幅 */}
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src="/images/hero/tea_garden.png"
                    alt="茶園風景"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl">
                            茶韻之旅
                        </h1>
                        <p className="text-xl md:text-2xl font-light tracking-widest drop-shadow-lg">
                            TEA EXHIBITION ATLAS
                        </p>
                    </div>
                </div>
            </div>

            {/* Supporting Images - 輔助圖片區 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="museum-card overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="/images/hero/tea_ceremony.png"
                                alt="茶藝時刻"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-extrabold mb-2">茶藝美學</h3>
                                <p className="text-sm opacity-90">傳統茶道的優雅時刻</p>
                            </div>
                        </div>
                    </div>
                    <div className="museum-card overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="/images/hero/tea_leaves.png"
                                alt="茶葉之美"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

                        <div className="space-y-4">
                            {steps.map((s, idx) => (
                                <div key={s.id} className="museum-card px-5 py-6 group hover:border-emerald-200/60 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-6">
                                        <div className="shrink-0 relative group-hover:scale-105 transition-transform duration-300">
                                            <div className="w-24 h-24 rounded-full bg-stone-50/50 border border-stone-100 flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={s.image}
                                                    alt={s.title}
                                                    className="w-full h-full object-cover opacity-90 mix-blend-multiply filter contrast-125 sepia-[0.3]"
                                                />
                                            </div>
                                            <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-emerald-800 text-emerald-50 border-2 border-white shadow-sm flex items-center justify-center font-bold text-sm">
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="min-w-0">
                                                    <div className="text-lg font-extrabold text-stone-900">{s.title}</div>
                                                    <div className="mt-1 text-stone-600 leading-relaxed">{s.subtitle}</div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={s.action}
                                                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-700 text-white px-4 py-2 text-sm font-extrabold hover:bg-emerald-800"
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
                                    { label: '六大茶類', icon: Layers, action: () => goToTab('varieties') },
                                    { label: '茶樹品種', icon: Leaf, action: () => goToTab('cultivars') },
                                    { label: '氧化/烘焙', icon: FlaskConical, action: () => { setScienceRoom('oxidation'); goToTab('science'); } },
                                    { label: '製程/工藝', icon: PenTool, action: () => goToTab('tea_talk') },
                                    { label: '特色茶', icon: Mountain, action: () => goToTab('featured') },
                                    { label: '沖泡/茶席', icon: Coffee, action: () => goToTab('ceremony') },
                                ].map((it) => (
                                    <button
                                        key={it.label}
                                        type="button"
                                        onClick={it.action}
                                        className="wavy-card rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 transition-all duration-300 hover:scale-105 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 text-stone-800 font-extrabold">
                                            <it.icon size={16} className="text-emerald-700" />
                                            <span className="text-sm">{it.label}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-stone-900 p-6 md:p-8 text-white shadow-2xl">
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
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/20 border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-900/20">
                                        <Search size={20} className="text-amber-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-[22px] font-extrabold tracking-tight">百科入口</h3>
                                        <p className="text-[12px] font-semibold text-emerald-300/60 tracking-widest uppercase">Quick Access</p>
                                    </div>
                                </div>
                                {/* 金色分隔線 */}
                                <div className="h-px bg-gradient-to-r from-amber-400/40 via-amber-300/20 to-transparent my-4" />
                                <p className="text-[17px] font-medium text-emerald-100/80 leading-relaxed mb-5">
                                    想直接查資料？點選下方主題快速跳轉：
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AiGuideSection goToTab={goToTab} />
        </div>
    );
}
