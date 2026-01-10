import React from 'react';
import {
    PenTool,
    Coffee,
    Scroll,
    User,
    Feather,
    Box,
    Droplet,
    Leaf,
    Thermometer,
    Compass,
    Hand,
    Map
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function XueyaChapter08() {
    return (
        <div className="space-y-12">

            {/* 1.0 Philosophy of Utensils */}
            <AcademySection id="xueya-08-philosophy" title="器物之上：茶道具的人文精神與哲思" label="ACADEMY · XUEYA · CH08">
                <AcademyContentBlock title="從實用工具到精神象徵">
                    <p className="mb-6 leading-relaxed">
                        在華人茶文化的深厚底蘊中，茶道具的角色遠遠超越了其基礎的實用功能。它們不僅是泡茶的輔助，更是儒家思想、個人品格與道德修養的具象化象徵。每一件器物的設計、材質與使用儀軌，都承載著茶人對世界的觀照與內心的省思。本章節將深入探討，這些器物如何從「形而下」的實體，昇華為承載「形而上」之道的媒介，成為茶人修心養性的重要夥伴。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">歷史脈絡中的器物人格化</h5>
                    <p className="mb-6 leading-relaxed">
                        自古以來，茶人便有將器物賦予人格特質的傳統，使其不僅是無生命的工具，而是能與人進行精神對話的良伴。
                    </p>

                    <div className="space-y-6">
                        <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Scroll className="mr-2" size={18} />
                                唐宋茶人的哲學觀
                            </h6>
                            <p className="text-stone-700 text-sm leading-relaxed mb-4">
                                唐宋茶人懷有強烈的社會責任感與道德自覺，將茶道具「人格化」不僅是詩意想像，更是投射儒家價值觀的修行法門。
                            </p>
                            <ul className="list-disc list-inside text-stone-700 text-sm space-y-2">
                                <li>
                                    <strong>唐代陸羽《茶經》</strong>：將爐耳設計為「正耳」，比喻「做人要正直不阿」的品格要求。
                                </li>
                                <li>
                                    <strong>宋代審安老人《十二傳》</strong>：將點茶十二道具以官職命名（如茶匙為「木待制」、茶托為「漆祕閣」），建立井然有序的微型朝廷。
                                </li>
                            </ul>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center">
                                <Compass className="mr-2" size={18} />
                                東西方文化對比
                            </h6>
                            <p className="text-stone-700 text-sm leading-relaxed mb-4">
                                相較於西方文化傾向將事物「神格化」，東方文化更傾向於將器物視為修心的媒介與人格的延伸（道友）。
                            </p>
                            <div className="border-l-4 border-stone-400 pl-4 py-2 italic text-stone-600 bg-white">
                                「形而上者謂之道，形而下者謂之器。」——《易經》
                            </div>
                            <p className="text-stone-700 text-sm leading-relaxed mt-4">
                                器物（形而下）是通往精神之道（形而上）的橋樑。茶人透過互動，進行關乎內在修為的實踐。
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 text-stone-600 text-sm italic">
                        綜上所述，茶道具是人格、審美與道德修養的延伸。其中，「茶則」以獨特歷史與意涵，成為最具代表性的器物之一。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 2.0 Tea Scoop (Cha Ze) Logic */}
            <AcademySection id="xueya-08-chaze" title="茶則詳解：從歷史源流到當代美學" label="ACADEMY · XUEYA · CH08">
                <AcademyContentBlock title="茶則的誕生與核心精神" icon={PenTool}>
                    <p className="mb-6 leading-relaxed">
                        茶則不僅是量取茶葉工具，更反映歷代審美與人文思想。從唐代實用主義到當代藝術收藏，承載跨越千年的文化敘事。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">陸羽《茶經》中的茶則</h5>
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 mb-6">
                        <strong className="block text-amber-900 mb-2 text-xl font-serif">「則者，量也，度也，懷也。」</strong>
                        <p className="text-amber-800 text-sm leading-relaxed">
                            陸羽的經典定義概括了三重功能：
                            <br /><strong>量</strong>：計量功能。
                            <br /><strong>度</strong>：標準與法度。
                            <br /><strong>懷</strong>：懷抱與容納（人文精神的彈性）。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h6 className="font-bold text-stone-900 mb-2">唐代的材質美學</h6>
                            <p className="text-sm text-stone-700 mb-2">多元富有野趣的「混搭美學」：</p>
                            <ul className="list-disc list-inside text-sm text-stone-700 ml-2">
                                <li>貝殼（海蠣、蛤、蚌）</li>
                                <li>紅斐（紅紋竹木）</li>
                                <li>竹、木</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold text-stone-900 mb-2">標準與人文彈性</h6>
                            <p className="text-sm text-stone-700 mb-2">煮水一升約用一方寸匕（10g）茶末，但陸羽補充：</p>
                            <p className="text-sm text-stone-900 font-bold italic">「若好薄者減之，嗜濃者增之。」</p>
                            <p className="text-xs text-stone-600 mt-1">尊重個體差異，非機械化統一。</p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">當代茶則的材質與氣質</h5>
                    <p className="mb-4 text-stone-700">「材質會決定氣質，顏色會決定氣象。」</p>
                    <ul className="grid grid-cols-2 gap-4 mb-8">
                        <li className="bg-stone-50 p-3 rounded"><strong className="text-stone-900">竹製</strong>：常見、輕盈、價格平實。帶有「文氣」，契合茶之清雅。</li>
                        <li className="bg-stone-50 p-3 rounded"><strong className="text-stone-900">木質</strong>：沉穩、溫潤，帶神祕氣質。</li>
                        <li className="bg-stone-50 p-3 rounded"><strong className="text-stone-900">壓克力</strong>：輕盈通透，現代感，適合夏日清涼氛圍。</li>
                        <li className="bg-stone-50 p-3 rounded"><strong className="text-stone-900">金屬</strong>：冷靜俐落，工業風時尚感。</li>
                        <li className="bg-stone-50 p-3 rounded"><strong className="text-stone-900">陶瓷</strong>：多變，古典或現代，溫潤質地。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶則的結構與命名</h5>
                    <p className="mb-4 text-sm text-stone-700">約十四年前，翁明川老師倡導建立系統性命名（八大結構）：</p>
                    <div className="bg-stone-100 p-5 rounded-lg mb-8 text-sm text-stone-800 space-y-2">
                        <p><strong>1. 表容</strong>：竹子光滑外表面。</p>
                        <p><strong>2. 里腹</strong>：內側盛放茶葉凹陷處。</p>
                        <p><strong>3. 端止</strong>：後端檔板。防滑落。寓意「行爲端正」、「適可而止」（儒家修養）。</p>
                        <p><strong>4. 納吻</strong>：前端置茶唇口。寓意「吻合」（貼合壺口）或「穩定」。</p>
                        <p><strong>5. 則首</strong>：端止後方持拿部位。</p>
                        <p><strong>6-7. 左翼、右翼</strong>：兩側邊緣。</p>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶則作為藝術收藏品</h5>
                    <div className="space-y-4">
                        <div className="border-l-4 border-stone-300 pl-4">
                            <strong className="block text-stone-900">風格對比：茶則 vs 茶荷</strong>
                            <p className="text-sm text-stone-700">茶則具「儀式感」，展現莊重之美；茶荷造型「優游」自在，具親和力。</p>
                        </div>
                        <div className="border-l-4 border-stone-500 pl-4">
                            <strong className="block text-stone-900">藝術價值</strong>
                            <p className="text-sm text-stone-700">如翁明川老師作品，融入建築雕塑感（美是視覺的款待）。曾被LV選入百萬茶具箱（方竹呼應Monogram）。</p>
                        </div>
                        <div className="border-l-4 border-stone-700 pl-4">
                            <strong className="block text-stone-900">癖好與真情</strong>
                            <p className="text-sm text-stone-700">張岱：「癖」是真性情的體現。收藏茶則即收藏時光與心境。</p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 3.0 Rituals & Methods */}
            <AcademySection id="xueya-08-ritual" title="置茶儀軌：茶則的使用方法與禮儀" label="ACADEMY · XUEYA · CH08">
                <AcademyContentBlock title="從心法到手法" icon={Hand}>
                    <p className="mb-6 leading-relaxed">
                        沉穩置茶是無聲修行。從佈局、取茶、置茶到歸位，引導讀者掌握優雅手法。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶則的佈局與哲理</h5>
                    <AcademyHighlightBox type="tip">
                        <strong className="block text-stone-900 mb-1">基本原則：「則在內，禮在外」</strong>
                        <p className="text-stone-800 text-sm">
                            佈局概念。茶則置於右側後方（內）。<br />
                            <strong>則（內心原則）</strong>確立，<strong>禮（外在理路）</strong>方能通達順暢。
                        </p>
                    </AcademyHighlightBox>
                    <p className="mt-4 mb-4 text-sm text-stone-700">
                        <strong>流派多樣性</strong>：如同冰箱放左放右，皆由主人決定。面對質疑，以更高層次圓融重塑對話（不落入話頭）。初學者先守「橫平豎直」。
                    </p>
                    <p className="mb-6 text-sm text-stone-700">
                        <strong>則置的角色</strong>：如筷架。增添儀式感、方便拿取、提升立體感。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">平置法操作步驟詳解</h5>
                    <ol className="list-decimal list-inside text-stone-700 space-y-2 mb-6 text-sm">
                        <li><strong>持則</strong>：右手四指併攏持中段，移至中央打橫。</li>
                        <li><strong>翻轉</strong>：右手單手由下往上輕柔翻轉，裡腹朝上。</li>
                        <li><strong>承接</strong>：左手托納吻，右手滑至則手。</li>
                        <li><strong>平置</strong>：雙手協同平穩置於桌。</li>
                        <li><strong>取茶</strong>：開茶倉，右手持茶匙（茶鍋）以輕柔力道將茶「度」入茶則。</li>
                        <li><strong>歸則</strong>：右手持左右翼後側（避汗水接觸），歸位。</li>
                    </ol>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">賞茶與置茶的禮儀及技巧</h5>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <strong className="block text-stone-900 mb-2">賞茶禮儀 (賓客)</strong>
                            <ul className="text-sm text-stone-700">
                                <li><strong>眼觀手勿動</strong>：勿觸摸。</li>
                                <li><strong>聞香有道</strong>：吐氣轉頭，避氣息影響。</li>
                                <li><strong>移則說話</strong>：勿對茶葉說話。</li>
                                <li><strong>謙恭承接</strong>：從下方承接。</li>
                            </ul>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <strong className="block text-stone-900 mb-2">置茶儀式感 (主人)</strong>
                            <p className="text-sm text-stone-700 mb-2">
                                透過緩慢專注儀軌「莊嚴這一席茶」。紐約林肯中心案例：西方攝影師聚焦的最具東方儀式感畫面。
                            </p>
                            <p className="text-sm text-stone-700">
                                <strong>核心心法</strong>：<span className="font-bold text-stone-800">溫質祝奉</span>（以溫和質地獻上祝福）。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">歸位的手法與心法</h5>
                    <p className="mb-4 text-sm text-stone-700">
                        茶撥歸位後，雙手持則向<strong>逆時針（左）</strong>打橫，左手掌心貼表龍，翻轉時手指「含住」兩翼，安穩歸位。
                    </p>
                    <p className="mb-6 text-sm text-stone-700 italic">
                        「潤」：手掌溫度油脂與器物接觸產生的光澤。人與器物情感連結的見證（久用則潤，而成記憶）。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 4.0 Wenshan Pouchong */}
            <AcademySection id="xueya-08-wenshan" title="風味探索：文山包種茶的品鑑與沖泡" label="ACADEMY · XUEYA · CH08">
                <AcademyContentBlock title="清揚雅致的少女之姿" icon={Leaf}>
                    <p className="mb-6 leading-relaxed italic text-stone-800 font-serif text-center">
                        「不風不雨正清和，翠竹亭亭好節柯。」
                    </p>
                    <p className="mb-6 leading-relaxed">
                        鄭板橋詩句描繪出文山包種茶「清和、雅致、亭亭玉立」的意境。如清麗脫俗的「荳蔻少女」，氣質秀氣，帶幽蘭之香。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">文山包種茶的產區與特色</h5>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                            <Map className="text-stone-400 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">產區定義</strong>
                                <p className="text-sm text-stone-700">「大文山茶區」（新店、坪林、石碇、深坑、汐止）。坪林為最主要代表。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Leaf className="text-stone-400 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">外觀與風味</strong>
                                <p className="text-sm text-stone-700">自然彎曲條索狀，墨綠色。標誌性「蘭香」（清香型）。甘醇滑順，甜淡秀氣。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Box className="text-stone-400 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">主要品種</strong>
                                <p className="text-sm text-stone-700">主流為「青心烏龍」（正統觀念）。亦有「翠玉」等。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Droplet className="text-stone-400 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">「清茶」之名</strong>
                                <p className="text-sm text-stone-700">帶三點水，區別於烏龍茶分類的「青茶」。</p>
                            </div>
                        </li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">「包種」之名的由來</h5>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-stone-50 p-4 rounded border border-stone-100">
                            <strong className="block text-stone-900 mb-1">正史說法</strong>
                            <p className="text-sm text-stone-700">早期用兩張方形毛邊紙內外相襯，包裹成四方體，故名「包種」。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded border border-stone-100">
                            <strong className="block text-stone-900 mb-1">坊間外傳</strong>
                            <p className="text-sm text-stone-700">仿福建安溪「色種」，因字跡潦草將「色」誤看成「包」。</p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">沖泡要領與技巧</h5>
                    <p className="mb-4 text-sm text-stone-700">香氣清雅，滋味細膩。</p>
                    <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100 mb-6">
                        <div className="grid grid-cols-2 gap-4 text-sm text-emerald-900">
                            <p><strong>• 器具</strong>：寬口蓋碗（利散熱散香）。</p>
                            <p><strong>• 置茶量</strong>：1/3 - 1/2。</p>
                            <p><strong>• 水溫</strong>：90°C (細膩) - 95°C (高香，需縮短時間)。</p>
                            <p><strong>• 溫潤泡</strong>：不需要（質地乾淨）。</p>
                            <p className="col-span-2"><strong>• 時間</strong>：第一泡約1分，二泡50秒，後續加10秒。</p>
                            <p className="col-span-2 font-bold text-emerald-700 mt-2">
                                <Thermometer className="inline mr-1" size={16} />
                                關鍵提醒：出湯後立即蓋蓋，防熱氣循環帶走細膩香氣。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">品飲心得與文化對比</h5>
                    <div className="space-y-4 text-sm text-stone-700">
                        <p>
                            <strong>風味比較</strong>：文山包種（部分發酵，花香）vs 碧螺春（不發酵，豆香）。
                        </p>
                        <p>
                            <strong>多元觀點</strong>：
                            <br />有評價「茶雖有小華，但乏深味」（深度不足）；亦有回應「關卿底事」（捍衛自由）。
                            <br />台中茶人戲稱「高山茶的第三泡」（形容清淡）。
                        </p>
                        <p className="font-bold text-stone-900 mt-2">
                            結論：價值在於獨一無二的清揚、秀雅與脫俗蘭花香韻。品飲如欣賞氣質少女，需靜謐心境。
                        </p>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

        </div>
    );
}
