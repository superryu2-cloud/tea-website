import React, { useRef } from 'react';
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
import ReadingAssist from '../../components/ReadingAssist';
import TaiwanBlackTeaHistory from './TaiwanBlackTeaHistory';

export default function BlackTeaVarietiesContent() {
    const contentRef = useRef(null);

    return (
        <div className="animate-fadeIn space-y-12 pb-32 font-sans text-stone-900">

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-200 rounded-[3rem] overflow-hidden p-10 md:p-20 shadow-2xl border border-stone-800">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/images/academy/chonghua-chapter03/historical_tea_trade.png')] bg-cover bg-center opacity-20 mix-blend-overlay grayscale" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-900/30 to-amber-900/20 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-stone-800/80 border border-stone-700 text-rose-300 text-[17px] font-bold tracking-widest uppercase shadow-lg backdrop-blur-md">
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

                    <p className="text-[17px] md:text-[19px] text-stone-400 leading-relaxed max-w-2xl mx-auto font-light border-t border-stone-700/50 pt-8">
                        這不僅是植物的傳播，更是一部交織著貿易、政治與戰爭的宏大敘事。
                    </p>
                </div>
            </div>

            <ReadingAssist contentRef={contentRef} headingSelector="h3, h4" />

            <div ref={contentRef} className="space-y-24">

                {/* 1.0 紅茶品評入門 */}
                <section className="max-w-5xl mx-auto px-4 md:px-0">
                    <div className="flex items-start md:items-center gap-6 mb-12">
                        <span className="text-6xl font-serif text-stone-200 font-bold -mt-4 select-none">01</span>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">紅茶品評入門</h3>
                            <span className="text-[17px] text-stone-500 font-medium tracking-wide">從滋味與外觀談起</span>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-sm relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-64 h-64 opacity-5 pointer-events-none">
                                <img src="/images/academy/chonghua-chapter03/tea_tasting_cups.png" alt="Tea Tasting" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-[17px] text-stone-700 leading-loose relative z-10">
                                品評一杯紅茶，不僅是單純感受其香氣與滋味，更是理解其品種特性、製作工藝與保存狀態的起點。這是一門連結感官與知識的藝術，讓我們得以窺見茶葉從茶園到茶杯的完整旅程。本章節將從學員們親手製作的紅茶初步品評出發，系統性地介紹大葉種紅茶應有的核心滋味特徵，並闡述如何透過觀察茶乾的外觀，對其品質做出專業的初步判斷。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Taste Card */}
                            <div className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white text-rose-800 rounded-2xl shadow-sm"><Coffee size={24} /></div>
                                    <h4 className="text-[19px] font-bold text-stone-800">大葉種紅茶的滋味精髓</h4>
                                </div>
                                <div className="space-y-6 text-stone-700 text-[17px] md:text-[17px] leading-relaxed">
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
                                        <h4 className="text-[19px] font-bold text-white">從茶乾外觀鑑賞紅茶品質</h4>
                                    </div>
                                    <div className="space-y-6 leading-relaxed text-[17px] md:text-[17px]">
                                        <p>
                                            視覺是品評的第一道關卡。優質紅茶的英文名為「Black Tea」，這已然揭示了其理想的外觀標準。頂級的紅茶茶乾，其色澤並非單純的紅色或褐色，而是呈現出一種深邃的<strong className="text-rose-300 font-bold mx-1">「紅到發紫」</strong>，甚至帶有<strong className="text-rose-300 font-bold mx-1">「黑紫光」</strong>的油潤光澤。
                                        </p>
                                        <p>
                                            茶葉的光亮度直接反映了其製作工藝的精湛程度與保存狀況的優劣。在專業儀器的檢測下，光亮度高的茶葉意味著其保鮮度良好。
                                        </p>
                                        <div className="bg-stone-800/50 p-4 rounded-xl border-l-4 border-stone-600">
                                            <p className="text-stone-400 text-[17px]">
                                                反之，若茶乾色澤「暗沉」，則如同保養不當的肌膚，通常代表茶葉在製作或儲存過程中可能因光照等因素產生了劣化。因此，一個油亮、深邃且帶有黑紫光澤的外觀，是高品質紅茶的重要標誌。
                                            </p>
                                        </div>
                                        <p className="text-base text-stone-500 pt-4 border-t border-stone-800">
                                            總而言之，深刻理解紅茶的滋味核心與外觀標準，是邁向專業品評的基石。建立起這套感官標準後，我們便能更有根據地進行沖泡實踐。
                                        </p>
                                    </div>
                                </div>
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
                            <span className="text-[17px] text-stone-500 font-medium tracking-wide">從鴉片戰爭到台灣的阿薩姆</span>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm mb-12">
                        <p className="indent-0 md:indent-8 text-[17px] text-stone-700 leading-loose">
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

                            <div className="space-y-10 text-stone-800 leading-loose text-[17px] relative z-10">
                                <div>
                                    <h5 className="font-bold text-[19px] text-stone-900 mb-3 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
                                        貿易逆差與鴉片戰爭的導火線
                                    </h5>
                                    <p className="text-stone-700">
                                        在19世紀，英國對中國茶葉產生了巨大的消費需求，導致大量的白銀外流，形成了嚴重的貿易逆差。為了扭轉這種不利的經濟局面，英國商人開始向中國大量走私鴉片。因此，茶葉貿易所引發的經濟失衡，成為了鴉片戰爭爆發最根本的導火線。這場戰爭的本質，是一場由茶葉引發的貿易戰爭。
                                    </p>
                                </div>
                                <div className="border-t border-amber-200 pt-8">
                                    <h5 className="font-bold text-[19px] text-stone-900 mb-3 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-amber-500 before:rounded-full">
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
                            <p className="text-stone-700 text-[17px] leading-relaxed pl-4 mb-8">
                                台灣的紅茶發展史，同樣與這段全球茶葉競逐的歷史緊密相連。
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Card 1 */}
                                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-4xl font-black text-rose-100 block mb-4">1925</span>
                                    <h5 className="font-bold text-[19px] text-stone-900 mb-4">空心拐杖的秘密</h5>
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
                                    <h5 className="font-bold text-[19px] text-stone-900 mb-4 relative z-10">魚池的成功</h5>
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
                                    <h5 className="font-bold text-[19px] text-stone-900 mb-4 relative z-10">紅玉的誕生</h5>
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

                {/* 3.5 台灣紅茶百年脈絡 (NEW) */}
                <TaiwanBlackTeaHistory />




                {/* 4.0 解構紅茶 */}
                <section className="bg-stone-50 py-20 rounded-[3rem]">
                    <div className="max-w-5xl mx-auto px-4 md:px-0">
                        <div className="flex items-start md:items-center gap-6 mb-12">
                            <span className="text-6xl font-serif text-stone-300 font-bold -mt-4 select-none">04</span>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">解構紅茶</h3>
                                <span className="text-[17px] text-stone-500 font-medium tracking-wide">品種、分級與加工工藝</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 mb-12 shadow-sm">
                            <p className="indent-0 md:indent-8 text-[17px] text-stone-700 leading-loose">
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
                                <div className="space-y-12">
                                    {/* Intro Text - Preserved */}
                                    <div className="text-[17px] leading-relaxed space-y-6 text-stone-700 max-w-none leading-loose">
                                        <p>
                                            大葉種與小葉種的根本區別，並非僅僅在於葉片的大小，而是在於其微觀的<strong className="text-stone-900">「細胞組織結構」</strong>。單純從外觀判斷並不可靠，因為「大葉有小時候，小葉有長大」，採摘的嫩度會影響葉片大小。真正的差異在於葉片切片後的內部組織比例。
                                        </p>
                                        <p>
                                            由於大葉種的海綿組織比例遠高於小葉種，使其能夠儲存更豐富的茶多酚、咖啡鹼等內含物質，這也是大葉種紅茶滋味通常更為強勁、飽滿的根本原因。
                                        </p>
                                    </div>

                                    {/* Visual Comparison Cards - Newly Added */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Large Leaf Card */}
                                        <div className="group relative rounded-[2.5rem] overflow-hidden shadow-lg h-96 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                            <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/0 transition-colors duration-700 z-10" />
                                            <img
                                                src="/images/academy/chonghua-chapter03/ruby_tea_leaves.png"
                                                alt="Large Leaf Variety"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115 group-hover:saturate-125 group-hover:brightness-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20 flex flex-col justify-end p-10">
                                                <span className="text-amber-300 font-bold tracking-widest text-sm mb-3 uppercase opacity-90 group-hover:opacity-100 transition-opacity">Large Leaf Variety</span>
                                                <h5 className="text-white font-bold text-3xl md:text-4xl mb-2 group-hover:text-amber-200 transition-colors">大葉種</h5>
                                                <p className="text-stone-300 text-base md:text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">代表：阿薩姆、紅玉</p>
                                            </div>
                                        </div>

                                        {/* Small Leaf Card */}
                                        <div className="group relative rounded-[2.5rem] overflow-hidden shadow-lg h-96 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                            <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/0 transition-colors duration-700 z-10" />
                                            <img
                                                src="/images/academy/chonghua-chapter03/lapsang_souchong_tea.png"
                                                alt="Small Leaf Variety"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115 group-hover:saturate-125 group-hover:brightness-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20 flex flex-col justify-end p-10">
                                                <span className="text-emerald-300 font-bold tracking-widest text-sm mb-3 uppercase opacity-90 group-hover:opacity-100 transition-opacity">Small Leaf Variety</span>
                                                <h5 className="text-white font-bold text-3xl md:text-4xl mb-2 group-hover:text-emerald-200 transition-colors">小葉種</h5>
                                                <p className="text-stone-300 text-base md:text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">代表：正山小種、祁門</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scientific Data Section - Reorganized */}
                                    <div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-12 border border-stone-200">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="p-3 bg-white text-stone-800 rounded-2xl shadow-sm border border-stone-100">
                                                <Microscope size={24} />
                                            </div>
                                            <div>
                                                <h5 className="text-[19px] font-bold text-stone-800">微觀結構與數據實證</h5>
                                                <span className="text-stone-500 text-sm">數據來源：茶葉切片分析</span>
                                            </div>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                                            {/* Cell Diagram */}
                                            <div className="space-y-4">
                                                <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white">
                                                    <img src="/images/academy/zhiya14/leaf_cells.png" alt="Cell Structure" className="w-full h-auto transform hover:scale-105 transition-transform duration-500" />
                                                </div>
                                                <p className="text-center text-sm text-stone-500 font-medium italic bg-white/50 py-2 rounded-full">
                                                    圖示：葉片切片與細胞組織分布差異
                                                </p>
                                            </div>

                                            {/* Table */}
                                            <div className="bg-white rounded-3xl border border-stone-100 overflow-hidden shadow-sm">
                                                <table className="w-full text-left">
                                                    <thead className="bg-stone-50 text-stone-800 border-b border-stone-100">
                                                        <tr>
                                                            <th className="p-5 text-base font-bold">組織類型</th>
                                                            <th className="p-5 text-base font-bold text-stone-500">小葉種</th>
                                                            <th className="p-5 text-base font-bold text-amber-700 bg-amber-50">大葉種</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-stone-100">
                                                        <tr className="group hover:bg-stone-50 transition-colors">
                                                            <td className="p-5 font-bold text-stone-700">海綿組織</td>
                                                            <td className="p-5 text-stone-600">較少</td>
                                                            <td className="p-5 font-black text-amber-700 text-[17px] bg-amber-50 group-hover:bg-amber-100/50 transition-colors">較多</td>
                                                        </tr>
                                                        <tr className="group hover:bg-stone-50 transition-colors">
                                                            <td className="p-5 font-bold text-stone-700">柵狀組織</td>
                                                            <td className="p-5 text-stone-600">2-3 層</td>
                                                            <td className="p-5 text-amber-700 font-medium bg-amber-50 group-hover:bg-amber-100/50 transition-colors">1 層</td>
                                                        </tr>
                                                        <tr className="bg-amber-50/50">
                                                            <td className="p-5" colSpan="3">
                                                                <div className="flex items-start gap-3">
                                                                    <span className="text-[19px]">💡</span>
                                                                    <p className="text-amber-900 text-sm md:text-base leading-relaxed">
                                                                        <strong className="block text-amber-700 mb-1 uppercase tracking-wider text-xs">Impact</strong>
                                                                        柵狀組織呈柱狀排列，層數較多有利芳香物質累積；海綿組織較多者內質物含量較高，滋味較醇厚，但香氣相對較不突出。
                                                                    </p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4.2 Grading */}
                            <div>
                                <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center gap-3">
                                    <Tag className="text-stone-400" size={32} />
                                    國際紅茶分級系統
                                </h4>
                                <p className="text-stone-700 text-[17px] leading-relaxed mb-8">
                                    在國際貿易中，紅茶主要根據加工後茶乾的「外形」進行分級，常見的等級如下：
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
                                        <div className="text-amber-600 font-bold text-[19px] mb-3">條型（原片）</div>
                                        <p className="text-stone-700 leading-relaxed mb-4">
                                            指保留完整葉形的茶葉。等級命名通常以 FOP (Flowery Orange Pekoe) 為基礎，代表含有芽尖的完整葉片。英文字母越多，如 SFTGFOP (Super Fine Tippy Golden Flowery Orange Pekoe)，通常代表等級越高、品質越好。
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
                                        <div className="text-red-700 font-bold text-[19px] mb-3">碎型</div>
                                        <p className="text-stone-700 leading-relaxed mb-4">
                                            指在加工過程中被切碎的茶葉。其等級命名中會出現字母 B，代表 Broken（碎裂），例如 BOP (Broken Orange Pekoe)。碎型茶的滋味釋出速度更快，常用於茶包或調飲。
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm transition-transform hover:-translate-y-1">
                                        <div className="text-stone-800 font-bold text-[19px] mb-3">CTC（顆粒型）</div>
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
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-stone-500 font-bold text-[17px] mb-10 px-4 md:px-20">
                                    <span className="bg-white px-6 py-2 rounded-full shadow-sm">萎凋</span>
                                    <span className="rotate-90 md:rotate-0">→</span>
                                    <span className="bg-white px-6 py-2 rounded-full shadow-sm border border-stone-300">揉捻 (解塊)</span>
                                    <span className="rotate-90 md:rotate-0">→</span>
                                    <span className="bg-amber-100 text-amber-800 px-6 py-2 rounded-full shadow-sm border border-amber-200">補足發酵</span>
                                    <span className="rotate-90 md:rotate-0">→</span>
                                    <span className="bg-white px-6 py-2 rounded-full shadow-sm">乾燥</span>
                                </div>

                                <p className="text-stone-700 text-[17px] leading-relaxed mb-8">
                                    紅茶之所以呈現紅湯紅葉的特徵，關鍵在於其「全發酵」的製作工藝。其中，「揉捻」與「補足發酵」是決定紅茶品質的關鍵環節：
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-stone-400">
                                        <h5 className="font-bold text-stone-900 text-[17px] mb-3">揉捻與解塊</h5>
                                        <p className="text-stone-700 leading-relaxed">
                                            專業製茶的揉捻時間可長達2至3小時，目的是破壞茶葉細胞壁，讓內含物釋出，以利於後續的氧化發酵。在長時間的揉捻過程中，茶葉會因摩擦而升溫結塊，此時必須進行<strong className="text-stone-900">「解塊」</strong>，即將茶葉攤開散熱，以防止葉溫過高產生悶味，確保香氣的純淨。
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-600">
                                        <h5 className="font-bold text-stone-900 text-[17px] mb-3">補足發酵</h5>
                                        <p className="text-stone-700 leading-relaxed">
                                            揉捻後的茶葉會被送入專門的發酵室。發酵室的環境條件極為嚴苛，濕度需高達95%，溫度則恆定控制在24-25°C。在這樣高濕恆溫的環境下，茶葉中的多酚類物質會充分氧化，產生豐富的茶黃質與茶紅質，賦予紅茶獨特的色澤與醇厚滋味。
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-10 text-stone-600 italic text-center text-[17px]">
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
                        <p className="text-[19px] text-stone-600 max-w-3xl mx-auto leading-relaxed">
                            紅茶的沖泡是一門精準的技藝，而非隨意的浸泡。不同的品種、不同的外形，都需要截然不同的對待方式，才能淋漓盡致地展現其最佳風味。本章節將整合講師傳授的核心技巧，提供一個系統性的沖泡指南。
                        </p>
                    </div>

                    <div className="px-4 md:px-12 space-y-16">
                        {/* 5.1 Table */}
                        <div>
                            <h4 className="text-2xl font-bold text-stone-800 mb-6 text-center">核心沖泡參數對照</h4>
                            <p className="text-center text-stone-600 text-[17px] mb-8">大葉種與小葉種紅茶因其內含物質的差異，在沖泡參數上有著明顯的不同。掌握以下核心對照表，是成功沖泡的第一步。</p>

                            <div className="bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden relative">
                                <div className="absolute right-0 top-0 w-48 h-full opacity-5 pointer-events-none">
                                    <img src="/images/academy/chonghua-chapter03/tea_brewing_ceremony.png" alt="Brewing" className="w-full h-full object-cover" />
                                </div>
                                <table className="w-full text-left text-stone-700 relative z-10">
                                    <thead>
                                        <tr className="text-white">
                                            <th className="p-6 bg-stone-800 text-[17px] font-medium w-1/3">沖泡參數</th>
                                            <th className="p-6 bg-rose-900 text-[17px] font-medium w-1/3">小葉種紅茶</th>
                                            <th className="p-6 bg-amber-900 text-[17px] font-medium w-1/3">大葉種紅茶</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-200">
                                        <tr>
                                            <td className="p-6 font-bold bg-stone-50 text-stone-900">置茶量（蓋杯）</td>
                                            <td className="p-6 text-[17px]">1/2 至 1/3</td>
                                            <td className="p-6 text-[17px]">1/3 至 1/4</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-bold bg-stone-50 text-stone-900">建議茶水比</td>
                                            <td className="p-6 text-[17px]">1 : 25</td>
                                            <td className="p-6 text-[17px]">約 1 : 30</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-bold bg-stone-50 text-stone-900">建議水溫</td>
                                            <td className="p-6 text-[17px]">可稍高，約 90-95°C</td>
                                            <td className="p-6 text-[17px]">建議降溫，約 80-90°C</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-bold bg-stone-50 text-stone-900">溫潤泡（洗茶）</td>
                                            <td className="p-6 col-span-2 text-stone-500 italic bg-stone-50/30" colSpan="2">不建議。因紅茶經重度揉捻，精華物質已附著於表面，溫潤泡會流失過多風味。</td>
                                        </tr>
                                        <tr>
                                            <td className="p-6 font-bold bg-stone-50 text-stone-900">第一沖時間</td>
                                            <td className="p-6 text-[17px]">約 40-50 秒</td>
                                            <td className="p-6 text-[17px]">約 35-40 秒</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 5.2 & 5.3 */}
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-lg transition-shadow">
                                <h4 className="font-bold text-[19px] text-stone-800 mb-6 flex items-center gap-3">
                                    <Wind size={24} className="text-sky-600" />
                                    降低澀感的注水技巧
                                </h4>
                                <p className="text-stone-600 mb-6 text-[17px] leading-relaxed">紅茶，特別是大葉種，若沖泡不當容易產生過強的收斂感（澀感）。透過調整注水手法，可以有效控制內含物的釋出速度，讓茶湯更為柔和順口。</p>
                                <div className="space-y-6">
                                    <div className="bg-sky-50/50 p-6 rounded-2xl">
                                        <strong className="block text-sky-900 mb-2 font-bold text-[17px]">1. 沿杯壁注水</strong>
                                        <p className="text-stone-700 leading-relaxed">將熱水沿著蓋杯的內壁緩緩注入，避免水流直接衝擊茶葉。這種方式可以減緩茶葉翻滾，使內含物更溫和、均勻地釋出。</p>
                                    </div>
                                    <div className="bg-sky-50/50 p-6 rounded-2xl">
                                        <strong className="block text-sky-900 mb-2 font-bold text-[17px]">2. 柔化注水弧度</strong>
                                        <p className="text-stone-700 leading-relaxed">採用溫柔、畫圈的方式進行注水，讓水流的衝擊力降至最低。這種手法能讓茶葉在水中舒展得更為自然，茶湯的層次感與平衡感也會隨之提升。</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-lg transition-shadow">
                                <h4 className="font-bold text-[19px] text-stone-800 mb-6 flex items-center gap-3">
                                    <Utensils size={24} className="text-amber-600" />
                                    應對不同外形的器具選擇
                                </h4>
                                <p className="text-stone-600 mb-6 text-[17px] leading-relaxed">紅茶的外形（條型 vs. 碎型/CTC）直接影響了沖泡器具的選擇。</p>
                                <div className="space-y-6">
                                    <div className="bg-amber-50/50 p-6 rounded-2xl">
                                        <strong className="block text-amber-900 mb-2 font-bold text-[17px]">條型紅茶</strong>
                                        <p className="text-stone-700 leading-relaxed">可使用蓋杯、瓷壺等多種器具進行沖泡，能完整展現其葉形與風味變化。</p>
                                    </div>
                                    <div className="bg-amber-50/50 p-6 rounded-2xl">
                                        <strong className="block text-amber-900 mb-2 font-bold text-[17px]">碎型/CTC紅茶</strong>
                                        <p className="text-stone-700 leading-relaxed">由於葉片細碎，使用蓋杯沖泡容易導致茶湯混濁、茶渣過多。因此，應優先選擇<strong className="text-stone-900">「帶有濾網的瓷壺或玻璃壺」</strong>。這類器具能有效過濾茶渣，確保茶湯的清澈度，提升品飲體驗。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-stone-500 font-bold italic text-[17px] opacity-80">
                            精準的沖泡技術能最大化地展現紅茶的優點，而紅茶之所以能風靡全球，也源於其高度的適應性與深厚的文化魅力。
                        </p>
                    </div>
                </section>



                {/* 2.0 專業茶葉評審的嚴謹世界 */}
                <section className="bg-gradient-to-br from-stone-50 via-white to-stone-50 py-24 rounded-[3rem] overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 md:px-12">
                        <div className="flex items-start md:items-center gap-6 mb-16">
                            <span className="text-6xl font-serif text-stone-200 font-bold -mt-4 select-none">02</span>
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2 font-serif">專業評審的嚴謹世界</h3>
                                <div className="h-1 w-20 bg-amber-500 rounded-full mb-2"></div>
                                <span className="text-[17px] text-stone-500 font-medium tracking-wide">Systematic Sensory Evaluation</span>
                            </div>
                        </div>

                        {/* Intro Block with Image */}
                        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
                            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative z-10">
                                <p className="text-[17px] text-stone-700 leading-loose">
                                    專業的茶葉競賽評審，並非僅憑個人喜好，而是一套極其嚴謹且力求客觀的系統化流程。這套體系確保了每一款茶葉都能在公平、一致的標準下被評價，從而篩選出真正的佼佼者。本章節將揭示專業評審流程的內部細節，從標準化的沖泡比例，到主審與副審之間精密的協作規則，全面展現茶葉評鑑的專業性與嚴謹性。
                                </p>
                            </div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-80 lg:h-full group">
                                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src="/images/academy/zhiya14/tea_judging_ghibli.png"
                                    alt="Professional Cupping Setup"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-20">
                            {/* 2.1 Standardized Brewing */}
                            <div className="bg-white rounded-[3rem] border border-stone-200 shadow-sm overflow-hidden">
                                <div className="bg-stone-900 text-stone-200 p-8 md:p-10 flex items-center justify-between">
                                    <h4 className="font-bold text-xl md:text-2xl text-white flex items-center gap-4">
                                        <FlaskConical className="text-amber-400" size={32} />
                                        標準化評審沖泡法 <span className="text-stone-500 text-lg font-normal">(魚池鄉農會標準)</span>
                                    </h4>
                                    <div className="bg-stone-800 p-3 rounded-full text-amber-400">
                                        <Tag size={20} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2">
                                    <div className="p-10 md:p-12 space-y-8">
                                        <p className="text-stone-700 text-[17px] leading-relaxed">
                                            為了確保評鑑的公平性，所有參賽茶樣都必須在完全相同的條件下沖泡。以魚池鄉農會的大葉種紅茶比賽為例，其採用了一套國際通行的標準化沖泡參數。這套「1:50」的沖泡比例，其歷史可追溯至英國殖民印度時期，至今仍是國際紅茶評審的重要基準。
                                        </p>

                                        <div className="space-y-6">
                                            <div className="flex items-center gap-6 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-bold text-stone-900 shadow-sm border border-stone-200">3g</div>
                                                <div>
                                                    <span className="block text-stone-400 text-sm font-bold uppercase tracking-wider">Weight</span>
                                                    <strong className="text-stone-800 text-lg">茶葉克數</strong>
                                                    <p className="text-stone-500 text-sm">精準秤量</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-bold text-stone-900 shadow-sm border border-stone-200">5<span className="text-xs ml-0.5">min</span></div>
                                                <div>
                                                    <span className="block text-stone-400 text-sm font-bold uppercase tracking-wider">Time</span>
                                                    <strong className="text-stone-800 text-lg">沖泡時間</strong>
                                                    <p className="text-stone-500 text-sm">球型茶為 6 分鐘</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl font-bold text-amber-700 shadow-sm border border-amber-200">1:50</div>
                                                <div>
                                                    <span className="block text-amber-400 text-sm font-bold uppercase tracking-wider">Ratio</span>
                                                    <strong className="text-amber-900 text-lg">茶水比例</strong>
                                                    <p className="text-amber-800/70 text-sm">3g : 150c.c.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative h-full min-h-[400px]">
                                        <img
                                            src="/images/academy/zhiya14/tea_brewing_ghibli.png"
                                            alt="Standard Brewing Ratio"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* 2.2 Process Cards */}
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-10 pl-4">
                                    <div className="p-3 bg-stone-900 text-white rounded-xl shadow-lg shadow-stone-900/20">
                                        <Users size={24} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-stone-900">評審現場流程解密</h4>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Card 1 */}
                                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
                                        <div className="absolute right-0 top-0 w-40 h-40 bg-stone-100 rounded-bl-[100%] transition-colors group-hover:bg-amber-50" />
                                        <div className="relative z-10">
                                            <span className="text-6xl font-black text-stone-200 absolute -top-4 -left-2 z-0 opacity-50">01</span>
                                            <div className="mb-6 pt-4 relative z-10">
                                                <h5 className="text-xl font-bold text-stone-900 mb-2">初步聞香判斷</h5>
                                                <p className="text-stone-700 leading-relaxed">
                                                    主審會率先巡視所有茶樣，進行第一輪聞香。他們會根據香氣的品質，透過移動茶杯的位置來進行初步分級。例如，將聞起來「不錯」的茶杯向前推一個身位；若覺得「很好」，則會再往前推，以此作為初步的排序依據。
                                                </p>
                                            </div>
                                            <div className="h-48 rounded-2xl overflow-hidden mt-6 mb-2">
                                                <img src="/images/academy/zhiya14/tea_smelling_ghibli.png" alt="Sensory Evaluation" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
                                        <div className="absolute right-0 top-0 w-40 h-40 bg-stone-100 rounded-bl-[100%] transition-colors group-hover:bg-rose-50" />
                                        <div className="relative z-10 flex flex-col h-full justify-between">
                                            <div>
                                                <span className="text-6xl font-black text-stone-200 absolute -top-4 -left-2 z-0 opacity-50">02</span>
                                                <div className="mb-4 pt-4 relative z-10">
                                                    <h5 className="text-xl font-bold text-stone-900 mb-2">品飲滋味複審</h5>
                                                    <p className="text-stone-700 leading-relaxed">
                                                        聞香結束後，評審會開始品嚐茶湯。此時，他們會驗證聞香的感受與實際品飲的滋味是否一致。如果聞起來香氣優異但喝起來滋味平淡，茶樣的評級就可能會被「推回」原位或降級。
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100 mt-4">
                                                <div className="flex items-center gap-3 text-rose-800 font-bold mb-2">
                                                    <AlertTriangle size={18} />
                                                    <span>Critical Check</span>
                                                </div>
                                                <p className="text-sm text-rose-700">香氣與滋味是否一致是關鍵判斷點。</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-stone-50 p-8 rounded-[2.5rem] border border-stone-200 hover:bg-white transition-colors group">
                                        <span className="text-6xl font-black text-stone-200 absolute top-8 right-8 opacity-50">03</span>
                                        <h5 className="text-xl font-bold text-stone-900 mb-4 pt-2">主副審協作規則</h5>
                                        <div className="w-12 h-1 bg-stone-300 rounded-full mb-6 group-hover:w-24 transition-all duration-500" />
                                        <p className="text-stone-700 leading-relaxed">
                                            副審的角色是輔助與複核。他們跟隨主審的腳步，但不能擅自移動主審已定位的茶杯。如果副審對某個茶樣的評級有不同意見，他們會將杯子稍微移動到邊緣一點，作為標記，以便後續所有評審共同討論。這種嚴格的紀律確保了主審判斷的權威性與流程的順暢。
                                        </p>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="bg-stone-50 p-8 rounded-[2.5rem] border border-stone-200 hover:bg-white transition-colors group">
                                        <span className="text-6xl font-black text-stone-200 absolute top-8 right-8 opacity-50">04</span>
                                        <h5 className="text-xl font-bold text-stone-900 mb-4 pt-2">安全聞香技巧</h5>
                                        <div className="w-12 h-1 bg-stone-300 rounded-full mb-6 group-hover:w-24 transition-all duration-500" />
                                        <p className="text-stone-700 leading-relaxed">
                                            為了保護評審寶貴的嗅覺，茶湯沖泡好後並不會立即聞香。評審會等待約六分鐘，讓茶湯溫度降至 50-60°C 的安全範圍。這個溫度不僅能避免高溫傷害鼻腔，也是最能清晰感受茶葉香氣的理想溫度。
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-12 text-center text-stone-500 leading-relaxed italic border-t border-stone-200 pt-8 max-w-3xl mx-auto">
                                    這套嚴謹的評審系統，從標準化的沖泡到層層遞進的感官審核，確保了紅茶品質的客觀評價。而這些被精心評鑑的紅茶，其背後更承載著一段波瀾壯闊的全球傳播史。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6.0 紅茶的文化意涵 */}
                <section className="max-w-5xl mx-auto px-4 md:px-0">
                    <div className="flex items-start md:items-center gap-6 mb-12">
                        <span className="text-6xl font-serif text-stone-300 font-bold -mt-4 select-none">06</span>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">文化意涵與全球影響力</h3>
                            <span className="text-[17px] text-stone-500 font-medium tracking-wide">從皇室嫁妝到英式下午茶</span>
                        </div>
                    </div>

                    <div className="text-[17px] leading-relaxed space-y-6 text-stone-700 max-w-none leading-loose mb-12 bg-white p-10 rounded-3xl border border-stone-200/60 shadow-sm relative overflow-hidden">
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
                                <p className="text-rose-100/80 mb-8 text-[17px] leading-relaxed">
                                    據統計，紅茶的消費量佔全球茶葉總消費量高達 65-70%。換言之，每十個喝茶的人中，就有近七位選擇的是紅茶。其廣受歡迎的原因主要有以下四點：
                                </p>
                                <ul className="space-y-8">
                                    <li className="relative pl-6 border-l border-amber-500/50">
                                        <strong className="text-amber-200 block text-[19px] mb-2">易於保存</strong>
                                        <span className="text-rose-100/80 leading-relaxed block text-[17px] md:text-[17px]">相較於綠茶和烏龍茶，全發酵的紅茶性質更為穩定，能夠承受長途海上運輸的考驗而不易變質，這使其在地理大發現時代成為國際貿易的寵兒。</span>
                                    </li>
                                    <li className="relative pl-6 border-l border-amber-500/50">
                                        <strong className="text-amber-200 block text-[19px] mb-2">沖泡包容性高</strong>
                                        <span className="text-rose-100/80 leading-relaxed block text-[17px] md:text-[17px]">紅茶風味醇厚，非常適合進行調飲。無論是加入牛奶和糖製成奶茶，還是與各式花草、水果搭配，紅茶都能作為完美的基底，這也是珍珠奶茶、花果茶等流行飲品多以紅茶為本的原因。</span>
                                    </li>
                                    <li className="relative pl-6 border-l border-amber-500/50">
                                        <strong className="text-amber-200 block text-[19px] mb-2">平均價格親民</strong>
                                        <span className="text-rose-100/80 leading-relaxed block text-[17px] md:text-[17px]">紅茶的主要產區多位於印度、斯里蘭卡等人工成本相對較低的熱帶地區，使得其平均價格較具競爭力。然而，這並不代表所有紅茶都廉價，頂級莊園紅茶（如大吉嶺春摘）的價格甚至可以媲美奢侈品。</span>
                                    </li>
                                    <li className="relative pl-6 border-l border-amber-500/50">
                                        <strong className="text-amber-200 block text-[19px] mb-2">用途廣泛</strong>
                                        <span className="text-rose-100/80 leading-relaxed block text-[17px] md:text-[17px]">從早餐的提神飲品，到下午茶的社交核心，再到晚餐的佐餐搭配，紅茶在各種餐飲與社交場合中都扮演著不可或缺的角色。</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10">
                                <div className="flex items-center gap-3 mb-8">
                                    <Globe className="text-amber-400" size={32} />
                                    <h4 className="font-bold text-2xl text-white">從皇室嫁妝到英式下午茶</h4>
                                </div>
                                <div className="space-y-8 text-rose-100/90 text-[17px] leading-loose">
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
                                        <p className="text-center text-amber-100/80 text-[17px]">
                                            「三點一刻，時間因你而停止。」
                                        </p>
                                    </div>
                                    <p className="text-center text-rose-200/60 text-[17px]">
                                        這句話生動地描繪了下午茶在英國人生活中那份悠閒而神聖的地位。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7.0 蜜香紅茶 */}
                <section className="max-w-5xl mx-auto px-4 md:px-0">
                    <div className="flex items-start md:items-center gap-6 mb-12">
                        <span className="text-6xl font-serif text-stone-300 font-bold -mt-4 select-none">07</span>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2 font-serif">蜜香紅茶的起源秘密</h3>
                            <span className="text-[17px] text-stone-500 font-medium tracking-wide">小綠葉蟬與舞鶴台地的生態傳奇</span>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {/* 1.0 Intro */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
                                <img src="/images/academy/chonghua-chapter03/organic_tea_garden.png" alt="Organic Tea Garden" className="w-full h-full object-cover" />
                            </div>
                            <h4 className="font-bold text-[19px] text-stone-800 mb-6 flex items-center gap-3 relative z-10">
                                <Sprout className="text-emerald-600" size={28} />
                                蜜香之源：從「蟲害危機」誕生的天然風味
                            </h4>
                            <p className="text-[17px] text-stone-700 leading-loose relative z-10 mb-6">
                                蜜香紅茶的誕生，堪稱台灣茶業史上最具顛覆性的轉折。在追求極致感官體驗的精品茶市場中，這款茶常因其醇厚的蜂蜜甜香引人遐想，不少初識者誤以為是製程中添加了蜂蜜，或是仰賴某種神祕的加味工藝。然而，真正的蜜香並非外求，而是源於一場大自然與生態博弈下的「危機轉型」。
                            </p>
                            <p className="text-[17px] text-stone-700 leading-loose relative z-10">
                                蜜香紅茶的核心精髓，源自於茶農一度視為夢魘的「小綠葉蟬」蟲害。這並非單純的製茶改良，而是一次戰略性的視角切換：將傳統農業觀點中的「天災」轉化為「至寶」。這種「由損害成就極致」的邏輯，不僅確立了蜜香紅茶在精品市場的稀缺價值，更定義了其作為生態與工藝結合的獨特地位。要透析這場感官饗宴，必須先深入了解這場生態變革的核心主角。
                            </p>
                        </div>

                        {/* 2.0 Eco Protagonist */}
                        <div className="bg-stone-50 p-8 md:p-12 rounded-[3rem] border border-stone-200">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-emerald-100 text-emerald-800 rounded-full"><Microscope size={28} /></div>
                                <h4 className="text-2xl font-bold text-stone-900">生態主角：小綠葉蟬的生物特性與感官貢獻</h4>
                            </div>
                            <div className="text-[17px] leading-relaxed space-y-6 text-stone-700 max-w-none leading-loose">
                                <p className="mb-6">
                                    在專業的品質控管領域，理解小綠葉蟬（學名：Jacobiasca formosana，俗稱小綠浮塵子）的生命週期是關鍵。這種體型微小的生物，生命週期僅約數十天，雖全年皆能見其蹤跡，但每年的 5 月至 7 月是其繁衍與活動的高峰期。
                                </p>
                                <p>
                                    小綠葉蟬採「刺吸式」口器吸取茶樹幼嫩芽葉的汁液。受害的茶葉會顯現出捲曲、皺縮、萎凋及生長停滯等病理徵狀。對早期追求產量最大化的茶農而言，這無疑是一場農業災難，因為受傷的茶菁會導致產量急遽下降，造成直接的經濟損失。然而，正是這種生長停滯，促使葉片內部的化學物質開始濃縮與轉化，為後續的神祕蜜味埋下了伏筆。這場農業災難並未讓產業止步，反而成為推動製茶技術革命的催化劑。
                                </p>
                            </div>
                        </div>

                        {/* 3.0 & 4.0 Timeline/Geography */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-[19px] text-stone-800 mb-6 flex items-center gap-2">
                                    <FlaskConical className="text-amber-500" size={24} />
                                    研發里程碑：從實驗室到茶園
                                </h4>
                                <p className="text-stone-700 leading-relaxed text-[17px]">
                                    在傳統產業面臨結構性瓶頸時，技術研發往往是化腐朽為神奇的動力。1990 年代末期，台東茶葉改良場的陳惠藏課長開啟了一項具備產業前瞻性的研究。陳課長的技術邏輯在於「工藝優化與製程適配性」：他借鑒百年「東方美人茶」的原理，將同樣受過小綠葉蟬吸食的茶菁，嘗試製成發酵綠茶及全發酵的紅茶。實驗成品令人驚艷，茶湯不僅具備天然的蜂蜜香氣，且相較於工序極其繁瑣的傳統烏龍茶，蜜香紅茶的生產模式具備更高的 sensory value（感官價值）與成本競爭力。儘管技術研發大獲成功，但在缺乏區域品牌與風土故事的支撐下，蜜香紅茶初期面臨了嚴重的市場推廣瓶頸。直到這項技術遇見了花蓮舞鶴台地，才真正找到了屬於它的舞台。
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-[19px] text-stone-800 mb-6 flex items-center gap-2">
                                    <Map className="text-rose-500" size={24} />
                                    地理與歷史契機：舞鶴台地的差異化生存之道
                                </h4>
                                <p className="text-stone-700 leading-relaxed text-[17px]">
                                    舞鶴台地位於紅葉溪與秀姑巒溪的交會處，海拔約 100 至 300 公尺，地理環境得天獨厚。回顧其產業史，從早期的咖啡、香茅到鳳梨，舞鶴一直扮演著多元農產的重鎮。1970 年代，在政策引導下轉植茶葉，並由時任農發會主委李崇道博士命名為「天鶴茶」，曾有一段輝煌歲月。然而，1990 年代高山茶的強勢崛起，對中低海拔的舞鶴茶造成了毀滅性的擠壓，銷量大幅萎縮，農民被迫棄耕。這種產業轉型期的陣痛，雖然令地方經濟受挫，卻也迫使農民在絕境中尋求「差異化」的道路，而這股求變的勇氣，最終與蜜香技術產生了完美的化學反應。當產業轉向尋求突破時，一項環境保護政策的推動，意外地開啟了蜜香紅茶與自然共榮的新時代。
                                </p>
                            </div>
                        </div>

                        {/* 5.0 & 6.0 Ecology & Value */}
                        <div className="bg-emerald-950 text-emerald-50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
                                <img src="/images/academy/chonghua-chapter03/honey_black_tea.png" alt="Honey Black Tea" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div className="relative z-10 space-y-12">
                                <div>
                                    <h4 className="text-2xl font-serif font-black mb-6 text-white flex items-center gap-3">
                                        <Globe size={28} className="text-emerald-400" />
                                        無毒農業的推動：從抗拒害蟲到生態共榮
                                    </h4>
                                    <div className="space-y-6 text-emerald-100/90 text-[17px] leading-loose">
                                        <p>
                                            2003 年，花蓮縣長謝深山與農發處長杜立華推動「無毒農業」政策，這成為蜜香紅茶命運的轉折點。當時舞鶴茶葉產銷班班長高肇昫率先響應，停止在茶園施用殺蟲劑。停藥後，小綠葉蟬如預期般爆發，茶園滿目瘡痍。
                                        </p>
                                        <p>
                                            面對被蟲叮咬後的「大葉烏龍」茶菁，高班長應用先前向成會長學習的技術進行試製，結果大獲全勝。這段過程揭示了一個深層的戰略邏輯：「無毒耕作」不僅是為了環保，更是蜜香品質的絕對先決條件。唯有維持健康的生態鏈，小綠葉蟬才能生存，進而引發那股神祕的蜜香。這種從「對抗自然」到「擁抱生態」的思維轉變，成為高品質蜜香紅茶的立足基石。
                                        </p>
                                        <p>
                                            這場源於土地的創新實驗，很快就在國際舞台上轉化為真實的品牌價值。
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t border-emerald-800/50 pt-10">
                                    <h4 className="text-2xl font-serif font-black mb-6 text-white flex items-center gap-3">
                                        <Award size={28} className="text-amber-400" />
                                        榮耀與產值提升：反直覺的因果經濟
                                    </h4>
                                    <div className="space-y-6 text-emerald-100/90 text-[17px] leading-loose">
                                        <p>
                                            權威獎項是將農產品轉化為精品品牌的強力槓桿。2006 年，高肇昫憑藉蜜香紅茶奪得首屆天下名茶大賽紅茶組金牌；2010 年，其親戚粘阿瑞女士更在國際名茶評比中橫掃四面金牌。
                                        </p>
                                        <p>
                                            媒體的接連報導引發了市場的狂熱，蜜香紅茶身價倍增。更重要的是，這在產業內建立了一套反直覺的因果關係：「蟲害越嚴重，茶香越濃郁」。由於受害嚴重的茶菁能轉化為單價更高的優質茶，茶農更願意堅持無毒、有機的經營，成功實現了經濟收益與生態保育的正向循環。
                                        </p>
                                        <p>
                                            在商業成功的背後，科學界也終於解開了蜜香生成的生物化學密碼，確認這並非偶然的產物。
                                        </p>
                                    </div>
                                    <div className="bg-emerald-900/50 p-6 rounded-2xl mt-8 border border-emerald-700/50">
                                        <p className="text-center text-[19px] font-bold text-emerald-200">
                                            「蟲害越嚴重，茶香越濃郁」
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 7.0 Science */}
                        <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-stone-200 shadow-sm">
                            <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center gap-3">
                                <FlaskConical size={32} className="text-purple-600" />
                                科學解密：茶樹與昆蟲的「生物性握手」
                            </h4>
                            <div className="text-[17px] leading-relaxed space-y-6 text-stone-700 max-w-none leading-loose">
                                <p className="mb-6">
                                    蜜香的真相，實際上是茶樹精妙的「求救信號」。根據中國農業科學院茶葉研究所陳宗懋先生的研究，當茶樹遭受小綠葉蟬叮咬時，會啟動自我保護機制，分泌出揮發性化學成分（揮發性萜類化合物等）。這些成分散發的香氣，是為了吸引小綠葉蟬的天敵——「白斑蠟蛛」（White-spotted wax spider）前來捕食害蟲，這是一種精準的生物控制策略。
                                </p>
                                <p>
                                    科學實驗證實，單純以物理方式（如昆蟲針刺）模擬損傷，無法讓茶樹產生特定的蜜香成分。關鍵在於<strong className="text-purple-800 font-bold mx-1">「小綠葉蟬的口腔分泌物（唾液）」</strong>。當唾液中的特定酵素與茶樹組織接觸後，才會觸發那股不可複製的天然蜜香。這種「生物性握手」讓蜜香紅茶具備了極高的進入壁壘——它無法被人工合成或化學模擬，是純粹的大自然結晶。
                                </p>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="text-center max-w-4xl mx-auto py-12">
                            <Feather size={32} className="mx-auto text-stone-400 mb-6" />
                            <h4 className="text-2xl font-serif font-bold text-stone-800 mb-6">結語</h4>
                            <p className="text-[19px] text-stone-600 leading-relaxed italic font-light">
                                蜜香紅茶的傳奇，是生態、技術與勇氣結合的結晶。它代表了一種全新的農業思維：將大自然的考驗視為賦予價值的契機。這不僅是一款琥珀色茶湯的誕生，更是一個區域產業在逆境中重生的史詩。當我們品飲這抹天然蜜香時，所感知的正是台灣茶業在永續耕作與職人工藝中，對土地最深情的表白。
                            </p>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
}



