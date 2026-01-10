import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Leaf, Menu, X } from 'lucide-react';
import AccordionPanel from './AccordionPanel';
import { ATLAS_ITEMS, CHEN_CHUAN_TOC, OOLONG_TOC, VARIETIES_KINDS, SCIENCE_TOC, CULTIVARS_TOC, TEA_REFERENCE_TOC, PUERH_TOC } from '../config/navigation';
import { splitNavLabel } from '../utils/splitNavLabel';

const VARIETIES_SUBITEMS_BY_KEY = {
  ref_chenchuan: CHEN_CHUAN_TOC,
  oolong: OOLONG_TOC,
};

const NAV_THEME_STORAGE_KEY = 'tea.navTheme';
const NAV_THEMES = [
  { key: 'default', label: '預設（紙感）' },
  { key: 'lp', label: '淺藍（LP）' },
  { key: 'slate', label: '深藍灰（玻璃）' },
  { key: 'graphite', label: '石墨黑（玻璃）' },
];

const ACADEMY_STRUCTURE = [
  {
    key: 'xueya',
    label: '學雅',
    chapters: [
      { id: '01', title: '' },
      { id: '02', title: '' },
      { id: '03', title: '儀軌教學 / 茶荷置茶法' },
      { id: '04', title: '高山烏龍' },
      { id: '05', title: '凍頂烏龍茶深度解析' },
      { id: '06', title: '鐵觀音' },
      { id: '07', title: '蓋杯 / 紅烏龍' },
      { id: '08', title: '茶則置茶 / 坪林包種茶' },
      { id: '09', title: '東方美人' },
      { id: '10', title: '做紅茶' },
      { id: '11', title: '梨山小葉紅 / 大葉紅玉紅茶' },
      { id: '12', title: '學雅茶湯會' },
    ],
    prefix: '/academy/xueya/',
  },
  {
    key: 'zhiya',
    label: '質雅',
    chapters: [
      { id: '01', title: '紅烏龍 / 懸空置茶法' },
      { id: '02', title: '品味討論 清香形' },
      { id: '03', title: '品味討論 焙香形' },
      { id: '04', title: '品味討論 濃香形' },
      { id: '05', title: '茶席設計與雙杯品鑑' },
      { id: '06', title: '茶席設計美學：佈局/用色/意境' },
      { id: '07', title: '茶席/器物之選/色彩密碼' },
      { id: '08', title: '茶會觀摩學習 / 大桶茶泡法' },
      { id: '09', title: '茶道進階與西湖龍井品鑑' },
      { id: '10', title: '茶碗以匙分茶 / 碧螺春 / 武夷岩茶' },
      { id: '11', title: '普洱茶' },
      { id: '12', title: '武夷岩茶沖泡' },
      { id: '13', title: '白茶沖泡' },
      { id: '14', title: '紅茶' },
      { id: '15', title: '茶會的舉辦與練習' },
      { id: '16', title: '茶會的舉辦：清香渡荷來' },
    ],
    prefix: '/academy/zhiya/',
  },
];

