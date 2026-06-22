import { useEffect, useState } from 'react';

export default function useSiteNavHeight(activeTab, navId = 'site-nav') {
  const [siteNavHeightPx, setSiteNavHeightPx] = useState(88);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let timer = null;
    let observer = null;

    const measure = () => {
      const navEl = document.getElementById(navId);
      if (!navEl) return;
      setSiteNavHeightPx(Math.max(0, Math.round(navEl.getBoundingClientRect().height)));
    };

    const navEl = document.getElementById(navId);
    measure();
    timer = window.setTimeout(measure, 100);

    if (navEl && window.ResizeObserver) {
      observer = new ResizeObserver(measure);
      observer.observe(navEl);
    }

    window.addEventListener('resize', measure);

    return () => {
      if (timer) window.clearTimeout(timer);
      observer?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [activeTab, navId]);

  return siteNavHeightPx;
}
