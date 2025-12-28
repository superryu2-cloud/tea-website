import React from 'react';
import { ScrollText } from 'lucide-react';
import { Callout, DataTable, Section } from './ui';

export default function OolongProcessOverviewNotes() {
  return (
    <Section id="ref-9" title="9. 台灣青茶（烏龍茶）製程總覽與對照" icon={ScrollText}>
      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <div className="font-bold text-stone-900">台灣青茶製程總覽</div>
        <ol className="mt-3 space-y-1 text-sm text-stone-700 list-decimal pl-5">
          <li>茶園管理</li>
          <li>採摘</li>
          <li>日光萎凋（室外萎凋）</li>
          <li>室內萎凋</li>
          <li>浪菁</li>
          <li>殺青</li>
          <li>揉捻</li>
          <li>團揉</li>
          <li>乾燥</li>
          <li>精製</li>
        </ol>
      </div>

      <DataTable title="製程步驟對照（目的 × 參數/判斷）">
        <table className="min-w-full divide-y divide-stone-200">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">步驟</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">關鍵目的</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">參數/時程/判斷標準</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-700">
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">茶園管理</td>
              <td className="px-5 py-4">良好栽培是好茶基礎。</td>
              <td className="px-5 py-4">土壤須為 pH 4.0 到 5.5 的微酸性沙質土壤。台灣農藥檢驗合格率高。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">採摘</td>
              <td className="px-5 py-4">盡速將茶菁送入茶場。</td>
              <td className="px-5 py-4">分為人工或機械採摘。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">日光萎凋</td>
              <td className="px-5 py-4">讓茶菁走水及發酵。</td>
              <td className="px-5 py-4">均勻攤薄，靜置攪拌重複 1-2 次。總共約 30 分鐘。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">室內萎凋</td>
              <td className="px-5 py-4">讓水分重新分配及產生發酵。</td>
              <td className="px-5 py-4">攤薄靜置，觀察葉片變軟、氣味由菁轉清香味。總共靜置三次，時長約 8.5 小時。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">浪菁</td>
              <td className="px-5 py-4">逼出水、破壞液脈、產生香味（動刀）。</td>
              <td className="px-5 py-4">浪菁機攪拌十幾分鐘。味道由菁轉清香味，再轉清甜味。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">靜置堆發酵</td>
              <td className="px-5 py-4">再次劇烈發酵。</td>
              <td className="px-5 py-4">攤薄於加力上靜置 3 小時。味道由菁轉為清甜味。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">殺青</td>
              <td className="px-5 py-4">停止發酵。決定茶葉色香味。</td>
              <td className="px-5 py-4">炒菁機溫度 280°C 到 300°C。時間約 6 到 10 分鐘。判斷：菁味消退轉清香味。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">揉捻（Gatula）</td>
              <td className="px-5 py-4">捲曲緊縮成條索狀，擠出茶汁黏附表面。</td>
              <td className="px-5 py-4">使沖泡時更容易釋出滋味。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">初乾</td>
              <td className="px-5 py-4">降低水分含量。</td>
              <td className="px-5 py-4">甲種乾燥機乾燥，水分降至 15% 到 20%。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">團揉整形</td>
              <td className="px-5 py-4">塑形為緊實球狀。</td>
              <td className="px-5 py-4">
                擠壓機擠壓成方塊狀、解塊（重複 5-6 次）。使用乾燥機去水（60°C-100°C，共 5-6 次，每次約 1.5 小時）。使用蓮花束包機和平揉整形機進行循環修飾（3-4 次以上）。
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">最終乾燥</td>
              <td className="px-5 py-4">穩定儲存。</td>
              <td className="px-5 py-4">溫度 95°C 到 110°C。重複 3 到 5 次。水分降至 5% 以下。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">精製</td>
              <td className="px-5 py-4">去除雜物，確保品質穩定。</td>
              <td className="px-5 py-4">
                毛茶（30 斤一包）經 3-15 天回潤回火。人工篩選（去除茶枝、雜草、老葉等）。烘焙去菁味。包裝成四兩或二兩。
              </td>
            </tr>
          </tbody>
        </table>
      </DataTable>

      <Callout title="總結比喻">
        茶葉的六大分類就像是廚師利用相同的食材（茶菁），藉由不同的烹飪方式（製程工序：殺青、萎凋、發酵等）和火候控制（溫度、時間），最終呈現出多樣化的菜餚（六大茶類）。
        而台灣高山青茶（烏龍茶）的製程，則像是一場需要精確時程控制的馬拉松，每個步驟如採摘、萎凋、浪菁、殺青、團揉，都環環相扣，需要製茶師傅的經驗與體力來確保水分（走水）和化學變化（發酵）的精準轉化，最終才能獲得外觀優美且滋味豐富的成品。
      </Callout>
    </Section>
  );
}
