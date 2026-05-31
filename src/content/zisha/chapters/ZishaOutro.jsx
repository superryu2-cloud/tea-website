import React from 'react';
import { Flame } from 'lucide-react';

export default function ZishaOutro() {
    return (
        <div id="zisha-outro" className="scroll-mt-28">
            {/* 結語卡片：深色主題，呼應 Header */}
            <div className="relative rounded-[28px] overflow-hidden border border-amber-800/25 shadow-xl bg-gradient-to-br from-[#3d2f32] via-[#2a1e20] to-[#1e1315] p-8 md:p-10">
                {/* 光暈裝飾 */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,6,0.07)_0%,transparent_65%)] pointer-events-none" />
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-500/8 rounded-[20px] pointer-events-none" />

                <div className="relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-extrabold tracking-widest text-amber-300 mb-6">
                        <Flame size={12} className="animate-pulse" />
                        EXHIBIT · OUTRO
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold text-stone-100 tracking-tight font-serif">
                        結語：超越器物的不朽價值
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent my-5 rounded-full" />

                    <div className="space-y-4 max-w-prose text-stone-300 leading-relaxed text-[17px]">
                        <p>
                            宜興紫砂壺的獨特之處，在於它實現了一種近乎完美的融合：它源於自然的「五色土」，經由匠人的精湛工藝，最終被人文精神所點化與昇華。
                            它從實用的茶具，蛻變為一件集雕塑、繪畫、書法、金石於一體的立體藝術品。
                        </p>
                        <p>
                            因此，它不僅僅是一件茶具，更是一張承載著中國傳統審美情趣與生活哲學的文化名片。紫砂壺的價值之所以歷久彌新，正在於它超越了器物本身。
                            在每一次注水、每一次出湯、每一次撫摸之中，它都能與使用者建立起一種跨越時空的情感連結，成為案頭賞心悅目的良伴，與掌中溫潤可親的知己。
                        </p>
                    </div>

                    {/* 落款 */}
                    <div className="mt-8 flex items-center gap-3">
                        <div className="flex-1 h-px bg-gradient-to-r from-amber-600/50 to-transparent" />
                        <span className="text-xs text-amber-500/70 font-mono tracking-widest">· 泥與火之歌 · 宜興紫砂 ·</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-amber-600/50 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
