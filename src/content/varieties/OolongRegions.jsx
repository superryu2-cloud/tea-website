import React, { useState } from 'react';
import { Feather, Leaf, Mountain } from 'lucide-react';
import SectionCard from '../../components/SectionCard';
import ImageModal from '../../components/ImageModal';

const MINBEI_IMAGES = [
  { src: '/images/wuyi_danxia_peaks.png', alt: '武夷山丹霞奇峰雲海' },
  { src: '/images/wuyi_zhengyan_gorge.png', alt: '正岩產區峽谷' },
  { src: '/images/wuyi_volcanic_soil.png', alt: '火山岩風化土壤' },
  { src: '/images/wuyi_jiuqu_river.png', alt: '九曲溪山水' },
  { src: '/images/wuyi_huiyuan_garden.png', alt: '慧苑坑雲霧茶園' },
  { src: '/images/wuyi_yancha_closeup.png', alt: '岩茶品茗' },
];

const MINNAN_IMAGES = [
  { src: '/images/anxi_tea_terraces.png', alt: '安溪茶山雲海梯田' },
  { src: '/images/anxi_tieguanyin_garden.png', alt: '內安溪鐵觀音高山茶園' },
  { src: '/images/oolong_shaking_process.png', alt: '搖青做青工藝' },
  { src: '/images/tieguanyin_ball_tea.png', alt: '鐵觀音球型茶葉與茶湯' },
  { src: '/images/anxi_ancient_teatree.png', alt: '安溪古茶樹' },
  { src: '/images/zhangping_shuixian_cake.png', alt: '漳平水仙茶餅' },
];

const GUANGDONG_IMAGES = [
  { src: '/images/fenghuang_mountain.png', alt: '鳳凰山雲海奇峰' },
  { src: '/images/dancong_ancient_tree.png', alt: '宋種古茶樹' },
  { src: '/images/dancong_processing.png', alt: '單叢製茶工藝' },
  { src: '/images/dancong_tea_leaves.png', alt: '鳳凰單叢茶葉與茶湯' },
  { src: '/images/chaozhou_gongfu_tea.png', alt: '潮州工夫茶' },
  { src: '/images/dancong_aroma_flowers.png', alt: '單叢香型花卉' },
];

const TAIWAN_IMAGES = [
  { src: '/images/taiwan_mountain_tea.png', alt: '臺灣高山茶園雲海' },
  { src: '/images/dongding_oolong_1771259430131.png', alt: '凍頂烏龍茶與炭焙' },
  { src: '/images/oriental_beauty_tea_1771259446040.png', alt: '東方美人茶與小綠葉蟬' },
  { src: '/images/muzha_tieguanyin_1771259475863.png', alt: '木柵鐵觀音炭焙' },
  { src: '/images/taiwan_tea_processing_1771259507623.png', alt: '布球揉捻製茶工藝' },
  { src: '/images/lishan_dayuling_peaks_1771259526650.png', alt: '梨山大禹嶺高山茶區' },
];

