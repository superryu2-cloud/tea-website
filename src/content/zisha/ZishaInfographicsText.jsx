import React from 'react';
import { Callout, DataTable } from '../references/ui';

function Panel({ id, title, subtitle, children }) {
  return (
    <details id={id} className="group scroll-mt-28 rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
      <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="font-extrabold text-stone-900">{title}</div>
          {subtitle ? <div className="mt-1 text-sm text-stone-600">{subtitle}</div> : null}
          <div className="mt-2 text-xs text-stone-500">點此展開／收合</div>
        </div>
        <div className="shrink-0 w-10 h-10 rounded-xl border border-stone-200 bg-white flex items-center justify-center text-stone-500">
          <span className="text-lg leading-none group-open:rotate-45 transition-transform">＋</span>
        </div>
      </summary>
      <div className="px-6 pb-6">
        <div className="mt-5 space-y-5 text-[15px] leading-7 text-stone-700 md:text-base">{children}</div>
      </div>
    </details>
  );
}

function BlockTitle({ children }) {
  return <div className="text-lg font-extrabold text-stone-900">{children}</div>;
}

function Card({ title, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-stone-200 bg-stone-50 p-5 ${className}`}>
      <div className="font-extrabold text-stone-900">{title}</div>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function K({ children }) {
  return <span className="font-extrabold text-stone-900">{children}</span>;
}

export default function ZishaInfographicsText() {
  return (
    <div className="space-y-8">
      <Callout title="圖卡文字版（繁體）">
        本區將你提供的圖卡內容轉成可搜尋、可引用的文字展板，並統一改為繁體中文；段落結構與用語盡量依原圖呈現，方便教學使用。
      </Callout>

      <Panel id="zisha-visual-shapes" title="器型大全（文字展板）" subtitle="圓器／方器／花器／提梁／筋紋器（圖鑑圖卡）">
        <BlockTitle>紫砂壺器型大全</BlockTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="圓器">
            <div>德鐘壺、石瓢壺、掇球壺、西施壺、美人肩、茄段壺。</div>
          </Card>
          <Card title="方器">
            <div>六方壺、八方壺、雪華壺、傳爐壺、四方漢瓦。</div>
          </Card>
          <Card title="花器">
            <div>桃報春、梅樁、魚化龍、供春壺、南瓜壺。</div>
          </Card>
          <Card title="提梁">
            <div>蒙古水平提梁、牛蓋洋桶、南瓜提梁、石瓢提梁、東坡提梁。</div>
          </Card>
          <Card title="筋紋器" className="md:col-span-2">
            <div>問禪壺、筋紋石瓢、筋紋笑櫻、葵仿古壺、八卦龍頭一捆竹。</div>
          </Card>
        </div>
      </Panel>

      <Panel id="zisha-visual-craft" title="工藝大全（文字展板）" subtitle="全手工／半手工／盤築法／純手捏（工藝圖卡）">
        <BlockTitle>紫砂壺工藝大全</BlockTitle>

        <Card title="全手工">
          <div>可以從以下 4 個點觀察紫砂壺是否是手工壺。</div>
          <div>1、看內壁光滑度：手工紫砂壺要在泥漿上細細打磨，做好後內壁裡會留下泥漿的木紋</div>
          <div>2、看壺底痕跡：手工紫砂壺的底和壺壁是分開進行，但紫砂泥卻是同一時間調制的，這一圈明顯的鑲嵌痕跡</div>
          <div>3、看接縫線數量：手工紫砂壺只有一道接頭</div>
          <div>
            4、看表面質感：手工紫砂壺經過燒製後，質地收縮不一，泥砂層次不齊，外表粗粒凸凹，呈現出滿滿高級質感和明快的光
          </div>
        </Card>

        <Card title="半手工">
          <div>
            半手工壺也稱為模具壺，但和灌漿壺、機車壺等又不是一類。半手工紫砂壺的所有附件包括壺身，都是借助模具成型的，為了達到統一規範的目的。
            很多大師都曾做過半手工，壺味體的好壞還是要看做工精細度而定，不能一概而論。
          </div>
        </Card>

        <Card title="盤築法">
          <div>
            條盤築法，就是將拌製好的黏土搓成泥條，從器底起依次將泥條盤築成器壁直至器口，再用泥漿膠合成全器，最後抹平器壁盤築時留下的溝縫，
            或進一步一手在器內持陶墊或卵石頂住器壁，一手在器外持陶拍拍打，使器壁均勻結實，然後入窯燒製。如若陶拍刻印有花紋，則器表形成一種裝飾花紋
          </div>
        </Card>

        <Card title="純手捏">
          <div>
            手捏法的身桶主要靠一個字—捏，捏大捏小，捏厚捏薄，捏開捏合，盡在雙手之間自由掌控。身桶完成之後的步驟就跟全手制法差不多了，
            接嘴，接把，敷蓋片，粘截口，上口片，上假底，開假底
          </div>
        </Card>
      </Panel>

      <Panel id="zisha-visual-care" title="養護大全（文字展板）" subtitle="開壺／養壺／清洗／包漿（養護圖卡）">
        <BlockTitle>紫砂壺養護大全</BlockTitle>

        <Card title="開壺">
          <div>
            <K>清洗：</K>新壺買到手後，用清水將壺裡外清洗乾淨（主要洗去壺裡的粉塵和白色石英砂）
          </div>
          <div>
            <K>醒壺：</K>溫熱水沖淋壺身，讓紫砂壺的氣孔受熱擴張。給壺沐浴（朱泥、大紅袍的壺則用溫水淋洗；秋冬更要注意溫差，防止冷熱交替，致壺驚裂）
          </div>
          <div>
            <K>溫熱水沖上兩到三遍後：</K>便可以選擇一款適合的茶泡（要是講究一點，先泡一兩次茶倒掉，再使用，會更好，目的是去除土腥味和窯燒火味）
          </div>
          <div>
            <K>待茶水冷卻之後：</K>拿茶葉搓洗內外，拿出去再次清洗。
          </div>
        </Card>

        <Card title="養壺">
          <div>
            <K>沖淋法：</K>茶葉入壺後，開水沖淋茶壺。將茶壺上的茶泡，茶葉渣等雜質淋乾淨
          </div>
          <div>
            <K>掃刷法：</K>用養壺筆掃刷壺易包漿。泡茶時壺內溫度高，此時用養壺筆沾冷水不斷掃刷壺身，內熱外冷，茶油就會從紫砂壺的氣孔中滲到茶壺的表面，形成光亮潤滑的包漿
          </div>
          <div>
            <K>掃刷法：</K>乘茶壺發熱時用半乾濕的毛巾使用拋光的手法擦拭使茶壺表面包漿分布平均平衡，茶壺顯得更加美觀耐看
          </div>
        </Card>

        <Card title="清洗">
          <div>
            <K>用前溫水清洗：</K>每次泡茶前，溫水清洗是必要的。用後沖洗的過程中，用茶巾擦拭口沿、壺底、壺嘴下方等
          </div>
          <div>
            <K>用後清洗乾淨：</K>容易積攢茶垢的死角
          </div>
        </Card>

        <Card title="包漿">
          <ul className="list-disc pl-6 space-y-1">
            <li>固定泡一種茶</li>
            <li>放在手中摩挲把玩</li>
            <li>存放環境要通風透氣</li>
            <li>泡完茶後要及時清理茶渣和茶湯</li>
          </ul>
        </Card>
      </Panel>

      <Panel id="zisha-visual-clay-palette" title="泥料大全（色卡文字版）" subtitle="紅泥／團泥／紫泥／綠泥（色卡圖）">
        <BlockTitle>紫砂壺泥料大全</BlockTitle>
        <DataTable title="色卡分組（文字版）">
          <table className="min-w-full divide-y divide-stone-200">
            <thead className="bg-stone-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">類別</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">泥料</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">紅泥</td>
                <td className="px-6 py-4">紅泥、大紅泥、朱泥、大紅袍</td>
              </tr>
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">團泥</td>
                <td className="px-6 py-4">降坡泥、本山段、黃金段、芝麻段</td>
              </tr>
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">紫泥</td>
                <td className="px-6 py-4">紫泥、底槽青、清水泥、烏泥</td>
              </tr>
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">綠泥</td>
                <td className="px-6 py-4">本山綠、梨皮泥</td>
              </tr>
            </tbody>
          </table>
        </DataTable>
      </Panel>

      <Panel
        id="zisha-visual-decoration"
        title="裝飾工藝（文字展板）"
        subtitle="依 4 張圖卡順序：①絞泥/鏤雕/鋪砂 → ②陶刻/點彩/泥繪 → ③描金/竹編/彩繪 → ④貼花/包金包銀/冰紋"
      >
        <div className="space-y-8">
          <div>
            <div className="text-xs font-extrabold tracking-widest text-stone-500">圖卡 ①</div>
            <div className="mt-3 grid gap-4 lg:grid-cols-2">
              <Card title="絞泥">
                <div>
                  運用兩種或兩種以上不同顏色的泥料相互柔和，擠壓形成自然紋路（如類似雲紋、水波紋、旋紋、編織紋等）的陶瓷裝飾技法。絞泥紫砂主要產地在宜興，
                  此工藝難度較大，因此宜興也很少有從事這種工藝的工匠。比較有名的絞泥藝術家有呂堯臣等，作品沉穩大氣，是我國絞泥工藝的繼承者和開拓者。
                </div>
              </Card>
              <Card title="鏤雕">
                <div>
                  由於「紫砂裡外不掛釉」的特點，不能像瓷器一樣鏤空後上釉燒製來保證能正常使用瓷器。因此，鏤空紫砂壺都是雙層的。一般需要先做一個密閉的「壺膽」，
                  然後在外面再加一層進行鏤雕處理。最大的難點在於：用泥巴捏出造型、雕刻完成之後，再進行燒製定型，需要考慮到泥料的可塑性、燒製時泥料的收縮率、
                  作品完成之後的實用性以及觀賞性等等。
                </div>
              </Card>
              <Card title="鋪砂" className="lg:col-span-2">
                <div>
                  鋪砂是一種工藝，就是把熟砂（燒好的紫砂）敲碎成小塊兒（1MM 直徑），撒在生胚（沒燒好的紫砂）表面並且按在表面上。這樣燒出來的紫砂上面會有很多異色的小點，
                  很漂亮。一般是紫泥（深紫色）上鋪段泥點兒（黃色）。
                </div>
              </Card>
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-widest text-stone-500">圖卡 ②</div>
            <div className="mt-3 grid gap-4 lg:grid-cols-2">
              <Card title="陶刻">
                <div>
                  紫砂壺中的文字陶刻裝飾，在清嘉慶、道光年間已趨成熟。陳曼生的參與使當時的紫砂壺一改過去的繁瑣，設計出簡潔、明快、新穎、美觀的造型，體現出設計與功能的統一，
                  大面積的空白，使詩、書、畫印集為一體，達到完美統一。此舉一直影響至今。
                </div>
              </Card>
              <Card title="點彩">
                <div>
                  點彩是指在燒成的壺上進行釉水的彩繪，然後採用較低的溫度進行燒烤。一般而言，有小瑕疵的壺經過這樣的巧妙裝飾，會煥發出新的光彩。
                </div>
              </Card>
              <Card title="泥繪" className="lg:col-span-2">
                <div>
                  泥繪是用毛筆蘸上十分稀薄細膩的泥漿在半乾的胚體上作畫，有單色的，也有兩種以上色彩的，題材多為山水、花卉之類。由於有筆觸，濃淡之分顯得層次感。
                </div>
              </Card>
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-widest text-stone-500">圖卡 ③</div>
            <div className="mt-3 grid gap-4 lg:grid-cols-2">
              <Card title="描金">
                <div>
                  描金裝飾是指在紫砂壺坯上描金的裝飾方法，一般用在貢品紫砂壺和外銷紫砂壺的製作上。其方法是先在描金的紋樣處塗上一層底釉，在 750°C–800°C 窯溫下燒成，
                  再用金水在釉紋上描畫，然後再回爐燒製。製作描金紫砂壺一般都是兩個人合作完成，一個是專門的製壺巧匠，一個是專業書畫作者在壺底落款。
                </div>
              </Card>
              <Card title="竹編">
                <div>
                  竹編壺源自四川工藝「竹絲扣瓷」，是利用宜興特有的紫砂泥料段泥、紫泥製作成型，把竹編形態「移植」到紫砂壺上來，工藝十分繁瑣。外形經手工雕刻成「竹絲」，
                  通過多道工序，使形體上的篾紋縱橫穿梭，凹凸有致，效果十分逼真。
                </div>
              </Card>
              <Card title="彩繪" className="lg:col-span-2">
                <div>
                  所謂彩繪紫砂壺，是紫砂壺裝飾的一種方式，叫作加彩掛釉，也就是在本色的紫砂壺上面繪上釉彩，再次入窯燒製。紫砂壺上面以釉彩裝飾成人物、山水、花鳥等圖案，
                  看上去更顯雅容華貴，豔麗多姿。
                </div>
              </Card>
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-widest text-stone-500">圖卡 ④</div>
            <div className="mt-3 grid gap-4 lg:grid-cols-2">
              <Card title="貼花">
                <div>
                  貼花在紫砂壺的裝飾中，占有一定的比重。有很多題材如自然界的很多大家熟知的植物。貼花工藝是將手捏的花形或者模印的花形用的泥漿貼在紫砂壺的壺體上，
                  再用工具對其進行修飾使之達到一定的效果，並且呈立體狀，十分考驗製作者的繪畫與雕刻的素養，並非一朝一夕就能做好的。貼花裝飾也經過歷代藝人的研究才有所進步，
                  到唐代以後貼花的紋飾更加的精美細膩、創新個性，並十分的盛興。
                </div>
              </Card>
              <Card title="包金包銀">
                <div>
                  紫砂包錫裝飾，包金、包銀、包銅裝飾，是紫砂傳統裝飾技法之一。清中期朱堅（石梅）精於此術。常見形式有壺體全包或壺體包錫，嘴把鑲金、鑲玉、鑲紅木等。
                  在壺嘴、壺口、壺蓋、壺把等部分用金包邊的工藝。
                </div>
              </Card>
              <Card title="冰紋" className="lg:col-span-2">
                <div>
                  冰裂紋路類似於瓷器中的「哥窯」、「弟窯」中的冰裂紋，所以後來就把這種壺稱為「冰紋壺」，這是一種偶爾得到的裝飾手法。不過要做到自然的「殘缺美」非常困難，
                  可遇而不可求。所以目前我們所看到的冰紋壺，大部分都是人為預先在生坯上製作出來的，後期描繪的。
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Panel>

      <Panel id="zisha-visual-20-clays" title="買紫砂必懂的 20 個泥料（文字展板）" subtitle="依 5 張圖卡順序：總覽 → 紫泥系 →（天青/青灰紫泥/紅泥/朱泥/大紅袍）→（降坡泥/本山綠/梨皮泥/共生礦）→（本山段/老段泥/青灰段/黃金段/芝麻段）">
        <div className="space-y-6">
          <Callout title="排序說明">
            本段依你提供的「5 張正確順序圖卡」整理：總覽 → 紫泥系 → 天青/青灰紫泥/紅泥/朱泥/大紅袍 → 降坡泥/本山綠/梨皮泥/共生礦 → 本山段/老段泥/青灰段/黃金段/芝麻段。
          </Callout>

          <Card title="買紫砂必懂的 20 個泥料（紫泥/清水泥/紅皮龍/底槽青/烏泥）">
            <div>
              <K>紫泥：</K>燒成後色澤相對溫潤，短期泡養即光潤古雅。烏龍茶生茶（輕焙火系列）特好、普洱茶各種系列等。
            </div>
            <div>
              <K>清水泥：</K>紅清水泥是紫泥中較為純粹的一種，本泥因視之古樸，經長期使用後老味濃厚。普洱茶各種系列，烏龍茶生茶（輕焙火系列）龍井，花茶，碧螺春，紅茶，綠茶等。
            </div>
            <div>
              <K>紅皮龍：</K>礦料為紫泥的一種，紫棕褐色，可塑性好燒成後色澤由棕紅向暗紅、紫紅變化，頗耐看。烏龍茶生茶（輕焙火系列）特好、普洱茶各種系列等。
            </div>
            <div>
              <K>底槽青：</K>質地純，泥質細膩，成色穩重，呈棕色。普洱茶各種系列，烏龍茶生茶（輕焙火系列）龍井，花茶，碧螺春，紅茶，綠茶等。
            </div>
            <div>
              <K>烏泥：</K>礦料產於紫泥泥層上部。熟泥比較細膩，耐火度極高。燒成後呈淺褐紅微泛黃色調。烏龍茶生茶（輕焙火系列）特好、普洱茶各種系列等。
            </div>
          </Card>

          <Card title="（天青/青灰紫泥/紅泥/朱泥/大紅袍）天青泥／青灰紫泥／紅泥／朱泥／大紅袍（圖卡）">
            <div>
              <K>天青泥：</K>礦料質地均勻細膩，呈紫褐微透紅色緻密狀燒成後呈深豬肝色，表面細梨皮狀，胎質堅潤。
            </div>
            <div>
              <K>青灰紫泥：</K>熟泥細膩，可塑性好，成型製作時帶有一定泥沙性，燒成溫度範圍一般。燒成後呈褐紫泛青灰色調，胎質呈細梨皮狀，質堅而緻密，表面光潤，色澤效果細膩而豐富經一定的高溫呈泛青灰色調顆粒很漂亮，油性很足，透氣性好。
            </div>
            <div>
              <K>紅泥：</K>熱淋變色率高，養後越顯紅潤，易現包漿之美。烏龍茶生茶（輕焙火系列）、鐵觀音（中焙火或重焙火系列）普洱茶各種系列。
            </div>
            <div>
              <K>朱泥：</K>朱紅微嫣具綿密柔滑之砂感，水色溫潤度中等，熱水沖淋立展嬌嫩鮮紅特色。鐵觀音，臺灣高山茶，普洱生茶，龍茶生茶（輕焙火系列），龍井等。
            </div>
            <div>
              <K>大紅袍：</K>質感綿密、緊實細緻，持之扎實沉重，紅潤豔麗，泥中極品，無以倫比；泥胚含少許原礦顆粒，沖淋熱水後色變極大，呈紅中帶紫，養壺易現「包漿」之美。
            </div>
          </Card>

          <Card title="（降坡泥/本山綠/梨皮泥/共生礦）降坡泥／本山綠／梨皮泥／共生礦（圖卡）">
            <div>
              <K>降坡泥：</K>練製後出現老味十足，橙紅中泛黃的燒成樣貌，讓人觀之即生思古之幽情。普洱茶各種系列，烏龍茶生茶（輕焙火系列）鐵觀音、花茶、紅茶、綠茶、龍井、碧螺春。
            </div>
            <div>
              <K>本山綠：</K>礦料剛開採時呈乳白泛青，24小時後變為青黃帶綠色，燒成後則呈淺黃綠色，胎質細密平整。普洱茶系列，鐵觀音及半發酵類茶，重發酵茶類（黑茶類），烏龍茶生茶（輕焙火系列）綠茶，龍井，紅茶等。
            </div>
            <div>
              <K>梨皮泥：</K>梨皮泥經過高溫燒製之後顏色為米黃色調，特高溫顏色泛白。普洱茶系列，鐵觀音及半發酵類茶，重發酵茶類（黑茶類），烏龍茶生茶（輕焙火系列）綠茶，龍井，紅茶等。
            </div>
            <div>
              <K>共生礦：</K>黑紫泥和本山綠泥糅合共生的上等共生礦，燒成後有樸玉質感，十分迷人。此等優質原礦用一塊少一塊，堪稱泥料中的「大熊貓」。
            </div>
            <div>
              <K>共生礦：</K>成品色澤古雅，礦脈裡的鐵質含量高，透氣性能好，顏色似沉香，非常容易泡養和包漿！
            </div>
          </Card>

          <Card title="（本山段/老段泥/青灰段/黃金段/芝麻段）本山段／老段泥／青灰段／黃金段／芝麻段（圖卡）">
            <div>
              <K>本山段：</K>產於宜興丁蜀鎮本地的黃龍山，所以俗稱本山段泥！本山段泥，也被叫做團泥是本山綠泥和紫泥的共生礦土，因此本山段泥窯燒出來的成品顏色是不固定的。
            </div>
            <div>
              <K>老段泥：</K>熱淋變色率高，養後越顯紅潤，易現包漿之美。烏龍茶生茶（輕焙火系列）、鐵觀音（中焙火或重焙火系列）普洱茶各種系列。
            </div>
            <div>
              <K>青灰段：</K>色澤青穆沉靜，砂質如青鐵冷凝，致密厚重材質如碧玉，一經泡養如青鐵古玉質感，柔滑如脂。
            </div>
            <div>
              <K>黃金段：</K>為段泥礦經風化的一層，其色澤分明，透氣性佳，為段泥中極品。成品色澤為金子的顏色。普洱茶系列，鐵觀音及半發酵類茶，重發酵茶類（黑茶類），烏龍茶生茶（輕焙火系列），綠茶，龍井，紅茶等。
            </div>
            <div>
              <K>芝麻段：</K>芝麻段泥是本山段泥中較有特色，深受眾多人喜歡的一款泥料。之所以稱其為芝麻段泥，是因為用原泥製作成作品燒成後，有眾多的白色顆粒、紅色顆粒和黑色顆粒，自然密布於體表，呈芝麻狀。
            </div>
          </Card>
        </div>
      </Panel>

      <Panel id="zisha-visual-cheatsheet" title="看懂秒變資深紫砂壺高手（總覽圖卡：文字版）" subtitle="器型／術語／養護／工藝／泥料（依圖卡整理）">
        <div className="space-y-6">
          <BlockTitle>器型</BlockTitle>

          <div className="grid gap-4">
            <Card title="圓器（總覽長清單）" className="bg-white">
              <div className="text-sm text-stone-500">（依圖卡原清單列出）</div>
              <div className="mt-2 md:columns-2 md:gap-10">
                德鐘壺、石瓢壺、掇球壺、潘壺、如意壺、半月壺、華穎壺、美人肩、茄段壺、思亭壺、洋桶壺、汲直壺、仿古壺、西施壺、井欄壺、周盤壺、摸只壺、合歡壺、秦權壺、笠天壺、半瓢壺、漢鐸壺、汲瓢壺、梨形壺、龍蛋壺、牛蓋壺、鮑鴻壺、乳鼎壺、上新橋、文旦壺、線圓壺、笑櫻壺、虛扁壺、湯婆壺、魚罩壺、鏡瓦壺、范莊壺、唐羽壺。
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card title="方器">
                <div>六方壺、八方壺、僧帽壺、雪華壺、傳爐壺、四方壺。</div>
              </Card>
              <Card title="花器">
                <div>報春壺、葫蘆壺、魚化龍、松鼠葡萄、竹段壺、供春壺、南瓜壺。</div>
              </Card>
              <Card title="提梁">
                <div>提梁壺、竹節提梁壺、吳經提梁壺、石瓢提梁壺、提璧提梁壺、大彬提梁壺。</div>
              </Card>
              <Card title="筋紋器">
                <div>合菱壺、筋紋石瓢、筋紋如意、筋紋掇球、筋紋笑櫻、筋紋虛扁、葵仿古壺、八卦龍頭一捆竹。</div>
              </Card>
            </div>
          </div>

          <BlockTitle>術語</BlockTitle>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            茶山、陳腐、陳腐期、包漿、太陽線、紫砂原礦、風化、泥料目數。
          </div>

          <BlockTitle>養護（速記）</BlockTitle>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-2">
            <div>
              <K>開壺：</K>用溫水清洗；浸沒在乾淨的鍋裡；水沸後熄火浸泡在鍋內；撈出紫砂壺，泡茶。
            </div>
            <div>
              <K>養壺：</K>沖淋法：茶葉入壺後，開水沖淋茶壺。／掃刷法：用養壺筆掃刷壺易包漿。／掃刷法：乘茶壺發熱時用半乾濕的毛巾擦拭。
            </div>
            <div>
              <K>清洗：</K>用前溫水清洗；用後清洗乾淨。
            </div>
            <div>
              <K>包漿：</K>固定泡一種茶／放在手中摩挲把玩／存放環境要通風透氣／泡完茶後要及時清理茶渣和茶湯。
            </div>
          </div>

          <BlockTitle>工藝</BlockTitle>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">全手工、半手工、盤築法、純手捏。</div>

          <BlockTitle>泥料</BlockTitle>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-2">
            <div>
              <K>紅泥：</K>紅泥、紅皮龍、降坡泥、朱泥、大紅袍、龍血砂。
            </div>
            <div>
              <K>團泥：</K>段泥、蟹黃泥、黃金段泥。
            </div>
            <div>
              <K>紫泥：</K>紫泥、底槽青、清水泥、紫茄泥、文革泥。
            </div>
            <div>
              <K>綠泥：</K>豆青泥、青灰泥、天青泥、本山綠泥、墨綠泥、綠泥。
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}
