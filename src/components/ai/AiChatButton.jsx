import React, { useState } from 'react';
import AiChatPanel from './AiChatPanel';
import { Leaf, MessageCircle, X } from 'lucide-react';

export default function AiChatButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AiChatPanel isOpen={open} onClose={() => setOpen(false)} />

            {/* 浮動按鈕 */}
            <button
                onClick={() => setOpen((v) => !v)}
                aria-label="開啟 AI 茶識助手"
                className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-[9998] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95 md:bottom-5 md:right-6 md:h-14 md:w-14 group"
            >
                {/* 脈衝動畫（未開啟時顯示） */}
                {!open && (
                    <span className="absolute hidden h-full w-full rounded-full bg-teal-400 opacity-25 pointer-events-none animate-ping sm:block" />
                )}
                {open ? (
                    <X size={20} className="text-white md:size-[22px]" />
                ) : (
                    <Leaf size={20} className="text-white md:size-[22px]" />
                )}
            </button>

            {/* 工具提示 */}
            {!open && (
                <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+4.25rem)] right-4 z-[9997] pointer-events-none md:bottom-20 md:right-6">
                    <div className="bg-stone-900 text-white text-[12px] font-semibold rounded-full px-3 py-1.5 shadow-lg opacity-0 group-hover:opacity-100 whitespace-nowrap">
                        茶識 AI
                    </div>
                </div>
            )}
        </>
    );
}
