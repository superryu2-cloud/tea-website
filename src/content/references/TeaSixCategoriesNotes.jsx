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

      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/60 to-amber-50/60 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-extrabold tracking-[0.22em] text-emerald-700 uppercase">SIX TEA TYPES</div>
            <h3 className="mt-2 text-2xl md:text-3xl font-black text-stone-900">一片茶葉，因工序成為六種性格</h3>
          </div>
          <p className="max-w-xl text-[16px] leading-relaxed text-stone-600">
            整理自祥興茶行〈六大茶類的介紹〉：六大茶類不是依產地或品種分類，而是依製茶過程中氧化、悶黃、後發酵等工序差異來判斷。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ['綠茶', '不發酵', '殺青保鮮，豆香、栗香、清爽鮮活。'],
            ['白茶', '微發酵', '萎凋與乾燥為主，花蜜甜、柔和耐藏。'],
            ['黃茶', '輕發酵', '殺青後悶黃，少青澀，多溫潤甜香。'],
            ['青茶／烏龍', '部分發酵', '香氣跨度最大，從清花香到熟果焙火香。'],
            ['紅茶', '全發酵', '紅湯紅葉，果香、麥芽甜與醇厚感。'],
            ['黑茶', '後發酵', '微生物與時間參與，陳香、醇厚、耐存放。']
          ].map(([name, degree, desc]) => (
            <div key={name} className="rounded-2xl border border-stone-200 bg-white/85 p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <strong className="text-lg text-stone-900">{name}</strong>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-800 border border-emerald-100">{degree}</span>
              </div>
              <p className="mt-3 text-[16px] leading-relaxed text-stone-700">{desc}</p>
            </div>
          ))}
        </div>
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
              <td className="px-5 py-4">輕發酵茶（悶黃）</td>
              <td className="px-5 py-4">採摘後殺青，再經「悶黃」使滋味轉為溫潤，後續揉捻、乾燥。</td>
              <td className="px-5 py-4">中國湖南君山銀針、蒙頂黃芽。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">白茶</td>
              <td className="px-5 py-4">微發酵茶</td>
              <td className="px-5 py-4">以萎凋與乾燥為主，通常不炒不揉或少揉，保留自然甜柔感。</td>
              <td className="px-5 py-4">中國福建白毫銀針、白牡丹、貢眉、壽眉。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">青茶（烏龍茶）</td>
              <td className="px-5 py-4">部分發酵茶（約 15% 到 85%，依茶款差異很大）</td>
              <td className="px-5 py-4">採摘後經室外萎凋、室內萎凋、攪拌、殺青、揉捻、團柔、乾燥。</td>
              <td className="px-5 py-4">
                台灣的高山烏龍、中國福建烏龍。東方美人茶是發酵度約 70% 的青茶。（再三強調：東方美人茶是青茶，不是紅茶）。
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
        如果使用青心烏龍品種在阿里山高海拔的茶園，且用青茶的製作工序，這款茶稱為「阿里山高山烏龍青茶」。
      </Callout>
    </Section>
  );
}
