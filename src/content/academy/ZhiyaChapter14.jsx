import React, { useState, useEffect, useMemo } from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';
import { BookOpen, Eye, Globe, Beaker, Coffee, Sparkles, Users, Award, History, Droplets, Menu, ArrowRight, Activity, Map, Fingerprint, Anchor } from 'lucide-react';

export default function ZhiyaChapter14() {
    const [activeSection, setActiveSection] = useState('intro');

    // Image Paths
    const images = {
        hero: '/images/academy/zhiya14/tea_path_eastern_art.png',
        iceBrick: '/images/academy/zhiya14/tea_ice_brick_art.png', // Realistic
        iceBrickArt: '/images/academy/zhiya14/tea_ice_brick_painting.png', // Eastern Art (Lotus Leaf)
        cells: '/images/academy/zhiya14/tea_cell_diagram.png',
        party: '/images/academy/zhiya14/tea_party_eastern_painting.png',
        // Fallback for others if needed, or re-use hero
        trade: '/images/academy/zhiya14/tea_path_eastern_art.png'
    };

    const tocItems = useMemo(() => [
        { id: 'intro', label: '課程概述' },
        { id: 'part1', label: '茶事之釀：冰磚創意' },
        { id: 'part2', label: '競技場上的視覺行銷' },
        { id: 'part3', label: '紅茶的經緯：全球傳播' },
        { id: 'part4', label: '世界紅茶圖譜' },
        { id: 'part5', label: '組織學與加工技術' },
        { id: 'part6', label: '日常茶事轉化' },
        { id: 'part7', label: '紅茶品評入門' },
        { id: 'part8', label: '專業茶葉評審' },
        { id: 'part9', label: '紅茶全球傳播史' }, // Keeping distinct as per text
        { id: 'part10', label: '解構紅茶：分級工藝' },
        { id: 'part11', label: '紅茶沖泡實踐' },
        { id: 'part12', label: '紅茶文化意涵' },
        { id: 'part13', label: '茶湯會：茶與自我' },
    ], []);

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
    }, [tocItems]);

    return (
        <div className="flex flex-col lg:flex-row gap-12 relative max-w-7xl mx-auto">
            {/* Left Sidebar Navigation */}
            <div className="lg:w-72 flex-shrink-0">
                <div className="sticky top-24">
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-stone-100 p-6">
                        <div className="flex items-center gap-3 mb-6 text-stone-800 font-sans border-b border-stone-100 pb-4">
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
                                        }`}
                                >
                                    <span>{item.label}</span>
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
                        id="zhiya-14"
                        title="紅茶品評、歷史與沖泡實踐全解析"
                        label="ACADEMY · ZHIYA · CH14"
                        subtitle="從感官品評到文化傳承的完整旅程"
                        className="bg-transparent"
                    >
                        {/* Hero Image */}
                        <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                            <img
                                src={images.hero}
                                alt="Professional Black Tea Tasting"
                                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="bg-stone-900/80 p-4 text-center">
                                <p className="text-stone-300 text-sm font-light tracking-widest uppercase">Professional Sensory Evaluation</p>
                            </div>
                        </div>

                        {/* 課程概述 */}
                        <div id="intro" className="scroll-mt-32">
                            <AcademyContentBlock title="課程概述" icon={BookOpen}>
                                <p className="text-lg leading-relaxed text-stone-700 font-sans font-medium tracking-wide">
                                    本章節將帶您深入探索紅茶的世界，從專業品評技巧、嚴謹的評審流程，
                                    到紅茶的全球傳播史，再到實用的沖泡技術與文化意涵。
                                    這是一場連結感官、知識與美學的完整學習旅程。
                                </p>
                            </AcademyContentBlock>
                        </div>

                        {/* 茶事之釀 */}
                        <div id="part1" className="scroll-mt-32">
                            <AcademyContentBlock title="茶事之釀：從冰磚創意到紅茶經緯" icon={Sparkles}>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">茶事美學的創新：茶冰磚與視覺敘事</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            在當代茶文化的實踐中，「視覺體驗」與「服務儀式感」早已超越單純的裝飾，轉而成為一種極具戰略價值的感官引導。當夏至、芒種與小滿的暑氣相繼襲來，茶藝師若能透過微小的工藝變化，便能有效提升賓客的期待感，將飲茶昇華為一場感官敘事。
                                        </p>
                                    </div>

                                    <div className="rounded-2xl overflow-hidden shadow-lg my-6 border border-stone-100">
                                        <img
                                            src={images.iceBrick}
                                            alt="Creative Tea Ice Brick"
                                            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="bg-stone-50 p-3 border-t border-stone-100 text-center text-xs text-stone-500">
                                            視覺敘事：將時間與風味封存於晶瑩冰磚之中
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">茶冰磚的製作工法與迎賓設計</h4>
                                        <p className="text-stone-700 leading-relaxed mb-4">
                                            茶冰磚的製作是一場對細節的極致追求。選用高品質的碧螺春茶湯為基底，預先冷凍成圓形或方形的幾何造型。為了強化視覺層次，在結冰過程中需精準嵌入預先泡開、姿態優美的白茶葉片。這種「凍結瞬間」的工藝，讓賓客在夾取冰磚時，能聽見冰晶與玻璃杯碰撞的清脆聲響，視覺上則呈現出葉片在冰中鮮活的立體感。
                                        </p>
                                        <p className="text-stone-700 leading-relaxed">
                                            在迎賓儀式的設計上，將這些晶瑩的茶冰磚置於鮮綠荷葉之上，不僅營造出夏日清涼的視覺衝擊，更安排了互動環節：讓賓客自行夾取冰磚。這種「手作感」讓賓客能近距離觀察冰塊融化的動態過程，感受茶味如何隨融化深度緩慢「滲透」而非僅是淡化，實現滋味的層次遞變。
                                        </p>
                                        <div className="rounded-2xl overflow-hidden shadow-md my-6 border border-stone-100 max-w-2xl mx-auto">
                                            <img
                                                src={images.iceBrickArt}
                                                alt="Artistic Tea Ice Brick on Lotus Leaf"
                                                className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="bg-stone-50 p-2 text-center text-xs text-stone-500 italic">
                                                藝術演繹：荷葉上的茶冰磚意象
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                        <h4 className="text-xl font-bold text-stone-900 mb-2">「時間之釀」的哲學思維</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            冰磚的融化被賦予了「時間之釀」的哲學意涵。時間在此刻不僅是刻度，更是一種獨特的「調味」。隨著冰塊消融，茶味隨歲月流逝般的節奏滲透而出，象徵著生命的積累與轉化。這種創意將嚴謹的評鑑轉化為一種隨性的生活美學，並為專業競賽中的視覺行銷提供了深刻的啟示。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 競技場上的視覺行銷 */}
                        <div id="part2" className="scroll-mt-32">
                            <AcademyContentBlock title="競技場上的視覺行銷：茶藝比賽的本質與形式" icon={Award}>
                                <div className="space-y-8">
                                    <p className="text-stone-700 leading-relaxed">
                                        在專業茶藝競賽中，「視覺行銷」與「文化情懷」的運用，往往是決定參賽者能否建立記憶點的關鍵。
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">經典案例：荷花冰磚的動態美感</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            在台北的一場決賽中，曾有台中選手展現了極具張力的創意。他製作了約莫市售大塊冰磚六分之一大小的巨型冰磚，並在結冰過程中將整朵荷花封存其中。隨著比賽進行，冰磚在台上緩慢融化，原本被禁錮的荷花逐漸顯影，甚至在關鍵時刻隨冰消瓦解而自然倒下。這種將靜態裝置轉化為動態敘事的表現，成功將舞台轉化為傳達理念的媒介。
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">比賽哲學的辯證：本質與形式的兩難</h4>
                                        <p className="text-stone-700 leading-relaxed mb-4">
                                            然而，在「雙杯式品茗」這類講求規範的競賽中，形式與本質常存在緊張關係。評審在面對創新時，常陷入哲學辯證：過於前衛的形式是否侵奪了比賽的本質？曾有比賽出現同一選手被不同評審分別給予 0 分與 10 分的極端情況，反映了專業領域對「美感創新」與「規範堅守」的判斷差異。
                                        </p>
                                        <p className="text-stone-700 leading-relaxed">
                                            對於卓越的選手而言，參加比賽非僅關乎名次，更在於創造「討論價值」。他們選擇將舞台作為嫁接文化情懷的場所，即便名次隨時間淡去，那份「讓人念念不忘」的傳奇卻能長久留存。這種本質與形式的完美對接，亦體現在紅茶源遠流長的歷史深度中。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 紅茶的經緯 */}
                        <div id="part3" className="scroll-mt-32">
                            <AcademyContentBlock title="紅茶的經緯：從中國福建到全球航海時代" icon={Anchor}>
                                <div className="space-y-8">
                                    <p className="text-stone-700 leading-relaxed">
                                        紅茶在全球貿易史中佔據舉足輕重的戰略地位。釐清其歷史脈絡，必須先從校正發源地的誤解開始。
                                    </p>
                                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                        <h4 className="text-xl font-bold text-amber-900 mb-4">正山小種：發源地的正名與工藝突破</h4>
                                        <p className="text-amber-900/90 leading-relaxed mb-4">
                                            紅茶並非發源於印度，其祖庭位於中國福建省武夷山脈的桐木關。所謂「正山小種」，「正山」代表嚴格的產地規範，定義為桐木關周邊約 600 平方公里的區域，其地位猶如民間對「正本山」香材的產地追求；「小種」則指品種為當地的小葉種。
                                        </p>
                                        <p className="text-amber-900/90 leading-relaxed">
                                            紅茶的誕生源於 16 世紀（1586 年）的一次「偶得之美」。因當地氣候極度潮濕（濕度常達 80-90%），茶農為降低濕度以利發酵，就地取材燃燒松木。茶葉在過程中意外吸附松煙，產生了獨特的「松煙香」與「桂圓味」。這種本是解決生存環境限制的變通工藝，最終演變成了最具辨識度的文化特徵。
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">歷史的轉折：從外銷主力到全球經濟影響</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            進入大航海時代，紅茶因其性質極其穩定，在長達半年的海運中比綠茶或烏龍茶更能抵抗走味，遂成為外銷歐洲的主力。紅茶貿易引發的經濟失衡，最終成為鴉片戰爭及帝國主義進入中國的深層誘因。歷史一再重演，人類卻往往難以從中汲取教訓。而這種深沉的歷史感，也反映在各大產區因微氣候差異所形塑的風味圖譜中。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 世界紅茶圖譜 */}
                        <div id="part4" className="scroll-mt-32">
                            <AcademyContentBlock title="世界紅茶圖譜：品種、風土與香氣表徵" icon={Map}>
                                <div className="space-y-8">
                                    <p className="text-stone-700 leading-relaxed">
                                        海拔、氣候與製作工藝的交織，共同譜寫了世界紅茶的千姿百態。對茶人而言，「尋味」即是對風土靈魂的探索。
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                                            <h5 className="font-bold text-stone-900 mb-2">祁門紅茶 (中國)</h5>
                                            <p className="text-sm text-stone-600">小葉種之巔。獨特「糖香」與「蘋果味」，滋味醇和。</p>
                                        </div>
                                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                                            <h5 className="font-bold text-stone-900 mb-2">大吉嶺紅茶 (印度)</h5>
                                            <p className="text-sm text-stone-600">茶中香檳。迷人的「麝香葡萄」與「蘭花」香氣。</p>
                                        </div>
                                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                                            <h5 className="font-bold text-stone-900 mb-2">烏瓦紅茶 (錫蘭)</h5>
                                            <p className="text-sm text-stone-600">強勁濃烈。國際市場經典風味，適合調飲。</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">產區定義的嚴謹性與反思</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            中國對產區定義日益嚴謹，如武夷岩茶分為正岩、半岩與洲茶，體現了對風土微差異的尊重。反觀台灣部分產區偶有定義混亂之虞，值得反思。此外，雲南「滇紅」（大葉種、強勁）、浙江「九曲紅梅」（龍井品種）、湖北「宜紅」、福建「閩紅」等，皆豐富了紅茶的香氣光譜。這種風味差異，根源於植物組織學中大小葉種的本質區別。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 茶葉組織學 */}
                        <div id="part5" className="scroll-mt-32">
                            <AcademyContentBlock title="茶葉組織學與加工技術：大葉種與小葉種的滋味秘密" icon={Beaker}>
                                <div className="space-y-8">
                                    <p className="text-stone-700 leading-relaxed">
                                        理解茶葉的微觀組織，是掌握沖泡技術與預判口感的核心。茶葉滋味乃是生物結構與化學成分共同作用的結果。
                                    </p>

                                    {/* Image Integration: Cells */}
                                    <div className="grid md:grid-cols-2 gap-8 items-center bg-stone-50 rounded-2xl p-6 border border-stone-200">
                                        <img
                                            src={images.cells}
                                            alt="Tea Leaf Cell Structure"
                                            className="rounded-xl shadow-md w-full h-48 object-cover"
                                        />
                                        <div className="space-y-4">
                                            <h5 className="font-bold text-stone-900 border-b border-stone-200 pb-2">組織學解密</h5>
                                            <p className="text-sm text-stone-700 leading-relaxed">
                                                <strong>柵狀組織 (Palisade)：</strong> 排列緊密，如同百葉窗。小葉種佔高比，口感甜美鮮爽。
                                            </p>
                                            <p className="text-sm text-stone-700 leading-relaxed">
                                                <strong>海綿組織 (Spongy)：</strong> 疏鬆多孔，能儲存更多多酚醣類。大葉種佔比極高 (3:1)，賦予強勁厚度。
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">加工技術與台灣紅茶的傳奇轉型</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            在加工上，傳統功夫紅茶追求條索美感；而現代 CTC 工藝則透過「碎形、撕裂、捲曲」快速萃取，供應調飲市場。
                                            台灣紅茶史上有一段戲劇性的轉型。日治時期，專家為提升競爭力，派遣人員前往印度，據傳將阿薩姆大葉種種子偷偷藏於「空心拐杖」中帶回。這批種子在日月潭魚池地區試種成功，奠定了台灣大葉種紅茶的根基。大小葉種在東西方應用（佐餐、奶茶與純飲）的差異，將茶學推向日常實踐。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 日常茶事 */}
                        <div id="part6" className="scroll-mt-32">
                            <AcademyContentBlock title="日常茶事的轉化與延伸應用" icon={Coffee}>
                                <div className="space-y-8">
                                    <p className="text-stone-700 leading-relaxed">
                                        茶葉在現代生活中不應侷限於茶盤。透過創意轉化，茶湯能展現廣闊的飲食可能性。
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                            <h4 className="text-lg font-bold text-stone-900 mb-2">剩餘茶湯的創意利用</h4>
                                            <p className="text-stone-700 leading-relaxed text-sm">
                                                針對「一個人喝不完一壺茶」的日常困擾，建議將剩餘茶湯製成「茶冰球」。這能有效避免茶湯因長時間放置導致蛋白質變性而走味，並維持風味穩定。
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                            <h4 className="text-lg font-bold text-stone-900 mb-2">生活化調飲</h4>
                                            <p className="text-stone-700 leading-relaxed text-sm">
                                                <strong>天然氣泡飲：</strong> 將茶冰磚加入氣泡水，取代化學香料。<br />
                                                <strong>風味融合：</strong> 碧螺春加酸梅生津；茶湯融綠豆湯。
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">特殊微氣候風味</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            以大吉嶺春茶為例，在高海拔低溫環境下，氧化作用被自然限制在 30% 左右。其「非傳統紅湯紅葉」，而是呈現清透的果乾與花香，與常態紅茶大異其趣。
                                        </p>
                                        <p className="text-stone-700 leading-relaxed mt-4">
                                            茶事的終點不在技術堆砌，而在於茶藝師、環境與賓客共鳴產生的「氣場」。如同「茶天使」在現場展現的專注，以及在那四分鐘「止靜」中體現的優雅，所有的知識與工藝最終都是為了成就一段珍貴的緣分，讓每一口茶湯都成為與自我連結的寧靜儀式。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 紅茶品評入門 */}
                        <div id="part7" className="scroll-mt-32">
                            <AcademyContentBlock title="紅茶品評入門：從滋味與外觀談起" icon={Eye}>
                                <div className="space-y-8">
                                    <p className="text-lg leading-relaxed text-stone-700">
                                        品評一杯紅茶，不僅是單純感受其香氣與滋味，更是理解其品種特性、製作工藝與保存狀態的起點。
                                        這是一門連結感官與知識的藝術，讓我們得以窺見茶葉從茶園到茶杯的完整旅程。
                                    </p>

                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">大葉種紅茶的滋味精髓</h4>
                                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500 mb-4">
                                            <p className="text-stone-700 leading-relaxed">
                                                大葉種紅茶的品評，首重其<strong>「滋味」的飽滿度與結構感</strong>。
                                                與小葉種紅茶追求的「甜甜順順」不同，優質的大葉種紅茶應具備滋味飽滿、強勁度與恰到好處的收斂感。
                                                這種強勁的風味特質，使其成為搭配餐點或糕點的理想伴侶，此一功能性的搭配，也正是西式下午茶文化得以建立的基礎。
                                            </p>
                                        </div>
                                        <p className="text-stone-700 leading-relaxed">
                                            品飲大葉種紅茶時，應當如同品味一杯優質紅酒，去感受其在口腔中展現的張力與濃度。
                                            僅有順滑甘甜並不足以體現其品種的優越性，真正的精髓在於那股飽滿厚實、帶有清晰收斂感的口感，這才是鑑賞大葉種紅茶的核心標準。
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">從茶乾外觀鑑賞紅茶品質</h4>
                                        <p className="text-stone-700 leading-relaxed mb-4">
                                            視覺是品評的第一道關卡。優質紅茶的英文名為「Black Tea」，這已然揭示了其理想的外觀標準。
                                            頂級的紅茶茶乾，其色澤並非單純的紅色或褐色，而是呈現出一種深邃的
                                            <strong className="text-amber-700">「紅到發紫」，甚至帶有「黑紫光」</strong>的油潤光澤。
                                        </p>
                                        <p className="text-stone-700 leading-relaxed">
                                            茶葉的光亮度直接反映了其製作工藝的精湛程度與保存狀況的優劣。
                                            在專業儀器的檢測下，光亮度高的茶葉意味著其保鮮度良好。
                                            反之，若茶乾色澤<strong className="text-amber-700">「暗沉」</strong>，
                                            則如同保養不當的肌膚，通常代表茶葉在製作或儲存過程中可能因光照等因素產生了劣化。
                                            因此，一個油亮、深邃且帶有黑紫光澤的外觀，是高品質紅茶的重要標誌。
                                        </p>
                                    </div>

                                    <AcademyHighlightBox type="summary">
                                        深刻理解紅茶的滋味核心與外觀標準，是邁向專業品評的基石。
                                        建立起這套感官標準後，我們便能更有系統地探索專業評審流程。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 專業評審 */}
                        <div id="part8" className="scroll-mt-32">
                            <AcademyContentBlock title="專業茶葉評審的嚴謹世界" icon={Activity}>
                                <div className="space-y-8">
                                    <p className="text-lg leading-relaxed text-stone-700">
                                        專業的茶葉競賽評審，並非僅憑個人喜好，而是一套極其嚴謹且力求客觀的系統化流程。
                                        這套體系確保了每一款茶葉都能在公平、一致的標準下被評價。
                                    </p>

                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">標準化評審沖泡法</h4>
                                        <p className="text-stone-700 leading-relaxed mb-4">
                                            為了確保公平性，所有參賽茶樣都必須在完全相同的條件下沖泡。
                                            魚池鄉農會採用國際通行的<strong className="text-emerald-700">「1:50」</strong>沖泡比例（歷史可追溯至英國殖民印度時期）。
                                        </p>

                                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200 my-6">
                                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3">
                                                <h5 className="text-white font-bold">魚池鄉農會大葉種紅茶比賽標準沖泡參數</h5>
                                            </div>
                                            <table className="w-full">
                                                <thead className="bg-stone-50">
                                                    <tr>
                                                        <th className="px-6 py-3 text-left text-sm font-bold text-stone-900">項目</th>
                                                        <th className="px-6 py-3 text-left text-sm font-bold text-stone-900">參數</th>
                                                        <th className="px-6 py-3 text-left text-sm font-bold text-stone-900">備註</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-stone-200">
                                                    <tr><td className="px-6 py-4 text-sm font-medium">茶葉克數</td><td className="px-6 py-4 text-sm">3 公克</td><td className="px-6 py-4 text-sm text-stone-600">精準秤量</td></tr>
                                                    <tr><td className="px-6 py-4 text-sm font-medium">沖泡時間</td><td className="px-6 py-4 text-sm">5 分鐘</td><td className="px-6 py-4 text-sm text-stone-600">球型茶則為 6 分鐘</td></tr>
                                                    <tr><td className="px-6 py-4 text-sm font-medium">茶水比例</td><td className="px-6 py-4 text-sm">1 : 50</td><td className="px-6 py-4 text-sm text-stone-600">3g 對 150c.c.</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">評審現場流程解密</h4>
                                        <p className="text-stone-700 leading-relaxed mb-6">
                                            流程講求效率與紀律，主副審透過一套默契協作。
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                                <h5 className="font-bold text-stone-900 mb-2">1. 初步聞香判斷</h5>
                                                <p className="text-sm text-stone-700">
                                                    主審巡視聞香。將「不錯」的茶杯向前推一個身位；「很好」再往前推，作為初步排序。
                                                </p>
                                            </div>
                                            <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                                <h5 className="font-bold text-stone-900 mb-2">2. 品飲滋味複審</h5>
                                                <p className="text-sm text-stone-700">
                                                    品嚐茶湯。驗證聞香感受。若香氣佳但滋味平淡，茶樣可能被「推回」原位。
                                                </p>
                                            </div>
                                            <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                                <h5 className="font-bold text-stone-900 mb-2">3. 主副審協作</h5>
                                                <p className="text-sm text-stone-700">
                                                    副審不擅自移動主審定位。若有異議，將杯子移至邊緣標記，供後續討論。
                                                </p>
                                            </div>
                                            <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                                <h5 className="font-bold text-stone-900 mb-2">4. 安全聞香技巧</h5>
                                                <p className="text-sm text-stone-700">
                                                    等待約六分鐘，降溫至 50-60°C 再聞香。保護嗅覺並清晰感受香氣。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 紅茶全球傳播史 (Part 9) */}
                        <div id="part9" className="scroll-mt-32">
                            <AcademyContentBlock title="紅茶的全球傳播史：從鴉片戰爭到台灣的阿薩姆" icon={Globe}>
                                <div className="space-y-8">
                                    <p className="text-lg leading-relaxed text-stone-700">
                                        紅茶的全球傳播史是一部充滿商業角力與冒險精神的壯闊史詩。
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">貿易逆差與鴉片戰爭</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            19世紀英國對中國茶葉需求致貿易逆差，遂走私鴉片。鴉片戰爭本質上是一場由茶葉引發的貿易戰爭。
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">「茶盜」福鈞與大吉嶺</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            英國植物學家羅伯特·福鈞（Robert Fortune）深入中國竊取茶種與技術至印度，開啟大吉嶺紅茶輝煌時代，被稱為「茶盜」。
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">台灣紅茶的起源與發展</h4>
                                        <div className="space-y-4">
                                            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                                                <h5 className="font-bold text-stone-900 mb-2">1925年日治時期</h5>
                                                <p className="text-sm text-stone-700">
                                                    日本專家赴印度引進阿薩姆大葉種，據傳將茶籽藏於<strong className="text-amber-700">「空心拐杖」</strong>帶回。
                                                </p>
                                            </div>
                                            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                                                <h5 className="font-bold text-stone-900 mb-2">魚池的成功</h5>
                                                <p className="text-sm text-stone-700">
                                                    魚池風土與阿薩姆原產地最相似，成為試種效果最佳的核心產區。
                                                </p>
                                            </div>
                                            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                                                <h5 className="font-bold text-stone-900 mb-2">台茶18號 (紅玉)</h5>
                                                <p className="text-sm text-stone-700">
                                                    1999年成功培育。台灣野生山茶 + 緬甸大葉種。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 解構紅茶 (Part 10) */}
                        <div id="part10" className="scroll-mt-32">
                            <AcademyContentBlock title="解構紅茶：品種、分級與加工工藝" icon={Fingerprint}>
                                <div className="space-y-8">
                                    <p className="text-lg leading-relaxed text-stone-700">
                                        掌握紅茶精髓需理解其分類系統與製作原理。
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">大葉種 vs. 小葉種</h4>
                                        <p className="text-stone-700 leading-relaxed mb-4">
                                            區別在於微觀<strong className="text-emerald-700">「細胞組織結構」</strong>。海綿組織（圓形、多孔可儲存風味）大葉種佔 2-3 倍，故滋味飽滿。
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">國際分級與工序</h4>
                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                                <h5 className="font-bold mb-1">分級</h5>
                                                <p className="text-xs text-stone-600">條型 (FOP), 碎型 (BOP), CTC (顆粒型)。</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                                <h5 className="font-bold mb-1">工序</h5>
                                                <p className="text-xs text-stone-600">萎凋 → 揉捻 → 補足發酵 → 乾燥</p>
                                            </div>
                                        </div>
                                        <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                                            <strong className="text-rose-800">解塊：</strong> 揉捻中需散熱防止悶味。<br />
                                            <strong className="text-rose-800">補足發酵：</strong> 95% 濕度 / 25°C 恆溫，產生茶黃質與茶紅質。
                                        </div>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 沖泡實踐指南 (Part 11) */}
                        <div id="part11" className="scroll-mt-32">
                            <AcademyContentBlock title="紅茶沖泡實踐指南" icon={Coffee}>
                                <div className="space-y-8">
                                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
                                        <table className="w-full">
                                            <thead className="bg-stone-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-sm font-bold">參數</th>
                                                    <th className="px-6 py-3 text-left text-sm font-bold">小葉種</th>
                                                    <th className="px-6 py-3 text-left text-sm font-bold">大葉種</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-stone-200">
                                                <tr><td className="px-6 py-4 text-sm font-medium">置茶量</td><td className="px-6 py-4 text-sm">1/2 - 1/3</td><td className="px-6 py-4 text-sm">1/3 - 1/4</td></tr>
                                                <tr><td className="px-6 py-4 text-sm font-medium">水溫</td><td className="px-6 py-4 text-sm">90-95°C</td><td className="px-6 py-4 text-sm">80-90°C (降溫)</td></tr>
                                                <tr><td className="px-6 py-4 text-sm font-medium">溫潤泡</td><td className="px-6 py-4 text-sm text-stone-500" colSpan="2">不建議 (精華在表面)</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">降低澀感的注水技巧</h4>
                                        <ul className="space-y-2 text-stone-700">
                                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div><span><strong>沿杯壁注水：</strong> 緩沖，減緩翻滾。</span></li>
                                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div><span><strong>柔化弧度：</strong> 環狀細注，層次更佳。</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 文化意涵 (Part 12) */}
                        <div id="part12" className="scroll-mt-32">
                            <AcademyContentBlock title="紅茶的文化意涵與全球影響力" icon={History}>
                                <div className="space-y-8">
                                    <p className="text-stone-700 leading-relaxed">
                                        紅茶佔全球消費 70%。易保存、包容性高（調飲）、價格親民、用途廣。
                                    </p>
                                    <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                                        <h4 className="font-bold text-rose-900 mb-2">從皇室嫁妝到英式下午茶</h4>
                                        <p className="text-rose-900/80 text-sm leading-relaxed">
                                            葡萄牙公主凱薩琳嫁給英王查理二世，帶入飲茶風尚。「三點一刻，時間因你而停止。」描繪了下午茶的神聖地位。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 茶湯會 (Part 13) */}
                        <div id="part13" className="scroll-mt-32">
                            <AcademyContentBlock title="茶湯會：一場茶與自我的對話" icon={Users}>
                                <div className="space-y-8">
                                    <p className="text-lg leading-relaxed text-stone-700">
                                        「茶湯會」是學習的昇華。每位學員成為主人，展現獨特詮釋。
                                    </p>
                                    <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                                        <img
                                            src={images.party}
                                            alt="Elegant Tea Party Setup"
                                            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-5 bg-white rounded-xl shadow-sm border border-stone-200">
                                            <h5 className="font-bold text-stone-900 mb-2">1. 茶品選擇</h5>
                                            <p className="text-xs text-stone-600">說明背景、產地、品種、季節。</p>
                                        </div>
                                        <div className="p-5 bg-white rounded-xl shadow-sm border border-stone-200">
                                            <h5 className="font-bold text-stone-900 mb-2">2. 茶席理念</h5>
                                            <p className="text-xs text-stone-600">融入個人想法、季節感或文學意象（如快雪時晴帖）。</p>
                                        </div>
                                        <div className="p-5 bg-white rounded-xl shadow-sm border border-stone-200">
                                            <h5 className="font-bold text-stone-900 mb-2">3. 試茶理路</h5>
                                            <p className="text-xs text-stone-600">規劃參數，將理念轉化為風味藍圖。</p>
                                        </div>
                                        <div className="p-5 bg-white rounded-xl shadow-sm border border-stone-200">
                                            <h5 className="font-bold text-stone-900 mb-2">4. 茶湯風格</h5>
                                            <p className="text-xs text-stone-600">清晰闡述期望呈現的風味。</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-stone-900 mb-4">品茶的五種美好 (歐陽修)</h4>
                                        <div className="grid grid-cols-5 gap-2 text-center">
                                            {[['泉甘', '水質甘甜', Droplets, 'text-blue-500'], ['器潔', '器物潔淨', Sparkles, 'text-emerald-500'], ['天色佳', '天氣晴好', '☀️', 'text-amber-500'], ['嘉客', '志同道合', Users, 'text-purple-500'], ['新茶', '品質優異', Coffee, 'text-rose-500']].map(([title, , Icon, colorClass]) => (
                                                <div key={title} className="bg-stone-50 p-3 rounded-lg">
                                                    <div className={`mx-auto mb-1 ${colorClass} flex justify-center`}>
                                                        {typeof Icon === 'string' ? Icon : <Icon size={20} />}
                                                    </div>
                                                    <div className="font-bold text-stone-800 text-xs">{title}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <AcademyHighlightBox type="conclusion">
                                        最終，茶湯會不僅是一次學習成果的檢驗，更是一次將茶道融入生活美學、創造美好體驗的深刻實踐，為這段習茶之旅畫上一個圓滿的句點。
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
