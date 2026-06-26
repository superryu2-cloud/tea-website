import React from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import { BookOpen } from 'lucide-react';

export default function ChonghuaChapter05() {
    return (
        <div className="space-y-12">
            <AcademySection
                id="chonghua-05"
                title="第05堂"
                label="ACADEMY · CHONGHUA · CH05"
                subtitle="課程內容重新整理中"
            >
                <AcademyContentBlock title="課程內容準備中" icon={BookOpen}>
                    <div className="rounded-3xl border border-dashed border-stone-300 bg-stone-50 px-6 py-12 text-center">
                        <p className="text-2xl font-black text-stone-500">第05堂內容準備中</p>
                        <p className="mt-4 text-stone-500">原本的「認識氧化」已移至第09堂，這堂課之後再補上新內容。</p>
                    </div>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
