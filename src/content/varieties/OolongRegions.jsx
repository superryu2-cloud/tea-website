import React from 'react';
import { Feather, Leaf, Mountain } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

export default function OolongRegions({ topOffsetPx, activeHref = null }) {
  const scrollMarginTop = Number.isFinite(topOffsetPx) ? topOffsetPx : undefined;
  const normalizedHref = String(activeHref ?? '').startsWith('#oolong-') ? String(activeHref) : null;

  const CHAPTERS = {
    '#oolong-minbei': {
      id: 'oolong-minbei',
      title: '閩北烏龍',
      icon: Mountain,
    },
    '#oolong-minnan': {
      id: 'oolong-minnan',
      title: '閩南烏龍',
      icon: Feather,
    },
    '#oolong-guangdong': {
      id: 'oolong-guangdong',
      title: '廣東烏龍',
      icon: Mountain,
    },
    '#oolong-taiwan': {
      id: 'oolong-taiwan',
      title: '台灣烏龍',
      icon: Leaf,
    },
  };

  const chapter = normalizedHref ? CHAPTERS[normalizedHref] : null;

  if (!chapter) return null;

  return (
    <SectionCard id={chapter.id} scrollMarginTop={scrollMarginTop} title={chapter.title} icon={chapter.icon}>
      <p className="text-stone-700 leading-relaxed">內容建置中。</p>
    </SectionCard>
  );
}
