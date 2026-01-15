import React, { useMemo, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AccordionPanel from './AccordionPanel';

export default function ChapterSidebar({
  title = '章節',
  items,
  activeKey,
  onSelectKey,
  subItemsByKey,
  activeSubHref,
  onSelectSubHref,
  topOffsetPx = 96,
  pinMode = 'sticky',
}) {
  const resolvedItems = useMemo(() => items ?? [], [items]);
  const resolvedTopOffsetPx = Math.max(0, topOffsetPx);
  const scrollContainerRef = useRef(null);
  const hasSubByKey = useMemo(() => {
    const map = new Map();
    resolvedItems.forEach((item) => {
      map.set(item.key, Boolean(subItemsByKey?.[item.key]?.length));
    });
    return map;
  }, [resolvedItems, subItemsByKey]);

  const [activeCollapse, setActiveCollapse] = useState(() => ({ key: null, collapsed: false }));

  if (!resolvedItems.length) return null;

  const asideClassName =
    pinMode === 'sticky' ? 'hidden xl:block sticky self-start' : 'hidden xl:block self-start';
  const asideStyle = pinMode === 'sticky' ? { top: `${resolvedTopOffsetPx}px` } : undefined;

  return (
    <aside className={asideClassName} style={asideStyle}>
      <div
        ref={scrollContainerRef}
        className="museum-panel px-4 pt-4 pb-10 pr-2 overflow-y-auto tool-surface"
        style={{
          maxHeight: `calc(100vh - ${resolvedTopOffsetPx}px - 12px)`,
          overflowAnchor: 'none',
          scrollPaddingBottom: '40px',
        }}
      >
        <div className="px-1 pb-2 text-xs font-extrabold tracking-widest tool-muted">{title}</div>
        <div className="space-y-1">
          {resolvedItems.map((item) => {
            const hasSub = hasSubByKey.get(item.key);
            const isActive = item.key === activeKey;
            const isCollapsed = isActive && activeCollapse.key === item.key ? activeCollapse.collapsed : false;
            const isExpanded = Boolean(hasSub && isActive && !isCollapsed);
            const subItems = subItemsByKey?.[item.key] ?? [];
            return (
              <div key={item.key} className="space-y-1">
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    if (!onSelectKey) return;

                    if (isActive && hasSub) {
                      onSelectKey(item.key);
                      setActiveCollapse((prev) => {
                        const currentCollapsed = prev.key === item.key ? prev.collapsed : false;
                        return { key: item.key, collapsed: !currentCollapsed };
                      });
                      return;
                    }

                    onSelectKey(item.key);
                    setActiveCollapse({ key: item.key, collapsed: false });
                  }}
                  className={`w-full text-left rounded-xl px-3 py-2.5 transition-colors tool-item chapter-nav-item text-base font-semibold ${isActive ? 'tool-item--active' : ''}`}
                >
                  <span className="inline-flex items-center justify-between w-full gap-3">
                    <span className="min-w-0 font-semibold chapter-label--flip">
                      <span className="chapter-label-inner">
                        <span className="chapter-label-front truncate">{item.label}</span>
                        <span className="chapter-label-back truncate">{item.label}</span>
                      </span>
                    </span>
                    {hasSub ? (
                      <ChevronDown
                        size={16}
                        className={`shrink-0 opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    ) : null}
                  </span>
                </button>

                {hasSub ? (
                  <AccordionPanel
                    open={isExpanded}
                    className="ml-2 pl-2 border-l"
                    style={{ borderColor: 'var(--tool-border)' }}
                    contentClassName="pt-1"
                  >
                    <div className="space-y-1">
                      {subItems.map((sub) => {
                        const subActive = sub.href === activeSubHref;
                        return (
                          <button
                            key={sub.href}
                            type="button"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                              const preservedScrollTop = scrollContainerRef.current?.scrollTop ?? null;
                              onSelectSubHref?.(sub.href);
                              if (preservedScrollTop == null || typeof window === 'undefined') return;
                              window.requestAnimationFrame(() => {
                                if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = preservedScrollTop;
                                window.setTimeout(() => {
                                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = preservedScrollTop;
                                }, 0);
                              });
                            }}
                            className={`w-full text-left rounded-lg px-3 py-2.5 transition-colors chapter-subitem text-base font-semibold ${subActive ? 'tool-subitem--active' : 'hover:bg-[var(--tool-hover-bg)]'
                              }`}
                          >
                            <span className="block chapter-label--flip">
                              <span className="chapter-label-inner">
                                <span className="chapter-label-front truncate">{sub.label}</span>
                                <span className="chapter-label-back truncate">{sub.label}</span>
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </AccordionPanel>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
