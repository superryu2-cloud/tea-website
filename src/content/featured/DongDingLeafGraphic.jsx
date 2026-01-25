import React from 'react';

export default function DongDingLeafGraphic() {
    return (
        <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden flex items-center justify-center group">

            {/* Background: Abstract Terrain Lines (Contour lines suggesting altitude) */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,45 50,55 T100,60" fill="none" stroke="#57534e" strokeWidth="0.5" />
                <path d="M0,60 Q30,50 60,65 T100,55" fill="none" stroke="#57534e" strokeWidth="0.5" />
                <path d="M0,70 Q20,60 40,75 T100,70" fill="none" stroke="#57534e" strokeWidth="0.5" />
                <path d="M0,40 Q40,30 70,45 T100,35" fill="none" stroke="#57534e" strokeWidth="0.5" />
            </svg>

            {/* Main Graphic: Rolled Tea Leaves (Hemispherical) */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3">
                <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3f6212" /> {/* lime-800 */}
                            <stop offset="50%" stopColor="#14532d" /> {/* emerald-900 */}
                            <stop offset="100%" stopColor="#022c22" /> {/* teal-950 */}
                        </linearGradient>
                        <radialGradient id="highlight" cx="30%" cy="30%" r="50%">
                            <stop offset="0%" stopColor="#84cc16" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3f6212" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* The Tea Ball Structure - Abstract Representation of tightly rolled leaves */}
                    {/* Base Layer */}
                    <path d="M60,100 C60,60 100,40 140,80 C160,100 150,150 110,160 C70,170 50,130 60,100 Z"
                        fill="url(#leafGradient)" />

                    {/* Layers representing the roll */}
                    <path d="M70,90 C80,60 120,50 140,80 C155,100 145,135 115,145 C85,155 60,120 70,90 Z"
                        fill="#1e3a8a" fillOpacity="0.1" stroke="#365314" strokeWidth="1" />

                    <path d="M85,95 C90,75 120,70 130,90 C140,110 130,125 105,130 C80,135 75,110 85,95"
                        fill="none" stroke="#4d7c0f" strokeWidth="2" opacity="0.6" strokeLinecap="round" />

                    <path d="M95,100 C100,90 115,90 120,105 C125,115 115,120 100,120"
                        fill="none" stroke="#65a30d" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

                    {/* Highlights for Oily Look (墨綠油潤) */}
                    <ellipse cx="90" cy="80" rx="15" ry="8" fill="url(#highlight)" transform="rotate(-30 90 80)" />
                    <ellipse cx="120" cy="130" rx="10" ry="5" fill="white" fillOpacity="0.1" transform="rotate(10 120 130)" />

                    {/* Stem accent (optional) */}
                    <path d="M110,140 Q100,160 90,170" fill="none" stroke="#78350f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                </svg>

                {/* Floating Label */}
                <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-stone-200 text-stone-600 text-xs font-serif font-bold tracking-widest">
                    半球型包種 (Hemispherical)
                </div>
            </div>
        </div>
    );
}
