import React, { useMemo, useState } from 'react';
import {
    ArrowRight, Beaker, BookOpen, CheckCircle2, Flame, Leaf,
    Package, Sparkles, Sun, Waves, Wind
} from 'lucide-react';
import TeaProcessFlowChart from './TeaProcessFlowChart';

const CLASSIFICATION_CARDS = [
    {
        title: '依發酵／氧化程度',
        subtitle: '從綠茶到紅茶，觀察酵素氧化帶來的香氣與湯色變化。',
        tone: 'emerald',
        items: ['不發酵茶', '部分發酵茶', '全發酵茶'],
    },
    {
        title: '依成品外觀與湯色',
        subtitle: '六大茶類名稱多與乾茶外觀、湯色及製程結果相關。',
        tone: 'amber',
        items: ['綠茶', '黃茶', '白茶', '青茶', '紅茶', '黑茶'],
    },
];

const FERMENTATION_SPECTRUM = [
    { name: '綠茶', pct: 0, desc: '不發酵，鮮爽清香', color: '#22c55e' },
    { name: '文山包種', pct: 15, desc: '輕發酵，花香清揚', color: '#14b8a6' },
    { name: '高山烏龍', pct: 20, desc: '輕發酵，清甜厚潤', color: '#38bdf8' },
    { name: '凍頂烏龍', pct: 30, desc: '中發酵，焙火韻', color: '#f59e0b' },
    { name: '鐵觀音', pct: 40, desc: '中重發酵，音韻醇厚', color: '#b45309' },
    { name: '東方美人', pct: 60, desc: '重發酵，蜜香熟果', color: '#f97316' },
    { name: '紅茶', pct: 100, desc: '全發酵，甜香醇厚', color: '#b91c1c' },
];

const SIX_TEA_METHODS = [
    { id: 'green', label: '綠茶', badge: '不發酵', accent: '#16a34a', steps: ['採摘茶菁', '殺菁', '揉捻', '乾燥'], note: '先以高溫停止氧化，保留鮮綠色澤與清爽滋味。' },
    { id: 'yellow', label: '黃茶', badge: '悶黃', accent: '#ca8a04', steps: ['採摘茶菁', '殺菁', '揉捻', '悶黃', '乾燥'], note: '在綠茶基礎上增加悶黃，使滋味較柔和。' },
    { id: 'white', label: '白茶', badge: '輕萎凋', accent: '#94a3b8', steps: ['採摘茶菁', '長時間萎凋', '輕度乾燥'], note: '少干預、重萎凋，呈現自然甜香與毫香。' },
    { id: 'oolong', label: '青茶', badge: '部分發酵', accent: '#0f766e', steps: ['採摘茶菁', '日光萎凋', '靜置攪拌', '殺菁', '揉捻', '乾燥'], note: '以萎凋、做青與殺菁控制發酵程度，是臺灣特色茶核心。' },
    { id: 'black', label: '紅茶', badge: '全發酵', accent: '#dc2626', steps: ['採摘茶菁', '萎凋', '揉捻', '發酵氧化', '乾燥'], note: '揉捻後讓多酚氧化充分進行，形成紅茶湯色與甜香。' },
    { id: 'dark', label: '黑茶', badge: '後發酵', accent: '#44403c', steps: ['採摘茶菁', '殺菁', '揉捻', '渥堆', '乾燥', '蒸壓'], note: '乾燥前後透過微生物與時間轉化，形成陳香與醇厚感。' },
];

const TAIWAN_TEA_TYPES = [
    { label: '臺灣綠茶', repr: '三峽碧螺春綠茶', feature: '不發酵，清鮮花果香', color: 'emerald' },
    { label: '清香型條形包種茶', repr: '文山包種茶、南港包種茶', feature: '輕發酵，條索自然，花香清雅', color: 'teal' },
    { label: '清香型球形烏龍茶', repr: '高山烏龍茶', feature: '輕發酵，球形，重視高海拔清甜', color: 'sky' },
    { label: '焙香型球形烏龍茶', repr: '凍頂烏龍茶、鐵觀音茶、紅烏龍茶', feature: '中至重發酵，焙火形成熟香與韻味', color: 'amber' },
    { label: '東方美人茶', repr: '白毫烏龍、膨風茶', feature: '重發酵，著涎蜜香與熟果韻', color: 'orange' },
    { label: '臺灣紅茶', repr: '日月潭紅茶、小葉種紅茶、蜜香紅茶', feature: '全發酵，甜香醇厚，湯色紅亮', color: 'red' },
];


