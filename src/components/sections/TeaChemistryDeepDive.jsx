import React from 'react';
import { FlaskConical, Wind } from 'lucide-react';
import scienceChapters from '../../content/scienceChapters';

const TeaChemistryDeepDive = ({ embedded = false, activeHref = null }) => {
    const activeChapter = (activeHref && activeHref.startsWith('#chapter'))
        ? activeHref.substring(1)
        : 'chapter1';
    const EnzymeAnimation = () => (
        <div className="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {/* PPO Animation */}
            <div className="museum-card museum-paper p-6">
                <h5 className="font-bold text-stone-800 mb-4">PPO 作用示意 (溫和氧化)</h5>
                <div className="relative w-32 h-32 mx-auto">
                    {/* Cell */}
                    <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-pulse"></div>
                    {/* Polyphenols slowly leaking */}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-1"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-2"></div>
                    {/* Enzyme */}
                    <div className="absolute top-1/4 left-1/4 text-green-600">
                        <FlaskConical size={20} />
                    </div>
                </div>
                <p className="text-xs text-stone-500 mt-4">失水導致細胞膜通透性增加，茶多酚緩慢滲出與PPO酶接觸，產生金黃色茶湯。</p>
            </div>

            {/* POD Animation */}
            <div className="museum-card museum-paper p-6">
                <h5 className="font-bold text-stone-800 mb-4">POD 作用示意 (劇烈氧化)</h5>
                <div className="relative w-32 h-32 mx-auto">
                    {/* Broken Cell */}
                    <div className="absolute inset-0 border-2 border-dashed border-red-500 rounded-full"></div>
                    {/* Oxygen rushing in */}
                    <div className="absolute top-1/4 right-1/4 text-blue-400 animate-ping">
                        <Wind size={16} />
                    </div>
                    {/* Rapid browning */}
                    <div className="absolute inset-2 bg-red-800/30 rounded-full animate-pod-flash"></div>
                    {/* Enzyme */}
                    <div className="absolute bottom-1/4 left-1/4 text-red-700">
                        <FlaskConical size={20} />
                    </div>
                </div>
                <p className="text-xs text-stone-500 mt-4">細胞結構破損，氧氣大量介入，POD酶劇烈作用，茶葉快速變紅褐。</p>
            </div>
        </div>
    );

    const chapters = scienceChapters;

    return (
        <div className={embedded ? "" : "py-12 animate-fadeIn"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!embedded && (
                    <div className="mb-10">
                        <div className="museum-frame museum-paper ">
                            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-200/35 blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-200/25 blur-3xl"></div>
                            <div className="relative px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <div className="museum-label">
                                        <FlaskConical size={14} className="opacity-80" />
                                        EXHIBIT · WHITEPAPER
                                    </div>
                                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶葉氧化與發酵機制技術白皮書</h2>
                                    <p className="mt-3 text-stone-600 leading-relaxed max-w-3xl">
                                        從生物化學角度，深入剖析茶葉風味形成的底層邏輯；可搭配章節導覽逐段閱讀。
                                    </p>
                                </div>
                                <div className="md:flex md:justify-end">
                                    <button
                                        type="button"
                                        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-extrabold border border-stone-300 bg-white hover:bg-stone-50 text-stone-700"
                                    >
                                        返回科學頁
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-8">
                    {/* Main Content */}
                    <div className="w-full">
                        <div className="museum-frame bg-white p-8 md:p-12 min-h-[600px]">
                            {chapters[activeChapter] ? chapters[activeChapter].content : <div>Chapter not found</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeaChemistryDeepDive;
