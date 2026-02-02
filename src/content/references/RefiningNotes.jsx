import React from 'react';
import { ScrollText } from 'lucide-react';
import { DataTable, Section } from './ui';

export default function RefiningNotes() {
  return (
    <Section id="ref-7" title="7. 精製：回潤回火與包裝" icon={ScrollText}>
      <div className="space-y-2">
        <p>
          <strong>精製的目的與時機：</strong>團柔與乾燥後，茶葉的外觀及色香味已基本完成。精製是購入茶葉的茶商所做的最後一道工序。
        </p>
        <p>毛茶運送後，一般需經過 3 到 15 天甚至更久，等待毛茶回潤或回火。</p>
        <p>
          <strong>精製效果：</strong>雖然精製過後的茶重量會稍微減少，但能讓客戶買回的茶在真空狀態下存放時間更長久，滋味也比較不會變差。
        </p>
      </div>

      <DataTable title="處理回潤與回火：狀況 × 原因 × 方式">
        <table className="min-w-full divide-y divide-stone-200">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">狀況</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">原因/俗稱</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">處理方式</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-700">
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">回潤</td>
              <td className="px-5 py-4">
                成品水分過多（俗稱「G」或「菁味」）。茶乾中心微小水分隨時間往外推移（水位潛勢）。
              </td>
              <td className="px-5 py-4">
                將毛茶放入電熱機或黑龍。調整溫度、時間、出風口、入風口。隨時取樣試喝，若達到「菁水順也」即可關閉電源冷卻包裝。
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">回火</td>
              <td className="px-5 py-4">茶場乾燥過度，毛茶表面有火味。</td>
              <td className="px-5 py-4">需等待一段時間，讓外表火味慢慢消退後才能包裝。</td>
            </tr>
          </tbody>
        </table>
      </DataTable>

      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="font-bold text-stone-900">人工篩選與包裝</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>篩選工序：毛茶在進入電熱機乾燥前，需要人工檢枝。</li>
          <li>時間：挑一包 30 斤的茶，需要 30 分鐘到一個半小時左右。</li>
          <li>挑出物：雜草、茶花、茶子、竹葉、老葉、茶汁。</li>
          <li>茶枝利用：用篩網篩下來的茶枝，如果處理得宜並烘焙，可製成優良好喝的凍頂風味烏龍茶包。</li>
          <li>
            包裝趨勢：過去有半斤及一斤包裝。現在因講究便利，幾乎都是四兩（150 克）及二兩（75 克）包裝，甚至有一兩或一泡包。
          </li>
        </ul>
      </div>
    </Section>
  );
}
