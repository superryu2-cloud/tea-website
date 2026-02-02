import React from 'react';
import ClickableImage from '../../components/ClickableImage';
import { Flame, FlaskConical, Palette, Sparkles, Wind } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

function Bullet({ children }) {
  return <li className="text-[17px] leading-relaxed font-sans">{children}</li>;
}

function Bullets({ children }) {
  return <ul className="mt-3 list-disc pl-5 space-y-2 text-[17px] leading-relaxed font-sans text-stone-700">{children}</ul>;
}

function SubTitle({ id, children }) {
  return (
    <h3 id={id} className="scroll-mt-28 text-[19px] md:text-[22px] font-extrabold font-sans text-stone-900">
      {children}
    </h3>
  );
}

export default function TeaFermentationWizard() {
  return (
    <div className="space-y-8">
      <div className="museum-frame museum-paper relative overflow-hidden">
        <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-rose-200/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="relative px-8 py-10 md:px-12 md:py-12">
          <div className="museum-label">
            <Sparkles size={14} className="opacity-80" />
            CHAPTER 03 · FERMENTATION
          </div>
          <h2 className="mt-5 text-[24px] md:text-5xl font-extrabold font-sans tracking-tight text-stone-900">茶葉魔術師．發酵</h2>
          <p className="mt-4 max-w-3xl text-[17px] md:text-xl font-sans text-stone-700 leading-relaxed">
            從「六大茶類」到「酵素性/非酵素性」：用一套能教、能背、能拿來判斷茶湯的框架，理解色、香、味如何被製程塑形。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ClickableImage
          src="/images/tea-talk/fermentation/fermentation_oxidation.png"
          alt="發酵氧化過程"
          caption="茶葉發酵氧化過程：茶師在竹籃中翻動茶葉，葉片由綠轉琥珀，展現發酵的魔術"
        />
        <ClickableImage
          src="/images/tea-talk/fermentation/fermentation_spectrum.png"
          alt="茶葉發酵光譜"
          caption="茶葉發酵光譜：六大茶類按氧化程度排列，從白茶到黑茶，色澤與香氣的漸變"
        />
      </div>

      <SectionCard title="快速記憶（先抓到核心）" icon={Palette}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">TYPE</div>
            <div className="mt-2 font-extrabold text-stone-900">四種「發酵類型」</div>
            <div className="mt-2 text-stone-600 leading-relaxed">
              不發酵（綠/黃）→ 部分發酵（白/青）→ 全發酵（紅）→ 後發酵（黑/普洱）。
            </div>
          </div>
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">ENGINE</div>
            <div className="mt-2 font-extrabold text-stone-900">啟動條件</div>
            <div className="mt-2 text-stone-600 leading-relaxed">
              破壞細胞 → 讓「兒茶素＋PPO＋氧氣」相遇 → 氧化作用開始。[2][4]
            </div>
          </div>
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">STOP</div>
            <div className="mt-2 font-extrabold text-stone-900">停止發酵的方法</div>
            <div className="mt-2 text-stone-600 leading-relaxed">
              高溫失活（炒菁）：蛋白質 60°C 以上失活；炒菁常可達 300°C。[2][5]
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="一、茶葉發酵的基礎分類與機制" icon={FlaskConical}>
        <div className="space-y-5">
          <div>
            <SubTitle id="tt-fer-1-1">1. 發酵類型分類</SubTitle>
            <Bullets>
              <Bullet>
                <strong>不發酵茶：</strong>綠茶、黃茶。[1]
              </Bullet>
              <Bullet>
                <strong>部分發酵茶：</strong>白茶、青茶（烏龍茶類）。[1]
              </Bullet>
              <Bullet>
                <strong>全發酵茶：</strong>紅茶。[1]
              </Bullet>
              <Bullet>
                <strong>後發酵茶：</strong>黑茶（如普洱茶）。[1]
              </Bullet>
            </Bullets>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <SubTitle id="tt-fer-1-2">2. 酵素性發酵</SubTitle>
              <div className="mt-2 text-[17px] font-sans text-stone-700 leading-relaxed">
                主要出現在白茶、青茶與紅茶。關鍵是多酚氧化酵素（PPO），它催化多酚物質形成有色物質，決定色澤與風味走向。[1][2]
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <SubTitle id="tt-fer-1-3">3. 非酵素性轉化</SubTitle>
              <Bullets>
                <Bullet>
                  <strong>濕與熱：</strong>普洱茶（熟普）、黑茶類。[2][3]
                </Bullet>
                <Bullet>
                  <strong>熱能：</strong>烘焙技術。[2][3]
                </Bullet>
                <Bullet>
                  <strong>歲月：</strong>陳年老茶長期存放產生轉化。[2][3]
                </Bullet>
              </Bullets>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="font-extrabold text-stone-900">4. 發酵的本質（重要澄清）</div>
            <div className="mt-2 text-[17px] font-sans text-stone-700 leading-relaxed">
              茶葉發酵本質是一場「化學變化」，核心是兒茶素的氧化作用（後發酵茶例外）。要啟動酵素性發酵，需透過製程破壞細胞，讓
              兒茶素、酵素與氧氣三者結合，引發氧化反應。[2][4] 要停止發酵，則以高溫失活酵素最直接有效（例如炒菁）。[2][5]
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="二、不同茶類的製程與發酵特徵" icon={Wind}>
        <div className="space-y-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-fer-2-1">1. 白茶：重萎凋與輕發酵</SubTitle>
            <Bullets>
              <Bullet>
                <strong>原則：</strong>「一重一輕三個不」：重萎凋、輕發酵、不攪拌、不炒菁、不揉捻。[6][7]
              </Bullet>
              <Bullet>
                <strong>萎凋條件：</strong>室內萎凋約 2～3 天，水分散失 60%～70%；環境可控溫 25°C、相對濕度 70%。[8]
              </Bullet>
              <Bullet>
                <strong>變化：</strong>物理性萎凋（重量/體積減少、葉片變軟、色澤變化）＋化學性萎凋（蛋白質分解、酵素參與、香氣形成）。[9]
              </Bullet>
              <Bullet>
                <strong>等級：</strong>白毫銀針（芽）、白牡丹（一心一葉）、貢眉（一心二葉）、壽眉（老葉）。[7]
              </Bullet>
            </Bullets>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-fer-2-2">2. 青茶（烏龍茶類）：萎凋與攪拌的藝術</SubTitle>
            <div className="mt-2 text-[17px] font-sans text-stone-700 leading-relaxed">
              萎凋與攪拌創造逆境，使細胞質中的 PPO 與液泡中的兒茶素接觸，啟動氧化作用。[6][10]
            </div>

            <div className="mt-4 overflow-x-auto rounded-xl border border-stone-200 bg-stone-50">
              <table className="min-w-full text-sm">
                <thead className="bg-white">
                  <tr className="text-left text-stone-600">
                    <th className="px-4 py-3 font-extrabold">發酵程度</th>
                    <th className="px-4 py-3 font-extrabold">代表茶類</th>
                    <th className="px-4 py-3 font-extrabold">水色/香氣重點</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <td className="px-4 py-3 font-bold">輕發酵</td>
                    <td className="px-4 py-3">文山包種茶</td>
                    <td className="px-4 py-3">蜜綠微黃；強調清香。[11]</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">中發酵</td>
                    <td className="px-4 py-3">高山茶 / 凍頂烏龍 / 鐵觀音</td>
                    <td className="px-4 py-3">蜜黃/金黃/琥珀；清香到重焙火。[11]</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">重發酵</td>
                    <td className="px-4 py-3">東方美人茶</td>
                    <td className="px-4 py-3">橙黃至橙紅；熟果蜜香。[11][8]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-fer-2-3">3. 紅茶：重揉捻與全發酵</SubTitle>
            <Bullets>
              <Bullet>
                <strong>製程特徵：</strong>不經炒菁；透過重揉捻破壞細胞，再以渥堆補足發酵，屬全發酵茶。[3][6]
              </Bullet>
              <Bullet>
                <strong>品質關鍵：</strong>茶黃質與茶紅質的比例。
                <div className="mt-2 text-sm text-stone-700">
                  - 茶黃質：明亮黃色茶湯，提供收斂性、刺激性與鮮爽度。[12]
                  <br />- 茶紅質：呈紅色，提供甜味與醇度。[12]
                </div>
              </Bullet>
              <Bullet>
                <strong>茶乳現象（Cream Down）：</strong>冷卻後混濁，為茶黃質/茶紅質與咖啡因形成的大分子聚合物沉澱，是大葉種優質紅茶常見特徵。[13]
              </Bullet>
            </Bullets>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="三、發酵對色、香、味的影響" icon={Palette}>
        <div className="space-y-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-fer-3-1">1. 水色與色澤的演變</SubTitle>
            <div className="mt-2 text-[17px] font-sans text-stone-700 leading-relaxed">
              水色常隨發酵加深而由綠→黃→紅；若受烘焙影響，外觀色澤由綠→黃→褐。[11]
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {[
                ['碧螺春（不發酵）', '蜜綠色'],
                ['文山包種（輕發酵）', '蜜綠帶黃'],
                ['高山茶（中發酵）', '蜜黃色（黃中帶綠）'],
                ['凍頂烏龍（中發酵+烘焙）', '金黃色（黃中帶褐）'],
                ['東方美人（重發酵）', '橙紅至橙黃'],
                ['紅茶（全發酵）', '鮮紅色'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                  <span className="font-bold text-stone-900">{k}</span>
                  <span className="text-stone-700">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-fer-3-2">2. 香氣的形成</SubTitle>
            <Bullets>
              <Bullet>香氣隨發酵程度加深而變得更複雜：綠茶約 100+、包種約 200+、紅茶可達 600+ 種香氣物質。[13]</Bullet>
              <Bullet>
                <strong>香氣光譜：</strong>輕發酵偏清香（包種），重發酵偏果香（東方美人），全發酵偏焦糖香（紅茶）。[14]
              </Bullet>
              <Bullet>
                <strong>前驅物質：</strong>氨基酸、不飽和脂肪酸、類胡蘿蔔素等在發酵過程轉化為揮發性成分。[14]
              </Bullet>
            </Bullets>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-fer-3-3">3. 走水的重要性</SubTitle>
            <div className="mt-2 text-[17px] font-sans text-stone-700 leading-relaxed">
              走水指水分散失路徑：茶梗→葉脈→支脈→細脈→葉背氣孔散失。[15]
            </div>
            <Bullets>
              <Bullet>
                <strong>走水順暢：</strong>香氣清揚。[15]
              </Bullet>
              <Bullet>
                <strong>走水不順（積水）：</strong>水路中斷，易出青味、澀味；水色偏黃或紅，色澤暗綠。[15]
              </Bullet>
            </Bullets>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="四、製茶關鍵技術：炒菁的目的" icon={Flame}>
        <div className="text-[17px] font-sans text-stone-700 leading-relaxed">
          在青茶製作中，炒菁常以高溫（約 300°C）達成三件事：[5]
        </div>
        <Bullets>
          <Bullet>
            <strong>停止發酵：</strong>破壞酵素活性，固定色、香、味，避免儲藏中產生不預期後發酵。
          </Bullet>
          <Bullet>
            <strong>去除雜味：</strong>揮發青味與雜味。
          </Bullet>
          <Bullet>
            <strong>軟化葉片：</strong>讓葉片更柔軟，利於揉捻成型。
          </Bullet>
        </Bullets>
      </SectionCard>

      <SectionCard title="五、結語" icon={Sparkles}>
        <div className="text-[17px] font-sans text-stone-700 leading-relaxed">
          發酵（氧化）是色、香、味形成的基礎理論。掌握「啟動條件」與「停止方式」，就能讀懂不同茶類為何呈現截然不同的風味輪廓，
          也能更精準找到自己喜愛的茶品風格。
        </div>
      </SectionCard>
    </div>
  );
}

