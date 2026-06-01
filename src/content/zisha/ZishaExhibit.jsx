import React, { useState, useEffect } from 'react';
import AtlasDockLayout from '../../components/AtlasDockLayout';
import { 
  Sparkles, Map, Palette, Droplets, Layers, Flame, Compass, Heart, Award, Bookmark, BookOpen
} from 'lucide-react';

// Import split chapters
import ZishaIntro from './chapters/ZishaIntro';
import ZishaOrigin from './chapters/ZishaOrigin';
import ZishaMaterial from './chapters/ZishaMaterial';
import ZishaClay from './chapters/ZishaClay';
import ZishaVisuals from './chapters/ZishaVisuals';
import ZishaCraft from './chapters/ZishaCraft';
import ZishaShape from './chapters/ZishaShape';
import ZishaCulture from './chapters/ZishaCulture';
import ZishaAppreciation from './chapters/ZishaAppreciation';
import ZishaOutro from './chapters/ZishaOutro';

const TOC = [
  { id: 'intro', label: '引言', subtitle: '掌中乾坤，文人雅器', component: ZishaIntro, icon: Sparkles },
  { id: 'origin', label: '1．天賜之土', subtitle: '陶都宜興的風土根源', component: ZishaOrigin, icon: Map },
  { id: 'material', label: '2．五色斑斕', subtitle: '紫砂的材質美學', component: ZishaMaterial, icon: Palette },
  { id: 'clay', label: '紫砂泥料專區', subtitle: '礦料 × 命名 × 分類', component: ZishaClay, icon: Droplets },
  { id: 'visual', label: '紫砂圖解速查', subtitle: '器型 × 工藝 × 養護', component: ZishaVisuals, icon: Layers },
  { id: 'craft', label: '3．匠心獨運', subtitle: '紫砂壺的成型之藝', component: ZishaCraft, icon: Flame },
  { id: 'shape', label: '4．器以載道', subtitle: '紫砂壺的造型之魂', component: ZishaShape, icon: Compass },
  { id: 'culture', label: '5．文人點化', subtitle: '紫砂壺的雅士之情', component: ZishaCulture, icon: Heart },
  { id: 'appreciation', label: '6．品鑑之道', subtitle: '藏養之樂', component: ZishaAppreciation, icon: Award },
  { id: 'outro', label: '結語', subtitle: '超越器物的不朽價值', component: ZishaOutro, icon: Bookmark },
];

export default function ZishaExhibit({ siteNavHeightPx = 80 }) {
  const [activeTabId, setActiveTabId] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlCh = params.get('chapter');
      if (urlCh && TOC.some((t) => t.id === urlCh)) {
        return urlCh;
      }
    }
    return 'intro';
  });



  useEffect(() => {
    const handlePopstate = () => {
      const params = new URLSearchParams(window.location.search);
      const urlCh = params.get('chapter');
      if (urlCh && TOC.some((t) => t.id === urlCh)) {
        setActiveTabId(urlCh);
      } else {
        setActiveTabId('intro');
      }
    };
    window.addEventListener('popstate', handlePopstate);
    return () => window.removeEventListener('popstate', handlePopstate);
  }, []);

  const handleChapterSelect = (id) => {
    setActiveTabId(id);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('chapter', id);
      window.history.pushState(null, '', url.pathname + url.search);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // NOTE: AtlasDockLayout handles sticky positioning via CSS variables, so manual stickyTop might be redundant for the wrapper,
  // but we can pass styles to the sidebar panel for height constraint.
  const sidebarHeightStyle = {
    maxHeight: `calc(100vh - ${siteNavHeightPx + 48 + 32}px)`, // +32 for bottom padding buffer
    overflowY: 'auto',
  };

  const ActiveComponent = TOC.find((item) => item.id === activeTabId)?.component || ZishaIntro;

  return (
    <div className="museum-page">
      <div className="museum-stage">
        <AtlasDockLayout
          topOffsetPx={siteNavHeightPx + 48}
          sidebar={
            <div
              className="museum-panel p-4 md:p-5 tool-surface shadow-sm scrollbar-thin"
              style={sidebarHeightStyle}
            >
              <h3 className="text-lg font-extrabold text-stone-900 mb-4 px-2 border-l-4 border-amber-600">
                目錄導航
              </h3>
              <div className="space-y-2">
                {TOC.map((item) => {
                  const isActive = item.id === activeTabId;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleChapterSelect(item.id)}
                      className={`flex items-center gap-3 w-full text-left rounded-2xl px-4 py-4 transition-all duration-300 border box-border text-[18px] font-bold focus:scale-[1.02] ${isActive
                        ? 'bg-gradient-to-br from-amber-800 to-amber-900 border-amber-900 text-white shadow-lg ring-1 ring-amber-700/50 scale-[1.02]'
                        : 'bg-white/60 border-stone-200/80 hover:border-amber-500/50 hover:bg-amber-50/30 hover:text-amber-900 hover:shadow-sm text-stone-600'
                        }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'bg-white/20 text-amber-200' : 'bg-stone-100 text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-700'}`}>
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block truncate text-[18px] leading-tight">
                          {item.label}
                        </span>
                        <span className={`block text-[15px] mt-1 truncate transition-colors font-medium ${isActive ? 'text-amber-100/80' : 'text-stone-400'}`}>
                          {item.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          }
        >
          {/* Main Content Area */}
          <main className="min-h-[50vh]">
            {/* ── 手機版章節選擇器（xl 以上隱藏，由側邊欄取代）── */}
            <div className="xl:hidden sticky top-0 z-30 -mx-4 px-4 py-2 bg-[#fcfbfa]/95 backdrop-blur-sm border-b border-stone-200 shadow-sm mb-6">
                <label htmlFor="mobile-zisha-select" className="sr-only">選擇紫砂章節</label>
                <select
                    id="mobile-zisha-select"
                    value={activeTabId}
                    onChange={(e) => handleChapterSelect(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-[15px] font-bold text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600 appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2378350f' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                >
                    {TOC.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.label} — {item.subtitle}
                        </option>
                    ))}
                </select>
            </div>
            {/* Premium Hero Header Card */}
            <div className="relative rounded-[32px] overflow-hidden mb-12 border border-amber-800/30 shadow-2xl p-8 md:p-12 text-center bg-gradient-to-br from-[#3d2f32] via-[#2a1e20] to-[#1e1315]">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.08)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-500/10 rounded-[24px] pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                  <BookOpen size={13} className="animate-pulse" />
                  EXHIBIT · ZISHA MUSEUM
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest text-stone-100 font-serif" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                  紫砂專區
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
                <p className="max-w-2xl text-[17px] md:text-[19px] text-stone-300 mx-auto leading-relaxed font-medium">
                  泥與火之歌：宜興紫砂壺的文化、工藝與美學探源
                </p>
              </div>
            </div>

            <ActiveComponent />
          </main>
        </AtlasDockLayout>
      </div>
    </div>
  );
}
