import React from 'react';
import {
    Flame,
    Thermometer,
    Droplet,
    Wind,
    Activity,
    AlertCircle,
    CheckCircle,
    Layers,
    Coffee,
    Scale,
    Soup,
    Zap,
    Clock,
    RefreshCw
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function ZhiyaChapter03() {
    return (
        <div className="space-y-12">
            {/* 1. Aroma Types */}
            <AcademySection id="zhiya-03-aroma-types" title="茶葉香氣的三大類型：清香、焙香與濃香" label="ACADEMY · ZHIYA · CH03">
                <AcademyContentBlock title="香氣分類的基礎與核心差異" icon={Wind}>
                    <p className="mb-6 leading-relaxed">
                        在品鑑豐富多元的台灣茶世界時，首要任務是掌握清香、焙香與濃香這三種核心香氣類型。這不僅是分類基礎，更代表截然不同的製茶工藝與品飲哲學。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">香氣分類與代表茶款</h5>
                    <p className="mb-4 leading-relaxed">
                        台灣茶分類雖多，但從「香氣」入手最直接。
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                            <strong className="block text-emerald-900 text-lg mb-2">清香型 (Qing Xiang)</strong>
                            <ul className="text-sm text-emerald-800 list-disc list-inside space-y-1">
                                <li>文山包種茶</li>
                                <li>高冷茶（如梨山、阿里山）</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <strong className="block text-amber-900 text-lg mb-2">焙香型 (Bei Xiang)</strong>
                            <ul className="text-sm text-amber-800 list-disc list-inside space-y-1">
                                <li>鐵觀音</li>
                                <li>凍頂烏龍茶</li>
                                <li>鹿野紅烏龍</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                            <strong className="block text-red-900 text-lg mb-2">濃香型 (Nong Xiang)</strong>
                            <ul className="text-sm text-red-800 list-disc list-inside space-y-1">
                                <li>東方美人茶</li>
                                <li>日月潭紅茶</li>
                                <li>小葉種紅茶</li>
                            </ul>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">核心差異：發酵度的影響</h5>
                    <p className="mb-4 leading-relaxed">
                        區分關鍵在於發酵度。隨著發酵度增加，化學成分變化形成不同輪廓。
                    </p>
                    <AcademyHighlightBox type="tip">
                        <strong className="block text-stone-900 mb-2">生動比喻：濃度差異</strong>
                        <p className="text-stone-800 text-sm">
                            <strong className="text-emerald-700">清香型</strong> 如「青菜豆腐湯」，滋味清淡、純粹而鮮爽。<br />
                            <strong className="text-red-700">濃香型</strong> 如「康寶濃湯」，風味濃郁、層次豐富。<br />
                            兩者無優劣之分，僅風味偏好不同。
                        </p>
                    </AcademyHighlightBox>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg mt-6">各類型茶的品鑑要點</h5>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <CheckCircle className="text-emerald-500 mr-3 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">清香型：忌「混濁」</strong>
                                <p className="text-sm text-stone-700">追求清揚鮮爽。忌視覺、嗅覺、味覺上的混濁。對水質、茶具潔淨度及環境氣味要求極高。</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle className="text-red-500 mr-3 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">濃香型：求「濃而不雜」</strong>
                                <p className="text-sm text-stone-700">長時間重發酵易生雜味。最高境界在於濃郁飽滿基礎上，依然保持純淨度，無不悅雜味（如久熬大骨湯需去浮沫）。</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 2. Roasting Science */}
            <AcademySection id="zhiya-03-roasting-science" title="焙火的工藝與科學" label="ACADEMY · ZHIYA · CH03">
                <AcademyContentBlock title="梅納反應與歷史意涵" icon={Flame}>
                    <p className="mb-6 leading-relaxed">
                        焙火不只是乾燥，更是涉及深層化學變化的藝術，賦予茶葉沉穩醇厚性格。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">焙火的功能與優點</h5>
                    <ul className="grid md:grid-cols-2 gap-4 mb-8">
                        <li className="bg-stone-50 p-4 rounded border border-stone-200">
                            <strong className="block text-stone-900 mb-1">降低咖啡因</strong>
                            <span className="text-stone-600 text-sm">咖啡因加熱昇華脫離，對睡眠影響較小。</span>
                        </li>
                        <li className="bg-stone-50 p-4 rounded border border-stone-200">
                            <strong className="block text-stone-900 mb-1">增加保存性</strong>
                            <span className="text-stone-600 text-sm">降低含水量，品質穩定更耐久存，不易後氧化變質。</span>
                        </li>
                        <li className="bg-stone-50 p-4 rounded border border-stone-200">
                            <strong className="block text-stone-900 mb-1">提升風味</strong>
                            <span className="text-stone-600 text-sm">轉化青澀味，使口感甘醇飽滿。</span>
                        </li>
                        <li className="bg-stone-50 p-4 rounded border border-stone-200">
                            <strong className="block text-stone-900 mb-1">創造獨特香氣</strong>
                            <span className="text-stone-600 text-sm">產生米香、糖香等溫暖氣息。</span>
                        </li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">核心化學變化：梅納反應 (Maillard Reaction)</h5>
                    <p className="mb-4 leading-relaxed">
                        焙香來源。胺基酸與還原糖在加熱中（約100°C-130°C）發生反應，轉化出金黃色澤與濃郁香氣（如烤麵包、烘焙咖啡豆）。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">「再乾」與「烘焙」的根本區別</h5>
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <strong className="block text-blue-900 mb-2">再乾 (Re-drying)</strong>
                            <p className="text-sm text-blue-800 mb-2">目的：<span className="font-bold text-blue-900">穩定</span>品質。</p>
                            <p className="text-sm text-blue-800">
                                低溫降含水量至3%。不改變色香味，僅固定狀態。清香型多採用。
                            </p>
                        </div>
                        <div className="flex-1 bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <strong className="block text-amber-900 mb-2">烘焙 (Roasting)</strong>
                            <p className="text-sm text-amber-800 mb-2">目的：<span className="font-bold text-amber-900">改變</span>品質。</p>
                            <p className="text-sm text-amber-800">
                                特定溫度時間觸發梅納反應，賦予新生命，改變色香味。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">火在茶文化中的歷史</h5>
                    <p className="text-stone-700 leading-relaxed">
                        陸羽《茶經》「六曰炙」即烤茶。古時去除運輸濕氣雜味之智慧，為現代焙火工藝雛形。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 3. Principle: Tea as Monarch */}
            <AcademySection id="zhiya-03-principle" title="焙火的最高原則：「茶為君，火為臣」" label="ACADEMY · ZHIYA · CH03">
                <AcademyContentBlock title="主從關係與市場迷思" icon={Scale}>
                    <p className="mb-6 leading-relaxed">
                        「茶為君，火為臣」是焙火工藝的最高哲學，闡述茶葉與焙火的主從關係。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">原則內涵：以茶為本，以火為輔</h5>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="border-l-4 border-stone-800 pl-4">
                            <strong className="block text-stone-900 text-lg">茶為君 (Tea is Monarch)</strong>
                            <p className="text-stone-700 text-sm mt-2">茶本質是基礎。優良茶菁（強健君王）是前提。</p>
                        </div>
                        <div className="border-l-4 border-amber-600 pl-4">
                            <strong className="block text-stone-900 text-lg">火為臣 (Fire is Minister)</strong>
                            <p className="text-stone-700 text-sm mt-2">輔佐角色。去除雜味水氣，提升豐富風味，而非取代。</p>
                        </div>
                    </div>
                    <p className="mb-6 italic text-stone-600">
                        「不可能拿快腐敗的菜，期望透過高超烹飪變得美味。」茶質不佳，焙火亦無法挽救。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">破除迷思：焙火非遮瑕之術</h5>
                    <p className="mb-4 leading-relaxed">
                        市場誤認「焙火是為掩蓋缺點」（如餐廳重口味掩蓋不新鮮食材）。優質焙火應是優質茶葉的風味昇華，而非劣質遮瑕。
                    </p>

                    <AcademyHighlightBox type="important">
                        <strong className="block text-stone-900 mb-2 flex items-center">
                            <AlertCircle size={18} className="mr-2" />
                            品鑑禁忌：茶火分離
                        </strong>
                        <p className="text-stone-800 text-sm">
                            僅有濃重火味焦味，無茶葉本質香氣。此為臣僭權，完全違背原則。好茶應茶味與火味完美融合。
                        </p>
                    </AcademyHighlightBox>
                </AcademyContentBlock>
            </AcademySection>

            {/* 4. Practical Tasting */}
            <AcademySection id="zhiya-03-tasting-practice" title="品鑑實務：瑕疵的辨識與技巧修正" label="ACADEMY · ZHIYA · CH03">
                <AcademyContentBlock title="發現問題到解決問題" icon={Activity}>
                    <p className="mb-6 leading-relaxed">
                        從欣賞優點到辨識瑕疵，並思考技巧修正。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">標準評鑑法介紹</h5>
                    <div className="bg-stone-50 p-4 rounded-lg mb-6 flex justify-around flex-wrap gap-4">
                        <div className="text-center">
                            <strong className="block text-stone-900">定量</strong>
                            <span className="text-xs text-stone-600">3公克</span>
                        </div>
                        <div className="text-center">
                            <strong className="block text-stone-900">定器</strong>
                            <span className="text-xs text-stone-600">150cc 審評杯碗</span>
                        </div>
                        <div className="text-center">
                            <strong className="block text-stone-900">定時</strong>
                            <span className="text-xs text-stone-600">6分鐘 (條索5分)</span>
                        </div>
                        <div className="text-center">
                            <strong className="block text-stone-900">定溫</strong>
                            <span className="text-xs text-stone-600">沸水</span>
                        </div>
                    </div>
                    <p className="text-sm text-stone-700 text-center mb-8">
                        此「剝皮式」泡法旨在逼出所有優缺點，以利客觀評判。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">焙火不當的常見瑕疵</h5>
                    <ul className="grid grid-cols-2 gap-4 mb-8">
                        <li><strong className="text-stone-900">碳化味</strong>: 焦味重，過度焙火，結構破壞。</li>
                        <li><strong className="text-stone-900">焦味</strong>: 比碳化輕，仍帶過火氣息。</li>
                        <li><strong className="text-stone-900">酸味</strong>: 不當焙火或存放（非老茶自然酸）。</li>
                        <li><strong className="text-stone-900">煙味</strong>: 環境不佳或燃料問題。</li>
                        <li><strong className="text-stone-900">悶味</strong>: 焙後未散熱。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">進階技法：修正與修飾</h5>
                    <p className="mb-4 leading-relaxed text-sm">
                        目標：將65分的茶提升至70分。非點石成金，而是發揮最大潛力（以物練我）。
                    </p>

                    <div className="space-y-6">
                        <div className="border border-stone-200 rounded-lg p-5">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Wind className="mr-2" size={18} /> 1. 蒸法 (針對輕微雜味)
                            </h6>
                            <p className="text-sm text-stone-700 mb-2">
                                <span className="font-bold">操作：</span>溫壺稍長。倒出熱水，乾茶入熱壺，加蓋前後左右搖晃5-10次。立即開蓋散味。
                            </p>
                        </div>
                        <div className="border border-stone-200 rounded-lg p-5">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <RefreshCw className="mr-2" size={18} /> 2. 盪法 (針對較重瑕疵)
                            </h6>
                            <p className="text-sm text-stone-700 mb-2">
                                <span className="font-bold">操作：</span>在「蒸」之後，注入少量熱水（不蓋過茶葉）。加蓋，以手腕為軸快速旋轉8-10次（離心力清洗）。湯直接倒掉，勿入公道杯。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <strong className="block text-amber-900 mb-2">修正後續沖泡要點</strong>
                        <ul className="list-disc list-inside text-sm text-amber-800">
                            <li><strong>注水力道</strong>：改為「細注慢沖」，避免再次激出雜味。</li>
                            <li><strong>浸泡時間</strong>：第一泡減少 10-15 秒（因預處理加速釋出）。</li>
                        </ul>
                    </div>

                </AcademyContentBlock>
            </AcademySection>

            {/* Conclusion */}
            <AcademySection id="zhiya-03-conclusion" title="結語" label="ACADEMY · ZHIYA · CH03">
                <AcademyContentBlock title="以物練我" icon={Heart}>
                    <p className="leading-relaxed text-stone-700">
                        從焙火理論到「茶為君，火為臣」哲學，最終落實於辨識與修正技巧。這不僅是焙香茶的深度探討，更體現茶人「以物練我」的精神——面對不完美，不輕易否定，而是透過技法與心法去調整提升，達到人茶和諧的修為境界。
                    </p>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
