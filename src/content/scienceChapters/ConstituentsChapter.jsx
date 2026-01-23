import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FlaskConical, Leaf, Droplets, Sparkles, Wind, Flame, Coffee, Layers, X, Info } from 'lucide-react';

const TeaConstituentsChart = () => {
    const [hoveredSegment, setHoveredSegment] = useState(null);

    const data = [
        { id: 'polyphenols', label: '茶多酚', value: 48, color: '#10B981', desc: '澀感、抗氧化', percentage: '48%' },
        { id: 'others', label: '其他物質', value: 27, color: '#F59E0B', desc: '醣類、果膠、香氣', percentage: '27%' },
        { id: 'theanine', label: '茶胺酸', value: 15, color: '#22C55E', desc: '鮮甜、回甘', percentage: '15%' },
        { id: 'caffeine', label: '咖啡因', value: 10, color: '#EAB308', desc: '苦味、提神', percentage: '10%' },
    ];

    // Calculate chart segments
    const radius = 100;
    const circumference = 2 * Math.PI * radius;
    let accumulatedValue = 0;

    const segments = data.map((item) => {
        const offset = circumference - (item.value / 100) * circumference;
        const rotate = (accumulatedValue / 100) * 360;
        accumulatedValue += item.value;
        return {
            ...item,
            offset,
            rotate
        };
    });

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Donut Chart */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                <svg viewBox="0 0 250 250" className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle cx="125" cy="125" r="100" fill="none" stroke="#e5e7eb" strokeWidth="20" />

                    {/* Segments */}
                    {segments.map((segment) => {
                        const isHovered = hoveredSegment === segment.id;
                        const isDimmed = hoveredSegment && !isHovered;

                        return (
                            <circle
                                key={segment.id}
                                cx="125"
                                cy="125"
                                r="100"
                                fill="none"
                                stroke={segment.color}
                                strokeWidth={isHovered ? "30" : "24"}
                                strokeDasharray={circumference}
                                strokeDashoffset={segment.offset}
                                strokeLinecap="round"
                                className="transition-all duration-300 ease-out cursor-pointer"
                                style={{
                                    transformOrigin: 'center',
                                    transform: `rotate(${segment.rotate}deg) scale(${isHovered ? 1.05 : 1})`,
                                    filter: isHovered ? 'drop-shadow(0px 0px 12px rgba(0,0,0,0.3))' : 'none',
                                    opacity: isDimmed ? 0.3 : 1
                                }}
                                onMouseEnter={() => setHoveredSegment(segment.id)}
                                onMouseLeave={() => setHoveredSegment(null)}
                            />
                        );
                    })}
                </svg>

                {/* Center Text */}
                <div
                    className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transform rotate-0 transition-transform duration-300 ${hoveredSegment ? 'scale-110' : 'scale-100'}`}
                >
                    <div className="text-3xl md:text-5xl font-bold text-stone-800 transition-all duration-300">
                        {hoveredSegment ? data.find(d => d.id === hoveredSegment).percentage : '100%'}
                    </div>
                    <div className="text-sm md:text-lg font-bold text-stone-500 mt-2 transition-all duration-300">
                        {hoveredSegment ? data.find(d => d.id === hoveredSegment).label : '內含物質'}
                    </div>
                </div>
            </div>

            {/* Legend / Info Cards */}
            <div className="grid grid-cols-2 gap-4 w-full md:max-w-md">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`
                            p-4 rounded-xl border-l-4 shadow-sm transition-all duration-300 cursor-default
                            ${hoveredSegment === item.id ? 'transform scale-105 shadow-md bg-white' : 'bg-white/60 hover:bg-white'}
                        `}
                        style={{ borderColor: item.color }}
                        onMouseEnter={() => setHoveredSegment(item.id)}
                        onMouseLeave={() => setHoveredSegment(null)}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-stone-800">{item.label}</h4>
                            <span className="font-bold px-2 py-0.5 rounded text-sm text-white" style={{ backgroundColor: item.color }}>
                                {item.percentage}
                            </span>
                        </div>
                        <p className="text-xs text-stone-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function ConstituentsChapter() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categoryDetails = {
        green: {
            title: '生青',
            color: 'emerald',
            icon: Leaf,
            compounds: '順式青葉醇',
            description: '帶來新鮮的青草香，是茶葉「生青」特徵的主要來源。在輕發酵茶中尤為明顯，如文山包種、高山烏龍等。',
            examples: ['文山包種茶', '高山烏龍茶', '碧螺春']
        },
        aroma: {
            title: '香氣',
            color: 'purple',
            icon: Sparkles,
            compounds: '芳樟醇 / 香葉醇 / 橙花叔醇',
            description: '萜烯類化合物，貢獻花香與果香。芳樟醇帶來鈴蘭般的花香，香葉醇呈現玫瑰香氣，橙花叔醇則有柑橘花香。',
            examples: ['清香型烏龍', '東方美人', '鳳凰單欉']
        },
        sweet: {
            title: '甜',
            color: 'amber',
            icon: Droplets,
            compounds: '可溶性糖 / 丙氨酸 / 絲氨酸 / 茶紅質',
            description: '提供直接的甜味感受。茶紅質在紅茶中尤為重要，帶來紅茶特有的甜潤口感。可溶性糖含量越高，茶湯越甘甜。',
            examples: ['紅茶', '凍頂烏龍', '蜜香紅茶']
        },
        umami: {
            title: '鮮甜',
            color: 'green',
            icon: Leaf,
            compounds: '氨基酸',
            description: '尤其是茶氨酸（L-Theanine），帶來獨特的鮮甜與回甘，是高級綠茶和玉露的標誌性風味。氨基酸含量與茶樹生長環境密切相關。',
            examples: ['玉露', '碧螺春', '龍井茶']
        },
        salty: {
            title: '鹹',
            color: 'cyan',
            icon: Wind,
            compounds: '鉀離子 / 鉀鹽子',
            description: '帶來礦物質感與微妙的鹹味，增加茶湯的複雜度與層次感。這種礦物質風味在岩茶中尤為明顯。',
            examples: ['武夷岩茶', '鐵觀音', '普洱茶']
        },
        astringent: {
            title: '澀及收斂性',
            color: 'stone',
            icon: Coffee,
            compounds: '非酯型兒茶素、沒食子酸',
            description: '澀感的主要貢獻者。與唾液蛋白結合產生收斂性，適度的澀感能增加茶湯的結構感與層次。',
            examples: ['生普洱', '綠茶', '白茶']
        },
        bitterAstringent: {
            title: '苦澀及收斂性',
            color: 'rose',
            icon: Coffee,
            compounds: '酯型兒茶素、黃酮苷',
            description: '帶來「苦澀及收斂性」，但在適度範圍內能增加茶湯的結構感。這類化合物在發酵過程中會轉化，影響茶湯的整體風味。',
            examples: ['生普洱', '白茶', '輕發酵烏龍']
        },
        light: {
            title: '淡味',
            color: 'orange',
            icon: Droplets,
            compounds: '茶褐質',
            description: '茶褐質是茶多酚過度氧化的產物，會使茶湯呈現淡薄的口感。通常出現在過度陳放或製程不當的茶葉中。',
            examples: ['過度陳放的茶', '製程不當的茶']
        },
        sour: {
            title: '酸',
            color: 'red',
            icon: Coffee,
            compounds: '沒食子酸 / 有機酸 / 維生素C / 軟氨酸',
            description: '提供酸度與明亮感，使茶湯更加活潑生動。適度的酸味能提升茶湯的清爽感，但過度則會影響品質。',
            examples: ['紅茶', '部分發酵茶', '陳年普洱']
        },
        bitter: {
            title: '苦',
            color: 'yellow',
            icon: Coffee,
            compounds: '花青素因 / 咖啡因 / 茶皂素 / 檸檬酸',
            description: '苦味的主要來源。咖啡因帶來清爽的苦味，檸檬酸則增加酸苦平衡。適度的苦味能轉化為回甘。',
            examples: ['普洱茶', '苦茶', '濃香型烏龍']
        },
        body: {
            title: '厚度',
            color: 'indigo',
            icon: Layers,
            compounds: '可溶性果膠 / 可溶性蛋白 / 茶多酚及氧化物',
            description: '增加茶湯的黏稠度與厚度，帶來飽滿的口感。茶多酚及氧化物也貢獻茶湯的「body」，是評判茶湯品質的重要指標。',
            examples: ['老茶', '熟普洱', '重發酵烏龍']
        },
        aftertaste: {
            title: '回甘',
            color: 'pink',
            icon: Sparkles,
            compounds: '氨基酸 / 黃酮醇',
            description: '回甘的主要來源。氨基酸在苦味消退後帶來持久的甘甜，黃酮醇則增加回甘的複雜度。優質茶的回甘持久而明顯。',
            examples: ['高山烏龍', '鐵觀音', '普洱茶']
        },
        energy: {
            title: '茶氣',
            color: 'teal',
            icon: Sparkles,
            compounds: '香氣精油 / 微量元素',
            description: '構成茶的「氣韻」，是品茗時感受到的整體活力與能量感。茶氣強的茶往往來自古樹或生態環境優良的茶園。',
            examples: ['古樹普洱', '岩茶', '老茶']
        },
        viscosity: {
            title: '黏稠度',
            color: 'blue',
            icon: Droplets,
            compounds: '可溶性果膠 / 可溶性蛋白',
            description: '增加茶湯的質感與滑順度。高黏稠度的茶湯入口綿密，是優質茶的特徵之一。',
            examples: ['熟普洱', '老茶', '重發酵烏龍']
        },
        refreshing: {
            title: '爽口',
            color: 'lime',
            icon: Wind,
            compounds: '咖啡與茶多酚或茶黃素質絡合物',
            description: '茶黃素質絡合物帶來清爽的口感，使茶湯在厚重中保持活潑。這是紅茶品質的重要指標。',
            examples: ['紅茶', '烏龍茶', '白茶']
        },
        color: {
            title: '湯色',
            color: 'orange',
            icon: Flame,
            compounds: '黃酮類 / 剝落葉綠素 / 茶多酚氧化物',
            description: '決定茶湯的視覺呈現。黃酮類帶來金黃色澤，葉綠素降解產物影響綠茶的翠綠色，而茶多酚氧化物（茶黃素、茶紅素、茶褐素）則決定了紅茶從金黃到深紅的色譜。',
            examples: ['綠茶（翠綠）', '紅茶（紅艷）', '烏龍（金黃）']
        }
    };

    const ConstituentCard = ({ id, title, color, icon: Icon, compounds, size = 'normal' }) => {
        const colorClasses = {
            emerald: 'from-emerald-50 to-emerald-100 border-emerald-300 hover:border-emerald-400',
            purple: 'from-purple-50 to-purple-100 border-purple-300 hover:border-purple-400',
            amber: 'from-amber-50 to-amber-100 border-amber-300 hover:border-amber-400',
            green: 'from-green-50 to-green-100 border-green-300 hover:border-green-400',
            cyan: 'from-cyan-50 to-cyan-100 border-cyan-300 hover:border-cyan-400',
            stone: 'from-stone-100 to-stone-200 border-stone-400 hover:border-stone-500',
            rose: 'from-rose-100 to-rose-200 border-rose-400 hover:border-rose-500',
            orange: 'from-orange-50 to-orange-100 border-orange-300 hover:border-orange-400',
            red: 'from-red-50 to-red-100 border-red-300 hover:border-red-400',
            yellow: 'from-yellow-50 to-yellow-100 border-yellow-400 hover:border-yellow-500',
            indigo: 'from-indigo-50 to-indigo-100 border-indigo-300 hover:border-indigo-400',
            pink: 'from-pink-50 to-pink-100 border-pink-300 hover:border-pink-400',
            teal: 'from-teal-50 to-teal-100 border-teal-300 hover:border-teal-400',
            blue: 'from-blue-50 to-blue-100 border-blue-300 hover:border-blue-400',
            lime: 'from-lime-50 to-lime-100 border-lime-300 hover:border-lime-400'
        };

        const textColorClasses = {
            emerald: 'text-emerald-900',
            purple: 'text-purple-900',
            amber: 'text-amber-900',
            green: 'text-green-900',
            cyan: 'text-cyan-900',
            stone: 'text-stone-900',
            rose: 'text-rose-900',
            orange: 'text-orange-900',
            red: 'text-red-900',
            yellow: 'text-yellow-900',
            indigo: 'text-indigo-900',
            pink: 'text-pink-900',
            teal: 'text-teal-900',
            blue: 'text-blue-900',
            lime: 'text-lime-900'
        };

        const compoundColorClasses = {
            emerald: 'text-emerald-700',
            purple: 'text-purple-700',
            amber: 'text-amber-700',
            green: 'text-green-700',
            cyan: 'text-cyan-700',
            stone: 'text-stone-700',
            rose: 'text-rose-700',
            orange: 'text-orange-700',
            red: 'text-red-700',
            yellow: 'text-yellow-700',
            indigo: 'text-indigo-700',
            pink: 'text-pink-700',
            teal: 'text-teal-700',
            blue: 'text-blue-700',
            lime: 'text-lime-700'
        };

        return (
            <div
                onClick={() => setSelectedCategory(id)}
                className={`bg-gradient-to-br ${colorClasses[color]} ${size === 'large' ? 'p-5' : 'p-4'} rounded-xl border-2 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:scale-105`}
            >
                <h4 className={`${size === 'large' ? 'text-xl' : 'text-lg'} font-bold ${textColorClasses[color]} mb-2 flex items-center ${size === 'large' ? 'justify-center' : ''}`}>
                    {Icon && <Icon className="mr-2" size={18} />}
                    {title}
                </h4>
                <p className={`text-xs ${compoundColorClasses[color]} ${size === 'large' ? 'text-center text-sm' : ''}`}>{compounds}</p>
            </div>
        );
    };

    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-bold text-stone-900 mb-4">
                    茶葉內含物質的角色扮演
                </h2>

                <p className="text-lg text-stone-700 leading-relaxed mb-6">
                    一杯茶的風味，是數百種化學物質共同作用的結果。從生青的葉醇、香氣的芳樟醇，到回甘的氨基酸，每一種成分都在茶湯中扮演著獨特的角色。理解這些內含物質，是深入品鑑茶葉的科學基礎。
                </p>

                {/* Tea Constituents Diagram - Enhanced Design */}
                <div className="my-16 bg-gradient-to-br from-emerald-50 via-white to-amber-50 rounded-3xl border border-emerald-200 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-32 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 md:block hidden"></div>
                    <div className="absolute bottom-0 left-0 p-24 bg-amber-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 md:block hidden"></div>

                    <div className="p-8 md:p-12 relative z-10">
                        <h3 className="text-2xl font-bold text-stone-900 mb-10 text-center flex items-center justify-center gap-2">
                            <FlaskConical className="text-emerald-600" size={28} />
                            茶葉內含物質組成
                        </h3>

                        {/* Static Image (Restored) */}
                        <div className="mb-12 flex justify-center">
                            <img
                                src="/images/tea_constituents_diagram.png"
                                alt="茶葉內含物質分布圖（靜態）"
                                className="w-full max-w-3xl h-auto rounded-2xl shadow-md"
                            />
                        </div>

                        <TeaConstituentsChart />

                        <p className="text-sm text-stone-500 text-center mt-8 italic">
                            互動式圖表：將滑鼠懸停於圓環可查看詳細數據
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                    <p className="text-sm text-blue-900 flex items-center">
                        <Info className="mr-2 flex-shrink-0" size={18} />
                        <strong>互動提示：</strong>點擊任意類別卡片，查看詳細說明與茶類範例
                    </p>
                </div>

                <div className="my-10">
                    <h3 className="text-2xl font-bold text-center text-stone-900 mb-8">
                        茶葉內含物中的角色扮演
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                        <ConstituentCard id="green" title="生青" color="emerald" icon={Leaf} compounds="順式青葉醇" />
                        <ConstituentCard id="aroma" title="香氣" color="purple" icon={Sparkles} compounds="芳樟醇 / 香葉醇 / 橙花叔醇" />
                        <ConstituentCard id="sweet" title="甜" color="amber" icon={Droplets} compounds="可溶性糖 / 丙氨酸 / 絲氨酸 / 茶紅質" />
                        <ConstituentCard id="umami" title="鮮甜" color="green" icon={Leaf} compounds="氨基酸" />
                        <ConstituentCard id="salty" title="鹹" color="cyan" icon={Wind} compounds="鉀離子 / 鉀鹽子" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <ConstituentCard id="astringent" title="澀及收斂性" color="stone" icon={Coffee} compounds="非酯型兒茶素、沒食子酸" size="large" />
                        <ConstituentCard id="bitterAstringent" title="苦澀及收斂性" color="rose" icon={Coffee} compounds="酯型兒茶素、黃酮苷" size="large" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                        <ConstituentCard id="light" title="淡味" color="orange" compounds="茶褐質" />
                        <ConstituentCard id="sour" title="酸" color="red" icon={Coffee} compounds="沒食子酸 / 有機酸 / 維生素C / 軟氨酸" />
                        <ConstituentCard id="bitter" title="苦" color="yellow" compounds="花青素因 / 咖啡因 / 茶皂素 / 檸檬酸" />
                        <ConstituentCard id="body" title="厚度" color="indigo" icon={Layers} compounds="可溶性果膠 / 可溶性蛋白 / 茶多酚及氧化物" />
                        <ConstituentCard id="aftertaste" title="回甘" color="pink" compounds="氨基酸 / 黃酮醇" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <ConstituentCard id="energy" title="茶氣" color="teal" icon={Sparkles} compounds="香氣精油 / 微量元素" />
                        <ConstituentCard id="viscosity" title="黏稠度" color="blue" compounds="可溶性果膠 / 可溶性蛋白" />
                        <ConstituentCard id="refreshing" title="爽口" color="lime" compounds="咖啡與茶多酚或茶黃素質絡合物" />
                        <ConstituentCard id="color" title="湯色" color="orange" icon={Flame} compounds="黃酮類 / 剝落葉綠素 / 茶多酚氧化物" />
                    </div>

                    <p className="text-sm text-stone-500 text-center mt-6 italic">
                        互動式圖表：點擊卡片查看詳細資訊
                    </p>
                </div>

                {selectedCategory && categoryDetails[selectedCategory] && createPortal(
                    <>
                        <div className="fixed inset-0 bg-stone-900/60 flex items-center justify-center z-[9999] p-4 backdrop-blur-md transition-all duration-300 animate-fadeIn" onClick={() => setSelectedCategory(null)}>
                            <div className="bg-white/95 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-scaleUp border border-white/20" onClick={(e) => e.stopPropagation()}>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-3xl font-bold text-stone-900 flex items-center">
                                            {React.createElement(categoryDetails[selectedCategory].icon, { className: "mr-3", size: 32 })}
                                            {categoryDetails[selectedCategory].title}
                                        </h3>
                                        <button
                                            onClick={() => setSelectedCategory(null)}
                                            className="text-stone-400 hover:text-stone-600 transition-colors p-2 rounded-full hover:bg-stone-100/50"
                                        >
                                            <X size={28} />
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-stone-50/80 p-5 rounded-xl border border-stone-100">
                                            <h4 className="font-bold text-xl text-stone-900 mb-2">化合物</h4>
                                            <p className="text-stone-700 font-medium text-lg">{categoryDetails[selectedCategory].compounds}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-xl text-stone-900 mb-2">詳細說明</h4>
                                            <p className="text-stone-700 leading-relaxed text-lg">{categoryDetails[selectedCategory].description}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-xl text-stone-900 mb-2">代表茶類</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {categoryDetails[selectedCategory].examples.map((example, idx) => (
                                                    <span key={idx} className="px-4 py-1.5 bg-amber-100 text-amber-900 rounded-full text-base font-medium">
                                                        {example}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style jsx>{`
                            @keyframes fadeIn {
                                from { opacity: 0; }
                                to { opacity: 1; }
                            }
                            @keyframes scaleUp {
                                from { transform: scale(0.95); opacity: 0; }
                                to { transform: scale(1); opacity: 1; }
                            }
                            .animate-fadeIn {
                                animation: fadeIn 0.3s ease-out forwards;
                            }
                            .animate-scaleUp {
                                animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                            }
                        `}</style>
                    </>,
                    document.body
                )}
            </section >

            <section>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">深入解析：風味化合物的科學</h3>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-stone-900 mb-3 flex items-center text-lg">
                            <Leaf className="mr-2 text-emerald-600" size={22} />
                            生青與香氣
                        </h4>
                        <div className="space-y-3 text-sm text-stone-700">
                            <div>
                                <strong className="text-emerald-700">順式青葉醇</strong>
                                <p className="text-stone-600 mt-1">帶來新鮮的青草香，是茶葉「生青」特徵的主要來源。在輕發酵茶中尤為明顯。</p>
                            </div>
                            <div>
                                <strong className="text-emerald-700">芳樟醇、香葉醇、橙花叔醇</strong>
                                <p className="text-stone-600 mt-1">萜烯類化合物，貢獻花香與果香。芳樟醇帶來鈴蘭般的花香，香葉醇呈現玫瑰香氣。</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-stone-900 mb-3 flex items-center text-lg">
                            <Droplets className="mr-2 text-blue-600" size={22} />
                            甜與鮮甜
                        </h4>
                        <div className="space-y-3 text-sm text-stone-700">
                            <div>
                                <strong className="text-blue-700">可溶性糖、丙氨酸、絲氨酸</strong>
                                <p className="text-stone-600 mt-1">提供直接的甜味感受。茶紅質在紅茶中尤為重要，帶來紅茶特有的甜潤口感。</p>
                            </div>
                            <div>
                                <strong className="text-blue-700">氨基酸</strong>
                                <p className="text-stone-600 mt-1">尤其是茶氨酸（L-Theanine），帶來獨特的鮮甜與回甘，是高級綠茶和玉露的標誌性風味。</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-stone-900 mb-3 flex items-center text-lg">
                            <Wind className="mr-2 text-cyan-600" size={22} />
                            鹹與酸
                        </h4>
                        <div className="space-y-3 text-sm text-stone-700">
                            <div>
                                <strong className="text-cyan-700">鉀離子、鉀鹽子</strong>
                                <p className="text-stone-600 mt-1">帶來礦物質感與微妙的鹹味，增加茶湯的複雜度與層次感。</p>
                            </div>
                            <div>
                                <strong className="text-cyan-700">沒食子酸、有機酸、維生素C</strong>
                                <p className="text-stone-600 mt-1">提供酸度與明亮感，使茶湯更加活潑生動。軟氨酸也貢獻輕微的酸味。</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-stone-900 mb-3 flex items-center text-lg">
                            <Coffee className="mr-2 text-amber-700" size={22} />
                            苦與澀
                        </h4>
                        <div className="space-y-3 text-sm text-stone-700">
                            <div>
                                <strong className="text-amber-800">花青素因、咖啡因、茶皂素</strong>
                                <p className="text-stone-600 mt-1">苦味的主要來源。咖啡因帶來清爽的苦味，檸檬酸則增加酸苦平衡。</p>
                            </div>
                            <div>
                                <strong className="text-amber-800">非酯型兒茶素、沒食子酸</strong>
                                <p className="text-stone-600 mt-1">澀感的主要貢獻者。與唾液蛋白結合產生收斂性，是茶湯「澀及收斂性」的來源。</p>
                            </div>
                            <div>
                                <strong className="text-amber-800">酯型兒茶素、黃酮苷</strong>
                                <p className="text-stone-600 mt-1">帶來「苦澀及收斂性」，但在適度範圍內能增加茶湯的結構感。</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-stone-900 mb-3 flex items-center text-lg">
                            <Layers className="mr-2 text-purple-600" size={22} />
                            厚度與回甘
                        </h4>
                        <div className="space-y-3 text-sm text-stone-700">
                            <div>
                                <strong className="text-purple-700">可溶性果膠、可溶性蛋白</strong>
                                <p className="text-stone-600 mt-1">增加茶湯的黏稠度與厚度，帶來飽滿的口感。茶多酚及氧化物也貢獻茶湯的「body」。</p>
                            </div>
                            <div>
                                <strong className="text-purple-700">氨基酸、黃酮醇</strong>
                                <p className="text-stone-600 mt-1">回甘的主要來源。氨基酸在苦味消退後帶來持久的甘甜，黃酮醇則增加回甘的複雜度。</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-stone-900 mb-3 flex items-center text-lg">
                            <Sparkles className="mr-2 text-yellow-600" size={22} />
                            茶氣與爽口
                        </h4>
                        <div className="space-y-3 text-sm text-stone-700">
                            <div>
                                <strong className="text-yellow-700">香氣精油、微量元素</strong>
                                <p className="text-stone-600 mt-1">構成茶的「氣韻」，是品茗時感受到的整體活力與能量感。</p>
                            </div>
                            <div>
                                <strong className="text-yellow-700">咖啡與茶多酚絡合物</strong>
                                <p className="text-stone-600 mt-1">茶黃素質絡合物帶來清爽的口感，使茶湯在厚重中保持活潑。</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                        <h4 className="font-bold text-stone-900 mb-3 flex items-center text-lg">
                            <Flame className="mr-2 text-orange-600" size={22} />
                            湯色
                        </h4>
                        <div className="text-sm text-stone-700">
                            <strong className="text-orange-700">黃酮類、剝落葉綠素、茶多酚氧化物</strong>
                            <p className="text-stone-600 mt-1">
                                決定茶湯的視覺呈現。黃酮類帶來金黃色澤，葉綠素降解產物影響綠茶的翠綠色，而茶多酚氧化物（茶黃素、茶紅素、茶褐素）則決定了紅茶從金黃到深紅的色譜。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-12 p-8 bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl border border-amber-200">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">品鑑應用</h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                    理解這些化合物的角色後，我們在品茗時可以更精準地描述與分析茶湯：
                </p>
                <ul className="space-y-2 text-stone-700">
                    <li className="flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        <span><strong>清香型烏龍茶</strong>：高氨基酸（鮮甜）、低兒茶素氧化（低澀）、保留芳樟醇（花香）</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span><strong>焙香型烏龍茶</strong>：梅納反應產物（焙火香）、茶多酚氧化（厚度）、降低青葉醇（去生青）</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-rose-600 mr-2">•</span>
                        <span><strong>紅茶</strong>：茶黃素與茶紅素（湯色與甜潤）、咖啡因與多酚絡合（爽口）</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span><strong>綠茶</strong>：高氨基酸（鮮爽）、保留葉綠素（翠綠）、順式青葉醇（清新）</span>
                    </li>
                </ul>
            </section>

            <section className="mt-8 p-6 bg-stone-100 rounded-xl">
                <h4 className="font-bold text-stone-900 mb-3">延伸閱讀</h4>
                <p className="text-sm text-stone-600">
                    想深入了解茶葉香氣的化學原理，請參閱「香氣化學」章節。
                    若要學習如何在品鑑中應用這些知識，可前往書院章節的品鑑實務課程。
                </p>
            </section>
        </div >
    );
}
