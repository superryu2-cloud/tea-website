import React, { useState } from 'react';
import { Leaf, BookOpen, ChevronRight, ChevronDown, Flame, Clock, Map, Star, Info, History, Scroll, Droplets, Globe, Wind, Tag, Scale } from 'lucide-react';
import ClickableImage from '../ClickableImage';
import teaData from '../../data/teaData';
import { UI_FLAGS } from '../../config/uiFlags';
import { VARIETIES_KINDS, CHEN_CHUAN_TOC, OOLONG_TOC, RED_TOC } from '../../config/navigation';
import ChenChuanTeaClassification from '../../content/varieties/ChenChuanTeaClassification';
import RedTeaGlobalStory from '../../content/varieties/RedTeaGlobalStory';
import GreenTeaHistory from '../../content/varieties/GreenTeaHistory';
import YellowTeaHistory from '../../content/varieties/YellowTeaHistory';
import WhiteTeaHistory from '../../content/varieties/WhiteTeaHistory';
import BlackTeaHistory from '../../content/varieties/BlackTeaHistory';
import SixTeaTypesNotes from '../../content/varieties/SixTeaTypesNotes';
import TeaEncyclopediaOverview from '../../content/varieties/TeaEncyclopediaOverview';
import OolongRegions from '../../content/varieties/OolongRegions';
import WhiteTeaRegions from '../../content/varieties/WhiteTeaRegions';
import OolongTeaVerticalTimeline from '../sections/OolongTeaVerticalTimeline';
import SectionCard from '../SectionCard';
import AtlasDockLayout from '../AtlasDockLayout';
import ChapterSidebar from '../ChapterSidebar';
import VarietiesNotesMode from './VarietiesNotesMode';
import TeaSearchFilter from './TeaSearchFilter';
import ChenChuanEssaySection from './ChenChuanEssaySection';

const WHITE_TOC_EXTENDED = [
    { href: '#white-history', label: '白茶歷史' },
    { href: '#white-fujian', label: '福建' },
    { href: '#white-yunnan', label: '雲南' },
];

const FactsGrid = ({ tea }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">FERMENTATION</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">{tea.fermentation}</div>
            <div className="mt-2 text-sm text-stone-600">茶湯：{tea.liquorColor}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">REPRESENTATIVE</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">{tea.representative}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">PROCESS</div>
            <div className="mt-2 text-sm text-stone-700">{tea.process}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">BREWING</div>
            <div className="mt-2 text-sm text-stone-700">
                水溫：<span className="font-bold">{tea.temp}</span>／出湯：<span className="font-bold">{tea.time}</span>
            </div>
        </div>
    </div>
);

