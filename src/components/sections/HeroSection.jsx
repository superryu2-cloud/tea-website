import React, { useState, useEffect, useMemo } from 'react';
import { Sparkles, Leaf, Flame, Clock, RefreshCw, RotateCcw, Scroll, Dices, Radar, PenTool, Camera, Brain } from 'lucide-react';
import featuredTeaMenu from '../../data/featuredTeaMenu';
import oracleVisual from '../../assets/images/oracle-visual.png';
import FlavorCompassWidget from '../widgets/FlavorCompassWidget';
import ZenHaikuWidget from '../widgets/ZenHaikuWidget';
import TeaVisionWidget from '../widgets/TeaVisionWidget';
import AiSommelierWidget from '../widgets/AiSommelierWidget';

const FEATURED_DETAILS = {
    biluochun: {
        name: '三峽碧螺春',
        engName: 'Sanxia Biluochun',
        color: 'bg-green-100',
        textColor: 'text-green-800',
        accentColor: 'border-green-600',
        temp: '85-90°C',
        time: '3-5 分鐘',
        taste: ['鮮爽', '豆香', '海苔味'],
        desc: '台灣唯一的炒菁綠茶，產於新北三峽。外觀捲曲如螺，芽尖白毫顯露。湯色碧綠清澈，滋味鮮活爽口，帶有獨特的綠豆香與海苔韻味。',
        image: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
    },
    wenshan: {
        name: '文山包種茶',
        engName: 'Wenshan Pouchong',
        color: 'bg-emerald-50',
        textColor: 'text-emerald-800',
        accentColor: 'border-emerald-600',
        temp: '90-95°C',
        time: '40-60 秒',
        taste: ['清香', '蘭花', '甘甜'],
        desc: '被譽為「香氣的展現」。輕發酵烏龍茶，外觀呈條索狀。湯色蜜綠金黄，香氣清揚幽雅，彷彿置身於蘭花叢中，滋味甘醇滑潤。',
        image: 'linear-gradient(135deg, #e0f2f1 0%, #80cbc4 100%)'
    },
    gaoshanoolong: {
        name: '高山烏龍茶',
        engName: 'High Mountain Oolong',
        color: 'bg-sky-50',
        textColor: 'text-sky-800',
        accentColor: 'border-sky-600',
        temp: '95-100°C',
        time: '50-60 秒',
        taste: ['山頭氣', '清甜', '花果香'],
        desc: '產於海拔1000公尺以上茶區。雲霧繚繞，日照短，兒茶素苦澀成分低。茶湯金黃透亮，口感軟滑，帶有獨特的高冷「山頭氣」與清甜餘韻。',
        image: 'linear-gradient(135deg, #e0f7fa 0%, #81d4fa 100%)'
    },
    dongding: {
        name: '凍頂烏龍茶',
        engName: 'Dong Ding Oolong',
        color: 'bg-amber-50',
        textColor: 'text-amber-800',
        accentColor: 'border-amber-600',
        temp: '95-100°C',
        time: '40-50 秒',
        taste: ['焙火韻', '熟果', '回甘'],
        desc: '台灣傳統烏龍茶的代表。中發酵、中焙火，講究「綠葉紅鑲邊」。湯色金黃偏琥珀，滋味醇厚甘潤，喉韻十足，帶有迷人的焙火香氣。',
        image: 'linear-gradient(135deg, #ffe082 0%, #ffca28 100%)'
    },
    tieguanyin: {
        name: '木柵鐵觀音',
        engName: 'Muzha Tieguanyin',
        color: 'bg-stone-100',
        textColor: 'text-stone-800',
        accentColor: 'border-stone-600',
        temp: '100°C',
        time: '50-60 秒',
        taste: ['觀音韻', '微酸', '焦糖'],
        desc: '重焙火烏龍茶的經典。經多次反覆焙揉，外觀緊結成球。湯色深褐油亮，獨具「觀音韻」，滋味微酸後轉甘甜，香氣沉穩內斂，如蘭似桂。',
        image: 'linear-gradient(135deg, #d7ccc8 0%, #8d6e63 100%)'
    },
    orientalbeauty: {
        name: '東方美人茶',
        engName: 'Oriental Beauty',
        color: 'bg-rose-50',
        textColor: 'text-rose-800',
        accentColor: 'border-rose-600',
        temp: '85-90°C',
        time: '40-50 秒',
        taste: ['蜜香', '熟果', '醇厚'],
        desc: '又稱白毫烏龍。茶芽經小綠葉蟬吸食（著涎）後，產生獨特的天然蜜香與熟果香。茶乾白黃青紅褐五色相間，湯色艷麗如琥珀，口感細緻柔滑。',
        image: 'linear-gradient(135deg, #ffcdd2 0%, #e57373 100%)'
    },
    redoolong: {
        name: '紅烏龍茶',
        engName: 'Red Oolong',
        color: 'bg-orange-50',
        textColor: 'text-orange-800',
        accentColor: 'border-orange-600',
        temp: '95-100°C',
        time: '50-60 秒',
        taste: ['熟果', '蜜香', '甘醇'],
        desc: '結合烏龍茶與紅茶工藝的新創茶類。發酵程度重，湯色橙紅明亮如紅茶，卻保有烏龍茶的甘醇口感。冷泡熱泡皆宜，帶有濃郁的熟果香氣。',
        image: 'linear-gradient(135deg, #ffe0b2 0%, #ffb74d 100%)'
    },
    honeyblack: {
        name: '蜜香紅茶',
        engName: 'Honey Black Tea',
        color: 'bg-red-50',
        textColor: 'text-red-800',
        accentColor: 'border-red-600',
        temp: '90-95°C',
        time: '30-40 秒',
        taste: ['蜜甜', '柔順', '果香'],
        desc: '類似東方美人，原料經小綠葉蟬吸食。全發酵製成紅茶後，蜜香更加濃郁奔放。口感甜潤順口，少有苦澀，是台灣特有的高品質紅茶。',
        image: 'linear-gradient(135deg, #ffcdd2 0%, #ef5350 100%)'
    },
    black_varieties: {
        name: '日月潭紅茶',
        engName: 'Sun Moon Lake Black Tea',
        color: 'bg-red-100',
        textColor: 'text-red-900',
        accentColor: 'border-red-800',
        temp: '95-100°C',
        time: '40-60 秒',
        taste: ['薄荷', '肉桂', '麥芽'],
        desc: '以大葉種（如紅玉、阿薩姆）為主。紅玉具天然肉桂與薄荷香，阿薩姆則有濃郁麥芽香。湯色艷紅，滋味強勁甘醇，適合單品或調製奶茶。',
        image: 'linear-gradient(135deg, #ff8a80 0%, #c62828 100%)'
    }
};

