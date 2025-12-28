// Auto-extracted from src/App.jsx

import React from 'react';
import { AlertTriangle, Droplets, FlaskConical, History, Leaf, Map, Star, Wind } from 'lucide-react';

export default function RedOolongContent() {
  return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-900 to-red-900 text-orange-50 rounded-2xl overflow-hidden mb-12 p-8 md:p-16 border border-orange-800">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 md:w-3/4">
                    <div className="inline-block px-3 py-1 bg-orange-600/80 text-white text-sm font-bold rounded mb-4">絕境逢生・創新工藝</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">台東紅烏龍</h2>
                    <p className="text-xl text-orange-200 leading-relaxed font-light mb-6">
                        一部寫在茶葉上的奮鬥史。<br/>
                        結合烏龍茶與紅茶的工藝精髓，在困境中誕生的琥珀傳奇。
                    </p>
                    <blockquote className="border-l-4 border-orange-500 pl-4 italic text-orange-200/80 text-sm">
                        「台東會做這個紅烏龍，其實是真的從絕境中誕生的，是在完全想不到有任何出路的狀況下誕生的。」
                    </blockquote>
                </div>
            </div>

            {/* Content Blocks */}
            <div className="space-y-16">
                
                {/* 1. Geography: 3 Highlands */}
                <div>
                    <div className="flex items-center mb-6">
                        <Map className="text-orange-600 mr-3" size={28}/>
                        <h3 className="text-2xl font-bold text-stone-800">台東茶鄉：三大高台的風土</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-stone-50 p-6 rounded-xl border-t-4 border-green-600 hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg text-green-800 mb-2">美農高台</h4>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                旅程的第一站，與鹿野茶葉發展息息相關。至今仍有茶莊，晚上可俯瞰台東市夜景，增添浪漫色彩。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-xl border-t-4 border-green-500 hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg text-green-800 mb-2">初鹿高台</h4>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                以「初鹿牧場」聞名。在轉型初期是極重要的茶菁來源地，曾供應總原料的50%。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-xl border-t-4 border-green-400 hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg text-green-800 mb-2">鹿野高台</h4>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                核心茶區，現今熱氣球嘉年華舉辦地。昔日滿佈茶樹，地景變遷見證了產業的興衰。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. History & Crisis */}
                <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm">
                    <div className="flex items-center mb-8">
                        <History className="text-orange-600 mr-3" size={28}/>
                        <h3 className="text-2xl font-bold text-stone-800">茶業變革三部曲</h3>
                    </div>
                    
                    <div className="relative border-l-2 border-stone-300 ml-3 space-y-12">
                        {/* Phase 1 */}
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-600 border-2 border-white"></div>
                            <h4 className="text-xl font-bold text-red-800 mb-2">1960s：紅茶時代的榮景與殞落</h4>
                            <p className="text-stone-600 mb-3">
                                台東曾是紅茶出口基地，採「農工分立」模式。後因<strong>國際競爭（肯亞崛起）</strong>與<strong>匯率升值</strong>，外銷崩盤。加上鳳梨罐頭與糖廠倒閉，經濟陷入困境。
                            </p>
                        </div>

                        {/* Phase 2 */}
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-600 border-2 border-white"></div>
                            <h4 className="text-xl font-bold text-green-800 mb-2">1980s：轉型清茶與關鍵人物</h4>
                            <div className="space-y-3">
                                <p className="text-stone-600 text-sm">為了生存，台東轉向種植烏龍茶（清茶）。關鍵突破包含：</p>
                                <ul className="list-disc list-inside text-sm text-stone-600 pl-2">
                                    <li><strong>黃石定：</strong>利用「壓條法」在初鹿牧場繁殖茶苗，解決苗源問題。</li>
                                    <li><strong>陳德意：</strong>以「90萬天價租金」承租茶園，引爆農民改種信心。</li>
                                    <li><strong>李登輝：</strong>代蔣經國總統命名為「福鹿茶」。</li>
                                </ul>
                                <p className="text-stone-600 text-sm mt-2">
                                    然而好景不常，90年代中部<strong>高山茶</strong>興起，低海拔的台東茶再次失去競爭力。
                                </p>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-600 border-2 border-white"></div>
                            <h4 className="text-xl font-bold text-orange-800 mb-2">2008年：絕境逢生，紅烏龍誕生</h4>
                            <p className="text-stone-600 mb-3">
                                蜜香紅茶雖成功但被花蓮瑞穗搶得先機。在無路可走之下，台東茶改場與茶農融合<strong>紅茶重揉捻</strong>與<strong>烏龍重烘焙</strong>工藝，終於研發出紅烏龍。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. The Innovation: Red Oolong */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-orange-50 rounded-xl p-8 border border-orange-100">
                        <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
                            <FlaskConical className="mr-2"/> 創新工藝密碼
                        </h3>
                        <p className="text-stone-700 mb-4 leading-relaxed">
                            最初靈感來自武夷岩茶，但直接複製口感生澀。
                            <br/><br/>
                            <strong>突破點：</strong>大膽引入<strong>紅茶的重度揉捻</strong>工藝。這打破了傳統框架，使得茶湯滋味滑順醇厚，兼具烏龍的喉韻與紅茶的甜潤。
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-white text-orange-800 text-sm font-bold rounded shadow-sm">重發酵</span>
                            <span className="px-3 py-1 bg-white text-orange-800 text-sm font-bold rounded shadow-sm">重烘焙</span>
                            <span className="px-3 py-1 bg-white text-orange-800 text-sm font-bold rounded shadow-sm">重揉捻</span>
                        </div>
                    </div>

                    <div className="bg-stone-800 text-stone-200 rounded-xl p-8 border border-stone-700">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <Star className="mr-2 text-yellow-500"/> 獨特風味
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Droplets className="mr-3 text-orange-400 flex-shrink-0 mt-1"/>
                                <div>
                                    <span className="font-bold text-orange-200 block">茶湯</span>
                                    琥珀色澤，具紅茶般的醇厚滋味。
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Wind className="mr-3 text-orange-400 flex-shrink-0 mt-1"/>
                                <div>
                                    <span className="font-bold text-orange-200 block">風味</span>
                                    保有烏龍茶的烘焙韻味與甘醇喉韻。
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Leaf className="mr-3 text-orange-400 flex-shrink-0 mt-1"/>
                                <div>
                                    <span className="font-bold text-orange-200 block">香氣</span>
                                    帶有熟果香或蜜香（夏季製作時尤為明顯）。
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 4. Challenges: Comparison Table */}
                <div>
                    <div className="flex items-center mb-6">
                        <AlertTriangle className="text-red-600 mr-3" size={28}/>
                        <h3 className="text-2xl font-bold text-stone-800">當前挑戰：原產地 vs 仿製品</h3>
                    </div>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-stone-200">
                        <table className="min-w-full divide-y divide-stone-200">
                            <thead className="bg-stone-100">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600 uppercase">挑戰面向</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-orange-700 bg-orange-50 uppercase">台東紅烏龍 (原產地)</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-500 uppercase">其他產區仿製品</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                                <tr>
                                    <td className="px-6 py-4 font-bold text-stone-700">生產成本</td>
                                    <td className="px-6 py-4 bg-orange-50/30 text-stone-600">原料較少，產量有限，成本較高</td>
                                    <td className="px-6 py-4 text-stone-600">擁大規模茶園，供應充足，成本較低</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-stone-700">市場競爭</td>
                                    <td className="px-6 py-4 bg-orange-50/30 text-stone-600">需維持高品質與獨特性以區隔</td>
                                    <td className="px-6 py-4 text-stone-600">利用規模經濟與價格優勢競爭</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-stone-700">品牌定位</td>
                                    <td className="px-6 py-4 bg-orange-50/30 text-stone-600">擁有創始正統性與獨特風土價值</td>
                                    <td className="px-6 py-4 text-stone-600">可能稀釋「紅烏龍」品牌價值</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-stone-500 text-sm italic text-right">
                        *創新非終點，台東茶產業仍需持續精進以應對挑戰。
                    </p>
                </div>

                {/* 5. Conclusion */}
                <div className="bg-stone-100 p-8 rounded-xl border-l-4 border-orange-600">
                    <h3 className="text-xl font-bold text-stone-800 mb-3">結論：展現台灣農業的強大韌性</h3>
                    <p className="text-stone-700 leading-relaxed">
                        紅烏龍的價值，遠不僅止於杯中的琥珀色茶湯，更在於其背後厚重的歷史意義。
                        從鳳梨、甘蔗到紅茶的崩盤，再到清茶的挫折，每一次的失敗都成為了養分。
                        最終，台東茶人沒有選擇放棄，而是走出了屬於自己的路。紅烏龍，是台灣在地農業面對全球化競爭與內部轉型壓力時，展現卓越智慧的最佳典範。
                    </p>
                </div>

            </div>
        </div>
    );
}
