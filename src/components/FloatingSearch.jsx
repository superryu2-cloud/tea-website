import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import SEARCH_INDEX from '../data/searchIndex';

const CATEGORY_COLORS = {
    '六大茶類': 'bg-emerald-100 text-emerald-700',
    '青茶': 'bg-emerald-100 text-emerald-700',
    '特色茶': 'bg-amber-100 text-amber-700',
    '品種': 'bg-teal-100 text-teal-700',
    '科學': 'bg-blue-100 text-blue-700',
    '沖泡': 'bg-orange-100 text-orange-700',
    '製程': 'bg-orange-100 text-orange-700',
    '茶道': 'bg-rose-100 text-rose-700',
    '產區': 'bg-lime-100 text-lime-700',
    '普洱': 'bg-yellow-100 text-yellow-700',
    '紫砂': 'bg-red-100 text-red-700',
    '歷史': 'bg-violet-100 text-violet-700',
    '季節': 'bg-cyan-100 text-cyan-700',
    '品評': 'bg-pink-100 text-pink-700',
};

export default function FloatingSearch({ navigateToSearch, goToTab }) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const panelRef = useRef(null);

    /** 異體字正規化：臺↔台 等常見變體 */
    const normalize = (s) => s.replace(/臺/g, '台').replace(/製/g, '制').replace(/裏/g, '裡');

    const results = useMemo(() => {
        const q = normalize(query.trim().toLowerCase());
        if (!q) return [];
        return SEARCH_INDEX.filter(item =>
            normalize(item.keywords.toLowerCase()).includes(q) || normalize(item.label.toLowerCase()).includes(q)
        ).slice(0, 6);
    }, [query]);

    const navigate = useCallback((item) => {
        if (navigateToSearch && item.detail) {
            navigateToSearch(item.tab, item.detail);
        } else {
            goToTab(item.tab);
        }
        setOpen(false);
        // 確保任何情況都會捲到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [navigateToSearch, goToTab]);

    // 點擊外部關閉
    useEffect(() => {
        if (!open) return;
        const handler = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open]);

    // 開啟時自動 focus 搜尋框
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open]);

    return (
        <>
            {/* 浮動搜尋按鈕 */}
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className={`fixed bottom-[144px] right-5 md:right-7 z-[9996] w-12 h-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center ${open
                    ? 'bg-stone-700 text-white'
                    : 'bg-gradient-to-br from-amber-400 to-amber-500 text-stone-900'
                    }`}
                aria-label="搜尋百科"
                title="搜尋百科"
            >
                {open ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* 搜尋面板 */}
            {open && (
                <div
                    ref={panelRef}
                    className="fixed bottom-[204px] right-5 md:right-7 z-[9997] w-[340px] max-h-[420px] rounded-2xl bg-white/95 backdrop-blur-xl border border-stone-200 shadow-2xl overflow-hidden animate-in"
                    style={{
                        animation: 'floatingSearchIn 200ms ease-out',
                    }}
                >
                    {/* 標題列 */}
                    <div className="px-4 pt-4 pb-2">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-sm">
                                <Search size={14} className="text-white" />
                            </div>
                            <div>
                                <div className="text-[15px] font-extrabold text-stone-900">百科搜尋</div>
                                <div className="text-[10px] font-semibold text-stone-400 tracking-widest uppercase">Quick Search</div>
                            </div>
                        </div>

                        {/* 搜尋輸入框 */}
                        <div className="relative">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="搜尋茶類、品種、工藝、產區..."
                                className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-900 placeholder-stone-400 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all"
                            />
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* 搜尋結果 */}
                    <div className="px-3 pb-3 max-h-[280px] overflow-y-auto">
                        {results.length > 0 && (
                            <div className="space-y-1 mt-2">
                                {results.map((item, i) => (
                                    <button
                                        type="button"
                                        key={`${item.tab}-${i}`}
                                        onClick={() => navigate(item)}
                                        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-stone-100 transition-all duration-150 text-left group"
                                    >
                                        <span className={`shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide ${CATEGORY_COLORS[item.category] || 'bg-stone-100 text-stone-600'}`}>
                                            {item.category}
                                        </span>
                                        <span className="text-[13px] font-semibold text-stone-700 group-hover:text-stone-900 truncate flex-1">
                                            {item.label}
                                        </span>
                                        <ChevronRight size={12} className="shrink-0 text-stone-300 group-hover:text-emerald-600 transition-colors" />
                                    </button>
                                ))}
                            </div>
                        )}

                        {query && results.length === 0 && (
                            <div className="mt-2 px-3 py-3 rounded-xl bg-stone-50 text-center text-stone-400 text-[13px]">
                                找不到「{query}」的相關內容
                            </div>
                        )}

                        {!query && (
                            <div className="mt-2 px-3 py-2 text-stone-400 text-[12px] text-center">
                                輸入關鍵字即可搜尋全站內容
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
        @keyframes floatingSearchIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
        </>
    );
}
