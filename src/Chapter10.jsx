import React from 'react';
import { Leaf, Feather, History, Droplets, Sun, Flower, Map, Mountain, BookOpen, Globe, Wind, Coffee } from 'lucide-react';
import AcademyChapter, { AcademySection, AcademyContentBlock, AcademyHighlightBox } from '../../../components/AcademyChapter';

export default function ZhiyaChapter10() {
  return (
    <AcademyChapter
      category="大觀書院 · 質雅"
      title="第十章：品味春意與岩韻風骨"
      intro="從江南碧螺春的嫩寒春意，到閩北武夷岩茶的錚錚鐵骨，再到工夫茶席間的細膩講究。本章將帶領您跨越地域，領略中國茶文化中「極嫩」與「極韻」的兩個極端，並在工夫茶的儀軌中體悟事茶之心。"
    >
      {/* Section 1: Biluochun */}
      <AcademySection id="biluochun" title="品味春意：碧螺春" label="ACADEMY · ZHIYA · CH10">
        <AcademyContentBlock title="春季代表：碧螺春" icon={Leaf}>
          <p>
            本章節，將目光聚焦於春季最具代表性的茶品——碧螺春。從其獨特的美學意象、充滿詩意的歷史典故、精巧的沖泡技巧，乃至其中蘊含的四時養生哲學，進行一次全面而深入的探討，以闡明其在中華茶文化中無可取代的地位。
          </p>
          <p>
            當碧螺春被投入溫熱的茶碗中，一幅生動的春日畫卷就此展開。清代文人以「碧綠浮動，清香襲人」八字，精準捕捉了其神韻。那些細嫩如睫、滿披白毫的茶芽，在水中輕盈地舒展、浮動，彷彿一朵朵碧綠的花，散發出沁人心脾的清雅香氣，構成了一幅令人心醉的茶中景致。
          </p>
        </AcademyContentBlock>

        <div className="grid md:grid-cols-2 gap-6">
          <AcademyContentBlock title="詩意與美學" icon={Feather}>
            <p>
              碧螺春的採摘，本身就是一首與節氣相呼應的詩。古人云：「細雨飄食，春雷動，帶纖手採摘雨前鮮芽」。這句詩生動地描繪了「驚蟄」時節的自然景象：春雨綿綿，洗淨塵埃；春雷乍響，喚醒蟄伏的萬物。正是在此時，茶樹迸發出最鮮嫩的生命力，迎來了最佳的採摘時機。
            </p>
            <AcademyHighlightBox className="bg-emerald-50/50 border-emerald-100">
              <p className="text-sm">
                <strong>帶纖手：</strong>詩中此語更蘊藏了工藝的極致精巧。指的是由八至十二歲的少女來進行採摘，因為只有她們纖細的手指，才能輕柔地摘下那比眼睫毛還細的茶芽，而不會損傷其分毫。
              </p>
            </AcademyHighlightBox>
            <p className="mt-4">
              古人對碧螺春產地的春景亦有絕妙的描寫：「洞山無處不飛翠，碧螺春香百里醉」。此處的「飛翠」一詞極富畫面感，它並非指單一的綠色，而是描繪了春天山林中，因新芽初發、嫩葉漸長、老葉猶存，從而形成了從嫩綠、淺綠到深綠、墨綠的豐富色彩層次。這種交錯疊加的視覺效果，讓整個山巒充滿了流動的生命力，故稱「飛翠」。
            </p>
          </AcademyContentBlock>

          <AcademyContentBlock title="名號源由與傳說" icon={History}>
            <p>碧螺春這一雅緻的名稱，其背後流傳著數個迷人的典故。綜合講師所述，主要有以下三種來源：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>人名傳說：</strong> 相傳一位名為「碧螺」的姑娘，為救治愛人上山採藥，不幸墜崖。她身殞之處長出了一棵茶樹，人們認為是她的化身，遂以「碧螺」為其命名。</li>
              <li><strong>地名來源：</strong> 此茶原產於江蘇洞庭湖東西兩山的碧螺峰，因地得名。</li>
              <li><strong>外形特徵：</strong> 這是最為直觀的解釋，綜合了茶葉「色澤碧綠、形態捲曲如螺、於春天採摘」的三大特點，故名「碧螺春」。</li>
            </ul>
            <AcademyHighlightBox className="mt-4 bg-amber-50/50 border-amber-100">
              <p className="text-sm font-bold text-amber-900 mb-1">別名：嚇煞人香</p>
              <p className="text-sm">
                相傳康熙皇帝南巡時品嚐此茶，驚豔於其馥郁的香氣，遂賜名「嚇煞人香」。這不禁引人思考，古今對於「香」的品味標準或許存在差異。古人所追求的，或許正是那種源於茶芽嫩毫的「豪香」，一種極致清雅內斂的嫩香；而現代人習慣的香氣，可能更為直接奔放。這就好比傳統的明星花露水與現代的香奈兒香水，雖同為香氣，其審美意趣與價值體系卻截然不同。
              </p>
            </AcademyHighlightBox>
          </AcademyContentBlock>
        </div>

        <AcademyContentBlock title="茶品特色與沖泡心法" icon={Droplets}>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 mb-2">外形</div>
              <p className="text-sm">捲曲成螺，滿身披白毫。茶乾形態優美，銀毫滿佈，極具觀賞性。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 mb-2">風味</div>
              <p className="text-sm">色香味三鮮。其茶湯色澤鮮亮、香氣鮮爽、滋味鮮醇。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 mb-2">香氣</div>
              <p className="text-sm">花香果味。這是其產地生態環境賦予的獨特印記。</p>
            </div>
          </div>
          <p>
            沖泡如此細嫩的茶葉，手法尤為關鍵。講師建議採用<strong>「上投法」</strong>：先在茶碗中注入適溫的熱水，再將茶葉輕輕投撒於水面。此時會出現一個極美的景象——滿佈的白毫在接觸水分後，會增加茶芽的重量，使其如雪片般紛紛揚揚地飄落至碗底，整個過程充滿了動態的詩意。
          </p>
          <p className="mt-4">
            品飲碧螺春還有一大樂趣，即可將舒展開的茶芽一同入口咀嚼。其口感近似蓮子心，帶有新生事物特有的微苦，但這種苦味轉瞬即逝，隨之而來的是清涼的回甘，具有很好的「退火」效果。
          </p>
        </AcademyContentBlock>

        <div className="grid md:grid-cols-2 gap-6">
          <AcademyContentBlock title="茶飲與四時養生" icon={Sun}>
            <p>
              從古代帝王的養生智慧中，我們能窺見茶飲與季節的深刻連結。以慈禧太后的養生秘笈為例，她奉行「夏喝龍井，冬飲普洱」的原則，這背後蘊含著樸素而深刻的中醫哲理。
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></span>
                <span><strong>春天屬木（肝）：</strong>適合飲用綠茶（如碧螺春、龍井），其性微寒，有助於疏肝理氣，清解春季的燥熱。</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-stone-800 mt-2.5"></span>
                <span><strong>冬天屬水（腎）：</strong>適合飲用經過後發酵的普洱熟茶，其茶性溫和，湯色深濃，有助於溫養腎氣。</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-stone-600">
              這種順應四時的養生觀，也與莊子的哲學思想不謀而合。莊子認為，「養形」（養護身體）、「養神」（調養精神）與「養氣」（培育元氣）三者是一體的。健康的形體是神與氣的載體，而充沛的精神與元氣又能反哺形體。身心合一，方為養生之道的根本。
            </p>
          </AcademyContentBlock>

          <AcademyContentBlock title="茶園管理的智慧" icon={Flower}>
            <p>
              碧螺春獨特的「花香果味」，源於古代茶園管理的生態智慧——<strong>「花果樹交錯間栽」</strong>。這種做法在現代依然可見，例如台灣鹿谷的茶園與銀杏森林相伴，或是福建永春的茶園旁遍植櫻花。古人認為，茶樹的根系會與周邊花果樹的根系在土壤中盤錯，從而吸收其獨特的香氣。
            </p>
            <p className="mt-4">
              明代文獻更進一步闡述了這種做法的雙重效益。在茶園旁種植桂花、梅花、玉蘭等芳香樹木，不僅能「香根脈相通」，增益茶香，更能起到實際的保護作用——「一足以蔽霜雪，禦秋陽」。高大的樹木在冬季可以為茶樹抵擋霜雪，在秋季則能遮擋過於強烈的日光，這充分展現了古人順應自然、利用自然的生態智慧。
            </p>
          </AcademyContentBlock>
        </div>
      </AcademySection>

      {/* Section 2: Wuyi Rock Tea */}
      <AcademySection id="wuyi" title="武夷岩茶的風骨" label="ACADEMY · ZHIYA · CH10">
        <AcademyContentBlock title="從江南到福建：一方水土一方茶" icon={Map}>
          <p>
            作為中國烏龍茶的故鄉，福建的風土孕育了獨樹一幟的茶品。福建作為烏龍茶的發源地，其內部又可細分為「閩北」與「閩南」兩大核心產區。二者雖同屬一省，但因地理與土壤的根本差異，造就了風格迥異的茶品：
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <AcademyHighlightBox className="bg-stone-100 border-stone-200">
              <div className="font-bold text-stone-900 mb-1">閩北（武夷山）</div>
              <p className="text-sm">地質以風化岩石為主，土壤富含礦物質，排水與通氣性俱佳。對應陸羽《茶經》之「上者生爛石」。</p>
            </AcademyHighlightBox>
            <AcademyHighlightBox className="bg-stone-100 border-stone-200">
              <div className="font-bold text-stone-900 mb-1">閩南（安溪）</div>
              <p className="text-sm">土壤多為黃壤、紅壤，與台灣的土質更為接近。對應陸羽《茶經》之「下者生黃土」。</p>
            </AcademyHighlightBox>
          </div>
          <p>
            因此，在整個烏龍茶的世界裡，形成了「三大產區，四大派系」的格局。三大產區分別是福建、台灣與廣東，而福建因其南北風土的巨大差異，獨佔了閩北岩茶與閩南鐵觀音兩大重要派系。
          </p>
        </AcademyContentBlock>

        <div className="grid md:grid-cols-2 gap-6">
          <AcademyContentBlock title="解讀「岩骨花香」與微氣候" icon={Mountain}>
            <p>武夷岩茶最核心、最令人神往的品質特徵，便是「岩骨花香」。</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>岩骨：</strong> 指的是源自岩石土壤的獨特氣息，茶湯入口後帶有一種勁道與收斂感，滋味醇厚，層次豐富。</li>
              <li><strong>花香：</strong> 則是由茶樹品種本身、以及特定製作工藝所激發出的豐富花香，香氣深沉而持久，能融入茶湯之中。</li>
            </ul>
            <p className="mt-4">
              這種獨特風味的形成，與武夷山的「微氣候」密不可分。即便是同一座山，其地理形態也千變萬化，如「坑」、「洞」、「窠」、「澗」乃至山「岩」本身。其中，最著名的核心產區被合稱為「三坑兩澗」。這些不同的地貌會造成日照時長、溫濕度等細微的氣候差異。
            </p>
          </AcademyContentBlock>

          <AcademyContentBlock title="岩茶的品飲語彙" icon={BookOpen}>
            <p>武夷岩茶的品飲文化中，發展出了一套獨特而有趣的語彙：</p>
            <div className="space-y-4 mt-4">
              <div>
                <div className="font-bold text-stone-900">命名方式</div>
                <p className="text-sm text-stone-600">當地人習慣將「地名」與「品種名」結合，並取其簡稱。例如，產於「牛欄坑」的「肉桂」品種，簡稱為「牛肉」；產於「馬頭岩」的「肉桂」，則被稱為「馬肉」。</p>
              </div>
              <div>
                <div className="font-bold text-stone-900">等級劃分</div>
                <ul className="list-disc pl-5 text-sm text-stone-600 mt-1">
                  <li><strong>正岩：</strong> 生長在武夷山核心景區內，風化岩石土壤區域的茶。</li>
                  <li><strong>半岩：</strong> 生長在核心產區邊緣地帶的茶。</li>
                  <li><strong>洲茶：</strong> 生長在景區周邊、溪流兩岸平地區域的茶，已不具備典型的岩韻。</li>
                </ul>
              </div>
            </div>
          </AcademyContentBlock>
        </div>

        <AcademyContentBlock title="岩茶的核心特質" icon={Sun}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="font-bold text-stone-900">味覺層次</div>
              <div className="text-xs text-stone-500 mt-1">啜苦咽甘</div>
            </div>
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="font-bold text-stone-900">儲存潛力</div>
              <div className="text-xs text-stone-500 mt-1">久藏不壞</div>
            </div>
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="font-bold text-stone-900">陳化價值</div>
              <div className="text-xs text-stone-500 mt-1">三年成藥</div>
            </div>
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="font-bold text-stone-900">養生功效</div>
              <div className="text-xs text-stone-500 mt-1">祛寒除濕</div>
            </div>
          </div>
          <p className="mt-4 text-center text-stone-600 text-sm">
            以上是對武夷岩茶的理論概述。接下來，我們將透過一場跨越地域的實際品鑑，來親身驗證這些獨特的風土印記。
          </p>
        </AcademyContentBlock>
      </AcademySection>

      {/* Section 3: Tasting Journey */}
      <AcademySection id="tasting" title="一場跨越地域的品鑑之旅" label="ACADEMY · ZHIYA · CH10">
        <AcademyContentBlock title="辨識風土：台灣茶與武夷岩茶" icon={Globe}>
          <p>
            本章節將記錄一場別開生面的烏龍茶品鑑會。我們匯集了來自台灣、福建武夷山及廣東三地的代表性茶品，旨在透過實際的比較品飲，訓練我們的味蕾，學習辨識不同風土（terroir）——即土壤、氣候與工藝——賦予茶湯的獨特印記與「地氣」。
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <AcademyHighlightBox className="bg-emerald-50/50 border-emerald-100">
              <div className="font-bold text-emerald-900 mb-2">台灣烏龍茶</div>
              <p className="text-sm text-stone-700">
                其風味對我們而言更為熟悉，茶湯通常帶有清新的花香，滋味甘甜，口感順滑。這是台灣相對濕潤的氣候與肥沃的紅壤、黃壤所共同塑造的典型風格。
                <br/><span className="text-xs opacity-70 mt-1 block">代表：凍頂烏龍、木柵水仙</span>
              </p>
            </AcademyHighlightBox>
            <AcademyHighlightBox className="bg-amber-50/50 border-amber-100">
              <div className="font-bold text-amber-900 mb-2">武夷岩茶</div>
              <p className="text-sm text-stone-700">
                展現出獨特的「岩韻」。茶湯入口感覺更為厚重、有力道，帶有礦物質的氣息，滋味富於變化，從初入口的微苦迅速轉為持久的回甘。這種勁道與層次感，正是源自其獨特的岩石土壤。
                <br/><span className="text-xs opacity-70 mt-1 block">代表：水仙、肉桂、大紅袍</span>
              </p>
            </AcademyHighlightBox>
          </div>
          <p className="mt-4 text-sm text-stone-600">
            通過盲品，即使僅憑味覺，也能清晰地感知到這兩種源自不同風土的茶品之間，存在著一道難以逾越的風味鴻溝。
          </p>
        </AcademyContentBlock>

        <AcademyContentBlock title="可以喝的香水：廣東鳳凰單欉" icon={Wind}>
          <p>
            在六款茶中，來自廣東的鳳凰水仙（蜜蘭香）以其極具辨識度的香氣脫穎而出，給人留下了深刻的印象。
          </p>
          <p>
            這款茶被譽為「可以喝的香水」，其最顯著的特點是香氣並非漂浮於茶湯之上，而是完美地融入水中，形成了「水含香」的獨特品質。品飲時，香氣隨著茶湯在口腔中擴散，層次豐富而持久。
          </p>
          <p>
            鳳凰單欉茶具有「一樹一香」的特性，即便是同一品種，生長在不同單株茶樹上，其香氣也可能存在細微差異。因此，這類茶大多以其獨特的香型來命名，如我們今日品飲的「蜜蘭香」，以及其他知名的「杏仁香」、「薑花香」等，構成了一個龐大而迷人的香氣譜系。
          </p>
        </AcademyContentBlock>
      </AcademySection>

      {/* Section 4: Gongfu Tea */}
      <AcademySection id="gongfu" title="工夫茶的講究" label="ACADEMY · ZHIYA · CH10">
        <AcademyContentBlock title="工夫茶的器物美學" icon={Coffee}>
          <p>
            工夫茶對器物的講究，從清代文人的描述中便可見一斑。一句俗諺精闢地描繪了其代表性器物：「若琛小盞孟臣壺，更有名瓷哥盤托」，這句話點出了工夫茶的幾件核心要件：
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900">孟臣壺</div>
              <p className="text-xs text-stone-600 mt-1">指江蘇宜興名家惠孟臣所製的朱泥小壺，被視為沖泡工夫茶的最佳器皿。</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900">若琛杯</div>
              <p className="text-xs text-stone-600 mt-1">指由若琛和尚設計的一種撇口小杯，是品飲工夫茶的理想選擇。</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900">哥窯盤</div>
              <p className="text-xs text-stone-600 mt-1">指宋代五大名窯之一的哥窯所產的盤子，用以承托茶壺與茶杯，彰顯品味。</p>
            </div>
          </div>
          <p className="mt-4">
            工夫茶所用的茶杯，其顯著特點是「杯小如葡萄」（或曰核桃）。如此精巧的設計，不僅能讓茶湯瞬間冷卻至適口溫度，更能將茶湯的精華濃縮於方寸之間，使每一口都顯得格外珍貴，從而引導品飲者細細品味，感受其醇厚的滋味與豐富的層次。
          </p>
        </AcademyContentBlock>

        <div className="grid md:grid-cols-2 gap-6">
          <AcademyContentBlock title="直式茶席的佈局藝術" icon={Map}>
            <p>
              相對於我們熟悉的橫向伸展式茶席，工夫茶的沖泡場景催生了一種更為緊湊實用的「直式」佈局。
            </p>
            <p>
              這種佈局將所有器物沿著一條縱深軸線排列，極大地濃縮了操作空間。其最大的優點在於靈活性，即使在空間有限的餐桌一角，也能輕鬆佈置一席工夫茶，實現餐與茶的完美結合。
            </p>
            <p>
              從視覺美學的角度看，這種佈局方式與中國傳統國畫的構圖原理異曲同工。橫向茶席如同畫中的「平遠」法，視野開闊；而直式茶席則類似於「高遠」法，由近及遠，層次分明，形成了一種獨特的縱深美感。
            </p>
          </AcademyContentBlock>

          <AcademyContentBlock title="沖泡細節與品飲禮儀" icon={Sun}>
            <p>工夫茶的「工夫」二字，體現在每一個細節之中：</p>
            <ul className="space-y-3 mt-2">
              <li>
                <strong>備茶：</strong> 為了在香氣與濃度之間取得完美平衡，泡茶者有時會將茶葉條索的一部分輕輕壓碎，使碎末的茶快速釋放濃度，而完整的條索則負責貢獻香氣。
              </li>
              <li>
                <strong>分湯：</strong> 傳統的工夫茶沖泡不使用公道杯，而是由主泡者直接將茶壺中的茶湯依次巡迴注入各個小杯中。這對沖泡者的手眼協調與節奏掌控能力，是極高的考驗。
              </li>
              <li>
                <strong>品飲禮儀：</strong> 品飲工夫茶也有一套約定俗成的禮儀。端起茶杯前，有經驗的品飲者會先將杯底在杯盤（或杯托）上輕輕刮一下，以刮去杯底附著的茶湯，防止滴漏。品飲完畢後，將空杯置於鼻下，細細品味杯底留存的餘香，這個動作不僅是享受，也是對好茶的一種讚賞。
              </li>
            </ul>
          </AcademyContentBlock>
        </div>
      </AcademySection>
    </AcademyChapter>
  );
}