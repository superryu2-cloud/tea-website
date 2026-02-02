import React from 'react';
import { Zap, Settings, List, Layers } from 'lucide-react';

const ModeTabMenu = ({ activeMode, onModeChange }) => {
    const modes = [
        { key: 'quick', label: '快問快答', icon: Zap, color: 'sky' },
        { key: 'custom', label: '自訂測驗', icon: Settings, color: 'amber' },
        { key: 'list', label: '題庫練習', icon: List, color: 'emerald' },
        { key: 'cards', label: '答題卡片', icon: Layers, color: 'violet' },
    ];

    const getColorClasses = (color, isActive) => {
        const colorMap = {
            sky: {
                active: 'border-sky-400 bg-sky-50 text-sky-950 shadow-sm',
                inactive: 'border-stone-200 bg-white text-stone-700 hover:bg-sky-50/50 hover:border-sky-200',
            },
            amber: {
                active: 'border-amber-400 bg-amber-50 text-amber-950 shadow-sm',
                inactive: 'border-stone-200 bg-white text-stone-700 hover:bg-amber-50/50 hover:border-amber-200',
            },
            emerald: {
                active: 'border-emerald-400 bg-emerald-50 text-emerald-950 shadow-sm',
                inactive: 'border-stone-200 bg-white text-stone-700 hover:bg-emerald-50/50 hover:border-emerald-200',
            },
            violet: {
                active: 'border-violet-400 bg-violet-50 text-violet-950 shadow-sm',
                inactive: 'border-stone-200 bg-white text-stone-700 hover:bg-violet-50/50 hover:border-violet-200',
            },
        };

        return isActive ? colorMap[color].active : colorMap[color].inactive;
    };

    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent">
            {modes.map((mode) => {
                const isActive = activeMode === mode.key;
                const Icon = mode.icon;

                return (
                    <button
                        key={mode.key}
                        onClick={() => onModeChange(mode.key)}
                        className={`
              flex items-center gap-2 px-4 py-2.5 rounded-full
              border-2 font-bold text-sm whitespace-nowrap
              transition-all duration-200
              ${getColorClasses(mode.color, isActive)}
              ${isActive ? 'scale-105' : 'hover:scale-102'}
            `}
                    >
                        <Icon size={16} className={isActive ? 'animate-pulse' : ''} />
                        {mode.label}
                    </button>
                );
            })}
        </div>
    );
};

export default ModeTabMenu;
