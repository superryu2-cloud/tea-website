import React from 'react';
import { Leaf, Sparkles } from 'lucide-react';

export default function BiluochunGreenTeaContent() {
  return (
    <div className="animate-fadeIn space-y-10">
      <div className="relative bg-gradient-to-br from-emerald-50 via-white to-sky-50 text-stone-800 rounded-2xl overflow-hidden p-8 md:p-14 border border-stone-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/35 rounded-full blur-3xl -mr-36 -mt-36" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700 text-white text-sm font-extrabold">
            <Leaf size={16} className="opacity-90" />
            不發酵｜綠茶
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold font-sans text-stone-900 leading-tight">碧螺春綠茶</h2>
          <p className="mt-5 text-lg md:text-xl text-stone-700 leading-relaxed">
            以清鮮蔬果香與鮮爽口感為主軸的綠茶風格，在台灣特色茶中常作為「不發酵」風味對照點。
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">特色</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
            <li>蔬果香、豆香與菁草氣息交織，滋味鮮爽。</li>
            <li>不發酵綠茶代表，風味清新明快。</li>
            <li>外觀以條形為主，便於辨識。</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">產區</h3>
          <div className="mt-3 space-y-2 text-stone-700">
            <div className="font-bold text-stone-800">新北市三峽</div>
            <p>主要品種為青心柑仔，適製綠茶（碧螺春、龍井）。</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">歷史</h3>
          <p className="mt-3 text-stone-700 leading-relaxed">
            台灣碧螺春源於 1949 年後，江浙人士在三峽以「青心柑仔」品種仿製家鄉味，逐漸形成獨特風土特色。
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">製程</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
            <li>採摘嫩芽、未氧化，保留清鮮口感。</li>
            <li>綠茶核心工藝為「殺青」，碧螺春屬炒青（鍋中翻炒）路線。</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">其他</h3>
          <div className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-900">
            <Sparkles size={16} className="opacity-80" />
            保存提醒：避免後氧化，才能維持鮮爽與明亮的茶湯表現。
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/80 p-6">
          <h3 className="text-2xl font-bold text-stone-900">沖泡方式</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
            <li>水溫約 80°C。</li>
            <li>避免久泡，以免苦澀上升。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
