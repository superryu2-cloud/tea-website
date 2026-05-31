import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ClickableImage from '../../components/ClickableImage';
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

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-emerald-50 via-white to-amber-50">
          <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900">{title}</h3>
        </div>
        <div className="px-5 py-5 md:px-7 md:py-6">
          <div className="space-y-6 text-stone-700 text-[17px] leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Placeholder({ children }) {
  return (
    <div className="museum-card museum-paper p-6">
      <div className="text-sm font-extrabold tracking-widest text-stone-500">DRAFT</div>
      <div className="mt-2 text-[17px] text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

function Subheading({ children }) {
  return <h4 className="text-xl md:text-2xl font-extrabold text-stone-900">{children}</h4>;
}

function Callout({ title, children }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-base font-extrabold tracking-widest text-amber-900/70">{title}</div>
      <div className="mt-3 text-[17px] text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

const Lightbox = ({ lightboxData, onClose }) => {
  if (!lightboxData) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <img
        src={lightboxData.src}
        alt={lightboxData.alt}
        className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
      />
      <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors" onClick={onClose}>
        <X size={48} />
      </button>
    </div>,
    document.body
  );
};

export default function PuerhEncyclopedia({ topOffsetPx, activeHref = '#puerh-1' }) {
  const [lightboxData, setLightboxData] = useState(null);


  const CHAPTERS = {
    '#puerh-1': {
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
    },
    '#puerh-2': {
      title: '二：普洱茶的前世今生',
      content: (
        <div className="space-y-16 font-sans">
          {/* Header */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/images/varieties/puerh/puerh_caravan_art.png" alt="Ancient Tea Horse Road Caravan" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/40 to-stone-900/20" />
            </div>

            <div className="absolute top-0 right-0 p-8 opacity-10 text-white z-0"><Clock size={180} /></div>

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 space-y-4">
              <span className="inline-block self-start px-4 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-500/30 text-amber-300 text-sm font-bold tracking-[0.2em] rounded-full uppercase">
                Historical Evolution
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                普洱茶的前世今生<br />
                <span className="text-xl md:text-2xl opacity-70 font-normal">從邊疆野菜到全球文化資產</span>
              </h2>
            </div>
          </div>

          {/* Intro */}
          <div className="space-y-6 text-[17px] text-stone-700 leading-relaxed">
            <h3 className="text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-4">前言：穿透時光的茶湯底蘊與戰略視野</h3>
            <p>
              了解普洱茶，不僅是學習一種飲品的沖泡與品鑑，更是一場橫跨數千年的文化溯源。它從荒野中的原始植被，演化為王公貴族的進貢珍品，乃至今日全球市場競逐的文化資產。
            </p>
            <p>
              本報告將深度解析普洱茶的發展脈絡，結構分為<strong>「1733年以前的前世」</strong>與<strong>「1733年至今的今生」</strong>。唯有洞悉其過去，方能掌握當代普洱茶的價值關鍵。
            </p>
          </div>

          {/* 1. The Past (Pre-1733) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm">壹</span>
              普洱茶的前世：從文獻記錄到茶祖傳說
            </h3>

            {/* Image: Ancient Tree / Ancestor */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-ancient-tree.png', alt: '茶王樹：千年的實物見證' })}>
              <img
                src="/images/varieties/puer-ch03-ancient-tree.png"
                alt="茶王樹：千年的實物見證"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">千年的實物見證：茶樹王</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-[19px] font-bold text-stone-900">文獻溯源與貢茶傳統</h4>
                <p className="text-[17px] text-stone-600 leading-relaxed">
                  早於商周，《華陽國志·巴志》即載雲南進貢「茶與蜜」。現存3200年「茶王樹」更是直觀震撼的實物見證。
                </p>
                <h4 className="text-[19px] font-bold text-stone-900 mt-6">茶祖諸葛亮與神話</h4>
                <p className="text-[17px] text-stone-600 leading-relaxed">
                  古六大茶山尊孔明為「茶祖」。傳說其以茶治軍中瘟疫，並教導夷民種茶。地名如「攸樂(丟落)」、「革登(馬鐙)」皆與其南征傳說相關。
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Box className="text-amber-700" size={24} />
                  <h4 className="text-[19px] font-bold text-stone-900">古代產區與形制</h4>
                </div>
                <ul className="space-y-3 text-[17px] text-stone-700">
                  <li className="flex gap-2"><span className="text-amber-500">•</span> <strong>唐代：</strong>樊綽《蠻書》界定「銀生城界諸山」產區。飲法加椒薑桂煮飲，以應對高濕寒冷。</li>
                  <li className="flex gap-2"><span className="text-amber-500">•</span> <strong>茶馬古道：</strong>唐代起入藏，「以茶易馬」。茶葉成為藏區補充維生素、消化酥油的戰略物資。</li>
                  <li className="flex gap-2"><span className="text-amber-500">•</span> <strong>清代盛世：</strong>道光帝御賜「瑞貢天朝」。雖明代曾廢團茶，雲南因地處邊疆保留了「緊壓」形制，成為標誌性特徵。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. The Present (Post-1733) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm">貳</span>
              普洱茶的今生：實物見證與品牌化
            </h3>
            <p className="text-[17px] text-stone-700">1733年是一個關鍵分水嶺，普洱茶從書面記錄進入「實物見證」時代。三大階段定義了當代市場格局。</p>

            {/* Image: Storage/Aging/History */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-storage-chamber.png', alt: '時間的宮殿：號級與印級茶的陳化空間' })}>
              <img
                src="/images/varieties/puer-ch03-storage-chamber.png"
                alt="時間的宮殿"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">時間的價值：號級茶與印級茶的傳奇</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cards for Eras */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-bold text-stone-400 mb-2">1733 - 1950</div>
                <h4 className="text-[19px] font-bold text-amber-700 mb-3">號級茶時代</h4>
                <p className="text-[17px] text-stone-600 leading-snug">
                  品牌意識萌芽。同心號、同慶號、宋聘號崛起。採用石磨壓製，設有內飛、大票防偽。如今為拍賣市場文物級珍品。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-bold text-stone-400 mb-2">1950 - 1972</div>
                <h4 className="text-[19px] font-bold text-red-700 mb-3">印級茶時代</h4>
                <p className="text-[17px] text-stone-600 leading-snug">
                  國營統一管理。昆明、勐海、下關三大廠。「八中」商標，紅印、藍印為代表。骨灰級老茶的代名詞。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-bold text-stone-400 mb-2">1972 - 1992</div>
                <h4 className="text-[19px] font-bold text-emerald-700 mb-3">七子餅與熟茶革命</h4>
                <p className="text-[17px] text-stone-600 leading-snug">
                  1973年「渥堆發酵」技術成功。人工加速陳化，月餘即達陳韻，推動普洱大眾化。「雲南七子餅」成為時代標誌。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all md:col-span-2 lg:col-span-3">
                <div className="text-xs font-bold text-stone-400 mb-2">1992 至今</div>
                <h4 className="text-[19px] font-bold text-sky-700 mb-3">現代：山頭主義與古樹審美</h4>
                <p className="text-[17px] text-stone-600 leading-snug">
                  市場經濟與民營化重生(2005-2007)。崩盤後回歸理性，轉向追求極致產區風土。
                  <br />
                  <strong>當代審美：</strong>老班章(霸氣)、冰島(冰糖甜)、易武(柔美細分)。
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-stone-900 rounded-3xl p-8 text-stone-300">
            <h4 className="text-xl font-bold text-white mb-4">結語：從歷史共感走向當代養生與審美</h4>
            <p className="text-[17px] leading-relaxed opacity-90">
              普洱茶從神話靈藥演變為當代工藝精品。每一杯茶湯背後，都凝結了茶馬古道的塵埃與百年老字號的堅持。
              希望讀者在品飲之際，能因這份歷史的共感，對這片來自雲南大山的葉子產生更深層次的感悟。
            </p>
          </div>
        </div>
      ),
    },
    '#puerh-3': {
      title: '三：普洱茶的分類',
      content: (
        <div className="space-y-16 font-sans">
          {/* Header */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/images/varieties/puer-ch03-misty-mountains.png" alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-100" />
              {/* Gradient for text readability - darker on left, lighter on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-900/60 to-stone-900/20" />
            </div>

            <div className="absolute top-0 right-0 p-8 opacity-10 text-white z-0"><Layers size={180} /></div>

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 space-y-4">
              <span className="inline-block self-start px-4 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-500/30 text-amber-300 text-sm font-bold tracking-[0.2em] rounded-full uppercase">
                Classification System
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                普洱茶分類全解析<br />
                <span className="text-xl md:text-2xl opacity-70 font-normal">從工藝、原料到倉儲的專業修煉指南</span>
              </h2>
            </div>
          </div>

          {/* 1. Processing (Raw vs Ripe) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-l-4 border-emerald-600 pl-4">
              一、 加工工藝：生茶與熟茶的本質差異
            </h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              加工工藝是決定普洱茶風味特徵與陳化潛力的核心基礎。在普洱茶的專業領域中，工藝的選擇不僅決定了茶葉初期的口感表現，更界定了市場上兩大核心需求：追求自然演變與時間轉化層次的「生茶」，以及追求即時溫潤與醇厚適飲性的「熟茶」。
            </p>

            {/* Preserved Image: Yin Yang Art (moved to be the visual anchor for this section) */}
            <div className="relative aspect-[2/1] md:aspect-[3/1] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_yin_yang_art.png', alt: '生茶與熟茶的藝術對比' })}>
              <img
                src="/images/varieties/puerh/puerh_yin_yang_art.png"
                alt="生茶與熟茶的藝術對比"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-transparent to-amber-900/60 pointer-events-none"></div>
              {/* Labels Overlay */}
              <div className="absolute inset-0 flex pointer-events-none">
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-emerald-800 font-black tracking-widest shadow-lg border border-emerald-100">
                    RAW (SHENG) <span className="hidden md:inline">· 生茶</span>
                  </div>
                </div>
                <div className="w-px bg-white/50 backdrop-blur"></div>
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="bg-stone-900/90 backdrop-blur-md px-6 py-3 rounded-full text-amber-500 font-black tracking-widest shadow-lg border border-amber-900/50">
                    RIPE (SHOU) <span className="hidden md:inline">· 熟茶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW IMAGE: Tea Pavilion */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in mb-8" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-tea-pavilion.png', alt: '深山古剎：茶葉的靈性轉化之地' })}>
              <img
                src="/images/varieties/puer-ch03-tea-pavilion.png"
                alt="深山古剎：茶葉的靈性轉化之地"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">深山古剎：茶葉的靈性轉化之地</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Raw Tea */}
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6 text-emerald-800">
                  <Leaf size={32} />
                  <h4 className="text-[22px] font-bold">生茶（自然發酵）</h4>
                </div>
                <div className="space-y-4 text-[17px] text-emerald-900/80">
                  <p>
                    <strong>核心：</strong>自然發酵。採摘後的鮮葉經殺青、揉捻與曬乾，製成毛茶後進入漫長的自我演化期。
                  </p>
                  <p>
                    <strong>特徵：</strong>新製生茶呈現墨綠色，湯色金黃明亮，香氣以高亢花香與蜜香為主。雖帶苦澀，但具備極強的<strong>「生回甘」 (Sheng Hui Gan)</strong>，韻味快速持久。
                  </p>
                  <p>
                    <strong>價值：</strong>隨著陳放時間增加，茶性被馴服，呈現「沉香中蘊含飄逸」的魅力。活力隨年份增長，具極高收藏與增值價值。
                  </p>
                </div>
              </div>

              {/* Ripe Tea */}
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6 text-amber-800">
                  <Coffee size={32} />
                  <h4 className="text-[22px] font-bold">熟茶（渥堆發酵）</h4>
                </div>
                <div className="space-y-4 text-[17px] text-amber-900/80">
                  <p>
                    <strong>核心：</strong>1973年發明之「渥堆發酵」。透過人工控制溫濕度與微生物活動，加速茶葉轉化。
                  </p>
                  <p>
                    <strong>特徵：</strong>湯色紅濃透亮如琥珀，香氣溫厚飽滿。微生物酵素將大分子分解為小分子，富含益生菌。
                  </p>
                  <p>
                    <strong>價值：</strong>性質溫和，不影響睡眠。具卓越的降脂、護胃功效，適合女性、長者或腸胃敏感者長期飲用。
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[17px] text-stone-500 italic">工藝賦予了普洱茶最基礎的生命底色，而原料的挑選與拼配邏輯，則進一步決定了產品的市場定位與穩定性。</p>
          </div>

          {/* 2. Raw Material */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-l-4 border-blue-600 pl-4">
              二、 原料用料：拼配、純料與單株的價值評估
            </h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              原料的選擇具備高度的戰略意義。不同的用料邏輯直接影響了茶品的口感平衡、市場穩定性以及其背後的文化稀缺價值。
            </p>

            {/* NEW IMAGE: Ancient Tree */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in my-6" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-ancient-tree.png', alt: '單株古樹：大地的孤獨守望者' })}>
              <img
                src="/images/varieties/puer-ch03-ancient-tree.png"
                alt="單株古樹：大地的孤獨守望者"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">單株古樹：大地的孤獨守望者</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4"><Disc size={24} /></div>
                <h4 className="text-[19px] font-bold text-stone-900 mb-2">拼配技術</h4>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">The Art of Blending</div>
                <p className="text-[17px] text-stone-600">
                  追求「優點互補」的藝術。將不同產區、年份原料融合（如以香氣補回甘），確保大宗產量標準化與品質穩定性（早期「數字茶」與「七子餅」的基石）。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm border-t-4 border-t-emerald-500">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4"><Mountain size={24} /></div>
                <h4 className="text-[19px] font-bold text-stone-900 mb-2">純料 (山頭茶)</h4>
                <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-3">Single Origin</div>
                <p className="text-[17px] text-stone-600">
                  追求風土極致的相對概念。強調同一產區（如老班章、冰島）、季節或樹齡的純粹性，展現特定土地的原始能量與「一山一味」。
                </p>
              </div>

              <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-2xl border border-amber-200 shadow-sm">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4"><Gem size={24} /></div>
                <h4 className="text-[19px] font-bold text-stone-900 mb-2">單株</h4>
                <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3">Single Tree</div>
                <p className="text-[17px] text-stone-600">
                  發燒友級的極致純粹。「一棵樹、一泡茶」，選自樹齡最老個體。內含物質極豐，膠質強烈，具獨特「孤獨感」與強大個體能量，價格不菲。
                </p>
              </div>
            </div>
            <p className="text-[17px] text-stone-500 italic">原料的用料方式決定了風味的廣度，而茶樹的生長方式則從根本上決定了這些原料的品質上限。</p>
          </div>

          {/* 3. Growth Method */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-l-4 border-purple-600 pl-4">
              三、 生長方式：野生、栽培與台地茶的品質層次
            </h3>

            {/* NEW IMAGE: Misty Mountains */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in my-6" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-misty-mountains.png', alt: '雲霧繚繞的茶山仙境' })}>
              <img
                src="/images/varieties/puer-ch03-misty-mountains.png"
                alt="雲霧繚繞的茶山仙境"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">高山雲霧出好茶：生長環境決定品質上限</p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex gap-6 group items-start">
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 shrink-0 mt-1"><TreePine size={28} /></div>
                <div>
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">野生茶：原始森林的饋贈</h4>
                  <p className="text-[17px] text-stone-700 leading-relaxed mb-2">
                    生長於高海拔原始森林（如哀牢山千家寨，樹齡2700年）。茶氣強、果膠質豐。需注意<strong>必須經過「馴化」</strong>，原始野生茶可能含微毒，需經年採摘管理趨於穩定後方可飲用。
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group items-start">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1"><Award size={28} /></div>
                <div>
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">栽培型古樹茶：人類智慧與自然的融合</h4>
                  <p className="text-[17px] text-stone-700 leading-relaxed mb-2">
                    市場推崇的「家茶」，源於先民馴化。兼具安全性與極佳口感（如鳳慶3200年茶王）。
                  </p>
                  <p className="text-[17px] text-emerald-700 font-medium">
                    * 價值指標：2021年曾創下10公斤鮮葉10.68萬人民幣的拍賣紀錄。
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group items-start">
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 shrink-0 mt-1"><TrendingUp size={28} /></div>
                <div>
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">台地茶：現代農業的產物</h4>
                  <p className="text-[17px] text-stone-700 leading-relaxed mb-3">
                    1949年後推廣的密植型茶園，高產但需人工干預。
                  </p>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">曲線差異：古樹 vs 台地</strong>
                    <ul className="text-[17px] text-stone-600 space-y-1">
                      <li>• <strong>古樹茶：</strong>如「深交好友」。拋物線狀，第4-7泡達頂峰，耐泡回甘。</li>
                      <li>• <strong>台地茶：</strong>如「初見驚艷的過客」。直線下墜，前兩泡香高，隨後迅速掉水，缺乏喉韻。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[17px] text-stone-500 italic">釐清了茶樹的血統與背景後，這些原料最終被賦予的物理形態，同樣承載了歷史運輸與微環境轉化的功能。</p>
          </div>

          {/* 4. Shape */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-4">
              四、 外形形態：適應運輸與保存的多樣包裝
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Forms */}
              {[
                { title: "餅茶", icon: Disc, desc: "標準357g。源於茶馬古道運力計算：七餅一筒(2.5kg)，馬馱雙邊30kg。" },
                { title: "沱茶", icon: Circle, desc: "碗狀，100g/250g。多採細嫩芽葉壓製，毫香細膩，活性強。" },
                { title: "磚茶", icon: Box, desc: "250g長方磚。銷往邊境，高壓緊實。內部微環境穩定，陳放20-30年易出藥香。" },
                { title: "龍珠 / 散茶", icon: Droplet, desc: "龍珠精確一泡，高端單株首選。散茶便於觀料，但易跑氣串味，需嚴密保存。" },
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="text-amber-600" size={24} />
                    <strong className="text-[19px] text-stone-900">{item.title}</strong>
                  </div>
                  <p className="text-[17px] text-stone-600 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Storage */}
          <div className="bg-stone-100 rounded-3xl p-8 border border-stone-200">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
              <Box className="text-stone-700" size={28} />
              五、 倉儲環境：乾倉與濕倉的價值轉向
            </h3>
            <p className="text-[17px] text-stone-700 mb-6">「普洱茶是活的」，倉儲作為「第二次發酵」，是品質的決勝點。</p>

            {/* NEW IMAGE: Storage Chamber included in layout */}
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 group cursor-zoom-in h-64 md:h-auto order-last md:order-first" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-storage-chamber.png', alt: '乾倉儲存：時間的宮殿' })}>
                <img
                  src="/images/varieties/puer-ch03-storage-chamber.png"
                  alt="乾倉儲存：時間的宮殿"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-4">
                  <p className="text-white text-sm font-bold">乾倉環境：通風、陰涼、無雜味</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-emerald-500 flex-1">
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">乾倉普洱：時間的純淨禮讚</h4>
                  <p className="text-[17px] text-stone-600">
                    濕度 &lt;70%，通風潔淨。茶葉緩慢自然轉化，無雜味。隨時間演化出花蜜→棗香→藥香，市場增值空間穩定。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-red-500 flex-1">
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">濕倉普洱：商業加速與風險</h4>
                  <p className="text-[17px] text-stone-600">
                    早期商業行為，利用高溫高濕（地窖等）強迫加速。極易滋生黴菌，常用於製作低價快銷茶。<strong>養生原則：如有雜味或鎖喉，應避免飲用。</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-stone-300 rounded-3xl p-8 shadow-xl">
            <h4 className="text-xl font-bold text-white mb-4">結語：建構個人化的普洱修煉體系</h4>
            <p className="text-[17px] leading-relaxed opacity-90">
              理解普洱茶在工藝、原料、生長、外形與倉儲五大維度的分類，是建構專業評鑑架構的第一步。
              這套體系不僅是知識的累積，更是為了讓愛茶者能根據自身體質（如寒性體質者宜選熟茶）與季節場景做出最科學的選擇。
              建議讀者在實踐中反覆體會，從茶湯的弧線起伏到「生回甘」的持久度，在杯盞之間領略這片葉子在時光洗禮下的非凡生命力。
            </p>
          </div>
        </div>
      ),
    },
    '#puerh-4': {
      title: '四：普洱茶的品鑑方式',
      content: (
        <div className="space-y-16 font-sans text-stone-700">
          {/* Hero Section (Chapter 10 Style) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-rhyme.png', alt: '普洱品鑑：身心對話的藝術' })}
          >
            <img
              src="/images/varieties/puer-ch04-rhyme.png"
              alt="普洱品鑑"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end text-left">
              <span className="inline-block self-start px-4 py-1.5 bg-emerald-100/20 backdrop-blur border border-emerald-200/30 text-emerald-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                Art of Tasting
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight shadow-sm">
                普洱茶高手修煉秘籍<br />
                <span className="text-2xl md:text-3xl opacity-80 font-normal">普洱茶品鑑八法全解析</span>
              </h2>
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 border-l-4 border-emerald-600 pl-4">1. 普洱茶品鑑的審美概論與綜合維度</h3>
            <p className="text-[17px] leading-relaxed">
              品鑑普洱茶並非單純的口舌之慾，而是一場橫跨視覺、嗅覺、味覺、體感乃至精神層次的綜合感官藝術。在進入普洱茶的殿堂前，我們首先要建立正確的審美坐標。正如世間美人有「北方之雄健」與「南方之婉約」的差異，六大茶類的審美標準亦各具靈魂：白茶賞其「毫香」與清甜，綠茶重其「鮮爽」與春意，黑茶品其「醇厚」與飽滿，黃茶則取其醇和與獨特香氣。
            </p>
            <p className="text-[17px] leading-relaxed">
              普洱茶的特殊之處，在於它是一個動態的生命體。其審美不僅限於當下的滋味，更在於透過茶湯感知茶樹的生命能量。透過對「茶氣」與「茶韻」的捕捉，品鑑者能達成深度的身心對話。要真正讀懂一杯茶，必須系統化地運用「品鑑八法」，從外在環境的變量開始，一步步深入茶魂。
            </p>
          </div>

          <div className="space-y-12">
            {/* Method 1: Timing */}
            <div className="grid md:grid-cols-2 gap-10 bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
                  <Cloud className="text-sky-500" size={28} />
                  2. 品鑑第一法：茶時——環境因素對感官的系統影響
                </h3>
                <p className="text-[17px] mb-4">高手品茶，必先感知「天時」。自然環境不僅決定了茶湯的即時表現，更修正了品鑑者的審美偏差。</p>
                <ul className="space-y-4 text-[17px]">
                  <li><strong className="text-stone-900">天氣與香氣：</strong> 晴空萬里時，空氣乾燥，茶葉中的芳香物質易於隨水分釋放，香氣高揚奪人。反之，雨天低氣壓、高濕度，會使香氣受困於湯中，產生「悶感」。</li>
                  <li><strong className="text-stone-900">溫度與心理審美：</strong> 飲茶者的感官會隨地理座標遷移。在哈爾濱的冰天雪地中，人本能追求熟茶的「厚度」與暖意；而在西雙版納、三亞等溫潤地區，生茶的層次感與清潤則能發揮到極致。</li>
                  <li><strong className="text-stone-900">海拔與物理萃取：</strong> 海拔決定沸點。在高原水溫難達 100 度，影響內含物質提取深度。低海拔（如台灣）沸水可達 101 度，能將茶葉物質萃取得更為徹底。</li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-timing-xianxia.png', alt: '天時與地利：高山雲霧出好茶' })}>
                <img
                  src="/images/varieties/puer-ch04-timing-xianxia.png"
                  alt="天時與地利：高山雲霧出好茶"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-center text-white text-sm">
                  高海拔雲霧繚繞的仙俠意境
                </div>
              </div>
            </div>

            {/* Method 2 & 3: Appearance & Aroma */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
                  <Eye className="text-stone-600" size={28} />
                  3. 品鑑第二法：外形
                </h3>
                <p className="text-[17px]">茶餅是歷史的切片，其外形直接揭露工藝與倉儲。</p>
                <div className="space-y-3 text-[17px]">
                  <p><strong>視覺觀察：</strong> 條索應緊結、油潤發亮。灰暗無光則品質存疑。</p>
                  <p><strong>乾倉指標：</strong> 條索清晰油亮。早期工藝偶見異物（茶果、雞毛），現代工藝追求極致潔淨。</p>
                  <div className="p-4 bg-stone-100 rounded-xl mt-4">
                    <strong className="block text-stone-800 mb-2">大師實操：乾聞技巧</strong>
                    <span className="text-base text-stone-600">注水前深嗅茶餅。優質茶應帶有淡淡的「梅子香」或木質香，且伴隨清涼感。酸味、黴味代表存放失當。</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
                  <Wind className="text-purple-600" size={28} />
                  4. 品鑑第三法：香氣
                </h3>
                <p className="text-[17px]">嗅覺維度的三維評估法：</p>
                <ul className="list-decimal pl-5 space-y-3 text-[17px]">
                  <li><strong>高低（擴散度）：</strong> 是撲面而來，還是隱於杯底。</li>
                  <li><strong>長短（持久度）：</strong> 香氣應沈入湯中形成「水含香」，吞嚥後依然縈繞。</li>
                  <li><strong>濃淡（豐富度）：</strong> 單一香氣單薄，花果蜜交織則迷人。</li>
                </ul>
                <p className="text-[17px] mt-4">
                  <strong>年份感：</strong> 老茶追求安定。木質香、藥香能讓人神安氣定（如高僧打坐前飲用）。
                </p>
              </div>
            </div>

            {/* Method 4: Color (1:1 Ratio) */}
            <div className="grid md:grid-cols-2 gap-10 bg-stone-50 rounded-3xl p-8 border border-stone-200">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
                  <Droplet className="text-amber-500" size={28} />
                  5. 品鑑第四法：湯色——流動的品質檢驗標準
                </h3>
                <p className="text-[17px] leading-relaxed">
                  湯色是反映發酵工藝與倉儲健康的「鏡子」。
                </p>
                <ul className="space-y-4 text-[17px]">
                  <li><strong className="text-stone-900">唯一標準：晶瑩透亮。</strong> 不論生熟，透光度是高品質的唯一共性。</li>
                  <li><strong className="text-stone-900">瑕疵辨識：</strong> 渾濁、灰暗或「醬油色」，通常源於工藝瑕疵（炒焦）或受潮變質。</li>
                  <li><strong className="text-stone-900">光學美感：</strong> 優質熟茶在強光下會展現迷人的「金圈」效應。</li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-color.png', alt: '茶湯色澤標準' })}>
                <img
                  src="/images/varieties/puer-ch04-color.png"
                  alt="茶湯色澤標準"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-center text-white text-sm">
                  左：渾濁劣質 vs 右：晶瑩透亮(金圈)
                </div>
              </div>
            </div>

            {/* Method 5 & 6: Taste & Activity */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
                  <Coffee className="text-amber-700" size={28} />
                  6. 品鑑第五法：滋味
                </h3>
                <p className="text-[17px]">普洱茶內含物質豐富，必須具備「骨架」。</p>
                <ul className="space-y-3 text-[17px]">
                  <li><strong>苦澀與回甘：</strong>「苦能回甘，澀能生津」。若僅有苦澀無轉化，多為台地茶。</li>
                  <li><strong>水路特質：</strong>
                    <ul className="pl-4 mt-2 space-y-2 text-base text-stone-600">
                      <li>• <strong>細膩如絲（曼鬆）：</strong> 入口即滑，直達丹田。</li>
                      <li>• <strong>寬廣如海（老班章）：</strong> 宏大有力，衝擊力強。</li>
                    </ul>
                  </li>
                  <li><strong>質感評鑑：</strong> 壓舌感、果膠感（黏稠度）。</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-emerald-900 border-b pb-4 border-emerald-200">
                  <Zap className="text-emerald-600" size={28} />
                  7. 品鑑第六法：活性 (核心魅力)
                </h3>
                <p className="text-[17px] text-emerald-900">
                  「活性」是區分普洱茶與一般飲品的界碑，也是「越陳越香」的動力。
                </p>
                <div className="space-y-4 text-[17px] text-emerald-800">
                  <p><strong>微生物的養分：</strong> 物質基礎是「糖苷類」。養分充足，轉化才到位。</p>
                  <p><strong>感官特徵：</strong> 喉部極為明顯的「清涼感」，伴隨強烈回甘。</p>
                  <div className="p-3 bg-white/60 rounded-lg italic">
                    「資深茶客有時不聞香氣，只看活性。滋味飽滿活性足，未來必有驚人潛力。」
                  </div>
                </div>
              </div>
            </div>

            {/* Method 7: Leaf Bottom */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-4">
                <Leaf className="text-green-600" size={28} />
                8. 品鑑第七法：葉底——最後的實體品質複核
              </h3>
              <p className="text-[17px] mb-4">葉底是真相的終點，它不會說謊。</p>
              <div className="grid md:grid-cols-2 gap-6 text-[17px]">
                <div>
                  <strong className="block text-stone-900 mb-2">物理測試（揉搓法）</strong>
                  <span>用手輕輕揉搓。優質葉底應具彈性與柔韌度。若一揉即爛如「稀泥」，代表發酵過度或工藝受損。</span>
                </div>
                <div>
                  <strong className="block text-stone-900 mb-2">實體辨認</strong>
                  <span>觀察老嫩度、勻度及色澤。檢查有無焦味、紅梗。現代工藝葉底應鮮活潔淨。</span>
                </div>
              </div>
            </div>

            {/* Method 8: Rhyme (1:1 Ratio) */}
            <div className="grid md:grid-cols-2 gap-10 bg-stone-900 text-stone-300 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-2">
                  <Smile className="text-amber-400" size={28} />
                  9. 品鑑第八法：茶韻——體感、氣韻與靈魂
                </h3>
                <p className="text-[17px] opacity-90">
                  這是品鑑的最高境界，是從感官享受向生命能量感知的昇華。
                </p>
                <div className="space-y-4 text-[17px]">
                  <div>
                    <strong className="text-white">體感與茶氣：</strong>
                    <ul className="pl-4 mt-2 space-y-1 opacity-80">
                      <li>• <strong>出汗：</strong> 多自後背或額頭滲出。</li>
                      <li>• <strong>排氣：</strong> 打嗝，氣體通暢表現。</li>
                      <li>• <strong>聚氣：</strong> 腹部「暖的一團」，溫熱舒適。</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">三韻結構：</strong>
                    <span className="opacity-80">陳韻 (歲月厚度)、喉韻 (深邃持久)、神韻 (心靈共鳴)。</span>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                    <strong className="block text-amber-400 mb-2">品鑑百科：人格化體系</strong>
                    <ul className="space-y-1 text-sm md:text-base">
                      <li><strong>老班章：</strong> 霸道總裁。氣場強大，尾湯極甜。</li>
                      <li><strong>老曼峨：</strong> 剛烈英雄。苦盡甘來，性格鮮明。</li>
                      <li><strong>曼鬆：</strong> 仙界仙子。氣質高雅，水路極細。</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-700 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-rhyme.png', alt: '茶韻體感' })}>
                <img
                  src="/images/varieties/puer-ch04-rhyme.png"
                  alt="茶韻體感"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center text-stone-300 text-sm">
                  氣感流動與身心安頓的冥想境界
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-900 text-emerald-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Filter size={120} /></div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">10. 結語：建立個人的品鑑體系</h4>
              <p className="text-[17px] leading-relaxed relative z-10 opacity-90">
                普洱茶品鑑八法是一個環環相扣的閉環系統。從觀察天時海拔，到剖析物理外形，再到感知體感茶氣，每一層次都是在深化我們對這一片葉子的理解。
                真正的普洱高手，能將這套系統內化為一種生活美學。在日常實踐中，試著將手中的每一杯茶想像成身邊的一個人，感受其性格是霸氣還是溫婉。當你能在盞茶之間讀懂生活的韻律，喝茶便不再只是消遣，而是一場修行。讓我們在普洱的芬芳中，觀照自我，通達四肢，領悟生命的真意。
              </p>
            </div>
          </div>
        </div>
      ),
    },
    '#puerh-5': {
      title: '五：普洱生茶的製作工藝',
      content: (
        <div className="space-y-16 font-sans text-stone-700">
          {/* Hero Section (Chapter 10 Style) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-sundrying.png', alt: '日光曬青：普洱茶的靈魂工序' })}
          >
            <img
              src="/images/varieties/puer-ch05-sundrying.png"
              alt="日光曬青"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end text-left">
              <span className="inline-block self-start px-4 py-1.5 bg-amber-100/20 backdrop-blur border border-amber-200/30 text-amber-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                Art of Processing
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight shadow-sm">
                普洱生茶製作工藝全解析<br />
                <span className="text-2xl md:text-3xl opacity-80 font-normal">從茶園鮮葉到歲月陳化的修煉細節</span>
              </h2>
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-4">普洱生茶工藝總論：從葉片到茶湯的蛻變旅程</h3>
            <p className="text-[17px] leading-relaxed">
              普洱生茶的魅力，不僅在於其跨越時空的文化底蘊，更在於其作為「活的有機體」所展現的生命韌性。掌握普洱生茶的製作工藝，是洞察其品質真諦與預判後續陳化價值的戰略基石。這是一場從原始森林的翠綠葉片，經歷水火交融與物理塑形，最終昇華為杯中金黃透亮茶湯的生命修煉。
            </p>
            <p className="text-[17px] leading-relaxed">
              普洱生茶的誕生，是一個由鮮葉採摘、攤青、殺青、揉捻、曬乾、壓制、晾乾到最終包裝構成的嚴謹工藝鏈條。每一個細微的火候拿捏與力道掌控，都精準決定了內含物質的留存比例及其在未來數十年間轉化的可能性。一切的歲月驚喜，皆始於對雲南高山森林中那抹綠意的最初致敬。
            </p>
          </div>

          {/* Section 1: Picking */}
          <div className="grid md:grid-cols-2 gap-10 bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
                <Leaf className="text-emerald-600" size={28} />
                鮮葉採摘：工藝源頭的標準與勞務分工
              </h3>
              <p className="text-[17px] mb-6">
                普洱茶的工藝起源於對自然資源的精準獲取。在雲南，優質的古樹茶往往生長於山勢險峻、樹體高大的原始環境，這決定了其採摘必須摒棄機械，完全依賴人工。
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <strong className="block text-lg text-stone-800 mb-2">手工採摘的必然</strong>
                  <p className="text-[17px]">古樹長勢參差不齊，採茶人必須親自攀爬、穿梭於枝幹間，這種勞動強度與對葉片完整性的保護，是機械化作業無法企及的。</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <strong className="block text-lg text-stone-800 mb-2">「一芽二葉」的技術標準</strong>
                  <p className="text-[17px]">目前公認的標準為「一芽二葉」。採摘時，茶人以食指與拇指輕巧夾住芽尖，順著生長方向精準發力掐下，確保葉底完整。</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <strong className="block text-lg text-stone-800 mb-2">產出轉化比</strong>
                  <p className="text-[17px]">每一公斤乾毛茶的背後，都需要 4 至 5 公斤鮮葉的奉獻，這也奠定了高端普洱茶的價值基礎。</p>
                </div>
              </div>
              <p className="mt-6 text-[17px] italic text-stone-500">
                當鮮葉離開母樹，內部的化學鐘已開始滴答作響，隨即進入初步轉化的關鍵階段——攤青。
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-picking-xianxia.png', alt: '險峰古樹：採茶人的極限挑戰' })}>
              <img
                src="/images/varieties/puer-ch05-picking-xianxia.png"
                alt="險峰古樹：採茶人的極限挑戰"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-center text-white text-sm">
                古茶樹多生長於雲霧繚繞的險峰之上
              </div>
            </div>
          </div>

          {/* Section 2: Withering */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
              <Wind className="text-blue-500" size={28} />
              攤青與萎凋：內含物質的初步轉化機制
            </h3>
            <div className="text-[17px] space-y-4">
              <p>攤青（實務中亦常與萎凋並論）是調節普洱生茶「骨架」與提升香氣的靈魂步驟。</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-stone-900">化學與風味的重塑：</strong> 透過水分的適度流失，促使酯型兒茶素轉化為非酯型兒茶素，這對於降低普洱茶初期的苦澀感至關重要。同時，蛋白質水解產生的氨基酸會大幅提升茶湯的鮮爽度。
                </li>
                <li>
                  <strong className="text-stone-900">「苦澀為骨」的邏輯：</strong> 與追求香氣高亢的烏龍茶不同，普洱生茶的攤青時間相對較短，目的是為了「鎖住」更多的內含物質。雖然新茶初期會顯得苦澀度較高，但這正是支撐未來數十年轉化的「骨架」，確保茶湯在歲月中愈發甘醇。
                </li>
                <li>
                  <strong className="text-stone-900">兩階段攤青的匠心：</strong> 在原始森林深處，茶人會在採摘現場的竹片小屋進行初步攤放，避免鮮葉堆疊因「悶熟」而產生紅變。待黃昏運回家中後，再進行二次攤青，直到茶梗「折而不斷」，方為殺青的最佳時機。
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Kill Green (Shaqing) */}
          <div className="grid md:grid-cols-2 gap-10 bg-stone-900 text-stone-100 rounded-3xl p-8 shadow-xl">
            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
                <Flame className="text-red-500" size={28} />
                殺青工藝：高溫下的生命活性保衛戰
              </h3>
              <p className="text-[17px] opacity-90">
                殺青是普洱生茶工藝中最具技術含量、也最能展現大師功底的環節。這不僅是去水，更是對酶活性的精確鈍化。
              </p>
              <ul className="space-y-4 text-[17px] opacity-90">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>悶抖結合的火候：</strong> 針對大葉種含水量高的特性，師傅需採取「悶」與「抖」交替的手法，讓葉片在翻炒中均勻失水。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>溫度的精密動態：</strong> 鍋溫需維持在約 250 度，但葉片受熱溫度必須精控在 80 至 90 度之間。這與綠茶追求「徹底終止活性」的理念完全不同。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>「鐵沙掌」的專業堅持：</strong> 資深師傅往往拒絕佩戴手套。長年累月在鐵鍋中翻炒，讓他們的手掌佈滿厚繭，練就了傳說中的「鐵沙掌」。唯有皮膚直接與茶青接觸，才能最精準地感應葉片的柔軟度與溫度變化。</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-600 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-shaqing.png', alt: '工藝核心：高溫殺青' })}>
              <img
                src="/images/varieties/puer-ch05-shaqing.png"
                alt="工藝核心：高溫殺青"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-center">
                <p className="text-sm text-stone-300">大師手感：與溫度共舞的鐵沙掌</p>
              </div>
            </div>
          </div>

          {/* Section 4: Rolling */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
              <Disc className="text-purple-600" size={28} />
              揉捻與條索成型：風味物質的釋放與塑形
            </h3>
            <p className="text-[17px] leading-relaxed">
              完成殺青後，茶葉已呈半熟且柔軟的狀態，隨即進入透過物理力量破壞細胞的「揉捻」階段。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <strong className="block text-xl text-purple-900 mb-3">內含物質的定格</strong>
                <p className="text-[17px] text-purple-900/80">
                  揉捻的核心目的是適度破壞細胞組織，使茶汁與果膠滲出並依附在葉片表面。這不僅讓茶葉更容易定型為緊實的條索，更確保了沖泡時茶味的迅速釋放。
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <strong className="block text-xl text-purple-900 mb-3">因葉制宜</strong>
                <p className="text-[17px] text-purple-900/80">
                  嫩葉需「輕揉、短時」，老葉則需「重揉、長時」。古樹茶堅持手工揉捻，因為雙手能即時回饋果膠滲出的黏稠狀態，確保每一根條索都得到最溫柔且恰到好處的物理對待。
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Sun Drying */}
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-amber-900 mb-6">
              <Sun className="text-amber-500" size={28} />
              日光曬青：吸收大自然能量的關鍵步驟
            </h3>
            <div className="space-y-4 text-[17px] text-stone-700">
              <p>在乾燥環節，普洱茶與其他茶類最大的分水嶺在於對「日光」的堅持。</p>
              <div className="flex flex-col gap-4">
                <div className="bg-white/60 p-4 rounded-lg">
                  <strong className="text-amber-800">自然能量的注入：</strong>
                  <span> 日光曬青被茶人視為「陽氣」的灌注。在日照下，茶葉一邊褪去多餘水分，一邊最大程度地保留了有機質與活性。</span>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border-l-4 border-red-500">
                  <strong className="text-red-700">嚴禁烘乾的紅線：</strong>
                  <span> 普洱生茶絕不能使用烘乾房。烘乾會徹底殺滅活性物質，導致茶葉失去未來轉化的潛力。最理想的曬青毛茶，應在「一日之內完全曬乾」，如此產出的毛茶香氣最為濃郁且具有鮮活的穿透力。</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 & 7: Pressing & Drying */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
              <Hammer className="text-stone-600" size={28} />
              稱重、壓制與晾乾：標準與傳統的結合
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6 text-[17px]">
                <p>當前述步驟完成，產出的即為「曬青毛茶」。隨後，這些茶葉將根據市場需求進行標準化壓制。</p>
                <div className="space-y-4">
                  <div>
                    <strong className="block text-lg font-bold text-stone-800">1. 經典與現代規格</strong>
                    <p>傳統上以單餅 357 克、七餅一筒（2.5公斤）的「七子餅」為核心標準。現代則演化出 200g、100g 甚至 7g 龍珠等多元規格。</p>
                  </div>
                  <div>
                    <strong className="block text-lg font-bold text-stone-800">2. 壓制流程</strong>
                    <p>將毛茶精確稱重後，透過蒸汽蒸濕使其回軟，再放入模具成型。傳統石磨壓制能賦予茶餅適度的緊實度與透氣性，對於長期的均勻轉化極為有利。</p>
                  </div>
                  <div>
                    <strong className="block text-lg font-bold text-stone-800">3. 晾乾與含水量控制 (13% vs 5%)</strong>
                    <p>茶餅需陰乾，含水量必須低於 13% (防霉天花板)，但不可低於 5% (生命地板)，否則將失去轉化活性。</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-pressing.png', alt: '傳統工藝：石磨壓餅' })}>
                <img
                  src="/images/varieties/puer-ch05-pressing.png"
                  alt="傳統工藝：石磨壓餅"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-4 text-center">
                  <p className="text-sm text-stone-100">傳統石磨壓制：鬆緊適度的藝術</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Packaging */}
          <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100 space-y-4">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
              <Gift className="text-emerald-600" size={28} />
              包裝與防護藝術：棉紙與筍殼
            </h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              最後的包裝環節是普洱生茶「微型存儲環境」的第一道防線。內層以食品級白棉紙包裹；外層則使用<strong>天然竹筍殼</strong>進行扎筒。筍殼防潮、避光且透氣，是普洱茶的最佳搭檔。
              <br /><br />
              <strong className="text-stone-900">職人細節：</strong>筍殼在包裝前需經過嚴謹處理。先經日曬與陰乾，包裝前必須進行<strong>「炒水」</strong>（適度噴水滋潤），使原本乾脆的筍殼變韌，否則「會脆、會爛掉」。
              扎筒後，師傅會使用瓦斯火槍進行「火烤」，既能去除刺手的毛邊，更能透過高溫殺滅蟲卵。傳統筍殼所賦予的「古早味」與獨特的存儲微氣候，依然是藏家的至高追求。
            </p>
          </div>

          {/* Aging Table */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
              <Clock className="text-amber-700" size={28} />
              歲月轉化：生茶湯色的動態演變觀察
            </h3>
            <p className="text-[17px] text-stone-700">普洱生茶之所以被稱為「可以喝的古董」，在於其湯色隨時間流轉的動態美感。以下為廣東存撥（南方倉儲）環境下的典型演變路徑：</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { age: "1 - 2 年", title: "淺黃綠色", desc: "清澈剔透，充滿森林新茶的活力", color: "bg-[#e8f5e9] border-[#c8e6c9] text-emerald-900" },
                { age: "3 - 5 年", title: "金黃轉橙", desc: "青味褪去，湯色開始顯現紅潤調性", color: "bg-[#fff8e1] border-[#ffecb3] text-amber-900" },
                { age: "5 - 8 年", title: "琥珀紅色", desc: "轉化加速，呈現飽滿的琥珀光澤", color: "bg-[#fff3e0] border-[#ffe0b2] text-orange-900" },
                { age: "8 - 15 年", title: "朱紅色", desc: "色澤轉趨溫潤，苦澀轉化為甘醇", color: "bg-[#fbe9e7] border-[#ffccbc] text-red-900" },
                { age: "15 - 30 年", title: "寶石紅", desc: "質地晶瑩，展現陳年茶的穩重感", color: "bg-[#ffebee] border-[#ffcdd2] text-rose-900" },
                { age: "30 年以上", title: "酒紅色", desc: "紅濃透亮，展現極致純和的藥香或陳香", color: "bg-[#f3e5f5] border-[#e1bee7] text-purple-900" },
              ].map((item, idx) => (
                <div key={idx} className={`p-5 rounded-xl border-2 ${item.color} transition-transform hover:scale-105 shadow-sm`}>
                  <div className="font-black text-xl mb-1">{item.age}</div>
                  <div className="font-bold opacity-80 mb-2 border-b border-black/10 pb-2">{item.title}</div>
                  <p className="text-[16px] leading-snug opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-500 italic text-center">* 以上轉化速度受環境濕度影響顯著，乾倉環境下的轉化節奏會相對延後。</p>
          </div>

          {/* Conclusion */}
          <div className="bg-stone-900 text-stone-300 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Check size={120} /></div>
            <h4 className="text-xl font-bold text-white mb-4 relative z-10">結語：人與自然的極簡協奏</h4>
            <p className="text-[17px] leading-relaxed relative z-10">
              普洱生茶的工藝，完美詮釋了「頂級食材僅需簡單烹飪」的藝術。這是一種極低人為干預的修煉，工藝師的角色並非改變大自然，而是透過精準的技術，將大自然的能量與山頭的韻味「鎖」在葉片中，隨後將主導權交還給時間與微生物。
              每一餅普洱生茶都像是一個在時間中不斷成長的孩子，每一年都能帶給茶人意想不到的驚喜。當您理解了這套嚴密的工藝修煉，方能讀懂那杯苦盡甘來中，所蘊含的人心厚度與歲月真味。
            </p>
          </div>
        </div>
      ),
    },
    '#puerh-6': {
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
    },
    '#puerh-7': {
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
    },
    '#puerh-8': {
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
    },
    '#puerh-9': {
      title: '九：普洱茶的香氣與感官密碼',
      content: (
        <div className="space-y-16">
          {/* Intro Hero */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] group">
            <img
              src="/images/varieties/puerh/puerh_sensory_pathways.png"
              alt="Sensory Pathways - 香氣感知的生理共鳴"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600/90 backdrop-blur border border-amber-500/50 text-amber-50 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                  <BrainCircuit size={14} /> Advanced Sensory
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  普洱茶的高階修煉：<br />解鎖香氣與感官的深度密碼
                </h2>
                <p className="text-stone-200 text-[19px] font-light leading-relaxed border-l-4 border-amber-500 pl-6">
                  香氣不僅是引領感官的第一觸媒，更是決定整場品飲體驗愉悅基調的戰略核心。這是一場由表及里、從嗅覺神經延伸至身體內部律動的生理共鳴。
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Sensory Pathways */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center text-sm">壹</span>
                  香氣感知的核心途徑
                </h3>
                <div className="space-y-6 text-[17px] text-stone-700 leading-relaxed">
                  <div>
                    <strong className="text-amber-700 block mb-2 text-lg">【鼻腔感知：芳香物質的即時性捕獲】</strong>
                    <p>
                      當沸水與乾茶交融，芳香物質隨熱氣蒸騰擴散，形成「撲面而來」的即時衝擊。這是品飲者對一款茶最直觀的初步辨識，透過鼻腔纖毛捕捉花香、蜜香或果香，這種即時感官反饋往往能瞬間提升情緒的適意性。高質量的普洱鮮葉在攤晾時，其香氣之馥郁足以令身心通透，展現出芳香物質「通竅、辟邪、舒暢」的生理與精神價值。
                    </p>
                  </div>
                  <div>
                    <strong className="text-amber-700 block mb-2 text-lg">【口腔感知：水含香與深層共振】</strong>
                    <p>
                      更為深邃的境界則源於「口鼻相連」的生理機制。茶湯入喉，部分水氣隨之回傳至鼻腔後部，形成普洱茶特有的「口齒留香」與「水含香」。一款具備卓越生命力的普洱茶，其香氣必須在鼻腔與口腔感受上具備高度的連貫性——從開湯時的嗅覺驚艷，到下嚥後茶湯反饋而上的感官回味，甚至能體現出香氣從體內徐徐升騰、反哺感官的深度體驗。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 group">
              <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-black/60 backdrop-blur rounded-lg text-white text-sm font-bold tracking-wider">
                VISUALIZING AROMA
              </div>
              <img
                src="/images/varieties/puerh/puerh_sensory_pathways.png"
                alt="The flow of aroma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Section 2: The Four Codes */}
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">貳、普洱茶香氣的四大密碼</h3>
              <p className="text-[17px] text-stone-600">
                建立系統化的品鑑思維，需將香氣拆解為四個決定性維度：天賦、地緣、時令與工藝。這不僅是感官的指引，更是解構山頭文化與轉化規律的理論基礎。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Code 1: Varietal */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-lg group cursor-zoom-in font-sans"
                onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_varietal_dna.png', alt: 'Varietal Aroma DNA' })}
              >
                <img
                  src="/images/varieties/puerh/puerh_varietal_dna.png"
                  alt="Varietal Aroma DNA"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
                  onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_varietal_dna.png', alt: 'Varietal Aroma DNA' })}
                />
                <div
                  className="relative z-10 min-h-[400px] bg-stone-900/80 hover:bg-stone-900/70 transition-colors p-8 flex flex-col justify-center cursor-pointer"
                  onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_varietal_dna.png', alt: 'Varietal Aroma DNA' })}
                >
                  <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <Fingerprint size={32} />
                    <h4 className="text-[19px] md:text-2xl font-bold">【品種香：與生俱來的基因刻痕】</h4>
                  </div>
                  <p className="text-[17px] text-stone-200 leading-relaxed">
                    品種香是普洱茶魅力的根基，源於雲南大葉種天然的基因賦予，且不隨人工干預而更迭。這種香氣在心茶時期最為顯眼，代表了茶樹與生俱來的生命底色。以勐海布朗山系為例，同在「老曼峨」區域，苦茶種與甜茶種在相同的生態環境下，其香氣特徵依然呈現出清晰的基因差異，這是判斷茶品純正血統的首要指標。
                  </p>
                </div>
              </div>
              {/* Code 2: Regional */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-zoom-in" onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_terroir_peaks.png", alt: "Terroir Peaks" })}>
                <img
                  src="/images/varieties/puerh/puerh_terroir_peaks.png"
                  alt="Terroir Peaks"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_terroir_peaks.png", alt: "Terroir Peaks" })}
                />
                <div
                  className="relative z-10 min-h-[400px] bg-stone-900/80 hover:bg-stone-900/70 transition-colors p-8 flex flex-col justify-center cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_terroir_peaks.png", alt: "Terroir Peaks" })}
                >
                  <div className="flex items-center gap-3 mb-4 text-amber-400">
                    <MapPin size={32} />
                    <h4 className="text-xl font-bold">【地域香：不可複製的產地標籤】</h4>
                  </div>
                  <p className="text-[17px] text-stone-200 leading-relaxed">
                    普洱茶講求「一山一味」，地域香正是其不可複製的產地標籤。日照強度、朝向、氣溫、降雨量及土壤構成，共同塑造了特定微域的香形。在布朗山系中，無論是「老班章」、「新班章」還是「老曼峨」，即便地理鄰近且品種相似，其香氣風骨卻截然不同。此外，「寨名即山頭」的命名邏輯（如「刮風寨」村之名即為茶山之名），進一步體現了普洱茶地域香與土地深度綁定的獨特性。
                  </p>
                </div>
              </div>

              {/* Code 3: Seasonal */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-zoom-in" onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_seasons_cycle.png", alt: "Seasonal Cycle" })}>
                <img
                  src="/images/varieties/puerh/puerh_seasons_cycle.png"
                  alt="Seasonal Cycle"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_seasons_cycle.png", alt: "Seasonal Cycle" })}
                />
                <div
                  className="relative z-10 min-h-[400px] bg-gradient-to-r from-emerald-900/80 to-amber-900/80 p-8 flex flex-col justify-center cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_seasons_cycle.png", alt: "Seasonal Cycle" })}
                >
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <CloudSun size={32} />
                    <h4 className="text-xl font-bold">【季節香：時序流轉的風味對位】</h4>
                  </div>
                  <div className="space-y-4 text-[17px] text-stone-100 leading-relaxed">
                    <p className="mb-4 text-stone-300">
                      古樹茶的生長隨四時而動，香氣亦因此烙上了季節的印記。春生、夏長、秋收、冬藏，不同季節的氣候特徵（溫度、降雨、日照）直接決定了茶葉內含物質的比例，進而塑造了截然不同的香氣性格。
                    </p>
                    <div>
                      <strong className="text-emerald-300">春香（氣勢凌人的霸者）：</strong>
                      <br />普洱茶界素有「春水」之稱。茶樹經冬季休眠後，頭春茶內含物質豐富，嫩度極高。春季溫和的氣候利於芳香物質保留，其特有的「豪香」與「清香」充滿了鮮活的通透感，是品鑑力度的首選。
                    </div>
                    <div>
                      <strong className="text-rose-300">夏香（雨水充沛的躁動）：</strong>
                      <br />夏季高溫多雨，茶樹生長極快。這一時期的茶葉（雨水茶）多酚類與咖啡鹼含量顯著升高，導致苦澀感重而香氣相對較薄。雖通常不作為頂級生茶的原料，但其充沛的內質與強勁的轉化潛力，使其成為製作優質「熟茶」的重要基底。
                    </div>
                    <div>
                      <strong className="text-amber-300">秋香（柔中帶剛的隱士）：</strong>
                      <br />秋季氣候乾燥，有利於香氣的凝聚，故稱「谷花飄香」。秋茶的花蜜香更顯濃郁且優雅，展現出迷人的溫柔特質。相對於春茶的剛猛，秋茶滋味更顯甜潤，且市場價格通常僅為春茶的二分之一，具備極高的性價比。
                    </div>
                    <div>
                      <strong className="text-sky-300">冬香（清冽甘甜的極品）：</strong>
                      <br />在部分氣候獨特的年份，茶樹在休眠前會萌發少量新芽，稱為「冬片」。由於低溫導致生長極緩，內含物質高度濃縮。冬片香氣高銳、水路細膩且具備極致的甜度，是可遇不可求的小眾珍品。
                    </div>
                    <div className="text-sm opacity-80 italic mt-2 border-t border-white/10 pt-2">
                      * 陳放考量：雖然秋茶與冬片具備即時飲用的高度適意性，但若追求跨越數十年的長期陳化價值，內含物質最為飽滿平衡的春茶仍是收藏首選。
                    </div>
                  </div>
                </div>
              </div>

              {/* Code 4: Craft */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src="/images/varieties/puerh/puerh_sun_power.png"
                  alt="Sun Power"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_sun_power.png", alt: "Sun Power" })}
                />
                <div
                  className="relative z-10 min-h-[400px] bg-amber-950/70 p-8 flex flex-col justify-center cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_sun_power.png", alt: "Sun Power" })}
                >
                  <div className="flex items-center gap-3 mb-4 text-amber-200">
                    <Hammer size={32} />
                    <h4 className="text-xl font-bold">【工藝香：太陽能量的轉化印記】</h4>
                  </div>
                  <p className="text-[17px] text-amber-50 leading-relaxed">
                    與追求人工激發香氣的烏龍茶不同，普洱茶推崇低干預的工藝香。曬青毛茶在製程中吸收日光能量，形成獨特的「太陽味」。這種印記是普洱茶活性的來源，賦予了其後期陳化的空間。值得注意的是，隨著陳放年份增長，人工賦予的工藝香會逐漸淡化，而品種香則隨之凸顯，形成一種「此消彼長」的動態轉化規律。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Flavor Matrix */}
          <div className="rounded-[3rem] bg-stone-900 border border-stone-800 p-8 md:p-16 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-40">
              <img src="/images/varieties/puerh/puerh_flavor_matrix.png" className="w-full h-full object-cover" alt="Flavor Matrix" />
            </div>
            <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"></div>

            <div className="relative z-10 text-stone-300">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">參、感官風味矩陣：五味深度解碼</h3>
              <p className="text-[17px] text-center max-w-2xl mx-auto mb-12 text-stone-400">
                酸、甜、苦、鮮、澀五味交織，共同構築了普洱茶厚重的生命底蘊，並在時光流轉中決定了茶品的演變走向。
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sour */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Citrus size={20} /> 酸
                  </div>
                  <h5 className="text-white font-bold mb-2">立體感與生津的源頭</h5>
                  <p className="text-[15px] leading-relaxed">
                    高品質的品鑑必須精準區分「惡酸」與「良酸」。因發酵過度、渥堆不當導致的酸味往往伴隨著「鎖喉感」，且其葉底觸感如「爛泥」般缺乏彈性，屬品質瑕疵。而適度的「良酸」則是棗香、梅子香、提子香的前驅物質，它賦予茶湯立體感與飽滿度，能引發持續的生津，是高階茶品評價中的加分項。
                  </p>
                </div>

                {/* Sweet */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Smile size={20} /> 甜
                  </div>
                  <h5 className="text-white font-bold mb-2">生命能量的愉悅特質</h5>
                  <p className="text-[15px] leading-relaxed">
                    甜味是能量的象徵，在普洱茶中呈現為三個層次：<br />
                    1. 糖類與氨基酸溶於水帶來的即時甜感。<br />
                    2. 下嚥後因物質轉化產生的強烈「回甘」。<br />
                    3. 沖飲末期的「尾水甜」。如老班章在經歷前段強悍氣息後，末段呈現如蜂蜜般的極致甜潤。
                  </p>
                </div>

                {/* Bitter */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Zap size={20} /> 苦
                  </div>
                  <h5 className="text-white font-bold mb-2">普洱茶的骨架與基底</h5>
                  <p className="text-[15px] leading-relaxed">
                    苦澀源於大葉種豐富的茶多酚與咖啡鹼。判定「苦」的品質在於其「化」的速度。高品質的苦應是「化得快」，即入口驚人而瞬即轉甘。 <br />
                    <strong className="text-stone-400">案例：</strong>曾有野生的老曼峨茶，心茶時期極苦難咽，但在陳放十年後，其苦感轉化為驚人的甜潤，甚至被資深茶客誤認為是易武茶的柔美。這種「大苦大甘」的過程，正是對普洱茶生命跨度與人生哲理的極致隱喻。
                  </p>
                </div>

                {/* Fresh */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Sprout size={20} /> 鮮
                  </div>
                  <h5 className="text-white font-bold mb-2">氨基酸的愉悅感與科學厚度</h5>
                  <p className="text-[15px] leading-relaxed">
                    鮮味源於茶氨酸。茶氨酸不僅提供如「雞湯」般的鮮爽觸感，更具備放鬆神經、增強記憶力的功能（日本已有將其提取為膠囊提升學習能力的實證）。春茶鮮味最顯，而隨著陳化，鮮爽度會逐漸轉化為醇厚感與果膠感。
                  </p>
                </div>

                {/* Astringent */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Activity size={20} /> 澀
                  </div>
                  <h5 className="text-white font-bold mb-2">口腔黏膜的收縮藝術</h5>
                  <p className="text-[15px] leading-relaxed">
                    澀感本質上是多酚類物質與口腔內的「粘蛋白」發生作用，導致潤滑感喪失、黏膜收縮的觸覺反應。由於雲南大葉種內含物極其豐沛，其澀感天然強於其他茶類，但評判核心在於其是否具備「澀能生津」的轉化張力。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Aesthetic System (Conclusion) */}
          <div className="space-y-8">
            <div className="max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">肆、建立普洱茶專屬的審美體系</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed">
                普洱茶的品鑑是一場擺脫經驗主義、走向系統科學的修煉。我們必須打破單一的審美框架，針對普洱茶特有的苦澀基底與層次感建立獨立指標。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-full min-h-[300px] group">
                <img
                  src="/images/varieties/puerh/puerh_aging_time.png"
                  alt="Time as Ingredient"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="bg-stone-50 p-8 rounded-2xl border-l-4 border-stone-800 h-full flex flex-col justify-center">
                <h4 className="font-bold text-lg mb-2 text-stone-900">【跨類別審美與感官記憶庫】</h4>
                <p className="text-stone-600 mb-6 text-[16px] leading-relaxed">
                  不應以烏龍茶的芬芳或綠茶的極度鮮爽來窄化普洱茶的審美。這是一門實踐科學，品飲者需透過對老班章、冰島、易武、刮風寨等標竿性山頭的大量對比，在腦海中儲存感官數據。當感官記憶庫足夠豐富，未來在品飲任何茶品時，皆能精準對應出其產地、品種與季節屬性。
                </p>
                <h4 className="font-bold text-lg mb-2 text-stone-900">【從理論到真實的實踐修煉】</h4>
                <p className="text-stone-600 text-[16px] leading-relaxed">
                  線上理論框架固然能提供路徑，但感官密碼的真正解碼仍需回歸線下的實際沖泡。鼓勵每一位讀者在實踐中細膩辨識五味的消長，觀察茶湯從苦到甘的轉化節奏，感受香氣從鼻腔擴散至口腔的每一絲變化。
                </p>
              </div>
            </div>

            <p className="font-medium text-stone-800 italic text-[17px] leading-relaxed border-t border-stone-200 pt-6">
              「學懂普洱茶」不僅是技藝的掌握，更是一場與自然能量、土地歷史以及時光演變的深度對話。透過這套感官密碼的解鎖，我們方能真正領略普洱茶作為「活著的古董」所具備的永恆魅力。
            </p>
          </div>
        </div >)
    },
    '#puerh-10': {
      title: '十：雲南白茶的賞析與沖泡',
      content: (
        <div className="space-y-16 font-sans">
          {/* Hero Section */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_hero_ancient.png', alt: 'Ancient Tree White Tea' })}
          >
            <img src="/images/varieties/puerh/white_tea_hero_ancient.png" alt="Ancient Tree White Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <span className="inline-block self-start px-4 py-1.5 bg-stone-100/20 backdrop-blur border border-stone-200/30 text-stone-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4">MASTERCLASS</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight shadow-sm">雲南白茶大師課<br /><span className="text-2xl md:text-3xl opacity-80 font-normal">從歷史溯源到古樹沖泡深度解析</span></h2>
            </div>
          </div>

          {/* Section 1: Modern Rise & Craft */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-amber-600 pl-4">一、雲南白茶的當代興起與工藝核心</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                在傳統白茶的權威版圖中，福建的白毫銀針、白牡丹與壽眉被尊為茶界的資深「長者」，長期統治市場認知。然而，近年來雲南白茶憑藉「喬木大葉種」的稀缺資源異軍突起。若將福建白茶比作深藏不露的武林泰斗，雲南白茶則是一位「出山少年」，憑藉內含物質的深度與強大的陳化張力，在高端市場展現出極強的競爭潛力。其追求天然而不經炒揉的工藝哲學，精準對接了現代社會對自然、減法生活的極致追求。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="border-b pb-2 border-stone-200">雲南白茶的核心靈魂在於其<strong className="text-amber-700">「萎凋」工藝</strong>，這是一種對植物生命力的最大化尊重：</p>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">1</div>
                    <div>
                      <strong className="block text-stone-900 text-[18px] mb-1">天然純粹的減法美學</strong>
                      <p className="text-[16px] text-stone-600">堅持不炒不揉，是六大茶類中最接近天然的製法，最大限度地保留了鮮葉的原始生命力。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">2</div>
                    <div>
                      <strong className="block text-stone-900 text-[18px] mb-1">天人合一的演繹</strong>
                      <p className="text-[16px] text-stone-600">工藝不僅是水分的流失，更是陽光、山風、環境氣候與製茶師經驗的深度共鳴。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">3</div>
                    <div>
                      <strong className="block text-stone-900 text-[18px] mb-1">身心效益與獨特性</strong>
                      <p className="text-[16px] text-stone-600">這種極簡處理造就了其「清雅、利身心」的特徵，具備顯著的保健屬性。</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-zoom-in h-[500px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_craft_sun_shadow.png', alt: 'Reductionist Aesthetics' })}>
                <img src="/images/varieties/puerh/white_tea_craft_sun_shadow.png" alt="Reductionist Aesthetics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest bg-black/30 backdrop-blur px-2 py-1 rounded">工藝之美：日光萎凋</div>
              </div>
            </div>
          </div>

          {/* Section 2: History */}
          <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900">二、歷史溯源：從唐朝蠻書到清代貢茶</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed">
                雲南白茶並非市場行銷下的新興產物，其厚重的歷史底蘊是其品牌價值的「文化護城河」。早在唐朝《蠻書》中就有「茶出銀生城界諸山，散收五採造法」的記載。「散收五採」即為原始白茶工藝（自然乾燥）的雛形，證明在缺乏鐵鍋殺青技術的古代，這種直接晾乾的方式早已在雲南扎根。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              <div className="md:col-span-4">
                <div className="relative rounded-xl overflow-hidden shadow-md cursor-zoom-in h-full min-h-[400px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_history_tribute.png', alt: 'White Dragon Whiskers' })}>
                  <img src="/images/varieties/puerh/white_tea_history_tribute.png" alt="White Dragon Whiskers" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="md:col-span-8 bg-white p-6 rounded-xl border-t-4 border-rose-800 shadow-sm flex flex-col justify-center">
                <h4 className="text-xl font-bold text-rose-900 mb-4 pb-2 border-b border-rose-100">景谷大白茶與白龍鬚貢茶</h4>
                <p className="text-[17px] text-stone-600 mb-6 leading-relaxed">
                  雲南白茶的傳奇在清道光年間達到巔峰，其中「白龍鬚貢茶」已具備 160 多年的文獻與實物傳承。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="font-bold text-rose-800 block">傳奇起源</span>
                    <p className="text-sm text-stone-600">民間相傳一位力大無窮、每餐必食六碗米的茶人陳六，在藏、江邊經商時引進茶種，於景谷縣羊塔村精心培育。</p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-bold text-rose-800 block">生態優勢與生命力</span>
                    <p className="text-sm text-stone-600">景谷縣日照充沛、年均氣溫 20 度，現存古茶樹已有 150-160 年歷史，展現驚人生命韌性。</p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-bold text-rose-800 block">特殊工藝與美學</span>
                    <p className="text-sm text-stone-600">手工殺青、兩次揉捻、曬至半乾抖散。成品常以紅線編織成「骨碎狀」進貢，散發獨特「橄欖清香」。</p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-bold text-rose-800 block">藥理與品鑑</span>
                    <p className="text-sm text-stone-600">民間視為「解酒解煙」珍品。湯色清澈，葉片舒展如「雲南的花瓣」般靈動。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Moonlight Beauty */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-indigo-900 pl-4">三、月光美人：行銷神話與製茶真相</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
              <div className="relative h-[400px] md:h-auto group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/moonlight_beauty_yin_yang.png', alt: 'Moonlight Beauty Yin Yang' })}>
                <img src="/images/varieties/puerh/moonlight_beauty_yin_yang.png" alt="Moonlight Beauty" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="bg-slate-900 text-stone-200 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">陰陽之美・月光白</h4>
                  <p className="text-indigo-200 text-sm">Moonlight Beauty: Myth vs. Reality</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-indigo-500 pl-4">
                    <strong className="block text-indigo-300 text-sm tracking-wider mb-1">行銷敘事 (The Myth)</strong>
                    <p className="text-[16px] opacity-80">故事描繪由美少女在月夜採摘，全程不見陽光，在月色下自然發酵而成。賦予了如同道家「太極」般的陰柔美學。</p>
                  </div>
                  <div className="border-l-2 border-slate-500 pl-4">
                    <strong className="block text-indigo-300 text-sm tracking-wider mb-1">技術真相 (The Truth)</strong>
                    <p className="text-[16px] opacity-80">實為應對雨季的「室內陰乾」工藝。長時間陰乾導致葉面氧化發黑（陰）而芽頭保留白色（陽），形成獨特黑白外觀。</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="italic text-sm text-slate-400">儘管故事虛構，但其「四花四果四蜜」且「不苦不澀」的層次感，仍是新手入門普洱的最佳選擇。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Ancient Tree White Tea */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-emerald-700 pl-4">四、雲南古樹白茶的品質優勢與風味對比</h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              雲南古樹白茶作為「後期之秀」，正在憑藉「喬木大葉種」的硬核實力重塑全球高端白茶的風味標準。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 h-full flex flex-col justify-center">
                <h4 className="text-xl font-bold text-emerald-800 mb-6">古樹白茶的三大核心價值</h4>
                <ul className="space-y-4 text-[17px] text-stone-700">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">01.</span>
                    <span>
                      <strong className="text-stone-900">複式萎凋法：</strong>
                      古樹白茶採用室內與日光交替的複式工藝。精確的溫濕度控制能有效保留氨基酸，使香氣更富郁。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">02.</span>
                    <span>
                      <strong className="text-stone-900">無分類的純粹性：</strong>
                      不同於福建等級制，雲南多以「一芽二葉」為標准，強調古樹內含物質的綜合呈現。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">03.</span>
                    <span>
                      <strong className="text-stone-900">快速轉化：</strong>
                      得益於大葉種豐富的內質，往往「三年出老味」，較快轉化出迷人的棗香與藥香。
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg cursor-zoom-in h-64"
                  onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_landscape_contrast.png', alt: 'Fujian vs Yunnan' })}
                >
                  <img src="/images/varieties/puerh/white_tea_landscape_contrast.png" alt="Fujian vs Yunnan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-3 text-center text-white text-sm">南北對決：江南園大白 vs 雲南山野古樹</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                    <h5 className="font-bold text-stone-600 text-sm mb-2">福建 (江南美人)</h5>
                    <p className="text-xs text-stone-500">溫潤細柔、水路細緻，高揚的毫香與花香。</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 shadow-sm text-center">
                    <h5 className="font-bold text-emerald-800 text-sm mb-2">雲南 (山裡美人)</h5>
                    <p className="text-xs text-stone-600">內質雄渾，回甘強勁、喉韻深邃，寬廣厚重。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Brewing */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-12 space-y-10">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">五、專業沖泡技藝：七步法與溫潤秘訣</h3>
              <p className="text-[17px] text-stone-400 max-w-2xl mx-auto">
                沖泡是釋放大葉種古樹白茶靈魂的最終程序。推薦使用<strong>敞口白瓷蓋碗</strong>，PH 7-7.5 水質，水溫 90-95°C。
              </p>
            </div>

            {/* Row 1: Steps 1-4 & Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h4 className="text-amber-500 font-bold tracking-widest text-sm uppercase border-b border-amber-500/30 pb-2">Step 1-4: The Foundation</h4>
                <ul className="space-y-4 text-stone-300">
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">01</span>
                    <div><strong className="text-white block">備器</strong>敞口白瓷蓋碗，利於大葉種舒展散熱。</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">02</span>
                    <div><strong className="text-white block">取茶</strong>比例 1:25 (如 125ml 配 5g)，宜淡不宜濃。</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">03</span>
                    <div><strong className="text-white block">溫器</strong>沸水環繞連蓋溫燙，喚醒茶香前提。</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">04</span>
                    <div><strong className="text-white block">投茶</strong>趁熱投茶，蓋蓋利用餘溫「乾潤」。</div>
                  </li>
                </ul>
              </div>

              <div
                className="aspect-[3/4] mt-12 rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in relative group border border-stone-700"
                onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_brewing_ritual_v2.png', alt: '7-Step Brewing Method' })}
              >
                <img src="/images/varieties/puerh/white_tea_brewing_ritual_v2.png" alt="7-Step Brewing Method" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <p className="text-stone-300 italic text-sm">「一次出淨，嚴禁留底。透過這套七步法，領略雲南古樹白茶源於自然、歸於平淡的深邃魅力。」</p>
                </div>
              </div>
            </div>

            {/* Row 2: Step 5 & Steps 6-7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700">
                <div className="flex gap-4 mb-3 items-center">
                  <span className="font-bold text-amber-600 text-lg">05</span>
                  <h4 className="text-amber-400 font-bold flex items-center gap-2">
                    溫潤三部曲 (核心秘技)
                  </h4>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-stone-300 text-sm pl-11">
                  <li><strong className="text-white">蒸潤：</strong> 3點方向注水1/5，蓋蓋利用蒸汽軟化 (15秒)。</li>
                  <li><strong className="text-white">濕潤：</strong> 注水至3/4，潤透後即刻出湯。</li>
                  <li><strong className="text-white">感官：</strong> 嗅聞如沐浴般的清新花果香。</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h4 className="text-amber-500 font-bold tracking-widest text-sm uppercase border-b border-amber-500/30 pb-2">Step 6-7: Extraction</h4>
                <ul className="space-y-4 text-stone-300">
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">06</span>
                    <div><strong className="text-white block">正式沖泡</strong>高溫提香壓運法。5點方向定點注水，先輕緩後拉高，首泡10秒。</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">07</span>
                    <div><strong className="text-white block">出湯</strong>一次出淨，七分滿，保持杯溫。</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      ),
    },
    '#puerh-11': {
      title: '十一：雲南紅茶的賞析與沖泡',
      content: (
        <div className="space-y-16 font-sans">
          {/* Hero Section */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_hero_ethereal_peaks.png', alt: 'Yunnan Ethereal Landscape' })}
          >
            <img src="/images/varieties/puerh/dianhong_hero_ethereal_peaks.png" alt="Yunnan Ethereal Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <span className="inline-block self-start px-4 py-1.5 bg-rose-900/30 backdrop-blur border border-rose-500/30 text-rose-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4">DIANHONG MASTERCLASS</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight shadow-sm">雲南紅茶（滇紅）深度賞析與沖泡藝術指南<br /><span className="text-2xl md:text-3xl opacity-80 font-normal">從歷史傳奇到古法曬紅的生命哲學</span></h2>
            </div>
          </div>

          {/* Section 1: Global Context & Origins */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-rose-700 pl-4">一、紅茶的起源與全球文化視野</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                在世界六大茶類中，紅茶無疑是當今國際影響力最深、流通最廣的茶類，其全球銷量佔比高達 80%。紅茶之名，源於其乾茶經沖泡後，茶湯與葉底均呈現明艷的紅褐色，這一色澤特徵定義了其美學基調。根據學術考證，「紅茶」一詞最早出現在明代劉基的《多能鄙事》中，記載了關於紅湯茶飲的調製方式。而追溯其歷史源頭，公認的世界紅茶發源地為中國福建武夷山。
              </p>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                紅茶之所以能跨越國界，核心在於其卓越的「包容性」。它不僅能清飲以品味原香，亦能完美契合牛奶、蜂蜜等各類佐料，成為普世性的文化飲品。在全球四大知名紅茶中，各具風味千秋：印度大吉嶺以其高雅的蘭花與麝香葡萄風味著稱；阿薩姆具備強勁且飽滿的麥芽香；斯里蘭卡烏沃則以清爽、明亮的水果香與收斂感聞名；而中國祁門紅茶則帶著濃郁的蜜糖與果香。相較之下，雲南紅茶（滇紅）則以其特有的「渾厚飽滿」展現出大葉種獨有的生命力量。
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
              <strong className="block text-rose-900 mb-2">全發酵茶的定義</strong>
              <p className="text-[16px] text-rose-800/80">
                作為典型的「全發酵茶」，紅茶的發酵程度通常超過 80%。透過萎凋、揉捻、發酵與乾燥等工藝環節，鮮葉內的化學物質發生深刻轉化，成就了「紅湯紅葉、香氣濃郁鮮爽」的感官體現。
              </p>
            </div>
          </div>

          {/* Section 2: History (1938) - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch bg-stone-50 rounded-3xl p-8 border border-stone-200">
            <div className="relative rounded-xl overflow-hidden shadow-lg cursor-zoom-in h-full min-h-[300px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_history_caravan_factory.png', alt: 'Dianhong History 1930s' })}>
              <img src="/images/varieties/puerh/dianhong_history_caravan_factory.png" alt="Dianhong History 1930s" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-stone-900/20 hover:bg-transparent transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest bg-black/40 backdrop-blur px-2 py-1 rounded">1938年：滇紅紀元開啟</div>
            </div>

            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-900">二、滇紅的歷史命運：從出口換匯到名茶之花</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                雲南紅茶（簡稱滇紅）的誕生，是中國茶葉史上一次充滿民族情感與國家使命的華麗轉身。1938 年，正值抗日戰爭艱難時期，隨著傳統產區如祁門等地淪陷，國家急需尋找新產區生產紅茶，藉由出口貿易換取外匯以支撐抗戰。
              </p>
              <div className="space-y-4 text-sm text-stone-600 border-t border-stone-200 pt-4">
                <div>
                  <strong className="text-rose-800 block mb-1">關鍵人物：馮紹裘與白孟愚</strong>
                  <p>馮紹裘先生於鳳慶試製成功首批 17.4 噸功夫紅茶；白孟愚先生於南糯山創辦工廠引進英國機械。1941 年底產量已達約 200 噸。</p>
                </div>
                <div>
                  <strong className="text-rose-800 block mb-1">外交使命與國禮地位</strong>
                  <p>從50年代的蘇聯東歐市場，到80年代遠銷全球20餘國。其卓越品質更使其成為贈予英國女王伊麗莎白二世的國禮，奠定了中國傳統四大紅茶之一的地位。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Large Leaf Power & Varieties */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-amber-600 pl-4">三、大葉種的生命力：滇紅的特質與現代多元品種</h3>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                  滇紅之所以能後發先至，關鍵在於其核心原料——雲南大葉種。高品質的古樹大葉種茶多酚含量可高達 45% 以上，這決定了茶湯極高的「飽滿度」與厚實口感，使其比其他產區的紅茶更具勁道與耐泡性。
                </p>
                <p className="text-[17px] text-stone-700 leading-relaxed">
                  隨著工藝的迭代與市場需求的細分，現代滇紅已形成豐富的產品矩陣：
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                    <span className="text-amber-700 font-bold block mb-1">紅功夫</span>
                    <span className="text-sm text-stone-600">傳統工藝的巔峰，講究滋味的純厚與回甘。</span>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                    <span className="text-amber-700 font-bold block mb-1">金絲滇紅與大金針</span>
                    <span className="text-sm text-stone-600">選用精緻單芽，香氣高銳且視覺華美。</span>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                    <span className="text-amber-700 font-bold block mb-1">野生紅茶與紫紅茶</span>
                    <span className="text-sm text-stone-600">利用特殊變異品種，展現獨特的林野氣息與豐富的層次。</span>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                    <span className="text-amber-700 font-bold block mb-1">普洱曬紅</span>
                    <span className="text-sm text-stone-600">回歸古法，將陽光封存於茶葉之中。</span>
                  </li>
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg text-sm text-amber-900/80 italic border-l-4 border-amber-400 mt-4">
                  從生理屬性而言，紅茶具備顯著的「暖胃」與「增加能量」效果，適合現代節奏下腸胃較為脆弱的人群飲用。
                </div>
              </div>
              <div className="md:col-span-5 h-full">
                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group" onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_variety_golden_needle.png', alt: 'Golden Needle Black Tea' })}>
                  <img src="/images/varieties/puerh/dianhong_variety_golden_needle.png" alt="Golden Needle Black Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-amber-100 font-bold text-lg">金豪顯露：大葉種的極致質感</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Sun-dried Red Tea (Shaai Hong) */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-amber-100">四、被遺忘的真品：古法曬紅的工藝與收藏價值</h3>
                <div className="space-y-4 text-stone-300">
                  <p className="text-[17px] leading-relaxed">
                    在滇紅的眾多支系中，「曬紅」是一款具備獨特生命哲學的品項。這是在 1930 年代現代烘乾技術傳入之前，雲南最古老的自然日曬工藝。
                  </p>
                  <h4 className="text-xl font-bold text-amber-500 mt-4">核心哲學：活的茶</h4>
                  <p className="text-[16px] leading-relaxed">
                    「曬紅」與主流「烘青紅茶」的核心區別在於乾燥。傳統紅茶高溫烘烤固化風味，而曬紅堅持自然日曬，避免高溫摧毀酶活性，保留了部分活性多酚物質，具備與普洱生茶相似的後期轉化能力。
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2"><span className="text-amber-500">◆</span> 感官特徵：天然陽光氣息，口感清純自然。</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500">◆</span> 無造火感：完全沒有傳統紅茶的焦燥火氣，茶性溫和。</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500">◆</span> 收藏價值：被忽視數十年的瑰寶，具備「越陳越香」潛力。</li>
                  </ul>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] cursor-zoom-in group" onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_craft_sun_drying.png', alt: 'Sun Drying Tea' })}>
                <img src="/images/varieties/puerh/dianhong_craft_sun_drying.png" alt="Sun Drying Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-6 right-6 text-right">
                  <div className="text-white font-bold text-xl drop-shadow-md">封存陽光</div>
                  <div className="text-amber-200 text-sm drop-shadow-md">The Living Tea</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Brewing Guide */}
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800">五、曬紅的專業沖泡流程與感官賞析</h3>
              <p className="text-[17px] text-stone-600 max-w-2xl mx-auto">
                沖泡曬紅不僅是技術的展現，更是一場與葉片的細膩對話。器皿的溫度與水流的控制，是喚醒大葉種深層能量的關鍵。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
                  <h4 className="font-bold text-stone-800 mb-4 border-b pb-2">【前期備戰】</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm shrink-0">器</div>
                      <p className="text-sm text-stone-600"><strong>器皿選擇：</strong>推薦白瓷小壺或玻璃壺，忠實呈現象牙色掛杯與湯色。杯子選「小口」杯型，聚攏特有甜果香。</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm shrink-0">參</div>
                      <p className="text-sm text-stone-600"><strong>參數設定：</strong>1:25 茶水比 (5g茶:125ml水)。「淡沖」更能品味優雅層次，避免濃悶。</p>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-lg cursor-zoom-in aspect-square" onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_brewing_red_soup.png', alt: 'Red Tea Soup' })}>
                  <img src="/images/varieties/puerh/dianhong_brewing_red_soup.png" alt="Red Tea Soup" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <div className="md:col-span-7 bg-stone-50 p-8 rounded-3xl border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-6 text-xl">【專業沖泡七步驟】</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">01</span>
                    <div><strong className="block text-stone-800">備器與溫器</strong>必須將茶具「溫透」。除內部溫杯外，建議在壺外淋灑熱水，使器皿達到極高熱度，這對釋放大葉種茶性至關重要。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">02</span>
                    <div><strong className="block text-stone-800">取茶與乾醒</strong>投入滾燙空壺，蓋蓋靜置片刻。透過餘溫進行「乾覺」，嗅聞被喚醒的濃郁果香與甜香。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">03</span>
                    <div><strong className="block text-stone-800">溫潤（醒茶）</strong>92°C-95°C 水溫，五點鐘方向定點注水。散茶約 5 秒，餅茶則需 10 秒。此道湯水潤澤葉片，不予飲用。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">04</span>
                    <div><strong className="block text-stone-800">正式沖泡</strong>堅持「低針細水流」，注水時拉高水線再壓低，為茶湯注入空氣（呼吸空間）。水溫 92°C-95°C (偏好低澀感可降至90°C)。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">05</span>
                    <div><strong className="block text-stone-800">精確浸泡</strong>首道浸泡時間建議在 15-20 秒之間，視茶片舒展程度微調。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">06</span>
                    <div><strong className="block text-stone-800">分湯細節</strong>滑順水流出湯。注意「保持杯溫」：在品飲前才將杯中溫杯水倒掉，確保熱杯接茶，避免冷杯奪香。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">07</span>
                    <div><strong className="block text-stone-800">感官賞析</strong>觀察紅亮湯色。首道品果香，次道體察蘭花香與回甘。在酸甜苦澀轉化中，感受大葉種生命厚度。</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-rose-900 text-rose-100 p-8 rounded-2xl text-center italic">
              <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                「雲南紅茶不僅是歷史的縮影，更是雲南大葉種在時光與火焰、陽光中淬鍊出的生命載體。透過這苦與澀的轉化之間，尋找自己心中最理想的那一杯茶湯。」
              </p>
            </div>
          </div>
        </div>
      ),
    },
    '#puerh-12': {
      title: '十二：雲南少數民族特色飲茶文化',
      content: (
        <div className="space-y-16 font-sans">
          {/* Hero Section: Fire Pit Culture */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_hero_fire_pit.png', alt: 'Yunnan Fire Pit Culture' })}
          >
            <img src="/images/varieties/puerh/ethnic_hero_fire_pit.png" alt="Yunnan Fire Pit Culture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <span className="inline-block self-start px-4 py-1.5 bg-orange-900/30 backdrop-blur border border-orange-500/30 text-orange-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4">ETHNIC TEA CULTURE</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight shadow-sm">雲南少數民族特色飲茶文化與烤茶工藝深度研究報告<br /><span className="text-2xl md:text-3xl opacity-80 font-normal">一場關於火塘、時間與神靈的對話</span></h2>
            </div>
          </div>

          {/* Section 1: The Core - Fire Pit Culture */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-orange-700 pl-4">一、 雲南少數民族飲茶文化之核心：火塘文化的多重意義</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                在雲南這片被譽為茶樹原產地的秘境中，26個民族的文化脈絡與茶葉深深糾纏。而這一切文明的起點與社會學核心，正是「火塘」。火塘在雲南少數民族生活中不僅是物理上的熱源，更是族群的「社會文化運作中心」（Socio-cultural locus）與「家庭宇宙的軸心」。它超越了單純的烹飪與取暖功能，成為社交、宗教祭祀、婚喪禮儀及文化傳承的戰略空間。
              </p>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                火塘被賦予了極高的象徵意義，它是家庭興旺的見證。在傳統觀念中，「火塘不滅」象徵著血脈與家運的延續，這份照看火塘的重任通常由家庭的女主人承擔——火塘是否旺盛、整潔，往往被視為衡量一位「賢妻良母」勤勞與德行的標準。族人圍繞火塘形成「一日三茶」的生活節律：清晨醒來的第一罐茶開啟一天的勞作，深夜餘火邊的茶敘則是心靈的交流。火塘文化成功地將神聖的民族信仰與世俗的社交活動融合，編織出一幅人、茶、火共生的生命圖譜。
              </p>
            </div>
          </div>

          {/* Section 2: De'ang & Bulang - Bio vs Physical */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch bg-stone-50 rounded-3xl p-8 border border-stone-200">
            <div className="relative rounded-xl overflow-hidden shadow-lg cursor-zoom-in h-full min-h-[400px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_deang_acid_tea.png', alt: 'Deang Acid Tea Ritual' })}>
              <img src="/images/varieties/puerh/ethnic_deang_acid_tea.png" alt="Deang Acid Tea Ritual" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-stone-900/20 hover:bg-transparent transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest bg-black/40 backdrop-blur px-2 py-1 rounded">德昂酸茶：時間的生物轉化</div>
            </div>

            <div className="space-y-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-900">二、 德昂族與布朗族：古老茶農對茶葉的生命依存與轉化</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                德昂族與布朗族被公認為雲南最古老的茶農。對他們而言，茶葉不僅是經濟作物，更是一種靈魂的寄託與身體的延伸。
              </p>

              <div className="space-y-4">
                <div>
                  <strong className="text-orange-900 block text-lg mb-2">1. 德昂族酸茶：時間的生物轉化藝術</strong>
                  <p className="text-sm text-stone-600 leading-relaxed text-justify">
                    <span className="font-bold text-stone-800">工藝與感官：</span> 鮮葉經特殊的厭氧發酵，轉化出獨特的「酸香、奶香、桂花香」。其湯色金黃，入口微酸生津，隨後轉化為如普洱熟茶般的柔和與生茶的清甜。<br />
                    <span className="font-bold text-stone-800">生存價值：</span> 酸茶具有極佳的清熱解毒、去脂與生津功效，是德昂族應對濕熱山區環境的藥理良方。
                  </p>
                </div>
                <div className="border-t border-stone-200 pt-4">
                  <strong className="text-amber-900 block text-lg mb-2">2. 布朗族木瓢烤茶：物理能量的極致釋放</strong>
                  <p className="text-sm text-stone-600 leading-relaxed text-justify">
                    布朗族自視為茶神後裔，其飲茶文化中展現了強烈的「靈魂依賴」。山上的布朗族茶農若出門勞作忘了帶烤茶罐，甚至會感到精神萎靡，猶如現代人的咖啡癮，必須折返取回。<br />
                    <span className="font-bold text-stone-800">工藝細節：</span> 他們採取「就地取材」的物理加熱法，將茶葉置於木瓢內，混入滾燙的熱炭持續抖動。
                  </p>
                </div>
              </div>

              <div className="bg-orange-100/50 p-4 rounded-lg text-sm text-orange-900/80 italic border-l-4 border-orange-400">
                <strong>【民族誌觀察】</strong> 德昂族的酸茶代表了「生物發酵」的溫和力量；而布朗族的木瓢烤茶則是利用「強烈的物理動能與熱能」。這兩者分別體現了原始民族與山林共生時，對茶葉性質轉化的兩種極端而精妙的適應策略。
              </div>
            </div>
          </div>

          {/* Section 3: Yi & Lisu - Fire & Energy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-6 flex flex-col justify-center p-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-red-700 pl-4">三、 彝族與傈僳族：火之民族的熱量補給與生存科學</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                對於崇拜火的彝族與傈僳族而言，火塘的火焰色澤與跳動被視為家族命運的預示，其飲茶方式更體現了高原生存所需的高熱量補給。
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
                  <strong className="text-red-900 block text-lg mb-2">1. 彝族鹽巴茶：聲色兼備的味覺層次</strong>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-stone-600">
                    <li><strong className="text-stone-800">「啪啪」的鳴響：</strong> 將茶餅碎放入陶罐烤製，當茶葉受熱、細胞膨脹且水分急劇逸出時，罐內會發出清脆的「啪啪」聲，這是茶香被成功「鎖住」並轉化的物理標誌。</li>
                    <li><strong className="text-stone-800">咸甜相依：</strong> 鹽的加入不僅能軟化水質，更能激發茶葉的深層甜感，搭配玉米粑粑，為勞作者提供必要的電解質與熱能。</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
                  <strong className="text-amber-900 block text-lg mb-2">2. 傈僳族漆油茶：高海拔環境的熱量護盾</strong>
                  <p className="text-sm text-stone-600 text-justify">
                    傈僳族特有的「漆油茶」在功能上類比於西藏的酥油茶。使用萃取自漆樹果實的油脂（Lacquer Oil），與烤茶、芝麻、核桃、鹽強力攪打乳化。這種高能量飲法是適應高山惡劣氣候的生存智慧結晶。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg cursor-zoom-in h-full min-h-[400px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_yi_salt_tea.png', alt: 'Yi Salt Tea Ritual' })}>
              <img src="/images/varieties/puerh/ethnic_yi_salt_tea.png" alt="Yi Salt Tea Ritual" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-bold text-xl drop-shadow-md">火與鹽的淬鍊</div>
                <div className="text-sm opacity-80">彝族鹽巴茶</div>
              </div>
            </div>
          </div>

          {/* Section 4: Dai & Naxi - Nature & Extreme Elements */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-emerald-700 pl-4">四、 傣族與納西族：自然美學與雪山下的烈火療法</h3>
            <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
              這兩個民族分別在濕熱河谷與乾冷雪山環境中，利用自然材質與明火酒精實現了茶湯的昇華。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dai Bamboo */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_dai_bamboo.png', alt: 'Dai Bamboo Tea' })}>
                <img src="/images/varieties/puerh/ethnic_dai_bamboo.png" alt="Dai Bamboo Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                  <h4 className="text-emerald-100 font-bold text-2xl">傣族竹筒茶（納朵）</h4>
                  <p className="text-emerald-200/80 text-sm leading-relaxed line-clamp-3">
                    「依水而居，竹林為伴」。直接砍伐鮮竹，利用鮮竹的水分與竹香烘烤鮮葉，使茶湯帶有一種極具穿透力的清爽感，對於消解熱帶雨林的暑氣具有顯著效果。
                  </p>
                </div>
              </div>

              {/* Naxi Blue Flame */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_naxi_blue_flame.png', alt: 'Naxi Blue Flame Tea' })}>
                <img src="/images/varieties/puerh/ethnic_naxi_blue_flame.png" alt="Naxi Blue Flame Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                  <h4 className="text-blue-100 font-bold text-2xl">納西族「龍骨鬥」（酒火茶）</h4>
                  <p className="text-blue-200/80 text-sm leading-relaxed line-clamp-3">
                    玉龍雪山下的烈火療法。將茶盞烤熱後倒入包穀酒並點燃，躍動起幽邃的藍色火焰。茶湯沖入時發出劇烈「滋滋」聲，是乾冷山區的高效能量藥飲。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Bai Three-Course Tea */}
          <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-200 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800">五、 白族三道茶：從感官品鑑到人生哲理的昇華</h3>
              <p className="text-[17px] text-stone-600 max-w-2xl mx-auto">
                白族三道茶起源於唐代南詔時期，是大理地區文化底蘊與南詔古國禮儀的縮影。它將單純的飲茶行為提升至「哲學思辨」的高度。
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] cursor-zoom-in mb-8" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_bai_three_courses.png', alt: 'Bai Three Course Tea' })}>
              <img src="/images/varieties/puerh/ethnic_bai_three_courses.png" alt="Bai Three Course Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-bold text-xl mx-auto mb-4">苦</div>
                <h4 className="font-bold text-lg mb-2">第一道：苦茶</h4>
                <p className="text-sm text-stone-600">經陶罐烤製，色黃味苦。象徵青年時期奮鬥的艱辛。</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">甜</div>
                <h4 className="font-bold text-lg mb-2">第二道：甜茶</h4>
                <p className="text-sm text-stone-600">加入紅糖、乳扇、核桃。象徵中年時期的苦盡甘來與美滿。</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-orange-700 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">回</div>
                <h4 className="font-bold text-lg mb-2">第三道：回味茶</h4>
                <p className="text-sm text-stone-600 text-justify">加入蜂蜜、花椒（產生麻感）、生薑（產生辣感）與桂皮。這道茶交織出「酸甜苦辣麻」的複雜層次，其「麻辣」的感官刺激意在引導品飲者回味人生的起伏，感悟「一苦、二甜、三回味」的生活真諦。</p>
              </div>
            </div>
          </div>

          {/* Section 6: Roasting Guide */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Flame size={200} /></div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">六、 普洱烤茶實務指南：技術流程與養生價值</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 sticky top-24">
                  <p className="text-stone-300 text-[17px] leading-relaxed">
                    烤茶不僅是技藝，更是一場修行。在雲南傳統文化中，青年男子學會烤茶是成年的標誌，它考驗著人的專注力、耐心與對火候的精微觀察。
                  </p>

                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8 backdrop-blur-sm">
                    <h4 className="font-bold text-amber-500 mb-4 flex items-center gap-2"><Sun size={18} /> 季節養生：白露之後</h4>
                    <p className="text-stone-200 text-sm leading-relaxed">
                      烤茶尤其適合在<strong>「白露」</strong>之後至整個冬日飲用。白露標誌著秋意漸濃，此時飲用一碗暖和的烤茶，能有效暖身、暖胃、去濕氣，符合季節轉換的養生之道。
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-600 pl-3">專業烤茶操作流程表</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { step: '1. 溫罐', action: '小陶罐置於火塘或電爐烤熱', purpose: '預熱罐體，防止投茶後急劇降溫' },
                      { step: '2. 投茶', action: '投入約 3 克普洱散茶（新舊皆可）', purpose: '標準茶水比之起點' },
                      { step: '3. 抖動', action: '手部放鬆，持續、穩定抖動罐體', purpose: '確保受熱均勻，防止茶葉碳化焦黑' },
                      { step: '4. 烤香', action: '觀察茶葉至焦黃，聞取特殊焦香味', purpose: '激發高沸點香氣物質，使茶性由寒轉溫' },
                      { step: '5. 注水', action: '緩緩注入沸水，聽取沸騰聲並聞香', purpose: '萃取深層內含物，完成「起死回生」的轉化' },
                    ].map((item, i) => (
                      <div key={i} className="bg-stone-800/80 p-6 rounded-xl border border-stone-700 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-stone-800 transition-colors group">
                        <div className="md:col-span-2">
                          <span className="text-amber-500 font-bold text-xl block group-hover:scale-110 transition-transform">{item.step}</span>
                        </div>
                        <div className="md:col-span-5">
                          <span className="text-amber-500/80 text-xs font-bold uppercase tracking-wider block mb-1">動作要領</span>
                          <span className="text-white text-base font-medium">{item.action}</span>
                        </div>
                        <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-stone-700 pt-4 md:pt-0 md:pl-6">
                          <span className="text-emerald-500/80 text-xs font-bold uppercase tracking-wider block mb-1">目的與物理變化</span>
                          <span className="text-stone-200 text-sm leading-relaxed">{item.purpose}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Closing */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-900 to-stone-900 p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6 text-white border border-white/20">
                <Check size={40} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                旅程圓滿結束
              </h2>
              <p className="text-indigo-200 text-[19px] leading-relaxed">
                從西雙版納的熱帶雨林，到歷史悠久的茶馬古道；從生茶的霸氣，到熟茶的溫潤；從精緻的蓋碗，到豪邁的火塘。
                <br /><br />
                我們跨越了時間與空間，探索了普洱茶的每一個維度。
                願這份百科全書成為您茶路上的指引，在未來的每一次品飲中，都能感受到那份來自雲南山野的真摯與溫暖。
              </p>
              <div className="pt-8 border-t border-white/10 mt-8">
                <p className="text-base text-stone-400 uppercase tracking-widest font-bold">
                  The Encyclopedia of Pu-erh Tea
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  void topOffsetPx;
  const contentRef = useRef(null);
  const normalizedHref = typeof activeHref === 'string' && activeHref.startsWith('#puerh-') ? activeHref : '#puerh-1';
  const chapter = CHAPTERS[normalizedHref] ?? CHAPTERS['#puerh-1'];
  const chapterId = normalizedHref.slice(1);

  return (
    <article className="font-sans bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm">
      <div className="px-6 py-8 md:px-10 md:py-10">
        <div ref={contentRef}>
          <Section id={chapterId} title={chapter.title}>
            {chapter.content}
          </Section>
        </div>
      </div>
      <Lightbox lightboxData={lightboxData} onClose={() => setLightboxData(null)} />
    </article>
  );
}
