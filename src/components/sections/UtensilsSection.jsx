import React, { useState } from 'react';
import ImageModal from '../ImageModal';
import { featuredUtensils, otherUtensils, totalUtensilsCount } from '../../data/utensilsData';

/**
 * 常用茶器介紹區塊
 * 展示 32 個茶器的資訊，包括 3 個有圖片的精選茶器和 29 個其他茶器
 */
const UtensilsSection = () => {
    const [selectedUtensil, setSelectedUtensil] = useState(null);

    return (
        <div className="border-t border-stone-200 pt-8 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-[22px] text-stone-800 font-serif">常用茶器介紹</h4>
                <span className="text-sm text-stone-500 font-medium">展開完整列表 ({totalUtensilsCount}項)</span>
            </div>

            {/* Featured Utensils with Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {featuredUtensils.map((item, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-zoom-in flex flex-col md:flex-row"
                        onClick={() => setSelectedUtensil({ src: item.image, alt: item.name })}
                    >
                        {/* Image - 左側 */}
                        <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden bg-stone-100 relative">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>

                        {/* Content - 右側 */}
                        <div className="flex-1 p-6 space-y-3 flex flex-col justify-center min-h-[160px]">
                            {/* 主標題 */}
                            <h5 className="text-[20px] font-bold text-stone-900 font-serif leading-tight">
                                {item.name}
                            </h5>

                            {/* 分隔線 */}
                            <div className="w-12 h-0.5 bg-stone-300 group-hover:w-full transition-all duration-500"></div>

                            {/* 描述文字 */}
                            <p className="text-[17px] font-sans font-medium text-stone-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Utensils - Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherUtensils.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="font-bold text-[17px] text-stone-800 block mb-1 font-sans">{item.name}</span>
                        <span className="text-[15px] text-stone-500 font-sans">{item.desc}</span>
                    </div>
                ))}
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-40 pointer-events-none mix-blend-multiply"></div>

            {/* Image Modal */}
            <ImageModal
                isOpen={!!selectedUtensil}
                onClose={() => setSelectedUtensil(null)}
                src={selectedUtensil?.src}
                alt={selectedUtensil?.alt}
            />
        </div>
    );
};

export default UtensilsSection;
