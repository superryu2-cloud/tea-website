import React, { useMemo, useState } from 'react';
import { BookOpen, Palette, Sparkles, Leaf } from 'lucide-react';
import AtlasDockLayout from '../../components/AtlasDockLayout';
import ChapterSidebar from '../../components/ChapterSidebar';
import SectionCard from '../../components/SectionCard';
import TeaPickingExpertReport from '../references/TeaPickingExpertReport';
import TaiwanCultivarDiversity from '../cultivars/TaiwanCultivarDiversity';
import TeaFermentationWizard from './TeaFermentationWizard';
import TeaRoastingMakeupArtist from './TeaRoastingMakeupArtist';
import TaiwanSpecialtyTeaFaces from './TaiwanSpecialtyTeaFaces';
import TeaPackagingStorage from './TeaPackagingStorage';
import TeaWaterDialogue from './TeaWaterDialogue';
import TeaSensoryEvaluation from './TeaSensoryEvaluation';

function ComingSoon({ title }) {
  return (
    <SectionCard title={title} icon={Sparkles}>
      <div className="text-stone-700 leading-relaxed">
        這一章先保留位置，等你提供內容後我再補上排版與圖表。
      </div>
      <div className="mt-3 text-sm text-stone-500">提示：可直接貼段落文字，或提供圖片/表格來源。</div>
    </SectionCard>
  );
}