export default function SiteNavigation({
  i18n,
  activeTab,
  varietiesKind,
  scienceRoom,
  atlasNavOpen,
  mobileMenuOpen,
  goToTab,
  setAtlasNavOpen,
  setMobileMenuOpen,
  setVarietiesKind,
  setScienceRoom,
  museumUnlocked,
  onUnlockRequest,
}) {
  const journeyLabel = splitNavLabel(String(i18n.t('nav.journey')).replace(/\s*\n\s*/g, ''));
  const atlasLabel = splitNavLabel(String(i18n.t('nav.atlas')).replace(/\s*\n\s*/g, ''));

  const [navTheme, setNavTheme] = useState(() => {
    if (typeof window === 'undefined') return 'default';
    const stored = window.localStorage?.getItem(NAV_THEME_STORAGE_KEY);
    return NAV_THEMES.some((t) => t.key === stored) ? stored : 'default';
  });

  const [academyNavOpen, setAcademyNavOpen] = useState(false);
  const [academyMobileSubOpen, setAcademyMobileSubOpen] = useState({});


  // Secret Trigger Logic
  const [secretClickCount, setSecretClickCount] = useState(0);
  const handleSecretClick = () => {
    if (museumUnlocked) return;
    setSecretClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        onUnlockRequest?.();
        return 0;
      }
      return next;
    });
  };

  useEffect(() => {
    let timer;
    if (secretClickCount > 0) {
      timer = setTimeout(() => setSecretClickCount(0), 1000); // 1秒內沒續點就歸零
    }
    return () => clearTimeout(timer);
  }, [secretClickCount]);

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

  const isAcademyImplemented = (catKey, num) => {
    const implemented = {
      zhiya: ['02', '03', '04', '05', '06', '07', '09', '10'],
      xueya: ['03', '05', '06', '07', '08', '11']
    };
    return implemented[catKey]?.includes(num);
  };

  return (
    <nav id="site-nav" className="sticky top-0 z-50 cement-paper backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[68px]">
          <div className="flex items-center cursor-pointer" onClick={() => goToTab('journey')}>
            <div className="mr-3 inline-flex items-center justify-center w-10 h-10 rounded-2xl tool-surface tool-surface--strong">
              <Leaf className="h-6 w-6 text-emerald-800" />
            </div>
            <div className="leading-tight">
              <div className="text-2xl font-extrabold text-stone-900 tracking-widest">{i18n.t('site.title')}</div>
              <div
                className="text-xs font-extrabold tracking-widest text-stone-600 select-none"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSecretClick();
                }}
              >
                {i18n.t('site.tagline')}
              </div>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-6">
            {/* Tier 1: Journey / Atlas */}
            <div className="flex items-center gap-3">
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
              <button
                type="button"
                onClick={() => {
                  setAcademyNavOpen(false);
                  const isAtlasContext = activeTab !== 'journey' && activeTab !== 'sensory' && activeTab !== 'tea_talk';
                  if (!isAtlasContext) {
                    goToTab('home');
                    setAtlasNavOpen(true);
                    return;
                  }
                  setAtlasNavOpen((v) => !v);
                }}
                className={`nav-pill nav-pill--tier1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${activeTab !== 'journey' && activeTab !== 'sensory' && activeTab !== 'tea_talk' ? 'nav-pill--active' : ''}`}
                aria-expanded={activeTab !== 'journey' && activeTab !== 'sensory' && activeTab !== 'tea_talk' ? atlasNavOpen : undefined}
                aria-controls={activeTab !== 'journey' && activeTab !== 'sensory' && activeTab !== 'tea_talk' ? 'atlas-secondary-nav' : undefined}
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
                    className={`opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${activeTab !== 'journey' && activeTab !== 'sensory' && activeTab !== 'tea_talk' && atlasNavOpen ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>
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

              {/* Academy (大觀書院) - Controlled by Secret Lock */}
              {museumUnlocked && (
                <button
                  type="button"
                  onClick={() => {
                    setAcademyNavOpen((v) => !v);
                    if (!academyNavOpen) setAtlasNavOpen(false);
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
              )}
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
      {activeTab !== 'journey' && activeTab !== 'sensory' && activeTab !== 'tea_talk' ? (
        <div className="hidden xl:block relative z-40">
          <AccordionPanel open={atlasNavOpen} className="grid">
            <div
              id="atlas-secondary-nav"
              className="cement-strip backdrop-blur-md"
              style={{
                '--nav-underline': 'rgba(16, 185, 129, 0.55)',
                '--nav-hover-ink': 'rgba(6, 95, 70, 0.95)',
                '--nav-active-ink': 'rgba(6, 95, 70, 1)',
              }}
            >
              <div className="max-w-full mx-auto px-2 sm:px-4">
                <div className="flex flex-nowrap items-center justify-center gap-3 overflow-x-auto no-scrollbar mask-linear-fade">
                  {ATLAS_ITEMS.filter((item) => item !== 'sensory' && item !== 'tea_talk').map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        goToTab(item);
                      }}
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
                        {item === 'varieties' || item === 'cultivars' || item === 'science' ? (
                          <ChevronDown
                            size={16}
                            className="opacity-70 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                          />
                        ) : null}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AccordionPanel>
        </div>
      ) : null}





      {/* Tier 2 (Desktop): Academy Dropdown */}
      <AccordionPanel open={academyNavOpen} className="hidden xl:grid">
        <div
          className="cement-strip backdrop-blur-md"
          style={{
            '--nav-underline': 'rgba(16, 185, 129, 0.55)',
            '--nav-hover-ink': 'rgba(6, 95, 70, 0.95)',
            '--nav-active-ink': 'rgba(6, 95, 70, 1)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col gap-10">
              {ACADEMY_STRUCTURE.map((cat) => (
                <div key={cat.key}>
                  <div className="text-lg font-bold text-stone-500 mb-3 px-2 border-l-4 border-stone-300">
                    {cat.label}
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {cat.chapters.map((chapter) => {
                      const num = chapter.id;
                      const active = isAcademyImplemented(cat.key, num);
                      return (
                        <a
                          key={num}
                          href={`${cat.prefix}${num}`}
                          className={`nav-pill nav-pill--tier2 justify-start items-center rounded-lg px-4 py-3 text-sm font-base transition-colors ${active
                            ? 'bg-amber-50 text-amber-900 hover:bg-amber-100 shadow-sm'
                            : 'bg-white/60 hover:bg-white text-stone-700 hover:text-stone-900'
                            }`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (cat.key === 'zhiya') {
                              if (parseInt(num, 10) === 10) goToTab('academy_zhiya_10');
                              else if (parseInt(num, 10) === 2) goToTab('academy_zhiya_02');
                              else if (parseInt(num, 10) === 3) goToTab('academy_zhiya_03');
                              else if (parseInt(num, 10) === 4) goToTab('academy_zhiya_04');
                              else if (parseInt(num, 10) === 5) goToTab('academy_zhiya_05');
                              else if (parseInt(num, 10) === 6) goToTab('academy_zhiya_06');
                              else if (parseInt(num, 10) === 7) goToTab('academy_zhiya_07');
                              else if (parseInt(num, 10) === 9) goToTab('academy_zhiya_09');
                              else goToTab('academy_coming_soon');
                            } else if (cat.key === 'xueya') {
                              if (parseInt(num, 10) === 3) goToTab('academy_xueya_03');
                              else if (parseInt(num, 10) === 5) goToTab('academy_xueya_05');
                              else if (parseInt(num, 10) === 6) goToTab('academy_xueya_06');
                              else if (parseInt(num, 10) === 7) goToTab('academy_xueya_07');
                              else if (parseInt(num, 10) === 8) goToTab('academy_xueya_08');
                              else if (parseInt(num, 10) === 11) goToTab('academy_xueya_11');
                              else goToTab('academy_coming_soon');
                            } else {
                              goToTab('academy_coming_soon');
                            }
                            setAcademyNavOpen(false);
                          }}
                        >
                          <div className="w-full text-left flex items-baseline gap-3">
                            <span className="font-semibold text-[16px] block shrink-0">第{num}堂</span>
                            {chapter.title && <span className="block text-[14px] font-normal opacity-75 truncate">{chapter.title}</span>}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AccordionPanel>

      {/* Tier 3/4 navigation is rendered as a left sidebar inside each exhibit page. */}

      {
        mobileMenuOpen && (
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
                  className={`px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${activeTab === 'journey' ? 'tool-item--active' : ''
                    }`}
                >
                  {String(i18n.t('nav.journey')).replace(/\s*\n\s*/g, '')}
                </button>
                <button
                  type="button"
                  onClick={() => goToTab(activeTab === 'journey' || activeTab === 'sensory' || activeTab === 'tea_talk' ? 'home' : activeTab)}
                  className={`px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${activeTab !== 'journey' && activeTab !== 'sensory' && activeTab !== 'tea_talk' ? 'tool-item--active' : ''
                    }`}
                >
                  {String(i18n.t('nav.atlas')).replace(/\s*\n\s*/g, '')}
                </button>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2 px-2">
                <button
                  type="button"
                  onClick={() => goToTab('tea_talk')}
                  className={`px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${activeTab === 'tea_talk' ? 'tool-item--active' : ''
                    }`}
                >
                  {String(i18n.t('nav.tea_talk')).replace(/\s*\n\s*/g, '')}
                </button>
                <button
                  type="button"
                  onClick={() => goToTab('sensory')}
                  className={`px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${activeTab === 'sensory' ? 'tool-item--active' : ''
                    }`}
                >
                  {String(i18n.t('nav.sensory')).replace(/\s*\n\s*/g, '')}
                </button>
              </div>

              {/* Academy (Mobile) */}
              {museumUnlocked && (
                <div className="mt-2 px-2">
                  <button
                    type="button"
                    onClick={() => setAcademyNavOpen((v) => !v)}
                    className="w-full inline-flex items-center justify-between rounded-xl px-3 py-2 text-sm font-extrabold tool-item"
                    aria-expanded={academyNavOpen}
                  >
                    <span>大觀書院</span>
                    <ChevronRight
                      size={16}
                      className={`text-emerald-800 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${academyNavOpen ? 'rotate-90' : '-rotate-90'}`}
                    />
                  </button>

                  <AccordionPanel open={academyNavOpen} className="mt-2" disablePointerEventsWhenClosed>
                    <div className="space-y-2 pl-2 border-l border-stone-200">
                      {ACADEMY_STRUCTURE.map((cat) => {
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
                                      className={`text-left rounded-md py-3 px-3 text-sm font-medium transition-all ${active
                                        ? 'bg-amber-50 text-amber-800 shadow-sm'
                                        : 'bg-white text-stone-600 shadow-sm'
                                        }`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        if (cat.key === 'zhiya') {
                                          if (parseInt(num, 10) === 10) goToTab('academy_zhiya_10');
                                          else if (parseInt(num, 10) === 2) goToTab('academy_zhiya_02');
                                          else if (parseInt(num, 10) === 3) goToTab('academy_zhiya_03');
                                          else if (parseInt(num, 10) === 4) goToTab('academy_zhiya_04');
                                          else if (parseInt(num, 10) === 5) goToTab('academy_zhiya_05');
                                          else if (parseInt(num, 10) === 6) goToTab('academy_zhiya_06');
                                          else if (parseInt(num, 10) === 7) goToTab('academy_zhiya_07');
                                          else if (parseInt(num, 10) === 9) goToTab('academy_zhiya_09');
                                          else goToTab('academy_coming_soon');
                                        } else if (cat.key === 'xueya') {
                                          if (parseInt(num, 10) === 3) goToTab('academy_xueya_03');
                                          else if (parseInt(num, 10) === 5) goToTab('academy_xueya_05');
                                          else if (parseInt(num, 10) === 6) goToTab('academy_xueya_06');
                                          else if (parseInt(num, 10) === 7) goToTab('academy_xueya_07');
                                          else if (parseInt(num, 10) === 8) goToTab('academy_xueya_08');
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
                                      <div className="font-bold text-lg">第{num}堂</div>
                                      {chapter.title && <div className="truncate opacity-75 mt-0.5 text-sm">{chapter.title}</div>}
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
              )}

              {/* Tier 2 */}
              {activeTab !== 'journey' && activeTab !== 'sensory' && activeTab !== 'tea_talk' ? (
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
                          className={`px-3 py-2 rounded-xl text-sm font-semibold w-full text-left transition-colors tool-item ${activeTab === item ? 'tool-item--active' : ''
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
                        className={`px-3 py-2 rounded-xl text-sm font-semibold w-full text-left transition-colors tool-item ${varietiesKind === kind.key ? 'tool-item--active' : ''
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

              {/* Tier 3: Science */}
              {activeTab === 'science' ? (
                <div className="mt-2 px-2">
                  <div className="text-xs font-bold text-stone-500 px-1 py-2">科學章節</div>
                  <div className="grid grid-cols-2 gap-2">
                    {SCIENCE_TOC.map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => {
                          setScienceRoom(item.key);
                          setMobileMenuOpen(false);
                          if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold w-full text-left transition-colors tool-item ${scienceRoom === item.key ? 'tool-item--active' : ''
                          }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  {scienceRoom === 'teaching' && (
                    <div className="mt-3">
                      <div className="text-xs font-bold text-stone-500 px-1 py-2">教學引用</div>
                      <div className="space-y-1">
                        {TEA_REFERENCE_TOC.map((item) => (
                          <button
                            key={item.href}
                            type="button"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              scrollToHrefWithOffset(item.href, { dispatchPopstate: true });
                            }}
                            className="w-full text-left rounded-xl px-3 py-2 text-sm font-semibold tool-item"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

              {/* Tier 3: Puerh */}
              {activeTab === 'puerh' ? (
                <div className="mt-2 px-2">
                  <div className="text-xs font-bold text-stone-500 px-1 py-2">普洱茶百科</div>
                  <div className="space-y-1">
                    {PUERH_TOC.map((item) => (
                      <button
                        key={item.href}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          scrollToHrefWithOffset(item.href);
                        }}
                        className="w-full text-left rounded-xl px-3 py-2 text-sm font-semibold tool-item"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Tier 3: Cultivars */}
              {activeTab === 'cultivars' ? (
                <div className="mt-2 px-2">
                  <div className="text-xs font-bold text-stone-500 px-1 py-2">品種章節</div>
                  <div className="space-y-1">
                    {CULTIVARS_TOC.map((item) => (
                      <button
                        key={item.href}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          scrollToHrefWithOffset(item.href);
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
          </div>
        )
      }
    </nav >
  );
}
