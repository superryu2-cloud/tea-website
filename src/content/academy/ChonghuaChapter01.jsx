import React from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import ImageLightbox from '../../components/ImageLightbox';
import { BookOpen, Coffee, Palette, Layout, Award, Layers, Droplets, Package, Flame, Grid } from 'lucide-react';

const IMG = {
    cover: '/images/academy/chonghua-chapter01/cover_teaware.jpg',
    teaArtSetup: '/images/academy/chonghua-chapter01/tea_art_setup.jpg',
    teapotStand: '/images/academy/chonghua-chapter01/teapot_stand.jpg',
    foreword: '/images/academy/chonghua-chapter01/tea_space_foreword.jpg',
    teapotTypes: '/images/academy/chonghua-chapter01/teapot_types.jpg',
    teacupSet: '/images/academy/chonghua-chapter01/teacup_set.jpg',
    fairCup: '/images/academy/chonghua-chapter01/fair_cup.jpg',
    teaTools: '/images/academy/chonghua-chapter01/tea_tools.jpg',
    waterKettle: '/images/academy/chonghua-chapter01/water_kettle.jpg',
    layoutDiagram: '/images/academy/chonghua-chapter01/layout_diagram.jpg',
};

/* ── 可點擊放大圖片（含 caption） ── */
function ClickImg({ src, alt, caption, openLightbox }) {
    return (
        <div
            className="rounded-2xl overflow-hidden shadow-lg group cursor-zoom-in"
            role="button" tabIndex={0}
            onClick={() => openLightbox(src, alt)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(src, alt); } }}
            aria-label={`放大查看 ${alt}`}
        >
            <img src={src} alt={alt}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-600" />
            {caption && (
                <div className="bg-teal-50 border-t border-teal-100 py-2.5 px-4 text-center">
                    <p className="font-sans text-[15px] text-stone-500">{caption}</p>
                </div>
            )}
        </div>
    );
}

/* ── 器具編號小卡 ── */
function ItemCard({ num, title, children, accent = 'teal' }) {
    const colors = {
        teal: 'bg-teal-500 text-white',
        emerald: 'bg-emerald-500 text-white',
        amber: 'bg-amber-500 text-white',
    };
    return (
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className={`flex items-center gap-3 px-5 pt-5 pb-3`}>
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold font-sans ${colors[accent]}`}>
                    {num}
                </span>
                <h4 className="font-sans text-[20px] font-bold text-stone-900">{title}</h4>
            </div>
            <div className="px-5 pb-5">
                {children}
            </div>
        </div>
    );
}

/* ── 條列項目 ── */
function BulletList({ items, color = 'teal' }) {
    const dot = { teal: 'bg-teal-400', emerald: 'bg-emerald-400', amber: 'bg-amber-400' };
    return (
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-[7px] shrink-0 ${dot[color]}`} />
                    <span className="font-sans text-[17px] text-stone-700 leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    );
}

/* ── 分隔小標 ── */
function SubLabel({ children }) {
    return (
        <p className="font-sans text-[14px] font-semibold tracking-widest text-teal-600 uppercase mb-3">{children}</p>
    );
}

