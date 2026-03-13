import React, { useState, useEffect } from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import ImageLightbox from '../../components/ImageLightbox';
import { BookOpen, Coffee, Palette, Layout, Award, Layers, Droplets, Package, Flame, Grid } from 'lucide-react';

const IMG = {
    cover: '/images/academy/chonghua-chapter01/cover_teaware.jpg',
    teaArtSetup: '/images/academy/chonghua-chapter01/tea_art_setup.jpg',
    teapotStand: '/images/academy/chonghua-chapter01/teapot_stand.jpg',
    foreword: '/images/academy/chonghua-chapter01/tea_space_foreword.jpg',
    teapotPorcelain: '/images/academy/chonghua-chapter01/teapot_porcelain.jpg',
    teapotZisha: '/images/academy/chonghua-chapter01/teapot_zisha.jpg',
    teapotGlass: '/images/academy/chonghua-chapter01/teapot_glass.jpg',
    teacupSet: '/images/academy/chonghua-chapter01/teacup_set.jpg',
    fairCup: '/images/academy/chonghua-chapter01/fair_cup.jpg',
    teaTools: '/images/academy/chonghua-chapter01/tea_tools.jpg',
    waterKettle: '/images/academy/chonghua-chapter01/water_kettle.jpg',
    layoutDiagram: '/images/academy/chonghua-chapter01/layout_diagram.jpg',
    waterBowl: '/images/academy/chonghua-chapter01/water_bowl.jpg',
    kettle: '/images/academy/chonghua-chapter01/kettle.jpg',
    teaCaddy: '/images/academy/chonghua-chapter01/tea_caddy.jpg',
};

/* ── 可點擊放大圖片（含 caption） ── */
function ClickImg({ src, alt, caption, openLightbox, wrapperClass = "", imgClass = "w-full h-auto object-cover" }) {
    return (
        <div
            className={`rounded-2xl overflow-hidden shadow-lg group cursor-zoom-in ${wrapperClass}`}
            role="button" tabIndex={0}
            onClick={() => openLightbox(src, alt)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(src, alt); } }}
            aria-label={`放大查看 ${alt}`}
        >
            <img src={src} alt={alt}
                className={`${imgClass} transform group-hover:scale-105 transition-transform duration-600`} />
            {caption && (
                <div className="bg-teal-50 border-t border-teal-100 py-2.5 px-4 text-center">
                    <p className="font-sans text-[15px] text-stone-500">{caption}</p>
                </div>
            )}
        </div>
    );
}

/* ── 圖片預留位置（Placeholder） ── */
function ImagePlaceholder({ text, height = "h-[300px]" }) {
    return (
        <div className={`w-full ${height} bg-stone-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-stone-200/80 shadow-inner overflow-hidden`}>
            <div className="text-stone-300 mb-3 bg-white p-3 rounded-full shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <p className="font-sans text-[16px] font-bold text-stone-500 tracking-wide">{text}</p>
            <p className="font-sans text-[13px] text-stone-400 mt-1">圖片預留位置</p>
        </div>
    );
}

/* ── 器具編號小卡 ── */
function ItemCard({ num, title, children, accent = 'teal' }) {
    const colors = {
        teal: 'bg-teal-500 text-white',
        emerald: 'bg-emerald-500 text-white',
        amber: 'bg-amber-500 text-white',
    };
    return (
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className={`flex items-center gap-3 px-5 pt-5 pb-3`}>
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold font-sans ${colors[accent]}`}>
                    {num}
                </span>
                <h4 className="font-sans text-[20px] font-bold text-stone-900">{title}</h4>
            </div>
            <div className="px-5 pb-5">
                {children}
            </div>
        </div>
    );
}

/* ── 條列項目 ── */
function BulletList({ items, color = 'teal' }) {
    const dot = { teal: 'bg-teal-400', emerald: 'bg-emerald-400', amber: 'bg-amber-400' };
    return (
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-[7px] shrink-0 ${dot[color]}`} />
                    <span className="font-sans text-[17px] text-stone-700 leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    );
}

/* ── 分隔小標 ── */
function SubLabel({ children }) {
    return (
        <p className="font-sans text-[14px] font-semibold tracking-widest text-teal-600 uppercase mb-3">{children}</p>
    );
}

