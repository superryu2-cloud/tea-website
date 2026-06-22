import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, Leaf, Sprout, Dna, Mountain, Sparkles, Flower, Droplets, MapPin, Award, GitBranch, Sun, Users, Beaker } from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import ImageLightbox from '../../components/ui/ImageLightbox';

const IMG = '/images';

/* ──────────────────────────────────────────
   主元件：崇華書院 第06堂 — 認識茶樹品種
   ────────────────────────────────────────── */
export default function ChonghuaChapter06() {
    const TOC = useMemo(() => [
        { id: 'ch06-intro', label: '課程簡介' },
        { id: 'ch06-why', label: '為什麼要懂品種？' },
        { id: 'ch06-bigsmall', label: '大葉種 vs 小葉種' },
        { id: 'ch06-origin', label: '台灣品種三大來源' },
        { id: 'ch06-breeding', label: '育種的兩條路' },
        { id: 'ch06-411', label: '四大十一小口訣' },
        { id: 'ch06-stars', label: '明星品種介紹' },
        { id: 'ch06-terroir', label: '風土的影響' },
        { id: 'ch06-match', label: '品種 × 工藝配對' },
        { id: 'ch06-history', label: '品種命名簡史' },
        { id: 'ch06-future', label: '未來之星' },
        { id: 'ch06-summary', label: '帶走的觀念' },
    ], []);

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
    }, [TOC]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="flex gap-8 font-sans">
            {/* ── 側邊欄 TOC ── */}
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

            {/* ── 主要內容區 ── */}
            <div className="flex-1 min-w-0 space-y-12">
                <AcademySection
                    id="chonghua-06"
                    title="認識茶樹品種——一片葉子的身世之謎"
                    label="ACADEMY · CHONGHUA · CH06"
                    subtitle="搞懂品種，你就能預測一杯茶大概會是什麼味道"
                >
                    {/* ═══════════ 1. 課程簡介 ═══════════ */}
                    <AcademyContentBlock title="課程簡介" icon={BookOpen} id="ch06-intro">
                        {/* Hero Banner */}
                        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl relative group">
                            <ImageLightbox
                                src={`${IMG}/cultivars/bg_plantation.png`}
                                alt="台灣茶園"
                                className="block w-full h-[280px] md:h-[380px] overflow-hidden"
                                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100 shadow-md">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Dna size={120} className="text-emerald-500" />
                            </div>
                            <div className="relative z-10">
                                <p className="text-[19px] leading-relaxed text-stone-800 font-medium">
                                    上一堂課我們學了「氧化」—— 知道了製茶師可以控制氧化程度來決定做出什麼茶。
                                    但你有沒有想過：<strong>為什麼同樣做成烏龍茶，有的有奶香、有的有花香、有的有果蜜香？</strong>
                                </p>
                                <p className="text-[17px] leading-relaxed text-stone-700 mt-4">
                                    答案就在<strong className="text-emerald-800">「品種」</strong>裡。
                                    品種就像人的基因一樣，決定了茶葉的「先天體質」——它的香氣底盤、化學成分、適合什麼工藝。
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="px-4 py-2 bg-emerald-100 rounded-lg border border-emerald-200 text-emerald-900 font-bold text-sm">
                                        講師：嚴白強
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 2. 為什麼要懂品種？ ═══════════ */}
                    <AcademyContentBlock title="為什麼要懂品種？" icon={Sparkles} id="ch06-why">
                        <div className="relative my-6 px-4">
                            <div className="absolute -left-2 top-0 text-8xl text-emerald-200 font-serif leading-none opacity-50">"</div>
                            <blockquote className="relative pl-12 pr-8 py-6 bg-gradient-to-r from-emerald-50 to-transparent rounded-r-2xl border-l-4 border-emerald-500">
                                <p className="text-[19px] italic text-stone-700 leading-relaxed">
                                    品種決定了茶葉的「香氣底盤」與「內含物基礎」。想要特定的風味，首先要選對品種。
                                </p>
                            </blockquote>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <h4 className="text-[20px] font-bold text-stone-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                                用人來比喻
                            </h4>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/50 text-center">
                                    <div className="text-3xl mb-3">🧬</div>
                                    <h6 className="font-bold text-[17px] text-stone-900 mb-2">品種 = 基因</h6>
                                    <p className="text-[17px] text-stone-600">
                                        天生的體質，決定了這片葉子<strong>有什麼潛力</strong>
                                    </p>
                                </div>
                                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50 text-center">
                                    <div className="text-3xl mb-3">🏔️</div>
                                    <h6 className="font-bold text-[17px] text-stone-900 mb-2">風土 = 成長環境</h6>
                                    <p className="text-[17px] text-stone-600">
                                        種在哪裡，決定了<strong>潛力能發揮多少</strong>
                                    </p>
                                </div>
                                <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100/50 text-center">
                                    <div className="text-3xl mb-3">🔧</div>
                                    <h6 className="font-bold text-[17px] text-stone-900 mb-2">工藝 = 後天訓練</h6>
                                    <p className="text-[17px] text-stone-600">
                                        怎麼做，決定了<strong>最終味道走向</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                <strong>💡 一句話記住：</strong>
                                <strong>品種是原料、風土是舞台、工藝是導演。</strong>三者缺一不可，才能演出一杯好茶。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 3. 大葉種 vs 小葉種 ═══════════ */}
                    <AcademyContentBlock title="先分兩隊：大葉種 vs 小葉種" icon={Leaf} id="ch06-bigsmall">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                全世界的茶樹，<strong>最基本的分類</strong>就是分成「大葉種」和「小葉種」。
                                它們的葉子大小不同，裡面的化學成分也不一樣，所以適合做的茶也完全不同。
                            </p>
                        </div>

                        {/* 葉子比較圖 */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-stone-100 bg-stone-50 p-2">
                            <ImageLightbox
                                src={`${IMG}/tea-talk/ch01-leaf-comparison.png`}
                                alt="大葉種與小葉種比較"
                                className="block w-full h-auto overflow-hidden rounded-xl"
                                imgClassName="w-full h-auto object-cover max-h-[360px] mx-auto"
                            />
                            <p className="text-center text-[14px] text-stone-500 mt-2 font-medium">大葉種（左）葉片寬大厚實；小葉種（右）葉片小巧細緻</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Leaf size={24} className="text-red-600" />
                                    <div>
                                        <h5 className="text-[19px] font-bold text-red-900">大葉種</h5>
                                        <p className="text-xs text-red-600 italic">Camellia sinensis var. assamica</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-[17px] text-stone-700">
                                        <span className="text-red-500 font-bold shrink-0">▸</span>
                                        <span><strong>兒茶素（多酚）含量高</strong>：茶湯口感強勁厚實</span>
                                    </li>
                                    <li className="flex gap-2 text-[17px] text-stone-700">
                                        <span className="text-red-500 font-bold shrink-0">▸</span>
                                        <span><strong>適合做：</strong>紅茶（全發酵）</span>
                                    </li>
                                    <li className="flex gap-2 text-[17px] text-stone-700">
                                        <span className="text-red-500 font-bold shrink-0">▸</span>
                                        <span><strong>代表：</strong>阿薩姆、台茶 18 號（紅玉）</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Sprout size={24} className="text-emerald-600" />
                                    <div>
                                        <h5 className="text-[19px] font-bold text-emerald-900">小葉種</h5>
                                        <p className="text-xs text-emerald-600 italic">Camellia sinensis var. sinensis</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-[17px] text-stone-700">
                                        <span className="text-emerald-500 font-bold shrink-0">▸</span>
                                        <span><strong>兒茶素含量低、胺基酸較高</strong>：口感細緻清爽</span>
                                    </li>
                                    <li className="flex gap-2 text-[17px] text-stone-700">
                                        <span className="text-emerald-500 font-bold shrink-0">▸</span>
                                        <span><strong>適合做：</strong>綠茶、包種茶、烏龍茶</span>
                                    </li>
                                    <li className="flex gap-2 text-[17px] text-stone-700">
                                        <span className="text-emerald-500 font-bold shrink-0">▸</span>
                                        <span><strong>代表：</strong>青心烏龍、金萱、翠玉</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="overflow-x-auto rounded-2xl shadow-lg border border-stone-200 mb-8">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
                                        <th className="px-6 py-4 text-[17px] font-bold">比一比</th>
                                        <th className="px-6 py-4 text-[17px] font-bold">大葉種 🍂</th>
                                        <th className="px-6 py-4 text-[17px] font-bold">小葉種 🌿</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr className="bg-white hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">兒茶素</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">高（苦澀度較顯、茶氣足）</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">低（滋味細膩、清爽）</td>
                                    </tr>
                                    <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">茶湯特性</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">收斂性強、濃度高、具厚度</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">清甜、注重高雅香氣</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">最適合</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">紅茶</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">綠茶、包種、烏龍</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-stone-100 p-5 rounded-xl border border-stone-200">
                            <p className="text-[17px] text-stone-700">
                                <strong>📌 簡單記：</strong>大葉種 → 紅茶；小葉種 → 烏龍茶和綠茶。
                                台灣的烏龍茶之所以世界第一，就是因為台灣有非常多優秀的小葉種品種。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 4. 台灣品種三大來源 ═══════════ */}
                    <AcademyContentBlock title="台灣茶樹品種從哪裡來？" icon={GitBranch} id="ch06-origin">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                台灣今天能有這麼多種茶，是因為品種來源非常多元——
                                有祖先帶來的、有外國引進的、還有科學家培育的。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-amber-500">
                                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-2xl">🚢</div>
                                <h5 className="text-[19px] font-bold text-stone-900 mb-3">1. 地方品種</h5>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    清代先民從福建帶來<strong>種子</strong>種植，經過幾百年的自然變異和農民篩選，
                                    留下了青心烏龍、鐵觀音等經典老品種。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-blue-500">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">🌍</div>
                                <h5 className="text-[19px] font-bold text-stone-900 mb-3">2. 國外引進</h5>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    日治時期從印度引進<strong>阿薩姆大葉種</strong>，帶動了台灣紅茶產業。
                                    也有從中國引進的黃柑、大冇等品種。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-emerald-500">
                                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-2xl">🔬</div>
                                <h5 className="text-[19px] font-bold text-stone-900 mb-3">3. 科學育種</h5>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    茶改場透過<strong>人工雜交</strong>和<strong>單株選拔</strong>，
                                    培育出「台茶」系列，如金萱、翠玉、紅玉等明星品種。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-2xl border-l-4 border-emerald-500">
                            <p className="text-[17px] text-stone-700">
                                <strong>💡 小知識：</strong>茶樹有一個特別的生物特性——<strong>「自交不親和」</strong>，
                                意思是自己的花粉沒辦法幫自己受精，必須靠風或昆蟲帶來別人的花粉。
                                所以每棵茶樹種子長出來的小苗，基因都不太一樣！為了品質穩定，
                                人們會用<strong>「扦插」（剪枝條插土裡）</strong>來複製優良品種。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 5. 育種的兩條路 ═══════════ */}
                    <AcademyContentBlock title="育種的兩條路" icon={Dna} id="ch06-breeding">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                茶改場的科學家是怎麼「發明」新品種的？其實主要就是兩條路：
                                <strong>「雜交育種」</strong>和<strong>「單株選拔」</strong>。
                            </p>
                        </div>

                        {/* 育種方法圖 */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-stone-100 bg-stone-50 p-2">
                            <ImageLightbox
                                src={`${IMG}/tea-talk/ch01-breeding-methods.png`}
                                alt="茶樹育種方法"
                                className="block w-full h-auto overflow-hidden rounded-xl"
                                imgClassName="w-full h-auto object-cover max-h-[360px] mx-auto"
                            />
                            <p className="text-center text-[14px] text-stone-500 mt-2 font-medium font-sans">茶樹育種的兩大核心途徑</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-indigo-200 rounded-lg"><Dna size={20} className="text-indigo-700" /></div>
                                    <h5 className="text-[19px] font-bold text-indigo-900 font-sans">雜交育種</h5>
                                </div>
                                <p className="text-[17px] text-stone-700 leading-relaxed font-sans mb-4">
                                    就像「配對」——科學家挑選兩棵特性不同的茶樹當爸媽，讓它們的花粉結合，
                                    生出帶有雙方優點的「混血兒」。
                                </p>
                                <div className="space-y-2">
                                    <div className="bg-white p-3 rounded-xl border border-indigo-100">
                                        <p className="text-[17px] text-stone-700 font-sans">
                                            <strong className="text-indigo-700">天然雜交：</strong>
                                            靠風或昆蟲自然授粉，爸爸是誰不確定。
                                            <span className="text-stone-500 text-[14px]">（台茶 21、23 號）</span>
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-indigo-100">
                                        <p className="text-[17px] text-stone-700 font-sans">
                                            <strong className="text-indigo-700">人工雜交：</strong>
                                            爸媽都確定，科學家刻意配對。
                                            <span className="text-stone-500 text-[14px]">（台茶 12 金萱、18 紅玉、22 沁玉）</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-teal-50 p-6 rounded-2xl border-2 border-teal-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-teal-200 rounded-lg"><Sparkles size={20} className="text-teal-700" /></div>
                                    <h5 className="text-[19px] font-bold text-teal-900 font-sans">單株選拔</h5>
                                </div>
                                <p className="text-[17px] text-stone-700 leading-relaxed font-sans mb-4">
                                    就像「選秀」——從一大片茶園裡，找到那棵特別優秀的，
                                    把它扦插複製出來。不需要雜交，而是從現有的基因裡挑最好的。
                                </p>
                                <div className="space-y-2">
                                    <div className="bg-white p-3 rounded-xl border border-teal-100">
                                        <p className="text-[17px] text-stone-700 font-sans">
                                            <strong className="text-teal-700">案例：</strong>
                                            台茶 8 號就是從阿薩姆群體中選出的「優等生」
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-teal-100">
                                        <p className="text-[17px] text-stone-700 font-sans">
                                            <strong className="text-teal-700">案例：</strong>
                                            台茶 24 號是從台灣原生山茶中選拔出來的
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-teal-50 p-5 rounded-2xl border-l-4 border-indigo-500">
                            <p className="text-[17px] text-stone-700 font-sans">
                                <strong>💡 一句話記：</strong>
                                雜交 = 配對生小孩（混血優勢）；選拔 = 千里挑一（從現有裡選最好的）。
                                不管哪種方式，一個新品種從選育到正式命名，通常要花 <strong>15~20 年</strong>！
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 6. 四大十一小口訣 ═══════════ */}
                    <AcademyContentBlock title="產業口訣：「四大十一小」" icon={Award} id="ch06-411">
                        {/* 品種系譜圖 */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-stone-100 bg-stone-50 p-2">
                            <ImageLightbox
                                src={`${IMG}/tea-talk/ch01-cultivar-tree.png`}
                                alt="台灣茶樹品種系譜"
                                className="block w-full h-auto overflow-hidden rounded-xl"
                                imgClassName="w-full h-auto object-cover max-h-[400px] mx-auto"
                            />
                            <p className="text-center text-[14px] text-stone-500 mt-2 font-medium">台灣茶樹品種系譜：大葉種與小葉種的血緣關係</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                台灣的茶業，有一個方便記憶的口訣：<strong>「四大十一小」</strong>。
                                意思是 <strong>4 個大葉種（紅茶體系）</strong>加上 <strong>11 個小葉種（烏龍/綠茶體系）</strong>，
                                這 15 個品種撐起了台灣茶的半壁江山。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* 四大葉種 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-bold border border-red-200 w-fit">
                                    <Sun size={16} /> 四大葉種（紅茶體系）
                                </div>
                                {[
                                    { name: '阿薩姆 (Assam)', desc: '早年從印度引進的地方種' },
                                    { name: '台茶 8 號', desc: '阿薩姆的優良選拔' },
                                    { name: '台茶 18 號（紅玉）⭐', desc: '肉桂 × 薄荷香，國際明星', highlight: true },
                                    { name: '台茶 21 號（紅韻）⭐', desc: '柚子花 × 果香，高階莊園', highlight: true },
                                ].map(item => (
                                    <div key={item.name} className={`flex items-center justify-between p-4 rounded-xl border-2 ${item.highlight ? 'border-red-300 bg-red-50 shadow-sm' : 'border-stone-100 bg-white'} hover:shadow-md transition-all`}>
                                        <span className="font-bold text-stone-900">{item.name}</span>
                                        <span className="text-sm text-stone-500 italic">{item.desc}</span>
                                    </div>
                                ))}
                            </div>

                            {/* 十一小葉種 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold border border-emerald-200 w-fit">
                                    <Flower size={16} /> 十一個小葉種（綠茶/烏龍體系）
                                </div>
                                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200">
                                    <div className="text-xs font-bold text-stone-400 uppercase mb-3 tracking-widest">經典地方種</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['青心烏龍', '青心大冇', '大葉烏龍', '硬枝紅心', '青心柑仔', '鐵觀音', '四季春'].map(tea => (
                                            <span key={tea} className="px-4 py-2 rounded-xl bg-white text-stone-800 text-[17px] font-bold border border-stone-200 shadow-sm">{tea}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                                    <div className="text-xs font-bold text-emerald-400 uppercase mb-3 tracking-widest">國家育成種</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['台茶 12（金萱）', '台茶 13（翠玉）', '台茶 17（白鷺）', '台茶 20（迎香）'].map(tea => (
                                            <span key={tea} className="px-4 py-2 rounded-xl bg-white text-emerald-900 text-[17px] font-bold border border-emerald-200 shadow-sm">{tea}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 6. 明星品種介紹 ═══════════ */}
                    <AcademyContentBlock title="認識明星品種" icon={Leaf} id="ch06-stars">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                不需要一次記住全部 15 個品種。先認識這幾個<strong>最常見、最重要</strong>的，
                                下次去茶行就能聽懂老闆在說什麼了！
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    name: '青心烏龍', badge: '產量之王 👑', color: 'emerald',
                                    facts: ['佔台灣茶產量 61%！', '清香、花香、鮮爽甘甜', '適合做高山茶、包種茶'],
                                    note: '從阿里山到梨山，只要是台灣高山茶，幾乎都是它。'
                                },
                                {
                                    name: '台茶 12 號（金萱）', badge: '奶香奇蹟 🥛', color: 'amber',
                                    facts: ['含有特殊芳香物質，帶天然奶香', '甜潤好入口，適合初學者', '可做包種、烏龍、甚至紅茶'],
                                    note: '注意：真正的金萱奶香是天然淡雅的，不是香精加出來的那種。'
                                },
                                {
                                    name: '青心大冇', badge: '東方美人的靈魂 🦗', color: 'orange',
                                    facts: ['桃竹苗丘陵區主力品種', '多酚類豐富，耐蟲害', '被小綠葉蟬叮咬後產生獨特蜜香'],
                                    note: '東方美人茶必須用青心大冇，被小綠葉蟬咬過才能做！'
                                },
                                {
                                    name: '台茶 18 號（紅玉）', badge: '國際巨星 🌟', color: 'red',
                                    facts: ['大葉種，兒茶素豐富', '獨特的薄荷香 + 肉桂香', '台灣紅茶的國際代表'],
                                    note: '日月潭特產，是台灣野生山茶和緬甸大葉種的混血兒。'
                                },
                                {
                                    name: '鐵觀音', badge: '硬漢派 🔥', color: 'stone',
                                    facts: ['木柵地區代表品種', '內含物豐富，耐焙火', '獨特的「觀音韻」：熟果香、焦糖香'],
                                    note: '要做出正宗的木柵鐵觀音，非這個品種不可。'
                                },
                                {
                                    name: '四季春', badge: '勤勞王 💪', color: 'lime',
                                    facts: ['一年可採 6~7 次，產量驚人', '抗寒力強、香氣高揚', '喉韻較短，常用於手搖飲'],
                                    note: '主產於南投名間，是手搖茶店最愛用的品種之一。'
                                },
                            ].map(item => (
                                <div key={item.name} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                    <div className="h-2 bg-gradient-to-r" style={{ background: `linear-gradient(to right, var(--color-${item.color}-400, #94a3b8), var(--color-${item.color}-500, #64748b))` }}></div>
                                    <div className="p-6">
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <h5 className="text-[19px] font-bold text-stone-900">{item.name}</h5>
                                            <span className="text-sm font-bold px-3 py-1 bg-stone-100 rounded-full text-stone-600">{item.badge}</span>
                                        </div>
                                        <ul className="space-y-1 mb-3">
                                            {item.facts.map((f, i) => (
                                                <li key={i} className="flex gap-2 text-[17px] text-stone-700">
                                                    <span className="text-emerald-500 shrink-0">•</span>{f}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-[14px] text-stone-500 italic bg-stone-50 p-3 rounded-xl">{item.note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 7. 風土的影響 ═══════════ */}
                    <AcademyContentBlock title="同一品種，不同風土 = 不同味道" icon={Mountain} id="ch06-terroir">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                同樣的青心烏龍，種在平地和種在高山，味道完全不一樣！這就是法文說的 <strong>Terroir（風土）</strong>
                                —— 地理環境賦予農產品的獨特性格。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-5 mb-8">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                                <div className="text-3xl mb-3 text-center">⛰️</div>
                                <h5 className="font-bold text-blue-900 text-center mb-3">高海拔（1000m+）</h5>
                                <ul className="space-y-2 text-[17px] text-stone-700">
                                    <li className="flex gap-2"><span className="text-blue-500">•</span>溫差大、雲霧繚繞</li>
                                    <li className="flex gap-2"><span className="text-blue-500">•</span>生長慢 → 內含物豐富</li>
                                    <li className="flex gap-2"><span className="text-blue-500">•</span><strong>香氣高雅、甘醇耐泡</strong></li>
                                    <li className="flex gap-2"><span className="text-blue-500">•</span>代表：大禹嶺、梨山、阿里山</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                                <div className="text-3xl mb-3 text-center">🌿</div>
                                <h5 className="font-bold text-green-900 text-center mb-3">中海拔（400~1000m）</h5>
                                <ul className="space-y-2 text-[17px] text-stone-700">
                                    <li className="flex gap-2"><span className="text-green-500">•</span>氣候適中、雨量充沛</li>
                                    <li className="flex gap-2"><span className="text-green-500">•</span>品質均衡、產量穩定</li>
                                    <li className="flex gap-2"><span className="text-green-500">•</span><strong>香氣與滋味平衡</strong></li>
                                    <li className="flex gap-2"><span className="text-green-500">•</span>代表：凍頂、杉林溪、鹿谷</li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                                <div className="text-3xl mb-3 text-center">☀️</div>
                                <h5 className="font-bold text-amber-900 text-center mb-3">低海拔（400m以下）</h5>
                                <ul className="space-y-2 text-[17px] text-stone-700">
                                    <li className="flex gap-2"><span className="text-amber-500">•</span>溫暖、日照充足</li>
                                    <li className="flex gap-2"><span className="text-amber-500">•</span>生長快速、產量高</li>
                                    <li className="flex gap-2"><span className="text-amber-500">•</span><strong>香氣直接、滋味明快</strong></li>
                                    <li className="flex gap-2"><span className="text-amber-500">•</span>代表：文山包種、木柵鐵觀音</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-2xl border-l-4 border-emerald-500">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                <strong>💡 這也是為什麼「高山茶」比較貴：</strong>
                                高海拔日夜溫差大，茶樹生長緩慢，內含物質更濃縮，但產量也少很多。
                                物以稀為貴，加上風味確實更細緻，所以價格自然比較高。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 8. 品種 × 工藝配對 ═══════════ */}
                    <AcademyContentBlock title="品種 × 工藝 = 最佳配對" icon={Beaker} id="ch06-match">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                品種不只決定風味，也決定了適合什麼<strong>工藝</strong>。
                                就像食材一樣——牛排適合煎烤、魚肉適合清蒸，選錯做法就糟蹋了好料。
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            {[
                                { variety: '青心烏龍', craft: '清香型工藝', detail: '輕發酵（15-25%）、不焙火或輕焙，保留清新花香', emoji: '🌸' },
                                { variety: '鐵觀音品種', craft: '重焙火工藝', detail: '中重度發酵（30-40%）+ 多次焙火，產生獨特「觀音韻」', emoji: '🔥' },
                                { variety: '青心大冇', craft: '東方美人工藝', detail: '重度發酵（60-75%），需要小綠葉蟬叮咬產生蜜香', emoji: '🦗' },
                                { variety: '大葉種', craft: '全發酵紅茶', detail: '發酵 90-100%，兒茶素轉化為茶黃素/茶紅素', emoji: '🍂' },
                            ].map(item => (
                                <div key={item.variety} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all">
                                    <div className="text-2xl shrink-0">{item.emoji}</div>
                                    <div>
                                        <div className="flex flex-wrap gap-2 items-center mb-2">
                                            <span className="font-bold text-[17px] text-stone-900">{item.variety}</span>
                                            <span className="text-stone-400">×</span>
                                            <span className="font-bold text-[17px] text-emerald-700">{item.craft}</span>
                                        </div>
                                        <p className="text-[17px] text-stone-600">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-stone-100 p-5 rounded-xl border border-stone-200">
                            <h5 className="font-bold text-stone-800 mb-2 text-[17px]">🧭 工藝選擇的原則</h5>
                            <ul className="space-y-2 text-[17px] text-stone-700">
                                <li className="flex gap-2"><span className="text-emerald-500">✓</span> <strong>順應品種特性：</strong>不要強迫品種做它不擅長的事</li>
                                <li className="flex gap-2"><span className="text-emerald-500">✓</span> <strong>揚長避短：</strong>用工藝放大品種的優點</li>
                                <li className="flex gap-2"><span className="text-emerald-500">✓</span> <strong>也可以創新：</strong>在理解基礎上嘗試（如金萱紅茶）</li>
                            </ul>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 10. 品種命名簡史 ═══════════ */}
                    <AcademyContentBlock title="品種命名簡史" icon={BookOpen} id="ch06-history">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                你有沒有好奇：為什麼有些茶叫「青心烏龍」、有些叫「台茶 18 號」？
                                這其實反映了<strong>不同時代的命名方式</strong>。
                            </p>
                        </div>

                        <div className="space-y-6 relative before:absolute before:left-[17px] before:top-6 before:bottom-6 before:w-1 before:bg-gradient-to-b before:from-stone-300 before:via-amber-400 before:to-emerald-500 before:rounded-full mb-8">
                            <div className="relative pl-14">
                                <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-stone-500 border-4 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">古</div>
                                <h5 className="text-[19px] font-bold text-stone-900 font-sans">清代至日治初期</h5>
                                <p className="text-[17px] text-stone-600 leading-relaxed font-sans mt-1">
                                    用植株的<strong>外觀特徵</strong>來命名——看顏色、看形狀、看產地。
                                    所以叫「青心」（嫩芽偏青）、「紅心」（嫩芽帶紅）、「大冇」（葉片較大）、
                                    「柑仔」（帶有柑橘類清香）。
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {['青心烏龍', '青心大冇', '硬枝紅心', '黃柑'].map(t => (
                                        <span key={t} className="px-3 py-1 bg-stone-100 rounded-lg text-stone-700 text-[14px] font-bold font-sans">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative pl-14">
                                <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-amber-500 border-4 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">中</div>
                                <h5 className="text-[19px] font-bold text-stone-900 font-sans">系統研發時期（台茶 1~11 號）</h5>
                                <p className="text-[17px] text-stone-600 leading-relaxed font-sans mt-1">
                                    茶改場開始用<strong>「台茶 + 編號」</strong>的方式命名。
                                    這個時期主要針對綠茶和紅茶的適製性進行選育，研發週期非常長，
                                    一個品種從選育到命名要花十幾二十年。
                                </p>
                            </div>

                            <div className="relative pl-14">
                                <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-emerald-600 border-4 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">今</div>
                                <h5 className="text-[19px] font-bold text-stone-900 font-sans">現代品種權時期（台茶 12 號至今）</h5>
                                <p className="text-[17px] text-stone-600 leading-relaxed font-sans mt-1">
                                    育種重點轉向烏龍、包種等高經濟價值茶類。台茶 12 號（金萱）首創「奶香」奇蹟，
                                    開啟了品種明星化的時代。現在新品種還會取<strong>「別名」</strong>方便消費者記憶——
                                    紅玉、翠玉、迎香、紅韻⋯⋯都是。
                                </p>
                                <p className="text-[17px] text-stone-600 leading-relaxed font-sans mt-2">
                                    目前台茶 19、20、22、25 號等均受<strong className="text-emerald-700">品種權法律保護</strong>，
                                    未經授權不能隨意繁殖販售。
                                </p>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 11. 未來之星 ═══════════ */}
                    <AcademyContentBlock title="未來之星：台茶 25 號" icon={Sparkles} id="ch06-future">
                        {/* 紫芽茶圖 */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-purple-100 bg-purple-50/30 p-2">
                            <ImageLightbox
                                src={`${IMG}/cultivars/purple_25.png`}
                                alt="台茶25號紫芽茶"
                                className="block w-full h-auto overflow-hidden rounded-xl"
                                imgClassName="w-full h-auto object-cover max-h-[360px] mx-auto"
                            />
                            <p className="text-center text-[14px] text-stone-500 mt-2 font-medium font-sans">台茶 25 號的嫩芽帶有天然紫紅色</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                台茶 25 號是目前茶界最受矚目的「新星」——它的嫩芽和嫩葉是<strong>天然紫紅色</strong>的！
                                這不是染色，而是因為它含有非常高濃度的<strong className="text-purple-700">花青素（Anthocyanins）</strong>。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200">
                                <h5 className="text-[19px] font-bold text-purple-900 mb-3 font-sans">🧬 身世背景</h5>
                                <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                    源自「緬甸大葉種」的天然雜合種。在茶改場歷經多年觀察、品評，
                                    最終以獨特的紫芽特性和優異的抗氧化能力脫穎而出。
                                </p>
                            </div>
                            <div className="bg-violet-50 p-6 rounded-2xl border-2 border-violet-200">
                                <h5 className="text-[19px] font-bold text-violet-900 mb-3 font-sans">🧪 化學魔法</h5>
                                <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                    花青素對 <strong>pH 值極度敏感</strong>。泡好的茶湯加入幾滴檸檬汁，
                                    顏色會從淡紫變成<strong className="text-pink-600">亮粉紅色</strong>！
                                    這不只好看，還代表了豐富的天然抗氧化物質。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-2xl border-l-4 border-purple-500">
                            <p className="text-[17px] text-stone-700 font-sans">
                                <strong>💡 課堂彩蛋：</strong>
                                下次如果有機會喝到台茶 25 號，可以試試加幾滴檸檬汁——看它「變色」！
                                這就是花青素在不同酸鹼值下的化學反應。科學，也可以很好玩 🎨
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 12. 帶走的觀念 ═══════════ */}
                    <AcademyContentBlock title="今天帶走的三個觀念" icon={BookOpen} id="ch06-summary">
                        <div className="space-y-6">
                            <div className="flex items-start gap-5 p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-400">
                                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white font-extrabold text-[22px] shrink-0 shadow-lg">1</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-2">品種 = 先天基因</h4>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        品種決定了茶葉的香氣底盤和化學成分。大葉種做紅茶、小葉種做烏龍，這是基因決定的。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-teal-50 rounded-2xl border-l-4 border-teal-400">
                                <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white font-extrabold text-[22px] shrink-0 shadow-lg">2</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-2">四大十一小</h4>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        記住「4 個大葉種（紅茶）+ 11 個小葉種（烏龍/綠茶）」的框架，
                                        就能快速理解台灣茶的品種版圖。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-400">
                                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white font-extrabold text-[22px] shrink-0 shadow-lg">3</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-2">品種 × 風土 × 工藝</h4>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        一杯好茶是三者合一的結果。品種提供基因、風土提供舞台、工藝提供手法。
                                        理解這個關係，你就更能欣賞每一杯茶的獨特性。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 結語公式 */}
                        <div className="mt-10 bg-gradient-to-r from-emerald-700 to-teal-700 p-8 rounded-2xl text-white text-center shadow-xl">
                            <p className="text-[14px] font-bold tracking-widest uppercase mb-3 text-emerald-200">記住這個公式</p>
                            <p className="text-[24px] md:text-[28px] font-extrabold tracking-wide">
                                品種 × 風土 × 工藝 = 風味
                            </p>
                            <p className="mt-3 text-[17px] text-emerald-100/80">
                                掌握了品種，你就掌握了預測茶味的第一把鑰匙 🔑
                            </p>
                        </div>
                    </AcademyContentBlock>

                </AcademySection>
            </div>
        </div>
    );
}
