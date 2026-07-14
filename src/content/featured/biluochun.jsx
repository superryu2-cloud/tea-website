import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  ChefHat,
  Droplets,
  Leaf,
  MapPin,
  Mountain,
  Sparkles,
  Sprout,
  Thermometer,
  Wind,
} from 'lucide-react';
import ReadingAssist from '../../components/ReadingAssist';
import ImageModal from '../../components/ImageModal';

const HERO_IMAGE = {
  src: '/images/varieties/green_tea/taiwan_green_tea_sanxia.png',
  alt: '三峽碧螺春茶園與綠茶意象',
};

const IMAGE_GALLERY = [
  {
    src: '/images/biluochun.png',
    alt: '碧螺春茶乾與細嫩白毫',
    title: '細嫩白毫',
    desc: '觀察細嫩芽葉、白毫與自然捲曲的綠茶外觀。',
  },
  {
    src: '/images/green_tea_zhengqing.png',
    alt: '綠茶殺菁製程',
    title: '高溫殺菁',
    desc: '以高溫抑制酵素活性，是綠茶保持鮮綠與清香的核心。',
  },
  {
    src: '/images/green_tea_floating.png',
    alt: '碧螺春上投法茶芽下沉',
    title: '上投法茶舞',
    desc: '透明杯中可觀察茶芽舒展，感受細嫩綠茶的杯中風景。',
  },
];

const QUICK_FACTS = [
  { label: '茶類', value: '不發酵綠茶', icon: Sprout },
  { label: '主產地', value: '新北市三峽茶區', icon: MapPin },
  { label: '代表品種', value: '青心柑仔', icon: Leaf },
  { label: '採摘', value: '嫩採一心一葉／二葉', icon: Sparkles },
];

const PROCESS_STEPS = [
  {
    title: '嫩採茶菁',
    desc: '以一心一葉或一心二葉等細嫩芽葉為主，白毫、嫩香與鮮爽感都從原料開始決定。',
  },
  {
    title: '高溫殺菁',
    desc: '採後以高溫迅速抑制酵素活性，停止氧化走向，是綠茶能保持鮮綠、清香與鮮爽的關鍵。',
  },
  {
    title: '揉捻成形',
    desc: '揉捻讓茶葉形成細緊、微捲或條索狀，也使茶汁附著於葉面，影響後續沖泡的滋味釋放。',
  },
  {
    title: '乾燥定香',
    desc: '乾燥降低含水量，固定香氣、滋味與外形。綠茶怕光、怕熱、怕潮，保存時更需要密封低溫。',
  },
];

const TASTING_NOTES = [
  { title: '外觀', desc: '茶形細嫩、條索緊結或自然捲曲，優質者可見嫩芽白毫。' },
  { title: '湯色', desc: '茶湯清澈明亮，多呈淡綠至黃綠色，葉底鮮綠柔嫩。' },
  { title: '香氣', desc: '常見嫩葉香、綠豆香、蔬果香、清花香，部分茶品可帶海苔或淡淡青草氣息。' },
  { title: '滋味', desc: '入口鮮爽甘甜、清新細緻；若水溫過高或浸泡太久，容易轉為苦澀。' },
];

const BREWING_GUIDE = [
  { label: '器具', value: '透明玻璃杯、白瓷蓋碗' },
  { label: '水溫', value: '75–85°C' },
  { label: '茶量', value: '約 3g／150ml' },
  { label: '第一泡', value: '約 50–70 秒，依茶量調整' },
  { label: '重點', value: '細嫩綠茶不建議洗茶，第一泡就是鮮爽精華' },
];

function InfoPill({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white/85 p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-emerald-700">
        {React.createElement(icon, { size: 16 })}
        {label}
      </div>
      <div className="text-[18px] font-extrabold text-stone-950">{value}</div>
    </div>
  );
}

function SectionTitle({ icon, eyebrow, title, children }) {
  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center gap-3 text-sm font-extrabold tracking-[0.2em] text-emerald-700 uppercase">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {React.createElement(icon, { size: 21 })}
        </span>
        {eyebrow}
      </div>
      <h3 className="text-3xl font-black tracking-tight text-stone-950 md:text-4xl">{title}</h3>
      {children ? <p className="mt-4 max-w-3xl text-[19px] leading-relaxed text-stone-700">{children}</p> : null}
    </div>
  );
}

function ImageCard({ image, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick({ src: image.src, alt: image.alt })}
      className="group overflow-hidden rounded-3xl border border-stone-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden bg-emerald-50">
        <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h4 className="text-xl font-black text-stone-950">{image.title}</h4>
        <p className="mt-2 text-[17px] leading-relaxed text-stone-600">{image.desc}</p>
      </div>
    </button>
  );
}

