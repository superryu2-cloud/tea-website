import { useState } from 'react';
import { Leaf, Wind, Droplets, Coffee, Sparkles, Feather, ZoomIn, Flower } from 'lucide-react';
import ImageModal from '../ImageModal';
import FlowerArrangementGenerator from '../../content/ceremony/FlowerArrangementGenerator';

const RitualSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showFlowerAI, setShowFlowerAI] = useState(false);

    const steps = [
        { id: 1, title: "備茶展席", desc: "未曾汲水，先備茶具。必潔必燥，開口以待。靜心備水，安全得宜，調整心情。" },
        { id: 2, title: "調息靜氣", desc: "主客行禮（飲水淨口）。溫壺：左手提煮水器，右手執主沖茶器，左右均衡操作。溫勻杯、溫杯：預測容量。" },
        { id: 3, title: "注水溫潤", desc: "備茶、賞茶、置茶（專注嚴謹）、聞香。注水溫潤：提壺靜沸，注水不急不緩。" },
        { id: 4, title: "靜候觀心", desc: "第一道茶：外在顯現為茶道美感與境界塑造之基礎。清杯：由內而外，井然有序。調息出湯。" },
        { id: 5, title: "出湯布茶", desc: "奉茶行禮：平穩謙和。第二道茶：專注細膩。勻杯奉茶：主客互動之藝術，客人連同杯托往前移動。" },
        { id: 6, title: "靜心品味", desc: "端茶：左手拇指餘指輕托杯托。持杯：右手拇指食指拿杯緣。聞香、品茶（分3小口）、聞杯底。" },
        { id: 7, title: "空白之美", desc: "品茶告一段落，品用白開水以顯現茶味（實品茶湯、虛品茶味），或供應茶食、聽樂、品香。" },
        { id: 8, title: "對話賞壺", desc: "清壺賞葉底：延續之情，不再續沖。賞壺：惜物之情，去葉底注水入壺清理，讓客人賞壺。" },
        { id: 9, title: "一期一會", desc: "歸位：時間掌控。理器：動態之美，如行雲流水。收杯：客人將杯送回。茶席之美：表現與分享。" }
    ];

    const sections = [
        {
            title: "心境 · 準備",
            img: "/images/ceremony/ritual_prep.png",
            imgAlt: "Tea Preparation",
            steps: steps.slice(0, 3),
            theme: "from-stone-50 to-amber-50/30",
            imgPos: "left"
        },
        {
            title: "行茶 · 專注",
            img: "/images/ceremony/ritual_pour.png",
            imgAlt: "Pouring Tea",
            steps: steps.slice(3, 6),
            theme: "from-white to-stone-50",
            imgPos: "right"
        },
        {
            title: "品味 · 餘韻",
            img: "/images/ceremony/ritual_taste.png",
            imgAlt: "Tasting Tea",
            steps: steps.slice(6, 9),
            theme: "from-stone-50 to-emerald-50/20",
            imgPos: "left"
        }
    ];

    return (
        <div className="w-full relative overflow-hidden rounded-[2rem] border border-stone-200 shadow-2xl bg-[#FCFAF7]">
            {showFlowerAI && <FlowerArrangementGenerator onClose={() => setShowFlowerAI(false)} />}

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('/images/texture-paper.png')" }}></div>

            {/* Main Header */}
            <div className="relative z-10 pt-16 pb-12 px-6 text-center">
                <div className="flex justify-center gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-stone-800 text-stone-100 text-base tracking-[0.2em] font-medium shadow-lg">
                        <Sparkles size={14} className="text-amber-400" />
                        <span>RITUAL FLOW</span>
                        <Sparkles size={14} className="text-amber-400" />
                    </div>
                </div>
                <h4 className="text-4xl md:text-5xl font-bold text-stone-800 font-serif mb-4">
                    事茶儀軌 · 九式
                </h4>
                <p className="text-[19px] text-stone-600 font-medium max-w-2xl mx-auto mb-8">
                    以步驟承載心境，讓每一道動作都帶著安定的節奏
                </p>

                <button
                    onClick={() => setShowFlowerAI(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors font-bold text-sm"
                >
                    <Flower size={16} />
                    <span>茶席插花 AI 助手</span>
                </button>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8"></div>
            </div>

            {/* Content Groups */}
            <div className="relative z-10 max-w-7xl mx-auto pb-16 px-4 md:px-8 space-y-24">
                {sections.map((section, idx) => (
                    <div key={idx} className={`flex flex-col ${section.imgPos === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative group cursor-zoom-in" onClick={() => setSelectedImage({ src: section.img, alt: section.title })}>
                            <div className="absolute inset-0 bg-stone-900/5 rounded-3xl transform rotate-3 transition-transform duration-500 group-hover:rotate-1"></div>
                            <div className="absolute inset-0 bg-stone-900/5 rounded-3xl transform -rotate-2 transition-transform duration-500 group-hover:-rotate-1"></div>
                            <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white aspect-[4/3]">
                                <img
                                    src={section.img}
                                    alt={section.imgAlt}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 text-white text-shadow-lg">
                                    <div className="text-base font-bold tracking-widest uppercase mb-1 opacity-90">Phase 0{idx + 1}</div>
                                    <div className="text-3xl font-serif font-bold">{section.title}</div>
                                </div>
                                {/* Zoom Hint */}
                                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md rounded-full p-2 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ZoomIn size={20} />
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            {section.steps.map((step) => (
                                <div key={step.id} className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 group">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center font-serif text-xl font-bold text-stone-700 group-hover:bg-amber-100 group-hover:text-amber-800 group-hover:border-amber-200 transition-colors">
                                                {step.id}
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-bold text-stone-900 mb-2 font-serif group-hover:text-amber-800 transition-colors">
                                                {step.title}
                                            </h5>
                                            <p className="text-[17px] font-medium text-stone-600 leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Decoration */}
                                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                        <Leaf size={48} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Quote */}
            <div className="relative bg-stone-900 py-16 px-6 text-center mt-12">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/ceremony/ritual_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <Feather size={32} className="text-amber-500 mx-auto mb-6 opacity-80" />
                    <p className="text-xl md:text-2xl font-serif leading-loose text-stone-200 italic mb-6">
                        「形而上者謂之道，形而下者謂之器。」
                    </p>
                    <div className="inline-block border-t border-b border-stone-700 py-3 px-8">
                        <span className="text-base md:text-[17px] text-amber-200/80 tracking-[0.2em] uppercase font-bold">
                            道器並用 · 由藝入道 · 用功於生命本身
                        </span>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                src={selectedImage?.src}
                alt={selectedImage?.alt}
            />
        </div>
    );
};

export default RitualSection;
