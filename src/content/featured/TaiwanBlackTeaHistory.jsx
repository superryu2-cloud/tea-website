import React from 'react';
import { History, Factory, TrendingUp, TrendingDown, Sprout, Globe, Anchor, Award } from 'lucide-react';

export default function TaiwanBlackTeaHistory() {
    return (
        <section className="max-w-5xl mx-auto px-4 md:px-0 py-12">
            {/* Header / Intro */}
            <div className="bg-stone-900 text-stone-200 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl mb-16">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                <div className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 border border-rose-500/30 rounded-full text-rose-400 text-xs font-bold tracking-[0.2em] mb-6">SPECIAL FEATURE</span>
                    <h3 className="text-3xl md:text-5xl font-black font-serif text-white mb-6 leading-tight">
                        台灣紅茶百年脈絡<br />
                        <span className="text-xl md:text-2xl text-stone-400 font-light mt-4 block">從興盛、沒落到「紅玉」重生的歷史紀實</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-rose-700 to-amber-700 mx-auto rounded-full opacity-80 mb-8" />
                </div>
            </div>

            <div className="space-y-24 relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -ml-0.5 hidden md:block" />

                {/* Phase 1: Origin */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:text-right space-y-4 pt-4">
                        <span className="inline-flex items-center gap-2 text-rose-700 font-bold tracking-widest text-sm uppercase">Phase 01</span>
                        <h4 className="text-2xl font-bold text-stone-900">歷史起源與產銷體系的初步建立</h4>
                        <div className="hidden md:flex justify-end">
                            <div className="p-3 bg-stone-100 rounded-full text-stone-600"><History size={24} /></div>
                        </div>
                    </div>

                    {/* Timeline Dot (Desktop) */}
                    <div className="absolute left-1/2 top-6 w-4 h-4 bg-rose-600 rounded-full border-4 border-white shadow-sm -ml-2 hidden md:block" />

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-4 relative">
                        {/* Mobile Icon */}
                        <div className="md:hidden absolute top-0 left-0 -mt-3 -ml-3 p-2 bg-stone-100 rounded-full border border-stone-200 z-10">
                            <History size={20} className="text-stone-600" />
                        </div>

                        <p className="text-stone-700 leading-loose text-[17px]">
                            在 19 世紀末的東亞地緣政治版圖中，台灣正經歷從清領時期過渡至日治時期的劇烈變動。這一轉型期不僅是政權的交替，更是產業結構變革的關鍵催化劑。從產業史視角分析，政權移轉往往伴隨著經濟邏輯的更迭，促使原本以傳統小農生產為主的茶業，開始轉向更具國際貿易導向的產銷架構。
                        </p>
                        <p className="text-stone-700 leading-loose text-[17px]">
                            回溯 1885 年，時任台灣首任巡撫的劉銘傳雖已初步建立茶業產銷體系，但當時的產業佈局具備顯著的侷限性。該體系以烏龍茶為核心，且規模尚小，缺乏對全球貿易市場的實質影響力。產業格局的根本性翻轉始於 1895 年，隨著《馬關條約》的簽訂，台灣主權割讓予日本，正式開啟殖民時期。在殖民經濟的架構下，台灣茶業開始脫離傳統路徑，轉向具備工業化雛形的生產模式，而台灣紅茶的興起，正是此一歷史轉捩點下的直接產物。
                        </p>
                        <div className="bg-stone-50 p-4 rounded-xl border-l-4 border-stone-400 text-sm md:text-base text-stone-600 italic">
                            隨著統治權力的移轉，台灣茶業的發展重心由早期的萌芽階段轉向具備擴張潛力的商業體系，預示著下一個階段大型企業力量的全面介入。
                        </div>
                    </div>
                </div>

                {/* Phase 2: Mitsui */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                    <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-4 relative">
                        {/* Mobile Icon */}
                        <div className="md:hidden absolute top-0 left-0 -mt-3 -ml-3 p-2 bg-stone-100 rounded-full border border-stone-200 z-10">
                            <Factory size={20} className="text-stone-600" />
                        </div>

                        <p className="text-stone-700 leading-loose text-[17px]">
                            在區域經濟轉型的過程中，大型財閥的介入往往能透過資本優勢重塑產業規模。三井株式會社在台灣北部茶園的早期開發，不僅體現了日本官方在殖民地的戰略意圖，更反映了透過「垂直整合」建立生產高地的意圖。此一階段的戰略核心在於將分散的農業資源整合為標準化的出口動力。
                        </p>
                        <p className="text-stone-700 leading-loose text-[17px]">
                            1909 年，三井株式會社開始深度參與台灣北部的茶園開墾；至 1911 年，三井進一步設立製茶廠，落實自行生產並外銷的營運模式。開發初期，三井仍以烏龍茶為主要產出，然而隨著歐美市場對紅茶的需求劇增，日本政府察覺到全球紅茶市場的巨大商機。基於日本本土氣候僅適宜生產綠茶的地理限制，官方遂決定將氣候適宜的台灣定義為日本帝國紅茶的生產基地的戰略重鎮。此項戰略轉向，成功讓台灣從區域性產地躍升為具備全球化出口能力的產業樞紐。
                        </p>
                        <div className="bg-stone-900 text-stone-300 p-6 rounded-xl mt-4">
                            <h5 className="font-bold text-white mb-2 flex items-center gap-2"><Globe size={18} /> 全球經驗吸收</h5>
                            <p className="text-sm leading-relaxed">
                                1927 年，三井公司派遣技術人員赴「閩、閩東、祁門」及印度、斯里蘭卡考察。這種「後發優勢」策略，讓台灣紅茶迅速建立與國際接軌的技術體系，成功銷往倫敦、紐約。
                            </p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-4 pt-4">
                        <span className="inline-flex items-center gap-2 text-amber-700 font-bold tracking-widest text-sm uppercase">Phase 02</span>
                        <h4 className="text-2xl font-bold text-stone-900">三井株式會社的介入與紅茶產業規模化</h4>
                        <div className="hidden md:flex">
                            <div className="p-3 bg-stone-100 rounded-full text-stone-600"><Factory size={24} /></div>
                        </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-6 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-sm -ml-2 hidden md:block" />
                </div>

                {/* Phase 3: Golden Age */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:text-right space-y-4 pt-4">
                        <span className="inline-flex items-center gap-2 text-rose-700 font-bold tracking-widest text-sm uppercase">Phase 03</span>
                        <h4 className="text-2xl font-bold text-stone-900">三井農林體系的建立與全球行銷巔峰</h4>
                        <div className="hidden md:flex justify-end">
                            <div className="p-3 bg-stone-100 rounded-full text-stone-600"><TrendingUp size={24} /></div>
                        </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-6 w-4 h-4 bg-rose-600 rounded-full border-4 border-white shadow-sm -ml-2 hidden md:block" />

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-4 relative">
                        {/* Mobile Icon */}
                        <div className="md:hidden absolute top-0 left-0 -mt-3 -ml-3 p-2 bg-stone-100 rounded-full border border-stone-200 z-10">
                            <TrendingUp size={20} className="text-stone-600" />
                        </div>

                        <p className="text-stone-700 leading-loose text-[17px]">
                            1930 年代，台灣紅茶產業已演變為一套高度成熟的工業化生產體系。透過高度垂直整合的生產鏈，結合跨國品牌的營銷策略，台灣紅茶創造了史無前例的經濟產值。1936 年，「三井農林株式會社」正式成立，製茶板塊穩居「三井農林之首」。
                        </p>
                        <p className="text-stone-700 leading-loose text-[17px]">
                            當時全台設有七家粗茶廠及一家精製茶廠，每座廠房均配置專屬自營茶園，並引進當時最先進且完備的機械製茶設備。精製廠年產量達 500 萬磅以上，產品由三井物產株式會社統籌外銷，足跡遍及全球。
                        </p>
                        <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                            <h5 className="font-bold text-rose-900 mb-2 flex items-center gap-2"><Award size={18} /> 輝煌時刻 (1940)</h5>
                            <p className="text-rose-800/80 text-sm leading-relaxed">
                                三井旗下「日東紅茶」年銷量達 134 萬磅，散裝紅茶突破 350 萬磅。政府更在各國博覽會設立具濃厚台灣風格的「台灣紅茶館」，行銷成效卓著。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Phase 4: Decline */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                    <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-4 relative">
                        {/* Mobile Icon */}
                        <div className="md:hidden absolute top-0 left-0 -mt-3 -ml-3 p-2 bg-stone-100 rounded-full border border-stone-200 z-10">
                            <TrendingDown size={20} className="text-stone-600" />
                        </div>

                        <p className="text-stone-700 leading-loose text-[17px]">
                            地緣政治衝突對全球貿易鏈往往具有毀滅性的影響。太平洋戰爭的爆發，切斷了台灣紅茶的外銷鏈結。戰爭期間，僅能侷限於日圓區市場，且因糧食危機，大量茶園改種糧食作物，導致產業驟跌。
                        </p>
                        <p className="text-stone-700 leading-loose text-[17px]">
                            戰後 1970 年代，台灣經濟起飛帶來的勞動力成本上升與台幣升值，使勞力密集的紅茶產業喪失價格競爭力，市場流向印度、斯里蘭卡。內需市場又因閩南烏龍茶文化影響，使紅茶面臨「外銷無利、內銷無市」的結構性困局，進入長達數十年的低潮期。
                        </p>
                    </div>

                    <div className="order-1 md:order-2 space-y-4 pt-4">
                        <span className="inline-flex items-center gap-2 text-stone-500 font-bold tracking-widest text-sm uppercase">Phase 04</span>
                        <h4 className="text-2xl font-bold text-stone-900">戰爭衝擊與戰後初期的市場沈寂</h4>
                        <div className="hidden md:flex">
                            <div className="p-3 bg-stone-100 rounded-full text-stone-600"><TrendingDown size={24} /></div>
                        </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-6 w-4 h-4 bg-stone-400 rounded-full border-4 border-white shadow-sm -ml-2 hidden md:block" />
                </div>

                {/* Phase 5: Rebirth (Ruby) */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:text-right space-y-4 pt-4">
                        <span className="inline-flex items-center gap-2 text-emerald-700 font-bold tracking-widest text-sm uppercase">Phase 05</span>
                        <h4 className="text-2xl font-bold text-stone-900">台茶 18 號「紅玉」的問世與當代重生</h4>
                        <div className="hidden md:flex justify-end">
                            <div className="p-3 bg-stone-100 rounded-full text-stone-600"><Sprout size={24} /></div>
                        </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-6 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-sm -ml-2 hidden md:block" />

                    <div className="bg-emerald-50/50 p-8 rounded-2xl shadow-sm border border-emerald-100 space-y-6 relative hover:bg-emerald-50 transition-colors duration-500">
                        {/* Mobile Icon */}
                        <div className="md:hidden absolute top-0 left-0 -mt-3 -ml-3 p-2 bg-stone-100 rounded-full border border-stone-200 z-10">
                            <Sprout size={20} className="text-stone-600" />
                        </div>

                        <p className="text-stone-700 leading-loose text-[17px]">
                            就在產業面臨被邊緣化的危機時，農業科研領域的品種突破，成為了推動台灣紅茶重新定義市場定位的關鍵轉折。
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1 space-y-4">
                                <h5 className="font-bold text-emerald-900 text-xl">1999 年：紅玉傳奇</h5>
                                <p className="text-stone-700 leading-loose text-[17px]">
                                    茶葉改良場正式發布「台茶 18 號：紅玉」。其育種譜系深具獨特性，係由「緬甸大葉種」與「台灣原生種山茶」經長年選育而成。其風味表現被業界推崇為具備「霸道的濃度滋味」與「濃郁的肉桂香氣」，這種極致的感官體驗正源於其父、母本「雙野性的組合」。
                                </p>
                            </div>
                        </div>
                        <p className="text-stone-700 leading-loose text-[17px]">
                            紅玉問世後立刻引發市場強烈迴響，成功帶動產業鏈的投資意願，使台灣紅茶重新煥發生機。這段歷史不僅是產業興替的紀錄，更體現了台灣紅茶從全球通用商品走向特色精緻產業的轉型歷程。
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-center text-xs text-stone-400 mt-16 font-mono">
                NotebookLM 提供的資訊未必正確，請查證回覆內容。
            </p>
        </section>
    );
}
