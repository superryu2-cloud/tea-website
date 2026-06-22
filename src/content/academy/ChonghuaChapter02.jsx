import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, Video, Droplets, Wind, Sparkles, Layout, Flame, Scale, FlaskConical, Heart, Archive } from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';

// Image imports
import imgHorizontal from '../../assets/images/xueya-ch4-seat-horizontal.png';
import imgVertical from '../../assets/images/xueya-ch4-seat-vertical.png';
import pouringImage from '../../assets/images/xueya-ch4-art-connection.png';

export default function ChonghuaChapter02() {
    const TOC = useMemo(() => [
        { id: 'ch02-intro', label: '課程簡介' },
        { id: 'ch02-layout', label: '茶席佈局：橫向與直式' },
        { id: 'ch02-video', label: '茶席儀軌觀摩影片' },
        { id: 'ch02-steps', label: '儀軌四大核心' },
        { id: 'ch02-clean', label: '結席與清壺' },
        { id: 'ch02-mindset', label: '茶席心法' },
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
                    id="chonghua-02"
                    title="第02堂：茶席儀軌"
                    label="ACADEMY · CHONGHUA · CH02"
                    subtitle="不僅是泡茶的動作，更是藉器練心、以茶會友的專注流動。"
                >
                    {/* ═══════════ 1. 課程簡介 ═══════════ */}
                    <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-emerald-100 relative group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
                        <AcademyContentBlock title="課程簡介" icon={BookOpen} id="ch02-intro" color="emerald">
                            <div className="relative z-10 px-6 pb-6">
                                <p className="text-[19px] leading-relaxed text-stone-800 font-bold mb-4">
                                    上一堂課我們學了器具的配置，現在，我們要讓這些茶器「動起來」。
                                </p>
                                <p className="text-[17px] leading-relaxed text-stone-700">
                                    茶席是一首無聲的詩。儀軌（Rituals）則是我們在茶席上書寫這首詩的筆觸。它並不是死板的規矩，而是一套「最合理、最流暢、最具有美感」的泡茶動線。
                                    每個動作背後都有它的物理原因與待客哲學。在本章中，我們將從靜態的佈局美學開始，再進入動態的溫、置、注、奉四個核心步驟。
                                </p>
                            </div>
                        </AcademyContentBlock>
                    </div>

                    {/* ═══════════ 2. 茶席佈局 ═══════════ */}
                    <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-blue-100 relative group">
                        <AcademyContentBlock title="茶席佈局的基本視覺語彙" icon={Layout} id="ch02-layout" color="blue">
                            <div className="px-6 pb-6 mt-4">
                                <p className="text-[17px] text-stone-700 leading-relaxed font-sans mb-8">
                                    茶席佈局引導著品茶人的視線與心緒，其中，「橫向」與「直式」便是兩種最基本也最重要的視覺語彙。
                                </p>

                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Horizontal */}
                                    <div className="bg-gradient-to-br from-white to-sky-50 p-6 rounded-2xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-4">
                                            <h5 className="font-bold text-sky-900 text-[20px] font-sans">橫向佈局 (橫式)</h5>
                                            <span className="px-3 py-1 bg-white text-sky-800 rounded-full text-xs font-bold shadow-sm border border-sky-100">入門基礎</span>
                                        </div>
                                        <div className="h-40 mb-4 bg-sky-100 rounded-xl overflow-hidden relative">
                                            <img src={imgHorizontal} alt="橫向佈局" className="w-full h-full object-cover mix-blend-multiply opacity-80" onError={(e) => { e.target.style.display = 'none'; }} />
                                        </div>
                                        <p className="text-[17px] text-stone-700 leading-relaxed font-sans mt-3">
                                            <strong className="text-sky-800">視覺與感受：</strong> 猶如北宋張擇端《清明上河圖》的長卷，視線如水流般蜿蜒流轉。營造出一種「平遠」的自在感，是近十年台灣茶藝的主流。
                                        </p>
                                    </div>

                                    {/* Vertical */}
                                    <div className="bg-gradient-to-br from-white to-stone-100 p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between mb-4">
                                            <h5 className="font-bold text-stone-900 text-[20px] font-sans">直式佈局 (直式)</h5>
                                            <span className="px-3 py-1 bg-stone-800 text-stone-100 rounded-full text-xs font-bold shadow-sm">進階境界</span>
                                        </div>
                                        <div className="h-40 mb-4 bg-stone-200 rounded-xl overflow-hidden relative">
                                            <img src={imgVertical} alt="直式佈局" className="w-full h-full object-cover mix-blend-multiply opacity-80" onError={(e) => { e.target.style.display = 'none'; }} />
                                        </div>
                                        <p className="text-[17px] text-stone-700 leading-relaxed font-sans mt-3">
                                            <strong className="text-stone-800">視覺與感受：</strong> 猶如北宋范寬《谿山行旅圖》的立軸，視線由下往上延伸。營造出一種「高遠」的肅穆感，引導品茶人沉澱心靈，進入專注狀態。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>
                    </div>

                    {/* ═══════════ 3. 示範影片 ═══════════ */}
                    <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-purple-100 relative group">
                        <AcademyContentBlock title="茶席儀軌觀摩影片" icon={Video} id="ch02-video" color="purple">
                            <div className="px-6 pb-6 mt-4">
                                <p className="text-[17px] text-stone-700 leading-relaxed font-sans mb-6">
                                    以下是這套茶席儀軌的完整示範。觀賞時，請將注意力放在泡茶者<strong>「舉手投足之間的節奏與呼吸」</strong>。
                                    看她如何透過旋轉、注水與奉茶，與茶席空間完美融合。
                                </p>

                                {/* YouTube Embed */}
                                <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-900 group">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/o6G3QSp-k2g?rel=0"
                                        title="茶席儀軌示範影片"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </AcademyContentBlock>
                    </div>

                    {/* ═══════════ 4. 儀軌四大核心 ═══════════ */}
                    <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-rose-100 relative group">
                        <AcademyContentBlock title="茶道儀軌：溫、置、注、奉的藝術" icon={Sparkles} id="ch02-steps" color="rose">
                            <div className="px-6 pb-6 mt-4">
                                <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 mb-8">
                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                        剛剛影片中看似繁複的動作，其實可以拆解為四大核心要素：<strong>溫、置、注、奉</strong>。
                                        從「技術功能」向「情感連結」昇華，每一動都有實質的物理意義。
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* 1. 溫 */}
                                    <div className="bg-white p-6 rounded-2xl border-2 border-orange-100 shadow-sm hover:-translate-y-1 transition-transform">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-extrabold text-xl"><Flame size={20} /></div>
                                            <h5 className="text-[19px] font-bold text-orange-900 font-sans">1. 溫器與預測</h5>
                                        </div>
                                        <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                            <strong className="text-orange-800">細節：</strong> 注水至 8-9 分滿，預留乾燥茶葉吸水的空間。食指輕抵壺蓋氣孔，確保後續出湯順暢。<br />
                                            <strong className="text-orange-800">心法：</strong> 這是茶席的「暖場」。借著溫杯的水氣縹緲，潔淨器具，也讓自己與客人的心都安靜下來。
                                        </p>
                                    </div>

                                    {/* 2. 置 */}
                                    <div className="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm hover:-translate-y-1 transition-transform">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-extrabold text-xl"><Scale size={20} /></div>
                                            <h5 className="text-[19px] font-bold text-emerald-900 font-sans">2. 製茶與入茶</h5>
                                        </div>
                                        <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                            <strong className="text-emerald-800">細節：</strong> 茶荷窄口對準茶倉合一。置茶順時針旋轉象徵圓滿，入茶逆時針斂蓄。<br />
                                            <strong className="text-emerald-800">心法：</strong> 「茶為君」。欣賞茶葉的型態，感受茶葉落入壺中的聲音，帶著敬意不以手直接觸碰茶葉。
                                        </p>
                                    </div>

                                    {/* 3. 注 */}
                                    <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-sm hover:-translate-y-1 transition-transform">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-extrabold text-xl"><FlaskConical size={20} /></div>
                                            <h5 className="text-[19px] font-bold text-blue-900 font-sans">3. 沖泡、出湯與散熱</h5>
                                        </div>
                                        <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                            <strong className="text-blue-800">細節：</strong> 水流不可斷，出湯時壺嘴距勻杯側邊約 2cm，水流輕柔切入，倒盡茶湯。然後輕挑慢撥茶葉散熱。<br />
                                            <strong className="text-blue-800">心法：</strong> 以精準的時間（如一沖55秒）與水溫控制，將「鐘錶時間」轉化為「生命節奏」。
                                        </p>
                                    </div>

                                    {/* 4. 奉 */}
                                    <div className="bg-white p-6 rounded-2xl border-2 border-rose-100 shadow-sm hover:-translate-y-1 transition-transform">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 font-extrabold text-xl"><Heart size={20} /></div>
                                            <h5 className="text-[19px] font-bold text-rose-900 font-sans">4. 分杯與奉茶</h5>
                                        </div>
                                        <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                            <strong className="text-rose-800">細節：</strong> 將勻杯中的茶湯平均分給賓客。奉茶時「心隨杯走」，視線跟隨茶杯放下後再行禮。<br />
                                            <strong className="text-rose-800">心法：</strong> 「客為主」。茶席中的隱秩序讓人不需命令自然進入共好磁場，將最好的茶湯分享給品飲者。
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 mt-6 relative h-64">
                                    <img src={pouringImage} alt="奉茶藝術" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6">
                                        <p className="text-white font-[17px] font-sans">流動藝術中的筆觸，將最好的茶湯分享。</p>
                                    </div>
                                </div>

                            </div>
                        </AcademyContentBlock>
                    </div>

                    {/* ═══════════ 5. 結席與清壺 ═══════════ */}
                    <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-teal-100 relative group">
                        <AcademyContentBlock title="結席與清壺：有始有終的完整" icon={Archive} id="ch02-clean" color="teal">
                            <div className="px-6 pb-6 mt-4">
                                <p className="text-[17px] text-stone-700 leading-relaxed font-sans mb-6">
                                    一場完美的茶席，除了行雲流水的沖泡過程，最後的「清壺與結席」更是展現茶人素養的關鍵所在。
                                    將器具恢復清朗，不僅是為了保養紫砂壺等茶具，也是對茶席空間與賓客的尊重，為品茗體驗畫下完美的句點。
                                </p>

                                {/* YouTube Embed */}
                                <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-900 group mb-8">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/BGBMgBp-rfU?rel=0"
                                        title="清壺與結席示範影片"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border-2 border-teal-100 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-extrabold text-xl"><Droplets size={20} /></div>
                                        <h5 className="text-[19px] font-bold text-teal-900 font-sans">清壺的實務與心境</h5>
                                    </div>
                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans mb-3">
                                        <strong className="text-teal-800">實務操作：</strong> 在賓客離席前或品飲告一段落時，以熱水將壺內茶渣徹底沖洗乾淨。尤其是壺嘴、壺底等容易藏垢之處，需特別留意。最後開蓋讓熱氣自然蒸發，保持壺內乾燥。
                                    </p>
                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                        <strong className="text-teal-800">心境轉折：</strong> 隨著熱水的沖洗，也是茶人洗滌己心、沉澱情緒的時刻。「潔、整、清」的結席畫面，能留給賓客最難忘的文化餘韻。
                                    </p>
                                </div>
                            </div>
                        </AcademyContentBlock>
                    </div>

                    {/* ═══════════ 6. 茶席心法 ═══════════ */}
                    <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200 relative group">
                        <AcademyContentBlock title="帶走的觀念：茶席心法" icon={Wind} id="ch02-mindset" color="amber">
                            <div className="bg-gradient-to-r from-stone-800 to-stone-900 p-8 rounded-b-2xl text-white">
                                <h4 className="text-[20px] font-bold text-amber-300 mb-6 flex items-center gap-3 font-sans">
                                    <Sparkles size={24} />
                                    轉心成象是藝術，轉象成心是智慧
                                </h4>
                                <div className="space-y-6">
                                    <div className="border-l-4 border-emerald-500 pl-5">
                                        <p className="text-[17px] text-stone-200 leading-relaxed font-sans">
                                            <strong className="text-emerald-300 text-[18px]">1. 無聲的優雅（結席之美）：</strong><br />
                                            高段的茶席，器具之間是不會發出響亮的碰撞聲的。而最後的「結席」，必須做到「潔、整、清」，回眸看著茶几乾乾淨淨，留給賓客最深刻的文化衝擊。
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-amber-500 pl-5">
                                        <p className="text-[17px] text-stone-200 leading-relaxed font-sans">
                                            <strong className="text-amber-300 text-[18px]">2. 從「技法」到「技巧」：</strong><br />
                                            技法是泡茶的參數（水溫、時間）；而技巧是對技法的「善為巧用」。多練習，讓肌肉產生記憶，動作自然就會柔軟圓融。
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-sky-500 pl-5">
                                        <p className="text-[17px] text-stone-200 leading-relaxed font-sans">
                                            <strong className="text-sky-300 text-[18px]">3. 一切為了茶湯：</strong><br />
                                            所有的儀式，最終都是為了成就那一杯美好的茶湯。不要為了表演而表演，忽略了茶葉本身的特性與水溫的掌控。手，傳遞的是我的心；同樣的茶，不同的人泡，滋味就不一樣。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>
                    </div>
                </AcademySection>
            </div>
        </div>
    );
}
