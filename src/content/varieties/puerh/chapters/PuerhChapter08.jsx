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

export function createPuerhChapter08(setLightboxData) {
  return {
      title: '八：普洱熟茶鑑賞與沖泡全攻略',
      content: (
        <div className="space-y-16 font-sans">
          {/* Intro Hero */}
          {/* Intro Hero (Refactored for Visibility) */}
          {/* Intro Hero (Chapter 10 Style) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_ch08_landscape_hero.png', alt: '普洱熟茶鑑賞與沖泡全攻略' })}
          >
            <img
              src="/images/varieties/puerh/puerh_ch08_landscape_hero.png"
              alt="普洱熟茶鑑賞與沖泡全攻略"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-orange-950/40 to-transparent p-8 md:p-12 flex flex-col justify-end text-left">
              <span className="inline-block self-start px-4 py-1.5 bg-orange-100/20 backdrop-blur border border-orange-200/30 text-orange-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                Comprehensive Guide
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight shadow-sm">
                普洱熟茶鑑賞與沖泡全攻略<br />
                <span className="text-2xl md:text-3xl opacity-80 font-normal">從等級解析到大師級沖泡技藝</span>
              </h2>
            </div>
          </div>

          {/* Section 1: Appreciation (鑑賞篇) */}
          <div className="space-y-8">
            <div className="max-w-4xl">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">鑑賞篇：等級之辯與感官美學</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed mb-6">
                普洱熟茶的評價體系，記錄了從國營時代的標準化「嘜號」（如 7572、7592）到現代追求山頭、個性化「一口料」的演變歷史。雖然現代市場傾向於山頭風格，但源自國營時期的等級標準，依然是我們剖析茶質底蘊、制定沖泡戰略的專業基石。
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-amber-600">
                  <h4 className="font-bold text-[19px] text-stone-900 mb-3">1. 等級體系與「嫩度」邏輯</h4>
                  <p className="text-[17px] text-stone-600 leading-relaxed">
                    熟茶傳統分為特級、一、三、五、七、九級，劃分的的核心準則在於嫩度：級別愈高，芽頭愈細顯，毫香愈發濃郁。
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <h4 className="font-bold text-[19px] text-amber-900 mb-3 flex items-center gap-2"><AlertCircle size={20} /> 「宮廷級」的商業解構</h4>
                  <p className="text-[17px] text-stone-700 leading-relaxed">
                    所謂「宮廷級」，實則是市場營銷催生下的產物，並非歷史定論。它選用特級以上的細嫩芽頭製作，雖具備毫香濃郁、湯色瞬時紅濃的視覺張力，但因芽頭物理結構細嫩，其<strong>「耐泡度」</strong>相對較低，沖泡時需格外細膩。
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px] group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_ch08_tea_cake_texture.png', alt: 'Rich Tea Cake Texture' })}>
                <img
                  src="/images/varieties/puerh/puerh_ch08_tea_cake_texture.png"
                  alt="Rich Tea Cake Texture"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium text-sm">茶餅紋理：金毫與黑褐葉片的交織，是等級的視覺密碼</p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-x-auto">
              <h4 className="font-bold text-[19px] text-stone-900 mb-4">2. 八大因子審評對照表</h4>
              <p className="text-[17px] text-stone-600 mb-4">資深審評需透過「條索、色澤、整碎、淨度、香氣、滋味、湯色、葉底」這八大物理因子，精準判斷茶質。</p>
              <table className="w-full text-[17px] text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                    <th className="p-3 font-bold">等級</th>
                    <th className="p-3 font-bold">條索</th>
                    <th className="p-3 font-bold">色澤</th>
                    <th className="p-3 font-bold">整碎</th>
                    <th className="p-3 font-bold">淨度</th>
                    <th className="p-3 font-bold">香氣</th>
                    <th className="p-3 font-bold">滋味</th>
                    <th className="p-3 font-bold">湯色</th>
                    <th className="p-3 font-bold">葉底</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-600">
                  {[
                    { l: '特級', d: ['緊細勻整', '紅顯毫', '勻整', '勻淨', '陳香濃郁', '濃醇乾爽', '紅艷明亮', '紅褐柔軟'] },
                    { l: '一級', d: ['緊結', '紅褐較潤', '勻整', '勻淨', '陳香濃厚', '濃醇回甘', '紅濃明亮', '紅褐較嫩'] },
                    { l: '三級', d: ['緊結上檔', '褐潤顯毫', '尚勻', '勻淨帶嫩梗', '陳香濃郁', '濃醇厚實', '紅濃明亮', '紅褐尚嫩'] },
                    { l: '五級', d: ['緊實', '褐色尚潤', '勻', '帶梗', '陳香尚濃', '濃厚回甘', '深紅明亮', '紅褐欠嫩'] },
                    { l: '七級', d: ['粗實', '褐欠潤', '尚勻', '帶梗', '陳香純正', '醇和回甘', '紅尚濃', '紅褐粗老'] },
                    { l: '九級', d: ['粗鬆', '葉底混雜、色澤不一', '欠勻', '帶梗片', '香氣趨於內斂、強度適中', '純正回甘', '褐紅尚濃', '紅褐粗硬'] },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 transition-colors">
                      <td className="p-3 font-bold text-stone-900 border-r border-stone-100">{row.l}</td>
                      {row.d.map((cell, i) => <td key={i} className="p-3">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-2 text-sm text-stone-500 italic bg-stone-50 p-2 rounded">
                註：當香氣表現為「平和」時，通常指香氣強度已明顯減弱；「花雜」則代表原料層次混亂，視覺感較差。
              </div>
            </div>
          </div>

          {/* Section 2: Technique (技藝篇) */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b pb-4 border-stone-200">技藝篇：沖泡之魂與戰略部署</h3>
            <p className="text-[17px] text-stone-700 leading-relaxed mb-8">
              專業茶師對待熟茶，必先透過「分析茶性」來決定手法，這是對每一片茶葉生命價值的深度尊重。
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_ch08_brewing_meditation.png', alt: 'Tea Meditation' })}>
                <img
                  src="/images/varieties/puerh/puerh_ch08_brewing_meditation.png"
                  alt="Tea Meditation"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="space-y-8 order-1 md:order-2">
                <div>
                  <h4 className="flex items-center gap-3 text-xl font-bold text-stone-900 mb-4">
                    <span className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center text-sm">壹</span>
                    診斷茶性與喚醒靈魂
                  </h4>
                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-stone-300 space-y-2">
                      <strong className="block text-stone-800">1. 茶性診斷：</strong>
                      <ul className="list-disc list-inside text-[17px] text-stone-600 space-y-1">
                        <li><strong>新茶（兩年內）：</strong>具明顯「窩堆味」，沖泡旨在去雜求純。</li>
                        <li><strong>中期茶：</strong>陳香與花蜜香交織，需透過水溫激發層次。</li>
                        <li><strong>老茶（十五年以上）：</strong>追求藥香或參香，核心在於呈現其厚重的陳韻。</li>
                      </ul>
                    </div>
                    <div className="pl-4 border-l-2 border-stone-300 space-y-2">
                      <strong className="block text-stone-800">2. 醒茶工藝（最忌悶躁）：</strong>
                      <p className="text-[17px] text-stone-600">
                        <strong>長期：</strong>提前一個月撥散入紫砂罐，釋放窩堆氣。<br />
                        <strong>臨時：</strong>提前1-2天撥散靜置，避開高濕。
                      </p>
                    </div>
                    <div className="pl-4 border-l-2 border-stone-300">
                      <strong className="block text-stone-800 mb-1">3. 取茶藝術：</strong>
                      <p className="text-[17px] text-stone-600">兼顧「大塊、小塊、碎茶」。不均勻的物理組合，反而是確保每一泡茶湯協調度的關鍵。</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-3 text-xl font-bold text-stone-900 mb-4">
                    <span className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center text-sm">貳</span>
                    物質媒介的精準匹配
                  </h4>
                  <ul className="space-y-4 text-[17px] text-stone-600">
                    <li className="bg-stone-50 p-4 rounded-xl">
                      <strong className="text-stone-900 block mb-1">選水科學：</strong>
                      推薦 pH 7-8.5 礦泉水。水質過硬/鹼會致茶湯變暗渾濁、產生灰色物質、增加澀感。
                    </li>
                    <li className="bg-stone-50 p-4 rounded-xl">
                      <strong className="text-stone-900 block mb-1">器皿哲學：</strong>
                      紫砂或柴燒壺。選「上下一致、直口、大肚」器形（如仿古），防鎖喉，增順滑。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Master Brewing (大師手法) */}
          <div className="bg-stone-900 text-stone-100 rounded-[3rem] p-8 md:p-12 space-y-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Waves size={300} /></div>
            <div className="relative z-10">
              <div className="space-y-10">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white mb-2">三、 大師級沖泡手法實務</h3>
                  <p className="text-stone-400 text-[17px]">生茶求「激發」，熟茶求「引導」。</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left: Step Cards */}
                  <div className="space-y-4">
                    <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 hover:border-stone-600 transition-colors flex gap-5 items-start">
                      <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 h-fit shrink-0"><Waves size={24} /></div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">1. 水流貼壁 (Wall)</h4>
                        <p className="text-stone-400 text-[17px] leading-relaxed">定點注水於壺壁。避免水柱直衝茶葉，防止湯感渾濁或出現「醬油湯」。</p>
                      </div>
                    </div>
                    <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 hover:border-stone-600 transition-colors flex gap-5 items-start">
                      <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400 h-fit shrink-0"><ArrowDownRight size={24} /></div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">2. 低斟緩注 (Slow)</h4>
                        <p className="text-stone-400 text-[17px] leading-relaxed">壺嘴放低，細水長流。如同「太極」般柔和，引導出茶湯的膠質感。</p>
                      </div>
                    </div>
                    <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 hover:border-stone-600 transition-colors flex gap-5 items-start">
                      <div className="p-3 bg-rose-500/20 rounded-xl text-rose-400 h-fit shrink-0"><ThermometerSun size={24} /></div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">3. 高溫恆定 (Heat)</h4>
                        <p className="text-stone-400 text-[17px] leading-relaxed">必須 <strong className="text-white">100°C 沸水</strong>。熟茶發酵度高，唯有高溫才能激發其陳香與甜度。</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="flex flex-col gap-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700 cursor-zoom-in group flex-grow min-h-[460px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_ch08_tea_soup_viscous.png', alt: 'Viscous Tea Soup' })}>
                      <img
                        src="/images/varieties/puerh/puerh_ch08_tea_soup_viscous.png"
                        alt="Viscous Tea Soup"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-stone-300 text-[15px] text-center italic mt-2">低斟緩注：水流如涓涓細流貼壁而入，溫柔引導出茶湯的膠質</p>
                  </div>
                </div>

                {/* Bottom: Quick Parameters */}
                <div className="bg-stone-950/50 rounded-2xl border border-stone-800 p-8">
                  <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <Zap size={20} className="text-amber-500" /> 參數速查
                  </h4>
                  <div className="divide-y divide-stone-800">
                    <div className="flex justify-between items-center text-[17px] py-4 first:pt-0">
                      <span className="text-stone-400">器具</span>
                      <strong className="text-amber-200">紫砂壺 (首選)</strong>
                    </div>
                    <div className="flex justify-between items-center text-[17px] py-4">
                      <span className="text-stone-400">水溫</span>
                      <strong className="text-white">100°C (沸水)</strong>
                    </div>
                    <div className="flex justify-between items-center text-[17px] py-4">
                      <span className="text-stone-400">茶水比</span>
                      <strong className="text-amber-200">1:15 - 1:20 (更濃)</strong>
                    </div>
                    <div className="flex justify-between items-center text-[17px] py-4 last:pb-0">
                      <span className="text-stone-400">潤茶</span>
                      <strong className="text-white">20秒 (稍長)</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Side-by-Side Comparison */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 border-b pb-4 border-stone-200">總結：生茶 vs 熟茶 沖泡差異</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Raw Tea Card */}
              <div className="bg-emerald-50/80 p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12 duration-700"><Leaf size={120} className="text-emerald-800" /></div>
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-emerald-900 flex items-center gap-3"><Leaf size={24} /> 普洱生茶</h4>
                    <div className="text-emerald-700 font-bold tracking-widest text-sm uppercase">Dynamic & Active</div>
                  </div>
                  <hr className="border-emerald-200" />
                  <ul className="space-y-4 text-[17px] text-stone-700 leading-relaxed font-medium">
                    <li className="flex items-start gap-3"><span className="mt-1 p-1 bg-emerald-200 rounded-full shrink-0"><ArrowUpRight size={14} className="text-emerald-800" /></span> <span><strong>高溫提香壓韻</strong> (拉高水線)</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 p-1 bg-emerald-200 rounded-full shrink-0"><Thermometer size={14} className="text-emerald-800" /></span> <span>95-100°C (新茶可降)</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 p-1 bg-emerald-200 rounded-full shrink-0"><Coffee size={14} className="text-emerald-800" /></span> <span>白瓷蓋碗 (爽利)</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 p-1 bg-emerald-200 rounded-full shrink-0"><Scale size={14} className="text-emerald-800" /></span> <span>1:20 - 1:25</span></li>
                  </ul>
                </div>
              </div>

              {/* Ripe Tea Card */}
              <div className="bg-amber-50/80 p-8 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:-rotate-12 duration-700"><Flame size={120} className="text-amber-800" /></div>
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-amber-900 flex items-center gap-3"><Flame size={24} /> 普洱熟茶</h4>
                    <div className="text-amber-800 font-bold tracking-widest text-sm uppercase">Mellow & Deep</div>
                  </div>
                  <hr className="border-amber-200" />
                  <ul className="space-y-4 text-[17px] text-stone-700 leading-relaxed font-medium">
                    <li className="flex items-start gap-3"><span className="mt-1 p-1 bg-amber-200 rounded-full shrink-0"><ArrowDownRight size={14} className="text-amber-800" /></span> <span><strong>低緩輕柔</strong> (貼壁注水)</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 p-1 bg-amber-200 rounded-full shrink-0"><Thermometer size={14} className="text-amber-800" /></span> <span>100°C (必須沸水)</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 p-1 bg-amber-200 rounded-full shrink-0"><Coffee size={14} className="text-amber-800" /></span> <span>紫砂壺 (聚熱醇化)</span></li>
                    <li className="flex items-start gap-3"><span className="mt-1 p-1 bg-amber-200 rounded-full shrink-0"><Scale size={14} className="text-amber-800" /></span> <span>1:15 - 1:20 (濃郁)</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center max-w-3xl mx-auto space-y-6 py-8">
            <div className="inline-block p-4 rounded-full bg-stone-100 mb-2">
              <Gem size={32} className="text-stone-800" />
            </div>
            <h4 className="text-2xl font-bold text-stone-900">結語：感官評價與品鑑標竿</h4>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              高品質的普洱熟茶，其最終呈現應完全符合<strong className="text-amber-700">「濃、厚、純、滑、甜、潤」</strong>六大感官標準。
            </p>
            <p className="text-[17px] text-stone-600 leading-relaxed italic border-t border-stone-200 pt-6">
              當你閉目品啜，茶湯應具備古樹發酵特有的乾淨度，並伴隨淡淡的花香或果香。那種飽滿而甜潤的滋味，應如同童年時那碗濃郁的米湯，帶給飲者無與倫比的溫暖與幸福。這不僅是技術的勝利，更是茶師透過溫度的掌控與手法的克制，對這份「時間禮讚」最完美的還原。
            </p>
          </div>
        </div>
      ),
    };
}
