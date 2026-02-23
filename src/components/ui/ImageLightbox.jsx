import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

/**
 * 可點擊放大的圖片元件 + 全螢幕燈箱
 * 使用 createPortal 渲染到 document.body，徹底脫離父層 overflow-hidden。
 * z-[99999] 確保最頂層渲染，不被任何元件遮擋。
 */
export default function ImageLightbox({ src, alt, className = '', imgClassName = '' }) {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback((e) => {
        e.stopPropagation();
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => setOpen(false), []);

    // ESC 鍵關閉
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, handleClose]);

    // 鎖定背景滾動
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            {/* 縮圖（可點擊） */}
            <div
                className={`cursor-zoom-in ${className}`}
                onClick={handleOpen}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleOpen(e); }}
                aria-label={`放大圖片：${alt}`}
            >
                <img src={src} alt={alt} className={imgClassName} />
            </div>

            {/* 燈箱 — 用 Portal 渲染到 body，脫離所有父層限制 */}
            {open && createPortal(
                <div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
                    onClick={handleClose}
                >
                    {/* 關閉按鈕 */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                        aria-label="關閉"
                    >
                        <X size={20} className="text-white" />
                    </button>

                    {/* 放大的圖片 */}
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>,
                document.body
            )}
        </>
    );
}
