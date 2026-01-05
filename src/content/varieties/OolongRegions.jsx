import React from 'react';
import { Feather, Leaf, Mountain } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

export default function OolongRegions({ topOffsetPx, activeHref = '#oolong-minbei' }) {
  const scrollMarginTop = Number.isFinite(topOffsetPx) ? topOffsetPx : undefined;
  const normalizedHref = String(activeHref ?? '').startsWith('#oolong-') ? String(activeHref) : '#oolong-minbei';

  const CHAPTERS = {
    '#oolong-minbei': {
      id: 'oolong-minbei',
      title: '閩北烏龍（岩韻）',
      icon: Mountain,
      content: (
        <>
          <p>
            閩北是四大烏龍茶產地之一，以武夷山系統最具代表性：常見條形、較高發酵、重焙火，並強調山場微型氣候（如馬頭岩、牛欄坑）。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-sm font-extrabold border border-amber-200">
              岩韻
            </span>
            <span className="inline-flex items-center rounded-full bg-white text-stone-700 px-3 py-1 text-sm font-bold border border-stone-200">
              代表：武夷山
            </span>
          </div>
          <ul className="list-disc list-inside text-sm text-stone-600 space-y-2">
            <li>工藝要點：成熟度夠的原料、足夠萎凋、充足浪菁與聚堆發酵，精製多次焙火。</li>
            <li>名詞提醒：「大紅袍」是品種名，不宜當作製法或商品名的泛稱（近年強調標示明確）。</li>
            <li>山場語彙：如「牛肉／馬肉」常用於指稱特定微型氣候產區的肉桂風味差異。</li>
          </ul>

          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">水仙（閩北系）</div>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="font-extrabold text-stone-900">武夷水仙</div>
                <div className="mt-2 text-sm text-stone-700 leading-relaxed">指武夷岩茶水仙品種，強調地域與品種。</div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="font-extrabold text-stone-900">閩北水仙</div>
                <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                  指閩北烏龍製法水仙品種，強調製法與品種；語用上常用以避免與「閩北烏龍」泛稱混淆。
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    '#oolong-minnan': {
      id: 'oolong-minnan',
      title: '閩南烏龍（音韻）',
      icon: Feather,
      content: (
        <>
          <p>
            閩南以安溪為代表，是四大烏龍產地之一。品種中以鐵觀音最具特色；近代也受市場影響走向較輕發酵路線。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-900 px-3 py-1 text-sm font-extrabold border border-emerald-200">
              音韻
            </span>
            <span className="inline-flex items-center rounded-full bg-white text-stone-700 px-3 py-1 text-sm font-bold border border-stone-200">
              代表品種：鐵觀音
            </span>
          </div>
          <ul className="list-disc list-inside text-sm text-stone-600 space-y-2">
            <li>標示：地方標準通常要求鐵觀音品種製作才可標示「鐵觀音」。</li>
            <li>焙火路線：常見清香型／濃香型／藥香型。</li>
            <li>市場脈絡：90年代後段起亦有更輕發酵的趨勢。</li>
          </ul>

          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">水仙（閩南系）</div>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="font-extrabold text-stone-900">永春水仙</div>
                <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                  水仙傳到永春後所製的烏龍茶；發酵較輕、少重焙火，常被稱為閩南水仙。
                </div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="font-extrabold text-stone-900">漳平水仙</div>
                <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                  漳平縣水仙品種製作的擠壓茶，外觀呈小方塊（俗稱「小豆腐」），為烏龍茶罕見的壓製形態。
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    '#oolong-guangdong': {
      id: 'oolong-guangdong',
      title: '廣東烏龍（山韻）',
      icon: Mountain,
      content: (
        <>
          <p>
            廣東烏龍以鳳凰單欉為代表，特色在於香氣型態鮮明、滋味強，市場標示常以「香型」作為識別，並非完全以品種名作商品名。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-900 px-3 py-1 text-sm font-extrabold border border-orange-200">
              山韻
            </span>
            <span className="inline-flex items-center rounded-full bg-white text-stone-700 px-3 py-1 text-sm font-bold border border-stone-200">
              代表：鳳凰單欉
            </span>
          </div>
          <ul className="list-disc list-inside text-sm text-stone-600 space-y-2">
            <li>商品語言：香型不是茶樹品種名，但也可能與品種同名，需注意語境。</li>
            <li>茶樹特性：大葉種風味骨架強，香氣「一直香、很久」。</li>
            <li>群體種與等級：常見「鳳凰單欉／鳳凰浪菜／鳳凰水仙」作為原料等級用語。</li>
          </ul>

          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">鳳凰水仙（兩種用法）</div>
            <div className="mt-2 text-sm text-stone-700 leading-relaxed">
              其一：鳳凰山地區自然長出的群體種茶樹（有性系）稱鳳凰水仙。其二：茶菁原料等級用語，常見「鳳凰單欉／鳳凰浪菜／鳳凰水仙」分級。
            </div>
          </div>
        </>
      ),
    },
    '#oolong-taiwan': {
      id: 'oolong-taiwan',
      title: '台灣烏龍（蜜韻）',
      icon: Leaf,
      content: (
        <>
          <p>
            台灣烏龍工藝體系多元，其中最大宗為清香型球狀「高山烏龍」。此外還有包種、東方美人、紅水烏龍、紅烏龍、木柵式烏龍等，皆屬烏龍茶譜系。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-900 px-3 py-1 text-sm font-extrabold border border-green-200">
              蜜韻
            </span>
            <span className="inline-flex items-center rounded-full bg-white text-stone-700 px-3 py-1 text-sm font-bold border border-stone-200">
              清香／球形／高山
            </span>
          </div>
          <ul className="list-disc list-inside text-sm text-stone-600 space-y-2">
            <li>清香高雅、苦澀低，但香氣保存相對不易，保鮮與包裝尤關鍵。</li>
            <li>因地制宜：高海拔冷涼氣候塑造香氣與回甘；低海拔也能透過工藝做出不同風格。</li>
            <li>多樣品類：包種（條形清香）、東方美人（著蜒香）、紅水烏龍、紅烏龍等。</li>
          </ul>
        </>
      ),
    },
  };

  const chapter = CHAPTERS[normalizedHref] ?? CHAPTERS['#oolong-minbei'];
  return (
    <SectionCard id={chapter.id} scrollMarginTop={scrollMarginTop} title={chapter.title} icon={chapter.icon}>
      {chapter.content}
    </SectionCard>
  );
}
