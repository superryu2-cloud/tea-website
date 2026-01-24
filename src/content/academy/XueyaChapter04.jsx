import React, { useState, useEffect } from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';
import { Sparkles, Flame, Scale, Droplets, Heart, Award, Wind, Activity, Eye, TrendingUp, CloudRain, Map, CircleDollarSign, Sprout, Coffee, Mountain, Layout, PenTool, Scroll, FlaskConical, Menu, ArrowRight, Quote } from 'lucide-react';

// Import local images (Pretend these are imported, in reality we use the URIs directly or move them to public)
// For this environment, we will use the absolute paths provided by the generate_image tool, 
// assuming the build system or runtime can handle them, or strictly referring to them by a consistent convention if we were in a real app.
// Since we are in a dev environment, I will use the file:// protocol or relative paths if they were in public. 
// However, standard Next.js/Vite requires images in public. 
// I will assume for this "preview" we use the absolute path or a placeholder if strictly needed, but the user sees artifacts.
// I will use valid <img> tags with the local paths for now as requested by the tool's behavior description (visualizing output).

export default function XueyaChapter04() {
    const [activeSection, setActiveSection] = useState('intro');

    // Image Paths (Now using valid public paths)
    const images = {
        layout: '/images/academy/tea_layout.png',
        pouring: '/images/academy/tea_pouring.png',
        mist: '/images/academy/tea_mist.png',
        vessels: '/images/academy/tea_vessels.png'
    };

    const tocItems = [
        { id: 'intro', label: '引言：人文茶道哲學' },
        { id: 'part1', label: '第一部：美學基礎' },
        { id: 'part2-header', label: '第二部：儀軌實務' },
        { id: 'part2-1', label: '實務一：溫器與預測', isSub: true },
        { id: 'part2-2', label: '實務二：製茶與入茶', isSub: true },
        { id: 'part2-3', label: '實務三：沖泡與温控', isSub: true },
        { id: 'part2-4', label: '實務四：出湯與散熱', isSub: true },
        { id: 'part2-5', label: '實務五：奉茶與互動', isSub: true },
        { id: 'part2-6', label: '實務六：結席與修復', isSub: true },
        { id: 'part3', label: '第三部：高山茶深度解析' },
        { id: 'part4', label: '第四部：因茶擇器' },
        { id: 'conclusion', label: '結語' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;
            for (let i = tocItems.length - 1; i >= 0; i--) {
                const item = tocItems[i];
                const element = document.getElementById(item.id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(item.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row gap-12 relative max-w-7xl mx-auto">
            {/* Left Sidebar Navigation */}
            <div className="lg:w-72 flex-shrink-0">
                <div className="sticky top-24">
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-stone-100 p-6">
                        <div className="flex items-center gap-3 mb-6 text-stone-800 font-serif border-b border-stone-100 pb-4">
                            <div className="p-2 bg-stone-100 rounded-lg">
                                <Menu size={18} className="text-stone-600" />
                            </div>
                            <span className="font-bold tracking-wide">章節導覽</span>
                        </div>
                        <nav className="space-y-1 relative">
                            <div className="absolute left-0 top-2 bottom-2 w-px bg-stone-100 ml-3"></div>
                            {tocItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative w-full text-left px-4 py-2.5 rounded-r-lg text-sm transition-all duration-300 flex items-center justify-between group pl-4 ml-3
                                        ${activeSection === item.id
                                            ? 'text-emerald-800 font-bold bg-gradient-to-r from-stone-50 to-transparent border-l-4 border-emerald-600 -ml-0'
                                            : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50/50 border-l-4 border-transparent -ml-0'
                                        } 
                                        ${item.isSub ? 'text-xs pl-8' : ''}`}
                                >
                                    <span className={item.isSub ? 'opacity-90' : ''}>{item.label}</span>
                                    {activeSection === item.id && (
                                        <ArrowRight size={14} className="text-emerald-500 animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
                <div className="space-y-16">
                    <AcademySection
                        id="xueya-04"
                        title="人文茶道儀軌：溫、置、注、奉"
                        label="ACADEMY · XUEYA · CH04"
                        subtitle="從技術功能到情感連結的生命修煉"
                        className="bg-transparent"
                    >
                        {/* 引言 */}
                        <div id="intro" className="scroll-mt-32">
                            <AcademyContentBlock title="人文茶道的核心哲學" icon={Sparkles}>
                                <div className="space-y-8">
                                    <div className="relative p-8 bg-stone-50 rounded-2xl border border-stone-100">
                                        <Quote className="absolute top-6 left-6 text-stone-200 w-12 h-12 -z-10" />
                                        <p className="text-lg leading-loose text-stone-700 font-sans font-medium tracking-wide relative z-10 pl-4">
                                            「人文茶道的本質在於超越『機器人式』的功能性操作，將泡茶演繹為一場情感與場域氛圍的共同編織……這如同聆聽蔡琴的歌聲，其動人之處不在於音準，而在於生命情感的『共振』。」
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <p className="text-stone-600 leading-relaxed text-sm">
                                            在當代茶文化的語境中，習茶常被誤解為單純技術動作的堆疊。然而，卓越的茶事表現，並非僅在於精準地完成物理程序，而是在動作背後蘊含深厚的人文關懷與文化自覺。
                                        </p>
                                        <p className="text-stone-600 leading-relaxed text-sm border-l-2 border-emerald-100 pl-4">
                                            人文茶道主張，茶者應「知其所以然」。當茶者不再只是執行功能，而是投入情態與情緒時，茶湯方能散發出莫名的香氣與吸引力，使習茶從單純的解渴轉化為一場身心合一的生命修煉。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        <div className="py-2">
                            <h2 id="part1" className="text-3xl font-bold text-stone-800 mb-3 scroll-mt-32 flex items-center gap-3">
                                <span className="text-stone-300 font-sans text-4xl select-none">01.</span>
                                美學基礎
                            </h2>
                            <p className="text-stone-500 pl-14">茶席、書畫與經典美學的互通實踐</p>
                        </div>

                        {/* 1. 茶席佈置 */}
                        <AcademyContentBlock title="茶席佈置的基本儀軌與視覺美學" icon={Layout}>
                            <div className="space-y-8">
                                {/* Image Integration: Tea Layout */}
                                <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-100 mb-6">
                                    <img src={images.layout} alt="Zen Tea Ceremony Layout" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" />
                                </div>

                                <p className="text-stone-700 leading-relaxed">
                                    茶席佈置並非單純的器皿陳列，而是一場深刻的視覺傳達與文化語境的建立。如同學習書法須由「永字八法」的橫平豎直練起，唯有在穩固的法度中，茶人方能實現藝術突破。
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group bg-white hover:bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
                                        <div className="flex items-center justify-between mb-4">
                                            <h5 className="font-bold text-stone-900 text-lg">橫式布席</h5>
                                            <span className="text-xs font-bold px-2 py-1 bg-stone-100 rounded text-stone-500">入門基本款</span>
                                        </div>
                                        <ul className="space-y-3 text-sm text-stone-600">
                                            <li className="flex gap-2"><span className="text-stone-400">•</span><span><strong>視覺流動：</strong> 類比《清明上河圖》，如水流般靈動流轉。</span></li>
                                            <li className="flex gap-2"><span className="text-stone-400">•</span><span><strong>心理感受：</strong> 「平遠」意境，自在悠遠。臺灣復興佔比 80%。</span></li>
                                        </ul>
                                    </div>
                                    <div className="group bg-white hover:bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-stone-300 transition-all duration-300 shadow-sm hover:shadow-md">
                                        <div className="flex items-center justify-between mb-4">
                                            <h5 className="font-bold text-stone-900 text-lg">直式布席</h5>
                                            <span className="text-xs font-bold px-2 py-1 bg-stone-800 text-stone-100 rounded">境界進階款</span>
                                        </div>
                                        <ul className="space-y-3 text-sm text-stone-600">
                                            <li className="flex gap-2"><span className="text-stone-400">•</span><span><strong>視覺流動：</strong> 類比范寬《谿山行旅圖》，由下往上延伸。</span></li>
                                            <li className="flex gap-2"><span className="text-stone-400">•</span><span><strong>心理感受：</strong> 「高遠」意境，肅穆層次分明。</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <AcademyHighlightBox type="tip">
                                    <strong>茶席作為「資訊密碼」的功能：</strong> 資深茶人能透過席上的器具（如胎體厚薄、材質、口徑）預判茶湯風味。這種「得意感」建立了主客之間微妙的心理連結。
                                </AcademyHighlightBox>
                            </div>
                        </AcademyContentBlock>

                        {/* 2. 藝術互通性 */}
                        <AcademyContentBlock title="藝術互通性：從書畫技法領悟茶道" icon={PenTool}>
                            <div className="space-y-6">
                                <p className="text-stone-700 leading-relaxed">
                                    藝術修煉的「守破離」過程必須始於堅實的基本功，正如大師張大千在紮實的根基上才實現了晚年的墨法突破。
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-stone-50 to-white p-6 rounded-xl border-l-4 border-stone-300">
                                        <h5 className="font-bold text-stone-900 mb-2">墨法觀點的啟示</h5>
                                        <p className="text-stone-700 text-sm leading-relaxed">
                                            張大千主張「濃墨破層次、淡墨破韻味」。啟示我們：層次感與韻味並非單一元素的疊加，而是透過對比與「破」的技巧來展現深度。
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-r from-stone-50 to-white p-6 rounded-xl border-l-4 border-emerald-300">
                                        <h5 className="font-bold text-stone-900 mb-2">儀軌與儀式感</h5>
                                        <p className="text-stone-700 text-sm leading-relaxed">
                                            「儀式感」=「形式」+「儀軌」。透過有序的節奏（方向與順序），將日常飲茶昇華為「生命秩序」。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 3. 經典美學 */}
                        <AcademyContentBlock title="經典茶道美學：歐陽修的實踐框架" icon={Scroll}>
                            <div className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                                        <h5 className="font-bold text-amber-900 mb-4 text-center border-b border-amber-200 pb-2">五美（環境與主客）</h5>
                                        <ul className="space-y-3 text-sm text-amber-900/80">
                                            {[['泉甘', '優質且甘甜的泉水是茶湯之本'], ['器潔', '器具必須保持絕對的潔淨'], ['天朗', '清音微雨或天朗氣清之境'], ['佳客', '具備共同審美能力的優質賓客'], ['新茶', '追求新茶的鮮活氣韻']].map(([item, desc]) => (
                                                <li key={item} className="grid grid-cols-[3rem_1fr] gap-2">
                                                    <span className="font-bold">{item}</span>
                                                    <span className="opacity-90">{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                        <h5 className="font-bold text-stone-900 mb-4 text-center border-b border-stone-200 pb-2">四適（物質互動鏈）</h5>
                                        <ul className="space-y-3 text-sm text-stone-700">
                                            {[['茶之於水', '受水滋潤而釋放生命本質'], ['水藉於器', '透過容器承裝方能成為媒介'], ['湯臣於火', '透過火的溫度使茶與水溶合'], ['成就顏色', '四者共同成就完美的茶湯顏色']].map(([item, desc]) => (
                                                <li key={item} className="grid grid-cols-[4.5rem_1fr] gap-2">
                                                    <span className="font-bold">{item}</span>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-center text-stone-500 italic text-sm">
                                    硬體條件與審美環境完備後，藝術核心便轉向對「溫控」與「溶出率」的科學掌控。
                                </p>
                            </div>
                        </AcademyContentBlock>

                        <div className="py-6">
                            <h2 id="part2-header" className="text-3xl font-bold text-stone-800 mb-3 scroll-mt-32 flex items-center gap-3">
                                <span className="text-stone-300 font-sans text-4xl select-none">02.</span>
                                高山茶席儀軌實務指南
                            </h2>
                            <p className="text-stone-500 pl-14">從物理精準操作到場域隱秩序的完整構建</p>
                        </div>

                        {/* Image Integration: Tea Pouring Ritual */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-100 mb-8">
                            <img src={images.pouring} alt="Professional Tea Pouring Ritual" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* 1. 溫器 */}
                        <div id="part2-1" className="scroll-mt-32">
                            <AcademyContentBlock title="1. 溫器與水量預測：茶席的序幕" icon={Flame}>
                                <div className="space-y-6">
                                    <p className="text-stone-700">
                                        溫器是茶席的啟程，建立物理溫度基調與主客磁場。更關鍵的是，此階段隱含了「精準調控」。
                                    </p>
                                    <div className="grid gap-4">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                            <h5 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                                                紫砂壺按壓技巧
                                            </h5>
                                            <p className="text-stone-700 text-sm">
                                                食指應輕抵壺蓋氣孔或邊緣，維持約 5 秒的靜態按壓。真意在於感知器物張力，確保氣孔暢通，使後續出湯不致中斷。
                                            </p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                            <h5 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                                                水量預測與吸水率
                                            </h5>
                                            <p className="text-stone-700 text-sm">
                                                注水至 8-9 分滿（預留 10-20% 給乾燥茶葉吸水）。準確評估水位，確保每位賓客分量均等，避免殘渣失禮。
                                            </p>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                            <h5 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                                                溫杯順序與換手
                                            </h5>
                                            <p className="text-stone-700 text-sm">
                                                「由右至左、由內而外」，轉向為順時針。關鍵細節在於「不跨過壺」，需換手操作以維持場域清朗。
                                            </p>
                                        </div>
                                    </div>
                                    <AcademyHighlightBox type="tip">
                                        預測茶湯量是「待客禮儀」的技術基石，將技術運算轉化為對席間時空的掌控力。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 2. 置茶 */}
                        <div id="part2-2" className="scroll-mt-32">
                            <AcademyContentBlock title="2. 製茶與入茶儀軌：從器物到茶葉的流動" icon={Scale}>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                            <h5 className="font-bold text-stone-900 mb-2">空間修復與挪移</h5>
                                            <p className="text-sm text-stone-700">
                                                雙手虎口對準壺承 3 點與 9 點方向輕緩平移，確立儀式區塊。
                                            </p>
                                        </div>
                                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                            <h5 className="font-bold text-stone-900 mb-2">茶荷與茶倉對位</h5>
                                            <p className="text-sm text-stone-700">
                                                茶荷窄口對準茶倉（合二為一），手指順荷葉邊自然垂放。
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                        <h5 className="font-bold text-stone-900 mb-3">旋轉的哲學意涵</h5>
                                        <div className="grid grid-cols-2 gap-4 text-sm text-stone-700">
                                            <div className="p-3 bg-stone-50 rounded-lg text-center">
                                                <strong className="block mb-1 text-emerald-800">置茶（順時針）</strong>
                                                生命從無到有的圓滿流轉
                                            </div>
                                            <div className="p-3 bg-stone-50 rounded-lg text-center">
                                                <strong className="block mb-1 text-emerald-800">入茶（逆時針）</strong>
                                                面對逆境時的謹慎與斂蓄
                                            </div>
                                        </div>
                                    </div>
                                    <AcademyHighlightBox type="analysis">
                                        堅持不以手直接拿取茶葉，是當代茶席美學與衛生的雙重標準，強化了對自然的敬畏。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 3. 沖泡 */}
                        <div id="part2-3" className="scroll-mt-32">
                            <AcademyContentBlock title="3. 沖泡技術與溫度控制" icon={Droplets}>
                                <div className="space-y-6">
                                    <p className="text-stone-700">高山茶的厚實質地要求極端精確的熱能控制。</p>
                                    <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100">
                                        <ul className="space-y-4">
                                            <li className="flex gap-4 items-start">
                                                <span className="font-bold text-rose-800 whitespace-nowrap">高溫萃取</span>
                                                <span className="text-stone-700 text-sm">需 90°C 以上甚至沸水，激發高海拔葉質。</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="font-bold text-rose-800 whitespace-nowrap">溫潤泡</span>
                                                <span className="text-stone-700 text-sm">水量淹過茶葉，5-10 秒即出（滋潤展開）。</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="font-bold text-rose-800 whitespace-nowrap">三段式</span>
                                                <span className="text-stone-700 text-sm">運用 60°、75°、90° 變化或垂直直下，水不可斷。</span>
                                            </li>
                                            <li className="flex gap-4 items-start">
                                                <span className="font-bold text-rose-800 whitespace-nowrap">時間節奏</span>
                                                <span className="text-stone-700 text-sm">一沖 55 秒，二沖 50 秒，平衡溶出率。</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <AcademyHighlightBox type="analysis">
                                        「方法」與「技巧」的差異存在於 0.5 度的感知間。習茶者將「鐘錶時間」轉化為「生命節奏」。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 4. 出湯 */}
                        <div id="part2-4" className="scroll-mt-32">
                            <AcademyContentBlock title="4. 出湯、分杯與散熱" icon={FlaskConical}>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                            <h5 className="font-bold text-stone-900 mb-2">精密出湯</h5>
                                            <p className="text-stone-600 text-sm">壺嘴距勻杯側邊 2cm，水流輕柔切入。最後 5cc 殘渣棄之。</p>
                                        </div>
                                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                            <h5 className="font-bold text-emerald-900 mb-2">輕挑慢撥</h5>
                                            <p className="text-emerald-800 text-sm">使用茶理打斜切入，由下往上輕挑、由內往外慢撥。釋放底部熱壓。</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-stone-500 italic text-center">
                                        勻杯內茶湯應平均分配至六杯。
                                    </p>
                                    <AcademyHighlightBox type="tip">
                                        「輕挑慢撥」不僅是降溫，更是對葉片狀態的即時對話。保留高山茶特有的「芳香醇」。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 5. 奉茶 */}
                        <div id="part2-5" className="scroll-mt-32">
                            <AcademyContentBlock title="5. 奉茶、品飲與主客互動" icon={Heart}>
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex gap-4 bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                                            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-400">01</div>
                                            <div>
                                                <h5 className="font-bold text-stone-900">心隨杯走</h5>
                                                <p className="text-sm text-stone-600 mt-1">視線先注視茶杯，平穩放下後再看客人行禮。由外往內。</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                                            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-400">02</div>
                                            <div>
                                                <h5 className="font-bold text-stone-900">時間差利用</h5>
                                                <p className="text-sm text-stone-600 mt-1">利用第二沖 50 秒空檔，行雲流水完成收杯（由右至左）。</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                                            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-400">03</div>
                                            <div>
                                                <h5 className="font-bold text-stone-900">第三沖的轉折</h5>
                                                <p className="text-sm text-stone-600 mt-1">主客默契已成，可主動打破靜謐進行引導式對話。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <AcademyHighlightBox type="summary">
                                        茶席中的「隱秩序」讓互動不需命令。賓客自然進入共好磁場。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 6. 結席 */}
                        <div id="part2-6" className="scroll-mt-32">
                            <AcademyContentBlock title="6. 結席與空間修復：圓滿的終章" icon={Award}>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-3 gap-4 text-center">
                                        <div className="p-4 bg-stone-50 rounded-xl">
                                            <strong className="block text-stone-900 mb-2">蓋杯不注</strong>
                                            <span className="text-xs text-stone-500">無聲終結訊號</span>
                                        </div>
                                        <div className="p-4 bg-stone-50 rounded-xl">
                                            <strong className="block text-stone-900 mb-2">最後謝禮</strong>
                                            <span className="text-xs text-stone-500">左下右上，躬身致意</span>
                                        </div>
                                        <div className="p-4 bg-stone-50 rounded-xl">
                                            <strong className="block text-stone-900 mb-2">潔、整、清</strong>
                                            <span className="text-xs text-stone-500">如未曾有人坐過般乾淨</span>
                                        </div>
                                    </div>
                                    <AcademyHighlightBox type="analysis">
                                        「回眸看著茶几乾乾淨淨」，是留給賓客最深刻的文化衝擊。是主人的自律與修為。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        <div className="py-6">
                            <h2 id="part3" className="text-3xl font-bold text-stone-800 mb-3 scroll-mt-32 flex items-center gap-3">
                                <span className="text-stone-300 font-sans text-4xl select-none">03.</span>
                                高山茶產業深度解析
                            </h2>
                            <p className="text-stone-500 pl-14">風土、生理機制與生產經濟學</p>
                        </div>

                        {/* 1. 環境對茶樹影響 (Deep Dive) */}
                        <AcademyContentBlock title="高山環境對茶樹生理之影響機制" icon={CloudRain}>
                            <div className="space-y-8">
                                {/* Image Integration: High Mountain Mist */}
                                <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-100 mb-6">
                                    <img src={images.mist} alt="High Mountain Tea Plantation" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" />
                                </div>

                                <p className="text-stone-700 leading-relaxed">
                                    台灣高山茶之優越，核心在於極端環境對茶樹內含物質的生理重塑。這是一場茶樹與自然的無聲對話。
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-stone-100 rounded-bl-full opacity-50 -z-10"></div>
                                        <h5 className="font-bold text-stone-900 mb-2">代謝延緩與內質積累：果膠質的科學</h5>
                                        <p className="text-stone-700 leading-relaxed">
                                            高海拔低溫使茶樹代謝延緩。這種「緩慢」是高品質的關鍵。特別是<strong>果膠質</strong>的顯著提升，賦予了茶湯厚實的「湯感」與「稠度」。
                                        </p>
                                    </div>

                                    <div className="bg-emerald-50/80 p-6 rounded-xl border border-emerald-100 flex gap-4">
                                        <Mountain className="text-emerald-700 mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h5 className="font-bold text-emerald-900 mb-2">抗寒機制與芳香醇</h5>
                                            <p className="text-emerald-800/90 text-sm leading-relaxed">
                                                茶樹為抗寒分泌抵抗素（高濃度芳香油），即<strong>「高山𩡇」</strong>。這種香氣絕非人工工藝所能模擬，而是山林靈氣的實體化。
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                        <h5 className="font-bold text-stone-900 mb-2">光線轉化與苦澀控制</h5>
                                        <p className="text-stone-700">
                                            雲霧層將直射光轉化為「慢射光」並阻隔紫外線（苦澀來源），造就天然清甜。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 2. 產區風味地誌 */}
                        <AcademyContentBlock title="台灣主流高山茶產區之風味地誌" icon={Map}>
                            <div className="space-y-6">
                                <p className="text-stone-700">「一方水土一方茶」，海拔、日照及微氣候構成專屬身分。</p>
                                <div className="rounded-xl border border-stone-200 overflow-hidden shadow-sm">
                                    <table className="w-full text-left text-sm text-stone-700">
                                        <thead className="bg-stone-50 text-stone-900 font-bold border-b border-stone-200">
                                            <tr>
                                                <th className="p-4">產區</th>
                                                <th className="p-4">香氣類型</th>
                                                <th className="p-4">特徵與環境</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-stone-100 bg-white">
                                            <tr className="hover:bg-stone-50/50 transition-colors">
                                                <td className="p-4 font-bold text-stone-800">阿里山</td>
                                                <td className="p-4"><span className="px-2 py-1 bg-amber-50 rounded text-amber-800 text-xs font-bold">清揚花香</span></td>
                                                <td className="p-4 text-stone-600">發源地，香氣昂揚。北緯 23.5 度，日照穩定。</td>
                                            </tr>
                                            <tr className="hover:bg-stone-50/50 transition-colors">
                                                <td className="p-4 font-bold text-stone-800">梨山</td>
                                                <td className="p-4"><span className="px-2 py-1 bg-red-50 rounded text-red-800 text-xs font-bold">花果香</span></td>
                                                <td className="p-4 text-stone-600"><strong>「蘋果鮮切味」</strong>。日照足，果樹植被豐富。</td>
                                            </tr>
                                            <tr className="hover:bg-stone-50/50 transition-colors">
                                                <td className="p-4 font-bold text-stone-800">杉林溪</td>
                                                <td className="p-4"><span className="px-2 py-1 bg-emerald-50 rounded text-emerald-800 text-xs font-bold">龍脂香</span></td>
                                                <td className="p-4 text-stone-600">內斂深厚（湯中香）。霧多日照短。</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <AcademyHighlightBox type="tip">
                                    <strong>緯度補償原理：</strong> 辨識「葉底香氣」。新北坪林雖低海拔（400m），但因高緯度亦能呈現冷韻。
                                </AcademyHighlightBox>
                            </div>
                        </AcademyContentBlock>

                        {/* 3. 歷史與工藝 */}
                        <AcademyContentBlock title="歷史演進與工藝轉型" icon={TrendingUp}>
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                        <h5 className="font-bold text-stone-900 mb-2">歷史原點：林允發</h5>
                                        <p className="text-sm text-stone-700 leading-relaxed">
                                            目睹鹿谷茶農住進<strong>「三層樓房」</strong>與開起<strong>「進口車」</strong>的商業成功，林允發先生率先砍竹改種茶，開啟了阿里山茶業傳奇。
                                        </p>
                                    </div>
                                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                        <h5 className="font-bold text-stone-900 mb-2">工藝革命：部分發酵</h5>
                                        <p className="text-sm text-stone-700 leading-relaxed">
                                            為保留山氣，採輕發酵、不焙火。術語演進為<strong>「部分發酵」</strong>體系，細分為輕、中、重。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 4. 生產經濟學 */}
                        <AcademyContentBlock title="生產經濟學：極端成本下的價值" icon={CircleDollarSign}>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-6">
                                    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-2xl font-black text-red-500 flex-shrink-0">
                                        20x
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-stone-900 text-lg mb-1">人力成本的極端對比</h5>
                                        <p className="text-stone-600">
                                            高山全賴人工採摘，每斤成本高達 <strong>80 元</strong>（平地機械僅 4 元）。這 20 倍差距是價格基本支撐點。
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                    <h5 className="font-bold text-amber-900 mb-2">勞動力結構與採摘博弈</h5>
                                    <p className="text-amber-800/90 text-sm">
                                        <strong>按重 vs 按天：</strong> 工人傾向採「一心七葉」增重，與高品質「一心二葉」衝突。東方美人需按天計費，進一步推高成本。
                                    </p>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 5. 專業評茗 */}
                        <AcademyContentBlock title="專業評茗與茶席美學" icon={Eye}>
                            <div className="space-y-8">
                                <div className="grid grid-cols-4 gap-4">
                                    {[['望', '觀葉肉色澤'], ['聞', '辨識山頭香'], ['問', '詢海拔工藝'], ['切', '把脈果膠質']].map(([action, desc]) => (
                                        <div key={action} className="text-center p-4 bg-stone-50 hover:bg-white border border-transparent hover:border-stone-200 rounded-xl transition-all">
                                            <div className="font-serif font-black text-2xl text-stone-900 mb-2">{action}</div>
                                            <div className="text-xs text-stone-500">{desc}</div>
                                        </div>
                                    ))}
                                </div>
                                <AcademyHighlightBox type="analysis">
                                    <strong>浪漫主義：</strong> 現代茶農播放莫札特昇華茶魂。市場應區分「拼配」（優化）與「混茶」（替代）。
                                </AcademyHighlightBox>
                            </div>
                        </AcademyContentBlock>

                        <div className="py-6">
                            <h2 id="part4" className="text-3xl font-bold text-stone-800 mb-3 scroll-mt-32 flex items-center gap-3">
                                <span className="text-stone-300 font-sans text-4xl select-none">04.</span>
                                因茶擇器與感官科學
                            </h2>
                            <p className="text-stone-500 pl-14">材質熱力學、茶葉生理與當代生活美學</p>
                        </div>

                        {/* Image Integration: Zisha vs Porcelain */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-100 mb-8">
                            <img src={images.vessels} alt="Zisha Clay vs Porcelain Vessels" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* 導論 */}
                        <AcademyContentBlock title="導論：當代茶文化觀測" icon={Activity}>
                            <div className="space-y-6">
                                <p className="text-stone-700">面臨速食文化夾擊，學生常以保溫瓶飲高山茶，反映認知匱乏。</p>
                                <AcademyHighlightBox type="tip">
                                    <strong>文化資本：</strong> 「讀懂的叫知識，讀不懂的叫氣質。」理解器皿是當代生活美學的重構。
                                </AcademyHighlightBox>
                            </div>
                        </AcademyContentBlock>

                        {/* 茶葉性狀 */}
                        <AcademyContentBlock title="茶葉性狀分析" icon={Sprout}>
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                        <h5 className="font-bold text-stone-900 mb-2">冬片的迷思</h5>
                                        <p className="text-sm text-stone-700">
                                            <strong>冬片：</strong> 氣候異常下的「惱人私生子」，雖具冷冽香氣，實為環境變化產物。
                                        </p>
                                    </div>
                                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                        <h5 className="font-bold text-stone-900 mb-2">化学與誠信</h5>
                                        <p className="text-sm text-stone-700">
                                            茶湯由茶胺酸（甜）、兒茶素（苦）、咖啡因支撐。品鑑需區分拼配與混茶。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 擇器 */}
                        <AcademyContentBlock title="因茶擇器：材質科學" icon={Coffee}>
                            <div className="space-y-6">
                                <p className="text-stone-700">「器為茶之父」，核心在於熱力學掌握。</p>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-4">材質與烹飪類比</h5>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-stone-50 rounded-xl">
                                            <strong className="block text-stone-800 mb-1">瓷器（川燙青菜）</strong>
                                            <span className="text-xs text-stone-600">無毛細孔。追求鮮爽真實，品質鑒別首選。</span>
                                        </div>
                                        <div className="p-4 bg-stone-50 rounded-xl">
                                            <strong className="block text-stone-800 mb-1">紫砂（紅燒燉肉）</strong>
                                            <span className="text-xs text-stone-600">具毛細孔。吸附雜味修飾茶湯，適合焙火/普洱。</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">構造專業「眉角」</h5>
                                    <ul className="list-disc list-inside text-sm text-stone-700 space-y-2">
                                        <li><strong>一條龍：</strong> 1 杯到 12 杯規格是標準配置。</li>
                                        <li><strong>出水科學：</strong> 直流 vs 二彎流。單孔發茶佳但易堵（牙籤法）。</li>
                                    </ul>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        <div className="py-8">
                            <div className="h-px bg-stone-200 w-full mb-8"></div>
                        </div>

                        {/* 總結 */}
                        <div id="conclusion" className="scroll-mt-32">
                            <AcademyContentBlock title="結語：像那個樣子比本來那個樣子重要" icon={Award}>
                                <div className="space-y-6">
                                    <p className="text-lg leading-relaxed text-stone-700">
                                        在茶道的修煉中，「像那個樣子比本來那個樣子重要」並非指虛偽的表演，而是一種「身心安頓」的實踐。透過規範化的儀軌與姿態，強迫混亂的內心回歸秩序。
                                    </p>
                                    <AcademyHighlightBox type="summary">
                                        茶學是一門結合植物科學、物理學與人文修行的綜合學問……品味不應只有單一標準，專業分析師應具備釐清「岩韻」與「鹹味」的鑑賞能力，尊重一方水土。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>
                    </AcademySection>
                </div>
            </div>
        </div>
    );
}
