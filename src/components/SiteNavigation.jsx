import React, { useEffect, useMemo, useState, useRef } from 'react';
import { ChevronDown, ChevronRight, Leaf, Menu, X, Palette, Settings, Search } from 'lucide-react';
import AccordionPanel from './AccordionPanel';
import { ATLAS_ITEMS, VARIETIES_KINDS, SCIENCE_TOC, CULTIVARS_TOC, TEA_REFERENCE_TOC, PUERH_TOC, FEATURED_TOC, HISTORY_SECTIONS, SEASONS_SECTIONS, ZISHA_TOC, MAIN_NAV_ROWS } from '../config/navigation';
import { PRIMARY_SITE_NAV } from '../config/siteArchitecture';
import {
  ACADEMY_STRUCTURE,
  NAV_THEMES,
  NAV_THEME_STORAGE_KEY,
  PAPER_THEMES,
  PAPER_THEME_STORAGE_KEY,
  VARIETIES_SUBITEMS_BY_KEY,
} from '../config/siteNavigationConfig';
import { splitNavLabel } from '../utils/splitNavLabel';

const CHONGHUA_CATEGORY = ACADEMY_STRUCTURE.find((category) => category.key === 'chonghua');
const ACADEMY_NAV_CATEGORIES = ACADEMY_STRUCTURE.filter((category) => category.key !== 'chonghua');

const getPaperThemePreviewStyle = (theme) => ({
  backgroundColor: theme.color ?? '#f5f3ed',
  backgroundImage: theme.previewImage ? `url('${theme.previewImage}')` : undefined,
  backgroundRepeat: theme.tile ? 'repeat' : 'no-repeat',
  backgroundSize: theme.tile ? '88px 88px' : 'cover',
  backgroundPosition: 'center',
});

