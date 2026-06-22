import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

/**
 * ClickableImage - 可點擊放大的圖片元件
 * 整合 ImageLightbox 的狀態管理
 */
const ClickableImage = ({ src, alt, caption, className = '', captionClassName = 'text-stone-600' }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-full h-full">
            <div
                className={`relative group cursor-pointer flex-1 ${className}`}
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]"
                />
                {/* 放大圖示提示 */}
                <div className="absolute inset-0 rounded-2xl bg-black/0 transition-all duration-300 group-hover:bg-black/10">
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2.5 shadow-lg ring-1 ring-stone-200/70 backdrop-blur-sm transition-opacity duration-300 md:right-4 md:top-4 md:p-3 md:opacity-0 md:group-hover:opacity-100">
                        <ZoomIn size={20} className="text-stone-700 md:size-6" />
                    </div>
                </div>
            </div>
            {/* 圖片說明 */}
            {caption && (
                <div className={`mt-3 text-center text-[15px] md:text-[17px] font-medium leading-relaxed font-sans px-4 ${captionClassName}`}>
                    {caption}
                </div>
            )}

            <ImageLightbox
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                imageSrc={src}
                altText={alt}
            />
        </div>
    );
};

export default ClickableImage;
