import React from 'react';
import { BookOpen, ClipboardList, Leaf, MapPin, Sprout, Table } from 'lucide-react';

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
          {Icon ? (
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-stone-700">
              <Icon size={18} />
            </span>
          ) : null}
          <h3 className="text-lg md:text-xl font-extrabold text-stone-900">{title}</h3>
        </div>
        <div className="px-5 py-5 md:px-7 md:py-6">
          <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Callout({ title, children }) {
  return (
    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-sky-200 text-sky-800">
          <ClipboardList size={18} />
        </span>
        <div className="min-w-0">
          <div className="font-extrabold text-stone-900">{title}</div>
          <div className="mt-2 text-sm text-stone-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SimpleTable({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-stone-50 flex items-center gap-2">
        <Table size={16} className="text-stone-500" />
        <h4 className="font-extrabold text-stone-900">{title}</h4>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

function BulletList({ children }) {
  return <ul className="space-y-2 text-sm text-stone-700 list-disc pl-5">{children}</ul>;
}

export default function TaiwanCultivarDiversity() {
  return (
    <article className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <header className="px-6 py-6 md:px-10 md:py-9 border-b border-stone-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="bg-white text-emerald-800 p-3 rounded-2xl border border-emerald-200 shadow-sm">
              <Sprout size={24} />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">CULTIVARS · TAIWAN</div>
              <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-stone-900 leading-tight">
                多樣性的台灣茶樹栽培品種與特性解析
              </h2>
              <p className="mt-4 text-stone-600 leading-relaxed">
                以育種、分類與產區適製性為主線，整理台灣茶樹品種的記憶框架，方便教學與自學快速對照。
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <Leaf size={16} className="opacity-70" />
                  生物特性／育種
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <BookOpen size={16} className="opacity-70" />
                  兩大類／四大十一小
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <MapPin size={16} className="opacity-70" />
                  產區分布／適製性
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 md:px-10 md:py-10">
        <div className="space-y-8">
          <Callout title="快速記憶（先抓框架）">
            先記「大葉種／小葉種」與「四大十一小」：大葉種多與紅茶系統相關；小葉種廣泛應用於綠茶、包種與烏龍。之後再把品種對應到產區與茶類。
          </Callout>

          <Section id="cultivar-01" title="一、茶樹的生物特性與育種基礎" icon={Sprout}>
            <p>
              茶樹屬多年生常綠作物，並非糧食作物，具有特殊的經濟用途。在生物學特性上，茶樹屬於異交作物。雖然雌雄同花，但因自交不親和性（常用「近水樓台不得月」形容），必須藉由其他雄蕊花粉授粉，才能完成繁殖。
            </p>
            <p>
              授粉後會形成種子，播種後稱為「實生苗」。由於異交特性，實生苗的遺傳變異很大，種植後每株的樹型、芽色、葉形、萌芽期與採摘期皆可能不同，造成茶園管理困擾。為了確保品質與管理一致，育種通常會先從變異群體中選拔優良品種，再用扦插進行無性繁殖 [1][2]。
            </p>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="font-extrabold text-stone-900">育種途徑（兩種主流）</div>
              <div className="mt-3 space-y-4 text-sm text-stone-700 leading-relaxed">
                <div>
                  <div className="font-extrabold text-stone-900">1）雜交育種</div>
                  <BulletList>
                    <li>
                      天然雜交：透過風力或昆蟲授粉，母本已知但父本不詳。例如台茶 21 號與 23 號常被歸為天然雜交品種。
                    </li>
                    <li>
                      人工雜交：父本與母本皆已知，需透過遠緣雜交避免近親弱勢。常見如台茶 12、13、17、18、20、22 等 [2][3]。
                    </li>
                  </BulletList>
                </div>
                <div>
                  <div className="font-extrabold text-stone-900">2）單株選拔</div>
                  <BulletList>
                    <li>從現有群體（如實生苗茶園）挑選表現優異的單株。</li>
                    <li>例如台茶 8 號（阿薩姆群體選出）、台茶 24 號（原生山茶選出）[2][3]。</li>
                  </BulletList>
                </div>
              </div>
            </div>
          </Section>

          <Section id="cultivar-02" title="二、台灣茶樹品種分類：兩大類與「四大十一小」" icon={Leaf}>
            <p>
              依據植物學分類，茶樹可分為大葉種（Camellia sinensis var. assamica）與小葉種（Camellia sinensis var. sinensis）。一般而言，大葉種兒茶素含量較高，常用於製作紅茶；小葉種兒茶素含量較低，常見於綠茶、包種茶與烏龍茶 [2]。
            </p>

            <SimpleTable title="大葉種 vs 小葉種：成分／適製性（快速對照）">
              <table className="min-w-full text-sm text-stone-700">
                <thead className="bg-stone-50">
                  <tr className="text-left">
                    <th className="px-5 py-3 font-extrabold text-stone-600">面向</th>
                    <th className="px-5 py-3 font-extrabold text-stone-600">大葉種</th>
                    <th className="px-5 py-3 font-extrabold text-stone-600">小葉種</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-5 py-3 font-extrabold text-stone-800">兒茶素（多酚）</td>
                    <td className="px-5 py-3">較高（苦澀／厚度來源）</td>
                    <td className="px-5 py-3">相對較低（風味更細緻）</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-extrabold text-stone-800">適製性（常見）</td>
                    <td className="px-5 py-3">紅茶系（全發酵）</td>
                    <td className="px-5 py-3">綠茶／包種／烏龍（不發酵～部分發酵）</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-extrabold text-stone-800">台灣主要茶區</td>
                    <td className="px-5 py-3">魚池、埔里等紅茶茶區</td>
                    <td className="px-5 py-3">全台多數茶區</td>
                  </tr>
                </tbody>
              </table>
            </SimpleTable>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">「四大十一小」口訣（便於記憶）</div>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                  <div className="font-extrabold text-rose-900">四個大葉種（紅茶系統）</div>
                  <BulletList>
                    <li>阿薩姆：日治時期由日本人自印度引進。</li>
                    <li>台茶 8 號：單株選拔自阿薩姆群體。</li>
                    <li>台茶 18 號（紅玉）：具薄荷香，種植面積最廣。</li>
                    <li>台茶 21 號（紅韻）：天然雜交品種；亦常提及台茶 23 號（祁韻）[4][5][6]。</li>
                  </BulletList>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="font-extrabold text-emerald-950">十一個小葉種（地方品種＋育成品種）</div>
                  <div className="mt-3 space-y-3 text-sm text-stone-700">
                    <div>
                      <div className="font-extrabold text-stone-900">地方品種（先民引進）</div>
                      <div className="mt-1">青心烏龍、青心大冇、大葉烏龍、硬枝紅心、青心柑仔、鐵觀音、四季春等。</div>
                    </div>
                    <div>
                      <div className="font-extrabold text-stone-900">育成品種（茶改場）</div>
                      <div className="mt-1">台茶 12 號（金萱）、13 號（翠玉）、17 號（白鷺）、20 號（迎香）等 [4][6]。</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="cultivar-03" title="三、主要品種特性與產區分布" icon={MapPin}>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="font-extrabold text-stone-900">1）經典地方品種</div>
              <BulletList>
                <li>
                  <strong>青心烏龍：</strong>台灣種植面積最廣（約佔 61%），適應性強，特別喜好高海拔（海拔越高品質越佳）。文山多作包種；高山多作清香型烏龍；凍頂區可作熟香型烏龍 [7]。
                </li>
                <li>
                  <strong>青心大冇：</strong>主要分布於桃園、新竹、苗栗；現為製作「東方美人茶」的重要原料 [8][6]。
                </li>
                <li>
                  <strong>青心柑仔：</strong>早生種，主要分布於新北三峽；適合製作不發酵綠茶（碧螺春）與蜜香紅茶 [5][8][9]。
                </li>
                <li>
                  <strong>四季春：</strong>主要分布於南投名間；生長強勢、產量高（年可採 6–7 次），商用茶與飲料茶常見 [8][10][11]。
                </li>
                <li>
                  <strong>鐵觀音：</strong>主要分布於台北木柵，亦稱「紅心歪尾桃」，專門製作鐵觀音茶 [8]。
                </li>
                <li>
                  <strong>大葉烏龍：</strong>主要分布於花蓮瑞穗；現多用於製作蜜香紅茶 [8][11]。
                </li>
              </BulletList>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">2）茶改場育成品種（台茶系列）</div>
              <BulletList>
                <li>
                  <strong>台茶 12 號（金萱）：</strong>產量高、易管理，具奶香，適合包種、烏龍與紅茶 [8][11]。
                </li>
                <li>
                  <strong>台茶 13／17／20：</strong>分布於全台，適製性廣，涵蓋部分發酵至全發酵茶 [8]。
                </li>
                <li>
                  <strong>台茶 18 號（紅玉）：</strong>薄荷香、肉桂香具辨識度，國際競爭力高，為目前種植面積最大的紅茶品種 [12]。
                </li>
                <li>
                  <strong>台茶 25 號（紫芽）：</strong>芽葉紫色、花青素高，遇酸易轉紅，具手搖飲應用與景觀潛力；預計 2023 年後推廣 [5][13][14]。
                </li>
              </BulletList>
            </div>
          </Section>

          <Section id="cultivar-04" title="四、台灣紅茶與山茶的發展現況" icon={BookOpen}>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">1）紅茶的多樣化發展</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                早期以日月潭（魚池、埔里）的大葉種為主（阿薩姆、台茶 8、18）。近年台茶 21（紅韻）與 23（祁韻）因花香特性，種植面積逐漸增加 [12]。
              </p>
              <BulletList>
                <li>宜蘭：台茶 12、13 製作紅茶。</li>
                <li>木柵：鐵觀音或金萱製作「韻紅」。</li>
                <li>三峽：青心柑仔製作蜜香紅茶。</li>
                <li>桃竹苗：青心大冇做完東方美人後，以空檔製作「桃映紅茶」。</li>
                <li>高山與花蓮：青心烏龍、金萱與大葉烏龍做蜜香紅茶，市場價格高 [9]。</li>
              </BulletList>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="font-extrabold text-stone-900">2）台灣原生山茶</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                台灣山茶主要分布於台東永康山、高雄六龜、嘉義阿里山、南投眉原山、鳳凰山及德化社等地。多為實生苗，樹型差異大；除黃茶與黑茶較少製作外，綠茶、白茶、青茶、紅茶皆可製作，風味獨特，採摘與製作方式因地制宜 [13]。
              </p>
            </div>
          </Section>

          <Section id="cultivar-05" title="五、茶樹栽培環境與命名歷史" icon={Leaf}>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">1）栽培環境要素</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                台灣茶區從低海拔到 2500 公尺高山皆有分布。茶樹喜好溫暖潮濕，不耐強光；且在酸性土壤中更利於養分溶解與吸收 [10]。
              </p>
              <SimpleTable title="環境條件（概覽）">
                <table className="min-w-full text-sm text-stone-700">
                  <tbody className="divide-y divide-stone-200 bg-white">
                    <tr>
                      <td className="px-5 py-3 font-extrabold text-stone-800 bg-stone-50 whitespace-nowrap">氣溫</td>
                      <td className="px-5 py-3">平均 18–25°C</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-extrabold text-stone-800 bg-stone-50 whitespace-nowrap">雨量</td>
                      <td className="px-5 py-3">年雨量約 1500–3000 mm</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-extrabold text-stone-800 bg-stone-50 whitespace-nowrap">土壤</td>
                      <td className="px-5 py-3">偏好酸性土壤（利於養分吸收）</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-extrabold text-stone-800 bg-stone-50 whitespace-nowrap">光照</td>
                      <td className="px-5 py-3">喜溫暖潮濕，不耐強光</td>
                    </tr>
                  </tbody>
                </table>
              </SimpleTable>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="font-extrabold text-stone-900">2）台茶品種的命名演變</div>
              <BulletList>
                <li>
                  <strong>地方品種命名：</strong>清朝時期先民多以種子引進，因遺傳變異，農民會觀察優良單株並命名（如青心、軟枝烏龍等）。種植量大者稱大品種，量少者稱小品種 [15]。
                </li>
                <li>
                  <strong>茶改場編號（台茶 1–25 號）：</strong>早期（1–11）偏向綠茶與紅茶；12 號後市場轉向包種與烏龍；育種時程由早期 35 年縮短至 21 年，目標更全方位（綠／紅／烏龍）[16][12]。
                </li>
                <li>
                  <strong>品種權：</strong>如台茶 19、22 等受品種權保護，需向授權育苗廠商購買，不得私自扦插繁殖。
                </li>
              </BulletList>
            </div>
          </Section>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-sm font-extrabold text-stone-900">註記</div>
            <div className="mt-2 text-sm text-stone-600 leading-relaxed">
              本文保留來源標號（如 [1][2]）以便後續補上完整參考文獻清單；如你提供參考來源，我可以把文末整理成正式引用格式。
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

