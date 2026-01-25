import React from 'react';
import { Feather, Leaf, Mountain } from 'lucide-react';
import SectionCard from '../../components/SectionCard';
import TaiwanTeaMap from '../../components/TaiwanTeaMap';

export default function OolongRegions({ topOffsetPx, activeHref = null }) {
  const scrollMarginTop = Number.isFinite(topOffsetPx) ? topOffsetPx : undefined;
  const normalizedHref = String(activeHref ?? '').startsWith('#oolong-') ? String(activeHref) : null;

  const CHAPTERS = {
    '#oolong-minbei': {
      id: 'oolong-minbei',
      title: '閩北烏龍',
      icon: Mountain,
    },
    '#oolong-minnan': {
      id: 'oolong-minnan',
      title: '閩南烏龍',
      icon: Feather,
    },
    '#oolong-guangdong': {
      id: 'oolong-guangdong',
      title: '廣東烏龍',
      icon: Mountain,
    },
    '#oolong-taiwan': {
      id: 'oolong-taiwan',
      title: '台灣烏龍',
      icon: Leaf,
    },
  };

  const chapter = normalizedHref ? CHAPTERS[normalizedHref] : null;

  if (!chapter) return null;

  const rockTeaTypes = ['大紅袍', '肉桂', '武夷水仙', '武夷名叢', '武夷奇種'];

  const rockTeaFamous = ['鐵羅漢', '水金龜', '白雞冠', '半天妖'];

  const rockTeaAromas = [
    {
      number: '1.',
      name: '大紅袍',
      subtitle: '王者之香的複合交響',
      content:
        '純種大紅袍以蜜桃香 + 蘭花香為基底，隨山場不同可演化出焦糖香、粽葉香、奶油香等層次。拼配大紅袍則通過水仙的醇厚、肉桂的辛銳、名叢的奇韻進行香氣重構，頂級拼配茶甚至能呈現乳香、檀香、松煙香的立體交響。品鑑時需注意：優質大紅袍香氣落水，茶湯含香度高，第八泡仍有清晰桂皮韻，尾調帶薄荷涼感。',
    },
    {
      number: '2.',
      name: '鐵羅漢',
      subtitle: '藥香中的岩骨錚錚',
      content:
        '其當歸藥香源於茶樹內含的萜烯類化合物，與武夷山紅礫岩土壤中的礦物質結合，形成鐵銹感 + 陳香的獨特風味。老叢鐵羅漢因樹齡增長，會衍生出苔蘚香、木質香，茶湯入口微苦但回甘迅猛，喉韻深邃如岩骨壓舌。',
    },
    {
      number: '3.',
      name: '水金龜',
      subtitle: '冷香清韻的梅花意象',
      content:
        '生長於牛欄坑半崖的水金龜，受山洞陰涼小氣候影響，形成梅花冷香 + 青梅果酸的清雅特質。其香氣如寒梅映雪，初聞清冽，細品則有臘梅蜜甜隱於湯中，與橙黃透亮的湯色交相輝映，被茶人譽為「水中君子」。',
    },
    {
      number: '4.',
      name: '白雞冠',
      subtitle: '玉米須香的鮮爽革命',
      content:
        '作為白化變異品種，白雞冠的玉米須甜香來自高含量的游離氨基酸（比普通岩茶高 30%），沖泡後茶湯呈現雞湯鮮 + 粽葉香，葉底乳白如玉，是岩茶中唯一具有「冷泡鮮爽感」的品種。',
    },
    {
      number: '5.',
      name: '肉桂',
      subtitle: '桂皮香的味覺衝擊',
      content:
        '其標誌性的桂皮辛辣香由肉桂醛主導，馬頭岩肉桂常帶蜜桃香，牛欄坑肉桂則多出乳香，慧苑坑肉桂暗藏木質香。優質肉桂需達到「香不過水」的境界：茶湯含香度高，第八泡仍有清晰桂皮韻，尾調帶薄荷涼感。',
    },
    {
      number: '6.',
      name: '水仙',
      subtitle: '蘭花香的醇厚基底',
      content:
        '水仙的蘭花香分為三個層級：普通水仙為蘭草香，高叢水仙（樹齡 30 年以上）呈現蘭花香 + 粽葉香，老叢水仙（樹齡 60 年以上）則演化出青苔香 + 糯米香。品鑑時需關注其湯感的「糯」與「滑」，優質水仙的茶湯可在舌面形成膠質感。',
    },
    {
      number: '7.',
      name: '半天妖',
      subtitle: '野蜜香的山場密碼',
      content:
        '生長於三花峰崖壁的半天妖，因獨特微氣候形成野蜂蜜香 + 枞味，其香氣如空谷幽蘭與蜂巢蜜的融合，隨沖泡次數變化：前三泡蜜甜主導，四至六泡木質香浮現，七泡後薄荷涼感漸顯。山場氣息濃郁者，還會帶有岩石礦物感，被老茶客視為「岩韻教科書」。',
    },
    {
      number: '9.',
      name: '黃觀音',
      subtitle: '透天香的科技之作',
      content:
        '通過鐵觀音與黃旦雜交選育的黃觀音，攜帶透天香基因，干茶即散發梔子花 + 奶油香，沖泡後香氣穿透性極強，可在 3 米外清晰感知。其香氣雖高揚，但需注意：部分低山場黃觀音易出現香氣浮於表面、湯感單薄的問題，優質黃觀音應做到「香溶於水」。',
    },
    {
      number: '10.',
      name: '金鑰匙',
      subtitle: '杏仁奶香的溫潤哲思',
      content:
        '生長於慧苑坑的金鑰匙，在紅壤與腐殖土的滋養下，形成杏仁香 + 奶香的獨特組合，茶湯入口如含化杏仁糖，尾調帶有薄荷清涼與岩骨微澀。其香氣風格內斂含蓄，恰似道家「大巧若拙」的哲學表達，是岩茶中難得的「文人茶」。',
    },
  ];

  return (
    <SectionCard id={chapter.id} scrollMarginTop={scrollMarginTop} title={chapter.title} icon={chapter.icon}>
      {chapter.id === 'oolong-minbei' ? (
        <div className="space-y-8 text-stone-700">
          {/* 武夷岩茶產區地理劃分 */}
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">
            <h3 className="text-2xl font-extrabold text-stone-900">武夷岩茶的定義與核心價值</h3>
            <p className="mt-4 leading-relaxed">
              武夷岩茶作為閩北烏龍的代表，在茶文化史上具有承先啟後的戰略地位，其不僅是台灣條型烏龍茶的始祖，更憑藉獨特的「岩韻」在六大茶類中獨樹一幟。所謂「岩岩有茶，岩骨花香」，其核心價值在於茶樹與武夷山獨特的丹霞地貌之間形成的生命共感。
            </p>
            <p className="mt-3 leading-relaxed">
              「岩韻」的形成絕非偶然，而是地理環境、土壤礦質與微氣候高度統合後的產物。理解產區劃分，不僅是為了區分市場價值，更是為了深入探討生長環境如何決定茶葉的感官品質。
            </p>
          </div>

          {/* 生態基石 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">生態基石：武夷岩茶的自然生長環境</h3>
            <p className="mt-4 leading-relaxed">
              武夷岩茶的優異特質源於其極其特殊的微氣候環境。這種環境並非單一要素，而是地質演變與氣候條件交織而成的複雜生態系統。
            </p>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">氣候與水文綜合評估</h4>
            <p className="mt-3 leading-relaxed">
              武夷山區域屬熱帶海洋性季風氣候，其核心生長條件如下：
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="leading-relaxed">
                <strong>日照與氣溫：</strong>年平均氣溫 17.9°C，每年平均日照時間僅約 120 天，無霜期長達 272 天。這種低日照、高溫度的環境有利於茶樹光合產物的緩慢積累。
              </li>
              <li className="leading-relaxed">
                <strong>水分供應：</strong>年降水量達 1906 毫米，山泉水全山流淌，為茶樹提供了極佳的水分調節。
              </li>
            </ul>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">火山岩地質與正岩土壤</h4>
            <p className="mt-3 leading-relaxed">
              武夷山正岩區的地質基礎源於 8000 萬年前形成的火山岩，其經長年風化後滲入土壤。這種特殊的「正岩土壤」是造就「岩韻」中「岩骨」特徵的物理根源。其物理與化學性質列表如下：
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="leading-relaxed">
                <strong>物理組成：</strong>含沙礫量高，比例介於 24.83% 至 29.47% 之間。
              </li>
              <li className="leading-relaxed">
                <strong>孔隙與滲透性：</strong>土壤疏鬆，孔隙度高達約 50%，通氣性與排水性能極佳。
              </li>
              <li className="leading-relaxed">
                <strong>礦質元素：</strong>富含鉀（K）、錳（Mn）等微量元素。
              </li>
              <li className="leading-relaxed">
                <strong>酸鹼度：</strong>酸度適中，多屬多礫質壤土，極利於茶樹根系發育與礦物吸收。
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-sm text-stone-600">
              這些土壤特質，尤其是鉀與錳的含量，直接轉化為茶葉的生化特徵，奠定了「岩韻」的品質基礎，並成為傳統地理分級的首要依據。
            </p>
          </div>

          {/* 傳統地理劃分 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">傳統地理劃分</h3>
            <p className="mt-4 leading-relaxed">
              傳統劃分法根據地形起伏、母岩風化程度及土壤物理成分，將武夷山茶園進行直觀且嚴謹的分層。
            </p>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border-l-4 border-emerald-500 bg-white p-5">
                <h4 className="text-lg font-extrabold text-stone-900">正岩產地（岩上茶/大岩茶）</h4>
                <p className="mt-2 leading-relaxed">
                  此區域為武夷岩茶的核心保護區，範圍約 72 平方公里。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="leading-relaxed">
                    <strong>地理範圍：</strong>以九曲溪為界分為南、北兩山。核心包含「三坑、兩窠、兩澗」（牛欄坑、慧苑坑、大坑口、九龍窠、竹窠、流香澗、悟源澗）及內外鬼洞。
                  </li>
                  <li className="leading-relaxed">
                    <strong>環境優勢：</strong>岩谷陡崖提供天然避風與遮蔭，夏季日照短、冬季阻隔冷風。土壤多為厚層的風化岩壤，岩韻最足。
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border-l-4 border-amber-500 bg-white p-5">
                <h4 className="text-lg font-extrabold text-stone-900">半岩產地（岩下茶）</h4>
                <p className="mt-2 leading-relaxed">
                  指生長在岩山底部、邊緣及周邊丘陵地帶的茶園，位於丹霞地貌與河谷地貌的過渡區。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="leading-relaxed">
                    <strong>土壤特徵：</strong>土層較薄，屬紅色矽鋁質土，鋁含量高、鉀含量少，且酸度較高。
                  </li>
                  <li className="leading-relaxed">
                    <strong>代表山場：</strong>青獅岩、碧石岩、燕子窟、蓮花峰、小武夷等。
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border-l-4 border-blue-500 bg-white p-5">
                <h4 className="text-lg font-extrabold text-stone-900">洲茶產區</h4>
                <p className="mt-2 leading-relaxed">
                  分布於上述岩區之外的黃壤土茶地及河洲沖積土帶。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="leading-relaxed">
                    <strong>土壤特徵：</strong>包含九曲溪南岸、崇陽溪東岸、黃柏溪北岸的沖積河岸。崖壁腳谷地則分布有棕壤類土壤。
                  </li>
                  <li className="leading-relaxed">
                    <strong>品質特徵：</strong>鈣含量高，黏粒較多，雖保肥力強但透氣排水差。pH 值與微量元素的顯著差異，導致其生化成分與正岩茶有實質區別。
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border-l-4 border-stone-400 bg-white p-5">
                <h4 className="text-lg font-extrabold text-stone-900">外山茶</h4>
                <p className="mt-2 leading-relaxed">
                  指武夷山市行政區範圍之外的產地（如建陽、政和、邵武）。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="leading-relaxed">
                    <strong>環境落差：</strong>土壤多為紅壤與黃壤，缺乏丹霞地貌的特殊微氣候。雖沿用岩茶工藝加工，但「岩韻」特徵缺失。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 現代標準劃分 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">現代標準劃分：名岩區與丹岩區</h3>
            <p className="mt-4 leading-relaxed">
              2002 年 3 月，武夷岩茶正式列為國家地理標誌產品，並實施《武夷岩茶》國家標準（GB/T 18745-2002），以加強產地保護。
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <h4 className="text-lg font-extrabold text-emerald-900">名岩區</h4>
                <p className="mt-2 leading-relaxed text-stone-700">
                  涵蓋了傳統的正岩與半岩範圍。其邊界明確界定為：崇陽溪以西、黃柏溪以南、南星公路以北的武夷山風景名勝區內。
                </p>
                <p className="mt-3 leading-relaxed text-stone-700">
                  <strong>品質特徵：</strong>條索粗壯緊結，香氣馥郁持久，杯底香明顯，滋味醇厚，具備卓越的「岩骨花香」。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h4 className="text-lg font-extrabold text-stone-900">丹岩區</h4>
                <p className="mt-2 leading-relaxed text-stone-700">
                  指武夷山市行政轄區內（2798 平方公里），除上述風景區（約 70 平方公里）以外的所有區域。
                </p>
                <p className="mt-3 leading-relaxed text-stone-700">
                  <strong>地形影響：</strong>多屬高山、丘陵與平地。因地形高爽易受旱，土壤質地與含水能力不如名岩區，導致生長出的茶葉在品質等級與口感深度上略遜一籌。
                </p>
              </div>
            </div>
          </div>

          {/* 歷代文獻記載 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">歷代文獻中的產區權威記載</h3>
            <p className="mt-4 leading-relaxed">
              透過對清代至民國文獻的梳理，可確證武夷岩茶產區劃分的歷史連貫性，並見證「中岩」等概念的演變。
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">清代評價</div>
                <p className="mt-2 leading-relaxed text-sm">
                  陸廷燦《續茶經·茶之出》提出：「武夷茶在山上者為岩茶，水邊者為洲茶。岩茶為上，洲茶次之。」並確立「北山者為上」的權威地位。
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">民國 23 年（1934 年）</div>
                <p className="mt-2 leading-relaxed text-sm">
                  《武夷岩茶之生產製造及運銷》將茶園分為「青獅系」（山之西）與「企山系」（東北麓）。此時期將山坑岩壑所產稱為「大岩茶」（如三坑）；而「中岩茶」則指廣靈岩、寶石岩、玉華岩、佛國岩等溪坑所產；山腳砂洲則為洲茶。
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">1990 年代</div>
                <p className="mt-2 leading-relaxed text-sm">
                  《福建烏龍》界定天心岩、慧苑岩為正岩；碧石、青獅為半岩；海拔低於 200 米的溪旁平地為洲茶。
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">2008 年</div>
                <p className="mt-2 leading-relaxed text-sm">
                  《武夷岩名山靈芽》重新定義風景區內分布：正岩指「三坑兩澗」；「中岩」則指三坑兩澗之外、九曲溪一帶的岩山；半岩指丘陵區；洲茶指沙地。
                </p>
              </div>
            </div>
          </div>

          {/* 核心山場解析 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">核心山場解析</h3>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5">
                <h4 className="text-lg font-extrabold text-emerald-900">慧苑坑：名茶大觀園與基因庫</h4>
                <p className="mt-3 leading-relaxed">
                  作為「三坑兩澗」中範圍最大的山場，慧苑坑位於九曲溪以北，其微氣候特徵為「夏短、秋長、冬短」，冬季溫暖濕潤且早春少霜，極利於茶芽在秋冬季的生長。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="leading-relaxed">
                    <strong>精微山場：</strong>區域內包含資深老饕推崇的「竹窠」、「古井」、「楓樹窠」與「盧岫」等次級小山場。
                  </li>
                  <li className="leading-relaxed">
                    <strong>品種價值：</strong>其中的「鬼洞」被譽為武夷茶基因庫，歷史上名叢多達八百餘種，是名副其實的「名茶大觀園」。
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5">
                <h4 className="text-lg font-extrabold text-amber-900">蓮花峰：佛教聖地與風化殘積土</h4>
                <p className="mt-3 leading-relaxed">
                  海拔約 536 米（相對高度 314 米），屬武夷山三十六名峰之一。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="leading-relaxed">
                    <strong>土壤特性：</strong>擁有大量鬆散、易風化的沉積岩，保留了豐富的沉積岩風化殘積土。此類土壤酸性強，極契合茶樹生長需求。
                  </li>
                  <li className="leading-relaxed">
                    <strong>環境優勢：</strong>結合高海拔、多雲霧與充足光照，使其岩茶品質優異。此外，山中妙蓮古寺的人文底蘊亦賦予其深厚的文化特質。
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
                <h4 className="text-lg font-extrabold text-blue-900">佛國岩：縱橫紋理與生態水源</h4>
                <p className="mt-3 leading-relaxed">
                  位於武夷山北側，岩體南北延伸三百多米，北連「彌陀岩」。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="leading-relaxed">
                    <strong>地貌特徵：</strong>兼具平緩丘陵與丹霞地貌，地域開闊，日照充裕，土壤以酸性紅壤為主。
                  </li>
                  <li className="leading-relaxed">
                    <strong>水文特點：</strong>其後方山谷「出水坑」為佛國岩提供了穩定的水源，構建了優質的生態微循環。
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-sm text-stone-600">
              總結而言，武夷岩茶的產區劃分是基於地質構造、土壤成分與微氣候的嚴謹科學鑑定。從傳統的四級劃分到現代名岩標準，核心始終不脫離對「岩韻」真諦的保護。
            </p>
          </div>

          {/* 原有內容：品種香氣介紹 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">武夷岩茶十大品種香</div>
            <h3 className="mt-3 text-2xl font-extrabold text-stone-900">品種香氣特徵</h3>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h4 className="text-xl font-extrabold text-stone-900">岩茶品種分類</h4>
            <p className="mt-3 leading-relaxed">
              根據國家頒布的武夷岩茶標準，可以分為五大類，依次是：
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 font-semibold text-stone-800">
              {rockTeaTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed">
              （其中名叢主要是四大名叢，分別是{rockTeaFamous.join('、')}）
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {rockTeaAromas.map((item) => (
              <div key={item.number} className="rounded-2xl border border-stone-200 bg-white p-6">
                <div className="text-sm font-extrabold text-stone-500">{item.number}</div>
                <h4 className="mt-2 text-xl font-extrabold text-stone-900">{item.name}</h4>
                <div className="mt-2 inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-700">
                  {item.subtitle}
                </div>
                <p className="mt-4 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : chapter.id === 'oolong-taiwan' ? (
        <TaiwanTeaMap />
      ) : (
        <p className="leading-relaxed text-stone-700">內容建置中。</p>
      )}
    </SectionCard>
  );
}
