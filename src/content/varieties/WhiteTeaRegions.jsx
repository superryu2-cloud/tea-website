import React from 'react';
import { Cloud, Mountain } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

export default function WhiteTeaRegions({ topOffsetPx, activeHref = null }) {
  const scrollMarginTop = Number.isFinite(topOffsetPx) ? topOffsetPx : undefined;
  const normalizedHref = String(activeHref ?? '').startsWith('#white-') ? String(activeHref) : null;

  const CHAPTERS = {
    '#white-fujian': {
      id: 'white-fujian',
      title: '福建',
      icon: Cloud,
    },
    '#white-yunnan': {
      id: 'white-yunnan',
      title: '雲南',
      icon: Mountain,
    },
  };

  const chapter = normalizedHref ? CHAPTERS[normalizedHref] : null;

  if (!chapter) return null;

  return (
    <SectionCard id={chapter.id} scrollMarginTop={scrollMarginTop} title={chapter.title} icon={chapter.icon}>
      {chapter.id === 'white-fujian' ? (
        <div className="space-y-8 text-stone-700">
          {/* 產業概覽 */}
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">
            <h3 className="text-2xl font-extrabold text-stone-900">福建白茶產業概覽</h3>
            <p className="mt-4 leading-relaxed">
              在全球白茶的生產版圖中，產地雖分佈於福建、雲南與台灣，但福建始終佔據著無可撼動的戰略核心地位。福建白茶產業主要由福鼎與政和兩大核心產區支撐，兩者在市場與品質維度上呈現出深度的互補與辯證關係。
            </p>
            <p className="mt-3 leading-relaxed">
              就市場現狀而言，福鼎白茶憑藉起步較早的品牌經營，目前在名氣上略勝一籌；然而，名氣並非評判成茶優劣的唯一標尺。福鼎產區以其「起源地」的文化標籤帶領市場潮流，而政和產區則以其深厚的「高山風土」特質與皇權歷史背景與之呼應。兩大產區在不同的生態環境與精進的製茶工藝加持下，共同構建了福建白茶高品質的價值體系。
            </p>
          </div>

          {/* 福鼎：白茶之源 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">白茶之源：太姥山文化與福鼎的戰略地位</h3>
            <p className="mt-4 leading-relaxed">
              福鼎市隸屬於福建省寧德市，地理座標位於福建省東北部沿海，北接浙江省，因其獨特的地理邊界位置，自古被譽為福建的<strong>「北大門」</strong>。其地名源於境內聖山——太姥山的覆鼎峰，這座山嶽不僅是地理標誌，更是白茶文化的精神支柱。
            </p>
            <p className="mt-3 leading-relaxed">
              在文化考證層面，福鼎作為白茶起源地的歷史可追溯至唐代。陸羽在《茶經》中明確記載：「永嘉縣東三百里有白茶山」。根據後世考證，此處的「白茶山」即指現今的福鼎太姥山。值得專業讀者注意的是，儘管文獻中出現了「白茶」之名，但陸羽時代所指的白茶，在植物品種與加工工藝上，與現代六大茶類定義下的白茶存在本質上的歷史差異。
            </p>
          </div>

          {/* 福鼎風土條件 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">山海交匯的生命力：福鼎之風土條件</h3>
            <p className="mt-4 leading-relaxed">
              福鼎的氣候與土壤共同譜寫了茶樹生長的理想生態篇章。地形上，除了沿海少數低山平地外，大多數茶園分佈在海拔500至800公尺的丘陵地帶，部分精華產區更延伸至1000公尺以上的高山。
            </p>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">微氣候環境</h4>
            <p className="mt-3 leading-relaxed">
              該區展現出明顯的亞熱帶季風氣候與海洋性特徵：
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="leading-relaxed">
                <strong>氣候數據：</strong>年平均溫度恆定在18.5°C，年降雨量充足，約達1700mm，年相對濕度維持在80%。山區平均無霜期長達228天，為茶樹生長提供了優渥的緩衝週期。
              </li>
              <li className="leading-relaxed">
                <strong>土壤組成：</strong>產區土壤結構複雜多樣，包含紅壤、黃壤、紫色土與沖積土。
              </li>
              <li className="leading-relaxed">
                <strong>理化性質：</strong>土質多屬壤黏土，pH值精準分佈在4至6.3之間，有機質含量高達1.58-2.33%。除極少數沿海地帶外，全境土壤皆極適宜優質茶樹生長。
              </li>
            </ul>

            <p className="mt-4 rounded-lg bg-emerald-50 p-4 text-sm leading-relaxed">
              在此天然沃土之上，福鼎培育出了<strong>華茶1號（福鼎大白茶）及華茶2號（福鼎大毫茶）</strong>兩大核心品種。正是這些自然賦予的條件，推動了福鼎白茶在歷史貿易中的輝煌成就。
            </p>
          </div>

          {/* 貿易口岸與白毫銀針 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">貿易口岸與產區擴張：白毫銀針的全球影響力</h3>
            <p className="mt-4 leading-relaxed">
              福鼎白茶的歷史地位不僅體現在文化起源，更展現在其作為國際貿易物資的影響力。早在清康熙年間，當地便設置了貿易口岸，開啟了白茶大規模出口的歷史進程。當時由福鼎產出的<strong>「白毫銀針」</strong>，憑藉其極致的工藝與鮮靈的品質，被全球市場視為世界級茶品。
            </p>
            <p className="mt-3 leading-relaxed">
              隨著福鼎白茶在國際貿易中的聲名鵲起，市場需求的激增推動了生產技術與產業版圖的擴張，白茶製作工藝由福鼎向周邊輻射，促使政和、松溪等地區亦開始投入白茶的產製。這種產業流轉，讓擁有深厚皇權榮耀的政和產區正式進入了歷史的聚光燈下。
            </p>
          </div>

          {/* 政和：皇權賜名的榮耀 */}
          <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8">
            <h3 className="text-2xl font-extrabold text-stone-900">皇權賜名的榮耀：政和白茶與北苑貢茶文化</h3>
            <p className="mt-4 leading-relaxed">
              政和縣的產茶歷史可遠溯至唐末宋初，至宋代時，政和已躍升為北苑貢茶的核心主產區。該地原名「關棣縣」，其更名背後隱藏著一段因茶受封的佳話：當時當地向朝廷進貢的「銀針」品質極其拔尖，深得宋代皇帝喜愛，在「喜動龍顏」之下，皇帝遂將當時的年號<strong>「政和」</strong>賜予該縣作為縣名，此舉奠定了政和白茶在茶史中絕無僅有的崇高地位。
            </p>
            <p className="mt-3 leading-relaxed">
              這種與皇權深度綁定的榮耀，極大地提振了當地的產業發展，民間甚至流傳著<strong>「嫁女不慕官宦家，只詢茶葉與銀針」</strong>的諺語，具體反映了當時茶產業對地方經濟與社會階層的巨大影響力。
            </p>
          </div>

          {/* 政和環境特質 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">閩北丘陵的厚積薄發：政和之環境特質與品種優勢</h3>
            <p className="mt-4 leading-relaxed">
              政和產區位於福建省北部，與浙江省南部接壤，地形以丘陵為主，展現出較福鼎更為鮮明的高山特徵。
            </p>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">地理環境數據</h4>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="leading-relaxed">
                <strong>海拔與日照：</strong>平均海拔約800公尺，最高峰達1597公尺，年平均日照時數為1907小時，提供了充足的光合作用條件。
              </li>
              <li className="leading-relaxed">
                <strong>土壤與微氣候：</strong>土壤以紅壤與黃壤為主，pH值介於4.5-6.5，有機質含量更是大於2.5%，為茶樹養分積累提供了厚實基礎。
              </li>
              <li className="leading-relaxed">
                <strong>特殊地理表現：</strong>儘管核心產區如石屯與東平二區的海拔在380公尺以下，但受整體氣候環繞影響，其所產茶葉仍能展現出鮮明且獨特的高山特質，白茶品質極其優異。
              </li>
            </ul>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">品種演進</h4>
            <p className="mt-3 leading-relaxed">
              在品種演進上，光緒五年（1879年）鐵山村發現的<strong>「政和大白茶」</strong>是關鍵的轉折點。該品種隨後獲得大規模繁殖與推廣，成為外銷市場的主力軍，進一步鞏固了政和在高品質白茶市場中不可替代的專業地位。
            </p>
          </div>

          {/* 總結 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">福建白茶的工藝與環境總結</h3>
            <p className="mt-4 leading-relaxed">
              綜觀福建白茶的產區發展，福鼎與政和雖在歷史路徑與地理性格上各異，但皆展現了歷史傳承、優異品種與獨特風土的完美交融。
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-l-4 border-emerald-500 bg-white p-5">
                <h4 className="text-lg font-extrabold text-stone-900">福鼎特色</h4>
                <p className="mt-2 text-sm leading-relaxed">
                  以起源地的文化底蘊與山海交匯的生命力見長，華茶1號與華茶2號品種優異，白毫銀針享譽全球。
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-amber-500 bg-white p-5">
                <h4 className="text-lg font-extrabold text-stone-900">政和特色</h4>
                <p className="mt-2 text-sm leading-relaxed">
                  以北苑貢茶的皇權榮耀與高山特質傲視產業界，政和大白茶品種卓越，高山風土獨特。
                </p>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-sm text-stone-600">
              兩大產區並立，共同構築了福建白茶高品質的產業脊樑，成為全球愛茶人追尋清甜本味的終極原鄉。
            </p>
          </div>
        </div>
      ) : chapter.id === 'white-yunnan' ? (
        <div className="space-y-8 text-stone-700">
          {/* 當代地位與工藝核心 */}
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8">
            <h3 className="text-2xl font-extrabold text-stone-900">雲南白茶的當代地位與工藝核心</h3>
            <p className="mt-4 leading-relaxed">
              在茶界的版圖中，若說福建白茶是長年「獨霸江湖的長者」，憑藉深厚的市場根基與規格化的等級傲視群雄；那麼雲南古樹白茶則是近年異軍突起的「初出茅廬的少年」，其一亮相便以大葉種特有的壯碩與生命力吸引了無數資深茶人的目光。雲南白茶具備一種「最接近天然」的戰略價值，它不僅是連結森林原始氣息與城市茶空間的橋樑，更是時間與工藝共同釀造的藝術。
            </p>
            <p className="mt-3 leading-relaxed">
              雲南白茶的核心工藝邏輯在於「不炒不揉」，將人為干預降至最低，使其展現出極致的天然活性。這其中的關鍵在於「萎凋」——這不僅僅是水分的蒸發，更是陽光的溫度、山間微風、環境濕度與製茶人靈魂記憶的深度交織。這種工藝最大限度地保留了茶葉中的營養成分與保健活性，造就了茶湯清雅、靈動且極利身心的感官體驗。
            </p>
          </div>

          {/* 歷史文獻與原始傳承 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">歷史文獻與雲南白茶的原始傳承</h3>
            <p className="mt-4 leading-relaxed">
              雲南白茶絕非現代行銷技術下的產物，其根基深埋於千年的歷史沃土之中。早在唐代，樊綽所著的《蠻書》中便明確記載了「銀生城界諸山」一帶的茶事，並提及了「散收五彩造法」。經考證，這種「五彩造法」本質上就是將採摘的鮮葉進行自然乾燥，這正與現代白茶的核心邏輯高度契合，證明了雲南白茶源遠流長的工藝傳統。
            </p>
            <p className="mt-3 leading-relaxed">
              這種工藝的雛形可追溯至早期的僕人（埔人）。在那個尚未發明鐵鍋殺青技術的原始年代，先民們將樹上採摘的鮮葉直接攤晾乾，不經任何揉捻與炒製。這種質樸的「晾乾法」正是白茶最原始的傳承，並在漫長的時間長河中，從山林角落走進了皇家的視野。
            </p>
          </div>

          {/* 景谷大白茶與白龍鬚貢茶 */}
          <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8">
            <h3 className="text-2xl font-extrabold text-stone-900">景谷大白茶與白龍鬚貢茶的傳奇故事</h3>
            <p className="mt-4 leading-relaxed">
              談及雲南白茶，景谷縣是一個繞不開的座標。這裡陽光充沛、雲霧繚繞，肥沃的土地與平均20度的氣候條件，為大葉種提供了絕佳的生長環境。民間流傳著一個關於「成六」的傳奇：這位力大無窮、每天要吃六碗米的大漢，在瀾滄江（藏江）邊做生意時，驚嘆於當地茶樹的優異，便「偷偷摘得」數十粒茶種帶回秧塔種植。經過一百五十餘年的繁衍，這些茶樹已成為珍貴的文化遺產。
            </p>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">白龍鬚貢茶</h4>
            <p className="mt-3 leading-relaxed">
              在清代道光年間，由景谷大白茶製成的「白龍鬚貢茶」名揚京城。其工藝較為特殊，包含手工殺青、兩次揉捻、解塊、攤晾與曬乾。由於經過兩次揉捻，它具備了「微發酵」的特質，香氣更顯層次。
            </p>
            <p className="mt-3 leading-relaxed">
              進貢時，茶農會用紅線將茶葉精心編織成「穀穗狀」，外觀白毫顯露、身骨壯碩。這種茶不僅帶有獨特的橄欖香氣，且口感極其高甜、氣感飽足，更因具有解酒、解菸、助消化的功效，被朝廷視為稀世珍品。
            </p>
          </div>

          {/* 月光美人的虛與實 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">營銷傳奇與工藝真相：月光美人的虛與實</h3>
            <p className="mt-4 leading-relaxed">
              在白茶市場中，「月光美人」（月光白）無疑是故事包裝最成功的範例。商家將其描述為由少女在深夜月光下採摘、不見日光、自然發酵，甚至賦予其太極陰陽的道家哲思。然而，剝開詩意的外殼，月光美人的誕生其實是雲南雨季氣候下的產物。
            </p>
            <p className="mt-3 leading-relaxed">
              在雨季，由於缺乏陽光曝曬，茶農不得不將鮮葉移入室內，在無光環境下緩慢陰乾。這種長時間、低溫的乾燥過程，使葉面部分發生緩慢氧化呈現深黑色，而芽頭則因白毫覆蓋保持銀白，形成了視覺上的「陰陽兩面」。
            </p>
            <p className="mt-3 rounded-lg bg-blue-50 p-4 text-sm leading-relaxed">
              儘管行銷故事帶有濾鏡，但其風味確實迷人：它不苦不澀、飽滿醇厚，兼具普洱的根底與烏龍的清香。其最引人入勝之處在於那種「四花四果四密」的豐富香氣，既溫潤又深具層次感。
            </p>
          </div>

          {/* 雲南與福建白茶對比 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">雲南古樹白茶與福建白茶的深度對比</h3>
            <p className="mt-4 leading-relaxed">
              從生物學角度看，雲南古樹白茶與福建白茶有著本質的差異。福建白茶多為小葉種，講究銀針、牡丹、壽眉等嚴格等級；而雲南白茶選用大葉種（喬木種）鮮葉，內含物質如氨基酸與可溶性糖含量更高。這使得雲南白茶更為耐泡，且擁有更深沉的喉韻。
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-5">
                <h4 className="text-lg font-extrabold text-emerald-900">福建白茶</h4>
                <p className="mt-2 text-sm leading-relaxed">
                  如「江南美人」，水路細柔、香氣高揚清順，小葉種精緻，等級分明。
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
                <h4 className="text-lg font-extrabold text-blue-900">雲南古樹白茶</h4>
                <p className="mt-2 text-sm leading-relaxed">
                  如「北方豪放美人」，海拔高、內涵強，雖微帶苦澀但回甘迅猛，大葉種壯碩。
                </p>
              </div>
            </div>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">核心優勢</h4>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="leading-relaxed">
                <strong>轉化潛力：</strong>雲南古樹白茶多採用「複式萎凋」工藝，保留了極高的轉化潛力。由於物質豐富，存放三年的雲南白茶便能出現老茶才有的「藥香」與「棗香」，其轉化效率遠勝其他品種。
              </li>
              <li className="leading-relaxed">
                <strong>迷人蜜韻：</strong>深入湯感的蜜韻、持久的回甘、長效的香醇度。
              </li>
              <li className="leading-relaxed">
                <strong>存放活性：</strong>低溫萎凋賦予的長期存放活性，越陳越香。
              </li>
            </ul>
          </div>

          {/* 沖泡美學 */}
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8">
            <h3 className="text-2xl font-extrabold text-stone-900">古樹白茶沖泡美學：七步成茶</h3>
            <p className="mt-4 leading-relaxed">
              沖泡古樹白茶不應僅視為技術操作，而應是一場與自然生命力的對話。白茶「不怕悶泡」的特性，使其在 90 至 95 度的水溫下亦能展現其深厚的底蘊。
            </p>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">器具準備與比例精煉</h4>
            <p className="mt-3 leading-relaxed">
              選用白瓷「敞口蓋碗」能應對大葉種拋鬆的物理特性，水質 pH 值建議維持在 7 至 7.5 之間，以激發香氣。建議茶水比為 1:25（如 125ml 蓋碗配 5g 茶），過濃則易掩蓋其清雅靈動的本色。
            </p>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">洗茶與溫潤的核心三部曲</h4>
            <div className="mt-3 space-y-3">
              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">乾潤法</div>
                <p className="mt-2 text-sm leading-relaxed">
                  利用溫燙蓋碗後的餘熱，投入乾茶並蓋上蓋子，藉溫熱喚醒茶葉的沈睡。
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">蒸潤法</div>
                <p className="mt-2 text-sm leading-relaxed">
                  在五點鐘方向定點注水 1/5，隨即蓋上蓋子，讓水蒸氣由下而上慢慢散發，將茶葉「蒸軟」，此過程約需 15 秒。
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="font-extrabold text-stone-900">濕潤法</div>
                <p className="mt-2 text-sm leading-relaxed">
                  再次注水至 3/4 處，確保葉片徹底潤透後迅速出湯，確保後續湯感乾甜。
                </p>
              </div>
            </div>

            <h4 className="mt-6 text-xl font-extrabold text-stone-900">七步成茶的儀式流程</h4>
            <ol className="mt-3 space-y-2 pl-5 list-decimal">
              <li className="leading-relaxed">
                <strong>背氣取茶：</strong>備好適宜茶具，以恭敬心取出 5 克壯碩的古樹茶。
              </li>
              <li className="leading-relaxed">
                <strong>溫器投茶：</strong>全方位溫燙蓋碗（包含蓋子），趁熱投茶。
              </li>
              <li className="leading-relaxed">
                <strong>溫潤三部：</strong>依序完成乾潤、蒸潤、濕潤，徹底激活茶葉。
              </li>
              <li className="leading-relaxed">
                <strong>正式沖泡：</strong>沿五點鐘方向定點，採用「高溫提香壓運法」，拉高水線再迅速下壓，激發高昂花果香。
              </li>
              <li className="leading-relaxed">
                <strong>出湯分茶：</strong>停留約 10 至 15 秒出湯，注意不要留底，以免影響下泡滋味。
              </li>
              <li className="leading-relaxed">
                <strong>感官巡迴：</strong>觀察其在水中如「雲南花瓣」般漂浮的視覺美感，並細嗅蓋香從第一泡到第六道的奇妙轉變。
              </li>
              <li className="leading-relaxed">
                <strong>品味回甘：</strong>體悟那份深入喉韻的蜜韻，享受茶湯對感官的洗禮。
              </li>
            </ol>
          </div>

          {/* 結語 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-2xl font-extrabold text-stone-900">回歸茶湯的本質體驗</h3>
            <p className="mt-4 leading-relaxed">
              雲南古樹白茶是跨越時間的遺贈。從《蠻書》中的「五彩造法」到清代神祕的「白龍鬚」，從民間傳說的「成六」到現代工藝的細膩追求，它承載了雲南大地的厚重與頑強。這不僅是一杯茶湯，更是生機勃勃的活化石。
            </p>
            <p className="mt-3 leading-relaxed text-sm text-stone-600">
              當我們坐在茶桌前，唯有抱持對自然的敬畏，透過正確的沖泡節奏，才能真正讀懂那份源自原始森林深處的生命律動。這份深沉的回甘與迷人的蜜韻，值得每一位愛茶人虔誠對待，細細品讀。
            </p>
          </div>
        </div>
      ) : (
        <p className="leading-relaxed text-stone-700">內容建置中。</p>
      )}
    </SectionCard>
  );
}
