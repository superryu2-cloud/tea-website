import React from 'react';
import { BookOpen, Leaf, MapPin, ScrollText } from 'lucide-react';
import TeaSixCategoriesNotes from './TeaSixCategoriesNotes';
import TeaPickingNotes from './TeaPickingNotes';
import WitheringNotes from './WitheringNotes';
import BruisingNotes from './BruisingNotes';
import FixAndRollNotes from './FixAndRollNotes';
import BallRollingDryingNotes from './BallRollingDryingNotes';
import RefiningNotes from './RefiningNotes';
import TeaGardenNotes from './TeaGardenNotes';
import OolongProcessOverviewNotes from './OolongProcessOverviewNotes';

function TocLink({ href, children }) {
  return (
    <a href={href} className="group inline-flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-stone-100 border border-stone-200 text-stone-600">
        <Leaf size={14} className="opacity-80" />
      </span>
      <span className="group-hover:underline underline-offset-4">{children}</span>
    </a>
  );
}

export default function TeaReferenceNotes() {
  return (
    <article className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <header className="px-6 py-6 md:px-10 md:py-9 border-b border-stone-200 bg-gradient-to-br from-green-50 via-white to-stone-50">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="bg-white text-green-800 p-3 rounded-2xl border border-green-200 shadow-sm">
              <BookOpen size={24} />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 leading-tight">
                參考資料：六大茶類分類與台灣青茶製程整理
              </h2>
              <p className="mt-4 text-stone-600 leading-relaxed">
                收錄六大茶類分類與台灣青茶製程等資料，並以目錄、章節卡片與表格呈現，便於教學與查找。
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <Leaf size={16} className="opacity-70" />
                  六大茶類
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <MapPin size={16} className="opacity-70" />
                  製茶流程
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <ScrollText size={16} className="opacity-70" />
                  精製與茶園管理
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-96">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
              <h3 className="font-bold text-stone-800 mb-3">快速導覽</h3>
              <div className="space-y-2">
                <TocLink href="#ref-1">1. 六大分類原則與定義</TocLink>
                <TocLink href="#ref-2">2. 採摘：方式與品質</TocLink>
                <TocLink href="#ref-3">3. 萎凋：走水／消水</TocLink>
                <TocLink href="#ref-4">4. 浪菁：動刀與堆發酵</TocLink>
                <TocLink href="#ref-5">5. 殺青與揉捻（初乾）</TocLink>
                <TocLink href="#ref-6">6. 團揉整形與最終乾燥</TocLink>
                <TocLink href="#ref-7">7. 精製：回潤回火與包裝</TocLink>
                <TocLink href="#ref-8">8. 茶園管理：土壤與施肥</TocLink>
                <TocLink href="#ref-9">9. 台灣青茶製程總覽</TocLink>
              </div>
              <div className="mt-5 pt-5 border-t border-stone-200">
                <p className="text-xs text-stone-500 leading-relaxed">桌機可搭配目錄跳轉；手機可直接滑動閱讀。</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 md:px-10 md:py-10 space-y-6">
        <TeaSixCategoriesNotes />
        <TeaPickingNotes />
        <WitheringNotes />
        <BruisingNotes />
        <FixAndRollNotes />
        <BallRollingDryingNotes />
        <RefiningNotes />
        <TeaGardenNotes />
        <OolongProcessOverviewNotes />
      </div>
    </article>
  );
}
