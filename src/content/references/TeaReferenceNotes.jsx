import React, { useMemo, useRef } from 'react';
import { BookOpen } from 'lucide-react';
import TeaSixCategoriesNotes from './TeaSixCategoriesNotes';
import TeaPickingNotes from './TeaPickingNotes';
import WitheringNotes from './WitheringNotes';
import BruisingNotes from './BruisingNotes';
import FixAndRollNotes from './FixAndRollNotes';
import BallRollingDryingNotes from './BallRollingDryingNotes';
import RefiningNotes from './RefiningNotes';
import TeaGardenNotes from './TeaGardenNotes';
import OolongProcessOverviewNotes from './OolongProcessOverviewNotes';

export default function TeaReferenceNotes({ activeHref }) {
  const contentRef = useRef(null);
  const activeSectionIdRaw = typeof activeHref === 'string' && activeHref.startsWith('#') ? activeHref.slice(1) : null;
  const allowedSectionIds = useMemo(
    () => new Set(['ref-1', 'ref-2', 'ref-3', 'ref-4', 'ref-5', 'ref-6', 'ref-7', 'ref-8', 'ref-9']),
    [],
  );
  const activeSectionId = activeSectionIdRaw && allowedSectionIds.has(activeSectionIdRaw) ? activeSectionIdRaw : null;
  const showSection = (id) => !activeSectionId || activeSectionId === id;
  return (
    <>
      <article
        ref={contentRef}
        className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden"
      >
        <header className="px-6 py-6 md:px-10 md:py-9 border-b border-stone-200 bg-gradient-to-br from-green-50 via-white to-stone-50">
          <div className="flex items-start gap-4">
            <div className="bg-white text-green-800 p-3 rounded-2xl border border-green-200 shadow-sm">
              <BookOpen size={24} />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 leading-tight">
                參考資料：六大茶類分類與台灣青茶製程整理
              </h2>
              <p className="mt-4 text-stone-600 leading-relaxed">
                收錄六大茶類分類與台灣青茶製程等資料，並以章節卡片與表格呈現，便於教學與查找。
              </p>
            </div>
          </div>
        </header>

        <div className="px-6 py-8 md:px-10 md:py-10 space-y-6">
          {showSection('ref-1') ? (
            <section id="ref-1" className="scroll-mt-28">
              <TeaSixCategoriesNotes />
            </section>
          ) : null}
          {showSection('ref-2') ? (
            <section id="ref-2" className="scroll-mt-28">
              <TeaPickingNotes />
            </section>
          ) : null}
          {showSection('ref-3') ? (
            <section id="ref-3" className="scroll-mt-28">
              <WitheringNotes />
            </section>
          ) : null}
          {showSection('ref-4') ? (
            <section id="ref-4" className="scroll-mt-28">
              <BruisingNotes />
            </section>
          ) : null}
          {showSection('ref-5') ? (
            <section id="ref-5" className="scroll-mt-28">
              <FixAndRollNotes />
            </section>
          ) : null}
          {showSection('ref-6') ? (
            <section id="ref-6" className="scroll-mt-28">
              <BallRollingDryingNotes />
            </section>
          ) : null}
          {showSection('ref-7') ? (
            <section id="ref-7" className="scroll-mt-28">
              <RefiningNotes />
            </section>
          ) : null}
          {showSection('ref-8') ? (
            <section id="ref-8" className="scroll-mt-28">
              <TeaGardenNotes />
            </section>
          ) : null}
          {showSection('ref-9') ? (
            <section id="ref-9" className="scroll-mt-28">
              <OolongProcessOverviewNotes />
            </section>
          ) : null}
        </div>
      </article>
    </>
  );
}
