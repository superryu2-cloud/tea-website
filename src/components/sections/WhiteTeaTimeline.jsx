import React from 'react';
import { Cloud, Heart, Sparkles } from 'lucide-react';

export default function WhiteTeaTimeline() {
    const TimelineEvent = ({ year, title, content, icon: Icon, highlight = false, color = 'slate' }) => {
        const colorClasses = {
            slate: 'border-slate-500 bg-slate-50',
            blue: 'border-blue-500 bg-blue-50',
        };

        const iconColorClasses = {
            slate: 'text-slate-600',
            blue: 'text-blue-600',
        };

        return (
            <div className="relative flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                    <div className={`${highlight ? 'bg-slate-600' : 'bg-stone-800'} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md border-2 border-white whitespace-nowrap z-10`}>
                        {year}
                    </div>
                    <div className="w-0.5 bg-stone-300 flex-1 mt-2"></div>
                </div>

                <div className={`flex-1 bg-white p-5 rounded-lg shadow-sm border-l-4 ${colorClasses[color]} hover:shadow-md transition-shadow ${highlight ? 'ring-2 ring-slate-300' : ''}`}>
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
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 shadow-lg">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                    白茶起源與發展：歷史長河
                </h2>
                <p className="text-stone-600">自然萎凋的天然之味，一年茶三年藥七年寶</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm max-w-4xl mx-auto">
                <div className="ml-4">
                    <TimelineEvent
                        year="唐代"
                        title="白茶的早期記載"
                        content="陸羽《茶經》中提到的「白茶」，雖與今日白茶不完全相同，但反映了古人對白色茶葉的認知。"
                        color="slate"
                        icon={Cloud}
                    />

                    <TimelineEvent
                        year="清嘉慶年間"
                        title="福鼎大白茶品種"
                        content="福鼎茶農選育出大白茶、大毫茶品種，奠定了現代白茶的基礎。福鼎成為白茶的主要產區。"
                        color="slate"
                        highlight={true}
                        icon={Sparkles}
                    />

                    <TimelineEvent
                        year="清光緒年間"
                        title="白毫銀針外銷"
                        content="白毫銀針開始外銷，被譽為「茶中美女」。全部由芽頭製成，滿披白毫，挺直如針。"
                        color="blue"
                        highlight={true}
                        icon={Sparkles}
                    />

                    <TimelineEvent
                        year="民國時期"
                        title="白牡丹創製"
                        content="一芽一二葉製成的白牡丹問世，因形似牡丹而得名。滋味醇厚，既有銀針的鮮爽，又多了葉片的醇和。"
                        color="slate"
                        icon={Cloud}
                    />

                    <TimelineEvent
                        year="現代"
                        title="越陳越香的價值"
                        content="白茶適合長期存放，隨著時間推移，茶性由涼轉溫，滋味更加醇和，藥用價值提升。「一年茶、三年藥、七年寶」的說法廣為流傳。"
                        color="slate"
                        icon={Heart}
                    />
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-stone-600 italic">
                白茶：自然萎凋的天然之味
            </div>
        </div>
    );
}
