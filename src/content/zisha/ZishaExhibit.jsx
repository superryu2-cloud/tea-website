import React, { useState, useEffect, useRef } from 'react';
import AtlasDockLayout from '../../components/AtlasDockLayout';

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
  { id: 'intro', label: '引言', subtitle: '掌中乾坤，文人雅器', component: ZishaIntro },
  { id: 'origin', label: '1．天賜之土', subtitle: '陶都宜興的風土根源', component: ZishaOrigin },
  { id: 'material', label: '2．五色斑斕', subtitle: '紫砂的材質美學', component: ZishaMaterial },
  { id: 'clay', label: '紫砂泥料專區', subtitle: '礦料 × 命名 × 分類', component: ZishaClay },
  { id: 'visual', label: '紫砂圖解速查', subtitle: '器型 × 工藝 × 養護', component: ZishaVisuals },
  { id: 'craft', label: '3．匠心獨運', subtitle: '紫砂壺的成型之藝', component: ZishaCraft },
  { id: 'shape', label: '4．器以載道', subtitle: '紫砂壺的造型之魂', component: ZishaShape },
  { id: 'culture', label: '5．文人點化', subtitle: '紫砂壺的雅士之情', component: ZishaCulture },
  { id: 'appreciation', label: '6．品鑑之道', subtitle: '藏養之樂', component: ZishaAppreciation },
  { id: 'outro', label: '結語', subtitle: '超越器物的不朽價值', component: ZishaOutro },
];

export default function ZishaExhibit({ siteNavHeightPx = 80 }) {
  const [activeTabId, setActiveTabId] = useState('intro');
  const labelRefs = useRef([]);

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
              <h3 className="text-lg font-extrabold text-stone-900 mb-3 px-2 border-l-4 border-amber-600">
                紫砂專區
              </h3>
              <div className="space-y-1">
                {TOC.map((item, index) => {
                  const isActive = item.id === activeTabId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveTabId(item.id);
                        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`block w-full text-left rounded-xl px-4 py-3 transition-all duration-300 border box-border tool-item chapter-nav-item text-lg font-bold focus:scale-[1.02] ${isActive
                        ? 'bg-gradient-to-br from-amber-100/80 to-orange-50 border-amber-300 text-amber-900 shadow-md ring-1 ring-amber-200'
                        : 'bg-white/40 border-stone-200/60 hover:border-amber-300 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-white hover:shadow-md tool-muted hover:text-stone-900'
                        }`}
                    >
                      <span className="block min-w-0">
                        <span
                          ref={(el) => {
                            labelRefs.current[index] = el;
                          }}
                          className="block chapter-label--flip"
                        >
                          <span className="chapter-label-inner">
                            <span className="chapter-label-front truncate">{item.label}</span>
                            <span className="chapter-label-back truncate text-amber-600">{item.label}</span>
                          </span>
                        </span>
                        <span className={`block text-sm mt-0.5 truncate transition-colors ${isActive ? 'text-amber-800/80' : 'tool-muted group-hover:text-stone-600'}`}>
                          {item.subtitle}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          }
        >
          {/* Main Content Area */}
          <main className="min-h-[50vh]">
            {/* Hero Header (Moved Inside) */}
            <div className="museum-panel p-8 md:p-10 text-center mb-10 border-b border-stone-200/60 pb-10">
              <div className="museum-label mx-auto">EXHIBIT · ZISHA</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">紫砂專區</h2>
              <p className="mt-4 max-w-2xl text-lg text-stone-700 mx-auto leading-relaxed">
                泥與火之歌：宜興紫砂壺的文化、工藝與美學探源
              </p>
            </div>

            <ActiveComponent />
          </main>
        </AtlasDockLayout>
      </div>
    </div>
  );
}
