import React from 'react';
import {
  Award,
  Beaker,
  Coins,
  History,
  Leaf,
  MapPin,
  ShieldAlert,
  Thermometer,
  Users,
  Wind,
  Flower,
  BookOpen,
  Sparkles,
  Coffee,
  Sprout,
  Scale,
  CloudRain
} from 'lucide-react';
import { Callout, DataTable } from '../references/ui';

export default function OrientalBeautySupplement() {
  return (
    <div className="max-w-5xl mx-auto space-y-24 pb-24">
      {/* Header */}
      <div className="relative py-16 px-8 md:px-0 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-amber-900/30" />
        <span className="inline-block py-1 px-3 border border-amber-900/30 rounded-full text-amber-900 text-xs font-bold tracking-[0.2em] mb-4">TEACHING NOTES</span>
        <h3 className="text-4xl md:text-5xl font-black text-stone-900 font-serif mb-6">臺灣東方美人茶<br /><span className="text-2xl md:text-3xl text-stone-500 font-light mt-2 block">深度教學與產業分析</span></h3>
        <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
          本章節整合產業現況、生態機制、製程工藝與市場評鑑，提供最完整的東方美人茶教學資料庫。
        </p>
      </div>

      {/* Section 01: Ecology & Nature's Alchemy (Renumbered from 02) */}
      <section>
        <div className="flex items-center gap-4 mb-8 justify-center">
          <span className="text-5xl font-serif text-stone-200 font-bold">01</span>
          <div className="text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-bold text-stone-900">自然的煉金術：天時與地利</h4>
            <p className="text-sm text-stone-500 mt-1">小綠葉蟬 × 友善農法 × 自然密碼</p>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-stone-200 shadow-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 space-y-8">
              <div className="prose text-stone-700">
                <strong className="text-amber-800 block text-lg mb-2">3.1 關鍵角色：蜜香的誕生與天時</strong>
                <p className="text-sm">
                  蜜香的誕生核心在於「著涎」。茶樹嫩芽經刺吸後，啟動防禦療癒機制。
                  <br />但要吸引小綠葉蟬極難。牠們偏好「悶濕」氣候。若茶園通風涼爽（天時不對），即便友善農法也可能無蟲造訪，獨缺蜜香。這說明了天時的決定性。
                </p>
              </div>

              <div className="space-y-4 bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <h5 className="font-bold text-stone-900 mb-2">刺吸後的三大生化反應</h5>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold shrink-0 text-sm">1</div>
                  <div>
                    <h6 className="font-bold text-stone-800 text-sm">在欉發酵 (On-Plant)</h6>
                    <p className="text-xs text-stone-600">傷口接觸空氣，樹上即開始氧化發酵。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold shrink-0 text-sm">2</div>
                  <div>
                    <h6 className="font-bold text-stone-800 text-sm">防禦機制 (Defense)</h6>
                    <p className="text-xs text-stone-600">釋放費洛蒙吸引天敵（白獵蛛、黃斑粗喙椿象）。「聯合次要敵人打擊主要敵人」。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold shrink-0 text-sm">3</div>
                  <div>
                    <h6 className="font-bold text-stone-800 text-sm">自癒能力 (Healing)</h6>
                    <p className="text-xs text-stone-600">分泌芳香醇與茶多酚修復傷口。「傷口令人脆弱，但也令人堅強。」</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] group">
              <img src="/images/featured/orientalbeauty/leafhopper.png" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" alt="Jacobiasca formosana Art" />
              <img src="/images/featured/orientalbeauty/leafhopper_macro.png" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" alt="Jacobiasca formosana Real" />

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                HOVER TO SEE REAL
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 text-white pointer-events-none">
                <h5 className="font-serif text-2xl font-bold mb-2">Jacobiasca formosana</h5>
                <p className="opacity-90">小綠葉蟬・蜜香的靈魂繪師</p>
              </div>
            </div>
          </div>
        </div>

        {/* Friendly Farming */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-200">
            <h5 className="font-bold text-stone-900 text-xl mb-4 flex items-center gap-2"><Sprout className="text-green-600" /> 3.2 友善農法：草與茶的共生</h5>
            <p className="text-sm text-stone-700 mb-4 leading-relaxed">
              不施肥、不除草。保留完整生態鏈：
              <br /><span className="font-bold text-stone-800">蚯蚓 → 青蛙 → 蛇 → 老鷹</span>。
            </p>
            <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
              <strong className="block text-stone-900 mb-2 text-sm">草生栽培的智慧（草不是敵人，是對手）</strong>
              <p className="text-xs text-stone-600">
                乾旱時，地表的草能為茶樹根部保濕，將儲存水分輸送給茶樹。這是一種順應自然的生態智慧。
              </p>
            </div>
          </div>

          <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-200">
            <h5 className="font-bold text-stone-900 text-xl mb-4 flex items-center gap-2"><Leaf className="text-amber-700" /> 3.3 深根 vs 淺根</h5>
            <ul className="space-y-4 text-sm text-stone-700">
              <li>
                <strong className="text-stone-900">茶樹本性：深根植物</strong>
                <br />標準：根深達地面高度的三倍。能深入地底吸取微量元素與水分。
              </li>
              <li>
                <strong className="text-stone-900">施肥的影響：誘導淺根化</strong>
                <br />習慣表層獲取養分後，根系不再向下探索，退化為淺根。雖產量高，但抗旱力弱，風味層次較淺。
              </li>
              <li className="text-xs text-stone-500 italic">
                *友善農法不施肥的堅持，正是為了逼茶樹回歸深根，孕育出更富生命力的茶菁。
              </li>
            </ul>
          </div>
        </div>

        {/* Honey Aroma Debate */}
        <div className="mt-12 bg-white border border-stone-200 p-8 rounded-[2rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[100%] z-0" />
          <h4 className="text-xl font-bold text-stone-900 mb-6 relative z-10">4. 「蜜香」的本質論辯</h4>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h5 className="font-bold text-amber-700 mb-2">主流觀點：源於自然</h5>
              <p className="text-sm text-stone-700 leading-relaxed">
                源於茶樹被刺吸後的生物本能（防禦力 + 治癒力）。<br />
                <span className="italic">"茶樹跟人一樣，傷口會讓人脆弱，但也讓人堅強。" ——《茶金》</span>
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-600 mb-2">另一種聲音：源於工藝（梅納反應）</h5>
              <p className="text-sm text-stone-700 leading-relaxed">
                認為可透過烘焙產生之「梅納反應」（Maillard）製造糖香/焦糖香，並稱之為蜜香。
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-stone-100 rounded-xl text-sm text-stone-600 relative z-10">
            <strong className="block mb-2 text-stone-800">講者的反思邏輯：</strong>
            如果烘焙產生的糖香可定義為蜜香，那以糖製作的產品是否也能自稱蜂蜜？
            <br />即便接受此說法，也應註解：<span className="font-bold text-stone-900">「它是烘焙產生的，不能叫做天然蜜香」。</span>理解兩者本質差異，才能判斷真實價值。
          </div>
        </div>
      </section>

      {/* Section 02: Terroir (Renumbered from 03, Removed Latitude Deep Dive) */}
      <section>
        <div className="flex items-center gap-4 mb-8 justify-center">
          <span className="text-5xl font-serif text-stone-200 font-bold">02</span>
          <h4 className="text-2xl md:text-3xl font-bold text-stone-900">風土的印記：產區與品種</h4>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative group rounded-[2rem] overflow-hidden shadow-2xl border border-stone-900 h-[500px]">
            <img
              src="/images/featured/orientalbeauty/map_ghibli.png"
              alt="Vintage Map"
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 text-white p-6 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10 max-w-md">
              <div className="font-bold text-xl mb-3 flex items-center gap-2"><MapPin className="text-amber-400" /> 主要產區 (桃竹苗 + 石碇)</div>
              <ul className="text-sm opacity-95 space-y-1 list-disc pl-5">
                <li>桃園市</li>
                <li>新竹縣：北埔、峨眉（夏季濕熱，著涎高）</li>
                <li>苗栗縣：頭份、頭屋、銅鑼</li>
                <li>新北市：石碇</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 h-full flex flex-col justify-center">
              <h5 className="font-bold text-stone-900 text-lg mb-4 text-center">品種與獨特風土</h5>

              <ul className="space-y-4 text-sm text-stone-700">
                <li className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                  <strong className="block text-amber-800 mb-1">四大主流品種</strong>
                  清心大冇（核心）、白毛猴、大葉烏龍、金萱（台茶17/白鷺）。
                </li>
                <li className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                  <strong className="block text-amber-800 mb-1">石碇美人茶：獨特地域風格</strong>
                  <span className="text-xs">
                    相比桃竹苗，石碇更濕、溫較低。
                    <br />表現：蜜香較不顯，以清雅<span className="font-bold">「花果香」與「梨子香」</span>為主。
                  </span>
                </li>
                <li className="bg-amber-50 p-3 rounded-xl border border-amber-100">
                  <strong className="block text-amber-800 mb-1">黃金季節：芒種 - 端午</strong>
                  <span className="text-xs">茶芽最嫩 + 小綠葉蟬最旺盛 = 頂級品質。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Industry (Renumbered from 04) */}
      <section className="group">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-5/12 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-stone-900/10 rounded-[2rem] transform -rotate-2 group-hover:rotate-0 transition-transform" />
            <img src="/images/featured/orientalbeauty/picking_ghibli.png" className="rounded-[2rem] shadow-xl w-full relative z-10" />
          </div>
          <div className="md:w-7/12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-serif text-stone-200 font-bold">03</span>
              <h4 className="text-2xl font-bold text-stone-900">產業現況與危機</h4>
            </div>
            <div className="space-y-6 text-base text-stone-700 leading-relaxed">
              <p>目前茶山面臨嚴峻勞工缺乏問題。大部分已非外籍勞工。</p>

              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <h5 className="font-bold text-stone-900 flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> 黃金計價 (Weight-based)
                </h5>
                <p className="text-sm text-stone-600 mb-4">臺灣目前採茶仍以<span className="font-bold">「黃金（重量）」計價</span>，而非日薪。這影響採摘效率。</p>
                <div className="flex gap-4">
                  <div className="flex-1 bg-white p-3 rounded-xl border border-stone-100 text-center">
                    <span className="block text-xs text-stone-400">山區工資</span>
                    <span className="block text-xl font-bold text-stone-800">$70<small className="text-xs text-stone-400">/kg</small></span>
                  </div>
                  <div className="flex-1 bg-white p-3 rounded-xl border border-stone-100 text-center">
                    <span className="block text-xs text-stone-400">里山工資</span>
                    <span className="block text-xl font-bold text-stone-800">$60<small className="text-xs text-stone-400">/kg</small></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Process (Renumbered from 05) */}
      <section className="bg-stone-900 text-stone-300 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <img src="/images/featured/orientalbeauty/process_ghibli.png" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/95 to-stone-900/60" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
            <span className="text-5xl font-serif text-amber-500/50 font-bold">04</span>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white">人為的藝術：獨特製茶工藝</h4>
              <p className="text-stone-400 mt-1 text-sm">應對細嫩蟲咬原料，發展出的精細工序。</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm mb-12">
            {/* Step 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <h5 className="font-bold text-amber-400 text-base mb-2">1. 日光萎凋（薄攤）</h5>
              <p className="leading-relaxed">須採「薄攤」。若太厚底層無法散熱會「悶傷」產生異味。</p>
            </div>

            {/* Step 2: Men Dui (Deep Dive) */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors md:col-span-2">
              <strong className="text-amber-400 text-lg block mb-3">2. 靜置回潤（悶堆）- 轉化藝術</strong>
              <p className="mb-4 text-stone-300">
                操作：將殺青完仍高溫的茶葉用濕布包裹，在<span className="text-white font-bold">「高溫高濕」</span>下靜置。
                風險：過度會酸臭，不足則留青味（無青味是品質指標）。
              </p>

              <div className="mb-4">
                <span className="block text-white font-bold mb-2">四大目的：</span>
                <ul className="grid md:grid-cols-2 gap-2 text-xs text-stone-400">
                  <li className="flex gap-2">1. <span className="text-white">補足發酵</span>：氧化更完整。</li>
                  <li className="flex gap-2">2. <span className="text-white">熟果香</span>：形成酯類物質。</li>
                  <li className="flex gap-2">3. <span className="text-white">降苦澀</span>：茶素水解，口感水軟。</li>
                  <li className="flex gap-2">4. <span className="text-white">增韌性</span>：利於揉捻不碎。</li>
                </ul>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-stone-400 border border-white/10 rounded-lg">
                  <thead className="text-white bg-white/10 uppercase font-bold">
                    <tr>
                      <th className="px-3 py-2">比較</th>
                      <th className="px-3 py-2">東方美人 (靜置回潤)</th>
                      <th className="px-3 py-2">紅茶 (補足發酵)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-3 py-2 font-bold">溫度</td>
                      <td className="px-3 py-2">高溫 (殺青餘溫)</td>
                      <td className="px-3 py-2">常溫 (約24-25°C)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-bold">濕度</td>
                      <td className="px-3 py-2">高濕 (濕布包裹)</td>
                      <td className="px-3 py-2">極高濕 (&gt;90%)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-bold">本質</td>
                      <td className="px-3 py-2 text-amber-200">烏龍茶製程 (有殺青)</td>
                      <td className="px-3 py-2 text-amber-200">全發酵製程 (無殺青)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/5 text-xs">
                <strong className="text-amber-200">觀念：「濃」vs「濃郁」</strong>
                <br />濃：客觀物質豐富。濃郁：正面評價，風味協調。好茶是濃郁而非僅是濃。
              </div>
            </div>

            {/* Step 3 & 4 & 5 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <h5 className="font-bold text-amber-400 text-base mb-2">3. 重攪拌</h5>
              <p>「彈乾水」。長時間重攪拌破壞葉組織，啟動酵素氧化。</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <h5 className="font-bold text-amber-400 text-base mb-2">4. 炒青 & 揉捻</h5>
              <p>低溫炒青 (100-220°C)。包揉後<span className="text-white font-bold">縮靜</span> 30分鐘。</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors md:col-span-2">
              <h5 className="font-bold text-amber-400 text-base mb-2">5. 乾燥</h5>
              <p>絕不使用甲種乾燥機（風大吹散白毫）。僅用履帶/箱式。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Market & Grading (Renumbered from 06) */}
      <section>
        <div className="flex items-center gap-4 mb-8 justify-center">
          <span className="text-5xl font-serif text-stone-200 font-bold">05</span>
          <h4 className="text-2xl md:text-3xl font-bold text-stone-900">品鑑之道與市場洞察</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm space-y-6">
            <div className="flex justify-between items-start">
              <h5 className="font-bold text-xl text-stone-900 flex items-center gap-2"><Award size={20} className="text-amber-500" /> 評鑑標準</h5>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded-lg">Dry Leaf</span>
            </div>

            <div className="relative rounded-xl overflow-hidden h-48 group">
              <img src="/images/featured/orientalbeauty/dry_leaves.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Oriental Beauty Dry Leaves" />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-white text-xs text-center backdrop-blur-sm">
                五色呈現：紅、白、黃、褐、綠
              </div>
            </div>

            <div className="space-y-4 text-sm text-stone-700">
              <div>
                <strong className="block text-amber-800 mb-1">外觀觀察：</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-stone-900">白毫顯露</strong>：絨毛清晰。</li>
                  <li><strong className="text-stone-900">捲曲如花</strong>：條索優美。</li>
                  <li><strong className="text-stone-900">色澤五色</strong>：紅白黃褐綠。紅色佔比高者佳。避免綠色（菜青味）。</li>
                </ul>
              </div>

              <div className="border-t border-stone-200 pt-4">
                <strong className="block text-amber-800 mb-1">內質感受：</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-stone-900">水色</strong>：顏色深淺變化廣，重點在「潤」，不渾濁。</li>
                  <li><strong className="text-stone-900">香氣</strong>：具蜜香果香。<span className="font-bold text-amber-600">「不膩」</span>（讓人想一口接一口）是關鍵。</li>
                  <li><strong className="text-stone-900">滋味</strong>：單純、有蜜糖味、入口生津復活性高。</li>
                </ul>
              </div>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl text-xs text-stone-600 border border-stone-200 mt-4">
              <strong className="block mb-1 text-stone-800">重要區別：貴妃 vs 東方美人</strong>
              皆著涎，但製法不同。<br />
              貴妃茶：凍頂式（半球形、有烘焙）。<br />
              東方美人：傳統式（條索狀、不烘焙）。
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm space-y-6">
            <h5 className="font-bold text-xl text-stone-900 flex items-center gap-2"><Beaker size={20} className="text-emerald-500" /> 競賽與評鑑</h5>
            <ul className="space-y-4 text-sm text-stone-700">
              <li>
                <strong className="block text-stone-900">四大競賽系統：</strong>桃園全國組、新北石碇、新竹、苗栗。
              </li>
              <li>
                <strong className="block text-stone-900">比賽茶 vs 分級包裝：</strong>
                比賽茶採淘汰制（特等/頭等...）。分級包裝則非淘汰（如依「蟲的數量」1-6隻標示等級）。
              </li>
            </ul>
            <div className="bg-stone-50 p-4 rounded-xl text-xs text-stone-600 border border-stone-200 mt-4">
              <strong className="block mb-1 text-stone-800">沖泡指南 (Gaiwan)</strong>
              90°C水溫。細水長流。出湯後<span className="font-bold text-rose-500">務必掀蓋散熱</span>。
            </div>
          </div>
        </div>

        {/* Innovation Kombucha (Restored Full Detail) */}
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center bg-stone-50 rounded-[2rem] p-8">
          <div className="order-2 md:order-1">
            <h5 className="font-bold text-lg text-stone-900 mb-2 mt-2">創新應用：康普茶 (Kombucha)</h5>
            <p className="text-sm text-stone-600 mb-3">最佳基底。含乳酸菌、酵母菌等多種益菌，抗氧化助消化。</p>

            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <strong className="block mb-2 text-amber-800 text-sm">黃金製作方法 (Recipe)：</strong>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-stone-400 w-12 text-xs uppercase tracking-wider mt-1">Culture</span>
                  <span>保留 <span className="font-bold text-stone-800">20% - 25%</span> 巨魔菌（紅茶菌種、Scoby）</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-stone-400 w-12 text-xs uppercase tracking-wider mt-1">Tea</span>
                  <span>加入 <span className="font-bold text-stone-800">75% - 80%</span> 東方美人茶湯（需放涼）</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-stone-400 w-12 text-xs uppercase tracking-wider mt-1">Sugar</span>
                  <span>每 1000cc 茶湯加 <span className="font-bold text-stone-800">100g</span> 糖（紅糖或二砂）</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-stone-400 w-12 text-xs uppercase tracking-wider mt-1">Time</span>
                  <span>靜置發酵<span className="font-bold text-stone-800">一個禮拜</span>即可</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img src="/images/featured/orientalbeauty/kombucha_ghibli.png" className="w-48 rounded-2xl shadow-md rotate-2" />
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <div className="text-center py-16 px-8 max-w-3xl mx-auto border-t border-stone-100 mt-12">
        <Flower size={32} className="mx-auto text-rose-300 mb-6" />
        <p className="font-serif text-2xl md:text-3xl text-stone-800 leading-normal italic mb-6">
          "這不僅僅是一杯茶，更是品茗者在完成了「認識茶」的完整旅程後，方能深刻體會的液體藝術品。"
        </p>
        <p className="text-stone-500 text-base">
          — 東方美人茶：自然的煉金術 × 人為的藝術 × 風土的印記。
        </p>
      </div>
    </div>
  );
}
