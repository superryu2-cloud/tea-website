import React, { useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import AccordionPanel from './AccordionPanel';

/**
 * CollapsibleSidebar - 可折疊的多層級側邊欄組件
 * 支持父級展開/收合，點擊子項目跳轉到對應內容
 */
export default function CollapsibleSidebar({
    title = '章節',
    icon: Icon,
    sections = [],
    activeSection,
    activeSectionHref,
    onSelectSection,
    onSelectHref,
    topOffsetPx = 96,
    pinMode = 'sticky',
}) {
    const resolvedTopOffsetPx = Math.max(0, topOffsetPx);
    const scrollContainerRef = useRef(null);
    const [expandedSections, setExpandedSections] = useState(() => {
        const next = new Set();
        if (activeSection) {
            next.add(activeSection);
        }
        sections.forEach((section) => {
            if (section.key === 'solar-terms') {
                next.add(section.key);
            }
        });
        return next;
    });

    const asideClassName =
        pinMode === 'sticky' ? 'hidden xl:block sticky self-start' : 'hidden xl:block self-start';
    const asideStyle = pinMode === 'sticky' ? { top: `${resolvedTopOffsetPx}px` } : undefined;

    const toggleSection = (sectionKey) => {
        if (sectionKey === 'solar-terms') {
            return;
        }
        setExpandedSections((prev) => {
            const next = new Set(prev);
            if (next.has(sectionKey)) {
                next.delete(sectionKey);
            } else {
                next.add(sectionKey);
            }
            return next;
        });
    };

    const handleSectionClick = (section) => {
        // 如果有子項目，則展開（不再切換）
        if (section.children && section.children.length > 0) {
            setExpandedSections((prev) => {
                const next = new Set(prev);
                next.add(section.key);
                if (section.key !== 'solar-terms') {
                    next.add('solar-terms');
                }
                return next;
            });
        }
        // 通知父組件section被選中
        if (onSelectSection) {
            onSelectSection(section.key);
        }
        // 滾動到頁面頂部
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleHrefClick = (href, sectionKey) => {
        const preservedScrollTop = scrollContainerRef.current?.scrollTop ?? null;

        // 確保該section是展開的
        setExpandedSections((prev) => {
            const next = new Set(prev);
            next.add(sectionKey);
            return next;
        });

        if (onSelectHref) {
            onSelectHref(href);
        }

        // 保持側邊欄滾動位置
        if (preservedScrollTop != null && typeof window !== 'undefined') {
            window.requestAnimationFrame(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTop = preservedScrollTop;
                }
                window.setTimeout(() => {
                    if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollTop = preservedScrollTop;
                    }
                }, 0);
            });
        }
    };

    if (!sections || sections.length === 0) return null;

    return (
        <aside className={asideClassName} style={asideStyle}>
            <div
                ref={scrollContainerRef}
                className="rounded-3xl border border-stone-200 bg-white shadow-lg shadow-stone-200/50 p-5 overflow-y-auto"
                style={{ maxHeight: `calc(100vh - ${resolvedTopOffsetPx}px - 12px)`, overflowAnchor: 'none' }}
            >
                {Icon ? (
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <div className="w-10 h-10 rounded-2xl border border-stone-200 bg-white shadow-sm flex items-center justify-center text-emerald-600">
                            <Icon size={20} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-xl font-extrabold text-stone-900 tracking-tight">
                            {title}
                        </h3>
                    </div>
                ) : (
                    <h3 className="text-stone-500 font-bold mb-4 pl-1">{title}</h3>
                )}
                <div className="space-y-2">
                    {sections.map((section) => {
                        const isExpanded = expandedSections.has(section.key);
                        const hasChildren = section.children && section.children.length > 0;
                        const isActive = section.key === activeSection;

                        return (
                            <div key={section.key} className="space-y-1">
                                {/* 父級按鈕 */}
                                <button
                                    type="button"
                                    onMouseDown={(event) => event.preventDefault()}
                                    onClick={() => handleSectionClick(section)}
                                    className={`chapter-nav-item group w-full text-left rounded-2xl px-4 py-3 transition-all duration-300 border focus-visible:outline-none text-[18px] font-bold ${isActive
                                        ? 'bg-amber-50 border-amber-300 text-stone-900 shadow-sm'
                                        : 'bg-white border-stone-200 text-stone-600 hover:border-amber-200 hover:bg-amber-50/50 hover:text-stone-900'
                                        }`}
                                >
                                    <span className="inline-flex items-center justify-between w-full gap-3">
                                        <span className="min-w-0 font-semibold chapter-label--flip">
                                            <span className="chapter-label-inner">
                                                <span className="chapter-label-front truncate">{section.label}</span>
                                                <span className="chapter-label-back truncate">{section.label}</span>
                                            </span>
                                        </span>
                                        {hasChildren && (
                                            <ChevronRight
                                                size={16}
                                                className={`shrink-0 opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isExpanded ? 'rotate-90' : ''
                                                    }`}
                                            />
                                        )}
                                    </span>
                                </button>

                                {/* 子項目 */}
                                {hasChildren && (
                                    <AccordionPanel
                                        open={isExpanded}
                                        className="ml-2 pl-2 border-l"
                                        style={{ borderColor: 'var(--tool-border)' }}
                                        contentClassName="pt-1"
                                    >
                                        <div className="space-y-1">
                                            {section.children.map((child) => {
                                                const isChildActive = child.href === activeSectionHref;
                                                return (
                                                    <button
                                                        key={child.href}
                                                        type="button"
                                                        onMouseDown={(event) => event.preventDefault()}
                                                        onClick={() => handleHrefClick(child.href, section.key)}
                                                        className={`chapter-subitem w-full text-left rounded-lg px-3 py-2 transition-colors relative group/sub text-[18px] font-semibold ${isChildActive
                                                            ? 'bg-stone-100/80 text-stone-900 font-bold shadow-sm ring-1 ring-stone-200/50'
                                                            : 'hover:bg-stone-50 text-stone-600 hover:text-stone-900'
                                                            }`}
                                                    >
                                                        <span className="block chapter-label--flip">
                                                            <span className="chapter-label-inner">
                                                                <span className="chapter-label-front truncate">{child.label}</span>
                                                                <span className="chapter-label-back truncate">{child.label}</span>
                                                            </span>
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </AccordionPanel>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
