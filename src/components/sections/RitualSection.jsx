import React from 'react';
import { Leaf } from 'lucide-react';

const RitualSection = () => {
    return (
        <div className="animate-fadeIn w-full relative overflow-hidden rounded-3xl border border-stone-200/50 shadow-2xl">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 opacity-90"
                style={{
                    backgroundImage: "url('/images/ceremony/ritual_bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-stone-50/30 backdrop-blur-[2px] z-0"></div>

            {/* Content Container */}
            <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-4 rounded-full bg-white/70 backdrop-blur-md border border-stone-200/60 text-stone-600 text-xs tracking-[0.2em] font-medium mb-3 shadow-sm">
                        TEA CEREMONY RITUAL
                    </span>
                    <h4 className="text-3xl md:text-4xl font-bold text-stone-800 drop-shadow-sm font-serif">
                        事茶儀軌 · 九式
                    </h4>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "1. 備茶展席", desc: "未曾汲水，先備茶具。必潔必燥，開口以待。靜心備水，安全得宜，調整心情。" },
                        { title: "2. 調息靜氣", desc: "主客行禮（飲水淨口）。溫壺：左手提煮水器，右手執主沖茶器，左右均衡操作。溫勻杯、溫杯：預測容量。" },
                        { title: "3. 注水溫潤", desc: "備茶、賞茶、置茶（專注嚴謹）、聞香。注水溫潤：提壺靜沸，注水不急不緩。" },
                        { title: "4. 靜候觀心", desc: "第一道茶：外在顯現為茶道美感與境界塑造之基礎。清杯：由內而外，井然有序。調息出湯。" },
                        { title: "5. 出湯布茶", desc: "奉茶行禮：平穩謙和。第二道茶：專注細膩。勻杯奉茶：主客互動之藝術，客人連同杯托往前移動。" },
                        { title: "6. 靜心品味", desc: "端茶：左手拇指餘指輕托杯托。持杯：右手拇指食指拿杯緣。聞香、品茶（分3小口）、聞杯底。" },
                        { title: "7. 空白之美", desc: "品茶告一段落，品用白開水以顯現茶味（實品茶湯、虛品茶味），或供應茶食、聽樂、品香。" },
                        { title: "8. 對話賞壺", desc: "清壺賞葉底：延續之情，不再續沖。賞壺：惜物之情，去葉底注水入壺清理，讓客人賞壺。" },
                        { title: "9. 一期一會", desc: "歸位：時間掌控。理器：動態之美，如行雲流水。收杯：客人將杯送回。茶席之美：表現與分享。" }
                    ].map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm hover:shadow-lg hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-serif text-sm border-2 border-stone-100 shadow-md z-10">
                                {idx + 1}
                            </div>
                            <h5 className="text-lg font-bold text-stone-900 mb-3 ml-2 border-b border-stone-300/30 pb-2 inline-block">
                                {step.title.split('. ')[1] || step.title}
                            </h5>
                            <p className="text-sm text-stone-700 leading-relaxed font-medium">
                                {step.desc}
                            </p>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Leaf size={24} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 max-w-2xl mx-auto">
                    <div className="relative bg-stone-900/80 backdrop-blur-sm p-8 rounded-2xl text-center border border-stone-700/50 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                        <p className="relative z-10 text-stone-200 text-lg font-serif italic leading-loose">
                            「形而上者謂之道，形而下者謂之器。」<br />
                            <span className="text-sm text-stone-400 not-italic mt-2 block tracking-widest uppercase">
                                道器並用 · 由藝入道 · 用功於生命本身
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RitualSection;
