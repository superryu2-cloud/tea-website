import React from 'react';
import { Star, Crown, Sparkles } from 'lucide-react';

export default function YellowTeaTimeline() {
    const TimelineEvent = ({ year, title, content, icon: Icon, highlight = false, color = 'yellow' }) => {
        const colorClasses = {
            yellow: 'border-yellow-500 bg-yellow-50',
            amber: 'border-amber-500 bg-amber-50',
        };

        const iconColorClasses = {
            yellow: 'text-yellow-600',
            amber: 'text-amber-600',
        };

        return (
            <div className="relative flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                    <div className={`${highlight ? 'bg-yellow-600' : 'bg-stone-800'} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md border-2 border-white whitespace-nowrap z-10`}>
                        {year}
                    </div>
                    <div className="w-0.5 bg-stone-300 flex-1 mt-2"></div>
                </div>

                <div className={`flex-1 bg-white p-5 rounded-lg shadow-sm border-l-4 ${colorClasses[color]} hover:shadow-md transition-shadow ${highlight ? 'ring-2 ring-yellow-300' : ''}`}>
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
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-200 shadow-lg">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-yellow-900 mb-3">
                    黃茶起源與發展：歷史長河
                </h2>
                <p className="text-stone-600">悶黃工藝的獨特魅力，皇家貢茶的傳承</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm max-w-4xl mx-auto">
                <div className="ml-4">
                    <TimelineEvent
                        year="唐代"
                        title="意外的發現"
                        content="黃茶的誕生源於綠茶製作過程中的「失誤」。殺青後未及時乾燥，茶葉在濕熱環境下變黃，意外發現這種茶別有風味。"
                        color="yellow"
                        icon={Sparkles}
                    />

                    <TimelineEvent
                        year="明代"
                        title="悶黃工藝定型"
                        content="茶人有意識地控制悶黃過程，形成了獨特的黃茶製作工藝。悶黃的時間、溫度、濕度都需要精確掌控。"
                        color="yellow"
                        highlight={true}
                        icon={Star}
                    />

                    <TimelineEvent
                        year="清代"
                        title="貢茶地位"
                        content="君山銀針、蒙頂黃芽等黃茶被列為貢茶，專供皇室享用。黃茶因其稀有和獨特，成為「黃金貴族」。"
                        color="amber"
                        highlight={true}
                        icon={Crown}
                    />

                    <TimelineEvent
                        year="現代"
                        title="傳承與復興"
                        content="黃茶產量稀少，僅佔全國茶葉總產量0.5%左右。近年來，隨著消費者對高品質茶葉的追求，黃茶正在迎來復興。"
                        color="yellow"
                        icon={Sparkles}
                    />
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-stone-600 italic">
                黃茶：悶黃工藝的獨特魅力
            </div>
        </div>
    );
}