export default function BiluochunGreenTeaContent() {
  const contentRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="animate-fadeIn space-y-12">
      <section className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-lime-50 shadow-xl shadow-emerald-100/40">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 md:p-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-extrabold tracking-[0.18em] text-emerald-800 shadow-sm">
              TAIWAN GREEN TEA · SANXIA
            </div>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-emerald-950 md:text-6xl">
              三峽碧螺春綠茶
            </h2>
            <p className="mt-6 max-w-2xl text-[21px] leading-relaxed text-stone-700">
              臺灣北部代表性的炒菁綠茶。以新北三峽風土、青心柑仔品種與不發酵工藝，保留春芽最鮮明的清香、綠豆香與嫩芽白毫之美。它不像焙火茶那樣厚重，而是以清、鮮、柔、亮展現綠茶的精緻。
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {QUICK_FACTS.map((fact) => <InfoPill key={fact.label} {...fact} />)}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setPreviewImage(HERO_IMAGE)}
            className="group relative min-h-[360px] overflow-hidden bg-emerald-900 text-left"
          >
            <img src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-emerald-950/15 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white">
              <div className="text-sm font-extrabold tracking-[0.2em] text-emerald-100">MAIN IMAGE</div>
              <div className="mt-2 text-2xl font-black">三峽茶鄉的鮮綠風格</div>
            </div>
          </button>
        </div>
      </section>

      <ReadingAssist contentRef={contentRef} headingSelector="h3" />

      <div ref={contentRef} className="mx-auto max-w-6xl space-y-14 px-4 md:px-0">
        <section className="rounded-[2rem] border border-stone-200 bg-white/88 p-8 shadow-sm md:p-10">
          <SectionTitle icon={MapPin} eyebrow="01 · Origin" title="三峽碧螺春：臺灣綠茶的清雅代表">
            談到臺灣茶，許多人第一時間會想到高山烏龍；但三峽碧螺春代表的是另一種迷人的方向：清亮、鮮爽、帶著春芽生命力的綠茶風格。它的價值不在厚重焙火，而在於把茶葉剛採下時的細緻鮮味保存下來。
          </SectionTitle>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5 text-[19px] leading-relaxed text-stone-700">
              <p>
                三峽碧螺春主產於新北市三峽茶區，常以<strong className="text-emerald-800">青心柑仔</strong>製作。三峽位於北臺灣丘陵茶區，氣候濕潤，適合製作清香型綠茶；青心柑仔則提供清新、甘醇與細緻香氣的基底。
              </p>
              <p>
                如果高山烏龍像雲霧山林的厚度，三峽碧螺春更像早春茶芽在水中舒展的亮度：輕、鮮、清、柔。入口不追求濃重，而是讓人感覺乾淨、細緻，像一口春天。
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
              <h4 className="mb-4 text-xl font-black text-emerald-950">認識重點</h4>
              <p className="text-[20px] font-bold leading-relaxed text-emerald-900">
                碧螺春是理解「不發酵茶」很好的入口：茶菁採下後，越快透過殺菁停止氧化，就越能保留鮮葉原本的清新。
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle icon={Sparkles} eyebrow="02 · Visual Identity" title="從外觀、製程到杯中風景">
            先從外觀認識白毫與細嫩芽葉，再理解殺菁如何保留清香，最後回到杯中觀察茶芽舒展。這三個角度，能快速抓住碧螺春的核心美感。
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {IMAGE_GALLERY.map((image) => <ImageCard key={image.src} image={image} onClick={setPreviewImage} />)}
          </div>
        </section>

        <section className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-8 shadow-sm md:p-10">
          <SectionTitle icon={ChefHat} eyebrow="03 · Processing" title="製程核心：殺菁留住春芽鮮味">
            碧螺春的基本流程是「採摘 → 攤放 → 殺菁 → 揉捻／整形 → 乾燥」。製程看似簡潔，真正困難的是掌握火候與時間：既要停止氧化，又不能把嫩芽做老、做悶。
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="relative rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-black text-white">{index + 1}</div>
                <h4 className="text-xl font-black text-stone-950">{step.title}</h4>
                <p className="mt-3 text-[17px] leading-relaxed text-stone-600">{step.desc}</p>
                {index < PROCESS_STEPS.length - 1 ? <ArrowRight className="absolute -right-4 top-1/2 hidden text-emerald-400 md:block" size={28} /> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-emerald-100 bg-emerald-950 p-8 text-white shadow-sm md:p-10">
            <SectionTitle icon={Leaf} eyebrow="04 · Tasting" title="風味辨識：清新鮮爽，帶蔬果與豆香" />
            <p className="text-[19px] leading-relaxed text-emerald-50/90">
              好的三峽碧螺春，喝起來應該明亮、清爽，有嫩葉、綠豆、蔬果般的鮮甜感。若入口苦澀厚重，常見原因是水溫太高、浸泡太久，或製程中茶菁與殺菁控制不夠細緻。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {TASTING_NOTES.map((note) => (
              <div key={note.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-black text-emerald-900">{note.title}</h4>
                <p className="mt-3 text-[18px] leading-relaxed text-stone-700">{note.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <button
            type="button"
            onClick={() => setPreviewImage({ src: '/images/green_tea_glass.png', alt: '玻璃杯沖泡綠茶' })}
            className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-lg"
          >
            <img src="/images/green_tea_glass.png" alt="玻璃杯沖泡綠茶" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-5 left-6 text-left text-white">
              <div className="text-sm font-extrabold tracking-[0.2em]">BREWING</div>
              <div className="mt-1 text-2xl font-black">低溫短浸，不溫潤泡</div>
            </div>
          </button>
          <div>
            <SectionTitle icon={Thermometer} eyebrow="05 · Brewing" title="沖泡建議：讓鮮爽留在第一泡">
              碧螺春是細嫩綠茶，不適合沸水猛沖。第一泡不是拿來洗茶，而是最珍貴的鮮爽香氣。
            </SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2">
              {BREWING_GUIDE.map((item) => (
                <div key={item.label} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-black tracking-[0.16em] text-emerald-700">{item.label}</div>
                  <div className="mt-1 text-[18px] font-bold text-stone-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <SectionTitle icon={BookOpen} eyebrow="06 · Compare" title="三峽碧螺春與洞庭碧螺春，不是同一個風土">
            名稱相通，但產地、品種與茶區文化不同。理解這個差異，就能看見茶不只是品名，更是風土、樹種、工藝與時代共同留下的味道。
          </SectionTitle>
          <div className="overflow-hidden rounded-3xl border border-stone-200">
            <div className="grid grid-cols-3 bg-emerald-800 text-center text-[17px] font-black text-white">
              <div className="p-4">面向</div>
              <div className="border-l border-white/20 p-4">臺灣三峽碧螺春</div>
              <div className="border-l border-white/20 p-4">中國洞庭碧螺春</div>
            </div>
            {[
              ['產地', '新北市三峽茶區', '江蘇蘇州太湖洞庭東山、西山'],
              ['品種', '以青心柑仔為代表', '洞庭山地方茶樹資源'],
              ['風味', '蔬果香、綠豆香、鮮爽甘醇', '花果香、嫩香、色香味三鮮'],
              ['知識定位', '臺灣在地綠茶風格', '中國傳統名茶脈絡'],
            ].map(([label, taiwan, china]) => (
              <div key={label} className="grid grid-cols-3 border-t border-stone-200 bg-white text-[17px] leading-relaxed text-stone-700">
                <div className="bg-stone-50 p-4 font-black text-stone-950">{label}</div>
                <div className="border-l border-stone-200 p-4">{taiwan}</div>
                <div className="border-l border-stone-200 p-4">{china}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <button
            type="button"
            onClick={() => setPreviewImage({ src: '/images/tea_poem_tang_spring.png', alt: '春日茶詩意象' })}
            className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-stone-200 shadow-lg"
          >
            <img src="/images/tea_poem_tang_spring.png" alt="春日茶詩意象" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 to-transparent" />
            <div className="absolute bottom-6 left-6 text-left text-white">
              <div className="text-sm font-extrabold tracking-[0.2em]">TEA KNOWLEDGE</div>
              <div className="mt-2 text-2xl font-black">春天鮮味的茶</div>
            </div>
          </button>
          <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 md:p-10">
            <SectionTitle icon={Wind} eyebrow="07 · Knowledge Note" title="知識總結：一口喝懂綠茶與烏龍的差別" />
            <p className="text-[20px] leading-relaxed text-stone-700">
              碧螺春很適合作為認識「不發酵茶」的入口。它讓人看見：同一片茶葉，只要製程不同，風味就會走向完全不同的世界。綠茶保留鮮葉清新；烏龍透過萎凋、攪拌與發酵創造花香；紅茶則讓氧化充分進行，形成甜香與紅亮湯色。
            </p>
            <div className="mt-6 rounded-3xl border border-emerald-200 bg-white p-5 text-[19px] font-bold leading-relaxed text-emerald-900">
              一句話記憶：三峽碧螺春，是臺灣茶裡最能代表「春天鮮味」的綠茶。它的美，不在濃烈，而在清雅、鮮活與細緻。
            </div>
          </div>
        </section>
      </div>

      {previewImage && (
        <ImageModal
          isOpen={true}
          src={previewImage.src}
          alt={previewImage.alt}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </div>
  );
}