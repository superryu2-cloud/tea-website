import React from 'react';
import { ChevronRight, Layout, Map, Layers, Leaf, FlaskConical, PenTool, Mountain, Coffee, Search } from 'lucide-react';

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
        },
        {
            id: 'cultivars',
            title: '品種',
            subtitle: '葉型、加工適性與台灣栽培品種',
            action: () => goToTab('cultivars'),
        },
        {
            id: 'science',
            title: '茶葉科學',
            subtitle: '氧化／烘焙／內含物：用科學讀懂風味',
            action: () => {
                setScienceRoom('oxidation');
                goToTab('science');
            },
        },
        {
            id: 'process',
            title: '製程',
            subtitle: '從採摘到成茶：把工序連成一條線',
            action: () => goToTab('brewing'),
        },
        {
            id: 'tw',
            title: '台灣特色茶',
            subtitle: '把知識套回到具體茶品與產區',
            action: () => goToTab('featured'),
        },
        {
            id: 'brew',
            title: '沖泡',
            subtitle: '用正確手法釋放茶的層次',
            action: () => goToTab('brewing'),
        },
        {
            id: 'aesthetics',
            title: '茶藝（茶道）',
            subtitle: '茶席美學、節奏與儀式感',
            action: () => goToTab('ceremony'),
        },
    ];

    return (
        <div className="museum-page !pt-6 md:!pt-8">
            <div className="museum-stage">
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
                                <div key={s.id} className="museum-card px-5 py-4">
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0">
                                            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-extrabold text-emerald-900">
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
                            </div>
                            <p className="mt-3 text-stone-600 leading-relaxed">
                                你可以把每一站當成茶席上的一張筆記：先抓住核心，再用需要時才查的「百科卡片」補齊細節。
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {[
                                    { label: '六大茶類', icon: Layers },
                                    { label: '茶樹品種', icon: Leaf },
                                    { label: '氧化/烘焙', icon: FlaskConical },
                                    { label: '製程/工藝', icon: PenTool },
                                    { label: '特色茶', icon: Mountain },
                                    { label: '沖泡/茶席', icon: Coffee },
                                ].map((it) => (
                                    <div key={it.label} className="rounded-2xl border border-stone-200 bg-white/70 px-4 py-3">
                                        <div className="flex items-center gap-2 text-stone-800 font-extrabold">
                                            <it.icon size={16} className="text-emerald-700" />
                                            <span className="text-sm">{it.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="museum-panel p-6 md:p-8">
                            <div className="flex items-center gap-3">
                                <Search className="text-emerald-700" />
                                <div className="text-lg font-extrabold text-stone-900">百科入口</div>
                            </div>
                            <p className="mt-3 text-stone-600 leading-relaxed">
                                想直接查資料：請到上方功能列切換到對應主題（六大茶類／品種／科學／特色茶…）。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
