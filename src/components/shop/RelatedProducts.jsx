import React from 'react';
import ProductCard from './ProductCard';
import { getRelatedProducts, getAllProducts } from '../../data/productData';
import { ShoppingBag } from 'lucide-react';

/**
 * 情境式商品推薦區塊
 *
 * 使用方式：
 *   <RelatedProducts tags={['茶具', '壺承', '茶席']} />
 *   <RelatedProducts tags={['茶葉', '烏龍', '冬片']} title="課後推薦茶葉" />
 *
 * @param {string[]} tags     - 關聯標籤（會自動匹配商品的 tags）
 * @param {string}   title    - 區塊標題（預設「相關推薦商品」）
 * @param {number}   limit    - 最多顯示幾個（預設 6）
 */
export default function RelatedProducts({ tags = [], title = '相關推薦商品', limit = 12, showAll = false }) {
    const products = showAll ? getAllProducts().slice(0, limit) : getRelatedProducts(tags, limit);

    if (products.length === 0) return null;

    return (
        <div className="mt-12 pt-10 border-t-2 border-dashed border-stone-200">
            {/* 標題列 */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
                    <ShoppingBag size={20} className="text-white" />
                </div>
                <div>
                    <h3 className="font-sans text-[22px] font-extrabold text-stone-900">{title}</h3>
                    <p className="font-sans text-[14px] text-stone-400">學完就帶走，讓知識活在生活裡</p>
                </div>
            </div>

            {/* 匹配標籤 */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.map((t) => (
                    <span key={t} className="text-[12px] font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-full px-2.5 py-0.5">
                        #{t}
                    </span>
                ))}
            </div>

            {/* 商品網格 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>

        </div>
    );
}
