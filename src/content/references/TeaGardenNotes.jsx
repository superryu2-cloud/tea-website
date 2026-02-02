import React from 'react';
import { MapPin } from 'lucide-react';
import { DataTable, Section } from './ui';

export default function TeaGardenNotes() {
  return (
    <Section id="ref-8" title="8. 茶園管理：土壤與化學元素" icon={MapPin}>
      <div className="space-y-2">
        <p>
          <strong>茶園管理的重要性：</strong>茶園管理是茶葉從栽培到成品完成的過程中最重要的一環。若沒有良好的栽培，就沒有良好的茶菁，即使有再好的製茶技術，也很難成就一杯好茶。
        </p>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <div className="font-bold text-stone-900">土壤與生長環境要求</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>
            <strong>土壤類型：</strong>應是適當量的沙質壤土，而非粘質壤土。
            <div className="mt-2 text-stone-700">沙質壤土的好處：肥料能滲透適當、排水及透風性佳。</div>
          </li>
          <li>
            <strong>PH 值：</strong>土壤 PH 值必須為酸性，介於 PH 4.0 到 5.5 之間。
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="font-bold text-stone-900">茶樹所需養分（16 種必備營養）</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>茶園管理必須重視土壤內涵的有機質元素及養分。</li>
          <li>土壤採樣必須在茶菁採收後的第一次施肥前進行。</li>
          <li>16 種營養素分為四群，它們在植物吸收量上有多寡之分，但重要性是相同的，缺乏任何一種都會降低產量與品質。</li>
        </ul>
      </div>

      <DataTable title="16 種營養素（四群）">
        <table className="min-w-full divide-y divide-stone-200">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">群別</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">元素</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">作用或說明</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-700">
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">第一大群</td>
              <td className="px-5 py-4">碳、氫、氧</td>
              <td className="px-5 py-4">來自大氣中的二氧化碳及水。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">第二大群（大量元素）</td>
              <td className="px-5 py-4">氮、磷、鉀</td>
              <td className="px-5 py-4">氮肥又稱葉肥。磷肥又稱花肥。鉀肥又稱果肥及莖幹肥。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">第三大群（次量元素）</td>
              <td className="px-5 py-4">鈣、鎂、硫</td>
              <td className="px-5 py-4"></td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">第四大群（微量元素）</td>
              <td className="px-5 py-4">鐵、錳、銅、鋅、鉬、氯、硼</td>
              <td className="px-5 py-4"></td>
            </tr>
          </tbody>
        </table>
      </DataTable>

      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="font-bold text-stone-900">施肥與農藥</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>
            <strong>施肥種類：</strong>
            <div className="mt-2 space-y-1">
              <div>化學肥料（化肥）：比喻成看西醫。</div>
              <div>有機肥料（雞肥/有機肥）：對土壤較無傷害，但肥效較緩慢。比喻成看中醫。</div>
            </div>
          </li>
          <li>
            <strong>農藥使用：</strong>依各地氣候、海拔、蟲害不同而有所調整。
            <div className="mt-2 space-y-1">
              <div>茶葉害蟲約有 120 種，如茶角盲椿象、茶捲蛾類、薊馬、粉蝨類及小綠葉蟬等。</div>
              <div>台灣茶葉農藥檢驗合格率非常高。</div>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
