import React from 'react';
import RadarChart from './RadarChart';
import { TEA_TYPES } from '../../data/quizData';
import { ChevronRight, RefreshCw, Star } from 'lucide-react';

const STEP_LABELS = {
    varieties: '六大茶類',
    science: '茶葉科學',
    cultivars: '茶樹品種',
    process: '製程工藝',
    featured: '台灣特色茶',
    ceremony: '茶道美學',
};

const COLOR_MAP = {
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', badge: 'bg-rose-500', text: 'text-rose-800' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-500', text: 'text-blue-800' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-500', text: 'text-amber-800' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-500', text: 'text-emerald-800' },
};

export default function ResultCard({ result, onRestart, onNavigate }) {
    const { type, scores } = result;
    const info = TEA_TYPES[type];
    const colors = COLOR_MAP[info.color];

    return (
        <div className="w-full max-w-3xl mx-auto space-y-6">
            {/* 茶人類型主卡 */}
            <div className={`rounded-3xl border-2 ${colors.border} ${colors.bg} p-8 relative overflow-hidden`}>
                <div className="absolute top-4 right-4 opacity-10 text-[120px] leading-none select-none pointer-events-none">
                    {info.emoji}
                </div>
                <div className="relative z-10">
                    <div className={`inline-flex items-center gap-2 ${colors.badge} text-white rounded-full px-4 py-1 text-[13px] font-bold mb-4`}>
                        <Star size={12} />
                        你的茶人類型
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-5xl">{info.emoji}</span>
                        <div>
                            <h3 className="font-sans text-[28px] font-extrabold text-stone-900">{info.name}</h3>
                            <p className={`font-sans text-[16px] font-semibold ${colors.text} italic`}>{info.tagline}</p>
                        </div>
                    </div>
                    <p className="font-sans text-[17px] text-stone-700 leading-[1.9]">{info.description}</p>

                    {/* 今日推薦茶 */}
                    <div className="mt-5 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-white">
                        <p className="text-[13px] font-bold tracking-widest text-stone-500 mb-1">☕ 今日推薦</p>
                        <p className="font-sans text-[19px] font-extrabold text-stone-900">{info.todayTea}</p>
                        <p className="font-sans text-[15px] text-stone-600 mt-0.5">{info.todayReason}</p>
                    </div>
                </div>
            </div>

            {/* 知識雷達圖 + 個人化路線 */}
            <div className="grid md:grid-cols-2 gap-5">
                {/* 雷達圖 */}
                <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
                    <h4 className="font-sans text-[17px] font-extrabold text-stone-900 mb-4 text-center">知識地圖（初始評估）</h4>
                    <RadarChart scores={scores} />
                    <p className="text-center text-[13px] text-stone-400 mt-3">完成章節測驗後分數會更新</p>
                </div>

                {/* 個人化學習路線 */}
                <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
                    <h4 className="font-sans text-[17px] font-extrabold text-stone-900 mb-4">你的學習路線</h4>
                    <ol className="space-y-2.5">
                        {info.path.map((key, idx) => (
                            <li
                                key={key}
                                className="flex items-center gap-3 cursor-pointer hover:bg-stone-50 rounded-xl px-2 py-1.5 -mx-2 transition-colors"
                                onClick={() => onNavigate && onNavigate(key)}
                            >
                                <span className={`w-7 h-7 rounded-full ${idx === 0 ? colors.badge + ' text-white' : 'bg-stone-100 text-stone-500'} flex items-center justify-center text-[13px] font-bold shrink-0`}>
                                    {idx + 1}
                                </span>
                                <span className={`font-sans text-[17px] ${idx === 0 ? 'font-bold text-stone-900' : 'text-stone-600 hover:text-emerald-700'}`}>
                                    {STEP_LABELS[key]}
                                </span>
                                {idx === 0 && (
                                    <span className="ml-auto text-[12px] font-bold text-teal-600 bg-teal-50 rounded-full px-2 py-0.5">從這裡開始</span>
                                )}
                                <ChevronRight size={14} className="ml-auto text-stone-300" />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* 操作按鈕 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                    onClick={() => onNavigate && onNavigate(info.path[0])}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-sans text-[17px] px-8 py-3 rounded-full transition-colors shadow-lg"
                >
                    前往第一站：{STEP_LABELS[info.path[0]]}
                    <ChevronRight size={18} />
                </button>
                <button
                    onClick={onRestart}
                    className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-600 hover:bg-stone-50 font-semibold font-sans text-[15px] px-6 py-3 rounded-full transition-colors"
                >
                    <RefreshCw size={15} />
                    重新測試
                </button>
            </div>
        </div>
    );
}
