import React from 'react';
import { BookOpen } from 'lucide-react';
import ChenChuanTeaClassification from '../../content/varieties/ChenChuanTeaClassification';

const ChenChuanEssaySection = ({
    showChenChuanEssay,
    setShowChenChuanEssay,
    chenChuanScrollOffsetPx,
    chenChuanChapterHref
}) => {
    return (
        <div className="mb-12">
            <div className="bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
                <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="bg-white border border-stone-200 rounded-xl p-3 text-green-800">
                            <BookOpen size={22} />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-stone-900">陳椽《茶業通史》：六大茶類分類的理論與實際</h3>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowChenChuanEssay((v) => !v)}
                        aria-expanded={showChenChuanEssay}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold border transition-colors self-start md:self-auto w-full md:w-auto
                  border-green-700 text-green-900 bg-green-100 hover:bg-green-200"
                    >
                        {showChenChuanEssay ? '收合文章' : '展開文章'}
                    </button>
                </div>

                {showChenChuanEssay && (
                    <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <ChenChuanTeaClassification
                            topOffsetPx={chenChuanScrollOffsetPx}
                            activeHref={chenChuanChapterHref === '#cc-all' ? null : chenChuanChapterHref}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChenChuanEssaySection;
