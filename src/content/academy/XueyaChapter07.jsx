import React from 'react';
import {
    Leaf,
    History,
    Filter,
    Eye,
    Wind,
    Droplets,
    Package,
    Truck,
    Box,
    Settings,
    Coffee,
    BookOpen,
    MousePointer,
    CheckCircle,
    PlayCircle,
    Quote,
    Thermometer,
    Zap,
    Map
} from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function XueyaChapter07() {
    return (
        <div className="space-y-12">
            {/* Intro: Essence of Tea */}
            <AcademySection id="xueya-07-intro" title="茶的本質：從一片樹葉到詩與遠方" label="ACADEMY · XUEYA · CH07">
                <AcademyContentBlock title="一片樹葉的傳奇" icon={Leaf}>
                    <p className="mb-6 leading-relaxed">
                        茶，作為一種飲品，早已超越其解渴的基本功能，成為承載千年歷史與深厚哲思的文化產物。理解茶，必須回歸其最根本的形態——一片來自茶樹的葉子。正是這片看似平凡的葉子，在人類文明的長河中，激盪出無數傳奇、詩歌與對遠方的嚮往。本課程將引領我們從這片葉子的「原形」出發，探索其加工、演變的歷程，並深入實踐一種經典的沖泡方法，從而真正理解台灣特色茶的精髓。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2">茶葉的「原形」與加工</h5>
                    <p className="mb-6 leading-relaxed text-stone-700">
                        當代健康飲食強調攝取「原形食物」，意指未經深度加工、保留其原始樣貌的食材。若將此概念應用於茶，茶葉的「原形」便是一片完整的葉子。然而，我們今日所品飲的茶，無論是球形、條形或片狀，皆已遠離其最初的形態。這一切的轉變，源於一系列精密的加工工序。
                    </p>
                    <p className="mb-8 leading-relaxed text-stone-700">
                        一片葉子從茶樹上被採摘後，需經歷發酵、烘焙、乾燥及整形等關鍵步驟，才能成為我們熟悉的商品。這些工序不僅改變了茶葉的物理形態，更賦予其截然不同的香氣、滋味與色澤，使其從單純的植物組織，蛻變為值得細細品味的工藝品。
                    </p>

                    <AcademyHighlightBox className="bg-stone-50 border-stone-200 italic mb-8">
                        <div className="flex flex-col items-center text-center">
                            <Quote size={24} className="text-stone-400 mb-2" />
                            <p className="text-stone-800 font-medium text-lg mb-4">
                                「一片樹葉落到水裡，改變了水的顏色，從此有了傳奇，有了詩與遠方。」
                            </p>
                            <div className="text-left text-sm text-stone-600 space-y-2 max-w-lg mx-auto">
                                <p>• <span className="font-bold text-stone-700">改變水的顏色</span>：象徵著茶為平淡的日常注入了新的內涵與層次。</p>
                                <p>• <span className="font-bold text-stone-700">有了傳奇</span>：代表茶的發現與傳播過程中，交織著無數引人入勝的故事。</p>
                                <p>• <span className="font-bold text-stone-700">有了詩與遠方</span>：揭示了茶在精神層面的昇華。「詩」象徵著人類文明中的美學追求與藝術表達；「遠方」則代表著人們透過茶所寄託的浪漫憧憬與人生哲理。</p>
                            </div>
                        </div>
                    </AcademyHighlightBox>

                    <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2">從神話到信史：茶的時空脈絡</h5>
                    <p className="mb-4 text-stone-700">茶的歷史悠遠，其發展脈絡可追溯至上古時代，並大致可劃分為三個階段：</p>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                            <div className="font-bold text-stone-900 mb-1 text-lg">神話 (Myth)</div>
                            <div className="text-xs text-stone-500 mb-2">約五千年前</div>
                            <p className="text-sm text-stone-600 leading-relaxed">從「神農嚐百草，日遇七十二毒，得茶而解之」的故事開始，茶以神話的形式進入人類的敘事。</p>
                        </div>
                        <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                            <div className="font-bold text-stone-900 mb-1 text-lg">傳說 (Legend)</div>
                            <div className="text-xs text-stone-500 mb-2">介於神話與信史之間</div>
                            <p className="text-sm text-stone-600 leading-relaxed">茶的功效與故事在民間流傳，充滿傳奇色彩。</p>
                        </div>
                        <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                            <div className="font-bold text-stone-900 mb-1 text-lg">歷史 (History)</div>
                            <div className="text-xs text-stone-500 mb-2">唐代 (約一千三百年前)</div>
                            <p className="text-sm text-stone-600 leading-relaxed">隨著陸羽《茶經》的問世，茶文化被系統性地建立起來，正式進入有文字記載的信史時期。</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                <AcademyContentBlock title="因茶置器：器物選擇的核心法則" icon={Filter}>
                    <p className="mb-6 leading-relaxed">
                        「因茶置器」是所有習茶者必須掌握的核心法則。其意涵是，我們應根據茶葉的特性來選擇最適合的沖泡器具。茶葉的加工方式千變萬化，從發酵程度到最終的外觀整形，每一個環節都會影響其風味表現，從而直接決定了我們該用何種器物，才能將其特色發揮得淋漓盡致。這不僅是技術問題，更是對茶葉本質的理解與尊重。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-3">茶葉分類的基礎：六大茶系與外觀整形</h5>
                    <p className="mb-4 text-stone-700">茶葉最基礎的分類方式是依據「發酵程度」的不同，劃分為六大茶系：</p>
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {['綠茶 (不發酵)', '白茶 (微發酵)', '黃茶 (輕發酵)', '青茶 (半發酵)', '紅茶 (全發酵)', '黑茶 (後發酵)'].map((t, i) => (
                            <span key={i} className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-800 font-medium">{t}</span>
                        ))}
                    </div>
                    <p className="mb-8 text-stone-700 leading-relaxed">
                        在這些發酵工藝的基礎上，製茶師會進行「整形」，創造出如條形、球形、半球形、片狀等截然不同的外觀，這些外形不僅影響美觀，也直接關係到沖泡時的技巧與器具選擇。
                    </p>

                    <div className="border-t border-stone-100 pt-6">
                        <h5 className="font-bold text-stone-900 mb-4">品鑑入門三標準</h5>
                        <p className="mb-4 text-stone-700">對於初學者而言，掌握三項最直觀、最基礎的判斷標準，是快速建立品鑑能力的捷徑：</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                                <Eye size={32} className="text-emerald-600 mb-3" />
                                <div className="font-bold text-stone-800 text-lg mb-1">外形</div>
                                <p className="text-sm text-stone-600">透過視覺，直接辨識茶葉是球形、條形，或是其他特殊形狀。</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                                <Wind size={32} className="text-emerald-600 mb-3" />
                                <div className="font-bold text-stone-800 text-lg mb-1">香形</div>
                                <p className="text-sm text-stone-600">透過嗅聞，分辨茶葉的香氣屬於清香、焙香還是濃香。</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors">
                                <Droplets size={32} className="text-emerald-600 mb-3" />
                                <div className="font-bold text-stone-800 text-lg mb-1">味形</div>
                                <p className="text-sm text-stone-600">透過品飲，感受茶湯的滋味是偏向清爽，還是趨於濃厚。</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                <AcademyContentBlock title="泡茶的邏輯：從茶葉特性到器物材質" icon={Settings}>
                    <p className="mb-6 leading-relaxed">
                        茶葉的特性與沖泡器具的選擇之間，存在著緊密的邏輯關聯。以台灣茶為例，文山包種茶與木柵鐵觀音雖然同屬烏龍茶，但風味迥異：
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
                            <h6 className="font-bold text-emerald-900 mb-2">文山包種茶</h6>
                            <p className="text-emerald-800 text-sm leading-relaxed">
                                發酵程度較輕，未經烘焙，風味清揚，屬於「清」的類型。適合散熱較快的瓷器來保留其鮮爽。
                            </p>
                        </div>
                        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                            <h6 className="font-bold text-amber-900 mb-2">鐵觀音</h6>
                            <p className="text-amber-800 text-sm leading-relaxed">
                                發酵程度偏中，且經過重度烘焙，風味醇厚，屬於「厚」的類型。適合保溫性較好的陶器來激發其沉穩的韻味。
                            </p>
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        總結來說，茶葉的物理形態（外形）與化學本質（香形、味形），是決定沖泡工具演進的關鍵。台灣茶從傳統條形到現代球形的轉變，正是這一邏輯的最佳體現。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 2: Shape Evolution */}
            <AcademySection id="xueya-07-shape" title="茶形流變：從條形到球形的台灣茶演進史" label="ACADEMY · XUEYA · CH07">
                <AcademyContentBlock title="美麗的錯誤與工藝的進化" icon={History}>
                    <p className="mb-6 leading-relaxed">
                        要深入理解台灣茶，就必須了解其茶葉塑形工藝的歷史演變。在東方，欣賞茶葉沖泡後舒展的「外形」是一種核心美學，然而在西方世界，茶葉的樣貌卻長期被忽略。這背後源於二十世紀初的一場「美麗的錯誤」：一位美國茶商為方便寄送樣品，偶然將碎紅茶裝入棉布小袋中，客戶收到後誤將整袋浸入熱水，意外發現其便利性——茶包就此誕生。從此，西方飲茶文化的主流變成看不見茶葉原貌的模式。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        相對於茶包的隱藏美學，台灣茶的演變史則是一部追求極致外形的工藝進化史。台灣茶從傳統的條形，逐步演變為今日主流的球形，並非偶然。這場變革的背後，是商業需求、儲運考量以及競賽文化所共同驅動的結果。
                    </p>
                </AcademyContentBlock>

                <AcademyContentBlock title="條形轉變為球形的三大務實原因" icon={Truck}>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <Truck size={32} className="mb-3 text-stone-600" />
                            <h6 className="font-bold text-stone-900 mb-2">運輸 (Transportation)</h6>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                球形茶葉結構緊實，體積較小，在運輸過程中不易碎裂，能更好地保持茶葉完整性。
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <Package size={32} className="mb-3 text-stone-600" />
                            <h6 className="font-bold text-stone-900 mb-2">儲存 (Storage)</h6>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                與空氣的接觸面積減小，使得球形茶氧化速度較慢，更耐久存，不易變質。
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <Box size={32} className="mb-3 text-stone-600" />
                            <h6 className="font-bold text-stone-900 mb-2">包裝 (Packaging)</h6>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                在相同重量下，球形茶所佔的空間遠小於蓬鬆的條形茶，包裝更具空間效益，也降低了倉儲成本。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2">關鍵轉捩點與競賽文化</h5>
                    <div className="space-y-4">
                        <div className="border-l-4 border-stone-400 pl-4 py-2">
                            <strong className="block text-stone-800 mb-1">民國60年代 (1970s)：整形機的發明</strong>
                            <p className="text-sm text-stone-700">
                                茶形革命的轉捩點。隨著整形機普及，茶葉團揉成球狀的工藝得以大規模應用。這也是鑑別老茶的歷史依據：若有民國60年之前的球形烏龍老茶，極可能不符史實。
                            </p>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-4 py-2">
                            <strong className="block text-stone-800 mb-1">民國64年 (1975)：分級包裝競賽</strong>
                            <p className="text-sm text-stone-700">
                                台灣開始舉辦烏龍茶分級包裝競賽，外觀的均一度與美觀性成為評分標準。為了在比賽中脫穎而出，茶形從早期的「蝦米形」演變為愈加緊結圓潤的完美球形。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 3: Gaiwan */}
            <AcademySection id="xueya-07-gaiwan" title="蓋杯 (蓋碗) 專論：歷史、文化與鑑賞" label="ACADEMY · XUEYA · CH07">
                <AcademyContentBlock title="歷史演進：從「碗」到「杯」" icon={History}>
                    <p className="mb-6 leading-relaxed">
                        蓋杯的故事完美印證了「歷史的演進，是器物形態最根本的驅動力」。它不僅是一種工具，更承載了特定時代的美學風格與文化意涵。尤其對於注重香氣、形態完整的條形茶而言，蓋杯更是不可或缺的選擇。
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h5 className="font-bold text-stone-900 mb-3">清代美學與起源</h5>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">
                                蓋碗形制確立於清代，源於滿族飲食文化中對「碗」的偏好，結合中原飲茶文化後加蓋而成。清代瓷器風格華麗鮮俏，這源於滿族過往在草原上的遊牧生活——廣袤大地中，鮮豔色彩（明黃、寶藍、艷紅）便於辨識，這種審美偏好深刻影響了宮廷器物風格。
                            </p>
                            <h5 className="font-bold text-stone-900 mb-3">文化意涵</h5>
                            <ul className="text-sm text-stone-700 space-y-2 list-disc list-inside">
                                <li><strong>《紅樓夢》</strong>：喝茶場景出現三十餘次，幾乎都使用蓋碗，足見其普及。</li>
                                <li><strong>古籍《南園》</strong>：「客至，月下汲水，烹茶... 覆以蓋，啟蓋視之，碧花浮動。」描繪了當時「茶水不分離」、「個人品飲」的傳統方式。</li>
                            </ul>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h5 className="font-bold text-stone-900 mb-3">現代功能的轉變</h5>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">
                                隨著時代變遷，蓋碗從一人一份的「個人飲具」，演變為服務多人的「主泡器」。
                            </p>
                            <div className="flex items-center gap-4 text-sm mt-4">
                                <div className="text-center flex-1">
                                    <div className="font-bold text-stone-400 mb-1">過去</div>
                                    <div className="p-3 bg-white border border-stone-200 rounded">
                                        <div className="font-bold text-stone-800">圓口淺身</div>
                                        <div className="text-xs text-stone-500">個人獨享</div>
                                    </div>
                                </div>
                                <div className="text-stone-300">➜</div>
                                <div className="text-center flex-1">
                                    <div className="font-bold text-emerald-600 mb-1">現代</div>
                                    <div className="p-3 bg-white border border-emerald-200 rounded shadow-sm">
                                        <div className="font-bold text-stone-800">器身拉高</div>
                                        <div className="text-xs text-stone-500">容量增加 (更像杯)</div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-stone-500 mt-4 leading-relaxed">
                                為了能一次沖泡出分配給多人的茶湯，器形不得不變得更深、更直，因此今日我們稱之為「蓋杯」。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                <AcademyContentBlock title="實用指南：挑選與操作" icon={MousePointer}>
                    <h5 className="font-bold text-stone-900 mb-4">挑選五大關鍵細節</h5>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                        <div className="p-3 border border-stone-200 rounded text-center">
                            <strong className="block text-stone-800 mb-1 text-sm">1. 蓋鈕</strong>
                            <p className="text-xs text-stone-600">中空/凹槽便於單指抵住；高1.5cm防燙。</p>
                        </div>
                        <div className="p-3 border border-stone-200 rounded text-center">
                            <strong className="block text-stone-800 mb-1 text-sm">2. 杯口</strong>
                            <p className="text-xs text-stone-600">撇口設計，便於持拿且散熱。</p>
                        </div>
                        <div className="p-3 border border-stone-200 rounded text-center">
                            <strong className="block text-stone-800 mb-1 text-sm">3. 杯深</strong>
                            <p className="text-xs text-stone-600">約8cm，過深則手腕操作困難。</p>
                        </div>
                        <div className="p-3 border border-stone-200 rounded text-center">
                            <strong className="block text-stone-800 mb-1 text-sm">4. 杯托</strong>
                            <p className="text-xs text-stone-600">直徑大於杯身，支撐穩固。</p>
                        </div>
                        <div className="p-3 border border-stone-200 rounded text-center">
                            <strong className="block text-stone-800 mb-1 text-sm">5. 縫隙</strong>
                            <p className="text-xs text-stone-600">不完全密合，避免吸住打不開，出湯順暢。</p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4">蓋杯沖泡基本儀軌</h5>
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h6 className="font-bold text-stone-900">掀蓋</h6>
                                    <p className="text-sm text-stone-600">從正前方12點鐘方向，劃出一道柔和弧線移至右下角。切忌生硬移開。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h6 className="font-bold text-stone-900">注水</h6>
                                    <p className="text-sm text-stone-600">八至九分滿，以不溢出為原則。這是為了防燙手，也是一種剛好的智慧。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h6 className="font-bold text-stone-900">出湯「一滑一折」</h6>
                                    <p className="text-sm text-stone-600 mb-2">蓋杯操作的核心技巧，符合人體工學，取代抬高手肘的不雅姿勢。</p>
                                    <div className="flex gap-2 text-xs">
                                        <span className="bg-white border border-stone-200 px-2 py-1 rounded font-bold text-stone-700">一滑：手腕平滑緩衝預備角度</span>
                                        <span className="bg-white border border-stone-200 px-2 py-1 rounded font-bold text-stone-700">一折：手腕內折垂直出湯</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 4: Practice Red Oolong */}
            <AcademySection id="xueya-07-practice" title="實作練習：沖泡紅烏龍" label="ACADEMY · XUEYA · CH07">
                <AcademyContentBlock title="認識紅烏龍" icon={Coffee}>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <p className="mb-4 text-stone-700 leading-relaxed">
                                紅烏龍是一款年輕且具創新性的台灣茶，2008年於台東鹿野研發成功，是為了適應當地低海拔長日照風土的產物。其工藝結合了烏龍茶的萎凋攪拌與紅茶的重萎凋重揉捻，最後進行團揉烘焙。
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                <strong className="block text-red-900 mb-1">風味特徵</strong>
                                <p className="text-sm text-red-800">
                                    兼具烏龍的香氣層次 (做香) 與紅茶的醇厚滋味 (做味)，口感圓潤。雖為球形茶，但其豐富香氣適合用蓋杯（散熱快、不悶香）來細緻表現。
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 bg-stone-50 p-5 rounded-xl border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                                <PlayCircle size={20} className="text-emerald-600" />
                                蓋杯沖泡流程詳解
                            </h6>
                            <ol className="space-y-4 text-sm text-stone-700 list-decimal list-inside marker:font-bold marker:text-emerald-600">
                                <li className="pl-2"><span className="font-bold text-stone-900">溫器</span>：注入熱水溫熱蓋杯與公道杯，倒掉水，激發茶香。</li>
                                <li className="pl-2"><span className="font-bold text-stone-900">置茶</span>：量約為蓋杯注水線容量的 1/5 至 1/6。</li>
                                <li className="pl-2"><span className="font-bold text-stone-900">沖泡</span>：熱水八九分滿。第一泡約50-60秒。第二泡起沿杯緣環繞注水，更柔和。</li>
                                <li className="pl-2"><span className="font-bold text-stone-900">出湯</span>：運用「一滑一折」技巧。</li>
                                <li className="pl-2"><span className="font-bold text-stone-900">結束與清杯</span>：
                                    <ul className="list-disc list-inside pl-4 mt-1 text-stone-600 text-xs space-y-1">
                                        <li>蓋上蓋子示結束。</li>
                                        <li>用茶匙取出茶渣，注入少量熱水旋轉杯身清洗細末。</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </AcademyContentBlock>

                <div className="bg-stone-900 text-stone-300 p-8 rounded-3xl text-center mt-8">
                    <p className="italic text-lg leading-relaxed max-w-2xl mx-auto">
                        本課程旨在將茶的歷史文化深度與蓋杯沖泡的實踐技巧緊密結合。透過理論的理解與親手的實踐，期望每位學習者都能建立起自己與茶的連結，進而更深刻地鑑賞台灣特色茶的萬千風情。
                    </p>
                </div>
            </AcademySection>
        </div>
    );
}
