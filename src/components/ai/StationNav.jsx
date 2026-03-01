import React from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { TEA_TYPES } from '../../data/quizData';

const STORAGE_KEY = 'teaLearner_v1';

// quiz key → activeTab
const TAB_MAP = {
    varieties: 'varieties',
    science: 'science',
    cultivars: 'cultivars',
    process: 'brewing',
    featured: 'featured',
    ceremony: 'ceremony',
};

// activeTab → quiz key
const REVERSE_MAP = Object.fromEntries(
    Object.entries(TAB_MAP).map(([k, v]) => [v, k])
);

const LABELS = {
    varieties: '六大茶類',
    science: '茶葉科學',
    cultivars: '茶樹品種',
    process: '製程工藝',
    featured: '台灣特色茶',
    ceremony: '茶道美學',
};

/**
 * 個人化學習導航列
 * 根據測驗結果的 path 顯示「上一站 / 下一站」
 */
export default function StationNav({ activeTab, goToTab }) {
    let saved;
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; }
    if (!saved?.type) return null;

    const info = TEA_TYPES[saved.type];
    if (!info?.path) return null;

    const quizKey = REVERSE_MAP[activeTab];
    if (!quizKey) return null;

    const idx = info.path.indexOf(quizKey);
    if (idx === -1) return null;

    const prev = idx > 0 ? info.path[idx - 1] : null;
    const next = idx < info.path.length - 1 ? info.path[idx + 1] : null;

    return (
        <div
            className="max-w-[80rem] mx-auto px-4 py-6 pb-24"
            style={{ paddingLeft: 'calc(var(--atlas-dock-sidebar-width, 0px) + 48px)' }}
        >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-200 shadow-sm p-4 flex items-center justify-between gap-4">
                {/* 上一站 */}
                <div className="flex-1">
                    {prev && (
                        <button
                            onClick={() => goToTab(TAB_MAP[prev])}
                            className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-700 font-sans text-[16px] font-semibold transition-colors"
                        >
                            <ChevronLeft size={18} />
                            <span className="hidden sm:inline">上一站：</span>
                            {LABELS[prev]}
                        </button>
                    )}
                </div>

                {/* 目前位置 */}
                <div className="flex items-center gap-2 text-emerald-600 font-sans text-[14px] font-bold shrink-0">
                    <MapPin size={15} />
                    第 {idx + 1} / {info.path.length} 站
                </div>

                {/* 下一站 */}
                <div className="flex-1 text-right">
                    {next ? (
                        <button
                            onClick={() => goToTab(TAB_MAP[next])}
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-[16px] font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm ml-auto"
                        >
                            下一站：{LABELS[next]}
                            <ChevronRight size={18} />
                        </button>
                    ) : (
                        <span className="font-sans text-[15px] font-bold text-amber-600">🎉 學習路線完成！</span>
                    )}
                </div>
            </div>
        </div>
    );
}
