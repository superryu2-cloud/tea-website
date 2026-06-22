import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import AtlasDockLayout from '../components/AtlasDockLayout';
import CollapsibleSidebar from '../components/CollapsibleSidebar';
import FourSeasonsSection from '../content/seasons/FourSeasonsSection';
import SolarTermsPrimer from '../content/seasons/SolarTermsPrimer';
import { SEASONS_SECTIONS } from '../config/navigation';

export default function SeasonsSection({ siteNavHeightPx }) {
    const [activeSeasonSection, setActiveSeasonSection] = useState('four-seasons');
    const [activeSeasonHref, setActiveSeasonHref] = useState(null);
    const solarTermHrefs = new Set(
        (SEASONS_SECTIONS.find((section) => section.key === 'solar-terms')?.children ?? []).map((child) => child.href)
    );

    const scrollToSeasonSection = (href) => {
        if (typeof window === 'undefined') return;
        if (!href || !href.startsWith('#')) return;

        if (solarTermHrefs.has(href)) {
            if (activeSeasonSection !== 'solar-terms') {
                setActiveSeasonSection('solar-terms');
            }
            setActiveSeasonHref(href);
            window.history.replaceState(null, '', href);
            return;
        }

        const id = href.slice(1);
        const element = document.getElementById(id);

        if (element) {
            const navHeight = document.getElementById('site-nav')?.getBoundingClientRect().height || 0;
            const offset = navHeight + 20;
            const y = element.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({ top: y, behavior: 'smooth' });
            window.history.replaceState(null, '', href);
            setActiveSeasonHref(href);
        }
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (activeSeasonSection !== 'solar-terms' || !activeSeasonHref) return;

        let attempts = 0;
        const tryScroll = () => {
            const targetId = activeSeasonHref.slice(1);
            const element = document.getElementById(targetId);
            if (element) {
                const navHeight = document.getElementById('site-nav')?.getBoundingClientRect().height || 0;
                const offset = navHeight + 20;
                const y = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                return;
            }
            attempts += 1;
            if (attempts > 30) return;
            window.setTimeout(tryScroll, 50);
        };

        tryScroll();
    }, [activeSeasonSection, activeSeasonHref]);

    return (
        <div className="museum-page">
            <AtlasDockLayout
                sidebar={
                    <CollapsibleSidebar
                        title="採茶季節"
                        icon={Calendar}
                        sections={SEASONS_SECTIONS}
                        activeSection={activeSeasonSection}
                        activeSectionHref={activeSeasonHref}
                        onSelectSection={(key) => {
                            setActiveSeasonSection(key);
                            setActiveSeasonHref(null);
                        }}
                        onSelectHref={scrollToSeasonSection}
                        topOffsetPx={siteNavHeightPx + 48}
                    />
                }
            >
                <div className="min-w-0">
                    {/* ── 手機版章節選擇器（xl 以上隱藏，由側邊欄取代）── */}
                    <div className="xl:hidden sticky top-0 z-30 mx-0 px-0 py-2 bg-white/90 backdrop-blur-sm border-b border-stone-200 shadow-sm mb-6 flex flex-col sm:flex-row gap-2">
                        <div className="flex-1 relative">
                            <label htmlFor="mobile-season-select" className="sr-only">選擇採茶季節</label>
                            <select
                                id="mobile-season-select"
                                value={activeSeasonSection}
                                onChange={(e) => {
                                    const key = e.target.value;
                                    setActiveSeasonSection(key);
                                    setActiveSeasonHref(null);
                                    if (typeof window !== 'undefined') {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-[15px] font-semibold text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                            >
                                <option value="four-seasons">四季採茶</option>
                                <option value="solar-terms">二十四節氣</option>
                            </select>
                        </div>
                        {activeSeasonSection === 'solar-terms' && (
                            <div className="flex-1 relative">
                                <label htmlFor="mobile-seasonsub-select" className="sr-only">選擇節氣</label>
                                <select
                                    id="mobile-seasonsub-select"
                                    value={activeSeasonHref || ''}
                                    onChange={(e) => scrollToSeasonSection(e.target.value)}
                                    className="w-full rounded-xl border border-stone-300 bg-emerald-50 px-4 py-2.5 text-[15px] font-semibold text-emerald-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23047857'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                                >
                                    <option value="">選擇節氣...</option>
                                    {(SEASONS_SECTIONS.find((section) => section.key === 'solar-terms')?.children ?? []).map((child) => (
                                        <option key={child.href} value={child.href}>
                                            {child.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    {activeSeasonSection === 'four-seasons' ? (
                        <div id="four-seasons-content">
                            <FourSeasonsSection />
                        </div>
                    ) : null}

                    {activeSeasonSection === 'solar-terms' ? (
                        <div id="solar-terms-content">
                            <SolarTermsPrimer activeSectionHref={activeSeasonHref} />
                        </div>
                    ) : null}
                </div>
            </AtlasDockLayout>
        </div>
    );
}
