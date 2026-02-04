import React, { useRef } from 'react';
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
  Pipette,
  PlusCircle,
  MinusCircle,
  Hourglass

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
      <div className="space-y-12">
        {/* Intro Hero */}
        <div className="rounded-3xl bg-emerald-900 p-8 md:p-12 text-center text-emerald-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10"><Droplets size={200} /></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-700 bg-emerald-800/50 backdrop-blur text-emerald-300 text-sm font-bold tracking-widest uppercase">
              <Coffee size={14} /> Brewing Guide
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              喚醒茶葉靈魂的藝術
            </h2>
            <p className="text-emerald-200/80 text-[19px] leading-relaxed">
              精準的沖泡是將「體」（原料工藝）轉化為「用」（風味體驗）的關鍵。從水開始，尋找一切美好的源頭。
            </p>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-800/20 max-w-2xl mx-auto">
              <ClickableImage
                src="/images/varieties/puer-ch06-hero.png"
                alt="喚醒茶葉靈魂的藝術"
                caption="沖泡藝術：以專注之心，喚醒沉睡的茶葉靈魂"
                captionClassName="text-emerald-100/80"
              />
            </div>
          </div>
        </div>

        {/* 3 Core Elements */}
        <div className="space-y-6">
          <Subheading>沖泡的核心三要素：水、溫、比</Subheading>
          <p className="text-[17px] text-stone-700 leading-relaxed max-w-4xl">
            猶如建築的地基，精準掌控這三大要素是沖泡好茶的先決條件。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WATER */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Droplet size={80} /></div>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/50 text-blue-600 flex items-center justify-center font-black text-[19px] border border-blue-100">pH</div>
                <div>
                  <h4 className="text-[19px] font-bold text-stone-900">水的選擇</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">The Mother of Tea</div>
                </div>
                <ul className="space-y-2 text-[17px] text-stone-600">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500 shrink-0" /> 優選礦泉水</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500 shrink-0" /> pH: <strong>6.5 - 7.5</strong> (適中)</li>
                  <li className="flex gap-2"><AlertCircle size={16} className="text-stone-400 shrink-0" /> 硬度勿過高 (鈣鎂高則湯黑味粗)</li>
                </ul>
              </div>
            </div>

            {/* TEMP */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Thermometer size={80} /></div>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100/50 text-rose-600 flex items-center justify-center font-black text-[19px] border border-rose-100">°C</div>
                <div>
                  <h4 className="text-[19px] font-bold text-stone-900">水溫掌控</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Heat Activation</div>
                </div>
                <ul className="space-y-2 text-base text-stone-600">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-rose-500 shrink-0" /> 標準：<strong>100°C 沸水</strong> (大葉種)</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-rose-500 shrink-0" /> 嫩茶：<strong>95°C</strong> (避燙傷)</li>
                  <li className="flex gap-2 items-start text-sm text-stone-500 bg-stone-50 p-2 rounded">
                    <Mountain size={14} className="mt-0.5 shrink-0" />
                    <span>海拔影響沸點 (台灣101°C / 昆明94°C / 西藏75°C)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RATIO */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Scale size={80} /></div>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100/50 text-amber-600 flex items-center justify-center font-black text-[19px] border border-amber-100">1:20</div>
                <div>
                  <h4 className="text-[19px] font-bold text-stone-900">茶水比例</h4>
                  <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Balance</div>
                </div>
                <ul className="space-y-2 text-base text-stone-600">
                  <li className="flex gap-2"><Star size={16} className="text-amber-500 shrink-0" /> <strong>1:20</strong> (黃金比)</li>
                  <li className="pl-6 text-sm text-stone-500">例：150ml蓋碗投茶7.5g (滋味飽滿)</li>
                  <li className="flex gap-2 border-t border-dashed border-stone-200 pt-2"><Users size={16} className="text-stone-400 shrink-0" /> <strong>1:25</strong> (清甜/淡雅)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Teaware Comparison */}
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <Subheading>器為茶之父：茶具選擇</Subheading>
              <p className="text-base text-stone-600 mt-2">材質直接作用於茶湯風味。</p>
            </div>
            <div className="w-full md:w-1/3">
              <ClickableImage
                src="/images/varieties/puer-ch06-teaware.png"
                alt="茶具選擇：蓋碗與紫砂"
                caption="器為茶之父：白瓷蓋碗與紫砂壺的材質之選"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Boiling Kettle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "不銹鋼", tag: "公正", icon: <Pipette size={18} />, pros: "不加分不減分", cons: "通用穩定", color: "bg-stone-200 text-stone-700" },
              { name: "陶壺", tag: "首選", icon: <Coffee size={18} />, pros: "提升風味 (最佳)", cons: "沖泡生茶首選", color: "bg-amber-200 text-amber-900" },
              { name: "鐵壺", tag: "老茶", icon: <Hammer size={18} />, pros: "提升厚度", cons: "不宜新茶(掩蓋鮮活)", color: "bg-stone-800 text-stone-300" },
              { name: "銀壺", tag: "熟茶", icon: <Gem size={18} />, pros: "軟化水質(甜潤)", cons: "削弱生茶風骨", color: "bg-indigo-100 text-indigo-700" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center gap-2 px-2 py-1 rounded mb-3 text-sm font-bold ${item.color}`}>
                  {item.icon} {item.tag}
                </div>
                <h5 className="font-bold text-stone-900 mb-2">{item.name}</h5>
                <div className="text-sm space-y-1">
                  <div className="text-emerald-700 flex gap-1"><PlusCircle size={12} className="mt-0.5" /> {item.pros}</div>
                  <div className="text-rose-700 flex gap-1"><MinusCircle size={12} className="mt-0.5" /> {item.cons}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Brewing Vessel Recommendation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white rounded-xl border border-stone-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">🍵</div>
              <div>
                <strong className="block text-stone-900 mb-1">主泡器 (新茶 &lt;5年)</strong>
                <p className="text-sm text-stone-600 leading-relaxed">首選<strong>白瓷蓋碗</strong> (敞口/肚圓)。不吸味，展現真香。</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-stone-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">🫖</div>
              <div>
                <strong className="block text-stone-900 mb-1">主泡器 (老茶 &gt;5年)</strong>
                <p className="text-sm text-stone-600 leading-relaxed"><strong>紫砂/紫陶壺</strong>。口闊、腹圓、直流。透氣性佳。</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-stone-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">🌊</div>
              <div>
                <strong className="block text-stone-900 mb-1">公道杯</strong>
                <p className="text-sm text-stone-600 leading-relaxed">自飲推薦<strong>銀/紫砂/紫陶</strong> (保質感)。玻璃雖美但略降細膩度。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Step Brewing Guide */}
        <div className="space-y-6">
          <Subheading>實戰演練：沖泡七步驟詳解</Subheading>
          <div className="relative border-l-2 border-stone-200 ml-4 space-y-8 pl-8 py-2">

            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">1</div>
              <h5 className="font-bold text-stone-900 text-[19px]">備器</h5>
              <p className="text-base text-stone-600 mt-1">佈置茶席，符合人體工學。核心：<strong>靜心</strong>。</p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">2</div>
              <h5 className="font-bold text-stone-900 text-[19px]">取茶與解茶</h5>
              <p className="text-base text-stone-600 mt-1">使用電子秤。順紋理用茶針分層剝下。<strong>切忌掰斷</strong> (防碎末苦澀)。</p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">3</div>
              <h5 className="font-bold text-stone-900 text-[19px]">溫器</h5>
              <p className="text-base text-stone-600 mt-1">沸水淋透主泡器、公杯、杯子 (含蓋)。提高溫度助醒茶。</p>
            </div>

            {/* Step 4: Waking Tea */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">4</div>
              <h5 className="font-bold text-stone-900 text-[19px]">投茶與潤茶 (醒茶)</h5>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-stone-100 rounded-lg text-sm">
                  <strong className="block text-stone-900 mb-1">乾潤 (乾醒)</strong>
                  趁熱投茶加蓋。利用餘熱甦醒香氣。<br /><span className="italic text-stone-500">此時聞香判斷味道是否乾淨。</span>
                </div>
                <div className="p-3 bg-stone-100 rounded-lg text-sm">
                  <strong className="block text-stone-900 mb-1">濕潤</strong>
                  環繞注水，5-10秒瀝乾。<strong>忌抖動蓋碗</strong>。開蓋呼吸散水氣。<br /><span className="italic text-stone-500">此時花香馥郁。</span>
                </div>
              </div>
            </div>

            {/* Step 5: Brewing (Core) */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">5</div>
              <h5 className="font-bold text-stone-900 text-[19px]">正式沖泡 (高溫、提香、壓韻)</h5>
              <div className="mt-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <ul className="space-y-2 text-[17px] text-stone-700 list-disc pl-5">
                  <li><strong>定點注水：</strong>5點或7點方向。</li>
                  <li><strong>這線細：</strong>沿內壁注入，避開中心。</li>
                  <li><strong>提拉手法：</strong>從低處緩慢拉高10cm再下壓。<strong>激發香氣，壓入茶韻。</strong></li>
                  <li><strong>時間：</strong>注水約10秒，浸泡10-20秒 (隨次數調整)。</li>
                </ul>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">6</div>
              <h5 className="font-bold text-stone-900 text-[19px]">開蓋呼吸</h5>
              <p className="text-base text-stone-600 mt-1">每泡出湯後<strong>開蓋散熱</strong>。避免悶出熟味。</p>
            </div>

            {/* Step 7 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">7</div>
              <h5 className="font-bold text-stone-900 text-[19px]">分湯與品飲</h5>
              <p className="text-base text-stone-600 mt-1">低斟分茶 (留香)。品飲時「吸氣啜飲」，讓茶湯霧化充滿口腔。</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-7': {
    title: '七：普洱熟茶的工藝與歷史',
    content: (
      <div className="space-y-12">
        {/* Intro Hero */}
        <div className="rounded-3xl bg-amber-950 p-8 md:p-12 text-center text-amber-50 relative overflow-hidden group">
          <img
            src="/images/varieties/puer-ch07-hero.png"
            alt="Ripe Pu-erh Tea Soup"
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/50 bg-black/40 backdrop-blur text-amber-300 text-sm font-bold tracking-widest uppercase">
              <Hourglass size={14} /> 1973 Revolution
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-br from-amber-100 to-orange-200">
              時間的魔法，人工的智慧
            </h2>
            <p className="text-amber-100/90 text-[19px] leading-relaxed drop-shadow-md">
              渥堆發酵 (Wo Dui)：在短短數十天內，模擬出自然陳化數十年的醇厚口感。這是一場微生物與時間的精密舞蹈。
            </p>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/30 max-w-2xl mx-auto">
              <ClickableImage
                src="/images/varieties/puer-ch07-hero.png"
                alt="渥堆發酵：時間的魔法"
                caption="1973的革命：在溫暖濕潤的茶堆中，微生物正在重塑茶葉的靈魂"
                captionClassName="text-amber-100/80"
              />
            </div>
          </div>
        </div>

        {/* Section 1: Aesthetics (Soup Feel) */}
        <div className="space-y-6">
          <Subheading>熟茶審美：無與倫比的「湯感」</Subheading>
          <p className="text-base text-stone-700 leading-relaxed">
            若生茶求氣韻，熟茶則求<strong>湯感</strong>。極致的熟茶應如「米湯」般溫潤。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Flavor (Core) */}
            <div className="md:col-span-2 relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Droplet size={100} className="text-amber-900" /></div>
              <h4 className="flex items-center gap-2 font-bold text-amber-900 text-xl mb-3">
                <Star className="fill-current" size={20} /> 風味核心：湯感 (Texture)
              </h4>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 text-stone-700 text-base leading-relaxed">
                  強調 <strong>「滑、厚、甜、醇、柔」</strong>。如媽媽慢煲的濃湯，入口絲滑，無水之硬度。
                  <br /><span className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-lg text-sm font-bold">最高境界：米湯感</span>
                </div>
                <div className="w-full md:w-1/3">
                  <ClickableImage
                    src="/images/varieties/puer-ch07-soup.png"
                    alt="熟茶審美：極致湯感"
                    caption="米湯感：紅濃明亮，入口如絲緞般滑順"
                    className="rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Aroma */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h5 className="font-bold text-stone-900 mb-2 flex items-center gap-2"><Wind size={16} /> 香氣 (Aroma)</h5>
              <p className="text-sm text-stone-600 mb-3">獨特陳香。新茶帶「渥堆味」(正常)，隨時間散去轉為焦糖/蜜糖香。</p>
              <div className="flex flex-wrap gap-2">
                {['焦糖香', '蜜糖香', '樟香', '棗香'].map(t => (
                  <span key={t} className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-[10px]">{t}</span>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h5 className="font-bold text-stone-900 mb-2 flex items-center gap-2"><Palette size={16} /> 湯色 (Color)</h5>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-900 border-2 border-white shadow-sm shrink-0"></div>
                <p className="text-sm text-stone-600">
                  <strong>紅濃透亮</strong>。深紅/琥珀色，晶瑩剔透。<br />
                  <span className="text-rose-500">忌：發黑渾濁 (發酵過重/工藝不佳)。</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: History (5 Generations) */}
        <div className="rounded-2xl bg-stone-100 p-6 md:p-8 space-y-6">
          <Subheading>熟茶工藝演進：五個世代</Subheading>
          <p className="text-base text-stone-600">從偶然摸索到精準科學。1973年是現代熟茶的誕生元年。</p>

          <div className="relative border-l-2 border-stone-300 ml-3 md:ml-6 space-y-8 pl-8 py-2">
            {[
              { gen: "1", title: "歷史源頭", desc: "古籍記載的「紅湯普洱」，技藝已失傳。", icon: <Scroll size={14} /> },
              { gen: "2", title: "南洋潑水茶", desc: "廣東茶商為應對港澳需求，對曬青毛茶進行「潑水發酵」。廣雲貢餅的前身。", icon: <Waves size={14} /> },
              { gen: "3", year: "1973", title: "大堆發酵 (奠基)", desc: "吳啟英、鄒炳良借鑒廣東經驗，結合雲南氣候研發「大堆發酵」。現代熟茶基石。", icon: <Flag size={14} />, highlight: true },
              { gen: "4", title: "外源菌添加", desc: "大益「黑馬技術」。人工篩選優勢菌種，發酵更可控。", icon: <Microscope size={14} /> },
              { gen: "5", title: "小堆離地", desc: "解決大堆需10噸原料的限制。50-200kg即可發酵，使古樹熟茶成為可能。", icon: <Box size={14} /> }
            ].map((g, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[41px] top-0 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-stone-100 ${g.highlight ? 'bg-amber-600 text-white shadow-lg scale-110' : 'bg-stone-300 text-stone-600'}`}>
                  <span className="text-[10px] font-bold">{g.gen}</span>
                </div>
                {g.year && <div className="absolute -left-[90px] top-0.5 text-sm font-black text-amber-600 hidden md:block">{g.year}</div>}
                <h5 className={`font-bold text-[19px] flex items-center gap-2 ${g.highlight ? 'text-amber-800' : 'text-stone-900'}`}>
                  {g.title}
                  {g.year && <span className="md:hidden text-sm bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">{g.year}</span>}
                </h5>
                <p className="text-[17px] text-stone-600 mt-1 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Wo Dui Process */}
        <div className="space-y-6">
          <Subheading>核心工藝：渥堆發酵 (Wo Dui)</Subheading>
          <p className="text-base text-stone-700 leading-relaxed max-w-4xl">
            區別於生茶的關鍵一步。在可控溫濕度下，利用<strong>微生物、濕熱、氧化</strong>作用加速陳化。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-3"><CloudRain size={20} /></div>
              <h5 className="font-bold text-emerald-900 mb-2">1. 濕水與堆積</h5>
              <p className="text-sm text-stone-600 leading-relaxed">
                曬青毛茶加水(約30-50%)，堆高70cm以上。創造濕熱環境啟動發酵。
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-3"><Thermometer size={20} /></div>
              <h5 className="font-bold text-amber-900 mb-2">2. 溫濕度控制</h5>
              <p className="text-sm text-stone-600 leading-relaxed">
                核心技術。堆溫不可&gt;64°C (防燒堆碳化)，亦不可過低。
              </p>
            </div>
            <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-3"><RefreshCcw size={20} /></div>
              <h5 className="font-bold text-rose-900 mb-2">3. 翻堆 (Fan Dui)</h5>
              <p className="text-sm text-stone-600 leading-relaxed">
                如炒菜般翻動。調節內外溫度/通氣，確保發酵均勻。極考驗經驗。
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-3"><Bug size={20} /></div>
              <h5 className="font-bold text-purple-900 mb-2">4. 微生物菌群</h5>
              <p className="text-sm text-stone-600 leading-relaxed">
                老廠房的牆壁是寶藏，富含億萬專有菌群，賦予獨特風味印記。
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl overflow-hidden shadow-md max-w-3xl mx-auto border border-stone-200">
            <ClickableImage
              src="/images/varieties/puer-ch07-process.png"
              alt="核心工藝：人工翻堆"
              caption="翻堆：如炒菜般控制溫度與通氣，確保發酵均勻"
            />
          </div>
        </div>

        {/* Section 4: Post-Process */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-6">
          <Subheading>後續工序：從毛茶到成品</Subheading>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start p-3 hover:bg-stone-50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center shrink-0 font-bold text-stone-500 text-sm">A</div>
              <div>
                <strong className="block text-stone-900 text-base">乾燥與解塊</strong>
                <div className="text-sm text-stone-600 mt-1">
                  通風自然風乾 (含水&lt;14%)。解開黏連塊，過硬難解者即為<strong>「老茶頭」</strong>(果膠豐富/甜潤)。
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-start p-3 hover:bg-stone-50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center shrink-0 font-bold text-stone-500 text-sm">B</div>
              <div>
                <strong className="block text-stone-900 text-base">分篩與揀剔</strong>
                <div className="text-sm text-stone-600 mt-1">分級 (1/3/5/7級)或一口料。靜電去雜 + 人工挑剔 (極耗人力)。</div>
              </div>
            </div>
            <div className="flex gap-4 items-start p-3 hover:bg-stone-50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center shrink-0 font-bold text-stone-500 text-sm">C</div>
              <div>
                <strong className="block text-stone-900 text-base">倉儲散料 (散堆味)</strong>
                <div className="text-sm text-stone-600 mt-1">不立即壓餅。麻袋陳放1-3年散去「渥堆味」，待陳香顯現。</div>
              </div>
            </div>
            <div className="flex gap-4 items-start p-3 bg-red-50 rounded-lg border border-red-100">
              <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center shrink-0 font-bold text-red-600 text-sm">!</div>
              <div>
                <strong className="block text-red-900 text-base">最終乾燥 (烘房) - 關鍵區別</strong>
                <div className="text-sm text-red-800/80 mt-1">
                  熟茶餅必須進入烘房！<strong>60°C烘烤36-72小時</strong>。因熟茶緊實，自然晾乾易內部發霉。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-sm font-extrabold tracking-widest glass-panel__kicker">總結：酵素之茶</div>
          <div className="text-base leading-relaxed">
            普洱熟茶是一門結合傳統經驗與現代科學的工藝。它被稱為<strong>「酵素茶」</strong>，富含微生物與轉化酶。
          </div>
          <div className="text-base leading-relaxed">
            講師建議：脾胃虛弱者可連續半月飲用熟茶，滋養身心，改善代謝。在快節奏生活中，這是一杯溫暖的慰藉。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-8': {
    title: '八：普洱熟茶的沖泡藝術',
    content: (
      <div className="space-y-12">
        {/* Intro Hero */}
        <div className="rounded-3xl bg-orange-950 p-8 md:p-12 text-center text-orange-50 relative overflow-hidden group">
          <img
            src="/images/varieties/puer-ch08-hero.png"
            alt="Ripe Pu-erh Tea Brewing"
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
          <div className="absolute top-0 right-0 p-12 opacity-5"><Coffee size={200} /></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-800 bg-orange-900/50 backdrop-blur text-orange-300 text-sm font-bold tracking-widest uppercase">
              <ThermometerSun size={14} /> The Art of Warmth
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              釋放醇厚溫潤之美
            </h2>
            <p className="text-orange-200/80 text-[19px] leading-relaxed">
              熟茶之美在於「湯感」。沖泡的核心是「低、緩、輕、柔」，如對待一位溫和的長者，引導出其米湯般的醇滑。
            </p>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-900/30 max-w-2xl mx-auto">
              <ClickableImage
                src="/images/varieties/puer-ch08-hero.png"
                alt="釋放醇厚溫潤之美"
                caption="溫潤之美：在溫暖的氤氳中，感受歲月沉澱的醇厚"
                captionClassName="text-orange-100/80"
              />
            </div>
          </div>
        </div>

        {/* Section 1: Grading System */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <Subheading>識茶：等級與選料</Subheading>
              <p className="text-[17px] text-stone-600 mt-2">了解等級有助於預判茶性與沖泡策略。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2"><Crown size={18} className="text-amber-500" /> 宮廷級 (Gongting)</h5>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">
                特級以上細嫩芽頭。<strong>毫香濃郁</strong>，口感細膩，但耐泡度較低。現代市場產物。
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-amber-200 to-transparent rounded-full"></div>
            </div>
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2"><Layers size={18} className="text-stone-500" /> 傳統分級 (1-9級)</h5>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">
                數字越大葉片越粗老。<strong>7-9級</strong>多含梗，雖粗獷但<strong>甜度高、耐泡</strong>，陳化後棗香顯著。
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-stone-300 to-stone-100 rounded-full"></div>
            </div>
          </div>

          <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 flex gap-3">
            <div className="shrink-0"><Info size={20} className="text-orange-600" /></div>
            <div className="text-sm text-orange-900 leading-relaxed">
              <strong>趨勢</strong>：如今多流行<strong>「一口料」</strong>(不分級)，保留原料的整體性。取茶時建議「大塊、小塊、碎茶」均勻搭配，以保證每一泡濃淡協調。
            </div>
          </div>
        </div>

        {/* Section 2: Preparation (Waking Tea) */}
        <div className="space-y-6">
          <Subheading>關鍵準備：醒茶 (Waking Tea)</Subheading>
          <p className="text-base text-stone-700 leading-relaxed max-w-4xl">
            熟茶沖泡成敗的關鍵往往在注水之前。解除緊壓與渥堆氣，讓茶葉「呼吸」。
          </p>
          <div className="mb-8 rounded-xl overflow-hidden shadow-md max-w-2xl border border-stone-200">
            <ClickableImage
              src="/images/varieties/puer-ch08-waking.png"
              alt="關鍵準備：醒茶"
              caption="醒茶：讓茶葉在紫砂罐中呼吸，退去火氣，喚醒活性"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Wind size={80} /></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold"><Check size={20} /></div>
                <h5 className="font-bold text-stone-900">理想操作</h5>
              </div>
              <p className="text-[17px] text-stone-600 leading-relaxed">
                提前 <strong>1個月</strong> 撬散，放入紫砂罐。徹底散去雜味，喚醒活性。
              </p>
            </div>
            <div className="flex-1 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Clock size={80} /></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold"><AlertCircle size={20} /></div>
                <h5 className="font-bold text-stone-900">應急操作</h5>
              </div>
              <p className="text-base text-stone-600 leading-relaxed">
                至少提前 <strong>1-2天</strong> 撬散。讓茶葉與空氣充分接觸。
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Brewing Technique (Low Slow) */}
        <div className="rounded-3xl bg-stone-900 text-stone-100 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Feather size={200} /></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Subheading className="text-white">核心心法：低、緩、輕、柔</Subheading>
              <p className="text-stone-300 leading-relaxed">
                生茶求「激發」，熟茶求<strong>「引導」</strong>。
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-start gap-4 hover:bg-white/20 transition-colors">
                  <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-300 shrink-0">
                    <Waves size={24} />
                  </div>
                  <div>
                    <strong className="text-white text-[19px] block mb-1">1. 水流貼壁 (Wall)</strong>
                    <p className="text-stone-400 text-base leading-relaxed">
                      定點注水於壺壁。避免水柱直衝茶葉，防止湯感渾濁或出現「醬油湯」。
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-start gap-4 hover:bg-white/20 transition-colors">
                  <div className="p-3 bg-amber-500/20 rounded-lg text-amber-300 shrink-0">
                    <ArrowDownRight size={24} />
                  </div>
                  <div>
                    <strong className="text-white text-[19px] block mb-1">2. 低斟緩注 (Slow)</strong>
                    <p className="text-stone-400 text-base leading-relaxed">
                      壺嘴放低，細水長流。如同「太極」般柔和，引導出茶湯的膠質感。
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-start gap-4 hover:bg-white/20 transition-colors">
                  <div className="p-3 bg-rose-500/20 rounded-lg text-rose-300 shrink-0">
                    <ThermometerSun size={24} />
                  </div>
                  <div>
                    <strong className="text-white text-[19px] block mb-1">3. 高溫恆定 (Heat)</strong>
                    <p className="text-stone-400 text-base leading-relaxed">
                      必須 <strong>100°C 沸水</strong>。熟茶發酵度高，唯有高溫才能激發其陳香與甜度。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-white/10">
              <ClickableImage
                src="/images/varieties/puer-ch08-brewing.png"
                alt="核心手法：低斟緩注"
                caption="低斟緩注：水流如涓涓細流貼壁而入，溫柔引導出茶湯的膠質"
                captionClassName="text-stone-400"
              />
            </div>
          </div>

          <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700">
            <h5 className="font-bold text-white mb-4 flex items-center gap-2"><Zap size={18} className="text-amber-500" /> 參數速查</h5>
            <div className="space-y-4 text-base">
              <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                <span className="text-stone-400">器具</span>
                <span className="font-bold text-amber-200">紫砂壺 (首選)</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                <span className="text-stone-400">水溫</span>
                <span className="font-bold text-amber-200">100°C (沸水)</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                <span className="text-stone-400">茶水比</span>
                <span className="font-bold text-amber-200">1:15 - 1:20 (更濃)</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                <span className="text-stone-400">潤茶</span>
                <span className="font-bold text-amber-200">20秒 (稍長)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Side-by-Side Comparison */}
        <div className="space-y-6">
          <Subheading>總結：生茶 vs 熟茶 沖泡差異</Subheading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-emerald-50/50 p-8 space-y-4">
              <h4 className="text-xl font-black text-emerald-900 flex items-center gap-2"><Leaf size={20} /> 普洱生茶</h4>
              <div className="text-emerald-800/80 text-base font-bold tracking-widest uppercase">Dynamic & Active</div>
              <hr className="border-emerald-200" />
              <ul className="space-y-3 text-base text-stone-700">
                <li className="flex gap-2"><ArrowUpRight size={16} className="text-emerald-600 shrink-0" /> <strong>高溫提香壓韻</strong> (拉高水線)</li>
                <li className="flex gap-2"><Thermometer size={16} className="text-emerald-600 shrink-0" /> 95-100°C (新茶可降)</li>
                <li className="flex gap-2"><Coffee size={16} className="text-emerald-600 shrink-0" /> 白瓷蓋碗 (爽利)</li>
                <li className="flex gap-2"><Scale size={16} className="text-emerald-600 shrink-0" /> 1:20 - 1:25</li>
              </ul>
            </div>
            <div className="bg-amber-50/50 p-8 space-y-4 md:border-l border-t md:border-t-0 border-stone-200">
              <h4 className="text-xl font-black text-amber-900 flex items-center gap-2"><Flame size={20} /> 普洱熟茶</h4>
              <div className="text-amber-800/80 text-base font-bold tracking-widest uppercase">Mellow & Deep</div>
              <hr className="border-amber-200" />
              <ul className="space-y-3 text-base text-stone-700">
                <li className="flex gap-2"><ArrowDownRight size={16} className="text-amber-600 shrink-0" /> <strong>低緩輕柔</strong> (貼壁注水)</li>
                <li className="flex gap-2"><Thermometer size={16} className="text-amber-600 shrink-0" /> 100°C (必須沸水)</li>
                <li className="flex gap-2"><Coffee size={16} className="text-amber-600 shrink-0" /> 紫砂壺 (聚熱醇化)</li>
                <li className="flex gap-2"><Scale size={16} className="text-amber-600 shrink-0" /> 1:15 - 1:20 (濃郁)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-sm font-extrabold tracking-widest glass-panel__kicker">最終境界</div>
          <div className="text-base leading-relaxed">
            閉上眼，想像茶湯如兒時記憶中的<strong>米湯</strong>般滑過喉嚨。溫暖、飽滿、甜潤。這就是熟茶的極致——一份不被打擾的溫柔。
          </div>
        </div>
      </div >
    ),
  },
  '#puerh-9': {
    title: '九：普洱茶的香氣與感官密碼',
    content: (
      <div className="space-y-12">
        {/* Intro Hero */}
        <div className="rounded-3xl bg-indigo-950 p-8 md:p-12 text-center text-indigo-50 relative overflow-hidden group">
          <img
            src="/images/puerh_aroma_art.png"
            alt="Abstract Tea Aroma Art"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-1000 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 to-purple-900/80 mix-blend-multiply"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-900/60 backdrop-blur text-indigo-200 text-sm font-bold tracking-widest uppercase shadow-lg">
              <Fingerprint size={14} /> Sensory Code
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white drop-shadow-lg">
              解鎖品飲的靈魂密碼
            </h2>
            <p className="text-indigo-100/90 text-[19px] leading-relaxed drop-shadow-md">
              品飲並非玄學。從鼻腔到口腔，從品種香到地域味，這是一場可被解構的感官旅程。
            </p>
          </div>
        </div>

        {/* Section 1: Two Paths of Aroma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative bg-white rounded-2xl p-8 border border-stone-200 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Wind size={100} /></div>
            <div className="relative z-10">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">PATHWAY 1</div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">鼻腔感受 (Nasal)</h4>
              <div className="h-1 w-12 bg-indigo-500 rounded-full mb-4"></div>
              <p className="text-stone-600 text-base leading-relaxed">
                <strong>直觀香氣</strong>。茶湯熱氣蒸騰，直接由鼻腔嗅聞。最直接、第一時間的香氣衝擊。
              </p>
            </div>
          </div>
          <div className="relative bg-white rounded-2xl p-8 border border-stone-200 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><CornerUpRight size={100} /></div>
            <div className="relative z-10">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">PATHWAY 2</div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">口腔感受 (Oral / Retronasal)</h4>
              <div className="h-1 w-12 bg-indigo-500 rounded-full mb-4"></div>
              <p className="text-stone-600 text-base leading-relaxed">
                <strong>口齒留香</strong>。茶湯入喉，香氣從口腔後部上行至鼻腔。更深層、持久的「水含香」。
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: 4 Dimensions of Aroma */}
        <div className="space-y-6">
          <Subheading>建立座標系：香氣四大維度</Subheading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-emerald-100/50 p-2 rounded-lg text-emerald-700"><Microscope size={20} /></div>
                <div className="text-sm font-extrabold text-stone-300 uppercase tracking-widest">GENES</div>
              </div>
              <strong className="text-[19px] text-stone-900 block mb-2">品種香 (Variety)</strong>
              <p className="text-sm text-stone-600 leading-relaxed">
                天賦基因。如布朗山「苦茶種」與「甜茶種」的本質差異。
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-amber-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-amber-100/50 p-2 rounded-lg text-amber-700"><Mountain size={20} /></div>
                <div className="text-sm font-extrabold text-stone-300 uppercase tracking-widest">TERROIR</div>
              </div>
              <strong className="text-[19px] text-stone-900 block mb-2">地域香 (Terroir / 山頭氣)</strong>
              <p className="text-sm text-stone-600 leading-relaxed">
                不可複製的風土。老班章與老曼峨相距十里，風味迥異。
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-indigo-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-indigo-100/50 p-2 rounded-lg text-indigo-700"><ThermometerSun size={20} /></div>
                <div className="text-sm font-extrabold text-stone-300 uppercase tracking-widest">SEASON</div>
              </div>
              <strong className="text-[19px] text-stone-900 block mb-2">季節香 (Seasonal)</strong>
              <div className="space-y-2 mt-2">
                <div className="flex gap-2 text-sm items-center btn-basic">
                  <span className="font-bold text-indigo-700">春茶</span> 馥郁高揚，生命力強 (收藏首選)
                </div>
                <div className="flex gap-2 text-sm items-center btn-basic">
                  <span className="font-bold text-amber-700">秋茶</span> 花蜜香顯，溫柔甜潤 (高CP值)
                </div>
              </div>
            </div>
            <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-rose-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-rose-100/50 p-2 rounded-lg text-rose-700"><Hammer size={20} /></div>
                <div className="text-sm font-extrabold text-stone-300 uppercase tracking-widest">PROCESS</div>
              </div>
              <strong className="text-[19px] text-stone-900 block mb-2">工藝香 (Process)</strong>
              <p className="text-sm text-stone-600 leading-relaxed">
                普洱的核心是<strong>「太陽味」</strong>(日光乾燥)。保留活性，越陳越香的基礎。
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: The 5 Tastes */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 space-y-6">
          <Subheading>五味密碼：酸甜苦鮮澀</Subheading>
          <p className="text-base text-stone-600">理解這五種味道的轉化，是深入品鑑的關鍵。</p>

          <div className="space-y-4">
            {/* Sweet */}
            <div className="flex gap-4 p-4 rounded-xl bg-amber-50 border border-amber-100 items-start">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 font-bold"><Smile size={20} /></div>
              <div className="space-y-2">
                <strong className="text-amber-900 block">甜 (Sweetness) - 能量與愉悅</strong>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-amber-800/80">
                  <span className="bg-white px-2 py-1 rounded border border-amber-100">1. 入口即甜 (直接)</span>
                  <span className="bg-white px-2 py-1 rounded border border-amber-100">2. 回甘 (轉化)</span>
                  <span className="bg-white px-2 py-1 rounded border border-amber-100">3. 尾水甜 (純粹)</span>
                </div>
              </div>
            </div>

            {/* Bitter */}
            <div className="flex gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 items-start">
              <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 font-bold"><Activity size={20} /></div>
              <div>
                <strong className="text-stone-900 block">苦 (Bitterness) - 普洱的風骨</strong>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  評判標準在於<strong>轉化速度</strong>。優質苦「來快去快」，迅速化為回甘。如老曼峨十年陳茶，苦盡甘來。
                </p>
              </div>
            </div>

            {/* Astringent */}
            <div className="flex gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 items-start">
              <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 font-bold"><Triangle size={20} /></div>
              <div>
                <strong className="text-stone-900 block">澀 (Astringency) - 收斂感</strong>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  黃金法則：<strong>「澀能生津」</strong>。好的澀感能迅速引發唾液分泌，化乾為潤。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sour */}
              <div className="flex gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 items-center">
                <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 font-bold"><Citrus size={16} /></div>
                <div className="text-sm">
                  <strong className="block text-stone-900">酸 (Sourness)</strong>
                  <span className="text-stone-500">好酸生津(梅子香)，壞酸令人不悅(餿)。</span>
                </div>
              </div>
              {/* Umami */}
              <div className="flex gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 items-center">
                <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 font-bold"><Sprout size={16} /></div>
                <div className="text-sm">
                  <strong className="block text-stone-900">鮮 (Umami)</strong>
                  <span className="text-stone-500">茶氨酸貢獻。春茶最顯，隨陳化減弱。</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-sm font-extrabold tracking-widest glass-panel__kicker">感官總結</div>
          <div className="text-base leading-relaxed">
            唯有通過大量實踐，建立專屬於普洱的座標系，才能欣賞其獨特的苦澀轉化與越陳越香的魅力。接下來，我們將探索雲南的另一寶藏——<strong>雲南白茶</strong>。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-10': {
    title: '十：雲南白茶的賞析與沖泡',
    content: (
      <div className="space-y-12">
        {/* Intro Hero */}
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-center text-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Moon size={200} /></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur text-slate-300 text-sm font-bold tracking-widest uppercase">
              <Star size={14} /> Rising Star
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              月光下的古樹珍寶
            </h2>
            <p className="text-slate-200/80 text-[19px] leading-relaxed">
              不炒不揉，自然萎凋。雲南古樹白茶，以其高香高甜、轉化迅速的獨特魅力，正成為茶界最耀眼的新星。
            </p>
          </div>
        </div>

        {/* Section 1: Comparison (Yunnan vs Fujian) */}
        <div className="space-y-6">
          <Subheading>顛覆傳統：雲南白茶 vs 福建白茶</Subheading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Yunnan Card */}
            <div className="bg-stone-50 rounded-2xl p-6 border-l-4 border-amber-500 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Sprout size={100} className="text-amber-900" /></div>
              <h4 className="flex items-center gap-2 font-bold text-stone-900 text-xl mb-4">
                <TreePine size={24} className="text-amber-600" /> 雲南古樹白茶
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 w-16 text-sm text-stone-500 font-bold uppercase mt-1">原料</span>
                  <span className="text-[17px] font-medium text-stone-800">大葉種古樹鮮葉 (內含物質極富)。</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 w-16 text-sm text-stone-500 font-bold uppercase mt-1">風格</span>
                  <span className="text-[17px] font-medium text-stone-800">高香高甜，喉韻深沉。如「北方美人」。</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 w-16 text-sm text-stone-500 font-bold uppercase mt-1">轉化</span>
                  <span className="text-[17px] font-medium text-stone-800">極快。3年即現<span className="text-amber-700 font-bold">棗香/藥香</span>。</span>
                </div>
              </div>
            </div>

            {/* Fujian Card */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-stone-300 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Flower2 size={100} className="text-stone-900" /></div>
              <h4 className="flex items-center gap-2 font-bold text-stone-900 text-xl mb-4">
                <MapPin size={24} className="text-stone-400" /> 福建白茶 (傳統)
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 w-16 text-sm text-stone-500 font-bold uppercase mt-1">原料</span>
                  <span className="text-[17px] text-stone-600">當地中小葉種茶樹。</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 w-16 text-sm text-stone-500 font-bold uppercase mt-1">風格</span>
                  <span className="text-[17px] text-stone-600">秀氣清雅，水路細膩。如「江南美人」。</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 w-16 text-sm text-stone-500 font-bold uppercase mt-1">轉化</span>
                  <span className="text-[17px] text-stone-600">相對緩慢，需更長時間陳放。</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-center">
            <Flower size={24} className="mx-auto text-amber-600 mb-2" />
            <strong className="block text-stone-900 text-base">迷人蜜韻</strong>
            <span className="text-sm text-stone-600">香氣深入茶湯</span>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-center">
            <Droplet size={24} className="mx-auto text-amber-600 mb-2" />
            <strong className="block text-stone-900 text-base">回甘持久</strong>
            <span className="text-sm text-stone-600">迅猛而生津</span>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-center">
            <Timer size={24} className="mx-auto text-amber-600 mb-2" />
            <strong className="block text-stone-900 text-base">香氣耐泡</strong>
            <span className="text-sm text-stone-600">多泡仍有餘香</span>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-center">
            <TrendingUp size={24} className="mx-auto text-amber-600 mb-2" />
            <strong className="block text-stone-900 text-base">轉化潛力</strong>
            <span className="text-sm text-stone-600">活性保留極佳</span>
          </div>
        </div>

        {/* Section 3: Brewing Technique (3-Step) */}
        <div className="rounded-3xl bg-stone-900 text-stone-100 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Waves size={200} /></div>
          <div className="relative z-10 space-y-8">
            <div className="flex justify-between items-end border-b border-stone-700 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">關鍵技法：溫潤三步曲</h3>
                <p className="text-stone-400 text-base">白茶條索疏鬆且大，需溫柔喚醒。</p>
              </div>
              <div className="text-right hidden md:block">
                <div className="text-sm text-stone-500 uppercase tracking-widest">Target Temp</div>
                <div className="text-[19px] font-bold text-amber-500">90-95°C</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 text-amber-500 flex items-center justify-center font-bold text-xl">1</div>
                <h4 className="font-bold text-[19px] text-white">乾潤 (Dry Warming)</h4>
                <p className="text-[17px] text-stone-400 leading-relaxed">
                  沸水燙熱蓋碗 → 倒乾水 → <strong>趁熱投茶</strong> → 蓋蓋。<br />利用餘溫進行第一次乾醒。
                </p>
              </div>
              <div className="space-y-3 relative">
                <div className="hidden md:block absolute top-6 left-[-25px] text-stone-600"><ArrowRight size={20} /></div>
                <div className="w-12 h-12 rounded-full border-2 border-stone-500 text-stone-400 flex items-center justify-center font-bold text-xl">2</div>
                <h4 className="font-bold text-[19px] text-white">蒸潤 (Steam Moistening)</h4>
                <p className="text-base text-stone-400 leading-relaxed">
                  注水僅 <strong>1/5</strong> → 立即蓋蓋 → 靜置 <strong>15秒</strong>。<br />讓蒸汽軟化茶葉表面。
                </p>
              </div>
              <div className="space-y-3 relative">
                <div className="hidden md:block absolute top-6 left-[-25px] text-stone-600"><ArrowRight size={20} /></div>
                <div className="w-12 h-12 rounded-full border-2 border-stone-500 text-stone-400 flex items-center justify-center font-bold text-xl">3</div>
                <h4 className="font-bold text-[19px] text-white">溫潤 (Wet Rinsing)</h4>
                <p className="text-base text-stone-400 leading-relaxed">
                  注水至 <strong>3/4</strong> → 靜置 <strong>10秒</strong> → <strong>徹底倒掉</strong>。<br />完成喚醒，準備正式沖泡。
                </p>
              </div>
            </div>

            <div className="bg-stone-800 rounded-xl p-4 border border-stone-700 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex items-center gap-2 text-amber-500 font-bold shrink-0">
                <Info size={18} /> 正式沖泡要點
              </div>
              <div className="flex gap-4 text-base text-stone-300">
                <span>• <strong>高溫提香</strong> (定點低斟)</span>
                <span>• <strong>茶水比 1:25</strong> (宜淡)</span>
                <span>• <strong>出湯瀝乾</strong> (忌留根)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-sm font-extrabold tracking-widest glass-panel__kicker">總結</div>
          <div className="text-base leading-relaxed">
            掌握「溫潤三步法」，便能完美釋放雲南古樹白茶的山野蜜韻。它既有普洱的醇厚，又有白茶的清雅，是值得細細品味的跨界珍品。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-11': {
    title: '十一：雲南紅茶的賞析與沖泡',
    content: (
      <div className="space-y-12">
        {/* Intro Hero */}
        <div className="rounded-3xl bg-rose-950 p-8 md:p-12 text-center text-rose-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Flame size={200} /></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-800 bg-rose-900/50 backdrop-blur text-rose-300 text-sm font-bold tracking-widest uppercase">
              <Crown size={14} /> The Oriental Ruby
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              滇紅的榮光
            </h2>
            <p className="text-rose-200/80 text-[19px] leading-relaxed">
              1938年烽火中誕生，曾作為國禮贈予英女王。雲南大葉種的濃強鮮爽，書寫了中國紅茶的傳奇篇章。
            </p>
          </div>
        </div>

        {/* Section 1: History Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Subheading>歷史豐碑：臨危受命</Subheading>
            <div className="relative border-l-2 border-stone-200 pl-8 space-y-8 py-2">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-rose-600 border-4 border-white shadow-sm"></div>
                <div className="text-sm font-bold text-rose-600 mb-1">1938</div>
                <strong className="block text-stone-900 text-[19px]">烽火創製</strong>
                <p className="text-base text-stone-600 mt-2 leading-relaxed">
                  抗戰期間，馮紹裘先生在鳳慶試製成功，定名「滇紅」。以出口換取外匯支援抗戰。
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-300 border-4 border-white"></div>
                <div className="text-sm font-bold text-stone-500 mb-1">1939-1942</div>
                <strong className="block text-stone-900 text-[19px]">短暫輝煌與中斷</strong>
                <p className="text-base text-stone-600 mt-2 leading-relaxed">
                  開始批量生產出口。後因滇緬公路被切斷而被迫中止。
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-stone-900 border-4 border-white"></div>
                <div className="text-sm font-bold text-stone-500 mb-1">1950s-1980s</div>
                <strong className="block text-stone-900 text-[19px]">國禮時代</strong>
                <p className="text-base text-stone-600 mt-2 leading-relaxed">
                  恢復出口，遠銷蘇聯與歐美。成為國家外事禮茶，譽滿全球。
                </p>
              </div>
            </div>
          </div>

          {/* Process Visualization */}
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
            <Subheading>製作工藝</Subheading>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              {['萎凋 (Withering)', '揉捻 (Rolling)', '發酵 (Fermenting)', '乾燥 (Drying)'].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-rose-100 flex items-center justify-center text-rose-600 shadow-sm font-bold text-2xl">
                    {i + 1}
                  </div>
                  <span className="text-sm font-bold text-stone-600 uppercase tracking-widest text-center w-24">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white rounded-xl border border-rose-100 flex items-start gap-3">
              <div className="shrink-0 text-rose-500"><Info size={20} /></div>
              <p className="text-base text-stone-600 leading-relaxed">
                <strong>核心特徵：</strong>憑藉雲南大葉種豐富的茶多酚，發酵後的滇紅滋味<strong>濃、強、鮮</strong>，金毫顯露，湯色紅豔明亮。
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Shai Hong (Sun-Dried) */}
        <div className="space-y-6">
          <Subheading>被遺忘的珍品：雲南曬紅 (Shai Hong)</Subheading>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Sun size={200} className="text-amber-600" /></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-black text-amber-900 mb-4">陽光的味道</h4>
                <p className="text-amber-900/80 leading-relaxed mb-6">
                  與傳統烘焙紅茶不同，曬紅完全依靠<strong>自然日曬乾燥</strong>。這種古老工藝保留了茶葉活性，使其兼具紅茶的香甜與普洱的陳化潛力。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/50 text-amber-900 text-sm font-bold border border-amber-100">🌞 日光風味</span>
                  <span className="px-3 py-1 rounded-full bg-white/50 text-amber-900 text-sm font-bold border border-amber-100">🌿 茶性溫和</span>
                  <span className="px-3 py-1 rounded-full bg-white/50 text-amber-900 text-sm font-bold border border-amber-100">⏳ 越陳越香</span>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur rounded-xl p-6 border border-amber-100 flex flex-col justify-center">
                <strong className="text-amber-900 text-base tracking-widest uppercase mb-4">Comparison</strong>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-amber-200/50 pb-2">
                    <span className="text-stone-600">傳統滇紅</span>
                    <span className="font-bold text-stone-900">高溫烘焙 (提香)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-amber-200/50 pb-2">
                    <span className="text-stone-600">雲南曬紅</span>
                    <span className="font-bold text-amber-700">低溫日曬 (保活)</span>
                  </div>
                  <div className="text-sm text-stone-500 mt-2 italic">
                    "曬紅如同一座橋樑，連接了紅茶的香甜與普洱的活性。"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Brewing Guide */}
        <div className="space-y-6">
          <Subheading>沖泡指南：釋放紅豔果香</Subheading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-rose-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-rose-100 text-stone-500 group-hover:text-rose-600 flex items-center justify-center font-bold mb-4 transition-colors">1</div>
              <h5 className="font-bold text-stone-900 mb-2">溫器與醒茶</h5>
              <p className="text-base text-stone-600 leading-relaxed">
                沸水燙熱茶壺。趁熱投入茶葉，蓋蓋<strong>乾醒</strong>。喚醒內韻。
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-rose-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-rose-100 text-stone-500 group-hover:text-rose-600 flex items-center justify-center font-bold mb-4 transition-colors">2</div>
              <h5 className="font-bold text-stone-900 mb-2">3秒溫潤</h5>
              <p className="text-base text-stone-600 leading-relaxed">
                水量沒過茶葉，<strong>快進快出</strong> (約3-5秒)。迅速倒掉潤茶水。
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-rose-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-rose-100 text-stone-500 group-hover:text-rose-600 flex items-center justify-center font-bold mb-4 transition-colors">3</div>
              <h5 className="font-bold text-stone-900 mb-2">定點低斟</h5>
              <p className="text-base text-stone-600 leading-relaxed">
                水溫 <strong>90-95°C</strong>。沿壺壁低斟。首泡 15-20秒。出湯需瀝乾。
              </p>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 flex justify-between items-center text-base">
            <span className="text-stone-600"><strong>Tip:</strong> 若想降低澀感，水溫可降至 90°C，且投茶量不宜過多 (1:25為佳)。</span>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-sm font-extrabold tracking-widest glass-panel__kicker">總結</div>
          <div className="text-base leading-relaxed">
            從國禮榮光到陽光滋味。滇紅以其濃強鮮爽的特性，展現了雲南大葉種在普洱之外的另一種熱烈奔放的生命力。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-12': {
    title: '十二：雲南少數民族特色飲茶文化',
    content: (
      <div className="space-y-12">
        {/* Intro Hero */}
        <div className="rounded-3xl bg-orange-900 p-8 md:p-12 text-center text-orange-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Tent size={200} /></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-700 bg-orange-800/50 backdrop-blur text-orange-200 text-sm font-bold tracking-widest uppercase">
              <FlameKindling size={14} /> The Roots of Tea
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              火塘邊的茶香
            </h2>
            <p className="text-orange-200/80 text-[19px] leading-relaxed">
              離開精緻的茶席，回到茶的最初源頭。在雲南的火塘邊，聆聽少數民族傳承千年的古老茶韻。
            </p>
          </div>
        </div>

        {/* Section 1: Ethnic Cultures Grid (3x3) */}
        <div className="space-y-6">
          <Subheading>各民族的獨特飲茶方式</Subheading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. De'ang */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">DE'ANG</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">德昂族 • 酸茶</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                古老發酵工藝。土坑密封發酵，帶有奶酪/桂花香。食用飲用皆可。
              </p>
            </div>
            {/* 2. Bulang */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">BULANG</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">布朗族 • 烤茶</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                土罐/竹筒烤至焦香。焦糖香濃郁，山野氣十足。
              </p>
            </div>
            {/* 3. Jino */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">JINO</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">基諾族 • 涼拌茶</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                "Long Pa". 鮮葉揉碎加辣椒、大蒜涼拌。是菜也是茶。
              </p>
            </div>
            {/* 4. Wa */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">WA</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">佤族 • 燒茶</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                鐵板燒烤至焦黃甚至焦黑，再水煮。苦盡甘來，性格豪邁。
              </p>
            </div>
            {/* 5. Lahu */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">LAHU</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">拉祜族 • 烤茶</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                "香、濃、釅"。陶罐烤茶，待客最高禮節。
              </p>
            </div>
            {/* 6. Lisu */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">LISU</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">傈僳族 • 油鹽茶</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                日常飲鹽巴茶；隆重時加漆油/核桃/芝麻攪打，似酥油茶。
              </p>
            </div>
            {/* 7. Dai */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">DAI</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">傣族 • 竹筒茶</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                鮮茶入竹筒火烤。竹香融於茶香，清爽而醇厚。
              </p>
            </div>
            {/* 8. Naxi */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">NAXI</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">納西族 • 龍虎鬥</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                茶湯沖入燃燒的酒盞。滋滋作響，濃烈驅寒，治感冒良方。
              </p>
            </div>
            {/* 9. Bai */}
            <div className="bg-white rounded-xl p-5 border border-stone-200 hover:shadow-md transition-shadow">
              <div className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-2">BAI</div>
              <h4 className="font-bold text-stone-900 text-[19px] mb-2">白族 • 三道茶</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                一苦(烤茶)、二甜(紅糖/乳扇)、三回味(蜂蜜/花椒)。人生哲理。
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Tu Fa Kao Cha Practice */}
        <div className="rounded-3xl bg-stone-900 text-stone-100 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Zap size={200} /></div>
          <Subheading className="text-white relative z-10">實作：土法烤茶 (Tu Fa Kao Cha)</Subheading>
          <p className="text-stone-400 relative z-10 mb-8">
            一把陶罐，一撮粗茶，一盆炭火。還原最原始的品飲體驗。
          </p>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-900/50">1</div>
              <h5 className="font-bold text-xl text-white">抖 (Shake)</h5>
              <p className="text-base text-stone-400 leading-relaxed">
                將茶葉投入陶罐，置於炭火上。不斷<strong>抖動</strong>，受熱均勻。直至葉色焦黃，香氣四溢。
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-900/50">2</div>
              <h5 className="font-bold text-xl text-white">沖 (Quench)</h5>
              <p className="text-base text-stone-400 leading-relaxed">
                趁熱將沸水沖入高溫陶罐。<strong>"呲啦"</strong>一聲，茶香瞬間爆發，泡沫湧起 (雷響茶)。
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-900/50">3</div>
              <h5 className="font-bold text-xl text-white">飲 (Enjoy)</h5>
              <p className="text-base text-stone-400 leading-relaxed">
                待泡沫散去，倒出茶湯。滋味<strong>焦香濃烈</strong>，極具穿透力。暖胃提神。
              </p>
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

export default function PuerhEncyclopedia({ topOffsetPx, activeHref = '#puerh-1' }) {
  void topOffsetPx;
  const contentRef = useRef(null);

  const normalizedHref = typeof activeHref === 'string' && activeHref.startsWith('#puerh-') ? activeHref : '#puerh-1';
  const chapter = CHAPTERS[normalizedHref] ?? CHAPTERS['#puerh-1'];
  const chapterId = normalizedHref.slice(1);

  return (
    <article className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm">
      <div className="px-6 py-8 md:px-10 md:py-10">
        <div ref={contentRef}>
          <Section id={chapterId} title={chapter.title}>
            {chapter.content}
          </Section>
        </div>
      </div>
    </article>
  );
}
