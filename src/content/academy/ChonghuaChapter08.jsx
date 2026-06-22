import React, { useEffect, useMemo, useState } from 'react';
import {
    BookOpen,
    CheckCircle2,
    Coffee,
    Compass,
    Droplets,
    FlaskConical,
    Leaf,
    MapPin,
    Scale,
    Sparkles,
    Sprout,
} from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import ImageLightbox from '../../components/ui/ImageLightbox';

const IMG = '/images/academy/chonghua-chapter08';

const TOC = [
    { id: 'ch08-intro', label: '紅茶是什麼' },
    { id: 'ch08-taiwan', label: '台灣紅茶脈絡' },
    { id: 'ch08-profiles', label: '四種紅茶' },
    { id: 'ch08-mountain', label: '山茶紅茶' },
    { id: 'ch08-honey', label: '蜜香紅茶' },
    { id: 'ch08-ruby18', label: '台茶18號紅玉' },
    { id: 'ch08-smallleaf', label: '小葉種紅茶' },
    { id: 'ch08-compare', label: '風味比較' },
    { id: 'ch08-brew', label: '沖泡與品飲' },
    { id: 'ch08-sources', label: '資料來源' },
];

const profileCards = [
    {
        id: 'mountain',
        title: '山茶紅茶',
        subtitle: '原生山茶的森林感與山野氣質',
        image: `${IMG}/mountain-camellia-black-tea.png`,
        icon: Sprout,
        tone: 'emerald',
        source: '台灣原生山茶、山茶系材料',
        aroma: '木質、山林、野花、熟果、淡淡礦物感',
        taste: '茶湯不一定厚重，但常有層次、清涼尾韻與野韻',
        publicAngle: '適合用來理解「品種與生長環境」如何讓紅茶不只是甜香，而能帶出森林、樹木與土地感。',
    },
    {
        id: 'honey',
        title: '蜜香紅茶',
        subtitle: '生態刺激轉化出的蜜甜果香',
        image: `${IMG}/honey-aroma-black-tea.png`,
        icon: Sparkles,
        tone: 'amber',
        source: '被小綠葉蟬吸食過的茶菁',
        aroma: '蜂蜜、熟果、花香、焦糖與甜香',
        taste: '入口柔和，甜感明顯，苦澀較低時很有親和力',
        publicAngle: '適合向大眾說明：蜜香不是加蜂蜜，而是茶樹受昆蟲刺激後，搭配製茶工藝形成的自然香氣。',
    },
    {
        id: 'ruby18',
        title: '台茶18號紅玉',
        subtitle: '台灣紅茶最有辨識度的代表品種',
        image: `${IMG}/ruby-18-black-tea.png`,
        icon: Coffee,
        tone: 'red',
        source: '緬甸大葉種阿薩姆與台灣山茶育種後代',
        aroma: '肉桂、薄荷、熟果、甘蔗、焦糖',
        taste: '湯色深紅，茶湯厚實，香氣輪廓強，冷後仍有清楚骨架',
        publicAngle: '適合建立台灣紅茶的記憶點：它不是單純「濃」，而是有明確的香氣標籤與品種故事。',
    },
    {
        id: 'smallleaf',
        title: '小葉種紅茶',
        subtitle: '清雅細緻、花果感明亮的紅茶路線',
        image: `${IMG}/small-leaf-black-tea.png`,
        icon: Leaf,
        tone: 'stone',
        source: '青心烏龍、青心大冇、金萱等小葉種或中小葉品種',
        aroma: '麥芽、淡花香、甜果、蜜甜、輕焙香',
        taste: '茶湯較輕盈，口感乾淨，做得好時細緻而有回甘',
        publicAngle: '適合對照大葉種紅茶：小葉種不靠厚重感取勝，而是靠香氣細節、清甜與乾淨度。',
    },
];

