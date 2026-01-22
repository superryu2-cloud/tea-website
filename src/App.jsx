import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Leaf, Droplets, Clock, Coffee, BookOpen, Search, Menu, X, ChevronRight, ChevronDown, Wind, Flame, Tag, Layers, Map, FlaskConical, ArrowRight, Mountain, Compass, Sprout, Microscope, Scale, Table, Info, Star, Feather, Scroll, Thermometer, Sun, Snowflake, CloudRain, Wheat, Cloud, User, AlertTriangle, TrendingUp, History, Book, PenTool, Globe, Bug, Sparkles, ShieldAlert, CheckCircle, Palette, Layout, Calendar, RefreshCw, ArrowUp, Filter, Play, Pause, RotateCcw, Bot, HelpCircle, Flower } from 'lucide-react';
import teaData from './data/teaData';
import cultivars from './data/cultivars';
import solarTerms from './data/solarTerms';
import timelineData from './data/timelineData';
import featuredTeaMenu from './data/featuredTeaMenu';
import sensoryQuestionBank from './data/sensoryQuestionBank.js';
import scienceChapters from './content/scienceChapters';
import createHistoryData from './content/historyData';
import TieGuanyinContent from './content/featured/tieguanyin';
import DongDingContent from './content/featured/dongding';
import RedOolongContent from './content/featured/redoolong';
import OrientalBeautyContent from './content/featured/orientalbeauty';
import HoneyAromaBlackTeaContent from './content/featured/honeyblack';
import WenshanPouchongContent from './content/featured/wenshan';
import BiluochunGreenTeaContent from './content/featured/biluochun';
import FeaturedTeaOverview from './content/featured/FeaturedTeaOverview';
import GaoshanOolongContent from './content/featured/gaoshanoolong';
import SmallLeafBlackTeaContent from './content/featured/black_smallleaf';
import LargeLeafBlackTeaContent from './content/featured/black_largeleaf';
import LongjingTeaArticle from './content/examples/LongjingTeaArticle';
import ChenChuanTeaClassification from './content/varieties/ChenChuanTeaClassification';
import PuerhEncyclopedia from './content/varieties/PuerhEncyclopedia';
import RedTeaGlobalStory from './content/varieties/RedTeaGlobalStory';
import GreenTeaHistory from './content/varieties/GreenTeaHistory';
import YellowTeaHistory from './content/varieties/YellowTeaHistory';
import WhiteTeaHistory from './content/varieties/WhiteTeaHistory';
import BlackTeaHistory from './content/varieties/BlackTeaHistory';
import SixTeaTypesNotes from './content/varieties/SixTeaTypesNotes';
import TeaEncyclopediaOverview from './content/varieties/TeaEncyclopediaOverview';
import OolongRegions from './content/varieties/OolongRegions';
import WhiteTeaRegions from './content/varieties/WhiteTeaRegions';
import OolongTeaVerticalTimeline from './components/sections/OolongTeaVerticalTimeline';
import TaiwanCultivarDiversity from './content/cultivars/TaiwanCultivarDiversity';
import TaiwanTeaCultivars from './content/cultivars/TaiwanTeaCultivars';
import CultivarMysterySection from './content/cultivars/CultivarMysterySection';
import TeaReferenceNotes from './content/references/TeaReferenceNotes';
import SensoryQuestionBank from './content/sensory/SensoryQuestionBank';
import TeaTalkColorSection from './content/teaTalk/TeaTalkColorSection';
import TeaArtSpirit from './content/ceremony/TeaArtSpirit';
import SolarTermsPrimer from './content/seasons/SolarTermsPrimer';
import FourSeasonsSection from './content/seasons/FourSeasonsSection';
import ZishaExhibit from './content/zisha/ZishaExhibit';
import { UI_FLAGS } from './config/uiFlags';
import { CHEN_CHUAN_TOC, CULTIVARS_SECTIONS, CULTIVARS_TOC, NAV_ITEMS, OOLONG_TOC, PUERH_TOC, RED_TOC, SCIENCE_TOC, SEASONS_SECTIONS, TEA_REFERENCE_TOC, VARIETIES_KINDS } from './config/navigation';
import useI18n from './i18n/useI18n';
import SectionCard from './components/SectionCard';
import PasswordModal from './components/PasswordModal';
import SiteNavigation from './components/SiteNavigation';
import ChapterSidebar from './components/ChapterSidebar';
import CollapsibleSidebar from './components/CollapsibleSidebar';
import HorizontalNavigation from './components/HorizontalNavigation';
import AcademyRouter, { getImplementedChapterIds } from './components/academy/AcademyRouter';
import PinnedChapterSidebar from './components/PinnedChapterSidebar';
import AtlasDockLayout from './components/AtlasDockLayout';
import useAnchoredSubnav from './hooks/useAnchoredSubnav';
import AcademySection from './components/academy/AcademySection';
import AcademyContentBlock from './components/academy/AcademyContentBlock';
import AcademyHighlightBox from './components/academy/AcademyHighlightBox';
import AcademyChapter from './components/academy/AcademyChapter';
import HeroSection from './components/sections/HeroSection';
import JourneySection from './components/sections/JourneySection';
import ScienceSectionLegacy from './components/sections/ScienceSectionLegacy';
import AromaticsChapter from './content/scienceChapters/AromaticsChapter';
import TeaProcessCraftChapter from './content/scienceChapters/TeaProcessCraftChapter';
import ConstituentsChapter from './content/scienceChapters/ConstituentsChapter';
import PuerhSection from './sections/PuerhSection';
import SeasonsSection from './sections/SeasonsSection';
import BrewingGuideSection from './sections/BrewingGuideSection';
import ResizableDivider from './components/ResizableDivider';

const VARIETIES_CONTEXT_BAR_OFFSET_IDS = ['varieties-context-bar'];
const WHITE_TOC_EXTENDED = [
  { href: '#white-history', label: '白茶歷史' },
  { href: '#white-fujian', label: '福建' },
  { href: '#white-yunnan', label: '雲南' },
];

