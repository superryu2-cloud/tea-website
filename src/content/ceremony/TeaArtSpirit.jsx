import React, { useState } from 'react';
import { Feather, Heart, User, Users, Coffee, X, ZoomIn } from 'lucide-react';
import ImageModal from '../../components/ImageModal';

export default function TeaArtSpirit() {
    const [selectedImage, setSelectedImage] = useState(null);

    const spirits = [
        {
            char: '美',
            title: '美律 · Melody',
            image: '/images/ceremony/spirit_beauty.png',
            icon: Feather,
            color: 'text-rose-700',
            bg: 'bg-rose-50',
            desc: '治茶時態度必須從容，並且連貫而下，能顯示幽雅的旋律美，造成最好的氣氛。',
        },
        {
            char: '健',
            title: '健康 · Vitality',
            image: '/images/ceremony/spirit_health.png',
            icon: Heart,
            color: 'text-emerald-700',
            bg: 'bg-emerald-50',
            desc: '健康是治茶之大本。凡是變質的茶葉及不潔的水均不可飲用。',
        },
        {
            char: '性',
            title: '養性 · Zen',
            image: '/images/ceremony/spirit_zen.png',
            icon: User,
            color: 'text-amber-700',
            bg: 'bg-amber-50',
            desc: '茶的妙用之一在於能「養性」。我們在品茗時，能由清趣中培養靈泉，持之以恆還可以了悟禪理，實為修身最佳之法。',
        },
        {
            char: '倫',
            title: '倫理 · Harmony',
            image: '/images/ceremony/spirit_ethics.png',
            icon: Users,
            color: 'text-sky-700',
            bg: 'bg-sky-50',
            desc: '茶可做為敦睦人際關係的橋樑。古時有臣進貢茶以事君，也有君賜茶以愛臣。就今日觀點而言，茶能使朋友之間暢談更深，也可使親人在飲茶之間促進彼此更濃的情感交流。',
        },
    ];

    return (
        <div className="space-y-16 py-8">
            {/* Header Section */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F7F5F0] border border-[#E6E2D8] p-8 md:p-14 shadow-sm">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-stone-800 rounded-full text-white">
                            <Coffee size={20} />
                        </div>
                        <h4 className="text-[24px] font-black text-stone-900 font-serif tracking-wide">
                            茶藝：生活藝術
                        </h4>
                    </div>

                    <div className="space-y-6 text-stone-700 leading-relaxed text-[17px] font-sans font-medium">
                        <p>
                            因為日本的沿襲，「茶道」幾乎成了日本品茗之道的代稱。中國對此則慣稱為<span className="font-bold text-stone-900 mx-1">「茶藝」</span>，偏重於生活藝術上的享用。
                        </p>
                        <div className="pl-8 border-l-4 border-emerald-600 italic py-4 bg-white/60 rounded-r-2xl text-stone-800 leading-loose text-[17px] font-sans">
                            「一般而言，將茶當做解渴飲料時，稱為『喝茶』；如細細品味，將其當做生活的藝術時，稱為『品茗』；若再探究茶葉品質、沖泡的技術、茶具的鑑賞、品茶的環境及茶在人際間的關係，那就進入『茶藝』的境界了。」
                        </div>
                    </div>
                </div>
                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            </div>

            {/* Core Spirit Grid */}
            <div>
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-sm font-bold tracking-widest mb-4">PHILOSOPHY</span>
                    <h5 className="text-[24px] font-black text-stone-900 mb-6 font-serif">美健性倫 · 茶藝精神</h5>
                    <p className="text-stone-600 text-[17px] font-sans font-medium max-w-3xl mx-auto">
                        國學大師林刑南先生以四個字表達我國的茶藝精神，融合了美學、健康、修身與倫理。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    {spirits.map((item) => (
                        <div
                            key={item.char}
                            className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Area - Uncropped Aspect Ratio - Clickable */}
                            <div
                                className="h-64 md:h-72 w-full overflow-hidden bg-stone-100 cursor-zoom-in relative group"
                                onClick={() => setSelectedImage({ src: item.image, alt: `${item.char} · ${item.title}` })}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                                        <ZoomIn size={32} />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                                    <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="text-5xl font-black font-serif opacity-90">{item.char}</div>
                                        </div>
                                        <div className="h-1 w-12 bg-white/80 rounded-full mb-3"></div>
                                        <h6 className="text-[22px] font-bold font-serif tracking-wide text-white/95">{item.title}</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-8 md:p-10 flex-1 flex flex-col bg-[#FFFEFA]">
                                <div className="mb-4">
                                    <item.icon className={`w-8 h-8 ${item.color} opacity-80`} />
                                </div>
                                <p className="text-stone-700 text-[17px] font-sans leading-loose font-medium opacity-90">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conclusion */}
            <div className="relative bg-stone-900 rounded-[2.5rem] p-10 md:p-14 text-center overflow-hidden shadow-2xl">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="mb-8 flex justify-center">
                        <Coffee className="text-emerald-400 w-10 h-10 opacity-80" />
                    </div>
                    <p className="text-stone-200 leading-loose text-[17px] font-sans font-medium tracking-wide">
                        「中華民族是自然謙合、不重形式的... 愜意、拙樸、自然也正是中國茶藝的真髓。」
                    </p>
                    <div className="mt-8 text-stone-400 text-[15px] font-sans leading-relaxed max-w-3xl mx-auto border-t border-stone-700 pt-8">
                        人民將飲茶融入生活的一部份，沒有什麼儀式及宗教色彩；或在茶內加蔥、薑、棗，或調以橘皮、茉萸、薄荷，隨興之所至，愛怎麼喝就怎麼喝，注重情趣的配合，所以一直沒有一套有系統的體系沿傳下來。
                    </div>
                </div>
                {/* Background Texture */}
                <img
                    src="/images/ceremony/spirit_zen.png"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay blur-sm"
                    alt="Background Texture"
                />
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
}
