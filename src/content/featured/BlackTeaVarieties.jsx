import React from 'react';
import {
    Coffee,
    Map,
    Ship,
    Sprout,
    Globe,
    Microscope,
    Tag,
    Droplets,
    Wind,
    BookOpen,
    Feather,
    Eye,
    Award,
    Users,
    AlertTriangle,
    FlaskConical,
    Flame,
    Utensils
} from 'lucide-react';

export default function BlackTeaVarietiesContent() {
    return (
        <div className="animate-fadeIn space-y-24 pb-32 font-sans text-stone-900">

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-200 rounded-[3rem] overflow-hidden p-10 md:p-20 shadow-2xl border border-stone-800">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/images/academy/chonghua-chapter03/historical_tea_trade.png')] bg-cover bg-center opacity-20 mix-blend-overlay grayscale" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-900/30 to-amber-900/20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-stone-800/80 border border-stone-700 text-rose-300 text-sm font-bold tracking-widest uppercase shadow-lg backdrop-blur-md">
                        <Globe size={14} />
                        <span>Black Tea Encyclopedia</span>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight tracking-wide">
                            大/小葉種紅茶
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-rose-700 to-amber-700 mx-auto rounded-full opacity-80" />
                        <h3 className="text-2xl md:text-3xl font-light text-stone-300 tracking-wide">
                            從世界版圖到台灣風味
                        </h3>
                    </div>

                    <p className="text-lg md:text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto font-light border-t border-stone-700/50 pt-8">
                        這不僅是植物的傳播，更是一部交織著貿易、政治與戰爭的宏大敘事。
                    </p>
                </div>
            </div>

            {/* 1.0 紅茶品評入門 */}
            <section className="max-w-5xl mx-auto px-4 md:px-0">
                <div className="flex items-start md:items-center gap-6 mb-12">
                    <span className="text-6xl font-serif text-stone-200 font-bold -mt-4 select-none">01</span>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">紅茶品評入門</h3>
                        <span className="text-base text-stone-500 font-medium tracking-wide">從滋味與外觀談起</span>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-sm relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-64 h-64 opacity-5 pointer-events-none">
                            <img src="/images/academy/chonghua-chapter03/tea_tasting_cups.png" alt="Tea Tasting" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-lg text-stone-700 leading-loose relative z-10">
                            品評一杯紅茶，不僅是單純感受其香氣與滋味，更是理解其品種特性、製作工藝與保存狀態的起點。這是一門連結感官與知識的藝術，讓我們得以窺見茶葉從茶園到茶杯的完整旅程。本章節將從學員們親手製作的紅茶初步品評出發，系統性地介紹大葉種紅茶應有的核心滋味特徵，並闡述如何透過觀察茶乾的外觀，對其品質做出專業的初步判斷。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Taste Card */}
                        <div className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-200">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white text-rose-800 rounded-2xl shadow-sm"><Coffee size={24} /></div>
                                <h4 className="text-xl font-bold text-stone-800">大葉種紅茶的滋味精髓</h4>
                            </div>
                            <div className="space-y-6 text-stone-700 text-base md:text-lg leading-relaxed">
                                <p>
                                    大葉種紅茶的品評，首重其「滋味」的飽滿度與結構感。與小葉種紅茶追求的「甜甜順順」不同，優質的大葉種紅茶應具備滋味飽滿、強勁度與恰到好處的收斂感。這種強勁的風味特質，使其成為搭配餐點或糕點的理想伴侶，此一功能性的搭配，也正是西式下午茶文化得以建立的基礎。
                                </p>
                                <hr className="border-stone-200" />
                                <p>
                                    品飲大葉種紅茶時，應當如同品味一杯優質紅酒，去感受其在口腔中展現的張力與濃度。僅有順滑甘甜並不足以體現其品種的優越性，真正的精髓在於那股飽滿厚實、帶有清晰收斂感的口感，這才是鑑賞大葉種紅茶的核心標準。
                                </p>
                            </div>
                        </div>

                        {/* Appearance Card - Dark to pop */}
                        <div className="bg-stone-900 text-stone-300 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-900/30 rounded-full blur-[80px] -mr-20 -mt-20 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-stone-800 text-rose-400 rounded-2xl border border-stone-700"><Eye size={24} /></div>
                                    <h4 className="text-xl font-bold text-white">從茶乾外觀鑑賞紅茶品質</h4>
                                </div>
                                <div className="space-y-6 leading-relaxed text-base md:text-lg">
                                    <p>
                                        視覺是品評的第一道關卡。優質紅茶的英文名為「Black Tea」，這已然揭示了其理想的外觀標準。頂級的紅茶茶乾，其色澤並非單純的紅色或褐色，而是呈現出一種深邃的<strong className="text-rose-300 font-bold mx-1">「紅到發紫」</strong>，甚至帶有<strong className="text-rose-300 font-bold mx-1">「黑紫光」</strong>的油潤光澤。
                                    </p>
                                    <p>
                                        茶葉的光亮度直接反映了其製作工藝的精湛程度與保存狀況的優劣。在專業儀器的檢測下，光亮度高的茶葉意味著其保鮮度良好。
                                    </p>
                                    <div className="bg-stone-800/50 p-4 rounded-xl border-l-4 border-stone-600">
                                        <p className="text-stone-400 text-base">
                                            反之，若茶乾色澤「暗沉」，則如同保養不當的肌膚，通常代表茶葉在製作或儲存過程中可能因光照等因素產生了劣化。因此，一個油亮、深邃且帶有黑紫光澤的外觀，是高品質紅茶的重要標誌。
                                        </p>
                                    </div>
                                    <p className="text-sm text-stone-500 pt-4 border-t border-stone-800">
                                        總而言之，深刻理解紅茶的滋味核心與外觀標準，是邁向專業品評的基石。建立起這套感官標準後，我們便能更有根據地進行沖泡實踐。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.0 專業茶葉評審的嚴謹世界 */}
            <section className="bg-stone-100/50 py-20 rounded-[3rem]">
                <div className="max-w-5xl mx-auto px-4 md:px-0">
                    <div className="flex items-start md:items-center gap-6 mb-12">
                        <span className="text-6xl font-serif text-stone-300 font-bold -mt-4 select-none">02</span>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">專業評審的嚴謹世界</h3>
                            <span className="text-base text-stone-500 font-medium tracking-wide">系統化評鑑流程</span>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200/60 shadow-sm mb-12 relative overflow-hidden">
                        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none">
                            <img src="/images/academy/zhiya14/tea_judging_lineup.png" alt="Tea Judging" className="w-full h-full object-cover mask-image-linear-gradient" />
                        </div>
                        <p className="indent-0 md:indent-8 text-lg text-stone-700 leading-loose relative z-10">
                            專業的茶葉競賽評審，並非僅憑個人喜好，而是一套極其嚴謹且力求客觀的系統化流程。這套體系確保了每一款茶葉都能在公平、一致的標準下被評價，從而篩選出真正的佼佼者。本章節將揭示專業評審流程的內部細節，從標準化的沖泡比例，到主審與副審之間精密的協作規則，全面展現茶葉評鑑的專業性與嚴謹性。
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* 2.1 */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200/60 shadow-sm">
                            <h4 className="font-bold text-xl text-stone-800 mb-8 flex items-center gap-3 border-b border-stone-100 pb-4">
                                <FlaskConical className="text-amber-600" size={28} />
                                標準化評審沖泡法 (魚池鄉農會標準)
                            </h4>
                            <div className="space-y-6">
                                <p className="text-stone-700 text-lg leading-relaxed">
                                    為了確保評鑑的公平性，所有參賽茶樣都必須在完全相同的條件下沖泡。以魚池鄉農會的大葉種紅茶比賽為例，其採用了一套國際通行的標準化沖泡參數。這套「1:50」的沖泡比例，其歷史可追溯至英國殖民印度時期，至今仍是國際紅茶評審的重要基準。
                                </p>
                                <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200">
                                    <table className="w-full text-left">
                                        <thead className="bg-stone-100 text-stone-800">
                                            <tr>
                                                <th className="p-5 font-bold text-base">項目</th>
                                                <th className="p-5 font-bold text-base">參數</th>
                                                <th className="p-5 font-bold text-base hidden sm:table-cell">備註</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-stone-200">
                                            <tr>
                                                <td className="p-5 text-stone-600 font-medium text-base">茶葉克數</td>
                                                <td className="p-5 text-stone-900 font-bold text-xl">3 公克</td>
                                                <td className="p-5 text-stone-500 text-base hidden sm:table-cell">精準秤量以確保濃度一致</td>
                                            </tr>
                                            <tr>
                                                <td className="p-5 text-stone-600 font-medium text-base">沖泡時間</td>
                                                <td className="p-5 text-stone-900 font-bold text-xl">5 分鐘</td>
                                                <td className="p-5 text-stone-500 text-base hidden sm:table-cell">球型茶則為 6 分鐘</td>
                                            </tr>
                                            <tr>
                                                <td className="p-5 text-stone-600 font-medium text-base">茶水比例</td>
                                                <td className="p-5 text-stone-900 font-bold text-xl">1 : 50</td>
                                                <td className="p-5 text-stone-500 text-base hidden sm:table-cell">即 3 公克茶葉對應 150 c.c. 的水量</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Mobile only note */}
                                <div className="sm:hidden text-stone-500 text-sm italic bg-stone-50 p-4 rounded-xl">
                                    備註：精準秤量確保濃度一致；球型茶沖泡時間為6分鐘；1:50 即 3g 對應 150c.c. 水量。
                                </div>
                            </div>
                        </div>

                        {/* 2.2 */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200/60 shadow-sm relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
                            <h4 className="font-bold text-xl text-stone-800 mb-8 flex items-center gap-3 border-b border-stone-100 pb-4 relative z-10">
                                <Users className="text-amber-600" size={28} />
                                評審現場流程解密
                            </h4>
                            <p className="text-stone-700 text-lg leading-relaxed mb-8 relative z-10">
                                專業評審現場的流程講求效率、精準與紀律，主審與副審各司其職，透過一套不成文的默契與規則進行協作。
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                <div className="bg-stone-50 p-6 md:p-8 rounded-2xl hover:bg-emerald-50/50 transition-colors duration-300">
                                    <span className="font-bold text-lg text-stone-900 block mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-sm">1</span>
                                        初步聞香判斷
                                    </span>
                                    <p className="text-stone-700 leading-relaxed text-base">
                                        主審會率先巡視所有茶樣，進行第一輪聞香。他們會根據香氣的品質，透過移動茶杯的位置來進行初步分級。例如，將聞起來「不錯」的茶杯向前推一個身位；若覺得「很好」，則會再往前推，以此作為初步的排序依據。
                                    </p>
                                </div>

                                <div className="bg-stone-50 p-6 md:p-8 rounded-2xl hover:bg-emerald-50/50 transition-colors duration-300">
                                    <span className="font-bold text-lg text-stone-900 block mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-sm">2</span>
                                        品飲滋味複審
                                    </span>
                                    <p className="text-stone-700 leading-relaxed text-base">
                                        聞香結束後，評審會開始品嚐茶湯。此時，他們會驗證聞香的感受與實際品飲的滋味是否一致。如果聞起來香氣優異但喝起來滋味平淡，茶樣的評級就可能會被「推回」原位或降級。
                                    </p>
                                </div>

                                <div className="bg-stone-50 p-6 md:p-8 rounded-2xl hover:bg-emerald-50/50 transition-colors duration-300">
                                    <span className="font-bold text-lg text-stone-900 block mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-sm">3</span>
                                        主副審協作規則
                                    </span>
                                    <p className="text-stone-700 leading-relaxed text-base">
                                        副審的角色是輔助與複核。他們跟隨主審的腳步，但不能擅自移動主審已定位的茶杯。如果副審對某個茶樣的評級有不同意見，他們會將杯子稍微移動到邊緣一點，作為標記，以便後續所有評審共同討論。這種嚴格的紀律確保了主審判斷的權威性與流程的順暢。
                                    </p>
                                </div>

                                <div className="bg-stone-50 p-6 md:p-8 rounded-2xl hover:bg-emerald-50/50 transition-colors duration-300">
                                    <span className="font-bold text-lg text-stone-900 block mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-sm">4</span>
                                        安全聞香技巧
                                    </span>
                                    <p className="text-stone-700 leading-relaxed text-base">
                                        為了保護評審寶貴的嗅覺，茶湯沖泡好後並不會立即聞香。評審會等待約六分鐘，讓茶湯溫度降至 50-60°C 的安全範圍。這個溫度不僅能避免高溫傷害鼻腔，也是最能清晰感受茶葉香氣的理想溫度。
                                    </p>
                                </div>
                            </div>
                            <p className="mt-8 text-stone-500 leading-relaxed italic border-t border-stone-100 pt-6">
                                這套嚴謹的評審系統，從標準化的沖泡到層層遞進的感官審核，確保了紅茶品質的客觀評價。而這些被精心評鑑的紅茶，其背後更承載著一段波瀾壯闊的全球傳播史。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.0 紅茶的全球傳播史 */}
            <section className="max-w-5xl mx-auto px-4 md:px-0">
                <div className="flex items-start md:items-center gap-6 mb-12">
                    <span className="text-6xl font-serif text-stone-200 font-bold -mt-4 select-none">03</span>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">紅茶的全球傳播史</h3>
                        <span className="text-base text-stone-500 font-medium tracking-wide">從鴉片戰爭到台灣的阿薩姆</span>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm mb-12">
                    <p className="indent-0 md:indent-8 text-lg text-stone-700 leading-loose">
                        茶葉，從來不僅僅是一種飲品，它更曾是牽動全球貿易、引發國際衝突、甚至改變世界格局的關鍵商品。紅茶的全球傳播史，便是一部充滿商業角力與冒險精神的壯闊史詩。本章節將追溯紅茶如何從中國走向世界，揭示其如何成為鴉片戰爭的導火線，講述「植物獵人」的冒險故事，以及最終如何在台灣這片土地上落地生根的完整歷史脈絡。
                    </p>
                </div>

                <div className="space-y-10">
                    {/* 3.1 & 3.2 */}
                    <div className="bg-amber-50/60 p-10 rounded-[40px] border border-amber-100/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none">
                            <img src="/images/academy/chonghua-chapter03/historical_tea_trade.png" alt="Tea Trade" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-4 bg-amber-100 text-amber-800 rounded-full"><AlertTriangle size={28} /></div>
                            <h4 className="text-2xl font-bold text-amber-900">
                                貿易逆差與「茶盜」福鈞
                            </h4>
                        </div>

                        <div className="space-y-10 text-stone-800 leading-loose text-lg relative z-10">
                            <div>
                                <h5 className="font-bold text-xl text-stone-900 mb-3 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                                    貿易逆差與鴉片戰爭的導火線
                                </h5>
                                <p className="text-stone-700">
                                    在19世紀，英國對中國茶葉產生了巨大的消費需求，導致大量的白銀外流，形成了嚴重的貿易逆差。為了扭轉這種不利的經濟局面，英國商人開始向中國大量走私鴉片。因此，茶葉貿易所引發的經濟失衡，成為了鴉片戰爭爆發最根本的導火線。這場戰爭的本質，是一場由茶葉引發的貿易戰爭。
                                </p>
                            </div>
                            <div className="border-t border-amber-200 pt-8">
                                <h5 className="font-bold text-xl text-stone-900 mb-3 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                                    「茶盜」福鈞與大吉嶺紅茶的誕生
                                </h5>
                                <p className="text-stone-700">
                                    第一次鴉片戰爭後，中國被迫開放通商口岸，英國為擺脫對中國茶葉的依賴，決心在自己的殖民地——印度建立茶葉生產基地。為此，英國派遣了一位名為羅伯特·福鈞（Robert Fortune）的植物學家。他冒充漢人，深入安徽與福建等地的茶區，成功竊取了中國的小葉種紅茶品種與製茶技術，並將其帶往印度的大吉嶺地區種植。福鈞的這次行動，成功開啟了大吉嶺紅茶的輝煌時代，但他本人也因此在茶葉史上被稱為「茶盜」。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3.3 Timeline Cards */}
                    <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-stone-800 mb-4 pl-4 border-l-4 border-rose-400">台灣紅茶的起源與發展</h4>
                        <p className="text-stone-700 text-lg leading-relaxed pl-4 mb-8">
                            台灣的紅茶發展史，同樣與這段全球茶葉競逐的歷史緊密相連。
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-4xl font-black text-rose-100 block mb-4">1925</span>
                                <h5 className="font-bold text-xl text-stone-900 mb-4">空心拐杖的秘密</h5>
                                <p className="text-stone-700 leading-relaxed">
                                    當時的日本殖民政府發現，雖然台灣能生產優質的小葉種紅茶，但其風味不夠強勁，難以在國際市場上與印度、錫蘭的大葉種紅茶抗衡。為此，日本派遣農業專家前往印度阿薩姆省引進大葉種茶樹。據傳，當時的專家們將茶籽藏於<strong className="text-rose-700">「空心拐杖」</strong>中，才得以順利將珍貴的品種帶回台灣。
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col relative overflow-hidden">
                                <div className="absolute inset-0  opacity-10 pointer-events-none">
                                    <img src="/images/academy/chonghua-chapter03/sun_moon_lake_tea.png" alt="Sun Moon Lake" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-4xl font-black text-amber-100 block mb-4 relative z-10">Focus</span>
                                <h5 className="font-bold text-xl text-stone-900 mb-4 relative z-10">魚池的成功</h5>
                                <p className="text-stone-700 leading-relaxed relative z-10">
                                    引進的阿薩姆品種最初在淡水、平鎮、魚池三地進行試種。經過評估，發現南投魚池的風土環境條件與阿薩姆原產地最為相似，試種效果最佳。自此，魚池便成為台灣發展大葉種紅茶的核心產區。
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10 pointer-events-none">
                                    <img src="/images/academy/chonghua-chapter03/ruby_tea_leaves.png" alt="Ruby Tea" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-4xl font-black text-red-100 block mb-4 relative z-10">1999</span>
                                <h5 className="font-bold text-xl text-stone-900 mb-4 relative z-10">紅玉的誕生</h5>
                                <p className="text-stone-700 leading-relaxed relative z-10">
                                    在阿薩姆種的基礎上，魚池分場的茶業專家們持續進行品種改良工作。到了1999年，他們成功培育出舉世聞名的「台茶18號」，並命名為<strong className="text-red-700">「紅玉」</strong>。這個品種是運用台灣野生山茶與緬甸大葉種雜交而成，成為台灣最具代表性的大葉種紅茶，也延續了魚池作為紅茶重鎮的歷史地位。
                                </p>
                            </div>
                        </div>
                        <p className="pt-6 text-stone-500 italic text-center w-full">
                            歷史的演進不僅徹底改變了全球紅茶的生產版圖，也為今日的我們帶來了多元而豐富的紅茶品種與風貌。接下來，我們將深入探討這些不同類型紅茶的技術性差異。
                        </p>
                    </div>
                </div>
            </section>

            {/* 4.0 解構紅茶 */}
            <section className="bg-stone-50 py-20 rounded-[3rem]">
                <div className="max-w-5xl mx-auto px-4 md:px-0">
                    <div className="flex items-start md:items-center gap-6 mb-12">
                        <span className="text-6xl font-serif text-stone-300 font-bold -mt-4 select-none">04</span>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">解構紅茶</h3>
                            <span className="text-base text-stone-500 font-medium tracking-wide">品種、分級與加工工藝</span>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 mb-12 shadow-sm">
                        <p className="indent-0 md:indent-8 text-lg text-stone-700 leading-loose">
                            要真正掌握紅茶的精髓，就必須理解其根本的分類系統與製作原理。從植物學的角度，紅茶可分為「大葉種」與「小葉種」兩大類；從國際貿易的角度，則依據茶葉的外形制定了嚴格的分級標準。本章節將深入探討這兩大核心維度，解析其本質差異，並概述紅茶的核心製作工序，為後續的沖泡實踐奠定堅實的理論基礎。
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* 4.1 Varieties */}
                        <div>
                            <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center gap-3">
                                <Microscope className="text-stone-400" size={32} />
                                大葉種 vs. 小葉種：不僅是外觀差異
                            </h4>
                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                <div className="prose prose-lg text-stone-700 leading-relaxed">
                                    <p className="mb-6">
                                        大葉種與小葉種的根本區別，並非僅僅在於葉片的大小，而是在於其微觀的<strong className="text-stone-900">「細胞組織結構」</strong>。單純從外觀判斷並不可靠，因為「大葉有小時候，小葉有長大」，採摘的嫩度會影響葉片大小。真正的差異在於葉片切片後的內部組織比例。
                                    </p>
                                    <p>
                                        由於大葉種的海綿組織比例遠高於小葉種，使其能夠儲存更豐富的茶多酚、咖啡鹼等內含物質，這也是大葉種紅茶滋味通常更為強勁、飽滿的根本原因。
                                    </p>
                                    <div className="mt-8 rounded-2xl overflow-hidden shadow-md">
                                        <img src="/images/academy/zhiya14/leaf_cells.png" alt="Cell Structure" className="w-full h-auto" />
                                    </div>
                                </div>

                                <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
                                    <table className="w-full text-left">
                                        <thead className="bg-stone-100 text-stone-800">
                                            <tr>
                                                <th className="p-5 text-sm md:text-base">組織類型</th>
                                                <th className="p-5 text-sm md:text-base">小葉種比例</th>
                                                <th className="p-5 text-sm md:text-base">大葉種比例</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-stone-100">
                                            <tr>
                                                <td className="p-5 font-bold text-stone-700 bg-stone-50/50">海綿組織</td>
                                                <td className="p-5 text-stone-600">約 1</td>
                                                <td className="p-5 font-black text-amber-700 text-lg">約 2-3</td>
                                            </tr>
                                            <tr>
                                                <td className="p-5 font-bold text-stone-700 bg-stone-50/50">柵欄組織</td>
                                                <td className="p-5 text-stone-600">約 1</td>
                                                <td className="p-5 text-amber-700 font-medium">1</td>
                                            </tr>
                                            <tr className="bg-amber-50/30">
                                                <td className="p-5 font-bold text-amber-900" colSpan="3">
                                                    <span className="text-xs uppercase tracking-wider text-amber-500 font-bold block mb-1">Impact</span>
                                                    大葉種圓形結構多，能容納更多內含物，帶來飽滿強勁的滋味。
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* 4.2 Grading */}
                        <div>
                            <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center gap-3">
                                <Tag className="text-stone-400" size={32} />
                                國際紅茶分級系統
                            </h4>
                            <p className="text-stone-700 text-lg leading-relaxed mb-8">
                                在國際貿易中，紅茶主要根據加工後茶乾的「外形」進行分級，常見的等級如下：
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
                                    <div className="text-amber-600 font-bold text-xl mb-3">條型（原片）</div>
                                    <p className="text-stone-700 leading-relaxed mb-4">
                                        指保留完整葉形的茶葉。等級命名通常以 FOP (Flowery Orange Pekoe) 為基礎，代表含有芽尖的完整葉片。英文字母越多，如 SFTGFOP (Super Fine Tippy Golden Flowery Orange Pekoe)，通常代表等級越高、品質越好。
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
                                    <div className="text-red-700 font-bold text-xl mb-3">碎型</div>
                                    <p className="text-stone-700 leading-relaxed mb-4">
                                        指在加工過程中被切碎的茶葉。其等級命名中會出現字母 B，代表 Broken（碎裂），例如 BOP (Broken Orange Pekoe)。碎型茶的滋味釋出速度更快，常用於茶包或調飲。
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
                                    <div className="text-stone-800 font-bold text-xl mb-3">CTC（顆粒型）</div>
                                    <p className="text-stone-700 leading-relaxed mb-4">
                                        這是一種特殊的加工方式，全稱為 Crush, Tear, Curl（壓碎、撕裂、揉捲）。茶葉經過這種處理後會形成細小的顆粒狀。CTC紅茶的茶湯濃度極高，能夠在短時間內釋放濃郁滋味，是製作港式「絲襪奶茶」等濃郁調飲的理想基底。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4.3 Process */}
                        <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-200">
                            <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center gap-3">
                                <Flame className="text-stone-400" size={32} />
                                紅茶的製作工序：全發酵的藝術
                            </h4>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-stone-500 font-bold text-lg mb-10 px-4 md:px-20">
                                <span className="bg-white px-6 py-2 rounded-full shadow-sm">萎凋</span>
                                <span className="rotate-90 md:rotate-0">→</span>
                                <span className="bg-white px-6 py-2 rounded-full shadow-sm border border-stone-300">揉捻 (解塊)</span>
                                <span className="rotate-90 md:rotate-0">→</span>
                                <span className="bg-amber-100 text-amber-800 px-6 py-2 rounded-full shadow-sm border border-amber-200">補足發酵</span>
                                <span className="rotate-90 md:rotate-0">→</span>
                                <span className="bg-white px-6 py-2 rounded-full shadow-sm">乾燥</span>
                            </div>

                            <p className="text-stone-700 text-lg leading-relaxed mb-8">
                                紅茶之所以呈現紅湯紅葉的特徵，關鍵在於其「全發酵」的製作工藝。其中，「揉捻」與「補足發酵」是決定紅茶品質的關鍵環節：
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-stone-400">
                                    <h5 className="font-bold text-stone-900 text-lg mb-3">揉捻與解塊</h5>
                                    <p className="text-stone-700 leading-relaxed">
                                        專業製茶的揉捻時間可長達2至3小時，目的是破壞茶葉細胞壁，讓內含物釋出，以利於後續的氧化發酵。在長時間的揉捻過程中，茶葉會因摩擦而升溫結塊，此時必須進行<strong className="text-stone-900">「解塊」</strong>，即將茶葉攤開散熱，以防止葉溫過高產生悶味，確保香氣的純淨。
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-600">
                                    <h5 className="font-bold text-stone-900 text-lg mb-3">補足發酵</h5>
                                    <p className="text-stone-700 leading-relaxed">
                                        揉捻後的茶葉會被送入專門的發酵室。發酵室的環境條件極為嚴苛，濕度需高達95%，溫度則恆定控制在24-25°C。在這樣高濕恆溫的環境下，茶葉中的多酚類物質會充分氧化，產生豐富的茶黃質與茶紅質，賦予紅茶獨特的色澤與醇厚滋味。
                                    </p>
                                </div>
                            </div>
                            <p className="mt-10 text-stone-600 italic text-center text-lg">
                                對品種、分級和工藝的深刻理解，是通往專業沖泡的先決條件。掌握了這些理論知識後，我們便能更有根據地進行沖泡實踐。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5.0 紅茶沖泡實踐指南 */}
            <section className="bg-gradient-to-br from-stone-50 via-white to-stone-50 py-24 rounded-[3rem] max-w-5xl mx-auto border border-stone-200">
                <div className="px-6 md:px-12 text-center mb-16">
                    <div className="inline-flex items-center justify-center p-4 bg-stone-900 text-white rounded-full mb-6 shadow-lg">
                        <Droplets size={32} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif mb-6">沖泡實踐指南</h3>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                        紅茶的沖泡是一門精準的技藝，而非隨意的浸泡。不同的品種、不同的外形，都需要截然不同的對待方式，才能淋漓盡致地展現其最佳風味。本章節將整合講師傳授的核心技巧，提供一個系統性的沖泡指南。
                    </p>
                </div>

                <div className="px-4 md:px-12 space-y-16">
                    {/* 5.1 Table */}
                    <div>
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 text-center">核心沖泡參數對照</h4>
                        <p className="text-center text-stone-600 text-lg mb-8">大葉種與小葉種紅茶因其內含物質的差異，在沖泡參數上有著明顯的不同。掌握以下核心對照表，是成功沖泡的第一步。</p>

                        <div className="bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden relative">
                            <div className="absolute right-0 top-0 w-48 h-full opacity-5 pointer-events-none">
                                <img src="/images/academy/chonghua-chapter03/tea_brewing_ceremony.png" alt="Brewing" className="w-full h-full object-cover" />
                            </div>
                            <table className="w-full text-left text-stone-700 relative z-10">
                                <thead>
                                    <tr className="text-white">
                                        <th className="p-6 bg-stone-800 text-lg font-medium w-1/3">沖泡參數</th>
                                        <th className="p-6 bg-rose-900 text-lg font-medium w-1/3">小葉種紅茶</th>
                                        <th className="p-6 bg-amber-900 text-lg font-medium w-1/3">大葉種紅茶</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200">
                                    <tr>
                                        <td className="p-6 font-bold bg-stone-50 text-stone-900">置茶量（蓋杯）</td>
                                        <td className="p-6 text-lg">1/2 至 1/3</td>
                                        <td className="p-6 text-lg">1/3 至 1/4</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold bg-stone-50 text-stone-900">建議茶水比</td>
                                        <td className="p-6 text-lg">1 : 25</td>
                                        <td className="p-6 text-lg">約 1 : 30</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold bg-stone-50 text-stone-900">建議水溫</td>
                                        <td className="p-6 text-lg">可稍高，約 90-95°C</td>
                                        <td className="p-6 text-lg">建議降溫，約 80-90°C</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold bg-stone-50 text-stone-900">溫潤泡（洗茶）</td>
                                        <td className="p-6 col-span-2 text-stone-500 italic bg-stone-50/30" colSpan="2">不建議。因紅茶經重度揉捻，精華物質已附著於表面，溫潤泡會流失過多風味。</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold bg-stone-50 text-stone-900">第一沖時間</td>
                                        <td className="p-6 text-lg">約 40-50 秒</td>
                                        <td className="p-6 text-lg">約 35-40 秒</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 5.2 & 5.3 */}
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-xl text-stone-800 mb-6 flex items-center gap-3">
                                <Wind size={24} className="text-sky-600" />
                                降低澀感的注水技巧
                            </h4>
                            <p className="text-stone-600 mb-6 text-lg leading-relaxed">紅茶，特別是大葉種，若沖泡不當容易產生過強的收斂感（澀感）。透過調整注水手法，可以有效控制內含物的釋出速度，讓茶湯更為柔和順口。</p>
                            <div className="space-y-6">
                                <div className="bg-sky-50/50 p-6 rounded-2xl">
                                    <strong className="block text-sky-900 mb-2 font-bold text-lg">1. 沿杯壁注水</strong>
                                    <p className="text-stone-700 leading-relaxed">將熱水沿著蓋杯的內壁緩緩注入，避免水流直接衝擊茶葉。這種方式可以減緩茶葉翻滾，使內含物更溫和、均勻地釋出。</p>
                                </div>
                                <div className="bg-sky-50/50 p-6 rounded-2xl">
                                    <strong className="block text-sky-900 mb-2 font-bold text-lg">2. 柔化注水弧度</strong>
                                    <p className="text-stone-700 leading-relaxed">採用溫柔、畫圈的方式進行注水，讓水流的衝擊力降至最低。這種手法能讓茶葉在水中舒展得更為自然，茶湯的層次感與平衡感也會隨之提升。</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-xl text-stone-800 mb-6 flex items-center gap-3">
                                <Utensils size={24} className="text-amber-600" />
                                應對不同外形的器具選擇
                            </h4>
                            <p className="text-stone-600 mb-6 text-lg leading-relaxed">紅茶的外形（條型 vs. 碎型/CTC）直接影響了沖泡器具的選擇。</p>
                            <div className="space-y-6">
                                <div className="bg-amber-50/50 p-6 rounded-2xl">
                                    <strong className="block text-amber-900 mb-2 font-bold text-lg">條型紅茶</strong>
                                    <p className="text-stone-700 leading-relaxed">可使用蓋杯、瓷壺等多種器具進行沖泡，能完整展現其葉形與風味變化。</p>
                                </div>
                                <div className="bg-amber-50/50 p-6 rounded-2xl">
                                    <strong className="block text-amber-900 mb-2 font-bold text-lg">碎型/CTC紅茶</strong>
                                    <p className="text-stone-700 leading-relaxed">由於葉片細碎，使用蓋杯沖泡容易導致茶湯混濁、茶渣過多。因此，應優先選擇<strong className="text-stone-900">「帶有濾網的瓷壺或玻璃壺」</strong>。這類器具能有效過濾茶渣，確保茶湯的清澈度，提升品飲體驗。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-stone-500 font-bold italic text-lg opacity-80">
                        精準的沖泡技術能最大化地展現紅茶的優點，而紅茶之所以能風靡全球，也源於其高度的適應性與深厚的文化魅力。
                    </p>
                </div>
            </section>

            {/* 6.0 紅茶的文化意涵 */}
            <section className="max-w-5xl mx-auto px-4 md:px-0">
                <div className="flex items-start md:items-center gap-6 mb-12">
                    <span className="text-6xl font-serif text-stone-300 font-bold -mt-4 select-none">06</span>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">文化意涵與全球影響力</h3>
                        <span className="text-base text-stone-500 font-medium tracking-wide">從皇室嫁妝到英式下午茶</span>
                    </div>
                </div>

                <div className="prose prose-lg text-stone-700 max-w-none leading-loose mb-12 bg-white p-10 rounded-3xl border border-stone-200/60 shadow-sm relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
                        <img src="/images/academy/zhiya14/tea_party.png" alt="Tea Party" className="w-full h-full object-cover" />
                    </div>
                    <p className="indent-0 md:indent-8 relative z-10">
                        紅茶早已超越了飲品的範疇，它是一種全球性的文化符號，一種精緻的生活方式，更是一個龐大的全球產業。從東方的茶園到西方的宮廷，紅茶的足跡遍布世界，深刻地影響了各地的飲食習慣與社交文化。本章節將分析紅茶之所以能佔據全球茶葉消費主導地位的關鍵原因，並追溯其如何融入西方上流社會，演變為優雅的下午茶文化。
                    </p>
                </div>

                <div className="bg-rose-950 text-rose-50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-16 item-start">
                        <div>
                            <h4 className="text-2xl font-serif font-black mb-8 flex items-center gap-3 text-white">
                                <Award className="text-amber-400" />
                                風靡全球的關鍵因素
                            </h4>
                            <p className="text-rose-100/80 mb-8 text-lg leading-relaxed">
                                據統計，紅茶的消費量佔全球茶葉總消費量高達 65-70%。換言之，每十個喝茶的人中，就有近七位選擇的是紅茶。其廣受歡迎的原因主要有以下四點：
                            </p>
                            <ul className="space-y-8">
                                <li className="relative pl-6 border-l border-amber-500/50">
                                    <strong className="text-amber-200 block text-xl mb-2">易於保存</strong>
                                    <span className="text-rose-100/80 leading-relaxed block text-base md:text-lg">相較於綠茶和烏龍茶，全發酵的紅茶性質更為穩定，能夠承受長途海上運輸的考驗而不易變質，這使其在地理大發現時代成為國際貿易的寵兒。</span>
                                </li>
                                <li className="relative pl-6 border-l border-amber-500/50">
                                    <strong className="text-amber-200 block text-xl mb-2">沖泡包容性高</strong>
                                    <span className="text-rose-100/80 leading-relaxed block text-base md:text-lg">紅茶風味醇厚，非常適合進行調飲。無論是加入牛奶和糖製成奶茶，還是與各式花草、水果搭配，紅茶都能作為完美的基底，這也是珍珠奶茶、花果茶等流行飲品多以紅茶為本的原因。</span>
                                </li>
                                <li className="relative pl-6 border-l border-amber-500/50">
                                    <strong className="text-amber-200 block text-xl mb-2">平均價格親民</strong>
                                    <span className="text-rose-100/80 leading-relaxed block text-base md:text-lg">紅茶的主要產區多位於印度、斯里蘭卡等人工成本相對較低的熱帶地區，使得其平均價格較具競爭力。然而，這並不代表所有紅茶都廉價，頂級莊園紅茶（如大吉嶺春摘）的價格甚至可以媲美奢侈品。</span>
                                </li>
                                <li className="relative pl-6 border-l border-amber-500/50">
                                    <strong className="text-amber-200 block text-xl mb-2">用途廣泛</strong>
                                    <span className="text-rose-100/80 leading-relaxed block text-base md:text-lg">從早餐的提神飲品，到下午茶的社交核心，再到晚餐的佐餐搭配，紅茶在各種餐飲與社交場合中都扮演著不可或缺的角色。</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10">
                            <div className="flex items-center gap-3 mb-8">
                                <Globe className="text-amber-400" size={32} />
                                <h4 className="font-bold text-2xl text-white">從皇室嫁妝到英式下午茶</h4>
                            </div>
                            <div className="space-y-8 text-rose-100/90 text-lg leading-loose">
                                <p>
                                    紅茶在西方世界的流行，始於一場皇室聯姻。17世紀，葡萄牙公主凱薩琳嫁給英國國王查理二世時，將飲用紅茶的習慣作為嫁妝的一部分帶入了英國宮廷。這種來自東方的珍貴飲品迅速在上流社會中蔚為風尚。
                                </p>
                                <p>
                                    隨後，這種飲茶習慣逐漸演變為一種精緻的社交儀式——英式下午茶。貴族名媛們穿著華服，使用精美的骨瓷茶具，搭配三層架上的各式點心，將喝茶變成了一場優雅的社交盛宴。正如一句流傳甚廣的話所描述的：
                                </p>
                                <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-900 p-8 rounded-2xl border border-rose-700/50 shadow-lg">
                                    <p className="text-center font-serif text-2xl md:text-3xl text-amber-200 italic mb-2">
                                        "Three o'clock,<br />time stops for you."
                                    </p>
                                    <p className="text-center text-amber-100/80 text-lg">
                                        「三點一刻，時間因你而停止。」
                                    </p>
                                </div>
                                <p className="text-center text-rose-200/60 text-base">
                                    這句話生動地描繪了下午茶在英國人生活中那份悠閒而神聖的地位。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
