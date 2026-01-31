import React, { useState, useEffect, useRef } from 'react';
import { Leaf, ChevronRight, ChevronDown } from 'lucide-react';
import { UI_FLAGS } from '../../config/uiFlags';
import featuredTeaMenu from '../../data/featuredTeaMenu';
import AtlasDockLayout from '../AtlasDockLayout';
import FeaturedTeaOverview from '../../content/featured/FeaturedTeaOverview';
import LongjingTeaArticle from '../../content/examples/LongjingTeaArticle';
import BiluochunGreenTeaContent from '../../content/featured/biluochun';
import TieGuanyinContent from '../../content/featured/tieguanyin';
import DongDingContent from '../../content/featured/dongding';
import GaoshanOolongContent from '../../content/featured/gaoshanoolong';
import RedOolongContent from '../../content/featured/redoolong';
import HoneyAromaBlackTeaContent from '../../content/featured/honeyblack';
import OrientalBeautyContent from '../../content/featured/orientalbeauty';
import WenshanPouchongContent from '../../content/featured/wenshan';
import BlackTeaVarietiesContent from '../../content/featured/BlackTeaVarieties';
import OolongNameStory from '../../content/teaTalk/OolongNameStory';

export default function FeaturedTeaSection({
    selectedFeatured,
    setSelectedFeatured,
    siteNavHeightPx
}) {
    const notesMode = UI_FLAGS.notesMode;
    const [showFeaturedAtlas, setShowFeaturedAtlas] = useState(!notesMode);
    const [orientalBeautySection, setOrientalBeautySection] = useState('main');

    const [featuredSidebarWidth, setFeaturedSidebarWidth] = useState(() => {
        if (typeof window === 'undefined') return 260;
        const raw = window.localStorage?.getItem('tea.featuredSidebarWidth');
        const parsed = raw ? Number(raw) : NaN;
        if (!Number.isFinite(parsed)) return 260;
        return Math.min(Math.max(parsed, 220), 420);
    });

    const featuredTopRef = useRef(null);
    const featuredSidebarOffsetPx = siteNavHeightPx + 48;

    const scrollToFeaturedTop = () => {
        if (typeof window === 'undefined' || !featuredTopRef.current) return;
        const rect = featuredTopRef.current.getBoundingClientRect();

        // Only scroll if the content top is significantly out of view
        // to prevent jarring jumps when clicking sidebar items
        if (rect.top < siteNavHeightPx || rect.top > window.innerHeight) {
            featuredTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const getReadableTextClass = (hexColor) => {
        if (typeof hexColor !== 'string' || !hexColor.startsWith('#')) return 'text-white';
        const hex = hexColor.replace('#', '').trim();
        const normalized = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
        if (normalized.length !== 6) return 'text-white';
        const r = parseInt(normalized.slice(0, 2), 16);
        const g = parseInt(normalized.slice(2, 4), 16);
        const b = parseInt(normalized.slice(4, 6), 16);
        if (![r, g, b].every((n) => Number.isFinite(n))) return 'text-white';
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        return luminance > 0.72 ? 'text-[color:rgba(15,23,42,0.95)]' : 'text-white';
    };

    // Sync state with URL
    useEffect(() => {
        const applyFromUrl = () => {
            const params = new URLSearchParams(window.location.search);
            const tea = params.get('tea');
            if (tea && featuredTeaMenu.some((item) => item.id === tea)) {
                setSelectedFeatured(tea);
            }
        };

        applyFromUrl();
        window.addEventListener('popstate', applyFromUrl);
        return () => window.removeEventListener('popstate', applyFromUrl);
    }, [setSelectedFeatured]);

    // Sync URL with state
    useEffect(() => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        if (params.get('tea') !== selectedFeatured) {
            params.set('tea', selectedFeatured);
            window.history.replaceState(null, '', `${url.pathname}?${params.toString()}${url.hash}`);
        }
    }, [selectedFeatured]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            window.localStorage?.setItem('tea.featuredSidebarWidth', String(featuredSidebarWidth));
        } catch {
            // ignore
        }
    }, [featuredSidebarWidth]);

    const handleFeaturedResize = (newWidth) => {
        const clamped = Math.min(Math.max(newWidth, 220), 420);
        setFeaturedSidebarWidth(clamped);
    };


    return (
        <div className="museum-page min-h-screen">
            <div className="museum-stage">
                {notesMode && (
                    <div className="mb-10 museum-panel p-7 md:p-10">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div className="min-w-0">
                                <div className="museum-label">
                                    <Leaf size={14} className="opacity-80" />
                                    TEA HOUSE · NOTES
                                </div>
                                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">台灣特色茶｜筆記卡</h2>
                                <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                                    先用筆記卡建立台灣特色茶的「風味與代表性」直覺；需要查細節時再展開百科（每一款茶都有完整內容與章節）。
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                                <button
                                    type="button"
                                    onClick={() => setShowFeaturedAtlas(true)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                                >
                                    展開百科
                                    <ChevronRight size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowFeaturedAtlas(true);
                                        setSelectedFeatured('tieguanyin');
                                        featuredTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                                >
                                    直接看鐵觀音
                                    <ChevronRight size={16} className="text-emerald-700" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">FOCUS</div>
                                <div className="mt-1 font-bold text-stone-900">代表性風味</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">每款茶用一句話抓住「香氣／口感／茶性」。</div>
                            </div>
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
                                <div className="mt-1 font-bold text-stone-900">適合教學引用</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">章節化內容方便老師挑選段落做講義。</div>
                            </div>
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">FLOW</div>
                                <div className="mt-1 font-bold text-stone-900">回到沖泡</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">特色茶最後都回到「怎麼泡更好喝」。</div>
                            </div>
                        </div>
                    </div>
                )}

                {!notesMode || showFeaturedAtlas ? (
                    <AtlasDockLayout
                        topOffsetPx={siteNavHeightPx + 32}
                        sidebar={
                            <div className="w-full">
                                <div
                                    className="rounded-2xl backdrop-blur shadow-sm p-3 pb-4 tool-surface tool-surface--strong overflow-y-auto"
                                    style={{
                                        maxHeight: `calc(100vh - ${siteNavHeightPx + 32 + 16}px - 24px)`,
                                        scrollPaddingBottom: '24px',
                                        scrollbarGutter: 'stable',
                                    }}
                                >
                                    <h3 className="text-lg font-extrabold text-stone-900 mb-3 px-2 border-l-4 border-amber-600">
                                        台灣特色茶
                                    </h3>
                                    <div className="space-y-2 pb-2">
                                        {featuredTeaMenu.map((item) => {
                                            const isActive = selectedFeatured === item.id;
                                            const activeTextClass = getReadableTextClass(item.swatch);
                                            return (
                                                <React.Fragment key={item.id}>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedFeatured(item.id);
                                                            scrollToFeaturedTop();
                                                        }}
                                                        className={`chapter-nav-item group w-full text-left px-3 py-2 rounded-xl transition-all border box-border focus-visible:outline-none focus:scale-[1.02] ${isActive
                                                            ? `${activeTextClass} border-amber-300/50 ring-1 ring-black/5 shadow-md`
                                                            : 'bg-white/40 border-stone-200/60 hover:border-amber-300 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-white hover:shadow-md tool-muted hover:text-stone-900'
                                                            }`}
                                                        style={
                                                            isActive
                                                                ? {
                                                                    backgroundColor: item.swatch,
                                                                    backgroundImage:
                                                                        'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))',
                                                                }
                                                                : undefined
                                                        }
                                                    >
                                                        <div className="flex items-start gap-2">
                                                            <span
                                                                className="mt-1 inline-block w-3 h-3 rounded-sm border border-stone-200 bg-white/60"
                                                                style={{ backgroundColor: item.swatch }}
                                                                aria-hidden="true"
                                                            />
                                                            <div className="min-w-0">
                                                                <span className="block font-bold text-lg leading-snug truncate chapter-label--flip">
                                                                    <span className="chapter-label-inner">
                                                                        <span className="chapter-label-front truncate">{item.label}</span>
                                                                        <span className={`chapter-label-back truncate ${isActive ? activeTextClass : 'text-amber-600'}`}>{item.label}</span>
                                                                    </span>
                                                                </span>
                                                                <span
                                                                    className={`block text-sm mt-1 truncate ${isActive ? 'opacity-90' : 'tool-muted'}`}
                                                                >
                                                                    {item.subtitle}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    {isActive && item.id === 'orientalbeauty' ? (
                                                        <div className="mt-2 ml-4 space-y-1">
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setOrientalBeautySection('main');
                                                                    scrollToFeaturedTop();
                                                                }}
                                                                className={`w-full text-left rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${orientalBeautySection === 'main'
                                                                    ? 'bg-amber-100 text-amber-900'
                                                                    : 'text-stone-600 hover:bg-stone-50'
                                                                    }`}
                                                            >
                                                                東方美人茶
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setOrientalBeautySection('origins');
                                                                    scrollToFeaturedTop();
                                                                }}
                                                                className={`w-full text-left rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${orientalBeautySection === 'origins'
                                                                    ? 'bg-amber-100 text-amber-900'
                                                                    : 'text-stone-600 hover:bg-stone-50'
                                                                    }`}
                                                            >
                                                                東方美人茶的前世
                                                            </button>
                                                        </div>
                                                    ) : null}

                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                    >
                        {/* Content Area */}
                        <div className="min-w-0">
                            <div ref={featuredTopRef} className="scroll-mt-28" />
                            {selectedFeatured === 'overview' && <FeaturedTeaOverview />}
                            {selectedFeatured === 'longjing' && <LongjingTeaArticle />}
                            {selectedFeatured === 'biluochun' && <BiluochunGreenTeaContent />}
                            {selectedFeatured === 'tieguanyin' && <TieGuanyinContent />}
                            {selectedFeatured === 'dongding' && <DongDingContent />}
                            {selectedFeatured === 'gaoshanoolong' && <GaoshanOolongContent />}
                            {selectedFeatured === 'redoolong' && <RedOolongContent />}
                            {selectedFeatured === 'honeyblack' && <HoneyAromaBlackTeaContent />}
                            {selectedFeatured === 'orientalbeauty' && <OrientalBeautyContent activeSection={orientalBeautySection} />}
                            {selectedFeatured === 'wenshan' && <WenshanPouchongContent />}
                            {selectedFeatured === 'black_varieties' && <BlackTeaVarietiesContent />}
                            {selectedFeatured === 'oolong_name_story' && <OolongNameStory />}
                        </div>
                    </AtlasDockLayout>
                ) : notesMode ? (
                    <div className="museum-panel p-7 md:p-10 text-center">
                        <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
                        <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開台灣特色茶百科</div>
                        <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            百科包含：碧螺春綠茶、文山包種茶、高山烏龍茶、凍頂烏龍茶、鐵觀音茶、東方美人茶、紅烏龍茶、蜜香紅茶、小葉種紅茶、大葉種紅茶。
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                            <button
                                type="button"
                                onClick={() => setShowFeaturedAtlas(true)}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                            >
                                展開百科內容
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
