import React, { useState } from 'react';
import { Calendar, Compass, Leaf, MapPin } from 'lucide-react';

const timelineEvents = [
  {
    key: '1810-kochao',
    year: '1810',
    title: '柯朝引種',
    place: '櫛魚坑（今新北市瑞芳區）',
    description:
      '台灣的小葉種茶可追溯至1810年前後，柯朝自福建武夷山攜帶茶樹種子來到櫛魚坑，開啟台灣烏龍茶的發展史。',
    x: 60,
    y: 12,
    align: 'left',
    color: '#10b981',
    ring: 'rgba(16, 185, 129, 0.25)',
  },
  {
    key: '1869-formosa-tea',
    year: '1869',
    title: 'Formosa Tea 外銷',
    place: '大稻埕 / 番庄商行',
    description:
      '英商杜德（John Dodd）與買辦李春生將台灣茶銷往美國，價格翻漲數倍，開啟台灣茶的黃金時代。',
    x: 52,
    y: 20,
    align: 'right',
    color: '#38bdf8',
    ring: 'rgba(56, 189, 248, 0.25)',
  },
  {
    key: '1930-pengfeng',
    year: '1930',
    title: '膨風茶命名',
    place: '新竹、苗栗',
    description:
      '白毫烏龍因市場事件與茶價飆升而得「膨風茶」之名，後續成為東方美人的重要脈絡。',
    x: 44,
    y: 32,
    align: 'left',
    color: '#f472b6',
    ring: 'rgba(244, 114, 182, 0.25)',
  },
  {
    key: '1968-dongding',
    year: '1968',
    title: '凍頂烏龍成形',
    place: '南投鹿谷',
    description:
      '鹿谷凍頂烏龍以焙火香型與比賽制度奠定中部代表地位，成為台灣特色茶的重要座標。',
    x: 46,
    y: 58,
    align: 'right',
    color: '#f59e0b',
    ring: 'rgba(245, 158, 11, 0.25)',
  },
  {
    key: '1970s-domestic',
    year: '1970s',
    title: '外銷轉內銷',
    place: '台灣茶區',
    description:
      '外銷市場受衝擊後，茶產業轉向內銷與茶藝復興，成為當代台灣茶文化的重要起點。',
    x: 50,
    y: 44,
    align: 'right',
    color: '#22c55e',
    ring: 'rgba(34, 197, 94, 0.25)',
  },
  {
    key: '1976-high-mountain',
    year: '1976',
    title: '高山茶崛起',
    place: '梨山 / 阿里山等高海拔',
    description:
      '吳振鐸倡議高山種茶，清香型高山茶逐步成為市場主流，改變台灣茶的風味走向。',
    x: 42,
    y: 64,
    align: 'left',
    color: '#6366f1',
    ring: 'rgba(99, 102, 241, 0.25)',
  },
  {
    key: '1985-bottled-tea',
    year: '1985',
    title: '瓶裝茶啟動',
    place: '全台',
    description:
      '台灣第一瓶罐裝茶「開喜烏龍茶」上市，反映飲茶文化的世代變遷。',
    x: 54,
    y: 50,
    align: 'left',
    color: '#a855f7',
    ring: 'rgba(168, 85, 247, 0.25)',
  },
  {
    key: '1995-fulu',
    year: '1995-96',
    title: '福鹿茶受衝擊',
    place: '台東鹿野',
    description:
      '高山茶風潮席捲市場，台東福鹿茶在口感與價格上難以競爭，產業再次面臨挑戰。',
    x: 58,
    y: 74,
    align: 'right',
    color: '#f97316',
    ring: 'rgba(249, 115, 22, 0.25)',
  },
  {
    key: '2008-red-oolong',
    year: '2008',
    title: '鹿野紅烏龍問世',
    place: '台東鹿野',
    description:
      '紅烏龍以重萎凋、重攪拌與重焙火工藝結合紅茶與烏龍特色，成為東部代表茶。',
    x: 58,
    y: 82,
    align: 'left',
    color: '#f97316',
    ring: 'rgba(249, 115, 22, 0.25)',
  },
];