const TeaWebsite = () => {
  const i18n = useI18n();
  const [activeTab, setActiveTab] = useState('journey');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atlasNavOpen, setAtlasNavOpen] = useState(true);
  const [selectedTeaForBrewing, setSelectedTeaForBrewing] = useState(0);
  const [historyTab, setHistoryTab] = useState('taiwanTeaIndustry');
  const [scienceRoom, setScienceRoom] = useState('constituents');
  const [varietiesKind, setVarietiesKind] = useState('overview');
  const [chenChuanChapterHref, setChenChuanChapterHref] = useState('#cc-all');
  const [teachingChapterHref, setTeachingChapterHref] = useState('#ref-all');
  const [puerhChapterHref, setPuerhChapterHref] = useState('#puerh-1');
  const [oolongRegionHref, setOolongRegionHref] = useState(null);
  const [whiteRegionHref, setWhiteRegionHref] = useState('#white-history');
  const [sensoryTopic, setSensoryTopic] = useState(null);
  const [redTeaHref, setRedTeaHref] = useState('#red-global');
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
  const [pendingOffsetScrollTarget, setPendingOffsetScrollTarget] = useState(null);
  const [siteNavHeightPx, setSiteNavHeightPx] = useState(88);
  const chenChuanScrollOffsetPx = siteNavHeightPx + 20;

  const cultivarsSubnav = useAnchoredSubnav({
    enabled: activeTab === 'cultivars',
    items: CULTIVARS_TOC,
    fallbackNavHeightPx: siteNavHeightPx,
    enableScrollSpy: false,
  });

  const selectChenChuanChapter = (href) => {
    const normalized = String(href ?? '');
    if (normalized !== '#cc-all' && !normalized.startsWith('#cc-')) return;
    setChenChuanChapterHref(normalized);

    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const nextHash = normalized === '#cc-all' ? '' : normalized;
    window.history.replaceState(null, '', `${url.pathname}${url.search}${nextHash}`);

    window.requestAnimationFrame(() => {
      const contextBar = document.getElementById('varieties-context-bar');
      const contextBarHeight = contextBar ? contextBar.getBoundingClientRect().height : 0;
      const offset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + 16);
      const targetId = normalized === '#cc-all' ? 'varieties-kind-header' : normalized.slice(1);
      const el = document.getElementById(targetId) ?? document.getElementById('varieties-kind-header');
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  };

  const selectPuerhChapter = (href) => {
    const normalized = String(href ?? '');
    if (!normalized.startsWith('#puerh-')) return;
    setPuerhChapterHref(normalized);
    if (typeof window !== 'undefined') {
      const nextUrl = `${window.location.pathname}${window.location.search}${normalized}`;
      window.history.replaceState(null, '', nextUrl);
      setPendingOffsetScrollTarget(normalized.slice(1));
    }
  };

  // Dynamically calculate navigation height to account for two-row layout
  useEffect(() => {
    const updateNavHeight = () => {
      const navEl = document.getElementById('site-nav');
      if (navEl) {
        const height = navEl.getBoundingClientRect().height;
        setSiteNavHeightPx(Math.round(height));
      }
    };

    // Initial calculation
    updateNavHeight();

    // Recalculate on window resize
    window.addEventListener('resize', updateNavHeight);

    // Recalculate after a short delay to ensure layout is complete
    const timer = setTimeout(updateNavHeight, 100);

    return () => {
      window.removeEventListener('resize', updateNavHeight);
      clearTimeout(timer);
    };
  }, [activeTab]); // Recalculate when tab changes

  const selectOolongRegion = (href) => {
    const normalized = String(href ?? '');
    if (!normalized.startsWith('#oolong-')) return;
    setOolongRegionHref(normalized);
    if (typeof window !== 'undefined') {
      const nextUrl = `${window.location.pathname}${window.location.search}${normalized}`;
      window.history.replaceState(null, '', nextUrl);
      window.requestAnimationFrame(() => {
        const contextBar = document.getElementById('varieties-context-bar');
        const contextBarHeight = contextBar ? contextBar.getBoundingClientRect().height : 0;
        const offset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + 16);
        const targetId = normalized.slice(1);
        const el = document.getElementById(targetId);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      });
    }
  };

  const selectRedTeaTopic = (href) => {
    const normalized = String(href ?? '');
    if (!normalized.startsWith('#red-')) return;
    setRedTeaHref(normalized);
    if (typeof window !== 'undefined') {
      const nextUrl = `${window.location.pathname}${window.location.search}${normalized}`;
      window.history.replaceState(null, '', nextUrl);
      window.requestAnimationFrame(() => {
        const contextBar = document.getElementById('varieties-context-bar');
        const contextBarHeight = contextBar ? contextBar.getBoundingClientRect().height : 0;
        const offset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + 16);
        const targetId = normalized.slice(1);
        const el = document.getElementById(targetId);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      });
    }
  };

  const selectWhiteRegion = (href) => {
    const normalized = String(href ?? '');
    if (!normalized.startsWith('#white-')) return;
    setWhiteRegionHref(normalized);
    if (typeof window !== 'undefined') {
      const nextUrl = `${window.location.pathname}${window.location.search}${normalized}`;
      window.history.replaceState(null, '', nextUrl);
      window.requestAnimationFrame(() => {
        const contextBar = document.getElementById('varieties-context-bar');
        const contextBarHeight = contextBar ? contextBar.getBoundingClientRect().height : 0;
        const offset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + 16);
        const targetId = normalized.slice(1);
        const el = document.getElementById(targetId);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      });
    }
  };



  const selectScienceTeachingChapter = (href) => {
    const normalized = String(href ?? '');
    if (normalized !== '#ref-all' && !normalized.startsWith('#ref-')) return;
    setTeachingChapterHref(normalized);

    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const nextHash = normalized === '#ref-all' ? '' : normalized;
    window.history.replaceState(null, '', `${url.pathname}${url.search}${nextHash}`);
    setPendingOffsetScrollTarget(normalized === '#ref-all' ? 'science-teaching' : normalized.slice(1));
  };

  const goToVarietiesKind = (kindKey) => {
    setActiveTab('varieties');
    setAtlasNavOpen(true);
    setMobileMenuOpen(false);
    setVarietiesKind(kindKey);
    if (kindKey === 'ref_chenchuan') setChenChuanChapterHref('#cc-all');
    if (kindKey === 'white') setWhiteRegionHref('#white-history');
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToTeaExhibit = (tea) => {
    if (!tea || typeof tea !== 'object') return;
    if (tea.id === 6) {
      goToTab('puerh');
      return;
    }

    const kindByTeaId = {
      0: 'green',
      1: 'white',
      2: 'yellow',
      3: 'oolong',
      4: 'red',
      5: 'black',
    };

    const kindKey = kindByTeaId[tea.id];
    if (!kindKey) return;
    goToVarietiesKind(kindKey);
  };

  const goToTab = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (tab === 'sensory' || tab === 'tea_talk') setAtlasNavOpen(false);
    else if (tab !== 'journey') setAtlasNavOpen(true);
    if (tab === 'history') setHistoryTab('taiwanTeaIndustry');
    if (tab === 'science') setScienceRoom('constituents');
    if (tab === 'varieties') {
      setVarietiesKind('overview');
    }
    if (tab === 'puerh') {
      setPuerhChapterHref('#puerh-1');
    }
    if (tab === 'science') {
      setTeachingChapterHref('#ref-all');
    }
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const allowed = new Set([...NAV_ITEMS, 'academy_zhiya_02', 'academy_zhiya_03', 'academy_zhiya_04', 'academy_zhiya_05', 'academy_zhiya_06', 'academy_zhiya_07', 'academy_zhiya_09', 'academy_zhiya_10', 'academy_zhiya_14', 'academy_xueya_01', 'academy_xueya_03', 'academy_xueya_05', 'academy_xueya_06',
      'academy_xueya_07',
      'academy_xueya_08',
      'academy_xueya_09',
      'academy_xueya_11',
      'academy_coming_soon',
    ]);
    const allowedRooms = new Set(SCIENCE_TOC.map((item) => item.key).filter(Boolean));
    const allowedVarietiesKinds = new Set(VARIETIES_KINDS.map((k) => k.key));
    const allowedChenChuanHrefs = new Set(CHEN_CHUAN_TOC.map((item) => item.href));
    const allowedTeachingHrefs = new Set(TEA_REFERENCE_TOC.map((item) => item.href));
    const allowedPuerhHrefs = new Set(PUERH_TOC.map((item) => item.href));
    const allowedOolongHrefs = new Set(OOLONG_TOC.map((item) => item.href));
    const allowedWhiteHrefs = new Set(WHITE_TOC_EXTENDED.map((item) => item.href));

    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const nextTab = params.get('tab');
      const nextRoom = params.get('room');
      const nextKind = params.get('kind');
      const nextSection = params.get('section');
      const path = window.location.pathname || '';
      const academyMatch = path.match(/^\/academy\/(xueya|zhiya)\/(\d{1,2})\/?$/);

      if (!nextTab && academyMatch) {
        const academyKey = academyMatch[1];
        const numRaw = academyMatch[2];
        const num = numRaw.padStart(2, '0');
        const academyTab = `academy_${academyKey}_${num}`;
        if (allowed.has(academyTab)) {
          setActiveTab(academyTab);
          return;
        }
      }

      if (nextTab === 'chemistry_deep_dive') {
        setActiveTab('science');
        setScienceRoom('oxidation');
        return;
      }

      if (nextTab === 'oolong_detail') {
        setActiveTab('varieties');
        setVarietiesKind('oolong');
        setOolongRegionHref(null);
        return;
      }

      if (nextTab === 'puerh') {
        setActiveTab('puerh');
        const hash = window.location.hash;
        if (allowedPuerhHrefs.has(hash)) setPuerhChapterHref(hash);
        return;
      }

      if (nextTab && allowed.has(nextTab)) setActiveTab(nextTab);

      if (nextTab === 'history' && nextSection) {
        const allowedSections = new Set(['chineseTeaHistory', 'taiwanTeaIndustry', 'taiwanEvents']);
        if (allowedSections.has(nextSection)) {
          setHistoryTab(nextSection);
        }
      }

      if (nextTab === 'science' && nextRoom && allowedRooms.has(nextRoom)) {
        setScienceRoom(nextRoom);
        if (nextRoom === 'teaching') {
          const hash = window.location.hash;
          if (allowedTeachingHrefs.has(hash)) setTeachingChapterHref(hash);
          else setTeachingChapterHref('#ref-all');
        }
        if (nextRoom.startsWith('teaching-')) {
          const nextHref = `#ref-${nextRoom.replace('teaching-', '')}`;
          if (allowedTeachingHrefs.has(nextHref)) setTeachingChapterHref(nextHref);
        }
      }
      if (nextTab === 'varieties') {
        if (nextKind === 'puerh') {
          setActiveTab('puerh');
          const hash = window.location.hash;
          if (allowedPuerhHrefs.has(hash)) setPuerhChapterHref(hash);
          return;
        }
        if (nextKind && allowedVarietiesKinds.has(nextKind)) setVarietiesKind(nextKind);
        const nextSub = params.get('sub');
        if (nextSub === 'qing_lineage') setOolongRegionHref(null);
        if (nextKind === 'ref_chenchuan') {
          const hash = window.location.hash;
          if (allowedChenChuanHrefs.has(hash)) setChenChuanChapterHref(hash);
          else setChenChuanChapterHref('#cc-all');
        }
        if (nextKind === 'oolong') {
          const hash = window.location.hash;
          if (allowedOolongHrefs.has(hash)) setOolongRegionHref(hash);
        }
        if (nextKind === 'white') {
          const hash = window.location.hash;
          if (allowedWhiteHrefs.has(hash)) setWhiteRegionHref(hash);
          else setWhiteRegionHref('#white-history');
        }
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    let dirty = false;

    if (params.get('tab') !== activeTab) {
      params.set('tab', activeTab);
      dirty = true;
    }

    if (activeTab === 'science') {
      if (params.get('room') !== scienceRoom) {
        params.set('room', scienceRoom);
        dirty = true;
      }
    } else if (params.has('room')) {
      params.delete('room');
      dirty = true;
    }

    if (activeTab === 'varieties') {
      if (params.get('kind') !== varietiesKind) {
        params.set('kind', varietiesKind);
        dirty = true;
      }
    } else if (params.has('kind')) {
      params.delete('kind');
      dirty = true;
    }

    if (params.has('sub')) {
      params.delete('sub');
      dirty = true;
    }

    if (dirty) {
      const nextUrl = `${url.pathname}?${params.toString()}${url.hash}`;
      window.history.replaceState(null, '', nextUrl);
    }
  }, [activeTab, scienceRoom, varietiesKind]);

  useEffect(() => {
    if (!pendingScrollTarget) return;

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(pendingScrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPendingScrollTarget(null);
        return;
      }

      attempts += 1;
      if (attempts > 30) {
        setPendingScrollTarget(null);
        return;
      }
      window.setTimeout(tryScroll, 50);
    };

    tryScroll();
  }, [pendingScrollTarget, activeTab, varietiesKind]);

  useEffect(() => {
    if (!pendingOffsetScrollTarget) return;

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(pendingOffsetScrollTarget);
      if (el) {
        const contextBar = document.getElementById('varieties-context-bar');
        const contextBarHeight = contextBar ? contextBar.getBoundingClientRect().height : 0;
        const offset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + 16);
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        setPendingOffsetScrollTarget(null);
        return;
      }

      attempts += 1;
      if (attempts > 30) {
        setPendingOffsetScrollTarget(null);
        return;
      }
      window.setTimeout(tryScroll, 50);
    };

    tryScroll();
  }, [pendingOffsetScrollTarget, siteNavHeightPx]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const siteNav = document.getElementById('site-nav');
    if (!siteNav) return;

    const measure = () => setSiteNavHeightPx(Math.max(0, Math.round(siteNav.getBoundingClientRect().height)));
    measure();

    const ro = window.ResizeObserver ? new ResizeObserver(measure) : null;
    ro?.observe(siteNav);
    window.addEventListener('resize', measure);

    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    document.title = `${i18n.t('site.title')} · ${i18n.t(`nav.${activeTab}`)}`;
  }, [activeTab, i18n]);



  const ScienceSection = () => {
    const notesMode = UI_FLAGS.notesMode;
    const [showScienceAtlas, setShowScienceAtlas] = useState(!notesMode);
    const scienceSidebarItems = SCIENCE_TOC.map((item) => ({ key: item.key, label: item.label }));
    const scienceSubItemsByKey = useMemo(
      () => ({
        oxidation: [
          { href: '#chapter1', label: '1.0 核心定義' },
          { href: '#chapter2', label: '2.0 微生物發酵' },
          { href: '#chapter3', label: '3.0 酶促氧化' },
          { href: '#chapter4', label: '4.0 化學轉化' },
          { href: '#chapter5', label: '5.0 關鍵控制點' },
          { href: '#chapter6', label: '6.0 實例分析' },
          { href: '#chapter7', label: '7.0 結論' },
        ],
        teaching: [{ href: '#ref-all', label: '全部章節' }, ...TEA_REFERENCE_TOC],
      }),
      [],
    );
    const isScienceTeachingRoom = scienceRoom === 'teaching' || scienceRoom.startsWith('teaching-');
    const scienceTeachingActiveHref = scienceRoom.startsWith('teaching-')
      ? `#ref-${scienceRoom.replace('teaching-', '')}`
      : teachingChapterHref;

    // Oxidation chapter navigation
    const [oxidationChapterHref, setOxidationChapterHref] = useState('#chapter1');
    const isScienceOxidationRoom = scienceRoom === 'oxidation';

    return (
      <div className="museum-page">
        <div className="w-full">
          {notesMode && (
            <div className="mb-10 museum-panel p-7 md:p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="min-w-0">
                  <div className="museum-label">
                    <Microscope size={14} className="opacity-80" />
                    TEA HOUSE · NOTES
                  </div>
                  <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶葉科學｜筆記卡</h2>
                  <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                    科學不是背名詞，而是把「製程控制」連回「杯中風味」。先用筆記卡建立三大核心：氧化／烘焙／內含物；需要完整細節時再展開百科。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowScienceAtlas(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                  >
                    展開百科
                    <ChevronRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowScienceAtlas(true);
                      setScienceRoom('oxidation');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                  >
                    直接看氧化
                    <ChevronRight size={16} className="text-emerald-700" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 1</div>
                  <div className="mt-1 font-bold text-stone-900">氧化（發酵）</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">決定茶湯色澤、花果蜜香與回甘走向。</div>
                </div>
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 2</div>
                  <div className="mt-1 font-bold text-stone-900">烘焙（火功）</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">以熱重排香氣與口感：熟香、厚度、耐泡與耐放。</div>
                </div>
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 3</div>
                  <div className="mt-1 font-bold text-stone-900">內含物</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">茶多酚、胺基酸、咖啡因是「反應原料」，也就是風味底盤。</div>
                </div>
              </div>
            </div>
          )}

          {!notesMode || showScienceAtlas ? (
            <>
              <AtlasDockLayout
                topOffsetPx={siteNavHeightPx + 16}
                sidebar={
                  <ChapterSidebar
                    title="章節"
                    items={scienceSidebarItems}
                    activeKey={scienceRoom}
                    onSelectKey={(key) => {
                      setScienceRoom(key);
                      if (key === 'teaching') return selectScienceTeachingChapter('#ref-all');
                      if (key.startsWith('teaching-')) return selectScienceTeachingChapter(`#ref-${key.replace('teaching-', '')}`);
                      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    subItemsByKey={scienceSubItemsByKey}
                    activeSubHref={
                      scienceRoom === 'teaching' ? teachingChapterHref :
                        scienceRoom === 'oxidation' ? oxidationChapterHref :
                          null
                    }
                    onSelectSubHref={(href) => {
                      if (scienceRoom === 'teaching') {
                        selectScienceTeachingChapter(href);
                      } else if (scienceRoom === 'oxidation') {
                        setOxidationChapterHref(href);
                      }
                    }}
                    topOffsetPx={siteNavHeightPx + 16}
                    pinMode="static"
                  />
                }
              >
                <div className="space-y-8 min-w-0">
                  <main className="space-y-8">
                    {isScienceTeachingRoom && (
                      <div id="science-teaching" className="scroll-mt-28">
                        <TeaReferenceNotes activeHref={scienceTeachingActiveHref === '#ref-all' ? null : scienceTeachingActiveHref} />
                      </div>
                    )}
                    {scienceRoom === 'oxidation' && (
                      <div className="museum-frame museum-paper overflow-hidden">
                        <div className="px-6 py-6 md:px-8 md:py-7 border-b border-stone-200/70">
                          <div className="museum-label">
                            <RefreshCw size={14} className="opacity-80" />
                            EXHIBIT ROOM
                          </div>
                          <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Oxidation' : '氧化'}</h3>
                          <p className="mt-2 text-stone-700 leading-relaxed">
                            {i18n.lang === 'en'
                              ? '“Flavor chemistry” in tea is largely oxidation chemistry. This room explains enzymes, substrates, process control, and why different tea types taste so different.'
                              : '茶的「風味化學」核心多與氧化作用相關。本展廳以製程控制視角，說明酵素、底物、環境與風味差異。'}
                          </p>
                        </div>
                        <div className="px-2 py-2 md:px-4 md:py-4">
                          <TeaChemistryDeepDive embedded activeHref={oxidationChapterHref} />
                        </div>
                      </div>
                    )}

                    {scienceRoom === 'roasting' && (
                      <div className="museum-frame museum-paper p-6 md:p-8">
                        <div className="museum-label">
                          <Flame size={14} className="opacity-80" />
                          EXHIBIT ROOM
                        </div>
                        <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Roasting' : '烘焙'}</h3>
                        <p className="mt-3 text-stone-700 leading-relaxed">
                          {i18n.lang === 'en'
                            ? 'Roasting is a heat-driven reorganization of aroma and texture. The goal is not “burning”, but controlled transformation and stabilization.'
                            : '烘焙不是「烤焦」，而是以熱為主導的風味重排與穩定化：香氣更深、口感更圓、保存更耐放。'}
                        </p>

                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                          <div className="museum-card p-5 bg-white/80">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">HEAT</div>
                            <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Heat Reactions' : '熱驅動反應'}</div>
                            <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                              {i18n.lang === 'en'
                                ? 'Moisture removal, aroma volatilization, Maillard reactions, and polymerization reshape flavor.'
                                : '脫水、揮發、梅納反應與聚合作用共同推動「熟香」與口感厚度。'}
                            </div>
                          </div>
                          <div className="museum-card p-5 bg-white/80">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">CONTROL</div>
                            <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Craft Controls' : '火功控制'}</div>
                            <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                              {i18n.lang === 'en'
                                ? 'Temperature, duration, airflow, and thickness are the main levers craftsmen tune.'
                                : '溫度、時間、氣流、茶層厚度是師傅調整的四個主要旋鈕。'}
                            </div>
                          </div>
                          <div className="museum-card p-5 bg-white/80">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">OUTCOME</div>
                            <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Flavor Outcome' : '風味結果'}</div>
                            <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                              {i18n.lang === 'en'
                                ? 'From floral to nutty/toasty; sharpness softens, sweetness and body become rounder.'
                                : '香氣從花香走向果乾、堅果、焙火；苦澀趨緩，甜感與稠度更圓。'}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 grid lg:grid-cols-12 gap-4">
                          <div className="lg:col-span-7 museum-card p-6 bg-white/80">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">{i18n.lang === 'en' ? 'PROCESS WALKTHROUGH' : '工序導覽'}</div>
                            <h4 className="mt-2 text-lg font-extrabold text-stone-900">{i18n.lang === 'en' ? 'A museum-style timeline of roasting' : '烘焙流程（展場時間軸）'}</h4>
                            <ol className="mt-4 space-y-3 text-sm text-stone-700">
                              <li className="flex gap-3">
                                <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">1</span>
                                <div>
                                  <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Warm-up & moisture balancing' : '預熱與回潤水分平衡'}</div>
                                  <div className="text-stone-600 leading-relaxed">
                                    {i18n.lang === 'en'
                                      ? 'Gentle heat brings leaves to a stable state before stronger roasting. Helps avoid “outside dry, inside raw”.'
                                      : '先用溫和熱量讓茶葉進入穩定狀態，避免「外乾內生」；也讓後續香氣釋放更一致。'}
                                  </div>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">2</span>
                                <div>
                                  <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Primary roast (set the style)' : '主焙（定風格）'}</div>
                                  <div className="text-stone-600 leading-relaxed">
                                    {i18n.lang === 'en'
                                      ? 'Roast level is decided here: light/medium/heavy. Airflow and batch thickness matter as much as temperature.'
                                      : '在這一步決定輕/中/重焙路線；氣流與茶層厚度常常比「溫度數字」更關鍵。'}
                                  </div>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">3</span>
                                <div>
                                  <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Resting (aroma integration)' : '退火靜置（香氣融合）'}</div>
                                  <div className="text-stone-600 leading-relaxed">
                                    {i18n.lang === 'en'
                                      ? 'After heat, aroma can feel “sharp”. Resting lets volatile notes settle and the cup become rounder.'
                                      : '剛烘完的茶香可能偏尖、火氣重；靜置能讓揮發性物質回落，茶湯更圓。'}
                                  </div>
                                </div>
                              </li>
                              <li className="flex gap-3">
                                <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">4</span>
                                <div>
                                  <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Re-roast (optional, layer building)' : '回焙（選配：堆層次）'}</div>
                                  <div className="text-stone-600 leading-relaxed">
                                    {i18n.lang === 'en'
                                      ? 'Some styles use multiple gentle passes. The goal is depth without smoke or bitterness spikes.'
                                      : '部分風格採多次溫柔回焙；目標是「更深」而不是「更焦」，避免煙味與苦感突刺。'}
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </div>

                          <div className="lg:col-span-5 museum-card p-6 bg-white/80">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">{i18n.lang === 'en' ? 'OBSERVATION POINTS' : '觀察要點'}</div>
                            <h4 className="mt-2 text-lg font-extrabold text-stone-900">{i18n.lang === 'en' ? 'What to look for in the cup' : '用茶湯判斷烘焙'}</h4>
                            <ul className="mt-4 space-y-3 text-sm text-stone-700">
                              <li className="flex items-start gap-2">
                                <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                                <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Aroma trajectory:' : '香氣走向：'}</span> {i18n.lang === 'en' ? 'floral → ripe fruit/nutty → cocoa/wood' : '花香 → 熟果/堅果 → 可可/木質'}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                                <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Texture:' : '口感：'}</span> {i18n.lang === 'en' ? 'rounder body, softer edges, longer finish' : '稠度更圓、邊緣更柔、尾韻更長'}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                                <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Fire notes:' : '火氣：'}</span> {i18n.lang === 'en' ? 'freshly roasted tea can feel “hot”; resting reduces harshness' : '新焙茶常有「火氣」，靜置可讓刺激感下降'}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                                <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Cleanliness:' : '乾淨度：'}</span> {i18n.lang === 'en' ? 'avoid smoke, burnt, or dusty flavors' : '避免煙味、焦苦、粉塵味'}</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                          <details className="museum-card bg-white/80 p-5 group">
                            <summary className="cursor-pointer list-none flex items-center justify-between font-extrabold text-stone-900">
                              <span>{i18n.lang === 'en' ? 'What changes chemically?' : '化學層面：發生了什麼？'}</span>
                              <span className="text-stone-500 group-open:rotate-90 transition-transform"><ChevronRight size={18} /></span>
                            </summary>
                            <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                              <p>{i18n.lang === 'en'
                                ? 'Roasting shifts aroma by heat: some volatiles evaporate, others form via Maillard reactions (amino acids + sugars), Strecker degradation, and gradual polymerization.'
                                : '烘焙以「熱」推動風味轉換：部分揮發物散出；也會產生梅納反應（胺基酸＋糖）、史崔克降解與聚合作用，讓香氣更成熟、口感更厚。'}</p>
                              <p>{i18n.lang === 'en'
                                ? 'Pigment and “green” notes can be reduced; roast can also stabilize tea for storage by lowering moisture and deactivating remaining enzymes.'
                                : '葉綠感與部分青味會下降；同時透過降低含水與抑制殘留酵素活性，提升保存穩定性。'}</p>
                            </div>
                          </details>

                          <details className="museum-card bg-white/80 p-5 group">
                            <summary className="cursor-pointer list-none flex items-center justify-between font-extrabold text-stone-900">
                              <span>{i18n.lang === 'en' ? 'Common roast issues (and how they taste)' : '常見烘焙問題（味覺辨識）'}</span>
                              <span className="text-stone-500 group-open:rotate-90 transition-transform"><ChevronRight size={18} /></span>
                            </summary>
                            <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                              <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Burnt/char:' : '焦苦/炭味：'}</span> {i18n.lang === 'en' ? 'sharp bitterness, ashy finish, aroma feels flat' : '苦感尖銳、尾段像灰；香氣扁平。'}</p>
                              <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Smoke:' : '煙味：'}</span> {i18n.lang === 'en' ? 'smoky nose that covers the tea’s origin character' : '煙味蓋過茶本身的產區/品種特色。'}</p>
                              <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Outside dry, inside raw:' : '外乾內生：'}</span> {i18n.lang === 'en' ? 'hollow cup, rough edges, unstable aftertaste' : '茶湯空、邊緣粗、尾韻不穩。'}</p>
                              <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Over-resting/stale:' : '陳放走味：'}</span> {i18n.lang === 'en' ? 'aroma dulls, sweetness fades, paper/closet notes appear' : '香氣鈍、甜感退，出現紙味/櫥味。'}</p>
                            </div>
                          </details>
                        </div>

                        <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 shadow-sm bg-white/70">
                          <table className="min-w-full divide-y divide-stone-200 text-sm">
                            <thead>
                              <tr className="bg-stone-100">
                                <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">LEVEL</th>
                                <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">AROMA</th>
                                <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">MOUTHFEEL</th>
                                <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">COMMON IN</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                              <tr className="hover:bg-stone-50/60">
                                <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Light' : '輕焙'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'Floral, fresh, honeyed' : '花香、清甜、蜜香'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'Bright, crisp' : '明亮、爽口'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'High mountain oolong, lightly oxidized teas' : '高山烏龍、偏清香系'}</td>
                              </tr>
                              <tr className="hover:bg-stone-50/60">
                                <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Medium' : '中焙'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'Roasted nuts, caramel, ripe fruit' : '堅果、焦糖、熟果'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'Rounder, thicker body' : '更圓、更厚'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'Dong Ding styles, traditional oolong' : '凍頂系、傳統烏龍'}</td>
                              </tr>
                              <tr className="hover:bg-stone-50/60">
                                <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Heavy' : '重焙'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'Toasty, cocoa, wood, long finish' : '焙火、可可、木質、尾韻長'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'Very smooth; lower sharpness' : '更順、更沉'}</td>
                                <td className="px-5 py-4">{i18n.lang === 'en' ? 'Some aged oolong & re-roasted teas' : '部分陳年烏龍、回焙茶'}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {scienceRoom === 'constituents' && (
                      <div className="museum-frame museum-paper p-6 md:p-8">
                        <ConstituentsChapter />
                      </div>
                    )}

                    {scienceRoom === 'aroma' && (
                      <div className="museum-frame museum-paper p-6 md:p-8">
                        <div className="museum-label">
                          <Sparkles size={14} className="opacity-80" />
                          EXHIBIT ROOM
                        </div>
                        <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Aromatics' : '香氣'}</h3>
                        <p className="mt-3 text-stone-700 leading-relaxed">
                          {i18n.lang === 'en'
                            ? 'Tea aroma comes from hundreds of volatile organic compounds. Understanding their chemistry, formation, and classification helps you appreciate the complexity of tea fragrance.'
                            : '茶葉香氣來自數百種揮發性芳香物質。從化學基礎到形成機制、分類方式，系統性地解析茶葉香氣的科學原理。'}
                        </p>
                        <div className="mt-6">
                          <AromaticsChapter />
                        </div>
                      </div>
                    )}

                    {scienceRoom === 'process' && (
                      <div className="museum-frame museum-paper p-6 md:p-8">
                        <div className="museum-label">
                          <FlaskConical size={14} className="opacity-80" />
                          EXHIBIT ROOM
                        </div>
                        <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Tea Process Craft' : '製茶工藝'}</h3>
                        <p className="mt-3 text-stone-700 leading-relaxed">
                          {i18n.lang === 'en'
                            ? 'A guided tour of how processing turns fresh leaf chemistry into aroma and flavor, using oolong tea as the main case.'
                            : '以烏龍茶為例，梳理製程如何驅動香氣與滋味的生成，從萎凋到烘焙全程解析。'}
                        </p>
                        <div className="mt-6">
                          <TeaProcessCraftChapter />
                        </div>
                      </div>
                    )}


                  </main>
                </div>
              </AtlasDockLayout>
            </>
          ) : notesMode ? (
            <div className="museum-panel p-7 md:p-10 text-center">
              <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
              <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開完整科學百科</div>
              <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                百科包含：氧化/烘焙/內含物三大展廳、圖解與白皮書內容，適合教學引用與快速查閱。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setShowScienceAtlas(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                >
                  展開百科內容
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowScienceAtlas(true);
                    setScienceRoom('roasting');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                >
                  直接看烘焙
                  <ChevronRight size={16} className="text-emerald-700" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  const TeaChemistryDeepDive = ({ embedded = false, activeHref = null }) => {
    const [activeChapter, setActiveChapter] = useState('chapter1');

    // Sync activeChapter with activeHref from sidebar
    useEffect(() => {
      if (activeHref && activeHref.startsWith('#chapter')) {
        const chapterKey = activeHref.substring(1); // Remove '#'
        setActiveChapter(chapterKey);
      }
    }, [activeHref]);

    const EnzymeAnimation = () => (
      <div className="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        {/* PPO Animation */}
        <div className="museum-card museum-paper p-6">
          <h5 className="font-bold text-stone-800 mb-4">PPO 作用示意 (溫和氧化)</h5>
          <div className="relative w-32 h-32 mx-auto">
            {/* Cell */}
            <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-pulse"></div>
            {/* Polyphenols slowly leaking */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-1"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-2"></div>
            {/* Enzyme */}
            <div className="absolute top-1/4 left-1/4 text-green-600">
              <FlaskConical size={20} />
            </div>
          </div>
          <p className="text-xs text-stone-500 mt-4">失水導致細胞膜通透性增加，茶多酚緩慢滲出與PPO酶接觸，產生金黃色茶湯。</p>
        </div>

        {/* POD Animation */}
        <div className="museum-card museum-paper p-6">
          <h5 className="font-bold text-stone-800 mb-4">POD 作用示意 (劇烈氧化)</h5>
          <div className="relative w-32 h-32 mx-auto">
            {/* Broken Cell */}
            <div className="absolute inset-0 border-2 border-dashed border-red-500 rounded-full"></div>
            {/* Oxygen rushing in */}
            <div className="absolute top-1/4 right-1/4 text-blue-400 animate-ping">
              <Wind size={16} />
            </div>
            {/* Rapid browning */}
            <div className="absolute inset-2 bg-red-800/30 rounded-full animate-pod-flash"></div>
            {/* Enzyme */}
            <div className="absolute bottom-1/4 left-1/4 text-red-700">
              <FlaskConical size={20} />
            </div>
          </div>
          <p className="text-xs text-stone-500 mt-4">細胞結構破損，氧氣大量介入，POD酶劇烈作用，茶葉快速變紅褐。</p>
        </div>
      </div>
    );

    const chapters = scienceChapters;

    return (
      <div className={embedded ? "" : "py-12 animate-fadeIn"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!embedded && (
            <div className="mb-10">
              <div className="museum-frame museum-paper ">
                <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-200/35 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-200/25 blur-3xl"></div>
                <div className="relative px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="museum-label">
                      <FlaskConical size={14} className="opacity-80" />
                      EXHIBIT · WHITEPAPER
                    </div>
                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶葉氧化與發酵機制技術白皮書</h2>
                    <p className="mt-3 text-stone-600 leading-relaxed max-w-3xl">
                      從生物化學角度，深入剖析茶葉風味形成的底層邏輯；可搭配章節導覽逐段閱讀。
                    </p>
                  </div>
                  <div className="md:flex md:justify-end">
                    <button
                      type="button"
                      onClick={() => { setActiveTab('science'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-extrabold border border-stone-300 bg-white hover:bg-stone-50 text-stone-700"
                    >
                      返回科學頁
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-8">
            {/* Main Content */}
            <div className="w-full">
              <div className="museum-frame bg-white p-8 md:p-12 min-h-[600px]">
                {chapters[activeChapter].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CultivarSection = () => {
    const notesMode = UI_FLAGS.notesMode;
    const [searchTerm, setSearchTerm] = useState("");
    const [showCultivarsAtlas, setShowCultivarsAtlas] = useState(!notesMode);
    const [showCultivarDiversity, setShowCultivarDiversity] = useState(true);
    const [activeCultivarSection, setActiveCultivarSection] = useState('taiwan-cultivars');
    const [activeCultivarHref, setActiveCultivarHref] = useState(null);
    const cultivarsSidebarItems = CULTIVARS_TOC.map((item) => ({ key: item.href, label: item.label }));
    const { largeLeafCultivars, majorCultivars, otherSmallLeaf } = cultivars;

    const scrollToCultivarSection = (href) => {
      if (typeof window === 'undefined') return;
      if (!href) return;
      setShowCultivarsAtlas(true);
      setShowCultivarDiversity(true);

      let attempts = 0;
      const tryScroll = () => {
        const id = String(href).startsWith('#') ? String(href).slice(1) : String(href);
        const el = document.getElementById(id);
        if (el) {
          cultivarsSubnav?.scrollToHref(href);
          return;
        }
        attempts += 1;
        if (attempts > 30) return;
        window.setTimeout(tryScroll, 50);
      };

      tryScroll();
    };

    const filterCultivars = (list) => {
      if (!searchTerm) return list;
      const term = searchTerm.toLowerCase();
      return list.filter(item =>
        item.name.toLowerCase().includes(term) ||
        (item.code && item.code.toLowerCase().includes(term)) ||
        (item.alias && item.alias.toLowerCase().includes(term)) ||
        item.desc.toLowerCase().includes(term)
      );
    };

    const filteredMajor = filterCultivars(majorCultivars);
    const filteredLargeLeaf = filterCultivars(largeLeafCultivars);
    const filteredOtherSmallLeaf = filterCultivars(otherSmallLeaf);

    return (
      <div className="museum-page">
        <div className="w-full">
          {notesMode && (
            <div className="mb-10 museum-panel p-7 md:p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="min-w-0">
                  <div className="museum-label">
                    <Sprout size={14} className="opacity-80" />
                    TEA HOUSE · NOTES
                  </div>
                  <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶樹品種｜筆記卡</h2>
                  <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                    品種像是茶的「底盤」：決定內含物質組合與香氣走向。先看筆記卡建立框架，需要時再展開百科（含表格、品種卡、長文整理與搜尋）。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowCultivarsAtlas(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                  >
                    展開百科
                    <ChevronRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCultivarsAtlas(true);
                      setShowCultivarDiversity(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                  >
                    讀台灣品種整理
                    <ChevronRight size={16} className="text-emerald-700" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">KEY IDEA</div>
                  <div className="mt-1 font-bold text-stone-900">同工藝，換品種就換風味</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                    同樣做成烏龍或紅茶，不同品種的多元酚、胺基酸、咖啡鹼比例差異，會讓香氣、回甘、厚度完全不同。
                  </div>
                </div>
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">FAST CHECK</div>
                  <div className="mt-1 font-bold text-stone-900">先記住「大葉／小葉」</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                    大葉種（多酚高）偏向紅茶；小葉種（風味更細緻）常見於綠茶與烏龍。先用這張地圖定位，再看細節。
                  </div>
                </div>
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
                  <div className="mt-1 font-bold text-stone-900">教學用：三步帶學生</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                    先認品種名 → 連結適製茶類 → 回到杯中描述香氣與口感，讓「品種」不只是編號，而是可感受的差異。
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: '大葉種（紅茶常見）', cls: 'bg-rose-50 border-rose-200 text-rose-900' },
                  { label: '小葉種（綠茶／烏龍常見）', cls: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
                  { label: '台茶編號', cls: 'bg-stone-50 border-stone-200 text-stone-800' },
                  { label: '地方品種', cls: 'bg-amber-50 border-amber-200 text-amber-900' },
                  { label: '雜交／選拔', cls: 'bg-teal-50 border-teal-200 text-teal-900' },
                ].map((it) => (
                  <span key={it.label} className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-extrabold ${it.cls}`}>
                    {it.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {showCultivarsAtlas ? (
            <AtlasDockLayout
              sidebar={
                <CollapsibleSidebar
                  sections={CULTIVARS_SECTIONS}
                  activeSection={activeCultivarSection}
                  activeSectionHref={activeCultivarHref}
                  onSelectSection={setActiveCultivarSection}
                  onSelectHref={scrollToCultivarSection}
                  topOffsetPx={siteNavHeightPx + 48}
                />
              }
            >
              <div className="min-w-0">

                {/* View 1: Taiwan Tea Cultivars Registry */}
                {activeCultivarSection === 'taiwan-cultivars' && (
                  <div id="cultivar-registry" className="mb-12 scroll-mt-28">
                    <TaiwanTeaCultivars />
                  </div>
                )}

                {/* View 2: Taiwan Cultivar Diversity Article */}
                {activeCultivarSection === 'cultivar-diversity' && (
                  <div id="cultivar-diversity" className="mb-12 scroll-mt-28">
                    <div className="museum-frame museum-paper overflow-hidden">
                      <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-white border border-stone-200 rounded-xl p-3 text-green-800">
                            <Sprout size={22} />
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-stone-900">多樣性的臺灣茶樹栽培品種</h3>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <TaiwanCultivarDiversity />
                      </div>
                    </div>
                  </div>
                )}

                {/* View 3: Mystery of Cultivars (Search + Comparisons) */}
                {activeCultivarSection === 'cultivar-mystery' && (
                  <div>


                    {/* Variety Knowledge Section */}
                    <div className="bg-stone-50 rounded-2xl p-8 mb-16 border border-stone-200">
                      <div className="text-center mb-8">
                        <Sprout size={64} className="text-green-700 mx-auto opacity-80 mb-4" />
                        <h3 className="text-3xl font-bold text-stone-800">品種的奧秘</h3>
                        <p className="text-stone-500 font-medium mt-2">決定茶的原始香氣與適製性</p>
                        <p className="mt-4 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                          茶樹品種因先天內含物質不同（酚類、胺基酸、咖啡鹼等），決定了各自的風味特徵與適合製作的茶類。
                          市面上的金萱、紅玉等名稱，其實都是茶樹的品種名喔！
                        </p>
                      </div>

                      {/* Comparison Table */}
                      <div className="overflow-x-auto mb-12">
                        <table className="min-w-full divide-y divide-stone-200 border border-stone-200 rounded-lg overflow-hidden shadow-sm">
                          <thead className="bg-stone-100">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">特徵</th>
                              <th className="px-6 py-3 text-left text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50">大葉種 (喬木/小喬木)</th>
                              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider bg-green-50">小葉種 (灌木)</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-600">
                            <tr><td className="px-6 py-4 font-bold bg-stone-50">葉片特徵</td><td className="px-6 py-4">葉片較大、顏色較淡</td><td className="px-6 py-4">葉片較小、顏色較深</td></tr>
                            <tr><td className="px-6 py-4 font-bold bg-stone-50">角質層</td><td className="px-6 py-4">較薄</td><td className="px-6 py-4">較厚</td></tr>
                            <tr><td className="px-6 py-4 font-bold bg-stone-50">化學成分</td><td className="px-6 py-4">多元酚類含量較高 (苦澀感較強)</td><td className="px-6 py-4">多元酚類含量較低 (口感較細緻)</td></tr>
                            <tr><td className="px-6 py-4 font-bold bg-stone-50">適製性</td><td className="px-6 py-4 font-bold text-red-600">紅茶</td><td className="px-6 py-4 font-bold text-green-600">綠茶、部分發酵茶(烏龍)</td></tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Major 4 Cultivars */}
                      {filteredMajor.length > 0 && (
                        <div className="mb-16">
                          <h4 className="flex items-center text-2xl font-bold text-green-800 mb-8 border-l-4 border-green-600 pl-3">
                            <Star className="mr-2 text-yellow-500" size={28} /> 台灣茶壇四大天王
                          </h4>

                          {/* Cards */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {filteredMajor.map((item, idx) => (
                              <div key={idx} className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-all">
                                <div className="bg-stone-100 p-4 flex justify-between items-center border-b border-stone-200">
                                  <div>
                                    <h5 className="font-bold text-xl text-stone-800">{item.name}</h5>
                                    <span className="text-xs text-stone-500 font-mono">{item.code}</span>
                                  </div>
                                  <span className="text-xs bg-white px-2 py-1 rounded border border-stone-300 text-stone-600">{item.alias}</span>
                                </div>
                                <div className="p-5 space-y-3">
                                  <p className="text-sm text-stone-700 leading-relaxed"><strong>身世：</strong>{item.desc}</p>
                                  <p className="text-sm text-stone-600 leading-relaxed bg-stone-50 p-3 rounded">💡 {item.story}</p>
                                  <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                                    <div className="flex items-center"><Leaf size={14} className="mr-1 text-green-600" /> {item.features.shape}</div>
                                    <div className="flex items-center"><Wind size={14} className="mr-1 text-amber-600" /> {item.features.aroma}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Comparison Table for Major 4 */}
                          <div className="overflow-x-auto bg-white rounded-xl border border-stone-200 shadow-sm">
                            <table className="min-w-full divide-y divide-stone-200 text-sm text-center">
                              <thead className="bg-green-50 text-green-900">
                                <tr>
                                  <th className="px-4 py-3 font-bold">品種</th>
                                  <th className="px-4 py-3 font-bold">葉形</th>
                                  <th className="px-4 py-3 font-bold">葉脈夾角</th>
                                  <th className="px-4 py-3 font-bold">葉緣鋸齒</th>
                                  <th className="px-4 py-3 font-bold">適植海拔</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-stone-200 text-stone-700">
                                {filteredMajor.map((item, idx) => (
                                  <tr key={idx} className="hover:bg-stone-50">
                                    <td className="px-4 py-3 font-bold">{item.name}</td>
                                    <td className="px-4 py-3">{item.features.shape}</td>
                                    <td className="px-4 py-3">{item.features.angle}</td>
                                    <td className="px-4 py-3">{item.features.serration}</td>
                                    <td className="px-4 py-3">{item.features.alt}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Cultivar Cards - Large Leaf */}
                      {filteredLargeLeaf.length > 0 && (
                        <div className="mb-12">
                          <h4 className="flex items-center text-xl font-bold text-red-800 mb-6 border-l-4 border-red-600 pl-3">
                            <Leaf className="mr-2" size={24} /> 大葉種：台灣紅茶的主力
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {filteredLargeLeaf.map((item, idx) => (
                              <div key={idx} className="bg-white p-5 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                                <h5 className="font-bold text-lg text-stone-800 mb-2">{item.name}</h5>
                                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Cultivar Cards - Other Small Leaf */}
                      {filteredOtherSmallLeaf.length > 0 && (
                        <div className="mb-12">
                          <h4 className="flex items-center text-xl font-bold text-green-800 mb-6 border-l-4 border-green-600 pl-3">
                            <Leaf className="mr-2" size={24} /> 其他特色小葉種
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredOtherSmallLeaf.map((item, idx) => (
                              <div key={idx} className="bg-white p-5 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                                <h5 className="font-bold text-lg text-stone-800 mb-2">{item.name}</h5>
                                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                          <p className="mt-4 text-xs text-stone-500 italic text-right">
                            *種植面積排名：青心烏龍 &gt; 台茶12號(金萱) &gt; 四季春 &gt; 青心大冇 &gt; 台茶13號(翠玉)
                          </p>
                        </div>
                      )}

                      {filteredMajor.length === 0 && filteredLargeLeaf.length === 0 && filteredOtherSmallLeaf.length === 0 && (
                        <div className="text-center py-12">
                          <p className="text-stone-500 text-lg">沒有找到符合「{searchTerm}」的品種</p>
                          <button onClick={() => setSearchTerm('')} className="mt-4 text-green-600 font-medium hover:underline">清除搜尋</button>
                        </div>
                      )}

                      {/* TRES Info Box */}
                      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4 flex flex-col items-center justify-center text-amber-800">
                          <Microscope size={48} className="mb-2 opacity-80" />
                          <span className="font-bold text-lg">茶改場心血</span>
                        </div>
                        <div className="md:w-3/4">
                          <h5 className="font-bold text-stone-800 text-lg mb-3">台農 vs 台茶的編號由來</h5>
                          <p className="text-sm text-stone-700 leading-relaxed mb-3">
                            在圖表裡面有些寫著台農字樣的，台農系列其實就是以<strong>民國57年(1968)</strong>做劃分。民國57年前是「台灣省農林廳農業試驗所」，編號為「台農」系列；而後的「台茶」系列即是改制後的「茶業改良場」。
                          </p>
                          <p className="text-sm text-stone-700 leading-relaxed mb-3">
                            至於後來新品種取名的問題，就都由<strong>投票</strong>來產生。
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            </AtlasDockLayout>
          ) : notesMode ? (
            <div className="museum-panel p-7 md:p-10 text-center">
              <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
              <div className="mt-4 text-lg font-extrabold text-stone-900">需要查品種時再展開百科</div>
              <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                百科包含：台灣品種整理長文、大葉/小葉對照表、四大品種與其他品種卡片、關鍵字搜尋。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setShowCultivarsAtlas(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                >
                  展開百科內容
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCultivarsAtlas(true);
                    setShowCultivarDiversity(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                >
                  直接看台灣品種整理
                  <ChevronRight size={16} className="text-emerald-700" />
                </button>
              </div>
            </div>
          ) : null}

        </div>
      </div>
    );
  };

  const VarietiesSection = () => {
    const notesMode = UI_FLAGS.notesMode;
    const [expandedCardId, setExpandedCardId] = useState(null);
    const [filterFermentation, setFilterFermentation] = useState('all');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [showVarietiesAtlas, setShowVarietiesAtlas] = useState(!notesMode);
    const [showChenChuanEssay, setShowChenChuanEssay] = useState(false);

    const handleCardClick = (id) => {
      setExpandedCardId(prevId => (prevId === id ? null : id));
    };

    const filteredTeas = teaData.filter(tea => {
      if (tea.name === '普洱茶') return false; // 普洱茶獨立顯示

      const matchesFermentation = filterFermentation === 'all' || tea.fermentation === filterFermentation;
      const matchesKeyword = searchKeyword === '' ||
        tea.name.includes(searchKeyword) ||
        tea.representative.includes(searchKeyword) ||
        tea.desc.includes(searchKeyword);

      return matchesFermentation && matchesKeyword;
    });

    if (UI_FLAGS.legacyVarieties) {
      return (
        <div className="py-12 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {notesMode && (
              <div className="mb-10 museum-panel p-7 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <div className="min-w-0">
                    <div className="museum-label">
                      <BookOpen size={14} className="opacity-80" />
                      TEA HOUSE · NOTES
                    </div>
                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">六大茶類｜筆記卡</h2>
                    <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                      先用一張筆記卡建立分類直覺；需要查細節時，再展開完整百科（含長文、參考資料、篩選查詢）。
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                    <button
                      type="button"
                      onClick={() => setShowVarietiesAtlas(true)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                    >
                      展開百科
                      <ChevronRight size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowVarietiesAtlas(true);
                        setShowChenChuanEssay(true);
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                    >
                      讀陳椽長文
                      <ChevronRight size={16} className="text-emerald-700" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="museum-card px-5 py-4">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">KEY IDEA</div>
                    <div className="mt-1 font-bold text-stone-900">分類以「工藝」為主</div>
                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                      同一片鮮葉，因殺青、萎凋、氧化（發酵）、悶黃、堆積（後發酵）與乾燥方式不同，走出六條風味之路。
                    </div>
                  </div>
                  <div className="museum-card px-5 py-4">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO LEARN</div>
                    <div className="mt-1 font-bold text-stone-900">先「六大茶類」再進科學</div>
                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                      先抓住六大分類與代表茶，再用「氧化／烘焙／內含物」把風味講清楚，最後回到製程與沖泡。
                    </div>
                  </div>
                  <div className="museum-card px-5 py-4">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
                    <div className="mt-1 font-bold text-stone-900">教學用：先問三題</div>
                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                      這款茶是「哪一類」？關鍵工序是什麼？最典型的香氣/口感是什麼？用這三題建立學生的分類直覺。
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { label: '綠茶', cls: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
                    { label: '白茶', cls: 'bg-stone-50 border-stone-200 text-stone-800' },
                    { label: '黃茶', cls: 'bg-amber-50 border-amber-200 text-amber-900' },
                    { label: '青茶（烏龍）', cls: 'bg-teal-50 border-teal-200 text-teal-900' },
                    { label: '紅茶', cls: 'bg-rose-50 border-rose-200 text-rose-900' },
                    { label: '黑茶', cls: 'bg-slate-50 border-slate-200 text-slate-900' },
                  ].map((it) => (
                    <span key={it.label} className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-extrabold ${it.cls}`}>
                      {it.label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {!notesMode || showVarietiesAtlas ? (
              <>
                {/* 國際標準六大茶類區塊 */}
                <div className="mb-16">
                  <div className="museum-frame museum-paper ">
                    <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl"></div>
                    <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
                      <div className="museum-label">
                        <Leaf size={14} className="opacity-80" />
                        EXHIBIT · SIX TEA TYPES
                      </div>
                      <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">六大茶類</h2>
                      <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                        以「工藝」與「發酵程度」作為主軸，將茶葉分為綠、白、黃、青、紅、黑六大類；同一片鮮葉，走出六條風味之路。
                      </p>
                      <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                        <div className="museum-card px-5 py-4 text-left">
                          <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO USE</div>
                          <div className="mt-1 font-bold text-stone-900">用篩選快速定位茶類</div>
                          <div className="mt-1 text-sm text-stone-600">依發酵程度切換分類視角</div>
                        </div>
                        <div className="museum-card px-5 py-4 text-left">
                          <div className="text-xs font-extrabold tracking-widest text-stone-500">SEARCH</div>
                          <div className="mt-1 font-bold text-stone-900">用關鍵字查代表茶品</div>
                          <div className="mt-1 text-sm text-stone-600">適合課堂提問與對照</div>
                        </div>
                        <div className="museum-card px-5 py-4 text-left">
                          <div className="text-xs font-extrabold tracking-widest text-stone-500">READ</div>
                          <div className="mt-1 font-bold text-stone-900">展開長文作為參考</div>
                          <div className="mt-1 text-sm text-stone-600">章節化排版便於引用</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reference Essay (Chen Chuan) */}
                <div className="mb-12">
                  <div className="bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
                    <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-white border border-stone-200 rounded-xl p-3 text-green-800">
                          <BookOpen size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-stone-900">陳椽《茶業通史》：六大茶類分類的理論與實際</h3>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowChenChuanEssay((v) => !v)}
                        aria-expanded={showChenChuanEssay}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold border transition-colors self-start md:self-auto w-full md:w-auto
                  border-green-700 text-green-900 bg-green-100 hover:bg-green-200"
                      >
                        {showChenChuanEssay ? '收合文章' : '展開文章'}
                      </button>
                    </div>

                    {showChenChuanEssay && (
                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <ChenChuanTeaClassification
                          topOffsetPx={chenChuanScrollOffsetPx}
                          activeHref={chenChuanChapterHref === '#cc-all' ? null : chenChuanChapterHref}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Filter Section */}
                <div className="mb-12 museum-frame museum-paper p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="flex items-center text-stone-600 font-bold whitespace-nowrap">
                        <Filter size={20} className="mr-2" /> 篩選：
                      </div>
                      <select
                        value={filterFermentation}
                        onChange={(e) => setFilterFermentation(e.target.value)}
                        className="bg-white border border-stone-300 text-stone-900 text-sm rounded-xl focus:ring-green-600 focus:border-green-600 block w-full p-2.5 shadow-sm"
                      >
                        <option value="all">所有發酵程度</option>
                        <option value="不發酵">不發酵 (綠茶)</option>
                        <option value="微發酵">微發酵 (白茶)</option>
                        <option value="輕發酵">輕發酵 (黃茶)</option>
                        <option value="半發酵">半發酵 (青茶)</option>
                        <option value="全發酵">全發酵 (紅茶)</option>
                        <option value="後發酵">後發酵 (黑茶)</option>
                      </select>
                      <div className="hidden md:block text-xs text-stone-600">
                        共 <span className="font-bold text-stone-900">{filteredTeas.length}</span> 筆
                      </div>
                    </div>
                    <div className="relative w-full md:w-1/3">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search size={18} className="text-stone-400" />
                      </div>
                      <input
                        type="text"
                        className="bg-white border border-stone-300 text-stone-900 text-sm rounded-xl focus:ring-green-600 focus:border-green-600 block w-full pl-10 pr-10 p-2.5 shadow-sm"
                        placeholder="搜尋代表茶品或關鍵字..."
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                      />
                      {searchKeyword && (
                        <button
                          type="button"
                          onClick={() => setSearchKeyword('')}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-700"
                          aria-label="清除搜尋"
                        >
                          <X size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                  {filteredTeas.map((tea) => (
                    <div key={tea.id} className="pt-6">
                      <div className={`group flow-root museum-card px-6 pb-8 border-t-4 ${tea.accentColor} hover:-translate-y-0.5 transition-all duration-300`}>
                        <div className="-mt-6">
                          <div>
                            <span className={`inline-flex items-center justify-center p-3 shadow-lg rounded-2xl text-white ring-1 ring-black/5`} style={{ background: tea.image }}>
                              <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-xl font-bold text-stone-900 tracking-tight">{tea.name}</h3>
                          <p className="text-sm text-stone-400 mb-2">{tea.engName}</p>
                          <span className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-full mb-3 border border-stone-200">
                            <span className={`w-2 h-2 rounded-full ${tea.accentColor}`}></span>
                            {tea.fermentation}
                          </span>

                          {/* Tags for Taste */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tea.taste.map((t, i) => (
                              <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-800 border border-stone-200">
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Representative Teas */}
                          <div className="mb-4 text-base">
                            <span className="font-semibold text-stone-600">代表：</span>
                            <span className="text-stone-500">{tea.representative}</span>
                          </div>

                          <p className="mt-2 text-base text-stone-500 leading-relaxed">
                            {tea.desc}
                          </p>

                          {/* Details Button */}
                          <button
                            onClick={() => handleCardClick(tea.id)}
                            className="w-full mt-6 text-sm font-extrabold text-stone-900 flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white/70 hover:bg-white transition-colors"
                          >
                            {expandedCardId === tea.id ? '收起詳情' : '展開詳情'}
                            <ChevronRight size={16} className={`transform transition-transform duration-300 ${expandedCardId === tea.id ? 'rotate-90' : ''}`} />
                          </button>

                          {/* Expanded Details Section */}
                          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedCardId === tea.id ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                            <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-inner">
                              <h4 className="font-bold text-sm text-stone-800 mb-2 flex items-center"><BookOpen size={16} className="mr-2 text-stone-500" /> 產地與歷史</h4>
                              <p className="text-sm text-stone-600 leading-relaxed">{tea.details}</p>
                            </div>

                            {tea.id === 4 && (
                              <button
                                onClick={() => {
                                  setActiveTab('varieties');
                                  setVarietiesKind('red');
                                  setPendingScrollTarget('red-tea-global-story');
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-red-200 rounded-md text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 transition-colors"
                              >
                                <BookOpen className="mr-2 h-4 w-4" />
                                查看紅茶全球史
                              </button>
                            )}
                          </div>

                          <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-sm text-stone-400">
                            <div className="flex items-center" title="建議水溫">
                              <Flame size={16} className="mr-1 text-red-400" /> {tea.temp}
                            </div>
                            <div className="flex items-center" title="沖泡時間">
                              <Clock size={16} className="mr-1 text-blue-400" /> {tea.time}
                            </div>
                          </div>
                        </div>

                        {tea.id === 3 && (
                          <div className="mt-4">
                            <button
                              type="button"
                              onClick={() => {
                                setVarietiesKind('oolong');
                                setPendingScrollTarget('oolong-minbei');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 font-extrabold text-sm hover:bg-amber-100 transition-colors"
                            >
                              <Map className="h-4 w-4" />
                              查看青茶系譜（兩岸工藝對話）
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {filteredTeas.length === 0 && (
                  <div className="text-center py-12 text-stone-500">
                    <p>沒有找到符合條件的茶類，請嘗試調整篩選條件。</p>
                  </div>
                )}

                <div className="mt-10">
                  <div className="museum-frame museum-paper overflow-hidden">
                    <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-white border border-stone-200 rounded-xl p-3 text-amber-700">
                          <Star size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-stone-900">普洱茶（獨立專區）</h3>
                          <p className="text-sm text-stone-600 mt-1">普洱茶已移出六大茶類，改為獨立功能區。</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => goToTab('puerh')}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold border transition-colors self-start md:self-auto w-full md:w-auto
                  border-amber-300 text-amber-900 bg-amber-50 hover:bg-amber-100"
                      >
                        前往普洱茶
                        <ChevronRight size={16} className="text-amber-700" />
                      </button>
                    </div>
                  </div>
                </div>

              </>
            ) : notesMode ? (
              <div className="museum-panel p-7 md:p-10 text-center">
                <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
                <div className="mt-4 text-lg font-extrabold text-stone-900">需要查資料時再展開百科</div>
                <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                  百科包含：六大茶類總覽、陳椽長文、篩選與關鍵字搜尋、普洱茶百科全文。
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                  <button
                    type="button"
                    onClick={() => setShowVarietiesAtlas(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                  >
                    展開百科內容
                    <ChevronRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('science');
                      setAtlasNavOpen(true);
                      setScienceRoom('teaching');
                      selectScienceTeachingChapter('#ref-all');
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                  >
                    直接看教學引用整理
                    <ChevronRight size={16} className="text-emerald-700" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      goToTab('puerh');
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                  >
                    直接看普洱茶
                    <ChevronRight size={16} className="text-emerald-700" />
                  </button>
                </div>
              </div>
            ) : null}

          </div>
        </div>
      );
    }

    const kindMeta = VARIETIES_KINDS.find((k) => k.key === varietiesKind) ?? VARIETIES_KINDS[0];
    const kindTea = kindMeta.type === 'tea' ? teaData.find((tea) => tea.id === kindMeta.teaId) : null;
    const showSixTeaNotes = ['white', 'yellow', 'green', 'oolong', 'red', 'black'].includes(varietiesKind);
    const varietiesSidebarItems = VARIETIES_KINDS.map((kind) => ({ key: kind.key, label: kind.label }));
    const varietiesSubItemsByKey = {
      ref_chenchuan: [{ href: '#cc-all', label: '全部章節' }, ...CHEN_CHUAN_TOC],
      oolong: OOLONG_TOC,
      red: RED_TOC,
      white: WHITE_TOC_EXTENDED,
    };

    const varietiesActiveSubHref =
      varietiesKind === 'ref_chenchuan'
        ? chenChuanChapterHref
        : varietiesKind === 'oolong'
          ? oolongRegionHref
          : varietiesKind === 'red'
            ? redTeaHref
            : varietiesKind === 'white'
              ? whiteRegionHref
              : null;

    const onSelectVarietiesSubHref = (href) => {
      if (!href) return;
      setPendingScrollTarget('varieties-kind-header');
      if (varietiesKind === 'ref_chenchuan') selectChenChuanChapter(href);
      if (varietiesKind === 'oolong') selectOolongRegion(href);
      if (varietiesKind === 'red') selectRedTeaTopic(href);
      if (varietiesKind === 'white') selectWhiteRegion(href);
    };

    const FactsGrid = ({ tea }) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">FERMENTATION</div>
          <div className="mt-1 text-lg font-extrabold text-stone-900">{tea.fermentation}</div>
          <div className="mt-2 text-sm text-stone-600">茶湯：{tea.liquorColor}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">REPRESENTATIVE</div>
          <div className="mt-1 text-lg font-extrabold text-stone-900">{tea.representative}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">PROCESS</div>
          <div className="mt-2 text-sm text-stone-700">{tea.process}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">BREWING</div>
          <div className="mt-2 text-sm text-stone-700">
            水溫：<span className="font-bold">{tea.temp}</span>／出湯：<span className="font-bold">{tea.time}</span>
          </div>
        </div>
      </div>
    );

    if (activeTab === 'home') {
      const homeTeaKinds = VARIETIES_KINDS.filter((kind) => kind.type === 'tea');
      return (
        <section className="museum-page">
          <div className="museum-stage">
            <div className="mb-12 museum-frame museum-paper ">
              <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl"></div>
              <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
                <div className="museum-label mx-auto">
                  <Leaf size={14} className="opacity-80" />
                  EXHIBIT · SIX TEA TYPES
                </div>
                <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">六大茶類</h2>
                <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                  以「工藝」與「發酵程度」作為主軸，將茶葉分為綠、白、黃、青、紅、黑六大類；從這裡開始，就能快速定位風味與學習路線。
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                  <div className="museum-card px-5 py-4 text-left">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO USE</div>
                    <div className="mt-1 font-bold text-stone-900">用篩選快速定位茶類</div>
                    <div className="mt-1 text-sm text-stone-600">先看發酵程度，再看工藝差異。</div>
                  </div>
                  <div className="museum-card px-5 py-4 text-left">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">SEARCH</div>
                    <div className="mt-1 font-bold text-stone-900">用關鍵字查代表茶品</div>
                    <div className="mt-1 text-sm text-stone-600">適合課堂提問與對照。</div>
                  </div>
                  <div className="museum-card px-5 py-4 text-left">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">READ</div>
                    <div className="mt-1 font-bold text-stone-900">展開詳情作為參考</div>
                    <div className="mt-1 text-sm text-stone-600">先理解，再進入展廳章節。</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {homeTeaKinds.map((kind) => {
                const tea = teaData.find((t) => t.id === kind.teaId);
                if (!tea) return null;
                const expanded = expandedCardId === tea.id;

                return (
                  <div key={kind.key} className="pt-6">
                    <div
                      className={`group flow-root museum-card px-6 pb-8 border-t-4 ${tea.accentColor} hover:-translate-y-0.5 transition-all duration-300`}
                    >
                      <div className="-mt-6">
                        <div>
                          <span
                            className="inline-flex items-center justify-center p-3 shadow-lg rounded-2xl text-white ring-1 ring-black/5"
                            style={{ background: tea.image }}
                          >
                            <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>

                        <h3 className="mt-8 text-xl font-extrabold text-stone-900 tracking-tight">{tea.name}</h3>
                        <p className="text-sm text-stone-400 mb-2">{tea.engName}</p>

                        <span className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-full mb-3 border border-stone-200">
                          <span className={`w-2 h-2 rounded-full ${tea.accentColor}`}></span>
                          {tea.fermentation}
                        </span>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {(tea.taste ?? []).slice(0, 6).map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-800 border border-stone-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="text-sm text-stone-700 leading-relaxed">
                          <span className="font-semibold text-stone-600">代表：</span>
                          {tea.representative}
                        </div>
                        <p className="mt-3 text-sm text-stone-600 leading-relaxed">{tea.desc}</p>

                        <div className="mt-5 space-y-2">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTab('varieties');
                              setAtlasNavOpen(true);
                              setMobileMenuOpen(false);
                              setVarietiesKind(kind.key);
                              setPendingScrollTarget('varieties-kind-header');
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 font-extrabold text-sm hover:bg-emerald-100 transition-colors"
                          >
                            進入茶學百科
                            <ChevronRight size={16} className="text-emerald-700" />
                          </button>

                          <button
                            type="button"
                            onClick={() => setExpandedCardId((prev) => (prev === tea.id ? null : tea.id))}
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-stone-200 bg-white/70 text-stone-800 font-extrabold text-sm hover:bg-white transition-colors"
                          >
                            {expanded ? '收起詳情' : '展開詳情'}
                            <ChevronDown size={16} className={expanded ? 'rotate-180' : ''} />
                          </button>
                        </div>

                        {expanded ? (
                          <div className="mt-4 rounded-2xl border border-stone-200 bg-white/70 p-4">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">產地與歷史</div>
                            <p className="mt-2 text-sm text-stone-700 leading-relaxed">{tea.details}</p>
                            <div className="mt-4 flex items-center justify-between text-xs text-stone-600 font-bold">
                              <span className="flex items-center">
                                <Flame size={14} className="mr-1 text-red-400" /> {tea.temp}
                              </span>
                              <span className="flex items-center">
                                <Clock size={14} className="mr-1 text-blue-400" /> {tea.time}
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }

    return (
      <div className="museum-page">
        <div className="w-full">
          <AtlasDockLayout
            topOffsetPx={siteNavHeightPx + 24}
            sidebar={
              <ChapterSidebar
                title="章節"
                items={varietiesSidebarItems}
                activeKey={varietiesKind}
                onSelectKey={(key) => {
                  setVarietiesKind(key);
                  if (key === 'ref_chenchuan') setChenChuanChapterHref('#cc-all');
                  if (key === 'red') setRedTeaHref('#red-global');
                  if (key === 'oolong') setOolongRegionHref(null);
                  if (key === 'white') setWhiteRegionHref('#white-history');
                  if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                subItemsByKey={varietiesSubItemsByKey}
                activeSubHref={varietiesSubItemsByKey[varietiesKind]?.length ? varietiesActiveSubHref : null}
                onSelectSubHref={varietiesSubItemsByKey[varietiesKind]?.length ? onSelectVarietiesSubHref : null}
                topOffsetPx={siteNavHeightPx + 48}
                pinMode="static"
              />
            }
          >
            <div className="space-y-6 min-w-0">

              {kindMeta.key === 'ref_chenchuan' ? (
                <ChenChuanTeaClassification
                  topOffsetPx={chenChuanScrollOffsetPx}
                  activeHref={chenChuanChapterHref === '#cc-all' ? null : chenChuanChapterHref}
                />
              ) : null}

              {kindMeta.type === 'overview' ? (
                <TeaEncyclopediaOverview />
              ) : null}

              {kindMeta.type === 'tea' ? (
                <>
                  <div id="varieties-kind-header" className="h-0" aria-hidden="true" />
                  {kindTea &&
                    (varietiesKind !== 'oolong' || !oolongRegionHref) &&
                    (varietiesKind !== 'red' || redTeaHref === '#red-global') &&
                    (varietiesKind !== 'white' || !whiteRegionHref || whiteRegionHref === '#white-history') ? (
                    <>
                      <SectionCard title="概覽" icon={BookOpen}>
                        <p className="text-lg text-stone-800 leading-relaxed">{kindTea.desc}</p>
                        {kindTea.taste?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {kindTea.taste.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-sm font-bold text-stone-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </SectionCard>

                      <SectionCard title="關鍵資訊" icon={Info}>
                        <FactsGrid tea={kindTea} />
                      </SectionCard>

                      <SectionCard title="背景與發展" icon={History}>
                        <p className="text-stone-700 leading-relaxed whitespace-pre-line">{kindTea.details}</p>
                      </SectionCard>

                      {showSixTeaNotes ? (
                        <SectionCard title="茶類筆記（定義／製作）" icon={Scroll}>
                          <SixTeaTypesNotes kind={varietiesKind} />
                        </SectionCard>
                      ) : null}

                      <SectionCard title="沖泡要點" icon={Droplets}>
                        <p className="text-stone-700 leading-relaxed">{kindTea.brewingTips}</p>
                      </SectionCard>

                      {varietiesKind === 'oolong' && !oolongRegionHref ? (
                        <SectionCard title="歷史長河" icon={History}>
                          <OolongTeaVerticalTimeline />
                        </SectionCard>
                      ) : null}
                    </>
                  ) : null}

                  {varietiesKind === 'oolong' && oolongRegionHref ? (
                    <OolongRegions topOffsetPx={chenChuanScrollOffsetPx} activeHref={oolongRegionHref} />
                  ) : null}

                  {varietiesKind === 'green' ? (
                    <SectionCard title="綠茶歷史" icon={Globe}>
                      <div id="green-tea-history" className="scroll-mt-28">
                        <GreenTeaHistory />
                      </div>
                    </SectionCard>
                  ) : null}

                  {varietiesKind === 'yellow' ? (
                    <SectionCard title="黃茶歷史" icon={Globe}>
                      <div id="yellow-tea-history" className="scroll-mt-28">
                        <YellowTeaHistory />
                      </div>
                    </SectionCard>
                  ) : null}

                  {varietiesKind === 'white' ? (
                    <>
                      {!whiteRegionHref || whiteRegionHref === '#white-history' ? (
                        <SectionCard id="white-history" title="白茶歷史" icon={Globe}>
                          <div id="white-tea-history" className="scroll-mt-28">
                            <WhiteTeaHistory />
                          </div>
                        </SectionCard>
                      ) : null}

                      {whiteRegionHref ? (
                        <WhiteTeaRegions topOffsetPx={chenChuanScrollOffsetPx} activeHref={whiteRegionHref} />
                      ) : null}
                    </>
                  ) : null}

                  {varietiesKind === 'black' ? (
                    <SectionCard title="黑茶歷史" icon={Globe}>
                      <div id="black-tea-history" className="scroll-mt-28">
                        <BlackTeaHistory />
                      </div>
                    </SectionCard>
                  ) : null}

                  {varietiesKind === 'red' ? (
                    <>
                      {redTeaHref === '#red-global' ? (
                        <SectionCard id="red-global" title="紅茶全球史" icon={Globe}>
                          <div id="red-tea-global-story" className="scroll-mt-28">
                            <RedTeaGlobalStory />
                          </div>
                        </SectionCard>
                      ) : null}
                      {redTeaHref === '#red-lapsang' ? (
                        <SectionCard id="red-lapsang" title="正山小種" icon={Leaf}>
                          <div className="space-y-10 text-stone-700 leading-relaxed">
                            <div className="relative rounded-2xl border border-stone-200 bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 p-8 md:p-10 text-stone-800 overflow-hidden">
                              <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-orange-200/35 blur-3xl -mr-24 -mt-24" />
                              <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl -ml-28 -mb-24" />
                              <div className="relative z-10 max-w-4xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-white text-sm font-bold">
                                  <Leaf size={16} className="opacity-90" />
                                  紅茶始祖 · 正山小種
                                </div>
                                <h4 className="mt-4 text-2xl md:text-3xl font-semibold text-stone-900">正山小種的歷史</h4>
                                <p className="mt-4 text-stone-700 leading-relaxed">
                                  作為世界紅茶的始祖，正山小種誕生至今迄今已有400多年的歷史。據史料記載，桐木在宋代稱崇安縣仁義鄉，這裡的勞動者主要經濟來源靠桐油及製作綠茶類的“龍團鳳餅”貢茶為生。由於桐油生產的繁榮，當地大量地種植油桐樹，受桐油發展的影響，這一地區地名曰桐木，這裡又是出入中原的關口，故曰桐木關，正山堂江氏家族世代生活於此。
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2 text-sm">
                                  <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-stone-700">
                                    <Map size={14} className="opacity-70" />
                                    桐木關
                                  </span>
                                  <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-stone-700">
                                    <Wind size={14} className="opacity-70" />
                                    松煙香
                                  </span>
                                  <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-stone-700">
                                    <History size={14} className="opacity-70" />
                                    400多年歷史
                                  </span>
                                </div>
                              </div>
                            </div>

                            <section className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
                              <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                                <History className="text-orange-700" size={20} />
                                <h5 className="text-lg md:text-xl font-bold text-stone-900">正山小種紅茶的由來</h5>
                              </div>
                              <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
                                <p>
                                  明朝中後期，時局動盪，約西元1568年的某天，正當採茶的季節，一隊官兵途經桐木，正山堂先祖江公為躲避襲擾，當天採摘的茶青沒有來得及製作茶葉，晚上官兵睡在了茶青上，官兵走後，原本做綠茶的茶葉已質變發紅，江公將發酵的茶葉反復揉搓，並用桐木盛產的馬尾松焙制。馬尾松在燃燒過程中，產生濃郁的松煙，茶葉吸收松煙後，色澤變得烏黑油潤，散發出獨特的松脂香味，第二年竟有人以綠茶的數倍價格訂購此茶，正山小種紅茶就這樣妙筆生花般地誕生了。
                                </p>
                                <p>
                                  16世紀末17世紀初（約1604年），正山小種被遠傳海外，由荷蘭商人帶入歐洲，最先它是以治病功能在藥店出售，而此時世界其他紅茶均未誕生。正山小種進入英國，是在倫敦家叫加威的咖啡館，向市民出售，價格高達6~10英鎊， 其在銷售海報中雲：質地溫和， 四季皆宜，飲品衛生、健康，有延年益壽之功效。但隨後紅茶風靡英國皇室乃至整個歐洲，並掀起流傳至今的“下午茶”風尚。
                                </p>
                                <p>
                                  威廉·烏克斯《茶葉全書》中記載: 1607年， 荷蘭東印度公司首次從中國嶺南的澳門採購武夷紅茶（即正山小種），經爪哇轉口銷售歐洲。當時歐洲茶葉市場主要是日本綠茶，正山小種味香醇厚，很快佔領了歐洲茶葉市場，紅茶迅速風靡英倫三島。這是對中國茶葉出口的最早記錄。
                                </p>
                                <p>
                                  1662年葡萄牙公主凱薩琳嫁給英皇查理二世時帶去幾箱中國“正山小種”紅茶作為嫁妝。隨後，安妮女王提倡以茶代酒，正山小種紅茶作為當時的珍品，被引入上流社會，逐漸演化成“下午茶”。
                                </p>
                                <p>
                                  《崇安縣新志》記載：“英吉利人雲，武夷茶色紅為瑪珊，質之佳過錫蘭、印度甚遠，凡以武夷茶待客者，客必起立致敬。”足見正山小種紅茶在當時上流社會備受青睞的程度。英國人親切地把茶葉稱為“香草”，上至貴族， 下至平民，都十分鍾愛紅茶。自此正山小種紅茶在歐洲歷史上成為中國紅茶的象徵，成為世界統飲名茶。
                                </p>
                                <p>
                                  1876年，祁門紅茶在正山小種紅茶的基礎上試製成功，隨後，中國各地的工夫紅茶也以沿襲正山小種工藝的方式，慢慢發展出了滇紅、閩南紅茶等各地工夫紅茶。
                                </p>
                              </div>
                            </section>

                            <section className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
                              <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                                <Tag className="text-orange-700" size={20} />
                                <h5 className="text-lg md:text-xl font-bold text-stone-900">為什麼叫正山小種紅茶</h5>
                              </div>
                              <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
                                <p>
                                  “正山小種”紅茶一詞在歐洲最早稱BOHEA，傳說中它是武夷地名的閩南語發音，在歐洲（英國）它是中國茶的象徵，後因貿易繁榮，當地人為區別其它假冒的小種紅茶（人工小種或煙小種）擾亂市場，故取名為“正山小種”。
                                </p>
                                <p>
                                  所謂“正山”，乃真正高山地區所產之意。其涵蓋範圍以武夷山桐木村的廟灣、江墩自然村為中心，北至江西鉛山石隴，南到武夷山曹墩百葉坪，東至武夷山大安村，西至光澤司前幹坑，西南至邵武龍湖觀音坑，方圓565平方公里。現大部分在福建武夷山國家級自然保護區。土壤肥沃，所產茶葉品質無它可比。
                                </p>
                                <p>
                                  “小種”指的是茶樹的品種。陸廷燦《續茶經》載《隨見錄》中提到：“武夷茶，在山上者為岩茶，水邊者為洲茶，......其最佳者，名曰工夫茶。工夫之上，又有小種，則以樹名為名。每株不過數兩，不可多得。”
                                </p>
                              </div>
                            </section>

                            <section className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
                              <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                                <Flame className="text-orange-700" size={20} />
                                <h5 className="text-lg md:text-xl font-bold text-stone-900">正山小種的製作</h5>
                              </div>
                              <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
                                <p>
                                  在武夷山的桐木關，有兩棟名為“青樓”的木樓，它是專門用來製作正山小種紅茶的工廠。
                                </p>
                                <p>
                                  從前的正山小種製作，需采一芽三四葉為原料，且雨天時不采，露水葉不采，烈日不采，前一天有雨也不采。桐木山中茶樹野生混雜，即使是最熟練的採茶工，一天也只能采回10公斤茶青。
                                </p>
                                <p>
                                  採摘下來的鮮葉，疏落有致的攤曬於木板或竹篾上，利用天氣、氣溫、濕度、風力，散發葉片當中的水分，使茶青變軟，能夠揉撚成條。利用馬尾松木燃燒控制萎凋時的溫度，每隔30分鐘，再次將茶青歸攏，重新攤曬，使每一道茶青能夠均勻鋪陳。
                                </p>
                                <p>
                                  當100斤鮮葉祛除40斤水分時，就是最佳的揉撚時機。揉撚不僅是塑造茶葉優美的外形，更是為了破壞細胞，加速氧化。
                                </p>
                                <p>
                                  發酵，是形成紅茶色、香、味品質特徵的最關鍵工序，在竹編的茶簍中，蓋上濕布，等待七個小時，茶葉就會由青綠色變為古銅色，香氣也變得更加悠然。
                                </p>
                                <p>
                                  過紅鍋是正山小種獨有的一道工序，以180度高溫阻止茶葉繼續發酵，也給茶葉提香，增加回甘。
                                </p>
                                <p>
                                  緊接著，將茶青鋪在竹篾上，馬尾松緩緩燃燒在地底的火灶中，松煙隨著磚縫傳到乾燥間，茶葉在竹篾中，被老松木燃燒所釋放的松香包裹環繞。溫度蒸發了茶青中的多餘水分，也為正山小種注入最後的煙熏香。這種用馬尾松煙薰制作的正山小種紅茶，有著濃重的松木熏香，以及難忘的桂圓甜香。
                                </p>
                                <p>
                                  十餘小時後，桐木關出產的傳統正山小種紅茶便得以製成。沸水之下，松煙香混雜桂圓和若有似乎的果香縈繞鼻尖。緩慢薰制的松香經久不散，沖泡多次仍然韻味十足。
                                </p>
                              </div>
                            </section>

                            <section className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
                              <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                                <Scale className="text-orange-700" size={20} />
                                <h5 className="text-lg md:text-xl font-bold text-stone-900">正山小種與外山小種有什麼區別</h5>
                              </div>
                              <div className="px-6 py-6 space-y-4 text-stone-800 leading-relaxed">
                                <p>
                                  正山小種紅茶的國家標準GB/T13738中指出：正山小種必須採用以武夷山國家級自然保護區內桐木村的廟灣、江墩自然村為中心，方圓565平方公里內茶樹原料，以小種紅茶傳統工藝製作，具有松煙香和桂圓幹香味。
                                </p>
                                <p>正山小種與外山小種的區別就在於：</p>
                                <div className="space-y-2 rounded-2xl border border-stone-200 bg-stone-50 p-5">
                                  <p>‧ 地域範圍界定：正山小種紅茶原產地就在武夷山桐木關。據《中國茶經》記載“桐木之內，方為正山”，凡是桐木關所產的茶，均稱作正山。而武夷山附近或者其他地區所產的茶稱外山，以區別桐木關以外所產的小種紅茶。</p>
                                  <p>‧ 製作工藝要求：正山小種為紅茶的始祖，也是紅茶中最為經典與傳統的茶種，真正的正山小種紅茶需要以武夷山地區高山茶樹茶葉為原料，以傳統技藝並經過馬尾松的天然煙焙工藝制得。</p>
                                  <p>‧ 品質上的差異：正山小種乃是高山茶，具備特殊的高山韻，滋味醇厚，且耐沖泡耐存放，外山小種大多是低山茶葉，底蘊薄，且不耐沖泡。</p>
                                </div>
                                <div className="rounded-2xl border border-stone-200 bg-white p-5">
                                  目前市場上的正山小種由於原料稀缺或工藝不完善，絕大多數並不產於武夷山本地，且是使用工夫紅茶工藝製作，不具有松煙香。屬於無生產日期、無品質合格證、無生產標準以及無生產廠家，來路不明的產品。有的甚至在表面加糖以增加甜味。
                                </div>
                              </div>
                            </section>
                          </div>
                        </SectionCard>
                      ) : null}
                      {redTeaHref === '#red-jinjunmei' ? (
                        <SectionCard id="red-jinjunmei" title="金駿眉" icon={Leaf}>
                          <div className="space-y-8 text-stone-700 leading-relaxed">
                            <h4 className="text-2xl font-bold text-stone-900">金駿眉的誕生：首泡製茶人的歷史溯源</h4>

                            <section className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6 shadow-sm">
                              <h5 className="text-lg font-bold text-stone-900">1. 緣起：一款出口名茶的國內市場叩問</h5>
                              <div className="mt-4 space-y-3">
                                <p>
                                  作為歷史悠久、享譽海外的紅茶，正山小種長期以來幾乎完全面向出口市場，在國外聲名顯赫，但在國內卻鮮為人知。這種「牆內開花牆外香」的市場格局，既是其發展的獨特背景，也成為了催生一款全新高端紅茶——金駿眉的根本前提。
                                </p>
                                <p>
                                  此一轉變的開端，源於幾位北京友人的到訪。根據首泡製作人梁駿德師傅回憶，當時來自北京的張姓、閻姓及孫姓友人來到武夷山桐木村，在親身體驗了當地優異的生態環境與正山小種的卓越品質後，他們敏銳地提出了一個核心問題：「品質這麼好，為什麼不走國內市場？」這個看似簡單的提問，實則點燃了正山小種革新的火種，挑戰了其百年來的經營慣性。
                                </p>
                                <p>
                                  正是這個直指核心的市場探討，催化了後續的創新思維，為一場充滿未知的製茶實驗埋下了伏筆。
                                </p>
                              </div>
                            </section>

                            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm">
                              <h5 className="text-lg font-bold text-stone-900">2. 契機：一次源於夏茶的試驗性挑戰</h5>
                              <div className="mt-4 space-y-3">
                                <p>
                                  從一個想法到付諸行動，往往需要一個恰當的契機。雖然早在2003年，梁師傅便有過採摘茶芽製作頂級紅茶的初步構想，但因單芽採摘難度大、成本過高而被迫擱置。真正觸發行動的，是2005年一個看似無關的觀察，其高明之處在於，它以一種低風險的方式，巧妙地化解了兩年前成本過高的核心難題。
                                </p>
                                <p>
                                  2005年，北京友人重訪桐木，看到山上長勢極佳的夏茶時，再次提出了建議：「老梁，夏茶長得那麼漂亮，能不能去採點夏茶來做試驗？」並具體提議「採單芽」。這個想法極具顛覆性，挑戰了當地世代相傳的製茶教條——「桐木歷史以來是從不採夏茶的」。梁師傅從中看到了跨界思維的可能性，他分析道：「採芽能做白茶，採芽能做綠茶，我們採點芽來做紅茶。」這意味著將其他茶類的頂級原料標準，引入紅茶的製作中，是一次前所未有的挑戰。
                                </p>
                                <p>
                                  梁師傅最終決定接受這場挑戰，其背後是身為製茶大師極為務實的風險評估。他認為，以夏茶為原料進行試驗，是絕佳的選擇：「如果萬一不成功，損失不大。」這種將風險降至最低的精準判斷，為這次大膽的實驗掃清了障礙，使其得以在2005年6月7日付諸實行。
                                </p>
                                <p>
                                  然而，隨著不足兩斤的珍貴茶芽採摘完成，一個更為嚴峻的挑戰擺在眼前：在沒有任何適用工具的條件下，團隊必須即時開創一套全新的製茶工藝。
                                </p>
                              </div>
                            </section>

                            <section className="rounded-2xl border border-sky-200 bg-sky-50/70 p-6 shadow-sm">
                              <h5 className="text-lg font-bold text-stone-900">3. 首泡工藝：四大製程的挑戰與即時創新</h5>
                              <div className="mt-4 space-y-3">
                                <p>
                                  首泡金駿眉的製作過程，是一場在既有條件下不斷應變與創新的經典示範。由於原料僅有不足兩斤的單芽，其嬌嫩程度與稀少數量，使得傳統的正山小種製茶設備與方法完全不適用。這迫使梁師傅必須在萎凋、揉捻、發酵、烘乾四大核心環節中，進行一系列即興的技術革新。
                                </p>
                                <p>
                                  北京友人見到鮮葉後興奮不已，催促道：「老梁，好香啊，這個晚上把它做起來。」梁師傅則幽默地回應：「晚上我要睡覺。」
                                </p>
                                <p>
                                  這段對話，生動地反映了當時眾人對這場實驗的極度期待。
                                </p>
                              </div>

                              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                                <div className="space-y-2 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                  <div className="text-base font-semibold text-sky-700">第一項創新：無煙萎凋</div>
                                  <p>‧ 挑戰情境： 在沒有現代萎凋槽的條件下，如何處理這批珍貴的鮮葉成為首要難題。傳統的「青樓」會帶來煙味，而炭火則因溫度不均、空氣不流通而被梁師傅斷然否定。</p>
                                  <p>‧ 解決方案： 梁師傅急中生智，想到了當時用於夜間取暖的「小太陽」燈。他將鮮葉置於篩上，透過調整燈的高度來精準控制溫度。此舉不僅是個簡單的應變，更是一項奠定品質基礎的哲學性突破。它成功實現了可控且完全無煙的萎凋，首次確立並保護了金駿眉獨特的、純淨的花果蜜香基因，使其徹底擺脫了傳統正山小種的松煙氣息。</p>
                                </div>

                                <div className="space-y-2 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                  <div className="text-base font-semibold text-sky-700">第二項創新：玻璃板揉捻</div>
                                  <p>‧ 挑戰情境： 萎凋完成後，茶芽極其細嫩，傳統的竹製或木製揉捻工具過於粗糙，極易破壞其完整性。</p>
                                  <p>‧ 解決方案： 梁師傅注意到辦公桌上的玻璃板，這看似簡單的選擇，實則是對材料科學的直覺性應用。玻璃表面光滑、無孔、摩擦力低，既能有效幫助茶芽塑形，又絲毫不會磨損其嬌嫩的葉面，完美保全了芽頭的品相與內部細胞結構。</p>
                                </div>

                                <div className="space-y-2 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                  <div className="text-base font-semibold text-sky-700">第三項創新：濕熱毛巾發酵</div>
                                  <p>‧ 挑戰情境： 紅茶發酵需依靠茶葉自身堆積產生的溫度，但由於茶葉量太少，完全無法達到發酵所需的溫濕度條件。</p>
                                  <p>‧ 解決方案： 梁師傅再次展現了非凡的智慧。他將茶葉放入審評盤中，用熱水燙過的濕毛巾包裹覆蓋。此法巧妙地模擬出一個微型發酵環境，藉由外部的濕熱條件，為茶葉創造了發酵所需的溫度與濕度，確保了發酵環節的順利完成。</p>
                                </div>

                                <div className="space-y-2 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                  <div className="text-base font-semibold text-sky-700">第四項創新：火盆烘乾</div>
                                  <p>‧ 挑戰情境： 最後的烘乾環節，同樣需要避免任何煙味，以保持茶葉最終的純淨香氣。</p>
                                  <p>‧ 解決方案： 梁師傅利用了農村常見的烤火火盆，在上方放置平圓篩進行烘乾。此方法不僅巧妙地達成了均勻受熱，更徹底杜絕了煙燻的可能，為這泡茶的純淨香氣畫上了完美的句點。</p>
                                </div>
                              </div>

                              <div className="mt-5 rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                                這四個環節的即時創新，不僅逐一攻克了眼前的技術難題，更共同塑造了一套全新的製茶哲學，為金駿眉獨一無二的品質基因奠定了堅實的工藝基礎。
                              </div>
                            </section>

                            <section className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6 shadow-sm">
                              <h5 className="text-lg font-bold text-stone-900">4. 命名與分級：從「駿眉」到金、銀、銅的體系確立</h5>
                              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                                <div className="space-y-2 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm">
                                  <div className="text-base font-semibold text-rose-700">解析初次命名「駿眉」</div>
                                  <p>‧ 品鑑場景： 第二天清晨，當北京友人看到烘乾後的茶葉時，無不為之驚嘆。友人聞香後，不禁讚嘆其香氣層次豐富：「老梁啊，有花香、有果香，還有蜜香。」</p>
                                  <p>‧ 命名邏輯： 這次的成功，實現了團隊長久以來的夙願。正如友人所言：「我們通過一兩年的考慮終於做出一泡高端的紅茶。」在命名時，友人提議，茶葉外形細長如眉毛，故可取一個「眉」字。同時，為了紀念這泡茶的誕生，並向首泡製作者梁駿德師傅致敬，決定取其名中「駿」字。於是，「駿眉」這個名字便應運而生。</p>
                                </div>
                                <div className="space-y-2 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm">
                                  <div className="text-base font-semibold text-rose-700">闡述「金駿眉」的誕生與分級</div>
                                  <p>‧ 產品線擴展： 在成功製作單芽後，團隊緊接著嘗試採摘一芽一葉進行製作，發現其口感同樣非常出色。這次的成功，促使他們意識到建立一套標準化分級體系的必要性。</p>
                                  <p>‧ 建立分級標準： 基於這次的成功經驗，一套依據採摘標準劃分的清晰分級體系得以確立，並以金、銀、銅來命名：</p>
                                  <div className="mt-3 space-y-2">
                                    <div className="flex flex-wrap items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-stone-700">
                                      <span className="rounded-full border border-amber-300 bg-white px-2 py-0.5 text-xs font-semibold text-amber-700">金</span>
                                      <span>專指以單芽製作的最高等級，即「金駿眉」。</span>
                                    </div>
                                    <div className="flex flex-wrap items-start gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700">
                                      <span className="rounded-full border border-stone-300 bg-white px-2 py-0.5 text-xs font-semibold text-stone-700">銀</span>
                                      <span>指以一芽一葉製作的等級，即「銀駿眉」。</span>
                                    </div>
                                    <div className="flex flex-wrap items-start gap-2 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-stone-700">
                                      <span className="rounded-full border border-orange-300 bg-white px-2 py-0.5 text-xs font-semibold text-orange-700">銅</span>
                                      <span>指以一芽兩葉製作的等級，即「銅駿眉」。</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-2 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm">
                                  <div className="text-base font-semibold text-rose-700">辨析「駿」字之謎</div>
                                  <p>‧ 提出疑問： 隨著金駿眉聲名鵲起，外界對於為何使用代表馬的「駿」字，而非代表桐木崇山峻嶺的「峻」字，產生了諸多猜測與討論。</p>
                                  <p>‧ 揭示真相： 根據梁師傅的澄清，後續為回應外界的疑問，命名者提出了「因為茶的外形像馬」的官方解釋。他強調，這才是「最真實的一個來歷」，為這場長久以來的字義之爭提供了最終的註解。</p>
                                </div>
                              </div>
                              <div className="mt-4 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm">
                                隨著工藝的成熟與命名的確立，金駿眉不僅擁有了一個響亮的名字，更建立了一套完善的產品標準，為其正式進入市場並引領行業風潮做好了萬全的準備。
                              </div>
                            </section>

                            <section className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6 shadow-sm">
                              <h5 className="text-lg font-bold text-stone-900">5. 歷史定位：引領正山小種開拓國內市場的里程碑</h5>
                              <div className="mt-4 space-y-3">
                                <p>
                                  金駿眉的誕生，其意義遠不止於一款高端紅茶的問世。它是一個重要的歷史轉折點，從根本上改變了正山小種的市場格局，並深刻影響了整個中國紅茶產業的發展。
                                </p>
                                <p>
                                  首先，金駿眉的成功，直接終結了正山小種數百年來幾乎完全依賴出口的歷史。它以超凡的品質與獨特的魅力，迅速立足於國內高端茶葉市場，實現了從外銷到內銷的華麗轉身。
                                </p>
                                <p>
                                  更為重要的是，金駿眉獲得了行業的廣泛認可與推崇。正如梁師傅所總結，金駿眉之所以能有今日的地位，「正因為全國茶葉產區，大家都在捧這泡茶」。這種跨越產區的現象級追捧，迅速鞏固了其作為頂級紅茶的標竿地位，並引領了一波紅茶創新的風潮。
                                </p>
                                <p>
                                  綜上所述，金駿眉的誕生是一個結合了偶然契機、匠心創新與市場遠見的傳奇故事。它不僅為正山小種注入了全新的活力，更為中國紅茶的發展歷史，寫下了濃墨重彩的一筆。
                                </p>
                              </div>
                            </section>
                          </div>
                        </SectionCard>
                      ) : null}
                    </>
                  ) : null}

                  {!kindTea && varietiesKind !== 'oolong' && varietiesKind !== 'red' ? (
                    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 text-stone-700">
                      找不到對應茶類資料，請重新選擇上方子分類。
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
          </AtlasDockLayout>
        </div>
      </div>
    );
  };

  // PuerhSection extracted to src/sections/PuerhSection.jsx

  // SeasonsSection extracted to src/sections/SeasonsSection.jsx

  const FeaturedTeaSection = () => {
    const notesMode = UI_FLAGS.notesMode;
    const [selectedFeatured, setSelectedFeatured] = useState(() => featuredTeaMenu?.[0]?.id ?? 'tieguanyin');
    const [showFeaturedAtlas, setShowFeaturedAtlas] = useState(!notesMode);
    const [orientalBeautySection, setOrientalBeautySection] = useState('main');
    const [featuredSidebarWidth, setFeaturedSidebarWidth] = useState(() => {
      if (typeof window === 'undefined') return 260;
      const raw = window.localStorage?.getItem('tea.featuredSidebarWidth');
      const parsed = raw ? Number(raw) : NaN;
      if (!Number.isFinite(parsed)) return 260;
      return Math.min(Math.max(parsed, 220), 420);
    });
    const featuredTopRef = React.useRef(null);
    const featuredDidMountRef = React.useRef(false);
    const featuredSidebarOffsetPx = siteNavHeightPx + 48;
    const scrollToFeaturedTop = () => {
      if (typeof window === 'undefined') return;
      featuredTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const getReadableTextClass = (hexColor) => {
      if (typeof hexColor !== 'string' || !hexColor.startsWith('#')) return 'text-white';
      const hex = hexColor.replace('#', '').trim();
      const normalized = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
      if (normalized.length !== 6) return 'text-white';
      const r = parseInt(normalized.slice(0, 2), 16);
      const g = parseInt(normalized.slice(2, 4), 16);
      const b = parseInt(normalized.slice(4, 6), 16);
      if (![r, g, b].every((n) => Number.isFinite(n))) return 'text-white';
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      return luminance > 0.72 ? 'text-[color:rgba(15,23,42,0.95)]' : 'text-white';
    };

    useEffect(() => {
      const applyFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const tea = params.get('tea');
        if (tea && featuredTeaMenu.some((item) => item.id === tea)) {
          setSelectedFeatured(tea);
        }
      };

      applyFromUrl();
      window.addEventListener('popstate', applyFromUrl);
      return () => window.removeEventListener('popstate', applyFromUrl);
    }, []);

    useEffect(() => {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      if (params.get('tea') !== selectedFeatured) {
        params.set('tea', selectedFeatured);
        window.history.replaceState(null, '', `${url.pathname}?${params.toString()}${url.hash}`);
      }

      // Removed auto-scroll on mount to prevent page from jumping down
      // if (featuredDidMountRef.current) {
      //   featuredTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // } else {
      //   featuredDidMountRef.current = true;
      // }
    }, [selectedFeatured]);

    useEffect(() => {
      if (typeof window === 'undefined') return;
      try {
        window.localStorage?.setItem('tea.featuredSidebarWidth', String(featuredSidebarWidth));
      } catch {
        // ignore
      }
    }, [featuredSidebarWidth]);

    const handleFeaturedResize = (newWidth) => {
      const clamped = Math.min(Math.max(newWidth, 220), 420);
      setFeaturedSidebarWidth(clamped);
    };


    return (
      <div className="museum-page min-h-screen">
        <div className="museum-stage">
          {notesMode && (
            <div className="mb-10 museum-panel p-7 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="min-w-0">
                  <div className="museum-label">
                    <Leaf size={14} className="opacity-80" />
                    TEA HOUSE · NOTES
                  </div>
                  <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">台灣特色茶｜筆記卡</h2>
                  <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                    先用筆記卡建立台灣特色茶的「風味與代表性」直覺；需要查細節時再展開百科（每一款茶都有完整內容與章節）。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowFeaturedAtlas(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                  >
                    展開百科
                    <ChevronRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowFeaturedAtlas(true);
                      setSelectedFeatured('tieguanyin');
                      featuredTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                  >
                    直接看鐵觀音
                    <ChevronRight size={16} className="text-emerald-700" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">FOCUS</div>
                  <div className="mt-1 font-bold text-stone-900">代表性風味</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">每款茶用一句話抓住「香氣／口感／茶性」。</div>
                </div>
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
                  <div className="mt-1 font-bold text-stone-900">適合教學引用</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">章節化內容方便老師挑選段落做講義。</div>
                </div>
                <div className="museum-card px-5 py-4">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">FLOW</div>
                  <div className="mt-1 font-bold text-stone-900">回到沖泡</div>
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed">特色茶最後都回到「怎麼泡更好喝」。</div>
                </div>
              </div>
            </div>
          )}

          {!notesMode || showFeaturedAtlas ? (
            <div
              className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0"
              style={{ '--featured-sidebar-width': `${featuredSidebarWidth}px` }}
            >
              {/* Sidebar Navigation for Featured Teas */}
              <div className="featured-sidebar w-full md:w-auto mb-8 md:mb-0 self-start">
                <PinnedChapterSidebar
                  topOffsetPx={featuredSidebarOffsetPx}
                  pinFrom="md"
                  wrapperClassName="w-full"
                >
                  <div
                    className="rounded-2xl backdrop-blur shadow-sm p-3 pb-4 tool-surface tool-surface--strong overflow-y-auto"
                    style={{
                      maxHeight: `calc(100vh - ${featuredSidebarOffsetPx}px - 24px)`,
                      scrollPaddingBottom: '24px',
                    }}
                  >
                    <h3 className="text-lg font-extrabold text-stone-900 mb-3 px-2 border-l-4 border-amber-600">
                      台灣特色茶
                    </h3>
                    <div className="space-y-2 pb-2">
                      {featuredTeaMenu.map((item) => {
                        const isActive = selectedFeatured === item.id;
                        const activeTextClass = getReadableTextClass(item.swatch);
                        return (
                          <React.Fragment key={item.id}>
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedFeatured(item.id);
                                if (item.id === 'orientalbeauty') {
                                  setOrientalBeautySection('main');
                                }
                                scrollToFeaturedTop();
                              }}
                              className={`group w-full text-left px-3 py-2 rounded-xl transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${isActive
                                ? `${activeTextClass} border-stone-200 ring-1 ring-black/10`
                                : 'tool-item tool-item--panel'
                                }`}
                              style={
                                isActive
                                  ? {
                                    backgroundColor: item.swatch,
                                    backgroundImage:
                                      'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))',
                                  }
                                  : undefined
                              }
                            >
                              <div className="flex items-start gap-2">
                                <span
                                  className="mt-1 inline-block w-3 h-3 rounded-sm border border-stone-200 bg-white/60"
                                  style={{ backgroundColor: item.swatch }}
                                  aria-hidden="true"
                                />
                                <div className="min-w-0">
                                  <span className="block font-extrabold text-lg leading-snug truncate">
                                    {item.label}
                                  </span>
                                  <span
                                    className={`block text-sm mt-1 truncate ${isActive ? 'opacity-90' : 'tool-muted'}`}
                                  >
                                    {item.subtitle}
                                  </span>
                                </div>
                              </div>
                            </button>
                            {isActive && item.id === 'orientalbeauty' ? (
                              <div className="mt-2 ml-4 space-y-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setOrientalBeautySection('main');
                                    scrollToFeaturedTop();
                                  }}
                                  className={`w-full text-left rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${orientalBeautySection === 'main'
                                    ? 'tool-subitem--active'
                                    : 'hover:bg-[var(--tool-hover-bg)]'
                                    }`}
                                >
                                  東方美人
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setOrientalBeautySection('origins');
                                    scrollToFeaturedTop();
                                  }}
                                  className={`w-full text-left rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${orientalBeautySection === 'origins'
                                    ? 'tool-subitem--active'
                                    : 'hover:bg-[var(--tool-hover-bg)]'
                                    }`}
                                >
                                  東方美人茶的前世
                                </button>
                              </div>
                            ) : null}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </PinnedChapterSidebar>
              </div>

              <ResizableDivider
                onResize={handleFeaturedResize}
                minWidth={220}
                maxWidth={420}
                className="hidden md:flex"
              />

              {/* Content Area */}
              <div className="flex-1 min-w-0 md:pl-8">
                <div ref={featuredTopRef} className="scroll-mt-28" />
                {selectedFeatured === 'overview' && <FeaturedTeaOverview />}
                {selectedFeatured === 'longjing' && <LongjingTeaArticle />}
                {selectedFeatured === 'biluochun' && <BiluochunGreenTeaContent />}
                {selectedFeatured === 'tieguanyin' && <TieGuanyinContent />}
                {selectedFeatured === 'dongding' && <DongDingContent />}
                {selectedFeatured === 'gaoshanoolong' && <GaoshanOolongContent />}
                {selectedFeatured === 'redoolong' && <RedOolongContent />}
                {selectedFeatured === 'honeyblack' && <HoneyAromaBlackTeaContent />}
                {selectedFeatured === 'orientalbeauty' && (
                  <OrientalBeautyContent activeSection={orientalBeautySection} />
                )}
                {selectedFeatured === 'wenshan' && <WenshanPouchongContent />}
                {selectedFeatured === 'black_smallleaf' && <SmallLeafBlackTeaContent />}
                {selectedFeatured === 'black_largeleaf' && <LargeLeafBlackTeaContent />}
              </div>
            </div>
          ) : notesMode ? (
            <div className="museum-panel p-7 md:p-10 text-center">
              <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
              <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開台灣特色茶百科</div>
              <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                百科包含：碧螺春綠茶、文山包種茶、高山烏龍茶、凍頂烏龍茶、鐵觀音茶、東方美人茶、紅烏龍茶、蜜香紅茶、小葉種紅茶、大葉種紅茶。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setShowFeaturedAtlas(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                >
                  展開百科內容
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  // BrewingGuide extracted to src/sections/BrewingGuideSection.jsx

  const TeaCeremonySection = () => {
    const [ceremonyTab, setCeremonyTab] = useState('philosophy');
    const [showAllUtensils, setShowAllUtensils] = useState(false);
    const ceremonySectionRef = useRef(null);
    const [sidebarWidth, setSidebarWidth] = useState(() => {
      if (typeof window === 'undefined') return 300;
      const raw = window.localStorage?.getItem('tea.ceremonySidebarWidth');
      const parsed = raw ? Number(raw) : NaN;
      if (!Number.isFinite(parsed)) return 300;
      return Math.min(Math.max(parsed, 200), 500);
    });

    const handleCeremonyTabChange = (tabId) => {
      setCeremonyTab(tabId);
      // Scroll to top of section
      if (ceremonySectionRef.current) {
        ceremonySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const handleResize = (newWidth) => {
      setSidebarWidth(newWidth);
    };

    useEffect(() => {
      if (typeof window === 'undefined') return;
      try {
        window.localStorage?.setItem('tea.ceremonySidebarWidth', String(sidebarWidth));
      } catch {
        // ignore
      }
    }, [sidebarWidth]);

    return (
      <div className="museum-page" ref={ceremonySectionRef}>
        <div className="museum-stage">
          <div className="mb-12 museum-panel p-8 md:p-12 text-center">
            <div className="museum-label mx-auto">EXHIBIT · CEREMONY</div>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">茶席美學</h2>
            <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">轉心成象，以器載道。從一杯茶湯中看見藝術與修養。</p>
          </div>

          {/* Two-Column Layout with Resizable Divider */}
          <div className="flex gap-0">
            {/* Left Sidebar Navigation */}
            <div style={{ width: `${sidebarWidth}px`, minWidth: '200px', maxWidth: '500px' }}>
              <div className="md:sticky md:top-24 space-y-3 pr-4">
                {[
                  { id: 'philosophy', label: '茶藝精神', subtitle: 'Philosophy', icon: <Feather size={22} />, color: 'text-purple-600' },
                  { id: 'utensils', label: '器物之美', subtitle: 'Utensils', icon: <Palette size={22} />, color: 'text-pink-600' },
                  { id: 'setup', label: '茶席佈置', subtitle: 'Setup', icon: <Layout size={22} />, color: 'text-blue-600' },
                  { id: 'ritual', label: '事茶儀軌', subtitle: 'Ritual', icon: <Scroll size={22} />, color: 'text-amber-600' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleCeremonyTabChange(tab.id)}
                    className={`
                      w-full px-5 py-4 rounded-xl border-2 transition-all duration-300
                      flex items-center gap-4 text-left relative
                      ${ceremonyTab === tab.id
                        ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-400 shadow-md'
                        : 'bg-white border-stone-200 hover:border-emerald-300 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className={`transition-transform duration-300 flex-shrink-0 ${ceremonyTab === tab.id ? 'scale-110' : ''} ${tab.color}`}>
                      {tab.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-bold text-lg ${ceremonyTab === tab.id ? 'text-emerald-900' : 'text-stone-800'}`}>
                        {tab.label}
                      </div>
                      <div className={`text-sm ${ceremonyTab === tab.id ? 'text-emerald-600' : 'text-stone-500'}`}>
                        {tab.subtitle}
                      </div>
                    </div>
                    {ceremonyTab === tab.id && (
                      <div className="w-1 h-8 bg-emerald-500 rounded-full absolute right-0"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Resizable Divider */}
            <ResizableDivider onResize={handleResize} minWidth={200} maxWidth={500} />

            {/* Right Content Area */}
            <div className="flex-1 min-w-0 pl-8">
              <div className="min-h-[500px]">

                {/* 1. Philosophy */}
                {ceremonyTab === 'philosophy' && (
                  <div className="animate-fadeIn space-y-12">
                    <div className="bg-stone-50 p-8 md:p-12 rounded-2xl border border-stone-200 text-center">
                      <h3 className="text-2xl font-bold text-stone-800 mb-6">什麼是茶藝？</h3>
                      <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto mb-8">
                        以茶為本質，透過藝術的形式、揭示的過程，作用於茶湯。<br />
                        形式可繁可簡，都是為了定調茶的氣場。
                      </p>
                      <div className="bg-white p-6 rounded-xl shadow-sm text-left mb-8 border-l-4 border-stone-400">
                        <h4 className="font-bold text-stone-800 mb-2">轉心成象，是藝術；轉象成心，是智慧</h4>
                        <p className="text-stone-600 mb-4">
                          王羲之在《蘭亭序》有講：「心之所向」。心想要什麼，就往那個方向走。<br />
                          藝術其實就是把心中的感受變成外在的形式成象。比方說，貝多芬的命運交響曲，就是生命狀態、心情，用音符成了曲，變成了聽得到的音樂藝術。
                        </p>
                        <p className="text-stone-600">
                          手，傳遞的是我的心。同樣的茶，不同的人泡，滋味就不一樣。
                        </p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                          <span className="text-stone-400 text-xs font-bold uppercase">Tang Dynasty</span>
                          <h4 className="font-bold text-stone-800 text-lg mb-2">唐・肯定時期</h4>
                          <p className="text-sm text-stone-600">陸羽《茶經》問世，奠定茶道規矩。飲茶從解渴昇華為精神文化。</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                          <span className="text-stone-400 text-xs font-bold uppercase">Song Dynasty</span>
                          <h4 className="font-bold text-stone-800 text-lg mb-2">宋・開展時期</h4>
                          <p className="text-sm text-stone-600">文風鼎盛，鬥茶風氣興起。蔡襄《茶錄》與蘇軾詩詞，將茶藝推向審美高峰。</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                          <span className="text-stone-400 text-xs font-bold uppercase">Ming Dynasty</span>
                          <h4 className="font-bold text-stone-800 text-lg mb-2">明・發皇時期</h4>
                          <p className="text-sm text-stone-600">朱元璋罷造團茶，散茶興起。文人雅士講求「雅、適、靜」，奠定現代泡茶法基礎。</p>
                        </div>
                      </div>
                      <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100 text-left">
                        <h4 className="font-bold text-green-800 mb-2 flex items-center"><Globe size={18} className="mr-2" /> 台灣茶藝的獨特性</h4>
                        <p className="text-stone-700 text-sm leading-relaxed">
                          台灣的茶藝雖本於明朝，卻顯現出更豐富的面相。它是台灣文化建構上極富特色及文化厚度的一環。
                          台灣發展的茶藝對茶器、茶種、茶湯、事茶技巧皆有獨到講究，希望品茗者能在賞茶色、聞茶香、品茶味，聽茶聲中進入茶的五感世界。
                        </p>
                      </div>
                    </div>

                    {/* Sino-Japanese Comparison */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 mt-12">
                      <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">茶藝與茶道</h3>
                      <div className="space-y-8">
                        <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-stone-400">
                          <h4 className="font-bold text-xl text-stone-800 mb-3">唐朝盛行喝茶之道</h4>
                          <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                            所謂「茶道」是指品茗的方法及意境。最早出現關於「茶道」記載者為「封氏聞見記」中的「因鳴漸之論潤色之，於是茶道大行。」鴻漸就是有名的茶學專家陸羽。
                            由於陸羽的大力提倡，因此喝茶之道在唐宋時非常盛行。日本在此時派了許多留學生到中國求學，在求知的過程中，也把茶的一切帶回了日本。日本天平元年（西元七二九年）武聖天皇召僧侶誦經後，贈予中國輸入的「團茶」，這是日本引進中國「茶道」最早且最可信的記載。
                          </p>
                        </div>

                        <div className="space-y-8">
                          {/* Japanese Tea Ceremony */}
                          <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-red-500">
                            <h4 className="font-bold text-xl text-red-800 mb-3">日本樹立了「茶道」精神</h4>
                            <div className="text-stone-600 mb-4 text-sm leading-relaxed space-y-3">
                              <p>至延暦二十四年（八〇五年）日本僧侶最澄來中國研習佛學，歸國之時帶回茶籽，種於比叡山之麓，此爲現今日本最古老的茶園。</p>
                              <p>平安朝初期，因爲貴族、僧侶及文人之間模倣中國文化，所以喫茶之風也開始盛行。建久（一一九一年）及建仁二年（一二〇二年）榮西禪師來華留學兩次，帶回了茶種及「抹茶」的製法，並且將來華學習的心得寫成「喫茶養生記」一書，又將中國百丈禪師的「百丈清規」傳入日本，做為他們行「茶禮」的藍本；於是日本飲茶之風才算是徹底風行。</p>
                              <p>十五世紀時奈良村田的珠光氏綜合了「茶數寄」與「茶寄合」，再吸收中國儒家、佛教文化的優點，倡導「奠茶奠湯」、「一味同心」的精神。並用日本自製的陶瓷爲茶具，創立了日本獨特的「茶道」。</p>
                              <p>武野紹鷗再繼承珠光的遺志，將「茶道」加以改良重整，茶室也由「書院式」改成了「草庵式」，使茶道能更大衆化。後來武野將此學傳給千利休。他深深瞭解中、日禪師創「茶禮」、行「茶道」的精義，並貫通了中國古代的「清靜怡情」和「百丈清規」的眞諦，樹立了日本「茶道」的基本精神：「和敬清寂。」</p>
                            </div>
                          </div>
                          {/* Chinese Tea Art */}
                          <TeaArtSpirit />
                        </div>
                      </div>
                      <p className="mt-8 text-center text-stone-500 italic text-sm">我們實在不忍也不願看著原本屬於茶的一切就此煙消雲散... 祈望能藉此重新燃起您對它的關切與熱愛。</p>
                    </div>
                  </div>
                )}

                {/* 2. Utensils */}
                {ceremonyTab === 'utensils' && (
                  <div className="animate-fadeIn space-y-12">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-stone-800">器物與茶性的對話</h3>
                      <p className="text-stone-600 mt-2">「器亦有道」。非數之繁備，乃器之可愛。久用手澤潤成記憶，此之謂道器並重。</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white p-6 rounded-xl border-t-4 border-stone-200 shadow-sm hover:-translate-y-1 transition-transform">
                        <h4 className="font-bold text-xl text-stone-800 mb-3">瓷質 (Porcelain)</h4>
                        <p className="text-xs text-stone-500 mb-4">細緻高頻、潔白精緻</p>
                        <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                          <strong className="block mb-1 text-stone-900">適合：</strong>
                          綠茶、文山包種、高山烏龍、白毫烏龍、紅茶。
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-t-4 border-stone-400 shadow-sm hover:-translate-y-1 transition-transform">
                        <h4 className="font-bold text-xl text-stone-800 mb-3">炻質 (Stoneware)</h4>
                        <p className="text-xs text-stone-500 mb-4">堅實陽剛、高香厚實</p>
                        <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                          <strong className="block mb-1 text-stone-900">適合：</strong>
                          黃茶、白茶、鐵觀音、凍頂烏龍、水仙。
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-t-4 border-amber-800 shadow-sm hover:-translate-y-1 transition-transform">
                        <h4 className="font-bold text-xl text-stone-800 mb-3">陶質 (Pottery)</h4>
                        <p className="text-xs text-stone-500 mb-4">粗曠低沉、樸實自然</p>
                        <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                          <strong className="block mb-1 text-stone-900">適合：</strong>
                          重焙火茶、陳年普洱、老茶。
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-t-4 border-sky-300 shadow-sm hover:-translate-y-1 transition-transform">
                        <h4 className="font-bold text-xl text-stone-800 mb-3">玻璃 (Glass)</h4>
                        <p className="text-xs text-stone-500 mb-4">視覺通透、觀賞性佳</p>
                        <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                          <strong className="block mb-1 text-stone-900">適合：</strong>
                          碧螺春、龍井（觀賞嫩芽舒展）。
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                        <h4 className="font-bold text-lg text-stone-800 mb-4 flex items-center"><Palette className="mr-2" /> 釉色美學</h4>
                        <div className="space-y-4 text-sm">
                          <div>
                            <span className="font-bold text-green-700 block mb-1">青瓷/淡綠色</span>
                            <p className="text-stone-600">協調綠茶、包種茶的清揚。</p>
                          </div>
                          <div>
                            <span className="font-bold text-stone-700 block mb-1">凝脂/乳白</span>
                            <p className="text-stone-600">襯托白毫烏龍或黃茶的嬌嫩。</p>
                          </div>
                          <div>
                            <span className="font-bold text-amber-900 block mb-1">鐵紅/紫金/鈞黑</span>
                            <p className="text-stone-600">呼應凍頂、鐵觀音的深沉韻味。</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                        <h4 className="font-bold text-lg text-stone-800 mb-4 flex items-center"><Droplets className="mr-2" /> 茶杯與茶湯的關係</h4>
                        <div className="space-y-4 text-sm">
                          <div>
                            <span className="font-bold text-stone-800 block mb-1">杯內色澤</span>
                            <ul className="list-disc list-inside text-stone-600">
                              <li><strong>暖色 (黃/紅)：</strong>令茶湯看起來較為溫暖。</li>
                              <li><strong>寒色 (青/綠)：</strong>令茶湯看起來深暗，綠茶顯濃，發酵茶顯黑。</li>
                              <li><strong>白色：</strong>最能顯現茶湯原本的顏色與湯澤。</li>
                            </ul>
                          </div>
                          <div>
                            <span className="font-bold text-stone-800 block mb-1">杯子深度</span>
                            <p className="text-stone-600">一般以 2.5cm 為佳，利於觀測茶湯顏色。</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Full Utensil List */}
                    <div className="border-t border-stone-200 pt-8">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="font-bold text-xl text-stone-800">常用茶器介紹</h4>
                        <button
                          onClick={() => setShowAllUtensils(!showAllUtensils)}
                          className="text-sm text-green-700 font-bold hover:underline"
                        >
                          {showAllUtensils ? "收起列表" : "展開完整列表 (32項)"}
                        </button>
                      </div>

                      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-500 ${showAllUtensils ? 'max-h-[2000px] opacity-100' : 'max-h-64 overflow-hidden opacity-80'}`}>
                        {[
                          { name: "茶壺", desc: "中華茶文化博大精深部分。" },
                          { name: "茶盤", desc: "放茶具，下層盛水。" },
                          { name: "茶杯", desc: "聞香杯(高)、就口杯(矮)。" },
                          { name: "茶船/茶池", desc: "承接沖泡溢出之水。" },
                          { name: "壺盛/壺承", desc: "承接溢水，乾式泡法常用。" },
                          { name: "壺墊", desc: "保護壺底，避免摩擦。" },
                          { name: "勻杯/茶海", desc: "均勻茶湯、沉澱茶屑。" },
                          { name: "茶巾", desc: "保持清潔，擦拭水漬。" },
                          { name: "茶夾", desc: "清壺夾茶葉用。" },
                          { name: "茶撥", desc: "撥動茶葉入壺及理茶。" },
                          { name: "茶荷", desc: "置茶、賞茶、量茶。" },
                          { name: "茶漏", desc: "置壺口防茶葉散落。" },
                          { name: "水盂", desc: "裝置廢水。" },
                          { name: "渣方", desc: "裝置茶渣雜物。" },
                          { name: "茶則", desc: "取茶葉入壺，避免手觸。" },
                          { name: "茶倉", desc: "存放茶葉之罐。" },
                          { name: "蓋置", desc: "放置壺蓋處。" },
                          { name: "鑑定杯", desc: "比賽評茶用(150cc)。" },
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white p-3 rounded border border-stone-200 shadow-sm">
                            <span className="font-bold text-stone-800 block text-sm">{item.name}</span>
                            <span className="text-xs text-stone-500">{item.desc}</span>
                          </div>
                        ))}
                        {showAllUtensils && [
                          { name: "則置", desc: "放茶夾、茶撥之處。" },
                          { name: "茶掏", desc: "清壺用，竹製為佳。" },
                          { name: "杯托", desc: "放杯子，防沾濕桌面。" },
                          { name: "茗壺", desc: "燒水壺之美名。" },
                          { name: "煮水器", desc: "酒精燈、電磁爐等。" },
                          { name: "潔方", desc: "茶盤代用品，布材質。" },
                          { name: "蓋杯", desc: "蓋、身、托三件式。" },
                          { name: "茶碗", desc: "唐宋開始使用。" },
                          { name: "茶棚", desc: "所有茶具的家。" },
                          { name: "茶熘", desc: "去除茶品多餘含水量。" },
                          { name: "奉茶盤", desc: "方便奉茶至客座。" },
                          { name: "茶食盤", desc: "裝點心用。" },
                          { name: "茶末濾網", desc: "過濾茶屑。" },
                          { name: "同心杯", desc: "個人獨飲含濾心。" },
                        ].map((item, idx) => (
                          <div key={`extra-${idx}`} className="bg-white p-3 rounded border border-stone-200 shadow-sm animate-fadeIn">
                            <span className="font-bold text-stone-800 block text-sm">{item.name}</span>
                            <span className="text-xs text-stone-500">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Setup */}
                {ceremonyTab === 'setup' && (
                  <div className="animate-fadeIn space-y-12">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1 space-y-8">
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                          <h4 className="font-bold text-lg text-stone-800 mb-4">設置茶席之步驟</h4>
                          <ol className="space-y-4 text-sm text-stone-600 list-decimal list-inside">
                            <li>
                              <strong className="text-stone-800">選茶：</strong>決定今日主角。
                            </li>
                            <li>
                              <strong className="text-stone-800">試茶：</strong>
                              <p className="pl-4 mt-1 text-xs">使用鑑定杯，了解其發酵度、苦澀度、香氣、焙火情形，以決定沖泡策略。</p>
                            </li>
                            <li>
                              <strong className="text-stone-800">主體部分 (因茶擇器)：</strong>
                              <p className="pl-4 mt-1 text-xs">
                                例：凍頂烏龍選圓形壺、燒結度不高、蓋子密。<br />
                                決定席方(舞台)、壺承、飲杯、勻杯的搭配。
                              </p>
                            </li>
                          </ol>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                          <h4 className="font-bold text-lg text-stone-800 mb-4">茶席構成要素</h4>
                          <ul className="space-y-3 text-sm text-stone-600">
                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>席方：</strong>離桌緣一食指距離。</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>壺承：</strong>直徑須大於壺，造型如舞台。</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>勻杯：</strong>斷水須順暢，高度不低於杯。</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>水盂：</strong>彈性最大，可依比例調整。</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>茶巾：</strong>置於事茶者右下壺承45度。</li>
                          </ul>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <div className="bg-stone-800 text-stone-200 p-8 rounded-xl ">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-stone-700 rounded-full blur-3xl -mr-10 -mt-10"></div>
                          <h4 className="font-bold text-xl text-white mb-8 text-center">茶席基本配置圖 (以事茶者視角)</h4>

                          {/* Diagram Representation */}
                          <div className="grid grid-cols-3 gap-4 text-center text-xs md:text-sm">
                            {/* Top Row */}
                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                              (茶倉) <br /> 左上 45°
                            </div>
                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                              (客人視線)
                            </div>
                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                              (勻杯) <br /> 右上 45°
                            </div>

                            {/* Middle Row */}
                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                              (茶荷) <br /> 左側
                            </div>
                            <div className="flex items-center justify-center p-8 bg-stone-700 rounded-full border-2 border-stone-500 shadow-lg z-10">
                              <strong className="text-white">茶壺 & 壺承</strong><br />(正中央)
                            </div>
                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                              (茶則/茶理) <br /> 右側
                            </div>

                            {/* Bottom Row */}
                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                              (水盂) <br /> 彈性位置
                            </div>
                            <div className="flex items-center justify-center p-4 text-stone-300">
                              <User size={24} className="mb-1 block mx-auto" />
                              事茶者
                            </div>
                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                              (茶巾/蓋置) <br /> 右下 45°
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Ritual */}
                {ceremonyTab === 'ritual' && (
                  <div className="animate-fadeIn">
                    <div className="relative border-l-2 border-stone-200 ml-4 md:ml-8 space-y-12 my-8">
                      {[
                        { title: "1. 備茶展席", desc: "未曾汲水，先備茶具。必潔必燥，開口以待。靜心備水，安全得宜，調整心情。" },
                        { title: "2. 調息靜氣", desc: "主客行禮（飲水淨口）。溫壺：左手提煮水器，右手執主沖茶器，左右均衡操作。溫勻杯、溫杯：預測容量。" },
                        { title: "3. 注水溫潤", desc: "備茶、賞茶、置茶（專注嚴謹）、聞香。注水溫潤：提壺靜沸，注水不急不緩。" },
                        { title: "4. 靜候觀心", desc: "第一道茶：外在顯現為茶道美感與境界塑造之基礎。清杯：由內而外，井然有序。調息出湯。" },
                        { title: "5. 出湯布茶", desc: "奉茶行禮：平穩謙和。第二道茶：專注細膩。勻杯奉茶：主客互動之藝術，客人連同杯托往前移動。" },
                        { title: "6. 靜心品味", desc: "端茶：左手拇指餘指輕托杯托。持杯：右手拇指食指拿杯緣。聞香、品茶（分3小口）、聞杯底。" },
                        { title: "7. 空白之美", desc: "品茶告一段落，品用白開水以顯現茶味（實品茶湯、虛品茶味），或供應茶食、聽樂、品香。" },
                        { title: "8. 對話賞壺", desc: "清壺賞葉底：延續之情，不再續沖。賞壺：惜物之情，去葉底注水入壺清理，讓客人賞壺。" },
                        { title: "9. 一期一會", desc: "歸位：時間掌控。理器：動態之美，如行雲流水。收杯：客人將杯送回。茶席之美：表現與分享。" }
                      ].map((step, idx) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-400 border-2 border-white"></div>
                          <h4 className="text-xl font-bold text-stone-800 mb-2">{step.title}</h4>
                          <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-stone-50 p-6 rounded-xl text-center border border-stone-200">
                      <p className="text-stone-700 italic font-medium">
                        「形而上者謂之道，形而下者謂之器。」<br />
                        道器並用，由藝入道，用功於生命本身。
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RegionsSection = () => {
    return (
      <div className="museum-page">
        <div className="museum-stage">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-stone-900 text-outline-white">臺灣茶產區導覽</h2><p className="mt-4 text-lg md:text-xl text-stone-600 text-outline-white max-w-3xl mx-auto leading-relaxed">臺灣地形多變、雨量豐沛，造就了「北包種、南凍頂」的多元風味。</p></div>
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-emerald-500 p-8"><h3 className="text-2xl font-bold text-stone-800 mb-2">北部茶區</h3><p className="text-stone-600">文山包種茶、木柵鐵觀音、三峽碧螺春、東方美人</p></div>
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-lime-600 p-8"><h3 className="text-2xl font-bold text-stone-800 mb-2">中部茶區</h3><p className="text-stone-600">凍頂烏龍、高山烏龍、日月潭紅茶</p></div>
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-teal-500 p-8"><h3 className="text-2xl font-bold text-stone-800 mb-2">南部茶區</h3><p className="text-stone-600">阿里山烏龍茶、港口茶</p></div>
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-orange-500 p-8"><h3 className="text-2xl font-bold text-stone-800 mb-2">東部茶區</h3><p className="text-stone-600">鹿野紅烏龍、瑞穗蜜香紅茶</p></div>
          </div>

          {/* World Map Section */}
          <div className="bg-stone-900 rounded-3xl p-8 md:p-16 text-stone-300 ">
            {/* Decorative background elements to simulate map lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,40 50,50 T100,50" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M0,30 Q25,20 50,30 T100,30" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M0,70 Q25,60 50,70 T100,70" stroke="white" strokeWidth="0.5" fill="none" />
              </svg>
            </div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Globe className="mr-3 text-blue-400" /> 世界紅茶產地示意
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                從中國武夷山的發源，到印度阿薩姆的工業化，再到錫蘭的海洋風味。
                紅茶的足跡遍布全球，每個產區都有其獨特的風土記憶。
              </p>
            </div>

            {/* Map Points / Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Wuyi */}
              <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-red-500 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">中國・武夷山</h3>
                  <span className="text-xs font-bold bg-red-900 text-red-200 px-2 py-1 rounded">發源地</span>
                </div>
                <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                  <strong>Wuyi Mountains</strong><br />
                  紅茶的誕生地。以「正山小種」聞名，帶有獨特的松煙香與桂圓味。
                </p>
                <div className="flex items-center text-xs text-stone-500">
                  <Map size={14} className="mr-1" /> 福建省崇安縣
                </div>
              </div>

              {/* Assam */}
              <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-amber-500 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">印度・阿薩姆</h3>
                  <span className="text-xs font-bold bg-amber-900 text-amber-200 px-2 py-1 rounded">最大產區</span>
                </div>
                <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                  <strong>Assam</strong><br />
                  位於喜馬拉雅山南麓。茶湯濃烈、色澤深紅，帶有麥芽香，是英式早餐茶的主要基底。
                </p>
                <div className="flex items-center text-xs text-stone-500">
                  <Map size={14} className="mr-1" /> 印度東北部
                </div>
              </div>

              {/* Ceylon */}
              <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-blue-500 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">斯里蘭卡・錫蘭</h3>
                  <span className="text-xs font-bold bg-blue-900 text-blue-200 px-2 py-1 rounded">高地茶</span>
                </div>
                <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                  <strong>Ceylon (Sri Lanka)</strong><br />
                  受季風影響，風味清新爽口。烏瓦(Uva)產區帶有鈴蘭花香與薄荷涼氣，被譽為世界三大高香紅茶之一。
                </p>
                <div className="flex items-center text-xs text-stone-500">
                  <Map size={14} className="mr-1" /> 斯里蘭卡中央山脈
                </div>
              </div>
            </div>

            {/* Darjeeling (Optional extra) */}
            <div className="mt-8 bg-stone-800/50 p-4 rounded-lg border border-stone-700 flex items-center justify-center text-sm text-stone-400">
              <Star size={16} className="text-yellow-500 mr-2" />
              <span>另有「紅茶中的香檳」—— <strong>印度大吉嶺 (Darjeeling)</strong>，以麝香葡萄風味著稱。</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HistorySection = ({ historyTab, setHistoryTab }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTimelineData = Object.keys(timelineData).reduce((acc, key) => {
      if (!searchTerm) {
        acc[key] = timelineData[key];
        return acc;
      }
      const term = searchTerm.toLowerCase();
      acc[key] = timelineData[key].filter(event =>
        (event.year && event.year.toLowerCase().includes(term)) ||
        (event.title && event.title.toLowerCase().includes(term)) ||
        (event.content && event.content.toLowerCase().includes(term)) ||
        (event.world && event.world.toLowerCase().includes(term))
      );
      return acc;
    }, {});

    const TimelineRow = ({ year, title, content, world }) => (
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-[2px] bg-gradient-to-b from-transparent via-stone-400/90 to-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.65)]" />
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] gap-y-6 md:gap-y-0 md:gap-x-4 items-center">
          <div className="md:pr-3 flex md:justify-end">
            {title && (
              <div className="group relative w-full max-w-[480px] rounded-2xl border border-emerald-200/70 bg-transparent px-6 py-5 text-right transition-colors duration-300 hover:border-emerald-300">
                <span className="absolute -right-3 top-6 hidden md:block h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-500" />
                <span className="absolute -right-9 top-[27px] hidden md:block h-px w-6 bg-emerald-200 transition-colors duration-300 group-hover:bg-emerald-300" />
                <div className="mb-2 ml-auto w-fit flex items-center justify-end gap-2 rounded-full bg-transparent px-3 py-1 text-xs font-bold text-emerald-900 ring-1 ring-emerald-200/70 transition-colors duration-300 group-hover:border-emerald-300">
                  <Calendar size={12} />
                  台灣事件
                </div>
                <h4 className="text-lg font-extrabold text-stone-900">{title}</h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{content}</p>
              </div>
            )}
          </div>
          <div className="relative flex items-center justify-center">
            <span className="relative z-10 rounded-full border border-white/90 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 px-5 py-1.5 text-sm md:text-base font-extrabold tracking-wide text-white transition-all duration-300 hover:scale-110 hover:tracking-[0.18em] hover:border-emerald-200 hover:from-emerald-900 hover:via-emerald-800 hover:to-emerald-900 hover:outline hover:outline-2 hover:outline-emerald-200/70">
              {year}
            </span>
          </div>
          <div className="md:pl-3 flex md:justify-start">
            {world && (
              <div className="group relative w-full max-w-[480px] rounded-2xl border border-sky-200/70 bg-transparent px-6 py-5 text-left transition-colors duration-300 hover:border-sky-300">
                <span className="absolute -left-3 top-6 hidden md:block h-3 w-3 rounded-full bg-sky-400 ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-500" />
                <span className="absolute -left-9 top-[27px] hidden md:block h-px w-6 bg-sky-200 transition-colors duration-300 group-hover:bg-sky-300" />
                <div className="mb-2 w-fit flex items-center gap-2 rounded-full bg-transparent px-3 py-1 text-xs font-bold text-sky-900 ring-1 ring-sky-200/70 transition-colors duration-300 group-hover:border-sky-300">
                  <Globe size={12} />
                  世界大事
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">{world}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    const historyData = createHistoryData({ searchTerm, setSearchTerm, filteredTimelineData, TimelineRow });
    const historySectionRef = useRef(null);
    const [historySidebarWidth, setHistorySidebarWidth] = useState(() => {
      if (typeof window === 'undefined') return 300;
      const raw = window.localStorage?.getItem('tea.historySidebarWidth');
      const parsed = raw ? Number(raw) : NaN;
      if (!Number.isFinite(parsed)) return 300;
      return Math.min(Math.max(parsed, 200), 500);
    });

    const handleHistoryTabChange = (tabId) => {
      setHistoryTab(tabId);
      // Scroll to top of section
      if (historySectionRef.current) {
        historySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const handleHistoryResize = (newWidth) => {
      setHistorySidebarWidth(newWidth);
    };

    useEffect(() => {
      if (typeof window === 'undefined') return;
      try {
        window.localStorage?.setItem('tea.historySidebarWidth', String(historySidebarWidth));
      } catch {
        // ignore
      }
    }, [historySidebarWidth]);

    return (
      <div className="museum-page" ref={historySectionRef}>
        <div className="museum-stage">
          <div className="mb-12 museum-panel p-8 md:p-12 text-center">
            <div className="museum-label mx-auto">EXHIBIT · HISTORY</div>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">茶道文化史</h2>
            <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">縱橫千年，從神農嘗百草到現代茶藝的生活美學。</p>
          </div>
          {/* Two-Column Layout with Resizable Divider */}
          <div className="flex gap-0">
            {/* Left Sidebar Navigation */}
            <div style={{ width: `${historySidebarWidth}px`, minWidth: '200px', maxWidth: '500px' }}>
              <div className="md:sticky md:top-24 space-y-3 pr-4">
                {Object.keys(historyData).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleHistoryTabChange(key)}
                    className={`
                      w-full px-5 py-4 rounded-xl border-2 transition-all duration-300
                      flex items-center gap-4 text-left relative
                      ${historyTab === key
                        ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-400 shadow-md'
                        : 'bg-white border-stone-200 hover:border-emerald-300 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className={`transition-transform duration-300 flex-shrink-0 text-2xl ${historyTab === key ? 'scale-110' : ''}`}>
                      {historyData[key].icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-bold text-lg ${historyTab === key ? 'text-emerald-900' : 'text-stone-800'}`}>
                        {historyData[key].title}
                      </div>
                    </div>
                    {historyTab === key && (
                      <div className="w-1 h-8 bg-emerald-500 rounded-full absolute right-0"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Resizable Divider */}
            <ResizableDivider onResize={handleHistoryResize} minWidth={200} maxWidth={500} />

            {/* Right Content Area */}
            <div className="flex-1 min-w-0 pl-8">
              <div className="animate-fadeIn min-h-[400px] museum-panel p-6 md:p-8">
                {historyData[historyTab].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="museum-footer text-stone-900 ">


        <div className="museum-footer__inner max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="museum-footer-card p-6">


                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 border border-white/10">
                    <Leaf className="h-6 w-6 text-amber-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold tracking-widest text-stone-600">MUSEUM GUIDE</div>
                    <div className="mt-1 text-2xl font-extrabold tracking-widest text-stone-900">{i18n.t('site.title')}</div>
                    <div className="mt-1 text-xs font-bold tracking-widest text-stone-600">{i18n.t('site.tagline')}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-stone-700 leading-relaxed">{i18n.t('footer.aboutText')}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="museum-label">For Teaching</span>
                  <span className="museum-label">For Research</span>
                  <span className="museum-label">For Students</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="museum-footer-card p-6">
                <div className="text-xs font-extrabold tracking-widest text-stone-600 mb-4">{i18n.t('footer.quickLinks')}</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    ['varieties', i18n.t('nav.varieties')],
                    ['cultivars', i18n.t('nav.cultivars')],
                    ['science', i18n.t('nav.science')],
                    ['zisha', i18n.t('nav.zisha')],
                    ['regions', i18n.t('nav.regions')],
                    ['history', i18n.t('nav.history')],
                  ].map(([tab, label]) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => goToTab(tab)}
                      className="glow-button text-left px-3 py-2 rounded-xl border border-stone-200/80 bg-white/80 hover:bg-white transition-colors text-stone-800"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="museum-footer-card p-6">
                <div className="text-xs font-extrabold tracking-widest text-stone-600 mb-4">
                  {i18n.lang === 'en' ? 'VISITOR INFO' : '參觀資訊'}
                </div>
                <ul className="space-y-3 text-sm text-stone-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                    {i18n.lang === 'en'
                      ? 'Shareable links: use ?tab=... to open a section directly.'
                      : '可分享連結：使用 ?tab=... 可直接打開指定展區。'}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                    {i18n.lang === 'en'
                      ? 'Language toggle is available in the top navigation.'
                      : '右上角可切換語言（中文/EN）。'}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                    {i18n.lang === 'en'
                      ? 'Tables are horizontally scrollable on mobile.'
                      : '手機觀看表格可左右滑動。'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-stone-200/70 pt-8 text-center text-xs text-stone-600">
            &copy; 2023 {i18n.t('footer.copyright')}. All rights reserved. {i18n.t('footer.designedFor')}
          </div>
        </div>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-amber-300 text-stone-900 p-3 rounded-full hover:bg-amber-200 transition-all z-50 animate-fadeIn border border-amber-200"
            aria-label={i18n.t('ui.backToTop')}
          >
            <ArrowUp size={24} />
          </button>
        )}
      </footer>
    );
  };

  // Academy Password Protection
  const DAGUAN_UNLOCK_KEY = 'academy.daguanUnlocked';
  const CHONGHUA_UNLOCK_KEY = 'academy.chonghuaUnlocked';
  const ACADEMY_MENU_HIDDEN_KEY = 'academy.menuHidden';
  const [daguanUnlocked, setDaguanUnlocked] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = window.localStorage?.getItem(DAGUAN_UNLOCK_KEY) === 'true';
    if (stored) return true;
    const legacy = window.localStorage?.getItem('museumUnlocked') === 'true';
    if (legacy) {
      try {
        window.localStorage?.setItem(DAGUAN_UNLOCK_KEY, 'true');
      } catch {
        // ignore
      }
      return true;
    }
    return false;
  });
  const [chonghuaUnlocked, setChonghuaUnlocked] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = window.localStorage?.getItem(CHONGHUA_UNLOCK_KEY) === 'true';
    if (stored) return true;
    const legacy = window.localStorage?.getItem('museumUnlocked') === 'true';
    if (legacy) {
      try {
        window.localStorage?.setItem(CHONGHUA_UNLOCK_KEY, 'true');
      } catch {
        // ignore
      }
      return true;
    }
    return false;
  });
  const [passwordModalTarget, setPasswordModalTarget] = useState(null);
  const [academyMenuHidden, setAcademyMenuHidden] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage?.getItem(ACADEMY_MENU_HIDDEN_KEY) === 'true';
  });

  const handleUnlockSuccess = (targetKey) => {
    if (targetKey === 'daguan') {
      setDaguanUnlocked(true);
      try {
        window.localStorage?.setItem(DAGUAN_UNLOCK_KEY, 'true');
      } catch {
        // ignore
      }
    }
    if (targetKey === 'chonghua') {
      setChonghuaUnlocked(true);
      try {
        window.localStorage?.setItem(CHONGHUA_UNLOCK_KEY, 'true');
      } catch {
        // ignore
      }
    }
    setAcademyMenuHidden(false);
    try {
      window.localStorage?.setItem(ACADEMY_MENU_HIDDEN_KEY, 'false');
    } catch {
      // ignore
    }
    try {
      window.localStorage?.removeItem('museumUnlocked');
    } catch {
      // ignore
    }
    setPasswordModalTarget(null);
  };

  return (
    <div className="min-h-screen text-stone-900">
      <PasswordModal
        isOpen={Boolean(passwordModalTarget)}
        target={passwordModalTarget}
        onClose={() => setPasswordModalTarget(null)}
        onSuccess={handleUnlockSuccess}
      />

      <SiteNavigation
        i18n={i18n}
        activeTab={activeTab}
        varietiesKind={varietiesKind}
        scienceRoom={scienceRoom}
        atlasNavOpen={atlasNavOpen}
        mobileMenuOpen={mobileMenuOpen}
        goToTab={goToTab}
        setAtlasNavOpen={setAtlasNavOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setVarietiesKind={setVarietiesKind}
        setScienceRoom={setScienceRoom}
        daguanUnlocked={daguanUnlocked}
        chonghuaUnlocked={chonghuaUnlocked}
        academyMenuHidden={academyMenuHidden}
        onUnlockRequest={(targetKey) => {
          if (targetKey === false) {
            // 重新鎖定：移除解鎖狀態
            setDaguanUnlocked(false);
            setChonghuaUnlocked(false);
            setAcademyMenuHidden(true);
            try {
              window.localStorage?.removeItem(DAGUAN_UNLOCK_KEY);
              window.localStorage?.removeItem(CHONGHUA_UNLOCK_KEY);
              window.localStorage?.removeItem('museumUnlocked');
              window.localStorage?.setItem(ACADEMY_MENU_HIDDEN_KEY, 'true');
            } catch {
              // ignore
            }
          } else {
            // 顯示密碼框（總是打開，不切換）
            setPasswordModalTarget(targetKey ?? 'any');
          }
        }}
      />

      <main>
        {activeTab === 'journey' && <JourneySection goToTab={goToTab} setScienceRoom={setScienceRoom} />}
        {activeTab === 'home' && <HeroSection goToTab={goToTab} goToTeaExhibit={goToTeaExhibit} teaData={teaData} />}
        {activeTab === 'home' && <VarietiesSection />}

        {activeTab === 'puerh' && (
          <PuerhSection
            siteNavHeightPx={siteNavHeightPx}
            puerhChapterHref={puerhChapterHref}
            selectPuerhChapter={selectPuerhChapter}
          />
        )}

        {activeTab === 'sensory' && (
          <div className="museum-page">
            <div className="museum-stage">
              <SensoryQuestionBank
                questions={sensoryQuestionBank}
                activeTopic={sensoryTopic}
                onSelectTopic={setSensoryTopic}
                topOffsetPx={siteNavHeightPx + 12}
              />
            </div>
          </div>
        )}

        {activeTab === 'tea_talk' && <TeaTalkColorSection topOffsetPx={siteNavHeightPx + 16} />}

        {activeTab === 'cultivars' && <CultivarSection />}

        {activeTab === 'varieties' && <VarietiesSection />}

        {activeTab === 'featured' && <FeaturedTeaSection />}

        {activeTab === 'seasons' && <SeasonsSection siteNavHeightPx={siteNavHeightPx} />}

        {activeTab === 'zisha' && <ZishaExhibit />}

        {activeTab === 'science' && <ScienceSection />}

        {activeTab === 'brewing' && <BrewingGuideSection selectedTeaForBrewing={selectedTeaForBrewing} setSelectedTeaForBrewing={setSelectedTeaForBrewing} />}

        {activeTab === 'ceremony' && <TeaCeremonySection />}

        {activeTab === 'regions' && <RegionsSection />}

        {activeTab === 'history' && <HistorySection historyTab={historyTab} setHistoryTab={setHistoryTab} />}

        {/* Academy Section - Centralized routing through AcademyRouter */}
        <AcademyRouter
          activeTab={activeTab}
          daguanUnlocked={daguanUnlocked}
          chonghuaUnlocked={chonghuaUnlocked}
        />
      </main>

      {/* AI Components are now correctly defined and called */}
      <Footer />
    </div>
  );
};

export default function App() {
  return <TeaWebsite />;
}

