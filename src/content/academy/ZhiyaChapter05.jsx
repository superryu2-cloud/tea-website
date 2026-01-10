import React from 'react';
import {
    RotateCcw,
    Zap,
    Thermometer,
    Wind,
    Droplet,
    Layout,
    Box,
    Palette,
    Sun,
    Coffee,
    CheckSquare,
    ClipboardList,
    Clock,
    UserCheck,
    AlertCircle,
    BookOpen,
    Flame // Added missing import
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function ZhiyaChapter05() {
    return (
        <div className="space-y-12">
            {/* Intro / Section 1 */}
            <AcademySection id="zhiya-05-review" title="課程回顧：茶湯品質的探討與修飾技巧" label="ACADEMY · ZHIYA · CH05">
                <AcademyContentBlock title="前言：奠定扎實基礎" icon={RotateCcw}>
                    <p className="mb-6 leading-relaxed">
                        要掌握進階的茶席設計美學，必須先奠定扎實的沖泡基礎。因此，在進入本堂課的主題之前，我們將首先回顧前幾堂課的核心概念，重溫沖泡技法的演進，並深入探討如何藝術性地「修飾茶湯」，以應對茶葉可能遇到的品質問題，為呈現一杯完美的茶湯做好萬全準備。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">沖泡技法的演進</h5>
                    <p className="mb-4 leading-relaxed">
                        課程中的沖泡技法教學，遵循著由淺入深的演進路徑。初階課程及認證考試，主要採用基礎的「平置法」，此法動作穩健，易於掌握，是所有習茶者必須熟練的基本功。隨著學員技巧的提升，中級以上的課程則會引入更具挑戰性的「懸空注查法」。此進階技法不僅能在展演時呈現優雅的視覺效果，讓遠距離的觀者也能清晰看見事茶者的動作，更是鍛鍊個人手感與平衡感的絕佳方式。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶葉品質問題解析與應對</h5>
                    <p className="mb-6 leading-relaxed">
                        一位優秀的茶人，不僅要具備發現問題的能力，更應擁有解決問題的智慧。面對茶葉的各種狀態，我們必須先「知其所以」，才能「對症下藥」。以下系統性地介紹針對不同香型茶品，在品質上可能遇到的問題及相應的「修飾茶湯」技巧。
                    </p>

                    <div className="space-y-6">
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h6 className="font-bold text-emerald-900 text-lg mb-3 flex items-center">
                                <Wind className="mr-2" size={20} />
                                清香型茶品 (Light Aroma Teas)
                            </h6>
                            <div className="space-y-3">
                                <div>
                                    <span className="font-bold text-emerald-800 block text-sm mb-1">常見問題：</span>
                                    <p className="text-emerald-900 text-sm leading-relaxed">
                                        對於一般消費者而言，最常見的問題源於儲存不當，導致茶葉產生古味、雜味或陳味。
                                    </p>
                                </div>
                                <div>
                                    <span className="font-bold text-emerald-800 block text-sm mb-1">應對技巧：採用「蒸法」</span>
                                    <p className="text-emerald-900 text-sm leading-relaxed">
                                        此法的操作順序為：先將空茶壺溫熱，再置入乾茶葉。利用壺內殘留的餘溫與水蒸氣，對茶葉表面進行短時間的熱處理，能在不「煮熟」茶葉的前提下，有效去除因儲存不當而產生的異味。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                            <h6 className="font-bold text-amber-900 text-lg mb-3 flex items-center">
                                <Flame className="mr-2" size={20} />
                                焙香型茶品 (Roasted Aroma Teas)
                            </h6>
                            <div className="space-y-3">
                                <div>
                                    <span className="font-bold text-amber-800 block text-sm mb-1">常見問題：</span>
                                    <p className="text-amber-900 text-sm leading-relaxed">
                                        主要問題為焙火不當，可能導致茶湯帶有過重的火氣，影響品飲的舒適度。
                                    </p>
                                </div>
                                <div>
                                    <span className="font-bold text-amber-800 block text-sm mb-1">應對技巧：採用「盪法」</span>
                                    <p className="text-amber-900 text-sm leading-relaxed">
                                        此法在「蒸法」的基礎上更進一步，即在溫壺後，注水入壺並利用如同離心力（類似脫水機）的原理快速搖盪，將附著於茶葉表面的燥火氣與碳味加以清洗，使茶湯更為純淨。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                            <h6 className="font-bold text-stone-900 text-lg mb-3 flex items-center">
                                <Droplet className="mr-2" size={20} />
                                濃香型茶品 (Strong Aroma Teas)
                            </h6>
                            <div className="space-y-3">
                                <div>
                                    <span className="font-bold text-stone-800 block text-sm mb-1">常見問題：</span>
                                    <p className="text-stone-900 text-sm leading-relaxed">
                                        此類茶品因發酵時間較長，可能伴隨兩種情況：一是產生些許雜味；二是期望中的蜜香不足，僅呈現熟果香。
                                    </p>
                                </div>
                                <div>
                                    <span className="font-bold text-stone-800 block text-sm mb-1">應對技巧：多元策略</span>
                                    <p className="text-stone-900 text-sm leading-relaxed">
                                        針對不同情況，採取不同策略。若為去除雜味，可採用高溫快沖的方式，避免長時間浸泡。若為提升香氣層次，則可運用理茶法，例如透過「古型」或「三形」等特殊的注水方式，激發並彰顯茶葉潛在的豐富韻味。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 2: Tea Seat Design */}
            <AcademySection id="zhiya-05-design" title="茶席設計的核心：六大要件解析" label="ACADEMY · ZHIYA · CH05">
                <AcademyContentBlock title="全方位的美學與感官體驗" icon={Layout}>
                    <p className="mb-6 leading-relaxed">
                        茶席設計是一門將品茗從單純的味覺享受，提升至全方位美學與感官體驗的綜合藝術。一個精心佈置的茶席，不僅是泡茶的功能性場域，更是主人內在涵養與藝術品味的延伸與表達。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">整體佈置的基礎概念</h5>
                    <p className="mb-4 leading-relaxed">
                        在臺灣當代的茶席佈置中，主要流行兩種佈局風格：
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>橫向佈局 (Horizontal Layout)</strong>：也稱為開卷型，如同展開一幅長卷畫作。此風格深受西方長形餐桌文化的影響，成為現代茶席的主流形式。</li>
                        <li><strong>直式佈局 (Vertical Layout)</strong>：此佈局方式更具東方傳統意趣，其實用性的優勢在於僅需佔用桌子的一角（所謂偏安一隅），讓桌面其餘空間仍可進行用餐、閱讀或文書工作等其他活動，特別適合生活化的日常茶事。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">器物的三件、四景、五形</h5>
                    <p className="mb-4 leading-relaxed">
                        傳統茶席的器物組織，遵循著一個清晰的框架，即「三件、四景、五形」：
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h6 className="font-bold text-stone-800 border-b border-stone-200 pb-2 mb-3">三件 (Three Categories)</h6>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li><strong>主件 (Main Pieces)</strong>：茶席的核心，指主要沖泡器，如茶壺或蓋碗，及其壺承。</li>
                                <li><strong>配件 (Accompanying Pieces)</strong>：輔助沖泡的必要器具，包含品茗杯、勻杯（茶海）、茶則、茶倉、水盂、茶巾等。</li>
                                <li><strong>擺件 (Decorative Pieces)</strong>：用於點綴茶席、營造氛圍的裝飾物，如花器、盆栽或雅石。其價值在於美學上的「無用之用」，雖不直接參與泡茶，卻是完整畫面的點睛之筆。</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold text-stone-800 border-b border-stone-200 pb-2 mb-3">四景 (Four Sceneries)</h6>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li><strong>主景 (Main Scenery)</strong>：茶席佈置的核心區域。</li>
                                <li><strong>前景 (Foreground)</strong>：位於主景之前，營造景深。</li>
                                <li><strong>側景 (Side Scenery)</strong>：位於主景兩側，豐富畫面。</li>
                                <li><strong>後景 (Background)</strong>：主景之後的背景，可以是掛畫或屏風，為茶席提供完整的視覺框架。</li>
                            </ul>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">構成茶席美學的六大要件</h5>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <Box className="text-stone-600 mb-2" size={24} />
                            <h6 className="font-bold text-stone-900 mb-1">1. 材質 (Material)</h6>
                            <p className="text-stone-700 text-sm">指根據茶葉特性選合適材質。如凍頂烏龍選紫砂或厚胎陶壺。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <Layout className="text-stone-600 mb-2" size={24} />
                            <h6 className="font-bold text-stone-900 mb-1">2. 比例 (Proportion)</h6>
                            <p className="text-stone-700 text-sm">壺承>壺；杯托>杯；最關鍵是「茶壺出湯量 : 勻杯容量」應為 1 : 1.1。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <Box className="text-stone-600 mb-2" size={24} />
                            <h6 className="font-bold text-stone-900 mb-1">3. 形態 (Form)</h6>
                            <p className="text-stone-700 text-sm">器物的形狀（圓、扁）搭配茶葉條索，並影響沖泡結果。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <MapCheck className="text-stone-600 mb-2" size={24} />
                            <h6 className="font-bold text-stone-900 mb-1">4. 佈局 (Layout)</h6>
                            <p className="text-stone-700 text-sm">依循「五形」視覺原則：前後、遠近、高低、疏密、側旁。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <Palette className="text-stone-600 mb-2" size={24} />
                            <h6 className="font-bold text-stone-900 mb-1">5. 用色 (Color)</h6>
                            <p className="text-stone-700 text-sm">對比色（衝擊）、協調色（和諧）、補色（平衡）。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <Sun className="text-stone-600 mb-2" size={24} />
                            <h6 className="font-bold text-stone-900 mb-1">6. 光影 (Light)</h6>
                            <p className="text-stone-700 text-sm">賦予空間立體感與生命力，是動態的第六元素。</p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 3: Dual Cup Tasting */}
            <AcademySection id="zhiya-05-dual-cup" title="雙杯品鑑：臺灣烏龍茶的深度體驗" label="ACADEMY · ZHIYA · CH05">
                <AcademyContentBlock title="嗅覺的獨立與強化" icon={Coffee}>
                    <p className="mb-6 leading-relaxed">
                        雙杯品鑑法是臺灣近代茶文化發展中極具特色的一環。這套由一高一矮的杯組構成的品飲方式，並非沖泡器具，而是專為深度品賞臺灣烏龍茶豐富、細膩且多變的香氣而設計，旨在將嗅覺的體驗獨立並強化出來。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">雙杯的緣由與功能</h5>
                    <p className="mb-4 leading-relaxed">
                        雙杯系統的設計，是為了清晰地區分茶的香氣與香味。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>香氣 (Aroma)</strong>：指的是易於揮發、存在於空氣中的氣味分子。高而窄的「聞香杯」能有效聚集並濃縮這些分子，使其不易散逸。</li>
                        <li><strong>香味 (Flavor-Aroma)</strong>：指的是與茶湯結為一體，能在品飲後留存於口腔與喉嚨的氣息，由「品茗杯」來承載。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">雙杯茶席的佈局藝術</h5>
                    <p className="mb-4 leading-relaxed">
                        當茶席需招待六位客人時，十二個杯子對佈局構成挑戰。應用「五形」原則的常見策略包括：
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>前後並列</strong>：聞香杯與品茗杯一前一後擺放，最簡潔。</li>
                        <li><strong>側旁搭配</strong>：聞香杯放於品茗杯斜側方，錯落有致。</li>
                        <li><strong>曲線或平行線排列</strong>：將杯子分兩組，以曲線或平行線陳列，打破呆板，營造舒朗視覺。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">雙杯的儀軌與技巧</h5>
                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-6">
                        <strong className="block text-amber-900 mb-3 text-lg">標準奉茶四步驟：</strong>
                        <ol className="list-decimal list-inside text-amber-900 space-y-2">
                            <li><strong>一拿 (Pick Up)</strong>：拿起已盛裝茶湯的聞香杯。</li>
                            <li><strong>二扣 (Cover)</strong>：將品茗杯倒扣在聞香杯之上。</li>
                            <li><strong>三翻 (Flip)</strong>：穩健地將杯組翻轉過來。</li>
                            <li><strong>四奉 (Serve)</strong>：將翻轉好的杯組奉給客人。</li>
                        </ol>
                        <p className="mt-4 text-amber-800 text-sm">
                            * 另有「滾杯」技巧，透過手指滾動使茶湯流入品茗杯，雖具趣味性與技巧性，但標準儀軌仍以翻杯為主。
                        </p>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 4: Exam Guide */}
            <AcademySection id="zhiya-05-exam" title="術科測驗備考指南" label="ACADEMY · ZHIYA · CH05">
                <AcademyContentBlock title="全面與實用的應考策略" icon={ClipboardList}>
                    <p className="mb-6 leading-relaxed">
                        本章節旨在為即將參加認證測驗的學員，提供一份全面而實用的備考指南。透過對測驗結構、評分標準及當日流程的詳細解析，幫助考生消除疑慮、充滿信心地迎接挑戰。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">測驗結構與評分標準</h5>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h6 className="font-bold text-stone-800 mb-3">成績比重</h6>
                            <ul className="space-y-2 text-stone-700 text-sm">
                                <li><strong>學科 (Written Exam)</strong>: 30% (40題選擇 + 4題簡答)</li>
                                <li><strong>術科 (Practical Exam)</strong>: 70%</li>
                                <li><strong>合格標準</strong>: 總分合計達 70 分</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold text-stone-800 mb-3">術科四大評分項目</h6>
                            <ul className="space-y-2 text-stone-700 text-sm">
                                <li><strong>儀態風範</strong>: 30%</li>
                                <li><strong>茶湯品質</strong>: 30%</li>
                                <li><strong>茶席佈置</strong>: 20%</li>
                                <li><strong>技巧流暢</strong>: 20%</li>
                            </ul>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">測驗日流程詳解</h5>
                    <div className="space-y-4 mb-8">
                        <div className="flex">
                            <div className="w-8 shrink-0 flex items-start justify-center pt-1"><Clock size={16} className="text-stone-400" /></div>
                            <div>
                                <strong className="block text-stone-900">1. 報到與試茶</strong>
                                <p className="text-stone-600 text-sm">提早一小時報到。試飲茶樣以判斷屬性（清香/焙香、緊結度），制定沖泡策略。</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-8 shrink-0 flex items-start justify-center pt-1"><CheckSquare size={16} className="text-stone-400" /></div>
                            <div>
                                <strong className="block text-stone-900">2. 領取茶樣與器物準備</strong>
                                <p className="text-stone-600 text-sm">領取15克茶樣（可檢視碎末），檢查自備器物異味，預熱煮水壺。</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-8 shrink-0 flex items-start justify-center pt-1"><Layout size={16} className="text-stone-400" /></div>
                            <div>
                                <strong className="block text-stone-900">3. 場地佈置</strong>
                                <p className="text-stone-600 text-sm">5分鐘內在指定桌上完成茶席佈置。</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-8 shrink-0 flex items-start justify-center pt-1"><UserCheck size={16} className="text-stone-400" /></div>
                            <div>
                                <strong className="block text-stone-900">4. 評審賞席</strong>
                                <p className="text-stone-600 text-sm">評審巡視5分鐘，觀察設計並提問，評核儀態風範。</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-8 shrink-0 flex items-start justify-center pt-1"><Coffee size={16} className="text-stone-400" /></div>
                            <div>
                                <strong className="block text-stone-900">5. 沖泡與奉茶 (30分鐘)</strong>
                                <p className="text-stone-600 text-sm">
                                    <strong>第一沖</strong>：出湯並奉給三位評審。<br />
                                    <strong>第二、三沖</strong>：將茶湯倒在勻杯，端至評審桌為其「添茶」至原杯，不需收杯。
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-8 shrink-0 flex items-start justify-center pt-1"><RotateCcw size={16} className="text-stone-400" /></div>
                            <div>
                                <strong className="block text-stone-900">6. 結束與撤場</strong>
                                <p className="text-stone-600 text-sm">收回三只茶杯，清潔歸位，待主考官宣布結束後打包。</p>
                            </div>
                        </div>
                    </div>

                    <AcademyHighlightBox type="important">
                        <strong className="block text-stone-900 mb-2 flex items-center">
                            <AlertCircle size={18} className="mr-2" />
                            應考關鍵注意事項
                        </strong>
                        <ul className="list-disc list-inside text-stone-800 text-sm space-y-1">
                            <li><strong>茶葉判斷</strong>：利用考前試茶判斷茶性，靈活調整茶水比例與時間。</li>
                            <li><strong>器物安全</strong>：確實使用安全熱源（酒精燈/電陶爐），確保茶具潔淨。</li>
                            <li><strong>時間管理</strong>：30分鐘極為緊湊，務必納入走動時間。</li>
                            <li><strong>儀態應對</strong>：沉著冷靜，應對得體，是高分關鍵。</li>
                        </ul>
                    </AcademyHighlightBox>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}

// MapCheck icon definition
const MapCheck = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
    </svg>
);
