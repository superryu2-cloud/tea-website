import React from 'react';

function ProcessLine({ children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
      <div className="text-xs font-extrabold tracking-widest text-stone-500">PROCESS</div>
      <div className="mt-2 font-extrabold text-stone-900 leading-relaxed">{children}</div>
    </div>
  );
}

function Bullet({ title, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
      <div className="text-sm font-extrabold text-stone-900">{title}</div>
      <div className="mt-2 text-sm text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function SixTeaTypesNotes({ kind }) {
  if (!kind) return null;

  if (kind === 'white') {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-sky-700/70">WHITE TEA</div>
          <div className="mt-2 text-xl font-extrabold text-stone-900">白茶：從工藝、歷史到品飲之道</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            白茶的核心不在「顏色」，而在「工藝」：六大茶類中工序最精簡，通常只保留萎凋與乾燥。這種極簡工藝旨在最大限度保留茶葉原始的天然滋味與內含物質，
            也因此帶來令人著迷的陳化潛力，體現「大道至簡」的哲學。
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">核心定義</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">萎凋＋乾燥（極簡工藝）</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              白茶是輕微發酵茶（約 5%–10%），以溫和的酶促氧化作為風味轉化起點。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">名稱由來</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">白毫，而非白湯</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              多數白茶因芽頭披白毫而得名；年份增長或烹煮都可能使湯色加深，顏色不是分類標準。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">耐陳關鍵</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">一年茶・三年藥・七年寶</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              不是「從無到有」，而是對原本高內質的「優化平衡」：咖啡鹼趨減、胺基酸與黃酮趨增。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">DEFINITION</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">1. 白茶的真正定義：超越顏色的工藝之本</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="顏色迷思（為何不能靠顏色判斷）">
              白茶得名於白毫；若用較粗老葉梗製作本就可能沒有白毫；年份增長湯色會加深；甚至烹煮時茶湯可能呈紅色——因此僅憑顏色判斷並不準確。
            </Bullet>
            <Bullet title="發酵定位（放在六大茶類座標）">
              綠茶約 0%；白茶約 5%–10%（輕微發酵）；青茶（烏龍）範圍廣；紅茶接近 100%。白茶以極簡工藝啟動溫和轉化，是其本質。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">CRAFT</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">2. 極簡中的極致：剖析白茶的製作工藝</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="「攤放」vs「萎凋」：本質不同">
              綠茶攤放初期多為水分蒸發的物理過程；白茶萎凋在失水之外，更重要的是引導多酚開始進行酶促氧化反應，屬化學變化，是風味轉化起點。
            </Bullet>
            <Bullet title="為何最簡單卻最不 easy">
              萎凋極受溫度、濕度、氣流影響，製茶師需以最少機械干預精準判斷時機與程度；不足或過度都可能使整批茶失敗。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">HISTORY</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">3. 正本清源：探尋白茶的真實歷史</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <Bullet title="宋代起源說之辯">
              《大觀茶論》中的「白茶自為一種」多指當時蒸焙工藝的蒸青綠茶路線，且描述更可能指茶樹品種或特定名目，並非今日萎凋工藝的白茶。
            </Bullet>
            <Bullet title="唐代起源說之辯">
              《茶經》記載「白茶樹」更可能是茶樹品種名稱；在唐代工藝背景下，很難等同現代白茶品類。
            </Bullet>
            <Bullet title="周朝曬乾說之辯">
              現代白茶的萎凋需精密控溫濕與時間，並非簡單曬乾即可替代，直接曬乾忽略了工藝核心與難度。
            </Bullet>
          </div>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">可考的創始時間（工藝史）</div>
            <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
              <li>1796（清嘉慶初年）：白毫銀針創制，白茶工藝正式確立</li>
              <li>1922：白牡丹創制（芽葉梗同在，失水率不同，萎凋更難，代表工藝成熟）</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">TYPES</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">4. 當代白茶品類鑑賞</div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">白毫銀針</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">芽頭為主</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">僅由肥碩芽頭製成，身披白毫，外形挺直如針。</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">白牡丹</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">芽＋葉</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                一芽一葉或一芽二三葉，形態舒展如花；芽葉梗同在，萎凋控制更考驗功力。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">壽眉／貢眉</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">葉片為主</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                多採較成熟葉片；較佳者稱貢眉。茶體更厚、風味層次更豐富。
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="知名產區">
              福建福鼎白茶、政和白茶，以及雲南大葉種古樹原料製作的古樹白茶等。
            </Bullet>
            <Bullet title="年份為何重要？">
              白茶出廠不是巔峰；陳化是其核心魅力之一，風味與體感會隨時間逐步轉化。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">AGING</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">5. 時間的魔法：一年茶，三年藥，七年寶</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="陳化帶來的轉變：優化平衡">
              在合適儲存條件下，咖啡鹼含量逐漸減少；胺基酸與黃酮類化合物逐漸增多。陳年白茶因咖啡鹼降低，對睡眠影響更小，亦常被認為更溫和。
            </Bullet>
            <Bullet title="核心成分與體感關聯">
              咖啡鹼（提神、利尿）；胺基酸（鮮甜、平衡苦澀、支持免疫與代謝）；黃酮類（隨陳化增多，是健康價值的重要來源之一）。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">BREWING</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">6. 品飲白茶的藝術與訣竅</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="沖泡方式的多樣性">
              可玻璃杯隨泡觀葉、也可用蓋碗／紫砂走功夫茶路線，細品每一泡的層次變化。
            </Bullet>
            <Bullet title="關鍵技巧：先泡後煮">
              訣竅是「泡淡了再煮」。直接煮乾茶比例難控易苦澀；先泡到滋味變淡，再煮葉底可更穩定地榨取最後精華。
            </Bullet>
          </div>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">耐泡提醒</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              高品質白茶非常耐泡，可達二十道以上。建議先充分體驗沖泡的層次變化，真正「滋味幾乎釋放完」再烹煮，更不負好茶。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">PICKING</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">7. 如何選擇適合您的白茶</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="偏好清甜爽口">
              推薦白毫銀針：芽頭胺基酸含量高，鮮甜清雅最突出。
            </Bullet>
            <Bullet title="偏好濃郁飽滿">
              推薦白牡丹、貢眉或壽眉：葉片比例高，多酚等物質更豐富，茶體更厚、層次更複雜。
            </Bullet>
          </div>
        </div>

        <ProcessLine>嫩葉／芽頭 → 萎凋（以自然條件為主）→ 乾燥 → 白茶；建議先沖泡、後煮葉底</ProcessLine>
      </div>
    );
  }

  if (kind === 'yellow') {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-yellow-50 px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-amber-700/70">YELLOW TEA</div>
          <div className="mt-2 text-xl font-extrabold text-stone-900">黃茶：從歷史、工藝到品鑑</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            黃茶是六大茶類中最低調的一員：產量稀少、工藝複雜，市場上難得一見。其核心價值在「悶黃」——透過濕熱條件促進緩慢轉化，
            形成標誌性的「黃葉黃湯」與溫醇甜潤的風格。
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">定位</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">輕發酵（約 10%–20%）</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              介於綠茶（趨近 0%）與白茶（約 5%–10%）之上，與青茶、紅茶劃開界線。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">核心工序</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">悶黃（身份標誌）</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              關鍵不是「做得黃」，而是把黃控制得恰到好處：黃葉黃湯、甜香純熟、喉韻更舒適。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">辨識優先</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">先確認是否「真悶黃」</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              市場常見「黃茶綠製」：名為黃茶，實為綠茶工藝。購買時先問：是否經過悶黃？
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">PROCESS</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">1. 黃茶的獨特定位與工藝核心</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            黃茶與綠茶血緣深：除了「悶黃」這一步，其他基礎製程幾乎與綠茶一致。正是這道工序，透過濕熱作用促進茶葉內含物質轉化，
            造就黃茶的黃葉黃湯與溫醇甜潤。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="風味關鍵字">
              黃葉黃湯、甜香（花香＋熟栗香）、滋味甘甜柔和、收斂性弱於綠茶，體感溫潤「憨厚」。
            </Bullet>
            <Bullet title="為何難做">
              悶黃對溫度、濕度與時間極度敏感，品質高度依賴師傅經驗，難以標準化，成本高且失敗率相對高。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">HISTORY</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">2. 黃茶的歷史流變：從意外到貢品</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <Bullet title="唐代之名：黃芽非黃茶">
              唐代記載中的「黃芽」多指鮮葉自然發黃的品種或狀態；工藝仍屬蒸青綠茶，黃茶工藝尚未成型。
            </Bullet>
            <Bullet title="明代之變：失誤中誕生的風味">
              蒸青過長、鍋炒溫度偏低、殺青後未及時揉捻或揉捻後堆久未乾，都可能讓葉綠素不穩而「做黃」。後來人們發現可控的黃化能帶來甜香純熟與更舒適喉韻。
            </Bullet>
            <Bullet title="清代之巔：短暫輝煌">
              工藝逐漸成型後列為貢茶，清代達高峰；但記載仍稀少，盛況細節難完整考究。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">TODAY</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">3. 當代困境：工藝的失傳與復興挑戰</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="衰退與斷層">
              近代茶業重心轉向外銷與大宗品類，黃茶因產量小、工序繁瑣而停產；七〇年代後多數傳統品類停做，技藝傳承出現斷層。
            </Bullet>
            <Bullet title="復興為何困難">
              悶黃高度依賴經驗、難以標準化；需要長時間守候、人工成本高；產量少與行銷少形成循環，市場也常出現「黃茶綠製」。
            </Bullet>
          </div>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">稀有度（市場事實）</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              2018 年黃茶總產量僅佔全國茶葉總量約 0.32%；出口量極少（約佔產量 3%），至今仍幾乎是中國獨有的茶類。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">TYPES</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">4. 分類體系與代表名品</div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">黃芽茶（頂級）</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">全芽／一芽一葉</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>君山銀針（湖南岳陽）</li>
                <li>蒙頂黃芽（四川蒙頂山）</li>
                <li>霍山黃芽（安徽霍山）</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">黃小茶</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">一芽一葉／一芽二葉</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>北港毛尖</li>
                <li>溈山毛尖</li>
                <li>遠安鹿苑</li>
                <li>平陽黃湯（浙江）</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">黃大茶（親民耐泡）</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">一芽三四葉以上</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>霍山黃大茶（安徽霍山）</li>
                <li>廣東大葉青</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="產區概況">
              湖南與安徽是主要產區，合計佔全國產量近 85%；岳陽也被譽為「中國黃茶之鄉」。
            </Bullet>
            <Bullet title="市場現實">
              市面上不少名品存在被改製為綠茶的情況；購買時務必以是否悶黃與湯色表現做驗證。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">TASTING</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">5. 品鑑之道：沖泡、風味與保健價值</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">沖泡建議</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>茶水比：約 1:50</li>
                <li>水溫：90°C 以下</li>
                <li>出湯：第一泡約 15 秒即可</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">感官特徵</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>湯色：明亮黃色（黃葉黃湯）</li>
                <li>香氣：甜潤花香＋熟栗香</li>
                <li>滋味：甘甜柔和，少綠茶的銳利與苦澀</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">保健價值（常見說法）</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              悶黃過程被認為會產生較多與消化相關的酶類，黃茶常被描述有助於保護脾胃、增加食慾與幫助消化。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">VERIFY</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">6. 消費者指南：如何辨別真正的黃茶</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="關鍵提問：是否悶黃？">
              辨別黃茶最直接的一步：購買時直接詢問「是否經過悶黃工序」。若無法明確回答，需更謹慎驗證。
            </Bullet>
            <Bullet title="感官三步驗證法">
              觀湯色（純正黃色、無雜色）→ 聞香氣（甜潤成熟、較綠茶更「甜」）→ 品滋味（甘甜柔和、苦澀收斂不強）。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">CLOSING</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">結語</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            黃茶稀有、工藝精深、風味溫潤。用知識作為鑰匙，回到「悶黃」與「黃湯黃葉」的本質判斷，才能真正找到並品嚐到這位茶中隱士的醇厚甘甜。
          </p>
        </div>

        <ProcessLine>茶菁 → 殺菁（炒／蒸）→ 悶黃 → 揉捻 → 乾燥 → 黃茶；判斷關鍵：是否悶黃＋湯色是否純黃</ProcessLine>
      </div>
    );
  }

  if (kind === 'green') {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-lime-50 px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-emerald-700/70">GREEN TEA</div>
          <div className="mt-2 text-xl font-extrabold text-stone-900">中國綠茶的文化溯源與品飲指南</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            綠茶是「零發酵」茶類，關鍵在於以殺青抑制酶活性、固定鮮葉的清新香氣與翠綠本色。由於茶葉發酵工藝在明代才逐漸成熟，
            明代以前中國人所飲用的茶，在廣義上多可歸為綠茶；某種程度上，一部中國飲茶史，也是綠茶的演變史。
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">分類座標</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">六大茶類（依發酵程度）</div>
            <ul className="mt-2 text-sm text-stone-700 leading-relaxed space-y-1">
              <li>綠茶：零發酵</li>
              <li>白茶：微發酵</li>
              <li>黃茶：輕發酵</li>
              <li>青茶（烏龍）：半發酵</li>
              <li>紅茶：全發酵</li>
              <li>黑茶：後發酵</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">沖泡核心</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">三句話記住綠茶</div>
            <ul className="mt-2 text-sm text-stone-700 leading-relaxed space-y-1">
              <li>水溫約 80°C</li>
              <li>不加蓋、不悶泡</li>
              <li>茶水比 1:50（150 ml 約 3 g）</li>
            </ul>
            <div className="mt-3 text-xs text-stone-500">適用於多數嫩採綠茶；想更清爽可縮短浸泡時間。</div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">工藝一眼懂</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">綠茶的典型製程</div>
            <div className="mt-3 grid gap-2">
              <div className="rounded-xl bg-stone-50 px-4 py-3 text-sm font-extrabold text-stone-900">殺青（蒸青／炒青）</div>
              <div className="rounded-xl bg-stone-50 px-4 py-3 text-sm font-extrabold text-stone-900">揉捻</div>
              <div className="rounded-xl bg-stone-50 px-4 py-3 text-sm font-extrabold text-stone-900">乾燥</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">ARTICLE</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">中國綠茶的文化溯源與品飲指南（全文）</div>

          <div className="mt-4 space-y-8 text-sm text-stone-700 leading-relaxed">
            <section className="space-y-3">
              <div className="text-base font-extrabold text-stone-900">1. 中國茶的六大分類：以發酵定義茶之本質</div>
              <p>
                探索博大精深的中國茶文化，首先需要理解其分類系統的科學基礎。中國茶的分類並非基於主觀的感官體驗，而是建立在一個客觀的生化指標之上——發酵程度。這不僅是區分茶葉本質的關鍵，也是品鑑萬千茶品的起點。
              </p>
              <p>
                基於發酵程度由低至高的順序，中國茶可被嚴謹地劃分為六大類別。茶湯的顏色與發酵程度存在著顯著的正相關性，顏色越深，通常意味著發酵程度越高：
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>綠茶：零發酵</li>
                <li>白茶：微發酵</li>
                <li>黃茶：輕發酵</li>
                <li>青茶（烏龍茶）：半發酵</li>
                <li>紅茶：全發酵</li>
                <li>黑茶：後發酵</li>
              </ul>
              <p>
                在這套體系中，綠茶以其「零發酵」的特性佔據了獨特的地位。它不僅是一種茶類，更是中國飲茶史的核心載體。由於茶葉發酵工藝直到近四百年的明代才逐漸成熟，因此，明朝以前中國人所飲用的茶，在廣義上都可以歸類為綠茶。可以說，一部中國飲茶史，在很大程度上便是一部綠茶的演變史。
              </p>
              <p>接下來，讓我們一同回溯時光長河，探尋綠茶悠遠的歷史源頭。</p>
            </section>

            <section className="space-y-3">
              <div className="text-base font-extrabold text-stone-900">2. 綠茶的悠久起源：從神話到信史</div>
              <p>
                追溯綠茶的源頭，是一趟結合了神話傳說、考古實證與文字記載的旅程。這三條線索交織，共同構建了一部關於茶葉起源的完整敘事。
              </p>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">神話中的「茶祖」</div>
                <p>
                  中國茶文化的濫觴，始於一個廣為流傳的神話——神農嘗百草。傳說中，生活在新石-器時代晚期的炎帝神農氏，為辨識草藥親身試毒，曾「一日遇七十二毒」，而當他品嚐到茶樹的葉子時，體內毒素便得以化解。儘管此說法無法考證，但它將神農氏尊為「茶祖」，並奠定了茶在早期認知中「解毒」的藥用基礎。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">考古學的實證</div>
                <p>
                  相較於神話，考古發現則提供了更為確鑿的證據。在浙江餘姚的河姆渡文化遺址中，考古學家發現了距今超過六千年的人工種植茶樹樹根。經過農業部茶葉質量監督檢驗測試中心的色譜檢測技術分析，證實了這些樹根樣本確為茶樹。這一發現將中國有記載的茶樹種植史，從實證角度推至六千年以上。
                </p>
                <p>
                  從生物學角度看，嚴格意義上的「茶」專指由山茶科、山茶屬植物的嫩葉製成的飲品。因此，儘管名稱中帶有「茶」字，如苦丁茶（冬青科）、菊花茶、大麥茶等常見飲品，均不屬於真正的茶類。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">文字記載的開端</div>
                <p>
                  目前有文字可考的最早飲茶記錄，出現在先秦時期的巴蜀地區（今四川、重慶一帶）。當時的先民對茶葉的利用方式極為原始，主要有三種：
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>作草藥：將茶葉曬乾保存，作為藥材使用。</li>
                  <li>咀嚼鮮葉：直接咀嚼新鮮的茶樹葉子，感受其汁液從苦澀到清涼甘潤的變化，這種方式據稱能達到類似刷牙的潔齒效果。</li>
                  <li>煮成羹湯：將茶葉作為蔬菜，煮成羹湯食用，以增加營養並消解食物中的毒素。</li>
                </ol>
                <p>
                  隨著戰國時期秦國統一巴蜀，這一地區獨特的茶文化開始有了向外傳播的契機，為後續朝代飲茶風尚的演變奠定了堅實的基礎。
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <div className="text-base font-extrabold text-stone-900">3. 飲茶風尚的演變：一部跨越朝代的文化史</div>
              <p>
                從秦漢的宮廷飲品到宋代的文人雅趣，再到明代融入日常的沖泡方式，中國的飲茶風尚經歷了數次重大變革。這不僅是製茶工藝的進步史，更是一部映照社會文化變遷的生動歷史。
              </p>

              <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">3.1 秦漢至魏晉南北朝：從宮廷飲品到文化符號</div>
                <p>
                  秦漢大一統時代，源自巴蜀的茶葉得到初步傳播，逐漸成為官方貴族家庭招待賓客、消遣時光的飲品。此時的加工方法相對簡單：將新鮮茶葉搗成餅狀，再曬乾儲存。飲用時，需先將茶餅置於火上烘烤，隨後碾成碎末，加入開水，並混入蔥、薑、橘皮等調味品以消學茶的澀味。
                </p>
                <p>
                  進入魏晉南北朝，一個思想文化空前活躍的時期，茶開始超越飲品的範疇，被賦予了文化屬性。特別是佛教的傳播，極大地推動了茶的流行。僧人們發現飲茶有兩大核心益處：
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>提神醒腦：茶能幫助他們在長時間打坐時保持頭腦清醒，靜心思考。</li>
                  <li>幫助消化：久坐容易導致積食，而飲茶則有助於消化。</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">3.2 唐代：茶聖陸羽與「煎茶」的確立</div>
                <p>
                  到了唐代（約公元八世紀前後），飲茶之風已遍及全國，在長安、洛陽等都城尤為盛行。這一時期誕生了被後世尊為「茶聖」的陸羽，他撰寫的《茶經》是世界上現存最早、最全面的茶學專著。
                </p>
                <p>
                  唐代製茶工藝的核心是 <span className="font-extrabold text-stone-900">「殺青」</span>。當時採用「蒸青」的方式，即用蒸汽對鮮葉進行高溫處理。這種對「殺青」工藝的掌握，正是唐代匠人得以中止氧化、定義綠茶本質、並奠定其後數百年主流地位的關鍵。其目的主要有三：
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>使葉片變軟，便於後續加工。</li>
                  <li>抑制酶的活性，防止茶葉氧化發酵，保持其綠色本質。</li>
                  <li>去除鮮葉的青澀味，激發出清新的香氣。</li>
                </ol>
                <p>
                  然而，當時民間飲茶方式頗為粗放，常在茶湯中加入蔥、薑、棗、橘皮等調味品以消學茶的澀味。陸羽對此痛心疾首，認為此舉無異於 <span className="font-extrabold text-stone-900">「喝溝渠裡的廢水」</span>，是暴殄天物。他在《茶經》中詳細記載並推崇旨在品味茶之本味的 <span className="font-extrabold text-stone-900">「煎茶法」</span>：
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>炙茶：將茶餅放在火上均勻烘烤。</li>
                  <li>碾末：將烤好的茶餅冷卻後，碾成米粒大小的茶末。</li>
                  <li>煮水加鹽：燒水至初沸，水面出現微小氣泡時，加入少許鹽調味。</li>
                  <li>投茶：待氣泡變大，沿鍋邊環繞時，先用瓢舀出一瓢沸水備用，再將茶末投入沸水中心。</li>
                  <li>止沸：待鍋中茶湯再次完全沸騰時，將備用的那瓢水倒回鍋中，以停止沸騰，培育茶沫。</li>
                  <li>分湯：將煮好的茶湯均勻分到茶碗中，即可飲用。</li>
                </ol>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">3.3 宋代：登峰造極的「點茶」與「鬥茶」文化</div>
                <p>
                  宋代將飲茶的精緻與儀式感推向了頂峰，發展出極為考究的 <span className="font-extrabold text-stone-900">「點茶法」</span>。這一技藝堪稱古代的飲品藝術：
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>研磨：將茶餅研磨成極其細膩的粉末。</li>
                  <li>過篩：用「螺卷」（一種細密的絲網）反覆篩選茶粉，確保其細膩均勻。</li>
                  <li>
                    擊拂：在茶碗中放入茶粉，注入少量熱水，然後使用一種名為「茶筅」的竹製工具高速擊打、攪拌，直至茶湯達到 <span className="font-extrabold text-stone-900">「乳化蓬鬆」</span> 的狀態，表面形成一層豐厚、細膩且可以「掛壁」的泡沫。
                  </li>
                </ol>
                <p>
                  據宋徽宗記載，完整的點茶過程甚至需要分七次注水，且每一次的力度與角度都有所不同，其複雜程度可見一斑。由點茶衍生出的 <span className="font-extrabold text-stone-900">「鬥茶」</span>，則是宋代文人之間流行的雅玩。他們不僅比較茶湯泡沫的色澤與持久度，甚至能技藝高超地在潔白泡沫上寫字作画，其意趣與現代的咖啡拉花比賽頗有異曲同工之妙。在這短暫存在的泡沫上進行創作，不僅是技藝的比拼，更是對轉瞬即逝之美的欣賞，充分體現了宋代文人的雅緻與哲思。這一時期著名的貢茶「龍團鳳餅」，正是宋代茶文化盛世的縮影。而日本的抹茶文化，其源頭正是宋代的點茶法。
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">3.4 明代：返璞歸真的「泡茶」時代</div>
                <p>
                  飲茶方式在明代迎來了歷史性的轉折。出身農民的開國皇帝朱元璋認為，宋代繁複的餅茶製作工藝過於奢侈、靡費人工，遂下令廢除，改為進貢散茶。
                </p>
                <p>
                  這道聖旨不僅僅是改變了宮廷的儀式，它從根本上使飲茶文化走向了平民化。通過瓦解精緻繁複、耗費巨大的貢茶餅茶體系，它為一種更簡潔、更易普及的 <span className="font-extrabold text-stone-900">「泡茶」</span> 法（即直接用開水沖泡散裝茶葉）鋪平了道路，並最終確立了此後數百年中國茶文化的主流形態。這種方式一直沿用至今，成為我們最熟悉的喝茶方法。也正是在這一時期，茶葉的發酵工藝開始出現，為日後紅茶、青茶等其他五大茶類的發展埋下了伏筆。
                </p>
              </div>

              <p>
                從繁複的歷史演變中走來，綠茶最終以最純粹的形式融入現代生活。接下來，我們將聚焦於當下，為您提供一套完整的現代綠茶品飲指南。
              </p>
            </section>

            <section className="space-y-4">
              <div className="text-base font-extrabold text-stone-900">4. 現代綠茶品飲實用指南</div>

              <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">4.1 知名綠茶品類鑑賞</div>
                <p>中國綠茶品類繁多，各具特色。以下是一些廣受讚譽的代表性名茶：</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>杭州西湖龍井</li>
                  <li>安徽黃山毛峰</li>
                  <li>安徽六安瓜片</li>
                  <li>安徽太平猴魁</li>
                  <li>蘇州碧螺春</li>
                  <li>江西廬山雲霧</li>
                  <li>四川竹葉青</li>
                </ul>
                <p>
                  特別說明：您可能還聽過 <span className="font-extrabold text-stone-900">「安吉白茶」</span>，請注意，雖然其名中帶「白」字，但從製茶工藝分類上，它屬於不發酵的綠茶。
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">4.2 綠茶的沖泡藝術</div>
                <p>想要泡好一杯綠茶，需要掌握器皿選擇與沖泡技巧的要點。</p>
                <p>
                  器皿選擇 建議使用玻璃杯或白瓷蓋碗。因為綠茶未經發酵，保留了鮮葉的翠綠色澤與完整形態，使用透明或淺色的器皿，便於在沖泡過程中欣賞茶葉舒展的美態與清澈的湯色。
                </p>
                <p className="font-extrabold text-stone-900">沖泡兩大關鍵</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>水溫：80°C 左右。綠茶多為鮮嫩的芽頭，絕對不能使用沸水沖泡，過高的溫度會將其「燙壞」，破壞其鮮爽的口感與營養成分。</li>
                  <li>不加蓋。沖泡過程中不要蓋上蓋子，否則會將茶葉「悶黃」，使其失去鮮綠的色澤和清新的香氣。</li>
                </ol>
                <p className="font-extrabold text-stone-900">「三明治泡法」步驟詳解 這是一種能充分展現綠茶風味的實用泡法：</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>溫杯注水：先向杯中注入約 80°C 的熱水，水量約為杯子容量的三分之一。</li>
                  <li>投擲茶葉：將茶葉投入水中。茶水比例建議為 1:50，以一個 150 毫升的杯子為例，投入約 3 克茶葉即可。</li>
                  <li>輕搖喚醒：沿杯底輕輕轉動杯身，讓茶葉充分浸潤，靜置片刻以「喚醒」茶香。</li>
                  <li>沿壁注水：待茶葉舒展後，再沿著杯壁緩緩將水注滿。</li>
                </ol>
                <p>耐泡度 一般的綠茶可沖泡三道左右。品質極佳的綠茶，其香氣與滋味可以持續六至七道甚至更多。</p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">4.3 綠茶的功效與飲用宜忌</div>
                <p>
                  健康益處 綠茶在六大茶類中擁有最高的茶多酚含量。雖然茶多酚是苦澀味的來源，但它同時也是一種對健康大有裨益的物質，具有抗癌、抗自由基、抗氧化、抗過敏、抗菌、延緩衰老、預防蛀牙、降低心血管疾病風險等多種功效。
                </p>
                <p className="font-extrabold text-stone-900">飲用提醒</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>提神效果：綠茶的咖啡因含量較高，提神效果顯著。因此，容易失眠的人應盡量避免在睡前飲用。</li>
                  <li>茶性寒涼：從中醫角度看，綠茶茶性偏寒涼。體質虛寒的人士不宜過多飲用。</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 space-y-3">
                <div className="font-extrabold text-stone-900">4.4 選購綠茶的訣竅：「明前茶」與「雨前茶」</div>
                <p>在選購高品質綠茶時，您常會遇到兩個術語：「明前茶」和「雨前茶」。</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>明前茶：指在清明節氣之前採摘和製作的茶葉。</li>
                  <li>雨前茶：指在穀雨節氣之前、清明之後採摘和製作的茶葉。</li>
                </ul>
                <p>兩者對比</p>
                <div className="overflow-hidden rounded-xl border border-stone-200">
                  <table className="w-full text-sm">
                    <thead className="bg-stone-50 text-stone-700">
                      <tr>
                        <th className="px-4 py-2 text-left font-extrabold">類別</th>
                        <th className="px-4 py-2 text-left font-extrabold">特點</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white text-stone-700">
                      <tr className="border-t border-stone-200">
                        <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">明前茶</td>
                        <td className="px-4 py-3">
                          茶樹經過整個冬季的休養，積蓄了豐富的養分，此時萌發的芽頭最為鮮嫩，因此口感最佳，最受市場追捧。
                        </td>
                      </tr>
                      <tr className="border-t border-stone-200">
                        <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">雨前茶</td>
                        <td className="px-4 py-3">
                          氣溫回升，茶葉生長速度加快，葉片相對成熟，因此在沖泡時更為耐泡。
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  對於初次嘗試的品飲者而言，無需過於糾結。明前茶的鮮爽與雨前茶的醇厚各有千秋，兩者都非常值得購買品嚐，親身體會春日茶園的不同風味。
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/70 via-white to-sky-50 px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-emerald-700/70">SPECIAL FEATURE</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">碧螺春（中國）專區：品味春意</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            本專區聚焦中國碧螺春（江蘇洞庭山系），非台灣三峽碧螺春。從美學意象、詩意典故、沖泡心法到四時養生，整理成可直接拿來閱讀與教學的版本。
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {['洞庭山', '驚蟄雨前', '滿披白毫', '上投法', '嚇煞人香'].map((tag) => (
              <span key={tag} className="rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-emerald-900">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
            <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">AESTHETICS</div>
            <div className="mt-2 text-lg font-extrabold text-stone-900">詩意與美學：一碗春景的展開</div>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              清代文人以「碧綠浮動，清香襲人」形容其神韻：細嫩如睫、滿披白毫的茶芽在水中輕盈舒展與浮動，宛如碧綠花影，清雅香氣隨之襲來。
              古人亦描寫「洞山無處不飛翠，碧螺春香百里醉」——「飛翠」是嫩綠、淺綠到深綠、墨綠的層次交錯，彷彿山林在春天流動。
            </p>
            <div className="mt-4 rounded-2xl bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">採摘意象</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                「細雨飄食，春雷動，帶纖手採摘雨前鮮芽」：驚蟄時節春雷乍響，茶樹迸發嫩芽；「帶纖手」指極細緻的採摘手法，以避免損傷細嫩芽頭。
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
            <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">STORY</div>
            <div className="mt-2 text-lg font-extrabold text-stone-900">名號源由：人名、地名與外形</div>
            <ul className="mt-3 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-2">
              <li>人名傳說：相傳「碧螺」姑娘為救愛人採藥墜崖，身殞之處長出茶樹，遂以其名命名。</li>
              <li>地名來源：原產於洞庭湖東西兩山的碧螺峰，因地得名。</li>
              <li>外形特徵：色澤碧綠、捲曲如螺、於春採摘——三者合一成「碧螺春」。</li>
            </ul>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-amber-700">別名：嚇煞人香</div>
              <p className="mt-2 text-sm text-amber-900 leading-relaxed">
                相傳康熙南巡品茶驚豔，賜名「嚇煞人香」。可理解為對嫩芽「毫香／嫩香」的極致稱讚，屬清雅內斂的香氣審美。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">BREWING</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">茶品特色與沖泡心法：上投法與「白毫雪落」</div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">外形</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">捲曲成螺，滿披白毫</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">茶乾形態優美、銀毫滿佈，觀賞性強。</p>
            </div>
            <div className="rounded-2xl bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">風味</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">色香味三鮮</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">茶湯鮮亮、香氣鮮爽、滋味鮮醇；常帶花香果味。</p>
            </div>
            <div className="rounded-2xl bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">上投法</div>
              <ol className="mt-2 text-sm text-stone-700 leading-relaxed list-decimal pl-5 space-y-1">
                <li>先注入適溫熱水</li>
                <li>再將乾茶輕撒水面</li>
                <li>觀白毫吸水增重如雪落</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">品飲小技巧</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              可將舒展茶芽一同入口咀嚼，微苦轉瞬即逝，隨之回甘清涼，有「退火」感。建議仍以 80°C 左右、短浸、不悶為原則。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">LIFESTYLE</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">茶飲與四時養生：順時而飲的邏輯</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="春飲綠茶：疏肝理氣、清解春燥">
              春天屬木，對應肝。綠茶性微寒，適合春季飲用，感受清新與清亮的「春意」。
            </Bullet>
            <Bullet title="冬飲熟茶：溫養與安定">
              冬天屬水，其色為黑，對應腎。後發酵熟茶茶性溫和、湯色深濃，適合寒冷時節的日常飲用。
            </Bullet>
          </div>
          <div className="mt-4 rounded-2xl bg-stone-50 px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">茶園管理的生態智慧</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              碧螺春常被提及的「花香果味」，與傳統「花果樹交錯間栽」的生態管理相呼應：既有香氣意象，也有遮蔭、避霜雪、禦秋陽的實際效果，展現順應自然、利用自然的園藝智慧。
            </p>
          </div>
        </div>

        <ProcessLine>重點：殺青固定鮮綠；沖泡以 80°C、少悶、短浸為原則。</ProcessLine>
      </div>
    );
  }

  if (kind === 'red') {
    return (
      <div className="space-y-6">
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">起源座標</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">中國明末・福建武夷山</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              從「阻止氧化」到「擁抱發酵」：一場工藝探索，讓深色發酵茶走上世界舞台。
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">國際路線</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">荷蘭 → 英國 → 全球</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              1610 年荷蘭東印度公司帶回茶樣後，飲茶迅速在歐洲貴族間成為時尚；英國崛起後，更將紅茶推進全球化。
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">實用快抄</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">紅茶沖泡建議</div>
            <ul className="mt-2 text-sm text-stone-700 leading-relaxed space-y-1">
              <li>茶水比：1:30</li>
              <li>水溫：95°C 以上沸水</li>
              <li>器具：瓷器（不吸味、好觀湯色），紫砂亦可</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">TURNING POINT</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">意外的誕生：從綠茶到發酵茶的技術轉捩點</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            十六世紀武夷山茶農為提升競爭力，學習安徽松蘿山僧侶的「炒青」技術。炒青原本用來更有效抑制氧化、保持翠綠與高香；
            但在探索過程中，茶農們發現：如果不阻止氧化，茶葉雖變深色，茶湯卻更明艷，香氣也更馥郁——「發酵茶」因而誕生。
          </p>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">EARLY TRADE</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">初登世界舞台：歐洲的早期接觸與貿易開端</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <Bullet title="1556 之後：早期記載（傳教士）">
              葡萄牙傳教士描述「顏色微紅、以瓷杯盛裝」的熱飲，雖未必等同現代紅茶，但已非綠茶的可能線索。
            </Bullet>
            <Bullet title="1610：荷蘭東印度公司帶回茶樣">
              首次將少量茶葉樣品運回荷蘭並試探市場，以「東方草藥」形式販售，利潤可觀，進而推動擴大貿易。
            </Bullet>
            <Bullet title="1650 之後：飲茶成為貴族時尚">
              海牙等地形成飲茶風潮；旅行記錄也提到以牛奶、鹽等方式飲茶，後來歐洲多以糖取代鹽。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">BRITAIN</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">英倫風潮：從宮廷珍品到全民飲品</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            1662 年凱瑟琳公主將飲茶與茶具帶入英國宮廷，迅速引領貴族模仿。17 世紀末，「Bohea」發酵茶在歐洲走紅，
            「Bohea」即「武夷」的音譯，並一度成為歐洲人對深色發酵茶（Black Tea）的代名詞。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">等級線索</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed space-y-1">
                <li>Bohea（武夷）：深色發酵茶的普遍稱呼</li>
                <li>Congou（工夫）：品質更佳的升級版</li>
                <li>Souchong（小種）：更高等級，正山小種為代表</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">商業推力</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                深色發酵茶利潤高且更耐長途海運，荷蘭與英國公司因而大量增加訂單，價格下降後逐步走入平民生活。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">GEOPOLITICS</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">茶葉與戰爭：貿易引發的全球地緣政治變革</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">1773：波士頓傾茶事件</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                《茶稅法》引發殖民地反抗，342 箱中國茶被倒入海中；其中接近 80% 為武夷、工夫、小種等深色發酵茶，並成為美國獨立戰爭導火索之一。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">逆差與殖民茶園</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                英國為扭轉白銀外流，透過鴉片貿易與殖民地茶園尋求自給。1838 年在印度阿薩姆創製紅茶後，徹底打破對中國茶依賴；
                隨後更導向 1840 年的第一次鴉片戰爭。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">INDUSTRY</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">工業革命與英式標準：現代紅茶體系的建立</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            工業革命不僅改變了紅茶的生產，也建立了以「拼配」為核心的現代標準。1874 年揉捻機、1876 年切茶機的發明，催生「紅碎茶」；
            紅碎茶利於拼配、萃取快，適合袋泡茶，迅速成為全球主力，至今仍佔全球茶葉總出口量約 80%。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="Blending（拼配）成為價值核心">
              超過 90% 的英國市場紅茶為拼配茶（伯爵、早餐茶等）。殖民地完成採摘與初製，最後的拼配與定價權牢握在英國本土。
            </Bullet>
            <Bullet title="英式下午茶的文化加持">
              1840 年貝德福公爵夫人安娜推動下午茶風潮，紅茶成為英國社會的重要日常儀式，也加速全球擴散。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">WORLD</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">世界的紅茶：在地文化的落地生根</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="俄羅斯：茶葉之路與茶炊文化">
              1676 年起透過「茶葉之路」進口，19 世紀成為全民飲品；常加入糖、果醬、檸檬片，茶炊（Samovar）是家庭珍物。
            </Bullet>
            <Bullet title="土耳其與愛爾蘭：超級重度飲茶者">
              兩國年人均飲茶量居世界前列，紅茶深度融入日常社交，是不可或缺的生活底色。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">TODAY</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">紅茶在當代中國的新生：奶茶時代的回歸</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            在傳統品飲市場中，紅茶消費量未必居前，但它以「奶茶基底」的方式重新回到大眾生活：全發酵的溫潤醇厚，使其特別適合與牛奶與糖融合，
            成為當代流行飲品的核心原料之一。
          </p>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">PRACTICAL</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">實用紅茶指南</div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
            <table className="min-w-[680px] w-full text-left text-sm">
              <thead className="bg-stone-50 text-stone-700">
                <tr>
                  <th className="px-4 py-2 font-extrabold">類別</th>
                  <th className="px-4 py-2 font-extrabold">代表品種</th>
                </tr>
              </thead>
              <tbody className="bg-white text-stone-700">
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">中國紅茶</td>
                  <td className="px-4 py-3">武夷山正山小種、金駿眉、安徽祁門紅茶、雲南滇紅</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">國外紅茶</td>
                  <td className="px-4 py-3">
                    印度阿薩姆、大吉嶺、斯里蘭卡錫蘭紅茶、英式拼配紅茶（格雷伯爵、英式早餐茶）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">沖泡建議</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>茶水比：1:30</li>
                <li>水溫：95°C 以上沸水（充分激發香氣與滋味）</li>
                <li>器具：瓷器茶具（不吸味提醒湯色），紫砂亦可</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">健康特性</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>茶性偏溫和</li>
                <li>常被認為有驅寒、暖胃、幫助消食等作用</li>
                <li>較適合體質偏寒、不宜多飲綠茶者</li>
              </ul>
            </div>
          </div>
        </div>

        <ProcessLine>茶菁 → 室內萎凋 → 揉捻（切）→ 發酵 → 乾燥 → 紅茶</ProcessLine>
      </div>
    );
  }

  if (kind === 'black') {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-stone-50 px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-slate-700/70">DARK TEA</div>
          <div className="mt-2 text-xl font-extrabold text-stone-900">黑茶：從工藝、歷史到品鑑的完整指南</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            什麼是黑茶？它在何時出現，又從何而來？為什麼普洱茶不全然是黑茶？如何判斷一款黑茶的好壞，又該如何享受它獨特的功效？
            這裡用一套「工藝 → 歷史 → 品類 → 選購」的路線，完整梳理黑茶的核心脈絡。
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">工藝定位</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">後發酵（微生物參與）</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              黑茶的發酵發生在「殺菁之後」，並以微生物轉化為主角，這與多數茶類的「酶促氧化」不同。
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">身份標誌</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">渥堆（核心工藝）</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              黑茶的充分必要條件，是「渥堆」：在濕熱堆放中培養有益菌群，塑造醇厚風味與陳化潛力。
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">選購三步</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">看・聞・觀湯</div>
            <ol className="mt-2 text-sm text-stone-700 leading-relaxed list-decimal pl-5 space-y-1">
              <li>看乾茶：有無青／白色霉點</li>
              <li>聞氣味：是否有霉味與異味</li>
              <li>觀茶湯：好茶應「澄澈透亮」</li>
            </ol>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">PROCESS</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">1. 解構黑茶：獨一無二的「後發酵」工藝</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            六大茶類是依加工工藝與發酵程度劃分。黑茶外觀深色，但它的「發酵」不能直接用 0–100% 去理解，因為它採用的是「後發酵」：
            在殺菁之後、以微生物參與為主的轉化過程。
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
            <table className="min-w-[720px] w-full text-left text-sm">
              <thead className="bg-stone-50 text-stone-700">
                <tr>
                  <th className="px-4 py-2 font-extrabold">茶類</th>
                  <th className="px-4 py-2 font-extrabold">發酵程度描述</th>
                </tr>
              </thead>
              <tbody className="bg-white text-stone-700">
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">綠茶</td>
                  <td className="px-4 py-3">發酵程度趨近於 0，被稱為「不發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">白茶</td>
                  <td className="px-4 py-3">發酵程度極低，僅略高於綠茶，屬於「微發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">黃茶</td>
                  <td className="px-4 py-3">發酵程度較低，屬於「輕發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">青茶（烏龍茶）</td>
                  <td className="px-4 py-3">發酵程度範圍最廣，介於兩者之間，被稱為「半發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">紅茶</td>
                  <td className="px-4 py-3">發酵程度最接近 100%，被稱為「全發酵茶」。</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3 font-extrabold text-stone-900 whitespace-nowrap">黑茶</td>
                  <td className="px-4 py-3">
                    後發酵（殺菁之後）＋ 微生物參與；核心工藝為「渥堆」，出廠後在合適條件下仍可持續轉化。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="兩種「發酵」的本質差異">
              嚴格意義的發酵（Fermentation）需微生物參與；多數茶類口語的「發酵」多指酶促氧化（Enzymatic Oxidation），主要由茶葉自帶酶催化氧化反應。
            </Bullet>
            <Bullet title="渥堆＋持續發酵">
              渥堆在濕熱條件下培養有益菌群；黑茶出廠後若儲存環境適宜，轉化可延續，茶湯逐漸更順滑、甜厚。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">HISTORY</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">2. 追本溯源：黑茶的歷史演進與工藝定型</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            黑茶的「苗頭」可追溯到唐代邊疆需求與「茶馬古道」貿易：粗老茶葉在長途運輸中遭遇濕熱而自然變化，色澤由青綠轉烏黑。
            宋代後，邊民習慣此滋味，產地開始嘗試「堆積做色」與「蒸壓成塊」以利運輸。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="從自然演變到主動製作">
              製茶師傅意識到與其被動不可控，不如在產地「主動加工」到目標狀態，因而促使工藝逐步成熟與定型。
            </Bullet>
            <Bullet title="學術觀點：何時算黑茶？">
              關於起源時間有不同看法；陳椽教授主張現代意義黑茶應以安化黑茶等（低溫殺菁後色澤已呈深褐綠）為核心脈絡，時間多指向明末清初。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">MAP</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">3. 品類巡禮：主流黑茶與「金花」</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">常見黑茶種類</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>普洱茶（雲南）：熟茶是典型黑茶；生茶工藝更接近綠茶系統的蒸壓茶路線</li>
                <li>六堡茶（廣西）：檳榔香與陳香，有時可見「金花」</li>
                <li>安化黑茶（湖南）：黑磚、茯磚（金花）、千兩茶、天尖、貢尖等</li>
                <li>青磚茶（湖北）：緊壓青磚為代表，邊銷重要茶品</li>
                <li>藏茶（四川邊茶）：緊壓為主，銷往藏區</li>
              </ul>
              <div className="mt-3 text-xs text-stone-500">
                備註：普洱茶不全然等同黑茶；本站也另有「普洱茶」獨立頁面整理。
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">金花是什麼？</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">冠突散囊菌（益生菌）</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>形成：需特定溫濕度與「發花」工藝</li>
                <li>影響：分泌酶轉化物質，使口感更醇和甘甜</li>
                <li>價值：可作為茯磚等品質指標之一，但非所有黑茶都會有</li>
              </ul>
              <div className="mt-3 text-xs text-stone-500">建議心態：可遇不可求，不必強求。</div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="普洱茶是黑茶嗎？">
              需分生茶與熟茶：熟普包含渥堆，因此屬黑茶；生普不經渥堆、無微生物主導轉化，許多專業觀點將其視為蒸壓綠茶路線，但具陳放轉化特性。
            </Bullet>
            <Bullet title="熟普工藝的出現">
              熟普工藝約在 1973 年後形成，目的在模仿陳年生普的口感，借鑑了黑茶工藝而創造。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">BUYING GUIDE</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">4. 消費者指南：如何挑選優質與安全的黑茶</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">第一步：看外觀</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                檢查是否有青色或白色霉點（深色乾茶上通常更顯眼）。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">第二步：聞氣味</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                儲存不當幾乎一定有霉味或異味，是最直接的警訊。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">第三步：觀茶湯</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                好黑茶茶湯必須「澄澈透亮」。若出現雜質、渾濁物或灰塵，表示儲存條件不佳（注意與均勻附著的茶毫區別）。
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="健康功效與潛在風險">
              黑茶的健康價值與有益菌相關；但若環境過於潮濕或有異味，可能滋生有害菌（如黃曲霉菌）。因此選購與儲存必須把關。
            </Bullet>
            <Bullet title="辨別假「金花」的提醒">
              市面可能以黃曲霉菌冒充金花：放大鏡下黃曲霉多呈散狀直立、顏色偏綠，並伴隨霉味與茶湯渾濁；真正金花多呈金黃色、圓球狀聚集。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">CLOSING</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">結論：享受平民又健康的茶飲</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            黑茶的魅力在於醇厚口感、越陳越香與後發酵的健康價值。回到品飲本質：不盲目追高價、不迷信故事、不沉迷金融屬性，
            選擇儲存得當、湯色澄亮、氣味乾淨的好茶，黑茶就能成為既親民又耐喝的日常茶飲。
          </p>
        </div>

        <ProcessLine>茶菁 → 殺菁 → 揉捻 → 渥堆（微生物後發酵）→ 乾燥 →（可選）緊壓成型 → 陳化轉化</ProcessLine>
      </div>
    );
  }

  if (kind === 'oolong') {
    return (
      <div className="space-y-6">
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">發酵光譜</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">約 8% → 75%</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              跨度極大，因此品項最繁多，也最容易被誤認為紅茶或其他深色茶。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">工藝核心</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">萎凋 × 做青 × 焙火</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              做青（搖青／走水與氧化）讓香氣層次增幅最大；在潮濕氣候下加入焙火能更穩定乾燥並激發芳香物質。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">文化影響</div>
            <div className="mt-2 text-sm font-extrabold text-stone-900">消脂解膩的「健康熱」</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              青茶常被形容有助消脂解膩，並促成 1970 年代日本的烏龍茶熱潮，成為社會性消費現象。
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">ORIGIN</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">追本溯源：青茶的歷史謎團與誕生之路</div>
          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            1556 年葡萄牙神父在廣東記錄到「顏色微紅」的茶湯，但公認的紅茶要到明末清初才在武夷山誕生。
            這個悖論引發學界推斷：那杯泛紅茶湯，可能是發酵程度偏高或經陳年氧化的烏龍茶，進而支持「半發酵狀態的茶」在紅茶誕生之前就可能已出現的觀點。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="兩種看法為何都可能成立？">
              以「結果」看，半發酵狀態的茶可能因偶然條件早早出現；但以「工藝」看，成熟的青茶製程（尤其做青）確實更複雜，可能晚於紅茶才定型。
            </Bullet>
            <Bullet title="武夷山的偶然與在地智慧">
              推行散茶後武夷山被迫引進松蘿炒青法；大量鮮葉等待炒製時在濕潤多霧氣候中自然氧化，之後高溫炒製中止並鎖定發酵；再加上焙火工序，形成武夷岩茶的雛形。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">GLOBALIZATION</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">全球化之路：從「武夷茶」到「烏龍茶」的名稱演變</div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <Bullet title="Boudi（武夷）→ Black Tea 的混淆">
              18 世紀武夷茶與松蘿茶成為貿易主力；深色武夷茶與後來的紅茶在西方常被一併歸為 Black Tea，埋下長期混淆根源。
            </Bullet>
            <Bullet title="Formosa Oolong 的崛起">
              武夷茶聲譽下滑期，台灣烏龍以「Formosa Oolong Tea」外銷，填補高品質半發酵茶市場空缺，特別在美國大獲成功。
            </Bullet>
            <Bullet title="名詞回流與定義確立">
              Oolong 從商品名逐步成為國際通用稱謂，用以區分綠茶與紅茶；在多數地區，烏龍茶幾乎等同青茶，台灣則常以「青茶」作總稱、烏龍作其中一支系。
            </Bullet>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">MAP</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">青茶品類地圖：三大產區的代表名品</div>

          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">福建烏龍</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">閩北岩茶 × 閩南安溪</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>閩北：武夷岩茶（岩韻）— 大紅袍、肉桂、水仙、奇種、名叢</li>
                <li>四大名叢：大紅袍、鐵羅漢、白雞冠、水金龜（注意：用字為草叢的「叢」）</li>
                <li>閩南：安溪系（花香鮮爽）— 鐵觀音、黃旦（黃金桂）、水仙、永春佛手</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">廣東烏龍</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">鳳凰單叢（高揚香型）</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                以自然香型著稱，記載多達 79 種。1996 年官方確定十大代表香型：
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {[
                  '黃枝香',
                  '芝蘭香',
                  '蜜蘭香',
                  '桂花香',
                  '玉蘭香',
                  '薑花香',
                  '夜來香',
                  '茉莉香',
                  '杏仁香',
                  '肉桂香',
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-stone-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">台灣烏龍</div>
              <div className="mt-2 text-sm font-extrabold text-stone-900">風土延伸的清香與熟韻</div>
              <ul className="mt-2 text-sm text-stone-700 leading-relaxed list-disc pl-5 space-y-1">
                <li>文山包種</li>
                <li>高山烏龍</li>
                <li>凍頂烏龍</li>
                <li>白毫烏龍（東方美人）</li>
                <li>鐵觀音</li>
              </ul>
              <div className="mt-3 text-xs text-stone-500">
                教學記憶點（韻）：台灣蜜韻、閩北岩韻、閩南音韻、廣東山韻。
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-6">
          <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500">CULTURE</div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">青茶的獨特功效與文化影響</div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Bullet title="消脂解膩的日常定位">
              青茶常被視為佐餐與日常保健的理想飲品，因其被形容有助消脂解膩與身材管理，因而深受注重健康人士喜愛。
            </Bullet>
            <Bullet title="日本烏龍茶熱潮（1970s）">
              上世紀七十年代青茶在日本形成全國性大流行，作為「健康飲品」迅速風靡市場，成為一種社會性的文化現象。
            </Bullet>
          </div>
        </div>

        <ProcessLine>茶菁 → 日光萎凋／室內萎凋 → 做青（搖青、走水與氧化）→ 殺菁 → 揉捻 → 乾燥（可選：焙火）→ 青茶</ProcessLine>
      </div>
    );
  }

  return null;
}
