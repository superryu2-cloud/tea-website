import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Globe } from 'lucide-react';
import timelineData from '../../data/timelineData';
import createHistoryData from '../../content/historyData';
import ResizableDivider from '../ResizableDivider';
import ImageLightbox from '../ImageLightbox';

const ERA_THEMES = {
    holland: {
        primary: 'sky',
        border: 'border-sky-200',
        borderHover: 'hover:border-sky-300',
        bgIcon: 'bg-sky-400',
        bgIconHover: 'group-hover:bg-sky-500',
        bgLine: 'bg-sky-200',
        bgLineHover: 'group-hover:bg-sky-300',
        textTitle: 'text-sky-900',
        badgeRing: 'ring-sky-200/70',
        badgeBorderHover: 'group-hover:border-sky-300',
        yearBg: 'from-sky-900 via-sky-800 to-sky-900',
        yearBorderHover: 'hover:border-sky-200',
        yearOutline: 'hover:outline-sky-200/70'
    },
    qing: {
        primary: 'amber',
        border: 'border-amber-200',
        borderHover: 'hover:border-amber-300',
        bgIcon: 'bg-amber-400',
        bgIconHover: 'group-hover:bg-amber-500',
        bgLine: 'bg-amber-200',
        bgLineHover: 'group-hover:bg-amber-300',
        textTitle: 'text-amber-950',
        badgeRing: 'ring-amber-200/70',
        badgeBorderHover: 'group-hover:border-amber-300',
        yearBg: 'from-amber-900 via-amber-800 to-amber-900',
        yearBorderHover: 'hover:border-amber-200',
        yearOutline: 'hover:outline-amber-200/70'
    },
    japan: {
        primary: 'rose',
        border: 'border-rose-200',
        borderHover: 'hover:border-rose-300',
        bgIcon: 'bg-rose-400',
        bgIconHover: 'group-hover:bg-rose-500',
        bgLine: 'bg-rose-200',
        bgLineHover: 'group-hover:bg-rose-300',
        textTitle: 'text-rose-950',
        badgeRing: 'ring-rose-200/70',
        badgeBorderHover: 'group-hover:border-rose-300',
        yearBg: 'from-rose-900 via-rose-800 to-rose-900',
        yearBorderHover: 'hover:border-rose-200',
        yearOutline: 'hover:outline-rose-200/70'
    },
    roc: {
        primary: 'emerald',
        border: 'border-emerald-200/70',
        borderHover: 'hover:border-emerald-300',
        bgIcon: 'bg-emerald-400',
        bgIconHover: 'group-hover:bg-emerald-500',
        bgLine: 'bg-emerald-200',
        bgLineHover: 'group-hover:bg-emerald-300',
        textTitle: 'text-emerald-900',
        badgeRing: 'ring-emerald-200/70',
        badgeBorderHover: 'group-hover:border-emerald-300',
        yearBg: 'from-emerald-900 via-emerald-800 to-emerald-900',
        yearBorderHover: 'hover:border-emerald-200',
        yearOutline: 'hover:outline-emerald-200/70'
    }
};

