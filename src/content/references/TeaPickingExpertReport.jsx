import React from 'react';
import { CloudRain, Droplets, Sparkles, Thermometer, Wind } from 'lucide-react';
import { Callout, DataTable } from './ui';

function SubsectionTitle({ id, title }) {
  return (
    <h4 id={id} className="scroll-mt-28 text-lg md:text-xl font-extrabold text-stone-900">
      {title}
    </h4>
  );
}

function BulletList({ children }) {
  return <ul className="mt-3 space-y-2 text-sm text-stone-700 list-disc pl-5">{children}</ul>;
}

export default function TeaPickingExpertReport() {
  return (
    <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <header className="px-6 py-6 md:px-10 md:py-9 border-b border-stone-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="flex items-start gap-4">
          <div className="bg-white text-sky-800 p-3 rounded-2xl border border-sky-200 shadow-sm">
            <Sparkles size={24} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">EXPERT REPORT</div>
            <h3 className="mt-3 text-2xl md:text-4xl font-extrabold text-stone-900 leading-tight">
              一心二葉知多少：茶葉栽培、採摘與風味解析——專家解析報告
            </h3>
            <p className="mt-3 text-stone-600 leading-relaxed">茶業改良場前場長 陳國任博士</p>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 md:px-10 md:py-10 space-y-10">
        <Callout title="導讀">
          「一心二葉」不只是採摘動作，更是一套可被教學、可被檢核的原料標準。[1]
          本文整理茶樹風土、採摘成熟度、成分與香氣形成，並保留引用標記（如 [1][2]），方便後續補齊來源。
        </Callout>

        <section className="space-y-4">
          <SubsectionTitle id="pick-01" title="一、象徵品質的「一心二葉」與茶樹栽培風土" />
          <p className="text-stone-700 leading-relaxed">
            要獲得優質茶菁，需先理解茶樹種植的風土條件，其中「氣候」與「土壤」是兩大關鍵因素。[1][2]
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-stone-700">
                  <Wind size={18} />
                </span>
                <div className="min-w-0">
                  <div className="font-extrabold text-stone-900">1）氣候條件</div>
                  <BulletList>
                    <li>
                      <strong>溫度：</strong>茶樹最適平均生長溫度約 18～25°C；低於 5°C 會停止生長，高於 40°C
                      容易死亡。[1]
                    </li>
                    <li>
                      <strong>濕度與雨量：</strong>喜濕潤環境，年雨量約 1500～3000 mm；相對濕度約 75%～80%
                      較佳。[1]
                    </li>
                    <li>
                      <strong>海拔分布：</strong>台灣茶園海拔跨度大（丘陵到高山），主要集中在數十公尺～1500
                      公尺。[1]
                    </li>
                  </BulletList>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-stone-700">
                  <CloudRain size={18} />
                </span>
                <div className="min-w-0">
                  <div className="font-extrabold text-stone-900">2）土壤條件</div>
                  <BulletList>
                    <li>理想茶園土壤需排水良好、表土深厚且疏鬆。[2]</li>
                    <li>
                      <strong>pH：</strong>約 4.5～5.5，並富含有機質與礦物質，可顯著加分。[2]
                    </li>
                  </BulletList>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <SubsectionTitle id="pick-02" title="二、合理的採摘管理與標準" />
          <p className="text-stone-700 leading-relaxed">
            所謂「合理採摘」需符合四項原則：配合茶類決定標準、避免傷樹、強化新梢密度與樹勢、並兼顧人力與生產率。[2]
          </p>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-700">
                <Thermometer size={18} />
              </span>
              <div className="min-w-0">
                <div className="font-extrabold text-stone-900">採摘成熟度（依製茶類型）</div>
                <BulletList>
                  <li>
                    <strong>嫩採：</strong>龍井、碧螺春、白毫烏龍等；多採一心一葉～一心二葉（強調顯毫）。[2][3]
                  </li>
                  <li>
                    <strong>適中採：</strong>多用於紅茶；常在芽梢較長時，採其頂端的一心二葉作原料。[4][5]
                  </li>
                  <li>
                    <strong>成熟採：</strong>包種、烏龍、凍頂、鐵觀音等青茶；多在接近「對口葉/駐芽」時採摘，一心三葉～一心六葉以上。[4][5]
                  </li>
                </BulletList>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="font-extrabold text-stone-900">「嫩採」與「採嫩」</div>
            <BulletList>
              <li>
                <strong>嫩採：</strong>在芽葉非常嫩時採摘（如僅芽芯或一心一葉）。[6]
              </li>
              <li>
                <strong>採嫩：</strong>枝條長後，只採頂端細嫩部位（例如枝條到一心四～五葉時，採頂端一心二葉）。[6]
              </li>
            </BulletList>
          </div>
        </section>

        <section className="space-y-4">
          <SubsectionTitle id="pick-03" title="三、茶樹成分與風味解析（可溶性差異）" />
          <p className="text-stone-700 leading-relaxed">
            茶湯口感來自各類化學成分的溶出差異（可溶性），尤其是茶多酚、咖啡因與氨基酸。[7][8]
          </p>

          <DataTable title="常見成分（摘要）">
            <table className="min-w-full divide-y divide-stone-200 text-sm">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">成分</th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">口感/作用</th>
                  <th className="px-5 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">溶出特性</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">茶多酚（兒茶素）</td>
                  <td className="px-5 py-4">影響色、香、味與澀感核心</td>
                  <td className="px-5 py-4">高度可溶（沖泡易溶出）[8]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">咖啡因</td>
                  <td className="px-5 py-4">苦味與「茶湯活性」來源</td>
                  <td className="px-5 py-4">可溶、易溶出 [8]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">氨基酸</td>
                  <td className="px-5 py-4">甘甜/鮮爽感關鍵</td>
                  <td className="px-5 py-4">可溶、易溶出 [8]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">果膠質</td>
                  <td className="px-5 py-4">濃稠度、油亮感與圓潤度</td>
                  <td className="px-5 py-4">部分可溶（約半溶）[7]</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">半纖維素</td>
                  <td className="px-5 py-4">原料過老會讓茶湯平淡</td>
                  <td className="px-5 py-4">不溶於水 [7]</td>
                </tr>
              </tbody>
            </table>
          </DataTable>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="font-extrabold text-stone-900">嫩葉 vs 老茶（概念）</div>
            <BulletList>
              <li>
                <strong>嫩葉（鮮葉）：</strong>兒茶素、咖啡因、氨基酸等維持原始狀態。[9]
              </li>
              <li>
                <strong>老茶：</strong>經後氧化作用，成分與風味逐步轉化，呈現歲月感。[9]
              </li>
            </BulletList>
          </div>
        </section>

        <section className="space-y-4">
          <SubsectionTitle id="pick-04" title="四、水分管理：茶樹的生命之源" />
          <p className="text-stone-700 leading-relaxed">
            茶樹含水量通常需維持在 70%～80% 左右；「四斤做一斤」意味著原料中約 75% 是水分。[10][11]
          </p>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-700">
                <Droplets size={18} />
              </span>
              <div className="min-w-0">
                <div className="font-extrabold text-stone-900">灌溉原則（摘要）</div>
                <BulletList>
                  <li>可用噴灌或滴灌；重點是「一次給足」，讓水分滲透到約 30 公分深處，利於鬚根吸收。[10][11]</li>
                  <li>水分不足會造成減產、品質平淡，嚴重時導致植株死亡。[11]</li>
                </BulletList>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <SubsectionTitle id="pick-05" title="五、春茶的優勢與節氣" />
          <BulletList>
            <li>冬季修剪後休眠養息，儲備元氣。[12]</li>
            <li>春季溫度常落在 18～25°C，適合生長。[12]</li>
            <li>雨量較充沛、日照相對柔和，有利於合成色香味成分。[12]</li>
            <li>平地茶區春茶約涵蓋立春～穀雨，其中清明～穀雨期間的「正春茶」常被認為品質最佳。[12]</li>
          </BulletList>
        </section>

        <section className="space-y-4">
          <SubsectionTitle id="pick-06" title="六、茶葉香氣的形成機制（四大途徑）" />
          <BulletList>
            <li>
              <strong>田間形成：</strong>生長時形成約百種香氣物質，多以醣苷形式存在。[13]
            </li>
            <li>
              <strong>製作過程（發酵）：</strong>發酵越深香氣種類越豐富；綠茶最少，烏龍/包種增加，紅茶最豐富。[13]
            </li>
            <li>
              <strong>烘焙轉化：</strong>梅納反應等熱作用改變香氣表現。[14]
            </li>
            <li>
              <strong>儲藏變化：</strong>後氧化作用形成陳年風味（梅香、人蔘香、棗香/樟香等）。[14]
            </li>
          </BulletList>
        </section>

        <section className="space-y-4">
          <SubsectionTitle id="pick-07" title="七、結語" />
          <p className="text-stone-700 leading-relaxed">
            「一心二葉」不只是品質的象徵：心代表用心，葉代表智慧與善良。[15]
            茶的風味由品種、風土、採摘、製作與儲藏共同決定；把這些因素拆開理解，才能真正看懂一杯茶。
          </p>
        </section>
      </div>
    </article>
  );
}
