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
  Search
} from 'lucide-react';
import ClickableImage from '../../components/ClickableImage';

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-28 mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800">
          {Icon && <Icon size={24} />}
        </div>
        <h3 className="text-2xl font-bold text-stone-900">{title}</h3>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}

function Callout({ title, children }) {
  return (
    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 text-sky-600">
        <ClipboardList size={80} />
      </div>
      <div className="flex items-start gap-4 relative z-10">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-sky-200 text-sky-600 shadow-sm shrink-0">
          <ClipboardList size={20} />
        </span>
        <div>
          <div className="font-extrabold text-stone-900 text-lg mb-1">{title}</div>
          <div className="text-stone-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SimpleTable({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-2">
        <Table size={16} className="text-stone-400" />
        <h4 className="font-bold text-stone-800">{title}</h4>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

function BulletList({ children }) {
  return <ul className="space-y-3 text-[17px] text-stone-700">{children}</ul>;
}

export default function TaiwanCultivarDiversity() {
  return (
    <article className="max-w-5xl mx-auto space-y-12 pb-24">

      {/* Hero Section */}
      <header className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-900 min-h-[500px] group">
        <img
          src="/images/taiwan_cultivars_hero.png"
          alt="Artistic Illustration of Taiwan Tea Cultivars"
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent flex flex-col justify-end p-8 md:p-16">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-100 text-xs font-bold tracking-widest uppercase">
                <Dna size={12} /> Cultivars
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-stone-200 text-xs font-bold tracking-widest uppercase">
                <MapPin size={12} /> Taiwan
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              多樣性的台灣茶樹<br />
              <span className="text-emerald-400">栽培品種</span>與特性解析
            </h1>
            <p className="text-lg md:text-xl text-stone-200 leading-relaxed font-light max-w-2xl border-l-4 border-emerald-500 pl-6">
              以<strong className="text-white">育種</strong>、<strong className="text-white">分類</strong>與<strong className="text-white">產區適製性</strong>為主線，
              深度解構台灣茶樹品種的多元基因庫。
            </p>
          </div>
        </div>
      </header>

      <div className="px-4 md:px-0 space-y-16">

        <Callout title="快速記憶框架：先抓大方向">
          先記住核心口訣 <span className="text-sky-700 font-bold bg-sky-100 px-1 rounded">「大葉種 vs 小葉種」</span> 與 <span className="text-sky-700 font-bold bg-sky-100 px-1 rounded">「四大十一小」</span>。
          <ul className="mt-3 space-y-1 text-base pl-4 border-l-2 border-sky-200 text-stone-600">
            <li>• <strong>大葉種：</strong> 多與紅茶系統相關（如阿薩姆、紅玉）。</li>
            <li>• <strong>小葉種：</strong> 廣泛應用於綠茶、包種與烏龍（如青心烏龍、金萱）。</li>
          </ul>
        </Callout>

        <Section id="cultivar-01" title="一、茶樹的生物特性與育種基礎" icon={Sprout}>
          <div className="mb-6">
            <ClickableImage
              src="/images/tea-talk/ch01-breeding-methods.png"
              alt="茶樹育種之美"
              caption="茶樹育種之美：左為「雜交」授粉，右為農人「選育」優良單株"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-[17px] text-stone-700 leading-relaxed">
                茶樹屬多年生常綠作物，並非糧食作物，具有特殊的經濟用途。在生物學特性上，茶樹屬於<strong className="text-emerald-700">異交作物</strong>。
                雖然雌雄同花，但因「自交不親和性」（常用「近水樓台不得月」形容），必須藉由其他雄蕊花粉授粉，才能完成繁殖。
              </p>
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-base text-stone-600 shadow-sm">
                <div className="flex gap-3 mb-2">
                  <div className="p-2 bg-white rounded-lg shadow-sm shrink-0"><GitBranch size={16} className="text-stone-400" /></div>
                  <div>
                    <strong className="text-stone-900 block mb-1">實生苗的變異與複製</strong>
                    授粉後的種子稱為「實生苗」，遺傳變異大（每株都不一樣）。為確保品質一致，育種選拔後通常改用<strong>「扦插」</strong>進行無性繁殖。
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Breeding Paths */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Microscope size={18} className="text-emerald-600" /> 兩大育種途徑
              </h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-3 hover:bg-stone-50 rounded-xl transition-colors">
                  <div className="mt-1 p-2 bg-emerald-100 text-emerald-700 rounded-lg"><Wind size={16} /></div>
                  <div>
                    <div className="text-sm font-bold text-stone-900">1. 雜交育種 (Hybridization)</div>
                    <ul className="text-base text-stone-600 mt-1 space-y-1">
                      <li>• <strong className="text-emerald-700">天然雜交：</strong> 風力/昆蟲授粉，父本不詳。ex: 台茶 21, 23</li>
                      <li>• <strong className="text-emerald-700">人工雜交：</strong> 父母本已知，遠緣雜交優勢。ex: 台茶 12, 18, 22</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-3 hover:bg-stone-50 rounded-xl transition-colors">
                  <div className="mt-1 p-2 bg-amber-100 text-amber-700 rounded-lg"><Search size={16} /></div>
                  <div>
                    <div className="text-sm font-bold text-stone-900">2. 單株選拔 (Selection)</div>
                    <p className="text-base text-stone-600 mt-1">
                      從現有變異群體中挑選優異單株。
                      <br /><span className="text-xs text-stone-500">ex: 台茶 8 號 (阿薩姆選拔), 台茶 24 號 (原生山茶選拔)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="cultivar-02" title="二、台灣茶樹品種分類：兩大類與「四大十一小」" icon={Leaf}>
          <p className="text-[17px] text-stone-700 leading-relaxed mb-6">
            依據植物學分類，茶樹可分為大葉種（<em>Camellia sinensis var. assamica</em>）與小葉種（<em>Camellia sinensis var. sinensis</em>）。
            這是理解茶葉適製性最基礎的分類。
          </p>
          <div className="mb-8">
            <ClickableImage
              src="/images/tea-talk/ch01-leaf-comparison.png"
              alt="大葉種與小葉種比較"
              caption="大葉種（左/紅韻）與小葉種（右/清雅）的葉形特徵對比"
            />
          </div>

          {/* Big Leaf vs Small Leaf Comparison */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative overflow-hidden rounded-2xl border border-rose-100 bg-gradient-to-br from-white to-rose-50 p-6 group hover:shadow-md transition-all">
              <div className="absolute -right-4 -top-4 opacity-5 text-rose-900 transform rotate-12 group-hover:scale-110 transition-transform">
                <Leaf size={120} />
              </div>
              <h4 className="text-lg font-black text-rose-900 mb-2 flex items-center gap-2">
                <Leaf size={20} /> 大葉種 (Assamica)
              </h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center gap-3 text-base text-stone-700">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-rose-500 font-bold text-xs">高</div>
                  <span>兒茶素高 (苦澀感強、茶體厚)</span>
                </li>
                <li className="flex items-center gap-3 text-base text-stone-700">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-rose-500"><Droplets size={14} /></div>
                  <span>適合 <strong className="text-rose-700">紅色系 (紅茶)</strong> 全發酵</span>
                </li>
                <li className="flex items-center gap-3 text-base text-stone-700">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-rose-500"><MapPin size={14} /></div>
                  <span>魚池、埔里 (日月潭產區)</span>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-6 group hover:shadow-md transition-all">
              <div className="absolute -right-4 -top-4 opacity-5 text-emerald-900 transform rotate-12 group-hover:scale-110 transition-transform">
                <Sprout size={120} />
              </div>
              <h4 className="text-lg font-black text-emerald-900 mb-2 flex items-center gap-2">
                <Sprout size={20} /> 小葉種 (Sinensis)
              </h4>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center gap-3 text-base text-stone-700">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-500 font-bold text-xs">低</div>
                  <span>兒茶素較低 (風味細緻、優雅)</span>
                </li>
                <li className="flex items-center gap-3 text-base text-stone-700">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-500"><div className="w-2 h-2 rounded-full bg-emerald-400"></div></div>
                  <span>適合 <strong className="text-emerald-700">綠茶、包種、烏龍</strong></span>
                </li>
                <li className="flex items-center gap-3 text-base text-stone-700">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-500"><MapPin size={14} /></div>
                  <span>全台多數高山與丘陵茶區</span>
                </li>
              </ul>
            </div>
          </div>

          <SimpleTable title="詳細快速對照">
            <table className="min-w-full text-base text-stone-700">
              <thead className="bg-stone-50">
                <tr className="text-left">
                  <th className="px-6 py-3 font-extrabold text-stone-600">面向</th>
                  <th className="px-6 py-3 font-extrabold text-stone-600">大葉種</th>
                  <th className="px-6 py-3 font-extrabold text-stone-600">小葉種</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                <tr className="hover:bg-stone-50/50">
                  <td className="px-6 py-3 font-bold text-stone-800">兒茶素（多酚）</td>
                  <td className="px-6 py-3 text-rose-700 font-medium">較高（苦澀／厚度來源）</td>
                  <td className="px-6 py-3 text-emerald-700 font-medium">相對較低（風味更細緻）</td>
                </tr>
                <tr className="hover:bg-stone-50/50">
                  <td className="px-6 py-3 font-bold text-stone-800">適製性</td>
                  <td className="px-6 py-3">紅茶系（全發酵）</td>
                  <td className="px-6 py-3">綠茶／包種／烏龍</td>
                </tr>
                <tr className="hover:bg-stone-50/50">
                  <td className="px-6 py-3 font-bold text-stone-800">主要茶區</td>
                  <td className="px-6 py-3">魚池、埔里</td>
                  <td className="px-6 py-3">全台廣泛分布</td>
                </tr>
              </tbody>
            </table>
          </SimpleTable>

          {/* 4 Major & 11 Minor Grid */}
          <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="mb-8">
              <ClickableImage
                src="/images/tea-talk/ch01-cultivar-tree.png"
                alt="台灣茶樹品種系譜"
                caption="台灣茶樹品種系譜：左支紅色系（大葉種）、右支綠色系（小葉種）"
              />
            </div>
            <h4 className="text-xl font-black text-stone-900 mb-6 text-center">
              品種口訣：<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-emerald-600">「四大十一小」</span>
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 4 Major */}
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-widest mb-4">
                  四大葉種 (紅茶系)
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: "阿薩姆", desc: "日治時期引進", code: "Assam" },
                    { name: "台茶 8 號", desc: "阿薩姆選拔", code: "No.8" },
                    { name: "台茶 18 號", desc: "紅玉 | 薄荷香", code: "No.18", highlight: true },
                    { name: "台茶 21 號", desc: "紅韻 | 柑橘花香", code: "No.21" }
                  ].map(item => (
                    <div key={item.code} className={`flex items-center justify-between p-3 rounded-xl border ${item.highlight ? 'border-rose-300 bg-rose-50' : 'border-stone-100 bg-white'} transition-colors`}>
                      <span className="font-bold text-stone-800">{item.name}</span>
                      <span className="text-xs text-stone-500">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 11 Minor */}
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest mb-4">
                  十一個小葉種 (綠/烏龍)
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase mb-2">地方品種 (Classic)</div>
                    <div className="flex flex-wrap gap-2">
                      {["青心烏龍", "青心大冇", "大葉烏龍", "硬枝紅心", "青心柑仔", "鐵觀音", "四季春"].map(tea => (
                        <span key={tea} className="px-3 py-1 rounded-lg bg-stone-100 text-stone-700 text-sm font-medium border border-stone-200">
                          {tea}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase mb-2">育成品種 (Modern)</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "台茶12 (金萱)", code: "No.12" },
                        { name: "台茶13 (翠玉)", code: "No.13" },
                        { name: "台茶17 (白鷺)", code: "No.17" },
                        { name: "台茶20 (迎香)", code: "No.20" }
                      ].map(tea => (
                        <span key={tea.code} className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-sm font-medium border border-emerald-100">
                          {tea.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="cultivar-03" title="三、主要品種特性與產區分布" icon={MapPin}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Classic Varieties */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
              <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-6 bg-stone-400 rounded-full"></div> 1）經典地方品種
              </h4>
              <ul className="space-y-4">
                {[
                  { title: "青心烏龍", desc: "主宰高山與清香型。適應性強，海拔越高表現越佳。", pct: "61%", color: "text-emerald-700" },
                  { title: "青心大冇", desc: "桃竹苗專屬，各種蟲害是「東方美人」的關鍵。", pct: "客家茶區", color: "text-amber-700" },
                  { title: "青心柑仔", desc: "三峽名產，碧螺春與蜜香紅茶的首選品種。", pct: "三峽", color: "text-emerald-600" },
                  { title: "四季春", desc: "生命力強，年採6-7次。高香但韻短，手搖與商用茶主力。", pct: "名間鄉", color: "text-lime-700" },
                  { title: "鐵觀音", desc: "木柵特產，紅心歪尾桃，具獨特品種韻。", pct: "木柵", color: "text-stone-700" },
                  { title: "大葉烏龍", desc: "花蓮瑞穗主力，現多轉作蜜香紅茶。", pct: "花蓮", color: "text-amber-700" }
                ].map((item, idx) => (
                  <li key={idx} className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm flex gap-3">
                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${item.color.replace('text-', 'bg-')}`}></div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <strong className="text-stone-900">{item.title}</strong>
                        <span className="text-xs font-bold px-2 py-0.5 bg-stone-100 text-stone-500 rounded">{item.pct}</span>
                      </div>
                      <p className="text-base text-stone-600 leading-snug">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modern Varieties */}
            <div className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm">
              <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-6 bg-emerald-500 rounded-full"></div> 2）茶改場育成品種
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-200 pl-4 py-1">
                  <strong className="text-lg text-emerald-900">台茶 12 號 (金萱)</strong>
                  <p className="text-stone-700 text-base mt-1">
                    產量高、具獨特奶香，包種/烏龍/紅茶皆宜。新手入門首選。
                  </p>
                </div>
                <div className="border-l-4 border-rose-200 pl-4 py-1">
                  <strong className="text-lg text-rose-900">台茶 18 號 (紅玉)</strong>
                  <p className="text-stone-700 text-base mt-1">
                    薄荷香＋肉桂香。具強烈收斂性與辨識度，台灣紅茶的國際名片。
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 mt-4">
                  <div className="flex items-center gap-2 text-purple-900 font-bold mb-2">
                    <Sprout size={16} /> 未來新星：台茶 25 號 (紫芽)
                  </div>
                  <p className="text-purple-800 text-base leading-relaxed">
                    花青素極高，遇酸變色（手搖飲潛力）。觀賞與飲用兼具的明日之星。
                  </p>
                </div>
                <p className="text-xs text-stone-500 mt-4">
                  * 其他如台茶 13 (翠玉)、20 (迎香) 等亦是常見栽培品種。
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="cultivar-04" title="四、台灣紅茶與山茶的發展現況" icon={BookOpen}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-rose-50 rounded-2xl border border-rose-100 p-6">
              <h4 className="font-bold text-rose-900 text-lg mb-4 flex items-center gap-2">
                <Sun size={20} className="text-rose-500" /> 紅茶的多樣化
              </h4>
              <div className="space-y-3 text-base text-stone-700">
                <p className="leading-relaxed">
                  從早期日月潭的大葉種（阿薩姆、紅玉）為主，現已發展出百花齊放的局面。
                </p>
                <ul className="space-y-2 pl-2">
                  <li className="flex gap-2"><MapPin size={16} className="text-rose-400 shrink-0" /> <span><strong>宜蘭：</strong> 金萱/翠玉紅茶</span></li>
                  <li className="flex gap-2"><MapPin size={16} className="text-rose-400 shrink-0" /> <span><strong>木柵：</strong> 韻紅 (鐵觀音/金萱製)</span></li>
                  <li className="flex gap-2"><MapPin size={16} className="text-rose-400 shrink-0" /> <span><strong>三峽：</strong> 蜜香紅茶 (青心柑仔)</span></li>
                  <li className="flex gap-2"><MapPin size={16} className="text-rose-400 shrink-0" /> <span><strong>高山：</strong> 蜜香烏龍/紅茶 (高單價)</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-stone-800 rounded-2xl border border-stone-700 p-6 text-stone-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20"><MapPin size={100} className="text-stone-500" /></div>
              <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2 relative z-10">
                <Leaf size={20} className="text-emerald-400" /> 台灣原生山茶
              </h4>
              <p className="leading-relaxed text-base relative z-10">
                分布於中央山脈南段（六龜、永康山、鳳凰山等）。
                <br /><br />
                <strong>特點：</strong> 多為實生苗喬木，樹勢高大，芽葉無毛或少毛。風味獨特，帶有狂野的山林氣息。
                除紅茶外，現亦製作白茶、綠茶等嘗試。
              </p>
            </div>
          </div>
        </Section>

        <Section id="cultivar-05" title="五、茶樹栽培環境與命名歷史" icon={CloudRain}>
          <div className="space-y-8">
            {/* Environment Table */}
            <div className="mb-8">
              <ClickableImage
                src="/images/tea-talk/ch01-ideal-environment.png"
                alt="理想的高山茶園環境"
                caption="理想的高山茶園環境：雲霧繚繞、漫射光充足、排水良好的坡地"
              />
            </div>
            <SimpleTable title="理想栽培環境">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-stone-100 bg-white">
                <div className="p-4 text-center">
                  <Thermometer size={24} className="mx-auto text-amber-500 mb-2" />
                  <div className="text-xs font-bold text-stone-400 uppercase">Temp</div>
                  <div className="font-bold text-stone-800">18–25°C</div>
                </div>
                <div className="p-4 text-center">
                  <CloudRain size={24} className="mx-auto text-sky-500 mb-2" />
                  <div className="text-xs font-bold text-stone-400 uppercase">Rain</div>
                  <div className="font-bold text-stone-800">1500–3000 mm</div>
                </div>
                <div className="p-4 text-center">
                  <Leaf size={24} className="mx-auto text-emerald-500 mb-2" />
                  <div className="text-xs font-bold text-stone-400 uppercase">Soil</div>
                  <div className="font-bold text-stone-800">酸性 (pH 4.5~5.5)</div>
                </div>
                <div className="p-4 text-center">
                  <Sun size={24} className="mx-auto text-orange-500 mb-2" />
                  <div className="text-xs font-bold text-stone-400 uppercase">Light</div>
                  <div className="font-bold text-stone-800">漫射光 (忌強烈直射)</div>
                </div>
              </div>
            </SimpleTable>

            {/* Naming History */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <h4 className="font-bold text-stone-900 mb-4">品種命名演變史</h4>
              <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-300">
                <div className="relative pl-10">
                  <div className="absolute left-1 top-1.5 w-5 h-5 rounded-full bg-stone-400 border-4 border-stone-100"></div>
                  <strong className="block text-stone-800">早期 (清領/日治)</strong>
                  <span className="text-base text-stone-600">以形態或產地俗名命名 (如軟枝、硬枝、大葉、青心...)</span>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-1 top-1.5 w-5 h-5 rounded-full bg-stone-600 border-4 border-stone-100"></div>
                  <strong className="block text-stone-800">茶改場選育 (台茶 1–11 號)</strong>
                  <span className="text-base text-stone-600">前期多針對綠茶/紅茶選育，週期長 (約35年)。</span>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-1 top-1.5 w-5 h-5 rounded-full bg-emerald-600 border-4 border-stone-100"></div>
                  <strong className="block text-stone-800">現代育種 (台茶 12 號後)</strong>
                  <span className="text-sm text-stone-600">
                    轉向包種/烏龍適製性。台茶 19/22 等受<span className="text-emerald-700 font-bold">品種權</span>保護，禁止私自擴繁。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <footer className="mt-12 pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-500 text-base italic">
            * 本章節不僅是知識，皆為台灣茶農與研究人員的心血結晶。飲水思源，品茶更香。
          </p>
        </footer>
      </div>
    </article>
  );
}
