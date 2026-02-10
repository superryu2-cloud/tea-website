import React from 'react';
import { createPortal } from 'react-dom';
import {
    X,
    MapPin,
    Mountain,
    History,
    Coffee,
    Flame,
    Wind,
    Sparkles,
    Clock,
    Thermometer,
    Scale,
    Info
} from 'lucide-react';
import TeaProcessFlowchart from './TeaProcessFlowchart';

/**
 * 臺灣特色茶詳細內容 Modal
 * 捲軸式完整內容，支援 2-5 分鐘演講
 * 大字體、雙欄佈局
 */

// 茶種專屬顏色對應 (使用 tea.color 欄位)
const TEA_COLORS = {
    // 碧螺春綠茶 - 翠綠
    'emerald': {
        gradient: 'from-emerald-600 to-emerald-800',
        accent: 'text-emerald-700',
        accentBg: 'bg-emerald-50',
        border: 'border-emerald-200',
        dot: 'bg-emerald-600'
    },
    // 文山包種茶 - 青玉
    'teal': {
        gradient: 'from-teal-600 to-teal-800',
        accent: 'text-teal-700',
        accentBg: 'bg-teal-50',
        border: 'border-teal-200',
        dot: 'bg-teal-600'
    },
    // 高山烏龍茶 - 山嵐青
    'cyan': {
        gradient: 'from-slate-600 to-slate-800',
        accent: 'text-slate-700',
        accentBg: 'bg-slate-50',
        border: 'border-slate-200',
        dot: 'bg-slate-600'
    },
    // 凍頂烏龍茶 - 琥金
    'sky': {
        gradient: 'from-yellow-700 to-amber-800',
        accent: 'text-yellow-800',
        accentBg: 'bg-yellow-50',
        border: 'border-yellow-200',
        dot: 'bg-yellow-700'
    },
    // 鐵觀音茶 - 焙火棕
    'amber': {
        gradient: 'from-amber-700 to-amber-900',
        accent: 'text-amber-800',
        accentBg: 'bg-amber-50',
        border: 'border-amber-200',
        dot: 'bg-amber-700'
    },
    // 東方美人茶 - 蜜粉
    'rose': {
        gradient: 'from-rose-600 to-rose-800',
        accent: 'text-rose-700',
        accentBg: 'bg-rose-50',
        border: 'border-rose-200',
        dot: 'bg-rose-600'
    },
    // 紅烏龍茶 - 橘紅
    'orange': {
        gradient: 'from-orange-600 to-orange-800',
        accent: 'text-orange-700',
        accentBg: 'bg-orange-50',
        border: 'border-orange-200',
        dot: 'bg-orange-600'
    },
    // 蜜香紅茶 - 蜜紅
    'red': {
        gradient: 'from-red-700 to-red-900',
        accent: 'text-red-800',
        accentBg: 'bg-red-50',
        border: 'border-red-200',
        dot: 'bg-red-700'
    },
    // 大小葉紅茶 - 沉穩棕
    'stone': {
        gradient: 'from-stone-700 to-stone-900',
        accent: 'text-stone-700',
        accentBg: 'bg-stone-100',
        border: 'border-stone-300',
        dot: 'bg-stone-700'
    }
};

