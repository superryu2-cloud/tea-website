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

export function createPuerhChapter07(setLightboxData) {
  return {
      title: '七：普洱熟茶的工藝與歷史',
      content: (
        <div className="space-y-16 font-sans">
          {/* Intro Hero */}
          {/* Intro Hero (Refactored for Visibility) */}
          {/* Intro Hero (Chapter 10 Style) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_ripe_hero_peaks.png', alt: '普洱熟茶工藝與歷史' })}
          >
            <img
              src="/images/varieties/puerh/puerh_ripe_hero_peaks.png"
              alt="普洱熟茶工藝與歷史"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end text-left">
              <span className="inline-block self-start px-4 py-1.5 bg-amber-100/20 backdrop-blur border border-amber-200/30 text-amber-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                The Art of Time Travel
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight shadow-sm">
                普洱熟茶：時間的魔法，人工的智慧<br />
                <span className="text-2xl md:text-3xl opacity-80 font-normal">從「茶馬古道」到「微生物風土」的演進</span>
              </h2>
            </div>
          </div>

          {/* Section 1: Aesthetics & Appearance */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b pb-4 border-stone-200">1. 普洱熟茶的感官特質與外觀審美</h3>
            <div className="grid md:grid-cols-2 gap-10 items-stretch">
              <div className="space-y-6 text-[17px] text-stone-700 leading-relaxed">
                <p>
                  在複雜的普洱茶體系中，熟茶憑藉其極高的包容度與溫潤特性，成為多數初學者的首選與生理上的「避風港」。相較於生茶的強勁與苦澀，熟茶經渥堆發酵後，茶性由寒轉溫，刺激度大幅降低，這種感官上的親和力是其市場普及的核心競爭力。
                </p>
                <p>
                  從視覺審美來看，熟茶色澤以褐色、紅棕色為主調；若發酵程度較深，則呈現趨向深邃的黑褐色。由於熟茶多採用拼配工藝，其條索的清晰度與完整度通常略遜於生茶。然而，在高等級用料（如特級或宮廷料）中，密布的金黃色或棕紅色芽毫提供了極佳的視覺愉悅感。
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-100 h-full min-h-[300px] group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_ripe_loose_golden_buds_macro.png', alt: 'High Grade Loose Puerh with Golden Buds' })}>
                <img
                  src="/images/varieties/puerh/puerh_ripe_loose_golden_buds_macro.png"
                  alt="High Grade Loose Puerh with Golden Buds"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-amber-100 font-medium text-sm">特級金毫散茶：高等級熟茶的視覺愉悅</p>
                </div>
              </div>
            </div>

            {/* Industry Analyst Block - Moved to full width for balance */}
            <div className="bg-amber-50 p-8 rounded-2xl border-l-4 border-amber-600 shadow-sm">
              <h4 className="font-bold text-[19px] text-amber-900 mb-4 flex items-center gap-2"><Scale size={20} /> 產業觀點：等級矛盾與「撒面」藝術</h4>
              <p className="text-[17px] text-stone-700 leading-relaxed">
                身為產業分析師，必須指出熟茶外觀中的「撒面茶」工藝並非單純的裝飾。這在技術邏輯上是為了解決<strong>「等級矛盾」</strong>：市場追求細嫩芽毫（如大益產品中常見的宮廷料撒面）帶來的尊貴感，但純細料發酵往往缺乏湯感的厚度與甜度。因此，內質採用7至9級粗壯原料以支撐骨架與甜潤感，表面撒以細嫩名貴料以顯露金毫，這種商業平衡術不僅提升了產品的視覺美感，也優化了成本與風味的配比。然而，外觀僅是序曲，熟茶的靈魂終究在於其深層的湯感體驗。
              </p>
            </div>
          </div>

          {/* Section 2: Flavor Aesthetics */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b pb-4 border-stone-200">2. 熟茶的風味美學：從湯感到香氣的演變</h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              熟茶的核心審美價值在於<strong>「滑、厚、甜、柔」</strong>。這與生茶追求的層次感與生津力截然不同，是一種追求極致安定與慰藉的感官體驗。
            </p>

            <div className="bg-stone-900 text-stone-300 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Droplet size={200} /></div>
              <div className="grid md:grid-cols-2 gap-12 items-stretch relative z-10">
                <div className="md:col-span-1 flex flex-col justify-center space-y-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700 flex-1 min-h-[250px] group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_ripe_tea_soup_viscous_red.png', alt: 'Viscous Red Soup' })}>
                    <img src="/images/varieties/puerh/puerh_ripe_tea_soup_viscous_red.png" alt="Viscous Red Soup" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"><p className="text-white/90 italic text-sm">現代工藝的紅濃透亮</p></div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-700 h-[200px] group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch07-soup.png', alt: 'Classic Tea Soup' })}>
                    <img src="/images/varieties/puer-ch07-soup.png" alt="Classic Tea Soup" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"><p className="text-white/90 italic text-sm">經典湯感展現</p></div>
                  </div>
                </div>

                <div className="lg:col-span-1 space-y-8 flex flex-col justify-center">
                  <ul className="space-y-8 text-[17px] leading-relaxed">
                    <li className="space-y-3">
                      <strong className="text-amber-500 block text-xl border-l-4 border-amber-500 pl-3">「米湯感」的感官解構</strong>
                      <span className="block text-stone-300">高品質熟茶最顯著的標誌是<strong>「米湯感」</strong>。這種湯汁展現出物理性的重量感與黏綿柔軟的質地，宛如「媽媽在炭火上長時間煲出的濃湯」。其關鍵在於入口後完全感受不到水的「硬度」，而是呈現出一種具備稠度、重量且絲滑的液體狀態。</span>
                    </li>
                    <li className="space-y-3">
                      <strong className="text-amber-500 block text-xl border-l-4 border-amber-500 pl-3">香氣的演進與判別</strong>
                      <span className="block text-stone-300">新茶期可能帶有輕微的「渥堆味」，但優質熟茶會迅速轉化出焦糖香與蜜糖香。隨著陳化，香氣會進一步演變為沉穩的樟香、沉香或甜潤的棗香。若茶湯散發出悶濕草味或刺激性異味，則是發酵環境或工藝受損的體現。</span>
                    </li>
                    <li className="space-y-3">
                      <strong className="text-amber-500 block text-xl border-l-4 border-amber-500 pl-3">湯色與內質關聯</strong>
                      <span className="block text-stone-300">理想湯色應為深紅色或琥珀紅，核心標準是<strong>「紅濃透亮」</strong>。若湯色黑而不透，甚至在強光下仍顯混濁，通常暗示發酵過度（燒堆）或工藝控制失敗，此類茶湯往往伴隨著口感的缺失。這種優異風味的達成，源於普洱茶界長達數十年的技術革新，將偶然的自然轉化變為必然的科學受控。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: History & Evolution */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b pb-4 border-stone-200">3. 普洱熟茶的歷史發展階段與技術革新</h3>

            <p className="text-[17px] text-stone-700 leading-relaxed max-w-4xl mx-auto block mb-12">
              熟茶技術的發展，是一部從「茶馬古道」自然演化走向現代科學精密控制的進程，可系統性劃分為五代技術革新：
            </p>

            <div className="relative border-l-4 border-stone-200 ml-6 md:ml-12 space-y-12 pl-8 md:pl-12 py-2">
              {[
                { g: "第一代", t: "起源", d: "民國末期的「紅湯普洱茶」。李佛醫在《佛海縣誌》中詳盡記錄了當時為追求紅湯去苦澀而進行的早期嘗試，雖曾因戰亂斷代，但奠定了熟茶工藝的初步方向。", i: <Scroll size={18} /> },
                { g: "第二代", t: "南洋潑水茶", d: "受港澳市場對紅湯茶強烈需求的驅動，廣東省茶業公司研究出將雲南與廣東毛料拼配的潑水發酵法，製成著名的「廣雲貢餅」。此階段轉化率尚不穩定，仍帶有實驗性質。", i: <Waves size={18} /> },
                { g: "第三代", t: "大堆發酵 (奠基)", d: "1973年為行業的分水嶺。雲南省公司派員赴廣學成後，結合雲南在地環境，由吳啟英、周璧寧等前輩研發出標準化「大堆發酵」技術。其高轉化率與穩定性使熟茶進入規模化生產時代。", i: <Flag size={18} />, h: true },
                { g: "第四代", t: "外源菌種添加", d: "以周紅杰教授的科研成果與大益集團的「HM（高效率微生物）技術」為代表。透過人為定向添加益生菌（如黑曲霉等優勢菌群），使發酵更具可控性與安全性。此技術能更有效地將茶葉中的大分子物質轉化為易被人體吸收的小分子，提升健康價值。", i: <Microscope size={18} /> },
                { g: "第五代", t: "小堆離地發酵", d: "這是針對高端市場的「風險管理革命」。以往大堆發酵需10至30噸原料，對於單價極高的古樹茶而言，一旦「燒堆」即意味著數百萬元的損失。50至200公斤的小堆離地技術，成功規避了高價值原料進入熟茶領域的財務風險，引領熟茶進入精品化與莊園化時代。", i: <Box size={18} /> },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Marker */}
                  <div className={`absolute -left-[54px] md:-left-[70px] w-12 h-12 rounded-full border-4 border-stone-50 flex items-center justify-center z-10 shadow-sm transition-colors duration-300 ${item.h ? 'bg-amber-500 text-white scale-110' : 'bg-stone-200 text-stone-500 group-hover:bg-amber-100 group-hover:text-amber-600'}`}>
                    <span className="font-bold text-lg">{idx + 1}</span>
                  </div>

                  {/* Content */}
                  {item.h ? (
                    // 1973 Highlighted Card with Embedded Image
                    <div className="bg-amber-50 rounded-2xl overflow-hidden border border-amber-200 shadow-md transform transition-all hover:shadow-lg">
                      <div className="grid md:grid-cols-5 gap-0">
                        <div className="p-6 md:col-span-3 flex flex-col justify-center">
                          <div className="inline-block px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-xs font-bold tracking-wider mb-2 w-fit">1973 REVOLUTION</div>
                          <h4 className="font-bold text-[22px] mb-3 text-stone-900">{item.t}</h4>
                          <p className="text-[17px] leading-relaxed text-stone-800">{item.d}</p>
                        </div>
                        <div className="md:col-span-2 relative min-h-[250px] md:min-h-full cursor-zoom-in group-image" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch07-hero.png', alt: '1973 Revolution' })}>
                          <img src="/images/varieties/puer-ch07-hero.png" alt="1973 Revolution" className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/80 to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-amber-50/20"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Standard Item
                    <div className="pl-2">
                      <h4 className="font-bold text-[19px] mb-2 text-stone-900 flex items-center gap-2">
                        {item.t}
                      </h4>
                      <p className="text-[17px] leading-relaxed text-stone-600">{item.d}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Microbes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">4. 核心技術揭秘：微生物與發酵環境</h3>
            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
              <p className="text-[17px] text-stone-700 leading-relaxed mb-6">
                在熟茶工藝中，「七分靠人，三分在天」的「天」指的正是<strong>「微生物風土（Microbial Terroir）」</strong>。
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <strong className="block text-[19px] text-emerald-900 flex items-center gap-2"><Bug size={20} /> 「老廠房」的壟斷性優勢</strong>
                  <p className="text-[17px] text-stone-700">歷史悠久的發酵車間如同「老麵種」。數十年積累在牆壁與空間中的益生菌群形成了一個極其穩定的微生態環境。在這種環境下發酵，菌群競爭優勢明顯，能自然抑制有害菌生長，這是新廠房難以複製的競爭壁壘。</p>
                </div>
                <div className="space-y-2">
                  <strong className="block text-[19px] text-emerald-900 flex items-center gap-2"><Droplet size={20} /> 水質與衛生的現代轉化</strong>
                  <p className="text-[17px] text-stone-700">水是微生物活動的媒介。大益著名的「圓井」水與南糯山的山泉水，均因其適宜的礦物質含量有利於發酵。現代工廠已完成從早期塑料管向不鏽鋼管與軟水系統的升級，以確保發酵純淨度，消除異味干擾。</p>
                </div>
                <div className="space-y-2">
                  <strong className="block text-[19px] text-emerald-900 flex items-center gap-2"><User size={20} /> 發酵師的感官權限</strong>
                  <p className="text-[17px] text-stone-700">儘管技術進步，但翻堆時機、潮水程度等關鍵環節仍需依靠師傅的經驗。這種經驗是數據統計的延伸，能敏銳察覺發酵過程中的細微變化並及時調整。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Process */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">5. 熟茶製作流程全解析：從毛料到成品</h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              熟茶是基於生散茶毛料的「深加工」藝術，其靈魂在於精密的渥堆控制。
            </p>
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              {/* Steps Grid - Spans 2 cols */}
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="block text-[19px] text-stone-900 mb-2">1. 渥堆發酵</strong>
                  <p className="text-[16px] text-stone-700 leading-relaxed">週期通常為4-6週，高端定製茶甚至延長至8-12週。堆溫需嚴格監控，嚴禁超過64度，防止「燒堆」。</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="block text-[19px] text-stone-900 mb-2">2. 乾燥開溝</strong>
                  <p className="text-[16px] text-stone-700 leading-relaxed">發酵完成後，茶葉需進行「開溝」處理（每3-5天進行交叉開溝），自然通風乾燥。嚴禁烘炒曝曬。</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="block text-[19px] text-stone-900 mb-2">3. 解塊與老茶頭</strong>
                  <p className="text-[16px] text-stone-700 leading-relaxed">發酵副產物「老茶頭」，因富含果膠與<strong>「菌絲蛋白」</strong>自然粘結而成，極具膠質感。</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="block text-[19px] text-stone-900 mb-2">4. 分級與挑剪</strong>
                  <p className="text-[16px] text-stone-700 leading-relaxed">透過機械分級與極其耗費人工的挑剪工序，去除石頭、樹枝、頭髮等雜質，保證純淨。</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="block text-[19px] text-stone-900 mb-2">5. 散倉陳化</strong>
                  <p className="text-[16px] text-stone-700 leading-relaxed">壓餅前需經過1-5年的散存。消散「渥堆味」、提升香氣純淨度（顯現沉香、棗香）。</p>
                </div>
                <div className="p-5 bg-red-50 rounded-xl border border-red-200">
                  <strong className="block text-[19px] text-red-900 mb-2">6. 蒸壓與烘房</strong>
                  <p className="text-[16px] text-red-800 leading-relaxed">熟茶壓餅後必須進入約60度的烘房，進行36-72小時的徹底乾燥。核心防霉手段。</p>
                </div>
              </div>

              {/* Sticky Image - 1 col */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch07-process.png', alt: 'Fermentation Process' })}>
                  <img src="/images/varieties/puer-ch07-process.png" alt="Fermentation Process" className="w-full h-auto object-cover" />
                  <div className="p-4 bg-stone-100 italic text-stone-600 text-center text-sm">
                    標準化翻堆工藝 (Turning the Pile)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Health Guide */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              <HeartPulse size={24} /> 6. 熟茶的健康機能與現代飲用指南
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-[17px] text-amber-900/80 leading-relaxed space-y-4">
                <p>現代科學將普洱熟茶定義為高品質的<strong>「酵素茶」</strong>。其在發酵過程中，微生物將茶葉中的多酚類等大分子轉化為小分子，極大提升了人體的生物利用率。</p>
                <div className="space-y-4">
                  <div>
                    <strong className="block text-amber-800 mb-1">生理功能：</strong>
                    <p>熟茶具備加速新陳代謝、緩解胃部刺激、促進腸道蠕動的功效。因其低咖啡鹼（低刺激）特質，晚間飲用亦不影響睡眠。</p>
                  </div>
                  <div>
                    <strong className="block text-amber-800 mb-1">社會心理與現代體質：</strong>
                    <p>針對現代人長期處於冷氣環境、熬夜、重口味飲食及高壓情緒所導致的<strong>「脾胃虛弱」</strong>，熟茶的溫潤特性提供了針對性的調理方案。</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-xl">
                    <strong className="block text-amber-800 mb-2">「15天熟茶體驗計劃」：</strong>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>建議規程：</strong> 每日飲用500-1000cc熟茶，堅持15天。</li>
                      <li><strong>實驗性配比：</strong> 採取1:20的高茶水比，以確保活性物質攝入量。</li>
                      <li><strong>預期效應：</strong> 多數實踐者會觀察到皮膚透亮度的提升與腸道代謝的顯著改善，其生物活性表現往往優於市售單一益生菌產品。</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white/50 rounded-2xl p-6 text-center h-full flex flex-col justify-center">
                <div className="text-5xl font-black text-amber-500 mb-4">15 Days</div>
                <div className="text-2xl text-amber-800 font-bold mb-2">溫養計畫</div>
                <p className="text-lg text-amber-700">改善代謝 · 皮膚透亮 · 腸道健康</p>
                <p className="text-sm text-amber-600 mt-4 opacity-80 decoration-slice">總結而言，普洱熟茶是時間、微生物與人類智慧共同編織的藝術品。從歷史的偶然到現代科學的精準控制，每一滴紅濃的茶湯都承載著跨越時空的健康價值與美學深度。</p>
              </div>
            </div>
          </div>

        </div>
      ),
    };
}
