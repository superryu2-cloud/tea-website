import React from 'react';
import { BookOpen, Coffee, Feather, Map, Scroll, Thermometer, Flame, Scale, Sprout, Award, Info, Droplets } from 'lucide-react';

export default function TieGuanyinContent() {
    return (
        <div className="animate-fadeIn space-y-12">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950/90 text-stone-100 rounded-3xl overflow-hidden p-8 md:p-16 border border-stone-800 shadow-2xl">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-600/20 to-orange-900/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-stone-800/50 to-amber-900/20 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-700/50 text-amber-200 text-sm font-bold shadow-sm backdrop-blur-sm mb-6">
                        <Flame size={14} className="text-amber-500" />
                        <span className="tracking-widest">重焙火・重喉韻</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 leading-tight mb-8 drop-shadow-sm">
                        木柵鐵觀音
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-300 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
                        「美如觀音，重似鐵」。<br className="md:hidden" />台灣特色茶裡焙火最重、喉韻最強的一種茶。<br />
                        <span className="text-base md:text-lg mt-4 block opacity-80 border-t border-stone-700 pt-4 max-w-2xl mx-auto">
                            水色琥珀帶油光，火侯十足是它的特徵，風頭穩健，就像一位歷經滄桑的「中年男人」。
                        </span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">

                {/* Visual Feature: Roasted Tea Image */}
                <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-800 group relative h-72 md:h-96">
                    <img
                        src="/images/featured/tieguanyin/tieguanyin_orchid_ethereal.png"
                        alt="Ethereal Iron Goddess"
                        className="w-full h-full object-cover object-top transform transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                    <div className="absolute bottom-6 left-8 right-8 text-white">
                        <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 inline-block max-w-2xl">
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 text-amber-400">
                                <Flame className="text-amber-500" /> 沉穩如鐵，溫潤如玉
                            </h3>
                            <p className="text-stone-200 opacity-90 leading-relaxed text-base md:text-lg">
                                火侯十足的重烘焙工藝，賦予鐵觀音獨特的「弱果香」與「觀音韻」。葉片捲曲緊結，色澤烏潤，沉重似鐵。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Left Column: Definition & Origin */}
                <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
                        <div className="p-3 bg-amber-50 text-amber-700 rounded-xl">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">品種 vs 製法：釐清定義</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <p className="text-stone-600 leading-relaxed font-medium text-lg">
                                鐵觀音原是<strong>茶樹品種</strong>的名稱，但在台灣，「鐵觀音」通常指的是<strong>「依照鐵觀音特定作法製成的茶類」</strong>。
                            </p>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                            <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-600 flex gap-4">
                                <div className="mt-1"><StarIcon className="text-amber-600" size={20} /></div>
                                <div>
                                    <strong className="text-amber-900 block text-lg mb-1">正欉鐵觀音</strong>
                                    <span className="text-stone-700">指真正使用「紅心歪尾桃」這種鐵觀音茶樹製作的茶。此樹種「好喝不好栽」，適應性低、產量少、價格高，成品茶品質優異。</span>
                                </div>
                            </div>
                            <div className="bg-stone-50 p-5 rounded-xl border-l-4 border-stone-400 flex gap-4">
                                <div className="mt-1"><Award className="text-stone-500" size={20} /></div>
                                <div>
                                    <strong className="text-stone-900 block text-lg mb-1">一般鐵觀音</strong>
                                    <span className="text-stone-700">以金萱、武夷、梅占或硬枝紅心（如石門鐵觀音）等其他品種，配合鐵觀音的重烘焙製法製作而成。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 品種基本性狀鑑定 - Table Redesigned */}
                <section className="bg-gradient-to-br from-stone-50 to-white p-2 rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
                    <div className="p-6 md:p-10">
                        <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Scale className="mr-3 text-amber-700" /> 鐵觀音品種基本性狀鑑定
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-8 max-w-3xl">
                            建立茶樹品種的性狀鑑定體系，不僅是為了區分名實，更是構築茶葉產量與品質穩定性的戰略基石。在茶學研究中，唯有透過精確的植物學參數審核，方能確保後續加工工藝與原料特性達到完美契合。
                        </p>

                        <div className="overflow-hidden rounded-xl border border-stone-200 shadow-sm bg-white">
                            <div className="p-4 bg-stone-100 border-b border-stone-200">
                                <h4 className="font-extrabold text-stone-800 flex items-center gap-2">
                                    <Sprout size={18} className="text-amber-600" />
                                    鐵觀音（紅心歪尾桃）品種技術參數
                                </h4>
                            </div>
                            <table className="w-full text-base md:text-lg">
                                <tbody className="divide-y divide-stone-100">
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50 w-32 md:w-48 whitespace-nowrap">命名</td>
                                        <td className="p-4 text-stone-800 font-bold">鐵觀音</td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50">葉種</td>
                                        <td className="p-4 text-stone-800">外來小葉種（相對於產區原生野茶，由外部引進之優良品種）</td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50 align-top">茶樹特徵</td>
                                        <td className="p-4 text-stone-700">
                                            <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>橫張型：</strong>樹冠開張，枝條向四周擴展</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>葉面隆起：</strong>葉片表面呈明顯波浪狀隆起</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>側脈：</strong>側脈深陷，呈皺紋狀</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>節間：</strong>節間長度較長</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>葉尾：</strong>葉尖端下垂且向一側凹彎（歪尾）</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>面質：</strong>葉面具綢緞般的油光質感（綢緞面）</span></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50">採摘節氣</td>
                                        <td className="p-4 text-stone-800">晚生種（生長週期長，物質累積豐富）</td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50">血緣起源</td>
                                        <td className="p-4 text-stone-800">福建安溪</td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50">品種香型</td>
                                        <td className="p-4 text-stone-800">蘭花香、桂花香、弱果香</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 bg-amber-50/50 p-6 rounded-2xl border border-amber-100 flex gap-4">
                            <Info className="text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                                <h5 className="font-extrabold text-stone-900 mb-2 text-lg">生理特徵與辨識意義</h5>
                                <p className="text-stone-700 leading-relaxed">
                                    上述生理特徵中，「葉尾凹彎」與「節間長」是鑑定品種純正性的關鍵標記。葉面的波浪隆起與綢緞面質，在植物解剖學上反映了其葉肉組織的緊密程度，這直接決定了茶青在萎凋過程中的「走水」速率。透過這些穩定的遺傳特徵鑑定，能有效區分替代品種，確保產出品質的恆定性。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 品種定義與音韻之源 & 植物生理特徵 */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Definitions */}
                    <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                            <BookOpen className="mr-3 text-amber-700" /> 品種定義與「音韻」之源
                        </h3>
                        <div className="space-y-4 text-stone-600 leading-relaxed">
                            <p>
                                在茶學專業論述中，明確區分「茶名」與「茶樹名」是確保學術嚴謹性的必要前提。鐵觀音一詞兼具成品茶名與茶樹品種名雙重身分，但在品種學層面，其正統定義特指以安溪西坪「紅心歪尾鐵觀音」為苗木母樹的原生品種。
                            </p>
                            <p>
                                西坪堯陽一帶被公認為鐵觀音的發源地，當地所產出的品種最具備正統的「音韻」風格。這種所謂的「音韻」，本質上是品種品質特性的「遺傳保守性」與特定微氣候環境共同作用的表現。正是因為紅心歪尾桃在遺傳上表現出極強的穩定性與排他性，才使其在安溪特定的地理環境中，能將最原始、最純粹的風味物質完整保留並呈現。
                            </p>
                        </div>
                    </section>

                    {/* Physiology */}
                    <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                            <Sprout className="mr-3 text-amber-700" /> 植物生理特徵
                        </h3>
                        <p className="text-stone-600 mb-4 text-sm">紅心歪尾桃的獨特外觀與內部結構，為其滋味提供了強大的生物學支撐。</p>

                        <div className="space-y-3">
                            <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                                <h5 className="font-bold text-rose-900 mb-1 text-sm">1. 紅芽（視覺色彩）</h5>
                                <p className="text-xs text-stone-600">
                                    春季茶芽萌發時，全株呈現紫紅色。與多酚類物質代謝相關。
                                </p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                <h5 className="font-bold text-blue-900 mb-1 text-sm">2. 歪尾（形態非對稱性）</h5>
                                <p className="text-xs text-stone-600">
                                    葉片與芽尖非對稱生長，明顯向一側歪斜，故名「歪尾」。
                                </p>
                            </div>
                            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                <h5 className="font-bold text-emerald-900 mb-1 text-sm">3. 葉片肥厚（解剖學優勢）</h5>
                                <p className="text-xs text-stone-600">
                                    相比其他品種，葉片更顯橢圓且質地極為肥厚，物質基礎更紮實。
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-stone-100">
                            <p className="text-xs text-stone-500 leading-relaxed italic">
                                * 肥厚的葉片能儲存更全面的營養元素。這導致其製成茶後滋味醇厚、香氣層次豐富，展現「撩人勁十足」的感官衝擊力。
                            </p>
                        </div>
                    </section>
                </div>

                {/* 品種差異分析 - Renamed Section */}
                <section className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6">「紅心歪尾桃」與同類品種之差異</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        品種純度是烏龍茶製作工藝中的靈魂。根據栽培記錄與感官評審，鐵觀音家族內部存在顯著的層級劃分：
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 mb-8">
                        <div className="bg-white p-6 rounded-2xl border-2 border-amber-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-amber-500 text-white text-xs font-bold rounded-bl-lg z-10">最優</div>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-full blur-2xl -mr-8 -mt-8"></div>
                            <h4 className="font-extrabold text-amber-900 mb-3 text-xl relative z-10">紅心鐵觀音<span className="text-sm font-normal block text-amber-700">（紅心歪尾桃）</span></h4>
                            <p className="text-stone-700 leading-relaxed relative z-10">
                                安溪本地人尊稱為「紅芽歪尾桃」，被公認為鐵觀音體系中最古老、最優秀的純種血脈。它是製作頂級烏龍茶的特優品種。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                            <h4 className="font-extrabold text-stone-900 mb-3 text-xl">同類變異品種<span className="text-sm font-normal block text-stone-500">（青心、長葉、圓葉）</span></h4>
                            <p className="text-stone-700 leading-relaxed">
                                儘管這三者在生物分類上亦屬於鐵觀音範疇，但在栽培適應性及製茶品質的穩定性上表現趨同，缺乏紅心品種那種驚豔的層次感。
                            </p>
                        </div>
                    </div>

                    <div className="bg-stone-200/50 p-6 rounded-2xl border border-stone-300">
                        <h5 className="font-extrabold text-stone-900 mb-2 flex items-center gap-2">
                            <Scale size={20} className="text-stone-600" />
                            「好喝不好栽」的供需辯證
                        </h5>
                        <p className="text-stone-700 leading-relaxed">
                            魯迅先生曾謂：「物以稀為貴。」這正是紅心歪尾桃身價不凡的寫照。該品種天性嬌弱、易受病蟲害侵襲且產量有限，在茶業界素有「好喝不好栽」的說法。這種栽培難度與卓越品質之間的矛盾，反而墊高了其名貴價值。正因其生長緩慢、環境挑剔，才使得其內含物質的轉化更加深邃。
                        </p>
                    </div>
                </section>

                {/* 產地分布規律 */}
                <section className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <Map className="mr-3 text-stone-600" /> 產地分布規律與兩岸引種歷史
                    </h3>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-gradient-to-br from-stone-50 to-white p-6 rounded-2xl border border-stone-100">
                            <h5 className="font-extrabold text-stone-900 mb-4 text-lg">安溪境內品種分布</h5>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-12 text-center mr-3">
                                        <span className="block text-2xl font-black text-emerald-600">60%</span>
                                        <span className="text-[10px] text-stone-400 uppercase">紅心純種</span>
                                    </div>
                                    <p className="text-sm text-stone-600 mt-1">安溪境內鐵觀音中，紅心純種占60%，長葉種25%，圓葉種15%。</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 text-center mr-3">
                                        <span className="block text-2xl font-black text-emerald-600">70%</span>
                                        <span className="text-[10px] text-stone-400 uppercase">核心區</span>
                                    </div>
                                    <p className="text-sm text-stone-600 mt-1">內安溪核心產茶鎮（祥華、感德等），紅心純種率可達 70% 左右，奠定高品質基礎。</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                            <h5 className="font-extrabold text-blue-900 mb-4 text-lg">兩岸引種歷史與正欉辨析</h5>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">
                                台灣鐵觀音的發展亦有一段嚴謹的歷史考證。日治時期，木柵茶葉公司委託茶師張迺妙、張迺乾赴安溪取回苗木，種植於木柵樟湖山（今指南里）。
                            </p>
                            <p className="text-sm text-stone-700 leading-relaxed p-3 bg-white/60 rounded-lg">
                                <span className="font-bold block mb-1 text-blue-800">學術觀點：</span>
                                民間多認為引進的是紅心鐵觀音，但茶學專家吳振鐸考究指出，早期引進木柵的品種亦可能包含青心鐵觀音。即便存在爭議，木柵作為台灣鐵觀音發展基地的地位不容動搖。
                            </p>
                        </div>
                    </div>
                </section>


                {/* Characteristics */}
                <section className="bg-stone-900 text-stone-200 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-900/40 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center relative z-10">
                        <Feather className="mr-3 text-amber-500" /> 特色與風味：觀音韻與音韻
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="p-2 bg-stone-800 rounded-lg text-stone-400"><Award size={20} /></span>
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide mb-1">外型</span>
                                    <span className="text-stone-100 font-medium text-lg">捲曲球型，茶色暗綠帶褐，沉重似鐵。</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="p-2 bg-stone-800 rounded-lg text-stone-400"><Coffee size={20} /></span>
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide mb-1">茶湯</span>
                                    <span className="text-stone-100 font-medium text-lg">琥珀色濃豔清澈，帶有油光。</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="p-2 bg-stone-800 rounded-lg text-stone-400"><Flame size={20} /></span>
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide mb-1">香氣</span>
                                    <span className="text-stone-100 font-medium text-lg">濃郁果香（熟果）與火香（焙火味）。</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-amber-700 to-amber-900 p-8 rounded-2xl flex flex-col justify-center text-center shadow-lg border border-amber-600/30">
                            <p className="text-3xl font-serif text-amber-100 font-bold mb-4">「音韻」</p>
                            <p className="text-base text-amber-200 leading-relaxed">
                                入口微苦後轉甘，滋味醇厚，齒頰留香。<br />
                                從淡淡花香到濃郁熟果香，變化極富層次。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Craft - The Art of Fire */}
                <section className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
                        <div className="p-3 bg-amber-50 text-amber-700 rounded-xl">
                            <Flame size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">時間與火的煉金術</h3>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden mb-8 shadow-md group">
                        <img
                            src="/images/featured/tieguanyin/traditional_charcoal_roasting.png"
                            alt="Traditional Charcoal Roasting"
                            className="w-full h-72 object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6">
                            <p className="text-white/90 font-medium italic text-lg shadow-black drop-shadow-md">「焙火，不僅是乾燥，更是透過火溫雕琢風味的藝術。」</p>
                        </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-stone-700 text-lg">
                        如果說「弱果酸」是鐵觀音靈動、鮮活的一面，那麼「焙火香」則是其沉穩、醇厚的底蘊。在精準的溫度與時間控制下，茶葉中的醣類與胺基酸會發生兩種關鍵的化學變化：<span className="font-bold text-amber-800">梅納反應 (Maillard reaction)</span> 與 <span className="font-bold text-amber-800">焦糖化 (Caramelization)</span>。這兩種反應共同創造出一系列全新的芳香化合物，將茶葉原有的花果香，轉化為更為複雜、溫暖的焙烤香氣，這正是鐵觀音風味醇厚甘美的秘密所在。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 flex items-center gap-2 text-xl">
                        風味光譜：從「生鐵」到「熟鐵」
                    </h5>
                    <div className="space-y-4 mb-8">
                        <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-emerald-400 shadow-sm">
                            <strong className="text-emerald-800 text-xl block mb-2">清香型 (輕焙火 / 生鐵)</strong>
                            <p className="text-base text-stone-600 leading-relaxed">
                                現代流行風格。最大限度保留了品種本身的「蘭花香」，茶湯清爽鮮活，刺激性較強，「弱果酸」也最為明顯。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-amber-500 shadow-sm">
                            <strong className="text-amber-800 text-xl block mb-2">濃香型 (中焙火 / 熟鐵)</strong>
                            <p className="text-base text-stone-600 leading-relaxed">
                                經過中等程度烘焙，花香轉化為熟果香、蜜糖香。茶湯口感更加順滑、飽滿，火工與茶質達到微妙平衡。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-stone-700 shadow-sm">
                            <strong className="text-stone-800 text-xl block mb-2">傳統型 (重焙火 / 炭焙)</strong>
                            <p className="text-base text-stone-600 leading-relaxed">
                                最能體現醇厚底蘊。長時間文火慢焙下，香氣深化為濃郁的焦糖香、炒米香甚至堅果香。弱果酸完全融入茶湯化為溫潤質地，暖胃生津。
                            </p>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto rounded-xl border border-stone-200 mb-8 bg-white">
                        <table className="w-full text-left text-base md:text-lg">
                            <thead className="bg-stone-100 text-stone-700 font-bold uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">焙火程度</th>
                                    <th className="px-6 py-4">核心香氣</th>
                                    <th className="px-6 py-4">滋味口感</th>
                                    <th className="px-6 py-4">湯色</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                <tr className="bg-white hover:bg-stone-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-emerald-700">清香型</td>
                                    <td className="px-6 py-4">鮮爽蘭花、清雅花香</td>
                                    <td className="px-6 py-4">鮮爽輕盈，弱果酸明顯</td>
                                    <td className="px-6 py-4">金黃透亮</td>
                                </tr>
                                <tr className="bg-white hover:bg-stone-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-amber-700">濃香型</td>
                                    <td className="px-6 py-4">熟果、蜜糖、焦糖</td>
                                    <td className="px-6 py-4">飽滿順滑，甘潤度佳</td>
                                    <td className="px-6 py-4">琥珀色</td>
                                </tr>
                                <tr className="bg-white hover:bg-stone-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-stone-700">傳統型</td>
                                    <td className="px-6 py-4">炒米、堅果、木質火工</td>
                                    <td className="px-6 py-4">厚實溫潤，喉韻深長</td>
                                    <td className="px-6 py-4">深琥珀色 (油潤)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-stone-900 border-stone-800 text-stone-300 p-6 rounded-xl">
                        <strong className="text-white text-lg block mb-2">超越香氣：「厚度」的誕生</strong>
                        <p className="leading-relaxed">
                            焙火賦予的不僅是香氣轉變，更是一種獨特的口感——「厚度」 (Thickness)。優質熟鐵觀音的茶湯在口中會有飽滿、紮實的質感，彷彿絲綢般滑過舌面，這份厚實茶感正是老茶客鍾情的原因。
                        </p>
                    </div>
                </section>

                {/* Section 3: Guanyin Rhyme */}
                <section className="bg-gradient-to-br from-stone-50 to-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
                        <div className="p-3 bg-amber-100 text-amber-800 rounded-xl">
                            <Feather size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-stone-900">解構「觀音韻」</h3>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 mb-12 items-start">
                        <div className="flex-1">
                            <p className="mb-6 leading-relaxed text-stone-700 text-lg">
                                在茶的世界裡，有些詞彙超越了味覺，成為境界的代名詞。「觀音韻」便是如此。它如同一首餘音繞樑的樂曲，只可意會，難以言傳。這份神韻的誕生，是三大關鍵要素完美協奏的結晶：
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center shrink-0 text-stone-700 font-bold border border-stone-300 text-xl">1</div>
                                    <div>
                                        <strong className="text-stone-900 text-lg">風土 (Terroir)</strong>
                                        <p className="text-stone-600 mt-1">唯有安溪核心產區獨特的地理環境與土壤，才能孕育富含芳香物質的茶菁。</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center shrink-0 text-stone-700 font-bold border border-stone-300 text-xl">2</div>
                                    <div>
                                        <strong className="text-stone-900 text-lg">品種 (Cultivar)</strong>
                                        <p className="text-stone-600 mt-1">必須是血統純正的「紅心歪尾桃」，其基因攜帶著構成音韻的關鍵物質。</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center shrink-0 text-stone-700 font-bold border border-stone-300 text-xl">3</div>
                                    <div>
                                        <strong className="text-stone-900 text-lg">工藝 (Craftsmanship)</strong>
                                        <p className="text-stone-600 mt-1">仰賴製茶師對傳統工藝的精準掌握，喚醒並定格茶葉內在潛力。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white p-4 rounded-2xl shadow-lg border border-stone-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/images/featured/tieguanyin/red_heart_cultivar_leaf.png"
                                    alt="Red Heart Crooked Tail Peach Cultivar"
                                    className="w-full rounded-xl"
                                />
                                <p className="text-center text-sm text-stone-400 mt-3 font-serif italic">Red Heart Crooked Tail Peach</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-md">
                        <div className="flex items-center gap-3 mb-6">
                            <Sprout className="text-emerald-600" size={28} />
                            <h4 className="text-2xl font-bold text-stone-800">味蕾的詩篇：弱果酸</h4>
                        </div>

                        <p className="mb-6 leading-relaxed text-stone-700 text-lg">
                            提及「酸」，初學者常聯想到負面風味。然而在頂級鐵觀音中，一抹稍縱即逝、純淨明亮的<span className="font-bold text-emerald-700">「弱果酸」</span>（茶人稱「觀音酸」），卻是其出身與工藝的關鍵密碼。
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                <h6 className="font-bold text-stone-900 mb-3 text-lg">酸韻起源</h6>
                                <p className="text-base text-stone-600 leading-relaxed">
                                    源自關鍵的<strong>「搖青」</strong>工藝。葉片邊緣細胞在碰撞摩擦中輕微破損，啟動精密酶促氧化，轉化生成帶鮮味的琥珀酸與柔和蘋果酸。這與醋的尖銳酸感截然不同，更近於未熟水果的清新酸香。
                                </p>
                            </div>
                            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                <h6 className="font-bold text-stone-900 mb-3 text-lg">鑑賞重點</h6>
                                <ul className="text-base text-stone-600 space-y-3">
                                    <li className="flex items-center gap-3"><div className="bg-emerald-100 p-1 rounded-full"><Award size={14} className="text-emerald-600" /></div> <strong>潔淨感：</strong>純淨無雜味</li>
                                    <li className="flex items-center gap-3"><div className="bg-emerald-100 p-1 rounded-full"><Award size={14} className="text-emerald-600" /></div> <strong>生津感：</strong>迅速刺激唾液，兩頰生津</li>
                                    <li className="flex items-center gap-3"><div className="bg-emerald-100 p-1 rounded-full"><Award size={14} className="text-emerald-600" /></div> <strong>協調感：</strong>與醇厚甘甜完美融合</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Tasting Guide */}
                <section className="bg-stone-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-600 rounded-full blur-[150px]"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-10 border-b border-stone-700 pb-6">
                            <div className="p-3 bg-stone-800 text-amber-500 rounded-xl">
                                <Coffee size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white">品鑑指南：掌握觀音韻的四步實踐</h3>
                        </div>

                        <p className="mb-12 leading-relaxed text-stone-300 text-lg max-w-3xl">
                            理解理論後，讓我們將知識付諸實踐。這套完整的品鑑流程，能幫助您捕捉茶湯中的細微變化，將感官體驗系統化。
                        </p>

                        <div className="grid lg:grid-cols-2 gap-12 mb-12">
                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-stone-800 text-amber-500 flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg border border-stone-700 group-hover:border-amber-500/50 transition-colors">1</div>
                                    <div>
                                        <h5 className="font-bold text-white text-xl mb-2">觀其形，聞其乾香</h5>
                                        <p className="text-stone-400 text-base leading-relaxed">
                                            欣賞緊結勻整的球形外觀。清香型呈鮮潤「砂綠色」，傳統焙火則顯油潤「烏褐色」。輕搖後湊近鼻尖：<br />
                                            <span className="italic text-amber-200/70">是清揚的花香？還是甜潤的焦糖氣息？這是品質的最初承諾。</span>
                                        </p>
                                    </div>
                                </div>
                                {/* Step 2 */}
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-stone-800 text-amber-500 flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg border border-stone-700 group-hover:border-amber-500/50 transition-colors">2</div>
                                    <div>
                                        <h5 className="font-bold text-white text-xl mb-2">察其色，品其湯</h5>
                                        <p className="text-stone-400 text-base leading-relaxed mb-3">
                                            以「啜飲」方式讓茶湯霧化覆蓋口腔。專注感受：
                                        </p>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className="bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 text-stone-300"><strong>初感：</strong>明亮弱果酸？</span>
                                            <span className="bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 text-stone-300"><strong>中感：</strong>輕盈或厚實？</span>
                                            <span className="bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 text-stone-300"><strong>尾感：</strong>花香或火香？</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-stone-800 text-amber-500 flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg border border-stone-700 group-hover:border-amber-500/50 transition-colors">3</div>
                                    <div>
                                        <h5 className="font-bold text-white text-xl mb-2">感其韻，體其甘</h5>
                                        <p className="text-stone-400 text-base leading-relaxed">
                                            茶湯下喉後，真正的「觀音韻」才現身。閉眼感受：喉深處是否有清甜回返（回甘）？口腔是否依然殘留香氣（留香）？
                                        </p>
                                    </div>
                                </div>
                                {/* Step 4 */}
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-stone-800 text-amber-500 flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg border border-stone-700 group-hover:border-amber-500/50 transition-colors">4</div>
                                    <div>
                                        <h5 className="font-bold text-white text-xl mb-2">審其底，識其本</h5>
                                        <p className="text-stone-400 text-base leading-relaxed">
                                            觀察葉底。優質者應柔軟、肥厚富彈性。若見<strong>「綠葉紅鑲邊」</strong>（主體綠、邊緣紅），便是發酵工藝掌控得當的最佳證明。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                        <Coffee size={120} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-6">器為茶之父：適配器皿</h4>

                                    <p className="mb-8 leading-relaxed text-stone-400">
                                        古人云：「器為茶之父」。不同的鐵觀音風格，需要不同的器皿來喚醒其最佳狀態。
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-xl bg-stone-900 border border-stone-600 flex items-center justify-center shrink-0 shadow-inner">
                                                <Flame size={32} className="text-amber-600" />
                                            </div>
                                            <div>
                                                <h6 className="font-bold text-amber-200 text-lg">傳統焙火 (熟鐵) — 紫砂壺</h6>
                                                <p className="text-sm text-stone-400 mt-1">壁厚、疏鬆。吸附火氣，激發深層香氣，使茶湯圓潤。</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-xl bg-stone-200 border border-stone-400 flex items-center justify-center shrink-0 shadow-inner">
                                                <Droplets size={32} className="text-sky-600" />
                                            </div>
                                            <div>
                                                <h6 className="font-bold text-white text-lg">清香型 (生鐵) — 白瓷蓋碗</h6>
                                                <p className="text-sm text-stone-400 mt-1">質密、不吸香。忠實反映清澈色澤與純淨花香。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 rounded-2xl overflow-hidden border border-stone-600">
                                        <img
                                            src="/images/featured/tieguanyin/yixing_vs_porcelain_art.png"
                                            alt="Yixing Teapot vs Porcelain Gaiwan"
                                            className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Sections: Origin & Brewing (Existing content slightly adjusted) */}
                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div>
                        <h4 className="font-bold text-stone-800 text-xl mb-2">結語：在複雜中尋找珍貴</h4>
                        <p className="text-stone-600 max-w-2xl leading-relaxed">
                            品飲一杯正欉鐵觀音，如同品讀一段豐富的人生。它的苦、澀、酸、甜交織，或許不是第一口就討喜的「美味」，但其背後的歷史脈絡與深厚韻味，使其成為一份珍貴的遺產，值得靜心細品。
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="text-right">
                            <div className="text-xs text-stone-400 uppercase tracking-widest mb-1">Recommended</div>
                            <div className="font-bold text-2xl text-stone-900">100°C 沸水</div>
                            <div className="text-sm text-amber-600 font-bold">重口味・重喉韻</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StarIcon({ size, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
