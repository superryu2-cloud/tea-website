import React, { useState } from 'react';
import { X, MapPin, Feather, Mountain, Cloud, Droplets, Sun } from 'lucide-react';

const REGION_DATA = {
    north: {
        id: 'north',
        title: '北區茶區 (North)',
        sub: '文山‧桃竹苗',
        description: '台灣茶葉的發源地之一，以條索狀包種茶與獨特的東方美人聞名。氣候濕潤多雨，適合茶樹生長。',
        teas: [
            { name: '文山包種', feature: '清花香', desc: '發酵度輕，香氣如蘭，素有「北包種」之美譽。' },
            { name: '東方美人', feature: '蜂蜜果香', desc: '經小綠葉蟬叮咬，具獨特熟果蜜香，白毫顯著。' },
            { name: '鐵觀音', feature: '弱果酸、焙火韻', desc: '木柵特產，具獨特「觀音韻」，湯色琥珀。' }
        ],
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200'
    },
    central: {
        id: 'central',
        title: '中區茶區 (Central)',
        sub: '南投‧台中',
        description: '台灣產量最大的核心茶區，地形多變，從丘陵到高山，孕育出凍頂烏龍與日月潭紅茶等經典名茶。',
        teas: [
            { name: '凍頂烏龍', feature: '焙火香、甘醇', desc: '發酵與焙火並重，強調耐泡與喉韻，「南凍頂」之名。' },
            { name: '日月潭紅茶', feature: '薄荷、肉桂香', desc: '台茶18號(紅玉)為代表，具獨特收斂性與強勁香氣。' },
            { name: '高山烏龍', feature: '雲霧氣、冷香l', desc: '梨山、杉林溪等產區，日夜溫差大，茶質厚實。' }
        ],
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-200'
    },
    south: {
        id: 'south',
        title: '南區茶區 (South)',
        sub: '嘉義‧高雄',
        description: '以阿里山山脈為核心，高海拔與雲霧繚繞的環境，使此區成為頂級高山茶的重要指標。',
        teas: [
            { name: '阿里山烏龍', feature: '高雅花香', desc: '聞名國際，茶湯金黃透亮，滋味甘潤順口。' },
            { name: '金萱茶', feature: '奶香', desc: '以阿里山產區最為出名，帶有天然淡淡奶香。' }
        ],
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200'
    },
    east: {
        id: 'east',
        title: '東區茶區 (East)',
        sub: '花蓮‧台東',
        description: '縱谷平原與海岸山脈的純淨風土，造就了蜜香系列與紅烏龍等具備熱帶風情的新興特色茶。',
        teas: [
            { name: '蜜香紅茶', feature: '蜜甜香', desc: '舞鶴台地代表，蟲害轉化為極致蜜味。' },
            { name: '紅烏龍', feature: '熟果香、甘甜', desc: '發酵度重，結合烏龍與紅茶特色，冷熱泡皆宜。' }
        ],
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-200'
    }
};

