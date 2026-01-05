import React from 'react';
import { BookOpen, ClipboardList, Leaf, MapPin, Sprout, Table } from 'lucide-react';

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
          {Icon ? (
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-stone-700">
              <Icon size={18} />
            </span>
          ) : null}
          <h3 className="text-lg md:text-xl font-extrabold text-stone-900">{title}</h3>
        </div>
        <div className="px-5 py-5 md:px-7 md:py-6">
          <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Callout({ title, children }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-amber-200 text-amber-800">
          <ClipboardList size={18} />
        </span>
        <div className="min-w-0">
          <div className="font-bold text-stone-900">{title}</div>
          <div className="mt-2 text-sm text-stone-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SimpleTable({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-stone-50 flex items-center gap-2">
        <Table size={16} className="text-stone-500" />
        <h4 className="font-bold text-stone-900">{title}</h4>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

export default function TaiwanCultivarDiversity() {
  return (
    <article className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <header className="px-6 py-6 md:px-10 md:py-9 border-b border-stone-200 bg-gradient-to-br from-green-50 via-white to-stone-50">
        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="bg-white text-green-800 p-3 rounded-2xl border border-green-200 shadow-sm">
              <Sprout size={24} />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 leading-tight">多樣性的臺灣茶樹栽培品種</h2>
              <p className="mt-4 text-stone-600 leading-relaxed">
                以章節卡片與表格呈現臺灣茶樹品種的分類脈絡，便於教學、查找與對照。
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <Leaf size={16} className="opacity-70" />
                  植物學／加工適性
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <MapPin size={16} className="opacity-70" />
                  品種來源：地方／引進／育成
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <BookOpen size={16} className="opacity-70" />
                  重要品種清單（交叉參考）
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 md:px-10 md:py-10">
        <div className="space-y-8">
          <Callout title="記憶口訣">
            專家建議可先記住 4 個大葉種（如 8、18、21 等），其餘在臺灣的品種大多可視為 11 個小葉種之一。
          </Callout>

          <Section id="cultivar-botany" title="植物學：葉型、成分與適製性" icon={Leaf}>
            <p>
              先用「植物學視角」理解茶樹：葉片大小與化學成分（如兒茶素）會影響適合製作的茶類；也因此，後面在談地方／引進／育成品種時，常會回到「大葉種／小葉種」這個基本框架。
            </p>

            <SimpleTable title="大葉種 × 小葉種：成分 × 適製性對照">
              <table className="min-w-full text-sm text-stone-700">
                <thead className="bg-stone-50 text-stone-700">
                  <tr>
                    <th className="px-5 py-3 text-left font-bold">分類</th>
                    <th className="px-5 py-3 text-left font-bold">學名</th>
                    <th className="px-5 py-3 text-left font-bold">特性（成分）</th>
                    <th className="px-5 py-3 text-left font-bold">適合製作茶類</th>
                    <th className="px-5 py-3 text-left font-bold">代表品種</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">大葉種</td>
                    <td className="px-5 py-4">assamica</td>
                    <td className="px-5 py-4">兒茶素（本源種「顏茶敷」）含量較高</td>
                    <td className="px-5 py-4">紅茶</td>
                    <td className="px-5 py-4">臺茶 8 號、18 號、21 號</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">小葉種</td>
                    <td className="px-5 py-4">sinensis</td>
                    <td className="px-5 py-4">兒茶素含量較少</td>
                    <td className="px-5 py-4">綠茶、烏龍茶、部分紅茶</td>
                    <td className="px-5 py-4">清心烏龍、四季春、青心大冇等</td>
                  </tr>
                </tbody>
              </table>
            </SimpleTable>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">交叉參考：依「大葉/小葉」歸類清單</div>
              <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
                <li>
                  <strong>屬於「大葉種」：</strong>臺茶 8 號、18 號、21 號。
                </li>
                <li>
                  <strong>屬於「小葉種」：</strong>
                  <div className="mt-2 space-y-2">
                    <div>
                      <strong>地方品種群：</strong>鐵觀音、清心柑仔、硬枝紅心、清心大胖、清心烏龍、四季春、大葉烏龍（花蓮）。
                    </div>
                    <div>
                      <strong>雜交新品種群：</strong>臺茶 12 號、13 號、17 號、20 號。
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">種植面積分佈（資料摘錄）</div>
              <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
                <li>
                  <strong>清心烏龍：</strong>佔比最高，約 61%，可謂「清烏龍的天下」。
                </li>
                <li>
                  <strong>臺茶 12 號 與 14 號：</strong>兩者平分，數據提及各佔 40%（註：此處數據總和超過 100%，可能是指佔「非清心烏龍」類別的比例，或來源口誤，但依來源原文列出）。
                </li>
                <li>
                  <strong>清心大胖：</strong>佔 6%。
                </li>
                <li>
                  <strong>其他品種：</strong>正在努力發展中。
                </li>
              </ul>
            </div>
          </Section>

          <Section id="cultivar-local" title="地方品種：在地長期栽植與自然篩選" icon={MapPin}>
            <p className="text-sm text-stone-700 leading-relaxed">
              臺灣早期從中國福建引進的茶樹品種，在臺灣各地被自然篩選、長期栽植後形成的地方品系。
            </p>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <ul className="space-y-2 text-sm text-stone-700 list-disc pl-5">
                <li>多為小葉種（sinensis）。</li>
                <li>
                  <strong>例：</strong>清心烏龍（清污龍）、清心大胖（青心大冇）、硬枝紅心（印之紅心）、鐵觀音、四季春等。
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">歷史與現代的「四大品種」對比</div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-stone-50 rounded-xl border border-stone-200 p-4">
                  <div className="font-bold text-stone-900">臺灣早期四大品種：</div>
                  <ol className="mt-2 space-y-1 text-sm text-stone-700 list-decimal pl-5">
                    <li>清心烏龍（清污龍）</li>
                    <li>清心大胖</li>
                    <li>大葉烏龍（大葉無龍）</li>
                    <li>硬枝紅心（印之紅心）</li>
                  </ol>
                </div>

                <div className="bg-stone-50 rounded-xl border border-stone-200 p-4">
                  <div className="font-bold text-stone-900">近期種植面積最大的四大品種：</div>
                  <ol className="mt-2 space-y-1 text-sm text-stone-700 list-decimal pl-5">
                    <li>清心烏龍（秦星烏龍）</li>
                    <li>臺茶 12 號</li>
                    <li>四季春（四季村）</li>
                    <li>清心大胖（青星大胖）</li>
                  </ol>
                </div>
              </div>
            </div>
          </Section>

          <Section id="cultivar-introduced" title="引進品種：以大葉系統為主，適製紅茶" icon={BookOpen}>
            <p className="text-sm text-stone-700 leading-relaxed">主要是「大葉種」（assamica）系統的引進，適製紅茶。</p>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <ul className="space-y-2 text-sm text-stone-700 list-disc pl-5">
                <li>
                  <strong>例：</strong>臺茶 8 號（阿薩姆）、臺茶 18 號（紅玉）等。
                </li>
              </ul>
            </div>
          </Section>

          <Section id="cultivar-bred" title="育成品種：育種技術與新品系" icon={Sprout}>
            <p className="text-sm text-stone-700 leading-relaxed">透過人為育種開發而來，主要透過兩種技術途徑：</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-stone-200 p-5">
                <div className="font-extrabold text-stone-900">途徑 A：雜交 (Hybridization)</div>
                <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
                  <li>育種者偏好此法，因為雜交能產生「變異」，這是選拔新品種的基礎。</li>
                  <li>
                    <strong>天然雜交：</strong>例如臺茶 21 號、23 號。特性是知道母本（媽媽），但不知道父本（爸爸）。
                  </li>
                  <li>
                    <strong>人工雜交：</strong>除了上述天然雜交外的雜交品種（如 12、13、17、20 號）。特性是父本與母本都知道。
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-stone-200 p-5">
                <div className="font-extrabold text-stone-900">途徑 B：單株選拔 (Single-plant Selection)</div>
                <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
                  <li>
                    <strong>代表品種：</strong>臺茶 8 號、24 號。
                  </li>
                  <li>
                    <strong>特性：</strong>與地方品種一樣，選拔時父本與母本都不知道。
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </article>
  );
}
