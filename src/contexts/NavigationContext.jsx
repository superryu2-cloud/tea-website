import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * Navigation Context
 * 統一管理所有導航相關的狀態
 */
const NavigationContext = createContext(null);

/**
 * Navigation Provider
 * 提供導航狀態管理
 */
export const NavigationProvider = ({ children }) => {
    // 主要導航狀態
    const [activeTab, setActiveTab] = useState('journey');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [atlasNavOpen, setAtlasNavOpen] = useState(true);

    // 各個 tab 的子狀態
    const [historyTab, setHistoryTab] = useState('taiwanTeaIndustry');
    const [scienceRoom, setScienceRoom] = useState('constituents');
    const [varietiesKind, setVarietiesKind] = useState('overview');
    const [selectedFeatured, setSelectedFeatured] = useState('tieguanyin');
    const [selectedTeaForBrewing, setSelectedTeaForBrewing] = useState(0);

    // 章節 href 狀態
    const [chenChuanChapterHref, setChenChuanChapterHref] = useState('#cc-all');
    const [teachingChapterHref, setTeachingChapterHref] = useState('#ref-all');
    const [puerhChapterHref, setPuerhChapterHref] = useState('#puerh-1');
    const [oolongRegionHref, setOolongRegionHref] = useState(null);
    const [whiteRegionHref, setWhiteRegionHref] = useState('#white-history');
    const [redTeaHref, setRedTeaHref] = useState('#red-global');

    // 其他狀態
    const [sensoryTopic, setSensoryTopic] = useState(null);
    const [siteNavHeightPx, setSiteNavHeightPx] = useState(88);

    // 滾動目標狀態
    const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
    const [pendingOffsetScrollTarget, setPendingOffsetScrollTarget] = useState(null);

    /**
     * 切換到指定的 tab
     * 自動處理相關的狀態重置
     */
    const goToTab = useCallback((tab) => {
        setActiveTab(tab);
        setMobileMenuOpen(false);

        // 根據 tab 設定 atlasNavOpen
        if (tab === 'sensory' || tab === 'tea_talk') {
            setAtlasNavOpen(false);
        } else if (tab !== 'journey') {
            setAtlasNavOpen(true);
        }

        // 重置特定 tab 的狀態
        if (tab === 'history') setHistoryTab('taiwanTeaIndustry');
        if (tab === 'science') setScienceRoom('constituents');
        if (tab === 'varieties') setVarietiesKind('overview');
        if (tab === 'puerh') setPuerhChapterHref('#puerh-1');
        if (tab === 'science') setTeachingChapterHref('#ref-all');

        // 滾動到頂部
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    /**
     * 切換到指定的茶類
     */
    const goToVarietiesKind = useCallback((kindKey) => {
        setActiveTab('varieties');
        setAtlasNavOpen(true);
        setMobileMenuOpen(false);
        setVarietiesKind(kindKey);

        if (kindKey === 'ref_chenchuan') setChenChuanChapterHref('#cc-all');
        if (kindKey === 'white') setWhiteRegionHref('#white-history');

        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    /**
     * 導航到茶展示頁面
     */
    const goToTeaExhibit = useCallback((tea) => {
        if (!tea || typeof tea !== 'object') return;

        // 處理數字 ID（基本茶資料）
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

        // 處理字串 ID（精選茶）
        if (typeof tea.id === 'string') {
            setSelectedFeatured(tea.id);
            setActiveTab('featured');
            setAtlasNavOpen(true);
            setMobileMenuOpen(false);

            if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [goToTab, goToVarietiesKind]);

    const value = {
        // 狀態
        activeTab,
        mobileMenuOpen,
        atlasNavOpen,
        historyTab,
        scienceRoom,
        varietiesKind,
        selectedFeatured,
        selectedTeaForBrewing,
        chenChuanChapterHref,
        teachingChapterHref,
        puerhChapterHref,
        oolongRegionHref,
        whiteRegionHref,
        redTeaHref,
        sensoryTopic,
        siteNavHeightPx,
        pendingScrollTarget,
        pendingOffsetScrollTarget,

        // Setters
        setActiveTab,
        setMobileMenuOpen,
        setAtlasNavOpen,
        setHistoryTab,
        setScienceRoom,
        setVarietiesKind,
        setSelectedFeatured,
        setSelectedTeaForBrewing,
        setChenChuanChapterHref,
        setTeachingChapterHref,
        setPuerhChapterHref,
        setOolongRegionHref,
        setWhiteRegionHref,
        setRedTeaHref,
        setSensoryTopic,
        setSiteNavHeightPx,
        setPendingScrollTarget,
        setPendingOffsetScrollTarget,

        // 導航函數
        goToTab,
        goToVarietiesKind,
        goToTeaExhibit,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};

/**
 * 使用 Navigation Context 的 Hook
 * 
 * @returns {Object} Navigation context value
 * @throws {Error} 如果在 NavigationProvider 外使用
 */
export const useNavigation = () => {
    const context = useContext(NavigationContext);

    if (!context) {
        throw new Error('useNavigation must be used within NavigationProvider');
    }

    return context;
};

export default NavigationContext;
