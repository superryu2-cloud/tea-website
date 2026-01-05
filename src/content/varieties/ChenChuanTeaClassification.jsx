import React, { useMemo, useRef } from 'react';
import { BookOpen, Calendar, Landmark, Layers, Sparkles, User } from 'lucide-react';

function Section({ id, title, scrollMarginTop, children }) {
  return (
    <section id={id} className="scroll-mt-28" style={scrollMarginTop ? { scrollMarginTop } : undefined}>
      <div className="museum-frame museum-paper rounded-3xl overflow-hidden">
        <div className="px-6 py-5 md:px-10 md:py-7 border-b border-stone-200 bg-gradient-to-r from-stone-50 via-white to-stone-50">
          <div className="flex items-start gap-4">
            <span className="mt-1 inline-block w-1.5 h-10 rounded-full bg-gradient-to-b from-amber-400 to-amber-700" aria-hidden="true" />
            <div className="min-w-0">
              <div className="text-xs font-bold tracking-widest text-stone-500">EXHIBIT · CHAPTER</div>
              <h3
                className="mt-2 text-xl md:text-2xl font-bold text-stone-900 leading-tight"
              >
                {title}
              </h3>
            </div>
          </div>
        </div>

        <div className="px-6 py-7 md:px-10 md:py-10">
          <div className="museum-card border border-stone-200 notebook-paper p-6 md:p-8">
            <div className="space-y-6">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclosure({ children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5">
      <div className="space-y-4 text-[15px] leading-8 text-stone-900">{children}</div>
    </div>
  );
}

function KpiCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 md:p-5">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-stone-200 bg-white">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="font-semibold text-stone-900">{title}</div>
          <div className="mt-1 text-sm leading-6 text-stone-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Chip({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-sm text-stone-700 ${className}`}>
      {children}
    </span>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 text-[15px] leading-7 text-stone-800">
      {items.map((line) => (
        <li key={line} className="flex gap-2">
          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-stone-400" aria-hidden="true" />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

function SixTeaExplorer({ topOffsetPx }) {
  void topOffsetPx;
  const items = useMemo(
    () => [
      {
        key: 'overview',
        label: '綱目總覽',
        swatch: 'linear-gradient(90deg, rgba(120,113,108,0.40), rgba(120,113,108,0.10))',
        kpis: ['先抓分類骨架', '再看六類差異', '再補原文脈絡'],
        summary: [
          '這一區是「六大茶類分類（綱目）」的導覽頁。',
          '先看每一類的重點，再對照後面的原文脈絡。',
          '綱目重點是「制法差異」對應到品質差異，方便教學與實務對照。',
        ],
        original: (
          <>
            <p>
              提醒：這裡以「制法與品質特點」為主線來整理六大茶類。你可以把它當成教學用的快速切換展板。
            </p>
          </>
        ),
      },
      {
        key: 'green',
        label: '綠茶',
        swatch: 'linear-gradient(90deg, rgba(34,197,94,0.40), rgba(34,197,94,0.10))',
        kpis: ['不發酵 / 少變化', '關鍵：殺青', '清湯綠葉'],
        summary: ['以「制止氧化」為核心', '分類常再細分外形與殺青法', '可衍生：窨花、蒸壓等再加工'],
        original: (
          <>
            <p>
              綱目：綠茶品質特點是綠色清湯，要求黃烷醇類全部不氧化或少變化，就採取高溫破壞?促作用，制止催化黃烷醇類的氧化作用。雖然高溫也有催化黃烷醇類氧化作用的可能，
              但時間很短，變化不顯著，與?的催化作用相差很大。
            </p>
            <p>
              綠茶制法，一般是經過殺青、揉撚、乾燥三個工序。殺青工序是這個茶類制法的主要特點。根據通用的殺青方法不同，主要分炒青殺青和蒸熱殺青二個目。
            </p>
            <p>
              綠茶品質，其次突出的特點，就是形狀不同。依其形狀的類型，分圓條形、圓球形、扁條形、片形、針形、尖形和不定形七個種。片形茶又可分整碎，整片如瓜片；碎片如秀眉。
              不定形如象拳狀的貢熙和折疊厚片的熙春。
            </p>
            <p>
              半成品經過窨花改變色香味，歸納為窨花綠茶“目”，依窨花種類不同，再分茉莉花茶、玉蘭花茶、珠蘭花茶、雜色花茶四種。半成品再經過蒸和壓為各種外形不同的團塊茶，
              歸納為蒸壓綠茶“目”。依其形狀不同，分為方形、圓形、團塊三種。方形又有長方四方之分。團塊茶很複雜，有各式各樣的不同，最常見的，如象圓圈形而底內凹陷的沱茶。
            </p>
          </>
        ),
      },
      {
        key: 'yellow',
        label: '黃茶',
        swatch: 'linear-gradient(90deg, rgba(234,179,8,0.35), rgba(234,179,8,0.10))',
        kpis: ['輕發酵 / 悶黃', '黃葉黃湯', '介於綠與紅之間'],
        summary: ['關鍵工序：悶黃', '依悶黃先後與時間長短分目', '部分產地/工藝差異可獨立成目'],
        original: (
          <>
            <p>
              綱目：黃茶品質特點是黃色黃湯，要求綠色消失，黃色顯出。但是不像綠茶破壞?促作用徹底。這個茶類制法的特點，主要是悶黃過程。根據悶黃先後和時間長短不同，
              分為殺青後濕坯堆積悶黃、揉撚後濕坯堆積悶黃和毛火後幹坯悶黃三個目；幹坯又有堆積和紙包之分。
            </p>
            <p>
              福建崇安茶場的黃茶，制法和品質都與一般黃茶不同，湖南溈山白毛尖炒熱殺青改為蒸熱殺青，品質也起變化，與原來不同，應各獨立一目，為便於呈現，仍以殺青後或揉撚後悶黃不同歸目。
            </p>
          </>
        ),
      },
      {
        key: 'dark',
        label: '黑茶',
        swatch: 'linear-gradient(90deg, rgba(120,113,108,0.45), rgba(120,113,108,0.12))',
        kpis: ['後發酵', '關鍵：堆積做色', '褐黃/褐紅湯'],
        summary: ['以「堆積變色」為分類核心', '濕坯/幹坯/成茶堆積可分不同目', '蒸壓成形後仍可能續變加深色味'],
        original: (
          <>
            <p>
              綱目：黑茶品質特點是葉色油黑或深褐綠色，湯色褐黃或褐紅，要求黃烷醇類遲緩氧化。但黃烷醇類的氧化主要不是靠?促作用。依茶類不同，催化的因素也不同。
              一般制法的特點是堆積變色。分濕坯堆積做色、幹坯漚堆做色和成茶堆積變色三個目。
            </p>
            <p>
              炒青和揉撚後渥堆，為濕坯堆積做色，烘乾的毛茶篩分後，半成品蒸壓為簍包茶，有湘尖一號、二號（舊稱天尖、貢尖）；蒸後為定型茶，有黑磚茶、花磚茶（舊為花卷茶）。
              半成品炒壓後為定型茶，有茯磚茶。
            </p>
            <p>
              半幹毛茶漚堆為幹坯堆積做色，通過自然乾燥，如湖北的老青茶。半成品蒸壓成各種形狀，如雲南大七子餅茶、心狀緊茶（現改壓為四方形磚茶）；半成品蒸壓踩成大簍包，如六堡茶。
            </p>
            <p>
              已做色的半成品，蒸壓成各種形狀，經長時間的乾燥過程中再起變化，加深色味；定型的，如象元寶形的康磚茶、四川茯磚茶，炒壓成簍包茶的，如四川方包茶。
            </p>
          </>
        ),
      },
      {
        key: 'white',
        label: '白茶',
        swatch: 'linear-gradient(90deg, rgba(226,232,240,0.75), rgba(226,232,240,0.25))',
        kpis: ['輕微自然氧化', '關鍵：萎凋', '茸毛多 / 湯色淺'],
        summary: ['重點在「不主動促進或制止」，讓其自然變化', '工序相對精簡：萎凋、乾燥', '依萎凋方式與原料（芽/葉）可細分'],
        original: (
          <>
            <p>
              綱目：白茶品質特點是白色茸毛多，湯色淺淡或初泡無色。要求黃烷醇類輕度地延緩地自然氧化，既不破壞?促作用，制止氧化，也不促進氧化，聽其自然變化。
              一般制法是經過萎凋、乾燥二個工序。
            </p>
            <p>
              萎凋有用日光萎調，也有用陰處萎凋。乾燥可以曬乾或風乾，也可以用烘乾。這個茶類制法的特點是萎凋工序，分全萎凋和半萎凋二個目。依鮮葉不同，分芽茶和葉茶二種。
            </p>
          </>
        ),
      },
      {
        key: 'oolong',
        label: '青茶',
        swatch: 'linear-gradient(90deg, rgba(16,185,129,0.35), rgba(16,185,129,0.10))',
        kpis: ['部分氧化', '關鍵：做青', '綠葉紅邊'],
        summary: ['做青在揉捻前完成部分變化（最有「動作感」的茶類）', '依做青方式可細分（跳動/搖動/萎凋/窨花）', '不同產區工藝路線形成不同品系'],
        original: (
          <>
            <p>
              綱目：青茶品質特點是葉色青綠或邊紅中青，湯色橙黃。要求黃烷醇類輕度或部分的局部逐漸氧化。先促進?的催化作用，然後制止?的催化作用。正規制法是經過萎雕、做青、炒青和揉撚、乾燥等工序。
              這個茶類制法的特點是做青，在揉撚前完成一部分的理化變化。
            </p>
            <p>
              做青擦破葉邊緣細胞，促進?的催化作用，葉邊的黃烷醇類氧化，要求製成中青邊紅的茶類。葉的運動不同，品質也不同。分跳動做青（手工是篩搖跳動，建甌小橋公社改用二層抖篩機振動跳。）搖動做青、萎凋做青和窨花四個目。
              跳動做青分岩茶、洲茶和山茶三個種；搖動做青分福建青茶、臺灣青茶和廣東青茶三種，萎凋做青分散茶和束茶二種；窨花青茶分散茶和團茶二種。
            </p>
          </>
        ),
      },
      {
        key: 'red',
        label: '紅茶',
        swatch: 'linear-gradient(90deg, rgba(239,68,68,0.35), rgba(239,68,68,0.10))',
        kpis: ['較深刻氧化', '關鍵：渥紅', '黃紅湯'],
        summary: ['工序完整：萎凋→揉撚→渥紅→乾燥', '依外形/制法可分多目（小種、工夫、切細…）', '中外命名對照常引起混淆（例：Black Tea）'],
        original: (
          <>
            <p>
              綱目：紅茶是紅非紅，品質特點說是“紅色紅湯”，其實是黃紅色。要求黃烷醇類較深刻的氧化。先以?促作用為主，後以自動氧化為主。經過萎凋、揉撚、渥紅（舊稱“發酵”）、乾燥四個工序。
              制法的特點是經過室溫自然浸紅或熱化作用（其實在萎雕、揉撚工序已起變化了。）。依制法、成茶外形和品質不同而分小種紅茶、工夫紅茶、切細紅茶、窨花紅茶和蒸壓紅茶五個目；如包括國外紅茶則加分級紅茶一個目。
            </p>
            <p>
              小種紅茶經過萎凋、揉撚、渥紅、鍋炒（俗稱過紅鍋）或不炒、毛烘、揀剔、足烘等工序。分為濕坯薰蒸和毛茶薰蒸。濕坯薰蒸是毛烘時燃燒松木煙烘。福建崇安桐木關範圍內的產品有自然的松木香味，叫正山小種。
              毛茶薰蒸是粗大的工夫紅茶用油松木煙烘，叫工夫小種。
            </p>
            <p>
              工夫紅茶經過萎凋、揉撚、渥紅、乾燥四個工序。毛茶加工很精細，粗大做小，不分花色，分葉茶和芽茶。葉茶是整葉工夫，芽茶的細嫩工夫。
            </p>
            <p>
              分級紅茶經過工序與工夫紅茶相同。毛茶經過篩分分級為四個花色；分條茶和細茶（屬副茶）二種。條茶是整葉的成茶，如白毫等；細茶是一般揉撚方法生成破葉茶，成茶外形破碎成細粒狀，如碎白毫等。
            </p>
            <p>
              切細紅茶或稱顆粒紅茶，是在揉撚過程中、邊揉邊切，以生產破葉茶為主，分半葉茶、切細茶、碎片三種。半葉茶是葉不完整，系不完成切細的半葉茶或少許未切細的整葉，有橙黃白毫、白毫。
              名稱雖與分級紅茶相同，但生產量少，完全無破損的葉子也不多。芽頭或破葉茶為顆粒狀的破碎的細粒茶，卷條經過切細的，有碎白毫、碎橙黃白毫，名稱雖與分級紅茶相同，但生產量比重很少，成顆粒狀的多。碎片狀茶有花香、碎橙黃白毫花香、碎末等。
            </p>
            <p>
              窨花紅茶有內銷玫瑰紅茶、香紅茶（一九五八年福建新產品）。蒸壓紅茶有花香壓成的不分灑面灑底的小京磚茶。有以花香為灑面，以碎雜片為包心的米磚茶，或葉紅磚茶。
            </p>
            <p>附：包括國外茶葉分類表</p>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <div className="text-lg font-extrabold text-stone-900">閱讀方式</div>
        <div className="mt-2 grid gap-2 text-sm text-stone-900 md:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 font-medium">先看手法：制法差異 → 品質差異</div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 font-medium">再看色澤：幹色／湯色／葉底</div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 font-medium">最後補充：創制先後與演變</div>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.key} className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <span className="inline-flex h-3 w-3 rounded-full shrink-0" style={{ backgroundImage: item.swatch }} />
                <div className="text-lg font-extrabold text-stone-900 truncate">{item.label}</div>
              </div>
              {/* removed */}
            </div>

            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 md:p-5">
                <div className="text-sm font-medium text-stone-900 leading-relaxed">{item.summary.join(' ／ ')}</div>
              </div>
              <Disclosure>{item.original}</Disclosure>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ChenChuanTeaClassification({ topOffsetPx, activeHref }) {
  const contentRef = useRef(null);
  const resolvedTopOffsetPx = Number.isFinite(topOffsetPx) ? topOffsetPx : undefined;
  const activeSectionIdRaw = typeof activeHref === 'string' && activeHref.startsWith('#') ? activeHref.slice(1) : null;
  const allowedSectionIds = useMemo(() => new Set(['cc-intro', 'cc-1', 'cc-2', 'cc-3', 'cc-4', 'cc-6cats']), []);
  const activeSectionId = activeSectionIdRaw && allowedSectionIds.has(activeSectionIdRaw) ? activeSectionIdRaw : null;
  const showSection = (id) => !activeSectionId || activeSectionId === id;

  return (
    <>
      <article ref={contentRef} className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200">
        <header className="px-6 py-6 md:px-10 md:py-9 border-b border-stone-200 bg-gradient-to-br from-stone-100/70 via-white to-stone-50">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-white text-green-800 p-3 rounded-2xl border border-green-200">
                <BookOpen size={24} />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight">陳椽《茶業通史》：六大茶類分類的理論與實際</h2>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                    <User size={16} className="opacity-70" />
                    作者：陳椽
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                    <Calendar size={16} className="opacity-70" />
                    日期：07-08
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                    <span className="w-4 text-center opacity-70">◎</span>
                    來源：茶業復興
                  </span>
                </div>
                <p className="mt-5 text-stone-600 leading-relaxed">把長文拆成可互動的展板：先看重點，再展開原文，閱讀不疲勞。</p>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8 md:px-10 md:py-10">
          <div className="space-y-12">
            {showSection('cc-intro') ? (
            <Section id="cc-intro" title="前言與六大茶類形成" scrollMarginTop={resolvedTopOffsetPx}>
            <div className="grid gap-3 md:grid-cols-3">
              <KpiCard icon={<Sparkles className="h-5 w-5 text-stone-700" />} title="一句話" desc="六大茶類的邏輯：用制法與品質差異，建立可用的分類。" />
              <KpiCard icon={<Layers className="h-5 w-5 text-stone-700" />} title="時間軸" desc="從蒸青團茶到白茶/青茶，工藝演變帶出茶類齊全。" />
              <KpiCard icon={<Landmark className="h-5 w-5 text-stone-700" />} title="對外對照" desc="回應 Black Tea / Oolong 等命名混淆，建立自有體系。" />
            </div>

            <Disclosure>
              <p>
                我國是茶樹原產地，最早發現茶的鮮葉有治病的功效，距今已有四、五千年了。我國利用茶葉也最早，據歷史資料，商朝（約西元前16-11世紀）鮮葉曬乾作貢品，
                西周（約西元前11世紀-西元前771年）茶作祭品，春秋（西元前770-476年）茶作飯菜，戰國（西元前475-221年）茶作藥物，西漢（西元前206年-西元8年）茶為主要商品之一，
                西晉（西元265-316年）茶的鮮葉作羹飲，南北朝（西元420-589年）鮮葉加工作餅茶，唐朝（西元618-907年）發明蒸青團茶，宋朝（西元960-1279年）發明蒸青散茶，
                明朝（西元1368-1644年）創制炒青綠茶、黃茶、黑茶、紅茶，清朝（西元1644-1911年）創制白茶、青茶，至此，六大茶類齊全。此後迄今，所創制新的花色品類，都包括在六大茶類之內，
                無出其外。現時茶葉名類數以百計。俗諺“茶葉學到老，茶名學不了”。
              </p>
              <p>
                國外產茶只有紅、綠兩類，無其它茶類，花式名稱，寥寥無幾，無分類可言。創立茶葉分類學說，我國當仁不讓。茶葉分類是一門專門學科，精確地系統地分門別類，
                明確表明茶類的發展過程和互相聯繫，表明品質和制法的系統性，可以看出從量變到質變的過程。國外，以“Black Tea”代表紅茶類，是紅黑不分的錯誤。以茶樹品種烏龍（Oalong）譯音代表青茶類，
                試問鐵觀音品種著名，抑是烏龍品種著名？！這是好壞不分。以綠茶“Green Tea”譯意代表綠茶類，又是另一種分類法。這種分類法既不統一，又看不出品質的差異，不切合實際應用。
                既然六大茶類是我國發明創造的，茶葉分類學說亦應由我國建立。外國人茶名分不清，也不可能分清茶類。外人越俎代庖，有些人熟視無睹，咄咄怪事！
              </p>
            </Disclosure>
          </Section>
          ) : null}

          {showSection('cc-1') ? (
          <Section id="cc-1" title="1、茶葉命名" scrollMarginTop={resolvedTopOffsetPx}>
            <div className="grid gap-3 md:grid-cols-3">
              <KpiCard icon={<Layers className="h-5 w-5 text-stone-700" />} title="命名是入口" desc="名稱是分類與應用的起點：同名不同類、不同名同物都會造成混亂。" />
              <KpiCard icon={<Sparkles className="h-5 w-5 text-stone-700" />} title="命名依據" desc="外形、色香味、產地、季節、工藝、品種、銷路、創制人。" />
              <KpiCard icon={<Landmark className="h-5 w-5 text-stone-700" />} title="整理的目的" desc="把俗名/混名拆開，才能做出可查找、可教學的分類。" />
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/65 p-4 md:p-5">
              <div className="flex flex-wrap gap-2">
                <Chip>外形（瓜片、毛峰…）</Chip>
                <Chip>色湯香味（黃湯、十裡香…）</Chip>
                <Chip>產地（西湖龍井…）</Chip>
                <Chip>季節（明前、雨前…）</Chip>
                <Chip>工藝（炒青、工夫…）</Chip>
                <Chip>品種（鐵觀音、水仙…）</Chip>
              </div>
              <div className="mt-3 text-sm leading-6 text-stone-600">你可以把茶名想成「多維度標籤」的組合，而不是單一分類。</div>
            </div>

            <Disclosure>
              <p>
                茶葉命名是茶葉分類的重要程式之一。一種茶葉必須有一個名稱以為標誌。不論作為分類研究或實際應用，茶葉皆非有專門名稱不可。命名與分類可以聯繫一起，如工夫紅茶，
                前者是命名，後者是分類，又如白毫銀針，前者是分類，後者是命名。茶葉稱名通常都帶有描寫性的，名稱文雅也是其它商品所不及的。
              </p>
              <p>茶葉命名的依據，除以形狀、色香味和茶樹品種等不同外，還有以生產地區、採摘時期和技術措施以及銷路等等不同，而命名也不同。</p>
              <p>
                茶名以形容其形狀的為最多，如瓜片、毛峰等，都是形容外形。茶名形容其色香味的為數也不少，如黃芽形容其幹色；如黃湯乃指其湯色，如雲南十裡香乃指其香氣，
                如安溪桃仁乃指其滋味。這種茶名古今都有。
              </p>
              <p>
                特種名茶則冠以地名，古今這樣命名都很普遍。唐朝的壽州黃芽、宋代的顧諸紫筍等，這些今已成為歷史上的名茶。又如西湖龍井、洞庭碧螺和武夷岩茶等，今仍襲用。
                近代名茶冠以地名也很多，如南京雨花、安化松針、六安瓜片、信陽毛尖，等等。
              </p>
              <p>
                依採摘時期不同而命名，如古時的探春、次春和現時的明前、雨前、春蕊、秋香和冬片等，或以採制季節而分春茶、夏茶和秋茶等。依制茶技術不同而命名，如炒青、工夫紅茶等。
                依茶樹品種不同而命名的，過去福建臺灣兩省最多，如梅占、蘭奇、大紅袍、鐵羅漢、毛蟹、桃仁，等等。現存有的著名品種茶如鐵觀音、烏龍和水仙等。依銷路不同而命名的，
                如內銷茶、外銷茶等。還有依創制人而命名的，如大方、熙春。
              </p>
              <p>
                茶葉種類繁多，名稱混亂。同一茶葉有十多個名目。如各地的內銷名茶，外形內質大同小異，名稱不同古今都有，毛峰、雀舌、蓮芯、麥顆數種名稱。茶類不同品質相差很大而茶名相同的，
                如青茶有蓮芯，綠茶也有蓮芯；綠茶有銀針，白茶也有銀針；紅茶有小種，青茶也有小種；綠茶有貢尖，黑茶也有貢尖。這些混亂的茶名在研究分類時，都要加以分別審定，改換俗名，重新命名。
              </p>
            </Disclosure>
          </Section>
          ) : null}

          {showSection('cc-2') ? (
          <Section id="cc-2" title="2、茶葉分類依據" scrollMarginTop={resolvedTopOffsetPx}>
            <div className="grid gap-3 md:grid-cols-3">
              <KpiCard icon={<Layers className="h-5 w-5 text-stone-700" />} title="依據 1：制法" desc="茶類差異首先來自工藝路線（殺青、悶黃、堆積、做青、渥紅…）。" />
              <KpiCard icon={<Sparkles className="h-5 w-5 text-stone-700" />} title="依據 2：品質" desc="幹色、湯色、葉底與外形，是教學最直觀的辨識工具。" />
              <KpiCard icon={<Landmark className="h-5 w-5 text-stone-700" />} title="依據 3：演變" desc="量變→質變 + 發展先後，用來解釋茶類之間的親疏。" />
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/65 p-4 md:p-5">
              <div className="font-semibold text-stone-800">常見誤區（很重要）</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Chip className="border-amber-200 bg-amber-50/70 text-amber-900">用 “Black Tea” 代表紅茶</Chip>
                <Chip className="border-amber-200 bg-amber-50/70 text-amber-900">用品種名 “烏龍” 當茶類名</Chip>
                <Chip className="border-amber-200 bg-amber-50/70 text-amber-900">只用「氧化/不氧化」切兩類</Chip>
              </div>
              <div className="mt-3 text-sm leading-6 text-stone-600">陳椽主張：分類要能「對應到工藝差異」，並能服務教學與實務使用。</div>
            </div>

            <Disclosure>
              <p>
                茶葉是一種食用商品，突出的區別是品質的差異，說到茶葉就提起品質的好壞。品質差異主要是制法不同。科學分類方法必須具備兩種條件：一方面必須表明品質的系統性，
                另一方面也要表明制法的系統性。同時還要抓住主要的內含物變化的系統性。茶類發展的先後，應作為茶葉分類排列的次序。就是傳統而通俗的分類方法的基礎上加以系統化，便於應用。
              </p>
              <p>
                茶葉分類，應以制茶的方法為基礎，茶葉種類的發展是根據制法的演變。這個茶類演變到那個茶類，制法有很大的改革。這要經過相當長的歷史時期，茶葉品質也不斷變化，
                因而產生許多品質不同，但是相近似的茶類。由量變到質變，到了一定時期，就成為一種新的茶類。每一種茶類都有其共同的制法特點。如紅茶都有一個共同促進?的活化工序，
                使黃烷醇類（兒茶多酚類）氧化較完全的渥紅過程，綠茶類都有其共同破壞?的活化，制止黃烷醇類氧化的殺青過程，黑茶類都有共同的堆積做色過程。兩種茶葉品質很相似，表明其制法也相近似，
                較有密切的關係。反之，兩種茶葉品質區別較大，則其制法也不相似，關係就較為疏遠。如工夫紅茶和小種紅茶的品質，區別不大，制法相似，而工夫紅茶和切細紅茶區別較大，
                切細紅茶揉撚要邊揉邊切，撚揉機大不相同，制法與工夫紅茶有很大不同。茶葉類型不同，主要是從制法中產生的，茶葉分類應首選制法為依據，才有完整地合理的系統。
              </p>
              <p>
                制茶變化是以熱為主導作用，通過熱的作用，引起內含物很複雜的化學變化；通過熱的作用，制茶品質才固定下來，形成各種特殊的色香味。?的催化作用是次要的也以熱為主導促進或制止?的催化作用。
                如紅茶、青茶、白茶開始是熱促進?的催化，最後仍然是熱制止催化。鮮葉從樹上采下來到加工前，要經過一段時間的堆放。?不是處於靜止動態，依氣溫的高低，或多或少起了催化作用，任何制茶都不例外；
                綠茶、黃茶、黑茶的殺青，破壞?的活化，制止催化作用，但是很多綠茶、黃茶在鮮葉堆放或攤放都有?的催化作用。殺青不易殺透殺勻，總有或多或少的殘餘?起催化作用，尤其是黑茶品質的形成與微生物分泌?的催化作用有很密切關係。
                如以?性氧化和非?性氧化來區分為兩大類，那就分不清了，也不確切，與實際有出入。
              </p>
              <p>
                茶葉分類，其次要結合茶葉品質的系統性。如綠茶的色澤都屬於綠色範圍，只是色度深淺、明亮枯暗不同。如果色澤變黃，則是屬於不同茶類，貯藏或制法不好的除外。如君山銀針色澤泛黃，就屬於黃茶類，
                黃茶制法是經過悶黃過程，與綠茶不同，過去錯看為綠茶類，其實屬黃茶類。如包種或蓮芯的品質雖靠近綠茶，但色澤似綠非綠而類青色，容易錯看為綠茶類，其實是經過萎凋過程而後炒青的，制法與綠茶稍有差別，是屬於青茶類。
                青茶類的色澤是綠泛黃的青色，從淺到深，直到鐵觀音的色澤，就靠近紅茶類的色澤。由色度的量變到質變，色澤越出青色範圍，就變質為不同的紅茶，制法也與青茶類大不相同。茶葉分類要以可看得到的色澤變化的系統性為依據。
                色澤的區別，包括幹看的葉色、濕看的湯色和葉底。色澤不同，內質也不同，辨別色澤，就略知內質的不同。綠、黃、黑、白、青、紅的分類，不同色澤差異很大，而且制法和品質有一個系統。
              </p>
              <p>
                品質的另一個特點是外形差異很大，特別是我國綠茶類，形狀是突出的區別。如分珠茶、眉茶、片茶、尖茶，等等。外形不同，造形的技術不同，內質也不同。外形也為分類依據之一。
              </p>
              <p>
                茶類的發展歷史先後，也可作為茶葉分類依據的參考。最先綠茶，其次黃茶和黑茶，再次是白茶和紅茶，最後青茶。依制法與品質的系統性和內質主要變化，結合茶類發展，分為綠茶、黃茶、黑茶、白茶、青茶和紅茶六大茶類，也符合傳統而通俗的分類方法。
              </p>
              <p>
                茗叟（莊晚芳先生的筆名——作者注）在“讀了三篇文章之後”說：“《制茶學》中取消了烏龍茶類代之青茶類，這是為什麼？青茶與烏龍茶究竟有何不同之處？烏龍茶類在世界上是公認的一種有名茶類，貿易上至今仍留持著，而作者為何要取消其名，
                用意何在，令人不解”。我們的用意很明顯而簡單：
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2">
                <p>一、茶葉分類科學性很強，理論說得很清楚，無須重複。</p>
                <p>
                  二、烏龍是品種的名稱，如以品種命名來分類，就無理論根據。中國茶樹品種數以百計，就是品種的分類也不根據品種名稱。“烏龍”是青茶類的一種，不能稱類，我國福建、臺灣、廣東三省的青茶產區的勞動人民都叫青茶，茗叟一九四O年做偽福建茶葉管理局局長，也是這樣講這樣寫的。
                  福建青茶分閩北青茶、閩南青茶，閩北青茶包括武夷岩茶一、二十種如單叢、名叢、大紅袍、鐵羅漢等等；閩南青茶包括安溪的鐵觀音、烏龍、奇蘭、毛蟹、梅占、香櫞、桃仁，等等。臺灣青茶從福建傳過去，有些茶名與福建相同；廣東青茶包括鳳凰水仙、浪菜、單樅等等。請翻開當時偽福建茶葉管理局局長寫的文獻就很清楚。
                </p>
                <p>
                  三、茶葉分類，應從產區的制法和品質特點為依據，不能根據銷區未經研究隨聲應口來分類。除我國外，世界上多數國家都叫紅茶為Black Tea，這是不符合客觀實際，我們是不能同意外國月亮比中國好的觀點。以上是時間關係，簡單回話。
                </p>
              </div>
              <p>
                茶業是一門新學科、是建國以後新創立起來，世界上所未有的。建立茶業新學科是中華人民共和國光榮而艱巨的任務。要有意氣風發的革命精神，對不符合科學理論，不切合客觀實際的要解放思想，開動機器，實事求是，打破常規，要以實踐為檢驗真理的唯一標準來衡量一切工作。
                如果拘於“至今仍留持著”的不合理的常規或習慣就不能向“四化”進軍，茶業新學科體系就建立不起來。
              </p>
            </Disclosure>
          </Section>
          ) : null}

          {showSection('cc-3') ? (
          <Section id="cc-3" title="3、再加工茶葉分類依據" scrollMarginTop={resolvedTopOffsetPx}>
            <div className="grid gap-3 md:grid-cols-3">
              <KpiCard icon={<Layers className="h-5 w-5 text-stone-700" />} title="定位" desc="再加工茶是「目」，不是「綱」：不應推翻原茶類體系。" />
              <KpiCard icon={<Sparkles className="h-5 w-5 text-stone-700" />} title="判斷規則" desc="先看毛茶屬性：以鮮葉初製決定品質主體。" />
              <KpiCard icon={<Landmark className="h-5 w-5 text-stone-700" />} title="例外情況" desc="若再制讓內質大改變，才可能改屬到另一茶類。" />
            </div>

            <Disclosure>
              <p>
                茶葉分類以制法與品質的系統性為“綱”。品質的不同，取決於制法不同，各種茶類製成毛茶，品質大致已穩定。在毛茶加工過程中，品質變化不大。再加工茶類如各類花茶的品質雖稍有變異，但品質基本上未越出該茶類的系統性。再加工茶類應該是“目”，而不是“綱”。
              </p>
              <p>
                再加工茶葉的分類，應以毛茶為依據，茶葉品質的形成主要決定于鮮葉加工。再制綠花茶，內質雖然起了一些變化，但品質還是以綠茶品質為主，仍屬綠茶類；青花茶還是青茶品質為主。壓造過的黑磚茶，還是靠近黑茶的品質，壓造過的紅磚茶（或名米磚茶），還是紅茶的品質。那一類毛茶再加工，就歸那一類。雲南沱茶、餅茶和小圓餅茶是屬曬青綠茶加工的，不經過堆積和“發花”過程，色香味變化不大，制法和品質靠近綠茶，應歸入綠茶類。
              </p>
              <p>
                再制後，內質變化很大，與原來的毛茶品質不同，則以變成靠近那個茶類，改屬那個茶類。如雲南的緊茶、大圓餅茶是曬青綠茶加工，但是壓造前必先堆積促進變色，在乾燥過程中“發花”，色香味變化大，與綠茶不同。從再制方法到品質都靠近黑茶，應歸入黑茶類。
              </p>
            </Disclosure>
          </Section>
          ) : null}

          {showSection('cc-4') ? (
          <Section id="cc-4" title="4、茶葉分類方法" scrollMarginTop={resolvedTopOffsetPx}>
            <div className="grid gap-3 md:grid-cols-3">
              <KpiCard icon={<Layers className="h-5 w-5 text-stone-700" />} title="排序的邏輯" desc="不是看產量，而是看工藝與內在變化的「簡→繁、少→多」。" />
              <KpiCard icon={<Sparkles className="h-5 w-5 text-stone-700" />} title="視覺對應" desc="氧化程度與速度差異，會在色澤上形成可辨識的階梯。" />
              <KpiCard icon={<Landmark className="h-5 w-5 text-stone-700" />} title="綱目種" desc="先立「綱」，再補「目/種」，體系才可擴充。" />
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/65 p-4 md:p-5">
              <div className="font-semibold text-stone-800">這一章你只要記住兩句</div>
              <BulletList items={['分類要能對應到工藝（制法）差異，才有用。', '排序不是看產量，而是看變化程度與發展關係。']} />
            </div>

            <Disclosure>
              <p>
                各種茶葉，品質不同，制法也不同。紅茶與綠茶的品質有顯明的區別，制法也截然不同；紅茶的化學作用大，內質變化也多，綠茶的化學作用小，內質變化也少。其它茶類則在兩者之間。
              </p>
              <p>
                內質變化，黃烷醇類氧化比較明顯，依其氧化程度、快慢、先後等不同而呈現不同的色澤。制法相近，黃烷醇類氧化程度也相差不大，黃烷醇類變化也不大。紅茶與綠茶的制法大不相同，黃烷醇類變化差異很大。如表。
              </p>
              <p>
                由於氣候的影響，白茶的萎凋時間較長，青茶做青的時間較短些，黃烷醇類氧化變化則白茶大於青茶，相反的情況，則白茶小於青茶。黑茶濕坯浸堆時間短，黃茶幹坯堆積的時間長，黃烷醇類變化，黑茶大於黃茶，可見濕坯變質比干坯大。
              </p>
              <p>
                黑茶以L—表沒食子兒茶酚沒食子酸酯減少76.00%為最多，D，L一沒食子兒茶酚減少66.45%為最少。黃茶以L一表兒茶酚沒食子酸酯減少71.16%為最多，L一表兒茶酚+D、L一兒茶酚減少43.37%為最少。制法不同，黃烷醇類變化也不同。
              </p>
              <p>
                根據制法和品質的系統以及應用習慣上的分類，按照黃烷醇類含量多少的次序，可分為綠茶、黃茶、黑茶、白茶、青茶、紅茶六大類。這樣排列，既保留勞動人民創造的科學的俗名，分類通俗化，容易區別茶類性質，而且按循序前進的原則，以茶葉內在變化的簡到繁，少到多，逐步發展的規律，加強了分類的系統性和科學性。
              </p>
              <p>
                茶類排列次序，除青茶外，都是按照創制先後的次序，並結合茶葉內部主要化學成分黃烷醇類變化程度的多少為次序，而不是按產量多少為次序；茶類產量不恒定，不時在變化。
              </p>
              <p>
                茶葉分類，科學性、系統性、群眾性很強。茶葉種類不象植物種類千萬繁多，分類要簡單明瞭，易於識別。任何事物的發展，都是由簡到繁，由少到多；由無到有，由有到好；由無到有比較難，由有到好比較容易；由無到好，事實上不大可能。茶葉分類首先要立“綱”，要以品質結合制法立“綱”，綱舉目張，要以制法結合品質立“目”，根據茶類的發展立“種”，逐漸充實完整，結合外形內質的要求，制定品質的規格和標準，而創立茶葉分類學。
              </p>
              <p>甲是“綱”，根據勞動人民創造的分類法，結合外形品質的特點；乙是“目”，根據各茶類各種不同的制法特點；丙是“種”，根據各茶類的外形內質的特點。</p>
            </Disclosure>
          </Section>
          ) : null}

          {showSection('cc-6cats') ? (
          <Section id="cc-6cats" title="六大茶類分類（綱目）" scrollMarginTop={resolvedTopOffsetPx}>
            <SixTeaExplorer topOffsetPx={resolvedTopOffsetPx} />
          </Section>
          ) : null}
          </div>
        </div>
      </article>
    </>
  );
}
