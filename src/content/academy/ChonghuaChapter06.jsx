import React from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import { BookOpen } from 'lucide-react';

export default function ChonghuaChapter06() {
    return (
        <div className="space-y-12">
            <AcademySection 
                id="chonghua-06" 
                title="第06堂" 
                label="ACADEMY · CHONGHUA · CH06"
            >
                <AcademyContentBlock title="課程內容" icon={BookOpen}>
                    <div className="text-center py-12">
                        <p className="text-2xl font-bold text-stone-400">規劃中</p>
                        <p className="mt-4 text-stone-500">課程內容準備中，敬請期待</p>
                    </div>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