const HistorySection = ({ historyTab, setHistoryTab }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTimelineData = Object.keys(timelineData).reduce((acc, key) => {
        if (!searchTerm) {
            acc[key] = timelineData[key];
            return acc;
        }
        const term = searchTerm.toLowerCase();
        acc[key] = timelineData[key].filter(event =>
            (event.year && event.year.toLowerCase().includes(term)) ||
            (event.title && event.title.toLowerCase().includes(term)) ||
            (event.content && event.content.toLowerCase().includes(term)) ||
            (event.world && event.world.toLowerCase().includes(term))
        );
        return acc;
    }, {});

    const TimelineRow = ({ year, title, content, world, image, themeKey = 'roc' }) => {
        const [isZoomed, setIsZoomed] = useState(false);
        const theme = ERA_THEMES[themeKey] || ERA_THEMES.roc;

        return (
            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-[2px] bg-gradient-to-b from-transparent via-stone-400/90 to-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.65)]" />
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] gap-y-6 md:gap-y-0 md:gap-x-4 items-center">
                    <div className="md:pr-3 flex md:justify-end">
                        {title && (
                            <div className={`group relative w-full max-w-[480px] rounded-2xl border ${theme.border} bg-transparent px-6 py-5 text-right transition-colors duration-300 ${theme.borderHover}`}>
                                <span className={`absolute -right-3 top-6 hidden md:block h-3 w-3 rounded-full ${theme.bgIcon} ring-4 ring-white transition-transform duration-300 group-hover:scale-110 ${theme.bgIconHover}`} />
                                <span className={`absolute -right-9 top-[27px] hidden md:block h-px w-6 ${theme.bgLine} transition-colors duration-300 ${theme.bgLineHover}`} />
                                <div className={`mb-2 ml-auto w-fit flex items-center justify-end gap-2 rounded-full bg-transparent px-3 py-1 text-xs font-bold ${theme.textTitle} ring-1 ${theme.badgeRing} transition-colors duration-300 ${theme.badgeBorderHover}`}>
                                    <Calendar size={12} />
                                    台灣事件
                                </div>
                                <h4 className="text-lg font-extrabold text-stone-900">{title}</h4>
                                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{content}</p>
                                {image && (
                                    <div className="mt-4 relative group/img cursor-zoom-in" onClick={() => setIsZoomed(true)}>
                                        <div className="absolute inset-0 bg-stone-900/0 group-hover/img:bg-stone-900/10 transition-colors rounded-xl z-10" />
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-auto rounded-xl shadow-md border border-stone-100 object-cover"
                                        />
                                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/img:opacity-100 transition-opacity z-20">
                                            點擊放大
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {/* Zoom Modal */}
                        <ImageLightbox
                            isOpen={isZoomed}
                            onClose={() => setIsZoomed(false)}
                            imageSrc={image}
                            altText={title}
                        />
                    </div>
                    <div className="relative flex items-center justify-center">
                        <span className={`relative z-10 rounded-full border border-white/90 bg-gradient-to-r ${theme.yearBg} px-5 py-1.5 text-sm md:text-base font-extrabold tracking-wide text-white transition-all duration-300 hover:scale-110 hover:tracking-[0.18em] hover:bg-gradient-to-r hover:${theme.yearBg} hover:outline hover:outline-2 ${theme.yearOutline}`}>
                            {year}
                        </span>
                    </div>
                    <div className="md:pl-3 flex md:justify-start">
                        {world && (
                            <div className="group relative w-full max-w-[480px] rounded-2xl border border-stone-200/70 bg-transparent px-6 py-5 text-left transition-colors duration-300 hover:border-stone-300">
                                <span className="absolute -left-3 top-6 hidden md:block h-3 w-3 rounded-full bg-stone-300 ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-stone-400" />
                                <span className="absolute -left-9 top-[27px] hidden md:block h-px w-6 bg-stone-200 transition-colors duration-300 group-hover:bg-stone-300" />
                                <div className="mb-2 w-fit flex items-center gap-2 rounded-full bg-transparent px-3 py-1 text-xs font-bold text-stone-600 ring-1 ring-stone-200/70 transition-colors duration-300 group-hover:border-stone-400">
                                    <Globe size={12} />
                                    世界大事
                                </div>
                                <p className="text-sm text-stone-700 leading-relaxed">{world}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const historyData = createHistoryData({ searchTerm, setSearchTerm, filteredTimelineData, TimelineRow });
    const historySectionRef = useRef(null);
    const [historySidebarWidth, setHistorySidebarWidth] = useState(() => {
        if (typeof window === 'undefined') return 300;
        const raw = window.localStorage?.getItem('tea.historySidebarWidth');
        const parsed = raw ? Number(raw) : NaN;
        if (!Number.isFinite(parsed)) return 300;
        return Math.min(Math.max(parsed, 200), 500);
    });

    const handleHistoryTabChange = (tabId) => {
        setHistoryTab(tabId);
        // Scroll to top of section
        if (historySectionRef.current) {
            historySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleHistoryResize = (newWidth) => {
        setHistorySidebarWidth(newWidth);
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            window.localStorage?.setItem('tea.historySidebarWidth', String(historySidebarWidth));
        } catch {
            // ignore
        }
    }, [historySidebarWidth]);

    return (
        <div className="museum-page" ref={historySectionRef}>
            <div className="museum-stage">
                <div className="mb-12 museum-panel p-8 md:p-12 text-center">
                    <div className="museum-label mx-auto">EXHIBIT · HISTORY</div>
                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">茶道文化史</h2>
                    <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">縱橫千年，從神農嘗百草到現代茶藝的生活美學。</p>
                </div>
                {/* Two-Column Layout with Resizable Divider */}
                <div className="flex gap-0">
                    {/* Left Sidebar Navigation */}
                    <div style={{ width: `${historySidebarWidth}px`, minWidth: '200px', maxWidth: '500px' }}>
                        <div className="md:sticky md:top-24 space-y-3 pr-4">
                            {Object.keys(historyData).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => handleHistoryTabChange(key)}
                                    className={`
                    w-full px-5 py-4 rounded-xl border-2 transition-all duration-300
                    flex items-center gap-4 text-left relative
                    ${historyTab === key
                                            ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-400 shadow-md'
                                            : 'bg-white border-stone-200 hover:border-emerald-300 hover:shadow-sm'
                                        }
                  `}
                                >
                                    <div className={`transition-transform duration-300 flex-shrink-0 text-2xl ${historyTab === key ? 'scale-110' : ''}`}>
                                        {historyData[key].icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`font-bold text-lg ${historyTab === key ? 'text-emerald-900' : 'text-stone-800'}`}>
                                            {historyData[key].title}
                                        </div>
                                    </div>
                                    {historyTab === key && (
                                        <div className="w-1 h-8 bg-emerald-500 rounded-full absolute right-0"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Resizable Divider */}
                    <ResizableDivider onResize={handleHistoryResize} minWidth={200} maxWidth={500} />

                    {/* Right Content Area */}
                    <div className="flex-1 min-w-0 pl-8">
                        <div className="animate-fadeIn min-h-[400px] museum-panel p-6 md:p-8">
                            {historyData[historyTab].content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistorySection;
