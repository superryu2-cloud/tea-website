import React, { useEffect, useMemo, useRef, useState } from 'react';

const STORAGE_KEY = 'tea.atlasSidebarWidth';
const DEFAULT_WIDTH_PX = 288;
const MIN_WIDTH_PX = 240;
const MAX_WIDTH_PX = 360;
const DEFAULT_CONTENT_MAX = '80rem';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

let mountedDockLayouts = 0;

export default function AtlasDockLayout({ topOffsetPx = 0, sidebar, children }) {
  const resolvedTopOffsetPx = Number.isFinite(topOffsetPx) ? Math.max(0, Math.round(topOffsetPx)) : 0;
  const [sidebarWidthPx, setSidebarWidthPx] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_WIDTH_PX;
    const raw = window.localStorage?.getItem(STORAGE_KEY);
    const parsed = raw ? Number(raw) : NaN;
    if (!Number.isFinite(parsed)) return DEFAULT_WIDTH_PX;
    return clamp(Math.round(parsed), MIN_WIDTH_PX, MAX_WIDTH_PX);
  });

  const draggingRef = useRef(null);
  const styles = useMemo(
    () => ({
      '--atlas-top': `${resolvedTopOffsetPx}px`,
      '--atlas-sidebar-width': `${sidebarWidthPx}px`,
      '--atlas-content-max': DEFAULT_CONTENT_MAX,
    }),
    [resolvedTopOffsetPx, sidebarWidthPx],
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    mountedDockLayouts += 1;
    document.documentElement.dataset.atlasDock = '1';
    return () => {
      mountedDockLayouts = Math.max(0, mountedDockLayouts - 1);
      if (mountedDockLayouts === 0) {
        delete document.documentElement.dataset.atlasDock;
        document.documentElement.style.removeProperty('--atlas-dock-top');
        document.documentElement.style.removeProperty('--atlas-dock-sidebar-width');
        document.documentElement.style.removeProperty('--atlas-dock-content-max');
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage?.setItem(STORAGE_KEY, String(sidebarWidthPx));
    } catch {
      // ignore
    }
  }, [sidebarWidthPx]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.style.setProperty('--atlas-dock-top', `${resolvedTopOffsetPx}px`);
    document.documentElement.style.setProperty('--atlas-dock-sidebar-width', `${sidebarWidthPx}px`);
    document.documentElement.style.setProperty('--atlas-dock-content-max', DEFAULT_CONTENT_MAX);
  }, [resolvedTopOffsetPx, sidebarWidthPx]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMove = (event) => {
      if (!draggingRef.current) return;
      const x = 'clientX' in event ? event.clientX : 0;
      const next = clamp(draggingRef.current.startWidth + (x - draggingRef.current.startX), MIN_WIDTH_PX, MAX_WIDTH_PX);
      setSidebarWidthPx(Math.round(next));
    };

    const handleUp = () => {
      draggingRef.current = null;
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return (
    <div className="atlas-dock" style={styles}>
      <div className="atlas-dock__sidebar">
        {sidebar}
        <div
          className="atlas-dock__resizer"
          role="separator"
          aria-orientation="vertical"
          aria-label="調整左側欄寬度"
          onMouseDown={(event) => {
            draggingRef.current = { startX: event.clientX, startWidth: sidebarWidthPx };
          }}
        />
      </div>
      <div className="atlas-dock__content">{children}</div>
    </div>
  );
}