const FORTUNES = [
    { type: '大吉', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', quote: '喫茶去，心無掛礙，便是人間好時節。', advice: '宜：放慢腳步，細品一杯好茶。' },
    { type: '中吉', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', quote: '茶味甘苦，如人生起伏，終將回甘。', advice: '宜：與老友相聚，分享此刻寧靜。' },
    { type: '小吉', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', quote: '一期一會，當下即永恆。', advice: '宜：獨處品茗，整理思緒。' },
    { type: '上吉', color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200', quote: '流水今日，明月前身，茶中自有乾坤。', advice: '宜：嘗試一款新茶，開啟新的靈感。' },
    { type: '大吉', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200', quote: '一花一世界，一葉一菩提。', advice: '宜：觀察茶葉在水中舒展的姿態。' },
    { type: '中吉', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', quote: '萬丈紅塵三杯酒，千秋大業一壺茶。', advice: '宜：以茶代酒，笑談古今。' },
    { type: '小吉', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200', quote: '茶亦醉人何必酒，書能香我不須花。', advice: '宜：展卷閱讀，佐以清茶。' },
];

const TeaFortuneWidget = ({ teaData, goToTeaExhibit }) => {
    const [state, setState] = useState('idle'); // idle, shaking, revealed
    const [fortune, setFortune] = useState(null);
    const [luckyTea, setLuckyTea] = useState(null);

    // Merge basic tea types with detailed featured teas for the oracle
    const oracleTeaData = useMemo(() => {
        const basics = teaData || [];
        const featured = featuredTeaMenu
            .filter(item => item.id !== 'overview' && FEATURED_DETAILS[item.id])
            .map(item => ({
                id: item.id, // Keep string ID for navigation
                ...FEATURED_DETAILS[item.id]
            }));
        return [...basics, ...featured];
    }, [teaData]);

    const handleDraw = () => {
        if (state === 'shaking') return;
        setState('shaking');

        // Simulate shaking delay
        setTimeout(() => {
            const randomFortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
            const randomTea = oracleTeaData[Math.floor(Math.random() * oracleTeaData.length)];
            setFortune(randomFortune);
            setLuckyTea(randomTea);
            setState('revealed');
        }, 1500);
    };

    const reset = () => {
        setState('idle');
        setFortune(null);
        setLuckyTea(null);
    };

    if (state === 'idle') {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200 min-h-[300px] text-center">
                <div className="mb-6 relative group/box">
                    <div className="w-28 h-36 bg-white p-1 rounded-2xl shadow-xl transform group-hover/box:scale-105 group-hover/box:rotate-2 transition-all duration-500 overflow-hidden border-2 border-stone-100">
                        <img
                            src={oracleVisual}
                            alt="Tea Fortune"
                            className="w-full h-full object-cover rounded-xl opacity-90 group-hover/box:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        <div className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-white/80 shadow-sm">
                            <span className="text-stone-800 font-serif text-sm">籤</span>
                        </div>
                    </div>
                    {/* Floating leaves for better vibe */}
                    <div className="absolute -top-4 -right-4 text-emerald-600/30 animate-pulse delay-75"><Leaf size={24} /></div>
                    <div className="absolute -bottom-2 -left-4 text-amber-600/20 animate-pulse delay-300"><Sparkles size={18} /></div>
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-2">今日茶運占卜</h4>
                <p className="text-stone-500 mb-6 max-w-xs">誠心默念心中的疑惑，想著「茶」... 祈求今日的飲茶靈感。</p>
                <button
                    onClick={handleDraw}
                    className="px-8 py-3 bg-stone-800 text-white rounded-xl font-bold hover:bg-stone-900 hover:scale-105 transition-all shadow-md flex items-center gap-2 group"
                >
                    <Dices size={20} className="group-hover:rotate-180 transition-transform duration-500" /> 開始求籤
                </button>
            </div>
        );
    }

    if (state === 'shaking') {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200 min-h-[300px] text-center">
                <div className="mb-8">
                    <div className="w-28 h-36 bg-white p-1 rounded-2xl shadow-2xl animate-shake overflow-hidden border-2 border-amber-200">
                        <img
                            src={oracleVisual}
                            alt="Shaking"
                            className="w-full h-full object-cover rounded-xl brightness-110"
                        />
                        <div className="absolute inset-0 bg-amber-100/30 animate-pulse" />
                    </div>
                </div>
                <p className="text-lg font-bold text-amber-800 animate-pulse">誠心祈愿中...</p>
            </div>
        );
    }

    // Revealed State
    return (
        <div className="animate-in zoom-in-95 duration-500">
            <div className={`p-6 rounded-2xl border ${fortune.border} ${fortune.bg} text-center mb-6`}>
                <div className="inline-block px-4 py-1 rounded-full bg-white border border-current text-lg font-black mb-3 select-none tracking-widest" style={{ color: fortune.color.replace('text-', '') }}>
                    {fortune.type}
                </div>
                <h4 className={`text-xl font-black mb-2 ${fortune.color}`}>{fortune.quote}</h4>
                <p className="text-stone-600 text-sm font-medium">{fortune.advice}</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-colors cursor-pointer" onClick={() => goToTeaExhibit(luckyTea)}>
                <div className="absolute top-0 left-0 w-1 h-full bg-stone-200 group-hover:bg-emerald-400 transition-colors" />
                <div className="pl-4 flex items-center justify-between">
                    <div>
                        <div className="text-xs font-bold text-stone-400 mb-1">今日幸運茶飲</div>
                        <div className="font-extrabold text-stone-800 text-lg group-hover:text-emerald-700 transition-colors">{luckyTea.name}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                        <Leaf size={20} />
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center">
                <button
                    onClick={reset}
                    className="text-stone-400 font-bold hover:text-stone-600 text-sm flex items-center justify-center gap-2 mx-auto transition-colors"
                >
                    <RotateCcw size={14} /> 再求一次
                </button>
            </div>
        </div>
    );
};

/**
 * HeroSection - 首頁英雄區塊
 * 顯示網站標題、介紹文字和每日推薦茶品
 * 
 * @param {Function} goToTab - 切換主要分頁的函數
 * @param {Function} goToTeaExhibit - 前往茶品展示的函數
 * @param {Array} teaData - 茶品資料陣列
 */
export default function HeroSection({ goToTab, goToTeaExhibit, teaData = [] }) {
    const [viewMode, setViewMode] = useState('daily'); // 'daily', 'oracle', 'compass', 'haiku', or 'vision'
    const [oxidation, setOxidation] = useState(20);
    const [roasting, setRoasting] = useState(10);

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
                                <div className="museum-card p-6 md:p-7 bg-white/80 min-h-[380px] flex flex-col">
                                    <div className="flex items-center gap-1 mb-5 border-b border-stone-100 pb-3 overflow-x-auto no-scrollbar scroll-smooth">
                                        <button
                                            onClick={() => setViewMode('daily')}
                                            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-black transition-all whitespace-nowrap ${viewMode === 'daily' ? 'bg-stone-800 text-white shadow-sm' : 'text-stone-400 hover:bg-stone-50 hover:text-stone-600'}`}
                                        >
                                            <Sparkles size={12} /> 推薦
                                        </button>
                                        <button
                                            onClick={() => setViewMode('oracle')}
                                            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-black transition-all whitespace-nowrap ${viewMode === 'oracle' ? 'bg-emerald-600 text-white shadow-md' : 'text-stone-400 hover:bg-emerald-50 hover:text-emerald-600'}`}
                                        >
                                            <Scroll size={12} /> 占卜
                                        </button>
                                        <button
                                            onClick={() => setViewMode('compass')}
                                            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-black transition-all whitespace-nowrap ${viewMode === 'compass' ? 'bg-amber-600 text-white shadow-md' : 'text-stone-400 hover:bg-amber-50 hover:text-amber-600'}`}
                                        >
                                            <Radar size={12} /> 羅盤
                                        </button>
                                        <button
                                            onClick={() => setViewMode('haiku')}
                                            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-black transition-all whitespace-nowrap ${viewMode === 'haiku' ? 'bg-stone-700 text-white shadow-md' : 'text-stone-400 hover:bg-stone-50 hover:text-stone-600'}`}
                                        >
                                            <PenTool size={12} /> 禪詩
                                        </button>
                                        <button
                                            onClick={() => setViewMode('vision')}
                                            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-black transition-all whitespace-nowrap ${viewMode === 'vision' ? 'bg-teal-600 text-white shadow-md' : 'text-stone-400 hover:bg-teal-50 hover:text-teal-600'}`}
                                        >
                                            <Camera size={12} /> 辨識
                                        </button>
                                        <button
                                            onClick={() => setViewMode('sommelier')}
                                            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-black transition-all whitespace-nowrap ${viewMode === 'sommelier' ? 'bg-orange-600 text-white shadow-md' : 'text-stone-400 hover:bg-orange-50 hover:text-orange-600'}`}
                                        >
                                            <Brain size={12} /> 茶師
                                        </button>
                                    </div>


                                    {viewMode === 'oracle' && (
                                        <TeaFortuneWidget teaData={teaData} goToTeaExhibit={goToTeaExhibit} />
                                    )}

                                    {viewMode === 'compass' && (
                                        <FlavorCompassWidget
                                            oxidation={oxidation} setOxidation={setOxidation}
                                            roasting={roasting} setRoasting={setRoasting}
                                        />
                                    )}

                                    {viewMode === 'haiku' && (
                                        <ZenHaikuWidget />
                                    )}

                                    {viewMode === 'vision' && (
                                        <TeaVisionWidget />
                                    )}

                                    {viewMode === 'sommelier' && (
                                        <AiSommelierWidget />
                                    )}

                                    {viewMode === 'daily' && (
                                        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-extrabold text-stone-900 flex items-center">
                                                    <Sparkles className="text-amber-500 mr-2" size={20} /> 今日一茶
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
                                                            className="text-xs font-bold text-stone-500 hover:text-stone-900 p-1.5 hover:bg-stone-100 rounded-full transition-colors"
                                                            title="回到今日推薦"
                                                        >
                                                            <RotateCcw size={14} />
                                                        </button>
                                                    ) : null}
                                                    <button
                                                        type="button"
                                                        onClick={refreshDailyTea}
                                                        className="text-sm font-extrabold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 hover:bg-white transition-colors"
                                                    >
                                                        <RefreshCw size={14} /> 換一換
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
                                    )}
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
