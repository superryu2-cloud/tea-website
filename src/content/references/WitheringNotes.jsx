import React from 'react';
import { Leaf } from 'lucide-react';
import { Section } from './ui';

export default function WitheringNotes() {
  return (
    <Section id="ref-3" title="3. 萎凋（走水／消水）：目的、流程與科學原理" icon={Leaf}>
      <p>
        <strong>萎凋（走水／消水）的目的與概念：</strong>萎凋是台灣部分發酵茶（如青茶）製程中極為重要的兩個步驟：室外萎凋與室內萎凋。萎凋的目的在於讓茶菁內的水分重新分佈及消散（走水、消水、小醉），進而產生發酵。茶葉從採摘下來就開始發酵了。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5">
          <div className="font-extrabold text-stone-900">室外萎凋（日光萎凋）</div>
          <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
            <li>製茶人員需將茶菁均勻攤薄在室外曬菁場。</li>
            <li>
              <strong>狀態變化：</strong>
              <div className="mt-2 space-y-1">
                <div>剛進來的茶菁：含水量高，富有彈性，有菁味。</div>
                <div>萎凋後：茶菁因失水做縮變軟而無彈性。味道從「菁」轉成「香味」。</div>
              </div>
            </li>
            <li>師傅會將茶菁集中，再重新攤薄，使水分重新分佈，利於下一次行水及發酵。</li>
            <li>時間：靜置曬菁場總時間大約 30 分鐘後，送入有空調的室內成架。</li>
          </ul>
        </div>

        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5">
          <div className="font-extrabold text-stone-900">室內萎凋（靜制）</div>
          <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
            <li>茶菁經攪拌，水分重新分佈，產生發酵。</li>
            <li>
              <strong>判斷標準：</strong>製茶人員透過肉眼觀察茶菁質地是否變軟、葉緣是否成波浪狀、茶梗是否有皺紋、氣味是否由菁轉成清香味。
            </li>
            <li>
              <strong>靜置時間（3-3-2.5 流程）：</strong>
              <div className="mt-2 space-y-1">
                <div>第一次靜置：約 3 個小時（味道由菁轉成清香味）。</div>
                <div>第一次攪拌/攤菁後靜置：約 3 個小時。</div>
                <div>第二次攪拌/攤菁後靜置：約 2.5 個小時。</div>
                <div>室內萎凋總時間約 8.5 個小時。</div>
              </div>
            </li>
            <li>之後茶菁進入下一製程：浪菁（台語俗稱「短狼」）。</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="font-bold text-stone-900">走水（行水）的科學原理</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>
            <strong>水分潛勢：</strong>指水從某個地區因滲透或重力的因素移動到另一個區域。
          </li>
          <li>
            <strong>走水方向：</strong>攪拌前，茶梗的水分潛勢較高，葉部的水分潛勢較低。攪拌後，水從高的茶梗往低的葉部移動，此過程稱為「走水」。
          </li>
          <li>室內萎凋溫度較低，葉片水分蒸發較慢，因此靜置時間比室外長。</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="font-bold text-stone-900">發酵的化學變化與水分散失部位</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>
            <strong>發酵變化：</strong>茶菁內細胞因水分消散，導致液泡膜透性消失。原本被包膜分隔的成分進入細胞內，與多元酚氧化酵素作用，進行複雜的化學變化，形成茶葉的香氣、滋味與水色。
          </li>
          <li>
            <strong>水分散失部位：</strong>
            <div className="mt-2 space-y-1">
              <div>主要為葉面下表皮（約佔 6%）。</div>
              <div>葉緣（13%）。</div>
              <div>約 0.99% 是由採摘口散失的。</div>
              <div>上表皮因有蠟，幾乎不會由此蒸散。</div>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
