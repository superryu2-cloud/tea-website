import React from 'react';
import { Mountain, Cloud, Thermometer, Sun, Wind, ShieldCheck, TrendingUp, Sprout, Feather, DollarSign } from 'lucide-react';

export default function GaoshanOolongContent() {
  return (
    <div className="animate-fadeIn space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50 text-stone-800 rounded-3xl overflow-hidden p-8 md:p-16 border border-stone-100 shadow-xl shadow-sky-100/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/20 to-teal-200/20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/30 to-amber-50/30 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-sky-100 text-sky-800 text-sm font-bold shadow-sm backdrop-blur-sm mb-6">
            <Mountain size={14} className="text-sky-600" />
            <span className="tracking-widest">台灣茶之巔</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-sky-900 leading-tight mb-8">
            高山烏龍茶
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
            以高海拔地理條件，<br className="md:hidden" />孕育清甜、細緻與耐泡的獨特風韻。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
        {/* Section 1: Geography & Terroir */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
            <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
              <Thermometer size={24} />
            </div>
            <h3 className="text-2xl font-bold text-stone-800">地理特質與戰略價值</h3>
          </div>

          <div className="space-y-6 text-lg text-stone-700 leading-loose">
            <p>
              台灣高山茶的戰略價值，源自於地理環境對植物生理的獨特形塑。當海拔跨越一千公尺，每上升一百公尺，溫度約下降 <span className="font-bold text-sky-700">0.6 度</span>。以海拔 2600 公尺的福壽山為例，其氣溫便比平地低了約 <span className="font-bold text-sky-700">13 度</span>。這種低溫環境與雲霧繚繞的特性，賦予了高山茶迷人的特質。
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-sky-50 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-sm text-emerald-600">
                <Sun size={24} />
              </div>
              <p className="text-stone-700">
                高山雲霧如同為茶樹「打傘」，將強烈的紫外線轉化為<span className="font-bold text-emerald-800">「漫射光」</span>，阻礙了兒茶素與咖啡因的形成，進而降低了茶湯的苦澀味；同時，因生長環境艱困，植物會累積更豐厚的<span className="font-bold text-emerald-800">果膠質</span>，使口感更顯順滑厚實。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Mountain Qi & Authenticity */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
            <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
              <Wind size={24} />
            </div>
            <h3 className="text-2xl font-bold text-stone-800">高山氣與真偽辨識</h3>
          </div>

          <div className="space-y-6 text-lg text-stone-700 leading-loose">
            <p>
              高山茶因生長緩慢而質地扎實，極其耐沖泡。最迷人的莫過於<span className="font-bold text-teal-800">「高山氣（Gao-Sua-Ki）」</span>。在科學上，這是植物為抵抗寒濕而分泌的一種抵抗素（醇類芳香油），用於自我保護與治療，但在茶人的感知中，這種芳香物質轉化為獨特的「山頭氣」，是海拔與風土的餽贈。
            </p>

            <div className="mt-8 border border-amber-200 bg-amber-50/50 rounded-2xl overflow-hidden">
              <div className="bg-amber-100/50 px-6 py-3 flex items-center gap-2 border-b border-amber-200">
                <ShieldCheck size={20} className="text-amber-700" />
                <span className="font-bold text-amber-900">市場觀察與理性判斷</span>
              </div>
              <div className="p-6 relative">
                <p className="border-l-4 border-amber-400 pl-4 italic text-stone-700">
                  然而，市場上的「梨山」或「大禹嶺」已成為一種行銷圖騰。若一斤茶價格低到三斤兩千元，連每斤茶青約 80 元的採茶工資（四斤青成一斤乾茶）都無法支應，那極有可能是「離山很遠」的偽茶。理解產區成本與地理特質，是建立專業茶學理性的必要基礎。
                </p>
                <div className="absolute right-4 bottom-4 opacity-10">
                  <DollarSign size={64} className="text-amber-900" />
                </div>
              </div>
            </div>

            {/* Visual Break: High Mountain Imagery */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-stone-200 group">
              <div className="relative overflow-hidden h-64 md:h-80">
                <img
                  src="/images/taiwan_high_mountain_misty.png"
                  alt="雲霧繚繞的台灣高山茶園"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6 right-6 text-white text-shadow-sm">
                  <p className="flex items-center gap-2 font-medium tracking-wide">
                    <Cloud size={18} className="text-sky-300" />
                    雲霧繚繞，孕育「高山氣」的搖籃
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Cultural Transformation */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-2xl font-bold text-stone-800">茶區實踐與文化轉型：從產地到生活美學</h3>
          </div>

          <div className="space-y-6 text-lg text-stone-700 leading-loose">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-indigo-200 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
              台灣茶文化正經歷從產地到生活美學的轉型。雖然南投縣佔全台總產量 65%，但嘉義阿里山仍是高山茶最先興起的核心領頭羊。各茶區依海拔與工藝展現不同風貌，如杉林溪著名的「十二生肖彎」，每一彎道皆是獨特的茶區風景。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-indigo-50/30 p-5 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-2 mb-3 text-indigo-800 font-bold">
                  <Sprout size={18} />
                  <span>生態分級創新</span>
                </div>
                <p className="text-base text-stone-600 mb-3">
                  例如慈心的有機比賽茶，改用象徵生態健康的「金蛙、銀蛙、翠蛙」進行分級；新竹的東方美人茶則以標籤上的「小綠葉蟬」數量（六隻蟲為最高級）來定義品質。
                </p>
                <div className="flex gap-2.5 mt-2 bg-white/50 p-2 rounded-lg inline-flex">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-yellow-300 bg-yellow-50" title="金蛙">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                    <span className="text-xs font-bold text-yellow-700">金蛙</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-slate-300 bg-slate-50" title="銀蛙">
                    <div className="w-3 h-3 rounded-full bg-slate-400 shadow-sm"></div>
                    <span className="text-xs font-bold text-slate-600">銀蛙</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-emerald-300 bg-emerald-50" title="翠蛙">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></div>
                    <span className="text-xs font-bold text-emerald-700">翠蛙</span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50/30 p-5 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-2 mb-3 text-indigo-800 font-bold">
                  <Feather size={18} />
                  <span>語言與文化</span>
                </div>
                <p className="text-base text-stone-600">
                  歷史上也曾出現有趣的文化對接，木柵老茶人曾將鐵觀音外銷翻譯為「TQ」，其邏輯是將觀音視為英國文化中的「Queen（皇后）」，而「T」既代表鐵（Tie）也象徵茶（Tea）。
                </p>
              </div>
            </div>
            <p>
              這些創意讓消費者更直觀地理解茶與生態的共生關係，那份草根智慧也令人莞爾。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
