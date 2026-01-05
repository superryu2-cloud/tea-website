import React from 'react';
import { Leaf, Sparkles } from 'lucide-react';

export default function BiluochunGreenTeaContent() {
  return (
    <div className="animate-fadeIn">
      <div className="relative bg-gradient-to-br from-emerald-50 via-white to-sky-50 text-stone-800 rounded-2xl overflow-hidden mb-10 p-8 md:p-14 border border-stone-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/35 rounded-full blur-3xl -mr-36 -mt-36" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700 text-white text-sm font-extrabold">
            <Leaf size={16} className="opacity-90" />
            不發酵｜綠茶
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold font-serif text-stone-900 leading-tight">碧螺春綠茶</h2>
          <p className="mt-5 text-lg md:text-xl text-stone-700 leading-relaxed">
            以清鮮花果香與細緻甘甜著稱的綠茶風格；可作為「不發酵」風味輪廓的代表對照。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-sm text-stone-700">
            <Sparkles size={16} className="opacity-70" />
            這頁先作為台灣特色茶清單中的「發酵對照點」，後續可再補產地與工藝細節。
          </div>
        </div>
      </div>
    </div>
  );
}

