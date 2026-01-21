import React from 'react';
import { Star, Globe, Leaf, Ship, Mountain, Sparkles, TrendingUp } from 'lucide-react';

/**
 * OolongTeaVerticalTimeline - 青茶（烏龍茶）歷史垂直時間線
 * 左側時間軸線，右側歷史事件卡片
 */
export default function OolongTeaVerticalTimeline() {
    const TimelineEvent = ({ year, title, content, icon: Icon, highlight = false, color = 'amber' }) => {
        const colorClasses = {
            green: 'border-green-500 bg-green-50',
            amber: 'border-amber-500 bg-amber-50',
            orange: 'border-orange-500 bg-orange-50',
            blue: 'border-blue-500 bg-blue-50',
            cyan: 'border-cyan-500 bg-cyan-50',
            teal: 'border-teal-500 bg-teal-50',
            purple: 'border-purple-500 bg-purple-50'
        };

        const iconColorClasses = {
            green: 'text-green-600',
            amber: 'text-amber-600',
            orange: 'text-orange-600',
            blue: 'text-blue-600',
            cyan: 'text-cyan-600',
            teal: 'text-teal-600',
            purple: 'text-purple-600'
        };

        return (
            <div className="relative flex gap-6 pb-8">
                {/* Left: Timeline */}
                <div className="flex flex-col items-center">
                    {/* Year badge */}
                    <div className={`${highlight ? 'bg-amber-600' : 'bg-stone-800'} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md border-2 border-white whitespace-nowrap z-10`}>
                        {year}
                    </div>
                    {/* Vertical line */}
                    <div className="w-0.5 bg-stone-300 flex-1 mt-2"></div>
                </div>

                {/* Right: Content card */}
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
            </div >
        );
    };

    return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-amber-900 mb-3">
                    青茶（烏龍茶）起源與傳播：歷史長河
                </h2>
                <p className="text-stone-600">從偶然誕生到風靡全球的半發酵茶演進史</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm max-w-4xl mx-auto">
                {/* 早期發展 */}
                <div className="mb-8">
                    <div className="mb-6 flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full border border-green-300 inline-flex">
                        <Leaf className="text-green-700" size={20} />
                        <span className="font-bold text-green-900">早期茶葉發展</span>
                    </div>

                    <div className="ml-4">
                        <TimelineEvent
                            year="明代"
                            title="散茶改革與炒青法"
                            content="朱元璋廢除團茶，改為散茶。武夷山引進松蘿炒青法，為青茶工藝奠定基礎。"
                            color="green"
                            icon={Leaf}
                        />
                    </div>
                </div>

                {/* 青茶誕生 */}
                <div className="my-12">
                    <div className="flex justify-center mb-6">
                        <div className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                            <Star size={20} className="animate-pulse" />
                            <span className="font-bold">青茶誕生</span>
                        </div>
                    </div>

                    <div className="ml-4">
                        <TimelineEvent
                            year="1556年"
                            title="最早的「微紅茶湯」記載"
                            content="葡萄牙神父在廣東記錄到「顏色微紅」的茶湯。學界推斷這可能是發酵程度偏高的烏龍茶，暗示半發酵茶可能在紅茶之前就已出現。"
                            color="cyan"
                            highlight={true}
                            icon={Sparkles}
                        />

                        <TimelineEvent
                            year="明末清初"
                            title="武夷岩茶工藝定型"
                            content="武夷山在濕潤多霧氣候中，鮮葉等待炒製時自然氧化，高溫炒製中止並鎖定發酵，再加上焙火工序，形成武夷岩茶的雛形。做青工藝逐步成熟。"
                            color="cyan"
                            highlight={true}
                            icon={Mountain}
                        />
                    </div>

                    <div className="flex justify-center my-6">
                        <div className="bg-cyan-100 border-2 border-cyan-400 px-6 py-4 rounded-xl shadow-md max-w-md text-center">
                            <div className="font-bold text-cyan-900 text-lg mb-2"><Leaf size={18} className="inline" /> 武夷岩茶</div>
                            <div className="text-cyan-800 text-sm">半發酵茶的代表 · 岩韻 · 做青工藝</div>
                        </div>
                    </div>
                </div>

                {/* 全球化發展 */}
                <div className="mt-12">
                    <div className="mb-6 flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full border border-blue-300 inline-flex">
                        <Globe className="text-blue-700" size={20} />
                        <span className="font-bold text-blue-900">全球化與名稱演變</span>
                    </div>

                    <div className="ml-4">
                        <TimelineEvent
                            year="18世紀"
                            title="武夷茶成為貿易主力"
                            content="武夷茶與松蘿茶成為對外貿易主力。深色武夷茶在西方常被歸為 Black Tea，與後來的紅茶混淆，埋下長期命名混亂的根源。"
                            color="blue"
                            icon={Ship}
                        />

                        <TimelineEvent
                            year="19世紀末"
                            title="Formosa Oolong 的崛起"
                            content="武夷茶聲譽下滑期，台灣烏龍以「Formosa Oolong Tea」外銷，填補高品質半發酵茶市場空缺，特別在美國大獲成功。"
                            color="teal"
                            icon={TrendingUp}
                        />

                        <TimelineEvent
                            year="20世紀"
                            title="Oolong 成為國際通用稱謂"
                            content="Oolong 從商品名逐步成為國際通用稱謂，用以區分綠茶與紅茶。在多數地區，烏龍茶幾乎等同青茶；台灣則常以「青茶」作總稱、烏龍作其中一支系。"
                            color="purple"
                            icon={Globe}
                        />

                        <TimelineEvent
                            year="1970年代"
                            title="日本烏龍茶熱潮"
                            content="青茶在日本形成全國性大流行，作為「健康飲品」迅速風靡市場，成為社會性文化現象。消脂解膩的健康形象深入人心。"
                            color="amber"
                            icon={TrendingUp}
                        />

                        <TimelineEvent
                            year="現代"
                            title="三大產區百花齊放"
                            content="福建烏龍（閩北岩茶、閩南安溪）、廣東烏龍（鳳凰單叢）、台灣烏龍（包種、高山、凍頂等）各具特色，青茶成為最多樣化的茶類。"
                            color="cyan"
                            icon={Leaf}
                        />
                    </div>
                </div>

                {/* 三大產區 */}
                <div className="mt-16 pt-8 border-t-2 border-stone-200">
                    <div className="mb-6 flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full border border-purple-300 inline-flex">
                        <Mountain className="text-purple-700" size={20} />
                        <span className="font-bold text-purple-900">三大產區代表</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-amber-50 p-5 rounded-lg border-2 border-amber-300">
                            <div className="font-bold text-amber-900 mb-3 text-center">🇨🇳 福建烏龍</div>
                            <div className="text-sm text-amber-800 space-y-1">
                                <div className="font-bold">閩北岩茶（岩韻）</div>
                                <div className="text-xs">大紅袍、肉桂、水仙</div>
                                <div className="font-bold mt-2">閩南安溪（音韻）</div>
                                <div className="text-xs">鐵觀音、黃金桂</div>
                            </div>
                        </div>
                        <div className="bg-orange-50 p-5 rounded-lg border-2 border-orange-300">
                            <div className="font-bold text-orange-900 mb-3 text-center">🇨🇳 廣東烏龍</div>
                            <div className="text-sm text-orange-800 space-y-1">
                                <div className="font-bold">鳳凰單叢（山韻）</div>
                                <div className="text-xs">十大香型：黃枝香、芝蘭香、蜜蘭香等</div>
                                <div className="text-xs mt-2">以自然香型著稱</div>
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-5 rounded-lg border-2 border-emerald-300">
                            <div className="font-bold text-emerald-900 mb-3 text-center">🇹🇼 台灣烏龍</div>
                            <div className="text-sm text-emerald-800 space-y-1">
                                <div className="font-bold">清香與熟韻（蜜韻）</div>
                                <div className="text-xs">文山包種、高山烏龍</div>
                                <div className="text-xs">凍頂烏龍、東方美人</div>
                                <div className="text-xs">鐵觀音、紅烏龍</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 工藝特色 */}
                <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <div className="font-bold text-amber-900 mb-3"><Microscope size={18} className="inline" /> 青茶工藝核心</div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <div className="font-bold text-stone-800 mb-1">萎凋</div>
                            <div className="text-stone-600">日光/室內萎凋，適度失水</div>
                        </div>
                        <div>
                            <div className="font-bold text-stone-800 mb-1">做青</div>
                            <div className="text-stone-600">搖青、走水與氧化，香氣層次增幅最大</div>
                        </div>
                        <div>
                            <div className="font-bold text-stone-800 mb-1">焙火</div>
                            <div className="text-stone-600">穩定乾燥並激發芳香物質</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-stone-600 italic">
                從偶然誕生到風靡全球：半發酵茶的百年演進
            </div>
        </div>
    );
}
