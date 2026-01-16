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
            <p className="text-sm text-stone-700">
              當時實施的是一種具備高度戰略意義的「契作加工」模式，展現了計畫經濟下的產業組織力。
            </p>
            <p className="text-sm font-semibold text-stone-900">紅茶生產體系</p>
            <p className="text-sm text-stone-700">
              那是「工廠登記立案制」的時代，唯有登記立案的工廠如「高台茶廠」與「源昌茶工廠（現為新原）」具備加工與行銷權。當時的茶農並無製茶權，茶菁採摘後統一由工廠卡車運回。家家戶戶秤重寫單、全家動員「擠茶」的景象，是老一代台東茶人心中繁榮的社會縮影。
            </p>
            <p className="text-sm font-semibold text-stone-900">外銷沒落之謎</p>
            <p className="text-sm text-stone-700">
              這段黃金年代的終結，源於國際經濟局勢的劇烈動盪。隨著台幣匯率波動削弱了出口競爭力，加上肯亞等東非紅茶產地的強勢崛起，台東紅茶在國際標場失去優勢。從「外銷導向」轉向「內銷受挫」，導致了長達數十年的產業萎縮，也讓農村陷入了空前的經濟焦慮。
            </p>
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
        <div className="rounded-2xl border border-stone-200 bg-white/80 backdrop-blur-sm overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-orange-500" />
              <Map className="text-orange-700" size={20} />
              <h3 className="text-lg md:text-xl font-bold text-stone-900">台東茶鄉：三大高台的風土</h3>
            </div>
            <div className="px-6 py-6 space-y-6">
            <p className="text-stone-800 leading-relaxed">
              台東鹿野茶區的興起並非偶然，其地理多樣性為產業奠定了堅實基礎。沿著台九線由南往北，分布著三個各具特色的「高台」地貌，這些地形落差在 200 至 300 公尺之間，形成了類似「山城」與「路邊」的空間層次，不僅利於排水，也創造了獨特的微氣候。這種「階梯式」的地理分布，對後續茶區的品牌辨識與觀光化發展產生了深遠影響。
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="font-bold text-stone-900 mb-2">美農高台</div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  作為由台東市往南的第一站，這裡是台東茶業發展的隱藏起點。知名的「寒舍茶坊」便座落於此，其地勢足以俯瞰整個台東市的燦爛夜景。有趣的是，由於名稱皆有「高台」二字，常有外地旅客在火車站叫計程車時，因導航誤區被載往美農高台而非鹿野高台，意外成為當地產業史中一段充滿人情味的插曲。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="font-bold text-stone-900 mb-2">初鹿高台</div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  以初鹿牧場聞名，早期是極其重要的茶菁供應區。在產業全盛時期，初鹿牧場周邊約有 20 公頃的契約耕作，高品質的茶菁供應量曾占當時製茶廠的一半。除了茶葉，這裡的初鹿鮮奶亦是吸引觀光客的重要資源，形成了乳香與茶香交織的特殊地景。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="font-bold text-stone-900 mb-2">鹿野高台</div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  目前知名度最高，與飛行傘、熱氣球等空域活動緊密結合。其廣達四公頃的大草原（原為鳳梨田）與海拔落差形成的視覺層次，讓遊客能從高處俯瞰整個村莊，形成獨特的觀光茶園生態。
                </p>
              </div>
            </div>
            <p className="text-stone-700 leading-relaxed">
              這種高台地理優勢，使茶業得以與休閒觀光深度結合，打破了傳統農業的單一模式，為後來紅烏龍的品牌化轉型埋下了伏筆。
            </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-amber-500" />
              <History className="text-orange-700" size={20} />
              <h3 className="text-lg md:text-xl font-bold text-stone-900">為何需要新品種？台東茶產業的三次危機</h3>
            </div>
            <div className="px-6 py-6 space-y-5 text-stone-800 leading-relaxed">
            <p>
              紅烏龍的誕生並非偶然，而是台東茶產業在歷經多次衝擊後，被逼到「沒有退路」的境地時，才誕生的產物。它是一款真正「從『絕境』中誕生的產物」。
            </p>
            <p>在紅烏龍問世前，台東茶產業曾遭遇了三次幾乎使其一蹶不振的重大危機。</p>

            <div className="rounded-2xl border border-stone-200 bg-white/65 p-4 md:p-5">
              <div className="space-y-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
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
                        className={`group relative w-full overflow-hidden rounded-2xl border px-4 py-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${isActive
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
              <div className="rounded-2xl border border-stone-200 bg-white/70 p-5">
                <div className="text-xs font-bold tracking-widest text-stone-500">CRISIS</div>
                <div className="mt-2 text-lg font-bold text-stone-900">{activeCrisis.title}</div>
                <div className="mt-4">{activeCrisis.content}</div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-orange-500" />
              <AlertTriangle className="text-orange-700" size={20} />
              <h3 className="text-lg md:text-xl font-bold text-stone-900">多重產業瓶頸：鳳梨與甘蔗的退出與危機</h3>
            </div>
            <div className="px-6 py-6 space-y-5 text-stone-800 leading-relaxed">
            <p>
              在紅茶衰落的同時，台東傳統作物同時面臨退場，形成了一場多重夾擊的「產業絕境」。這種真空狀態讓老一輩農民——包括講者的祖父輩——陷入了極大的經濟恐慌。
            </p>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">傳統產業的連鎖反應</div>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-700">
                <li>鳳梨業的終結： 曾經專門供應軍隊需求的「大春」鳳梨罐頭工廠撤離，對當地農民造成重創。大片鳳梨田失去收購去路，直接切斷了許多家庭的生計。</li>
                <li>糖廠關閉與甘蔗沒落： 隨著台東作為糖業「原料區」的歷史結束，甘蔗田大量流失，曾經的綠色經濟支柱一夕崩塌。</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">生存挑戰評估</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                當時台東交通極度不便，資訊閉塞，農民彷彿被困在孤島。看著鳳梨、甘蔗與紅茶相繼倒下，這種無路可走的絕望，迫使在地人開始向外尋求技術支援，進而開啟了引進南投經驗的「青茶（烏龍茶）」試驗期。
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-amber-500" />
              <Sparkles className="text-orange-700" size={20} />
              <h3 className="text-lg md:text-xl font-bold text-stone-900">轉型青茶之路：南投經驗與傳奇人物的引入</h3>
            </div>
            <div className="px-6 py-6 space-y-5 text-stone-800 leading-relaxed">
            <p>
              為了打破絕境，台東茶農開始透過「南投人才引入」與「栽培技術革新」打破技術壁壘，重塑產業結構。
            </p>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">關鍵技術革新</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                傳奇人物黃石定先生引入了「壓條法」。在當時茶苗昂貴且缺乏扦插技術的背景下，他租下初鹿牧場的茶樹，透過將茶枝壓入土中繁育新苗，再以較低價格轉售給當地農民。這套聰明的商業邏輯，讓原本昂貴的青心烏龍在鹿野得以大規模普及。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">傳奇人物的影響</div>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-700">
                <li>陳德意與天仁李文川： 經李文川先生引薦，名間鄉製茶大師陳德意來到台東。他精湛的製茶技術讓台東青茶在北部市場聲名大噪，幾乎是「做多少賣多少」。</li>
                <li>蘇義吉的天價租約： 當時最具指標性的事件是蘇義吉一公頃的茶園，被陳德意以每年 90 萬元 的高價承租。在當時地價不到 300 萬元的年代，年租金竟高達地價的三分之一，這筆「驚天動地」的天價租約瞬間傳遍鹿野，引發了全區大規模改種青茶的浪潮。</li>
              </ol>
            </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-orange-500" />
              <BookOpen className="text-orange-700" size={20} />
              <h3 className="text-lg md:text-xl font-bold text-stone-900">制度與品牌確立：福鹿茶的命名與官方扶持</h3>
            </div>
            <div className="px-6 py-6 space-y-5 text-stone-800 leading-relaxed">
            <p>
              1980 年代初期，三項關鍵因素共同作用，使台東茶業從小規模試探轉向專業化與品牌化經營。
            </p>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">品牌命名史</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                起源於蔣彥士先生在關山品嚐同鄉水餃後的鄉野考察，後來由時任省主席的李登輝先生正式定名為「福鹿茶」。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">三大發展要素分析</div>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-700">
                <li>技術研發： 民國 70 年茶業改良場台東分場成立，提供了在地化的技術支撐。</li>
                <li>法規開放： 1982 年修法允許「家庭式小型工廠」經營（免稅制），這是今日台東隨處可見「製茶所」而非大型工廠的法理起源。</li>
                <li>品牌確立： 透過李登輝先生的命名推廣，「福鹿茶」在市場上確立了正式地位。</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">艱辛創業背景</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                當時物資匱乏，農民多收購中南部淘汰的舊機器，自行修理後組建製茶所。這種「克難精神」支撐了台東青茶的黃金二十年。
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-amber-500" />
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
            <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-sm font-bold text-stone-900 mb-2">從競爭敗退到創新：紅烏龍的誕生契機</div>
              <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
                <p>
                  民國 80 年代中期，台東青茶再度面臨危機。由於交通改善與高山茶崛起，低海拔且氣候炎熱的台東，在與鹿谷凍頂或高山茶的競爭中，因清香度不足而節節敗退。
                </p>
                <p>
                  <strong>蜜香紅茶的遺珠之憾：</strong> 台東早期曾研發出蜜香技術，但當時工廠因不願放棄青茶市場，缺乏變革的勇氣；反觀當時已處於廢墟邊緣的瑞穗舞鶴茶區，因「無路可退」而大膽採用，最終讓蜜香紅茶在花蓮發揚光大。
                </p>
                <p>
                  <strong>紅烏龍的技術突破：</strong> 為了在夾縫中生存，民國 97 年正式發表「紅烏龍」。這項技術突破的核心，在於將台東夏季茶菁的「苦澀」劣勢轉化為優勢。製法融合了大陸岩茶的「重發酵、重焙火」精神，並加入紅茶的「揉捻」技術。
                </p>
                <p>
                  <strong>戰略價值：</strong> 「半球型」外觀能保持風味穩定且便於存放。紅烏龍成功結合了「紅茶的色、凍頂的韻、青茶的蜜香」，終於在市場建立了不可取代的獨特性。
                </p>
              </div>
            </div>
            <p>
              這項於民國97年（2008年）正式發表的創新，不僅成功帶領台東茶產業走出困境，更創造出一種風味獨特、市場區隔明顯的全新茶品，開啟了台東茶的嶄新篇章。
            </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-orange-50/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg motion-safe:animate-fadeIn">
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

          <div className="rounded-2xl border border-stone-200 bg-stone-900 text-stone-100 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl motion-safe:animate-fadeIn">
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

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-orange-500" />
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

            <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-amber-500" />
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
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden group relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-200 motion-safe:animate-fadeIn">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50/80 to-white flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-orange-500" />
              <MapPin className="text-orange-700" size={20} />
              <h3 className="text-lg md:text-xl font-bold text-stone-900">東部茶區現狀與未來戰略思考</h3>
            </div>
            <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
            <p>
              目前東部茶區已形成從坪林、宜蘭、花蓮（瑞穗、赤柯山、六十石山）到台東鹿野的茶葉遷徙軸線。
            </p>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">早期的行商歲月</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                紅烏龍的重生背後，是茶商強韌的勇氣。講者曾回憶，過去載著茶葉北上，在台北茶行門口停下車，因為害怕被冷眼拒絕，竟在車裡坐了一個小時才有勇氣踏出車門。這種「在路頭拜託」的艱辛，是產業背後最溫暖的人文底色。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">紅烏龍的當前挑戰</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                隨著阿里山、名間等茶區也開始製作紅烏龍，台東面臨嚴峻的成本競爭。作為「紅烏龍原鄉」，台東必須思考差異化對策，強化品牌深度與品質控管。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <div className="font-semibold text-stone-900 mb-2">總結與願景</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                紅烏龍是台東茶業在無路可走的絕境中，憑藉創新與韌性開出的重生奇蹟。面對未來的競爭，我們必須守護這份獨特的價值，讓這份來自高台的茶香，持續在全球市場綻放光芒。
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 via-white to-orange-50/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg motion-safe:animate-fadeIn">
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
