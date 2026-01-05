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
} from 'lucide-react';
import { Callout, DataTable } from '../references/ui';

export default function OrientalBeautySupplement() {
  return (
    <div className="museum-panel p-7 md:p-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="min-w-0">
          <div className="museum-label">TEACHING · NOTES</div>
          <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-stone-900">臺灣東方美人茶特色介紹</h3>
          <p className="mt-3 text-stone-700 leading-relaxed">
            以下內容為東方美人茶的「產業 × 歷史 × 風味 × 產地 × 製程 × 評鑑 × 應用」完整整理，方便教學與對照。
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <details id="obt-unit-1" className="group rounded-2xl border border-stone-200 bg-white overflow-hidden" open>
          <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start gap-3">
            <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 shrink-0">
              <Users size={18} />
            </span>
            <div className="min-w-0">
              <div className="font-extrabold text-stone-900">第一單元：產業現況與危機</div>
              <div className="mt-1 text-sm text-stone-600">茶山勞工、計價方式、產業壓力</div>
            </div>
          </summary>
          <div className="px-6 pb-6">
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="flex items-center gap-2 font-extrabold text-stone-900">
                  <Users size={16} className="text-stone-500" /> 茶山勞工與計價方式
                </div>
                <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <span className="font-bold">人力結構：</span>目前茶山面臨勞工缺乏問題。現在幫忙採茶的工人，大部分不是外籍勞工。
                  </li>
                  <li>
                    <span className="font-bold">薪資計價：</span>臺灣目前仍以<span className="font-bold">黃金（重量）計價</span>，而非日薪。
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>山區採茶工資約為一公斤 70 元。</li>
                      <li>里山採茶工資約為一公斤 60 元。</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">產業危機：</span>臺灣茶產業正逐漸面臨<span className="font-bold">國內市場的擠壓</span>，這是目前產業的危機。
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 md:col-span-2">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-stone-900">
                      <Coins size={16} className="text-amber-600" /> 計價方式重點
                    </div>
                    <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                      以重量計價會讓「採摘效率」直接影響收入，也會影響茶園對採摘標準與人力安排的策略。
                    </div>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-rose-50 p-4">
                    <div className="flex items-center gap-2 text-sm font-extrabold text-stone-900">
                      <ShieldAlert size={16} className="text-rose-600" /> 產業危機提示
                    </div>
                    <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                      國內市場擠壓帶來的壓力，會反映在價格、通路、勞動成本與品質維持等面向。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </details>

        <details id="obt-unit-2" className="group rounded-2xl border border-stone-200 bg-white overflow-hidden" open>
          <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start gap-3">
            <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 shrink-0">
              <History size={18} />
            </span>
            <div className="min-w-0">
              <div className="font-extrabold text-stone-900">第二單元：東方美人茶（Oriental Beauty Tea, OBT）概論</div>
              <div className="mt-1 text-sm text-stone-600">名稱由來與別名、歷史定位、特色</div>
            </div>
          </summary>
          <div className="px-6 pb-6">
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">一、名稱由來與別名</div>
                <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                  東方美人茶擁有多個名稱，多數是為了行銷與增加農民收入而取。
                </div>
                <ol className="mt-3 list-decimal pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <span className="font-bold">最常聽到的名稱：</span>
                    <span className="font-bold">椪風茶</span>（或稱膨風茶）。
                    <div className="mt-2 rounded-xl border border-stone-200 bg-stone-50 p-3">
                      <div className="text-xs font-extrabold text-stone-600 tracking-wide">傳說</div>
                      <div className="mt-1">
                        客家人因茶園被蟲咬後仍拿來做茶，沒想到外銷價格比當時鎮長一個月收入（200 元）高出十倍，當地人難以置信，故稱其為「椪風」（吹牛）。
                      </div>
                    </div>
                  </li>
                  <li>
                    <span className="font-bold">學名：</span>
                    <span className="font-bold">白毫烏龍茶</span>。
                  </li>
                  <li>
                    <span className="font-bold">行銷名稱：</span>
                    <span className="font-bold">東方美人茶</span>。
                    <div className="mt-2 rounded-xl border border-stone-200 bg-stone-50 p-3">
                      <div className="text-xs font-extrabold text-stone-600 tracking-wide">傳說</div>
                      <div className="mt-1">英國女王認為來自福爾摩沙（東方）的茶很美很好喝，故命名。</div>
                    </div>
                  </li>
                  <li>
                    <span className="font-bold">其他名稱：</span>香檳烏龍茶、冰風茶。
                  </li>
                </ol>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-stone-200 bg-white p-5">
                  <div className="font-extrabold text-stone-900">二、歷史定位</div>
                  <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                    <li>
                      <span className="font-bold">時間：</span>東方美人茶的歷史相對較早，比包種茶和高山茶都要早。可追溯至清朝時期，約在 1869 年或 1894 年左右。
                    </li>
                    <li>
                      <span className="font-bold">起源：</span>早期臺灣的茶葉主要來自大陸，但近百年來臺灣已走出自己的風格和特色。
                    </li>
                    <li>
                      <span className="font-bold">外銷：</span>臺灣茶最早外銷的動作是由德克（英國人）所做，雖然李春生被稱為「臺茶之父」。
                    </li>
                    <li>
                      <span className="font-bold">產業轉型：</span>臺灣在失去外銷價格優勢後，轉向內銷的高價精製茶路線。
                    </li>
                  </ol>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-5">
                  <div className="font-extrabold text-stone-900">三、東方美人茶的特色</div>
                  <ol className="mt-3 list-decimal pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
                    <li>
                      <span className="font-bold">價格：</span>在臺灣特色茶中，<span className="font-bold">東方美人茶的價格最高</span>。特等獎價格可達 60 萬到 70 萬。
                    </li>
                    <li>
                      <span className="font-bold">風味：</span>具有<span className="font-bold">特殊蜜香和果香</span>，口感<span className="font-bold">非常足透</span>，且滋味單純、有蜜糖味，入口生津復活性高。
                    </li>
                    <li>
                      <span className="font-bold">外觀與白毫：</span>具有「三色一花」的視覺效果。成品外觀需均勻，芽尖帶白，形狀像花朵。
                      <div className="mt-1">
                        <span className="font-bold">白毫越多越高級、越貴</span>。
                      </div>
                    </li>
                    <li>
                      <span className="font-bold">茶湯水色（潤）：</span>顏色變化大，有深有淺，分佈廣。可見類似清茶（高山茶）的顏色，也有接近紅茶的顏色。
                    </li>
                    <li>
                      <span className="font-bold">五色茶與三色茶之辨：</span>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <span className="font-bold">五色：</span>白、黃、綠、紅、赤。
                        </li>
                        <li>
                          <span className="font-bold">比賽標準：</span>綠色（發酵不完全）與黃色（表示出老葉）會被挑掉。因此，<span className="font-bold">三色茶較好</span>。
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </details>

        <details id="obt-unit-3" className="group rounded-2xl border border-stone-200 bg-white overflow-hidden" open>
          <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start gap-3">
            <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 shrink-0">
              <MapPin size={18} />
            </span>
            <div className="min-w-0">
              <div className="font-extrabold text-stone-900">第三單元：產地、環境與品種</div>
              <div className="mt-1 text-sm text-stone-600">主要產區、適宜環境、茶樹品種、小綠葉蟬與蜜香形成</div>
            </div>
          </summary>
          <div className="px-6 pb-6">
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">一、主要產區</div>
                <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                  東方美人茶的產區主要分布在臺灣西部臺山縣，多為客家人居住地區。
                </div>
                <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <span className="font-bold">新竹縣：</span>峨眉、北埔（最常被想到）。
                  </li>
                  <li>
                    <span className="font-bold">苗栗縣：</span>頭份、頭屋、銅鑼、少部分苗栗市。
                  </li>
                  <li>
                    <span className="font-bold">桃園：</span>龍潭（舉辦全國東方美人比賽）。
                  </li>
                  <li>
                    <span className="font-bold">新北市：</span>石門。
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">二、適宜環境</div>
                <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <span className="font-bold">地點：</span>最適合種植的地區位於臺山線上，從北埔到頭份這一段。
                  </li>
                  <li>
                    <span className="font-bold">條件：</span>溫濕度高、多霧、日夜溫差大。
                  </li>
                  <li>
                    <span className="font-bold">海拔：</span>約在 300 到 800 公尺。
                  </li>
                </ol>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
                    <Thermometer size={16} className="mx-auto text-rose-600" />
                    <div className="mt-2 text-xs font-extrabold text-stone-800">溫濕度</div>
                    <div className="mt-1 text-xs text-stone-600">高</div>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
                    <Wind size={16} className="mx-auto text-sky-700" />
                    <div className="mt-2 text-xs font-extrabold text-stone-800">多霧</div>
                    <div className="mt-1 text-xs text-stone-600">環境條件</div>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
                    <MapPin size={16} className="mx-auto text-stone-700" />
                    <div className="mt-2 text-xs font-extrabold text-stone-800">海拔</div>
                    <div className="mt-1 text-xs text-stone-600">300–800m</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">三、主要茶樹品種</div>
              <ol className="mt-3 list-decimal pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
                <li>
                  <span className="font-bold">當家品種：</span>
                  <span className="font-bold">青心大冇</span>（青心大胖、青心大某）。
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>特色：香氣、滋味、外觀都好。</li>
                    <li>壽命：因不斷嫩採，青心大冇的平均壽命只有八年左右。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">其他品種：</span>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>白露。</li>
                    <li>台茶 17 號：是早生種，白毫肥壯顯。適合機採，因其長得很齊。常與青心大冇進行拼配。</li>
                    <li>北部：另有使用青心柑仔和白毛品種。</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">四、小綠葉蟬與蜜香的形成</div>
              <ol className="mt-3 list-decimal pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
                <li>
                  <span className="font-bold">採摘時節：</span>通常是<span className="font-bold">夏茶</span>，端午節到 7 月 22 日左右製作的 OBT 品質最好。
                </li>
                <li>
                  <span className="font-bold">機制：</span>小綠葉蟬（先驅害蟲）刺吸茶樹嫩芽後，茶樹會分泌出特殊的化學物質（酵素）。
                </li>
                <li>
                  <span className="font-bold">目的：</span>這種化學物質是一種防衛機制，會吸引小綠葉蟬的天敵（白列豬）來吃掉它。
                </li>
                <li>
                  <span className="font-bold">成果：</span>這些化學物質轉化後就會形成東方美人茶特有的<span className="font-bold">蜜香</span>。
                  <div className="mt-2 text-stone-600">
                    <span className="font-bold">注意：</span>蜜香並非東方美人茶獨有，其他被小綠葉蟬刺吸的茶品（如蜜香紅茶、貴妃烏龍）也會有。
                  </div>
                </li>
                <li>
                  <span className="font-bold">農藥殘留：</span>雖然小綠葉蟬怕農藥，但無農藥殘留（ND值）不代表茶園在無農藥環境下種植。
                </li>
              </ol>
            </div>
          </div>
        </details>

        <details id="obt-unit-4" className="group rounded-2xl border border-stone-200 bg-white overflow-hidden" open>
          <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start gap-3">
            <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 shrink-0">
              <Leaf size={18} />
            </span>
            <div className="min-w-0">
              <div className="font-extrabold text-stone-900">第四單元：東方美人茶的製程（清茶類）</div>
              <div className="mt-1 text-sm text-stone-600">重萎凋、重發酵、重攪拌，且需要悶</div>
            </div>
          </summary>
          <div className="px-6 pb-6">
            <div className="mt-6 text-sm text-stone-700 leading-relaxed">
              東方美人茶屬於<span className="font-bold">清茶類</span>（烏龍茶），但因其重發酵的特性，在北部地區常被稱作紅茶。其製程的特色是
              <span className="font-bold">重萎凋、重發酵、重攪拌，且需要悶</span>。
            </div>
            <div className="mt-6">
              <DataTable title="製程步驟：說明與標準 × 特色與注意事項">
                <table className="min-w-full divide-y divide-stone-200">
                  <thead className="bg-stone-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">步驟</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">說明與標準</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">特色與注意事項</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">採摘標準</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        嫩採，<span className="font-bold">一心二葉</span>，非常嫩。
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-700">需細心呵護，美人難照顧。</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">日光萎凋</td>
                      <td className="px-6 py-4 text-sm text-stone-700">在夏天採摘後立即進行。</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        需加<span className="font-bold">兩層黑網</span>防曬，避免曬壞。
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">室內萎凋</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        進行<span className="font-bold">攪拌（浪青）</span>制。
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-700">—</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">攪拌</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        反覆進行 4 到 5 次。攪拌過程中要有「<span className="font-bold">彈乾水</span>」。
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        需透過攪拌破壞葉組織，才能產生蜜香與花香。重攪拌的時間很長。可用機器代替人工攪拌。
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">炒青</td>
                      <td className="px-6 py-4 text-sm text-stone-700">時間約 12 到 15 分鐘。</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        溫度較低，約 <span className="font-bold">100°C 到 220°C</span>。
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">炒後悶</td>
                      <td className="px-6 py-4 text-sm text-stone-700">也稱「回潤」。</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        嫩茶葉約 15 分鐘，老葉約 15 到 25 分鐘。此時茶葉會持續發酵。
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">揉捻</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        採用<span className="font-bold">包揉</span>。需反覆 2 到 3 次。
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        揉捻後需靜置（<span className="font-bold">縮靜</span>）約 30 分鐘，使其產生花朵形。
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">乾燥</td>
                      <td className="px-6 py-4 text-sm text-stone-700">—</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        <span className="font-bold">不能使用甲種乾燥機</span>，因白毫會陷進去。只能用履帶式或箱式乾燥機。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>
            </div>
          </div>
        </details>

        <details id="obt-unit-5" className="group rounded-2xl border border-stone-200 bg-white overflow-hidden" open>
          <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start gap-3">
            <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 shrink-0">
              <Award size={18} />
            </span>
            <div className="min-w-0">
              <div className="font-extrabold text-stone-900">第五單元：評鑑與創新應用</div>
              <div className="mt-1 text-sm text-stone-600">評審標準、比賽等級、沖泡、康普茶</div>
            </div>
          </summary>
          <div className="px-6 pb-6">
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">一、評審標準</div>
                <div className="mt-3 text-sm text-stone-700 leading-relaxed">評鑑會從外觀、水色、香氣、滋味四方面進行評比。</div>
                <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <span className="font-bold">外觀：</span>白毫越多越好，形狀均勻，似花朵形。
                  </li>
                  <li>
                    <span className="font-bold">水色：</span>顏色深淺變化廣，不渾濁，不焦或暗。
                  </li>
                  <li>
                    <span className="font-bold">香氣：</span>蜜香、果香、飄香，<span className="font-bold">不膩</span>（讓人想一口接一口）。
                  </li>
                  <li>
                    <span className="font-bold">滋味：</span>單純、有蜜糖味、入口生津復活性。
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">二、比賽與等級</div>
                <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                  <div className="font-bold">比賽種類：</div>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      <span className="font-bold">製茶比賽：</span>當場發茶青，從茶青開始製作到成品。
                    </li>
                    <li>
                      <span className="font-bold">優良茶比賽：</span>直接提交已做好的成品。
                    </li>
                  </ul>
                </div>
                <div className="mt-4 text-sm text-stone-700 leading-relaxed">
                  <div className="font-bold">獎項排序：</div>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>特等獎（只有一名，最稀有）。</li>
                    <li>頭等獎（頭一到頭十）。</li>
                    <li>二等獎。</li>
                    <li>三等獎。</li>
                    <li>三花、二花、一花。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">三、沖泡技巧</div>
                <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <span className="font-bold">水溫：</span>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        較嫩的茶葉：約 <span className="font-bold">80°C</span>。
                      </li>
                      <li>
                        較粗老葉：約可到 <span className="font-bold">90°C</span>。
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">茶量：</span>份量比高山茶少一點（例如 150cc 茶壺）。
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="flex items-center gap-2 font-extrabold text-stone-900">
                  <Beaker size={16} className="text-emerald-700" /> 四、創新應用：康普茶（Kombucha）
                </div>
                <div className="mt-3 text-sm text-stone-700 leading-relaxed">東方美人茶可以作為基底製作康普茶。</div>
                <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <span className="font-bold">康普茶的益處：</span>它不只是醋酸菌（與醋不同），還含有<span className="font-bold">乳酸菌、酵母菌</span>等多種益菌。除了抗氧化，還可以幫助消化。
                  </li>
                  <li>
                    <span className="font-bold">製作方法：</span>康普茶的製作需要<span className="font-bold">巨魔菌（或稱紅茶菌）</span>。
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>保留 20% 到 25% 的巨母。</li>
                      <li>加入 75% 到 80% 的茶湯（OBT、紅茶、綠茶或白茶皆可）。</li>
                      <li>茶湯放涼後，加入紅糖或二砂（例如 1000 cc 茶湯加 100 克糖）。</li>
                      <li>發酵一個禮拜即可。</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-6">
              <Callout title="【比喻】">
                如果將臺灣的茶葉比作一個家族，那麼東方美人茶就像是家族中
                <span className="font-bold">身披華服、珍貴嬌嫩的公主</span>。她需要特定的環境（客家山區）才能生長，被特定的小蟲（小綠葉蟬）輕吻後，
                才能產生她獨特的蜜糖氣質，並且在製作過程中，需要茶師傅以最溫和、細膩（防曬、低溫炒青、不能用甲種乾燥機）的方式來呵護，
                才能展現出她最頂級的風采與最高的價值。
              </Callout>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
