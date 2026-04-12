import React, { useState } from 'react';
import { X } from 'lucide-react';

// ── 節點原始定義 (center x,y) ─────────────────────────────
const NW = 155, NH = 46, PW = 190, PH = 60;

const RAW_NODES = {
    // 不發酵茶 (x=80)
    g0: { x: 80, y: 85, label: '茶菁', type: 'input', g: 'green' },
    g1: { x: 80, y: 158, label: '殺菁', type: 'step', g: 'green' },
    g2: { x: 80, y: 231, label: '揉捻', type: 'step', g: 'green' },
    g3: { x: 80, y: 304, label: '乾燥', type: 'step', g: 'green' },
    p1: {
        x: 80, y: 390, label: '①臺灣綠茶', type: 'product', g: 'green',
        sub: '代表：三峽碧螺春綠茶'
    },

    // 部分發酵 共用 (x=370)
    m0: { x: 370, y: 85, label: '茶菁', type: 'input', g: 'partial' },
    m1: { x: 370, y: 158, label: '日光萎凋', type: 'step', g: 'partial' },
    m2: { x: 370, y: 231, label: '室內靜置萎凋＋攪拌', type: 'step-wide', g: 'partial' },

    // 部分發酵 左路 (x=230) — 包種→清香烏龍→焙香型
    l1: { x: 230, y: 310, label: '炒菁', type: 'step', g: 'partial' },
    l2: { x: 230, y: 383, label: '揉捻', type: 'step', g: 'partial' },
    l3: { x: 230, y: 456, label: '乾燥', type: 'step', g: 'partial' },
    p2: {
        x: 230, y: 540, label: '②條形包種茶', type: 'product', g: 'partial',
        sub: '文山包種茶、南港包種茶'
    },
    l4: { x: 230, y: 622, label: '圍揉（熱團揉）', type: 'step', g: 'partial' },
    l5: { x: 230, y: 695, label: '乾燥', type: 'step', g: 'partial' },
    p3: {
        x: 230, y: 778, label: '③清香型球形烏龍茶', type: 'product', g: 'partial',
        sub: '高山烏龍茶'
    },
    l6: { x: 230, y: 858, label: '烘焙', type: 'step', g: 'partial' },
    p4: {
        x: 230, y: 940, label: '④焙香型球形烏龍茶', type: 'product', g: 'partial',
        sub: '凍頂烏龍、鐵觀音、紅烏龍'
    },

    // 東方美人 右路 (x=510)
    e1: { x: 510, y: 310, label: '炒菁', type: 'step', g: 'partial' },
    e2: { x: 510, y: 383, label: '靜置回潤（炒後悶）', type: 'step', g: 'partial' },
    e3: { x: 510, y: 456, label: '揉捻', type: 'step', g: 'partial' },
    e4: { x: 510, y: 529, label: '乾燥', type: 'step', g: 'partial' },
    p5: {
        x: 510, y: 613, label: '⑤東方美人茶', type: 'product', g: 'partial',
        sub: '石碇、桃竹苗地區'
    },

    // 全發酵茶 (x=720)
    f0: { x: 720, y: 85, label: '茶菁', type: 'input', g: 'full' },
    f1: { x: 720, y: 158, label: '室內萎凋', type: 'step', g: 'full' },
    f2: { x: 720, y: 231, label: '揉捻', type: 'step', g: 'full' },
    f3: { x: 720, y: 304, label: '補足發酵', type: 'step', g: 'full' },
    f4: { x: 720, y: 377, label: '乾燥', type: 'step', g: 'full' },
    p6: {
        x: 720, y: 460, label: '⑥臺灣紅茶', type: 'product', g: 'full',
        sub: '日月潭紅茶、小葉種紅茶、蜜香紅茶'
    },
};

