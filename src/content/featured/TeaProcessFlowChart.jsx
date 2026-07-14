import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

const PROCESS_GROUPS = [
    {
        id: 'green',
        label: '不發酵茶',
        summary: '以殺菁快速停止氧化，保留茶葉清鮮、鮮綠與爽口感。',
        range: '氧化程度低',
        accent: 'emerald',
        steps: [
            { id: 'g0', label: '茶菁', type: '原料' },
            { id: 'g1', label: '殺菁', type: '關鍵' },
            { id: 'g2', label: '揉捻', type: '成形' },
            { id: 'g3', label: '乾燥', type: '固定' },
        ],
        products: [
            { id: 'p1', label: '① 臺灣綠茶', sub: '三峽碧螺春、龍井' },
        ],
    },
    {
        id: 'partial',
        label: '部分發酵茶',
        summary: '臺灣特色茶的核心。透過萎凋、靜置與攪拌，控制花香、蜜香與焙火韻。',
        range: '輕發酵到重發酵',
        accent: 'amber',
        shared: [
            { id: 'm0', label: '茶菁', type: '原料' },
            { id: 'm1', label: '日光萎凋', type: '散水' },
            { id: 'm2', label: '室內靜置萎凋＋攪拌', type: '核心' },
        ],
        routes: [
            {
                title: '清香到焙香烏龍路線',
                note: '包種茶、高山烏龍、凍頂與鐵觀音，多從這條工藝路線延伸。',
                steps: [
                    { id: 'l1', label: '炒菁' },
                    { id: 'l2', label: '揉捻' },
                    { id: 'l3', label: '乾燥' },
                    { id: 'p2', label: '② 條形包種茶', sub: '文山包種、南港包種', product: true },
                    { id: 'l4', label: '圍揉（熱團揉）' },
                    { id: 'l5', label: '乾燥' },
                    { id: 'p3', label: '③ 清香型球形烏龍茶', sub: '高山烏龍茶', product: true },
                    { id: 'l6', label: '烘焙' },
                    { id: 'p4', label: '④ 焙香型球形烏龍茶', sub: '凍頂、鐵觀音、紅烏龍', product: true },
                ],
            },
            {
                title: '東方美人蜜香路線',
                note: '重發酵與小綠葉蟬著涎，使茶湯走向蜜香、熟果香。',
                steps: [
                    { id: 'e1', label: '炒菁' },
                    { id: 'e2', label: '靜置回潤（炒後悶）' },
                    { id: 'e3', label: '揉捻' },
                    { id: 'e4', label: '乾燥' },
                    { id: 'p5', label: '⑤ 東方美人茶', sub: '石碇、桃竹苗地區', product: true },
                ],
            },
        ],
    },
    {
        id: 'full',
        label: '全發酵茶',
        summary: '不經殺菁，讓茶多酚充分氧化，形成紅茶甜香與紅亮湯色。',
        range: '氧化程度高',
        accent: 'red',
        steps: [
            { id: 'f0', label: '茶菁', type: '原料' },
            { id: 'f1', label: '室內萎凋', type: '柔化' },
            { id: 'f2', label: '揉捻', type: '破壁' },
            { id: 'f3', label: '補足發酵', type: '轉化' },
            { id: 'f4', label: '乾燥', type: '固定' },
        ],
        products: [
            { id: 'p6', label: '⑥ 臺灣紅茶', sub: '日月潭紅茶、小葉種紅茶、蜜香紅茶' },
        ],
    },
];

