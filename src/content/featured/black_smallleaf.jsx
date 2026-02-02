import React from 'react';
import { Coffee, Sparkles } from 'lucide-react';

export default function SmallLeafBlackTeaContent() {
  return (
    <div className="animate-fadeIn">
      <div className="relative bg-gradient-to-br from-rose-50 via-white to-amber-50 text-stone-800 rounded-2xl overflow-hidden mb-10 p-8 md:p-14 border border-stone-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl -mr-36 -mt-36" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-sm font-extrabold">
            <Coffee size={16} className="opacity-90" />
            全發酵｜紅茶
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold font-sans text-stone-900 leading-tight">小葉種紅茶</h2>
          <p className="mt-5 text-lg md:text-xl text-stone-700 leading-relaxed">
            以細緻香氣、口感較為俐落為典型印象；可作為與大葉種紅茶對照的參考頁。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-sm text-stone-700">
            <Sparkles size={16} className="opacity-70" />
            後續可再補：常見產區、香型（花香/果香/蜜香）、工夫紅茶與小種紅茶差異。
          </div>
        </div>
      </div>
    </div>
  );
}

