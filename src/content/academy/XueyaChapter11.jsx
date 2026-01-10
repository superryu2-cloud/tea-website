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
            </AcademySection>
        </div>
    );
}
