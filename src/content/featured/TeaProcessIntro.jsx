import React, { useState } from 'react';
import {
    Beaker, Flame, Waves, Wind, Package,
    ArrowDown, ChevronDown, ChevronRight, BookOpen
} from 'lucide-react';
import TeaProcessFlowChart from './TeaProcessFlowChart';

// ── 發酵程度橫向光譜 ──────────────────────────────────────
const FERMENTATION_SPECTRUM = [
    { name: '白茶', pct: 10, color: '#e5e7eb', text: 'text-gray-700', bg: 'bg-gray-100', border: 'border-gray-300', dot: '#d1d5db', desc: '萎凋後輕度處理' },
    { name: '包種茶', pct: 15, color: '#d1fae5', text: 'text-emerald-800', bg: 'bg-emerald-50', border: 'border-emerald-300', dot: '#6ee7b7', desc: '8–25%，湯色淺黃' },
    { name: '高山烏龍', pct: 20, color: '#d1fae5', text: 'text-emerald-800', bg: 'bg-emerald-50', border: 'border-emerald-300', dot: '#6ee7b7', desc: '8–25%，清香清甜' },
    { name: '凍頂烏龍', pct: 28, color: '#fef9c3', text: 'text-yellow-800', bg: 'bg-yellow-50', border: 'border-yellow-300', dot: '#fde047', desc: '25–30%，焙火韻' },
    { name: '鐵觀音', pct: 40, color: '#fef3c7', text: 'text-amber-800', bg: 'bg-amber-50', border: 'border-amber-300', dot: '#fcd34d', desc: '約 40%，音韻醇厚' },
    { name: '東方美人', pct: 55, color: '#ffedd5', text: 'text-orange-800', bg: 'bg-orange-50', border: 'border-orange-300', dot: '#fdba74', desc: '50–60%，蜜香熟果' },
    { name: '臺灣紅茶', pct: 100, color: '#fee2e2', text: 'text-red-800', bg: 'bg-red-50', border: 'border-red-300', dot: '#fca5a5', desc: '全發酵，條形/碎形' },
];

// ── 六大茶類加工製程 ──────────────────────────────────────
const SIX_TEA_METHODS = [
    { id: 'green', label: '綠茶', badge: '不發酵', badgeColor: 'bg-emerald-600 text-white', steps: ['採摘茶菁', '蒸菁或炒菁', '揉捻', '乾燥'] },
    { id: 'yellow', label: '黃茶', badge: '不發酵', badgeColor: 'bg-lime-600 text-white', steps: ['採摘茶菁', '炒菁', '揉捻', '悶黃', '乾燥'] },
    { id: 'white', label: '白茶', badge: '部分發酵', badgeColor: 'bg-sky-600 text-white', steps: ['採摘茶菁', '長時間萎凋', '烘菁', '輕度揉捻', '乾燥'] },
    { id: 'oolong', label: '青茶', badge: '部分發酵', badgeColor: 'bg-amber-600 text-white', steps: ['採摘茶菁', '日光萎凋', '靜置與攪拌', '炒菁', '揉捻', '乾燥'] },
    { id: 'black', label: '紅茶', badge: '全發酵', badgeColor: 'bg-red-700 text-white', steps: ['採摘茶菁', '萎凋', '揉捻', '發酵氧化', '乾燥'] },
    { id: 'dark', label: '黑茶', badge: '後發酵', badgeColor: 'bg-stone-700 text-white', steps: ['採摘茶菁', '殺菁', '揉捻', '渥堆（微生物發酵）', '乾燥成黑毛茶', '蒸壓成形'] },
];

// ── 臺灣特色茶六大茶系 ─────────────────────────────────────
const TAIWAN_TEA_TYPES = [
    { id: 1, label: '臺灣綠茶', repr: '三峽碧螺春綠茶', color: 'bg-emerald-100 border-emerald-400 text-emerald-900' },
    { id: 2, label: '清香型條形包種茶', repr: '文山包種茶、南港包種茶', color: 'bg-teal-100 border-teal-400 text-teal-900' },
    { id: 3, label: '清香型球形烏龍茶', repr: '高山烏龍茶', color: 'bg-sky-100 border-sky-400 text-sky-900' },
    { id: 4, label: '焙香型球型烏龍茶', repr: '凍頂烏龍茶、鐵觀音茶、紅烏龍茶', color: 'bg-amber-100 border-amber-400 text-amber-900' },
    { id: 5, label: '東方美人茶', repr: '石碇及桃竹苗地區所產之白毫烏龍茶', color: 'bg-orange-100 border-orange-400 text-orange-900' },
    { id: 6, label: '臺灣紅茶', repr: '日月潭紅茶、小葉種紅茶、蜜香紅茶', color: 'bg-red-100 border-red-400 text-red-900' },
];

