import React from 'react';
import { Palette, MoveRight, Maximize, Circle, Droplets, Sun, Leaf, CheckCircle, Box, Layout, Mountain, Thermometer, Users, Coffee } from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function XueyaChapter03() {
    return (
        <div className="space-y-12">
            {/* Intro: Tea Setup Aesthetics */}
            <AcademySection id="xueya-03-intro" title="從茶席美學到品飲之道" label="ACADEMY · XUEYA · CH03">
                <AcademyContentBlock title="茶席：無聲的詩" icon={Palette}>
                    <p className="mb-6 leading-relaxed">
                        一席茶，是一首無聲的詩，而茶席的佈置，便是詩的起手式。司茶人透過器物的陳列與空間的規劃，傳遞心境，營造氛圍，無聲地訴說著一場茶會的主題與意境。如同畫家在畫布上揮灑，茶席的佈局引導著品茶人的視線與心緒，其中，「橫向」與「直式」便是兩種最基本也最重要的視覺語彙。本章節將深入解析這兩種佈局的內涵，以及它們如何營造出截然不同的品茶意境。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        在近十年的台灣茶藝發展中，橫向佈局已成為主流的入門形式，其視覺引導如水流般舒展；而直式佈局則是一種更為進階的風格，其視覺感受如山嶽般崇高。兩者風格的差異，可比擬為畫卷與立軸的不同美學追求。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6 mb-6">
                        <div className="bg-stone-50 rounded-xl overflow-hidden border border-stone-200">
                            <div className="bg-emerald-50 px-4 py-3 border-b border-emerald-100 flex items-center gap-2">
                                <Maximize size={18} className="text-emerald-700" />
                                <span className="font-bold text-emerald-900">橫向佈局 (橫式)</span>
                            </div>
                            <div className="p-5 space-y-3 text-stone-700 text-sm leading-relaxed">
                                <p>
                                    如同水流般，蜿蜒悠遠，呈現一種「平遠」的自在感。講者以北宋張擇端的《清明上河圖》長卷畫為例，視線得以自由遊走，彷彿跟隨著一道蜿蜒的溪水，穿行於春日的地景，感受其寬闊與流動。
                                </p>
                                <div className="pt-2 border-t border-stone-200 mt-2">
                                    <span className="font-bold text-stone-900">感受：</span>自在、舒展、悠遠
                                </div>
                                <div className="inline-block px-2 py-1 bg-white rounded border border-stone-200 text-xs text-stone-500 mt-1">
                                    入門基礎風格，為近十年台灣茶藝主流
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50 rounded-xl overflow-hidden border border-stone-200">
                            <div className="bg-stone-100 px-4 py-3 border-b border-stone-200 flex items-center gap-2">
                                <MoveRight className="text-stone-700 rotate-90" size={18} />
                                <span className="font-bold text-stone-900">直式佈局 (直式)</span>
                            </div>
                            <div className="p-5 space-y-3 text-stone-700 text-sm leading-relaxed">
                                <p>
                                    如同山嶽般，由下至上，營造一種「高遠」的肅穆感。講者以北宋范寬的《谿山行旅圖》為例，其高聳入雲的山勢，精神則被向上引領，朝向一座靜默的山巔，從而凝聚出一種觀照內心的沉靜狀態。
                                </p>
                                <div className="pt-2 border-t border-stone-200 mt-2">
                                    <span className="font-bold text-stone-900">感受：</span>肅穆、莊嚴、崇高
                                </div>
                                <div className="inline-block px-2 py-1 bg-white rounded border border-stone-200 text-xs text-stone-500 mt-1">
                                    進階風格，追求更深層次的境界
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-stone-700 italic text-center leading-relaxed">
                        總結而言，橫向佈局以其「平遠」的意境，邀請品茶人進入一個輕鬆自在的交流空間；而直式佈局則以其「高遠」的境界，引導品茶人沉澱心靈，進入一個專注內省的狀態。這兩種視覺語彙的巧妙運用，讓茶席不僅是一幅靜態的畫面，更成為一個能與人心靈對話的動態溝通媒介。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 1: The Code of Utensils */}
            <AcademySection id="xueya-03-code" title="茶席的密碼：司茶人與品茶人的無聲交流" label="ACADEMY · XUEYA · CH03">
                <AcademyContentBlock title="器物會說話" icon={Box}>
                    <p className="mb-6 leading-relaxed">
                        在品飲到茶湯之前，一場茶會的對話早已悄然開始。茶席上的器物選擇並非隨意，而是一套充滿線索的「密碼」，是司茶人（席主）在沖泡前與品茶人（客人）進行的第一層溝通。對於懂得的客人而言，解讀這套密碼，是進入茶道心領神會境界的第一把鑰匙。從器物的厚薄、材質到形制，都隱含著即將呈現的茶湯樣貌。
                    </p>
                    <p className="mb-4 leading-relaxed font-bold text-stone-900">茶具的選擇，成為預示所泡茶葉類型的關鍵線索：</p>

                    <div className="space-y-4">
                        <div className="flex md:items-start gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/50">
                            <div className="bg-white p-2 rounded-full border border-stone-200 shadow-sm shrink-0">
                                <Circle size={20} className="text-stone-400" />
                            </div>
                            <div>
                                <h5 className="font-bold text-stone-900 mb-1">茶壺的胎體</h5>
                                <p className="text-sm text-stone-700 leading-relaxed">
                                    厚胎（厚壁）的壺保溫性佳，續溫效果好，可能預示著需要高溫、重發酵或焙火的茶品；而薄胎（薄壁）的壺散熱快，則更適合沖泡講求鮮爽、香氣細緻的清香型茶品。
                                </p>
                            </div>
                        </div>

                        <div className="flex md:items-start gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/50">
                            <div className="bg-white p-2 rounded-full border border-stone-200 shadow-sm shrink-0">
                                <Box size={20} className="text-stone-400" />
                            </div>
                            <div>
                                <h5 className="font-bold text-stone-900 mb-1">器物的材質</h5>
                                <p className="text-sm text-stone-700 leading-relaxed">
                                    瓷器質地密實，不吸附味道，能忠實呈現茶湯的原始風味，常用於品鑑高香、細膩的茶；陶器則因其毛細孔結構具有透氣性，能使茶湯口感變得更為醇厚圓潤，常用於沖泡老茶或焙火較重的茶。
                                </p>
                            </div>
                        </div>

                        <div className="flex md:items-start gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/50">
                            <div className="bg-white p-2 rounded-full border border-stone-200 shadow-sm shrink-0">
                                <Maximize size={20} className="text-stone-400" />
                            </div>
                            <div>
                                <h5 className="font-bold text-stone-900 mb-1">茶倉的形制</h5>
                                <p className="text-sm text-stone-700 leading-relaxed">
                                    寬口的茶倉方便取用球形的茶葉，如高山烏龍；而窄口的茶倉則更適合條索狀的茶葉，如文山包種或東方美人。
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 leading-relaxed text-stone-700">
                        當客人一入座，便能從器物佈局中猜出主人的用心，那種「得意感」與主客之間的「會心一笑」，是一種無需言語的深刻共鳴。這不僅是資訊的傳遞，更是知音相遇時，那份微妙而美好的心靈契合。這整個場景的動人之處，誠如講者所言，是「這個準備好的席主遇見了一個懂的客人」。這一瞬間，茶席的意義便從單純的品飲昇華為一場心靈的交會。
                    </p>
                    <p className="mt-4 leading-relaxed text-stone-700">
                        這種主客之間的共鳴，從器物的層次，最終將提升到品茶的整體美學追求。這也呼應了北宋文學家歐陽修所提出的理想品茶境界——「五美」。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 2: Five Beauties & Four Uses */}
            <AcademySection id="xueya-03-realm" title="品茶的理想境界：五美與四用" label="ACADEMY · XUEYA · CH03">
                <AcademyContentBlock title="構成美好茶事的核心要素" icon={Sun}>
                    <p className="mb-6 leading-relaxed">
                        品茶之美，絕不僅止於茶湯的滋味，更在於天、地、人、物和諧共存的理想狀態。要構成一場美好的茶事體驗，需要意境上的追求與實踐上的基礎相互配合。本章節將探討構成此一理想境界的兩大核心要素：由北宋歐陽修所提出的「五美」作為美學追求，以及構成具體實踐的「四用」。
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="font-bold text-stone-900 mb-3 border-b-2 border-emerald-100 pb-2">喝茶五美：意境的追求</h5>
                            <p className="text-sm text-stone-600 mb-3">歐陽修認為一場完美的茶會，需具備五個美好的條件：</p>
                            <ol className="list-decimal list-inside space-y-2 text-stone-700 text-sm leading-relaxed">
                                <li><strong>泉甘</strong>：優質甘甜的泉水是成就好茶湯的根本。</li>
                                <li><strong>器潔</strong>：潔淨的器具不僅關乎衛生，更是對茶與人的尊重。</li>
                                <li><strong>天朗</strong>：良好的天氣能帶來愉悅的心情。不過，講者補充，現代人對天氣好壞的定義已更多元，例如在雨天品茶，也能營造出另一種靜謐的氛圍。</li>
                                <li><strong>佳客</strong>：懂得欣賞、能夠共鳴的好客人，是茶會中不可或缺的靈魂。</li>
                                <li><strong>新茶</strong>：新鮮的茶葉。這反映了古代以新為貴的品茶觀，與當代流行品飲老茶的風氣有所不同。</li>
                            </ol>
                        </div>

                        <div>
                            <h5 className="font-bold text-stone-900 mb-3 border-b-2 border-stone-100 pb-2">品茶四用：實踐的基礎</h5>
                            <p className="text-sm text-stone-600 mb-3">「四用」是實現這份美好的具體實踐，闡明了茶、水、器、火之間缺一不可的關係：</p>
                            <ul className="space-y-3 text-stone-700 text-sm leading-relaxed">
                                <li><strong>• 茶之於水</strong>：茶葉需藉由水，才能釋放內含物質，化為茶湯。</li>
                                <li><strong>• 水藉於器</strong>：水需要有合適的容器（器具）來承裝與沖泡。</li>
                                <li><strong>• 湯成於火</strong>：茶湯的色、香、味，需要透過「火」（即溫度）來催化與成就。</li>
                            </ul>
                            <AcademyHighlightBox className="mt-4 bg-white border border-stone-200 italic text-stone-600 text-sm">
                                「如果你是茶我是水，那麼你的香必須依賴我的無味，我們必須熱甚至沸才能變成一種顏色。」
                                <div className="text-right text-xs mt-1 not-italic text-stone-400">— 張錯</div>
                            </AcademyHighlightBox>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 3: Ritual & Technique */}
            <AcademySection id="xueya-03-ritual" title="從技法到儀式：秩序、技巧與美好茶湯" label="ACADEMY · XUEYA · CH03">
                <AcademyContentBlock title="儀式感的構成與昇華" icon={Layout}>
                    <p className="mb-6 leading-relaxed">
                        泡茶，不僅是技藝的展演，更是一種結合了形式與程序的「儀式感」，它引導我們從日常的喧囂中抽離，進入一個專注而有序的當下。本章節將探討如何從建立「秩序」開始，將基礎的「技法」昇華為善巧的「技巧」，最終追求一杯不僅「好喝」，更是「美好」的茶湯。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-3">儀式感的構成</h5>
                    <div className="bg-stone-50 p-5 rounded-lg border border-stone-200 mb-8">
                        <strong className="block text-emerald-800 text-lg mb-2 text-center">儀式感 = 形式 (茶席) + 儀軌 (程序)</strong>
                        <p className="text-stone-700 text-sm leading-relaxed mb-4">
                            茶席佈置提供了靜態的「形式」，而沖泡的流程（儀軌）則賦予其動態的生命力。
                        </p>
                        <hr className="border-stone-200 mb-4" />
                        <p className="text-stone-700 text-sm leading-relaxed mb-2">
                            <strong>• 儀軌 (程序)</strong>：其核心在於找出一個有序的節奏。它不是僵化的規定，而是讓整個過程流暢、和諧的軌道。
                        </p>
                        <p className="text-stone-700 text-sm leading-relaxed">
                            <strong>• 秩序 (Order)</strong>：有序的節奏來自於內在的秩序感，而秩序源於「對的方向」與「合適的順序」，即知道從何處開始、往何處去，並依循合理的先後次序。
                        </p>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-3">從「技法」到「技巧」</h5>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h6 className="font-bold text-stone-800 mb-2 border-l-4 border-stone-300 pl-3">技法 (法)</h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                指的是泡茶的方法論，是客觀的、可學習的知識。例如，控制水溫（高溫、中溫）、置茶量（壺的六分之一），以及浸泡時間（55秒）等，這些都是具體的「法」。
                            </p>
                        </div>
                        <div>
                            <h6 className="font-bold text-stone-800 mb-2 border-l-4 border-emerald-500 pl-3">技巧 (巧)</h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                指的是對技法的「善為巧用」。它不僅僅是知道方法，更是懂得如何根據茶葉特性、環境變化與品茶人的狀態，靈活地運用這些方法。這是一種需要時間歷練、融會貫通的智慧。講者以食譜為例，人人都能取得食譜（技法），但並非人人都能成為大師（技巧），關鍵就在於這份「巧用」。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-3">追求「美好的茶湯」</h5>
                    <p className="leading-relaxed text-stone-700">
                        泡茶的最終目標，是泡出一杯「美好的茶湯」。這與單純「好喝的茶湯」有所區別。「美好」二字，除了味覺上的「好」作為基礎，更疊加了審美的層次。它包含了整個泡茶過程中的專注、靜心，以及主客之間的情感交流。這個過程本身就是一種修行，誠如講者所提的「藉器鍊心」，透過器物與茶，鍛鍊自身的耐心與專心。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 4: High Mountain Oolong */}
            <AcademySection id="xueya-03-oolong" title="台灣風土的獻禮：高山烏龍茶解析" label="ACADEMY · XUEYA · CH03">
                <AcademyContentBlock title="高山茶的定義與風土" icon={Mountain}>
                    <p className="mb-6 leading-relaxed">
                        在近四十年來，高山茶以其獨特的清香與甘醇，逐漸成為台灣茶市場的主流，深受品茗人士的喜愛。它是台灣獨特地理環境與精湛製茶工藝結合下的珍貴獻禮。本章節將從定義、歷史、風土條件等面向，對高山烏龍茶進行全面的解析。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-3">高山茶的定義</h5>
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 mb-6">
                        <ul className="text-sm text-stone-700 list-disc list-inside space-y-2">
                            <li><strong>地理定義</strong>：指種植於海拔1000公尺以上茶區所採摘的茶菁。</li>
                            <li><strong>工藝區分</strong>：「高山」指的是產區的海拔高度，而「烏龍」則是指採用部分發酵的製茶工藝。</li>
                        </ul>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-3">優越的風土條件</h5>
                    <div className="space-y-4 mb-8">
                        <div className="flex gap-4 p-4 rounded-lg bg-white border border-stone-100 items-start">
                            <div className="bg-emerald-100 text-emerald-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">1</div>
                            <div>
                                <h6 className="font-bold text-stone-900 text-sm">日夜溫差大、溫度低</h6>
                                <p className="text-sm text-stone-700 leading-relaxed">日夜溫差劇烈，且年均溫較低，使得茶樹生長速度減緩。這讓茶葉有更長的時間累積豐富的內含物質，從而使葉肉肥厚、果膠質含量高，最終呈現出茶湯厚實、滑順的絕佳口感。</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-lg bg-white border border-stone-100 items-start">
                            <div className="bg-emerald-100 text-emerald-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">2</div>
                            <div>
                                <h6 className="font-bold text-stone-900 text-sm">抗寒機制與「山頭氣」</h6>
                                <p className="text-sm text-stone-700 leading-relaxed">為抵禦寒冷的氣候，茶樹會分泌一種芳香油作為「抵抗素」來保護自己。這種獨特的芳香物質，正是高山茶特殊「山頭氣」（又稱刷紅）的主要來源，賦予了茶湯獨特的山林氣息。</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-lg bg-white border border-stone-100 items-start">
                            <div className="bg-emerald-100 text-emerald-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">3</div>
                            <div>
                                <h6 className="font-bold text-stone-900 text-sm">雲霧繚繞、漫射光照</h6>
                                <p className="text-sm text-stone-700 leading-relaxed">高山茶區午後經常雲霧瀰漫，這層霧氣如同天然的遮罩，將強烈的陽光直射光轉化為柔和的漫射光。光照的改變減少了茶葉中產生苦澀味的兒茶素含量，同時提升了甘甜度，使茶湯更為甜潤。</p>
                            </div>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-3">各大產區的風味特色</h5>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-100 text-stone-700">
                                    <th className="p-3 border-b border-stone-200">產區</th>
                                    <th className="p-3 border-b border-stone-200">主要香氣類型</th>
                                    <th className="p-3 border-b border-stone-200">特色描述</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-600">
                                <tr className="border-b border-stone-100">
                                    <td className="p-3 font-bold">阿里山</td>
                                    <td className="p-3">花香顯著</td>
                                    <td className="p-3">因日照充足，香氣高揚奔放，花香尤為突出，深受市場歡迎。</td>
                                </tr>
                                <tr className="border-b border-stone-100">
                                    <td className="p-3 font-bold">梨山</td>
                                    <td className="p-3">花果香</td>
                                    <td className="p-3">日照條件佳，加上當地種植多種水果，茶湯常帶有細緻的花香與清甜的果香。</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">杉林溪/龍鳳峽</td>
                                    <td className="p-3">湯中香、脂香</td>
                                    <td className="p-3">因雲霧多、日照較弱，香氣較為內斂，表現為融於茶湯中的「湯中香」與獨特的「脂香」。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="leading-relaxed text-stone-700 text-sm">
                        發展歷史：早期以「焙香型」為主。發展出不經焙火、發酵程度較輕的「清香型」風格後，確立了高山茶地位，並影響分類學將「半發酵」更精準地修正為「部分發酵」。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 5: Brewing Ritual */}
            <AcademySection id="xueya-03-brewing" title="實踐的儀軌：溫、置、注、奉的藝術" label="ACADEMY · XUEYA · CH03">
                <AcademyContentBlock title="流動藝術中的筆觸" icon={Coffee}>
                    <p className="mb-6 leading-relaxed">
                        茶道之美，始終在於實踐。讓我們一同走入沖泡的四段儀軌——「溫、置、注、奉」，這是一趟靜心專注的旅程，每個動作，從溫壺到奉茶，都是一幅流動藝術中的筆觸，將最好的茶湯分享給品飲者。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Thermometer className="mr-2 text-stone-500" size={18} />
                                溫：預備與潔淨
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                溫器是泡茶儀軌的起點，其目的不僅是為了提高器具溫度，更是為了潔淨與去除可能存在的異味，確保茶湯的純淨。
                                <br /><span className="font-bold text-stone-800">技巧</span>：溫壺並非只是簡單「過水」。熱水注入壺中後，應靜待5至10秒，時間長短需依據壺的大小、胎體厚薄、天氣冷暖及茶葉特性來靈活調整，確保壺身被充分溫熱。
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Leaf className="mr-2 text-stone-500" size={18} />
                                置：迎茶入席
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                置茶是迎接茶葉入席的神聖時刻，分為「備茶」與「入茶」兩個階段，動作需沉穩而帶有儀式感。
                                <br />高山烏龍茶的置茶量，通常為壺身體積的六分之一左右，即鋪滿壺底的量。
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Droplets className="mr-2 text-stone-500" size={18} />
                                注：水與茶的交融
                            </h6>
                            <div className="text-sm text-stone-700 leading-relaxed space-y-2">
                                <p><strong>溫潤泡</strong>：目的在於「滋潤茶葉使其舒展」，而非「洗茶」。5-10秒後倒出。</p>
                                <p><strong>第一沖</strong>：注水需穩定，高山茶第一沖約55秒。</p>
                                <p><strong>散熱</strong>：清香型高山茶出湯後，應立即將壺蓋打開，並使用茶撥「輕挑慢撥」，避免悶熟。</p>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Users className="mr-2 text-stone-500" size={18} />
                                奉：分享與連結
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                <strong>分茶</strong>：由內而外，由右到左。
                                <br /><strong>奉茶</strong>：由外而內，眼神先跟隨茶杯，待手回位後，再向客人行禮。
                                <br /><strong>品茶</strong>：觀色、品香、啜味。
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 text-stone-700 leading-relaxed">
                        整個儀軌的流轉，如同一首樂曲的「起、承、轉、合」。從第三沖開始，主客之間的互動（轉）會變得更加熱絡。當茶湯滋味轉淡，茶會也將優雅地走向尾聲（合）。從準備到結束，每一個環節都體現了專注、有序與尊重的美學，這也完美體現了茶道修為中「始於整齊，終於清潔」的精神。
                    </p>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
