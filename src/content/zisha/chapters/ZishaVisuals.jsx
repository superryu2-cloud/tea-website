import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Section } from '../../references/ui';
import ZishaInfographicsText from '../ZishaInfographicsText';
import { ExhibitImage } from '../components/ZishaShared';

export default function ZishaVisuals() {
    const [visualMode, setVisualMode] = useState('text');

    const openDetails = (id) => {
        if (typeof window === 'undefined') return;
        const el = document.getElementById(id);
        if (!el) return;
        if (el.tagName?.toLowerCase() === 'details') el.open = true;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <Section id="zisha-visual" title="紫砂圖解速查：器型 × 工藝 × 養護 × 泥料" icon={BookOpen}>
            <p>
                這一區提供「文字版（可搜尋）」與「原圖展板（可放大）」兩種閱讀方式，方便教學與備課。
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => setVisualMode('text')}
                    className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${visualMode === 'text' ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                        }`}
                >
                    文字版（可搜尋）
                </button>
                <button
                    type="button"
                    onClick={() => setVisualMode('images')}
                    className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${visualMode === 'images'
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                        }`}
                >
                    原圖展板（可放大）
                </button>
            </div>

            {visualMode === 'text' ? (
                <div className="mt-6 space-y-6">
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                        <div className="text-xs font-extrabold tracking-widest text-stone-500">快速跳轉（文字展板）</div>
                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {[
                                { id: 'zisha-visual-shapes', label: '器型' },
                                { id: 'zisha-visual-craft', label: '工藝' },
                                { id: 'zisha-visual-care', label: '養護' },
                                { id: 'zisha-visual-clay-palette', label: '泥料色卡' },
                                { id: 'zisha-visual-decoration', label: '裝飾工藝' },
                                { id: 'zisha-visual-20-clays', label: '20 個泥料' },
                                { id: 'zisha-visual-cheatsheet', label: '總覽圖卡' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => openDetails(item.id)}
                                    className="museum-card px-3 py-2 text-left border border-stone-200 hover:bg-white transition-colors"
                                >
                                    <span className="text-sm font-bold text-stone-900">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <ZishaInfographicsText />
                </div>
            ) : (
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <ExhibitImage title="看懂秒變資深紫砂壺高手（總覽）" src="/assets/zisha/infographics/zisha-cheatsheet.jpg" />
                    <ExhibitImage title="紫砂壺工藝大全" src="/assets/zisha/infographics/zisha-craft.jpg" />
                    <ExhibitImage title="紫砂壺養護大全" src="/assets/zisha/infographics/zisha-care.jpg" />
                    <ExhibitImage title="紫砂壺泥料大全（色卡）" src="/assets/zisha/infographics/zisha-clay-palette.jpg" />
                    {/* 裝飾工藝：依你提供的 4 張圖卡順序 */}
                    <ExhibitImage title="裝飾工藝（1）：絞泥／鏤雕／鋪砂" src="/assets/zisha/infographics/zisha-decoration-a.jpg" />
                    <ExhibitImage title="裝飾工藝（2）：陶刻／點彩／泥繪" src="/assets/zisha/infographics/zisha-decoration-b.jpg" />
                    <ExhibitImage title="裝飾工藝（3）：描金／竹編／彩繪" src="/assets/zisha/infographics/zisha-decoration-c.jpg" />
                    <ExhibitImage title="裝飾工藝（4）：貼花／包金包銀／冰紋" src="/assets/zisha/infographics/zisha-decoration-d.jpg" />
                    <ExhibitImage title="紫砂壺器型大全（圖鑑）" src="/assets/zisha/infographics/zisha-shapes.jpg" />

                    {/* 買紫砂必懂的 20 個泥料：依你提供的正確圖卡順序 */}
                    <ExhibitImage title="買紫砂必懂的 20 個泥料（總覽）" src="/assets/zisha/infographics/zisha-20-clays-overview.jpg" />
                    <ExhibitImage
                        title="買紫砂必懂的 20 個泥料（紫泥/清水泥/紅皮龍/底槽青/烏泥）"
                        src="/assets/zisha/infographics/zisha-20-clays-a.jpg"
                    />
                    <ExhibitImage title="買紫砂必懂的 20 個泥料（天青/青灰紫泥/紅泥/朱泥/大紅袍）" src="/assets/zisha/infographics/zisha-20-clays-b.jpg" />
                    <ExhibitImage title="買紫砂必懂的 20 個泥料（降坡泥/本山綠/梨皮泥/共生礦）" src="/assets/zisha/infographics/zisha-20-clays-c.jpg" />
                    <ExhibitImage title="買紫砂必懂的 20 個泥料（本山段/老段泥/青灰段/黃金段/芝麻段）" src="/assets/zisha/infographics/zisha-20-clays-d.jpg" />
                </div>
            )}
        </Section>
    );
}
