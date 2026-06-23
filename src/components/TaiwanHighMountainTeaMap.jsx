import React, { useState } from 'react';
import * as d3 from 'd3-geo';
import * as topojson from 'topojson-client';
import { ExternalLink, Info, Leaf, MapPin, Mountain, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import mapData from '../data/taiwan-map-data.json';

const geoData = mapData ? topojson.feature(mapData, mapData.objects.map || mapData.objects.counties) : null;

const TEA_AREAS = [
    {
        id: 'north', name: '北部茶區', color: '#84a913', county: '桃園北橫山區',
        altitude: '1,400–1,900 m', lng: 121.42, lat: 24.68, boxX: 760, boxY: 90,
        overview: '北部高山茶以拉拉山、上巴陵等北橫聚落為代表，緯度較北、氣候冷涼。',
        places: [['拉拉山', 1900], ['上巴陵', 1900], ['下巴陵', 1400], ['新中橫', 1700]],
    },
    {
        id: 'lishan', name: '梨山茶區', color: '#73b7c9', county: '臺中市和平區及周邊高冷地帶',
        altitude: '1,800–2,650 m', lng: 121.28, lat: 24.22, boxX: 760, boxY: 220,
        overview: '涵蓋大禹嶺、福壽山、華岡、佳陽、翠巒等高冷茶園，是臺灣海拔最高的一組茶區。',
        places: [['大禹嶺', 2650], ['福壽山農場', 2600], ['碧綠溪', 2400], ['華岡', 2400], ['梨山', 2200], ['天府農場', 2100], ['南奇萊', 2100], ['佳陽', 2000], ['翠巒', 2000], ['奇萊山', 1900], ['北奇萊', 1800], ['武陵農場', 1800]],
    },
    {
        id: 'renai', name: '仁愛茶區', color: '#df2f36', county: '南投縣仁愛鄉',
        altitude: '1,200–2,100 m', lng: 121.15, lat: 24.03, boxX: 70, boxY: 110,
        overview: '茶園散布於翠峰、清境、廬山、紅香、霧社等聚落，地形與海拔差異大。',
        places: [['屯原', 2100], ['翠峰', 1900], ['清境農場', 1700], ['良久', 1600], ['廬山', 1500], ['紅香', 1400], ['南山', 1400], ['東眼山', 1400], ['武界', 1400], ['奧萬大', 1300], ['眉溪', 1200], ['霧社', 1200]],
    },
    {
        id: 'shanlinxi', name: '杉林溪茶區', color: '#1878ad', county: '南投竹山、雲林古坑周邊',
        altitude: '550–1,900 m', lng: 120.79, lat: 23.65, boxX: 55, boxY: 310,
        overview: '圖表廣義涵蓋杉林溪、龍鳳峽、石壁、草嶺至竹山、古坑等不同高度茶區。',
        places: [['草坔仔', 1900], ['杉林溪', 1900], ['龍鳳峽', 1800], ['三層坪', 1700], ['獅頭湖', 1700], ['番仔田', 1700], ['軟鞍', 1300], ['羊仔灣', 1300], ['石壁', 1300], ['草嶺', 1100], ['樟湖', 850], ['凍頂', 850], ['竹山', 800], ['桶頭', 750], ['華山', 600], ['古坑', 550]],
    },
    {
        id: 'yushan', name: '玉山茶區', color: '#dcb900', county: '南投縣信義、水里及玉山山系',
        altitude: '900–1,700 m', lng: 120.94, lat: 23.48, boxX: 760, boxY: 435,
        overview: '涵蓋信義、塔塔加、東埔、沙里仙、草坪頭、水里等玉山山系與濁水溪流域茶區。',
        places: [['七彩湖', 1700], ['信義', 1600], ['塔塔加', 1600], ['久美', 1400], ['沙里仙', 1400], ['神木', 1300], ['東埔', 1200], ['地利', 1200], ['草坪頭', 1100], ['水里', 1100], ['新山', 1100], ['二尖茶', 900]],
    },
    {
        id: 'alishan', name: '阿里山茶區', color: '#a11874', county: '嘉義縣梅山、竹崎、番路、阿里山',
        altitude: '700–1,700 m', lng: 120.75, lat: 23.47, boxX: 55, boxY: 535,
        overview: '大阿里山茶區包含石棹、隙頂、瑞里、太和、梅山及阿里山鄉等多個次產區。',
        places: [['頂湖', 1700], ['阿里山', 1700], ['里佳', 1500], ['梅山', 1500], ['奮起湖', 1500], ['樟樹湖', 1400], ['石棹', 1300], ['太平', 1300], ['太和', 1300], ['瑞里／瑞豐', 1200], ['來吉', 1100], ['太興', 1000], ['龍頭', 900], ['隙頂', 900], ['龍眼林', 750], ['出水坑', 700]],
    },
    {
        id: 'south', name: '南部茶區', color: '#ed7414', county: '高雄市山區',
        altitude: '500–1,600 m', lng: 120.68, lat: 23.02, boxX: 710, boxY: 650,
        overview: '圖表列出摩天嶺、三民、桃源、茂林、六龜與美濃，包含高山至丘陵茶區。',
        places: [['摩天嶺', 1600], ['三民鄉', 1100], ['桃源', 1000], ['茂林', 800], ['六龜', 600], ['美濃', 500]],
    },
];

const COUNTY_LABEL_OFFSETS = {
    '基隆市': { x: 24, y: -8 },
    '臺北市': { x: -18, y: -10 },
    '新北市': { x: 20, y: 15 },
    '桃園市': { x: -18, y: -7 },
    '新竹縣': { x: -18, y: 8 },
    '新竹市': { x: -34, y: 2 },
    '苗栗縣': { x: -10, y: 7 },
    '臺中市': { x: -9, y: 8 },
    '彰化縣': { x: -18, y: 5 },
    '南投縣': { x: 13, y: 5 },
    '雲林縣': { x: -13, y: 4 },
    '嘉義縣': { x: 12, y: 7 },
    '嘉義市': { x: -21, y: 0 },
    '臺南市': { x: -10, y: 5 },
    '高雄市': { x: 7, y: 9 },
    '屏東縣': { x: 9, y: 3 },
    '宜蘭縣': { x: 20, y: 13 },
    '花蓮縣': { x: 15, y: 0 },
    '臺東縣': { x: 13, y: 9 },
    '澎湖縣': { x: 0, y: 0 },
};

const normalizeCountyName = (name) => name.replace(/^台/, '臺');

// Hand-positioned from the supplied reference map; values are offsets from each major area's anchor.
const SUBREGION_POINT_OFFSETS = {
    north: [[12.3, -9.2], [-8.6, -8.4], [-2.2, 1.9], [-1.5, 15.7]],
    lishan: [[14.4, -26.4], [7.1, -21.1], [-16.6, -20.0], [-1.3, -16.5], [-6.5, -10.0], [0.9, -2.2], [-11.4, 0.0], [-18.2, 4.4], [14.2, 7.3], [10.8, 18.9], [2.8, 27.4], [3.8, 38.1]],
    renai: [[2.8, -18.9], [23.4, -14.1], [-15.4, -10.9], [10.4, -8.8], [-0.1, -2.1], [-34.9, -1.4], [14.0, 0.2], [-17.0, 3.9], [-4.5, 5.5], [14.4, 11.2], [8.2, 15.9], [-1.2, 19.7]],
    shanlinxi: [[-6.2, -34.3], [18.4, -28.6], [19.3, -21.3], [6.3, -17.3], [20.6, -10.5], [7.8, -8.4], [25.6, -3.0], [-8.3, -0.7], [20.7, 2.3], [10.6, 7.3], [-43.2, 8.5], [-5.3, 11.1], [-25.4, 15.0], [-31.6, 23.3], [0.5, 25.5], [-9.8, 30.9]],
    yushan: [[-16.1, -43.1], [-9.0, -33.1], [-3.9, -25.2], [2.6, -14.6], [1.9, -7.0], [2.6, 1.2], [29.1, 6.0], [5.2, 10.2], [8.4, 17.9], [-13.7, 24.3], [5.4, 27.2], [-12.5, 36.2]],
    alishan: [[-39.9, -26.6], [-26.9, -20.9], [-8.8, -19.0], [-14.8, -11.8], [18.3, -11.8], [2.8, -10.6], [-1.2, -3.3], [12.4, -2.3], [0.9, 3.3], [22.3, 4.3], [-4.6, 9.7], [14.7, 10.8], [31.1, 13.3], [-11.7, 16.4], [10.6, 22.0], [-5.4, 26.4]],
    south: [[31.9, -36.7], [7.2, -27.4], [2.9, -1.8], [-7.4, 11.0], [-22.8, 21.0], [-11.7, 33.9]],
};

const SUBREGION_AREA_ADJUSTMENTS = {
    north: { x: 10, y: 0 },
    lishan: { x: 13, y: -7 },
    renai: { x: -1, y: -14 },
    shanlinxi: { x: -10, y: -47 },
    yushan: { x: 22, y: -62 },
    alishan: { x: -16, y: -23 },
    south: { x: 5, y: -36 },
};

// Explicit name-to-marker order from the supplied reference image.
const SUBREGION_POINT_NAMES = {
    north: ['拉拉山', '上巴陵', '下巴陵', '新中橫'],
    lishan: ['武陵農場', '天府農場', '佳陽', '梨山', '福壽山農場', '碧綠溪', '華岡', '翠巒', '大禹嶺', '北奇萊', '奇萊山', '南奇萊'],
    renai: ['紅香', '翠峰', '東眼山', '清境農場', '眉溪', '南山', '屯原', '霧社', '廬山', '奧萬大', '武界', '良久'],
    shanlinxi: ['竹山', '三層坪', '草坔仔', '龍鳳峽', '軟鞍', '凍頂', '羊仔灣', '桶頭', '杉林溪', '獅頭湖', '古坑', '番仔田', '樟湖', '華山', '石壁', '草嶺'],
    yushan: ['二尖茶', '水里', '地利', '信義', '新山', '久美', '七彩湖', '東埔', '草坪頭', '沙里仙', '神木', '塔塔加'],
    alishan: ['梅山', '龍眼林', '太平', '太興', '瑞里／瑞豐', '出水坑', '太和', '奮起湖', '樟樹湖', '來吉', '石棹', '頂湖', '阿里山', '龍頭', '里佳', '隙頂'],
    south: ['摩天嶺', '桃源', '三民鄉', '六龜', '美濃', '茂林'],
};

const HIGHLAND_COUNTIES = new Set(['桃園市', '臺中市', '台中市', '南投縣', '嘉義縣', '高雄市']);
const projection = d3.geoMercator().center([120.95, 23.65]).scale(9900).translate([500, 390]);
const pathGenerator = d3.geoPath().projection(projection);
const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const LABEL_ZOOM_THRESHOLD = 1.8;

const clampCenter = (center, zoom) => {
    const halfWidth = 500 / zoom;
    const halfHeight = 400 / zoom;
    return {
        x: Math.min(1000 - halfWidth, Math.max(halfWidth, center.x)),
        y: Math.min(800 - halfHeight, Math.max(halfHeight, center.y)),
    };
};

const getAreaFocusCenter = (area) => {
    const [anchorX, anchorY] = projection([area.lng, area.lat]);
    const adjustment = SUBREGION_AREA_ADJUSTMENTS[area.id];
    const points = SUBREGION_POINT_OFFSETS[area.id].map(([x, y]) => [anchorX + x + adjustment.x, anchorY + y + adjustment.y]);
    const xs = points.map(([x]) => x);
    const ys = points.map(([, y]) => y);
    return {
        x: (Math.min(...xs) + Math.max(...xs)) / 2,
        y: (Math.min(...ys) + Math.max(...ys)) / 2,
    };
};

export default function TaiwanHighMountainTeaMap() {
    const [activeId, setActiveId] = useState('lishan');
    const [zoom, setZoom] = useState(MIN_ZOOM);
    const [center, setCenter] = useState({ x: 500, y: 400 });
    const [dragStart, setDragStart] = useState(null);
    const activeArea = TEA_AREAS.find((area) => area.id === activeId) || TEA_AREAS[0];

    const focusArea = (areaId) => {
        const area = TEA_AREAS.find((item) => item.id === areaId);
        if (!area) return;
        const focusZoom = 4;
        setActiveId(areaId);
        setZoom(focusZoom);
        setCenter(clampCenter(getAreaFocusCenter(area), focusZoom));
    };

    const changeZoom = (requestedZoom) => {
        const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, requestedZoom));
        setZoom(nextZoom);
        setCenter((current) => nextZoom === MIN_ZOOM ? { x: 500, y: 400 } : clampCenter(current, nextZoom));
    };

    const resetMapView = () => {
        setZoom(MIN_ZOOM);
        setCenter({ x: 500, y: 400 });
    };

    const handlePointerDown = (event) => {
        if (event.button !== 0 || zoom === MIN_ZOOM) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        setDragStart({ clientX: event.clientX, clientY: event.clientY, centerX: center.x, centerY: center.y });
    };

    const handlePointerMove = (event) => {
        if (!dragStart) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const scaleX = (1000 / zoom) / bounds.width;
        const scaleY = (800 / zoom) / bounds.height;
        setCenter(clampCenter({
            x: dragStart.centerX - (event.clientX - dragStart.clientX) * scaleX,
            y: dragStart.centerY - (event.clientY - dragStart.clientY) * scaleY,
        }, zoom));
    };

    const stopDragging = () => setDragStart(null);

    return (
        <section className="overflow-hidden rounded-[2.5rem] border border-emerald-900/10 bg-[#f6f2e8] shadow-xl">
            <header className="bg-emerald-950 px-7 py-9 text-white md:px-12">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-sm font-bold tracking-[0.2em] text-emerald-300">TAIWAN HIGH MOUNTAIN TEA ATLAS</p>
                        <h3 className="mt-2 text-3xl font-black md:text-5xl">臺灣高山茶區概況</h3>
                        <p className="mt-3 max-w-3xl leading-7 text-emerald-50/80">網站原創向量地圖｜點選大茶區，自動開啟該區放大圖。</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm">
                        <Mountain size={18} /><span>茶改場：1,000 m 以上常稱高山茶</span>
                    </div>
                </div>
            </header>

            <div className="p-4 md:p-8">
                <div className="relative overflow-hidden rounded-[2rem] border border-white bg-gradient-to-b from-[#f8fbf2] to-[#e5eedc] shadow-inner">
                    <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-2xl border border-stone-200 bg-white/95 p-2 shadow-lg backdrop-blur-sm">
                        <button type="button" onClick={() => changeZoom(zoom - 0.5)} disabled={zoom <= MIN_ZOOM} aria-label="縮小地圖" className="rounded-xl p-2 text-stone-700 transition hover:bg-stone-100 disabled:opacity-30"><ZoomOut size={19} /></button>
                        <span className="min-w-14 text-center text-xs font-black text-stone-700">{zoom.toFixed(1)}×</span>
                        <button type="button" onClick={() => changeZoom(zoom + 0.5)} disabled={zoom >= MAX_ZOOM} aria-label="放大地圖" className="rounded-xl p-2 text-stone-700 transition hover:bg-stone-100 disabled:opacity-30"><ZoomIn size={19} /></button>
                        <button type="button" onClick={resetMapView} aria-label="回到完整地圖" className="rounded-xl border-l border-stone-200 p-2 text-emerald-800 transition hover:bg-emerald-50"><RotateCcw size={18} /></button>
                    </div>
                    <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-emerald-950/85 px-4 py-2 text-xs font-bold text-white shadow-lg">
                        {zoom < LABEL_ZOOM_THRESHOLD ? '點選大茶區開啟放大圖' : `${activeArea.name}放大圖・拖曳可移動`}
                    </div>
                    {zoom >= LABEL_ZOOM_THRESHOLD && (
                        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-2xl border bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm" style={{ borderColor: activeArea.color }}>
                            <p className="text-xs font-black tracking-wider" style={{ color: activeArea.color }}>區域放大圖</p>
                            <p className="mt-1 text-lg font-black text-stone-900">{activeArea.name}</p>
                            <p className="text-xs font-bold text-stone-500">{activeArea.places.length} 個小茶區</p>
                        </div>
                    )}                    <svg
                        viewBox={`${center.x - 500 / zoom} ${center.y - 400 / zoom} ${1000 / zoom} ${800 / zoom}`}
                        className={`min-h-[680px] w-full select-none touch-none md:min-h-[820px] ${zoom > MIN_ZOOM ? (dragStart ? 'cursor-grabbing' : 'cursor-grab') : ''}`}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={stopDragging}
                        onPointerCancel={stopDragging}
                        onPointerLeave={stopDragging}
                    >
                        <defs>
                            <filter id="highland-shadow" height="150%">
                                <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#1c1917" floodOpacity=".22" />
                            </filter>
                            <linearGradient id="mountain-fill" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#dcecc8" />
                                <stop offset="100%" stopColor="#83b98a" />
                            </linearGradient>
                        </defs>

                        <g filter="url(#highland-shadow)">
                            {geoData?.features.map((feature) => {
                                const name = feature.properties.name;
                                return (
                                    <path
                                        key={name}
                                        d={pathGenerator(feature)}
                                        fill={HIGHLAND_COUNTIES.has(name) ? 'url(#mountain-fill)' : '#e7e5df'}
                                        stroke="#fff"
                                        strokeWidth="1.5"
                                    />
                                );
                            })}
                        </g>

                        {/* Every county and city remains visible for geographic orientation. */}
                        <g className="pointer-events-none">
                            {geoData?.features.map((feature) => {
                                const rawName = feature.properties.name;
                                const name = normalizeCountyName(rawName);
                                const [cx, cy] = pathGenerator.centroid(feature);
                                const offset = COUNTY_LABEL_OFFSETS[name] || { x: 0, y: 0 };
                                if (!Number.isFinite(cx) || !Number.isFinite(cy)) return null;
                                return (
                                    <text
                                        key={'county-' + rawName}
                                        x="0"
                                        y="0"
                                        transform={`translate(${cx + offset.x} ${cy + offset.y}) scale(${1 / zoom})`}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fontSize="11"
                                        fontWeight="800"
                                        fill="#44403c"
                                        stroke="rgba(255,255,255,.95)"
                                        strokeWidth="3.5"
                                        paintOrder="stroke"
                                    >
                                        {name}
                                    </text>
                                );
                            })}
                        </g>

                        {zoom < LABEL_ZOOM_THRESHOLD && TEA_AREAS.map((area) => {
                            const [x, y] = projection([area.lng, area.lat]);
                            const boxOnLeft = area.boxX < 500;
                            const lineEndX = boxOnLeft ? area.boxX + 150 : area.boxX;
                            const active = area.id === activeId;
                            return (
                                <g
                                    key={area.id}
                                    role="button"
                                    tabIndex="0"
                                    className="cursor-pointer outline-none"
                                    aria-label={`${area.name}，${area.altitude}`}
                                    onClick={() => focusArea(area.id)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter' || event.key === ' ') focusArea(area.id);
                                    }}
                                >
                                    <path d={`M${x},${y} L${(x + lineEndX) / 2},${area.boxY + 25} L${lineEndX},${area.boxY + 25}`} fill="none" stroke={area.color} strokeWidth={active ? 4 : 2.5} />
                                    <circle cx={x} cy={y} r={active ? 11 : 8} fill={area.color} stroke="#fff" strokeWidth="3" />
                                    <g transform={`translate(${area.boxX}, ${area.boxY})`}>
                                        <rect width="170" height="58" rx="14" fill={active ? '#fffdf5' : 'rgba(255,255,255,.93)'} stroke={area.color} strokeWidth={active ? 3 : 1.5} />
                                        <circle cx="17" cy="18" r="6" fill={area.color} />
                                        <text x="30" y="23" fontSize="17" fontWeight="900" fill={area.color}>{area.name}</text>
                                        <text x="17" y="44" fontSize="12" fontWeight="700" fill="#57534e">{area.altitude}</text>
                                    </g>
                                </g>
                            );
                        })}

                        {/* Fine-grained tea-place layer: individually positioned from the supplied reference map. */}
                        <g className="pointer-events-none">
                            {TEA_AREAS.filter((area) => zoom < LABEL_ZOOM_THRESHOLD || area.id === activeId).map((area) => {
                                const [anchorX, anchorY] = projection([area.lng, area.lat]);
                                const offsets = SUBREGION_POINT_OFFSETS[area.id];
                                const adjustment = SUBREGION_AREA_ADJUSTMENTS[area.id];
                                const pointNames = SUBREGION_POINT_NAMES[area.id] || area.places.map(([name]) => name);
                                const altitudeByName = new Map(area.places);
                                return pointNames.map((name, index) => {
                                    const altitude = altitudeByName.get(name);
                                    const [offsetX, offsetY] = offsets[index];
                                    const labelX = anchorX + offsetX + adjustment.x;
                                    const labelY = anchorY + offsetY + adjustment.y;
                                    return (
                                        <g key={`${area.id}-map-place-${name}`} transform={`translate(${labelX}, ${labelY}) scale(${1 / zoom})`} opacity={activeId === area.id ? 1 : 0.88}>
                                            <title>{`${name} · 約 ${altitude.toLocaleString()} m（位置示意）`}</title>
                                            <circle cx="0" cy="0" r={activeId === area.id ? 6 : 5} fill={area.color} stroke="#fff" strokeWidth="2" />

                                            {zoom >= LABEL_ZOOM_THRESHOLD && (
                                                <text x="11" y="0" dominantBaseline="middle" fontSize="15" fontWeight="850" fill="#292524" stroke="rgba(255,255,255,.98)" strokeWidth="3" paintOrder="stroke">
                                                    {name}
                                                </text>
                                            )}
                                        </g>
                                    );
                                });
                            })}
                        </g>
                        <g className="pointer-events-none" opacity={zoom === MIN_ZOOM ? 1 : 0}>
                            <text x="500" y="56" textAnchor="middle" fontSize="18" fontWeight="900" fill="#166534">臺灣茶山地形導覽</text>
                            <text x="500" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280">本圖為本站重新繪製，未使用參考網站圖片素材</text>
                        </g>
                    </svg>
                </div>

                <div className="mt-7 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                    <article className="rounded-[2rem] bg-white p-7 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold tracking-[0.18em]" style={{ color: activeArea.color }}>SELECTED TEA AREA</p>
                                <h4 className="mt-2 text-3xl font-black text-stone-900">{activeArea.name}</h4>
                            </div>
                            <span className="rounded-2xl bg-emerald-50 p-3 text-emerald-800"><MapPin size={24} /></span>
                        </div>
                        <p className="mt-2 text-sm font-bold text-stone-500">{activeArea.county}</p>
                        <div className="mt-5 rounded-2xl p-5 text-white" style={{ backgroundColor: activeArea.color }}>
                            <p className="text-xs tracking-widest text-white/75">圖表涵蓋海拔</p>
                            <p className="mt-1 text-2xl font-black">{activeArea.altitude}</p>
                        </div>
                        <p className="mt-5 text-[15px] leading-7 text-stone-600">{activeArea.overview}</p>
                    </article>

                    <article className="rounded-[2rem] bg-white p-7 shadow-sm">
                        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                            <div>
                                <p className="text-xs font-bold tracking-[0.18em] text-emerald-700">SUBREGIONS & ELEVATION</p>
                                <h4 className="mt-1 text-2xl font-black text-stone-900">子產區與參考海拔</h4>
                            </div>
                            <span className="text-sm font-bold text-stone-500">共 {activeArea.places.length} 處</span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                            {activeArea.places.map(([name, altitude]) => (
                                <div key={name} className="flex items-center justify-between rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                                    <span className="font-bold text-stone-800">{name}</span>
                                    <span className={`rounded-full px-2.5 py-1 text-xs font-black ${altitude >= 1000 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                                        {altitude.toLocaleString()} m
                                    </span>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                    {TEA_AREAS.map((area) => (
                        <button
                            key={area.id}
                            type="button"
                            onClick={() => focusArea(area.id)}
                            className={`rounded-2xl border bg-white p-4 text-left transition-all ${activeId === area.id ? 'shadow-lg ring-2' : 'border-stone-200 hover:-translate-y-0.5 hover:shadow-md'}`}
                            style={activeId === area.id ? { borderColor: area.color, '--tw-ring-color': area.color } : undefined}
                        >
                            <span className="block h-1.5 w-10 rounded-full" style={{ backgroundColor: area.color }} />
                            <span className="mt-3 block font-black text-stone-900">{area.name}</span>
                            <span className="mt-1 block text-xs font-bold text-stone-500">{area.altitude}</span>
                        </button>
                    ))}
                </div>
                <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm md:p-8">
                    <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                        <div>
                            <p className="text-xs font-bold tracking-[0.2em] text-emerald-700">COMPLETE TEA REGION INDEX</p>
                            <h4 className="mt-2 text-3xl font-black text-stone-900">七大茶區・小茶區完整索引</h4>
                            <p className="mt-2 text-sm leading-6 text-stone-500">全部展開顯示，不必逐一點擊；綠色高度標籤為 1,000 m 以上，琥珀色為 1,000 m 以下。</p>
                        </div>
                        <span className="text-sm font-bold text-stone-500">共 {TEA_AREAS.reduce((total, area) => total + area.places.length, 0)} 個地名</span>
                    </div>

                    <div className="columns-1 gap-5 xl:columns-2">
                        {TEA_AREAS.map((area) => (
                            <article
                                key={'index-' + area.id}
                                className={'mb-5 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ' + (activeId === area.id ? 'ring-2' : '')}
                                style={activeId === area.id ? { borderColor: area.color, '--tw-ring-color': area.color } : { borderColor: '#e7e5e4' }}
                            >
                                <button
                                    type="button"
                                    onClick={() => focusArea(area.id)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-white"
                                    style={{ backgroundColor: area.color }}
                                >
                                    <span>
                                        <span className="block text-lg font-black">{area.name}</span>
                                        <span className="mt-0.5 block text-xs font-medium text-white/80">{area.county}</span>
                                    </span>
                                    <span className="shrink-0 rounded-full bg-white/15 px-3 py-1.5 text-xs font-black">{area.altitude}</span>
                                </button>
                                <div className="grid gap-2 p-4 sm:grid-cols-2">
                                    {area.places.map(([name, altitude]) => (
                                        <div key={area.id + '-' + name} className="flex items-center justify-between gap-3 rounded-xl bg-stone-50 px-3 py-2.5">
                                            <span className="font-bold text-stone-800">{name}</span>
                                            <span className={'shrink-0 rounded-full px-2 py-1 text-xs font-black ' + (altitude >= 1000 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800')}>
                                                {altitude.toLocaleString()} m
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

            </div>

            <footer className="border-t border-stone-200 bg-white/75 px-7 py-7 md:px-10">
                <div className="flex items-start gap-3">
                    <Info className="mt-1 shrink-0 text-amber-700" size={20} />
                    <div className="text-sm leading-7 text-stone-600">
                        <p><strong className="text-stone-900">資料說明：</strong>子產區與高度依使用者提供之「臺灣高山茶區概況」圖表整理，並參照專欄文字。圖表亦收錄部分低於 1,000 公尺的傳統茶區，因此不代表每一處都符合高山茶的常用定義；實際茶園高度也可能因位置而異。</p>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                            <a href="https://tangminghuangtea.com/blogs/%E5%B0%88%E6%AC%84%E6%96%87%E7%AB%A0/%E5%8F%B0%E7%81%A3%E5%90%84%E5%A4%A7%E9%AB%98%E5%B1%B1%E8%8C%B6%E5%8D%80%E7%B0%A1%E4%BB%8B" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-emerald-800 underline underline-offset-4">產區介紹專欄 <ExternalLink size={13} /></a>
                            <a href="https://www.tbrs.gov.tw/ws.php?id=3783" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-emerald-800 underline underline-offset-4">茶改場：高山烏龍茶 <ExternalLink size={13} /></a>
                            <a href="https://www.tbrs.gov.tw/ws.php?id=4804&print=Y" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-bold text-emerald-800 underline underline-offset-4">茶改場：中南部茶區 <ExternalLink size={13} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-900"><Leaf size={14} /><span>地圖、標註與介面皆由本站程式重新繪製，未使用參考網站的圖片。</span></div>
            </footer>
        </section>
    );
}











