import React from 'react';
import {
  BookOpen,
  ClipboardList,
  Leaf,
  MapPin,
  Sprout,
  Table,
  Dna,
  Microscope,
  Wind,
  Flower,
  GitBranch,
  Droplets,
  Sun,
  CloudRain,
  Thermometer,
  Search,
  Sparkles,
  Zap,
  Mountain,
  ShieldCheck
} from 'lucide-react';
import ClickableImage from '../../components/ClickableImage';

// --- Styled Components ---

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-28 mb-24 last:mb-0">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
          {Icon && <Icon size={22} />}
        </div>
        <h3 className="text-[22px] md:text-[26px] font-black text-stone-900 tracking-tight">{title}</h3>
      </div>
      <div className="space-y-10 font-sans">
        {children}
      </div>
    </section>
  );
}

function Subtitle({ children, className = "" }) {
  return (
    <h4 className={`text-[19px] md:text-[23px] font-bold text-stone-800 mb-4 flex items-center gap-2 font-sans ${className}`}>
      <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
      {children}
    </h4>
  );
}

function Paragraph({ children, className = "" }) {
  return (
    <p className={`text-[17px] text-stone-700 leading-[1.8] font-sans font-normal ${className}`}>
      {children}
    </p>
  );
}

function Callout({ title, children, icon: Icon, variant = "sky" }) {
  const ActiveIcon = Icon || ClipboardList;
  const themes = {
    sky: "border-sky-200 bg-sky-50 text-sky-800 icon-bg-sky-600",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800 icon-bg-emerald-600",
    rose: "border-rose-200 bg-rose-50 text-rose-800 icon-bg-rose-600",
    amber: "border-amber-200 bg-amber-50 text-amber-800 icon-bg-amber-600",
  };
  const theme = themes[variant] || themes.sky;

  return (
    <div className={`rounded-2xl border ${theme.split(' ')[0]} ${theme.split(' ')[1]} p-6 relative overflow-hidden shadow-sm`}>
      <div className="flex items-start gap-4 relative z-10">
        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border ${theme.split(' ')[0]} ${theme.split(' ')[2]} shadow-sm shrink-0`}>
          <ActiveIcon size={20} />
        </span>
        <div>
          <div className="font-extrabold text-stone-900 text-lg mb-1">{title}</div>
          <div className="text-stone-700 leading-relaxed text-[17px]">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Grid({ children, cols = 2 }) {
  const colClass = cols === 3 ? "lg:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-8`}>
      {children}
    </div>
  );
}

