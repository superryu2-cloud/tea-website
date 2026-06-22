import React from 'react';
import ClickableImage from '../../../../components/ClickableImage';
import {
  MapPin,
  Sun,
  Award,
  Info,
  Leaf,
  Mountain,
  Coffee,
  Box,
  Clock,
  Circle,
  Disc,
  Feather,
  Flag,
  Gem,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  BrainCircuit,
  Fingerprint,
  Wind,
  CornerUpRight,
  Smile,
  Activity,
  Triangle,
  Citrus,
  Sprout,
  Moon,
  Star,
  TreePine,
  Flower2,
  Flower,
  Droplet,
  Timer,
  Waves,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Flame,
  Crown,
  Tent,
  FlameKindling,
  Quote,
  Zap,
  Check,
  Bug,
  Hammer,
  CloudSun,
  Thermometer,
  ThermometerSun,
  CloudRain,
  RefreshCcw,
  XCircle,
  Scale,
  Scroll,
  Layers,
  Palette,
  Cloud,
  Eye,
  Filter,
  Microscope,
  Hand,
  Gift,
  Droplets,
  AlertCircle,
  Users,
  User,
  Pipette,
  PlusCircle,
  MinusCircle,
  Hourglass,
  HeartPulse,
  X
} from 'lucide-react';
import { Callout, Placeholder, Subheading } from '../shared.jsx';

