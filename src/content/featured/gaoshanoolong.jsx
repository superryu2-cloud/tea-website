import React from 'react';
import { Mountain, Sparkles } from 'lucide-react';

export default function GaoshanOolongContent() {
  return (
    <div className="animate-fadeIn">
      <div className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-stone-800 rounded-2xl overflow-hidden mb-10 p-8 md:p-14 border border-stone-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl -mr-36 -mt-36" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-700 text-white text-sm font-extrabold">
            <Mountain size={16} className="opacity-90" />
            輕發酵｜青茶
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold font-sans text-stone-900 leading-tight">高山烏龍茶</h2>
          <p className="mt-5 text-lg md:text-xl text-stone-700 leading-relaxed">
            以高海拔條件帶來的清甜、細緻與耐泡感著稱；在清香型球形烏龍中最具代表性。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 text-sm text-stone-700">
            <Sparkles size={16} className="opacity-70" />
            後續可再補：常見海拔帶、季節差異、香氣保存與包材要點。
          </div>
        </div>
      </div>
    </div>
  );
}