const comparisonRows = [
    ['山茶紅茶', '台灣原生山茶或山茶系材料', '森林木質、山野、熟果', '中等至厚實，層次感強', '原生種、風土、山林感'],
    ['蜜香紅茶', '受小綠葉蟬吸食的茶菁', '蜂蜜、熟果、花香', '柔甜、滑順、低苦澀', '生態刺激、自然蜜香'],
    ['台茶18號紅玉', '阿薩姆血統與台灣山茶育種', '肉桂、薄荷、甘蔗、焦糖', '厚實、有張力、辨識度高', '台灣代表品種、日月潭紅茶'],
    ['小葉種紅茶', '小葉種或中小葉品種製成', '麥芽、花香、甜果、清香', '輕盈細緻、乾淨俐落', '品種對照、細緻型紅茶'],
];

const sourceLinks = [
    ['農業部茶及飲料作物改良場', 'https://www.tbrs.gov.tw/'],
    ['台茶18號資料整理', 'https://zh.wikipedia.org/wiki/%E5%8F%B0%E8%8C%B6%E5%8D%81%E5%85%AB%E8%99%9F'],
    ['台灣山茶資料整理', 'https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E5%B1%B1%E8%8C%B6'],
    ['赤科山蜜香紅茶資料整理', 'https://zh.wikipedia.org/wiki/%E8%B5%A4%E7%A7%91%E5%B1%B1%E8%9C%9C%E9%A6%99%E7%B4%85%E8%8C%B6'],
    ['台灣茶與紅茶概述', 'https://en.wikipedia.org/wiki/Taiwanese_tea'],
];

const toneClasses = {
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    amber: 'border-amber-200 bg-amber-50 text-amber-950',
    red: 'border-red-200 bg-red-50 text-red-950',
    stone: 'border-stone-200 bg-stone-100 text-stone-900',
};

function InfoCard({ icon, title, children }) {
    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                {React.createElement(icon, { size: 24 })}
            </div>
            <h3 className="text-[20px] font-extrabold text-stone-950">{title}</h3>
            <div className="mt-3 text-[17px] font-medium leading-relaxed text-stone-700">{children}</div>
        </div>
    );
}

