import React, { useState } from 'react';
import { Star, Globe, Leaf, Ship, Crown, Coffee, Flame, Mountain, ZoomIn } from 'lucide-react';
import ImageLightbox from '../ImageLightbox';

/**
 * RedTeaVerticalTimeline - 紅茶歷史垂直時間線
 * 左側時間軸線，右側歷史事件卡片
 */
export default function RedTeaVerticalTimeline() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });

    const openLightbox = (src, alt) => {
        setLightboxImage({ src, alt });
        setLightboxOpen(true);
    };

    const TimelineEvent = ({ year, title, content, icon: Icon, highlight = false, color = 'red', imageSrc }) => {
        const colorClasses = {
            green: 'border-green-500 bg-green-50',
            red: 'border-red-500 bg-red-50',
            blue: 'border-blue-500 bg-blue-50',
            amber: 'border-amber-500 bg-amber-50',
            purple: 'border-purple-500 bg-purple-50'
        };

        const iconColorClasses = {
            green: 'text-green-600',
            red: 'text-red-600',
            blue: 'text-blue-600',
            amber: 'text-amber-600',
            purple: 'text-purple-600'
        };

        return (
            <div className="relative flex gap-6 pb-8">
                {/* Left: Timeline */}
                <div className="flex flex-col items-center">
                    {/* Year badge */}
                    <div className={`${highlight ? 'bg-red-600' : 'bg-stone-800'} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md border-2 border-white whitespace-nowrap z-10`}>
                        {year}
                    </div>
                    {/* Vertical line */}
                    <div className="w-0.5 bg-stone-300 flex-1 mt-2"></div>
                </div>

                {/* Right: Content card */}
                <div className={`flex-1 bg-white rounded-lg shadow-sm border-l-4 ${colorClasses[color]} hover:shadow-md transition-shadow ${highlight ? 'ring-2 ring-red-300' : ''} overflow-hidden`}>
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section - Show full square/portrait aspect on desktop, banner on mobile */}
                        {imageSrc && (
                            <div
                                className="md:w-1/3 h-48 md:h-auto min-h-[200px] relative shrink-0 bg-stone-100 group cursor-zoom-in"
                                onClick={() => openLightbox(imageSrc, title)}
                            >
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-cover md:object-contain object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <span className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm">
                                        <ZoomIn size={20} />
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Text Content */}
                        <div className="p-5 flex-1">
                            {Icon && (
                                <div className="flex items-center mb-2">
                                    <Icon size={18} className={`${iconColorClasses[color]} mr-2`} />
                                    <h4 className="font-bold text-stone-800 text-base">{title}</h4>
                                </div>
                            )}
                            {!Icon && <h4 className="font-bold text-stone-800 text-base mb-2">{title}</h4>}
                            <p className="text-stone-600 text-sm leading-relaxed">{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
            <ImageLightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                imageSrc={lightboxImage.src}
                altText={lightboxImage.alt}
            />
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-red-900 mb-3">
                    紅茶起源與傳播：歷史長河
                </h2>
                <p className="text-stone-600">從唐代綠茶到明末紅茶誕生，再到全球傳播的完整歷史</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm max-w-4xl mx-auto">
                {/* 中國茶的早期發展 */}
                <div className="mb-8">
                    <div className="mb-6 flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full border border-green-300 inline-flex">
                        <Leaf className="text-green-700" size={20} />
                        <span className="font-bold text-green-900">中國茶的早期發展（以綠茶為主）</span>
                    </div>

                    <div className="ml-4">
                        <TimelineEvent
                            year="7-9世紀"
                            title="唐代"
                            content="蒸青團茶為主（餅茶），茶文化開始興盛。陸羽《茶經》奠定茶道基礎。"
                            imageSrc="/images/timeline/timeline_tang.png"
                            color="green"
                            icon={Leaf}
                        />

                        <TimelineEvent
                            year="10-13世紀"
                            title="宋代"
                            content="點茶、末茶文化達到巔峰，茶藝精緻化。宋徽宗推崇鬥茶文化。"
                            color="green"
                        />

                        <TimelineEvent
                            year="13-14世紀"
                            title="元代"
                            content="散茶開始普及，製茶工藝簡化，為明代改革鋪路。"
                            color="green"
                        />

                        <TimelineEvent
                            year="14-16世紀"
                            title="明代"
                            content="朱元璋廢除團茶，改「蒸青」為「炒青」，奠定現代綠茶基礎，也為發酵茶發展埋下伏筆。"
                            imageSrc="/images/timeline/timeline_ming.png"
                            color="green"
                            icon={Flame}
                        />
                    </div>
                </div>

                {/* 關鍵轉折 */}
                <div className="my-12">
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                            <Star size={20} className="animate-pulse" />
                            <span className="font-bold">關鍵轉折點</span>
                        </div>
                    </div>

                    <div className="ml-4">
                        <TimelineEvent
                            year="16-17世紀"
                            title="明末清初 - 紅茶誕生"
                            content="福建武夷山桐木關，因戰亂、長途運輸、天氣等因素，茶葉發生完全氧化（發酵），形成第一批紅茶 —— 正山小種誕生，成為世界第一款紅茶。"
                            imageSrc="/images/timeline/timeline_wuyi.png"
                            color="red"
                            highlight={true}
                            icon={Mountain}
                        />
                    </div>

                    <div className="flex justify-center my-6">
                        <div className="bg-red-100 border-2 border-red-400 px-6 py-4 rounded-xl shadow-md max-w-md text-center">
                            <div className="font-bold text-red-900 text-lg mb-2"><Leaf size={18} className="inline" /> 正山小種</div>
                            <div className="text-red-800 text-sm">世界第一款紅茶 · 松煙香 · 桂圓味</div>
                        </div>
                    </div>
                </div>

                {/* 西傳與全球化 */}
                <div className="mt-12">
                    <div className="mb-6 flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full border border-blue-300 inline-flex">
                        <Globe className="text-blue-700" size={20} />
                        <span className="font-bold text-blue-900">紅茶西傳與全球化</span>
                    </div>

                    <div className="ml-4">
                        <TimelineEvent
                            year="1610年"
                            title="荷蘭東印度公司"
                            content="首次將正山小種輸往歐洲，作為「東方草藥」販售，開啟紅茶貿易時代。"
                            imageSrc="/images/timeline/timeline_dutch.png"
                            color="blue"
                            icon={Ship}
                        />

                        <TimelineEvent
                            year="1662年"
                            title="英國皇室風潮"
                            content="葡萄牙凱瑟琳公主嫁給英王查理二世，將飲茶習慣帶入英國宮廷，引發貴族飲茶熱潮。"
                            imageSrc="/images/timeline/timeline_british.png"
                            color="blue"
                            icon={Crown}
                        />

                        <TimelineEvent
                            year="18世紀"
                            title="英國茶文化形成"
                            content="紅茶成為英國主流飲品，下午茶文化確立。「Bohea」（武夷）成為深色發酵茶的代名詞。"
                            color="blue"
                            icon={Coffee}
                        />

                        <TimelineEvent
                            year="1773年"
                            title="波士頓傾茶事件"
                            content="342箱中國茶（其中80%為武夷紅茶）被倒入海中，引發美國獨立戰爭，茶葉改變歷史。"
                            color="amber"
                        />

                        <TimelineEvent
                            year="1838年"
                            title="印度阿薩姆紅茶"
                            content="英國在印度創製紅茶，打破對中國茶依賴，開啟殖民地茶園時代。"
                            imageSrc="/images/timeline/timeline_assam.png"
                            color="purple"
                            icon={Globe}
                        />

                        <TimelineEvent
                            year="1840年"
                            title="鴉片戰爭"
                            content="英國為茶貿易逆差發動戰爭，改變中國近代史走向。"
                            color="amber"
                        />

                        <TimelineEvent
                            year="19世紀"
                            title="工業革命與紅茶全球化"
                            content="CTC揉捻機發明，紅碎茶成為主流。英式拼配茶體系建立，紅茶佔全球茶葉出口80%。"
                            color="purple"
                        />

                        <TimelineEvent
                            year="21世紀"
                            title="正山小種體系延伸"
                            content="傳統煙燻正山小種、無煙正山小種、金駿眉（2005年後）等創新品種，紅茶持續演進。"
                            color="red"
                            icon={Leaf}
                        />
                    </div>
                </div>

                {/* 全球傳播路線 */}
                <div className="mt-16 pt-8 border-t-2 border-stone-200">
                    <div className="mb-6 flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full border border-purple-300 inline-flex">
                        <Globe className="text-purple-700" size={20} />
                        <span className="font-bold text-purple-900">紅茶全球傳播路線</span>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-400 text-center">
                            <div className="font-bold text-red-900 mb-2">🇨🇳 中國</div>
                            <div className="text-sm text-red-800">正山小種<br />桐木關</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-400 text-center">
                            <div className="font-bold text-blue-900 mb-2">🇬🇧 英國</div>
                            <div className="text-sm text-blue-800">紅茶文化<br />下午茶</div>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-400 text-center">
                            <div className="font-bold text-amber-900 mb-2">🇮🇳 印度</div>
                            <div className="text-sm text-amber-800">阿薩姆紅茶<br />大吉嶺</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400 text-center">
                            <div className="font-bold text-green-900 mb-2">🇱🇰 斯里蘭卡</div>
                            <div className="text-sm text-green-800">錫蘭紅茶<br />世界知名</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-stone-600 italic">
                一片茶葉改變世界：從武夷山到全球的紅茶之旅
            </div>
        </div >
    );
}
