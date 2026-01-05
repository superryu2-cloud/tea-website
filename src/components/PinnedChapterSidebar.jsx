import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const PIN_FROM_CLASSNAMES = {
  md: { flow: 'block md:hidden', pinnedSlot: 'hidden md:block', portal: 'hidden md:block' },
  xl: { flow: 'block xl:hidden', pinnedSlot: 'hidden xl:block', portal: 'hidden xl:block' },
};

export default function PinnedChapterSidebar({
  topOffsetPx,
  children,
  zIndex = 30,
  pinFrom = 'xl',
  wrapperClassName,
  portalClassName,
}) {
  const slotRef = useRef(null);
  const [slotRect, setSlotRect] = useState(null);
  const [siteNavHeightPx, setSiteNavHeightPx] = useState(0);
  const safeLeftPx =
    slotRect && typeof window !== 'undefined'
      ? Math.max(16, Math.min(slotRect.left, Math.max(16, window.innerWidth - 16 - slotRect.width)))
      : null;

  const measure = () => {
    const rect = slotRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nextWidth = Math.round(rect.width);
    if (nextWidth <= 0) return;
    const next = { left: Math.round(rect.left), width: nextWidth };
    setSlotRect((prev) => {
      if (prev && prev.left === next.left && prev.width === next.width) return prev;
      return next;
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const rafId = window.requestAnimationFrame(measure);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const siteNav = document.getElementById('site-nav');
    if (!siteNav) return;

    const measureSiteNav = () => {
      const next = Math.max(0, Math.round(siteNav.getBoundingClientRect().height));
      setSiteNavHeightPx((prev) => (prev === next ? prev : next));
    };

    const rafId = window.requestAnimationFrame(measureSiteNav);
    const ro = window.ResizeObserver ? new ResizeObserver(measureSiteNav) : null;
    ro?.observe(siteNav);

    return () => {
      window.cancelAnimationFrame(rafId);
      ro?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const rafId = window.requestAnimationFrame(measure);

    const ro = window.ResizeObserver ? new ResizeObserver(measure) : null;
    if (ro) {
      if (slotRef.current) ro.observe(slotRef.current);
      ro.observe(document.documentElement);
      if (document.body) ro.observe(document.body);
    }
    window.addEventListener('resize', measure);

    return () => {
      window.cancelAnimationFrame(rafId);
      ro?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const pinClasses = PIN_FROM_CLASSNAMES[pinFrom] ?? PIN_FROM_CLASSNAMES.xl;
  const wrapperClasses = wrapperClassName ? ` ${wrapperClassName}` : '';
  const effectiveTopPx = Math.max(0, topOffsetPx, siteNavHeightPx + 16);

  return (
    <>
      <div className={`${pinClasses.flow}${wrapperClasses}`}>{children}</div>

      <div className={`${pinClasses.pinnedSlot}${wrapperClasses}`}>
        <div ref={slotRef} className="w-full h-px" aria-hidden="true" />
        {!slotRect ? children : null}
      </div>
      {slotRect
        ? createPortal(
            <div
              className={`${pinClasses.portal}${portalClassName ? ` ${portalClassName}` : ''}`}
              style={{
                position: 'fixed',
                top: `${effectiveTopPx}px`,
                left: `${safeLeftPx ?? slotRect.left}px`,
                width: `${slotRect.width}px`,
                zIndex,
              }}
            >
              {children}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
