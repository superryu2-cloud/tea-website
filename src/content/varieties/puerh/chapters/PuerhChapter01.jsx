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

export function createPuerhChapter01(setLightboxData) {
  return {
      title: '一：什麼是普洱茶',
      content: (
        <div className="space-y-16 font-sans">
          {/* Hero Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[2/1] group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_mountain_art.png', alt: '普洱茶定義與產區全解析' })}>
            <img
              src="/images/varieties/puerh/puerh_mountain_art.png"
              alt="Majestic Ancient Tea Mountain"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-3xl text-white">
                <span className="inline-block px-3 py-1 bg-amber-600/90 text-amber-50 rounded-full text-sm font-bold tracking-widest mb-4 backdrop-blur-sm shadow-lg border border-amber-500/30">
                  EXPERT GUIDE
                </span>
                <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight drop-shadow-lg">
                  普洱茶定義與產區全解析<br />
                  <span className="text-xl md:text-2xl font-light opacity-90">高手修煉秘籍：從生物學基礎到資產價值的終極指南</span>
                </h2>
                <div className="h-1 w-24 bg-amber-500 rounded-full mb-6"></div>
              </div>
            </div>
          </div>

          {/* 1. Core Definition & Value System */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-900 text-white rounded-lg"><Award size={24} /></div>
              <h3 className="text-2xl font-bold text-stone-900">核心定義與價值體系</h3>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm mb-8">
              {/* Context Image - Misty Mountains */}
              <div className="relative h-48 md:h-64 overflow-hidden group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-misty-mountains.png', alt: '雲南雲霧奇峰：普洱茶的靈性家園' })}>
                <img src="/images/varieties/puer-ch03-misty-mountains.png" alt="Misty Peaks" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-stone-900/20" />
                <div className="absolute bottom-4 right-6 text-white text-xs font-bold tracking-widest opacity-80 uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  Ethereal Terrain
                </div>
              </div>

              <div className="p-8 space-y-6">
                <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                  在茶葉貿易與資產收藏領域，明確的「定義」不僅是行政法律的邊界，更是確保茶品具備<strong>「越陳越香」</strong>生物學基礎與<strong>「資產增值」</strong>屬性的基石。
                  普洱茶之所以能具備「越放越值錢」的金融特性，本質上取決於其內含物質在時間維度下的生化轉化潛力。
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-4">
                  <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                    <h4 className="flex items-center gap-2 font-bold text-stone-900 text-[19px] mb-3 font-sans">
                      <AlertCircle size={20} className="text-red-500" /> 歷史教訓：2007 市場崩盤
                    </h4>
                    <p className="text-stone-600 leading-relaxed text-[17px] font-sans">
                      定義模糊曾導致市場失序。大量來自四川、貴州等外省原料冒充雲南普洱，雖形態相似，但因缺乏特定<strong>「微生態環境」</strong>，無法持續後發酵，存放數年後風味轉淡，導致資產泡沫破裂。
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                    <h4 className="flex items-center gap-2 font-bold text-emerald-900 text-[19px] mb-3 font-sans">
                      <CheckCircle2 size={20} className="text-emerald-600" /> 戰略意義：2008 國家標準
                    </h4>
                    <p className="text-emerald-800/80 leading-relaxed text-[17px] font-sans">
                      GB/T 22111 標準不僅界定了地理產區，更是對雲南特定環境的技術壟斷。確保了普洱茶作為<strong>「具備持續酶促反應能力的生物基質」</strong>的正統性，確立了從半成品向高端藏品的演變路徑。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Three Core Keywords */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-lg font-serif">2</span>
              定義的三大核心關鍵詞
            </h3>
            <p className="text-[17px] text-stone-600">這是辨識正宗普洱茶並進行決策評估的終極基準：</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "地理標誌保護範圍",
                  sub: "Geography (Terroir)",
                  icon: MapPin,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                  border: "border-emerald-100",
                  highlight: "不可複製的風土",
                  desc: "嚴格限定在雲南省內（約90%產區）。任何採自川、黔、粵、閩的原料，即便工藝相同，因缺失特定光熱條件與微生物群落，無法獲得「普洱茶」冠名權。"
                },
                {
                  title: "雲南大葉種曬青",
                  sub: "Genetic Superiority",
                  icon: Leaf,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  border: "border-amber-100",
                  highlight: "內含物質極豐富",
                  desc: "擁有最完整的茶樹基因體系。即便將武夷大紅袍或台灣青心烏龍移種至雲南，亦因基因差異不具備法定資格。正宗普洱必須源自雲南本土原生種。"
                },
                {
                  title: "特定加工工藝",
                  sub: "Enzymatic Activity",
                  icon: Coffee,
                  color: "text-rose-600",
                  bg: "bg-rose-50",
                  border: "border-rose-100",
                  highlight: "活性保留的關鍵",
                  desc: "生茶需特定溫度殺青與蒸壓；熟茶需「渥堆發酵」（濕熱與微生物協同）。這是一套賦予茶葉溫潤感官特徵並保留轉化能力的精密技術鏈。"
                }
              ].map((card, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border ${card.border} ${card.bg} hover:shadow-lg transition-all duration-300 group`}>
                  <div className="flex justify-between items-start mb-4">
                    <card.icon className={`p-3 bg-white rounded-xl shadow-sm ${card.color} w-14 h-14`} />
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{card.sub}</span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-xl mb-2 group-hover:text-amber-700 transition-colors">{card.title}</h4>
                  <div className={`text-xs font-bold px-2 py-1 rounded w-fit mb-3 ${card.color} bg-white/60`}>{card.highlight}</div>
                  <p className="text-[17px] text-stone-700 leading-snug">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Four Core Regions */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-lg font-serif">3</span>
              四大核心產區深度導讀
            </h3>
            <p className="text-[17px] text-stone-700">
              地理環境 (Terroir) 是塑造風味靈魂的決定因素。沿瀾滄江流域分布的四大產區，因海拔、土壤與微氣候差異，構建了宏大的風味版圖。
            </p>

            {/* Sacred Ancient Tree Landing Image */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-ancient-tree.png', alt: '千年茶王樹：雲南產區的實物圖騰' })}>
              <img src="/images/varieties/puer-ch03-ancient-tree.png" alt="Ancient Tree" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="px-4 py-1.5 bg-amber-500 text-white text-xs font-black tracking-widest rounded-full shadow-lg">SACRED ANCESTOR</span>
                <h4 className="text-white text-2xl font-black mt-2 drop-shadow-lg">實物圖騰：千年古茶樹</h4>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "保山產區 (Baoshan)",
                  tags: ["高海拔", "皇家寨", "昔歸風味"],
                  desc: "呈現顯著垂直氣候特徵（海拔500-3700米）。曾是鳳慶滇紅出口基地。「皇家寨」兼具易武之柔與冰島之香；「楠木渡」以八小時強回甘著稱。",
                  color: "from-amber-600 to-orange-700"
                },
                {
                  name: "臨滄產區 (Lincang)",
                  tags: ["冰島", "昔歸", "天價古樹"],
                  desc: "貢獻全省50%外匯收入。擁有冰島、懂過、大雪山等明星產地。香竹箐3200年古樹是活化石。2021年冰島鮮葉拍出千萬天價，創下稀缺性紀錄。",
                  color: "from-emerald-600 to-teal-700"
                },
                {
                  name: "普洱產區 (Simao)",
                  tags: ["茶馬古道", "景邁山", "邦崴"],
                  desc: "原思茅，被譽為「天然氧吧」。擁有1800年「邦崴過渡型古茶樹」與世界遺產「景邁山古茶林」。政府正推動有機種植與轉型升級。",
                  color: "from-stone-600 to-stone-800"
                },
                {
                  name: "西雙版納 (Xishuangbanna)",
                  tags: ["古六大", "班章為王", "易武為後"],
                  desc: "國際茶樹原產地中心，核心中的核心。區分古六大（易武、倚邦...）與新六大（班章、南糯...）。易武產區是老茶市場（同慶號）的統治級標杆。",
                  color: "from-rose-600 to-pink-800"
                }
              ].map((region, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl shadow-md border border-stone-100 group hover:-translate-y-1 transition-transform duration-300">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${region.color}`}></div>
                  <div className="p-6 pl-8 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className={`text-xl font-black bg-clip-text text-transparent bg-gradient-to-r ${region.color}`}>
                        {region.name}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {region.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs font-bold rounded shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[17px] text-stone-600 leading-snug">
                      {region.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Species & Process Detail */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-100 rounded-full text-emerald-700"><Leaf size={32} /></div>
                <h4 className="text-2xl font-bold text-stone-900">植物學特徵：雲南大葉種</h4>
              </div>
              <ul className="space-y-6">
                <li>
                  <div className="font-bold text-lg text-stone-800 mb-1">群體種（古樹原生）</div>
                  <p className="text-[17px] text-stone-600">
                    喬木型，為獲取陽光向上生長（如薄荷塘高杆），內含物質積累獨特。具備強烈的風土識別性。
                  </p>
                </li>
                <li>
                  <div className="font-bold text-lg text-stone-800 mb-1">無性系（台地茶）</div>
                  <p className="text-[17px] text-stone-600">
                    如雲抗系列，扦插繁殖，灌木形態。優點是品質穩定，適合規模化生產。
                  </p>
                </li>
                <li className="p-4 bg-red-50 rounded-xl border border-red-100 text-red-800/80 text-sm">
                  <strong>⚠️ 安全提示：</strong> 需區分「栽培型古樹」與「原生野生茶」。未經馴化的野生茶具輕微毒性，腸胃脆弱者慎飲。
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden group">
              {/* Inset Image - Tea Pavilion */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 -mr-8 -mt-8 rotate-12 transition-all group-hover:opacity-40 group-hover:scale-110 cursor-pointer" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-tea-pavilion.png', alt: '深山茶亭：工藝轉化的神聖空間' })}>
                <img src="/images/varieties/puer-ch03-tea-pavilion.png" alt="" className="w-full h-full object-cover rounded-full" />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700"><Sun size={32} /></div>
                <h4 className="text-2xl font-bold text-stone-900">工藝靈魂：曬青 (Sun-Dried)</h4>
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-[17px] text-stone-700">
                  普洱茶毛茶必須採用日光乾燥，<strong>嚴禁高溫烘乾</strong>（如綠茶的烘青/炒青）。
                </p>
                <div className="p-5 bg-stone-50 rounded-xl space-y-3">
                  {/* Full Width Image - Sundrying Process */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 shadow-md cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-sundrying.png', alt: '日光之恩：曬青工藝的活性保留' })}>
                    <img src="/images/varieties/puer-ch05-sundrying.png" alt="Sundrying" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-stone-900/10" />
                  </div>
                  <h5 className="font-bold text-stone-900 text-[18px]">機制對比：</h5>
                  <p className="text-[17px] text-stone-600">
                    高溫提香會切斷茶葉內部活性物質的生命力。唯有曬青保留了<strong>「活性酶」</strong>，使其能與空氣水分持續作用。
                  </p>
                  <div className="flex items-center gap-2 text-amber-700 font-bold mt-2">
                    <CheckCircle2 size={18} />
                    越陳越香的生物學基礎
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Morphology & Aging */}
          <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 space-y-8">
            <h3 className="text-2xl font-bold text-stone-900">成品形態與生化轉化</h3>
            <p className="text-[17px] text-stone-700">
              普洱茶的生命歷程在壓製成型的那一刻才真正「萌發」。
              根據雲南省農科所數據：<strong>散茶轉化香氣約40餘種，而緊壓餅茶可達90餘種。</strong>
              壓製不僅為了運輸，更是創造微環境促進香氣倍增的戰略。
            </p>

            {/* Atmosphere Visual - Timing/Aroma */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in mb-8" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-timing-xianxia.png', alt: '時間的恩澤：普洱茶在陳化中綻放的九十種香氣' })}>
              <img src="/images/varieties/puer-ch04-timing-xianxia.png" alt="Aroma Atmosphere" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-stone-900/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase opacity-80">Evolution of Scent</span>
                  <h4 className="text-white text-3xl font-black transition-transform group-hover:scale-110 duration-700">九十種香氣的綻放</h4>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-stretch">
              <div className="md:col-span-5 h-full relative rounded-2xl overflow-hidden shadow-lg group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/puerh_shapes.png', alt: '普洱茶經典形態' })}>
                <img
                  src="/images/puerh_shapes.png"
                  alt="Pu-erh Tea Shapes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-center font-bold">
                  點擊放大：經典緊壓形態
                </div>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 gap-4">
                {[
                  { icon: Disc, name: "七子餅 (357g)", desc: "主流收藏規格。模擬微環境最佳。" },
                  { icon: Box, name: "茶磚 (Brick)", desc: "早期便於馬幫運輸，發酵度通常較高。" },
                  { icon: Circle, name: "沱茶 (Tuo)", desc: "碗狀透氣性佳，適合特定轉化需求。" },
                  { icon: Gem, name: "龍珠 (Dragon Ball)", desc: "現代便攜一粒一泡，精緻化趨勢。" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="p-3 bg-stone-100 text-stone-600 rounded-full shrink-0">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-[18px] mb-1">{item.name}</div>
                      <div className="text-base text-stone-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      ),
    };
}
