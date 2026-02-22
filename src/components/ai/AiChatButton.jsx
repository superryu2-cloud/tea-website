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
                className="fixed bottom-5 right-4 md:right-6 z-[9998] w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
            >
                {/* 脈衝動畫（未開啟時顯示） */}
                {!open && (
                    <span className="absolute w-full h-full rounded-full bg-teal-400 animate-ping opacity-25 pointer-events-none" />
                )}
                {open ? (
                    <X size={22} className="text-white" />
                ) : (
                    <Leaf size={22} className="text-white" />
                )}
            </button>

            {/* 工具提示 */}
            {!open && (
                <div className="fixed bottom-20 right-4 md:right-6 z-[9997] pointer-events-none">
                    <div className="bg-stone-900 text-white text-[12px] font-semibold rounded-full px-3 py-1.5 shadow-lg opacity-0 group-hover:opacity-100 whitespace-nowrap">
                        茶識 AI
                    </div>
                </div>
            )}
        </>
    );
}
