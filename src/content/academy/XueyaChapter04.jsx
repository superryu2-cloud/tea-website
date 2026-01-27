import React, { useState, useEffect } from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';
import {
    Sparkles, Flame, Scale, Droplets, Heart, Award, Wind, Activity,
    Eye, TrendingUp, CloudRain, Map, CircleDollarSign, Sprout,
    Coffee, Mountain, Layout, PenTool, Scroll, FlaskConical,
    Menu, ArrowRight, Quote, Leaf, Feather, Palette, X, ZoomIn
} from 'lucide-react';

// Import Generated Images
import heroImage from '../../assets/images/xueya-ch4-hero-v2.png';
import pouringImage from '../../assets/images/xueya-ch4-pouring.png';
import mistImage from '../../assets/images/xueya-ch4-mist.png';
import vesselsImage from '../../assets/images/xueya-ch4-vessels.png';
import tangImage from '../../assets/images/xueya-ch4-dynasty-tang.png';
import songImage from '../../assets/images/xueya-ch4-dynasty-song.png';
import mingImage from '../../assets/images/xueya-ch4-dynasty-ming.png';
import seatHorizontalImage from '../../assets/images/xueya-ch4-seat-horizontal.png';
import seatVerticalImage from '../../assets/images/xueya-ch4-seat-vertical.png';
import artConnectionImage from '../../assets/images/xueya-ch4-art-connection.png';

// Reusing the SectionTitle and QuoteBlock from recent upgrades for consistency
function SectionTitle({ icon: Icon, title, subtitle, colorClass = "text-stone-900" }) {
    return (
        <div className="flex items-start gap-4 mb-10 group">
            <div className={`p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-stone-200 ${colorClass} group-hover:scale-110 transition-transform duration-500`}>
                <Icon size={28} strokeWidth={1.5} />
            </div>
            <div className="pt-2">
                <h3 className={`text-3xl font-extrabold ${colorClass} font-serif tracking-wide`}>{title}</h3>
                {subtitle && <p className="text-stone-600 text-lg mt-2 font-medium">{subtitle}</p>}
            </div>
        </div>
    )
}

function QuoteBlock({ children }) {
    return (
        <div className="relative p-10 rounded-3xl bg-[#fcfaf7] border border-[#e6dcc3] my-12 shadow-[0_4px_20px_-8px_rgba(180,160,120,0.3)] mx-4 md:mx-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"></div>
            <div className="absolute -top-4 -left-2 text-6xl text-amber-800/10 font-serif">“</div>
            <p className="text-xl text-stone-800 leading-relaxed italic relative z-10 font-serif tracking-wide font-medium">
                {children}
            </p>
            <div className="absolute -bottom-10 -right-2 text-6xl text-amber-800/10 font-serif rotate-180">“</div>
        </div>
    );
}

// Background Texture Component
function TextureOverlay() {
    return (
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] pointer-events-none"></div>
    );
}

