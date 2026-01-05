import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Leaf, Menu, X } from 'lucide-react';
import AccordionPanel from './AccordionPanel';
import { ATLAS_ITEMS, CHEN_CHUAN_TOC, OOLONG_TOC, VARIETIES_KINDS } from '../config/navigation';
import { splitNavLabel } from '../utils/splitNavLabel';

const VARIETIES_SUBITEMS_BY_KEY = {
  ref_chenchuan: CHEN_CHUAN_TOC,
  oolong: OOLONG_TOC,
};

const NAV_THEME_STORAGE_KEY = 'tea.navTheme';
const NAV_THEMES = [
  { key: 'default', label: '預設（紙感）' },
  { key: 'slate', label: '深藍灰（玻璃）' },
  { key: 'graphite', label: '石墨黑（玻璃）' },
];

export default function SiteNavigation({
  i18n,
  activeTab,
  varietiesKind,
  atlasNavOpen,
  mobileMenuOpen,
  goToTab,
  setAtlasNavOpen,
  setMobileMenuOpen,
  setVarietiesKind,
}) {
  const journeyLabel = splitNavLabel(String(i18n.t('nav.journey')).replace(/\s*\n\s*/g, ''));
  const atlasLabel = splitNavLabel(String(i18n.t('nav.atlas')).replace(/\s*\n\s*/g, ''));

  const [navTheme, setNavTheme] = useState(() => {
    if (typeof window === 'undefined') return 'default';
    const stored = window.localStorage?.getItem(NAV_THEME_STORAGE_KEY);
    return NAV_THEMES.some((t) => t.key === stored) ? stored : 'default';
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.navTheme = navTheme;
    try {
      window.localStorage?.setItem(NAV_THEME_STORAGE_KEY, navTheme);
    } catch {
      // ignore
    }
  }, [navTheme]);

  const themeLabel = useMemo(() => NAV_THEMES.find((t) => t.key === navTheme)?.label ?? NAV_THEMES[0].label, [navTheme]);

  const scrollToHrefWithOffset = (href, options = {}) => {
    if (typeof window === 'undefined') return;
    const { dispatchPopstate = false, behavior = 'smooth' } = options;
    const normalized = String(href ?? '');
    if (!normalized.startsWith('#') || normalized.length < 2) return;

    const updateUrlHash = () => {
      const nextUrl = `${window.location.pathname}${window.location.search}${normalized}`;
      window.history.replaceState(null, '', nextUrl);
      if (dispatchPopstate) {
        const evt = typeof PopStateEvent === 'function' ? new PopStateEvent('popstate') : new Event('popstate');
        window.dispatchEvent(evt);
      }
    };

    const getOffsetPx = () => {
      const navHeight = document.getElementById('site-nav')?.getBoundingClientRect().height;
      const resolvedNavHeight = Number.isFinite(navHeight) ? navHeight : 0;
      const barHeight = document.getElementById('varieties-context-bar')?.getBoundingClientRect().height;
      const resolvedBarHeight = Number.isFinite(barHeight) ? barHeight : 0;
      return Math.max(0, Math.round(resolvedNavHeight + resolvedBarHeight + 20));
    };

    let attempts = 0;
    const tryScroll = () => {
      const target = document.getElementById(normalized.slice(1));
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - getOffsetPx();
        updateUrlHash();
        window.scrollTo({ top: y, behavior });
        return;
      }

      attempts += 1;
      if (attempts > 20) {
        updateUrlHash();
        return;
      }
      window.setTimeout(tryScroll, 50);
    };

    tryScroll();
  };

  return (
    <nav id="site-nav" className="sticky top-0 z-50 cement-paper backdrop-blur-md font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[68px]">
          <div className="flex items-center cursor-pointer" onClick={() => goToTab('journey')}>
            <div className="mr-3 inline-flex items-center justify-center w-10 h-10 rounded-2xl tool-surface tool-surface--strong">
              <Leaf className="h-6 w-6 text-emerald-800" />
            </div>
            <div className="leading-tight">
              <div className="text-2xl font-extrabold text-stone-900 tracking-widest">{i18n.t('site.title')}</div>
              <div className="text-xs font-bold tracking-widest text-stone-600">{i18n.t('site.tagline')}</div>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-6">
            {/* Tier 1: Journey / Atlas */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goToTab('journey')}
                className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${activeTab === 'journey' ? 'nav-pill--active' : ''}`}
              >
                {journeyLabel.prefix ? <span className="nav-pill__prefix">{journeyLabel.prefix}</span> : null}
                <span className="nav-pill__label">
                  <span className="nav-pill__label--flip">
                    <span className="nav-pill__label-inner">
                      <span className="nav-pill__label-front">{journeyLabel.rest}</span>
                      <span className="nav-pill__label-back" aria-hidden="true">
                        {journeyLabel.rest}
                      </span>
                    </span>
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  const isAtlasContext = activeTab !== 'journey' && activeTab !== 'sensory';
                  if (!isAtlasContext) {
                    goToTab('home');
                    setAtlasNavOpen(true);
                    return;
                  }
                  setAtlasNavOpen((v) => !v);
                }}
                className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${activeTab !== 'journey' && activeTab !== 'sensory' ? 'nav-pill--active' : ''}`}
                aria-expanded={activeTab !== 'journey' && activeTab !== 'sensory' ? atlasNavOpen : undefined}
                aria-controls={activeTab !== 'journey' && activeTab !== 'sensory' ? 'atlas-secondary-nav' : undefined}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center">
                    {atlasLabel.prefix ? <span className="nav-pill__prefix">{atlasLabel.prefix}</span> : null}
                    <span className="nav-pill__label">
                      <span className="nav-pill__label--flip">
                        <span className="nav-pill__label-inner">
                          <span className="nav-pill__label-front">{atlasLabel.rest}</span>
                          <span className="nav-pill__label-back" aria-hidden="true">
                            {atlasLabel.rest}
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${activeTab !== 'journey' && activeTab !== 'sensory' && atlasNavOpen ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>
              <button
                type="button"
                onClick={() => goToTab('sensory')}
                className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${activeTab === 'sensory' ? 'nav-pill--active' : ''}`}
              >
                <span className="nav-pill__label">
                  <span className="nav-pill__label--flip">
                    <span className="nav-pill__label-inner">
                      <span className="nav-pill__label-front">{String(i18n.t('nav.sensory')).replace(/\s*\n\s*/g, '')}</span>
                      <span className="nav-pill__label-back" aria-hidden="true">
                        {String(i18n.t('nav.sensory')).replace(/\s*\n\s*/g, '')}
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={i18n.toggleLang}
              className="museum-label"
              aria-label={i18n.t('ui.language')}
              title={i18n.t('ui.language')}
            >
              {i18n.lang === 'zh-Hant' ? '中文' : 'EN'}
            </button>

            <div className="inline-flex items-center gap-2">
              <div className="text-xs font-extrabold tracking-widest tool-muted">配色</div>
              <select
                value={navTheme}
                onChange={(e) => setNavTheme(e.target.value)}
                className="rounded-full border px-3 py-2 text-sm font-extrabold tool-surface tool-surface--strong"
                aria-label="導覽配色"
                title={themeLabel}
              >
                {NAV_THEMES.map((theme) => (
                  <option key={theme.key} value={theme.key}>
                    {theme.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-600"
              aria-label={mobileMenuOpen ? i18n.t('ui.menuClose') : i18n.t('ui.menuOpen')}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2 (Desktop): Atlas sections */}
      {activeTab !== 'journey' && activeTab !== 'sensory' ? (
        <AccordionPanel open={atlasNavOpen} className="hidden xl:grid">
          <div
            id="atlas-secondary-nav"
            className="cement-strip backdrop-blur-md"
            style={{
              '--nav-underline': 'rgba(16, 185, 129, 0.55)',
              '--nav-hover-ink': 'rgba(6, 95, 70, 0.95)',
              '--nav-active-ink': 'rgba(6, 95, 70, 1)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {ATLAS_ITEMS.filter((item) => item !== 'sensory').map((item) => (
                  <button
                    key={item}
                    onClick={() => goToTab(item)}
                    className={`nav-pill nav-pill--tier2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${activeTab === item ? 'nav-pill--active' : ''}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {(() => {
                        const label = splitNavLabel(String(i18n.t(`nav.${item}`)).replace(/\s*\n\s*/g, ''));
                        return (
                          <span className="inline-flex items-center">
                            {label.prefix ? <span className="nav-pill__prefix">{label.prefix}</span> : null}
                            <span className="nav-pill__label">
                              <span className="nav-pill__label--flip">
                                <span className="nav-pill__label-inner">
                                  <span className="nav-pill__label-front">{label.rest}</span>
                                  <span className="nav-pill__label-back" aria-hidden="true">
                                    {label.rest}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        );
                      })()}
                      {item === 'varieties' || item === 'cultivars' || item === 'science' ? <ChevronDown size={16} className="opacity-70" /> : null}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AccordionPanel>
      ) : null}

      {/* Tier 3/4 navigation is rendered as a left sidebar inside each exhibit page. */}

      {mobileMenuOpen && (
        <div className="xl:hidden tool-surface tool-surface--strong">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex items-center justify-between px-3 py-2">
              <div className="text-xs font-bold text-stone-500">{i18n.t('ui.language')}</div>
              <button
                type="button"
                onClick={i18n.toggleLang}
                className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-bold tool-item hover:bg-transparent"
              >
                {i18n.lang === 'zh-Hant' ? '中文' : 'EN'}
              </button>
            </div>

            <div className="flex items-center justify-between px-3 py-2">
              <div className="text-xs font-bold text-stone-500">配色</div>
              <select
                value={navTheme}
                onChange={(e) => setNavTheme(e.target.value)}
                className="rounded-full px-3 py-1.5 text-xs font-extrabold tool-item"
                aria-label="導覽配色"
              >
                {NAV_THEMES.map((theme) => (
                  <option key={theme.key} value={theme.key}>
                    {theme.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Tier 1 */}
            <div className="grid grid-cols-2 gap-2 px-2">
              <button
                type="button"
                onClick={() => goToTab('journey')}
                className={`px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${
                  activeTab === 'journey' ? 'tool-item--active' : ''
                }`}
              >
                {String(i18n.t('nav.journey')).replace(/\s*\n\s*/g, '')}
              </button>
              <button
                type="button"
                onClick={() => goToTab(activeTab === 'journey' || activeTab === 'sensory' ? 'home' : activeTab)}
                className={`px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${
                  activeTab !== 'journey' ? 'tool-item--active' : ''
                }`}
              >
                {String(i18n.t('nav.atlas')).replace(/\s*\n\s*/g, '')}
              </button>
            </div>

            {/* Tier 2 */}
            {activeTab !== 'journey' && activeTab !== 'sensory' ? (
              <div className="mt-2 px-2">
                <button
                  type="button"
                  onClick={() => setAtlasNavOpen((v) => !v)}
                  className="w-full inline-flex items-center justify-between rounded-xl px-3 py-2 text-sm font-extrabold tool-item"
                  aria-expanded={atlasNavOpen}
                >
                  <span>百科分類</span>
                  <ChevronRight
                    size={16}
                    className={`text-emerald-800 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${atlasNavOpen ? 'rotate-90' : '-rotate-90'}`}
                  />
                </button>

                <AccordionPanel open={atlasNavOpen} className="mt-2" disablePointerEventsWhenClosed>
                  <div className="grid grid-cols-2 gap-2">
                    {ATLAS_ITEMS.map((item) => (
                      <button
                        key={item}
                        onClick={() => goToTab(item)}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold w-full text-left transition-colors tool-item ${
                          activeTab === item ? 'tool-item--active' : ''
                        }`}
                      >
                        {String(i18n.t(`nav.${item}`)).replace(/\s*\n\s*/g, '')}
                      </button>
                    ))}
                  </div>
                </AccordionPanel>
              </div>
            ) : null}

            {/* Tier 3 */}
            {activeTab === 'varieties' ? (
              <div className="mt-2 px-2">
                <div className="text-xs font-bold text-stone-500 px-1 py-2">六大茶類</div>
                <div className="grid grid-cols-2 gap-2">
                  {VARIETIES_KINDS.map((kind) => (
                    <button
                      key={kind.key}
                      type="button"
                      onClick={() => {
                        setVarietiesKind(kind.key);
                        setMobileMenuOpen(false);
                        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`px-3 py-2 rounded-xl text-sm font-semibold w-full text-left transition-colors tool-item ${
                        varietiesKind === kind.key ? 'tool-item--active' : ''
                      }`}
                    >
                      {kind.label}
                    </button>
                  ))}
                </div>

                {VARIETIES_SUBITEMS_BY_KEY[varietiesKind]?.length ? (
                  <div className="mt-3">
                    <div className="text-xs font-bold text-stone-500 px-1 py-2">子章節</div>
                    <div className="space-y-1">
                      {VARIETIES_SUBITEMS_BY_KEY[varietiesKind].map((item) => (
                        <button
                          key={item.href}
                          type="button"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            if (typeof window === 'undefined') return;
                            const shouldDispatchPopstate = varietiesKind === 'oolong';
                            window.requestAnimationFrame(() => {
                              window.requestAnimationFrame(() => {
                                scrollToHrefWithOffset(item.href, { dispatchPopstate: shouldDispatchPopstate });
                              });
                            });
                          }}
                          className="w-full text-left rounded-xl px-3 py-2 text-sm font-semibold tool-item"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </nav>
  );
}
