import React, { useState, useEffect, useRef } from 'react';
import featuredTeaMenu from './data/featuredTeaMenu';
import { CHEN_CHUAN_TOC, NAV_ITEMS, OOLONG_TOC, PUERH_TOC, RED_TOC, SCIENCE_TOC, TEA_REFERENCE_TOC, VARIETIES_KINDS, WHITE_TOC_EXTENDED as CONFIG_WHITE_TOC_EXTENDED } from './config/navigation';
import useI18n from './i18n/useI18n';
import PasswordModal from './components/PasswordModal';
import SiteNavigation from './components/SiteNavigation';
import ActiveTabContent from './components/app/ActiveTabContent';
import Footer from './components/Footer';
import ImageLightbox from './components/ImageLightbox';
import useAcademyUnlock from './hooks/useAcademyUnlock';
import useScrollToSection from './hooks/useScrollToSection';
import useSiteNavHeight from './hooks/useSiteNavHeight';

const CHONGHUA_ACADEMY_TABS = Array.from({ length: 33 }, (_, index) => `academy_chonghua_${String(index + 1).padStart(2, '0')}`);

const TeaWebsite = () => {
  const i18n = useI18n();
  const [activeTab, setActiveTab] = useState('journey');
  const urlWriteInitializedRef = useRef(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setAtlasNavOpen] = useState(true);
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
  const [globalLightboxImage, setGlobalLightboxImage] = useState({ src: '', alt: '' });
  const siteNavHeightPx = useSiteNavHeight(activeTab);
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

  /** 搜尋導航：根據 detail 精確定位子頁面 */
  const navigateToSearch = (tab, detail) => {
    if (detail?.featured) {
      setSelectedFeatured(detail.featured);
      setActiveTab('featured');
      setMobileMenuOpen(false);
      setAtlasNavOpen(true);
      scrollToTop();
      return;
    }
    if (detail?.kind) {
      goToVarietiesKind(detail.kind);
      if (detail.kind === 'oolong') {
        setOolongRegionHref(detail.oolongHref || null);
      }
      return;
    }
    if (detail?.room) {
      // 不能用 goToTab('science')，因為它會重設 scienceRoom 為 'constituents'
      setActiveTab('science');
      setScienceRoom(detail.room);
      setMobileMenuOpen(false);
      setAtlasNavOpen(true);
      scrollToTop();
      return;
    }
    goToTab(tab);
  };

  useEffect(() => {
    const allowed = new Set([...NAV_ITEMS, 'academy_zhiya_02', 'academy_zhiya_03', 'academy_zhiya_04', 'academy_zhiya_05', 'academy_zhiya_06', 'academy_zhiya_07', 'academy_zhiya_09', 'academy_zhiya_10', 'academy_zhiya_14', 'academy_xueya_01', 'academy_xueya_03', 'academy_xueya_04', 'academy_xueya_05', 'academy_xueya_06',
      'academy_xueya_07',
      'academy_xueya_08',
      'academy_xueya_09',
      'academy_xueya_11',
      'academy_coming_soon',
      'brand',
      ...CHONGHUA_ACADEMY_TABS
    ]);
    const allowedRooms = new Set(SCIENCE_TOC.map((item) => item.key).filter(Boolean));
    const allowedVarietiesKinds = new Set(VARIETIES_KINDS.map((k) => k.key));
    const allowedChenChuanHrefs = new Set(CHEN_CHUAN_TOC.map((item) => item.href));
    const allowedTeachingHrefs = new Set(TEA_REFERENCE_TOC.map((item) => item.href));
    const allowedPuerhHrefs = new Set(PUERH_TOC.map((item) => item.href));
    const allowedOolongHrefs = new Set(OOLONG_TOC.map((item) => item.href));
    const allowedWhiteHrefs = new Set(CONFIG_WHITE_TOC_EXTENDED.map((item) => item.href));
    const allowedRedHrefs = new Set(RED_TOC.map((item) => item.href));

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

      if (nextTab === 'featured') {
        const nextTea = params.get('tea');
        if (nextTea && featuredTeaMenu.some((t) => t.id === nextTea)) {
          setSelectedFeatured(nextTea);
        }
      }

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
        if (nextKind === 'red') {
          const hash = window.location.hash;
          if (allowedRedHrefs.has(hash)) setRedTeaHref(hash);
        }
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  useEffect(() => {
    if (!urlWriteInitializedRef.current) {
      urlWriteInitializedRef.current = true;
      return;
    }

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

    if (activeTab === 'featured') {
      if (params.get('tea') !== selectedFeatured) {
        params.set('tea', selectedFeatured);
        dirty = true;
      }
    } else if (params.has('tea')) {
      params.delete('tea');
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
  }, [activeTab, scienceRoom, varietiesKind, selectedFeatured]);

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
    document.title = `${i18n.t('site.title')} · ${i18n.t(`nav.${activeTab}`)}`;
  }, [activeTab, i18n]);

  const {
    daguanUnlocked,
    chonghuaUnlocked,
    academyMenuHidden,
    passwordModalTarget,
    closePasswordModal,
    handleUnlockRequest,
    handleUnlockSuccess,
  } = useAcademyUnlock();

  const handleSiteUnlockRequest = (targetKey) => {
    if (targetKey === false && activeTab.startsWith('academy')) {
      goToTab('journey');
    }
    handleUnlockRequest(targetKey);
  };

  const openGlobalImageLightbox = (event) => {
    const image = event.target?.closest?.('img');
    if (!image) return;
    if (!event.currentTarget.contains(image)) return;
    if (image.closest('a, button, [role="button"], input, select, textarea, label, [data-no-lightbox], [data-lightbox-overlay]')) return;

    const src = image.currentSrc || image.src || image.getAttribute('src');
    if (!src) return;

    const rect = image.getBoundingClientRect();
    const isTinyUtilityImage = rect.width < 72 || rect.height < 72;
    if (isTinyUtilityImage && !image.closest('figure, article, section')) return;

    event.preventDefault();
    event.stopPropagation();
    setGlobalLightboxImage({
      src,
      alt: image.alt || image.getAttribute('aria-label') || '',
    });
  };

  return (
    <div className="tea-site min-h-screen text-stone-900" onClickCapture={openGlobalImageLightbox}>
      <PasswordModal
        isOpen={Boolean(passwordModalTarget)}
        target={passwordModalTarget}
        onClose={closePasswordModal}
        onSuccess={handleUnlockSuccess}
      />
      <SiteNavigation
        i18n={i18n}
        activeTab={activeTab}
        varietiesKind={varietiesKind}
        mobileMenuOpen={mobileMenuOpen}
        goToTab={goToTab}
        setMobileMenuOpen={setMobileMenuOpen}
        setVarietiesKind={setVarietiesKind}
        setScienceRoom={setScienceRoom}
        daguanUnlocked={daguanUnlocked}
        chonghuaUnlocked={chonghuaUnlocked}
        academyMenuHidden={academyMenuHidden}
        onUnlockRequest={handleSiteUnlockRequest}
      />



      <ActiveTabContent
        activeTab={activeTab}
        mobileMenuOpen={mobileMenuOpen}
        navigateToSearch={navigateToSearch}
        goToTab={goToTab}
        setScienceRoom={setScienceRoom}
        goToTeaExhibit={goToTeaExhibit}
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
        selectChenChuanChapter={selectChenChuanChapter}
        selectOolongRegion={selectOolongRegion}
        selectRedTeaTopic={selectRedTeaTopic}
        selectWhiteRegion={selectWhiteRegion}
        selectScienceTeachingChapter={selectScienceTeachingChapter}
        puerhChapterHref={puerhChapterHref}
        selectPuerhChapter={selectPuerhChapter}
        sensoryTopic={sensoryTopic}
        setSensoryTopic={setSensoryTopic}
        historyTab={historyTab}
        setHistoryTab={setHistoryTab}
        selectedFeatured={selectedFeatured}
        setSelectedFeatured={setSelectedFeatured}
        selectedTeaForBrewing={selectedTeaForBrewing}
        setSelectedTeaForBrewing={setSelectedTeaForBrewing}
        scienceRoom={scienceRoom}
        teachingChapterHref={teachingChapterHref}
        daguanUnlocked={daguanUnlocked}
        chonghuaUnlocked={chonghuaUnlocked}
      />

      {/* AI Components are now correctly defined and called */}
      <Footer goToTab={goToTab} i18n={i18n} mobileMenuOpen={mobileMenuOpen} />
      <div data-lightbox-overlay>
        <ImageLightbox
          isOpen={Boolean(globalLightboxImage.src)}
          onClose={() => setGlobalLightboxImage({ src: '', alt: '' })}
          imageSrc={globalLightboxImage.src}
          altText={globalLightboxImage.alt}
        />
      </div>
    </div>
  );
};

export default function App() {
  return <TeaWebsite />;
}
