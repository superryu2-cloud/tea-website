import React from 'react';
import { BookOpen, ClipboardList, Leaf, MapPin, Sprout, Table } from 'lucide-react';

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
          {Icon && (
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-stone-700">
              <Icon size={18} />
            </span>
          )}
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
                  葉型／加工適性
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <MapPin size={16} className="opacity-70" />
                  品種來源脈絡
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <BookOpen size={16} className="opacity-70" />
                  重要品種清單
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
                <div className="font-bold text-stone-800 mb-3">快速導覽</div>
                <div className="space-y-2 text-sm">
                  <a className="block text-stone-700 hover:text-stone-900 hover:underline underline-offset-4" href="#cultivar-diversity-1">
                    一、依「葉型」與「加工適性」分類
                  </a>
                  <a className="block text-stone-700 hover:text-stone-900 hover:underline underline-offset-4" href="#cultivar-diversity-2">
                    二、依「品種來源」分類
                  </a>
                  <a className="block text-stone-700 hover:text-stone-900 hover:underline underline-offset-4" href="#cultivar-diversity-3">
                    三、臺灣茶樹的重要品種列表
                  </a>
                  <a className="block text-stone-700 hover:text-stone-900 hover:underline underline-offset-4" href="#cultivar-diversity-4">
                    四、品種種植面積分佈概況
                  </a>
                </div>
              </div>

              <Callout title="記憶口訣">
                專家建議可先記住 4 個大葉種（如 8、18、21 等），其餘在臺灣的品種大多可視為 11 個小葉種之一。
              </Callout>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-6">
            <Section id="cultivar-diversity-1" title="一、依「葉型」與「加工適性」分類" icon={Leaf}>
              <p>
                茶樹主要依據葉片大小分為兩大類，其化學成分（如兒茶素）決定了適合製作的茶類。
              </p>

              <SimpleTable title="葉型 × 成分 × 適製性對照">
                <table className="min-w-full divide-y divide-stone-200">
                  <thead className="bg-stone-50">
                    <tr>
                      <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">分類</th>
                      <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">學名</th>
                      <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">特性 (成分)</th>
                      <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">適合製作茶類</th>
                      <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">代表品種</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-700">
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900">大葉種</td>
                      <td className="px-5 py-4">assamica</td>
                      <td className="px-5 py-4">兒茶素（來源稱「額茶數」）含量較高</td>
                      <td className="px-5 py-4">紅茶</td>
                      <td className="px-5 py-4">臺茶 8 號、18 號、21 號</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900">小葉種</td>
                      <td className="px-5 py-4">sinensis</td>
                      <td className="px-5 py-4">兒茶素含量較低</td>
                      <td className="px-5 py-4">綠茶、包種茶、烏龍茶</td>
                      <td className="px-5 py-4">鐵觀音、清心烏龍、臺茶 12 號等多數品種</td>
                    </tr>
                  </tbody>
                </table>
              </SimpleTable>
            </Section>

            <Section id="cultivar-diversity-2" title="二、依「品種來源」分類" icon={MapPin}>
              <p>臺灣茶樹品種的來源可歸納為三大途徑：</p>

              <div className="space-y-4">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="font-extrabold text-stone-900">1. 地方品種（主線）</div>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    指早期留下來、所謂的「地方品系（來源稱：地方平軸）」。
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
                    <li>
                      <strong>代表品種：</strong>清心烏龍（清星烏龍）、清心大胖（清星大胖）、鐵觀音、大葉烏龍、硬枝紅心（硬之紅心）、清心柑仔（清星桿子）、四季春（四季村/世記村）。
                    </li>
                    <li>
                      <strong>特性：</strong>通常無法得知父本與母本是誰。
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="font-extrabold text-stone-900">2. 國外引進品種</div>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">主要發生在日治時期。</p>
                  <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
                    <li>
                      <strong>代表案例：</strong>日本人從印度引進的 阿薩姆品種。
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="font-extrabold text-stone-900">3. 茶葉育成的「新品種」</div>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    透過人為育種開發而來，主要透過兩種技術途徑：
                  </p>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl border border-stone-200 p-4">
                      <div className="font-bold text-stone-900">途徑 A：雜交 (Hybridization)</div>
                      <ul className="mt-2 space-y-2 text-sm text-stone-700 list-disc pl-5">
                        <li>育種者偏好此法，因為雜交能產生「變異」，這是選拔新品種的基礎。</li>
                        <li>
                          <strong>天然雜交：</strong>例如臺茶 21 號、23 號。特性是知道母本（媽媽），但不知道父本（爸爸）。
                        </li>
                        <li>
                          <strong>人工雜交：</strong>除了上述天然雜交外的雜交品種（如 12、13、17、20 號）。特性是父本與母本都知道。
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl border border-stone-200 p-4">
                      <div className="font-bold text-stone-900">途徑 B：單株選拔 (Single-plant Selection)</div>
                      <ul className="mt-2 space-y-2 text-sm text-stone-700 list-disc pl-5">
                        <li>
                          <strong>代表品種：</strong>臺茶 8 號、24 號。
                        </li>
                        <li>
                          <strong>特性：</strong>與地方品種一樣，選拔時父本與母本都不知道。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section id="cultivar-diversity-3" title="三、臺灣茶樹的重要品種列表" icon={BookOpen}>
              <div className="space-y-4">
                <div className="rounded-2xl border border-stone-200 bg-white p-5">
                  <div className="font-extrabold text-stone-900">1. 依「大葉/小葉」歸類清單</div>
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
                  <div className="font-extrabold text-stone-900">2. 歷史與現代的「四大品種」對比</div>
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
              </div>
            </Section>

            <Section id="cultivar-diversity-4" title="四、品種種植面積分佈概況" icon={Leaf}>
              <p>根據資料中提到的臺灣茶區栽培面積佔比：</p>
              <ul className="space-y-2 text-sm text-stone-700 list-disc pl-5">
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
            </Section>
          </div>
        </div>
      </div>

    </article>
  );
}