export default function TaiwanTeaMap() {
    const [activeRegion, setActiveRegion] = useState(null);
    const [hoveredRegion, setHoveredRegion] = useState(null);

    return (
        <div className="relative w-full min-h-[600px] md:min-h-[800px] bg-gradient-to-br from-stone-50 to-[#e8e4dc]/30 rounded-[3rem] p-8 md:p-12 overflow-hidden border border-stone-100 shadow-inner flex flex-col md:flex-row items-center justify-center gap-12">

            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Map Container */}
            <div className="relative w-full max-w-md aspect-[3/5] flex-shrink-0 z-10 perspective-1000">
                <h3 className="absolute -top-12 left-1/2 -translate-x-1/2 text-2xl font-serif font-bold text-stone-800 tracking-widest whitespace-nowrap">
                    台灣茶產區分布
                </h3>

                {/* Simple SVG Map of Taiwan (Stylized) */}
                <svg
                    viewBox="0 0 400 800"
                    className="w-full h-full drop-shadow-2xl tea-map-svg"
                    style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}
                >
                    {/* North Region */}
                    <path
                        d="M260,60 C290,80 300,100 290,120 C280,140 250,150 210,140 C170,130 150,110 160,80 C180,50 230,40 260,60 Z"
                        fill={hoveredRegion === 'north' || activeRegion === 'north' ? '#10b981' : '#34d399'}
                        className="transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:brightness-110"
                        onMouseEnter={() => setHoveredRegion('north')}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setActiveRegion('north')}
                        stroke="white"
                        strokeWidth="2"
                    />
                    <text x="240" y="100" fill="white" fontSize="16" fontWeight="bold" pointerEvents="none" className="select-none">北區</text>

                    {/* Central Region */}
                    <path
                        d="M160,80 C150,110 170,130 210,140 C250,150 210,250 160,280 C110,250 90,180 110,130 C120,100 160,80 160,80 Z"
                        fill={hoveredRegion === 'central' || activeRegion === 'central' ? '#d97706' : '#fbbf24'}
                        className="transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:brightness-110"
                        onMouseEnter={() => setHoveredRegion('central')}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setActiveRegion('central')}
                        stroke="white"
                        strokeWidth="2"
                    />
                    <text x="150" y="200" fill="white" fontSize="16" fontWeight="bold" pointerEvents="none" className="select-none">中區</text>

                    {/* South Region */}
                    <path
                        d="M160,280 C210,250 180,350 160,400 C140,420 120,380 110,350 C100,320 130,300 160,280 Z"
                        fill={hoveredRegion === 'south' || activeRegion === 'south' ? '#2563eb' : '#60a5fa'}
                        className="transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:brightness-110"
                        onMouseEnter={() => setHoveredRegion('south')}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setActiveRegion('south')}
                        stroke="white"
                        strokeWidth="2"
                    />
                    <text x="140" y="340" fill="white" fontSize="16" fontWeight="bold" pointerEvents="none" className="select-none">南區</text>

                    {/* East Region */}
                    <path
                        d="M290,120 C300,100 320,150 280,350 C260,400 240,380 210,250 C250,150 280,140 290,120 Z"
                        fill={hoveredRegion === 'east' || activeRegion === 'east' ? '#e11d48' : '#fb7185'}
                        className="transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:brightness-110"
                        onMouseEnter={() => setHoveredRegion('east')}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setActiveRegion('east')}
                        stroke="white"
                        strokeWidth="2"
                    />
                    <text x="260" y="250" fill="white" fontSize="16" fontWeight="bold" pointerEvents="none" className="select-none">東區</text>

                    {/* Leaf Decoration */}
                    <circle cx="200" cy="500" r="10" fill="#e5e7eb" />
                </svg>

                {/* Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 text-sm animate-pulse flex items-center gap-2">
                    <span className="bg-stone-200 rounded-full p-1"><MapPin size={12} /></span>
                    點擊區塊查看詳情
                </div>
            </div>

            {/* Info Panel / Modal Modal-like appearance on desktop, bottom sheet on mobile */}
            <div className={`
        fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm transition-opacity duration-300
        ${activeRegion ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
                <div
                    className={`
             bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500
             ${activeRegion ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}
           `}
                >
                    {activeRegion && (
                        <div className="flex flex-col h-full max-h-[85vh]">
                            {/* Header */}
                            <div className={`p-6 ${REGION_DATA[activeRegion].bg} ${REGION_DATA[activeRegion].color} flex items-start justify-between border-b ${REGION_DATA[activeRegion].border}`}>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white rounded-full shadow-sm">
                                        {activeRegion === 'north' && <Cloud size={24} />}
                                        {activeRegion === 'central' && <Mountain size={24} />}
                                        {activeRegion === 'south' && <Droplets size={24} />}
                                        {activeRegion === 'east' && <Sun size={24} />}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{REGION_DATA[activeRegion].title}</h2>
                                        <p className="text-stone-600 font-medium opacity-80">{REGION_DATA[activeRegion].sub}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setActiveRegion(null)}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors text-stone-500"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8 overflow-y-auto">
                                <p className="text-lg text-stone-700 leading-relaxed mb-8">
                                    {REGION_DATA[activeRegion].description}
                                </p>

                                <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4">特色茶款 Featured Teas</h4>
                                <div className="grid gap-4">
                                    {REGION_DATA[activeRegion].teas.map((tea, idx) => (
                                        <div key={idx} className="group p-5 rounded-2xl border border-stone-100 bg-stone-50 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="font-bold text-stone-900 text-lg group-hover:text-emerald-800">{tea.name}</h5>
                                                <span className="text-xs font-bold px-2 py-1 bg-white rounded-md text-stone-500 shadow-sm border border-stone-100">{tea.feature}</span>
                                            </div>
                                            <p className="text-stone-600 text-sm leading-relaxed">{tea.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-stone-50 border-t border-stone-100 text-center text-sm text-stone-400">
                                點擊外部或 X 關閉
                            </div>
                        </div>
                    )}
                </div>
                {/* Backdroop click closed */}
                <div className="absolute inset-0 -z-10" onClick={() => setActiveRegion(null)} />
            </div>

        </div>
    );
}