// ── 節點說明 ────────────────────────────────────────────
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
    l6: '烘焙具有去除水分效果，延長茶葉貯藏壽命，並改善粗製茶之菁臭味和不良雜味，增加茶葉的特殊香氣。「看茶焙茶」——依茶葉特性調整溫度與時間。',
    p4: '焙香型球形烏龍茶，發酵程度較高並加上重焙火工序。代表：凍頂烏龍茶（25–30%）、鐵觀音茶（約40%）、紅烏龍茶（重發酵重焙火）。',
    e1: '東方美人茶路的炒菁，在控制發酵達到適當程度後進行，固定顏色與香氣。',
    e2: '東方美人茶炒菁出鍋後，以濕布覆蓋，靜置回潤約10~30分鐘。使茶葉水分重新分布，增加蜜香及熟果味，使葉色轉紅。',
    e3: '揉捻使茶葉形成條狀，汁液附著於表面，強化東方美人茶特有的蜜香風味。',
    e4: '以熱風乾燥，固定蜜香與熟果香風味，延長保存。',
    p5: '部分發酵茶，發酵程度約50–60%。因小綠葉蟬著涎而產生獨特蜜香，茶湯橙紅，氣味帶蜜果香。又稱「白毫烏龍茶」或「膨風茶」。',
    f0: '全發酵茶通常採用大葉種為主要生產品種，少量以小葉種產製。茶菁採摘後進行適度萎凋。',
    f1: '紅茶製程中的萎凋以室內萎凋為主，使茶葉水分消散，葉片柔化，有利後續揉捻，並促進香氣前驅物質的形成。',
    f2: '使茶葉細胞劇烈破壞，促使多元酚氧化酶及兒茶素反應，生成紅茶的色澤與風味。條形紅茶不切碎揉捻，碎形則經切碎揉碎處理。',
    f3: '紅茶揉捻後需將茶葉堆疊進行補足發酵，在高相對濕度下使多元酚氧化酶與兒茶素類充分反應，生成紅茶特有的色澤、風味及品質。',
    f4: '以高溫停止酵素活性，並乾燥製成產品。使含水量降至5%以下，固定品質。',
    p6: '全發酵茶，茶湯橙紅色，香氣濃郁獨特。代表：日月潭紅茶（台茶18號紅玉）、小葉種紅茶、蜜香紅茶。主要產區為南投。',
};

// ── 邊（連線）定義 ───────────────────────────────────────
const EDGES = [
    // 不發酵茶
    ['g0', 'g1'], ['g1', 'g2'], ['g2', 'g3'], ['g3', 'p1'],
    // 部分發酵 共用
    ['m0', 'm1'], ['m1', 'm2'],
    // m2 → 左路/右路分支 (斜線，手動)
    // 左路
    ['l1', 'l2'], ['l2', 'l3'], ['l3', 'p2'], ['p2', 'l4'], ['l4', 'l5'], ['l5', 'p3'], ['p3', 'l6'], ['l6', 'p4'],
    // 東方美人路
    ['e1', 'e2'], ['e2', 'e3'], ['e3', 'e4'], ['e4', 'p5'],
    // 全發酵
    ['f0', 'f1'], ['f1', 'f2'], ['f2', 'f3'], ['f3', 'f4'], ['f4', 'p6'],
];

// 特殊分支連線（非垂直，需要折線）
const BRANCH_EDGES = [
    // m2 → l1 (左下折)
    { from: 'm2', to: 'l1' },
    // m2 → e1 (右下折)
    { from: 'm2', to: 'e1' },
];

// ── 顏色定義 ────────────────────────────────────────────
const GROUP_STYLE = {
    green: { node: '#dcfce7', stroke: '#16a34a', text: '#14532d', prod: '#16a34a', prodText: '#fff' },
    partial: { node: '#fef9c3', stroke: '#d97706', text: '#78350f', prod: '#b45309', prodText: '#fff' },
    full: { node: '#fee2e2', stroke: '#dc2626', text: '#7f1d1d', prod: '#dc2626', prodText: '#fff' },
};

const HEADER_BANDS = [
    { label: '不發酵茶', x: 0, w: 165, fill: '#16a34a' },
    { label: '部分發酵茶', x: 165, w: 455, fill: '#d97706' },
    { label: '全發酵茶', x: 620, w: 200, fill: '#dc2626' },
];

// ── 輔助函式 ────────────────────────────────────────────
function nodeRect(id) {
    const n = RAW_NODES[id];
    const isWide = n.type === 'step-wide';
    const isProd = n.type === 'product';
    const w = isProd ? PW : (isWide ? 200 : NW);
    const h = isProd ? PH : NH;
    return { x: n.x - w / 2, y: n.y - h / 2, w, h, cx: n.x, cy: n.y };
}

function edgePath(fromId, toId) {
    const f = nodeRect(fromId);
    const t = nodeRect(toId);
    const x1 = f.cx, y1 = f.y + f.h;
    const x2 = t.cx, y2 = t.y;
    if (Math.abs(x1 - x2) < 4) {
        return `M ${x1} ${y1} L ${x2} ${y2}`;
    }
    const mid = (y1 + y2) / 2;
    return `M ${x1} ${y1} L ${x1} ${mid} L ${x2} ${mid} L ${x2} ${y2}`;
}

