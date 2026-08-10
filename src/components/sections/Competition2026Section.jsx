import React, { useState } from 'react';
import ImageLightbox from '../ImageLightbox';
import {
  Award,
  BookOpenCheck,
  CalendarDays,
  Camera,
  ChevronDown,
  Coffee,
  Droplets,
  Flame,
  History,
  Images,
  Leaf,
  MapPin,
  Quote,
  Scale,
  Sparkles,
  Thermometer,
  Timer,
  Trophy,
  X,
} from 'lucide-react';

const IMAGE_ROOT = '/images/competition/2026-tea-art';

const competitionTeas = [
  {
    id: 'biluochun',
    name: '三峽碧螺春綠茶',
    shortName: '碧螺春',
    tone: 'emerald',
    positioning: '不發酵茶｜台灣風味輪：台灣綠茶',
    sensory: '茶乾碧綠、細緊捲曲，芽尖白毫明顯；沖泡後茶湯碧綠清澈，常見綠豆、海苔、板栗與嫩葉香，入口鮮活爽口，甜感清楚，回甘乾淨。',
    craft: '主要採青心柑仔，以一心一葉至二葉的極嫩採著稱。製程核心是盡早殺菁、抑制氧化；部分三峽製茶實務會在殺菁前短暫室內攤放靜置數小時，調整水分與香氣，但仍須控制氧化，維持綠茶的鮮爽本質。',
    origin: '主要產於新北市三峽區。三峽丘陵環境、雲霧與在地青心柑仔品種，共同形成台灣碧螺春細嫩、鮮活的辨識度。它的價值不只在捲曲外形，更在於以極嫩原料呈現春芽的鮮味。',
    brewing: ['透明玻璃杯或白瓷蓋碗', '75–85°C', '3g／150ml', '第一泡 50–70 秒', '不洗茶'],
    closing: '三峽碧螺春，是台灣茶裡最能代表春天鮮味的綠茶；它的美不在濃烈，而在清雅、鮮活與細緻。',
  },
  {
    id: 'wenshan',
    name: '文山包種茶',
    shortName: '文山包種',
    tone: 'lime',
    positioning: '輕度發酵部分發酵茶｜台灣風味輪：清香型條形包種茶',
    sensory: '條索自然彎曲，色澤翠綠；茶湯蜜綠金黃、清澈明亮。香氣是評鑑核心，常呈現桂花、玉蘭、梔子、野薑花或蘭花般的天然花韻，滋味清甜、甘醇而有活性。',
    craft: '以青心烏龍為主，也有翠玉等品種。日光萎凋、室內靜置與攪拌控制得宜，能讓茶葉在不加入鮮花的情況下自然生成花香；這正是文山包種最重要的工藝精神。',
    origin: '今日行政上的文山區主要指木柵、景美一帶；茶名中的「文山」則源自舊文山堡、文山郡的大文山山區，範圍更廣。核心茶區包括坪林、石碇、深坑、新店，以及南港、木柵周邊。早期包種茶曾以紙包販售，也有「種仔茶以紙包起」的名稱說法。王水錦、魏靜時等前輩吸收萎凋與攪拌技術，推進不薰花而自帶花香的現代包種製法。',
    brewing: ['白瓷蓋碗', '85–90°C', '茶量約容器 1/4–1/3', '第一泡約 45 秒', '出湯後避免久悶'],
    closing: '文山包種把外加的花，變成茶葉自己長出的花香；香、濃、醇、韻、美，是它最迷人的五個字。',
  },
  {
    id: 'dongding',
    name: '凍頂烏龍茶',
    shortName: '凍頂烏龍',
    tone: 'amber',
    positioning: '中度發酵、中度烘焙｜台灣風味輪：焙香型球形烏龍茶',
    sensory: '外觀緊結成球形，色澤墨綠油潤；茶湯金黃明亮，焙火香濃而乾淨，滋味醇厚，口腔飽滿，喉韻與回甘持久。',
    craft: '發酵建立成熟香氣與茶湯骨架，團揉塑造緊結外形，烘焙則是風味再創造。受熱時，茶葉中的胺基酸與還原糖會參與梅納反應，形成米香、堅果、焦糖等熟香，使茶湯更圓潤深沉；好的火功不是焦味，而是香入水、韻留喉。',
    origin: '凍頂原是南投鹿谷的山名，先成為產區與茶名，再因品質與製法受到仿效，逐漸延伸為工藝風格。現今談「凍頂」，可依序理解為地名、產品名與作法名，但產地標示仍應如實區分。',
    brewing: ['紫砂壺、朱泥壺或陶壺', '95–100°C', '茶水比約 1:18', '第一泡約 60 秒', '快速溫潤、單點注水'],
    closing: '凍頂烏龍從一座山走成一套工藝，也用溫潤的焙火與深長喉韻，留下數代台灣人的熟茶記憶。',
  },
  {
    id: 'tieguanyin',
    name: '木柵鐵觀音',
    shortName: '鐵觀音',
    tone: 'orange',
    positioning: '中度發酵、重度烘焙｜台灣風味輪：焙香型球形烏龍茶',
    sensory: '茶湯琥珀略紅，滋味濃而醇厚，帶甘潤口感與純和的弱果酸；焦糖、堅果、米香與品種香交疊，多次沖泡後仍能呈現回甘與觀音韻。',
    craft: '較深的發酵建立熟果與果酸層次，反覆焙火使香氣更沉穩。持續受熱會促進梅納反應與焦糖化相關變化，讓糖香、堅果與烘焙氣息更加立體。沖泡宜有足夠濃度，才能支撐苦、澀、酸、甜與回甘的完整轉變。',
    origin: '台灣鐵觀音主要見於台北木柵與新北石門。木柵鐵觀音常追溯至清末張氏兄弟由福建安溪引進茶苗，在木柵樟湖山一帶落地發展；正欉鐵觀音重視鐵觀音品種本身，特定製法茶則強調鐵觀音式發酵與焙火工藝。',
    brewing: ['紫砂壺、朱泥壺或陶壺', '接近 100°C', '茶量約容器 1/5–1/4', '溫潤 10–15 秒', '前兩泡約 60 秒'],
    closing: '鐵觀音的魅力不只在重火，而在火中有香、濃中有韻，最後留下一點微酸與長長的甘甜。',
  },
  {
    id: 'oriental-beauty',
    name: '東方美人茶',
    shortName: '東方美人',
    tone: 'rose',
    positioning: '重度發酵部分發酵茶｜蜜香、熟果香特色茶',
    sensory: '茶乾白、綠、黃、紅、褐五色相間，高級品白毫顯著；茶湯橙紅明亮，天然蜜香與熟果香清楚，滋味圓柔、甜潤而醇厚。',
    craft: '小綠葉蟬刺吸幼嫩茶芽後，茶樹啟動防禦反應，改變香氣前驅物與生長狀態，形成蜜香的重要基礎。製程採重萎凋、重攪拌與較高發酵；炒菁後的靜置回潤，能使葉片恢復柔軟、利於揉捻，也有助於色澤、甜潤感與熟果香的整合。',
    origin: '主要產於桃竹苗茶區與新北石碇，以青心大冇最具代表性，也見台茶17號白鷺及石碇在地品種。東方美人別稱白毫烏龍、膨風茶、五色茶等，最動人的地方，是把原本被視為蟲害的現象轉化成高價值風味。',
    brewing: ['白瓷蓋碗或玻璃壺', '約 85°C', '茶量約容器 1/3（蓬鬆茶乾可酌增）', '第一泡約 50 秒', '不溫潤、柔和環狀注水'],
    closing: '東方美人把蟲咬變成蜜香，也像《茶金》所說：傷口令人脆弱，但也令人堅強。',
  },
  {
    id: 'red-oolong',
    name: '台東紅烏龍',
    shortName: '紅烏龍',
    tone: 'red',
    positioning: '高發酵、著重烘焙｜台灣風味輪：焙香型球形烏龍茶',
    sensory: '茶湯如琥珀般橙紅明亮，熟果香與焙香清楚，滋味醇厚圓滑、甜潤耐泡；兼具烏龍的香氣層次與紅茶般的醇厚感。',
    craft: '製法結合烏龍茶的做香、球形揉捻與紅茶的高氧化特色，再以烘焙整合香氣與滋味，因此常被形容為兼具紅茶、烏龍與焙火特色的創新茶。它既適合熱泡，也能用冷泡展現熟果甜香。',
    origin: '2008 年由茶業改良場東部分場協助台東鹿野茶區研發。鹿野曾歷經紅茶外銷沒落、清香烏龍難與高山茶競爭，以及蜜香紅茶市場先機流失；紅烏龍因而成為善用夏秋原料、重建產區辨識度的重要突破。',
    brewing: ['紫砂壺、陶壺或白瓷蓋碗', '約 95°C', '依球形茶膨脹量置茶', '第一泡 45–60 秒', '可快速溫潤；冷泡 6–8 小時'],
    closing: '紅烏龍是一款在困境裡誕生的台灣創新茶，用熟果甜香證明，產區的限制也能轉化成新的風格。',
  },
  {
    id: 'black-tea',
    name: '台灣紅茶',
    shortName: '台灣紅茶',
    tone: 'stone',
    positioning: '全發酵茶｜大葉種與小葉種兩大風格',
    sensory: '茶乾條索緊結、色澤烏黑油潤；茶湯紅艷、澄清明亮。小葉種多呈花香、蜜香與柔甜；大葉種內含物較豐富，茶湯較有力度。紅玉具肉桂與薄荷辨識度，紅韻常見柑橘花香，阿薩姆偏木質與濃厚，梨山小葉紅茶則細緻柔甜。',
    craft: '萎凋後透過充分揉捻破壞葉片細胞，使內容物釋出並進行酵素氧化，形成茶黃質、茶紅質等色香味物質。優質紅茶冷卻後可能出現「冷後渾」，是茶湯成分在低溫下形成的乳狀混濁，復熱後通常可再轉清。',
    origin: '台灣紅茶依品種、海拔與產區呈現多元面貌。台茶18號紅玉、台茶21號紅韻建立日月潭紅茶的現代辨識度；小葉種與著涎原料則發展出高山小葉紅茶、蜜香紅茶等更細緻的路線。',
    brewing: ['白瓷蓋碗、瓷壺或玻璃壺', '90–95°C', '小葉種約容器 1/3；大葉種約 1/4', '第一泡約 40 秒', '不溫潤、沿杯壁環狀細注'],
    closing: '紅茶看似熟悉，真正細品卻能從薄荷、肉桂、花蜜到熟果，讀出品種與土地各自的性格。',
  },
];

