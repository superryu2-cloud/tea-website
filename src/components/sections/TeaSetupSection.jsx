import { useState, useMemo, useEffect } from 'react';
import { RotateCcw, Layout, Move, HelpCircle, Info, ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from 'lucide-react';
import DraggableWrapper from '../DraggableWrapper';

const TeaSetupDiagram = () => {
    return (
        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-lg relative overflow-hidden mb-12">
            <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                <Layout className="mr-3 text-amber-600" />
                標準茶席配置圖解
            </h4>
            <p className="text-stone-500 mb-8 max-w-2xl">
                此配置為經典的「乾泡法」佈局參考。留意「天地」留白與器具的主從關係，營造和諧的品茗空間。
            </p>

            {/* Diagram Container */}
            <div className="relative w-full aspect-[16/9] bg-[#d9cdbf] rounded-xl shadow-inner border border-[#c5b5a5] overflow-hidden select-none">
                {/* Table Texture */}
                <div className="absolute inset-0 opacity-60"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.03) 20px), repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(0,0,0,0.02) 50px)',
                        backgroundSize: '100% 100%'
                    }}>
                </div>

                {/* Runner (席方) */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[50%] bg-[#f5f2f0] shadow-sm flex items-center justify-end px-4">
                    <span className="text-stone-300 font-serif writing-vertical-rl text-base tracking-widest hidden md:block">席方</span>
                </div>

                {/* --- Annotations Layer (Bottom) --- */}
                {/* Earth (地) */}
                <div className="absolute bottom-[5%] left-[65%] flex flex-col items-center opacity-70">
                    <span className="text-stone-600 font-serif font-bold mb-1">地</span>
                    <div className="h-8 border-l border-stone-600"></div>
                </div>
                {/* Sky (天) */}
                <div className="absolute top-[5%] left-[65%] flex flex-col-reverse items-center opacity-70">
                    <span className="text-stone-600 font-serif font-bold mt-1">天</span>
                    <div className="h-8 border-l border-stone-600"></div>
                </div>
                {/* Finger Length */}
                <div className="absolute bottom-2 right-10 flex items-center gap-2 opacity-70">
                    <ArrowDown size={14} className="text-stone-600" />
                    <span className="text-stone-600 font-serif text-base">一食指長</span>
                </div>

                {/* --- Items Layer --- */}

                {/* Vase (Left Scene) */}
                <div className="absolute top-[30%] left-[8%] w-[10%] aspect-[1/2]">
                    <img src="/images/ceremony/tea_item_vase.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" alt="Vase" />
                    <svg className="absolute top-1/2 -right-8 w-8 h-8 text-stone-500" viewBox="0 0 24 24">
                        <path d="M0 12 H24" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                    <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-sm font-serif text-stone-600 bg-white/50 px-1">前景(側景)</span>
                </div>

                {/* Caddy */}
                <div className="absolute top-[35%] left-[22%] w-[8%] aspect-square">
                    <img src="/images/ceremony/tea_item_caddy.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" alt="Caddy" />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-serif text-stone-600">茶倉</div>
                </div>

                {/* Teapot & Boat (Center) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16%] aspect-square group">
                    {/* Boat (CSS) */}
                    <div className="absolute inset-2 bg-[#4a3b2a] rounded-full opacity-90 shadow-lg"></div>
                    <img src="/images/ceremony/tea_item_pot.png" className="w-full h-full object-contain relative z-10 mix-blend-multiply filter sepia-[.1] contrast-100 drop-shadow-xl" alt="Teapot" />

                    {/* Label */}
                    <div className="absolute -right-8 top-1/2 text-sm font-serif text-stone-600 flex items-center">
                        <div className="w-4 h-[1px] bg-stone-400 mr-1"></div>
                        茶壺
                    </div>
                    <div className="absolute -right-8 bottom-0 text-sm font-serif text-stone-600 flex items-center">
                        <div className="w-4 h-[1px] bg-stone-400 mr-1"></div>
                        壺盛
                    </div>
                </div>

                {/* Cups (Arc) */}
                <div className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[40%] h-[20%]">
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                        // Simple arc positioning logic
                        const offset = (i - 3.5) * 12; // Spread
                        // Using the decor sprite crop for cup, or just a nice CSS circle if sprite fails
                        // Since we don't have a perfect single cup image, using a high-quality CSS simulation + texture
                        return (
                            <div key={i}
                                className="absolute top-0 w-[10%] aspect-square rounded-full bg-[#fdfbf7] shadow-md border border-stone-200/50 flex items-center justify-center transform hover:-translate-y-1 transition-transform"
                                style={{ left: `${50 + offset}%`, top: `${Math.abs(i - 3.5) * 5}%` }}
                            >
                                <div className="w-[70%] h-[70%] rounded-full bg-stone-100 shadow-inner opacity-80"></div>
                                {/* Number */}
                                <span className="absolute -top-5 text-[10px] text-stone-400 font-serif">{i}</span>
                            </div>
                        );
                    })}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-serif text-stone-600 text-center">
                        茶杯<br />
                        <span className="text-[10px] text-stone-400">(由外而內)</span>
                    </div>
                </div>

                {/* Pitcher */}
                <div className="absolute top-[40%] left-[65%] w-[8%] aspect-square">
                    <img src="/images/ceremony/tea_item_pitcher.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" alt="Pitcher" />
                    <div className="absolute -right-8 top-1/2 text-sm font-serif text-stone-600 flex items-center">
                        <div className="w-4 h-[1px] bg-stone-400 mr-1"></div>
                        勻杯
                    </div>
                </div>

                {/* Scoop (Tea Tools) */}
                <div className="absolute top-[45%] left-[75%] w-[10%] h-[15%]">
                    <img src="/images/ceremony/tea_item_scoop.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm rotate-12" alt="Scoop" />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-serif text-stone-600 text-center">
                        茶則<br />茶匙
                    </div>
                </div>

                {/* Bowl */}
                <div className="absolute top-[42%] left-[85%] w-[12%] aspect-square">
                    <img src="/images/ceremony/tea_item_bowl.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg" alt="Bowl" />
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-serif text-stone-600/30">
                        水盂
                    </div>
                </div>

                {/* Towel */}
                <div className="absolute top-[65%] left-[38%] w-[6%] aspect-square">
                    <img src="/images/ceremony/tea_item_towel.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm opacity-90" alt="Towel" />
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm font-serif text-stone-600">茶巾</div>
                </div>

                {/* Lid Rest */}
                <div className="absolute top-[65%] left-[32%] w-[4%] aspect-square">
                    <img src="/images/ceremony/tea_item_lidrest.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm" alt="LidRest" />
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm font-serif text-stone-600">蓋置</div>
                </div>
            </div>

            {/* Legend / Flow */}
            <div className="mt-4 flex flex-wrap justify-between gap-4 text-sm lg:text-base text-stone-600 bg-stone-100/50 p-4 rounded-xl border border-stone-200/50">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-800">奉茶順序：</span>
                    <span>3 → 2 → 1 → 6 → 5 → 4 (由外而內)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-800">收杯順序：</span>
                    <span>1 → 2 → 3 → 5 → 6 → 4 (由內而外)</span>
                </div>
            </div>
        </div>
    );
};

