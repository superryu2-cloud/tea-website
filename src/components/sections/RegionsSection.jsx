import React, { useState } from 'react';
import { Sprout, Globe, Map, Coffee } from 'lucide-react';
import TaiwanTeaMap from '../TaiwanTeaMap';
import ImageModal from '../ImageModal';

const RegionsSection = () => {
    const [previewImage, setPreviewImage] = useState(null);

    return (
        <div className="museum-page">
            <div className="museum-stage">
                <div className="text-center mb-16"><h2 className="text-3xl font-bold text-stone-900 text-outline-white">臺灣茶產地導覽</h2></div>

                <div className="mb-24">
                    {/* New Taiwan Tea Overview Section */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 mb-16">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-emerald-100 rounded-full text-emerald-700 mt-1 shrink-0">
                                <Sprout size={24} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-stone-900">臺灣特色茶總覽</h3>
                                <p className="text-lg text-stone-700 leading-relaxed">
                                    臺灣特色茶包含綠茶、文山包種茶、半球型包種茶、高山茶、白毫烏龍茶、鐵觀音茶及紅茶等。
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Green Tea */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-stone-100">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/green_tea/taiwan_green_tea_sanxia.png', alt: 'Taiwan Green Tea - 三峽綠茶' })}
                                >
                                    <img src="/images/varieties/green_tea/taiwan_green_tea_sanxia.png" alt="Sanxia Green Tea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-3 right-3 bg-emerald-600/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">綠茶</span>
                                </div>
                                <div className="p-6">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        其中，綠茶主要產於新北市與桃竹苗等茶區，目前以新北市三峽區所產製的龍井與碧螺春綠茶深受消費者喜愛；
                                    </p>
                                </div>
                            </div>

                            {/* Wenshan Pouchong */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-stone-100">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/oolong_tea/wenshan_pouchong_pinglin.png', alt: 'Wenshan Pouchong - 文山包種茶' })}
                                >
                                    <img src="/images/varieties/oolong_tea/wenshan_pouchong_pinglin.png" alt="Wenshan Pouchong" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-3 right-3 bg-emerald-700/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">文山包種</span>
                                </div>
                                <div className="p-6">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        文山包種茶主要生產於新北市坪林、石碇、新店、臺北市南港及宜蘭縣之部分茶區，以內銷為主；
                                    </p>
                                </div>
                            </div>

                            {/* Hemispherical Pouchong */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-stone-100">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/oolong_tea/hemispherical_pouchong_general.png', alt: 'Hemispherical Pouchong - 半球型包種茶' })}
                                >
                                    <img src="/images/varieties/oolong_tea/hemispherical_pouchong_general.png" alt="Hemispherical Pouchong" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-3 right-3 bg-emerald-800/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">半球型包種</span>
                                </div>
                                <div className="p-6">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        半球型包種茶主要生產於桃園市、新竹縣、苗栗縣、南投縣、雲林縣、嘉義縣、高雄市、宜蘭縣、花蓮縣與臺東縣等茶區；
                                    </p>
                                </div>
                            </div>

                            {/* High Mountain */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-stone-100">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/oolong_tea/high_mountain_tea_alishan.png', alt: 'High Mountain Tea - 高山茶' })}
                                >
                                    <img src="/images/varieties/oolong_tea/high_mountain_tea_alishan.png" alt="High Mountain Tea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-3 right-3 bg-cyan-700/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">高山茶</span>
                                </div>
                                <div className="p-6">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        高山茶亦屬半球型包種茶，主要產地為臺中市和平區、南投縣仁愛、信義、竹山及嘉義縣梅山、竹崎、番路、阿里山等鄉鎮高海拔茶區；
                                    </p>
                                </div>
                            </div>

                            {/* Oriental Beauty */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-stone-100">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/oolong_tea/oriental_beauty_hsinchu.png', alt: 'Oriental Beauty - 白毫烏龍茶' })}
                                >
                                    <img src="/images/varieties/oolong_tea/oriental_beauty_hsinchu.png" alt="Oriental Beauty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-3 right-3 bg-amber-600/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">白毫烏龍</span>
                                </div>
                                <div className="p-6">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        白毫烏龍茶俗稱椪風茶或東方美人茶，主要產於桃園市龍潭區、新竹縣峨眉、北埔、橫山、竹東及苗栗縣頭份、頭屋等茶區；
                                    </p>
                                </div>
                            </div>

                            {/* Tieguanyin */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-stone-100">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/oolong_tea/tieguanyin_muzha.png', alt: 'Tieguanyin - 鐵觀音茶' })}
                                >
                                    <img src="/images/varieties/oolong_tea/tieguanyin_muzha.png" alt="Tieguanyin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-3 right-3 bg-amber-800/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">鐵觀音</span>
                                </div>
                                <div className="p-6">
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        鐵觀音茶目前以臺北市木柵及新北市石門茶區所製造的鐵觀音茶最負盛名；
                                    </p>
                                </div>
                            </div>

                            {/* Black Tea */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group md:col-span-2 lg:col-span-3 border border-stone-100 flex flex-col md:flex-row">
                                <div
                                    className="h-48 md:h-auto md:w-1/3 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/taiwan_black_tea_sun_moon_lake.png', alt: 'Taiwan Black Tea - 台灣紅茶' })}
                                >
                                    <img src="/images/varieties/black_tea/taiwan_black_tea_sun_moon_lake.png" alt="Taiwan Black Tea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <span className="absolute top-3 right-3 bg-rose-700/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">紅茶</span>
                                </div>
                                <div className="p-6 flex-1 flex items-center">
                                    <p className="text-stone-600 text-sm leading-relaxed text-lg">
                                        紅茶則以南投縣魚池鄉日月潭紅茶與花東的蜜香紅茶為主要產區。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Taiwan Map */}
                <div className="mb-24 text-center">
                    <p className="mb-8 text-lg md:text-xl text-stone-600 text-outline-white w-full mx-auto leading-relaxed whitespace-nowrap">
                        臺灣得天獨厚的地理環境，孕育出豐富多樣的茶品。點擊地圖探索各縣市的代表茶類。
                    </p>

                    <TaiwanTeaMap />
                </div>

                {/* World Black Tea Origins Visual Section */}
                <div className="rounded-[3rem] overflow-hidden bg-[#1c1917] text-stone-200 shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

                    <div className="relative z-10 p-10 md:p-16 space-y-16">
                        {/* Header */}
                        <div className="text-center space-y-6">
                            <div className="flex items-center justify-center gap-3 text-blue-300 mb-2">
                                <Globe size={28} />
                                <h3 className="text-3xl md:text-4xl font-bold font-serif tracking-wide text-white">世界紅茶產地示意</h3>
                            </div>
                            <p className="text-stone-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
                                從中國武夷山的發源，到印度阿薩姆的工業化，再到錫蘭的海洋風味。紅茶的足跡遍布全球，每個產區都有其獨特的風土記憶。
                            </p>
                        </div>

                        {/* Origin Cards Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Wuyi Card */}
                            <div className="group relative rounded-3xl overflow-hidden bg-stone-800/50 border border-stone-700/50 hover:border-rose-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-900/10">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/wuyi_mountains.png', alt: 'Wuyi Mountains - 中國武夷山' })}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10" />
                                    <img
                                        src="/images/varieties/black_tea/wuyi_mountains.png"
                                        alt="Wuyi Mountains"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 bg-rose-900/90 text-rose-100 text-xs font-bold rounded-full backdrop-blur-sm border border-rose-700/50">發源地</span>
                                    </div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-1">中國・武夷山</h4>
                                        <span className="text-stone-500 text-sm font-medium tracking-wider">Wuyi Mountains</span>
                                    </div>
                                    <p className="text-stone-400 leading-relaxed text-sm">
                                        紅茶的誕生地。以「正山小種」聞名，帶有獨特的松煙香與桂圓味，是開啟全球紅茶歷史的起點。
                                    </p>
                                    <div className="pt-4 border-t border-stone-700/50 flex items-center gap-2 text-rose-400 text-xs">
                                        <Map size={14} />
                                        <span>福建省崇安縣</span>
                                    </div>
                                </div>
                            </div>

                            {/* Assam Card */}
                            <div className="group relative rounded-3xl overflow-hidden bg-stone-800/50 border border-stone-700/50 hover:border-amber-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/assam_tea_gardens.png', alt: 'Assam - 印度阿薩姆' })}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10" />
                                    <img
                                        src="/images/varieties/black_tea/assam_tea_gardens.png"
                                        alt="Assam Tea Gardens"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 bg-amber-700/90 text-amber-100 text-xs font-bold rounded-full backdrop-blur-sm border border-amber-500/50">最大產區</span>
                                    </div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-1">印度・阿薩姆</h4>
                                        <span className="text-stone-500 text-sm font-medium tracking-wider">Assam</span>
                                    </div>
                                    <p className="text-stone-400 leading-relaxed text-sm">
                                        位於喜馬拉雅山南麓。茶湯濃烈、色澤深紅，帶有濃郁麥芽香，是英式早餐茶的主要基底，適合調製奶茶。
                                    </p>
                                    <div className="pt-4 border-t border-stone-700/50 flex items-center gap-2 text-amber-500 text-xs">
                                        <Map size={14} />
                                        <span>印度東北部</span>
                                    </div>
                                </div>
                            </div>

                            {/* Ceylon Card */}
                            <div className="group relative rounded-3xl overflow-hidden bg-stone-800/50 border border-stone-700/50 hover:border-blue-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10">
                                <div
                                    className="h-48 overflow-hidden relative cursor-zoom-in"
                                    onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/ceylon_highlands.png', alt: 'Ceylon - 斯里蘭卡錫蘭' })}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10" />
                                    <img
                                        src="/images/varieties/black_tea/ceylon_highlands.png"
                                        alt="Ceylon Highlands"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 bg-blue-900/90 text-blue-100 text-xs font-bold rounded-full backdrop-blur-sm border border-blue-700/50">高地茶</span>
                                    </div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-1">斯里蘭卡・錫蘭</h4>
                                        <span className="text-stone-500 text-sm font-medium tracking-wider">Ceylon (Sri Lanka)</span>
                                    </div>
                                    <p className="text-stone-400 leading-relaxed text-sm">
                                        受季風影響，風味清新爽口。烏瓦 (Uva) 產區帶有獨特的鈴蘭花香與薄荷涼氣，被譽為世界三大高香紅茶之一。
                                    </p>
                                    <div className="pt-4 border-t border-stone-700/50 flex items-center gap-2 text-blue-400 text-xs">
                                        <Map size={14} />
                                        <span>斯里蘭卡中央山脈</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Darjeeling Banner */}
                        <div
                            className="relative rounded-2xl overflow-hidden border border-stone-700/50 group cursor-zoom-in"
                            onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/darjeeling_himalayas.png', alt: 'Darjeeling - 印度大吉嶺' })}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src="/images/varieties/black_tea/darjeeling_himalayas.png"
                                    alt="Darjeeling"
                                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-stone-900/80 group-hover:bg-stone-900/70 transition-colors duration-700" />
                            </div>

                            <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left pointer-events-none">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-900/20 text-stone-900">
                                        <Coffee size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold text-amber-100">另有「紅茶中的香檳」—— 印度大吉嶺 (Darjeeling)</h5>
                                        <p className="text-stone-400 text-sm mt-1">以麝香葡萄風味著稱，產量稀少且珍貴。</p>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <span className="px-4 py-2 border border-stone-600 rounded-lg text-stone-400 text-sm tracking-widest hover:bg-stone-800 transition-colors cursor-default">PREMIUM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Zoom Modal */}
                <ImageModal
                    isOpen={!!previewImage}
                    onClose={() => setPreviewImage(null)}
                    src={previewImage?.src}
                    alt={previewImage?.alt}
                />
            </div>
        </div>
    );
};

export default RegionsSection;
