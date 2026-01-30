import React from 'react';
import { MapPin, Mountain, Leaf, Wind, Feather, Droplets } from 'lucide-react';

export default function OolongRegionDiagram() {
    return (
        <div className="w-full py-12 px-4 md:px-8 bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden relative selection:bg-cyan-100">

            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-2xl font-black text-stone-900 tracking-tight flex items-center justify-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-900 text-cyan-50 flex items-center justify-center">
                            <MapPin size={18} />
                        </div>
                        四大烏龍產區
                    </h3>
                    <p className="text-stone-500 mt-2 text-sm font-medium tracking-widest uppercase">The Four Major Regions of Oolong</p>
                </div>

                {/* Diagonal Layout for Desktop */}
                <div className="relative">

                    {/* Center Node */}
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center w-32 h-32 rounded-full bg-cyan-900 text-white shadow-xl shadow-cyan-900/20 ring-8 ring-stone-50">
                        <span className="text-5xl font-serif font-black mb-1">青</span>
                        <span className="text-[10px] font-bold tracking-widest opacity-80 uppercase">Cyan</span>
                    </div>

                    {/* Connecting Lines (Desktop) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" style={{ minHeight: '600px' }}>
                        {/* Top Left to Center */}
                        <path d="M 250 150 L 50% 50%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" />
                        {/* Top Right to Center */}
                        <path d="M calc(100% - 250px) 150 L 50% 50%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" />
                        {/* Bottom Left to Center */}
                        <path d="M 250 calc(100% - 150px) L 50% 50%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" />
                        {/* Bottom Right to Center */}
                        <path d="M calc(100% - 250px) calc(100% - 150px) L 50% 50%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" />
                    </svg>

                    {/* Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-24 md:min-h-[600px]">

                        {/* 1. Guangdong (Top Left) */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-right md:pr-16 relative group">
                            <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2 w-4 h-4 rounded-full bg-cyan-600 border-4 border-stone-50 shadow-sm z-10 hidden md:block"></div>

                            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm hover:border-amber-200 group-hover:-translate-y-1">
                                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold">
                                    <Wind size={14} /> 廣東烏龍茶
                                </div>
                                <h4 className="text-xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-100">鳳凰單叢</h4>

                                <div className="space-y-2">
                                    <div className="text-sm font-bold text-stone-700">代表品種香型：</div>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                                        {['宋種', '黃枝香', '鴨屎香', '芝蘭香', '桂花香'].map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-stone-50 border border-stone-100 text-stone-600 rounded text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Taiwan (Top Right) */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left md:pl-16 relative group">
                            <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-600 border-4 border-stone-50 shadow-sm z-10 hidden md:block"></div>

                            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm hover:border-emerald-200 group-hover:-translate-y-1">
                                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">
                                    <Leaf size={14} /> 台灣烏龍茶
                                </div>

                                <ul className="space-y-2 text-stone-700 text-base font-medium">
                                    {[
                                        { name: '包種茶', desc: '清新幽雅' },
                                        { name: '高山烏龍', desc: '山頭氣韻' },
                                        { name: '紅水烏龍', desc: '傳統風味' },
                                        { name: '東方美人', desc: '蜜香著涎' },
                                        { name: '紅烏龍', desc: '重發酵' }
                                    ].map(item => (
                                        <li key={item.name} className="flex items-center justify-center md:justify-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                                            <span className="font-bold text-stone-800">{item.name}</span>
                                            {/* <span className="text-stone-400 text-xs">- {item.desc}</span> */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 3. Minnan (Bottom Left) */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-right md:pr-16 relative group">
                            <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2 w-4 h-4 rounded-full bg-cyan-600 border-4 border-stone-50 shadow-sm z-10 hidden md:block"></div>

                            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm hover:border-teal-200 group-hover:-translate-y-1">
                                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold">
                                    <Feather size={14} /> 閩南烏龍茶
                                </div>

                                <ul className="space-y-2 text-stone-700 text-base font-medium">
                                    <li className="font-bold text-teal-900 border-b border-stone-50 pb-1 mb-2">鐵觀音 (Tie Guan Yin)</li>
                                    {[
                                        '本山', '黃旦 (黃金桂)', '毛蟹', '白芽奇蘭'
                                    ].map(name => (
                                        <li key={name} className="flex items-center justify-center md:justify-end gap-2 text-stone-600">
                                            <span>{name}</span>
                                            <span className="w-1.5 h-1.5 bg-teal-200 rounded-full"></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 4. Minbei (Bottom Right) */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left md:pl-16 relative group">
                            <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-600 border-4 border-stone-50 shadow-sm z-10 hidden md:block"></div>

                            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm hover:border-red-200 group-hover:-translate-y-1">
                                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-bold">
                                    <Mountain size={14} /> 閩北烏龍茶
                                </div>

                                <div className="space-y-4 text-left">
                                    <div>
                                        <div className="text-sm font-black text-stone-900 mb-1">武夷岩茶・大紅袍</div>
                                        <div className="text-xs text-stone-500">Wuyi Rock Tea</div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold text-red-800 bg-red-50 px-2 py-1 rounded inline-block mb-2">四大名叢</div>
                                        <div className="text-base text-stone-600 leading-relaxed">
                                            鐵羅漢、水金龜、白雞冠、半天腰
                                            <span className="text-stone-400 block mt-1">(以及 肉桂、水仙、奇種/菜茶)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