// ── 製程步驟說明 ─────────────────────────────────────────
const PROCESS_STEPS = [
    {
        id: 'wither',
        icon: Wind,
        title: '萎凋',
        color: 'bg-sky-50 border-sky-300 text-sky-800',
        iconColor: 'text-sky-500',
        body: '分為日光（熱風）萎凋及室內萎凋。藉由熱能使茶葉水分消散，促進化學反應產生特殊香氣及滋味。萎凋過程可使茶葉重量、體積、硬度降低。',
    },
    {
        id: 'stir',
        icon: Waves,
        title: '攪拌（浪菁）',
        color: 'bg-teal-50 border-teal-300 text-teal-800',
        iconColor: 'text-teal-500',
        body: '製作部分發酵茶時，初期藉由翻動使茶菁水分重新分配；後續藉由攪拌使茶葉細胞摩擦破損，增加多元酚氧化酶及兒茶素作用，進而控制茶葉發酵的程度。',
    },
    {
        id: 'fix',
        icon: Flame,
        title: '殺菁',
        color: 'bg-orange-50 border-orange-300 text-orange-800',
        iconColor: 'text-orange-500',
        body: '藉由熱破壞茶葉中酵素活性，並促使茶葉水分消散、葉片軟化，利於後續揉捻成形，並去除茶葉不良的菁味及穩定茶菁色澤及香氣。',
    },
    {
        id: 'rest',
        icon: BookOpen,
        title: '靜置回潤',
        color: 'bg-rose-50 border-rose-300 text-rose-800',
        iconColor: 'text-rose-500',
        body: '東方美人茶炒菁出鍋後，以濕布覆蓋，靜置回潤約 10~30 分鐘，使茶葉水分重新分布，避免揉捻時產生碎葉且易於成形，增加蜜香及熟果味。',
    },
    {
        id: 'roll',
        icon: Beaker,
        title: '揉捻',
        color: 'bg-amber-50 border-amber-300 text-amber-800',
        iconColor: 'text-amber-500',
        body: '使茶葉捲曲形成條狀，並破壞茶葉的細胞組織，使茶葉的汁液流出附著於表面，增加沖泡時的風味；在紅茶揉捻中促使多元酚氧化酶及兒茶素反應。',
    },
    {
        id: 'ferment2',
        icon: Beaker,
        title: '補足發酵',
        color: 'bg-red-50 border-red-300 text-red-800',
        iconColor: 'text-red-500',
        body: '紅茶揉捻後需將茶葉堆疊進行補足發酵，使多元酚氧化酶與兒茶素類充分反應，生成紅茶的色澤、風味及品質。',
    },
    {
        id: 'dry',
        icon: Flame,
        title: '乾燥',
        color: 'bg-stone-50 border-stone-300 text-stone-800',
        iconColor: 'text-stone-500',
        body: '以熱風去除茶葉中的水分，使其含水量降至 5% 以下，延長保存期限，並可停止發酵作用及其他生化反應，使品質固定。',
    },
    {
        id: 'hotroll',
        icon: Package,
        title: '熱團揉',
        color: 'bg-yellow-50 border-yellow-300 text-yellow-800',
        iconColor: 'text-yellow-600',
        body: '球形烏龍茶的關鍵步驟。將初乾後的茶葉加熱至 60~65℃，以布巾包覆再以束包機捲曲形成布球，置於平揉機下滾動，重複數次使茶葉逐漸捲曲成球狀。',
    },
    {
        id: 'roast',
        icon: Flame,
        title: '烘焙',
        color: 'bg-amber-100 border-amber-400 text-amber-900',
        iconColor: 'text-amber-700',
        body: '烘焙具有去除水分效果，有效延長茶葉貯藏壽命，並改善粗製茶普遍帶有之菁臭味和不良雜味，增加茶葉的特殊香氣及特色性。',
    },
];

// ── Accordion 元件 ────────────────────────────────────────
function Accordion({ title, icon: Icon, iconColor, color, body }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`rounded-2xl border-2 ${color} shadow-sm overflow-hidden`}>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`w-full flex items-center justify-between px-6 py-4 text-left hover:brightness-95 transition-all`}
            >
                <div className="flex items-center gap-3">
                    <Icon size={22} className={iconColor} />
                    <span className="font-bold text-[18px]">{title}</span>
                </div>
                {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {open && (
                <div className="px-6 pb-5 pt-1">
                    <p className="font-sans text-[17px] leading-relaxed opacity-90">{body}</p>
                </div>
            )}
        </div>
    );
}

