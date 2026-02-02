import React, { useMemo } from 'react';
import { Wind, Coffee, Zap, Droplets, Sun, Cherry, Flame } from 'lucide-react';

const FlavorCompassWidget = ({ oxidation, setOxidation, roasting, setRoasting }) => {

    // Logic to calculate flavor scores based on oxidation and roasting
    const flavorProfile = useMemo(() => {
        // Normalize 0-100 to 0-1
        const ox = oxidation / 100;
        const roast = roasting / 100;

        return {
            floral: Math.max(0, 100 * (1 - Math.abs(ox - 0.25) * 4) * (1 - roast)),
            fruity: Math.max(0, 100 * (1 - Math.abs(ox - 0.6) * 2) * (1 - roast * 0.5)),
            nutty: Math.max(0, 100 * roast * (1 - Math.abs(ox - 0.5))),
            woody: Math.max(0, 100 * roast * roast * 1.2),
            fresh: Math.max(0, 100 * (1 - ox) * (1 - roast)),
            honey: Math.max(0, 100 * ox * ox * (1 - roast))
        };
    }, [oxidation, roasting]);

    const getMatchedTea = () => {
        if (oxidation < 15 && roasting < 15) return { name: '碧螺春 (綠茶)', color: 'text-green-600' };
        if (oxidation < 25 && roasting < 20) return { name: '文山包種 (輕發酵)', color: 'text-emerald-500' };
        if (oxidation > 20 && oxidation < 40 && roasting < 30) return { name: '高山烏龍', color: 'text-teal-600' };
        if (oxidation > 30 && oxidation < 60 && roasting > 40 && roasting < 70) return { name: '凍頂烏龍', color: 'text-amber-700' };
        if (roasting > 75) return { name: '木柵鐵觀音 (重焙火)', color: 'text-stone-800' };
        if (oxidation > 70 && oxidation < 90 && roasting < 30) return { name: '東方美人', color: 'text-rose-600' };
        if (oxidation > 85) return { name: '紅茶系列', color: 'text-red-700' };
        return { name: '特色風味茶', color: 'text-stone-500' };
    };

    const matchedTea = getMatchedTea();

    // Radar Chart Points Calculation
    const dimensions = [
        { key: 'floral', label: '花香', icon: <Sun size={12} /> },
        { key: 'fruity', label: '果香', icon: <Cherry size={12} /> },
        { key: 'honey', label: '蜜香', icon: <Droplets size={12} /> },
        { key: 'woody', label: '木質', icon: <Coffee size={12} /> },
        { key: 'nutty', label: '堅果', icon: <Zap size={12} /> },
        { key: 'fresh', label: '清爽', icon: <Wind size={12} /> },
    ];

    const centerX = 100;
    const centerY = 100;
    const radius = 70;

    const points = dimensions.map((d, i) => {
        const angle = (Math.PI * 2 * i) / dimensions.length - Math.PI / 2;
        const value = flavorProfile[d.key] / 100;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');

    const gridPolygons = [0.2, 0.4, 0.6, 0.8, 1].map(r => {
        return dimensions.map((_, i) => {
            const angle = (Math.PI * 2 * i) / dimensions.length - Math.PI / 2;
            const x = centerX + radius * r * Math.cos(angle);
            const y = centerY + radius * r * Math.sin(angle);
            return `${x},${y}`;
        }).join(' ');
    });

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {/* Radar Chart Display */}
            <div className="relative flex justify-center items-center bg-stone-50 rounded-2xl p-4 border border-stone-100 shadow-inner overflow-hidden">
                <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-sm">
                    {/* Grid */}
                    {gridPolygons.map((poly, i) => (
                        <polygon key={i} points={poly} fill="none" stroke="#e7e5e4" strokeWidth="1" />
                    ))}
                    {/* Axes */}
                    {dimensions.map((_, i) => {
                        const angle = (Math.PI * 2 * i) / dimensions.length - Math.PI / 2;
                        return (
                            <line
                                key={i}
                                x1={centerX} y1={centerY}
                                x2={centerX + radius * Math.cos(angle)}
                                y2={centerY + radius * Math.sin(angle)}
                                stroke="#e7e5e4" strokeWidth="1"
                            />
                        );
                    })}
                    {/* Flavor Area */}
                    <polygon
                        points={points}
                        fill="rgba(5, 150, 105, 0.2)"
                        stroke="#059669"
                        strokeWidth="2"
                        className="transition-all duration-500 ease-out"
                    />
                    {/* Points */}
                    {dimensions.map((d, i) => {
                        const angle = (Math.PI * 2 * i) / dimensions.length - Math.PI / 2;
                        const value = flavorProfile[d.key] / 100;
                        const x = centerX + radius * value * Math.cos(angle);
                        const y = centerY + radius * value * Math.sin(angle);
                        return (
                            <circle key={i} cx={x} cy={y} r="3" fill="#059669" className="transition-all duration-500 ease-out" />
                        );
                    })}
                </svg>

                {/* Dimension Labels */}
                {dimensions.map((d, i) => {
                    const angle = (Math.PI * 2 * i) / dimensions.length - Math.PI / 2;
                    const x = centerX + (radius + 18) * Math.cos(angle);
                    const y = centerY + (radius + 18) * Math.sin(angle);
                    return (
                        <div
                            key={i}
                            className="absolute text-[10px] font-bold text-stone-400 flex flex-col items-center leading-none"
                            style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}
                        >
                            <span className="mb-0.5">{d.icon}</span>
                            {d.label}
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="space-y-6 px-2">
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-stone-400">
                        <span className="flex items-center gap-1.5"><Droplets size={12} className="text-emerald-500" /> 發酵程度</span>
                        <span className="text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full">{oxidation}%</span>
                    </div>
                    <div className="pt-1 pb-2">
                        <input
                            type="range" min="0" max="100" value={oxidation}
                            onChange={(e) => setOxidation(parseInt(e.target.value))}
                            className="custom-range w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-stone-400">
                        <span className="flex items-center gap-1.5"><Flame size={12} className="text-orange-500" /> 烘焙程度</span>
                        <span className="text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full">{roasting}%</span>
                    </div>
                    <div className="pt-1 pb-2">
                        <input
                            type="range" min="0" max="100" value={roasting}
                            onChange={(e) => setRoasting(parseInt(e.target.value))}
                            className="custom-range w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-600 hover:accent-orange-700"
                        />
                    </div>
                </div>
            </div>

            {/* Insight */}
            <div className="mt-2 p-3 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-between group">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">風味模擬匹配</span>
                    <span className={`text-sm font-black transition-colors ${matchedTea.color}`}>{matchedTea.name}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-300 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                    <Coffee size={16} />
                </div>
            </div>
        </div>
    );
};

export default FlavorCompassWidget;