const DETAILS = {
    g0: '茶樹（Camellia sinensis）的嫩芽與葉片，剛採摘的新鮮原料。品質好壞是所有後續製程的基礎。',
    g1: '藉由高溫（蒸菁或炒菁）破壞茶葉中酵素活性，防止茶葉氧化發酵，保留鮮綠色澤，並去除不良菁味。',
    g2: '使茶葉捲曲形成條狀，並破壞茶葉細胞組織，使茶葉汁液流出附著於表面，增加沖泡時的風味。',
    g3: '以熱風去除茶葉中的水分，使其含水量降至5%以下，延長保存期限，並停止酵素活性，固定品質。',
    p1: '不發酵茶。顏色多呈現鮮綠色，茶湯清新帶有青草或花果香。以北部三峽為主要產區，如碧螺春及龍井，以條形為主。',
    m0: '部分發酵茶對茶菁品質特別要求，依照茶菁品質特性與環境溫溼度情況，製造不同特性之部分發酵茶。',
    m1: '藉由日光熱能使茶葉水分消散。萎凋使茶葉重量、體積、硬度降低，促進化學反應產生特殊香氣及滋味。',
    m2: '移入室內繼續使茶葉水分消散。初期藉由翻動使水分重新分配；後續藉由攪拌使茶葉細胞摩擦破損，增加多元酚氧化酶及兒茶素作用，控制茶葉發酵的程度。此步驟決定部分發酵茶的品質好壞。',
    l1: '藉由熱破壞茶葉中酵素活性，並促使茶葉水分消散、葉片軟化。去除茶葉不良的菁味及穩定茶菁色澤及香氣。',
    l2: '使茶葉捲曲形成條狀，破壞茶葉細胞組織，使汁液流出附著於表面，決定後續形製與風味。',
    l3: '以熱風去除茶葉水分，固定形狀，延長保存期限。',
    p2: '清香型條形包種茶，發酵程度約8–15%。湯色淺黃，氣味清香幽雅，帶有花香。代表：文山包種茶（坪林、石碇）、南港包種茶。',
    l4: '球形烏龍茶的關鍵步驟。將初乾後的茶葉加熱至60~65℃，以布巾包覆再以束包機捲曲形成布球，置於平揉機下滾動，重複數次使茶葉逐漸捲曲成球狀。',
    l5: '乾燥固定球形，並去除多餘水分，為後續烘焙做準備。',
    p3: '清香型球形烏龍茶，發酵程度約8–25%。產於高海拔地區，茶湯清甜，有花香與奶香。代表：阿里山、梨山、大禹嶺等高山烏龍茶。',
    l6: '烘焙具有去除水分效果，延長茶葉貯藏壽命，並改善粗製茶之菁臭味和不良雜味，增加茶葉的特殊香氣。',
    p4: '焙香型球形烏龍茶，發酵程度較高並加上重焙火工序。代表：凍頂烏龍茶、鐵觀音茶、紅烏龍茶。',
    e1: '東方美人茶路的炒菁，在控制發酵達到適當程度後進行，固定顏色與香氣。',
    e2: '東方美人茶炒菁出鍋後，以濕布覆蓋，靜置回潤約10~30分鐘。使茶葉水分重新分布，增加蜜香及熟果味，使葉色轉紅。',
    e3: '揉捻使茶葉形成條狀，汁液附著於表面，強化東方美人茶特有的蜜香風味。',
    e4: '以熱風乾燥，固定蜜香與熟果香風味，延長保存。',
    p5: '部分發酵茶，發酵程度約50–60%。因小綠葉蟬著涎而產生獨特蜜香，茶湯橙紅，氣味帶蜜果香。又稱「白毫烏龍茶」或「膨風茶」。',
    f0: '全發酵茶通常採用大葉種為主要生產品種，少量以小葉種產製。茶菁採摘後進行適度萎凋。',
    f1: '紅茶製程中的萎凋以室內萎凋為主，使茶葉水分消散，葉片柔化，有利後續揉捻，並促進香氣前驅物質的形成。',
    f2: '使茶葉細胞劇烈破壞，促使多元酚氧化酶及兒茶素反應，生成紅茶的色澤與風味。',
    f3: '紅茶揉捻後需將茶葉堆疊進行補足發酵，在高相對濕度下使多元酚氧化酶與兒茶素類充分反應，生成紅茶特有的色澤、風味及品質。',
    f4: '以高溫停止酵素活性，並乾燥製成產品。使含水量降至5%以下，固定品質。',
    p6: '全發酵茶，茶湯橙紅色，香氣濃郁獨特。代表：日月潭紅茶（台茶18號紅玉）、小葉種紅茶、蜜香紅茶。主要產區為南投。',
};

const TONE = {
    emerald: {
        shell: 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-white',
        header: 'from-emerald-700 to-emerald-500',
        pill: 'bg-emerald-100 text-emerald-800',
        dot: 'bg-emerald-500',
        active: 'border-emerald-500 bg-emerald-50 text-emerald-950',
        product: 'bg-emerald-700 text-white border-emerald-700',
    },
    amber: {
        shell: 'border-amber-200 bg-gradient-to-br from-amber-50 to-white',
        header: 'from-amber-700 to-orange-500',
        pill: 'bg-amber-100 text-amber-900',
        dot: 'bg-amber-500',
        active: 'border-amber-500 bg-amber-50 text-amber-950',
        product: 'bg-amber-700 text-white border-amber-700',
    },
    red: {
        shell: 'border-red-200 bg-gradient-to-br from-red-50 to-white',
        header: 'from-red-700 to-rose-500',
        pill: 'bg-red-100 text-red-800',
        dot: 'bg-red-500',
        active: 'border-red-500 bg-red-50 text-red-950',
        product: 'bg-red-700 text-white border-red-700',
    },
};

function StepButton({ step, accent, active, onClick }) {
    const style = TONE[accent];
    const isProduct = step.product || step.id.startsWith('p');

    return (
        <button
            type="button"
            onClick={() => onClick(step.id)}
            className={`group flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${isProduct ? style.product : active ? style.active : 'border-stone-200 bg-white text-stone-800'}`}
        >
            <span>
                <span className="block text-[15px] font-extrabold leading-snug">{step.label}</span>
                {step.sub ? (
                    <span className={`mt-1 block text-xs font-semibold ${isProduct ? 'text-white/80' : 'text-stone-500'}`}>{step.sub}</span>
                ) : null}
            </span>
            {step.type ? (
                <span className={`shrink-0 rounded-full px-2 py-1 text-[11px] font-extrabold ${isProduct ? 'bg-white/20 text-white' : style.pill}`}>{step.type}</span>
            ) : null}
        </button>
    );
}

