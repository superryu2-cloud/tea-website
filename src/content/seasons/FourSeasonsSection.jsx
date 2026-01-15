import React from 'react';
import { ArrowRight, Flame, Leaf, Snowflake, Sprout, Sun, Wheat } from 'lucide-react';

export default function FourSeasonsSection() {
    return (
        <div className="space-y-8">
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
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Spring */}
                <div className="bg-green-50/50 rounded-xl overflow-hidden border border-green-100 hover:shadow-md transition-all">
                    <div className="bg-green-100 p-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-green-800 flex items-center"><Sprout className="mr-2" /> 春茶</h3>
                        <span className="text-sm font-medium text-green-700 bg-white/60 px-2 py-1 rounded">清明 ~ 穀雨 (約4月)</span>
                    </div>
                    <div className="p-6">
                        <p className="text-stone-700 mb-4 leading-relaxed">
                            經過冬季的休養生息，氣溫回暖雨量充沛。茶芽飽滿，葉質柔軟。
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white text-green-800 text-xs px-2 py-1 rounded border border-green-200">產量之冠</span>
                            <span className="bg-white text-green-800 text-xs px-2 py-1 rounded border border-green-200">品質最優</span>
                            <span className="bg-white text-green-800 text-xs px-2 py-1 rounded border border-green-200">滋味鮮爽</span>
                        </div>
                    </div>
                </div>

                {/* Summer */}
                <div id="summer-tea" className="scroll-mt-28 bg-orange-50/50 rounded-xl overflow-hidden border border-orange-100 hover:shadow-md transition-all">
                    <div className="bg-orange-100 p-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-orange-800 flex items-center"><Sun className="mr-2" /> 夏茶</h3>
                        <span className="text-sm font-medium text-orange-700 bg-white/60 px-2 py-1 rounded">約5 ~ 8月</span>
                    </div>
                    <div className="p-6">
                        <p className="text-stone-700 mb-4 leading-relaxed">
                            溫度高日照長，茶葉生長快，胺基酸減少，口感較澀，適合製作發酵度高的<span className="font-bold text-red-600">紅茶</span>。
                        </p>
                        <div className="bg-white p-3 rounded-lg border border-orange-200 shadow-sm">
                            <p className="text-sm text-orange-900 font-bold mb-1">例外：東方美人 (白毫烏龍)</p>
                            <p className="text-xs text-stone-600">端午前後最佳！悶熱吸引<span className="font-bold">小綠葉蟬</span>叮咬，造就獨特蜜香。</p>
                        </div>
                    </div>
                </div>

                {/* Autumn */}
                <div id="autumn-tea" className="scroll-mt-28 bg-amber-50/50 rounded-xl overflow-hidden border border-amber-100 hover:shadow-md transition-all">
                    <div className="bg-amber-100 p-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-amber-800 flex items-center"><Wheat className="mr-2" /> 秋茶</h3>
                        <span className="text-sm font-medium text-amber-700 bg-white/60 px-2 py-1 rounded">立秋 ~ 白露 (8末-10末)</span>
                    </div>
                    <div className="p-6">
                        <p className="text-stone-700 mb-4 leading-relaxed">
                            可採收兩次。立秋茶帶夏氣適合紅茶；白露茶轉平和適合烏龍。溫差加大造就獨特「秋香」。
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white text-amber-800 text-xs px-2 py-1 rounded border border-amber-200">秋香</span>
                            <span className="bg-white text-amber-800 text-xs px-2 py-1 rounded border border-amber-200">溫差大</span>
                            <span className="bg-white text-amber-800 text-xs px-2 py-1 rounded border border-amber-200">香氣高</span>
                        </div>
                    </div>
                </div>

                {/* Winter */}
                <div id="winter-tea" className="scroll-mt-28 bg-blue-50/50 rounded-xl overflow-hidden border border-blue-100 hover:shadow-md transition-all">
                    <div className="bg-blue-100 p-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-blue-800 flex items-center"><Snowflake className="mr-2" /> 冬茶</h3>
                        <span className="text-sm font-medium text-blue-700 bg-white/60 px-2 py-1 rounded">霜降 ~ 小雪 (約10-11月)</span>
                    </div>
                    <div className="p-6">
                        <p className="text-stone-700 mb-4 leading-relaxed">
                            生長緩慢，葉片厚實。香氣內斂、滋味濃郁，耐泡度高。與春茶並列為最佳採收季。
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white text-blue-800 text-xs px-2 py-1 rounded border border-blue-200">品質優</span>
                            <span className="bg-white text-blue-800 text-xs px-2 py-1 rounded border border-blue-200">香氣內斂</span>
                            <span className="bg-white text-blue-800 text-xs px-2 py-1 rounded border border-blue-200">滋味濃</span>
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
