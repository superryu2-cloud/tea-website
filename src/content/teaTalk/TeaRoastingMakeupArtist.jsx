import React from 'react';
import { BatteryCharging, Flame, Package, Sparkles, Timer, Wrench } from 'lucide-react';
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

export default function TeaRoastingMakeupArtist() {
  return (
    <div className="space-y-8">
      <div className="museum-frame museum-paper relative overflow-hidden">
        <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-rose-200/20 blur-3xl" />
        <div className="relative px-8 py-10 md:px-12 md:py-12">
          <div className="museum-label">
            <Sparkles size={14} className="opacity-80" />
            CHAPTER 04 · ROASTING
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">茶葉化妝師－烘焙</h2>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 leading-relaxed">
            烘焙是台灣特色茶的「第二門絕活」：它不只去水、去雜，更能透過梅納反應塑造焙火香與韻味。重點是「看茶焙茶」，用溫度與時間做出風格。
          </p>
        </div>
      </div>

      <SectionCard title="快速記憶（先抓到主線）" icon={BatteryCharging}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">WHY</div>
            <div className="mt-2 font-extrabold text-stone-900">烘焙像「化妝師」</div>
            <div className="mt-2 text-stone-600 leading-relaxed">
              毛茶外觀雜、梗老葉纖維多；烘焙＋精製能修飾外觀、去除雜味，讓品質更完整。
            </div>
          </div>
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">GOAL</div>
            <div className="mt-2 font-extrabold text-stone-900">三大目的</div>
            <div className="mt-2 text-stone-600 leading-relaxed">去水（3%～5%）／去青去雜／風味轉化（梅納反應）。[1][3][4]</div>
          </div>
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">RULE</div>
            <div className="mt-2 font-extrabold text-stone-900">基本原則</div>
            <div className="mt-2 text-stone-600 leading-relaxed">
              「發酵在先，烘焙在後」：烘焙不能把劣質茶變好茶，但能把好茶做出風格並穩定儲藏。
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="一、烘焙的角色與目的：為何稱為「化妝師」？" icon={Wrench}>
        <div className="space-y-5 text-stone-700 leading-relaxed">
          <p>
            在台灣特色茶（特別是青茶類）的製程中，烘焙的重要性僅次於發酵。毛茶往往外觀較雜，經烘焙與精製（如撿梗）能修飾色澤與雜味，讓茶更「乾淨、完整、耐放」。
          </p>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-roast-1-1">三大目的</SubTitle>
            <Bullets>
              <Bullet>
                <strong>1) 降低含水量，延長儲藏壽命：</strong>把含水量降到 3%～5% 的安全範圍。[1][2][3]
                <div className="mt-2 text-sm text-stone-700">
                  - 約 3%：水分在細胞表面形成「單分子層」，有保護作用。
                  <br />- 約 6%：水分開始成為「溶劑」，引發化學變化，品質快速劣變。
                  <br />- 約 12%：容易發霉。
                </div>
              </Bullet>
              <Bullet>
                <strong>2) 去除雜味與改善品質：</strong>去青、去雜，使茶湯更乾淨純淨。[1][3]
              </Bullet>
              <Bullet>
                <strong>3) 轉化風味、形成韻味：</strong>溫度與時間增加會引發梅納反應（Maillard reaction），改變香氣與滋味，是凍頂、鐵觀音等「韻味」的關鍵。[1][4]
              </Bullet>
            </Bullets>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="二、烘焙過程中的科學變化" icon={Flame}>
        <div className="space-y-5">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-roast-2-1">1) 咖啡因減少（昇華）</SubTitle>
            <div className="mt-2 text-stone-700 leading-relaxed">
              咖啡因在高溫下可能發生昇華（固體直接轉為氣體）而逸散，烘焙後咖啡因含量可下降。[4][5][6]
            </div>
            <div className="mt-3 text-sm text-stone-600">補充：嫩葉多於老葉、夏茶多於春茶、大葉種多於小葉種。[4][5][6]</div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-roast-2-2">2) 澀味降低（後氧化）</SubTitle>
            <div className="mt-2 text-stone-700 leading-relaxed">
              兒茶素在烘焙過程中會產生後氧化作用，苦澀感下降。烘焙茶常更甘甜醇厚，也較不刺激腸胃。[5][6]
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-roast-2-3">3) 香氣與滋味轉化（梅納反應）</SubTitle>
            <div className="mt-2 text-stone-700 leading-relaxed">
              氨基酸與還原糖參與梅納反應後含量會降低，轉而生成焙火相關的風味物質，是「焙火香」與「韻味」形成的核心機制。[5][7]
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-roast-2-4">4) 酸味形成（沒食子酸釋放）</SubTitle>
            <div className="mt-2 text-stone-700 leading-relaxed">
              重焙茶偶見微酸（如果酸感），可與酯型兒茶素在高溫下斷裂釋放沒食子酸有關；適量沒食子酸亦被視為保健相關物質來源之一。[5][7][8]
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="三、各類特色茶的烘焙設定（看茶焙茶）" icon={Timer}>
        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-stone-50 text-stone-700">
              <tr className="text-left">
                <th className="px-5 py-3 font-extrabold">類型</th>
                <th className="px-5 py-3 font-extrabold">目標</th>
                <th className="px-5 py-3 font-extrabold">溫度</th>
                <th className="px-5 py-3 font-extrabold">時間/階段</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr>
                <td className="px-5 py-4 font-bold">清香型烏龍（高山/包種）</td>
                <td className="px-5 py-4">保留清香花香；去青去雜去水</td>
                <td className="px-5 py-4">不超過 100°C，常見 80～95°C（超過易傷香）</td>
                <td className="px-5 py-4">約 12～16 小時，常分兩段（如 8h + 休 2～3 天 + 8h）讓水分再分布。[4][9][10]</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold">焙火香型烏龍（凍頂）</td>
                <td className="px-5 py-4">改變色香味，形成「凍頂韻」</td>
                <td className="px-5 py-4">開高走高：90°C 起步逐步到約 120°C（引發梅納反應）</td>
                <td className="px-5 py-4">約 24～30 小時，常分三段＋每段間隔數天，逐步去雜味、養熟味到成韻。[9][11][12]</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold">重焙茶（鐵觀音）</td>
                <td className="px-5 py-4">強調「觀音韻」與微果酸感</td>
                <td className="px-5 py-4">多超過 100°C</td>
                <td className="px-5 py-4">約 40～48 小時，常分四段，靠高溫長時轉化火韻。[12][13]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-stone-600 leading-relaxed">
          註：時間與溫度是「策略」，實務仍要回到「看茶焙茶」（含水、條索、香氣狀態、球形緊實程度等）再微調。
        </div>
      </SectionCard>

      <SectionCard title="四、常見烘焙機具比較" icon={Package}>
        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-stone-50 text-stone-700">
              <tr className="text-left">
                <th className="px-5 py-3 font-extrabold">機具</th>
                <th className="px-5 py-3 font-extrabold">原理/熱源</th>
                <th className="px-5 py-3 font-extrabold">優點</th>
                <th className="px-5 py-3 font-extrabold">風險/限制</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr>
                <td className="px-5 py-4 font-bold">炭焙（傳統）</td>
                <td className="px-5 py-4">木炭燃燒的遠紅外線（穿透力強）</td>
                <td className="px-5 py-4">乾燥度佳、耐儲存、具炭香</td>
                <td className="px-5 py-4">技術門檻高，控火與覆灰不當易吸附煙味。[13]</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold">電焙籠（改良）</td>
                <td className="px-5 py-4">電熱加熱（仍具穿透力的熱輻射特性）</td>
                <td className="px-5 py-4">品質與儲藏性常優於箱型機</td>
                <td className="px-5 py-4">開放式加熱較耗能。[14]</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold">箱型焙茶機（主流）</td>
                <td className="px-5 py-4">熱風循環</td>
                <td className="px-5 py-4">操作方便、溫控精準、省時；市佔高</td>
                <td className="px-5 py-4">穿透力較差，球形茶易出現「表乾內濕」假象，儲藏穩定性可能略遜。[10][14]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="五、結語：烘焙與品質的關係" icon={Sparkles}>
        <Bullets>
          <Bullet>
            <strong>品質基礎：</strong>茶的本質由原料與製茶（特別是發酵）決定；烘焙是加分與定型，不是起死回生。
          </Bullet>
          <Bullet>
            <strong>儲藏救援：</strong>輕微吸濕/退香/陳味，可用烘焙去水與去雜味作修飾。
          </Bullet>
          <Bullet>
            <strong>多樣化風味：</strong>輕/中/重焙可做出清香、果香、焙火香等不同輪廓；搭配良好包裝與儲藏才能長久維持色香味。[15][16]
          </Bullet>
        </Bullets>
      </SectionCard>
    </div>
  );
}

