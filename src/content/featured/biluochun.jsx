import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  ChefHat,
  ChevronRight,
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
  { title: '湯色', desc: '茶湯碧綠至黃綠、清澈明亮，葉底鮮綠柔嫩；評鑑用語以「綠色系」掌握最穩妥。' },
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
const CONTENT_NODES = [
  { id: 'biluochun-taiwan-origin', number: '01', label: '三峽風土', group: '臺灣碧螺春' },
  { id: 'biluochun-taiwan-sensory', number: '02', label: '色・香・味', group: '臺灣碧螺春' },
  { id: 'biluochun-taiwan-process', number: '03', label: '製程關鍵', group: '臺灣碧螺春' },
  { id: 'biluochun-taiwan-brewing', number: '04', label: '沖泡指南', group: '臺灣碧螺春' },
  { id: 'biluochun-china-origin', number: '05', label: '洞庭風土', group: '中國洞庭碧螺春' },
  { id: 'biluochun-china-craft', number: '06', label: '傳統工藝', group: '中國洞庭碧螺春' },
  { id: 'biluochun-compare', number: '07', label: '雙茶辨識', group: '快速比較' },
  { id: 'biluochun-summary', number: '08', label: '知識總結', group: '快速比較' },
];

const DONGTING_PROCESS = [
  { title: '鮮葉揀剔', desc: '採取幼嫩芽葉並細緻揀剔，先從原料整齊度建立品質。' },
  { title: '高溫殺青', desc: '迅速抑制酵素活性，保留綠茶的嫩香與鮮醇滋味。' },
  { title: '熱揉成形', desc: '趁熱揉製，使芽葉逐步形成纖細、彎曲的輪廓。' },
  { title: '搓團顯毫', desc: '反覆搓團，使外形捲曲呈螺，茸毫在茶體表面顯露。' },
  { title: '文火乾燥', desc: '以較溫和火力完成乾燥，固定嫩香、外形與回甘。' },
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
  const [activeNode, setActiveNode] = useState(CONTENT_NODES[0].id);

  useEffect(() => {
    const sections = CONTENT_NODES
      .map((node) => document.getElementById(node.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveNode(visible.target.id);
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToNode = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-0 lg:grid-cols-[270px_minmax(0,1fr)] lg:items-start">
        <aside className="self-start lg:sticky lg:top-24">
          <div className="rounded-[1.75rem] border border-emerald-100 bg-white/95 p-4 shadow-xl shadow-emerald-950/5 backdrop-blur md:p-5">
            <div className="flex items-center justify-between gap-3 lg:block">
              <div>
                <div className="text-xs font-black tracking-[0.2em] text-emerald-700">BILUOCHUN ATLAS</div>
                <h3 className="mt-1 text-xl font-black text-stone-950">碧螺春知識節點</h3>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">臺灣 × 洞庭</div>
            </div>
            <nav className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1" aria-label="碧螺春文章節點">
              {CONTENT_NODES.map((node, index) => {
                const isActive = activeNode === node.id;
                const showGroup = index === 0 || CONTENT_NODES[index - 1].group !== node.group;
                return (
                  <React.Fragment key={node.id}>
                    {showGroup ? (
                      <div className="hidden px-3 pb-2 pt-4 text-xs font-black tracking-[0.16em] text-stone-400 first:pt-0 lg:block">
                        {node.group}
                      </div>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => scrollToNode(node.id)}
                      className={`group flex min-w-[154px] items-center gap-3 rounded-2xl px-3 py-3 text-left transition lg:w-full lg:min-w-0 ${
                        isActive
                          ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/15'
                          : 'bg-stone-50 text-stone-700 hover:bg-emerald-50 hover:text-emerald-900'
                      }`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${isActive ? 'bg-white text-emerald-800' : 'border border-emerald-200 bg-white text-emerald-700'}`}>
                        {node.number}
                      </span>
                      <span className="text-[16px] font-extrabold">{node.label}</span>
                      <ChevronRight size={17} className={`ml-auto hidden transition lg:block ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
        </aside>

        <main ref={contentRef} className="min-w-0 space-y-14">
        <section id="biluochun-taiwan-origin" className="scroll-mt-28 rounded-[2rem] border border-stone-200 bg-white/88 p-8 shadow-sm md:p-10">
          <SectionTitle icon={MapPin} eyebrow="01 · Taiwan Origin" title="三峽碧螺春：臺灣綠茶的清雅代表">
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

        <section id="biluochun-taiwan-process" className="scroll-mt-28 rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-8 shadow-sm md:p-10">
          <SectionTitle icon={ChefHat} eyebrow="02 · Taiwan Processing" title="製程核心：殺菁留住春芽鮮味">
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

        <section id="biluochun-taiwan-sensory" className="scroll-mt-28 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-emerald-100 bg-emerald-950 p-8 text-white shadow-sm md:p-10">
            <SectionTitle icon={Leaf} eyebrow="03 · Taiwan Tasting" title="風味辨識：清新鮮爽，帶蔬果與豆香" />
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

        <section id="biluochun-taiwan-brewing" className="scroll-mt-28 grid gap-8 lg:grid-cols-2 lg:items-center">
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
            <SectionTitle icon={Thermometer} eyebrow="04 · Taiwan Brewing" title="沖泡建議：讓鮮爽留在第一泡">
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


        <section id="biluochun-china-origin" className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-amber-50 shadow-sm">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-slate-900 p-8 text-white md:p-10">
              <div className="text-sm font-extrabold tracking-[0.2em] text-sky-200">05 · CHINA ORIGIN</div>
              <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">中國洞庭碧螺春</h3>
              <p className="mt-5 text-[19px] leading-relaxed text-slate-200">
                這裡的「洞庭」不是湖南洞庭湖，而是江蘇蘇州太湖中的洞庭東山與洞庭西山（金庭鎮）。洞庭山碧螺春是受地理標誌保護的中國傳統名茶，名稱不能只靠外形相似就混用。
              </p>
              <div className="mt-7 rounded-3xl border border-white/15 bg-white/10 p-5">
                <div className="text-sm font-black tracking-[0.16em] text-sky-200">辨識一句話</div>
                <p className="mt-2 text-[20px] font-bold leading-relaxed">東山、西山的茶果複合風土，加上搓團顯毫工藝，是洞庭碧螺春的核心身分。</p>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <SectionTitle icon={Mountain} eyebrow="Protected Origin" title="產地、茶樹與茶果複合系統" />
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['法定產區', '蘇州市東山鎮（洞庭東山）與金庭鎮（洞庭西山）'],
                  ['茶樹資源', '以洞庭山群體小葉種為主，也可採用經審定的良種'],
                  ['栽培景觀', '茶園嵌種枇杷、柑橘、楊梅、板栗、梅樹等果樹'],
                  ['品質輪廓', '纖細多毫、卷曲呈螺、嫩香持久、鮮醇回甘'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-sm font-black tracking-[0.14em] text-sky-700">{label}</div>
                    <p className="mt-2 text-[18px] font-bold leading-relaxed text-stone-800">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="biluochun-china-craft" className="scroll-mt-28 rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm md:p-10">
          <SectionTitle icon={ChefHat} eyebrow="06 · China Craft" title="洞庭傳統工藝：搓團顯毫，塑造卷曲如螺">
            洞庭碧螺春同樣是不發酵綠茶，但傳統製作特別強調「熱揉成形」與「搓團顯毫」。這正是它形成纖細、多毫、卷曲外觀的重要工藝語彙。
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-5">
            {DONGTING_PROCESS.map((step, index) => (
              <div key={step.title} className="relative rounded-3xl border border-sky-100 bg-sky-50/60 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-sm font-black text-white">{index + 1}</div>
                <h4 className="text-[19px] font-black text-slate-950">{step.title}</h4>
                <p className="mt-3 text-[16px] leading-relaxed text-slate-600">{step.desc}</p>
                {index < DONGTING_PROCESS.length - 1 ? <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden text-sky-400 md:block" size={26} /> : null}
              </div>
            ))}
          </div>
        </section>

        <section id="biluochun-compare" className="scroll-mt-28 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <SectionTitle icon={BookOpen} eyebrow="07 · Compare" title="三峽碧螺春與洞庭碧螺春，不是同一個風土">
            名稱相通，但產地、品種與茶區文化不同。理解這個差異，就能看見茶不只是品名，更是風土、樹種、工藝與時代共同留下的味道。
          </SectionTitle>
          <div className="overflow-x-auto rounded-3xl border border-stone-200">
            <div className="min-w-[760px]">
            <div className="grid grid-cols-3 bg-emerald-800 text-center text-[17px] font-black text-white">
              <div className="p-4">面向</div>
              <div className="border-l border-white/20 p-4">臺灣三峽碧螺春</div>
              <div className="border-l border-white/20 p-4">中國洞庭碧螺春</div>
            </div>
            {[
              ['正式定位', '臺灣特色茶代表綠茶', '中國地理標誌保護產品'],
              ['產地', '新北市三峽茶區', '江蘇蘇州洞庭東山、洞庭西山（金庭鎮）'],
              ['品種', '以青心柑仔為代表', '以洞庭山群體小葉種為主'],
              ['茶乾', '碧綠、細緊捲曲、芽尖白毫顯著', '纖細多毫、卷曲呈螺'],
              ['湯色與風味', '碧綠清澈；綠豆香、蔬果香，鮮活爽口', '嫩香持久；滋味鮮醇、回味甘甜'],
              ['工藝辨識', '嫩採、殺菁、揉捻整形、乾燥', '鮮葉揀剔、高溫殺青、熱揉、搓團顯毫、文火乾燥'],
            ].map(([label, taiwan, china]) => (
              <div key={label} className="grid grid-cols-3 border-t border-stone-200 bg-white text-[17px] leading-relaxed text-stone-700">
                <div className="bg-stone-50 p-4 font-black text-stone-950">{label}</div>
                <div className="border-l border-stone-200 p-4">{taiwan}</div>
                <div className="border-l border-stone-200 p-4">{china}</div>
              </div>
            ))}
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-[15px] leading-relaxed text-stone-600 md:grid-cols-2">
            <a href="https://www.tbrs.gov.tw/theme_data.php?id=5275&print=Y&sub_theme=agricultural_news&theme=news" target="_blank" rel="noreferrer" className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 font-bold transition hover:border-emerald-300 hover:text-emerald-800">
              臺灣資料核對｜農業部茶及飲料作物改良場：三峽碧螺春評鑑與風味特色
            </a>
            <a href="https://www.suzhou.gov.cn/szsrmzf/gbdfxfg/202403/4633ff414f894d119221022e55ba44a9.shtml" target="_blank" rel="noreferrer" className="rounded-2xl border border-sky-100 bg-sky-50 p-4 font-bold transition hover:border-sky-300 hover:text-sky-800">
              洞庭資料核對｜蘇州市人民政府：洞庭山碧螺春茶保護條例
            </a>
          </div>
        </section>

        <section id="biluochun-summary" className="scroll-mt-28 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
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
            <SectionTitle icon={Wind} eyebrow="08 · Knowledge Note" title="知識總結：一口喝懂綠茶與烏龍的差別" />
            <p className="text-[20px] leading-relaxed text-stone-700">
              碧螺春很適合作為認識「不發酵茶」的入口。它讓人看見：同一片茶葉，只要製程不同，風味就會走向完全不同的世界。綠茶保留鮮葉清新；烏龍透過萎凋、攪拌與發酵創造花香；紅茶則讓氧化充分進行，形成甜香與紅亮湯色。
            </p>
            <div className="mt-6 rounded-3xl border border-emerald-200 bg-white p-5 text-[19px] font-bold leading-relaxed text-emerald-900">
              一句話記憶：三峽碧螺春，是臺灣茶裡最能代表「春天鮮味」的綠茶。它的美，不在濃烈，而在清雅、鮮活與細緻。
            </div>
          </div>
        </section>
        </main>
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