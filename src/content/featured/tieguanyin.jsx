// Auto-extracted from src/App.jsx

import React from 'react';
import { BookOpen, Coffee, Feather, Map, Scroll, Thermometer } from 'lucide-react';

export default function TieGuanyinContent() {
    return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="relative bg-stone-800 text-stone-100 rounded-2xl overflow-hidden mb-12 p-8 md:p-16 border border-stone-700">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 md:w-2/3">
                    <div className="inline-block px-3 py-1 bg-amber-700 text-amber-100 text-sm font-bold rounded mb-4">重焙火・重喉韻</div>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 font-sans">木柵鐵觀音</h2>
                    <p className="text-xl text-stone-300 leading-relaxed font-light mb-6">
                        「美如觀音，重似鐵」。<br />
                        台灣特色茶裡焙火最重、喉韻最強的一種茶。水色琥珀帶油光，火侯十足是它的特徵，風頭穩健，就像一位歷經滄桑的「中年男人」。
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Left Column: Definition & Origin */}
                {/* Definition */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                        <BookOpen className="mr-3 text-amber-700" /> 品種 vs 製法
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        鐵觀音原是<strong>茶樹品種</strong>的名稱，但在台灣，「鐵觀音」通常指的是<strong>「依照鐵觀音特定作法製成的茶類」</strong>。
                    </p>
                    <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-amber-600">
                        <ul className="space-y-3 text-stone-700">
                            <li>
                                <strong className="text-amber-800">正欉鐵觀音：</strong>
                                指真正使用「紅心歪尾桃」這種鐵觀音茶樹製作的茶。此樹種「好喝不好栽」，適應性低、產量少、價格高，成品茶品質優異。
                            </li>
                            <li>
                                <strong className="text-stone-800">一般鐵觀音：</strong>
                                以金萱、武夷、梅占或硬枝紅心（如石門鐵觀音）等其他品種，配合鐵觀音的重烘焙製法製作而成。
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 品種基本性狀鑑定 */}
                <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl shadow-sm border border-amber-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                        <Scroll className="mr-3 text-amber-700" /> 鐵觀音品種基本性狀鑑定
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        建立茶樹品種的性狀鑑定體系，不僅是為了區分名實，更是構築茶葉產量與品質穩定性的戰略基石。在茶學研究中，唯有透過精確的植物學參數審核，方能確保後續加工工藝與原料特性達到完美契合。
                    </p>

                    <h4 className="text-xl font-extrabold text-stone-900 mb-4">鐵觀音（紅心歪尾桃）品種技術參數</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-amber-100">
                                    <th className="border border-amber-200 px-4 py-2 text-left font-extrabold text-stone-900">項目</th>
                                    <th className="border border-amber-200 px-4 py-2 text-left font-extrabold text-stone-900">技術描述</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-700">
                                <tr>
                                    <td className="border border-stone-200 px-4 py-2 font-bold">命名</td>
                                    <td className="border border-stone-200 px-4 py-2">鐵觀音</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-200 px-4 py-2 font-bold">葉種</td>
                                    <td className="border border-stone-200 px-4 py-2">外來小葉種（相對於產區原生野茶，由外部引進之優良品種）</td>
                                </tr>
                                <tr>
                                    <td className="border border-stone-200 px-4 py-2 font-bold">茶樹特徵</td>
                                    <td className="border border-stone-200 px-4 py-2">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li><strong>橫張型：</strong>樹冠開張，枝條向四周擴展</li>
                                            <li><strong>葉面隆起：</strong>葉片表面呈明顯波浪狀隆起</li>
                                            <li><strong>側脈：</strong>側脈深陷，呈皺紋狀</li>
                                            <li><strong>節間：</strong>節間長度較長</li>
                                            <li><strong>葉尾：</strong>葉尖端下垂且向一側凹彎（歪尾）</li>
                                            <li><strong>面質：</strong>葉面具綢緞般的油光質感（綢緞面）</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-200 px-4 py-2 font-bold">採摘節氣</td>
                                    <td className="border border-stone-200 px-4 py-2">晚生種（生長週期長，物質累積豐富）</td>
                                </tr>
                                <tr>
                                    <td className="border border-stone-200 px-4 py-2 font-bold">血緣起源</td>
                                    <td className="border border-stone-200 px-4 py-2">福建安溪</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-200 px-4 py-2 font-bold">品種香型</td>
                                    <td className="border border-stone-200 px-4 py-2">蘭花香、桂花香、弱果香</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 bg-white p-5 rounded-lg border-l-4 border-amber-500">
                        <h5 className="font-extrabold text-stone-900 mb-2">生理特徵與辨識意義</h5>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            上述生理特徵中，「葉尾凹彎」與「節間長」是鑑定品種純正性的關鍵標記。葉面的波浪隆起與綢緞面質，在植物解剖學上反映了其葉肉組織的緊密程度，這直接決定了茶青在萎凋過程中的「走水」速率。透過這些穩定的遺傳特徵鑑定，能有效區分替代品種，確保產出品質的恆定性。
                        </p>
                    </div>
                </div>

                {/* 品種定義與音韻之源 */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                        <BookOpen className="mr-3 text-amber-700" /> 品種定義與「音韻」之源
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        在茶學專業論述中，明確區分「茶名」與「茶樹名」是確保學術嚴謹性的必要前提。鐵觀音一詞兼具成品茶名與茶樹品種名雙重身分，但在品種學層面，其正統定義特指以安溪西坪「紅心歪尾鐵觀音」為苗木母樹的原生品種。
                    </p>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        西坪堯陽一帶被公認為鐵觀音的發源地，當地所產出的品種最具備正統的「音韻」風格。從生物遺傳學角度分析，這種所謂的「音韻」，本質上是品種品質特性的「遺傳保守性」與特定微氣候環境共同作用的表現。正是因為紅心歪尾桃在遺傳上表現出極強的穩定性與排他性，才使其在安溪特定的地理環境中，能將最原始、最純粹的風味物質完整保留並呈現。
                    </p>
                </div>

                {/* 品種差異分析 */}
                <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">「紅心歪尾桃」與同類品種之差異</h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        品種純度是烏龍茶製作工藝中的靈魂。根據栽培記錄與感官評審，鐵觀音家族內部存在顯著的層級劃分：
                    </p>

                    <div className="grid gap-4 md:grid-cols-2 mb-4">
                        <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-lg border border-amber-200">
                            <h4 className="font-extrabold text-amber-900 mb-2">紅心鐵觀音（紅心歪尾桃）</h4>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                安溪本地人尊稱為「紅芽歪尾桃」，被公認為鐵觀音體系中最古老、最優秀的純種血脈。它是製作頂級烏龍茶的特優品種。
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-stone-200">
                            <h4 className="font-extrabold text-stone-900 mb-2">同類變異品種</h4>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                包含青心、長葉、圓葉鐵觀音。儘管這三者在生物分類上亦屬於鐵觀音範疇，但在栽培適應性及製茶品質的穩定性上表現趨同，缺乏紅心品種那種驚豔的層次感。
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                        <h5 className="font-extrabold text-stone-900 mb-2">「好喝不好栽」的供需辯證</h5>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            魯迅先生曾謂：「物以稀為貴。」這正是紅心歪尾桃身價不凡的寫照。該品種天性嬌弱、易受病蟲害侵襲且產量有限，在茶業界素有「好喝不好栽」的說法。這種栽培難度與卓越品質之間的矛盾，反而墊高了其名貴價值。正因其生長緩慢、環境挑剔，才使得其內含物質的轉化更加深邃。
                        </p>
                    </div>
                </div>

                {/* 植物生理特徵 */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">植物生理特徵：紅芽、歪尾與肥厚葉質</h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        植物的形態特徵是轉化為感官體驗的物質基礎。紅心歪尾桃的獨特外觀與內部結構，為其滋味提供了強大的生物學支撐：
                    </p>

                    <div className="space-y-4">
                        <div className="bg-rose-50 p-4 rounded-lg">
                            <h5 className="font-extrabold text-rose-900 mb-2">特徵一：紅芽（視覺色彩）</h5>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                春季茶芽萌發時，全株呈現紫紅色，遠觀如朝霞般散發淺淺紅光。這種色素含量與多酚類物質的代謝路徑密切相關。
                            </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h5 className="font-extrabold text-blue-900 mb-2">特徵二：歪尾（形態非對稱性）</h5>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                其葉片與芽尖並非對稱生長，而是明顯向一側歪斜，故名「歪尾」。
                            </p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg">
                            <h5 className="font-extrabold text-emerald-900 mb-2">特徵三：葉片肥厚（解剖學優勢）</h5>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                相對於毛蟹、本山、大烏、黃旦、梅佔等品種，紅心鐵觀音的葉片更顯橢圓且質地極為肥厚。
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 bg-gradient-to-r from-amber-50 to-emerald-50 p-5 rounded-lg">
                        <h5 className="font-extrabold text-stone-900 mb-2">營養組成與感官衝擊力</h5>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            從解剖學角度看，肥厚的葉片意味著其具備更完善的細胞組織結構，能儲存更全面的營養元素（如氨基酸與多酚類化合物）。相比於其他葉質較薄、層次較單一的品種，紅心鐵觀音的物資基礎更為紮實。這直接導致其製成茶後滋味醇厚、香氣層次豐富且具穿透力。入口後，其回甘力道強勁且層次分明，展現出資深茶人所稱之「撩人勁十足」的感官衝擊力。
                        </p>
                    </div>
                </div>

                {/* 產地分布規律 */}
                <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                        <Map className="mr-3 text-stone-600" /> 產地分布規律與兩岸引種歷史
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        產區環境與品種適應性對高品質生產具有決定性影響。根據安溪境內的調查數據，品種分布呈現明顯的「核心向外圍遞減」規律：
                    </p>

                    <div className="bg-white p-5 rounded-lg mb-4">
                        <h5 className="font-extrabold text-stone-900 mb-3">安溪境內品種分布</h5>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span><strong>品種占比：</strong>安溪境內鐵觀音中，紅心純種占 60%，長葉種占 25%，圓葉種占 15%。</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span><strong>核心區域分布：</strong>在內安溪的祥華、感德、長坑、龍涓、虎邱和西坪等核心產茶鎮，紅心純種率可達 70% 左右，這奠定了高品質鐵觀音的產出基礎。</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span><strong>境外傳播規律：</strong>因紅心品種栽培難度大，傳播至安溪境外的樹種多選擇適應性較強的「大葉」與「圓葉」品種。</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                        <h5 className="font-extrabold text-blue-900 mb-2">兩岸引種歷史與正欉辨析</h5>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            台灣鐵觀音的發展亦有一段嚴謹的歷史考證。日治時期，木柵茶葉公司委託茶師張迺妙、張迺乾赴安溪取回苗木，種植於木柵樟湖山（今指南里）。民間多認為引進的是紅心鐵觀音，但茶學專家吳振鐸前場長在文獻考究中指出，早期引進木柵的品種亦可能包含青心鐵觀音。此一學術觀點極為重要，因為它直接影響了對於「正欉鐵觀音」在不同產區定義的理解。即便存在品種爭議，木柵作為台灣鐵觀音發展基地的地位不容動搖。
                        </p>
                    </div>
                </div>

                {/* Characteristics */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <Feather className="mr-3 text-amber-700" /> 特色與風味：觀音韻
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <span className="block text-sm text-stone-400 uppercase tracking-wide">外型</span>
                                <span className="text-stone-700 font-medium">捲曲球型，茶色暗綠帶褐，沉重似鐵。</span>
                            </div>
                            <div>
                                <span className="block text-sm text-stone-400 uppercase tracking-wide">茶湯</span>
                                <span className="text-stone-700 font-medium">琥珀色濃豔清澈，帶有油光。</span>
                            </div>
                            <div>
                                <span className="block text-sm text-stone-400 uppercase tracking-wide">香氣</span>
                                <span className="text-stone-700 font-medium">濃郁果香（熟果）與火香（焙火味）。</span>
                            </div>
                        </div>
                        <div className="bg-amber-50 p-5 rounded-lg flex flex-col justify-center text-center">
                            <p className="text-lg font-sans text-amber-900 font-semibold mb-2">「官韻」</p>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                入口微苦後轉甘，滋味醇厚，齒頰留香。<br />
                                從淡淡花香到濃郁熟果香，變化極富層次。
                            </p>
                        </div>
                    </div>
                </div>

                {/* History Stories */}
                <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <Scroll className="mr-3 text-stone-600" /> 文化溯源：觀音托夢與命名傳說
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        民間傳說為品種賦予了極高的情感認同。關於鐵觀音的命名，流傳最廣的是 1720 年前後安溪老茶農魏蔭的故事。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-bold text-lg text-stone-800 mb-2">魏說：觀音托夢</h4>
                            <p className="text-sm text-stone-600 leading-relaxed mb-3">
                                魏蔭居於松岩村（又名松林頭村），篤信佛教，數十年如一日以清茶供奉觀音。一日夢中受觀音指點，他在溪澗石縫間尋獲一株與眾不同的茶樹。隔日他依夢境前往觀音崙打石坑，果然尋得此樹。他見其葉肉肥厚、嫩芽紫紅，遂帶回種植於家中的一口鐵鼎內悉心培育。
                            </p>
                            <p className="text-xs text-stone-500 leading-relaxed">
                                「鐵觀音」的命名精妙地結合了觀音托夢的信仰背景，以及茶苗初期種於鐵鼎、成品茶質重如鐵且色澤如鐵的物理特徵。這段傳說不僅構建了品牌認同，更強調了該品種的超然地位。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-bold text-lg text-stone-800 mb-2">王說：乾隆賜名</h4>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                安溪文人王仕讓在南軒書房旁發現奇茶，悉心培育後獻給禮部侍郎方苞，方轉呈內廷。乾隆皇帝飲後大讚，見其茶烏潤結實、沉重似鐵，味香形美如觀音，便賜名「鐵觀音」。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-amber-50 to-rose-50 p-5 rounded-lg border-l-4 border-amber-500">
                        <h5 className="font-extrabold text-stone-900 mb-2">文化意涵與結論</h5>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            總結而言，紅心歪尾桃是鐵觀音體系中不可撼動的核心。時至今日，凡使用此一純種苗木製成的茶品，皆被嚴謹地稱為<strong>「正欉鐵觀音」（俗稱「正鐵」）</strong>。其純正的遺傳特徵與深厚的歷史文化，共同支撐起了它作為「茶中之王」的永恆名譽。
                        </p>
                    </div>
                </div>

                {/* Origin Card - moved to main flow */}
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                    <h4 className="font-bold text-stone-800 mb-4 flex items-center"><Map size={18} className="mr-2" /> 產地發展</h4>
                    <div className="relative border-l-2 border-amber-300 ml-2 pl-4 space-y-4">
                        <p className="text-sm text-stone-700">源起：中國福建安溪。</p>
                        <p className="text-sm text-stone-700"><strong>1895年</strong>：張迺妙、張迺乾兄弟引進茶苗至<strong>台北木柵</strong>，成為台灣鐵觀音發源地。</p>
                        <p className="text-sm text-stone-700">擴散：後延伸至坪林、安坑、石碇。</p>
                    </div>
                </div>

                {/* Brewing Card - moved to main flow */}
                <div className="bg-amber-900 text-amber-50 p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold text-xl mb-4 flex items-center"><Coffee size={20} className="mr-2" /> 沖泡指南</h4>
                    <div className="space-y-4 text-sm">
                        <p><strong>茶量：</strong>3克 / 150ml</p>
                        <p><strong>水溫：</strong>沸水 (100°C)</p>
                        <p><strong>時間：</strong>6 分鐘 (第一泡關鍵)</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-amber-700/50">
                        <p className="text-xs text-amber-200 leading-relaxed">
                            <Thermometer size={14} className="inline mr-1" />
                            <strong>很挑水！</strong>請務必使用<strong>含有礦物質的水</strong>沖泡，才能展現其香氣滋味。若用RO純水，滋味會變得淡薄。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
