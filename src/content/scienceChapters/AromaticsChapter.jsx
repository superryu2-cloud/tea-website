import React from 'react';
import { Sparkles, CheckCircle, FlaskConical, Layers, Tag, Leaf, Coffee, BookOpen, Flower, Drama, Microscope, Flame, Sprout, Mountain, CloudSun, Settings, Lightbulb, Target, FileText, Apple } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

export default function AromaticsChapter() {
  return (
    <div className="space-y-8">
      <SectionCard title="香氣" icon={Sparkles}>
        <p>
          茶葉香氣來自數百種揮發性芳香物質。從化學基礎到形成機制、分類方式，系統性地解析茶葉香氣的科學原理。
        </p>
        <h4 className="text-[17px] md:text-[19px] font-extrabold text-stone-900">茶葉香氣科學</h4>
        <p>
          香氣是茶葉品質的靈魂，也是品鑑的核心要素之一。本章從化學角度解析茶葉香氣的物質基礎、形成機制、分類方式，
          以及如何透過製程工藝調控香氣表現，幫助您建立科學化的香氣認知體系。
        </p>
      </SectionCard>

      <SectionCard title="一、香氣在茶葉品質中的地位" icon={CheckCircle}>
        <p>
          茶葉的品質評價通常包含「色、香、味、形」四個維度，其中香氣往往是最先被感知、
          也最能直接影響品飲體驗的要素。一杯好茶，香氣應該：
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-purple-200 bg-purple-50/70 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[17px] font-extrabold text-purple-700">
              <Sparkles size={18} className="text-purple-700" />
              <span>純正</span>
            </div>
            <p className="mt-2 text-base text-purple-700/80">無異味、雜味，香型特徵明確</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[17px] font-extrabold text-rose-700">
              <Flower size={18} className="text-rose-700" />
              <span>高揚</span>
            </div>
            <p className="mt-2 text-base text-rose-700/80">香氣濃郁、持久、穿透力強</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[17px] font-extrabold text-blue-700">
              <Drama size={18} className="text-blue-700" />
              <span>層次豐富</span>
            </div>
            <p className="mt-2 text-base text-blue-700/80">前、中、後段香氣有變化與深度</p>
          </div>
        </div>
        <div className="rounded-xl border border-amber-100 border-l-4 border-l-amber-400 bg-amber-50/70 p-4">
          <div className="flex items-center gap-2 text-[17px] md:text-[19px] font-extrabold text-amber-900">
            <Lightbulb size={18} className="text-amber-900" />
            <span>品鑑要點</span>
          </div>
          <p className="mt-2 text-base text-amber-900/80">
            專業品鑑時，香氣評分通常佔總分的 25-30%，與滋味並列為最重要的評價指標。高品質茶葉的香氣應該「聞香知茶」，
            能夠反映品種、產地、工藝的特徵。
          </p>
        </div>
      </SectionCard>

      <SectionCard title="二、香氣物質的化學基礎" icon={FlaskConical}>
        <p>
          茶葉香氣來自數百種揮發性芳香物質（Volatile Organic Compounds, VOCs）的協同作用。
          這些物質含量極低（通常僅佔乾茶重量的 0.01-0.03%），但對香氣表現至關重要。
        </p>
        <div className="overflow-x-auto rounded-xl border border-purple-100 shadow-sm bg-white/70">
          <table className="min-w-full divide-y divide-purple-100 text-base">
            <thead>
              <tr className="bg-purple-50">
                <th className="px-4 py-3 text-left font-extrabold text-purple-700">化合物類別</th>
                <th className="px-4 py-3 text-left font-extrabold text-purple-700">代表物質</th>
                <th className="px-4 py-3 text-left font-extrabold text-purple-700">香氣特徵</th>
                <th className="px-4 py-3 text-left font-extrabold text-purple-700">主要來源</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">醇類 (Alcohols)</td>
                <td className="px-4 py-3">芳樟醇、香葉醇</td>
                <td className="px-4 py-3">花香、清新香</td>
                <td className="px-4 py-3">鮮葉固有、萎凋形成</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">醛類 (Aldehydes)</td>
                <td className="px-4 py-3">苯甲醛、己醛</td>
                <td className="px-4 py-3">果香、青草香</td>
                <td className="px-4 py-3">氧化反應產生</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">酮類 (Ketones)</td>
                <td className="px-4 py-3">茉莉酮、紫羅蘭酮</td>
                <td className="px-4 py-3">花香、果香</td>
                <td className="px-4 py-3">發酵、氧化過程</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">酯類 (Esters)</td>
                <td className="px-4 py-3">水楊酸甲酯</td>
                <td className="px-4 py-3">甜香、果香</td>
                <td className="px-4 py-3">發酵、烘焙過程</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">萜烯類 (Terpenes)</td>
                <td className="px-4 py-3">檸檬烯、月桂烯</td>
                <td className="px-4 py-3">柑橘香、松木香</td>
                <td className="px-4 py-3">鮮葉固有</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">吡嗪類 (Pyrazines)</td>
                <td className="px-4 py-3">四甲基吡嗪</td>
                <td className="px-4 py-3">烘烤香、堅果香</td>
                <td className="px-4 py-3">高溫烘焙產生</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-emerald-100 border-l-4 border-l-emerald-400 bg-emerald-50/70 p-4">
          <div className="flex items-center gap-2 text-[17px] md:text-[19px] font-extrabold text-emerald-900">
            <Microscope size={18} className="text-emerald-900" />
            <span>科學補充</span>
          </div>
          <p className="mt-2 text-base text-emerald-900/80">
            目前已從茶葉中鑑定出超過 700 種揮發性芳香物質，但真正對香氣有顯著貢獻的「關鍵香氣成分」
            約 50-100 種。這些物質的種類、含量、比例共同決定了茶葉的香氣特徵。
          </p>
        </div>
      </SectionCard>

      <SectionCard title="三、香氣的形成機制" icon={Layers}>
        <p>茶葉香氣並非一成不變，而是在製程的每個階段持續轉化、累積、揮發的動態過程。</p>

        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-emerald-900">3.1 鮮葉固有香氣</h4>
            <p>新鮮茶葉本身含有一定量的芳香物質，主要包括：</p>
            <ul className="list-disc list-inside space-y-2">
              <li>萜烯類化合物：如芳樟醇、香葉醇，賦予清新的花香</li>
              <li>青葉醇：產生青草氣、生青味（製程中需降低）</li>
              <li>品種特徵香：不同品種有獨特的香氣基因表達</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-amber-900">3.2 萎凋階段的香氣變化</h4>
            <p>萎凋是香氣轉化的關鍵起點：</p>
            <div className="rounded-xl border border-amber-200/60 bg-white/80 p-4 space-y-2">
              <div>
                <h5 className="font-bold text-stone-900">物理變化</h5>
                <p className="text-base text-stone-600">水分散失 → 細胞膜透性增加 → 酶與底物接觸</p>
              </div>
              <div>
                <h5 className="font-bold text-stone-900">化學變化</h5>
                <p className="text-base text-stone-600">青葉醇降解 → 芳樟醇氧化物增加 → 花香顯現</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-rose-900">3.3 發酵/做青階段的香氣發展</h4>
            <p>這是香氣最豐富、最複雜的形成階段：</p>
            <ul className="list-disc list-inside space-y-2 text-rose-900/80">
              <li>酶促氧化：多酚氧化酶（PPO）催化兒茶素氧化，產生大量芳香醛、酮類</li>
              <li>糖苷水解：β-葡萄糖苷酶釋放結合態香氣前體，產生游離態芳香物質</li>
              <li>類胡蘿蔔素降解：形成紫羅蘭酮等花香、果香成分</li>
              <li>脂肪酸氧化：產生己醛、己烯醛等青香、果香物質</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-purple-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-purple-900">3.4 殺青對香氣的影響</h4>
            <p>殺青的高溫處理對香氣有雙重作用：</p>
            <ul className="list-disc list-inside space-y-2 text-purple-900/80">
              <li>❌ 破壞作用：鈍化酶活性，中止發酵；部分低沸點香氣揮發散失</li>
              <li>✅ 創造作用：高溫促進美拉德反應，產生炒米香、板栗香等熟香</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-sky-900">3.5 烘焙產生的香氣</h4>
            <p>烘焙是香氣再造的重要環節，尤其對烏龍茶、紅茶：</p>
            <ul className="list-disc list-inside space-y-2 text-sky-900/80">
              <li>低溫烘焙（80-100°C）：保留花香、果香，提升甜香</li>
              <li>中溫烘焙（100-120°C）：產生蜜香、焦糖香</li>
              <li>高溫烘焙（120-150°C）：形成火香、炭香、焙火韻</li>
            </ul>
            <p className="rounded-lg border border-sky-200/70 bg-white/80 p-3 text-base text-sky-900/80">
              關鍵反應：美拉德反應（Maillard Reaction）+ 焦糖化反應（Caramelization） → 產生吡嗪類、呋喃類等烘烤香氣物質
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="四、茶葉香氣分類" icon={Tag}>
        <h4 className="text-[17px] md:text-[19px] font-extrabold text-stone-900">4.1 按香型分類</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-purple-200 bg-purple-50/70 p-4 space-y-2 text-purple-900/80">
            <h5 className="text-[17px] font-extrabold text-purple-900 flex items-center gap-2"><Flower size={18} /> 花香型</h5>
            <p>特徵：清雅、高揚、似鮮花香氣</p>
            <p>細分：茉莉香、蘭花香、桂花香、玉蘭香、梔子花香等</p>
            <p>代表茶：文山包種、清香型鐵觀音、鳳凰單叢（芝蘭香）</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 space-y-2 text-rose-900/80">
            <h5 className="text-[17px] font-extrabold text-rose-900 flex items-center gap-2"><Apple size={18} /> 果香型</h5>
            <p>特徵：甜潤、飽滿、似成熟水果</p>
            <p>細分：蜜桃香、柑橘香、蘋果香、荔枝香、龍眼香等</p>
            <p>代表茶：東方美人、蜜香紅茶、高發酵烏龍茶</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 space-y-2 text-emerald-900/80">
            <h5 className="text-[17px] font-extrabold text-emerald-900 flex items-center gap-2"><Leaf size={18} /> 清香型</h5>
            <p>特徵：清新、爽朗、似嫩葉清香</p>
            <p>細分：嫩香、毫香、清香、鮮香</p>
            <p>代表茶：龍井、碧螺春、高山烏龍茶</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 space-y-2 text-amber-900/80">
            <h5 className="text-[17px] font-extrabold text-amber-900 flex items-center gap-2"><Flame size={18} /> 熟香型</h5>
            <p>特徵：沉穩、醇厚、烘烤氣息</p>
            <p>細分：焙火香、炒米香、板栗香、焦糖香、炭香</p>
            <p>代表茶：武夷岩茶、傳統鐵觀音、焙火烏龍</p>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 space-y-2 text-indigo-900/80">
            <h5 className="text-[17px] font-extrabold text-indigo-900 flex items-center gap-2"><Sparkles size={18} /> 特殊香型</h5>
            <p>特徵：獨特、難以描述、產地/品種特徵</p>
            <p>細分：岩韻、觀音韻、蜜韻、陳香、藥香、樟香</p>
            <p>代表茶：武夷岩茶（岩韻）、鐵觀音（觀音韻）、老茶（陳香）</p>
          </div>
          <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-4 space-y-2 text-teal-900/80">
            <h5 className="text-[17px] font-extrabold text-teal-900 flex items-center gap-2"><Sprout size={18} /> 青草/木質香型</h5>
            <p>特徵：自然、樸實、植物本味</p>
            <p>細分：青草香、竹葉香、松木香、藥草香</p>
            <p>代表茶：生普洱、部分綠茶、輕發酵茶</p>
          </div>
        </div>

        <h4 className="text-[17px] md:text-[19px] font-extrabold text-stone-900 mt-6">4.2 不同茶類的香氣特徵</h4>
        <div className="overflow-x-auto rounded-xl border border-indigo-100 shadow-sm bg-white/70">
          <table className="min-w-full divide-y divide-indigo-100 text-base">
            <thead>
              <tr className="bg-indigo-50">
                <th className="px-4 py-3 text-left font-extrabold text-indigo-700">茶類</th>
                <th className="px-4 py-3 text-left font-extrabold text-indigo-700">主要香型</th>
                <th className="px-4 py-3 text-left font-extrabold text-indigo-700">香氣特點</th>
                <th className="px-4 py-3 text-left font-extrabold text-indigo-700">關鍵香氣成分</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">綠茶</td>
                <td className="px-4 py-3">清香、嫩香、毫香</td>
                <td className="px-4 py-3">清新高揚、鮮爽明快</td>
                <td className="px-4 py-3">青葉醇、芳樟醇</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">白茶</td>
                <td className="px-4 py-3">毫香、花香、藥香</td>
                <td className="px-4 py-3">清雅淡遠、陳化後藥香顯</td>
                <td className="px-4 py-3">芳樟醇氧化物</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">烏龍茶</td>
                <td className="px-4 py-3">花香、果香、焙火香</td>
                <td className="px-4 py-3">香型最豐富、層次最複雜</td>
                <td className="px-4 py-3">茉莉酮、紫羅蘭酮、吡嗪類</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">紅茶</td>
                <td className="px-4 py-3">果香、花香、甜香</td>
                <td className="px-4 py-3">甜潤飽滿、香氣持久</td>
                <td className="px-4 py-3">香葉醇、苯甲醛、酯類</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">黑茶/普洱</td>
                <td className="px-4 py-3">陳香、藥香、樟香</td>
                <td className="px-4 py-3">沉穩內斂、越陳越香</td>
                <td className="px-4 py-3">微生物代謝產物</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="五、影響香氣的因素" icon={Leaf}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-emerald-900 flex items-center gap-2"><Sprout size={20} /> 品種因素</h4>
            <p className="text-base text-emerald-900/80">不同茶樹品種的香氣基因表達不同，形成獨特的「品種香」：</p>
            <ul className="list-disc list-inside space-y-2 text-base text-emerald-900/80">
              <li>青心烏龍：花香明顯</li>
              <li>金萱：奶香、桂花香</li>
              <li>鐵觀音：觀音韻（蘭花香）</li>
              <li>大葉種：濃郁、厚重</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-sky-900 flex items-center gap-2"><Mountain size={20} /> 產地與風土</h4>
            <p className="text-base text-sky-900/80">海拔、氣候、土壤共同塑造產地特徵香：</p>
            <ul className="list-disc list-inside space-y-2 text-base text-sky-900/80">
              <li>高山茶：清香、花香顯著</li>
              <li>岩茶產區：岩韻（礦物質香）</li>
              <li>雲霧繚繞：香氣細膩、持久</li>
              <li>日照充足：香氣濃郁</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-amber-900 flex items-center gap-2"><CloudSun size={20} /> 季節與氣候</h4>
            <p className="text-base text-amber-900/80">採摘季節顯著影響香氣表現：</p>
            <ul className="list-disc list-inside space-y-2 text-base text-amber-900/80">
              <li>春茶：香氣最佳，清雅高揚</li>
              <li>夏茶：香氣較弱，易有苦澀</li>
              <li>秋茶：香氣濃郁，但不如春茶細膩</li>
              <li>冬茶：香氣內斂、甘甜</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-rose-900 flex items-center gap-2"><Settings size={20} /> 製程工藝</h4>
            <p className="text-base text-rose-900/80">工藝是香氣調控的核心手段：</p>
            <ul className="list-disc list-inside space-y-2 text-base text-rose-900/80">
              <li>萎凋程度：影響花香形成</li>
              <li>發酵程度：決定香型走向</li>
              <li>殺青溫度：影響熟香產生</li>
              <li>烘焙火候：創造焙火香韻</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="六、香氣的品鑑與描述" icon={Coffee}>
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-stone-900 flex items-center gap-2"><Target size={20} /> 專業品鑑步驟</h4>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-purple-200 bg-purple-50/70 p-4">
                <div className="text-[17px] font-extrabold text-purple-900">乾香（干茶香）</div>
                <p className="mt-2 text-base text-purple-900/80">聞乾茶香氣，判斷品質與新鮮度</p>
              </div>
              <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4">
                <div className="text-[17px] font-extrabold text-rose-900">熱香（沖泡後）</div>
                <p className="mt-2 text-base text-rose-900/80">聞蓋香、水香，評估香型與強度</p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4">
                <div className="text-[17px] font-extrabold text-blue-900">冷香（葉底香）</div>
                <p className="mt-2 text-base text-blue-900/80">聞葉底冷香，判斷香氣持久度</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 space-y-2">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-stone-900 flex items-center gap-2"><Lightbulb size={20} /> 品鑑技巧</h4>
            <ul className="list-disc list-inside space-y-2 text-base text-stone-700">
              <li>深呼吸法：深吸一口氣，讓香氣充分進入鼻腔</li>
              <li>多次聞香：前、中、後段香氣會有變化</li>
              <li>對比品鑑：同時品鑑多款茶，更易辨別差異</li>
              <li>建立香氣記憶庫：多聞、多記、多描述</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 space-y-3">
            <h4 className="text-[17px] md:text-[19px] font-extrabold text-stone-900 flex items-center gap-2"><FileText size={20} /> 常用香氣描述詞彙</h4>
            <div className="flex flex-wrap gap-2 text-base text-stone-700">
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">清雅</span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">高揚</span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">持久</span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">純正</span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">濃郁</span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">細膩</span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">幽雅</span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1">馥郁</span>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="📌 本章重點回顧" icon={BookOpen}>
        <div className="space-y-3">
          <div className="flex items-start gap-2 text-stone-700">
            <CheckCircle size={18} className="mt-0.5 text-emerald-600" />
            <p>茶葉香氣來自 700+ 種揮發性芳香物質，主要包括醇、醛、酮、酯、萜烯、吡嗪等</p>
          </div>
          <div className="flex items-start gap-2 text-stone-700">
            <CheckCircle size={18} className="mt-0.5 text-emerald-600" />
            <p>香氣在製程各階段持續轉化：萎凋形成花香、發酵產生果香、烘焙創造熟香</p>
          </div>
          <div className="flex items-start gap-2 text-stone-700">
            <CheckCircle size={18} className="mt-0.5 text-emerald-600" />
            <p>香氣分類：花香、果香、清香、熟香、特殊香型等，不同茶類各有特徵</p>
          </div>
          <div className="flex items-start gap-2 text-stone-700">
            <CheckCircle size={18} className="mt-0.5 text-emerald-600" />
            <p>影響因素：品種、產地、季節、工藝共同決定香氣表現</p>
          </div>
          <div className="flex items-start gap-2 text-stone-700">
            <CheckCircle size={18} className="mt-0.5 text-emerald-600" />
            <p>品鑑要點：乾香、熱香、冷香三階段，建立香氣記憶庫</p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
