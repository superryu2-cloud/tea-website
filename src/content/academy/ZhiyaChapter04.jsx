import React from 'react';
import {
    Activity,
    Coffee,
    Sun,
    Bug,
    Leaf,
    HelpCircle,
    Thermometer,
    Search,
    Map,
    Sliders,
    BookOpen,
    Quote
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function ZhiyaChapter04() {
    return (
        <div className="space-y-12">
            {/* Intro */}
            <AcademySection id="zhiya-04-intro" title="濃香型茶的品質探討：以東方美人茶為核心的深度解析" label="ACADEMY · ZHIYA · CH04">
                <AcademyContentBlock title="導論" icon={BookOpen}>
                    <p className="mb-6 leading-relaxed">
                        「濃香」不僅是一種嗅覺上的豐富感受，更是茶葉「發酵度」這門科學與工藝的綜合體現。理解這一概念，是深入品鑑茶葉、辨析其萬千風味的基礎。簡而言之，茶葉的香氣光譜，會隨著發酵度的增加而愈加璀璨。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        在茶學領域，「濃香」與「重發酵度」之間存在著直接且緊密的關聯。無發酵的綠茶，香氣單純，多為豆香、海苔香；而隨著發酵的介入，茶葉會逐漸展現出更為豐富的花香、果香。事實上，隨著檢測儀器的日益精準，科學家已能從全發酵的紅茶中分析出超過450種香氣分子。這並非現代製茶技術的飛躍，而是我們解讀香氣能力的提升，也印證了重發酵茶香氣的豐厚程度。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        這一轉變的背後，是茶葉內化學物質的此消彼長，其中關鍵在於「酚氨比」——即茶多酚與茶氨酸的比例。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">低發酵茶（如綠茶）</h6>
                            <p className="text-stone-700 text-sm">茶多酚含量高，「酚」的比重較大，風味直接、新鮮。</p>
                        </div>
                        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                            <h6 className="font-bold text-amber-900 mb-2">重發酵/全發酵茶（如東方美人、紅茶）</h6>
                            <p className="text-amber-900 text-sm">在氧化過程中，茶多酚轉化，茶氨酸的比例相對增加，「氨」的影響更顯著，風味趨向圓潤、甘甜。</p>
                        </div>
                    </div>
                    <p className="mb-6 leading-relaxed">
                        這個化學比例的轉變，如同人生的歷程。年輕時，我們猶如一杯綠茶，帶著「赤子之心」，直接、坦率；隨著歲月的磨礪，經歷了社會的鍛鍊，我們變得更加成熟、圓潤，如同高山茶或紅烏龍，不再像綠茶那樣率性地向外奔放，而是學會了向內收斂，多了份圓融與底蘊。
                    </p>
                    <p className="leading-relaxed">
                        因此，發酵度是解鎖茶葉香氣密碼的鑰匙。理解了這一原理後，我們將進一步探討台灣濃香型茶的具體實例，從中窺見其工藝與品質的奧秘。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 2. Representatives */}
            <AcademySection id="zhiya-04-representatives" title="台灣濃香型茶的代表：東方美人與紅茶" label="ACADEMY · ZHIYA · CH04">
                <AcademyContentBlock title="發酵度與工藝的結晶" icon={Coffee}>
                    <p className="mb-6 leading-relaxed">
                        在理解了濃香源於重度發酵的原理後，我們可以將目光聚焦於台灣茶的譜系。其中，最具代表性的兩款濃香型茶，無疑是東方美人茶與紅茶。或許有人會問，發酵度高達70%的紅烏龍為何不在此列？這是因為紅烏龍經過了顯著的焙火工藝，其香氣特徵以「焙香」為主，因此在分類上被歸於「焙香型」。
                    </p>
                    <p className="mb-4 leading-relaxed">因此，台灣最典型的兩大濃香型茶分別是：</p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>東方美人茶</strong>：重發酵烏龍茶的典範。</li>
                        <li><strong>紅茶</strong>：全發酵茶的代表，可再細分為小葉種、大葉種等不同類別。</li>
                    </ul>
                    <p className="leading-relaxed">
                        兩者之中，東方美人茶的品質形成需要更多元的自然與人為條件配合，其獨特性更具探討價值。它不僅僅是一款重發酵茶，其靈魂更在於茶菁需經過「小綠葉蟬」的吸食（著涎），這使得它的製程與品質變數遠比一般紅茶來得複雜且珍稀。因此，本報告接下來將以「東方美人茶」作為核心，深入剖析其品質背後的關鍵要素。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 3. Nature's Code */}
            <AcademySection id="zhiya-04-nature" title="天時與地利：成就東方美人品質的自然密碼" label="ACADEMY · ZHIYA · CH04">
                <AcademyContentBlock title="自然條件的共同作用" icon={Sun}>
                    <p className="mb-6 leading-relaxed">
                        東方美人茶的卓越品質，並非僅來自製茶師的精湛工藝，它更是一系列難以完全由人為掌控的自然條件共同作用下的產物。本章節將深入解析這些成就其非凡風味的「天時」與「地利」。
                    </p>

                    <div className="space-y-8">
                        {/* 3.1 */}
                        <div>
                            <h5 className="font-bold text-stone-900 mb-3 flex items-center">
                                <Bug className="mr-2 text-amber-600" size={20} />
                                關鍵角色：小綠葉蟬與蜜香的誕生
                            </h5>
                            <p className="mb-4 leading-relaxed text-stone-700">
                                東方美人茶最標誌性的風味——「蜜香」，其誕生的核心秘密在於小綠葉蟬的「著涎」過程。這也是比賽茶評選中的關鍵指標。茶樹嫩芽經小綠葉蟬刺吸後，會啟動自身的防禦與療癒機制，從而產生這種獨特的天然香氣。
                            </p>
                            <p className="leading-relaxed text-stone-700">
                                然而，要吸引小綠葉蟬前來並非易事。講者一位在苗栗銅鑼擁有茶園的朋友，其茶園採用管理極佳的「友善農法」，環境安全無虞，但某年卻幾乎沒有小綠葉蟬造訪。原因在於，小綠葉蟬偏好「悶濕」的氣候，而那片茶園恰好地勢通風，相對涼爽，不符合牠們的喜好。最終，雖然茶葉本身品質優良，卻獨缺那畫龍點睛的蜜香。這充分說明了「天時」對於東方美人茶品質的決定性影響。
                            </p>
                        </div>

                        {/* 3.2 */}
                        <div>
                            <h5 className="font-bold text-stone-900 mb-3 flex items-center">
                                <Leaf className="mr-2 text-emerald-600" size={20} />
                                友善農法下的生態智慧：草與茶的共生關係
                            </h5>
                            <p className="mb-4 leading-relaxed text-stone-700">
                                「友善農法」是成就高品質東方美人茶的另一項關鍵。這種農法不使用除草劑、不施肥，刻意保留完整的生態鏈。在這樣的茶園裡，有蚯蚓，就會吸引青蛙；有青蛙，就會吸引蛇類；而蛇類的存在，則會引來老鷹盤旋。這是一個健康且平衡的生態系統。
                            </p>
                            <p className="leading-relaxed text-stone-700">
                                其中，「草生栽培」的價值尤為突出。傳統觀念認為，雜草會與茶樹競爭養分，是必須剷除的「敵人」。然而，在友善農法中，草與茶的關係更像是「對手」。講者朋友的茶園在一次嚴重乾旱期間，周遭茶園的茶樹都瀕臨枯死，他的茶園卻依然能抽出新芽。原因就在於地表的草在乾旱時為茶樹的根部提供了寶貴的保濕作用，將自身儲存的水分輸送給茶樹。這種共生關係，展現了順應自然的生態智慧。
                            </p>
                        </div>

                        {/* 3.3 */}
                        <div>
                            <h5 className="font-bold text-stone-900 mb-3 flex items-center">
                                <Activity className="mr-2 text-stone-600" size={20} />
                                深根與淺根：施肥對茶樹生態的改變
                            </h5>
                            <p className="mb-4 leading-relaxed text-stone-700">
                                茶樹本質上是一種「深根植物」。所謂深根，有一個明確的判斷標準：你在地面上看到它的高度，其根系在地下足以達到該高度的三倍。這使得茶樹能夠深入地底，吸取豐富的水分與微量元素。
                            </p>
                            <p className="mb-4 leading-relaxed text-stone-700">
                                然而，現代農業普遍的「施肥」行為，卻從根本上改變了茶樹的生態。當茶樹習慣於從土壤表層獲取養分後，其根系便不再努力向下探索，逐漸退化為「淺根」植物。這種茶樹雖然產量可能較高，但對環境變化的抵抗力（如乾旱）卻相對脆弱。
                            </p>
                            <p className="leading-relaxed text-stone-700">
                                友善農法不施肥的堅持，正是讓茶樹回歸其「深根」的本性。深根讓茶樹在缺水時也能從地底深處獲取生機，從而孕育出更富內涵與生命力的茶菁。正是這些複雜且環環相扣的自然因素，共同造就了東方美人茶的珍稀與高昂價值。接下來，我們將進一步探討其核心風味「蜜香」的本質論辯。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 4. Honey Aroma Debate */}
            <AcademySection id="zhiya-04-debate" title="「蜜香」的本質論辯：天然著涎 vs. 烘焙工藝" label="ACADEMY · ZHIYA · CH04">
                <AcademyContentBlock title="風味的定義與品質真實性" icon={HelpCircle}>
                    <p className="mb-6 leading-relaxed">
                        在茶葉界，關於「蜜香」的來源一直存在兩種不同的觀點。這場關於「天然形成」與「工藝產生」的專業論辯，不僅關乎風味的定義，更觸及品質的真實性。本節旨在客觀呈現這兩種說法，引導讀者進行深度思考。
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h5 className="font-bold text-stone-900 mb-3 border-b-2 border-stone-200 pb-2">主流觀點：源於自然的防禦與治癒</h5>
                            <p className="mb-4 text-stone-700 text-sm leading-relaxed">
                                主流且傳統的觀點認為，真正的「蜜香」源自茶樹被小綠葉蟬刺吸後，其內在啟動的兩種生物本能：
                            </p>
                            <ol className="list-decimal list-inside text-stone-700 text-sm space-y-2 mb-4">
                                <li><strong>防禦力 (Defense Mechanism)</strong>：茶樹會釋放特殊的氣味，吸引小綠葉蟬的天敵（如肉食性椿象、蜘蛛）前來，以保護自己免受進一步的傷害。</li>
                                <li><strong>治癒力 (Healing Mechanism)</strong>：在受傷後，茶樹會產生大量的茶多酚與芳香物質來修復傷口，這個過程如同植物的自我療癒，也正是蜜香物質生成的關鍵。</li>
                            </ol>
                            <div className="bg-stone-100 p-4 rounded-lg italic text-stone-600 text-sm">
                                <Quote size={16} className="inline mr-2 mb-1" />
                                正如公視時代劇《茶金》中的一句經典台詞所言：「茶樹跟人一樣，傷口會讓人脆弱，但也會讓人堅強，讓你與眾不同。」這個受傷與堅強的過程，賦予了東方美人茶獨一無二的天然蜜香。
                            </div>
                        </div>
                        <div>
                            <h5 className="font-bold text-stone-900 mb-3 border-b-2 border-stone-200 pb-2">另一種說法：源於工藝的梅納反應</h5>
                            <p className="mb-4 text-stone-700 text-sm leading-relaxed">
                                近年來，產業中也出現了另一種聲音。有部分業者與焙茶師提出，可以透過烘焙過程中產生的「梅納反應」（Maillard reaction），製造出類似蜜香的「糖香」或「焦糖香」，並也將其稱為「蜜香」。
                            </p>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                <h6 className="font-bold text-red-800 mb-2">對比與反思</h6>
                                <p className="text-red-900 text-sm leading-relaxed mb-3">
                                    對此，講者提出了一個深具啟發性的反思邏輯：如果烘焙產生的糖香可以被定義為蜜香，那麼以糖製作的產品，是否也能自稱為「蜂蜜」？
                                </p>
                                <p className="text-red-900 text-sm leading-relaxed">
                                    這個類比質疑了後者定義的合理性，並點出了兩者本質上的差異。據悉，茶業改良場的前場長對此也不表認同，堅持真正的蜜香應源於小綠葉蟬的著涎。此議題仍在業界持續觀察與討論中，但講者的核心觀點是，即便接受了這種說法，也應當明確區分：如果烘焙產生的糖香可被稱為蜜香，那也必須加上一句註解——「它是烘焙產生的，不能叫做天然蜜香」。理解這兩種來源的本質差異，有助於我們更精準地品鑑與判斷茶葉的真實價值。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 5. Resting Process */}
            <AcademySection id="zhiya-04-process" title="獨特的轉化藝術：「靜置回潤」工藝詳解" label="ACADEMY · ZHIYA · CH04">
                <AcademyContentBlock title="化苦澀為甘甜的關鍵技法" icon={Thermometer}>
                    <p className="mb-6 leading-relaxed">
                        東方美人茶的原料特性——多為夏茶、生長於中低海拔、且茶菁經過小綠葉蟬著涎受損——使其苦澀度相對較高。為了轉化這些特性，並使其發酵更為完全，製茶師發展出了一套獨特的關鍵工序——「靜置回潤」。
                    </p>
                    <p className="mb-4 leading-relaxed">此工序主要有四大目的：</p>
                    <ol className="list-decimal list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>補足發酵</strong>：讓茶葉的氧化作用更為深入、完整。</li>
                        <li><strong>產生熟果香</strong>：在高溫高濕的環境下，促進酯類物質的形成，賦予茶葉豐富的熟果香氣。</li>
                        <li><strong>降低苦澀度</strong>：透過茶素水解，使茶湯口感變得更加「水軟」、順滑。</li>
                        <li><strong>利於揉捻</strong>：讓殺青後相對乾燥的茶葉回歸濕潤，增加韌性，避免在揉捻過程中碎裂。</li>
                    </ol>
                    <p className="mb-6 leading-relaxed">
                        「靜置回潤」的操作過程，是將剛殺青完、溫度仍高的茶葉，用濕布包裹起來，利用茶葉自身的餘溫，在「高溫高濕」的狀態下靜置一段時間。這個過程會促使葉綠素脫鎂（使葉色偏紅）、茶素水解，並形成豐富的醇類、酮類（花香來源）與酯類（果香來源）等芳香物質。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        然而，這道工序也伴隨著極高的風險。若溫濕度或時間掌控不當，發酵過度便會產生酸味、臭味；若處理不足，則容易殘留令人不悅的「青味」。因此，「無青味」是評判高品質東方美人茶的一項重要指標。
                    </p>

                    <p className="mb-4 leading-relaxed">為了更清晰地理解，我們可以透過下表對比東方美人茶與紅茶在「補足發酵」工藝上的異同：</p>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-100 text-stone-700">
                                    <th className="p-4 border-b border-stone-200">特性比較</th>
                                    <th className="p-4 border-b border-stone-200">東方美人茶 (靜置回潤)</th>
                                    <th className="p-4 border-b border-stone-200">紅茶 (補足發酵)</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-600">
                                <tr>
                                    <td className="p-4 border-b border-stone-100 font-bold">溫度條件</td>
                                    <td className="p-4 border-b border-stone-100">高溫 (殺青後餘溫)</td>
                                    <td className="p-4 border-b border-stone-100">常溫 (約 24-25°C)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-stone-100 font-bold">濕度條件</td>
                                    <td className="p-4 border-b border-stone-100">高濕 (濕布包裹)</td>
                                    <td className="p-4 border-b border-stone-100">極高濕 (濕度達 90% 以上)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-stone-100 font-bold">核心目的</td>
                                    <td className="p-4 border-b border-stone-100">補足發酵、產生熟果香、降澀、利於揉捻</td>
                                    <td className="p-4 border-b border-stone-100">形成更多茶黃素與茶紅素、使青味完全消失</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-stone-100 font-bold">工藝本質</td>
                                    <td className="p-4 border-b border-stone-100">仍屬烏龍茶製程，有殺青</td>
                                    <td className="p-4 border-b border-stone-100">全發酵茶製程，無殺青</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="leading-relaxed">
                        最後，需要澄清「濃」與「濃郁」的區別。「濃」 僅是一個客觀的狀態描述，指茶湯內含物質豐富。而 「濃郁」 則是一個帶有正面評價的品質形容詞，意指茶湯中好的風味物質豐富且協調。一杯好的濃香型茶，應當是濃郁而非僅僅是濃。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 6. Tasting Guide */}
            <AcademySection id="zhiya-04-tasting" title="品鑑之道：從外觀到內質的評估標準" label="ACADEMY · ZHIYA · CH04">
                <AcademyContentBlock title="從「形」到「味」的完整評估" icon={Search}>
                    <p className="mb-6 leading-relaxed">
                        東方美人茶是少數在沖泡前，僅憑乾茶外觀就能大致判斷其等級與價值的茶類。建立從「形」到「味」的完整評估體系，是專業品鑑的第一步。
                    </p>
                    <p className="mb-4 leading-relaxed">高品質的東方美人茶，其外觀應具備以下特徵：</p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>白毫顯露</strong>：茶芽上的白色絨毛清晰可見。</li>
                        <li><strong>外形捲曲如花朵</strong>：茶葉條索自然捲曲，形態優美。</li>
                        <li><strong>色澤呈現五色</strong>：茶乾應呈現紅、白、黃、褐等多樣色彩。傳統上會避免綠色，因為綠色葉片在沖泡時易產生「菜青味」，現代製程中多會將其挑除。一般而言，紅色佔比越高，品質通常也越高。</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">
                        在品鑑時，也需釐清「貴妃茶」與「東方美人茶」的區別。兩者的共同點是茶菁皆有被小綠葉蟬著涎，但製法截然不同。貴妃茶採用的是類似凍頂烏龍茶的半球形做法，而東方美人茶則是傳統的條索狀做法。
                    </p>
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                        <h5 className="font-bold text-stone-900 mb-4 flex items-center">
                            <Map className="mr-2 text-stone-600" size={20} />
                            產區與品種分析
                        </h5>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            台灣東方美人茶的主要產區集中於「桃竹苗」地區與新北石碇，具體而言包括：
                        </p>
                        <ul className="list-disc list-inside text-stone-700 space-y-1 mb-4">
                            <li>桃園市</li>
                            <li>新竹縣：北埔鄉、峨眉鄉</li>
                            <li>苗栗縣：頭份市、銅鑼鄉</li>
                            <li>新北市：石碇區</li>
                        </ul>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            在桃竹苗產區，成就東方美人茶風味的四大主流品種功不可沒，分別是：清心大冇、白毛猴、大葉烏龍與金萱 (台茶17號，又名白鷺)。這些品種各具特色，為東方美人茶的豐富樣貌奠定了基礎。
                        </p>
                        <p className="leading-relaxed text-stone-700">
                            其中，「石碇美人茶」因其獨特的地理環境而別具風格。相較於桃竹苗產區，石碇氣候濕度更高、溫度較低，這使得小綠葉蟬的活動與茶樹的反應有所不同。因此，石碇美人茶的香氣表現上，「蜜香」較不顯著，而以清雅的「花果香」與「梨子香」為主，形成了獨樹一幟的地域風格。
                        </p>
                    </div>
                    <p className="mt-6 leading-relaxed">
                        當然，外觀僅是品鑑的第一步，茶葉最終的品質與風味，仍需透過實際沖泡來驗證其內涵。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 7. Brewing Philosophy */}
            <AcademySection id="zhiya-04-brewing" title="超越標準的藝術：揚長隱次的沖泡哲學" label="ACADEMY · ZHIYA · CH04">
                <AcademyContentBlock title="沖泡的心法與技法" icon={Sliders}>
                    <p className="mb-6 leading-relaxed">
                        品茶與泡茶，不應僅是追求單一的「完美標準」。當我們面對一款茶，更進階的心法應是「揚長隱次」——即如何透過沖泡技法，最大化茶葉的優點，並巧妙地修飾其潛在的缺點，將每一次的沖泡都提升至藝術創作的層次。
                    </p>
                    <AcademyHighlightBox type="important">
                        <p className="font-bold text-amber-900">「揚長隱次，彰優隱次」</p>
                        <p className="text-amber-800 text-sm mt-1">
                            是此心法的核心思想。舉例來說，當我們品評一款帶有豐滿熟果香、但蜜香稍嫌不足的東方美人茶時，一位高明的泡茶者不應強求其所無（蜜香），而應致力於將其既有的優點（熟果香）淋漓盡致地發揮出來。
                        </p>
                    </AcademyHighlightBox>

                    <p className="mt-6 mb-4 leading-relaxed">
                        為達到此目的，可運用以下三種進階沖泡技法：
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-100">
                            <h6 className="font-bold text-stone-900 mb-3 text-center">理茶 (置茶手法)</h6>
                            <p className="text-sm text-stone-600 mb-3 text-center">茶葉在沖泡器具中的佈局會直接影響萃取效果。</p>
                            <ul className="text-sm text-stone-700 list-disc list-inside space-y-1">
                                <li><strong>平鋪形</strong>：茶葉均勻鋪平，受水面積一致，為基礎手法。</li>
                                <li><strong>山形</strong>：茶葉集中於中央，水流會向四周擴散，適合需要展現香氣層次的茶。</li>
                                <li><strong>溪谷形 (又稱骨形)</strong>：茶葉撥於兩側，中央留空，注水時可避免熱水直接衝擊茶葉，適合修飾苦澀味。</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-100">
                            <h6 className="font-bold text-stone-900 mb-3 text-center">注水 (水流控制)</h6>
                            <p className="text-sm text-stone-600 mb-3 text-center">水流的四大維度——粗細、高低、輕重、快慢——都會精微地影響茶湯的風味。</p>
                            <p className="text-sm text-stone-700 text-center">
                                例如，細柔的水流能帶來更細膩的口感，而強勁的水柱則能激發出更濃郁的香氣。
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-100">
                            <h6 className="font-bold text-stone-900 mb-3 text-center">點茶 (注水落點)</h6>
                            <p className="text-sm text-stone-600 mb-3 text-center">注水的落點是單點集中，還是環狀螺旋，會對茶葉的浸潤與物質釋放產生顯著差異。</p>
                            <p className="text-sm text-stone-700 text-center">
                                單點注水穿透力強，環狀注水則更為均勻溫和。
                            </p>
                        </div>
                    </div>

                    <p className="mb-4 leading-relaxed">
                        綜合以上技法，一位茶人應先分析茶葉的優缺點，再策略性地組合「理茶」、「注水」、「點茶」等變數，為其設計出一套最適合的沖泡方案。例如，對於一款略帶苦澀的茶，可採用「溪谷形」理茶，並從中央的「溪谷」緩緩注水，以最溫柔的方式萃取其甘甜，隱藏其澀感。
                    </p>
                    <p className="leading-relaxed">
                        最終，真正的茶藝是從「方法」、「技法」昇華至「心法」的過程。它不僅是技術的展演，更是泡茶者與茶、與品飲者之間的深度對話與關照。透過不斷的實踐，將每一次沖泡都視為一次獨特的創作，方能體會茶道的真諦。
                    </p>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
