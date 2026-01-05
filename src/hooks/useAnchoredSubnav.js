import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function normalizeHref(href) {
  if (typeof href !== 'string') return null;
  if (!href.startsWith('#')) return null;
  if (href.length < 2) return null;
  return href;
}

function resolveDefaultHref(items) {
  const first = items?.[0]?.href;
  return normalizeHref(first) ?? '#';
}

export default function useAnchoredSubnav({
  enabled,
  items,
  navId = 'site-nav',
  fallbackNavHeightPx = 0,
  extraOffsetPx = 20,
  extraOffsetElementIds = [],
}) {
  const normalizedItems = useMemo(
    () =>
      (items ?? [])
        .map((item) => ({ ...item, href: normalizeHref(item.href) }))
        .filter((item) => Boolean(item.href)),
    [items],
  );

  const hrefSet = useMemo(() => new Set(normalizedItems.map((item) => item.href)), [normalizedItems]);
  const manualScrollUntilRef = useRef(0);
  const pendingActiveRef = useRef({ href: null, hits: 0 });
  const extraOffsetKey = useMemo(
    () => (extraOffsetElementIds ?? []).filter(Boolean).join('|'),
    [extraOffsetElementIds],
  );
  const autoSyncedHashRef = useRef(null);

  const [activeHref, setActiveHref] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = normalizeHref(window.location.hash);
      if (hash && hrefSet.has(hash)) return hash;
    }
    return resolveDefaultHref(normalizedItems);
  });

  const getOffsetPx = useCallback(() => {
    if (typeof window === 'undefined') return Math.max(0, Math.round(fallbackNavHeightPx + extraOffsetPx));
    const navHeight = document.getElementById(navId)?.getBoundingClientRect().height;
    const resolvedNavHeight = Number.isFinite(navHeight) ? navHeight : fallbackNavHeightPx;
    const extraIds = extraOffsetKey ? extraOffsetKey.split('|') : [];
    const extraElementsHeight = extraIds.reduce((sum, id) => {
      const elHeight = document.getElementById(id)?.getBoundingClientRect().height;
      return sum + (Number.isFinite(elHeight) ? elHeight : 0);
    }, 0);
    return Math.max(0, Math.round(resolvedNavHeight + extraElementsHeight + extraOffsetPx));
  }, [extraOffsetKey, extraOffsetPx, fallbackNavHeightPx, navId]);

  const scrollToHref = useCallback(
    (href, options = {}) => {
      if (typeof window === 'undefined') return;
      const { behavior = 'smooth', updateHash = true } = options;
      const normalized = normalizeHref(href);
      if (!normalized) return;
      const target = document.getElementById(normalized.slice(1));
      if (!target) return;

      const y = target.getBoundingClientRect().top + window.scrollY - getOffsetPx();
      const now = Date.now();
      manualScrollUntilRef.current = now + (behavior === 'smooth' ? 900 : 200);
      window.scrollTo({ top: y, behavior });
      if (updateHash) {
        const nextUrl = `${window.location.pathname}${window.location.search}${normalized}`;
        window.history.replaceState(null, '', nextUrl);
      }
      setActiveHref(normalized);
    },
    [getOffsetPx],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!enabled) {
      autoSyncedHashRef.current = null;
      return;
    }

    const hash = normalizeHref(window.location.hash);
    if (hash && hrefSet.has(hash) && autoSyncedHashRef.current !== hash) {
      autoSyncedHashRef.current = hash;
      const rafId = window.requestAnimationFrame(() => {
        scrollToHref(hash, { behavior: 'auto', updateHash: false });
      });
      return () => window.cancelAnimationFrame(rafId);
    }

    const next = resolveDefaultHref(normalizedItems);
    const rafId = window.requestAnimationFrame(() => {
      setActiveHref(next);
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [enabled, hrefSet, normalizedItems, scrollToHref]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!enabled) return;
    if (!normalizedItems.length) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      if (Date.now() < manualScrollUntilRef.current) return;

      const threshold = window.scrollY + getOffsetPx() + 8;
      let nextActive = normalizedItems[0]?.href ?? '#';
      for (const item of normalizedItems) {
        const el = document.getElementById(item.href.slice(1));
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= threshold) nextActive = item.href;
        else break;
      }
      setActiveHref((prev) => {
        if (prev === nextActive) {
          pendingActiveRef.current = { href: null, hits: 0 };
          return prev;
        }
        const pending = pendingActiveRef.current;
        if (pending.href === nextActive) pending.hits += 1;
        else pendingActiveRef.current = { href: nextActive, hits: 1 };

        if (pendingActiveRef.current.hits >= 2) {
          pendingActiveRef.current = { href: null, hits: 0 };
          return nextActive;
        }
        return prev;
      });
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
  }, [enabled, getOffsetPx, normalizedItems]);

  return { activeHref, scrollToHref, offsetPx: getOffsetPx() };
}
