import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const VarietiesNotesMode = ({ onShowAtlas, onShowEssay }) => {
    return (
        <div className="mb-10 museum-panel p-7 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="min-w-0">
                    <div className="museum-label">
                        <BookOpen size={14} className="opacity-80" />
                        TEA HOUSE · NOTES
                    </div>
                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">六大茶類｜筆記卡</h2>
                    <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                        先用一張筆記卡建立分類直覺；需要查細節時，再展開完整百科（含長文、參考資料、篩選查詢）。
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                    <button
                        type="button"
                        onClick={onShowAtlas}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                    >
                        展開百科
                        <ChevronRight size={16} />
                    </button>
                    <button
                        type="button"
                        onClick={onShowEssay}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                    >
                        讀陳椽長文
                        <ChevronRight size={16} className="text-emerald-700" />
                    </button>
                </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="museum-card px-5 py-4">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">KEY IDEA</div>
                    <div className="mt-1 font-bold text-stone-900">分類以「工藝」為主</div>
                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                        同一片鮮葉，因殺青、萎凋、氧化（發酵）、悶黃、堆積（後發酵）與乾燥方式不同，走出六條風味之路。
                    </div>
                </div>
                <div className="museum-card px-5 py-4">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO LEARN</div>
                    <div className="mt-1 font-bold text-stone-900">先「六大茶類」再進科學</div>
                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                        先抓住六大分類與代表茶，再用「氧化／烘焙／內含物」把風味講清楚，最後回到製程與沖泡。
                    </div>
                </div>
                <div className="museum-card px-5 py-4">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
                    <div className="mt-1 font-bold text-stone-900">教學用：先問三題</div>
                    <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                        這款茶是「哪一類」？關鍵工序是什麼？最典型的香氣/口感是什麼？用這三題建立學生的分類直覺。
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {[
                    { label: '綠茶', cls: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
                    { label: '白茶', cls: 'bg-stone-50 border-stone-200 text-stone-800' },
                    { label: '黃茶', cls: 'bg-amber-50 border-amber-200 text-amber-900' },
                    { label: '青茶（烏龍）', cls: 'bg-teal-50 border-teal-200 text-teal-900' },
                    { label: '紅茶', cls: 'bg-rose-50 border-rose-200 text-rose-900' },
                    { label: '黑茶', cls: 'bg-slate-50 border-slate-200 text-slate-900' },
                ].map((it) => (
                    <span key={it.label} className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-extrabold ${it.cls}`}>
                        {it.label}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default VarietiesNotesMode;
