import React, { useState } from 'react';
import AtlasDockLayout from '../components/AtlasDockLayout';
import CollapsibleSidebar from '../components/CollapsibleSidebar';
import FourSeasonsSection from '../content/seasons/FourSeasonsSection';
import SolarTermsPrimer from '../content/seasons/SolarTermsPrimer';
import { SEASONS_SECTIONS } from '../config/navigation';

export default function SeasonsSection({ siteNavHeightPx }) {
    const [activeSeasonSection, setActiveSeasonSection] = useState('four-seasons');
    const [activeSeasonHref, setActiveSeasonHref] = useState(null);

    const scrollToSeasonSection = (href) => {
        if (typeof window === 'undefined') return;
        if (!href || !href.startsWith('#')) return;

        if (activeSeasonSection === 'solar-terms') {
            setActiveSeasonHref(href);
            window.history.replaceState(null, '', href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

    return (
        <div className="museum-page">
            <AtlasDockLayout
                sidebar={
                    <CollapsibleSidebar
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
