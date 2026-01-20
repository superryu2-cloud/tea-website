// Auto-extracted from src/App.jsx

import React from 'react';
import { BookOpen, Coffee, Droplets, History, Info, Map, Sprout, Wind } from 'lucide-react';

export default function WenshanPouchongContent() {
    return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-900 rounded-2xl overflow-hidden mb-12 p-8 md:p-16 border border-emerald-100">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 md:w-3/4">
                    <div className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm font-bold rounded mb-4">輕發酵｜清香</div>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 font-sans">文山包種茶</h2>
                    <p className="text-xl text-emerald-800 leading-relaxed font-light mb-6">
                        「北包種，南烏龍」。<br />
                        台灣最講究「香氣」的茶類。外觀呈條索狀，色澤翠綠，湯色蜜綠金黃，香氣清揚幽雅，宛如置身蘭花谷。
                    </p>
                </div>
            </div>

            <div className="space-y-16">
                {/* 特色 */}
                <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <Wind className="mr-3 text-emerald-600" /> 特色
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-emerald-50 p-6 rounded-xl border-t-4 border-emerald-500 shadow-sm">
                            <h4 className="font-bold text-lg text-stone-800 mb-2 flex items-center"><Wind className="mr-2" /> 香氣特色</h4>
                            <p className="text-sm text-stone-600">
                                帶有明顯的天然花香，依品種不同可能呈現蘭花、桂花或野薑花香。香氣越清揚、越持久，品質越佳。
                            </p>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-xl border-t-4 border-teal-500 shadow-sm">
                            <h4 className="font-bold text-lg text-stone-800 mb-2 flex items-center"><Droplets className="mr-2" /> 茶湯滋味</h4>
                            <p className="text-sm text-stone-600">
                                蜜綠顯黃，清澈明亮。入口滋味甘潤、不苦不澀，活性強，講究「香、濃、醇、韻、美」。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 產區 */}
                <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                        <Map className="mr-3 text-emerald-600" /> 產區
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <Map className="mr-2 text-stone-500 mt-1" size={18} />
                            <div>
                                <span className="font-bold text-stone-800 block">核心產區</span>
                                <span className="text-stone-600">新北市坪林區（最大產區）、石碇區、深坑區、南港區。</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Sprout className="mr-2 text-stone-500 mt-1" size={18} />
                            <div>
                                <span className="font-bold text-stone-800 block">主要品種</span>
                                <span className="text-stone-600">青心烏龍（品質最佳）、台茶12號（金萱）、台茶13號（翠玉）。</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 歷史 */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                            <BookOpen className="mr-3 text-emerald-600" /> 為什麼叫「包種」？
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            包種茶起源於福建安溪。清道光年間，為了保存茶葉香氣與方便運輸，茶商將製好的茶葉用<strong>方形毛邊紙</strong>包裹，內外各兩層，每包四兩，四包一斤。
                        </p>
                        <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                            <p className="text-emerald-900 font-bold">
                                「包」裝起來的「種」茶 <br />
                                <span className="text-sm font-normal text-emerald-700">這就是包種茶名稱的由來。雖然現在多用真空包裝，但這個充滿歷史感的名字被保留了下來。</span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <History className="mr-3 text-emerald-600" /> 包種茶的發展歷程
                        </h3>
                        <div className="space-y-6 text-stone-700 leading-relaxed">
                            <div>
                                <h4 className="font-bold text-lg text-emerald-800 mb-2">包種茶始祖：魏靜時</h4>
                                <p>
                                    要聊到包種茶，就一定會提到魏靜時，他是台灣於日治時期的重要茶人，對台灣茶貢獻良多，過世後日本昭和天皇頒「白櫻花狀」並稱其為包製種茶元祖及台灣茶業大恩人，後人尊稱其為「包種茶始祖」。
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-emerald-800 mb-2">研發動機：不加花的自然花香</h4>
                                <p>
                                    為何魏靜時會開始研製包種茶呢？在白毫茉莉的故事中，我們知道帶有花香的茶葉深受消費者喜愛，固然茶葉加花是一種做法，但在悉心照料茶樹時還要分神去照顧鮮花，且自然窨製的製茶工法曠日費時，故在花茶成功之餘，茶商茶農們也不斷在思考如何進一步突破，甚至開始思考茶葉能不能夠不加花，但又能夠自帶花香的可能性。
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-emerald-800 mb-2">南港式製法的勝利與傳承</h4>
                                <p>
                                    當時魏靜時的南港式製茶法，除了相對簡單外，成品的花香也絲毫不遜色於花茶，再加上日本人本身較偏好類似綠茶的口感，所以在日本佔領臺灣後，日本人除了積極拓展茶園面積外，在外銷上也持續加強力道，以數據來看，包種茶的銷售量年年升高，足見當時包種茶的熱銷程度。
                                </p>
                                <p className="mt-4">
                                    而為了要維持外銷產品的品質穩定度，日本政府後來選定南港大坑為『包種茶產製研究中心』，且聘請魏靜時擔任講師並持續推廣南港式包種茶，自此之後，完全仿照大陸傳統的製茶方式的思維就漸漸落伍了，台灣的製茶法開始自立門戶，可以說魏靜時研發的『南港式製茶法』，是現今台灣茶各種製茶法的起源了。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 製程 */}
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                            <Droplets className="mr-3 text-emerald-600" /> 製程
                        </h3>
                        <h4 className="font-bold text-lg text-stone-800 mb-4">兩大流派之爭</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <span className="block font-bold text-stone-900 mb-1">文山式製法 (王水錦)</span>
                                <p className="text-sm text-stone-600">用傳統武夷茶的製法加以改良，茶湯泡出來顏色偏深紅，香氣口感較厚重。</p>
                            </div>
                            <div>
                                <span className="block font-bold text-emerald-700 mb-1">南港式製法 (魏靜時)</span>
                                <p className="text-sm text-stone-600">自創方法，茶湯泡出來顏色為綠黃色，香氣自然清香怡人，滋味圓滑甘潤。</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-800 text-stone-200 rounded-xl p-8 relative overflow-hidden">
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-900/30 rounded-full blur-3xl -mr-16 -mb-16"></div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/3 text-center">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-900 border-2 border-emerald-500 mb-4">
                                    <span className="text-3xl font-sans">條</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">獨特外型：條索狀</h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-lg leading-relaxed mb-4">
                                    不同於高山茶或凍頂烏龍的「球型」外觀，包種茶呈現自然的<strong>長條狀（條索狀）</strong>。
                                </p>
                                <div className="bg-stone-700/50 p-4 rounded-lg border border-stone-600">
                                    <h4 className="text-emerald-400 font-bold mb-2">為什麼不揉成球？</h4>
                                    <p className="text-sm text-stone-300">
                                        包種茶屬於輕發酵（8-12%），重點在於展現<strong>「香氣」</strong>。
                                        過度的揉捻（團揉）雖然能增加滋味厚度，但容易擠壓葉片結構，導致清揚的香氣散失。
                                        為了保留那股如花般的清香，製茶師選擇輕揉捻，保留條索外型。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 其他 */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <Info className="mr-3 text-emerald-600" /> 文山包種、南港包種、桂香包種是同一種茶嗎？
                    </h3>
                    <p className="text-lg font-bold text-emerald-800 mb-4">是的，以上這些稱呼都是包種茶的別稱喔！</p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded mr-4 flex-shrink-0">A</div>
                            <div>
                                <h4 className="font-bold text-stone-800">文山包種</h4>
                                <p className="text-stone-600 text-sm mt-1">
                                    稱呼是來自於北部文山地區（現在的大臺北的景美、木柵、深坑、新店、石碇、坪林及烏來一帶），文山地區的茶農認為製造包種茶最好的品種是「青心烏龍」種，當地俗稱「種仔」，而用「種仔」製成的茶，通常適用宣紙包起來販售，故得名文山包種。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded mr-4 flex-shrink-0">B</div>
                            <div>
                                <h4 className="font-bold text-stone-800">南港包種</h4>
                                <p className="text-stone-600 text-sm mt-1">
                                    稱呼是因為當時魏靜時的製茶法是叫做南港式製法，且後來的推廣中心也設定在南港大坑，故得名南港包種。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded mr-4 flex-shrink-0">C</div>
                            <div>
                                <h4 className="font-bold text-stone-800">桂香包種</h4>
                                <p className="text-stone-600 text-sm mt-1">
                                    稱呼是因為包種茶如果有達到一定品質，其成品會帶有類似桂花的香氣，故得名桂香包種。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 沖泡方式 */}
                <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <Coffee className="mr-3 text-emerald-600" /> 沖泡方式
                    </h3>
                    <div className="bg-emerald-50 p-6 rounded-xl border-t-4 border-green-500 shadow-sm">
                        <h4 className="font-bold text-lg text-stone-800 mb-2 flex items-center"><Coffee className="mr-2" /> 沖泡秘訣</h4>
                        <p className="text-sm text-stone-600">
                            <strong>水溫：</strong>90-95°C (不宜過低)<br />
                            <strong>器具：</strong>瓷器或玻璃 (不吸香)<br />
                            <strong>時間：</strong>快沖快倒，避免悶熟。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