export default function ChonghuaChapter01() {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [lightboxImage, setLightboxImage] = React.useState({ src: '', alt: '' });
    const openLightbox = (src, alt) => { setLightboxImage({ src, alt }); setLightboxOpen(true); };

    return (
        <div className="space-y-12">
            <ImageLightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} imageSrc={lightboxImage.src} altText={lightboxImage.alt} />

            <AcademySection
                id="chonghua-01"
                title="第陸章　茶具"
                label="ACADEMY · CHONGHUA · CH01"
                subtitle="茶具的佈置與搭配"
            >
                {/* ══════════════════════════════
                    封面橫幅
                ══════════════════════════════ */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl mb-4 cursor-zoom-in group"
                    role="button" tabIndex={0}
                    onClick={() => openLightbox(IMG.cover, '第陸章 茶具')}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(IMG.cover, '第陸章 茶具'); } }}
                    aria-label="放大查看封面"
                >
                    <img src={IMG.cover} alt="第陸章 茶具 — 茶具的佈置與搭配"
                        className="w-full h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-900/20 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-4">
                            <span className="font-sans text-[13px] font-semibold tracking-widest text-white/90 uppercase">第陸章</span>
                        </div>
                        <h2 className="font-sans text-[36px] md:text-[44px] font-extrabold text-white leading-tight drop-shadow-xl">茶具</h2>
                        <p className="font-sans text-[18px] text-white/80 mt-2 drop-shadow-md">—— 茶具的佈置與搭配 ——</p>
                    </div>
                </div>

                {/* ══════════════════════════════
                    前言
                ══════════════════════════════ */}
                <AcademyContentBlock title="前言" icon={BookOpen}>
                    <div className="grid md:grid-cols-5 gap-8 items-start">
                        {/* 文字 */}
                        <div className="md:col-span-2 space-y-5">
                            <div className="h-1 w-12 bg-teal-400 rounded-full" />
                            <p className="font-sans text-[17px] text-stone-700 leading-[1.9]">
                                茶器的使用並非只是泡茶，品茗所必須，也是茶道塑造風格、思想的媒介。
                            </p>
                            <p className="font-sans text-[17px] text-stone-700 leading-[1.9]">
                                應用適當得體的器具，沖製出完美的茶湯為茶人的基本條件，茶道途徑重視實踐參與。
                            </p>
                            <blockquote className="border-l-4 border-teal-400 pl-5 py-1">
                                <p className="font-sans text-[17px] text-teal-700 font-medium italic leading-relaxed">
                                    「有形的藉由物呈現，無形的則由茶人的涵養來抒發。」
                                </p>
                            </blockquote>
                        </div>
                        {/* 圖片 */}
                        <div className="md:col-span-3">
                            <ClickImg src={IMG.foreword} alt="茶席空間佈置" caption="茶席空間佈置 — 有形的器物與無形的涵養" openLightbox={openLightbox} />
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* ══════════════════════════════
                    什麼是茶藝
                ══════════════════════════════ */}
                <AcademyContentBlock title="什麼是茶藝" icon={Coffee}>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-5">
                            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
                                <SubLabel>核心定義</SubLabel>
                                <p className="font-sans text-[17px] text-stone-800 leading-[1.9] font-medium">
                                    以茶為本質，透過藝術的形式、揭示的過程，作用於茶湯。
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                                <SubLabel>揭示的細節</SubLabel>
                                <p className="font-sans text-[17px] text-stone-700 leading-[1.9] mb-3">
                                    包括煮沖泡器、配件、空間布置的擺件，乃至於聽到的音樂、看到的燈光、空間，都是茶湯藝術的形式。
                                </p>
                                <p className="font-sans text-[17px] text-stone-600 italic border-l-4 border-teal-200 pl-4">
                                    但是，最後會回到茶湯。
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                                <SubLabel>茶藝的形式，可大可小</SubLabel>
                                <p className="font-sans text-[17px] text-stone-700 leading-[1.9]">
                                    從一把壺、一個杯，到一壺六杯、加上勻杯、茶倉、茶則、水盂、席方……可繁可簡。
                                </p>
                            </div>
                        </div>

                        <ClickImg src={IMG.teaArtSetup} alt="茶藝佈置" caption="茶藝佈置 — 可繁可簡" openLightbox={openLightbox} />
                    </div>
                </AcademyContentBlock>

                {/* ══════════════════════════════
                    因茶擇器
                ══════════════════════════════ */}
                <AcademyContentBlock title="因茶擇器" icon={Award}>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 mb-8">
                        <p className="font-sans text-[17px] text-stone-700 leading-relaxed text-center">
                            根據茶葉的特質，來挑選最能襯托其<span className="font-semibold text-amber-800">香氣、滋味與美感</span>的器具。
                        </p>
                    </div>

                    <ClickImg src={IMG.teapotTypes} alt="因茶擇器 — 各式壺型" caption="" openLightbox={openLightbox} />

                    <div className="grid md:grid-cols-3 gap-5 mt-8">
                        {[
                            { char: '瓷', name: '瓷壺', color: 'from-amber-400 to-yellow-300', bg: 'bg-amber-50', text: '質地細膩，不吸香氣，忠實呈現茶湯原味，適合清香型茶葉。' },
                            { char: '紫', name: '紫砂壺', color: 'from-orange-500 to-amber-400', bg: 'bg-orange-50', text: '雙氣孔結構，透氣性佳，能吸附茶香，越養越潤，適合濃香型茶葉。' },
                            { char: '玻', name: '玻璃壺', color: 'from-cyan-400 to-blue-400', bg: 'bg-cyan-50', text: '透明可觀賞茶葉舒展與湯色變化，適合綠茶、花茶等觀賞性茶類。' },
                        ].map(({ char, name, color, bg, text }) => (
                            <div key={name} className={`${bg} rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow`}>
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}>
                                    <span className="font-sans text-[22px] font-bold text-white">{char}</span>
                                </div>
                                <h4 className="font-sans text-[19px] font-bold text-stone-900 mb-2">{name}</h4>
                                <p className="font-sans text-[17px] text-stone-600 leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>
                </AcademyContentBlock>

                {/* ══════════════════════════════
                    主體的舞台
                ══════════════════════════════ */}
                <AcademyContentBlock title="主體的舞台" icon={Layout}>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* (1) 桌巾 */}
                        <ItemCard num="1" title="桌巾" accent="teal">
                            <BulletList items={[
                                '顏色（雙色面）',
                                '裝置藝術的觀念',
                                '色調：咖啡、黃、綠、黑藍',
                                '做法：以桌巾坐大舞台',
                            ]} />
                        </ItemCard>

                        {/* (2) 席方 */}
                        <ItemCard num="2" title="席方" accent="teal">
                            <p className="font-sans text-[17px] text-stone-600 mb-4">有布席方、木席方、竹席方等。</p>
                            <SubLabel>條件</SubLabel>
                            <div className="space-y-2.5">
                                {[
                                    ['A', '穩定'],
                                    ['B', '規範：主人的舞台（開放／不開放）'],
                                    ['C', '美感的呈現，造型與色調'],
                                ].map(([k, v]) => (
                                    <div key={k} className="flex items-start gap-3">
                                        <span className="font-sans text-[14px] font-bold text-teal-600 bg-teal-50 rounded px-1.5 py-0.5 shrink-0 mt-0.5">{k}</span>
                                        <span className="font-sans text-[17px] text-stone-700">{v}</span>
                                    </div>
                                ))}
                                <div className="flex items-start gap-3">
                                    <span className="font-sans text-[14px] font-bold text-teal-600 bg-teal-50 rounded px-1.5 py-0.5 shrink-0 mt-0.5">D</span>
                                    <div>
                                        <p className="font-sans text-[17px] text-stone-700 mb-1">材質</p>
                                        <div className="space-y-1 ml-3">
                                            <p className="font-sans text-[16px] text-stone-600">a. 柔軟不傷害其它器具（安全）</p>
                                            <p className="font-sans text-[16px] text-stone-600">b. 承載一切，凸顯一切</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ItemCard>
                    </div>
                </AcademyContentBlock>

                {/* ══════════════════════════════
                    壺的舞台 (3) 壺承
                ══════════════════════════════ */}
                <AcademyContentBlock title="壺的舞台" icon={Layers}>
                    <div className="grid md:grid-cols-5 gap-8 items-start">
                        <div className="md:col-span-3 space-y-4">
                            <ItemCard num="3" title="壺承" accent="emerald">
                                <div className="space-y-3">
                                    {[
                                        ['①', '穩定', '四平八穩與席方的接觸。'],
                                        ['②', '高度', '高度符合人體功能，不吊手（高台壺承、平台壺承）。'],
                                        ['③', '整理', '事茶過程中可做整理。'],
                                    ].map(([n, k, v]) => (
                                        <div key={n} className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl">
                                            <span className="text-emerald-600 font-bold text-[17px] shrink-0">{n}</span>
                                            <div>
                                                <span className="font-sans text-[17px] font-semibold text-stone-900">{k}：</span>
                                                <span className="font-sans text-[17px] text-stone-700">{v}</span>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="p-3 bg-stone-50 rounded-xl">
                                        <p className="font-sans text-[17px] text-stone-900 font-semibold mb-2">④ 造型</p>
                                        <div className="space-y-1 ml-4">
                                            <p className="font-sans text-[17px] text-stone-700">A. 以圓形略帶變化，稍具揚角</p>
                                            <p className="font-sans text-[17px] text-stone-700">B. 壺承與流嘴、壺把不衝突</p>
                                        </div>
                                    </div>

                                    <div className="p-3 bg-stone-50 rounded-xl">
                                        <p className="font-sans text-[17px] text-stone-900 font-semibold mb-2">⑤ 顏色</p>
                                        <div className="space-y-1 ml-4">
                                            <p className="font-sans text-[17px] text-stone-700">A. 可與席方同色系，不凸顯，但可襯托主沖茶器</p>
                                            <p className="font-sans text-[17px] text-stone-700">B. 可與席方相異</p>
                                        </div>
                                    </div>
                                </div>
                            </ItemCard>
                        </div>

                        <div className="md:col-span-2">
                            <ClickImg src={IMG.teapotStand} alt="壺承與壺的搭配" caption="壺承 — 壺的舞台" openLightbox={openLightbox} />
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* ══════════════════════════════
                    飲杯與杯托 (4)(5)
                ══════════════════════════════ */}
                <AcademyContentBlock title="飲杯與杯托" icon={Coffee}>
                    <div className="grid md:grid-cols-5 gap-8 items-start">
                        <div className="md:col-span-2">
                            <ClickImg src={IMG.teacupSet} alt="飲杯與茶席配置" caption="飲杯與茶席配置" openLightbox={openLightbox} />
                        </div>

                        <div className="md:col-span-3 space-y-5">
                            <ItemCard num="4" title="飲杯" accent="teal">
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {['① 降溫', '② 品香', '③ 衛生', '④ 質量感', '⑤ 觸感（玩賞性）', '⑥ 穩定性', '⑦ 不宜太薄（易刮利）'].map((t) => (
                                        <div key={t} className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                                            <span className="font-sans text-[15px] text-stone-700">{t}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-100">
                                    <p className="font-sans text-[17px] text-stone-700 leading-relaxed">
                                        <span className="font-semibold text-stone-900">⑧ </span>
                                        杯色須與壺承協調，在視覺上與功能上能同時具備。
                                    </p>
                                </div>
                            </ItemCard>

                            <ItemCard num="5" title="杯托" accent="teal">
                                <BulletList items={['① 高度', '② 穩定度', '③ 黏著']} />
                            </ItemCard>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* ══════════════════════════════
                    勻杯 (6)
                ══════════════════════════════ */}
                <AcademyContentBlock title="勻杯" icon={Droplets}>
                    <div className="grid md:grid-cols-5 gap-8 items-start">
                        <div className="md:col-span-3">
                            <ItemCard num="6" title="勻杯　分奉茶湯" accent="teal">
                                <div className="space-y-4 mt-2">
                                    <div>
                                        <SubLabel>① 形制</SubLabel>
                                        <p className="font-sans text-[17px] text-stone-700 mb-3">與茶杯、壺承可以搭配協調使用：</p>
                                        <div className="space-y-2 ml-4">
                                            <div className="flex items-start gap-3">
                                                <span className="font-sans text-[14px] font-bold text-teal-600 bg-teal-50 rounded px-1.5 py-0.5 shrink-0">A</span>
                                                <span className="font-sans text-[17px] text-stone-700">勻杯不能比杯子低</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="font-sans text-[14px] font-bold text-teal-600 bg-teal-50 rounded px-1.5 py-0.5 shrink-0">B</span>
                                                <span className="font-sans text-[17px] text-stone-700">勻杯不能高於壺</span>
                                            </div>
                                        </div>
                                        <p className="font-sans text-[15px] text-stone-500 italic mt-2 ml-4">
                                            置於壺承內的高度，主從須分，相輔相成。
                                        </p>
                                    </div>
                                    <div className="h-px bg-stone-100" />
                                    <BulletList items={[
                                        '② 顏色：勻杯為飲器的延伸，顏色可相同',
                                        '③ 斷水須順暢',
                                        '④ 容量配合',
                                    ]} />
                                </div>
                            </ItemCard>
                        </div>

                        <div className="md:col-span-2">
                            <ClickImg src={IMG.fairCup} alt="勻杯分奉茶湯" caption="勻杯 — 分奉茶湯" openLightbox={openLightbox} />
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* ══════════════════════════════
                    茶道輔助器具 (7)~(10) (12)~(14)
                ══════════════════════════════ */}
                <AcademyContentBlock title="茶道輔助器具" icon={Palette}>
                    <div className="grid md:grid-cols-5 gap-8 items-start mb-10">
                        <div className="md:col-span-3 space-y-4">
                            <ItemCard num="7" title="茶撥" accent="emerald">
                                <p className="font-sans text-[17px] text-stone-700 leading-relaxed">
                                    竹製為佳，上下有節，精神象徵，可以理茶之用。
                                </p>
                            </ItemCard>

                            <ItemCard num="8" title="茶掏" accent="emerald">
                                <p className="font-sans text-[17px] text-stone-700">竹製為佳。</p>
                                <p className="font-sans text-[15px] text-stone-500 italic mt-1">（茶撥及茶掏合稱茶理）</p>
                            </ItemCard>

                            <ItemCard num="9" title="茶荷" accent="emerald">
                                <p className="font-sans text-[17px] text-stone-700 leading-relaxed">
                                    線條流暢，不宜太大，顏色需考慮與茶席搭配。
                                </p>
                            </ItemCard>

                            <ItemCard num="10" title="茶則" accent="emerald">
                                <SubLabel>形制</SubLabel>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span className="font-sans text-[17px] text-stone-700">① 內斂</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span className="font-sans text-[17px] text-stone-700">② 雅氣</span>
                                    </div>
                                </div>
                            </ItemCard>
                        </div>

                        <div className="md:col-span-2">
                            <ClickImg src={IMG.teaTools} alt="茶道輔助器具操作實景" caption="茶道輔助器具操作實景" openLightbox={openLightbox} />
                        </div>
                    </div>

                    {/* 分割線 */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-px bg-stone-200" />
                        <span className="font-sans text-[13px] font-bold text-stone-400 tracking-widest uppercase">其他器具</span>
                        <div className="flex-1 h-px bg-stone-200" />
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 items-start">
                        <div className="md:col-span-3 space-y-4">
                            <ItemCard num="12" title="水盂" accent="teal">
                                <BulletList items={[
                                    '展演：不能過大，形制須優雅',
                                    '因茶聚會可考慮放大',
                                ]} />
                            </ItemCard>

                            <ItemCard num="13" title="茶倉" accent="teal">
                                <p className="font-sans text-[17px] text-stone-700">易掀蓋且密和度高。</p>
                            </ItemCard>

                            <ItemCard num="14" title="燒水器" accent="teal">
                                <p className="font-sans text-[17px] text-stone-700">以容量適中，不宜太大。</p>
                            </ItemCard>
                        </div>

                        <div className="md:col-span-2">
                            <ClickImg src={IMG.waterKettle} alt="水盂、茶倉、燒水器" caption="水盂、茶倉、燒水器" openLightbox={openLightbox} />
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* ══════════════════════════════
                    茶席佈置位圖
                ══════════════════════════════ */}
                <AcademyContentBlock title="茶席佈置位圖" icon={Grid}>
                    <ClickImg src={IMG.layoutDiagram} alt="茶席佈置位圖 — 各器具擺放位置" caption="點擊可放大查看" openLightbox={openLightbox} />

                    <div className="mt-8 grid md:grid-cols-2 gap-4">
                        {[
                            { code: 'G', label: '席方', desc: '為茶席的載體，離桌緣一食指的距離。' },
                            { code: 'B', label: '壺承 · 壺墊 · 茶壺', desc: '壺承上置壺墊，將茶壺置其上，茶壺放在事茶者的正前方。' },
                            { code: 'E', label: '蓋置', desc: '置於壺承的右下方 45°。' },
                            { code: 'F', label: '茶巾', desc: '置於事茶者右下壺承 45°。' },
                            { code: 'D', label: '勻杯', desc: '於壺的右上（45～30°）或平行。' },
                            { code: 'I', label: '茶則 · 茶理', desc: '於壺承右方。' },
                            { code: 'J', label: '茶荷', desc: '於壺的左上方 45°。' },
                            { code: 'A', label: '茶倉', desc: '於茶荷左上方 45°。' },
                            { code: 'C', label: '水盂', desc: '於茶席的最左上、左下方、右上方或右下方皆可。彈性最大，可依茶席整體比例平衡調整，甚至考慮背景協調。' },
                            { code: 'K', label: '煮水器', desc: '視茶席大小與煮水器比例，小可置於茶席上；大則備小几置放。' },
                        ].map(({ code, label, desc }) => (
                            <div key={code} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold font-sans text-[15px] shrink-0 shadow">
                                    {code}
                                </div>
                                <div>
                                    <p className="font-sans text-[17px] font-bold text-stone-900">{label}</p>
                                    <p className="font-sans text-[15px] text-stone-600 leading-relaxed mt-0.5">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AcademyContentBlock>

            </AcademySection>
        </div>
    );
}
