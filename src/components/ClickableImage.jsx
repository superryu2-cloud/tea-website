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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <ZoomIn size={24} className="text-stone-700" />
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
