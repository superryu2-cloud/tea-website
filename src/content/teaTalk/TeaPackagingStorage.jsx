import React from 'react';
import { Archive, Leaf, Lock, Snowflake, Sparkles, Sun, Thermometer, Wind } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

function Bullet({ children }) {
  return <li className="leading-relaxed">{children}</li>;
}

function Bullets({ children }) {
  return <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">{children}</ul>;
}

function SubTitle({ id, children }) {
  return (
    <h3 id={id} className="scroll-mt-28 text-lg md:text-xl font-extrabold text-stone-900">
      {children}
    </h3>
  );
}

function Badge({ icon: Icon, title, desc }) {
  return (
    <div className="museum-card p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-stone-200 bg-white text-stone-700">
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <div className="font-extrabold text-stone-900">{title}</div>
          <div className="mt-1 text-stone-600 leading-relaxed">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default function TeaPackagingStorage() {
  return (
    <div className="space-y-8">
      <div className="museum-frame museum-paper relative overflow-hidden">
        <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-200/25 blur-3xl" />
        <div className="relative px-8 py-10 md:px-12 md:py-12">
          <div className="museum-label">
            <Archive size={14} className="opacity-80" />
            CHAPTER 06 · STORAGE
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">茶葉包裝與儲藏</h2>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 leading-relaxed">
            茶葉買回家後，往往不會立即喝完；「包裝」與「儲藏」決定了香氣能留多久、茶湯能亮多久，以及是否會走向油耗味與陳味。
            這一章把要點整理成可直接套用的家庭保存策略：五忌、六招、壽命排序，以及老茶與新茶的差別思維。
          </p>
        </div>
      </div>

      <SectionCard title="快速記憶：五忌、六招、兩種發酵" icon={Sparkles}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Badge
            icon={Leaf}
            title="酵素性 vs 非酵素性"
            desc="製茶期的「酵素性氧化」與儲藏期的「後氧化作用」是兩件事；前者塑造風味，後者決定風味能留多久。"
          />
          <Badge icon={Sun} title="五忌" desc="忌水分、忌氧氣、忌光、忌高溫、忌吸味。越同時踩中，劣變越快。" />
          <Badge icon={Snowflake} title="六招" desc="乾（3–5%）＋避光＋低溫＋脫氧＋密封防味＋趁鮮喝完。" />
        </div>
      </SectionCard>

      <SectionCard title="一、儲藏期的劣變：五個層次" icon={Wind}>
        <div className="text-stone-700 leading-relaxed">茶葉劣變通常是緩慢、漸進的，常見可用五個層次描述：</div>
        <Bullets>
          <Bullet>香味消退：原本清揚或花香變淡。</Bullet>
          <Bullet>活性降低：茶湯變平、少了「鮮活」感。</Bullet>
          <Bullet>水色暗濁：失去明亮度，偏暗褐或混濁。</Bullet>
          <Bullet>外觀失光：乾茶光澤感下降。</Bullet>
          <Bullet>產生異味：陳味、油耗味，甚至吸附外來雜味。</Bullet>
        </Bullets>
      </SectionCard>

      <SectionCard title="二、五忌：劣變的主要元兇與成分變化" icon={Thermometer}>
        <div className="rounded-2xl border border-stone-200 bg-white overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-stone-50 text-stone-700">
              <tr className="text-left">
                <th className="px-5 py-3 font-extrabold">五忌</th>
                <th className="px-5 py-3 font-extrabold">對應風險</th>
                <th className="px-5 py-3 font-extrabold">常見成分變化</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr>
                <td className="px-5 py-4 font-bold">高含水量</td>
                <td className="px-5 py-4">6% 以上水分更像「溶劑」，會加速反應；12% 易發霉。</td>
                <td className="px-5 py-4">各類氧化反應加速；香氣更快散失。</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold">氧氣</td>
                <td className="px-5 py-4">後氧化作用加速，水色暗、活性掉。</td>
                <td className="px-5 py-4">兒茶素氧化；部分胺基酸、維生素 C 受影響。</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold">光照</td>
                <td className="px-5 py-4">外觀褐變、產生日光臭，整體快速劣變。</td>
                <td className="px-5 py-4">葉綠素降解；兒茶素等活性分子更易氧化。</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold">高溫</td>
                <td className="px-5 py-4">溫度每上升 10°C，後氧化速度可能快數倍。</td>
                <td className="px-5 py-4">脂質與類胡蘿蔔素氧化 → 陳味/油耗味風險上升。</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold">吸收異味</td>
                <td className="px-5 py-4">香氣被「蓋掉」，回不去。</td>
                <td className="px-5 py-4">揮發性香氣分子容易被外來氣味取代/吸附。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="三、六大保鮮條件：家庭可直接照做" icon={Lock}>
        <div className="space-y-5">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-store-3-1">1) 控制含水量（3–5%）</SubTitle>
            <div className="mt-2 text-stone-700 leading-relaxed">
              家用判斷：摸茶梗，若「一折即斷」通常代表乾燥度足夠；若軟韌、折不斷，建議優先改善保存條件。
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <SubTitle id="tt-store-3-2">2) 避光</SubTitle>
              <div className="mt-2 text-stone-700 leading-relaxed">
                以鋁箔積層袋等阻光材質為佳；透明罐再漂亮，也應「外加遮光」或改用不透光容器。
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <SubTitle id="tt-store-3-3">3) 低溫</SubTitle>
              <div className="mt-2 text-stone-700 leading-relaxed">
                能冷藏就冷藏（約 5°C）。若室溫保存，建議放在 25°C 以下、遠離熱源與日照處。
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <SubTitle id="tt-store-3-4">4) 脫氧</SubTitle>
              <div className="mt-2 text-stone-700 leading-relaxed">
                真空、脫氧劑或充氮皆可；核心目標是降低包裝內的氧氣，減緩後氧化。
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <SubTitle id="tt-store-3-5">5) 密封防異味</SubTitle>
              <div className="mt-2 text-stone-700 leading-relaxed">
                茶葉非常會吸味：香水、樟腦、油煙、香料、餅乾都要隔開；同冰箱更要分層密封。
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-store-3-6">6) 趁鮮喝完</SubTitle>
            <div className="mt-2 text-stone-700 leading-relaxed">
              任何包裝都只能「延緩」劣變，不能停止。打開後建議小包分裝，縮短開封時間與接觸空氣的機會。
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="四、不同茶類：儲藏壽命（由短到長）" icon={Snowflake}>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 leading-relaxed">
          一般而言，發酵程度越高、可再氧化的活性物質越少，儲藏越穩定。常見排序如下：
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              ['綠茶（不發酵）', '最短：兒茶素活性高，最怕高溫/光/氧。'],
              ['文山包種（輕發酵）', '香氣以揮發性為主，最怕「散香」與吸味。'],
              ['高山茶（中發酵）', '相對穩定，但仍要避光/低溫/防味。'],
              ['凍頂/鐵觀音（中發酵＋烘焙）', '含水量較低，且部分後氧化已在焙火中發生，壽命較長。'],
              ['紅茶（全發酵）', '最長：可再氧化成分較少，品質相對穩定。'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <div className="font-bold text-stone-900">{k}</div>
                <div className="mt-1 text-stone-700">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard title="五、老茶不是「保鮮」：而是「轉化」" icon={Sun}>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            老茶的核心不是把新鮮凍住，而是讓風味在可控條件下慢慢轉化。差異點：新茶要盡量隔絕氧氣；老茶需要「適當的氧氣」，
            但含水量仍不可超過 6%。
          </p>
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-store-5-1">老茶轉化的六個階段（比喻）</SubTitle>
            <Bullets>
              <Bullet>嬰兒期：剛做完，韻味不足。</Bullet>
              <Bullet>羞澀期：開始變化，但仍不完整。</Bullet>
              <Bullet>登大人：韻味初現。</Bullet>
              <Bullet>窈窕淑女：梅香感逐漸出現。</Bullet>
              <Bullet>中年男人／貴婦：韻味穩健、風格厚實。</Bullet>
              <Bullet>阿嬤級：人蔘香、陳香十足（最高層次）。</Bullet>
            </Bullets>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-store-5-2">去蕪轉韻（輕烘焙）</SubTitle>
            <div className="mt-2 text-stone-700 leading-relaxed">
              若儲藏過程出現退香或雜味，常用「輕烘焙」修飾：去除多餘水分與雜味，保留好的韻味繼續轉化。
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="六、選購指南：形、色、香、味" icon={Lock}>
        <div className="space-y-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-store-6-1">通用原則</SubTitle>
            <Bullets>
              <Bullet>形：勻稱、整齊；不要太碎、不要太雜。</Bullet>
              <Bullet>色：鮮活有光澤（忌灰暗死色）。</Bullet>
              <Bullet>湯：水色要明亮清澈（忌暗濁）。</Bullet>
              <Bullet>香：追求鮮爽與乾淨，避免陳味、油耗味、悶味、吸味。</Bullet>
            </Bullets>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-stone-50 text-stone-700">
                <tr className="text-left">
                  <th className="px-5 py-3 font-extrabold">茶類</th>
                  <th className="px-5 py-3 font-extrabold">看什麼</th>
                  <th className="px-5 py-3 font-extrabold">喝什麼</th>
                  <th className="px-5 py-3 font-extrabold">保存提醒</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-800">
                <tr>
                  <td className="px-5 py-4 font-bold">綠茶（碧螺春等）</td>
                  <td className="px-5 py-4">嫩採、白毫與鮮綠感。</td>
                  <td className="px-5 py-4">鮮爽、蔬果香；苦澀不可突兀。</td>
                  <td className="px-5 py-4">最怕光/熱/氧；建議冷藏、阻光、脫氧。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">文山包種（條形）</td>
                  <td className="px-5 py-4">條索緊結勻稱、梗不粗不多。</td>
                  <td className="px-5 py-4">清揚花香、甘滑鮮活。</td>
                  <td className="px-5 py-4">香氣揮發快，開封後盡快喝完；防吸味。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">高山茶（球形）</td>
                  <td className="px-5 py-4">顆粒均勻、墨綠帶光澤。</td>
                  <td className="px-5 py-4">香氣優雅、滋味厚實。</td>
                  <td className="px-5 py-4">仍建議低溫、阻光、密封。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">凍頂／鐵觀音（焙火球形）</td>
                  <td className="px-5 py-4">褐綠/深綠但要有油光。</td>
                  <td className="px-5 py-4">焙火香與韻味；甘、甜、滑、順。</td>
                  <td className="px-5 py-4">相對耐放，但仍需防潮與避光。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">東方美人（花朵形）</td>
                  <td className="px-5 py-4">白、黃、紅、褐等色分明，白毫可見。</td>
                  <td className="px-5 py-4">蜂蜜香＋熟果香，水色橙黃至橙紅。</td>
                  <td className="px-5 py-4">香甜型易吸味，務必密封分裝。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">紅茶（條形）</td>
                  <td className="px-5 py-4">條索勻稱、色澤明亮。</td>
                  <td className="px-5 py-4">濃郁、收斂性與甜醇平衡。</td>
                  <td className="px-5 py-4">相對穩定，但同樣怕吸味與潮濕。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="結語" icon={Sparkles}>
        <div className="text-stone-700 leading-relaxed">
          保存不是「越密越好」而已：乾燥與阻光是地基、低溫與脫氧是加速器、密封防味是護城河。先把五忌避開，再把六招做滿，
          多數茶就能在家穩穩保持香氣與水色。
        </div>
      </SectionCard>
    </div>
  );
}

