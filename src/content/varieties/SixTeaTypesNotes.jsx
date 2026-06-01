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
  Clock,
  FlaskConical,
  Globe,
  Feather
} from 'lucide-react';
import FudingHistory from './chapters/FudingHistory';
import GreenTeaSupplement from './GreenTeaSupplement';
import ReadingAssist from '../../components/ReadingAssist';

function ProcessLine({ children, variant }) {
  let cardClass = "border-stone-200 bg-stone-50";
  let labelClass = "text-stone-500";
  let contentClass = "text-stone-900 text-[15px] md:text-[17px]";

  if (variant === 'green') {
    cardClass = "border-[#d6dfd3] bg-[#fafcf9]";
    labelClass = "text-[#2d5a27]";
    contentClass = "text-[#242f21] text-[15px] md:text-[17px]";
  } else if (variant === 'yellow') {
    cardClass = "border-[#ebdcb9]/80 bg-[#faf8f2]";
    labelClass = "text-[#8c6212]";
    contentClass = "text-[#2c2921] text-[15px] md:text-[17px]";
  }

  return (
    <div className={`rounded-2xl border px-5 py-4 ${cardClass}`}>
      <div className={`text-sm font-extrabold tracking-widest uppercase ${labelClass}`}>PROCESS</div>
      <div className={`mt-2 font-extrabold leading-relaxed ${contentClass}`}>{children}</div>
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
      <div className="animate-fadeIn">
        <ReadingAssist contentRef={greenContentRef} headingSelector="[data-reading-toc]" />

        <div ref={greenContentRef} className="space-y-12">
          {/* Hero Section */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl min-h-[480px] group border border-[#ebdcb9]/40">
            <img
              src="/images/white_tea_silver_needle.png"
              alt="Yellow Tea Leaves in Sunlight"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 filter sepia-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/30 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-2xl text-white space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fcf5e5]0/20 backdrop-blur-md border border-amber-400/30 rounded-full text-xs font-bold tracking-widest uppercase text-[#8c6212]mber-300">
                  <Sun size={12} /> Mild Fermentation
                </div>
                <h2 className="text-3xl md:text-[#8c6212]xl font-black leading-tight text-[#8c6212]mber-50 text-shadow-sm">
                  黃茶：千錘百煉的溫潤隱士
                </h2>
                <p className="text-[16px] md:text-[18px] text-[#8c6212]mber-100 leading-relaxed font-light opacity-90">
                  「黃葉黃湯」的獨特標誌，源於漫長濕熱的「悶黃」磨礪。<br />
                  在時間與溫度的包容下，褪去青澀鋒芒，留下最純粹的甘甜與醇和。
                </p>
              </div>
            </div>
          </div>

          {/* Classification Visual */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="col-span-1 p-6 rounded-[2rem] bg-[#faf8f2] border border-[#ebdcb9]/80 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-[#8c6212]mber-500">
                <Thermometer size={100} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1c1a15] mb-4 flex items-center gap-2">
                <History size={20} className="text-[#8c6212]mber-600" /> 分類座標
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <div className="flex justify-between items-end text-xs font-bold text-[#5e5546] uppercase tracking-widest">
                    <span>Yellow Tea</span>
                    <span>10% - 20%</span>
                  </div>
                  <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#fcf5e5]0 w-[15%]" />
                  </div>
                </div>
                <ul className="text-[16px] md:text-[18px] text-[#4c4538] space-y-2 mt-4 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fcf5e5]0 shrink-0" />
                    <span>黃茶：輕發酵（三黃特徵）</span>
                  </li>
                  <li className="flex items-center gap-2 opacity-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    <span>介於綠茶（0%）與白茶之間</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 p-6 rounded-[2rem] bg-[#faf8f2] border border-[#ebdcb9]/80 shadow-sm grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1c1a15] mb-4 flex items-center gap-2">
                  <Coffee size={20} className="text-[#8c6212]mber-600" /> 核心工藝
                </h3>
                <div className="flex items-center gap-2 text-[13px] md:text-[15px] font-bold text-stone-850">
                  <div className="px-2 py-1.5 bg-stone-50 text-[#2c2921] rounded-lg border border-stone-200">殺青</div>
                  <div className="text-stone-300">→</div>
                  <div className="px-2 py-1.5 bg-[#fcf5e5] text-[#8c6212]mber-800 rounded-lg border border-amber-100">悶黃 (核心)</div>
                  <div className="text-stone-300">→</div>
                  <div className="px-2 py-1.5 bg-stone-50 text-[#2c2921] rounded-lg border border-stone-200">揉捻</div>
                  <div className="text-stone-300">→</div>
                  <div className="px-2 py-1.5 bg-stone-50 text-[#2c2921] rounded-lg border border-stone-200">乾燥</div>
                </div>
                <p className="mt-3 text-[16px] md:text-[18px] text-[#4c4538] leading-relaxed">
                  關鍵在於在高溫「殺青」破壞酵素活性後，趁熱進行「悶黃」堆積，利用殘留水分與溫熱促成物質緩慢的非酶性自動轉化。
                </p>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-[#e2e2d9] pt-6 md:pt-0 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-[#1c1a15] mb-4 flex items-center gap-2">
                  <Droplets size={20} className="text-[#8c6212]mber-600" /> 沖泡口訣
                </h3>
                <ul className="space-y-2 text-[16px] md:text-[18px] text-[#2c2921] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#8c6212]mber-500" />
                    <span>水溫 <strong>80°C - 85°C</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#8c6212]mber-500" />
                    <span>透明玻璃杯或白瓷蓋碗</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#8c6212]mber-500" />
                    <span>可中投法欣賞「君山茶舞」</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 1. 黃茶通識 */}
          <div id="yellow-intro" className="bg-white rounded-[2.5rem] border border-[#e2e2d9] p-8 md:p-12 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#ebdcb9]/30">
              <div className="p-3 bg-[#fcf5e5] text-[#8c6212] rounded-full">
                <BookOpen size={24} />
              </div>
              <div>
                <div className="text-xs font-extrabold tracking-[0.2em] text-[#5e5546] uppercase">Article · Part 1</div>
                <h3 className="text-xl md:text-[#8c6212]xl font-bold text-[#1c1a15]">黃茶通識與陳椽教授的分類學說</h3>
              </div>
            </div>

            <div className="space-y-6 text-[#2c2921] text-[16px] md:text-[18px] leading-relaxed">
              <p className="text-[#8c6212]mber-900 bg-[#fcf5e5]/40 p-6 md:p-8 rounded-3xl border-l-4 border-amber-400 font-medium tracking-wide">
                在茶葉分類學的時光長河中，黃茶曾經面臨身份的混淆。許多人因其工藝與綠茶接近，而將其誤歸為綠茶的分支。現代茶學奠基人<strong>陳椽教授</strong>在 1979 年發表里程碑論文《茶葉分類理論與實際》中，力排眾議，確立了科學分類的基準。
              </p>
              <div className="grid md:grid-cols-2 gap-8 items-start pt-4">
                <div className="space-y-4">
                  <h4 className="font-extrabold text-[#1c1a15] text-lg">陳椽教授的「黃湯黃葉」考證</h4>
                  <p className="text-[#4c4538] text-[16px] md:text-[18px]">
                    陳椽教授指出：「分類必須同時表明品質的系統性與製法的系統性，並抓住主要內含物變化的系統性。」黃茶標誌性的「黃葉黃湯」，是由核心工序<strong>「悶黃」</strong>促使茶葉成分發生非酶促濕熱自動氧化所決定的，這是一場從量變到質變的生化飛躍，因此必須作為獨立的「綱（茶類）」存在。
                  </p>
                </div>
                <div className="bg-[#faf6eb]/40 border border-[#ebdcb9]/40 p-6 rounded-3xl space-y-3">
                  <h4 className="font-extrabold text-[#aa8022] text-lg flex items-center gap-2">
                    <History size={18} /> 唐代「黃芽」之歷史辯證
                  </h4>
                  <p className="text-[#2c2921] text-[16px] md:text-[18px] leading-relaxed">
                    陸羽《茶經》中所載「壽州茶以黃為上」，常被誤認為唐代即有工藝黃茶。陳椽教授在《茶業通史》中嚴謹反駁：唐代「壽州黃芽」本質上是<strong>茶樹基因變異產生的「自然黃化芽葉」</strong>，其製程仍是純粹的<strong>蒸青綠茶工藝</strong>，並無悶黃。真正以悶黃為核心的「工藝黃茶」，實起源於<strong>明代隆慶年間（約公元 1570 年）</strong>，是由炒青綠茶未及時烘乾的濕熱堆黃實踐中演變而來的。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 悶黃生化機理 */}
          <div id="yellow-biochem" className="bg-white rounded-[2.5rem] border border-[#e2e2d9] p-8 md:p-12 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#ebdcb9]/30">
              <div className="p-3 bg-[#fcf5e5] text-[#8c6212] rounded-full">
                <FlaskConical size={24} />
              </div>
              <div>
                <div className="text-xs font-extrabold tracking-[0.2em] text-[#5e5546] uppercase">Science · Part 2</div>
                <h3 className="text-xl md:text-[#8c6212]xl font-bold text-[#1c1a15]">悶黃工序的底層生化化學機理</h3>
              </div>
            </div>

            <div className="space-y-6 text-[#2c2921] text-[16px] md:text-[18px] leading-relaxed">
              <p className="text-[#4c4538]">
                悶黃是高水分（含水率約 60%）與積累溫熱（悶堆溫度約 40°C - 55°C）條件下的<strong>「非酶促濕熱化學反應」</strong>。在高溫殺青後，茶葉的内源氧化酶已完全失活，一切轉化皆是由非酶促化學規律所主導的：
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-[#fbf9f4] p-6 rounded-3xl border border-[#ebdcb9]/50 space-y-4">
                  <h4 className="font-extrabold text-[#1c1a15] text-lg">一、 葉綠素的非酶性脫鎂反應</h4>
                  <p className="text-[#4c4538] text-[16px] md:text-[18px] leading-relaxed">
                    綠茶的翠綠來自葉綠素卟啉環中心結合的鎂離子（Mg²⁺）。在悶黃的濕熱酸性環境中（有機酸緩慢釋放，pH 值下降），氫離子（H⁺）會強烈取代鎂離子，發生<strong>脫鎂反應（Pheophytinization）</strong>，使綠色的葉綠素轉化為褐黃色的脫鎂葉綠素。原本被綠色覆蓋的葉黃素（Lutein）與類胡蘿蔔素得以顯露。
                  </p>
                  <pre className="bg-[#fafcfa] border border-[#e2e2d9] rounded-xl p-4 text-[13px] text-emerald-800 font-mono overflow-x-auto leading-relaxed">
                    {"Chlorophyll a (C55H72O5N4Mg) + 2H⁺ \n  → Pheophytin a (C55H74O5N4) + Mg²⁺\n\nChlorophyll b (C55H70O6N4Mg) + 2H⁺ \n  → Pheophytin b (C55H72O6N4) + Mg²⁺"}
                  </pre>
                </div>

                <div className="bg-[#fbf9f4] p-6 rounded-3xl border border-[#ebdcb9]/50 space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#1c1a15] text-lg">二、 兒茶素表異構化與降澀反應</h4>
                    <p className="text-[#4c4538] text-[16px] md:text-[18px] leading-relaxed">
                      綠茶的苦澀收斂感來自酯型兒茶素（EGCG 與 ECG）。在溫熱水熱作用下，兒茶素發生<strong>表異構化（Epimerization）</strong>，順式兒茶素空間構型反轉為收斂性較弱的反式異構體：
                    </p>
                    <ul className="mt-3 text-[15px] text-[#2c2921] space-y-1 bg-[#fcf5e5]/50 p-3 rounded-lg border border-amber-100 font-mono">
                      <li>L-EGCG (強烈收斂) → D-GCG (溫和甜醇)</li>
                      <li>L-ECG (苦澀收斂) → D-CG (甘醇柔和)</li>
                    </ul>
                  </div>
                  <p className="text-[15px] text-[#5e5546] italic mt-3">
                    同時，部分兒茶素緩慢氧化聚合成茶黃素（TFs），為黃茶茶湯提供了杏黃與金黃的色素基礎。
                  </p>
                </div>
              </div>

              <div className="bg-[#faf6eb]/30 border border-[#ebdcb9]/40 p-6 rounded-3xl mt-4">
                <h4 className="font-extrabold text-[#1c1a15] text-base md:text-lg mb-2">三、 蛋白質與醣類的多重水解</h4>
                <p className="text-[16px] md:text-[18px] text-[#4c4538] leading-relaxed">
                  在高濕熱下，茶葉內的不溶性蛋白質緩慢降解為游離胺基酸，多醣（澱粉、果膠）水解為可溶性單糖與還原糖。在乾燥烘焙過程中，游離胺基酸與還原糖發生<strong>梅納反應（Maillard Reaction）</strong>，生成吡嗪、呋喃等環狀香氣物質，這便是黃大茶標誌性「鍋巴焦糖香」與熟栗甜香的科學源頭。
                </p>
              </div>
            </div>
          </div>

          {/* 3. 台灣茶改場觀點 */}
          <div id="yellow-taiwan" className="bg-white rounded-[2.5rem] border border-[#e2e2d9] p-8 md:p-12 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#ebdcb9]/30">
              <div className="p-3 bg-[#fcf5e5] text-[#8c6212] rounded-full">
                <Globe size={24} />
              </div>
              <div>
                <div className="text-xs font-extrabold tracking-[0.2em] text-[#5e5546] uppercase">Research · Part 3</div>
                <h3 className="text-xl md:text-[#8c6212]xl font-bold text-[#1c1a15]">台灣茶及飲料作物改良場（TBRS）的科學觀點</h3>
              </div>
            </div>

            <div className="space-y-6 text-[#2c2921] text-[16px] md:text-[18px] leading-relaxed">
              <p className="text-[#4c4538]">
                國家級權威機構<strong>農業部茶及飲料作物改良場</strong>（簡稱茶改場，TBRS）指出，台灣的茶業發展史以「部分發酵茶（如烏龍茶）」與「全發酵茶（紅茶）」為主軸，台灣本土雖無商業化規模的黃茶生產，但科研人員近年來嘗試將台灣茶樹良種導入黃茶輕悶黃製程，發現了極具本土風味的突破性表現：
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-4 text-[16px] md:text-[18px]">
                <div className="bg-[#fdfdfc] rounded-3xl p-6 border border-[#e2e2d9] shadow-sm transform transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-805 border border-emerald-200 font-bold text-xs">良種實驗 1</span>
                    <h4 className="font-extrabold text-[#1c1a15] text-base">台茶12號（金萱黃茶）</h4>
                  </div>
                  <p className="text-[#5e5546] leading-relaxed">
                    金萱品種富含豐富的遊離氨基酸。利用其夏秋茶菁進行「輕度悶黃」，濕熱作用能完美去除夏秋茶多餘的苦澀單寧，並將金萱天然的<strong>「椰奶香」</strong>與悶黃的<strong>「穀物甜熟香」</strong>進行有機編織，產生極具糯米甜感的溫醇風味。
                  </p>
                </div>

                <div className="bg-[#fdfdfc] rounded-3xl p-6 border border-[#e2e2d9] shadow-sm transform transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-850 border border-orange-200 font-bold text-xs">良種實驗 2</span>
                    <h4 className="font-extrabold text-[#1c1a15] text-base">台茶18號（紅玉黃茶）</h4>
                  </div>
                  <p className="text-[#5e5546] leading-relaxed">
                    紅玉具有高含量的多酚類物質。將其導入黃茶工藝中，控制溫濕度使其發生局部非酶促熱氧化，紅玉特有的<strong>「肉桂與薄荷野香」</strong>會與悶黃的蜜甜香交織，呈現出極其複雜且充滿熱帶熟果感的新興香氣結構。
                  </p>
                </div>
              </div>

              <div className="bg-[#fcf5e5] border border-[#ebdcb9]/60 p-6 rounded-3xl mt-6 flex gap-4 items-start">
                <Info size={22} className="text-[#8c6212] shrink-0 mt-0.5" />
                <p className="text-[16px] md:text-[18px] leading-relaxed font-medium text-[#5e4413]">
                  茶改場的實驗證明，台灣翠玉（台茶13號）與四季春品種同樣具有高火適製性，用於開發高火焦糖鍋巴香的黃大茶，能為手搖茶飲提供<strong>「不加糖也極具甘甜厚實感、且極溫和不傷胃」</strong>的優質基底，極具商業創新潛力。
                </p>
              </div>
            </div>
          </div>

          {/* 4. 三大分類與風土 */}
          <div id="yellow-terroir" className="bg-white rounded-[2.5rem] border border-[#e2e2d9] p-8 md:p-12 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#ebdcb9]/30">
              <div className="p-3 bg-[#fcf5e5] text-[#8c6212] rounded-full">
                <Map size={24} />
              </div>
              <div>
                <div className="text-xs font-extrabold tracking-[0.2em] text-[#5e5546] uppercase">Terroir · Part 4</div>
                <h3 data-reading-toc="true" className="text-xl md:text-2xl font-bold text-[#8c6212]">黃茶三大體系與代表名茶風土</h3>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[16px] md:text-[18px] text-[#4c4538] leading-relaxed">
                依據採摘嫩度與葉片大小，黃茶嚴格劃分為三大體系，它們在風土環境與茶樹品種上展現出顯著的階梯性特徵：
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-4 text-[16px] md:text-[18px]">
                <div className="bg-[#faf6eb]/20 border border-[#ebdcb9]/30 rounded-3xl p-6 space-y-4 hover:shadow-sm transition-shadow duration-300">
                  <div className="w-10 h-10 bg-amber-100 text-[#8c6212]mber-900 rounded-2xl flex items-center justify-center font-black text-sm shadow-inner">芽</div>
                  <div>
                    <h4 className="font-extrabold text-[#1c1a15] text-base mb-1">1. 黃芽茶（極致鮮嫩）</h4>
                    <p className="text-[#5e5546] leading-relaxed text-[13px] md:text-[15px]">
                      單芽或一芽一葉初展，要求極其細嫩，工藝精細。
                    </p>
                  </div>
                  <ul className="space-y-2 text-[#2c2921] font-semibold border-t border-[#ebdcb9]/40 pt-3 text-[13px] md:text-[15px]">
                    <li className="flex justify-between"><span>洞庭仙嶼 · 君山銀針</span><span className="text-[#aa8022]">君山群體種</span></li>
                    <li className="flex justify-between"><span>蜀山雨霧 · 蒙頂黃芽</span><span className="text-[#aa8022]">川茶群體種</span></li>
                    <li className="flex justify-between"><span>蘭香栗甘 · 霍山黃芽</span><span className="text-[#aa8022]">霍山大黃茶</span></li>
                  </ul>
                </div>

                <div className="bg-[#fbf9f4] border border-[#ebdcb9]/60 rounded-3xl p-6 space-y-4 hover:shadow-sm transition-shadow duration-300">
                  <div className="w-10 h-10 bg-stone-200 text-stone-850 rounded-2xl flex items-center justify-center font-black text-sm shadow-inner">小</div>
                  <div>
                    <h4 className="font-extrabold text-[#1c1a15] text-base mb-1">2. 黃小茶（嫩熟平衡）</h4>
                    <p className="text-[#5e5546] leading-relaxed text-[13px] md:text-[15px]">
                      一芽一葉至一芽二葉，嫩度適中，呈現細膩的地域風情。
                    </p>
                  </div>
                  <ul className="space-y-2 text-[#2c2921] font-semibold border-t border-stone-200 pt-3 text-[13px] md:text-[15px]">
                    <li className="flex justify-between"><span>浙江平陽 · 平陽黃湯</span><span className="text-[#5e5546]">九坑種/特早茶</span></li>
                    <li className="flex justify-between"><span>湖南寧鄉 · 溈山毛尖</span><span className="text-[#5e5546]">富磷高山種</span></li>
                    <li className="flex justify-between"><span>湖南岳陽 · 北港毛尖</span><span className="text-[#5e5546]">北港本地種</span></li>
                  </ul>
                </div>

                <div className="bg-stone-950 text-stone-200 rounded-3xl p-6 space-y-4 hover:shadow-sm transition-shadow duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 bg-stone-800 text-[#7a6f5c] rounded-2xl flex items-center justify-center font-black text-sm shadow-inner">大</div>
                    <h4 className="font-extrabold text-white text-base mt-4 mb-1">3. 黃大茶（粗獷老練）</h4>
                    <p className="text-[#7a6f5c] leading-relaxed text-[13px] md:text-[15px] font-light">
                      一芽三、四葉至五葉，葉大梗長。高溫拉老火，轉化出極其霸氣的「咖啡焦糖鍋巴香」，茶性溫和耐泡。
                    </p>
                  </div>
                  <ul className="space-y-2 text-stone-300 font-semibold border-t border-stone-800 pt-3 text-[13px] md:text-[15px]">
                    <li className="flex justify-between"><span>安徽大別山 · 霍山黃大茶</span><span className="text-[#8c6212]mber-400">大別山群體種</span></li>
                    <li className="flex justify-between"><span>廣東英德 · 廣東大葉青</span><span className="text-[#8c6212]mber-400">廣東大葉種</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 5. 品飲指南 */}
          <div id="yellow-guide" className="bg-white rounded-[2.5rem] border border-[#e2e2d9] p-8 md:p-12 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#ebdcb9]/30">
              <div className="p-3 bg-[#fcf5e5] text-[#8c6212] rounded-full">
                <Feather size={24} />
              </div>
              <div>
                <div className="text-xs font-extrabold tracking-[0.2em] text-[#5e5546] uppercase">Guide · Part 5</div>
                <h3 className="text-xl md:text-[#8c6212]xl font-bold text-[#1c1a15]">黃茶品飲藝術與「茶舞」欣賞</h3>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center text-[16px] md:text-[18px] leading-relaxed text-[#4c4538]">
              <div className="space-y-6">
                <p>
                  品飲頂級黃茶，尤其是君山銀針，不僅是味覺的享受，更是一場視覺的饗宴。由於其肥壯的芽頭內部具有特殊的物理重力結構與豐富的氣腔，沖泡時會產生令人嘆為觀止的<strong>「君山茶舞」</strong>奇觀。
                </p>
                <div className="bg-[#faf6eb]/30 p-6 rounded-2xl border border-[#ebdcb9]/40 space-y-4">
                  <h5 className="font-extrabold text-[#aa8022] text-base md:text-lg">獨門推薦：中投沖泡法步驟</h5>
                  <ol className="list-decimal pl-5 space-y-2 text-[#2c2921] text-[13px] md:text-[15px] font-medium">
                    <li>選用透明直筒高溫玻璃杯，注入約 85°C 熱水至杯身三分之一。</li>
                    <li>投入黃芽茶葉（茶水比約 1:50）。</li>
                    <li>輕輕轉動杯身，讓溫水均勻浸潤茶芽，使其初步吸水舒展。</li>
                    <li>沿杯壁緩緩注水至七八分滿，靜置觀賞。</li>
                  </ol>
                </div>
              </div>

              <div className="bg-stone-950 text-stone-200 p-6 md:p-8 rounded-[2rem] border-t-4 border-[#d4af37] space-y-4 shadow-md relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                  <Wind size={150} />
                </div>
                <h5 className="font-black text-white text-lg md:text-xl flex items-center gap-2">
                  <Sparkles className="text-[#8c6212]mber-400" size={20} /> 奇觀：白毫雪落，三起三落
                </h5>
                <p className="text-stone-405 text-[15px] leading-relaxed font-light">
                  當水注入後，只見肥壯的銀針茶芽在杯中直立懸空，隨後因氣腔排出徐徐下沉；吸水膨脹後，底部氣泡再次將茶芽托起懸浮。
                </p>
                <p className="text-[#d4af37] font-semibold text-[16px] leading-relaxed border-l-2 border-[#d4af37] pl-3 italic">
                  「銀針直立，如雨後春筍；白毫雪落，如萬筆指天。三起三落，在杯中交織出靈動的生命茶舞。」
                </p>
                <p className="text-[#7a6f5c] text-xs font-light">
                  滋味特徵：湯色橙黃明亮，帶有高雅的熟栗香與蘭花甜蜜香。入口甘甜溫潤，少綠茶之苦澀與刮胃感，多了一份大氣與厚實。
                </p>
              </div>
            </div>
          </div>

          {/* 6. 脾胃健康密碼 */}
          <div id="yellow-health" className="bg-white rounded-[2.5rem] border border-[#e2e2d9] p-8 md:p-12 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#ebdcb9]/30">
              <div className="p-3 bg-[#fcf5e5] text-[#8c6212] rounded-full">
                <Heart size={24} />
              </div>
              <div>
                <div className="text-xs font-extrabold tracking-[0.2em] text-[#5e5546] uppercase">Medicine · Part 6</div>
                <h3 data-reading-toc="true" className="text-xl md:text-2xl font-bold text-[#8c6212]">黃茶「養胃聖品」的現代藥理與生化健康密碼</h3>
              </div>
            </div>

            <div className="space-y-6 text-[#2c2921] text-[16px] md:text-[18px] leading-relaxed">
              <p className="text-[#2c2921] font-medium">
                傳統上黃茶被譽為「養胃消食聖品」，這並非虛無的民間玄學。現代生物醫學與生化藥理學研究，正逐步揭開黃茶溫和護胃的科學實證：
              </p>

              <div className="space-y-6 pt-4">
                {/* 🧬 實證 1 */}
                <div className="bg-[#faf6eb]/30 border border-[#ebdcb9]/50 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start transition-all duration-300 hover:shadow-sm">
                  <div className="md:w-1/4 md:shrink-0 space-y-2 border-b md:border-b-0 md:border-r border-[#ebdcb9]/40 pb-4 md:pb-0 md:pr-6">
                    <div className="w-12 h-12 bg-[#ebdcb9]/20 rounded-2xl flex items-center justify-center text-[#8c6212] shadow-inner text-xl">
                      🧬
                    </div>
                    <h4 className="font-extrabold text-[#8c6212] text-lg md:text-xl leading-tight">
                      科學澄清：<br />水解消化真相
                    </h4>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <p className="text-[#2c2921] font-bold text-[16px] md:text-[18px] leading-relaxed">
                      活性酶在高溫殺青下早已變性失活。養胃精髓在於：悶黃的濕熱作用相當於一個<span className="text-[#8c6212] font-extrabold">「天然熱水解器」</span>。
                    </p>
                    <p className="text-[#4c4538] text-[15px] md:text-[17px] leading-relaxed border-t border-[#ebdcb9]/30 pt-3 font-normal">
                      在無活性酶下，高溫高濕能高效將大分子蛋白質、澱粉水解為極易吸收的<strong>游離胺基酸、小分子活性肽與可溶性糖</strong>，極大地減輕了胃部的消化負擔，消積導滯。
                    </p>
                  </div>
                </div>

                {/* 🛡️ 實證 2 */}
                <div className="bg-[#fbf9f4] border border-[#ebdcb9]/50 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start transition-all duration-300 hover:shadow-sm">
                  <div className="md:w-1/4 md:shrink-0 space-y-2 border-b md:border-b-0 md:border-r border-[#ebdcb9]/40 pb-4 md:pb-0 md:pr-6">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-[#8c6212] shadow-inner text-xl">
                      🛡️
                    </div>
                    <h4 className="font-extrabold text-[#1c1a15] text-lg md:text-xl leading-tight">
                      降低刮胃感與<br />物理屏障
                    </h4>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <p className="text-[#2c2921] font-bold text-[16px] md:text-[18px] leading-relaxed">
                      綠茶酯型兒茶素會與胃黏蛋白（Mucin）結合導致沉澱，失去胃壁保護壁。
                    </p>
                    <p className="text-[#4c4538] text-[15px] md:text-[17px] leading-relaxed border-t border-[#ebdcb9]/30 pt-3 font-normal">
                      黃茶兒茶素表異構化為溫和的反式異構體，降低了對胃壁蛋白的刺激。同時，水解出的<strong>茶多醣與可溶性果膠</strong>在受損黏膜面形成暫時性物理保護屏障。
                    </p>
                  </div>
                </div>

                {/* 🦠 實證 3 */}
                <div className="bg-[#1c1a15] text-stone-200 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start transition-all duration-300 hover:shadow-sm">
                  <div className="md:w-1/4 md:shrink-0 space-y-2 border-b md:border-b-0 md:border-r border-stone-800 pb-4 md:pb-0 md:pr-6">
                    <div className="w-12 h-12 bg-stone-850 rounded-2xl flex items-center justify-center text-amber-500 shadow-inner text-xl">
                      🦠
                    </div>
                    <h4 className="font-extrabold text-white text-lg md:text-xl leading-tight">
                      益生元與短鏈<br />脂肪酸 (SCFAs)
                    </h4>
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <p className="text-white font-bold text-[16px] md:text-[18px] leading-relaxed">
                      現代藥理發現，黃茶多醣與降解多酚是極優秀的益生元，能強力增殖腸道雙歧桿菌等益生菌。
                    </p>
                    <p className="text-stone-300 text-[15px] md:text-[17px] leading-relaxed border-t border-stone-800 pt-3 font-light">
                      益生菌降解黃茶多醣後產生大量<strong>短鏈脂肪酸（SCFAs，特別是丁酸鹽 Butyrate）</strong>。它是上皮細胞能量來源，能顯著增強腸胃緊密連接蛋白表達，防禦並修復黏膜炎。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProcessLine variant="yellow">製程總結：茶菁 → 殺青 → 悶黃（核心濕熱自動氧化）→ 揉捻 → 乾燥 → 黃茶；養胃精髓在於兒茶素表異構化與物質水解</ProcessLine>
        </div>
      </div>
    );
  }
  if (kind === 'green') {
    return (
      <div className="animate-fadeIn">

        <ReadingAssist contentRef={greenContentRef} headingSelector="[data-reading-toc]" />

        <div ref={greenContentRef} className="space-y-12">
          {/* Hero Section */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl min-h-[480px] group border border-[#e2e2d9]/40">
            <img
              src="/images/green_tea_floating.png"
              alt="Fresh Green Tea Leaves Floating"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-2xl text-white space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase">
                  <Leaf size={12} /> Zero Fermentation
                </div>
                <h2 className="text-3xl md:text-5xl font-black leading-tight text-white/95 text-shadow-sm">
                  綠茶：春日的鮮活封印
                </h2>
                <p className="text-[16px] md:text-[18px] text-emerald-50 leading-relaxed font-light opacity-90">
                  一部中國飲茶史，半部是綠茶。<br />
                  零發酵工藝，只為留住茶葉最原始的清鮮與翠綠。
                </p>
              </div>
            </div>
          </div>

          {/* Classification Visual */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="col-span-1 p-6 rounded-[2rem] bg-[#fafcf9] border border-[#d6dfd3] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-emerald-500">
                <Thermometer size={100} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#141b12] mb-4 flex items-center gap-2">
                <History size={20} className="text-[#2d5a27]" /> 分類座標
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <div className="flex justify-between items-end text-xs font-bold text-[#536150] uppercase tracking-widest">
                    <span>Green Tea</span>
                    <span>0%</span>
                  </div>
                  <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#edf4ec]0 w-[5%]" />
                  </div>
                </div>
                <ul className="text-[16px] md:text-[18px] text-[#414c3e] space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#edf4ec]0 shrink-0" />
                    <span className="font-bold text-stone-800">綠茶：零發酵</span>
                  </li>
                  <li className="flex items-center gap-2 opacity-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    <span>白茶、黃茶、青茶、紅茶、黑茶</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 p-6 rounded-[2rem] bg-[#fafcf9] border border-[#d6dfd3] shadow-sm grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#141b12] mb-4 flex items-center gap-2">
                  <Coffee size={20} className="text-[#2d5a27]" /> 核心工藝
                </h3>
                <div className="flex items-center gap-2 text-sm font-bold text-stone-800">
                  <div className="px-3 py-2 bg-[#edf4ec] text-[#2d5a27] rounded-lg border border-[#d6dfd3]/40">殺青 (Kill-Green)</div>
                  <div className="text-stone-300">→</div>
                  <div className="px-3 py-2 bg-[#f5f8f4] text-[#242f21] rounded-lg border border-[#d6dfd3]/50">揉捻</div>
                  <div className="text-stone-300">→</div>
                  <div className="px-3 py-2 bg-[#f5f8f4] text-[#242f21] rounded-lg border border-[#d6dfd3]/50">乾燥</div>
                </div>
                <p className="mt-3 text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed">
                  關鍵在第一步「殺青」（蒸或炒），利用高溫破壞酵素活性，固定色澤與香氣。
                </p>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-[#e2e2d9] pt-6 md:pt-0 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-[#141b12] mb-4 flex items-center gap-2">
                  <Droplets size={20} className="text-[#2d5a27]" /> 沖泡口訣
                </h3>
                <ul className="space-y-2 text-[16px] md:text-[18px] text-[#242f21] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-500" />
                    <span>水溫 <strong className="text-[#141b12]">80°C</strong> (忌沸水)</span>
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
          <div id="green-intro" className="bg-white rounded-[2.5rem] border border-[#e2e2d9] p-8 md:p-12 shadow-sm scroll-mt-28">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#d6dfd3]/30">
              <div className="p-3 bg-stone-100 rounded-full text-[#414c3e]">
                <BookOpen size={24} />
              </div>
              <div>
                <div className="text-xs font-extrabold tracking-[0.2em] text-[#536150] uppercase">Article</div>
                <h2 className="text-xl md:text-2xl font-bold text-[#141b12]">中國綠茶的文化溯源與品飲指南（全文）</h2>
              </div>
            </div>

            <div className="prose prose-stone prose-lg max-w-none text-[#242f21] leading-relaxed space-y-12">
              <section className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#edf4ec] border border-[#d6dfd3]/40 rounded-full text-xs font-bold tracking-widest text-[#2d5a27] uppercase">
                  CLASSIFICATION
                </div>
                <h3 data-reading-toc="true" className="text-xl md:text-2xl font-black text-[#141b12]">中國茶的六大分類：以發酵定義茶之本質</h3>
                <p className="text-[16px] md:text-[18px] leading-relaxed text-emerald-900 bg-[#edf4ec]/40 p-6 md:p-8 rounded-[2rem] border-l-4 border-emerald-400 font-medium tracking-wide">
                  探索博大精深的中國茶文化，首先需要理解其分類系統的科學基礎。中國茶的分類並非基於主觀的感官體驗，而是建立在一個客觀的生化指標之上——發酵程度。這不僅是區分茶葉本質的關鍵，也是品鑑萬千茶品的起點。
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <p className="text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed">
                      基於發酵程度由低至高的順序，中國茶可被嚴謹地劃分為六大類別。茶湯的顏色與發酵程度存在著顯著的正相關性，顏色越深，通常意味著發酵程度越高：
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-[16px] md:text-[18px]">
                      <div className="bg-[#fafcf9] border border-[#d6dfd3] rounded-xl p-3 flex items-center justify-between shadow-sm"><span className="font-bold text-[#141b12]">綠茶</span><span className="text-[#2d5a27] font-bold text-xs bg-[#edf4ec] px-1.5 py-0.5 rounded">零發酵</span></div>
                      <div className="bg-[#fafcf9] border border-[#d6dfd3] rounded-xl p-3 flex items-center justify-between shadow-sm"><span className="font-bold text-[#141b12]">白茶</span><span className="text-sky-600 font-bold text-xs bg-sky-50 px-1.5 py-0.5 rounded">微發酵</span></div>
                      <div className="bg-[#fafcf9] border border-[#d6dfd3] rounded-xl p-3 flex items-center justify-between shadow-sm"><span className="font-bold text-[#141b12]">黃茶</span><span className="text-amber-600 font-bold text-xs bg-amber-50 px-1.5 py-0.5 rounded">輕發酵</span></div>
                      <div className="bg-[#fafcf9] border border-[#d6dfd3] rounded-xl p-3 flex items-center justify-between shadow-sm"><span className="font-bold text-[#141b12]">青茶</span><span className="text-teal-600 font-bold text-xs bg-teal-50 px-1.5 py-0.5 rounded">半發酵</span></div>
                      <div className="bg-[#fafcf9] border border-[#d6dfd3] rounded-xl p-3 flex items-center justify-between shadow-sm"><span className="font-bold text-[#141b12]">紅茶</span><span className="text-red-600 font-bold text-xs bg-red-50 px-1.5 py-0.5 rounded">全發酵</span></div>
                      <div className="bg-[#fafcf9] border border-[#d6dfd3] rounded-xl p-3 flex items-center justify-between shadow-sm"><span className="font-bold text-[#141b12]">黑茶</span><span className="text-[#414c3e] font-bold text-xs bg-stone-100 px-1.5 py-0.5 rounded">後發酵</span></div>
                    </div>
                  </div>

                  <div className="bg-[#f4f8f3]/60 rounded-[2rem] p-6 md:p-8 border border-[#d6dfd3]/50">
                    <p className="text-[16px] md:text-[18px] text-[#242f21] leading-relaxed mb-4">
                      在這套體系中，綠茶以其<span className="font-extrabold text-[#2d5a27]">「零發酵」</span>的特性佔據了獨特的地位。它不僅是一種茶類，更是中國飲茶史的核心載體。
                    </p>
                    <p className="text-[16px] md:text-[18px] text-[#242f21] leading-relaxed">
                      由於茶葉發酵工藝直到近四百年的明代才逐漸成熟，因此，明朝以前中國人所飲用的茶，在廣義上都可以歸類為綠茶。可以說，<strong className="text-[#141b12]">一部中國飲茶史，在很大程度上便是一部綠茶的演變史。</strong>
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#d6dfd3]/50 text-[#536150] italic flex items-center gap-2 text-[13px] md:text-[15px]">
                      <Clock size={16} /> 接下來，讓我們一同回溯時光長河，探尋綠茶悠遠的歷史源頭。
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-[#d6dfd3]/30" />

              <section id="green-origin" className="space-y-6 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#edf4ec] border border-[#d6dfd3]/40 rounded-full text-xs font-bold tracking-widest text-[#2d5a27] uppercase">
                  ORIGIN
                </div>
                <h3 data-reading-toc="true" className="text-xl md:text-2xl font-black text-[#141b12]">綠茶的悠久起源：從神話到信史</h3>
                <p className="text-[16px] md:text-[18px] leading-relaxed text-[#242f21] tracking-wide">
                  追溯綠茶的源頭，是一趟結合了神話傳說、考古實證與文字記載的旅程。這三條線索交織，共同構建了一部關於茶葉起源的完整敘事。
                </p>
                
                <div className="flex flex-col gap-6 not-prose relative z-10">
                  <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#e2e2d9] flex flex-col md:flex-row gap-6 md:items-center transform transition-transform duration-300 md:hover:translate-x-2">
                    <div className="w-14 h-14 bg-[#f5f8f4] rounded-full flex items-center justify-center shrink-0 text-[#70806e] border border-[#e2e2d9] shadow-inner">
                      <History size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-[#141b12] text-lg mb-2">神話中的「茶祖」</h4>
                      <p className="text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed max-w-4xl">
                        中國茶文化的濫觴，始於一個廣為流傳的神話——神農嘗百草。傳說中，生活在新石器時代晚期的炎帝神農氏，為辨識草藥親身試毒，曾「一日遇七十二毒」，而當他品嚐到茶樹的葉子時，體內毒素便得以化解。儘管此說法無法考證，但它將神農氏尊為「茶祖」，並奠定了茶在早期認知中「解毒」的藥用基礎。
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#e2e2d9] flex flex-col md:flex-row gap-6 md:items-center md:ml-6 lg:ml-12 transform transition-transform duration-300 md:hover:translate-x-2">
                    <div className="w-14 h-14 bg-[#edf4ec] rounded-full flex items-center justify-center shrink-0 text-[#2d5a27] border border-[#d6dfd3]/40 shadow-inner">
                      <Search size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-[#141b12] text-lg mb-2">考古學的實證</h4>
                      <p className="text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed max-w-4xl">
                        相較於神話，考古發現則提供了更為確鑿的證據。在浙江餘姚的河姆渡文化遺址中，考古學家發現了距今超過六千年的人工種植茶樹樹根。經過檢測分析，證實了這些樹根樣本確為茶樹，這將中國有記載的茶樹種植史從實證角度推至六千年以上。
                      </p>
                      <p className="text-[16px] md:text-[18px] text-[#2d5a27] font-medium leading-relaxed max-w-4xl mt-3 p-4 bg-[#edf4ec]/50 rounded-xl border-l-4 border-[#2d5a27]/40">
                        從生物學角度看，嚴格意義上的「茶」專指由山茶科、山茶屬植物的嫩葉製成的飲品。因此，儘管名稱中帶有「茶」字，如苦丁茶（冬青科）、菊花茶、大麥茶等常見飲品，均不屬於真正的茶類。
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#e2e2d9] flex flex-col md:flex-row gap-6 md:items-start md:ml-12 lg:ml-24 transform transition-transform duration-300 md:hover:translate-x-2">
                    <div className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center shrink-0 text-white shadow-inner">
                      <BookOpen size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-[#141b12] text-lg mb-2 mt-1">文字記載的開端</h4>
                      <p className="text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed max-w-4xl mb-4">
                        目前有文字可考的最早飲茶記錄，出現在先秦時期的巴蜀地區（今四川、重慶一帶）。當時的先民對茶葉的利用方式極為原始，主要有三種：
                      </p>
                      <ul className="space-y-3 mb-4 max-w-4xl text-[16px] md:text-[18px]">
                        <li className="bg-[#f5f8f4]/80 p-4 rounded-xl border border-[#d6dfd3]/30 text-[#414c3e] leading-relaxed shadow-sm">
                          <span className="font-extrabold text-[#141b12] inline-block w-24">1. 作草藥：</span>
                          將茶葉曬乾保存，作為藥材使用。
                        </li>
                        <li className="bg-[#f5f8f4]/80 p-4 rounded-xl border border-[#d6dfd3]/30 text-[#414c3e] leading-relaxed shadow-sm">
                          <span className="font-extrabold text-[#141b12] inline-block w-24 align-top">2. 咀嚼鮮葉：</span>
                          <span className="inline-block sm:w-[calc(100%-7rem)]">直接咀嚼新鮮的茶樹葉子，感受其汁液從苦澀到清涼甘潤的變化，達到潔齒保健效果。</span>
                        </li>
                        <li className="bg-[#f5f8f4]/80 p-4 rounded-xl border border-[#d6dfd3]/30 text-[#414c3e] leading-relaxed shadow-sm">
                          <span className="font-extrabold text-[#141b12] inline-block w-24 align-top">3. 煮成羹湯：</span>
                          <span className="inline-block sm:w-[calc(100%-7rem)]">將茶葉作為蔬菜，煮成羹湯食用，以增加營養並消解食物中的毒素。</span>
                        </li>
                      </ul>
                      <p className="text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed max-w-4xl border-l-4 border-stone-300 pl-4 py-1 italic font-medium">
                        隨著戰國時期秦國統一巴蜀，這一地區獨特的茶文化開始有了向外傳播的契機，為後續朝代飲茶風尚的演變奠定了堅實的基礎。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-[#d6dfd3]/30" />

              <section id="green-evolution" className="space-y-8 scroll-mt-28">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#edf4ec] border border-[#d6dfd3]/40 rounded-full text-xs font-bold tracking-widest text-[#2d5a27] uppercase mb-4">
                    EVOLUTION
                  </div>
                  <h3 data-reading-toc="true" className="text-xl md:text-2xl font-black text-[#141b12]">飲茶風尚的演變：一部跨越朝代的文化史</h3>
                </div>
                <p className="text-[16px] md:text-[18px] leading-relaxed text-[#242f21] md:w-4/5 tracking-wide">
                  從秦漢的宮廷飲品到宋代的文人雅趣，再到明代融入日常的沖泡方式，中國的飲茶風尚經歷了數次重大變革。這不僅是製茶工藝的進步史，更是一部映照社會文化變遷的生動歷史。
                </p>

                <div className="flex flex-col gap-12 relative w-full pt-4 pb-4">
                  {/* Era 1 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-start">
                    <div className="w-full lg:w-[94%] rounded-[2rem] border border-[#e2e2d9] bg-white shadow-sm p-6 md:p-8 lg:p-10 relative overflow-hidden group hover:shadow-md hover:border-[#d6dfd3]/40 transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5f8f4] rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                        <div className="px-3 py-1 bg-stone-100 text-[#536150] rounded-full text-xs font-extrabold tracking-widest uppercase">
                          ERA · 秦漢至魏晉南北朝
                        </div>
                        <h4 className="font-black text-[#141b12] text-lg md:text-xl">從宮廷飲品到文化符號</h4>
                      </div>
                      <div className="space-y-6">
                        <p className="text-[16px] md:text-[16px] text-[#414c3e] leading-relaxed font-medium tracking-wide">
                          秦漢大一統時代，源自巴蜀的茶葉得到初步傳播，逐漸成為官方貴族家庭招待賓客、消遣時光的飲品。此時的加工方法相對簡單：將新鮮茶葉搗成餅狀，再曬乾儲存。飲用時，需先將茶餅置於火上烘烤，隨後碾成碎末，加入開水，並混入蔥、薑、橘皮等調味品以消解茶的澀味。
                        </p>
                        <div className="bg-[#f5f8f4]/60 p-6 rounded-2xl border border-[#d6dfd3]/30 shadow-inner">
                          <p className="text-[15px] md:text-[16px] text-[#414c3e] leading-relaxed mb-4">
                            進入魏晉南北朝，一個思想文化空前活躍的時期，茶開始超越飲品的範疇，被賦予了文化屬性。特別是佛教的傳播，極極地推動了茶的流行。僧人們發現飲茶有兩大核心益處：
                          </p>
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 bg-white p-5 rounded-xl shadow-sm border border-[#d6dfd3]/30 transition-transform hover:-translate-y-0.5">
                              <div className="font-extrabold text-[#141b12] flex items-center gap-2 mb-1.5 text-[16px] md:text-base"><Sun className="text-amber-500" size={18} /> 提神醒腦</div>
                              <p className="text-[15px] text-[#536150] leading-relaxed">幫助僧侶在長時間打坐禪定時保持頭腦清醒與靜心思考。</p>
                            </div>
                            <div className="flex-1 bg-white p-5 rounded-xl shadow-sm border border-[#d6dfd3]/30 transition-transform hover:-translate-y-0.5">
                              <div className="font-extrabold text-[#141b12] flex items-center gap-2 mb-1.5 text-[16px] md:text-base"><Leaf className="text-emerald-500" size={18} /> 幫助消化</div>
                              <p className="text-[15px] text-[#536150] leading-relaxed">久坐禪定容易導致積食，而飲茶則有助於溫和消導、腸胃舒適。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Era 2 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-end">
                    <div className="w-full lg:w-[94%] rounded-[2rem] border border-[#d6dfd3]/40 bg-[#edf4ec]/10 shadow-sm p-6 md:p-8 lg:p-10 relative overflow-hidden group hover:shadow-md hover:border-[#d6dfd3]/60 transition-all duration-300">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-[#edf4ec] rounded-br-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mb-6">
                        <div className="px-3 py-1 bg-emerald-100/50 text-[#2d5a27] rounded-full text-xs font-extrabold tracking-widest uppercase sm:order-2 border border-[#d6dfd3]/60/40">
                          ERA · 唐代
                        </div>
                        <h4 className="font-black text-[#141b12] text-lg md:text-xl sm:order-1">茶聖陸羽與「煎茶」的確立</h4>
                      </div>
                      <div className="space-y-6">
                        <p className="text-[16px] md:text-[16px] text-[#414c3e] leading-relaxed sm:text-right font-medium tracking-wide">
                          到了唐代，飲茶之風已遍及全國，尤以都城最為盛行。這一時期誕生了被後世尊為「茶聖」的陸羽，他撰寫的《茶經》是世界上現存最早、最全面的茶學專著。
                        </p>
                        <p className="text-[16px] md:text-[16px] text-[#414c3e] leading-relaxed sm:text-right">
                          當時民間常在茶湯中加入蔥、薑等調味品，陸羽對此極不認同，認為這破壞了茶葉純粹的本味，無異於「喝溝渠裡的廢水」。他在《茶經》中詳細記載並推崇旨在品味茶之本味的 <span className="font-extrabold text-[#141b12]">「煎茶法」</span>：
                        </p>
                        <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-[#d6dfd3]/40 shadow-sm mt-6">
                          <ol className="list-decimal pl-5 space-y-3 text-[15px] md:text-[16px] text-[#414c3e] leading-relaxed marker:font-black marker:text-emerald-700">
                            <li><strong className="text-[#141b12]">炙茶：</strong>將茶餅放在無煙火上均勻烘烤，釋放香氣。</li>
                            <li><strong className="text-[#141b12]">碾末：</strong>將烤好的茶餅待涼後，碾成如細米粒大小的茶末。</li>
                            <li><strong className="text-[#141b12]">煮水加鹽：</strong>燒水至初沸（魚眼氣泡），加入少許精鹽以調和水味。</li>
                            <li><strong className="text-[#141b12]">投茶：</strong>水至二沸（沿邊如湧泉），先舀出一瓢沸水備用，再以竹筴環水心攪動，投入茶末。</li>
                            <li><strong className="text-[#141b12]">止沸：</strong>待茶湯再次完全沸騰（奔濤濺沫），將先前備用之瓢水倒回，以止沸培育細膩茶沫（「華」）。</li>
                            <li><strong className="text-[#141b12]">分湯：</strong>將湯花分入茶碗中，趁熱飲用，前三碗風味最佳。</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Era 3 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-start">
                    <div className="w-full lg:w-[94%] rounded-[2rem] border border-[#e2e2d9] bg-white shadow-sm p-6 md:p-8 lg:p-10 relative overflow-hidden group hover:shadow-md hover:border-amber-100 transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/40 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                        <div className="px-3 py-1 bg-amber-100/50 text-amber-800 rounded-full text-xs font-extrabold tracking-widest uppercase">
                          ERA · 宋代
                        </div>
                        <h4 className="font-black text-[#141b12] text-lg md:text-xl">登峰造極的「點茶」與「鬥茶」文化</h4>
                      </div>
                      <div className="space-y-6">
                        <p className="text-[16px] md:text-[16px] text-[#414c3e] leading-relaxed font-medium tracking-wide">
                          宋代將飲茶的精緻與儀式感推向了頂峰，發展出極為考究的 <span className="font-extrabold text-[#141b12] text-[16px] border-b-2 border-amber-300">「點茶法」</span>。這一技藝堪稱古代的飲品藝術：
                        </p>
                        
                        <div className="flex flex-col gap-3">
                          <div className="bg-[#faf6eb]/50 p-4 rounded-xl border border-[#ebdcb9]/40 flex gap-4 md:items-center shadow-sm">
                            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black shrink-0 text-xs shadow-inner">1</div>
                            <div className="flex-1 md:flex md:items-center md:gap-4">
                              <div className="font-black text-[#141b12] mb-0.5 md:mb-0 md:w-16 text-[16px]">研磨</div>
                              <p className="text-[16px] md:text-[18px] text-[#414c3e]">將精心製作的精緻貢茶餅研磨成極其細膩的粉末。</p>
                            </div>
                          </div>
                          
                          <div className="bg-[#faf6eb]/50 p-4 rounded-xl border border-[#ebdcb9]/40 flex gap-4 md:items-center shadow-sm">
                            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black shrink-0 text-xs shadow-inner">2</div>
                            <div className="flex-1 md:flex md:items-center md:gap-4">
                              <div className="font-black text-[#141b12] mb-0.5 md:mb-0 md:w-16 text-[16px]">過篩</div>
                              <p className="text-[16px] md:text-[18px] text-[#414c3e]">用「羅篩」反覆篩選茶粉，確保其顆粒細膩均勻，如麵粉般輕盈。</p>
                            </div>
                          </div>
                          
                          <div className="bg-[#faf6eb]/50 p-4 rounded-xl border border-[#ebdcb9]/40 flex gap-4 md:items-start shadow-sm">
                            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black shrink-0 text-xs shadow-inner md:mt-0.5">3</div>
                            <div className="flex-1 md:flex md:items-start md:gap-4">
                              <div className="font-black text-[#141b12] mb-0.5 md:mb-0 md:w-16 text-[16px]">擊拂</div>
                              <p className="text-[16px] md:text-[18px] text-[#414c3e]">在茶碗中置茶粉、注少許開水調膏，再用竹製「茶筅」快速擊打攪拌。隨注水隨擊拂，直至茶湯達到 <span className="font-extrabold text-[#2d5a27] bg-[#edf4ec] px-1.5 py-0.5 rounded text-xs font-bold">「乳化蓬鬆」</span> 的狀態，表面形成厚實細密且持久的白色泡沫。</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#faf6eb]/30 border-l-4 border-amber-300 p-6 rounded-r-2xl mt-6 shadow-inner">
                          <p className="text-[15px] md:text-[16px] text-[#414c3e] leading-relaxed tracking-wide">
                            完整的點茶過程極為繁複精細，宋徽宗在《大觀茶論》中甚至記載了「七湯點茶法」。由點茶衍生出的 <span className="font-extrabold text-[#141b12]">「鬥茶」</span> 更是文人名士的雅緻比拼：不僅比拼茶湯泡沫的色澤（以純白為上），更比拼泡沫咬盞的持久度。高超者甚至能進行「水丹青」創作，在潔白茶沫上寫字作畫，這與現代的咖啡拉花藝術有著異曲同工之妙，將生活器皿升華為短暫的哲學藝術。日本的「抹茶道」其本質與源頭，正是宋代的點茶制度。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Era 4 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-end">
                    <div className="w-full lg:w-[94%] rounded-[2rem] border border-stone-800 bg-stone-950 text-stone-100 shadow-xl p-6 md:p-8 lg:p-10 relative overflow-hidden group hover:bg-[#151514] transition-all duration-300">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-stone-900 rounded-br-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mb-6">
                        <div className="px-3 py-1 bg-stone-800 text-stone-300 rounded-full text-xs font-extrabold tracking-widest uppercase sm:order-2 border border-stone-800 shadow-inner">
                          ERA · 明代
                        </div>
                        <h4 className="font-black text-white text-lg md:text-xl sm:order-1">返璞歸真的「泡茶」時代</h4>
                      </div>
                      <div className="space-y-6">
                        <p className="text-[16px] md:text-[16px] text-stone-300 leading-relaxed sm:text-right font-medium tracking-wide opacity-90">
                          飲茶方式在明代迎來了歷史性的轉折。明太祖朱元璋下令「廢團改散」，廢除製作繁複、耗費巨大的龍團鳳餅貢茶，改為進貢散茶葉。
                        </p>
                        <div className="bg-stone-900/80 backdrop-blur p-6 rounded-2xl border border-stone-800 mt-6 shadow-inner">
                          <p className="text-[15px] md:text-[16px] text-stone-300 leading-relaxed sm:text-right tracking-wide opacity-80">
                            這道詔令徹底將飲茶文化從貴族繁文縟節中解放出來，走入平常百姓家。散茶的流行推動了以壺或杯直接用開水沖泡的 <span className="font-black text-emerald-400 text-base md:text-lg inline-block px-1">「泡茶法」</span>，並確立了此後數百年至今的飲茶主流形態。同時，不被團茶形制所限，茶農們開始探索多元工藝，進而發展出綠茶之外的紅茶、青茶（烏龍茶）等其他五大茶類。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-6">
                  <div className="bg-stone-800 text-white rounded-full px-6 py-3 text-[15px] md:text-base font-medium shadow-md flex items-center gap-3">
                    <Coffee size={18} className="text-emerald-400" />
                    從繁複的歷史演變中走來，綠茶以最純粹的形式融入現代生活。
                  </div>
                </div>
              </section>

              <hr className="border-[#d6dfd3]/30" />

              <section id="green-guide" className="space-y-10 relative z-10 pt-4 scroll-mt-28">
                
                {/* Xianxia Style Header */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch pt-6">
                  {/* Vertical Golden Banner */}
                  <div className="hidden md:flex relative px-4 py-8 shrink-0 bg-gradient-to-b from-[#d4af37] via-[#f5e4a8] to-[#b8902d] shadow-md rounded-lg items-center justify-center overflow-hidden group">
                    <div className="absolute inset-x-1.5 top-1.5 bottom-1.5 border border-stone-850/20 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-50 pointer-events-none"></div>
                    <h3 data-reading-toc="true" className="relative z-10 text-[#141b12] font-serif font-black text-2xl lg:text-[2rem] tracking-[0.25em] drop-shadow-sm" style={{ writingMode: 'vertical-rl' }}>
                      品飲實用指南
                    </h3>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="md:hidden">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#b8902d] text-[#141b12] font-serif font-black text-xl tracking-widest shadow-sm rounded">
                        品飲實用指南
                      </div>
                    </div>
                    <p className="text-[16px] md:text-[16px] text-[#414c3e] leading-relaxed font-medium bg-[#f5f8f4]/50 p-6 rounded-2xl border-l-4 border-[#d4af37] shadow-inner tracking-wide">
                      想要泡好一杯綠茶，不僅是技巧的展現，更是心境的修煉。在此，我們為您揭開綠茶沖泡與品鑑的奧秘，助您掌握茶中真味。
                    </p>
                    
                    <div className="relative h-60 md:h-72 w-full rounded-[2rem] overflow-hidden shadow-md border border-[#e2e2d9]/60 group">
                      <img src="/images/mystical_tea_mountain.png" alt="高山茶園" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/10 to-transparent flex items-end p-6 md:p-8">
                        <div className="text-white font-serif tracking-wider text-base md:text-lg drop-shadow-md border-l-2 border-[#d4af37] pl-4">
                          「高山雲霧出好茶，仙風道骨蘊真華」
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 not-prose">
                  {/* Varieties */}
                  <div className="w-full rounded-[2rem] border border-[#e2e2d9] bg-gradient-to-b from-white to-stone-50/50 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
                      <div className="max-w-xl">
                        <h4 className="font-black text-[#141b12] text-lg md:text-xl flex items-center gap-3 mb-2">
                          <div className="p-2 bg-[#edf4ec] rounded-xl text-[#2d5a27]"><Leaf size={20} /></div>
                          知名綠茶鑑賞
                        </h4>
                        <p className="text-[16px] md:text-[18px] text-[#536150] leading-relaxed">中國綠茶品類繁多，各具特色。以下是一些廣受讚譽的代表性名茶：</p>
                      </div>
                      <div className="shrink-0 p-4 bg-[#edf4ec]/50 rounded-2xl border border-[#d6dfd3]/40 relative overflow-hidden group md:max-w-xs self-start shadow-inner">
                        <div className="absolute -right-4 -bottom-4 opacity-5 transform group-hover:scale-110 transition-transform"><Leaf size={60}/></div>
                        <p className="text-[15px] text-emerald-900 leading-relaxed relative z-10">
                          <strong className="block mb-0.5 text-[#2d5a27] font-bold">特別說明：</strong>
                          您可能聽過<span className="font-extrabold text-[#141b12] border-b border-stone-800 mx-1">安吉白茶</span>，從製茶工藝分類上，它其實屬於綠茶。
                        </p>
                      </div>
                    </div>
                    
                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-[16px] md:text-[18px]">
                      {['西湖龍井', '黃山毛峰', '六安瓜片', '太平猴魁', '洞庭碧螺春', '廬山雲霧', '峨眉竹葉青', '信陽毛尖'].map((tea, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-bold text-[#242f21] bg-white p-3.5 rounded-xl border border-[#d6dfd3]/30 shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#d6dfd3]/60/50 transition-all duration-300 cursor-default">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                          {tea}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Brewing Art */}
                  <div className="w-full rounded-[2rem] border border-[#e2e2d9] bg-white shadow-sm p-6 md:p-8 space-y-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group/art">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#f5f8f4] rounded-bl-full -z-10 transition-transform duration-700 group-hover/art:scale-110"></div>
                    
                    <div className="relative z-10">
                      <h4 className="font-black text-[#141b12] text-lg md:text-xl flex items-center gap-3 mb-2">
                        <div className="p-2 bg-sky-50 rounded-xl text-sky-600"><Droplets size={20} /></div>
                        綠茶的沖泡藝術
                      </h4>
                      <p className="text-[16px] md:text-[18px] text-[#536150] leading-relaxed max-w-2xl">想要泡好一杯綠茶，需要掌握器皿選擇與沖泡技巧的要點。</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">
                      <div className="space-y-6 flex flex-col justify-between">
                         <div className="bg-[#f5f8f4] p-6 rounded-2xl border border-[#d6dfd3]/30 shadow-inner">
                           <h5 className="font-bold text-[#141b12] text-base mb-2 flex items-center gap-2">
                             <Coffee size={20} className="text-[#70806e]"/> 器皿選擇
                           </h5>
                           <p className="text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed">
                             建議使用<strong className="text-[#141b12] font-black">直筒玻璃杯或白瓷蓋碗</strong>。<br/>因為綠茶未經發酵，保留了鮮葉的翠綠與完整形態，使用透明器皿，可方便在沖泡過程中欣賞茶葉舒展的美態與明亮湯色。
                           </p>
                         </div>
                         
                         <div className="bg-red-50/20 p-6 rounded-2xl border border-red-100 flex-1">
                           <h5 className="font-bold text-red-950 text-base mb-4 flex items-center gap-2">
                             <AlertCircle size={20} className="text-red-500"/> 沖泡兩大絕對關鍵
                           </h5>
                           <ul className="space-y-4">
                             <li className="flex items-start gap-3">
                               <div className="bg-white px-2.5 py-1 rounded text-red-700 font-extrabold border border-red-100 shadow-sm whitespace-nowrap text-sm">水溫 80°C</div> 
                               <span className="text-[15px] text-red-900/90 leading-relaxed mt-0.5">絕對不可用沸水，以免燙壞鮮嫩芽頭，破壞其鮮爽與維生素。</span>
                             </li>
                             <li className="flex items-start gap-3">
                               <div className="bg-white px-2.5 py-1 rounded text-red-700 font-extrabold border border-red-100 shadow-sm whitespace-nowrap text-sm">不宜加蓋</div> 
                               <span className="text-[15px] text-red-900/90 leading-relaxed mt-0.5">沖泡時切勿蓋上杯蓋，否則會將茶葉「悶黃」，失去清新爽口。</span>
                             </li>
                           </ul>
                         </div>
                      </div>

                      <div>
                         <div className="h-full bg-stone-950 text-stone-200 p-6 md:p-8 rounded-[2rem] shadow-md relative overflow-hidden group/steps" style={{ borderTop: '4px solid #d4af37' }}>
                           <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover/steps:scale-110 transition-transform duration-700">
                             <Droplets size={120} />
                           </div>
                           <h5 className="font-black text-white text-lg md:text-xl mb-2 relative z-10 tracking-wide">「三明治泡法」步驟詳解</h5>
                           <p className="text-[#d4af37] text-[13px] md:text-[15px] font-bold mb-6 relative z-10">這是一種最能充分展現細嫩綠茶風味的實用泡法：</p>
                           
                           <div className="space-y-6 relative z-10 text-[16px] md:text-[18px]">
                             <div className="flex gap-4 items-start">
                               <div className="w-9 h-9 rounded-full bg-stone-900 text-[#70806e] flex items-center justify-center font-black shrink-0 border border-stone-850 shadow-inner">1</div>
                               <div className="pt-0.5">
                                 <div className="font-extrabold text-white text-base mb-1">溫杯注水</div>
                                 <div className="text-[#70806e] leading-relaxed font-light">先向杯中注入約 80°C 的熱水，水量約為杯子容量的三分之一。</div>
                               </div>
                             </div>
                             <div className="flex gap-4 items-start">
                               <div className="w-9 h-9 rounded-full bg-stone-900 text-[#70806e] flex items-center justify-center font-black shrink-0 border border-stone-850 shadow-inner">2</div>
                               <div className="pt-0.5">
                                 <div className="font-extrabold text-white text-base mb-1">投擲茶葉</div>
                                 <div className="text-[#70806e] leading-relaxed font-light">將茶葉投入溫水面上。茶水比例建議為 1:50。</div>
                               </div>
                             </div>
                             <div className="flex gap-4 items-start">
                               <div className="w-9 h-9 rounded-full bg-stone-900 text-[#70806e] flex items-center justify-center font-black shrink-0 border border-stone-850 shadow-inner">3</div>
                               <div className="pt-0.5">
                                 <div className="font-extrabold text-white text-base mb-1">輕搖喚醒</div>
                                 <div className="text-[#70806e] leading-relaxed font-light">沿杯底輕輕轉動杯身，讓茶葉充分浸潤並釋放初香。</div>
                               </div>
                             </div>
                             <div className="flex gap-4 items-start">
                               <div className="w-9 h-9 rounded-full bg-stone-900 text-[#d4af37] flex items-center justify-center font-black shrink-0 border border-stone-800 shadow-inner">4</div>
                               <div className="pt-0.5">
                                 <div className="font-extrabold text-[#d4af37] text-base mb-1">沿壁注水</div>
                                 <div className="text-[#70806e] leading-relaxed font-light">待茶葉稍舒展後，再沿著杯壁緩緩注水至七八分滿。</div>
                               </div>
                             </div>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Seasonal Buying */}
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Seasonal Buying */}
                    <div className="lg:w-3/5 rounded-[2rem] border border-[#e2e2d9] bg-white shadow-sm p-6 md:p-8 space-y-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group/season">
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-50/50 rounded-full transition-transform duration-700 group-hover/season:scale-125"></div>
                      
                      <div className="relative z-10">
                        <h4 className="font-black text-[#141b12] text-lg md:text-xl flex items-center gap-3 mb-2">
                          <div className="p-2 bg-amber-50 rounded-xl text-[#b8902d]"><Calendar size={20} /></div>
                          選購綠茶的訣竅
                        </h4>
                        <p className="text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed font-medium">在選購高品質綠茶時，您常會遇到兩個術語：「明前茶」和「雨前茶」。</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 relative z-10 text-[16px] md:text-[18px]">
                        <div className="bg-gradient-to-br from-emerald-50/40 to-stone-50 p-5 rounded-2xl border border-[#d6dfd3]/40/50 shadow-sm flex flex-col h-full transform transition-transform hover:-translate-y-0.5 duration-300">
                          <div className="flex items-center gap-2 mb-3">
                             <div className="bg-white px-2.5 py-0.5 rounded text-[#2d5a27] font-extrabold text-sm shadow-sm border border-[#d6dfd3]/40">明前茶</div>
                             <div className="text-xs font-medium text-[#2d5a27]">清明前採製</div>
                          </div>
                          <p className="text-[#414c3e] leading-relaxed flex-1">
                            經過冬季蓄養，萌發的芽頭最為細嫩肥壯，胺基酸高，<strong className="text-[#2d5a27]">口感鮮爽清甜</strong>，但產量少、價格高。
                          </p>
                        </div>
                        
                        <div className="bg-[#f5f8f4] p-5 rounded-2xl border border-[#d6dfd3]/50 shadow-sm flex flex-col h-full transform transition-transform hover:-translate-y-0.5 duration-300">
                          <div className="flex items-center gap-2 mb-3">
                             <div className="bg-white px-2.5 py-0.5 rounded text-stone-850 font-extrabold text-sm shadow-sm border border-[#d6dfd3]/50">雨前茶</div>
                             <div className="text-xs font-medium text-[#536150]">清明後、穀雨前</div>
                          </div>
                          <p className="text-[#414c3e] leading-relaxed flex-1">
                            氣溫回升快，葉片更為舒展飽滿，內含物質豐富。沖泡時<strong className="text-[#141b12]">更耐泡、茶味更濃</strong>，性價比極佳。
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-stone-900 text-stone-200 p-5 rounded-2xl border border-stone-800 flex gap-4 items-start relative z-10 shadow-inner">
                        <Info size={20} className="text-[#d4af37] shrink-0 mt-0.5" />
                        <p className="text-[16px] md:text-[18px] leading-relaxed font-light">
                          對於初試者而言無需糾結。明前茶取其「鮮爽清雅」，雨前茶取其「飽滿耐泡」，兩者都非常值得體驗，親自感受春天茶園的滋味演變。
                        </p>
                      </div>
                    </div>

                    {/* Right: Health */}
                    <div className="lg:w-2/5 rounded-[2rem] border border-[#e2e2d9] bg-white shadow-sm p-6 md:p-8 flex flex-col hover:shadow-md transition-shadow duration-300">
                      <div>
                        <h4 className="font-black text-[#141b12] text-lg md:text-xl flex items-center gap-3 mb-4">
                          <div className="p-2 bg-rose-50 rounded-xl text-rose-500"><Heart size={20} /></div>
                          健康與飲用宜忌
                        </h4>
                      </div>
                      
                      <div className="space-y-4 flex-1 flex flex-col justify-between text-[16px] md:text-[18px]">
                        <div className="bg-[#edf4ec]/30 p-5 rounded-2xl border border-[#d6dfd3]/40 flex-1">
                           <h5 className="font-extrabold text-emerald-900 mb-1.5 flex items-center gap-1.5">
                             <Sparkles size={14} className="text-emerald-500"/> 健康益處
                           </h5>
                           <p className="text-[#2d5a27]/90 leading-relaxed text-[13px] md:text-[15px]">
                             綠茶在六大茶類中擁有<strong className="text-emerald-900 bg-emerald-100/50 px-1 rounded mx-0.5">最高的茶多酚含量</strong>。雖然它是苦澀的來源，但也賦予了綠茶優異的抗氧化、幫助新陳代謝、延緩老化與提神醒腦的天然保健價值。
                           </p>
                        </div>
                        
                        <div className="bg-[#f5f8f4] p-5 rounded-2xl border border-[#d6dfd3]/50">
                           <h5 className="font-extrabold text-[#141b12] mb-2.5 flex items-center gap-1.5">
                             <AlertTriangle size={14} className="text-[#aa8022]"/> 飲用提醒
                           </h5>
                           <ul className="space-y-3 text-[13px] md:text-[15px]">
                             <li className="flex gap-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 shrink-0" />
                               <div>
                                 <strong className="text-[#141b12] text-[13px] md:text-[15px]">咖啡因含量：</strong>綠茶提神顯著，對咖啡因敏感者或易失眠者應避免在午後或睡前飲用。
                                </div>
                             </li>
                             <li className="flex gap-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 shrink-0" />
                               <div>
                                 <strong className="text-[#141b12] text-[13px] md:text-[15px]">茶性屬寒：</strong>零發酵綠茶茶性偏寒涼。脾胃虛寒、手腳冰冷者不宜空腹大量飲用。
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

          {/* Special Feature: Biluochun */}
          <div id="green-special" className="scroll-mt-28 bg-gradient-to-br from-stone-50 to-white rounded-[2.5rem] p-8 md:p-12 border border-[#e2e2d9] mt-16 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[#2d5a27] transform translate-x-12 -translate-y-12">
              <Sprout size={240} />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 relative z-10">
              {/* Left: Content */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#edf4ec] border border-[#d6dfd3]/40 rounded-full text-xs font-bold tracking-widest text-[#2d5a27] uppercase mb-4 shadow-sm">
                    <Sparkles size={14} /> SPECIAL FEATURE
                  </div>
                  <h2 data-reading-toc="true" className="text-3xl md:text-4xl font-black text-[#141b12] mb-4">碧螺春：品味春意</h2>
                  <p className="text-[16px] md:text-[18px] text-[#414c3e] leading-relaxed font-medium">
                    本專區聚焦江蘇蘇州洞庭山原產的洞庭碧螺春。清代文人以「碧綠浮動，清香襲人」形容其空靈神韻。
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap text-xs font-bold">
                    {['洞庭山', '明前精選', '滿披白毫', '獨門上投法', '嚇煞人香'].map((tag) => (
                      <span key={tag} className="rounded-full border shadow-sm border-[#d6dfd3]/60 bg-white px-3.5 py-1.5 text-emerald-900 hover:bg-[#edf4ec]/50 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 bg-white p-6 rounded-3xl border border-[#d6dfd3]/30 shadow-sm text-[16px] md:text-[18px]">
                  <div className="space-y-2">
                    <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                      <Wind size={18} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#141b12] mb-1">「嚇煞人香」典故</h4>
                      <p className="text-[#536150] leading-relaxed font-light">
                        傳說康熙皇帝品嚐後，因其「香氣濃烈，口感極佳」，將其原名俗稱「嚇煞人香」雅賜改名為「碧螺春」。
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                      <Mountain size={18} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#141b12] mb-1">洞庭山茶果間栽</h4>
                      <p className="text-[#536150] leading-relaxed font-light">
                        洞庭山茶樹與枇杷、楊梅、橘子等果樹交錯種植。茶樹吸取落花與果實香氣，造就了其獨特天然的花果蜜香。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-950 text-stone-200 rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden group">
                  <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                    <Droplets size={120} />
                  </div>
                  <h4 className="font-black text-white text-base md:text-lg mb-4 flex items-center gap-2">
                    <div className="p-1.5 bg-[#edf4ec]0/20 rounded-lg text-emerald-400">
                      <Droplets size={16} />
                    </div>
                    獨門沖泡：上投法 (Top Pour Method)
                  </h4>
                  <ol className="list-decimal pl-5 text-[16px] md:text-[18px] text-stone-300 space-y-2 font-light">
                    <li>準備透明玻璃杯，先注入約 80°C 的熱水至七分滿。</li>
                    <li>將精緻乾茶輕輕撒在溫水水面上。</li>
                    <li>靜心欣賞 <span className="font-extrabold text-emerald-450 uppercase tracking-wider bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900 text-xs">「白毫雪落」</span>：銀色茶芽在水中吸水，徐徐沉降，如滿天飛雪，空靈飄逸。</li>
                  </ol>
                  <div className="mt-4 p-4 bg-white/5 rounded-2xl text-[13px] md:text-[15px] text-stone-300 border border-white/5 flex items-start gap-2">
                    <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <p>碧螺春茶芽極細嫩，沖泡後，可將舒展過後的葉底放入口中嚼食，鮮甜回甘。</p>
                  </div>
                </div>
              </div>

              {/* Right: Feature Image */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative flex-1 rounded-[2rem] overflow-hidden shadow-md border-4 border-white min-h-[300px] lg:min-h-0 group">
                  <img
                    src="/images/green_tea_glass.png"
                    alt="Green Tea Brewing in Glass"
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white text-[13px] md:text-[15px] font-bold bg-black/40 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-lg w-full justify-center">
                      <Sprout size={16} className="text-emerald-350" />
                      欣賞碧螺春在杯中飛舞的「茶舞」
                    </div>
                  </div>
                </div>

                {/* Lifestyle Card */}
                <div className="bg-white rounded-[2rem] border border-[#e2e2d9] p-6 shadow-sm">
                  <div className="text-xs font-extrabold tracking-widest text-[#2d5a27] mb-3 flex items-center gap-1.5 uppercase">
                    <Calendar size={14} /> 四時養生
                  </div>
                  <div className="flex flex-col gap-3 text-[15px]">
                    <div className="flex items-center gap-3 bg-[#edf4ec]/50 p-3.5 rounded-2xl border border-[#d6dfd3]/40">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-emerald-500">
                        <Sprout size={18} />
                      </div>
                      <div>
                        <div className="font-extrabold text-[#141b12] text-sm">春飲綠茶</div>
                        <div className="text-xs text-[#536150] mt-0.5">疏肝理氣，清解春燥</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-[#d6dfd3]/30 opacity-70 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-[#f5f8f4] rounded-xl flex items-center justify-center border border-[#d6dfd3]/50 text-[#70806e]">
                        <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                      </div>
                      <div>
                        <div className="font-bold text-[#141b12] text-sm">冬飲熟茶</div>
                        <div className="text-xs text-[#536150] mt-0.5">溫暖身心，養胃安神</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supplement & Process Line */}
          <GreenTeaSupplement />

          <ProcessLine variant="green">重點總結：殺青固定鮮綠；沖泡以 80°C、不宜加蓋、短浸為原則。</ProcessLine>
        </div>
      </div>
    );
  }
  if (kind === 'red') {
    return (
      <div className="space-y-6">
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">起源座標</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">中國明末・福建武夷山</div>
            <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
              從「阻止氧化」到「擁抱發酵」：一場工藝探索，讓深色發酵茶走上世界舞台。
            </p>
          </div>

          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">國際路線</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">荷蘭 → 英國 → 全球</div>
            <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
              1610 年荷蘭東印度公司帶回茶樣後，飲茶迅速在歐洲貴族間成為時尚；英國崛起後，更將紅茶推進全球化。
            </p>
          </div>

          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">實用快抄</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">紅茶沖泡建議</div>
            <ul className="mt-2 text-[16px] text-[#242f21] leading-relaxed space-y-1">
              <li>茶水比：1:30</li>
              <li>水溫：95°C 以上沸水</li>
              <li>器具：瓷器（不吸味、好觀湯色），紫砂亦可</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">TURNING POINT</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">意外的誕生：從綠茶到發酵茶的技術轉捩點</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
            十六世紀武夷山茶農為提升競爭力，學習安徽松蘿山僧侶的「炒青」技術。炒青原本用來更有效抑制氧化、保持翠綠與高香；
            但在探索過程中，茶農們發現：如果不阻止氧化，茶葉雖變深色，茶湯卻更明艷，香氣也更馥郁——「發酵茶」因而誕生。
          </p>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">EARLY TRADE</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">初登世界舞台：歐洲的早期接觸與貿易開端</div>
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

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">BRITAIN</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">英倫風潮：從宮廷珍品到全民飲品</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
            1662 年凱瑟琳公主將飲茶與茶具帶入英國宮廷，迅速引領貴族模仿。17 世紀末，「Bohea」發酵茶在歐洲走紅，
            「Bohea」即「武夷」的音譯，並一度成為歐洲人對深色發酵茶（Black Tea）的代名詞。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-[#f5f8f4] px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">等級線索</div>
              <ul className="mt-2 text-[16px] text-[#242f21] leading-relaxed space-y-1">
                <li>Bohea（武夷）：深色發酵茶的普遍稱呼</li>
                <li>Congou（工夫）：品質更佳的升級版</li>
                <li>Souchong（小種）：更高等級，正山小種為代表</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-[#f5f8f4] px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">商業推力</div>
              <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
                深色發酵茶利潤高且更耐長途海運，荷蘭與英國公司因而大量增加訂單，價格下降後逐步走入平民生活。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">GEOPOLITICS</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">茶葉與戰爭：貿易引發的全球地緣政治變革</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">1773：波士頓傾茶事件</div>
              <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
                《茶稅法》引發殖民地反抗，342 箱中國茶被倒入海中；其中接近 80% 為武夷、工夫、小種等深色發酵茶，並成為美國獨立戰爭導火索之一。
              </p>
            </div>
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">逆差與殖民茶園</div>
              <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
                英國為扭轉白銀外流，透過鴉片貿易與殖民地茶園尋求自給。1838 年在印度阿薩姆創製紅茶後，徹底打破對中國茶依賴；
                隨後更導向 1840 年的第一次鴉片戰爭。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">INDUSTRY</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">工業革命與英式標準：現代紅茶體系的建立</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
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

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">WORLD</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">世界的紅茶：在地文化的落地生根</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="俄羅斯：茶葉之路與茶炊文化">
              1676 年起透過「茶葉之路」進口，19 世紀成為全民飲品；常加入糖、果醬、檸檬片，茶炊（Samovar）是家庭珍物。
            </Bullet>
            <Bullet title="土耳其與愛爾蘭：超級重度飲茶者">
              兩國年人均飲茶量居世界前列，紅茶深度融入日常社交，是不可或缺的生活底色。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">TODAY</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">紅茶在當代中國的新生：奶茶時代的回歸</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
            在傳統品飲市場中，紅茶消費量未必居前，但它以「奶茶基底」的方式重新回到大眾生活：全發酵的溫潤醇厚，使其特別適合與牛奶與糖融合，
            成為當代流行飲品的核心原料之一。
          </p>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">PRACTICAL</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">實用紅茶指南</div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#d6dfd3]/50">
            <table className="min-w-[680px] w-full text-left text-[16px]">
              <thead className="bg-[#f5f8f4] text-[#242f21]">
                <tr>
                  <th className="px-4 py-2 font-extrabold">類別</th>
                  <th className="px-4 py-2 font-extrabold">代表品種</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#242f21]">
                <tr className="border-t border-[#d6dfd3]/50">
                  <td className="px-4 py-3 font-extrabold text-[#141b12] whitespace-nowrap">中國紅茶</td>
                  <td className="px-4 py-3">武夷山正山小種、金駿眉、安徽祁門紅茶、雲南滇紅</td>
                </tr>
                <tr className="border-t border-[#d6dfd3]/50">
                  <td className="px-4 py-3 font-extrabold text-[#141b12] whitespace-nowrap">國外紅茶</td>
                  <td className="px-4 py-3">
                    印度阿薩姆、大吉嶺、斯里蘭卡錫蘭紅茶、英式拼配紅茶（格雷伯爵、英式早餐茶）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-[#f5f8f4] px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">沖泡建議</div>
              <ul className="mt-2 text-[16px] text-[#242f21] leading-relaxed list-disc pl-5 space-y-1">
                <li>茶水比：1:30</li>
                <li>水溫：95°C 以上沸水（充分激發香氣與滋味）</li>
                <li>器具：瓷器茶具（不吸味提醒湯色），紫砂亦可</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-[#f5f8f4] px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">健康特性</div>
              <ul className="mt-2 text-[16px] text-[#242f21] leading-relaxed list-disc pl-5 space-y-1">
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
          <div className="mt-2 text-xl font-extrabold text-[#141b12]">黑茶：從工藝、歷史到品鑑的完整指南</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
            什麼是黑茶？它在何時出現，又從何而來？為什麼普洱茶不全然是黑茶？如何判斷一款黑茶的好壞，又該如何享受它獨特的功效？
            這裡用一套「工藝 → 歷史 → 品類 → 選購」的路線，完整梳理黑茶的核心脈絡。
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">工藝定位</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">後發酵（微生物參與）</div>
            <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
              黑茶的發酵發生在「殺菁之後」，並以微生物轉化為主角，這與多數茶類的「酶促氧化」不同。
            </p>
          </div>

          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">身份標誌</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">渥堆（核心工藝）</div>
            <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
              黑茶的充分必要條件，是「渥堆」：在濕熱堆放中培養有益菌群，塑造醇厚風味與陳化潛力。
            </p>
          </div>

          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">選購三步</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">看・聞・觀湯</div>
            <ol className="mt-2 text-[16px] text-[#242f21] leading-relaxed list-decimal pl-5 space-y-1">
              <li>看乾茶：有無青／白色霉點</li>
              <li>聞氣味：是否有霉味與異味</li>
              <li>觀茶湯：好茶應「澄澈透亮」</li>
            </ol>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">PROCESS</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">1. 解構黑茶：獨一無二的「後發酵」工藝</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
            六大茶類是依加工工藝與發酵程度劃分。黑茶外觀深色，但它的「發酵」不能直接用 0–100% 去理解，因為它採用的是「後發酵」：
            在殺菁之後、以微生物參與為主的轉化過程。
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#d6dfd3]/50">
            <table className="min-w-[720px] w-full text-left text-[16px]">
              <thead className="bg-[#f5f8f4] text-[#242f21]">
                <tr>
                  <th className="px-4 py-2 font-extrabold">茶類</th>
                  <th className="px-4 py-2 font-extrabold">發酵程度描述</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#242f21]">
                <tr className="border-t border-[#d6dfd3]/50">
                  <td className="px-4 py-3 font-extrabold text-[#141b12] whitespace-nowrap">綠茶</td>
                  <td className="px-4 py-3">發酵程度趨近於 0，被稱為「不發酵茶」。</td>
                </tr>
                <tr className="border-t border-[#d6dfd3]/50">
                  <td className="px-4 py-3 font-extrabold text-[#141b12] whitespace-nowrap">白茶</td>
                  <td className="px-4 py-3">發酵程度極低，僅略高於綠茶，屬於「微發酵茶」。</td>
                </tr>
                <tr className="border-t border-[#d6dfd3]/50">
                  <td className="px-4 py-3 font-extrabold text-[#141b12] whitespace-nowrap">黃茶</td>
                  <td className="px-4 py-3">發酵程度較低，屬於「輕發酵茶」。</td>
                </tr>
                <tr className="border-t border-[#d6dfd3]/50">
                  <td className="px-4 py-3 font-extrabold text-[#141b12] whitespace-nowrap">青茶（烏龍茶）</td>
                  <td className="px-4 py-3">發酵程度範圍最廣，介於兩者之間，被稱為「半發酵茶」。</td>
                </tr>
                <tr className="border-t border-[#d6dfd3]/50">
                  <td className="px-4 py-3 font-extrabold text-[#141b12] whitespace-nowrap">紅茶</td>
                  <td className="px-4 py-3">發酵程度最接近 100%，被稱為「全發酵茶」。</td>
                </tr>
                <tr className="border-t border-[#d6dfd3]/50">
                  <td className="px-4 py-3 font-extrabold text-[#141b12] whitespace-nowrap">黑茶</td>
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

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">HISTORY</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">2. 追本溯源：黑茶的歷史演進與工藝定型</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
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

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">MAP</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">3. 品類巡禮：主流黑茶與「金花」</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-[#f5f8f4] px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">常見黑茶種類</div>
              <ul className="mt-2 text-[16px] text-[#242f21] leading-relaxed list-disc pl-5 space-y-1">
                <li>普洱茶（雲南）：熟茶是典型黑茶；生茶工藝更接近綠茶系統的蒸壓茶路線</li>
                <li>六堡茶（廣西）：檳榔香與陳香，有時可見「金花」</li>
                <li>安化黑茶（湖南）：黑磚、茯磚（金花）、千兩茶、天尖、貢尖等</li>
                <li>青磚茶（湖北）：緊壓青磚為代表，邊銷重要茶品</li>
                <li>藏茶（四川邊茶）：緊壓為主，銷往藏區</li>
              </ul>
              <div className="mt-3 text-sm text-[#536150]">
                備註：普洱茶不全然等同黑茶；本站也另有「普洱茶」獨立頁面整理。
              </div>
            </div>

            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">金花是什麼？</div>
              <div className="mt-2 text-base font-extrabold text-[#141b12]">冠突散囊菌（益生菌）</div>
              <ul className="mt-2 text-[16px] text-[#242f21] leading-relaxed list-disc pl-5 space-y-1">
                <li>形成：需特定溫濕度與「發花」工藝</li>
                <li>影響：分泌酶轉化物質，使口感更醇和甘甜</li>
                <li>價值：可作為茯磚等品質指標之一，但非所有黑茶都會有</li>
              </ul>
              <div className="mt-3 text-sm text-[#536150]">建議心態：可遇不可求，不必強求。</div>
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

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">BUYING GUIDE</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">4. 消費者指南：如何挑選優質與安全的黑茶</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-[#f5f8f4] px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">第一步：看外觀</div>
              <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
                檢查是否有青色或白色霉點（深色乾茶上通常更顯眼）。
              </p>
            </div>
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-[#f5f8f4] px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">第二步：聞氣味</div>
              <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
                儲存不當幾乎一定有霉味或異味，是最直接的警訊。
              </p>
            </div>
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-[#f5f8f4] px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">第三步：觀茶湯</div>
              <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
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

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">CLOSING</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">結論：享受平民又健康的茶飲</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
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
          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">發酵光譜</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">約 8% → 75%</div>
            <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
              跨度極大，因此品項最繁多，也最容易被誤認為紅茶或其他深色茶。
            </p>
          </div>
          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">工藝核心</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">萎凋 × 做青 × 焙火</div>
            <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
              做青（搖青／走水與氧化）讓香氣層次增幅最大；在潮濕氣候下加入焙火能更穩定乾燥並激發芳香物質。
            </p>
          </div>
          <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
            <div className="text-sm font-extrabold tracking-widest text-[#536150]">文化影響</div>
            <div className="mt-2 text-base font-extrabold text-[#141b12]">消脂解膩的「健康熱」</div>
            <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
              青茶常被形容有助消脂解膩，並促成 1970 年代日本的烏龍茶熱潮，成為社會性消費現象。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">ORIGIN</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">追本溯源：青茶的歷史謎團與誕生之路</div>
          <p className="mt-3 text-[16px] text-[#242f21] leading-relaxed">
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

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">GLOBALIZATION</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">全球化之路：從「武夷茶」到「烏龍茶」的名稱演變</div>
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

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">MAP</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">青茶品類地圖：三大產區的代表名品</div>

          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">福建烏龍</div>
              <div className="mt-2 text-base font-extrabold text-[#141b12]">閩北岩茶 × 閩南安溪</div>
              <ul className="mt-2 text-[16px] text-[#242f21] leading-relaxed list-disc pl-5 space-y-1">
                <li>閩北：武夷岩茶（岩韻）— 大紅袍、肉桂、水仙、奇種、名叢</li>
                <li>四大名叢：大紅袍、鐵羅漢、白雞冠、水金龜（注意：用字為草叢的「叢」）</li>
                <li>閩南：安溪系（花香鮮爽）— 鐵觀音、黃旦（黃金桂）、水仙、永春佛手</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">廣東烏龍</div>
              <div className="mt-2 text-base font-extrabold text-[#141b12]">鳳凰單叢（高揚香型）</div>
              <p className="mt-2 text-[16px] text-[#242f21] leading-relaxed">
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
                  <span key={tag} className="rounded-full border border-[#d6dfd3]/50 bg-[#f5f8f4] px-3 py-1 text-[#242f21]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#d6dfd3]/50 bg-white px-5 py-4">
              <div className="text-sm font-extrabold tracking-widest text-[#536150]">台灣烏龍</div>
              <div className="mt-2 text-base font-extrabold text-[#141b12]">風土延伸的清香與熟韻</div>
              <ul className="mt-2 text-[16px] text-[#242f21] leading-relaxed list-disc pl-5 space-y-1">
                <li>文山包種</li>
                <li>高山烏龍</li>
                <li>凍頂烏龍</li>
                <li>白毫烏龍（東方美人）</li>
                <li>鐵觀音</li>
              </ul>
              <div className="mt-3 text-sm text-[#536150]">
                教學記憶點（韻）：台灣蜜韻、閩北岩韻、閩南音韻、廣東山韻。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d6dfd3]/50 bg-white px-6 py-6">
          <div className="text-sm font-extrabold tracking-[0.28em] text-[#536150]">CULTURE</div>
          <div className="mt-2 text-[16px] font-extrabold text-[#141b12]">青茶的獨特功效與文化影響</div>
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
