import React from 'react';
import { Trophy, PenTool, Coffee, Flower, Leaf, Sun, Droplet, Mountain, Thermometer, Sprout, Tag, Bug, Globe, ShieldCheck, BookOpen, Ship, TrendingUp, MapPin, Heart, Clock, Scale, Users, Beaker, Hammer, AlertCircle, TrendingDown, Shield, Map as MapIcon } from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import ImageLightbox from '../../components/ImageLightbox';
export default function ChonghuaChapter03() {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [lightboxImage, setLightboxImage] = React.useState({ src: '', alt: '' });

    const openLightbox = (src, alt) => {
        setLightboxImage({ src, alt });
        setLightboxOpen(true);
    };

    const handleImageKeyDown = (event, src, alt) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openLightbox(src, alt);
    };

    return (
        <div className="space-y-12">
            <ImageLightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                imageSrc={lightboxImage.src}
                altText={lightboxImage.alt}
            />
            <AcademySection
                id="chonghua-03"
                title="世界與台灣紅茶史"
                label="ACADEMY · CHONGHUA · CH03"
                subtitle="從全球貿易脈絡到在地風味轉型"
            >
                {/* 課程概述 */}
                <AcademyContentBlock title="課程簡介" icon={BookOpen}>
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 border border-amber-100 shadow-md">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <BookOpen size={120} className="text-amber-500" />
                        </div>
                        <div className="relative z-10 prose prose-stone max-w-none">
                            <p className="text-xl leading-relaxed text-stone-800 font-medium">
                                本課程探討紅茶如何從中國武夷山走向世界，成為全球貿易體系中的重要商品，
                                並深入了解台灣紅茶在這個歷史脈絡中的獨特定位與發展歷程。
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="px-4 py-2 bg-amber-100 rounded-lg border border-amber-200 text-amber-900 font-bold text-sm">
                                    講師：嚴白強
                                </div>
                                <div className="px-4 py-2 bg-white/60 rounded-lg border border-amber-100 text-amber-800 text-sm">
                                    授課日期：2026.01.18
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 世界與台灣紅茶史的關係定位 */}
                <AcademyContentBlock title="世界與台灣紅茶史的關係定位" icon={Globe}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
                            <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                            <div className="p-8">
                                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                                    <span className="text-amber-700 text-[24px] font-bold group-hover:text-white transition-colors duration-300">技</span>
                                </div>
                                <h3 className="text-[22px] font-bold text-stone-900 mb-3">技術轉移</h3>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    台灣紅茶技術源自中國，後經日本引進印度大葉種改良，融合了東西方的製茶智慧與工藝。
                                </p>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
                            <div className="h-2 bg-gradient-to-r from-orange-400 to-amber-400"></div>
                            <div className="p-8">
                                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                                    <span className="text-orange-700 text-[24px] font-bold group-hover:text-white transition-colors duration-300">貿</span>
                                </div>
                                <h3 className="text-[22px] font-bold text-stone-900 mb-3">貿易網絡</h3>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    台灣曾是國際紅茶市場的重要供應地，產品遠銷倫敦拍賣場，與全球貿易體系緊密接軌。
                                </p>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
                            <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
                            <div className="p-8">
                                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                                    <span className="text-yellow-700 text-[24px] font-bold group-hover:text-white transition-colors duration-300">轉</span>
                                </div>
                                <h3 className="text-[22px] font-bold text-stone-900 mb-3">在地轉型</h3>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    從早期的「大宗外銷」成功轉型為今日的「精品莊園」，走出了一條獨特的在地化發展道路。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 為什麼紅茶會成為全球飲品 */}
                <AcademyContentBlock title="為什麼紅茶會成為全球飲品？" icon={Ship}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100">
                                <div className="flex items-start gap-5">
                                    <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-bold shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                        優勢一
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-bold text-stone-900 mb-2">耐儲運性</h4>
                                        <p className="text-[17px] text-stone-700 leading-relaxed">
                                            全發酵茶葉性質穩定，能經受長達數月的海上運輸而不變質，
                                            是理想的全球貿易物資。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100">
                                <div className="flex items-start gap-5">
                                    <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-bold shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                        優勢二
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-bold text-stone-900 mb-2">能量供應</h4>
                                        <p className="text-[17px] text-stone-700 leading-relaxed">
                                            紅茶與糖的結合，為工業革命時期勞工提供了廉價且高效的熱量來源，
                                            推動了社會生產。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100">
                                <div className="flex items-start gap-5">
                                    <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-bold shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                        優勢三
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-bold text-stone-900 mb-2">文化適應</h4>
                                        <p className="text-[17px] text-stone-700 leading-relaxed">
                                            紅茶強烈的風味能與牛奶、糖完美融合，適應不同民族的飲食習慣，
                                            具備極高的包容性。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg group relative aspect-[4/3] md:aspect-auto">
                                <img
                                    src="/images/academy/chapter03/global_trade_ship.png"
                                    alt="紅茶透過海上貿易路線傳播至全球各地"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6 text-center">
                                    <p className="text-[17px] text-white font-medium drop-shadow-md">
                                        紅茶透過海上貿易路線<br />傳播至全球各地
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 紅茶在中國茶史中的出現背景 */}
                <AcademyContentBlock title="紅茶在中國茶史中的出現背景" icon={Sprout}>
                    <div className="mb-10 rounded-3xl overflow-hidden shadow-xl relative group cursor-zoom-in"
                        role="button"
                        tabIndex={0}
                        onClick={() => openLightbox('/images/academy/chapter03/wuyi_origins_fantasy.png', '武夷仙境')}
                        onKeyDown={(e) => handleImageKeyDown(e, '/images/academy/chapter03/wuyi_origins_fantasy.png', '武夷仙境')}
                        aria-label="放大查看 武夷仙境"
                    >
                        <img
                            src="/images/academy/chapter03/wuyi_origins_fantasy.png"
                            alt="武夷仙境 - 紅茶的發源地"
                            className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent p-8">
                            <p className="text-2xl font-bold text-white mb-2 text-shadow-lg drop-shadow-md">武夷仙境</p>
                            <p className="text-white/90 text-shadow drop-shadow-md text-lg">雲霧繚繞的丹霞奇峰，孕育了世界上最早的紅茶 — 正山小種</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-center justify-center">
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg group relative aspect-[4/3] md:aspect-auto">
                                <img
                                    src="/images/academy/chapter03/qing_tea_merchant.png"
                                    alt="清代茶商"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/80 to-transparent p-6 text-center">
                                    <p className="text-[22px] font-bold text-white mb-1 drop-shadow-md">清代茶商</p>
                                    <p className="text-[17px] text-white/90 drop-shadow-md">傳統茶葉貿易的推動者</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-amber-300">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">明末清初的技術演進</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    茶葉加工技術從傳統炒青綠茶，逐漸向發酵程度更高的茶類演進，
                                    為紅茶的誕生奠定了工藝基礎。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-orange-300">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 group-hover:text-orange-800 transition-colors">偶然與必然的結合</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    傳說因軍隊踐踏茶葉誤製黑茶，使葉片過度發酵，茶農為了挽救損失
                                    而發明了全發酵技術。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-amber-500">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 group-hover:text-amber-900 transition-colors">全發酵技術的成熟</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    揉捻與發酵使茶葉內含物質產生劇烈轉化，形成了「紅湯紅葉」
                                    的獨特感官特徵。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 本堂課學習重點說明 */}
                <AcademyContentBlock title="本堂課學習重點說明" icon={TrendingUp}>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-400 hover:bg-amber-100 transition-colors duration-300">
                            <div className="bg-amber-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold shrink-0">
                                第一部分
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-1">起源與形成</h4>
                                <p className="text-[17px] text-stone-700">
                                    探索紅茶如何從武夷山走向世界，理解全發酵技術的歷史轉折。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-400 hover:bg-orange-100 transition-colors duration-300">
                            <div className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold shrink-0">
                                第二部分
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-1">全球擴散</h4>
                                <p className="text-[17px] text-stone-700">
                                    理解殖民體系下的茶園制度，以及印度、錫蘭等產區的風味差異。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-400 hover:bg-amber-100 transition-colors duration-300">
                            <div className="bg-amber-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold shrink-0">
                                第三部分
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-1">台灣引進</h4>
                                <p className="text-[17px] text-stone-700">
                                    回顧日治時期的產業佈局，以及台灣紅茶早期的試製與挑戰。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-400 hover:bg-orange-100 transition-colors duration-300">
                            <div className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold shrink-0">
                                第四部分
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-1">在地化發展</h4>
                                <p className="text-[17px] text-stone-700">
                                    聚焦日月潭阿薩姆的引進，以及台灣特有種紅茶的崛起歷程。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-400 hover:bg-amber-100 transition-colors duration-300">
                            <div className="bg-amber-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold shrink-0">
                                第五部分
                            </div>
                            <div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-1">現代定位</h4>
                                <p className="text-[17px] text-stone-700">
                                    分析當香紅茶的工藝奇蹟，以及台灣紅茶在國際精品市場的角色。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 紅茶外銷的起點：荷蘭東印度公司 */}
                <AcademyContentBlock title="紅茶外銷的起點：荷蘭東印度公司" icon={Ship}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-xl overflow-hidden shadow-md group relative">
                            <img
                                src="/images/academy/chapter03/voc_trade_map.png"
                                alt="17世紀荷蘭東印度公司貿易路線圖"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="bg-stone-100 p-3 text-center border-t border-stone-200">
                                <p className="text-[17px] text-stone-700 font-medium">17世紀荷蘭東印度公司貿易路線圖</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
                                <h4 className="text-[20px] font-bold text-stone-800 mb-3">1610年：首次登陸歐洲</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    荷蘭人首次將中國茶葉從澳門運往歐洲，開啟了長達數世紀的全球茶葉貿易史。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
                                <h4 className="text-[20px] font-bold text-stone-800 mb-3">最初的定位：東方藥草</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    茶葉最初在歐洲被視為一種具有神認的藥材，僅在藥房販售，
                                    被認為具有清血與助消化的功效。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
                                <h4 className="text-[20px] font-bold text-stone-800 mb-3">關鍵轉運站：巴達維亞</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    荷蘭東印度公司（VOC）以巴達維亞（今雅加達）為核心，
                                    建立了連結中國、東南亞與歐洲的茶葉貿易網絡。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 正山小種的製法特色：松煙香氣 */}
                <AcademyContentBlock title="正山小種的製法特色：松煙香氣" icon={Sprout}>
                    <div className="space-y-6">
                        <div className="relative my-8 px-4">
                            <div className="absolute -left-2 top-0 text-8xl text-amber-200 font-serif leading-none opacity-50">"</div>
                            <blockquote className="relative pl-12 pr-8 py-6 bg-gradient-to-r from-amber-50 to-transparent rounded-r-2xl border-l-4 border-amber-500">
                                <p className="text-xl italic text-[17px] text-stone-700 leading-relaxed font-serif">
                                    正山小種是世界上最早出現的紅茶，其獨特的松煙香氣成為辨識的重要特徵，
                                    也是全球紅茶發展的起點。
                                </p>
                            </blockquote>
                        </div>

                        <div className="my-8 rounded-2xl overflow-hidden shadow-lg relative group cursor-zoom-in border border-stone-200"
                            role="button"
                            tabIndex={0}
                            onClick={() => openLightbox('/images/academy/chapter03/lapsang_souchong_smoke.png', '松煙初起')}
                            onKeyDown={(e) => handleImageKeyDown(e, '/images/academy/chapter03/lapsang_souchong_smoke.png', '松煙初起')}
                        >
                            <img
                                src="/images/academy/chapter03/lapsang_souchong_smoke.png"
                                alt="松煙初起 - 古法燻製"
                                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-6 left-8 right-8">
                                <h4 className="text-2xl font-bold text-white mb-2 text-shadow-md">松煙初起</h4>
                                <p className="text-white/90 text-shadow text-lg">山中木屋升起的裊裊炊煙，見證了全發酵工藝的偶然誕生</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-amber-500">
                                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                                    <span className="text-amber-700 text-[24px] font-bold group-hover:text-white transition-colors">1</span>
                                </div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">萎凋與揉捻：青樓結構</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    利用傳統「青樓」製茶廠的垂直結構，底層燃燒馬尾松木，
                                    熱氣上升至高層進行萎凋，使葉片初步吸收松煙。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-orange-500">
                                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                                    <span className="text-orange-700 text-[24px] font-bold group-hover:text-white transition-colors">2</span>
                                </div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">燻製工藝：馬尾松木</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    在烘焙過程中持續使用馬尾松木燻製，賦予茶葉獨特的松煙香與桂圓甜味，
                                    這是正山小種最核心的風味標誌。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-amber-500">
                                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                                    <span className="text-amber-700 text-[24px] font-bold group-hover:text-white transition-colors">3</span>
                                </div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">外銷傳奇：風味穩定</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    強烈的煙燻味使茶葉在長途海上貿易中極其穩定，深受歐洲貴族喜愛，
                                    成為 17 世紀最昂貴的奢侈品之一。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 正山小種：世界紅茶的鼻祖 */}
                <AcademyContentBlock title="正山小種：世界紅茶的鼻祖" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="rounded-2xl overflow-hidden shadow-md mb-6 relative group cursor-zoom-in"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox('/images/academy/chapter03/tea_pavilion_zen.png', '雲深茶寮')}
                                onKeyDown={(e) => handleImageKeyDown(e, '/images/academy/chapter03/tea_pavilion_zen.png', '雲深茶寮')}
                            >
                                <img
                                    src="/images/academy/chapter03/tea_pavilion_zen.png"
                                    alt="雲深茶寮"
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                <div className="absolute bottom-4 left-6">
                                    <p className="text-white font-bold text-shadow text-lg">雲深茶寮 · 境界</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-lg text-lg">📍</span>
                                    起源地：桐木關
                                </h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    起源於福建省武夷山市星村鎮桐木關。這裡是世界紅茶的經源地，
                                    擁有得天獨厚的自然環境與高山氣候。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-lg text-amber-600"><Trophy size={18} /></span>
                                    歷史地位
                                </h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    正山小種是世界歷史上最早出現的紅茶，標誌著全發酵技術的成熟，
                                    被公認為所有紅茶的始祖。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-lg text-amber-600"><PenTool size={18} /></span>
                                    名稱含義
                                </h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    「正山」指真正的武夷山產區；「小種」則指其品種為當地特有的小葉種茶樹，
                                    展現了風土與品種的結合。
                                </p>
                            </div>
                        </div>

                        {/* 正山小種專業圖片 */}
                        <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                            <div className="relative overflow-hidden">
                                <img
                                    src="/images/academy/chonghua-chapter03/lapsang_souchong_tea.png"
                                    alt="正山小種茶葉 - 傳統茶盤上的深色茶葉與金色光澤"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 relative">
                                <p className="text-stone-800 font-bold text-lg">正山小種茶葉</p>
                                <p className="text-sm text-[17px] text-stone-600 italic mt-1">「始於武夷 傳向世界」</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 英國紅茶文化的建立：凱瑟琳王后 */}
                <AcademyContentBlock title="英國紅茶文化的建立：凱瑟琳王后" icon={Globe}>
                    <div className="space-y-6">
                        <div className="relative my-8 px-4">
                            <div className="absolute -left-2 top-0 text-8xl text-amber-200 font-serif leading-none opacity-50">"</div>
                            <blockquote className="relative pl-12 pr-8 py-6 bg-gradient-to-r from-purple-50 to-transparent rounded-r-2xl border-l-4 border-purple-400">
                                <p className="text-xl italic text-[17px] text-stone-700 leading-relaxed font-serif">
                                    「她不僅帶來了豐厚的嫁妝，更帶來了改變英國文明的飲茶習慣。」
                                </p>
                            </blockquote>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-purple-400 hover:shadow-lg transition-all duration-300">
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4">1662年：跨國聯姻</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed mb-4">
                                    葡萄牙公主凱瑟琳（Catherine of Braganza）嫁給英王查理二世，
                                    成為英國王后。
                                </p>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <p className="text-sm text-purple-900 font-medium">
                                        這場聯姻不僅是政治聯盟，更開啟了英國飲茶文化的新紀元。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-purple-400 hover:shadow-lg transition-all duration-300">
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4">嫁妝中的東方瑰寶</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed mb-4">
                                    在她的嫁妝清單中，除了黃金與領土，最引人注目的是整箱昂貴的中國茶葉。
                                </p>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <p className="text-sm text-purple-900 font-medium">
                                        茶葉在當時是極其珍貴的奢侈品，象徵著財富與地位。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">引領宮廷風潮</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                王后對飲茶的熱愛，使這項原本屬於貴的藥用行為，
                                迅速演變為英國貴族女性競相模仿的社交時尚。
                                這不僅改變了英國的飲食文化，更奠定了「下午茶」傳統的基礎。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 歐洲市場的形成：從藥用到飲品 */}
                <AcademyContentBlock title="歐洲市場的形成：從藥用到飲品" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="group bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300">
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">藥用價值的定位</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed mb-4">
                                    17 世紀初期，茶葉最初在歐洲藥房販售。當時的醫師認為這種來自東方的神祕植物能清血、
                                    助消化，甚至能治百病的「東方神藥」。
                                </p>
                                <div className="bg-amber-50 p-4 rounded-xl">
                                    <p className="text-sm text-amber-900 italic">
                                        「茶葉最初是作為一種昂貴的藥草進入歐洲人的視野。」
                                    </p>
                                </div>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300">
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">身分與財富的象徵</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed mb-4">
                                    由於進口成本極高，飲茶迅速演變為皇室與大貴族炫耀財富的方式。
                                    為了匹配昂貴的茶葉，歐洲發展出精美的銀製與瓷器茶具，形成了獨特的社交禮儀。
                                </p>
                                <div className="bg-amber-50 p-4 rounded-xl">
                                    <p className="text-sm text-amber-900 italic">
                                        「擁有茶葉與精美茶具，是當時貴族洲社會的通行證。」
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-md">
                                <h4 className="text-[24px] font-bold text-stone-900 mb-8 text-center">
                                    從藥用到日常飲品的轉變
                                </h4>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
                                            1
                                        </div>
                                        <p className="text-stone-800 font-medium">17世紀初：藥房專賣的東方藥草</p>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
                                            2
                                        </div>
                                        <p className="text-stone-800 font-medium">17世紀中：皇室貴族的奢侈品</p>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
                                            3
                                        </div>
                                        <p className="text-stone-800 font-medium">18世紀：中產階級的社交飲品</p>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
                                            4
                                        </div>
                                        <p className="text-stone-800 font-medium">19世紀：工人階級的日常飲料</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 歷史茶葉貿易專業圖片 */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl mt-12 group relative">
                        <div className="relative overflow-hidden">
                            <img
                                src="/images/academy/chonghua-chapter03/historical_tea_trade.png"
                                alt="17世紀荷蘭東印度公司茶葉貿易場景"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 text-center">
                            <p className="text-stone-800 font-bold text-lg">17世紀茶葉貿易</p>
                            <p className="text-sm text-[17px] text-stone-600 italic mt-2">荷蘭東印度公司開啟全球茶葉貿易時代</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 安妮女王與早餐茶的萌芽 */}
                <AcademyContentBlock title="安妮女王與早餐茶的萌芽" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-bold inline-block mb-4">
                                變革
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">飲茶時段的變革</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed mb-4">
                                18世紀初，安妮女王（Queen Anne）將飲茶習慣從晚間移至早晨，
                                這項皇室習慣的改變，深刻影響了英國社會的作息與飲食結構。
                            </p>
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <p className="text-sm text-amber-900 italic">
                                    「茶葉取代了早餐桌上的啤酒，成為更清爽、更提神的選擇。」
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-bold inline-block mb-4">
                                影響
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">社會影響與文化奠基</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                在茶葉普及前，英國人的早餐常飲用稀粥嗎酒。茶的引入不僅提供了更健康的替代品，
                                更奠定了後來享譽全球的英國「早餐茶」（Breakfast Tea）文化。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 貝德福德公爵夫人的下午茶 */}
                <AcademyContentBlock title="貝德福德公爵夫人的下午茶" icon={TrendingUp}>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="rounded-xl overflow-hidden shadow-md group">
                                    <img
                                        src="/images/academy/chapter03/afternoon_tea.png"
                                        alt="維多利亞時代的午後茶會"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="bg-rose-50 p-3 text-center">
                                        <p className="text-sm text-[17px] text-stone-600 italic">19th Century Afternoon Tea</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-rose-400">
                                <h4 className="text-[22px] font-bold text-stone-800 mb-4">Afternoon Tea 的誕生</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    19世紀英國流行早晚兩餐，下午時分常感飢餓。
                                    第七代貝德福德公爵夫人安娜，瑪麗亞開始在下午邀請朋友共享茶點。
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">從私密到社交儀式</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed mb-4">
                                這項習慣迅速演變為精緻的社交禮儀，包含三層點心架、嚴格的著裝要求與優雅的談吐，
                                成為維多利亞時代上流社會的核心文化。
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 mt-6">
                                <div className="bg-rose-50 p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">🍰</div>
                                    <p className="text-sm text-[17px] text-stone-700 font-medium">三層點心架</p>
                                </div>
                                <div className="bg-rose-50 p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">👗</div>
                                    <p className="text-sm text-[17px] text-stone-700 font-medium">嚴格著裝要求</p>
                                </div>
                                <div className="bg-rose-50 p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">💬</div>
                                    <p className="text-sm text-[17px] text-stone-700 font-medium">優雅社交禮儀</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border-l-4 border-rose-400">
                            <h4 className="text-[20px] font-bold text-stone-800 mb-3">優雅傳承 社交經典</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed italic">
                                英式下午茶不僅是飲食習慣，更是一種生活美學與社交藝術的體現，
                                至今仍是全球最具代表性的英國文化符號之一。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 紅茶的全球擴散：從中國到世界產區 */}
                <AcademyContentBlock title="紅茶的全球擴散：從中國到世界產區" icon={Globe}>
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-stone-100">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-bold text-stone-900 mb-6">
                                19 世紀：茶葉版圖的劇變
                            </h3>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
                        </div>

                        <div className="prose prose-stone max-w-none mb-10">
                            <p className="text-xl text-[17px] text-stone-700 leading-relaxed text-center max-w-4xl mx-auto">
                                隨著大英帝國在全球的擴張，對茶葉的需求日益增長。
                                為了打破中國對茶葉貿易的長期壟斷，英國開始在印度、錫蘭等殖民地尋找適合種茶樹的土地，
                                開啟了紅茶全球化的新篇章。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="group bg-gradient-to-br from-stone-50 to-stone-100 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 border border-stone-200">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🇨🇳</div>
                                <h4 className="text-[22px] font-bold text-stone-900 mb-2">中國</h4>
                                <p className="text-[17px] text-stone-600">傳統壟斷產區</p>
                            </div>
                            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 border border-amber-100">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🇮🇳</div>
                                <h4 className="text-[22px] font-bold text-stone-900 mb-2">印度</h4>
                                <p className="text-[17px] text-stone-600">新興茶葉帝國</p>
                            </div>
                            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 border border-blue-100">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🇱🇰</div>
                                <h4 className="text-[22px] font-bold text-stone-900 mb-2">錫蘭</h4>
                                <p className="text-[17px] text-stone-600">品質卓越產區</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 印度阿薩姆：大葉種茶樹的發現 */}
                <AcademyContentBlock title="印度阿薩姆：大葉種茶樹的發現" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-white p-8 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300">
                            <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-bold inline-block mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                1823 年
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">羅伯特·布魯斯的偶然發現</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                英國少校羅伯特·布魯斯在印度東北部的阿薩姆地區，
                                發現當地原住民飲用一種由野生大葉種茶樹製成的飲料。
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">印度茶業的轉折點</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed mb-6">
                                這項發現證明了印度擁有原生的茶樹品種（Camellia sinensis var. assamica），
                                為後來大英帝國在印度建立龐大的茶業產業帝國奠定了生物學基礎。
                            </p>
                            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                                <p className="text-sm text-amber-900 italic font-medium">
                                    「阿薩姆大葉種的發現，徹底改變了世界紅茶的供應格局。」
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
                        <h4 className="text-[20px] font-bold text-stone-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-amber-500 rounded-full"></span>
                            阿薩姆茶的特色
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <span className="text-amber-500 text-xl shrink-0 group-hover:scale-125 transition-transform duration-300">•</span>
                                <span className="text-[17px] text-stone-700 group-hover:text-stone-900 transition-colors">大葉種茶樹，葉片寬大厚實</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <span className="text-amber-500 text-xl shrink-0 group-hover:scale-125 transition-transform duration-300">•</span>
                                <span className="text-[17px] text-stone-700 group-hover:text-stone-900 transition-colors">茶湯濃郁醇厚，帶有麥芽香氣</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <span className="text-amber-500 text-xl shrink-0 group-hover:scale-125 transition-transform duration-300">•</span>
                                <span className="text-[17px] text-stone-700 group-hover:text-stone-900 transition-colors">適合製作奶茶，成為英式早餐茶的主要原料</span>
                            </li>
                        </ul>
                    </div>
                </AcademyContentBlock>

                {/* 大吉嶺：喜馬拉雅山麓的香檳 */}
                <AcademyContentBlock title="大吉嶺：喜馬拉雅山麓的香檳" icon={MapPin}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                            <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-bold inline-block mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                產區建立
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">高海拔的挑戰</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                位於喜馬拉雅山麓，海拔高達 2000 公尺。
                                1840 年代，英國人引進了中國小葉種茶樹，在寒冷多霧的環境下緩慢生長，
                                孕育出極致的香氣。
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                            <div className="bg-purple-100 text-purple-800 px-4 py-1.5 rounded-lg text-sm font-bold inline-block mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                風味特色
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">麝香葡萄風味</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                因獨特的微氣候與小綠葉蟬叮咬，大吉嶺紅茶具備迷人的「麝香葡萄」（Muscatel）香氣，
                                被譽為「紅茶中的香檳」，是全球最昂貴的紅茶產區之一。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
                        <h4 className="text-[24px] font-bold text-stone-900 mb-8 text-center flex items-center justify-center gap-3">
                            <span className="w-12 h-1 bg-amber-400"></span>
                            大吉嶺的三個採摘季
                            <span className="w-12 h-1 bg-amber-400"></span>
                        </h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4 text-emerald-500"><Flower size={32} /></div>
                                <h5 className="font-bold text-stone-900 mb-2 text-lg">春摘（First Flush）</h5>
                                <p className="text-[17px] text-stone-600">清新花香，茶湯淺金色</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4 text-purple-500">🍇</div>
                                <h5 className="font-bold text-stone-900 mb-2 text-lg">夏摘（Second Flush）</h5>
                                <p className="text-[17px] text-stone-600">麝香葡萄香，最受歡迎</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4 text-amber-600"><Leaf size={32} /></div>
                                <h5 className="font-bold text-stone-900 mb-2 text-lg">秋摘（Autumn Flush）</h5>
                                <p className="text-[17px] text-stone-600">醇厚圓潤，風味平衡</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 錫蘭紅茶的傳奇：從咖啡到茶葉 */}
                <AcademyContentBlock title="錫蘭紅茶的傳奇：從咖啡到茶葉" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500 hover:shadow-md transition-all duration-300">
                            <div className="bg-red-100 text-red-800 px-4 py-1.5 rounded-lg text-sm font-bold inline-block mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                1860 年代：危機
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">咖啡鏽病的毀滅性打擊</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                當時的錫蘭（今斯里蘭卡）是全球主要的咖啡產地。然而，一場毀滅性的「咖啡鏽病」
                                席捲全島，導致咖啡樹大量枯死，產業面臨崩潰。
                            </p>
                        </div>

                        <div className="group bg-white p-6 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-md transition-all duration-300">
                            <div className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-lg text-sm font-bold inline-block mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                1870 年代：轉機
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">產業轉型的契機</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                為了挽救經濟，殖民政府與莊園主決定全面引進茶樹。
                                這場被迫的「產業轉型」，意外地讓錫蘭成為世界頂級紅茶的代名詞。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-sm">
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="text-6xl text-amber-500 flex items-center gap-4">
                                <Coffee size={40} className="text-stone-400 opacity-50" />
                                <span className="text-[24px] text-stone-400">➜</span>
                                <Leaf size={40} className="text-amber-600" />
                            </div>
                            <p className="text-stone-800 leading-relaxed italic text-lg font-medium">
                                「從咖啡到茶葉的轉型，不僅拯救了錫蘭的經濟，更開創了一個全新的茶葉帝國時代。」
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 詹姆斯·泰勒：錫蘭茶業之父 */}
                <AcademyContentBlock title="詹姆斯·泰勒：錫蘭茶業之父" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-sm flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-stone-900 mb-2">James Taylor</h3>
                            <p className="text-amber-700 font-bold mb-6 text-lg">詹姆斯·泰勒 (1835-1892)</p>
                            <p className="text-[17px] text-stone-700 leading-relaxed text-lg">
                                一位來自蘇格蘭的莊園管理者，他在錫蘭最艱難的時刻，
                                憑藉著對茶葉的熱情與堅持，開啟了錫蘭紅茶的傳奇時代。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="group bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">1867年：盧勒康德拉莊園</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    在盧勒康德拉莊園（Loolecondera Estate）種下了首批 19 英畝的茶樹，
                                    這被公認為錫蘭茶業的正式起點。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">開創性的製茶技術</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    他在自家走廊試製茶葉，並開發出適合錫蘭風土的揉捻與發酵工藝，
                                    使錫蘭茶在倫敦拍賣場一舉成名。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">永恆的歷史地位</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    他終身未娶，將一生奉獻給了錫蘭的茶山，被後世尊稱為「錫蘭茶業之父」。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 湯瑪斯·立頓：讓紅茶進入尋常百姓家 */}
                <AcademyContentBlock title="湯瑪斯·立頓：讓紅茶進入尋常百姓家" icon={TrendingUp}>
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl border-l-4 border-yellow-500 shadow-sm">
                            <h3 className="text-3xl font-bold text-stone-900 mb-4">Thomas Lipton</h3>
                            <p className="text-xl text-[17px] text-stone-700 leading-relaxed">
                                蘇格蘭商人湯瑪斯·立頓（Thomas Lipton）不僅是茶葉企業家，
                                更是將紅茶從貴族奢侈品轉變為大眾日常飲品的革命者。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🚜</div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">垂直整合策略</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    立頓買下錫蘭茶園，實施「從茶園直接到茶壺」的策略，
                                    省去中間商利潤，大幅降低了紅茶的零售價格。
                                </p>
                            </div>

                            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📦</div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">標準化包裝</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    首創將茶葉預先包裝並標示重量與品質，
                                    打破了當時散裝茶葉品質參差不齊的現狀，建立了品牌信任。
                                </p>
                            </div>

                            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">👥</div>
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">紅茶的平民化</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed">
                                    透過大規模生產與行銷，立頓讓原本屬於貴族的奢侈品，
                                    變成了英國工薪階層也能負擔的日常飲品。
                                </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                            <p className="text-yellow-900 text-center italic text-xl font-medium">
                                「立頓的成功，不僅是商業的勝利，更是茶葉民主化的里程碑。」
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 殖民體系下的茶園制度 */}
                <AcademyContentBlock title="殖民體系下的茶園制度 (Plantation System)" icon={MapPin}>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="group bg-white p-6 rounded-2xl shadow-sm border-t-4 border-stone-500 hover:shadow-md transition-all duration-300">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-4">工業化管理模式</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed text-sm">
                                    不同於中國的小農製茶，殖民地茶園採用大規模、集權式的工業化管理，
                                    將種植、採摘與加工整合在同一個莊園內，確保了品質的穩定性。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm border-t-4 border-stone-500 hover:shadow-md transition-all duration-300">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-4">單一作物種植</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed text-sm">
                                    在廣大的土地上僅種植茶樹，追求極致的生產效率。
                                    這種模式雖然帶來了龐大的產量，但也使生態系統變得脆弱，
                                    容易受到病蟲害的威脅。
                                </p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-sm border-t-4 border-stone-500 hover:shadow-md transition-all duration-300">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-4">全球供應鏈</h4>
                                <p className="text-[17px] text-stone-700 leading-relaxed text-sm">
                                    茶園制度與大英帝國的海上貿易網絡緊密結合，使紅茶成為一種標準化的全球商品，
                                    遠銷至倫敦、紐約與世界各地的港口。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-stone-50 to-stone-100 p-8 rounded-2xl border border-stone-200">
                            <h4 className="text-[20px] font-bold text-stone-900 mb-4">殖民茶園的社會影響</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                    <span className="text-emerald-500 text-[22px] font-bold mr-3">+</span>
                                    <span className="text-[17px] text-stone-700">創造大量就業機會</span>
                                </div>
                                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                    <span className="text-emerald-500 text-[22px] font-bold mr-3">+</span>
                                    <span className="text-[17px] text-stone-700">建立現代化基礎設施</span>
                                </div>
                                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                    <span className="text-red-500 text-[22px] font-bold mr-3">−</span>
                                    <span className="text-[17px] text-stone-700">勞工權益受到剝削</span>
                                </div>
                                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                    <span className="text-red-500 text-[22px] font-bold mr-3">−</span>
                                    <span className="text-[17px] text-stone-700">生態環境遭受破壞</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* CTC 工藝的誕生與影響 */}
                <AcademyContentBlock title="CTC 工藝的誕生與影響" icon={Sprout}>
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-sm">
                            <h3 className="text-[24px] font-bold text-stone-900 mb-8 text-center flex items-center justify-center gap-3">
                                <span className="w-12 h-1 bg-amber-400"></span>
                                CTC 製茶工藝
                                <span className="w-12 h-1 bg-amber-400"></span>
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-amber-700 text-3xl font-bold">C</span>
                                    </div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-3">Crush</h4>
                                    <p className="text-sm text-[17px] text-stone-600 leading-relaxed">
                                        <strong>壓碎</strong>：將茶葉通過滾筒壓碎，
                                        破壞細胞組織，加速發酵過程。
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-orange-700 text-3xl font-bold">T</span>
                                    </div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-3">Tear</h4>
                                    <p className="text-sm text-[17px] text-stone-600 leading-relaxed">
                                        <strong>撕裂</strong>：將茶葉進一步撕成細小的顆粒，
                                        增加與空氣接觸的表面積。
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-amber-700 text-3xl font-bold">C</span>
                                    </div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-3">Curl</h4>
                                    <p className="text-sm text-[17px] text-stone-600 leading-relaxed">
                                        <strong>捲曲</strong>：將細碎的茶葉捲成均勻的小球狀，
                                        便於快速沖泡與包裝。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">CTC 工藝的革命性影響</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed mb-8 text-lg">
                                CTC 工藝使紅茶能快速釋放風味，直接推動了全球茶包市場的爆發式增長。
                                這種工業化的製茶方式，讓紅茶從傳統的散茶形式，
                                轉變為現代便捷的茶包產品，徹底改變了全球飲茶習慣。
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                                    <h5 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                                        <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
                                        優點
                                    </h5>
                                    <ul className="space-y-3 text-[17px] text-stone-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald-500 font-bold">✓</span>
                                            <span>快速沖泡，風味濃郁</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald-500 font-bold">✓</span>
                                            <span>適合大規模工業生產</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald-500 font-bold">✓</span>
                                            <span>成本低廉，普及性高</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                                    <h5 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                                        <div className="w-2 h-6 bg-amber-500 rounded-full"></div>
                                        特性
                                    </h5>
                                    <ul className="space-y-3 text-[17px] text-stone-700">
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>主要用於茶包製作</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>風味直接但層次較少</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 font-bold">•</span>
                                            <span>適合加奶加糖飲用</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 非洲紅茶的興起：肯亞產區 */}
                <AcademyContentBlock title="非洲紅茶的興起：肯亞產區" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-white p-8 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300">
                            <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-bold inline-block mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                歷史背景
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">1903 年的引進</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                茶樹於 1903 年首次被引進肯亞。憑藉著赤道高地肥沃的火山灰土壤與穩定的降雨，
                                肯亞迅速發展成為全球最重要的紅茶產區之一。
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300">
                            <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-bold inline-block mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                市場地位
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">全球出口領頭羊</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                今日的肯亞是全球最大的紅茶出口國。其生產的 CTC 紅茶以色澤紅艷、滋味濃厚著稱，
                                是全球各大茶包品牌最核心的原料來源。
                            </p>
                        </div>
                    </div>

                    <div className="my-8 rounded-2xl overflow-hidden shadow-lg group">
                        <img
                            src="/images/academy/chapter03/kenyan_tea.png"
                            alt="肯亞赤道高地茶園"
                            className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 text-white text-center">
                            <p className="font-bold text-lg tracking-wide">肯亞赤道高地茶園 - 紅土與陽光的恩賜</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
                        <h4 className="text-[20px] font-bold text-stone-900 mb-4">肯亞紅茶的優勢</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-xl">
                                <span className="text-3xl shrink-0">🌋</span>
                                <span className="text-stone-800 font-medium">火山灰土壤富含礦物質</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-xl">
                                <span className="text-amber-500 text-3xl shrink-0"><Sun size={28} /></span>
                                <span className="text-stone-800 font-medium">赤道高地日照充足</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-xl">
                                <span className="text-blue-500 text-3xl shrink-0"><Droplet size={28} /></span>
                                <span className="text-stone-800 font-medium">全年降雨穩定均勻</span>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 世界主要紅茶產區風味輪廓（一） */}
                <AcademyContentBlock title="世界主要紅茶產區風味輪廓（一）" icon={BookOpen}>
                    <div className="overflow-x-auto rounded-2xl shadow-sm border border-stone-100">
                        <table className="w-full bg-white text-left border-collapse">
                            <thead>
                                <tr className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                                    <th className="p-5 font-bold text-lg w-1/4">對比維度</th>
                                    <th className="p-5 font-bold text-lg w-1/3">阿薩姆 (Assam)</th>
                                    <th className="p-5 font-bold text-lg w-1/3">大吉嶺 (Darjeeling)</th>
                                </tr>
                            </thead>
                            <tbody className="text-[17px] text-stone-700">
                                <tr className="border-b border-stone-100 hover:bg-amber-50/50 transition-colors">
                                    <td className="p-5 font-bold text-amber-900 bg-amber-50/30">品種</td>
                                    <td className="p-5">大葉種 (Assamica)</td>
                                    <td className="p-5">小葉種 (Sinensis)</td>
                                </tr>
                                <tr className="border-b border-stone-100 hover:bg-amber-50/50 transition-colors">
                                    <td className="p-5 font-bold text-amber-900 bg-amber-50/30">海拔</td>
                                    <td className="p-5">低海拔（平原）</td>
                                    <td className="p-5">高海拔（喜馬拉雅山）</td>
                                </tr>
                                <tr className="border-b border-stone-100 hover:bg-amber-50/50 transition-colors">
                                    <td className="p-5 font-bold text-amber-900 bg-amber-50/30">香氣</td>
                                    <td className="p-5 font-medium text-amber-800">麥芽香、焦糖香</td>
                                    <td className="p-5 font-medium text-purple-800">麝香葡萄、花果香</td>
                                </tr>
                                <tr className="hover:bg-amber-50/50 transition-colors">
                                    <td className="p-5 font-bold text-amber-900 bg-amber-50/30">滋味</td>
                                    <td className="p-5">濃厚、強勁、收斂感強</td>
                                    <td className="p-5">細緻、清爽、層次豐富</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AcademyContentBlock>

                {/* 世界主要紅茶產區風味輪廓（二） */}
                <AcademyContentBlock title="世界主要紅茶產區風味輪廓（二）" icon={BookOpen}>
                    <div className="overflow-x-auto rounded-2xl shadow-sm border border-stone-100">
                        <table className="w-full bg-white text-left border-collapse">
                            <thead>
                                <tr className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                                    <th className="p-5 font-bold text-lg w-1/4">對比維度</th>
                                    <th className="p-5 font-bold text-lg w-1/3">錫蘭 (Ceylon)</th>
                                    <th className="p-5 font-bold text-lg w-1/3">肯亞 (Kenya)</th>
                                </tr>
                            </thead>
                            <tbody className="text-[17px] text-stone-700">
                                <tr className="border-b border-stone-100 hover:bg-orange-50/50 transition-colors">
                                    <td className="p-5 font-bold text-orange-900 bg-orange-50/30">產區特色</td>
                                    <td className="p-5">高山茶平原（多樣化）</td>
                                    <td className="p-5">赤道高地（火山灰土壤）</td>
                                </tr>
                                <tr className="border-b border-stone-100 hover:bg-orange-50/50 transition-colors">
                                    <td className="p-5 font-bold text-orange-900 bg-orange-50/30">製程</td>
                                    <td className="p-5">傳統工藝 (Orthodox) 為主</td>
                                    <td className="p-5">CTC 工藝為主</td>
                                </tr>
                                <tr className="border-b border-stone-100 hover:bg-orange-50/50 transition-colors">
                                    <td className="p-5 font-bold text-orange-900 bg-orange-50/30">香氣</td>
                                    <td className="p-5 font-medium text-orange-800">柑橘香、薄荷香（高地）</td>
                                    <td className="p-5 font-medium text-red-800">果香、木質香</td>
                                </tr>
                                <tr className="hover:bg-orange-50/50 transition-colors">
                                    <td className="p-5 font-bold text-orange-900 bg-orange-50/30">主要用途</td>
                                    <td className="p-5">單品飲用、精品茶</td>
                                    <td className="p-5">茶包原料、奶茶基底</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AcademyContentBlock>

                {/* 世界紅茶史的關鍵轉折點回顧 */}
                <AcademyContentBlock title="世界紅茶史的關鍵轉折點回顧" icon={TrendingUp}>
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-stone-100">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute top-10 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-200 via-orange-300 to-red-300 rounded-full opacity-60"></div>

                            {/* Timeline items */}
                            <div className="grid md:grid-cols-4 gap-8 relative">
                                {/* 17世紀 */}
                                <div className="text-center group">
                                    <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-xl">17</span>
                                        <span className="text-amber-100 text-xs absolute bottom-3">世紀</span>
                                    </div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-3">起源與貿易</h4>
                                    <div className="bg-amber-50 p-5 rounded-xl text-left border border-amber-100 group-hover:shadow-md transition-shadow">
                                        <p className="text-[17px] text-stone-700 leading-relaxed text-sm">
                                            正山小種誕生，荷蘭東印度公司將茶葉運往歐洲，開啟全球貿易。
                                        </p>
                                    </div>
                                </div>

                                {/* 18世紀 */}
                                <div className="text-center group">
                                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-xl">18</span>
                                        <span className="text-orange-100 text-xs absolute bottom-3">世紀</span>
                                    </div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-3">文化建立</h4>
                                    <div className="bg-orange-50 p-5 rounded-xl text-left border border-orange-100 group-hover:shadow-md transition-shadow">
                                        <p className="text-[17px] text-stone-700 leading-relaxed text-sm">
                                            英國皇室引領飲茶風潮，下午茶儀式正式化，紅茶成為身分象徵。
                                        </p>
                                    </div>
                                </div>

                                {/* 19世紀 */}
                                <div className="text-center group">
                                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-xl">19</span>
                                        <span className="text-red-100 text-xs absolute bottom-3">世紀</span>
                                    </div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-3">產區擴散</h4>
                                    <div className="bg-red-50 p-5 rounded-xl text-left border border-red-100 group-hover:shadow-md transition-shadow">
                                        <p className="text-[17px] text-stone-700 leading-relaxed text-sm">
                                            印度與錫蘭產區崛起，打破中國壟斷，工業化茶園制度建立。
                                        </p>
                                    </div>
                                </div>

                                {/* 20世紀 */}
                                <div className="text-center group">
                                    <div className="w-20 h-20 bg-stone-700 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-xl">20</span>
                                        <span className="text-stone-300 text-xs absolute bottom-3">世紀</span>
                                    </div>
                                    <h4 className="text-[20px] font-bold text-stone-900 mb-3">全球普及</h4>
                                    <div className="bg-stone-50 p-5 rounded-xl text-left border border-stone-200 group-hover:shadow-md transition-shadow">
                                        <p className="text-[17px] text-stone-700 leading-relaxed text-sm">
                                            CTC 工藝發明，茶包普及，紅茶成為全球消費量最大的茶類。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 紅茶進入台灣的歷史背景 */}
                <AcademyContentBlock title="紅茶進入台灣的歷史背景" icon={MapPin}>
                    <div className="bg-gradient-to-br from-amber-900 to-orange-900 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                        <div className="relative z-10 text-center mb-8">
                            <h3 className="text-4xl font-bold mb-6 tracking-wide">紅茶進入台灣的歷史背景</h3>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <span className="h-px w-16 bg-amber-400/60"></span>
                                <span className="text-amber-200">HISTORICAL BACKGROUND</span>
                                <span className="h-px w-16 bg-amber-400/60"></span>
                            </div>
                            <p className="text-xl text-amber-100 font-light tracking-wider">
                                從清末外銷基礎到日治時期的產業轉向
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-white p-8 rounded-2xl shadow-md border border-stone-100">
                        <p className="text-lg text-[17px] text-stone-700 leading-relaxed indent-8 mb-6">
                            台灣紅茶的發展，是在全球紅茶貿易體系的大背景下展開的。
                            從清末時期建立的茶葉外銷基礎，到日治時期積極引進阿薩姆茶種並建立現代化茶園，
                            台灣紅茶走出了一條獨特的發展道路。
                        </p>
                        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                            <p className="text-[17px] text-stone-700 italic font-medium flex items-center gap-3">
                                <span className="text-amber-500 text-[24px]">❝</span>
                                接下來，我們將深入探討台灣紅茶的引進、發展與在地化歷程。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 清末台灣茶業：烏龍與包種的天下 */}
                <AcademyContentBlock title="清末台灣茶業：烏龍與包種的天下" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                            <div className="flex items-center justify-between mb-6">
                                <div className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-bold">
                                    歐美市場
                                </div>
                                <TrendingUp className="text-amber-300 group-hover:text-amber-500 transition-colors" size={24} />
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">Formosa Oolong</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                1860 年代，英國商人約翰·杜德引進技術並推廣，使台灣烏龍茶以「Formosa Oolong」之名達到紐約，
                                開啟了大稻埕的黃金時代。
                            </p>
                        </div>

                        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
                            <div className="flex items-center justify-between mb-6">
                                <div className="bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-sm font-bold">
                                    南洋市場
                                </div>
                                <Users className="text-orange-300 group-hover:text-orange-500 transition-colors" size={24} />
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4 group-hover:text-orange-700 transition-colors">包種茶的興起</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                為了開拓東南亞華人市場，台灣發展出香氣濃郁的包種茶。
                                清末時期，烏龍與包種構成了台灣茶外銷的兩大支柱。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-stone-50 p-6 rounded-xl border border-stone-200 text-center">
                        <p className="text-[17px] text-stone-700 leading-relaxed italic">
                            清末台灣茶業以烏龍茶和包種茶為主，紅茶尚未成為主流產品。
                            <br />
                            <span className="font-bold text-amber-700 not-italic block mt-2">這一切在日治時期發生了根本性的轉變。</span>
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 日治時期的產業轉向：為什麼是紅茶？ */}
                <AcademyContentBlock title="日治時期的產業轉向：為什麼是紅茶？" icon={TrendingUp}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-amber-500">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-600">
                                <TrendingDown size={24} />
                            </div>
                            <h4 className="text-[20px] font-bold text-stone-900 mb-3">避開中國綠茶競爭</h4>
                            <p className="text-[17px] text-stone-600 text-sm leading-relaxed">
                                當時日本本土主要生產綠茶，且面臨中國綠茶在國際市場的強大壓力。
                                為了避免內耗並尋找新藍海，日本政府決定在台灣發展紅茶。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-orange-500">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                                <Globe size={24} />
                            </div>
                            <h4 className="text-[20px] font-bold text-stone-900 mb-3">迎合全球市場需求</h4>
                            <p className="text-[17px] text-stone-600 text-sm leading-relaxed">
                                19 世紀末，全球茶葉消費重心已從綠茶轉向紅茶。發展紅茶外銷，
                                能讓台灣茶業直接切入歐美主流市場，獲取更高的貿易利潤。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-red-500">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                                <Shield size={24} />
                            </div>
                            <h4 className="text-[20px] font-bold text-stone-900 mb-3">帝國自給自足計畫</h4>
                            <p className="text-[17px] text-stone-600 text-sm leading-relaxed">
                                日本政府希望透過在台灣建立紅茶生產基地，實現大日本帝國在茶葉貿易上的自主權，
                                並與英國的印度、錫蘭紅茶競爭。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 1899年：台灣紅茶的初步嘗試 */}
                <AcademyContentBlock title="1899年：台灣紅茶的初步嘗試" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="bg-gradient-to-br from-stone-100 to-stone-200 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-600 to-stone-800 mb-2">1899</div>
                            <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                            <h4 className="text-[24px] font-bold text-stone-800 mb-4">台北、桃園一帶</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                日治初期，日本政府開始在台灣北部山區進行紅茶試製，
                                這是台灣紅茶產業化嘗試的起點。
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex-1">
                                <h4 className="text-[20px] font-bold text-amber-800 mb-3 flex items-center gap-2">
                                    <Hammer size={18} />
                                    技術引進與模仿
                                </h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    最初嘗試模仿印度大葉種的製法，使用台灣在地的小葉種茶樹進行全發酵試驗。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex-1">
                                <h4 className="text-[20px] font-bold text-amber-800 mb-3 flex items-center gap-2">
                                    <AlertCircle size={18} />
                                    早期的挑戰
                                </h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    由於品種限制與技術尚未成熟，早期的成品在滋味與香氣上仍難以與印度、錫蘭紅茶抗衡。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 平鎮茶業試驗所的建立（1903） */}
                <AcademyContentBlock title="平鎮茶業試驗所的建立（1903）" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-inner">
                            <div className="text-6xl font-black text-amber-600 mb-2">1903</div>
                            <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                            <h4 className="text-[24px] font-bold text-stone-900 mb-4">安平鎮製茶試驗場</h4>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                位於今日桃園平鎮，是台灣第一個專業的茶業研究機構，
                                標誌著台灣茶業進入科學化、標準化管理的新時代。
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-amber-500 hover:shadow-md transition-shadow flex-1">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 flex items-center gap-2">
                                    <Beaker size={18} className="text-amber-500" />
                                    技術研發與改良
                                </h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    引進現代化製茶機械，針對紅茶的萎凋、揉捻、發酵與烘焙進行系統性研究，
                                    提升了台灣紅茶的品質。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-amber-500 hover:shadow-md transition-shadow flex-1">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 flex items-center gap-2">
                                    <Users size={18} className="text-amber-500" />
                                    人才培育與推廣
                                </h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    培育了大量的茶業技術人才，並將研究成果推廣至民間茶園，
                                    為後來台灣紅茶的大規模外銷奠定了基礎。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 引進印度大葉種：尋找台灣的阿薩姆 */}
                <AcademyContentBlock title="引進印度大葉種：尋找台灣的阿薩姆" icon={MapPin}>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-600 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-700">
                                        <Leaf size={20} />
                                    </div>
                                    <h4 className="text-[22px] font-bold text-stone-900">1925 年：關鍵的引進</h4>
                                </div>
                                <p className="text-[17px] text-stone-600 leading-relaxed mb-4">
                                    日本政府從印度阿薩姆地區引進了優質的<strong className="text-green-700 font-bold bg-green-50 px-1 rounded">大葉種茶籽</strong>。
                                    這項舉措堪稱為了改變台灣紅茶過去使用小葉種試製、滋味較淡的弱點。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-600 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-700">
                                        <MapIcon size={20} />
                                    </div>
                                    <h4 className="text-[22px] font-bold text-stone-900">全台各地的試種競賽</h4>
                                </div>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    引進後，政府在台北、桃園、南投、花蓮等地進行廣泛試種，
                                    尋找氣候、土壤與印度阿薩姆產區最接近的「命定之地」。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full opacity-20 -mr-10 -mt-10 blur-xl"></div>
                            <h4 className="text-[24px] font-bold text-green-900 mb-4 relative z-10">
                                尋找台灣的阿薩姆
                            </h4>
                            <p className="text-lg text-green-800 leading-relaxed relative z-10">
                                這場全台試種競賽，最終將目光聚焦在一個擁有得天獨厚自然條件的地方——
                                <br />
                                <strong className="text-[24px] text-green-700 inline-block mt-2 border-b-2 border-green-400 pb-1">南投魚池</strong>
                                <br />
                                <span className="text-sm mt-3 inline-block opacity-80">台灣紅茶的命運即將在這裡改寫。</span>
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 台灣紅茶的在地化發展 */}
                <AcademyContentBlock title="台灣紅茶的在地化發展" icon={MapPin}>
                    <div className="bg-gradient-to-br from-amber-700 to-orange-800 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                        <div className="relative z-10 text-center mb-8">
                            <h3 className="text-4xl font-bold mb-6 tracking-wide">台灣紅茶的在地化發展</h3>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <span className="h-px w-16 bg-amber-400/60"></span>
                                <span className="text-amber-200">LOCAL DEVELOPMENT</span>
                                <span className="h-px w-16 bg-amber-400/60"></span>
                            </div>
                            <p className="text-xl text-amber-100 font-light tracking-wider">
                                日月潭產區的確立與阿薩姆品種的調整
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 日月潭：台灣紅茶的命定之地 */}
                <AcademyContentBlock title="日月潭：台灣紅茶的命定之地" icon={MapPin}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500 h-full">
                            <h4 className="text-[24px] font-bold text-stone-900 mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <MapPin size={24} />
                                </span>
                                優越的地理環境
                            </h4>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                                    <span className="text-blue-600 bg-white p-2 rounded-lg shadow-sm shrink-0"><Mountain size={24} /></span>
                                    <div>
                                        <p className="font-bold text-stone-800 text-lg">海拔約 600-800 公尺</p>
                                        <p className="text-[17px] text-stone-600">在此高度種植的茶樹，生長速率適中，有利於物質積累。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                                    <span className="text-blue-600 bg-white p-2 rounded-lg shadow-sm shrink-0"><Thermometer size={24} /></span>
                                    <div>
                                        <p className="font-bold text-stone-800 text-lg">高溫多濕、晨霧繚繞</p>
                                        <p className="text-[17px] text-stone-600">充足的水氣與適當的溫差，賦予茶葉獨特的韻味。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                                    <span className="text-blue-600 bg-white p-2 rounded-lg shadow-sm shrink-0"><Sprout size={24} /></span>
                                    <div>
                                        <p className="font-bold text-stone-800 text-lg">酸性土壤</p>
                                        <p className="text-[17px] text-stone-600">土壤酸鹼度適宜，與印度阿薩姆產區的風土極為相似，是頂級紅茶的搖籃。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">試種成功的轉折</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed mb-4">
                                1925 年引進的大葉種在魚池鄉試種後，展現出極佳的適應性，
                                產出的紅茶滋味濃厚、色澤紅艷，品質甚至能與印度、錫蘭紅茶並駕齊驅。
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-blue-900 font-medium text-center">
                                    南投魚池，成為台灣紅茶的心臟地帶
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 日月潭茶區專業圖片 */}
                    <div className="rounded-xl overflow-hidden shadow-2xl mt-8">
                        <img
                            src="/images/academy/chonghua-chapter03/sun_moon_lake_tea.png"
                            alt="日月潭茶區 - 台灣霧氣繚繞的山區茶園與湖景"
                            className="w-full h-auto object-cover"
                        />
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 text-center">
                            <p className="text-[17px] text-stone-700 font-medium text-lg">日月潭茶區</p>
                            <p className="text-sm text-stone-500 italic mt-2">台灣紅茶的命定之地 - 南投魚池</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 新井耕吉郎：台灣紅茶之父 */}
                <AcademyContentBlock title="新井耕吉郎：台灣紅茶之父" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-stone-100 to-stone-200 p-8 rounded-2xl flex flex-col justify-center shadow-inner">
                            <h3 className="text-3xl font-bold text-stone-800 mb-2">新井耕吉郎</h3>
                            <p className="text-amber-700 font-medium mb-6 text-lg tracking-wider">(1904-1946)</p>
                            <p className="text-[17px] text-stone-700 leading-relaxed text-lg">
                                一位將一生奉獻給台灣紅茶的日本技師。
                                他在魚池鄉深耕多年，不僅確立了阿薩姆紅茶的生產體系，
                                更在戰後選擇留在台灣繼續傳承技術。
                            </p>
                            <div className="mt-6 flex gap-2">
                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold">貓囒山守護神</span>
                                <span className="px-3 py-1 bg-stone-200 text-[17px] text-stone-700 rounded-full text-sm font-bold">鞠躬盡瘁</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-600 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 flex items-center gap-2">
                                    <Beaker size={18} className="text-amber-600" />
                                    魚池紅茶試驗支所
                                </h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    1936年擔任首任支所長，在貓囒山建立試驗場，
                                    針對阿薩姆品種進行選育與製茶工藝的標準化。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-600 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 flex items-center gap-2">
                                    <Users size={18} className="text-amber-600" />
                                    推廣與深耕
                                </h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    他走遍魚池鄉的每一片茶園，指導農民種植與管理，
                                    使日月潭紅茶成為當時台灣外銷的驕傲。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-stone-500 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3 flex items-center gap-2">
                                    <Heart size={18} className="text-stone-500" />
                                    永恆的守護神
                                </h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    他在台灣因病逝世，後人感念其貢獻，
                                    在貓囒山為其立碑，尊稱其為「台灣紅茶之父」。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 1920-1930年代：台灣紅茶的黃金時期 */}
                <AcademyContentBlock title="1920-1930年代：台灣紅茶的黃金時期" icon={TrendingUp}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-red-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">📈</div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-3 text-center">產量外銷激增</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-center text-sm">
                                1930 年代中期，台灣紅茶產量突破 <strong className="text-red-600 text-lg">500 萬公斤</strong>，
                                成為僅次於烏龍、包種的重要外銷茶類。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-amber-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🌍</div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-3 text-center">進軍國際拍賣</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-center text-sm">
                                台灣紅茶成功進入倫敦、紐約等國際茶葉拍賣市場，
                                與印度、錫蘭紅茶同台競爭，展現強大的市場競爭力。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-yellow-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600"><Trophy size={28} /></div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-3 text-center">極高國際評價</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-center text-sm">
                                當時的台灣紅茶以「滋味強勁、香氣獨特」著稱，
                                被國際茶商譽為能與頂級錫蘭紅茶相媲美的優質產品。
                            </p>
                        </div>
                    </div>

                    <div className="my-10 rounded-2xl overflow-hidden shadow-xl border-4 border-amber-100 group">
                        <img
                            src="/images/academy/chapter03/taiwan_export.png"
                            alt="1930年代台灣紅茶外銷盛況"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="bg-[#f4e4bc] p-4 text-center border-t border-amber-200">
                            <p className="font-serif text-[#5c4033] font-bold text-xl tracking-widest">FORMOSA TEA • 1930</p>
                            <p className="text-[#8c6b4a] text-sm mt-1">走進世界的黃金年代</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border border-amber-200">
                        <p className="text-lg text-amber-900 leading-relaxed text-center italic font-medium">
                            這段黃金時期，奠定了台灣紅茶在國際市場上的地位，
                            也成為台灣茶業史上最輝煌的篇章之一。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 「日東紅茶」品牌的誕生與影響 */}
                <AcademyContentBlock title="「日東紅茶」品牌的誕生與影響" icon={Globe}>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4"></div>
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4 relative z-10">三井合名會社的布局</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed relative z-10">
                                    1927 年，三井合名會社在台灣推出<strong className="text-red-700 font-bold">「日東紅茶 (Nittoh Tea)」</strong>品牌，
                                    這是台灣紅茶走向品牌化、精品化的重要里程碑。
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4"></div>
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4 relative z-10">市場地位與象徵</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed relative z-10">
                                    日東紅茶以高品質的台灣阿薩姆紅茶為原料，
                                    成功打入日本內地與國際高端市場，成為當時「大日本帝國紅茶」的代表品牌。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-800 to-amber-900 p-8 rounded-2xl text-white shadow-lg">
                            <h4 className="text-[24px] font-bold mb-4 text-center">品牌化的歷史意義</h4>
                            <p className="text-lg text-red-50 leading-relaxed text-center">
                                「日東紅茶」的誕生，標誌著台灣紅茶從散裝外銷商品，
                                轉變為具有品牌價值與文化象徵的精品茶葉，
                                為台灣茶業的現代化發展開啟了新的篇章。
                            </p>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-2 bg-stone-200 rounded-lg text-[17px] text-stone-600"><Tag size={20} /></div>
                                <h4 className="text-[20px] font-bold text-stone-800">品牌遺產</h4>
                            </div>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-sm">
                                雖然日東紅茶品牌在戰後逐漸淡出台灣市場（但在日本仍存在），
                                但其所代表的品質標準與品牌精神，
                                至今仍影響著台灣紅茶產業的發展方向。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 戰後初期的台灣紅茶：動盪與重建 */}
                <AcademyContentBlock title="戰後初期的台灣紅茶：動盪與重建" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-stone-500 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <span className="text-stone-400">1945</span>
                                政權交替的挑戰
                            </h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                二戰結束後，台灣茶業面臨日籍技師撤離、工廠設備與銷通路中斷的嚴峻挑戰。
                                產業一度陷入停滯，面臨技術斷層的危機。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-600 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <span className="text-amber-500">1946</span>
                                技術的傳承與公營化
                            </h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed mb-4">
                                國民政府接收後成立「台灣省農林股份有限公司」。
                                幸而有如<strong className="text-amber-700">新井耕吉郎</strong>等技師留台指導，
                                使紅茶生產技術得以延續，為復甦保留了火種。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 1950-1960年代：外銷的最後餘暉 */}
                <AcademyContentBlock title="1950-1960年代：外銷的最後餘暉" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">政策推動下的復甦</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                戰後政府積極推動「以農培工」政策，茶葉作為賺取外匯的重要物資，
                                出口量在 1950 年代一度回升，展現出短暫的繁榮景象。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">國際競爭的壓力</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                然而，隨著印度、錫蘭與新興的肯亞產區以低廉成本佔領市場，
                                台灣紅茶不僅在產量上無法比擬，在國際價格競爭中也逐漸失去優勢，外銷量開始逐年下滑。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 產業低谷與轉型：從量產到質變 */}
                <AcademyContentBlock title="產業低谷與轉型：從量產到質變" icon={TrendingUp}>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-stone-400 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">1970 年代：成本與市場的雙重打擊</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                隨著台灣經濟起飛，農村勞動力成本大幅上升，
                                加上國際大宗紅茶市場的價格競爭，台灣紅茶的外銷優勢幾乎喪失殆盡，茶園面積大幅縮減。
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full opacity-20 -mr-10 -mt-10 blur-xl"></div>
                            <h4 className="text-[24px] font-bold text-amber-800 mb-4 relative z-10">從「量」到「質」的戰略轉向</h4>
                            <p className="text-lg text-amber-900 leading-relaxed relative z-10">
                                為了生存，台灣紅茶開始放棄低價量產的路線，轉而深耕內需市場，
                                並透過品種改良與工藝提升，走向<strong className="bg-white/50 px-1 rounded">高品質、高單價的精品化道路</strong>。
                                這場轉型，為台灣紅茶開啟了全新的篇章，也孕育出獨具特色的精品紅茶文化。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 現代台灣紅茶的特色定位 */}
                <AcademyContentBlock title="現代台灣紅茶的特色定位" icon={MapPin}>
                    <div className="bg-gradient-to-br from-amber-700 to-red-800 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                        <div className="relative z-10 text-center mb-8">
                            <h3 className="text-4xl font-bold mb-6 tracking-wide">現代台灣紅茶的特色定位</h3>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <span className="h-px w-16 bg-amber-400/60"></span>
                                <span className="text-amber-200">MODERN IDENTITY</span>
                                <span className="h-px w-16 bg-amber-400/60"></span>
                            </div>
                            <p className="text-xl text-amber-100 font-light tracking-wider">
                                蜜香、小葉種與精品紅茶的崛起
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 蜜香紅茶：小綠葉蟬帶來的奇蹟風味 */}
                <AcademyContentBlock title="蜜香紅茶：小綠葉蟬帶來的奇蹟風味" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-400 hover:shadow-md transition-shadow">
                            <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                自然機制
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">「著涎」的藝術</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                茶芽經<strong className="text-amber-600">小綠葉蟬</strong>叮咬後，
                                茶樹會啟動天然防禦機制，產生特殊的化學變化。
                                這種原本被視為蟲害的現象，卻是蜜香的來源。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-400 hover:shadow-md transition-shadow">
                            <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                風味特色
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">天然熟果蜜香</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                蜜香紅茶不需添加任何香料，沖泡後飄散出濃郁的天然<strong className="text-amber-600">蜂蜜香與熟果味</strong>，
                                滋味回甘甜順，是台灣紅茶的精品代表。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl text-center border border-amber-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-full opacity-10 -mr-4 -mt-4 blur-xl"></div>
                        <h4 className="text-[24px] font-bold text-amber-900 mb-4 relative z-10">蜜香紅茶的誕生</h4>
                        <p className="text-lg text-amber-800 leading-relaxed relative z-10">
                            蜜香紅茶的出現，是台灣茶農將「蟲害」轉化為「特色」的智慧結晶。
                            這種獨特的風味，讓台灣紅茶在國際精品茶市場上佔有一席之地，
                            成為台灣茶文化的驕傲。
                        </p>
                    </div>

                    <div className="mt-6 grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-stone-100">
                            <div className="text-3xl mb-2 text-amber-500"><Bug size={28} className="inline" /></div>
                            <p className="text-sm font-bold text-[17px] text-stone-700">小綠葉蟬叮咬</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-stone-100">
                            <div className="text-3xl mb-2 text-amber-500"><Sprout size={28} className="inline" /></div>
                            <p className="text-sm font-bold text-[17px] text-stone-700">茶樹防禦機制</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-stone-100">
                            <div className="text-3xl mb-2">🍯</div>
                            <p className="text-sm font-bold text-[17px] text-stone-700">天然蜜香形成</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 小葉種紅茶：台灣茶園的新風貌 */}
                <AcademyContentBlock title="小葉種紅茶：台灣茶園的新風貌" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-400 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">品種的跨界應用</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                利用原本製作為龍茶的<strong className="text-orange-700">青心烏龍、金萱</strong>（台茶 12 號）等小葉種品種，
                                透過全發酵工藝製作成紅茶，賦予了傳統品種全新的生命力。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-400 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4">細緻優雅的風味</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                不同於大葉種的濃厚強勁，小葉種紅茶以<strong className="text-orange-700">細緻的花果香</strong>、
                                清甜的口感見長，展現出台灣茶特有的優雅韻味，深受現代消費者喜愛。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
                        <h4 className="text-[20px] font-bold text-amber-900 mb-4">代表品種</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white/60 p-4 rounded-xl shadow-sm hover:bg-white transition-colors">
                                <p className="font-bold text-amber-900 mb-2">青心烏龍紅茶</p>
                                <p className="text-sm text-[17px] text-stone-600">花香細膩、韻味悠長</p>
                            </div>
                            <div className="bg-white/60 p-4 rounded-xl shadow-sm hover:bg-white transition-colors">
                                <p className="font-bold text-amber-900 mb-2">金萱紅茶</p>
                                <p className="text-sm text-[17px] text-stone-600">奶香甜潤、口感柔和</p>
                            </div>
                            <div className="bg-white/60 p-4 rounded-xl shadow-sm hover:bg-white transition-colors">
                                <p className="font-bold text-amber-900 mb-2">台茶 12 號紅茶</p>
                                <p className="text-sm text-[17px] text-stone-600">香氣馥郁、滋味甘醇</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 台茶 18 號「紅玉」：日月潭的復興之光 */}
                <AcademyContentBlock title="台茶 18 號「紅玉」：日月潭的復興之光" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-2xl flex flex-col justify-center shadow-inner">
                            <h3 className="text-3xl font-bold text-red-700 mb-4">紅玉 (Ruby)</h3>
                            <div className="w-16 h-1 bg-red-400 mb-6"></div>
                            <p className="text-[22px] font-bold text-stone-900 mb-6">台茶 18 號</p>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                由茶改場以「緬甸大葉種」與「台灣野生山茶」雜交選育而成。
                                1999 年正式命名，是帶領日月潭紅茶重返榮耀的關鍵品種。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-600 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">獨特的「台灣香」</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    沖泡後帶有天然的<strong className="text-red-700">薄荷與肉桂香氣</strong>，
                                    這種獨特的感官體驗被國際茶商譽為「台灣香」。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-600 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">強勁且細緻的滋味</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    茶湯紅艷明亮，滋味強勁卻不失細緻，適合單品飲用，
                                    亦能展現出極佳的層次感。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-600 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">世界頂級評價</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    紅玉紅茶在國際精品茶市場中享有極高聲譽，
                                    是台灣最具代表性的特色紅茶。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 台茶 21 號「紅韻」：優雅的花果交響詩 */}
                <AcademyContentBlock title="台茶 21 號「紅韻」：優雅的花果交響詩" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl flex flex-col justify-center shadow-inner">
                            <h3 className="text-3xl font-bold text-orange-700 mb-4">紅韻 (Hongyun)</h3>
                            <div className="w-16 h-1 bg-orange-400 mb-6"></div>
                            <p className="text-[22px] font-bold text-stone-900 mb-6">台茶 21 號</p>
                            <p className="text-[17px] text-stone-700 leading-relaxed">
                                由茶改場以「印度大葉種 Kyang」與「祁門小葉種」雜交選育而成。
                                2008 年正式命名，是日月潭紅茶家族中的優雅新星。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-600 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">迷人的花果香氣</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    沖泡後散發出濃郁的<strong className="text-orange-700">柚子花與柑橘香氣</strong>，
                                    這種清新的花果調性是其最顯著的特徵。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-600 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">優雅且長久的韻味</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    茶湯金紅明亮，滋味甘甜鮮爽，入喉後韻味悠長，
                                    展現出極佳的平衡感與優雅的感官層次。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-600 hover:shadow-md transition-shadow">
                                <h4 className="text-[20px] font-bold text-stone-900 mb-3">精品紅茶的新標竿</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed">
                                    紅韻紅茶以其獨特的香氣特徵，成為台灣精品紅茶市場中備受矚目的高品質品種。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 台灣紅茶的精品化之路：莊園與職人 */}
                <AcademyContentBlock title="台灣紅茶的精品化之路：莊園與職人" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <span className="text-emerald-500"><MapPin size={20} /></span>
                                莊園級的管理模式
                            </h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                現代台灣紅茶強調<strong className="text-emerald-700">「單一莊園」</strong>與<strong className="text-emerald-700">「友善耕作」</strong>，
                                透過嚴格的產地溯源與有機認證，建立了消費者對品質與安全的信任。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-600 hover:shadow-md transition-shadow">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-4 flex items-center gap-2">
                                <span className="text-amber-600"><Hammer size={20} /></span>
                                職人工藝的價值
                            </h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                製茶師透過精湛的揉捻與發酵技術，將不同品種與風土的特色發揮到極致。
                                這種<strong className="text-amber-700">「職人手作」</strong>的溫度，
                                是台灣紅茶精品化的核心競爭力。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-emerald-50 to-amber-50 p-8 rounded-2xl border border-emerald-100 shadow-sm">
                        <h4 className="text-[24px] font-bold text-emerald-900 mb-4 text-center">精品化的意義</h4>
                        <p className="text-lg text-emerald-800 leading-relaxed text-center">
                            台灣紅茶的精品化之路，不僅是產業轉型的成功案例，
                            更是對土地、對技藝、對文化的深刻尊重與傳承。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 台灣紅茶在國際市場的當代角色 */}
                <AcademyContentBlock title="台灣紅茶在國際市場的當代角色" icon={Globe}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-amber-500">
                            <div className="text-5xl mb-4 text-amber-500 text-center"><Tag size={40} className="inline" /></div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-3 text-center">獨特的風味標籤</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-sm text-center">
                                憑藉著「紅玉」的薄荷肉桂香與「蜜香紅茶」的天然蜜味，
                                台灣紅茶在國際精品茶市場中建立了極具辨識度的「台灣香」品牌。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-amber-500">
                            <div className="text-5xl mb-4 text-center">💎</div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-3 text-center">高品質精品定位</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-sm text-center">
                                台灣紅茶不參與大宗市場的價格競爭，而是以高品質、小產量、莊園級的定位，
                                吸引全球追求極致風味的精品茶愛好者。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-amber-500">
                            <div className="text-5xl mb-4 text-amber-500 text-center"><Globe size={40} className="inline" /></div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-3 text-center">文化輸出的載體</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-sm text-center">
                                紅茶作為全球共通的語言，是台灣茶文化走向世界的重要載體，
                                透過紅茶，讓世界看見台灣精湛的製茶工藝與深厚的茶文化底蘊。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl border border-amber-200">
                        <h4 className="text-[24px] font-bold text-amber-900 mb-4 text-center">台灣紅茶的未來</h4>
                        <p className="text-lg text-amber-800 leading-relaxed text-center font-medium">
                            從日治時期的外銷榮光，到戰後的低谷轉型，再到當代的精品復興，
                            台灣紅茶走過了一條充滿挑戰與創新的道路。
                            如今，台灣紅茶以其獨特的風味、精湛的工藝與深厚的文化底蘊，
                            在國際精品茶市場上綻放光芒，成為台灣茶文化的驕傲。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* CHAPTER 07 總結與歷史回顧 */}
                <AcademyContentBlock title="CHAPTER 07 總結與歷史回顧" icon={BookOpen}>
                    <div className="bg-gradient-to-br from-amber-900 to-stone-900 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                        <div className="relative z-10 text-center mb-8">
                            <p className="text-amber-300 text-sm font-bold mb-4 tracking-widest uppercase">Chapter Review</p>
                            <h3 className="text-4xl font-bold mb-4 tracking-wide">總結與歷史回顧</h3>
                            <div className="w-32 h-1 bg-amber-500 mx-auto mb-6"></div>
                            <p className="text-xl text-amber-100 font-light tracking-wider">
                                連結過去、現在與未來的茶香脈絡
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 世界與台灣紅茶史：時間軸對照圖 */}
                <AcademyContentBlock title="世界與台灣紅茶史：時間軸對照圖" icon={TrendingUp}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                        <div className="grid grid-cols-4 gap-4">
                            {/* 標題行 */}
                            <div className="col-span-1 bg-stone-800 text-white p-4 rounded-xl font-bold text-center flex items-center justify-center shadow-md">
                                世界
                            </div>
                            <div className="bg-stone-50 p-4 rounded-xl text-center border border-stone-200">
                                <h4 className="font-bold text-[17px] text-stone-700 mb-2">17 世紀</h4>
                                <p className="text-xs text-stone-500">正山小種誕生<br />開啟全球貿易</p>
                            </div>
                            <div className="bg-stone-50 p-4 rounded-xl text-center border border-stone-200">
                                <h4 className="font-bold text-[17px] text-stone-700 mb-2">19 世紀</h4>
                                <p className="text-xs text-stone-500">印度、錫蘭產區崛起<br />打破中國壟斷</p>
                            </div>
                            <div className="bg-stone-50 p-4 rounded-xl text-center border border-stone-200">
                                <h4 className="font-bold text-[17px] text-stone-700 mb-2">20 世紀</h4>
                                <p className="text-xs text-stone-500">CTC 工藝發明<br />紅茶全球普及化</p>
                            </div>

                            {/* 台灣行 */}
                            <div className="col-span-1 bg-amber-600 text-white p-4 rounded-xl font-bold text-center flex items-center justify-center shadow-md">
                                台灣
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl text-center border border-amber-100">
                                <h4 className="font-bold text-amber-800 mb-2">17-18 世紀</h4>
                                <p className="text-xs text-[17px] text-stone-600">記載野生山茶<br />尚未產業化</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl text-center border border-amber-100">
                                <h4 className="font-bold text-amber-800 mb-2">19 世紀末</h4>
                                <p className="text-xs text-[17px] text-stone-600">開港外銷<br />烏龍與包種盛行</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl text-center border border-amber-100">
                                <h4 className="font-bold text-amber-800 mb-2">20 世紀初</h4>
                                <p className="text-xs text-[17px] text-stone-600">引進阿薩姆品種<br />日月潭產區確立</p>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-stone-100 to-amber-50 p-6 rounded-xl border border-stone-200">
                            <p className="text-lg text-[17px] text-stone-600 leading-relaxed text-center font-medium">
                                台灣紅茶的發展，始終與世界紅茶史緊密相連，
                                既受全球貿易體系影響，也在在地化過程中創造出獨特的價值。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 本堂課核心重點回顧 (Takeaways) */}
                <AcademyContentBlock title="本堂課核心重點回顧 (Takeaways)" icon={MapPin}>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-800 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center text-[22px] font-bold shrink-0">
                                    1
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-bold text-stone-900 mb-3">世界脈絡：從壟斷到全球化</h4>
                                    <p className="text-[17px] text-stone-600 leading-relaxed">
                                        紅茶起源於中國武夷山，經由歐洲貿易與英國殖民體系擴散至全球，
                                        形成今日多元的產區文化。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-600 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-[22px] font-bold shrink-0">
                                    2
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-bold text-stone-900 mb-3">台灣轉折：日治時期的產業佈局</h4>
                                    <p className="text-[17px] text-stone-600 leading-relaxed">
                                        日本政府引進阿薩姆品種並確立日月潭產區，是台灣紅茶從無到有，
                                        進軍國際市場的關鍵轉折。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-stone-500 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-stone-500 text-white rounded-full flex items-center justify-center text-[22px] font-bold shrink-0">
                                    3
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-bold text-stone-900 mb-3">在地特色：蜜香與紅玉的奇蹟</h4>
                                    <p className="text-[17px] text-stone-600 leading-relaxed">
                                        台灣透過「著涎」工藝與品種選育（如紅玉），
                                        創造出具備薄荷、肉桂與蜜香等獨特的「台灣香」。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 瞻王暖茶：現代健康與正能量的實踐 */}
                <AcademyContentBlock title="瞻王暖茶：現代健康與正能量的實踐" icon={Sprout}>
                    <div className="bg-gradient-to-br from-red-900 via-amber-900 to-stone-900 text-white p-16 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 text-center">
                            <h3 className="text-5xl font-bold mb-4 tracking-wider text-amber-50">瞻王暖茶</h3>
                            <h4 className="text-3xl font-light mb-8 text-amber-200">現代健康與正能量的實踐</h4>
                            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 瞻王暖茶：源自佛堂的健康承諾 */}
                <AcademyContentBlock title="瞻王暖茶：源自佛堂的健康承諾" icon={Globe}>
                    <div className="bg-gradient-to-r from-amber-50 to-red-50 p-8 rounded-2xl mb-8 border border-amber-100 shadow-sm">
                        <h3 className="text-3xl font-bold text-amber-900 text-center mb-2">
                            源自佛堂的健康承諾
                        </h3>
                        <p className="text-center text-amber-700 font-medium">Original Promise of Health</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-600 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors"></div>
                            <div className="relative z-10 text-center">
                                <div className="text-5xl mb-6">📋</div>
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4">藤王生態</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed text-sm">
                                    以軟枝烏龍茶核心，打造濃郁身心的正能量紅茶。
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-600 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors"></div>
                            <div className="relative z-10 text-center">
                                <div className="text-5xl mb-6">🔄</div>
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4">一條龍模式</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed text-sm">
                                    自產、自製、自包、全程親自把關，絕不假手他人。
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-600 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors"></div>
                            <div className="relative z-10 text-center">
                                <div className="text-5xl mb-6 text-amber-600"><ShieldCheck size={48} className="inline" /></div>
                                <h4 className="text-[22px] font-bold text-stone-900 mb-4">極致安心</h4>
                                <p className="text-[17px] text-stone-600 leading-relaxed text-sm">
                                    從茶園到茶杯，確保每一口都是健康與高品質。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-stone-900 text-amber-50 p-10 rounded-3xl shadow-2xl relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern/tea-leaves.png')] opacity-10"></div>
                        <h4 className="text-3xl font-bold mb-6 relative z-10">課程總結</h4>
                        <p className="text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
                            從世界紅茶的起源與擴散，到台灣紅茶的引進、發展與在地化創新，
                            我們看見了紅茶如何成為連結全球文化的橋樑，
                            也見證了台灣茶人如何在傳統與創新之間，走出一條獨特的精品之路。
                        </p>
                        <p className="text-[24px] text-amber-400 font-serif italic relative z-10">
                            "願每一杯台灣紅茶，都能帶給您健康、溫暖與正能量。"
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 軟枝烏龍：風味之根 */}
                <AcademyContentBlock title="軟枝烏龍：風味之根" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-amber-800 flex flex-col justify-center">
                            <div className="bg-amber-800 text-white px-4 py-2 rounded-lg text-sm font-bold inline-block mb-6 w-fit">
                                優良品種
                            </div>
                            <h3 className="text-3xl font-bold text-stone-900 mb-3">軟枝烏龍</h3>
                            <h4 className="text-xl text-amber-700 mb-6 font-medium">風味之根</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-lg">
                                選用珍貴的早期品種「軟枝烏龍」，滋味濃郁且香氣高雅。
                                這不僅是品種的選擇，更是對傳統風味的極致堅持。
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-stone-800 to-amber-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-20 rounded-full blur-3xl"></div>
                            <h3 className="text-3xl font-bold mb-8 relative z-10">仙境風土</h3>
                            <div className="space-y-4 relative z-10">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                    <h4 className="font-bold text-lg mb-1 text-amber-200">陸嶼山坡</h4>
                                    <p className="text-stone-300 text-sm">獨特地形，日照充足</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                    <h4 className="font-bold text-lg mb-1 text-amber-200">綿綿雲霧</h4>
                                    <p className="text-stone-300 text-sm">保濕滋潤，嫩芽柔嫩</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                    <h4 className="font-bold text-lg mb-1 text-amber-200">純淨水質</h4>
                                    <p className="text-stone-300 text-sm">甘甜泉水，灌溉茶園</p>
                                </div>
                            </div>
                            <p className="mt-8 text-amber-100 leading-relaxed italic relative z-10 border-t border-white/20 pt-6">
                                在含氧量充足的純淨環境中，孕育出充滿正能量的茶葉。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 有機管理與純粹茶氣 */}
                <AcademyContentBlock title="有機管理與純粹茶氣" icon={Globe}>
                    <div className="bg-gradient-to-r from-red-100 to-amber-100 p-6 rounded-2xl mb-8 border border-red-100">
                        <h3 className="text-[24px] font-bold text-center text-stone-800 flex justify-center gap-4">
                            <span className="bg-red-700 text-white px-6 py-2 rounded-full shadow-md">權威認證</span>
                            <span className="bg-amber-700 text-white px-6 py-2 rounded-full shadow-md">能量堅持</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-emerald-600 group">
                            <div className="w-20 h-20 mb-6 mx-auto bg-emerald-50 rounded-full flex items-center justify-center p-4 group-hover:scale-110 transition-transform">
                                <Leaf size={40} className="text-emerald-600" />
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">無農藥栽培</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                堅持不噴灑農藥，使用有機肥料，保留土地純粹的生命力。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-red-600 group">
                            <div className="w-20 h-20 mb-6 mx-auto bg-red-50 rounded-full flex items-center justify-center p-4 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={40} className="text-red-600" />
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-2">SGS 認證</h4>
                            <div className="text-4xl font-black text-red-600 mb-4">47項</div>
                            <p className="text-[17px] text-stone-600 leading-relaxed text-sm">
                                通過無農藥殘留檢測，為您的健康提供最高規格的安全保障。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-amber-600 group">
                            <div className="w-20 h-20 mb-6 mx-auto bg-amber-50 rounded-full flex items-center justify-center p-4 group-hover:scale-110 transition-transform">
                                <Sun size={40} className="text-amber-600" />
                            </div>
                            <h4 className="text-[22px] font-bold text-stone-900 mb-4">強勁茶氣</h4>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                獨特風土與工藝，賦予茶湯強勁的穿透力與溫暖的正能量。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center p-6 bg-stone-50 rounded-xl border border-stone-200">
                        <p className="text-[17px] text-stone-600 leading-relaxed font-medium italic">
                            「唯有純淨生長，才能醞釀出強勁且純粹的茶氣能量。」
                        </p>
                    </div>

                    {/* 有機茶園專業圖片 */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl mt-8 relative group">
                        <img
                            src="/images/academy/chonghua-chapter03/organic_tea_garden.png"
                            alt="有機茶園 - 自然生態系統的健康茶樹"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-center">
                            <p className="text-white font-bold text-xl mb-1">有機茶園</p>
                            <p className="text-sm text-stone-300 italic">無農藥栽培 - 自然生態的純淨茶園</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 愛與科技的灌溉 */}
                <AcademyContentBlock title="愛與科技的灌溉" icon={Heart}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl shadow-sm border-l-4 border-pink-400 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-pink-100 rounded-full text-pink-500">
                                    <Heart size={32} />
                                </div>
                                <h3 className="text-[24px] font-bold text-stone-800">素食志工的愛</h3>
                            </div>
                            <p className="text-[17px] text-stone-700 leading-relaxed mb-6 text-lg">
                                一群充滿愛心的素食志工，定期為茶樹噴灑
                                <strong className="text-red-600 bg-red-100 px-2 py-1 rounded mx-1">SOD酵素</strong>。
                                這份正能量，讓茶葉更健康、更有生命力。
                            </p>
                            <div className="bg-white/60 p-4 rounded-xl border border-pink-100">
                                <p className="text-sm text-[17px] text-stone-600 font-medium">
                                    * 超氧化物歧化酶（SOD）：抗氧化與修復的重要酵素
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-sm border-l-4 border-teal-400 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                                    <PenTool size={32} />
                                </div>
                                <h3 className="text-[24px] font-bold text-stone-800">奈米肥料技術</h3>
                            </div>
                            <p className="text-[17px] text-stone-700 leading-relaxed text-lg">
                                將非基改黃豆肥料<strong className="text-teal-700 bg-teal-100 px-2 py-1 rounded mx-1">奈米化</strong>，
                                分子縮小至十億分之一，讓茶樹能極易地吸收養分，直達根部，轉化為茶湯的甘甜膠質。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 藤王暖茶建議沖泡方式 */}
                <AcademyContentBlock title="藤王暖茶建議沖泡方式" icon={Coffee}>
                    <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white p-10 rounded-2xl shadow-xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2 text-amber-500">完美沖泡指南</h3>
                            <p className="text-stone-300">Golden Brewing Guide</p>
                        </div>
                        <div className="flex gap-4 relative z-10">
                            <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md border border-white/20">
                                <Thermometer className="mx-auto mb-2 text-red-400" size={24} />
                                <div className="text-sm font-bold">90-95°C</div>
                                <div className="text-xs text-stone-400">水溫</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md border border-white/20">
                                <Scale className="mx-auto mb-2 text-teal-400" size={24} />
                                <div className="text-sm font-bold">1:25</div>
                                <div className="text-xs text-stone-400">茶水比</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md border border-white/20">
                                <Clock className="mx-auto mb-2 text-amber-400" size={24} />
                                <div className="text-sm font-bold">20s+</div>
                                <div className="text-xs text-stone-400">時間</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-6 flex items-center gap-2">
                                <div className="p-2 bg-stone-100 rounded-lg"><Thermometer size={20} className="text-[17px] text-stone-600" /></div>
                                沖泡參數
                            </h4>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <div>
                                        <span className="font-bold text-stone-900 block mb-1">溫度控制</span>
                                        <span className="text-[17px] text-stone-600 text-sm">建議 90-95°C，滾水稍降溫後沖泡風味最佳。</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <div>
                                        <span className="font-bold text-stone-900 block mb-1">茶葉置量</span>
                                        <span className="text-[17px] text-stone-600 text-sm">黃金比例 1:25 (例如 200cc 水配 8g 茶葉)。若投茶量少，則需增加浸泡時間。</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                            <h4 className="text-[22px] font-bold text-stone-800 mb-6 flex items-center gap-2">
                                <div className="p-2 bg-stone-100 rounded-lg"><Clock size={20} className="text-[17px] text-stone-600" /></div>
                                沖泡節奏
                            </h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg border border-stone-100">
                                    <span className="font-medium text-[17px] text-stone-700">第一沖</span>
                                    <span className="font-bold text-amber-600">20秒</span>
                                </div>
                                <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg border border-stone-100">
                                    <span className="font-medium text-[17px] text-stone-700">第二沖</span>
                                    <span className="font-bold text-amber-600">15秒</span>
                                </div>
                                <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg border border-stone-100">
                                    <span className="font-medium text-[17px] text-stone-700">第三沖</span>
                                    <span className="font-bold text-red-500">25秒</span>
                                </div>
                                <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg border border-stone-100">
                                    <span className="font-medium text-[17px] text-stone-700">第四沖</span>
                                    <span className="font-bold text-red-600">35秒</span>
                                </div>
                            </div>
                            <p className="text-xs text-stone-500 mt-4 leading-relaxed text-center">
                                * 第四沖後可使用 100°C 沸水，並逐次增加時間。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