const PROCESS_VISUALS = [
    {
        title: '萎凋｜散水起香',
        desc: '茶菁水分慢慢消散，葉片變柔軟，香氣前驅物質開始轉化。',
        src: '/images/generated/process_withering.png',
    },
    {
        title: '攪拌做青｜形成花香',
        desc: '青茶以靜置與翻動控制葉緣氧化，是臺灣烏龍香氣的核心工序。',
        src: '/images/oolong_shaking_process.png',
    },
    {
        title: '殺菁｜固定風味',
        desc: '以高溫鈍化酵素活性，讓茶葉停止繼續氧化，保留當下風味。',
        src: '/images/generated/process_kill_green.png',
    },
    {
        title: '揉捻乾燥｜成形入味',
        desc: '揉捻讓茶葉成形並釋出茶汁，乾燥則穩定品質、利於保存。',
        src: '/images/generated/process_rolling.png',
    },
];
const PROCESS_STEPS = [
    { icon: Wind, title: '萎凋', tag: '散水・起香', body: '讓茶菁水分消散、葉片軟化，並啟動香氣前驅物質的轉化，是白茶、青茶、紅茶的重要基礎。' },
    { icon: Waves, title: '靜置與攪拌', tag: '做青・控香', body: '部分發酵茶透過靜置與翻動，使葉緣細胞受損並逐步氧化，製茶師在此決定香氣、滋味與發酵程度。' },
    { icon: Flame, title: '殺菁', tag: '停止氧化', body: '以高溫破壞酵素活性，固定茶葉狀態，去除菁味，讓後續揉捻與乾燥能穩定進行。' },
    { icon: Beaker, title: '揉捻', tag: '成形・出味', body: '讓茶葉捲曲成條或球，並使茶汁附著於表面，沖泡時更容易釋放滋味；紅茶揉捻也會促進氧化反應。' },
    { icon: Package, title: '熱團揉', tag: '球形烏龍', body: '球形烏龍茶的關鍵成形工序，反覆束包與揉壓，使茶葉逐漸緊結成球，形成耐泡與厚實口感。' },
    { icon: Flame, title: '乾燥與烘焙', tag: '固定・昇華', body: '乾燥讓含水量降低以利保存；烘焙則進一步調整香氣、降低雜味，形成凍頂、鐵觀音等熟香韻味。' },
];

const toneClass = {
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    amber: 'border-amber-200 bg-amber-50 text-amber-900',
    teal: 'border-teal-200 bg-teal-50 text-teal-900',
    sky: 'border-sky-200 bg-sky-50 text-sky-900',
    orange: 'border-orange-200 bg-orange-50 text-orange-900',
    red: 'border-red-200 bg-red-50 text-red-900',
};

