import React, { useMemo, useRef, useState } from 'react';
import { AlertTriangle, BookOpen, ChevronRight, Droplets, FlaskConical, History, Leaf, Map, MapPin, Sparkles, Star, Wind } from 'lucide-react';
import ReadingAssist from '../../components/ReadingAssist';

export default function RedOolongContent() {
  const crises = useMemo(
    () => [
      {
        key: 'crisis-1',
        number: '01',
        title: '第一次危機：紅茶時代的殞落',
        content: (
          <div className="space-y-4 text-stone-800 leading-relaxed">
            <p>在民國五、六十年代，台東曾是紅茶外銷的重要產地。然而，這個輝煌的時代卻因兩個主要因素而迅速走向沒落：</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-stone-700">
              <li>匯率問題： 台幣升值導致台灣紅茶的出口價格上漲，大幅削弱了其在國際市場上的競爭力。</li>
              <li>國際競爭： 以肯亞為代表的新興紅茶產地，憑藉其品質提升且價格低廉的優勢，嚴重衝擊了台灣紅茶的外銷市場。</li>
            </ul>
            <p className="text-sm text-stone-700">
              當外銷通路受阻，台東紅茶轉向內銷市場時，卻因國內市場規模有限，無法支撐原有產業鏈，導致茶廠紛紛倒閉。
            </p>
          </div>
        ),
      },
      {
        key: 'crisis-2',
        number: '02',
        title: '第二次危機：「福鹿茶」不敵高山茶',
        content: (
          <div className="space-y-4 text-stone-800 leading-relaxed">
            <p>
              面對紅茶產業的蕭條，台東茶人轉而模仿南投，開始製作俗稱「青茶」的烏龍茶。這段轉型初期充滿希望，其中兩位關鍵人物的行動點燃了整個社區的熱情。
              首先是黃石定先生，他利用「壓條法」在初鹿牧場成功繁殖青心烏龍茶苗，解決了茶苗短缺問題，大幅降低了農民的入門門檻。
            </p>
            <p>
              接著，製茶師陳德意先生做了一個轟動地方的決定——他以一年九十萬的「天價」，承租了一公頃茶園的產量。這個消息迅速傳開，讓所有人都看見了烏龍茶的巨大潛力，
              進而掀起了鹿野地區大面積種植的風潮，並成功打造出「福鹿茶」品牌。
            </p>
            <p>
              然而，好景不常，到了民國84、85年左右，台灣茶市場的消費風向出現了巨大轉變。消費者開始瘋狂追捧來自中南部高海拔山區的「高山茶」，其特有的清香與喉韻成為品質的標竿。
              相較之下，台東地區因氣候炎熱、海拔較低，所生產的福鹿茶在口感與價格上，完全無法與高山茶競爭，再次陷入困境。曾經的高昂希望，最終不敵市場現實，令人唏噓。
            </p>
          </div>
        ),
      },
      {
        key: 'crisis-3',
        number: '03',
        title: '第三次危機：錯失「蜜香紅茶」的先機',
        content: (
          <div className="space-y-4 text-stone-800 leading-relaxed">
            <p>
              在青茶市場敗下陣來後，台東並非沒有轉型的機會。當時，茶業改良場已協助研發出品質優良的「蜜香紅茶」。然而，當時多數茶廠仍沉浸在過去的製茶思維中，
              抱持著觀望的保守心態，缺乏調整製程、勇於改變的魄力。
            </p>
            <p>
              就在台東茶人猶豫不決之際，鄰近的花蓮瑞穗（舞鶴茶區）抓住了這個機會，成功將蜜香紅茶打響名號，搶佔了市場先機。
            </p>
            <p>
              這接二連三的打擊，將台東茶產業推向了「紅茶回不去，青茶打不過，蜜香被搶走」的絕境，創新與變革已是唯一的出路。
            </p>
          </div>
        ),
      },
    ],
    [],
  );

  const [activeCrisisKey, setActiveCrisisKey] = useState(crises[0]?.key ?? 'crisis-1');
  const activeCrisis = crises.find((c) => c.key === activeCrisisKey) ?? crises[0];
  const contentRef = useRef(null);

  return (
    <div className="animate-fadeIn">
      <div className="relative bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 text-stone-800 rounded-2xl overflow-hidden mb-12 p-8 md:p-14 border border-stone-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl -ml-40 -mb-40" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-700 text-white text-sm font-bold">
            <Leaf size={16} className="opacity-90" />
            台灣特色茶 · 紅烏龍
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold font-sans text-stone-900 leading-tight">
            絕境中誕生的奇蹟：深入解析台灣特色茶「紅烏龍」
          </h2>

          <p className="mt-5 text-lg md:text-xl text-stone-700 leading-relaxed">前言：認識一款與眾不同的台灣茶</p>
          <p className="mt-3 text-stone-700 leading-relaxed">
            一款茶如何能同時擁有紅茶的醇厚茶湯與烏龍茶的甘醇尾韻？這個問題的答案，就在一款源自台灣台東的特色茶——「紅烏龍」之中。它不僅是一種風味上的創新，更是台東茶產業為了突破發展困境，在絕境中奮力求生的智慧結晶。
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-stone-700">
              <MapPin size={14} className="opacity-70" />
              台東
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-stone-700">
              <Sparkles size={14} className="opacity-70" />
              紅茶×烏龍工藝融合
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-stone-700">
              <History size={14} className="opacity-70" />
              民國97年（2008年）正式發表
            </span>
          </div>

          <blockquote className="mt-6 border-l-4 border-orange-500 pl-4 italic text-stone-600 text-sm">
            「台東會做這個紅烏龍，其實是真的從絕境中誕生的，是在完全想不到有任何出路的狀況下誕生的。」
          </blockquote>
        </div>
      </div>

      <ReadingAssist contentRef={contentRef} headingSelector="h3, h4" />
      <div ref={contentRef} className="space-y-10">
        <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
          <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
            <Map className="text-orange-700" size={20} />
            <h3 className="text-lg md:text-xl font-bold text-stone-900">台東茶鄉：三大高台的風土</h3>
          </div>
          <div className="px-6 py-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="font-bold text-stone-900 mb-2">美農高台</div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  旅程的第一站，與鹿野茶葉發展息息相關。至今仍有茶莊，晚上可俯瞰台東市夜景，增添浪漫色彩。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="font-bold text-stone-900 mb-2">初鹿高台</div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  以「初鹿牧場」聞名。在轉型初期是極重要的茶菁來源地，曾供應總原料的50%。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="font-bold text-stone-900 mb-2">鹿野高台</div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  核心茶區，現今熱氣球嘉年華舉辦地。昔日滿佈茶樹，地景變遷見證了產業的興衰。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
          <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
            <History className="text-orange-700" size={20} />
            <h3 className="text-lg md:text-xl font-bold text-stone-900">為何需要新品種？台東茶產業的三次危機</h3>
          </div>
          <div className="px-6 py-6 space-y-5 text-stone-800 leading-relaxed">
            <p>
              紅烏龍的誕生並非偶然，而是台東茶產業在歷經多次衝擊後，被逼到「沒有退路」的境地時，才誕生的產物。它是一款真正「從『絕境』中誕生的產物」。
            </p>
            <p>在紅烏龍問世前，台東茶產業曾遭遇了三次幾乎使其一蹶不振的重大危機。</p>

            <div className="rounded-2xl border border-stone-200 bg-white/65 p-4 md:p-5">
              <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-sm font-extrabold text-stone-800">
                  <AlertTriangle size={16} className="text-orange-700" />
                  點選 01／02／03 立即切換內容
                </div>
                <div className="text-xs text-stone-600">提示：滑鼠移到卡片會高亮顯示</div>
              </div>
              <div className="grid gap-2 md:grid-cols-3">
                {crises.map((crisis) => {
                  const isActive = crisis.key === activeCrisisKey;
                  const [line1, ...restLines] = crisis.title.split('：');
                  const line2 = restLines.join('：');
                  return (
                    <button
                      key={crisis.key}
                      type="button"
                      onClick={() => setActiveCrisisKey(crisis.key)}
                      className={`group relative w-full overflow-hidden rounded-2xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${isActive
                          ? 'border-amber-300 bg-amber-50/70 text-stone-900'
                          : 'border-stone-200 bg-white/60 text-stone-800 hover:border-amber-200 hover:bg-amber-50/40'
                        }`}
                      aria-pressed={isActive}
                      title="點選切換"
                    >
                      <span
                        className={`absolute left-0 top-0 h-full w-1 ${isActive ? 'bg-amber-400' : 'bg-transparent group-hover:bg-amber-200'
                          }`}
                      />
                      <div className="flex items-start gap-3">
                        <span
                          className={`inline-flex items-center justify-center h-9 w-9 rounded-full text-white shrink-0 font-extrabold ${isActive ? 'bg-amber-600' : 'bg-stone-900/85 group-hover:bg-amber-600'
                            }`}
                        >
                          {crisis.number}
                        </span>
                        <div className="min-w-0">
                          <div className="text-base font-extrabold text-stone-900">{line1}</div>
                          <div className="mt-1 text-xs text-stone-700">{line2}</div>
                        </div>
                        <ChevronRight
                          size={18}
                          className={`ml-auto mt-1 shrink-0 transition-opacity ${isActive ? 'text-amber-700 opacity-100' : 'text-stone-400 opacity-60 group-hover:opacity-100'
                            }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-5">
                  <div className="text-xs font-bold tracking-widest text-stone-500">CRISIS</div>
                  <div className="mt-2 text-lg font-bold text-stone-900">{activeCrisis.title}</div>
                  <div className="mt-4">{activeCrisis.content}</div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
                    <AlertTriangle size={16} className="text-orange-700" />
                    關鍵一句
                  </div>
                  <div className="mt-3 text-[15px] leading-7 text-stone-800">
                    「紅茶回不去，青茶打不過，蜜香被搶走」的絕境，讓創新與變革成為唯一的出路。
                  </div>
                  <div className="mt-5 border-t border-stone-200 pt-5">
                    <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
                      <Sparkles size={16} className="text-orange-700" />
                      你可以怎麼讀
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-stone-700">
                      <li>先點 01/02/03 了解「危機 → 推力」</li>
                      <li>再接著看下一章「創新之路」如何把劣勢轉成優勢</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
          <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
            <FlaskConical className="text-orange-700" size={20} />
            <h3 className="text-lg md:text-xl font-bold text-stone-900">絕處逢生：紅烏龍的創新之路</h3>
          </div>
          <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
            <p>
              在無路可走的情況下，台東茶人將目光投向了中國大陸的「武夷岩茶」。岩茶製程中「重攪拌、重發酵、重焙火」的工藝特點，為台東茶產業帶來了全新的靈感與啟發。
            </p>
            <p className="font-bold text-stone-900">核心理念：融合紅茶與烏龍茶的工藝</p>
            <p>紅烏龍最核心的創新，就在於其獨特的製程理念：結合紅茶的重發酵技術與烏龍茶的製程。</p>
            <p>
              這個想法打破了傳統製茶的分類框架，不再拘泥於單一茶類的製作方法，而是取兩者之長，借鑒武夷岩茶的製作精神，試圖創造出一種全新的風味。
            </p>
            <p className="font-bold text-stone-900">劣勢轉優勢：解決夏秋茶的苦澀</p>
            <p>
              這項創新的工藝，巧妙地解決了台東長久以來的氣候劣勢。台東夏季炎熱，導致夏、秋兩季的茶菁（茶葉原料）容易帶有苦澀味，過去常被視為低價品。
            </p>
            <p>
              然而，紅烏龍的製程汲取了岩茶的精髓，透過「重萎凋、重攪拌」的步驟，成功地將茶菁中原有的苦澀成分，轉化為滑順甘醇的口感。最後再經由「重焙火」工序，增加茶湯的層次與韻味。這個過程如點石成金，讓原本價值較低的夏秋茶，也能搖身一變成為高品質的「黃金」。
            </p>
            <p>
              這項於民國97年（2008年）正式發表的創新，不僅成功帶領台東茶產業走出困境，更創造出一種風味獨特、市場區隔明顯的全新茶品，開啟了台東茶的嶄新篇章。
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-orange-50/60 p-6">
            <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
              <BookOpen className="text-orange-700" size={18} />
              創新工藝密碼（與原本內容結合）
            </h3>
            <p className="text-stone-800 leading-relaxed">
              最初靈感來自武夷岩茶，但直接複製口感生澀。
              <br />
              <br />
              <strong>突破點：</strong>大膽引入<strong>紅茶的重度揉捻</strong>工藝。這打破了傳統框架，使得茶湯滋味滑順醇厚，兼具烏龍的喉韻與紅茶的甜潤。
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-stone-700">重發酵</span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-stone-700">重烘焙</span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-stone-700">重揉捻</span>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-900 text-stone-100 p-6">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Star className="text-amber-300" size={18} />
              獨特風味（與原本內容結合）
            </h3>
            <ul className="space-y-4 text-sm leading-6">
              <li className="flex items-start gap-3">
                <Droplets className="text-orange-300 mt-0.5" size={18} />
                <div>
                  <div className="font-bold text-orange-200">茶湯</div>
                  琥珀色澤，具紅茶般的醇厚滋味。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Wind className="text-orange-300 mt-0.5" size={18} />
                <div>
                  <div className="font-bold text-orange-200">風味</div>
                  保有烏龍茶的烘焙韻味與甘醇喉韻。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="text-orange-300 mt-0.5" size={18} />
                <div>
                  <div className="font-bold text-orange-200">香氣</div>
                  帶有熟果香或蜜香（夏季製作時尤為明顯）。
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
          <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
            <Sparkles className="text-orange-700" size={20} />
            <h3 className="text-lg md:text-xl font-bold text-stone-900">紅烏龍的獨特之處：風味、特色與優勢</h3>
          </div>
          <div className="px-6 py-6 space-y-6 text-stone-900 leading-relaxed font-medium">
            <p>為了更清晰地理解紅烏龍的獨特性，可以透過下表來比較它與傳統烏龍茶及紅茶的關鍵差異：</p>
            <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
              <table className="min-w-[780px] w-full text-sm">
                <thead className="bg-gradient-to-r from-stone-50 to-white border-b border-stone-200">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-bold tracking-widest text-stone-700 whitespace-nowrap">特性比較</th>
                    <th className="px-5 py-4 text-left text-xs font-extrabold tracking-widest text-orange-950 bg-gradient-to-b from-orange-100 to-orange-50 border-x border-orange-300/70">
                      紅烏龍
                    </th>
                    <th className="px-5 py-4 text-left text-xs font-bold tracking-widest text-stone-700">傳統烏龍茶 (以福鹿茶為例)</th>
                    <th className="px-5 py-4 text-left text-xs font-bold tracking-widest text-stone-700">傳統紅茶</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200/70">
                  <tr className="odd:bg-white even:bg-stone-50">
                    <td className="px-5 py-4 font-semibold text-stone-900 whitespace-nowrap align-top">核心製程特色</td>
                    <td className="px-5 py-4 bg-orange-50 border-x border-orange-300/70 text-stone-900 align-top leading-relaxed font-medium">
                      結合紅茶的重發酵與烏龍茶的製程，並加以重焙火
                    </td>
                    <td className="px-5 py-4 text-stone-900 align-top leading-relaxed">模仿南投青茶製程，強調喉韻與山頭氣</td>
                    <td className="px-5 py-4 text-stone-900 align-top leading-relaxed">早期外銷導向製程，完全發酵</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-stone-50">
                    <td className="px-5 py-4 font-semibold text-stone-900 whitespace-nowrap align-top">代表風味</td>
                    <td className="px-5 py-4 bg-orange-50 border-x border-orange-300/70 text-stone-900 align-top leading-relaxed font-medium">
                      兼具紅茶的茶湯滋味與烏龍茶的甘醇韻味，甚至帶有蜜香
                    </td>
                    <td className="px-5 py-4 text-stone-900 align-top leading-relaxed">傳統清香型烏龍茶風味</td>
                    <td className="px-5 py-4 text-stone-900 align-top leading-relaxed">滋味醇厚，為早期外銷市場主流風味</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-stone-50">
                    <td className="px-5 py-4 font-semibold text-stone-900 whitespace-nowrap align-top">歷史定位</td>
                    <td className="px-5 py-4 bg-orange-50 border-x border-orange-300/70 text-stone-900 align-top leading-relaxed font-medium">
                      將風土劣勢轉為特色優勢，解決夏秋茶菁問題
                    </td>
                    <td className="px-5 py-4 text-stone-900 align-top leading-relaxed">初期成功，然不敵高山茶崛起，終失市場</td>
                    <td className="px-5 py-4 text-stone-900 align-top leading-relaxed">早期外銷主力，後因匯率與國際競爭而衰落</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-lg font-extrabold text-stone-900 mb-2">紅烏龍的主要優勢總結</div>
              <p className="text-stone-900 leading-relaxed font-medium">根據上述比較與其發展背景，可以將紅烏龍的核心優勢歸納為以下三點：</p>
              <ol className="mt-4 grid gap-3 md:grid-cols-3 text-stone-900 font-medium">
                <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="font-bold">1. 風味獨特，兼容並蓄 </span>
                  它完美融合了紅茶的醇厚與烏龍茶的回甘，創造出市場上獨一無二的風味類型，成功建立了產品區隔，避免了與主流茶品的直接競爭。
                </li>
                <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="font-bold">2. 提升產值，點石成金 </span>
                  其製程能有效轉化夏、秋季茶菁的苦澀味，使其成為可利用的高品質原料，大幅提升了茶園的整體產值與茶農的收入。
                </li>
                <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="font-bold">3. 突破限制，因地制宜 </span>
                  紅烏龍的成功，是台灣茶產業「因地制宜」的最佳典範。它沒有盲目模仿他人，而是正視自身風土條件的限制，並將炎熱的氣候從製茶的劣勢，巧妙地轉變為成就其獨特風味的優勢。
                </li>
              </ol>
              <p className="mt-5 border-t border-stone-200 pt-4 text-stone-900 leading-relaxed font-medium">
                紅烏龍的誕生，不僅是一項製茶技術的突破，更是一個地方產業為了生存與尊嚴，奮力一搏的動人故事。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
          <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
            <AlertTriangle className="text-orange-700" size={20} />
            <h3 className="text-lg md:text-xl font-bold text-stone-900">當前挑戰：原產地 vs 仿製品（與原本內容結合）</h3>
          </div>
          <div className="px-6 py-6">
            <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-stone-700">挑戰面向</th>
                    <th className="px-6 py-4 text-left font-bold text-orange-800 bg-orange-50">台東紅烏龍 (原產地)</th>
                    <th className="px-6 py-4 text-left font-bold text-stone-700">其他產區仿製品</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="px-6 py-4 font-bold text-stone-700">生產成本</td>
                    <td className="px-6 py-4 bg-orange-50/30 text-stone-700">原料較少，產量有限，成本較高</td>
                    <td className="px-6 py-4 text-stone-700">擁大規模茶園，供應充足，成本較低</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-stone-700">市場競爭</td>
                    <td className="px-6 py-4 bg-orange-50/30 text-stone-700">需維持高品質與獨特性以區隔</td>
                    <td className="px-6 py-4 text-stone-700">利用規模經濟與價格優勢競爭</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold text-stone-700">品牌定位</td>
                    <td className="px-6 py-4 bg-orange-50/30 text-stone-700">擁有創始正統性與獨特風土價值</td>
                    <td className="px-6 py-4 text-stone-700">可能稀釋「紅烏龍」品牌價值</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-stone-600 text-sm italic text-right">*創新非終點，台東茶產業仍需持續精進以應對挑戰。</p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3">結語：不只是一款茶，更是台東的驕傲</h3>
          <div className="space-y-4 text-stone-800 leading-relaxed">
            <p>
              回顧台東茶產業的發展歷程，充滿了起伏與挑戰：從早期紅茶外銷的輝煌，到模仿青茶轉型的嘗試，再到被高山茶擊敗的困境，最終在幾乎山窮水盡的時刻，憑藉著不屈不撓的創新精神，催生了紅烏龍。
            </p>
            <p>
              這段歷史告訴我們，紅烏龍的價值遠不止於其獨特的風味。它代表的是一個產業在逆境中如何自我反思、掙扎求生，並最終找到屬於自己道路的奮鬥史。它不僅是一款茶，更是台東茶人智慧與勇氣的象徵。如今，雖然其他茶區也開始模仿製作紅烏龍，使台東面臨新的競爭，但這份源於在地的開創精神，正是其最無法被複製的核心價值。
            </p>
            <p className="font-bold text-stone-900">「這段從絕境重生的經驗，是我們最珍貴的資產。」</p>
          </div>
        </div>
      </div>
    </div>
  );
}
