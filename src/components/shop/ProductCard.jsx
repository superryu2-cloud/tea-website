import React, { useState } from 'react';
import { ExternalLink, ShoppingBag, X, ZoomIn } from 'lucide-react';

const CAT_BADGE = {
    teaware: { label: '茶具', bg: 'bg-amber-100', text: 'text-amber-700' },
    tea: { label: '茶葉', bg: 'bg-emerald-100', text: 'text-emerald-700' },
    accessory: { label: '配件', bg: 'bg-blue-100', text: 'text-blue-700' },
};

export default function ProductCard({ product }) {
    const { name, subtitle, price, image, category, orderUrl, specs, description } = product;
    const badge = CAT_BADGE[category] || CAT_BADGE.accessory;
    const [lightbox, setLightbox] = useState(false);

    return (
        <>
            <div className="group bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                {/* 圖片（可點擊放大） */}
                <div
                    className="relative h-44 bg-stone-100 overflow-hidden cursor-pointer"
                    onClick={() => setLightbox(true)}
                >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = '/images/shop/placeholder_teaware.png'; }}
                    />
                    <div className={`absolute top-3 left-3 ${badge.bg} ${badge.text} text-[14px] font-bold px-3 py-0.5 rounded-full`}>
                        {badge.label}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" />
                    </div>
                </div>

                {/* 內容 */}
                <div className="p-5 flex-1 flex flex-col">
                    <h4 className="font-sans text-[19px] font-extrabold text-stone-900 leading-snug">{name}</h4>
                    <p className="font-sans text-[17px] text-amber-600 mt-1.5 leading-relaxed">{subtitle}</p>
                    {description && (
                        <div className="mt-3 pl-3 py-2 border-l-[3px] border-emerald-400 bg-stone-50 rounded-r-lg">
                            <p className="font-sans text-[16px] text-stone-600 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{description}</p>
                        </div>
                    )}

                    {/* 規格 */}
                    {specs && specs.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {specs.map((s) => (
                                <span key={s} className="font-sans text-[14px] font-semibold text-stone-500 bg-stone-100 rounded-lg px-2.5 py-1">
                                    {s}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-auto pt-5 flex items-end justify-between gap-3">
                        <div>
                            <span className="font-sans text-[24px] font-extrabold text-stone-900">NT${price}</span>
                        </div>
                        {orderUrl && orderUrl.startsWith('http') ? (
                            <a
                                href={orderUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[17px] font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm hover:shadow-md"
                            >
                                <ShoppingBag size={16} />
                                訂購
                                <ExternalLink size={13} className="opacity-60" />
                            </a>
                        ) : orderUrl ? (
                            <span className="font-sans text-[15px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
                                {orderUrl}
                            </span>
                        ) : null}
                    </div>
                </div>
            </div>

            {/* Lightbox 全螢幕放大 */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
                    onClick={() => setLightbox(false)}
                >
                    <button
                        onClick={() => setLightbox(false)}
                        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    >
                        <X size={22} className="text-white" />
                    </button>
                    <img
                        src={image}
                        alt={name}
                        className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <p className="absolute bottom-6 text-white/70 text-[17px] font-sans font-semibold">{name}</p>
                </div>
            )}
        </>
    );
}
