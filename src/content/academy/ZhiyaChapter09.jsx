import React from 'react';
import {
    ScrollText,
    Leaf,
    Thermometer,
    Wind,
    Droplet,
    History,
    Feather,
    Coffee,
    BookOpen,
    Eye,
    CloudRain,
    Mountain,
    Utensils,
    CheckCircle
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function ZhiyaChapter09() {
    return (
        <div className="space-y-12">
            {/* 1. Review */}
            <AcademySection id="zhiya-09-review" title="進階茶道技法精要回顧" label="ACADEMY · ZHIYA · CH09">
                <AcademyContentBlock title="深化基礎，拓展視野" icon={History}>
                    <p className="mb-6 leading-relaxed">
                        「質雅」進階學程的設計初衷，在於深化基礎茶學的底蘊，引領學員探索更為細膩、精準的泡茶技法。當我們面對品質上僅有微小差異的茶葉時，這些進階的技法與心法，便成為能否淋漓盡致地展現茶湯精髓的關鍵。在本堂課即將深入中國茶的世界，並學習全新的沖泡方式之前，讓我們先回顧學程中已精熟的各項技法。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        這些技藝不僅是操作層面的提升，更是品鑑思維的拓展，它們構成了一套完整而靈活的工具，使事茶人能游刃有餘地應對各種茶性：
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Droplet className="mr-2" size={18} /> 沖泡手法
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                從「平置法」進階至「懸空注查法」。後者不僅視覺優美，更能透過控制水流高度與力道，精準激發香氣與滋味。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Thermometer className="mr-2" size={18} /> 風味修飾
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                針對茶葉微小瑕疵：
                                <span className="block mt-1 pl-2 border-l-2 border-stone-300">
                                    <strong>蒸法</strong>：利用餘溫去除後氧化糖味/雜味。<br />
                                    <strong>燙法</strong>：加入少量熱水修飾火味或焦味。
                                </span>
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Wind className="mr-2" size={18} /> 理茶與注水
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                <strong>理茶</strong>：五行、三行、平行佈局。<br />
                                <strong>注水</strong>：細柱、重柱、單點、環狀，藉水流形態調整茶湯質地。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Eye className="mr-2" size={18} /> 茶席美學
                            </h6>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                從六杯佈局演化至設計感強烈的「雙杯」佈局，並運用協調色與對比色，打造視覺和諧與個人風格。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 2. Outlook & Xiao Man */}
            <AcademySection id="zhiya-09-outlook" title="課程展望與「小滿」節氣哲思" label="ACADEMY · ZHIYA · CH09">
                <AcademyContentBlock title="有小滿而無大滿" icon={ScrollText}>
                    <p className="mb-6 leading-relaxed">
                        本次課程不僅是技藝的深化，更是茶品視野的宏觀拓展，我們將正式從台灣茶走向中國茶的品鑑。與此同時，學程後期的「茶會」規劃也提上日程，這引領我們思考一個富有文化意涵的主題——「小滿」。
                    </p>
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 mb-4">
                        <strong className="block text-amber-900 text-lg mb-3">二十四節氣的獨特哲理</strong>
                        <p className="text-amber-800 leading-relaxed mb-4">
                            觀察二十四節氣，冬季有「小雪」與「大雪」，「小寒」與「大寒」，但唯獨在夏季，只見「小滿」，卻聽聞「大滿」。
                        </p>
                        <p className="text-amber-800 leading-relaxed">
                            這「有小滿而無大滿」蘊含深刻哲理：「人只有小滿，不能大滿，一旦大滿則易招損。」月滿則虧，水滿則溢。這提醒我們追求恰到好處的滿足，常懷謙遜，持盈保泰。
                        </p>
                    </div>
                    <p className="leading-relaxed">
                        以「小滿」為結業茶會主題，不僅因時節契合（5月21日小滿），更象徵不驕不躁、恰如其分的生命態度，引導我們在品茶的靜定中，體會淡然自足的喜悅。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 3. Poetry */}
            <AcademySection id="zhiya-09-poetry" title="春茶的詩意：從孔子到蘇東坡的文化映照" label="ACADEMY · ZHIYA · CH09">
                <AcademyContentBlock title="與歷史、文化及哲思的深刻對話" icon={BookOpen}>
                    <p className="mb-8 leading-relaxed">
                        品茶不僅是感官之旅。本章節透過《論語》與蘇東坡詩詞，探討春日品飲綠茶背後的灑脫意境。
                    </p>

                    <div className="space-y-8">
                        {/* Confucius */}
                        <div className="border-l-4 border-stone-300 pl-6 py-2">
                            <h5 className="font-bold text-stone-900 text-xl mb-3">《論語》：暮春之樂</h5>
                            <p className="text-stone-700 italic mb-3">
                                「暮春者，春服既成，冠者五六人，童子六七人，浴乎沂，風乎舞雩，詠而歸。」
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                孔子感嘆「吾與點也！」，揭示了對自然、活潑、無拘無束生命狀態的嚮往。這也呼應了「學雅文質」中「文質彬彬」的理念——內外兼修，方為君子。
                            </p>
                        </div>

                        {/* Su Dongpo 1 */}
                        <div className="border-l-4 border-emerald-400 pl-6 py-2">
                            <h5 className="font-bold text-stone-900 text-xl mb-3">《定風波》：也無風雨也無晴</h5>
                            <p className="text-stone-700 italic mb-3">
                                「竹杖芒鞋輕勝馬，誰怕？一蓑煙雨任平生。... 回首向來蕭瑟處，歸去，也無風雨也無晴。」
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed mb-2">
                                詞中傳達了歷經波折後的淡然豁達。人生如喝過三碗水：冷水、汗水、淚水，方能體會此深意。
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                <strong className="text-emerald-700">茶之映照：</strong>西湖龍井初入口清雅平淡，飲後卻彌漫悠長深遠的「太和之氣」，淡然中有深味。
                            </p>
                        </div>

                        {/* Su Dongpo 2 */}
                        <div className="border-l-4 border-emerald-600 pl-6 py-2">
                            <h5 className="font-bold text-stone-900 text-xl mb-3">《念奴嬌·赤壁懷古》：人生如夢</h5>
                            <p className="text-stone-700 italic mb-3">
                                「人生如夢，一尊還酹江月。」
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed mb-2">
                                面對壯闊赤壁與個人失意，蘇東坡將情緒放至谷底又自我超脫。
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                <strong className="text-emerald-700">茶之映照：</strong>如同品茶過程，從紛繁滋味與思緒中，尋得片刻的寧靜與安頓。
                            </p>
                        </div>

                        {/* Su Dongpo 3 */}
                        <div className="border-l-4 border-emerald-800 pl-6 py-2">
                            <h5 className="font-bold text-stone-900 text-xl mb-3">《飲湖上初晴後雨》：淡妝濃抹總相宜</h5>
                            <p className="text-stone-700 italic mb-3">
                                「欲把西湖比西子，淡妝濃抹總相宜。」
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed mb-2">
                                古人云西湖「晴不如雨，雨不如夜，夜不如雪」，各有神韻。
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                <strong className="text-emerald-700">茶之映照：</strong>龍井茶濃飲得栗香醇厚，淡飲賞鮮爽甘甜，無分高下，皆是美好。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 4. Green Tea Tasting */}
            <AcademySection id="zhiya-09-tasting" title="春日綠茶品鑑：跨越地域的風味對話" label="ACADEMY · ZHIYA · CH09">
                <AcademyContentBlock title="品種、工藝與風土的交響" icon={Leaf}>
                    <p className="mb-6 leading-relaxed">
                        本次品鑑會透過品飲亞洲不同代表性產區的綠茶，理解風味光譜。（註：因新茶未市，本次使用上一年度春茶，品質依然典型。）
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">江南綠茶與台灣淵源</h5>
                    <p className="mb-4 leading-relaxed">
                        「江南三大名茶」——西湖龍井、太湖碧螺春、黃山毛峰，為綠茶翹楚。台灣碧螺春則源於1949年後，江浙人士在三峽以「青心柑仔」品種仿製家鄉味，形成獨特風土特色。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">綠茶核心工藝：殺青</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-stone-50 p-3 rounded text-center">
                            <strong className="block text-stone-900 mb-1">炒青</strong>
                            <span className="text-xs text-stone-600">鍋中翻炒 (龍井, 碧螺春)</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded text-center">
                            <strong className="block text-stone-900 mb-1">烘青</strong>
                            <span className="text-xs text-stone-600">熱風烘乾 (留白毫)</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded text-center">
                            <strong className="block text-stone-900 mb-1">蒸青</strong>
                            <span className="text-xs text-stone-600">高溫蒸汽 (日本玉露)</span>
                        </div>
                        <div className="bg-stone-50 p-3 rounded text-center">
                            <strong className="block text-stone-900 mb-1">曬青</strong>
                            <span className="text-xs text-stone-600">陽光曝曬 (乾燥)</span>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">五款茶風味特徵</h5>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 shrink-0">台灣</span>
                            <div>
                                <strong className="text-stone-900">三峽碧螺春</strong>
                                <p className="text-sm text-stone-700">青心柑仔品種，標誌性豆香與菁草氣息，滋味鮮爽。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 shrink-0">江蘇</span>
                            <div>
                                <strong className="text-stone-900">太湖碧螺春</strong>
                                <p className="text-sm text-stone-700">芽葉細嫩，白毫滿披，獨特「豪香」，香氣口感細緻。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 shrink-0">杭州</span>
                            <div>
                                <strong className="text-stone-900">西湖龍井</strong>
                                <p className="text-sm text-stone-700">精湛炒青，扁平光滑，「栗子香」，滋味甘醇，底蘊悠長。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 shrink-0">日本</span>
                            <div>
                                <strong className="text-stone-900">玉露</strong>
                                <p className="text-sm text-stone-700">蒸青工藝，翠綠湯色，「海苔」般氣息，富含茶胺酸之「鮮甜」(Umami)。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-stone-100 text-stone-800 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 shrink-0">大吉嶺</span>
                            <div>
                                <strong className="text-stone-900">莊園春摘茶</strong>
                                <p className="text-sm text-stone-700">雖歸類紅茶但發酵極低(約20%)，似綠茶。喜馬拉雅山冷風造就「白葡萄果韻」。</p>
                            </div>
                        </li>
                    </ul>
                </AcademyContentBlock>
            </AcademySection>

            {/* 5. Philosophy */}
            <AcademySection id="zhiya-09-mindset" title="綠茶的品飲心法：從無味之味到一槍二旗" label="ACADEMY · ZHIYA · CH09">
                <AcademyContentBlock title="無味之味，乃至味也" icon={Feather}>
                    <p className="mb-6 leading-relaxed">
                        欣賞綠茶，需放下對濃烈滋味的追求，轉而體會韻味的悠長。
                    </p>
                    <div className="bg-stone-50 border-l-4 border-stone-500 p-6 rounded-r-lg mb-8">
                        <p className="italic text-stone-800 mb-2">
                            「真甘香而不洌，啜之淡似無味，飲過之後，覺有一種太和之氣，彌於齒頰之間，此無味之味，乃至味也。」
                        </p>
                        <span className="block text-right text-sm text-stone-600">— 茶聖 陸羽</span>
                    </div>
                    <p className="mb-6 leading-relaxed">
                        綠茶精髓不在入口衝擊，而在飲後的「回甘」與「太和之氣」。這份「無味之味」是內斂深遠的美感，體會其中奧妙是品茶修心的真諦。
                    </p>

                    <AcademyHighlightBox type="tip">
                        <strong className="block text-stone-900 mb-2">行話小百科：一槍二旗</strong>
                        <p className="text-stone-800 text-sm">
                            杭州人形容茶葉形態不說「一心二葉」，而說：
                            <br />
                            <strong>槍</strong>：未展開的茶芽，挺直如槍。
                            <br />
                            <strong>旗</strong>：舒展開的葉片，宛如旗幟。
                            <br />
                            點茶時說出「一槍二旗」，便是深諳此道的行家。
                        </p>
                    </AcademyHighlightBox>
                </AcademyContentBlock>
            </AcademySection>

            {/* 6. Practical */}
            <AcademySection id="zhiya-09-practice" title="實作技法：茶碗以匙分茶的雅緻與專注" label="ACADEMY · ZHIYA · CH09">
                <AcademyContentBlock title="器皿的美學與事茶的儀式感" icon={Utensils}>
                    <p className="mb-6 leading-relaxed">
                        本堂課重點實作「茶碗以匙分茶」。此法適合沖泡細嫩的西湖龍井，敞口茶碗助散熱，避免高溫燙傷茶葉，展現鮮爽甘甜。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">前世今生</h5>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>前世</strong>：務實的「碗公試茶法」，茶農為快速評鑑毛茶的質樸方法。</li>
                        <li><strong>今生</strong>：融入器物美學與儀式感，昇華為優雅的茶藝展演。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">關鍵要領</h5>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-500 mr-3 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">投茶法</strong>
                                <p className="text-sm text-stone-700">常採用「上投法」（先水後茶），水溫約85-90°C。亦可「下投法」但需降溫。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-500 mr-3 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">溫控技巧</strong>
                                <p className="text-sm text-stone-700">「沿碗壁注水」或「讓水流過湯匙」，藉金屬表面降溫並減緩衝擊。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-emerald-500 mr-3 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">分茶心法 (無公道杯)</strong>
                                <p className="text-sm text-stone-700">
                                    核心挑戰。需極度專注，來回分湯（第一輪由內而外，第二輪由外而內），確保濃度均勻。
                                </p>
                            </div>
                        </li>
                    </ul>

                    <p className="mt-6 leading-relaxed text-stone-900 italic">
                        總結而言，「茶碗以匙分茶」是心性的修煉。捨棄公道杯的便利，邀請我們放下依賴，培養耐心與細膩手感。在一匙一匙中，讓浮躁沉澱，回歸純粹感官，品味「無味之味」。
                    </p>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
