import React from 'react';
import { MapPin } from 'lucide-react';
import { DataTable, Section } from './ui';

export default function TeaPickingNotes() {
  return (
    <Section id="ref-2" title="2. 茶葉採摘：方式與入廠時段" icon={MapPin}>
      <div className="space-y-2">
        <p>
          <strong>台灣青茶製程的複雜性：</strong>青茶類是六大茶類中製作工序最繁瑣的。製程步驟包括：採摘、萎凋、室內萎凋、攪拌、浪菁、殺青、揉捻、團柔、乾燥。製成一款台灣獨特的高山好茶，需要經過兩天兩夜的時間。
        </p>
        <p>
          <strong>茶葉採摘方式與優劣：</strong>茶葉採摘大致分為機械採摘和手工採摘。採茶人員進入茶園前，會有不同的儀式敬謝好兄弟及土地公。
        </p>
      </div>

      <DataTable title="採摘方式：特點、優勢與挑戰">
        <table className="min-w-full divide-y divide-stone-200">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">方式</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">特點及優勢</th>
              <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">劣勢或挑戰</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-700">
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">機械採摘</td>
              <td className="px-5 py-4">採收速度快、產量大、節省人力成本。可於中午前送入茶廠製作。</td>
              <td className="px-5 py-4">採摘長度大小不一、葉面破損，製成後賣相較差。售價較低。</td>
            </tr>
            <tr>
              <td className="px-5 py-4 font-bold text-stone-900">手工採摘（手採）</td>
              <td className="px-5 py-4">需資深師傅長時間磨練，幾乎採一心三葉或四葉。需抽籤決定採摘位置以求公平。</td>
              <td className="px-5 py-4">採茶工有老齡化問題。採茶速度慢，新手如 Albert 兩小時採不到幾斤。</td>
            </tr>
          </tbody>
        </table>
      </DataTable>

      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <div className="font-bold text-stone-900">茶菁入廠時段與品質</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>
            製茶廠會將採摘下的茶菁趕緊送進茶廠進行室外日光萎凋。
          </li>
          <li>
            <strong>入廠時段（春茶採收量大時，一天約五至六次）：</strong>
            <div className="mt-2 space-y-1">
              <div>頭採/頭磅採：約早上 8 點左右。</div>
              <div>二採、午採、尾採（下午 1 點到 3 點左右）。</div>
              <div>微磅採/五磅採：最晚。</div>
            </div>
          </li>
          <li>
            <strong>品質影響：</strong>茶菁入廠時段會影響成品品質。
            <div className="mt-2 space-y-1">
              <div>最理想時段：午採或米歐採。</div>
              <div>較不理想時段：最早的頭採（含露水多，含水量高，走水不易）和最晚的微磅（接近傍晚，日光萎凋不足）。</div>
            </div>
          </li>
          <li>製茶師傅會將當日所有茶菁依工序做完後並堆，算成當天的整批茶。</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="font-bold text-stone-900">採茶工資</div>
        <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">
          <li>工資計算是根據採摘後茶菁的重量。</li>
          <li>以春天採摘海拔 1300 公尺的青烏龍為例，採一公斤茶菁工資約為 60 塊錢。</li>
          <li>神人級採茶工一天約可賺 8000 元台幣，一般速度約 2500 元。</li>
        </ul>
      </div>
    </Section>
  );
}
