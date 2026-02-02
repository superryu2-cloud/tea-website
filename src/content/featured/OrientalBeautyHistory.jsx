import React from 'react';
import {
    History,
    MapPin,
    HelpCircle,
    Flower,
    Scroll,
    Clock,
    Compass,
    Sparkles,
    Users
} from 'lucide-react';

export default function OrientalBeautyHistory() {
    return (
        <div className="max-w-5xl mx-auto space-y-24 pb-24 animate-fadeIn">
            {/* Header */}
            <div className="relative py-16 px-8 md:px-0 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-amber-900/30" />
                <span className="inline-block py-1 px-3 border border-amber-900/30 rounded-full text-amber-900 text-xs font-bold tracking-[0.2em] mb-4">THE PAST LIFE</span>
                <h3 className="text-4xl md:text-5xl font-black text-stone-900 font-serif mb-6">東方美人茶的前世<br /><span className="text-2xl md:text-3xl text-stone-500 font-light mt-2 block">歷史與名稱演變</span></h3>
                <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
                    從 1810 年柯朝帶種，到現代的行銷傳奇。九個階段，見證台灣茶的黃金時代。
                </p>
            </div>

            {/* Section 1: Origin & The 9 Names */}
            <section className="bg-[#FDFBF7] rounded-[3rem] p-8 md:p-12 border border-stone-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="max-w-4xl mx-auto">
                    {/* Origin Story */}
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mb-12 flex gap-4 items-start">
                        <div className="bg-amber-100 p-3 rounded-full shrink-0">
                            <History className="text-amber-800" size={24} />
                        </div>
                        <div>
                            <h5 className="font-bold text-stone-900 text-lg mb-2">起源：1810 柯朝帶種</h5>
                            <p className="text-stone-700 text-sm leading-relaxed">
                                台灣的小葉種茶可追溯至 1810 年前後。由一位名為<span className="font-bold">柯朝</span>的人，從福建武夷山攜帶茶樹「種子」（非茶苗）來到當時的櫛魚坑（今新北市瑞芳區），自此開啟了台灣烏龍茶的發展史。
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-10 border-b border-amber-200 pb-4">
                        <span className="text-4xl font-serif text-amber-200 font-bold">Evolution</span>
                        <h4 className="text-2xl font-bold text-stone-900">名稱演變的九個階段</h4>
                    </div>

                    {/* The 9 Stages - Vertical Timeline */}
                    <div className="space-y-10 relative pl-4">
                        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-stone-200" />

                        {/* 1. Ban Zhuang */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">1</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm group-hover:shadow-md transition-shadow">
                                <h5 className="font-bold text-stone-900 text-lg mb-2">番庄茶</h5>
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    <span className="font-bold text-amber-700">台灣茶外銷初期的統稱。</span>
                                    <br />命名源於在外銷的商行（番庄）或大稻埕等集散地進行精製包裝。
                                    <br />1869年，英商杜德 (John Dodd) 與買辦李春生 (Li Chun-sheng) 成功將其銷往美國，價格翻漲數倍，開啟黃金時代。
                                </p>
                            </div>
                        </div>

                        {/* 2. High Grade */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">2</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                                <h5 className="font-bold text-stone-900 text-lg mb-2">高級烏龍</h5>
                                <p className="text-sm text-stone-600">
                                    隨著市場需求提升，品質更佳的茶葉應運而生。經過撿梗、剔除老葉等精製工序的茶。
                                </p>
                            </div>
                        </div>

                        {/* 3. Baihao */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">3</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                                <h5 className="font-bold text-stone-900 text-lg mb-2">白毫烏龍</h5>
                                <p className="text-sm text-stone-600">
                                    比高級烏龍等級更高。外觀帶有顯著的白色茶芽（白毫），成為品質的象徵。
                                </p>
                            </div>
                        </div>

                        {/* 4. White Monkey */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">4</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                                <h5 className="font-bold text-stone-900 text-lg mb-2">白毛猴</h5>
                                <p className="text-sm text-stone-600">
                                    使用「白毛猴」茶樹品種製作。白毫極多且不易產生菁味，早期外銷市場的主力。
                                </p>
                            </div>
                        </div>

                        {/* 5. Pong Fong */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">5</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm bg-gradient-to-r from-white to-amber-50/30">
                                <h5 className="font-bold text-stone-900 text-lg mb-3">膨風茶</h5>
                                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                                    <strong className="block text-stone-800 text-sm mb-2 flex items-center gap-2"><Clock size={16} /> 1930 霧社事件與石塚英藏</strong>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        時任台灣總督石塚英藏 (いしづか えいぞう) 因霧社事件將被調職。他極愛白毫烏龍，離台前大量收購導致台北茶價飆漲。
                                        <br />新竹、苗栗茶商運茶至台北賣得高價，回鄉分享時被鄉親認為是「膨風」（吹牛），此名由此傳開。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 6. Half Head Green */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">6</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                                <h5 className="font-bold text-stone-900 text-lg mb-2">半頭青</h5>
                                <p className="text-sm text-stone-600">
                                    價格高漲後，茶農嘗試在春、冬製作。因這兩季氣候導致成品易帶綠色葉片，品質略遜一籌。
                                </p>
                            </div>
                        </div>

                        {/* 7. 3/5 Color */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">7</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                                <h5 className="font-bold text-stone-900 text-lg mb-2">三色茶／五色茶</h5>
                                <p className="text-sm text-stone-600">
                                    因其茶乾呈現<span className="font-bold text-stone-800">紅、黃、白、褐、綠</span>等多樣色彩而得名。
                                </p>
                            </div>
                        </div>

                        {/* 8. Champagne */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">8</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                                <h5 className="font-bold text-stone-900 text-lg mb-2">香檳烏龍</h5>
                                <p className="text-sm text-stone-600">
                                    隨著經濟起飛與西式飲品普及。因金黃透亮的茶湯色澤與香檳酒極為相似，故得此雅名。
                                </p>
                            </div>
                        </div>

                        {/* 9. Oriental Beauty */}
                        <div className="relative pl-12 group">
                            <span className="absolute left-4 top-0 w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-full font-serif font-bold text-xs ring-4 ring-[#FDFBF7] z-10 group-hover:bg-amber-600 transition-colors">9</span>
                            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm border-l-4 border-l-amber-500">
                                <h5 className="font-bold text-amber-800 text-lg mb-2">東方美人茶</h5>
                                <p className="text-sm text-stone-600">
                                    在茶葉市場一度沒落後，為重新推廣此茶，而創造出的行銷名稱。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Legend & Mysteries - The Queen's Story */}
            <section className="bg-white rounded-[3rem] p-8 md:p-12 border border-stone-200 shadow-xl overflow-hidden relative">
                <div className="flex items-center gap-4 mb-12 relative z-10">
                    <div className="bg-stone-100 p-3 rounded-full">
                        <Sparkles size={28} className="text-amber-500" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-stone-900">傳奇與謎團：東方美人的誕生</h4>
                        <p className="text-stone-500 text-sm">從皇室傳說到鄉野推論</p>
                    </div>
                </div>

                {/* The Queen Legend - Hero Layout */}
                <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-amber-200 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <img
                            src="/images/featured/orientalbeauty/victoria_ghibli.png"
                            className="relative rounded-2xl shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-700 w-full object-cover aspect-[4/3] border-4 border-white"
                            alt="Legend of Queen Victoria"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-stone-100 text-center transform rotate-3 z-20">
                            <span className="block text-amber-500 font-serif font-black text-3xl">19th</span>
                            <span className="text-xs text-stone-400 uppercase tracking-widest">Century</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 bg-amber-50 rounded-full text-amber-800 text-xs font-bold mb-2 border border-amber-100">
                            THE FAMOUS LEGEND
                        </div>
                        <h5 className="text-3xl font-serif font-bold text-stone-900 leading-tight">
                            英國女王的驚嘆<br /><span className="text-amber-600">"Oriental Beauty"</span>
                        </h5>
                        <p className="text-stone-600 leading-relaxed text-lg">
                            相傳百年前，英國商人將此茶獻給<span className="font-bold text-stone-900">維多利亞女王 (Queen Victoria)</span>。
                            <br />女王見其茶葉外觀如花朵般斑斕，沖泡後在水晶杯中翩翩起舞，品之甘潤香醇，猶如東方著名的美女，故賜名「東方美人」。
                        </p>
                        <div className="p-4 bg-stone-50 border-l-4 border-amber-300 rounded-r-xl italic text-stone-600 text-sm">
                            這也是為何此茶在外銷時期被稱為 <span className="font-bold">Champagne Oolong (香檳烏龍)</span> 的浪漫起源之一。
                        </div>
                    </div>
                </div>

                {/* Other Theories - Grid Layout */}
                <div className="grid md:grid-cols-3 gap-6 border-t border-stone-100 pt-12">
                    <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 opacity-70 hover:opacity-100 transition-opacity">
                        <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2"><HelpCircle size={16} /> 2. 吳振鐸 / 蔣經國說</h5>
                        <p className="text-sm text-stone-600 leading-relaxed">
                            藍老師存疑。若吳老師所命應會提及；蔣經國先生則與松柏長青茶命名背景不符，缺乏根據。
                        </p>
                    </div>

                    <div className="bg-amber-50 p-6 md:col-span-2 rounded-2xl border border-amber-200 shadow-sm ring-2 ring-amber-100 flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1">
                            <h5 className="font-bold text-amber-900 mb-3 flex items-center gap-2"><Users size={16} /> 3. 新竹縣長秘書說</h5>
                            <div className="text-xs font-bold text-amber-600 mb-2 uppercase tracking-wide">Most Logical Deduction</div>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                當時新竹縣長陳進興，其秘書（曾從事化妝品業）籌辦活動時，<span className="font-bold">結合對女性市場的理解</span>，取了此富有吸引力的名字。這解釋了為何此名能迅速在商業上成功。
                            </p>
                        </div>
                        <div className="shrink-0 bg-white p-3 rounded-full shadow-inner">
                            <span className="text-4xl">💄</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Unique Terroir (Latitude) */}
            <section className="relative h-[500px] rounded-[3rem] overflow-hidden group">
                <img src="/images/featured/orientalbeauty/map_ghibli.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Map" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-2xl px-4">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-6 border border-white/20">
                        <Compass size={14} /> GEOGRAPHY
                    </div>
                    <h4 className="text-3xl md:text-4xl font-serif font-bold mb-6">產區的獨特性：緯度之差</h4>
                    <p className="text-base md:text-lg leading-relaxed opacity-90 mb-8">
                        中國福建大田縣雖引進台灣品種與製茶師，卻始終無法複製「涎仔香」。核心原因在於<span className="font-bold text-amber-300">緯度差異</span>。
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <span className="block text-xs uppercase text-white/60 mb-1">Taiwan (Original)</span>
                            <span className="font-bold text-xl">北緯 24°</span>
                            <span className="block text-sm text-white/80">桃竹苗產區</span>
                        </div>
                        <div className="bg-red-900/40 backdrop-blur-sm p-4 rounded-xl border border-red-200/20">
                            <span className="block text-xs uppercase text-red-200/60 mb-1">Fujian (Copy)</span>
                            <span className="font-bold text-xl">北緯 25°+</span>
                            <span className="block text-sm text-red-100/80">大田縣</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Quote */}
            <div className="text-center py-12 px-8">
                <Flower size={24} className="mx-auto text-amber-300/50 mb-4" />
                <p className="font-serif text-lg text-stone-400 italic">
                    "緯度之差，亦是風味之別。"
                </p>
            </div>
        </div>
    );
}
