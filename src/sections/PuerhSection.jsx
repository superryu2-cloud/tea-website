import React from 'react';
import AtlasDockLayout from '../components/AtlasDockLayout';
import ChapterSidebar from '../components/ChapterSidebar';
import PuerhEncyclopedia from '../content/varieties/PuerhEncyclopedia';
import { PUERH_TOC } from '../config/navigation';

export default function PuerhSection({
    siteNavHeightPx,
    puerhChapterHref,
    selectPuerhChapter,
}) {
    const puerhSidebarItems = [{ key: 'puerh', label: '普洱茶' }];
    const puerhSubItemsByKey = { puerh: PUERH_TOC };

    return (
        <div className="museum-page">
            <div className="w-full">
                <AtlasDockLayout
                    topOffsetPx={siteNavHeightPx + 24}
                    sidebar={
                        <ChapterSidebar
                            title="章節"
                            items={puerhSidebarItems}
                            activeKey="puerh"
                            onSelectKey={() => { }}
                            subItemsByKey={puerhSubItemsByKey}
                            activeSubHref={puerhChapterHref}
                            onSelectSubHref={(href) => selectPuerhChapter(href)}
                            topOffsetPx={siteNavHeightPx + 48}
                            pinMode="static"
                        />
                    }
                >
                    <div className="min-w-0">
                        {/* ── 手機版章節選擇器（xl 以上隱藏，由側邊欄取代）── */}
                        <div className="xl:hidden sticky top-0 z-30 -mx-4 px-4 py-2 bg-white/90 backdrop-blur-sm border-b border-stone-200 shadow-sm mb-6">
                            <label htmlFor="mobile-puerh-select" className="sr-only">選擇普洱茶章節</label>
                            <select
                                id="mobile-puerh-select"
                                value={puerhChapterHref || ''}
                                onChange={(e) => {
                                    const href = e.target.value;
                                    selectPuerhChapter(href);
                                    if (typeof window !== 'undefined') {
                                        const targetId = href.startsWith('#') ? href.slice(1) : href;
                                        const el = document.getElementById(targetId);
                                        if (el) {
                                            const y = el.getBoundingClientRect().top + window.scrollY - (siteNavHeightPx + 60);
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }
                                }}
                                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-[15px] font-semibold text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                            >
                                {PUERH_TOC.map((item) => (
                                    <option key={item.href} value={item.href}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <PuerhEncyclopedia topOffsetPx={siteNavHeightPx + 20} activeHref={puerhChapterHref} />
                    </div>
                </AtlasDockLayout>
            </div>
        </div>
    );
}