// ── 主元件 ───────────────────────────────────────────────
export default function TeaProcessFlowChart() {
    const [active, setActive] = useState(null);
    const activeNode = active ? RAW_NODES[active] : null;

    const handleClick = (id) => setActive(active === id ? null : id);

    return (
        <div>
            <div className="overflow-x-auto">
                <svg
                    viewBox="0 0 820 1060"
                    className="w-full min-w-[820px]"
                    style={{ fontFamily: 'inherit' }}
                >
                    <defs>
                        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                            <path d="M0,0 L6,3 L0,6 Z" fill="#a8a29e" />
                        </marker>
                    </defs>

                    {/* 頂部色帶 */}
                    {HEADER_BANDS.map(b => (
                        <g key={b.label}>
                            <rect x={b.x} y={0} width={b.w} height={46} fill={b.fill} rx={0} />
                            <text x={b.x + b.w / 2} y={29} textAnchor="middle" fill="white"
                                fontSize={16} fontWeight="bold">{b.label}</text>
                        </g>
                    ))}

                    {/* 普通邊 */}
                    {EDGES.map(([a, b]) => (
                        <path key={`${a}-${b}`} d={edgePath(a, b)}
                            fill="none" stroke="#a8a29e" strokeWidth={1.5}
                            markerEnd="url(#arr)" />
                    ))}

                    {/* 特殊分支邊（折線） */}
                    {BRANCH_EDGES.map(({ from, to }) => (
                        <path key={`br-${from}-${to}`} d={edgePath(from, to)}
                            fill="none" stroke="#a8a29e" strokeWidth={1.5}
                            strokeDasharray="4 2" markerEnd="url(#arr)" />
                    ))}

                    {/* 節點 */}
                    {Object.entries(RAW_NODES).map(([id, n]) => {
                        const s = GROUP_STYLE[n.g];
                        const r = nodeRect(id);
                        const isProd = n.type === 'product';
                        const isActive = active === id;
                        return (
                            <g key={id} onClick={() => handleClick(id)} style={{ cursor: 'pointer' }}>
                                <rect
                                    x={r.x} y={r.y} width={r.w} height={r.h}
                                    rx={isProd ? 16 : 6}
                                    fill={isProd ? s.prod : (isActive ? s.stroke : s.node)}
                                    stroke={s.stroke}
                                    strokeWidth={isActive ? 2.5 : 1.5}
                                    opacity={active && !isActive ? 0.55 : 1}
                                />
                                <text x={n.x} y={n.y + (isProd ? 1 : 0)} textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill={isProd ? s.prodText : (isActive ? '#fff' : s.text)}
                                    fontSize={isProd ? 16 : 16} fontWeight={isProd ? 'bold' : '600'}>
                                    {n.label}
                                </text>
                                {isProd && n.sub && (
                                    <text x={n.x} y={n.y + 17} textAnchor="middle"
                                        fill={s.prodText} fontSize={13} opacity={0.85}>
                                        {n.sub}
                                    </text>
                                )}
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* 說明面板 */}
            {active && activeNode && (
                <div className={`mt-6 rounded-2xl border-2 p-6 shadow-lg transition-all ${activeNode.g === 'green' ? 'bg-emerald-50 border-emerald-400' :
                    activeNode.g === 'partial' ? 'bg-amber-50 border-amber-400' :
                        'bg-red-50 border-red-400'
                    }`}>
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`text-[11px] font-bold tracking-widest px-2 py-1 rounded-full ${activeNode.g === 'green' ? 'bg-emerald-200 text-emerald-800' :
                                    activeNode.g === 'partial' ? 'bg-amber-200 text-amber-800' :
                                        'bg-red-200 text-red-800'
                                    }`}>
                                    {activeNode.g === 'green' ? '不發酵茶' : activeNode.g === 'partial' ? '部分發酵茶' : '全發酵茶'}
                                </span>
                                <span className={`text-[11px] font-bold tracking-widest px-2 py-1 rounded-full bg-stone-200 text-stone-700`}>
                                    {activeNode.type === 'product' ? '茶類' : activeNode.type === 'input' ? '原料' : '製程步驟'}
                                </span>
                            </div>
                            <h3 className="text-[22px] font-extrabold text-stone-900 mb-1">{activeNode.label}</h3>
                            {activeNode.sub && (
                                <p className="text-[14px] text-stone-500 font-medium mb-3">{activeNode.sub}</p>
                            )}
                            <p className="text-[16px] text-stone-700 leading-relaxed">{DETAILS[active]}</p>
                        </div>
                        <button onClick={() => setActive(null)}
                            className="shrink-0 p-1.5 rounded-full hover:bg-stone-200 transition-colors mt-0.5">
                            <X size={18} className="text-stone-500" />
                        </button>
                    </div>
                </div>
            )}

            {!active && (
                <p className="mt-4 text-center text-[14px] text-stone-400 font-medium">
                    點擊流程圖中的任一步驟可查看詳細說明
                </p>
            )}
        </div>
    );
}
