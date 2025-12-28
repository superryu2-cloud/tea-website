import React from 'react';
import { Leaf } from 'lucide-react';
import { Callout, DataTable, Section } from './ui';

export default function TeaSixCategoriesNotes() {
  return (
    <Section id="ref-1" title="1. 茶葉六大分類原則與定義（含發酵程度對照）" icon={Leaf}>
      <div className="space-y-2">
        <p>
          <strong>分類依據：</strong>世界上公認的茶葉分類是依照採摘下來的茶菁，經由不同的製作工序而生產出來的。
        </p>
        <p>
          <strong>六大茶類：</strong>綠茶、黃茶、白茶、青茶、紅茶、黑茶。
        </p>
        <p>
          <strong>關鍵觀念：</strong>所有的茶菁（鮮葉）都可以製成這六大類茶。製茶人員會因每款茶的體質特性來製作成不同種類的茶。
        </p>
        <p>
          <strong>分類總結：</strong>六大茶類是依據其製成來分類的。
        </p>
      </div>

      <DataTable title="依發酵程度區分：名稱 × 工序 × 代表茶品">
        <table className="min-w-full divide-y divide-stone-200">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">分類名稱</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">發酵程度</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">製作工序（關鍵步驟）</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">代表茶品</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-700">
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">綠茶</td>
              <td className="px-5 py-4">不發酵茶</td>
              <td className="px-5 py-4">採摘後直接殺青、揉捻、乾燥。</td>
              <td className="px-5 py-4">日本的煎茶、中國的龍井。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">黃茶</td>
              <td className="px-5 py-4">不發酵茶</td>
              <td className="px-5 py-4">採摘後直接殺青，多了一道「悶」的工序，再揉捻後乾燥。</td>
              <td className="px-5 py-4">中國湖南的君山銀針、蒙頂黃。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">白茶</td>
              <td className="px-5 py-4">部分發酵茶</td>
              <td className="px-5 py-4">採摘後經室內萎凋發酵，然後直接乾燥。</td>
              <td className="px-5 py-4">中國福建的白丹、貢眉。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">青茶（烏龍茶）</td>
              <td className="px-5 py-4">部分發酵茶（約 10% 到 80%）</td>
              <td className="px-5 py-4">採摘後經室外萎凋、室內萎凋、攪拌、殺青、揉捻、團柔、乾燥。</td>
              <td className="px-5 py-4">
                台灣的高山烏龍、中國的福建古儀。東方美人茶是發酵度約 70% 的青茶。（再三強調：東方美人茶是青茶，不是紅茶）。
              </td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">紅茶</td>
              <td className="px-5 py-4">全發酵茶</td>
              <td className="px-5 py-4">採摘後經室內長時間萎凋發酵、長時間揉捻，再補足發酵。</td>
              <td className="px-5 py-4">台灣南投魚池的紅玉紅茶、印度的阿薩姆紅茶。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">黑茶</td>
              <td className="px-5 py-4">後發酵茶</td>
              <td className="px-5 py-4">採摘後直接殺青、揉、曬乾、蒸壓成品，完成品後再經一段時間進行發酵。</td>
              <td className="px-5 py-4">生的普洱茶（要放越久才越好喝）。</td>
            </tr>
          </tbody>
        </table>
      </DataTable>

      <Callout title="名稱範例">
        如果使用青烏龍品種在阿里山高海拔的茶園，且用青茶的製作工序，這款茶稱為「阿里山高山烏龍青茶」。
      </Callout>
    </Section>
  );
}
