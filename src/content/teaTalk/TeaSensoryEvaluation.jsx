import React from 'react';
import { Beaker, Eye, Flame, Sparkles, Timer } from 'lucide-react';
import SectionCard from '../../components/SectionCard';
import ClickableImage from '../../components/ClickableImage';

function Bullet({ children }) {
  return <li className="leading-relaxed">{children}</li>;
}

function Bullets({ children }) {
  return <ul className="mt-3 list-disc pl-5 space-y-2 text-[17px] text-stone-700">{children}</ul>;
}

function SubTitle({ id, children }) {
  return (
    <h3 id={id} className="scroll-mt-28 text-[19px] md:text-[22px] font-extrabold text-stone-900">
      {children}
    </h3>
  );
}

export default function TeaSensoryEvaluation() {
  return (
    <div className="space-y-8">
      <div className="museum-frame museum-paper relative overflow-hidden">
        <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-rose-200/20 blur-3xl" />
        <div className="relative px-8 py-10 md:px-12 md:py-12">
          <div className="museum-label">
            <Sparkles size={14} className="opacity-80" />
            CHAPTER 08 · SENSORY
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">茶葉色香味品質官能評鑑</h2>
          <p className="mt-4 max-w-3xl text-[17px] md:text-[19px] text-stone-700 leading-relaxed">
            官能評鑑不是「憑感覺」：它是一套可重複、可訓練、可比較的專業方法。從秤茶、注水、計時到觀水色、聞香氣、評滋味與觀葉底，
            每一步都有節奏與規範，目的在於把「色、香、味」轉成可溝通的品質語言。[1]
          </p>
        </div>
      </div>

      <SectionCard title="一、感官評鑑的科學性與應用" icon={Beaker}>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            感官評鑑是一門嚴謹學問：流程必須一致、節奏不可混亂，才能讓不同樣品之間具可比性。[1]
          </p>
          <div className="mt-6">
            <ClickableImage
              src="/images/tea-talk/ch08-sensory-setup.png"
              alt="標準感官評鑑環境"
              caption="標準感官評鑑環境：黑色檯面、標準審茶杯碗、均勻光源"
            />
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-sense-1-1">主要應用領域</SubTitle>
            <Bullets>
              <Bullet>
                試驗研究：試驗製作後用感官結果回饋工藝與栽培，找出最佳方案推廣給茶農。[2]
              </Bullet>
              <Bullet>
                優良茶比賽：不同茶類因產期、發酵與烘焙程度不同，評審標準亦會調整；台灣各類特色茶賽即屬典型應用。[2]
              </Bullet>
            </Bullets>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="二、色・香・味的品質密碼" icon={Eye}>
        <div className="space-y-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-sense-2-1">1) 色：外觀 vs 水色</SubTitle>
            <Bullets>
              <Bullet>
                外觀色澤（脂溶性）：主要由葉綠素 A/B 與類胡蘿蔔素構成，脂溶性不溶於水，因此沖泡不會把「外觀色素」直接釋出。[1]
              </Bullet>
              <Bullet>
                水色（水溶性）：受發酵與烘焙支配；發酵可使水色由綠轉黃再轉紅，烘焙則使色澤由綠轉黃再轉褐。[1][3]
              </Bullet>
              <Bullet>觀察指標：彩度、鮮度、明亮度；水色觀察主要依視覺判定。[1][3]</Bullet>
            </Bullets>
          </div>
          <div className="mt-6">
            <ClickableImage
              src="/images/tea-talk/ch08-color-spectrum.png"
              alt="茶湯色澤光譜"
              caption="茶湯色澤光譜：從綠茶的碧綠到紅茶的艷紅"
            />
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-sense-2-2">2) 香：層層關卡的堆疊</SubTitle>
            <div className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              優質香氣追求清香、花香等，需避免異香、火焦味與濁氣。判斷香氣可掌握三個向度：香氣高低、香氣清濁、香氣種類。[3]
            </div>
            <Bullets>
              <Bullet>
                先天條件：品種、氣候環境、栽培管理、季節等，決定香氣「起點」。[3]
              </Bullet>
              <Bullet>後天工藝：製茶、烘焙、儲藏任一環節失控，都可能把香氣拉回去。[3]</Bullet>
            </Bullets>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-sense-2-3">3) 味：多酚、氨基酸與咖啡因的拉鋸</SubTitle>
            <div className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              滋味追求鮮爽、活性、甘醇、厚實與韻味；其化學基礎可用三大群組理解：
            </div>
            <div className="mt-6 mb-6">
              <ClickableImage
                src="/images/tea-talk/ch08-taste-chemistry.png"
                alt="滋味化學平衡"
                caption="滋味化學平衡：多酚（澀）、氨基酸（鮮甜）、咖啡因（苦）的黃金三角"
              />
            </div>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-stone-50 text-stone-700">
                  <tr className="text-left">
                    <th className="px-5 py-3 font-extrabold">關鍵成分</th>
                    <th className="px-5 py-3 font-extrabold">主要感受</th>
                    <th className="px-5 py-3 font-extrabold">重點提示</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <td className="px-5 py-4 font-bold">茶多酚（兒茶素）</td>
                    <td className="px-5 py-4">苦澀、刺激性、收斂感</td>
                    <td className="px-5 py-4">
                      酯型兒茶素偏苦澀與收斂；游離型較醇爽。紅茶關鍵氧化物為茶黃質與茶紅質，需避免茶褐質。[4]
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold">氨基酸（茶胺酸為主）</td>
                    <td className="px-5 py-4">鮮爽、甘味、醇度</td>
                    <td className="px-5 py-4">
                      醇度常以酚氨比理解；含量受品種、季節、嫩度、遮蔭、海拔等影響。[5]
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold">咖啡因</td>
                    <td className="px-5 py-4">苦味、提神感</td>
                    <td className="px-5 py-4">
                      會隨品種、季節、烘焙與芽葉部位變動；與茶黃質/茶紅質交互作用可影響鮮度與濃度，紅茶茶乳現象亦與此相關。[5]
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="三、品茶員：條件與認證" icon={Sparkles}>
        <div className="space-y-5 text-stone-700 leading-relaxed">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-sense-3-1">必備條件</SubTitle>
            <Bullets>
              <Bullet>感官狀態：眼、鼻、口、舌保持敏銳。</Bullet>
              <Bullet>職業道德：公正、公平、公開。</Bullet>
              <Bullet>身心健康：最佳狀態（Best condition）。</Bullet>
              <Bullet>學術基礎：品種、氣候、製作、烘焙、儲藏等知識。</Bullet>
              <Bullet>經驗值：深入茶區理解風土與管理技術。[6]</Bullet>
            </Bullets>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-sense-3-2">認證制度概念</SubTitle>
            <div className="mt-2 text-[17px] text-stone-700 leading-relaxed">
              例如茶改場推動之五級認證（初級→特級），初級常先以味覺閾值測試確認感官敏銳度，再進行術科（風味標準）與時數訓練。[7][8]
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="四、標準化：環境、設備與沖泡參數" icon={Timer}>
        <div className="space-y-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-sense-4-1">1) 環境與設備</SubTitle>
            <Bullets>
              <Bullet>溫濕度：室溫約 25°C、相對濕度約 70%。[9][10]</Bullet>
              <Bullet>光線：自然光（座南朝北）或不反光白光，以利判色。[9][10]</Bullet>
              <Bullet>設備：黑色品茶台、審茶碗、審茶杯（150cc）、審茶盤、湯匙、計時器等。[9][10]</Bullet>
            </Bullets>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-stone-50 text-stone-700">
                <tr className="text-left">
                  <th className="px-5 py-3 font-extrabold">項目</th>
                  <th className="px-5 py-3 font-extrabold">標準</th>
                  <th className="px-5 py-3 font-extrabold">備註</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-800">
                <tr>
                  <td className="px-5 py-4 font-bold">茶葉量</td>
                  <td className="px-5 py-4">3 公克</td>
                  <td className="px-5 py-4">秤茶要一致，避免來源於人員操作差異。[10]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">水量</td>
                  <td className="px-5 py-4">150cc</td>
                  <td className="px-5 py-4">審茶杯容量一致。[10]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">水溫</td>
                  <td className="px-5 py-4">100°C 沸水</td>
                  <td className="px-5 py-4">固定水溫以提高可比性。[10]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">變動因子</td>
                  <td className="px-5 py-4">沖泡時間</td>
                  <td className="px-5 py-4">依形狀調整：[10]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">條形茶</td>
                  <td className="px-5 py-4">5 分鐘</td>
                  <td className="px-5 py-4">碧螺春、文山包種、紅茶。[10]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">花朵型茶</td>
                  <td className="px-5 py-4">5 分 30 秒</td>
                  <td className="px-5 py-4">東方美人。[10]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold">球形茶</td>
                  <td className="px-5 py-4">6 分鐘</td>
                  <td className="px-5 py-4">高山、凍頂、鐵觀音。[10]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-sense-4-2">2) 評審六大項目</SubTitle>
            <div className="mt-2 text-stone-700 leading-relaxed">
              外觀（形狀與色澤）、水色、香氣、滋味、葉底等，以視覺、味覺與觸覺綜合評定。[2]
            </div>
          </div>
          <div className="mt-6">
            <ClickableImage
              src="/images/tea-talk/ch08-brewing-guide.png"
              alt="評鑑沖泡指南"
              caption="評鑑沖泡指南：3公克、100°C沸水、依外型決定時間"
            />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="五、缺陷分析：評鑑不只打分，更要能診斷" icon={Flame}>
        <div className="space-y-4 text-[17px] text-stone-700 leading-relaxed">
          <p>缺點（如陳味、澀味、青味、焦味等）需能回推原因，常從四個層面分析：[11][12]</p>
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <Bullets>
              <Bullet>
                茶菁原料：採摘標準是否合理、栽培管理是否到位、品種與風土是否匹配。
              </Bullet>
              <Bullet>
                製作技術：萎凋、攪拌、殺菁、揉捻、乾燥等是否控制得當，影響發酵與成分變化。
              </Bullet>
              <Bullet>烘焙技術：溫度/時間不當易焦味或韻味不足；輕焙著重去青去雜去水，重焙則改變色香味。</Bullet>
              <Bullet>
                儲藏條件：水分、溫度、氧氣干擾時，類胡蘿蔔素與不飽和脂肪酸等可能後氧化，形成陳味與油耗味。
              </Bullet>
            </Bullets>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="結語" icon={Sparkles}>
        <div className="text-[17px] text-stone-700 leading-relaxed">
          官能評鑑的價值在於「把主觀變得可比」。你越理解色、香、味背後的物理與化學密碼，越能把評鑑結果回推到原料、製程、
          烘焙與儲藏，進而做出可複製的好茶與可教學的判準。[13][14]
        </div>
      </SectionCard>
    </div >
  );
}

