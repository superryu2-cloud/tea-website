import React from 'react';
import {
    Layout,
    Compass,
    Palette,
    Sun,
    Box,
    Maximize,
    History,
    PenTool,
    Feather,
    Image,
    Mountain,
    Grid,
    Coffee,
    BookOpen,
    Eye
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function ZhiyaChapter06() {
    return (
        <div className="space-y-12">
            {/* Intro */}
            <AcademySection id="zhiya-06-intro" title="茶席的設計美學：從佈局、用色到意境的完整指南" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="品的氣場：從物境到意境的旅程" icon={BookOpen}>
                    <p className="mb-6 leading-relaxed">
                        茶席，遠不僅是器物的陳列，而是一場精心構築的「品的氣場」。它始於對物理空間的安排，即「物境」；進而透過色彩與氛圍的營造，觸動品者的內心，此為「情境」；最終昇華為一種能引發共鳴、安頓心神的精神哲思，是為「意境」。這趟從「物」到「心」的旅程，是茶人美學修為的完整體現。本文將引導讀者，從佈局的基礎心法、構成的核心要件，到歷史的流變與當代的創意，層層深入，最終探討如何創造出屬於自己獨一無二的茶席意境。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 1. Layout Fundamentals */}
            <AcademySection id="zhiya-06-layout-basics" title="茶席設計的基礎：佈局的五大心法" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="構築物境的根基" icon={Compass}>
                    <p className="mb-6 leading-relaxed">
                        茶席的佈局，是茶事美學的起點，是構築「物境」的根基。它不僅是器物的簡單排列，更是一門關於空間關係的藝術性呈現，直接影響著品茶的氛圍與體驗。一個精心設計的佈局，能夠引導視覺動線，創造和諧的節奏感，讓品茗者的心神得以安頓。本章節將回顧構成茶席佈局的五個核心原則，為後續更深入的設計探討奠定基礎。
                    </p>
                    <p className="mb-4 leading-relaxed">
                        根據茶席設計的實踐經驗，我們可將器物佈局的要點歸納為五個方向性的概念：
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Maximize className="mr-2 rotate-90" size={18} /> 高低
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                器物之間的高低錯落是創造立體感與視覺節奏的關鍵。透過不同高度的器物搭配，可以打破平面的單調，使茶席整體更具動態與層次。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Maximize className="mr-2" size={18} /> 前後
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                前後配置創造了空間的縱深感。將器物有策略地放置在不同的前後位置，能夠引導觀者的視線，形成遠近有致的空間層次。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Grid className="mr-2" size={18} /> 疏密
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                器物排列的疏密對比，如同音樂中的節拍，影響著視覺的節奏與呼吸。適度的留白（疏）與器物的集中（密）形成對比，能讓主題更加突出，避免雜亂或呆板。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Layout className="mr-2" size={18} /> 側旁
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                側邊的佈局不僅是主景的延伸，有時也能成為視覺的趣味點或功能性的輔助區域，使茶席的空間運用更為靈活。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Mountain className="mr-2" size={18} /> 遠近
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                透過遠近關係的經營，可以在有限的席面上營造出景深效果，讓小小的茶席彷彿蘊含著一個廣闊的微觀世界。
                            </p>
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        掌握這五個基本的佈局心法，是進行更複雜、更具個人風格茶席創作的基石。在此基礎之上，我們可以進一步解構構成茶席美感的六大核心要件。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 2. Core Elements */}
            <AcademySection id="zhiya-06-six-elements" title="解構茶席之美：六大核心要件詳解" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="評鑑與創作的專業準則" icon={Box}>
                    <p className="mb-6 leading-relaxed">
                        在掌握了空間佈局的基礎原則後，我們需要從六個更為精細的關鍵維度來審視與構建茶席的整體美學。這六大要件是評鑑一個茶席是否和諧、完整，乃至於創作一個成功茶席時不可或缺的專業準則。它們彼此關聯，共同決定了茶席的最終樣貌與氣質。
                    </p>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border-l-4 border-stone-400 shadow-sm">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">1. 形態 (Form)</h6>
                            <p className="text-stone-700 leading-relaxed">
                                器物的造型是茶席風格的直接體現。主泡器（如茶壺、蓋杯）的線條是渾圓飽滿還是峻峭挺拔，品杯是高聳還是寬淺，都會直接定義茶席的整體調性是古典、現代、柔美或陽剛。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-l-4 border-stone-400 shadow-sm">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">2. 材質 (Material)</h6>
                            <p className="text-stone-700 leading-relaxed">
                                不同材質不僅帶來視覺與觸覺上的差異，更會直接影響茶湯的風味。陶器的質樸與保溫性、瓷器的細膩與顯香性、玻璃的清透與快速散熱，選擇何種材質的主泡器與品杯，應以茶的特性為首要考量，其次才是美學搭配。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">3. 用色 (Color)</h6>
                            <p className="text-stone-700 leading-relaxed">
                                色彩是營造氛圍最直觀的工具。茶席的色彩搭配，從席方的大色塊到器物的點綴色，共同構築了品茶時的心理感受。色彩的選擇可以呼應季節、茶品特性或主題意境，是情感表達的關鍵一環。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-l-4 border-stone-400 shadow-sm">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">4. 比例 (Proportion)</h6>
                            <p className="text-stone-700 leading-relaxed">
                                比例的和諧是視覺舒適感的來源。這包括茶壺與茶杯的容量比例是否恰當（影響分湯的流暢度）、器物與席方的大小比例是否協調，以及所有元素在整體空間中的佔比是否均衡。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-l-4 border-stone-400 shadow-sm">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">5. 佈局 (Layout)</h6>
                            <p className="text-stone-700 leading-relaxed">
                                佈局是整合前述所有元素的總體規劃。它不僅是器物的擺放，更是對高低、前後、疏密、遠近等空間關係的綜合運用，是將形態、材質、用色、比例等要件融合成一個有機整體的最終藍圖。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-l-4 border-stone-300 shadow-sm">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">6. 光度 (Light/Gloss)</h6>
                            <p className="text-stone-700 leading-relaxed">
                                器物的光澤感是常被忽略卻極為重要的細節。一個成功的茶席應避免所有器物都過於光亮刺眼，或全部黯淡無光。透過霧面與亮面的搭配，可以創造出具有哲學性的光影效果，讓茶席在不同光線下呈現豐富的表情。
                            </p>
                        </div>
                    </div>
                    <p className="mt-8 leading-relaxed">
                        這六大原則，雖以現代術語闡述，其精神卻亙古不變。欲理解其力量，我們只需回望歷史，看歷代茶事大家如何在他們的時代中，憑直覺運用這些法則，塑造出定義了各自時代風華的茶會。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 3. History */}
            <AcademySection id="zhiya-06-history" title="時光中的茶席：從唐、宋、明看茶事流變" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="茶席並非當代人的發明" icon={History}>
                    <p className="mb-6 leading-relaxed">
                        它的形式與內涵隨著歷代飲茶文化的演進而不斷變化。這正是文化「藉體發揮」的魅力所在——藉由「喝茶」這一命題，發揮出無窮的創意與深度。從唐代的豪邁奔放到明代的清幽雅致，茶事的場景反映了不同時代的文化精神與生活哲學。
                    </p>
                    <div className="space-y-6 mb-6">
                        <div className="border-l-4 border-emerald-800 pl-4 py-1">
                            <strong className="block text-xl text-stone-900 mb-1">唐代 — 圍繞大鍋的宮廷雅集</strong>
                            <p className="text-stone-700 leading-relaxed">
                                唐代的飲茶方式充滿了質樸與豪邁的氣息。如《宮樂圖》所描繪的場景，宮廷仕女們圍坐大桌，共飲一鍋烹煮而成的茶。茶湯盛於大鍋，再用湯匙分舀至個人茶碗。整個場景融合了音樂、寵物等休閒元素，氣氛熱鬧歡愉，堪稱歷史上最早的「下午茶」形式。
                            </p>
                        </div>
                        <div className="border-l-4 border-emerald-600 pl-4 py-1">
                            <strong className="block text-xl text-stone-900 mb-1">宋代 — 宴會式的文人茶會</strong>
                            <p className="text-stone-700 leading-relaxed">
                                到了宋代，茶事活動變得更為精緻與盛大。如宋徽宗的畫作《文會圖》所示，文人雅士的茶會宛如一場盛宴。長桌上不僅擺滿各式茶具，也陳列著酒器與精緻點心，體現了茶酒共賞的風尚。更值得注意的是，當時的茶會排場講究，有專人負責備茶、點茶，與會者則專注於品飲與交流，盡顯文人雅集的風範。
                            </p>
                        </div>
                        <div className="border-l-4 border-emerald-400 pl-4 py-1">
                            <strong className="block text-xl text-stone-900 mb-1">明代 — 崇尚清幽的私密品茗</strong>
                            <p className="text-stone-700 leading-relaxed">
                                明代文人的審美觀轉向對自然與內心世界的探求，茶事活動也因此從熱鬧的群體宴會轉向清幽的私密品茗。文徵明的《品茶圖》便是最佳寫照。畫中兩三好友，於山林環抱、溪水潺潺的茅屋中對坐品茗，正體現了當時「一人喝茶得神，兩人喝茶得勝，三四人喝茶得趣」的理念。此時的茶具組合已趨於簡潔，有壺有杯，但尚未出現聞香杯——需知聞香杯是遲至1970、80年代後才在台灣出現的茶具。畫的角落裡，還有一位小書僮專司煮水，構成了一幅完整而寧靜的文人理想生活圖景。
                            </p>
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        從群體的熱鬧到個人的清幽，茶事形式的演變反映了不同時代文化精神的遞嬗。這條歷史的長河，為當代茶席設計提供了豐富的滋養與靈感。如今，我們將歷史的智慧加以提煉，發展出一套更為系統化的現代茶席構成框架。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 4. Systematic Framework */}
            <AcademySection id="zhiya-06-framework" title="當代茶席佈置的系統化框架" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="二式、三件、四景、五形、六要" icon={Grid}>
                    <p className="mb-6 leading-relaxed">
                        在了解了茶席豐富的歷史演變之後，我們可以看到，當代茶席設計已逐漸發展出一套更為系統化、條理化的佈局框架。這個框架將複雜的美學概念拆解為清晰的構成元素，幫助初學者快速建立結構概念，也為資深茶人提供了創作的參考座標。以下將此框架歸納為「二式、三件、四景、五形、六要」。
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {/* 2 式 */}
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 text-lg">二式</h6>
                            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Two Layout Styles</p>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li><strong>橫式佈局</strong>：目前最為普遍的形式，器物沿著橫向展開，適合多數長方形桌面。</li>
                                <li><strong>直式佈局</strong>：器物沿著縱深方向排列，呈現前後層次，更具景深感，適合圓桌或空間有限的場景。</li>
                            </ul>
                        </div>
                        {/* 3 件 */}
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 text-lg">三件</h6>
                            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Three Core Pieces</p>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li><strong>主件</strong>：指主泡器、茶盅等核心沖泡器具，是整個茶席的視覺與功能中心。</li>
                                <li><strong>配件</strong>：包括品杯、杯托、茶則、茶倉等輔助性器具。</li>
                                <li><strong>擺件</strong>：如花器、香爐、賞石等裝飾性物件，用以點綴主題、營造意境。</li>
                            </ul>
                        </div>
                        {/* 4 景 */}
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 text-lg">四景</h6>
                            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Four Sceneries</p>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li><strong>前景</strong>：最靠近品茗者的一側，通常佈置品杯、杯托等。</li>
                                <li><strong>主景</strong>：茶席的視覺焦點，通常是主泡器所在的核心區域。</li>
                                <li><strong>側景</strong>：主景兩側的空間，可用於放置潔方、水盂或輔助擺件。</li>
                                <li><strong>背景</strong>：離品茗者最遠的一側，常用於佈置花器或較高的擺件，作為視覺的收尾。</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 text-lg">五形</h6>
                            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Five Layout Tactics</p>
                            <p className="text-sm text-stone-700">
                                五種佈局變化心法：<strong>高低、遠近、疏密、前後、側旁</strong>。它們是實現「四景」空間美感的具體手法。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 text-lg">六要</h6>
                            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Six Aesthetic Elements</p>
                            <p className="text-sm text-stone-700">
                                六大美學核心要件：<strong>形態、材質、用色、比例、佈局、光度</strong>。它們是填充「三件」與「四景」，並賦予茶席靈魂的根本準則。
                            </p>
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        在這個系統化的框架之下，存在著無數種變化與應用的可能性。然而，真正的藝術始於打破規則，下一章節，我們將深入探討超越基本框架、更具創意的佈局技巧與變化。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 5. Advanced Variations */}
            <AcademySection id="zhiya-06-variations" title="茶席佈局的進階變化與創意" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="打破規則的動態藝術" icon={PenTool}>
                    <p className="mb-6 leading-relaxed">
                        茶席佈局遠非一成不變的固定模式，它是一門充滿彈性與創意的動態藝術。在掌握了基本框架後，我們可以嘗試更多進階的佈局方式，例如突破傳統平面的立體佈局，以及針對不同器物的多元陳設變化，從而創造出更具個人風格與視覺衝擊力的茶席。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">立式與劇場感佈局</h5>
                    <p className="mb-4 leading-relaxed">
                        一個極具創新性的案例是2019年茶葉博覽會上出現的「立席」。這種設計將茶席分為上下兩層，泡茶者以站立姿態事茶。若以六大要件分析，此設計在「佈局」上顛覆了平面，創造了垂直向度；在「比例」上拉高了操作者的視覺重心；在「光度」的運用上，則自然地將視覺焦點聚攏在泡茶者的手部動作上。從置茶、注水到分湯，每一個細微的操作都一覽無遺，創造出如同觀賞「掌中戲」般的劇場效果。當時搭配的王俠軍老師作品「簡愛」壺，其無蓋、後方注水的獨特設計，也為這場展演增添了更多話題與美感。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">圓桌與不對稱佈局</h5>
                    <p className="mb-4 leading-relaxed">
                        面對圓桌或其他非典型桌面時，傳統的橫式佈局可能顯得格格不入。此時，前述的「直式佈局」便能派上用場，它只需佔用桌面約三分之一的扇形區域，既能完整呈現茶席，也為其他用途留出充足空間。此外，我們應勇於打破早期學習時強調的「對稱」概念，嘗試「不對稱」設計。不對稱的佈局能帶來一種遊歷性與探索感，讓視覺動線更為生動有趣。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶杯的多元排列</h5>
                    <p className="mb-4 leading-relaxed">
                        即使是常見的十二個茶杯，其排列方式也充滿變化。除了傳統地將其集中於前景，還可以嘗試以下方式：
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li>將其錯開成前後兩道平行線，增加層次感。</li>
                        <li>排列成優美的圓弧狀或扇形，呼應茶壺的圓潤線條。</li>
                        <li>將部分或全部茶杯移至側景。若將杯子置於側邊，則需改變奉茶習慣，以左手持公杯分湯，這也是一種獨特的儀式感呈現。</li>
                    </ul>
                    <p className="leading-relaxed">
                        茶席的創意不僅體現在靜態的佈置上，它更可以是動態與流動的。這一概念，將我們引向了對「行動茶席」的探討。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 6. Mobile & Spiritual */}
            <AcademySection id="zhiya-06-spirit" title="茶席的延伸：流動的風景與精神空間" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="從外在物境到內在心境" icon={Feather}>
                    <p className="mb-6 leading-relaxed">
                        茶席的概念可以不斷延伸，它能從一個固定的室內空間，轉變為可以隨身攜帶、融入自然的「行動茶席」，並最終昇華為一個不受物理環境限制、安頓心神的內心結界。這證明了茶席的本質不在於物質的堆砌，而在於心境的創造。
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <strong className="block text-xl text-stone-900 mb-3 border-b border-stone-200 pb-2">戶外的行動茶席</strong>
                            <p className="text-stone-700 leading-relaxed text-sm">
                                在台灣許多角落，例如霧峰前省議會的後山或九號步道的登山口，我們可以看到一些行動茶攤。這些茶人以極簡的行囊，在人來人往的環境中，從容不迫地為路人泡上一杯好茶。他們的擺設位置極具巧思，通常設在登山客下山處而非上山處，因為人們在疲憊下山後，最需要一杯熱茶來舒緩身心。這種將茶席融入日常風景與人群的實踐，展現了茶事質樸而強大的生命力。
                            </p>
                        </div>
                        <div>
                            <strong className="block text-xl text-stone-900 mb-3 border-b border-stone-200 pb-2">一方天地的精神結界</strong>
                            <p className="text-stone-700 leading-relaxed text-sm">
                                茶席作為精神空間的概念，在一場由美國藝術家發起的行動藝術實驗中得到了極致的詮釋。這位藝術家僅帶著十四根空心棍子，便在世界各地——無論是富士山頂，還是撒哈拉沙漠中——圍塑出一個能讓心神安頓下來的茶空間。他用最簡單的物理形式，創造了一個強大的心理「結界」。最令人莞爾的例子是，他甚至曾將狗群圍在結界內，以此證明只要劃定範圍，一方天地便可成立。這深刻地揭示了茶席的核心是「心」，是從外在的「物境」，走向內在的「情境」與「意境」的昇華過程。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 7. Creating Aesthetics (Section 7 & 8 Combined) */}
            <AcademySection id="zhiya-06-aesthetics" title="意境的創造：茶、景、情、色的交融" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="造境的藝術" icon={Palette}>
                    <p className="mb-6 leading-relaxed">
                        茶席設計的最高境界在於「造境」——即創造出一個能與品茗者產生情感共鳴的意境。中國古典美學有云：「景無情不發，情無景不生」，意指景物若無情感的投射便無法煥發生機，而情感也需依託於具體的景物才能產生。因此，一個成功的茶席，不僅是器物的陳列，更是泡茶者內心情感與審美理想的具象化表達。
                    </p>

                    <h5 className="font-bold text-red-800 mb-4 text-lg">意境的崩壞：梅花茶會的文化錯置</h5>
                    <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-8">
                        <p className="text-red-900 leading-relaxed mb-4">
                            近年來，許多地方舉辦的梅花茶會，在追求形式熱鬧的同時，卻常常上演著文化「錯置」的謬誤，成為一個值得警惕的反面教材。
                        </p>
                        <ul className="list-disc list-inside text-red-800 space-y-2">
                            <li><strong>形式上的荒謬</strong>：有些佈置者竟將梅樹當作聖誕樹來裝飾，「在梅花上面掛東西哦，掛燈籠，掛彩帶」，這種做法完全曲解了梅花孤高冷冽的品格，顯得不倫不類，是「最荒謬的事情」。</li>
                            <li><strong>內涵上的錯置</strong>：更為嚴重的，是在象徵冬日傲骨的梅樹下，擺設菊花、桔梗等不合時宜的花材。菊花有其秋日的隱逸之美，但將其置於梅花之下，便是一種文化上的「錯置」(misplacement)。這種搭配不僅無法相得益彰，反而徹底破壞了梅花獨有的「暗香浮動」、「清冷堅毅」的獨特意境。</li>
                        </ul>
                    </div>

                    <h5 className="font-bold text-emerald-800 mb-4 text-lg">意境的重生：始於「觸景生情」的創作之道</h5>
                    <p className="mb-4 leading-relaxed">
                        要創造出成功的意境，我們可以從「觸景生情」入手，先在內心建立一個清晰的意象，再將其轉化為具體的設計元素。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-4 mb-8">
                        <li><strong>茶湯與風景的聯想</strong>：這是一個極佳的練習。我們可以嘗試將不同茶品的風味，與大自然的景致進行連結。例如，將高山烏龍的清揚、凍頂烏龍的醇厚、鐵觀音的岩韻，分別聯想為天、地、湖、風、火、林等六種自然意象。</li>
                        <li><strong>從意象到創作</strong>：這種聯想並無標準答案，其核心目的在於，當你心中為一款茶定義了一個「意象」（例如：高山烏龍是「天」），你便能輕易地找到與之匹配的元素（如藍、白色調，輕盈的材質）來佈置茶席。這種方法能讓你的設計超越單純的功能性，展現出獨特的創意與理想。曾有學生跳脫框架，以「星座」的特質來詮釋不同茶品，並成功發展出個人品牌，這證明了創意思維的無限可能性。</li>
                    </ul>

                    <h5 className="font-bold text-amber-800 mb-4 text-lg">色彩的語言：茶席用色的哲學與實踐</h5>
                    <p className="mb-4 leading-relaxed">
                        色彩在茶席設計中扮演著至關重要的角色。本章將從四季流轉、古典詩詞到現代設計，系統性地探討茶席的用色策略。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h6 className="font-bold text-stone-800 mb-2">從四季流轉中尋找靈感</h6>
                            <ul className="text-sm text-stone-700 space-y-2">
                                <li><strong>春天 (白配綠)</strong>：新生與活力，清新明快。</li>
                                <li><strong>夏天 (黃、紅)</strong>：高明度色彩，呼應燦爛陽光與生命力。</li>
                                <li><strong>秋天 (銀加金)</strong>：金風蕭瑟與豐收華麗的結合。</li>
                                <li><strong>冬天 (黑與銀)</strong>：冷冽、靜謐與沉思的氛圍。</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold text-stone-800 mb-2">從古典詩詞與現代設計中提煉</h6>
                            <ul className="text-sm text-stone-700 space-y-2">
                                <li><strong>鄭板橋</strong>：「茅屋一間，新篁一徑，雪白紙窗」— 咖啡、綠、白。</li>
                                <li><strong>蘇東坡</strong>：「最是橙黃橘綠時」— 秋末初冬的斑斕。</li>
                                <li><strong>現代設計</strong>：如新台幣紙鈔的「漸層」與「疊色」，創造和諧層次。</li>
                                <li><strong>對比與補色</strong>：大面積單色搭配小面積補色，提升活力。</li>
                            </ul>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Conclusion */}
            <AcademySection id="zhiya-06-conclusion" title="結語" label="ACADEMY · ZHIYA · CH06">
                <AcademyContentBlock title="從技藝到心境的完整修煉" icon={Sun}>
                    <p className="leading-relaxed">
                        茶席設計是一門從技藝到心境的完整修煉。它始於對佈局、形態、材質等「物境」的掌握，進而透過用色與造景來營造「情境」，最終構築出一個能表達個人情感與審美，專屬於自己的「品的氣場」。願每一位愛茶之人，都能在這方寸之間，通過不斷的探索與實踐，實現內心的探索與長進。
                    </p>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}

// MapCheck icon for continuity if needed, though not used in this specific file's layout yet.
// Keeping it clean.