function SectionTitle({ eyebrow, title, children }) {
    return (
        <div className="mb-7">
            <div className="flex items-center gap-3 text-xs font-extrabold tracking-[0.24em] text-amber-700 uppercase">
                <span className="h-1 w-9 rounded-full bg-amber-500" />
                {eyebrow}
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-stone-950">{title}</h2>
            {children ? <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-stone-600">{children}</p> : null}
        </div>
    );
}

function ProcessCard({ tea }) {
    return (
        <article className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <div className="text-xs font-extrabold tracking-[0.18em] text-stone-400">{tea.badge}</div>
                    <h3 className="mt-1 text-xl font-extrabold text-stone-950">{tea.label}</h3>
                </div>
                <span className="h-4 w-4 rounded-full ring-4 ring-white shadow" style={{ backgroundColor: tea.accent }} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{tea.note}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
                {tea.steps.map((step, index) => (
                    <React.Fragment key={step}>
                        <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm font-bold text-stone-700">
                            {index + 1}. {step}
                        </span>
                        {index < tea.steps.length - 1 ? <ArrowRight size={14} className="text-stone-300" /> : null}
                    </React.Fragment>
                ))}
            </div>
        </article>
    );
}

const TeaProcessIntro = () => {
    const [activeSixTea, setActiveSixTea] = useState('oolong');
    const activeTea = useMemo(() => SIX_TEA_METHODS.find((tea) => tea.id === activeSixTea), [activeSixTea]);

    return (
        <div className="mx-auto max-w-6xl space-y-10 pb-20">
            <section className="museum-panel overflow-hidden p-0">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="px-7 py-10 md:px-12 md:py-14">
                        <div className="museum-label mb-5">TAIWAN TEA · PROCESSING</div>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-stone-950">
                            臺灣特色茶分類及加工製程簡介
                        </h1>
                        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-700">
                            這一頁用「分類邏輯 → 製程流程 → 臺灣代表茶系」三層架構，幫助學生理解：同一片茶葉，如何因氧化、殺菁、揉捻與烘焙而走向不同風味。
                        </p>
                        <div className="mt-7 grid gap-3 sm:grid-cols-3">
                            {['先看分類', '再看流程', '最後對照茶品'].map((item, index) => (
                                <div key={item} className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3">
                                    <div className="text-xs font-extrabold text-emerald-700">STEP {index + 1}</div>
                                    <div className="mt-1 font-bold text-stone-900">{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative min-h-[280px] bg-gradient-to-br from-emerald-950 via-emerald-800 to-amber-700 p-8 text-white">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0 2px, transparent 3px), radial-gradient(circle at 70% 45%, white 0 1px, transparent 2px)', backgroundSize: '42px 42px, 28px 28px' }} />
                        <div className="relative flex h-full flex-col justify-between">
                            <Leaf size={44} className="text-emerald-100" />
                            <div>
                                <div className="text-sm font-extrabold tracking-[0.24em] text-emerald-100">PROCESS MAP</div>
                                <div className="mt-3 text-3xl font-extrabold">香氣不是偶然，製程就是風味的路線圖。</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="museum-panel px-7 py-9 md:px-10">
                <SectionTitle eyebrow="01 · Classification" title="兩套分類法，先建立判斷座標">
                    茶葉分類不是只看名稱，而是同時看「氧化程度」與「成品外觀／湯色」。先掌握這兩個座標，後面的茶類就會清楚很多。
                </SectionTitle>
                <div className="grid gap-5 lg:grid-cols-2">
                    {CLASSIFICATION_CARDS.map((card) => (
                        <div key={card.title} className={`rounded-3xl border p-6 ${toneClass[card.tone]}`}>
                            <h3 className="text-xl font-extrabold">{card.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed opacity-80">{card.subtitle}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {card.items.map((item) => (
                                    <span key={item} className="rounded-full bg-white/80 px-4 py-2 text-sm font-bold shadow-sm">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="museum-panel px-7 py-9 md:px-10">
                <SectionTitle eyebrow="02 · Oxidation Spectrum" title="從清香到熟香：發酵程度光譜">
                    臺灣特色茶以部分發酵茶最具代表性。發酵程度越高，通常由清香、花香，逐漸走向蜜香、熟果香與醇厚感。
                </SectionTitle>
                <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                    <div className="relative h-4 rounded-full bg-gradient-to-r from-emerald-500 via-amber-400 to-red-700 shadow-inner" />
                    <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {FERMENTATION_SPECTRUM.map((tea) => (
                            <div key={tea.name} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="font-extrabold text-stone-900">{tea.name}</span>
                                    <span className="rounded-full px-2.5 py-1 text-xs font-extrabold text-white" style={{ backgroundColor: tea.color }}>{tea.pct}%</span>
                                </div>
                                <div className="mt-3 h-2 rounded-full bg-white">
                                    <div className="h-full rounded-full" style={{ width: `${Math.max(tea.pct, 6)}%`, backgroundColor: tea.color }} />
                                </div>
                                <p className="mt-3 text-sm font-semibold text-stone-600">{tea.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="museum-panel px-7 py-9 md:px-10">
                <SectionTitle eyebrow="03 · Visual Guide" title="先看畫面：四個關鍵製程印象">
                    製茶不是抽象名詞。把萎凋、做青、殺菁與揉捻先變成畫面，學生再回頭看流程會更容易理解。
                </SectionTitle>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {PROCESS_VISUALS.map((visual) => (
                        <article key={visual.title} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
                            <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                                <img
                                    src={visual.src}
                                    alt={visual.title}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-extrabold text-stone-950">{visual.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-stone-600">{visual.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="museum-panel px-7 py-9 md:px-10">
                <SectionTitle eyebrow="04 · Six Tea Processes" title="六大茶類加工製程，一次展開">
                    每一類茶都有自己的關鍵工序。以下先看完整卡片，再用按鈕挑選單一茶類做課堂講解。
                </SectionTitle>
                <div className="grid gap-5 lg:grid-cols-2">
                    {SIX_TEA_METHODS.map((tea) => <ProcessCard key={tea.id} tea={tea} />)}
                </div>
                <div className="mt-7 rounded-3xl border border-amber-200 bg-amber-50 p-5">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {SIX_TEA_METHODS.map((tea) => (
                            <button
                                key={tea.id}
                                type="button"
                                onClick={() => setActiveSixTea(tea.id)}
                                className={`rounded-full px-4 py-2 text-sm font-extrabold transition ${activeSixTea === tea.id ? 'bg-stone-900 text-white shadow-md' : 'bg-white text-stone-700 hover:bg-stone-100'}`}
                            >
                                {tea.label}
                            </button>
                        ))}
                    </div>
                    {activeTea ? (
                        <div className="rounded-2xl bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Sparkles size={20} className="text-amber-600" />
                                <h3 className="text-xl font-extrabold text-stone-950">課堂聚焦：{activeTea.label}</h3>
                            </div>
                            <p className="mt-3 text-[17px] leading-relaxed text-stone-700">{activeTea.note}</p>
                        </div>
                    ) : null}
                </div>
            </section>

            <section className="museum-panel px-7 py-9 md:px-10">
                <SectionTitle eyebrow="05 · Taiwan Tea Families" title="臺灣特色茶六大茶系">
                    臺灣茶的特色不只在茶名，而在風土、品種與工藝組合。這一區可作為學生認識臺灣茶的總表。
                </SectionTitle>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {TAIWAN_TEA_TYPES.map((tea, index) => (
                        <article key={tea.label} className={`rounded-3xl border p-5 shadow-sm ${toneClass[tea.color]}`}>
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-lg font-extrabold shadow-sm">{index + 1}</div>
                                <div>
                                    <h3 className="text-lg font-extrabold">{tea.label}</h3>
                                    <p className="mt-1 text-sm font-bold opacity-80">代表：{tea.repr}</p>
                                    <p className="mt-3 text-sm leading-relaxed opacity-85">{tea.feature}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="museum-panel px-7 py-9 md:px-10">
                <SectionTitle eyebrow="06 · Processing Purpose" title="常見製程目的：把動作和風味連起來">
                    這裡改為直接展開，讓學生不用一直點開收合；上課時也比較容易投影講解。
                </SectionTitle>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {PROCESS_STEPS.map((step) => {
                        const Icon = step.icon;
                        return (
                            <article key={step.title} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-extrabold text-stone-950">{step.title}</h3>
                                        <div className="text-xs font-extrabold tracking-[0.16em] text-amber-700">{step.tag}</div>
                                    </div>
                                </div>
                                <p className="mt-4 text-[15px] leading-relaxed text-stone-650">{step.body}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="museum-panel px-7 py-9 md:px-10">
                <SectionTitle eyebrow="07 · Flowchart" title="臺灣特色茶加工製程圖">
                    保留原本的互動流程圖，作為進階對照。前面先建立觀念，最後再用流程圖整合。
                </SectionTitle>
                <div className="mb-5 flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-900">
                    <CheckCircle2 size={18} />
                    建議上課順序：先講六大茶類流程，再回到這張圖比較臺灣特色茶差異。
                </div>
                <TeaProcessFlowChart />
            </section>
        </div>
    );
};

export default TeaProcessIntro;

