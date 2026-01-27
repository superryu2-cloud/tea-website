import React, { useState, useEffect } from 'react';
import * as d3 from 'd3-geo';
import * as topojson from 'topojson-client';
import mapData from '../data/taiwan-map-data.json';
import { Leaf, Info } from 'lucide-react';
import mapClouds from '../assets/images/map-clouds.png';
import mapMountains from '../assets/images/map-mountains.png';

const TaiwanTeaMap = () => {
    const [geoData, setGeoData] = useState(null);
    const [activeRegion, setActiveRegion] = useState(null);
    const [hoverRegion, setHoverRegion] = useState(null);

    // Pastel Palette
    // Color Categories
    // Pastel Palette
    const REGION_COLORS = {
        '新北市': '#F4C7C9', // Pink
        '臺北市': '#A4C5D3', // Blue
        '台北市': '#A4C5D3', // Blue (Variant)
        '桃園市': '#B6CFA4', // Green
        '新竹縣': '#F7E8C6', // Yellow
        '新竹市': '#F7E8C6',
        '苗栗縣': '#D4C4E0', // Purple
        '臺中市': '#F6D7B0', // Orange
        '台中市': '#F6D7B0',
        '南投縣': '#F4C7C9', // Pink
        '雲林縣': '#B6CFA4', // Green
        '嘉義縣': '#A4C5D3', // Blue
        '嘉義市': '#A4C5D3',
        '臺南市': '#F7E8C6', // Yellow
        '台南市': '#F7E8C6',
        '高雄市': '#D4C4E0', // Purple
        '屏東縣': '#F6D7B0', // Orange
        '宜蘭縣': '#B6CFA4', // Green
        '花蓮縣': '#D4C4E0', // Purple
        '臺東縣': '#A4C5D3', // Blue
        '台東縣': '#A4C5D3',
        'default': '#FFFFFF'
    };

    const REGION_LABELS = {
        '新北市': '新北市',
        '臺北市': '臺北市',
        '台北市': '臺北市',
        '桃園市': '桃園市',
        '新竹縣': '新竹縣',
        '苗栗縣': '苗栗縣',
        '臺中市': '臺中市',
        '台中市': '臺中市',
        '彰化縣': '彰化縣',
        '南投縣': '南投縣',
        '雲林縣': '雲林縣',
        '嘉義縣': '嘉義縣',
        '臺南市': '臺南市',
        '台南市': '臺南市',
        '高雄市': '高雄市',
        '屏東縣': '屏東縣',
        '宜蘭縣': '宜蘭縣',
        '花蓮縣': '花蓮縣',
        '臺東縣': '臺東縣',
        '台東縣': '臺東縣',
    };

    const MOUNTAIN_MARKERS = [
        { name: '梨山', x: 121.25, y: 24.36 },
        { name: '大禹嶺', x: 121.34, y: 24.280 }, // Adjusted slightly right
        { name: '霧社.盧山', x: 121.23, y: 24.12 },
        { name: '阿里山', x: 120.81, y: 23.44 }
    ];

    const REGION_TEA_TYPES = {
        '新北市': 'green',
        '臺北市': 'oolong',
        '台北市': 'oolong',
        '桃園市': 'oolong',
        '新竹縣': 'oolong',
        '新竹市': 'oolong',
        '苗栗縣': 'oolong',
        '臺中市': 'oolong',
        '台中市': 'oolong',
        '南投縣': 'mix',
        '雲林縣': 'oolong',
        '嘉義縣': 'oolong',
        '嘉義市': 'oolong',
        '臺南市': 'oolong', // Tainan
        '台南市': 'oolong',
        '高雄市': 'oolong',
        '屏東縣': 'oolong',
        '宜蘭縣': 'oolong',
        '花蓮縣': 'black',
        '臺東縣': 'mix',
        '台東縣': 'mix',
        '彰化縣': 'default', // Changhua
    };

    const TEA_REGIONS = {
        '新北市': [
            '石門區 - 鐵觀音',
            '林口區 - 龍壽茶',
            '三峽區 - 海山茶、\n               　　　　碧螺春、\n               　　　　龍井'
        ],
        '臺北市': [
            '文山區 - 包種茶',
            '南港區 - 包種茶',
            '木柵區 - 鐵觀音'
        ],
        '台北市': [
            '文山區 - 包種茶',
            '南港區 - 包種茶',
            '木柵區 - 鐵觀音'
        ],
        '桃園市': [
            '龍潭區 - 包種茶、\n               　　　　龍泉茶',
            '龜山區 - 壽山茶',
            '蘆竹區 - 蘆峰烏龍茶',
            '復興區 - 梅台茶',
            '平鎮區 - 金壺茶',
            '楊梅區 - 秀才茶'
        ],
        '新竹縣': [
            '峨眉鄉 - 東方美人茶',
            '橫山鄉 - 東方美人茶',
            '關西鎮 - 六福茶'
        ],
        '苗栗縣': [
            '獅潭鎮 - 苗栗烏龍茶',
            '大湖鎮 - 苗栗烏龍茶',
            '頭份市 - 東方美人茶'
        ],
        '南投縣': [
            '南投市 - 青山茶',
            '鹿谷鄉 - 凍頂烏龍茶',
            '名間鄉 - 松柏長青茶',
            '信義鄉 - 玉山烏龍茶',
            '水里鄉 - 玉山烏龍茶',
            '魚池鄉 - 日月潭紅茶',
            '竹山鎮 - 竹山烏龍、\n               　　　　竹山金萱、\n               　　　　杉林溪茶',
            '中寮鄉 - 二尖茶',
            '仁愛鄉 - 霧社茶、\n               　　　　廬山茶'
        ],
        '臺中市': [
            '和平區 - 福壽山茶、\n               　　　　梨山茶、\n               　　　　大禹嶺茶'
        ],
        '台中市': [
            '和平區 - 福壽山茶',
            '梨山茶',
            '大禹嶺茶'
        ],
        '彰化縣': [], // Added for label
        '雲林縣': ['雲頂茶'],
        '嘉義縣': [
            '梅山鄉 - 梅山茶',
            '阿里山鄉 - 阿里山茶',
            '竹崎鄉 - 阿里山珠露、阿里山玉露'
        ],
        '臺南市': [], // Added for label
        '台南市': [],
        '高雄市': ['六龜區 - 六龜茶'],
        '屏東縣': ['滿洲鄉 - 港口茶'],
        '宜蘭縣': [
            '冬山鄉 - 素馨茶',
            '礁溪鄉 - 五峰茶',
            '大同鄉 - 玉蘭茶',
            '三星鄉 - 上將茶'
        ],
        '花蓮縣': [
            '蜜香紅茶',
            '瑞穗鄉 - 舞鶴茶'
        ],
        '臺東縣': [
            '紅烏龍茶',
            '鹿野鄉 - 福鹿茶',
            '太麻里 - 太峰高山茶'
        ],
        '台東縣': [
            '鹿野鄉 - 福鹿茶',
            '鹿野鄉 - 紅烏龍茶',
            '太麻里 - 太峰高山茶'
        ],
    };

    useEffect(() => {
        if (mapData) {
            // Convert TopoJSON to GeoJSON
            const featureCollection = topojson.feature(mapData, mapData.objects.map || mapData.objects.counties);
            setGeoData(featureCollection);
        }
    }, []);

    // Projection & Path Generator
    // Adjusted for 800x600 viewBox to allow space for popups
    const projection = d3.geoMercator()
        .center([120.95, 23.7]) // Centered
        .scale(8800) // Adjusted to 8800 as requested
        .translate([400, 290]);

    const pathGenerator = d3.geoPath().projection(projection);

    const handleRegionClick = (regionName) => {
        if (TEA_REGIONS[regionName]) {
            setActiveRegion(regionName === activeRegion ? null : regionName);
        }
    };

    // Calculate Popup Position
    const getPopupState = () => {
        if (!activeRegion || !geoData) return null;
        const feature = geoData.features.find(f => f.properties.name === activeRegion);
        if (!feature) return null;

        const centroid = pathGenerator.centroid(feature);
        const [cx, cy] = centroid;

        // Determine layout based on region position relative to center (400)
        // If region is on the Left (x < 400), place popup on the Far Left area or slightly offset
        // User requested: "left or right side", "text box inside background"

        // Force Taoyuan and Hsinchu to the LEFT as requested
        const forceLeft = ['桃園市', '新竹縣', '新竹市'].includes(activeRegion);
        const isLeft = cx < 400 || forceLeft;

        // Custom tweaking for specific regions if needed
        let targetX = isLeft ? 150 : 650;

        // Align Y with the region, but clamp it to stay within bounds
        let targetY = Math.max(150, Math.min(450, cy));

        // Adjust New Taipei and Yilan slightly down to avoid covering map
        if (['新北市', '宜蘭縣'].includes(activeRegion)) {
            targetY += 60; // Shift down
        }

        return {
            centroid: { x: cx, y: cy },
            popup: { x: targetX, y: targetY },
            align: isLeft ? 'left' : 'right'
        };
    };

    const popupState = getPopupState();

    return (
        <div className="relative w-full max-w-6xl mx-auto aspect-[4/3] bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100 group">

            {/* Full Backgrounds */}

            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply">
                <img src={mapMountains} alt="" className="w-full h-full object-cover object-bottom" style={{ maskImage: 'linear-gradient(to top, black 50%, transparent)' }} />
            </div>



            <svg viewBox="0 0 800 600" className="w-full h-full relative z-10 transition-all duration-700 select-none">
                <defs>
                    {/* Comic Text Gradients */}
                    <linearGradient id="text-gradient-green" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#A3E635" />
                        <stop offset="100%" stopColor="#15803D" />
                    </linearGradient>
                    <linearGradient id="text-gradient-oolong" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FDE047" />
                        <stop offset="100%" stopColor="#CA8A04" />
                    </linearGradient>
                    <linearGradient id="text-gradient-black" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FCA5A5" />
                        <stop offset="100%" stopColor="#B91C1C" />
                    </linearGradient>
                    <linearGradient id="text-gradient-mix" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FDE047" />
                        <stop offset="100%" stopColor="#F87171" />
                    </linearGradient>

                    {/* Comic / Pop Art Shadow Filter */}
                    <filter id="comic-text-shadow">
                        <feFlood floodColor="black" result="flooded" />
                        <feComposite operator="in" in="flooded" in2="SourceGraphic" result="shadow" />
                        <feOffset in="shadow" dx="3" dy="3" result="offset_shadow" />
                        <feMerge>
                            <feMergeNode in="offset_shadow" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="drop-shadow" height="130%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="2" dy="2" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <marker id="dot" markerWidth="6" markerHeight="6" refX="3" refY="3">
                        <circle cx="3" cy="3" r="2" fill="#78716c" />
                    </marker>
                </defs>

                {/* Map Paths */}
                {/* Map Paths */}
                {/* Map Paths Layer */}
                <g style={{ filter: 'url(#drop-shadow)' }}>
                    {geoData && geoData.features
                        .sort((a, b) => {
                            if (a.properties.name === activeRegion) return 1;
                            if (b.properties.name === activeRegion) return -1;
                            return 0;
                        })
                        .map((feature) => {
                            const name = feature.properties.name;
                            const isTeaRegion = !!TEA_REGIONS[name];
                            const isActive = activeRegion === name;
                            const centroid = pathGenerator.centroid(feature);

                            const fillColor = isActive
                                ? '#E11D48'
                                : (REGION_COLORS[name] || REGION_COLORS['default']);

                            return (
                                <path
                                    key={`path-${name}`}
                                    d={pathGenerator(feature)}
                                    fill={fillColor}
                                    stroke="#FFFFFF"
                                    strokeWidth={isActive ? 2 : 1}
                                    className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer outline-none ${isTeaRegion ? 'hover:brightness-95' : ''}`}
                                    onMouseEnter={() => isTeaRegion && setHoverRegion(name)}
                                    onMouseLeave={() => setHoverRegion(null)}
                                    onClick={() => handleRegionClick(name)}
                                    style={{
                                        filter: isActive ? 'url(#drop-shadow)' : 'none',
                                        transform: isActive ? 'scale(1.2)' : 'scale(1)',
                                        transformOrigin: `${centroid[0]}px ${centroid[1]}px`,
                                        zIndex: isActive ? 10 : 1
                                    }}
                                />
                            );
                        })}
                </g>

                {/* Map Labels Layer - Always on top */}
                <g className="pointer-events-none">
                    {geoData && geoData.features.map((feature) => {
                        const name = feature.properties.name;
                        const isTeaRegion = !!TEA_REGIONS[name];
                        const label = REGION_LABELS[name];
                        const isActive = activeRegion === name;

                        if (!isTeaRegion || !label) return null;

                        const centroid = pathGenerator.centroid(feature);
                        const REGION_LABEL_OFFSETS = {
                            '新北市': { x: -5, y: 18 },
                            '臺北市': { x: 0, y: -5 },
                            '台北市': { x: 0, y: -5 },
                            '宜蘭縣': { x: 0, y: 2 },
                            '基隆市': { x: 5, y: -5 },
                            '桃園市': { x: -10, y: -12 },
                            '新竹縣': { x: 0, y: 2 },
                            '新竹市': { x: -10, y: 0 },
                            '臺中市': { x: 0, y: 5 },
                            '台中市': { x: 0, y: 25 },
                            '彰化縣': { x: 0, y: 0 },
                            '南投縣': { x: 0, y: 0 },
                            '嘉義縣': { x: 5, y: -3 },
                            '嘉義市': { x: -5, y: 0 },
                            '臺南市': { x: -5, y: 2 },
                            '台南市': { x: -15, y: 5 },
                            '高雄市': { x: 8, y: 2 },
                            '屏東縣': { x: -12, y: -20 },
                            '花蓮縣': { x: 2, y: 0 },
                            '臺東縣': { x: 0, y: -5 },
                            '台東縣': { x: 0, y: 5 },
                        };
                        const offset = REGION_LABEL_OFFSETS[name] || { x: 0, y: 0 };
                        const textX = centroid[0] + offset.x;
                        const textY = centroid[1] + offset.y;

                        return (
                            <text
                                key={`label-${name}`}
                                x={textX}
                                y={textY}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontFamily="sans-serif"
                                fontSize="12"
                                fontWeight="600"
                                fill="#44403c"
                                stroke="white"
                                strokeWidth="3"
                                paintOrder="stroke"
                                className="transition-all duration-300 select-none drop-shadow-sm"
                                style={{
                                    transformOrigin: `${centroid[0]}px ${centroid[1]}px`
                                }}
                            >
                                {label}
                            </text>
                        );
                    })}
                </g>

                {/* Mountain Markers Layer */}
                <g className="pointer-events-none">
                    {MOUNTAIN_MARKERS.map((mountain, i) => {
                        const [x, y] = projection([mountain.x, mountain.y]);
                        return (
                            <g key={i} transform={`translate(${x}, ${y})`}>
                                {/* Triangle Icon */}
                                <path
                                    d="M0 -6 L5 4 L-5 4 Z"
                                    fill="#1c1917" // Stone-900
                                />
                                {/* Label */}
                                <text
                                    x={0}
                                    y={14}
                                    textAnchor="middle"
                                    fontFamily="sans-serif"
                                    fontSize="10"
                                    fontWeight="600"
                                    fill="#1c1917" // Stone-900
                                    className="select-none drop-shadow-sm"
                                >
                                    {mountain.name}
                                </text>
                            </g>
                        );
                    })}
                </g>

                {/* Connector Line */}
                {popupState && (
                    <g key={`connector-${activeRegion}`} className="pointer-events-none animate-in fade-in duration-700">
                        <path
                            d={`M${popupState.centroid.x},${popupState.centroid.y} 
                               Q${(popupState.centroid.x + popupState.popup.x) / 2},${popupState.popup.y} 
                               ${popupState.popup.x},${popupState.popup.y}`}
                            fill="none"
                            stroke="#57534e"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            markerStart="url(#dot)"
                            className="opacity-60"
                        />
                        <circle cx={popupState.centroid.x} cy={popupState.centroid.y} r="3" fill="#57534e" />
                    </g>
                )}
            </svg>

            {/* Popup Info Panel */}
            {activeRegion && popupState && (
                <div
                    key={activeRegion}
                    className="absolute z-20 w-64 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl border border-stone-200 animate-in fade-in zoom-in-95 duration-700"
                    style={{
                        left: `${(popupState.popup.x / 800) * 100}%`,
                        top: `${(popupState.popup.y / 600) * 100}%`,
                        transform: 'translate(-50%, -50%)' // Center div on anchor point
                    }}
                >
                    <div className="flex items-center gap-2 mb-3 border-b border-stone-100 pb-2">
                        <div className="w-2 h-6 bg-amber-600 rounded-full"></div>
                        <h3 className="text-xl font-bold text-stone-800">{activeRegion}</h3>
                    </div>

                    <ul className="space-y-2">
                        {TEA_REGIONS[activeRegion].map((tea, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-stone-600 text-sm font-medium">
                                <Leaf className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                <span className="whitespace-pre-line">{tea}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Simple Instructions Overlay when idle */}
            {!activeRegion && (
                <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-stone-100 shadow-sm text-stone-500 text-sm flex items-center gap-2 animate-pulse">
                    <Info className="w-4 h-4" />
                    點擊地圖色塊查看產地茶品
                </div>
            )}
        </div>
    );
};

export default TaiwanTeaMap;
