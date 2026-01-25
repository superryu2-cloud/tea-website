import React from 'react';
import {
  Award,
  Bug,
  History,
  Leaf,
  MapPin,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  AlertOctagon,
  FlaskConical,
  Microscope,
  Quote
} from 'lucide-react';
import ReadingAssist from '../../components/ReadingAssist';

const PatternDoily = () => (
  <svg width="100%" height="100%" className="absolute inset-0 opacity-5 pointer-events-none text-stone-900" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="doily" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="currentColor" />
        <circle cx="22" cy="22" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#doily)" />
  </svg>
);

const SectionDivider = () => (
  <div className="flex justify-center items-center py-16 opacity-30">
    <div className="h-px w-24 bg-stone-400" />
    <div className="mx-4 text-stone-400">❖</div>
    <div className="h-px w-24 bg-stone-400" />
  </div>
);

export default function HoneyAromaBlackTeaContent() {
  const contentRef = React.useRef(null);
  return (
    <div className="animate-fadeIn font-sans text-stone-800 selection:bg-amber-100 selection:text-amber-900">

      {/* 1. HERO SECTION: Cinematic & Immersive */}
      <div className="relative h-[80vh] min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group border border-stone-900/10 mx-4 md:mx-0">
        <div className="absolute inset-0">
          <img
            src="/images/honey_black_tea.png"
            alt="Honey Black Tea Landscape"
            className="w-full h-full object-cover transform transition-transform duration-[10s] group-hover:scale-110 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-900/90" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
          <div className="max-w-4xl animate-slideUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-lg">
              <Leaf size={12} className="text-amber-400" />
              Taiwan Specialty Tea
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight drop-shadow-2xl">
              從蟲害<br />到金牌的奇蹟
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 font-light leading-relaxed max-w-2xl drop-shadow-md border-l-4 border-amber-500 pl-6">
              原本的蟲害災難，意外開啟了天然蜜香的誕生路徑。<br className="hidden md:block" />
              當人類願意退一步，大自然便以最豐厚的風味回報。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-20 relative z-10">
        <ReadingAssist contentRef={contentRef} headingSelector="h2, h3" />
        <div ref={contentRef}>
          {/* 2. INTRO: Magazine Style Layout */}
          <section className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-stone-100 relative overflow-hidden">
            <PatternDoily />
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 pt-4">
                <div className="sticky top-24">
                  <h3 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-4 flex items-center gap-2">
                    <History size={16} /> Introduction
                  </h3>
                  <h2 className="text-4xl font-extrabold text-stone-900 mb-6 leading-tight">
                    一場<br /><span className="text-amber-600">不完美</span><br />的相遇
                  </h2>
                  <div className="h-1 w-20 bg-amber-500 rounded-full" />
                </div>
              </div>
              <div className="md:w-2/3 space-y-8 text-lg text-stone-700 leading-loose">
                <p>
                  想像一位憂心忡忡的茶農，步入本該是滿園翠綠的茶田，迎來的卻不是飽滿的嫩芽，而是一片片遭蟲吻後蜷曲、枯黃的葉片。
                  在傳統耕作的觀念裡，這是一場徹頭徹尾的災難。
                </p>
                <p>
                  空氣中瀰漫的不是茶香，而是心血付諸東流的嘆息：產量下降、收成不穩、品質難保——一切看起來都指向「失敗」。
                  但也正是這份不完美，讓茶樹啟動了意想不到的防禦機制，埋下蜜香的伏筆。
                </p>
                <blockquote className="p-8 bg-amber-50/50 border-l-4 border-amber-400 rounded-r-2xl text-stone-800 text-xl font-medium">
                  旅程的起點，得從那隻曾被視為不祥之兆的小蟲說起。
                </blockquote>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* 3. TERROIR & ORIGIN: Parallax & Glassmorphism */}
          <section className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-12 mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 text-center">
                蜜香紅茶的起源秘密<br />
                <span className="text-lg md:text-xl font-sans font-normal text-stone-500 mt-2 block">小綠葉蟬與舞鶴台地的生態傳奇</span>
              </h2>
            </div>

            {/* Large Visual Card */}
            <div className="lg:col-span-7 relative h-[600px] rounded-[2.5rem] overflow-hidden group shadow-lg">
              <img
                src="/images/academy/chonghua-chapter03/organic_tea_garden.png"
                alt="Organic Tea Garden"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 text-white">
                <div className="bg-amber-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-amber-500/30">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-4">蜜香之源：從「蟲害危機」誕生的天然風味</h3>
                <p className="text-stone-200 leading-relaxed mb-6 text-lg line-clamp-4 group-hover:line-clamp-none transition-all">
                  蜜香紅茶的誕生，堪稱台灣茶業史上最具顛覆性的轉折。在追求極致感官體驗的精品茶市場中，這款茶常因其醇厚的蜂蜜甜香引人遐想...
                </p>
                <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-sm leading-relaxed text-stone-100">
                  真正蜜香源於一場大自然與生態博弈下的「危機轉型」。將傳統農業觀點中的「天災」轉化為「至寶」。
                </div>
              </div>
            </div>

            {/* Vertical Info Stack */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Card 1: The Core logic */}
              <div className="flex-1 bg-stone-100 p-8 rounded-[2.5rem] hover:bg-amber-50 transition-colors duration-300 border border-transparent hover:border-amber-200">
                <Bug className="text-stone-400 mb-4" size={32} />
                <h4 className="text-xl font-bold text-stone-900 mb-3">戰略性視角切換</h4>
                <p className="text-stone-600 leading-relaxed">
                  蜜香紅茶的核心精髓，源自於茶農一度視為夢魘的「小綠葉蟬」蟲害。這種「由損害成就極致」的邏輯，定義了其作為生態與工藝結合的獨特地位。
                </p>
              </div>

              {/* Card 2: Environment */}
              <div className="flex-1 bg-stone-900 text-stone-300 p-8 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <MapPin size={120} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <MapPin className="text-emerald-500" size={20} /> 舞鶴台地
                </h4>
                <p className="leading-relaxed">
                  地理與歷史契機：舞鶴台地位於紅葉溪與秀姑巒溪的交會處。1990 年代高山茶崛起，中低海拔的舞鶴面臨產業陣痛，迫使農民尋求「差異化」道路。
                </p>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* 4. THE PROTAGONIST: Specimen Card Style */}
          <section className="bg-stone-50 rounded-[3rem] p-8 md:p-12 border border-stone-200 relative">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[120px] font-black text-stone-200/50 select-none z-0">
              JACOBIASCA
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative w-full aspect-square max-w-sm mx-auto bg-white rounded-full p-2 border-4 border-emerald-100 shadow-2xl">
                  <div className="absolute inset-0 rounded-full border border-stone-100 m-4 animate-spin-slow opacity-50 border-dashed" />
                  <img
                    src="/images/leafhopper.png"
                    alt="Little Green Leafhopper"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 bg-white px-6 py-2 rounded-full shadow-lg border border-stone-100 flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-stone-800">Jacobiasca formosana</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-extrabold text-stone-900 mb-2">生態主角：小綠葉蟬</h3>
                  <p className="text-stone-500 font-medium">從「農業災難」到「工藝催化劑」</p>
                </div>

                <div className="prose prose-stone leading-loose text-stone-600">
                  <p>
                    這種體型微小的生物，生命週期僅約數十天，但每年的 5 月至 7 月是其繁衍高峰。它採「刺吸式」口器吸取茶樹幼嫩芽葉的汁液。受害的茶葉會顯現出捲曲、皺縮。
                  </p>
                  <p>
                    然而，正是這種生長停滯，促使葉片內部的化學物質開始濃縮與轉化，為後續的神祕蜜味埋下了伏筆。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-red-50 text-red-500 rounded-full"><ShieldAlert size={20} /></div>
                    <h4 className="font-bold text-stone-900">關鍵誤解釐清</h4>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed border-l-2 border-red-200 pl-4">
                    蜜香並非來自蟲的口水，而是茶樹被叮咬後，為了求救而啟動防禦機制，所「自我生成」的特殊芳香物質。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. HISTORY timeline: Vertical Cards */}
          <div className="mt-24 space-y-12">
            <h3 className="text-center text-3xl font-extrabold text-stone-900">演進歷程</h3>

            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center group">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-stone-100 rounded-full flex items-center justify-center text-xl md:text-3xl font-black text-stone-300 border-4 border-white shadow-lg group-hover:bg-amber-50 group-hover:text-amber-500 transition-colors">
                1990s
              </div>
              <div className="flex-1 bg-white p-8 rounded-3xl border border-stone-100 shadow-md group-hover:border-amber-200 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <FlaskConical className="text-amber-500" size={24} />
                  <h4 className="text-xl font-bold text-stone-900">研發里程碑</h4>
                </div>
                <p className="text-stone-600 leading-loose">
                  台東茶葉改良場的 <strong>陳惠藏課長</strong>。他借鑒「東方美人茶」原理，將同樣受過小綠葉蟬吸食的茶菁，嘗試製成全發酵紅茶。實驗成品令人驚艷，茶湯具備天然蜂蜜香氣，且生產模式具備更高感官價值與成本競爭力。
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center group">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-stone-100 rounded-full flex items-center justify-center text-xl md:text-3xl font-black text-stone-300 border-4 border-white shadow-lg group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                2003
              </div>
              <div className="flex-1 bg-white p-8 rounded-3xl border border-stone-100 shadow-md group-hover:border-emerald-200 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="text-emerald-500" size={24} />
                  <h4 className="text-xl font-bold text-stone-900">無毒農業的推動</h4>
                </div>
                <p className="text-stone-600 leading-loose">
                  花蓮推動「無毒農業」政策。舞鶴高肇昫班長率先響應停止施藥。小綠葉蟬如預期般爆發，茶園滿目瘡痍。但高班長試製後大獲全勝。這揭示了深層邏輯：「無毒耕作」是蜜香品質的絕對先決條件。
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center group">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-stone-100 rounded-full flex items-center justify-center text-xl md:text-3xl font-black text-stone-300 border-4 border-white shadow-lg group-hover:bg-amber-50 group-hover:text-amber-500 transition-colors">
                2010
              </div>
              <div className="flex-1 bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl border border-amber-100 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-amber-500" size={24} />
                  <h4 className="text-xl font-bold text-stone-900">榮耀與反直覺經濟</h4>
                </div>
                <p className="text-stone-600 leading-loose mb-6">
                  2006年首屆天下名茶大賽金牌；2010年國際名茶評比四面金牌。這在產業內建立了一套反直覺的因果關係：<strong className="text-amber-800">「蟲害越嚴重，茶香越濃郁」</strong>。成功實現了經濟收益與生態保育的正向循環。
                </p>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-bold text-amber-700 whitespace-nowrap border border-amber-100">天下名茶金牌</span>
                  <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-bold text-amber-700 whitespace-nowrap border border-amber-100">國際名茶四金</span>
                </div>
              </div>
            </div>
          </div>

          <SectionDivider />

          {/* 6. SCIENCE: Lab Style */}
          <section className="bg-stone-50 rounded-3xl p-10 border border-stone-200 relative overflow-hidden">
            {/* Graph Paper Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg mb-8 text-stone-800">
                <Microscope size={32} />
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-8">科學解密：生物性握手</h3>

              <div className="text-left bg-white p-8 rounded-2xl shadow-sm border border-stone-200 leading-loose text-lg text-stone-700">
                <p className="mb-6">
                  <span className="float-left text-5xl font-black text-stone-200 mr-4 -mt-2">"</span>
                  蜜香的真相，實際上是茶樹精妙的『求救信號』。
                  根據研究，當茶樹遭受小綠葉蟬叮咬時，會分泌揮發性化學成分（萜類化合物）。
                </p>
                <p className="mb-6">
                  這些香氣是為了吸引葉蟬的天敵——<strong className="text-stone-900 font-sans">白斑蠟蛛</strong>。
                  科學證實，單純物理損傷無效，關鍵在於<span className="bg-amber-100 px-1">「小綠葉蟬的口腔分泌物（唾液）」</span>與茶樹組織的接觸。
                </p>
                <p>
                  這種無法人工合成的天然反應，構成了蜜香紅茶極高的技術壁壘與價值。
                </p>
              </div>
            </div>
          </section>

          {/* 7. CONCLUSION */}
          <div className="text-center py-24">
            <Quote size={48} className="mx-auto text-amber-200 mb-8 opacity-50" />
            <p className="text-2xl md:text-3xl font-bold text-stone-800 max-w-4xl mx-auto leading-relaxed">
              「蜜香紅茶的傳奇，是生態、技術與勇氣結合的結晶。<br />
              它代表了一種全新的農業思維：將大自然的考驗視為賦予價值的契機。」
            </p>
            <div className="mt-8 text-stone-400 text-sm tracking-widest uppercase font-bold">
              In Harmony with Nature
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
