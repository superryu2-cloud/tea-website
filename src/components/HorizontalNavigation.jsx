import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * HorizontalNavigation - 下拉式導航組件
 * 模仿 yoshantea.com 風格：滑鼠懸停顯示垂直下拉選單
 */
export default function HorizontalNavigation({
    sections = [],
    activeSection,
    activeSectionHref,
    onSelectSection,
    onSelectHref,
    stickyTop = 0,
}) {
    if (!sections || sections.length === 0) return null;

    const handleSectionClick = (section) => {
        // 點擊主標題時，切換到該大類
        if (onSelectSection) {
            onSelectSection(section.key);
        }
    };

    return (
        <div
            className="sticky z-50 transition-all duration-300"
            style={{ top: `${stickyTop}px` }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex gap-2 justify-center relative">
                    {sections.map((section) => {
                        const isActive = section.key === activeSection;
                        const hasChildren = section.children && section.children.length > 0;

                        return (
                            <div key={section.key} className="group relative" style={{ isolation: 'isolate' }}>
                                {/* Main Menu Item Button */}
                                <button
                                    type="button"
                                    onClick={() => handleSectionClick(section)}
                                    className={`
                                        flex items-center gap-1.5 px-6 py-3 font-bold text-base whitespace-nowrap
                                        transition-all duration-200 border-b-[3px]
                                        group-hover:text-amber-700 group-hover:bg-stone-50/50
                                        ${isActive
                                            ? 'text-amber-800 border-amber-600'
                                            : 'text-stone-600 border-transparent'
                                        }
                                    `}
                                >
                                    {section.label}
                                    {hasChildren && (
                                        <ChevronDown
                                            size={14}
                                            className={`opacity-50 transition-transform duration-300 group-hover:rotate-180 ${isActive ? 'text-amber-700' : ''}`}
                                        />
                                    )}
                                </button>

                                {/* Hover Dropdown Menu */}
                                {hasChildren && (
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-64 transform transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-1"
                                    >
                                        {/* Dropdown Panel */}
                                        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl ring-1 ring-black/5 overflow-hidden p-2">
                                            <div className="flex flex-col gap-1">
                                                {section.children.map((child) => {
                                                    const isChildActive = child.href === activeSectionHref;
                                                    return (
                                                        <button
                                                            key={child.href}
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                if (onSelectHref) onSelectHref(child.href);
                                                                // 確保父級也被選中
                                                                if (onSelectSection && !isActive) {
                                                                    onSelectSection(section.key);
                                                                }
                                                            }}
                                                            className={`
                                                                text-left w-full px-4 py-3 rounded-lg text-sm font-medium transition-all
                                                                border-l-4
                                                                ${isChildActive
                                                                    ? 'bg-amber-50/80 text-amber-900 border-amber-600'
                                                                    : 'hover:bg-stone-50/80 text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300'
                                                                }
                                                            `}
                                                        >
                                                            {child.label}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
