import React, { Suspense, lazy } from 'react';
import AcademyChapter from './AcademyChapter';

const ZhiyaChapter02 = lazy(() => import('../../content/academy/ZhiyaChapter02'));
const ZhiyaChapter03 = lazy(() => import('../../content/academy/ZhiyaChapter03'));
const ZhiyaChapter04 = lazy(() => import('../../content/academy/ZhiyaChapter04'));
const ZhiyaChapter05 = lazy(() => import('../../content/academy/ZhiyaChapter05'));
const ZhiyaChapter06 = lazy(() => import('../../content/academy/ZhiyaChapter06'));
const ZhiyaChapter07 = lazy(() => import('../../content/academy/ZhiyaChapter07'));
const ZhiyaChapter09 = lazy(() => import('../../content/academy/ZhiyaChapter09'));
const ZhiyaChapter10 = lazy(() => import('../../content/academy/ZhiyaChapter10'));
const ZhiyaChapter14 = lazy(() => import('../../content/academy/ZhiyaChapter14'));
const XueyaChapter01 = lazy(() => import('../../content/academy/XueyaChapter01'));
const XueyaChapter03 = lazy(() => import('../../content/academy/XueyaChapter03'));
const XueyaChapter04 = lazy(() => import('../../content/academy/XueyaChapter04'));
const XueyaChapter05 = lazy(() => import('../../content/academy/XueyaChapter05'));
const XueyaChapter06 = lazy(() => import('../../content/academy/XueyaChapter06'));
const XueyaChapter07 = lazy(() => import('../../content/academy/XueyaChapter07'));
const XueyaChapter08 = lazy(() => import('../../content/academy/XueyaChapter08'));
const XueyaChapter09 = lazy(() => import('../../content/academy/XueyaChapter09'));
const XueyaChapter11 = lazy(() => import('../../content/academy/XueyaChapter11'));
const ChonghuaChapter01 = lazy(() => import('../../content/academy/ChonghuaChapter01'));
const ChonghuaChapter02 = lazy(() => import('../../content/academy/ChonghuaChapter02'));
const ChonghuaChapter03 = lazy(() => import('../../content/academy/ChonghuaChapter03'));
const ChonghuaChapter04 = lazy(() => import('../../content/academy/ChonghuaChapter04'));
const ChonghuaChapter05 = lazy(() => import('../../content/academy/ChonghuaChapter05'));
const ChonghuaChapter06 = lazy(() => import('../../content/academy/ChonghuaChapter06'));
const ChonghuaChapter07 = lazy(() => import('../../content/academy/ChonghuaChapter07'));
const ChonghuaChapter08 = lazy(() => import('../../content/academy/ChonghuaChapter08'));
const ChonghuaChapter09 = lazy(() => import('../../content/academy/ChonghuaChapter09'));
const ChonghuaChapter10 = lazy(() => import('../../content/academy/ChonghuaChapter10'));
const ChonghuaChapter11 = lazy(() => import('../../content/academy/ChonghuaChapter11'));
const ChonghuaChapter12 = lazy(() => import('../../content/academy/ChonghuaChapter12'));
const ChonghuaChapter13 = lazy(() => import('../../content/academy/ChonghuaChapter13'));
const ChonghuaChapter14 = lazy(() => import('../../content/academy/ChonghuaChapter14'));
const ChonghuaChapter15 = lazy(() => import('../../content/academy/ChonghuaChapter15'));
const ChonghuaChapter16 = lazy(() => import('../../content/academy/ChonghuaChapter16'));
const ChonghuaChapter17 = lazy(() => import('../../content/academy/ChonghuaChapter17'));
const ChonghuaChapter18 = lazy(() => import('../../content/academy/ChonghuaChapter18'));
const ChonghuaChapter19 = lazy(() => import('../../content/academy/ChonghuaChapter19'));
const ChonghuaChapter20 = lazy(() => import('../../content/academy/ChonghuaChapter20'));
const ChonghuaChapter21 = lazy(() => import('../../content/academy/ChonghuaChapter21'));
const ChonghuaChapter22 = lazy(() => import('../../content/academy/ChonghuaChapter22'));
const ChonghuaChapter23 = lazy(() => import('../../content/academy/ChonghuaChapter23'));
const ChonghuaChapter24 = lazy(() => import('../../content/academy/ChonghuaChapter24'));
const ChonghuaChapter25 = lazy(() => import('../../content/academy/ChonghuaChapter25'));
const ChonghuaChapter26 = lazy(() => import('../../content/academy/ChonghuaChapter26'));
const ChonghuaChapter27 = lazy(() => import('../../content/academy/ChonghuaChapter27'));
const ChonghuaChapter28 = lazy(() => import('../../content/academy/ChonghuaChapter28'));
const ChonghuaChapter29 = lazy(() => import('../../content/academy/ChonghuaChapter29'));
const ChonghuaChapter30 = lazy(() => import('../../content/academy/ChonghuaChapter30'));
const ChonghuaChapter31 = lazy(() => import('../../content/academy/ChonghuaChapter31'));
const ChonghuaChapter32 = lazy(() => import('../../content/academy/ChonghuaChapter32'));
const ChonghuaChapter33 = lazy(() => import('../../content/academy/ChonghuaChapter33'));

