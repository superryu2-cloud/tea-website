import React from 'react';
import { Compass, Mountain, Package, Sparkles } from 'lucide-react';

export default function BlackTeaTimeline() {
    const TimelineEvent = ({ year, title, content, icon: Icon, highlight = false, color = 'amber' }) => {
        const colorClasses = {
            amber: 'border-amber-500 bg-amber-50',
            brown: 'border-amber-700 bg-amber-100',
        };

        const iconColorClasses = {
            amber: 'text-amber-600',
            brown: 'text-amber-800',
        };

        return (
            <div className="relative flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                    <div className={`${highlight ? 'bg-amber-700' : 'bg-stone-800'} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md border-2 border-white whitespace-nowrap z-10`}>
                        {year}
                    </div>
                    <div className="w-0.5 bg-stone-300 flex-1 mt-2"></div>
                </div>

                <div className={`flex-1 bg-white p-5 rounded-lg shadow-sm border-l-4 ${colorClasses[color]} hover:shadow-md transition-shadow ${highlight ? 'ring-2 ring-amber-300' : ''}`}>
                    {Icon && (
                        <div className="flex items-center mb-2">
                            <Icon size={18} className={`${iconColorClasses[color]} mr-2`} />
                            <h4 className="font-bold text-stone-800 text-base">{title}</h4>
                        </div>
                    )}
                    {!Icon && <h4 className="font-bold text-stone-800 text-base mb-2">{title}</h4>}
                    <p className="text-stone-600 text-sm leading-relaxed">{content}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-amber-900 mb-3">
                    黑茶（普洱茶）起源與發展：歷史長河
                </h2>
                <p className="text-stone-600">茶馬古道上的陳香，越陳越香的後發酵茶</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm max-w-4xl mx-auto">
                <div className="ml-4">
                    <TimelineEvent
                        year="東漢時期"
                        title="雲南茶樹的起源"
                        content="雲南是世界茶樹的發源地之一，擁有眾多古茶樹。普洱茶以雲南大葉種曬青毛茶為原料，歷史悠久。"
                        color="amber"
                        icon={Mountain}
                    />

                    <TimelineEvent
                        year="唐宋時期"
                        title="茶馬古道形成"
                        content="雲南、四川的茶葉通過馬幫運往西藏、青海等地，與當地的馬匹、藥材等進行交換，形成了著名的茶馬古道。"
                        color="amber"
                        highlight={true}
                        icon={Compass}
                    />

                    <TimelineEvent
                        year="明清時期"
                        title="普洱茶得名"
                        content="雲南各地的茶葉集中在普洱府（今普洱市）進行交易，再經茶馬古道運往各地，因此得名「普洱茶」。"
                        color="brown"
                        highlight={true}
                        icon={Package}
                    />

                    <TimelineEvent
                        year="1973年"
                        title="渥堆技術創製"
                        content="雲南茶廠研發出「渥堆」技術，人工加速普洱茶的發酵過程，創製出熟普洱。熟普可以快速達到陳年生普的口感。"
                        color="amber"
                        highlight={true}
                        icon={Sparkles}
                    />

                    <TimelineEvent
                        year="現代"
                        title="收藏熱潮與古樹茶"
                        content="20世紀90年代以來，普洱茶從邊銷茶轉變為收藏品和投資品。「越陳越香」的特性使其具有保值增值潛力。古樹茶因其獨特風味和稀缺性備受追捧。"
                        color="amber"
                        icon={Mountain}
                    />
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-stone-600 italic">
                黑茶：茶馬古道上的陳香
            </div>
        </div>
    );
}
