import React, { useState } from 'react';
import { ArrowRight, BookOpen, Camera, Droplets, Hammer, Images, Palette, Search, Shapes } from 'lucide-react';
import { Section } from '../../references/ui';
import ZishaInfographicsText from '../ZishaInfographicsText';
import { ExhibitImage } from '../components/ZishaShared';

const visualTopics = [
    {
        id: 'zisha-visual-shapes',
        label: '器型圖鑑',
        subtitle: '圓器、方器、花器、提梁、筋紋器',
        description: '先看壺形骨架，再理解不同器型的比例、線條與氣韻。',
        icon: Shapes,
        color: 'from-amber-700 to-orange-800',
    },
    {
        id: 'zisha-visual-craft',
        label: '成型工藝',
        subtitle: '全手工、半手工、盤築法、純手捏',
        description: '用製作方式切入，建立判斷做工與成型痕跡的基礎。',
        icon: Hammer,
        color: 'from-stone-700 to-stone-950',
    },
    {
        id: 'zisha-visual-care',
        label: '養護流程',
        subtitle: '開壺、養壺、清洗、包漿',
        description: '把日常保養拆成可操作步驟，適合課堂示範與新手複習。',
        icon: Droplets,
        color: 'from-teal-700 to-emerald-900',
    },
    {
        id: 'zisha-visual-clay-palette',
        label: '泥料色卡',
        subtitle: '紅泥、團泥、紫泥、綠泥',
        description: '從色系與泥料名稱快速建立辨識框架，避免只憑顏色判斷。',
        icon: Palette,
        color: 'from-purple-800 to-rose-900',
    },
];
const realPhotoCards = [
    {
        label: '器型 × 比例',
        title: '曼生式宜興紫砂壺',
        image: '/assets/zisha/photos/man-sheng-teapot.jpg',
        alt: '曼生式宜興紫砂壺真實照片',
        description: '以真實器物觀察壺身、流、把、鈕與題銘的位置關係，適合搭配「圓器、方器、花器」器型分類一起閱讀。',
        source: 'Wikimedia Commons：Man Sheng teapot.JPG',
        license: 'CC BY-SA 3.0',
        url: 'https://commons.wikimedia.org/wiki/File:Man_Sheng_teapot.JPG',
    },
    {
        label: '養壺 × 情境',
        title: '茶席使用情境',
        image: '/assets/zisha/photos/chinese-tea-ceremony.jpg',
        alt: '茶席泡茶情境真實照片',
        description: '用實際茶席帶出「開壺、養壺、清洗、包漿」不是口訣，而是長期泡茶、擦拭與通風存放累積出的狀態。',
        source: 'Wikimedia Commons：Chinese tea ceremony.jpg',
        license: 'CC BY-SA 3.0',
        url: 'https://commons.wikimedia.org/wiki/File:Chinese_tea_ceremony.jpg',
    },
];
export default function ZishaVisuals() {
    const [visualMode, setVisualMode] = useState('text');

    const openDetails = (id) => {
        if (typeof window === 'undefined') return;
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <Section id="zisha-visual" title="紫砂圖解速查：器型 × 工藝 × 養護 × 泥料" icon={BookOpen}>
            <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-br from-[#fff8ea] via-white to-stone-100 shadow-sm">
                <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="p-6 md:p-8 lg:p-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-extrabold tracking-[0.22em] text-amber-800">
                            ZISHA VISUAL INDEX
                        </div>
                        <h3 className="mt-5 text-3xl font-black leading-tight text-stone-950 md:text-4xl">
                            一張圖看懂紫砂壺，
                            <span className="block text-amber-800">一組卡建立備課脈絡</span>
                        </h3>
                        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-stone-700 md:text-base">
                            這一區把紫砂壺的器型、工藝、養護與泥料整理成「可搜尋文字展板」與「可放大原圖展板」。
                            上課時可先用圖卡建立印象，備課時再展開文字版查找細節。
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={() => setVisualMode('text')}
                                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-extrabold transition-colors ${visualMode === 'text'
                                    ? 'border-stone-900 bg-stone-900 text-white'
                                    : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                                    }`}
                            >
                                <Search size={16} />
                                文字版查詢
                            </button>
                            <button
                                type="button"
                                onClick={() => setVisualMode('images')}
                                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-extrabold transition-colors ${visualMode === 'images'
                                    ? 'border-stone-900 bg-stone-900 text-white'
                                    : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                                    }`}
                            >
                                <Images size={16} />
                                原圖展板
                            </button>
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {visualTopics.map((topic) => {
                                const Icon = topic.icon;
                                return (
                                    <button
                                        key={topic.id}
                                        type="button"
                                        onClick={() => openDetails(topic.id)}
                                        className="group rounded-2xl border border-stone-200 bg-white/85 p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${topic.color} text-white shadow-sm`}>
                                                <Icon size={20} />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-black text-stone-950">{topic.label}</div>
                                                <div className="mt-1 text-xs font-bold text-stone-500">{topic.subtitle}</div>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-stone-600">{topic.description}</p>
                                        <div className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-amber-800">
                                            前往文字展板
                                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative min-h-[360px] border-t border-amber-100 bg-stone-950 lg:border-l lg:border-t-0">
                        <img
                            src="/assets/zisha/zisha_intro_hero.png"
                            alt="紫砂壺教學主視覺"
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                            <div className="text-xs font-extrabold tracking-[0.24em] text-amber-200">TEACHING IMAGE</div>
                            <div className="mt-2 text-2xl font-black">紫砂壺・泥料・工藝速查</div>
                            <p className="mt-2 max-w-md text-sm leading-6 text-stone-200">
                                搭配下方圖文展板，能快速從「看造型」進入「懂工藝、會養護、辨泥料」。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.22em] text-amber-700">
                            <Camera size={15} />
                            REAL PHOTO OBSERVATION
                        </div>
                        <h3 className="mt-2 text-2xl font-black text-stone-950">真實照片觀察區</h3>
                    </div>
                    <p className="max-w-2xl text-sm font-semibold leading-6 text-stone-600">
                        先用照片建立「真壺與茶席」的視覺印象，再往下讀文字展板；圖片採可查來源，不使用來路不明素材。
                    </p>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                    {realPhotoCards.map((photo) => (
                        <article key={photo.title} className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-stone-50">
                            <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                                <div className="relative min-h-[220px] overflow-hidden bg-stone-200">
                                    <img
                                        src={photo.image}
                                        alt={photo.alt}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-stone-800 shadow-sm">
                                        {photo.label}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h4 className="text-xl font-black text-stone-950">{photo.title}</h4>
                                    <p className="mt-3 text-sm leading-7 text-stone-700">{photo.description}</p>
                                    <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-3 text-xs leading-5 text-stone-600">
                                        <div className="font-extrabold text-stone-900">{photo.source}</div>
                                        <div className="mt-1">授權：{photo.license}</div>
                                        <a
                                            href={photo.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-2 inline-flex font-extrabold text-amber-800 hover:text-amber-900"
                                        >
                                            查看來源頁
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {visualMode === 'text' ? (
                <div className="mt-6 space-y-6">
                    <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <div className="text-xs font-extrabold tracking-widest text-amber-700">TEXT BOARD INDEX</div>
                                <div className="mt-1 text-xl font-black text-stone-950">文字展板快速跳轉</div>
                            </div>
                            <div className="text-sm font-medium text-stone-500">適合搜尋、引用與課堂備課</div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {[
                                { id: 'zisha-visual-shapes', label: '器型' },
                                { id: 'zisha-visual-craft', label: '工藝' },
                                { id: 'zisha-visual-care', label: '養護' },
                                { id: 'zisha-visual-clay-palette', label: '泥料色卡' },
                                { id: 'zisha-visual-decoration', label: '裝飾工藝' },
                                { id: 'zisha-visual-20-clays', label: '20 個泥料' },
                                { id: 'zisha-visual-cheatsheet', label: '總覽圖卡' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => openDetails(item.id)}
                                    className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-3 text-left transition-colors hover:border-amber-300 hover:bg-amber-50"
                                >
                                    <span className="text-sm font-bold text-stone-900">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <ZishaInfographicsText />
                </div>
            ) : (
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <ExhibitImage title="看懂秒變資深紫砂壺高手（總覽）" src="/assets/zisha/infographics/zisha-cheatsheet.jpg" />
                    <ExhibitImage title="紫砂壺工藝大全" src="/assets/zisha/infographics/zisha-craft.jpg" />
                    <ExhibitImage title="紫砂壺養護大全" src="/assets/zisha/infographics/zisha-care.jpg" />
                    <ExhibitImage title="紫砂壺泥料大全（色卡）" src="/assets/zisha/infographics/zisha-clay-palette.jpg" />
                    <ExhibitImage title="裝飾工藝（1）：絞泥／鏤雕／鋪砂" src="/assets/zisha/infographics/zisha-decoration-a.jpg" />
                    <ExhibitImage title="裝飾工藝（2）：陶刻／點彩／泥繪" src="/assets/zisha/infographics/zisha-decoration-b.jpg" />
                    <ExhibitImage title="裝飾工藝（3）：描金／竹編／彩繪" src="/assets/zisha/infographics/zisha-decoration-c.jpg" />
                    <ExhibitImage title="裝飾工藝（4）：貼花／包金包銀／冰紋" src="/assets/zisha/infographics/zisha-decoration-d.jpg" />
                    <ExhibitImage title="紫砂壺器型大全（圖鑑）" src="/assets/zisha/infographics/zisha-shapes.jpg" />
                    <ExhibitImage title="買紫砂必懂的 20 個泥料（總覽）" src="/assets/zisha/infographics/zisha-20-clays-overview.jpg" />
                    <ExhibitImage
                        title="買紫砂必懂的 20 個泥料（紫泥/清水泥/紅皮龍/底槽青/烏泥）"
                        src="/assets/zisha/infographics/zisha-20-clays-a.jpg"
                    />
                    <ExhibitImage title="買紫砂必懂的 20 個泥料（天青/青灰紫泥/紅泥/朱泥/大紅袍）" src="/assets/zisha/infographics/zisha-20-clays-b.jpg" />
                    <ExhibitImage title="買紫砂必懂的 20 個泥料（降坡泥/本山綠/梨皮泥/共生礦）" src="/assets/zisha/infographics/zisha-20-clays-c.jpg" />
                    <ExhibitImage title="買紫砂必懂的 20 個泥料（本山段/老段泥/青灰段/黃金段/芝麻段）" src="/assets/zisha/infographics/zisha-20-clays-d.jpg" />
                </div>
            )}
        </Section>
    );
}