export default function TaiwanTeaHistoryMap() {
  const [activeKey, setActiveKey] = useState(timelineEvents[0]?.key ?? '1810-kochao');
  const activeEvent =
    timelineEvents.find((event) => event.key === activeKey) ?? timelineEvents[0];
  const [viewMode, setViewMode] = useState('interactive');
  const isLecture = viewMode === 'lecture';

  return (
    <div className="animate-fadeIn space-y-8 print:space-y-6">
      <div className="relative rounded-2xl border border-stone-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8 md:p-12 overflow-hidden print:bg-white print:border-none print:shadow-none print:p-0">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl -mr-24 -mt-24" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl -ml-28 -mb-24" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-700 text-white px-3 py-1 text-sm font-extrabold">
            <Compass size={16} className="opacity-90" />
            台灣特色茶 · 歷史地圖
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
            台灣茶葉發展時間線與地點
          </h2>
          <p className="mt-4 text-lg md:text-xl text-stone-700 leading-relaxed">
            以現有內容為基礎整理的教學用地圖：用時間軸與地點定位台灣特色茶的關鍵節點。
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm print:hidden">
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-stone-700">
              <Leaf size={16} className="opacity-70" />
              連結茶種與產區
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-stone-700">
              <Calendar size={16} className="opacity-70" />
              年代排序與教學重點
            </span>
            <div className="ml-auto flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setViewMode('interactive')}
                className={`rounded-full px-4 py-2 text-sm font-extrabold transition-colors ${
                  isLecture
                    ? 'border border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    : 'bg-stone-900 text-white'
                }`}
              >
                互動模式
              </button>
              <button
                type="button"
                onClick={() => setViewMode('lecture')}
                className={`rounded-full px-4 py-2 text-sm font-extrabold transition-colors ${
                  isLecture
                    ? 'bg-emerald-700 text-white'
                    : 'border border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                }`}
              >
                教學投影片版
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`grid gap-8 ${isLecture ? 'lg:grid-cols-[1.1fr_1fr]' : 'lg:grid-cols-[1.05fr_1.2fr]'}`}>
        <div className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm print:border print:bg-white print:shadow-none">
          <div className="flex items-center gap-2 text-sm font-extrabold text-stone-700">
            <MapPin size={16} className="text-emerald-700" />
            台灣茶史地圖
          </div>
          <div
            className={`mt-4 relative aspect-[3/5] rounded-2xl border border-sky-100 bg-gradient-to-b from-sky-50 via-white to-emerald-50 overflow-hidden ${
              isLecture ? 'pointer-events-none' : ''
            }`}
          >
            <svg viewBox="0 0 220 520" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="taiwan-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="100%" stopColor="#d1fae5" />
                </linearGradient>
              </defs>
              <path
                d="M120 12 L146 34 L162 68 L170 114 L168 150 L158 200 L148 240 L138 280 L126 320 L114 360 L98 408 L80 452 L64 488 L52 502 L46 492 L40 456 L44 412 L54 364 L66 310 L80 258 L92 210 L104 160 L112 114 L114 68 L110 40 Z"
                fill="url(#taiwan-fill)"
                stroke="#94a3b8"
                strokeWidth="2"
              />
            </svg>

            {timelineEvents.map((event) => {
              const isActive = event.key === activeKey;
              const labelPosition =
                event.align === 'left'
                  ? 'left-full ml-3 text-left'
                  : 'right-full mr-3 text-right';
              return (
                <button
                  key={event.key}
                  type="button"
                  onClick={() => setActiveKey(event.key)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
                  style={{ left: `${event.x}%`, top: `${event.y}%` }}
                  aria-pressed={isActive}
                >
                  <span
                    className={`block rounded-full transition-transform ${isActive ? 'h-4 w-4' : 'h-3 w-3'}`}
                    style={{
                      backgroundColor: event.color,
                      boxShadow: isActive ? `0 0 0 6px ${event.ring}` : 'none',
                    }}
                  />
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border px-3 py-2 text-xs shadow-sm transition-all ${labelPosition} ${
                      isActive ? 'bg-white text-stone-900 border-stone-200' : 'bg-white/80 text-stone-600 border-stone-100'
                    }`}
                  >
                    <div className="font-extrabold tracking-wide">{event.year}</div>
                    <div className="text-[11px]">{event.place}</div>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-stone-500 leading-relaxed">
            地圖標記依年份排列，可點選任一節點對照右側時間線說明。
          </p>
        </div>

        <div className="space-y-6">
          {!isLecture && (
            <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
              <div className="flex items-center gap-2 text-sm font-extrabold text-stone-700">
                <Calendar size={16} className="text-amber-600" />
                時間線
              </div>
              <div className="mt-4 space-y-3">
                {timelineEvents.map((event) => {
                  const isActive = event.key === activeKey;
                  return (
                    <button
                      key={event.key}
                      type="button"
                      onClick={() => setActiveKey(event.key)}
                      className={`w-full rounded-2xl border px-4 py-3 text-left transition-all ${
                        isActive
                          ? 'border-stone-300 bg-white shadow-sm'
                          : 'border-transparent bg-stone-50/60 hover:border-stone-200 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: event.color }}
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-extrabold text-stone-900">{event.year}</div>
                          <div className="text-sm font-semibold text-stone-700">{event.title}</div>
                          <div className="text-xs text-stone-500 mt-1">{event.place}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {isLecture && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-extrabold text-stone-700">
                <Calendar size={16} className="text-amber-600" />
                教學時間線
              </div>
              <div className="mt-4 space-y-4">
                {timelineEvents.map((event) => (
                  <div key={event.key} className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 h-3 w-3 rounded-full"
                        style={{ backgroundColor: event.color }}
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-sm font-extrabold text-stone-900">{event.year}</div>
                        <div className="text-base font-bold text-stone-900">{event.title}</div>
                        <div className="text-xs text-stone-500 mt-1">{event.place}</div>
                        <p className="mt-2 text-sm text-stone-700 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!isLecture && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-bold tracking-widest text-stone-500">SELECTED</div>
              <div className="mt-2 text-2xl font-extrabold text-stone-900">{activeEvent.year}</div>
              <div className="mt-1 text-lg font-bold text-stone-900">{activeEvent.title}</div>
              <div className="mt-1 text-sm text-stone-600">{activeEvent.place}</div>
              <p className="mt-4 text-stone-700 leading-relaxed">{activeEvent.description}</p>
            </div>
          )}

          <div className="rounded-2xl border border-stone-200 bg-sky-50/70 p-5 print:border print:bg-white">
            <div className="text-sm font-extrabold text-sky-800">教學提示</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              可先點時間線帶出背景，再指向地圖說明地理位置與茶種演變；適合搭配東方美人、凍頂、高山茶與紅烏龍的章節內容。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
