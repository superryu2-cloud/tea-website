import React from 'react';
import { Mountain } from 'lucide-react';

export default function GaoshanOolongContent() {
  return (
    <div className="animate-fadeIn space-y-10">
      <div className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-stone-800 rounded-2xl overflow-hidden p-8 md:p-14 border border-stone-200">
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
        </div>
      </div>

      <div className="space-y-8">
        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">特色</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
            <li>香氣優雅、滋味厚實，帶有清甜與耐泡感。</li>
            <li>高山風土形成獨特「山頭氣」，茶湯滑順有厚度。</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">產區</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
            <li>多指海拔 1000 公尺以上茶區。</li>
            <li>阿里山（花香顯著）、梨山（花果香）、杉林溪／龍鳳峽（湯中香、脂香）。</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">歷史</h3>
          <p className="mt-3 text-stone-700 leading-relaxed">
            近四十年來，高山茶以清香與甘醇成為台灣茶市場主流。從早期偏焙香型，逐步發展出不經焙火、發酵程度較輕的清香型風格。
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">製程</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
            <li>「高山」指產區海拔高度；「烏龍」指部分發酵工藝。</li>
            <li>清香型高山烏龍多以輕發酵、低焙或不焙為主，維持清甜與花香。</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">其他</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
            <li>兒茶素降低（苦澀減少）、茶胺酸增加（甘味提升）。</li>
            <li>果膠質增加，帶來湯感濃稠、油亮與耐泡特性。</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">沖泡方式</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
            <li>置茶量約壺身體積的六分之一。</li>
            <li>溫潤泡 5–10 秒；第一沖約 55 秒。</li>
            <li>出湯後立即掀蓋散熱，避免悶熟。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
