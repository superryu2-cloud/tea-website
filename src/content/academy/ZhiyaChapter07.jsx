import React from 'react';
import {
    Store,
    Clock,
    Palette,
    Gem,
    Feather,
    History,
    Search,
    BookOpen,
    Eye,
    Coffee,
    Heart,
    Flame,
    Droplet,
    CheckSquare // Added missing import
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function ZhiyaChapter07() {
    return (
        <div className="space-y-12">
            {/* Intro */}
            <AcademySection id="zhiya-07-intro" title="器物之選與歷史之韻" label="ACADEMY · ZHIYA · CH07">
                <AcademyContentBlock title="茶席的意涵：超越品飲的空間裝置藝術" icon={Store}>
                    <p className="mb-6 leading-relaxed">
                        茶席，遠不僅是品茗的一方空間，它更是一種能顯著提升品牌形象與社會觀感的「裝置藝術」。一個精心佈置的茶席，能在喧囂的商業環境中，創造出一道無形的「結界」，將日常的品飲行為，昇華為一場兼具美學與文化的深度體驗。
                    </p>
                    <p className="mb-4 leading-relaxed">
                        以知名甜點店「滋養」為例，其經營者巧妙地將店面一分為二：一邊是販售傳統糕餅的商業空間，另一邊則完全留白，僅陳設一方極簡茶席，構成一扇巨大的櫥窗。如此設計，徹底顛覆了人們對傳統糕餅店的印象。顧客在品嚐甜點之餘，更能感受到一股濃厚的文化氣息，這使得「滋養」不再僅是販售食物的店鋪，而是昇華為一個傳遞生活美學與文化價值的「場域」，其市場定位與社會觀感也因此獲得了質的飛躍。
                    </p>
                    <p className="leading-relaxed">
                        由此可見，茶席的佈置不僅是背景，更是主角，它深刻地影響著整體的氛圍、體驗與價值，而這一切美學的起點，往往始於器物色彩的選擇。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* History of Colors */}
            <AcademySection id="zhiya-07-history-colors" title="器與湯的對話：茶器色彩的歷史演變" label="ACADEMY · ZHIYA · CH07">
                <AcademyContentBlock title="順稱、反襯與正稱的流變" icon={History}>
                    <p className="mb-6 leading-relaxed">
                        茶器的顏色選擇從非隨性而為，而是與各個時代的飲茶方式、茶湯色澤及主流審美觀緊密相連。綜觀歷史，從唐、宋至明清，茶器色彩的美學觀點大致經歷了三個主要的演變階段：「順稱」、「反襯」與「正稱」。這三者的流變，不僅譜寫了一部器物與茶湯的精彩對話史，更映照出不同時代的文化心境。
                    </p>

                    <div className="space-y-8">
                        {/* Tang */}
                        <div className="border border-amber-200 bg-amber-50 p-6 rounded-lg">
                            <h5 className="font-bold text-amber-900 border-b border-amber-200 pb-2 mb-3 text-lg">
                                唐代「順稱」：以器顯茶色
                            </h5>
                            <p className="mb-4 text-amber-900 leading-relaxed text-sm">
                                唐代的飲茶文化以「煮茶」為主，經煎煮而成的茶湯，色澤普遍偏深，帶有黃紅之感。為了突顯並深化這一視覺特徵，唐人偏愛使用如冰似玉的青瓷類器皿。
                            </p>
                            <p className="text-amber-900 leading-relaxed text-sm">
                                這種選擇的目的，在於「順」應茶湯本身的色澤，並透過器物的釉色進一步「加深」其視覺上的濃度與美感。此種以器顯茶、相得益彰的美學手法，即為「順稱」。
                            </p>
                        </div>

                        {/* Song */}
                        <div className="border border-stone-800 bg-stone-900 p-6 rounded-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Feather size={120} className="text-stone-100" />
                            </div>
                            <h5 className="font-bold text-stone-100 border-b border-stone-700 pb-2 mb-3 text-lg relative z-10">
                                宋代「反襯」：以黑托白沫之美
                            </h5>
                            <p className="mb-4 text-stone-300 leading-relaxed text-sm relative z-10">
                                宋代飲茶轉為「點茶」，以茶筅擊拂使茶湯浮現潔白泡沫。為了欣賞這份雪白，宋代推崇使用如「天目碗」等深色、黑色的茶碗。
                            </p>
                            <p className="text-stone-300 leading-relaxed text-sm relative z-10">
                                此為「反襯」——以深沉黑釉襯托茶沫瑩白，形成強烈對比。在「鬥茶」中，追求茶沫「咬盞」的最高境界，黑色器皿正是最佳載體。同時，延續自唐代的青瓷「順稱」依然並存，展現了宋代美學的多元。
                            </p>
                        </div>

                        {/* Ming & Qing */}
                        <div className="border border-stone-200 bg-white p-6 rounded-lg shadow-sm">
                            <h5 className="font-bold text-stone-900 border-b border-stone-200 pb-2 mb-3 text-lg">
                                明清「正稱」：還原茶湯本色
                            </h5>
                            <p className="mb-4 text-stone-700 leading-relaxed text-sm">
                                明代廢團興散，品飲回歸樸實，重視茶湯純粹顏色。白瓷成為主流，因其溫潤如玉，不帶色彩偏向，能客觀呈現茶湯原色，此即「正稱」。
                            </p>
                            <p className="text-stone-700 leading-relaxed text-sm">
                                無論是包種的金黃或紅茶的緋紅，在白瓷中皆一覽無遺。至今，以白瓷為基底的器物仍是展現茶湯之美的首選。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Glaze */}
            <AcademySection id="zhiya-07-glaze" title="釉的語言：陶瓷工藝與美學細節" label="ACADEMY · ZHIYA · CH07">
                <AcademyContentBlock title="細節中的美學" icon={Palette}>
                    <p className="mb-6 leading-relaxed">
                        器物之美，不僅來自於外顯的造型與顏色，更深藏於釉彩的細微表現與燒製過程中偶然或必然形成的獨特肌理之中。這些豐富的細節，本身就構成了一門值得深入探討的視覺語言與工藝學問。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">釉彩的分類：青花、五彩與鬥彩</h5>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <strong className="block text-blue-900 mb-2">青花 (Blue and White)</strong>
                            <p className="text-sm text-blue-800">
                                釉下彩。素胚繪鈷料後施透明釉，一次燒成。藍色圖案位於釉下，明淨素雅。
                            </p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                            <strong className="block text-orange-900 mb-2">五彩 (Wucai)</strong>
                            <p className="text-sm text-orange-800">
                                釉上彩。顏色豐富，對比強烈，整體風格華麗而熱鬧。
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                            <strong className="block text-yellow-900 mb-2">鬥彩 (Doucai)</strong>
                            <p className="text-sm text-yellow-800">
                                釉下青花勾勒輪廓，釉上填入彩料二次燒製。青花如堤，彩料如水，相互「爭鬥」而不溢出。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">釉面的美學：技術瑕疵的昇華</h5>
                    <ul className="list-disc list-inside text-stone-700 space-y-4 mb-8">
                        <li>
                            <strong>開片 (Crackle)</strong>：
                            <span className="text-stone-600 block pl-5 mt-1 text-sm">
                                胚與釉收縮比不同產生的自然裂紋。從燒製失敗的瑕疵，昇華為蘊含時間感的冰裂紋理美學。
                            </span>
                        </li>
                        <li>
                            <strong>針眼 (Pinholes)</strong>：
                            <span className="text-stone-600 block pl-5 mt-1 text-sm">
                                厚釉氣泡破裂留下的細孔。雖影響市場價值被視為「遺珠之憾」，卻是器物在烈火中淬煉的真實生命印記。
                            </span>
                        </li>
                        <li>
                            <strong>露胎 (Exposed Body)</strong>：
                            <span className="text-stone-600 block pl-5 mt-1 text-sm">
                                局部未施釉露出胚土。無論是為了防炸裂的工藝設計（如宋代茶碗底部），還是無心之失，都展現了質樸之美。
                            </span>
                        </li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">工藝的巧思：留白與止釉之美</h5>
                    <p className="mb-4 leading-relaxed">
                        「留白」是東方美學中一個至關重要的概念，在陶瓷工藝中亦是如此。為了達成精準的留白效果，工匠們發展出「止釉」的技法。其作法是在器物特定位置塗上一圈蠟，阻隔釉料附著，形成乾淨俐落的邊界，展現胚土本色，賦予器物呼吸感與氣韻生動。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Stories */}
            <AcademySection id="zhiya-07-stories" title="器物背後的故事：歷史的華美與蒼涼" label="ACADEMY · ZHIYA · CH07">
                <AcademyContentBlock title="美學的代價" icon={BookOpen}>
                    <p className="mb-6 leading-relaxed">
                        許多傳世的精美器物與藝術品，其光華璀璨的表面之下，往往承載著複雜的歷史經緯與深刻的人性故事。理解這些故事，能讓我們在欣賞器物之時，對「美」產生更為立體和深刻的體會。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">「雨過天青」的帝王想望與工匠血淚</h5>
                    <p className="mb-4 leading-relaxed">
                        宋徽宗一句「雨過天青雲破處」，成就了汝窯絕美的天青色。然而，引用張愛玲所言「歷史是一個美麗又蒼茫的手勢」，這份美背後有著沉重的代價。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        這天青色誕生於皇帝的浪漫想望，也體現了皇權的任性。為了滿足這一句話，無數工匠在「燒不出來就砍頭」的壓力下日夜勞作。凝視汝窯溫潤光澤時，我們所見不僅是美學巔峰，更是無數工匠的血淚與時代的代價。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">從個人收藏談鑑古知今</h5>
                    <p className="mb-4 leading-relaxed">
                        鑑賞古物與仿品，有著層次上的巨大差異。孩子在故宮看著汝窯珍品說：「媽媽，這個我們家很多，為什麼要排隊？」這句童言道出了凡人看「形」，鑑賞家看「神」的區別。
                    </p>
                    <p className="leading-relaxed">
                        仿品雖造型釉色逼真，卻無法複製真品蘊含的「神」——那是近千年的歲月流轉、時代的審美意趣，與無數鑑賞者目光交會的總和。這份歷史厚度，是靈魂所在。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Selection Guide */}
            <AcademySection id="zhiya-07-selection" title="適得其所：為茶擇器的實踐心法" label="ACADEMY · ZHIYA · CH07">
                <AcademyContentBlock title="美學與功能的平衡" icon={CheckSquare}>
                    <p className="mb-6 leading-relaxed">
                        為茶擇器，如同為茶尋覓一位氣質相投的知音。在實踐中，可遵循兩大核心原則：
                    </p>
                    <div className="flex gap-4 mb-8">
                        <div className="flex-1 bg-stone-50 p-4 rounded border border-stone-200 text-center">
                            <strong className="block text-stone-900 mb-1">呼應 (Resonance)</strong>
                            <span className="text-sm text-stone-600">器物氣質與茶湯氣息產生共鳴。</span>
                        </div>
                        <div className="flex-1 bg-stone-50 p-4 rounded border border-stone-200 text-center">
                            <strong className="block text-stone-900 mb-1">顧盼 (Consideration)</strong>
                            <span className="text-sm text-stone-600">功能上周全考量品飲需求與節奏。</span>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">因茶擇器：不同茶品的杯具選擇</h5>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="border-l-4 border-emerald-500 pl-4">
                            <strong className="block text-stone-900">包種茶 / 東方美人</strong>
                            <p className="text-sm text-stone-700">氣韻清揚、滋味細膩。適合搭配簡約、秀氣或輕盈的杯型。</p>
                        </div>
                        <div className="border-l-4 border-stone-700 pl-4">
                            <strong className="block text-stone-900">熟普洱 / 老茶</strong>
                            <p className="text-sm text-stone-700">湯色深沉、口感醇厚。適合手感厚實、色澤溫潤的器皿（如天目碗），溫暖舒適。</p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                            <strong className="block text-stone-900">紅茶</strong>
                            <p className="text-sm text-stone-700">湯色紅艷明亮。適合內壁潔白的白瓷杯，以「正稱」展現美麗湯色。</p>
                        </div>
                        <div className="border-l-4 border-amber-700 pl-4">
                            <strong className="block text-stone-900">鐵觀音</strong>
                            <p className="text-sm text-stone-700">香氣濃郁、滋味厚重。適合容量較小、杯口微斂的杯型，聚攏「觀音韻」。</p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Cultivation */}
            <AcademySection id="zhiya-07-cultivation" title="終極之境：藉器練心與安頓之道" label="ACADEMY · ZHIYA · CH07">
                <AcademyContentBlock title="從形式到內心的昇華" icon={Heart}>
                    <p className="mb-6 leading-relaxed">
                        茶席美學的探索，始於外在器物，終究指向內在心神。當掌握了形式，更高層次的追求是將儀軌轉化為內心的寧靜。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶席佈局的色彩密碼</h5>
                    <p className="mb-4 leading-relaxed">
                        透過建立「色彩密碼」，將茶倉與杯承，或勻杯與水方設定為同一色系，創造視覺連結。這能避免視覺跳躍，幫助眼神安然流轉，正如老子「五色令人盲」的智慧——統一和諧的色調有助於凝神專注。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">藉器練心：從動作精煉到心神安頓</h5>
                    <p className="mb-6 leading-relaxed">
                        茶席美學的核心在於「藉器練心」。所有講究皆為修煉內心的途徑。將倒水、溫杯等動作反覆修煉至「輕」與「靜」，例如僅用手指力量傾倒茶湯，減少擾動。這並非繁文縟節，而是透過對身體的精微控制，達到心念的收攝。我們在茶席這方寸之地，尋得片刻安頓，並將此份專注延伸至生命之中。
                    </p>

                    <AcademyHighlightBox type="important">
                        <p className="text-center font-bold text-xl text-stone-900">
                            道，始於茶，而不止於茶。
                        </p>
                    </AcademyHighlightBox>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