const gallery = [
  { src: `${IMAGE_ROOT}/award.webp`, alt: '亞軍頒獎合影', caption: '榮耀時刻｜第三屆茶道藝美學薪傳獎亞軍', featured: true },
  { src: `${IMAGE_ROOT}/tea-setting-portrait.webp`, alt: '完整茶席佈置', caption: '作品茶席｜藍白席面、枝葉與暖光' },
  { src: `${IMAGE_ROOT}/brewing-stage.webp`, alt: '舞台沖泡', caption: '司茶實作｜專注控制出湯節奏' },
  { src: `${IMAGE_ROOT}/kettle-pour.webp`, alt: '以壺注水', caption: '注水技法｜高溫喚醒緊結茶葉' },
  { src: `${IMAGE_ROOT}/pour-detail.webp`, alt: '分茶細節', caption: '分茶細節｜穩定、均勻與從容' },
  { src: `${IMAGE_ROOT}/judges-service.webp`, alt: '向評審奉茶', caption: '奉茶評鑑｜將作品完整呈現給評審' },
  { src: `${IMAGE_ROOT}/cup-presentation.webp`, alt: '舉杯呈茶', caption: '器物展示｜在動作中維持禮與美' },
  { src: `${IMAGE_ROOT}/tea-stage.webp`, alt: '比賽茶席現場', caption: '比賽現場｜茶席與操作動線' },
  { src: `${IMAGE_ROOT}/team-full.webp`, alt: '參賽團隊合影', caption: '同場夥伴｜一起完成比賽歷程' },
  { src: `${IMAGE_ROOT}/team-awards.webp`, alt: '得獎者與師長合影', caption: '得獎合影｜掌聲背後是長期練習' },
  { src: `${IMAGE_ROOT}/mentor-photo.webp`, alt: '與師長合影', caption: '感謝指導｜茶路上重要的陪伴' },
];

