import React, { useState } from 'react';
import { ArrowRight, Flame, Leaf, Snowflake, Sprout, Sun, Wheat } from 'lucide-react';
import ImageLightbox from '../../components/ImageLightbox';

export default function FourSeasonsSection() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });

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
        <div className="space-y-8">
            <ImageLightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                imageSrc={lightboxImage.src}
                altText={lightboxImage.alt}
            />
            {/* Introduction */}
            <div id="spring-tea" className="scroll-mt-28 mb-12 museum-panel px-8 pt-8 pb-8 md:px-12 md:pt-12 md:pb-12 text-center">
                <div className="museum-label mx-auto">EXHIBIT · FOUR SEASONS</div>
                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">四季採茶，你懂差別在哪嗎？</h2>
                <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
                    茶葉除了依照工藝分類，也可以依照「四季」來尋找自己喜歡的風味。傳統依循二十四節氣，但台灣各地氣候與海拔不同（如平地三月開採，大禹嶺六月仍算春茶），造就了每個季節獨特的茶湯性格。
                </p>
            </div>

            {/* General Rule Box */}
            <div className="museum-panel p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="museum-card px-5 py-3 flex items-center space-x-3 border-l-4 border-green-500">
                    <Leaf className="text-green-600" />
                    <span className="text-stone-700 font-bold">綠茶、烏龍茶 (輕/不發酵)</span>
                    <ArrowRight size={16} className="text-stone-400" />
                    <span className="text-stone-900">春、冬 為佳</span>
                </div>
                <div className="museum-card px-5 py-3 flex items-center space-x-3 border-l-4 border-red-500">
                    <Flame className="text-red-600" />
                    <span className="text-stone-700 font-bold">紅茶、東方美人 (重發酵)</span>
                    <ArrowRight size={16} className="text-stone-400" />
                    <span className="text-stone-900">夏、秋 (6-9月) 為佳</span>
                </div>
            </div>

            {/* Seasons Grid */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
                {/* Spring */}
                <div className="bg-green-50/50 rounded-3xl overflow-hidden border border-green-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                    <div
                        className="h-64 relative overflow-hidden cursor-zoom-in"
                        role="button"
                        tabIndex={0}
                        aria-label="Zoom Spring Tea Picking"
                        onClick={() => openLightbox('/images/seasons/spring_picking.png', 'Spring Tea Picking')}
                        onKeyDown={(event) => handleImageKeyDown(event, '/images/seasons/spring_picking.png', 'Spring Tea Picking')}
                    >
                        <img src="/images/seasons/spring_picking.png" alt="Spring Tea Picking" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                        <div className="absolute bottom-5 left-6 text-white">
                            <h3 className="text-3xl font-black flex items-center drop-shadow-md"><Sprout className="mr-3" size={28} /> 春茶</h3>
                            <div className="mt-1 text-green-100 font-medium text-sm bg-green-900/40 px-2 py-1 rounded-lg backdrop-blur-sm inline-block border border-green-500/30">清明 ~ 穀雨 (約4月)</div>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-stone-700 mb-6 leading-relaxed text-lg flex-1">
                            經過冬季的休養生息，氣溫回暖雨量充沛。茶芽飽滿，葉質柔軟。
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="bg-white text-green-800 text-sm px-3 py-1.5 rounded-full border border-green-200 font-bold shadow-sm">產量之冠</span>
                            <span className="bg-white text-green-800 text-sm px-3 py-1.5 rounded-full border border-green-200 font-bold shadow-sm">品質最優</span>
                            <span className="bg-white text-green-800 text-sm px-3 py-1.5 rounded-full border border-green-200 font-bold shadow-sm">滋味鮮爽</span>
                        </div>
                    </div>
                </div>

                {/* Summer */}
                <div id="summer-tea" className="scroll-mt-28 bg-orange-50/50 rounded-3xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                    <div
                        className="h-64 relative overflow-hidden cursor-zoom-in"
                        role="button"
                        tabIndex={0}
                        aria-label="Zoom Summer Tea Picking"
                        onClick={() => openLightbox('/images/seasons/summer_picking.png', 'Summer Tea Picking')}
                        onKeyDown={(event) => handleImageKeyDown(event, '/images/seasons/summer_picking.png', 'Summer Tea Picking')}
                    >
                        <img src="/images/seasons/summer_picking.png" alt="Summer Tea Picking" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" />
                        <div className="absolute bottom-5 left-6 text-white">
                            <h3 className="text-3xl font-black flex items-center drop-shadow-md"><Sun className="mr-3" size={28} /> 夏茶</h3>
                            <div className="mt-1 text-orange-100 font-medium text-sm bg-orange-900/40 px-2 py-1 rounded-lg backdrop-blur-sm inline-block border border-orange-500/30">約5 ~ 8月</div>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-stone-700 mb-6 leading-relaxed text-lg flex-1">
                            溫度高日照長，茶葉生長快，胺基酸減少，口感較澀，適合製作發酵度高的<span className="font-bold text-red-600">紅茶</span>。
                        </p>
                        <div className="bg-white p-4 rounded-2xl border border-orange-200 shadow-sm mt-auto">
                            <p className="text-base text-orange-900 font-black mb-1 flex items-center"><Flame size={16} className="mr-1" /> 例外：東方美人 (白毫烏龍)</p>
                            <p className="text-sm text-stone-600 leading-snug">端午前後最佳！悶熱吸引<span className="font-bold text-stone-800">小綠葉蟬</span>叮咬，造就獨特蜜香。</p>
                        </div>
                    </div>
                </div>

                {/* Autumn */}
                <div id="autumn-tea" className="scroll-mt-28 bg-amber-50/50 rounded-3xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                    <div
                        className="h-64 relative overflow-hidden cursor-zoom-in"
                        role="button"
                        tabIndex={0}
                        aria-label="Zoom Autumn Tea Picking"
                        onClick={() => openLightbox('/images/seasons/autumn_picking.png', 'Autumn Tea Picking')}
                        onKeyDown={(event) => handleImageKeyDown(event, '/images/seasons/autumn_picking.png', 'Autumn Tea Picking')}
                    >
                        <img src="/images/seasons/autumn_picking.png" alt="Autumn Tea Picking" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
                        <div className="absolute bottom-5 left-6 text-white">
                            <h3 className="text-3xl font-black flex items-center drop-shadow-md"><Wheat className="mr-3" size={28} /> 秋茶</h3>
                            <div className="mt-1 text-amber-100 font-medium text-sm bg-amber-900/40 px-2 py-1 rounded-lg backdrop-blur-sm inline-block border border-amber-500/30">立秋 ~ 白露 (8末-10末)</div>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-stone-700 mb-6 leading-relaxed text-lg flex-1">
                            可採收兩次。立秋茶帶夏氣適合紅茶；白露茶轉平和適合烏龍。溫差加大造就獨特「秋香」。
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="bg-white text-amber-800 text-sm px-3 py-1.5 rounded-full border border-amber-200 font-bold shadow-sm">秋香</span>
                            <span className="bg-white text-amber-800 text-sm px-3 py-1.5 rounded-full border border-amber-200 font-bold shadow-sm">溫差大</span>
                            <span className="bg-white text-amber-800 text-sm px-3 py-1.5 rounded-full border border-amber-200 font-bold shadow-sm">香氣高</span>
                        </div>
                    </div>
                </div>

                {/* Winter */}
                <div id="winter-tea" className="scroll-mt-28 bg-blue-50/50 rounded-3xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                    <div
                        className="h-64 relative overflow-hidden cursor-zoom-in"
                        role="button"
                        tabIndex={0}
                        aria-label="Zoom Winter Tea Picking"
                        onClick={() => openLightbox('/images/seasons/winter_picking.png', 'Winter Tea Picking')}
                        onKeyDown={(event) => handleImageKeyDown(event, '/images/seasons/winter_picking.png', 'Winter Tea Picking')}
                    >
                        <img src="/images/seasons/winter_picking.png" alt="Winter Tea Picking" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                        <div className="absolute bottom-5 left-6 text-white">
                            <h3 className="text-3xl font-black flex items-center drop-shadow-md"><Snowflake className="mr-3" size={28} /> 冬茶</h3>
                            <div className="mt-1 text-blue-100 font-medium text-sm bg-blue-900/40 px-2 py-1 rounded-lg backdrop-blur-sm inline-block border border-blue-500/30">霜降 ~ 小雪 (約10-11月)</div>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-stone-700 mb-6 leading-relaxed text-lg flex-1">
                            生長緩慢，葉片厚實。香氣內斂、滋味濃郁，耐泡度高。與春茶並列為最佳採收季。
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="bg-white text-blue-800 text-sm px-3 py-1.5 rounded-full border border-blue-200 font-bold shadow-sm">品質優</span>
                            <span className="bg-white text-blue-800 text-sm px-3 py-1.5 rounded-full border border-blue-200 font-bold shadow-sm">香氣內斂</span>
                            <span className="bg-white text-blue-800 text-sm px-3 py-1.5 rounded-full border border-blue-200 font-bold shadow-sm">滋味濃</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="bg-stone-800 text-stone-200 rounded-xl p-8">
                <h4 className="text-xl font-bold text-white mb-4">四季採茶總結</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <span className="block text-amber-500 font-bold mb-2">品質排序</span>
                        <p className="text-sm text-stone-400">春茶 ≈ 冬茶 &gt; 秋茶 &gt; 夏茶</p>
                        <p className="text-xs text-stone-500 mt-1">（東方美人例外，夏茶最佳）</p>
                    </div>
                    <div>
                        <span className="block text-amber-500 font-bold mb-2">產量排序</span>
                        <p className="text-sm text-stone-400">春茶 &gt; 夏茶 &gt; 秋茶 &gt; 冬茶</p>
                    </div>
                    <div>
                        <span className="block text-amber-500 font-bold mb-2">價格排序</span>
                        <p className="text-sm text-stone-400">春茶 ≈ 冬茶 &gt; 秋茶 &gt; 夏茶</p>
                        <p className="text-xs text-stone-500 mt-1">（高山茶、東方美人例外）</p>
                    </div>
                    <div>
                        <span className="block text-amber-500 font-bold mb-2">記憶口訣</span>
                        <p className="text-sm text-stone-400">春冬品質佳，夏秋各有長</p>
                        <p className="text-xs text-stone-500 mt-1">春冬做烏龍，夏秋做紅茶</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
