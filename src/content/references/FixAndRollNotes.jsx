import React from 'react';
import { Leaf } from 'lucide-react';
import { Section } from './ui';

export default function FixAndRollNotes() {
  return (
    <Section id="ref-5" title="5. 殺青與揉捻（初乾）" icon={Leaf}>
      <div className="space-y-3">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <div className="font-bold text-stone-900">殺青（炒青）</div>
          <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
            <li>時機：繼浪菁靜制後進行。茶菁從採摘到靜制，總共約經過 15 個小時，時間約在凌晨 0 點。</li>
            <li>目的：讓茶菁停止發酵。</li>
            <li>影響：殺青後，茶葉的色香味大致上已決定。隔天的揉球師傅主要處理茶葉外觀。</li>
            <li>傳統名稱：又稱「炒青」或「擦」。早期用炒鍋殺青，所以製茶人員常把炒菁機俗稱為炒鍋。</li>
            <li>工序：製茶師傅將近發好的茶菁，用兩個加力的茶菁量放入炒菁機內。</li>
            <li>
              殺青方式差異：
              <div className="mt-2 space-y-1">
                <div>幼芽（葉子較小）：高溫快轉，時間稍短，搭配入風及排風裝置快速排除水蒸氣。</div>
                <div>老茶（葉子較大，肥厚）：較低的溫度炒青。</div>
              </div>
            </li>
            <li>
              參數：
              <div className="mt-2 space-y-1">
                <div>炒菁機表溫約控制在 280 到 300 度。</div>
                <div>炒青時間約在 6 到 10 分鐘。</div>
                <div>正常轉速約一分鐘六轉。</div>
              </div>
            </li>
            <li>
              判斷標準：在炒菁機外聞味道是否「菁退」而轉為「清香味」。用手觸摸茶菁是否稍有刺痛感。口訣：「半炒熟不炒乾」。
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <div className="font-bold text-stone-900">揉捻（Gatula）</div>
          <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
            <li>時機：殺青完成後。</li>
            <li>台語俗稱：G（Gatula?）。</li>
            <li>目的：讓茶葉隨揉捻機運轉而逐漸捲曲緊縮。因壓力使茶汁擠出並黏於茶葉表面。</li>
            <li>效果：使沖泡茶葉時更容易釋出滋味。</li>
            <li>揉捻後狀態：茶葉形狀大致成捲曲的條索狀。</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <div className="font-bold text-stone-900">初乾（第一次乾燥）</div>
          <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
            <li>將揉捻後的茶葉放入甲種乾燥機進行初乾。</li>
            <li>目的：讓茶葉水分含量降至 15% 至 20% 左右。</li>
            <li>初乾後的茶葉會並堆在一起靜回潤，等待隔日揉球師傅進行團柔整形。</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