// ── 主頁面元件 ────────────────────────────────────────────
const TeaProcessIntro = () => {
    const [activeSixTea, setActiveSixTea] = useState('green');
    const activeTea = SIX_TEA_METHODS.find(t => t.id === activeSixTea);

    return (
        <div className="space-y-14 pb-20 max-w-5xl mx-auto">
            {/* ── Hero 標題 ─────────────────────────────── */}
            <section className="museum-panel px-8 pt-10 pb-10 md:px-14 md:pt-14">
                <div className="museum-label mb-4">TAIWAN TEA · PROCESSING</div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4 tracking-tight">
                    臺灣特色茶分類及加工製程簡介
                </h1>
                <p className="text-[18px] text-stone-600 leading-relaxed max-w-3xl">
                    茶葉因生產加工程序及製程後品質特性差異，區分為不同系統。了解製程，能更深刻欣賞每種茶背後的工藝與風味成因。
                </p>
            </section>

            {/* ── Section 1：兩大分類系統 ──────────────── */}
            <section className="museum-panel px-8 py-10 md:px-12">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-1 bg-amber-500 rounded-full" />
                    <h2 className="text-2xl font-extrabold text-stone-900">一、茶葉加工製程簡介</h2>
                </div>

                <p className="text-[17px] text-stone-700 leading-relaxed mb-8">
                    茶葉主要可依兩種系統分類：
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-7 shadow-sm">
                        <div className="font-bold text-emerald-800 text-[17px] mb-2">（一）依發酵氧化程度</div>
                        <ul className="space-y-2 mt-3">
                            {['不發酵茶', '部分發酵茶', '全發酵茶'].map((t) => (
                                <li key={t} className="flex items-center gap-3 text-[17px] text-stone-700">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 p-7 shadow-sm">
                        <div className="font-bold text-amber-800 text-[17px] mb-2">（二）依成品外觀色澤及湯色</div>
                        <ul className="space-y-2 mt-3">
                            {['綠茶', '黃茶', '白茶', '青茶', '紅茶', '黑茶'].map((t) => (
                                <li key={t} className="flex items-center gap-3 text-[17px] text-stone-700">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 三大發酵程度說明 */}
                <div className="space-y-6">
                    {[
                        {
                            num: '1', title: '不發酵茶', badge: '以綠茶為主',
                            badgeColor: 'bg-emerald-100 text-emerald-800',
                            content: '一般製程為茶菁直接經殺菁，破壞茶葉內之酵素活性，而抑制酵素氧化作用。臺灣綠茶主要以北部為主要產區，如碧螺春及龍井等，顏色多呈現鮮綠色。'
                        },
                        {
                            num: '2', title: '全發酵茶', badge: '以紅茶為主',
                            badgeColor: 'bg-red-100 text-red-800',
                            content: '茶菁經適當萎凋失去水分後，進行揉捻破壞茶葉組織使茶葉內酵素釋出，調整適當相對濕度，使酵素與茶葉內容物進行完整氧化反應。臺灣主要以中部南投為產區，以大葉種為主。'
                        },
                        {
                            num: '3', title: '部分發酵茶', badge: '臺灣最主要茶類',
                            badgeColor: 'bg-amber-100 text-amber-800',
                            content: '茶葉氧化程度介於不發酵茶與全發酵茶之間，為臺灣最主要生產的茶類，種類繁多。發酵程度從白茶約 10% 到東方美人茶約 50–60%，工藝變化豐富，首重香氣及滋味。'
                        }
                    ].map(({ num, title, badge, badgeColor, content }) => (
                        <div key={num} className="flex gap-5 items-start">
                            <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center font-extrabold text-lg shrink-0">
                                {num}
                            </div>
                            <div className="flex-1 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <h3 className="text-[20px] font-extrabold text-stone-900">{title}</h3>
                                    <span className={`text-[13px] font-bold px-3 py-1 rounded-full ${badgeColor}`}>{badge}</span>
                                </div>
                                <p className="text-[17px] text-stone-700 leading-relaxed">{content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Section 2：發酵光譜 ──────────────────── */}
            <section className="museum-panel px-8 py-10 md:px-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-1 bg-amber-500 rounded-full" />
                    <h2 className="text-2xl font-extrabold text-stone-900">部分發酵茶發酵程度比較</h2>
                </div>
                <p className="text-[17px] text-stone-600 mb-8">以未氧化之綠茶兒茶素含量定為 100%，依此估算各茶類的發酵程度。</p>

                {/* 光譜條 */}
                <div className="relative mb-10">
                    <div className="flex h-6 rounded-full overflow-hidden shadow-md mb-3">
                        <div className="bg-emerald-500 flex-none" style={{ width: '15%' }} />
                        <div className="bg-gradient-to-r from-emerald-400 to-yellow-400 flex-1" />
                        <div className="bg-red-600 flex-none" style={{ width: '12%' }} />
                    </div>
                    <div className="flex justify-between text-[13px] font-bold text-stone-500 mb-1">
                        <span>不發酵 0%</span>
                        <span className="text-amber-700">部分發酵</span>
                        <span>全發酵 100%</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {FERMENTATION_SPECTRUM.map((t) => (
                        <div key={t.name} className={`rounded-2xl border-2 p-5 ${t.bg} ${t.border} shadow-sm`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className={`font-extrabold text-[17px] ${t.text}`}>{t.name}</span>
                                <span className={`font-bold text-[13px] px-3 py-1 rounded-full bg-white/80 ${t.text}`}>
                                    {t.pct}%
                                </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-white/60 overflow-hidden mb-2">
                                <div
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{ width: `${t.pct}%`, backgroundColor: t.dot }}
                                />
                            </div>
                            <p className={`text-[14px] ${t.text} opacity-80`}>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Section 3：六大茶類製程 ──────────────── */}
            <section className="museum-panel px-8 py-10 md:px-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-1 bg-amber-500 rounded-full" />
                    <h2 className="text-2xl font-extrabold text-stone-900">（二）六大茶類加工製程</h2>
                </div>
                <p className="text-[17px] text-stone-600 mb-8">選擇茶類，查看其基本生產步驟。</p>

                {/* 選擇按鈕 */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {SIX_TEA_METHODS.map((t) => (
                        <button
                            key={t.id}
                            type="button"
                            onClick={() => setActiveSixTea(t.id)}
                            className={`px-4 py-2 rounded-full font-bold text-[15px] border-2 transition-all ${activeSixTea === t.id ? t.badgeColor + ' border-transparent ring-2 ring-stone-400' : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'}`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* 步驟流程 */}
                {activeTea && (
                    <div className="bg-white rounded-2xl border border-stone-200 p-7 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <span className={`px-3 py-1 rounded-full text-[13px] font-bold ${activeTea.badgeColor}`}>{activeTea.badge}</span>
                            <h3 className="text-[22px] font-extrabold text-stone-900">{activeTea.label}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {activeTea.steps.map((step, idx) => (
                                <React.Fragment key={step}>
                                    <div className="flex flex-col items-center">
                                        <div className="text-[13px] font-bold text-stone-500 mb-1">{idx + 1}</div>
                                        <div className="bg-stone-50 border border-stone-200 rounded-xl px-5 py-3 font-bold text-[16px] text-stone-800 shadow-sm">
                                            {step}
                                        </div>
                                    </div>
                                    {idx < activeTea.steps.length - 1 && (
                                        <ArrowDown size={18} className="text-stone-400 rotate-[-90deg] mt-5 shrink-0" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {/* ── Section 4：臺灣特色茶六大茶系 ──────────────── */}
            <section className="museum-panel px-8 py-10 md:px-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-1 bg-amber-500 rounded-full" />
                    <h2 className="text-2xl font-extrabold text-stone-900">臺灣特色茶六大茶系</h2>
                </div>
                <p className="text-[17px] text-stone-600 mb-8">
                    臺灣茶因風土氣候、栽植品種及加工方法的不同，發展出多元茶類，主要可分為八大特色茶類，並歸類為六大茶系。
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {TAIWAN_TEA_TYPES.map((t) => (
                        <div key={t.id} className={`rounded-2xl border-2 p-6 shadow-sm ${t.color}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-full bg-white/70 border border-current flex items-center justify-center font-extrabold text-lg">
                                    {t.id}
                                </div>
                                <h3 className="font-extrabold text-[17px]">{t.label}</h3>
                            </div>
                            <p className="text-[15px] opacity-80 leading-relaxed">代表：{t.repr}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Section 5：互動製程流程圖 ───────────── */}
            <section className="museum-panel px-8 py-10 md:px-12">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-1 bg-amber-500 rounded-full" />
                    <h2 className="text-2xl font-extrabold text-stone-900">臺灣特色茶加工製程圖</h2>
                </div>
                <p className="text-[14px] text-stone-400 mb-8">資料來源：行政院農業委員會茶業改良場　· 點擊各步驟可查看說明</p>
                <TeaProcessFlowChart />
            </section>

            {/* ── Section 6：製程步驟說明 ──────────────── */}
            <section className="museum-panel px-8 py-10 md:px-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-1 bg-amber-500 rounded-full" />
                    <h2 className="text-2xl font-extrabold text-stone-900">二、茶葉加工製程處理之目的</h2>
                </div>
                <p className="text-[17px] text-stone-600 mb-8">點擊各製程步驟了解其目的與說明。</p>

                <div className="space-y-4">
                    {PROCESS_STEPS.map((step) => (
                        <Accordion
                            key={step.id}
                            title={step.title}
                            icon={step.icon}
                            iconColor={step.iconColor}
                            color={step.color}
                            body={step.body}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TeaProcessIntro;