/**
 * Academy chapter configuration
 * Each key corresponds to an activeTab value (e.g., 'academy_zhiya_02')
 */
const ACADEMY_CHAPTERS = {
    academy_zhiya_02: {
        component: ZhiyaChapter02,
        category: '大觀書院 · 質雅',
        title: '第二堂：清香型茶的品質探討',
        intro: '深入解析清香型烏龍茶的核心特質與品鑑要領。從「清」的定義出發，探討輕發酵、不烘焙的工藝哲學，並透過文山包種茶與高山烏龍茶的實例，理解風土、品種與製程如何共同塑造清揚雅致的風味。'
    },
    academy_zhiya_03: {
        component: ZhiyaChapter03,
        category: '大觀書院 · 質雅',
        title: '第三堂：焙香茶的品質探討',
        intro: '從工藝原理到品鑑實務。理解清香、焙香與濃香的三大差異，深入探討「茶為君，火為臣」的核心哲學，並學習辨識與修正焙火瑕疵的高階技法。'
    },
    academy_zhiya_04: {
        component: ZhiyaChapter04,
        category: '大觀書院 · 質雅',
        title: '第四堂：濃香型茶的品質探討 (以東方美人茶為核心)',
        intro: '深入解析濃香型茶的發酵奧秘與酚氨比轉化，探討東方美人茶的天然蜜香論辯、靜置回潤工藝以及「揚長隱次」的進階沖泡哲學。'
    },
    academy_zhiya_05: {
        component: ZhiyaChapter05,
        category: '大觀書院 · 質雅',
        title: '第五堂：茶席設計與雙杯品鑑',
        intro: '從課程回顧與茶湯修飾技巧出發，深入探討茶席設計的六大核心要件與雙杯品鑑的獨特儀軌，並提供術科測驗的完整備考指南。'
    },
    academy_zhiya_06: {
        component: ZhiyaChapter06,
        category: '大觀書院 · 質雅',
        title: '第六堂：茶席設計美學：佈局、用色與意境',
        intro: '茶席是從技藝到心境的完整修煉。本章節系統化解構茶席的佈局心法、六大核心要件，並結合歷史流變與當代創意，引領您構建出專屬於自己的意境空間。'
    },
    academy_zhiya_07: {
        component: ZhiyaChapter07,
        category: '大觀書院 · 質雅',
        title: '第七堂：茶席/器物之選/色彩密碼',
        intro: '茶席不僅是裝置藝術，更是文化場域。本堂課探討器物色彩的歷史演變、釉彩工藝的細節美學，以及如何透過「色彩密碼」與「藉器練心」的實踐，達到適得其所與心神安頓的境界。'
    },
    academy_zhiya_09: {
        component: ZhiyaChapter09,
        category: '大觀書院 · 質雅',
        title: '第九堂：茶道進階與西湖龍井品鑑',
        intro: '回顧進階茶道技法，引領學員從台灣茶走向中國茶的廣袤領域。深入探討「小滿」哲思，並透過西湖龍井的品鑑與「茶碗以匙分茶」技法，體悟無味之味的至高境界。'
    },
    academy_zhiya_10: {
        component: ZhiyaChapter10,
        category: '大觀書院 · 質雅',
        title: '第十堂：茶碗以匙分茶 / 碧螺春 / 武夷岩茶',
        intro: '從茶碗分茶的儀式美學，到碧螺春的鮮爽靈動與武夷岩茶的岩骨花香。本章帶您探索中國名茶的多元風貌，並掌握不同茶類的品鑑與沖泡心法。'
    },
    academy_zhiya_14: {
        component: ZhiyaChapter14,
        category: '大觀書院 · 質雅',
        title: '第十四堂：紅茶品評、歷史與沖泡實踐全解析',
        intro: '從感官品評到文化傳承的完整旅程。深入探索紅茶的專業品評技巧、嚴謹的評審流程、全球傳播史，以及實用的沖泡技術與文化意涵。'
    },
    academy_xueya_01: {
        component: XueyaChapter01,
        category: '大觀書院 · 學雅',
        title: '茶之於味：當代茶道的藝術與哲學精神',
        intro: '沖泡一杯茶，看似日常，實則是一場短暫、個人且無法複製的藝術創作。',
    },
    academy_xueya_03: {
        component: XueyaChapter03,
        category: '大觀書院 · 學雅',
        title: '第三堂：從茶席美學到品飲之道',
        intro: '從「橫向」與「直式」的佈局美學，到器物與茶湯的無聲交流。本章將帶領您探索茶席的密碼，並透過「五美四用」的實踐，進入茶道的心領神會。'
    },
    academy_xueya_04: {
        component: XueyaChapter04,
        category: '大觀書院 · 學雅',
        title: '第四堂：人文茶道儀軌：溫、置、注、奉',
        intro: '從「技術功能」向「情感連結」的昇華。本章解析「溫、置、注、奉」四大儀軌的哲學意涵與實踐細節，引領茶者進入身心合一的生命修煉。'
    },
    academy_xueya_05: {
        component: XueyaChapter05,
        category: '大觀書院 · 學雅',
        title: '第五堂：台灣凍頂烏龍茶深度解析',
        intro: '從「三球四條」到「四球五條」，深度解析台灣特色茶分類演進，並由品種、工藝到比賽評鑑，全面解構凍頂烏龍茶的標竿價值。'
    },
    academy_xueya_06: {
        component: XueyaChapter06,
        category: '大觀書院 · 學雅',
        title: '第六堂：鐵觀音',
        intro: '品種特性、重發酵重焙火的工藝美學，以及那標誌性的「觀音韻」。本章深度解析這款台灣烏龍茶中風格最為鮮明的茶品，並探討「正欉」的定義與沖泡心法。'
    },
    academy_xueya_07: {
        component: XueyaChapter07,
        category: '大觀書院 · 學雅',
        title: '第七堂：台灣特色茶學',
        intro: '從一片樹葉的傳奇到「因茶置器」的智慧。本章帶您探索台灣茶從條形到球形的演變，並深入蓋杯（蓋碗）的歷史文化與沖泡紅烏龍的實作技法。'
    },
    academy_xueya_08: {
        component: XueyaChapter08,
        category: '大觀書院 · 學雅',
        title: '第八堂：茶席儀式與文山包種茶',
        intro: '茶道具不僅是工具，更是精神的延伸。本章探討茶則的文化意涵與置茶儀軌，並深入品鑑清揚雅致的「少女之茶」——文山包種。'
    },
    academy_xueya_09: {
        component: XueyaChapter09,
        category: '大觀書院 · 學雅',
        title: '第九堂：東方美人茶鑑賞',
        intro: '從「著涎」的生態奇蹟到精湛的製茶工藝。本章帶您深入傳奇的「膨風茶」，解析小綠葉蟬與蜜香的秘密，並傳授七大泡茶心法與鑑賞之道。'
    },
    academy_xueya_11: {
        component: XueyaChapter11,
        category: '大觀書院 · 學雅',
        title: '第十一堂：紅茶的世界版圖',
        intro: '從茶盜羅伯特·福鈞的傳奇，到小葉種與大葉種的科學差異。本章帶您走遍紅茶的全球版圖，理解品種、分級與沖泡的核心知識。'
    },
    academy_chonghua_01: { component: ChonghuaChapter01, category: '崇華書院', title: '第01堂：茶具的佈置與搭配', intro: '從桌巾、席方到壺承、飲杯，系統化解構茶席中每一件器具的功能與搭配心法。' },
    academy_chonghua_02: { component: ChonghuaChapter02, category: '崇華書院', title: '第02堂：茶席儀軌', intro: '探討茶席上的美學與動態儀軌。從靜態的橫向與直式佈局，到四大核心步驟「溫、置、注、奉」中物理作用與待客心理的奧秘。' },
    academy_chonghua_03: { component: ChonghuaChapter03, category: '崇華書院', title: '第03堂：世界與台灣紅茶史', intro: '從中國武夷山走向世界的全球貿易脈絡，到日月潭紅玉的在地風味轉型。' },
    academy_chonghua_04: { component: ChonghuaChapter04, category: '崇華書院', title: '第04堂：開啟你的風味冒險地圖 (1-2-6 體系指南)', intro: '掌握「1-2-6」三個數字，從萬茶歸宗的植物學起點、小葉種與大葉種的血統之別，到六大茶類的工藝光譜，建立一套風味預測系統。' },
    academy_chonghua_05: { component: ChonghuaChapter05, category: '崇華書院', title: '第05堂：蓋碗教學', intro: '從蓋、碗、托的器物理解，到三指持碗、蓋縫控制、短泡出湯與不燙手練習，建立蓋碗沖泡的基本功。' },
    academy_chonghua_06: { component: ChonghuaChapter06, category: '崇華書院', title: '第06堂', intro: '認識茶樹品種——一片葉子的身世之謎' },
    academy_chonghua_07: {
        component: ChonghuaChapter07,
        category: '崇華書院',
        title: '第07堂：青茶類風味辨識',
        intro: '從文山包種、杉林溪、梨山到木柵鐵觀音，理解青茶製程、產區風格與清香至焙香的品飲辨識。'
    },
    academy_chonghua_08: {
        component: ChonghuaChapter08,
        category: '崇華書院',
        title: '第08堂：紅茶類風味辨識',
        intro: '以山茶紅茶、蜜香紅茶、台茶18號紅玉與小葉種紅茶為核心，建立紅茶類的香氣、湯感與品種判讀能力。'
    },
    academy_chonghua_09: { component: ChonghuaChapter09, category: '崇華書院', title: '第09堂：認識氧化', intro: '認識氧化——茶葉風味的幕後推手' },
    academy_chonghua_10: { component: ChonghuaChapter10, category: '崇華書院', title: '第10堂', intro: '規劃中' },
    academy_chonghua_11: { component: ChonghuaChapter11, category: '崇華書院', title: '第11堂', intro: '規劃中' },
    academy_chonghua_12: { component: ChonghuaChapter12, category: '崇華書院', title: '第12堂', intro: '規劃中' },
    academy_chonghua_13: { component: ChonghuaChapter13, category: '崇華書院', title: '第13堂', intro: '規劃中' },
    academy_chonghua_14: { component: ChonghuaChapter14, category: '崇華書院', title: '第14堂', intro: '規劃中' },
    academy_chonghua_15: { component: ChonghuaChapter15, category: '崇華書院', title: '第15堂', intro: '規劃中' },
    academy_chonghua_16: { component: ChonghuaChapter16, category: '崇華書院', title: '第16堂', intro: '規劃中' },
    academy_chonghua_17: { component: ChonghuaChapter17, category: '崇華書院', title: '第17堂', intro: '規劃中' },
    academy_chonghua_18: { component: ChonghuaChapter18, category: '崇華書院', title: '第18堂', intro: '規劃中' },
    academy_chonghua_19: { component: ChonghuaChapter19, category: '崇華書院', title: '第19堂', intro: '規劃中' },
    academy_chonghua_20: { component: ChonghuaChapter20, category: '崇華書院', title: '第20堂', intro: '規劃中' },
    academy_chonghua_21: { component: ChonghuaChapter21, category: '崇華書院', title: '第21堂', intro: '規劃中' },
    academy_chonghua_22: { component: ChonghuaChapter22, category: '崇華書院', title: '第22堂', intro: '規劃中' },
    academy_chonghua_23: { component: ChonghuaChapter23, category: '崇華書院', title: '第23堂', intro: '規劃中' },
    academy_chonghua_24: { component: ChonghuaChapter24, category: '崇華書院', title: '第24堂', intro: '規劃中' },
    academy_chonghua_25: { component: ChonghuaChapter25, category: '崇華書院', title: '第25堂', intro: '規劃中' },
    academy_chonghua_26: { component: ChonghuaChapter26, category: '崇華書院', title: '第26堂', intro: '規劃中' },
    academy_chonghua_27: { component: ChonghuaChapter27, category: '崇華書院', title: '第27堂', intro: '規劃中' },
    academy_chonghua_28: { component: ChonghuaChapter28, category: '崇華書院', title: '第28堂', intro: '規劃中' },
    academy_chonghua_29: { component: ChonghuaChapter29, category: '崇華書院', title: '第29堂', intro: '規劃中' },
    academy_chonghua_30: { component: ChonghuaChapter30, category: '崇華書院', title: '第30堂', intro: '規劃中' },
    academy_chonghua_31: { component: ChonghuaChapter31, category: '崇華書院', title: '第31堂', intro: '規劃中' },
    academy_chonghua_32: { component: ChonghuaChapter32, category: '崇華書院', title: '第32堂', intro: '規劃中' },
    academy_chonghua_33: { component: ChonghuaChapter33, category: '崇華書院', title: '第33堂', intro: '規劃中' }
};