export default function SiteNavigation({
  i18n,
  activeTab,
  varietiesKind,
  mobileMenuOpen,
  goToTab,
  setMobileMenuOpen,
  setVarietiesKind,
  setScienceRoom,
  daguanUnlocked,
  chonghuaUnlocked,
  academyMenuHidden,
  onUnlockRequest,
}) {
  const journeyLabel = splitNavLabel(String(i18n.t('nav.journey')).replace(/\s*\n\s*/g, ''));
  const academyLabel = '大觀書院';
  const chonghuaLabel = '崇華書院';
  const renderFlipLabel = (label) => (
    <span className="nav-pill__label">
      <span className="nav-pill__label--flip">
        <span className="nav-pill__label-inner">
          <span className="nav-pill__label-front">{label}</span>
          <span className="nav-pill__label-back" aria-hidden="true">
            {label}
          </span>
        </span>
      </span>
    </span>
  );

  const [navTheme, setNavTheme] = useState(() => {
    if (typeof window === 'undefined') return 'default';
    const stored = window.localStorage?.getItem(NAV_THEME_STORAGE_KEY);
    return NAV_THEMES.some((t) => t.key === stored) ? stored : 'default';
  });

  const [paperTheme, setPaperTheme] = useState(() => {
    if (typeof window === 'undefined') return 'ivory';
    const stored = window.localStorage?.getItem(PAPER_THEME_STORAGE_KEY);
    return PAPER_THEMES.some((t) => t.key === stored) ? stored : 'ivory';
  });

  const [academyNavOpen, setAcademyNavOpen] = useState(false);
  const [chonghuaNavOpen, setChonghuaNavOpen] = useState(false);
  const [academyMobileSubOpen, setAcademyMobileSubOpen] = useState({});
  const [chonghuaMobileOpen, setChonghuaMobileOpen] = useState(false);
  const [openPrimaryNavId, setOpenPrimaryNavId] = useState(null);
  const [paperMenuOpen, setPaperMenuOpen] = useState(false);
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const daguanEntryVisible = daguanUnlocked && !academyMenuHidden;
  const localizedNavText = (entry, field) => {
    if (!entry) return '';
    if (i18n.lang === 'en') {
      return entry[`${field}En`] ?? entry[field] ?? '';
    }
    return entry[field] ?? '';
  };

  const activePrimaryNavId = useMemo(() => {
    const activeGroup = PRIMARY_SITE_NAV.find((group) =>
      group.currentTab === activeTab || group.children?.some((child) => child.currentTab === activeTab)
    );
    return activeGroup?.id ?? null;
  }, [activeTab]);

  const navigateToPrimaryEntry = (entry) => {
    if (!entry?.currentTab) return;
    goToTab(entry.currentTab);
    if (entry.currentTab === 'science' && entry.scienceRoom) {
      setScienceRoom(entry.scienceRoom);
    }
    if (entry.currentTab === 'varieties' && entry.varietiesKind) {
      setVarietiesKind(entry.varietiesKind);
    }
    setOpenPrimaryNavId(null);
    setAcademyNavOpen(false);
    setChonghuaNavOpen(false);
    setPaperMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleMobilePrimaryGroup = (group) => {
    const groupChildren = group?.children ?? [];
    if (!groupChildren.length) {
      navigateToPrimaryEntry(group);
      return;
    }
    setOpenPrimaryNavId((current) => (current === group.id ? null : group.id));
    setAcademyNavOpen(false);
    setChonghuaMobileOpen(false);
    setPaperMenuOpen(false);
  };

  const handleAdminClick = () => {
    if (adminUnlocked) { goToTab('admin'); setAcademyNavOpen(false); setPaperMenuOpen(false); return; }
    const pw = prompt('請輸入管理密碼：');
    if (pw === '690214') { setAdminUnlocked(true); goToTab('admin'); setAcademyNavOpen(false); setPaperMenuOpen(false); }
  };


  // Secret Trigger Logic - Open password modal after 5 clicks
  const secretClickCountRef = useRef(0);

  const handleSecretClick = () => {
    secretClickCountRef.current += 1;
    if (secretClickCountRef.current >= 5) {
      onUnlockRequest?.('daguan');
      secretClickCountRef.current = 0;
    }
  };

  const handleAcademyToolbarClick = () => {
    if (!daguanEntryVisible) {
      onUnlockRequest?.('daguan');
      return;
    }
    setAcademyNavOpen((v) => !v);
    setChonghuaNavOpen(false);
    setChonghuaMobileOpen(false);
    setOpenPrimaryNavId(null);
    setPaperMenuOpen(false);
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.navTheme = navTheme;
    try {
      window.localStorage?.setItem(NAV_THEME_STORAGE_KEY, navTheme);
    } catch {
      // ignore
    }
  }, [navTheme]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.paperTheme = paperTheme;
    try {
      window.localStorage?.setItem(PAPER_THEME_STORAGE_KEY, paperTheme);
    } catch {
      // ignore
    }
  }, [paperTheme]);

  const activePaperTheme = useMemo(() => PAPER_THEMES.find((t) => t.key === paperTheme) ?? PAPER_THEMES[0], [paperTheme]);
  const paperThemeLabel = activePaperTheme?.label ?? PAPER_THEMES[0].label;

  const renderPaperThemeOptions = (compact = false) => (
    <div className={compact ? 'grid grid-cols-1 gap-2.5 sm:grid-cols-2' : 'grid grid-cols-4 gap-2.5'}>
      {PAPER_THEMES.map((theme) => {
        const selected = theme.key === paperTheme;
        return (
          <button
            key={theme.key}
            type="button"
            onClick={() => {
              setPaperTheme(theme.key);
              setPaperMenuOpen(false);
            }}
            className={`group flex min-h-[88px] items-center gap-3 rounded-2xl border p-2.5 text-left transition-all ${selected
              ? 'border-emerald-400 bg-emerald-50 shadow-sm ring-2 ring-emerald-200/70'
              : 'border-stone-200 bg-white/85 hover:border-amber-300 hover:bg-amber-50/50'
              }`}
            aria-pressed={selected}
          >
            <span
              className="block h-[62px] w-[96px] shrink-0 rounded-xl border border-stone-200 shadow-inner"
              style={getPaperThemePreviewStyle(theme)}
              aria-hidden="true"
            />
            <span className={`block min-w-0 text-[15px] font-extrabold leading-snug ${selected ? 'text-emerald-950' : 'text-stone-700 group-hover:text-amber-950'}`}>
              {theme.label}
            </span>
          </button>
        );
      })}
    </div>
  );

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
      return Math.max(0, Math.round(resolvedNavHeight + resolvedBarHeight + 60));
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

  const isAcademyImplemented = (catKey, num) => {
    const implemented = {
      zhiya: ['02', '03', '04', '05', '06', '07', '09', '10', '14'],
      xueya: ['01', '03', '04', '05', '06', '07', '08', '09', '11'],
      chonghua: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    };
    return implemented[catKey]?.includes(num);
  };

  const renderMobileContextNavigation = (item) => {
    if (item === 'varieties') {
      return (
        <div className="ml-3 mt-2 space-y-3 rounded-xl border border-stone-200/40 bg-stone-50/60 p-2.5 pl-3 shadow-inner">
          {VARIETIES_KINDS.map((kind) => {
            const subItems = VARIETIES_SUBITEMS_BY_KEY[kind.key] || [];
            const isKindActive = varietiesKind === kind.key;
            return (
              <div key={kind.key} className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setVarietiesKind(kind.key)}
                  className={`w-full rounded-xl border px-3.5 py-2.5 text-left text-[14px] font-bold transition-all ${isKindActive ? 'border-amber-200/60 bg-amber-100/90 text-amber-950 shadow-sm' : 'border-stone-200/30 bg-white text-stone-700 shadow-sm hover:border-stone-200/60 hover:bg-stone-50'}`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span>{kind.label}</span>
                    {subItems.length > 0 ? (
                      <ChevronDown size={14} className={`opacity-60 transition-transform ${isKindActive ? 'rotate-180' : ''}`} />
                    ) : null}
                  </span>
                </button>

                {isKindActive && subItems.length > 0 ? (
                  <div className="ml-2 space-y-1.5 border-l-2 border-stone-300 py-1 pl-3.5">
                    {subItems.map((sub) => (
                      <button
                        key={sub.href}
                        type="button"
                        onClick={() => {
                          scrollToHrefWithOffset(sub.href, { dispatchPopstate: true, behavior: 'smooth' });
                          setMobileMenuOpen(false);
                        }}
                        className="flex w-full items-center gap-1.5 rounded-lg border border-transparent px-3 py-2.5 text-left text-[13px] font-semibold text-stone-600 transition-colors hover:border-amber-200/20 hover:bg-amber-50/40 hover:text-amber-950"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-stone-400" />
                        <span className="truncate">{sub.label}</span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      );
    }

    if (!['puerh', 'science', 'cultivars', 'featured', 'history', 'seasons', 'zisha'].includes(item)) {
      return null;
    }

    let subItems = [];
    if (item === 'puerh') subItems = PUERH_TOC;
    else if (item === 'science') subItems = SCIENCE_TOC;
    else if (item === 'cultivars') subItems = CULTIVARS_TOC;
    else if (item === 'featured') subItems = FEATURED_TOC;
    else if (item === 'history') subItems = HISTORY_SECTIONS;
    else if (item === 'seasons') subItems = SEASONS_SECTIONS;
    else if (item === 'zisha') subItems = ZISHA_TOC;

    return (
      <div className="ml-3 mt-2 space-y-1.5 rounded-xl border border-stone-200/40 bg-stone-50/60 p-2 pl-3 shadow-inner">
        {subItems.map((sub) => {
          const label = sub.label;
          return (
            <button
              key={sub.href || sub.key}
              type="button"
              onClick={() => {
                goToTab(item);
                if (item === 'science' && sub.key) {
                  setScienceRoom(sub.key);
                }

                if (item === 'featured' && sub.href && !['#featured-overview', '#featured-longjing'].includes(sub.href)) {
                  const teaId = sub.href.replace('#featured-', '');
                  const url = new URL(window.location.href);
                  url.searchParams.set('tab', 'featured');
                  url.searchParams.set('tea', teaId);
                  window.history.pushState(null, '', url.pathname + url.search);
                  window.dispatchEvent(new Event('popstate'));
                } else if (sub.href) {
                  scrollToHrefWithOffset(sub.href, { dispatchPopstate: true });
                } else if (item === 'history' && sub.key) {
                  const url = new URL(window.location.href);
                  url.searchParams.set('tab', 'history');
                  url.searchParams.set('section', sub.key);
                  window.history.pushState(null, '', url.pathname + url.search);
                  window.dispatchEvent(new Event('popstate'));
                } else if (item === 'zisha' && sub.key) {
                  const url = new URL(window.location.href);
                  url.searchParams.set('tab', 'zisha');
                  url.searchParams.set('chapter', sub.key);
                  window.history.pushState(null, '', url.pathname + url.search);
                  window.dispatchEvent(new Event('popstate'));
                }

                setMobileMenuOpen(false);
              }}
              className="flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2.5 text-left text-[14px] font-semibold text-stone-700 transition-all hover:border-amber-200/30 hover:bg-amber-50/50 hover:text-amber-900"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/60" />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const navRows = MAIN_NAV_ROWS;

  return (
    <nav id="site-nav" className={`sticky top-0 ${mobileMenuOpen ? 'z-[10020]' : 'z-50'} cement-paper backdrop-blur-md relative ${(academyNavOpen || chonghuaNavOpen || mobileMenuOpen) ? 'nav-drawer-open' : ''} ${i18n.lang === 'en' ? 'lang-en' : ''}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center gap-3 min-h-[60px] sm:min-h-[68px] py-2 sm:py-3">
          <div className="flex min-w-0 flex-1 items-center gap-3 pr-0 xl:flex-none xl:gap-5 xl:pr-10 xl:shrink-0">
            {/* 綠色葉子 Logo - 隱藏的5次點擊功能 */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSecretClick();
              }}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl tool-surface tool-surface--strong transition-transform hover:scale-105 sm:h-12 sm:w-12 cursor-pointer"
              aria-label="Logo"
            >
              <Leaf className="h-6 w-6 text-emerald-800 sm:h-7 sm:w-7" />

            </button>

            {/* 標題 */}
            <div className="min-w-0 flex-1 leading-tight px-0.5 py-0.5 xl:min-w-[190px]" onClick={() => goToTab('journey')} style={{ cursor: 'pointer' }}>
              <div className="truncate whitespace-nowrap text-2xl font-extrabold tracking-wider text-stone-900 sm:text-3xl sm:tracking-widest">{i18n.t('site.title')}</div>

            </div>
          </div>

          <div className="hidden xl:grid nav-main flex-1 items-center">
            <div />
            {/* Tier 1: Fixed two-row navigation */}
            <div className="nav-main-center flex flex-col items-center gap-0 w-full max-w-[920px] px-4">
              <div className="nav-main-grid">
                {navRows.map((row, rowIndex) =>
                  row.map((item, colIndex) => {
                    let content = null;
                    if (item.startsWith('primary:')) {
                      const primaryId = item.replace('primary:', '');
                      const group = PRIMARY_SITE_NAV.find((navItem) => navItem.id === primaryId);
                      const groupChildren = group?.children ?? [];
                      const hasChildren = groupChildren.length > 0;
                      const isOpen = hasChildren && openPrimaryNavId === primaryId;
                      const isActive = activePrimaryNavId === primaryId;
                      const groupLabel = localizedNavText(group, 'label');
                      const groupEyebrow = localizedNavText(group, 'eyebrow') || groupLabel;
                      const groupDescription = localizedNavText(group, 'description');
                      content = group ? (
		                        <div
		                          className="relative"
		                          onMouseEnter={() => {
	                            setOpenPrimaryNavId(hasChildren ? primaryId : null);
	                            setAcademyNavOpen(false);
	                            setChonghuaNavOpen(false);
	                          }}
	                          onMouseLeave={() => setOpenPrimaryNavId(null)}
	                        >
                          <button
                            type="button"
                            onClick={() => navigateToPrimaryEntry(group)}
	                            onFocus={() => {
	                              setOpenPrimaryNavId(hasChildren ? primaryId : null);
	                              setAcademyNavOpen(false);
	                              setChonghuaNavOpen(false);
	                            }}
                            className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${isActive ? 'nav-pill--active' : ''}`}
                            aria-expanded={hasChildren ? isOpen : undefined}
                          >
                            <span className="inline-flex items-center gap-1.5">
	                                  <span className="nav-pill__label">
	                                    <span className="nav-pill__label--flip">
	                                      <span className="nav-pill__label-inner">
	                                    <span className="nav-pill__label-front">{groupLabel}</span>
	                                    <span className="nav-pill__label-back" aria-hidden="true">
	                                      {groupLabel}
	                                    </span>
	                                  </span>
	                                </span>
	                              </span>
                              {hasChildren ? (
                                <ChevronDown
                                  size={14}
                                  className={`opacity-70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                />
                              ) : null}
                            </span>
                          </button>

                          {hasChildren ? (
                            <div
                              className={`absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 rounded-2xl border border-stone-200 bg-white/95 p-3 shadow-xl backdrop-blur-md transition-all duration-150 ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
                            >
	                              <div className="px-3.5 py-2.5">
	                                <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-emerald-700/70">
	                                  {groupEyebrow}
	                                </div>
	                                {groupDescription ? (
	                                  <div className="mt-1 text-sm font-semibold leading-snug text-stone-500">
	                                    {groupDescription}
	                                  </div>
	                                ) : null}
	                              </div>
	                              {groupChildren.map((child) => {
                                  const childLabel = localizedNavText(child, 'label');
                                  const childDescription = localizedNavText(child, 'description');
                                  return (
	                                  <button
	                                    key={child.id}
	                                    type="button"
	                                    onClick={() => navigateToPrimaryEntry(child)}
	                                    className={`w-full rounded-xl px-3.5 py-3.5 text-left transition-colors ${activeTab === child.currentTab ? 'bg-amber-50 text-amber-900' : 'text-stone-700 hover:bg-stone-50 hover:text-amber-900'}`}
	                                  >
	                                    <span className="block text-[17px] font-extrabold leading-snug">
	                                      {childLabel}
	                                    </span>
	                                    {childDescription ? (
	                                      <span className={`mt-1 block text-sm font-semibold leading-snug ${activeTab === child.currentTab ? 'text-amber-800/70' : 'text-stone-500'}`}>
	                                        {childDescription}
	                                      </span>
	                                    ) : null}
	                                  </button>
                                  );
                                })}
	                            </div>
	                          ) : null}
	                        </div>
	                      ) : null;
                    } else if (item === 'academy' && academyMenuHidden) {
                      return null;
                    } else if (item === 'academy') {
                      content = (
                        <button
                          type="button"
                          onClick={() => {
                            if (!daguanUnlocked) {
                              onUnlockRequest?.('daguan');
                              return;
                            }
                            setAcademyNavOpen((v) => !v);
                            setChonghuaNavOpen(false);
                          }}
                          className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${academyNavOpen ? 'nav-pill--active' : ''}`}
                          aria-expanded={academyNavOpen}
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="nav-pill__label">
                              <span className="nav-pill__label--flip">
                                <span className="nav-pill__label-inner">
                                  <span className="nav-pill__label-front">大觀書院</span>
                                  <span className="nav-pill__label-back" aria-hidden="true">
                                    大觀書院
                                  </span>
                                </span>
                              </span>
                            </span>
                            <ChevronDown
                              size={16}
                              className={`opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${academyNavOpen ? 'rotate-180' : ''}`}
                            />
                          </span>
                        </button>
                      );
                    } else if (item === 'chonghua') {
                      content = (
                        <button
                          type="button"
                          onClick={() => {
                            if (!chonghuaUnlocked) {
                              onUnlockRequest?.('chonghua');
                              return;
                            }
                            setChonghuaNavOpen((v) => !v);
                            setAcademyNavOpen(false);
                          }}
                          className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/30 ${chonghuaNavOpen ? 'nav-pill--active' : ''}`}
                          aria-expanded={chonghuaNavOpen}
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="nav-pill__label">
                              <span className="nav-pill__label--flip">
                                <span className="nav-pill__label-inner">
                                  <span className="nav-pill__label-front">崇華書院</span>
                                  <span className="nav-pill__label-back" aria-hidden="true">
                                    崇華書院
                                  </span>
                                </span>
                              </span>
                            </span>
                            <ChevronDown
                              size={16}
                              className={`opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${chonghuaNavOpen ? 'rotate-180' : ''}`}
                            />
                          </span>
                        </button>
                      );
                    } else if (item === 'journey') {
                      content = (
                        <button
                          type="button"
                          onClick={() => {
                            goToTab('journey');
                            setAcademyNavOpen(false);
                          }}
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
                      );
                    } else if (item === 'tea_talk') {
                      content = (
                        <button
                          type="button"
                          onClick={() => {
                            goToTab('tea_talk');
                            setAcademyNavOpen(false);
                          }}
                          className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${activeTab === 'tea_talk' ? 'nav-pill--active' : ''}`}
                        >
                          <span className="nav-pill__label">
                            <span className="nav-pill__label--flip">
                              <span className="nav-pill__label-inner">
                                <span className="nav-pill__label-front">{String(i18n.t('nav.tea_talk')).replace(/\s*\n\s*/g, '')}</span>
                                <span className="nav-pill__label-back" aria-hidden="true">
                                  {String(i18n.t('nav.tea_talk')).replace(/\s*\n\s*/g, '')}
                                </span>
                              </span>
                            </span>
                          </span>
                        </button>
                      );
                    } else if (item === 'sensory') {
                      content = (
                        <button
                          type="button"
                          onClick={() => {
                            goToTab('sensory');
                            setAcademyNavOpen(false);
                          }}
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
                      );
                    } else if (item === 'toolbar') {
                      content = (
                        <div className="flex items-center gap-1 bg-stone-100/60 rounded-full px-1.5 py-1">
                          <button
                            type="button"
                            onClick={handleAcademyToolbarClick}
                            className={`flex items-center justify-center h-8 rounded-full hover:bg-white transition-colors px-2 gap-1 text-xs font-bold ${academyNavOpen ? 'bg-white shadow-sm text-amber-800' : 'text-stone-600'}`}
                            aria-label={daguanEntryVisible ? academyLabel : '輸入大觀密碼'}
                            aria-expanded={daguanEntryVisible ? academyNavOpen : undefined}
                            title={daguanEntryVisible ? academyLabel : '輸入大觀密碼'}
                          >
                            <span>{daguanEntryVisible ? '大觀' : '書院'}</span>
                            {daguanEntryVisible ? (
                              <ChevronDown
                                size={13}
                                className={`opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${academyNavOpen ? 'rotate-180' : ''}`}
                              />
                            ) : null}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (!chonghuaUnlocked) {
                                onUnlockRequest?.('chonghua');
                                return;
                              }
                              setChonghuaNavOpen((v) => !v);
                              setAcademyNavOpen(false);
                              setOpenPrimaryNavId(null);
                              setPaperMenuOpen(false);
                            }}
                            className={`flex items-center justify-center h-8 rounded-full hover:bg-white transition-colors px-2 gap-1 text-xs font-bold ${chonghuaNavOpen ? 'bg-white shadow-sm text-orange-800' : 'text-stone-600'}`}
                            aria-label={chonghuaLabel}
                            aria-expanded={chonghuaUnlocked ? chonghuaNavOpen : undefined}
                            title={chonghuaLabel}
                          >
                            <span>崇華</span>
                            {chonghuaUnlocked ? (
                              <ChevronDown
                                size={13}
                                className={`opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${chonghuaNavOpen ? 'rotate-180' : ''}`}
                              />
                            ) : null}
                          </button>
                          <button
                            type="button"
                            onClick={handleAdminClick}
                            className={`flex items-center justify-center w-8 h-8 rounded-full hover:bg-white transition-colors ${activeTab === 'admin' ? 'bg-white shadow-sm' : ''}`}
                            aria-label="商品管理"
                            title="商品管理"
                          >
                            <Settings size={15} className="text-stone-600" />
                          </button>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => {
                                setPaperMenuOpen((v) => !v);
                                setAcademyNavOpen(false);
                                setChonghuaNavOpen(false);
                                setOpenPrimaryNavId(null);
                              }}
                              className={`flex items-center justify-center w-8 h-8 rounded-full hover:bg-white transition-colors ${paperMenuOpen ? 'bg-white shadow-sm' : ''}`}
                              aria-label="背景風格"
                              aria-haspopup="menu"
                              aria-expanded={paperMenuOpen}
                              title={paperThemeLabel}
                            >
                              <Palette size={15} className="text-stone-600" />
                            </button>
                            {paperMenuOpen ? (
                              <div
                                className="absolute right-0 top-full z-[10060] mt-3 max-h-[calc(100vh-96px)] w-[920px] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-3xl border border-stone-200 bg-white/96 p-4 shadow-2xl backdrop-blur-xl"
                                role="menu"
                              >
                                <div className="mb-3 flex items-center justify-between gap-3 px-1">
                                  <div>
                                    <div className="text-[11px] font-extrabold tracking-widest text-stone-400">BACKGROUND</div>
                                    <div className="text-base font-extrabold text-stone-900">全站背景</div>
                                  </div>
                                  <div className="max-w-[220px] truncate text-sm font-bold text-emerald-800">
                                    {paperThemeLabel}
                                  </div>
                                </div>
                                {renderPaperThemeOptions(false)}
                              </div>
                            ) : null}
                          </div>
                          <button
                            type="button"
                            onClick={i18n.toggleLang}
                            className="flex items-center justify-center h-8 rounded-full hover:bg-white transition-colors px-2 gap-0.5"
                            aria-label={i18n.t('ui.language')}
                            title={i18n.t('ui.language')}
                          >
                            <span className={`text-xs font-bold ${i18n.lang === 'zh-Hant' ? 'text-amber-700' : 'text-stone-400'}`}>中</span>
                            <span className="text-stone-300 text-xs">/</span>
                            <span className={`text-xs font-bold ${i18n.lang === 'en' ? 'text-amber-700' : 'text-stone-400'}`}>EN</span>
                          </button>
                        </div>
                      );
                    } else {
                      const label = splitNavLabel(String(i18n.t(`nav.${item}`)).replace(/\s*\n\s*/g, ''));
                      content = (
                        <button
                          type="button"
                          onClick={() => {
                            goToTab(item);
                            setAcademyNavOpen(false);
                          }}
                          className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${activeTab === item ? 'nav-pill--active' : ''}`}
                        >
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
                        </button>
                      );
                    }

                    return (
                      <div
                        key={`nav-${rowIndex}-${item}`}
                        className="nav-main-grid__cell"
                        style={{ gridColumn: colIndex + 1, gridRow: rowIndex + 1 }}
                      >
                        {content}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="justify-self-end" />
          </div>

          <div className="xl:hidden flex shrink-0 items-center">
	            <button
		              onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                    setPaperMenuOpen(false);
                  }}
	              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-stone-700 hover:bg-stone-100"
	              aria-label={mobileMenuOpen ? i18n.t('ui.menuClose') : i18n.t('ui.menuOpen')}
	              aria-expanded={mobileMenuOpen}
	              aria-controls="mobile-site-menu"
	            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Academy/Chonghua Shared Overlay */}
      <div
        className={`nav-drawer-overlay ${(academyNavOpen || chonghuaNavOpen) ? 'nav-drawer-overlay--open' : ''}`}
        aria-hidden="true"
        onClick={() => {
          setAcademyNavOpen(false);
          setChonghuaNavOpen(false);
        }}
        style={{ pointerEvents: (academyNavOpen || chonghuaNavOpen) ? 'auto' : 'none' }}
      />



      {/* Tier 2 (Desktop): Academy/Chonghua Dropdown - 合併為單一容器 */}
      <div className={`nav-drawer ${(academyNavOpen || chonghuaNavOpen) ? 'nav-drawer--open' : ''}`}>
        <div
          className="cement-strip backdrop-blur-md"
          style={{
            '--nav-underline': chonghuaNavOpen ? 'rgba(234, 88, 12, 0.55)' : 'rgba(217, 119, 6, 0.55)',
            '--nav-hover-ink': chonghuaNavOpen ? 'rgba(154, 52, 18, 0.95)' : 'rgba(146, 64, 14, 0.95)',
            '--nav-active-ink': chonghuaNavOpen ? 'rgba(154, 52, 18, 1)' : 'rgba(146, 64, 14, 1)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col gap-10">
              {/* 顯示崇華內容 */}
              {chonghuaNavOpen && (
                <div>
                  <div className="text-lg font-bold text-stone-500 mb-3 px-2 border-l-4 border-sky-400">
                    崇華書院
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {CHONGHUA_CATEGORY?.chapters?.map((chapter) => {
                      const num = chapter.id;
                      const active = isAcademyImplemented('chonghua', num);
                      const isCurrentTab = activeTab === `academy_chonghua_${num}`;
                      return (
                        <a
                          key={num}
                          href={active ? `?tab=academy_chonghua_${num}` : '?tab=academy_coming_soon'}
                          className={`nav-pill nav-pill--tier2 ${isCurrentTab ? 'nav-pill--active' : ''} justify-start items-center rounded-xl px-3.5 py-2.5 text-base transition-all duration-200 ${isCurrentTab
                            ? 'bg-orange-50 text-orange-900 font-extrabold ring-1 ring-orange-300/60 shadow-md'
                            : active
                              ? 'bg-orange-50/60 text-orange-800 font-bold hover:bg-orange-100 shadow-sm border-l-[3px] border-orange-400'
                              : 'bg-transparent text-stone-400 opacity-60 hover:opacity-100 hover:bg-white/50 hover:text-stone-600 border border-transparent hover:border-stone-200 cursor-not-allowed'
                            }`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!chonghuaUnlocked) {
                              onUnlockRequest?.('chonghua');
                              return;
                            }
                            if (!active) {
                              goToTab('academy_coming_soon');
                              setChonghuaNavOpen(false);
                              return;
                            }
                            goToTab(`academy_chonghua_${num}`);
                            setChonghuaNavOpen(false);
                          }}
                        >
                          <div className="w-full text-left flex items-baseline gap-3">
                            <span className="font-bold text-[18px] block shrink-0 nav-pill--no-line">{renderFlipLabel(num)}</span>
                            {chapter.title && (<span className="block text-[16px] font-medium leading-snug truncate">{renderFlipLabel(chapter.title)}</span>)}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 顯示大觀書院內容 */}
              {academyNavOpen && ACADEMY_NAV_CATEGORIES.map((cat) => (
                <div key={cat.key}>
                  <div className="text-lg font-bold text-stone-500 mb-3 px-2 border-l-4 border-stone-300">
                    {cat.label}
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {cat.chapters.map((chapter) => {
                      const num = chapter.id;
                      const active = isAcademyImplemented(cat.key, num);
                      const isCurrentTab = activeTab === `academy_${cat.key}_${num}`;
                      return (
                        <a
                          key={num}
                          href={`${cat.prefix}${num}`}
                          className={`nav-pill nav-pill--tier2 ${isCurrentTab ? 'nav-pill--active' : ''} justify-start items-center rounded-xl px-3.5 py-2.5 text-base transition-all duration-200 ${isCurrentTab
                            ? 'bg-amber-50 text-amber-900 font-extrabold ring-1 ring-amber-300/60 shadow-md'
                            : active
                              ? 'bg-amber-50/60 text-amber-800 font-bold hover:bg-amber-100 shadow-sm border-l-[3px] border-amber-400'
                              : 'bg-transparent text-stone-400 opacity-60 hover:opacity-100 hover:bg-white/50 hover:text-stone-600 border border-transparent hover:border-stone-200 cursor-not-allowed'
                            }`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!daguanUnlocked) {
                              onUnlockRequest?.('daguan');
                              return;
                            }
                            if (cat.key === 'zhiya') {
                              if (parseInt(num, 10) === 10) goToTab('academy_zhiya_10');
                              else if (parseInt(num, 10) === 2) goToTab('academy_zhiya_02');
                              else if (parseInt(num, 10) === 3) goToTab('academy_zhiya_03');
                              else if (parseInt(num, 10) === 4) goToTab('academy_zhiya_04');
                              else if (parseInt(num, 10) === 5) goToTab('academy_zhiya_05');
                              else if (parseInt(num, 10) === 6) goToTab('academy_zhiya_06');
                              else if (parseInt(num, 10) === 7) goToTab('academy_zhiya_07');
                              else if (parseInt(num, 10) === 9) goToTab('academy_zhiya_09');
                              else if (parseInt(num, 10) === 14) goToTab('academy_zhiya_14');
                              else goToTab('academy_coming_soon');
                            } else if (cat.key === 'xueya') {
                              if (parseInt(num, 10) === 1) goToTab('academy_xueya_01');
                              else if (parseInt(num, 10) === 3) goToTab('academy_xueya_03');
                              else if (parseInt(num, 10) === 4) goToTab('academy_xueya_04');
                              else if (parseInt(num, 10) === 5) goToTab('academy_xueya_05');
                              else if (parseInt(num, 10) === 6) goToTab('academy_xueya_06');
                              else if (parseInt(num, 10) === 7) goToTab('academy_xueya_07');
                              else if (parseInt(num, 10) === 8) goToTab('academy_xueya_08');
                              else if (parseInt(num, 10) === 9) goToTab('academy_xueya_09');
                              else if (parseInt(num, 10) === 11) goToTab('academy_xueya_11');
                              else goToTab('academy_coming_soon');
                            } else {
                              goToTab('academy_coming_soon');
                            }
                            setAcademyNavOpen(false);
                          }}
                        >
                          <div className="w-full text-left flex items-baseline gap-3">
                            <span className="font-bold text-[18px] block shrink-0 nav-pill--no-line">{renderFlipLabel(num)}</span>
                            {chapter.title && (<span className="block text-[16px] font-medium leading-snug truncate">{renderFlipLabel(chapter.title)}</span>)}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}

              {(daguanUnlocked || chonghuaUnlocked) && !academyMenuHidden && (academyNavOpen || chonghuaNavOpen) ? (
                <div className="pt-4 border-t border-stone-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setAcademyNavOpen(false);
                      setChonghuaNavOpen(false);
                      onUnlockRequest?.(false);
                    }}
                    className="rounded-full px-4 py-2 text-sm font-semibold border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 transition-colors"
                  >
                    隱藏書院
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3/4 navigation is rendered as a left sidebar inside each exhibit page. */}

      {
        mobileMenuOpen && (
	          <div id="mobile-site-menu" className="xl:hidden tool-surface tool-surface--strong absolute top-full left-0 right-0 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl border-t border-stone-200">
            <div className="px-2 pt-2 pb-12 space-y-1 sm:px-3">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="text-xs font-bold text-stone-500">{i18n.t('ui.language')}</div>
                <button
                  type="button"
                  onClick={i18n.toggleLang}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-stone-100/80 hover:bg-stone-200/80 transition-all shadow-sm border border-stone-200/50"
                >
                  <span className={`text-xs font-bold transition-all ${i18n.lang === 'zh-Hant' ? 'text-emerald-700' : 'text-stone-400'}`}>
                    中
                  </span>
                  <span className="text-stone-300 text-xs">/</span>
                  <span className={`text-xs font-bold transition-all ${i18n.lang === 'en' ? 'text-emerald-700' : 'text-stone-400'}`}>
                    EN
                  </span>
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


	              <div className="space-y-3 px-2">
	                {PRIMARY_SITE_NAV.map((group) => {
	                  const groupChildren = group.children ?? [];
	                  const isGroupActive = activePrimaryNavId === group.id;
	                  const isGroupOpen = openPrimaryNavId === group.id || isGroupActive;
                    const groupLabel = localizedNavText(group, 'label');
                    const groupDescription = localizedNavText(group, 'description');
	                  return (
	                    <div key={group.id} className={`rounded-2xl border p-2 shadow-sm transition-colors ${isGroupOpen ? 'border-emerald-200/70 bg-white/90' : 'border-stone-200/50 bg-white/70'}`}>
	                      <button
	                        type="button"
                        onClick={() => toggleMobilePrimaryGroup(group)}
	                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[17px] font-extrabold transition-colors ${isGroupActive ? 'bg-emerald-50 text-emerald-950' : isGroupOpen ? 'bg-stone-50 text-stone-950' : 'text-stone-800 hover:bg-stone-50'}`}
	                        aria-expanded={groupChildren.length > 0 ? isGroupOpen : undefined}
	                      >
	                        <span className="min-w-0 flex-1 truncate">{groupLabel}</span>
	                        {groupChildren.length > 0 ? (
	                          <ChevronDown size={18} className={`shrink-0 text-stone-400 transition-transform ${isGroupOpen ? 'rotate-180 text-emerald-700' : ''}`} />
	                        ) : null}
	                      </button>
	                      {groupDescription ? (
	                        <div className="px-4 pb-2 text-[13px] font-semibold leading-snug text-stone-500">
	                          {groupDescription}
	                        </div>
	                      ) : null}
	
	                      {groupChildren.length > 0 && isGroupOpen ? (
	                        <div className="space-y-1.5 px-2 pb-2">
	                          {groupChildren.map((child) => {
	                            const isChildActive = activeTab === child.currentTab;
                              const childLabel = localizedNavText(child, 'label');
                              const childDescription = localizedNavText(child, 'description');
	                            return (
	                              <div key={child.id}>
	                                <button
	                                  type="button"
	                                  onClick={() => navigateToPrimaryEntry(child)}
	                                  className={`w-full rounded-xl px-3 py-3 text-left transition-colors ${isChildActive ? 'bg-emerald-50 text-emerald-950' : 'text-stone-700 hover:bg-stone-50 hover:text-amber-900'}`}
	                                >
	                                  <span className="block text-[16px] font-extrabold leading-snug">{childLabel}</span>
	                                  {childDescription ? (
	                                    <span className={`mt-1 block text-[13px] font-semibold leading-snug ${isChildActive ? 'text-emerald-900/70' : 'text-stone-500'}`}>
	                                      {childDescription}
	                                    </span>
	                                  ) : null}
	                                </button>
                                {isChildActive ? renderMobileContextNavigation(child.currentTab) : null}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        isGroupActive ? renderMobileContextNavigation(group.currentTab) : null
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Legacy mobile atlas list is hidden; grouped IA above is the active mobile navigation. */}
              <div className="hidden">
                <button
                  type="button"
                  onClick={() => goToTab('journey')}
                  className={`px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${activeTab === 'journey' ? 'tool-item--active' : ''
                    }`}
                >
                  {String(i18n.t('nav.journey')).replace(/\s*\n\s*/g, '')}
                </button>
                {/* All Atlas items */}
                <div className="space-y-2">
                  {ATLAS_ITEMS.map((item) => {
                    const isActive = activeTab === item;
                    return (
                      <div key={item} className="space-y-1">
                        <button
                          onClick={() => goToTab(item)}
                          className={`px-3 py-2 rounded-xl text-sm font-semibold w-full text-left transition-colors tool-item ${isActive ? 'tool-item--active' : ''
                            }`}
                        >
                          {String(i18n.t(`nav.${item}`)).replace(/\s*\n\s*/g, '')}
                        </button>

                        {/* Varieties Mobile Sub-navigation (Tier 3 & 4) */}
                        {item === 'varieties' && isActive && (
                          <div className="ml-3 pl-3 border-l-2 border-amber-500/40 space-y-3 mt-2 py-1.5 bg-stone-50/60 rounded-xl p-2.5 border border-stone-200/40 shadow-inner">
                            {VARIETIES_KINDS.map((kind) => {
                              const subItems = VARIETIES_SUBITEMS_BY_KEY[kind.key] || [];
                              const isKindActive = varietiesKind === kind.key;
                              return (
                                <div key={kind.key} className="space-y-1.5">
                                  <button
                                    onClick={() => setVarietiesKind(kind.key)}
                                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[14px] font-bold transition-all flex items-center justify-between border ${isKindActive ? 'bg-amber-100/90 text-amber-950 border-amber-200/60 shadow-sm' : 'text-stone-700 bg-white hover:bg-stone-50 border-stone-200/30 hover:border-stone-200/60 shadow-sm'
                                      }`}
                                  >
                                    <span>{kind.label}</span>
                                    {subItems.length > 0 && <ChevronDown size={14} className={`opacity-60 transition-transform ${isKindActive ? 'rotate-180' : ''}`} />}
                                  </button>

                                  {isKindActive && subItems.length > 0 && (
                                    <div className="ml-2 pl-3.5 border-l-2 border-stone-300 space-y-1.5 py-1">
                                      {subItems.map((sub) => (
                                        <button
                                          key={sub.href}
                                          onClick={() => {
                                            scrollToHrefWithOffset(sub.href, { dispatchPopstate: true, behavior: 'smooth' });
                                            setMobileMenuOpen(false);
                                          }}
                                          className="w-full text-left px-3 py-2.5 rounded-lg text-[13px] font-semibold text-stone-600 hover:text-amber-950 hover:bg-amber-50/40 transition-colors flex items-center gap-1.5 border border-transparent hover:border-amber-200/20"
                                        >
                                          <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0" />
                                          <span className="truncate">{sub.label}</span>
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Other Tabs Mobile Sub-navigation (Dynamic Chapters/TOC) */}
                        {isActive && item !== 'varieties' && ['puerh', 'science', 'cultivars', 'featured', 'history', 'seasons', 'zisha'].includes(item) && (
                          <div className="ml-3 pl-3 border-l-2 border-amber-500/40 space-y-1.5 mt-2 py-1.5 bg-stone-50/60 rounded-xl p-2 border border-stone-200/40 shadow-inner">
                            {(() => {
                              let subItems = [];
                              if (item === 'puerh') subItems = PUERH_TOC;
                              else if (item === 'science') subItems = SCIENCE_TOC;
                              else if (item === 'cultivars') subItems = CULTIVARS_TOC;
                              else if (item === 'featured') subItems = FEATURED_TOC;
                              else if (item === 'history') subItems = HISTORY_SECTIONS;
                              else if (item === 'seasons') subItems = SEASONS_SECTIONS;
                              else if (item === 'zisha') subItems = ZISHA_TOC;

                              return subItems.map((sub) => {
                                const label = sub.label;
                                return (
                                  <button
                                    key={sub.href || sub.key}
                                    onClick={() => {
                                      goToTab(item);
                                      if (item === 'science' && sub.key) {
                                        setScienceRoom(sub.key);
                                      }
                                      
                                      if (item === 'featured' && sub.href && !['#featured-overview', '#featured-longjing'].includes(sub.href)) {
                                        const teaId = sub.href.replace('#featured-', '');
                                        const url = new URL(window.location.href);
                                        url.searchParams.set('tab', 'featured');
                                        url.searchParams.set('tea', teaId);
                                        window.history.pushState(null, '', url.pathname + url.search);
                                        window.dispatchEvent(new Event('popstate'));
                                      } else if (sub.href) {
                                        scrollToHrefWithOffset(sub.href, { dispatchPopstate: true });
                                      } else if (item === 'history' && sub.key) {
                                        const url = new URL(window.location.href);
                                        url.searchParams.set('tab', 'history');
                                        url.searchParams.set('section', sub.key);
                                        window.history.pushState(null, '', url.pathname + url.search);
                                        window.dispatchEvent(new Event('popstate'));
                                      } else if (item === 'zisha' && sub.key) {
                                        const url = new URL(window.location.href);
                                        url.searchParams.set('tab', 'zisha');
                                        url.searchParams.set('chapter', sub.key);
                                        window.history.pushState(null, '', url.pathname + url.search);
                                        window.dispatchEvent(new Event('popstate'));
                                      }
                                      
                                      setMobileMenuOpen(false);
                                    }}
                                    className="w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold text-stone-700 hover:text-amber-900 hover:bg-amber-50/50 transition-all flex items-center gap-2 border border-transparent hover:border-amber-200/30"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0" />
                                    <span className="truncate">{label}</span>
                                  </button>
                                );
                              });
                            })()}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Academy (Mobile) */}
              <div className="mt-2 px-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!daguanEntryVisible) {
                        onUnlockRequest?.('daguan');
                        return;
                      }
                      setAcademyNavOpen((v) => !v);
                      setChonghuaMobileOpen(false);
                      setOpenPrimaryNavId(null);
                    }}
                    className="nav-flip-trigger w-full inline-flex items-center justify-between rounded-xl px-3 py-2 text-sm font-extrabold tool-item"
                    aria-expanded={daguanEntryVisible ? academyNavOpen : undefined}
                  >
                    {renderFlipLabel(daguanEntryVisible ? academyLabel : '書院')}
                    <ChevronRight
                      size={16}
                      className={`text-amber-800 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${academyNavOpen ? 'rotate-90' : '-rotate-90'}`}
                    />
                  </button>

                  <AccordionPanel open={daguanEntryVisible && academyNavOpen} className="mt-2" disablePointerEventsWhenClosed>
                    <div className="space-y-2 pl-2 border-l border-stone-200">
                      {ACADEMY_NAV_CATEGORIES.map((cat) => {
                        const isOpen = academyMobileSubOpen[cat.key];
                        return (
                          <div key={cat.key}>
                            <button
                              type="button"
                              onClick={() => setAcademyMobileSubOpen((prev) => ({ ...prev, [cat.key]: !prev[cat.key] }))}
                              className="w-full inline-flex items-center justify-between rounded-lg px-3 py-2 text-lg font-bold text-stone-700 hover:bg-stone-50 transition-colors"
                            >
                              <span>{cat.label}</span>
                              <ChevronRight
                                size={14}
                                className={`text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                              />
                            </button>
                            <AccordionPanel open={isOpen}>
                              <div className="grid grid-cols-2 gap-2 p-2">
                                {cat.chapters.map((chapter) => {
                                  const num = chapter.id;
                                  const active = isAcademyImplemented(cat.key, num);
                                  return (
                                    <a
                                      key={num}
                                      href={`${cat.prefix}${num}`}
                                      className={`nav-flip-trigger text-left rounded-md py-3 px-3 text-sm font-medium transition-all ${active
                                        ? 'bg-amber-50 text-amber-800 shadow-sm'
                                        : 'bg-white text-stone-600 shadow-sm'
                                        }`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        if (!daguanUnlocked) {
                                          onUnlockRequest?.('daguan');
                                          return;
                                        }
                                        if (cat.key === 'zhiya') {
                                          if (parseInt(num, 10) === 10) goToTab('academy_zhiya_10');
                                          else if (parseInt(num, 10) === 2) goToTab('academy_zhiya_02');
                                          else if (parseInt(num, 10) === 3) goToTab('academy_zhiya_03');
                                          else if (parseInt(num, 10) === 4) goToTab('academy_zhiya_04');
                                          else if (parseInt(num, 10) === 5) goToTab('academy_zhiya_05');
                                          else if (parseInt(num, 10) === 6) goToTab('academy_zhiya_06');
                                          else if (parseInt(num, 10) === 7) goToTab('academy_zhiya_07');
                                          else if (parseInt(num, 10) === 9) goToTab('academy_zhiya_09');
                                          else if (parseInt(num, 10) === 14) goToTab('academy_zhiya_14');
                                          else goToTab('academy_coming_soon');
                                        } else if (cat.key === 'xueya') {
                                          if (parseInt(num, 10) === 1) goToTab('academy_xueya_01');
                                          else if (parseInt(num, 10) === 3) goToTab('academy_xueya_03');
                                          else if (parseInt(num, 10) === 4) goToTab('academy_xueya_04');
                                          else if (parseInt(num, 10) === 5) goToTab('academy_xueya_05');
                                          else if (parseInt(num, 10) === 6) goToTab('academy_xueya_06');
                                          else if (parseInt(num, 10) === 7) goToTab('academy_xueya_07');
                                          else if (parseInt(num, 10) === 8) goToTab('academy_xueya_08');
                                          else if (parseInt(num, 10) === 9) goToTab('academy_xueya_09');
                                          else if (parseInt(num, 10) === 11) goToTab('academy_xueya_11');
                                          else goToTab('academy_coming_soon');
                                        } else {
                                          goToTab('academy_coming_soon');
                                        }
                                        setMobileMenuOpen(false);
                                      }}
                                    >
                                      <div className="w-full text-left flex items-baseline gap-3">
                                        <span className="font-bold text-[18px] block shrink-0">{renderFlipLabel(num)}</span>
                                        {chapter.title && (<span className="block text-[16px] font-medium leading-snug truncate">{renderFlipLabel(chapter.title)}</span>)}
                                      </div>
                                    </a>
                                  );
                                })}
                              </div>
                            </AccordionPanel>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionPanel>
              </div>

              {/* Chonghua (Mobile) */}
              <div className="mt-2 px-2">
                <button
                  type="button"
	                  onClick={() => {
	                    if (!chonghuaUnlocked) {
	                      onUnlockRequest?.('chonghua');
	                      return;
	                    }
	                    setChonghuaMobileOpen((v) => !v);
	                    setAcademyNavOpen(false);
	                    setOpenPrimaryNavId(null);
	                  }}
                  className="nav-flip-trigger w-full inline-flex items-center justify-between rounded-xl px-3 py-2 text-sm font-extrabold tool-item"
                  aria-expanded={chonghuaMobileOpen}
                >
                  {renderFlipLabel(chonghuaLabel)}
                  <ChevronRight
                    size={16}
                    className={`text-orange-800 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${chonghuaMobileOpen ? 'rotate-90' : '-rotate-90'}`}
                  />
                </button>

                <AccordionPanel open={chonghuaMobileOpen} className="mt-2" disablePointerEventsWhenClosed>
                  <div className="grid grid-cols-3 gap-2 p-2">
                    {CHONGHUA_CATEGORY?.chapters?.map((chapter) => {
                      const active = isAcademyImplemented('chonghua', chapter.id);
                      return (
                        <a
                          key={chapter.id}
                          href={active ? `?tab=academy_chonghua_${chapter.id}` : '?tab=academy_coming_soon'}
                          className={`nav-flip-trigger text-left rounded-md py-3 px-3 text-sm font-medium transition-all ${active
                            ? 'bg-orange-50 text-orange-800 shadow-sm'
                            : 'bg-white text-stone-600 shadow-sm'
                            }`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!chonghuaUnlocked) {
                              onUnlockRequest?.('chonghua');
                              return;
                            }
                            if (!active) {
                              goToTab('academy_coming_soon');
                              setMobileMenuOpen(false);
                              return;
                            }
                            goToTab(`academy_chonghua_${chapter.id}`);
                            setMobileMenuOpen(false);
                          }}
                        >
                          <div className="w-full text-center">
                            <span className="font-bold text-[18px]">{renderFlipLabel(chapter.id)}</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </AccordionPanel>
              </div>

              {(daguanUnlocked || chonghuaUnlocked) && !academyMenuHidden ? (
                <div className="mt-3 px-2">
                  <button
                    type="button"
                    onClick={() => {
                      setAcademyNavOpen(false);
                      setChonghuaMobileOpen(false);
                      onUnlockRequest?.(false);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full rounded-xl px-3 py-2 text-sm font-semibold border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition-colors"
                  >
                    隱藏書院
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        )
      }
    </nav>
  );
}



