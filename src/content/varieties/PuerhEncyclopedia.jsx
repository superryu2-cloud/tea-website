import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const DEFAULT_CHAPTER_HREF = '#puerh-1';

const PUERH_CHAPTER_LOADERS = {
  '#puerh-1': () => import('./puerh/chapters/PuerhChapter01.jsx').then((module) => module.createPuerhChapter01),
  '#puerh-2': () => import('./puerh/chapters/PuerhChapter02.jsx').then((module) => module.createPuerhChapter02),
  '#puerh-3': () => import('./puerh/chapters/PuerhChapter03.jsx').then((module) => module.createPuerhChapter03),
  '#puerh-4': () => import('./puerh/chapters/PuerhChapter04.jsx').then((module) => module.createPuerhChapter04),
  '#puerh-5': () => import('./puerh/chapters/PuerhChapter05.jsx').then((module) => module.createPuerhChapter05),
  '#puerh-6': () => import('./puerh/chapters/PuerhChapter06.jsx').then((module) => module.createPuerhChapter06),
  '#puerh-7': () => import('./puerh/chapters/PuerhChapter07.jsx').then((module) => module.createPuerhChapter07),
  '#puerh-8': () => import('./puerh/chapters/PuerhChapter08.jsx').then((module) => module.createPuerhChapter08),
  '#puerh-9': () => import('./puerh/chapters/PuerhChapter09.jsx').then((module) => module.createPuerhChapter09),
  '#puerh-10': () => import('./puerh/chapters/PuerhChapter10.jsx').then((module) => module.createPuerhChapter10),
  '#puerh-11': () => import('./puerh/chapters/PuerhChapter11.jsx').then((module) => module.createPuerhChapter11),
  '#puerh-12': () => import('./puerh/chapters/PuerhChapter12.jsx').then((module) => module.createPuerhChapter12),
};

const hasPuerhChapter = (href) => Object.prototype.hasOwnProperty.call(PUERH_CHAPTER_LOADERS, href);

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-emerald-50 via-white to-amber-50">
          <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900">{title}</h3>
        </div>
        <div className="px-5 py-5 md:px-7 md:py-6">
          <div className="space-y-6 text-stone-700 text-[17px] leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

const Lightbox = ({ lightboxData, onClose }) => {
  if (!lightboxData) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <img
        src={lightboxData.src}
        alt={lightboxData.alt}
        className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
      />
      <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors" onClick={onClose}>
        <X size={48} />
      </button>
    </div>,
    document.body
  );
};

const PuerhChapterLoadingFallback = () => (
  <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm font-semibold text-stone-500 shadow-sm">
    Loading puerh chapter...
  </div>
);

export default function PuerhEncyclopedia({ topOffsetPx, activeHref = '#puerh-1' }) {
  const [lightboxData, setLightboxData] = useState(null);
  const [chapterState, setChapterState] = useState({
    href: null,
    chapter: null,
    error: null,
  });

  void topOffsetPx;
  const contentRef = useRef(null);
  const normalizedHref = hasPuerhChapter(activeHref) ? activeHref : DEFAULT_CHAPTER_HREF;
  const chapterId = normalizedHref.slice(1);

  useEffect(() => {
    let isMounted = true;
    const loadChapter = PUERH_CHAPTER_LOADERS[normalizedHref] ?? PUERH_CHAPTER_LOADERS[DEFAULT_CHAPTER_HREF];

    loadChapter()
      .then((createChapter) => {
        if (isMounted) {
          setChapterState({
            href: normalizedHref,
            chapter: createChapter(setLightboxData),
            error: null,
          });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setChapterState({
            href: normalizedHref,
            chapter: null,
            error,
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [normalizedHref]);

  const chapter = chapterState.href === normalizedHref ? chapterState.chapter : null;
  const loadError = chapterState.href === normalizedHref ? chapterState.error : null;

  return (
    <article className="font-sans bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm">
      <div className="px-6 py-8 md:px-10 md:py-10">
        <div ref={contentRef}>
          {loadError ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-sm font-semibold text-rose-700">
              普洱茶章節載入失敗，請重新整理頁面。
            </div>
          ) : chapter ? (
            <Section id={chapterId} title={chapter.title}>
              {chapter.content}
            </Section>
          ) : (
            <PuerhChapterLoadingFallback />
          )}
        </div>
      </div>
      <Lightbox lightboxData={lightboxData} onClose={() => setLightboxData(null)} />
    </article>
  );
}
