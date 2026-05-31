import React from 'react';
import { Sparkles } from 'lucide-react';
import { Section } from '../../references/ui';

function SubCard({ title, children }) {
    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 md:p-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 rounded-full bg-gradient-to-b from-amber-500 to-amber-700 shrink-0" />
                <div className="font-extrabold text-stone-900">{title}</div>
            </div>
            {children}
        </div>
    );
}

const SHAPE_TYPES = [
    {
        name: '圓器',
        desc: '這是紫砂壺最基礎、最常見的造型。它追求的是珠圓玉潤、骨肉亭勻的飽滿感與整體性，講究線條的流暢與轉折的柔和。壺嘴、壺把、壺鈕與壺身的搭配需和諧統一，充滿韻律感。經典器型如石瓢、西施、仿古等，雖形態簡約，卻最考驗製作者對器物「精氣神」的把握能力。',
    },
    {
        name: '方器',
        desc: '方器造型講究線條挺拔，輪廓周正，角度明快，給人以剛勁、穩重之感。它要求「方中寓圓」，即線條雖直，轉角處卻需圓潤過渡，避免僵硬。方器多採用鑲接法將泥片拼接而成，製作難度極高，對工藝的精準度要求一絲不苟。',
    },
    {
        name: '花器',
        desc: '花器是對自然萬物的藝術化模仿，是「師法自然」美學思想的直接體現。藝人們以松、竹、梅、瓜果等動植物為題材，將其形態、肌理、神韻融入壺的設計中，追求生動的意趣與自然的氣息。傳世的第一把紫砂壺——供春壺，相傳便是模仿寺廟中一顆銀杏樹的樹癭所作，是花器的開山鼻祖。',
    },
    {
        name: '筋紋器',
        desc: '筋紋器是將花卉（如菊花）、瓜果（如南瓜）的瓣狀紋理，進行規整化、幾何化的藝術處理。它要求壺身、壺蓋、壺嘴、壺把上的筋紋不僅要對稱、均勻、深淺一致，且要從壺鈕頂端放射而出，貫通全器，最終匯合於壺底，嚴絲合縫。這種造型對工藝的精密度和製作者的耐心是極大的考驗。',
    },
];

const MASTERWORKS = [
    {
        name: '陳鳴遠的「東陵瓜」',
        desc: '清代大師陳鳴遠所製的南瓜壺，不僅形態逼真，更富含人文典故。其名「東陵瓜」，引用了秦朝「東陵侯」邵平的故事。秦亡後，邵平不願為新朝效力，隱居種瓜，其瓜味美而聞名。陳鳴遠以此典故入壺，寄託了文人雅士不事權貴、歸隱田園的清高情懷。',
    },
    {
        name: '陳曼生的「曼生十八式」',
        desc: '清代嘉慶年間，文人陳曼生的參與，極大地提升了紫砂壺的藝術內涵。他親自設計了十八種壺式，延請當時的製壺高手楊彭年等人製作，再由自己或朋友在壺身刻上切合壺形的詩文書畫。這批被稱為「曼生十八式」的茶壺，完美融合了造型藝術與金石書畫，成為文人壺的典範，至今仍是無數藝人臨摹學習的經典。',
    },
];

export default function ZishaShape() {
    return (
        <Section id="zisha-4" title="4．器以載道：紫砂壺的造型之魂" icon={Sparkles}>
            <p>
                紫砂壺的造型藝術，是其魅力最集中的體現。它不僅種類繁多，氣象萬千，且每種造型都蘊含著獨特的美學追求與文化寓意，可謂「器以載道」。
                歷代藝人從自然萬物、幾何形態及古代器物中汲取靈感，歸納出四大基本門類。
            </p>

            <SubCard title="四大門類：萬千氣象的歸納">
                <figure className="my-4 rounded-xl overflow-hidden border border-stone-100 shadow-sm group">
                    <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                        <img
                            src="/assets/zisha/zisha_shape_geometry.png"
                            alt="Four Types of Zisha Shapes"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-white text-[10px] font-bold tracking-wider">
                            GEOMETRY &amp; FORM
                        </div>
                    </div>
                    <figcaption className="px-4 py-2 bg-stone-50 text-xs text-center text-stone-500 font-mono">
                        圓器．方器．花器．筋紋器 四大經典
                    </figcaption>
                </figure>

                <ul className="mt-4 space-y-3">
                    {SHAPE_TYPES.map((s) => (
                        <li key={s.name} className="rounded-2xl border border-stone-100 bg-stone-50/70 p-4">
                            <span className="font-extrabold text-amber-900">{s.name}：</span>
                            {s.desc}
                        </li>
                    ))}
                </ul>
            </SubCard>

            <SubCard title="經典傳承：名家與名作">
                <ul className="space-y-3">
                    {MASTERWORKS.map((m) => (
                        <li key={m.name} className="rounded-2xl border border-stone-100 bg-stone-50/70 p-4">
                            <span className="font-extrabold text-amber-900">{m.name}：</span>
                            {m.desc}
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-stone-600">正是文人的深度參與，才使得紫砂壺最終完成了從「器」到「道」的昇華。</p>
            </SubCard>
        </Section>
    );
}
