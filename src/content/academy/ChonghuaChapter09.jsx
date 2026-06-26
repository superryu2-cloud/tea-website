import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, Leaf, Flame, Thermometer, FlaskConical, Layers, Coffee, ArrowRight, Droplets, Wind, Sun, Sparkles, Users, Eye, Mountain } from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import ImageLightbox from '../../components/ui/ImageLightbox';

const IMG = '/images';

/* ──────────────────────────────────────────
   互動元件：氧化程度模擬器（簡化版）
   ────────────────────────────────────────── */
const OxidationSimulator = () => {
    const [level, setLevel] = useState(0);

    const getStage = (val) => {
        if (val < 10) return { label: '未氧化', tea: '綠茶', color: '#22c55e', bg: 'bg-green-50', note: '鮮葉原味，帶有青草氣息' };
        if (val < 25) return { label: '輕度氧化', tea: '白茶 / 黃茶', color: '#eab308', bg: 'bg-yellow-50', note: '茶湯金黃，口感柔和清甜' };
        if (val < 50) return { label: '中度氧化', tea: '烏龍茶（清香型）', color: '#f59e0b', bg: 'bg-amber-50', note: '花香浮現，滋味漸漸豐富' };
        if (val < 75) return { label: '中重度氧化', tea: '烏龍茶（熟香型）', color: '#ea580c', bg: 'bg-orange-50', note: '果香蜜韻，湯色琥珀' };
        if (val < 95) return { label: '重度氧化', tea: '紅茶', color: '#dc2626', bg: 'bg-red-50', note: '紅湯紅葉，甜潤醇厚' };
        return { label: '完全氧化', tea: '黑茶（後發酵）', color: '#44403c', bg: 'bg-stone-100', note: '深褐色澤，溫潤無苦' };
    };

    const stage = getStage(level);

    return (
        <div className="bg-white rounded-2xl border-2 border-stone-200 p-6 md:p-8 shadow-sm">
            <h5 className="text-[20px] font-extrabold text-stone-800 mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-amber-500" />
                動手試試：氧化程度模擬器
            </h5>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* 茶杯視覺 */}
                <div className="relative w-36 h-36 flex-shrink-0">
                    <div className="absolute inset-0 border-4 border-stone-300 rounded-b-[4rem] rounded-t-lg bg-white overflow-hidden">
                        <div
                            className="absolute bottom-0 left-0 right-0 transition-all duration-500"
                            style={{ height: '70%', backgroundColor: stage.color, opacity: 0.75 }}
                        />
                    </div>
                    <div className="absolute top-4 -right-3 w-7 h-14 border-4 border-stone-300 rounded-r-2xl pointer-events-none" />
                </div>

                {/* 滑桿 & 資訊 */}
                <div className="flex-1 space-y-4 w-full">
                    <div className="flex justify-between items-end">
                        <span className="text-[22px] font-black text-stone-800">{stage.label}</span>
                        <span className="text-sm font-bold text-stone-400 px-3 py-1 border border-stone-200 rounded-lg">{level}%</span>
                    </div>
                    <input
                        type="range" min="0" max="100" step="1" value={level}
                        onChange={(e) => setLevel(parseInt(e.target.value))}
                        className="w-full h-2 bg-gradient-to-r from-green-300 via-amber-400 to-stone-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-stone-400 font-bold">
                        <span>綠茶</span><span>烏龍茶</span><span>紅茶</span><span>黑茶</span>
                    </div>
                    <div className={`${stage.bg} p-4 rounded-xl border border-stone-100 transition-colors duration-300`}>
                        <p className="font-bold text-stone-800 mb-1" style={{ color: stage.color }}>{stage.tea}</p>
                        <p className="text-stone-600 text-[15px]">{stage.note}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ──────────────────────────────────────────
   主元件：崇華書院 第09堂 — 認識氧化
   ────────────────────────────────────────── */
export default function ChonghuaChapter09() {
    const TOC = useMemo(() => [
        { id: 'ch09-intro', label: '課程簡介' },
        { id: 'ch09-what', label: '什麼是氧化？' },
        { id: 'ch09-vs', label: '氧化 vs. 發酵' },
        { id: 'ch09-trigger', label: '氧化怎麼開始？' },
        { id: 'ch09-enzymes', label: '兩種酶的分工' },
        { id: 'ch09-color', label: '顏色的秘密' },
        { id: 'ch09-temp', label: '溫度的影響' },
        { id: 'ch09-stop', label: '如何停止氧化？' },
        { id: 'ch09-practice', label: '進階思考' },
        { id: 'ch09-six', label: '六大茶類光譜' },
        { id: 'ch09-summary', label: '帶走的觀念' },
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
        <div className="flex gap-8">
            {/* ── 側邊欄 TOC ── */}
            <nav className="hidden lg:block w-60 shrink-0 sticky top-28 self-start" style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                <div className="museum-panel p-4 md:p-5 tool-surface shadow-sm rounded-2xl">
                    <h3 className="text-[18px] font-extrabold text-stone-900 mb-3 px-2 border-l-4 border-amber-600">
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
                                        ? 'bg-gradient-to-br from-amber-100/80 to-orange-50 border-amber-300 text-amber-900 shadow-md ring-1 ring-amber-200'
                                        : 'bg-white/40 border-stone-200/60 hover:border-amber-300 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-white hover:shadow-md text-stone-500 hover:text-stone-900'
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
                    id="chonghua-09"
                    title="認識氧化——茶葉風味的幕後推手"
                    label="ACADEMY · CHONGHUA · CH09"
                    subtitle="用最白話的方式，搞懂為什麼同一片葉子能變出綠茶、烏龍茶和紅茶"
                >
                    {/* ═══════════ 1. 課程簡介 ═══════════ */}
                    <AcademyContentBlock title="課程簡介" icon={BookOpen} id="ch09-intro">
                        {/* Hero Banner */}
                        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl relative group">
                            <ImageLightbox
                                src={`${IMG}/academy/tea_processing_overview.png`}
                                alt="茶葉製程總覽"
                                className="block w-full h-[280px] md:h-[380px] overflow-hidden"
                                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 border border-amber-100 shadow-md">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FlaskConical size={120} className="text-amber-500" />
                            </div>
                            <div className="relative z-10">
                                <p className="text-[19px] leading-relaxed text-stone-800 font-medium">
                                    很多同學第一次聽到「氧化」這兩個字，可能覺得很科學、很複雜。
                                    但其實，它就像<strong>蘋果切開後慢慢變褐色</strong>一樣，是日常生活中隨處可見的自然現象。
                                </p>
                                <p className="text-[17px] leading-relaxed text-stone-700 mt-4">
                                    這堂課我們用最輕鬆的方式，帶大家理解：為什麼同一棵茶樹採下來的葉子，
                                    可以做成清爽的綠茶，也可以做成甜潤的紅茶？<strong className="text-amber-800">答案就藏在「氧化」裡。</strong>
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="px-4 py-2 bg-amber-100 rounded-lg border border-amber-200 text-amber-900 font-bold text-sm">
                                        講師：嚴白強
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 2. 什麼是氧化？ ═══════════ */}
                    <AcademyContentBlock title="什麼是氧化？" icon={Leaf} id="ch09-what">
                        <div className="relative my-6 px-4">
                            <div className="absolute -left-2 top-0 text-8xl text-amber-200 font-serif leading-none opacity-50">"</div>
                            <blockquote className="relative pl-12 pr-8 py-6 bg-gradient-to-r from-amber-50 to-transparent rounded-r-2xl border-l-4 border-amber-500">
                                <p className="text-[19px] italic text-stone-700 leading-relaxed">
                                    氧化 = 茶葉裡面的東西，跟空氣中的氧氣碰在一起後，產生的變化。
                                </p>
                            </blockquote>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <h4 className="text-[20px] font-bold text-stone-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-6 bg-amber-500 rounded-full"></span>
                                生活中的比喻
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex gap-4 items-start bg-amber-50/50 p-5 rounded-2xl border border-amber-100/50">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-2xl">🍎</div>
                                    <div>
                                        <h6 className="font-bold text-[17px] text-stone-900 mb-1">蘋果切開會變褐</h6>
                                        <p className="text-[15px] text-stone-600 leading-relaxed m-0">
                                            蘋果的果肉接觸空氣後，裡面的<strong>酶（酵素）</strong>開始工作，
                                            讓果肉氧化變色。茶葉的原理完全一樣！
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-orange-50/50 p-5 rounded-2xl border border-orange-100/50">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-2xl">🍵</div>
                                    <div>
                                        <h6 className="font-bold text-[17px] text-stone-900 mb-1">茶葉也是一樣的道理</h6>
                                        <p className="text-[15px] text-stone-600 leading-relaxed m-0">
                                            新鮮的茶葉被採下來後，葉片裡的<strong>茶多酚</strong>碰到氧氣，
                                            就會開始氧化，顏色和味道都會改變。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-500">
                            <h4 className="text-[19px] font-bold text-amber-900 mb-2 flex items-center gap-2">
                                💡 一句話記住
                            </h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                <strong>氧化程度越深，茶湯顏色越深、味道越甜潤；氧化程度越淺，茶湯越清亮、味道越清爽。</strong>
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 3. 氧化 vs. 發酵 ═══════════ */}
                    <AcademyContentBlock title="先搞清楚：氧化 ≠ 發酵" icon={FlaskConical} id="ch09-vs">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                很多人會把「氧化」和「發酵」混為一談，但它們是<strong>完全不同的兩件事</strong>。
                                用一個簡單的方式想：
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl shadow-lg border border-stone-200 mb-8">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gradient-to-r from-amber-700 to-orange-700 text-white">
                                        <th className="px-6 py-4 text-[17px] font-bold">比一比</th>
                                        <th className="px-6 py-4 text-[17px] font-bold">氧化作用 ☀️</th>
                                        <th className="px-6 py-4 text-[17px] font-bold">發酵 🦠</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr className="bg-white hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">誰在工作？</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">茶葉<strong>自己的酶</strong>（酵素）</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">外面來的<strong>微生物</strong>（細菌、黴菌）</td>
                                    </tr>
                                    <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">比喻</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">像蘋果自己變褐色</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">像麵團加酵母發酵長大</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">代表茶類</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">綠茶、烏龍茶、紅茶</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">黑茶（如普洱熟茶）</td>
                                    </tr>
                                    <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">顏色變化</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">綠 → 黃 → 紅 → 褐</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">深褐 → 黑色</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-stone-100 p-5 rounded-xl text-stone-700 border border-stone-200">
                            <p className="text-[16px] leading-relaxed">
                                <strong>📌 記住這句話：</strong>我們平常喝的綠茶、烏龍茶、紅茶，裡面發生的都是「氧化」，
                                不是「發酵」。只有黑茶（像普洱熟茶）才有真正的微生物發酵。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 4. 氧化怎麼開始？ ═══════════ */}
                    <AcademyContentBlock title="氧化是怎麼開始的？" icon={Wind} id="ch09-trigger">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                在新鮮的茶葉裡，<strong>酶（酵素）</strong>和<strong>茶多酚</strong>原本是被一道「牆」（細胞膜）隔開的，
                                就像住在隔壁的鄰居互不認識。要讓氧化開始，就得想辦法把這道牆打破，讓它們碰面。
                            </p>
                        </div>

                        {/* 萎凋圖 */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-stone-100 bg-stone-50 p-2">
                            <ImageLightbox
                                src={`${IMG}/generated/process_withering.png`}
                                alt="萎凋 — 茶葉失水啟動氧化"
                                className="block w-full h-auto overflow-hidden rounded-xl"
                                imgClassName="w-full h-auto object-cover max-h-[360px] mx-auto"
                            />
                            <p className="text-center text-[14px] text-stone-500 mt-2 font-medium">萎凋讓茶葉失水，溫和地啟動了氧化反應</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                                    <h5 className="text-[19px] font-bold text-blue-900">萎凋（失水）</h5>
                                </div>
                                <p className="text-[16px] text-stone-700 leading-relaxed">
                                    茶葉被採下來後放著讓它<strong>慢慢失水</strong>。水分減少後，
                                    細胞膜的「防線」變弱，酶和茶多酚就開始慢慢接觸。
                                    這時候的氧化是<strong>溫和、緩慢</strong>的。
                                </p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                                    <h5 className="text-[19px] font-bold text-red-900">搖青 / 揉捻（物理破壞）</h5>
                                </div>
                                <p className="text-[16px] text-stone-700 leading-relaxed">
                                    用力搖晃或揉捻茶葉，直接<strong>破壞細胞結構</strong>。酶和茶多酚瞬間大量接觸，
                                    再加上空氣中的氧氣加入戰局，氧化反應變得<strong>劇烈、快速</strong>。
                                </p>
                            </div>
                        </div>

                        {/* 做青圖 */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-stone-100 bg-stone-50 p-2">
                            <ImageLightbox
                                src={`${IMG}/generated/process_bruising.png`}
                                alt="做青搖青 — 搖出茶葉的香氣"
                                className="block w-full h-auto overflow-hidden rounded-xl"
                                imgClassName="w-full h-auto object-cover max-h-[360px] mx-auto"
                            />
                            <p className="text-center text-[14px] text-stone-500 mt-2 font-medium">搖青讓葉片邊緣受損，形成烏龍茶標誌性的「綠葉紅鑲邊」</p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 4.5 兩種酶的分工 ═══════════ */}
                    <AcademyContentBlock title="幕後的兩位工人：PPO 和 POD" icon={Users} id="ch09-enzymes">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                茶葉裡面負責氧化的「工人」其實有<strong>兩位</strong>，它們的個性完全不一樣。
                                搞懂它們的差異，你就能理解為什麼不同的做法會做出完全不同的茶。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-extrabold text-sm">PPO</div>
                                    <div>
                                        <h5 className="text-[19px] font-bold text-green-900">多酚氧化酶</h5>
                                        <p className="text-xs text-green-600">溫柔的慢工細活型</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-[15px] text-stone-700">
                                        <span className="text-green-500 font-bold shrink-0">▸</span>
                                        <span><strong>什麼時候出場：</strong>細胞膜還算完整、只是慢慢失水的時候（萎凋階段）</span>
                                    </li>
                                    <li className="flex gap-2 text-[15px] text-stone-700">
                                        <span className="text-green-500 font-bold shrink-0">▸</span>
                                        <span><strong>工作速度：</strong>慢慢來，不急</span>
                                    </li>
                                    <li className="flex gap-2 text-[15px] text-stone-700">
                                        <span className="text-green-500 font-bold shrink-0">▸</span>
                                        <span><strong>做出來的效果：</strong>茶湯<strong>金黃透亮</strong>，帶出細緻的<strong>花香</strong>，口感清柔</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-extrabold text-sm">POD</div>
                                    <div>
                                        <h5 className="text-[19px] font-bold text-red-900">過氧化物酶</h5>
                                        <p className="text-xs text-red-600">猛烈的速戰速決型</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-[15px] text-stone-700">
                                        <span className="text-red-500 font-bold shrink-0">▸</span>
                                        <span><strong>什麼時候出場：</strong>細胞被搖青/揉捻打破、大量接觸氧氣的時候</span>
                                    </li>
                                    <li className="flex gap-2 text-[15px] text-stone-700">
                                        <span className="text-red-500 font-bold shrink-0">▸</span>
                                        <span><strong>工作速度：</strong>很快、很猛烈</span>
                                    </li>
                                    <li className="flex gap-2 text-[15px] text-stone-700">
                                        <span className="text-red-500 font-bold shrink-0">▸</span>
                                        <span><strong>做出來的效果：</strong>茶湯<strong>紅色到深褐</strong>，帶出<strong>熟果香、蜜香</strong>，風味濃郁</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-500 mb-8">
                            <h4 className="text-[19px] font-bold text-amber-900 mb-3 flex items-center gap-2">
                                💡 製茶師的藝術
                            </h4>
                            <p className="text-[16px] text-stone-700 leading-relaxed">
                                製茶師的「功夫」，就是決定要讓哪位工人多做一點。
                                <strong>想要花香清雅？</strong>那就輕輕萎凋，讓 PPO 慢慢工作（如高山烏龍）。
                                <strong>想要果蜜厚重？</strong>那就大力搖青、揉捻，請 POD 上場（如東方美人、紅茶）。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 5. 顏色的秘密 ═══════════ */}
                    <AcademyContentBlock title="顏色的秘密：兒茶素的變身之旅" icon={Droplets} id="ch09-color">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                氧化其實就是茶葉裡的<strong>兒茶素</strong>（一種帶苦澀味的物質）不斷變身的過程。
                                隨著氧化越來越深，兒茶素會一步步變成不同的物質，每一步都帶來新的顏色和味道：
                            </p>
                        </div>

                        {/* 轉化鏈 — 視覺化 */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 bg-stone-50 p-6 rounded-2xl border border-stone-200">
                            <div className="px-4 py-2 bg-green-100 border border-green-300 rounded-xl shadow-sm text-center">
                                <p className="font-bold text-green-800 text-[16px]">兒茶素</p>
                                <p className="text-xs text-green-600">苦澀</p>
                            </div>
                            <ArrowRight size={20} className="text-stone-400" />
                            <div className="px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-xl shadow-sm text-center">
                                <p className="font-bold text-yellow-800 text-[16px]">茶黃素</p>
                                <p className="text-xs text-yellow-600">金亮、鮮爽</p>
                            </div>
                            <ArrowRight size={20} className="text-stone-400" />
                            <div className="px-4 py-2 bg-red-100 border border-red-300 rounded-xl shadow-sm text-center">
                                <p className="font-bold text-red-800 text-[16px]">茶紅素</p>
                                <p className="text-xs text-red-600">紅色、醇厚</p>
                            </div>
                            <ArrowRight size={20} className="text-stone-400" />
                            <div className="px-4 py-2 bg-stone-800 border border-stone-600 rounded-xl shadow-sm text-center">
                                <p className="font-bold text-stone-200 text-[16px]">茶褐素</p>
                                <p className="text-xs text-stone-400">深褐、溫潤</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-200">
                                <h5 className="font-bold text-yellow-800 mb-2 text-[17px]">🌟 茶黃素 — 烏龍茶質</h5>
                                <p className="text-[15px] text-stone-700 leading-relaxed">
                                    讓茶湯看起來<strong>金亮透明</strong>，喝起來鮮爽有力。在台灣也被稱為「烏龍茶質」，是好茶的重要指標。
                                </p>
                            </div>
                            <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                                <h5 className="font-bold text-red-800 mb-2 text-[17px]">🔴 茶紅素 — 紅茶的主角</h5>
                                <p className="text-[15px] text-stone-700 leading-relaxed">
                                    構成紅茶「紅湯紅葉」外觀的主要功臣，帶來<strong>醇厚甜潤</strong>的口感。
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-2xl border-l-4 border-amber-500">
                            <p className="text-[16px] text-stone-700 leading-relaxed">
                                <strong>💡 換句話說：</strong>氧化越深，苦澀的兒茶素被消耗越多，所以越重氧化的茶
                                （像紅茶、黑茶）<strong>喝起來越不苦澀、越甜潤</strong>。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 6. 如何停止氧化？ ═══════════ */}
                    <AcademyContentBlock title="剎車！怎麼停止氧化？" icon={Flame} id="ch09-stop">
                        {/* 殺青圖 */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-stone-100 bg-stone-50 p-2">
                            <ImageLightbox
                                src={`${IMG}/generated/process_kill_green.png`}
                                alt="殺青 — 高溫終止氧化"
                                className="block w-full h-auto overflow-hidden rounded-xl"
                                imgClassName="w-full h-auto object-cover max-h-[360px] mx-auto"
                            />
                            <p className="text-center text-[14px] text-stone-500 mt-2 font-medium">殺青：高溫滅酶，一鍋定江山</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-6">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                製茶師把氧化做到想要的程度後，就要用<strong>「殺青」</strong>這招來踩剎車。
                                原理非常簡單——<strong>高溫把酶「煮熟」</strong>，酶一旦壞掉了，氧化就永遠停止了。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-5 mb-8">
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <Thermometer size={20} className="text-red-500" />
                                    <h5 className="font-bold text-stone-800 text-[17px]">關鍵溫度</h5>
                                </div>
                                <p className="text-[15px] text-stone-600 leading-relaxed">
                                    茶葉的<strong>葉溫</strong>要達到 75°C～80°C 以上，才能徹底把酶「殺死」。
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xl">🥚</span>
                                    <h5 className="font-bold text-stone-800 text-[17px]">煮蛋花湯比喻</h5>
                                </div>
                                <p className="text-[15px] text-stone-600 leading-relaxed">
                                    就像蛋白質煮熟後不能「復原」一樣，殺青是<strong>不可逆的</strong>——酶一旦變性就回不去了。
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xl">⚠️</span>
                                    <h5 className="font-bold text-stone-800 text-[17px]">殺不透怎麼辦？</h5>
                                </div>
                                <p className="text-[15px] text-stone-600 leading-relaxed">
                                    如果溫度不夠，酶可能「裝死」後來又復活，繼續氧化。
                                    茶葉就會出現<strong>「紅骨」或「菜醉味」</strong>。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-red-400">
                            <h4 className="text-[19px] font-bold text-red-900 mb-2">🔑 判斷茶類的關鍵：有沒有殺青？</h4>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <div className="bg-white/80 p-4 rounded-xl">
                                    <p className="text-[16px] text-stone-700">
                                        <strong>有殺青 →</strong> 綠茶、黃茶、烏龍茶（包括紅烏龍）
                                    </p>
                                </div>
                                <div className="bg-white/80 p-4 rounded-xl">
                                    <p className="text-[16px] text-stone-700">
                                        <strong>沒有殺青 →</strong> 白茶、紅茶
                                    </p>
                                </div>
                            </div>
                            <p className="text-[15px] text-stone-600 mt-3 italic">
                                紅烏龍雖然看起來像紅茶，但因為有殺青所以歸類為烏龍茶；大吉嶺春摘茶看起來像綠茶，但因為沒有殺青所以歸類為紅茶。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 6.5 溫度的影響 ═══════════ */}
                    <AcademyContentBlock title="溫度：氧化的油門與剎車" icon={Thermometer} id="ch09-temp">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                酶（酵素）是蛋白質做的，它對溫度<strong>非常敏感</strong>。
                                溫度就像一個開關——太冷，酶懶得動；適溫，酶拼命工作；太高，酶直接「燙死」。
                            </p>
                        </div>

                        {/* 溫度階段 */}
                        <div className="grid md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 text-center">
                                <div className="text-3xl mb-2">🥶</div>
                                <div className="text-[22px] font-extrabold text-blue-800 mb-1">17~19°C</div>
                                <p className="text-[14px] text-blue-700 font-bold mb-2">「酶在睡覺」</p>
                                <p className="text-[13px] text-stone-600">空調房太冷，酶幾乎不工作，香氣轉化不足</p>
                            </div>
                            <div className="bg-green-50 p-5 rounded-2xl border border-green-200 text-center">
                                <div className="text-3xl mb-2">😊</div>
                                <div className="text-[22px] font-extrabold text-green-800 mb-1">25°C</div>
                                <p className="text-[14px] text-green-700 font-bold mb-2">「酶開始幹活」</p>
                                <p className="text-[13px] text-stone-600">酶已經有不錯的活性，氧化反應穩定進行</p>
                            </div>
                            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200 text-center">
                                <div className="text-3xl mb-2">🔥</div>
                                <div className="text-[22px] font-extrabold text-orange-800 mb-1">45°C</div>
                                <p className="text-[14px] text-orange-700 font-bold mb-2">「酶全速運轉」</p>
                                <p className="text-[13px] text-stone-600">活性最強！風味轉化效率最高的黃金溫度</p>
                            </div>
                            <div className="bg-red-50 p-5 rounded-2xl border border-red-200 text-center">
                                <div className="text-3xl mb-2">💀</div>
                                <div className="text-[22px] font-extrabold text-red-800 mb-1">55°C+</div>
                                <p className="text-[14px] text-red-700 font-bold mb-2">「酶開始壞掉」</p>
                                <p className="text-[13px] text-stone-600">蛋白質結構被破壞，活性迅速下降直到消失</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-6">
                            <h4 className="text-[19px] font-bold text-stone-900 mb-3 flex items-center gap-2">
                                <Mountain size={18} className="text-amber-600" />
                                堆青積熱：製茶師的溫度魔法
                            </h4>
                            <p className="text-[16px] text-stone-700 leading-relaxed">
                                在實際製茶中，如果天氣太冷、酶不夠活躍怎麼辦？製茶師會用一個巧妙的方法——
                                <strong>「堆青」</strong>：把茶葉堆在一起，利用茶葉自己產生的熱量（就像堆肥會發熱一樣），
                                讓葉堆溫度自然升高到酶喜歡的範圍，促進氧化反應順利進行。
                            </p>
                        </div>

                        <div className="bg-stone-100 p-5 rounded-xl border border-stone-200">
                            <p className="text-[16px] text-stone-700">
                                <strong>📌 這也解釋了：</strong>為什麼同一款茶，夏天做和冬天做味道不一樣？
                                因為溫度不同，酶的工作狀態不同，氧化的速度和深度也就不同了。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 7.5 進階思考 ═══════════ */}
                    <AcademyContentBlock title="進階思考：同樣是製茶，思路大不同" icon={Eye} id="ch09-practice">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                理解了氧化原理之後，你會發現不同茶類的製程其實是<strong>兩種完全不同的思路</strong>。
                                這就像做菜——有人喜歡慢火煨湯，有人喜歡大火快炒，各有各的美味。
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl shadow-lg border border-stone-200 mb-8">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gradient-to-r from-amber-700 to-orange-700 text-white">
                                        <th className="px-6 py-4 text-[17px] font-bold">比一比</th>
                                        <th className="px-6 py-4 text-[17px] font-bold">慢火煨湯型 🫖</th>
                                        <th className="px-6 py-4 text-[17px] font-bold">大火快炒型 🔥</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr className="bg-white hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">核心手法</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">重視<strong>萎凋</strong>（慢慢失水）</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">強調<strong>搖青/揉捻</strong>（物理破壞）</td>
                                    </tr>
                                    <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">主力工人</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">PPO（溫和慢工）</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">POD（劇烈快攻）</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">代表茶類</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">白茶、高山茶、攤青後的綠茶</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">焙香烏龍、東方美人、紅茶</td>
                                    </tr>
                                    <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                                        <td className="px-6 py-4 text-[17px] font-bold text-stone-800">品茶重點</td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">感受茶湯的<strong>厚度與醇度</strong></td>
                                        <td className="px-6 py-4 text-[17px] text-stone-700">欣賞<strong>甜→醇→甘</strong>的層次變化</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                                <h5 className="font-bold text-green-900 mb-3 text-[17px]">🍃 小知識：綠茶也有「攤青」</h5>
                                <p className="text-[15px] text-stone-700 leading-relaxed">
                                    很多人以為綠茶完全不氧化，其實不完全對。好的綠茶在殺青前，也會先<strong>靜置約 7 小時</strong>
                                    （叫「攤青」），讓酶微微工作一下。這樣做可以：
                                </p>
                                <ul className="mt-3 space-y-2 text-[15px] text-stone-700">
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> 降低苦澀感</li>
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> 減掉「海苔味」的青味</li>
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> 提升花香與甜香</li>
                                </ul>
                            </div>

                            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                <h5 className="font-bold text-stone-800 mb-3 text-[17px]">🤍 小知識：白茶靠「等」出風味</h5>
                                <p className="text-[15px] text-stone-700 leading-relaxed">
                                    白茶的做法是所有茶類中<strong>最簡單、最自然</strong>的——不殺青、不揉捻，
                                    只是讓茶葉在室內靜靜萎凋 <strong>3~5 天</strong>。在這段時間裡，PPO 酶慢慢地、溫和地工作，
                                    慢慢「等」出白茶特有的<strong>醇厚甘甜</strong>。
                                </p>
                                <p className="text-[14px] text-stone-500 mt-3 italic">
                                    這就是為什麼人們常說：白茶的工藝看似簡單，實則最考驗耐心與經驗。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-2xl border-l-4 border-amber-500">
                            <p className="text-[16px] text-stone-700 leading-relaxed">
                                <strong>💡 回到日常喝茶：</strong>下次品茶的時候，想想看你手中的茶是哪一種思路做出來的？
                                如果茶湯清透有花香，那可能是萎凋型的 PPO 作品；如果茶湯紅潤有蜜香，
                                那大概率是搖青/揉捻型的 POD 傑作。
                            </p>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 8. 六大茶類光譜 ═══════════ */}
                    <AcademyContentBlock title="六大茶類的氧化光譜" icon={Layers} id="ch09-six">
                        {/* 六大茶類光譜圖 */}
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-stone-100 bg-stone-50 p-2">
                            <ImageLightbox
                                src={`${IMG}/academy/six_types_cycle.png`}
                                alt="六大茶類光譜"
                                className="block w-full h-auto overflow-hidden rounded-xl"
                                imgClassName="w-full h-auto object-cover max-h-[400px] mx-auto"
                            />
                            <p className="text-center text-[14px] text-stone-500 mt-2 font-medium">透過控制氧化程度，一片葉子可以變出六種截然不同的茶</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-8">
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                現在你已經知道氧化是什麼、怎麼開始、怎麼停止了。
                                接下來把這些知識串起來——<strong>製茶師就是透過控制「氧化走多遠」，
                                    來決定做出哪一種茶。</strong>
                            </p>
                        </div>

                        {/* 互動模擬器 */}
                        <div className="mb-8">
                            <OxidationSimulator />
                        </div>

                        {/* 六大茶類卡片 */}
                        <div className="space-y-4">
                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-green-700 text-[18px] font-bold">綠</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[19px] font-bold text-stone-900 mb-1">綠茶 — 不氧化</h5>
                                            <p className="text-[16px] text-stone-600">採下來後直接殺青，把氧化「扼殺在搖籃裡」。保留最多原味，喝起來清爽鮮甜。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-stone-300 to-stone-400"></div>
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-stone-600 text-[18px] font-bold">白</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[19px] font-bold text-stone-900 mb-1">白茶 — 輕微氧化</h5>
                                            <p className="text-[16px] text-stone-600">只做萎凋和乾燥，不殺青、不揉捻。讓酶慢慢溫和地工作，口感自然清甜。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-yellow-700 text-[18px] font-bold">黃</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[19px] font-bold text-stone-900 mb-1">黃茶 — 微氧化</h5>
                                            <p className="text-[16px] text-stone-600">在綠茶基礎上加「悶黃」步驟（像蓋鍋蓋悶），讓茶湯更甘潤，口感更柔和。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-cyan-700 text-[18px] font-bold">烏</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[19px] font-bold text-stone-900 mb-1">烏龍茶 — 部分氧化（15%～85%）</h5>
                                            <p className="text-[16px] text-stone-600">風味跨度最大的茶類！從清花香到濃果蜜，全靠製茶師控制氧化的「深淺」。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-red-400 to-rose-500"></div>
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-red-700 text-[18px] font-bold">紅</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[19px] font-bold text-stone-900 mb-1">紅茶 — 全氧化</h5>
                                            <p className="text-[16px] text-stone-600">讓茶多酚充分氧化到底，不殺青。兒茶素大量轉化，所以紅茶甜潤不苦澀。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="h-2 bg-gradient-to-r from-stone-700 to-stone-800"></div>
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-stone-700 text-[18px] font-bold">黑</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[19px] font-bold text-stone-900 mb-1">黑茶 — 後發酵（微生物參與）</h5>
                                            <p className="text-[16px] text-stone-600">這才是真正的「發酵」！靠微生物慢慢轉化，口感極為溫潤順滑，完全不苦。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    {/* ═══════════ 8. 帶走的觀念 ═══════════ */}
                    <AcademyContentBlock title="今天帶走的三個觀念" icon={Coffee} id="ch09-summary">
                        <div className="space-y-6">
                            <div className="flex items-start gap-5 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-400">
                                <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white font-extrabold text-[22px] shrink-0 shadow-lg">1</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-2">氧化 ≠ 發酵</h4>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        平常說的「發酵程度」其實應該叫「氧化程度」。只有黑茶才有真正的微生物發酵。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-400">
                                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-extrabold text-[22px] shrink-0 shadow-lg">2</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-2">氧化決定風味</h4>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        同一棵茶樹的葉子，氧化淺就清爽（綠茶），氧化深就甜潤（紅茶），
                                        中間地帶就是千變萬化的烏龍茶。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-400">
                                <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white font-extrabold text-[22px] shrink-0 shadow-lg">3</div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-2">殺青 = 踩剎車</h4>
                                    <p className="text-[17px] text-stone-700 leading-relaxed">
                                        製茶師透過「殺青」（高溫滅酶）來決定氧化走到哪裡就停。
                                        有沒有殺青，正是分辨烏龍茶和紅茶的關鍵。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 風味公式 */}
                        <div className="mt-10 bg-gradient-to-r from-amber-700 to-orange-700 p-8 rounded-2xl text-white text-center shadow-xl">
                            <p className="text-[14px] font-bold tracking-widest uppercase mb-3 text-amber-200">記住這個觀念</p>
                            <p className="text-[24px] md:text-[28px] font-extrabold tracking-wide">
                                氧化程度 = 風味方向
                            </p>
                            <p className="mt-3 text-[16px] text-amber-100/80">
                                掌握了氧化，你就掌握了理解所有茶類的鑰匙 🔑
                            </p>
                        </div>
                    </AcademyContentBlock>

                </AcademySection>
            </div>
        </div>
    );
}