export default function XueyaChapter04() {
    const [activeSection, setActiveSection] = useState('intro');

    // Navigation Items
    const tocItems = [
        { id: 'intro', label: '引言：人文茶道哲學' },
        { id: 'part1', label: '第一部：美學基礎' },
        { id: 'part2-header', label: '第二部：儀軌實務' },
        { id: 'part2-1', label: '實務一：溫器與預測', isSub: true },
        { id: 'part2-2', label: '實務二：製茶與入茶', isSub: true },
        { id: 'part2-3', label: '實務三：沖泡與温控', isSub: true },
        { id: 'part2-4', label: '實務五：出湯與散熱', isSub: true }, // Corrected number based on original flow
        { id: 'part2-5', label: '實務六：奉茶與互動', isSub: true },
        { id: 'part2-6', label: '實務七：結席與修復', isSub: true },
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

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            {/* Image Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[9999] bg-stone-900/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Enlarged view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <div className="flex flex-col lg:flex-row gap-12 relative max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Left Sidebar Navigation - Enhanced Visuals */}
                <div className="lg:w-80 flex-shrink-0">
                    <div className="sticky top-24">
                        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/50 p-6 overflow-hidden relative">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-10 -mt-10 opacity-50 z-0"></div>

                            <div className="flex items-center gap-3 mb-8 text-stone-800 font-serif border-b-2 border-stone-100 pb-4 relative z-10">
                                <div className="p-2.5 bg-stone-100 rounded-xl">
                                    <Menu size={20} className="text-stone-600" />
                                </div>
                                <span className="font-bold tracking-widest text-lg">章節導覽</span>
                            </div>
                            <nav className="space-y-1 relative z-10">
                                <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-stone-100/80"></div>
                                {tocItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-between group pl-4 ml-2 mb-1
                                        ${activeSection === item.id
                                                ? 'text-emerald-800 font-bold bg-emerald-50/80 shadow-sm translate-x-1'
                                                : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
                                            }`}
                                    >
                                        <span className={`relative z-10 ${item.isSub ? 'pl-6 text-xs' : 'text-base'}`}>{item.label}</span>
                                        {activeSection === item.id && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 min-w-0 pb-32">
                    <div className="space-y-20">
                        <AcademySection
                            id="xueya-04"
                            title="人文茶道儀軌：溫、置、注、奉"
                            label="ACADEMY · XUEYA · CH04"
                            subtitle="從技術功能到情感連結的生命修煉"
                            className="bg-transparent"
                        >
                            {/* 引言 - Intro */}
                            <div id="intro" className="scroll-mt-32">
                                {/* Intro */}
                                <AcademySection id="xueya-04-intro" title="茶藝精神" label="ACADEMY · XUEYA · CH04">
                                    <AcademyContentBlock title="什麼是茶藝？" icon={Sparkles}>
                                        <div className="text-center mb-10 max-w-3xl mx-auto">
                                            <p className="text-2xl font-serif text-stone-800 leading-relaxed font-semibold">
                                                以茶為本質，透過藝術的形式、揭示的過程，作用於茶湯。<br />
                                                形式可繁可簡，都是為了<span className="text-emerald-800">定調茶的氣場</span>。
                                            </p>
                                        </div>

                                        <div className="bg-stone-50 rounded-3xl p-10 border border-stone-200 shadow-sm relative overflow-hidden mb-12 group hover:shadow-lg transition-all duration-500">
                                            {/* Abstract background symbol - Heart */}
                                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                                                <Heart size={200} className="text-stone-900" />
                                            </div>
                                            <h4 className="text-3xl font-bold font-serif text-stone-900 mb-6">
                                                轉<span className="text-emerald-700">心</span>成<span className="text-amber-700">象</span>，是藝術；
                                                轉<span className="text-amber-700">象</span>成<span className="text-emerald-700">心</span>，是智慧
                                            </h4>
                                            <div className="prose prose-lg text-stone-700 font-medium leading-relaxed">
                                                <p className="mb-4">
                                                    王羲之在《蘭亭序》有講：「心之所向」。心想要什麼，就往那個方向走。
                                                </p>
                                                <p className="mb-4">
                                                    藝術其實就是把心中的感受變為外在的形式成象。比方說，貝多芬的命運交響曲，就是生命狀態、心情，用音符成了曲，變成了聽得到的音樂藝術。
                                                </p>
                                                <div className="border-l-4 border-emerald-500 pl-6 py-2 bg-emerald-50/50 rounded-r-lg my-6">
                                                    <p className="font-serif italic text-emerald-900 font-bold m-0">
                                                        手，傳遞的是我的心。同樣的茶，不同的人泡，滋味就不一樣。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dynasty Cards */}
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {/* Tang */}
                                            <div className="group relative rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-[#fdfbf7] border border-stone-100">
                                                <div className="h-48 overflow-hidden relative">
                                                    <img src={tangImage} alt="Tang Dynasty - Lu Yu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.2] opacity-90 group-hover:opacity-100" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] to-transparent"></div>
                                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest text-stone-600 shadow-sm">TANG DYNASTY</div>
                                                </div>
                                                <div className="p-8 relative -mt-10">
                                                    <h5 className="text-2xl font-black font-serif text-stone-900 mb-1">唐 · 肯定時期</h5>
                                                    <div className="w-12 h-1 bg-amber-500 mb-4 rounded-full"></div>
                                                    <p className="text-stone-700 font-medium leading-relaxed">
                                                        陸羽《茶經》問世，奠定茶道規矩。飲茶從解渴昇華為精神文化。
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Song */}
                                            <div className="group relative rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-[#fdfbf7] border border-stone-100">
                                                <div className="h-48 overflow-hidden relative">
                                                    <img src={songImage} alt="Song Dynasty - Tea Whisking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.2] opacity-90 group-hover:opacity-100" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] to-transparent"></div>
                                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest text-stone-600 shadow-sm">SONG DYNASTY</div>
                                                </div>
                                                <div className="p-8 relative -mt-10">
                                                    <h5 className="text-2xl font-black font-serif text-stone-900 mb-1">宋 · 開展時期</h5>
                                                    <div className="w-12 h-1 bg-stone-800 mb-4 rounded-full"></div>
                                                    <p className="text-stone-700 font-medium leading-relaxed">
                                                        文風鼎盛，鬥茶風氣興起。蔡襄《茶錄》與蘇軾詩詞，將茶藝推向審美高峰。
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Ming */}
                                            <div className="group relative rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-[#fdfbf7] border border-stone-100">
                                                <div className="h-48 overflow-hidden relative">
                                                    <img src={mingImage} alt="Ming Dynasty - Loose Tea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.2] opacity-90 group-hover:opacity-100" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] to-transparent"></div>
                                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest text-stone-600 shadow-sm">MING DYNASTY</div>
                                                </div>
                                                <div className="p-8 relative -mt-10">
                                                    <h5 className="text-2xl font-black font-serif text-stone-900 mb-1">明 · 雅皇時期</h5>
                                                    <div className="w-12 h-1 bg-emerald-600 mb-4 rounded-full"></div>
                                                    <p className="text-stone-700 font-medium leading-relaxed">
                                                        朱元璋罷造團茶，散茶興起。文人雅士請求「雅、適、靜」，奠定現代泡茶法基礎。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </AcademyContentBlock>
                                </AcademySection>
                            </div>
                        </AcademySection>

                        <div className="py-6">
                            <h2 id="part1" className="text-4xl font-bold text-stone-800 mb-4 scroll-mt-32 flex items-center gap-4 font-serif">
                                <span className="text-stone-200 font-sans text-6xl select-none opacity-50">01</span>
                                <div>
                                    美學基礎
                                    <p className="text-stone-500 text-lg font-normal mt-2 font-sans tracking-wide">茶席、書畫與經典美學的互通實踐</p>
                                </div>
                            </h2>
                        </div>

                        {/* 1. 茶席佈置 */}
                        <AcademyContentBlock title="茶席佈置的基本儀軌" icon={Layout}>
                            <div className="space-y-10">
                                {/* Visual Upgrade: Layout Cards */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Horizontal Layout - River */}
                                    <div className="bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-[2rem] border border-blue-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-10 -mt-10 opacity-40"></div>
                                        <div className="flex items-center justify-between mb-6 relative z-10">
                                            <h5 className="font-bold text-stone-900 text-2xl font-serif">橫式布席</h5>
                                            <span className="px-3 py-1 bg-white text-blue-800 rounded-full text-xs font-bold shadow-sm border border-blue-100">入門基本款</span>
                                        </div>
                                        <div
                                            className="h-48 mb-6 bg-blue-50/50 rounded-xl overflow-hidden border border-blue-100 shadow-inner group-hover:shadow-md transition-all duration-500 cursor-zoom-in relative"
                                            onClick={() => setSelectedImage(seatHorizontalImage)}
                                        >
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <ZoomIn className="text-stone-600 drop-shadow-md" size={32} />
                                            </div>
                                            <img src={seatHorizontalImage} alt="Horizontal Tea Seat Layout - Water Flow" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                        </div>
                                        <ul className="space-y-4 text-stone-700 relative z-10">
                                            <li className="flex gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5"><Activity size={14} /></div>
                                                <span><strong>視覺流動：</strong> 類比《清明上河圖》，如水流般靈動流轉。</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5"><Heart size={14} /></div>
                                                <span><strong>心理感受：</strong> 「平遠」意境，自在悠遠。臺灣復興佔比 80%。</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Vertical Layout - Mountain */}
                                    <div className="bg-gradient-to-br from-white to-stone-100/50 p-8 rounded-[2rem] border border-stone-200 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-stone-200 rounded-bl-full -mr-10 -mt-10 opacity-40"></div>
                                        <div className="flex items-center justify-between mb-6 relative z-10">
                                            <h5 className="font-bold text-stone-900 text-2xl font-serif">直式布席</h5>
                                            <span className="px-3 py-1 bg-stone-800 text-stone-100 rounded-full text-xs font-bold shadow-sm">境界進階款</span>
                                        </div>
                                        <div
                                            className="h-48 mb-6 bg-stone-100/50 rounded-xl overflow-hidden border border-stone-200 shadow-inner group-hover:shadow-md transition-all duration-500 cursor-zoom-in relative"
                                            onClick={() => setSelectedImage(seatVerticalImage)}
                                        >
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                <ZoomIn className="text-stone-600 drop-shadow-md" size={32} />
                                            </div>
                                            <img src={seatVerticalImage} alt="Vertical Tea Seat Layout - Mountain Rise" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                        </div>
                                        <ul className="space-y-4 text-stone-700 relative z-10">
                                            <li className="flex gap-3">
                                                <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 shrink-0 mt-0.5"><Activity size={14} /></div>
                                                <span><strong>視覺流動：</strong> 類比范寬《谿山行旅圖》，由下往上延伸。</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 shrink-0 mt-0.5"><Heart size={14} /></div>
                                                <span><strong>心理感受：</strong> 「高遠」意境，肅穆層次分明。</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <AcademyHighlightBox type="tip">
                                    <strong>茶席作為「資訊密碼」的功能：</strong> 資深茶人能透過席上的器具（如胎體厚薄、材質、口徑）預判茶湯風味。這種「得意感」建立了主客之間微妙的心理連結。
                                </AcademyHighlightBox>
                            </div>
                        </AcademyContentBlock>

                        {/* 2. 藝術互通性 */}
                        <AcademyContentBlock title="藝術互通性：書畫與茶道" icon={PenTool}>
                            <div className="bg-[#f4f1ea] rounded-3xl p-8 border border-[#e8dfc8] relative overflow-hidden">
                                <TextureOverlay />
                                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-6">
                                        <h4 className="text-2xl font-bold text-stone-800 font-serif">守破離：墨法與儀軌</h4>
                                        <p className="text-stone-800 leading-relaxed font-medium">
                                            藝術修煉的「守破離」過程必須始於堅實的基本功，正如大師張大千在紮實的根基上才實現了晚年的墨法突破。
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-stone-800 text-stone-100 rounded-lg flex items-center justify-center font-serif text-xl">墨</div>
                                                <div>
                                                    <strong className="block text-stone-900">層次與韻味</strong>
                                                    <p className="text-sm text-stone-600">濃墨破層次、淡墨破韻味。透過對比與「破」展現深度。</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-stone-800 text-stone-100 rounded-lg flex items-center justify-center font-serif text-xl">儀</div>
                                                <div>
                                                    <strong className="block text-stone-900">形式與儀軌</strong>
                                                    <p className="text-sm text-stone-600">透過有序的節奏（方向與順序），將日常飲茶昇華為「生命秩序」。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Placeholder for Art - Abstract Ink Circle */}
                                    <div
                                        className="aspect-square flex items-center justify-center relative overflow-hidden group p-6 rounded-full cursor-zoom-in"
                                        onClick={() => setSelectedImage(artConnectionImage)}
                                    >
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-full">
                                            <ZoomIn className="text-stone-600 drop-shadow-md" size={32} />
                                        </div>
                                        <div className="absolute inset-0 bg-stone-50 rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000"></div>
                                        <img src={artConnectionImage} alt="Artistic Connection - Shu Ha Ri" className="relative z-10 w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-multiply" />
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 3. 經典美學 */}
                        <AcademyContentBlock title="經典茶道美學：實踐框架" icon={Scroll}>
                            <div className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Wu Mei */}
                                    <div className="bg-gradient-to-b from-amber-50 to-white p-8 rounded-[2rem] border border-amber-100 shadow-sm">
                                        <div className="flex items-center gap-3 mb-6 border-b border-amber-200 pb-4">
                                            <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold font-serif">五</div>
                                            <h5 className="font-bold text-amber-900 text-xl">五美（環境與主客）</h5>
                                        </div>
                                        <ul className="space-y-4 text-amber-900/80">
                                            {[['泉甘', '優質且甘甜的泉水是茶湯之本'], ['器潔', '器具必須保持絕對的潔淨'], ['天朗', '清音微雨或天朗氣清之境'], ['佳客', '具備共同審美能力的優質賓客'], ['新茶', '追求新茶的鮮活氣韻']].map(([item, desc], i) => (
                                                <li key={i} className="flex items-center justify-between p-3 bg-white/60 rounded-xl hover:bg-white transition-colors cursor-default">
                                                    <span className="font-bold font-serif text-lg">{item}</span>
                                                    <span className="text-sm opacity-80">{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Si Shi */}
                                    <div className="bg-gradient-to-b from-stone-50 to-white p-8 rounded-[2rem] border border-stone-200 shadow-sm">
                                        <div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-4">
                                            <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-800 font-bold font-serif">四</div>
                                            <h5 className="font-bold text-stone-900 text-xl">四適（物質互動鏈）</h5>
                                        </div>
                                        <ul className="space-y-4 text-stone-700">
                                            {[['茶之於水', '受水滋潤而釋放生命本質'], ['水藉於器', '透過容器承裝方能成為媒介'], ['湯臣於火', '透過火的溫度使茶與水溶合'], ['成就顏色', '四者共同成就完美的茶湯顏色']].map(([item, desc], i) => (
                                                <li key={i} className="flex flex-col p-3 bg-white/60 rounded-xl hover:bg-white transition-colors cursor-default">
                                                    <span className="font-bold font-serif text-lg text-stone-800 mb-1">{item}</span>
                                                    <span className="text-sm text-stone-500">{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center bg-stone-100/50 p-4 rounded-xl">
                                    <p className="text-stone-500 italic text-sm font-medium">
                                        硬體條件與審美環境完備後，藝術核心便轉向對「溫控」與「溶出率」的科學掌控。
                                    </p>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        <div className="py-8">
                            <h2 id="part2-header" className="text-4xl font-bold text-stone-800 mb-4 scroll-mt-32 flex items-center gap-4 font-serif">
                                <span className="text-stone-200 font-sans text-6xl select-none opacity-50">02</span>
                                <div>
                                    儀軌實務指南
                                    <p className="text-stone-500 text-lg font-normal mt-2 font-sans tracking-wide">從物理精準操作到場域隱秩序的完整構建</p>
                                </div>
                            </h2>
                        </div>

                        {/* 1. 溫器 */}
                        <div id="part2-1" className="scroll-mt-32">
                            <AcademyContentBlock title="1. 溫器與水量預測" icon={Flame}>
                                <div className="relative">
                                    <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-stone-200 border-l border-dashed border-stone-300"></div>
                                    <div className="space-y-8">
                                        {/* Step 1 */}
                                        <div className="relative pl-24 group">
                                            <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white border-2 border-rose-200 flex items-center justify-center text-rose-500 font-bold shadow-sm z-10 group-hover:scale-110 transition-transform">01</div>
                                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                                <h5 className="font-bold text-stone-900 text-xl mb-3 font-serif">紫砂壺按壓技巧</h5>
                                                <p className="text-stone-600 leading-relaxed font-medium">食指應輕抵壺蓋氣孔或邊緣，維持約 5 秒的靜態按壓。真意在於感知器物張力，確保氣孔暢通，使後續出湯不致中斷。</p>
                                            </div>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="relative pl-24 group">
                                            <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white border-2 border-rose-200 flex items-center justify-center text-rose-500 font-bold shadow-sm z-10 group-hover:scale-110 transition-transform">02</div>
                                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                                <h5 className="font-bold text-stone-900 text-xl mb-3 font-serif">水量預測與吸水率</h5>
                                                <p className="text-stone-600 leading-relaxed font-medium">注水至 8-9 分滿（預留 10-20% 給乾燥茶葉吸水）。準確評估水位，確保每位賓客分量均等，避免殘渣失禮。</p>
                                            </div>
                                        </div>
                                        {/* Step 3 */}
                                        <div className="relative pl-24 group">
                                            <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white border-2 border-rose-200 flex items-center justify-center text-rose-500 font-bold shadow-sm z-10 group-hover:scale-110 transition-transform">03</div>
                                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                                <h5 className="font-bold text-stone-900 text-xl mb-3 font-serif">溫杯順序與換手</h5>
                                                <p className="text-stone-600 leading-relaxed font-medium">「由右至左、由內而外」，轉向為順時針。關鍵細節在於「不跨過壺」，需換手操作以維持場域清朗。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <AcademyHighlightBox type="tip">
                                        預測茶湯量是「待客禮儀」的技術基石，將技術運算轉化為對席間時空的掌控力。
                                    </AcademyHighlightBox>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 2. 置茶 */}
                        <div id="part2-2" className="scroll-mt-32">
                            <AcademyContentBlock title="2. 製茶與入茶儀軌" icon={Scale}>
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-stone-800 text-stone-200 p-8 rounded-[2rem] shadow-lg relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-700 rounded-bl-full -mr-10 -mt-10 opacity-30"></div>
                                            <h5 className="font-bold text-white text-xl mb-4 font-serif">空間修復與挪移</h5>
                                            <p className="text-stone-400 leading-relaxed font-medium">
                                                雙手虎口對準壺承 3 點與 9 點方向輕緩平移，確立儀式區塊。
                                            </p>
                                        </div>
                                        <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-200 shadow-sm relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-200 rounded-bl-full -mr-10 -mt-10 opacity-30"></div>
                                            <h5 className="font-bold text-stone-900 text-xl mb-4 font-serif">茶荷與茶倉對位</h5>
                                            <p className="text-stone-800 leading-relaxed font-medium">
                                                茶荷窄口對準茶倉（合二為一），手指順荷葉邊自然垂放。
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-stone-100 relative overflow-hidden">
                                        <TextureOverlay />
                                        <h5 className="font-bold text-stone-900 text-2xl mb-6 text-center font-serif relative z-10">旋轉的哲學意涵</h5>
                                        <div className="grid grid-cols-2 gap-8 relative z-10">
                                            <div className="text-center group">
                                                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-4 border border-emerald-100 group-hover:scale-110 transition-transform">
                                                    <span className="text-2xl">↻</span>
                                                </div>
                                                <strong className="block mb-2 text-emerald-800 text-lg">置茶（順時針）</strong>
                                                <p className="text-sm text-stone-600">生命從無到有的圓滿流轉</p>
                                            </div>
                                            <div className="text-center group">
                                                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-4 border border-emerald-100 group-hover:scale-110 transition-transform">
                                                    <span className="text-2xl">↺</span>
                                                </div>
                                                <strong className="block mb-2 text-emerald-800 text-lg">入茶（逆時針）</strong>
                                                <p className="text-sm text-stone-600">面對逆境時的謹慎與斂蓄</p>
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
                                <div className="bg-gradient-to-br from-rose-50 to-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-rose-100 relative overflow-hidden">
                                    <h4 className="text-2xl font-bold text-rose-900 mb-6 font-serif">熱能控制的藝術</h4>
                                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                        {[
                                            { title: "高溫萃取", desc: "需 90°C 以上甚至沸水，激發高海拔葉質。" },
                                            { title: "溫潤泡", desc: "水量淹過茶葉，5-10 秒即出（滋潤展開）。" },
                                            { title: "三段式注水", desc: "運用 60°、75°、90° 變化或垂直直下，水不可斷。" },
                                            { title: "時間節奏", desc: "一沖 55 秒，二沖 50 秒，平衡溶出率。" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white/80 p-5 rounded-2xl border border-rose-100/50 shadow-sm hover:bg-white transition-colors">
                                                <h5 className="font-bold text-rose-800 mb-2">{item.title}</h5>
                                                <p className="text-stone-700 text-sm font-medium">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 text-center bg-white/50 p-4 rounded-xl border border-rose-100/30">
                                        <p className="text-rose-900/80 italic font-medium">「方法」與「技巧」的差異存在於 0.5 度的感知間。習茶者將「鐘錶時間」轉化為「生命節奏」。</p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 4. 出湯 */}
                        <div id="part2-4" className="scroll-mt-32">
                            <AcademyContentBlock title="4. 出湯、分杯與散熱" icon={FlaskConical}>
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-200">
                                            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-500 mb-4">A</div>
                                            <h5 className="font-bold text-stone-900 text-2xl mb-4 font-serif">精密出湯</h5>
                                            <p className="text-stone-600 leading-relaxed text-lg">壺嘴距勻杯側邊 2cm，水流輕柔切入。最後 5cc 殘渣棄之。</p>
                                        </div>
                                        <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 shadow-sm">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600 mb-4">B</div>
                                            <h5 className="font-bold text-emerald-900 text-2xl mb-4 font-serif">輕挑慢撥</h5>
                                            <p className="text-emerald-800 leading-relaxed text-lg">使用茶理打斜切入，由下往上輕挑、由內往外慢撥。釋放底部熱壓。</p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-[#f8f8f8] rounded-2xl border border-stone-200 text-center">
                                        <p className="text-stone-500 font-serif text-lg tracking-wide">
                                            勻杯內茶湯應平均分配至六杯 · 「芳香醇」的保留
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        {/* 5. 奉茶 */}
                        <div id="part2-5" className="scroll-mt-32">
                            <AcademyContentBlock title="5. 奉茶與互動" icon={Heart}>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {[
                                            { step: "01", title: "心隨杯走", desc: "視線先注視茶杯，平穩放下後再看客人行禮。由外往內。" },
                                            { step: "02", title: "時間差利用", desc: "利用第二沖 50 秒空檔，行雲流水完成收杯（由右至左）。" },
                                            { step: "03", title: "第三沖轉折", desc: "主客默契已成，可主動打破靜謐進行引導式對話。" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                                                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">{item.step}</div>
                                                <h5 className="font-bold text-stone-900 text-xl mb-3 font-serif">{item.title}</h5>
                                                <p className="text-stone-600 leading-relaxed font-medium text-sm">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <AcademyHighlightBox type="summary">
                                        茶席中的「隱秩序」讓互動不需命令。賓客自然進入共好磁場。
                                    </AcademyHighlightBox>
                                </div>


                                {/* Pouring Image Integration */}
                                <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 mt-8 relative group">
                                    <img src={pouringImage} alt="Elegant Tea Pouring Ritual" className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20">
                                        <span className="text-white/90 font-serif font-medium tracking-wider text-sm flex items-center gap-2">
                                            <Droplets size={16} className="text-stone-200" />
                                            The Art of Flow
                                        </span>
                                    </div>
                                </div>

                            </AcademyContentBlock>
                        </div>

                        {/* 6. 結席 */}
                        <div id="part2-6" className="scroll-mt-32">
                            <AcademyContentBlock title="6. 結席：圓滿的終章" icon={Award}>
                                <div className="bg-stone-900 text-stone-200 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                                    <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center divide-x divide-stone-700/50">
                                        {[
                                            { title: "蓋杯不注", desc: "無聲終結訊號" },
                                            { title: "最後謝禮", desc: "左下右上，躬身致意" },
                                            { title: "潔、整、清", desc: "如未曾有人坐過般乾淨" }
                                        ].map((item, i) => (
                                            <div key={i} className="px-4">
                                                <h5 className="font-bold text-white text-xl mb-2 font-serif">{item.title}</h5>
                                                <p className="text-stone-400 text-sm">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 text-center border-t border-stone-700 pt-8">
                                        <p className="text-stone-400 italic font-medium text-lg">
                                            「回眸看著茶几乾乾淨淨」，是留給賓客最深刻的文化衝擊。是主人的自律與修為。
                                        </p>
                                    </div>
                                </div>
                            </AcademyContentBlock>
                        </div>

                        <div className="py-8">
                            <h2 id="part3" className="text-4xl font-bold text-stone-800 mb-4 scroll-mt-32 flex items-center gap-4 font-serif">
                                <span className="text-stone-200 font-sans text-6xl select-none opacity-50">03</span>
                                <div>
                                    深度解析
                                    <p className="text-stone-500 text-lg font-normal mt-2 font-sans tracking-wide">風土、生理機制與生產經濟學</p>
                                </div>
                            </h2>
                        </div>

                        {/* 1. 環境 - Image Placeholder (Mist) */}
                        <AcademyContentBlock title="高山環境：茶樹生理的重塑" icon={CloudRain}>
                            <div className="space-y-10">
                                <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-100 min-h-[400px] shadow-inner group">
                                    <img src={mistImage} alt="Taiwan High Mountain Mist" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 p-10 z-10">
                                        <h4 className="text-4xl text-white font-black font-serif mb-4 drop-shadow-md">雲霧的餽贈</h4>
                                        <p className="text-white/90 font-medium max-w-lg drop-shadow-sm text-lg">
                                            高海拔低溫使茶樹代謝延緩。這種「緩慢」是高品質的關鍵。特別是<strong>果膠質</strong>的顯著提升，賦予了茶湯厚實的「湯感」與「稠度」。
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100">
                                        <h5 className="font-bold text-emerald-900 text-xl mb-4 font-serif">抗寒機制：高山𩡇</h5>
                                        <p className="text-emerald-800/80 leading-relaxed font-medium">
                                            茶樹為抗寒分泌抵抗素（高濃度芳香油）。這種香氣絕非人工工藝所能模擬，而是山林靈氣的實體化。
                                        </p>
                                    </div>
                                    <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-200">
                                        <h5 className="font-bold text-stone-900 text-xl mb-4 font-serif">光線轉化：慢射光</h5>
                                        <p className="text-stone-800 leading-relaxed font-medium">
                                            雲霧層將直射光轉化為「慢射光」並阻隔紫外線（苦澀來源），造就天然清甜。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 2. 產區 - Table Upgrade */}
                        <AcademyContentBlock title="風味地誌" icon={Map}>
                            <div className="rounded-3xl border border-stone-200 overflow-hidden shadow-lg bg-white">
                                <table className="w-full text-left">
                                    <thead className="bg-stone-50 text-stone-900 font-bold border-b border-stone-200 font-serif text-lg">
                                        <tr>
                                            <th className="p-6">產區</th>
                                            <th className="p-6">香氣</th>
                                            <th className="p-6 hidden md:table-cell">特徵與環境</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-100">
                                        <tr className="hover:bg-amber-50/30 transition-colors group">
                                            <td className="p-6 font-bold text-stone-800 text-xl font-serif">阿里山</td>
                                            <td className="p-6"><span className="px-3 py-1 bg-amber-100 rounded-full text-amber-800 text-sm font-bold">清揚花香</span></td>
                                            <td className="p-6 text-stone-600 hidden md:table-cell group-hover:text-stone-900 transition-colors">發源地，香氣昂揚。北緯 23.5 度。</td>
                                        </tr>
                                        <tr className="hover:bg-red-50/30 transition-colors group">
                                            <td className="p-6 font-bold text-stone-800 text-xl font-serif">梨山</td>
                                            <td className="p-6"><span className="px-3 py-1 bg-red-100 rounded-full text-red-800 text-sm font-bold">花果香</span></td>
                                            <td className="p-6 text-stone-600 hidden md:table-cell group-hover:text-stone-900 transition-colors font-medium">「蘋果鮮切味」。日照足，果樹植被豐富。</td>
                                        </tr>
                                        <tr className="hover:bg-emerald-50/30 transition-colors group">
                                            <td className="p-6 font-bold text-stone-800 text-xl font-serif">杉林溪</td>
                                            <td className="p-6"><span className="px-3 py-1 bg-emerald-100 rounded-full text-emerald-800 text-sm font-bold">龍脂香</span></td>
                                            <td className="p-6 text-stone-600 hidden md:table-cell group-hover:text-stone-900 transition-colors">內斂深厚（湯中香）。霧多日照短。</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </AcademyContentBlock>

                        {/* 3. History & Craft - Restored */}
                        <AcademyContentBlock title="歷史演進與工藝轉型" icon={TrendingUp}>
                            <div className="relative border-l-2 border-stone-200 ml-6 space-y-10 py-4">
                                {/* Event 1 */}
                                <div className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-400 border-2 border-white shadow-sm"></div>
                                    <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                        <h5 className="font-bold text-stone-900 mb-2 font-serif text-lg">歷史原點：林允發</h5>
                                        <p className="text-stone-800 leading-relaxed font-medium">
                                            目睹鹿谷茶農住進<strong>「三層樓房」</strong>與開起<strong>「進口車」</strong>的商業成功，林允發先生率先砍竹改種茶，開啟了阿里山茶業傳奇。
                                        </p>
                                    </div>
                                </div>
                                {/* Event 2 */}
                                <div className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                        <h5 className="font-bold text-emerald-900 mb-2 font-serif text-lg">工藝革命：部分發酵</h5>
                                        <p className="text-emerald-900 leading-relaxed font-medium">
                                            為保留山氣，採輕發酵、不焙火。術語演進為<strong>「部分發酵」</strong>體系，細分為輕、中、重。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 4. 生產經濟學 - Data Viz */}
                        <AcademyContentBlock title="生產經濟學" icon={CircleDollarSign}>
                            <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-stone-200 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border border-stone-700">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-900/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                                    <div className="w-40 h-40 bg-stone-800 text-amber-500 rounded-full flex items-center justify-center text-5xl font-black shadow-none border-2 border-stone-700">
                                        20x
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-3xl mb-4 font-serif text-white">極端成本下的價值</h5>
                                        <p className="text-stone-400 text-xl leading-relaxed font-medium">
                                            高山全賴人工採摘，每斤成本高達 <strong className="text-amber-500">80 元</strong>（平地機械僅 4 元）。這 20 倍差距是價格基本支撐點。<br />
                                            <span className="text-sm opacity-60 mt-4 block border-t border-stone-700 pt-4">需按天計費採摘「一心二葉」，進一步推高成本。</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 5. Professional Tasting - Restored */}
                        <AcademyContentBlock title="專業評茗與茶席美學" icon={Eye}>
                            <div className="space-y-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[['望', '觀葉肉色澤'], ['聞', '辨識山頭香'], ['問', '詢海拔工藝'], ['切', '把脈果膠質']].map(([action, desc]) => (
                                        <div key={action} className="text-center p-6 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                                            <div className="w-12 h-12 mx-auto bg-stone-100 text-stone-800 rounded-full flex items-center justify-center font-bold font-serif text-2xl mb-3 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">{action}</div>
                                            <div className="text-xs font-bold text-stone-500 tracking-wider uppercase">{desc}</div>
                                        </div>
                                    ))}
                                </div>
                                <AcademyHighlightBox type="analysis">
                                    <strong>浪漫主義：</strong> 現代茶農播放莫札特昇華茶魂。市場應區分「拼配」（優化）與「混茶」（替代）。
                                </AcademyHighlightBox>
                            </div>
                        </AcademyContentBlock>

                        <div className="py-8">
                            <h2 id="part4" className="text-4xl font-bold text-stone-800 mb-4 scroll-mt-32 flex items-center gap-4 font-serif">
                                <span className="text-stone-200 font-sans text-6xl select-none opacity-50">04</span>
                                <div>
                                    因茶擇器
                                    <p className="text-stone-500 text-lg font-normal mt-2 font-sans tracking-wide">材質科學與當代美學</p>
                                </div>
                            </h2>
                        </div>

                        {/* 擇器 - Comparison */}
                        <AcademyContentBlock title="材質科學：瓷 vs 紫砂" icon={Coffee}>
                            <div className="mb-8 rounded-3xl overflow-hidden shadow-lg border border-stone-200 relative group">
                                <img src={vesselsImage} alt="Porcelain vs Zisha" className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-0 border border-stone-200 rounded-[2.5rem] overflow-hidden shadow-xl">
                                {/* Porcelain */}
                                <div className="bg-white p-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 mb-6 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center shadow-inner">
                                        <Coffee size={40} className="text-stone-300" />
                                    </div>
                                    <h5 className="font-bold text-stone-900 text-2xl mb-2 font-serif">瓷器</h5>
                                    <div className="text-xs font-bold text-stone-400 tracking-widest uppercase mb-6">Porcelain</div>
                                    <p className="text-stone-600 font-medium mb-4">無毛細孔 · 鮮爽真實</p>
                                    <div className="bg-stone-50 px-4 py-2 rounded-lg text-sm text-stone-500">川燙青菜般的純粹</div>
                                </div>
                                {/* Zisha */}
                                <div className="bg-[#e6dcc3] p-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 mb-6 rounded-full bg-[#d3c5a3] border border-[#c5b590] flex items-center justify-center shadow-inner">
                                        <Mountain size={40} className="text-[#8c7b58]" />
                                    </div>
                                    <h5 className="font-bold text-[#5c4f34] text-2xl mb-2 font-serif">紫砂</h5>
                                    <div className="text-xs font-bold text-[#8c7b58] tracking-widest uppercase mb-6">Zisha Clay</div>
                                    <p className="text-[#5c4f34] font-medium mb-4">具毛細孔 · 修飾雜味</p>
                                    <div className="bg-[#d3c5a3]/50 px-4 py-2 rounded-lg text-sm text-[#736445]">紅燒燉肉般的醇厚</div>
                                </div>
                            </div>
                        </AcademyContentBlock>

                        {/* 結語 */}
                        <div id="conclusion" className="scroll-mt-32 pt-10">
                            <AcademyContentBlock title="結語" icon={Award}>
                                <div className="text-center max-w-2xl mx-auto">
                                    <div className="w-20 h-20 mx-auto bg-stone-900 text-stone-100 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                                        <Feather size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-6 font-serif">「像那個樣子比本來那個樣子重要」</h3>
                                    <p className="text-lg leading-relaxed text-stone-600 font-medium">
                                        這並非指虛偽的表演，而是一種「身心安頓」的實踐。透過規範化的儀軌與姿態，強迫混亂的內心回歸秩序。<br /><br />
                                        品味不應只有單一標準，專業分析師應具備釐清「岩韻」與「鹹味」的鑑賞能力，尊重一方水土。
                                    </p>
                                </div>
                            </AcademyContentBlock>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
