import React, { useMemo, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AccordionPanel from './AccordionPanel';

export default function ChapterSidebar({
  title = '章節',
  icon: Icon,
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
        style={{
          maxHeight: `calc(100vh - ${resolvedTopOffsetPx}px - 12px)`,
          overflowAnchor: 'none',
          scrollPaddingBottom: '40px',
          overscrollBehavior: 'auto',
        }}
        className="rounded-3xl border border-stone-200 bg-white shadow-lg shadow-stone-200/50 p-5 overflow-y-auto"
      >
        {Icon ? (
          <div className="flex items-center gap-3 mb-4 px-1">
            <div className="w-10 h-10 rounded-2xl border border-stone-200 bg-white shadow-sm flex items-center justify-center text-emerald-600">
              <Icon size={20} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-extrabold text-stone-900 tracking-tight">
              {title}
            </h3>
          </div>
        ) : (
          <h3 className="text-stone-500 font-bold mb-4 pl-1">
            {title}
          </h3>
        )}
        <div className="space-y-2">
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
                  className={`chapter-nav-item group w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 border focus-visible:outline-none ${isActive
                    ? 'bg-amber-50 border-amber-300 text-stone-900 shadow-sm'
                    : 'bg-white border-stone-200 text-stone-600 hover:border-amber-200 hover:bg-amber-50/50 hover:text-stone-900'
                    }`}
                >
                  <span className="inline-flex items-center justify-between w-full gap-3">
                    <span className="min-w-0 font-bold text-[18px] chapter-label--flip leading-snug">
                      <span className="chapter-label-inner">
                        <span className="chapter-label-front truncate">{item.label}</span>
                        <span className="chapter-label-back truncate text-amber-600">{item.label}</span>
                      </span>
                    </span>
                    {hasSub ? (
                      <ChevronDown
                        size={16}
                        className={`shrink-0 opacity-50 transition-transform duration-[320ms] ease-out group-hover:opacity-100 ${isExpanded ? 'rotate-180 text-amber-600' : ''}`}
                      />
                    ) : null}
                  </span>
                </button>

                {hasSub ? (
                  <AccordionPanel
                    open={isExpanded}
                    className="ml-3 pl-3 border-l border-stone-200/60"
                    contentClassName="pt-1 space-y-1"
                  >
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
                            // Scroll preservation logic
                            if (preservedScrollTop == null || typeof window === 'undefined') return;
                            window.requestAnimationFrame(() => {
                              if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = preservedScrollTop;
                            });
                          }}
                          className={`chapter-subitem w-full text-left rounded-lg px-3 py-2 transition-colors relative group/sub ${subActive
                            ? 'bg-stone-100/80 text-stone-900 font-bold shadow-sm ring-1 ring-stone-200/50'
                            : 'hover:bg-stone-50 text-stone-600 hover:text-stone-900'
                            }`}
                        >
                          <span className="block text-[18px] font-semibold chapter-label--flip">
                            <span className="chapter-label-inner">
                              <span className="chapter-label-front truncate">{sub.label}</span>
                              <span className="chapter-label-back truncate text-amber-600">{sub.label}</span>
                            </span>
                          </span>
                          {/* Active Indicator Dot */}
                          {subActive && (
                            <span className="absolute left-[-17px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm" />
                          )}
                        </button>
                      );
                    })}
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
