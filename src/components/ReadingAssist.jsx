import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function slugifyHeading(text) {
  const normalized = String(text ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[“”"「」『』()（）【】[\]{}<>]/g, '')
    .replace(/[.,!?;:，。！？；：]/g, '')
    .slice(0, 64);

  const latinSlug = normalized
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return latinSlug || null;
}

function resolveAnchorElement(heading) {
  if (!heading) return null;

  const explicit = heading.closest?.('[data-reading-anchor]');
  if (explicit) return explicit;

  const headerAncestor = heading.closest?.('header');
  if (headerAncestor) return headerAncestor;

  let node = heading.parentElement;
  for (let i = 0; i < 4 && node; i += 1) {
    const className = typeof node.className === 'string' ? node.className : '';
    const looksLikeHeader =
      className.includes('border-b') &&
      (className.includes('bg-') || className.includes('bg-gradient') || className.includes('from-')) &&
      (className.includes('px-') || className.includes('py-') || className.includes('p-'));

    if (looksLikeHeader) return node;
    node = node.parentElement;
  }

  return heading;
}

export default function ReadingAssist({
  contentRef,
  headingSelector = 'h2, h3',
  stickyTopClassName = '',
  scrollMarginTopPx = 140,
  defaultOpen = false,
  extraOcclusionElementIds = [],
}) {
  const chromeRef = useRef(null);
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [stickyTopPx, setStickyTopPx] = useState(0);
  const extraOcclusionKey = useMemo(() => (extraOcclusionElementIds ?? []).filter(Boolean).join('|'), [extraOcclusionElementIds]);
  const activeIdRef = useRef(null);
  const pendingActiveRef = useRef({ id: null, hits: 0 });

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const extraIds = extraOcclusionKey ? extraOcclusionKey.split('|') : [];

    const measure = () => {
      const nav = document.getElementById('site-nav');
      const navHeight = nav ? nav.getBoundingClientRect().height : 0;
      const extraHeight = extraIds.reduce((sum, id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return sum + (rect ? rect.height : 0);
      }, 0);
      const nextTop = Math.ceil(Math.max(0, navHeight + extraHeight + 16));
      setStickyTopPx((prev) => (prev === nextTop ? prev : nextTop));
    };

    const rafId = window.requestAnimationFrame(measure);
    window.addEventListener('resize', measure);

    const ro = window.ResizeObserver ? new ResizeObserver(measure) : null;
    if (ro) {
      const nav = document.getElementById('site-nav');
      if (nav) ro.observe(nav);
      extraIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) ro.observe(el);
      });
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      ro?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [extraOcclusionKey]);

  const getOcclusionPx = useCallback(() => {
    if (typeof document === 'undefined') return scrollMarginTopPx;
    const nav = document.getElementById('site-nav');
    const navBottom = nav ? nav.getBoundingClientRect().bottom : 0;
    const extraIds = extraOcclusionKey ? extraOcclusionKey.split('|') : [];
    const extraBottom = extraIds.reduce((maxBottom, id) => {
      const rect = document.getElementById(id)?.getBoundingClientRect();
      return rect ? Math.max(maxBottom, rect.bottom) : maxBottom;
    }, 0);
    const chrome = chromeRef.current;
    const chromeBottom = chrome ? chrome.getBoundingClientRect().bottom : 0;
    return Math.max(scrollMarginTopPx, Math.ceil(Math.max(navBottom, chromeBottom, extraBottom) + 36));
  }, [extraOcclusionKey, scrollMarginTopPx]);

  const scrollMarginFallbackStyle = useMemo(() => `${Math.max(scrollMarginTopPx, 240)}px`, [scrollMarginTopPx]);

  useEffect(() => {
    const container = contentRef?.current;
    if (!container) return undefined;

    const headings = Array.from(container.querySelectorAll(headingSelector)).filter((node) => {
      const text = node.textContent?.trim();
      return Boolean(text);
    });

    const resolved = headings.map((heading, index) => {
      const text = heading.textContent?.trim() ?? '';
      const depth = heading.tagName === 'H2' ? 2 : 3;
      const anchor = resolveAnchorElement(heading) ?? heading;

      if (!heading.id && !anchor.id) {
        const slug = slugifyHeading(text);
        anchor.id = slug ? `section-${slug}` : `section-${index + 1}`;
      }

      if (heading.id && anchor !== heading && !anchor.id) {
        anchor.id = heading.id;
        heading.removeAttribute('id');
      }

      const offset = typeof window !== 'undefined' ? getOcclusionPx() : scrollMarginTopPx;
      const margin = `${offset}px`;
      anchor.style.scrollMarginTop = margin || scrollMarginFallbackStyle;

      return { id: anchor.id || heading.id, text, depth };
    });

    let rafId = 0;
    rafId = window.requestAnimationFrame(() => {
      setItems(resolved);
      if (resolved.length) setActiveId((prev) => prev ?? resolved[0].id);
    });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [contentRef, getOcclusionPx, headingSelector, scrollMarginFallbackStyle, scrollMarginTopPx]);

  useEffect(() => {
    const container = contentRef?.current;
    if (!container) return undefined;

    let rafId = 0;

    const update = () => {
      rafId = 0;

      const rect = container.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const height = container.scrollHeight;
      const viewport = window.innerHeight;
      const maxScroll = Math.max(1, height - viewport);
      const currentScroll = window.scrollY - top;
      const nextProgress = Math.min(1, Math.max(0, currentScroll / maxScroll));
      setProgress(nextProgress);

      const threshold = window.scrollY + getOcclusionPx() + 8;
      let nextActive = items[0]?.id ?? null;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.offsetTop <= threshold) nextActive = item.id;
        else break;
      }
      const currentActiveId = activeIdRef.current;
      if (!nextActive || nextActive === currentActiveId) {
        pendingActiveRef.current = { id: null, hits: 0 };
        return;
      }
      const pending = pendingActiveRef.current;
      if (pending.id === nextActive) pending.hits += 1;
      else pendingActiveRef.current = { id: nextActive, hits: 1 };

      if (pendingActiveRef.current.hits >= 2) {
        pendingActiveRef.current = { id: null, hits: 0 };
        setActiveId(nextActive);
      }
    };

    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [contentRef, getOcclusionPx, items]);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    setIsOpen(false);

    window.requestAnimationFrame(() => {
      const offset = getOcclusionPx();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  };

  if (!items.length) return null;

  return (
    <div className={`sticky ${stickyTopClassName} z-20 mb-4`} style={{ top: stickyTopPx }}>
      <div className="rounded-2xl backdrop-blur-sm overflow-hidden tool-surface tool-surface--strong">
        <div ref={chromeRef}>
          <div className="px-4 py-3 flex items-center justify-between gap-3">
            <div className="text-xs font-extrabold tracking-widest">閱讀進度</div>
            <button
              type="button"
              className="text-sm font-semibold hover:text-orange-800 transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
            >
              本頁目錄
              <span className="ml-1 tool-muted">{isOpen ? '▲' : '▼'}</span>
            </button>
          </div>

          <div className="h-2" style={{ backgroundColor: 'rgba(148, 163, 184, 0.18)' }}>
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>

        {isOpen ? (
          <div className="px-3 py-3 border-t max-h-[50vh] overflow-auto" style={{ borderColor: 'var(--tool-border)' }}>
            <div className="grid gap-1">
              {items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(item.id)}
                    className={`w-full text-left rounded-xl px-3 py-2 transition-colors ${
                      isActive ? 'tool-subitem--active' : 'hover:bg-[var(--tool-hover-bg)]'
                    }`}
                    title={item.text}
                  >
                    <div className={`text-sm leading-snug ${item.depth === 3 ? 'pl-4' : ''}`}>
                      <span className={`inline-block align-middle ${isActive ? 'font-bold' : 'font-medium'}`}>
                        {item.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
