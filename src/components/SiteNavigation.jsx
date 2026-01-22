import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Leaf, Menu, X, Palette } from 'lucide-react';
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

const PAPER_THEME_STORAGE_KEY = 'tea.paperTheme';
const PAPER_THEMES = [
  { key: 'ivory', label: '牙白紙張' },
  { key: 'light', label: '淺色紙張' },
  { key: 'blue', label: '淺藍紙張' },
  { key: 'dotted', label: '點點紙張' },
  { key: 'natural', label: '自然紙張' },
  { key: 'slate', label: '深藍灰紙張' },
  { key: 'cream', label: '奶油紙張' },
  { key: 'ink', label: '山水潑墨' },
  { key: 'parchment', label: '復古羊皮' },
];

const ACADEMY_STRUCTURE = [
  {
    key: 'xueya',
    label: '學雅',
    chapters: [
      { id: '01', title: '茶之於味：當代茶道的藝術與哲學精神' },
      { id: '02', title: '' },
      { id: '03', title: '儀軌教學 / 茶荷置茶法' },
      { id: '04', title: '高山烏龍' },
      { id: '05', title: '凍頂烏龍茶深度解析' },
      { id: '06', title: '鐵觀音' },
      { id: '07', title: '蓋杯 / 紅烏龍' },
      { id: '08', title: '茶則置茶 / 坪林包種茶' },
      { id: '09', title: '東方美人' },
      { id: '10', title: '做紅茶' },
      { id: '11', title: '紅茶：小葉紅 / 大葉紅' },
      { id: '12', title: '學雅茶湯會' },
    ],
    prefix: '?tab=academy_xueya_',
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
    prefix: '?tab=academy_zhiya_',
  },
  {
    key: 'chonghua',
    label: '崇華',
    chapters: [
      { id: '01', title: '第01堂' }, { id: '02', title: '第02堂' }, { id: '03', title: '第03堂' },
      { id: '04', title: '第04堂' }, { id: '05', title: '第05堂' }, { id: '06', title: '第06堂' },
      { id: '07', title: '第07堂' }, { id: '08', title: '第08堂' }, { id: '09', title: '第09堂' },
      { id: '10', title: '第10堂' }, { id: '11', title: '第11堂' }, { id: '12', title: '第12堂' },
      { id: '13', title: '第13堂' }, { id: '14', title: '第14堂' }, { id: '15', title: '第15堂' },
      { id: '16', title: '第16堂' }, { id: '17', title: '第17堂' }, { id: '18', title: '第18堂' },
      { id: '19', title: '第19堂' }, { id: '20', title: '第20堂' }, { id: '21', title: '第21堂' },
      { id: '22', title: '第22堂' }, { id: '23', title: '第23堂' }, { id: '24', title: '第24堂' },
      { id: '25', title: '第25堂' }, { id: '26', title: '第26堂' }, { id: '27', title: '第27堂' },
      { id: '28', title: '第28堂' }, { id: '29', title: '第29堂' }, { id: '30', title: '第30堂' },
      { id: '31', title: '第31堂' }, { id: '32', title: '第32堂' }, { id: '33', title: '第33堂' },
    ],
    prefix: '?tab=academy_chonghua_',
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
  daguanUnlocked,
  chonghuaUnlocked,
  academyMenuHidden,
  onUnlockRequest,
}) {
  const journeyLabel = splitNavLabel(String(i18n.t('nav.journey')).replace(/\s*\n\s*/g, ''));
  const atlasLabel = splitNavLabel(String(i18n.t('nav.atlas')).replace(/\s*\n\s*/g, ''));
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

  const [paperDropdownOpen, setPaperDropdownOpen] = useState(false);

  const [academyNavOpen, setAcademyNavOpen] = useState(false);
  const [chonghuaNavOpen, setChonghuaNavOpen] = useState(false);
  const [academyMobileSubOpen, setAcademyMobileSubOpen] = useState({});
  const [chonghuaMobileOpen, setChonghuaMobileOpen] = useState(false);


  // Secret Trigger Logic - Toggle Academy visibility with 5 clicks
  const [secretClickCount, setSecretClickCount] = useState(0);

  const handleSecretClick = () => {
    setSecretClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        if (daguanUnlocked && chonghuaUnlocked) {
          // 已解鎖：重新鎖定
          onUnlockRequest?.(false);
        } else {
          // 未完全解鎖：顯示密碼框
          onUnlockRequest?.('any');
        }

        return 0; // 重置計數器
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

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.paperTheme = paperTheme;
    try {
      window.localStorage?.setItem(PAPER_THEME_STORAGE_KEY, paperTheme);
    } catch {
      // ignore
    }
  }, [paperTheme]);

  const themeLabel = useMemo(() => NAV_THEMES.find((t) => t.key === navTheme)?.label ?? NAV_THEMES[0].label, [navTheme]);
  const paperThemeLabel = useMemo(() => PAPER_THEMES.find((t) => t.key === paperTheme)?.label ?? PAPER_THEMES[0].label, [paperTheme]);

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
      zhiya: ['02', '03', '04', '05', '06', '07', '09', '10', '14'],
      xueya: ['01', '03', '05', '06', '07', '08', '09', '11'],
    };
    return implemented[catKey]?.includes(num);
  };

  const navRows = [
    ['journey', 'home', 'varieties', 'puerh', 'cultivars', 'science', 'brewing', 'featured'],
    ['seasons', 'zisha', 'regions', 'history', 'ceremony', 'tea_talk', 'sensory', 'chonghua', 'academy', 'paper_switcher', 'lang_switcher'],
  ];

  return (
    <nav id="site-nav" className={`sticky top-0 z-50 cement-paper backdrop-blur-md relative ${(academyNavOpen || chonghuaNavOpen) ? 'nav-drawer-open' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center min-h-[68px] py-3">
          <div className="flex items-center gap-5 pr-10">
            {/* 綠色葉子 Logo - 隱藏的5次點擊功能 */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSecretClick();
              }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl tool-surface tool-surface--strong hover:scale-105 transition-transform cursor-pointer"
              aria-label="Logo"
            >
              <Leaf className="h-7 w-7 text-emerald-800" />
              
            </button>

            {/* 標題 */}
            <div className="leading-tight min-w-[190px] px-1 py-0.5" onClick={() => goToTab('journey')} style={{ cursor: 'pointer' }}>
              <div className="text-3xl font-extrabold text-stone-900 tracking-widest">{i18n.t('site.title')}</div>
              
            </div>
          </div>

          <div className="hidden xl:grid nav-main flex-1 items-center">
            <div />
            {/* Tier 1: Fixed two-row navigation */}
            <div className="nav-main-center flex flex-col items-center gap-0 w-full max-w-[820px] px-4">
              <div className="nav-main-grid">
                {navRows.map((row, rowIndex) =>
                  row.map((item, colIndex) => {
                    if (academyMenuHidden && (item === 'academy' || item === 'chonghua')) {
                      return null;
                    }
                    let content = null;
                    if (item === 'academy') {
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
                    } else if (item === 'paper_switcher') {
                      const cyclePaperTheme = () => {
                        const currentIndex = PAPER_THEMES.findIndex(t => t.key === paperTheme);
                        const nextIndex = (currentIndex + 1) % PAPER_THEMES.length;
                        setPaperTheme(PAPER_THEMES[nextIndex].key);
                      };

                      content = (
                        <button
                          type="button"
                          onClick={cyclePaperTheme}
                          className="nav-pill nav-pill--tier1 group relative flex items-center justify-center gap-1.5 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30 hover:bg-emerald-50 transition-colors"
                          aria-label="紙張風格"
                          title={paperThemeLabel}
                        >
                          <Palette size={16} className="text-stone-600" />
                        </button>
                      );
                    } else if (item === 'lang_switcher') {
                      content = (
                        <button
                          type="button"
                          onClick={i18n.toggleLang}
                          className="nav-pill nav-pill--tier1 group relative flex items-center justify-center gap-1.5 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30"
                          aria-label={i18n.t('ui.language')}
                          title={i18n.t('ui.language')}
                        >
                          <span className={`text-sm font-bold transition-all ${i18n.lang === 'zh-Hant' ? 'text-emerald-700' : 'text-stone-400'}`}>
                            中
                          </span>
                          <span className="text-stone-300 text-sm font-light">/</span>
                          <span className={`text-sm font-bold transition-all ${i18n.lang === 'en' ? 'text-emerald-700' : 'text-stone-400'}`}>
                            EN
                          </span>
                        </button>
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
            '--nav-underline': chonghuaNavOpen ? 'rgba(14, 165, 233, 0.55)' : 'rgba(16, 185, 129, 0.55)',
            '--nav-hover-ink': chonghuaNavOpen ? 'rgba(7, 89, 133, 0.95)' : 'rgba(6, 95, 70, 0.95)',
            '--nav-active-ink': chonghuaNavOpen ? 'rgba(7, 89, 133, 1)' : 'rgba(6, 95, 70, 1)',
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
                  <div className="grid grid-cols-6 gap-3">
                    {ACADEMY_STRUCTURE[2]?.chapters?.map((chapter) => {
                      const num = chapter.id;
                      return (
                        <a
                          key={num}
                          href={`?tab=academy_chonghua_${num}`}
                          className="nav-pill nav-pill--tier2 justify-start items-center rounded-lg px-3 py-2.5 text-base font-base transition-colors bg-sky-50 text-sky-950 hover:bg-sky-100 shadow-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            if (!chonghuaUnlocked) {
                              onUnlockRequest?.('chonghua');
                              return;
                            }
                            goToTab(`academy_chonghua_${num}`);
                            setChonghuaNavOpen(false);
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
                </div>
              )}

              {/* 顯示大觀書院內容 */}
              {academyNavOpen && ACADEMY_STRUCTURE.filter(cat => cat.key !== 'chonghua').map((cat) => (
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
                          className={`nav-pill nav-pill--tier2 justify-start items-center rounded-lg px-3 py-2.5 text-base font-base transition-colors ${active
                            ? 'bg-amber-50 text-amber-950 hover:bg-amber-100 shadow-sm'
                            : 'bg-white/60 hover:bg-white text-stone-800 hover:text-stone-900'
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
                            <span className="font-bold text-[18px] block shrink-0">{renderFlipLabel(num)}</span>
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
          <div className="xl:hidden tool-surface tool-surface--strong">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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

              {/* Tier 1 - All items at top level */}
              <div className="space-y-2 px-2">
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
                  onClick={() => goToTab('tea_talk')}
                  className={`px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${activeTab === 'tea_talk' ? 'tool-item--active' : ''
                    }`}
                >
                  {String(i18n.t('nav.tea_talk')).replace(/\s*\n\s*/g, '')}
                </button>
                <button
                  type="button"
                  onClick={() => goToTab('sensory')}
                  className={`nav-flip-trigger px-3 py-2 rounded-xl text-base font-semibold w-full text-left transition-colors tool-item ${activeTab === 'sensory' ? 'tool-item--active' : ''
                    }`}
                >
                  {renderFlipLabel(String(i18n.t('nav.sensory')).replace(/\s*\n\s*/g, ''))}
                </button>

                {/* All Atlas items */}
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
              </div>

              {/* Academy (Mobile) */}
              {academyMenuHidden ? null : (
                <div className="mt-2 px-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!daguanUnlocked) {
                        onUnlockRequest?.('daguan');
                        return;
                      }
                      setAcademyNavOpen((v) => !v);
                    }}
                    className="nav-flip-trigger w-full inline-flex items-center justify-between rounded-xl px-3 py-2 text-sm font-extrabold tool-item"
                    aria-expanded={academyNavOpen}
                  >
                    {renderFlipLabel(academyLabel)}
                    <ChevronRight
                      size={16}
                      className={`text-emerald-800 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${academyNavOpen ? 'rotate-90' : '-rotate-90'}`}
                    />
                  </button>

                  <AccordionPanel open={academyNavOpen} className="mt-2" disablePointerEventsWhenClosed>
                    <div className="space-y-2 pl-2 border-l border-stone-200">
                      {ACADEMY_STRUCTURE.filter(cat => cat.key !== 'chonghua').map((cat) => {
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
                                          else if (parseInt(num, 10) === 5) goToTab('academy_xueya_05');
                                          else if (parseInt(num, 10) === 6) goToTab('academy_xueya_06');
                                          else if (parseInt(num, 10) === 7) goToTab('academy_xueya_07');
                                          else if (parseInt(num, 10) === 8) goToTab('academy_xueya_08');
                                          else if (parseInt(num, 10) === 9) goToTab('academy_xueya_09');
                                          else if (parseInt(num, 10) === 11) goToTab('academy_xueya_11');
                                          else goToTab('academy_coming_soon');
                                        } else if (cat.key === 'chonghua') {
                                          const chapterNum = parseInt(num, 10);
                                          if (chapterNum >= 1 && chapterNum <= 33) {
                                            goToTab(`academy_chonghua_${num}`);
                                          } else {
                                            goToTab('academy_coming_soon');
                                          }
                                        } else {
                                          goToTab('academy_coming_soon');
                                        }
                                        setMobileMenuOpen(false);
                                      }}
                                    >
                                      <div className="font-bold text-lg">{renderFlipLabel(`?${num}?`)}</div>
                                      {chapter.title && (<div className="truncate opacity-75 mt-0.5 text-sm">{renderFlipLabel(chapter.title)}</div>)}
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

              {/* Chonghua (Mobile) */}
              {academyMenuHidden ? null : (
                <div className="mt-2 px-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!chonghuaUnlocked) {
                      onUnlockRequest?.('chonghua');
                      return;
                    }
                    setChonghuaMobileOpen((v) => !v);
                  }}
                  className="nav-flip-trigger w-full inline-flex items-center justify-between rounded-xl px-3 py-2 text-sm font-extrabold tool-item"
                  aria-expanded={chonghuaMobileOpen}
                >
                  {renderFlipLabel(chonghuaLabel)}
                  <ChevronRight
                    size={16}
                    className={`text-sky-800 transition-transform duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${chonghuaMobileOpen ? 'rotate-90' : '-rotate-90'}`}
                  />
                </button>

                <AccordionPanel open={chonghuaMobileOpen} className="mt-2" disablePointerEventsWhenClosed>
                  <div className="grid grid-cols-3 gap-2 p-2">
                    {ACADEMY_STRUCTURE[2]?.chapters?.map((chapter) => (
                      <a
                        key={chapter.id}
                        href={`?tab=academy_chonghua_${chapter.id}`}
                        className="nav-flip-trigger text-left rounded-md py-3 px-3 text-sm font-medium transition-all bg-sky-50 text-sky-800 shadow-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          if (!chonghuaUnlocked) {
                            onUnlockRequest?.('chonghua');
                            return;
                          }
                          goToTab(`academy_chonghua_${chapter.id}`);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <div className="font-bold text-lg">{renderFlipLabel(chapter.title)}</div>
                      </a>
                    ))}
                  </div>
                </AccordionPanel>
              </div>
              )}

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


