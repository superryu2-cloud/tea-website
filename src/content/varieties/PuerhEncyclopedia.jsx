import React, { useRef } from 'react';

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-emerald-50 via-white to-amber-50">
          <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900">{title}</h3>
        </div>
        <div className="px-5 py-5 md:px-7 md:py-6">
          <div className="space-y-6 text-stone-700 text-base leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Placeholder({ children }) {
  return (
    <div className="museum-card museum-paper p-6">
      <div className="text-xs font-extrabold tracking-widest text-stone-500">DRAFT</div>
      <div className="mt-2 text-sm text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

function Subheading({ children }) {
  return <h4 className="text-xl md:text-2xl font-extrabold text-stone-900">{children}</h4>;
}

function Callout({ title, children }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-sm font-extrabold tracking-widest text-amber-900/70">{title}</div>
      <div className="mt-3 text-base text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

const CHAPTERS = {
  '#puerh-1': {
    title: '一：什麼是普洱茶',
    content: (
      <div className="space-y-5">
        <Subheading>普洱茶的價值與迷思</Subheading>
        <p>許多人手中或許都藏有幾片普洱，如何能確定，所擁有的就是真正意義上的普洱茶？</p>
        <p>
          真正的普洱茶，具備「越陳越香、越放越值錢」的核心價值。那麼，究竟什麼樣的茶才能被稱為真正的普洱茶，並擁有如此獨特的轉化魅力呢？
        </p>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
          <Subheading>普洱茶的形態多樣性</Subheading>
          <p>市面上的普洱茶形態各異，常見的主要有以下幾種：</p>
          <ul className="list-disc pl-5 space-y-2 text-base text-stone-700">
            <li>筒裝：將七片餅茶用竹筍殼包裝在一起，便於運輸與長期儲存。</li>
            <li>357克大餅：這是市面上最經典、最常見的規格，也被稱為「七子餅」。</li>
            <li>茶磚：將茶葉壓製成長方形或正方形的磚狀，形態規整。</li>
            <li>200克小餅：相較於357克大餅，更小巧精緻，適合小批量品飲與收藏。</li>
            <li>茶頭：熟茶在渥堆發酵過程中，因果膠質豐富而自然結成塊狀的茶，滋味醇厚耐泡。</li>
            <li>龍珠：為方便沖泡而生，將茶葉手工揉製成一粒一泡的球形，近年來十分流行。</li>
          </ul>
          <p className="text-base text-stone-700 leading-relaxed">
            儘管外形千變萬化，但它們的本質是相同的——其原料都是來自於一種被稱為「曬青毛茶」的散茶。
          </p>
        </div>

        <Callout title="國家標準的確立：普洱茶的權威定義">
          <p>
            在2008年國家標準確立之前，普洱茶市場曾因過度炒作而亂象叢生。大量來自雲南周邊省份（如四川、貴州）的茶葉被運至雲南壓製，冒充普洱茶銷售。然而，消費者很快發現，這些仿冒品存放多年後，非但沒有越陳越香，反而味道愈發寡淡。
          </p>
          <p className="mt-3">
            其根本原因在於，它們的加工工藝多為綠茶所用的「烘青」（烘乾機烘烤）或「炒青」（高溫鍋炒），高溫早已破壞了茶葉中的「活性酶」。失去了這些賦予茶葉生命力的活性酶，茶自然不具備後發酵的基礎。為此，國家於2008年正式頒布了普洱茶的地理標誌保護產品標準，為真正的普洱茶提供了權威、明確的定義與保障，從根本上劃清了真偽的界線。
          </p>
        </Callout>

        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-4">
          <Subheading>普洱茶定義的三大關鍵詞解析</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            要確保您購買到的是具備「越陳越香」潛力的正宗普洱茶，只需牢記以下三個關鍵詞。這三大核心支柱，共同構成了普洱茶的權威定義。
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-stone-700">
            <li>地理標誌保護範圍</li>
            <li>雲南大葉種曬青茶</li>
            <li>特定加工工藝</li>
          </ol>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>關鍵詞一：地理標誌保護範圍</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            這條標準明確規定，只有在特定地理範圍內種植和加工的茶葉，才能被稱為普洱茶。這個範圍，主要指雲南省內約90%的產茶區。換言之，無論是來自貴州、四川，還是福建、台灣的茶葉，即便在雲南加工，也不能稱之為普洱茶。
          </p>
          <p className="text-sm text-stone-700 leading-relaxed">
            雲南的普洱茶產區廣闊，其中以沿瀾滄江流域分佈的四大核心產區產量最大、最為重要：
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">保山茶區</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                此區以生產高品質的「滇紅」（雲南紅茶）而聞名，普洱茶原料產量相對較少，但品質不俗。
              </div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">代表山頭：</div>
              <ul className="mt-2 space-y-2 text-sm text-stone-700 list-disc pl-5">
                <li>黃家寨：其風味獨特，被形容為兼具「易武的柔、冰島的香、昔歸的甜」。</li>
                <li>昔歸（或漭水/石佛）：地處雲霧繚繞的深山，以其長達八小時的「強回甘」特性而著稱。</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">臨滄茶區</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                此區茶品因生態環境優良、香甜柔和、價格適中而在台灣市場廣受歡迎。臨滄同樣是滇紅的重要產地（註：鳳慶滇紅聞名遐邇，但鳳慶縣隸屬臨滄市，而非保山市）。
              </div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">代表山頭：冰島、壩糯、懂過、大雪山等。</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">特別之處：</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                位於鳳慶縣的香竹箐，擁有一棵樹齡高達3200年的栽培型古樹茶王。在2021年，其10公斤鮮葉曾拍出1088萬人民幣的天價，足見其珍稀程度。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">普洱茶區</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                此區歷史悠久，曾是茶馬古道上的重要驛站和普洱茶集散地。其氣候冬無嚴寒、夏無酷暑，被譽為「天然氧吧」。
              </div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                產區特點：台地茶（茶園茶）佔比較大，如壯觀的「大渡崗萬畝茶園」。當地政府高度重視有機種植管理，許多茶園獲得了有機、綠色甚至歐盟認證。
              </div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">代表山頭：邦崴、千家寨、困鹿山、景邁山等。</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">特別之處：</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                邦崴（當地讀音為 Bān Wān）的一棵1800年過渡型茶樹，因其同時具備野生與栽培型基因，成為了證明「世界茶源在雲南」的活化石。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">西雙版納茶區</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                這是普洱茶最核心的產區，被國際公認為世界茶樹原產地的中心地帶，也是茶馬古道的源頭。這裡擁有面積廣闊且保存完好的古茶園。「西雙版納」在傣語中意為「十二塊田地」。
              </div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">古六大茶山：</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                蠻磚、曼撒（今易武）、倚邦、莽枝、革登。這些茶山在清代是皇家貢茶的主要來源。市面上流傳下來的百年老茶標本，如宋聘號、同慶號，以及後來的「紅印圓茶」，其原料均出自易武，證明了易武茶卓越的陳放潛力。
              </div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">新六大茶山：</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                老班章、老曼峨、勐宋、南糯山、巴達、賀開。這些山頭是近代崛起的新星，其中「班章為王，易武為后」的說法已深入人心。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>關鍵詞二：雲南大葉種曬青茶</Subheading>
          <div className="space-y-2 text-sm text-stone-700 leading-relaxed">
            <p>
              雲南大葉種 這是中國著名的優良茶樹品種，基因庫完整，是普洱茶的原生種。其特點包括葉片面積寬大（40-60平方厘米）、樹齡長（可達數百年甚至上千年）、樹形高大（多為喬木，可高達數米甚至十幾米）。
            </p>
            <p>• 代表性品種：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                群體種：即原生種，是透過有性繁殖（種子繁殖）而來的後代，基因具多樣性。這是古樹普洱茶複雜而獨特風味的主要原料來源，如勐海大葉種、鳳慶大葉種。
              </li>
              <li>
                無性系品種：由茶科所採用無性繁殖（扦插、嫁接）技術培育的優良品種，基因單一穩定。如雲抗系、雲選系，多用於台地茶（茶園茶）的種植，以確保品質和產量的穩定性。
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700 leading-relaxed">
            <div className="font-extrabold text-stone-900">曬青茶</div>
            <div className="mt-2">
              這是普洱茶工藝的靈魂所在。「曬青」指的是採用日光曬乾的乾燥方式。與綠茶常用的「炒青」或「烘青」不同，日光曬乾能以溫和的方式去除水分，最大限度地保存茶葉中的活性酶。這些活性酶是普洱茶得以在漫長歲月中持續轉化、越陳越香的生命基礎與潛在活力。這也是普洱茶與綠茶工藝最根本的區別。
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>關鍵詞三：特定加工工藝</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">普洱茶的加工工藝可分為兩個核心階段：</p>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              第一階段：製作曬青毛茶（半成品） 鮮葉從茶樹上採摘下來後，需經過攤晾、殺青、揉捻、日曬四個步驟，製成「曬青毛茶」。此時的散茶，僅僅是普洱茶的半成品。
            </li>
            <li>
              第二階段：製成最終產品（生茶與熟茶） 以曬青毛茶為原料，通過不同的後續工藝，製成兩種最終形態：
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>生茶：將曬青毛茶以蒸壓成形的方式，壓製成餅、磚、沱等緊壓茶。新製成的生茶香氣高揚，富含花香、果香與蜜香。</li>
                <li>熟茶：將曬青毛茶進行渥堆發酵（一種人工加速陳化的工藝），製成熟茶。熟茶茶性溫和，湯色紅濃透亮，香氣以沉穩的陳香為主。</li>
              </ul>
            </li>
          </ul>
          <p className="text-sm text-stone-700 leading-relaxed">
            普洱茶一旦被壓製成餅，它的生命歷程才真正開始萌發，「像小baby一樣，一天一天地長大」。每一年的存放，都會帶來不同的驚喜，這正是普洱茶轉化的無窮魅力。
          </p>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">課程總結與核心要點回顧</div>
          <div className="text-sm leading-relaxed">本堂課我們學習了普洱茶的權威定義，其核心可總結為以下三點：</div>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
            <li>
              關鍵詞一：地理標誌保護範圍
              <div className="mt-1 text-stone-200">◦ 要點：原料必須來自雲南省內的指定產區。</div>
            </li>
            <li>
              關鍵詞二：雲南大葉種曬青茶
              <div className="mt-1 text-stone-200">◦ 要點：茶樹品種必須是雲南大葉種，且乾燥工藝必須是日光曬乾（曬青）。</div>
            </li>
            <li>
              關鍵詞三：特定加工工藝
              <div className="mt-1 text-stone-200">◦ 要點：以曬青毛茶為原料，或蒸壓成形的生茶，或渥堆發酵的熟茶。</div>
            </li>
          </ul>
          <div className="text-sm leading-relaxed">
            在品鑑實踐中，若您發現一款茶存放多年後味道越來越淡，其根本原因很可能就是未使用「曬青」工藝，茶葉內的活性物質在初期已被高溫破壞。
          </div>
          <div className="text-sm leading-relaxed">
            最後，提供一個專業建議：存茶，存餅茶優於存散茶。根據雲南農科所的研究，散茶陳放後可分析出的香氣種類約為40多種，而壓製成餅茶後，在同樣條件下陳放，其香氣種類可高達90多種。緊壓的形式為茶葉創造了一個更穩定的微環境，有利於更豐富、更深邃的轉化。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-2': {
    title: '二：普洱茶的前世今生',
    content: (
      <div className="space-y-5">
        <Subheading>普洱茶的前世：從起源到清代盛世</Subheading>
        <p>我們將1733年之前，主要依靠文獻記載的這段漫長歲月，定義為普洱茶的「前世」。</p>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>起源與傳說（商周至三國）</Subheading>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>最早文獻記載：</strong>
              關於雲南茶葉最早的文字記錄，可追溯至商周時期。據《華陽國志·巴志》記載：「周武王伐紂，實巴蜀之產……其茶蜜皆納貢之。」這表明當時的雲南地區已將茶作為貢品。
            </li>
            <li>
              <strong>茶祖傳說：</strong>
              在雲南的產茶區，三國時期的蜀漢丞相<strong>諸葛亮（武侯）</strong>被眾多少數民族尊奉為「茶祖」。據清代檀萃的《滇海虞衡志》記載：「茶山有茶王樹，較五獨大，本武侯遺種，至今民祀之。」傳說當年諸葛亮南征，軍中士兵因水土不服而染上瘟疫，他在夢中得仙人指點，用當地茶葉煮水給士兵飲用，果然藥到病除。為此，他鼓勵並帶領當地民族開山種茶，留下了許多與茶相關的地名傳說，如攸樂、莽枝、蠻磚、革登等。至今，在茶王節等重要節日，當地人民仍會舉行盛大活動祭拜這位「茶神」。
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>興盛與發展（唐、宋、元、明）</Subheading>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>唐代：興起與外傳</strong>
              普洱茶「興於唐，盛於宋」。唐代樊綽所著的《蠻書》中記載：「茶出銀生城界諸山，散收，無採造法，蒙舍蠻以椒、薑、桂和烹而飲之。」這清晰地指出了當時普洱茶的產區（今普洱市、西雙版納一帶），原始的加工方式（僅曬乾，無複雜工藝），以及獨特的飲用方法（加入花椒、生薑、桂皮一同烹煮）。據後人阮福在《普洱茶記》中考證，「西蕃之用普茶，已自唐始」，意指唐代普洱茶已傳入西藏，開啟了以茶換馬的「茶馬互市」，並催生了偉大的茶馬古道。
            </li>
            <li>
              <strong>元明：定名與傳承</strong>
              「普洱」這一地名，由元代的「步日部」音譯演變而來。當時，雲南出產的茶葉被統稱為「普茶」。到了明代，《滇略》記載：「士庶所用，皆普茶也，蒸而團之。」這表明，緊壓茶在當時已非常普及。值得一提的是，雖然明太祖朱元璋下詔廢除團茶，推行散茶，但雲南因「天高皇帝遠」，完整地保留了製作緊壓茶的傳統。
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
          <Subheading>巔峰時期（清代）</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            清朝是普洱茶發展的極盛時期。表示「普洱茶名重天下，出普洱府所屬六大茶山，周八百里，入山做茶者數十萬人。茶客收買，運於各處。」這生動地刻畫了當時茶葉貿易的空前盛況。普洱茶被列為皇家貢茶，道光皇帝更御賜「瑞貢天朝」牌匾，懸掛於易武鎮，印證了其至高無上的地位。
          </p>
          <div className="text-sm text-stone-700 leading-relaxed">
            每當我讀到普洱茶的這段歷史，心中總會感到格外的感動。手中的這一杯茶，不僅是滋味的享受，更是千年文脈的傳承。
          </div>
        </div>

        <Subheading>普洱茶的今生：從號級茶到百家爭鳴</Subheading>
        <p>我們將1733年之後，有實物產品可考證的這段歷史，定義為普洱茶的「今生」。其發展脈絡可劃分為以下五個時代：</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">1733 起</div>
            <div className="text-lg font-extrabold text-stone-900">號級茶時代</div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>標誌：</strong>清朝第一個茶莊「同興號」的成立。
              </li>
              <li>
                <strong>特點：</strong>以同慶號、宋聘號等私人茶莊（老字號）為主導。生產上採用石磨、木模等傳統工具壓製；產品形態以團茶、餅茶為主；包裝上已具備強烈的品牌意識，使用內飛（壓在茶餅內的小票）和大票（包裹在整筒茶外的大張說明紙），並印有「以此票為證，謹防假冒」字樣。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">1950–1972</div>
            <div className="text-lg font-extrabold text-stone-900">印級茶時代</div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>背景：</strong>新中國成立後，私人茶莊退出歷史舞台，由昆明、勐海、下關三大國營茶廠統一管理生產。
              </li>
              <li>
                <strong>特點：</strong>「印級茶」的名稱來源於其棉紙包裝上加蓋的「八中」商標印章顏色。其中，紅印圓茶是此時代的標誌性產品，如今在市場上價值極高。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">1972–1992</div>
            <div className="text-lg font-extrabold text-stone-900">七子餅茶時代</div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>標誌：</strong>1973年，熟茶渥堆發酵工藝在昆明茶廠試製成功。
              </li>
              <li>
                <strong>特點：</strong>這項技術的發明，使得普洱茶的陳化過程得以人為加速，僅需一個多月即可達到類似老生茶數十年的醇厚口感，為普洱茶的發展開啟了全新的篇章。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">1992–2007</div>
            <div className="text-lg font-extrabold text-stone-900">中期茶時代</div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>背景：</strong>中國開啟市場經濟，國營茶廠紛紛推出自有品牌（如中茶、大益、下關），同時大量私營茶廠開始崛起。
              </li>
              <li>
                <strong>特點：</strong>市場上出現了許多至今仍具影響力的產品，如紅大益、紫大益、大白菜、綠大樹等。
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">2007 至今</div>
          <div className="text-lg font-extrabold text-stone-900">新代茶時代</div>
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>背景：</strong>2007年普洱茶市場崩盤後，行業進入理性發展期。國營茶廠紛紛改制私有化。
            </li>
            <li>
              <strong>特點：</strong>市場風向從過去的品牌拼配茶，轉向對原料來源的極致追求。茶商們深入源頭，發掘不同山頭的獨特風味，「山頭茶」、「古樹茶」的概念應運而生，形成了「百花齊放，百家爭鳴」的繁榮局面。
            </li>
          </ul>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">課程總結與品飲審美的變遷</div>
          <div className="text-sm leading-relaxed">
            回顧普洱茶的歷史，我們看到了一條清晰的脈絡：從唐宋元明清的「前世」積澱，到號級茶、印級茶、國營廠時代的「今生」演變，最終在2007年後迎來了山頭古樹茶的崛起。
          </div>
          <div className="text-sm leading-relaxed">
            與此同時，市場的品飲審美標準也在發生深刻變化。2007年的市場亂象，讓消費者對傳統大廠的拼配模式產生疑慮，轉而追求更透明、更具風土特色的品飲體驗。人們不再僅僅追逐遙不可及的號級老茶或標準化的數字拼配茶，而是更傾向於品味和探索不同山頭的獨特韻味——例如老班章的霸氣、冰島的甜潤、易武的柔美。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-3': {
    title: '三：普洱茶的分類',
    content: (
      <div className="space-y-5">
        <Subheading>按加工方式分類：生茶 vs. 熟茶</Subheading>
        <p>這是普洱茶最基本、也是最重要的分類方式。它們的核心區別在於是否經過「渥堆發酵」這道人工干預工藝。</p>

        <div className="museum-card museum-paper overflow-hidden">
          <div className="px-5 py-4 border-b border-stone-200 bg-white/70">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">KEY COMPARISON</div>
            <div className="mt-1 font-extrabold text-stone-900">生茶（Sheng/Raw） vs. 熟茶（Shou/Ripe）</div>
          </div>
          <div className="overflow-x-auto bg-white">
            <table className="min-w-full text-sm text-stone-700">
              <thead className="bg-stone-50">
                <tr className="text-left">
                  <th className="px-5 py-3 font-extrabold text-stone-900">維度</th>
                  <th className="px-5 py-3 font-extrabold text-stone-900">生茶 (Sheng/Raw)</th>
                  <th className="px-5 py-3 font-extrabold text-stone-900">熟茶 (Shou/Ripe)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">工藝</td>
                  <td className="px-5 py-4">鮮葉經殺青、揉捻、曬乾後，直接蒸壓成形，依靠自然發酵陳化。</td>
                  <td className="px-5 py-4">以曬青毛茶為原料，經人工渥堆發酵工藝加速陳化。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">新茶茶餅顏色</td>
                  <td className="px-5 py-4">墨綠色，條索清晰。</td>
                  <td className="px-5 py-4">棕褐色或黑褐色。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">茶湯顏色</td>
                  <td className="px-5 py-4">橙黃明亮。</td>
                  <td className="px-5 py-4">紅濃透亮，呈棗紅色或酒紅色。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">香氣特點</td>
                  <td className="px-5 py-4">香氣高揚，富含花香、蜜香、果香。</td>
                  <td className="px-5 py-4">香氣馥郁溫厚，以陳香、木香、棗香為主。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">口感特點</td>
                  <td className="px-5 py-4">有明顯的苦澀感，但能迅速化開，回甘生津快。</td>
                  <td className="px-5 py-4">口感溫和柔潤，甜滑醇厚，幾乎無苦澀感。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">茶性</td>
                  <td className="px-5 py-4">茶氣濃郁，較為猛烈。</td>
                  <td className="px-5 py-4">茶性溫暖柔和，不影響睡眠。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">健康益處</td>
                  <td className="px-5 py-4">-</td>
                  <td className="px-5 py-4">
                    渥堆過程富含益生菌，有助於降脂降壓、保護腸胃。茶性溫和，茶多酚轉化為小分子更易吸收，適合人群更廣。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>按用料工藝分類：拼配、純料與單株</Subheading>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>拼配 (Blended Tea)</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>◦ 定義：</strong>將不同產區、不同年份、不同等級甚至不同品種的毛茶，按照特定比例混合壓製而成。
                </div>
                <div>
                  <strong>◦ 目的與特點：</strong>拼配是一門高超的技術。其優點在於可以揚長避短，將不同茶葉的優點結合，彌補單一原料的缺陷，創造出更協調、更穩定的口感。在計劃經濟時代，拼配也是為了標準化產品口感、增加產量以應對大宗出口訂單的重要手段。
                </div>
              </div>
            </li>
            <li>
              <strong>純料 (Single-Origin Tea)</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>◦ 定義：</strong>這是一個「相對概念」，通常指採用同一產區、同一年份、同一季節、同一樹種的茶葉製成的茶。如今，市場上更傾向於稱之為「山頭茶」。
                </div>
                <div>
                  <strong>◦ 目的與特點：</strong>純料茶旨在集中體現某個特定山頭的風土特徵和獨特風味，如老班章的霸氣、易武的柔美等。它是品鑑者探索產區風味差異的最佳載體。
                </div>
              </div>
            </li>
            <li>
              <strong>單株 (Single-Tree Tea)</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>◦ 定義：</strong>特指僅用一棵古茶樹上採摘的茶葉，單獨製作而成的茶。
                </div>
                <div>
                  <strong>◦ 目的與特點：</strong>單株是普洱茶發燒友級別玩家的終極追求。其價格通常遠高於同產區的純料茶。口感極為純粹、直接，能最大限度地展現該棵樹的個體特徵，但不同單株之間差異巨大。例如，在我製作19棵老班章單株的經驗中，其中一棵因膠質極重，炒製時黏連不散，其風味與其餘18棵截然不同，保留了最原始的老班章韻味，令人感動。
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>按茶樹生長方式分類：野生、栽培型與台地茶</Subheading>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>野生茶 (Wild Tea)</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>◦ 定義：</strong>指在原始森林中非人工栽培的茶樹。以千家寨一棵2700年的野生茶樹王為代表。
                </div>
                <div>
                  <strong>◦ 特點：</strong>茶氣充沛，生長環境綠色無污染。但必須強調，未經「馴化」的野生茶可能含有輕微毒性，腸胃較弱者飲用後易感不適。像我本人，一喝未馴化好的野生茶就會腸胃不適。因此，直接採摘飲用存在一定風險。
                </div>
              </div>
            </li>
            <li>
              <strong>栽培型古樹茶 (Cultivated Ancient Tree Tea)</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>◦ 定義：</strong>由古代先民從野生茶樹中選育，經過長期人工馴化、栽培、選育而來的茶樹品種。如同野豬被馴化為家豬，這是人類智慧與自然選擇的共同結果。
                </div>
                <div>
                  <strong>◦ 特點：</strong>這是目前市面上絕大多數古樹茶的類型。其優點是安全性高、口感協調度好、內含物質豐富。以鳳慶香竹箐一棵3200年的栽培型茶王樹為代表。
                </div>
              </div>
            </li>
            <li>
              <strong>台地茶 (Plantation Tea)</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>◦ 定義：</strong>指運用現代種植技術，在密植高產的茶園中生長的茶，樹齡較短，多為1949年後種植。
                </div>
                <div>
                  <strong>◦ 特點：</strong>為了追求產量，通常需要施肥、打藥等較多的人為干預。其沖泡表現與古樹茶迥異：台地茶往往在前兩泡就釋放出最強烈的香氣和滋味，如同<strong>「高點直線下降」</strong>，後續乏力；而古樹茶的表現則像一條優美的<strong>「拋物線」</strong>，由淺入深，層次感豐富，持久耐泡。我常覺得這有點像做人：有些人初見時熱情似火，讓你覺得他特別好，但慢慢接觸後卻發現，他並非當初表現的那個樣子；而東方人的處世之道，更像是古樹茶，初識時平淡，深交後方顯其醇厚與真誠。
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>按外形分類：餅、沱、磚、散茶與龍珠</Subheading>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>餅茶：</strong>最經典的形態。標準七子餅重量為357克，七餅一提（一筒）約2500克。此規格源於古代茶馬古道運輸的便利性計算。
            </li>
            <li>
              <strong>沱茶：</strong>外形如碗，常見重量為100克或250克。選料通常較為細嫩，口感鮮活。
            </li>
            <li>
              <strong>磚茶：</strong>常見重量為250克至1000克不等，主要為了便於運輸至西藏、蒙古等地。其優點是壓制緊實，轉化雖慢但極為穩定，且不易串味。
            </li>
            <li>
              <strong>龍珠茶：</strong>屬於團茶的一種，近年來因其一粒一泡、沖泡方便而廣受歡迎。
            </li>
            <li>
              <strong>散茶：</strong>保留了茶葉的原始形態。優點是便於觀察用料，可防止「內外不一」；缺點是轉化相對較弱，且佔用空間大，保存不當極易跑氣和串味。
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>按存放方式分類：乾倉 vs. 濕倉</Subheading>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>乾倉普洱 (Dry-Stored Pu&apos;er)</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>◦ 定義：</strong>指在乾燥、通風、陰涼、無雜味、相對濕度小於70%的標準環境中，讓茶葉進行自然緩慢的發酵陳化。
                </div>
                <div>
                  <strong>◦ 優點：</strong>乾倉存放能最大程度地保存普洱茶的本質，使其在歲月中「越陳越香」，轉化出乾淨、純正、富有層次的風味，品飲價值和收藏價值極高。
                </div>
              </div>
            </li>
            <li>
              <strong>濕倉普洱 (Wet-Stored Pu&apos;er)</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>◦ 定義：</strong>這是一種商業行為，指人為地將茶葉置於高溫高濕的環境中（如地下室、地窖），以求在短時間內加速其陳化。
                </div>
                <div>
                  <strong>◦ 風險：</strong>濕倉雖然轉化快，但極易滋生黴菌等有害物質。許多早期港倉茶帶有的「倉味」或「黴味」，便源於此。在此，我想分享我的個人原則：我從不碰任何有雜味、異味，或喝了會導致「鎖喉」（喉嚨不適）的茶。飲茶本為養生，若有損健康，則本末倒置。
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">課程總結與分類知識應用</div>
          <div className="text-sm leading-relaxed">從五個核心維度系統地學習了普洱茶的分類方法：</div>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            <li>按加工方式：分為生茶與熟茶。</li>
            <li>按用料工藝：分為拼配、純料與單株。</li>
            <li>按生長方式：分為野生茶、栽培型古樹茶與台地茶。</li>
            <li>按外形：分為餅、沱、磚、散茶與龍珠等。</li>
            <li>按存放方式：分為乾倉與濕倉。</li>
          </ol>
        </div>
      </div>
    ),
  },
  '#puerh-4': {
    title: '四：普洱茶的品鑑方式',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>品鑑八法：系統化感知普洱茶</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            以「時、外形、香氣、湯色、滋味、活性、葉底、茶韻」八大維度，建立可重複、可比較的品鑑框架。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">01</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">時（茶時）</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">
              品茶需講究「茶時」，即品飲的環境與時機。三大因素會顯著影響茶湯的表現和您的感受：
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>天氣：</strong>晴天時空氣乾燥，香氣高揚奔放；雨天時濕度大氣壓低，香氣會顯得沉悶。
              </li>
              <li>
                <strong>溫度：</strong>天氣寒冷時，身體自然會偏好溫暖醇厚的熟茶；炎熱時，則可能更青睞生津解渴的生茶。
              </li>
              <li>
                <strong>海拔：</strong>海拔高的地方，水的沸點低（可能不足100°C），會影響茶葉內含物質的浸出，進而改變茶湯的滋味。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">02</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">外形（乾茶）</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">在沖泡之前，請您先觀察乾茶的外形，這可以對茶葉品質有一個初步的判斷。</div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>餅形：</strong>是否周正、圓潤，邊緣是否勻稱。
              </li>
              <li>
                <strong>條索：</strong>是緊結清晰，還是鬆泡雜亂？好的茶葉條索應油潤有光澤，而非灰暗無光。
              </li>
              <li>
                <strong>淨度：</strong>是否含有茶果、粗梗、泥土等雜質。
              </li>
              <li>
                <strong>嫩度：</strong>是芽頭居多還是一芽兩葉，亦或是粗枝大葉。但需注意，如易武茶，即使採摘等級不那麼細嫩，滋味也可能極佳。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 md:col-span-2">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">03</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">香氣</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">鑑賞普洱茶的香氣，需從多個維度進行：</div>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="font-extrabold text-stone-900">香氣維度</div>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <strong>高低：</strong>指香氣的擴散度。香氣高的茶，一經沖泡便滿室生香。
                  </li>
                  <li>
                    <strong>長短：</strong>指香氣的持久度。好的香氣不僅停留在空氣中，更能融入茶湯，形成「水含香」，飲後齒頰留香。
                  </li>
                  <li>
                    <strong>濃淡：</strong>指香氣的馥郁程度。
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="font-extrabold text-stone-900">香氣類型</div>
                <div className="mt-3 text-sm text-stone-700 leading-relaxed">普洱茶的香氣極為豐富，常見的有：</div>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>
                    <strong>花香：</strong>如蘭花香、玫瑰花香、玉蘭花香等，清新愉悅。
                  </li>
                  <li>
                    <strong>果香：</strong>如水蜜桃香、龍眼香、哈密瓜香等，甜美迷人。
                  </li>
                  <li>
                    <strong>有年份的香氣：</strong>經歲月陳化後，會轉化出沉穩的木質香、藥香、蔘香等，能帶給人平靜、安穩的感受。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">04</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">湯色</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">
              無論茶湯是淺黃、金黃、橙紅還是琥珀紅，<strong>「晶瑩透亮」</strong>是判斷品質優劣的黃金標準。
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>優質湯色：</strong>清澈透亮，富有光澤，在陽光下甚至能看到一層美麗的「金圈」。
              </li>
              <li>
                <strong>劣質湯色：</strong>渾濁、灰暗、無光澤。這通常意味著製作工藝或倉儲環境存在問題，如茶葉受潮、發霉等。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">05</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">滋味</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">普洱茶的滋味來源於茶多酚、氨基酸、咖啡鹼等多種內含物質。</div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>苦澀的正面意義：</strong>苦澀是普洱茶的「骨架」和基底，是其內含物質豐富的體現。好茶的標誌在於「苦能回甘，澀能生津」，苦澀感能迅速化開，並轉化為持久的甜潤與滿口的津液。
              </li>
              <li>
                <strong>其他滋味：</strong>接下來，請您感受茶湯的厚薄（飽滿度）、甜味、壓舌感（茶湯在舌面上的重量感）、果膠感（粘稠順滑度），以及水路的寬廣或細膩（如老班章的水路寬廣，而曼松的水路則如絲綢般細膩）。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">06</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">活性</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">「活性」是普洱茶最核心的魅力，也是其能夠「越陳越香」的物質基礎。</div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>活性來源：</strong>主要來自茶葉中的「糖苷類物質」，它們是微生物在後期轉化過程中的養分。微生物的養分充足，轉化工作才能到位。
              </li>
              <li>
                <strong>判斷方法：</strong>請您感受口腔中是否有快速而強烈的回甘與生津，以及喉嚨深處是否有舒適的清涼感。對於資深茶客而言，在挑選具有陳放潛力的茶時，活性的重要性甚至高於香氣。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">07</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">葉底</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">品鑑的最後一步是觀察沖泡後的葉底，它能真實反映茶葉的原料品質。</div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>嗅覺：</strong>聞葉底是否有雜味、焦味或異味。
              </li>
              <li>
                <strong>視覺：</strong>辨別葉片的老嫩度、是否勻整、色澤是否鮮活。
              </li>
              <li>
                <strong>觸覺：</strong>用手指輕捏葉底，感受其彈性。若一揉即爛，可能意味著發酵過度或品質不佳。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">08</div>
            <div className="mt-1 text-lg font-extrabold text-stone-900">茶韻（最高層次）</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">這是品鑑的最高層次，是一種更個人化、更深層次的身心體驗。</div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>體感與茶氣：</strong>身體最直接的反應，如微微發汗、打嗝、腹部溫暖，或是反之的脹氣、不適等。
              </li>
              <li>
                <strong>陳韻：</strong>有年份的老茶所帶來的獨特能量感和歲月氣息。
              </li>
              <li>
                <strong>喉韻：</strong>茶湯滑過喉嚨時帶來的感受，是優質古樹茶的必備特徵。好的喉韻深邃而持久，如同在為食道做按摩。
              </li>
              <li>
                <strong>神韻：</strong>這是最個人化的感受。古人云「從來佳茗似佳人」，您可以嘗試將茶的個性擬人化。它可能像小龍女般清冷脫俗，也可能像霸道總裁般強勢而溫柔（如老班章）。就好像我喝老曼峨，總覺得它特別像我的先生——初嚐極苦，但苦盡甘來，苦與甜是同時抵達的。
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">課程總結與品鑑實踐指導</div>
          <div className="text-sm leading-relaxed">品鑑普洱茶的八大維度：</div>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            <li>時：品鑑的環境基礎，決定了茶的最佳表現。</li>
            <li>外形：未泡先識，是對品質的初步預判。</li>
            <li>香氣：探索茶的靈氣，感受其層次與變化。</li>
            <li>湯色：品質的直觀體現，以晶瑩透亮為準則。</li>
            <li>滋味：感受茶的骨架，品味苦澀之後的回甘生津。</li>
            <li>活性：判斷陳化潛力的核心，是越陳越香的基礎。</li>
            <li>葉底：還原茶葉的真實面貌，是最終的品質驗證。</li>
            <li>茶韻：身心合一的體驗，是品鑑的最高境界。</li>
          </ol>
        </div>
      </div>
    ),
  },
  '#puerh-5': {
    title: '五：普洱生茶的製作工藝',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>引言：從茶樹到茶湯的旅程</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            本課的目標，是帶領大家完整地走過一段奇妙的旅程：從茶樹上的一片鮮活綠葉，如何歷經道道工序，最終轉化為我們杯中澄澈明亮的茶湯。
          </p>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            理解這個過程，不僅能滿足我們的好奇心，更是提升品鑑能力的基石。當了解每一個環節背後的目的與智慧時，將能更深刻地體會到一杯茶的來之不易，並從風味中解讀出工藝的印記。
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>生茶初製五大核心步驟</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            普洱茶的初製階段，是奠定其後期轉化潛力的關鍵。這五個核心步驟環環相扣，其共同目標是在去除青草氣、塑造條索的同時，最大程度地保留茶葉的內在活性，為未來數十年的陳化之旅打下堅實基礎。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 1</div>
              <div className="mt-1 text-lg font-extrabold text-stone-900">鮮葉採摘</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                雲南的大葉種普洱茶樹大多高大，且生長形態參差不齊，難以進行機械化操作，因此至今仍以人工採摘為主。採摘標準普遍為「一心二葉」，由經驗豐富的茶農用食指與拇指輕巧掐下。值得注意的是，普洱茶的含水量較高，通常需要 <strong>4至5公斤</strong> 的新鮮茶葉，才能製作出1公斤的曬青毛茶。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 2</div>
              <div className="mt-1 text-lg font-extrabold text-stone-900">攤晾（萎凋）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                攤晾，亦可稱為萎凋，其目的是讓鮮葉在短時間內適度失水，並引發一系列有益的化學轉變。此過程與烏龍茶的長時間萎凋不同，普洱茶的攤晾時間較短，旨在：
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>降低苦澀度：</strong>促進酯型兒茶素轉化為非酯型兒茶素。
                </li>
                <li>
                  <strong>發展香氣：</strong>讓低沸點的青草氣化合物揮發，並氧化形成部分香氣物質。
                </li>
                <li>
                  <strong>增加鮮爽度：</strong>蛋白質水解產生更多游離氨基酸。
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 lg:col-span-2">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">FIELD NOTE</div>
              <div className="mt-1 font-extrabold text-stone-900">為何是「短時攤晾」？</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                普洱茶之所以選擇短時攤晾，是為了「鎖住」更多的內含物質，保留足夠的糖分與多酚類作為後期轉化的「骨架」。講師分享道，這在現實中常源於必要性而分為兩個階段。茶農們可能花費數小時徒步進入原始森林，採摘整個上午。為防止鮮葉在袋中「捂到」而變質，他們會先將茶葉攤放在山中臨時搭建的竹棚平台上。這第一階段溫和的攤晾就在茶山完成。直到下午返回家中，才會進行第二次更為可控的攤晾，直至茶梗用手拗折而不斷時，才進入殺青環節。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 3</div>
              <div className="mt-1 text-lg font-extrabold text-stone-900">殺青</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                普洱茶的殺青工藝極具特色，講求 <strong>「悶抖結合」</strong> 與 <strong>「保留一定活性」</strong>。這與綠茶追求高溫、快速、徹底鈍化酶活性的做法有著根本區別。
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>目的：</strong>利用高溫快速鈍化大部分酶的活性，中止發酵，同時蒸發水分，散發青草氣。
                </li>
                <li>
                  <strong>溫度控制：</strong>鍋溫雖可達約250°C，但當鮮葉投入後，葉溫會控制在 <strong>70至90°C</strong>之間。這個溫度既能殺青，又不至於將酶活性完全殺死。
                </li>
                <li>
                  <strong>經驗之談：</strong>經驗老到的師傅甚至能徒手在鍋中翻炒，憑藉長年累月練就的「鐵砂掌」精準感知葉片溫度，這是機器難以取代的技藝。
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 4</div>
              <div className="mt-1 text-lg font-extrabold text-stone-900">揉捻</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                殺青後的茶葉變得柔軟，此時便進入揉捻環節。其主要目的有二：一是破壞茶葉的細胞組織，讓茶汁與富含果膠的內含物質滲出，附著於條索表面，為茶湯的滋味與厚度打下基礎；二是將葉片塑造成緊實的條索狀。
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>原則：</strong>遵循「嫩葉輕揉，老葉重揉」的原則，精準控制力道與時間。
                </li>
                <li>
                  <strong>工藝：</strong>高品質的古樹茶多採用手工揉捻，以便師傅能更精確地感知茶汁滲出的程度，避免過度揉捻產生澀感。
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 lg:col-span-2">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 5</div>
              <div className="mt-1 text-lg font-extrabold text-stone-900">曬青</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                這是普洱茶製作中 <strong>「非常關鍵的一個步驟」</strong>，也是其區別於烘青、炒青綠茶的核心所在。揉捻後的茶葉會被均勻攤開，在日光下自然曬乾。
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>優勢：</strong>日光曬乾能最大程度保留茶葉中的活性物質與有機質。同時，曬青毛茶的細胞孔隙較大，有利於其在後期轉化過程中散發熱量。
                </li>
                <li>
                  <strong>核心禁忌：</strong>普洱茶 <strong>絕對不能進入烘房烘乾</strong>。一旦經過高溫烘焙，其活性將喪失殆盡，後期轉化的潛力也隨之消失，僅僅成為一款「曬乾的綠茶」。
                </li>
              </ul>
              <div className="mt-4 text-sm text-stone-700 leading-relaxed">
                完成這五大步驟後，得到的便是「曬青毛茶」。至此，初製階段宣告完成，而這也正是普洱生茶與熟茶即將分道揚鑣的岔路口。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>緊壓與成型工序</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            曬青毛茶既可以直接以散茶形式品飲，也可經過緊壓、乾燥與包裝，成為我們更為熟悉的普洱茶餅、磚或沱。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">稱重</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                根據規格與形狀，取相應重量的毛茶。最傳統的「七子餅」規格為 <strong>357克</strong>，其由來是因七餅為一筒，總重恰好約2.5公斤，便於古代茶馬古道的運輸與計量。當然，現代市場也出現了200克、100克甚至7克龍珠等多元化規格。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">壓製</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                稱重後的毛茶會被蒸汽短暫蒸軟，使其變得柔韌且富有粘性，然後迅速置入模具中進行壓製成型。傳統工藝採用石磨重壓，力度均勻，茶餅鬆緊適度；現代工廠則多使用液壓機，效率更高。除了餅茶，還有磚茶、沱茶等多種形態。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">晾乾</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                壓製成型的茶餅內部仍含有較高水分，需要放置在通風的晾乾架上自然陰乾。根據國家標準，普洱茶的成品含水量必須控制在 <strong>13%以下</strong>，以防在後期儲存中發霉變質。然而，水分也不能過低，若低於 <strong>5%</strong>，茶葉活性會大幅降低，影響陳化潛力與口感潤滑度。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">包裝</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                傳統的包裝方式極具智慧。首先用食品級的白棉紙將單片茶餅包裹，再將七餅疊為一筒，用天然的 <strong>筍殼</strong> 紮緊。
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>筍殼的優點：</strong>具有良好的防潮、防異味效果，能為普洱茶的長期陳化提供一個穩定而潔淨的微環境。
                </li>
                <li>
                  <strong>筍殼的缺點：</strong>天然材質容易滋生蟲蛀，這也是為何有些老茶的筍殼包裝上會看到蟲蛀的粉末。
                </li>
                <li>
                  <strong>現代實踐：</strong>在包裝前，筍殼會經過日曬與火烤處理，一來去除邊緣的毛刺，二來起到一定的驅蟲作用。儘管現代出現了鋁箔、紙箱等替代包裝，但講師個人依然認為筍殼包裝是「最佳的選擇」，最能體現普洱茶的「古早味」。
                </li>
              </ul>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                至此，一餅普洱生茶的製作已然完成。接下來的旅程，將交由最神奇的催化劑——時間，在漫長的歲月中靜待其發生美妙的轉變。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>生茶的陳化潛力與轉變</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            普洱生茶最大的魅力，不僅在於新茶時的鮮爽甘冽，更在於其獨一無二的「後發酵」潛力。隨著時間的推移，茶葉中的內含物質在微生物與氧化的共同作用下，會發生一系列複雜的轉化，風味與口感日趨醇和。以廣東地區倉儲的生茶為例，其湯色的演變路徑清晰地展現了這一過程：
          </p>

          <div className="museum-card museum-paper overflow-hidden">
            <div className="px-5 py-4 border-b border-stone-200 bg-white/70">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">COLOR PATH</div>
              <div className="mt-1 font-extrabold text-stone-900">湯色演變（廣東倉儲示例）</div>
            </div>
            <div className="p-5">
              <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>1-2年：</strong>淺黃色、黃綠色，茶湯清亮，帶有新茶的鮮活感。
                </li>
                <li>
                  <strong>3-5年：</strong>逐漸轉為橙紅色，苦澀感減弱，甜醇度開始顯現。
                </li>
                <li>
                  <strong>5-8年：</strong>呈現琥珀帶紅的色澤，口感趨於飽滿順滑。
                </li>
                <li>
                  <strong>8-15年：</strong>變為迷人的石榴紅，陳香初顯。
                </li>
                <li>
                  <strong>15-30年：</strong>湯色猶如寶石紅，晶瑩剔透，茶湯醇厚，韻味悠長。
                </li>
                <li>
                  <strong>30年以上：</strong>最終呈現深邃的酒紅色，達到品飲的巔峰狀態。
                </li>
              </ul>
              <div className="mt-4 text-sm text-stone-700 leading-relaxed">
                需要強調的是，湯色的變化速度與最終呈現，會因倉儲環境的溫度、濕度與通風情況不同而存在差異。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">總結：原始工藝的智慧</div>
          <div className="text-sm leading-relaxed">
            從 鮮葉採摘 開始，歷經 攤晾、殺青、揉捻，再到關鍵的 日光曬青，製成曬青毛茶。而後，再通過 稱重、蒸壓、晾乾 與 包裝，最終成為一餅等待時間雕琢的藝術品。
          </div>
          <div className="text-sm leading-relaxed">
            不難發現，普洱生茶的製作過程，是一種人為干預相對較少的原始工藝。這正呼應了一句樸素的哲學：「頂級的食材，烹飪方式都是最簡單的。」普洱茶正是憑藉其優異的大葉種內含物質，透過最質樸的工藝保留其活性，將後續的風味塑造權交給了時間與微生物。
          </div>
          <div className="text-sm leading-relaxed">
            也正因如此，普洱茶被譽為「可以喝的古董」，它越放越香，其每年的細微變化都如同孩子的成長，充滿了未知的驚喜與期待。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-6': {
    title: '六：普洱生茶的沖泡技巧',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>引言：喚醒茶葉靈魂的藝術</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            如果說優質的原料與精湛的工藝是普洱茶的「體」，那麼精準的沖泡則是喚醒其靈魂、充分釋放其美好風味的「用」。
          </p>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            大家準備好自己喜愛的茶具與課程配備的生茶樣品，尋找一個安靜的角落，讓心沉靜下來，將一片片沉睡的茶葉喚醒，轉化為一杯充滿生命力的茶湯的過程。那麼，泡好一杯茶，我們首先需要關注的是什麼？答案是水——這一切美好的源頭。
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>沖泡的核心三要素：水、溫、比</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            水、水溫與茶水比例，是構成一杯茶湯的基礎框架，猶如建築的地基，任何一個環節的偏差都可能導致最終風味的失衡。精準掌控這三大要素，是沖泡好一杯普洱生茶的先決條件。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">WATER</div>
              <div className="mt-1 font-extrabold text-stone-900">水的選擇（茶之母）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                經過多年的實踐總結，優質的礦泉水 是沖泡普洱茶的最佳選擇。理想的水應具備以下特點：
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>pH值適中：</strong>最佳範圍在 <strong>6.5至7.5</strong> 之間。過酸或過鹼的水都會影響茶湯的甜潤度。
                </li>
                <li>
                  <strong>硬度適宜：</strong>水中的礦物質含量不宜過高。鈣、鎂離子含量過高的硬水，會使茶湯色澤發黑、口感粗糙，不夠細膩。
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">TEMP</div>
              <div className="mt-1 font-extrabold text-stone-900">水溫的掌控</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                普洱茶屬於大葉種喬木，內含物質豐富，需要 足夠高的溫度 才能充分激發其深層的香氣與滋味。
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>海拔影響：</strong>水的沸點會隨海拔升高而降低。例如，在台灣平地水的沸點可達101°C，而在雲南昆明約為94°C，到了西藏則可能只有75°C。
                </li>
                <li>
                  <strong>具體建議：</strong>一般情況下，沖泡普洱生茶應使用 <strong>100°C</strong> 的沸水。但對於三年內的、芽頭較多的細嫩新茶，為了避免燙傷茶葉產生澀感，可在潤茶及前幾泡時，將水溫適當降至 <strong>95°C</strong> 左右。
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">RATIO</div>
              <div className="mt-1 font-extrabold text-stone-900">茶水比的平衡</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                茶水比，即注水量與投茶量的比例，直接決定了茶湯的濃度與口感。
              </div>
              <div className="mt-3 space-y-2 text-sm text-stone-700 leading-relaxed">
                <div>
                  <strong>建議比例：</strong>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>1:20</strong>（如150毫升蓋碗投茶7.5克）：此比例沖泡出的茶湯滋味飽滿，層次豐富，是較為通用的黃金比例。
                  </li>
                  <li>
                    <strong>1:25：</strong>此比例的茶湯會顯得更為清甜，適合喜歡淡雅口感的茶友。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-1 text-sm text-stone-700 leading-relaxed">
            掌握了這三大基礎要素，我們還需要為它們尋找一個完美的載體——茶具。
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>器為茶之父：茶具的選擇與影響</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            茶具不僅僅是盛放茶與水的工具，其材質、器型都會直接作用於茶湯，對最終的風味呈現產生微妙而關鍵的影響。
          </p>

          <div className="museum-card museum-paper overflow-hidden">
            <div className="px-5 py-4 border-b border-stone-200 bg-white/70">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">BOILING KETTLE</div>
              <div className="mt-1 font-extrabold text-stone-900">煮水器的選擇</div>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="min-w-full text-sm text-stone-700">
                <thead className="bg-stone-50">
                  <tr className="text-left">
                    <th className="px-5 py-3 font-extrabold text-stone-900">材質</th>
                    <th className="px-5 py-3 font-extrabold text-stone-900">效果評估</th>
                    <th className="px-5 py-3 font-extrabold text-stone-900">適用建議</th>
                    <th className="px-5 py-3 font-extrabold text-stone-900">注意事項</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">不銹鋼</td>
                    <td className="px-5 py-4">公正，不加分不減分</td>
                    <td className="px-5 py-4">通用選擇，穩定可靠</td>
                    <td className="px-5 py-4">無特殊影響</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">陶壺（紫砂/紫陶/柴燒）</td>
                    <td className="px-5 py-4">最佳選擇，能提升風味</td>
                    <td className="px-5 py-4">沖泡生茶的首選</td>
                    <td className="px-5 py-4">-</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">鐵壺</td>
                    <td className="px-5 py-4">適合老茶與熟茶，能提升湯感厚度</td>
                    <td className="px-5 py-4">不建議用於新製生茶，可能掩蓋其鮮活感</td>
                    <td className="px-5 py-4">需注意保養，避免鏽味影響水質</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">銀壺</td>
                    <td className="px-5 py-4">軟化水質，但可能削弱茶的風骨</td>
                    <td className="px-5 py-4">建議用於熟茶，能使其更甜潤順滑</td>
                    <td className="px-5 py-4">泡出的生茶可能缺乏勁道與骨架感</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">玻璃壺</td>
                    <td className="px-5 py-4">不建議使用</td>
                    <td className="px-5 py-4">-</td>
                    <td className="px-5 py-4">會降低茶湯的圓潤度與飽滿度</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">主泡器（新茶：五年內）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                首選 <strong>白瓷蓋碗</strong>。白瓷材質中正平和，不吸香不吸味，能均衡地展現新生茶的香氣、滋味與湯色。器型上，建議選擇 <strong>敞口、肚圓</strong> 的款式，既方便投茶，也利於茶葉在水中充分舒展。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">主泡器（老茶：五年以上）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                可選用透氣性佳的 <strong>紫砂壺、紫陶壺</strong> 等。壺的選擇標準為 <strong>口闊</strong>（方便投茶）、<strong>腹圓</strong>（利於舒展）、<strong>直流</strong>（出水順暢）。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">公杯的選擇</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                公杯，又稱茶海，用於勻和茶湯、沉澱茶末。雖然玻璃公杯便於觀賞湯色，但它會略微降低茶湯的細膩度與飽滿度。若以品飲體驗為優先，自飲時建議選用 <strong>銀、紫砂或紫陶公杯</strong>，更能保持茶湯的優良質感。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>實戰演練：沖泡七步驟詳解</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            理論準備就緒，接下來讓我們進入實戰環節。一套標準化且充滿細節的沖泡流程，是穩定出品一杯好茶的保證。
          </p>

          <ol className="space-y-4">
            <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 1</div>
              <div className="mt-1 font-extrabold text-stone-900">備器</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                將自己喜愛的茶具佈置在茶席上。擺放時不僅要考慮美觀，更要符合人體工學，確保每一個器物都順手、易取。核心是讓自己處於一個放鬆、靜心的狀態，因為泡茶者安穩的心境，會自然地傳遞給茶湯。
              </div>
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 2</div>
              <div className="mt-1 font-extrabold text-stone-900">取茶與解茶</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                初學者可使用電子秤，確保茶水比的精準。解茶時，應順著茶餅的紋理，用茶針 輕輕扭動、分層剝下，盡量保持條索的完整。切忌直接掰斷，以免產生過多碎末，導致茶湯苦澀。
              </div>
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 3</div>
              <div className="mt-1 font-extrabold text-stone-900">溫器</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                用沸水將主泡器與公杯、品茗杯充分溫熱，務必做到 「溫熱溫透」，連蓋碗的蓋子也要淋到。這不僅是為了清潔，更是為了提高器具溫度，為接下來的醒茶做好準備。
              </div>
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 4</div>
              <div className="mt-1 font-extrabold text-stone-900">投茶與潤茶（醒茶）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                潤茶，或稱醒茶，是喚醒沉睡茶葉的關鍵一步，分為乾濕兩個階段：
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>乾潤（乾醒）：</strong>趁蓋碗極熱時，迅速將茶葉投入，立即蓋上蓋子。利用蓋碗內的蒸騰熱氣，讓茶葉的香氣初步甦醒。此時可開蓋聞香，講師提醒：「這個時候我們可以稍微的聞一下。它非常的香...可以判斷一款茶它的味道乾不乾淨。」
                </li>
                <li>
                  <strong>濕潤：</strong>沿蓋碗邊緣環繞注水，讓所有茶葉均勻接觸水分。潤茶一次即可，時間約5-10秒。出湯時動作要穩，務必 將潤茶水瀝乾，但切忌來回抖動蓋碗，以免影響後續茶湯的細膩度。潤茶水瀝乾後，同樣要將蓋子打開，讓茶葉短暫「呼吸」一下，散去水汽，這有助於更好地喚醒香氣。講師在示範中聞香讚道：「好香啊。然後花香特別的馥郁。」
                </li>
              </ul>
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 5</div>
              <div className="mt-1 font-extrabold text-stone-900">正式沖泡</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                普洱生茶的注水手法，可總結為 「高溫、提香、壓韻」 的心法。
              </div>
              <div className="mt-3 rounded-2xl border border-stone-200 bg-white p-4">
                <div className="font-extrabold text-stone-900">手法拆解</div>
                <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                  <li>將蓋碗想像成一個時鐘，在 5點鐘或7點鐘方向（取決於左右手習慣）定點注水。</li>
                  <li>水線要 細，沿著蓋碗內壁注入，避免直衝茶葉中心。</li>
                  <li>
                    注水時，將水線從低處 緩慢拉高約10公分，再輕輕下壓。這個提拉的動作，能有效激發茶葉的香氣，並將韻味壓入茶湯之中。
                  </li>
                </ol>
              </div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                <strong>時間控制：</strong>注水時間約10秒，浸泡時間則根據茶葉的緊壓程度與沖泡次數，在10-20秒之間靈活調整。每泡出湯時，務必瀝乾淨，為下一泡做好準備。
              </div>
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 6</div>
              <div className="mt-1 font-extrabold text-stone-900">開蓋呼吸</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                每一泡沖泡完畢、出湯之後，都要將蓋碗的蓋子打開，放在一旁，讓高溫下的葉底有機會接觸空氣、「呼吸」散熱，避免因長時間悶泡而產生熟味。
              </div>
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 7</div>
              <div className="mt-1 font-extrabold text-stone-900">分湯與品飲</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                在分湯前，才將品茗杯中的溫杯水倒掉，以保持杯子的溫度。分湯至七分滿即可，寓意「茶倒七分滿，留下三分是人情」。茶湯的最佳品飲溫度約為50°C。同時，為保持風味的連續性，每泡之間的沖泡間隔不宜超過三分鐘。尤其是前幾泡，應專注品飲，才能完整捕捉到一杯好茶最精彩的變化。講師笑言：「每次上課一個人喝茶，我都覺得特別浪費，應該要找一個人來跟我分享。」這也提醒我們，好茶當與好友共享。
              </div>
            </li>
          </ol>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">總結：專注品飲的價值</div>
          <div className="text-sm leading-relaxed">
            普洱生茶的沖泡流程，從基礎的 水、溫、比 三要素，到 器為茶之父 的茶具選擇，再到實戰演練的 七大步驟。
          </div>
          <div className="text-sm leading-relaxed">
            核心要點：潤茶時的「乾潤」與「濕潤」兩段式喚醒，以及正式沖泡時獨特的「高溫提香壓韻」注水手法。理論的學習最終需要通過雙手的實踐來印證。親自動手，反覆練習，感受茶湯在細節變化中的響應。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-7': {
    title: '七：普洱熟茶的工藝與歷史',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>引言：時間的魔法與人工的智慧</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            普洱熟茶的世界。相較於生茶的鮮爽與勁道，熟茶以其溫潤醇和、對腸胃刺激性低的特點，成為了許多人接觸普洱茶的入門之選。
          </p>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            熟茶是如何通過一種被稱為「渥堆發酵」的人工智慧，在短短幾十天內模擬出自然陳化數十年的效果，並追溯這項獨特工藝的發展歷史。
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>熟茶的感官特徵與審美</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            普洱熟茶的審美體系與生茶截然不同。如果說品鑑生茶追求的是香氣、回甘、喉韻與變幻，那麼優質熟茶的核心魅力則在於其無與倫比的 <strong>湯感</strong>。
          </p>

          <div className="museum-card museum-paper overflow-hidden">
            <div className="px-5 py-4 border-b border-stone-200 bg-white/70">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">AESTHETICS</div>
              <div className="mt-1 font-extrabold text-stone-900">熟茶審美維度</div>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="min-w-full text-sm text-stone-700">
                <thead className="bg-stone-50">
                  <tr className="text-left">
                    <th className="px-5 py-3 font-extrabold text-stone-900">審美維度</th>
                    <th className="px-5 py-3 font-extrabold text-stone-900">特徵描述</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">外形</td>
                    <td className="px-5 py-4">
                      呈褐色或紅棕色，因經過渥堆發酵，條索完整度較生茶低。優質熟茶表面常顯現金黃色的茶毫。部分茶餅會採用「撒面茶」工藝，即在表面鋪撒一層等級較高的原料，以求美觀。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">風味（審美核心）</td>
                    <td className="px-5 py-4">
                      強調 「湯感的滑厚、甜、醇、柔」。一杯頂級的熟茶，其茶湯應如「媽媽在炭火上慢煲的濃湯」，入口絲滑，幾乎感受不到水的硬度，只有綿密柔軟的質感。閉上眼品味，那種溫潤的「米湯感」是其最高境界。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">香氣</td>
                    <td className="px-5 py-4">
                      具有獨特的陳香。新製的熟茶會帶有「渥堆味」，這是發酵過程的正常氣息，會隨時間陳放而散去。優質熟茶應展現出迷人的 焦糖香 與 蜜糖香，陳化若干年後，更會衍生出 樟香、陳香、棗香 等沉穩的香氣。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">湯色</td>
                    <td className="px-5 py-4">
                      標準的湯色為 「紅濃透亮」，呈現深紅色或琥珀色，即使色深依然晶瑩剔透。若茶湯發黑、渾濁不透光，則通常是發酵過重或工藝不佳的表現。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>熟茶工藝的發展歷程：五個世代的演進</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            我們今天所熟知的普洱熟茶「渥堆發酵」工藝，並非自古有之，而是經歷了數十年摸索與演進的結果，最終在1973年於雲南走向成熟。其發展大致可分為五個世代：
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">GEN 1</div>
              <div className="mt-1 font-extrabold text-stone-900">第一代（歷史源頭）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                歷史文獻中（如李拂一的《佛海茶業概論》）曾記載過一種「紅湯普洱茶」的製法，但此工藝現已失傳，與當代熟茶並無直接傳承關係。
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">GEN 2</div>
              <div className="mt-1 font-extrabold text-stone-900">第二代（南洋潑水茶）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                為滿足港澳及東南亞市場對紅湯老茶的巨大需求，廣東茶商摸索出對雲南曬青毛茶進行「潑水發酵」的方法，催熟茶葉，後由廣東省茶葉公司將此技術系統化，製作出著名的「廣雲貢餅」。
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">GEN 3 · 1973</div>
              <div className="mt-1 font-extrabold text-stone-900">第三代（大堆發酵法）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                1973年，以吳啟英、鄒炳良等前輩為代表的雲南茶人，在借鑒廣東經驗的基礎上，結合雲南本地的氣候與環境，成功研發出穩定性與轉化率更高的「大堆發酵」技術。此法奠定了現代普洱熟茶工藝的基石。
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">GEN 4</div>
              <div className="mt-1 font-extrabold text-stone-900">第四代（外源菌添加發酵）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                隨著科學的進步，人們對發酵過程中微生物的作用有了更深刻的理解。於是，人為篩選並添加有益菌種的發酵技術應運而生，如大益集團研發的「黑馬技術」。這種方法使得發酵過程更可控，產品質量更穩定。
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">GEN 5</div>
            <div className="mt-1 font-extrabold text-stone-900">第五代（小堆離地發酵）</div>
            <div className="mt-2 text-sm text-stone-700 leading-relaxed">
              傳統大堆發酵動輒10噸起步，高昂的原料成本與風險使其無法使用價格高昂的古樹茶。「小堆離地發酵」技術的出現（發酵量可從50至200公斤不等），完美解決了這一痛點。它不僅提升了發酵環境的潔淨度，更使得用頂級古樹原料製作高端熟茶成為可能，極大地拓展了熟茶的品質天花板。
            </div>
          </div>

          <div className="text-sm text-stone-700 leading-relaxed">
            這五代技術的演進，清晰地展現了普洱熟茶工藝從依賴自然、偶然摸索，到科學化、精準可控的發展路徑。
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>核心技術：渥堆發酵全解析</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            「渥堆發酵」是熟茶製作的靈魂，是區別於生茶的最關鍵一步。它是一個在可控環境下，利用微生物、濕熱、氧化共同作用，加速茶葉陳化的過程。
          </p>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>渥堆原理：</strong>
              在潔淨的發酵車間內，將曬青毛茶加水（濕水）後，堆積成一定高度（通常70公分以上）的茶堆。通過控制溫濕度，利用茶葉自身攜帶及環境中的有益微生物進行發酵。整個發酵週期通常為 4至12週。
            </li>
            <li>
              <strong>發酵師傅與環境的關鍵角色：</strong>
              渥堆發酵技術含量極高，不僅極其考驗發酵師傅的經驗，對環境的要求也同樣苛刻。溫度是成敗的關鍵：溫度過低，發酵無法啟動；溫度過高，尤其是堆心溫度超過 64°C，則會發生「燒堆」，導致茶葉碳化，茶湯發酸，失去價值。同時，老廠所擁有的「相對穩定的菌群環境」亦是無價之寶。講師指出，老廠房牆壁上看似塵土的物質，可能蘊含著上億個有益微生物，它們共同構成了一個獨特且穩定的專有微生態，賦予了茶葉難以被新廠複製的風味印記。
            </li>
            <li>
              <strong>水質的影響：</strong>
              用於「濕水」的水質直接影響熟茶的品質。如今，許多注重品質的茶廠，如大益使用其專屬的「元井」，或特地尋找優質山泉水來進行發酵，以求更純淨甘甜的口感。
            </li>
            <li>
              <strong>翻堆的重要性：</strong>
              茶堆內部和外部的溫度、濕度、氧氣接觸量都不同，為確保發酵均勻，發酵師傅需要根據堆溫的變化，定時進行「翻堆」。這個動作如同炒菜時的翻炒，是調節溫度、讓茶葉充分轉化的必要手段。
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>從毛茶到成品的後續工序</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            渥堆發酵完成後，還需經過一系列精細的處理，才能最終成為一餅合格的普洱熟茶。
          </p>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>乾燥：</strong>
              發酵完成的茶葉會被攤開，並在中間「開溝」以增加通風，在室內自然風乾，使含水率降至14%以下。切記，熟茶毛料 不可烘乾或曬乾，以免破壞其風味。
            </li>
            <li>
              <strong>解塊與老茶頭：</strong>
              渥堆過程中，富含果膠和菌絲蛋白的茶葉會黏連結塊。解塊後的便是熟散茶。其中，一些黏連得特別緊實、難以解開的硬塊，便是發酵的副產物——「老茶頭」。老茶頭茶湯異常飽滿甜潤，膠質感十足，深受茶友喜愛。
            </li>
            <li>
              <strong>分篩與挑揀：</strong>
              傳統工藝會對熟散茶進行分級（如1、3、5、7級），而現代則多為「一口料」不再分級。之後會通過靜電吸附去除雜質，並進行人工挑揀，將混入的石子、穀殼、頭髮絲等雜物一一揀出，這是一道極為耗費人力的工序。
            </li>
            <li>
              <strong>倉儲陳化（散茶狀態）：</strong>
              剛發酵完的熟茶不宜立即壓餅，因為其「渥堆味」較重。通常會將熟散茶以麻袋裝好，在潔淨的倉庫中陳放 一到三年，有時甚至長達五年以上，待渥堆味散去，茶性趨於穩定，陳香、棗香等更怡人的香氣顯現後，再進行下一步。
            </li>
            <li>
              <strong>蒸壓與定型：</strong>
              陳化後的熟散茶，經過稱重、蒸汽蒸軟、壓製成型等工序，與生茶的壓餅流程類似。
            </li>
            <li>
              <strong>最終乾燥（烘房）：</strong>
              這是熟茶壓餅後 至關重要 的一步。與生茶不同，熟茶餅 一定 要進入烘房，在約 60°C 的相對低溫下，烘烤 36至72小時。這是因為熟茶餅較厚實，自然晾乾難以完全乾透，若內部殘留水分，極易在後期從內部發霉。
            </li>
          </ul>
          <div className="text-sm text-stone-700 leading-relaxed">
            經過以上所有工序，一餅品質穩定、風味醇和的普洱熟茶才算真正誕生。
          </div>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">總結：酵素之茶的健康價值</div>
          <div className="text-sm leading-relaxed">
            普洱熟茶從濕水渥堆、翻堆乾燥，到分揀陳化、蒸壓烘乾的全過程。這是一門結合了傳統經驗與現代科學的複雜工藝。
          </div>
          <div className="text-sm leading-relaxed">
            從健康價值的角度看，普洱熟茶堪稱一款真正的 「酵素茶」。其富含的微生物、有益菌群與多種轉化酶，對人體有諸多益處。講師建議，脾胃虛弱的現代人，不妨嘗試連續半個月每日飲用適量熟茶，可能會感受到腸胃蠕動改善、新陳代謝加快、膚色提亮等積極變化。在快節奏、高壓力的生活中，一杯溫潤的熟茶，無疑是對身心極佳的滋養。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-8': {
    title: '八：普洱熟茶的沖泡藝術',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>引言：釋放醇厚溫潤之美</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            如何通過精準的沖泡技藝，將其 「濃厚順滑」、「米湯感」 的獨特魅力完美展現出來。
          </p>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            普洱熟茶看似溫和易泡，實則對茶師的功力是一大考驗。沖泡得當，它便是一碗溫暖心脾的瓊漿玉液；若手法不當，則可能導致滋味寡淡、湯感薄削，甚至出現令人不悅的「鎖喉感」，白白浪費了一款好茶。
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>基礎知識：熟茶的等級劃分</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            在沖泡前，了解熟茶的等級劃分，有助於我們預判茶性，從而選擇更合適的沖泡策略。傳統國營茶廠時期，熟茶有著系統的分級方法（如1、3、5、7、9級），並對應著如「7572」等經典編號。然而，隨著市場的發展，如今多以「一口料」（即不分級的同一批原料）為主，等級概念有所弱化。
          </p>
          <p className="text-sm text-stone-700 leading-relaxed">
            市面上常見的 「宮廷級」，並非歷史上的御用概念，而是指採用特級以上的細嫩芽頭製成的熟茶，是現代市場的產物。其特點是毫香濃郁，但因用料細嫩，耐泡度相對較低。
          </p>

          <div className="museum-card museum-paper overflow-hidden">
            <div className="px-5 py-4 border-b border-stone-200 bg-white/70">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">GRADING</div>
              <div className="mt-1 font-extrabold text-stone-900">感官審評趨勢（特級 → 九級）</div>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="min-w-full text-sm text-stone-700">
                <thead className="bg-stone-50">
                  <tr className="text-left">
                    <th className="px-5 py-3 font-extrabold text-stone-900">等級</th>
                    <th className="px-5 py-3 font-extrabold text-stone-900">條索趨勢</th>
                    <th className="px-5 py-3 font-extrabold text-stone-900">香氣趨勢</th>
                    <th className="px-5 py-3 font-extrabold text-stone-900">滋味趨勢</th>
                    <th className="px-5 py-3 font-extrabold text-stone-900">湯色趨勢</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">特級/一級</td>
                    <td className="px-5 py-4">緊細/緊結，紅褐顯毫</td>
                    <td className="px-5 py-4">陳香濃郁</td>
                    <td className="px-5 py-4">濃醇甘爽/回甘</td>
                    <td className="px-5 py-4">紅艷明亮</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">三級/五級</td>
                    <td className="px-5 py-4">尚緊結/緊實，褐潤帶梗</td>
                    <td className="px-5 py-4">陳香濃厚</td>
                    <td className="px-5 py-4">醇厚回甘</td>
                    <td className="px-5 py-4">紅濃明亮</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900">七級/九級</td>
                    <td className="px-5 py-4">尚緊實/粗鬆，褐欠潤</td>
                    <td className="px-5 py-4">陳香純正/平和</td>
                    <td className="px-5 py-4">醇和/純正回甘</td>
                    <td className="px-5 py-4">紅尚濃/褐紅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm text-stone-700 leading-relaxed">等級僅為參考，一杯茶最終的呈現，更依賴於沖泡者的技藝。</div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>沖泡前的關鍵準備</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            一杯熟茶的成敗，往往在注水之前就已決定。細緻的準備工作，是沖泡出醇厚茶湯的基礎。
          </p>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>分析茶性：</strong>
              拿到一款茶，首先要 <strong>聞其乾茶</strong>。判斷它屬於帶有渥堆味的新茶，還是已顯現花蜜香、陳香的中期茶，亦或是散發藥香、沉香的老茶。不同的茶齡與倉儲狀態，需要不同的沖泡策略來揚長避短。
            </li>
            <li>
              <strong>醒茶：</strong>
              這是提升熟茶風味 <strong>最關鍵的動作之一</strong>。其目的是解除茶餅長期緊壓帶來的沉悶感與倉儲中的雜氣，釋放渥堆氣，讓茶葉「呼吸」。
              <div className="mt-2 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="space-y-2">
                  <div>
                    <strong>◦ 理想操作：</strong>提前一個月左右，將茶餅撬散成小塊，放入紫砂罐等透氣性良好的容器中靜置。
                  </div>
                  <div>
                    <strong>◦ 應急操作：</strong>即便時間不允許，也應至少提前一至兩天將當次要沖泡的量撬散，讓其與空氣充分接觸。
                  </div>
                </div>
              </div>
            </li>
            <li>
              <strong>取茶：</strong>
              取茶時，務必做到 <strong>「大塊、小塊、碎茶」均勻搭配</strong>。這樣可以確保茶葉在沖泡過程中釋出內含物質的節奏相對協調，避免前幾泡過濃而後續迅速變淡。
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>沖泡要素與技法精髓</Subheading>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>用水選擇：</strong>熟茶對水的pH值寬容度比生茶更高，可接受 <strong>7.0至8.5</strong> 的弱鹼性水。但仍需避免 <strong>過硬或鹼性過強</strong> 的水，因其會讓茶湯色澤變暗、口感發澀、順滑度降低。
            </li>
            <li>
              <strong>主泡器選擇：</strong>強烈建議使用 <strong>紫砂壺、紫陶壺或柴燒壺</strong>。這類陶器具有良好的保溫性和一定的透氣性，能更好地聚攏熟茶的香氣，並醇化湯感。理想的壺型為 「上下比較一致、肚子大」 的直筒形或仿古形，有利於茶葉均勻釋放。
            </li>
            <li>
              <strong>茶水比：</strong>建議採用比生茶更濃郁的比例，通常為 <strong>1:15至1:20</strong>。1:15的比例能帶來非常濃厚酽滑的湯感，適合重口味的茶客。
            </li>
            <li>
              <strong>潤茶：</strong>方式與生茶類似（乾潤+濕潤），但因熟茶條索更緊結，潤茶時間需稍長，約 <strong>20秒</strong>，以充分喚醒茶葉。投茶乾醒後，講師聞香讚道：「哇，好香啊。有一種糯香和稻米的香味。」
            </li>
            <li>
              <strong>沖泡手法（核心技法）：</strong>這是與生茶沖泡最大的區別。生茶講求「高溫提香壓韻」，而沖泡熟茶的核心心法是 <strong>「低、緩、輕、柔」</strong>。
              <div className="mt-2 rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-2">
                <div>
                  <strong>◦ 具體操作：</strong>注水點仍在5點或7點鐘方向，但水流要 <strong>緊貼壺口</strong>，低且緩慢地注入。水流粗細為「中水流」。
                </div>
                <div>
                  <strong>◦ 核心理念：</strong>對待熟茶要像對待一位溫和的長者，溫柔、不打擾，輕柔地引導出其最美好、最醇厚的一面。
                </div>
              </div>
            </li>
            <li>
              <strong>水溫：</strong>無論新茶、老茶，沖泡熟茶 <strong>一定</strong> 要用 <strong>100°C</strong> 的沸水。足夠的溫度是確保湯感濃醇度、避免出現「茶水分離」寡淡口感的絕對保證。
            </li>
            <li>
              <strong>出湯：</strong>同樣要輕柔。為了最大限度保持茶湯的醇厚感，出湯口應盡量降低，甚至貼近公杯的杯壁緩緩注入，避免茶湯因高衝而產生衝擊，影響其一體性。
            </li>
          </ul>
        </div>

        <div className="museum-card museum-paper overflow-hidden">
          <div className="px-5 py-4 border-b border-stone-200 bg-white/70">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">SIDE-BY-SIDE</div>
            <div className="mt-1 font-extrabold text-stone-900">生茶 vs. 熟茶：沖泡核心差異</div>
          </div>
          <div className="overflow-x-auto bg-white">
            <table className="min-w-full text-sm text-stone-700">
              <thead className="bg-stone-50">
                <tr className="text-left">
                  <th className="px-5 py-3 font-extrabold text-stone-900">項目</th>
                  <th className="px-5 py-3 font-extrabold text-stone-900">普洱生茶沖泡</th>
                  <th className="px-5 py-3 font-extrabold text-stone-900">普洱熟茶沖泡</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">核心手法</td>
                  <td className="px-5 py-4">高溫、提香、壓韻（有拉高動作）</td>
                  <td className="px-5 py-4">低、緩、輕、柔（貼近壺口）</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">建議水溫</td>
                  <td className="px-5 py-4">95-100°C（新茶可稍降）</td>
                  <td className="px-5 py-4">必須100°C</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">建議主泡器</td>
                  <td className="px-5 py-4">白瓷蓋碗（尤適新茶）</td>
                  <td className="px-5 py-4">紫砂壺/紫陶壺/柴燒壺</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">建議茶水比</td>
                  <td className="px-5 py-4">1:20 - 1:25</td>
                  <td className="px-5 py-4">1:15 - 1:20</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">潤茶時間</td>
                  <td className="px-5 py-4">約5-10秒（視茶而定）</td>
                  <td className="px-5 py-4">稍長，約20秒</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 bg-white/70 text-sm text-stone-700 leading-relaxed">
            兩者手法的核心哲學差異顯而易見：充滿年輕活力的生普，需要「提香壓韻」這樣動態的手法去主動激發其複雜的香氣與骨架；而歷經人工陳化的熟普，則需用「低、緩、輕、柔」的態度溫柔對待，引導其深沉醇和的本質，而非驚擾。前者是一場充滿能量的對話，後者則是一次心懷敬意的聆聽。
          </div>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">總結與回顧</div>
          <div className="text-sm leading-relaxed">
            沖泡普洱熟茶從準備到完成的過程。追求的審美標準是 「濃厚、醇滑、甜潤」 的極致湯感。
          </div>
          <div className="text-sm leading-relaxed">為此，幾個關鍵要點需要反覆練習與體會：</div>
          <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
            <li>沖泡前的醒茶 是必不可少的步驟。</li>
            <li>取茶時的均勻性 決定了茶湯的穩定度。</li>
            <li>100°C的恆定高溫 是醇厚湯感的保證。</li>
            <li>「低、緩、輕、柔」的注水心法 是釋放熟茶溫潤之美的靈魂。</li>
          </ol>
          <div className="text-sm leading-relaxed">
            閉上眼，想像一杯優質的熟茶在您的溫柔沖泡下，呈現出紅濃透亮的湯色，入口甜潤，帶有迷人的花果香，滑過喉嚨時是那般溫暖飽滿，彷彿兒時記憶中的米湯……這便是熟茶沖泡藝術的魅力所在。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-9': {
    title: '九：普洱茶的香氣與感官密碼',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>課程介紹：解鎖品飲的關鍵</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            在品飲的世界裡，「香氣」與「感官」是我們體驗一杯茶靈魂的起點，也是鑑賞其品質的基石。品飲中看似主觀的嗅覺與味覺體驗，轉化為一套可分析、可解構的專業技能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">AROMA PATH 1</div>
            <div className="mt-1 font-extrabold text-stone-900">鼻腔感受（Nasal Perception）</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">
              指茶湯沖泡時，香氣隨著熱氣蒸騰而上，由鼻腔直接嗅聞到的氣味。這是最直接、最先接觸到的香氣層次。
            </div>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">AROMA PATH 2</div>
            <div className="mt-1 font-extrabold text-stone-900">口腔感受（Oral Perception）</div>
            <div className="mt-3 text-sm text-stone-700 leading-relaxed">
              指茶湯入喉後，部分帶有香氣的水氣從口腔後部上行至鼻腔，形成所謂的「口齒留香」或「水含香」。這是一種更深層、更持久的香氣體驗。
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>普洱茶香氣的四大維度</Subheading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">DIMENSION 1</div>
              <div className="mt-1 font-extrabold text-stone-900">品種香（Variety Aroma）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                品種香是茶樹與生俱來的天賦，是其基因中固有的香氣特徵，而非後天加工所賦予。雲南大葉種普洱茶家族龐大，不同樹種皆有其獨特的香氣標記。例如，布朗山的老曼峨地區同時存在苦茶種與甜茶種，兩種茶樹雖然生長環境相近，但其鮮葉製成的茶，所呈現的香氣卻截然不同，這便是最典型的品種香差異。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">DIMENSION 2</div>
              <div className="mt-1 font-extrabold text-stone-900">地域香（Regional Aroma）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                地域香，或稱「山頭味」，是特定地理環境賦予茶葉的、不可複製的獨特屬性。陽光、氣溫、降雨、土壤乃至茶園朝向等因素，共同塑造了每個產區的標誌性香氣。例如，同屬布朗山大葉種，相距僅十數公里的老班章與老曼峨，其茶品香型卻風格迥異。這種由風土（Terroir）決定的獨特風味，正是近年來山頭茶備受追捧的核心價值所在。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">DIMENSION 3</div>
              <div className="mt-1 font-extrabold text-stone-900">季節香（Seasonal Aroma）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                普洱茶的採摘主要集中在春秋兩季，不同季節的氣候條件造就了風格迥然的香氣特點。
              </div>
              <div className="mt-4 space-y-3 text-sm text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="font-extrabold text-stone-900">春茶（Spring Tea）</div>
                  <div className="mt-2">
                    經過整個冬季的休養生息，春茶積累了極其豐富的內含物質。其香氣表現為馥郁、高揚，帶有鮮爽的清香與濃郁的毫香，充滿了春天的生命力。將春茶鮮葉置於攤晾室中，其散發的天然花香甚至勝過任何昂貴的香水。
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="font-extrabold text-stone-900">秋茶（Autumn Tea）</div>
                  <div className="mt-2">
                    業界素有「春水秋香」之說。秋季氣候乾燥，有利於香氣物質的保留與凝聚。秋茶（又稱谷花茶）的香氣以顯著的花蜜香為特徵，風格上比春茶更為溫柔、甜潤，刺激性較低。若論日常品飲，秋茶性價比極高（價格約為春茶一半）；但若論長期陳放轉化的潛力，則內含物質更豐富的春茶依然是首選。
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">DIMENSION 4</div>
              <div className="mt-1 font-extrabold text-stone-900">工藝香（Process Aroma）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                相較於極度講究製程發香的烏龍茶或紅茶，普洱茶並不刻意追求工藝香。其核心工藝的目標是最大限度地保留茶葉的天然活性，為後期轉化留下空間。普洱茶最典型且至關重要的工藝香，便是來自日光乾燥所賦予的「太陽味」。這種吸收了太陽能量的氣息，不僅是辨識傳統曬青工藝的標誌，更是普洱茶得以「越陳越香」的能量基礎。
              </div>
            </div>
          </div>

          <Callout title="總結">
            總結而言，品種、地域、季節與工藝這四大維度，共同構建了分析普洱茶香氣的完整座標系。要真正掌握這門技藝，唯有通過大量的品飲實踐，將理論知識與感官記憶相結合，才能逐步建立起屬於自己的香氣資料庫。
          </Callout>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>普洱茶感官的五味密碼</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            普洱茶的滋味由五種基本味覺構成：酸、甜、苦、鮮、澀。理解這五種味道如何相互作用與轉化，是深入品鑑普洱茶的關鍵。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">SOUR</div>
              <div className="mt-1 font-extrabold text-stone-900">酸（Sourness）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                在普洱茶的審美體系中，「酸」並非全然的負面指標，而是構成茶湯飽滿度與層次感的關鍵角色。優質的酸是平衡而愉悅的，它能促進生津（Saliva Production），並且是形成梅子香、棗香等迷人果韻的基礎。我們需要區分「好的酸」與「壞的酸」：前者使茶湯更立體、更深邃；後者則表現為發酵不當的熟茶所產生的「餿酸味」，令人不悅。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">SWEET</div>
              <div className="mt-1 font-extrabold text-stone-900">甜（Sweetness）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                甜是能量的象徵，是品飲中最直接的愉悅感來源。普洱茶的甜味物質主要來自可溶性的單糖、雙糖以及部分氨基酸。其甜感可分為三個層次：
              </div>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
                <li>
                  <strong>入口即甜：</strong>茶湯入口時，舌面直接感受到的甜味。
                </li>
                <li>
                  <strong>回甘（Hui Gan）：</strong>茶湯嚥下後，喉嚨深處逐漸返回的甘甜感，持久而深邃。
                </li>
                <li>
                  <strong>尾水甜（Wei Shui Tian）：</strong>沖泡至尾段，茶中其他滋味物質釋出殆盡，此時茶湯呈現出如同紅糖水或蜂蜜水般的純粹甜潤。
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">BITTER</div>
              <div className="mt-1 font-extrabold text-stone-900">苦（Bitterness）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                苦，是普洱茶的「風骨」。作為雲南大葉種，其豐富的茶多酚與咖啡鹼含量，注定了它必然帶有苦感。評判苦味優劣的標準在於其轉化速度：優質的苦應「來得快，去得也快」，迅速化開並轉為甘甜（回甘）。若苦味持續停留在口腔，久久不散，則非佳品。正如一款存放十年的極苦老曼峨野生茶，其苦澀盡數褪去，轉化為令人難以置信的甘甜，這正是普洱茶「苦盡甘來」的魅力所在。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">UMAMI</div>
              <div className="mt-1 font-extrabold text-stone-900">鮮（Freshness/Umami）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                鮮爽感主要源於茶葉中的氨基酸，特別是含量最高的茶氨酸（Theanine）。茶氨酸不僅貢獻了甜味與鮮味，還能帶來精神上的放鬆與愉悅感。鮮爽度在春茶中表現最為明顯，隨著茶葉的陳放，這種鮮活感會逐漸減弱，轉而被更沉穩的醇厚度與陳香所取代。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 md:col-span-2">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">ASTRINGENT</div>
              <div className="mt-1 font-extrabold text-stone-900">澀（Astringency）</div>
              <div className="mt-3 text-sm text-stone-700 leading-relaxed">
                澀是一種物理性的口腔感受，常被描述為「收斂感」，即口腔黏膜失去潤滑的感覺。這是因為茶湯中的多酚類物質與唾液中的蛋白質結合，導致口腔表皮產生皺縮感。由於雲南大葉種內含物質極為豐富，其澀感通常比其他茶類更為明顯。評判澀感的黃金法則是「澀能生津」。好的澀感應當能在口腔中迅速引發唾液分泌，化澀為潤，最終帶來舒適的品飲體驗。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-5 space-y-3 glass-panel">
          <div className="text-xs font-extrabold tracking-widest glass-panel__kicker">總結</div>
          <div className="text-sm leading-relaxed">
            剖析了普洱茶的香氣與感官密碼。必須建立一套專屬於普洱茶的審美體系，欣賞其獨特的苦澀基底與轉化潛力，而非套用其他茶類的標準。掌握了這些基礎，將這些分析技能應用於品鑑雲南另一種極具特色的茶品——雲南白茶。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-10': {
    title: '十：雲南白茶的賞析與沖泡',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>雲南白茶的崛起</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            長久以來，福建一直是白茶江湖中德高望重的長者。然而近年來，一位來自雲南的「初出茅廬的少年」——雲南古樹白茶，憑藉其獨特的魅力，一經亮相便引發了整個茶界的矚目。本課程將帶您深入探索雲南白茶的悠久淵源、源自古樹原料的獨特品質，並通過詳細的實作指導，掌握泡好一杯高香高甜的雲南白茶的精準技法。
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>雲南白茶的歷史與特色</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">
            白茶的核心工藝在於「不炒不揉，以萎凋為中心」，是最接近自然的茶類。雲南製作白茶的歷史可謂源遠流長：
          </p>
          <ul className="list-disc pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>唐代《蠻書》</strong>中「茶出銀生城界諸山，散收無採造法」的記載，被推測為最原始的自然乾燥製茶法，即白茶工藝的雛形。
            </li>
            <li>
              清代道光年間，景谷縣的「白龍鬚貢茶」成為稀世珍品。其工藝較為複雜，需先手工殺青、初次揉捻，待日曬至半乾時再進行二次復揉，使其帶有微發酵特徵。
            </li>
            <li>
              <strong>「月光美人」</strong>的浪漫傳說，實則是一個成功的營銷故事。其真實起源是在雨季無法進行日光晾曬時，茶農將鮮葉置於室內陰乾而成。這種避光萎凋的方式，造就了其芽頭呈白、葉片呈黑的獨特外觀。
            </li>
          </ul>
        </div>

        <div className="museum-card museum-paper overflow-hidden">
          <div className="px-5 py-4 border-b border-stone-200 bg-white/70">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">COMPARISON</div>
            <div className="mt-1 font-extrabold text-stone-900">雲南古樹白茶 vs. 福建白茶</div>
          </div>
          <div className="overflow-x-auto bg-white">
            <table className="min-w-full text-sm text-stone-700">
              <thead className="bg-stone-50">
                <tr className="text-left">
                  <th className="px-5 py-3 font-extrabold text-stone-900">特性</th>
                  <th className="px-5 py-3 font-extrabold text-stone-900">雲南古樹白茶</th>
                  <th className="px-5 py-3 font-extrabold text-stone-900">福建白茶</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">原料</td>
                  <td className="px-5 py-4">雲南大葉種古樹鮮葉，內含物質豐富。</td>
                  <td className="px-5 py-4">福建當地小葉種茶樹。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">風味</td>
                  <td className="px-5 py-4">高香高甜，滋味濃厚，喉韻深沉，如同北方或山中美人。</td>
                  <td className="px-5 py-4">香氣高揚，水路細膩柔順，風格清雅，如同江南美人。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">分類</td>
                  <td className="px-5 py-4">通常不作細分，多為一芽二葉。</td>
                  <td className="px-5 py-4">分為白毫銀針、白牡丹、貢眉、壽眉等不同等級。</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-bold text-stone-900">轉化</td>
                  <td className="px-5 py-4">糖苷類物質含量高，轉化速度極快，存放三年即可出現明顯的棗香、藥香。</td>
                  <td className="px-5 py-4">轉化相對緩慢，需更長時間陳放。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>雲南古樹白茶的四大優質特點</Subheading>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
            <li>
              <strong>迷人的蜜韻：</strong>香氣濃郁持久，能夠深入茶湯，蜜香顯著。
            </li>
            <li>
              <strong>優秀的回甘與持久度：</strong>回甘迅猛，生津持久，滋味飽滿。
            </li>
            <li>
              <strong>香醇度持久：</strong>得益於大葉種豐富的內含物質，茶湯香氣與醇厚度能維持多泡。
            </li>
            <li>
              <strong>活性高，轉化潛力大：</strong>採用低溫複式萎凋，最大限度保留了茶葉活性，為後期陳化奠定了絕佳基礎。
            </li>
          </ol>
          <div className="text-sm text-stone-700 leading-relaxed">
            了解了雲南白茶的卓越之處，接下來的關鍵便是如何通過精準的沖泡，將其魅力完全釋放。
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
          <Subheading>雲南古樹白茶沖泡實作</Subheading>
          <p className="text-sm text-stone-700 leading-relaxed">本節將引導您完成一次完美的雲南古樹白茶沖泡體驗。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">備器（Preparing the Teaware）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                <strong>主泡器：</strong>建議選擇開口較闊的白瓷蓋碗，便於容納白茶拋鬆碩大的條索。
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="font-extrabold text-stone-900">取茶（Measuring the Tea）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                <strong>茶水比：</strong>推薦1:25的比例。白茶宜淡不宜濃，略淡的投茶量更能凸顯其清雅靈動的特質。
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 md:col-span-2">
              <div className="font-extrabold text-stone-900">用水（Water Selection）</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                <strong>水質：</strong>理想的酸鹼度（pH值）在 <strong>7至7.5</strong> 之間，有助於激發其最佳香氣。
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 space-y-4">
            <div className="text-xs font-extrabold tracking-widest text-amber-900/70">KEY TECHNIQUE</div>
            <div className="text-lg font-extrabold text-stone-900">關鍵技法：溫潤分三步</div>
            <div className="text-sm text-stone-700 leading-relaxed">這是泡好白茶的秘訣，旨在溫和而充分地喚醒茶葉。</div>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>第一步：乾潤（Dry Warming）</strong> 將蓋碗用沸水充分燙熱後倒乾，趁著器皿的高溫，迅速投入乾茶並蓋上蓋子。利用餘溫進行第一次「乾醒」。
              </li>
              <li>
                <strong>第二步：蒸潤（Steam Moistening）</strong> 向蓋碗中注入少量熱水（約1/5滿），立即蓋上蓋子，靜置約15秒。讓升騰的蒸汽溫和地軟化茶葉的表面。
              </li>
              <li>
                <strong>第三步：溫潤（Wet Rinsing）</strong> 再次注水至蓋碗約3/4滿，靜置約10秒，讓茶葉充分濕潤。隨後將此次潤茶水徹底倒棄。
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
            <div className="font-extrabold text-stone-900">正式沖泡流程</div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong>注水（Infusing）：</strong>採用「高溫提香壓韻法」。在蓋碗五點鐘方向定點低斟，水流平穩，水溫控制在90-95°C。
              </li>
              <li>
                <strong>時間（Steeping Time）：</strong>第一泡約10秒，第二泡約15秒，後續可根據茶湯濃度，逐步延長至20-25秒。
              </li>
              <li>
                <strong>出湯（Pouring）：</strong>每次出湯務必徹底瀝乾，避免殘留的茶湯影響下一泡的滋味。
              </li>
            </ul>
          </div>

          <div className="text-sm text-stone-700 leading-relaxed">
            通過這套精細的沖泡流程，特別是「溫潤三步法」，將能完美呈現雲南古樹白茶香甜、柔潤、醇厚的最佳風味，感受其獨特的山野蜜韻。
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-11': {
    title: '十一：雲南紅茶的賞析與沖泡',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>課程介紹：滇紅的歷史與榮光</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            提及雲南，普洱茶的光環總是如此耀眼。然而，在這片茶葉的發源地，還誕生了另一款足以載入史冊的名茶——滇紅。它不僅是中國紅茶版圖上的璀璨明珠，更在特殊的歷史時期承載了一個國家的使命與夢想。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="museum-card museum-paper p-5">
            <Subheading>紅茶概論</Subheading>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              紅茶，因其乾茶、茶湯與葉底皆呈紅色而得名，屬於全發酵茶。其基本工藝流程包括萎凋、揉捻、發酵和乾燥。
            </p>
            <div className="mt-3 rounded-xl border border-stone-200 bg-white p-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">BASIC PROCESS</div>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                {['萎凋', '揉捻', '發酵', '乾燥'].map((x) => (
                  <span key={x} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-stone-800">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="museum-card museum-paper p-5">
            <Subheading>滇紅的誕生</Subheading>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              憑藉雲南大葉種茶樹豐富的茶多酚含量所造就的飽滿滋味，滇紅迅速崛起，成為中國四大傳統工夫紅茶之一，更曾作為國禮贈予英國伊麗莎白女王，書寫了屬於自己的光輝篇章。
            </p>
          </div>
        </div>

        <div className="museum-card museum-paper p-6">
          <Subheading>滇紅的誕生史詩（時間軸）</Subheading>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-stone-50 text-stone-700">
                <tr>
                  <th className="px-4 py-3 text-left font-extrabold">時間</th>
                  <th className="px-4 py-3 text-left font-extrabold">事件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap font-bold text-stone-900">1938</td>
                  <td className="px-4 py-3">
                    抗日戰爭期間，中國沿海主要紅茶產區淪陷，出口中斷；為換取外匯支援抗戰，開發新的紅茶基地迫在眉睫。
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap font-bold text-stone-900">1938</td>
                  <td className="px-4 py-3">
                    時任祁門茶葉改良場技師的馮紹裘臨危受命，來到雲南鳳慶，發現當地大葉種茶樹品質優異，當年成功試製第一批高品質紅茶，並定名為「滇紅」。
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap font-bold text-stone-900">1939–1942</td>
                  <td className="px-4 py-3">鳳慶與勐海兩地開始批量生產滇紅並出口；後因滇緬公路被日軍切斷，出口被迫中止。</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap font-bold text-stone-900">1950–1990年代</td>
                  <td className="px-4 py-3">
                    新中國成立後，滇紅恢復出口；出口市場隨國際局勢變化，從蘇聯、東歐集團逐步轉向歐美與亞非各國，遠銷全球二十多個國家和地區。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="museum-card museum-paper p-6">
          <Subheading>被遺忘的珍品：雲南曬紅</Subheading>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE DIFFERENCE</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                曬紅與常規滇紅最大的區別在於最後的乾燥環節：傳統滇紅採用高溫烘焙；曬紅則完全依靠自然日曬乾燥。
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">WHY IT MATTERS</div>
              <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                這種低溫、緩慢的乾燥方式，最大限度地保留了茶葉的天然活性，使其在甜潤度、體感與可陳放性上呈現出與眾不同的魅力。
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">UNIQUE APPEAL</div>
            <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong className="text-stone-900">陽光的氣息：</strong>茶湯帶有日光風味，口感清甜自然。
              </li>
              <li>
                <strong className="text-stone-900">茶性溫和：</strong>無傳統烘焙紅茶的「燥火感」，對腸胃更友好。
              </li>
              <li>
                <strong className="text-stone-900">兼具普洱神韻：</strong>口感醇厚飽滿，同時保留類似生普的回甘。
              </li>
              <li>
                <strong className="text-stone-900">可陳放收藏：</strong>保留活性，具「越陳越香」潛力，可像普洱茶一樣收藏。
              </li>
            </ul>
            <Callout title="NOTE">
              曬紅如同一座橋樑，連接了紅茶的香甜與普洱的活性，是一款被時光遺忘、如今正重新煥發光彩的茶中珍品。
            </Callout>
          </div>
        </div>

        <div className="museum-card museum-paper p-6">
          <Subheading>雲南曬紅沖泡實作</Subheading>

          <Callout title="核心沖泡參數">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>主泡器：</strong>推薦使用白瓷小壺或玻璃小壺，便於觀色聞香。
              </li>
              <li>
                <strong>茶水比：</strong>建議 1:25（與白茶類似），略淡沖泡更能體現其清甜口感。
              </li>
              <li>
                <strong>水溫：</strong>92–95°C；若想降低澀感，可適當降溫至 90°C。
              </li>
            </ul>
          </Callout>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP BY STEP</div>
            <ol className="mt-3 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong className="text-stone-900">1. 溫器與醒茶：</strong>
                用沸水將茶壺徹底燙熱後倒乾；趁熱投入茶葉、蓋上壺蓋，進行「乾醒」以喚醒內在香氣。
              </li>
              <li>
                <strong className="text-stone-900">2. 溫潤：</strong>
                注入熱水，水量剛好沒過茶葉即可。若是緊壓餅茶潤茶約 10 秒；散茶約 5 秒；迅速倒掉潤茶水。
              </li>
              <li>
                <strong className="text-stone-900">3. 沖泡：</strong>
                沿壺壁五點鐘方向定點低斟，注水至八九分滿。第一泡浸泡時間約 15–20 秒。
              </li>
              <li>
                <strong className="text-stone-900">4. 出湯與呼吸：</strong>
                將茶湯平穩倒入公道杯。出湯後記得打開壺蓋散去熱氣，避免茶葉被悶壞。
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="text-xs font-extrabold tracking-widest text-emerald-900/70">TASTE NOTE</div>
            <div className="mt-2 text-sm text-stone-700 leading-relaxed">
              掌握以上要點，您便能沖泡出一杯湯色紅豔、果香馥郁、口感香甜醇滑的雲南曬紅。
            </div>
          </div>
        </div>
      </div>
    ),
  },
  '#puerh-12': {
    title: '十二：雲南少數民族特色飲茶文化',
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <Subheading>課程介紹：火塘邊的茶香</Subheading>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            歡迎最終章。這一次，我們將離開精緻的茶席，踏上一段尋訪雲南茶文化根源的旅程。在雲南的崇山峻嶺中，幾乎每個少數民族的家裡都有一個永不熄滅的「火塘」。它不僅是取暖炊食的地方，更是家庭的中心、社交的場所與精神的圖騰。本課程將帶您圍坐火塘邊，探尋那些質樸、奔放且傳承千百年的飲茶傳統，並以一場生動的土法烤茶實作，為我們的學習之旅畫上一個溫暖而醇香的句點。
          </p>
        </div>

        <div className="museum-card museum-paper p-6">
          <Subheading>各民族的獨特飲茶方式</Subheading>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">DE'ANG</div>
              <div className="mt-1 text-base font-extrabold text-stone-900">德昂族的酸茶</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                被譽為「古老茶農」的德昂族人嗜好濃茶。他們獨創的「酸茶」是一種發酵茶，製作工藝獨特；其成品滋味酸甜，帶有奶酪香與桂花香，口感兼具熟普的柔和與生普的甘甜，生津解渴。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">BULANG</div>
              <div className="mt-1 text-base font-extrabold text-stone-900">布朗族的烤茶</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                自詡為茶神後裔的布朗族，將茶的氣息融入生活：把茶葉置於木瓢中，與燒紅的火炭一同抖動烤香，再放入陶罐注水煮沸飲用，山野氣息十足。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">LISU</div>
              <div className="mt-1 text-base font-extrabold text-stone-900">傈僳族的鹽巴茶與漆油茶</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                被稱為「火的民族」的傈僳族，火塘中的火種長年不滅。日常飲「鹽巴茶」，以鹽調味烤茶湯；隆重場合則作「漆油茶」，將茶湯與漆樹果實榨油混入芝麻、核桃攪打，風味類似酥油茶，是高原補能的佳品。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">DAI</div>
              <div className="mt-1 text-base font-extrabold text-stone-900">傣族的竹筒茶</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                臨水而居、與竹為伴的傣族人就地取材：將鮮茶葉炭火烤香，放入裝有山泉水的新鮮竹筒，直接置火上燒煮，茶湯融合竹香與茶香，清爽而醇。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">NAXI</div>
              <div className="mt-1 text-base font-extrabold text-stone-900">納西族的龍虎鬥</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                先烤香煮成濃茶湯；另於茶盞倒入玉米酒並點燃。再把滾燙茶湯沖入燃燒酒盞，茶酒交融發出滋滋聲，如龍爭虎鬥。此茶濃烈驅寒，是當地治療感冒的傳統良方。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">BAI</div>
              <div className="mt-1 text-base font-extrabold text-stone-900">白族的三道茶</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                「一苦二甜三回味」的人生哲理，是白族待客的最高禮儀：第一道苦茶（感通茶烤製，味濃且苦）；第二道甜茶（紅糖、乳扇與核桃，苦盡甘來）；第三道回味茶（蜂蜜、花椒、生薑、桂皮等，五味雜陳，回味無窮）。
              </p>
            </div>
          </div>
        </div>

        <div className="museum-card museum-paper p-6">
          <Subheading>土法烤茶實作</Subheading>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            烤茶是雲南各民族最普遍的飲茶方式。透過烘烤，不僅能顯著提升香氣與滋味，也能去除茶葉的寒性；即使是新茶，烤後也會變得溫潤香甜。
          </p>

          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">小罐罐烤茶步驟</div>
            <ol className="mt-3 space-y-2 text-sm text-stone-700 leading-relaxed">
              <li>
                <strong className="text-stone-900">1. 預熱陶罐：</strong>將空的小陶罐置於炭火或電爐上，加熱至滾燙。
              </li>
              <li>
                <strong className="text-stone-900">2. 投茶與烘烤：</strong>投入約 3 克茶葉，持續不斷抖動陶罐（「百抖茶」）使其均勻受熱，直至茶葉呈焦黃色、散發濃郁焦香。
              </li>
              <li>
                <strong className="text-stone-900">3. 注水煮沸：</strong>沿罐口注入沸水，茶湯會瞬間沸騰；繼續加熱至再次沸騰即可。
              </li>
              <li>
                <strong className="text-stone-900">4. 出湯品飲：</strong>倒入公道杯或茶碗中，趁熱品飲那份獨特的焦香與甘甜。
              </li>
            </ol>
          </div>

          <Callout title="TIP">
            若烤過頭出現明顯焦苦，可降低烘烤時間、縮短煮沸時間，並以「多次少量」方式調整濃淡。
          </Callout>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <div className="text-xs font-extrabold tracking-widest text-emerald-900/70">課程結語</div>
          <div className="mt-2 text-sm text-stone-700 leading-relaxed">
            在雲南高海拔地區，氣候濕寒，一壺暖身、暖心又暖胃的烤茶，是當地人生活中最質樸的慰藉。從第九課的香氣密碼，到第十二課的火塘茶香，我們共同走過了十二堂普洱茶的深度探索之旅。希望課程雖已結束，但您與茶的緣分才剛剛開始。
          </div>
        </div>
      </div>
    ),
  },
};

export default function PuerhEncyclopedia({ topOffsetPx, activeHref = '#puerh-1' }) {
  void topOffsetPx;
  const contentRef = useRef(null);

  const normalizedHref = typeof activeHref === 'string' && activeHref.startsWith('#puerh-') ? activeHref : '#puerh-1';
  const chapter = CHAPTERS[normalizedHref] ?? CHAPTERS['#puerh-1'];
  const chapterId = normalizedHref.slice(1);

  return (
    <article className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm">
      <div className="px-6 py-8 md:px-10 md:py-10">
        <div ref={contentRef}>
          <Section id={chapterId} title={chapter.title}>
            {chapter.content}
          </Section>
        </div>
      </div>
    </article>
  );
}
