import React from 'react';
import { MapPin, Mountain, Eye } from 'lucide-react';

/**
 * 臺灣特色茶卡片元件 (簡化版)
 * 點擊卡片開啟 Modal 查看詳細內容
 */

// 茶種專屬顏色對應 (使用 tea.color 欄位)
const TEA_COLORS = {
    // 碧螺春綠茶 - 翠綠
    'emerald': {
        badge: 'bg-emerald-600 text-white',
        border: 'border-emerald-200 hover:border-emerald-400',
        headerBg: 'from-emerald-50 to-emerald-100/50',
        accent: 'text-emerald-700'
    },
    // 文山包種茶 - 青玉
    'teal': {
        badge: 'bg-teal-600 text-white',
        border: 'border-teal-200 hover:border-teal-400',
        headerBg: 'from-teal-50 to-teal-100/50',
        accent: 'text-teal-700'
    },
    // 高山烏龍茶 - 山嵐青
    'cyan': {
        badge: 'bg-slate-600 text-white',
        border: 'border-slate-200 hover:border-slate-400',
        headerBg: 'from-slate-50 to-slate-100/50',
        accent: 'text-slate-700'
    },
    // 凍頂烏龍茶 - 琥金
    'sky': {
        badge: 'bg-yellow-700 text-white',
        border: 'border-yellow-200 hover:border-yellow-400',
        headerBg: 'from-yellow-50 to-amber-100/50',
        accent: 'text-yellow-800'
    },
    // 鐵觀音茶 - 焙火棕
    'amber': {
        badge: 'bg-amber-700 text-white',
        border: 'border-amber-200 hover:border-amber-400',
        headerBg: 'from-amber-50 to-amber-100/50',
        accent: 'text-amber-800'
    },
    // 東方美人茶 - 蜜粉
    'rose': {
        badge: 'bg-rose-600 text-white',
        border: 'border-rose-200 hover:border-rose-400',
        headerBg: 'from-rose-50 to-rose-100/50',
        accent: 'text-rose-700'
    },
    // 紅烏龍茶 - 橘紅
    'orange': {
        badge: 'bg-orange-600 text-white',
        border: 'border-orange-200 hover:border-orange-400',
        headerBg: 'from-orange-50 to-orange-100/50',
        accent: 'text-orange-700'
    },
    // 蜜香紅茶 - 蜜紅
    'red': {
        badge: 'bg-red-700 text-white',
        border: 'border-red-200 hover:border-red-400',
        headerBg: 'from-red-50 to-red-100/50',
        accent: 'text-red-800'
    },
    // 大小葉紅茶 - 沉穩棕
    'stone': {
        badge: 'bg-stone-700 text-white',
        border: 'border-stone-300 hover:border-stone-400',
        headerBg: 'from-stone-100 to-stone-200/50',
        accent: 'text-stone-700'
    }
};

const SpecialtyTeaCard = ({ tea, onClick }) => {
    const colors = TEA_COLORS[tea.color] || TEA_COLORS['emerald'];

    return (
        <div
            className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${colors.border} overflow-hidden cursor-pointer group`}
            onClick={() => onClick(tea)}
        >
            {/* Card Header: Image + Basic Info */}
            <div className="relative">
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                    <img
                        src={tea.image}
                        alt={tea.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.src = '/images/placeholder_tea.png'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Badge */}
                    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${colors.badge}`}>
                        {tea.badge}
                    </span>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Eye size={18} />
                            <span>查看詳情</span>
                        </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{tea.name}</h3>
                        <p className="text-sm opacity-90">{tea.nameEn}</p>
                    </div>
                </div>
            </div>

            {/* Quick Info Bar */}
            <div className={`px-4 py-3 bg-gradient-to-r ${colors.headerBg} flex items-center justify-between text-sm border-b border-stone-100`}>
                <div className="flex items-center gap-2 text-stone-600">
                    <MapPin size={14} className={colors.accent} />
                    <span>{tea.origin.regions[0]}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                    <Mountain size={14} className={colors.accent} />
                    <span>{tea.origin.altitude}</span>
                </div>
            </div>

            {/* Aliases */}
            {tea.aliases && tea.aliases.length > 0 && (
                <div className="px-4 py-3 text-xs text-stone-500">
                    <span className="font-medium">別稱：</span>
                    {tea.aliases.join('、')}
                </div>
            )}
        </div>
    );
};

export default SpecialtyTeaCard;
