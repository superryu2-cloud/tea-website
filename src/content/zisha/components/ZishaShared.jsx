import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, ZoomOut, Move, RotateCcw } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   DetailsCard 摺疊展板元件 (保留相容性)
───────────────────────────────────────────────────────────── */
export function DetailsCard({ id, title, subtitle, children }) {
    return (
        <details id={id} className="group scroll-mt-28 rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
            <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start justify-between gap-6">
                <div className="min-w-0">
                    <div className="font-extrabold text-stone-900">{title}</div>
                    {subtitle ? <div className="mt-1 text-sm text-stone-600">{subtitle}</div> : null}
                    <div className="mt-2 text-xs text-stone-500">點此展開／收合</div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-xl border border-stone-200 bg-white flex items-center justify-center text-stone-500">
                    <span className="text-lg leading-none group-open:rotate-45 transition-transform">＋</span>
                </div>
            </summary>
            <div className="px-6 pb-6">
                <div className="mt-5 space-y-4 text-stone-700 leading-relaxed">{children}</div>
            </div>
        </details>
    );
}

/* ─────────────────────────────────────────────────────────────
   ExhibitImage 高清展板元件 (深度整合 Interactive Lightbox 燈箱)
   支援滾輪縮放、按住左鍵拖曳移動、雙擊重設與鍵盤 Esc 關閉
───────────────────────────────────────────────────────────── */
export function ExhibitImage({ title, src }) {
    const [broken, setBroken] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const imgRef = useRef(null);

    // 關閉燈箱並重設狀態
    const closeLightbox = () => {
        setIsOpen(false);
        setScale(1);
        setPosition({ x: 0, y: 0 });
        setIsDragging(false);
    };

    // 監聽鍵盤 Esc 鍵
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // 處理滑鼠滾輪無級縮放
    const handleWheel = (e) => {
        e.preventDefault();
        const zoomStep = 0.15;
        let nextScale = scale + (e.deltaY < 0 ? zoomStep : -zoomStep);
        nextScale = Math.max(0.5, Math.min(5, nextScale)); // 限制在 0.5倍 到 5倍 之間
        
        // 若縮回小於等於 1 倍，重設位置
        if (nextScale <= 1) {
            setPosition({ x: 0, y: 0 });
        }
        setScale(nextScale);
    };

    // 處理滑鼠按住拖曳開始
    const handleMouseDown = (e) => {
        if (scale <= 1) return; // 只有放大狀態下允許拖曳
        e.preventDefault();
        setIsDragging(true);
        dragStart.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        };
    };

    // 處理滑鼠拖曳移動
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.current.x,
            y: e.clientY - dragStart.current.y
        });
    };

    // 處理滑鼠拖曳結束
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // 處理雙擊還原
    const handleDoubleClick = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <>
            <div className="museum-card overflow-hidden border border-stone-200 bg-white">
                <div className="px-5 py-4 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex justify-between items-center">
                    <div className="font-extrabold text-stone-900 font-serif">{title}</div>
                    {!broken && (
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 border border-amber-100 rounded-md">
                            點擊可互動放大
                        </span>
                    )}
                </div>
                <div className="p-4">
                    {broken ? (
                        <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-10 text-center text-sm text-stone-500 font-medium">
                            此展板圖尚未加入（加入後會自動顯示）
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="block w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-50 group/img relative"
                        >
                            <img
                                src={src}
                                alt={title}
                                loading="lazy"
                                onError={() => setBroken(true)}
                                className="w-full object-contain transition-transform duration-500 group-hover/img:scale-[1.02]"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                                <div className="px-4 py-2 rounded-xl bg-white/95 backdrop-blur-sm text-stone-800 text-xs font-extrabold shadow-md flex items-center gap-1.5 border border-stone-200">
                                    <ZoomIn size={14} className="text-amber-700 animate-pulse" />
                                    <span>開啟高清互動展示</span>
                                </div>
                            </div>
                        </button>
                    )}
                </div>
            </div>

            {/* ── 高清互動燈箱 Modal ── */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[100] bg-stone-900/90 backdrop-blur-md flex flex-col justify-between select-none animate-fadeIn"
                    onClick={(e) => {
                        // 點擊背景關閉
                        if (e.target === e.currentTarget) closeLightbox();
                    }}
                >
                    {/* 頂部控制欄 */}
                    <div className="w-full px-6 py-4 bg-stone-950/80 backdrop-blur-sm border-b border-white/5 flex items-center justify-between z-10">
                        <div className="text-white min-w-0">
                            <span className="text-[10px] font-bold text-amber-500 tracking-wider block uppercase mb-0.5">HIGH-DEFINITION INTERACTIVE EXHIBIT</span>
                            <h4 className="text-base md:text-lg font-bold truncate font-serif">{title}</h4>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            {/* 控制說明提示 */}
                            <div className="hidden lg:flex items-center gap-4 text-[11px] text-stone-400 mr-4 font-medium">
                                <span className="flex items-center gap-1"><ZoomIn size={12} /> 滾輪縮放</span>
                                <span className="flex items-center gap-1"><Move size={12} /> 按住左鍵拖曳</span>
                                <span className="flex items-center gap-1"><RotateCcw size={12} /> 雙擊重設</span>
                            </div>

                            <button 
                                type="button"
                                onClick={handleDoubleClick}
                                title="重設比例"
                                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-stone-300 flex items-center justify-center transition-colors"
                            >
                                <RotateCcw size={16} />
                            </button>
                            <button 
                                type="button"
                                onClick={closeLightbox}
                                title="關閉展板 (Esc)"
                                className="w-9 h-9 rounded-lg border border-white/10 bg-red-950/50 hover:bg-red-900 text-red-200 flex items-center justify-center transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    {/* 中央畫布區 */}
                    <div 
                        className="flex-1 w-full relative overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <img
                            ref={imgRef}
                            src={src}
                            alt={title}
                            onDoubleClick={handleDoubleClick}
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                                transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transformOrigin: 'center center',
                                maxWidth: '90%',
                                maxHeight: '85vh',
                            }}
                            className="object-contain shadow-2xl rounded-lg pointer-events-auto border border-white/5 bg-stone-950/20"
                        />
                    </div>

                    {/* 底部提示資訊欄 */}
                    <div className="w-full px-6 py-3 bg-stone-950/50 text-center text-xs text-stone-400 font-semibold border-t border-white/5 z-10 flex flex-col sm:flex-row justify-between items-center gap-2">
                        <span>目前縮放比例: <span className="text-amber-500 font-mono font-bold">{(scale * 100).toFixed(0)}%</span></span>
                        <span className="hidden sm:inline">雙擊圖片可還原比例，點擊黑色半透明空白處即可關閉</span>
                    </div>
                </div>
            )}
        </>
    );
}
