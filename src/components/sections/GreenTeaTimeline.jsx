import React from 'react';
import { Star, Leaf, Mountain, Sparkles } from 'lucide-react';

const TimelineEvent = ({ year, title, content, icon: Icon, highlight = false, color = 'green' }) => {
    const colorClasses = {
        green: 'border-green-500 bg-green-50',
        amber: 'border-amber-500 bg-amber-50',
    };

    const iconColorClasses = {
        green: 'text-green-600',
        amber: 'text-amber-600',
    };

    return (
        <div className="relative flex gap-6 pb-8">
            <div className="flex flex-col items-center">
                <div className={`${highlight ? 'bg-green-600' : 'bg-stone-800'} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md border-2 border-white whitespace-nowrap z-10`}>
                    {year}
                </div>
                <div className="w-0.5 bg-stone-300 flex-1 mt-2"></div>
            </div>

            <div className={`flex-1 bg-white p-5 rounded-lg shadow-sm border-l-4 ${colorClasses[color]} hover:shadow-md transition-shadow ${highlight ? 'ring-2 ring-green-300' : ''}`}>
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

export default function GreenTeaTimeline() {

    return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 shadow-lg">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-green-900 mb-3">
                    綠茶起源與發展：歷史長河
                </h2>
                <p className="text-stone-600">從神農嘗百草到現代綠茶，中國茶文化的起源</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm max-w-4xl mx-auto">
                <div className="ml-4">
                    <TimelineEvent
                        year="傳說時代"
                        title="神農嘗百草"
                        content="相傳神農氏嘗百草時，誤食毒草，以茶葉解毒。雖是傳說，但反映了茶葉在中國古代的藥用價值。"
                        color="green"
                        icon={Leaf}
                    />

                    <TimelineEvent
                        year="唐代"
                        title="陸羽《茶經》"
                        content="陸羽（733-804年）著《茶經》，系統總結茶葉的種植、採摘、製作、品飲方法，奠定中國茶文化的理論基礎。此時主要是蒸青綠茶。"
                        color="green"
                        highlight={true}
                        icon={Star}
                    />

                    <TimelineEvent
                        year="明代"
                        title="炒青法革新"
                        content="明太祖朱元璋廢除團茶，改貢散茶，促進了炒青綠茶的發展。炒青法取代蒸青法，成為中國綠茶的主流工藝。"
                        color="amber"
                        highlight={true}
                        icon={Sparkles}
                    />

                    <TimelineEvent
                        year="清代"
                        title="名茶輩出"
                        content="西湖龍井、碧螺春等名茶在清代達到巔峰。龍井茶被乾隆皇帝御封，碧螺春因康熙賜名而聞名天下。"
                        color="green"
                        icon={Mountain}
                    />

                    <TimelineEvent
                        year="現代"
                        title="綠茶全球化"
                        content="綠茶成為中國產量最大的茶類，佔全國茶葉總產量70%以上。日本學習中國蒸青技術，發展出抹茶、煎茶等獨特品類。"
                        color="green"
                        icon={Leaf}
                    />
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-stone-600 italic">
                綠茶：中國茶文化的起源與傳承
            </div>
        </div>
    );
}