const toneClasses = {
  emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  lime: 'bg-lime-50 text-lime-800 border-lime-200',
  amber: 'bg-amber-50 text-amber-900 border-amber-200',
  orange: 'bg-orange-50 text-orange-900 border-orange-200',
  rose: 'bg-rose-50 text-rose-900 border-rose-200',
  red: 'bg-red-50 text-red-900 border-red-200',
  stone: 'bg-stone-100 text-stone-800 border-stone-300',
};

function SectionTitle({ eyebrow, title, description, icon: Icon, inverted = false }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
        {React.createElement(Icon, { size: 17 })}
        {eyebrow}
      </div>
      <h2 className={`text-3xl font-black tracking-tight md:text-4xl ${inverted ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
      {description ? <p className={`mt-3 text-base font-semibold leading-8 md:text-lg ${inverted ? 'text-white/70' : 'text-stone-600'}`}>{description}</p> : null}
    </div>
  );
}

function TeaQuestionCard({ tea, isOpen, onToggle }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-7"
        aria-expanded={isOpen}
      >
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border text-sm font-black ${toneClasses[tea.tone]}`}>
          茶
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xl font-black text-stone-900 md:text-2xl">{tea.name}</span>
          <span className="mt-1 block text-sm font-bold leading-6 text-stone-500">{tea.positioning}</span>
        </span>
        <ChevronDown size={22} className={`shrink-0 text-stone-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen ? (
        <div className="border-t border-stone-100 px-5 pb-7 pt-5 md:px-7">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50/70 p-5">
              <div className="mb-2 flex items-center gap-2 font-black text-emerald-800"><Droplets size={18} />茶湯與風味</div>
              <p className="font-semibold leading-8 text-stone-700">{tea.sensory}</p>
            </div>
            <div className="rounded-2xl bg-amber-50/70 p-5">
              <div className="mb-2 flex items-center gap-2 font-black text-amber-900"><Flame size={18} />特色怎麼來</div>
              <p className="font-semibold leading-8 text-stone-700">{tea.craft}</p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5 lg:col-span-2">
              <div className="mb-2 flex items-center gap-2 font-black text-stone-800"><History size={18} />品種、產地與故事</div>
              <p className="font-semibold leading-8 text-stone-700">{tea.origin}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
            <div className="mb-4 flex items-center gap-2 font-black text-sky-900"><Coffee size={18} />擇器與泡法</div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {tea.brewing.map((item, index) => (
                <div key={item} className="rounded-xl bg-white px-3 py-3 text-sm font-bold leading-6 text-stone-700 shadow-sm">
                  <span className="mr-1 text-sky-700">{index + 1}.</span>{item}
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-4 flex gap-3 rounded-2xl bg-stone-900 px-5 py-4 text-white">
            <Quote size={21} className="mt-1 shrink-0 text-amber-300" />
            <p className="text-base font-bold leading-7">{tea.closing}</p>
          </blockquote>
        </div>
      ) : null}
    </article>
  );
}

export default function Competition2026Section() {
  const [openTea, setOpenTea] = useState('biluochun');
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-stone-900">
      <section className="relative isolate overflow-hidden bg-[#112e28] text-white">
        <img
          src={`${IMAGE_ROOT}/award.webp`}
          alt="第三屆茶道藝美學薪傳獎亞軍頒獎合影"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c2924]/95 via-[#0c2924]/75 to-[#0c2924]/25" />
        <div className="mx-auto flex min-h-[560px] max-w-7xl items-end px-5 pb-14 pt-28 md:px-8 md:pb-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-black tracking-[0.16em] backdrop-blur">
              <Trophy size={18} className="text-amber-300" />
              2026 · COMPETITION ARCHIVE
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">第三屆茶道藝美學<br className="hidden md:block" />薪傳獎・參賽實錄</h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/85 md:text-xl">
              從特色茶問答、器物選擇到舞台司茶，完整保存一次把茶學知識化為現場表達的歷程。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 font-black text-stone-900"><Award size={18} />亞軍</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-bold backdrop-blur"><CalendarDays size={18} />2026.08.01</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-bold backdrop-blur"><MapPin size={18} />茶道藝美學薪傳獎</span>
            </div>
          </div>
        </div>
      </section>

      <nav className="border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 md:px-8">
          {[
            ['#competition-story', '比賽紀錄'],
            ['#competition-questions', '特色茶問答'],
            ['#competition-brewing', '沖泡速查'],
            ['#competition-gallery', '影像紀錄'],
            ['#competition-reflection', '茶學心得'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-black text-stone-600 transition hover:bg-emerald-50 hover:text-emerald-800">{label}</a>
          ))}
        </div>
      </nav>

      <main>
        <section id="competition-story" className="scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Competition Story" title="一場比賽，五種能力的整合" description="比賽不只是把茶泡好，而是同時考驗知識、感官、動作、空間與表達。這個專區把當天成果轉化為可複習、可教學，也可持續累積的個人作品紀錄。" icon={Sparkles} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                [BookOpenCheck, '特色茶知識', '說清茶類、產地、工藝與風味'],
                [Droplets, '沖泡判斷', '水溫、茶量、時間與注水方式'],
                [Coffee, '司茶動作', '穩定、整潔、節奏與奉茶禮序'],
                [Leaf, '茶席美學', '藍白席面、器物與自然枝葉'],
                [Camera, '舞台表達', '在時間壓力下自然地呈現專業'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">{React.createElement(Icon, { size: 22 })}</div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="competition-questions" className="scroll-mt-28 bg-white px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="Tea Q&A" title="七款特色茶・比賽問答整理" description="每題採同一條講解路徑：先定位茶類，再說茶湯特色、特色成因、產地歷史，最後交代器具與沖泡。點開茶名即可完整複習。" icon={BookOpenCheck} />
            <div className="space-y-4">
              {competitionTeas.map((tea) => (
                <TeaQuestionCard key={tea.id} tea={tea} isOpen={openTea === tea.id} onToggle={() => setOpenTea(openTea === tea.id ? null : tea.id)} />
              ))}
            </div>
          </div>
        </section>

        <section id="competition-brewing" className="scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Brewing Quick Reference" title="上場前一分鐘・沖泡參數速查" description="先用茶類判斷水溫，再依茶乾嫩度、緊結度與焙火程度微調。下表是比賽答題的記憶起點，不是不可變動的唯一公式。" icon={Thermometer} />
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full text-left">
                  <thead className="bg-[#173f36] text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-black">茶款</th>
                      <th className="px-5 py-4 text-sm font-black"><span className="inline-flex items-center gap-2"><Coffee size={16} />器具</span></th>
                      <th className="px-5 py-4 text-sm font-black"><span className="inline-flex items-center gap-2"><Thermometer size={16} />水溫</span></th>
                      <th className="px-5 py-4 text-sm font-black"><span className="inline-flex items-center gap-2"><Scale size={16} />茶量</span></th>
                      <th className="px-5 py-4 text-sm font-black"><span className="inline-flex items-center gap-2"><Timer size={16} />第一泡</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {competitionTeas.map((tea, index) => (
                      <tr key={tea.id} className={index % 2 ? 'bg-stone-50/70' : 'bg-white'}>
                        <td className="px-5 py-4 font-black text-stone-900">{tea.shortName}</td>
                        <td className="px-5 py-4 text-sm font-semibold text-stone-700">{tea.brewing[0]}</td>
                        <td className="px-5 py-4 text-sm font-bold text-emerald-800">{tea.brewing[1]}</td>
                        <td className="px-5 py-4 text-sm font-semibold text-stone-700">{tea.brewing[2]}</td>
                        <td className="px-5 py-4 text-sm font-semibold text-stone-700">{tea.brewing[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="competition-gallery" className="scroll-mt-28 bg-[#142f29] px-5 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Photo Essay" title="影像紀錄・從茶席到頒獎" description="點選照片可放大觀看。這些畫面記錄的不只是得獎結果，也包括準備、注水、分茶、奉茶與同伴同行的過程。" icon={Images} inverted />
            <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox(index)}
                  className={`group relative overflow-hidden rounded-3xl text-left ${photo.featured ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                >
                  <img src={photo.src} alt={photo.alt} loading={index < 2 ? 'eager' : 'lazy'} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-black leading-6 md:text-base">{photo.caption}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="competition-reflection" className="scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
            <img src={`${IMAGE_ROOT}/mentor-photo.webp`} alt="比賽後與師長合影" loading="lazy" className="h-full min-h-[420px] w-full object-cover object-center" />
            <div className="p-7 md:p-12">
              <div className="mb-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-700"><Leaf size={17} />My Tea Practice</div>
              <h2 className="text-3xl font-black leading-tight tracking-tight md:text-4xl">茶讓知識落在手上，<br />也讓心慢下來。</h2>
              <div className="mt-7 space-y-5 text-base font-semibold leading-8 text-stone-700 md:text-lg">
                <p>對我來說，茶不是單純的飲料，而是一種把人慢下來、把心安定下來的方法。</p>
                <p>學茶以前，我比較在意茶好不好喝；學茶以後，我開始知道一杯茶背後有品種、產地、季節、製程、沖泡與人的選擇。茶讓我把味覺、嗅覺、觀察力和表達能力連在一起。</p>
                <p>茶對我的意義是專注與待人。泡茶時，水溫、茶量、時間都不能急；和人分享時，也要理解對方的感受。這和我平常做客服工程師其實很像，都是先觀察問題，再用合適的方法讓事情變順。</p>
                <p>未來我希望把茶學、教學和數位工具結合起來，用簡單、正確、可親近的方式介紹台灣茶。我的目標不是把茶講得很玄，而是讓更多人聽得懂、喝得出差異，也願意把台灣茶帶進生活。</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ImageLightbox
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
        imageSrc={lightbox !== null ? gallery[lightbox].src : ''}
        altText={lightbox !== null ? gallery[lightbox].caption : ''}
      />
    </div>
  );
}
