import React from 'react';
import { Bot, Users, Mountain, History, Feather, Scroll } from 'lucide-react';

export default function OolongNameStory() {
    return (
        <div className="space-y-16">
            {/* Header */}
            <div className="text-center space-y-6">
                <h3 className="text-4xl md:text-5xl font-black text-stone-900 font-serif leading-tight">
                    烏龍茶的身世<br />
                    <span className="text-xl md:text-3xl text-stone-500 font-light mt-3 block tracking-wide">其實比你想得還曲折</span>
                </h3>
                <p className="max-w-2xl mx-auto text-lg text-stone-600 leading-relaxed italic">
                    「烏龍茶」不是一種茶，而是一個隨時代變化的名字。
                    它記錄的不只是製茶技術，還有台灣茶從外銷、內銷到精品化的整個轉變。
                </p>
            </div>

            {/* Intro */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-xl shadow-stone-200/50 leading-loose text-lg text-stone-700 relative overflow-hidden">
                <div className="relative z-10">
                    <p className="mb-4">
                        你走進茶行說一句：「老闆，來一斤烏龍茶。」
                        老闆轉身抓茶時，其實心裡已經默默做了一個判斷——
                    </p>
                    <p className="font-bold text-stone-900 text-xl md:text-2xl text-center my-8 bg-stone-100/50 py-4 rounded-xl">
                        你口中的「烏龍茶」，是哪個年代的烏龍？
                    </p>
                    <p>
                        因為「烏龍茶」這三個字，像一個老朋友，
                        大家都認識，卻每個人記憶裡的樣子都不同。
                        這個名字，走過了三個時代。
                    </p>
                </div>
            </div>

            {/* 1. Legend */}
            <section className="group md:grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/20 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700">
                    <img
                        src="/images/teaTalk/oolong-story-legend.png"
                        alt="Black Dragon Legend - 黑龍入水傳說"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 text-white/90 text-sm font-bold tracking-widest uppercase">The Legend</div>
                </div>
                <div className="order-1 md:order-2 pl-4 md:pl-0">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-black text-stone-200 font-serif select-none">01</span>
                        <h4 className="text-3xl font-bold text-stone-900">黑龍入水的傳說</h4>
                    </div>
                    <div className="prose prose-lg prose-stone max-w-none text-stone-600 leading-relaxed">
                        <p className="mb-4">
                            民間流傳一個頗有畫面的故事——最早掌握這種製茶技術的人，叫做「蘇龍」。
                            他皮膚黝黑，鄉里的人乾脆叫他「烏龍」。他做出的茶，自然就被稱為「烏龍茶」。
                        </p>
                        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 my-6 shadow-inner">
                            <p className="font-bold text-stone-900 mb-2">另一種更常被接受的說法，來自茶葉本身：</p>
                            <p>
                                早期條索型的烏龍茶色澤深黑、形狀緊結彎曲，像一條盤伏的黑龍。
                                當熱水沖下，葉片舒展翻動，彷彿黑龍在水中甦醒、游動。
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold items-center text-stone-500">
                                <span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-stone-800 shadow-sm">黑 (Wu)</span>
                                +
                                <span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-stone-800 shadow-sm">龍 (Long)</span>
                                =
                                <span className="px-3 py-1 bg-stone-900 text-white rounded-full shadow-md">Oolong</span>
                            </div>
                        </div>
                        <p>名字，就這樣留下來了。</p>
                    </div>
                </div>
            </section>

            {/* 2. Era 1 - Export */}
            <section className="group md:grid md:grid-cols-2 gap-8 items-center">
                <div className="pl-4 md:pl-0">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-black text-amber-100 font-serif select-none">02</span>
                        <div>
                            <div className="flex items-center gap-2 mb-1 text-amber-600 font-bold uppercase tracking-widest text-xs">
                                <Scroll size={14} />
                                The Export Era
                            </div>
                            <h4 className="text-3xl font-bold text-stone-900">第一個時代：外銷明星</h4>
                        </div>
                    </div>
                    <div className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100/50 backdrop-blur-sm">
                        <h5 className="text-xl font-bold text-amber-900 mb-4">Formosa Oolong Tea</h5>
                        <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                            時間拉回清末。那時台灣茶主要賣到歐美，木箱上印著醒目的字樣。
                            但你可能想不到，那時候被叫作「烏龍茶」的，多半是現在我們說的
                            <span className="font-bold text-amber-800 bg-amber-100 px-1 rounded mx-1">白毫型烏龍茶（東方美人茶系）</span>。
                        </p>
                        <p className="text-stone-600">
                            這種茶發酵重，茶湯橙紅透亮，帶熟果香與蜜甜氣息，
                            正好符合西方人對濃郁紅潤茶湯的喜好。
                        </p>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700">
                    <img
                        src="/images/teaTalk/oolong-story-era1.png"
                        alt="Export Era - 外銷時代"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-60" />
                </div>
            </section>

            {/* 3. Era 2 - Domestic */}
            <section className="group md:grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700">
                    <img
                        src="/images/teaTalk/oolong-story-era2.png"
                        alt="Domestic Era - 內銷時代"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-60" />
                </div>
                <div className="order-1 md:order-2 pl-4 md:pl-0">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-black text-stone-200 font-serif select-none">03</span>
                        <div>
                            <div className="flex items-center gap-2 mb-1 text-stone-500 font-bold uppercase tracking-widest text-xs">
                                <Users size={14} />
                                The Domestic Era
                            </div>
                            <h4 className="text-3xl font-bold text-stone-900">第二個時代：全民日常</h4>
                        </div>
                    </div>
                    <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                        <h5 className="text-xl font-bold text-stone-900 mb-4">焙火香、甘醇厚實</h5>
                        <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                            戰後，茶葉市場轉向內銷。比賽茶制度興起，凍頂山的茶開始打響名號。
                            因為幾乎家家戶戶都喝這種茶，久而久之，「烏龍茶」在大家心中，
                            就變成那種<span className="font-bold text-stone-900 bg-stone-200 px-1 rounded mx-1">半球型、帶焙火香的凍頂風味</span>。
                        </p>
                        <p className="text-stone-600">
                            這時候的「烏龍茶」，已經不是外銷明星，而是餐桌日常。
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Era 3 - Cultivar */}
            <section className="group md:grid md:grid-cols-2 gap-8 items-center">
                <div className="pl-4 md:pl-0">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-black text-emerald-100 font-serif select-none">04</span>
                        <div>
                            <div className="flex items-center gap-2 mb-1 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                                <Mountain size={14} />
                                The Cultivar Era
                            </div>
                            <h4 className="text-3xl font-bold text-stone-900">第三個時代：品種的名字</h4>
                        </div>
                    </div>
                    <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100/50 backdrop-blur-sm">
                        <h5 className="text-xl font-bold text-emerald-900 mb-4">高山茶風潮與簡稱</h5>
                        <p className="text-stone-700 leading-relaxed mb-6 text-lg">
                            九○年代，高山茶風潮來了。製茶師減少焙火，保留花香與清甜。
                            同時，茶改場推出新茶樹品種（金萱、翠玉...）。
                            為了區分，人們乾脆直接叫品種名。於是發生一件有趣的事：
                        </p>
                        <div className="bg-white p-6 rounded-xl border border-emerald-100 text-center font-bold text-emerald-900 shadow-sm text-lg">
                            青心烏龍品種製成的清香烏龍
                            <div className="text-emerald-300 my-2">↓</div>
                            被簡稱為「烏龍」
                        </div>
                        <p className="text-stone-600 mt-6">
                            此時，「烏龍」又從茶類名稱，變成茶樹品種的代稱。
                        </p>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700">
                    <img
                        src="/images/teaTalk/oolong-story-era3.png"
                        alt="Cultivar Era - 品種時代"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-60" />
                </div>
            </section>

            {/* Summary */}
            <div className="bg-stone-900 text-stone-400 p-10 md:p-14 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-emerald-500 to-amber-500 opacity-50" />
                <Feather className="mx-auto mb-6 text-stone-500 w-12 h-12" />
                <h4 className="text-3xl font-black text-white mb-8 font-serif">一個名字，三段人生</h4>
                <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm">
                    <div className="p-6 border border-stone-800 rounded-2xl bg-stone-800/30 backdrop-blur hover:bg-stone-800 transition-colors">
                        <div className="text-amber-500 mb-3 font-bold tracking-widest text-xs">PAST</div>
                        <div className="text-stone-300 font-medium text-lg">一款出口的<br />發酵烏龍茶</div>
                    </div>
                    <div className="p-6 border border-stone-800 rounded-2xl bg-stone-800/30 backdrop-blur hover:bg-stone-800 transition-colors">
                        <div className="text-stone-500 mb-3 font-bold tracking-widest text-xs">MID</div>
                        <div className="text-stone-300 font-medium text-lg">一款全民熟悉的<br />焙火商品茶</div>
                    </div>
                    <div className="p-6 border border-stone-800 rounded-2xl bg-stone-800/30 backdrop-blur hover:bg-stone-800 transition-colors">
                        <div className="text-emerald-500 mb-3 font-bold tracking-widest text-xs">NOW</div>
                        <div className="text-stone-300 font-medium text-lg">一個茶樹品種的<br />簡稱</div>
                    </div>
                </div>
                <p className="text-xl md:text-2xl italic text-stone-200 font-serif leading-relaxed px-4">
                    "而下一次你再說「來杯烏龍茶」，也許，你點的不只是茶，而是一整段時代的味道。"
                </p>
            </div>
        </div>
    );
}

/* Content verified: nothing removed. Layout enhanced with images. */