function ClickableImage({ src, alt, className = '' }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full object-cover ${className}`}
        onClick={() => setOpen(true)}
      />
      <ImageModal isOpen={open} onClose={() => setOpen(false)} src={src} alt={alt} />
    </>
  );
}

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
        <div className="space-y-8 font-sans text-stone-700">
          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden">
            <ClickableImage src={MINBEI_IMAGES[0].src} alt={MINBEI_IMAGES[0].alt} className="h-[320px] md:h-[400px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-white drop-shadow-lg tracking-wide">武夷岩茶 · 岩骨花香</h2>
              <p className="mt-2 text-[17px] text-white/80 drop-shadow-md">閩北烏龍的巔峰，丹霞地貌與茶樹的生命共感</p>
            </div>
          </div>

          {/* 武夷岩茶產區地理劃分 */}
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">
            <h3 className="text-[24px] font-extrabold text-stone-900">武夷岩茶的定義與核心價值</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              武夷岩茶作為閩北烏龍的代表，在茶文化史上具有承先啟後的戰略地位，其不僅是台灣條型烏龍茶的始祖，更憑藉獨特的「岩韻」在六大茶類中獨樹一幟。所謂「岩岩有茶，岩骨花香」，其核心價值在於茶樹與武夷山獨特的丹霞地貌之間形成的生命共感。
            </p>
            <p className="mt-3 text-[17px] leading-relaxed">
              「岩韻」的形成絕非偶然，而是地理環境、土壤礦質與微氣候高度統合後的產物。理解產區劃分，不僅是為了區分市場價值，更是為了深入探討生長環境如何決定茶葉的感官品質。
            </p>
          </div>

          {/* 生態基石 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">生態基石：武夷岩茶的自然生長環境</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              武夷岩茶的優異特質源於其極其特殊的微氣候環境。這種環境並非單一要素，而是地質演變與氣候條件交織而成的複雜生態系統。
            </p>

            {/* 土壤圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={MINBEI_IMAGES[2].src} alt={MINBEI_IMAGES[2].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <h4 className="mt-6 text-[20px] font-extrabold text-stone-900">氣候與水文綜合評估</h4>
            <p className="mt-3 text-[17px] leading-relaxed">
              武夷山區域屬熱帶海洋性季風氣候，其核心生長條件如下：
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="text-[17px] leading-relaxed">
                <strong>日照與氣溫：</strong>年平均氣溫 17.9°C，每年平均日照時間僅約 120 天，無霜期長達 272 天。這種低日照、高溫度的環境有利於茶樹光合產物的緩慢積累。
              </li>
              <li className="text-[17px] leading-relaxed">
                <strong>水分供應：</strong>年降水量達 1906 毫米，山泉水全山流淌，為茶樹提供了極佳的水分調節。
              </li>
            </ul>

            <h4 className="mt-6 text-[20px] font-extrabold text-stone-900">火山岩地質與正岩土壤</h4>
            <p className="mt-3 text-[17px] leading-relaxed">
              武夷山正岩區的地質基礎源於 8000 萬年前形成的火山岩，其經長年風化後滲入土壤。這種特殊的「正岩土壤」是造就「岩韻」中「岩骨」特徵的物理根源。其物理與化學性質列表如下：
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="text-[17px] leading-relaxed">
                <strong>物理組成：</strong>含沙礫量高，比例介於 24.83% 至 29.47% 之間。
              </li>
              <li className="text-[17px] leading-relaxed">
                <strong>孔隙與滲透性：</strong>土壤疏鬆，孔隙度高達約 50%，通氣性與排水性能極佳。
              </li>
              <li className="text-[17px] leading-relaxed">
                <strong>礦質元素：</strong>富含鉀（K）、錳（Mn）等微量元素。
              </li>
              <li className="text-[17px] leading-relaxed">
                <strong>酸鹼度：</strong>酸度適中，多屬多礫質壤土，極利於茶樹根系發育與礦物吸收。
              </li>
            </ul>
            <p className="mt-3 text-[17px] leading-relaxed text-stone-600">
              這些土壤特質，尤其是鉀與錳的含量，直接轉化為茶葉的生化特徵，奠定了「岩韻」的品質基礎，並成為傳統地理分級的首要依據。
            </p>
          </div>

          {/* 傳統地理劃分 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">傳統地理劃分</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              傳統劃分法根據地形起伏、母岩風化程度及土壤物理成分，將武夷山茶園進行直觀且嚴謹的分層。
            </p>

            {/* 正岩峽谷圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={MINBEI_IMAGES[1].src} alt={MINBEI_IMAGES[1].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border-l-4 border-emerald-500 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">正岩產地（岩上茶/大岩茶）</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
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
                <h4 className="text-[19px] font-extrabold text-stone-900">半岩產地（岩下茶）</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
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
                <h4 className="text-[19px] font-extrabold text-stone-900">洲茶產區</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
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
                <h4 className="text-[19px] font-extrabold text-stone-900">外山茶</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
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
            <h3 className="text-[24px] font-extrabold text-stone-900">現代標準劃分：名岩區與丹岩區</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              2002 年 3 月，武夷岩茶正式列為國家地理標誌產品，並實施《武夷岩茶》國家標準（GB/T 18745-2002），以加強產地保護。
            </p>

            {/* 九曲溪圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={MINBEI_IMAGES[3].src} alt={MINBEI_IMAGES[3].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <h4 className="text-[19px] font-extrabold text-emerald-900">名岩區</h4>
                <p className="mt-2 text-[17px] leading-relaxed text-stone-700">
                  涵蓋了傳統的正岩與半岩範圍。其邊界明確界定為：崇陽溪以西、黃柏溪以南、南星公路以北的武夷山風景名勝區內。
                </p>
                <p className="mt-3 text-[17px] leading-relaxed text-stone-700">
                  <strong>品質特徵：</strong>條索粗壯緊結，香氣馥郁持久，杯底香明顯，滋味醇厚，具備卓越的「岩骨花香」。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">丹岩區</h4>
                <p className="mt-2 text-[17px] leading-relaxed text-stone-700">
                  指武夷山市行政轄區內（2798 平方公里），除上述風景區（約 70 平方公里）以外的所有區域。
                </p>
                <p className="mt-3 text-[17px] leading-relaxed text-stone-700">
                  <strong>地形影響：</strong>多屬高山、丘陵與平地。因地形高爽易受旱，土壤質地與含水能力不如名岩區，導致生長出的茶葉在品質等級與口感深度上略遜一籌。
                </p>
              </div>
            </div>
          </div>

          {/* 歷代文獻記載 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">歷代文獻中的產區權威記載</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              透過對清代至民國文獻的梳理，可確證武夷岩茶產區劃分的歷史連貫性，並見證「中岩」等概念的演變。
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">清代評價</div>
                <p className="mt-2 leading-relaxed text-[17px]">
                  陸廷燦《續茶經·茶之出》提出：「武夷茶在山上者為岩茶，水邊者為洲茶。岩茶為上，洲茶次之。」並確立「北山者為上」的權威地位。
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">民國 23 年（1934 年）</div>
                <p className="mt-2 leading-relaxed text-[17px]">
                  《武夷岩茶之生產製造及運銷》將茶園分為「青獅系」（山之西）與「企山系」（東北麓）。此時期將山坑岩壑所產稱為「大岩茶」（如三坑）；而「中岩茶」則指廣靈岩、寶石岩、玉華岩、佛國岩等溪坑所產；山腳砂洲則為洲茶。
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">1990 年代</div>
                <p className="mt-2 leading-relaxed text-[17px]">
                  《福建烏龍》界定天心岩、慧苑岩為正岩；碧石、青獅為半岩；海拔低於 200 米的溪旁平地為洲茶。
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">2008 年</div>
                <p className="mt-2 leading-relaxed text-[17px]">
                  《武夷岩名山靈芽》重新定義風景區內分布：正岩指「三坑兩澗」；「中岩」則指三坑兩澗之外、九曲溪一帶的岩山；半岩指丘陵區；洲茶指沙地。
                </p>
              </div>
            </div>
          </div>

          {/* 核心山場解析 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">核心山場解析</h3>

            {/* 慧苑坑雲霧茶園圖 */}
            <div className="mt-4 rounded-xl overflow-hidden">
              <ClickableImage src={MINBEI_IMAGES[4].src} alt={MINBEI_IMAGES[4].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5">
                <h4 className="text-[19px] font-extrabold text-emerald-900">慧苑坑：名茶大觀園與基因庫</h4>
                <p className="mt-3 text-[17px] leading-relaxed">
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
                <h4 className="text-[19px] font-extrabold text-amber-900">蓮花峰：佛教聖地與風化殘積土</h4>
                <p className="mt-3 text-[17px] leading-relaxed">
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
                <h4 className="text-[19px] font-extrabold text-blue-900">佛國岩：縱橫紋理與生態水源</h4>
                <p className="mt-3 text-[17px] leading-relaxed">
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

            <p className="mt-6 leading-relaxed text-[17px] text-stone-600">
              總結而言，武夷岩茶的產區劃分是基於地質構造、土壤成分與微氣候的嚴謹科學鑑定。從傳統的四級劃分到現代名岩標準，核心始終不脫離對「岩韻」真諦的保護。
            </p>
          </div>

          {/* 原有內容：品種香氣介紹 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <div className="text-sm font-extrabold tracking-widest text-stone-500">武夷岩茶十大品種香</div>
            <h3 className="mt-3 text-[24px] font-extrabold text-stone-900">品種香氣特徵</h3>

            {/* 岩茶品茗圖 */}
            <div className="mt-4 rounded-xl overflow-hidden">
              <ClickableImage src={MINBEI_IMAGES[5].src} alt={MINBEI_IMAGES[5].alt} className="h-[240px] md:h-[300px]" />
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h4 className="text-[20px] font-extrabold text-stone-900">岩茶品種分類</h4>
            <p className="mt-3 text-[17px] leading-relaxed">
              根據國家頒布的武夷岩茶標準，可以分為五大類，依次是：
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 font-semibold text-[17px] text-stone-800">
              {rockTeaTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-[17px] leading-relaxed">
              （其中名叢主要是四大名叢，分別是{rockTeaFamous.join('、')}）
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {rockTeaAromas.map((item) => (
              <div key={item.number} className="rounded-2xl border border-stone-200 bg-white p-6">
                <div className="text-base font-extrabold text-stone-500">{item.number}</div>
                <h4 className="mt-2 text-[20px] font-extrabold text-stone-900">{item.name}</h4>
                <div className="mt-2 inline-flex rounded-full bg-stone-100 px-3 py-1 text-sm font-bold text-stone-700">
                  {item.subtitle}
                </div>
                <p className="mt-4 text-[17px] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : chapter.id === 'oolong-minnan' ? (
        <div className="space-y-8 font-sans text-stone-700">
          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden">
            <ClickableImage src={MINNAN_IMAGES[0].src} alt={MINNAN_IMAGES[0].alt} className="h-[320px] md:h-[400px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-white drop-shadow-lg tracking-wide">閩南烏龍 · 觀音韻</h2>
              <p className="mt-2 text-[17px] text-white/80 drop-shadow-md">鐵觀音故鄉，半發酵工藝的極致典範</p>
            </div>
          </div>

          {/* 1. 歷史脈絡與核心地位 */}
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">
            <h3 className="text-[24px] font-extrabold text-stone-900">閩南烏龍的歷史脈絡與核心地位</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              閩南烏龍茶是中國烏龍茶的重要分支，主要產於福建省南部，以安溪鐵觀音為核心代表。安溪縣古稱清溪，產茶歷史始於唐末，興於明清，至今已逾千年。清朝乾隆年間，鐵觀音茶樹被發現於安溪西坪鎮，其製茶工藝被公認為「半發酵」茶的典範，在中國茶文化史上佔據無可替代的地位。
            </p>
            <p className="mt-3 text-[17px] leading-relaxed">
              閩南烏龍茶的核心美學概念為「觀音韻」——由鐵觀音品種與特定工藝所呈現的蘭花香、順滑口感與悠然回甘等綜合感官體驗。這一概念與武夷岩茶的「岩韻」遙相呼應，在烏龍茶品鑑體系中佔據核心位置。
            </p>
            <p className="mt-3 text-[17px] leading-relaxed">
              19 世紀時，鐵觀音種苗引入台灣，在木柵、石門等地落地生根，對台灣烏龍茶產業影響深遠。2022 年，「中國福建安溪鐵觀音茶文化系統」正式獲聯合國糧農組織（FAO）認定為全球重要農業文化遺產，進一步確立了安溪在世界茶文化中的地標地位。
            </p>
          </div>

          {/* 2. 產區風土 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">產區風土：安溪的自然生態</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              安溪縣位於福建省東南部，泉州市轄下，被譽為「中國茶都」。其山巒疊翠、雲霧繚繞的地形地貌，為茶樹生長提供了得天獨厚的微氣候條件。產區按照地理特徵與海拔高度，可劃分為「內安溪」與「外安溪」兩大板塊。
            </p>

            {/* 茶園圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={MINNAN_IMAGES[1].src} alt={MINNAN_IMAGES[1].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <h4 className="text-[19px] font-extrabold text-emerald-900">內安溪（高海拔核心區）</h4>
                <p className="mt-2 text-[17px] leading-relaxed text-stone-700">
                  位於安溪西部，包括西坪、祥華、感德、長坑、龍涓、劍斗、大坪等鄉鎮。海拔多在 800 公尺以上，群山環繞，氣候溫和濕潤。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="text-[17px] leading-relaxed">
                    <strong>氣候條件：</strong>日照時間短，晝夜溫差大，雲霧繚繞；年降水量 1700～1900 毫米，雨量充沛。
                  </li>
                  <li className="text-[17px] leading-relaxed">
                    <strong>土壤特質：</strong>多為酸性紅壤，pH 值在 4.5～5.6 之間，土層深厚，有機質與礦物質含量高，極利於茶胺酸的積累。
                  </li>
                  <li className="text-[17px] leading-relaxed">
                    <strong>品質表現：</strong>日照短促使苦澀味主導的茶多酚含量偏低，而鮮爽甘甜的胺基酸含量較高，賦予茶葉柔美的「觀音韻」。
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">外安溪（低海拔緩衝區）</h4>
                <p className="mt-2 text-[17px] leading-relaxed text-stone-700">
                  地處縣域東部及交界地帶，海拔較低，日照時間長，溫差變化不大。
                </p>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="text-[17px] leading-relaxed">
                    <strong>土壤特徵：</strong>土層較薄，有機質含量不如內安溪豐富。
                  </li>
                  <li className="text-[17px] leading-relaxed">
                    <strong>品質差異：</strong>茶樹生長快速，但因缺乏高山微氣候的調節，茶葉品質通常不及內安溪產區。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. 核心產區解析 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">核心產區解析</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              內安溪各鄉鎮因海拔、朝向、土壤與微氣候的細微差異，各自孕育出風格鮮明的鐵觀音。以下為最具代表性的產區：
            </p>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border-l-4 border-emerald-500 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">西坪鎮：鐵觀音發源地</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  鐵觀音母樹所在地，是閩南烏龍最重要的歷史起源點。關於鐵觀音的發現有兩大傳說——「魏蔭觀音託夢說」與「王士讓乾隆賜名說」，兩者皆指向西坪。西坪鐵觀音以「傳統正味」聞名，茶湯醇厚、回甘深沉，帶有經典的蘭花香底韻。
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-amber-500 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">祥華鄉：高海拔精品產區</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  祥華地處安溪西北部，平均海拔在 800 公尺以上，雲霧常年不散。此處鐵觀音特色為「味正湯醇」，入口綿柔，回甘悠長，且帶有獨特的「山韻」——一種清幽的高山氣息。
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-blue-500 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">感德鎮：「中國茶葉第一鎮」</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  感德是安溪鐵觀音產量最大的鄉鎮，近年亦成為清香型鐵觀音的主要產地。以「香氣高揚、鮮爽清新」為其風格標籤，尤擅「蘭花香」的表現，深受市場青睞。
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-stone-400 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">長坑、龍涓等產區</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  長坑鄉的玉湖村以出產高品質鐵觀音聞名；龍涓則為新興的大面積種植區。此外，泉州下轄的永春、南安，以及漳州的華安、平和、龍岩的漳平等地，亦為閩南烏龍的重要產區。
                </p>
              </div>
            </div>
          </div>

          {/* 4. 製茶工藝精要 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">製茶工藝精要</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              安溪鐵觀音的製作技藝被公認為所有茶類中最精湛的製茶工藝之一，為半發酵茶工藝的典範。整個製程需經三大階段、十六道工序，全程仰賴製茶師傅「看青做青」與「看天做青」的經驗判斷。
            </p>

            {/* 搖青工藝圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={MINNAN_IMAGES[2].src} alt={MINNAN_IMAGES[2].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <h4 className="mt-6 text-[20px] font-extrabold text-stone-900">初制十道工序</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { step: '1', name: '採摘', desc: '選取一芽二三葉，以春、秋兩季為主，春茶品質最佳。' },
                { step: '2', name: '曬青', desc: '於陽光下萎凋，減少水分、軟化葉片，啟動氧化前驅。' },
                { step: '3', name: '涼青', desc: '移至室內陰涼處攤放，使葉片均勻散失水分。' },
                { step: '4', name: '搖青', desc: '以竹篩反覆搖動茶葉，使葉緣摩擦受損，啟動酶促氧化，形成「綠葉紅鑲邊」。此為形成半發酵特色的關鍵步驟。' },
                { step: '5', name: '炒青（殺青）', desc: '以 200～300°C 高溫鈍化酵素活性，終止發酵，去除青草味並軟化葉片。' },
                { step: '6', name: '揉捻', desc: '趁熱揉捻茶葉，使其初步成形並釋出茶汁。' },
                { step: '7', name: '初烘', desc: '快速烘焙，降低含水量至適宜的塑形水平。' },
                { step: '8', name: '包揉', desc: '以布巾包裹茶葉反覆揉壓，塑造成緊結的球型或半球型外觀，此為閩南烏龍的標誌性工序。' },
                { step: '9', name: '復烘＋復包揉', desc: '反覆交替進行烘焙與包揉，精煉外形與內質。' },
                { step: '10', name: '烘乾', desc: '最終烘焙至含水量 5% 以下，確保品質穩定與儲存壽命。' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 rounded-lg border border-stone-100 bg-stone-50 p-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">{item.step}</span>
                  <div>
                    <div className="text-[17px] font-bold text-stone-900">{item.name}</div>
                    <p className="mt-1 text-[15px] leading-relaxed text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="mt-6 text-[20px] font-extrabold text-stone-900">精制六道工序</h4>
            <p className="mt-3 text-[17px] leading-relaxed">
              初制完成後的毛茶，還需經過<strong>篩分、揀剔、拼堆、烘焙、攤涼、包裝</strong>六道精制工序，方可成為商品茶。其中烘焙環節尤為關鍵——透過不同程度的焙火（輕焙、中焙、重焙），可使茶葉的香氣與風味產生本質性的轉變，這也是區分三大香型的核心工藝手段。
            </p>
          </div>

          {/* 5. 三大香型分類 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">三大香型分類</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              閩南烏龍茶根據發酵程度與烘焙深度的差異，形成三大標誌性香型，各有千秋。
            </p>

            {/* 茶湯圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={MINNAN_IMAGES[3].src} alt={MINNAN_IMAGES[3].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border-l-4 border-green-500 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-green-900">清香型</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  輕度發酵、輕焙火或不焙火。香氣清純高揚，帶淡雅蘭花香或清新草本香。湯色蜜綠或蜜黃，外觀翠綠鮮活，滋味甘醇鮮爽。為近年市場主流，深受年輕消費者喜愛。
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-amber-600 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-amber-900">濃香型</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  發酵程度相對較重，經中度或重度烘焙。香氣馥郁深沉，常帶有炒米香、焦糖香或成熟果香。湯色金黃至橙紅，回甘持久，口感厚重綿實。為傳統正宗的鐵觀音風格。傳統鐵觀音發酵程度常達 40～50%，屬半發酵茶經典。
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-red-800 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-red-900">陳香型</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  經長期貯存的鐵觀音，又稱「老鐵」。2016 年國標正式增列陳年鐵觀音類別。需以良好原料為基礎，經精湛工藝製作，再於適當條件下存放多年。茶湯由橙黃漸轉橙紅，滋味醇厚飽滿、順滑圓柔，苦澀味極低，帶有獨特的陳韻與焙火餘香。
                </p>
              </div>
            </div>
          </div>

          {/* 6. 安溪四大名茶 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">安溪四大名茶</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              安溪不僅是鐵觀音的故鄉，亦孕育了多種優質烏龍茶樹品種。其中「鐵觀音、黃金桂、本山、毛蟹」並稱為安溪四大名茶，各具風韻。
            </p>

            {/* 古茶樹圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={MINNAN_IMAGES[4].src} alt={MINNAN_IMAGES[4].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5">
                <h4 className="text-[20px] font-extrabold text-emerald-900">鐵觀音</h4>
                <div className="mt-1 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">紅心歪尾桃 · 觀音韻</div>
                <p className="mt-3 text-[17px] leading-relaxed">
                  原生品種名「紅心歪尾桃」，葉片呈波浪狀上捲、紅心歪尾為其辨識特徵。優質鐵觀音條索捲曲壯結沉重，外形呈「青蒂綠腹蜻蜓頭」狀，砂綠顯著。沖泡後茶湯琥珀至金黃色，滋味醇厚甘鮮，帶天然蘭花香或桂花香，此即「觀音韻」之精髓。耐沖泡，七泡餘香猶存。
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5">
                <h4 className="text-[20px] font-extrabold text-amber-900">黃金桂</h4>
                <div className="mt-1 inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">一早二香 · 桂花韻</div>
                <p className="mt-3 text-[17px] leading-relaxed">
                  又名黃旦，原產於安溪虎邱美庄村。以「一早二香」著稱——發芽極早、香氣極高。幹茶即散發桂花、梔子花與梨香的混合芬芳，茶湯呈金黃透亮，入口清甜鮮爽，回韻帶有獨特的桂花蜜甜感。
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
                <h4 className="text-[20px] font-extrabold text-blue-900">本山</h4>
                <div className="mt-1 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">鐵觀音近親 · 清純略濃</div>
                <p className="mt-3 text-[17px] leading-relaxed">
                  原產於安溪西坪鎮，與鐵觀音為近親品種，生長勢與適應性均優於鐵觀音。製工精良的本山茶品質可媲美鐵觀音，茶味清純而略帶濃厚感，香氣類似鐵觀音但更為清淡幽雅。因產量穩定、性價比高，亦被稱為「鐵觀音的替身」。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-5">
                <h4 className="text-[20px] font-extrabold text-stone-900">毛蟹</h4>
                <div className="mt-1 inline-flex rounded-full bg-stone-100 px-3 py-1 text-sm font-bold text-stone-700">白毫顯著 · 茉莉花香</div>
                <p className="mt-3 text-[17px] leading-relaxed">
                  原產於安溪大坪鄉，適應性廣、抗逆性強，產量較高。外形條索緊結，嫩葉尾部多白毫，為其命名由來。內質香氣清高，獨具茉莉花香韻，湯色金黃明亮，口感清爽甘潤。
                </p>
              </div>
            </div>
          </div>

          {/* 7. 閩南其他名品 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">閩南其他烏龍名品</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              除安溪四大名茶外，閩南烏龍茶譜系中尚有其他獨具風格的名品，各以其獨特的外形與風味在茶界佔有一席之地。
            </p>

            {/* 漳平水仙茶餅圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={MINNAN_IMAGES[5].src} alt={MINNAN_IMAGES[5].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-amber-200 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-amber-900">永春佛手</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  主產於福建省永春縣的蘇坑、玉斗、錦斗、桂洋等海拔 600～900 公尺的高山鄉鎮。因其葉形似佛手柑，珍貴如金，故得名「金佛手」。永春佛手是福建烏龍茶中風味獨特的名品，以其別致的果香與極耐沖泡的特性深受老茶客喜愛，素有「佛手出永春」之譽。
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-blue-900">漳平水仙</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  產於福建省漳平市雙洋鎮、南洋鄉、新橋鎮等地。漳平水仙是烏龍茶類中<strong>唯一的緊壓茶</strong>，外形呈扁平四方形，以紙包覆，故又稱「水仙茶餅」或「紙包茶」。其製作技藝已被列入聯合國教科文組織非物質文化遺產名錄。產區氣候溫和、光照充足、雨量充沛，為茶樹提供了優越的生長條件。茶湯橙黃明亮，蘭花香與蜜香交融，入口醇滑回甘，極具辨識度。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">其他品種</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  閩南烏龍茶譜中尚有<strong>梅占</strong>（帶強烈果香，耐多次沖泡）、<strong>大葉烏龍</strong>（原產安溪長坑山坪，口感濃醇帶焦糖甜香）、<strong>白芽奇蘭</strong>（產自平和，蘭花香突出）、<strong>金觀音</strong>（鐵觀音與黃金桂雜交品種，香氣高揚且湯感厚實）等多個優質品種，共同構成了閩南烏龍茶百花齊放的品種圖譜。
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : chapter.id === 'oolong-guangdong' ? (
        <div className="space-y-8 font-sans text-stone-700">
          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden">
            <ClickableImage src={GUANGDONG_IMAGES[0].src} alt={GUANGDONG_IMAGES[0].alt} className="h-[320px] md:h-[400px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-white drop-shadow-lg tracking-wide">廣東烏龍 · 茶中香水</h2>
              <p className="mt-2 text-[17px] text-white/80 drop-shadow-md">鳳凰單叢的天然花果香韻，潮州工夫茶的非凡後韻</p>
            </div>
          </div>

          {/* 1. 歷史源流 */}
          <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8">
            <h3 className="text-[24px] font-extrabold text-stone-900">歷史源流：宋種傳奇</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              廣東烏龍茶以「鳳凰單叢」為絕對核心，產於廣東省潮州市潮安區鳳凰鎮，因鳳凰山而得名。其歷史可追溯至南宋末年——相傳宋帝趙昺南逃至潮州鳳凰山時，因口渴難耐，侍從從山上採集茶葉供其嚼食，飲後生津止渴、精神倍爽，因而賜名「宋茶」，後人稱之為「宋種」。
            </p>
            <p className="mt-3 text-[17px] leading-relaxed">
              清代同治、光緒年間（1875～1908），為提升茶葉品質，當地茶農開始實行「單株採摘、單株製茶、單株銷售」的精細化管理，將優異單株分離培植並冠以樹名，「單叢茶」之名由此而來。清代鳳凰茶曾被列為貢茶，聲名遠播。如今，鳳凰單叢以其天然花果香氣被譽為「茶中香水」，是中國烏龍茶中最具識別度的茶類之一。
            </p>
          </div>

          {/* 2. 產區風土 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">產區風土：鳳凰山的自然天賦</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              鳳凰山區位於潮安縣東北部，主峰烏嶺山海拔超過 1,100 公尺，屬南亞熱帶海洋性氣候。此處山高日照短、雲霧雨量豐沛、冬春不嚴寒、盛夏無酷暑，為茶樹提供了得天獨厚的生長環境。
            </p>

            {/* 古茶樹圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={GUANGDONG_IMAGES[1].src} alt={GUANGDONG_IMAGES[1].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h4 className="text-[19px] font-extrabold text-amber-900">氣候與土壤</h4>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="text-[17px] leading-relaxed">
                    <strong>年均氣溫：</strong>約 21.4°C，溫和濕潤。
                  </li>
                  <li className="text-[17px] leading-relaxed">
                    <strong>年降雨量：</strong>約 1685.9 毫米，雨量充沛。
                  </li>
                  <li className="text-[17px] leading-relaxed">
                    <strong>土壤：</strong>多為富含有機質的黃壤土，透水性良好，有利於茶樹根系發育。
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">核心產區分布</h4>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="text-[17px] leading-relaxed">
                    <strong>烏嶺山：</strong>海拔最高、品質最優，古樹茶園集中地，「宋種」母樹於此。
                  </li>
                  <li className="text-[17px] leading-relaxed">
                    <strong>鳳凰鎮：</strong>主要產區，包含鳳西、鳳南等管理區。
                  </li>
                  <li className="text-[17px] leading-relaxed">
                    <strong>其他：</strong>饒平嶺頭、潮安等地亦有零星產區。
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-[17px] leading-relaxed">
              鳳凰山獨特的「山韻」便是源於這種微氣候與土壤的交互作用——高海拔雲霧繚繞有利於胺基酸積累，而富含礦物質的土壤則賦予茶湯獨特的厚重感。
            </p>
          </div>

          {/* 3. 十大香型 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">十大經典香型</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              鳳凰單叢最獨特之處在於其天然花果香氣，非人工薰花，而是茶葉本身在特定品種與工藝下自然生成。1996 年確立的「十大香型」將數十個品系歸納為以下經典分類：
            </p>

            {/* 香型花卉圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={GUANGDONG_IMAGES[5].src} alt={GUANGDONG_IMAGES[5].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { name: '黃枝香', desc: '明顯的梔子花香與蜜韻，花香馥郁，回甘持久。' },
                { name: '芝蘭香', desc: '高銳持久的芝蘭花香，有「芝蘭王」之稱，香氣清雅。' },
                { name: '蜜蘭香', desc: '濃郁蜜香結合芝蘭花香，甘甜醇厚，最受市場歡迎。' },
                { name: '桂花香', desc: '自然桂花香氣，清甜悠長，如金秋桂花盛開。' },
                { name: '玉蘭香', desc: '玉蘭花般清香，優雅細膩，幽香持久。' },
                { name: '薑花香', desc: '突出的薑花香氣，香氣濃烈，亦稱「通天香」。' },
                { name: '夜來香', desc: '夜來香花的自然花香，馥郁神秘，晚間更勝。' },
                { name: '茉莉香', desc: '自然茉莉花香，清鮮素雅，入口甘潤。' },
                { name: '杏仁香', desc: '茶湯帶有杏仁般的堅果香韻，風味獨特。' },
                { name: '肉桂香', desc: '類似中藥材肉桂的溫暖辛香，滋味深沉厚重。' },
              ].map((item) => (
                <div key={item.name} className="rounded-lg border border-stone-200 p-4 bg-white">
                  <div className="text-[17px] font-bold text-stone-900">{item.name}</div>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h4 className="text-[19px] font-extrabold text-amber-900">「鴨屎香」（銀花香）</h4>
              <p className="mt-2 text-[17px] leading-relaxed">
                雖非傳統十大香型之一，卻是近年最受歡迎的鳳凰單叢品種。名字相傳源於茶農為防止茶樹被盜而故意取的不雅之名。它的真正香氣是清雅的銀花香（金銀花香），帶有輕柔的花香與蜜韻，口感細膩清爽，深受年輕世代茶客喜愛。
              </p>
            </div>
          </div>

          {/* 4. 製茶工藝 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">製茶工藝：中發酵 · 中焙火</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              鳳凰單叢的製作工藝屬於中發酵、中焙火的烏龍茶製法，氧化程度通常在 50%～80% 之間，整個製程約需 10 小時，主要包含六道工序。
            </p>

            {/* 製茶工藝圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={GUANGDONG_IMAGES[2].src} alt={GUANGDONG_IMAGES[2].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { step: '1', name: '曬青（日光萎凋）', desc: '將採摘的鮮葉於陽光下萎凋，散發水分與青草氣，激活酶的活性。' },
                { step: '2', name: '涼青（室內萎凋）', desc: '移至陰涼處靜置，使葉內生化變化均勻緩慢進行，發展香氣。' },
                { step: '3', name: '做青（搖青/發酵）', desc: '透過搖青與靜置的反覆交替，促使茶葉半發酵，達到「綠葉紅鑲邊」並產生香氣。此為形成天然花果香的關鍵步驟。' },
                { step: '4', name: '殺青（炒青）', desc: '以高溫破壞酶的活性，終止發酵，固定發酵成果，使茶葉變軟。' },
                { step: '5', name: '揉捻', desc: '使茶葉條索緊結，破壞葉細胞，讓茶葉內含物滲出並附著於葉表，增強茶湯滋味。' },
                { step: '6', name: '烘焙', desc: '去除水分，完全乾燥，固定品質。經常以炭火烘焙，可賦予茶葉更豐富的層次感。' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 rounded-lg border border-stone-100 bg-stone-50 p-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">{item.step}</span>
                  <div>
                    <div className="text-[17px] font-bold text-stone-900">{item.name}</div>
                    <p className="mt-1 text-[15px] leading-relaxed text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[17px] leading-relaxed">
              鳳凰單叢與閩北岩茶的最大差異在於：岩茶重「岩韻」，強調焙火的轉化；單叢則重「山韻」，強調品種的天然花果香。做青時的發酵程度比閩南烏龍更重，但焙火程度通常比岩茶輕，以保留品種特有的香氣特徵。
            </p>
          </div>

          {/* 5. 潮州工夫茶 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">潮州工夫茶文化</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              廣東烏龍與潮州工夫茶密不可分。潮州工夫茶是中國茶藝中最精細的泡茶方式之一，以鳳凰單叢為首選用茶，形成了獨特的飲茶美學。
            </p>

            {/* 工夫茶圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={GUANGDONG_IMAGES[4].src} alt={GUANGDONG_IMAGES[4].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">「三杯」典典</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  傳統潮州工夫茶使用三隻小杯呈品字形排列，象徵天、地、人三才。即使只有一位客人，也沖三杯，體現潮州人好客的傳統。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">茶器講究</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  使用小型潮州朱泥壺、薄胎白瓷杯、雕刻木茶船，以及紅泥小火爐。每件茶具均為手工製作，講究工藝美感。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">沖泡要領</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  高沖低斜、刷蓋淋沫、關公巡城、韓信點兵——這套經典沖泡手法確保每杯茶湯濃度均勻、香氣完整釋放。
                </p>
              </div>
            </div>
          </div>

          {/* 6. 其他廣東烏龍 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">其他廣東烏龍名品</h3>

            {/* 茶葉圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={GUANGDONG_IMAGES[3].src} alt={GUANGDONG_IMAGES[3].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h4 className="text-[19px] font-extrabold text-amber-900">鳳凰水仙</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  與單叢同產於鳳凰山，但為多株混採製作，與單叢的「單株採製」有所不同。鳳凰水仙條索肥壯緊結，湯色金黃，滋味醇厚回甘，是廣東烏龍中產量較大、性價比高的品種。
                </p>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <h4 className="text-[19px] font-extrabold text-emerald-900">嶺頭單叢</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  產於廣東省饒平市嶺頭山，與鳳凰單叢並列為廣東兩大單叢茶系統。嶺頭單叢同樣講究單株培育，但在風味上偶向更為柔和細膩，因產區海拔與氣候與鳳凰山略有差異，形成獨特的山韻。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">其他品種</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  廣東烏龍茶譜中尚有<strong>鳳凰浪菜</strong>（產量最大的鳳凰茶，條型粗壯）、<strong>石古坪烏龍</strong>（產自廣東鞍山）等品種，共同構成廣東豐富的茶類版圖。
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : chapter.id === 'oolong-taiwan' ? (
        <div className="space-y-8 font-sans text-stone-700">
          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden">
            <ClickableImage src={TAIWAN_IMAGES[0].src} alt={TAIWAN_IMAGES[0].alt} className="h-[320px] md:h-[400px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-white drop-shadow-lg tracking-wide">臺灣烏龍 · 高山韻味</h2>
              <p className="mt-2 text-[17px] text-white/80 drop-shadow-md">從凍頂到大禹嶺，Formosa Oolong 的百年風華</p>
            </div>
          </div>

          {/* 1. 歷史脈絡 */}
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">
            <h3 className="text-[24px] font-extrabold text-stone-900">歷史脈絡：Formosa Oolong 的百年傳奇</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              臺灣茶葉歷史可追溯至 17 世紀，茶樹從福建引入臺灣。1717 年即有水沙連（今南投魚池、埔里）發現茶樹的紀錄。1855 年，鹿谷鄉林鳳池從福建武夷山攜回 36 株青心烏龍茶苗，其中 12 株由林三顯種植於凍頂山，開啟了凍頂烏龍茶的歷史。
            </p>
            <p className="mt-3 text-[17px] leading-relaxed">
              1867 年，蘇格蘭商人約翰·乾德（John Dodd）在臺北萬華設立茶行，以「Formosa Oolong」為名將臺灣烏龍茶成功外銷至國際市場，奠定了臺灣茶的世界聲譽。日治時期茶葉品質大幅提升，引進科學管理與製茶技術。1970 年代後，臺灣茶業從外銷轉向內銷，凍頂茶帶動了這場轉型。1980 年代高山茶崛起，茶改場（TRES）持續推動品種改良與技術創新，確立了「臺灣茶」的獨特品牌地位。
            </p>
          </div>

          {/* 2. 高山茶產區 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">高山茶：雲端上的茶園</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              「高山茶」泛指海拔 1,000 公尺以上茶園所生產的茶葉。高海拔地區氣溫低、雲霧繚繞、日照時間短，茶葉苦澀成分（兒茶素）較低，葉片柔軟厚實、果膠質含量高，使茶湯更為甘甜鮮爽。主要產區分布於嘉義縣、南投縣與臺中市。
            </p>

            {/* 梨山大禹嶺圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={TAIWAN_IMAGES[5].src} alt={TAIWAN_IMAGES[5].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <h4 className="text-[19px] font-extrabold text-emerald-900">阿里山茶區</h4>
                <p className="mt-2 text-[15px] text-stone-500">海拔 1,000～1,700m</p>
                <p className="mt-2 text-[17px] leading-relaxed">
                  嘉義縣梅山、竹崎、番路、阿里山鄉。以青心烏龍與金萱為主。茶湯蜜黃微帶淺綠，滋味俊秀挺拔，具有清新花香與甘醇綿長的喉韻，帶有阿里山獨有的「山頭氣」。石棹茶區的「阿里山珠露茶」享譽盛名。
                </p>
              </div>

              <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
                <h4 className="text-[19px] font-extrabold text-sky-900">梨山茶區</h4>
                <p className="mt-2 text-[15px] text-stone-500">海拔 1,450～2,490m</p>
                <p className="mt-2 text-[17px] leading-relaxed">
                  臺中市和平區，包含佳陽、福壽山、武陵、環山、松茂等地。超過 97% 為青心烏龍。日夜溫差大、日照短、低濕度有利萎凋，茶水格外甘甜。具有獨特的蜜桃、柑橘、鮮草與瓜果香氣。
                </p>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
                <h4 className="text-[19px] font-extrabold text-indigo-900">大禹嶺茶區</h4>
                <p className="mt-2 text-[15px] text-stone-500">海拔 2,100～2,700m</p>
                <p className="mt-2 text-[17px] leading-relaxed">
                  中橫公路 100K～105K，臺灣最高的茶區之一。1980 年代陳金地先生首次於 105K 種植成功。終年雲霧繚繞，茶葉生長極為緩慢，累積豐富的胺基酸與果膠。具有獨特的「冷礦味」與「山韻味」，產量稀少珍貴。
                </p>
              </div>
            </div>

            <p className="mt-4 text-[15px] text-stone-500 italic">
              其他高山茶區尚包括杉林溪（海拔 1,200～1,800m、竹林環繞的「杉林溪霧」）、翠巒、翠峰、華崗、碧綠溪等。
            </p>
          </div>

          {/* 3. 凍頂烏龍 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">凍頂烏龍：臺灣烏龍茶之祖</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              凍頂烏龍產於南投縣鹿谷鄉凍頂山一帶，茶區海拔 600～1,200 公尺。1855 年林鳳池自福建引入青心烏龍茶苗種植於此，歷經逾百年發展，凍頂烏龍已成為臺灣最具代表性的烏龍茶。1976 年鹿谷鄉開始舉辦優良茶比賽，大幅提升其知名度。
            </p>

            {/* 凍頂烏龍圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={TAIWAN_IMAGES[1].src} alt={TAIWAN_IMAGES[1].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h4 className="text-[19px] font-extrabold text-amber-900">傳統紅水烏龍</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  源自福建安溪鐵觀音的「布球揉捻」工藝，反覆加溫並包裹於布袋中揉捻 4～8 小時，茶湯呈紅色、口感醇厚，具有強烈的「喉韻」與耐泡特性。中度發酵搭配中重焙火的炭焙工藝，呈現蘭花香、蜂蜜甜與堅果焦糖風味。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">現代清香型</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  現代製法通常以較輕的發酵與焙火，強調花香清雅與鮮爽口感。萎凋後炒青以停止發酵，再經揉捻、搖青使茶葉呈半球狀。湯色金黃明亮，滋味鮮活，以花香與奶韻見長。
                </p>
              </div>
            </div>
          </div>

          {/* 4. 東方美人 */}
          <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">東方美人：蟲咬成就的天然蜜韻</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              東方美人茶（白毫烏龍、膨風茶）是臺灣最獨特的烏龍茶，主要產於新竹北埔、峨眉、竹東以及苗栗頭份、三灣等地。其最獨特之處在於：茶樹嫩芽必須經過<strong>小綠葉蟬</strong>（蜒仔）吸食，受蟲咬的茶葉會啟動防禦機制，產生特殊的蜜香與熟果香。
            </p>

            {/* 東方美人圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={TAIWAN_IMAGES[2].src} alt={TAIWAN_IMAGES[2].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-rose-200 bg-white p-5">
                <h4 className="text-[19px] font-extrabold text-rose-900">品種與採製</h4>
                <ul className="mt-3 space-y-2 pl-5">
                  <li className="text-[17px] leading-relaxed"><strong>主要品種：</strong>青心大冇，另有青心烏龍、白毛猴、台茶 12、15、17 號等。</li>
                  <li className="text-[17px] leading-relaxed"><strong>發酵度：</strong>60～85%，接近紅茶。</li>
                  <li className="text-[17px] leading-relaxed"><strong>採摘季節：</strong>炎夏 6、7 月，茶葉白毫顯著，葉身呈白、綠、黃、紅、褐五色相間。</li>
                  <li className="text-[17px] leading-relaxed"><strong>特殊工序：</strong>炒菁後需「靜置回潤」的二度發酵程序。</li>
                </ul>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h4 className="text-[19px] font-extrabold text-amber-900">歷史軼聞</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  相傳早期茶農因茶園受蟲害侵食，不甘損失而將其販售，意外因風味獨特而大受歡迎。鄉人稱他「膨風」（吹牛之意），故又稱「膨風茶」。後世傳說英國維多利亞女王品嚐後讚不絕口，譽為「Oriental Beauty」——東方美人之名由此而來。
                </p>
              </div>
            </div>
          </div>

          {/* 5. 木柵鐵觀音 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">木柵鐵觀音：重焙火的觀音韻</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              產於臺北市木柵茶區（今指南里一帶）。1919 年木柵農民張迺妙兄弟從福建安溪引進純種鐵觀音茶苗，1937 年安溪鐵觀音的製茶技術亦被引入，逐漸形成獨具臺灣風格的木柵鐵觀音。
            </p>

            {/* 木柵鐵觀音圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={TAIWAN_IMAGES[3].src} alt={TAIWAN_IMAGES[3].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h4 className="text-[19px] font-extrabold text-amber-900">製程與風味特色</h4>
              <ul className="mt-3 space-y-2 pl-5">
                <li className="text-[17px] leading-relaxed"><strong>發酵度：</strong>約 30～50%，屬重發酵、重焙火的半球形烏龍茶。</li>
                <li className="text-[17px] leading-relaxed"><strong>布包揉捻：</strong>初焙後以布塊包裹，反覆揉捻並以文火烘焙，形成彎曲緊結的外形。</li>
                <li className="text-[17px] leading-relaxed"><strong>觀音韻：</strong>具有獨特的「觀音韻」——熟果香與火香交融，帶有焦糖、奶油餅乾與黑莓風味。</li>
                <li className="text-[17px] leading-relaxed"><strong>品種：</strong>正欉鐵觀音為主，另有硬枝紅心、金萱、武夷、梅占等品種。</li>
              </ul>
            </div>
          </div>

          {/* 6. 製茶工藝 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">臺灣烏龍製茶工藝</h3>
            <p className="mt-4 text-[17px] leading-relaxed">
              臺灣烏龍茶的製程精細複雜，半球型烏龍的「布球揉捻」（團揉）更是臺灣製茶工藝的獨門絕技。
            </p>

            {/* 製茶工藝圖 */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <ClickableImage src={TAIWAN_IMAGES[4].src} alt={TAIWAN_IMAGES[4].alt} className="h-[240px] md:h-[300px]" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { step: '1', name: '採摘', desc: '人工嚴格採摘一心二葉或一心三葉，需配合晴朗天氣。' },
                { step: '2', name: '日光萎凋', desc: '鮮葉於戶外日光下萎凋，減少水分、軟化葉質，啟動酵素作用。' },
                { step: '3', name: '室內萎凋與攪拌', desc: '室內靜置與間歇性攪拌交替進行，使葉緣氧化形成「綠葉紅鑲邊」，產生花香。' },
                { step: '4', name: '殺菁（炒青）', desc: '以高溫鍋炒終止發酵，固定茶葉品質。溫度與時間需精準掌控。' },
                { step: '5', name: '揉捻與團揉', desc: '先初揉形成條狀，再以布巾包裹反覆「布球揉捻」，將茶葉壓製成緊實半球型。此步驟可長達數小時。' },
                { step: '6', name: '乾燥與烘焙', desc: '去除水分後依照期望風格進行輕、中或重焙火。炭焙可賦予焦糖甜香與深沉韻味。' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 rounded-lg border border-stone-100 bg-white p-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">{item.step}</span>
                  <div>
                    <div className="text-[17px] font-bold text-stone-900">{item.name}</div>
                    <p className="mt-1 text-[15px] leading-relaxed text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[17px] leading-relaxed">
              臺灣烏龍跨越了從輕發酵（高山茶 10～20%）到重發酵（東方美人 60～85%）的完整光譜，製茶師依據品種、海拔與季節靈活調整發酵度與焙火程度，展現出極高的工藝多樣性。
            </p>
          </div>

          {/* 7. 核心品種 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-[24px] font-extrabold text-stone-900">臺灣烏龍核心品種</h3>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <h4 className="text-[19px] font-extrabold text-emerald-900">青心烏龍（軟枝烏龍）</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  臺灣最經典的茶樹品種，廣泛種植於各大高山茶區。葉片薄而柔軟，製成的烏龍茶香氣清雅細膩，帶有蘭花香與奶韻，是阿里山、梨山、大禹嶺等頂級高山茶的首選品種，亦是凍頂烏龍的傳統品種。
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h4 className="text-[19px] font-extrabold text-amber-900">金萱（台茶 12 號）</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  由茶改場育成的臺灣代表性品種，以其天然的奶香與牛乳糖甜韻聞名。適合低至中海拔種植，是阿里山金萱茶的主要品種。茶湯金黃透亮，口感圓潤滑順，初學者與資深茶客皆喜愛。
                </p>
              </div>

              <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
                <h4 className="text-[19px] font-extrabold text-sky-900">翠玉（台茶 13 號）</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  同為茶改場育成，相較金萱更偏向花香型。帶有明顯的野薑花香與清新花韻，主要種植於中低海拔地區。茶湯翠綠明亮，風味清雅持久。
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h4 className="text-[19px] font-extrabold text-stone-900">其他品種</h4>
                <p className="mt-2 text-[17px] leading-relaxed">
                  臺灣烏龍品種譜系尚包括<strong>青心大冇</strong>（東方美人主力品種，芽葉肥壯、白毫顯著）、<strong>四季春</strong>（香氣強烈、適製各季節茶）、<strong>紅韻（台茶 21 號）</strong>（帶柑橘蜜香）、<strong>迎香</strong>（花香清揚的新興品種）等，共同構成臺灣烏龍百花齊放的品種圖譜。
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="leading-relaxed text-stone-700">內容建置中。</p>
      )}
    </SectionCard>
  );
}