const VarietiesSection = ({
    activeTab,
    varietiesKind,
    setVarietiesKind,
    setActiveTab,
    setAtlasNavOpen,
    setMobileMenuOpen,
    setPendingScrollTarget,
    chenChuanScrollOffsetPx,
    chenChuanChapterHref,
    setChenChuanChapterHref,
    oolongRegionHref,
    setOolongRegionHref,
    redTeaHref,
    setRedTeaHref,
    whiteRegionHref,
    setWhiteRegionHref,
    siteNavHeightPx,
    goToTab,
    selectChenChuanChapter,
    selectOolongRegion,
    selectRedTeaTopic,
    selectWhiteRegion,
    setScienceRoom,
    selectScienceTeachingChapter,
}) => {
    const notesMode = UI_FLAGS.notesMode;
    const [expandedCardId, setExpandedCardId] = useState(null);
    const [filterFermentation, setFilterFermentation] = useState('all');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [showVarietiesAtlas, setShowVarietiesAtlas] = useState(!notesMode);
    const [showChenChuanEssay, setShowChenChuanEssay] = useState(false);

    const handleCardClick = (id) => {
        setExpandedCardId(prevId => (prevId === id ? null : id));
    };

    const filteredTeas = teaData.filter(tea => {
        if (tea.name === '普洱茶') return false; // 普洱茶獨立顯示

        const matchesFermentation = filterFermentation === 'all' || tea.fermentation === filterFermentation;
        const matchesKeyword = searchKeyword === '' ||
            tea.name.includes(searchKeyword) ||
            tea.representative.includes(searchKeyword) ||
            tea.desc.includes(searchKeyword);

        return matchesFermentation && matchesKeyword;
    });

    if (UI_FLAGS.legacyVarieties) {
        return (
            <div className="py-12 animate-fadeIn">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {notesMode && (
                        <VarietiesNotesMode
                            onShowAtlas={() => setShowVarietiesAtlas(true)}
                            onShowEssay={() => {
                                setShowVarietiesAtlas(true);
                                setShowChenChuanEssay(true);
                            }}
                        />
                    )}

                    {!notesMode || showVarietiesAtlas ? (
                        <>
                            {/* 國際標準六大茶類區塊 */}
                            <div className="mb-16">
                                <div className="museum-frame museum-paper ">
                                    <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
                                    <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl"></div>
                                    <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
                                        <div className="museum-label">
                                            <Leaf size={14} className="opacity-80" />
                                            EXHIBIT · SIX TEA TYPES
                                        </div>
                                        <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">六大茶類</h2>
                                        <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                                            以「工藝」與「發酵程度」作為主軸，將茶葉分為綠、白、黃、青、紅、黑六大類；同一片鮮葉，走出六條風味之路。
                                        </p>
                                        <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                                            <div className="museum-card px-5 py-4 text-left">
                                                <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO USE</div>
                                                <div className="mt-1 font-bold text-stone-900">用篩選快速定位茶類</div>
                                                <div className="mt-1 text-sm text-stone-600">依發酵程度切換分類視角</div>
                                            </div>
                                            <div className="museum-card px-5 py-4 text-left">
                                                <div className="text-xs font-extrabold tracking-widest text-stone-500">SEARCH</div>
                                                <div className="mt-1 font-bold text-stone-900">用關鍵字查代表茶品</div>
                                                <div className="mt-1 text-sm text-stone-600">適合課堂提問與對照</div>
                                            </div>
                                            <div className="museum-card px-5 py-4 text-left">
                                                <div className="text-xs font-extrabold tracking-widest text-stone-500">READ</div>
                                                <div className="mt-1 font-bold text-stone-900">展開長文作為參考</div>
                                                <div className="mt-1 text-sm text-stone-600">章節化排版便於引用</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Reference Essay (Chen Chuan) */}
                            <ChenChuanEssaySection
                                showChenChuanEssay={showChenChuanEssay}
                                setShowChenChuanEssay={setShowChenChuanEssay}
                                chenChuanScrollOffsetPx={chenChuanScrollOffsetPx}
                                chenChuanChapterHref={chenChuanChapterHref}
                            />


                            {/* Filter Section */}
                            <TeaSearchFilter
                                filterFermentation={filterFermentation}
                                setFilterFermentation={setFilterFermentation}
                                searchKeyword={searchKeyword}
                                setSearchKeyword={setSearchKeyword}
                                filteredCount={filteredTeas.length}
                            />


                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                                {filteredTeas.map((tea) => (
                                    <div key={tea.id} className="pt-6">
                                        <div className={`group flow-root museum-card px-6 pb-8 border-t-4 ${tea.accentColor} hover:-translate-y-0.5 transition-all duration-300`}>
                                            <div className="-mt-6">
                                                <div>
                                                    <span className={`inline-flex items-center justify-center p-3 shadow-lg rounded-2xl text-white ring-1 ring-black/5`} style={{ background: tea.image }}>
                                                        <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <h3 className="mt-8 text-xl font-bold text-stone-900 tracking-tight">{tea.name}</h3>
                                                <p className="text-sm text-stone-400 mb-2">{tea.engName}</p>
                                                <span className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-full mb-3 border border-stone-200">
                                                    <span className={`w-2 h-2 rounded-full ${tea.accentColor}`}></span>
                                                    {tea.fermentation}
                                                </span>

                                                {/* Tags for Taste */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {tea.taste.map((t, i) => (
                                                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-800 border border-stone-200">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Representative Teas */}
                                                <div className="mb-4 text-base">
                                                    <span className="font-semibold text-stone-600">代表：</span>
                                                    <span className="text-stone-500">{tea.representative}</span>
                                                </div>

                                                <p className="mt-2 text-base text-stone-500 leading-relaxed">
                                                    {tea.desc}
                                                </p>

                                                {/* Details Button */}
                                                <button
                                                    onClick={() => handleCardClick(tea.id)}
                                                    className="w-full mt-6 text-sm font-extrabold text-stone-900 flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white/70 hover:bg-white transition-colors"
                                                >
                                                    {expandedCardId === tea.id ? '收起詳情' : '展開詳情'}
                                                    <ChevronRight size={16} className={`transform transition-transform duration-300 ${expandedCardId === tea.id ? 'rotate-90' : ''}`} />
                                                </button>

                                                {/* Expanded Details Section */}
                                                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedCardId === tea.id ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                                                    <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-inner">
                                                        <h4 className="font-bold text-sm text-stone-800 mb-2 flex items-center"><BookOpen size={16} className="mr-2 text-stone-500" /> 產地與歷史</h4>
                                                        <p className="text-base text-stone-600 leading-relaxed">{tea.details}</p>
                                                    </div>

                                                    {tea.id === 4 && (
                                                        <button
                                                            onClick={() => {
                                                                setActiveTab('varieties');
                                                                setVarietiesKind('red');
                                                                setPendingScrollTarget('red-tea-global-story');
                                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                                            }}
                                                            className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-red-200 rounded-md text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 transition-colors"
                                                        >
                                                            <BookOpen className="mr-2 h-4 w-4" />
                                                            查看紅茶全球史
                                                        </button>
                                                    )}
                                                </div>

                                                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-sm text-stone-400">
                                                    <div className="flex items-center" title="建議水溫">
                                                        <Flame size={16} className="mr-1 text-red-400" /> {tea.temp}
                                                    </div>
                                                    <div className="flex items-center" title="沖泡時間">
                                                        <Clock size={16} className="mr-1 text-blue-400" /> {tea.time}
                                                    </div>
                                                </div>
                                            </div>

                                            {tea.id === 3 && (
                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setVarietiesKind('oolong');
                                                            setPendingScrollTarget('oolong-minbei');
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        }}
                                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 font-extrabold text-sm hover:bg-amber-100 transition-colors"
                                                    >
                                                        <Map className="h-4 w-4" />
                                                        查看青茶系譜（兩岸工藝對話）
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredTeas.length === 0 && (
                                <div className="text-center py-12 text-stone-500">
                                    <p>沒有找到符合條件的茶類，請嘗試調整篩選條件。</p>
                                </div>
                            )}

                            <div className="mt-10">
                                <div className="museum-frame museum-paper overflow-hidden">
                                    <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-white border border-stone-200 rounded-xl p-3 text-amber-700">
                                                <Star size={22} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-stone-900">普洱茶（獨立專區）</h3>
                                                <p className="text-sm text-stone-600 mt-1">普洱茶已移出六大茶類，改為獨立功能區。</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => goToTab('puerh')}
                                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold border transition-colors self-start md:self-auto w-full md:w-auto
                  border-amber-300 text-amber-900 bg-amber-50 hover:bg-amber-100"
                                        >
                                            前往普洱茶
                                            <ChevronRight size={16} className="text-amber-700" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </>
                    ) : notesMode ? (
                        <div className="museum-panel p-7 md:p-10 text-center">
                            <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
                            <div className="mt-4 text-lg font-extrabold text-stone-900">需要查資料時再展開百科</div>
                            <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                                百科包含：六大茶類總覽、陳椽長文、篩選與關鍵字搜尋、普洱茶百科全文。
                            </p>
                            <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                                <button
                                    type="button"
                                    onClick={() => setShowVarietiesAtlas(true)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                                >
                                    展開百科內容
                                    <ChevronRight size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setActiveTab('science');
                                        setAtlasNavOpen(true);
                                        setScienceRoom('teaching');
                                        selectScienceTeachingChapter('#ref-all');
                                    }}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                                >
                                    直接看教學引用整理
                                    <ChevronRight size={16} className="text-emerald-700" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        goToTab('puerh');
                                    }}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                                >
                                    直接看普洱茶
                                    <ChevronRight size={16} className="text-emerald-700" />
                                </button>
                            </div>
                        </div>
                    ) : null}

                </div>
            </div>
        );
    }

    const kindMeta = VARIETIES_KINDS.find((k) => k.key === varietiesKind) ?? VARIETIES_KINDS[0];
    const kindTea = kindMeta.type === 'tea' ? teaData.find((tea) => tea.id === kindMeta.teaId) : null;
    const showSixTeaNotes = ['white', 'yellow', 'green', 'oolong', 'red', 'black'].includes(varietiesKind);
    const varietiesSidebarItems = VARIETIES_KINDS.map((kind) => ({ key: kind.key, label: kind.label }));
    const varietiesSubItemsByKey = {
        ref_chenchuan: [{ href: '#cc-all', label: '全部章節' }, ...CHEN_CHUAN_TOC],
        oolong: OOLONG_TOC,
        red: RED_TOC,
        white: WHITE_TOC_EXTENDED,
    };

    const varietiesActiveSubHref =
        varietiesKind === 'ref_chenchuan'
            ? chenChuanChapterHref
            : varietiesKind === 'oolong'
                ? oolongRegionHref
                : varietiesKind === 'red'
                    ? redTeaHref
                    : varietiesKind === 'white'
                        ? whiteRegionHref
                        : null;

    const onSelectVarietiesSubHref = (href) => {
        if (!href) return;
        setPendingScrollTarget('varieties-kind-header');
        if (varietiesKind === 'ref_chenchuan') selectChenChuanChapter(href);
        if (varietiesKind === 'oolong') selectOolongRegion(href);
        if (varietiesKind === 'red') selectRedTeaTopic(href);
        if (varietiesKind === 'white') selectWhiteRegion(href);
    };

    if (activeTab === 'home') {
        const homeTeaKinds = VARIETIES_KINDS.filter((kind) => kind.type === 'tea');
        return (
            <section className="museum-page">
                <div className="museum-stage">
                    <div className="mb-12 museum-frame museum-paper ">
                        <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl"></div>
                        <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
                            <div className="museum-label mx-auto">
                                <Leaf size={14} className="opacity-80" />
                                EXHIBIT · SIX TEA TYPES
                            </div>
                            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">六大茶類</h2>
                            <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                                以「工藝」與「發酵程度」作為主軸，將茶葉分為綠、白、黃、青、紅、黑六大類；從這裡開始，就能快速定位風味與學習路線。
                            </p>

                            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                                <div className="museum-card px-5 py-4 text-left">
                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO USE</div>
                                    <div className="mt-1 font-bold text-stone-900">用篩選快速定位茶類</div>
                                    <div className="mt-1 text-sm text-stone-600">先看發酵程度，再看工藝差異。</div>
                                </div>
                                <div className="museum-card px-5 py-4 text-left">
                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">SEARCH</div>
                                    <div className="mt-1 font-bold text-stone-900">用關鍵字查代表茶品</div>
                                    <div className="mt-1 text-sm text-stone-600">適合課堂提問與對照。</div>
                                </div>
                                <div className="museum-card px-5 py-4 text-left">
                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">READ</div>
                                    <div className="mt-1 font-bold text-stone-900">展開詳情作為參考</div>
                                    <div className="mt-1 text-sm text-stone-600">先理解，再進入展廳章節。</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                        {homeTeaKinds.map((kind) => {
                            const tea = teaData.find((t) => t.id === kind.teaId);
                            if (!tea) return null;
                            const expanded = expandedCardId === tea.id;

                            return (
                                <div key={kind.key} className="pt-6">
                                    <div
                                        className={`group flow-root museum-card px-6 pb-8 border-t-4 ${tea.accentColor} hover:-translate-y-0.5 transition-all duration-300`}
                                    >
                                        <div className="-mt-6">
                                            <div>
                                                <span
                                                    className="inline-flex items-center justify-center p-3 shadow-lg rounded-2xl text-white ring-1 ring-black/5"
                                                    style={{ background: tea.image }}
                                                >
                                                    <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
                                                </span>
                                            </div>

                                            <h3 className="mt-8 text-xl font-extrabold text-stone-900 tracking-tight">{tea.name}</h3>
                                            <p className="text-sm text-stone-400 mb-2">{tea.engName}</p>

                                            <span className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-full mb-3 border border-stone-200">
                                                <span className={`w-2 h-2 rounded-full ${tea.accentColor}`}></span>
                                                {tea.fermentation}
                                            </span>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {(tea.taste ?? []).slice(0, 6).map((t) => (
                                                    <span
                                                        key={t}
                                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-800 border border-stone-200"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="text-sm text-stone-700 leading-relaxed">
                                                <span className="font-semibold text-stone-600">代表：</span>
                                                {tea.representative}
                                            </div>
                                            <p className="mt-3 text-sm text-stone-600 leading-relaxed">{tea.desc}</p>

                                            <div className="mt-5 space-y-2">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setActiveTab('varieties');
                                                        setAtlasNavOpen(true);
                                                        setMobileMenuOpen(false);
                                                        setVarietiesKind(kind.key);
                                                        setPendingScrollTarget('varieties-kind-header');
                                                    }}
                                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 font-extrabold text-sm hover:bg-emerald-100 transition-colors"
                                                >
                                                    進入茶學百科
                                                    <ChevronRight size={16} className="text-emerald-700" />
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => setExpandedCardId((prev) => (prev === tea.id ? null : tea.id))}
                                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-stone-200 bg-white/70 text-stone-800 font-extrabold text-sm hover:bg-white transition-colors"
                                                >
                                                    {expanded ? '收起詳情' : '展開詳情'}
                                                    <ChevronDown size={16} className={expanded ? 'rotate-180' : ''} />
                                                </button>
                                            </div>

                                            {expanded ? (
                                                <div className="mt-4 rounded-2xl border border-stone-200 bg-white/70 p-4">
                                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">產地與歷史</div>
                                                    <p className="mt-2 text-sm text-stone-700 leading-relaxed">{tea.details}</p>
                                                    <div className="mt-4 flex items-center justify-between text-xs text-stone-600 font-bold">
                                                        <span className="flex items-center">
                                                            <Flame size={14} className="mr-1 text-red-400" /> {tea.temp}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <Clock size={14} className="mr-1 text-blue-400" /> {tea.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <div className="museum-page">
            <div className="w-full">
                <AtlasDockLayout
                    topOffsetPx={siteNavHeightPx + 24}
                    sidebar={
                        <ChapterSidebar
                            title="六大茶類導覽"
                            items={varietiesSidebarItems}
                            activeKey={varietiesKind}
                            onSelectKey={(key) => {
                                setVarietiesKind(key);
                                if (key === 'ref_chenchuan') setChenChuanChapterHref('#cc-all');
                                if (key === 'red') setRedTeaHref('#red-global');
                                if (key === 'oolong') setOolongRegionHref(null);
                                if (key === 'white') setWhiteRegionHref('#white-history');
                                if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            subItemsByKey={varietiesSubItemsByKey}
                            activeSubHref={varietiesSubItemsByKey[varietiesKind]?.length ? varietiesActiveSubHref : null}
                            onSelectSubHref={varietiesSubItemsByKey[varietiesKind]?.length ? onSelectVarietiesSubHref : null}
                            topOffsetPx={siteNavHeightPx + 48}
                            pinMode="static"
                        />
                    }
                >
                    <div className="space-y-6 min-w-0">

                        {kindMeta.key === 'ref_chenchuan' ? (
                            <ChenChuanTeaClassification
                                topOffsetPx={chenChuanScrollOffsetPx}
                                activeHref={chenChuanChapterHref === '#cc-all' ? null : chenChuanChapterHref}
                            />
                        ) : null}

                        {kindMeta.type === 'overview' ? (
                            <TeaEncyclopediaOverview />
                        ) : null}

                        {kindMeta.type === 'tea' ? (
                            <>
                                <div id="varieties-kind-header" className="h-0" aria-hidden="true" />
                                {kindTea &&
                                    (varietiesKind !== 'oolong' || !oolongRegionHref) &&
                                    (varietiesKind !== 'red' || redTeaHref === '#red-global') &&
                                    (varietiesKind !== 'white' || !whiteRegionHref || whiteRegionHref === '#white-history') ? (
                                    <>
                                        <SectionCard title="概覽" icon={BookOpen}>
                                            <p className="text-lg text-stone-800 leading-relaxed">{kindTea.desc}</p>
                                            {kindTea.taste?.length ? (
                                                <div className="flex flex-wrap gap-2">
                                                    {kindTea.taste.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-sm font-bold text-stone-700"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </SectionCard>

                                        <SectionCard title="關鍵資訊" icon={Info}>
                                            <FactsGrid tea={kindTea} />
                                        </SectionCard>

                                        <SectionCard title="背景與發展" icon={History}>
                                            <p className="text-stone-700 leading-relaxed whitespace-pre-line">{kindTea.details}</p>
                                        </SectionCard>

                                        {showSixTeaNotes ? (
                                            <SectionCard title="茶類筆記（定義／製作）" icon={Scroll}>
                                                <SixTeaTypesNotes kind={varietiesKind} />
                                            </SectionCard>
                                        ) : null}

                                        <SectionCard title="沖泡要點" icon={Droplets}>
                                            <p className="text-stone-700 leading-relaxed">{kindTea.brewingTips}</p>
                                        </SectionCard>

                                        {varietiesKind === 'oolong' && !oolongRegionHref ? (
                                            <SectionCard title="歷史長河" icon={History}>
                                                <OolongTeaVerticalTimeline onNavigate={selectOolongRegion} />
                                            </SectionCard>
                                        ) : null}
                                    </>
                                ) : null}

                                {varietiesKind === 'oolong' && oolongRegionHref ? (
                                    <OolongRegions topOffsetPx={chenChuanScrollOffsetPx} activeHref={oolongRegionHref} />
                                ) : null}

                                {varietiesKind === 'green' ? (
                                    <SectionCard title="綠茶歷史" icon={Globe}>
                                        <div id="green-tea-history" className="scroll-mt-28">
                                            <GreenTeaHistory />
                                        </div>
                                    </SectionCard>
                                ) : null}

                                {varietiesKind === 'yellow' ? (
                                    <SectionCard title="黃茶歷史" icon={Globe}>
                                        <div id="yellow-tea-history" className="scroll-mt-28">
                                            <YellowTeaHistory />
                                        </div>
                                    </SectionCard>
                                ) : null}

                                {varietiesKind === 'white' ? (
                                    <>
                                        {!whiteRegionHref || whiteRegionHref === '#white-history' ? (
                                            <SectionCard id="white-history" title="白茶歷史" icon={Globe}>
                                                <div id="white-tea-history" className="scroll-mt-28">
                                                    <WhiteTeaHistory />
                                                </div>
                                            </SectionCard>
                                        ) : null}

                                        {whiteRegionHref ? (
                                            <WhiteTeaRegions topOffsetPx={chenChuanScrollOffsetPx} activeHref={whiteRegionHref} />
                                        ) : null}
                                    </>
                                ) : null}

                                {varietiesKind === 'black' ? (
                                    <SectionCard title="黑茶歷史" icon={Globe}>
                                        <div id="black-tea-history" className="scroll-mt-28">
                                            <BlackTeaHistory />
                                        </div>
                                    </SectionCard>
                                ) : null}

                                {varietiesKind === 'red' ? (
                                    <>
                                        {redTeaHref === '#red-global' ? (
                                            <SectionCard id="red-global" title="紅茶全球史" icon={Globe}>
                                                <div id="red-tea-global-story" className="scroll-mt-28">
                                                    <RedTeaGlobalStory />
                                                </div>
                                            </SectionCard>
                                        ) : null}
                                        {redTeaHref === '#red-lapsang' ? (
                                            <SectionCard id="red-lapsang" title="正山小種" icon={Leaf}>
                                                <div className="space-y-10 text-stone-700 leading-relaxed">
                                                    <div className="relative rounded-2xl border border-stone-200 bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 p-8 md:p-10 text-stone-800 overflow-hidden">
                                                        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-orange-200/35 blur-3xl -mr-24 -mt-24" />
                                                        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl -ml-28 -mb-24" />
                                                        <div className="relative z-10 max-w-4xl">
                                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-white text-sm font-bold">
                                                                <Leaf size={16} className="opacity-90" />
                                                                紅茶始祖 · 正山小種
                                                            </div>
                                                            <h4 className="mt-4 text-2xl md:text-3xl font-semibold text-stone-900">正山小種的歷史</h4>
                                                            <p className="mt-4 text-stone-700 leading-relaxed">
                                                                作為世界紅茶的始祖，正山小種誕生至今迄今已有400多年的歷史。據史料記載，桐木在宋代稱崇安縣仁義鄉，這裡的勞動者主要經濟來源靠桐油及製作綠茶類的“龍團鳳餅”貢茶為生。由於桐油生產的繁榮，當地大量地種植油桐樹，受桐油發展的影響，這一地區地名曰桐木，這裡又是出入中原的關口，故曰桐木關，正山堂江氏家族世代生活於此。
                                                            </p>
                                                            <div className="mt-5 flex flex-wrap gap-2 text-sm">
                                                                <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-stone-700">
                                                                    <Map size={14} className="opacity-70" />
                                                                    桐木關
                                                                </span>
                                                                <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-stone-700">
                                                                    <Wind size={14} className="opacity-70" />
                                                                    松煙香
                                                                </span>
                                                                <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-stone-700">
                                                                    <History size={14} className="opacity-70" />
                                                                    400多年歷史
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <section className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
                                                        <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                                                            <History className="text-orange-700" size={20} />
                                                            <h5 className="text-lg md:text-xl font-bold text-stone-900">正山小種紅茶的由來</h5>
                                                        </div>
                                                        <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
                                                            <p>
                                                                明朝中後期，時局動盪，約西元1568年的某天，正當採茶的季節，一隊官兵途經桐木，正山堂先祖江公為躲避襲擾，當天採摘的茶青沒有來得及製作茶葉，晚上官兵睡在了茶青上，官兵走後，原本做綠茶的茶葉已質變發紅，江公將發酵的茶葉反復揉搓，並用桐木盛產的馬尾松焙制。馬尾松在燃燒過程中，產生濃郁的松煙，茶葉吸收松煙後，色澤變得烏黑油潤，散發出獨特的松脂香味，第二年竟有人以綠茶的數倍價格訂購此茶，正山小種紅茶就這樣妙筆生花般地誕生了。
                                                            </p>
                                                            <p>
                                                                16世紀末17世紀初（約1604年），正山小種被遠傳海外，由荷蘭商人帶入歐洲，最先它是以治病功能在藥店出售，而此時世界其他紅茶均未誕生。正山小種進入英國，是在倫敦家叫加威的咖啡館，向市民出售，價格高達6~10英鎊， 其在銷售海報中雲：質地溫和， 四季皆宜，飲品衛生、健康，有延年益壽之功效。但隨後紅茶風靡英國皇室乃至整個歐洲，並掀起流傳至今的“下午茶”風尚。
                                                            </p>
                                                            <p>
                                                                威廉·烏克斯《茶葉全書》中記載: 1607年， 荷蘭東印度公司首次從中國嶺南的澳門採購武夷紅茶（即正山小種），經爪哇轉口銷售歐洲。當時歐洲茶葉市場主要是日本綠茶，正山小種味香醇厚，很快佔領了歐洲茶葉市場，紅茶迅速風靡英倫三島。這是對中國茶葉出口的最早記錄。
                                                            </p>
                                                            <p>
                                                                1662年葡萄牙公主凱薩琳嫁給英皇查理二世時帶去幾箱中國“正山小種”紅茶作為嫁妝。隨後，安妮女王提倡以茶代酒，正山小種紅茶作為當時的珍品，被引入上流社會，逐漸演化成“下午茶”。
                                                            </p>
                                                            <p>
                                                                《崇安縣新志》記載：“英吉利人雲，武夷茶色紅為瑪珊，質之佳過錫蘭、印度甚遠，凡以武夷茶待客者，客必起立致敬。”足見正山小種紅茶在當時上流社會備受青睞的程度。英國人親切地把茶葉稱為“香草”，上至貴族， 下至平民，都十分鍾愛紅茶。自此正山小種紅茶在歐洲歷史上成為中國紅茶的象徵，成為世界統飲名茶。
                                                            </p>
                                                            <p>
                                                                1876年，祁門紅茶在正山小種紅茶的基礎上試製成功，隨後，中國各地的工夫紅茶也以沿襲正山小種工藝的方式，慢慢發展出了滇紅、閩南紅茶等各地工夫紅茶。
                                                            </p>
                                                        </div>
                                                    </section>

                                                    <section className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
                                                        <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                                                            <Tag className="text-orange-700" size={20} />
                                                            <h5 className="text-lg md:text-xl font-bold text-stone-900">為什麼叫正山小種紅茶</h5>
                                                        </div>
                                                        <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
                                                            <p>
                                                                “正山小種”紅茶一詞在歐洲最早稱BOHEA，傳說中它是武夷地名的閩南語發音，在歐洲（英國）它是中國茶的象徵，後因貿易繁榮，當地人為區別其它假冒的小種紅茶（人工小種或煙小種）擾亂市場，故取名為“正山小種”。
                                                            </p>
                                                            <p>
                                                                所謂“正山”，乃真正高山地區所產之意。其涵蓋範圍以武夷山桐木村的廟灣、江墩自然村為中心，北至江西鉛山石隴，南到武夷山曹墩百葉坪，東至武夷山大安村，西至光澤司前幹坑，西南至邵武龍湖觀音坑，方圓565平方公里。現大部分在福建武夷山國家級自然保護區。土壤肥沃，所產茶葉品質無它可比。
                                                            </p>
                                                            <p>
                                                                “小種”指的是茶樹的品種。陸廷燦《續茶經》載《隨見錄》中提到：“武夷茶，在山上者為岩茶，水邊者為洲茶，......其最佳者，名曰工夫茶。工夫之上，又有小種，則以樹名為名。每株不過數兩，不可多得。”
                                                            </p>
                                                        </div>
                                                    </section>

                                                    <section className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
                                                        <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                                                            <Flame className="text-orange-700" size={20} />
                                                            <h5 className="text-lg md:text-xl font-bold text-stone-900">正山小種的製作</h5>
                                                        </div>
                                                        <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
                                                            <p>
                                                                在武夷山的桐木關，有兩棟名為“青樓”的木樓，它是專門用來製作正山小種紅茶的工廠。
                                                            </p>
                                                            <p>
                                                                從前的正山小種製作，需采一芽三四葉為原料，且雨天時不采，露水葉不采，烈日不采，前一天有雨也不采。桐木山中茶樹野生混雜，即使是最熟練的採茶工，一天也只能采回10公斤茶青。
                                                            </p>
                                                            <p>
                                                                採摘下來的鮮葉，疏落有致的攤曬於木板或竹篾上，利用天氣、氣溫、濕度、風力，散發葉片當中的水分，使茶青變軟，能夠揉撚成條。利用馬尾松木燃燒控制萎凋時的溫度，每隔30分鐘，再次將茶青歸攏，重新攤曬，使每一道茶青能夠均勻鋪陳。
                                                            </p>
                                                            <p>
                                                                當100斤鮮葉祛除40斤水分時，就是最佳的揉撚時機。揉撚不僅是塑造茶葉優美的外形，更是為了破壞細胞，加速氧化。
                                                            </p>
                                                            <p>
                                                                發酵，是形成紅茶色、香、味品質特徵的最關鍵工序，在竹編的茶簍中，蓋上濕布，等待七個小時，茶葉就會由青綠色變為古銅色，香氣也變得更加悠然。
                                                            </p>
                                                            <p>
                                                                過紅鍋是正山小種獨有的一道工序，以180度高溫阻止茶葉繼續發酵，也給茶葉提香，增加回甘。
                                                            </p>
                                                            <p>
                                                                緊接著，將茶青鋪在竹篾上，馬尾松緩緩燃燒在地底的火灶中，松煙隨著磚縫傳到乾燥間，茶葉在竹篾中，被老松木燃燒所釋放的松香包裹環繞。溫度蒸發了茶青中的多餘水分，也為正山小種注入最後的煙熏香。這種用馬尾松煙薰制作的正山小種紅茶，有著濃重的松木熏香，以及難忘的桂圓甜香。
                                                            </p>
                                                            <p>
                                                                十餘小時後，桐木關出產的傳統正山小種紅茶便得以製成。沸水之下，松煙香混雜桂圓和若有似乎的果香縈繞鼻尖。緩慢薰制的松香經久不散，沖泡多次仍然韻味十足。
                                                            </p>
                                                            {/* 青樓建築詳細說明 */}
                                                            <div className="mt-8 space-y-6">
                                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                                    <ClickableImage
                                                                        src="/images/varieties/lapsang_souchong_landscape.png"
                                                                        alt="桐木關風景"
                                                                        caption="武夷山桐木關，正山小種的發源地，群山環抱，雲霧繚繞"
                                                                    />
                                                                    <ClickableImage
                                                                        src="/images/varieties/qinglou_cutaway.png"
                                                                        alt="青樓建築剖面圖"
                                                                        caption="青樓建築剖面圖：上層萎凋房、下層烘焙房、地下灶爐系統"
                                                                    />
                                                                </div>

                                                                <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8">
                                                                    <h6 className="text-[20px] font-bold text-stone-900 mb-4 font-sans flex items-center gap-2">
                                                                        <Map className="text-amber-700" size={22} />
                                                                        青樓：正山小種的製茶聖殿
                                                                    </h6>
                                                                    <div className="space-y-4 text-[17px] text-stone-700 leading-relaxed font-sans">
                                                                        <p>
                                                                            「青樓」是一座什麼建築物長什麼樣子呢？它分兩層，中間只用樓板隔開，上層是萎凋房以及萎凋房外的走廊。底層是烘焙房，底層樓外的後面設置了一座燒松柴的灶爐，將濕松柴於地面排列成「T」字形或「一」字形，點燃後使其慢慢燃燒，火溫和煙霧可從坑道引進烘焙房，坑道上蓋著可活動的磚頭，用人手移動來控制烘焙房的室內溫度，烘焙房頂上的樓板懸置著焙架。
                                                                        </p>
                                                                        <p className="font-semibold text-stone-900">
                                                                            製作正山小種茶葉的「青樓」，是灶爐（提供火溫與煙香）、烘焙房（茶葉乾燥作用）、萎凋房（茶葉走水作用）以及鮮葉攤放處（茶葉蒸發水分作用）的一個完整結構的建築物，穿串期間的是松煙香的熱量。
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <ClickableImage
                                                                    src="/images/varieties/qinglou_structure.png"
                                                                    alt="青樓建築結構圖"
                                                                    caption="青樓建築結構圖：展示萎凋房、烘焙房、地下爐灶及煙道系統的完整配置"
                                                                    className="w-full"
                                                                />
                                                            </div>

                                                            {/* 傳統製茶流程 */}
                                                            <div className="mt-8 space-y-6">
                                                                <h6 className="text-[20px] font-bold text-stone-900 mb-4 font-sans flex items-center gap-2">
                                                                    <Scroll className="text-orange-700" size={22} />
                                                                    傳統製茶流程
                                                                </h6>

                                                                <ClickableImage
                                                                    src="/images/varieties/tea_processing_steps.png"
                                                                    alt="正山小種製茶流程"
                                                                    caption="正山小種傳統製茶五步驟：鮮葉攤放、室內萎凋、揉捻、發酵、松煙慢烘"
                                                                    className="w-full mb-6"
                                                                />

                                                                {/* 步驟 1: 鮮葉攤放 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">1</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">鮮葉攤放</h6>
                                                                    </div>
                                                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans ml-11">
                                                                        正山小種要選用鮮嫩的一芽二、三葉原料，鮮葉採摘回來時大多是雨水葉、露水葉，要攤放在萎凋房外的走廊樓板上（即不加溫的情況），使鮮葉表面上水分蒸發。
                                                                    </p>
                                                                </div>

                                                                {/* 步驟 2: 室內萎凋 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">2</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">室內萎凋（加溫）</h6>
                                                                    </div>
                                                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans ml-11">
                                                                        水分散發了的鮮葉，可移進萎凋房，均勻抖散在樓板的竹蓆上。這時的鮮葉是採用加溫萎凋的方法進行萎凋，利用下層焙架上放置之濕坯（即發酵過的葉）上升的熱氣使鮮葉受熱軟化。鮮葉失去光澤，葉質柔軟、梗折不斷、葉脈明顯、略有清香時萎凋告一段落。
                                                                    </p>
                                                                </div>

                                                                {/* 步驟 3: 揉捻 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">揉捻</h6>
                                                                    </div>
                                                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans ml-11">
                                                                        將萎凋好後的鮮葉拿去揉捻，一般壓力遵循輕、重、輕原則，其間解散團塊一次。揉至茶條緊捲，茶汁擠出，手捏成團，不易鬆散時即算可。
                                                                    </p>
                                                                </div>

                                                                {/* 步驟 4: 發酵 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">4</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">發酵</h6>
                                                                    </div>
                                                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans ml-11">
                                                                        將揉捻葉裝入發酵專用竹筐，在發酵堆挖一小洞以利通氣，在竹筐上加蓋濕布，促進發酵，其間翻動一次，青草味消失而有茶的甜香顯露則成。
                                                                    </p>
                                                                </div>

                                                                {/* 步驟 5: 烘焙 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">5</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">烘焙</h6>
                                                                    </div>
                                                                    <div className="space-y-4 ml-11">
                                                                        <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                                                            將發酵葉（即濕坯）抖散均勻薄攤於竹製水篩上，然後置水篩於青樓吊架上，每片水篩呈半重疊，呈魚鱗似排列，進行烘乾程序，這時灶燒松柴的火溫不宜過高，必要時用磚頭堵住坑道使烘焙房溫度降低。
                                                                        </p>
                                                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                                            <ClickableImage
                                                                                src="/images/varieties/pine_smoke_process.png"
                                                                                alt="松煙烘焙過程"
                                                                                caption="傳統松煙烘焙：馬尾松緩緩燃燒，煙香透過磚縫傳遞"
                                                                            />
                                                                            <ClickableImage
                                                                                src="/images/varieties/pine_smoke_detail.png"
                                                                                alt="松煙烘焙細節"
                                                                                caption="水篩魚鱗排列，茶葉在松煙中慢烘，吸收獨特香氣"
                                                                            />
                                                                        </div>
                                                                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                                                                            <p className="text-[17px] text-stone-800 leading-relaxed font-sans font-semibold">
                                                                                正山小種茶葉烘乾時必須進行低溫慢烘，利用熱力使之乾燥，而並非將茶葉放在松柴煙火上直接薰的，故此優質正山小種的香味是從茶的身骨頭內裡發出，而不是依附在茶葉表面而已，品嚐正山小種就要品到這種香與味能夠糾纏在一起的纏綿。
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </section>

                                                    <section className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
                                                        <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                                                            <Scale className="text-orange-700" size={20} />
                                                            <h5 className="text-lg md:text-xl font-bold text-stone-900">正山小種與外山小種有什麼區別</h5>
                                                        </div>
                                                        <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
                                                            <p>
                                                                正山小種紅茶的國家標準GB/T13738中指出：正山小種必須採用以武夷山國家級自然保護區內桐木村的廟灣、江墩自然村為中心，方圓565平方公里內茶樹原料，以小種紅茶傳統工藝製作，具有松煙香和桂圓幹香味。
                                                            </p>
                                                            <p>正山小種與外山小種的區別就在於：</p>
                                                            <div className="space-y-2 rounded-2xl border border-stone-200 bg-stone-50 p-5">
                                                                <p>‧ 地域範圍界定：正山小種紅茶原產地就在武夷山桐木關。據《中國茶經》記載“桐木之內，方為正山”，凡是桐木關所產的茶，均稱作正山。而武夷山附近或者其他地區所產的茶稱外山，以區別桐木關以外所產的小種紅茶。</p>
                                                                <p>‧ 製作工藝要求：正山小種為紅茶的始祖，也是紅茶中最為經典與傳統的茶種，真正的正山小種紅茶需要以武夷山地區高山茶樹茶葉為原料，以傳統技藝並經過馬尾松的天然煙焙工藝制得。</p>
                                                                <p>‧ 品質上的差異：正山小種乃是高山茶，具備特殊的高山韻，滋味醇厚，且耐沖泡耐存放，外山小種大多是低山茶葉，底蘊薄，且不耐沖泡。</p>
                                                            </div>
                                                            <div className="rounded-2xl border border-stone-200 bg-white p-5">
                                                                目前市場上的正山小種由於原料稀缺或工藝不完善，絕大多數並不產於武夷山本地，且是使用工夫紅茶工藝製作，不具有松煙香。屬於無生產日期、無品質合格證、無生產標準以及無生產廠家，來路不明的產品。有的甚至在表面加糖以增加甜味。
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </SectionCard>
                                        ) : null}
                                        {redTeaHref === '#red-jinjunmei' ? (
                                            <SectionCard id="red-jinjunmei" title="金駿眉" icon={Leaf}>
                                                <div className="space-y-8 text-stone-700 leading-relaxed">
                                                    <div className="space-y-6">
                                                        <h4 className="text-[24px] font-bold text-stone-900 font-sans">金駿眉的誕生：首泡製茶人的歷史溯源</h4>

                                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                            <ClickableImage
                                                                src="/images/varieties/jinjunmei_innovation.png"
                                                                alt="金駿眉創新製茶"
                                                                caption="梁駿德師傅創新製茶：小太陽燈萎凋、玻璃板揉捻，開創金駿眉傳奇"
                                                            />
                                                            <ClickableImage
                                                                src="/images/varieties/tea_journey_europe.png"
                                                                alt="茶葉遠航歐洲"
                                                                caption="17世紀茶葉貿易：中國茶葉遠航歐洲，開啟紅茶文化交流"
                                                            />
                                                        </div>
                                                    </div>

                                                    <section className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6 shadow-sm">
                                                        <h5 className="text-[20px] font-bold text-stone-900 font-sans">1. 緣起：一款出口名茶的國內市場叩問</h5>
                                                        <div className="mt-4 space-y-3">
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                作為歷史悠久、享譽海外的紅茶，正山小種長期以來幾乎完全面向出口市場，在國外聲名顯赫，但在國內卻鮮為人知。這種「牆內開花牆外香」的市場格局，既是其發展的獨特背景，也成為了催生一款全新高端紅茶——金駿眉的根本前提。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                此一轉變的開端，源於幾位北京友人的到訪。根據首泡製作人梁駿德師傅回憶，當時來自北京的張姓、閻姓及孫姓友人來到武夷山桐木村，在親身體驗了當地優異的生態環境與正山小種的卓越品質後，他們敏銳地提出了一個核心問題：「品質這麼好，為什麼不走國內市場？」這個看似簡單的提問，實則點燃了正山小種革新的火種，挑戰了其百年來的經營慣性。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                正是這個直指核心的市場探討，催化了後續的創新思維，為一場充滿未知的製茶實驗埋下了伏筆。
                                                            </p>
                                                        </div>
                                                    </section>

                                                    <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm">
                                                        <h5 className="text-[20px] font-bold text-stone-900 font-sans">2. 契機：一次源於夏茶的試驗性挑戰</h5>
                                                        <div className="mt-4 space-y-3">
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                從一個想法到付諸行動，往往需要一個恰當的契機。雖然早在2003年，梁師傅便有過採摘茶芽製作頂級紅茶的初步構想，但因單芽採摘難度大、成本過高而被迫擱置。真正觸發行動的，是2005年一個看似無關的觀察，其高明之處在於，它以一種低風險的方式，巧妙地化解了兩年前成本過高的核心難題。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                2005年，北京友人重訪桐木，看到山上長勢極佳的夏茶時，再次提出了建議：「老梁，夏茶長得那麼漂亮，能不能去採點夏茶來做試驗？」並具體提議「採單芽」。這個想法極具顛覆性，挑戰了當地世代相傳的製茶教條——「桐木歷史以來是從不採夏茶的」。梁師傅從中看到了跨界思維的可能性，他分析道：「採芽能做白茶，採芽能做綠茶，我們採點芽來做紅茶。」這意味著將其他茶類的頂級原料標準，引入紅茶的製作中，是一次前所未有的挑戰。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                梁師傅最終決定接受這場挑戰，其背後是身為製茶大師極為務實的風險評估。他認為，以夏茶為原料進行試驗，是絕佳的選擇：「如果萬一不成功，損失不大。」這種將風險降至最低的精準判斷，為這次大膽的實驗掃清了障礙，使其得以在2005年6月7日付諸實行。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                然而，隨著不足兩斤的珍貴茶芽採摘完成，一個更為嚴峻的挑戰擺在眼前：在沒有任何適用工具的條件下，團隊必須即時開創一套全新的製茶工藝。
                                                            </p>
                                                        </div>
                                                    </section>

                                                    <section className="rounded-2xl border border-sky-200 bg-sky-50/70 p-6 shadow-sm">
                                                        <h5 className="text-[20px] font-bold text-stone-900 font-sans">3. 首泡工藝：四大製程的挑戰與即時創新</h5>
                                                        <div className="mt-4 space-y-3">
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                首泡金駿眉的製作過程，是一場在既有條件下不斷應變與創新的經典示範。由於原料僅有不足兩斤的單芽，其嬌嫩程度與稀少數量，使得傳統的正山小種製茶設備與方法完全不適用。這迫使梁師傅必須在萎凋、揉捻、發酵、烘乾四大核心環節中，進行一系列即興的技術革新。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                北京友人見到鮮葉後興奮不已，催促道：「老梁，好香啊，這個晚上把它做起來。」梁師傅則幽默地回應：「晚上我要睡覺。」
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                這段對話，生動地反映了當時眾人對這場實驗的極度期待。
                                                            </p>
                                                        </div>

                                                        <div className="mt-5 grid gap-4 lg:grid-cols-2">
                                                            <div className="space-y-2 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                                                <div className="text-[19px] font-semibold text-sky-700 font-sans">第一項創新：無煙萎凋</div>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 挑戰情境： 在沒有現代萎凋槽的條件下，如何處理這批珍貴的鮮葉成為首要難題。傳統的「青樓」會帶來煙味，而炭火則因溫度不均、空氣不流通而被梁師傅斷然否定。</p>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 解決方案： 梁師傅急中生智，想到了當時用於夜間取暖的「小太陽」燈。他將鮮葉置於篩上，透過調整燈的高度來精準控制溫度。此舉不僅是個簡單的應變，更是一項奠定品質基礎的哲學性突破。它成功實現了可控且完全無煙的萎凋，首次確立並保護了金駿眉獨特的、純淨的花果蜜香基因，使其徹底擺脫了傳統正山小種的松煙氣息。</p>
                                                            </div>

                                                            <div className="space-y-2 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                                                <div className="text-[19px] font-semibold text-sky-700 font-sans">第二項創新：玻璃板揉捻</div>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 挑戰情境： 萎凋完成後，茶芽極其細嫩，傳統的竹製或木製揉捻工具過於粗糙，極易破壞其完整性。</p>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 解決方案： 梁師傅注意到辦公桌上的玻璃板，這看似簡單的選擇，實則是對材料科學的直覺性應用。玻璃表面光滑、無孔、摩擦力低，既能有效幫助茶芽塑形，又絲毫不會磨損其嬌嫩的葉面，完美保全了芽頭的品相與內部細胞結構。</p>
                                                            </div>

                                                            <div className="space-y-2 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                                                <div className="text-[19px] font-semibold text-sky-700 font-sans">第三項創新：濕熱毛巾發酵</div>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 挑戰情境： 紅茶發酵需依靠茶葉自身堆積產生的溫度，但由於茶葉量太少，完全無法達到發酵所需的溫濕度條件。</p>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 解決方案： 梁師傅再次展現了非凡的智慧。他將茶葉放入審評盤中，用熱水燙過的濕毛巾包裹覆蓋。此法巧妙地模擬出一個微型發酵環境，藉由外部的濕熱條件，為茶葉創造了發酵所需的溫度與濕度，確保了發酵環節的順利完成。</p>
                                                            </div>

                                                            <div className="space-y-2 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                                                <div className="text-[19px] font-semibold text-sky-700 font-sans">第四項創新：火盆烘乾</div>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 挑戰情境： 最後的烘乾環節，同樣需要避免任何煙味，以保持茶葉最終的純淨香氣。</p>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 解決方案： 梁師傅利用了農村常見的烤火火盆，在上方放置平圓篩進行烘乾。此方法不僅巧妙地達成了均勻受熱，更徹底杜絕了煙燻的可能，為這泡茶的純淨香氣畫上了完美的句點。</p>
                                                            </div>
                                                        </div>

                                                        <div className="mt-5 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                                            這四個環節的即時創新，不僅逐一攻克了眼前的技術難題，更共同塑造了一套全新的製茶哲學，為金駿眉獨一無二的品質基因奠定了堅實的工藝基礎。
                                                        </div>
                                                    </section>

                                                    <section className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6 shadow-sm">
                                                        <h5 className="text-[20px] font-bold text-stone-900 font-sans">4. 命名與分級：從「駿眉」到金、銀、銅的體系確立</h5>
                                                        <div className="mt-5 grid gap-4 lg:grid-cols-3">
                                                            <div className="space-y-2 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm">
                                                                <div className="text-[19px] font-semibold text-rose-700 font-sans">解析初次命名「駿眉」</div>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 品鑑場景： 第二天清晨，當北京友人看到烘乾後的茶葉時，無不為之驚嘆。友人聞香後，不禁讚嘆其香氣層次豐富：「老梁啊，有花香、有果香，還有蜜香。」</p>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 命名邏輯： 這次的成功，實現了團隊長久以來的夙願。正如友人所言：「我們通過一兩年的考慮終於做出一泡高端的紅茶。」在命名時，友人提議，茶葉外形細長如眉毛，故可取一個「眉」字。同時，為了紀念這泡茶的誕生，並向首泡製作者梁駿德師傅致敬，決定取其名中「駿」字。於是，「駿眉」這個名字便應運而生。</p>
                                                            </div>
                                                            <div className="space-y-2 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm">
                                                                <div className="text-[19px] font-semibold text-rose-700 font-sans">闡述「金駿眉」的誕生與分級</div>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 產品線擴展： 在成功製作單芽後，團隊緊接著嘗試採摘一芽一葉進行製作，發現其口感同樣非常出色。這次的成功，促使他們意識到建立一套標準化分級體系的必要性。</p>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 建立分級標準： 基於這次的成功經驗，一套依據採摘標準劃分的清晰分級體系得以確立，並以金、銀、銅來命名：</p>
                                                                <div className="mt-3 space-y-2">
                                                                    <div className="flex flex-wrap items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-stone-700">
                                                                        <span className="rounded-full border border-amber-300 bg-white px-2 py-0.5 text-xs font-semibold text-amber-700">金</span>
                                                                        <span>專指以單芽製作的最高等級，即「金駿眉」。</span>
                                                                    </div>
                                                                    <div className="flex flex-wrap items-start gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700">
                                                                        <span className="rounded-full border border-stone-300 bg-white px-2 py-0.5 text-xs font-semibold text-stone-700">銀</span>
                                                                        <span>指以一芽一葉製作的等級，即「銀駿眉」。</span>
                                                                    </div>
                                                                    <div className="flex flex-wrap items-start gap-2 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-stone-700">
                                                                        <span className="rounded-full border border-orange-300 bg-white px-2 py-0.5 text-xs font-semibold text-orange-700">銅</span>
                                                                        <span>指以一芽兩葉製作的等級，即「銅駿眉」。</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm">
                                                                <div className="text-[19px] font-semibold text-rose-700 font-sans">辨析「駿」字之謎</div>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 提出疑問： 隨著金駿眉聲名鵲起，外界對於為何使用代表馬的「駿」字，而非代表桐木崇山峻嶺的「峻」字，產生了諸多猜測與討論。</p>
                                                                <p className="text-[17px] leading-relaxed font-sans">‧ 揭示真相： 根據梁師傅的澄清，後續為回應外界的疑問，命名者提出了「因為茶的外形像馬」的官方解釋。他強調，這才是「最真實的一個來歷」，為這場長久以來的字義之爭提供了最終的註解。</p>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm">
                                                            隨著工藝的成熟與命名的確立，金駿眉不僅擁有了一個響亮的名字，更建立了一套完善的產品標準，為其正式進入市場並引領行業風潮做好了萬全的準備。
                                                        </div>
                                                    </section>

                                                    <section className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6 shadow-sm">
                                                        <h5 className="text-[20px] font-bold text-stone-900 font-sans">5. 歷史定位：引領正山小種開拓國內市場的里程碑</h5>
                                                        <div className="mt-4 space-y-3">
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                金駿眉的誕生，其意義遠不止於一款高端紅茶的問世。它是一個重要的歷史轉折點，從根本上改變了正山小種的市場格局，並深刻影響了整個中國紅茶產業的發展。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                首先，金駿眉的成功，直接終結了正山小種數百年來幾乎完全依賴出口的歷史。它以超凡的品質與獨特的魅力，迅速立足於國內高端茶葉市場，實現了從外銷到內銷的華麗轉身。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                更為重要的是，金駿眉獲得了行業的廣泛認可與推崇。正如梁師傅所總結，金駿眉之所以能有今日的地位，「正因為全國茶葉產區，大家都在捧這泡茶」。這種跨越產區的現象級追捧，迅速鞏固了其作為頂級紅茶的標竿地位，並引領了一波紅茶創新的風潮。
                                                            </p>
                                                            <p className="text-[17px] leading-relaxed font-sans">
                                                                綜上所述，金駿眉的誕生是一個結合了偶然契機、匠心創新與市場遠見的傳奇故事。它不僅為正山小種注入了全新的活力，更為中國紅茶的發展歷史，寫下了濃墨重彩的一筆。
                                                            </p>
                                                        </div>
                                                    </section>
                                                </div>
                                            </SectionCard>
                                        ) : null}
                                    </>
                                ) : null}

                                {!kindTea && varietiesKind !== 'oolong' && varietiesKind !== 'red' ? (
                                    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 text-stone-700">
                                        找不到對應茶類資料，請重新選擇上方子分類。
                                    </div>
                                ) : null}
                            </>
                        ) : null}
                    </div>
                </AtlasDockLayout>
            </div>
        </div>
    );
};

export default VarietiesSection;