const TeaSetupSection = () => {
    const [deskLayoutSeed, setDeskLayoutSeed] = useState(0);

    const resetDeskLayout = () => {
        setDeskLayoutSeed((prev) => prev + 1);
    };

    const deskItems = useMemo(() => ([
        // Background Elements
        {
            id: 'tray',
            label: '席方',
            className: 'w-[800px] h-48 rounded-sm bg-[#e8e6e3] shadow-inner border-t border-b border-stone-300/50 z-0',
            textClass: 'text-stone-400',
            x: 0,
            y: 190,
            isBackground: true
        },
        // Main Tea Ware
        {
            id: 'stage',
            label: '壺承',
            className: 'w-48 h-48 rounded-full bg-[#2c241b] border-4 border-[#3d3226] shadow-2xl z-10 flex items-center justify-center',
            textClass: 'text-[#8a7a6b] text-[10px] mt-28',
            x: 350,
            y: 150,
        },
        {
            id: 'pot',
            label: '茶壺',
            className: 'w-32 h-32 z-20',
            style: {
                backgroundImage: 'url(/images/ceremony/tea_item_pot.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                filter: 'sepia(0.1) contrast(1.1)',
                mixBlendMode: 'multiply'
            },
            textClass: 'text-stone-600 translate-y-16',
            x: 410,
            y: 180,
        },
        {
            id: 'fair',
            label: '勻杯',
            className: 'w-24 h-24 z-20',
            style: {
                backgroundImage: 'url(/images/ceremony/tea_item_pitcher.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply'
            },
            textClass: 'text-stone-600 translate-y-12',
            x: 580,
            y: 190,
        },
        // Accessories
        {
            id: 'waste',
            label: '水盂',
            className: 'w-36 h-36 z-10',
            style: {
                backgroundImage: 'url(/images/ceremony/tea_item_bowl.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply'
            },
            textClass: 'text-stone-500 translate-y-16',
            x: 700,
            y: 300,
        },
        {
            id: 'caddy',
            label: '茶倉',
            className: 'w-24 h-28 z-10',
            style: {
                backgroundImage: 'url(/images/ceremony/tea_item_caddy.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply'
            },
            textClass: 'text-stone-500 translate-y-14',
            x: 150,
            y: 80,
        },
        {
            id: 'cloth',
            label: '茶巾',
            className: 'w-24 h-24 z-10',
            style: {
                backgroundImage: 'url(/images/ceremony/tea_item_towel.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
                opacity: 0.9
            },
            textClass: 'text-stone-500 translate-y-12',
            x: 520,
            y: 350,
        },
        {
            id: 'tools',
            label: '茶則',
            className: 'w-40 h-16 z-10',
            style: {
                backgroundImage: 'url(/images/ceremony/tea_item_scoop.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
                transform: 'rotate(-15deg)'
            },
            textClass: 'text-stone-500 translate-y-8',
            x: 650,
            y: 150,
        },
        {
            id: 'vase',
            label: '花器',
            className: 'w-28 h-48 z-0 origin-bottom',
            style: {
                backgroundImage: 'url(/images/ceremony/tea_item_vase.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply'
            },
            textClass: 'text-stone-500 translate-y-24',
            x: 40,
            y: 60,
        },
        {
            id: 'lid',
            label: '蓋置',
            className: 'w-14 h-14 z-10',
            style: {
                backgroundImage: 'url(/images/ceremony/tea_item_lidrest.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply'
            },
            textClass: 'text-stone-500 translate-y-8',
            x: 300,
            y: 280,
        },
    ]), []);

    const guestCups = useMemo(() => (
        Array.from({ length: 6 }, (_, index) => {
            return {
                id: `guest-${index + 1}`,
                label: `${index + 1}`,
                x: 200 + (index * 60),
                y: 350 + (Math.abs(index - 2.5) * 15),
            };
        })
    ), []);

    return (
        <div className="animate-fadeIn space-y-16">
            {/* Header Section */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-stone-900 aspect-[21/9] md:aspect-[21/8]">
                <img
                    src="/images/ceremony/tea_setup_main.png"
                    alt="Tea Setup Art"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
                <div className="absolute inset-y-0 left-0 p-8 md:p-16 flex flex-col justify-center max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/30 border border-amber-700/50 text-amber-200 text-base tracking-widest uppercase font-medium backdrop-blur-sm mb-6 w-fit">
                        <Layout size={14} />
                        <span>Tea Setup Art</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight mb-6 text-shadow-lg">
                        茶席佈置 · 境隨心轉
                    </h3>
                    <p className="text-[19px] md:text-xl text-stone-200 leading-relaxed font-light">
                        席方之間，自有天地。從選茶到佈局，皆是與內心對話的過程。<br className="hidden md:block" />
                        如舞台般展開，讓品茗成為一場流動的藝術。
                    </p>
                </div>
            </div>

            {/* Steps Guide */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                {/* Visual Step Guide */}
                <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-xl relative overflow-hidden group">
                    {/* ... (Existing Step Content kept same but simplified for brevity in this tool call, assumed preserved in actual file) ... */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
                    <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center relative z-10">
                        <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mr-3 text-base font-bold">01</span>
                        設置茶席之步驟
                    </h4>
                    <div className="relative z-10">
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border-4 border-white">
                            <img src="/images/ceremony/tea_selection.png" alt="Tea Selection Detail" className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <ol className="space-y-6 relative border-l-2 border-stone-100 ml-3 pl-8">
                            <li className="relative">
                                <span className="absolute -left-[2.4rem] top-1 w-4 h-4 rounded-full bg-stone-200 border-2 border-white ring-2 ring-stone-50"></span>
                                <strong className="text-[19px] text-stone-900 block mb-1">選茶</strong>
                                <span className="text-stone-600">決定今日主角。</span>
                            </li>
                            <li className="relative">
                                <span className="absolute -left-[2.4rem] top-1 w-4 h-4 rounded-full bg-stone-200 border-2 border-white ring-2 ring-stone-50"></span>
                                <strong className="text-[19px] text-stone-900 block mb-1">試茶</strong>
                                <span className="text-stone-600 leading-relaxed block">使用鑑定杯，了解其發酵度、苦澀度、香氣、焙火情形。</span>
                            </li>
                            <li className="relative">
                                <span className="absolute -left-[2.4rem] top-1 w-4 h-4 rounded-full bg-stone-200 border-2 border-white ring-2 ring-stone-50"></span>
                                <strong className="text-[19px] text-stone-900 block mb-1">主體部分 (因茶擇器)</strong>
                                <span className="text-stone-600 leading-relaxed block text-base bg-stone-50 p-3 rounded-lg mt-2">決定席方(舞台)、壺承、飲杯、勻杯的搭配。</span>
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Elements Guide */}
                <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-lg relative overflow-hidden">
                    <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center relative z-10">
                        <span className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 flex items-center justify-center mr-3 text-base font-bold">02</span>
                        茶席構成要素
                    </h4>
                    <div className="grid gap-4 relative z-10">
                        {[{ title: "席方", desc: "離桌緣一食指距離。", color: "border-stone-400" },
                        { title: "壺承", desc: "直徑須大於壺，造型如舞台。", color: "border-amber-400" },
                        { title: "勻杯", desc: "斷水須順暢，高度不低於杯。", color: "border-emerald-400" },
                        { title: "水盂", desc: "彈性最大，可依比例調整。", color: "border-blue-400" },
                        { title: "茶巾", desc: "置於事茶者右下壺承45度。", color: "border-purple-400" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center hover:translate-x-2 transition-transform duration-300">
                                <div className={`w-2 h-10 rounded-full mr-4 bg-stone-100 ${item.color.replace('border', 'bg').replace('400', '200')}`}></div>
                                <div><strong className="text-stone-800 text-[19px] block">{item.title}</strong><span className="text-stone-600 text-base">{item.desc}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* NEW DIAGRAM SECTION */}
            <TeaSetupDiagram />

            {/* Interactive Lab */}
            <div className="bg-[#2c241b] text-stone-200 p-6 md:p-10 rounded-[2.5rem] relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
                {/* Wood Texture */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }}></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                    <div>
                        <div className="text-sm uppercase tracking-[0.4em] text-amber-500/80 font-bold mb-2">INTERACTIVE LAB</div>
                        <h4 className="font-bold text-3xl text-amber-50 flex items-center gap-3">
                            <Move size={28} className="text-amber-500" />
                            自由茶席配置
                            <span className="text-base font-normal text-stone-400 bg-black/30 px-3 py-1 rounded-full border border-white/5 ml-2 hidden md:inline-block">Drag & Drop</span>
                        </h4>
                    </div>
                    <div className="flex items-center gap-4">
                        <button type="button" onClick={resetDeskLayout} className="inline-flex items-center gap-2 rounded-full bg-stone-100/10 hover:bg-stone-100/20 active:bg-stone-100/30 px-5 py-2.5 text-base font-bold text-stone-200 transition-all border border-white/10 backdrop-blur-md">
                            <RotateCcw size={16} />重置
                        </button>
                    </div>
                </div>

                {/* Canvas */}
                <div className="relative h-[480px] md:h-[600px] ceremony-desk-canvas rounded-2xl border border-[#4a3b2a] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] overflow-hidden bg-[#d9cdbf]">
                    <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.03) 20px), repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(0,0,0,0.02) 50px)', backgroundSize: '100% 100%' }}></div>
                    <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('/images/texture-paper.png')]"></div>

                    {deskItems.map((item) => (
                        <DraggableWrapper key={`${deskLayoutSeed}-${item.id}`} initialPos={{ x: item.x, y: item.y }}>
                            <div className={`draggable-item relative flex flex-col items-center justify-center text-center group cursor-grab active:cursor-grabbing ${item.className}`} style={item.style}>
                                <div className="drag-handle absolute inset-0"></div>
                                <div className={`absolute -bottom-6 w-max pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[10px] px-2 py-1 rounded-full z-50 ${item.textClass}`} style={{ transform: 'none' }}>{item.label}</div>
                            </div>
                        </DraggableWrapper>
                    ))}

                    {guestCups.map((cup) => (
                        <DraggableWrapper key={`${deskLayoutSeed}-${cup.id}`} initialPos={{ x: cup.x, y: cup.y }}>
                            <div className="draggable-item relative flex flex-col items-center gap-1 group cursor-grab active:cursor-grabbing">
                                <div className="drag-handle absolute inset-0"></div>
                                <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-stone-200 transform transition-transform group-hover:scale-110">
                                    <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-100 shadow-inner opacity-90"></div>
                                    <span className="absolute text-[10px] font-bold text-stone-400 select-none">{cup.label}</span>
                                </div>
                                <div className="absolute -bottom-1 w-8 h-1 bg-black/20 rounded-full blur-[2px]"></div>
                            </div>
                        </DraggableWrapper>
                    ))}
                </div>
                <style jsx>{`
                .ceremony-desk-canvas {
                    box-shadow: inset 0 0 80px rgba(60, 40, 20, 0.4);
                }
            `}</style>
            </div>
        </div>
    );
};

export default TeaSetupSection;
