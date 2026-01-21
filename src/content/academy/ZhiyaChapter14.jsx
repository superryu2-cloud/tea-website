import React from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';
import { BookOpen, Eye, Globe, Beaker, Coffee, Sparkles, Users, Award, History, Droplets } from 'lucide-react';

export default function ZhiyaChapter14() {
    return (
        <div className="space-y-12">
            <AcademySection
                id="zhiya-14"
                title="紅茶品評、歷史與沖泡實踐全解析"
                label="ACADEMY · ZHIYA · CH14"
                subtitle="從感官品評到文化傳承的完整旅程"
            >
                {/* 課程概述 */}
                <AcademyContentBlock title="課程概述" icon={BookOpen}>
                    <p className="text-lg leading-relaxed text-stone-700">
                        本章節將帶您深入探索紅茶的世界，從專業品評技巧、嚴謹的評審流程，
                        到紅茶的全球傳播史，再到實用的沖泡技術與文化意涵。
                        這是一場連結感官、知識與美學的完整學習旅程。
                    </p>
                </AcademyContentBlock>

                {/* 第一部分：紅茶品評入門 */}
                <AcademyContentBlock title="紅茶品評入門：從滋味與外觀談起" icon={Eye}>
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-stone-700">
                            品評一杯紅茶，不僅是單純感受其香氣與滋味，更是理解其品種特性、製作工藝與保存狀態的起點。
                            這是一門連結感官與知識的藝術，讓我們得以窺見茶葉從茶園到茶杯的完整旅程。
                        </p>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">大葉種紅茶的滋味精髓</h4>
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500 mb-4">
                                <p className="text-stone-700 leading-relaxed">
                                    大葉種紅茶的品評，首重其<strong>「滋味」的飽滿度與結構感</strong>。
                                    與小葉種紅茶追求的「甜甜順順」不同，優質的大葉種紅茶應具備滋味飽滿、強勁度與恰到好處的收斂感。
                                    這種強勁的風味特質，使其成為搭配餐點或糕點的理想伴侶，此一功能性的搭配，也正是西式下午茶文化得以建立的基礎。
                                </p>
                            </div>
                            <p className="text-stone-700 leading-relaxed">
                                品飲大葉種紅茶時，應當如同品味一杯優質紅酒，去感受其在口腔中展現的張力與濃度。
                                僅有順滑甘甜並不足以體現其品種的優越性，真正的精髓在於那股飽滿厚實、帶有清晰收斂感的口感，這才是鑑賞大葉種紅茶的核心標準。
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">從茶乾外觀鑑賞紅茶品質</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                視覺是品評的第一道關卡。優質紅茶的英文名為「Black Tea」，這已然揭示了其理想的外觀標準。
                                頂級的紅茶茶乾，其色澤並非單純的紅色或褐色，而是呈現出一種深邃的
                                <strong className="text-amber-700">「紅到發紫」，甚至帶有「黑紫光」</strong>的油潤光澤。
                            </p>
                            <p className="text-stone-700 leading-relaxed">
                                茶葉的光亮度直接反映了其製作工藝的精湛程度與保存狀況的優劣。
                                在專業儀器的檢測下，光亮度高的茶葉意味著其保鮮度良好。
                                反之，若茶乾色澤<strong className="text-amber-700">「暗沉」</strong>，
                                則如同保養不當的肌膚，通常代表茶葉在製作或儲存過程中可能因光照等因素產生了劣化。
                                因此，一個油亮、深邃且帶有黑紫光澤的外觀，是高品質紅茶的重要標誌。
                            </p>
                        </div>

                        <AcademyHighlightBox type="summary">
                            深刻理解紅茶的滋味核心與外觀標準，是邁向專業品評的基石。
                            建立起這套感官標準後，我們便能進一步探索更為系統化與標準化的專業評審流程。
                        </AcademyHighlightBox>
                    </div>
                </AcademyContentBlock>

                {/* 第二部分：專業茶葉評審 */}
                <AcademyContentBlock title="專業茶葉評審的嚴謹世界" icon={Beaker}>
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-stone-700">
                            專業的茶葉競賽評審，並非僅憑個人喜好，而是一套極其嚴謹且力求客觀的系統化流程。
                            這套體系確保了每一款茶葉都能在公平、一致的標準下被評價，從而篩選出真正的佼佼者。
                        </p>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">標準化評審沖泡法</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                為了確保評鑑的公平性，所有參賽茶樣都必須在完全相同的條件下沖泡。
                                以魚池鄉農會的大葉種紅茶比賽為例，其採用了一套國際通行的標準化沖泡參數。
                                這套<strong className="text-emerald-700">「1:50」</strong>的沖泡比例，
                                其歷史可追溯至英國殖民印度時期，至今仍是國際紅茶評審的重要基準。
                            </p>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200 my-6">
                                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3">
                                    <h5 className="text-white font-bold">魚池鄉農會大葉種紅茶比賽標準沖泡參數</h5>
                                </div>
                                <table className="w-full">
                                    <thead className="bg-stone-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-bold text-stone-900">項目</th>
                                            <th className="px-6 py-3 text-left text-sm font-bold text-stone-900">參數</th>
                                            <th className="px-6 py-3 text-left text-sm font-bold text-stone-900">備註</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-200">
                                        <tr><td className="px-6 py-4 text-sm font-medium">茶葉克數</td><td className="px-6 py-4 text-sm">3 公克</td><td className="px-6 py-4 text-sm text-stone-600">精準秤量以確保濃度一致</td></tr>
                                        <tr><td className="px-6 py-4 text-sm font-medium">沖泡時間</td><td className="px-6 py-4 text-sm">5 分鐘</td><td className="px-6 py-4 text-sm text-stone-600">球型茶則為 6 分鐘</td></tr>
                                        <tr><td className="px-6 py-4 text-sm font-medium">茶水比例</td><td className="px-6 py-4 text-sm">1 : 50</td><td className="px-6 py-4 text-sm text-stone-600">即 3 公克茶葉對應 150 c.c. 的水量</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">評審現場流程解密</h4>
                            <p className="text-stone-700 leading-relaxed mb-6">
                                專業評審現場的流程講求效率、精準與紀律，主審與副審各司其職，透過一套不成文的默契與規則進行協作。
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h5 className="font-bold text-stone-900 mb-2">1. 初步聞香判斷</h5>
                                    <p className="text-sm text-stone-700">
                                        主審會率先巡視所有茶樣，進行第一輪聞香。他們會根據香氣的品質，透過移動茶杯的位置來進行初步分級。
                                        例如，將聞起來「不錯」的茶杯向前推一個身位；若覺得「很好」，則會再往前推，以此作為初步的排序依據。
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border-l-4 border-emerald-500">
                                    <h5 className="font-bold text-stone-900 mb-2">2. 品飲滋味複審</h5>
                                    <p className="text-sm text-stone-700">
                                        聞香結束後，評審會開始品嚐茶湯。此時，他們會驗證聞香的感受與實際品飲的滋味是否一致。
                                        如果聞起來香氣優異但喝起來滋味平淡，茶樣的評級就可能會被「推回」原位或降級。
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border-l-4 border-amber-500">
                                    <h5 className="font-bold text-stone-900 mb-2">3. 主副審協作規則</h5>
                                    <p className="text-sm text-stone-700">
                                        副審的角色是輔助與複核。他們跟隨主審的腳步，但不能擅自移動主審已定位的茶杯。
                                        如果副審對某個茶樣的評級有不同意見，他們會將杯子稍微移動到邊緣一點，作為標記，
                                        以便後續所有評審共同討論。這種嚴格的紀律確保了主審判斷的權威性與流程的順暢。
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-5 rounded-xl border-l-4 border-rose-500">
                                    <h5 className="font-bold text-stone-900 mb-2">4. 安全聞香技巧</h5>
                                    <p className="text-sm text-stone-700">
                                        為了保護評審寶貴的嗅覺，茶湯沖泡好後並不會立即聞香。
                                        評審會等待約六分鐘，讓茶湯溫度降至 50-60°C 的安全範圍。
                                        這個溫度不僅能避免高溫傷害鼻腔，也是最能清晰感受茶葉香氣的理想溫度。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AcademyHighlightBox type="summary">
                            這套嚴謹的評審系統，從標準化的沖泡到層層遞進的感官審核，確保了紅茶品質的客觀評價。
                            而這些被精心評鑑的紅茶，其背後更承載著一段波瀾壯闊的全球傳播史。
                        </AcademyHighlightBox>
                    </div>
                </AcademyContentBlock>

                {/* 第三部分：紅茶的全球傳播史 */}
                <AcademyContentBlock title="紅茶的全球傳播史：從鴉片戰爭到台灣的阿薩姆" icon={Globe}>
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-stone-700">
                            茶葉，從來不僅僅是一種飲品，它更曾是牽動全球貿易、引發國際衝突、甚至改變世界格局的關鍵商品。
                            紅茶的全球傳播史，便是一部充滿商業角力與冒險精神的壯闊史詩。
                        </p>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">貿易逆差與鴉片戰爭的導火線</h4>
                            <p className="text-stone-700 leading-relaxed">
                                在19世紀，英國對中國茶葉產生了巨大的消費需求，導致大量的白銀外流，形成了嚴重的貿易逆差。
                                為了扭轉這種不利的經濟局面，英國商人開始向中國大量走私鴉片。
                                因此，茶葉貿易所引發的經濟失衡，成為了鴉片戰爭爆發最根本的導火線。這場戰爭的本質，是一場由茶葉引發的貿易戰爭。
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">「茶盜」福鈞與大吉嶺紅茶的誕生</h4>
                            <p className="text-stone-700 leading-relaxed">
                                第一次鴉片戰爭後，中國被迫開放通商口岸，英國為擺脫對中國茶葉的依賴，決心在自己的殖民地——印度建立茶葉生產基地。
                                為此，英國派遣了一位名為羅伯特·福鈞（Robert Fortune）的植物學家。
                                他冒充漢人，深入安徽與福建等地的茶區，成功竊取了中國的小葉種紅茶品種與製茶技術，並將其帶往印度的大吉嶺地區種植。
                                福鈞的這次行動，成功開啟了大吉嶺紅茶的輝煌時代，但他本人也因此在茶葉史上被稱為「茶盜」。
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">台灣紅茶的起源與發展</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                台灣的紅茶發展史，同樣與這段全球茶葉競逐的歷史緊密相連。
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 1925年日治時期</h5>
                                    <p className="text-sm text-stone-700">
                                        當時的日本殖民政府發現，雖然台灣能生產優質的小葉種紅茶，但其風味不夠強勁，難以在國際市場上與印度、錫蘭的大葉種紅茶抗衡。
                                        為此，日本派遣農業專家前往印度阿薩姆省引進大葉種茶樹。
                                        據傳，當時的專家們將茶籽藏於<strong className="text-amber-700">「空心拐杖」</strong>中，才得以順利將珍貴的品種帶回台灣。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 魚池的成功</h5>
                                    <p className="text-sm text-stone-700">
                                        引進的阿薩姆品種最初在淡水、平鎮、魚池三地進行試種。經過評估，發現南投魚池的風土環境條件與阿薩姆原產地最為相似，試種效果最佳。
                                        自此，魚池便成為台灣發展大葉種紅茶的核心產區。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 台茶18號的培育</h5>
                                    <p className="text-sm text-stone-700">
                                        在阿薩姆種的基礎上，魚池分場的茶業專家們持續進行品種改良工作。
                                        到了1999年（民國88年），他們成功培育出舉世聞名的「台茶18號」，並命名為<strong className="text-emerald-700">「紅玉」</strong>。
                                        這個品種是運用台灣野生山茶與緬甸大葉種雜交而成，成為台灣最具代表性的大葉種紅茶，也延續了魚池作為紅茶重鎮的歷史地位。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AcademyHighlightBox type="summary">
                            歷史的演進不僅徹底改變了全球紅茶的生產版圖，也為今日的我們帶來了多元而豐富的紅茶品種與風貌。
                            接下來，我們將深入探討這些不同類型紅茶的技術性差異。
                        </AcademyHighlightBox>
                    </div>
                </AcademyContentBlock>

                {/* 第四部分：解構紅茶 */}
                <AcademyContentBlock title="解構紅茶：品種、分級與加工工藝" icon={Award}>
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-stone-700">
                            要真正掌握紅茶的精髓，就必須理解其根本的分類系統與製作原理。
                            從植物學的角度，紅茶可分為「大葉種」與「小葉種」兩大類；從國際貿易的角度，則依據茶葉的外形制定了嚴格的分級標準。
                        </p>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">大葉種 vs. 小葉種：不僅是外觀差異</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                大葉種與小葉種的根本區別，並非僅僅在於葉片的大小，而是在於其微觀的<strong className="text-emerald-700">「細胞組織結構」</strong>。
                                單純從外觀判斷並不可靠，因為「大葉有小時候，小葉有長大」，採摘的嫩度會影響葉片大小。
                                真正的差異在於葉片切片後的內部組織比例：
                            </p>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
                                <table className="w-full">
                                    <thead className="bg-stone-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-bold">組織類型</th>
                                            <th className="px-6 py-3 text-left text-sm font-bold">小葉種比例</th>
                                            <th className="px-6 py-3 text-left text-sm font-bold">大葉種比例</th>
                                            <th className="px-6 py-3 text-left text-sm font-bold">滋味影響</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-200">
                                        <tr><td className="px-6 py-4 text-sm font-medium">海綿組織</td><td className="px-6 py-4 text-sm">約 1</td><td className="px-6 py-4 text-sm">約 2-3</td><td className="px-6 py-4 text-sm text-stone-600">圓形結構，能容納更多內含物，帶來飽滿強勁的滋味</td></tr>
                                        <tr><td className="px-6 py-4 text-sm font-medium">柵欄組織</td><td className="px-6 py-4 text-sm">約 1</td><td className="px-6 py-4 text-sm">1</td><td className="px-6 py-4 text-sm text-stone-600">結構緊密，內含物相對較少</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-stone-700 leading-relaxed mt-4">
                                由於大葉種的海綿組織比例遠高於小葉種，使其能夠儲存更豐富的茶多酚、咖啡鹼等內含物質，
                                這也是大葉種紅茶滋味通常更為強勁、飽滿的根本原因。
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">國際紅茶分級系統</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                在國際貿易中，紅茶主要根據加工後茶乾的「外形」進行分級，常見的等級如下：
                            </p>

                            <div className="space-y-3">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 條型（原片）</h5>
                                    <p className="text-sm text-stone-700">
                                        指保留完整葉形的茶葉。等級命名通常以 FOP (Flowery Orange Pekoe) 為基礎，代表含有芽尖的完整葉片。
                                        英文字母越多，如 SFTGFOP (Super Fine Tippy Golden Flowery Orange Pekoe)，通常代表等級越高、品質越好。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 碎型</h5>
                                    <p className="text-sm text-stone-700">
                                        指在加工過程中被切碎的茶葉。其等級命名中會出現字母 B，代表 Broken（碎裂），例如 BOP (Broken Orange Pekoe)。
                                        碎型茶的滋味釋出速度更快，常用於茶包或調飲。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• CTC（顆粒型）</h5>
                                    <p className="text-sm text-stone-700">
                                        這是一種特殊的加工方式，全稱為 Crush, Tear, Curl（壓碎、撕裂、揉捲）。
                                        茶葉經過這種處理後會形成細小的顆粒狀。CTC紅茶的茶湯濃度極高，能夠在短時間內釋放濃郁滋味，
                                        是製作港式「絲襪奶茶」等濃郁調飲的理想基底。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">紅茶的製作工序</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                紅茶之所以呈現紅湯紅葉的特徵，關鍵在於其「全發酵」的製作工藝。其核心步驟如下：
                            </p>

                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500 mb-4">
                                <p className="text-center text-lg font-bold text-stone-900">
                                    萎凋 → 揉捻 → 補足發酵 → 乾燥
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">揉捻與解塊</h5>
                                    <p className="text-sm text-stone-700">
                                        專業製茶的揉捻時間可長達2至3小時，目的是破壞茶葉細胞壁，讓內含物釋出，以利於後續的氧化發酵。
                                        在長時間的揉捻過程中，茶葉會因摩擦而升溫結塊，此時必須進行<strong className="text-emerald-700">「解塊」</strong>，
                                        即將茶葉攤開散熱，以防止葉溫過高產生悶味，確保香氣的純淨。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">補足發酵</h5>
                                    <p className="text-sm text-stone-700">
                                        揉捻後的茶葉會被送入專門的發酵室。發酵室的環境條件極為嚴苛，濕度需高達95%，溫度則恆定控制在24-25°C。
                                        在這樣高濕恆溫的環境下，茶葉中的多酚類物質會充分氧化，產生豐富的茶黃質與茶紅質，賦予紅茶獨特的色澤與醇厚滋味。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AcademyHighlightBox type="summary">
                            對品種、分級和工藝的深刻理解，是通往專業沖泡的先決條件。掌握了這些理論知識後，我們便能更有根據地進行沖泡實踐。
                        </AcademyHighlightBox>
                    </div>
                </AcademyContentBlock>

                {/* 第五部分：紅茶沖泡實踐指南 */}
                <AcademyContentBlock title="紅茶沖泡實踐指南" icon={Coffee}>
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-stone-700">
                            紅茶的沖泡是一門精準的技藝，而非隨意的浸泡。不同的品種、不同的外形，都需要截然不同的對待方式，才能淋漓盡致地展現其最佳風味。
                        </p>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">核心沖泡參數對照</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                大葉種與小葉種紅茶因其內含物質的差異，在沖泡參數上有著明顯的不同。掌握以下核心對照表，是成功沖泡的第一步。
                            </p>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
                                <table className="w-full">
                                    <thead className="bg-stone-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-bold">沖泡參數</th>
                                            <th className="px-6 py-3 text-left text-sm font-bold">小葉種紅茶</th>
                                            <th className="px-6 py-3 text-left text-sm font-bold">大葉種紅茶</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-200">
                                        <tr><td className="px-6 py-4 text-sm font-medium">置茶量（蓋杯注水線）</td><td className="px-6 py-4 text-sm">1/2 至 1/3</td><td className="px-6 py-4 text-sm">1/3 至 1/4</td></tr>
                                        <tr><td className="px-6 py-4 text-sm font-medium">建議茶水比</td><td className="px-6 py-4 text-sm">1 : 25</td><td className="px-6 py-4 text-sm">約 1 : 30</td></tr>
                                        <tr><td className="px-6 py-4 text-sm font-medium">建議水溫</td><td className="px-6 py-4 text-sm">可稍高，約 90-95°C</td><td className="px-6 py-4 text-sm">建議降溫，約 80-90°C</td></tr>
                                        <tr><td className="px-6 py-4 text-sm font-medium">溫潤泡（洗茶）</td><td className="px-6 py-4 text-sm" colSpan="2">不建議。因紅茶經重度揉捻，精華物質已附著於表面，溫潤泡會流失過多風味。</td></tr>
                                        <tr><td className="px-6 py-4 text-sm font-medium">第一沖時間</td><td className="px-6 py-4 text-sm">約 40-50 秒</td><td className="px-6 py-4 text-sm">約 35-40 秒</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">降低澀感的注水技巧</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                紅茶，特別是大葉種，若沖泡不當容易產生過強的收斂感（澀感）。透過調整注水手法，可以有效控制內含物的釋出速度，讓茶湯更為柔和順口。
                            </p>

                            <div className="space-y-3">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">1. 沿杯壁注水</h5>
                                    <p className="text-sm text-stone-700">
                                        將熱水沿著蓋杯的內壁緩緩注入，避免水流直接衝擊茶葉。這種方式可以減緩茶葉翻滾，使內含物更溫和、均勻地釋出。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">2. 柔化注水弧度（環狀細注）</h5>
                                    <p className="text-sm text-stone-700">
                                        採用溫柔、畫圈的方式進行注水，讓水流的衝擊力降至最低。這種手法能讓茶葉在水中舒展得更為自然，茶湯的層次感與平衡感也會隨之提升。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">應對不同外形的器具選擇</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                紅茶的外形（條型 vs. 碎型/CTC）直接影響了沖泡器具的選擇。
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">條型紅茶</h5>
                                    <p className="text-sm text-stone-700">
                                        可使用蓋杯、瓷壺等多種器具進行沖泡，能完整展現其葉形與風味變化。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">碎型/CTC紅茶</h5>
                                    <p className="text-sm text-stone-700">
                                        由於葉片細碎，使用蓋杯沖泡容易導致茶湯混濁、茶渣過多。因此，應優先選擇
                                        <strong className="text-emerald-700">「帶有濾網的瓷壺或玻璃壺」</strong>。
                                        這類器具能有效過濾茶渣，確保茶湯的清澈度，提升品飲體驗。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AcademyHighlightBox type="summary">
                            精準的沖泡技術能最大化地展現紅茶的優點，而紅茶之所以能風靡全球，也源於其高度的適應性與深厚的文化魅力。
                        </AcademyHighlightBox>
                    </div>
                </AcademyContentBlock>

                {/* 第六部分：紅茶的文化意涵 */}
                <AcademyContentBlock title="紅茶的文化意涵與全球影響力" icon={History}>
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-stone-700">
                            紅茶早已超越了飲品的範疇，它是一種全球性的文化符號，一種精緻的生活方式，更是一個龐大的全球產業。
                            從東方的茶園到西方的宮廷，紅茶的足跡遍布世界，深刻地影響了各地的飲食習慣與社交文化。
                        </p>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">紅茶風靡全球的關鍵因素</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                據統計，紅茶的消費量佔全球茶葉總消費量高達 65-70%。換言之，每十個喝茶的人中，就有近七位選擇的是紅茶。
                                其廣受歡迎的原因主要有以下四點：
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 易於保存</h5>
                                    <p className="text-sm text-stone-700">
                                        相較於綠茶和烏龍茶，全發酵的紅茶性質更為穩定，能夠承受長途海上運輸的考驗而不易變質，
                                        這使其在地理大發現時代成為國際貿易的寵兒。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 沖泡包容性高</h5>
                                    <p className="text-sm text-stone-700">
                                        紅茶風味醇厚，非常適合進行調飲。無論是加入牛奶和糖製成奶茶，還是與各式花草、水果搭配，
                                        紅茶都能作為完美的基底，這也是珍珠奶茶、花果茶等流行飲品多以紅茶為本的原因。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 平均價格親民</h5>
                                    <p className="text-sm text-stone-700">
                                        紅茶的主要產區多位於印度、斯里蘭卡等人工成本相對較低的熱帶地區，使得其平均價格較具競爭力。
                                        然而，這並不代表所有紅茶都廉價，頂級莊園紅茶（如大吉嶺春摘）的價格甚至可以媲美奢侈品。
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-stone-900 mb-2">• 用途廣泛</h5>
                                    <p className="text-sm text-stone-700">
                                        從早餐的提神飲品，到下午茶的社交核心，再到晚餐的佐餐搭配，紅茶在各種餐飲與社交場合中都扮演著不可或缺的角色。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">從皇室嫁妝到英式下午茶</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                紅茶在西方世界的流行，始於一場皇室聯姻。17世紀，葡萄牙公主凱薩琳嫁給英國國王查理二世時，
                                將飲用紅茶的習慣作為嫁妝的一部分帶入了英國宮廷。這種來自東方的珍貴飲品迅速在上流社會中蔚為風尚。
                            </p>

                            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-l-4 border-rose-500">
                                <p className="text-stone-700 leading-relaxed">
                                    隨後，這種飲茶習慣逐漸演變為一種精緻的社交儀式——英式下午茶。
                                    貴族名媛們穿著華服，使用精美的骨瓷茶具，搭配三層架上的各式點心，將喝茶變成了一場優雅的社交盛宴。
                                    正如一句流傳甚廣的話所描述的：<strong className="text-rose-700">「三點一刻，時間因你而停止。」</strong>
                                    這句話生動地描繪了下午茶在英國人生活中那份悠閒而神聖的地位。
                                </p>
                            </div>
                        </div>

                        <AcademyHighlightBox type="summary">
                            紅茶的學習，不僅是技術的掌握，更是對歷史、美學與生活情懷的培養。
                            而這一切的融會貫通，最終將在一場名為「茶湯會」的實踐中得到呈現。
                        </AcademyHighlightBox>
                    </div>
                </AcademyContentBlock>

                {/* 第七部分：茶湯會 */}
                <AcademyContentBlock title="茶湯會：一場茶與自我的對話" icon={Users}>
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-stone-700">
                            「茶湯會」，是本次課程的總結，也是學習的昇華。它不僅僅是一場品茶活動，更是一個讓學員將所學知識融會貫通、付諸實踐的舞台。
                            在這場茶會中，每位學員都將成為茶席的主人，透過一場完整的茶席實踐，展現個人對茶的深刻理解與獨特詮釋，完成一場茶與自我的深度對話。
                        </p>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">茶湯會的理念與實踐</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                準備一場個人的茶湯會，需要從以下四個核心面向進行思考與規劃，將技術與理念完美結合：
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h5 className="font-bold text-stone-900 mb-2">1. 茶品選擇</h5>
                                    <p className="text-sm text-stone-700">
                                        精準地說明所選茶葉的背景，不僅是品名，更應包含產地、海拔、品種、季節等詳細資訊，展現對茶葉的專業認知。
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border-l-4 border-emerald-500">
                                    <h5 className="font-bold text-stone-900 mb-2">2. 茶席理念</h5>
                                    <p className="text-sm text-stone-700">
                                        將個人想法、季節感或文學意象融入茶席佈置中。例如，可以引用一首描寫秋天的詩句，
                                        並將詩中的「金」、「銀」等色彩意象轉化為茶席上的主要色調，創造出獨一無二的氛圍與美感。
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border-l-4 border-amber-500">
                                    <h5 className="font-bold text-stone-900 mb-2">3. 試茶理路</h5>
                                    <p className="text-sm text-stone-700">
                                        具體地規劃出沖泡的技術參數，包括水溫的設定、置茶量的多寡、每一沖的浸泡時間等。這套理路是將理念轉化為風味的藍圖。
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-5 rounded-xl border-l-4 border-rose-500">
                                    <h5 className="font-bold text-stone-900 mb-2">4. 茶湯風格</h5>
                                    <p className="text-sm text-stone-700">
                                        清晰地闡述自己期望呈現給品飲者的最終茶湯風味與感受。是希望展現其高雅的香氣，還是醇厚的滋味，亦或是飽滿的層次感。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">書寫的儀式感</h4>
                            <p className="text-stone-700 leading-relaxed">
                                講師特別鼓勵學員將茶席的理念與理路<strong className="text-emerald-700">「書寫」</strong>下來。
                                書寫的過程，本身就是一種極具儀式感的自我對話。它能幫助我們整理腦中零散的想法，進行系統性的「爬梳」。
                                在中國傳統文化中，「帖」不僅是文字的記錄，更是情感與心境的傳遞。
                                如同王羲之的《快雪時晴帖》，寥寥數字卻能流傳千年，這份書寫下來的茶席規劃，也將成為個人習茶歷程中一份珍貴的記錄。
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4">品茶的五種美好</h4>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                一場完美的茶事，是天時、地利、人和的和諧共鳴。宋代文學家歐陽修曾提出成就一場美好茶事的五個條件，至今仍是茶人追求的理想境界：
                            </p>

                            <div className="grid md:grid-cols-5 gap-3">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 text-center">
                                    <div className="text-3xl mb-2"><Droplets className="mx-auto text-blue-500" size={32} /></div>
                                    <h5 className="font-bold text-stone-900 mb-1">泉甘</h5>
                                    <p className="text-xs text-stone-600">水質甘甜</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 text-center">
                                    <div className="text-3xl mb-2"><Sparkles className="mx-auto text-emerald-500" size={32} /></div>
                                    <h5 className="font-bold text-stone-900 mb-1">器潔</h5>
                                    <p className="text-xs text-stone-600">器物潔淨</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 text-center">
                                    <div className="text-3xl mb-2">☀️</div>
                                    <h5 className="font-bold text-stone-900 mb-1">天色佳</h5>
                                    <p className="text-xs text-stone-600">天氣晴好</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 text-center">
                                    <div className="text-3xl mb-2"><Users className="mx-auto text-amber-500" size={32} /></div>
                                    <h5 className="font-bold text-stone-900 mb-1">嘉客</h5>
                                    <p className="text-xs text-stone-600">志同道合的好友</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 text-center">
                                    <div className="text-3xl mb-2"><Coffee className="mx-auto text-rose-500" size={32} /></div>
                                    <h5 className="font-bold text-stone-900 mb-1">新茶</h5>
                                    <p className="text-xs text-stone-600">品質優異的茶葉</p>
                                </div>
                            </div>

                            <p className="text-stone-700 leading-relaxed mt-6">
                                這「五美」提醒我們，品茶不僅僅是關注茶本身，更應注重人與茶、人與環境之間的和諧互動。
                            </p>
                        </div>

                        <AcademyHighlightBox type="conclusion">
                            最終，茶湯會不僅是一次學習成果的檢驗，更是一次將茶道融入生活美學、創造美好體驗的深刻實踐，
                            為這段習茶之旅畫上一個圓滿的句點。
                        </AcademyHighlightBox>
                    </div>
                </AcademyContentBlock>

            </AcademySection>
        </div>
    );
}