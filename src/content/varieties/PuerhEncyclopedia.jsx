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
  Microscope,
  Hand,
  Eye,
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

export default function PuerhEncyclopedia({ topOffsetPx, activeHref = '#puerh-1' }) {
  const [lightboxData, setLightboxData] = useState(null);

  const Lightbox = () => {
    if (!lightboxData) return null;
    return createPortal(
      <div
        className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        onClick={() => setLightboxData(null)}
      >
        <img
          src={lightboxData.src}
          alt={lightboxData.alt}
          className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
        />
        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
          <X size={48} />
        </button>
      </div>,
      document.body
    );
  };
  const CHAPTERS = {
    '#puerh-1': {
      title: '一：什麼是普洱茶',
      content: (
        <div className="space-y-8">
          {/* Visual Hero */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[2/1] group">
            <img
              src="/images/varieties/puerh/puerh_mountain_art.png"
              alt="Majestic Ancient Tea Mountain"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <div className="max-w-xl text-white">
                <span className="inline-block px-3 py-1 bg-amber-600/90 text-amber-50 rounded-full text-sm font-bold tracking-widest mb-3 backdrop-blur-sm">
                  AGED TEA
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-2 leading-tight">
                  越陳越香的<br />時光藝術
                </h2>
                <p className="text-stone-200 text-[19px] font-light border-l-4 border-amber-600 pl-4">
                  普洱茶的核心價值，在於其獨特的「後發酵」能力，使其具備隨時間轉化出更佳風味的生命力。
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="hidden md:flex flex-col items-center gap-2 text-stone-300">
                <div className="w-px h-12 bg-stone-200"></div>
                <Info size={24} />
                <div className="w-px h-full bg-stone-200"></div>
              </div>
              <div className="flex-1 space-y-4">
                <Subheading>普洱茶的價值與迷思</Subheading>
                <p className="text-[19px] text-stone-800 font-medium leading-relaxed">
                  許多人手中或許都藏有幾片普洱，如何能確定，所擁有的就是真正意義上的普洱茶？
                </p>
                <p className="text-stone-600 leading-relaxed">
                  真正的普洱茶，具備「越陳越香、越放越值錢」的核心價值。那麼，究竟什麼樣的茶才能被稱為真正的普洱茶，並擁有如此獨特的轉化魅力呢？
                </p>
              </div>
            </div>
          </div>

          {/* Shapes Visual Section */}
          <div className="bg-stone-50 rounded-3xl border border-stone-200 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-stone-200 rounded-lg text-stone-600"><Box size={20} /></div>
              <h4 className="text-xl font-bold text-stone-900">普洱茶的形態多樣性</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200 group">
                <img
                  src="/images/puerh_shapes.png"
                  alt="Pu-erh Tea Shapes: Cake, Brick, Tuo, Dragon Ball"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-3 text-center">
                  <span className="text-stone-200 text-sm font-bold tracking-widest uppercase">Classic Shapes</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: Disc, name: "七子餅 (Cake)", desc: "357g 經典圓餅，最常見的收藏規格。" },
                  { icon: Box, name: "茶磚 (Brick)", desc: "長方或正方磚狀，早期便於馬幫運輸。" },
                  { icon: Circle, name: "沱茶 (Tuo)", desc: "如碗狀或蘑菇狀，透氣性佳。" },
                  { icon: Gem, name: "龍珠 (Pearl)", desc: "精緻球形，一粒一泡，現代便攜之選。" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-stone-200 hover:border-amber-300 transition-colors">
                    <div className="p-2.5 bg-stone-100 text-stone-600 rounded-full shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-stone-800 text-base">{item.name}</div>
                      <div className="text-sm text-stone-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
                <div className="mt-2 p-3 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800 leading-relaxed flex gap-2">
                  <Info size={14} className="shrink-0 mt-0.5" />
                  儘管外形千變萬化，其本質皆源自同一原料——「曬青毛茶」。
                </div>
                <div className="text-sm text-stone-500 mt-2 space-y-1">
                  <div className="font-bold">其他常見形態：</div>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>筒裝 (Tong)：</strong>將七片餅茶用竹筍殼包裝，利於轉化與運輸。</li>
                    <li><strong>茶頭 (Tea Head)：</strong>熟茶發酵自然結塊，果膠豐富，耐泡度極高。</li>
                    <li><strong>小餅 (Small Cake)：</strong>如 100g/200g 規格，適合嘗鮮與送禮。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Callout title="權威定義：國家標準 (2008)">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 text-base text-stone-700 leading-relaxed space-y-3">
                <p>
                  在2008年國標確立前，大量非雲南產（如川、黔）或非曬青工藝（烘青、炒青）的茶葉冒充普洱。這些茶因高溫殺死了「活性酶」，存放多年後非但不會變香，反而味寡如水。
                </p>
                <div className="flex items-center gap-2 font-bold text-amber-700 bg-amber-50 p-2 rounded-lg inline-block">
                  <CheckCircle2 size={16} /> 核心保障：越陳越香的基礎
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                <div className="text-center space-y-3">
                  <Award size={40} className="mx-auto text-amber-500" />
                  <div className="text-sm text-stone-500 font-bold uppercase tracking-widest">Official Standard</div>
                  <div className="text-stone-900 font-bold text-base">地理標誌保護產品</div>
                  <div className="h-px bg-stone-100 w-1/2 mx-auto"></div>
                  <div className="text-sm text-stone-400">GB/T 22111-2008</div>
                </div>
              </div>
            </div>
          </Callout>

          {/* 3 Keywords Cards */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <div className="w-2 h-6 bg-stone-800 rounded-full"></div>
                定義的三大關鍵詞
              </h4>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  id: 1,
                  title: "地理標誌保護範圍",
                  sub: "Geography",
                  icon: MapPin,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                  border: "border-emerald-100",
                  desc: "必須是雲南省內指定產區（11個州市，639個鄉鎮）。"
                },
                {
                  id: 2,
                  title: "雲南大葉種曬青",
                  sub: "Species & Process",
                  icon: Leaf,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  border: "border-amber-100",
                  desc: "特定優良品種（內含物質豐富）+ 日光乾燥（保留活性）。"
                },
                {
                  id: 3,
                  title: "特定加工工藝",
                  sub: "Technique",
                  icon: Coffee,
                  color: "text-rose-600",
                  bg: "bg-rose-50",
                  border: "border-rose-100",
                  desc: "曬青毛茶 → 蒸壓成型 (生茶) 或 渥堆發酵 (熟茶)。"
                }
              ].map(card => (
                <div key={card.id} className={`p-5 rounded-2xl border ${card.border} ${card.bg} hover:shadow-md transition-shadow`}>
                  <card.icon className={`mb-3 ${card.color}`} size={28} />
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">{card.sub}</div>
                  <div className="font-bold text-stone-900 text-[19px] mb-2">{card.title}</div>
                  <div className="text-[17px] text-stone-600 leading-snug">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Region Map Concept */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 space-y-6">
            <Subheading>關鍵詞一：地理標誌保護範圍</Subheading>
            <p className="text-stone-700 text-[17px]">
              主要指雲南省內約 90% 的產茶區。離開此範圍（如四川、貴州），即便工藝相同，亦不可稱為普洱。
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Region Cards */}
              {[
                {
                  name: "保山茶區",
                  desc: "滇紅名產地，普洱原料較少但品質不俗。",
                  mountains: ["黃家寨 (兼具柔/香/甜)", "昔歸 (強回甘)"],
                  color: "from-amber-500 to-orange-600"
                },
                {
                  name: "臨滄茶區",
                  desc: "生態優良，香甜柔和，台灣市場受歡迎。",
                  mountains: ["冰島", "壩糯", "懂過", "大雪山"],
                  extra: "香竹箐 3200年茶王樹",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  name: "普洱茶區",
                  desc: "茶馬古道重鎮，天然氧吧，台地茶多。",
                  mountains: ["邦崴 (過渡型茶樹)", "景邁山", "困鹿山"],
                  color: "from-stone-500 to-stone-700"
                },
                {
                  name: "西雙版納茶區",
                  desc: "世界茶源中心，古六大茶山所在地。",
                  mountains: ["古六大：易武、倚邦...", "新六大：老班章、南糯..."],
                  color: "from-rose-500 to-pink-600"
                }
              ].map((region, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-xl border border-stone-100 shadow-sm group hover:border-stone-300 transition-colors">
                  <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${region.color}`}></div>
                  <div className="p-4 pl-6">
                    <h5 className="font-bold text-stone-900 text-[19px] mb-1">{region.name}</h5>
                    <p className="text-base text-stone-600 mb-3">{region.desc}</p>

                    <div className="space-y-1">
                      {region.mountains.map((m, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-base font-medium text-stone-700 bg-stone-50 px-2 py-1 rounded w-fit">
                          <Mountain size={12} className="text-stone-400" /> {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process & Species */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <Subheading>關鍵詞二：雲南大葉種</Subheading>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Leaf size={24} className="text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-stone-900 text-base">基因庫完整</strong>
                    <span className="text-sm text-stone-600">葉大、樹齡長、樹型高大。</span>
                  </div>
                </div>
                <div className="pl-9 space-y-2">
                  <div className="text-sm p-2 bg-emerald-50 rounded text-emerald-800 border border-emerald-100">
                    <strong>群體種 (原生)：</strong> 有性繁殖，風味複雜多變 (古樹茶主力)。
                  </div>
                  <div className="text-sm p-2 bg-stone-50 rounded text-stone-600 border border-stone-100">
                    <strong>無性系 (改良)：</strong> 扦插繁殖，品質穩定 (台地茶主力)。
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <Subheading>關鍵詞三：特定工藝</Subheading>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Sun size={24} className="text-amber-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-stone-900 text-base">曬青 (Sun-Dried)</strong>
                    <span className="text-sm text-stone-600">靈魂所在。日光溫和乾燥，保留「活性酶」。</span>
                  </div>
                </div>
                <div className="pl-9 mt-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-400 mb-1">
                    <span>PROCESS FLOW</span>
                    <div className="h-px bg-stone-200 flex-1"></div>
                  </div>
                  <div className="flex items-center gap-2 text-base text-stone-800">
                    <span className="px-2 py-1 bg-amber-100 rounded">曬青毛茶</span>
                    <span>→</span>
                    <div className="flex flex-col gap-1">
                      <span className="px-2 py-1 border border-stone-200 rounded">蒸壓 (生茶)</span>
                      <span className="px-2 py-1 border border-stone-200 rounded">渥堆 (熟茶)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Footer */}
          <div className="rounded-2xl p-6 bg-stone-800 text-stone-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Award size={100} />
            </div>
            <div className="relative z-10">
              <h5 className="text-white font-bold text-[19px] mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" /> 核心總結
              </h5>
              <p className="text-base leading-relaxed opacity-90 mb-4">
                普洱茶的權威定義 = <strong>雲南產區</strong> + <strong>大葉種原料</strong> + <strong>曬青工藝</strong>。
              </p>
              <div className="p-3 bg-white/10 rounded-xl text-sm border border-white/10">
                <strong className="text-amber-400">專家的話：</strong>
                存茶建議選擇「餅茶」優於「散茶」。緊壓形式創造的微環境，能帶來更豐富（90種 vs 40種香氣）的轉化驚喜。
              </div>
            </div>
          </div>
        </div>
      ),
    },
    '#puerh-2': {
      title: '二：普洱茶的前世今生',
      content: (
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[21/9] group">
            <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-700"></div>
            <img
              src="/images/varieties/puerh/puerh_caravan_art.png"
              alt="Ancient Tea Horse Road Caravan Illustration"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800/80 backdrop-blur border border-stone-700 text-stone-300 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                  <Mountain size={14} /> History & Legacy
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  茶馬古道的<br />千年回響
                </h2>
                <p className="text-stone-300 text-[19px] md:text-xl font-light leading-relaxed">
                  從三國的一葉藥草，到清朝的瑞貢天朝，普洱茶的歷史就是一部雲南各民族的文化史。
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: The Past (Timeline Style) */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-stone-100 rounded-xl text-stone-800">
                <Leaf size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900">前世：從起源到清代盛世</h3>
                <p className="text-stone-500">1733年之前：主要依靠文獻記載的漫長歲月</p>
              </div>
            </div>

            <div className="relative border-l-2 border-stone-200 ml-4 space-y-10 pb-4">
              {/* Timeline Item 1 */}
              <div className="relative pl-8 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-stone-200 rounded-full border-4 border-white group-hover:bg-amber-500 transition-colors"></div>
                <div className="mb-2">
                  <span className="text-sm font-black tracking-widest text-stone-400 uppercase">BEGINNINGS</span>
                  <h4 className="text-xl font-bold text-stone-900">起源與傳說（商周至三國）</h4>
                </div>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 group-hover:border-amber-100 transition-colors">
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <div className="p-2 bg-white rounded-lg border border-stone-200 shrink-0"><CheckCircle2 size={16} className="text-emerald-600" /></div>
                      <div className="text-base text-stone-700 leading-relaxed">
                        <strong className="block text-stone-900 mb-1">最早文獻記載</strong>
                        據《華陽國志·巴志》：「周武王伐紂，實巴蜀之產……其茶蜜皆納貢之。」表明商周時期雲南已將茶作為貢品。
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="p-2 bg-white rounded-lg border border-stone-200 shrink-0"><CheckCircle2 size={16} className="text-emerald-600" /></div>
                      <div className="text-base text-stone-700 leading-relaxed">
                        <strong className="block text-stone-900 mb-1">茶祖諸葛亮（武侯）傳說</strong>
                        三國時諸葛亮南征，夢得仙人指點，以當地茶葉煮水治癒士兵瘟疫。後被尊為「茶祖」，留下攸樂、革登等地名傳說。至今茶王節仍祭拜這位「茶神」。
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-stone-200 rounded-full border-4 border-white group-hover:bg-amber-500 transition-colors"></div>
                <div className="mb-2">
                  <span className="text-sm font-black tracking-widest text-stone-400 uppercase">DEVELOPMENT</span>
                  <h4 className="text-xl font-bold text-stone-900">興盛與發展（唐、宋、元、明）</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                    <div className="text-amber-800 font-bold mb-2 flex items-center gap-2 text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> 唐代：興起與外傳
                    </div>
                    <p className="text-base text-stone-600 leading-relaxed">
                      「普洱茶興於唐，盛於宋」。唐代《蠻書》記載加工為「散收，無採造法」，飲法則加「椒薑桂」。此時茶葉已傳入西藏，開啟「茶馬互市」與茶馬古道。
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                    <div className="text-amber-800 font-bold mb-2 flex items-center gap-2 text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> 元明：定名與傳承
                    </div>
                    <p className="text-base text-stone-600 leading-relaxed">
                      由元代「步日部」演變為「普洱」。明代《滇略》載：「士庶所用，皆普茶也，蒸而團之。」證明緊壓茶工藝（並未隨朱元璋廢團茶而消失）在雲南得以完整保留。
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-stone-200 rounded-full border-4 border-white group-hover:bg-amber-500 transition-colors"></div>
                <div className="mb-2">
                  <span className="text-sm font-black tracking-widest text-amber-500 uppercase">GOLDEN AGE</span>
                  <h4 className="text-xl font-bold text-stone-900">巔峰時期（清代）</h4>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Award size={80} className="text-amber-600" /></div>
                  <div className="relative z-10 space-y-3">
                    <p className="text-amber-900 font-medium italic text-[19px] opacity-80">
                      「普洱茶名重天下，出普洱府所屬六大茶山，周八百里，入山做茶者數十萬人...」
                    </p>
                    <div className="h-px bg-amber-200 w-24"></div>
                    <p className="text-base text-amber-900/80 leading-relaxed">
                      清朝是極盛期，普洱茶列為皇家貢茶。道光皇帝御賜 <strong>「瑞貢天朝」</strong> 牌匾，懸掛於易武，確立了其至高無上的地位。這不僅是美味，更是千年的文脈傳承。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: The Present (Era Cards) */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-stone-100 rounded-xl text-stone-800">
                <Box size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900">今生：從號級茶到百家爭鳴</h3>
                <p className="text-stone-500">1733年至今：五大時代的演變</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  period: "1733 起",
                  name: "號級茶時代",
                  icon: Award,
                  color: "text-amber-700",
                  bg: "bg-amber-50",
                  border: "border-amber-200",
                  bullets: [
                    "標誌：清代首個茶莊「同興號」成立。",
                    "主導：私人老字號（同慶號、宋聘號）。",
                    "特點：傳統石磨壓製，有品牌意識（內飛、大票）。"
                  ]
                },
                {
                  period: "1950 - 1972",
                  name: "印級茶時代",
                  icon: Disc,
                  color: "text-rose-700",
                  bg: "bg-rose-50",
                  border: "border-rose-200",
                  bullets: [
                    "背景：國營三大廠統一管理（昆明、勐海、下關）。",
                    "標誌：「八中」商標，紅印圓茶為代表。",
                    "價值：如今市場價值極高的骨灰級老茶。"
                  ]
                },
                {
                  period: "1972 - 1992",
                  name: "七子餅茶時代",
                  icon: CheckCircle2,
                  color: "text-emerald-700",
                  bg: "bg-emerald-50",
                  border: "border-emerald-200",
                  bullets: [
                    "標誌：1973年昆明茶廠試製「熟茶渥堆發酵」成功。",
                    "意義：人工加速陳化，開啟普洱茶新篇章（月餘即達陳韻）。"
                  ]
                },
                {
                  period: "1992 - 2007",
                  name: "中期茶時代",
                  icon: Mountain,
                  color: "text-stone-700",
                  bg: "bg-stone-50",
                  border: "border-stone-200",
                  bullets: [
                    "背景：市場經濟開啟，私營茶廠崛起。",
                    "名品：大益改制前的經典（紅大益、紫大益、大白菜、綠大樹）。"
                  ]
                },
                {
                  period: "2007 至今",
                  name: "新代茶時代",
                  icon: Sun,
                  color: "text-sky-700",
                  bg: "bg-sky-50",
                  border: "border-sky-200 md:col-span-2 lg:col-span-2",
                  bullets: [
                    "背景：2007崩盤後回歸理性，追求原料極致。",
                    "特點：山頭茶、古樹茶崛起。百花齊放，百家爭鳴。"
                  ]
                }
              ].map((era, idx) => (
                <div key={idx} className={`rounded-2xl border ${era.border} bg-white p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${era.border.includes('col-span') ? era.border : ''}`}>
                  <div className={`absolute top-0 right-0 p-4 opacity-5 ${era.color}`}><era.icon size={100} /></div>
                  <div className="relative z-10">
                    <span className={`inline-block px-2 py-1 rounded text-sm font-bold tracking-widest uppercase mb-2 ${era.bg} ${era.color}`}>
                      {era.period}
                    </span>
                    <h4 className="text-xl font-black text-stone-900 mb-4">{era.name}</h4>
                    <ul className="space-y-3">
                      {era.bullets.map((txt, i) => (
                        <li key={i} className="flex gap-3 text-base text-stone-600 leading-snug">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${era.color.replace('text-', 'bg-')}`}></div>
                          <span>{txt.split('：').map((part, k) => k === 0 ? <strong className="text-stone-800" key={k}>{part}：</strong> : part)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion Footer */}
          <div className="rounded-2xl p-6 bg-stone-900 text-stone-300">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="p-4 bg-stone-800 rounded-full shrink-0">
                <Gem size={32} className="text-amber-400" />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h5 className="text-white font-bold text-[19px]">品飲審美的變遷</h5>
                <p className="text-base leading-relaxed opacity-80">
                  從唐宋的古樸，到國營廠的拼配標準，再到今日山頭古樹的百家爭鳴。
                  現代茶客不再盲目追求傳說中的號級老茶，轉而探索 <strong>老班章的霸氣、冰島的甜潤、易武的柔美</strong>，這是一種更透明、更具風土質感的品飲進階。
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    '#puerh-3': {
      title: '三：普洱茶的分類',
      content: (
        <div className="space-y-12">
          {/* Intro */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-4">
              <Subheading>按加工方式分類：生茶 vs. 熟茶</Subheading>
              <p className="text-[19px] text-stone-800 leading-relaxed">
                這是普洱茶<strong>最基本、也是最重要</strong>的分類方式。
              </p>
              <p className="text-stone-600 leading-relaxed">
                它們的核心區別在於是否經過 <strong>「渥堆發酵」</strong> 這道人工干預工藝。這決定了茶葉的顏色、香氣、口感以及後期的轉化路徑。
              </p>
            </div>
          </div>

          {/* Visual Comparison Section */}
          <div className="rounded-3xl border border-stone-200 bg-white overflow-hidden shadow-xl">
            {/* Visual Hero Split */}
            <div className="relative aspect-[2/1] md:aspect-[3/1] group">
              <img
                src="/images/varieties/puerh/puerh_yin_yang_art.png"
                alt="Artistic Raw vs Ripe Pu-erh Tea Contrast"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-transparent to-amber-900/60"></div>

              {/* Labels Overlay */}
              <div className="absolute inset-0 flex">
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-emerald-800 font-black tracking-widest shadow-lg border border-emerald-100 transform -translate-x-4 md:-translate-x-0">
                    RAW (SHENG) <span className="hidden md:inline">· 生茶</span>
                  </div>
                </div>
                <div className="w-px bg-white/50 backdrop-blur"></div>
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="bg-stone-900/90 backdrop-blur-md px-6 py-3 rounded-full text-amber-500 font-black tracking-widest shadow-lg border border-amber-900/50 transform translate-x-4 md:translate-x-0">
                    RIPE (SHOU) <span className="hidden md:inline">· 熟茶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Cards Grid */}
            <div className="p-2 bg-stone-50 grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* Raw Side */}
              <div className="bg-white rounded-2xl p-6 border border-stone-100 space-y-6">
                <div className="flex items-center gap-3 text-emerald-700 mb-2">
                  <Leaf size={24} /> <h4 className="font-bold text-[19px]">生茶特徵</h4>
                </div>

                <div className="space-y-5">
                  {[
                    { label: "工藝", val: "殺青→揉捻→曬乾→蒸壓。自然發酵。" },
                    { label: "茶餅顏色", val: "墨綠色，條索清晰。" },
                    { label: "茶湯顏色", val: "橙黃明亮。", colorDot: "bg-amber-400" },
                    { label: "香氣", val: "高揚，花香/蜜香/果香為主。" },
                    { label: "口感", val: "苦澀明顯但化開快，回甘生津強烈。" },
                    { label: "茶性", val: "茶氣濃郁猛烈 (較寒)。" }
                  ].map((row, i) => (
                    <div key={i} className="flex gap-3 text-base">
                      <span className="font-bold text-emerald-800 w-20 shrink-0 text-right">{row.label}</span>
                      <span className="text-stone-600 flex-1 flex items-center gap-2">
                        {row.colorDot && <span className={`w-3 h-3 rounded-full ${row.colorDot} shadow-sm border border-black/5`}></span>}
                        {row.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ripe Side */}
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 space-y-6 text-stone-300">
                <div className="flex items-center gap-3 text-amber-500 mb-2">
                  <Coffee size={24} /> <h4 className="font-bold text-[19px] text-white">熟茶特徵</h4>
                </div>

                <div className="space-y-5">
                  {[
                    { label: "工藝", val: "經「渥堆發酵」(人工加速陳化)。" },
                    { label: "茶餅顏色", val: "棕褐色 或 黑褐色。" },
                    { label: "茶湯顏色", val: "紅濃透亮 (棗紅/酒紅)。", colorDot: "bg-red-900" },
                    { label: "香氣", val: "溫厚，陳香/木香/棗香為主。" },
                    { label: "口感", val: "溫潤甜滑，幾乎無苦澀。" },
                    { label: "茶性", val: "溫暖柔和，不礙睡眠 (溫性)。" }
                  ].map((row, i) => (
                    <div key={i} className="flex gap-3 text-base">
                      <span className="font-bold text-amber-500/80 w-20 shrink-0 text-right">{row.label}</span>
                      <span className="text-stone-300 flex-1 flex items-center gap-2">
                        {row.colorDot && <span className={`w-3 h-3 rounded-full ${row.colorDot} shadow-sm border border-white/20`}></span>}
                        {row.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-stone-700/50 rounded-xl border border-stone-600 text-sm leading-relaxed flex gap-2">
                  <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                  <div>
                    <strong className="text-white">健康益處：</strong>
                    渥堆富含益生菌，降脂護胃。小分子易吸收，適合人群廣。
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Classification 2: Blending / Single Origin / Single Tree */}
          <div className="space-y-6">
            <Subheading>按用料工藝分類：拼配、純料與單株</Subheading>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Card 1: Blended */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-amber-300 transition-colors">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                  <Disc size={20} />
                </div>
                <h4 className="text-[19px] font-black text-stone-900 mb-2">拼配</h4>
                <div className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4">Blended Tea</div>
                <p className="text-base text-stone-600 leading-relaxed mb-4">
                  將不同產區、年份、等級的毛茶按比例混合。
                </p>
                <div className="text-sm text-stone-500 bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <strong className="text-stone-700 block mb-1">目的：</strong>
                  揚長避短，創造協調穩定的口感。大廠標準化產品的基石。
                </div>
              </div>

              {/* Card 2: Single Origin */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                  <Mountain size={20} />
                </div>
                <h4 className="text-[19px] font-black text-stone-900 mb-2">純料 (山頭茶)</h4>
                <div className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4">Single Origin</div>
                <p className="text-base text-stone-600 leading-relaxed mb-4">
                  同一產區、季節、樹種。「相對概念」。
                </p>
                <div className="text-sm text-stone-500 bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <strong className="text-stone-700 block mb-1">目的：</strong>
                  體現特定山頭的風土特徵（如老班章的霸氣）。
                </div>
              </div>

              {/* Card 3: Single Tree */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                  <Gem size={20} />
                </div>
                <h4 className="text-[19px] font-black text-stone-900 mb-2">單株</h4>
                <div className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-4">Single Tree</div>
                <p className="text-base text-stone-600 leading-relaxed mb-4">
                  極致追求。僅用一棵古樹採摘製作。
                </p>
                <div className="text-sm text-stone-500 bg-white/50 p-3 rounded-lg border border-amber-100">
                  <strong className="text-stone-700 block mb-1">特點：</strong>
                  口感最純粹直接，但個體差異大。價格昂貴，發燒友之選。
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8">
            <Subheading>按茶樹生長方式分類</Subheading>

            <div className="grid gap-8 mt-6">
              {/* Wild Tea */}
              <div className="flex gap-4 group">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="w-px h-full bg-stone-200 border-l border-dashed border-stone-300"></div>
                </div>
                <div className="pb-6">
                  <h4 className="text-[19px] font-bold text-stone-900">野生茶 (Wild Tea)</h4>
                  <p className="text-base text-stone-600 mt-1 mb-2">原始森林中非人工栽培（如千家寨2700年茶王）。</p>
                  <div className="text-sm bg-red-50 text-red-800 p-2 rounded border border-red-100 inline-block font-medium">
                    <strong>注意：</strong> 未馴化可能含微毒，腸胃弱者慎飲。
                  </div>
                </div>
              </div>

              {/* Cultivated Ancient Tree */}
              <div className="flex gap-4 group">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Award size={20} />
                  </div>
                  <div className="w-px h-full bg-stone-200 border-l border-dashed border-stone-300"></div>
                </div>
                <div className="pb-6">
                  <h4 className="text-[19px] font-bold text-stone-900">栽培型古樹茶 (Cultivated Ancient Tree)</h4>
                  <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">Mainstream Choice</div>
                  <p className="text-base text-stone-600 leading-relaxed mb-3">
                    由古代先民選育馴化而來（如鳳慶3200年茶王）。是市面上古樹茶的主力。
                  </p>
                  <ul className="text-base text-stone-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" /> 安全性高
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" /> 口感協調、內質豐富
                    </li>
                  </ul>
                </div>
              </div>

              {/* Plantation Tea */}
              <div className="flex gap-4 group">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 group-hover:bg-stone-500 group-hover:text-white transition-colors">
                    <Box size={20} />
                  </div>
                </div>
                <div className="pb-2">
                  <h4 className="text-[19px] font-bold text-stone-900">台地茶 (Plantation Tea)</h4>
                  <p className="text-base text-stone-600 mt-1 mb-3">
                    現代密植高產茶園，多為1949年後種植。需人為干預（施肥等）。
                  </p>
                  <div className="bg-white p-3 rounded-xl border border-stone-200 text-base leading-relaxed">
                    <div className="flex items-center gap-2 mb-2 font-bold text-stone-800">
                      <TrendingUp size={16} className="text-amber-500" />
                      口感對比：拋物線 vs 直線
                    </div>
                    <p className="text-stone-600 text-sm">
                      <strong>台地茶：</strong>高開低走。前兩泡香氣強烈，隨後迅速淡薄（直線下降）。<br />
                      <strong>古樹茶：</strong>循序漸進。由淺入深，層次豐富，耐泡度高（優美拋物線）。
                    </p>
                    <div className="mt-2 text-sm text-stone-400 italic">
                      * 這如同做人，古樹茶更似東方處世之道，深交後方顯醇厚。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
            <Subheading>按外形分類：餅、沱、磚、散茶與龍珠</Subheading>
            <ul className="list-disc pl-5 space-y-3 text-base text-stone-700 leading-relaxed">
              <li>
                <strong>餅茶：</strong>最經典的形態。標準七子餅重量為357克，七餅一提（一筒）約2500克。此規格源於古代茶馬古道運輸的便利性計算。
              </li>
              <li>
                <strong>沱茶：</strong>外形如碗，常見重量為100克或250克。選料通常較為細嫩，口感鮮活。
              </li>
              <li>
                <strong>磚茶：</strong>常見重量為250克至1000克不等，主要為了便於運輸至西藏、蒙古等地。其優點是壓制緊實，轉化雖慢但極為穩定，且不易串味。
              </li>
              <li>
                <strong>龍珠茶：</strong>屬於團茶的一種，近年來因其一粒一泡、沖泡方便而廣受歡迎。
              </li>
              <li>
                <strong>散茶：</strong>保留了茶葉的原始形態。優點是便於觀察用料，可防止「內外不一」；缺點是轉化相對較弱，且佔用空間大，保存不當極易跑氣和串味。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
            <Subheading>按存放方式分類：乾倉 vs. 濕倉</Subheading>
            <ul className="list-disc pl-5 space-y-3 text-base text-stone-700 leading-relaxed">
              <li>
                <strong>乾倉普洱 (Dry-Stored Pu&apos;er)</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <strong>◦ 定義：</strong>指在乾燥、通風、陰涼、無雜味、相對濕度小於70%的標準環境中，讓茶葉進行自然緩慢的發酵陳化。
                  </div>
                  <div>
                    <strong>◦ 優點：</strong>乾倉存放能最大程度地保存普洱茶的本質，使其在歲月中「越陳越香」，轉化出乾淨、純正、富有層次的風味，品飲價值和收藏價值極高。
                  </div>
                </div>
              </li>
              <li>
                <strong>濕倉普洱 (Wet-Stored Pu&apos;er)</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <strong>◦ 定義：</strong>這是一種商業行為，指人為地將茶葉置於高溫高濕的環境中（如地下室、地窖），以求在短時間內加速其陳化。
                  </div>
                  <div>
                    <strong>◦ 風險：</strong>濕倉雖然轉化快，但極易滋生黴菌等有害物質。許多早期港倉茶帶有的「倉味」或「黴味」，便源於此。在此，我想分享我的個人原則：我從不碰任何有雜味、異味，或喝了會導致「鎖喉」（喉嚨不適）的茶。飲茶本為養生，若有損健康，則本末倒置。
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl p-5 space-y-3 glass-panel">
            <div className="text-sm font-extrabold tracking-widest glass-panel__kicker">課程總結與分類知識應用</div>
            <div className="text-base leading-relaxed">從五個核心維度系統地學習了普洱茶的分類方法：</div>
            <ol className="list-decimal pl-5 space-y-2 text-base leading-relaxed">
              <li>按加工方式：分為生茶與熟茶。</li>
              <li>按用料工藝：分為拼配、純料與單株。</li>
              <li>按生長方式：分為野生茶、栽培型古樹茶與台地茶。</li>
              <li>按外形：分為餅、沱、磚、散茶與龍珠等。</li>
              <li>按存放方式：分為乾倉與濕倉。</li>
            </ol>
          </div>
        </div >
      ),
    },
    '#puerh-4': {
      title: '四：普洱茶的品鑑方式',
      content: (
        <div className="space-y-12">
          {/* Intro */}
          <div className="rounded-3xl bg-stone-900 p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-700 bg-stone-800/50 backdrop-blur text-amber-400 text-sm font-bold tracking-widest uppercase">
                <Gem size={14} /> The Art of Tasting
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                品鑑八法：系統化感知普洱茶
              </h2>
              <p className="text-stone-400 text-[19px] leading-relaxed">
                以「時、外形、香氣、湯色、滋味、活性、葉底、茶韻」八大維度，建立可重複、可比較的專業品鑑框架。
              </p>
              <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-800/50">
                <ClickableImage
                  src="/images/varieties/puer-ch04-hero.png"
                  alt="品鑑八法：靜心品茗"
                  caption="品鑑八法：於靜謐中覺察茶湯的色香味韻（點擊放大）"
                  captionClassName="text-stone-400"
                />
              </div>
            </div>
          </div>

          {/* The 8 Dimensions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 01. Timing */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 font-bold text-xl">01</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">時（茶時）</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Timing & Environment</div>
                </div>
              </div>
              <p className="text-base text-stone-600 mb-4">品飲的環境與時機顯著影響感受。</p>
              <div className="space-y-3 bg-stone-50 rounded-xl p-4">
                <div className="flex gap-3 text-base">
                  <CloudSun size={18} className="text-amber-500 shrink-0" />
                  <span className="text-stone-700"><strong>天氣：</strong>晴天香氣高揚；雨天香氣沈悶。</span>
                </div>
                <div className="flex gap-3 text-base">
                  <Thermometer size={18} className="text-rose-500 shrink-0" />
                  <span className="text-stone-700"><strong>溫度：</strong>天冷宜熟茶（暖）；天熱宜生茶（解渴）。</span>
                </div>
                <div className="flex gap-3 text-base">
                  <Mountain size={18} className="text-stone-500 shrink-0" />
                  <span className="text-stone-700"><strong>海拔：</strong>高海拔沸點低，影響物質浸出與滋味。</span>
                </div>
              </div>
            </div>

            {/* 02. Appearance */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 font-bold text-xl">02</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">外形（乾茶）</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Appearance</div>
                </div>
              </div>
              <p className="text-base text-stone-600 mb-4">沖泡前對品質的初步判斷。</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "餅形", desc: "周正圓潤，邊緣勻稱。" },
                  { label: "條索", desc: "緊結清晰，油潤有光澤。" },
                  { label: "淨度", desc: "無雜質(茶果/粗梗/泥土)。" },
                  { label: "嫩度", desc: "芽頭 vs 粗老 (易武粗老亦佳)。" }
                ].map((item, i) => (
                  <div key={i} className="bg-stone-50 p-3 rounded-lg text-sm">
                    <strong className="block text-stone-900 mb-1">{item.label}</strong>
                    <span className="text-stone-500">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 03. Aroma (Full Width) */}
            <div className="md:col-span-2 bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 border border-amber-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl">03</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">香氣</h4>
                  <div className="text-sm font-bold text-amber-400 uppercase tracking-widest">Aroma</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h5 className="font-bold text-stone-900 flex items-center gap-2"><Wind size={16} /> 香氣維度</h5>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-base text-stone-700">
                      <span className="font-bold text-amber-600 w-12 shrink-0">高低</span>
                      <span>擴散度。好茶一泡滿室生香。</span>
                    </li>
                    <li className="flex gap-3 text-base text-stone-700">
                      <span className="font-bold text-amber-600 w-12 shrink-0">長短</span>
                      <span>持久度。「水含香」，飲後齒頰留香。</span>
                    </li>
                    <li className="flex gap-3 text-base text-stone-700">
                      <span className="font-bold text-amber-600 w-12 shrink-0">濃淡</span>
                      <span>馥郁程度。</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-bold text-stone-900 flex items-center gap-2"><Flower size={16} /> 常見類型</h5>
                  <div className="flex flex-wrap gap-2">
                    {["蘭花香", "玫瑰香", "水蜜桃香", "龍眼香", "木質香(陳)", "藥香(陳)", "蔘香(陳)"].map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-amber-200 rounded-full text-sm text-amber-800 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-stone-500 italic mt-2">
                    * 有年份的陳茶會轉出沈穩木質、藥香，帶給人平靜感。
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <ClickableImage
                  src="/images/varieties/puer-ch04-aroma.png"
                  alt="香氣的具象化：蘭、玫、木"
                  caption="香氣的具象化：如蘭似蜜，歲月更添沉穩木韻"
                />
              </div>
            </div>


            {/* 04. Color */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 font-bold text-xl">04</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">湯色</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Liquor Color</div>
                </div>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 text-center mb-4">
                <div className="text-base font-bold text-stone-800 mb-2">黃金標準</div>
                <div className="text-2xl font-black text-amber-500 tracking-wider">晶瑩透亮</div>
              </div>
              <ul className="space-y-2 text-base text-stone-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> 清澈透亮，有「金圈」(優)</li>
                <li className="flex gap-2"><XCircle size={16} className="text-stone-400 shrink-0" /> 渾濁灰暗，無光澤 (劣/受潮)</li>
              </ul>

              <div className="mt-6">
                <ClickableImage
                  src="/images/varieties/puer-ch04-color.png"
                  alt="茶湯色澤標準：晶瑩透亮與金圈"
                  caption="茶湯色澤標準：左為渾濁劣質，右為晶瑩透亮具金圈"
                />
              </div>
            </div>

            {/* 05. Taste */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 font-bold text-xl">05</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">滋味</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Taste</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-base text-stone-700 border-l-2 border-stone-300 pl-3 italic">
                  「苦能回甘，澀能生津。」
                </div>
                <p className="text-sm text-stone-500">
                  苦澀是骨架。關鍵在於是否能<strong>迅速化開</strong>並轉化為甜潤。
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="p-2 bg-stone-50 rounded text-center text-stone-700">飽滿度 (厚薄)</span>
                  <span className="p-2 bg-stone-50 rounded text-center text-stone-700">壓舌感 (重量)</span>
                  <span className="p-2 bg-stone-50 rounded text-center text-stone-700">果膠感 (黏稠)</span>
                  <span className="p-2 bg-stone-50 rounded text-center text-stone-700">水路 (寬/細)</span>
                </div>
              </div>
            </div>

            {/* 06. Activity */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xl">06</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">活性 (核心)</h4>
                  <div className="text-sm font-bold text-emerald-500 uppercase tracking-widest">Activity</div>
                </div>
              </div>
              <p className="text-base text-stone-600 mb-3">
                「越陳越香」的物質基礎 (糖苷類)。資深茶客最看重的維度。
              </p>
              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl text-emerald-800 text-base font-bold">
                <Zap size={16} /> 強烈回甘生津 + 喉韻清涼
              </div>
            </div>

            {/* 07. Leaf Bottom */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 font-bold text-xl">07</div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900">葉底</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Wet Leaf</div>
                </div>
              </div>
              <div className="space-y-2 text-base text-stone-600">
                <div className="flex justify-between border-b border-stone-100 pb-1">
                  <span>嗅覺</span> <span className="text-stone-900 font-medium">無雜味/焦味</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1">
                  <span>視覺</span> <span className="text-stone-900 font-medium">勻整/鮮活</span>
                </div>
                <div className="flex justify-between">
                  <span>觸覺</span> <span className="text-stone-900 font-medium">有彈性 (忌一揉即爛)</span>
                </div>
              </div>
            </div>

            {/* 08. Rhyme (Conclusion) */}
            <div className="md:col-span-2 bg-stone-900 rounded-2xl p-8 text-center text-stone-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Gem size={120} /></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-12 h-12 mx-auto rounded-full bg-stone-800 flex items-center justify-center text-amber-500 font-bold text-xl mb-4 border border-stone-700">08</div>
                <h4 className="text-2xl font-black text-white mb-2">茶韻 (最高層次)</h4>
                <div className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6">Tea Rhyme</div>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="p-4 bg-stone-800 rounded-xl border border-stone-700">
                    <strong className="block text-white mb-2">體感</strong>
                    <span className="text-base opacity-80">微汗、打嗝、暖腹 (vs 脹氣不適)。</span>
                  </div>
                  <div className="p-4 bg-stone-800 rounded-xl border border-stone-700">
                    <strong className="block text-white mb-2">茶氣</strong>
                    <span className="text-base opacity-80">身體的直接能量反饋。</span>
                  </div>
                  <div className="p-4 bg-stone-800 rounded-xl border border-stone-700">
                    <strong className="block text-white mb-2">陳韻</strong>
                    <span className="text-base opacity-80">歲月帶來的安穩感與層次。</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-stone-700">
                <ClickableImage
                  src="/images/varieties/puer-ch04-rhyme.png"
                  alt="茶韻體感：氣感流動與身心安頓"
                  caption="茶韻體感：氣感流動於與身心安頓的冥想境界"
                />
              </div>
            </div>
          </div >

          <div className="bg-stone-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-white"><Eye size={120} /></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur text-white border border-white/20">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">課程總結：品鑑八法</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">The 8 Dimensions</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "時 (Timing)", desc: "天時地利，身心狀態。", icon: Clock },
                  { label: "外形 (Look)", desc: "條索緊結，色澤潤澤。", icon: Eye },
                  { label: "香氣 (Smell)", desc: "熱聞、冷聞、杯底香。", icon: Wind },
                  { label: "湯色 (Color)", desc: "晶瑩透亮，無渾濁。", icon: Droplet },
                  { label: "滋味 (Taste)", desc: "苦澀轉化，回甘生津。", icon: Coffee },
                  { label: "活性 (Life)", desc: "越陳越香的物質基礎。", icon: Zap },
                  { label: "葉底 (Leaf)", desc: "肥嫩勻整，鮮活柔韌。", icon: Leaf },
                  { label: "茶韻 (Rhyme)", desc: "體感、喉韻、愉悅感。", icon: Smile }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-3 mb-2 text-stone-300 group-hover:text-amber-400 transition-colors">
                      <item.icon size={16} />
                      <span className="font-bold text-base">{item.label}</span>
                    </div>
                    <p className="text-sm text-stone-300 leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div >

      ),
    },
    '#puerh-5': {
      title: '五：普洱生茶的製作工藝',
      content: (
        <div className="space-y-12">
          {/* Intro Hero */}
          <div className="rounded-3xl bg-stone-100 p-8 md:p-12 text-center relative overflow-hidden group">
            <img
              src="/images/varieties/puer-ch05-hero.png"
              alt="Pu-erh Production Sun Drying"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-50/90 to-stone-100/90 group-hover:from-stone-900/80 group-hover:to-stone-800/80 transition-colors duration-1000"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6 group-hover:text-white transition-colors duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 bg-white/50 backdrop-blur text-stone-600 text-sm font-bold tracking-widest uppercase group-hover:bg-stone-800/50 group-hover:text-amber-400 group-hover:border-stone-600 transition-all">
                <Hammer size={14} /> Craftsmanship
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-stone-900 group-hover:text-white transition-colors">
                從茶樹到茶湯的旅程
              </h2>
              <p className="text-stone-600 text-[19px] leading-relaxed group-hover:text-stone-300 transition-colors">
                理解每一個環節背後的目的與智慧，從風味中解讀出工藝的印記。
              </p>
              <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-100/20 max-w-2xl mx-auto">
                <ClickableImage
                  src="/images/varieties/puer-ch05-hero.png"
                  alt="從茶樹到茶湯的旅程"
                  caption="雲南古茶山：採茶人行於蜿蜒山徑，開啟茶葉的旅程"
                />
              </div>
            </div>
          </div>

          {/* Section 1: 5 Core Steps */}
          <div className="space-y-8">
            <Subheading>生茶初製五大核心步驟</Subheading>
            <p className="text-base text-stone-700 leading-relaxed max-w-4xl">
              共同目標：去除青草氣、塑造條索、<strong>保留內在活性</strong> (為陳化打基礎)。
            </p>

            <div className="grid gap-6">
              {/* Step 1: Picking */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-stone-200"></div>
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5"><Sprout size={80} /></div>
                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    <div className="shrink-0 flex md:flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-[19px] shadow-sm border border-emerald-200">01</div>
                      <div className="text-sm font-bold text-stone-400 uppercase tracking-widest hidden md:block rotate-90 mt-4 origin-center">Picking</div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <h4 className="text-xl font-bold text-stone-900">鮮葉採摘</h4>
                      <p className="text-[17px] text-stone-600 leading-relaxed">
                        雲南大葉種樹型高大，至今仍以<strong>人工採摘</strong>為主。標準為「一心二葉」。
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 text-sm font-bold rounded-lg border border-emerald-100">
                        <Scale size={14} /> 轉換率：4-5kg 鮮葉 ≈ 1kg 毛茶
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Withering */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-stone-200"></div>
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5"><Wind size={80} /></div>
                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    <div className="shrink-0 flex md:flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-[19px] shadow-sm border border-amber-200">02</div>
                      <div className="text-sm font-bold text-stone-400 uppercase tracking-widest hidden md:block rotate-90 mt-4 origin-center">Withering</div>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div>
                        <h4 className="text-xl font-bold text-stone-900">攤晾（萎凋）</h4>
                        <p className="text-base text-stone-600 mt-2">讓鮮葉適度失水，引發化學轉變。</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3 bg-stone-50 rounded-lg text-sm border border-stone-100">
                          <strong className="block text-stone-800 mb-1">降低苦澀</strong>
                          <span className="text-stone-500">轉化兒茶素。</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-lg text-sm border border-stone-100">
                          <strong className="block text-stone-800 mb-1">發展香氣</strong>
                          <span className="text-stone-500">揮發青草氣。</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-lg text-sm border border-stone-100">
                          <strong className="block text-stone-800 mb-1">增加鮮爽</strong>
                          <span className="text-stone-500">產生氨基酸。</span>
                        </div>
                      </div>

                      {/* Field Note */}
                      <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100 text-base md:flex gap-4">
                        <div className="shrink-0 font-bold text-amber-800 mb-2 md:mb-0 w-32 uppercase tracking-wide text-sm">Field Note</div>
                        <div className="text-stone-700 leading-relaxed text-sm">
                          <strong>為何是「短時攤晾」？</strong><br />
                          為了鎖住內含物質作為轉化骨架。通常分兩段：茶山竹棚初步攤晾 → 運回後二次攤晾。標準：茶梗拗折不斷。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Shaqing */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-stone-200"></div>
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative overflow-hidden group hover:border-rose-200 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-5"><Flame size={80} /></div>
                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    <div className="shrink-0 flex md:flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black text-[19px] shadow-sm border border-rose-200 group-hover:bg-rose-500 group-hover:text-white transition-colors">03</div>
                      <div className="text-sm font-bold text-stone-400 uppercase tracking-widest hidden md:block rotate-90 mt-4 origin-center">Kill-Green</div>
                    </div>
                    <div className="space-y-4 flex-1">
                      <h4 className="text-xl font-bold text-stone-900">殺青 (關鍵差異)</h4>
                      <div className="text-[17px] text-stone-700 leading-relaxed border-l-2 border-rose-300 pl-4 py-1">
                        講求 <strong>「悶抖結合」</strong> 與 <strong>「保留一定活性」</strong>。<br />
                        與綠茶徹底鈍化酶活性有根本區別。
                      </div>
                      <ul className="space-y-2 text-base text-stone-600">
                        <li className="flex gap-2 items-start">
                          <Thermometer size={16} className="text-rose-500 mt-0.5 shrink-0" />
                          <span><strong>溫度控制：</strong>鍋溫雖高 (250°C)，但葉溫控制在 <strong>70-90°C</strong>。既殺青又不完全殺死酶。</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <Hand size={16} className="text-stone-400 mt-0.5 shrink-0" />
                          <span><strong>經驗之談：</strong>老師傅憑「鐵砂掌」徒手翻炒感知溫度，機器難以取代。</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <ClickableImage
                          src="/images/varieties/puer-ch05-shaqing.png"
                          alt="工藝核心：高溫殺青"
                          caption="殺青：老師傅憑經驗控制鍋溫與葉溫，保留活性"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Rolling */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-stone-200"></div>
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5"><Wind size={80} /></div>
                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    <div className="shrink-0 flex md:flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center font-black text-[19px] shadow-sm border border-stone-200">04</div>
                      <div className="text-sm font-bold text-stone-400 uppercase tracking-widest hidden md:block rotate-90 mt-4 origin-center">Rolling</div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <h4 className="text-xl font-bold text-stone-900">揉捻</h4>
                      <p className="text-base text-stone-600 leading-relaxed">
                        破壞細胞組織，讓茶汁顯露表面。
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 text-sm">
                        <span className="px-3 py-2 bg-stone-50 rounded border border-stone-100">
                          <strong>目的：</strong>增加茶湯滋味與厚度。
                        </span>
                        <span className="px-3 py-2 bg-stone-50 rounded border border-stone-100">
                          <strong>原則：</strong>嫩葉輕揉，老葉重揉。手工揉捻可避免過度產生澀感。
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Sun Drying */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-stone-200"></div>
                <div className="bg-white rounded-2xl p-6 border border-amber-200 border-l-4 border-l-amber-500 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Sun size={80} className="text-amber-500" /></div>
                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    <div className="shrink-0 flex md:flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-[19px] shadow-sm">05</div>
                      <div className="text-sm font-bold text-amber-500 uppercase tracking-widest hidden md:block rotate-90 mt-4 origin-center">Sun Dry</div>
                    </div>
                    <div className="space-y-4 flex-1">
                      <h4 className="text-xl font-bold text-stone-900 flex items-center gap-2">曬青 <span className="text-sm text-amber-600 font-normal px-2 py-0.5 bg-amber-100 rounded-full">核心靈魂</span></h4>
                      <p className="text-base text-stone-700 leading-relaxed">
                        普洱茶區別於綠茶(烘/炒)的關鍵。日光自然乾燥。
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-sm">
                          <strong className="text-emerald-800 flex items-center gap-1 mb-1"><CheckCircle2 size={12} /> 優勢</strong>
                          保留活性物質與有機質。細胞孔隙大，利於後期散熱轉化。
                        </div>
                        <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-sm text-stone-600">
                          <strong className="text-red-800 flex items-center gap-1 mb-1"><AlertTriangle size={12} /> 核心禁忌</strong>
                          <strong>絕不可進烘房！</strong>高溫烘焙會殺死活性，淪為「曬乾的綠茶」，失去陳化潛力。
                        </div>
                      </div>
                      <div className="text-sm text-stone-400 italic text-right mt-1">
                        → 至此完成「曬青毛茶」(生/熟茶的分岔口)。
                      </div>
                      <div className="mt-6 md:ml-20">
                        <ClickableImage
                          src="/images/varieties/puer-ch05-sundrying.png"
                          alt="靈魂工序：日光曬青"
                          caption="曬青：於自然陽光下乾燥，保留酶的活性與山野氣息"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Shape & Package */}
          <div className="rounded-3xl bg-stone-800 p-8 text-stone-300">
            <Subheading className="text-white">緊壓與成型工序</Subheading>
            <p className="text-base mb-8 opacity-80">曬青毛茶可直接飲用，但壓製成餅更利於運輸與陳化。</p>

            <div className="mb-10 max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg border border-stone-600/50">
              <ClickableImage
                src="/images/varieties/puer-ch05-pressing.png"
                alt="傳統工藝：石磨壓餅"
                caption="成型：傳統石磨壓製，鬆緊適度利於後期轉化"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-stone-700/50 p-4 rounded-xl border border-stone-600/50">
                <Scale size={20} className="text-amber-400 mb-3" />
                <h5 className="font-bold text-white mb-2">稱重</h5>
                <p className="text-sm leading-relaxed opacity-90">
                  經典 <strong>357g</strong> (七餅=2.5kg，便於馬幫計算)。現亦有200g、龍珠等。
                </p>
              </div>
              <div className="bg-stone-700/50 p-4 rounded-xl border border-stone-600/50">
                <Disc size={20} className="text-amber-400 mb-3" />
                <h5 className="font-bold text-white mb-2">壓製</h5>
                <p className="text-sm leading-relaxed opacity-90">
                  蒸汽蒸軟 → 入模具 → 石磨(傳統)或機器壓製。鬆緊適度為佳。
                </p>
              </div>
              <div className="bg-stone-700/50 p-4 rounded-xl border border-stone-600/50">
                <Wind size={20} className="text-amber-400 mb-3" />
                <h5 className="font-bold text-white mb-2">晾乾</h5>
                <p className="text-sm leading-relaxed opacity-90">
                  自然陰乾。國標含水量 <strong>&lt;13%</strong> 防霉。不可過低(&lt;5%)否則失活性。
                </p>
              </div>
              <div className="bg-stone-700/50 p-4 rounded-xl border border-stone-600/50">
                <Gift size={20} className="text-amber-400 mb-3" />
                <h5 className="font-bold text-white mb-2">包裝</h5>
                <p className="text-sm leading-relaxed opacity-90">
                  白棉紙 + <strong>天然筍殼</strong>。防潮、透過性好，營造微環境 (雖易蟲蛀但仍為首選)。
                </p>
              </div>
            </div>
          </div>
          {/* Section 3: Aging Potential (Color Path) */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-6">
            <Subheading>生茶的陳化潛力與轉變 (後發酵)</Subheading>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              普洱生茶的魅力在於時間賦予的變化。以廣東倉儲為例，湯色演變路徑清晰可見：
            </p>

            <div className="relative pt-6 pb-2">
              {/* Timeline Gradient Bar */}
              <div className="h-4 w-full rounded-full bg-gradient-to-r from-yellow-200 via-amber-500 to-rose-900 shadow-inner mb-8"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { age: "1-2年", color: "bg-yellow-200 text-yellow-900", title: "鮮活期", desc: "淺黃/黃綠，清亮鮮活。" },
                  { age: "3-5年", color: "bg-orange-300 text-orange-900", title: "轉化期", desc: "橙紅，苦澀減弱，甜醇顯現。" },
                  { age: "5-8年", color: "bg-amber-500 text-amber-900", title: "醇和期", desc: "琥珀紅，飽滿順滑。" },
                  { age: "8-15年", color: "bg-rose-600 text-white", title: "陳香期", desc: "石榴紅，陳香初顯。" },
                  { age: "15-30年", color: "bg-rose-800 text-white", title: "陳韻期", desc: "寶石紅，晶瑩剔透，韻味悠長。" },
                  { age: "30年+", color: "bg-rose-950 text-white", title: "巔峰期", desc: "酒紅深邃，化境之美。" }
                ].map((stage, i) => (
                  <div key={i} className="relative p-4 rounded-xl border border-stone-100 shadow-sm bg-white hover:border-amber-200 transition-colors">
                    <div className={`absolute top-0 left-0 w-full h-1.5 ${stage.color.split(' ')[0]}`}></div>
                    <div className="font-black text-[19px] text-stone-900 mb-1">{stage.age}</div>
                    <div className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">{stage.title}</div>
                    <p className="text-base text-stone-600 leading-snug">{stage.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-stone-500 italic text-center">
                * 變化速度因倉儲環境（溫濕度、通風）而異。
              </div>
            </div>
          </div>

          {/* Chapter Summary */}
          <div className="rounded-2xl p-6 bg-stone-900 text-stone-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5"><Hammer size={100} /></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-stone-800 rounded-lg border border-stone-700"><CheckCircle2 className="text-emerald-500" size={20} /></div>
                <h5 className="font-bold text-white text-[19px]">總結：原始工藝的智慧</h5>
              </div>
              <p className="text-base leading-relaxed opacity-90">
                普洱茶被譽為<strong>「可以喝的古董」</strong>。其製作工藝（採摘→攤晾→殺青→揉捻→曬青）人為干預極少，旨在保留活性。
                這呼應了樸素的哲學：「頂級的食材，烹飪方式都是最簡單的。」將風味的塑造權交給了<strong>時間</strong>與<strong>微生物</strong>。
              </p>
            </div>
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
      <Lightbox />
    </article>
  );
}
