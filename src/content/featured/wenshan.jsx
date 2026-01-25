import React from 'react';
import { BookOpen, Coffee, Droplets, History, Info, Map, Sprout, Wind, Flower, Leaf, BadgeCheck } from 'lucide-react';

export default function WenshanPouchongContent() {
    return (
        <div className="animate-fadeIn space-y-12">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50 text-emerald-900 rounded-3xl overflow-hidden p-8 md:p-16 border border-emerald-100 shadow-xl shadow-emerald-100/50">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100/30 to-emerald-50/30 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-emerald-100 text-emerald-800 text-base font-bold shadow-sm backdrop-blur-sm mb-6">
                        <Leaf size={16} className="text-emerald-600" />
                        <span className="tracking-widest">輕發酵｜清香</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-900 leading-tight mb-8">
                        文山包種茶
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
                        「北包種，南烏龍」。<br className="md:hidden" />台灣最講究「香氣」的茶類。<br />
                        <span className="text-base md:text-lg mt-2 block opacity-80">
                            外觀呈條索狀，色澤翠綠，湯色蜜綠金黃，香氣清揚幽雅，宛如置身蘭花谷。
                        </span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                {/* Visual Feature: Tea Leaves Image */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 group relative h-64 md:h-80">
                    <img
                        src="/images/wenshan_pouchong_leaves.png"
                        alt="文山包種茶條索狀外觀"
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent" />
                    <div className="absolute bottom-6 left-8 text-white">
                        <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                            <Flower className="text-emerald-300" /> 宛如置身蘭花谷
                        </h3>
                        <p className="text-emerald-100 opacity-90">色澤翠綠，湯色蜜綠金黃，香氣清揚幽雅</p>
                    </div>
                </div>

                {/* 特色 */}
                <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Wind size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">特色與風味</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-emerald-50/50 to-white p-6 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors">
                            <h4 className="font-bold text-xl text-stone-800 mb-3 flex items-center gap-2">
                                <span className="p-1.5 bg-emerald-100 rounded-lg text-emerald-700"><Wind size={18} /></span>
                                香氣特色
                            </h4>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                帶有明顯的天然花香，依品種不同可能呈現<span className="font-bold text-emerald-700">蘭花、桂花或野薑花香</span>。香氣越清揚、越持久，品質越佳。
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-teal-50/50 to-white p-6 rounded-2xl border border-teal-100 hover:border-teal-300 transition-colors">
                            <h4 className="font-bold text-xl text-stone-800 mb-3 flex items-center gap-2">
                                <span className="p-1.5 bg-teal-100 rounded-lg text-teal-700"><Droplets size={18} /></span>
                                茶湯滋味
                            </h4>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                <span className="font-bold text-teal-700">蜜綠顯黃，清澈明亮</span>。入口滋味甘潤、不苦不澀，活性強，講究「香、濃、醇、韻、美」。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 產區 */}
                <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
                        <div className="p-3 bg-stone-100 text-stone-600 rounded-xl">
                            <Map size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">產區分佈</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="p-2 bg-stone-100 rounded-full text-stone-500"><Map size={20} /></div>
                            </div>
                            <div>
                                <span className="font-bold text-lg text-stone-900 block mb-1">核心產區</span>
                                <span className="text-stone-600 leading-relaxed">新北市坪林區（最大產區）、石碇區、深坑區、南港區。</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="p-2 bg-stone-100 rounded-full text-stone-500"><Sprout size={20} /></div>
                            </div>
                            <div>
                                <span className="font-bold text-lg text-stone-900 block mb-1">主要品種</span>
                                <span className="text-stone-600 leading-relaxed">青心烏龍（品質最佳）、台茶12號（金萱）、台茶13號（翠玉）。</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 歷史 */}
                <section className="space-y-6">
                    <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                            <BookOpen className="mr-3 text-amber-600" /> 為什麼叫「包種」？
                        </h3>
                        <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                            包種茶起源於福建安溪。清道光年間，為了保存茶葉香氣與方便運輸，茶商將製好的茶葉用<strong>方形毛邊紙</strong>包裹，內外各兩層，每包四兩，四包一斤。
                        </p>
                        <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm flex items-start gap-4">
                            <BadgeCheck className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <p className="text-amber-900 font-bold text-lg mb-1">
                                    「包」裝起來的「種」茶
                                </p>
                                <p className="text-stone-600 text-base">
                                    這就是包種茶名稱的由來。雖然現在多用真空包裝，但這個充滿歷史感的名字被保留了下來。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-stone-800 mb-8 flex items-center">
                            <History className="mr-3 text-emerald-600" /> 包種茶的發展歷程
                        </h3>
                        <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm z-10">1</div>
                                <h4 className="font-bold text-xl text-emerald-900 mb-2">包種茶始祖：魏靜時</h4>
                                <p className="text-stone-700 leading-relaxed">
                                    要聊到包種茶，就一定會提到魏靜時，他是台灣於日治時期的重要茶人，對台灣茶貢獻良多，過世後日本昭和天皇頒「白櫻花狀」並稱其為包製種茶元祖及台灣茶業大恩人，後人尊稱其為「包種茶始祖」。
                                </p>
                            </div>
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm z-10">2</div>
                                <h4 className="font-bold text-xl text-emerald-900 mb-2">研發動機：不加花的自然花香</h4>
                                <p className="text-stone-700 leading-relaxed">
                                    為何魏靜時會開始研製包種茶呢？在白毫茉莉的故事中，我們知道帶有花香的茶葉深受消費者喜愛，固然茶葉加花是一種做法，但在悉心照料茶樹時還要分神去照顧鮮花，且自然窨製的製茶工法曠日費時，故在花茶成功之餘，茶商茶農們也不斷在思考如何進一步突破，甚至開始思考茶葉能不能夠不加花，但又能夠自帶花香的可能性。
                                </p>
                            </div>
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm z-10">3</div>
                                <h4 className="font-bold text-xl text-emerald-900 mb-2">南港式製法的勝利與傳承</h4>
                                <p className="text-stone-700 leading-relaxed mb-4">
                                    當時魏靜時的南港式製茶法，除了相對簡單外，成品的花香也絲毫不遜色於花茶，再加上日本人本身較偏好類似綠茶的口感，所以在日本佔領臺灣後，日本人除了積極拓展茶園面積外，在外銷上也持續加強力道，以數據來看，包種茶的銷售量年年升高，足見當時包種茶的熱銷程度。
                                </p>
                                <p className="text-stone-700 leading-relaxed p-4 bg-stone-50 rounded-xl">
                                    而為了要維持外銷產品的品質穩定度，日本政府後來選定南港大坑為『包種茶產製研究中心』，且聘請魏靜時擔任講師並持續推廣南港式包種茶，自此之後，完全仿照大陸傳統的製茶方式的思維就漸漸落伍了，台灣的製茶法開始自立門戶，可以說魏靜時研發的『南港式製茶法』，是現今台灣茶各種製茶法的起源了。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 製程 */}
                <section className="space-y-8">
                    <div className="bg-stone-900 text-stone-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-emerald-900/40 rounded-full blur-3xl -mr-32 -mb-32"></div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 text-center">
                                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 border-4 border-emerald-500/30 mb-6 shadow-lg shadow-emerald-500/20">
                                    <span className="text-5xl font-serif text-emerald-100">條</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">獨特外型：條索狀</h3>
                                <p className="text-emerald-400 font-medium">捲曲成條，綠意盎然</p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-xl leading-relaxed mb-8 font-light text-stone-300">
                                    不同於高山茶或凍頂烏龍的「球型」外觀，包種茶呈現自然的<strong className="text-white font-bold mx-1">長條狀（條索狀）</strong>。
                                </p>
                                <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                    <h4 className="text-emerald-300 font-bold mb-3 text-lg flex items-center gap-2">
                                        <Info size={18} /> 為什麼不揉成球？
                                    </h4>
                                    <p className="text-stone-300 leading-relaxed">
                                        包種茶屬於輕發酵（8-12%），重點在於展現<strong>「香氣」</strong>。
                                        過度的揉捻（團揉）雖然能增加滋味厚度，但容易擠壓葉片結構，導致清揚的香氣散失。
                                        為了保留那股如花般的清香，製茶師選擇輕揉捻，保留條索外型。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Droplets className="mr-3 text-emerald-600" /> 製程流派之爭
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
                                <span className="block font-bold text-xl text-stone-900 mb-3">文山式製法 (王水錦)</span>
                                <p className="text-stone-700 leading-relaxed">用傳統武夷茶的製法加以改良，茶湯泡出來顏色偏深紅，香氣口感較厚重。</p>
                            </div>
                            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 bg-emerald-600 text-white text-xs font-bold rounded-bl-lg">主流</div>
                                <span className="block font-bold text-xl text-emerald-800 mb-3">南港式製法 (魏靜時)</span>
                                <p className="text-stone-700 leading-relaxed">自創方法，茶湯泡出來顏色為綠黃色，香氣自然清香怡人，滋味圓滑甘潤。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 其他 */}
                <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-8 flex items-center">
                        <Info className="mr-3 text-emerald-600" /> 名稱大解密：是同一種茶嗎？
                    </h3>
                    <div className="bg-stone-50 p-4 rounded-xl mb-8 text-center border-l-4 border-emerald-500">
                        <p className="text-lg font-bold text-emerald-800">
                            是的，文山包種、南港包種、桂香包種，以上這些稱呼都是包種茶的別稱喔！
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex items-start gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center flex-shrink-0 text-xl">A</div>
                            <div>
                                <h4 className="font-bold text-lg text-stone-900 mb-1">文山包種</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    稱呼是來自於北部文山地區（現在的大臺北的景美、木柵、深坑、新店、石碇、坪林及烏來一帶），文山地區的茶農認為製造包種茶最好的品種是「青心烏龍」種，當地俗稱「種仔」，而用「種仔」製成的茶，通常適用宣紙包起來販售，故得名文山包種。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center flex-shrink-0 text-xl">B</div>
                            <div>
                                <h4 className="font-bold text-lg text-stone-900 mb-1">南港包種</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    稱呼是因為當時魏靜時的製茶法是叫做南港式製法，且後來的推廣中心也設定在南港大坑，故得名南港包種。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center flex-shrink-0 text-xl">C</div>
                            <div>
                                <h4 className="font-bold text-lg text-stone-900 mb-1">桂香包種</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    稱呼是因為包種茶如果有達到一定品質，其成品會帶有類似桂花的香氣，故得名桂香包種。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 沖泡方式 */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                            <Coffee size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">最佳沖泡指南</h3>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
                        <div className="hidden md:block">
                            <Coffee size={64} className="text-emerald-200" />
                        </div>
                        <div className="flex-1 w-full">
                            <h4 className="font-bold text-xl text-emerald-900 mb-4">掌握「快沖快倒」的秘訣</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="bg-white/60 p-4 rounded-xl">
                                    <span className="block text-emerald-600 font-bold text-sm mb-1 uppercase tracking-wider">Temperature</span>
                                    <span className="block text-2xl font-black text-stone-800">90-95°C</span>
                                    <span className="text-xs text-stone-500">水溫不宜過低</span>
                                </div>
                                <div className="bg-white/60 p-4 rounded-xl">
                                    <span className="block text-emerald-600 font-bold text-sm mb-1 uppercase tracking-wider">Vessel</span>
                                    <span className="block text-2xl font-black text-stone-800">瓷器 / 玻璃</span>
                                    <span className="text-xs text-stone-500">不吸香材質最佳</span>
                                </div>
                                <div className="bg-white/60 p-4 rounded-xl">
                                    <span className="block text-emerald-600 font-bold text-sm mb-1 uppercase tracking-wider">Technique</span>
                                    <span className="block text-2xl font-black text-stone-800">快沖快倒</span>
                                    <span className="text-xs text-stone-500">避免悶熟影響香氣</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
