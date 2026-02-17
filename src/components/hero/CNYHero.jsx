import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const CNY_DATA = [
    {
        day: '除夕',
        title: '除夕圍爐',
        desc: '金馬迎春，圍爐團圓。以一壺好茶，溫暖相聚時刻。',
        blessing: '去歲千般皆如願，今年萬事定稱心。',
        image: '/images/cny_chuxi_greeting.png',
        theme: 'from-red-900 to-red-950'
    },
    {
        day: '初一',
        title: '初一走春',
        desc: '馬年行大運，春暖花開。品茗迎新，茶香滿乾坤。',
        blessing: '韶華常在，明年依舊，相與笑春風。',
        image: '/images/cny_chuyi_greeting.png',
        theme: 'from-amber-800 to-amber-950'
    },
    {
        day: '初二',
        title: '初二回娘家',
        desc: '茶禮寄情，溫馨重逢。帶著上好的臺灣茶，分享回家的喜悅。',
        blessing: '年年約，常相見，但無事，身強健。',
        image: '/images/cny_chuer_greeting.png',
        theme: 'from-rose-900 to-rose-950'
    },
    {
        day: '初三',
        title: '初三赤狗日',
        desc: '赤口日忌外出，在家喫茶養生。靜心品茗，為新的一年蓄積能量。',
        blessing: '願得長如此，年年物候新。',
        image: '/images/cny_chusan_greeting.png',
        theme: 'from-emerald-900 to-emerald-950'
    },
    {
        day: '初四',
        title: '初四接神',
        desc: '恭迎灶神，茶香敬天地。祈求風調雨順，茶運昌隆。',
        blessing: '共祝明朝屬日好，梅花滿眼踏新年。',
        image: '/images/cny_chusi_greeting.png',
        theme: 'from-orange-800 to-orange-950'
    },
    {
        day: '初五',
        title: '初五開工',
        desc: '五路財神到，開工大吉。以茶代酒，祝事業如茶樹般枝繁葉茂。',
        blessing: '去歲千般皆如願，今年萬事定稱心。',
        image: '/images/cny_chuwu_greeting.png',
        theme: 'from-yellow-800 to-yellow-950'
    }
];

const CNYHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % CNY_DATA.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + CNY_DATA.length) % CNY_DATA.length);
    };

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && lightboxOpen) {
                setLightboxOpen(false);
            }
        };
        if (lightboxOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [lightboxOpen]);

    if (!isVisible) return null;

    const currentData = CNY_DATA[currentIndex];

    return (
        <>
            <div className="relative w-full h-[600px] overflow-hidden group">
                {/* Background Image with Fallback Gradient */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentData.theme} transition-colors duration-700`}
                >
                    <img
                        src={currentData.image}
                        alt={currentData.title}
                        className="w-full h-full object-cover object-[center_70%] scale-110 blur-[1px] opacity-90 transition-all duration-700 cursor-pointer"
                        onClick={() => setLightboxOpen(true)}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/20 pointer-events-none" />

                {/* Click hint */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white/60 text-xs font-sans z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    🔍 點擊圖片放大
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10 space-y-6 pointer-events-none">
                    <div className="inline-block px-6 py-2 border border-white/30 rounded-full text-base md:text-lg font-sans tracking-widest backdrop-blur-sm bg-white/10">
                        2026 丙午馬年 · 新春特輯
                    </div>

                    <h1 className="text-7xl md:text-9xl font-sans font-bold tracking-tight drop-shadow-2xl">
                        {currentData.day}
                    </h1>

                    <div className="w-24 h-1 bg-amber-500 rounded-full my-4" />

                    <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-wide drop-shadow-lg">
                        {currentData.title}
                    </h2>

                    <p className="max-w-2xl text-xl md:text-2xl text-white/90 font-sans leading-relaxed drop-shadow-md">
                        {currentData.desc}
                    </p>

                    {currentData.blessing && (
                        <div className="mt-2 flex flex-col items-center gap-2">
                            <div className="w-12 h-px bg-amber-400/50" />
                            <p className="max-w-lg text-lg md:text-xl text-amber-100/80 italic font-sans leading-loose drop-shadow-md tracking-[0.15em]">
                                「{currentData.blessing}」
                            </p>
                        </div>
                    )}

                    {/* Day Indicator */}
                    <div className="flex gap-3 mt-8 pointer-events-auto">
                        {CNY_DATA.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'bg-amber-500 w-8'
                                    : 'bg-white/30 hover:bg-white/60'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white backdrop-blur-sm transition-all z-20"
                    title="關閉新春專區"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Full-screen Lightbox — rendered via portal-like z-[9999] to be on top of everything */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                        <X size={28} />
                    </button>

                    {/* Navigation in lightbox */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                        <ChevronLeft size={36} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                        <ChevronRight size={36} />
                    </button>

                    {/* Image */}
                    <img
                        src={currentData.image}
                        alt={currentData.title}
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Day label below image */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                        <span className="text-white text-2xl font-serif font-bold drop-shadow-lg">{currentData.day} · {currentData.title}</span>
                    </div>

                    {/* Dot indicators */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                        {CNY_DATA.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'bg-amber-400 w-6'
                                    : 'bg-white/30 hover:bg-white/60'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default CNYHero;
