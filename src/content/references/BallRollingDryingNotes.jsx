import React from 'react';
import { Leaf } from 'lucide-react';
import { Section } from './ui';

export default function BallRollingDryingNotes() {
  return (
    <Section id="ref-6" title="6. 團揉整形與最終乾燥" icon={Leaf}>
      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="font-bold text-stone-900">團柔整形</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-decimal pl-5">
          <li>時機：隔日早上約 7 點左右，將靜回潤超過兩小時的茶葉開始進行此工序。</li>
          <li>將茶葉放入茶布內。</li>
          <li>置入擠壓機內擠壓（壓機或導骨樣），擠壓成方形後，進行解塊。</li>
          <li>重複擠壓、解塊動作五到六次。水分會漸漸被擠壓出來。</li>
          <li>
            茶葉放入甲種乾燥機，以 60 度至 100 度的溫度去除多餘水分。師傅稱此為「得一變會」、「會折」跟「州」（調整消水及緊程度）。
          </li>
          <li>將茶葉置入揉茶方巾，外加「揉茶外褲」（俗稱 C 套）。</li>
          <li>放入蓮花束包機進行茶葉球形外觀的修飾。</li>
          <li>蓮花束包機整形後，放入平揉整形機進行加壓揉捻。</li>
          <li>加壓揉捻後，再進行解塊。</li>
        </ul>
        <div className="mt-4 rounded-xl bg-stone-50 border border-stone-200 p-4 text-sm text-stone-700 leading-relaxed">
          <p>
            <strong>循環：</strong>蓮花整形、平揉整形、解塊這三個工序會重複三到四次以上的循環。
          </p>
          <p className="mt-2">
            <strong>目的：</strong>讓茶葉的外觀更加緊緻與球狀。
          </p>
          <p className="mt-2">
            <strong>歷史變革：</strong>台灣約 2010 年從大陸福建安溪引進壓機。引進壓機後，幾乎所有茶場都改為擠壓式的製作方式，因為抵不過人力吃緊及工資的衝擊。
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <div className="font-bold text-stone-900">最終乾燥</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>時機：茶葉球形外觀修飾完成後。</li>
          <li>工序：將已成型或半球形的茶葉放入甲種乾燥機。</li>
          <li>參數：以大約 95 度至 110 度左右的溫度，重複乾燥三到五次。</li>
          <li>目標：直到茶葉的水分降至 5% 以下。</li>
          <li>
            後續處理：
            <div className="mt-2 space-y-1">
              <div>1. 將完成乾燥的茶乾攤薄在地面布上降溫，直到與室內溫度一樣。</div>
              <div>2. 依序放入紅購來進行篩選。</div>
            </div>
          </li>
          <li>成品：篩選後的茶乾並在一起，稱之為毛茶。</li>
          <li>包裝：毛茶經電子秤重，每 30 台斤裝成一包。經真空機抽真空，即可讓茶商載運販售。</li>
          <li>完成時間：約為晚上 7 點到 12 點之間。</li>
        </ul>
      </div>
    </Section>
  );
}
