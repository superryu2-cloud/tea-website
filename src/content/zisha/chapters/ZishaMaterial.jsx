import React from 'react';
import { Palette } from 'lucide-react';
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

// 三大泥料色卡數據
const CLAY_TYPES = [
    {
        name: '紫泥',
        en: 'Purple Clay',
        badge: 'bg-[#7c4a4a]/15 text-[#5c2e2e] border-[#7c4a4a]/25',
        dot: 'bg-[#7c4a4a]',
        desc: '紫泥是紫砂礦中的絕對主力，約佔總儲量的八成。其富含高鐵量，燒成後色澤沉穩、氣質古樸。紫泥的可塑性強，穩定性好，成型範圍寬廣，最符合紫砂特有的拍打成型工藝。其溫潤厚重的質感，被鑑賞家們詩意地比作一位閱歷豐富、「厚德載人」的中年男子，給人以沉穩可靠之感，是最大眾化的紫砂泥料。',
    },
    {
        name: '綠泥',
        en: 'Green Clay',
        badge: 'bg-amber-50 text-amber-900 border-amber-200',
        dot: 'bg-amber-500',
        desc: '綠泥在原礦時並非鮮綠色，而是呈現微青綠色，燒成後則變為米黃色。它是黃龍山礦區特有的珍稀泥料，因此也被稱為「本山綠」。綠泥質地細膩嬌嫩，但可塑性較差，燒製時極易開裂，成品率較低。其雅致柔美的質感，宛如一位「亭亭玉立、出水芙蓉般」的少女，深受壺友喜愛。',
    },
    {
        name: '紅泥',
        en: 'Red Clay',
        badge: 'bg-red-50 text-red-900 border-red-200',
        dot: 'bg-red-600',
        desc: '紅泥燒成後結構緻密，幾近玻璃相，透氣性相對較弱。其中最為人稱道的「大紅袍」泥料，相傳其名源於明代官員將宜興紅泥壺帶至潮汕一帶，專門用以冲泡大紅袍茶，久而久之，人們便以茶名來命名這種珍稀的泥料。其色澤鮮豔高雅，被比作一位「待嫁的大家閨秀」，華麗而不失端莊。',
    },
];

const PROCESS_STEPS = [
    { label: '揀選', desc: '從開採出的原礦中，根據需求挑選出品質優良、剔除雜質的礦塊。' },
    { label: '風化', desc: '將礦石置於露天，經受日曬雨淋，使其自然碎裂、鬆化，這個過程通常需要數月甚至數年，有助於改善泥性、去除有害物質。' },
    { label: '調配', desc: '根據不同泥料的特性（如軟硬度、顆粒感、燒成效果）進行混合調配，以達到理想的可塑性與藝術效果。' },
    { label: '粉碎', desc: '將風化、調配好的泥塊進行粉碎，並過篩以得到所需粗細的顆粒。' },
    { label: '陳腐（養土）', desc: '將粉碎後的泥料加水滋潤，然後置於陰濕處進行長時間的「陳腐」，也稱「養土」。此過程能使泥料中的有機物充分分解，增加其黏性與可塑性。' },
    { label: '練泥', desc: '最後通過反覆捶打、揉捏，排出泥料中的空氣，使其結構更加均勻、緊實，成為最終可用於製壺的「熟泥」。' },
];

export default function ZishaMaterial() {
    return (
        <Section id="zisha-2" title="2．五色斑斕：紫砂的材質美學" icon={Palette}>
            <p>
                紫砂之美，始於泥料。它不僅是工藝的基礎，其本身的多樣性、獨特性以及經過精心配製後呈現的萬千氣象，就構成了一種核心的美學。理解紫砂壺，
                必須先理解構成其血肉的「五色土」。本章節將深入解析紫砂泥的分類、特性與處理工序。
            </p>

            <SubCard title="三大類型：紫、綠、紅的詩意">
                <figure className="my-4 rounded-xl overflow-hidden border border-stone-100 shadow-sm group">
                    <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                        <img
                            src="/assets/zisha/zisha_material_palette.png"
                            alt="Yixing Clay Raw Ore Palette"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-white text-[10px] font-bold tracking-wider">
                            RAW ORE PALETTE
                        </div>
                    </div>
                    <figcaption className="px-4 py-2 bg-stone-50 text-xs text-center text-stone-500 font-mono">
                        紫泥．綠泥．紅泥 原標本
                    </figcaption>
                </figure>

                <p className="mt-2 mb-4">
                    宜興紫砂是對當地一類特有陶土的統稱，其原礦外觀呈紫色，故而得名。根據其主要構成與燒成效果，大致可分為三大基本類型：紫泥、綠泥、紅泥。
                </p>

                <div className="grid gap-3 md:grid-cols-3">
                    {CLAY_TYPES.map((clay) => (
                        <div key={clay.name} className="rounded-2xl border border-stone-100 bg-stone-50/60 p-4 flex flex-col gap-2">
                            <div className={`inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border text-xs font-extrabold ${clay.badge}`}>
                                <span className={`w-2 h-2 rounded-full ${clay.dot}`} />
                                {clay.name} · {clay.en}
                            </div>
                            <p className="text-sm text-stone-600 leading-relaxed">{clay.desc}</p>
                        </div>
                    ))}
                </div>
            </SubCard>

            <SubCard title="從礦石到陶泥：繁複的處理工序">
                <p className="mb-4">
                    從深埋地下的堅硬礦石，到陶藝家手中溫潤可塑的陶泥，需要經過一系列嚴謹而耗時的傳統工序。這個過程不僅是對材料的物理改造，
                    更是一種順應自然的「喚醒」。
                </p>
                <ol className="space-y-3">
                    {PROCESS_STEPS.map((step, i) => (
                        <li key={step.label} className="flex gap-3">
                            <span className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 text-amber-900 text-xs font-extrabold flex items-center justify-center mt-0.5">
                                {i + 1}
                            </span>
                            <span>
                                <span className="font-bold text-stone-900">{step.label}：</span>
                                {step.desc}
                            </span>
                        </li>
                    ))}
                </ol>
                <p className="mt-4">每一塊優質的紫砂泥料，都凝聚著順應天時與遵循古法的匠心，來之不易。</p>
                <p className="mt-3">有了精良的泥料，還需憑藉獨特的成型技藝，才能將其塑造成器。</p>
            </SubCard>
        </Section>
    );
}
