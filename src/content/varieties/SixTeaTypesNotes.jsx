import React, { useRef } from 'react';
import {
  Leaf,
  Droplets,
  Thermometer,
  Wind,
  History,
  BookOpen,
  Map,
  Coffee,
  Sparkles,
  Sprout,
  Info,
  AlertTriangle,
  AlertCircle,
  Heart,
  CheckCircle,
  HelpCircle,
  Flame,
  Search,
  Mountain,
  Sun,
  Calendar,
  Clock
} from 'lucide-react';
import FudingHistory from './chapters/FudingHistory';
import GreenTeaSupplement from './GreenTeaSupplement';
import ReadingAssist from '../../components/ReadingAssist';

function ProcessLine({ children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
      <div className="text-sm font-extrabold tracking-widest text-stone-500">PROCESS</div>
      <div className="mt-2 font-extrabold text-stone-900 leading-relaxed">{children}</div>
    </div>
  );
}

function Bullet({ title, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
      <div className="text-base font-extrabold text-stone-900">{title}</div>
      <div className="mt-2 text-[17px] text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function SixTeaTypesNotes({ kind }) {
  const [whiteTab, setWhiteTab] = React.useState('general');
  const greenContentRef = useRef(null);

  if (!kind) return null;

  if (kind === 'white') {
    return (
      <div className="space-y-8 animate-fadeIn">

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[400px] group">
          <img
            src="/images/white_tea_silver_needle.png"
            alt="Silver Needle White Tea in Sunlight"
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-800/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <div className="max-w-2xl text-white space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-bold tracking-widest uppercase">
                <Sun size={12} /> Micro Fermentation
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-white/95 text-shadow-sm flex items-center gap-4">
                <img src="/images/assets/eastern_art/ink_zen_circle.png" alt="" className="w-16 h-16 opacity-80 invert brightness-0" />
                白茶：大道至簡的純粹
              </h2>
              <p className="text-[19px] md:text-xl text-stone-100 leading-relaxed font-light opacity-90">
                工藝極簡，不炒不揉，只隨日月萎凋。
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex p-1 bg-stone-100 rounded-2xl border border-stone-200">
          <button
            onClick={() => setWhiteTab('general')}
            className={`flex-1 py-3 px-4 rounded-xl text-base font-extrabold transition-all duration-300 shadow-sm ${whiteTab === 'general'
              ? 'bg-stone-800 text-white shadow-md transform scale-[1.02]'
              : 'bg-white/50 text-stone-500 hover:text-stone-700 hover:bg-white'
              }`}
          >
            白茶通識 (General)
          </button>
          <button
            onClick={() => setWhiteTab('history')}
            className={`flex-1 py-3 px-4 rounded-xl text-base font-extrabold transition-all duration-300 shadow-sm ${whiteTab === 'history'
              ? 'bg-amber-900 text-white shadow-md transform scale-[1.02]'
              : 'bg-white/50 text-stone-500 hover:text-stone-700 hover:bg-white'
              }`}
          >
            專題：福鼎白茶史 (History)
          </button>
        </div>

        {whiteTab === 'general' ? (
          <div className="space-y-12 animate-slideInUp">
            {/* Classification & Process Visuals */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Classification */}
              <div className="col-span-1 p-6 rounded-3xl bg-white border border-stone-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-sky-500 transition-opacity group-hover:opacity-20">
                  <Thermometer size={100} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <History size={20} className="text-sky-600" /> 分類座標
                </h3>
                <div className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <div className="flex justify-between items-end text-sm font-bold text-stone-500 uppercase tracking-widest">
                      <span>White Tea</span>
                      <span>5% - 10%</span>
                    </div>
                    <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-200 w-[10%] relative">
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-sky-500 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-sm text-stone-400 text-right">微發酵</p>
                  </div>
                  <ul className="text-[17px] text-stone-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span className="leading-snug">
                        <strong className="text-stone-900">非綠茶：</strong>
                        雖接近綠茶，但有<span className="text-sky-600 font-bold">「輕微發酵」</span>作為風味轉化起點。
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span className="leading-snug">
                        <strong className="text-stone-900">關鍵字：</strong>
                        <span className="bg-sky-50 text-sky-700 px-1 rounded">白毫</span>
                        <span className="mx-1"></span>
                        <span className="bg-sky-50 text-sky-700 px-1 rounded">萎凋</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Process Visual - Withering */}
              <div className="col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden shadow-sm border border-stone-200 group">
                <img
                  src="/images/white_tea_withering.png"
                  alt="Sun Withering Process"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

                <div className="relative p-8 h-full flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <Sun size={20} className="text-amber-500" /> 核心工藝：萎凋
                    </h3>
                    <div className="text-2xl font-black text-stone-800">
                      「不炒不揉，自然天成」
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="text-sm font-bold tracking-widest text-stone-500 uppercase">THE CRAFT</div>
                      <p className="text-[17px] text-stone-700 leading-relaxed">
                        看似簡單的「曬乾」，實則是極需經驗的<strong>「萎凋」</strong>。
                        需精準控制陽光、溫度與濕度，引導茶葉內含物質進行微發酵轉化。
                      </p>
                    </div>
                    <div className="space-y-2 border-l-2 border-amber-200 pl-4">
                      <div className="text-sm font-bold tracking-widest text-stone-500 uppercase">THE RESULT</div>
                      <p className="text-[17px] text-stone-700 leading-relaxed">
                        保留了最豐富的毫香與鮮甜。
                        <br />
                        <span className="text-sm text-stone-500 block mt-1">
                          (相比綠茶的高溫殺青，白茶的酶活性未被完全破壞，故有陳化能力)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Long Article Content */}
            <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-stone-100">
                <div className="p-3 bg-stone-100 rounded-full text-stone-600">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="text-sm font-extrabold tracking-[0.2em] text-stone-500 uppercase">Article</div>
                  <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-3">
                    <img src="/images/assets/eastern_art/ink_tea_branch_spot.png" alt="" className="w-10 h-10 object-contain opacity-80" />
                    白茶：從工藝、歷史到品飲之道（全文）
                  </h2>
                </div>
              </div>

              <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed space-y-8">

                {/* 1. Definition */}
                <section className="space-y-4">
                  <div className="text-[17px] font-extrabold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-sm">1</span>
                    白茶的真正定義：超越顏色的工藝之本
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
                      <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-amber-500" /> 顏色迷思
                      </h4>
                      <p className="text-[17px]">
                        白茶得名於白毫；若用較粗老葉梗製作本就可能沒有白毫；年份增長湯色會加深；甚至烹煮時茶湯可能呈紅色——因此僅憑顏色判斷並不準確。
                      </p>
                    </div>
                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
                      <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                        <Map size={16} className="text-sky-500" /> 發酵定位
                      </h4>
                      <p className="text-[17px]">
                        綠茶約 0%；白茶約 <span className="text-sky-600 font-bold">5%–10%</span>（輕微發酵）；青茶（烏龍）範圍廣；紅茶接近 100%。白茶以極簡工藝啟動溫和轉化，是其本質。
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-stone-100" />

                {/* 2. Craft */}
                <section className="space-y-4">
                  <div className="text-[17px] font-extrabold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-sm">2</span>
                    極簡中的極致：剖析白茶的製作工藝
                  </div>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100 not-prose">
                    <div className="flex gap-4">
                      <div className="mt-1"><Sun size={24} className="text-amber-500" /></div>
                      <div>
                        <h4 className="font-bold text-stone-900 text-[19px] mb-2">「攤放」vs「萎凋」：本質不同</h4>
                        <p className="text-stone-700 leading-relaxed">
                          綠茶攤放初期多為水分蒸發的物理過程；白茶萎凋在失水之外，更重要的是引導多酚開始進行酶促氧化反應，屬化學變化，是風味轉化起點。
                        </p>
                        <p className="mt-4 text-[17px] text-stone-600 italic">
                          * 為何最簡單卻最不 easy？萎凋極受溫度、濕度、氣流影響，製茶師需以最少機械干預精準判斷時機與程度；不足或過度都可能使整批茶失敗。
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="border-stone-100" />

                                {/* 3. History */}
                <section className="space-y-4">
                  <div className="text-[17px] font-extrabold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-sm">3</span>
                    正本清源：探尋白茶的真實歷史
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 not-prose">
                    <div className="p-4 rounded-xl border border-stone-100 bg-white shadow-sm">
                      <div className="text-sm font-bold text-stone-400 mb-1">宋代起源說之辯</div>
                      <p className="text-[17px] text-stone-600">
                        《大觀茶論》中的「白茶」多指當時蒸焙工藝路線，或指特定茶樹品種，並非今日萎凋工藝的白茶。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-stone-100 bg-white shadow-sm">
                      <div className="text-sm font-bold text-stone-400 mb-1">唐代起源說之辯</div>
                      <p className="text-[17px] text-stone-600">
                        《茶經》「白茶樹」應為品種名；唐代工藝背景下，很難等同現代白茶品類。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-stone-100 bg-white shadow-sm">
                      <div className="text-sm font-bold text-stone-400 mb-1">周朝曬乾說之辯</div>
                      <p className="text-[17px] text-stone-600">
                        現代萎凋需精密控溫濕，非簡單曬乾可替代；直接曬乾忽略了工藝核心與難度。
                      </p>
                    </div>
                  </div>
                  <div className="pl-4 border-l-4 border-sky-200 mt-4 not-prose">
                    <div className="text-sm font-extrabold tracking-widest text-sky-600 mb-1">可考的創始時間</div>
                    <ul className="space-y-2 text-stone-700 text-[17px]">
                      <li><strong>1796（清嘉慶初年）：</strong> 白毫銀針創制，白茶工藝正式確立。</li>
                      <li><strong>1922：</strong> 白牡丹創制（芽葉梗同在，失水率不同，工藝更成熟）。</li>
                    </ul>
                  </div>
                </section>

                <hr className="border-stone-100" />

                {/* 4. Types */}
                <section className="space-y-4">
                  <div className="text-[17px] font-extrabold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-sm">4</span>
                    當代白茶品類鑑賞
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 not-prose">
                    <div className="group p-5 rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <Sprout size={20} className="text-emerald-500" />
                        <span className="text-sm px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold">頂級</span>
                      </div>
                      <h3 className="font-bold text-stone-900 text-[19px]">白毫銀針</h3>
                      <div className="text-sm font-bold text-stone-500 uppercase mb-2">Yinzhen / Silver Needle</div>
                      <p className="text-[17px] text-stone-600">
                        僅由肥碩芽頭製成，身披白毫，外形挺直如針。
                      </p>
                    </div>
                    <div className="group p-5 rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex"><Sprout size={16} className="text-emerald-500" /><Leaf size={16} className="text-emerald-600 -ml-1" /></div>
                        <span className="text-sm px-2 py-1 bg-stone-100 text-stone-600 rounded-full font-bold">主流</span>
                      </div>
                      <h3 className="font-bold text-stone-900 text-[19px]">白牡丹</h3>
                      <div className="text-sm font-bold text-stone-500 uppercase mb-2">Bai Mudan / White Peony</div>
                      <p className="text-[17px] text-stone-600">
                        一芽一葉或一芽二三葉，形態舒展如花；芽葉梗同在，萎凋控制更考驗功力。
                      </p>
                    </div>
                    <div className="group p-5 rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex"><Leaf size={16} className="text-stone-500" /><Leaf size={16} className="text-stone-600 -ml-1" /></div>
                        <span className="text-sm px-2 py-1 bg-amber-100 text-amber-800 rounded-full font-bold">醇厚</span>
                      </div>
                      <h3 className="font-bold text-stone-900 text-[19px]">壽眉／貢眉</h3>
                      <div className="text-sm font-bold text-stone-500 uppercase mb-2">Shou Mei / Gong Mei</div>
                      <p className="text-[17px] text-stone-600">
                        多採較成熟葉片；較佳者稱貢眉。茶體更厚、風味層次更豐富。
                      </p>
                    </div>
                  </div>
                  <p className="text-[17px] text-stone-500 italic">
                    * 知名產區：福建福鼎白茶、政和白茶，以及雲南大葉種古樹白茶等。
                  </p>
                </section>

                <hr className="border-stone-100" />

                {/* 5. Aging - Time Magic */}
                <section className="space-y-6">
                  <div className="text-[17px] font-extrabold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-sm">5</span>
                    時間的魔法：一年茶，三年藥，七年寶
                  </div>
                  <div className="not-prose relative py-4">
                    {/* Timeline Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-stone-200 to-amber-200 -z-10 transform -translate-y-1/2 hidden md:block"></div>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm md:transform md:-translate-y-2">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-600 font-bold mb-2">1</div>
                        <div className="font-bold text-stone-900">一年茶</div>
                        <div className="text-sm text-stone-500">Tea</div>
                        <p className="text-sm text-stone-600 mt-2">鮮爽、毫香明顯</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm z-10 relative">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 font-bold mb-2 shadow-inner">3</div>
                        <div className="font-bold text-stone-900 text-[19px]">三年藥</div>
                        <div className="text-sm text-amber-500 font-bold uppercase">Medicine</div>
                        <p className="text-sm text-stone-600 mt-2">黃酮類增加，性質轉溫</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-amber-400 shadow-md md:transform md:-translate-y-2">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-bold mb-2">7</div>
                        <div className="font-bold text-stone-900">七年寶</div>
                        <div className="text-sm text-amber-600 font-bold">Treasure</div>
                        <p className="text-sm text-stone-600 mt-2">陳香馥郁，藥香顯著</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-sky-50 p-5 rounded-2xl text-[17px] text-stone-700 leading-relaxed not-prose">
                    <strong>化學轉化的平衡：</strong> 在合適儲存條件下，<span className="text-stone-400 line-through">咖啡鹼</span>趨減（更溫和、不影響睡眠），<span className="text-sky-600 font-bold">胺基酸與黃酮類</span>趨增（更鮮甜、保健價值提升）。
                  </div>
                </section>

                <hr className="border-stone-100" />

                {/* 6. Brewing & 7. Picking */}
                <div className="grid md:grid-cols-2 gap-8 not-prose">
                  {/* Brewing */}
                  <section className="space-y-4">
                    <div className="text-[17px] font-extrabold text-stone-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-sm">6</span>
                      品飲藝術與訣竅
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <Coffee size={18} className="text-stone-400 shrink-0 mt-1" />
                        <p className="text-[17px] text-stone-600">
                          <strong>多樣沖泡：</strong> 可玻璃杯隨泡觀葉（觀賞性強），也可用蓋碗／紫砂細品層次。
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Flame size={18} className="text-amber-500 shrink-0 mt-1" />
                        <p className="text-[17px] text-stone-600">
                          <strong>先泡後煮：</strong> 訣竅是「泡淡了再煮」。直接煮易苦；榨取最後精華可用煮茶法。高品質白茶可達二十道以上。
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Picking */}
                  <section className="space-y-4">
                    <div className="text-[17px] font-extrabold text-stone-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-sm">7</span>
                      選購指南
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                        <div className="text-sm font-bold text-stone-500 mb-1">偏好清甜爽口</div>
                        <div className="font-bold text-stone-900 text-[17px]">推薦：白毫銀針</div>
                        <div className="text-[17px] text-stone-400">芽頭胺基酸高，鮮甜清雅</div>
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                        <div className="text-sm font-bold text-stone-500 mb-1">偏好濃郁飽滿</div>
                        <div className="font-bold text-stone-900 text-[17px]">推薦：白牡丹、貢眉、壽眉</div>
                        <div className="text-[17px] text-stone-400">葉片佔比高，層次豐富茶體厚</div>
                      </div>
                    </div>
                  </section>
                </div>

              </div>
            </div>

            <ProcessLine>嫩葉／芽頭 → 萎凋（以自然條件為主）→ 乾燥 → 白茶；建議先沖泡、後煮葉底</ProcessLine>
          </div>
        ) : (
          <div className="animate-slideInUp">
            <FudingHistory />
          </div>
        )
        }
      </div >
    );
  }

  if (kind === 'yellow') {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-yellow-50 px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-amber-700/70">YELLOW TEA</div>
          <div className="mt-2 text-xl font-extrabold text-stone-900">黃茶：從歷史、工藝到品鑑</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            黃茶是六大茶類中最低調的一員：產量稀少、工藝複雜，市場上難得一見。其核心價值在「悶黃」——透過濕熱條件促進緩慢轉化，
            形成標誌性的「黃葉黃湯」與溫醇甜潤的風格。
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">定位</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">輕發酵（約 10%–20%）</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              介於綠茶（趨近 0%）與白茶（約 5%–10%）之上，與青茶、紅茶劃開界線。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">核心工序</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">悶黃（身份標誌）</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              關鍵不是「做得黃」，而是把黃控制得恰到好處：黃葉黃湯、甜香純熟、喉韻更舒適。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">辨識優先</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">先確認是否「真悶黃」</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              市場常見「黃茶綠製」：名為黃茶，實為綠茶工藝。購買時先問：是否經過悶黃？
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">PROCESS</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">1. 黃茶的獨特定位與工藝核心</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            黃茶與綠茶血緣深：除了「悶黃」這一步，其他基礎製程幾乎與綠茶一致。正是這道工序，透過濕熱作用促進茶葉內含物質轉化，
            造就黃茶的黃葉黃湯與溫醇甜潤。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="風味關鍵字">
              黃葉黃湯、甜香（花香＋熟栗香）、滋味甘甜柔和、收斂性弱於綠茶，體感溫潤「憨厚」。
            </Bullet>
            <Bullet title="為何難做">
              悶黃對溫度、濕度與時間極度敏感，品質高度依賴師傅經驗，難以標準化，成本高且失敗率相對高。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">HISTORY</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">2. 黃茶的歷史流變：從意外到貢品</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <Bullet title="唐代之名：黃芽非黃茶">
              唐代記載中的「黃芽」多指鮮葉自然發黃的品種或狀態；工藝仍屬蒸青綠茶，黃茶工藝尚未成型。
            </Bullet>
            <Bullet title="明代之變：失誤中誕生的風味">
              蒸青過長、鍋炒溫度偏低、殺青後未及時揉捻或揉捻後堆久未乾，都可能讓葉綠素不穩而「做黃」。後來人們發現可控的黃化能帶來甜香純熟與更舒適喉韻。
            </Bullet>
            <Bullet title="清代之巔：短暫輝煌">
              工藝逐漸成型後列為貢茶，清代達高峰；但記載仍稀少，盛況細節難完整考究。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">TODAY</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">3. 當代困境：工藝的失傳與復興挑戰</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="衰退與斷層">
              近代茶業重心轉向外銷與大宗品類，黃茶因產量小、工序繁瑣而停產；七〇年代後多數傳統品類停做，技藝傳承出現斷層。
            </Bullet>
            <Bullet title="復興為何困難">
              悶黃高度依賴經驗、難以標準化；需要長時間守候、人工成本高；產量少與行銷少形成循環，市場也常出現「黃茶綠製」。
            </Bullet>
          </div>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">稀有度（市場事實）</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              2018 年黃茶總產量僅佔全國茶葉總量約 0.32%；出口量極少（約佔產量 3%），至今仍幾乎是中國獨有的茶類。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">TYPES</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">4. 分類體系與代表名品</div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">黃芽茶（頂級）</div>
              <div className="mt-2 text-base font-extrabold text-stone-900">全芽／一芽一葉</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>君山銀針（湖南岳陽）</li>
                <li>蒙頂黃芽（四川蒙頂山）</li>
                <li>霍山黃芽（安徽霍山）</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">黃小茶</div>
              <div className="mt-2 text-base font-extrabold text-stone-900">一芽一葉／一芽二葉</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>北港毛尖</li>
                <li>溈山毛尖</li>
                <li>遠安鹿苑</li>
                <li>平陽黃湯（浙江）</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">黃大茶（親民耐泡）</div>
              <div className="mt-2 text-base font-extrabold text-stone-900">一芽三四葉以上</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>霍山黃大茶（安徽霍山）</li>
                <li>廣東大葉青</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="產區概況">
              湖南與安徽是主要產區，合計佔全國產量近 85%；岳陽也被譽為「中國黃茶之鄉」。
            </Bullet>
            <Bullet title="市場現實">
              市面上不少名品存在被改製為綠茶的情況；購買時務必以是否悶黃與湯色表現做驗證。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">TASTING</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">5. 品鑑之道：沖泡、風味與保健價值</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">沖泡建議</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>茶水比：約 1:50</li>
                <li>水溫：90°C 以下</li>
                <li>出湯：第一泡約 15 秒即可</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">感官特徵</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>湯色：明亮黃色（黃葉黃湯）</li>
                <li>香氣：甜潤花香＋熟栗香</li>
                <li>滋味：甘甜柔和，少綠茶的銳利與苦澀</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">保健價值（常見說法）</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              悶黃過程被認為會產生較多與消化相關的酶類，黃茶常被描述有助於保護脾胃、增加食慾與幫助消化。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">VERIFY</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">6. 消費者指南：如何辨別真正的黃茶</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="關鍵提問：是否悶黃？">
              辨別黃茶最直接的一步：購買時直接詢問「是否經過悶黃工序」。若無法明確回答，需更謹慎驗證。
            </Bullet>
            <Bullet title="感官三步驗證法">
              觀湯色（純正黃色、無雜色）→ 聞香氣（甜潤成熟、較綠茶更「甜」）→ 品滋味（甘甜柔和、苦澀收斂不強）。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">CLOSING</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">結語</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            黃茶稀有、工藝精深、風味溫潤。用知識作為鑰匙，回到「悶黃」與「黃湯黃葉」的本質判斷，才能真正找到並品嚐到這位茶中隱士的醇厚甘甜。
          </p>
        </div>

        <ProcessLine>茶菁 → 殺菁（炒／蒸）→ 悶黃 → 揉捻 → 乾燥 → 黃茶；判斷關鍵：是否悶黃＋湯色是否純黃</ProcessLine>
      </div>
    );
  }

  if (kind === 'green') {
    return (
      <div className="animate-fadeIn">

        <ReadingAssist contentRef={greenContentRef} headingSelector="h3" />

        <div ref={greenContentRef} className="space-y-12">
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[480px] group">
            <img
              src="/images/green_tea_floating.png"
              alt="Fresh Green Tea Leaves Floating"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-2xl text-white space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-bold tracking-widest uppercase">
                  <Leaf size={12} /> Zero Fermentation
                </div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-white/95 text-shadow-sm">
                  綠茶：春日的鮮活封印
                </h2>
                <p className="text-[19px] md:text-xl text-emerald-50 leading-relaxed font-light opacity-90">
                  一部中國飲茶史，半部是綠茶。<br />
                  零發酵工藝，只為留住茶葉最原始的清鮮與翠綠。
                </p>
              </div>
            </div>
          </div>

          {/* Classification Visual */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-1 p-6 rounded-3xl bg-white border border-stone-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-emerald-500">
                <Thermometer size={100} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <History size={20} className="text-emerald-600" /> 分類座標
              </h3>
              <div className="space-y-3 relative z-10">
                <div className="space-y-1">
                  <div className="flex justify-between items-end text-sm font-bold text-stone-500 uppercase tracking-widest">
                    <span>Green Tea</span>
                    <span>0%</span>
                  </div>
                  <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[5%]" />
                  </div>
                </div>
                <ul className="text-[17px] text-stone-600 space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="font-bold text-stone-800">綠茶：零發酵</span>
                  </li>
                  <li className="flex items-center gap-2 opacity-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    <span>白茶、黃茶、青茶、紅茶、黑茶</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 p-6 rounded-3xl bg-white border border-stone-100 shadow-sm grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <Coffee size={20} className="text-emerald-600" /> 核心工藝
                </h3>
                <div className="flex items-center gap-2 text-base font-bold text-stone-800">
                  <div className="px-3 py-2 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-100">殺青 (Kill-Green)</div>
                  <div className="text-stone-300">→</div>
                  <div className="px-3 py-2 bg-stone-50 text-stone-700 rounded-lg border border-stone-200">揉捻</div>
                  <div className="text-stone-300">→</div>
                  <div className="px-3 py-2 bg-stone-50 text-stone-700 rounded-lg border border-stone-200">乾燥</div>
                </div>
                <p className="mt-3 text-[17px] text-stone-600 leading-relaxed">
                  關鍵在第一步「殺青」（蒸或炒），利用高溫破壞酵素活性，固定色澤與香氣。
                </p>
              </div>

              <div className="border-l border-stone-100 pl-6">
                <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <Droplets size={20} className="text-emerald-600" /> 沖泡口訣
                </h3>
                <ul className="space-y-2 text-[17px] text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-500" />
                    <span>水溫 <strong>80°C</strong> (忌沸水)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-500" />
                    <span>不加蓋、不悶泡</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-500" />
                    <span>茶水比 1:50</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Long Article Content */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-stone-100">
              <div className="p-3 bg-stone-100 rounded-full text-stone-600">
                <BookOpen size={24} />
              </div>
              <div>
                <div className="text-sm font-extrabold tracking-[0.2em] text-stone-500 uppercase">Article</div>
                <h2 className="text-2xl font-bold text-stone-900">中國綠茶的文化溯源與品飲指南（全文）</h2>
              </div>
            </div>

            <div className="prose prose-stone prose-lg max-w-none text-stone-700 leading-relaxed space-y-8">
              <section className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-sm font-bold tracking-widest text-emerald-800 uppercase">
                  CLASSIFICATION
                </div>
                <h3 className="text-2xl font-black text-stone-900">中國茶的六大分類：以發酵定義茶之本質</h3>
                <p className="text-[19px] leading-relaxed text-emerald-900 bg-emerald-50/50 p-6 rounded-2xl border-l-4 border-emerald-400 font-medium">
                  探索博大精深的中國茶文化，首先需要理解其分類系統的科學基礎。中國茶的分類並非基於主觀的感官體驗，而是建立在一個客觀的生化指標之上——發酵程度。這不僅是區分茶葉本質的關鍵，也是品鑑萬千茶品的起點。
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <p className="text-stone-700 leading-relaxed mb-4">
                      基於發酵程度由低至高的順序，中國茶可被嚴謹地劃分為六大類別。茶湯的顏色與發酵程度存在著顯著的正相關性，顏色越深，通常意味著發酵程度越高：
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-[17px]">
                      <div className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between"><span className="font-bold text-stone-900">綠茶</span><span className="text-emerald-500 font-bold text-sm">零發酵</span></div>
                      <div className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between"><span className="font-bold text-stone-900">白茶</span><span className="text-sky-500 font-bold text-sm">微發酵</span></div>
                      <div className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between"><span className="font-bold text-stone-900">黃茶</span><span className="text-amber-500 font-bold text-sm">輕發酵</span></div>
                      <div className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between"><span className="font-bold text-stone-900">青茶</span><span className="text-teal-600 font-bold text-sm">半發酵</span></div>
                      <div className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between"><span className="font-bold text-stone-900">紅茶</span><span className="text-red-500 font-bold text-sm">全發酵</span></div>
                      <div className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between"><span className="font-bold text-stone-900">黑茶</span><span className="text-stone-600 font-bold text-sm">後發酵</span></div>
                    </div>
                  </div>

                  <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                    <p className="text-[17px] text-stone-700 leading-relaxed mb-4">
                      在這套體系中，綠茶以其<span className="font-extrabold text-emerald-600">「零發酵」</span>的特性佔據了獨特的地位。它不僅是一種茶類，更是中國飲茶史的核心載體。
                    </p>
                    <p className="text-[17px] text-stone-700 leading-relaxed">
                      由於茶葉發酵工藝直到近四百年的明代才逐漸成熟，因此，明朝以前中國人所飲用的茶，在廣義上都可以歸類為綠茶。可以說，<strong className="text-stone-900">一部中國飲茶史，在很大程度上便是一部綠茶的演變史。</strong>
                    </p>
                    <div className="mt-4 pt-4 border-t border-stone-200 text-stone-500 italic flex items-center gap-2">
                      <Clock size={16} /> 接下來，讓我們一同回溯時光長河，探尋綠茶悠遠的歷史源頭。
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-stone-100" />

              <section className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-sm font-bold tracking-widest text-emerald-800 uppercase">
                  ORIGIN
                </div>
                <h3 className="text-2xl font-black text-stone-900">綠茶的悠久起源：從神話到信史</h3>
                <p>
                  追溯綠茶的源頭，是一趟結合了神話傳說、考古實證與文字記載的旅程。這三條線索交織，共同構建了一部關於茶葉起源的完整敘事。
                </p>
                <div className="flex flex-col gap-6 not-prose relative z-10">
                  <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-6 md:items-center transform transition-transform md:hover:translate-x-4">
                    <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center shrink-0 text-stone-400 border border-stone-200 shadow-inner">
                      <History size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-stone-900 text-xl mb-3">神話中的「茶祖」</h4>
                      <p className="text-[17px] text-stone-700 leading-relaxed max-w-4xl">
                        中國茶文化的濫觴，始於一個廣為流傳的神話——神農嘗百草。傳說中，生活在新石-器時代晚期的炎帝神農氏，為辨識草藥親身試毒，曾「一日遇七十二毒」，而當他品嚐到茶樹的葉子時，體內毒素便得以化解。儘管此說法無法考證，但它將神農氏尊為「茶祖」，並奠定了茶在早期認知中「解毒」的藥用基礎。
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-6 md:items-center md:ml-12 transform transition-transform md:hover:translate-x-4">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center shrink-0 text-emerald-500 border border-emerald-100 shadow-inner">
                      <Search size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-stone-900 text-xl mb-3">考古學的實證</h4>
                      <p className="text-[17px] text-stone-700 leading-relaxed max-w-4xl">
                        相較於神話，考古發現則提供了更為確鑿的證據。在浙江餘姚的河姆渡文化遺址中，考古學家發現了距今超過六千年的人工種植茶樹樹根。經過農業部茶葉質量監督檢驗測試中心的色譜檢測技術分析，證實了這些樹根樣本確為茶樹。這一發現將中國有記載的茶樹種植史，從實證角度推至六千年以上。
                      </p>
                      <p className="text-[16px] text-emerald-800 font-medium leading-relaxed max-w-4xl mt-4 p-4 bg-emerald-50 rounded-2xl border-l-4 border-emerald-300">
                        從生物學角度看，嚴格意義上的「茶」專指由山茶科、山茶屬植物的嫩葉製成的飲品。因此，儘管名稱中帶有「茶」字，如苦丁茶（冬青科）、菊花茶、大麥茶等常見飲品，均不屬於真正的茶類。
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-6 md:items-start md:ml-24 transform transition-transform md:hover:translate-x-4">
                    <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center shrink-0 text-white shadow-inner">
                      <BookOpen size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-stone-900 text-xl mb-3 mt-1">文字記載的開端</h4>
                      <p className="text-[17px] text-stone-700 leading-relaxed max-w-4xl mb-5">
                        目前有文字可考的最早飲茶記錄，出現在先秦時期的巴蜀地區（今四川、重慶一帶）。當時的先民對茶葉的利用方式極為原始，主要有三種：
                      </p>
                      <ul className="space-y-3 mb-5 max-w-4xl">
                        <li className="bg-stone-50 p-4 sm:px-6 rounded-2xl border border-stone-100 text-[17px] text-stone-700 leading-relaxed shadow-sm">
                          <span className="font-extrabold text-stone-900 inline-block w-28">1. 作草藥</span>
                          將茶葉曬乾保存，作為藥材使用。
                        </li>
                        <li className="bg-stone-50 p-4 sm:px-6 rounded-2xl border border-stone-100 text-[17px] text-stone-700 leading-relaxed shadow-sm">
                          <span className="font-extrabold text-stone-900 inline-block w-28 align-top">2. 咀嚼鮮葉</span>
                          <span className="inline-block sm:w-[calc(100%-8rem)]">直接咀嚼新鮮的茶樹葉子，感受其汁液從苦澀到清涼甘潤的變化，這種方式據稱能達到類似刷牙的潔齒效果。</span>
                        </li>
                        <li className="bg-stone-50 p-4 sm:px-6 rounded-2xl border border-stone-100 text-[17px] text-stone-700 leading-relaxed shadow-sm">
                          <span className="font-extrabold text-stone-900 inline-block w-28 align-top">3. 煮成羹湯</span>
                          <span className="inline-block sm:w-[calc(100%-8rem)]">將茶葉作為蔬菜，煮成羹湯食用，以增加營養並消解食物中的毒素。</span>
                        </li>
                      </ul>
                      <p className="text-[17px] text-stone-700 leading-relaxed max-w-4xl border-l-4 border-stone-300 pl-4 py-1 italic font-medium">
                        隨著戰國時期秦國統一巴蜀，這一地區獨特的茶文化開始有了向外傳播的契機，為後續朝代飲茶風尚的演變奠定了堅實的基礎。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-stone-100" />

              <section className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-sm font-bold tracking-widest text-emerald-800 uppercase mb-4">
                    EVOLUTION
                  </div>
                  <h3 className="text-2xl font-black text-stone-900">飲茶風尚的演變：一部跨越朝代的文化史</h3>
                </div>
                <p className="text-[19px] leading-relaxed text-stone-700 md:w-4/5">
                  從秦漢的宮廷飲品到宋代的文人雅趣，再到明代融入日常的沖泡方式，中國的飲茶風尚經歷了數次重大變革。這不僅是製茶工藝的進步史，更是一部映照社會文化變遷的生動歷史。
                </p>

                <div className="flex flex-col gap-16 relative w-full pt-8 pb-4">
                  {/* Era 1: Left aligned */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-start">
                    <div className="w-full lg:w-[85%] xl:w-4/5 rounded-[2.5rem] border border-stone-200 bg-white shadow-sm p-8 lg:p-12 relative overflow-hidden group hover:shadow-xl hover:border-emerald-200 transition-all duration-500">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-stone-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-125"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                        <div className="px-4 py-1.5 bg-stone-100 text-stone-500 rounded-full text-sm font-extrabold tracking-widest uppercase">
                          ERA · 秦漢至魏晉南北朝
                        </div>
                        <h4 className="font-black text-stone-900 text-2xl lg:text-3xl">從宮廷飲品到文化符號</h4>
                      </div>
                      <div className="space-y-6">
                        <p className="text-[17px] lg:text-[19px] text-stone-700 leading-relaxed font-medium">
                          秦漢大一統時代，源自巴蜀的茶葉得到初步傳播，逐漸成為官方貴族家庭招待賓客、消遣時光的飲品。此時的加工方法相對簡單：將新鮮茶葉搗成餅狀，再曬乾儲存。飲用時，需先將茶餅置於火上烘烤，隨後碾成碎末，加入開水，並混入蔥、薑、橘皮等調味品以消解茶的澀味。
                        </p>
                        <div className="bg-stone-50 p-6 md:p-8 rounded-3xl border border-stone-100 shadow-inner">
                          <p className="text-[17px] text-stone-700 leading-relaxed mb-5">
                            進入魏晉南北朝，一個思想文化空前活躍的時期，茶開始超越飲品的範疇，被賦予了文化屬性。特別是佛教的傳播，極大地推動了茶的流行。僧人們發現飲茶有兩大核心益處：
                          </p>
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border border-stone-100 transition-transform hover:-translate-y-1">
                              <div className="font-extrabold text-stone-900 flex items-center gap-2 mb-2"><Sun className="text-amber-500" size={20} /> 提神醒腦</div>
                              <p className="text-[15px] text-stone-600 leading-relaxed">茶能幫助他們在長時間打坐時保持頭腦清醒，靜心思考。</p>
                            </div>
                            <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border border-stone-100 transition-transform hover:-translate-y-1">
                              <div className="font-extrabold text-stone-900 flex items-center gap-2 mb-2"><Leaf className="text-emerald-500" size={20} /> 幫助消化</div>
                              <p className="text-[15px] text-stone-600 leading-relaxed">久坐容易導致積食，而飲茶則有助於消化。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Era 2: Right aligned */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-end">
                    <div className="w-full lg:w-[85%] xl:w-4/5 rounded-[2.5rem] border border-emerald-100 bg-emerald-50/40 shadow-md p-8 lg:p-12 relative overflow-hidden group hover:shadow-xl hover:border-emerald-300 hover:bg-emerald-50/70 transition-all duration-500">
                      <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-100/50 rounded-br-full -z-10 transition-transform duration-700 group-hover:scale-125"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mb-6">
                        <div className="px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-extrabold tracking-widest uppercase sm:order-2 border border-emerald-200">
                          ERA · 唐代
                        </div>
                        <h4 className="font-black text-stone-900 text-2xl lg:text-3xl sm:order-1">茶聖陸羽與「煎茶」的確立</h4>
                      </div>
                      <div className="space-y-6">
                        <p className="text-[17px] lg:text-[19px] text-stone-700 leading-relaxed sm:text-right font-medium">
                          到了唐代（約公元八世紀前後），飲茶之風已遍及全國，在長安、洛陽等都城尤為盛行。這一時期誕生了被後世尊為「茶聖」的陸羽，他撰寫的《茶經》是世界上現存最早、最全面的茶學專著。
                        </p>
                        <p className="text-[17px] text-stone-700 leading-relaxed sm:text-right">
                          唐代製茶工藝的核心是 <span className="font-extrabold text-stone-900 px-1.5 py-0.5 bg-emerald-200 rounded">「殺青」</span>。當時民間飲茶方式頗為粗放，常在茶湯中加入蔥、薑、棗、橘皮等調味品。陸羽對此痛心疾首，認為此舉無異於 <span className="font-bold text-red-700">「喝溝渠裡的廢水」</span>，是暴殄天物。他在《茶經》中詳細記載並推崇旨在品味茶之本味的 <span className="font-extrabold text-stone-900">「煎茶法」</span>：
                        </p>
                        <div className="bg-white/80 backdrop-blur p-6 md:p-8 rounded-3xl border border-emerald-100 shadow-sm mt-6">
                          <ol className="list-decimal pl-5 space-y-4 text-[17px] text-stone-700 leading-relaxed marker:font-black marker:text-emerald-700">
                            <li><strong className="text-stone-900">炙茶：</strong>將茶餅放在火上均勻烘烤。</li>
                            <li><strong className="text-stone-900">碾末：</strong>將烤好的茶餅冷卻後，碾成米粒大小的茶末。</li>
                            <li><strong className="text-stone-900">煮水加鹽：</strong>燒水至初沸，水面出現微小氣泡時，加入少許鹽調味。</li>
                            <li><strong className="text-stone-900">投茶：</strong>待氣泡變大，沿鍋邊環繞時，先用瓢舀出一瓢沸水備用，再將茶末投入沸水中心。</li>
                            <li><strong className="text-stone-900">止沸：</strong>待鍋中茶湯再次完全沸騰時，將備用的那瓢水倒回鍋中，以停止沸騰，培育茶沫。</li>
                            <li><strong className="text-stone-900">分湯：</strong>將煮好的茶湯均勻分到茶碗中，即可飲用。</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Era 3: Left aligned */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-start">
                    <div className="w-full lg:w-[85%] xl:w-4/5 rounded-[2.5rem] border border-stone-200 bg-white shadow-sm p-8 lg:p-12 relative overflow-hidden group hover:shadow-xl hover:border-amber-200 transition-all duration-500">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-125"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                        <div className="px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-extrabold tracking-widest uppercase shadow-sm">
                          ERA · 宋代
                        </div>
                        <h4 className="font-black text-stone-900 text-2xl lg:text-3xl">登峰造極的「點茶」與「鬥茶」文化</h4>
                      </div>
                      <div className="space-y-6">
                        <p className="text-[17px] lg:text-[19px] text-stone-700 leading-relaxed font-medium">
                          宋代將飲茶的精緻與儀式感推向了頂峰，發展出極為考究的 <span className="font-extrabold text-stone-900 text-[20px]">「點茶法」</span>。這一技藝堪稱古代的飲品藝術：
                        </p>
                        <div className="flex flex-col gap-3">
                          <div className="bg-stone-50 p-4 md:px-6 rounded-2xl border border-stone-100 flex gap-4 md:items-center shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black shrink-0 text-lg shadow-inner">1</div>
                            <div className="flex-1 md:flex md:items-center md:gap-4">
                              <div className="font-black text-stone-900 mb-1 md:mb-0 md:w-20">研磨</div>
                              <p className="text-[16px] text-stone-700 leading-relaxed">將茶餅研磨成極其細膩的粉末。</p>
                            </div>
                          </div>
                          <div className="bg-stone-50 p-4 md:px-6 rounded-2xl border border-stone-100 flex gap-4 md:items-center shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black shrink-0 text-lg shadow-inner">2</div>
                            <div className="flex-1 md:flex md:items-center md:gap-4">
                              <div className="font-black text-stone-900 mb-1 md:mb-0 md:w-20">過篩</div>
                              <p className="text-[16px] text-stone-700 leading-relaxed">用「螺卷」（一種細密的絲網）反覆篩選茶粉，確保其細膩均勻。</p>
                            </div>
                          </div>
                          <div className="bg-stone-50 p-4 md:px-6 rounded-2xl border border-stone-100 flex gap-4 md:items-center shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black shrink-0 text-lg shadow-inner">3</div>
                            <div className="flex-1 md:flex md:items-start md:gap-4">
                              <div className="font-black text-stone-900 mb-1 md:mb-0 md:w-20 md:pt-1">擊拂</div>
                              <p className="text-[16px] text-stone-700 leading-relaxed">在茶碗中放入茶粉，注入少量熱水，然後使用一種名為「茶筅」的竹製工具高速擊打、攪拌，直至茶湯達到 <span className="font-extrabold text-emerald-700 bg-emerald-50 px-1 rounded">「乳化蓬鬆」</span> 的狀態，表面形成一層豐厚、細膩且可以「掛壁」的泡沫。</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-amber-50/50 p-6 md:p-8 rounded-3xl border-l-4 border-amber-300 mt-6 shadow-inner">
                          <p className="text-[17px] text-stone-700 leading-relaxed">
                            據宋徽宗記載，完整的點茶過程甚至需要分七次注水，且每一次的力度與角度都有所不同，其複雜程度可見一斑。由點茶衍生出的 <span className="font-extrabold text-stone-900 text-[19px]">「鬥茶」</span>，則是宋代文人之間流行的雅玩。他們不僅比較茶湯泡沫的色澤與持久度，甚至能技藝高超地在潔白泡沫上寫字作画，其意趣與現代的咖啡拉花比賽頗有異曲同工之妙。在這短暫存在的泡沫上進行創作，不僅是技藝的比拼，更是對轉瞬即逝之美的欣賞，充分體現了宋代文人的雅緻與哲思。這一時期著名的貢茶「龍團鳳餅」，正是宋代茶文化盛世的縮影。而日本的抹茶文化，其源頭正是宋代的點茶法。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Era 4: Right aligned */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-end">
                    <div className="w-full lg:w-[85%] xl:w-4/5 rounded-[2.5rem] border border-stone-800 bg-stone-900 text-stone-100 shadow-2xl p-8 lg:p-12 relative overflow-hidden group hover:bg-black transition-all duration-500">
                      <div className="absolute top-0 left-0 w-48 h-48 bg-stone-800 rounded-br-full -z-10 transition-transform duration-700 group-hover:scale-125"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mb-6">
                        <div className="px-4 py-1.5 bg-stone-800 text-stone-300 rounded-full text-sm font-extrabold tracking-widest uppercase sm:order-2 border border-stone-700 shadow-inner">
                          ERA · 明代
                        </div>
                        <h4 className="font-black text-white text-2xl lg:text-3xl sm:order-1">返璞歸真的「泡茶」時代</h4>
                      </div>
                      <div className="space-y-6">
                        <p className="text-[17px] lg:text-[19px] text-stone-300 leading-relaxed sm:text-right font-medium">
                          飲茶方式在明代迎來了歷史性的轉折。出身農民的開國皇帝朱元璋認為，宋代繁複的餅茶製作工藝過於奢侈、靡費人工，遂下令廢除，改為進貢散茶。
                        </p>
                        <div className="bg-stone-800/80 backdrop-blur p-6 md:p-8 rounded-3xl border border-stone-700 mt-6 shadow-inner">
                          <p className="text-[17px] text-stone-300 leading-relaxed">
                            這道聖旨不僅僅是改變了宮廷的儀式，它從根本上使飲茶文化走向了平民化。通過瓦解<strong className="text-white">精緻繁複</strong>、耗費巨大的貢茶餅茶體系，它為一種更簡潔、更易普及的 <span className="font-black text-emerald-400 text-[19px] inline-block px-1">「泡茶」</span> 法（即直接用開水沖泡散裝茶葉）鋪平了道路，並最終確立了此後數百年中國茶文化的主流形態。這種方式一直沿用至今，成為我們最熟悉的喝茶方法。也正是在這一時期，茶葉的發酵工藝開始出現，為日後紅茶、青茶等其他五大茶類的發展埋下了伏筆。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-6">
                  <div className="bg-stone-800 text-white rounded-full px-6 py-3 text-[17px] font-medium shadow-md flex items-center gap-3">
                    <Coffee size={20} className="text-emerald-400" />
                    從繁複的歷史演變中走來，綠茶最終以最純粹的形式融入現代生活。接下來，我們將聚焦於當下，為您提供一套完整的現代綠茶品飲指南。
                  </div>
                </div>
              </section>

              <hr className="border-stone-100" />

                                          <section className="space-y-10 relative z-10 pt-4">
                
                {/* 仙俠風標題區與主圖 (Xianxia Style Header & Hero Image) */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch pt-6">
                  {/* Vertical Golden Banner */}
                  <div className="hidden md:flex relative px-4 py-8 shrink-0 bg-gradient-to-b from-[#d4af37] via-[#f3e5ab] to-[#aa8022] shadow-[4px_4px_15px_rgba(0,0,0,0.15)] rounded-sm items-center justify-center overflow-hidden group">
                    <div className="absolute inset-x-2 top-2 bottom-2 border border-stone-800/20 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-50 pointer-events-none"></div>
                    <h3 className="relative z-10 text-stone-900 font-serif font-black text-[2.5rem] tracking-[0.3em] drop-shadow-md" style={{ writingMode: 'vertical-rl' }}>
                      品飲實用指南
                    </h3>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="md:hidden">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#aa8022] text-stone-900 font-serif font-black text-2xl tracking-widest shadow-md">
                        品飲實用指南
                      </div>
                    </div>
                    <p className="text-[19px] text-stone-700 leading-relaxed font-medium bg-stone-50 p-6 rounded-2xl border-l-4 border-[#d4af37] shadow-inner">
                      想要泡好一杯綠茶，不僅是技巧的展現，更是心境的修煉。在此，我們為您揭開綠茶沖泡與品鑑的奧秘，助您掌握茶中真味。
                    </p>
                    
                    <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 group">
                      <img src="/images/mystical_tea_mountain.png" alt="仙俠風高山茶園" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6 md:p-8">
                        <div className="text-white font-serif tracking-wider text-lg md:text-xl drop-shadow-lg border-l-2 border-[#d4af37] pl-4">
                          「高山雲霧出好茶，仙風道骨蘊真華」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 not-prose">
                  {/* Top Row: Full Width Varieties & Brewing Art */}
                  <div className="flex flex-col gap-6">
                    {/* Varieties (Full Width) */}
                    <div className="w-full rounded-3xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
                        <div className="max-w-xl">
                          <h4 className="font-black text-stone-900 text-2xl flex items-center gap-3 mb-4">
                            <div className="p-2.5 bg-emerald-100/50 rounded-xl text-emerald-600"><Leaf size={24} /></div>
                            知名綠茶鑑賞
                          </h4>
                          <p className="text-[17px] text-stone-600 leading-relaxed">中國綠茶品類繁多，各具特色。以下是一些廣受讚譽的代表性名茶：</p>
                        </div>
                        <div className="shrink-0 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 relative overflow-hidden group md:max-w-xs self-start shadow-inner">
                          <div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform"><Leaf size={72}/></div>
                          <p className="text-[15px] text-emerald-900 leading-relaxed relative z-10">
                            <strong className="block mb-1 text-emerald-800 font-bold">特別說明：</strong>
                            您可能聽過<span className="font-extrabold text-stone-900 border-b border-stone-900 mx-1">安吉白茶</span>，從製茶工藝分類上，它其實屬於綠茶。
                          </p>
                        </div>
                      </div>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {['杭州西湖龍井', '安徽黃山毛峰', '安徽六安瓜片', '安徽太平猴魁', '蘇州碧螺春', '江西廬山雲霧', '四川竹葉青'].map((tea, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-[17px] font-bold text-stone-700 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-200 transition-all cursor-default">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                            {tea}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Brewing Art (Full Width Grid) */}
                    <div className="w-full rounded-3xl border border-stone-200 bg-white shadow-sm p-6 sm:p-8 space-y-8 hover:shadow-md transition-shadow relative overflow-hidden group/art">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-bl-full -z-10 transition-transform duration-700 group-hover/art:scale-110"></div>
                      
                      <div className="relative z-10">
                        <h4 className="font-black text-stone-900 text-2xl flex items-center gap-3 mb-3">
                          <div className="p-2.5 bg-sky-50 rounded-2xl text-sky-500"><Droplets size={24} /></div>
                          綠茶的沖泡藝術
                        </h4>
                        <p className="text-[17px] text-stone-600 leading-relaxed max-w-2xl">想要泡好一杯綠茶，需要掌握器皿選擇與沖泡技巧的要點。</p>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">
                        <div className="space-y-6 flex flex-col justify-center">
                           <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-100 shadow-inner">
                             <h5 className="font-extrabold text-stone-900 text-lg mb-3 flex items-center gap-2">
                               <Coffee size={24} className="text-stone-400"/> 器皿選擇
                             </h5>
                             <p className="text-[17px] text-stone-700 leading-relaxed">
                               建議使用<strong className="text-stone-900 font-black text-lg mx-1">玻璃杯或白瓷蓋碗</strong>。<br/>因為綠茶未經發酵，保留了鮮葉的翠綠與完整形態，使用透明或淺色器皿，可方便在沖泡過程中欣賞茶葉舒展的美態與清澈明亮的湯色。
                             </p>
                           </div>
                           
                           <div className="bg-red-50/50 p-6 sm:p-8 rounded-3xl border border-red-100 flex-1">
                             <h5 className="font-extrabold text-red-900 text-lg mb-5 flex items-center gap-2">
                               <AlertCircle size={22} className="text-red-500"/> 沖泡兩大絕對關鍵
                             </h5>
                             <ul className="space-y-5">
                               <li className="flex items-start gap-4">
                                 <div className="bg-white px-3 py-1.5 rounded-lg text-red-600 font-black border border-red-100 shadow-sm whitespace-nowrap text-lg">水溫 80°C</div> 
                                 <span className="text-[16px] text-red-900 leading-relaxed mt-1 font-medium">絕對不可用沸水，以免燙壞鮮嫩芽頭，破壞鮮爽。</span>
                               </li>
                               <li className="flex items-start gap-4">
                                 <div className="bg-white px-3 py-1.5 rounded-lg text-red-600 font-black border border-red-100 shadow-sm whitespace-nowrap text-lg">絕不加蓋</div> 
                                 <span className="text-[16px] text-red-900 leading-relaxed mt-1 font-medium">沖泡時切勿加蓋，否則會將茶葉「悶黃」，失去清新。</span>
                               </li>
                             </ul>
                           </div>
                        </div>

                        <div>
                           <div className="h-full bg-stone-900 text-stone-100 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group/steps" style={{ borderTop: '6px solid #d4af37' }}>
                             <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover/steps:scale-110 transition-transform duration-700">
                               <Droplets size={180} />
                             </div>
                             <h5 className="font-black text-white text-2xl mb-3 relative z-10 tracking-wide">「三明治泡法」步驟詳解</h5>
                             <p className="text-[#d4af37] text-[16px] font-bold mb-8 relative z-10">這是一種能充分展現綠茶風味的實用泡法：</p>
                             
                             <div className="space-y-8 relative z-10">
                               <div className="flex gap-5 items-start">
                                 <div className="w-12 h-12 rounded-full bg-stone-800 text-stone-300 flex items-center justify-center font-black text-xl shrink-0 border border-stone-700 shadow-inner">1</div>
                                 <div className="pt-1">
                                   <div className="font-black text-white text-[19px] mb-1.5 tracking-wider">溫杯注水</div>
                                   <div className="text-[16px] text-stone-400 leading-relaxed font-medium">先向杯中注入約 80°C 的熱水，水量約為杯子容量的三分之一。</div>
                                 </div>
                               </div>
                               <div className="flex gap-5 items-start">
                                 <div className="w-12 h-12 rounded-full bg-stone-800 text-stone-300 flex items-center justify-center font-black text-xl shrink-0 border border-stone-700 shadow-inner">2</div>
                                 <div className="pt-1">
                                   <div className="font-black text-white text-[19px] mb-1.5 tracking-wider">投擲茶葉</div>
                                   <div className="text-[16px] text-stone-400 leading-relaxed font-medium">將茶葉投入水中。茶水比例建議為 1:50。</div>
                                 </div>
                               </div>
                               <div className="flex gap-5 items-start">
                                 <div className="w-12 h-12 rounded-full bg-stone-800 text-stone-300 flex items-center justify-center font-black text-xl shrink-0 border border-stone-700 shadow-inner">3</div>
                                 <div className="pt-1">
                                   <div className="font-black text-white text-[19px] mb-1.5 tracking-wider">輕搖喚醒</div>
                                   <div className="text-[16px] text-stone-400 leading-relaxed font-medium">沿杯底輕輕轉動杯身，讓茶葉充分浸潤。</div>
                                 </div>
                               </div>
                               <div className="flex gap-5 items-start">
                                 <div className="w-12 h-12 rounded-full bg-stone-800 text-[#d4af37] flex items-center justify-center font-black text-xl shrink-0 border border-stone-700 shadow-inner bg-stone-800/80">4</div>
                                 <div className="pt-1">
                                   <div className="font-black text-[#d4af37] text-[19px] mb-1.5 tracking-wider">沿壁注水</div>
                                   <div className="text-[16px] text-stone-400 leading-relaxed font-medium">待茶葉舒展後，再沿著杯壁緩緩將水注滿。</div>
                                 </div>
                               </div>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Asymmetric 2/3 and 1/3 */}
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Seasonal Buying (Wider) */}
                    <div className="lg:w-3/5 rounded-3xl border border-stone-200 bg-white shadow-sm p-6 sm:p-8 space-y-6 hover:shadow-md transition-shadow relative overflow-hidden group/season">
                      <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-50 rounded-full opacity-50 transition-transform duration-700 group-hover/season:scale-150"></div>
                      
                      <div className="relative z-10">
                        <h4 className="font-black text-stone-900 text-2xl flex items-center gap-3 mb-3">
                          <div className="p-2.5 bg-amber-50 rounded-2xl text-amber-500"><Calendar size={24} /></div>
                          選購綠茶的訣竅
                        </h4>
                        <p className="text-[17px] text-stone-600 leading-relaxed font-medium">在選購高品質綠茶時，您常會遇到兩個術語：「明前茶」和「雨前茶」。</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                        <div className="bg-gradient-to-br from-emerald-50/80 to-stone-50 p-5 sm:p-6 rounded-2xl border border-emerald-100/50 shadow-sm flex flex-col h-full transform transition-transform hover:-translate-y-1">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="bg-white px-3 py-1 rounded-lg text-emerald-800 font-extrabold text-lg shadow-sm border border-emerald-100">明前茶</div>
                             <div className="text-sm font-medium text-emerald-600">清明節氣前採製</div>
                          </div>
                          <p className="text-[16px] text-stone-700 leading-relaxed flex-1">
                            茶樹經過整個冬季的休養，積蓄了豐富的養分，此時萌發的芽頭最為鮮嫩，因此<strong className="text-emerald-800">口感最佳</strong>，最受市場追捧。
                          </p>
                        </div>
                        
                        <div className="bg-stone-50 p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col h-full transform transition-transform hover:-translate-y-1">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="bg-white px-3 py-1 rounded-lg text-stone-800 font-extrabold text-lg shadow-sm w-fit border border-stone-200">雨前茶</div>
                             <div className="text-sm font-medium text-stone-500">穀雨前、清明後採製</div>
                          </div>
                          <p className="text-[16px] text-stone-700 leading-relaxed flex-1">
                            氣溫回升，茶葉生長速度加快，葉片相對成熟，因此在沖泡時<strong className="text-stone-900">更為耐泡</strong>，風味也較為濃烈。
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-stone-800 text-stone-100 p-5 rounded-2xl border border-stone-700 flex gap-4 items-start relative z-10 shadow-inner">
                        <Info size={24} className="text-[#d4af37] shrink-0 mt-0.5" />
                        <p className="text-[16px] leading-relaxed">
                          對於初次嘗試的品飲者而言，無需過於糾結。明前茶的鮮爽與雨前茶的醇厚各有千秋，兩者都<strong className="text-white border-b border-[#d4af37]">非常值得購買品嚐</strong>，親身體會春日茶園的不同風味。
                        </p>
                      </div>
                    </div>

                    {/* Right: Health & Warnings (Narrower) */}
                    <div className="lg:w-2/5 rounded-3xl border border-stone-200 bg-white shadow-sm p-6 sm:p-8 flex flex-col hover:shadow-md transition-shadow">
                      <div>
                        <h4 className="font-black text-stone-900 text-xl flex items-center gap-3 mb-4">
                          <div className="p-2 bg-rose-50 rounded-xl text-rose-500"><Heart size={22} /></div>
                          健康益處與飲用宜忌
                        </h4>
                      </div>
                      
                      <div className="space-y-6 flex-1 flex flex-col">
                        <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 flex-1">
                           <h5 className="font-extrabold text-emerald-900 mb-2 flex items-center gap-2">
                             <Sparkles size={16} className="text-emerald-500"/> 健康益處
                           </h5>
                           <p className="text-[15px] text-emerald-800/90 leading-relaxed">
                             綠茶在六大茶類中擁有<strong className="text-emerald-900 bg-emerald-100/50 px-1 rounded">最高的茶多酚含量</strong>。雖然茶多酚是苦澀味的來源，但它同時也是一種對健康大有裨益的物質，具有抗癌、抗自由基、抗氧化、抗過敏、抗菌、延緩衰老、預防蛀牙、降低心血管疾病風險等多種功效。
                           </p>
                        </div>
                        
                        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
                           <h5 className="font-extrabold text-stone-900 mb-3 flex items-center gap-2">
                             <AlertTriangle size={16} className="text-[#aa8022]"/> 飲用提醒
                           </h5>
                           <ul className="space-y-4">
                             <li className="flex gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 shrink-0"></div>
                               <div>
                                 <strong className="block text-stone-900 text-[15px] mb-1">提神效果</strong>
                                 <p className="text-[14px] text-stone-600 leading-relaxed">綠茶的咖啡因含量較高，提神效果顯著。易失眠者應盡量避免在睡前飲用。</p>
                               </div>
                             </li>
                             <li className="flex gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 shrink-0"></div>
                               <div>
                                 <strong className="block text-stone-900 text-[15px] mb-1">茶性偏寒</strong>
                                 <p className="text-[14px] text-stone-600 leading-relaxed">從中醫角度看，綠茶茶性偏寒涼。體質虛寒的人士不宜過多飲用。</p>
                               </div>
                             </li>
                           </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Special Feature: Biluochun with Brewing Image */}
          <div className="bg-gradient-to-br from-stone-50 to-white rounded-[2.5rem] p-8 md:p-12 border border-stone-200 mt-16 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-emerald-600 transform translate-x-12 -translate-y-12">
              <Sprout size={240} />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 relative z-10">
              {/* Left: Content */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-sm font-bold tracking-widest text-emerald-800 uppercase mb-4 shadow-sm">
                    <Sparkles size={14} /> SPECIAL FEATURE
                  </div>
                  <h2 className="text-4xl font-black text-stone-900 mb-6">碧螺春：品味春意</h2>
                  <p className="text-[19px] text-stone-700 leading-relaxed font-medium">
                    本專區聚焦中國碧螺春（江蘇洞庭山系）。清代文人以「碧綠浮動，清香襲人」形容其神韻。
                  </p>
                  <div className="flex gap-2 mt-6 flex-wrap">
                    {['洞庭山', '驚蟄雨前', '滿披白毫', '上投法', '嚇煞人香'].map((tag) => (
                      <span key={tag} className="rounded-full border shadow-sm border-emerald-200 bg-white px-4 py-1.5 text-sm text-emerald-900 font-bold hover:bg-emerald-50 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                      <Wind size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-stone-900 text-lg mb-2">嚇煞人香與名號</h4>
                      <p className="text-base text-stone-600 leading-relaxed">
                        傳說康熙賜名「嚇煞人香」是對其極致嫩香的讚譽。名號源於其外形：色澤碧綠、捲曲如螺、春季採摘。
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                      <Mountain size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-stone-900 text-lg mb-2">洞庭山風土智慧</h4>
                      <p className="text-base text-stone-600 leading-relaxed">
                        傳統「花果樹交錯間栽」，茶樹吸取花果香，既造就了獨特香氣，也利用生態遮蔭避霜。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 shadow-md relative overflow-hidden group">
                  <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                    <Droplets size={120} />
                  </div>
                  <h4 className="font-black text-white text-xl mb-4 flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                      <Droplets size={20} />
                    </div>
                    獨門泡法：上投法
                  </h4>
                  <ol className="list-decimal pl-6 text-[17px] text-stone-300 space-y-3">
                    <li>準備玻璃杯，注入 80°C 熱水（約七分滿）。</li>
                    <li>將乾茶輕輕撒在水面上。</li>
                    <li>欣賞 <span className="font-bold text-emerald-400 uppercase tracking-widest bg-emerald-900/50 px-2 py-0.5 rounded ml-1">「白毫雪落」</span>：茶芽吸水後徐徐下沉，如雪花飛舞，美不勝收。</li>
                  </ol>
                  <div className="mt-6 p-4 bg-white/10 rounded-2xl text-sm text-stone-200 border border-white/10 backdrop-blur-sm flex items-start gap-3">
                    <Info size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <p>小技巧：可將舒展茶芽一同咀嚼，微苦後回甘，清涼退火。</p>
                  </div>
                </div>
              </div>

              {/* Right: Feature Image & Lifestyle Array */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[400px] lg:min-h-0 group">
                  <img
                    src="/images/green_tea_glass.png"
                    alt="Green Tea Brewing in Glass"
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white text-base font-bold bg-black/40 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-lg w-full justify-center">
                      <Sprout size={18} className="text-emerald-300" />
                      欣賞茶芽在水中舒展的「茶舞」
                    </div>
                  </div>
                </div>

                {/* Lifestyle Card */}
                <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm">
                  <div className="text-sm font-extrabold tracking-widest text-emerald-600 mb-4 flex items-center gap-2">
                    <Calendar size={16} /> 四時養生
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Sprout size={20} className="text-emerald-500" />
                      </div>
                      <div>
                        <div className="font-black text-stone-900 text-[17px]">春飲綠茶</div>
                        <div className="text-[15px] text-stone-600 mt-0.5">疏肝理氣，清解春燥</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-stone-100 opacity-75 hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center border border-stone-200">
                        <div className="w-3 h-3 rounded-full bg-stone-400" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-900 text-[17px]">冬飲熟茶</div>
                        <div className="text-[15px] text-stone-500 mt-0.5">溫養與安定</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 綠茶補充內容：儲存、三投法、曬青/烘青/蒸青、適宜人群 ── */}
          <GreenTeaSupplement />

          <ProcessLine>重點總結：殺青固定鮮綠；沖泡以 80°C、少悶、短浸為原則。</ProcessLine>
        </div>
      </div>
    );
  }

  if (kind === 'red') {
    return (
      <div className="space-y-6">
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">起源座標</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">中國明末・福建武夷山</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              從「阻止氧化」到「擁抱發酵」：一場工藝探索，讓深色發酵茶走上世界舞台。
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">國際路線</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">荷蘭 → 英國 → 全球</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              1610 年荷蘭東印度公司帶回茶樣後，飲茶迅速在歐洲貴族間成為時尚；英國崛起後，更將紅茶推進全球化。
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">實用快抄</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">紅茶沖泡建議</div>
            <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed space-y-1">
              <li>茶水比：1:30</li>
              <li>水溫：95°C 以上沸水</li>
              <li>器具：瓷器（不吸味、好觀湯色），紫砂亦可</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">TURNING POINT</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">意外的誕生：從綠茶到發酵茶的技術轉捩點</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            十六世紀武夷山茶農為提升競爭力，學習安徽松蘿山僧侶的「炒青」技術。炒青原本用來更有效抑制氧化、保持翠綠與高香；
            但在探索過程中，茶農們發現：如果不阻止氧化，茶葉雖變深色，茶湯卻更明艷，香氣也更馥郁——「發酵茶」因而誕生。
          </p>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">EARLY TRADE</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">初登世界舞台：歐洲的早期接觸與貿易開端</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <Bullet title="1556 之後：早期記載（傳教士）">
              葡萄牙傳教士描述「顏色微紅、以瓷杯盛裝」的熱飲，雖未必等同現代紅茶，但已非綠茶的可能線索。
            </Bullet>
            <Bullet title="1610：荷蘭東印度公司帶回茶樣">
              首次將少量茶葉樣品運回荷蘭並試探市場，以「東方草藥」形式販售，利潤可觀，進而推動擴大貿易。
            </Bullet>
            <Bullet title="1650 之後：飲茶成為貴族時尚">
              海牙等地形成飲茶風潮；旅行記錄也提到以牛奶、鹽等方式飲茶，後來歐洲多以糖取代鹽。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">BRITAIN</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">英倫風潮：從宮廷珍品到全民飲品</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            1662 年凱瑟琳公主將飲茶與茶具帶入英國宮廷，迅速引領貴族模仿。17 世紀末，「Bohea」發酵茶在歐洲走紅，
            「Bohea」即「武夷」的音譯，並一度成為歐洲人對深色發酵茶（Black Tea）的代名詞。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">等級線索</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed space-y-1">
                <li>Bohea（武夷）：深色發酵茶的普遍稱呼</li>
                <li>Congou（工夫）：品質更佳的升級版</li>
                <li>Souchong（小種）：更高等級，正山小種為代表</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">商業推力</div>
              <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
                深色發酵茶利潤高且更耐長途海運，荷蘭與英國公司因而大量增加訂單，價格下降後逐步走入平民生活。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">GEOPOLITICS</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">茶葉與戰爭：貿易引發的全球地緣政治變革</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">1773：波士頓傾茶事件</div>
              <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
                《茶稅法》引發殖民地反抗，342 箱中國茶被倒入海中；其中接近 80% 為武夷、工夫、小種等深色發酵茶，並成為美國獨立戰爭導火索之一。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">逆差與殖民茶園</div>
              <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
                英國為扭轉白銀外流，透過鴉片貿易與殖民地茶園尋求自給。1838 年在印度阿薩姆創製紅茶後，徹底打破對中國茶依賴；
                隨後更導向 1840 年的第一次鴉片戰爭。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">INDUSTRY</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">工業革命與英式標準：現代紅茶體系的建立</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            工業革命不僅改變了紅茶的生產，也建立了以「拼配」為核心的現代標準。1874 年揉捻機、1876 年切茶機的發明，催生「紅碎茶」；
            紅碎茶利於拼配、萃取快，適合袋泡茶，迅速成為全球主力，至今仍佔全球茶葉總出口量約 80%。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="Blending（拼配）成為價值核心">
              超過 90% 的英國市場紅茶為拼配茶（伯爵、早餐茶等）。殖民地完成採摘與初製，最後的拼配與定價權牢握在英國本土。
            </Bullet>
            <Bullet title="英式下午茶的文化加持">
              1840 年貝德福公爵夫人安娜推動下午茶風潮，紅茶成為英國社會的重要日常儀式，也加速全球擴散。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">WORLD</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">世界的紅茶：在地文化的落地生根</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="俄羅斯：茶葉之路與茶炊文化">
              1676 年起透過「茶葉之路」進口，19 世紀成為全民飲品；常加入糖、果醬、檸檬片，茶炊（Samovar）是家庭珍物。
            </Bullet>
            <Bullet title="土耳其與愛爾蘭：超級重度飲茶者">
              兩國年人均飲茶量居世界前列，紅茶深度融入日常社交，是不可或缺的生活底色。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">TODAY</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">紅茶在當代中國的新生：奶茶時代的回歸</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            在傳統品飲市場中，紅茶消費量未必居前，但它以「奶茶基底」的方式重新回到大眾生活：全發酵的溫潤醇厚，使其特別適合與牛奶與糖融合，
            成為當代流行飲品的核心原料之一。
          </p>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">PRACTICAL</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">實用紅茶指南</div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
            <table className="min-w-[680px] w-full text-left text-[17px]">
              <thead className="bg-stone-50 text-stone-700">
                <tr>
                  <th className="px-4 py-2 font-extrabold">類別</th>
                  <th className="px-4 py-2 font-extrabold">代表品種</th>
                </tr>
              </thead>
              <tbody className="bg-white text-stone-700">
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">中國紅茶</td>
                  <td className="px-4 py-3">武夷山正山小種、金駿眉、安徽祁門紅茶、雲南滇紅</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">國外紅茶</td>
                  <td className="px-4 py-3">
                    印度阿薩姆、大吉嶺、斯里蘭卡錫蘭紅茶、英式拼配紅茶（格雷伯爵、英式早餐茶）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">沖泡建議</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>茶水比：1:30</li>
                <li>水溫：95°C 以上沸水（充分激發香氣與滋味）</li>
                <li>器具：瓷器茶具（不吸味提醒湯色），紫砂亦可</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">健康特性</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>茶性偏溫和</li>
                <li>常被認為有驅寒、暖胃、幫助消食等作用</li>
                <li>較適合體質偏寒、不宜多飲綠茶者</li>
              </ul>
            </div>
          </div>
        </div>

        <ProcessLine>茶菁 → 室內萎凋 → 揉捻（切）→ 發酵 → 乾燥 → 紅茶</ProcessLine>
      </div>
    );
  }

  if (kind === 'black') {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-stone-50 px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-slate-700/70">DARK TEA</div>
          <div className="mt-2 text-xl font-extrabold text-stone-900">黑茶：從工藝、歷史到品鑑的完整指南</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            什麼是黑茶？它在何時出現，又從何而來？為什麼普洱茶不全然是黑茶？如何判斷一款黑茶的好壞，又該如何享受它獨特的功效？
            這裡用一套「工藝 → 歷史 → 品類 → 選購」的路線，完整梳理黑茶的核心脈絡。
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">工藝定位</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">後發酵（微生物參與）</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              黑茶的發酵發生在「殺菁之後」，並以微生物轉化為主角，這與多數茶類的「酶促氧化」不同。
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">身份標誌</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">渥堆（核心工藝）</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              黑茶的充分必要條件，是「渥堆」：在濕熱堆放中培養有益菌群，塑造醇厚風味與陳化潛力。
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">選購三步</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">看・聞・觀湯</div>
            <ol className="mt-2 text-[17px] text-stone-700 leading-relaxed list-decimal pl-5 space-y-1">
              <li>看乾茶：有無青／白色霉點</li>
              <li>聞氣味：是否有霉味與異味</li>
              <li>觀茶湯：好茶應「澄澈透亮」</li>
            </ol>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">PROCESS</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">1. 解構黑茶：獨一無二的「後發酵」工藝</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            六大茶類是依加工工藝與發酵程度劃分。黑茶外觀深色，但它的「發酵」不能直接用 0–100% 去理解，因為它採用的是「後發酵」：
            在殺菁之後、以微生物參與為主的轉化過程。
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
            <table className="min-w-[720px] w-full text-left text-[17px]">
              <thead className="bg-stone-50 text-stone-700">
                <tr>
                  <th className="px-4 py-2 font-extrabold">茶類</th>
                  <th className="px-4 py-2 font-extrabold">發酵程度描述</th>
                </tr>
              </thead>
              <tbody className="bg-white text-stone-700">
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">綠茶</td>
                  <td className="px-4 py-3">發酵程度趨近於 0，被稱為「不發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">白茶</td>
                  <td className="px-4 py-3">發酵程度極低，僅略高於綠茶，屬於「微發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">黃茶</td>
                  <td className="px-4 py-3">發酵程度較低，屬於「輕發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">青茶（烏龍茶）</td>
                  <td className="px-4 py-3">發酵程度範圍最廣，介於兩者之間，被稱為「半發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">紅茶</td>
                  <td className="px-4 py-3">發酵程度最接近 100%，被稱為「全發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">黑茶</td>
                  <td className="px-4 py-3">
                    後發酵（殺菁之後）＋ 微生物參與；核心工藝為「渥堆」，出廠後在合適條件下仍可持續轉化。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="兩種「發酵」的本質差異">
              嚴格意義的發酵（Fermentation）需微生物參與；多數茶類口語的「發酵」多指酶促氧化（Enzymatic Oxidation），主要由茶葉自帶酶催化氧化反應。
            </Bullet>
            <Bullet title="渥堆＋持續發酵">
              渥堆在濕熱條件下培養有益菌群；黑茶出廠後若儲存環境適宜，轉化可延續，茶湯逐漸更順滑、甜厚。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">HISTORY</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">2. 追本溯源：黑茶的歷史演進與工藝定型</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            黑茶的「苗頭」可追溯到唐代邊疆需求與「茶馬古道」貿易：粗老茶葉在長途運輸中遭遇濕熱而自然變化，色澤由青綠轉烏黑。
            宋代後，邊民習慣此滋味，產地開始嘗試「堆積做色」與「蒸壓成塊」以利運輸。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="從自然演變到主動製作">
              製茶師傅意識到與其被動不可控，不如在產地「主動加工」到目標狀態，因而促使工藝逐步成熟與定型。
            </Bullet>
            <Bullet title="學術觀點：何時算黑茶？">
              關於起源時間有不同看法；陳椽教授主張現代意義黑茶應以安化黑茶等（低溫殺菁後色澤已呈深褐綠）為核心脈絡，時間多指向明末清初。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">MAP</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">3. 品類巡禮：主流黑茶與「金花」</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">常見黑茶種類</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>普洱茶（雲南）：熟茶是典型黑茶；生茶工藝更接近綠茶系統的蒸壓茶路線</li>
                <li>六堡茶（廣西）：檳榔香與陳香，有時可見「金花」</li>
                <li>安化黑茶（湖南）：黑磚、茯磚（金花）、千兩茶、天尖、貢尖等</li>
                <li>青磚茶（湖北）：緊壓青磚為代表，邊銷重要茶品</li>
                <li>藏茶（四川邊茶）：緊壓為主，銷往藏區</li>
              </ul>
              <div className="mt-3 text-sm text-stone-500">
                備註：普洱茶不全然等同黑茶；本站也另有「普洱茶」獨立頁面整理。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">金花是什麼？</div>
              <div className="mt-2 text-base font-extrabold text-stone-900">冠突散囊菌（益生菌）</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>形成：需特定溫濕度與「發花」工藝</li>
                <li>影響：分泌酶轉化物質，使口感更醇和甘甜</li>
                <li>價值：可作為茯磚等品質指標之一，但非所有黑茶都會有</li>
              </ul>
              <div className="mt-3 text-sm text-stone-500">建議心態：可遇不可求，不必強求。</div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="普洱茶是黑茶嗎？">
              需分生茶與熟茶：熟普包含渥堆，因此屬黑茶；生普不經渥堆、無微生物主導轉化，許多專業觀點將其視為蒸壓綠茶路線，但具陳放轉化特性。
            </Bullet>
            <Bullet title="熟普工藝的出現">
              熟普工藝約在 1973 年後形成，目的在模仿陳年生普的口感，借鑑了黑茶工藝而創造。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">BUYING GUIDE</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">4. 消費者指南：如何挑選優質與安全的黑茶</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">第一步：看外觀</div>
              <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
                檢查是否有青色或白色霉點（深色乾茶上通常更顯眼）。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">第二步：聞氣味</div>
              <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
                儲存不當幾乎一定有霉味或異味，是最直接的警訊。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">第三步：觀茶湯</div>
              <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
                好黑茶茶湯必須「澄澈透亮」。若出現雜質、渾濁物或灰塵，表示儲存條件不佳（注意與均勻附著的茶毫區別）。
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="健康功效與潛在風險">
              黑茶的健康價值與有益菌相關；但若環境過於潮濕或有異味，可能滋生有害菌（如黃曲霉菌）。因此選購與儲存必須把關。
            </Bullet>
            <Bullet title="辨別假「金花」的提醒">
              市面可能以黃曲霉菌冒充金花：放大鏡下黃曲霉多呈散狀直立、顏色偏綠，並伴隨霉味與茶湯渾濁；真正金花多呈金黃色、圓球狀聚集。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">CLOSING</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">結論：享受平民又健康的茶飲</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            黑茶的魅力在於醇厚口感、越陳越香與後發酵的健康價值。回到品飲本質：不盲目追高價、不迷信故事、不沉迷金融屬性，
            選擇儲存得當、湯色澄亮、氣味乾淨的好茶，黑茶就能成為既親民又耐喝的日常茶飲。
          </p>
        </div>

        <ProcessLine>茶菁 → 殺菁 → 揉捻 → 渥堆（微生物後發酵）→ 乾燥 →（可選）緊壓成型 → 陳化轉化</ProcessLine>
      </div>
    );
  }

  if (kind === 'oolong') {
    return (
      <div className="space-y-6">
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">發酵光譜</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">約 8% → 75%</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              跨度極大，因此品項最繁多，也最容易被誤認為紅茶或其他深色茶。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">工藝核心</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">萎凋 × 做青 × 焙火</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              做青（搖青／走水與氧化）讓香氣層次增幅最大；在潮濕氣候下加入焙火能更穩定乾燥並激發芳香物質。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">文化影響</div>
            <div className="mt-2 text-base font-extrabold text-stone-900">消脂解膩的「健康熱」</div>
            <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              青茶常被形容有助消脂解膩，並促成 1970 年代日本的烏龍茶熱潮，成為社會性消費現象。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">ORIGIN</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">追本溯源：青茶的歷史謎團與誕生之路</div>
          <p className="mt-3 text-[17px] text-stone-700 leading-relaxed">
            1556 年葡萄牙神父在廣東記錄到「顏色微紅」的茶湯，但公認的紅茶要到明末清初才在武夷山誕生。
            這個悖論引發學界推斷：那杯泛紅茶湯，可能是發酵程度偏高或經陳年氧化的烏龍茶，進而支持「半發酵狀態的茶」在紅茶誕生之前就可能已出現的觀點。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="兩種看法為何都可能成立？">
              以「結果」看，半發酵狀態的茶可能因偶然條件早早出現；但以「工藝」看，成熟的青茶製程（尤其做青）確實更複雜，可能晚於紅茶才定型。
            </Bullet>
            <Bullet title="武夷山的偶然與在地智慧">
              推行散茶後武夷山被迫引進松蘿炒青法；大量鮮葉等待炒製時在濕潤多霧氣候中自然氧化，之後高溫炒製中止並鎖定發酵；再加上焙火工序，形成武夷岩茶的雛形。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">GLOBALIZATION</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">全球化之路：從「武夷茶」到「烏龍茶」的名稱演變</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <Bullet title="Boudi（武夷）→ Black Tea 的混淆">
              18 世紀武夷茶與松蘿茶成為貿易主力；深色武夷茶與後來的紅茶在西方常被一併歸為 Black Tea，埋下長期混淆根源。
            </Bullet>
            <Bullet title="Formosa Oolong 的崛起">
              武夷茶聲譽下滑期，台灣烏龍以「Formosa Oolong Tea」外銷，填補高品質半發酵茶市場空缺，特別在美國大獲成功。
            </Bullet>
            <Bullet title="名詞回流與定義確立">
              Oolong 從商品名逐步成為國際通用稱謂，用以區分綠茶與紅茶；在多數地區，烏龍茶幾乎等同青茶，台灣則常以「青茶」作總稱、烏龍作其中一支系。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">MAP</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">青茶品類地圖：三大產區的代表名品</div>

          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">福建烏龍</div>
              <div className="mt-2 text-base font-extrabold text-stone-900">閩北岩茶 × 閩南安溪</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>閩北：武夷岩茶（岩韻）— 大紅袍、肉桂、水仙、奇種、名叢</li>
                <li>四大名叢：大紅袍、鐵羅漢、白雞冠、水金龜（注意：用字為草叢的「叢」）</li>
                <li>閩南：安溪系（花香鮮爽）— 鐵觀音、黃旦（黃金桂）、水仙、永春佛手</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">廣東烏龍</div>
              <div className="mt-2 text-base font-extrabold text-stone-900">鳳凰單叢（高揚香型）</div>
              <p className="mt-2 text-[17px] text-stone-700 leading-relaxed">
                以自然香型著稱，記載多達 79 種。1996 年官方確定十大代表香型：
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {[
                  '黃枝香',
                  '芝蘭香',
                  '蜜蘭香',
                  '桂花香',
                  '玉蘭香',
                  '薑花香',
                  '夜來香',
                  '茉莉香',
                  '杏仁香',
                  '肉桂香',
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-stone-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-stone-500">台灣烏龍</div>
              <div className="mt-2 text-base font-extrabold text-stone-900">風土延伸的清香與熟韻</div>
              <ul className="mt-2 text-[17px] text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>文山包種</li>
                <li>高山烏龍</li>
                <li>凍頂烏龍</li>
                <li>白毫烏龍（東方美人）</li>
                <li>鐵觀音</li>
              </ul>
              <div className="mt-3 text-sm text-stone-500">
                教學記憶點（韻）：台灣蜜韻、閩北岩韻、閩南音韻、廣東山韻。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-stone-500">CULTURE</div>
          <div className="mt-2 text-[19px] font-extrabold text-stone-900">青茶的獨特功效與文化影響</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="消脂解膩的日常定位">
              青茶常被視為佐餐與日常保健的理想飲品，因其被形容有助消脂解膩與身材管理，因而深受注重健康人士喜愛。
            </Bullet>
            <Bullet title="日本烏龍茶熱潮（1970s）">
              上世紀七十年代青茶在日本形成全國性大流行，作為「健康飲品」迅速風靡市場，成為一種社會性的文化現象。
            </Bullet>
          </div>
        </div>

        <ProcessLine>茶菁 → 日光萎凋／室內萎凋 → 做青（搖青、走水與氧化）→ 殺菁 → 揉捻 → 乾燥（可選：焙火）→ 青茶</ProcessLine>
      </div>
    );
  }

  return null;
}
