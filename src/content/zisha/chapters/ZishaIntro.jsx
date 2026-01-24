import React from 'react';

export default function ZishaIntro() {
    return (
        <div id="zisha-intro" className="scroll-mt-28 animation-slide-in-up">
            <div className="museum-plaque p-8 md:p-10 border border-sky-200 bg-sky-50/70 rounded-3xl shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-extrabold tracking-widest text-sky-900 mb-4">
                    EXHIBIT · INTRO
                </div>

                {/* Intro Hero Image */}
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-8 shadow-sm border border-stone-200">
                    <img
                        src="/assets/zisha/zisha_intro_hero.png"
                        alt="Zisha Scholar Desktop"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 text-white text-xs font-mono opacity-80">
                        THE SCHOLAR'S COMPANION
                    </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                    引言：掌中乾坤，文人雅器
                </h3>
                <div className="mt-6 space-y-6 text-stone-700 leading-relaxed text-lg">
                    <div className="bg-white/50 p-6 rounded-2xl border border-sky-100 shadow-sm backdrop-blur-sm">
                        <p className="first-letter:float-left first-letter:text-6xl first-letter:pr-3 first-letter:font-serif first-letter:text-sky-900">
                            在浩瀚的中華茶文化星河中，宜興紫砂壺以其獨特的地位，熠熠生輝。它不僅被譽為「泡茶的最佳利器」，更是超越了實用範疇，
                            成為一種承載著歷史溫度、文人哲思與工藝美學的藝術瑰寶。一把精良的紫砂壺，靜置於茶席之上，便能營造出「野隱幾庭，文明可居」的雅致氛圍，
                            誠如古人所言：「這種只輕的文明讓你捧在了手裡」，彷彿將千年的文化清韻捧於掌中。
                        </p>
                    </div>
                    <div className="rounded-2xl border border-sky-200 bg-white/80 p-5">
                        <p>
                            本文旨在深入剖析，宜興紫砂壺是如何從一件日常器物，昇華為融合了神話傳說、天賜材質、精湛工藝與文化精神的象徵。
                            我們將循著一條從泥土到藝術的探索路徑，依序探討「天賜之土」的風物根源、「泥料之美」的五色斑斕、「成型之藝」的匠心獨運、
                            「造型之魂」的萬千氣象、「文人點化」的雅士之情，直至「品鑑藏養」的無窮樂趣，帶領讀者全面領略這泥與火交織而成的藝術之歌。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