export function createPuerhChapter06(setLightboxData) {
  return {
      title: '六：普洱生茶的沖泡技巧',
      content: (
        <div className="space-y-16 font-sans">
          {/* Intro Hero */}
          {/* Intro Hero (Refactored for Visibility) */}
          {/* Intro Hero (Chapter 10 Style) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_raw_brewing_floating_mountains.png', alt: '普洱生茶沖泡修煉指南' })}
          >
            <img
              src="/images/varieties/puerh/puerh_raw_brewing_floating_mountains.png"
              alt="普洱生茶沖泡修煉指南"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end text-left">
              <span className="inline-block self-start px-4 py-1.5 bg-slate-100/20 backdrop-blur border border-slate-200/30 text-slate-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                The Cultivation of Brewing
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight shadow-sm">
                普洱生茶沖泡修煉指南<br />
                <span className="text-2xl md:text-3xl opacity-80 font-normal">從理論心法到實務操作的深度解析</span>
              </h2>
            </div>
          </div>

          {/* Section 1: Core Definition (壹 - 心法) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 border-b pb-4 border-slate-200">
              <BrainCircuit className="text-emerald-700" size={28} />
              壹、 普洱茶沖泡的核心定義與價值
            </h3>
            <div className="prose max-w-none text-[17px] text-slate-700 leading-relaxed font-sans">
              <p className="mb-6">
                在茶藝修煉的漫長進路中，沖泡絕非單純的物理動作，而是一場關於<strong>「轉化」</strong>的戰略性藝術實驗。所謂普洱茶的沖泡，其核心定義在於：藉由適宜的器皿、天賜之水與精準技法的深度交融，將封存於葉片中的美好風味、品質特質及風格韻味，進行完美且具象的釋放。這是一個將乾枯條索轉化為靈動茶湯、將潛在品質轉化為感官美感的關鍵環節。
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-400 italic text-slate-600">
                <p>
                  進入實務操作前，修煉者的心境與環境佈置至關重要。建議擇一靜謐空間，依據個人審美佈置茶席，從茶巾、水方到器皿的陳設，皆應符合人體工學，確保操作時得心應手。透過「靜心」的程序，讓身心處於放鬆且專注的狀態，方能提升感官的敏銳度，進入人、茶、器三位一體的境界。當心靈歸於平靜，我們便能從決定茶湯靈魂的源頭——「水」開始，啟動這場嗅覺與味覺的盛宴。
                </p>
              </div>

              {/* Restored Original Image */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <ClickableImage
                  src="/images/varieties/puer-ch06-hero.png"
                  alt="喚醒茶葉靈魂的藝術"
                  caption="沖泡藝術：以專注之心，喚醒沉睡的茶葉靈魂"
                  captionClassName="text-slate-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Three Elements (貳 - 要素) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 border-b pb-4 border-slate-200">
              <Droplet className="text-blue-600" size={28} />
              貳、 沖泡三要素：水質、水溫與茶水比
            </h3>
            <p className="text-[17px] text-slate-700 leading-relaxed mb-6">
              水為茶之母，水質的良窳與溫控的精準度，決定了普洱生茶滋味的競爭性。
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Water Quality */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Waves size={80} /></div>
                <div className="relative z-10 space-y-4">
                  <h4 className="flex items-center gap-2 text-[19px] font-bold text-slate-900">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">水</span>
                    水質選用之法度
                  </h4>
                  <ul className="space-y-3 text-[17px] text-slate-600">
                    <li>
                      <strong className="block text-slate-800 text-sm mb-1 uppercase tracking-wider">PH值與甜潤感</strong>
                      <span className="block text-sm">理想區間 <strong>PH 6.5-7.5</strong>。超過8則茶湯甜潤感下降，顯得平淡。</span>
                    </li>
                    <li>
                      <strong className="block text-slate-800 text-sm mb-1 uppercase tracking-wider">硬度警示</strong>
                      <span className="block text-sm">警惕鈣鎂離子過高。硬水致茶湯發綠晦暗，口感粗糙，失卻細膩。</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Temperature */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Thermometer size={80} /></div>
                <div className="relative z-10 space-y-4">
                  <h4 className="flex items-center gap-2 text-[19px] font-bold text-slate-900">
                    <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-bold">溫</span>
                    水溫與海拔聯動
                  </h4>
                  <ul className="space-y-3 text-[17px] text-slate-600">
                    <li>
                      <strong className="block text-slate-800 text-sm mb-1 uppercase tracking-wider">核心原則</strong>
                      <span className="block text-sm">大葉種物質豐沛，需 <strong>100°C</strong> 高溫充分萃取。</span>
                    </li>
                    <li>
                      <strong className="block text-slate-800 text-sm mb-1 uppercase tracking-wider">地域差異</strong>
                      <span className="block text-sm">留意沸點影響 (台灣101°C / 昆明94°C)。</span>
                    </li>
                    <li>
                      <strong className="block text-slate-800 text-sm mb-1 uppercase tracking-wider">新茶微調</strong>
                      <span className="block text-sm">三年內細嫩新茶可降至 <strong>95°C</strong>，避高溫灼傷苦澀。</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Ratio */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Scale size={80} /></div>
                <div className="relative z-10 space-y-4">
                  <h4 className="flex items-center gap-2 text-[19px] font-bold text-slate-900">
                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold">比</span>
                    茶水比博弈
                  </h4>
                  <ul className="space-y-3 text-[17px] text-slate-600">
                    <li>
                      <strong className="block text-slate-800 text-sm mb-1 flex items-center gap-2"><Crown size={14} className="text-amber-500" /> 黃金比例 1:20</strong>
                      <span className="block text-sm">150ml蓋碗 : 7.5g茶。口感最飽滿層次豐富，專業修煉首選。</span>
                    </li>
                    <li>
                      <strong className="block text-slate-800 text-sm mb-1 flex items-center gap-2">清甜比例 1:25</strong>
                      <span className="block text-sm">高甜度、清雅風格，但湯感飽滿度會相對弱化。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Equipment (參 - 利器) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 border-b pb-4 border-slate-200">
              <Gem className="text-purple-600" size={28} />
              參、 器具選用藝術：材質與靈魂
            </h3>
            <p className="text-[17px] text-slate-700 leading-relaxed mb-6">
              器皿的材質選擇具備戰略意義，它決定了茶湯最終呈現的「骨架」與「靈魂」。
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="font-bold text-[19px] text-slate-800 mb-2">煮水器材質影響力</h4>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-16 shrink-0 font-bold text-slate-500 text-sm text-right pt-1">不鏽鋼</div>
                    <p className="text-slate-600 text-[17px]">展現物性之公允，不增不損，適合初步修煉。</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-16 shrink-0 font-bold text-amber-700 text-sm text-right pt-1">陶土類</div>
                    <p className="text-slate-600 text-[17px]">紫砂、建水紫陶。生茶最佳拍檔，優化水質提升層次。</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-16 shrink-0 font-bold text-slate-400 text-sm text-right pt-1">銀壺</div>
                    <p className="text-slate-600 text-[17px]">雙面刃。能軟化水質提升「滑順度」，但會閹割生茶特有的「骨架與稜角」，使其顯得軟弱。</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold text-[19px] text-slate-800 mb-2">沖泡器皿與配件</h4>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
                  <div>
                    <strong className="text-slate-900 block mb-1">白瓷蓋碗 (新茶首選)</strong>
                    <p className="text-slate-600 text-sm">不奪香不吸味。設計宜「敞口」投放條索，「圓腹」讓葉片舒展。利於觀察葉底。</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <strong className="text-slate-900 block mb-1">紫砂/柴燒壺 (老茶首選)</strong>
                    <p className="text-slate-600 text-sm">利用透氣與保溫特性，深掘5年以上茶品的深層韻味。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Technique (肆 - 技法) */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Wind size={150} /></div>
            <div className="relative z-10 space-y-6">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white border-b border-slate-700 pb-4">
                <Wind className="text-emerald-400" size={28} />
                肆、 高溫提香壓韻法：核心技法
              </h3>
              <p className="text-[17px] text-slate-300 leading-relaxed">
                技法是賦予茶湯靈魂的操作指令。透過對注水角度與流體力學的精準管控，方能達成「提香」與「壓韻」的平衡。
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-900 text-emerald-400 flex items-center justify-center font-bold border border-emerald-700">5/7</div>
                    <strong className="text-lg">時鐘方位論</strong>
                  </div>
                  <p className="text-slate-400 text-sm pl-13">右手注水定點5點鐘，左手定點7點鐘。水流沿「蓋碗壁」緩緩下滑，嚴禁直接衝擊茶核（洗頭）。</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-900 text-emerald-400 flex items-center justify-center font-bold border border-emerald-700">↕</div>
                    <strong className="text-lg">高溫提香壓韻</strong>
                  </div>
                  <p className="text-slate-400 text-sm pl-13">注水時拉高10公分（增加含氧/激發高分子香氣），隨後下壓穩定湯路，確保內質沉穩釋放。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Process (伍 - 實操) */}
          <div className="space-y-12">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 border-b pb-4 border-slate-200">
              <Activity className="text-rose-600" size={28} />
              伍、 普洱生茶七大實務操作流程
            </h3>

            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-10 pl-8 md:pl-10 py-2">
              {[
                { t: "備器與布席", d: "依照人體工學擺放器皿，創造一個讓自己身心放鬆、操作得心應手的環境。" },
                { t: "精確取茶", d: "以 1:20 比例取茶。解茶時應順著條索層層剝離，嚴禁蠻力拆解，以防葉片斷裂導致苦澀物質過度萃取。" },
                { t: "溫器甦醒", d: "以 100 度沸水淋灑蓋碗、蓋子及杯具。務必溫熱溫透，此舉為誘發後續茶香的關鍵。" },
                { t: "投茶與乾潤 (乾潤法)", d: "趁器皿餘熱投茶並覆蓋。利用乾熱空氣讓茶葉初步甦醒，此時可藉由聞香判斷茶品香氣是否純淨，有無雜味。" },
                { t: "濕潤 (醒茶)", d: "沿邊環繞注水，確保葉片均勻受熱。細嫩中小葉種控制在 5-6 秒。注意必須完全「瀝乾」潤茶水，防止殘湯導致苦澀堆疊。" },
                { t: "正式沖泡", d: "水沸騰後稍停待靜。運用「高溫提香壓韻法」。首泡出湯後養成「開蓋呼吸」習慣，避免悶損茶香。" },
                { t: "分湯品飲", d: "分湯前倒掉杯中溫水。茶湯降至約 50 度時，為最佳感官品鑑溫度。" },
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[45px] md:-left-[53px] top-0 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center ring-4 ring-white shadow-sm group-hover:bg-emerald-600 transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[19px] text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{step.t}</h4>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-sans">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Cultivation (陸 - 課後) */}
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-emerald-900 mb-6">
              <Scroll className="text-emerald-600" size={28} />
              陸、 沖泡延續性與修煉建議
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-[17px] text-emerald-800 leading-relaxed">
              <div>
                <strong className="block mb-2 text-emerald-950">沖泡間隔管理</strong>
                <p className="mb-4">每泡間隔控制在 1-3 分鐘。若中斷超過 10 分鐘，茶葉冷卻後滋味將顯著衰減。</p>
                <strong className="block mb-2 text-emerald-950">專注品鑑</strong>
                <p>前幾泡保持絕對專注。用心感受茶湯從舌面到喉韻的微小變化，而非急於社交。</p>
              </div>
              <div className="bg-white/60 p-6 rounded-xl border border-emerald-100/50">
                <strong className="block mb-4 text-emerald-950 text-lg border-b border-emerald-200 pb-2">核心要領複習 (Recap)</strong>
                <ul className="space-y-2 text-sm text-emerald-700 font-medium">
                  <li className="flex justify-between"><span>備器</span> <span>心境靜謐，得心應手</span></li>
                  <li className="flex justify-between"><span>取茶</span> <span>黃金比例 1:20，嚴禁蠻力</span></li>
                  <li className="flex justify-between"><span>溫器</span> <span>100度溫透，乾濕雙潤</span></li>
                  <li className="flex justify-between"><span>沖泡</span> <span>水靜後注，高溫提香壓韻</span></li>
                  <li className="flex justify-between"><span>出湯</span> <span>定點出乾淨，開蓋不悶茶</span></li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-sm text-emerald-600/80 italic text-center">
              沖泡是實踐的科學。鼓勵修煉者在實操中記錄注水角度、溫度與口感的關聯，將遇到的問題留存，作為後續深入交流的資糧。
            </p>
          </div>

        </div>
      ),
    };
}
