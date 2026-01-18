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
                        <PuerhEncyclopedia topOffsetPx={siteNavHeightPx + 20} activeHref={puerhChapterHref} />
                    </div>
                </AtlasDockLayout>
            </div>
        </div>
    );
}
