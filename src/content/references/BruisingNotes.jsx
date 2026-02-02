import React from 'react';
import { Leaf } from 'lucide-react';
import { Section } from './ui';

export default function BruisingNotes() {
  return (
    <Section id="ref-4" title="4. 浪菁：時機、工序與堆發酵" icon={Leaf}>
      <div className="space-y-2">
        <p>
          <strong>浪菁的時機與作用：</strong>時機是在約 12 小時的室外及室內萎凋之後。此時茶菁水分已消耗約 50%。
        </p>
        <p>
          <strong>浪菁目的（動刀）：</strong>逼出水、破壞液脈、使水分再重新分配。提高酵素的活性，利於靜制的堆發酵。「動刀」即是讓茶菁內剩餘的少數水分與多元酚氧化酵素產生化學變化，進而產生茶葉的色香味。
        </p>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <div className="font-bold text-stone-900">浪菁的工序</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>投料量：拿取適當的茶菁量（約浪菁機空間的 1/5）進入浪菁機攪拌。</li>
          <li>轉速與時間：轉速約一分鐘轉一圈。每次浪菁時間共約幾分鐘。</li>
          <li>劇烈攪拌：加速茶菁的氧化聚合作用。</li>
          <li>氣味判斷：製茶師傅會靠鼻子聞味道的轉變，從「菁鼻」轉換成「清香味」，再轉成「清甜味」。達到清甜味即可取出茶菁。</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="font-bold text-stone-900">堆厚靜制（堆發酵）</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>茶菁取出後稱重，均攤在「花館」（國語稱「加力」）上。</li>
          <li>厚度：攤在加力上的厚度會比萎凋時更厚。厚度越厚，產生熱能越高，因此堆後的靜制堆發酵會比攤薄的茶菁發酵更為劇烈。</li>
          <li>環境控制：靜制時，室內溫度必須控制在 20 度，濕度大約在 70% 至 75% 左右。</li>
          <li>氣味判斷：師傅依經驗聞味道從「菜菁」轉為「清甜」。</li>
          <li>時間：此靜制過程大約為三小時。</li>
          <li>味道轉變後，茶菁進入下一重要製程：殺青。</li>
          <li>發酵持續性：茶菁從採摘下來直到靜制，都一直在發酵。</li>
        </ul>
      </div>
    </Section>
  );
}