function SimpleTable({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden my-6">
      <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-2">
        <Table size={16} className="text-stone-400" />
        <h4 className="font-bold text-stone-800">{title}</h4>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

// --- Main Content Component ---

export default function TaiwanCultivarDiversity() {
  return (
    <article className="max-w-6xl mx-auto space-y-16 pb-24 font-sans selection:bg-emerald-100">

      {/* Hero Section: Cinematic Visual Upgrade */}
      <header className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-stone-900 min-h-[580px] flex items-end group shadow-emerald-950/10 border border-emerald-800/10">
        <img
          src="/images/cultivars/diversity_hero.png"
          alt="Taiwan Tea Cultivar Diversity - Cinematic Landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-[3000ms] ease-out group-hover:scale-105"
        />
        {/* Subtle dynamic overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent"></div>
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/5 rounded-[2rem] pointer-events-none" />

        <div className="relative z-10 w-full p-6 md:p-14">
          {/* Glassmorphism Title Card */}
          <div className="max-w-3xl space-y-6 bg-stone-950/50 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl animate-fadeIn">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 text-emerald-100 text-xs font-black tracking-[0.2em] uppercase">
                <Dna size={13} className="animate-pulse" /> DNA & Lineage
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-stone-200 text-xs font-black tracking-[0.2em] uppercase">
                <Mountain size={13} /> Terroir Adaptability
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight font-serif">
                多樣性的台灣茶樹<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">栽培品種與特性</span>解析
              </h1>
              <div className="w-16 h-1 bg-emerald-500 rounded-full" />
              <p className="text-base md:text-lg text-stone-300 leading-relaxed font-light">
                以<strong className="text-white">育種科學</strong>、<strong className="text-white">化學成分</strong>與<strong className="text-white">地理適性</strong>為主線，
                深入探索這片土地最具競爭優勢的綠色基因庫。
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 md:px-0 space-y-20">

        {/* Original Callout */}
        <Callout title="快速記憶框架：先抓大方向" icon={ClipboardList} variant="sky">
          先記住核心口訣 <span className="text-sky-700 font-bold bg-sky-100 px-1 rounded">「大葉種 vs 小葉種」</span> 與 <span className="text-sky-700 font-bold bg-sky-100 px-1 rounded">「四大十一小」</span>。
          <ul className="mt-3 space-y-1 text-base pl-4 border-l-2 border-sky-200 text-stone-600">
            <li>• <strong>大葉種：</strong> 多與紅茶系統相關（如阿薩姆、紅玉）。</li>
            <li>• <strong>小葉種：</strong> 廣泛應用於綠茶、包種與烏龍（如青心烏龍、金萱）。</li>
          </ul>
        </Callout>

        {/* Section 1: Physiology & Genetics (Refined & Expanded) */}
        <Section id="cultivar-physio" title="1. 茶樹的基本生理特點與遺傳多樣性" icon={Sprout}>
          <Grid cols={1} className="md:grid-cols-[1.2fr,0.8fr] items-center">
            <div className="space-y-6">
              <Subtitle>育種基礎與生物特性</Subtitle>
              <Paragraph>
                茶樹屬多年生常綠作物，並非糧食作物，具有特殊的經濟用途。在生物學特性上，茶樹屬於<strong className="text-emerald-700">異交作物（Allogamous crops）</strong>。
                雖然雌雄同花，但因極強的<strong className="text-emerald-700">「自交不親和性」（Self-incompatibility）</strong>，必須藉由外部授粉（風力或昆蟲）方能繁衍，這使得每株茶樹（實生苗）的遺傳變異極大。
              </Paragraph>
              <Paragraph>
                為確保品質與生產管理的穩定性，一旦選拔出優異單株（Varietal Selection），即改用<strong className="text-emerald-700">「扦插」</strong>進行無性繁殖，以實現遺傳特性的完美複製。
              </Paragraph>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <ClickableImage
                src="/images/cultivars/diversity_breeding_methods.png"
                alt="Breeding Methods"
                caption="茶樹具備極高的遺傳多樣性與育種途徑"
              />
            </div>
          </Grid>

          {/* Original Breeding Routes Table styled */}
          <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm">
            <Subtitle>科學育種的兩大核心途徑</Subtitle>
            <Grid>
              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm">
                  <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl h-fit"><Wind size={20} /></div>
                  <div>
                    <div className="font-black text-stone-900 mb-1 text-lg">1. 雜交育種 (Hybridization)</div>
                    <ul className="text-[17px] text-stone-600 mt-1 space-y-1">
                      <li>• <strong className="text-emerald-700 font-bold">天然雜交：</strong> 風力/昆蟲授粉，父本不詳。ex: 台茶 21, 23</li>
                      <li>• <strong className="text-emerald-700 font-bold">人工雜交：</strong> 父母本已知，遠緣雜交優勢。ex: 台茶 12, 18, 22</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm">
                  <div className="p-3 bg-amber-100 text-amber-700 rounded-xl h-fit"><Search size={20} /></div>
                  <div>
                    <div className="font-black text-stone-900 mb-1 text-lg">2. 單株選拔 (Selection)</div>
                    <Paragraph className="text-[17px] opacity-90">
                      從現有變異群體中挑選優異單株進行擴繁與觀察。
                      <br /><span className="text-[14px] text-stone-400">ex: 台茶 8 號 (阿薩姆選拔), 台茶 24 號 (原生山茶選拔)</span>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </Section>

        {/* Section 2: Chemistry & Varietal Suitability (Deep Merge) */}
        <Section id="cultivar-chemistry" title="2. 大葉種與小葉種的化學成分與適製性" icon={Droplets}>
          <Paragraph>
            依據植物學分類，茶樹主要分為大葉種（<em>Camellia sinensis var. assamica</em>）與小葉種（<em>Camellia sinensis var. sinensis</em>）。這兩者在內含化學成分上的顯著差異，直接決定了其最適合的製茶工藝。
          </Paragraph>

          <div className="mb-8">
            <ClickableImage
              src="/images/cultivars/diversity_leaf_comparison.png"
              alt="大葉種與小葉種比較"
              caption="大葉種（左）與小葉種（右）的葉形與化學結構對比"
            />
          </div>

          <Grid>
            <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br from-white to-rose-50 p-8 group hover:shadow-md transition-all">
              <h4 className="text-xl font-black text-rose-900 mb-4 flex items-center gap-2">
                <Leaf size={24} /> 大葉種 (Assamica)
              </h4>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-[17px] text-stone-700 leading-relaxed">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-rose-500 font-black text-xs shrink-0 mt-1">高</div>
                  <span><strong className="text-rose-800">兒茶素（多酚）含量高</strong>：茶丹寧多，茶湯口感強勁，帶有明顯收斂性與苦澀感，茶體厚實。</span>
                </li>
                <li className="flex items-start gap-3 text-[17px] text-stone-700 leading-relaxed">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-rose-500 shrink-0 mt-1"><Droplets size={16} /></div>
                  <span>適合 <strong className="text-rose-700">全發酵 (紅茶)</strong>：高度兒茶素在氧化中轉化為豐富的茶黃素與茶紅素。</span>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-8 group hover:shadow-md transition-all">
              <h4 className="text-xl font-black text-emerald-900 mb-4 flex items-center gap-2">
                <Sprout size={24} /> 小葉種 (Sinensis)
              </h4>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-[17px] text-stone-700 leading-relaxed">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-500 font-black text-xs shrink-0 mt-1">低</div>
                  <span><strong className="text-emerald-800">兒茶素（多酚）含量低</strong>：口感相對細緻溫潤，苦澀感較低，著重於優雅的香氣表現。</span>
                </li>
                <li className="flex items-start gap-3 text-[17px] text-stone-700 leading-relaxed">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-500 shrink-0 mt-1"><Droplets size={16} /></div>
                  <span>適合 <strong className="text-emerald-700">不發酵到半發酵 (綠/烏龍)</strong>：如碧螺春、包種茶、高山烏龍等。</span>
                </li>
              </ul>
            </div>
          </Grid>

          <SimpleTable title="物理與化學特徵深度對照">
            <table className="min-w-full text-[17px] text-stone-700">
              <thead className="bg-stone-100">
                <tr className="text-left font-sans uppercase tracking-wider text-stone-600">
                  <th className="px-6 py-4 font-black">面向</th>
                  <th className="px-6 py-4 font-black">大葉種</th>
                  <th className="px-6 py-4 font-black">小葉種</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                <tr>
                  <td className="px-6 py-4 font-bold text-stone-900">兒茶素含量</td>
                  <td className="px-6 py-4 text-rose-700">較高（苦澀度較顯、茶氣足）</td>
                  <td className="px-6 py-4 text-emerald-700">低至中（滋味細膩、清爽）</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-stone-900">茶湯特性</td>
                  <td className="px-6 py-4">收斂性強、濃度高、具厚度</td>
                  <td className="px-6 py-4">清甜、注重高雅香氣</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-stone-900">適製茶類</td>
                  <td className="px-6 py-4">紅茶、普洱熟茶</td>
                  <td className="px-6 py-4">綠茶、包種、烏龍</td>
                </tr>
              </tbody>
            </table>
          </SimpleTable>
        </Section>

        {/* Section 3: Lineage & The Famous "4 Major & 11 Minor" */}
        <Section id="cultivar-lineage" title="3. 台灣茶樹品種的三大來源與「四大十一小」口訣" icon={GitBranch}>
          <Paragraph>
            台灣茶樹品種的多元基因庫是由歷史移民、異地引進與國家科研育種共同交織而成：
          </Paragraph>
          <Grid cols={3}>
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200">
              <Subtitle className="mb-2">1. 地方品種</Subtitle>
              <Paragraph className="text-[15px]">由初期移民自福建引進「種子」種植，衍生出各類變異實生苗，透過農民長期「單株選拔」留下的優良老品種。如：青心烏龍、鐵觀音。</Paragraph>
            </div>
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200">
              <Subtitle className="mb-2">2. 國外引進</Subtitle>
              <Paragraph className="text-[15px]">如日治時期由印度引進的「阿薩姆」茶樹，帶動了台灣大葉種紅茶研發。後來亦有從中國引進之黃柑、大冇等。</Paragraph>
            </div>
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <Subtitle className="mb-2 text-emerald-900">3. 育選品種</Subtitle>
              <Paragraph className="text-[15px]">由「農業部茶及飲料作物改良場」(原茶改場) 針對抗病力、產量及風味進行系統化雜交或選育出的台茶系列，確保產業競爭力。</Paragraph>
            </div>
          </Grid>

          {/* THE GRID: RESTORING FULL DETAIL */}
          <div className="mt-8 rounded-[2rem] border-2 border-stone-200 bg-white p-8 md:p-12 shadow-inner">
            <div className="mb-8">
              <ClickableImage
                src="/images/cultivars/diversity_cultivar_tree.png"
                alt="台灣茶樹品種系譜"
                caption="台灣茶樹品種系譜：詳列了大葉種與小葉種的血緣與演進"
              />
            </div>
            <h4 className="text-2xl font-black text-stone-900 mb-8 text-center">
              產業導航口訣：<span className="px-3 bg-stone-900 text-white rounded-lg">「四大十一小」</span>
            </h4>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 4 Major */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-sm font-black uppercase tracking-widest border border-rose-200">
                  <Zap size={16} /> 四大葉種 (紅茶體系)
                </div>
                <div className="space-y-3">
                  {[
                    { name: "阿薩姆 (Assam)", desc: "早年引進之地方種", icon: "🌱" },
                    { name: "台茶 8 號", desc: "阿薩姆優良選拔", icon: "✔️" },
                    { name: "台茶 18 號 (紅玉)", desc: "肉桂與薄荷香氣 (人工雜交)", highlight: true },
                    { name: "台茶 21 號 (紅韻)", desc: "柑橘與花果香氣 (人工雜交)", highlight: true }
                  ].map(item => (
                    <div key={item.name} className={`flex items-center justify-between p-4 rounded-xl border-2 ${item.highlight ? 'border-rose-300 bg-rose-50 shadow-sm' : 'border-stone-100 bg-white'} group hover:scale-[1.02] transition-all`}>
                      <span className="font-extrabold text-stone-900 text-lg">{item.name}</span>
                      <span className="text-sm text-stone-500 font-medium italic">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 11 Minor */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-black uppercase tracking-widest border border-emerald-200">
                  <Flower size={16} /> 十一個小葉種 (綠/烏龍體系)
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200">
                    <div className="text-xs font-black text-stone-400 uppercase mb-3 tracking-widest">經典地方種</div>
                    <div className="flex flex-wrap gap-2">
                      {["青心烏龍", "青心大冇", "大葉烏龍", "硬枝紅心", "青心柑仔", "鐵觀音", "四季春"].map(tea => (
                        <span key={tea} className="px-4 py-2 rounded-xl bg-white text-stone-800 text-[15px] font-bold border border-stone-200 shadow-sm">{tea}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="text-xs font-black text-emerald-400 uppercase mb-3 tracking-widest">國家育成種</div>
                    <div className="flex flex-wrap gap-2">
                      {["台茶 12 (金萱)", "台茶 13 (翠玉)", "台茶 17 (白鷺)", "台茶 20 (迎香)"].map(tea => (
                        <span key={tea} className="px-4 py-2 rounded-xl bg-white text-emerald-900 text-[15px] font-bold border border-emerald-200 shadow-sm">{tea}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 4: Geography & Full Detailed Varieties List */}
        <Section id="cultivar-geography" title="4. 台灣茶區的品種地理學：產區、特性與分布" icon={Mountain}>
          <div className="mb-10">
            <ClickableImage
              src="/images/cultivars/diversity_geography_leaves.png"
              alt="Tea Mountain Geography"
              caption="台灣茶產業的競爭力，體現在地理環境與品種適性的深度結合"
            />
          </div>

          <Subtitle>關鍵品種深度解析 (補全內容)</Subtitle>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { title: "青心烏龍", desc: "早期自閩引進，產量居冠（佔61%）。具優雅花香，適應性強，高海拔產區表現尤佳，為台灣包種與烏龍茶的主力。", color: "emerald" },
                { title: "青心大冇", desc: "桃竹苗丘陵區主力。由客家茶農選育，耐蟲害，為「東方美人茶」靈魂，其關鍵在於小綠葉蟬叮咬產生的果蜜香。", color: "amber" },
                { title: "青心柑仔", desc: "三峽地區特產。鮮葉具肉桂香與清雅花香，不但是「碧螺春」綠茶，亦是近年「蜜香紅茶」的優質原料。", color: "green" },
              ].map(item => (
                <div key={item.title} className="p-6 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-all border-l-8" style={{ borderLeftColor: `var(--color-${item.color}-500)` }}>
                  <h5 className="font-extrabold text-xl text-stone-900 mb-2">{item.title}</h5>
                  <Paragraph className="text-[16px]">{item.desc}</Paragraph>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { title: "四季春", desc: "具有極強的抗寒力與萌芽力，年採收次數高達6-7次。具高度香氣但喉韻相對較短，主要產於南投名間，常用於餐飲商用與手搖茶。", color: "lime" },
                { title: "鐵觀音", desc: "木柵地區代表。具獨特的「鐵韻」（成熟火味），適製深度焙火之烏龍，具備老茶轉化潛力，是台灣茶文化中硬漢派的象徵。", color: "stone" },
                { title: "大葉烏龍", desc: "源自福建安溪。早期廣布全台，現以花蓮瑞穗、富里之「蜜香紅茶」與台東「紅烏龍」應用最為優異。", color: "orange" },
              ].map(item => (
                <div key={item.title} className="p-6 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-all border-l-8" style={{ borderLeftColor: `var(--color-${item.color}-500)` }}>
                  <h5 className="font-extrabold text-xl text-stone-900 mb-2">{item.title}</h5>
                  <Paragraph className="text-[16px]">{item.desc}</Paragraph>
                </div>
              ))}
            </div>
          </div>

          <Callout title="山茶 (Formosan Wild Tea)" icon={Leaf} variant="rose">
            原生喬木，分布於中央山脈南段（高雄六龜、南投德化社與鳳凰山等）。多為異交產生的實生苗，樹勢高大，茶葉帶有獨特的山林野氣，極具單株開發潛力。
          </Callout>
        </Section>

        {/* Section 5: Black Tea International Market */}
        <Section id="cultivar-blacktea" title="5. 台灣紅茶品種的國際競爭力與創新局勢" icon={Sun}>
          <Grid>
            <div className="space-y-6">
              <Paragraph>
                台灣紅茶已從大葉種（Assamica）單一主軸，發展至「大葉與小葉並行」的多樣化市場。早期以日月潭阿薩姆為基礎，如今以人工育種的<strong className="text-rose-700">台茶 18 號 (紅玉)</strong> 憑藉其特有的薄荷與肉桂香，震撼國際市場。
              </Paragraph>
              <Paragraph>
                後續育成的<strong className="text-amber-700">台茶 21 號 (紅韻)</strong> 則展現了極致的柚子花香與細膩條索，填補了高階莊園紅茶的市場空白。
              </Paragraph>
              <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-8 rounded-2xl border border-rose-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Sparkles size={120} className="text-rose-500" />
                </div>
                <h5 className="font-black text-rose-900 text-[20px] mb-4 relative z-10">世界級精品：小葉種紅茶</h5>
                <Paragraph className="text-stone-700 text-[17px] relative z-10">
                  如三峽蜜香紅、木柵「韻紅」(鐵觀音或金萱製)。這些茶類利用小葉種細膩的化學質地，搭配精緻發酵技術，常在國際茶博會中與印度、
                  斯里蘭卡頂級大吉嶺紅茶一較高下。
                </Paragraph>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-100">
              <ClickableImage
                src="/images/cultivars/diversity_ruby18_market.png"
                alt="Black Tea Craft"
                caption="台灣紅茶的創新，是不斷將不同品種的香氣極限推向感官前端"
              />
            </div>
          </Grid>
        </Section>

        {/* Section 6: TTES 25 & PurpleBud Science */}
        <Section id="cultivar-ttes25" title="6. 未來之光：台茶 25 號與紫芽茶的科學展望" icon={Microscope}>
          <Grid cols={1} className="md:grid-cols-[0.8fr,1.2fr] items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg border border-purple-100">
              <ClickableImage
                src="/images/cultivars/diversity_ttes25_purplebud.png"
                alt="TTES 25 Visual Style"
                caption="台茶25號：天然的紫芽抗氧化資產"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <Subtitle>功能性與感官的雙重飛躍</Subtitle>
              <Paragraph>
                台茶 25 號源自「緬甸大葉種」的天然雜合種。其最大的特點在於嫩芽與嫩葉顯現深紫紅色，這是因為含有極高濃度的<strong className="text-purple-700">花青素 (Anthocyanins)</strong>。
              </Paragraph>
              <div className="p-6 bg-purple-50/50 rounded-xl border border-purple-100 text-purple-900">
                <div className="font-black text-lg mb-1 flex items-center gap-2 underline decoration-purple-300 underline-offset-4 decoration-2">化學與視覺的魔法</div>
                <div className="text-[17px] text-purple-800/90 leading-relaxed">
                  花青素對 pH 值極度敏感。茶湯加入檸檬汁後會轉化為亮粉色，開創全新飲用體驗。
                </div>
              </div>
            </div>
          </Grid>
        </Section>

        {/* Section 7: Environment & Science & History (The Complete Timeline) */}
        <Section id="cultivar-science" title="7. 茶樹栽植的環境科學與命名史實" icon={CloudRain}>

          <div className="bg-emerald-950 p-10 md:p-16 rounded-[4rem] text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px]"></div>
            <div className="max-w-3xl mx-auto space-y-12 relative z-10 text-center">
              <h2 className="text-4xl font-black">理想栽培環境：四重維度</h2>
              <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="space-y-2">
                  <Thermometer size={40} className="mx-auto text-emerald-400" />
                  <div className="text-[12px] font-bold opacity-60 uppercase tracking-widest">年均溫</div>
                  <div className="text-2xl font-black italic">18-25°C</div>
                </div>
                <div className="space-y-2">
                  <Droplets size={40} className="mx-auto text-emerald-400" />
                  <div className="text-[12px] font-bold opacity-60 uppercase tracking-widest">降雨量</div>
                  <div className="text-xl font-black italic">1500-3000mm</div>
                </div>
                <div className="space-y-2">
                  <Sun size={40} className="mx-auto text-emerald-400" />
                  <div className="text-[12px] font-bold opacity-60 uppercase tracking-widest">光照</div>
                  <div className="text-xl font-black italic">充足漫射光</div>
                </div>
                <div className="space-y-2">
                  <Microscope size={40} className="mx-auto text-emerald-400" />
                  <div className="text-[12px] font-bold opacity-60 uppercase tracking-widest">土壤酸鹼</div>
                  <div className="text-xl font-black italic">pH 4.5-5.5</div>
                </div>
              </div>

              <div className="mb-10 max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30">
                <ClickableImage
                  src="/images/cultivars/diversity_ideal_environment.png"
                  alt="Ideal Environment"
                  caption="茶樹理想栽培環境之四重維度分析"
                />
              </div>

              <div className="text-stone-300 text-lg leading-relaxed pt-8 border-t border-emerald-800/50">
                茶樹必須栽製於<strong className="text-white">三相構造</strong>（50% 固體、25% 氣體、25% 液體）平衡的酸性土壤。理想環境多伴隨雲霧迷漫（High Humidity），這有利於葉肉質地的細膩化，亦是高山茶風味的科學基礎。
              </div>
            </div>
          </div>

          <div className="mt-16 bg-stone-50 rounded-[3rem] p-10 md:p-16 border border-stone-200">
            <Subtitle className="mb-8">台灣茶樹品種命名之歷史演進</Subtitle>
            <div className="space-y-10 relative before:absolute before:left-[17px] before:top-4 before:bottom-4 before:w-1 before:bg-stone-200">
              <div className="relative pl-14">
                <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-stone-500 border-4 border-white shadow-sm"></div>
                <strong className="block text-stone-900 text-xl font-black">早期 (清領至日治初期)</strong>
                <Paragraph className="text-stone-600">以植株形態、色澤或產地俗名命名（如青心、軟枝、硬枝、大葉、黃柑等）。</Paragraph>
              </div>
              <div className="relative pl-14">
                <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-stone-900 border-4 border-white shadow-sm"></div>
                <strong className="block text-stone-900 text-xl font-black">系統研發時期 (台茶 1–11 號)</strong>
                <Paragraph className="text-stone-600">前期多針對綠茶與紅茶適製性進行選育，研發週期極長，奠定了國家級育種的公信力。</Paragraph>
              </div>
              <div className="relative pl-14">
                <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-emerald-600 border-4 border-white shadow-sm"></div>
                <strong className="block text-stone-900 text-xl font-black">現代品種權時期 (台茶 12 號至今)</strong>
                <Paragraph className="text-stone-600">
                  育種重點轉向烏龍、包種的高度經濟價值。台茶 12 號 (金萱) 首創「奶香」奇蹟。目前如台茶 19、20、22、25 號等均受<strong className="text-emerald-700">品種權</strong>法律保護。
                </Paragraph>
              </div>
            </div>
          </div>
        </Section>


        {/* Conclusion */}
        <footer className="relative mt-20 pt-16 border-t border-stone-200 group">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-white border border-stone-200 rounded-full shadow-sm text-stone-400 group-hover:scale-110 transition-transform">
            <BookOpen size={24} />
          </div>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h4 className="text-[24px] font-black text-stone-900">結語</h4>
            <Paragraph className="italic text-stone-500">
              從清代先民帶來的實生種子變異，到現代科學育成的台茶25號，台灣茶樹品種的多樣性是這片土地最強大的競爭優勢。
              透過將製茶技術與市場策略與品種適性精準匹配，我們將持續以科學為基石，傳承歷史底蘊，在多變的全球茶市場中領航前行。
            </Paragraph>
            <div className="flex justify-center gap-4 pt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