export default function TeaTalkColorSection({ topOffsetPx = 0 }) {
  const [activeChapter, setActiveChapter] = useState('overview');

  const chapters = useMemo(
    () => [
      { key: 'overview', label: '導讀' },
      { key: 'ch01', label: '01：多樣性的台灣茶樹品種解析' },
      { key: 'ch02', label: '02：一心二葉知多少' },
      { key: 'ch03', label: '03：茶葉魔術師．發酵' },
      { key: 'ch04', label: '04：茶葉化妝師－烘焙' },
      { key: 'ch05', label: '05：探索台灣特色茶之容顏' },
      { key: 'ch06', label: '06：茶葉包裝與儲藏' },
      { key: 'ch07', label: '07：茶與水的對話' },
      { key: 'ch08', label: '08：茶葉色香味品質官能評鑑' },
    ],
    [],
  );

  return (
    <div className="museum-page">
      <div className="museum-stage">
        <AtlasDockLayout
          topOffsetPx={topOffsetPx}
          sidebar={
            <ChapterSidebar
              title="茶韻之旅"
              icon={Leaf}
              items={chapters}
              activeKey={activeChapter}
              onSelectKey={(key) => {
                setActiveChapter(key);
                // Scroll to top when changing chapters
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              topOffsetPx={topOffsetPx}
              pinMode="static"
            />
          }
        >
          <div className="space-y-8 min-w-0">

            {activeChapter === 'overview' ? (
              <div className="space-y-6">
                <div className="museum-frame museum-paper relative overflow-hidden">
                  <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-200/25 blur-3xl" />
                  <div className="relative px-8 py-10 md:px-12 md:py-12">
                    <div className="museum-label">
                      <Palette size={14} className="opacity-80" />
                      EXHIBIT · TEA PALETTE
                    </div>
                    <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">茶言觀色</h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 leading-relaxed">
                      以「可教、可查、可對照」為原則整理長文專題：把栽培、採摘、製程與風味，拆成能快速閱讀與回看的一章一主題。
                    </p>
                  </div>
                </div>
                <SectionCard title="怎麼使用" icon={BookOpen}>
                  <ul className="list-disc pl-5 space-y-2 text-stone-700">
                    <li>左側選章節，右側顯示對應主題的完整內容。</li>
                    <li>先看「導讀」快速掌握 8 章主題與閱讀順序。</li>
                    <li>每章整理核心概念與觀察要點，適合教學與回顧。</li>
                  </ul>
                </SectionCard>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="museum-card p-6">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CHAPTER 01</div>
                    <div className="mt-2 text-lg font-extrabold text-stone-900">台灣茶樹品種解析</div>
                    <div className="mt-2 text-stone-600 leading-relaxed">
                      從育種與分類到產區適製性：兩大類、四大十一小、代表品種與分布。
                    </div>
                  </div>
                  <div className="museum-card p-6">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CHAPTER 02</div>
                    <div className="mt-2 text-lg font-extrabold text-stone-900">一心二葉知多少</div>
                    <div className="mt-2 text-stone-600 leading-relaxed">
                      從採摘標準到成分與風味：一心二葉、嫩採/採嫩、季節與香氣形成。
                    </div>
                  </div>
                  <div className="museum-card p-6">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CHAPTER 03</div>
                    <div className="mt-2 text-lg font-extrabold text-stone-900">茶葉魔術師．發酵</div>
                    <div className="mt-2 text-stone-600 leading-relaxed">
                      萎凋、攪拌與發酵節奏，如何塑造香氣層次與茶湯色變。
                    </div>
                  </div>
                  <div className="museum-card p-6">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CHAPTER 04</div>
                    <div className="mt-2 text-lg font-extrabold text-stone-900">茶葉化妝師－烘焙</div>
                    <div className="mt-2 text-stone-600 leading-relaxed">
                      火候、溫度曲線與時間控制，決定香氣深化與口感厚度。
                    </div>
                  </div>
                  <div className="museum-card p-6">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CHAPTER 05</div>
                    <div className="mt-2 text-lg font-extrabold text-stone-900">探索台灣特色茶之容顏</div>
                    <div className="mt-2 text-stone-600 leading-relaxed">
                      從風土與工藝看特色茶：東方美人、包種、高山與蜜香系統。
                    </div>
                  </div>
                  <div className="museum-card p-6">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CHAPTER 06</div>
                    <div className="mt-2 text-lg font-extrabold text-stone-900">茶葉包裝與儲藏</div>
                    <div className="mt-2 text-stone-600 leading-relaxed">
                      包材選擇、遮光防潮與氧氣管理，守住香氣與色澤穩定。
                    </div>
                  </div>
                  <div className="museum-card p-6">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CHAPTER 07</div>
                    <div className="mt-2 text-lg font-extrabold text-stone-900">茶與水的對話</div>
                    <div className="mt-2 text-stone-600 leading-relaxed">
                      水質礦物、硬度與溫度，決定茶湯表現與風味平衡。
                    </div>
                  </div>
                  <div className="museum-card p-6">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">CHAPTER 08</div>
                    <div className="mt-2 text-lg font-extrabold text-stone-900">茶葉色香味品質官能評鑑</div>
                    <div className="mt-2 text-stone-600 leading-relaxed">
                      建立觀色、聞香、啜味與葉底檢視的評鑑步驟與語彙。
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {activeChapter === 'ch02' ? <TeaPickingExpertReport /> : null}

            {activeChapter === 'ch01' ? (
              <div className="museum-frame museum-paper overflow-hidden">
                <div className="px-6 py-5 md:px-8">
                  <h3 className="text-lg md:text-xl font-extrabold text-stone-900">多樣性的台灣茶樹栽培品種與特性解析</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    內容已依「育種 → 分類 → 產區/適製性」整理，適合教學與快速對照。
                  </p>
                </div>
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <TaiwanCultivarDiversity />
                </div>
              </div>
            ) : null}

            {activeChapter === 'ch03' ? <TeaFermentationWizard /> : null}
            {activeChapter === 'ch04' ? <TeaRoastingMakeupArtist /> : null}
            {activeChapter === 'ch05' ? <TaiwanSpecialtyTeaFaces /> : null}
            {activeChapter === 'ch06' ? <TeaPackagingStorage /> : null}
            {activeChapter === 'ch07' ? <TeaWaterDialogue /> : null}
            {activeChapter === 'ch08' ? <TeaSensoryEvaluation /> : null}
          </div>
        </AtlasDockLayout>
      </div>
    </div>
  );
}