function ProfileCard({ tea }) {
    const Icon = tea.icon;

    return (
        <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                    src={tea.image}
                    alt={`${tea.title}特色意象圖`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className="p-5 md:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-[24px] font-extrabold text-stone-950">{tea.title}</h3>
                        <p className="mt-1 text-[16px] font-bold text-stone-500">{tea.subtitle}</p>
                    </div>
                    <div className={`rounded-2xl border p-3 ${toneClasses[tea.tone]}`}>
                        <Icon size={24} />
                    </div>
                </div>
                <dl className="space-y-4 text-[16px] leading-relaxed">
                    <div>
                        <dt className="font-extrabold text-stone-950">常見來源</dt>
                        <dd className="mt-1 text-stone-650">{tea.source}</dd>
                    </div>
                    <div>
                        <dt className="font-extrabold text-stone-950">香氣線索</dt>
                        <dd className="mt-1 text-stone-650">{tea.aroma}</dd>
                    </div>
                    <div>
                        <dt className="font-extrabold text-stone-950">茶湯印象</dt>
                        <dd className="mt-1 text-stone-650">{tea.taste}</dd>
                    </div>
                </dl>
                <div className="mt-5 rounded-2xl bg-stone-50 p-4 text-[15px] font-medium leading-relaxed text-stone-700">
                    {tea.publicAngle}
                </div>
            </div>
        </article>
    );
}

export default function ChonghuaChapter08() {
    const toc = useMemo(() => TOC, []);
    const [activeId, setActiveId] = useState(toc[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) setActiveId(visible[0].target.id);
            },
            { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
        );

        toc.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [toc]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="flex gap-8">
            <nav className="hidden w-60 shrink-0 self-start lg:block lg:sticky lg:top-28" style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                <div className="museum-panel tool-surface rounded-2xl p-4 shadow-sm md:p-5">
                    <h3 className="mb-3 border-l-4 border-emerald-600 px-2 text-[18px] font-extrabold text-stone-900">
                        章節導覽
                    </h3>
                    <div className="space-y-1">
                        {toc.map(({ id, label }) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`block w-full rounded-xl border px-4 py-3 text-left text-[16px] font-bold transition-all duration-300 ${isActive
                                        ? 'border-emerald-300 bg-gradient-to-br from-emerald-100/80 to-teal-50 text-emerald-900 shadow-md ring-1 ring-emerald-200'
                                        : 'border-stone-200/60 bg-white/40 text-stone-500 hover:border-emerald-300 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-white hover:text-stone-900 hover:shadow-md'
                                        }`}
                                >
                                    <span className="block truncate">{label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            <div className="min-w-0 flex-1 space-y-12">
                <AcademySection
                    id="chonghua-08"
                    title="第08堂：台灣紅茶的風味地圖"
                    label="ACADEMY · CHONGHUA · CH08"
                    subtitle="從山茶紅茶、蜜香紅茶、台茶18號紅玉到小葉種紅茶，認識台灣紅茶的品種、產地、生態與工藝。"
                >
                    <AcademyContentBlock title="紅茶是什麼：高度氧化後形成的香氣世界" icon={BookOpen} id="ch08-intro">
                        <div className="mb-10 overflow-hidden rounded-3xl border border-stone-200 bg-stone-950 shadow-xl">
                            <div className="relative min-h-[320px] md:min-h-[460px]">
                                <ImageLightbox
                                    src={`${IMG}/black-tea-course-hero.png`}
                                    alt="台灣紅茶風味地圖主視覺"
                                    className="absolute inset-0 h-full w-full"
                                    imgClassName="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/30 to-transparent" />
                                <div className="relative z-10 flex min-h-[320px] max-w-3xl flex-col justify-end p-6 text-white md:min-h-[460px] md:p-10">
                                    <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[12px] font-black tracking-[0.22em] backdrop-blur">
                                        <Coffee size={16} />
                                        TAIWAN BLACK TEA
                                    </div>
                                    <h2 className="font-serif text-4xl font-black leading-tight md:text-6xl">
                                        紅茶不是只有濃與甜，而是一張可以閱讀的風味地圖
                                    </h2>
                                    <p className="mt-5 max-w-2xl text-[18px] font-medium leading-relaxed text-stone-100">
                                        一杯紅茶的香氣，可能來自品種血統、昆蟲刺激、山林環境、萎凋與氧化控制。理解這些線索，就能從「好喝」進一步說出「為什麼好喝」。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-stone max-w-none">
                            <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                紅茶在六大茶類中屬於高度氧化茶。茶菁採下後，經過萎凋、揉捻或揉切、氧化、乾燥等步驟，葉片中的多酚類物質被氧化轉化，形成紅茶常見的橙紅湯色、熟果香、麥芽香、甜香與厚實滋味。
                            </p>
                            <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                對一般大眾來說，紅茶最容易被理解成「香甜、溫暖、好入口」的茶。但在專業品飲上，紅茶可以再細分：有些強調大葉種的厚度，有些強調小葉種的細緻，有些來自原生山茶的野韻，有些則透過小綠葉蟬與茶樹互動產生蜜香。這些差異，正是台灣紅茶迷人的地方。
                            </p>
                        </div>

                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                            <InfoCard icon={Leaf} title="品種決定底色">
                                大葉種通常帶來較厚的茶湯、較明顯的濃度與張力；小葉種則更常表現出清香、花果感與細緻感。
                            </InfoCard>
                            <InfoCard icon={FlaskConical} title="工藝決定走向">
                                萎凋程度、揉捻強度、氧化時間與乾燥火候，都會影響香氣是否偏花果、麥芽、焦糖或熟甜。
                            </InfoCard>
                            <InfoCard icon={Compass} title="風土留下線索">
                                產地海拔、氣候、日照、濕度與茶園生態，會讓同一類紅茶呈現不同的香氣厚度與尾韻。
                            </InfoCard>
                        </div>
                    </AcademyContentBlock>

                    <AcademyContentBlock title="台灣紅茶脈絡：從山茶、水沙連到日月潭" icon={MapPin} id="ch08-taiwan">
                        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
                                <h3 className="text-[24px] font-extrabold text-stone-950">台灣紅茶的故事不是從單一茶名開始</h3>
                                <div className="mt-5 space-y-4 text-[17px] font-medium leading-relaxed text-stone-700">
                                    <p>
                                        台灣早期已有野生山茶與水沙連茶的紀錄；日治時期因國際紅茶市場與試驗研究需求，引進阿薩姆系茶樹，在魚池等地建立紅茶試驗基礎。後來台灣茶業研究單位以外來大葉種與台灣山茶資源進行育種，逐步形成今天大眾熟悉的日月潭紅茶與台茶18號紅玉。
                                    </p>
                                    <p>
                                        另一方面，台灣本來就擁有豐富的小葉種與烏龍茶品種資源。這些茶樹若以紅茶工藝製作，會呈現與阿薩姆型紅茶不同的風格：香氣較細、甜感較清、茶湯較輕盈。東部蜜香紅茶則進一步把茶園生態、昆蟲互動與製茶技術結合，成為台灣特色茶的重要代表。
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
                                <h3 className="flex items-center gap-2 text-[22px] font-extrabold text-amber-950">
                                    <CheckCircle2 size={24} />
                                    讀懂台灣紅茶的三條線
                                </h3>
                                <div className="mt-5 space-y-4">
                                    {[
                                        ['原生資源', '台灣山茶與各地山茶系材料，提供山林感、木質感與育種基礎。'],
                                        ['品種育成', '台茶18號紅玉把大葉種厚度與台灣山茶香氣特色結合，形成高度辨識度。'],
                                        ['特色製法', '小葉種紅茶、蜜香紅茶展現台灣茶農在既有茶樹與地方生態上的製茶創意。'],
                                    ].map(([title, desc]) => (
                                        <div key={title} className="rounded-2xl bg-white/70 p-4">
                                            <h4 className="font-extrabold text-stone-950">{title}</h4>
                                            <p className="mt-1 text-[16px] font-medium leading-relaxed text-stone-700">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    <AcademyContentBlock title="四種台灣紅茶特色介紹" icon={Coffee} id="ch08-profiles">
                        <div className="grid gap-6 xl:grid-cols-2">
                            {profileCards.map((tea) => (
                                <ProfileCard key={tea.id} tea={tea} />
                            ))}
                        </div>
                    </AcademyContentBlock>

                    <AcademyContentBlock title="山茶紅茶：原生山林感的紅茶表現" icon={Sprout} id="ch08-mountain">
                        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                            <ImageLightbox
                                src={`${IMG}/mountain-camellia-black-tea.png`}
                                alt="山茶紅茶意象"
                                className="overflow-hidden rounded-3xl border border-stone-200 shadow-lg"
                                imgClassName="h-full min-h-[320px] w-full object-cover"
                            />
                            <div className="space-y-5">
                                <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                    山茶紅茶的重點，不只是「用山茶做成紅茶」這件事，而是它讓紅茶出現更接近森林、木質、野花、熟果與清涼尾韻的表現。相較於商業大葉種紅茶常見的濃厚與麥芽感，山茶紅茶更值得觀察的是層次：入口可能不一定立刻爆香，但尾段常有乾淨、深沉、帶土地感的韻味。
                                </p>
                                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                    <h3 className="text-[20px] font-extrabold text-emerald-950">大眾閱讀重點</h3>
                                    <p className="mt-2 text-[17px] font-medium leading-relaxed text-stone-700">
                                        山茶紅茶適合放在「台灣原生茶樹」的脈絡中介紹。它能讓讀者理解：台灣紅茶不只有日月潭紅茶，也有來自山林原生資源的風味可能。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    <AcademyContentBlock title="蜜香紅茶：不是加蜂蜜，而是茶樹與生態的互動" icon={Sparkles} id="ch08-honey">
                        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                            <div className="space-y-5">
                                <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                    蜜香紅茶最常被誤解的地方，是以為「蜜香」來自添加蜂蜜或香料。實際上，蜜香通常與小綠葉蟬吸食茶菁有關。茶樹受到昆蟲刺激後，會產生防禦反應；後續再經過萎凋、氧化與乾燥，便可能形成蜂蜜、熟果、花香、甜香等氣味。
                                </p>
                                <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                    這類茶的美感在於「柔甜」與「自然」。做得好的蜜香紅茶，香氣不是粗重的糖味，而是像蜂蜜、熟果與花香交疊。入口若能保持滑順、低苦澀、帶回甘，就很容易讓初學者產生好感。
                                </p>
                                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                                    <h3 className="text-[20px] font-extrabold text-amber-950">介紹時可以這樣說</h3>
                                    <p className="mt-2 text-[17px] font-medium leading-relaxed text-stone-700">
                                        蜜香紅茶是一杯能把「茶園生態」喝進去的紅茶。小綠葉蟬不是單純的害蟲角色，在適當管理與製茶技術下，反而能成為特色香氣的來源。
                                    </p>
                                </div>
                            </div>
                            <ImageLightbox
                                src={`${IMG}/honey-aroma-black-tea.png`}
                                alt="蜜香紅茶意象"
                                className="overflow-hidden rounded-3xl border border-stone-200 shadow-lg"
                                imgClassName="h-full min-h-[320px] w-full object-cover"
                            />
                        </div>
                    </AcademyContentBlock>

                    <AcademyContentBlock title="台茶18號紅玉：台灣紅茶的代表性名片" icon={Coffee} id="ch08-ruby18">
                        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                            <ImageLightbox
                                src={`${IMG}/ruby-18-black-tea.png`}
                                alt="台茶18號紅玉意象"
                                className="overflow-hidden rounded-3xl border border-stone-200 shadow-lg"
                                imgClassName="h-full min-h-[320px] w-full object-cover"
                            />
                            <div className="space-y-5">
                                <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                    台茶18號又稱紅玉，是台灣紅茶最具辨識度的品種之一。它的育種背景結合了緬甸大葉種阿薩姆與台灣山茶，因此同時具備大葉種紅茶的厚度，以及台灣山茶系統帶來的特殊香氣表現。
                                </p>
                                <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                    大眾最容易記住紅玉的關鍵字，是肉桂、薄荷、甘蔗、焦糖與深紅湯色。這些香氣不一定每杯都同等明顯，仍會受到產區、季節、製茶與沖泡影響，但「清涼辛香加上厚實茶湯」是紅玉非常重要的辨識軸。
                                </p>
                                <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                                    <h3 className="text-[20px] font-extrabold text-red-950">大眾閱讀重點</h3>
                                    <p className="mt-2 text-[17px] font-medium leading-relaxed text-stone-700">
                                        紅玉適合作為台灣紅茶的入口茶款。它有清楚故事、清楚香氣、清楚產地印象，能讓讀者快速建立「台灣也有代表性紅茶品種」的認知。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AcademyContentBlock>

                    <AcademyContentBlock title="小葉種紅茶：細緻清甜的另一種紅茶表情" icon={Leaf} id="ch08-smallleaf">
                        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                            <div className="space-y-5">
                                <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                    台灣長期以烏龍茶聞名，因此茶園裡有許多適合做烏龍、包種或東方美人的小葉種與中小葉品種。當這些茶菁改以紅茶工藝製作時，會形成與大葉種紅茶不同的風格：香氣較細、湯感較輕、甜感較清，常見麥芽、花香、甜果與淡淡蜜香。
                                </p>
                                <p className="text-[18px] font-medium leading-relaxed text-stone-800">
                                    小葉種紅茶不是要模仿阿薩姆或紅玉，而是展現台灣茶樹品種與製茶師手感的另一面。它適合給不喜歡濃澀紅茶、偏好清甜細緻口感的讀者，也適合做冷泡、日常飲用或與甜點搭配。
                                </p>
                                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                                    <h3 className="text-[20px] font-extrabold text-stone-950">判斷重點</h3>
                                    <p className="mt-2 text-[17px] font-medium leading-relaxed text-stone-700">
                                        好的小葉種紅茶不應只是薄，而是要乾淨、細緻、香氣有層次，並且在尾韻留下清甜感。
                                    </p>
                                </div>
                            </div>
                            <ImageLightbox
                                src={`${IMG}/small-leaf-black-tea.png`}
                                alt="小葉種紅茶意象"
                                className="overflow-hidden rounded-3xl border border-stone-200 shadow-lg"
                                imgClassName="h-full min-h-[320px] w-full object-cover"
                            />
                        </div>
                    </AcademyContentBlock>

                    <AcademyContentBlock title="四種紅茶風味比較表" icon={Scale} id="ch08-compare">
                        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="min-w-[900px] w-full text-left text-[15px]">
                                    <thead className="bg-stone-950 text-white">
                                        <tr>
                                            <th className="px-5 py-4 font-extrabold">茶款</th>
                                            <th className="px-5 py-4 font-extrabold">主要來源</th>
                                            <th className="px-5 py-4 font-extrabold">香氣關鍵字</th>
                                            <th className="px-5 py-4 font-extrabold">茶湯印象</th>
                                            <th className="px-5 py-4 font-extrabold">對大眾的說明重點</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-100">
                                        {comparisonRows.map((row) => (
                                            <tr key={row[0]} className="align-top transition-colors hover:bg-amber-50/60">
                                                {row.map((cell, index) => (
                                                    <td key={cell} className={`px-5 py-4 leading-relaxed ${index === 0 ? 'font-extrabold text-stone-950' : 'font-medium text-stone-700'}`}>
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                            <InfoCard icon={Droplets} title="先看湯色">
                                紅茶湯色可從蜜橙、橙紅到深紅。湯色深不一定等於品質高，但能提供氧化、品種與濃度線索。
                            </InfoCard>
                            <InfoCard icon={Sparkles} title="再聞香氣">
                                先辨識大方向：花香、果香、蜜香、麥芽、木質、辛香，再觀察香氣是否自然、乾淨、持久。
                            </InfoCard>
                            <InfoCard icon={Scale} title="最後看平衡">
                                好紅茶不只香，還要兼顧甜感、厚度、澀感與尾韻。香氣漂亮但茶湯空薄，仍然不完整。
                            </InfoCard>
                        </div>
                    </AcademyContentBlock>

                    <AcademyContentBlock title="沖泡與品飲：讓紅茶特色更容易被讀懂" icon={Droplets} id="ch08-brew">
                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
                                <h3 className="text-[24px] font-extrabold text-stone-950">一般欣賞用沖泡</h3>
                                <ul className="mt-5 space-y-3 text-[17px] font-medium leading-relaxed text-stone-700">
                                    <li>水溫可抓 90-95°C，若茶菁較嫩或小葉種較細緻，可略降溫避免澀感突出。</li>
                                    <li>茶水比可先用 1g：50ml 作為入門，依茶葉條索、焙火與個人口感調整。</li>
                                    <li>第一泡先抓 60-90 秒，觀察香氣與澀感，再逐泡延長。</li>
                                </ul>
                            </div>
                            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
                                <h3 className="text-[24px] font-extrabold text-emerald-950">比較品飲建議</h3>
                                <ul className="mt-5 space-y-3 text-[17px] font-medium leading-relaxed text-stone-700">
                                    <li>同時比較時，盡量使用相同茶量、水溫、浸泡時間與杯型。</li>
                                    <li>建議順序：小葉種紅茶、蜜香紅茶、山茶紅茶、台茶18號紅玉。</li>
                                    <li>每杯只記三件事：最明顯香氣、茶湯厚薄、尾韻是否乾淨。</li>
                                </ul>
                            </div>
                        </div>

                        <div id="ch08-sources" className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
                            <h3 className="text-[24px] font-extrabold text-stone-950">資料來源與延伸閱讀</h3>
                            <p className="mt-3 text-[16px] font-medium leading-relaxed text-stone-600">
                                本頁為教學網站用的公開知識整理，內容依公開資料與茶學教學需求改寫；實際香氣仍會因產地、季節、製茶師與沖泡條件而改變。
                            </p>
                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                {sourceLinks.map(([label, href]) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-[15px] font-extrabold text-stone-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-900"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AcademyContentBlock>
                </AcademySection>
            </div>
        </div>
    );
}
