import React from 'react';

/**
 * 純 SVG 六維雷達圖
 * dimensions: { varieties, science, cultivars, process, featured, ceremony }
 * scores: 0-100
 */
const LABELS = {
    varieties: '六大茶類',
    science: '茶葉科學',
    cultivars: '茶樹品種',
    process: '製程工藝',
    featured: '特色茶',
    ceremony: '茶道美學',
};
const KEYS = Object.keys(LABELS);
const SIDES = KEYS.length;
const CX = 120, CY = 120, R = 90;

function angleOf(i) {
    return (Math.PI * 2 * i) / SIDES - Math.PI / 2;
}

function polar(i, r) {
    const a = angleOf(i);
    return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

function toPath(points) {
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ' Z';
}

export default function RadarChart({ scores = {} }) {
    const normalized = KEYS.map((k) => Math.min(100, Math.max(0, scores[k] ?? 0)) / 100);

    const dataPoints = KEYS.map((_, i) => polar(i, R * normalized[i]));
    const gridLevels = [0.25, 0.5, 0.75, 1];

    return (
        <svg viewBox="0 0 240 240" className="w-full max-w-[240px] mx-auto">
            {/* 網格背景 */}
            {gridLevels.map((level) => (
                <polygon
                    key={level}
                    points={KEYS.map((_, i) => { const p = polar(i, R * level); return `${p.x.toFixed(1)},${p.y.toFixed(1)}`; }).join(' ')}
                    fill="none"
                    stroke="#d6d3d1"
                    strokeWidth="0.8"
                />
            ))}

            {/* 軸線 */}
            {KEYS.map((_, i) => {
                const p = polar(i, R);
                return <line key={i} x1={CX} y1={CY} x2={p.x.toFixed(1)} y2={p.y.toFixed(1)} stroke="#d6d3d1" strokeWidth="0.8" />;
            })}

            {/* 資料多邊形 */}
            <path
                d={toPath(dataPoints)}
                fill="rgba(16,185,129,0.25)"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinejoin="round"
            />

            {/* 資料點 */}
            {dataPoints.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#10b981" stroke="white" strokeWidth="1.5" />
            ))}

            {/* 標籤 */}
            {KEYS.map((k, i) => {
                const p = polar(i, R + 18);
                const anchor = p.x < CX - 5 ? 'end' : p.x > CX + 5 ? 'start' : 'middle';
                return (
                    <text
                        key={k}
                        x={p.x.toFixed(1)}
                        y={(p.y + 4).toFixed(1)}
                        textAnchor={anchor}
                        fontSize="9"
                        fontFamily="sans-serif"
                        fill="#57534e"
                        fontWeight="600"
                    >
                        {LABELS[k]}
                    </text>
                );
            })}
        </svg>
    );
}