function FlowLine() {
    return (
        <div className="flex justify-center py-1 text-stone-300">
            <ArrowRight size={16} className="rotate-90" />
        </div>
    );
}

function SimpleRoute({ steps, accent, active, onClick }) {
    return (
        <div>
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <StepButton step={step} accent={accent} active={active === step.id} onClick={onClick} />
                    {index < steps.length - 1 ? <FlowLine /> : null}
                </React.Fragment>
            ))}
        </div>
    );
}

function GroupCard({ group, active, onClick }) {
    const style = TONE[group.accent];

    return (
        <article className={`overflow-hidden rounded-[2rem] border shadow-sm ${style.shell}`}>
            <div className={`bg-gradient-to-r ${style.header} p-5 text-white`}>
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-extrabold tracking-tight">{group.label}</h3>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold">{group.range}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{group.summary}</p>
            </div>

            <div className="space-y-5 p-5">
                {group.shared ? (
                    <div className="rounded-3xl border border-white/80 bg-white/70 p-4">
                        <div className="mb-3 flex items-center gap-2 text-sm font-extrabold text-stone-700">
                            <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                            共通前段：決定發酵基礎
                        </div>
                        <SimpleRoute steps={group.shared} accent={group.accent} active={active} onClick={onClick} />
                    </div>
                ) : (
                    <SimpleRoute steps={group.steps} accent={group.accent} active={active} onClick={onClick} />
                )}

                {group.products ? (
                    <div className="space-y-3 border-t border-stone-200 pt-4">
                        <div className="text-xs font-extrabold tracking-[0.2em] text-stone-400">REPRESENTATIVE TEA</div>
                        {group.products.map((product) => (
                            <StepButton key={product.id} step={{ ...product, product: true }} accent={group.accent} active={active === product.id} onClick={onClick} />
                        ))}
                    </div>
                ) : null}

                {group.routes ? (
                    <div className="grid gap-4 xl:grid-cols-2">
                        {group.routes.map((route) => (
                            <div key={route.title} className="rounded-3xl border border-white/80 bg-white/75 p-4">
                                <h4 className="text-base font-extrabold text-stone-950">{route.title}</h4>
                                <p className="mt-1 text-xs leading-relaxed text-stone-500">{route.note}</p>
                                <div className="mt-4">
                                    <SimpleRoute steps={route.steps} accent={group.accent} active={active} onClick={onClick} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </article>
    );
}

function findNode(id) {
    for (const group of PROCESS_GROUPS) {
        const candidates = [
            ...(group.steps || []),
            ...(group.shared || []),
            ...(group.products || []),
            ...((group.routes || []).flatMap((route) => route.steps)),
        ];
        const match = candidates.find((item) => item.id === id);
        if (match) return { ...match, group };
    }
    return null;
}

export default function TeaProcessFlowChart() {
    const [active, setActive] = useState(null);
    const activeNode = active ? findNode(active) : null;

    const handleClick = (id) => setActive(active === id ? null : id);

    return (
        <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900">
                <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                    <div>
                        <p className="font-extrabold">建議上課順序：先看三大分類，再看各自的代表茶路線。</p>
                        <p className="mt-1 text-sm leading-relaxed text-emerald-800/80">點選任一製程或茶品，下方會顯示詳細說明；新版改成卡片式比較，手機與投影都比較好閱讀。</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.72fr_1.56fr_0.72fr]">
                {PROCESS_GROUPS.map((group) => (
                    <GroupCard key={group.id} group={group} active={active} onClick={handleClick} />
                ))}
            </div>

            {activeNode ? (
                <div className={`rounded-[2rem] border-2 p-6 shadow-lg ${TONE[activeNode.group.accent].active}`}>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                                <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${TONE[activeNode.group.accent].pill}`}>{activeNode.group.label}</span>
                                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-extrabold text-stone-600">{activeNode.product || activeNode.id.startsWith('p') ? '代表茶' : '製程步驟'}</span>
                            </div>
                            <h3 className="text-2xl font-extrabold text-stone-950">{activeNode.label}</h3>
                            {activeNode.sub ? <p className="mt-1 text-sm font-bold text-stone-500">{activeNode.sub}</p> : null}
                            <p className="mt-4 text-[16px] leading-relaxed text-stone-700">{DETAILS[active]}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setActive(null)}
                            className="shrink-0 rounded-full bg-white/80 p-2 text-stone-500 shadow-sm transition hover:bg-white hover:text-stone-900"
                            aria-label="關閉說明"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-sm font-semibold text-stone-400">點選卡片中的流程或代表茶，可查看詳細說明。</p>
            )}
        </div>
    );
}