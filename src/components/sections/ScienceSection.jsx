import React, { useState, useMemo } from 'react';
import { Microscope, ChevronRight, RefreshCw, Flame, Sparkles, FlaskConical } from 'lucide-react';
import { UI_FLAGS } from '../../config/uiFlags';
import { SCIENCE_TOC, TEA_REFERENCE_TOC } from '../../config/navigation';
import useI18n from '../../i18n/useI18n';
import AtlasDockLayout from '../AtlasDockLayout';
import ChapterSidebar from '../ChapterSidebar';
import TeaReferenceNotes from '../../content/references/TeaReferenceNotes';
import TeaChemistryDeepDive from './TeaChemistryDeepDive';
import RoastingChapter from '../../content/scienceChapters/RoastingChapter';
import SlurpingChapter from '../../content/scienceChapters/SlurpingChapter';
import ConstituentsChapter from '../../content/scienceChapters/ConstituentsChapter';
import AromaticsChapter from '../../content/scienceChapters/AromaticsChapter';
import TeaProcessCraftChapter from '../../content/scienceChapters/TeaProcessCraftChapter';

export default function ScienceSection({
    scienceRoom,
    setScienceRoom,
    teachingChapterHref,
    onSelectTeachingChapter,
    siteNavHeightPx = 80
}) {
    const i18n = useI18n();
    const notesMode = UI_FLAGS.notesMode;
    const [showScienceAtlas, setShowScienceAtlas] = useState(!notesMode);

    // Oxidation chapter navigation (Local state since it doesn't need to be hoisted to App level yet)
    const [oxidationChapterHref, setOxidationChapterHref] = useState('#chapter1');

    const scienceSidebarItems = SCIENCE_TOC.map((item) => ({ key: item.key, label: item.label }));
    const scienceSubItemsByKey = useMemo(
        () => ({
            oxidation: [
                { href: '#chapter1', label: '1.0 核心定義' },
                { href: '#chapter2', label: '2.0 微生物發酵' },
                { href: '#chapter3', label: '3.0 酶促氧化' },
                { href: '#chapter4', label: '4.0 化學轉化' },
                { href: '#chapter5', label: '5.0 關鍵控制點' },
                { href: '#chapter6', label: '6.0 實例分析' },
                { href: '#chapter7', label: '7.0 結論' },
            ],
            teaching: [{ href: '#ref-all', label: '全部章節' }, ...TEA_REFERENCE_TOC],
        }),
        [],
    );

    const isScienceTeachingRoom = scienceRoom === 'teaching' || scienceRoom.startsWith('teaching-');
    const isScienceOxidationRoom = scienceRoom === 'oxidation';

    const scienceTeachingActiveHref = scienceRoom.startsWith('teaching-')
        ? `#ref-${scienceRoom.replace('teaching-', '')}`
        : teachingChapterHref;

    return (
        <div className="museum-page">
            <div className="w-full">
                {notesMode && (
                    <div className="mb-10 museum-panel p-7 md:p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div className="min-w-0">
                                <div className="museum-label">
                                    <Microscope size={14} className="opacity-80" />
                                    TEA HOUSE · NOTES
                                </div>
                                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶葉科學｜筆記卡</h2>
                                <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                                    科學不是背名詞，而是把「製程控制」連回「杯中風味」。先用筆記卡建立三大核心：氧化／烘焙／內含物；需要完整細節時再展開百科。
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                                <button
                                    type="button"
                                    onClick={() => setShowScienceAtlas(true)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                                >
                                    展開百科
                                    <ChevronRight size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowScienceAtlas(true);
                                        setScienceRoom('oxidation');
                                        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                                >
                                    直接看氧化
                                    <ChevronRight size={16} className="text-emerald-700" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 1</div>
                                <div className="mt-1 font-bold text-stone-900">氧化（發酵）</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">決定茶湯色澤、花果蜜香與回甘走向。</div>
                            </div>
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 2</div>
                                <div className="mt-1 font-bold text-stone-900">烘焙（火功）</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">以熱重排香氣與口感：熟香、厚度、耐泡與耐放。</div>
                            </div>
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 3</div>
                                <div className="mt-1 font-bold text-stone-900">內含物</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">茶多酚、胺基酸、咖啡因是「反應原料」，也就是風味底盤。</div>
                            </div>
                        </div>
                    </div>
                )}

                {!notesMode || showScienceAtlas ? (
                    <>
                        <AtlasDockLayout
                            topOffsetPx={siteNavHeightPx + 48}
                            sidebar={
                                <ChapterSidebar
                                    title="科學實驗室"
                                    items={scienceSidebarItems}
                                    activeKey={scienceRoom}
                                    onSelectKey={(key) => {
                                        setScienceRoom(key);
                                        if (key === 'teaching') return onSelectTeachingChapter?.('#ref-all');
                                        if (key.startsWith('teaching-')) return onSelectTeachingChapter?.(`#ref-${key.replace('teaching-', '')}`);
                                        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    subItemsByKey={scienceSubItemsByKey}
                                    activeSubHref={
                                        scienceRoom === 'teaching' ? teachingChapterHref :
                                            scienceRoom === 'oxidation' ? oxidationChapterHref :
                                                null
                                    }
                                    onSelectSubHref={(href) => {
                                        if (scienceRoom === 'teaching') {
                                            onSelectTeachingChapter?.(href);
                                        } else if (scienceRoom === 'oxidation') {
                                            setOxidationChapterHref(href);
                                        }
                                    }}
                                    topOffsetPx={siteNavHeightPx + 16}
                                    pinMode="static"
                                />
                            }
                        >
                            <div className="space-y-8 min-w-0">
                                <main className="space-y-8">
                                    {isScienceTeachingRoom && (
                                        <div id="science-teaching" className="scroll-mt-28">
                                            <TeaReferenceNotes activeHref={scienceTeachingActiveHref === '#ref-all' ? null : scienceTeachingActiveHref} />
                                        </div>
                                    )}
                                    {scienceRoom === 'oxidation' && (
                                        <div className="museum-frame museum-paper overflow-hidden">
                                            <div className="px-6 py-6 md:px-8 md:py-7 border-b border-stone-200/70">
                                                <div className="museum-label">
                                                    <RefreshCw size={14} className="opacity-80" />
                                                    EXHIBIT ROOM
                                                </div>
                                                <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Oxidation' : '氧化'}</h3>
                                                <p className="mt-2 text-stone-700 leading-relaxed">
                                                    {i18n.lang === 'en'
                                                        ? '“Flavor chemistry” in tea is largely oxidation chemistry. This room explains enzymes, substrates, process control, and why different tea types taste so different.'
                                                        : '茶的「風味化學」核心多與氧化作用相關。本展廳以製程控制視角，說明酵素、底物、環境與風味差異。'}
                                                </p>
                                            </div>
                                            <div className="px-2 py-2 md:px-4 md:py-4">
                                                <TeaChemistryDeepDive embedded activeHref={oxidationChapterHref} />
                                            </div>
                                        </div>
                                    )}

                                    {scienceRoom === 'roasting' && (
                                        <div className="museum-frame museum-paper p-6 md:p-8">
                                            <div className="museum-label">
                                                <Flame size={14} className="opacity-80" />
                                                EXHIBIT ROOM
                                            </div>
                                            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Roasting' : '烘焙'}</h3>
                                            <p className="mt-3 text-stone-700 leading-relaxed">
                                                {i18n.lang === 'en'
                                                    ? 'Roasting is a heat-driven reorganization of aroma and texture. The goal is not “burning”, but controlled transformation and stabilization.'
                                                    : '烘焙不是「烤焦」，而是以熱為主導的風味重排與穩定化：香氣更深、口感更圓、保存更耐放。'}
                                            </p>

                                            <div className="mt-6 grid md:grid-cols-3 gap-4">
                                                <div className="museum-card p-5 bg-white/80">
                                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">HEAT</div>
                                                    <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Heat Reactions' : '熱驅動反應'}</div>
                                                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                                                        {i18n.lang === 'en'
                                                            ? 'Moisture removal, aroma volatilization, Maillard reactions, and polymerization reshape flavor.'
                                                            : '脫水、揮發、梅納反應與聚合作用共同推動「熟香」與口感厚度。'}
                                                    </div>
                                                </div>
                                                <div className="museum-card p-5 bg-white/80">
                                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CONTROL</div>
                                                    <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Craft Controls' : '火功控制'}</div>
                                                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                                                        {i18n.lang === 'en'
                                                            ? 'Temperature, duration, airflow, and thickness are the main levers craftsmen tune.'
                                                            : '溫度、時間、氣流、茶層厚度是師傅調整的四個主要旋鈕。'}
                                                    </div>
                                                </div>
                                                <div className="museum-card p-5 bg-white/80">
                                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">OUTCOME</div>
                                                    <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Flavor Outcome' : '風味結果'}</div>
                                                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                                                        {i18n.lang === 'en'
                                                            ? 'From floral to nutty/toasty; sharpness softens, sweetness and body become rounder.'
                                                            : '香氣從花香走向果乾、堅果、焙火；苦澀趨緩，甜感與稠度更圓。'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 grid lg:grid-cols-12 gap-4">
                                                <div className="lg:col-span-7 museum-card p-6 bg-white/80">
                                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">{i18n.lang === 'en' ? 'PROCESS WALKTHROUGH' : '工序導覽'}</div>
                                                    <h4 className="mt-2 text-lg font-extrabold text-stone-900">{i18n.lang === 'en' ? 'A museum-style timeline of roasting' : '烘焙流程（展場時間軸）'}</h4>
                                                    <ol className="mt-4 space-y-3 text-sm text-stone-700">
                                                        <li className="flex gap-3">
                                                            <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">1</span>
                                                            <div>
                                                                <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Warm-up & moisture balancing' : '預熱與回潤水分平衡'}</div>
                                                                <div className="text-stone-600 leading-relaxed">
                                                                    {i18n.lang === 'en'
                                                                        ? 'Gentle heat brings leaves to a stable state before stronger roasting. Helps avoid “outside dry, inside raw”.'
                                                                        : '先用溫和熱量讓茶葉進入穩定狀態，避免「外乾內生」；也讓後續香氣釋放更一致。'}
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="flex gap-3">
                                                            <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">2</span>
                                                            <div>
                                                                <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Primary roast (set the style)' : '主焙（定風格）'}</div>
                                                                <div className="text-stone-600 leading-relaxed">
                                                                    {i18n.lang === 'en'
                                                                        ? 'Roast level is decided here: light/medium/heavy. Airflow and batch thickness matter as much as temperature.'
                                                                        : '在這一步決定輕/中/重焙路線；氣流與茶層厚度常常比「溫度數字」更關鍵。'}
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="flex gap-3">
                                                            <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">3</span>
                                                            <div>
                                                                <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Resting (aroma integration)' : '退火靜置（香氣融合）'}</div>
                                                                <div className="text-stone-600 leading-relaxed">
                                                                    {i18n.lang === 'en'
                                                                        ? 'After heat, aroma can feel “sharp”. Resting lets volatile notes settle and the cup become rounder.'
                                                                        : '剛烘完的茶香可能偏尖、火氣重；靜置能讓揮發性物質回落，茶湯更圓。'}
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="flex gap-3">
                                                            <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">4</span>
                                                            <div>
                                                                <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Re-roast (optional, layer building)' : '回焙（選配：堆層次）'}</div>
                                                                <div className="text-stone-600 leading-relaxed">
                                                                    {i18n.lang === 'en'
                                                                        ? 'Some styles use multiple gentle passes. The goal is depth without smoke or bitterness spikes.'
                                                                        : '部分風格採多次溫柔回焙；目標是「更深」而不是「更焦」，避免煙味與苦感突刺。'}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>

                                                <div className="lg:col-span-5 museum-card p-6 bg-white/80">
                                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">{i18n.lang === 'en' ? 'OBSERVATION POINTS' : '觀察要點'}</div>
                                                    <h4 className="mt-2 text-lg font-extrabold text-stone-900">{i18n.lang === 'en' ? 'What to look for in the cup' : '用茶湯判斷烘焙'}</h4>
                                                    <ul className="mt-4 space-y-3 text-sm text-stone-700">
                                                        <li className="flex items-start gap-2">
                                                            <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                                                            <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Aroma trajectory:' : '香氣走向：'}</span> {i18n.lang === 'en' ? 'floral → ripe fruit/nutty → cocoa/wood' : '花香 → 熟果/堅果 → 可可/木質'}</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                                                            <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Texture:' : '口感：'}</span> {i18n.lang === 'en' ? 'rounder body, softer edges, longer finish' : '稠度更圓、邊緣更柔、尾韻更長'}</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                                                            <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Fire notes:' : '火氣：'}</span> {i18n.lang === 'en' ? 'freshly roasted tea can feel “hot”; resting reduces harshness' : '新焙茶常有「火氣」，靜置可讓刺激感下降'}</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                                                            <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Cleanliness:' : '乾淨度：'}</span> {i18n.lang === 'en' ? 'avoid smoke, burnt, or dusty flavors' : '避免煙味、焦苦、粉塵味'}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="mt-6 grid md:grid-cols-2 gap-4">
                                                <details className="museum-card bg-white/80 p-5 group" open>
                                                    <summary className="cursor-pointer list-none flex items-center justify-between font-extrabold text-stone-900">
                                                        <span>{i18n.lang === 'en' ? 'What changes chemically?' : '化學層面：發生了什麼？'}</span>
                                                        <span className="text-stone-500 group-open:rotate-90 transition-transform"><ChevronRight size={18} /></span>
                                                    </summary>
                                                    <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                                                        <p>{i18n.lang === 'en'
                                                            ? 'Roasting shifts aroma by heat: some volatiles evaporate, others form via Maillard reactions (amino acids + sugars), Strecker degradation, and gradual polymerization.'
                                                            : '烘焙以「熱」推動風味轉換：部分揮發物散出；也會產生梅納反應（胺基酸＋糖）、史崔克降解與聚合作用，讓香氣更成熟、口感更厚。'}</p>
                                                        <p>{i18n.lang === 'en'
                                                            ? 'Pigment and “green” notes can be reduced; roast can also stabilize tea for storage by lowering moisture and deactivating remaining enzymes.'
                                                            : '葉綠感與部分青味會下降；同時透過降低含水與抑制殘留酵素活性，提升保存穩定性。'}</p>得內容不可刪減、不可簡化，排版精美、視覺質感升級
                                                    </div>
                                                </details>

                                                <details className="museum-card bg-white/80 p-5 group" open>
                                                    <summary className="cursor-pointer list-none flex items-center justify-between font-extrabold text-stone-900">
                                                        <span>{i18n.lang === 'en' ? 'Common roast issues (and how they taste)' : '常見烘焙問題（味覺辨識）'}</span>
                                                        <span className="text-stone-500 group-open:rotate-90 transition-transform"><ChevronRight size={18} /></span>
                                                    </summary>
                                                    <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                                                        <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Burnt/char:' : '焦苦/炭味：'}</span> {i18n.lang === 'en' ? 'sharp bitterness, ashy finish, aroma feels flat' : '苦感尖銳、尾段像灰；香氣扁平。'}</p>
                                                        <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Smoke:' : '煙味：'}</span> {i18n.lang === 'en' ? 'smoky nose that covers the tea’s origin character' : '煙味蓋過茶本身的產區/品種特色。'}</p>
                                                        <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Outside dry, inside raw:' : '外乾內生：'}</span> {i18n.lang === 'en' ? 'hollow cup, rough edges, unstable aftertaste' : '茶湯空、邊緣粗、尾韻不穩。'}</p>
                                                        <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Over-resting/stale:' : '陳放走味：'}</span> {i18n.lang === 'en' ? 'aroma dulls, sweetness fades, paper/closet notes appear' : '香氣鈍、甜感退，出現紙味/櫥味。'}</p>
                                                    </div>
                                                </details>
                                            </div>

                                            <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 shadow-sm bg-white/70">
                                                <table className="min-w-full divide-y divide-stone-200 text-sm">
                                                    <thead>
                                                        <tr className="bg-stone-100">
                                                            <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">LEVEL</th>
                                                            <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">AROMA</th>
                                                            <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">MOUTHFEEL</th>
                                                            <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">COMMON IN</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-stone-200 text-stone-700">
                                                        <tr className="hover:bg-stone-50/60">
                                                            <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Light' : '輕焙'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'Floral, fresh, honeyed' : '花香、清甜、蜜香'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'Bright, crisp' : '明亮、爽口'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'High mountain oolong, lightly oxidized teas' : '高山烏龍、偏清香系'}</td>
                                                        </tr>
                                                        <tr className="hover:bg-stone-50/60">
                                                            <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Medium' : '中焙'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'Roasted nuts, caramel, ripe fruit' : '堅果、焦糖、熟果'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'Rounder, thicker body' : '更圓、更厚'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'Dong Ding styles, traditional oolong' : '凍頂系、傳統烏龍'}</td>
                                                        </tr>
                                                        <tr className="hover:bg-stone-50/60">
                                                            <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Heavy' : '重焙'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'Toasty, cocoa, wood, long finish' : '焙火、可可、木質、尾韻長'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'Very smooth; lower sharpness' : '更順、更沉'}</td>
                                                            <td className="px-5 py-4">{i18n.lang === 'en' ? 'Some aged oolong & re-roasted teas' : '部分陳年烏龍、回焙茶'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <RoastingChapter />
                                        </div>
                                    )}

                                    {scienceRoom === 'slurping' && (
                                        <div className="museum-frame museum-paper p-6 md:p-8">
                                            <SlurpingChapter />
                                        </div>
                                    )}

                                    {scienceRoom === 'constituents' && (
                                        <div className="museum-frame museum-paper p-6 md:p-8">
                                            <ConstituentsChapter />
                                        </div>
                                    )}

                                    {scienceRoom === 'aroma' && (
                                        <div className="museum-frame museum-paper p-6 md:p-8">
                                            <div className="museum-label">
                                                <Sparkles size={14} className="opacity-80" />
                                                EXHIBIT ROOM
                                            </div>
                                            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Aromatics' : '香氣'}</h3>
                                            <p className="mt-3 text-stone-700 leading-relaxed">
                                                {i18n.lang === 'en'
                                                    ? 'Tea aroma comes from hundreds of volatile organic compounds. Understanding their chemistry, formation, and classification helps you appreciate the complexity of tea fragrance.'
                                                    : '茶葉香氣來自數百種揮發性芳香物質。從化學基礎到形成機制、分類方式，系統性地解析茶葉香氣的科學原理。'}
                                            </p>
                                            <div className="mt-6">
                                                <AromaticsChapter />
                                            </div>
                                        </div>
                                    )}

                                    {scienceRoom === 'process' && (
                                        <div className="museum-frame museum-paper p-6 md:p-8">
                                            <div className="museum-label">
                                                <FlaskConical size={14} className="opacity-80" />
                                                EXHIBIT ROOM
                                            </div>
                                            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Tea Process Craft' : '製茶工藝'}</h3>
                                            <p className="mt-3 text-stone-700 leading-relaxed">
                                                {i18n.lang === 'en'
                                                    ? 'A guided tour of how processing turns fresh leaf chemistry into aroma and flavor, using oolong tea as the main case.'
                                                    : '以烏龍茶為例，梳理製程如何驅動香氣與滋味的生成，從萎凋到烘焙全程解析。'}
                                            </p>
                                            <div className="mt-6">
                                                <TeaProcessCraftChapter />
                                            </div>
                                        </div>
                                    )}
                                </main>
                            </div>
                        </AtlasDockLayout>
                    </>
                ) : notesMode ? (
                    <div className="museum-panel p-7 md:p-10 text-center">
                        <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
                        <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開完整科學百科</div>
                        <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            百科包含：氧化/烘焙/內含物三大展廳、圖解與白皮書內容，適合教學引用與快速查閱。
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                            <button
                                type="button"
                                onClick={() => setShowScienceAtlas(true)}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                            >
                                展開百科內容
                                <ChevronRight size={16} />
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowScienceAtlas(true);
                                    setScienceRoom('roasting');
                                    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                            >
                                直接看烘焙
                                <ChevronRight size={16} className="text-emerald-700" />
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
