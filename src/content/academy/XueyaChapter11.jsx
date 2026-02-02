import React from 'react';
import {
    Globe,
    Leaf,
    Ship,
    Map,
    Microscope,
    List,
    Coffee,
    Droplets,
    Thermometer,
    Clock,
    AlertCircle,
    Anchor,
    Search,
    BookOpen,
    Feather,
    Award
} from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function XueyaChapter11() {
    return (
        <div className="space-y-12">
            {/* Section 2: Decoding - Small vs Big Leaf */}
            <AcademySection id="xueya-11-decoding" title="解碼紅茶的語言：品種、外觀與分級" label="ACADEMY · XUEYA · CH11">
                <AcademyContentBlock title="品種比較：小葉種 vs. 大葉種" icon={Microscope}>
                    <p className="mb-6 leading-relaxed">
                        要品懂紅茶，理解「品種」的根本差異與辨識茶葉的「外觀」分級，是進入紅茶世界的兩把鑰匙，直接決定了沖泡方式與最終的風味呈現。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Small Leaf */}
                        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                            <h6 className="font-bold text-emerald-900 text-lg mb-4 flex items-center gap-2">
                                <Leaf size={20} /> 小葉種 (Small Leaf)
                            </h6>
                            <div className="space-y-4">
                                <div>
                                    <strong className="block text-emerald-800 text-sm mb-1 uppercase tracking-wide">Taste Profile</strong>
                                    <p className="text-stone-700">風味通常被形容為「甜甜順順」，口感柔和、軟滑。</p>
                                </div>
                            </div>
                        </div>

                        {/* Big Leaf */}
                        <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                            <h6 className="font-bold text-red-900 text-lg mb-4 flex items-center gap-2">
                                <Leaf size={24} /> 大葉種 (Big Leaf)
                            </h6>
                            <div className="space-y-4">
                                <div>
                                    <strong className="block text-red-800 text-sm mb-1 uppercase tracking-wide">Taste Profile</strong>
                                    <p className="text-stone-700">風味顯得「強勁」、「刺激」，帶有明顯的「收斂感」，口感飽滿而富有張力。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h5 className="font-bold text-stone-900 mb-3 text-lg">科學區分與外觀侷限</h5>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            <strong>科學區分</strong>：根本差異在於葉片內部的細胞結構。大葉種的海綿組織比例遠高於柵狀組織 (約為2~3倍)，而小葉種兩者比例約為1:1。海綿組織因其圓形結構，能容納更多內含物質，這也是大葉種滋味更濃郁強勁的科學原因。
                        </p>
                        <AcademyHighlightBox className="bg-stone-50 border-stone-200">
                            <strong className="block text-stone-900 mb-1">外觀判斷的侷限</strong>
                            <p className="text-stone-600 leading-relaxed text-sm">
                                單純依靠葉片大小判斷並不靠譜。誠如講師所言：「大葉有小時候，小葉有長大。」採摘時的嫩芽（大葉種的小時候）可能比成熟的葉片（小葉種的長大後）看起來更小。因此，品種判定仍需依內在組織結構與風味特性為準。
                            </p>
                        </AcademyHighlightBox>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">國際紅茶外觀分級系統</h5>
                    <p className="mb-4 text-stone-700 leading-relaxed">
                        在國際貿易中，紅茶有一套基於外觀完整度的分級系統，通常以字母縮寫標示。一般來說，字母越多，代表等級越高。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                        <div className="bg-white p-3 border border-stone-200 rounded shadow-sm">
                            <strong className="text-red-800 block mb-1">FOP</strong>
                            <span className="text-xs text-stone-500 block mb-1">Flowery Orange Pekoe</span>
                            <p className="text-xs text-stone-600">完整葉基礎等級。F(Flowery)指含靠近芽尖嫩葉。</p>
                        </div>
                        <div className="bg-white p-3 border border-stone-200 rounded shadow-sm">
                            <strong className="text-red-800 block mb-1">B</strong>
                            <span className="text-xs text-stone-500 block mb-1">Broken (碎葉)</span>
                            <p className="text-xs text-stone-600">切碎或壓碎，呈碎葉狀。</p>
                        </div>
                        <div className="bg-white p-3 border border-stone-200 rounded shadow-sm">
                            <strong className="text-red-800 block mb-1">CTC</strong>
                            <span className="text-xs text-stone-500 block mb-1">Crush, Tear, Curl</span>
                            <p className="text-xs text-stone-600">壓碎撕裂捲曲，呈細小顆粒狀。</p>
                        </div>
                        <div className="bg-white p-3 border border-stone-200 rounded shadow-sm">
                            <strong className="text-red-800 block mb-1">T</strong>
                            <span className="text-xs text-stone-500 block mb-1">Tippy</span>
                            <p className="text-xs text-stone-600">含較多芽尖。</p>
                        </div>
                        <div className="bg-white p-3 border border-stone-200 rounded shadow-sm">
                            <strong className="text-red-800 block mb-1">G</strong>
                            <span className="text-xs text-stone-500 block mb-1">Golden</span>
                            <p className="text-xs text-stone-600">芽尖呈金黃色澤。</p>
                        </div>
                        <div className="bg-white p-3 border border-stone-200 rounded shadow-sm">
                            <strong className="text-red-800 block mb-1">S</strong>
                            <span className="text-xs text-stone-500 block mb-1">Super/Special</span>
                            <p className="text-xs text-stone-600">等級特別高或品質出眾。</p>
                        </div>
                    </div>
                    <div className="text-center text-sm text-stone-500 italic bg-stone-50 py-2 rounded">
                        例：「SFTGFOP」即表示等級極高的、帶有金色芽尖的完整葉片紅茶。
                    </div>
                </AcademyContentBlock>

                <AcademyContentBlock title="紅茶品種學：大葉種與小葉種的植物學分析" icon={Microscope}>
                    <p className="mb-6 leading-relaxed text-stone-700">
                        區分大小葉種的科學依據並非僅靠葉片外觀，而在於組織學的構造比例。
                    </p>
                    <ul className="space-y-3 text-stone-700 leading-relaxed">
                        <li><strong className="text-stone-900">組織學數據：</strong> 大葉種的「海綿組織」比例極高（約 2:1 或 3:1），而小葉種則接近 1:1。由於「海綿組織」是儲存茶葉內容物（溶質）的主要空間，這解釋了為何大葉種茶湯具有更強的「強勁度」與內容物。</li>
                        <li><strong className="text-stone-900">計算公式：</strong> 專業判斷指標為「葉長 × 葉寬 × 0.7 係數」，數值大於 60 則歸類為大葉種。</li>
                    </ul>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">紅玉（18 號）</h6>
                            <p className="text-sm text-stone-700">具備強烈的肉桂與薄荷香。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">阿薩姆</h6>
                            <p className="text-sm text-stone-700">顯著的木質香氣。</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2">紅韻（21 號）</h6>
                            <p className="text-sm text-stone-700">細微且優雅的柑橘香。</p>
                        </div>
                    </div>
                    <AcademyHighlightBox className="bg-stone-50 border-stone-200 mt-6">
                        <strong className="block text-stone-900 mb-1">冷後渾（Cream Down）</strong>
                        <p className="text-stone-600 leading-relaxed text-sm">
                            高品質紅茶在冷卻後，茶多酚與咖啡因結合會產生「呈色乳狀的沉澱」，稱為「冷後渾」。這並非缺陷，而是內容物豐富的優質標記，只需加入熱水即可還原清澈。
                        </p>
                    </AcademyHighlightBox>
                </AcademyContentBlock>

                <AcademyContentBlock title="國際貿易標準與分級術語" icon={BookOpen}>
                    <p className="mb-6 leading-relaxed text-stone-700">
                        理解國際外銷市場的分級縮寫，是掌握紅茶價值層級的關鍵。
                    </p>
                    <div className="space-y-4">
                        <div className="rounded-xl border border-stone-200 bg-white p-4">
                            <h6 className="font-bold text-stone-900 mb-2">品質等級層級（以芽尖含量為準）</h6>
                            <ul className="space-y-2 text-stone-700">
                                <li><strong>SFTGOP：</strong> Super Finely Tippy Golden Flowery Orange Pekoe，代表最高等級，含大量金黃芽尖。</li>
                                <li><strong>FOP：</strong> Flowery Orange Pekoe，完整的原片茶葉。</li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                            <h6 className="font-bold text-stone-900 mb-2">產品形態區分</h6>
                            <ul className="space-y-2 text-stone-700">
                                <li><strong>B (Broken)：</strong> 碎型茶，萃取速度快。</li>
                                <li><strong>CTC (Crush, Tear, Curl)：</strong> 透過碾碎、撕裂、捲曲製成的顆粒狀茶，常見於大宗商用或奶茶基底。</li>
                            </ul>
                        </div>
                        <AcademyHighlightBox className="bg-stone-50 border-stone-200">
                            <strong className="block text-stone-900 mb-1">絲襪奶茶軼事</strong>
                            <p className="text-stone-600 leading-relaxed text-sm">
                                香港著名的絲襪奶茶，最初便是為了過濾 BOP 或 CTC 等級的細碎葉屑，而偶然發展出的文化特徵。
                            </p>
                        </AcademyHighlightBox>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Intro: History */}
            <AcademySection id="xueya-11-intro" title="紅茶的世界版圖：從貿易逆差到全球飲品" label="ACADEMY · XUEYA · CH11">
                <AcademyContentBlock title="歷史：貿易、政治與戰爭的宏大敘事" icon={Globe}>
                    <p className="mb-6 leading-relaxed">
                        要真正理解紅茶，就必須回溯其在全球擴張的歷史。這段歷史不僅僅是植物的傳播，更是一部交織著貿易、政治、甚至戰爭的宏大敘事。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        故事始於大英帝國對中國茶葉的巨大需求。17至18世紀，英國人對茶的依賴導致了嚴重的貿易逆差，白銀大量流向中國。為扭轉此一劣勢，英國採取了兩大策略：向中國走私鴉片，並試圖在自己的殖民地建立茶葉生產基地。這段由茶葉引發的貿易失衡，最終成為鴉片戰爭的導火線之一。
                    </p>

                    <div className="space-y-8 mt-8 border-l-2 border-stone-100 pl-6 relative">
                        {/* 1. Robert Fortune */}
                        <div className="relative">
                            <span className="absolute -left-[35px] top-0 bg-stone-100 text-stone-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                            <h5 className="font-bold text-stone-900 mb-2 flex items-center">
                                茶盜：羅伯特·福鈞 (Robert Fortune)
                            </h5>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                在此背景下，一位名為羅伯特·福鈞的英國植物學家，被賦予了一項秘密任務。他偽裝成漢人，深入中國福建與安徽等地，成功將小葉種紅茶的茶樹植株與種子偷運至英國殖民下的印度大吉嶺地區種植。
                            </p>
                            <AcademyHighlightBox className="bg-stone-50 border-stone-200 text-sm">
                                <strong className="block text-stone-900 mb-1">華德箱 (Wardian case)</strong>
                                <p className="text-stone-600">
                                    福鈞的成功部分歸功於當時一項名為「華德箱」的發明，這是一種能讓植物在長途海運中存活的微型溫室。福鈞的行為使他被後世稱為「茶盜」，卻也徹底改變了世界茶葉的版圖。
                                </p>
                            </AcademyHighlightBox>
                        </div>

                        {/* 2. Assam Discovery */}
                        <div className="relative">
                            <span className="absolute -left-[35px] top-0 bg-stone-100 text-stone-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                            <h5 className="font-bold text-stone-900 mb-2">阿薩姆發現原生種</h5>
                            <p className="text-stone-700 leading-relaxed">
                                與此同時，英國人在印度東北部的阿薩姆（Assam）地區，發現了當地原生的大葉種茶樹。這兩個源頭——源自中國的小葉種與印度原生的大葉種——共同構建了印度紅茶產業的基礎。
                            </p>
                        </div>

                        {/* 3. Taiwan */}
                        <div className="relative">
                            <span className="absolute -left-[35px] top-0 bg-stone-100 text-stone-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                            <h5 className="font-bold text-stone-900 mb-2">台灣加入版圖 (1925)</h5>
                            <p className="text-stone-700 leading-relaxed mb-2">
                                台灣則在日治時期的1925年捲入這股浪潮。日本農業專家為強化台灣紅茶的風味勁道，意識到需引進大葉種。
                            </p>
                            <p className="text-stone-700 leading-relaxed bg-stone-50 p-3 rounded">
                                據說他們前往印度阿薩姆，巧妙地將茶籽藏於挖空的拐杖中，成功帶回台灣。經試種後，發現南投魚池地區的氣候土壤最為合適，自此魚池成為台灣大葉種紅茶發展重鎮。
                            </p>
                        </div>
                    </div>

                    <p className="mt-8 leading-relaxed text-stone-600 italic">
                        從中國、印度到台灣，茶樹的遷徙之旅不僅是植物學的演變，更是歷史的縮影。而這些來自不同地域的茶樹，也形成了紅茶分類學上的重要基礎。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 3: 8 Representative Teas */}
            <AcademySection id="xueya-11-varieties" title="紅茶風味巡禮：從溫潤到強勁" label="ACADEMY · XUEYA · CH11">
                <AcademyContentBlock title="八款代表性茶品解析" icon={List}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-stone-200 hover:border-emerald-300 transition-colors">
                            <h6 className="font-bold text-stone-900 mb-1">1. 梨山小葉紅茶</h6>
                            <p className="text-sm text-stone-600">
                                <strong>Lishan Small-Leaf</strong> | 小葉種代表。口感平順軟滑，滋味甘甜，展現高山茶特有的細緻與柔和。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200 hover:border-red-300 transition-colors">
                            <h6 className="font-bold text-stone-900 mb-1">2. 紅玉 (台茶18號)</h6>
                            <p className="text-sm text-stone-600">
                                <strong>Ruby</strong> | 台灣最具代表性的大葉種。以標誌性的「肉桂跟薄荷」香氣聞名，風格強烈獨特。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200 hover:border-red-300 transition-colors">
                            <h6 className="font-bold text-stone-900 mb-1">3. 阿薩姆 (Assam)</h6>
                            <p className="text-sm text-stone-600">
                                經典大葉種。最顯著特徵是濃郁的「木質香」，口感醇厚。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200 hover:border-red-300 transition-colors">
                            <h6 className="font-bold text-stone-900 mb-1">4. 紅韻 (台茶21號)</h6>
                            <p className="text-sm text-stone-600">
                                <strong>Hong Yun</strong> | 台灣培育的新品種大葉種。帶有明亮「柑橘香」，增添一抹清新氣息。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200 hover:border-stone-400 transition-colors">
                            <h6 className="font-bold text-stone-900 mb-1">5. 碎形紅茶 (Broken-Leaf)</h6>
                            <p className="text-sm text-stone-600">
                                如「仙女紅茶」。由斯里蘭卡與台灣阿薩姆調配。適合做檸檬紅茶。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200 hover:border-stone-400 transition-colors">
                            <h6 className="font-bold text-stone-900 mb-1">6. 印度阿薩姆CTC</h6>
                            <p className="text-sm text-stone-600">
                                顆粒狀，CTC工藝特色。茶湯釋出迅速，滋味濃厚。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200 hover:border-emerald-300 transition-colors">
                            <h6 className="font-bold text-stone-900 mb-1">7. 阿里山球形紅茶</h6>
                            <p className="text-sm text-stone-600">
                                製程創新。將紅茶以烏龍茶常見的球形工藝製作。
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200 hover:border-amber-300 transition-colors">
                            <h6 className="font-bold text-stone-900 mb-1">8. 大吉嶺春摘 (First Flush)</h6>
                            <p className="text-sm text-stone-600">
                                湯色極淺，顛覆印象。因春季氣候冷氧化度僅約35-40%。依製程仍歸類依紅茶。
                            </p>
                        </div>
                    </div>
                    <p className="mt-8 text-stone-600 text-sm leading-relaxed text-center italic">
                        這場品鑑會充分證明了紅茶並非只有一種面貌。體驗過豐富的風味後，重點便是如何透過正確沖泡，將潛力發揮極致。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            <AcademySection id="xueya-11-aesthetics" title="茶湯美學與紅茶品評之道" label="ACADEMY · XUEYA · CH11">
                <AcademyContentBlock title="緒論：紅茶生產工藝與發酵美學" icon={Feather}>
                    <p className="mb-6 leading-relaxed">
                        在世界茶文化的宏大版圖中，紅茶作為「全發酵茶」的代表，其核心美學在於溫和的茶性與深邃的層次感。這種溫和特徵並非全然天成，而是透過精密的工藝形塑：藉由機械長時間的揉捻（約半小時至兩小時），對茶葉細胞進行「受控的破壞」，使細胞內的內容物徹底釋出，並在後續的氧化（發酵）過程中轉化為茶紅質與茶黃質。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        揉捻時間的長短直接決定了茶湯的刺激性與厚度。通常而言，揉捻越徹底、氧化越充分，茶性便越趨溫和。然而，不同品系的感官表現截然不同：小葉種紅茶追求的是花香與甜順；而大葉種紅茶則因內含物較為強勁，展現出極具張力的紅酒感。這也解釋了西方下午茶與佐餐文化的起源——正是為了平衡大葉種紅茶強勁的生物鹼（如咖啡鹼）特性，才發展出搭配點心以緩衝強勁滋味的飲用習慣。
                    </p>
                </AcademyContentBlock>

                <AcademyContentBlock title="專業品評標準：紅茶的外觀審查與保鮮機制" icon={Search}>
                    <p className="mb-6 leading-relaxed">
                        在專業茶葉評鑑中，視覺審查是判斷工藝良莠的第一道門檻。紅茶在國際貿易中被稱為「Black Tea」，其高品質的標準在於色澤的深度與光度的鮮活。
                    </p>
                    <ul className="space-y-3 text-stone-700 leading-relaxed">
                        <li>
                            <strong className="text-stone-900">色澤與黑紫光：</strong> 理想的紅茶乾茶應呈現「紅到紫」的色調，專業術語稱為「黑紫光」，即在烏黑中透著紫紅的亮感。
                        </li>
                        <li>
                            <strong className="text-stone-900">保鮮度與氣流測光：</strong> 茶葉的保鮮度與其光澤息息相關。茶質會隨著光照產生劣化，導致色澤暗沈。專業評鑑甚至會使用「氣流測光儀」來檢測茶光，這與皮膚保養的邏輯相通——保存得當且製作精良的茶葉，其光度與鮮度自然較高。
                        </li>
                    </ul>
                    <AcademyHighlightBox className="bg-stone-50 border-stone-200 mt-6">
                        <strong className="block text-stone-900 mb-1">互動觀察</strong>
                        <p className="text-stone-600 leading-relaxed text-sm">
                            品評現場中，專家會帶領學員觀察茶樣的飽滿度與色澤的一致性，透過視覺與觸覺的互動，初步判定該批次茶葉的品質潛力與陳放狀態。
                        </p>
                    </AcademyHighlightBox>
                </AcademyContentBlock>

                <AcademyContentBlock title="紅茶的國際分級與全球歷史脈絡" icon={Ship}>
                    <p className="mb-6 leading-relaxed">
                        紅茶的全球推廣史，是一部融合了地緣政治、植物學競爭與貿易逆差的傳奇。
                    </p>
                    <div className="space-y-4">
                        <div className="rounded-xl border border-stone-200 bg-white p-4">
                            <h6 className="font-bold text-stone-900 mb-2">植物獵人與「茶盜」</h6>
                            <p className="text-stone-700 leading-relaxed">
                                19 世紀，英國為解決對中國貿易的巨額逆差及鴉片戰爭引發的動盪，急於在殖民地培植茶葉。英國派遣植物學家福鈞博士（Robert Fortune）冒充漢人潛入安徽與福建。他成功竊取了小種紅茶品種，並藉由奈及利亞·巴格肖·華德設計的關鍵技術——「華德箱」（Wardian Case），讓茶苗得以在長途航行中存活並運抵印度。福鈞因此在歷史上被冠以「茶盜」之名。
                            </p>
                        </div>
                        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                            <h6 className="font-bold text-stone-900 mb-2">地理分佈與品種演變</h6>
                            <ul className="space-y-2 text-stone-700">
                                <li><strong>大吉嶺（Darjeeling）：</strong> 位於喜馬拉雅山脈附近，種植的正是福鈞帶回的小葉種，以優雅的花香與麝香葡萄韻著稱。</li>
                                <li><strong>阿薩姆（Assam）：</strong> 位於印度南方，為印度原生的「大葉種」。</li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-stone-200 bg-white p-4">
                            <h6 className="font-bold text-stone-900 mb-2">台灣紅寶石的興起</h6>
                            <p className="text-stone-700 leading-relaxed">
                                台灣紅茶歷史轉折點始於 1925 年。當時為解決台灣紅茶滋味不夠強勁的弱點，農業專家前往印度阿薩姆引進品種。相傳當時團隊使用「空心拐杖」夾帶茶籽回台，於南投魚池鄉試種成功。1999 年（民國 88 年），結合台灣原生山茶與緬甸大葉種培育而成的「台茶 18 號」（紅玉），憑藉其獨特的香氣，正式奠定了台灣大葉種紅茶的國際地位。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                <AcademyContentBlock title="滋味的深度與張力：大葉種紅茶的品鑑標準" icon={Coffee}>
                    <p className="mb-6 leading-relaxed">
                        定義高品質大葉種紅茶的感官體驗時，專業評鑑更強調「收斂感」與「飽滿度」，而非單純的順口。
                    </p>
                    <ul className="space-y-3 text-stone-700 leading-relaxed">
                        <li>
                            <strong className="text-stone-900">感官差異：</strong> 小葉種茶湯傾向甜、順、柔；大葉種紅茶則應具備紅酒般的張力。所謂「收斂感」，是指茶湯入口後與口腔黏膜接觸產生的微澀感隨後轉為生津的過程。
                        </li>
                        <li>
                            <strong className="text-stone-900">國際評鑑比例：</strong> 在專業賽場上，為測試茶湯在極限釋放下的表現，統一採用「學自英國」的國際標準比例——1:50（3公克茶葉對 150ml 水，浸泡 5-6 分鐘）。此標準能徹底檢驗茶湯的層次感與是否有苦澀而不化的缺點，這與日常生活的飲用參數有顯著區別。
                        </li>
                    </ul>
                </AcademyContentBlock>

                <AcademyContentBlock title="茶葉賽事評鑑流程：主審與副審的精密協作" icon={Award}>
                    <p className="mb-6 leading-relaxed">
                        專業茶葉比賽（如烏龍茶、東方美人、紅茶）的評鑑過程極其嚴謹，主副審之間需達成精密的共識。
                    </p>
                    <ul className="space-y-3 text-stone-700 leading-relaxed">
                        <li><strong className="text-stone-900">三關考核：</strong> 依序為「審查外觀」、「聞香」與「啜吸茶湯」。</li>
                        <li><strong className="text-stone-900">感官維護：</strong> 評審通常在茶湯降溫至 50-60 度時進行聞香與啜吸，此溫度區間能確保香氣分子穩定釋放，同時避免高溫灼傷嗅覺與味覺細胞。</li>
                        <li><strong className="text-stone-900">主副審協作機制：</strong> 主審先行審查，若認為茶樣優異，會將茶杯移至特定位置表示晉級。副審隨後進行覆核與討論，但需尊重主審的初步篩選權。</li>
                        <li><strong className="text-stone-900">視覺輔助技巧：</strong> 評審常以順時針攪拌茶湯，利用離心力讓細微碎屑集中於杯底中心，藉此觀察茶湯的清澈度、金黃色圈（Golden Ring）以及茶湯呈色的鮮艷度。</li>
                    </ul>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 4: Brewing */}
            <AcademySection id="xueya-11-brewing" title="紅茶沖泡心法：掌握關鍵變因" label="ACADEMY · XUEYA · CH11">
                <AcademyContentBlock title="因種而異的三大變因" icon={Thermometer}>
                    <p className="mb-6 leading-relaxed">
                        優質的茶葉需要精準的沖泡技巧才能釋放其最佳風味。尤其中與大葉種差異顯著，參數大相逕庭。
                    </p>

                    <div className="overflow-x-auto mb-8 bg-white rounded-lg border border-stone-200 shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase">
                                <tr>
                                    <th className="p-4 font-bold">變因 (Variable)</th>
                                    <th className="p-4 font-bold text-emerald-800">小葉種</th>
                                    <th className="p-4 font-bold text-red-800">大葉種</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                <tr>
                                    <td className="p-4 font-bold text-stone-900">茶葉量 (Quantity)</td>
                                    <td className="p-4 text-stone-600">
                                        <strong>稍多 (1/2 - 1/3)</strong><br />
                                        <span className="text-xs text-stone-400">若不加糖奶，以能均勻「鋪底」為原則</span>
                                    </td>
                                    <td className="p-4 text-stone-600">
                                        <strong>需減少 (1/3 - 1/4)</strong><br />
                                        <span className="text-xs text-stone-400">滋味強勁濃郁，量不宜多</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-stone-900">水溫 (Water Temp)</td>
                                    <td className="p-4 text-stone-600">寬容度較高，可稍高</td>
                                    <td className="p-4 text-stone-600"><strong>80-90°C (略降溫)</strong><br /><span className="text-xs text-stone-400">避免澀味過度釋出</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-stone-900">時間 (Time)</td>
                                    <td className="p-4 text-stone-600">
                                        <strong>第一泡約 50 秒</strong><br />
                                        <span className="text-xs text-stone-400">充分展現甜潤</span>
                                    </td>
                                    <td className="p-4 text-stone-600">
                                        <strong>第一泡約 40 秒</strong><br />
                                        <span className="text-xs text-stone-400">避免苦澀</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                                <AlertCircle size={16} /> 溫潤泡 (洗茶)?
                            </h6>
                            <p className="text-sm text-stone-700">
                                <strong>不建議</strong>。紅茶經過揉捻，精華物質多附著於表面，第一泡茶湯極為珍貴，洗掉相當可惜。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                                <Droplets size={16} /> 注水技巧
                            </h6>
                            <p className="text-sm text-stone-700">
                                建議<strong>「沿著杯壁注水」</strong>，讓水流緩緩漫過茶葉，而非強力衝擊。這有助於降低收斂感，使內含物質釋放更平順溫和。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                <AcademyContentBlock title="紅茶沖泡工藝實踐：溫度的精控與注水藝術" icon={Droplets}>
                    <p className="mb-6 leading-relaxed">
                        紅茶沖泡的核心在於如何引發其香氣並平衡其強度。
                    </p>
                    <ul className="space-y-3 text-stone-700 leading-relaxed">
                        <li><strong className="text-stone-900">不需溫潤泡：</strong> 由於紅茶製作過程中經過重揉捻，細胞已破壞，精華皆在表面。若進行溫潤泡，首沖最精華的內容物將被流失，故不建議洗茶。</li>
                        <li><strong className="text-stone-900">日常沖泡參數：</strong> 小葉種：1:25 比例，使用 90-95°C 高溫，激發花果甜香。大葉種：1:30 比例，建議降溫至 80-90°C，以柔化其強勁的收斂感。</li>
                        <li><strong className="text-stone-900">注水藝術：</strong> 應沿著杯壁細注，避免水柱直接衝擊葉面，透過「環狀細注」來柔化注水的弧度。</li>
                        <li><strong className="text-stone-900">視覺傳達：</strong> 借鑒國際品牌 TWG 試茶師的手法，強調出湯時的優美「拋物線」（Parabolic Curve），這種流暢的儀式感能顯著提升品茗的美學體驗。</li>
                    </ul>
                </AcademyContentBlock>
            </AcademySection>
</div>
    );
}
