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
      ) : (
        <p className="leading-relaxed text-stone-700">內容建置中。</p>
      )}
    </SectionCard>
  );
}
