import React from 'react';
import { Coffee, Sparkles } from 'lucide-react';

export default function LargeLeafBlackTeaContent() {
  return (
    <div className="animate-fadeIn">
      <div className="relative bg-gradient-to-br from-amber-50 via-white to-rose-50 text-stone-800 rounded-2xl overflow-hidden mb-10 p-8 md:p-14 border border-stone-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl -mr-36 -mt-36" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-800 text-white text-sm font-extrabold">
            <Coffee size={16} className="opacity-90" />
            全發酵｜紅茶
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold font-sans text-stone-900 leading-tight">大葉種紅茶</h2>
          <p className="mt-5 text-lg md:text-xl text-stone-700 leading-relaxed">
            以滋味厚實、茶湯飽滿見長；常用於呈現更濃的甜潤與更長的尾韻，適合作為小葉種的對照。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-sm text-stone-700">
            <Sparkles size={16} className="opacity-70" />
            後續可再補：滇紅工夫、等級與採摘嫩度、香氣（蜜香/薯香/花香）與沖泡建議。
          </div>
        </div>
      </div>
    </div>
  );
}

