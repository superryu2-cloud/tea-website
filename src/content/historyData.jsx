// Auto-extracted from src/App.jsx

import React, { useState } from 'react';
import { Leaf, Droplets, Clock, BookOpen, Search, Menu, X, ChevronRight, Wind, Flame, Tag, Layers, Map, FlaskConical, ArrowRight, Mountain, Compass, Sprout, Microscope, Scale, Table, Info, Star, Feather, Scroll, Thermometer, Sun, Snowflake, CloudRain, Wheat, Cloud, User, TrendingUp, History, Book, PenTool, Globe, Bug, Sparkles, ShieldAlert, CheckCircle, Palette, Layout, Calendar, RefreshCw, ArrowUp, Filter, Play, Pause, RotateCcw, Bot, HelpCircle, Hammer } from 'lucide-react';
import { chineseTeaDynasties, dongdingTimeline, teaNameEtymology, teaNicknames } from '../data/historyCulture';
import ImageLightbox from '../components/ImageLightbox';
import shennongImage from '../assets/images/history_shennong.png';
import scrollTexture from '../assets/images/history_calligraphy_scroll.png';
import dynastyRiver from '../assets/images/history_dynasty_river.png';
import teaHouseImage from '../assets/images/history_tea_house_ghibli.png';
import highMountainImage from '../assets/images/history_high_mountain_ghibli.png';

function ZoomableImage({ src, alt, containerClassName, imgClassName, overlayClassName, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={containerClassName}>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group absolute inset-0 w-full h-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70"
                aria-label={`${alt || '圖片'}（點擊放大）`}
            >
                <img src={src} alt={alt} className={imgClassName} />
                {overlayClassName ? <div className={overlayClassName} /> : null}
                {children}
                <span className="absolute bottom-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-stone-700 shadow-lg opacity-0 transition-opacity group-hover:opacity-100">
                    <Search size={18} />
                </span>
            </button>
            <ImageLightbox
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                imageSrc={src}
                altText={alt}
            />
        </div>
    );
}


