import React, { useEffect, useRef, useState } from 'react';
import { splitNavLabel } from '../utils/splitNavLabel';

export default function SubnavPills({ items, activeHref, onSelect, size = 'tier3' }) {
  const scrollerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    startScrollLeft: 0,
    didDrag: false,
    canScroll: false,
    hasCaptured: false,
  });
  const activePointerIdRef = useRef(null);

  useEffect(() => {
    if (!items?.length) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const rafId = window.requestAnimationFrame(() => {
      scroller.scrollLeft = 0;
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [items?.length]);

  useEffect(() => {
    if (!items?.length) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const measure = () => {
      const next = scroller.scrollWidth - scroller.clientWidth > 1;
      setIsOverflowing(next);
    };

    measure();
    const ro = window.ResizeObserver ? new ResizeObserver(measure) : null;
    ro?.observe(scroller);
    window.addEventListener('resize', measure);

    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [items?.length]);

  if (!items?.length) return null;

  return (
    <div
      ref={scrollerRef}
      className={`subnav-scroll flex flex-nowrap items-center ${isOverflowing ? 'justify-start' : 'justify-center'} gap-2 overflow-x-auto pb-1 px-1 cursor-grab active:cursor-grabbing select-none`}
      style={{ touchAction: 'pan-y' }}
      onPointerDown={(event) => {
        if (event.button !== undefined && event.button !== 0) return;
        const scroller = event.currentTarget;
        if (!scroller) return;

        const canScroll = scroller.scrollWidth - scroller.clientWidth > 1;
        dragStateRef.current.canScroll = canScroll;
        dragStateRef.current.hasCaptured = false;

        dragStateRef.current.isDown = canScroll;
        dragStateRef.current.didDrag = false;
        dragStateRef.current.startX = event.clientX;
        dragStateRef.current.startScrollLeft = scroller.scrollLeft;

        activePointerIdRef.current = canScroll ? event.pointerId : null;
      }}
      onPointerMove={(event) => {
        const scroller = event.currentTarget;
        if (!scroller) return;
        if (!dragStateRef.current.isDown) return;
        if (activePointerIdRef.current !== null && activePointerIdRef.current !== event.pointerId) return;

        const dx = event.clientX - dragStateRef.current.startX;

        if (!dragStateRef.current.didDrag && Math.abs(dx) > 10) {
          dragStateRef.current.didDrag = true;
        }

        if (!dragStateRef.current.didDrag) return;

        if (!dragStateRef.current.hasCaptured) {
          dragStateRef.current.hasCaptured = true;
          scroller.setPointerCapture?.(event.pointerId);
        }

        event.preventDefault();
        scroller.scrollLeft = dragStateRef.current.startScrollLeft - dx;
      }}
      onPointerUp={(event) => {
        dragStateRef.current.isDown = false;
        activePointerIdRef.current = null;
        event.currentTarget?.releasePointerCapture?.(event.pointerId);
      }}
      onPointerCancel={() => {
        dragStateRef.current.isDown = false;
        activePointerIdRef.current = null;
      }}
      onPointerLeave={() => {
        dragStateRef.current.isDown = false;
        activePointerIdRef.current = null;
      }}
    >
      {items.map((item) => {
        const isActive = activeHref === item.href;
        const label = splitNavLabel(item.label);
        return (
          <button
            key={item.href}
            type="button"
            draggable={false}
            onClick={() => {
              if (dragStateRef.current.didDrag) return;
              onSelect?.(item.href);
            }}
            className={`subnav-pill ${size === 'tier2' ? 'subnav-pill--tier2' : ''} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${isActive ? 'subnav-pill--active' : ''}`}
            aria-current={isActive ? 'location' : undefined}
          >
            {label.prefix ? <span className="subnav-pill__prefix">{label.prefix}</span> : null}
            <span className="subnav-pill__label">{label.rest}</span>
          </button>
        );
      })}
    </div>
  );
}
