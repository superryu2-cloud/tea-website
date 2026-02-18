import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Leaf, Droplets, Clock, Coffee, BookOpen, Search, Menu, X, ChevronRight, ChevronDown, Wind, Flame, Tag, Layers, Map, FlaskConical, ArrowRight, Mountain, Compass, Sprout, Microscope, Scale, Table, Info, Star, Feather, Scroll, Thermometer, Sun, Snowflake, CloudRain, Wheat, Cloud, User, AlertTriangle, TrendingUp, History, Book, PenTool, Globe, Bug, Sparkles, ShieldAlert, CheckCircle, Palette, Layout, Calendar, RefreshCw, ArrowUp, Filter, Play, Pause, RotateCcw, Bot, HelpCircle } from 'lucide-react';
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
import BlackTeaVarietiesContent from './content/featured/BlackTeaVarieties';
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
import RitualSection from './components/sections/RitualSection';
import TeaSetupSection from './components/sections/TeaSetupSection';
import TaiwanCultivarDiversity from './content/cultivars/TaiwanCultivarDiversity';
import TaiwanTeaCultivars from './content/cultivars/TaiwanTeaCultivars';
import CultivarMysterySection from './content/cultivars/CultivarMysterySection';
import TeaReferenceNotes from './content/references/TeaReferenceNotes';
import SensoryQuestionBank from './content/sensory/SensoryQuestionBank';
import TeaTalkColorSection from './content/teaTalk/TeaTalkColorSection';
import OolongNameStory from './content/teaTalk/OolongNameStory';
import TeaArtSpirit from './content/ceremony/TeaArtSpirit';
import SolarTermsPrimer from './content/seasons/SolarTermsPrimer';
import FourSeasonsSection from './content/seasons/FourSeasonsSection';
import ZishaExhibit from './content/zisha/ZishaExhibit';
import { UI_FLAGS } from './config/uiFlags';
import { CHEN_CHUAN_TOC, CULTIVARS_SECTIONS, CULTIVARS_TOC, NAV_ITEMS, OOLONG_TOC, PUERH_TOC, RED_TOC, SCIENCE_TOC, SEASONS_SECTIONS, TEA_REFERENCE_TOC, VARIETIES_KINDS } from './config/navigation';
import useI18n from './i18n/useI18n';
import SectionCard from './components/SectionCard';
import ImageModal from './components/ImageModal';
import PasswordModal from './components/PasswordModal';
import SiteNavigation from './components/SiteNavigation';
import TaiwanTeaMap from './components/TaiwanTeaMap';
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
import CNYHero from './components/hero/CNYHero';
import TeaPoetrySection from './components/sections/TeaPoetrySection';
import JourneySection from './components/sections/JourneySection';
import ScienceSectionLegacy from './components/sections/ScienceSectionLegacy';
import ScienceSection from './components/sections/ScienceSection';
import AromaticsChapter from './content/scienceChapters/AromaticsChapter';
import TeaProcessCraftChapter from './content/scienceChapters/TeaProcessCraftChapter';
import ConstituentsChapter from './content/scienceChapters/ConstituentsChapter';
import RoastingChapter from './content/scienceChapters/RoastingChapter';
import SlurpingChapter from './content/scienceChapters/SlurpingChapter';
import PuerhSection from './sections/PuerhSection';
import SeasonsSection from './sections/SeasonsSection';
import BrewingGuideSection from './sections/BrewingGuideSection';
import DraggableWrapper from './components/DraggableWrapper';
import SteepedSereneHome from './components/sections/SteepedSereneHome';
import ResizableDivider from './components/ResizableDivider';
import FeaturedTeaSection from './components/sections/FeaturedTeaSection';
import UtensilsSection from './components/sections/UtensilsSection';
import CultivarSection from './components/sections/CultivarSection';
import TeaCeremonySection from './components/sections/TeaCeremonySection';
import RegionsSection from './components/sections/RegionsSection';
import VarietiesNotesMode from './components/sections/VarietiesNotesMode';
import TeaSearchFilter from './components/sections/TeaSearchFilter';
import ChenChuanEssaySection from './components/sections/ChenChuanEssaySection';
import VarietiesSection from './components/sections/VarietiesSection';
import HistorySection from './components/sections/HistorySection';
import Footer from './components/Footer';
import { NavigationProvider } from './contexts/NavigationContext';
import useScrollToSection from './hooks/useScrollToSection';

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
  const [selectedFeatured, setSelectedFeatured] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTea = params.get('tea');
      if (urlTea && featuredTeaMenu?.some((t) => t.id === urlTea)) {
        return urlTea;
      }
    }
    return featuredTeaMenu?.[0]?.id ?? 'tieguanyin';
  });
  const chenChuanScrollOffsetPx = siteNavHeightPx + 20;

  const cultivarsSubnav = useAnchoredSubnav({
    enabled: activeTab === 'cultivars',
    items: CULTIVARS_TOC,
    fallbackNavHeightPx: siteNavHeightPx,
    enableScrollSpy: false,
  });

  // 使用統一的滾動 hook
  const { scrollToSection, scrollToTop } = useScrollToSection(siteNavHeightPx);

  const selectChenChuanChapter = (href) => {
    const normalized = String(href ?? '');
    if (normalized !== '#cc-all' && !normalized.startsWith('#cc-')) return;
    setChenChuanChapterHref(normalized);

    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const nextHash = normalized === '#cc-all' ? '' : normalized;
    window.history.replaceState(null, '', `${url.pathname}${url.search}${nextHash}`);

    window.requestAnimationFrame(() => {
      const targetId = normalized === '#cc-all' ? 'varieties-kind-header' : normalized.slice(1);
      scrollToSection(targetId, { additionalOffset: 56 });
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
        scrollToSection(normalized.slice(1), { additionalOffset: 56 });
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
        scrollToSection(normalized.slice(1), { additionalOffset: 56 });
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
        scrollToSection(normalized.slice(1), { additionalOffset: 56 });
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
    scrollToTop();
  };

  const goToTeaExhibit = (tea) => {
    if (!tea || typeof tea !== 'object') return;

    // Handle Numeric IDs (Basic Tea Data)
    if (typeof tea.id === 'number') {
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
      if (kindKey) {
        goToVarietiesKind(kindKey);
        return;
      }
    }

    // Handle String IDs (Featured Teas)
    if (typeof tea.id === 'string') {
      if (featuredTeaMenu.some(item => item.id === tea.id)) {
        setSelectedFeatured(tea.id);
        setActiveTab('featured');
        setAtlasNavOpen(true);
        setMobileMenuOpen(false);
        scrollToTop();
        return;
      }
    }
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
    scrollToTop();
  };

  useEffect(() => {
    const allowed = new Set([...NAV_ITEMS, 'academy_zhiya_02', 'academy_zhiya_03', 'academy_zhiya_04', 'academy_zhiya_05', 'academy_zhiya_06', 'academy_zhiya_07', 'academy_zhiya_09', 'academy_zhiya_10', 'academy_zhiya_14', 'academy_xueya_01', 'academy_xueya_03', 'academy_xueya_05', 'academy_xueya_06',
      'academy_xueya_07',
      'academy_xueya_08',
      'academy_xueya_09',
      'academy_xueya_11',
      'academy_coming_soon',
      'brand'
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
        const offset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + 56);
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







  // VarietiesSection extracted to src/components/sections/VarietiesSection.jsx




  // PuerhSection extracted to src/sections/PuerhSection.jsx

  // SeasonsSection extracted to src/sections/SeasonsSection.jsx

  // FeaturedTeaSection extracted to src/components/sections/FeaturedTeaSection.jsx

  // BrewingGuide extracted to src/sections/BrewingGuideSection.jsx



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
    if (typeof window === 'undefined') return true;
    const stored = window.localStorage?.getItem(ACADEMY_MENU_HIDDEN_KEY);
    if (stored === null) return true;
    return stored === 'true';
  });

  const handleUnlockSuccess = (targetKey) => {
    if (targetKey === 'daguan') {
      setDaguanUnlocked(true);
      try {
        window.localStorage?.setItem(DAGUAN_UNLOCK_KEY, 'true');
      } catch {
        // ignore
      }
      setAcademyMenuHidden(false);
      try {
        window.localStorage?.setItem(ACADEMY_MENU_HIDDEN_KEY, 'false');
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
        {activeTab === 'home' && (
          <>
            <CNYHero />
            <HeroSection goToTab={goToTab} goToTeaExhibit={goToTeaExhibit} teaData={teaData} />
          </>
        )}
        {activeTab === 'home' && (
          <VarietiesSection
            activeTab={activeTab}
            varietiesKind={varietiesKind}
            setVarietiesKind={setVarietiesKind}
            setActiveTab={setActiveTab}
            setAtlasNavOpen={setAtlasNavOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            setPendingScrollTarget={setPendingScrollTarget}
            chenChuanScrollOffsetPx={chenChuanScrollOffsetPx}
            chenChuanChapterHref={chenChuanChapterHref}
            setChenChuanChapterHref={setChenChuanChapterHref}
            oolongRegionHref={oolongRegionHref}
            setOolongRegionHref={setOolongRegionHref}
            redTeaHref={redTeaHref}
            setRedTeaHref={setRedTeaHref}
            whiteRegionHref={whiteRegionHref}
            setWhiteRegionHref={setWhiteRegionHref}
            siteNavHeightPx={siteNavHeightPx}
            goToTab={goToTab}
            selectChenChuanChapter={selectChenChuanChapter}
            selectOolongRegion={selectOolongRegion}
            selectRedTeaTopic={selectRedTeaTopic}
            selectWhiteRegion={selectWhiteRegion}
            setScienceRoom={setScienceRoom}
            selectScienceTeachingChapter={selectScienceTeachingChapter}
          />
        )}
        {activeTab === 'home' && <TeaPoetrySection />}

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

        {activeTab === 'tea_talk' && <TeaTalkColorSection siteNavHeightPx={siteNavHeightPx} />}
        {activeTab === 'cultivars' && <CultivarSection siteNavHeightPx={siteNavHeightPx} />}
        {activeTab === 'varieties' && (
          <VarietiesSection
            activeTab={activeTab}
            varietiesKind={varietiesKind}
            setVarietiesKind={setVarietiesKind}
            setActiveTab={setActiveTab}
            setAtlasNavOpen={setAtlasNavOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            setPendingScrollTarget={setPendingScrollTarget}
            chenChuanScrollOffsetPx={chenChuanScrollOffsetPx}
            chenChuanChapterHref={chenChuanChapterHref}
            setChenChuanChapterHref={setChenChuanChapterHref}
            oolongRegionHref={oolongRegionHref}
            setOolongRegionHref={setOolongRegionHref}
            redTeaHref={redTeaHref}
            setRedTeaHref={setRedTeaHref}
            whiteRegionHref={whiteRegionHref}
            setWhiteRegionHref={setWhiteRegionHref}
            siteNavHeightPx={siteNavHeightPx}
            goToTab={goToTab}
            selectChenChuanChapter={selectChenChuanChapter}
            selectOolongRegion={selectOolongRegion}
            selectRedTeaTopic={selectRedTeaTopic}
            selectWhiteRegion={selectWhiteRegion}
            setScienceRoom={setScienceRoom}
            selectScienceTeachingChapter={selectScienceTeachingChapter}
          />
        )}

        {activeTab === 'featured' && (
          <FeaturedTeaSection
            selectedFeatured={selectedFeatured}
            setSelectedFeatured={setSelectedFeatured}
            siteNavHeightPx={siteNavHeightPx}
          />
        )}

        {activeTab === 'seasons' && <SeasonsSection siteNavHeightPx={siteNavHeightPx} />}

        {activeTab === 'zisha' && <ZishaExhibit siteNavHeightPx={siteNavHeightPx} />}

        {activeTab === 'science' && (
          <ScienceSection
            scienceRoom={scienceRoom}
            setScienceRoom={setScienceRoom}
            teachingChapterHref={teachingChapterHref}
            onSelectTeachingChapter={selectScienceTeachingChapter}
            siteNavHeightPx={siteNavHeightPx}
          />
        )}

        {activeTab === 'brewing' && <BrewingGuideSection selectedTeaForBrewing={selectedTeaForBrewing} setSelectedTeaForBrewing={setSelectedTeaForBrewing} />}

        {activeTab === 'ceremony' && <TeaCeremonySection siteNavHeightPx={siteNavHeightPx} />}

        {activeTab === 'regions' && <RegionsSection siteNavHeightPx={siteNavHeightPx} />}

        {activeTab === 'history' && <HistorySection historyTab={historyTab} setHistoryTab={setHistoryTab} siteNavHeightPx={siteNavHeightPx} />}

        {/* Academy Section - Centralized routing through AcademyRouter */}
        <AcademyRouter
          activeTab={activeTab}
          daguanUnlocked={daguanUnlocked}
          chonghuaUnlocked={chonghuaUnlocked}
        />
      </main>

      {/* AI Components are now correctly defined and called */}
      <Footer goToTab={goToTab} i18n={i18n} />
    </div>
  );
};

export default function App() {
  return <TeaWebsite />;
}