export function createHistoryData({ searchTerm, setSearchTerm, filteredTimelineData, TimelineRow }) {
    return {
        chineseTeaHistory: {
            title: "中華茶史",
            icon: <BookOpen size={24} />,
            content: (
                <div className="space-y-16 animate-fadeIn text-stone-800">
                    {/* Shennong - Ghibli Legend Style */}
                    <div className="bg-[#fcfaf5] rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-[#e8dfc8] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-bl-full opacity-30 -mr-16 -mt-16 z-0"></div>
                        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                            <div className="order-2 md:order-1">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold text-sm mb-6 shadow-sm border border-amber-200">
                                    茶的起源 · 上古傳說
                                </div>
                                <h3 className="text-4xl font-black text-amber-950 mb-6 font-calligraphy tracking-tight drop-shadow-sm">神農氏：茶的發現者</h3>
                                <div className="prose prose-lg prose-stone max-w-none font-medium text-stone-800">
                                    <p className="mb-6 leading-relaxed">
                                        相傳神農氏「嘗百草」。有一天，他翻山越嶺，口渴得很，忽然有一片樹葉飄落眼前，撿起細看，青嫩可愛；用手一餒，汁液潤滑；以鼻一嗅，氣味芬芳；用舌一舐，苦澀非常。於是，憑著神農氏豐富的經驗，便斷定是一種止渴、提神的藥。
                                    </p>
                                    <p className="text-stone-700 text-base border-l-4 border-amber-400 pl-4 py-3 italic bg-amber-50 rounded-r-lg shadow-inner">
                                        以當時來說，神農氏發現茶樹，只是鑑別、斷定茶有藥效而已；真正使茶成為「國飲」的地位，是數千年來難以數計的無名氏不斷的栽培、更新、繁衍，由嚼青葉，而發明為採葉焙製；由採葉焙製，而改良為煎烹飲啜。如此的發明再發明，改良再改良，使得此一深具民族性的飲料，能流傳千古而為世人所飲用。
                                    </p>
                                </div>
                            </div>
                            <ZoomableImage
                                src={shennongImage}
                                alt="Shennong Tasting Herbs"
                                containerClassName="order-1 md:order-2 relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:rotate-1 transition-transform duration-500"
                                imgClassName="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                                overlayClassName="absolute inset-0 bg-gradient-to-t from-amber-950/30 to-transparent mix-blend-multiply"
                            />
                        </div>
                    </div>

                    {/* Etymology - Bamboo Scroll Style */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-stone-400/30 bg-[#2c241b]">
                        <img src={scrollTexture} alt="Ancient Scroll Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-800/80"></div>

                        <div className="relative z-10 p-8 md:p-12 text-stone-100">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                                    <PenTool className="text-amber-200" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold font-calligraphy text-amber-50 text-shadow-sm">茶名考</h4>
                                    <div className="text-amber-200/60 text-sm tracking-widest uppercase mt-1 font-medium">Etymology of Tea</div>
                                </div>
                            </div>

                            {/* Top Content: Intro & Fun Fact */}
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-black/20 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
                                    <p className="text-xl leading-loose text-stone-200 font-calligraphy">
                                        茶古作<span className="text-3xl text-amber-300 mx-1 font-bold">「荼」</span>或<span className="text-3xl text-amber-300 mx-1 font-bold">「 」</span>。
                                    </p>
                                    <p className="mt-4 text-stone-300 leading-relaxed text-base font-light tracking-wide">
                                        唐陸羽茶經會說；「其字或從草，或從木，或草木並。其名一曰茶，二日檟，三日蔎，四日茗，五曰荈。」
                                    </p>
                                    <p className="mt-4 text-stone-300 leading-relaxed text-base font-light tracking-wide">
                                        又據神農本草：「苦荼，一名茶，一名選，一名游，冬生益州川谷山陵道旁，凌冬不死，三月三日採乾。」
                                    </p>
                                </div>
                                <div className="bg-amber-900/40 p-6 rounded-xl border border-amber-500/30 shadow-inner flex flex-col justify-center">
                                    <h5 className="text-amber-400 font-bold mb-3 flex items-center text-lg"><Sparkles size={18} className="mr-2" /> 演變小知識</h5>
                                    <p className="text-stone-200 leading-relaxed">
                                        到了唐陸羽茶經問世，將數種不同意義的「荼」減去一劃，成為含一種意義的「茶」字；所以自中唐以後，一般學者因受陸羽的影響，逐漸將「荼」改寫為「茶」了。
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Content: Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {teaNameEtymology.map((item, idx) => (
                                    <div key={idx} className="bg-white/5 p-5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                                        <div className="text-xs text-amber-500/80 mb-2 group-hover:text-amber-400 transition-colors font-medium tracking-widest">
                                            {["一", "二", "三", "四", "五", "六", "七", "八"][idx]}
                                        </div>
                                        <h5 className="font-bold text-amber-50 text-xl mb-2 font-calligraphy tracking-wide">{item.name}</h5>
                                        <p className="text-sm text-stone-300 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Nicknames Grid */}
                    <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-stone-200 shadow-sm">
                        <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center font-calligraphy">
                            <Star className="mr-3 text-amber-500" /> 茶的雅稱與別名
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teaNicknames.map((item, idx) => (
                                <div key={idx} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-serif font-bold text-lg mb-4 shadow-sm">{item.name[0]}</div>
                                    <h5 className="font-bold text-lg text-stone-900 mb-3">{item.name}</h5>
                                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dynasties - River Timeline */}
                    <div className="bg-gradient-to-b from-[#fdfbf9] to-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-stone-200 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-64 md:h-96 opacity-10 pointer-events-none">
                            <img src={dynastyRiver} alt="River of History" className="w-full h-full object-cover grayscale" />
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-3xl font-bold text-stone-900 mb-12 flex items-center justify-center font-calligraphy">
                                <History className="mr-3 text-stone-400" /> 歷代茶事 · 千年流轉
                            </h4>

                            <div className="space-y-12 relative max-w-5xl mx-auto pl-4 md:pl-0">
                                {/* Vertical Line - Left Aligned */}
                                <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-stone-200 border-l border-dashed border-stone-300"></div>

                                {chineseTeaDynasties.map((item, idx) => (
                                    <div key={idx} className="relative pl-24">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-stone-300 z-20 mt-8 shadow-sm"></div>

                                        {/* Card */}
                                        <div className={`p-8 rounded-2xl border shadow-sm relative group hover:-translate-y-1 transition-transform duration-300 ${idx === 0 ? 'bg-emerald-50 border-emerald-100' :
                                            idx === 1 ? 'bg-blue-50 border-blue-100' :
                                                idx === 2 ? 'bg-amber-50 border-amber-100' :
                                                    'bg-stone-50 border-stone-200'
                                            }`}>
                                            {/* Arrow (Left side only) */}
                                            <div className={`absolute top-8 -left-3 w-6 h-6 rotate-45 border-l border-b ${idx === 0 ? 'bg-emerald-50 border-emerald-100' :
                                                idx === 1 ? 'bg-blue-50 border-blue-100' :
                                                    idx === 2 ? 'bg-amber-50 border-amber-100' :
                                                        'bg-stone-50 border-stone-200'
                                                }`}></div>

                                            <h5 className={`text-6xl font-black mb-8 font-calligraphy tracking-wider ${idx === 0 ? 'text-emerald-900' :
                                                idx === 1 ? 'text-blue-900' :
                                                    idx === 2 ? 'text-amber-900' :
                                                        'text-stone-900'
                                                }`}>{item.dynasty}</h5>

                                            <div className="space-y-4">
                                                {item.content.map((p, i) => (
                                                    <p key={i} className="text-stone-700 leading-relaxed text-base border-l-2 border-stone-300/30 pl-4">{p}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        taiwanTeaIndustry: {
            title: "臺灣茶業發展史",
            icon: <TrendingUp size={24} />,
            content: (
                <div className="space-y-16 animate-fadeIn text-stone-800">
                    {/* Introduction */}
                    <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-xl">
                        <div className="relative h-64 md:h-80">
                            <ZoomableImage
                                src="/images/history/qing_tamsui.png"
                                alt="19th Century Tamsui Port"
                                containerClassName="absolute inset-0"
                                imgClassName="w-full h-full object-cover opacity-80"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                                    <h3 className="text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg font-calligraphy">臺灣茶業發展史</h3>
                                    <div className="text-stone-100 text-xl font-medium tracking-wide">從三寶之一到文化象徵</div>
                                </div>
                            </ZoomableImage>
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="prose prose-invert max-w-none">
                                <p className="text-xl text-stone-100 leading-relaxed font-normal mb-8 tracking-wide">
                                    臺灣由於氣候溫暖、潮濕且雨量均勻，故自古即產有茶樹。早期臺灣主要輸出品以<strong className="text-amber-300">茶葉、樟腦、蔗糖</strong>為大宗，當時稱為<strong>臺灣三寶</strong>，更是風光一時。
                                </p>
                                <p className="text-stone-300 leading-relaxed border-t border-stone-600 pt-8 font-medium">
                                    茶葉牽動了民間產業的發展，也影響了臺灣文化百年來的演變過程。從清朝的烏龍茶引入，到日治時期的現代化改革，再到戰後的外銷黃金時代，臺灣茶業的發展史，就是一部臺灣近代經濟與文化的縮影。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Qing Dynasty Period */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-100 text-sky-800 shadow-sm border border-sky-200">
                                <Leaf size={28} />
                            </span>
                            <div>
                                <h3 className="text-4xl font-bold text-stone-900 font-calligraphy mb-1">清朝時期</h3>
                                <div className="text-sky-700 font-bold text-lg">烏龍茶的引入與外銷年代</div>
                            </div>
                        </div>

                        {/* 嘉慶年間 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                            <h4 className="text-xl font-bold text-stone-900 mb-6 flex items-center relative z-10">
                                <span className="w-2 h-8 bg-sky-500 rounded-full mr-3"></span>
                                嘉慶年間：烏龍茶來到臺灣
                            </h4>
                            <div className="space-y-6 relative z-10">
                                <p className="text-stone-700 leading-relaxed text-lg">
                                    烏龍茶是臺灣最早製造的茶葉，遠在<strong>嘉慶年間</strong>即隨福建移民移植到臺灣來。植茶為種籽播種，是當時茶葉栽培方式，也是最早播種方式。當時移民帶一批福建武夷種的烏龍茶來臺灣種植，植於臺灣北部地方坡地開始了茶苗種植。
                                </p>
                                <div className="bg-sky-50/80 p-6 rounded-2xl border border-sky-100">
                                    <h5 className="font-bold text-sky-900 mb-3 flex items-center">
                                        <Book className="mr-2" size={20} /> 臺灣通史記載
                                    </h5>
                                    <p className="text-stone-700 leading-relaxed italic font-serif">
                                        「舊誌稱：嘉慶年時有<strong>柯朝</strong>者歸自福建，始于武夷茶，植於<strong>桀魚坑</strong>（今臺北縣平溪、深坑地區）發育甚佳，即以茶子二鬥播之，收成亦豐，隨互相傳，蓋臺北多雨，一年可收四季，春夏為盛。人工播種之經過記載」。
                                    </p>
                                </div>
                                <p className="text-stone-600 leading-relaxed text-sm">
                                    臺灣茶樹的人工栽培，始於我國大陸早期移民來台，產製方法來自福建武夷，開始製造烏龍茶供應島內消費。
                                </p>
                            </div>
                        </div>

                        {/* 1858-1865 外銷年代 */}
                        <div className="grid md:grid-cols-2 gap-8 items-stretch">
                            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 flex flex-col">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 rounded bg-sky-100 text-sky-800 text-sm font-bold mb-3">1858年（清咸豐8年）</span>
                                    <h4 className="text-xl font-bold text-stone-900 mb-2">外銷年代開啟</h4>
                                </div>
                                <p className="text-stone-700 leading-relaxed mb-6 flex-1">
                                    英法聯軍攻擊中國，迫令締結<strong>天津條約</strong>，規定臺灣府（今台南市）為國際通商口岸。香港英商<strong>怡和洋行</strong>（Jardine.Matheson & co）曾派人到臺灣來收購烏龍茶的粗製品，開始了臺灣茶葉外銷年代。
                                </p>
                                <div className="mt-auto">
                                    <p className="text-stone-700 leading-relaxed text-sm mb-4">
                                        隔年，增闢<strong>淡水港</strong>為國際通商口岸，臺灣茶葉運往福州從事加工精製，再包裝運銷外國更為方便，從此臺灣茶葉運往福州加工的數量逐年增加。
                                    </p>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">淡水海關紀錄</div>
                                            <div className="text-sm font-medium text-stone-900">茶葉輸出</div>
                                        </div>
                                        <div className="text-2xl font-black text-sky-600">82,022 <span className="text-sm font-normal text-stone-400">kg</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100 flex flex-col">
                                <ZoomableImage
                                    src="/images/history/qing_tamsui.png"
                                    alt="1865年 杜特氏"
                                    containerClassName="relative w-full h-48"
                                    imgClassName="w-full h-full object-cover"
                                />
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="mb-auto">
                                        <span className="inline-block px-3 py-1 rounded bg-amber-500 text-white text-xs font-bold mb-3 shadow-sm">1865年 · 關鍵轉折</span>
                                        <h4 className="text-2xl font-bold mb-3 text-stone-900">杜特氏與<br /><span className="text-amber-600">東方美人</span></h4>
                                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                                            <strong>杜特氏</strong>再度來台，採購臺灣茶葉運銷歐洲英國等地，品質獨特獲得消費者好評，<strong>白毫烏龍茶</strong>更贏得英女王美譽（<strong className="text-amber-700">東方美人</strong>），烏龍茶也有（<strong className="text-amber-700">臺灣香檳</strong>）的美譽。
                                        </p>
                                    </div>
                                    <p className="text-stone-500 text-xs leading-relaxed border-t border-stone-100 pt-3 mt-4">
                                        杜特氏鑒於精製烏龍茶在臺灣試製成功，於是進一步計畫在<strong>臺北萬華</strong>地方創設精製烏龍茶廠，臺灣開始走進了烏龍茶精製期。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 清同治：包花茶時期 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
                            <h4 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-100 pb-4">清同治年間：包花茶的誕生</h4>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1 space-y-4">
                                    <p className="text-stone-700 leading-relaxed">
                                        因景氣不好加上臺北專門出口烏龍茶的洋行，認為烏龍茶的價格昂貴無利可圖，一致停止收購，使烏龍茶陷於慘境。一般茶商迫不得已，就將烏龍茶大部份運往福州，全部改製<strong>「花香茶」</strong>。
                                    </p>
                                    <p className="text-stone-700 leading-relaxed">
                                        但由於臺灣茶甘韻持久加上薰花處理，深受茶業界喜愛，逐將臺灣茶與本地茶混合處理，當時福州茶商稱這種多種茶混合包裝在一起的茶通稱<strong>「包花茶」</strong>，也是臺灣茶薰花製造開始。
                                    </p>
                                </div>
                                <div className="flex-1 bg-stone-50 rounded-2xl p-6">
                                    <div className="text-stone-800 font-bold mb-4">茶業兩極化發展</div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 mr-2 shrink-0"></span>
                                            <span className="text-stone-600 text-sm">以傳統武夷茶方式製造烏龍素茶為主</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 mr-2 shrink-0"></span>
                                            <span className="text-stone-600 text-sm">以傳統烏龍素茶再加工薰花為臺灣包花茶為主</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6 pt-4 border-t border-stone-200">
                                        <div className="text-xs font-bold text-stone-500 mb-1">1874年（清光緒元年）</div>
                                        <p className="text-xs text-stone-600 leading-relaxed">
                                            臺灣最早製造包花茶的廠家成立。使用<strong>黃枝花</strong>與<strong>茉莉花</strong>薰製，開啟了與福州茶的競爭。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1885: Taiwan Province Establishment */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 shadow-sm border border-amber-200">
                                <Star size={28} />
                            </span>
                            <div>
                                <h3 className="text-4xl font-bold text-stone-900 font-calligraphy mb-1">1885年</h3>
                                <div className="text-amber-800 font-bold text-lg">臺灣建省與製茶革新</div>
                            </div>
                        </div>

                            <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-xl">
                            <div className="grid md:grid-cols-2">
                                <ZoomableImage
                                    src="/images/history/baozhong_masters.png"
                                    alt="魏靜時與王水錦"
                                    containerClassName="relative h-64 md:h-auto"
                                    imgClassName="w-full h-full object-cover opacity-90"
                                    overlayClassName="absolute inset-0 bg-gradient-to-r from-transparent to-stone-900/10 md:to-stone-900/80"
                                />

                                <div className="p-8 md:p-12 text-white">
                                    <div className="inline-block px-3 py-1 rounded bg-amber-900/50 text-amber-300 border border-amber-500/30 text-xs font-bold mb-6 backdrop-blur-sm">
                                        自然清香年代的開端
                                    </div>
                                    <p className="text-xl text-stone-200 leading-relaxed mb-8 font-medium tracking-wide">
                                        <strong>西元1885年 清光緒11年</strong>，臺灣建省，製茶技術進入重大革新。兩位關鍵人物發明了新的製茶法，震驚茶業界。
                                    </p>

                                    <div className="space-y-4">
                                        {/* 魏靜時 */}
                                        <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">魏</div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">魏靜時 <span className="text-xs text-stone-400 font-normal ml-2">南港包種茶始祖</span></h4>
                                                    <div className="text-xs text-amber-500">受日本昭和天皇頒「白櫻花狀」褒揚</div>
                                                </div>
                                            </div>
                                            <p className="text-stone-300 text-sm leading-relaxed">
                                                發明<strong>「南港種籽」</strong>（包種茶），不需薰花即有天然清香，震驚業界。
                                            </p>
                                        </div>

                                        {/* 王水錦 */}
                                        <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-lg">王</div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">王水錦 <span className="text-xs text-stone-400 font-normal ml-2">文山式製造法改良人</span></h4>
                                                </div>
                                            </div>
                                            <p className="text-stone-300 text-sm leading-relaxed">
                                                以傳統武夷茶製法改良，特色<strong>水紅、甘而熟香</strong>，與南港式並列兩大製造法。
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 border-t border-stone-700 pt-6">
                                        <p className="text-stone-400 leading-relaxed text-sm">
                                            從此臺灣茶業走入新紀元，臺灣烏龍茶處理加工「包花茶」年代在臺灣茶業界結束，茶農依照自已的地理環境、天氣變化、土質、採茶季節及茶葉採收靜置脫水處理時間掌握，開始製造自己茶葉。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Japanese Colonial Period */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red-100 text-red-800 shadow-sm border border-red-200">
                                <History size={28} />
                            </span>
                            <div>
                                <h3 className="text-4xl font-bold text-stone-900 font-calligraphy mb-1">日治時期</h3>
                                <div className="text-red-800 font-bold text-lg">1895-1945：茶業現代化與轉型</div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Modernization */}
                            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
                                <h4 className="text-xl font-bold text-stone-900 mb-4 flex items-center">
                                    <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
                                    現代化與推廣
                                </h4>
                                <p className="text-stone-700 leading-relaxed mb-6">
                                    日人銳意經營茶業，積極擴展栽培面積並對外宣傳。<strong>烏龍茶與包花茶、包種茶</strong>成為主要外銷產業。
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-red-50 p-4 rounded-xl">
                                        <h5 className="font-bold text-red-900 mb-1">平鎮茶業試驗所</h5>
                                        <p className="text-sm text-stone-700">成立於楊梅埔心（今茶改場前身），致力於品種改良與技術標準化。</p>
                                    </div>
                                    <div className="bg-stone-50 p-4 rounded-xl">
                                        <h5 className="font-bold text-stone-900 mb-1">選定四大品種</h5>
                                        <p className="text-sm text-stone-700">青心烏龍、大葉烏龍、青心大冇、硬枝紅心。</p>
                                    </div>
                                </div>
                            </div>

                            {/* 1916: Standardization */}
                            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
                                <h4 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 text-red-600">
                                        <Scale size={20} />
                                    </div>
                                    1916年 · 技術標準化
                                </h4>
                                <div className="space-y-6">
                                    <p className="text-stone-700 leading-relaxed text-sm">
                                        茶業試驗所選定<strong>魏靜時</strong>（南港式）及<strong>王水錦</strong>（文山式）之製法為標準，全台推廣。日本政府更確立「南港式製造法」為台灣製茶技術的母法。
                                    </p>
                                    <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-sm font-bold text-red-900">1918年 四大品種選定</div>
                                            <Sprout size={16} className="text-red-400" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['青心烏龍', '大葉烏龍', '青心大冇', '硬枝紅心'].map((v, i) => (
                                                <div key={i} className="bg-white px-3 py-2 rounded-lg text-xs font-medium text-stone-700 border border-red-100 flex items-center shadow-sm">
                                                    <Leaf size={12} className="text-green-500 mr-2 shrink-0" />
                                                    {v}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 1920 Crisis */}
                            <div className="bg-gradient-to-br from-stone-100 to-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-center">
                                <div className="text-center mb-6">
                                    <div className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-2">1920 CRASH</div>
                                    <h4 className="text-2xl font-black text-stone-800">烏龍茶大崩盤</h4>
                                    <p className="text-stone-500 text-sm mt-2">美國市場崩潰，銷量從1100萬斤暴跌至7萬斤</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-inner border border-stone-100 text-center">
                                    <div className="text-sky-700 font-bold mb-2">包種茶的逆勢崛起</div>
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        在烏龍茶滯銷時，<strong>南港包種茶</strong>卻不受打擊。日本官方委託<strong>魏靜時</strong>擔任教師巡迴全台傳授技法，確立了「南港式製造法」為台灣製茶技術的母法。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1939-1945: War Impact */}
                        <div className="bg-stone-100 rounded-3xl p-8 border border-stone-200 flex flex-col justify-center">
                            <h4 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                                <span className="w-10 h-10 rounded-full bg-stone-300 flex items-center justify-center mr-3 text-stone-600">
                                    <Flame size={20} />
                                </span>
                                1939-1945 · 戰爭摧殘
                            </h4>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex gap-4">
                                    <div className="mt-1"><Wheat size={18} className="text-amber-600" /></div>
                                    <div>
                                        <div className="text-sm font-bold text-stone-800 mb-1">糧食管制</div>
                                        <p className="text-sm text-stone-600 leading-relaxed">
                                            日本政府劃定臺灣為雜糧供應區，強制廢茶園改種蕃薯、馬鈴薯。製茶機器被徵收熔化製成兵器。
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex gap-4">
                                    <div className="mt-1"><User size={18} className="text-stone-500" /></div>
                                    <div>
                                        <div className="text-sm font-bold text-stone-800 mb-1">勞力缺乏</div>
                                        <p className="text-sm text-stone-600 leading-relaxed">
                                            太平洋戰爭爆發，壯丁被徵調充軍，茶園荒蕪。外銷海運中斷，臺灣茶業陷入黑暗期。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Post-War Revival */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-800 shadow-sm border border-blue-200">
                                <RefreshCw size={28} />
                            </span>
                            <div>
                                <h3 className="text-4xl font-bold text-stone-900 font-calligraphy mb-1">戰後復興</h3>
                                <div className="text-blue-800 font-bold text-lg">1945-1970：從廢墟到黃金時代</div>
                            </div>
                        </div>

                        {/* 1945-1947: Reconstruction */}
                        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm group">
                            <h4 className="text-2xl font-bold text-blue-900 mb-8 flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-4 shadow-sm">
                                    <RotateCcw size={24} />
                                </div>
                                1945-1947 · 廢墟中的重建
                            </h4>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <p className="text-stone-700 leading-relaxed border-l-4 border-blue-200 pl-4 py-1">
                                        戰後臺灣茶業幾乎停滯，是<strong>最差的時期</strong>。政府成立「臺灣茶業公司」，積極整頓茶園與工廠。
                                    </p>
                                    <div className="bg-red-50 p-5 rounded-xl border border-red-100 flex gap-4 items-start">
                                        <ShieldAlert size={20} className="text-red-500 mt-1 shrink-0" />
                                        <div>
                                            <div className="text-sm font-bold text-red-800 mb-1">1947 二二八事件衝擊</div>
                                            <p className="text-sm text-stone-600 leading-relaxed">
                                                舊台幣四萬換新台幣一元，加上出口結匯政策，使剛要復甦的茶業再次元氣大傷。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm">
                                        <h5 className="font-bold text-blue-800 mb-4 flex items-center">
                                            <Hammer className="mr-2" size={18} /> 復興關鍵
                                        </h5>
                                        <ul className="space-y-3 text-sm text-stone-700">
                                            <li className="flex items-center p-2 rounded-lg bg-blue-50/50">
                                                <CheckCircle size={16} className="text-blue-500 mr-3 shrink-0" />
                                                國際對手（印度、錫蘭）尚未復原
                                            </li>
                                            <li className="flex items-center p-2 rounded-lg bg-blue-50/50">
                                                <CheckCircle size={16} className="text-blue-500 mr-3 shrink-0" />
                                                政府輔導與農林公司成立
                                            </li>
                                            <li className="flex items-center p-2 rounded-lg bg-blue-50/50">
                                                <CheckCircle size={16} className="text-blue-500 mr-3 shrink-0" />
                                                茶農與業者的勤奮重建
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 md:p-10 border border-blue-100 shadow-sm">
                            <h4 className="text-2xl font-bold text-blue-900 mb-6">綠茶外銷的黃金時代</h4>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 grid md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                                        美商協和洋行發現臺灣潛力，引進大陸綠茶製法。在新竹、桃園等地設立12個製茶廠，將臺灣綠茶大量銷往<strong>北非洲</strong>。
                                    </p>
                                    <div className="flex items-center gap-2 text-stone-500 text-sm">
                                        <TrendingUp size={16} /> 開創了長達20多年的綠茶盛世
                                    </div>
                                </div>
                                <div className="text-center bg-blue-50 p-6 rounded-xl border border-blue-200">
                                    <div className="text-sm font-bold text-blue-800 mb-4">1954年創紀錄</div>
                                    <div className="grid grid-cols-2 gap-6 divide-x divide-blue-200">
                                        <div>
                                            <div className="text-3xl font-black text-blue-700">4.6萬</div>
                                            <div className="text-xs text-blue-600 mt-1">茶園公頃</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black text-blue-700">1480萬</div>
                                            <div className="text-xs text-blue-600 mt-1">輸出公斤</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 1960-1970: Tea Art */}
                        <div className="bg-amber-50 rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h4 className="text-3xl font-bold text-amber-900 mb-6 flex items-center font-calligraphy">
                                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mr-4 shadow-sm">
                                            <Palette size={24} />
                                        </div>
                                        1960's · 茶藝文化的興起
                                    </h4>
                                    <p className="text-stone-800 leading-relaxed mb-6 font-medium text-lg">
                                        隨著經濟起飛，茶葉消費從解渴轉向品味。民俗學會理事長提議以<strong>「茶藝」</strong>取代「茶道」，確立了臺灣獨特的茶文化名稱。
                                    </p>
                                    <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm relative">
                                        <div className="absolute -left-2 top-4 w-1 h-8 bg-amber-400 rounded-full"></div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">公</div>
                                            <div className="font-bold text-stone-800">1973年11月</div>
                                        </div>
                                        <p className="text-sm text-stone-600 pl-11">
                                            政府正式核准<strong>「茶藝館」</strong>設立，承認其為正當行業，促成了後來八十年代茶藝館如雨後春筍般的榮景。
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 relative w-full h-full min-h-[300px]">
                                    <ZoomableImage
                                        src={teaHouseImage}
                                        alt="1970s Tea House"
                                        containerClassName="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-200"
                                        imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    >
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-amber-950/80 to-transparent p-6">
                                            <span className="text-white font-bold tracking-widest uppercase text-sm block mb-1">Tea Art Era</span>
                                            <div className="text-amber-200 text-xs font-medium">人文 · 空間 · 藝術</div>
                                        </div>
                                    </ZoomableImage>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modern Era */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-stone-100 text-stone-800 shadow-sm border border-stone-200">
                                <TrendingUp size={28} />
                            </span>
                            <div>
                                <h3 className="text-4xl font-bold text-stone-900 font-calligraphy mb-1">現代發展</h3>
                                <div className="text-emerald-700 font-bold text-lg">1970-2000+：轉型與新機遇</div>
                            </div>
                        </div>

                        {/* Hero Image for Modern Era */}
                        <ZoomableImage
                            src={highMountainImage}
                            alt="Modern High Mountain Tea"
                            containerClassName="rounded-3xl overflow-hidden shadow-xl border border-stone-200 relative h-64 md:h-80"
                            imgClassName="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <h4 className="text-3xl font-bold text-white mb-2 font-calligraphy">高山茶的興起</h4>
                                <p className="text-stone-100 font-medium">雲霧繚繞中的台灣新名片</p>
                            </div>
                        </ZoomableImage>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4"><RotateCcw size={20} /></div>
                                <h5 className="font-bold text-stone-900 text-xl mb-2 font-calligraphy">產銷轉型</h5>
                                <p className="text-stone-700 text-sm leading-relaxed font-medium">
                                    從外銷轉為內銷為主。雖然北部茶園減少，但中部高山茶區興起，維持年產22,000公噸的高產量。
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4"><Sprout size={20} /></div>
                                <h5 className="font-bold text-stone-900 text-xl mb-2 font-calligraphy">有機與環保</h5>
                                <p className="text-stone-700 text-sm leading-relaxed font-medium">
                                    90年代後，養生與環保成為主流。有機茶年成長率高達30%以上，遠高於全球平均。
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-4"><Bot size={20} /></div>
                                <h5 className="font-bold text-stone-900 text-xl mb-2 font-calligraphy">茶藝與文化</h5>
                                <p className="text-stone-700 text-sm leading-relaxed font-medium">
                                    「茶藝」一名確立，古色古香的茶館興起。茶葉更成為優質高價的「舶來品」返銷大陸。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        taiwanEvents: {
            title: "臺灣茶事年表",
            icon: <Globe size={24} />,
            content: (() => {
                const noResultsFound = searchTerm && Object.values(filteredTimelineData).every(era => era.length === 0);
                return (
                    <div>
                        <div className="max-w-xl mx-auto mb-12 relative">
                            <input
                                type="text"
                                placeholder="搜尋年表關鍵字 (如：荷蘭、杜德、紅茶...)"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-full focus:ring-2 focus:ring-sky-500 shadow-sm"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                        </div>

                        {noResultsFound ? (
                            <div className="text-center py-16 text-stone-500">
                                <p className="text-lg">找不到與「<span className="font-bold text-stone-700">{searchTerm}</span>」相關的事件。</p>
                            </div>
                        ) : (
                            <div className="rounded-3xl bg-gradient-to-b from-amber-50/60 via-white to-sky-50/60 p-6 md:p-10 border border-stone-200/70 shadow-sm">
                                <div className="space-y-16">
                                    {filteredTimelineData.holland.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-stone-800 mb-6 pb-2 border-b-2 border-stone-200 text-center no-underline">荷蘭時期 (1624-1662)</h3>
                                            <div className="relative space-y-10">
                                                {filteredTimelineData.holland.map((item, idx) => React.createElement(TimelineRow, { key: `h-${idx}`, ...item }))}
                                            </div>
                                        </div>
                                    )}
                                    {filteredTimelineData.qing.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-stone-800 mb-6 pb-2 border-b-2 border-stone-200 text-center no-underline">滿清時期 (1683-1895)</h3>
                                            <div className="relative space-y-10">
                                                {filteredTimelineData.qing.map((item, idx) => React.createElement(TimelineRow, { key: `q-${idx}`, ...item }))}
                                            </div>
                                        </div>
                                    )}
                                    {filteredTimelineData.japan.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-stone-800 mb-6 pb-2 border-b-2 border-stone-200 text-center no-underline">日治時期 (1895-1945)</h3>
                                            <div className="relative space-y-10">
                                                {filteredTimelineData.japan.map((item, idx) => React.createElement(TimelineRow, { key: `j-${idx}`, ...item }))}
                                            </div>
                                        </div>
                                    )}
                                    {filteredTimelineData.roc.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-stone-800 mb-6 pb-2 border-b-2 border-stone-200 text-center no-underline">國民政府時期 (1945-1990)</h3>
                                            <div className="relative space-y-10">
                                                {filteredTimelineData.roc.map((item, idx) => React.createElement(TimelineRow, { key: `r-${idx}`, ...item }))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })()
        }
    };
}


export default createHistoryData;
