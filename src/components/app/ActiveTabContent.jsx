import React, { Suspense, lazy } from 'react';
import teaData from '../../data/teaData';
import { isPageEnabled } from '../../data/productData';
import AiChatButton from '../ai/AiChatButton';
import StationNav from '../ai/StationNav';
import AcademyRouter from '../academy/AcademyRouter';
import FloatingSearch from '../FloatingSearch';
import RelatedProducts from '../shop/RelatedProducts';

const ProductAdmin = lazy(() => import('../shop/ProductAdmin'));
const CNYHero = lazy(() => import('../hero/CNYHero'));
const HeroSection = lazy(() => import('../sections/HeroSection'));
const JourneySection = lazy(() => import('../sections/JourneySection'));
const TeaPoetrySection = lazy(() => import('../sections/TeaPoetrySection'));
const VarietiesSection = lazy(() => import('../sections/VarietiesSection'));
const FeaturedTeaSection = lazy(() => import('../sections/FeaturedTeaSection'));
const CultivarSection = lazy(() => import('../sections/CultivarSection'));
const ScienceSection = lazy(() => import('../sections/ScienceSection'));
const TeaCeremonySection = lazy(() => import('../sections/TeaCeremonySection'));
const RegionsSection = lazy(() => import('../sections/RegionsSection'));
const HistorySection = lazy(() => import('../sections/HistorySection'));
const VideoGallerySection = lazy(() => import('../sections/VideoGallerySection'));
const CourseSection = lazy(() => import('../sections/CourseSection'));
const TeaTalkColorSection = lazy(() => import('../../content/teaTalk/TeaTalkColorSection'));
const SensoryQuestionBankRoute = lazy(() => import('./SensoryQuestionBankRoute'));
const ZishaExhibit = lazy(() => import('../../content/zisha/ZishaExhibit'));
const PuerhSection = lazy(() => import('../../sections/PuerhSection'));
const SeasonsSection = lazy(() => import('../../sections/SeasonsSection'));
const BrewingGuideSection = lazy(() => import('../../sections/BrewingGuideSection'));
const AIPlannerRoom = lazy(() => import('../ai-planner/AIPlannerRoom'));

function RouteLoadingFallback() {
  return (
    <div className="museum-page">
      <div className="museum-stage">
        <div className="museum-panel p-8 text-center text-sm font-semibold text-stone-500">
          Loading...
        </div>
      </div>
    </div>
  );
}

export default function ActiveTabContent({
  activeTab,
  mobileMenuOpen = false,
  navigateToSearch,
  goToTab,
  setScienceRoom,
  goToTeaExhibit,
  varietiesKind,
  setVarietiesKind,
  setActiveTab,
  setAtlasNavOpen,
  setMobileMenuOpen,
  setPendingScrollTarget,
  chenChuanScrollOffsetPx,
  chenChuanChapterHref,
  setChenChuanChapterHref,
  oolongRegionHref,
  setOolongRegionHref,
  redTeaHref,
  setRedTeaHref,
  whiteRegionHref,
  setWhiteRegionHref,
  siteNavHeightPx,
  selectChenChuanChapter,
  selectOolongRegion,
  selectRedTeaTopic,
  selectWhiteRegion,
  selectScienceTeachingChapter,
  puerhChapterHref,
  selectPuerhChapter,
  sensoryTopic,
  setSensoryTopic,
  historyTab,
  setHistoryTab,
  selectedFeatured,
  setSelectedFeatured,
  selectedTeaForBrewing,
  setSelectedTeaForBrewing,
  scienceRoom,
  teachingChapterHref,
  daguanUnlocked,
  chonghuaUnlocked,
}) {
  const varietiesSection = (
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
  );

  return (
    <main>
      {!mobileMenuOpen && (
        <>
          <AiChatButton />
          <FloatingSearch navigateToSearch={navigateToSearch} goToTab={goToTab} />
        </>
      )}
      <Suspense fallback={<RouteLoadingFallback />}>
        {activeTab === 'admin' && <ProductAdmin />}
        {activeTab === 'ai_planner' && <AIPlannerRoom />}
        {activeTab === 'journey' && (
          <JourneySection
            goToTab={goToTab}
            setScienceRoom={setScienceRoom}
            navigateToSearch={navigateToSearch}
          />
        )}
        {activeTab === 'home' && (
          <>
            <CNYHero />
            <HeroSection goToTab={goToTab} goToTeaExhibit={goToTeaExhibit} teaData={teaData} />
            {varietiesSection}
            <TeaPoetrySection />
          </>
        )}

        {activeTab === 'puerh' && (
          <PuerhSection
            siteNavHeightPx={siteNavHeightPx}
            puerhChapterHref={puerhChapterHref}
            selectPuerhChapter={selectPuerhChapter}
          />
        )}

        {activeTab === 'sensory' && (
          <SensoryQuestionBankRoute
            activeTopic={sensoryTopic}
            onSelectTopic={setSensoryTopic}
            topOffsetPx={siteNavHeightPx + 12}
          />
        )}

        {activeTab === 'tea_talk' && <TeaTalkColorSection siteNavHeightPx={siteNavHeightPx} />}
        {activeTab === 'cultivars' && <CultivarSection siteNavHeightPx={siteNavHeightPx} />}
        {activeTab === 'varieties' && varietiesSection}

        {activeTab === 'course' && (
          <CourseSection goToTab={goToTab} setVarietiesKind={setVarietiesKind} />
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

        {activeTab === 'brewing' && (
          <BrewingGuideSection
            selectedTeaForBrewing={selectedTeaForBrewing}
            setSelectedTeaForBrewing={setSelectedTeaForBrewing}
          />
        )}
        {activeTab === 'ceremony' && <TeaCeremonySection siteNavHeightPx={siteNavHeightPx} />}
        {activeTab === 'regions' && <RegionsSection siteNavHeightPx={siteNavHeightPx} />}
        {activeTab === 'history' && (
          <HistorySection
            historyTab={historyTab}
            setHistoryTab={setHistoryTab}
            siteNavHeightPx={siteNavHeightPx}
          />
        )}
        {activeTab === 'video' && <VideoGallerySection siteNavHeightPx={siteNavHeightPx} />}

        <AcademyRouter
          activeTab={activeTab}
          daguanUnlocked={daguanUnlocked}
          chonghuaUnlocked={chonghuaUnlocked}
        />
      </Suspense>

      <StationNav activeTab={activeTab} goToTab={goToTab} />

      {activeTab !== 'admin' && isPageEnabled(activeTab) && (
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <RelatedProducts showAll title="推薦商品" />
        </div>
      )}
    </main>
  );
}

