import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BookOpen, Leaf, Sprout, Tag, AlertCircle, Layers, Coffee, Sun, Droplet, Mountain, Thermometer, Scale, Map as MapIcon, Compass, Trophy, Globe, Shield, Heart } from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import ImageLightbox from '../../components/ui/ImageLightbox';

const IMG = '/images/academy/chapter04';

export default function ChonghuaChapter04() {
    const TOC = [
        { id: 'ch04-preface', label: '序言' },
        { id: 'ch04-number-1', label: '數字「1」萬茶歸宗' },
        { id: 'ch04-number-2', label: '數字「2」血統之別' },
        { id: 'ch04-naming', label: '命名學' },
        { id: 'ch04-number-6', label: '數字「6」六大茶類' },
        { id: 'ch04-modern', label: '現代啟示錄' },
        { id: 'ch04-conclusion', label: '結語' },
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

    return (
        <div className="flex gap-8">
            {/* Left Sidebar TOC */}
            <nav className="hidden lg:block w-60 shrink-0">
                <div className="sticky top-28 museum-panel p-4 md:p-5 tool-surface shadow-sm" style={{ maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
                    <h3 className="text-lg font-extrabold text-stone-900 mb-3 px-2 border-l-4 border-emerald-600">
                        章節導覽
                    </h3>
                    <div className="space-y-1">
                        {TOC.map(({ id, label }) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`block w-full text-left rounded-xl px-4 py-3 transition-all duration-300 border box-border text-lg font-bold ${isActive
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

            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-12">
                <AcademySection
                    id="chonghua-04"
                    title="開啟你的風味冒險地圖 (1-2-6 體系指南)"
                    label="ACADEMY · CHONGHUA · CH04"
                    subtitle="掌握三個數字，在喝下第一口茶之前就能預判風格"
                >
                    {/* 1. 序言 */}
                    <AcademyContentBlock title="序言：解鎖茶世界的預測地圖" icon={Compass} id="ch04-preface">
                        {/* 仙俠風格 Hero Banner */}
                        <div className="mb-10 rounded-3xl overflow-hidden shadow-xl relative group">
                            <ImageLightbox
                                src={`${IMG}/hero_banner.png`}
                                alt="仙俠茶山 — 雲霧繚繞的奇峰與古茶樹"
                                className="block w-full h-[320px] md:h-[420px] overflow-hidden"
                                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/70 via-stone-900/30 to-transparent p-6 md:p-8 pointer-events-none">
                                <p className="text-[14px] font-bold tracking-widest uppercase text-white/60">Cinematic Xianxia Realism</p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100 shadow-md">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Compass size={120} className="text-emerald-500" />
                            </div>
                            <div className="relative z-10 prose prose-stone max-w-none">
                                <p className="text-[17px] leading-relaxed text-stone-800 font-medium font-sans">
                                    當你走在街頭，望向那些充滿木質裝潢、煙霧繚繞的傳統茶行，心中是否曾有過一絲遲疑？「裡面的茶到底標價合不合理？」、「進去會不會被玄學洗腦？」這種資訊不對稱帶來的「不確定性」，往往是現代人進入茶世界最大的心理障礙。傳統茶業常將簡單的感官體驗包裹在複雜的社交辭令中，讓人覺得門檻極高。
                                </p>
                                <p className="text-[17px] leading-relaxed text-stone-800 font-medium font-sans mt-4">
                                    回歸科學與邏輯。為大家設計了一套<strong className="text-emerald-800">「1-2-6」邏輯體系</strong>。這不只是知識框架，它更像是一套風味過濾與預測系統。掌握了這三個數字，你在喝下第一口茶之前，就能先從產地、品種與工藝中「預判」其風格特徵。這是一份戰略地圖，旨在幫你在浩瀚的茶名中定位，開啟一場清醒的風味冒險。
                                </p>
                            </div>
                        </div>

                        {/* 1-2-6 概覽卡片 */}
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                                <div className="p-8">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                                        <span className="text-emerald-700 text-[32px] font-extrabold group-hover:text-white transition-colors duration-300">1</span>
                                    </div>
                                    <h3 className="text-[22px] font-bold text-stone-900 mb-3">萬茶歸宗</h3>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        一棵茶樹的生命多樣性——全世界的茶來自同一種植物
                                    </p>
                                </div>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                                <div className="p-8">
                                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors duration-300">
                                        <span className="text-teal-700 text-[32px] font-extrabold group-hover:text-white transition-colors duration-300">2</span>
                                    </div>
                                    <h3 className="text-[22px] font-bold text-stone-900 mb-3">血統之別</h3>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        小葉種與大葉種——兩大核心血統決定茶湯底色
                                    </p>
                                </div>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                                <div className="p-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                                        <span className="text-blue-700 text-[32px] font-extrabold group-hover:text-white transition-colors duration-300">6</span>
                                    </div>
                                    <h3 className="text-[22px] font-bold text-stone-900 mb-3">工藝之巔</h3>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        六大茶類——氧化程度精確控制下的六種感官宇宙
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* 2. 數字「1」 */}
                    <AcademyContentBlock title="數字「1」：萬茶歸宗——一棵茶樹的生命多樣性" icon={Sprout} id="ch04-number-1">
                        {/* 古茶樹仙俠圖 */}
                        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl relative group">
                            <ImageLightbox
                                src={`${IMG}/tea_tree_origin.png`}
                                alt="萬茶歸宗 — 雲端古茶樹"
                                className="block w-full h-[280px] md:h-[360px] overflow-hidden"
                                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/60 to-transparent p-6 pointer-events-none">
                                <p className="text-white font-bold text-lg drop-shadow-md">萬茶歸宗</p>
                                <p className="text-white/80 text-sm drop-shadow">一切始於同一棵樹</p>
                            </div>
                        </div>

                        <div className="relative my-6 px-4">
                            <div className="absolute -left-2 top-0 text-8xl text-emerald-200 font-serif leading-none opacity-50">"</div>
                            <blockquote className="relative pl-12 pr-8 py-6 bg-gradient-to-r from-emerald-50 to-transparent rounded-r-2xl border-l-4 border-emerald-500">
                                <p className="text-[17px] italic text-stone-700 leading-relaxed font-sans">
                                    全世界的茶，本質上都來自於同一種植物——茶樹（Camellia sinensis）。
                                </p>
                            </blockquote>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                1753 年，植物學之父林奈曾根據標本錯誤地將茶分為綠茶樹與紅茶樹。直到 1848 年，英國植物獵人<strong>羅伯特·福瓊（Robert Fortune）</strong>深入中國茶區考察，才揭開了這個長達一世紀的誤解：決定茶湯顏色與風味的，並非樹種，而是人類的<strong className="text-emerald-800">「加工工藝」</strong>。
                            </p>
                        </div>

                        <h4 className="text-[20px] font-bold text-stone-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                            茶樹鮮葉的採摘標準與風味張力
                        </h4>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-emerald-400">
                                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                                    <Sprout size={24} className="text-emerald-700 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">單芽（極鮮嫩）</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    專注於極致的鮮爽感，是製作高等級名優茶（如金駿眉、銀針）的標配。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-teal-400">
                                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300">
                                    <Leaf size={24} className="text-teal-700 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">一芽一葉至二葉</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    隨成熟度提升，多酚類與氨基酸達到黃金平衡，滋味濃度與飽滿度更佳。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-amber-400">
                                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                                    <Layers size={24} className="text-amber-700 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">三葉、四葉（成熟葉）</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    雖外觀不如嫩芽，但因粗纖維、糖分與澱粉含量高，滋味更偏甜潤。近年流行的白茶「壽眉」即以此為精髓。
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                            <h4 className="text-[19px] font-bold text-emerald-900 mb-2 flex items-center gap-2 font-sans">
                                <Trophy size={18} className="text-emerald-700" />
                                顧問觀點
                            </h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                在專業評價體系中，「看茶製茶」才是核心智慧。並非越嫩越好，稀缺性不等於品質的唯一標準。成熟葉所展現的厚實與甜度，是嫩芽無法取代的魅力。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* 3. 數字「2」 */}
                    <AcademyContentBlock title="數字「2」：血統之別——小葉種與大葉種的風土表現" icon={Scale} id="ch04-number-2">
                        {/* 小葉種 vs 大葉種對比圖 */}
                        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl relative group">
                            <ImageLightbox
                                src={`${IMG}/two_varieties.png`}
                                alt="血統之別 — 小葉種與大葉種的風土對比"
                                className="block w-full h-[240px] md:h-[320px] overflow-hidden"
                                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/60 to-transparent p-6 pointer-events-none">
                                <p className="text-white font-bold text-lg drop-shadow-md">血統之別</p>
                                <p className="text-white/80 text-sm drop-shadow">小葉種 · 大葉種</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                儘管「萬茶歸宗」，但因環境演化，茶樹分化出了兩大核心血統，這決定了茶湯的「底色」。
                            </p>
                        </div>

                        {/* 比較表格 */}
                        <div className="overflow-x-auto rounded-2xl shadow-lg border border-stone-200 mb-8">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
                                        <th className="px-6 py-4 text-[17px] font-bold">特徵</th>
                                        <th className="px-6 py-4 text-[17px] font-bold">Sinensis / 小葉種</th>
                                        <th className="px-6 py-4 text-[17px] font-bold">Assamica / 大葉種</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr className="bg-white hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800 font-sans">拉丁語義</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700 font-sans">Sinensis 在拉丁文中意為「中國」</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700 font-sans">Assamica 指標本發現於印度阿薩姆</td>
                                    </tr>
                                    <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800 font-sans">主要產地</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700 font-sans">中國長江以南、日韓（較耐寒）</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700 font-sans">雲南、印度、熱帶地區（喜熱怕冷）</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800 font-sans">葉片形態</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700 font-sans">較小，質地細緻</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700 font-sans">巨大（成熟葉可達 10-30 公分）</td>
                                    </tr>
                                    <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800 font-sans">風味特徵</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700 font-sans">香氣高揚，滋味柔和細膩</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700 font-sans">內含物質豐富，滋味濃強耐泡</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-500">
                            <h4 className="text-[19px] font-bold text-amber-900 mb-3 flex items-center gap-2 font-sans">
                                <Trophy size={18} className="text-amber-700" />
                                專業洞察
                            </h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                以紅茶為例，小葉種製作的「祁門紅茶」以高昂的花果香聞名；而雲南大葉種製作的「滇紅」，其香氣或許內斂，但滋味極其厚實。在茶葉貿易中，滇紅被譽為<strong className="text-amber-900">「紅茶味精」</strong>，這並非貶義，而是指在調配茶（Blended Tea）時，只需加入少量滇紅，就能顯著提升整杯茶的濃度與骨架感。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* 4. 命名學 */}
                    <AcademyContentBlock title="命名學：破譯茶葉標籤的四種規律" icon={Tag} id="ch04-naming">
                        {/* 茶行古卷圖 */}
                        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl relative group">
                            <ImageLightbox
                                src={`${IMG}/naming_scroll.png`}
                                alt="命名學 — 古代茶行標籤與卷軸"
                                className="block w-full h-[220px] md:h-[280px] overflow-hidden"
                                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                中國茶名繁多，實則源於地域廣袤與歷史堆疊。掌握以下四種邏輯，能大幅降低你的認知門檻：
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-400 hover:bg-emerald-100 transition-colors duration-300">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg text-lg">1</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-1">地名 + 茶名</h4>
                                    <p className="text-[17px] text-stone-700">如「西湖龍井」、「武夷大紅袍」</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-teal-50 rounded-2xl border-l-4 border-teal-400 hover:bg-teal-100 transition-colors duration-300">
                                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg text-lg">2</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-1">外形組合</h4>
                                    <p className="text-[17px] text-stone-700">如「黃山毛峰」（狀似山峰）、「君山銀針」（狀似銀針）</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-cyan-50 rounded-2xl border-l-4 border-cyan-400 hover:bg-cyan-100 transition-colors duration-300">
                                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg text-lg">3</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-1">地名 + 品類</h4>
                                    <p className="text-[17px] text-stone-700">如「福鼎白茶」、「滇紅」（雲南紅茶）</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400 hover:bg-blue-100 transition-colors duration-300">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg text-lg">4</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-1">品種名直接命名</h4>
                                    <p className="text-[17px] text-stone-700">如「鴨屎香」（鳳凰單叢的品種名）</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-red-400">
                            <h4 className="text-[19px] font-bold text-red-900 mb-3 flex items-center gap-2 font-sans">
                                <AlertCircle size={18} className="text-red-600" />
                                特別警告
                            </h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                <strong>安吉白茶</strong>是一個經典的文字陷阱。它名字帶「白」，但因工藝屬於不發酵，且其「白化」源於茶樹品種在低溫下的生化表現，因此它在分類上是<strong className="text-red-800">綠茶</strong>而非白茶。這提醒我們：判斷茶類應關注「加工工藝」而非標籤文字。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* 5. 數字「6」 */}
                    <AcademyContentBlock title="數字「6」：工藝之巔——六大茶類的風味光譜" icon={Layers} id="ch04-number-6">
                        {/* 六大茶類光譜圖 */}
                        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl relative group">
                            <ImageLightbox
                                src={`${IMG}/six_tea_spectrum.png`}
                                alt="工藝之巔 — 六大茶類的風味光譜"
                                className="block w-full h-[260px] md:h-[340px] overflow-hidden"
                                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/60 to-transparent p-6 pointer-events-none">
                                <p className="text-white font-bold text-lg drop-shadow-md">工藝之巔</p>
                                <p className="text-white/80 text-sm drop-shadow">六種感官宇宙</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                1979 年由陳椽先生確立的六大茶類體系，現已成為 ISO 國際標準。透過對「氧化程度」的精確控制，人類在同一片葉子上創造了六種感官宇宙：
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* 綠茶 */}
                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                                            <span className="text-green-700 text-[20px] font-bold group-hover:text-white transition-colors">綠</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[22px] font-bold text-stone-900 mb-2">綠茶（不氧化）</h4>
                                            <p className="text-[17px] text-stone-700 leading-relaxed mb-3">
                                                核心在於<strong>「殺青」</strong>（高溫滅酶）。炒青（如龍井）帶豆香，烘青帶花香，曬青（如普洱生茶的原料）則保留了森林的原始氣息。
                                            </p>
                                            <div className="bg-green-50 px-4 py-2 rounded-lg inline-block">
                                                <p className="text-[15px] text-green-800 font-medium">💡 Tips：追求極致鮮爽、原汁原味者的首選。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 紅茶 */}
                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-red-400 to-rose-500"></div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors duration-300">
                                            <span className="text-red-700 text-[20px] font-bold group-hover:text-white transition-colors">紅</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[22px] font-bold text-stone-900 mb-2">紅茶（全氧化）</h4>
                                            <p className="text-[17px] text-stone-700 leading-relaxed mb-3">
                                                扮演<strong>「媒婆」</strong>的角色，促使多酚氧化酶與茶多酚「手牽手」充分反應，轉化為甜潤的紅湯紅葉。
                                            </p>
                                            <div className="bg-red-50 px-4 py-2 rounded-lg inline-block">
                                                <p className="text-[15px] text-red-800 font-medium">💡 Tips：適合喜歡甜感、溫潤口感的入門者。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 黃茶 */}
                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-yellow-500 transition-colors duration-300">
                                            <span className="text-yellow-700 text-[20px] font-bold group-hover:text-white transition-colors">黃</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[22px] font-bold text-stone-900 mb-2">黃茶（微發酵）</h4>
                                            <p className="text-[17px] text-stone-700 leading-relaxed mb-3">
                                                在綠茶基礎上增加<strong>「悶黃」</strong>工藝（類似煮菜蓋鍋蓋），使茶湯比綠茶更甘潤，帶有焦糖或鍋巴香。
                                            </p>
                                            <div className="bg-yellow-50 px-4 py-2 rounded-lg inline-block">
                                                <p className="text-[15px] text-yellow-800 font-medium">💡 Tips：想要綠茶的清香但腸胃較敏感者的折衷選擇。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 白茶 */}
                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-stone-300 to-stone-400"></div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-stone-500 transition-colors duration-300">
                                            <span className="text-stone-600 text-[20px] font-bold group-hover:text-white transition-colors">白</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[22px] font-bold text-stone-900 mb-2">白茶（輕微氧化）</h4>
                                            <p className="text-[17px] text-stone-700 leading-relaxed mb-3">
                                                僅需萎凋與乾燥。它被譽為茶界的<strong>「蛋炒飯」</strong>——看似最簡單，實則極考驗控溫控濕的精細度。高品質白茶應有花奶香且不苦不澀。
                                            </p>
                                            <div className="bg-stone-50 px-4 py-2 rounded-lg inline-block">
                                                <p className="text-[15px] text-stone-700 font-medium">💡 Tips：喜好自然、清甜與陳放潛力者的心頭好。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 烏龍茶 */}
                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-cyan-600 transition-colors duration-300">
                                            <span className="text-cyan-700 text-[20px] font-bold group-hover:text-white transition-colors">烏</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[22px] font-bold text-stone-900 mb-2">烏龍茶（半發酵）</h4>
                                            <p className="text-[17px] text-stone-700 leading-relaxed mb-3">
                                                工藝最繁複（青、揉、焙），跨度極大。從蘭花香調的鐵觀音到帶有焙火韻味的岩茶，風味層次最豐富。
                                            </p>
                                            <div className="bg-cyan-50 px-4 py-2 rounded-lg inline-block">
                                                <p className="text-[15px] text-cyan-800 font-medium">💡 Tips：適合追求香氣變化與口感深度的進階玩家。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 黑茶 */}
                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-stone-700 to-stone-800"></div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-stone-200 rounded-full flex items-center justify-center shrink-0 group-hover:bg-stone-700 transition-colors duration-300">
                                            <span className="text-stone-700 text-[20px] font-bold group-hover:text-white transition-colors">黑</span>
                                        </div>
                                        <div>
                                            <h4 className="text-[22px] font-bold text-stone-900 mb-2">黑茶（後發酵）</h4>
                                            <p className="text-[17px] text-stone-700 leading-relaxed mb-3">
                                                核心為<strong>「渥堆」</strong>發酵。它跳脫了傳統鮮爽審美，展現出獨特的<strong>木質調與沉香調</strong>。其「化物」（助消化）特性使其在邊疆高脂飲食區極受歡迎。
                                            </p>
                                            <div className="bg-stone-100 px-4 py-2 rounded-lg inline-block">
                                                <p className="text-[15px] text-stone-700 font-medium">💡 Tips：飽餐後、偏好沉穩厚重感者的最佳伴侶。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 風味公式 */}
                        <div className="mt-10 bg-gradient-to-r from-emerald-700 to-teal-700 p-8 rounded-2xl text-white text-center shadow-xl">
                            <p className="text-[14px] font-bold tracking-widest uppercase mb-3 text-emerald-200">風味公式</p>
                            <p className="text-[24px] md:text-[28px] font-extrabold tracking-wide">
                                品種 + 風土 + 工藝 + 沖泡
                            </p>
                            <p className="mt-3 text-[16px] text-emerald-100/80">一杯茶的風味，由這四個變數共同決定</p>
                        </div>
                    </AcademyContentBlock>

                    {/* 6. 現代啟示錄 */}
                    <AcademyContentBlock title="現代啟示錄：從玄學包圍到感官的勝利" icon={Globe} id="ch04-modern">
                        {/* 雲南古茶山圖 */}
                        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl relative group">
                            <ImageLightbox
                                src={`${IMG}/ancient_tea_mountain.png`}
                                alt="雲南古茶山 — 跨越百年的古樹茶"
                                className="block w-full h-[260px] md:h-[340px] overflow-hidden"
                                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/60 to-transparent p-6 pointer-events-none">
                                <p className="text-white font-bold text-lg drop-shadow-md">古茶山的奇蹟</p>
                                <p className="text-white/80 text-sm drop-shadow">跨越時空的基因</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                傳統茶文化常陷入「表演」的泥淖——特定的漢服、深奧的解說、玄幻的「回甘生津」。在這些場景中，茶成了一種被觀賞的陪襯。當初學者感受不到所謂的「茶氣」時，往往被歸咎於「你不懂」，這是不合邏輯的。
                            </p>
                            <p className="text-[17px] text-stone-700 leading-relaxed mt-4">
                                對比咖啡文化，它憑藉清晰的烘焙曲線與風味詞建立了信任。茶的標準化與去玄學化，是時代的必然。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-amber-400">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">袋泡茶的局限</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    雖然標準化，但袋泡茶過濾掉了原葉茶背後的「驚喜」。那種與土地連接的層次感，是工業製品無法複製的。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-emerald-400">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">雲南古茶山的奇蹟</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    在雲南，許多明清時期的古茶樹能保留至今，源於一個充滿「人文關懷」的意外——當年政府要求農民砍掉低產的古樹改種高產茶園時，生性浪漫的少數民族選擇了躲起來喝酒，這份「消極」幸運地保存了跨越時空的基因。
                                </p>
                            </div>
                        </div>

                        <div className="relative my-6 px-4">
                            <div className="absolute -left-2 top-0 text-8xl text-emerald-200 font-serif leading-none opacity-50">"</div>
                            <blockquote className="relative pl-12 pr-8 py-6 bg-gradient-to-r from-emerald-50 to-transparent rounded-r-2xl border-l-4 border-emerald-500">
                                <p className="text-[17px] italic text-stone-700 leading-relaxed font-sans">
                                    當你喝下一杯跨越百年的古樹茶，那種飽滿的體感並非玄學，而是豐富內含物質與歷史積澱的共鳴。
                                </p>
                            </blockquote>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-l-4 border-emerald-500 mb-8">
                            <h4 className="text-[19px] font-bold text-emerald-900 mb-3 flex items-center gap-2 font-sans">
                                <Heart size={18} className="text-emerald-700" />
                                定義「喝茶的小小勝利」
                            </h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                在這個要求高度統一、效率至上的時代，選擇停下來，不聽忽悠，用邏輯與感官挑選一杯自己真心喜歡的風味。這不僅是品味，更是一次重新與土地、與自我對話的儀式。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* 結語 */}
                    <AcademyContentBlock title="結語" icon={BookOpen} id="ch04-conclusion">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-stone-900 p-8 md:p-10 text-white shadow-2xl">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl" />
                            <div className="absolute top-4 right-8 text-2xl opacity-10 decoration-float-slow select-none pointer-events-none">🍃</div>

                            <div className="relative z-10">
                                <p className="text-[17px] leading-relaxed text-emerald-50 font-medium font-sans">
                                    「1-2-6」體系是你探索風味疆域的鑰匙。對於初學者，我建議從具備標準化生產能力的大品牌基礎款開始。先建立起正確的、具備共識的「基礎味覺記憶」，就像學會了地圖上的比例尺。
                                </p>
                                <p className="text-[17px] leading-relaxed text-emerald-50 font-medium font-sans mt-4">
                                    一旦你對這六大座標有了底氣，未來的每一泡茶，都將成為一場<strong className="text-amber-300">有預期、有驚喜的個性冒險</strong>。
                                </p>
                            </div>
                        </div>
                    </AcademyContentBlock>

                </AcademySection>
            </div>
        </div>
    );
}