const SpecialtyTeaModal = ({ tea, isOpen, onClose }) => {
    if (!isOpen || !tea) return null;

    const colors = TEA_COLORS[tea.color] || TEA_COLORS['emerald'];

    const modalContent = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 p-2.5 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                >
                    <X size={26} className="text-stone-600" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[90vh]">
                    {/* Hero Header */}
                    <div className={`relative bg-gradient-to-r ${colors.gradient} text-white p-10 md:p-12`}>
                        <div className="absolute inset-0 opacity-15">
                            <img
                                src={tea.image}
                                alt=""
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            {/* Image */}
                            <div className="w-full md:w-72 h-56 md:h-72 rounded-2xl overflow-hidden shadow-2xl shrink-0 border-4 border-white/30">
                                <img
                                    src={tea.image}
                                    alt={tea.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = '/images/placeholder_tea.png'; }}
                                />
                            </div>

                            {/* Title & Quick Info */}
                            <div className="flex-1">
                                <div className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-[17px] font-bold mb-4">
                                    {tea.badge}
                                </div>
                                <h2 className="text-[36px] md:text-[42px] font-bold font-sans mb-3">{tea.name}</h2>
                                <p className="text-[21px] opacity-90 font-sans mb-3">{tea.nameEn}</p>

                                {tea.aliases && (
                                    <p className="text-[17px] opacity-80 mb-6 font-sans">
                                        別稱：{tea.aliases.join('、')}
                                    </p>
                                )}

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-2 text-white/70 text-[15px] mb-1">
                                            <MapPin size={16} /> 產區
                                        </div>
                                        <div className="font-bold text-[17px] font-sans">{tea.origin.regions[0]}</div>
                                    </div>
                                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-2 text-white/70 text-[15px] mb-1">
                                            <Mountain size={16} /> 海拔
                                        </div>
                                        <div className="font-bold text-[17px] font-sans">{tea.origin.altitude}</div>
                                    </div>
                                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-2 text-white/70 text-[15px] mb-1">
                                            <Thermometer size={16} /> 水溫
                                        </div>
                                        <div className="font-bold text-[17px] font-sans">{tea.brewing.temp.split('（')[0]}</div>
                                    </div>
                                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-2 text-white/70 text-[15px] mb-1">
                                            <Clock size={16} /> 時間
                                        </div>
                                        <div className="font-bold text-[17px] font-sans">{tea.brewing.time.split('，')[0]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content - Two Column Layout */}
                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Left Column */}
                            <div className="space-y-10">
                                {/* History */}
                                <section>
                                    <h3 className={`font-bold text-[21px] font-sans mb-4 flex items-center gap-3 ${colors.accent}`}>
                                        <History size={24} />
                                        歷史沿革
                                    </h3>
                                    <p className="text-stone-600 leading-[1.8] whitespace-pre-line text-[17px] font-sans">
                                        {tea.history}
                                    </p>
                                </section>

                                {/* Process - Flowchart Style */}
                                <section>
                                    <h3 className={`font-bold text-[21px] font-sans mb-4 flex items-center gap-3 ${colors.accent}`}>
                                        <Flame size={24} />
                                        製程工藝
                                    </h3>
                                    <TeaProcessFlowchart
                                        teaId={tea.id}
                                        processDescription={tea.process}
                                    />
                                </section>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-10">
                                {/* Terroir */}
                                <section className={`${colors.accentBg} p-6 rounded-2xl ${colors.border} border`}>
                                    <h3 className={`font-bold text-[21px] font-sans mb-5 flex items-center gap-3 ${colors.accent}`}>
                                        <MapPin size={24} />
                                        產地與風土
                                    </h3>
                                    <div className="grid grid-cols-2 gap-5 text-[17px] font-sans">
                                        <div>
                                            <span className="text-stone-400 text-[15px] block mb-1">產區</span>
                                            <span className="text-stone-700 font-medium">{tea.origin.regions.join('、')}</span>
                                        </div>
                                        <div>
                                            <span className="text-stone-400 text-[15px] block mb-1">海拔</span>
                                            <span className="text-stone-700 font-medium">{tea.origin.altitude}</span>
                                        </div>
                                        <div>
                                            <span className="text-stone-400 text-[15px] block mb-1">氣候</span>
                                            <span className="text-stone-700 font-medium">{tea.origin.climate}</span>
                                        </div>
                                        <div>
                                            <span className="text-stone-400 text-[15px] block mb-1">土壤</span>
                                            <span className="text-stone-700 font-medium">{tea.origin.soil}</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Flavor Profile */}
                                <section>
                                    <h3 className={`font-bold text-[21px] font-sans mb-5 flex items-center gap-3 ${colors.accent}`}>
                                        <Wind size={24} />
                                        風味特色
                                    </h3>
                                    <div className="space-y-4 text-[17px] font-sans">
                                        {[
                                            { label: '香氣', value: tea.flavor.aroma },
                                            { label: '湯色', value: tea.flavor.color },
                                            { label: '滋味', value: tea.flavor.taste },
                                            { label: '回甘', value: tea.flavor.aftertaste },
                                            { label: '體韻', value: tea.flavor.body }
                                        ].map(item => (
                                            <div key={item.label} className="flex gap-4">
                                                <span className={`font-bold min-w-[60px] ${colors.accent}`}>{item.label}</span>
                                                <span className="text-stone-600">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Brewing Guide */}
                                <section className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                    <h3 className={`font-bold text-[21px] font-sans mb-5 flex items-center gap-3 ${colors.accent}`}>
                                        <Coffee size={24} />
                                        沖泡指南
                                    </h3>
                                    <div className="grid grid-cols-2 gap-5 text-[17px] font-sans mb-5">
                                        <div className="flex items-start gap-3">
                                            <Thermometer size={20} className="text-stone-400 mt-1 shrink-0" />
                                            <div>
                                                <span className="text-stone-400 text-[15px] block">水溫</span>
                                                <span className="text-stone-700 font-medium">{tea.brewing.temp}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Scale size={20} className="text-stone-400 mt-1 shrink-0" />
                                            <div>
                                                <span className="text-stone-400 text-[15px] block">茶水比</span>
                                                <span className="text-stone-700 font-medium">{tea.brewing.ratio}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Clock size={20} className="text-stone-400 mt-1 shrink-0" />
                                            <div>
                                                <span className="text-stone-400 text-[15px] block">時間</span>
                                                <span className="text-stone-700 font-medium">{tea.brewing.time}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Info size={20} className="text-stone-400 mt-1 shrink-0" />
                                            <div>
                                                <span className="text-stone-400 text-[15px] block">手法</span>
                                                <span className="text-stone-700 font-medium">{tea.brewing.method}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[17px] font-sans mb-4">
                                        <span className={`font-bold ${colors.accent}`}>適合茶器：</span>
                                        <span className="text-stone-600">{tea.brewing.teaware.join('、')}</span>
                                    </div>
                                    {tea.brewing.tips && (
                                        <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl text-[17px] text-amber-800 border border-amber-100">
                                            <Info size={20} className="shrink-0 mt-0.5 text-amber-600" />
                                            <span className="font-sans">{tea.brewing.tips}</span>
                                        </div>
                                    )}
                                </section>

                                {/* Trivia */}
                                <section>
                                    <h3 className={`font-bold text-[21px] font-sans mb-4 flex items-center gap-3 ${colors.accent}`}>
                                        <Sparkles size={24} />
                                        文化與趣聞
                                    </h3>
                                    <p className="text-stone-600 leading-[1.8] whitespace-pre-line text-[17px] font-sans">
                                        {tea.trivia}
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default SpecialtyTeaModal;
