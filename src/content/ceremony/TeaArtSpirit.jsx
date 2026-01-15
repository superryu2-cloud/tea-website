import React from 'react';
import { Feather, Heart, User, Users, Coffee } from 'lucide-react';

export default function TeaArtSpirit() {
    const spirits = [
        {
            char: '美',
            title: '美律',
            icon: Feather,
            color: 'bg-rose-50 text-rose-900 border-rose-200',
            iconColor: 'text-rose-600',
            desc: '治茶時態度必須從容，並且連貫而下，能顯示幽雅的旋律美，造成最好的氣氛。',
        },
        {
            char: '健',
            title: '健康',
            icon: Heart,
            color: 'bg-emerald-50 text-emerald-900 border-emerald-200',
            iconColor: 'text-emerald-600',
            desc: '健康是治茶之大本。凡是變質的茶葉及不潔的水均不可飲用。',
        },
        {
            char: '性',
            title: '養性',
            icon: User,
            color: 'bg-amber-50 text-amber-900 border-amber-200',
            iconColor: 'text-amber-600',
            desc: '茶的妙用之一在於能「養性」。我們在品茗時，能由清趣中培養靈泉，持之以恆還可以了悟禪理，實為修身最佳之法。',
        },
        {
            char: '倫',
            title: '倫理',
            icon: Users,
            color: 'bg-sky-50 text-sky-900 border-sky-200',
            iconColor: 'text-sky-600',
            desc: '\u8336\u53ef\u505a\u70ba\u6566\u7766\u4eba\u969b\u95dc\u4fc2\u7684\u6a4b\u6a11\u3002\u53e4\u6642\u6709\u81e3\u9032\u8ca2\u8336\u4ee5\u4e8b\u541b\uff0c\u4e5f\u6709\u541b\u8cdc\u8336\u4ee5\u611b\u81e3\u3002\u5c31\u4eca\u65e5\u89c0\u9ede\u800c\u8a00\uff0c\u8336\u80fd\u4f7f\u670b\u53cb\u4e4b\u9593\u66a2\u8ac7\u66f4\u6df1\uff0c\u4e5f\u53ef\u4f7f\u89aa\u4eba\u5728\u98f2\u8336\u4e4b\u9593\u4fc3\u9032\u5f7c\u6b64\u66f4\u6fc3\u7684\u60c5\u611f\u4ea4\u6d41\u3002',
        },
    ];

    return (
        <div className="space-y-10">
            {/* Intro Section */}
            <div className="bg-stone-50/60 rounded-3xl p-8 md:p-10 border border-stone-100">
                <h4 className="text-2xl font-extrabold text-stone-900 mb-6 flex items-center gap-3">
                    <Coffee className="text-stone-400" />
                    茶藝偏重生活藝術
                </h4>
                <div className="space-y-5 text-stone-600 leading-relaxed text-base md:text-lg">
                    <p>
                        因為日本的沿襲，「茶道」幾乎成了日本品茗之道的代稱。中國對此則慣稱為「茶藝」，偏重於生活藝術上的享用。
                    </p>
                    <div className="pl-6 border-l-4 border-stone-300 italic py-3 bg-white/70 rounded-r-xl text-stone-600 leading-relaxed text-base">
                        一般而言，將茶當做解渴飲料時，稱為「喝茶」；如細細品味，將其當做生活的藝術時，稱為「品茗」；若再探究茶葉品質、沖泡的技術、茶具的鑑賞、品茶的環境及茶在人際間的關係，那就進入「茶藝」的境界了。
                    </div>
                </div>
            </div>

            {/* Core Spirit Grid */}
            <div>
                <div className="text-center mb-10">
                    <h5 className="text-xl font-bold text-stone-800 mb-3">美健性倫 · 茶藝精神</h5>
                    <p className="text-stone-500 max-w-2xl mx-auto">國學大師林刑南先生以四個字表達我國的茶藝精神</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {spirits.map((item) => (
                        <div
                            key={item.char}
                            className={`group relative p-7 rounded-3xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${item.color}`}
                        >
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity font-serif text-8xl font-black select-none pointer-events-none">
                                {item.char}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm ${item.iconColor}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div className="text-3xl font-serif font-black">{item.char}</div>
                                </div>

                                <h6 className="text-lg font-bold mb-3 opacity-90">{item.title}</h6>
                                <p className="leading-relaxed opacity-85 text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-stone-50 to-orange-50/30 rounded-3xl p-8 border border-stone-100/50">
                <p className="text-stone-700 leading-relaxed text-base md:text-lg">
                    中華民族是自然謙合、不重形式的，人民將飲茶融入生活的一部份，沒有什麼儀式及宗教色彩；或在茶內加蔥、薑、棗，或調以橘皮、茉萸、薄荷，隨興之所至，愛怎麼喝就怎麼喝，注重情趣的配合，所以一直沒有一套有系統的體系沿傳下來；不過愜意、拙樸、自然也正是中國茶藝的真髓。
                </p>
            </div>
        </div>
    );
}
