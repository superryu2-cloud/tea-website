import React, { useState } from 'react';
import { Sparkles, Leaf, Flame, Clock, RefreshCw, RotateCcw } from 'lucide-react';

/**
 * HeroSection - 首頁英雄區塊
 * 顯示網站標題、介紹文字和每日推薦茶品
 * 
 * @param {Function} goToTab - 切換主要分頁的函數
 * @param {Function} goToTeaExhibit - 前往茶品展示的函數
 * @param {Array} teaData - 茶品資料陣列
 */
export default function HeroSection({ goToTab, goToTeaExhibit, teaData = [] }) {
    const getTodayKey = () => {
        const d = new Date();
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    };

    const getDefaultDailyTeaIndex = (todayKey) => {
        const seed = [...String(todayKey)].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
        const len = (teaData && teaData.length) || 1;
        return ((seed * 9301 + 49297) % 233280) % len;
    };

    const todayKey = getTodayKey();
    const defaultDailyTeaIndex = getDefaultDailyTeaIndex(todayKey);
    const [dailyTeaIndex, setDailyTeaIndex] = useState(() => {
        if (typeof window === 'undefined') return defaultDailyTeaIndex;
        const raw = window.localStorage?.getItem('tea.dailyTeaOverride');
        if (!raw) return defaultDailyTeaIndex;
        const [storedDate, storedIndex] = raw.split(':');
        if (storedDate !== todayKey) return defaultDailyTeaIndex;
        const parsed = Number(storedIndex);
        if (!Number.isFinite(parsed)) return defaultDailyTeaIndex;
        const len = (teaData && teaData.length) || 1;
        const normalized = Math.max(0, Math.min(len - 1, Math.round(parsed)));
        return normalized;
    });

    const dailyTea = (teaData && teaData.length > 0)
        ? (teaData[dailyTeaIndex] ?? teaData[defaultDailyTeaIndex] ?? teaData[0])
        : null;
    const isDailyTeaOverride = dailyTeaIndex !== defaultDailyTeaIndex;

    const refreshDailyTea = () => {
        if (!teaData || teaData.length <= 1) return;
        const nextIndex = (dailyTeaIndex + 1 + Math.floor(Math.random() * (teaData.length - 1))) % teaData.length;
        setDailyTeaIndex(nextIndex);
        if (typeof window !== 'undefined') {
            try {
                window.localStorage?.setItem('tea.dailyTeaOverride', `${todayKey}:${nextIndex}`);
            } catch {
                // ignore
            }
        }
    };

    // If no tea data, don't render the daily tea section
    if (!dailyTea) {
        return (
            <div className="relative overflow-hidden pt-4 pb-10 sm:pt-6 sm:pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="museum-frame museum-paper relative overflow-hidden rounded-[40px] border border-stone-200/70 shadow-sm">
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
                        <div className="absolute -bottom-28 -left-28 w-[520px] h-[520px] rounded-full bg-amber-200/25 blur-3xl"></div>
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/50 via-transparent to-white/30"></div>

                        <div className="relative p-8 sm:p-10 md:p-12 lg:p-14">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-bold text-stone-900 sm:text-5xl md:text-6xl font-sans">
                                    <span className="block xl:inline">一期一會</span>{' '}
                                    <span className="block text-green-700 xl:inline">品味茶道之美</span>
                                </h1>
                                <p className="mt-4 text-base sm:text-lg md:text-xl text-stone-700 font-semibold leading-relaxed max-w-2xl sm:mx-auto lg:mx-0">
                                    茶不只是飲品，更是一種生活節奏。從採摘到沖泡，每一步都連著自然與人文的溫度；用一杯茶，把知識變成可感受的風味。
                                </p>
                                <div className="mt-6 sm:flex sm:justify-center lg:justify-start gap-3 flex-wrap">
                                    <button
                                        type="button"
                                        onClick={() => goToTab('varieties')}
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 md:py-4 text-base md:text-lg font-extrabold rounded-xl text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                                    >
                                        探索六大茶類
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => goToTab('featured')}
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 md:py-4 text-base md:text-lg font-extrabold rounded-xl border border-emerald-200 bg-white/70 text-emerald-800 hover:bg-white transition-colors shadow-sm"
                                    >
                                        台灣特色茶
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden pt-4 pb-10 sm:pt-6 sm:pb-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="museum-frame museum-paper relative overflow-hidden rounded-[40px] border border-stone-200/70 shadow-sm">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
                    <div className="absolute -bottom-28 -left-28 w-[520px] h-[520px] rounded-full bg-amber-200/25 blur-3xl"></div>
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/50 via-transparent to-white/30"></div>

                    <div className="relative p-8 sm:p-10 md:p-12 lg:p-14">
                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                            <div className="lg:col-span-7">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-bold text-stone-900 sm:text-5xl md:text-6xl font-sans">
                                        <span className="block xl:inline">一期一會</span>{' '}
                                        <span className="block text-green-700 xl:inline">品味茶道之美</span>
                                    </h1>
                                    <p className="mt-4 text-base sm:text-lg md:text-xl text-stone-700 font-semibold leading-relaxed max-w-2xl sm:mx-auto lg:mx-0">
                                        茶不只是飲品，更是一種生活節奏。從採摘到沖泡，每一步都連著自然與人文的溫度；用一杯茶，把知識變成可感受的風味。
                                    </p>
                                    <div className="mt-6 sm:flex sm:justify-center lg:justify-start gap-3 flex-wrap">
                                        <button
                                            type="button"
                                            onClick={() => goToTab('varieties')}
                                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 md:py-4 text-base md:text-lg font-extrabold rounded-xl text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                                        >
                                            探索六大茶類
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => goToTab('featured')}
                                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 md:py-4 text-base md:text-lg font-extrabold rounded-xl border border-emerald-200 bg-white/70 text-emerald-800 hover:bg-white transition-colors shadow-sm"
                                        >
                                            台灣特色茶
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <aside className="lg:col-span-5">
                                <div className="museum-card p-6 md:p-7 bg-white/80">
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <h3 className="text-lg font-extrabold text-stone-900 flex items-center">
                                            <Sparkles className="text-amber-500 mr-2" size={20} /> 每日一茶推薦
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {isDailyTeaOverride ? (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setDailyTeaIndex(defaultDailyTeaIndex);
                                                        if (typeof window !== 'undefined') {
                                                            try {
                                                                window.localStorage?.removeItem('tea.dailyTeaOverride');
                                                            } catch {
                                                                // ignore
                                                            }
                                                        }
                                                    }}
                                                    className="text-sm font-extrabold text-stone-700 hover:text-stone-900 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white/70 hover:bg-white transition-colors"
                                                >
                                                    <RotateCcw size={16} /> 回到今日
                                                </button>
                                            ) : null}
                                            <button
                                                type="button"
                                                onClick={refreshDailyTea}
                                                className="text-sm font-extrabold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-white/70 hover:bg-white transition-colors"
                                            >
                                                <RefreshCw size={16} /> 換一換
                                            </button>
                                        </div>
                                    </div>

                                    <div className={`bg-white p-5 rounded-2xl shadow-sm border-l-4 ${dailyTea.accentColor} hover:shadow-md transition-all duration-300 group`}>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="min-w-0">
                                                <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">{dailyTea.engName}</span>
                                                <h4 className="text-xl font-extrabold text-stone-900 mt-1 group-hover:text-emerald-800 transition-colors truncate">
                                                    {dailyTea.name}
                                                </h4>
                                            </div>
                                            <div
                                                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-sm ring-1 ring-black/5 shrink-0"
                                                style={{ background: dailyTea.image }}
                                            >
                                                <Leaf size={20} />
                                            </div>
                                        </div>
                                        <p className="text-sm text-stone-700 mt-3 line-clamp-3 leading-relaxed font-semibold">{dailyTea.desc}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <button
                                                type="button"
                                                onClick={() => goToTeaExhibit(dailyTea)}
                                                className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-900 hover:bg-emerald-100 transition-colors"
                                            >
                                                前往 {dailyTea.name}
                                            </button>
                                            {dailyTea.taste?.slice(0, 4).map((tag) => (
                                                <button
                                                    key={tag}
                                                    type="button"
                                                    onClick={() => goToTeaExhibit(dailyTea)}
                                                    className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex items-center gap-4 text-xs text-stone-600 font-bold">
                                            <span className="flex items-center">
                                                <Flame size={14} className="mr-1 text-red-400" /> {dailyTea.temp}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock size={14} className="mr-1 text-blue-400" /> {dailyTea.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