function AcademyLoadingFallback() {
    return (
        <div className="museum-page">
            <div className="museum-stage">
                <div className="museum-panel p-8 text-center text-sm font-semibold text-stone-500">
                    Loading...
                </div>
            </div>
        </div>
    );
}

/**
 * AcademyRouter Component
 * 
 * Centralizes all Academy chapter routing logic.
 * Renders the appropriate Academy chapter based on activeTab.
 * 
 * @param {Object} props
 * @param {string} props.activeTab - Current active tab (e.g., 'academy_zhiya_02')
 * @param {boolean} props.daguanUnlocked - Whether the Daguan Academy is unlocked
 * @param {boolean} props.chonghuaUnlocked - Whether the Chonghua Academy is unlocked
 * @returns {JSX.Element|null} The rendered Academy chapter or null
 */
export default function AcademyRouter({ activeTab, daguanUnlocked, chonghuaUnlocked }) {
    const resolvedActiveTab = typeof activeTab === 'string' ? activeTab : '';
    if (!resolvedActiveTab.startsWith('academy_')) {
        return null;
    }
    const isChonghua = resolvedActiveTab.startsWith('academy_chonghua_');
    if ((isChonghua && !chonghuaUnlocked) || (!isChonghua && !daguanUnlocked)) {
        return null;
    }

    // Get chapter configuration
    const chapter = ACADEMY_CHAPTERS[resolvedActiveTab];

    // If chapter not found, render "Coming Soon" page
    if (!chapter) {
        return (
            <div className="museum-page">
                <div className="museum-stage">
                    <div className="museum-panel p-12 text-center">
                        <div className="museum-label mx-auto mb-4">ACADEMY · COMING SOON</div>
                        <h2 className="text-3xl font-extrabold text-stone-900">章節建置中</h2>
                        <p className="mt-4 text-stone-600 max-w-lg mx-auto">此章節內容正在編撰與校對中，敬請期待。</p>
                    </div>
                </div>
            </div>
        );
    }

    // Render the chapter
    const ChapterComponent = chapter.component;

    return (
        <Suspense fallback={<AcademyLoadingFallback />}>
        <AcademyChapter
            category={chapter.category}
            title={chapter.title}
            intro={chapter.intro}
        >
            <ChapterComponent />
        </AcademyChapter>
        </Suspense>
    );
}




