import React from 'react';
import {
    Activity, // For practice/technique
    Wind, // For 清香 (Light Aroma) / Air
    Droplet, // For water/tea soup
    Thermometer, // For temperature/roasting
    Anchor, // For foundation/stability (suspension method)
    Feather, // For elegance/lightness
    AlertCircle, // For flaws/issues
    CheckCircle, // For correct methods
    List, // For classification
    Heart, // For Mind/Heart method
    Coffee, // For tea cup
    CloudRain, // For weather effects
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function ZhiyaChapter02() {
    return (
        <div className="space-y-12">
            {/* Intro: Suspension Method */}
            <AcademySection id="zhiya-02-suspension" title="懸空置茶法：習茶心法之基石" label="ACADEMY · ZHIYA · CH02">
                <AcademyContentBlock title="溫故知新：鍛鍊內在覺察力" icon={Anchor}>
                    <p className="mb-6 leading-relaxed">
                        在茶道的學習旅程中，「溫故知新」不僅是記憶的鞏固，更是通往更深層次理解的必經之路。本次專題，我們將從回顧一項核心基本功——「懸空置茶法」開始。這項技法看似簡單，實則為鍛鍊內在覺察力的基石，是每一位習茶者通往更高境界的途徑。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">品茶形式的三種規格</h5>
                    <p className="mb-4 leading-relaxed">
                        在當代台灣，品茶的形式主要可分為三種規格，各自承載著不同的文化脈絡與品飲氛圍：
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <strong className="block text-stone-900 mb-2">高桌</strong>
                            <p className="text-sm text-stone-700">我們目前最常見的形式。習茶者坐於標準高度桌椅前。受西方文化影響普及，特別是長方桌的出現，反映近四十年來台灣茶文化橫向發展。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <strong className="block text-stone-900 mb-2">矮桌</strong>
                            <p className="text-sm text-stone-700">離地約40公分，品飲者坐於地面或坐墊。源於明朝文人品飲場景。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <strong className="block text-stone-900 mb-2">地席</strong>
                            <p className="text-sm text-stone-700">直接佈置於地面或榻榻米。與日本茶道相似，是更為古老的品飲方式。</p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">內外對勁的修煉</h5>
                    <p className="mb-4 leading-relaxed">
                        無論哪種形式，練習「懸空置茶法」不僅追求雙手穩定或目測精準，更在於開發內在「覺察力」。這份本能若不常使用，將隨對儀器依賴而退化（用進廢退）。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        透過這項「內外對勁」的修煉，我們學會同時觀照外在環境與內在心境。當內外皆能觀照且維持平常心，便能達到宋明八大家所言<strong className="text-stone-900">「不被干擾的高貴」</strong>之境界。這份安住於當下的定力，正是此基礎心法的終極目標。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Classification */}
            <AcademySection id="zhiya-02-classification" title="台灣茶葉的分類系統與品鑑心法" label="ACADEMY · ZHIYA · CH02">
                <AcademyContentBlock title="建立清晰的認知框架" icon={List}>
                    <p className="mb-6 leading-relaxed">
                        面對台灣茶多元複雜的面貌，建立清晰分類是專業品鑑的前提。台灣茶分類方法極為豐富（發酵度、季節、海拔、品種、外形、焙火、茶區等）。然而，對於品飲者而言，以<strong className="text-stone-900">「香氣類型」</strong>作為標準最為直接有效，因為嗅覺是最即時直觀的感受指標。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">三大香氣類型</h5>
                    <div className="space-y-4 mb-6">
                        <div className="flex items-start p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                            <Wind className="text-emerald-500 mt-1 mr-3 shrink-0" size={20} />
                            <div>
                                <strong className="block text-emerald-900 text-lg mb-1">1. 清香型</strong>
                                <p className="text-emerald-800 text-sm mb-1">
                                    <span className="font-bold">定義：</span>發酵度較輕，製程著重保留原始清新花香。表現優雅、細膩。
                                </p>
                                <p className="text-emerald-800 text-sm">
                                    <span className="font-bold">代表：</span>高山烏龍茶、文山包種茶等。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-amber-50 rounded-lg border border-amber-100">
                            <Thermometer className="text-amber-600 mt-1 mr-3 shrink-0" size={20} />
                            <div>
                                <strong className="block text-amber-900 text-lg mb-1">2. 焙香型</strong>
                                <p className="text-amber-800 text-sm mb-1">
                                    <span className="font-bold">定義：</span>發酵後經額外烘焙工序，透過梅納反應產生焙烤香氣。
                                </p>
                                <p className="text-amber-800 text-sm mb-1">
                                    <span className="font-bold">代表：</span>鐵觀音、凍頂烏龍茶等。
                                </p>
                                <p className="text-amber-800 text-xs italic">
                                    *紅烏龍雖發酵度高，但因決定性烘焙特色，歸於此類。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-100">
                            <Droplet className="text-red-500 mt-1 mr-3 shrink-0" size={20} />
                            <div>
                                <strong className="block text-red-900 text-lg mb-1">3. 濃香型</strong>
                                <p className="text-red-800 text-sm mb-1">
                                    <span className="font-bold">定義：</span>發酵度較重，氧化物與內含物質豐富，香氣濃郁多元。
                                </p>
                                <p className="text-red-800 text-sm">
                                    <span className="font-bold">代表：</span>白毫烏龍（東方美人）、紅茶等。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Light Aroma Analysis */}
            <AcademySection id="zhiya-02-light-aroma" title="深入鑑賞「清香型」烏龍茶" label="ACADEMY · ZHIYA · CH02">
                <AcademyContentBlock title="品鑑核心：「清」的標準" icon={Wind}>
                    <p className="mb-6 leading-relaxed">
                        清香型烏龍茶的核心價值在於難得的「清」之境界。「香而不輕，猶凡品」。頂級清香型烏龍的魅力在於純淨、透徹、無雜質的氣韻。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">走水（萎凋）的藝術與人和</h5>
                    <p className="mb-4 leading-relaxed">
                        「清」的關鍵在於「走水」與「人和」。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-4 mb-6">
                        <li>
                            <strong>走水 (Withering)</strong>：茶菁水分散失過程，牽動化學變化。
                            <span className="block mt-2 pl-5 bg-stone-50 p-3 rounded text-sm italic text-stone-600 border-l-4 border-stone-300">
                                講師比喻：就像我們現在都在萎凋……早上起來皮膚還不錯，中午就乾乾的，粉底卡在葉縫（毛孔）裡。
                            </span>
                            <div className="mt-3 pl-5 grid grid-cols-2 gap-4">
                                <div>
                                    <strong className="block text-stone-800 text-sm">積水 (走水太慢)</strong>
                                    <span className="text-xs text-stone-600">濕度高導致水分無法蒸散（如水腫）。茶湯混濁、苦澀、悶味。</span>
                                </div>
                                <div>
                                    <strong className="block text-stone-800 text-sm">失水 (走水太快)</strong>
                                    <span className="text-xs text-stone-600">乾燥或日照過強。物質未轉化，風味單薄不耐泡。</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <strong>人和 (Human Harmony)</strong>：採摘到製作的協作。
                            <span className="block mt-2 pl-5 text-sm">
                                若老嫩混合（公孫菜），後續工序難以處理。「炒菜可以分先後，茶一下去就全進去炒。」製茶師的默契是品質關鍵。
                            </span>
                        </li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">高山茶的獨特風韻</h5>
                    <p className="mb-4 leading-relaxed">
                        台灣春冬兩季高山茶適合製作頂級清香型烏龍，源於：
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-500 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">化學成分優勢</strong>
                                <p className="text-sm text-stone-700">日照溫和，累積較高茶胺酸（鮮爽甘甜），苦澀物質較低。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CloudRain className="text-emerald-500 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">雲霧繚繞的「漫射光」</strong>
                                <p className="text-sm text-stone-700">將直射光轉為柔和漫射光，減少紫外線破壞，降低苦澀物質。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Wind className="text-emerald-500 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">不可複製的「高冷氣韻」</strong>
                                <p className="text-sm text-stone-700">茶樹禦寒分泌特殊芳香物質，形成獨一無二氣韻，人工無法仿製。</p>
                            </div>
                        </li>
                    </ul>
                </AcademyContentBlock>
            </AcademySection>

            {/* Practical Tasting: Flaws */}
            <AcademySection id="zhiya-02-flaws" title="實踐品鑑：辨識清香型茶的常見瑕疵" label="ACADEMY · ZHIYA · CH02">
                <AcademyContentBlock title="建立瑕疵風味資料庫" icon={AlertCircle}>
                    <p className="mb-6 leading-relaxed">
                        透過感官實踐驗證理論。建立屬於自己的「瑕疵風味資料庫」，辨識茶葉在原料、製作或儲存環節的問題。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">何謂「不清」：瑕疵風味列表</h5>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div className="bg-stone-50 p-3 rounded border border-stone-200">
                            <strong className="text-stone-900 block mb-1">菜青味</strong>
                            <span className="text-xs text-stone-600">生鮮蔬菜青草氣，發酵不足典型特徵。</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded border border-stone-200">
                            <strong className="text-stone-900 block mb-1">雜味</strong>
                            <span className="text-xs text-stone-600">不明確、不潔淨的混合氣味。</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded border border-stone-200">
                            <strong className="text-stone-900 block mb-1">陳味</strong>
                            <span className="text-xs text-stone-600">儲存不當或過久，似舊書報或陳腐物品。</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded border border-stone-200">
                            <strong className="text-stone-900 block mb-1">悶味</strong>
                            <span className="text-xs text-stone-600">不開闊沉悶氣息，似濕氣或不通風。</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded border border-stone-200">
                            <strong className="text-stone-900 block mb-1">酸味</strong>
                            <span className="text-xs text-stone-600">不協調微酸，有時伴隨雜味。</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded border border-stone-200">
                            <strong className="text-stone-900 block mb-1">澀感</strong>
                            <span className="text-xs text-stone-600">粗糙收斂感，缺乏滑順度。</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded border border-stone-200">
                            <strong className="text-stone-900 block mb-1">異味</strong>
                            <span className="text-xs text-stone-600">吸收外界味道（油煙、香水）。</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded border border-stone-200">
                            <strong className="text-stone-900 block mb-1">焦味</strong>
                            <span className="text-xs text-stone-600">殺青/乾燥溫度過高。微燒焦氣味。</span>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">成因分析與風味光譜</h5>
                    <div className="bg-stone-100 p-5 rounded-lg mb-6">
                        <ul className="space-y-2 mb-4">
                            <li><strong>悶味</strong>：通常是「水」的問題（雨天採摘、走水不足、殺青不足）。</li>
                            <li><strong>雜味與酸味</strong>：多與後續儲存不當（未密封、高溫潮濕）有關。</li>
                        </ul>
                        <div>
                            <strong className="block text-stone-900 mb-2">風味光譜進程：菜青 ➔ 清香 ➔ 陳</strong>
                            <div className="flex justify-between items-center text-sm bg-white p-3 rounded-full border border-stone-200">
                                <span className="text-green-600 font-bold">菜青 (綠茶特徵)</span>
                                <span className="text-stone-400">➜ 適度發酵 ➜</span>
                                <span className="text-emerald-600 font-bold">清香 (烏龍追求)</span>
                                <span className="text-stone-400">➜ 氧化/儲存不當 ➜</span>
                                <span className="text-amber-800 font-bold">陳 (不悅氣味)</span>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Advanced Technique: Steaming */}
            <AcademySection id="zhiya-02-steaming" title="高階技法：「蒸茶法」對瑕疵茶的修飾與轉化" label="ACADEMY · ZHIYA · CH02">
                <AcademyContentBlock title="化遺憾為美好的茶人智慧" icon={Activity}>
                    <p className="mb-6 leading-relaxed">
                        成熟茶人面對瑕疵茶應抱持「改善」與「接受」的態度。對於儲存不當產生陳味的茶，可透過<strong className="text-stone-900">「蒸茶法」</strong>加以修飾。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">技法原理：如肌膚護理</h5>
                    <p className="mb-4 leading-relaxed italic text-stone-600 pl-4 border-l-4 border-stone-300">
                        「就像我們的臉...用水蒸氣蒸到毛細孔打開...洗得比較乾淨。」
                    </p>
                    <p className="mb-6 leading-relaxed">
                        利用高溫茶壺餘熱與內部水蒸氣進行「乾蒸」，使茶葉毛孔張開，揮發雜陳氣味，便於後續沖泡洗去。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">操作步驟詳解</h5>
                    <ol className="list-decimal list-inside space-y-4 mb-6 text-stone-800">
                        <li><strong>徹底溫壺</strong>：時間需更長，確保壺身足夠高溫、儲熱充足。</li>
                        <li><strong>置茶乾蒸並搖晃</strong>：倒掉熱水，趁炙熱瞬間置入乾茶，加蓋搖晃，確保均勻受熱。</li>
                        <li><strong>散發雜味</strong>：搖晃數秒後，<span className="text-red-700 font-bold">立即開蓋</span>靜置5-10秒，讓被逼出的雜味揮發，避免鎖回。</li>
                        <li><strong>深度溫潤泡</strong>：注入較多熱水，浸泡稍長(5-6秒)。此泡匯聚最多雜味，<span className="text-red-700 font-bold">務必倒掉</span>，不可入公道杯。</li>
                        <li><strong>輕柔注水</strong>：正式第一泡採「細注」緩慢注水，避免過猛激出潛藏雜味。</li>
                        <li><strong>平穩出湯</strong>：動作輕柔平穩，保持茶湯純淨。</li>
                    </ol>

                    <AcademyHighlightBox type="tip">
                        <strong className="block text-stone-900 mb-2">效果評估</strong>
                        <p className="text-stone-800 text-sm">
                            經此法修飾，陳味雜味淡化，喚醒茶葉潛藏的優點（如回甘或高山氣韻）。這是惜物之心與精湛技藝的結合。
                        </p>
                    </AcademyHighlightBox>
                </AcademyContentBlock>
            </AcademySection>

            {/* Conclusion */}
            <AcademySection id="zhiya-02-conclusion" title="結語：從方法、技法到心法" label="ACADEMY · ZHIYA · CH02">
                <AcademyContentBlock title="茶道修煉的進程" icon={Heart}>
                    <p className="mb-6 leading-relaxed">
                        從「懸空置茶法」到「清香型」剖析，再到「蒸茶法」實踐，我們走過了從理論到應用的路徑。這是一場從「方法」提升至「心法」的修煉之旅。
                    </p>
                    <div className="space-y-6">
                        <div className="border-l-4 border-stone-300 pl-4">
                            <strong className="block text-stone-900 text-lg">1. 方法 (Method) - 入門</strong>
                            <p className="text-stone-700">掌握標準安全泡茶方式（蓋碗、茶壺操作），目標是穩定泡出「好喝」的茶。</p>
                        </div>
                        <div className="border-l-4 border-stone-400 pl-4">
                            <strong className="block text-stone-900 text-lg">2. 技法 (Technique) - 進階</strong>
                            <p className="text-stone-700">熟練後深入細膩技巧（理、注、點、出、善、候）。靈活運用如「蒸茶法」、「谷形佈置」等針對性技法。</p>
                        </div>
                        <div className="border-l-4 border-stone-600 pl-4">
                            <strong className="block text-stone-900 text-lg">3. 心法 (Heart/Mind Method) - 高階</strong>
                            <p className="text-stone-700">修煉精髓。與心意合一的「巧用」。因人、因時、因地、因茶而異，為品飲者「設計」最契合心境的茶湯。是一種關懷與溝通。</p>
                        </div>
                    </div>
                    <p className="mt-8 leading-relaxed font-serif text-center text-stone-800 italic">
                        「茶道的深度，不在於形式的淺層展演，而在於背後深厚的文化底蘊與個人修為的淬煉。願我們都能找到屬於自己的那份安住與高貴。」
                    </p>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