export default function ChonghuaChapter01() {
    const TOC = [
        { id: 'ch01-foreword', label: '前言' },
        { id: 'ch01-tea-art', label: '什麼是茶藝' },
        { id: 'ch01-choose-teaware', label: '因茶擇器' },
        { id: 'ch01-main-stage', label: '主體的舞台 (桌巾/席方)' },
        { id: 'ch01-teapot-stage', label: '壺的舞台 (壺承)' },
        { id: 'ch01-teacup', label: '飲杯與杯托' },
        { id: 'ch01-fair-cup', label: '勻杯' },
        { id: 'ch01-assist-tools', label: '茶道輔助器具' },
        { id: 'ch01-layout-diagram', label: '茶席佈置位圖' },
    ];

    const [activeId, setActiveId] = useState(TOC[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) setActiveId(visible[0].target.id);
            },
            { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
        );
        TOC.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });
    const openLightbox = (src, alt) => { setLightboxImage({ src, alt }); setLightboxOpen(true); };

    return (
        <div className="flex gap-8 font-sans">
            <ImageLightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} imageSrc={lightboxImage.src} altText={lightboxImage.alt} />

            {/* Left Sidebar TOC */}
            <nav className="hidden lg:block w-60 shrink-0 sticky top-28 self-start" style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                <div className="museum-panel p-4 md:p-5 tool-surface shadow-sm rounded-2xl">
                    <h3 className="text-[18px] font-extrabold text-stone-900 mb-3 px-2 border-l-4 border-emerald-600">
                        章節導覽
                    </h3>
                    <div className="space-y-1">
                        {TOC.map(({ id, label }) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`block w-full text-left rounded-xl px-4 py-3 transition-all duration-300 border box-border text-[16px] font-bold ${isActive
                                        ? 'bg-gradient-to-br from-emerald-100/80 to-teal-50 border-emerald-300 text-emerald-900 shadow-md ring-1 ring-emerald-200'
                                        : 'bg-white/40 border-stone-200/60 hover:border-emerald-300 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-white hover:shadow-md text-stone-500 hover:text-stone-900'
                                        }`}
                                >
                                    <span className="block truncate">{label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            <div className="flex-1 min-w-0 space-y-12">
                <AcademySection
                    id="chonghua-01"
                    title="第01堂：茶具的佈置與搭配"
                    label="ACADEMY · CHONGHUA · CH01"
                    subtitle="茶具的佈展與系統化解構"
                >
                    {/* ══════════════════════════════
                    封面橫幅
                ══════════════════════════════ */}
                    <div
                        className="relative rounded-3xl overflow-hidden shadow-2xl mb-4 cursor-zoom-in group"
                        role="button" tabIndex={0}
                        onClick={() => openLightbox(IMG.cover, '第陸章 茶具')}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(IMG.cover, '第陸章 茶具'); } }}
                        aria-label="放大查看封面"
                    >
                        <img src={IMG.cover} alt="第陸章 茶具 — 茶具的佈置與搭配"
                            className="w-full h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-900/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10">
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-4">
                                <span className="font-sans text-[13px] font-semibold tracking-widest text-white/90 uppercase">第陸章</span>
                            </div>
                            <h2 className="font-sans text-[36px] md:text-[44px] font-extrabold text-white leading-tight drop-shadow-xl">茶具</h2>
                            <p className="font-sans text-[18px] text-white/80 mt-2 drop-shadow-md">—— 茶具的佈置與搭配 ——</p>
                        </div>
                    </div>

                    {/* ══════════════════════════════
                    前言
                ══════════════════════════════ */}
                    <AcademyContentBlock title="前言" icon={BookOpen} id="ch01-foreword">
                        <div className="space-y-8">
                            {/* 圖片改為橫幅置頂 */}
                            <div className="w-full">
                                <ClickImg src={IMG.foreword} alt="茶席空間佈置" caption="茶席空間佈置" openLightbox={openLightbox} wrapperClass="border-[6px] border-white shadow-lg bg-white rounded-xl overflow-hidden" imgClass="w-full h-auto aspect-video md:aspect-[21/9] object-cover" />
                            </div>

                            {/* 文字說明於下方 */}
                            <div className="px-2 md:px-4 space-y-6">
                                <div className="h-1 w-12 bg-teal-400 rounded-full" />
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                                    <div className="space-y-5">
                                        <p className="font-sans text-[17px] text-stone-700 leading-[1.9]">
                                            茶器的使用並非只是泡茶，品茗所必須，也是茶道塑造風格、思想的媒介。
                                        </p>
                                        <p className="font-sans text-[17px] text-stone-700 leading-[1.9]">
                                            應用適當得體的器具，沖製出完美的茶湯為茶人的基本條件，茶道途徑重視實踐參與。
                                        </p>
                                    </div>
                                    <blockquote className="border-l-4 border-teal-400 pl-5 py-4 bg-teal-50/50 rounded-r-xl">
                                        <p className="font-sans text-[18px] text-teal-800 font-bold leading-relaxed">
                                            「有形的藉由物呈現，無形的則由茶人的涵養來抒發。」
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ══════════════════════════════
                    什麼是茶藝
                ══════════════════════════════ */}
                    <AcademyContentBlock title="什麼是茶藝" icon={Coffee} id="ch01-tea-art">
                        <div className="grid md:grid-cols-5 gap-10 items-start">
                            {/* 圖片固定左側，改為長條型 */}
                            <div className="md:col-span-2 relative">
                                <div className="sticky top-32">
                                    <ClickImg src={IMG.teaArtSetup} alt="茶藝佈置" caption="茶藝佈置" openLightbox={openLightbox} wrapperClass="shadow-md bg-stone-50 border-[6px] border-white" imgClass="w-full h-auto border border-stone-100 object-cover aspect-[3/4] md:aspect-[9/16]" />
                                </div>
                            </div>

                            {/* 文字區塊右側 */}
                            <div className="md:col-span-3 space-y-6">
                                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
                                    <SubLabel>核心定義</SubLabel>
                                    <p className="font-sans text-[17px] text-stone-800 leading-[1.9] font-medium">
                                        以茶為本質，透過藝術的形式、揭示的過程，作用於茶湯。
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                                    <SubLabel>揭示的細節</SubLabel>
                                    <p className="font-sans text-[17px] text-stone-700 leading-[1.9] mb-4">
                                        包括煮沖泡器、配件、空間布置的擺件，乃至於聽到的音樂、看到的燈光、空間，都是茶湯藝術的形式。
                                    </p>
                                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                                        <p className="font-sans text-[17px] text-stone-800 font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                                            但是，最後會回到茶湯。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                                    <SubLabel>茶藝的形式，可大可小</SubLabel>
                                    <p className="font-sans text-[17px] text-stone-700 leading-[1.9]">
                                        從一把壺、一個杯，到一壺六杯、加上勻杯、茶倉、茶則、水盂、席方……可繁可簡。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ══════════════════════════════
                    因茶擇器
                ══════════════════════════════ */}
                    <AcademyContentBlock title="因茶擇器" icon={Award} id="ch01-choose-teaware">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 mb-10">
                            <p className="font-sans text-[17px] text-stone-700 leading-relaxed text-center">
                                根據茶葉的特質，來挑選最能襯托其<strong className="font-bold text-amber-800">香氣、滋味與美感</strong>的器具。
                            </p>
                        </div>

                        {/* 三種壺型合一（圖片+說明文字） */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {[
                                { src: IMG.teapotPorcelain, alt: '瓷壺', char: '瓷', name: '1. 瓷壺', color: 'from-amber-400 to-yellow-300', bg: 'bg-amber-50/50', border: 'border-amber-100', text: '質地細膩，不吸香氣，忠實呈現茶湯原味，適合清香型茶葉。' },
                                { src: IMG.teapotZisha, alt: '紫砂壺', char: '紫', name: '2. 紫砂壺', color: 'from-orange-500 to-amber-400', bg: 'bg-orange-50/50', border: 'border-orange-100', text: '雙氣孔結構，透氣性佳，能吸附茶香，越養越潤，適合濃香型茶葉。' },
                                { src: IMG.teapotGlass, alt: '玻璃壺', char: '玻', name: '3. 玻璃壺', color: 'from-cyan-400 to-blue-400', bg: 'bg-cyan-50/50', border: 'border-cyan-100', text: '透明可觀賞茶葉舒展與湯色變化，適合綠茶、花茶等觀賞性茶類。' },
                            ].map(({ src, alt, char, name, color, bg, border, text }) => (
                                <div key={name} className={`${bg} rounded-3xl p-5 border ${border} shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full`}>
                                    <div className="mb-6 relative">
                                        <ClickImg src={src} alt={alt} openLightbox={openLightbox} wrapperClass="rounded-2xl border-4 border-white shadow-sm" imgClass="w-full h-auto aspect-[4/3] object-cover" />
                                        <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                                            <span className="font-sans text-[20px] font-bold text-white leading-none">{char}</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 flex-1 flex flex-col text-center">
                                        <h4 className="font-sans text-[22px] font-bold text-stone-900 mb-3">{name}</h4>
                                        <p className="font-sans text-[16px] text-stone-700 leading-relaxed max-w-[240px] mx-auto">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AcademyContentBlock>

                    {/* ══════════════════════════════
                    主體的舞台
                ══════════════════════════════ */}
                    <AcademyContentBlock title="主體的舞台" icon={Layout} id="ch01-main-stage">
                        <div className="space-y-12">
                            {/* (1) 桌巾 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl border border-teal-100 shadow-sm shrink-0">
                                    1
                                </div>
                                <div className="space-y-4 pt-1">
                                    <h3 className="text-[24px] font-bold text-stone-900 font-sans">桌巾</h3>
                                    <div className="space-y-3 pl-2">
                                        <p className="font-sans text-[17px] text-stone-700 flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                                            顏色（雙色面）
                                        </p>
                                        <p className="font-sans text-[17px] text-stone-700 flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                                            裝置藝術的觀念
                                        </p>
                                        <p className="font-sans text-[17px] text-stone-700 flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                                            色調：咖啡、黃、綠、黑藍
                                        </p>
                                        <p className="font-sans text-[17px] text-stone-700 flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                                            做法：以桌巾坐大舞台
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* (2) 席方 */}
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl border border-teal-100 shadow-sm shrink-0">
                                    2
                                </div>
                                <div className="space-y-4 pt-1 w-full max-w-2xl">
                                    <h3 className="text-[24px] font-bold text-stone-900 font-sans">席方</h3>
                                    <p className="font-sans text-[17px] text-stone-700 leading-relaxed pl-2">有布席方、木席方、竹席方等。</p>

                                    <div className="bg-stone-50/80 rounded-2xl p-6 border border-stone-100 ml-2 mt-4">
                                        <SubLabel>條件</SubLabel>
                                        <div className="space-y-5">
                                            {[
                                                ['A', '穩定'],
                                                ['B', '規範：主人的舞台（開放／不開放）'],
                                                ['C', '美感的呈現，造型與色調'],
                                            ].map(([k, v]) => (
                                                <div key={k} className="flex items-start gap-4">
                                                    <span className="w-7 h-7 flex items-center justify-center bg-teal-100/50 text-teal-700 font-bold rounded-lg text-[14px] shrink-0">{k}</span>
                                                    <span className="font-sans text-[17px] text-stone-700 leading-relaxed pt-0.5">{v}</span>
                                                </div>
                                            ))}
                                            <div className="flex items-start gap-4 pt-4 border-t border-stone-200">
                                                <span className="w-7 h-7 flex items-center justify-center bg-teal-100/50 text-teal-700 font-bold rounded-lg text-[14px] shrink-0">D</span>
                                                <div className="pt-0.5">
                                                    <p className="font-sans text-[17px] font-bold text-stone-900 mb-3">材質</p>
                                                    <div className="space-y-3">
                                                        <p className="font-sans text-[17px] text-stone-700 flex items-center gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                                                            柔軟不傷害其它器具（安全）
                                                        </p>
                                                        <p className="font-sans text-[17px] text-stone-700 flex items-center gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                                                            承載一切，凸顯一切
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ══════════════════════════════
                    壺的舞台 (3) 壺承
                ══════════════════════════════ */}
                    <AcademyContentBlock title="壺的舞台" icon={Layers} id="ch01-teapot-stage">
                        <div className="grid md:grid-cols-5 gap-10 items-start">
                            {/* 左側：序號3與說明文字 */}
                            <div className="md:col-span-3">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl border border-emerald-100 shadow-sm shrink-0">
                                        3
                                    </div>
                                    <div className="w-full pt-1">
                                        <h3 className="text-[24px] font-bold text-stone-900 mb-8 font-sans">壺承</h3>
                                        <div className="space-y-8 pl-2">
                                            {[
                                                ['1', '穩定', '四平八穩與席方的接觸。'],
                                                ['2', '高度', '高度符合人體功能，不吊手（高台壺承、平台壺承）。'],
                                                ['3', '整理', '事茶過程中可做整理。'],
                                            ].map(([n, k, v]) => (
                                                <div key={n} className="flex gap-4">
                                                    <div className="w-6 h-6 rounded-full border border-emerald-300 text-emerald-600 flex items-center justify-center text-[13px] font-bold shrink-0 mt-1">{n}</div>
                                                    <div>
                                                        <h4 className="font-sans text-[18px] font-bold text-stone-900 mb-1">{k}</h4>
                                                        <p className="font-sans text-[17px] text-stone-700 leading-relaxed">{v}</p>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="flex gap-4">
                                                <div className="w-6 h-6 rounded-full border border-emerald-300 text-emerald-600 flex items-center justify-center text-[13px] font-bold shrink-0 mt-1">4</div>
                                                <div>
                                                    <h4 className="font-sans text-[18px] font-bold text-stone-900 mb-3">造型</h4>
                                                    <div className="space-y-4">
                                                        <p className="font-sans text-[17px] text-stone-700 flex items-start gap-3">
                                                            <span className="font-bold text-emerald-600 mt-0.5">A.</span>
                                                            以圓形略帶變化，稍具揚角
                                                        </p>
                                                        <p className="font-sans text-[17px] text-stone-700 flex items-start gap-3">
                                                            <span className="font-bold text-emerald-600 mt-0.5">B.</span>
                                                            壺承與流嘴、壺把不衝突
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <div className="w-6 h-6 rounded-full border border-emerald-300 text-emerald-600 flex items-center justify-center text-[13px] font-bold shrink-0 mt-1">5</div>
                                                <div>
                                                    <h4 className="font-sans text-[18px] font-bold text-stone-900 mb-3">顏色</h4>
                                                    <div className="space-y-4">
                                                        <p className="font-sans text-[17px] text-stone-700 flex items-start gap-3">
                                                            <span className="font-bold text-emerald-600 mt-0.5">A.</span>
                                                            可與席方同色系，不凸顯，但可襯托主沖茶器
                                                        </p>
                                                        <p className="font-sans text-[17px] text-stone-700 flex items-start gap-3">
                                                            <span className="font-bold text-emerald-600 mt-0.5">B.</span>
                                                            可與席方相異
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 右側：圖片 */}
                            <div className="md:col-span-2 relative h-full min-h-[300px]">
                                <div className="sticky top-32">
                                    <ClickImg src={IMG.teapotStand} alt="壺承與壺的搭配" caption="壺承 — 壺的舞台" openLightbox={openLightbox} wrapperClass="border-[6px] border-white shadow-lg bg-white rounded-xl" imgClass="w-full h-auto object-cover aspect-[3/4]" />
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ══════════════════════════════
                    飲杯與杯托 (4)(5)
                ══════════════════════════════ */}
                    <AcademyContentBlock title="飲杯與杯托" icon={Coffee} id="ch01-teacup">
                        <div className="grid md:grid-cols-5 gap-10 items-start">
                            {/* 左側：飲杯與茶席配置圖片 */}
                            <div className="md:col-span-2 relative">
                                <div className="sticky top-32">
                                    <ClickImg src={IMG.teacupSet} alt="飲杯與茶席配置" caption="飲杯與茶席配置" openLightbox={openLightbox} wrapperClass="border-[6px] border-white shadow-lg bg-white rounded-xl" imgClass="w-full h-auto object-cover aspect-[4/5]" />
                                </div>
                            </div>

                            {/* 右側：飲杯、杯托文字說明 */}
                            <div className="md:col-span-3 space-y-16">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl border border-teal-100 shadow-sm shrink-0">
                                        4
                                    </div>
                                    <div className="w-full pt-1">
                                        <h3 className="text-[24px] font-bold text-stone-900 mb-8 font-sans">飲杯</h3>
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {['降溫', '品香', '衛生', '質量感', '觸感（玩賞性）', '穩定性'].map((t, idx) => (
                                                <div key={t} className="flex items-center gap-3 bg-stone-50 rounded-xl px-5 py-3 border border-stone-100 shadow-sm">
                                                    <span className="w-5 h-5 rounded-full border border-teal-300 text-teal-600 flex items-center justify-center text-[11px] font-bold shrink-0">{idx + 1}</span>
                                                    <span className="font-sans text-[16px] text-stone-700 font-medium">{t}</span>
                                                </div>
                                            ))}
                                            <div className="col-span-2 flex items-center gap-3 bg-stone-50 rounded-xl px-5 py-3 border border-stone-100 shadow-sm">
                                                <span className="w-5 h-5 rounded-full border border-teal-300 text-teal-600 flex items-center justify-center text-[11px] font-bold shrink-0">7</span>
                                                <span className="font-sans text-[16px] text-stone-700 font-medium">不宜太薄（易刮利）</span>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-teal-400 shadow-sm">
                                            <p className="font-sans text-[17px] text-stone-800 leading-relaxed font-medium flex gap-3">
                                                <span className="w-5 h-5 rounded-full border border-teal-500 text-teal-700 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">8</span>
                                                杯色須與壺承協調，在視覺上與功能上能同時具備。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl border border-teal-100 shadow-sm shrink-0">
                                        5
                                    </div>
                                    <div className="w-full pt-1">
                                        <h3 className="text-[24px] font-bold text-stone-900 mb-6 font-sans">杯托</h3>
                                        <div className="space-y-4 pl-2">
                                            {['高度', '穩定度', '黏著'].map((t, idx) => (
                                                <p key={t} className="font-sans text-[17px] text-stone-700 flex items-center gap-4">
                                                    <span className="w-5 h-5 rounded-full border border-teal-300 text-teal-600 flex items-center justify-center text-[11px] font-bold shrink-0">{idx + 1}</span>
                                                    {t}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ══════════════════════════════
                    勻杯 (6)
                ══════════════════════════════ */}
                    <AcademyContentBlock title="勻杯" icon={Droplets} id="ch01-fair-cup">
                        <div className="grid md:grid-cols-5 gap-10 items-start">
                            <div className="md:col-span-3">
                                <div className="flex gap-6">
                                    <div className="shrink-0 flex flex-col items-center">
                                        <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center font-bold text-xl border border-teal-100 shadow-sm">
                                            6
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-[22px] font-bold text-stone-900 mb-6 font-sans">勻杯　分奉茶湯</h3>

                                        <div className="space-y-6">
                                            <div>
                                                <SubLabel>形制</SubLabel>
                                                <p className="font-sans text-[17px] text-stone-700 mb-4 pl-2">與茶杯、壺承可以搭配協調使用：</p>
                                                <div className="space-y-3 ml-2 bg-stone-50 p-5 rounded-2xl border border-stone-100 shadow-sm">
                                                    <div className="flex items-start gap-3 border-b border-stone-200 pb-3">
                                                        <span className="w-6 h-6 flex items-center justify-center bg-teal-100/50 text-teal-700 font-bold rounded-lg text-[13px] shrink-0">A</span>
                                                        <span className="font-sans text-[17px] text-stone-700 leading-relaxed pt-0.5">勻杯不能比杯子低</span>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="w-6 h-6 flex items-center justify-center bg-teal-100/50 text-teal-700 font-bold rounded-lg text-[13px] shrink-0">B</span>
                                                        <span className="font-sans text-[17px] text-stone-700 leading-relaxed pt-0.5">勻杯不能高於壺</span>
                                                    </div>
                                                    <div className="mt-3 pt-3 border-t border-stone-200">
                                                        <p className="font-sans text-[16px] text-teal-700 font-medium">
                                                            置於壺承內的高度，主從須分，相輔相成。
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-2 pl-2">
                                                <BulletList items={[
                                                    '顏色：勻杯為飲器的延伸，顏色可相同',
                                                    '斷水須順暢',
                                                    '容量配合',
                                                ]} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 relative">
                                <div className="sticky top-32">
                                    <ClickImg src={IMG.fairCup} alt="勻杯分奉茶湯" caption="6. 勻杯 — 分奉茶湯" openLightbox={openLightbox} wrapperClass="border-[6px] border-white shadow-lg bg-white rounded-2xl overflow-hidden" imgClass="w-full h-auto object-cover aspect-[4/5] transform hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ══════════════════════════════
                    茶道輔助器具 (7)~(10) (12)~(14)
                ══════════════════════════════ */}
                    <AcademyContentBlock title="茶道輔助器具" icon={Palette} id="ch01-assist-tools">
                        <div className="grid md:grid-cols-5 gap-10 items-start mb-16">
                            <div className="md:col-span-2 relative">
                                <div className="sticky top-32">
                                    <ClickImg src={IMG.teaTools} alt="茶道輔助器具" caption="茶道輔助器具" openLightbox={openLightbox} wrapperClass="border-[6px] border-white shadow-lg bg-white" imgClass="w-full h-auto object-cover aspect-[3/4]" />
                                </div>
                            </div>

                            <div className="md:col-span-3 space-y-12 pt-4">
                                <div className="flex gap-6">
                                    <div className="shrink-0 flex flex-col items-center">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl border border-emerald-100 shadow-sm">
                                            7
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[22px] font-bold text-stone-900 mb-2 font-sans">茶撥</h3>
                                        <p className="font-sans text-[17px] text-stone-700 leading-relaxed">
                                            竹製為佳，上下有節，精神象徵，可以理茶之用。
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="shrink-0 flex flex-col items-center">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl border border-emerald-100 shadow-sm">
                                            8
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[22px] font-bold text-stone-900 mb-2 font-sans">茶掏</h3>
                                        <p className="font-sans text-[17px] text-stone-700">竹製為佳。</p>
                                        <p className="font-sans text-[16px] text-emerald-600/80 italic mt-2">（茶撥及茶掏合稱茶理）</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="shrink-0 flex flex-col items-center">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl border border-emerald-100 shadow-sm">
                                            9
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[22px] font-bold text-stone-900 mb-2 font-sans">茶荷</h3>
                                        <p className="font-sans text-[17px] text-stone-700 leading-relaxed">
                                            線條流暢，不宜太大，顏色需考慮與茶席搭配。
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="shrink-0 flex flex-col items-center">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl border border-emerald-100 shadow-sm">
                                            10
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[22px] font-bold text-stone-900 mb-4 font-sans">茶則</h3>
                                        <SubLabel>形制</SubLabel>
                                        <div className="flex gap-8">
                                            <div className="flex items-center gap-3 bg-stone-50 rounded-lg px-4 py-2 border border-stone-100">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                                <span className="font-sans text-[17px] text-stone-700">① 內斂</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-stone-50 rounded-lg px-4 py-2 border border-stone-100">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                                <span className="font-sans text-[17px] text-stone-700">② 雅氣</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 分割線 */}
                        <div className="flex items-center gap-4 my-10">
                            <div className="flex-1 h-px bg-stone-200/80" />
                            <span className="font-sans text-[14px] font-bold text-stone-400 tracking-widest uppercase">其他器具</span>
                            <div className="flex-1 h-px bg-stone-200/80" />
                        </div>

                        {/* 其他器具 (12)~(14) 卡片並排 */}
                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            {/* 水盂 - 直式 */}
                            <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden h-full">
                                <div className="w-full aspect-[4/5] overflow-hidden bg-stone-100 relative">
                                    <img src={IMG.waterBowl} alt="水盂" className="w-full h-full object-cover object-[20%_center] transform hover:scale-105 transition-transform duration-700 cursor-zoom-in" onClick={() => openLightbox(IMG.waterBowl, "水盂")} />
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-emerald-50 text-teal-600 rounded-xl flex items-center justify-center font-bold text-lg border border-teal-100 shadow-sm shrink-0">
                                            12
                                        </div>
                                        <h3 className="text-[22px] font-bold text-stone-900 font-sans m-0 leading-none">水盂</h3>
                                    </div>
                                    <div className="space-y-3 pl-2">
                                        <p className="font-sans text-[16px] text-stone-700 flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                                            <span>展演：不能過大，形制須優雅</span>
                                        </p>
                                        <p className="font-sans text-[16px] text-stone-700 flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                                            <span>因茶聚會可考慮放大</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 茶倉 - 直式 */}
                            <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden h-full">
                                <div className="w-full aspect-[4/5] overflow-hidden bg-stone-100 relative">
                                    <img src={IMG.teaCaddy} alt="茶倉" className="w-full h-full object-cover object-[75%_center] transform hover:scale-105 transition-transform duration-700 cursor-zoom-in" onClick={() => openLightbox(IMG.teaCaddy, "茶倉")} />
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-emerald-50 text-teal-600 rounded-xl flex items-center justify-center font-bold text-lg border border-teal-100 shadow-sm shrink-0">
                                            13
                                        </div>
                                        <h3 className="text-[22px] font-bold text-stone-900 font-sans m-0 leading-none">茶倉</h3>
                                    </div>
                                    <div className="pl-2">
                                        <p className="font-sans text-[16px] text-stone-700 leading-relaxed">易掀蓋且密和度高。</p>
                                    </div>
                                </div>
                            </div>

                            {/* 燒水器 - 直式 */}
                            <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden h-full">
                                <div className="w-full aspect-[4/5] overflow-hidden bg-stone-100 relative">
                                    <img src={IMG.kettle} alt="燒水器" className="w-full h-full object-cover object-[center_90%] transform hover:scale-105 transition-transform duration-700 cursor-zoom-in" onClick={() => openLightbox(IMG.kettle, "燒水器")} />
                                </div>
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-emerald-50 text-teal-600 rounded-xl flex items-center justify-center font-bold text-lg border border-teal-100 shadow-sm shrink-0">
                                            14
                                        </div>
                                        <h3 className="text-[22px] font-bold text-stone-900 font-sans m-0 leading-none">燒水器</h3>
                                    </div>
                                    <div className="pl-2">
                                        <p className="font-sans text-[16px] text-stone-700 leading-relaxed">以容量適中，不宜太大。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ══════════════════════════════
                    茶席佈置位圖
                ══════════════════════════════ */}
                    <AcademyContentBlock title="茶席佈置位圖" icon={Grid}>
                        <div className="mb-8 w-full max-w-3xl mx-auto">
                            <ClickImg src={IMG.layoutDiagram} alt="茶席佈置位圖" caption="點擊可放大查看" openLightbox={openLightbox} wrapperClass="border-2 border-stone-100 shadow-lg bg-white" imgClass="w-full h-auto object-contain max-h-[480px]" />
                        </div>

                        <div className="mt-10 grid xl:grid-cols-3 md:grid-cols-2 gap-5">
                            {[
                                { code: 'G', label: '席方', desc: '為茶席的載體，離桌緣一食指的距離。' },
                                { code: 'B', label: '壺承 · 壺墊 · 茶壺', desc: '壺承上置壺墊，將茶壺置其上，茶壺放在事茶者的正前方。' },
                                { code: 'E', label: '蓋置', desc: '置於壺承的右下方 45°。' },
                                { code: 'F', label: '茶巾', desc: '置於事茶者右下壺承 45°。' },
                                { code: 'D', label: '勻杯', desc: '於壺的右上（45～30°）或平行。' },
                                { code: 'I', label: '茶則 · 茶理', desc: '於壺承右方。' },
                                { code: 'J', label: '茶荷', desc: '於壺的左上方 45°。' },
                                { code: 'A', label: '茶倉', desc: '於茶荷左上方 45°。' },
                                { code: 'C', label: '水盂', desc: '視茶席空間彈性放置，左上下方、右上下方皆可，依整體平衡調整。' },
                                { code: 'K', label: '煮水器', desc: '小可置於茶席上；大則備小几置放。' },
                            ].map(({ code, label, desc }) => (
                                <div key={code} className="flex flex-col gap-3 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white font-bold font-sans text-[16px] shrink-0 shadow-sm group-hover:bg-teal-600 transition-colors">
                                            {code}
                                        </div>
                                        <p className="font-sans text-[18px] font-bold text-stone-900">{label}</p>
                                    </div>
                                    <p className="font-sans text-[15px] text-stone-600 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </AcademyContentBlock>

                </AcademySection>
            </div>
        </div >
    );
}

