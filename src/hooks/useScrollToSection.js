import { useCallback } from 'react';

/**
 * 自訂 Hook：統一的滾動到指定區塊功能
 * 
 * @param {number} siteNavHeightPx - 導航列高度（像素）
 * @returns {Object} 包含滾動相關函數的物件
 */
const useScrollToSection = (siteNavHeightPx = 88) => {
    /**
     * 滾動到指定的 DOM 元素
     * 
     * @param {string} targetId - 目標元素的 ID
     * @param {Object} options - 滾動選項
     * @param {number} options.additionalOffset - 額外的偏移量（預設 0）
     * @param {string[]} options.contextBarIds - 需要計算高度的 context bar ID 列表
     * @param {boolean} options.smooth - 是否使用平滑滾動（預設 true）
     */
    const scrollToSection = useCallback((targetId, options = {}) => {
        if (typeof window === 'undefined') return;
        if (!targetId) return;

        const {
            additionalOffset = 0,
            contextBarIds = ['varieties-context-bar'],
            smooth = true
        } = options;

        // 計算 context bar 的總高度
        let contextBarHeight = 0;
        contextBarIds.forEach(id => {
            const contextBar = document.getElementById(id);
            if (contextBar) {
                contextBarHeight += contextBar.getBoundingClientRect().height;
            }
        });

        // 計算總偏移量
        const totalOffset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + additionalOffset);

        // 找到目標元素
        const el = document.getElementById(targetId);
        if (!el) {
            console.warn(`Element with id "${targetId}" not found`);
            return;
        }

        // 計算滾動位置
        const top = el.getBoundingClientRect().top + window.scrollY - totalOffset;

        // 執行滾動
        window.scrollTo({
            top: Math.max(0, top),
            behavior: smooth ? 'smooth' : 'auto'
        });
    }, [siteNavHeightPx]);

    /**
     * 滾動到指定的 href（帶有重試機制）
     * 適用於動態載入的內容
     * 
     * @param {string} href - 目標 href（例如 '#section-id'）
     * @param {Object} options - 滾動選項（同 scrollToSection）
     * @param {number} maxAttempts - 最大重試次數（預設 30）
     * @param {number} retryDelay - 重試延遲（毫秒，預設 50）
     */
    const scrollToHref = useCallback((href, options = {}, maxAttempts = 30, retryDelay = 50) => {
        if (typeof window === 'undefined') return;
        if (!href) return;

        const targetId = String(href).startsWith('#') ? String(href).slice(1) : String(href);
        let attempts = 0;

        const tryScroll = () => {
            const el = document.getElementById(targetId);
            if (el) {
                scrollToSection(targetId, options);
                return;
            }

            attempts += 1;
            if (attempts > maxAttempts) {
                console.warn(`Failed to find element with id "${targetId}" after ${maxAttempts} attempts`);
                return;
            }

            window.setTimeout(tryScroll, retryDelay);
        };

        tryScroll();
    }, [scrollToSection]);

    /**
     * 滾動到頁面頂部
     * 
     * @param {boolean} smooth - 是否使用平滑滾動（預設 true）
     */
    const scrollToTop = useCallback((smooth = true) => {
        if (typeof window === 'undefined') return;

        window.scrollTo({
            top: 0,
            behavior: smooth ? 'smooth' : 'auto'
        });
    }, []);

    return {
        scrollToSection,
        scrollToHref,
        scrollToTop
    };
};

export default useScrollToSection;
