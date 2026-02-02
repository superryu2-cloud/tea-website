import React from 'react';
import {
    Leaf,
    Thermometer,
    Clock,
    Droplets,
    Coffee,
    BookOpen,
    Quote,
    Award,
    Wind,
    Sun,
    Layers,
    AlertCircle,
    CheckCircle,
    RotateCcw,
    Map
} from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function XueyaChapter09() {
    return (
        <div className="space-y-12">
            {/* Intro: Mindset */}
            <AcademySection id="xueya-09-mindset" title="泡茶心法：七要素與儀式感" label="ACADEMY · XUEYA · CH09">
                <AcademyContentBlock title="從技術到藝術的修煉" icon={RotateCcw}>
                    <p className="mb-6 leading-relaxed">
                        泡茶，不僅僅是將熱水注入茶葉的技術操作，更是一場心性的修煉與自我安頓的過程。從認識茶葉的本質，到選擇相應的器具，再到精準掌控溫度、置茶量與時間，每一個環節都緊密相連，構成一個相互依存的知識體系。理解並掌握這構成茶事的七大核心要素，是提升品茗體驗、進入更高層次鑑賞境界的戰略基礎。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">1. 認識茶 (Knowledge)</h6>
                            <p className="text-sm text-stone-600">
                                決策的根基。理解製程、海拔、發酵度，是判斷後續所有變數的前提。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">2. 器具 (Vessel)</h6>
                            <p className="text-sm text-stone-600">
                                從「因茶制器」的功能性，進階到「稱茶旨味」的美學展現。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">3. 溫度 (Temp)</h6>
                            <p className="text-sm text-stone-600">
                                決定性開關。恰如其分地喚醒香氣與滋味，避免過猶不及。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">4. 置茶量 (Quantity)</h6>
                            <p className="text-sm text-stone-600">
                                濃度與層次感的藝術。平衡濃烈與寡淡，視茶性而定。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">5. 時間 (Time)</h6>
                            <p className="text-sm text-stone-600">
                                決定物質釋放。長短決定了風味是輕揚或醇厚，甘甜或苦澀。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">6. 儀 (Ritual)</h6>
                            <p className="text-sm text-stone-600">
                                專注與美感。如茶則歸位五字訣：<strong>接、轉、翻、收、放</strong>。這連串動作讓簡單歸位充滿莊重感。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 md:col-span-2">
                            <h6 className="font-bold text-stone-900 mb-2">7. 心 (Mind)</h6>
                            <p className="text-sm text-stone-600">
                                泡茶者的心境是最終影響風味的無形要素。在專注中安頓身心，達到內在平和。
                            </p>
                        </div>
                    </div>

                    <AcademyHighlightBox className="bg-stone-50 border-stone-200 italic text-stone-600">
                        <p className="mb-4">「講究細節，慎重其事」是貫穿茶道的核心精神。反思我們的日常生活，無論是食、衣、住、行，每個人總有自己特別願意投入心力、講究細節的領域。有人在意食材的搭配與烹飪的火候，有人講究衣物的材質與色彩搭配，這份「講究」正是一種生活品味的追尋。將這份慎重的態度帶入茶事，便是對儀式感的尊重，也是對每一泡茶湯風味的極致追求。</p>
                        <p className="mb-4">這七大要素構成了一個完整的泡茶知識體系，引領我們從技術走向藝術。當專注成為日常，儀式便內化為一種自然而然的優雅。</p>
                        <p className="text-center font-medium">誠如一位詩人朋友所言：「你的日常是我遠道而來遇見的風景。」</p>
                    </AcademyHighlightBox>
                    <p className="mt-6 text-stone-600 leading-relaxed">
                        掌握了這些心法，我們便能更有信心地去探索本次的主角——充滿傳奇色彩的東方美人茶。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 2: Oriental Beauty Intro */}
            <AcademySection id="xueya-09-intro" title="東方美人茶初探：名稱由來與傳奇故事" label="ACADEMY · XUEYA · CH09">
                <AcademyContentBlock title="多重身分的茶中瑰寶" icon={BookOpen}>
                    <p className="mb-6 leading-relaxed">
                        在台灣眾多特色茶中，東方美人茶以其獨樹一幟的蜜香果韻和充滿故事性的身世，佔據極為特殊的地位。它擁有多個生動的別名，每個名稱背後都藏著一段典故。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="border-l-4 border-rose-400 pl-4 py-1">
                            <strong className="block text-rose-900 mb-1">東方美人 (Oriental Beauty)</strong>
                            <p className="text-sm text-stone-700">與維多利亞女王的傳說。女王驚豔於其來自東方的神祕風采與絕美茶湯，故賜名。</p>
                        </div>
                        <div className="border-l-4 border-stone-400 pl-4 py-1">
                            <strong className="block text-stone-900 mb-1">白毫烏龍 (Baihao Oolong)</strong>
                            <p className="text-sm text-stone-700">植物學特徵。原料多為一心二葉嫩芽，芽尖帶顯著白色絨毛（白毫）。</p>
                        </div>
                        <div className="border-l-4 border-amber-500 pl-4 py-1">
                            <strong className="block text-amber-900 mb-1">膨風茶 (Pong Fong Cha)</strong>
                            <p className="text-sm text-stone-700">最具在地色彩傳說。客家茶農因蟲咬茶賣得高價被譏笑「吹牛」(膨風)，卻是真實的傳奇。</p>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-4 py-1">
                            <strong className="block text-emerald-900 mb-1">五色茶 (Five-Color Tea)</strong>
                            <p className="text-sm text-stone-700">茶乾繽紛外觀。白（白毫）、黃、紅、褐、綠多色交織如畫。</p>
                        </div>
                        <div className="border-l-4 border-indigo-500 pl-4 py-1">
                            <strong className="block text-indigo-900 mb-1">著涎茶 (Zhuo Yan Cha)</strong>
                            <p className="text-sm text-stone-700">揭示風味來源。「著涎」指被小綠葉蟬唾液侵染，點出其獨一無二的生態製程。</p>
                        </div>
                        <div className="border-l-4 border-stone-300 pl-4 py-1">
                            <strong className="block text-stone-500 mb-1">福壽茶 (Fushou Cha)</strong>
                            <p className="text-sm text-stone-500">較古早名稱，曾於桃竹苗使用。為避免與福壽山混淆，今較少提及。</p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 3: Nature's Alchemy */}
            <AcademySection id="xueya-09-nature" title="自然的煉金術：小綠葉蟬與蜜香的秘密" label="ACADEMY · XUEYA · CH09">
                <AcademyContentBlock title="共生的奇蹟" icon={Leaf}>
                    <p className="mb-6 leading-relaxed">
                        東方美人茶那令人魂牽夢縈的蜜香，並非源於人工，而是來自小綠葉蟬 (Jacobiasca formosana) 與茶樹的一場精妙生態互動。這位微小的「煉金師」透過「刺吸」而非啃食，啟動了茶樹的化學對話。
                    </p>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mb-8">
                        <h5 className="font-bold text-stone-900 mb-4">被咬後的生化反應三部曲</h5>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">1</span>
                                <div>
                                    <strong className="text-stone-900">在欉發酵 (On-Plant Fermentation)</strong>
                                    <p className="text-sm text-stone-600 mt-1">傷口接觸空氣，茶葉在樹上便提前開始氧化發酵。這是與一般烏龍茶的根本差異。</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">2</span>
                                <div>
                                    <strong className="text-stone-900">防禦機制 (費洛蒙)</strong>
                                    <p className="text-sm text-stone-600 mt-1">茶樹釋放類似蜂蜜香氣物質吸引天敵（如蜘蛛），「聯合次要敵人，打擊主要敵人」。</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">3</span>
                                <div>
                                    <strong className="text-stone-900">自癒能力</strong>
                                    <p className="text-sm text-stone-600 mt-1">
                                        分泌芳香醇與茶多酚修復傷口。正如劇作《茶金》台詞：「傷口令人脆弱，但也令人堅強。」
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-stone-100 p-5 rounded-lg border-l-4 border-emerald-600 mt-6">
                        <h6 className="font-bold text-stone-900 mb-2">結論</h6>
                        <p className="text-sm text-stone-700 leading-relaxed mb-3">
                            東方美人茶獨特的「蜜香」與「熟果韻」，正是上述三種生化反應——提早發酵、防禦機制與自癒反應——共同作用的結晶。這種完全源於自然的風味，是大自然鬼斧神工的饋贈，無法透過任何後天製茶技術憑空複製。
                        </p>
                        <p className="text-sm text-stone-700 leading-relaxed mb-3">
                            此外，這場生態互動也對茶葉的外觀造成了顯著影響。由於養分輸送受阻，被小綠葉蟬著涎過的茶葉會呈現葉片短小、葉形捲曲枯萎的特徵。
                        </p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            擁有了如此獨特且珍貴的原料後，還必須仰賴茶師精湛的人為工藝，才能將這份自然的恩賜，最終轉化為一杯完美的東方美人茶。
                        </p>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 4: Craft */}
            <AcademySection id="xueya-09-craft" title="人為的藝術：獨特製程" label="ACADEMY · XUEYA · CH09">
                <AcademyContentBlock title="保留並昇華蜜香" icon={Layers}>
                    <p className="mb-6 leading-relaxed">
                        為了應對細嫩且經蟲咬的特殊原料，東方美人發展出獨特工序。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center"><Sun className="mr-2" size={18} /> 日光萎凋 (薄攤)</h6>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                原料極細嫩，必須「薄攤」。厚鋪會導致底層無法散熱而「悶傷」，產生異味。
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center"><Wind className="mr-2" size={18} /> 靜置回潤 (悶堆)</h6>
                            <p className="text-sm text-stone-600 leading-relaxed mb-3">
                                用濕布包裹悶堆。<strong>關鍵目的：</strong>
                            </p>
                            <ul className="text-sm text-stone-600 space-y-2 list-disc list-inside">
                                <li><strong>促進葉色轉紅</strong>：這就像我們炒好的青菜，如果用鍋蓋悶住，翠綠色很快就會變黃。同樣的道理，在濕熱環境下，茶葉中的葉綠素會發生脫鎂的化學變化，使葉片顏色轉為紅褐色，形成其特有的外觀。</li>
                                <li><strong>降低苦澀感</strong>：此過程能促進兒茶素等苦澀物質水解，使茶湯口感更加甘甜柔順。</li>
                                <li><strong>產生熟果香</strong>：這是補足發酵、形成重發酵特有熟果香的關鍵環節，與小綠葉蟬帶來的蜜香相互輝映，構成東方美人茶複雜而迷人的風味。</li>
                                <li><strong>增加葉片韌性</strong>：回潤後的茶葉恢復了一定的水分與彈性，在後續的揉捻過程中不易破碎，能保持完整的條索外形。</li>
                            </ul>
                        </div>
                    </div>

                    <AcademyHighlightBox className="bg-stone-50 border-stone-200">
                        <strong className="block text-stone-900 mb-2 text-lg">重要觀念釐清：並非所有被小綠葉蟬著涎的茶都是東方美人</strong>
                        <p className="text-stone-700 mb-3 leading-relaxed">
                            一個重要的觀念是，「小綠葉蟬著涎」是一種生態現象，指的是原料的特性，而「東方美人茶」則是一種特定的製茶工藝。使用同樣被著涎的原料，若採用不同的製程，最終會成為完全不同的茶品。
                        </p>
                        <ul className="text-sm text-stone-600 list-disc list-inside space-y-1">
                            <li><strong>東方美人茶</strong>：重發酵、不烘焙、條索狀。</li>
                            <li><strong>凍頂貴妃茶</strong>：凍頂式做法 (半球形、中重發酵、有烘焙)。</li>
                            <li><strong>蜜香紅茶</strong>：全發酵紅茶製法。</li>
                        </ul>
                        <p className="text-xs text-stone-500 mt-2">是後續製程決定了茶的最終歸屬。</p>
                    </AcademyHighlightBox>
                </AcademyContentBlock >
            </AcademySection >

            {/* Section 5: Terroir */}
            < AcademySection id="xueya-09-terroir" title="風土的印記：產區、季與種" label="ACADEMY · XUEYA · CH09" >
                <AcademyContentBlock title="不可複製的地域印記" icon={Map}>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="p-4 border border-stone-200 rounded-lg">
                            <strong className="block text-stone-900 mb-2">主要產區</strong>
                            <p className="text-xs text-stone-600 leading-relaxed">
                                桃竹苗、新北石碇。新竹峨眉、頭份因夏季濕熱，著涎程度常更高。
                            </p>
                        </div>
                        <div className="p-4 border border-stone-200 rounded-lg">
                            <strong className="block text-stone-900 mb-2">核心品種</strong>
                            <p className="text-xs text-stone-600 leading-relaxed">
                                <strong>青心大冇</strong>為公認首選。近年亦有「白鷺」(台茶17號) 及石碇「大冇種」。
                            </p>
                        </div>
                        <div className="p-4 border border-stone-200 rounded-lg">
                            <strong className="block text-stone-900 mb-2">關鍵季節</strong>
                            <p className="text-xs text-stone-600 leading-relaxed">
                                <strong>芒種至端午</strong>。茶芽最嫩且蟲害最盛，蜜香最濃郁純正的黃金時期。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection >

            {/* Section 6: Brewing */}
            < AcademySection id="xueya-09-brewing" title="品飲的藝術：沖泡指南" label="ACADEMY · XUEYA · CH09" >
                <AcademyContentBlock title="展顯蜜香果韻的鑰匙" icon={Coffee}>
                    <p className="mb-6 leading-relaxed">
                        原料細嫩、芽毫多、發酵度高——這決定了東方美人的沖泡需格外講究。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <div className="p-3 bg-stone-50 rounded border border-stone-100">
                            <span className="text-xs text-stone-500 block">器具</span>
                            <strong className="text-stone-900">蓋杯 (瓷器)</strong>
                            <div className="text-[10px] text-stone-400">散熱快，避悶澀</div>
                        </div>
                        <div className="p-3 bg-stone-50 rounded border border-stone-100">
                            <span className="text-xs text-stone-500 block">水溫</span>
                            <strong className="text-stone-900">90°C</strong>
                            <div className="text-[10px] text-stone-400">勿用沸水，溫柔萃取</div>
                        </div>
                        <div className="p-3 bg-stone-50 rounded border border-stone-100">
                            <span className="text-xs text-stone-500 block">茶量</span>
                            <strong className="text-stone-900">1/2 至 2/3</strong>
                            <div className="text-[10px] text-stone-400">鋪滿容器</div>
                        </div>
                        <div className="p-3 bg-stone-50 rounded border border-stone-100">
                            <span className="text-xs text-stone-500 block">時間</span>
                            <strong className="text-stone-900">首泡 50秒</strong>
                            <div className="text-[10px] text-stone-400">充分舒展</div>
                        </div>
                        <div className="p-3 bg-stone-50 rounded border border-stone-100">
                            <span className="text-xs text-stone-500 block">注水</span>
                            <strong className="text-stone-900">細水流環狀</strong>
                            <div className="text-[10px] text-stone-400">避衝擊細嫩芽葉</div>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-6 flex items-start gap-3">
                        <AlertCircle className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                        <div>
                            <strong className="text-amber-900 text-sm">特別提醒：立即開蓋</strong>
                            <p className="text-xs text-amber-800 mt-1">
                                因製程有「靜置回潤」，茶葉較濕潤。每泡出湯後<strong>務必開蓋散熱</strong>，避免餘溫悶住茶葉，影響下一泡香氣。
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-stone-600 italic">
                        講師比喻：第一泡是18歲(蜜香)，第二泡是28歲，第三泡是38歲(熟果)... 層次豐富。
                    </p>
                </AcademyContentBlock>
            </AcademySection >

            {/* Section 7: Market */}
            < AcademySection id="xueya-09-market" title="市場洞察：競賽分級與品鑑" label="ACADEMY · XUEYA · CH09" >
                <AcademyContentBlock title="看懂比賽與分級" icon={Award}>
                    <p className="mb-6 leading-relaxed">
                        <strong>四大競賽系統：</strong>桃園全國組、新北石碇組、新竹峨眉/北埔組、苗栗組。
                        <br /><strong>與分級包裝區別：</strong>比賽茶是淘汰制；分級包裝是品質分類（如創意地用「蟲的數量」標示蜜香等級）。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-3">品鑑維度</h5>
                    <ul className="text-sm text-stone-700 space-y-2 list-disc list-inside">
                        <li><strong>品種</strong>：大冇種底蘊足；白鷺帶花香。</li>
                        <li><strong>季節</strong>：芒種至端午蜜香最顯。</li>
                        <li>
                            <strong>陳放</strong>：新鮮茶香氣活潑但可能有「燥感」。
                            <span className="block pl-5 text-stone-500 text-xs mt-1">
                                適度陳放（如四年老美人）能將燥感轉化為溫潤醇和的「潤澤」口感，稱為「轉味」。
                            </span>
                        </li>
                    </ul>
                </AcademyContentBlock>

                <div className="mt-8 text-center text-stone-500 text-sm">
                    <p>這不僅僅是一杯茶，更是品茗者在完成了「認識茶」的完整旅程後，方能深刻體會的液體藝術品。</p>
                </div>
            </AcademySection >
        </div >
    );
}
